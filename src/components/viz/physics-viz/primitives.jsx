// Aether monochrome SVG primitives - replaces Mafs with hand-rolled,
// strict-aesthetic equivalents. Pure #000 bg, opacity-only hierarchy.
// Coords: math (x right, y up). Internally flips y for SVG.

import React from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import './primitives.css'

export const FG = 'currentColor'

// Hierarchy levels (opacity-only, no hue)
export const OPACITY = { fg: 1.0, accent: 0.7, dim: 0.5, faint: 0.15 }

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
  pad = 16,
  children
}) {
  // Squash card height to ~80% of design while keeping width full.
  const height = heightIn * 0.8
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
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        height="auto"
        overflow="visible"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          margin: '0 auto',
          overflow: 'visible',
          color: 'var(--text-primary)'
        }}
        fontFamily="'D-DIN', 'D-DIN-Regular', ui-monospace, monospace"
      >
        {children}
      </svg>
    </PlotContext.Provider>
  )
}

export const usePlot = () => React.useContext(PlotContext)

// Axes
export function Axes({ step = 1, showGrid = true, showTicks = true, showOrigin = true }) {
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
        <g stroke={FG} strokeWidth={1} opacity={OPACITY.faint * 0.55}>
          {xs.map(x => (
            <line key={`vg${x}`} x1={p.sx(x)} y1={0} x2={p.sx(x)} y2={p.height} />
          ))}
          {ys.map(y => (
            <line key={`hg${y}`} x1={0} y1={p.sy(y)} x2={p.width} y2={p.sy(y)} />
          ))}
        </g>
      )}
      <g stroke={FG} strokeWidth={1} opacity={OPACITY.dim}>
        {p.yMin <= 0 && p.yMax >= 0 && <line x1={0} y1={y0} x2={p.width} y2={y0} />}
        {p.xMin <= 0 && p.xMax >= 0 && <line x1={x0} y1={0} x2={x0} y2={p.height} />}
      </g>
      {showTicks && (
        <g stroke={FG} strokeWidth={1} opacity={OPACITY.dim}>
          {xs.map(x =>
            x !== 0 && p.yMin <= 0 && p.yMax >= 0 ? (
              <line key={`xt${x}`} x1={p.sx(x)} y1={y0 - 3} x2={p.sx(x)} y2={y0 + 3} />
            ) : null
          )}
          {ys.map(y =>
            y !== 0 && p.xMin <= 0 && p.xMax >= 0 ? (
              <line key={`yt${y}`} x1={x0 - 3} y1={p.sy(y)} x2={x0 + 3} y2={p.sy(y)} />
            ) : null
          )}
        </g>
      )}
      {showOrigin && p.xMin <= 0 && p.xMax >= 0 && p.yMin <= 0 && p.yMax >= 0 && (
        <circle cx={x0} cy={y0} r={1.5} fill={FG} opacity={OPACITY.dim} />
      )}
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
  strokeWidth = 1
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
    <g fill="none" stroke={FG} strokeWidth={strokeWidth} opacity={opacity} strokeDasharray={dash}>
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
  strokeWidth = 1,
  closed = false,
  fill,
  fillOpacity = 0
}) {
  const p = usePlot()
  if (points.length < 2) return null
  let d = ''
  points.forEach(([x, y], i) => {
    d += (i === 0 ? 'M' : 'L') + p.sx(x).toFixed(2) + ' ' + p.sy(y).toFixed(2) + ' '
  })
  if (closed) d += 'Z'
  return (
    <path
      d={d}
      fill={fill || (fillOpacity ? FG : 'none')}
      fillOpacity={fillOpacity}
      stroke={FG}
      strokeWidth={strokeWidth}
      strokeDasharray={dash}
      opacity={opacity}
    />
  )
})

// Marks
export function Dot({ x, y, r = 3, opacity = OPACITY.fg, fill = true }) {
  const p = usePlot()
  return (
    <circle
      cx={p.sx(x)}
      cy={p.sy(y)}
      r={r}
      fill={fill ? FG : 'none'}
      stroke={FG}
      strokeWidth={1}
      opacity={opacity}
    />
  )
}

export function CircleSh({ cx = 0, cy = 0, r, opacity = OPACITY.fg, dash, fill, fillOpacity = 0 }) {
  const p = usePlot()
  return (
    <circle
      cx={p.sx(cx)}
      cy={p.sy(cy)}
      r={r * p.ux}
      fill={fill || (fillOpacity ? FG : 'none')}
      fillOpacity={fillOpacity}
      stroke={FG}
      strokeWidth={1}
      strokeDasharray={dash}
      opacity={opacity}
    />
  )
}

// Arrow with proper arrowhead in screen space
export function Arrow({ from, to, opacity = OPACITY.fg, head = 6, strokeWidth = 1, dash }) {
  const p = usePlot()
  const x1 = p.sx(from[0]),
    y1 = p.sy(from[1])
  const x2 = p.sx(to[0]),
    y2 = p.sy(to[1])
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
      stroke={FG}
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
  size = 13
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
      } catch (_) {
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
          color: FG,
          opacity,
          fontSize: size + 'px',
          fontFamily: "'D-DIN', ui-monospace, monospace",
          lineHeight: 1
        }}
      >
        <span ref={ref} style={{ whiteSpace: 'nowrap' }} />
      </div>
    </foreignObject>
  )
}

// Plain text (uppercase labels)
export function Label({
  at,
  children,
  opacity = OPACITY.dim,
  anchor = 'start',
  dy = 0,
  dx = 0,
  size = 11,
  upper = true
}) {
  const p = usePlot()
  const [x, y] = at
  return (
    <text
      x={p.sx(x) + dx}
      y={p.sy(y) + dy}
      fill={FG}
      opacity={opacity}
      fontSize={size}
      textAnchor={anchor === 'end' ? 'end' : anchor === 'middle' ? 'middle' : 'start'}
      letterSpacing="0.08em"
      style={{
        textTransform: upper ? 'uppercase' : 'none',
        fontFamily: "'D-DIN', ui-monospace, monospace"
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
  return (
    <div
      style={{
        marginTop: 16,
        padding: '0 4px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: FG,
        fontFamily: "'D-DIN', ui-monospace, monospace"
      }}
    >
      <span style={{ opacity: OPACITY.dim, minWidth: 60 }}>{label}</span>
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

// Animation frame hook
export function useAnimationTime(running = false) {
  const [t, setT] = React.useState(0)
  const reduced = useReducedMotion()
  React.useEffect(() => {
    if (!running || reduced) return
    let raf = 0
    let t0 = 0
    const loop = ts => {
      if (!t0) t0 = ts
      setT((ts - t0) / 1000)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [running, reduced])
  return t
}

// PlayPause control
export function PlayPause({ playing, onToggle, onReset, label = '' }) {
  return (
    <div
      style={{
        marginTop: 12,
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        fontFamily: "'D-DIN', ui-monospace, monospace",
        fontSize: 10,
        letterSpacing: '0.18em',
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
}

// Card frame
// Wraps a viz with a card: section ID + title header, then a framed area with
// faint grid background. Matches the showcase's `.card`/`.frame` style.
export function VizCard({ id, title, caption, children }) {
  return (
    <div
      style={{
        border: '1px solid var(--border-subtle)',
        padding: '24px 24px 28px',
        margin: '32px 0',
        fontFamily: "'D-DIN', 'D-DIN-Regular', ui-monospace, monospace",
        color: 'var(--text-primary)'
      }}
    >
      {(id || title) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            marginBottom: 16
          }}
        >
          {id && (
            <div
              style={{
                fontSize: 10,
                letterSpacing: '0.18em',
                color: FG,
                opacity: OPACITY.dim,
                textTransform: 'uppercase'
              }}
            >
              {id}
            </div>
          )}
          {title && (
            <h3
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              {title}
            </h3>
          )}
        </div>
      )}
      <div
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: 'center',
          border: '1px solid var(--border-subtle)',
          overflow: 'hidden'
        }}
      >
        {children}
      </div>
      {caption && (
        <p
          style={{
            margin: '14px 2px 0',
            fontSize: 12,
            opacity: OPACITY.dim,
            lineHeight: 1.5
          }}
        >
          {caption}
        </p>
      )}
    </div>
  )
}

// Like Tex but accepts raw SVG pixel coordinates (no Plot context required)
export function TexPx({
  x,
  y,
  tex,
  opacity = OPACITY.fg,
  anchor = 'start',
  size = 13,
  width: foW = 200
}) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    if (ref.current) {
      try {
        katex.render(tex, ref.current, { throwOnError: false, displayMode: false })
      } catch (_) {
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
          fontFamily: "'D-DIN', ui-monospace, monospace",
          lineHeight: 1
        }}
      >
        <span ref={ref} style={{ whiteSpace: 'nowrap' }} />
      </div>
    </foreignObject>
  )
}

// Draggable handle
export function DragHandle({ x, y, onChange, r = 7, constrain, opacity = OPACITY.fg, label }) {
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
    e.target.setPointerCapture(e.pointerId)
    dragRef.current = true
    setDrag(true)
    svgRectRef.current = e.target.ownerSVGElement.getBoundingClientRect()
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
      e.target.releasePointerCapture(e.pointerId)
    } catch (_) {
      /* noop */
    }
  }
  return (
    <g ref={gRef} transform={`translate(${cx},${cy})`}>
      <circle
        cx={0}
        cy={0}
        r={r + 8}
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
        strokeWidth={1}
        opacity={opacity}
        style={{ pointerEvents: 'none' }}
      />
      <circle
        cx={0}
        cy={0}
        r={r + 4}
        fill="none"
        stroke={FG}
        strokeWidth={1}
        opacity={hover || drag ? 0.4 : 0}
        style={{ pointerEvents: 'none' }}
      />
      {label && (
        <text
          x={r + 6}
          y={-(r + 4)}
          fill={FG}
          opacity={0.7}
          fontSize={10}
          style={{
            pointerEvents: 'none',
            fontFamily: "'D-DIN', ui-monospace, monospace",
            letterSpacing: '0.18em',
            textTransform: 'uppercase'
          }}
        >
          {label}
        </text>
      )}
    </g>
  )
}
