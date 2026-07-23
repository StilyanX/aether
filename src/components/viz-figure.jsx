// VizFigure - the single viz wrapper for learning content.
// Dumb shell: knows about size, aspect, frame, and the title.
// Knows NOTHING about which engine renders inside.
//
// Spec:
// - 3 sizes: compact (600px), body (1200px, default), wide (full content area)
// - aspect ratio defaults to 16/9 - prevents reflow on engine mount
// - aspect="auto" drops the aspect-ratio constraint and lets the child size
//   itself (use for tables, lists, content-sized markup)
// - title renders in a header strip above the frame
// - frame={false} drops the border, background, corners, and header
// - figures NEVER exceed the text content area's horizontal extent
// - fullscreen toggle in the header's top-right; inside fullscreen the viz
//   can be zoomed via +/-/reset buttons or scroll wheel, and panned by drag.

import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './viz-figure.css'
import { VizControlsCtx } from './viz-controls-ctx'

const ZOOM_MIN = 1
const ZOOM_MAX = 6
const ZOOM_STEP = 1.25
const WHEEL_SENSITIVITY = 0.0015
const PAN_STEP = 60

export function VizFigure({ size = 'body', aspect = '16/9', frame = true, id, title, children }) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const figureRef = useRef(null)
  const frameRef = useRef(null)
  const dragRef = useRef(null)
  const viewRef = useRef({ zoom: 1, pan: { x: 0, y: 0 } })
  const isAuto = aspect === 'auto'
  const [controlsBarEl, setControlsBarEl] = useState(null)
  const controlsBarRef = useCallback(node => setControlsBarEl(node), [])

  // Keep ref in sync with state so handlers bound on fullscreen mount
  // (Escape, etc.) read the live view instead of stale closure values.
  viewRef.current.zoom = zoom
  viewRef.current.pan = pan

  const clampZoom = useCallback(z => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z)), [])

  const resetView = useCallback(() => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    if (!isFullscreen) {
      resetView()
      return
    }
    // Mafs hardcodes its SVG preserveAspectRatio="xMidYMin" which top-aligns
    // content. In fullscreen we (1) swap to "xMidYMid meet" so the viewBox
    // centers both axes inside the now-huge SVG, then (2) shift each SVG's
    // viewBox so its math content's bounding box is centered on the viewBox
    // center. Otherwise the content (typically anchored at origin with
    // vectors pointing up-right) sits in the lower-left of the visible area.
    // Restore both attributes on exit so inline rendering is untouched.
    const restoreAttr = []
    const restoreLineAttrs = []
    const restoreClipPaths = []
    const clonedLines = []
    const TARGET_PAR = 'xMidYMid meet'

    // Mafs hardcodes preserveAspectRatio="xMidYMin" on its SVG (top-aligned)
    // and React reconciliation re-asserts that value across re-renders the
    // user can't anticipate (ResizeObserver fires, window resizes, etc.).
    // MutationObserver was attempted but loses the race when Mafs creates a
    // brand-new SVG element on unmount/remount. Brute-force re-assert PAR on
    // every animation frame while fullscreen is open. Cheap (1 attribute
    // check per .MafsView per frame, ~60Hz) and guarantees the swap sticks.
    let parLockRaf = 0
    const ensurePar = () => {
      const fe = frameRef.current
      if (fe) {
        fe.querySelectorAll('.MafsView svg').forEach(svg => {
          if (svg.getAttribute('preserveAspectRatio') !== TARGET_PAR) {
            svg.setAttribute('preserveAspectRatio', TARGET_PAR)
          }
        })
      }
      parLockRaf = requestAnimationFrame(ensurePar)
    }
    parLockRaf = requestAnimationFrame(ensurePar)

    let parRaf = requestAnimationFrame(() => {
      parRaf = requestAnimationFrame(() => {
        const frameEl = frameRef.current
        if (!frameEl) return
        frameEl.querySelectorAll('.MafsView svg').forEach(svg => {
          restoreAttr.push([
            svg,
            svg.getAttribute('preserveAspectRatio'),
            svg.getAttribute('viewBox')
          ])
          svg.setAttribute('preserveAspectRatio', TARGET_PAR)

          // ViewBox is left at its authored value. PAR="xMidYMid meet" on the
          // original viewBox is what produces the centering: the entire math
          // viewBox fits inside the SVG element with letterbox margins on
          // whichever axis the aspects disagree on, and content is centered
          // on both axes. Earlier versions shifted the viewBox and applied a
          // content-scale transform, which drifted content to a corner when
          // the viewBox aspect did not match the viewport aspect.

          // Pixel dimensions of the SVG element - used below by the grid
          // extension to identify which lines span enough of the viewport
          // to count as the cartesian grid.
          const svgRect2 = svg.getBoundingClientRect()
          if (svgRect2.width <= 0 || svgRect2.height <= 0) return

          // Mafs clips its content group to the original math viewBox via a
          // clipPath. That clipping kills any extended grid lines outside the
          // original area. Remove all clip-path references so extensions show.
          svg.querySelectorAll('[clip-path]').forEach(el => {
            const orig = el.getAttribute('clip-path')
            restoreClipPaths.push([el, orig])
            el.removeAttribute('clip-path')
          })

          // Mafs's grid is a SVG <pattern> tiled into a <rect>. Find that
          // grid rect (fill="url(#cartesian-...)") and expand its dimensions
          // so the pattern tiles across the whole viewBox. Restore on exit.
          svg.querySelectorAll('rect[fill^="url("]').forEach(rect => {
            const x = parseFloat(rect.getAttribute('x'))
            const y = parseFloat(rect.getAttribute('y'))
            const width = parseFloat(rect.getAttribute('width'))
            const height = parseFloat(rect.getAttribute('height'))
            if (
              !Number.isFinite(x) ||
              !Number.isFinite(y) ||
              !Number.isFinite(width) ||
              !Number.isFinite(height)
            )
              return
            restoreLineAttrs.push([rect, 'x', String(x)])
            restoreLineAttrs.push([rect, 'y', String(y)])
            restoreLineAttrs.push([rect, 'width', String(width)])
            restoreLineAttrs.push([rect, 'height', String(height)])
            const cx = x + width / 2
            const cy = y + height / 2
            const newW = width * 20
            const newH = height * 20
            rect.setAttribute('x', String(cx - newW / 2))
            rect.setAttribute('y', String(cy - newH / 2))
            rect.setAttribute('width', String(newW))
            rect.setAttribute('height', String(newH))
          })

          // Extend Mafs's origin (x-axis + y-axis) lines so they reach across
          // the expanded viewBox. They live inside a <g> with stroke set to
          // the origin color CSS variable; the x-axis is the horizontal line
          // and the y-axis is the vertical line.
          svg.querySelectorAll('g[stroke="var(--mafs-origin-color)"] line').forEach(line => {
            const x1 = parseFloat(line.getAttribute('x1'))
            const y1 = parseFloat(line.getAttribute('y1'))
            const x2 = parseFloat(line.getAttribute('x2'))
            const y2 = parseFloat(line.getAttribute('y2'))
            if (
              !Number.isFinite(x1) ||
              !Number.isFinite(y1) ||
              !Number.isFinite(x2) ||
              !Number.isFinite(y2)
            )
              return
            restoreLineAttrs.push([line, 'x1', String(x1)])
            restoreLineAttrs.push([line, 'y1', String(y1)])
            restoreLineAttrs.push([line, 'x2', String(x2)])
            restoreLineAttrs.push([line, 'y2', String(y2)])
            if (Math.abs(y1 - y2) < 0.01) {
              const xMin = Math.min(x1, x2)
              const xMax = Math.max(x1, x2)
              const range = xMax - xMin || 1
              line.setAttribute('x1', String(xMin - range * 10))
              line.setAttribute('x2', String(xMax + range * 10))
            } else if (Math.abs(x1 - x2) < 0.01) {
              const yMin = Math.min(y1, y2)
              const yMax = Math.max(y1, y2)
              const range = yMax - yMin || 1
              line.setAttribute('y1', String(yMin - range * 10))
              line.setAttribute('y2', String(yMax + range * 10))
            }
          })
          const allLines = Array.from(svg.querySelectorAll('line'))
          const vGrid = []
          const hGrid = []
          allLines.forEach(l => {
            const x1 = parseFloat(l.getAttribute('x1'))
            const y1 = parseFloat(l.getAttribute('y1'))
            const x2 = parseFloat(l.getAttribute('x2'))
            const y2 = parseFloat(l.getAttribute('y2'))
            if (
              !Number.isFinite(x1) ||
              !Number.isFinite(y1) ||
              !Number.isFinite(x2) ||
              !Number.isFinite(y2)
            )
              return
            let lineRect
            try {
              lineRect = l.getBoundingClientRect()
            } catch {
              return
            }
            // Vertical (axis-aligned in attrs, tall when rendered)
            if (Math.abs(x1 - x2) < 0.5 && lineRect.height >= svgRect2.height * 0.4) {
              vGrid.push({ el: l, x: x1, origY1: y1, origY2: y2 })
            } else if (Math.abs(y1 - y2) < 0.5 && lineRect.width >= svgRect2.width * 0.4) {
              hGrid.push({ el: l, y: y1, origX1: x1, origX2: x2 })
            }
          })
          vGrid.sort((a, b) => a.x - b.x)
          hGrid.sort((a, b) => a.y - b.y)

          // Extend in MATH UNITS (the line attrs' native space). Existing
          // lines get their range multiplied 10x. Clones extend 30 spacings
          // on each side. The viewBox will clip whatever extends past it,
          // so generous extension is safe.
          if (vGrid.length >= 2) {
            const spacing = vGrid[1].x - vGrid[0].x
            if (spacing > 0) {
              const template = vGrid[0].el
              const tplY1 = parseFloat(template.getAttribute('y1'))
              const tplY2 = parseFloat(template.getAttribute('y2'))
              const yMin = Math.min(tplY1, tplY2)
              const yMax = Math.max(tplY1, tplY2)
              const yRange = yMax - yMin
              const extYMin = yMin - yRange * 5
              const extYMax = yMax + yRange * 5
              vGrid.forEach(({ el, origY1, origY2 }) => {
                restoreLineAttrs.push([el, 'y1', String(origY1)])
                restoreLineAttrs.push([el, 'y2', String(origY2)])
                el.setAttribute('y1', String(extYMin))
                el.setAttribute('y2', String(extYMax))
              })
              const parent = template.parentNode
              const minX = vGrid[0].x
              const maxX = vGrid[vGrid.length - 1].x
              for (let i = 1; i <= 30; i++) {
                for (const [refX, sign] of [
                  [minX, -1],
                  [maxX, 1]
                ]) {
                  const x = refX + sign * i * spacing
                  const clone = template.cloneNode(false)
                  clone.setAttribute('x1', String(x))
                  clone.setAttribute('x2', String(x))
                  clone.setAttribute('y1', String(extYMin))
                  clone.setAttribute('y2', String(extYMax))
                  clone.setAttribute('data-vizfig-extended', '1')
                  parent.insertBefore(clone, template)
                  clonedLines.push(clone)
                }
              }
            }
          }

          if (hGrid.length >= 2) {
            const spacing = hGrid[1].y - hGrid[0].y
            if (spacing > 0) {
              const template = hGrid[0].el
              const tplX1 = parseFloat(template.getAttribute('x1'))
              const tplX2 = parseFloat(template.getAttribute('x2'))
              const xMin = Math.min(tplX1, tplX2)
              const xMax = Math.max(tplX1, tplX2)
              const xRange = xMax - xMin
              const extXMin = xMin - xRange * 5
              const extXMax = xMax + xRange * 5
              hGrid.forEach(({ el, origX1, origX2 }) => {
                restoreLineAttrs.push([el, 'x1', String(origX1)])
                restoreLineAttrs.push([el, 'x2', String(origX2)])
                el.setAttribute('x1', String(extXMin))
                el.setAttribute('x2', String(extXMax))
              })
              const parent = template.parentNode
              const minY = hGrid[0].y
              const maxY = hGrid[hGrid.length - 1].y
              for (let i = 1; i <= 30; i++) {
                for (const [refY, sign] of [
                  [minY, -1],
                  [maxY, 1]
                ]) {
                  const y = refY + sign * i * spacing
                  const clone = template.cloneNode(false)
                  clone.setAttribute('y1', String(y))
                  clone.setAttribute('y2', String(y))
                  clone.setAttribute('x1', String(extXMin))
                  clone.setAttribute('x2', String(extXMax))
                  clone.setAttribute('data-vizfig-extended', '1')
                  parent.insertBefore(clone, template)
                  clonedLines.push(clone)
                }
              }
            }
          }
        })
      })
    })
    const onKey = e => {
      if (e.key === 'Escape') {
        // Single press closes fullscreen. Registered at capture phase so it
        // fires before any topic-level ESC listener (e.g. reader-panel close,
        // sidebar close) - stopImmediatePropagation halts the cascade so ESC
        // doesn't ALSO exit the surrounding learning component.
        e.stopPropagation()
        e.stopImmediatePropagation()
        e.preventDefault()
        setIsFullscreen(false)
      } else if (e.key === '+' || e.key === '=') {
        e.stopPropagation()
        setZoom(z => clampZoom(z * ZOOM_STEP))
      } else if (e.key === '-' || e.key === '_') {
        e.stopPropagation()
        setZoom(z => clampZoom(z / ZOOM_STEP))
      } else if (e.key === '0') {
        e.stopPropagation()
        resetView()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        e.stopPropagation()
        setPan(p => ({ ...p, x: p.x + PAN_STEP }))
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        e.stopPropagation()
        setPan(p => ({ ...p, x: p.x - PAN_STEP }))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        e.stopPropagation()
        setPan(p => ({ ...p, y: p.y + PAN_STEP }))
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        e.stopPropagation()
        setPan(p => ({ ...p, y: p.y - PAN_STEP }))
      }
    }
    document.body.classList.add('vizfig-fullscreen-lock')
    // capture: true → runs before any document/window bubble listener.
    document.addEventListener('keydown', onKey, true)
    return () => {
      cancelAnimationFrame(parRaf)
      cancelAnimationFrame(parLockRaf)
      clonedLines.forEach(el => el.remove())
      restoreLineAttrs.forEach(([el, attr, val]) => el.setAttribute(attr, val))
      restoreClipPaths.forEach(([el, val]) => {
        if (val) el.setAttribute('clip-path', val)
      })
      restoreAttr.forEach(([svg, par, vb]) => {
        if (par) svg.setAttribute('preserveAspectRatio', par)
        else svg.removeAttribute('preserveAspectRatio')
        if (vb) svg.setAttribute('viewBox', vb)
      })
      document.body.classList.remove('vizfig-fullscreen-lock')
      document.removeEventListener('keydown', onKey, true)
    }
  }, [isFullscreen, clampZoom, resetView])

  // Wheel-to-zoom anchored at the cursor. Attached via non-passive native
  // listener so we can call preventDefault() to stop the page from scrolling
  // when fullscreen is closed (React's onWheel is passive by default in v17+).
  useEffect(() => {
    if (!isFullscreen) return
    const frameEl = frameRef.current
    if (!frameEl) return
    const onWheel = e => {
      if (e.target.closest('canvas')) return
      e.preventDefault()
      // Zoom around the viewport center (no cursor-anchored pan). Without
      // this, zooming at the edges of the viewport shifts the content
      // outside, exposing black bars.
      setZoom(prev => clampZoom(prev * Math.exp(-e.deltaY * WHEEL_SENSITIVITY)))
    }
    frameEl.addEventListener('wheel', onWheel, { passive: false })
    return () => frameEl.removeEventListener('wheel', onWheel)
  }, [isFullscreen, clampZoom])

  const onPointerDown = e => {
    if (!isFullscreen) return
    if (e.button !== 0) return
    // Let interactive children (sliders, buttons, links) handle their own
    // pointer events. Stealing pointer capture for pan hijacks the slider
    // thumb mid-drag.
    if (e.target.closest('input, button, a, select, textarea, label, .viz-range, canvas')) return
    dragRef.current = { startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = e => {
    const d = dragRef.current
    if (!d) return
    setPan({ x: d.panX + (e.clientX - d.startX), y: d.panY + (e.clientY - d.startY) })
  }
  const onPointerUp = e => {
    if (!dragRef.current) return
    dragRef.current = null
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {}
  }

  const figureClass = ['vizfig', `vizfig--${size}`, isFullscreen && 'vizfig--fullscreen']
    .filter(Boolean)
    .join(' ')
  const frameClass = [
    'vizfig-frame',
    !frame && 'vizfig-frame--bare',
    isAuto && 'vizfig-frame--auto',
    isFullscreen && 'vizfig-frame--zoomable'
  ]
    .filter(Boolean)
    .join(' ')
  const style = isAuto ? undefined : { '--vizfig-aspect': aspect }

  // Zoom/pan transform applied to this wrapper only. Slider, PlayPause, and
  // Toggle always portal out of this wrapper into .vizfig-controls-bar (a flex
  // sibling outside both the transform layer and the frame's overflow:hidden
  // aspect box) via VizControlsCtx. Rendered inline they would be clipped by
  // the frame at every size except fullscreen.
  const contentStyle = isFullscreen
    ? { transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }
    : undefined

  const figure = (
    <figure ref={figureRef} className={figureClass} style={style}>
      {frame && (
        <header className="vizfig-header">
          {id && <span className="vizfig-id">{id}</span>}
          {title && <span className="vizfig-title">{title}</span>}
          {isFullscreen && (
            <div className="vizfig-zoom-group">
              <button
                type="button"
                className="vizfig-icon-btn"
                aria-label="Zoom out"
                onClick={() => setZoom(z => clampZoom(z / ZOOM_STEP))}
              >
                <ZoomOutIcon />
              </button>
              <button
                type="button"
                className="vizfig-icon-btn vizfig-zoom-reset"
                aria-label="Reset zoom"
                onClick={resetView}
                title="Reset zoom"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                type="button"
                className="vizfig-icon-btn"
                aria-label="Zoom in"
                onClick={() => setZoom(z => clampZoom(z * ZOOM_STEP))}
              >
                <ZoomInIcon />
              </button>
            </div>
          )}
          <button
            type="button"
            className="vizfig-icon-btn"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            aria-pressed={isFullscreen}
            onClick={() => setIsFullscreen(v => !v)}
          >
            <FullscreenIcon expanded={isFullscreen} />
          </button>
        </header>
      )}
      <div
        ref={frameRef}
        className={frameClass}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDragStart={e => {
          // Images have native drag-and-drop; a press-drag fires dragstart,
          // which cancels our pointer capture and kills the pan. Suppress it
          // in fullscreen so drag-to-pan works on <img> content too.
          if (isFullscreen) e.preventDefault()
        }}
      >
        <div className="vizfig-frame-content" style={contentStyle}>
          <VizControlsCtx.Provider value={controlsBarEl}>{children}</VizControlsCtx.Provider>
        </div>
      </div>
      <div className="vizfig-controls-bar" ref={controlsBarRef} />
    </figure>
  )

  // Portal to <body> while fullscreen so `position: fixed` escapes any
  // ancestor containing block (page-transition transforms, etc.).
  return isFullscreen ? createPortal(figure, document.body) : figure
}

function FullscreenIcon({ expanded }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      {expanded ? (
        <>
          <path d="M 6 1 L 6 6 L 1 6" />
          <path d="M 10 1 L 10 6 L 15 6" />
          <path d="M 6 15 L 6 10 L 1 10" />
          <path d="M 10 15 L 10 10 L 15 10" />
        </>
      ) : (
        <>
          <path d="M 1 5 L 1 1 L 5 1" />
          <path d="M 11 1 L 15 1 L 15 5" />
          <path d="M 1 11 L 1 15 L 5 15" />
          <path d="M 11 15 L 15 15 L 15 11" />
        </>
      )}
    </svg>
  )
}

function ZoomInIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M 2 8 L 14 8" />
      <path d="M 8 2 L 8 14" />
    </svg>
  )
}

function ZoomOutIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M 2 8 L 14 8" />
    </svg>
  )
}
