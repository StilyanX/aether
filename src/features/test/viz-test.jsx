import { useVizColors } from '../../hooks/use-viz-colors'
import { Mafs, Line, Point, LaTeX } from 'mafs'
import 'mafs/core.css'
import 'katex/dist/katex.min.css'
import { useRef, useEffect, useState, useCallback } from 'react'
import vizAnchors from '../../config/viz-anchors'

// Fraction Number Line (Mafs)
function FractionNumberLine({ C }) {
  const s = 10
  const ticks = [0, 2.5, 5, 7.5, 10]
  const points = [
    { val: 0.25, tex: '\\tfrac{1}{4}', y: 0.8 },
    { val: 0.5, tex: '\\tfrac{1}{2}', y: -0.8 },
    { val: 0.75, tex: '\\tfrac{3}{4}', y: 0.8 }
  ]

  return (
    <Mafs viewBox={{ x: [-2, 14], y: [-1.2, 1.2] }} height={180} pan={false} zoom={false}>
      <Line.Segment point1={[0, 0]} point2={[11, 0]} color={C.accent} />
      {ticks.map(t => (
        <Line.Segment key={t} point1={[t, -0.15]} point2={[t, 0.15]} color={C.dim} />
      ))}
      <Point x={0} y={0} color={C.fg} />
      <Point x={s} y={0} color={C.fg} />
      <LaTeX at={[0, -0.7]} tex="0" color={C.fg} />
      <LaTeX at={[s, -0.7]} tex="1" color={C.fg} />
      {points.map((p, i) => (
        <Point key={i} x={p.val * s} y={0} color={C.fg} />
      ))}
      {points.map((p, i) => (
        <LaTeX key={`l${i}`} at={[p.val * s, p.y]} tex={p.tex} color={C.fg} />
      ))}
    </Mafs>
  )
}

// Projectile Motion Simulator (Canvas)
function ProjectileMotionSim({ C }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const [angle, setAngle] = useState(45)
  const [velocity, setVelocity] = useState(30)
  const [gravity, setGravity] = useState(9.8)
  const [playing, setPlaying] = useState(false)
  const tRef = useRef(0)

  const rad = (angle * Math.PI) / 180
  const vx = velocity * Math.cos(rad)
  const vy = velocity * Math.sin(rad)
  const tFlight = (2 * vy) / gravity
  const range = vx * tFlight
  const maxH = (vy * vy) / (2 * gravity)

  const draw = useCallback(
    (ctx, w, h, t) => {
      const pad = 60
      const gw = w - pad * 2
      const gh = h - pad * 2

      // Scale to fit trajectory
      const sx = range > 0 ? gw / (range * 1.1) : 1
      const sy = maxH > 0 ? (gh * 0.8) / (maxH * 1.1) : 1
      const s = Math.min(sx, sy)

      const toX = x => pad + x * s
      const toY = y => h - pad - y * s

      ctx.clearRect(0, 0, w, h)

      // Ground
      ctx.strokeStyle = C.dim
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(pad, toY(0))
      ctx.lineTo(w - pad, toY(0))
      ctx.stroke()

      // Ground ticks
      ctx.fillStyle = C.dim
      ctx.font = '11px D-DIN, sans-serif'
      ctx.textAlign = 'center'
      const tickStep = Math.pow(10, Math.floor(Math.log10(range || 1)))
      const step = range > tickStep * 5 ? tickStep * 2 : tickStep
      for (let x = 0; x <= range * 1.1; x += step) {
        const px = toX(x)
        ctx.beginPath()
        ctx.moveTo(px, toY(0) - 4)
        ctx.lineTo(px, toY(0) + 4)
        ctx.stroke()
        ctx.fillText(Math.round(x) + 'm', px, toY(0) + 18)
      }

      // Y-axis ticks
      const yStep = Math.pow(10, Math.floor(Math.log10(maxH || 1)))
      const ys = maxH > yStep * 5 ? yStep * 2 : yStep
      ctx.textAlign = 'right'
      for (let y = ys; y <= maxH * 1.1; y += ys) {
        const py = toY(y)
        ctx.beginPath()
        ctx.moveTo(pad - 4, py)
        ctx.lineTo(pad + 4, py)
        ctx.stroke()
        ctx.fillText(Math.round(y) + 'm', pad - 8, py + 4)
      }

      // Full trajectory path (dotted)
      ctx.strokeStyle = C.faint
      ctx.lineWidth = 1.5
      ctx.setLineDash([4, 4])
      ctx.beginPath()
      const steps = 100
      for (let i = 0; i <= steps; i++) {
        const ti = (i / steps) * tFlight
        const px = toX(vx * ti)
        const py = toY(vy * ti - 0.5 * gravity * ti * ti)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.stroke()
      ctx.setLineDash([])

      // Animated trajectory (solid, up to current time)
      if (t > 0) {
        ctx.strokeStyle = C.fg
        ctx.lineWidth = 2
        ctx.beginPath()
        const tClamped = Math.min(t, tFlight)
        const aSteps = Math.ceil((tClamped / tFlight) * steps)
        for (let i = 0; i <= aSteps; i++) {
          const ti = (i / aSteps) * tClamped
          const px = toX(vx * ti)
          const py = toY(vy * ti - 0.5 * gravity * ti * ti)
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.stroke()

        // Projectile dot
        const cx = vx * tClamped
        const cy = vy * tClamped - 0.5 * gravity * tClamped * tClamped
        ctx.fillStyle = C.fg
        ctx.beginPath()
        ctx.arc(toX(cx), toY(Math.max(0, cy)), 5, 0, Math.PI * 2)
        ctx.fill()

        // Velocity vector at current position
        const vxNow = vx
        const vyNow = vy - gravity * tClamped
        const vMag = Math.sqrt(vxNow * vxNow + vyNow * vyNow)
        const vScale = 25 / (vMag || 1)
        ctx.strokeStyle = C.accent
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(toX(cx), toY(Math.max(0, cy)))
        ctx.lineTo(toX(cx) + vxNow * vScale, toY(Math.max(0, cy)) - vyNow * vScale)
        ctx.stroke()

        // Arrow head
        const aLen = 6
        const aAngle = Math.atan2(-vyNow * vScale, vxNow * vScale)
        const tipX = toX(cx) + vxNow * vScale
        const tipY = toY(Math.max(0, cy)) - vyNow * vScale
        ctx.beginPath()
        ctx.moveTo(tipX, tipY)
        ctx.lineTo(tipX - aLen * Math.cos(aAngle - 0.4), tipY + aLen * Math.sin(aAngle - 0.4))
        ctx.moveTo(tipX, tipY)
        ctx.lineTo(tipX - aLen * Math.cos(aAngle + 0.4), tipY + aLen * Math.sin(aAngle + 0.4))
        ctx.stroke()
      }

      // Launch angle arc
      ctx.strokeStyle = C.dim
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(toX(0), toY(0), 30, -rad, 0)
      ctx.stroke()

      // Angle label
      ctx.fillStyle = C.dim
      ctx.font = '12px D-DIN, sans-serif'
      ctx.textAlign = 'left'
      ctx.fillText(angle + '°', toX(0) + 34, toY(0) - 8)

      // Origin dot
      ctx.fillStyle = C.fg
      ctx.beginPath()
      ctx.arc(toX(0), toY(0), 4, 0, Math.PI * 2)
      ctx.fill()
    },
    [C, angle, velocity, gravity, vx, vy, tFlight, range, maxH]
  )

  // Static draw when params change
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    tRef.current = 0
    draw(ctx, rect.width, rect.height, 0)
  }, [draw])

  // Animation loop
  useEffect(() => {
    if (!playing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    let start = null
    tRef.current = 0

    const loop = ts => {
      if (!start) start = ts
      const elapsed = (ts - start) / 1000
      tRef.current = elapsed

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      draw(ctx, rect.width, rect.height, elapsed)

      if (elapsed < tFlight + 0.3) {
        animRef.current = requestAnimationFrame(loop)
      } else {
        setPlaying(false)
      }
    }
    animRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animRef.current)
  }, [playing, draw, tFlight])

  const sliderStyle = {
    width: '100%',
    accentColor: C.fg,
    cursor: 'pointer'
  }

  const labelStyle = {
    color: C.fg,
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '4px'
  }

  const statStyle = {
    color: C.dim,
    fontFamily: 'var(--font-sans)',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.04em'
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: 400,
          display: 'block',
          borderBottom: `1px solid ${C.faint}`
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1.5rem',
          padding: '1.2rem 0'
        }}
      >
        <div>
          <div style={labelStyle}>
            <span>Angle</span>
            <span>{angle}°</span>
          </div>
          <input
            type="range"
            min={5}
            max={85}
            value={angle}
            onChange={e => setAngle(+e.target.value)}
            style={sliderStyle}
          />
        </div>
        <div>
          <div style={labelStyle}>
            <span>Velocity</span>
            <span>{velocity} m/s</span>
          </div>
          <input
            type="range"
            min={5}
            max={50}
            value={velocity}
            onChange={e => setVelocity(+e.target.value)}
            style={sliderStyle}
          />
        </div>
        <div>
          <div style={labelStyle}>
            <span>Gravity</span>
            <span>{gravity} m/s²</span>
          </div>
          <input
            type="range"
            min={1}
            max={20}
            step={0.1}
            value={gravity}
            onChange={e => setGravity(+e.target.value)}
            style={sliderStyle}
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          paddingTop: '0.5rem'
        }}
      >
        <button
          onClick={() => setPlaying(true)}
          disabled={playing}
          style={{
            background: 'transparent',
            border: `1px solid ${C.dim}`,
            color: C.fg,
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            padding: '8px 24px',
            cursor: playing ? 'default' : 'pointer',
            opacity: playing ? 0.4 : 1
          }}
        >
          {playing ? 'Simulating...' : 'Launch'}
        </button>
        <span style={statStyle}>Range: {range.toFixed(1)}m</span>
        <span style={statStyle}>Max height: {maxH.toFixed(1)}m</span>
        <span style={statStyle}>Flight: {tFlight.toFixed(2)}s</span>
      </div>
    </div>
  )
}

// Electron Orbital Shapes (SVG) v3
function ElectronOrbitals({ C }) {
  const lbl = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    letterSpacing: '0.04em',
    textTransform: 'uppercase'
  }
  const axLbl = { fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.02em' }
  const phaseLbl = { fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 'bold' }
  const capLbl = { fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.02em' }

  const cw = 210
  const ch = 220
  const cx = cw / 2
  const cy = ch / 2 - 10
  const pad = 110

  const Axes = ({ ox, oy, r = 78 }) => (
    <g>
      <line
        x1={ox + cx - r}
        y1={oy + cy}
        x2={ox + cx + r}
        y2={oy + cy}
        stroke={C.faint}
        strokeWidth={0.7}
      />
      <line
        x1={ox + cx}
        y1={oy + cy - r}
        x2={ox + cx}
        y2={oy + cy + r}
        stroke={C.faint}
        strokeWidth={0.7}
      />
      <text x={ox + cx + r + 5} y={oy + cy + 4} fill={C.dim} {...axLbl} fontSize={10}>
        x
      </text>
      <text x={ox + cx + 5} y={oy + cy - r - 3} fill={C.dim} {...axLbl} fontSize={10}>
        y
      </text>
    </g>
  )

  const SOrbital = ({ n, ox, oy }) => {
    const maxR = 22 + n * 18
    const nodes = n - 1
    return (
      <g>
        <Axes ox={ox} oy={oy} r={maxR + 12} />
        <circle
          cx={ox + cx}
          cy={oy + cy}
          r={maxR}
          fill={C.fg}
          fillOpacity={0.12}
          stroke={C.fg}
          strokeWidth={2.5}
        />
        {Array.from({ length: nodes }, (_, i) => {
          const r = maxR * ((i + 1) / (nodes + 1))
          return (
            <circle
              key={i}
              cx={ox + cx}
              cy={oy + cy}
              r={r}
              fill="none"
              stroke={C.dim}
              strokeWidth={1.5}
              strokeDasharray="5,4"
            />
          )
        })}
        <circle cx={ox + cx} cy={oy + cy} r={4} fill={C.accent} />
        <text x={ox + cx} y={oy + ch - 22} fill={C.fg} textAnchor="middle" {...lbl}>
          {n}s
        </text>
        <text x={ox + cx} y={oy + ch - 8} fill={C.dim} textAnchor="middle" {...capLbl}>
          MAX 2e⁻
        </text>
        {nodes > 0 && (
          <text
            x={ox + cx}
            y={oy + ch + 6}
            fill={C.dim}
            textAnchor="middle"
            {...axLbl}
            fontSize={10}
          >
            {nodes} radial node{nodes > 1 ? 's' : ''}
          </text>
        )}
      </g>
    )
  }

  const POrbital = ({ axis, ox, oy, label }) => {
    const period = parseInt(label[0])
    const sc = period === 3 ? 1.3 : 1
    const lr = 38 * sc
    const lw = 25 * sc
    const off = 42 * sc

    if (axis === 'z') {
      const outerR = 38 * sc
      const innerR = 22 * sc
      return (
        <g>
          <Axes ox={ox} oy={oy} />
          <circle
            cx={ox + cx}
            cy={oy + cy}
            r={outerR}
            fill={C.fg}
            fillOpacity={0.06}
            stroke={C.fg}
            strokeWidth={2.5}
            strokeDasharray="6,3"
          />
          <circle
            cx={ox + cx}
            cy={oy + cy}
            r={innerR}
            fill={C.fg}
            fillOpacity={0.15}
            stroke={C.fg}
            strokeWidth={2.5}
          />
          <text x={ox + cx} y={oy + cy + 5} fill={C.fg} textAnchor="middle" {...phaseLbl}>
            +
          </text>
          <text
            x={ox + cx + outerR - 4}
            y={oy + cy - outerR + 14}
            fill={C.fg}
            textAnchor="middle"
            {...phaseLbl}
            fontSize={14}
          >
            −
          </text>
          <circle cx={ox + cx} cy={oy + cy} r={3} fill={C.accent} />
          <text
            x={ox + cx}
            y={oy + cy - outerR - 8}
            fill={C.dim}
            textAnchor="middle"
            {...axLbl}
            fontSize={10}
          >
            z-axis → into page
          </text>
          <text x={ox + cx} y={oy + ch - 22} fill={C.fg} textAnchor="middle" {...lbl}>
            {label}
          </text>
          <text x={ox + cx} y={oy + ch - 8} fill={C.dim} textAnchor="middle" {...capLbl}>
            MAX 2e⁻
          </text>
        </g>
      )
    }

    const lobes = {
      x: [
        { cx: ox + cx - off, cy: oy + cy, rx: lr, ry: lw, phase: '+' },
        { cx: ox + cx + off, cy: oy + cy, rx: lr, ry: lw, phase: '−' }
      ],
      y: [
        { cx: ox + cx, cy: oy + cy - off, rx: lw, ry: lr, phase: '+' },
        { cx: ox + cx, cy: oy + cy + off, rx: lw, ry: lr, phase: '−' }
      ]
    }

    return (
      <g>
        <Axes ox={ox} oy={oy} />
        {lobes[axis].map((l, i) => (
          <g key={i}>
            <ellipse
              cx={l.cx}
              cy={l.cy}
              rx={l.rx}
              ry={l.ry}
              fill={C.fg}
              fillOpacity={i === 0 ? 0.15 : 0.06}
              stroke={C.fg}
              strokeWidth={2.5}
            />
            <text x={l.cx} y={l.cy + 6} fill={C.fg} textAnchor="middle" {...phaseLbl}>
              {l.phase}
            </text>
          </g>
        ))}
        <circle cx={ox + cx} cy={oy + cy} r={4} fill={C.accent} />
        <text x={ox + cx} y={oy + ch - 22} fill={C.fg} textAnchor="middle" {...lbl}>
          {label}
        </text>
        <text x={ox + cx} y={oy + ch - 8} fill={C.dim} textAnchor="middle" {...capLbl}>
          MAX 2e⁻
        </text>
      </g>
    )
  }

  const totalW = pad + cw * 4 + 30
  const headerH = 55
  const row1Y = headerH
  const row2Y = row1Y + ch + 30
  const row3Y = row2Y + ch + 30
  const totalH = row3Y + ch + 80

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* Energy ordering arrow */}
      <line
        x1={18}
        y1={headerH + 20}
        x2={18}
        y2={row3Y + ch - 20}
        stroke={C.dim}
        strokeWidth={1.2}
      />
      <polygon
        points={`14,${row3Y + ch - 20} 22,${row3Y + ch - 20} 18,${row3Y + ch - 8}`}
        fill={C.dim}
      />
      <text x={18} y={headerH + 10} fill={C.dim} textAnchor="middle" {...axLbl} fontSize={9}>
        LOW
      </text>
      <text x={18} y={row3Y + ch + 6} fill={C.dim} textAnchor="middle" {...axLbl} fontSize={9}>
        HIGH
      </text>
      <text
        x={10}
        y={(row1Y + row3Y + ch) / 2}
        fill={C.dim}
        textAnchor="middle"
        {...axLbl}
        fontSize={9}
        transform={`rotate(-90,10,${(row1Y + row3Y + ch) / 2})`}
      >
        ENERGY
      </text>

      {/* Column headers */}
      {['s', 'pₓ', 'pᵧ', 'pz'].map((h, i) => (
        <text
          key={h}
          x={pad + i * cw + cx}
          y={30}
          fill={C.dim}
          textAnchor="middle"
          {...lbl}
          fontSize={13}
        >
          {h} ORBITAL
        </text>
      ))}

      {/* Capacity subheaders */}
      <text x={pad + cx} y={44} fill={C.dim} textAnchor="middle" {...capLbl} fontSize={9}>
        2e⁻ total
      </text>
      <text
        x={pad + cw + cx + cw / 2}
        y={44}
        fill={C.dim}
        textAnchor="middle"
        {...capLbl}
        fontSize={9}
      >
        2e⁻ each × 3 = 6e⁻
      </text>

      {/* Period 1 */}
      <text
        x={55}
        y={row1Y + cy + 5}
        fill={C.fg}
        textAnchor="middle"
        {...lbl}
        fontSize={13}
        transform={`rotate(-90,55,${row1Y + cy})`}
      >
        PERIOD 1
      </text>
      <SOrbital n={1} ox={pad} oy={row1Y} />
      <text
        x={pad + cw + cx + cw / 2}
        y={row1Y + cy + 5}
        fill={C.faint}
        textAnchor="middle"
        {...axLbl}
        fontSize={10}
      >
        NO p ORBITALS IN PERIOD 1
      </text>

      {/* Period 2 */}
      <text
        x={55}
        y={row2Y + cy + 5}
        fill={C.fg}
        textAnchor="middle"
        {...lbl}
        fontSize={13}
        transform={`rotate(-90,55,${row2Y + cy})`}
      >
        PERIOD 2
      </text>
      <SOrbital n={2} ox={pad} oy={row2Y} />
      <POrbital axis="x" ox={pad + cw} oy={row2Y} label="2px" />
      <POrbital axis="y" ox={pad + cw * 2} oy={row2Y} label="2py" />
      <POrbital axis="z" ox={pad + cw * 3} oy={row2Y} label="2pz" />

      {/* Period 3 */}
      <text
        x={55}
        y={row3Y + cy + 5}
        fill={C.fg}
        textAnchor="middle"
        {...lbl}
        fontSize={13}
        transform={`rotate(-90,55,${row3Y + cy})`}
      >
        PERIOD 3
      </text>
      <SOrbital n={3} ox={pad} oy={row3Y} />
      <POrbital axis="x" ox={pad + cw} oy={row3Y} label="3px" />
      <POrbital axis="y" ox={pad + cw * 2} oy={row3Y} label="3py" />
      <POrbital axis="z" ox={pad + cw * 3} oy={row3Y} label="3pz" />

      {/* 3d footnote */}
      <text
        x={totalW / 2}
        y={row3Y + ch + 22}
        fill={C.dim}
        textAnchor="middle"
        {...axLbl}
        fontSize={11}
      >
        3d ORBITALS EXIST IN PERIOD 3 BUT DO NOT FILL UNTIL PERIOD 4 (TRANSITION METALS)
      </text>
      <text
        x={totalW / 2}
        y={row3Y + ch + 38}
        fill={C.dim}
        textAnchor="middle"
        {...axLbl}
        fontSize={10}
      >
        + / − = WAVE FUNCTION PHASE (NOT CHARGE). SOLID = POSITIVE LOBE. DASHED OUTLINE = NEGATIVE
        LOBE.
      </text>

      {/* Legend */}
      <g transform={`translate(${pad}, ${totalH - 18})`}>
        <circle cx={6} cy={0} r={4} fill={C.accent} />
        <text x={16} y={4} fill={C.accent} {...axLbl}>
          NUCLEUS
        </text>
        <circle
          cx={110}
          cy={0}
          r={10}
          fill={C.fg}
          fillOpacity={0.12}
          stroke={C.fg}
          strokeWidth={2.5}
        />
        <text x={126} y={4} fill={C.fg} {...axLbl}>
          PROBABILITY DENSITY
        </text>
        <line
          x1={290}
          y1={0}
          x2={312}
          y2={0}
          stroke={C.dim}
          strokeWidth={1.5}
          strokeDasharray="5,4"
        />
        <text x={318} y={4} fill={C.dim} {...axLbl}>
          RADIAL NODE
        </text>
        <circle
          cx={420}
          cy={0}
          r={10}
          fill={C.fg}
          fillOpacity={0.06}
          stroke={C.fg}
          strokeWidth={2.5}
          strokeDasharray="6,3"
        />
        <text x={436} y={4} fill={C.dim} {...axLbl}>
          BEHIND (pz VIEW)
        </text>
      </g>
    </svg>
  )
}

// Nephron Cross-Section (SVG) v4 - Clean
function NephronDiagram({ C }) {
  const FILTRATE = '#4a7fbd'
  const SECRETE = '#7c6bbf'
  const REABSORB = '#c78b3d'
  const font = { fontFamily: 'var(--font-sans)', letterSpacing: '0.04em' }

  const Step = ({ y, n, title, lines }) => (
    <g>
      <circle
        cx={500}
        cy={y}
        r={11}
        fill="#000"
        fillOpacity={0.9}
        stroke={FILTRATE}
        strokeWidth={1.5}
      />
      <text
        x={500}
        y={y + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={FILTRATE}
        fontSize={10}
        fontWeight="bold"
        {...font}
      >
        {n}
      </text>
      <text x={516} y={y - 2} fill={FILTRATE} fillOpacity={0.9} fontSize={9} {...font}>
        {title}
      </text>
      {lines.map((l, i) => (
        <text
          key={i}
          x={516}
          y={y + 10 + i * 10}
          fill={l.color || C.fg}
          fillOpacity={l.opacity || 0.4}
          fontSize={6.5}
          {...font}
        >
          {l.text}
        </text>
      ))}
    </g>
  )

  return (
    <div className="lrn-graph">
      <svg viewBox="0 0 700 620" width="100%" style={{ display: 'block' }}>
        {/* Base Illustration */}
        <image
          href="/Aether/assets/nephron-base.svg"
          x={100}
          y={10}
          width={356}
          height={600}
          style={{ filter: 'invert(1) hue-rotate(180deg) brightness(0.85) contrast(1.1)' }}
        />

        {/* Cortex / Medulla */}
        <line
          x1={90}
          y1={230}
          x2={465}
          y2={230}
          stroke={C.fg}
          strokeWidth={1}
          strokeOpacity={0.2}
          strokeDasharray="6,5"
        />
        <text x={95} y={222} fill={C.fg} fillOpacity={0.4} fontSize={9} {...font}>
          CORTEX
        </text>
        <text x={95} y={244} fill={C.fg} fillOpacity={0.4} fontSize={9} {...font}>
          MEDULLA
        </text>

        {/* Osmolarity Gradient */}
        <defs>
          <linearGradient id="osm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={C.fg} stopOpacity={0.04} />
            <stop offset="100%" stopColor={C.fg} stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <rect x={72} y={230} width={12} height={340} fill="url(#osm)" rx={2} />
        <text
          x={78}
          y={222}
          fill={C.fg}
          fillOpacity={0.45}
          fontSize={7}
          textAnchor="middle"
          {...font}
        >
          300
        </text>
        <text
          x={78}
          y={578}
          fill={C.fg}
          fillOpacity={0.45}
          fontSize={7}
          textAnchor="middle"
          {...font}
        >
          1200
        </text>
        <text
          x={65}
          y={400}
          fill={C.fg}
          fillOpacity={0.3}
          fontSize={7}
          textAnchor="middle"
          {...font}
          transform="rotate(-90,65,400)"
        >
          OSMOLARITY (mOsm/kg)
        </text>

        {/* Structure Labels From Pre-annotated Anchors */}
        {vizAnchors['nephron-base'].anchors.map((a, i) => (
          <text
            key={i}
            x={a.x}
            y={a.y}
            fill={C.fg}
            fillOpacity={0.7}
            fontSize={a.fontSize || 7}
            textAnchor={a.textAnchor || 'start'}
            stroke="#000"
            strokeWidth={3}
            paintOrder="stroke"
            {...font}
          >
            {a.label}
          </text>
        ))}
        <text
          x={320}
          y={555}
          fill={C.fg}
          fillOpacity={0.3}
          fontSize={7}
          {...font}
          textAnchor="middle"
        >
          TO RENAL PELVIS
        </text>

        {/* Steps (right Panel, Clean Column) */}
        <Step
          y={50}
          n={1}
          title="FILTRATION"
          lines={[
            { text: 'BLOOD PRESSURE FORCES FLUID' },
            { text: 'THROUGH CAPILLARY TUFT → CAPSULE' }
          ]}
        />

        <Step
          y={110}
          n={2}
          title="BULK REABSORPTION"
          lines={[
            { text: 'GLUCOSE, AMINO ACIDS, Na⁺, WATER', color: REABSORB, opacity: 0.55 },
            { text: '~65% OF FILTRATE RECLAIMED HERE' },
            { text: '→ PERITUBULAR CAPILLARIES → BLOOD', color: REABSORB, opacity: 0.45 }
          ]}
        />

        <Step
          y={260}
          n={3}
          title="WATER EXIT"
          lines={[
            { text: 'THIN WALL PERMEABLE TO WATER' },
            { text: 'H₂O LEAVES BY OSMOSIS INTO', color: REABSORB, opacity: 0.5 },
            { text: 'HYPERTONIC MEDULLARY INTERSTITIUM', color: REABSORB, opacity: 0.45 }
          ]}
        />

        <Step
          y={380}
          n={4}
          title="ION TRANSPORT"
          lines={[
            { text: 'THICK WALL PUMPS Na⁺, K⁺, Cl⁻ OUT', color: REABSORB, opacity: 0.5 },
            { text: 'IMPERMEABLE TO WATER' },
            { text: 'BUILDS THE OSMOTIC GRADIENT' }
          ]}
        />

        <Step
          y={170}
          n={5}
          title="FINE TUNING"
          lines={[
            { text: 'Na⁺ REABSORBED OUT', color: REABSORB, opacity: 0.5 },
            { text: 'H⁺, K⁺ SECRETED IN', color: SECRETE, opacity: 0.55 },
            { text: '→ PERITUBULAR CAPILLARIES', color: REABSORB, opacity: 0.4 }
          ]}
        />

        <Step
          y={470}
          n={6}
          title="URINE CONCENTRATION"
          lines={[
            { text: 'COLLECTING DUCT DESCENDS THROUGH' },
            { text: 'MEDULLARY GRADIENT. ADH OPENS' },
            { text: 'AQUAPORINS → H₂O REABSORBED', color: REABSORB, opacity: 0.5 }
          ]}
        />

        {/* Legend */}
        <g transform="translate(100, 600)">
          <text x={0} y={3} fill={FILTRATE} fillOpacity={0.6} fontSize={7} {...font}>
            ● FLOW STEP
          </text>
          <text x={80} y={3} fill={REABSORB} fillOpacity={0.6} fontSize={7} {...font}>
            REABSORPTION
          </text>
          <text x={165} y={3} fill={SECRETE} fillOpacity={0.6} fontSize={7} {...font}>
            SECRETION
          </text>
          <text x={420} y={3} fill={C.fg} fillOpacity={0.2} fontSize={6} {...font}>
            BASE: YOSI I / WIKIMEDIA CC BY 3.0
          </text>
        </g>
      </svg>
    </div>
  )
}

// Test Page
export default function VizTest() {
  const C = useVizColors()
  return (
    <div style={{ padding: '2rem', background: '#000', minHeight: '100vh' }}>
      <h2
        style={{
          color: 'rgba(240,240,250,1)',
          fontFamily: 'var(--font-sans)',
          textTransform: 'uppercase',
          marginBottom: '2rem'
        }}
      >
        /viz test - fraction number line
      </h2>
      <div className="lrn-graph">
        <FractionNumberLine C={C} />
      </div>

      <h2
        style={{
          color: 'rgba(240,240,250,1)',
          fontFamily: 'var(--font-sans)',
          textTransform: 'uppercase',
          margin: '3rem 0 2rem'
        }}
      >
        /viz test - projectile motion simulator
      </h2>
      <div className="lrn-graph">
        <ProjectileMotionSim C={C} />
      </div>

      <h2
        style={{
          color: 'rgba(240,240,250,1)',
          fontFamily: 'var(--font-sans)',
          textTransform: 'uppercase',
          margin: '3rem 0 2rem'
        }}
      >
        /viz test - electron orbital shapes
      </h2>
      <div className="lrn-graph">
        <ElectronOrbitals C={C} />
      </div>

      <h2
        style={{
          color: 'rgba(240,240,250,1)',
          fontFamily: 'var(--font-sans)',
          textTransform: 'uppercase',
          margin: '3rem 0 2rem'
        }}
      >
        /viz test - nephron cross-section
      </h2>
      <div className="lrn-graph">
        <NephronDiagram C={C} />
      </div>
    </div>
  )
}
