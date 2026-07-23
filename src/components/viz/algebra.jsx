import React from 'react'
import {
  Plot,
  Axes,
  Parametric,
  Polyline,
  Dot,
  Arrow,
  Tex,
  Slider,
  Toggle,
  DragHandle,
  KatexInline,
  useAnimationTime,
  useReducedMotion,
  PlayPause,
  OPACITY
} from './primitives'
import { useVizColors } from './theme'
import {
  ARROW_HEAD,
  FONT_BODY,
  FONT_CONTROL,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TINY,
  FONT_VALUE,
  FONT_VALUE_XL,
  LS_CONTROL,
  LS_MEDIUM,
  POINT_HANDLE,
  STROKE_EMPHASIS,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from './scale-tokens'
// Polynomial evaluation
function polyEval(coeffs, x) {
  let r = 0
  for (let i = coeffs.length - 1; i >= 0; i--) r = r * x + coeffs[i]
  return r
}

// Quadratics
function discriminant(a, b, c) {
  return b * b - 4 * a * c
}
function quadraticRoots(a, b, c) {
  const D = discriminant(a, b, c)
  if (a === 0) return b === 0 ? [] : [-c / b]
  if (D > 0) {
    const s = Math.sqrt(D)
    return [(-b - s) / (2 * a), (-b + s) / (2 * a)]
  }
  if (D === 0) return [-b / (2 * a)]
  return []
}
function quadraticVertex(a, b, c) {
  const xv = -b / (2 * a)
  return [xv, polyEval([c, b, a], xv)]
}

// Sampling curves
function sampleFn(f, xMin, xMax, n = 200) {
  const out = []
  for (let i = 0; i <= n; i++) {
    const x = xMin + ((xMax - xMin) * i) / n
    const y = f(x)
    if (Number.isFinite(y)) out.push([x, y])
  }
  return out
}

// Combinatorics
function binomial(n, k) {
  if (k < 0 || k > n) return 0
  k = Math.min(k, n - k)
  let r = 1
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1)
  return Math.round(r)
}
function pascalRow(n) {
  const row = []
  for (let k = 0; k <= n; k++) row.push(binomial(n, k))
  return row
}
// Sequences
function fibonacci(n) {
  const out = [0, 1]
  for (let i = 2; i < n; i++) out.push(out[i - 1] + out[i - 2])
  return out.slice(0, n)
}

// Means
function arithmeticMean(a, b) {
  return (a + b) / 2
}
function geometricMean(a, b) {
  return Math.sqrt(a * b)
}
function harmonicMean(a, b) {
  return (2 * a * b) / (a + b)
}
function quadraticMean(a, b) {
  return Math.sqrt((a * a + b * b) / 2)
}

// M01 FOUNDATIONS

// M01 Foundations
// 01.1 Number line with negatives drag marker, show mirror across 0
// Engine: primitives (WebSearch 2026: mainstream JS chart libs are auto-scaling
// data-viz, not honest monochrome number-line primitives; Engine B is correct).
export function NumberLineNegativesViz() {
  const [x, setX] = React.useState(3)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7.5, 7.5]} yRange={[-2.2, 2.2]} width={520} height={280} pad={20}>
        <Polyline
          points={[
            [-7, 0],
            [7, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {[-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map(n => (
          <React.Fragment key={n}>
            <Polyline
              points={[
                [n, -0.18],
                [n, 0.18]
              ]}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[n, -0.95]}
              tex={String(n)}
              anchor="middle"
              size={FONT_SMALL}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        {/* mirror */}
        <Polyline
          points={[
            [-x, 0.6],
            [x, 0.6]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Dot x={-x} y={0} r={5} opacity={OPACITY.accent} />
        <Dot x={x} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[x, 1.15]}
          tex={String(+x.toFixed(2))}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-x, 1.15]}
          tex={`${(-x).toFixed(2)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
        <Dot x={0} y={0} r={3} opacity={OPACITY.fg} />
        <DragHandle
          x={x}
          y={0}
          onChange={nx => setX(Math.max(0.8, Math.min(6.5, nx)))}
          constrain={nx => [Math.max(0.8, Math.min(6.5, nx)), 0]}
        />
      </Plot>
    </div>
  )
}

// 01.2 Binary place value click bits
export function BinaryPlaceValueViz() {
  const C = useVizColors()
  const [bits, setBits] = React.useState([1, 0, 1, 1])
  const powers = [8, 4, 2, 1]
  const total = bits.reduce((a, b, i) => a + b * powers[i], 0)
  const toggle = i => setBits(b => b.map((v, j) => (j === i ? 1 - v : v)))
  const cellStyle = bit => ({
    flex: 1,
    padding: '14px 0',
    textAlign: 'center',
    cursor: 'pointer',
    border: `1px solid ${bit ? C.accent : C.faint}`,
    background: 'transparent'
  })
  return (
    <div style={{ width: '100%', padding: '12px 0' }}>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 16 }}>
        {bits.map((bit, i) => (
          <div key={i} onClick={() => toggle(i)} style={{ ...cellStyle(bit), width: 76 }}>
            <div style={{ fontSize: FONT_LABEL, letterSpacing: LS_CONTROL, color: C.dim }}>
              <KatexInline tex={`2^{${3 - i}}`} />
            </div>
            <div
              style={{
                fontSize: FONT_VALUE_XL,
                color: bit ? C.fg : C.faint,
                margin: '4px 0 2px'
              }}
            >
              {bit}
            </div>
            <div
              style={{
                fontSize: FONT_SMALL,
                letterSpacing: LS_CONTROL,
                color: bit ? C.fg : C.faint
              }}
            >{`= ${bit ? powers[i] : 0}`}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: FONT_CONTROL,
          letterSpacing: LS_MEDIUM,
          color: C.fg,
          padding: '10px 0',
          borderTop: `1px solid ${C.faint}`
        }}
      >
        <span style={{ opacity: 0.5 }}>{bits.join('')}</span>
        <span style={{ opacity: 0.3, margin: '0 8px' }}>=</span>
        <span style={{ opacity: 1, fontSize: FONT_BODY, fontWeight: 600 }}>{total}</span>
        <span style={{ opacity: 0.4, marginLeft: 10 }}>
          ={' '}
          {bits
            .map((b, i) => (b ? powers[i] : 0))
            .filter(v => v)
            .join(' + ') || '0'}
        </span>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: FONT_TINY,
          letterSpacing: '0.2em',
          color: C.dim,
          marginTop: 10,
          textTransform: 'uppercase'
        }}
      >
        click any bit to toggle
      </div>
    </div>
  )
}

// 01.3 Commutativity grid drag rows × cols
export function CommutativityGridViz() {
  const [rows, setRows] = React.useState(3)
  const [cols, setCols] = React.useState(5)
  const dots = []
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) dots.push([c - (cols - 1) / 2, r - (rows - 1) / 2])
  const product = rows * cols
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 5]} yRange={[-3.2, 3.2]} width={520} height={380} pad={20}>
        {dots.map(([x, y], i) => (
          <Dot key={i} x={x} y={y} r={4.5} opacity={OPACITY.fg} />
        ))}
        <Tex
          at={[0, 2.7]}
          tex={`${rows} \\times ${cols} \\;=\\; ${cols} \\times ${rows} \\;=\\; ${product}`}
          anchor="middle"
          size={FONT_CONTROL}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider
        label="rows"
        value={rows}
        min={1}
        max={6}
        step={1}
        onChange={v => setRows(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="cols"
        value={cols}
        min={1}
        max={7}
        step={1}
        onChange={v => setCols(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}

// 01.4 Distributive law drag splitter between b and c
export function DistributiveLawViz() {
  const a = 3
  const [split, setSplit] = React.useState(4)
  const total = 7
  const b = split,
    c = total - split
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.5, 8.5]} yRange={[-1.6, 4.5]} width={520} height={380} pad={20}>
        {/* outer rect */}
        <Polyline
          points={[
            [0, 0],
            [total, 0],
            [total, a],
            [0, a]
          ]}
          closed
          opacity={OPACITY.fg}
          fillOpacity={0.05}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* split line */}
        <Polyline
          points={[
            [b, 0],
            [b, a]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[b / 2, a / 2]}
          tex={`a\\!\\cdot\\!b = ${(a * b).toFixed(0)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[b + c / 2, a / 2]}
          tex={`a\\!\\cdot\\!c = ${(a * c).toFixed(0)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[b / 2, -0.55]}
          tex={`b\\!=\\!${b.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[b + c / 2, -0.55]}
          tex={`c\\!=\\!${c.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.8, a / 2]}
          tex={`a\\!=\\!${a}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[total / 2, 4.0]}
          tex={`a(b+c) = ab + ac = ${(a * total).toFixed(0)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={b}
          y={a + 0.25}
          onChange={nx => setSplit(Math.max(0.2, Math.min(total - 0.2, nx)))}
          constrain={nx => [Math.max(0.2, Math.min(total - 0.2, nx)), a + 0.25]}
          label="split"
        />
      </Plot>
    </div>
  )
}

// 01.5 Number line integers, fractions, irrationals
export function NumberLineViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 5]} yRange={[-2.2, 2.2]} width={520} height={320} pad={20}>
        <Polyline
          points={[
            [-5, 0],
            [5, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map(n => (
          <React.Fragment key={n}>
            <Polyline
              points={[
                [n, -0.12],
                [n, 0.12]
              ]}
              opacity={OPACITY.dim}
            />
            <Dot x={n} y={0} r={2.5} opacity={OPACITY.dim} />
            <Tex
              at={[n, -0.85]}
              tex={String(n)}
              anchor="middle"
              size={FONT_LABEL}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        <Dot x={Math.SQRT2} y={0} r={4.5} opacity={OPACITY.fg} />
        <Tex
          at={[Math.SQRT2, 1.0]}
          tex={'\\sqrt{2}'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Dot x={1 / 3} y={0} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[1 / 3, 1.55]}
          tex={'\\tfrac{1}{3}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

// 01.6 / 01.7 REMOVED in the 2026-07-11 refinement pass.
//   PemdasViz - forbidden mode 4 (canvas-as-text-panel): a layout that restated the
//     numbered PEMDAS list already printed above it and computed nothing.
//   ExponentLawsViz - forbidden mode 4 + mode 5 (tautology): a Plot canvas that only
//     typeset three exponent laws already rendered with derivations in the same
//     section. No geometry, no live input. Both deleted; not replaced.
//   See docs/audit-algebra.md rows 1–2.

// 01.8 Square of a sum drag a and b
export function SquareOfSumGeomViz() {
  const [a, setA] = React.useState(3)
  const [b, setB] = React.useState(2)
  const total = a + b
  const aBottomY = -0.55
  const bBottomY = -0.55
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: xRange span 9 == yRange span 9, width == height */}
      <Plot xRange={[-3.7, 9.3]} yRange={[-1.5, 7.5]} width={560} height={400} pad={20}>
        {/* a² */}
        <Polyline
          points={[
            [0, 0],
            [a, 0],
            [a, a],
            [0, a]
          ]}
          closed
          opacity={OPACITY.fg}
          fillOpacity={0.12}
        />
        {/* b² */}
        <Polyline
          points={[
            [a, a],
            [total, a],
            [total, total],
            [a, total]
          ]}
          closed
          opacity={OPACITY.fg}
          fillOpacity={0.12}
        />
        {/* ab top */}
        <Polyline
          points={[
            [0, a],
            [a, a],
            [a, total],
            [0, total]
          ]}
          closed
          opacity={OPACITY.accent}
          fillOpacity={0.18}
        />
        {/* ab right */}
        <Polyline
          points={[
            [a, 0],
            [total, 0],
            [total, a],
            [a, a]
          ]}
          closed
          opacity={OPACITY.accent}
          fillOpacity={0.18}
        />
        {/* outer */}
        <Polyline
          points={[
            [0, 0],
            [total, 0],
            [total, total],
            [0, total]
          ]}
          closed
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[a / 2, a / 2]}
          tex={`a^2`}
          anchor="middle"
          size={FONT_CONTROL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[a + b / 2, a + b / 2]}
          tex={`b^2`}
          anchor="middle"
          size={FONT_CONTROL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[a / 2, a + b / 2]}
          tex={'ab'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[a + b / 2, a / 2]}
          tex={'ab'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[a / 2, aBottomY]}
          tex={`a\\!=\\!${a.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[a + b / 2, bBottomY]}
          tex={`b\\!=\\!${b.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[total / 2, total + 0.55]}
          tex={`(a+b)^2 = a^2 + 2ab + b^2 = ${(total * total).toFixed(2)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={a}
          y={-0.2}
          onChange={nx => setA(Math.max(1, Math.min(6.8 - b, nx)))}
          constrain={nx => [Math.max(1, Math.min(6.8 - b, nx)), -0.2]}
        />
        <DragHandle
          x={total}
          y={-0.2}
          onChange={nx => setB(Math.max(1, Math.min(6.8 - a, nx - a)))}
          constrain={nx => [Math.max(a + 1, Math.min(6.8, nx)), -0.2]}
        />
      </Plot>
    </div>
  )
}

// 01.10 Pascal's triangle hover to highlight row
export function PascalTriangleViz() {
  const [hover, setHover] = React.useState(-1)
  // Rows generated by the binomial rule C(n,k) - not a baked-in array.
  const rows = Array.from({ length: 8 }, (_, n) => pascalRow(n))
  const rowH = 0.85,
    spacing = 0.95
  const pts = []
  rows.forEach((row, ri) => {
    const y = (rows.length - 1 - ri) * rowH
    const startX = -((row.length - 1) * spacing) / 2
    row.forEach((v, ci) => pts.push({ x: startX + ci * spacing, y, v, ri, ci }))
  })
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[-4.5, 4.5]}
        yRange={[-0.4, rows.length * rowH]}
        width={520}
        height={320}
        pad={16}
      >
        {pts.map((p, i) => {
          const active = p.ri === hover
          return (
            <g
              key={i}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHover(p.ri)}
              onMouseLeave={() => setHover(-1)}
            >
              <Tex
                at={[p.x, p.y]}
                tex={String(p.v)}
                anchor="middle"
                size={FONT_TEX}
                opacity={active ? OPACITY.fg : p.v === 1 ? OPACITY.dim : OPACITY.dim * 1.3}
              />
            </g>
          )
        })}
        {hover >= 0 && (
          <Tex
            at={[0, -0.25]}
            tex={`(a+b)^{${hover}}: \\;${rows[hover]
              .map((v, k) => {
                const term =
                  k === 0
                    ? `a^{${hover}}`
                    : k === hover
                      ? `b^{${hover}}`
                      : `${v === 1 ? '' : v}a^{${hover - k}}b^{${k}}`
                return (k > 0 ? '+' : '') + term
              })
              .join('')}`}
            anchor="middle"
            size={11}
            opacity={OPACITY.accent}
          />
        )}
      </Plot>
    </div>
  )
}

// M02 LINEAR EQUATIONS

// M02 Linear Equations
// 02.1 Two lines intersect drag handles to move lines, intersection auto-computed
export function TwoLinesViz() {
  // Each line as two draggable points
  const [p1a, setP1a] = React.useState([-5, 3])
  const [p1b, setP1b] = React.useState([5, -1])
  const [p2a, setP2a] = React.useState([-4, -3])
  const [p2b, setP2b] = React.useState([4, 4])
  const [x1a, y1a] = p1a,
    [x1b, y1b] = p1b,
    [x2a, y2a] = p2a,
    [x2b, y2b] = p2b
  // Line 1: parametric, also as y = m1 x + b1 (if not vertical)
  const det = (x1b - x1a) * (y2b - y2a) - (y1b - y1a) * (x2b - x2a)
  let ix = NaN,
    iy = NaN
  if (Math.abs(det) > 1e-6) {
    const t = ((x2a - x1a) * (y2b - y2a) - (y2a - y1a) * (x2b - x2a)) / det
    ix = x1a + t * (x1b - x1a)
    iy = y1a + t * (y1b - y1a)
  }
  // Extend lines visually across full range
  const extend = (a, b, X) => {
    const [ax, ay] = a,
      [bx, by] = b
    const dx = bx - ax,
      dy = by - ay
    if (Math.abs(dx) < 1e-6)
      return [
        [ax, -X],
        [ax, X]
      ]
    const m = dy / dx,
      c = ay - m * ax
    return [
      [-X, -X * m + c],
      [X, X * m + c]
    ]
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7, 7]} yRange={[-5, 5]} width={520} height={440} pad={20}>
        <Axes step={1} showGrid={false} />
        <Polyline points={extend(p1a, p1b, 7)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={extend(p2a, p2b, 7)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        {Number.isFinite(ix) && Math.abs(ix) < 8 && Math.abs(iy) < 6 && (
          <>
            <Dot x={ix} y={iy} r={6} opacity={OPACITY.fg} />
            <Tex
              at={[ix + 0.3, iy + 0.4]}
              tex={`(${ix.toFixed(2)},\\,${iy.toFixed(2)})`}
              anchor="start"
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
          </>
        )}
        <DragHandle x={x1a} y={y1a} onChange={(nx, ny) => setP1a([nx, ny])} />
        <DragHandle x={x1b} y={y1b} onChange={(nx, ny) => setP1b([nx, ny])} />
        <DragHandle x={x2a} y={y2a} onChange={(nx, ny) => setP2a([nx, ny])} />
        <DragHandle x={x2b} y={y2b} onChange={(nx, ny) => setP2b([nx, ny])} />
        {!Number.isFinite(ix) && (
          <Tex
            at={[0, 4.4]}
            tex={'\\text{lines are parallel no solution}'}
            anchor="middle"
            size={FONT_LABEL}
            opacity={OPACITY.dim}
          />
        )}
      </Plot>
    </div>
  )
}

// 02.2 Parabola plot y = x² − 3x + 2
export function ParabolaPlotViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2, 5]} yRange={[-1.5, 7]} width={520} height={460} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x - 3 * x + 2, -2, 5, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={1} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={2} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={1.5} y={-0.25} r={4} opacity={OPACITY.accent} />
        <Tex at={[1, -0.7]} tex={'x_1=1'} anchor="middle" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex at={[2, -0.7]} tex={'x_2=2'} anchor="middle" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex
          at={[2.5, -0.9]}
          tex={'\\text{vertex}\\;(1.5, -0.25)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[3.5, 4.5]}
          tex={'y = x^2 - 3x + 2'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// M03 QUADRATIC EQUATIONS

// M03 Quadratic Equations
// 03.1 Standard form y = x² − 2x − 3 roots r₁=3, r₂=−1
export function StandardFormViz() {
  const a = 1,
    b = -2,
    c = -3
  const roots = quadraticRoots(a, b, c).sort((x, y) => x - y) // [-1, 3]
  const [vx, vy] = quadraticVertex(a, b, c)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4, 6]} yRange={[-5, 7]} width={520} height={460} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => a * x * x + b * x + c, -4, 6, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={roots[0]} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={roots[1]} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={vx} y={vy} r={4} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [vx, 0],
            [vx, vy]
          ]}
          opacity={OPACITY.dim * 0.5}
          dash="2 3"
        />
        <Tex
          at={[roots[0], -0.8]}
          tex={`r_2 = ${roots[0]}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[roots[1], -0.8]}
          tex={`r_1 = ${roots[1]}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[vx + 0.3, vy - 0.5]}
          tex={`(${vx},\\,${vy})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[3.8, 5.5]}
          tex={'y = x^2 - 2x - 3'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// 03.2 Discriminant cases on one plot
export function ParabolaDiscriminantViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 7]} yRange={[-3, 6]} width={520} height={440} pad={20}>
        <Axes step={1} showGrid={false} />
        {/* D > 0: y = x² − 3x + 1, roots (3±√5)/2 */}
        <Polyline
          points={sampleFn(x => x * x - 3 * x + 1, -2, 5, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={(3 + Math.sqrt(5)) / 2} y={0} r={4} opacity={OPACITY.fg} />
        <Dot x={(3 - Math.sqrt(5)) / 2} y={0} r={4} opacity={OPACITY.fg} />
        <Tex
          at={[5.7, 2.3]}
          tex={'D > 0: 2 \\text{ roots}'}
          anchor="end"
          size={11}
          opacity={OPACITY.fg}
        />
        {/* D = 0: y = (x−2)², double root x=2 */}
        <Polyline
          points={sampleFn(x => (x - 2) * (x - 2), 0, 4, 200)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={2} y={0} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[5.7, 1.1]}
          tex={'D = 0: \\text{double root}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        {/* D < 0: y = x² − x + 2 */}
        <Polyline
          points={sampleFn(x => x * x - x + 2, -2, 3, 200)}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[5.7, -0.2]}
          tex={'D < 0: \\text{no real roots}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

// 03.3 Slide c in y = x² + x + c roots appear and vanish at c = 1/4
export function InteractiveDiscriminantViz() {
  const [c, setC] = React.useState(-1)
  const D = 1 - 4 * c
  const hasRoots = D > 1e-6
  const r1 = (-1 - Math.sqrt(Math.max(D, 0))) / 2
  const r2 = (-1 + Math.sqrt(Math.max(D, 0))) / 2
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4, 4]} yRange={[-3, 5]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x + x + c, -4, 4, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {hasRoots && (
          <>
            <Dot x={r1} y={0} r={5} opacity={OPACITY.fg} />
            <Dot x={r2} y={0} r={5} opacity={OPACITY.fg} />
          </>
        )}
        {Math.abs(D) < 1e-6 && <Dot x={-0.5} y={0} r={5} opacity={OPACITY.accent} />}
        <Tex
          at={[2.4, 4.3]}
          tex={`c = ${c.toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[2.4, 3.5]}
          tex={`D = 1 - 4c = ${D.toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={hasRoots ? OPACITY.fg : OPACITY.dim}
        />
        <Tex
          at={[2.4, 2.7]}
          tex={
            hasRoots
              ? `2 \\text{ real roots}`
              : Math.abs(D) < 1e-6
                ? `1 \\text{ double root}`
                : `0 \\text{ real roots}`
          }
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider
        label="$c$"
        value={c}
        min={-2}
        max={1.5}
        step={0.01}
        onChange={setC}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}

// 03.4 Live parabola sliders for a, b, c
export function InteractiveParabolaViz() {
  const [a, setA] = React.useState(1)
  const [b, setB] = React.useState(-1)
  const [c, setC] = React.useState(-2)
  const aSafe = Math.abs(a) < 0.05 ? (a >= 0 ? 0.05 : -0.05) : a
  const vx = -b / (2 * aSafe),
    vy = aSafe * vx * vx + b * vx + c
  const D = b * b - 4 * aSafe * c
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic (ux == uy = 33.3) */}
      <Plot xRange={[-8.67, 8.67]} yRange={[-6, 6]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => aSafe * x * x + b * x + c, -6, 6, 200).filter(
            p => Math.abs(p[1]) < 20
          )}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={vx} y={vy} r={4} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [vx, -6],
            [vx, 6]
          ]}
          opacity={OPACITY.dim * 0.4}
          dash="2 3"
        />
        {D > 0 && (
          <>
            <Dot x={(-b - Math.sqrt(D)) / (2 * aSafe)} y={0} r={4} opacity={OPACITY.fg} />
            <Dot x={(-b + Math.sqrt(D)) / (2 * aSafe)} y={0} r={4} opacity={OPACITY.fg} />
          </>
        )}
      </Plot>
      {/* readouts under the plot, per house style */}
      <div
        style={{
          marginTop: 12,
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          fontSize: FONT_LABEL,
          letterSpacing: LS_CONTROL,
          color: 'var(--text-primary)'
        }}
      >
        <KatexInline tex={`a=${aSafe.toFixed(2)}`} />
        <KatexInline tex={`b=${b.toFixed(2)}`} />
        <KatexInline tex={`c=${c.toFixed(2)}`} />
        <KatexInline tex={`D=${D.toFixed(2)}`} />
      </div>
      <Slider label="$a$" value={a} min={-2} max={2} step={0.05} onChange={setA} />
      <Slider label="$b$" value={b} min={-4} max={4} step={0.05} onChange={setB} />
      <Slider label="$c$" value={c} min={-4} max={4} step={0.05} onChange={setC} />
    </div>
  )
}

// 03.5 Quadratic inequality (x−1)(x−2) sign chart
export function NumberLineInequalityViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3, 6]} yRange={[-2, 2]} width={520} height={240} pad={20}>
        <Polyline
          points={[
            [-3, 0],
            [6, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {[-2, -1, 0, 1, 2, 3, 4, 5].map(n => (
          <React.Fragment key={n}>
            <Polyline
              points={[
                [n, -0.12],
                [n, 0.12]
              ]}
              opacity={OPACITY.faint * 2}
            />
            <Tex
              at={[n, -1.1]}
              tex={String(n)}
              anchor="middle"
              size={FONT_SMALL}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        <Polyline
          points={[
            [-3, 0],
            [1, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Polyline
          points={[
            [2, 0],
            [6, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Polyline
          points={[
            [1, 0],
            [2, 0]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
        />
        {/* strict < 0: endpoints excluded ⇒ hollow (open) circles */}
        <Dot x={1} y={0} r={5} opacity={OPACITY.fg} fill={false} />
        <Dot x={2} y={0} r={5} opacity={OPACITY.fg} fill={false} />
        <Tex at={[-1, 0.7]} tex={'+'} anchor="middle" size={FONT_BODY} opacity={OPACITY.fg} />
        <Tex at={[1.5, 0.7]} tex={'-'} anchor="middle" size={FONT_BODY} opacity={OPACITY.accent} />
        <Tex at={[4, 0.7]} tex={'+'} anchor="middle" size={FONT_BODY} opacity={OPACITY.fg} />
        <Tex
          at={[1.5, 1.4]}
          tex={'(x-1)(x-2) < 0'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

// 03.6 Powers of i animated rotation by i
export function PowersOfIViz() {
  // House motion rule: self-start only when motion is allowed; an explicit PLAY press
  // overrides reduced-motion (useAnimationTime freezes at t=0 until `running` toggles).
  const reduced = useReducedMotion()
  const [playing, setPlaying] = React.useState(!reduced)
  const t = useAnimationTime(playing)
  // Cycle 0 → 1 → 2 → 3 → 0 each ~1.2s
  const cycT = (t / 1.2) % 4
  const stageI = Math.floor(cycT)
  const k = stageI // current power in the i⁰→i¹→i²→i³ cycle
  const frac = cycT - stageI
  const ease = 0.5 - 0.5 * Math.cos(Math.PI * frac)
  const ang = ((stageI + ease) * Math.PI) / 2
  const px = Math.cos(ang),
    py = Math.sin(ang)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic Argand plane: equal spans [-1.6,1.6] AND square viewBox (440²) ⇒
          ux=uy=125, so the unit circle is round and ×i is a true 90° rotation. */}
      <Plot xRange={[-2.3, 2.3]} yRange={[-1.6, 1.6]} width={560} height={400} pad={20}>
        <Axes step={0.5} showGrid={false} />
        <Parametric
          xy={t => [Math.cos(t), Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={120}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* axis-cardinal labels */}
        <Dot x={1} y={0} r={3} opacity={OPACITY.dim} />{' '}
        <Tex at={[1.18, 0]} tex={'1'} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Dot x={0} y={1} r={3} opacity={OPACITY.dim} />{' '}
        <Tex at={[0.12, 1.12]} tex={'i'} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Dot x={-1} y={0} r={3} opacity={OPACITY.dim} />{' '}
        <Tex at={[-1.18, 0]} tex={'-1'} anchor="end" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Dot x={0} y={-1} r={3} opacity={OPACITY.dim} />{' '}
        <Tex at={[0.12, -1.0]} tex={'-i'} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim} />
        {/* moving arrow */}
        <Arrow
          from={[0, 0]}
          to={[px, py]}
          opacity={OPACITY.fg}
          head={ARROW_HEAD}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot x={px} y={py} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[0, -1.42]}
          tex={`i^{${k}} \\to i^{${k + 1}}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
      <PlayPause playing={playing} onToggle={() => setPlaying(p => !p)} label="rotate ×i" />
    </div>
  )
}

// 03.7 Vieta drag two roots, sum & product update
export function VietasRootsViz() {
  const [r1, setR1] = React.useState(-1)
  const [r2, setR2] = React.useState(3)
  const f = x => (x - r1) * (x - r2)
  const sum = r1 + r2
  const prod = r1 * r2
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic (ux == uy = 40) */}
      <Plot xRange={[-7.2, 7.2]} yRange={[-5, 5]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(f, -5, 5, 200).filter(p => Math.abs(p[1]) < 8)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={r1} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={r2} y={0} r={5} opacity={OPACITY.fg} />
        <DragHandle
          x={r1}
          y={0}
          onChange={nx => setR1(Math.max(-4.5, Math.min(4.5, nx)))}
          constrain={nx => [Math.max(-4.5, Math.min(4.5, nx)), 0]}
          label="$r_1$"
        />
        <DragHandle
          x={r2}
          y={0}
          onChange={nx => setR2(Math.max(-4.5, Math.min(4.5, nx)))}
          constrain={nx => [Math.max(-4.5, Math.min(4.5, nx)), 0]}
          label="$r_2$"
        />
      </Plot>
      {/* readouts under the plot, per house style */}
      <div
        style={{
          marginTop: 12,
          display: 'flex',
          justifyContent: 'center',
          gap: 18,
          flexWrap: 'wrap',
          fontSize: FONT_LABEL,
          letterSpacing: LS_CONTROL,
          color: 'var(--text-primary)'
        }}
      >
        <KatexInline
          tex={`x^2 ${sum >= 0 ? '-' : '+'} ${Math.abs(sum).toFixed(2)}x ${prod >= 0 ? '+' : '-'} ${Math.abs(prod).toFixed(2)}`}
        />
        <KatexInline tex={`r_1+r_2=${sum.toFixed(2)}`} />
        <KatexInline tex={`r_1 r_2=${prod.toFixed(2)}`} />
      </div>
    </div>
  )
}

// 03.8 Vertex as min of f(x) = x² − 4x + 7
export function MaxMinViz() {
  const a = 1,
    b = -4,
    c = 7
  const vx = -b / (2 * a),
    vy = c - (b * b) / (4 * a)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, 7]} yRange={[0, 12]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => a * x * x + b * x + c, -1, 7, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={vx} y={vy} r={5} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [vx, 0],
            [vx, vy]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="2 3"
        />
        <Polyline
          points={[
            [-1, vy],
            [vx, vy]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="2 3"
        />
        <Tex
          at={[vx + 0.3, vy + 0.6]}
          tex={`(2,\\,3)`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[vx + 0.3, 0.6]}
          tex={'x=2'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.85, vy + 0.4]}
          tex={'y=3'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[4.5, 11]}
          tex={'f(x) = x^2 - 4x + 7'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[4.5, 10]}
          tex={'\\min f = 3'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

// 03.9 Al-Khwarizmi geometric completing the square: x² + 10x = 39
export function AlKhwarizmiViz() {
  const [t, setT] = React.useState(0) // 0 = original L, 1 = full square completed
  // x² + 10x = 39; split 10x into 4 rectangles of size (10/4)x = 2.5x; corners are 2.5² = 6.25.
  // Total: x² + 10x + 4·6.25 = 39 + 25 = 64 → (x+5)² = 64 → x+5 = 8 → x = 3
  const x = 3,
    halfB = 2.5 // each corner side
  // Animate: corner squares fade in by t
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic (ux == uy = 36.5): central x² and corner squares render square */}
      <Plot xRange={[-4.06, 12.56]} yRange={[-1.5, 10]} width={560} height={400} pad={20}>
        {/* x² central square */}
        <Polyline
          points={[
            [halfB, halfB],
            [halfB + x, halfB],
            [halfB + x, halfB + x],
            [halfB, halfB + x]
          ]}
          closed
          opacity={OPACITY.fg}
          fillOpacity={0.18}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[halfB + x / 2, halfB + x / 2]}
          tex={'x^2'}
          anchor="middle"
          size={FONT_CONTROL}
          opacity={OPACITY.fg}
        />
        {/* 4 side rectangles (2.5x each) */}
        {[
          [
            [halfB, 0],
            [halfB + x, 0],
            [halfB + x, halfB],
            [halfB, halfB]
          ], // bottom
          [
            [halfB, halfB + x],
            [halfB + x, halfB + x],
            [halfB + x, halfB + x + halfB],
            [halfB, halfB + x + halfB]
          ], // top
          [
            [0, halfB],
            [halfB, halfB],
            [halfB, halfB + x],
            [0, halfB + x]
          ], // left
          [
            [halfB + x, halfB],
            [halfB + x + halfB, halfB],
            [halfB + x + halfB, halfB + x],
            [halfB + x, halfB + x]
          ] // right
        ].map((pts, i) => (
          <Polyline
            key={i}
            points={pts}
            closed
            opacity={OPACITY.accent}
            fillOpacity={0.12}
            strokeWidth={STROKE_SECONDARY}
          />
        ))}
        <Tex
          at={[halfB + x / 2, halfB / 2]}
          tex={'2.5x'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[halfB / 2, halfB + x / 2]}
          tex={'2.5x'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        {/* 4 corner squares appear with t */}
        {t > 0 &&
          [
            [
              [0, 0],
              [halfB, 0],
              [halfB, halfB],
              [0, halfB]
            ],
            [
              [halfB + x, 0],
              [halfB + x + halfB, 0],
              [halfB + x + halfB, halfB],
              [halfB + x, halfB]
            ],
            [
              [0, halfB + x],
              [halfB, halfB + x],
              [halfB, halfB + x + halfB],
              [0, halfB + x + halfB]
            ],
            [
              [halfB + x, halfB + x],
              [halfB + x + halfB, halfB + x],
              [halfB + x + halfB, halfB + x + halfB],
              [halfB + x, halfB + x + halfB]
            ]
          ].map((pts, i) => (
            <Polyline
              key={i}
              points={pts}
              closed
              opacity={OPACITY.fg * t}
              fillOpacity={0.35 * t}
              strokeWidth={STROKE_SECONDARY}
            />
          ))}
        {/* big square outline */}
        <Polyline
          points={[
            [0, 0],
            [halfB + x + halfB, 0],
            [halfB + x + halfB, halfB + x + halfB],
            [0, halfB + x + halfB]
          ]}
          closed
          opacity={OPACITY.fg * (0.4 + 0.6 * t)}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[(halfB + x + halfB) / 2, halfB + x + halfB + 0.55]}
          tex={t > 0.5 ? `(x+5)^2 = 39 + 25 = 64,\\; x = 3` : `x^2 + 10x = 39`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="complete"
        value={t}
        min={0}
        max={1}
        step={0.01}
        onChange={setT}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}

// M04 ROOTS · POWERS · INEQUALITIES

// M04 Roots, Powers, Inequalities
// 04.1 Mean chain HM ≤ GM ≤ AM ≤ QM drag a and b
export function MeanChainViz() {
  const [a, setA] = React.useState(1)
  const [b, setB] = React.useState(9)
  const hm = harmonicMean(a, b),
    gm = geometricMean(a, b),
    am = arithmeticMean(a, b),
    qm = quadraticMean(a, b)
  const X = 11
  const abMarkerClose = b - a < 2
  const aMarkerY = abMarkerClose ? 1.68 : 1.8
  const bMarkerY = abMarkerClose ? 1.95 : 1.8
  const meansArr = [hm, gm, am, qm]
  const minMeanGap = meansArr.slice(1).reduce((mn, v, i) => Math.min(mn, v - meansArr[i]), Infinity)
  const meansClose = minMeanGap < 2
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, X]} yRange={[-2.3, 2.5]} width={520} height={320} pad={20}>
        <Polyline
          points={[
            [0, 0],
            [X, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
          <React.Fragment key={n}>
            <Polyline
              points={[
                [n, -0.12],
                [n, 0.12]
              ]}
              opacity={OPACITY.faint * 2}
            />
            <Tex
              at={[n, -1.5]}
              tex={String(n)}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        {/* a and b markers */}
        <Dot x={a} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[a, aMarkerY]}
          tex={`a=${a.toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Dot x={b} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[b, bMarkerY]}
          tex={`b=${b.toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        {/* four means as ticks above */}
        {[
          ['HM', hm, 0.5],
          ['GM', gm, 0.5],
          ['AM', am, 0.5],
          ['QM', qm, 0.5]
        ].map(([name, val], i) => {
          const nameY = meansClose ? (i % 2 === 0 ? 1.05 : 1.32) : 1.15
          const numY = meansClose ? (i % 2 === 0 ? -0.62 : -0.92) : -0.75
          return (
            <React.Fragment key={name}>
              <Polyline
                points={[
                  [val, 0],
                  [val, 0.9]
                ]}
                opacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              <Dot x={val} y={0} r={3.5} opacity={OPACITY.fg} />
              <Tex
                at={[val, nameY]}
                tex={name}
                anchor="middle"
                size={FONT_SMALL}
                opacity={OPACITY.fg}
              />
              <Tex
                at={[val, numY]}
                tex={val.toFixed(2)}
                anchor="middle"
                size={FONT_SMALL}
                opacity={OPACITY.dim}
              />
            </React.Fragment>
          )
        })}
        <Tex
          at={[X / 2, -2.05]}
          tex={`\\mathrm{HM} \\le \\mathrm{GM} \\le \\mathrm{AM} \\le \\mathrm{QM}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <DragHandle
          x={a}
          y={0}
          onChange={nx => setA(Math.max(0.1, Math.min(b - 0.1, nx)))}
          constrain={nx => [Math.max(0.1, Math.min(b - 0.1, nx)), 0]}
        />
        <DragHandle
          x={b}
          y={0}
          onChange={nx => setB(Math.max(a + 0.1, Math.min(10.5, nx)))}
          constrain={nx => [Math.max(a + 0.1, Math.min(10.5, nx)), 0]}
        />
      </Plot>
    </div>
  )
}

// 04.2 AM-GM by dissection: (a+b)² = 4ab + (a−b)², hence ab ≤ ((a+b)/2)².
// Four congruent a×b rectangles tile a square of side (a+b) as a pinwheel; the gap
// they leave is a central square of side |a−b|, which is EXACTLY the surplus
// ((a+b)/2)² − ab. It shrinks to zero (equality) only when a = b. This shows WHY
// the inequality holds - not merely that two computed areas differ (avoids the
// tautology / re-assertion failure mode). Every vertex, area and readout is
// computed from the live a/b sliders.
export function AMGMRectViz() {
  const [a, setA] = React.useState(1.5)
  const [b, setB] = React.useState(3.5)
  const A = Math.max(a, b) // long side
  const B = Math.min(a, b) // short side
  const S = A + B // big-square side = a + b
  const gap = A - B // central-square side = |a − b|
  const rectArea = a * b
  const bigArea = S * S
  const sqAM = ((a + b) / 2) ** 2
  const surplus = gap * gap
  // Pinwheel of four a×b rectangles around a central (A−B)² square.
  const rects = [
    [
      [0, 0],
      [A, 0],
      [A, B],
      [0, B]
    ], // bottom
    [
      [A, 0],
      [S, 0],
      [S, A],
      [A, A]
    ], // right
    [
      [B, A],
      [S, A],
      [S, S],
      [B, S]
    ], // top
    [
      [0, B],
      [B, B],
      [B, S],
      [0, S]
    ] // left
  ]
  const readoutRow = {
    marginTop: 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    fontSize: FONT_LABEL,
    letterSpacing: LS_CONTROL,
    color: `rgba(240, 240, 250, ${OPACITY.fg})`
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3.83, 11.33]} yRange={[-1.5, 9]} width={560} height={400} pad={20}>
        {/* four congruent a×b rectangles */}
        {rects.map((pts, i) => (
          <Polyline
            key={i}
            points={pts}
            closed
            opacity={OPACITY.dim}
            fillOpacity={0.07}
            strokeWidth={STROKE_SECONDARY}
          />
        ))}
        {/* the surplus: central square of side |a−b| */}
        {gap > 0.02 && (
          <Polyline
            points={[
              [B, B],
              [A, B],
              [A, A],
              [B, A]
            ]}
            closed
            opacity={OPACITY.accent}
            fillOpacity={0.22}
            dash="4 3"
            strokeWidth={STROKE_PRIMARY}
          />
        )}
        {/* big square (a+b) outline */}
        <Polyline
          points={[
            [0, 0],
            [S, 0],
            [S, S],
            [0, S]
          ]}
          closed
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[A / 2, B / 2]}
          tex={'a\\times b'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        {gap > 1.1 && (
          <Tex
            at={[S / 2, S / 2]}
            tex={'(a\\!-\\!b)^2'}
            anchor="middle"
            size={FONT_LABEL}
            opacity={OPACITY.accent}
          />
        )}
        <Tex
          at={[S / 2, -0.7]}
          tex={`a+b = ${S.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      {/* Readouts under the plot, per house rule. */}
      <div style={readoutRow}>
        <KatexInline tex={'(a+b)^2 = 4ab + (a-b)^2'} />
        <KatexInline
          tex={`${bigArea.toFixed(2)} = ${(4 * rectArea).toFixed(2)} + ${surplus.toFixed(2)}`}
        />
        <KatexInline
          tex={`ab = ${rectArea.toFixed(2)} \\le \\left(\\tfrac{a+b}{2}\\right)^2 = ${sqAM.toFixed(2)}${surplus < 0.005 ? '\\quad(\\text{equality})' : ''}`}
        />
      </div>
      <Slider
        label="$a$"
        value={a}
        min={0.5}
        max={4}
        step={0.1}
        onChange={setA}
        format={v => v.toFixed(1)}
      />
      <Slider
        label="$b$"
        value={b}
        min={0.5}
        max={4}
        step={0.1}
        onChange={setB}
        format={v => v.toFixed(1)}
      />
    </div>
  )
}

// 04.3 QM ≥ AM via convexity of y = x²
export function QMConvexViz() {
  const [a, setA] = React.useState(1)
  const [b, setB] = React.useState(3.5)
  const y1 = a * a,
    y2 = b * b
  const midX = (a + b) / 2
  const chordY = (y1 + y2) / 2 // = (a² + b²)/2 note this is the y on the chord at the midpoint
  const curveY = midX * midX // = ((a+b)/2)²
  const abClose = b - a < 2
  const aLabelY = abClose ? -0.4 : -0.55
  const bLabelY = abClose ? -0.72 : -0.55
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, 5]} yRange={[-1, 16]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x, -0.5, 4.5, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [a, y1],
            [b, y2]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={a} y={y1} r={4} opacity={OPACITY.dim} />
        <Dot x={b} y={y2} r={4} opacity={OPACITY.dim} />
        <Dot x={midX} y={chordY} r={5} opacity={OPACITY.fg} />
        <Dot x={midX} y={curveY} r={5} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [midX, curveY],
            [midX, chordY]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[midX + 0.15, chordY + 0.5]}
          tex={`\\tfrac{a^2+b^2}{2} = ${chordY.toFixed(2)}`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[midX + 0.15, curveY - 0.6]}
          tex={`\\left(\\tfrac{a+b}{2}\\right)^2 = ${curveY.toFixed(2)}`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[a, aLabelY]}
          tex={`a=${a.toFixed(1)}`}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[b, bLabelY]}
          tex={`b=${b.toFixed(1)}`}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[3.8, 14]}
          tex={'y = x^2'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <DragHandle
          x={a}
          y={y1}
          onChange={nx => setA(Math.max(0.1, Math.min(b - 0.1, nx)))}
          constrain={nx => {
            const v = Math.max(0.1, Math.min(b - 0.1, nx))
            return [v, v * v]
          }}
        />
        <DragHandle
          x={b}
          y={y2}
          onChange={nx => setB(Math.max(a + 0.1, Math.min(4, nx)))}
          constrain={nx => {
            const v = Math.max(a + 0.1, Math.min(4, nx))
            return [v, v * v]
          }}
        />
      </Plot>
    </div>
  )
}

// M05 FRACTIONS · RATIOS · PROPORTIONS

// M05 Fractions, Ratios, Proportions
// 05.1 Fractions 1/3 and 2/7 on the unit line
export function FractionNumberLineViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.1, 1.1]} yRange={[-1.2, 1.5]} width={520} height={280} pad={32}>
        <Polyline
          points={[
            [0, 0],
            [1, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* thirds */}
        {[0, 1 / 3, 2 / 3, 1].map((v, i) => (
          <React.Fragment key={'t' + i}>
            <Polyline
              points={[
                [v, -0.18],
                [v, 0.18]
              ]}
              opacity={OPACITY.dim}
            />
          </React.Fragment>
        ))}
        {/* sevenths */}
        {[1, 2, 3, 4, 5, 6].map(k => {
          const v = k / 7
          return (
            <Polyline
              key={'s' + k}
              points={[
                [v, -0.08],
                [v, 0.08]
              ]}
              opacity={OPACITY.faint * 2}
            />
          )
        })}
        <Dot x={0} y={0} r={4} opacity={OPACITY.dim} />
        <Dot x={1} y={0} r={4} opacity={OPACITY.dim} />
        <Tex at={[0, -0.6]} tex={'0'} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[1, -0.6]} tex={'1'} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Dot x={1 / 3} y={0} r={6} opacity={OPACITY.fg} />
        <Tex
          at={[1 / 3, 0.85]}
          tex={'\\tfrac{1}{3} \\approx 0.333'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Dot x={2 / 7} y={0} r={6} opacity={OPACITY.accent} />
        <Tex
          at={[2 / 7, -0.95]}
          tex={'\\tfrac{2}{7} \\approx 0.286'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[0.95, 1.2]}
          tex={`\\tfrac{1}{3} - \\tfrac{2}{7} = \\tfrac{1}{21}`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

// 05.2 Direct proportion slider for k
export function DirectProportionViz() {
  const [k, setK] = React.useState(0.6)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-6, 6]} yRange={[-5, 5]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => k * x, -6, 6, 50).filter(p => Math.abs(p[1]) < 5)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {[1, 3, 5].map(x => (
          <Dot key={x} x={x} y={k * x} r={4} opacity={OPACITY.accent} />
        ))}
        <Tex
          at={[1.3, k * 1 + 0.5]}
          tex={`(1,\\,${(k * 1).toFixed(2)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[3.3, k * 3 + 0.5]}
          tex={`(3,\\,${(k * 3).toFixed(2)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-4, 4]}
          tex={`y = ${k.toFixed(2)}\\, x`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="$k$" value={k} min={-1.2} max={1.2} step={0.01} onChange={setK} />
    </div>
  )
}

// 05.3 Inverse proportion slider for k
export function InverseProportionViz() {
  const [k, setK] = React.useState(6)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, 10]} yRange={[-0.5, 8]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => (x > 0.05 ? k / x : NaN), 0.05, 10, 300).filter(
            p => p[1] <= 8 && p[1] >= -0.5
          )}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {[1, 2, 4].map(x => (
          <React.Fragment key={x}>
            <Dot x={x} y={k / x} r={4} opacity={OPACITY.accent} />
            <Tex
              at={[x + 0.2, k / x + 0.4]}
              tex={`(${x},\\,${(k / x).toFixed(2)})`}
              anchor="start"
              size={FONT_LABEL}
              opacity={OPACITY.dim}
            />
          </React.Fragment>
        ))}
        <Tex
          at={[7, 6]}
          tex={`xy = ${k.toFixed(1)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[7, 5]}
          tex={`y = \\tfrac{${k.toFixed(1)}}{x}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="$k$" value={k} min={0.5} max={10} step={0.1} onChange={setK} />
    </div>
  )
}

// M06 EXPONENTS · RADICALS

// M06 Exponents, Roots, Radicals
// 06.1 Powers of 2 on a log-style number line drag exponent
export function PowersOf2Viz() {
  const [n, setN] = React.useState(2)
  // Use a logarithmic axis: position = log2(value). Map log2(v) -> x.
  // Plot range in log2 from -3..5 (so 1/8 .. 32)
  const x2v = e => Math.pow(2, e)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3.4, 5.4]} yRange={[-2.4, 2.4]} width={520} height={320} pad={20}>
        <Polyline
          points={[
            [-3.2, 0],
            [5.2, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {[-3, -2, -1, 0, 1, 2, 3, 4, 5].map(k => (
          <React.Fragment key={k}>
            <Polyline
              points={[
                [k, -0.18],
                [k, 0.18]
              ]}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[k, 0.7]}
              tex={`2^{${k}}`}
              anchor="middle"
              size={FONT_LABEL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[k, -0.85]}
              tex={k >= 0 ? String(x2v(k)) : `\\tfrac{1}{${x2v(-k)}}`}
              anchor="middle"
              size={10}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        <Dot x={n} y={0} r={6} opacity={OPACITY.fg} />
        <Tex
          at={[n, 1.55]}
          tex={`2^{${n.toFixed(2)}} = ${x2v(n).toFixed(2)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <DragHandle
          x={n}
          y={0}
          onChange={nx => setN(Math.max(-3, Math.min(5, nx)))}
          constrain={nx => [Math.max(-3, Math.min(5, nx)), 0]}
        />
      </Plot>
    </div>
  )
}

// 06.2 Exponent addition: aᵐ · aⁿ = aᵐ⁺ⁿ as concatenated lengths
export function ExponentAdditionViz() {
  const [m, setM] = React.useState(3)
  const [n, setN] = React.useState(4)
  const total = m + n
  const mnClose = m + n < 4
  const mLabelY = mnClose ? 0.75 : 0.9
  const nLabelY = mnClose ? 1.05 : 0.9
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, 10]} yRange={[-1.8, 1.8]} width={520} height={280} pad={20}>
        <Polyline
          points={[
            [-0.3, 0],
            [9.8, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => (
          <React.Fragment key={k}>
            <Polyline
              points={[
                [k, -0.1],
                [k, 0.1]
              ]}
              opacity={OPACITY.faint * 2}
            />
            <Tex
              at={[k, -0.65]}
              tex={String(k)}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        <Polyline
          points={[
            [0, 0.35],
            [m, 0.35]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Polyline
          points={[
            [m, 0.35],
            [total, 0.35]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot x={0} y={0.35} r={4} opacity={OPACITY.fg} />
        <Dot x={m} y={0.35} r={4} opacity={OPACITY.fg} />
        <Dot x={total} y={0.35} r={4} opacity={OPACITY.fg} />
        <Tex
          at={[m / 2, mLabelY]}
          tex={`m=${m.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[m + n / 2, nLabelY]}
          tex={`n=${n.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[total / 2, 1.35]}
          tex={`a^m \\cdot a^n = a^{${total.toFixed(1)}}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="$m$" value={m} min={1} max={4.5} step={0.1} onChange={setM} />
      <Slider label="$n$" value={n} min={1} max={4.5} step={0.1} onChange={setN} />
    </div>
  )
}

// 06.3 Compare 1/3 and 2/7 by scaling to common bar of 21
export function FractionCompareViz() {
  const scale = 21
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.5, 22]} yRange={[-2.5, 3]} width={520} height={360} pad={20}>
        <Polyline
          points={[
            [0, 0.5],
            [scale, 0.5]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        {Array.from({ length: 22 }, (_, k) => k).map(k => (
          <Polyline
            key={k}
            points={[
              [k, 0.5 - 0.1],
              [k, 0.5 + 0.1]
            ]}
            opacity={OPACITY.faint * 2}
          />
        ))}
        <Dot x={0} y={0.5} r={3} opacity={OPACITY.dim} />
        <Dot x={scale} y={0.5} r={3} opacity={OPACITY.dim} />
        <Tex at={[0, 1.0]} tex={'0'} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex
          at={[scale, 1.0]}
          tex={'1 = \\tfrac{21}{21}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        {/* 1/3 bar = 7/21 */}
        <Polyline
          points={[
            [0, 1.7],
            [scale / 3, 1.7]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot x={scale / 3} y={1.7} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[scale / 3 + 0.5, 2.3]}
          tex={'\\tfrac{1}{3} = \\tfrac{7}{21}'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        {/* 2/7 bar = 6/21 */}
        <Polyline
          points={[
            [0, -0.7],
            [(2 * scale) / 7, -0.7]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot x={(2 * scale) / 7} y={-0.7} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[(2 * scale) / 7 + 0.5, -1.3]}
          tex={'\\tfrac{2}{7} = \\tfrac{6}{21}'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[scale, -1.9]}
          tex={'\\tfrac{1}{3} > \\tfrac{2}{7}\\;(7 > 6)'}
          anchor="end"
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

// M07 POLYNOMIALS

// M07 Polynomials
// 07.1 Anatomy of a polynomial: toggle terms, degree = highest surviving power.
// Engine: primitives + KaTeX (Engine B/D). WebSearch 2026: mainstream JS chart
// libs are auto-scaling data-viz, not honest monochrome term-anatomy figures.
// The prior version was a Plot used purely to place text labels (forbidden mode 4,
// canvas-as-text-panel) - replaced by the click-to-compute idiom already blessed in
// BinaryPlaceValueViz: the standard-form string and deg(P) are DERIVED live from the
// set of active terms, so "degree = highest power with a nonzero coefficient" is
// shown by computation, not asserted by a static label.
export function PolynomialLabeledViz() {
  const C = useVizColors()
  const terms = [
    { c: -3, d: 3 },
    { c: 1, d: 2 },
    { c: 2, d: 1 },
    { c: 5, d: 0 }
  ]
  const [active, setActive] = React.useState([true, true, true, true])
  const toggle = i => setActive(a => a.map((v, j) => (j === i ? !v : v)))

  // Monomial → TeX. `signed` prepends an explicit sign (for a term card).
  const mono = (c, d, signed) => {
    const mag = Math.abs(c)
    const coeff = d === 0 ? `${mag}` : mag === 1 ? '' : `${mag}`
    const body = d === 0 ? `${mag}` : d === 1 ? `${coeff}x` : `${coeff}x^{${d}}`
    if (!signed) return body
    return (c < 0 ? '-' : '+') + body
  }

  // Assemble the standard-form polynomial from the LIVE set of active terms.
  const live = terms.filter((_, i) => active[i])
  const polyTex =
    live.length === 0
      ? '0'
      : live
          .map((t, idx) => {
            const body = mono(t.c, t.d, false)
            if (idx === 0) return (t.c < 0 ? '-' : '') + body
            return (t.c < 0 ? ' - ' : ' + ') + body
          })
          .join('')
  // Degree = highest power among surviving (nonzero) terms; zero polynomial ⇒ undefined.
  const deg = live.length === 0 ? null : Math.max(...live.map(t => t.d))

  const cardStyle = on => ({
    width: 96,
    padding: '12px 0 10px',
    textAlign: 'center',
    cursor: 'pointer',
    border: `1px solid ${on ? C.accent : C.faint}`,
    background: 'transparent',
    opacity: on ? 1 : 0.4
  })

  return (
    <div style={{ width: '100%', padding: '12px 0' }}>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 16 }}>
        {terms.map((t, i) => (
          <div key={i} onClick={() => toggle(i)} style={cardStyle(active[i])}>
            <div style={{ color: active[i] ? C.fg : C.faint, fontSize: FONT_VALUE, minHeight: 30 }}>
              <KatexInline tex={mono(t.c, t.d, true)} />
            </div>
            <div
              style={{
                fontSize: FONT_SMALL,
                letterSpacing: LS_CONTROL,
                textTransform: 'uppercase',
                color: active[i] ? C.dim : C.faint,
                marginTop: 8
              }}
            >
              {`deg ${t.d}`}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: 'center',
          padding: '12px 0 4px',
          borderTop: `1px solid ${C.faint}`,
          color: C.fg,
          minHeight: 28
        }}
      >
        <KatexInline tex={`P(x) = ${polyTex}`} style={{ fontSize: FONT_BODY }} />
      </div>
      <div style={{ textAlign: 'center', padding: '6px 0', color: C.fg }}>
        {deg === null ? (
          <KatexInline
            tex={'\\deg(P)\\ \\text{ undefined (zero polynomial)}'}
            style={{ fontSize: FONT_CONTROL }}
          />
        ) : (
          <KatexInline tex={`\\deg(P) = ${deg}`} style={{ fontSize: FONT_BODY }} />
        )}
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: FONT_TINY,
          letterSpacing: '0.2em',
          color: C.dim,
          marginTop: 8,
          textTransform: 'uppercase'
        }}
      >
        Toggle terms: the degree is the highest power that survives
      </div>
    </div>
  )
}

// 07.2 Polynomial curve P(x) = x² − x − 4 drag marker
export function PolynomialCurveViz() {
  const P = x => x * x - x - 4
  const [x, setX] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3, 4.5]} yRange={[-6, 8]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(P, -3, 4.5, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* Sample evaluations */}
        {[0, 1, 2, 3].map(k => (
          <React.Fragment key={k}>
            <Dot x={k} y={P(k)} r={3.5} opacity={OPACITY.dim} />
          </React.Fragment>
        ))}
        {/* Movable */}
        <Polyline
          points={[
            [x, 0],
            [x, P(x)]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="2 3"
        />
        <Polyline
          points={[
            [-3, P(x)],
            [x, P(x)]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="2 3"
        />
        <Dot x={x} y={P(x)} r={6} opacity={OPACITY.fg} />
        <Tex
          at={[-2.7, 7]}
          tex={'P(x) = x^2 - x - 4'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <DragHandle
          x={x}
          y={P(x)}
          onChange={nx => setX(Math.max(-2.8, Math.min(4.3, nx)))}
          constrain={nx => {
            const v = Math.max(-2.8, Math.min(4.3, nx))
            return [v, P(v)]
          }}
        />
      </Plot>
      {/* Live drag readout under the plot, per house style (never on the canvas). */}
      <div
        style={{
          marginTop: 12,
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          fontSize: FONT_LABEL,
          letterSpacing: LS_CONTROL,
          color: 'var(--text-primary)'
        }}
      >
        <KatexInline tex={`x = ${x.toFixed(2)}`} />
        <KatexInline tex={`P(x) = ${P(x).toFixed(2)}`} />
      </div>
    </div>
  )
}

// 07.3 Log/exp as inverses reflected across y = x drag marker, show mirror
export function LogExpInverseViz() {
  const [x, setX] = React.useState(1.2)
  const ex = Math.pow(3, x) // on g(x) = 3ˣ
  // Mirror point on log: (3ˣ, x) which equals (y, log_3 y)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: equal spans (−2..8) ⇒ square viewBox so y=x is a true 45° mirror. */}
      <Plot xRange={[-4.22, 10.22]} yRange={[-2, 8]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-2, -2],
            [8, 8]
          ]}
          opacity={OPACITY.faint * 2.5}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(t => Math.pow(3, t), -2, 1.9, 200).filter(p => p[1] <= 8)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(t => (t > 0.02 ? Math.log(t) / Math.log(3) : NaN), 0.02, 8, 200).filter(
            p => p[1] >= -2
          )}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={x} y={ex} r={5} opacity={OPACITY.fg} />
        <Dot x={ex} y={x} r={5} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [x, ex],
            [ex, x]
          ]}
          opacity={OPACITY.dim * 0.5}
          dash="2 3"
        />
        <Tex
          at={[x - 0.2, ex + 0.6]}
          tex={`(${x.toFixed(2)},\\,${ex.toFixed(2)})`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[ex + 0.2, x - 0.6]}
          tex={`(${ex.toFixed(2)},\\,${x.toFixed(2)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[1.4, 6.5]}
          tex={'g(x) = 3^x'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[6.5, 2.2]}
          tex={'f(x) = \\log_3 x'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex at={[5.2, 5.6]} tex={'y = x'} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim} />
        <DragHandle
          x={x}
          y={ex}
          onChange={nx => setX(Math.max(-1.5, Math.min(1.8, nx)))}
          constrain={nx => {
            const v = Math.max(-1.5, Math.min(1.8, nx))
            return [v, Math.pow(3, v)]
          }}
        />
      </Plot>
    </div>
  )
}

// 07.4 Floor function staircase drag x
export function FloorStaircaseViz() {
  const [x, setX] = React.useState(1.4)
  const fx = Math.floor(x)
  const steps = [-2, -1, 0, 1, 2, 3]
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: equal spans (6) ⇒ ux=uy=80 so unit floor-steps render square;
          yRange top 3.2 gives the k=3 step headroom (no boundary clip). */}
      <Plot xRange={[-3.83, 4.83]} yRange={[-2.8, 3.2]} width={560} height={400} pad={20}>
        <Axes step={1} />
        {steps.map(k => (
          <Polyline
            key={k}
            points={[
              [k, k],
              [k + 1, k]
            ]}
            opacity={OPACITY.fg}
            strokeWidth={STROKE_EMPHASIS}
          />
        ))}
        {steps.map(k => (
          <Dot key={'c' + k} x={k} y={k} r={4} opacity={OPACITY.fg} />
        ))}
        {steps.map(k => (
          <Dot
            key={'o' + k}
            x={k + 1}
            y={k}
            r={4}
            opacity={OPACITY.fg}
            fill={false}
            strokeWidth={STROKE_EMPHASIS}
          />
        ))}
        <Polyline
          points={[
            [x, -2.8],
            [x, fx]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="2 3"
        />
        <Polyline
          points={[
            [-2.5, fx],
            [x, fx]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="2 3"
        />
        <Dot x={x} y={fx} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[x + 0.15, fx - 0.5]}
          tex={`\\lfloor ${x.toFixed(2)} \\rfloor = ${fx}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[3, 0.5]}
          tex={'\\lfloor x \\rfloor'}
          anchor="end"
          size={FONT_CONTROL}
          opacity={OPACITY.fg}
        />
        <DragHandle
          x={x}
          y={fx}
          onChange={nx => setX(Math.max(-2.3, Math.min(3.3, nx)))}
          constrain={nx => {
            const v = Math.max(-2.3, Math.min(3.3, nx))
            return [v, Math.floor(v)]
          }}
        />
      </Plot>
    </div>
  )
}

// M08 GRAPHING LINES

// M08 Graphing Lines and Linear Inequalities
// 08.1 Cartesian plane drag a point
export function CartesianPlaneViz() {
  const [pt, setPt] = React.useState([3, 2])
  const [x, y] = pt
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-6, 6]} yRange={[-5, 5]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Tex
          at={[5.5, 4.0]}
          tex={'\\mathrm{I}'}
          anchor="middle"
          size={FONT_BODY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-5.5, 4.0]}
          tex={'\\mathrm{II}'}
          anchor="middle"
          size={FONT_BODY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-5.5, -4.0]}
          tex={'\\mathrm{III}'}
          anchor="middle"
          size={FONT_BODY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[5.5, -4.0]}
          tex={'\\mathrm{IV}'}
          anchor="middle"
          size={FONT_BODY}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [x, 0],
            [x, y]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, y],
            [x, y]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="2 3"
        />
        <Dot x={x} y={y} r={6} opacity={OPACITY.fg} />
        <Tex
          at={[x + 0.3, y + 0.5]}
          tex={`(${x.toFixed(2)},\\,${y.toFixed(2)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[x, -0.55]}
          tex={`x=${x.toFixed(2)}`}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.2, y]}
          tex={`y=${y.toFixed(2)}`}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <DragHandle x={x} y={y} onChange={(nx, ny) => setPt([nx, ny])} />
      </Plot>
    </div>
  )
}

// 08.2 Plotting points drag four labeled points
export function PlotPointsViz() {
  const [A, setA] = React.useState([3, 2])
  const [B, setB] = React.useState([-4, 1])
  const [C, setC] = React.useState([-2, -3])
  const [Dd, setD] = React.useState([1, -4])
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic grid: ux == uy == 40 */}
      <Plot xRange={[-6, 6]} yRange={[-5, 5]} width={520} height={440} pad={20}>
        <Axes step={1} />
        {[
          ['A', A, setA],
          ['B', B, setB],
          ['C', C, setC],
          ['D', Dd, setD]
        ].map(([lab, p, setP]) => (
          <React.Fragment key={lab}>
            <DragHandle x={p[0]} y={p[1]} onChange={(nx, ny) => setP([nx, ny])} />
            <Tex
              at={[p[0] + 0.3, p[1] + 0.5]}
              tex={`${lab}=(${p[0].toFixed(1)},\\,${p[1].toFixed(1)})`}
              anchor="start"
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
          </React.Fragment>
        ))}
      </Plot>
    </div>
  )
}

// 08.3 Distance triangle drag endpoints
export function DistanceTriangleViz() {
  const [Pa, setPa] = React.useState([1, 2])
  const [Pb, setPb] = React.useState([4, 6])
  const dx = Pb[0] - Pa[0],
    dy = Pb[1] - Pa[1]
  const dist = Math.hypot(dx, dy)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic (ux == uy): the hypotenuse length d is drawn to true scale */}
      <Plot xRange={[-4, 9]} yRange={[-1, 8]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline points={[Pa, Pb]} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={[Pa, [Pb[0], Pa[1]]]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[[Pb[0], Pa[1]], Pb]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={Pa[0]} y={Pa[1]} r={5} opacity={OPACITY.fg} />
        <Dot x={Pb[0]} y={Pb[1]} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[(Pa[0] + Pb[0]) / 2, Pa[1] - 0.5]}
          tex={`\\Delta x=${dx.toFixed(2)}`}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[Pb[0] + 0.2, (Pa[1] + Pb[1]) / 2]}
          tex={`\\Delta y=${dy.toFixed(2)}`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[(Pa[0] + Pb[0]) / 2 - 0.4, (Pa[1] + Pb[1]) / 2]}
          tex={`d=${dist.toFixed(2)}`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[3, 7.5]}
          tex={`d = \\sqrt{\\Delta x^2 + \\Delta y^2}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <DragHandle x={Pa[0]} y={Pa[1]} onChange={(nx, ny) => setPa([nx, ny])} />
        <DragHandle x={Pb[0]} y={Pb[1]} onChange={(nx, ny) => setPb([nx, ny])} />
      </Plot>
    </div>
  )
}

// 08.4 Slope types drag a slope handle (and a separate negative)
export function SlopeTypesViz() {
  const [m, setM] = React.useState(1)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic (ux == uy): slope 1 renders at a true 45° */}
      <Plot xRange={[-7.2, 7.2]} yRange={[-5, 5]} width={560} height={400} pad={20}>
        <Axes step={1} />
        {/* positive m */}
        <Polyline
          points={[
            [-5, -5 * m],
            [5, 5 * m]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* horizontal */}
        <Polyline
          points={[
            [-5, -3],
            [5, -3]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* steep negative */}
        <Polyline
          points={[
            [-5, 5 * m],
            [5, -5 * m]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[3.4, Math.min(5 * m, 3.5)]}
          tex={`m = ${m.toFixed(2)}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[3.4, Math.max(-5 * m, -3.5)]}
          tex={`m = -${m.toFixed(2)}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex at={[4.5, -3.5]} tex={'m = 0'} anchor="end" size={FONT_LABEL} opacity={OPACITY.dim} />
      </Plot>
      <Slider label="$|m|$" value={m} min={0} max={2} step={0.01} onChange={setM} />
    </div>
  )
}

// 08.5 Slope-intercept y = mx + b drag m and b
export function LineSlopeInterceptViz() {
  const [m, setM] = React.useState(2)
  const [b, setB] = React.useState(3)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic square window: the slope triangle shows rise/run truthfully */}
      <Plot xRange={[-8.67, 8.67]} yRange={[-4, 8]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-6, -6 * m + b],
            [6, 6 * m + b]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={0} y={b} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[0.4, b - 0.4]}
          tex={`(0,\\,${b.toFixed(2)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        {/* slope triangle from (0,b) to (1, b+m) */}
        <Polyline
          points={[
            [0, b],
            [1, b],
            [1, b + m]
          ]}
          opacity={OPACITY.dim * 0.7}
          dash="2 3"
        />
        <Tex
          at={[0.5, b - 0.5]}
          tex={'1'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[1.15, b + m / 2]}
          tex={`m=${m.toFixed(2)}`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-4, 7]}
          tex={`y = ${m.toFixed(2)}x ${b >= 0 ? '+' : '-'} ${Math.abs(b).toFixed(2)}`}
          anchor="start"
          size={12}
          opacity={OPACITY.fg}
        />
        <DragHandle
          x={0}
          y={b}
          onChange={(_, ny) => setB(Math.max(-3, Math.min(7, ny)))}
          constrain={(_, ny) => [0, Math.max(-3, Math.min(7, ny))]}
        />
        <DragHandle
          x={2}
          y={2 * m + b}
          onChange={(_, ny) => setM(Math.max(-3, Math.min(3, (ny - b) / 2)))}
          constrain={(_, ny) => {
            const v = Math.max(-3, Math.min(3, (ny - b) / 2))
            return [2, 2 * v + b]
          }}
        />
      </Plot>
    </div>
  )
}

// 08.6 Parallel and perpendicular drag slope; perpendicular auto-updates
export function ParallelPerpViz() {
  const [m, setM] = React.useState(0.8)
  // line 1: y = mx; line 2 (parallel): y = mx + 2; line 3 (perpendicular): y = -x/m
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic (ux == uy): the perpendicular pair meets at a true 90° */}
      <Plot xRange={[-7.2, 7.2]} yRange={[-5, 5]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-5, -5 * m],
            [5, 5 * m]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [-5, -5 * m + 2],
            [5, 5 * m + 2]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [-5, 5 / m],
            [5, -5 / m]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[4.4, Math.max(-4.4, Math.min(4.4, 4.4 * m))]}
          tex={`m=${m.toFixed(2)}`}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[4.4, Math.max(-4.4, Math.min(4.4, -4.4 / m))]}
          tex={`m_\\perp=${(-1 / m).toFixed(2)}`}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-4.4, Math.max(-4.4, Math.min(4.4, -4.4 * m + 2))]}
          tex={`\\parallel`}
          anchor="start"
          size={FONT_CONTROL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0, 3.6]}
          tex={`m \\cdot m_\\perp = ${(m * (-1 / m)).toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="$m$" value={m} min={0.2} max={3} step={0.01} onChange={setM} />
    </div>
  )
}

// 08.7 Two-line system drag endpoints
export function SystemsViz() {
  const [p1a, setP1a] = React.useState([-2, -3])
  const [p1b, setP1b] = React.useState([3, 7])
  const [p2a, setP2a] = React.useState([-2, 6])
  const [p2b, setP2b] = React.useState([4, 0])
  // intersection
  const det = (p1b[0] - p1a[0]) * (p2b[1] - p2a[1]) - (p1b[1] - p1a[1]) * (p2b[0] - p2a[0])
  let ix = NaN,
    iy = NaN
  if (Math.abs(det) > 1e-6) {
    const t = ((p2a[0] - p1a[0]) * (p2b[1] - p2a[1]) - (p2a[1] - p1a[1]) * (p2b[0] - p2a[0])) / det
    ix = p1a[0] + t * (p1b[0] - p1a[0])
    iy = p1a[1] + t * (p1b[1] - p1a[1])
  }
  const extend = (a, b, X) => {
    const dx = b[0] - a[0],
      dy = b[1] - a[1]
    if (Math.abs(dx) < 1e-6)
      return [
        [a[0], -X],
        [a[0], X]
      ]
    const sl = dy / dx,
      c = a[1] - sl * a[0]
    return [
      [-X, -X * sl + c],
      [X, X * sl + c]
    ]
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 6]} yRange={[-4, 8]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline points={extend(p1a, p1b, 8)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={extend(p2a, p2b, 8)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        {Number.isFinite(ix) && (
          <>
            <Dot x={ix} y={iy} r={6} opacity={OPACITY.fg} />
            <Tex
              at={[ix + 0.3, iy + 0.5]}
              tex={`(${ix.toFixed(2)},\\,${iy.toFixed(2)})`}
              anchor="start"
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
          </>
        )}
        <DragHandle x={p1a[0]} y={p1a[1]} onChange={(nx, ny) => setP1a([nx, ny])} />
        <DragHandle x={p1b[0]} y={p1b[1]} onChange={(nx, ny) => setP1b([nx, ny])} />
        <DragHandle x={p2a[0]} y={p2a[1]} onChange={(nx, ny) => setP2a([nx, ny])} />
        <DragHandle x={p2b[0]} y={p2b[1]} onChange={(nx, ny) => setP2b([nx, ny])} />
      </Plot>
    </div>
  )
}

// 08.8 Inequality on a number line - the endpoint encodes strictness (hollow = strict
// < / >, excluded; filled = ≤ / ≥, included), and the solution set can be one-sided
// (x ≤ b / x < b, extending to −∞) or a bounded compound interval such as (−2, 3].
// The open-vs-closed circle is the exact distinction this section teaches. Every
// endpoint, the shaded ray and both readouts derive from the live a/b state.
export function NumberLineInequalityVizGL() {
  const [a, setA] = React.useState(-2) // lower bound
  const [b, setB] = React.useState(3) // upper bound
  const [bounded, setBounded] = React.useState(true) // two-ended vs one-sided (x ≤ b)
  const [leftOpen, setLeftOpen] = React.useState(true) // '(' vs '['
  const [rightOpen, setRightOpen] = React.useState(false) // ')' vs ']'

  const clampB = nx => Math.max(bounded ? a + 0.4 : -4.5, Math.min(4.5, nx))
  const clampA = nx => Math.max(-4.5, Math.min(b - 0.4, nx))

  // Pull the shaded ray back from an open endpoint so the line never cuts through
  // the hollow ring (≈ 8px at this scale).
  const GAP = 0.16
  const segLo = bounded ? (leftOpen ? a + GAP : a) : -5
  const segHi = rightOpen ? b - GAP : b

  const leftRel = leftOpen ? '<' : '\\le'
  const rightRel = rightOpen ? '<' : '\\le'
  const lb = leftOpen ? '(' : '['
  const rb = rightOpen ? ')' : ']'
  const inequalityTex = bounded
    ? `${a.toFixed(1)} ${leftRel} x ${rightRel} ${b.toFixed(1)}`
    : `x ${rightRel} ${b.toFixed(1)}`
  const intervalTex = bounded
    ? `x \\in ${lb}${a.toFixed(1)},\\ ${b.toFixed(1)}${rb}`
    : `x \\in (-\\infty,\\ ${b.toFixed(1)}${rb}`

  const readoutRow = {
    marginTop: 14,
    display: 'flex',
    justifyContent: 'center',
    gap: 32,
    fontSize: FONT_LABEL,
    letterSpacing: LS_CONTROL,
    color: `rgba(240, 240, 250, ${OPACITY.fg})`
  }

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 5]} yRange={[-1.5, 1.5]} width={520} height={200} pad={20}>
        <Polyline
          points={[
            [-5, 0],
            [5, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map(n => (
          <React.Fragment key={n}>
            <Polyline
              points={[
                [n, -0.1],
                [n, 0.1]
              ]}
              opacity={OPACITY.faint * 2}
            />
            <Tex
              at={[n, -0.7]}
              tex={String(n)}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        {/* shaded solution set */}
        <Polyline
          points={[
            [segLo, 0],
            [segHi, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        {/* one-sided sets continue to −∞ */}
        {!bounded && <Arrow from={[-4.4, 0]} to={[-4.9, 0]} opacity={OPACITY.fg} />}
        {/* endpoints: invisible drag handle for interaction + explicit open/closed marker */}
        <DragHandle
          x={b}
          y={0}
          opacity={0}
          onChange={nx => setB(clampB(nx))}
          constrain={nx => [clampB(nx), 0]}
        />
        <Dot x={b} y={0} r={POINT_HANDLE} fill={!rightOpen} opacity={OPACITY.fg} />
        {bounded && (
          <>
            <DragHandle
              x={a}
              y={0}
              opacity={0}
              onChange={nx => setA(clampA(nx))}
              constrain={nx => [clampA(nx), 0]}
            />
            <Dot x={a} y={0} r={POINT_HANDLE} fill={!leftOpen} opacity={OPACITY.fg} />
          </>
        )}
      </Plot>
      {/* Readouts live under the plot, per house rule - never on the canvas. */}
      <div style={readoutRow}>
        <KatexInline tex={inequalityTex} />
        <KatexInline tex={intervalTex} />
      </div>
      <Toggle on={bounded} onChange={setBounded} label="Bounded interval" />
      <Toggle
        on={rightOpen}
        onChange={setRightOpen}
        label={bounded ? 'Upper strict (open)' : 'Strict (open)'}
      />
      {bounded && <Toggle on={leftOpen} onChange={setLeftOpen} label="Lower strict (open)" />}
    </div>
  )
}

// 08.9 Half-plane y > x + 2 boundary is dashed
export function HalfPlaneViz() {
  const [m, setM] = React.useState(1)
  const [b, setB] = React.useState(2)
  // Shade region y > mx + b: sample grid
  const xs = [-5, 5]
  const ys = [-3, 6]
  // Region polygon: above the line, capped by top of viewport
  const lineY = x => m * x + b
  const topY = ys[1]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 5]} yRange={[-3, 6]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [xs[0], lineY(xs[0])],
            [xs[1], lineY(xs[1])],
            [xs[1], topY],
            [xs[0], topY]
          ]}
          closed
          opacity={OPACITY.fg}
          fillOpacity={0.12}
          strokeWidth={0}
        />
        <Polyline
          points={[
            [xs[0], lineY(xs[0])],
            [xs[1], lineY(xs[1])]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
          dash="6 4"
        />
        <Tex
          at={[2.5, lineY(2.5) + 0.6]}
          tex={`y = ${m.toFixed(1)}x ${b >= 0 ? '+' : '-'} ${Math.abs(b).toFixed(1)}`}
          anchor="start"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex at={[-3, 4]} tex={'y > mx + b'} anchor="middle" size={13} opacity={OPACITY.accent} />
      </Plot>
      <Slider label="$m$" value={m} min={-2} max={2} step={0.05} onChange={setM} />
      <Slider label="$b$" value={b} min={-3} max={5} step={0.05} onChange={setB} />
    </div>
  )
}

// 08.10 Feasible region: x+y ≤ 8, x+2y ≤ 12, x,y ≥ 0
export function FeasibleRegionViz() {
  // vertices: (0,0), (8,0), (4,4), (0,6)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic (ux == uy = 44.4): the feasible polygon holds true proportions.
         Vertices verified by hand as constraint intersections:
         (0,0), (8,0)=x+y=8∩y=0, (4,4)=x+y=8∩x+2y=12, (0,6)=x+2y=12∩x=0 */}
      <Plot xRange={[-1, 11]} yRange={[-1, 8]} width={573} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [0, 0],
            [8, 0],
            [4, 4],
            [0, 6]
          ]}
          closed
          opacity={OPACITY.fg}
          fillOpacity={0.18}
        />
        <Polyline
          points={[
            [0, 8],
            [10, -2]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex at={[8.5, 0.7]} tex={'x+y=8'} anchor="start" size={FONT_SMALL} opacity={OPACITY.dim} />
        <Polyline
          points={[
            [0, 6],
            [12, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[7.5, 3]}
          tex={'x+2y=12'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Dot x={0} y={0} r={4} opacity={OPACITY.fg} />
        <Dot x={8} y={0} r={4} opacity={OPACITY.fg} />
        <Dot x={4} y={4} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[4.3, 4.5]}
          tex={'(4,4)'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Dot x={0} y={6} r={4} opacity={OPACITY.fg} />
        <Tex at={[0.4, 6.5]} tex={'(0,6)'} anchor="start" size={FONT_SMALL} opacity={OPACITY.fg} />
        <Tex
          at={[8.0, -0.55]}
          tex={'(8,0)'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// M09 QUADRATIC FUNCTIONS

// M09 Quadratic Functions and Polynomial Inequalities
// 09.1 Basic parabola y = x²
export function ParabolaBasicViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4, 4]} yRange={[-1, 7]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x, -3, 3, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={0} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[0.4, -0.5]}
          tex={'(0,0)'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex at={[2.5, 6]} tex={'y = x^2'} anchor="middle" size={FONT_TEX} opacity={OPACITY.fg} />
        {/* symmetry hint: pairs at x and -x */}
        <Polyline
          points={[
            [-2, 4],
            [-2, 0]
          ]}
          opacity={OPACITY.dim * 0.4}
          dash="2 3"
        />
        <Polyline
          points={[
            [2, 4],
            [2, 0]
          ]}
          opacity={OPACITY.dim * 0.4}
          dash="2 3"
        />
        <Polyline
          points={[
            [-2, 4],
            [2, 4]
          ]}
          opacity={OPACITY.dim * 0.4}
          dash="2 3"
        />
        <Dot x={-2} y={4} r={3} opacity={OPACITY.dim} />
        <Dot x={2} y={4} r={3} opacity={OPACITY.dim} />
        <Tex at={[-2, -0.5]} tex={'-2'} anchor="middle" size={FONT_SMALL} opacity={OPACITY.dim} />
        <Tex at={[2, -0.5]} tex={'2'} anchor="middle" size={FONT_SMALL} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

// 09.2 Effect of a slider
export function ParabolaCoeffViz() {
  const [a, setA] = React.useState(1)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4, 4]} yRange={[-5, 5]} width={520} height={440} pad={20}>
        <Axes step={1} />
        {/* ref: y = x² */}
        <Polyline
          points={sampleFn(x => x * x, -3, 3, 200).filter(p => Math.abs(p[1]) < 5.5)}
          opacity={OPACITY.dim * 0.5}
          strokeWidth={STROKE_SECONDARY}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(x => a * x * x, -4, 4, 200).filter(p => Math.abs(p[1]) < 5.5)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[3, 4]}
          tex={`y = ${a.toFixed(2)}\\,x^2`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[3, 3]}
          tex={`a = ${a.toFixed(2)}`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-3, 4]}
          tex={a >= 0 ? '\\text{opens up}' : '\\text{opens down}'}
          anchor="start"
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="$a$" value={a} min={-3} max={3} step={0.01} onChange={setA} />
    </div>
  )
}

// 09.3 Interactive vertex y = (x − h)² + k
export function InteractiveVertexViz() {
  const [h, setH] = React.useState(1)
  const [k, setK] = React.useState(-1)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic (ux == uy = 40) */}
      <Plot xRange={[-7.22, 7.22]} yRange={[-4, 6]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => (x - h) * (x - h) + k, -5, 5, 200).filter(p => p[1] < 7)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={h} y={k} r={6} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [h, -4],
            [h, k]
          ]}
          opacity={OPACITY.dim * 0.4}
          dash="2 3"
        />
        <Polyline
          points={[
            [-5, k],
            [h, k]
          ]}
          opacity={OPACITY.dim * 0.4}
          dash="2 3"
        />
        <Tex
          at={[h + 0.3, k - 0.5]}
          tex={`(${h.toFixed(2)},\\,${k.toFixed(2)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[3.5, 5]}
          tex={`y = (x - ${h.toFixed(1)})^2 ${k >= 0 ? '+' : '-'} ${Math.abs(k).toFixed(1)}`}
          anchor="end"
          size={11}
          opacity={OPACITY.fg}
        />
        <DragHandle
          x={h}
          y={k}
          onChange={(nx, ny) => {
            setH(Math.max(-4, Math.min(4, nx)))
            setK(Math.max(-3, Math.min(5, ny)))
          }}
        />
      </Plot>
    </div>
  )
}

// 09.4 Horizontal parabola x = (1/2)y² + 3y + 1
export function HorizontalParabolaViz() {
  // x(y) = 0.5y² + 3y + 1; vertex at y = -3, x = 0.5·9 - 9 + 1 = -3.5
  const pts = []
  for (let i = 0; i <= 200; i++) {
    const y = -7 + (10 * i) / 200
    pts.push([0.5 * y * y + 3 * y + 1, y])
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 8]} yRange={[-7, 3]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={pts.filter(p => p[0] < 8 && p[0] > -5)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={-3.5} y={-3} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[-3.2, -3.6]}
          tex={'(-3.5,\\,-3)'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[5, 1.5]}
          tex={'x = \\tfrac{1}{2}y^2 + 3y + 1'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// 09.5 Circle drag center and radius
export function CircleViz() {
  const [center, setCenter] = React.useState([3, 2])
  const [r, setR] = React.useState(2.5)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic (ux == uy = 40): the circle renders truly round, not elliptical */}
      <Plot xRange={[-4.22, 10.22]} yRange={[-3, 7]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Parametric
          xy={t => [center[0] + r * Math.cos(t), center[1] + r * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={200}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={center[0]} y={center[1]} r={5} opacity={OPACITY.accent} />
        <Polyline
          points={[center, [center[0] + r, center[1]]]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={center[0] + r} y={center[1]} r={4} opacity={OPACITY.fg} />
        <Tex
          at={[center[0] + r / 2, center[1] + 0.4]}
          tex={`r=${r.toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[center[0] + 0.25, center[1] - 0.4]}
          tex={`(${center[0].toFixed(1)},\\,${center[1].toFixed(1)})`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[6, 5]}
          tex={`(x-h)^2 + (y-k)^2 = r^2`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <DragHandle x={center[0]} y={center[1]} onChange={(nx, ny) => setCenter([nx, ny])} />
        <DragHandle
          x={center[0] + r}
          y={center[1]}
          onChange={nx => setR(Math.max(0.3, Math.min(4, nx - center[0])))}
          constrain={nx => [Math.max(center[0] + 0.3, Math.min(center[0] + 4, nx)), center[1]]}
        />
      </Plot>
    </div>
  )
}

// 09.6 Quadratic inequality (x+2)(x−5) ≤ 0
export function QuadInequalityViz() {
  const f = x => (x + 2) * (x - 5)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 8]} yRange={[-13, 7]} width={520} height={440} pad={20}>
        <Axes step={2} />
        <Polyline
          points={sampleFn(f, -5, 8, 200).filter(p => p[1] < 7 && p[1] > -13)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* solution interval on x-axis */}
        <Polyline
          points={[
            [-2, 0],
            [5, 0]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot x={-2} y={0} r={5} opacity={OPACITY.accent} />
        <Dot x={5} y={0} r={5} opacity={OPACITY.accent} />
        <Tex at={[-2, 1.0]} tex={'-2'} anchor="middle" size={FONT_LABEL} opacity={OPACITY.accent} />
        <Tex at={[5, 1.0]} tex={'5'} anchor="middle" size={FONT_LABEL} opacity={OPACITY.accent} />
        <Tex
          at={[1.5, -10]}
          tex={'(x+2)(x-5) \\leq 0\\;\\text{ on }\\;[-2, 5]'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

// 09.7 Trivial inequality x² ≥ 0 drag x
export function TrivialInequalityViz() {
  const [x, setX] = React.useState(1.5)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3.5, 3.5]} yRange={[-0.7, 7]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(t => t * t, -3, 3, 200).filter(p => p[1] < 7.2)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={x} y={x * x} r={6} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [x, 0],
            [x, x * x]
          ]}
          opacity={OPACITY.dim * 0.5}
          dash="2 3"
        />
        <Tex
          at={[x + 0.2, x * x + 0.4]}
          tex={`x^2 = ${(x * x).toFixed(2)} \\geq 0`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[0, -0.45]}
          tex={'\\min = 0\\text{ at }x=0'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <DragHandle
          x={x}
          y={x * x}
          onChange={nx => setX(Math.max(-3, Math.min(3, nx)))}
          constrain={nx => {
            const v = Math.max(-3, Math.min(3, nx))
            return [v, v * v]
          }}
        />
      </Plot>
    </div>
  )
}

// 09.8 Optimization slide a < 0 for max of ax² + 5x − 7
export function InteractiveOptimizationViz() {
  const [a, setA] = React.useState(-0.5)
  const aSafe = Math.min(a, -0.05)
  const vx = -5 / (2 * aSafe),
    vy = aSafe * vx * vx + 5 * vx - 7
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2, 14]} yRange={[-12, 6]} width={520} height={440} pad={20}>
        <Axes step={2} />
        <Polyline
          points={sampleFn(x => aSafe * x * x + 5 * x - 7, -2, 14, 200).filter(p => p[1] > -12)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={vx} y={vy} r={6} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [vx, -12],
            [vx, vy]
          ]}
          opacity={OPACITY.dim * 0.4}
          dash="2 3"
        />
        <Tex
          at={[vx + 0.3, vy + 0.6]}
          tex={`(${vx.toFixed(2)},\\,${vy.toFixed(2)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[12, 5]}
          tex={`f(x) = ${aSafe.toFixed(2)}x^2 + 5x - 7`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[12, 3.5]}
          tex={`\\max = ${vy.toFixed(2)}`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider label="$a$" value={a} min={-2} max={-0.1} step={0.01} onChange={setA} />
    </div>
  )
}

// 09.9 Polynomial sign chart for (x+2)(x−5) ≥ 0
export function NumberLineSignViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 8]} yRange={[-2, 2]} width={520} height={240} pad={20}>
        <Polyline
          points={[
            [-5, 0],
            [8, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].map(n => (
          <React.Fragment key={n}>
            <Polyline
              points={[
                [n, -0.1],
                [n, 0.1]
              ]}
              opacity={OPACITY.faint * 2}
            />
            <Tex
              at={[n, -1.1]}
              tex={String(n)}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        <Polyline
          points={[
            [-5, 0],
            [-2, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Polyline
          points={[
            [5, 0],
            [8, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Polyline
          points={[
            [-2, 0],
            [5, 0]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot x={-2} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={5} y={0} r={5} opacity={OPACITY.fg} />
        <Tex at={[-3.5, 0.7]} tex={'+'} anchor="middle" size={FONT_BODY} opacity={OPACITY.fg} />
        <Tex at={[1.5, 0.7]} tex={'-'} anchor="middle" size={FONT_BODY} opacity={OPACITY.accent} />
        <Tex at={[6.5, 0.7]} tex={'+'} anchor="middle" size={FONT_BODY} opacity={OPACITY.fg} />
        <Tex
          at={[1.5, 1.4]}
          tex={'(x+2)(x-5) \\geq 0:\\;(-\\infty, -2] \\cup [5, \\infty)'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// M10 FUNCTIONS

// M10 Functions
// Helper: box drawn as closed polyline
const BoxA = ({ x1, x2, y1, y2, opacity = OPACITY.fg }) => (
  <Polyline
    points={[
      [x1, y1],
      [x2, y1],
      [x2, y2],
      [x1, y2]
    ]}
    closed
    opacity={opacity}
    strokeWidth={STROKE_PRIMARY}
  />
)

// 10.1 Function machine f(x) = 2x + 1 drag x
export function FunctionMachineViz() {
  const [x, setX] = React.useState(3)
  const fx = 2 * x + 1
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-8, 8]} yRange={[-2.5, 2.5]} width={520} height={320} pad={20}>
        <Arrow from={[-7, 0]} to={[-3.2, 0]} opacity={OPACITY.dim} />
        <BoxA x1={-3} x2={3} y1={-1.2} y2={1.2} opacity={OPACITY.fg} />
        <Arrow from={[3.2, 0]} to={[7, 0]} opacity={OPACITY.dim} />
        <Tex
          at={[-5, 0.6]}
          tex={`x = ${x.toFixed(2)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0, 0.4]}
          tex={'f(x) = 2x + 1'}
          anchor="middle"
          size={FONT_CONTROL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[5, 0.6]}
          tex={`f(x) = ${fx.toFixed(2)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider label="$x$" value={x} min={-5} max={5} step={0.05} onChange={setX} />
    </div>
  )
}

// 10.2 Composition chain g(x) = x+1, f(u) = u²; f(g(x)) = (x+1)²
export function CompositionChainViz() {
  const [x, setX] = React.useState(2)
  const gx = x + 1
  const fgx = gx * gx
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-9, 9]} yRange={[-2.5, 2.5]} width={520} height={320} pad={20}>
        <Arrow from={[-8.5, 0]} to={[-5.2, 0]} opacity={OPACITY.dim} />
        <BoxA x1={-5} x2={-1} y1={-1.2} y2={1.2} opacity={OPACITY.fg} />
        <Arrow from={[-0.8, 0]} to={[0.8, 0]} opacity={OPACITY.dim} />
        <BoxA x1={1} x2={5} y1={-1.2} y2={1.2} opacity={OPACITY.fg} />
        <Arrow from={[5.2, 0]} to={[8.5, 0]} opacity={OPACITY.dim} />
        <Tex
          at={[-7, 0.55]}
          tex={`${x.toFixed(2)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-3, 0.5]}
          tex={'g(u)=u+1'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex at={[-3, -0.45]} tex={'g'} anchor="middle" size={FONT_BODY} opacity={OPACITY.fg} />
        <Tex
          at={[0, 0.55]}
          tex={`${gx.toFixed(2)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[3, 0.5]}
          tex={'f(u)=u^2'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex at={[3, -0.45]} tex={'f'} anchor="middle" size={FONT_BODY} opacity={OPACITY.fg} />
        <Tex
          at={[7, 0.55]}
          tex={`${fgx.toFixed(2)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0, 1.85]}
          tex={`f(g(${x.toFixed(2)})) = (${gx.toFixed(2)})^2 = ${fgx.toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider label="$x$" value={x} min={-4} max={4} step={0.05} onChange={setX} />
    </div>
  )
}

// 10.3 Point on a graph drag along f(x) = x² − 5
export function GraphPointViz() {
  const f = x => x * x - 5
  const [x, setX] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4, 4]} yRange={[-6, 6]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(f, -3.4, 3.4, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={x} y={f(x)} r={6} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [x, 0],
            [x, f(x)]
          ]}
          opacity={OPACITY.dim * 0.5}
          dash="2 3"
        />
        <Polyline
          points={[
            [-4, f(x)],
            [x, f(x)]
          ]}
          opacity={OPACITY.dim * 0.5}
          dash="2 3"
        />
        <Tex
          at={[x + 0.3, f(x) + 0.6]}
          tex={`(${x.toFixed(2)},\\,${f(x).toFixed(2)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[3, 5]}
          tex={'f(x) = x^2 - 5'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <DragHandle
          x={x}
          y={f(x)}
          onChange={nx => setX(Math.max(-3.3, Math.min(3.3, nx)))}
          constrain={nx => {
            const v = Math.max(-3.3, Math.min(3.3, nx))
            return [v, f(v)]
          }}
        />
      </Plot>
    </div>
  )
}

// 10.4 Parabola y = x² − 5x + 6
export function ParabolaViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, 6]} yRange={[-2, 8]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x - 5 * x + 6, -1, 6, 200).filter(p => p[1] < 8)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={2} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={3} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={0} y={6} r={5} opacity={OPACITY.fg} />
        <Dot x={2.5} y={-0.25} r={4} opacity={OPACITY.accent} />
        <Tex at={[2, -0.7]} tex={'(2,0)'} anchor="middle" size={FONT_SMALL} opacity={OPACITY.fg} />
        <Tex at={[3, -0.7]} tex={'(3,0)'} anchor="middle" size={FONT_SMALL} opacity={OPACITY.fg} />
        <Tex at={[0.4, 6.4]} tex={'(0,6)'} anchor="start" size={FONT_SMALL} opacity={OPACITY.fg} />
        <Tex
          at={[2.7, -1.0]}
          tex={'vertex (2.5,\\,-0.25)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[5.5, 5]}
          tex={'y = x^2 - 5x + 6'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// 10.5 Two curves intersect: y = x³ and y = 2x + 3
export function IntersectionViz() {
  // x³ = 2x + 3 → x³ - 2x - 3 = 0; rational root test → x = ? try x=1.89...
  // Actually 1.89³ ≈ 6.75, 2·1.89+3 = 6.78 solve numerically
  const newton = () => {
    let x = 2
    for (let i = 0; i < 40; i++) {
      const f = x * x * x - 2 * x - 3
      const fp = 3 * x * x - 2
      x = x - f / fp
    }
    return x
  }
  const xi = newton()
  const yi = 2 * xi + 3
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3, 3.5]} yRange={[-8, 10]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x * x, -2.2, 2.2, 200).filter(p => p[1] > -8 && p[1] < 10)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(x => 2 * x + 3, -3, 3.5, 50)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={xi} y={yi} r={6} opacity={OPACITY.accent} />
        <Tex
          at={[xi + 0.2, yi - 0.6]}
          tex={`(${xi.toFixed(2)},\\,${yi.toFixed(2)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex at={[1.8, 8]} tex={'y = x^3'} anchor="end" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex
          at={[-2.5, -2]}
          tex={'y = 2x + 3'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

// 10.6 Vertical scaling slider c·sin(x)
export function VerticalScaleViz() {
  const [c, setC] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7, 7]} yRange={[-4, 4]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => Math.sin(x), -7, 7, 200)}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(x => c * Math.sin(x), -7, 7, 200).filter(p => Math.abs(p[1]) < 4)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[5.5, 1.2]}
          tex={'f(x)=\\sin x'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[5.5, 2.2 * Math.sign(c) * Math.min(1, Math.abs(c)) + (Math.abs(c) > 1 ? 0.5 : 0)]}
          tex={`${c.toFixed(2)} f(x)`}
          anchor="end"
          size={11}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="$c$" value={c} min={-3} max={3} step={0.01} onChange={setC} />
    </div>
  )
}

// 10.7 Horizontal scaling slider sin(cx)
export function HorizontalScaleViz() {
  const [c, setC] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7, 7]} yRange={[-2, 2]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => Math.sin(x), -7, 7, 200)}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(x => Math.sin(c * x), -7, 7, 400)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[5.5, 1.4]}
          tex={'f(x)=\\sin x'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[5.5, -1.5]}
          tex={`\\sin(${c.toFixed(2)}\\, x)`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="$c$" value={c} min={-3} max={3} step={0.01} onChange={setC} />
    </div>
  )
}

// 10.8 Inverse graph f(x) = 4x − 3 and f⁻¹
export function InverseGraphViz() {
  const [x, setX] = React.useState(1)
  const fx = 4 * x - 3
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: equal spans (−6..6) ⇒ square viewBox so y=x is a true 45° mirror. */}
      <Plot xRange={[-8.67, 8.67]} yRange={[-6, 6]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-6, -6],
            [6, 6]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(t => 4 * t - 3, -2.5, 2.5, 50)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(t => (t + 3) / 4, -6, 6, 50)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={x} y={fx} r={5} opacity={OPACITY.fg} />
        <Dot x={fx} y={x} r={5} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [x, fx],
            [fx, x]
          ]}
          opacity={OPACITY.dim * 0.5}
          dash="2 3"
        />
        <Tex
          at={[x - 0.2, fx + 0.5]}
          tex={`(${x.toFixed(2)},\\,${fx.toFixed(2)})`}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[fx + 0.2, x - 0.5]}
          tex={`(${fx.toFixed(2)},\\,${x.toFixed(2)})`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[1.5, 5]}
          tex={'f(x)=4x-3'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[4.5, 1.5]}
          tex={'f^{-1}(x)=\\tfrac{x+3}{4}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={x}
          y={fx}
          onChange={nx => setX(Math.max(-1.5, Math.min(2.5, nx)))}
          constrain={nx => {
            const v = Math.max(-1.5, Math.min(2.5, nx))
            return [v, 4 * v - 3]
          }}
        />
      </Plot>
    </div>
  )
}

// 10.9 Reference inverse f(x) = 2x − 9
export function RefInverseViz() {
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: square window [-2,14]² ⇒ ux=uy=30 so y=x is a true 45° mirror
          and f / f⁻¹ are honest reflections (intercepts (4.5,0)↔(0,4.5), crossing (9,9)). */}
      <Plot xRange={[-5.56, 17.56]} yRange={[-2, 14]} width={560} height={400} pad={20}>
        <Axes step={2} />
        <Polyline
          points={[
            [-2, -2],
            [14, 14]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(t => 2 * t - 9, -1, 12, 50).filter(p => p[1] > -2 && p[1] < 14)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(t => (t + 9) / 2, -2, 14, 50).filter(p => p[1] > -2 && p[1] < 14)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={4.5} y={0} r={4} opacity={OPACITY.dim} />
        <Dot x={0} y={4.5} r={4} opacity={OPACITY.dim} />
        <Tex
          at={[11.5, 12.6]}
          tex={'f(x)=2x-9'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[2, 6]}
          tex={'f^{-1}(x)=\\tfrac{x+9}{2}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

// M11 EXPONENTIAL FUNCTIONS

// M11 Exponential Functions
// 11.1 Exponential graph bˣ slider base
export function ExponentialGraphViz() {
  const [b, setB] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3, 5]} yRange={[-0.5, 9]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => Math.pow(b, x), -3, 5, 200).filter(p => p[1] >= -0.5 && p[1] <= 9)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={0} y={1} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[0.4, 1.5]}
          tex={'(0,1)'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        {[1, 2, 3].map(x => (
          <React.Fragment key={x}>
            <Dot x={x} y={Math.pow(b, x)} r={3.5} opacity={OPACITY.dim} />
            {Math.pow(b, x) < 9 && (
              <Tex
                at={[x + 0.25, Math.pow(b, x) + 0.4]}
                tex={`(${x},\\,${Math.pow(b, x).toFixed(2)})`}
                anchor="start"
                size={FONT_SMALL}
                opacity={OPACITY.dim}
              />
            )}
          </React.Fragment>
        ))}
        <Tex
          at={[3.5, 6]}
          tex={`f(x) = ${b.toFixed(2)}^x`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="$b$" value={b} min={0.3} max={3} step={0.01} onChange={setB} />
    </div>
  )
}

// 11.2 Linear vs exponential slider rate
export function GrowthComparisonViz() {
  // Honest divergence on a FIXED axis: exponential 2^x is fixed and OVERTAKES any
  // line, exiting the top of the window (2^x = 12 ⇒ x≈3.585) well before the line does;
  // the slider only steepens the line and exponential still wins. The prior version
  // coupled the base to the slope as (1+r/10)^{2x}, which stayed BELOW the line across
  // the whole [0,7] window for every r - the exact opposite of the intended lesson.
  const [m, setM] = React.useState(2) // linear slope
  const yMax = 12
  const lineLabelY = Math.min(m * 6.4, 11.2)
  const lineLabelX = lineLabelY / m
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, 7]} yRange={[-0.5, 12]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => m * x, 0, 7, 50).filter(p => p[1] <= yMax)}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(x => Math.pow(2, x), 0, 7, 200).filter(p => p[1] <= yMax)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex at={[3.05, 10.8]} tex={'2^x'} anchor="end" size={FONT_TEX} opacity={OPACITY.fg} />
        <Tex
          at={[lineLabelX + 0.15, lineLabelY - 0.55]}
          tex={`${m.toFixed(1)}x`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="slope" value={m} min={0.5} max={3} step={0.05} onChange={setM} />
    </div>
  )
}

// 11.3 Solve 3ˣ = y drag y, see x = log₃ y
export function EqualBasesViz() {
  const [y, setY] = React.useState(4)
  const x = Math.log(y) / Math.log(3)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2, 4]} yRange={[-0.5, 9]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(t => Math.pow(3, t), -2, 2, 200).filter(p => p[1] <= 9)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [-2, y],
            [4, y]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
          dash="3 3"
        />
        <Dot x={x} y={y} r={6} opacity={OPACITY.accent} />
        <Polyline
          points={[
            [x, 0],
            [x, y]
          ]}
          opacity={OPACITY.dim * 0.5}
          dash="2 3"
        />
        <Tex
          at={[x + 0.2, y + 0.6]}
          tex={`x = \\log_3 ${y.toFixed(2)} \\approx ${x.toFixed(3)}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex at={[3.5, 7]} tex={'y = 3^x'} anchor="end" size={FONT_LABEL} opacity={OPACITY.fg} />
        <DragHandle
          x={0}
          y={y}
          onChange={(_, ny) => setY(Math.max(0.2, Math.min(8.5, ny)))}
          constrain={(_, ny) => [0, Math.max(0.2, Math.min(8.5, ny))]}
        />
      </Plot>
    </div>
  )
}

// 11.4 Compound vs simple interest slider rate
export function CompoundVsSimpleViz() {
  const [r, setR] = React.useState(0.09)
  // P0 = 5000, t = 0..15
  const P0 = 5000
  const maxT = 20
  // FIXED axis (no auto-normalize): compound clips off the TOP at high r - that
  // runaway IS the point. Prior code set yMax ∝ compound final value, rescaling every
  // render so the compound curve always filled the same height and the divergence
  // vanished (forbidden mode 2).
  const yMax = 30000
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, maxT + 1]} yRange={[0, yMax]} width={520} height={440} pad={20}>
        <Polyline
          points={[
            [0, 0],
            [maxT, 0]
          ]}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [0, 0],
            [0, yMax]
          ]}
          opacity={OPACITY.dim}
        />
        {[0, 5, 10, 15, 20].map(t => (
          <Polyline
            key={t}
            points={[
              [t, 0],
              [t, yMax * 0.012]
            ]}
            opacity={OPACITY.faint * 2}
          />
        ))}
        {[5000, 10000, 15000, 20000, 25000, 30000]
          .filter(v => v <= yMax)
          .map(v => (
            <React.Fragment key={v}>
              <Polyline
                points={[
                  [-0.3, v],
                  [0.3, v]
                ]}
                opacity={OPACITY.faint * 2}
              />
              <Tex
                at={[-0.5, v]}
                tex={`${v}`}
                anchor="end"
                size={FONT_TINY}
                opacity={OPACITY.faint * 3}
              />
            </React.Fragment>
          ))}
        <Polyline
          points={sampleFn(t => P0 * (1 + r * t), 0, maxT, 50)}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(t => P0 * Math.pow(1 + r, t), 0, maxT, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[maxT - 0.5, Math.min(yMax * 0.82, P0 * (1 + r * maxT) + yMax * 0.03)]}
          tex={'\\text{simple}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[maxT - 0.5, Math.min(yMax * 0.94, P0 * Math.pow(1 + r, maxT))]}
          tex={'\\text{compound}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[1, yMax * 0.92]}
          tex={`r = ${(r * 100).toFixed(1)}\\%`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider
        label="rate"
        value={r}
        min={0.01}
        max={0.3}
        step={0.005}
        onChange={setR}
        format={v => (v * 100).toFixed(1) + '%'}
      />
    </div>
  )
}

// 11.5 Logarithm as inverse log₃ x reflected from 3ˣ
export function LogarithmGraphViz() {
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: square window [-2,7]² ⇒ ux=uy≈53.3 so y=x is a true 45° mirror
          and log₃x / 3ˣ read as honest reflections across it (points (1,0)↔(0,1)). */}
      <Plot xRange={[-4, 9]} yRange={[-2, 7]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-2, -2],
            [7, 7]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(x => (x > 0.03 ? Math.log(x) / Math.log(3) : NaN), 0.03, 7, 200).filter(
            p => p[1] >= -2
          )}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(x => Math.pow(3, x), -2, 1.8, 200).filter(p => p[1] <= 7)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={1} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[1.35, 0.55]}
          tex={'(1,0)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Dot x={0} y={1} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[0.25, 1.5]}
          tex={'(0,1)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex at={[6, 2.3]} tex={'\\log_3 x'} anchor="end" size={FONT_TEX} opacity={OPACITY.fg} />
        <Tex at={[0.7, 5.6]} tex={'3^x'} anchor="end" size={FONT_TEX} opacity={OPACITY.accent} />
        <Tex at={[4.4, 4.9]} tex={'y=x'} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

// 11.6 Solving log drag x
export function LogSolvingViz() {
  const [x, setX] = React.useState(5)
  const y = Math.log(x) / Math.log(3)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, 10]} yRange={[-2.5, 3.5]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(t => (t > 0.05 ? Math.log(t) / Math.log(3) : NaN), 0.05, 10, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [-0.5, y],
            [x, y]
          ]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Polyline
          points={[
            [x, -2.5],
            [x, y]
          ]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Dot x={x} y={y} r={6} opacity={OPACITY.accent} />
        <Tex
          at={[x + 0.3, y + 0.5]}
          tex={`\\log_3 ${x.toFixed(2)} \\approx ${y.toFixed(3)}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex at={[7, 2.6]} tex={'\\log_3 x'} anchor="middle" size={FONT_TEX} opacity={OPACITY.fg} />
        <DragHandle
          x={x}
          y={y}
          onChange={nx => setX(Math.max(0.1, Math.min(9.5, nx)))}
          constrain={nx => {
            const v = Math.max(0.1, Math.min(9.5, nx))
            return [v, Math.log(v) / Math.log(3)]
          }}
        />
      </Plot>
    </div>
  )
}

// 11.7 Drag along 2^x
export function InteractiveExponentialViz() {
  const [x, setX] = React.useState(1.5)
  const y = Math.pow(2, x)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3, 5]} yRange={[-0.5, 9]} width={520} height={440} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(t => Math.pow(2, t), -3, 5, 200).filter(p => p[1] <= 9)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [x, 0],
            [x, y]
          ]}
          opacity={OPACITY.dim * 0.5}
          dash="2 3"
        />
        <Polyline
          points={[
            [-3, y],
            [x, y]
          ]}
          opacity={OPACITY.dim * 0.5}
          dash="2 3"
        />
        <Dot x={x} y={y} r={6} opacity={OPACITY.accent} />
        <Tex
          at={[x + 0.3, y + 0.6]}
          tex={`(${x.toFixed(2)},\\,2^{${x.toFixed(2)}} = ${y.toFixed(2)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex at={[3.5, 7]} tex={'y = 2^x'} anchor="middle" size={FONT_TEX} opacity={OPACITY.fg} />
        <DragHandle
          x={x}
          y={y}
          onChange={nx => setX(Math.max(-2.5, Math.min(3.1, nx)))}
          constrain={nx => {
            const v = Math.max(-2.5, Math.min(3.1, nx))
            return [v, Math.pow(2, v)]
          }}
        />
      </Plot>
    </div>
  )
}

// M12 SEQUENCES · SERIES

// M12 Sequences and Series
// 12.1 Sequence vs series paired layout
export function SequenceVsSeriesViz() {
  const C = useVizColors()
  const terms = [1, 2, 3, 4, 5]
  // Running (cumulative) partial sums - computed, not baked; this IS the series.
  const partials = terms.map((_, i) => terms.slice(0, i + 1).reduce((a, b) => a + b, 0))
  return (
    <div style={{ width: '100%', padding: '8px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ padding: 16, border: `1px solid ${C.faint}` }}>
          <div
            style={{
              fontSize: FONT_SMALL,
              letterSpacing: LS_CONTROL,
              color: C.dim,
              textTransform: 'uppercase',
              marginBottom: 12
            }}
          >
            Sequence
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'baseline' }}>
            {terms.map((t, i) => (
              <span
                key={i}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
              >
                <span style={{ fontSize: FONT_VALUE, color: C.fg }}>{t}</span>
                <KatexInline tex={`a_{${i + 1}}`} style={{ fontSize: FONT_LABEL, color: C.dim }} />
              </span>
            ))}
            <span style={{ color: C.dim, fontSize: FONT_BODY }}>…</span>
          </div>
        </div>
        <div style={{ padding: 16, border: `1px solid ${C.faint}` }}>
          <div
            style={{
              fontSize: FONT_SMALL,
              letterSpacing: LS_CONTROL,
              color: C.dim,
              textTransform: 'uppercase',
              marginBottom: 12
            }}
          >
            Series
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            {terms.map((t, i) => (
              <span
                key={i}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
              >
                <span style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                  {i > 0 && <span style={{ color: C.accent, fontSize: FONT_CONTROL }}>+</span>}
                  <span style={{ fontSize: FONT_VALUE, color: C.dim }}>{t}</span>
                </span>
                <span style={{ fontSize: FONT_VALUE, color: C.fg, fontWeight: 600 }}>
                  {partials[i]}
                </span>
                <KatexInline tex={`S_{${i + 1}}`} style={{ fontSize: FONT_TINY, color: C.dim }} />
              </span>
            ))}
            <span style={{ color: C.dim, fontSize: FONT_BODY, alignSelf: 'center' }}>…</span>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: FONT_LABEL,
          color: C.dim,
          textAlign: 'center',
          display: 'flex',
          gap: 6,
          justifyContent: 'center',
          alignItems: 'baseline',
          flexWrap: 'wrap'
        }}
      >
        <span>Sequence is a list. Series is the running sum</span>
        <KatexInline tex={'S_n = a_1 + a_2 + \\cdots + a_n'} style={{ color: C.fg }} />
      </div>
    </div>
  )
}

// 12.2 Arithmetic sequence on number line slider d
export function ArithmeticNumberLineViz() {
  const [d, setD] = React.useState(4)
  const a1 = -9
  const ap = [0, 1, 2, 3, 4].map(i => a1 + i * d)
  const lo = Math.min(...ap) - 2
  const hi = Math.max(...ap) + 2
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[lo, hi]} yRange={[-2.5, 2.2]} width={520} height={320} pad={20}>
        <Polyline
          points={[
            [lo, 0],
            [hi, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {ap.map((v, i) => (
          <React.Fragment key={i}>
            <Dot x={v} y={0} r={5} opacity={OPACITY.fg} />
            <Tex
              at={[v, 0.85]}
              tex={`a_{${i + 1}}\\!=\\!${v}`}
              anchor="middle"
              size={FONT_SMALL}
              opacity={OPACITY.fg}
            />
          </React.Fragment>
        ))}
        {ap.slice(0, -1).map((v, i) => (
          <React.Fragment key={'gap' + i}>
            <Polyline
              points={[
                [v + 0.3, -0.7],
                [ap[i + 1] - 0.3, -0.7]
              ]}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_EMPHASIS}
            />
            <Tex
              at={[(v + ap[i + 1]) / 2, -1.2]}
              tex={`d=${d}`}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
          </React.Fragment>
        ))}
        <Tex
          at={[(lo + hi) / 2, -2.1]}
          tex={`a_n = a_1 + (n-1)d`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="$d$"
        value={d}
        min={-5}
        max={6}
        step={0.5}
        onChange={setD}
        format={v => v.toFixed(1)}
      />
    </div>
  )
}

// 12.3 Gauss pairing slider n
export function GaussPairingViz() {
  const C = useVizColors()
  const [n, setN] = React.useState(100)
  const S = (n * (n + 1)) / 2
  return (
    <div
      style={{
        width: '100%',
        fontSize: FONT_TEX,
        padding: '12px 0'
      }}
    >
      <div style={{ padding: 16, border: `1px solid ${C.faint}` }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 8, color: C.fg }}>
          <span style={{ opacity: 0.5, minWidth: 28 }}>S =</span>
          <span>
            1 + 2 + 3 + … + {n - 1} + {n}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 12, color: C.fg }}>
          <span style={{ opacity: 0.5, minWidth: 28 }}>S =</span>
          <span>
            {n} + {n - 1} + {n - 2} + … + 2 + 1
          </span>
        </div>
        <div
          style={{
            borderTop: `1px solid ${C.faint}`,
            paddingTop: 10,
            color: C.dim
          }}
        >
          Each column sums to <span style={{ color: C.fg }}>{n + 1}</span>.{' '}
          <span style={{ color: C.fg }}>{n}</span> columns → 2S = {n} · {n + 1} ={' '}
          <span style={{ color: C.fg }}>{n * (n + 1)}</span>.
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: FONT_CONTROL,
            display: 'flex',
            gap: 8,
            alignItems: 'baseline'
          }}
        >
          <span>
            S = <span style={{ fontSize: FONT_BODY, fontWeight: 600 }}>{S}</span> ={' '}
          </span>
          <KatexInline tex={'\\dfrac{n(n+1)}{2}'} />
        </div>
      </div>
      <div style={{ padding: '12px 4px 0' }}>
        <Slider
          label="$n$"
          value={n}
          min={2}
          max={200}
          step={1}
          onChange={v => setN(Math.round(v))}
          format={v => String(Math.round(v))}
        />
      </div>
    </div>
  )
}

// 12.4 Odd numbers sum to squares slider n
export function OddSquaresViz() {
  const C = useVizColors()
  const [n, setN] = React.useState(4)
  // Render an n×n grid; cells colored by which gnomon they belong to
  // Gnomon k covers cells where max(row, col) == k (k = 1..n), giving 2k-1 cells
  const cellSize = 22
  const grid = []
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const k = Math.max(r, c) // 0-indexed gnomon
      grid.push({ r, c, k })
    }
  }
  return (
    <div style={{ width: '100%', padding: '12px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: `repeat(${n}, ${cellSize}px)`, gap: 2 }}
        >
          {grid.map((g, i) => {
            const opacity = 0.15 + 0.7 * ((g.k + 1) / n)
            return (
              <div
                key={i}
                style={{
                  width: cellSize,
                  height: cellSize,
                  background: `color-mix(in srgb, ${C.fg} ${Math.round(opacity * 90)}%, transparent)`,
                  border: '1px solid var(--bg)'
                }}
              />
            )
          })}
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: FONT_TEX,
          color: C.fg,
          letterSpacing: '0.05em'
        }}
      >
        {Array.from({ length: n }, (_, k) => 2 * k + 1).join(' + ')} ={' '}
        <span style={{ fontWeight: 600, fontSize: FONT_BODY }}>{n * n}</span> = {n}²
      </div>
      <div style={{ padding: '12px 4px 0' }}>
        <Slider
          label="$n$"
          value={n}
          min={1}
          max={8}
          step={1}
          onChange={v => setN(Math.round(v))}
          format={v => String(Math.round(v))}
        />
      </div>
    </div>
  )
}

// 12.5 Telescoping sum
export function TelescopingViz() {
  const C = useVizColors()
  // (1000 − 998) + (998 − 996) + … + (334 − 332) = 1000 − 332 = 668
  const pairs = [
    [1000, 998],
    [998, 996],
    [996, 994],
    [null, null], // ellipsis
    [336, 334],
    [334, 332]
  ]
  return (
    <div
      style={{
        width: '100%',
        fontSize: FONT_TEX,
        padding: '12px 0'
      }}
    >
      <div style={{ padding: 16, border: `1px solid ${C.faint}` }}>
        {pairs.map(([a, b], i) =>
          a === null ? (
            <div key={i} style={{ padding: '4px 0', opacity: 0.5, color: C.fg }}>
              + ⋯
            </div>
          ) : (
            <div key={i} style={{ display: 'flex', gap: 6, padding: '4px 0', color: C.fg }}>
              <span style={{ opacity: 0.5, width: 16 }}>{i === 0 ? '' : '+'}</span>
              <span>(</span>
              <span
                style={{
                  color: i === 0 ? C.fg : C.dim,
                  textDecoration: i === 0 ? 'none' : 'line-through'
                }}
              >
                {a}
              </span>
              <span style={{ opacity: 0.5 }}>−</span>
              <span
                style={{
                  color: i === pairs.length - 1 ? C.fg : C.dim,
                  textDecoration: i === pairs.length - 1 ? 'none' : 'line-through'
                }}
              >
                {b}
              </span>
              <span>)</span>
            </div>
          )
        )}
        <div
          style={{
            borderTop: `1px solid ${C.faint}`,
            marginTop: 12,
            paddingTop: 10,
            fontSize: FONT_CONTROL,
            color: C.fg
          }}
        >
          = 1000 − 332 = <span style={{ fontWeight: 600, fontSize: FONT_BODY }}>668</span>
        </div>
      </div>
    </div>
  )
}

// 12.6 Partial sums of 1/2 + 1/4 + ...
export function PartialSumsViz() {
  const N = 12
  const pts = []
  for (let n = 1; n <= N; n++) pts.push([n, 1 - Math.pow(0.5, n)])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, N + 1]} yRange={[-0.05, 1.2]} width={520} height={400} pad={28}>
        <Polyline
          points={[
            [0, 0],
            [N + 1, 0]
          ]}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [0, 0],
            [0, 1.15]
          ]}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [0, 1],
            [N + 1, 1]
          ]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {pts.map(([n, s], i) => (
          <Dot key={i} x={n} y={s} r={4} opacity={OPACITY.fg} />
        ))}
        {[1, 2, 4, 8].map(n => (
          <Tex
            key={n}
            at={[n, -0.07]}
            tex={`n=${n}`}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        <Tex
          at={[N - 0.5, 1.1]}
          tex={'S \\to 1'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex at={[-0.3, 1]} tex={'1'} anchor="end" size={FONT_SMALL} opacity={OPACITY.dim} />
        <Tex at={[-0.3, 0]} tex={'0'} anchor="end" size={FONT_SMALL} opacity={OPACITY.dim} />
        <Tex
          at={[N / 2, -0.18]}
          tex={'S_n = 1 - 2^{-n}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// 12.7 Staircase as half rectangle slider n
export function StaircaseViz() {
  const C = useVizColors()
  const [n, setN] = React.useState(5)
  const cellSize = 18
  const cells = []
  // left staircase: column i has i+1 cells; right staircase: column i has n-i cells stacked above
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) cells.push({ x: i, y: j, top: false })
    for (let j = i + 1; j < n + 1; j++) cells.push({ x: i, y: j, top: true })
  }
  return (
    <div style={{ width: '100%', padding: '12px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
        <div
          style={{
            position: 'relative',
            height: (n + 1) * cellSize + n * 2,
            width: n * cellSize + (n - 1) * 2
          }}
        >
          {cells.map((c, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: c.x * (cellSize + 2),
                bottom: c.y * (cellSize + 2),
                width: cellSize,
                height: cellSize,
                background: c.top ? C.accent : C.faint,
                border: '1px solid var(--bg)'
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: FONT_LABEL,
          color: C.fg,
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'baseline',
          flexWrap: 'wrap'
        }}
      >
        <span>
          1 + 2 + … + {n} ={' '}
          <span style={{ fontWeight: 600, fontSize: FONT_CONTROL }}>{(n * (n + 1)) / 2}</span>{' '}
          ={' '}
        </span>
        <KatexInline tex={'\\dfrac{n(n+1)}{2}'} />
      </div>
      <div style={{ padding: '12px 4px 0' }}>
        <Slider
          label="$n$"
          value={n}
          min={1}
          max={10}
          step={1}
          onChange={v => setN(Math.round(v))}
          format={v => String(Math.round(v))}
        />
      </div>
    </div>
  )
}

// 12.8 Fibonacci numbers bar lengths
export function FibonacciStaircaseViz() {
  const C = useVizColors()
  const fibs = fibonacci(10).slice(1) // [1, 1, 2, 3, 5, 8, 13, 21, 34]
  const maxV = fibs[fibs.length - 1]
  return (
    <div style={{ width: '100%', padding: '12px 0' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto auto',
          columnGap: 14,
          rowGap: 6,
          alignItems: 'center',
          fontSize: FONT_LABEL
        }}
      >
        {fibs.map((v, i) => (
          <React.Fragment key={i}>
            <KatexInline tex={`F_{${i + 1}}`} style={{ color: C.dim }} />
            <div
              style={{
                height: 10,
                background: `color-mix(in srgb, ${C.fg} 10%, transparent)`,
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: 10,
                  width: `${(100 * v) / maxV}%`,
                  background: C.fg
                }}
              />
            </div>
            <span
              style={{
                color: C.fg,
                minWidth: 28,
                textAlign: 'right',
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              {v}
            </span>
            {/* consecutive ratio Fₙ/Fₙ₋₁ - COMPUTED live; oscillates in to φ=1.6180 */}
            <span
              style={{
                color: i === 0 ? C.faint : C.accent,
                minWidth: 52,
                textAlign: 'right',
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              {i === 0 ? '-' : (fibs[i] / fibs[i - 1]).toFixed(4)}
            </span>
          </React.Fragment>
        ))}
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: FONT_LABEL,
          color: C.dim,
          display: 'flex',
          gap: 8,
          alignItems: 'baseline',
          flexWrap: 'wrap'
        }}
      >
        <KatexInline tex={'F_n = F_{n-1} + F_{n-2}'} style={{ color: C.fg }} />
        <span>· ratio</span>
        <KatexInline
          tex={'\\tfrac{F_{n+1}}{F_n} \\to \\varphi \\approx 1.618'}
          style={{ color: C.fg }}
        />
      </div>
    </div>
  )
}

// 12.9 Piano octave as geometric drag a key, show ratio
export function PianoViz() {
  const C = useVizColors()
  const [k, setK] = React.useState(0) // semitones above C
  const q = Math.pow(2, 1 / 12)
  const ratio = Math.pow(q, k)
  // 13 keys: C C# D D# E F F# G G# A A# B C (k = 0..12)
  const isBlack = [
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false
  ]
  const names = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B', 'C']
  return (
    <div style={{ width: '100%', padding: '12px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        {names.map((n, i) => (
          <div
            key={i}
            onClick={() => setK(i)}
            style={{
              width: 32,
              height: 70,
              cursor: 'pointer',
              background:
                i === k
                  ? C.fg
                  : isBlack[i]
                    ? C.faint
                    : `color-mix(in srgb, ${C.fg} 8%, transparent)`,
              border: `1px solid ${i === k ? C.fg : C.accent}`,
              color: i === k ? 'var(--bg)' : C.accent,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: 6,
              fontSize: FONT_SMALL,
              letterSpacing: '0.05em'
            }}
          >
            {n}
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 16,
          textAlign: 'center',
          fontSize: FONT_TEX,
          color: C.fg,
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'baseline',
          flexWrap: 'wrap'
        }}
      >
        <span>{k} semitones above C ·</span>
        <KatexInline
          tex={`q^{${k}} = 2^{\\frac{${k}}{12}} \\approx ${ratio.toFixed(4)}`}
          style={{ fontWeight: 600 }}
        />
      </div>
      <div
        style={{
          marginTop: 8,
          textAlign: 'center',
          fontSize: FONT_LABEL,
          color: C.dim,
          display: 'flex',
          gap: 6,
          justifyContent: 'center',
          alignItems: 'baseline'
        }}
      >
        <span>After 12 semitones:</span>
        <KatexInline tex={'q^{12} = 2'} />
        <span>(one octave). Click any key.</span>
      </div>
    </div>
  )
}

// M13 BINOMIAL THEOREM

// M13 The Binomial Theorem
// 13.2 Difference of squares drag a, b
export function DiffOfSquaresViz() {
  const [a, setA] = React.useState(3)
  const [b, setB] = React.useState(1)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: ux == uy so the a² region renders as a true square */}
      <Plot xRange={[-0.7, 12]} yRange={[-1.2, 4.5]} width={664} height={320} pad={20}>
        <Polyline
          points={[
            [0, 0],
            [a, 0],
            [a, a],
            [0, a]
          ]}
          closed
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={[
            [a - b, a - b],
            [a, a - b],
            [a, a],
            [a - b, a]
          ]}
          closed
          opacity={OPACITY.faint * 1.5}
          fillOpacity={0.03}
        />
        <Polyline
          points={[
            [0, 0],
            [a, 0],
            [a, a - b],
            [a - b, a - b],
            [a - b, a],
            [0, a]
          ]}
          closed
          opacity={OPACITY.fg}
          fillOpacity={0.12}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[a + 0.5, a / 2]}
          tex={'\\to'}
          anchor="middle"
          size={FONT_BODY}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [a + 1.4, 0],
            [a + 1.4 + (a + b), 0],
            [a + 1.4 + (a + b), a - b],
            [a + 1.4, a - b]
          ]}
          closed
          opacity={OPACITY.accent}
          fillOpacity={0.2}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[a / 2, a / 2 - 0.4]}
          tex={`a^2-b^2`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[a + 1.4 + (a + b) / 2, (a - b) / 2]}
          tex={`(a+b)(a-b)`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[a / 2, -0.7]}
          tex={`a=${a.toFixed(1)}`}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[a - b / 2, a - b - 0.4]}
          tex={`b=${b.toFixed(1)}`}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[a + 1.4 + (a + b) / 2, a - b + 0.55]}
          tex={`= ${((a - b) * (a + b)).toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={a}
          y={-0.4}
          onChange={nx => setA(Math.max(b + 0.4, Math.min(3.5, nx)))}
          constrain={nx => [Math.max(b + 0.4, Math.min(3.5, nx)), -0.4]}
        />
        <DragHandle
          x={a - b}
          y={-0.4}
          onChange={nx => setB(Math.max(0.5, Math.min(a - 0.4, a - nx)))}
          constrain={nx => [Math.max(0.5, Math.min(a - 0.4, nx)), -0.4]}
        />
      </Plot>
    </div>
  )
}

// A.14 MODULUS FUNCTION
// The absolute-value function: graph, distance, transformations, equations, inequalities.

// 14.1 The V graph of y = |x|; drag the point to see |x| as distance from zero
export function ModulusGraphViz() {
  const [x, setX] = React.useState(2.6)
  const ax = Math.abs(x)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic (ux=uy≈43.7): the V's ±1 slopes read at true 45°, so the point's
          height |x| equals its horizontal distance from 0 on screen (the whole point). */}
      <Plot xRange={[-5.5, 5.5]} yRange={[-1.2, 5.2]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-5, 5],
            [0, 0],
            [5, 5]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [x, 0],
            [x, ax]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, ax],
            [x, ax]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="2 3"
        />
        <Dot x={x} y={ax} r={5} opacity={OPACITY.accent} />
        <Dot x={x} y={0} r={3} opacity={OPACITY.fg} />
        <Tex
          at={[x + (x >= 0 ? 0.2 : -0.2), ax + 0.35]}
          tex={`(${x.toFixed(1)},\\ ${ax.toFixed(1)})`}
          anchor={x >= 0 ? 'start' : 'end'}
          size={12}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-5, 4.6]}
          tex={'y = |x|'}
          anchor="start"
          size={FONT_CONTROL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[x / 2, -0.6]}
          tex={`|x| = ${ax.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <DragHandle
          x={x}
          y={ax}
          onChange={nx => setX(Math.max(-5, Math.min(5, nx)))}
          constrain={nx => {
            const v = Math.max(-5, Math.min(5, nx))
            return [v, Math.abs(v)]
          }}
        />
      </Plot>
    </div>
  )
}

// 14.2 |x - 3| as the distance between x and 3 on a number line
export function ModulusDistanceViz() {
  const [x, setX] = React.useState(7)
  const a = 3
  const dist = Math.abs(x - a)
  const ticks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2, 11]} yRange={[-2.4, 2.4]} width={560} height={240} pad={20}>
        <Polyline
          points={[
            [-2, 0],
            [11, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        {ticks.map(t => (
          <React.Fragment key={t}>
            <Polyline
              points={[
                [t, -0.12],
                [t, 0.12]
              ]}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[t, -0.62]}
              tex={`${t}`}
              anchor="middle"
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
          </React.Fragment>
        ))}
        <Polyline
          points={[
            [Math.min(x, a), 0.55],
            [Math.max(x, a), 0.55]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot x={a} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={x} y={0} r={5} opacity={OPACITY.accent} />
        <Tex at={[a, -1.05]} tex={'a = 3'} anchor="middle" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex
          at={[x, -1.05]}
          tex={`x = ${x.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[(x + a) / 2, 1.05]}
          tex={`|x - 3| = ${dist.toFixed(1)}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={x}
          y={0}
          onChange={nx => setX(Math.max(-1.5, Math.min(10.5, nx)))}
          constrain={nx => [Math.max(-1.5, Math.min(10.5, nx)), 0]}
        />
      </Plot>
    </div>
  )
}

// 14.3 Transforming the V: y = a|x - h| + k with live sliders
export function ModulusTransformViz() {
  const [a, setA] = React.useState(1)
  const [h, setH] = React.useState(1)
  const [k, setK] = React.useState(-1)
  const aSafe = Math.abs(a) < 0.05 ? (a >= 0 ? 0.05 : -0.05) : a
  const f = x => aSafe * Math.abs(x - h) + k
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: equal spans [-6,6]² ⇒ square viewBox (ux=uy=40) so slope a reads true (a=1 ⇒ 45°). */}
      <Plot xRange={[-8.67, 8.67]} yRange={[-6, 6]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-6, 6],
            [0, 0],
            [6, 6]
          ]}
          opacity={OPACITY.faint * 4}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(f, -6, 6, 200).filter(p => Math.abs(p[1]) < 20)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={h} y={k} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[h + 0.2, k - 0.5]}
          tex={`(${h.toFixed(1)},\\ ${k.toFixed(1)})`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-5.8, 5.3]}
          tex={'y = a|x - h| + k'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="$a$" value={a} min={-3} max={3} step={0.1} onChange={setA} />
      <Slider label="$h$" value={h} min={-4} max={4} step={0.1} onChange={setH} />
      <Slider label="$k$" value={k} min={-4} max={4} step={0.1} onChange={setK} />
    </div>
  )
}

// 14.4 Solving |x - 1| = c: a horizontal line cuts the V at two points
export function ModulusEquationViz() {
  const [c, setC] = React.useState(2)
  const h = 1
  const f = x => Math.abs(x - h)
  const cc = Math.max(0, c)
  const sol1 = h - cc
  const sol2 = h + cc
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 7]} yRange={[-1.2, 5.2]} width={540} height={420} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(f, -5, 7, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [-5, cc],
            [7, cc]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
          dash="4 3"
        />
        {cc > 0 && (
          <>
            <Dot x={sol1} y={cc} r={5} opacity={OPACITY.accent} />
            <Dot x={sol2} y={cc} r={5} opacity={OPACITY.accent} />
            <Dot x={sol1} y={0} r={4} opacity={OPACITY.fg} />
            <Dot x={sol2} y={0} r={4} opacity={OPACITY.fg} />
            <Polyline
              points={[
                [sol1, 0],
                [sol1, cc]
              ]}
              opacity={OPACITY.dim * 0.5}
              dash="2 3"
            />
            <Polyline
              points={[
                [sol2, 0],
                [sol2, cc]
              ]}
              opacity={OPACITY.dim * 0.5}
              dash="2 3"
            />
            <Tex
              at={[sol1, -0.6]}
              tex={`${sol1.toFixed(1)}`}
              anchor="middle"
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
            <Tex
              at={[sol2, -0.6]}
              tex={`${sol2.toFixed(1)}`}
              anchor="middle"
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
          </>
        )}
        <Tex
          at={[6.8, cc + 0.3]}
          tex={`y = ${cc.toFixed(1)}`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-4.8, 4.6]}
          tex={'y = |x - 1|'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="$c$ (right side)" value={c} min={-1} max={4} step={0.1} onChange={setC} />
    </div>
  )
}

// 14.5 |x| < c is the inside segment; |x| > c is the two outside rays
export function ModulusInequalityViz() {
  const [c, setC] = React.useState(3)
  const cc = Math.max(0.1, c)
  const ticks = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7, 7]} yRange={[-2.2, 2.2]} width={560} height={260} pad={20}>
        <Polyline
          points={[
            [-7, 0],
            [7, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        {ticks.map(t => (
          <React.Fragment key={t}>
            <Polyline
              points={[
                [t, -0.1],
                [t, 0.1]
              ]}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[t, -0.55]}
              tex={`${t}`}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
          </React.Fragment>
        ))}
        <Polyline
          points={[
            [-cc, 0.65],
            [cc, 0.65]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot
          x={-cc}
          y={0.65}
          r={4}
          opacity={OPACITY.accent}
          fill={false}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot
          x={cc}
          y={0.65}
          r={4}
          opacity={OPACITY.accent}
          fill={false}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Tex
          at={[0, 1.25]}
          tex={'|x| < c:\\ -c < x < c'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Polyline
          points={[
            [-7, -0.65],
            [-cc, -0.65]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Polyline
          points={[
            [cc, -0.65],
            [7, -0.65]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot
          x={-cc}
          y={-0.65}
          r={4}
          opacity={OPACITY.fg}
          fill={false}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot
          x={cc}
          y={-0.65}
          r={4}
          opacity={OPACITY.fg}
          fill={false}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Tex
          at={[0, -1.3]}
          tex={'|x| > c:\\ x < -c\\ \\text{ or }\\ x > c'}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[cc + 0.15, 0.0]}
          tex={`c=${cc.toFixed(1)}`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="$c$" value={c} min={0.5} max={6} step={0.1} onChange={setC} />
    </div>
  )
}

// A.15 RATIONAL AND IRRATIONAL FUNCTIONS

// 15.1 y = 1/x: two branches avoiding the asymptote at x = 0
export function ReciprocalAnchorViz() {
  const posPoints = sampleFn(x => 1 / x, 0.18, 6, 200)
  const negPoints = sampleFn(x => 1 / x, -6, -0.18, 200)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: equal spans (−6..6 / −6..6) ⇒ square viewBox so xy=1 reads symmetric about y=x. */}
      <Plot xRange={[-8.67, 8.67]} yRange={[-6, 6]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline points={posPoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline points={negPoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={[
            [0, -6],
            [0, 6]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="4 4"
          strokeWidth={1}
        />
        <Polyline
          points={[
            [-6, 0],
            [6, 0]
          ]}
          opacity={OPACITY.dim * 0.6}
          dash="4 4"
          strokeWidth={1}
        />
        <Tex
          at={[-5.7, 5.3]}
          tex={'y = \\tfrac{1}{x}'}
          anchor="start"
          size={FONT_CONTROL}
          opacity={OPACITY.fg}
        />
        <Tex at={[0.2, 5.3]} tex={'x = 0'} anchor="start" size={FONT_SMALL} opacity={OPACITY.dim} />
        <Tex at={[5.7, 0.35]} tex={'y = 0'} anchor="end" size={FONT_SMALL} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

// 15.2 y = (ax + b)/(cx + d) with live sliders for a, b, c, d
export function RationalAsymptoteViz() {
  const [a, setA] = React.useState(1)
  const [b, setB] = React.useState(0)
  const [c, setC] = React.useState(1)
  const [d, setD] = React.useState(-2)
  const cSafe = Math.abs(c) < 0.05 ? (c >= 0 ? 0.05 : -0.05) : c
  const vAsym = -d / cSafe
  const hAsym = a / cSafe
  const f = x => (a * x + b) / (cSafe * x + d)
  const gapLeft = vAsym - 0.18
  const gapRight = vAsym + 0.18
  const leftPoints = sampleFn(f, vAsym - 8, gapLeft, 200).filter(p => Math.abs(p[1]) < 18)
  const rightPoints = sampleFn(f, gapRight, vAsym + 8, 200).filter(p => Math.abs(p[1]) < 18)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: equal spans (−7..7) ⇒ square viewBox (ux=uy≈34.3). */}
      <Plot xRange={[-10.11, 10.11]} yRange={[-7, 7]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline points={leftPoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline points={rightPoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={[
            [vAsym, -7],
            [vAsym, 7]
          ]}
          opacity={OPACITY.accent}
          dash="5 4"
          strokeWidth={1.5}
        />
        <Polyline
          points={[
            [-7, hAsym],
            [7, hAsym]
          ]}
          opacity={OPACITY.dim}
          dash="4 4"
          strokeWidth={1.5}
        />
        <Tex
          at={[vAsym + 0.2, 6.3]}
          tex={`x = ${vAsym.toFixed(2)}`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[6.8, hAsym + 0.35]}
          tex={`y = ${hAsym.toFixed(2)}`}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-6.7, 6.3]}
          tex={'y = \\tfrac{ax+b}{cx+d}'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="$a$" value={a} min={-4} max={4} step={0.1} onChange={setA} />
      <Slider label="$b$" value={b} min={-6} max={6} step={0.1} onChange={setB} />
      <Slider
        label="$c$"
        value={c}
        min={-4}
        max={4}
        step={0.1}
        onChange={v => {
          if (Math.abs(v) >= 0.05) setC(v)
        }}
      />
      <Slider label="$d$" value={d} min={-6} max={6} step={0.1} onChange={setD} />
    </div>
  )
}

// 15.3 y = (x² - 4)/(x - 2) = x + 2 with a hole at (2, 4)
export function RationalHoleViz() {
  // Genuine removable discontinuity: sample the line with a GAP across x = 2 so the
  // curve is truly missing that point, then mark it with an open ring. (Sampling
  // through x=2 and laying a ring on a solid line would not read as a hole.)
  const leftPoints = sampleFn(x => x + 2, -5, 1.85, 160)
  const rightPoints = sampleFn(x => x + 2, 2.15, 5, 160)
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: equal spans (10/10) ⇒ square viewBox so slope-1 line reads 45°. */}
      <Plot xRange={[-7.22, 7.22]} yRange={[-2, 8]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline points={leftPoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline points={rightPoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Dot x={2} y={4} r={6} opacity={OPACITY.fg} fill={false} strokeWidth={STROKE_EMPHASIS} />
        <Tex
          at={[2.2, 4.4]}
          tex={'\\text{hole at } (2,4)'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-4.7, 7.3]}
          tex={'y = \\tfrac{x^2-4}{x-2}'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-4.7, 6.2]}
          tex={'= x + 2,\\ x \\neq 2'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

// 15.4 Three degree cases: button toggle showing HA or none
export function DegreeAsymptoteViz() {
  const [caseIdx, setCaseIdx] = React.useState(0)
  const cases = [
    {
      label: 'deg p < deg q',
      f: x => 1 / (x * x + 1),
      eq: 'y = \\tfrac{1}{x^2+1}',
      hAsym: 0,
      haLabel: 'y = 0',
      xRange: [-5, 5],
      yRange: [-1.5, 1.5],
      hasHA: true
    },
    {
      label: 'deg p = deg q',
      f: x => (2 * x + 1) / (x - 3),
      eq: 'y = \\tfrac{2x+1}{x-3}',
      hAsym: 2,
      haLabel: 'y = 2',
      xRange: [-6, 10],
      yRange: [-8, 12],
      hasHA: true,
      vAsym: 3
    },
    {
      label: 'deg p > deg q',
      f: x => (x * x) / (x + 1),
      eq: 'y = \\tfrac{x^2}{x+1}',
      haLabel: 'no horiz. asymptote',
      xRange: [-6, 6],
      yRange: [-8, 8],
      hasHA: false,
      vAsym: -1
    }
  ]
  const cur = cases[caseIdx]
  const vA = cur.vAsym
  const leftPoints =
    vA !== undefined
      ? sampleFn(cur.f, cur.xRange[0], vA - 0.18, 200).filter(p => Math.abs(p[1]) < 20)
      : []
  const rightPoints =
    vA !== undefined
      ? sampleFn(cur.f, vA + 0.18, cur.xRange[1], 200).filter(p => Math.abs(p[1]) < 20)
      : []
  const allPoints =
    vA === undefined
      ? sampleFn(cur.f, cur.xRange[0], cur.xRange[1], 200).filter(p => Math.abs(p[1]) < 20)
      : []
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        {cases.map((c, i) => (
          <button
            key={i}
            onClick={() => setCaseIdx(i)}
            style={{
              background: i === caseIdx ? 'var(--text-primary)' : 'transparent',
              color: i === caseIdx ? 'var(--bg)' : 'var(--text-primary)',
              opacity: i === caseIdx ? 1 : 0.7,
              border: '1px solid var(--border-default)',
              padding: '4px 10px',
              fontFamily: 'D-DIN, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.12em',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}
          >
            {c.label}
          </button>
        ))}
      </div>
      <Plot xRange={cur.xRange} yRange={cur.yRange} width={520} height={380} pad={20}>
        <Axes step={1} />
        {vA !== undefined && (
          <Polyline
            points={[
              [vA, cur.yRange[0]],
              [vA, cur.yRange[1]]
            ]}
            opacity={OPACITY.dim}
            dash="4 4"
            strokeWidth={1.5}
          />
        )}
        {cur.hasHA && (
          <Polyline
            points={[
              [cur.xRange[0], cur.hAsym],
              [cur.xRange[1], cur.hAsym]
            ]}
            opacity={OPACITY.accent}
            dash="5 4"
            strokeWidth={1.5}
          />
        )}
        {vA !== undefined ? (
          <>
            <Polyline points={leftPoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
            <Polyline points={rightPoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
          </>
        ) : (
          <Polyline points={allPoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        )}
        <Tex
          at={[cur.xRange[0] + 0.3, cur.yRange[1] - 0.5]}
          tex={cur.eq}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[cur.xRange[1] - 0.3, cur.hasHA ? cur.hAsym + 0.5 : cur.yRange[1] - 0.5]}
          tex={cur.haLabel}
          anchor="end"
          size={FONT_SMALL}
          opacity={cur.hasHA ? OPACITY.accent : OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

// 15.5 y = sqrt(x): domain x >= 0, start at (0,0)
export function SquareRootAnchorViz() {
  const curvePoints = sampleFn(x => Math.sqrt(x), 0, 9, 300)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, 9]} yRange={[-1, 4]} width={520} height={340} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-1, -1],
            [-1, 4],
            [0, 4],
            [0, -1]
          ]}
          opacity={0.06}
          strokeWidth={0}
          fill="var(--text-primary)"
        />
        <Polyline
          points={[
            [0, -1],
            [0, 4]
          ]}
          opacity={OPACITY.dim * 0.5}
          dash="3 3"
          strokeWidth={1}
        />
        <Polyline points={curvePoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Dot x={0} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[-0.7, 3.5]}
          tex={'x < 0'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.7, 3.0]}
          tex={'\\text{undefined}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[7.5, 3.6]}
          tex={'y = \\sqrt{x}'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0.15, -0.7]}
          tex={'(0,0)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

// 15.6 y = a*sqrt(x - h) + k with sliders; reference curve y = sqrt(x) dashed
export function SquareRootTransformViz() {
  const [a, setA] = React.useState(1)
  const [h, setH] = React.useState(0)
  const [k, setK] = React.useState(0)
  const aSafe = Math.abs(a) < 0.05 ? (a >= 0 ? 0.05 : -0.05) : a
  const domainStart = h
  const refPoints = sampleFn(x => Math.sqrt(x), 0, 9, 200)
  const curvePoints = sampleFn(
    x => aSafe * Math.sqrt(x - domainStart) + k,
    domainStart,
    domainStart + 9,
    200
  )
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2, 10]} yRange={[-5, 5]} width={520} height={400} pad={20}>
        <Axes step={1} />
        <Polyline points={refPoints} opacity={OPACITY.faint * 5} dash="3 3" strokeWidth={1.5} />
        <Polyline points={curvePoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Dot x={domainStart} y={k} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[domainStart + 0.2, k + 0.4]}
          tex={`(${h.toFixed(1)},\\ ${k.toFixed(1)})`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-1.8, 4.5]}
          tex={'y = a\\sqrt{x-h}+k'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-1.8, 3.6]}
          tex={'-- \\text{ ref: } y=\\sqrt{x}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="$a$" value={a} min={-3} max={3} step={0.1} onChange={setA} />
      <Slider label="$h$" value={h} min={-4} max={4} step={0.1} onChange={setH} />
      <Slider label="$k$" value={k} min={-4} max={4} step={0.1} onChange={setK} />
    </div>
  )
}

// 15.7 Radical equation: sqrt(2x-1)+2 vs y=x (intersection) and why squaring adds x=1
export function RadicalSquareSignViz() {
  // Top: sqrt(2x-1)+2 and y=x, intersect at x=5
  const curvePoints = sampleFn(x => Math.sqrt(2 * x - 1) + 2, 0.5, 9, 300)
  const linePoints1 = sampleFn(x => x, 0.5, 9, 2)
  // Bottom: parabola y=(x-2)^2 and y=2x-1; roots at x=1 and x=5
  const parabolaPoints = sampleFn(x => (x - 2) * (x - 2), -1, 8, 200)
  const linePoints2 = sampleFn(x => 2 * x - 1, -1, 8, 2)
  return (
    <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
      <div>
        <Plot xRange={[0, 9]} yRange={[-1, 9]} width={320} height={300} pad={16}>
          <Axes step={1} />
          <Polyline points={curvePoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
          <Polyline points={linePoints1} opacity={OPACITY.accent} strokeWidth={1.5} dash="4 3" />
          <Dot x={5} y={5} r={5} opacity={OPACITY.accent} />
          <Tex
            at={[5.2, 4.4]}
            tex={'(5,5)'}
            anchor="start"
            size={FONT_SMALL}
            opacity={OPACITY.accent}
          />
          <Tex
            at={[0.3, 8.2]}
            tex={'y=\\sqrt{2x-1}+2'}
            anchor="start"
            size={FONT_SMALL}
            opacity={OPACITY.fg}
          />
          <Tex
            at={[7.5, 8.2]}
            tex={'y=x'}
            anchor="end"
            size={FONT_SMALL}
            opacity={OPACITY.accent}
          />
        </Plot>
        <p
          style={{
            fontSize: '11px',
            color: 'var(--text-primary)',
            opacity: 0.55,
            marginTop: '0.5rem',
            textAlign: 'center',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          {'Real solution: x = 5'}
        </p>
      </div>
      <div>
        <Plot xRange={[-1, 8]} yRange={[-2, 14]} width={320} height={300} pad={16}>
          <Axes step={1} />
          <Polyline points={parabolaPoints} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
          <Polyline points={linePoints2} opacity={OPACITY.accent} strokeWidth={1.5} dash="4 3" />
          <Dot x={5} y={9} r={5} opacity={OPACITY.accent} />
          <Dot x={1} y={1} r={5} opacity={OPACITY.dim} />
          <Tex
            at={[5.15, 8.0]}
            tex={'x=5'}
            anchor="start"
            size={FONT_SMALL}
            opacity={OPACITY.accent}
          />
          <Tex
            at={[1.15, 0.2]}
            tex={'x=1\\ \\text{(extra)}'}
            anchor="start"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
          <Tex
            at={[-0.8, 13.0]}
            tex={'y=(x-2)^2'}
            anchor="start"
            size={FONT_SMALL}
            opacity={OPACITY.fg}
          />
          <Tex
            at={[6.8, 13.0]}
            tex={'y=2x-1'}
            anchor="end"
            size={FONT_SMALL}
            opacity={OPACITY.accent}
          />
        </Plot>
        <p
          style={{
            fontSize: '11px',
            color: 'var(--text-primary)',
            opacity: 0.55,
            marginTop: '0.5rem',
            textAlign: 'center',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          {'After squaring: x = 1 is extraneous'}
        </p>
      </div>
    </div>
  )
}

export function LineMeetsParabolaViz() {
  // Fixed parabola y = x², line y = 2x + k. Intersections solve
  //   x² = 2x + k  ⟹  x² − 2x − k = 0,  D = 4 + 4k = 4(1+k),  x = (2 ± √D)/2.
  // Everything below is derived live from k - no hard-coded roots.
  const C = useVizColors()
  const [k, setK] = React.useState(3)

  const D = 4 * (1 + k)
  const sqrtD = Math.sqrt(Math.max(D, 0))
  const x1 = (2 - sqrtD) / 2
  const x2 = (2 + sqrtD) / 2
  const EPS = 1e-9
  const state = D > EPS ? 'secant' : D < -EPS ? 'miss' : 'tangent'

  // Fixed, isotropic frame: (424−40)/12 = (520−40)/15 = 32 px/unit.
  const X_MIN = -5,
    X_MAX = 7,
    Y_MIN = -3,
    Y_MAX = 12

  const num = v => v.toFixed(2)
  const rootsTex =
    state === 'secant'
      ? `x = ${num(x1)},\\ ${num(x2)}`
      : state === 'tangent'
        ? `x = 1\\ \\text{(double root)}`
        : `\\text{no real } x`
  const stateTex =
    state === 'secant'
      ? `\\text{SECANT}\\ (D>0)`
      : state === 'tangent'
        ? `\\text{TANGENT}\\ (D=0)`
        : `\\text{MISS}\\ (D<0)`

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[X_MIN, X_MAX]} yRange={[Y_MIN, Y_MAX]} width={424} height={520} pad={20}>
        <Axes step={2} />
        {/* Fixed parabola y = x² (arms clipped at the top of the fixed frame) */}
        <Polyline
          points={sampleFn(x => x * x, X_MIN, X_MAX, 240).filter(p => p[1] <= Y_MAX + 0.3)}
          color={C.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* Moving line y = 2x + k (endpoints beyond the frame; svg clips to the plot) */}
        <Polyline
          points={[
            [X_MIN, 2 * X_MIN + k],
            [X_MAX, 2 * X_MAX + k]
          ]}
          color={C.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* Live intersection points: two (secant), one (tangent), none (miss) */}
        {state === 'secant' && (
          <>
            <Dot x={x1} y={x1 * x1} r={5} color={C.fg} />
            <Dot x={x2} y={x2 * x2} r={5} color={C.fg} />
          </>
        )}
        {state === 'tangent' && <Dot x={x1} y={x1 * x1} r={5} color={C.fg} />}
        {/* Two well-separated curve labels only - numbers go under the plot */}
        <Tex
          at={[-4, 11]}
          tex={'y = x^2'}
          anchor="start"
          size={FONT_LABEL}
          color={C.dim}
          opacity={OPACITY.fg}
        />
        {/* label parked in the bottom-left clear zone: the line y=2x+k needs k=y-2x=7.1
            to pass through (-4.8,-2.2), outside the slider's [-3,5] range, so it never collides */}
        <Tex
          at={[-4.8, -2.2]}
          tex={'y = 2x + k'}
          anchor="start"
          size={FONT_LABEL}
          color={C.dim}
          opacity={OPACITY.fg}
        />
      </Plot>

      {/* WHY the geometry works - the derivation, not a numeric restatement */}
      <div
        style={{
          marginTop: 14,
          display: 'flex',
          justifyContent: 'center',
          fontSize: FONT_LABEL,
          letterSpacing: LS_MEDIUM,
          color: C.dim
        }}
      >
        <KatexInline tex={'x^2 = 2x + k \\;\\Rightarrow\\; x^2 - 2x - k = 0, \\quad D = 4(1+k)'} />
      </div>

      {/* Live readouts (mandatory: values live under the plot, never on the canvas) */}
      <div
        style={{
          marginTop: 10,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 20,
          fontSize: FONT_LABEL,
          letterSpacing: LS_CONTROL,
          color: C.fg
        }}
      >
        <KatexInline tex={`k = ${num(k)}`} />
        <KatexInline tex={`D = 4(1+k) = ${num(D)}`} />
        <KatexInline tex={rootsTex} />
        <KatexInline tex={stateTex} />
      </div>

      <Slider
        label="$k$"
        value={k}
        min={-3}
        max={5}
        step={0.01}
        onChange={setK}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}
// 09.5b Finding the unknown constant - fixed-slope tangent lines to a circle.
// Circle x^2 + y^2 = 8; both slope-1 tangents are y = x + 4 and y = x − 4.
// STATIC. Every number is derived live from R2 and the slope m - none hard-coded.
export function CircleTangentLinesViz() {
  const C = useVizColors()
  const R2 = 8 // circle: x^2 + y^2 = R2  (radius r = sqrt(R2) = 2*sqrt(2))
  const m = 1 // required slope of both tangent lines
  const r = Math.sqrt(R2)
  // Tangency of y = m x + c to x^2 + y^2 = R2:
  //   dist(origin, m x − y + c = 0) = |c| / sqrt(m^2 + 1) must equal r,
  //   so |c| = r * sqrt(m^2 + 1) = sqrt(R2 * (m^2 + 1)).  (R2=8, m=1 ⇒ |c|=4)
  const cAbs = Math.sqrt(R2 * (m * m + 1))
  const cs = [cAbs, -cAbs]
  // Tangent point = foot of the perpendicular from the origin to the line:
  //   P = ( −c*m/(m^2+1),  c/(m^2+1) ).  (c=+4 ⇒ (−2,2);  c=−4 ⇒ (2,−2))
  const foot = c => [(-c * m) / (m * m + 1), c / (m * m + 1)]

  // straight tangent segment, sampled and clipped to the viewport box
  const linePts = c => {
    const pts = []
    for (let i = 0; i <= 120; i++) {
      const x = -6 + (12 * i) / 120
      const y = m * x + c
      if (y >= -6 && y <= 6) pts.push([x, y])
    }
    return pts
  }

  // right-angle bracket at P between the radius (P→O) and the tangent line -
  // this is WHY tangency holds: the radius meets the line at 90°.
  const rightAngle = c => {
    const [px, py] = foot(c)
    const rl = Math.hypot(px, py) || 1
    const ux = -px / rl,
      uy = -py / rl // unit vector P → origin (the radius)
    const vl = Math.hypot(1, m)
    const vx = 1 / vl,
      vy = m / vl // unit vector along the line
    const s = 0.42
    return [
      [px + s * ux, py + s * uy],
      [px + s * (ux + vx), py + s * (uy + vy)],
      [px + s * vx, py + s * vy]
    ]
  }

  const fmt = v => (Number.isInteger(v) ? String(v) : v.toFixed(2))
  const cFmt = fmt(cAbs)
  const [ax, ay] = foot(cs[0])
  const [bx, by] = foot(cs[1])

  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: width == height == 480, equal spans (−6..6) ⇒ ux == uy ≈ 36.7,
          so the circle is truly round and each line touches at exactly one point */}
      <Plot xRange={[-8.67, 8.67]} yRange={[-6, 6]} width={560} height={400} pad={20}>
        <Axes step={1} />

        {/* the circle x^2 + y^2 = R2 */}
        <Parametric
          xy={t => [r * Math.cos(t), r * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={220}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />

        {/* the two tangent lines y = x ± c */}
        {cs.map((c, i) => (
          <Polyline
            key={`ln${i}`}
            points={linePts(c)}
            opacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
        ))}

        {/* radius to each tangent point + right-angle marker (the mechanism) */}
        {cs.map((c, i) => {
          const [px, py] = foot(c)
          return (
            <React.Fragment key={`rad${i}`}>
              <Polyline
                points={[
                  [0, 0],
                  [px, py]
                ]}
                opacity={OPACITY.dim}
                dash="3 3"
              />
              <Polyline
                points={rightAngle(c)}
                opacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
            </React.Fragment>
          )
        })}

        {/* centre of the circle */}
        <Dot x={0} y={0} r={3} opacity={OPACITY.dim} />

        {/* the two tangent points (the answer) */}
        {cs.map((c, i) => {
          const [px, py] = foot(c)
          return <Dot key={`pt${i}`} x={px} y={py} r={5} color={C.accent} opacity={OPACITY.fg} />
        })}

        {/* radius label on the upper-left radius */}
        <Tex
          at={[-1.15, 1.05]}
          tex={`r = \\sqrt{${R2}} \\approx ${r.toFixed(2)}`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />

        {/* circle equation */}
        <Tex
          at={[-5.7, 5.4]}
          tex={`x^2 + y^2 = ${R2}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />

        {/* line equations, staggered to opposite corners */}
        <Tex
          at={[1.7, 5.7]}
          tex={`y = x + ${cFmt}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-1.7, -5.4]}
          tex={`y = x - ${cFmt}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />

        {/* tangent-point coordinates */}
        <Tex
          at={[ax - 0.3, ay + 0.55]}
          tex={`(${fmt(ax)},\\,${fmt(ay)})`}
          anchor="end"
          size={FONT_LABEL}
          color={C.accent}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[bx + 0.3, by - 0.35]}
          tex={`(${fmt(bx)},\\,${fmt(by)})`}
          anchor="start"
          size={FONT_LABEL}
          color={C.accent}
          opacity={OPACITY.fg}
        />
      </Plot>

      {/* readouts under the plot, per house style */}
      <div
        style={{
          marginTop: 12,
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          fontSize: FONT_LABEL,
          letterSpacing: LS_CONTROL,
          color: 'var(--text-primary)'
        }}
      >
        <KatexInline tex={`r=\\sqrt{${R2}}\\approx ${r.toFixed(2)}`} />
        <KatexInline tex={'\\dfrac{|c|}{\\sqrt{2}}=r'} />
        <KatexInline tex={`c=\\pm ${cFmt}`} />
      </div>
    </div>
  )
}
// When Both Equations Curve - circle x²+y²=13 meets hyperbola x²−y²=5.
// Two conics can cross at FOUR points. Every number below is derived live from
// the two right-hand sides (C1, C2); nothing is hard-coded. Add the equations →
// 2x² = C1+C2 → x = ±√((C1+C2)/2); subtract → 2y² = C1−C2 → y = ±√((C1−C2)/2).
export function CircleHyperbolaFourViz() {
  const C1 = 13 // circle:    x² + y² = C1
  const C2 = 5 //  hyperbola: x² − y² = C2
  const R = Math.sqrt(C1) //             radius = √13 ≈ 3.606
  const xSol = Math.sqrt((C1 + C2) / 2) // 3, solved from the system live
  const ySol = Math.sqrt((C1 - C2) / 2) // 2, solved from the system live
  const chkCircle = xSol * xSol + ySol * ySol // must equal C1
  const chkHyp = xSol * xSol - ySol * ySol //    must equal C2
  // Perimeter order so the closed connector walks a true rectangle (not a bowtie):
  // top-right → bottom-right → bottom-left → top-left. Dots/labels ignore order.
  const pts = [
    [xSol, ySol],
    [xSol, -ySol],
    [-xSol, -ySol],
    [-xSol, ySol]
  ]
  const fmt = n => (Number.isInteger(n) ? String(n) : n.toFixed(2))
  // Label anchor/offset per quadrant so the four coordinate labels never collide
  // (nearest pair ≈ 196 px apart at ux = uy = 40).
  const lab = ([px, py]) => ({
    at: [px + Math.sign(px) * 0.2, py + Math.sign(py) * 0.2],
    anchor: px > 0 ? 'start' : 'end',
    dy: py > 0 ? -6 : 14
  })
  return (
    <div style={{ width: '100%' }}>
      {/* isotropic: equal spans (−5..5) on a square 440×440 viewBox ⇒ ux == uy == 40,
          so the circle renders truly round and the four crossings sit exactly on it. */}
      <Plot xRange={[-7.2, 7.2]} yRange={[-5, 5]} width={560} height={400} pad={20}>
        <Axes step={1} />
        {/* Solution rectangle: its four corners ARE the intersections (±x, ±y). */}
        <Polyline points={pts} closed opacity={OPACITY.faint * 2} dash="3 4" />
        {/* Circle x² + y² = C1, parametrised honestly as (R cos t, R sin t). */}
        <Parametric
          xy={t => [R * Math.cos(t), R * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={240}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* Hyperbola x² − y² = C2 ⇒ x = ±√(C2 + y²), each branch sampled over y. */}
        <Parametric
          xy={u => [Math.sqrt(C2 + u * u), u]}
          t={[-4.6, 4.6]}
          samples={160}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={u => [-Math.sqrt(C2 + u * u), u]}
          t={[-4.6, 4.6]}
          samples={160}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        {pts.map((pt, i) => (
          <Dot key={i} x={pt[0]} y={pt[1]} r={6} opacity={OPACITY.fg} />
        ))}
        {pts.map((pt, i) => {
          const l = lab(pt)
          return (
            <Tex
              key={`l${i}`}
              at={l.at}
              tex={`(${fmt(pt[0])},\\,${fmt(pt[1])})`}
              anchor={l.anchor}
              dy={l.dy}
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
          )
        })}
        <Tex
          at={[0, 4.2]}
          tex={`x^2+y^2=${C1}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[4.4, 3.7]}
          tex={`x^2-y^2=${C2}`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
      {/* Readout row - numeric outputs live here, under the plot, never on the canvas. */}
      <div
        style={{
          marginTop: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'var(--text-primary)',
          fontSize: FONT_TEX
        }}
      >
        <KatexInline
          tex={`x^2+y^2=${C1}\\ (r=\\sqrt{${C1}}\\approx ${R.toFixed(3)}),\\quad x^2-y^2=${C2}`}
          style={{ opacity: OPACITY.fg }}
        />
        <KatexInline
          tex={`\\text{add}:\\ 2x^2=${C1 + C2}\\Rightarrow x=\\pm${fmt(xSol)}\\qquad\\text{subtract}:\\ 2y^2=${C1 - C2}\\Rightarrow y=\\pm${fmt(ySol)}`}
          style={{ opacity: OPACITY.accent }}
        />
        <KatexInline
          tex={`4\\ \\text{solutions } (\\pm${fmt(xSol)},\\,\\pm${fmt(ySol)}):\\ \\ ${fmt(xSol)}^2+${fmt(ySol)}^2=${fmt(chkCircle)},\\ \\ ${fmt(xSol)}^2-${fmt(ySol)}^2=${fmt(chkHyp)}`}
          style={{ opacity: OPACITY.dim }}
        />
      </div>
    </div>
  )
}

export function ForgettingCurveViz() {
  // Ebbinghaus Law of Forgetting: P = P0 / (t+1)^c, live from the formula.
  // Fixed axes (no auto-normalization). Custom axis lines because Axes takes a
  // single step and t in [0,12] vs P in [0,100] need different tick spacing.
  const P0 = 90
  const c = 0.2
  const P = t => P0 / Math.pow(t + 1, c)
  const T_MAX = 12
  const P_MAX = 100
  const xt = [0, 2, 4, 6, 8, 10, 12]
  const yt = [0, 20, 40, 60, 80, 100]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.3, 13]} yRange={[-14, 110]} width={560} height={360} pad={20}>
        <Polyline
          points={[
            [0, 0],
            [T_MAX, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, P_MAX]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -7]}
            tex={String(t)}
            anchor="middle"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(p => (
          <Tex
            key={`y${p}`}
            at={[-0.6, p]}
            tex={String(p)}
            anchor="end"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
          />
        ))}
        {/* P(t) sampled from the actual function */}
        <Polyline
          points={sampleFn(P, 0, T_MAX, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* the two evaluations the text gives, marked on the real curve */}
        <Dot x={2} y={P(2)} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[2.5, P(2) + 6]}
          tex={`(2,\\ ${P(2).toFixed(0)})`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Dot x={12} y={P(12)} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[11.6, P(12) + 8]}
          tex={`(12,\\ ${P(12).toFixed(0)})`}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex at={[12.6, -7]} tex={'t'} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[-0.6, 108]} tex={'P'} anchor="end" size={FONT_LABEL} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

export function ParetoCurveViz() {
  // Pareto wealth distribution: P = c / W^k, live from the formula. Two exponents
  // show that a larger k concentrates wealth more sharply (fewer people at every
  // threshold). Fixed axes; custom axis lines for the same reason as above.
  const c = 8000
  const P = (W, k) => c / Math.pow(W, k)
  const W_MIN = 2
  const W_MAX = 12
  const P_MAX = 2000
  const xt = [2, 4, 6, 8, 10, 12]
  const yt = [0, 500, 1000, 1500, 2000]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[1.1, 13]} yRange={[-280, 2200]} width={560} height={360} pad={20}>
        <Polyline
          points={[
            [W_MIN, 0],
            [W_MAX, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [W_MIN, 0],
            [W_MIN, P_MAX]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(w => (
          <Tex
            key={`x${w}`}
            at={[w, -140]}
            tex={String(w)}
            anchor="middle"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(p => (
          <Tex
            key={`y${p}`}
            at={[W_MIN - 0.2, p]}
            tex={String(p)}
            anchor="end"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
          />
        ))}
        {/* k = 2.1 (the model in the text) */}
        <Polyline
          points={sampleFn(w => P(w, 2.1), W_MIN, W_MAX, 200)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* k = 3 (sharper concentration) */}
        <Polyline
          points={sampleFn(w => P(w, 3), W_MIN, W_MAX, 200)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="4 3"
        />
        <Tex
          at={[4.3, P(4, 2.1) + 130]}
          tex={'k = 2.1'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[5.2, P(4, 3) + 90]}
          tex={'k = 3'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex at={[12.6, -140]} tex={'W'} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex
          at={[W_MIN - 0.2, 2160]}
          tex={'P'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function LogBaseComparisonViz() {
  // y = log10 x and y = ln x, sampled live. Both pass through (1,0); ln rises
  // faster (smaller base) and reaches height 1 at x = e, while log10 reaches it
  // only at x = 10. Fixed axes. Function comparison, so isotropy is not required.
  const log10 = x => Math.log(x) / Math.log(10)
  const ln = x => Math.log(x)
  const E = Math.E
  const X_MAX = 10
  const xt = [0, 2, 4, 6, 8, 10]
  const yt = [-2, -1, 0, 1, 2]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, 10.8]} yRange={[-2.6, 2.7]} width={560} height={380} pad={20}>
        <Polyline
          points={[
            [-1, 0],
            [10.8, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, -2.6],
            [0, 2.7]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -0.3]}
            tex={String(t)}
            anchor="middle"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(p => (
          <Tex
            key={`y${p}`}
            at={[-0.25, p]}
            tex={String(p)}
            anchor="end"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
          />
        ))}
        <Polyline
          points={sampleFn(ln, 0.05, X_MAX, 240).filter(p => p[1] >= -2.6)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(log10, 0.05, X_MAX, 240).filter(p => p[1] >= -2.6)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={1} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[1.2, -0.55]}
          tex={'(1,0)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Dot x={E} y={1} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[E + 0.2, 1.4]}
          tex={'(e,1)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Dot x={10} y={1} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[9.7, 1.45]}
          tex={'(10,1)'}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex at={[6.4, 2.2]} tex={'\\ln x'} anchor="start" size={FONT_TEX} opacity={OPACITY.fg} />
        <Tex
          at={[9.4, 0.55]}
          tex={'\\log_{10} x'}
          anchor="end"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

export function CommonLogTableViz() {
  // y = log10 x with the powers-of-ten table rows marked. Each tenfold step in x
  // raises the curve by exactly 1. Sampled live; points computed, not baked.
  const log10 = x => Math.log(x) / Math.log(10)
  const X_MAX = 11
  const pts = [
    [0.1, -1],
    [1, 0],
    [10, 1]
  ]
  const xt = [0, 2, 4, 6, 8, 10]
  const yt = [-2, -1, 0, 1]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, 11.6]} yRange={[-2.4, 1.5]} width={560} height={340} pad={20}>
        <Polyline
          points={[
            [-1, 0],
            [11.6, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, -2.4],
            [0, 1.5]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -0.2]}
            tex={String(t)}
            anchor="middle"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(p => (
          <Tex
            key={`y${p}`}
            at={[-0.25, p]}
            tex={String(p)}
            anchor="end"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
          />
        ))}
        <Polyline
          points={sampleFn(log10, 0.02, X_MAX, 240).filter(p => p[1] >= -2.4)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {pts.map(([x, y], i) => (
          <React.Fragment key={i}>
            <Dot x={x} y={y} r={5} opacity={OPACITY.fg} />
            <Tex
              at={[x + 0.3, y + 0.28]}
              tex={`(${x},\\,${y})`}
              anchor="start"
              size={FONT_SMALL}
              opacity={OPACITY.fg}
            />
          </React.Fragment>
        ))}
        <Tex
          at={[8.6, 0.5]}
          tex={'\\log_{10} x'}
          anchor="end"
          size={FONT_TEX}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function Log2GraphViz() {
  // y = log2 x sampled live, with the 8 table rows marked. y-axis is the vertical
  // asymptote the curve dives toward. Fixed axes.
  const log2 = x => Math.log(x) / Math.log(2)
  const pts = [
    [0.125, -3],
    [0.25, -2],
    [0.5, -1],
    [1, 0],
    [2, 1],
    [4, 2],
    [8, 3],
    [16, 4]
  ]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.6, 16.9]} yRange={[-3.7, 4.7]} width={560} height={400} pad={20}>
        <Axes step={2} />
        <Polyline
          points={[
            [0, -3.7],
            [0, 4.7]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(x => (x > 0.02 ? log2(x) : NaN), 0.02, 16.5, 320).filter(
            p => Number.isFinite(p[1]) && p[1] >= -3.7
          )}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {pts.map(([x, y], i) => (
          <Dot key={i} x={x} y={y} r={4} opacity={OPACITY.fg} />
        ))}
        <Dot x={1} y={0} r={6} opacity={OPACITY.fg} />
        <Tex
          at={[1.4, -0.55]}
          tex={'(1,0)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex at={[13, 3.9]} tex={'y=\\log_2 x'} anchor="end" size={FONT_TEX} opacity={OPACITY.fg} />
        <Tex
          at={[0.35, -3.35]}
          tex={'x=0\\ \\text{asymptote}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function LogBaseSteepnessViz() {
  // log2 x vs log10 x, both live. Same intercept (1,0) and y-axis asymptote; the
  // larger base (10) climbs more slowly, so log10 is the flatter curve. Fixed axes.
  const log2 = x => Math.log(x) / Math.log(2)
  const log10 = x => Math.log(x) / Math.log(10)
  const clip = p => Number.isFinite(p[1]) && p[1] >= -3.7
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.6, 16.9]} yRange={[-3.7, 4.7]} width={560} height={400} pad={20}>
        <Axes step={2} />
        <Polyline
          points={[
            [0, -3.7],
            [0, 4.7]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(x => (x > 0.02 ? log2(x) : NaN), 0.02, 16.5, 320).filter(clip)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(x => (x > 0.02 ? log10(x) : NaN), 0.02, 16.5, 320).filter(clip)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={1} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[1.4, -0.55]}
          tex={'(1,0)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex at={[8.5, 3.5]} tex={'\\log_2 x'} anchor="end" size={FONT_TEX} opacity={OPACITY.fg} />
        <Tex
          at={[14, 1.55]}
          tex={'\\log_{10} x'}
          anchor="end"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

export function LogReflectionsViz() {
  // f = log2 x and its two axis reflections: g = -log2 x (over the x-axis) and
  // h = log2(-x) (over the y-axis, domain x<0). Shared vertical asymptote x=0.
  const log2 = x => Math.log(x) / Math.log(2)
  const clip = p => Number.isFinite(p[1]) && Math.abs(p[1]) <= 4.6
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-16.9, 16.9]} yRange={[-4.7, 4.7]} width={560} height={400} pad={20}>
        <Axes step={4} />
        <Polyline
          points={[
            [0, -4.7],
            [0, 4.7]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(x => (x > 0.02 ? log2(x) : NaN), 0.02, 16.5, 300).filter(clip)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(x => (x > 0.02 ? -log2(x) : NaN), 0.02, 16.5, 300).filter(clip)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 3"
        />
        <Polyline
          points={sampleFn(x => (x < -0.02 ? log2(-x) : NaN), -16.5, -0.02, 300).filter(clip)}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex at={[13, 3.4]} tex={'\\log_2 x'} anchor="end" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex
          at={[13, -3.7]}
          tex={'-\\log_2 x'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-13, 3.4]}
          tex={'\\log_2(-x)'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function LogHorizontalShiftViz() {
  // Parent log10 x (asymptote x=0) beside log10(x-3) (asymptote x=3). A horizontal
  // shift drags the asymptote with the curve. Both sampled live; fixed axes.
  const log10 = x => Math.log(x) / Math.log(10)
  const clip = p => Number.isFinite(p[1]) && p[1] >= -2.2
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.6, 13.6]} yRange={[-2.3, 1.5]} width={560} height={340} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [0, -2.3],
            [0, 1.5]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={[
            [3, -2.3],
            [3, 1.5]
          ]}
          opacity={OPACITY.accent}
          dash="4 3"
        />
        <Polyline
          points={sampleFn(x => (x > 0.02 ? log10(x) : NaN), 0.02, 13, 320).filter(clip)}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(x => (x > 3.02 ? log10(x - 3) : NaN), 3.02, 13, 320).filter(clip)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[2.5, 0.95]}
          tex={'\\log_{10} x'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[11.5, 0.6]}
          tex={'\\log_{10}(x-3)'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[3.2, -2.05]}
          tex={'x=3'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

export function LogBoundedDomainViz() {
  // y = log3(25 - x^2). The argument 25-x^2 is positive only on (-5,5), so the
  // graph is an arch that dives to -infinity at x=+-5, where 25-x^2 -> 0. The two
  // vertical asymptotes tie the algebraic domain to the picture. Live sampling.
  const f = x => Math.log(25 - x * x) / Math.log(3)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-6.3, 6.3]} yRange={[-3.7, 3.7]} width={520} height={360} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-5, -3.7],
            [-5, 3.7]
          ]}
          opacity={OPACITY.accent}
          dash="4 3"
        />
        <Polyline
          points={[
            [5, -3.7],
            [5, 3.7]
          ]}
          opacity={OPACITY.accent}
          dash="4 3"
        />
        <Polyline
          points={sampleFn(x => (Math.abs(x) < 4.985 ? f(x) : NaN), -4.985, 4.985, 400).filter(
            p => Number.isFinite(p[1]) && p[1] >= -3.7
          )}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[0, 3.35]}
          tex={'y=\\log_3(25-x^2)'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-4.8, -3.4]}
          tex={'x=-5'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex at={[4.8, -3.4]} tex={'x=5'} anchor="end" size={FONT_TINY} opacity={OPACITY.accent} />
      </Plot>
    </div>
  )
}

export function ExpLineIntersectionViz() {
  // e^(3-2x) = 4 solved as a curve/line intersection. Crossing at
  // x = (3 - ln 4)/2 ≈ 0.807, computed live. Fixed axes.
  const f = x => Math.exp(3 - 2 * x)
  const xc = (3 - Math.log(4)) / 2
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.4, 2.7]} yRange={[-0.6, 10]} width={540} height={380} pad={20}>
        <Axes step={2} />
        <Polyline
          points={sampleFn(f, -0.4, 2.7, 300).filter(p => p[1] <= 10)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [-0.4, 4],
            [2.7, 4]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 3"
        />
        <Dot x={xc} y={4} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[xc + 0.15, 4.7]}
          tex={`x\\approx ${xc.toFixed(2)}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0.55, 8.4]}
          tex={'y=e^{3-2x}'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex at={[2.5, 4.5]} tex={'y=4'} anchor="end" size={FONT_LABEL} opacity={OPACITY.accent} />
      </Plot>
    </div>
  )
}

export function GraphOnlyRootsViz() {
  // y = x^2 - 2 ln(x+2). Domain x > -2 (asymptote there). The two roots can only be
  // read off the graph; both x-intercepts marked. Sampled live.
  const f = x => x * x - 2 * Math.log(x + 2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2.4, 3.4]} yRange={[-2.6, 8]} width={540} height={400} pad={20}>
        <Axes step={2} />
        <Polyline
          points={[
            [-2, -2.6],
            [-2, 8]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(x => (x > -1.985 ? f(x) : NaN), -1.985, 3.4, 360).filter(
            p => Number.isFinite(p[1]) && p[1] <= 8 && p[1] >= -2.6
          )}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [-2.4, 0],
            [3.4, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Dot x={-0.71} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[-0.65, -0.7]}
          tex={'x\\approx -0.71'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Dot x={1.6} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[1.65, 0.7]}
          tex={'x\\approx 1.60'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[2.9, 5.4]}
          tex={'y=x^2-2\\ln(x+2)'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex at={[-1.9, -2.3]} tex={'x=-2'} anchor="start" size={FONT_TINY} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

export function ExtraneousDomainViz() {
  // y = log10(x+2) + log10(x-1) - 1. Both logs require x > 1, so the curve exists
  // ONLY for x > 1 and crosses zero at x = 3. The algebraic candidate x = -4 lies
  // in the empty region: no curve there, so it is extraneous.
  const f = x => Math.log10(x + 2) + Math.log10(x - 1) - 1
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5.4, 7.4]} yRange={[-2.2, 1.6]} width={560} height={330} pad={20}>
        <Axes step={2} />
        <Polyline
          points={sampleFn(x => (x > 1.02 ? f(x) : NaN), 1.02, 7.2, 360).filter(
            p => Number.isFinite(p[1]) && p[1] >= -2.2
          )}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={3} y={0} r={5} opacity={OPACITY.fg} />
        <Tex at={[3.2, 0.35]} tex={'x=3'} anchor="start" size={FONT_SMALL} opacity={OPACITY.fg} />
        {/* the extraneous candidate: an open marker where there is no curve */}
        <Dot x={-4} y={0} r={5} fill={false} opacity={OPACITY.accent} />
        <Tex
          at={[-4, 0.55]}
          tex={'x=-4'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-4, -0.5]}
          tex={'\\text{(no curve: rejected)}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[6.9, 0.95]}
          tex={'x>1\\ \\text{only}'}
          anchor="end"
          size={10}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function ExpInequalityViz() {
  // e^x > 5. The increasing curve meets y = 5 at x = ln 5 ≈ 1.609; to the right of
  // that boundary e^x exceeds 5. Solution ray highlighted on the x-axis (open end,
  // strict inequality). Computed live.
  const f = x => Math.exp(x)
  const xb = Math.log(5)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.6, 3]} yRange={[-1.4, 12]} width={540} height={380} pad={20}>
        <Axes step={2} />
        <Polyline
          points={sampleFn(f, -0.6, 3, 300).filter(p => p[1] <= 12)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [-0.6, 5],
            [3, 5]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 3"
        />
        <Polyline
          points={[
            [xb, -1.4],
            [xb, 12]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        {/* solution ray x > ln5 on the axis, open endpoint */}
        <Polyline
          points={[
            [xb, 0],
            [3, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Dot x={xb} y={0} r={5} fill={false} opacity={OPACITY.fg} />
        <Tex
          at={[xb + 0.1, -0.85]}
          tex={`x>\\ln 5\\approx ${xb.toFixed(2)}`}
          anchor="start"
          size={10}
          opacity={OPACITY.fg}
        />
        <Tex at={[2.1, 10.4]} tex={'y=e^{x}'} anchor="end" size={FONT_TEX} opacity={OPACITY.fg} />
        <Tex at={[2.6, 5.5]} tex={'y=5'} anchor="end" size={FONT_LABEL} opacity={OPACITY.accent} />
      </Plot>
    </div>
  )
}

export function LightDecayViz() {
  // Beer-Lambert intensity vs depth: I = I0 e^{-k x}, I0 = 14, k = 0.025. Curved
  // (fixed-percentage-per-foot) decay, not linear. Worked value (20, 8.49) marked.
  // Custom axis lines because depth (0..60) and intensity (0..15) need different steps.
  const I0 = 14
  const k = 0.025
  const I = x => I0 * Math.exp(-k * x)
  const xt = [0, 10, 20, 30, 40, 50, 60]
  const yt = [0, 5, 10, 15]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7, 63]} yRange={[-2.4, 16]} width={560} height={340} pad={20}>
        <Polyline
          points={[
            [0, 0],
            [60, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, 15]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -1.2]}
            tex={String(t)}
            anchor="middle"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(v => (
          <Tex
            key={`y${v}`}
            at={[-2.5, v]}
            tex={String(v)}
            anchor="end"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
          />
        ))}
        <Polyline
          points={sampleFn(I, 0, 60, 240)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={20} y={I(20)} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[22, I(20) + 1.1]}
          tex={`(20,\\ ${I(20).toFixed(2)})`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[46, 6.6]}
          tex={'I=14e^{-0.025x}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex at={[62, -1.2]} tex={'x'} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[-2.5, 15.6]} tex={'I'} anchor="end" size={FONT_LABEL} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

export function LogScaleNumberLineViz() {
  // The same three weights on a linear axis (top) vs a log10 axis (bottom).
  // Linear: ant and elephant are crushed against 0; whale sits at the far right.
  // Log10: all three spread to readable positions. Positions from the real weights.
  const items = [
    { name: 'ant', w: 0.000003 },
    { name: 'elephant', w: 4000 },
    { name: 'whale', w: 170000 }
  ]
  const L_MAX = 170000
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-20000, 188000]} yRange={[-1.5, 1.5]} width={560} height={120} pad={16}>
        <Polyline
          points={[
            [0, 0],
            [L_MAX, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Tex at={[0, -0.75]} tex={'0'} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} />
        <Tex
          at={[L_MAX, -0.75]}
          tex={'170{,}000'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {items.map((it, i) => (
          <Dot key={i} x={it.w} y={0} r={5} opacity={OPACITY.fg} />
        ))}
        <Tex
          at={[9000, 0.75]}
          tex={'\\text{ant, elephant}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[L_MAX, 0.75]}
          tex={'\\text{whale}'}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-18000, 1.05]}
          tex={'\\text{linear}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Plot xRange={[-7.2, 7.2]} yRange={[-1.5, 1.5]} width={560} height={130} pad={16}>
        <Polyline
          points={[
            [-6, 0],
            [6, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[-6, -4, -2, 0, 2, 4, 6].map(t => (
          <Tex
            key={t}
            at={[t, -0.75]}
            tex={String(t)}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        {items.map((it, i) => {
          const x = Math.log10(it.w)
          return (
            <React.Fragment key={i}>
              <Dot x={x} y={0} r={5} opacity={OPACITY.fg} />
              <Tex
                at={[x, i === 1 ? -1.0 : 0.72]}
                tex={`\\text{${it.name}}`}
                anchor="middle"
                size={FONT_SMALL}
                opacity={OPACITY.fg}
              />
            </React.Fragment>
          )
        })}
        <Tex
          at={[-7, 1.05]}
          tex={'\\log_{10}\\ \\text{weight}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function HalfLifeDecayViz() {
  // m(t) = 300 * 2^(-t/140). Every 140 days the mass halves: 300->150->75->37.5,
  // drawn as a staircase of guide markers. Worked point (365, ~49) marked. Live.
  const m0 = 300
  const h = 140
  const m = t => m0 * Math.pow(2, -t / h)
  const T_MAX = 560
  const stairs = [0, 140, 280, 420]
  const xt = [0, 140, 280, 420, 560]
  const yt = [0, 75, 150, 225, 300]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-75, 600]} yRange={[-35, 330]} width={560} height={360} pad={20}>
        <Polyline
          points={[
            [0, 0],
            [T_MAX, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, 300]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -18]}
            tex={String(t)}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(v => (
          <Tex
            key={`y${v}`}
            at={[-22, v]}
            tex={String(v)}
            anchor="end"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        {stairs.map((t, i) => {
          const y = m(t)
          return (
            <React.Fragment key={i}>
              <Polyline
                points={[
                  [t, 0],
                  [t, y]
                ]}
                opacity={OPACITY.faint * 2}
                dash="2 3"
              />
              <Polyline
                points={[
                  [0, y],
                  [t, y]
                ]}
                opacity={OPACITY.faint * 2}
                dash="2 3"
              />
              <Dot x={t} y={y} r={4} opacity={OPACITY.fg} />
            </React.Fragment>
          )
        })}
        <Polyline
          points={sampleFn(m, 0, T_MAX, 300)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={365} y={m(365)} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[380, m(365) + 20]}
          tex={`(365,\\ ${m(365).toFixed(0)})`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[300, 258]}
          tex={'m=300\\cdot 2^{-t/140}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex at={[592, -18]} tex={'t'} anchor="end" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[-22, 320]} tex={'m'} anchor="end" size={FONT_LABEL} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

export function CoolingCurveViz() {
  // Newton's law of cooling: T(t) = 70 + 130 e^(-0.04855 t). The curve flattens
  // toward the ambient temperature 70 F (dashed asymptote) but never crosses it.
  // Data (0,200),(10,150); reaches 100 at t~30. Live sampling.
  const Ts = 70
  const T = t => Ts + 130 * Math.exp(-0.04855 * t)
  const xt = [0, 10, 20, 30, 40, 50, 60]
  const yt = [70, 110, 150, 190]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-9, 64]} yRange={[54, 214]} width={560} height={360} pad={20}>
        <Polyline
          points={[
            [0, 54],
            [0, 210]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [-9, Ts],
            [64, Ts]
          ]}
          opacity={OPACITY.accent}
          dash="4 3"
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, 62]}
            tex={String(t)}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(v => (
          <Tex
            key={`y${v}`}
            at={[-3, v]}
            tex={String(v)}
            anchor="end"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        <Tex at={[62, 75]} tex={'T_s=70'} anchor="end" size={FONT_SMALL} opacity={OPACITY.accent} />
        <Polyline
          points={sampleFn(T, 0, 60, 300)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={0} y={200} r={5} opacity={OPACITY.fg} />
        <Tex at={[3, 202]} tex={'(0,200)'} anchor="start" size={FONT_SMALL} opacity={OPACITY.fg} />
        <Dot x={10} y={150} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[13, 154]}
          tex={'(10,150)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Dot x={30} y={T(30)} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[33, T(30) + 9]}
          tex={'(30,\\ 100)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[59, 152]}
          tex={'T=70+130e^{-0.04855t}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

export function PopulationRatesViz() {
  // Two exponential models from a shared 6.1 billion: n(t)=6.1 e^(r t) for
  // r = 0.014 (1.4%) and r = 0.010 (1.0%). A 0.4-point rate gap compounds to a
  // >2 billion difference by t=50. Live sampling.
  const n = (t, r) => 6.1 * Math.exp(r * t)
  const xt = [0, 10, 20, 30, 40, 50]
  const yt = [0, 3, 6, 9, 12]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-6, 56]} yRange={[-1.6, 13.6]} width={560} height={360} pad={20}>
        <Polyline
          points={[
            [0, 0],
            [50, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, 13]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -0.85]}
            tex={String(t)}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(v => (
          <Tex
            key={`y${v}`}
            at={[-1.4, v]}
            tex={String(v)}
            anchor="end"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        <Polyline
          points={sampleFn(t => n(t, 0.014), 0, 50, 240)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(t => n(t, 0.01), 0, 50, 240)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 3"
        />
        <Polyline
          points={[
            [50, n(50, 0.01)],
            [50, n(50, 0.014)]
          ]}
          opacity={OPACITY.faint * 2}
          strokeWidth={STROKE_SECONDARY}
        />
        <Dot x={50} y={n(50, 0.014)} r={4} opacity={OPACITY.fg} />
        <Dot x={50} y={n(50, 0.01)} r={4} opacity={OPACITY.accent} />
        <Tex at={[43, 11.8]} tex={'1.4\\%'} anchor="end" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex
          at={[46, 8.7]}
          tex={'1.0\\%'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[49.5, 11.3]}
          tex={'>2\\ \\text{bn}'}
          anchor="end"
          size={9}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function BacteriaDoublingViz() {
  // n(t) = 1000 * 2^(t/3). The colony doubles every 3 hours: 1000->2000->4000...
  // (dots at each doubling). Worked point (15, 32000) marked. Live sampling.
  const n = t => 1000 * Math.pow(2, t / 3)
  const T_MAX = 18
  const doubles = [0, 3, 6, 9, 12, 15, 18]
  const xt = [0, 3, 6, 9, 12, 15, 18]
  const yt = [0, 16000, 32000, 48000, 64000]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2.4, 19.6]} yRange={[-7000, 70000]} width={560} height={360} pad={20}>
        <Polyline
          points={[
            [0, 0],
            [T_MAX, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, 64000]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -3600]}
            tex={String(t)}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(v => (
          <Tex
            key={`y${v}`}
            at={[-0.7, v]}
            tex={v >= 1000 ? `${v / 1000}k` : String(v)}
            anchor="end"
            size={9}
            opacity={OPACITY.dim}
          />
        ))}
        {doubles.map((t, i) => (
          <Dot key={i} x={t} y={n(t)} r={4} opacity={OPACITY.fg} />
        ))}
        <Polyline
          points={sampleFn(n, 0, T_MAX, 240)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={15} y={32000} r={6} opacity={OPACITY.accent} />
        <Tex
          at={[14.6, 34800]}
          tex={'(15,\\ 32000)'}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[4, 52000]}
          tex={'n=1000\\cdot 2^{t/3}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex at={[19.4, -3600]} tex={'t'} anchor="end" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[-0.7, 68000]} tex={'n'} anchor="end" size={FONT_LABEL} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

export function APvsGPDiscreteViz() {
  // Discrete terms: AP a_n = 2n+1 (3,5,7,...) falls on a straight line (additive);
  // GP a_n = 3*2^(n-1) (3,6,12,...) bends upward (multiplicative). Dots, not curves.
  const AP = n => 2 * n + 1
  const GP = n => 3 * Math.pow(2, n - 1)
  const N = [1, 2, 3, 4, 5, 6]
  const xt = [1, 2, 3, 4, 5, 6]
  const yt = [0, 20, 40, 60, 80, 100]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0.2, 6.7]} yRange={[-13, 104]} width={540} height={380} pad={20}>
        <Polyline
          points={[
            [0.2, 0],
            [6.7, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [1, 0],
            [1, 100]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -6.5]}
            tex={String(t)}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(v => (
          <Tex
            key={`y${v}`}
            at={[0.82, v]}
            tex={String(v)}
            anchor="end"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        <Polyline
          points={N.map(n => [n, AP(n)])}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {N.map(n => (
          <Dot key={`ap${n}`} x={n} y={AP(n)} r={4} opacity={OPACITY.accent} />
        ))}
        <Polyline points={N.map(n => [n, GP(n)])} opacity={OPACITY.faint * 2} dash="4 3" />
        {N.map(n => (
          <Dot key={`gp${n}`} x={n} y={GP(n)} r={4} opacity={OPACITY.fg} />
        ))}
        <Tex
          at={[6.1, 21]}
          tex={'\\text{AP: }3,5,7,\\ldots'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[4.3, 82]}
          tex={'\\text{GP: }3,6,12,\\ldots'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex at={[6.6, -6.5]} tex={'n'} anchor="end" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[1.25, 97]} tex={'a_n'} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

export function PartialSumsZenoViz() {
  // Partial sums of 1 + 1/10 + 1/100 + ... : S_k = (10/9)(1 - 10^{-k}) = 1, 1.1,
  // 1.11, 1.111, ... The gaps shrink tenfold each step and pile up at 10/9.
  const S = k => (10 / 9) * (1 - Math.pow(10, -k))
  const L = 10 / 9
  const ks = [1, 2, 3, 4, 5, 6]
  const xt = [1.0, 1.05, 1.1, 1.15]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0.9, 1.16]} yRange={[-1, 1]} width={560} height={150} pad={18}>
        <Polyline
          points={[
            [0.9, 0],
            [1.16, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -0.55]}
            tex={t.toFixed(2)}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        <Polyline
          points={[
            [L, -0.75],
            [L, 0.72]
          ]}
          opacity={OPACITY.accent}
          dash="3 3"
        />
        <Tex
          at={[L, 0.9]}
          tex={'\\dfrac{10}{9}=1.\\overline{1}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        {ks.map((k, i) => (
          <Dot key={i} x={S(k)} y={0} r={4} opacity={OPACITY.fg} />
        ))}
        <Tex at={[S(1), 0.5]} tex={'S_1=1'} anchor="middle" size={FONT_TINY} opacity={OPACITY.fg} />
        <Tex at={[S(2), -0.5]} tex={'1.1'} anchor="middle" size={FONT_TINY} opacity={OPACITY.fg} />
      </Plot>
    </div>
  )
}

export function FibonacciRatioViz() {
  // Successive Fibonacci ratios a_{n+1}/a_n oscillate above and below, narrowing
  // toward the golden ratio phi = (1+sqrt5)/2 without ever equalling it.
  const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
  const phi = (1 + Math.sqrt(5)) / 2
  const ratios = []
  for (let k = 0; k < fib.length - 1; k++) ratios.push([k, fib[k + 1] / fib[k]])
  const xt = [0, 2, 4, 6, 8, 10]
  const yt = [1.0, 1.4, 1.8, 2.0]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.4, 11.5]} yRange={[0.82, 2.12]} width={540} height={330} pad={20}>
        <Polyline
          points={[
            [-1.4, 1],
            [11.5, 1]
          ]}
          opacity={OPACITY.faint * 2}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, 0.9]}
            tex={String(t)}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(v => (
          <Tex
            key={`y${v}`}
            at={[-1.05, v]}
            tex={v.toFixed(1)}
            anchor="end"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        <Polyline
          points={[
            [-1.4, phi],
            [11.5, phi]
          ]}
          opacity={OPACITY.accent}
          dash="4 3"
        />
        <Tex
          at={[11.3, phi + 0.1]}
          tex={'\\varphi\\approx 1.618'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Polyline points={ratios} opacity={OPACITY.faint * 2} dash="2 3" />
        {ratios.map(([k, r], i) => (
          <Dot key={i} x={k} y={r} r={4} opacity={OPACITY.fg} />
        ))}
        <Tex at={[10.8, 0.98]} tex={'n'} anchor="end" size={FONT_LABEL} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

export function PermutationTreeViz() {
  // Branching decision tree for the set {1,2,3}: 3 first-choices, then 2, then 1,
  // giving 3*2*1 = 6 ordered arrangements at the leaves. The narrowing branch
  // factor IS the multiplication principle. Fixed layout (a small drawn tree).
  const ROOT = 2.5
  const yR = 3
  const y1 = 2
  const y2 = 1
  const yL = 0
  const d1 = [
    { x: 0.5, label: '1' },
    { x: 2.5, label: '2' },
    { x: 4.5, label: '3' }
  ]
  const d2 = [
    { x: 0, label: '2', parent: 0.5 },
    { x: 1, label: '3', parent: 0.5 },
    { x: 2, label: '1', parent: 2.5 },
    { x: 3, label: '3', parent: 2.5 },
    { x: 4, label: '1', parent: 4.5 },
    { x: 5, label: '2', parent: 4.5 }
  ]
  const leaves = [
    { x: 0, perm: '123' },
    { x: 1, perm: '132' },
    { x: 2, perm: '213' },
    { x: 3, perm: '231' },
    { x: 4, perm: '312' },
    { x: 5, perm: '321' }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.8, 5.8]} yRange={[-1.1, 3.6]} width={560} height={380} pad={20}>
        {d1.map((n, i) => (
          <Polyline
            key={`b0${i}`}
            points={[
              [ROOT, yR],
              [n.x, y1]
            ]}
            opacity={OPACITY.dim}
            strokeWidth={STROKE_SECONDARY}
          />
        ))}
        {d2.map((n, i) => (
          <Polyline
            key={`b1${i}`}
            points={[
              [n.parent, y1],
              [n.x, y2]
            ]}
            opacity={OPACITY.dim}
            strokeWidth={STROKE_SECONDARY}
          />
        ))}
        {leaves.map((n, i) => (
          <Polyline
            key={`b2${i}`}
            points={[
              [n.x, y2],
              [n.x, yL]
            ]}
            opacity={OPACITY.faint * 2}
            strokeWidth={STROKE_SECONDARY}
            dash="3 3"
          />
        ))}
        <Dot x={ROOT} y={yR} r={4} opacity={OPACITY.fg} />
        <Tex
          at={[ROOT, yR + 0.3]}
          tex={'\\text{start}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        {d1.map((n, i) => (
          <React.Fragment key={`n0${i}`}>
            <Dot x={n.x} y={y1} r={5} opacity={OPACITY.fg} />
            <Tex
              at={[n.x, y1 + 0.28]}
              tex={n.label}
              anchor="middle"
              size={FONT_TEX}
              opacity={OPACITY.fg}
            />
          </React.Fragment>
        ))}
        {d2.map((n, i) => (
          <React.Fragment key={`n1${i}`}>
            <Dot x={n.x} y={y2} r={4} opacity={OPACITY.fg} />
            <Tex
              at={[n.x + 0.2, y2 + 0.24]}
              tex={n.label}
              anchor="start"
              size={FONT_LABEL}
              opacity={OPACITY.dim}
            />
          </React.Fragment>
        ))}
        {leaves.map((n, i) => (
          <React.Fragment key={`lf${i}`}>
            <Dot x={n.x} y={yL} r={4} opacity={OPACITY.accent} />
            <Tex
              at={[n.x, yL - 0.38]}
              tex={n.perm}
              anchor="middle"
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
          </React.Fragment>
        ))}
        <Tex
          at={[ROOT, -0.85]}
          tex={'3\\times 2\\times 1 = 6'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

export function TwoSetVennViz() {
  // Hand-rolled monochrome two-set Venn. The shaded region IS the set: clipPath
  // gives the intersection (lens), masks punch out the difference and symmetric
  // difference. Selecting an operation shades exactly the membership condition.
  const C = useVizColors()
  const [op, setOp] = React.useState('cap')
  const W = 520
  const H = 300
  const cxA = 195
  const cxB = 325
  const cy = 152
  const r = 108
  const shadeOp = 0.3
  const OPS = [
    { key: 'cap', label: 'A ∩ B', tex: 'A \\cap B', desc: 'x \\in A \\ \\text{and} \\ x \\in B' },
    { key: 'cup', label: 'A ∪ B', tex: 'A \\cup B', desc: 'x \\in A \\ \\text{or} \\ x \\in B' },
    { key: 'diff', label: 'A \\ B', tex: 'A \\setminus B', desc: 'x \\in A, \\ x \\notin B' },
    { key: 'sym', label: 'A △ B', tex: 'A \\triangle B', desc: '\\text{in exactly one of } A, B' }
  ]
  const cur = OPS.find(o => o.key === op)
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }} aria-hidden="true">
        <defs>
          <clipPath id="tsvClipB">
            <circle cx={cxB} cy={cy} r={r} />
          </clipPath>
          <mask id="tsvMaskNotB">
            <rect x="0" y="0" width={W} height={H} fill="white" />
            <circle cx={cxB} cy={cy} r={r} fill="black" />
          </mask>
          <mask id="tsvMaskNotA">
            <rect x="0" y="0" width={W} height={H} fill="white" />
            <circle cx={cxA} cy={cy} r={r} fill="black" />
          </mask>
        </defs>

        {op === 'cup' && (
          <>
            <circle cx={cxA} cy={cy} r={r} fill={C.fg} fillOpacity={shadeOp} />
            <circle cx={cxB} cy={cy} r={r} fill={C.fg} fillOpacity={shadeOp} />
          </>
        )}
        {op === 'cap' && (
          <circle
            cx={cxA}
            cy={cy}
            r={r}
            fill={C.fg}
            fillOpacity={shadeOp}
            clipPath="url(#tsvClipB)"
          />
        )}
        {op === 'diff' && (
          <circle
            cx={cxA}
            cy={cy}
            r={r}
            fill={C.fg}
            fillOpacity={shadeOp}
            mask="url(#tsvMaskNotB)"
          />
        )}
        {op === 'sym' && (
          <>
            <circle
              cx={cxA}
              cy={cy}
              r={r}
              fill={C.fg}
              fillOpacity={shadeOp}
              mask="url(#tsvMaskNotB)"
            />
            <circle
              cx={cxB}
              cy={cy}
              r={r}
              fill={C.fg}
              fillOpacity={shadeOp}
              mask="url(#tsvMaskNotA)"
            />
          </>
        )}

        <circle cx={cxA} cy={cy} r={r} fill="none" stroke={C.dim} strokeWidth="1.5" />
        <circle cx={cxB} cy={cy} r={r} fill="none" stroke={C.dim} strokeWidth="1.5" />
        <text x={cxA - 62} y={cy - 74} fill={C.fg} fontSize="22" textAnchor="middle">
          A
        </text>
        <text x={cxB + 62} y={cy - 74} fill={C.fg} fontSize="22" textAnchor="middle">
          B
        </text>
      </svg>

      <div
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          marginTop: 12,
          flexWrap: 'wrap'
        }}
      >
        {OPS.map(o => {
          const active = o.key === op
          return (
            <button
              key={o.key}
              type="button"
              onClick={() => setOp(o.key)}
              style={{
                padding: '6px 13px',
                border: `1px solid ${active ? C.fg : C.faint}`,
                background: active ? C.fg : 'transparent',
                color: active ? '#000' : C.dim,
                fontSize: FONT_LABEL,
                letterSpacing: '0.1em',
                cursor: 'pointer',
                borderRadius: 0
              }}
            >
              {o.label}
            </button>
          )
        })}
      </div>

      <div
        style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          alignItems: 'baseline',
          marginTop: 12,
          color: C.fg
        }}
      >
        <KatexInline tex={cur.tex} />
        <span style={{ color: C.dim, fontSize: FONT_SMALL, letterSpacing: LS_CONTROL }}>
          <KatexInline tex={cur.desc} />
        </span>
      </div>
    </div>
  )
}

export function ExpVsPolyViz() {
  // y = 2^x and y = x^2. They cross at x=2 and x=4; for x >= 5 the exponential
  // stays permanently above the polynomial, which is why 5 is the right base case.
  const exp = x => Math.pow(2, x)
  const sq = x => x * x
  const xt = [0, 1, 2, 3, 4, 5, 6]
  const yt = [0, 10, 20, 30, 40, 50]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.6, 6.7]} yRange={[-6, 52]} width={560} height={380} pad={20}>
        <Polyline
          points={[
            [0, 0],
            [6, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, 50]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -3]}
            tex={String(t)}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(v => (
          <Tex
            key={`y${v}`}
            at={[-0.25, v]}
            tex={String(v)}
            anchor="end"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        <Polyline
          points={[
            [5, -6],
            [5, 52]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(sq, 0, 6.6, 240).filter(p => p[1] <= 52)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={sampleFn(exp, -0.6, 6.6, 260).filter(p => p[1] <= 52)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={2} y={4} r={4} opacity={OPACITY.fg} />
        <Dot x={4} y={16} r={4} opacity={OPACITY.fg} />
        <Tex at={[2.35, 2]} tex={'(2,4)'} anchor="start" size={FONT_TINY} opacity={OPACITY.dim} />
        <Tex at={[4.35, 15]} tex={'(4,16)'} anchor="start" size={FONT_TINY} opacity={OPACITY.dim} />
        <Tex at={[4.45, 33]} tex={'2^x'} anchor="end" size={FONT_TEX} opacity={OPACITY.fg} />
        <Tex at={[6.4, 41]} tex={'x^2'} anchor="end" size={FONT_TEX} opacity={OPACITY.accent} />
        <Tex at={[5.15, 47]} tex={'2^x > x^2'} anchor="start" size={10} opacity={OPACITY.dim} />
        <Tex at={[5, -3]} tex={'n=5'} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

export function BernoulliViz() {
  // Bernoulli's inequality (1+x)^n >= 1+nx, shown for n=3: the curve lies on or
  // above its tangent line 1+nx, touching at x=0. Live sampling over x > -1.
  const n = 3
  const curve = x => Math.pow(1 + x, n)
  const line = x => 1 + n * x
  const xt = [-1, -0.5, 0, 0.5, 1, 1.5]
  const yt = [-2, 0, 2, 4, 6, 8]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.35, 1.75]} yRange={[-3, 8.6]} width={520} height={380} pad={20}>
        <Polyline
          points={[
            [-1.35, 0],
            [1.75, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, -3],
            [0, 8.6]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {xt.map(t => (
          <Tex
            key={`x${t}`}
            at={[t, -0.6]}
            tex={String(t)}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        {yt.map(v => (
          <Tex
            key={`y${v}`}
            at={[-0.12, v]}
            tex={String(v)}
            anchor="end"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
        ))}
        <Polyline
          points={sampleFn(line, -1.35, 1.75, 120).filter(p => p[1] >= -3 && p[1] <= 8.6)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 3"
        />
        <Polyline
          points={sampleFn(curve, -1, 1.75, 240).filter(p => p[1] <= 8.6)}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={0} y={1} r={5} opacity={OPACITY.fg} />
        <Tex at={[0.16, 0.5]} tex={'(0,1)'} anchor="start" size={FONT_TINY} opacity={OPACITY.dim} />
        <Tex at={[1.2, 7.6]} tex={'(1+x)^3'} anchor="end" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex at={[1.6, 4.9]} tex={'1+3x'} anchor="end" size={FONT_LABEL} opacity={OPACITY.accent} />
      </Plot>
    </div>
  )
}

export function TrominoTilingViz() {
  // A 4x4 board with one square removed tiles into exactly five L-trominoes. The
  // central tromino straddles three quadrants; each 2x2 quadrant then reduces to
  // its own deficient board. Shading groups the five tiles; missing cell hatched.
  const C = useVizColors()
  const cell = 60
  const pad = 22
  const N = 4
  const S = N * cell + 2 * pad
  const px = c => pad + c * cell
  const py = r => pad + (N - 1 - r) * cell
  const tiles = [
    {
      cells: [
        [1, 1],
        [1, 2],
        [2, 1]
      ],
      op: 0.34
    },
    {
      cells: [
        [0, 2],
        [0, 3],
        [1, 3]
      ],
      op: 0.14
    },
    {
      cells: [
        [2, 2],
        [3, 2],
        [2, 3]
      ],
      op: 0.24
    },
    {
      cells: [
        [0, 0],
        [1, 0],
        [0, 1]
      ],
      op: 0.24
    },
    {
      cells: [
        [2, 0],
        [3, 0],
        [3, 1]
      ],
      op: 0.14
    }
  ]
  const mc = [3, 3]
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg
          viewBox={`0 0 ${S} ${S}`}
          width="100%"
          style={{ maxWidth: 340, display: 'block' }}
          aria-hidden="true"
        >
          {tiles.map((t, i) =>
            t.cells.map(([c, r], j) => (
              <rect
                key={`t${i}-${j}`}
                x={px(c)}
                y={py(r)}
                width={cell}
                height={cell}
                fill={C.fg}
                fillOpacity={t.op}
              />
            ))
          )}
          <line
            x1={px(mc[0])}
            y1={py(mc[1])}
            x2={px(mc[0]) + cell}
            y2={py(mc[1]) + cell}
            stroke={C.dim}
            strokeWidth="1"
          />
          <line
            x1={px(mc[0]) + cell}
            y1={py(mc[1])}
            x2={px(mc[0])}
            y2={py(mc[1]) + cell}
            stroke={C.dim}
            strokeWidth="1"
          />
          {Array.from({ length: N + 1 }, (_, i) => (
            <React.Fragment key={`g${i}`}>
              <line
                x1={pad + i * cell}
                y1={pad}
                x2={pad + i * cell}
                y2={pad + N * cell}
                stroke={C.faint}
                strokeWidth="1"
              />
              <line
                x1={pad}
                y1={pad + i * cell}
                x2={pad + N * cell}
                y2={pad + i * cell}
                stroke={C.faint}
                strokeWidth="1"
              />
            </React.Fragment>
          ))}
          <line
            x1={pad + 2 * cell}
            y1={pad}
            x2={pad + 2 * cell}
            y2={pad + N * cell}
            stroke={C.dim}
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <line
            x1={pad}
            y1={pad + 2 * cell}
            x2={pad + N * cell}
            y2={pad + 2 * cell}
            stroke={C.dim}
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
        </svg>
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: 10,
          color: C.dim,
          fontSize: FONT_SMALL,
          letterSpacing: LS_CONTROL
        }}
      >
        4×4 board minus one square = five L-trominoes; the central tile spans three quadrants
      </div>
    </div>
  )
}

export function ArgandPointViz() {
  // The Argand plane: a complex number is a point AND a position vector. M = -3+2i
  // is plotted with its vector OM; the unit circle |z|=1 carries the four worked
  // points +-1/2 +- (sqrt3/2) i. Isotropic (ux = uy = 60) so the circle is round.
  const s3 = Math.sqrt(3) / 2
  const pts4 = [
    [0.5, s3],
    [-0.5, s3],
    [-0.5, -s3],
    [0.5, -s3]
  ]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4, 4]} yRange={[-3, 3]} width={520} height={400} pad={20}>
        <Axes step={1} />
        <Parametric
          xy={t => [Math.cos(t), Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={160}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {pts4.map((p, i) => (
          <Dot key={i} x={p[0]} y={p[1]} r={4} opacity={OPACITY.accent} />
        ))}
        <Tex at={[1.2, 0.8]} tex={'|z|=1'} anchor="start" size={FONT_SMALL} opacity={OPACITY.dim} />
        <Arrow from={[0, 0]} to={[-3, 2]} opacity={OPACITY.fg} strokeWidth={STROKE_EMPHASIS} />
        <Dot x={-3} y={2} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[-2.85, 2.55]}
          tex={'M=-3+2i'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-1.35, 1.35]}
          tex={'|z|=\\sqrt{13}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[3.8, 0.32]}
          tex={'\\mathrm{Re}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0.28, 2.8]}
          tex={'\\mathrm{Im}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function ComplexAddViz() {
  // Parallelogram law: adding z1 = 3+5i and z2 = 6+i gives the diagonal
  // z1+z2 = 9+6i. The dashed sides complete the parallelogram. Isotropic (40/unit).
  const z1 = [3, 5]
  const z2 = [6, 1]
  const sum = [9, 6]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, 10]} yRange={[-1, 8]} width={480} height={400} pad={20}>
        <Axes step={2} />
        <Polyline points={[z1, sum]} opacity={OPACITY.faint * 2} dash="4 3" />
        <Polyline points={[z2, sum]} opacity={OPACITY.faint * 2} dash="4 3" />
        <Arrow from={[0, 0]} to={z1} opacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} />
        <Arrow from={[0, 0]} to={z2} opacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} />
        <Arrow from={[0, 0]} to={sum} opacity={OPACITY.fg} strokeWidth={STROKE_EMPHASIS} />
        <Dot x={z1[0]} y={z1[1]} r={4} opacity={OPACITY.fg} />
        <Dot x={z2[0]} y={z2[1]} r={4} opacity={OPACITY.fg} />
        <Dot x={sum[0]} y={sum[1]} r={5} opacity={OPACITY.fg} />
        <Tex at={[2.5, 5.3]} tex={'z_1=3+5i'} anchor="end" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex
          at={[6.3, 0.55]}
          tex={'z_2=6+i'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[9.2, 6.35]}
          tex={'z_1+z_2=9+6i'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[9.8, 0.32]}
          tex={'\\mathrm{Re}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0.3, 7.7]}
          tex={'\\mathrm{Im}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function ModulusTriangleViz() {
  // |z| is the Euclidean distance: for z = 4+3i the legs 4 and 3 give the
  // hypotenuse |z| = sqrt(4^2 + 3^2) = 5. Right angle at (4,0). Isotropic (50/unit).
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, 6]} yRange={[-1, 5]} width={390} height={340} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [0, 0],
            [4, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [4, 0],
            [4, 3]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Arrow from={[0, 0]} to={[4, 3]} opacity={OPACITY.fg} strokeWidth={STROKE_EMPHASIS} />
        <Polyline
          points={[
            [3.7, 0],
            [3.7, 0.3],
            [4, 0.3]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Dot x={4} y={3} r={5} opacity={OPACITY.fg} />
        <Tex at={[4.2, 3.15]} tex={'4+3i'} anchor="start" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex at={[2, -0.42]} tex={'4'} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[4.25, 1.5]} tex={'3'} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[1.65, 1.95]} tex={'|z|=5'} anchor="end" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex
          at={[5.8, 0.32]}
          tex={'\\mathrm{Re}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0.3, 4.7]}
          tex={'\\mathrm{Im}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

// Shared: sampled arc of `n` points on a circle of radius `rad`, from angle a0 to a1.
const arcPts = (rad, a0, a1, n = 28) =>
  Array.from({ length: n + 1 }, (_, i) => {
    const t = a0 + ((a1 - a0) * i) / n
    return [rad * Math.cos(t), rad * Math.sin(t)]
  })

export function UnitCircleAngleViz() {
  // The angle picks the point: theta sweeps counterclockwise from (1,0) to the
  // landing point (cos theta, sin theta); drop-lines show cos is the horizontal
  // coordinate, sin the vertical. Slider on theta. Isotropic unit circle.
  const [th, setTh] = React.useState(0.9)
  const cx = Math.cos(th)
  const sy = Math.sin(th)
  const deg = Math.round((th * 180) / Math.PI)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2.02, 2.02]} yRange={[-1.4, 1.4]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Parametric
          xy={t => [Math.cos(t), Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={160}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={arcPts(0.28, 0, th)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [cx, 0],
            [cx, sy]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={[
            [0, sy],
            [cx, sy]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Arrow from={[0, 0]} to={[cx, sy]} opacity={OPACITY.fg} strokeWidth={STROKE_EMPHASIS} />
        <Dot x={cx} y={sy} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[cx, -0.16]}
          tex={'\\cos\\theta'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.12, sy]}
          tex={'\\sin\\theta'}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0.34, 0.13]}
          tex={'\\theta'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
      <div
        style={{
          display: 'flex',
          gap: 18,
          justifyContent: 'center',
          marginTop: 8,
          fontSize: FONT_SMALL,
          letterSpacing: LS_CONTROL,
          color: 'var(--text-primary)'
        }}
      >
        <KatexInline tex={`\\theta=${deg}^\\circ`} />
        <KatexInline tex={`\\cos\\theta=${cx.toFixed(2)}`} />
        <KatexInline tex={`\\sin\\theta=${sy.toFixed(2)}`} />
      </div>
      <Slider
        label="$\theta$"
        value={th}
        min={0}
        max={2 * Math.PI}
        step={0.01}
        onChange={setTh}
        format={v => `${Math.round((v * 180) / Math.PI)}°`}
      />
    </div>
  )
}

export function ArgumentQuadrantViz() {
  // z = -3+3i sits in Q2: r = 3*sqrt2, arg = 3*pi/4 (135 deg). Raw arctan(3/-3) = -45
  // points into Q4 (dashed) - the wrong quadrant; the true argument adds pi. Static.
  const z = [-3, 3]
  const r = Math.hypot(z[0], z[1])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7.2, 7.2]} yRange={[-5, 5]} width={560} height={400} pad={20}>
        <Axes step={1} />
        {/* raw arctan direction: -45 deg into Q4 (wrong) */}
        <Polyline
          points={[
            [0, 0],
            [3.2, -3.2]
          ]}
          opacity={OPACITY.faint * 2}
          dash="4 3"
        />
        <Tex
          at={[3.3, -3.5]}
          tex={'\\arctan\\ \\text{alone}\\ (\\text{Q4})'}
          anchor="end"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* argument arc from +x axis to 135 deg */}
        <Polyline
          points={arcPts(1.1, 0, (3 * Math.PI) / 4)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
        />
        <Arrow from={[0, 0]} to={z} opacity={OPACITY.fg} strokeWidth={STROKE_EMPHASIS} />
        <Dot x={z[0]} y={z[1]} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[-3, 3.4]}
          tex={'z=-3+3i'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-1.5, 1.55]}
          tex={'\\theta=\\tfrac{3\\pi}{4}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-2, 0.9]}
          tex={`r=3\\sqrt{2}\\approx ${r.toFixed(2)}`}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function ComplexMultiplyViz() {
  // Multiply moduli, add arguments: z1 = 1.5 at 30 deg, z2 = 1.4 at 45 deg, so
  // z1*z2 = 2.1 at 75 deg. The product's angle is the sum; its length the product.
  const p = (r, d) => [r * Math.cos((d * Math.PI) / 180), r * Math.sin((d * Math.PI) / 180)]
  const z1 = p(1.5, 30)
  const z2 = p(1.4, 45)
  const zp = p(2.1, 75)
  const rad = d => (d * Math.PI) / 180
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.6, 4.0]} yRange={[-0.6, 2.6]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={arcPts(0.5, 0, rad(30))}
          opacity={OPACITY.faint * 2}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={arcPts(0.75, 0, rad(75))}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
        />
        <Arrow from={[0, 0]} to={z1} opacity={OPACITY.dim} strokeWidth={STROKE_PRIMARY} />
        <Arrow from={[0, 0]} to={z2} opacity={OPACITY.dim} strokeWidth={STROKE_PRIMARY} />
        <Arrow from={[0, 0]} to={zp} opacity={OPACITY.fg} strokeWidth={STROKE_EMPHASIS} />
        <Dot x={zp[0]} y={zp[1]} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[z1[0] + 0.1, z1[1] - 0.15]}
          tex={'z_1=1.5\\angle 30^\\circ'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[z2[0] + 0.1, z2[1] + 0.12]}
          tex={'z_2=1.4\\angle 45^\\circ'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[zp[0] - 0.1, zp[1] + 0.15]}
          tex={'z_1 z_2=2.1\\angle 75^\\circ'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

export function PowerSpiralViz() {
  // De Moivre: z^n rotates the angle to n*theta and scales the modulus to r^n. For
  // z = 1.2 at 35 deg, successive powers spiral outward, each stepped by 35 deg.
  const r0 = 1.2
  const d0 = 35
  const pow = n => {
    const rr = Math.pow(r0, n)
    const t = (n * d0 * Math.PI) / 180
    return [rr * Math.cos(t), rr * Math.sin(t)]
  }
  const ns = [1, 2, 3, 4, 5]
  const pts = ns.map(pow)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3.2, 1.8]} yRange={[-1, 3]} width={560} height={456} pad={20}>
        <Axes step={1} />
        <Polyline points={[[0, 0], ...pts]} opacity={OPACITY.faint * 2} dash="3 3" />
        {pts.map((pt, i) => (
          <Dot key={i} x={pt[0]} y={pt[1]} r={4} opacity={OPACITY.fg} />
        ))}
        <Tex
          at={[pts[0][0] + 0.12, pts[0][1] - 0.05]}
          tex={'z'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[pts[1][0] + 0.12, pts[1][1]]}
          tex={'z^2'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[pts[2][0] - 0.05, pts[2][1] + 0.18]}
          tex={'z^3'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[pts[3][0], pts[3][1] + 0.2]}
          tex={'z^4'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[pts[4][0], pts[4][1] - 0.28]}
          tex={'z^5'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-3, 2.7]}
          tex={'z=1.2\\angle 35^\\circ'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function NthRootsPolygonViz() {
  // The n-th roots of a number of modulus 8 sit on a circle of radius 8^(1/n),
  // equally spaced by 2*pi/n, forming a regular n-gon. Slider on n (e.g. n=3 gives
  // the cube roots of 8: an equilateral triangle of radius 2). Isotropic.
  const [n, setN] = React.useState(3)
  const R = Math.pow(8, 1 / n)
  const verts = Array.from({ length: n }, (_, k) => {
    const t = (2 * Math.PI * k) / n
    return [R * Math.cos(t), R * Math.sin(t)]
  })
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4.6, 4.6]} yRange={[-3.2, 3.2]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Parametric
          xy={t => [R * Math.cos(t), R * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={160}
          opacity={OPACITY.faint * 2}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline points={verts} closed opacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} />
        {verts.map((v, k) => (
          <Dot key={k} x={v[0]} y={v[1]} r={5} opacity={OPACITY.fg} />
        ))}
        <Tex
          at={[-3, 2.9]}
          tex={`n=${n},\\ R=8^{1/${n}}\\approx ${R.toFixed(2)}`}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="$n$"
        value={n}
        min={2}
        max={7}
        step={1}
        onChange={v => setN(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}

export function RootsOfUnityViz() {
  // The n-th roots of unity are vertices of a regular n-gon on the unit circle,
  // drawn as vectors from the origin. By symmetry the balanced vectors cancel:
  // their sum is 0. Slider on n. Isotropic.
  const [n, setN] = React.useState(5)
  const verts = Array.from({ length: n }, (_, k) => {
    const t = (2 * Math.PI * k) / n
    return [Math.cos(t), Math.sin(t)]
  })
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2.02, 2.02]} yRange={[-1.4, 1.4]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Parametric
          xy={t => [Math.cos(t), Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={160}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline points={verts} closed opacity={OPACITY.faint * 2} dash="4 3" />
        {verts.map((v, k) => (
          <React.Fragment key={k}>
            <Arrow from={[0, 0]} to={v} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
            <Dot x={v[0]} y={v[1]} r={4} opacity={OPACITY.fg} />
          </React.Fragment>
        ))}
        <Tex
          at={[-1.3, 1.25]}
          tex={`n=${n}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[1.3, 1.25]}
          tex={'\\textstyle\\sum=0'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider
        label="$n$"
        value={n}
        min={2}
        max={8}
        step={1}
        onChange={v => setN(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}

export function PolarTriangleViz() {
  // Where cos and sin come from: the radius vector r at angle theta has horizontal
  // leg x = r cos theta and vertical leg y = r sin theta, so z = r(cos t + i sin t).
  // Static. r = 4, theta = 40 deg. Isotropic.
  const r = 4
  const d = 40
  const x = r * Math.cos((d * Math.PI) / 180)
  const y = r * Math.sin((d * Math.PI) / 180)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.8, 4.6]} yRange={[-0.8, 3.6]} width={440} height={360} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [0, 0],
            [x, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [x, 0],
            [x, y]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Arrow from={[0, 0]} to={[x, y]} opacity={OPACITY.fg} strokeWidth={STROKE_EMPHASIS} />
        <Polyline
          points={arcPts(0.55, 0, (d * Math.PI) / 180)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [x - 0.28, 0],
            [x - 0.28, 0.28],
            [x, 0.28]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Dot x={x} y={y} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[x + 0.15, y + 0.05]}
          tex={'z'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[x / 2, -0.32]}
          tex={'r\\cos\\theta'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[x + 0.15, y / 2]}
          tex={'r\\sin\\theta'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex at={[1.55, 0.75]} tex={'r'} anchor="end" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex
          at={[0.72, 0.2]}
          tex={'\\theta'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

export function ReflectionMapViz() {
  // The matrix [[1,0],[0,-1]] reflects across the x-axis: y = A x sends (3,2) to
  // (3,-2) and (-4,5) to (-4,-5). The x-axis is the mirror; each image is A x.
  const pts = [
    [3, 2],
    [-4, 5]
  ]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-8.7, 8.7]} yRange={[-6, 6]} width={560} height={400} pad={20}>
        <Axes step={2} />
        {pts.map(([x, y], i) => (
          <React.Fragment key={i}>
            <Polyline
              points={[
                [x, y],
                [x, -y]
              ]}
              opacity={OPACITY.faint * 2}
              dash="3 3"
            />
            <Dot x={x} y={y} r={5} opacity={OPACITY.fg} />
            <Dot x={x} y={-y} r={5} opacity={OPACITY.accent} />
            <Tex
              at={[x + 0.35, y]}
              tex={`(${x},${y})`}
              anchor="start"
              size={FONT_SMALL}
              opacity={OPACITY.fg}
            />
            <Tex
              at={[x + 0.35, -y]}
              tex={`(${x},${-y})`}
              anchor="start"
              size={FONT_SMALL}
              opacity={OPACITY.accent}
            />
          </React.Fragment>
        ))}
        <Tex
          at={[8.5, 0.45]}
          tex={'\\text{mirror}=x\\text{-axis}'}
          anchor="end"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

export function TriangleAreaViz() {
  // The determinant computes area: the triangle (1,1),(4,1),(2,5) has area 6, and
  // the parallelogram on its two edge vectors has area |det| = 12 = 2 x 6.
  const tri = [
    [1, 1],
    [4, 1],
    [2, 5]
  ]
  const par = [
    [1, 1],
    [4, 1],
    [5, 5],
    [2, 5]
  ]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2.55, 7.55]} yRange={[-1, 6]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline points={par} closed opacity={OPACITY.faint * 2} dash="4 3" />
        <Polyline
          points={tri}
          closed
          fillOpacity={0.2}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {tri.map(([x, y], i) => (
          <Dot key={i} x={x} y={y} r={4} opacity={OPACITY.fg} />
        ))}
        <Tex
          at={[2.3, 2]}
          tex={'\\text{area}=6'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[4.5, 4.5]}
          tex={'|\\det|=12'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex at={[1, 0.55]} tex={'(1,1)'} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} />
        <Tex
          at={[4.25, 0.55]}
          tex={'(4,1)'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex at={[2, 5.35]} tex={'(2,5)'} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

export function UnitSquareTransformViz() {
  // A 2x2 matrix maps the unit square to a parallelogram whose area is |det A|.
  // A = [[2,1],[1,3]], det = 5: the unit square (area 1) is scaled to area 5.
  const A = [
    [2, 1],
    [1, 3]
  ]
  const ap = ([x, y]) => [A[0][0] * x + A[0][1] * y, A[1][0] * x + A[1][1] * y]
  const sq = [
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1]
  ]
  const img = sq.map(ap)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.6, 5.6]} yRange={[-0.5, 4.5]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sq}
          closed
          fillOpacity={0.16}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={img}
          closed
          fillOpacity={0.2}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Arrow from={[0, 0]} to={img[1]} opacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} />
        <Arrow from={[0, 0]} to={img[3]} opacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} />
        <Tex at={[0.5, 0.42]} tex={'1'} anchor="middle" size={FONT_SMALL} opacity={OPACITY.dim} />
        <Tex
          at={[2.1, 2.3]}
          tex={'|\\det A|=5'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[2.15, 0.85]}
          tex={'(2,1)'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[1.15, 3.1]}
          tex={'(1,3)'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

export function EigenvectorViz() {
  // A = [[1,4],[2,3]] has eigenvalue 5 with eigenvector (1,1): A(1,1) = (5,5) lies
  // on the same line, scaled by 5. A generic v = (1,0) maps to (1,2), a rotated
  // direction. Eigenvectors keep their direction; other vectors turn.
  const A = [
    [1, 4],
    [2, 3]
  ]
  const ap = ([x, y]) => [A[0][0] * x + A[0][1] * y, A[1][0] * x + A[1][1] * y]
  const e = [1, 1]
  const Ae = ap(e)
  const g = [1, 0]
  const Ag = ap(g)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2.55, 7.55]} yRange={[-1, 6]} width={560} height={400} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-1, -1],
            [6, 6]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Arrow from={[0, 0]} to={Ae} opacity={OPACITY.fg} strokeWidth={STROKE_EMPHASIS} />
        <Arrow from={[0, 0]} to={e} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Arrow from={[0, 0]} to={g} opacity={OPACITY.dim} strokeWidth={STROKE_PRIMARY} />
        <Arrow from={[0, 0]} to={Ag} opacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} />
        <Tex at={[1.2, 0.78]} tex={'x'} anchor="start" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex at={[5.05, 5.1]} tex={'Ax=5x'} anchor="end" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex at={[1.2, -0.05]} tex={'v'} anchor="start" size={FONT_SMALL} opacity={OPACITY.dim} />
        <Tex
          at={[1.15, 2.15]}
          tex={'Av\\ (\\text{turned})'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}
