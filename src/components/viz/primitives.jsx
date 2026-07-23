// Aether monochrome SVG primitives - replaces Mafs with hand-rolled,
// strict-aesthetic equivalents. Pure #000 bg, opacity-only hierarchy.
// Coords: math (x right, y up). Internally flips y for SVG.

import React from 'react'
import { createPortal } from 'react-dom'
import { VizControlsCtx } from '../viz-controls-ctx'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import './viz.css'
import { FG, OPACITY } from './theme'
import {
  ARROW_HEAD,
  ARROW_STROKE,
  FONT_FAMILY,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  GRID_STEP,
  LS_COMPACT,
  LS_CONTROL,
  LS_LABEL,
  LS_TIGHT,
  LS_TITLE,
  PLOT_PAD,
  POINT_HANDLE,
  POINT_ORIGIN,
  POINT_STATIC,
  STROKE_EMPHASIS,
  STROKE_GUIDE,
  STROKE_HAIR,
  STROKE_PRIMARY,
  STROKE_SECONDARY,
  TICK_HALF
} from './scale-tokens'

export { FG, OPACITY }

// Low-latency pointer position
// Uses getPredictedEvents (nearest future position) → getCoalescedEvents
// (most recent past sub-frame position) → raw clientX/Y as fallback.
// Initialized once at module load to avoid repeated capability checks.
const _getLatestPointer = (() => {
  const t = new PointerEvent('pointermove')
  if (t.getPredictedEvents && t.getCoalescedEvents) {
    return e => {
      const ev = e.nativeEvent || e
      const pred = ev.getPredictedEvents()
      if (pred.length) return { clientX: pred[0].clientX, clientY: pred[0].clientY }
      const coal = ev.getCoalescedEvents()
      if (coal.length) return coal[coal.length - 1]
      return ev
    }
  }
  if (t.getCoalescedEvents) {
    return e => {
      const ev = e.nativeEvent || e
      const coal = ev.getCoalescedEvents()
      return coal.length ? coal[coal.length - 1] : ev
    }
  }
  return e => e
})()

// Plot context
const PlotContext = React.createContext(null)

export function Plot({
  xRange = [-5, 5],
  yRange = [-5, 5],
  width = 640,
  height: heightIn = 360,
  pad = PLOT_PAD,
  color = 'var(--text-primary)',
  children
}) {
  const height = heightIn
  const [xMin, xMax] = xRange
  const [yMin, yMax] = yRange
  const ctx = React.useMemo(() => {
    const innerW = width - pad * 2
    const innerH = height - pad * 2
    const sx = x => pad + ((x - xMin) / (xMax - xMin)) * innerW
    const sy = y => pad + (1 - (y - yMin) / (yMax - yMin)) * innerH
    const ux = innerW / (xMax - xMin)
    const uy = innerH / (yMax - yMin)
    return { sx, sy, ux, uy, xMin, xMax, yMin, yMax, width, height, pad }
  }, [xMin, xMax, yMin, yMax, width, height, pad])
  return (
    <PlotContext.Provider value={ctx}>
      <svg
        className="viz-plot"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        overflow="hidden"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          margin: '0 auto',
          overflow: 'hidden',
          color: color
        }}
        fontFamily={FONT_FAMILY}
      >
        {children}
      </svg>
    </PlotContext.Provider>
  )
}

export const usePlot = () => React.useContext(PlotContext)

// Axes
export function Axes({
  step = 1,
  showGrid = true,
  showTicks = true,
  showOrigin = true,
  color = FG
}) {
  const p = usePlot()
  const xs = []
  for (let x = Math.ceil(p.xMin / step) * step; x <= p.xMax; x += step) xs.push(+x.toFixed(6))
  const ys = []
  for (let y = Math.ceil(p.yMin / step) * step; y <= p.yMax; y += step) ys.push(+y.toFixed(6))
  const x0 = p.sx(0),
    y0 = p.sy(0)
  return (
    <g>
      {showGrid && (
        <g stroke={color} strokeWidth={STROKE_SECONDARY} opacity={OPACITY.faint * 0.55}>
          {xs.map(x => (
            <line key={`vg${x}`} x1={p.sx(x)} y1={-p.height * 20} x2={p.sx(x)} y2={p.height * 21} />
          ))}
          {ys.map(y => (
            <line key={`hg${y}`} x1={-p.width * 20} y1={p.sy(y)} x2={p.width * 21} y2={p.sy(y)} />
          ))}
        </g>
      )}
      <g stroke={color} strokeWidth={STROKE_SECONDARY} opacity={OPACITY.dim}>
        {p.yMin <= 0 && p.yMax >= 0 && (
          <line x1={-p.width * 20} y1={y0} x2={p.width * 21} y2={y0} />
        )}
        {p.xMin <= 0 && p.xMax >= 0 && (
          <line x1={x0} y1={-p.height * 20} x2={x0} y2={p.height * 21} />
        )}
      </g>
      {showTicks && (
        <g stroke={color} strokeWidth={STROKE_SECONDARY} opacity={OPACITY.dim}>
          {xs.map(x =>
            x !== 0 && p.yMin <= 0 && p.yMax >= 0 ? (
              <line
                key={`xt${x}`}
                x1={p.sx(x)}
                y1={y0 - TICK_HALF}
                x2={p.sx(x)}
                y2={y0 + TICK_HALF}
              />
            ) : null
          )}
          {ys.map(y =>
            y !== 0 && p.xMin <= 0 && p.xMax >= 0 ? (
              <line
                key={`yt${y}`}
                x1={x0 - TICK_HALF}
                y1={p.sy(y)}
                x2={x0 + TICK_HALF}
                y2={p.sy(y)}
              />
            ) : null
          )}
        </g>
      )}
      {showOrigin && p.xMin <= 0 && p.xMax >= 0 && p.yMin <= 0 && p.yMax >= 0 && (
        <circle cx={x0} cy={y0} r={POINT_ORIGIN} fill={color} opacity={OPACITY.dim} />
      )}
    </g>
  )
}

// Grid: background grid lines only (no axes, ticks, origin, or labels).
// Graph-paper backdrop matched to the Mafs cartesian grid (--mafs-line-color is
// base-color at 20%), so it reads as a clearly-visible grid, not a ghost. When
// `step` is omitted it auto-picks a "nice" step per axis (~range/8) so density
// is consistent regardless of the plot's coordinate scale.
function niceGridStep(range) {
  const raw = range / 8
  const pow = Math.pow(10, Math.floor(Math.log10(raw)))
  const n = raw / pow
  const m = n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10
  return m * pow
}
export function Grid({ step, color = FG, opacity = 0.2 }) {
  const p = usePlot()
  const sxu = step || niceGridStep(p.xMax - p.xMin)
  const syu = step || niceGridStep(p.yMax - p.yMin)
  // Tile the grid across 3× the viewBox, aligned to the coordinate origin. The
  // overflow that pokes past the viewBox is clipped to the svg inline (so it
  // simply fills the figure), and allowed to bleed in fullscreen (viz-figure.css
  // sets the .viz-plot overflow visible there) so the grid fills the whole frame
  // even though the viz is max-width-capped, centred, and letterboxed: matching
  // how the Mafs grid fills its frame.
  const dx = sxu * p.ux
  const dy = syu * p.uy
  const x0 = p.sx(0)
  const y0 = p.sy(0)
  const X0 = -p.width,
    X1 = 2 * p.width
  const Y0 = -p.height,
    Y1 = 2 * p.height
  const verts = []
  for (let x = x0 - Math.ceil((x0 - X0) / dx) * dx; x <= X1; x += dx) verts.push(+x.toFixed(2))
  const horizs = []
  for (let y = y0 - Math.ceil((y0 - Y0) / dy) * dy; y <= Y1; y += dy) horizs.push(+y.toFixed(2))
  return (
    <g stroke={color} strokeWidth={STROKE_SECONDARY} opacity={opacity}>
      {verts.map((x, i) => (
        <line key={`v${i}`} x1={x} y1={Y0} x2={x} y2={Y1} />
      ))}
      {horizs.map((y, i) => (
        <line key={`h${i}`} x1={X0} y1={y} x2={X1} y2={y} />
      ))}
    </g>
  )
}

// Parametric
export const Parametric = React.memo(function Parametric({
  xy,
  t = [0, 1],
  samples = 256,
  opacity = OPACITY.fg,
  dash,
  strokeWidth = STROKE_SECONDARY,
  color = FG
}) {
  const p = usePlot()
  const [t0, t1] = t
  const segs = []
  let cur = ''
  for (let i = 0; i <= samples; i++) {
    const tt = t0 + ((t1 - t0) * i) / samples
    const [x, y] = xy(tt)
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      if (cur) segs.push(cur)
      cur = ''
      continue
    }
    const X = p.sx(x),
      Y = p.sy(y)
    cur += (cur === '' ? 'M' : 'L') + X.toFixed(2) + ' ' + Y.toFixed(2) + ' '
  }
  if (cur) segs.push(cur)
  return (
    <g
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      opacity={opacity}
      strokeDasharray={dash}
    >
      {segs.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </g>
  )
})

export const Polyline = React.memo(function Polyline({
  points,
  opacity = OPACITY.fg,
  dash,
  strokeWidth = STROKE_SECONDARY,
  closed = false,
  fill,
  fillOpacity = 0,
  color = FG
}) {
  const p = usePlot()
  if (points.length < 2) return null
  let d = ''
  points.forEach(([x, y], i) => {
    const X = p ? p.sx(x) : x
    const Y = p ? p.sy(y) : y
    d += (i === 0 ? 'M' : 'L') + X.toFixed(2) + ' ' + Y.toFixed(2) + ' '
  })
  if (closed) d += 'Z'
  return (
    <path
      d={d}
      fill={fill || (fillOpacity ? color : 'none')}
      fillOpacity={fillOpacity}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={dash}
      opacity={opacity}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
})

// Marks
export function Dot({ x, y, r = POINT_STATIC, opacity = OPACITY.fg, fill = true, color = FG }) {
  const p = usePlot()
  return (
    <circle
      cx={p.sx(x)}
      cy={p.sy(y)}
      r={r}
      fill={fill ? color : 'none'}
      stroke={color}
      strokeWidth={STROKE_SECONDARY}
      opacity={opacity}
    />
  )
}

export function CircleSh({
  cx = 0,
  cy = 0,
  r,
  opacity = OPACITY.fg,
  dash,
  fill,
  fillOpacity = 0,
  color = FG
}) {
  const p = usePlot()
  return (
    <circle
      cx={p.sx(cx)}
      cy={p.sy(cy)}
      r={r * p.ux}
      fill={fill || (fillOpacity ? color : 'none')}
      fillOpacity={fillOpacity}
      stroke={color}
      strokeWidth={STROKE_SECONDARY}
      strokeDasharray={dash}
      opacity={opacity}
    />
  )
}

// Arrow with proper arrowhead in screen space
export function Arrow({
  from,
  to,
  opacity = OPACITY.fg,
  head = ARROW_HEAD,
  strokeWidth = ARROW_STROKE,
  dash,
  color = FG
}) {
  const p = usePlot()
  const x1 = p ? p.sx(from[0]) : from[0],
    y1 = p ? p.sy(from[1]) : from[1]
  const x2 = p ? p.sx(to[0]) : to[0],
    y2 = p ? p.sy(to[1]) : to[1]
  const dx = x2 - x1,
    dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len < 0.5) return null
  const ux = dx / len,
    uy = dy / len
  const tx = x2 - ux * head * 0.4
  const ty = y2 - uy * head * 0.4
  const ang = 0.5
  const wx = -ux * head,
    wy = -uy * head
  const wxR = wx * Math.cos(ang) - wy * Math.sin(ang)
  const wyR = wx * Math.sin(ang) + wy * Math.cos(ang)
  const wxL = wx * Math.cos(-ang) - wy * Math.sin(-ang)
  const wyL = wx * Math.sin(-ang) + wy * Math.cos(-ang)
  return (
    <g
      stroke={color}
      strokeWidth={strokeWidth}
      opacity={opacity}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1={x1} y1={y1} x2={tx} y2={ty} strokeDasharray={dash} />
      <polyline points={`${x2 + wxR},${y2 + wyR} ${x2},${y2} ${x2 + wxL},${y2 + wyL}`} />
    </g>
  )
}

// Text labels (math via KaTeX foreignObject)
export function Tex({
  at,
  tex,
  opacity = OPACITY.fg,
  anchor = 'start',
  dy = 0,
  dx = 0,
  size = FONT_TEX,
  color = FG
}) {
  const p = usePlot()
  const [x, y] = at
  const ref = React.useRef(null)
  const timerRef = React.useRef(null)
  const renderedRef = React.useRef(false)
  React.useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const doRender = () => {
      try {
        katex.render(tex, el, { throwOnError: false, displayMode: false })
      } catch {
        el.textContent = tex
      }
    }
    if (!renderedRef.current) {
      // First render: immediate so the element is never blank.
      doRender()
      renderedRef.current = true
    } else {
      // Subsequent changes: debounce so rapid drag doesn't block the JS thread.
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(doRender, 80)
    }
    return () => clearTimeout(timerRef.current)
  }, [tex])
  const px = p.sx(x) + dx
  // Allow vertical room above and below the baseline for tall content (\dfrac, \sqrt of fractions, etc.).
  const above = size * 1.6
  const below = size * 1.6
  const py = p.sy(y) + dy - above
  const foH = above + below
  const minX = p.pad
  const maxX = p.width - p.pad
  let foX, foW
  if (anchor === 'end') {
    foX = minX
    foW = Math.max(20, px - minX)
  } else if (anchor === 'middle') {
    const half = Math.min(px - minX, maxX - px)
    foX = px - half
    foW = Math.max(20, 2 * half)
  } else {
    foX = px
    foW = Math.max(20, maxX - px)
  }
  const justify = anchor === 'end' ? 'flex-end' : anchor === 'middle' ? 'center' : 'flex-start'
  return (
    <foreignObject
      x={foX}
      y={py}
      width={foW}
      height={foH}
      style={{ pointerEvents: 'none', overflow: 'visible' }}
    >
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: justify,
          color: color,
          opacity,
          fontSize: size + 'px',
          lineHeight: 1
        }}
      >
        <span ref={ref} style={{ whiteSpace: 'nowrap' }} />
      </div>
    </foreignObject>
  )
}

// Plain text (uppercase labels)
// Accepts either `at={[x, y]}` (math-coord via Plot context) or `x` + `y`
// (screen-coord, no context required).
export function Label({
  at,
  x,
  y,
  children,
  opacity = OPACITY.dim,
  anchor = 'start',
  dy = 0,
  dx = 0,
  size = FONT_LABEL,
  upper = true,
  weight = 'normal',
  color = FG
}) {
  const p = usePlot()
  let X, Y
  if (at) {
    X = p ? p.sx(at[0]) : at[0]
    Y = p ? p.sy(at[1]) : at[1]
  } else {
    X = x
    Y = y
  }
  return (
    <text
      x={X + dx}
      y={Y + dy}
      fill={color}
      opacity={opacity}
      fontSize={size}
      textAnchor={anchor === 'end' ? 'end' : anchor === 'middle' ? 'middle' : 'start'}
      letterSpacing={LS_LABEL}
      fontWeight={weight}
      style={{
        textTransform: upper ? 'uppercase' : 'none'
      }}
    >
      {children}
    </text>
  )
}

// Slider
export function Slider({
  label,
  value,
  min,
  max,
  step = 0.01,
  onChange,
  format = v => v.toFixed(2)
}) {
  const target = React.useContext(VizControlsCtx)
  const isMath = typeof label === 'string' && label.startsWith('$') && label.endsWith('$')
  const content = (
    <div
      style={{
        marginTop: 16,
        padding: '0 4px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        fontSize: FONT_LABEL,
        letterSpacing: LS_CONTROL,
        textTransform: 'uppercase',
        color: FG
      }}
    >
      <span
        style={{ opacity: OPACITY.dim, minWidth: 60, textTransform: isMath ? 'none' : undefined }}
      >
        {isMath ? <KatexInline tex={label.slice(1, -1)} /> : label}
      </span>
      <input
        type="range"
        className="viz-range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{ flex: 1 }}
      />
      <span
        style={{
          opacity: OPACITY.fg,
          minWidth: 60,
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums'
        }}
      >
        {format(value)}
      </span>
    </div>
  )
  return target ? createPortal(content, target) : content
}

// prefers-reduced-motion
export function useReducedMotion() {
  const [r, setR] = React.useState(() =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const h = e => setR(e.matches)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])
  return r
}

// HOUSE RULE (reduced motion): prefers-reduced-motion suppresses SELF-STARTING
// motion only - a viz that mounts with running=true stays frozen at t=0. The
// moment the caller changes `running` (i.e. the user pressed PLAY/PAUSE), the
// explicit gesture overrides the preference and the animation runs normally.
export function useAnimationTime(running = false, speed = 1) {
  const [t, setT] = React.useState(0)
  const reduced = useReducedMotion()
  const mountRunningRef = React.useRef(running)
  const userActedRef = React.useRef(false)
  if (running !== mountRunningRef.current) userActedRef.current = true
  const frozen = reduced && !userActedRef.current
  React.useEffect(() => {
    if (!running || frozen) return
    let raf = 0
    let t0 = 0
    const loop = ts => {
      if (!t0) t0 = ts
      setT(((ts - t0) / 1000) * speed)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [running, frozen, speed])
  return t
}

// PlayPause control
export function PlayPause({ playing, onToggle, onReset, label = '' }) {
  const target = React.useContext(VizControlsCtx)
  const content = (
    <div
      style={{
        marginTop: 12,
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        fontSize: FONT_SMALL,
        letterSpacing: LS_CONTROL,
        textTransform: 'uppercase',
        color: FG
      }}
    >
      <button
        onClick={onToggle}
        style={{
          background: 'transparent',
          color: FG,
          border: `1px solid ${FG}`,
          borderColor: 'var(--border-default)',
          padding: '6px 14px',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          letterSpacing: 'inherit',
          textTransform: 'inherit'
        }}
      >
        {playing ? '❚❚ pause' : '▶ play'}
      </button>
      {onReset && (
        <button
          onClick={onReset}
          style={{
            background: 'transparent',
            color: FG,
            border: '1px solid var(--border-subtle)',
            padding: '6px 14px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            letterSpacing: 'inherit',
            textTransform: 'inherit',
            opacity: 0.6
          }}
        >
          {'↻ reset'}
        </button>
      )}
      {label && <span style={{ opacity: 0.4, marginLeft: 8 }}>{label}</span>}
    </div>
  )
  return target ? createPortal(content, target) : content
}

// Like Tex but accepts raw SVG pixel coordinates (no Plot context required)
export function TexPx({
  x,
  y,
  tex,
  opacity = OPACITY.fg,
  anchor = 'start',
  size = FONT_TEX,
  width: foW = 200
}) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    if (ref.current) {
      try {
        katex.render(tex, ref.current, { throwOnError: false, displayMode: false })
      } catch {
        ref.current.textContent = tex
      }
    }
  }, [tex])
  const justify = anchor === 'end' ? 'flex-end' : anchor === 'middle' ? 'center' : 'flex-start'
  const foX = anchor === 'end' ? x - foW : anchor === 'middle' ? x - foW / 2 : x
  return (
    <foreignObject
      x={foX}
      y={y - size - 4}
      width={foW}
      height={size * 2.4 + 8}
      style={{ pointerEvents: 'none', overflow: 'visible' }}
    >
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: justify,
          color: FG,
          opacity,
          fontSize: size + 'px',
          lineHeight: 1
        }}
      >
        <span ref={ref} style={{ whiteSpace: 'nowrap' }} />
      </div>
    </foreignObject>
  )
}

// Draggable handle
export function DragHandle({
  x,
  y,
  onChange,
  r = POINT_HANDLE,
  constrain,
  opacity = OPACITY.fg,
  label
}) {
  const p = usePlot()
  const [hover, setHover] = React.useState(false)
  const [drag, setDrag] = React.useState(false)
  const dragRef = React.useRef(false)
  const gRef = React.useRef(null)
  const liveSxy = React.useRef(null)
  const offsetRef = React.useRef({ x: 0, y: 0 })
  // Cached at drag start - avoids layout reflow on every pointermove
  const svgRectRef = React.useRef(null)
  const rafRef = React.useRef(null)
  const pendingOnChange = React.useRef(null)

  const cx = p.sx(x),
    cy = p.sy(y)

  // After every React render, if we're mid-drag, restore the live position.
  React.useLayoutEffect(() => {
    if (dragRef.current && liveSxy.current && gRef.current) {
      gRef.current.setAttribute(
        'transform',
        `translate(${liveSxy.current.sx},${liveSxy.current.sy})`
      )
    }
  })

  const clientToMath = (clientX, clientY) => {
    const rect = svgRectRef.current
    if (!rect) return null
    const lx = (clientX - rect.left) * (p.width / rect.width)
    const ly = (clientY - rect.top) * (p.height / rect.height)
    const innerW = p.width - p.pad * 2
    const innerH = p.height - p.pad * 2
    return {
      x: p.xMin + ((lx - p.pad) / innerW) * (p.xMax - p.xMin),
      y: p.yMin + (1 - (ly - p.pad) / innerH) * (p.yMax - p.yMin)
    }
  }

  const onPointerDown = e => {
    e.stopPropagation()
    e.currentTarget.setPointerCapture(e.pointerId)
    dragRef.current = true
    setDrag(true)
    svgRectRef.current = e.currentTarget.ownerSVGElement.getBoundingClientRect()
    const m = clientToMath(e.clientX, e.clientY)
    offsetRef.current = m ? { x: x - m.x, y: y - m.y } : { x: 0, y: 0 }
  }
  const onPointerMove = e => {
    if (!dragRef.current) return
    const p2 = _getLatestPointer(e)
    const m = clientToMath(p2.clientX, p2.clientY)
    if (!m) return
    let nx = m.x + offsetRef.current.x
    let ny = m.y + offsetRef.current.y
    if (constrain) [nx, ny] = constrain(nx, ny)
    nx = Math.max(p.xMin, Math.min(p.xMax, nx))
    ny = Math.max(p.yMin, Math.min(p.yMax, ny))
    const sx = p.sx(nx),
      sy = p.sy(ny)
    liveSxy.current = { sx, sy }
    // Handle circle: direct DOM, every event - never touches React
    if (gRef.current) gRef.current.setAttribute('transform', `translate(${sx},${sy})`)
    // Reactive elements (curves, arrows): one React render per frame max.
    // startTransition marks the re-render as interruptible - pointer events
    // always preempt it, so the JS thread never blocks on curve redraws.
    pendingOnChange.current = [nx, ny]
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        if (pendingOnChange.current) {
          React.startTransition(() => onChange(...pendingOnChange.current))
          pendingOnChange.current = null
        }
      })
    }
  }
  const onPointerUp = e => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    // Flush final position so state is exactly where the handle was released
    if (pendingOnChange.current) {
      onChange(...pendingOnChange.current)
      pendingOnChange.current = null
    }
    liveSxy.current = null
    dragRef.current = false
    svgRectRef.current = null
    offsetRef.current = { x: 0, y: 0 }
    setDrag(false)
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      /* noop */
    }
  }
  return (
    <g ref={gRef} transform={`translate(${cx},${cy})`}>
      <circle
        cx={0}
        cy={0}
        r={r + 16}
        fill="transparent"
        stroke="none"
        style={{ cursor: drag ? 'grabbing' : 'grab', touchAction: 'none' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      />
      <circle
        cx={0}
        cy={0}
        r={r}
        fill={FG}
        fillOpacity={hover || drag ? 1 : 0.85}
        stroke={FG}
        strokeWidth={STROKE_SECONDARY}
        opacity={opacity}
        style={{ pointerEvents: 'none' }}
      />
      <circle
        cx={0}
        cy={0}
        r={r + 4}
        fill="none"
        stroke={FG}
        strokeWidth={STROKE_SECONDARY}
        opacity={hover || drag ? 0.4 : 0}
        style={{ pointerEvents: 'none' }}
      />
      {label &&
        (label.startsWith('$') && label.endsWith('$') ? (
          <foreignObject
            x={r + 6}
            y={-(r + 4) - 14}
            width={80}
            height={20}
            style={{ pointerEvents: 'none', overflow: 'visible' }}
          >
            <KatexInline
              tex={label.slice(1, -1)}
              style={{ color: FG, opacity: 0.7, fontSize: FONT_LABEL }}
            />
          </foreignObject>
        ) : (
          <text
            x={r + 6}
            y={-(r + 4)}
            fill={FG}
            opacity={0.7}
            fontSize={FONT_SMALL}
            style={{
              pointerEvents: 'none',
              letterSpacing: LS_CONTROL,
              textTransform: 'uppercase'
            }}
          >
            {label}
          </text>
        ))}
    </g>
  )
}

// Inline KaTeX (for HTML, not SVG)
export function KatexInline({ tex, display = false, style }) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    if (!ref.current) return
    try {
      katex.render(tex, ref.current, { throwOnError: false, displayMode: display })
    } catch {
      ref.current.textContent = tex
    }
  }, [tex, display])
  return <span ref={ref} style={style} />
}

// Screen-coord primitives (Book of the New Sun visualizations)
// These author directly in viewBox pixels, no Plot transform.

// Direct screen-coord SVG wrapper. Same look as Plot (responsive scaling),
// but coords are raw pixels in a `w` × `h` viewBox.
export function Canvas({ w = 800, h = 500, children, ...rest }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      style={{
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        margin: '0 auto',
        overflow: 'visible',
        color: 'var(--text-primary)'
      }}
      {...rest}
    >
      {children}
    </svg>
  )
}

// Multi-line text block
export function MultiLine({
  x,
  y,
  lines,
  opacity = OPACITY.fg,
  anchor = 'middle',
  size = FONT_SMALL,
  lineHeight = 14,
  upper = false
}) {
  return (
    <g>
      {lines.map((ln, i) => (
        <text
          key={i}
          x={x}
          y={y + i * lineHeight}
          fill={FG}
          opacity={opacity}
          fontSize={size}
          textAnchor={anchor === 'end' ? 'end' : anchor === 'middle' ? 'middle' : 'start'}
          letterSpacing={LS_COMPACT}
          style={{
            textTransform: upper ? 'uppercase' : 'none'
          }}
        >
          {ln}
        </text>
      ))}
    </g>
  )
}

// Tooltip / citation balloon (controlled via useTooltip)
export function useTooltip() {
  const [tip, setTip] = React.useState(null)
  return [tip, setTip]
}

export function Tooltip({ tip, w = 240 }) {
  if (!tip) return null
  const { x, y, title, body, cite } = tip
  const lines = String(body || '').split(/\n/)
  const h = 28 + (title ? 16 : 0) + lines.length * 14 + (cite ? 18 : 0)
  const flipX = x > 600
  const tx = flipX ? x - w - 12 : x + 12
  const ty = Math.max(8, y - h - 8)
  return (
    <g pointerEvents="none">
      <rect
        x={tx}
        y={ty}
        width={w}
        height={h}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />
      {title && (
        <text
          x={tx + 12}
          y={ty + 18}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.fg}
          letterSpacing={LS_TITLE}
          style={{
            textTransform: 'uppercase'
          }}
        >
          {title}
        </text>
      )}
      {lines.map((ln, i) => (
        <text
          key={i}
          x={tx + 12}
          y={ty + (title ? 36 : 20) + i * 14}
          fill={FG}
          fontSize={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          {ln}
        </text>
      ))}
      {cite && (
        <text
          x={tx + 12}
          y={ty + h - 8}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
          style={{
            textTransform: 'uppercase'
          }}
        >
          {cite}
        </text>
      )}
    </g>
  )
}

// Interactive node (circle with hover/click and optional label below)
export function Node({
  x,
  y,
  r = 16,
  label,
  sub,
  accent = false,
  onEnter,
  onLeave,
  onClick,
  active = false,
  dim = false,
  inside = false
}) {
  const op = active ? OPACITY.fg : dim ? OPACITY.dim : OPACITY.fg
  return (
    <g
      style={{ cursor: onClick || onEnter ? 'pointer' : 'default' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <circle
        cx={x}
        cy={y}
        r={r}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={accent || active ? OPACITY.fg : OPACITY.dim}
        strokeWidth={accent || active ? STROKE_PRIMARY : STROKE_SECONDARY}
      />
      {label && inside && (
        <text
          x={x}
          y={y + (sub ? -2 : 4)}
          fill={FG}
          opacity={op}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_TIGHT}
        >
          {label}
        </text>
      )}
      {sub && inside && (
        <text
          x={x}
          y={y + 11}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
        >
          {sub}
        </text>
      )}
      {label && !inside && (
        <text
          x={x}
          y={y + r + 14}
          fill={FG}
          opacity={op}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_COMPACT}
        >
          {label}
        </text>
      )}
      {sub && !inside && (
        <text
          x={x}
          y={y + r + 28}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
        >
          {sub}
        </text>
      )}
      <circle cx={x} cy={y} r={Math.max(r + 8, 22)} fill="transparent" />
    </g>
  )
}

// Edge (line between two screen-coord points, with hover and optional curve)
export function Edge({
  a,
  b,
  dash,
  opacity = OPACITY.faint,
  strokeWidth = STROKE_GUIDE,
  label,
  onEnter,
  onLeave,
  active = false,
  curvy = false
}) {
  const x1 = a[0],
    y1 = a[1],
    x2 = b[0],
    y2 = b[1]
  const op = active ? OPACITY.fg : opacity
  const sw = active ? Math.max(strokeWidth, STROKE_PRIMARY) : strokeWidth
  const mx = (x1 + x2) / 2,
    my = (y1 + y2) / 2
  let d = `M ${x1} ${y1} L ${x2} ${y2}`
  if (curvy) {
    const dx = x2 - x1,
      dy = y2 - y1
    const nx = -dy,
      ny = dx
    const L = Math.hypot(dx, dy) || 1
    const cx = mx + (nx / L) * 24
    const cy = my + (ny / L) * 24
    d = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`
  }
  return (
    <g
      style={{ cursor: onEnter ? 'pointer' : 'default' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <path
        d={d}
        stroke={FG}
        strokeOpacity={op}
        strokeWidth={sw}
        strokeDasharray={dash}
        fill="none"
      />
      <path d={d} stroke="transparent" strokeWidth="14" fill="none" />
      {label && active && (
        <text
          x={mx}
          y={my - 4}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.fg}
          textAnchor="middle"
          letterSpacing={LS_LABEL}
          style={{
            textTransform: 'uppercase'
          }}
        >
          {label}
        </text>
      )}
    </g>
  )
}

// Toggle button (for filterable clusters)
export function Toggle({ on, onChange, label }) {
  const target = React.useContext(VizControlsCtx)
  const content = (
    <button
      onClick={() => onChange(!on)}
      style={{
        background: 'transparent',
        color: FG,
        border: '1px solid ' + (on ? 'var(--border-default)' : 'var(--border-subtle)'),
        padding: '5px 10px',
        cursor: 'pointer',
        fontSize: FONT_SMALL,
        letterSpacing: LS_TITLE,
        textTransform: 'uppercase',
        opacity: on ? 1 : 0.6
      }}
    >
      {on ? '■ ' : '□ '}
      {label}
    </button>
  )
  return target ? createPortal(content, target) : content
}

// Section timeline (clickable + draggable scrubber with optional mood curve)
export function ModuleTimeline({
  sections,
  width = 780,
  height = 220,
  current,
  onScrub,
  moods,
  beats = [],
  topLabel
}) {
  const N = sections.length
  const PAD_L = 36,
    PAD_R = 24,
    PAD_T = 36,
    PAD_B = 56
  const innerW = width - PAD_L - PAD_R
  const innerH = height - PAD_T - PAD_B
  const xOf = i => PAD_L + (N <= 1 ? innerW / 2 : (i / (N - 1)) * innerW)
  const yLine = PAD_T + innerH * 0.6
  const yOf = m => PAD_T + (1 - m) * innerH

  const moodPts = moods ? moods.map((m, i) => [xOf(i), yOf(m)]) : null

  const svgRef = React.useRef(null)
  function handlePointer(e) {
    if (!onScrub) return
    const svg = svgRef.current
    if (!svg) return
    const pt = svg.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    const ctm = svg.getScreenCTM()
    if (!ctm) return
    const loc = pt.matrixTransform(ctm.inverse())
    const f = Math.max(0, Math.min(1, (loc.x - PAD_L) / innerW))
    const i = Math.round(f * (N - 1))
    onScrub(i)
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: 'block', maxWidth: '100%', color: 'var(--text-primary)' }}
      onClick={handlePointer}
      onMouseMove={e => {
        if (e.buttons === 1) handlePointer(e)
      }}
    >
      {topLabel && (
        <text
          x={PAD_L}
          y={20}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          letterSpacing={LS_CONTROL}
          style={{ textTransform: 'uppercase' }}
        >
          {topLabel}
        </text>
      )}

      {moodPts && (
        <Polyline points={moodPts} opacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} />
      )}
      {moodPts &&
        moodPts.map(([cx, cy], i) => (
          <circle key={`mood-${i}`} cx={cx} cy={cy} r="2.5" fill={FG} opacity={OPACITY.dim} />
        ))}

      <line
        x1={PAD_L}
        y1={yLine}
        x2={PAD_L + innerW}
        y2={yLine}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />

      {sections.map((c, i) => {
        const x = xOf(i)
        const isCurrent = i === current
        return (
          <g key={i} style={{ cursor: 'pointer' }} onClick={() => onScrub && onScrub(i)}>
            <line
              x1={x}
              y1={yLine - 5}
              x2={x}
              y2={yLine + 5}
              stroke={FG}
              strokeOpacity={isCurrent ? OPACITY.fg : OPACITY.dim}
              strokeWidth={isCurrent ? STROKE_EMPHASIS : STROKE_GUIDE}
            />
            <circle
              cx={x}
              cy={yLine}
              r={isCurrent ? 4 : 2}
              fill={FG}
              opacity={isCurrent ? OPACITY.fg : OPACITY.dim}
            />
            {(isCurrent || N <= 12) && (
              <text
                x={x}
                y={yLine + 22}
                fill={FG}
                opacity={isCurrent ? OPACITY.fg : OPACITY.dim}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                letterSpacing={LS_COMPACT}
              >
                {c.n ?? i + 1}
              </text>
            )}
          </g>
        )
      })}

      {beats.map((b, i) => {
        const x = xOf(b.i)
        const above = i % 2 === 0
        const y0 = above ? yLine - 14 : yLine + 26
        const y1 = above ? y0 - 18 : y0 + 16
        // Clamp the centered label so it never extends past the viewBox
        // (beats at the first/last section would otherwise overhang the edge).
        const halfW = b.label.length * FONT_SMALL * 0.31
        const lx = Math.max(halfW + 2, Math.min(width - halfW - 2, x))
        return (
          <g key={`b-${i}`} pointerEvents="none">
            <line
              x1={x}
              y1={above ? yLine - 5 : yLine + 5}
              x2={x}
              y2={y0 + (above ? -2 : 2)}
              stroke={FG}
              strokeOpacity={OPACITY.faint}
              strokeWidth={STROKE_HAIR}
            />
            <text
              x={lx}
              y={y1}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              letterSpacing={LS_COMPACT}
            >
              {b.label}
            </text>
          </g>
        )
      })}

      {current != null && sections[current] && (
        <g pointerEvents="none">
          <text
            x={PAD_L}
            y={height - 28}
            fill={FG}
            opacity={OPACITY.fg}
            fontSize={FONT_LABEL}
            letterSpacing={LS_TITLE}
            style={{ textTransform: 'uppercase' }}
          >
            § {sections[current].n ?? current + 1} · {sections[current].label}
          </text>
          {sections[current].sub && (
            <text x={PAD_L} y={height - 12} fill={FG} opacity={OPACITY.dim} fontSize={FONT_SMALL}>
              {sections[current].sub}
            </text>
          )}
        </g>
      )}
    </svg>
  )
}

// Grid backdrop (used only when a viz renders outside a card frame)
export function GridBg({ w, h, step = GRID_STEP }) {
  const lines = []
  for (let x = 0; x <= w; x += step)
    lines.push(
      <line
        key={`v${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={h}
        stroke={FG}
        strokeOpacity={OPACITY.hair * 0.4}
        strokeWidth={STROKE_SECONDARY}
      />
    )
  for (let y = 0; y <= h; y += step)
    lines.push(
      <line
        key={`h${y}`}
        x1={0}
        y1={y}
        x2={w}
        y2={y}
        stroke={FG}
        strokeOpacity={OPACITY.hair * 0.4}
        strokeWidth={STROKE_SECONDARY}
      />
    )
  return <g>{lines}</g>
}

// Hatching pattern (use as fill="url(#id)")
export function Hatch({ id, angle = 45, gap = 4, opacity = 0.18, strokeWidth = 0.6 }) {
  return (
    <defs>
      <pattern
        id={id}
        width={gap * 2}
        height={gap * 2}
        patternUnits="userSpaceOnUse"
        patternTransform={`rotate(${angle})`}
      >
        <line
          x1={0}
          y1={0}
          x2={0}
          y2={gap * 2}
          stroke={FG}
          strokeOpacity={opacity}
          strokeWidth={strokeWidth}
        />
      </pattern>
    </defs>
  )
}

export function CrossHatch({ id, gap = 5, opacity = 0.12 }) {
  return (
    <defs>
      <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse">
        <line
          x1={0}
          y1={0}
          x2={gap}
          y2={gap}
          stroke={FG}
          strokeOpacity={opacity}
          strokeWidth={0.5}
        />
        <line
          x1={gap}
          y1={0}
          x2={0}
          y2={gap}
          stroke={FG}
          strokeOpacity={opacity}
          strokeWidth={0.5}
        />
      </pattern>
    </defs>
  )
}

// Deterministic pseudo-random
export function srand(seed) {
  let s = seed
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    return s / 0x7fffffff
  }
}

// Stippling: N dots inside a bounding box, deterministic
export function Stipple({ x, y, w, h, n = 80, seed = 1, opacity = 0.4, r = 0.6 }) {
  const rng = srand(seed)
  const dots = []
  for (let i = 0; i < n; i++) {
    dots.push(
      <circle key={i} cx={x + rng() * w} cy={y + rng() * h} r={r} fill={FG} opacity={opacity} />
    )
  }
  return <g>{dots}</g>
}

// Radial spokes
// VizCaption - caption line below a viz canvas.
// In fullscreen it portals into vizfig-controls-bar (outside the transform layer)
// so it is never zoomed/panned with the canvas. In normal view it renders inline.
export function VizCaption({ children }) {
  const target = React.useContext(VizControlsCtx)
  const content = (
    <div
      style={{
        padding: '6px 12px',
        fontSize: FONT_LABEL,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: FG,
        opacity: OPACITY.dim,
        textAlign: 'center'
      }}
    >
      {children}
    </div>
  )
  return target ? createPortal(content, target) : content
}

// VizControls - generic escape hatch for custom controls (hand-rolled buttons,
// steppers, pickers) that have no dedicated primitive. Portals its children
// into the VizFigure controls bar - below the frame, outside the zoom/pan
// layer - exactly like Slider/PlayPause/Toggle, so control placement stays
// consistent across every viz. Renders inline when there is no VizFigure
// ancestor (e.g. an unwrapped inline viz), matching the other primitives.
export function VizControls({ children }) {
  const target = React.useContext(VizControlsCtx)
  return target ? createPortal(children, target) : children
}

export function Rays({ cx, cy, r0, r1, count = 16, opacity = 0.4, strokeWidth = 0.6 }) {
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => {
        const a = (i / count) * Math.PI * 2
        return (
          <line
            key={i}
            x1={cx + Math.cos(a) * r0}
            y1={cy + Math.sin(a) * r0}
            x2={cx + Math.cos(a) * r1}
            y2={cy + Math.sin(a) * r1}
            stroke={FG}
            strokeOpacity={opacity}
            strokeWidth={strokeWidth}
          />
        )
      })}
    </g>
  )
}
