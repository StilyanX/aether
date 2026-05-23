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
  DragHandle,
  KatexInline,
  useAnimationTime,
  OPACITY
} from './primitives'
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

// ─── M01 FOUNDATIONS ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

// M01 Foundations
// 01.1 Number line with negatives drag marker, show mirror across 0
export function NumberLineNegativesViz() {
  const [x, setX] = React.useState(3)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7.5, 7.5]} yRange={[-2.2, 2.2]} width={520} height={200} pad={20}>
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
              size={10}
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
          size={13}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-x, 1.15]}
          tex={`${(-x).toFixed(2)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.accent}
        />
        <Dot x={0} y={0} r={3} opacity={OPACITY.fg} />
        <DragHandle
          x={x}
          y={0}
          onChange={nx => setX(Math.max(0.05, Math.min(6.5, nx)))}
          constrain={nx => [Math.max(0.05, Math.min(6.5, nx)), 0]}
        />
      </Plot>
    </div>
  )
}

// 01.2 Binary place value click bits
export function BinaryPlaceValueViz() {
  const [bits, setBits] = React.useState([1, 0, 1, 1])
  const powers = [8, 4, 2, 1]
  const total = bits.reduce((a, b, i) => a + b * powers[i], 0)
  const toggle = i => setBits(b => b.map((v, j) => (j === i ? 1 - v : v)))
  const cellStyle = bit => ({
    flex: 1,
    padding: '14px 0',
    textAlign: 'center',
    cursor: 'pointer',
    border: `1px solid rgba(240,240,250,${bit ? 0.7 : 0.15})`,
    background: bit ? 'rgba(240,240,250,0.06)' : 'transparent',
    fontFamily: "'D-DIN', ui-monospace, monospace"
  })
  return (
    <div
      style={{ width: '100%', padding: '12px 0', fontFamily: "'D-DIN', ui-monospace, monospace" }}
    >
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 16 }}>
        {bits.map((bit, i) => (
          <div key={i} onClick={() => toggle(i)} style={{ ...cellStyle(bit), width: 76 }}>
            <div
              style={{ fontSize: 11, letterSpacing: '0.18em', color: 'rgba(240,240,250,0.5)' }}
            >{`2^${3 - i}`}</div>
            <div
              style={{
                fontSize: 36,
                color: bit ? 'rgba(240,240,250,1)' : 'rgba(240,240,250,0.25)',
                margin: '4px 0 2px'
              }}
            >
              {bit}
            </div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: '0.18em',
                color: bit ? 'rgba(240,240,250,1)' : 'rgba(240,240,250,0.2)'
              }}
            >{`= ${bit ? powers[i] : 0}`}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: 14,
          letterSpacing: '0.12em',
          color: 'rgba(240,240,250,1)',
          padding: '10px 0',
          borderTop: '1px solid rgba(240,240,250,0.15)'
        }}
      >
        <span style={{ opacity: 0.5 }}>{bits.join('')}</span>
        <span style={{ opacity: 0.3, margin: '0 8px' }}>=</span>
        <span style={{ opacity: 1, fontSize: 18, fontWeight: 600 }}>{total}</span>
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
          fontSize: 9,
          letterSpacing: '0.2em',
          color: 'rgba(240,240,250,0.35)',
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
      <Plot xRange={[-5, 5]} yRange={[-3.2, 3.2]} width={520} height={260} pad={20}>
        {dots.map(([x, y], i) => (
          <Dot key={i} x={x} y={y} r={4.5} opacity={OPACITY.fg} />
        ))}
        <Tex
          at={[0, 2.7]}
          tex={`${rows} \\times ${cols} \\;=\\; ${cols} \\times ${rows} \\;=\\; ${product}`}
          anchor="middle"
          size={14}
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
      <Plot xRange={[-1.5, 8.5]} yRange={[-1.6, 4.5]} width={520} height={260} pad={20}>
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
          strokeWidth={1.5}
        />
        {/* split line */}
        <Polyline
          points={[
            [b, 0],
            [b, a]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
        />
        <Tex
          at={[b / 2, a / 2]}
          tex={`a\\!\\cdot\\!b = ${(a * b).toFixed(0)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[b + c / 2, a / 2]}
          tex={`a\\!\\cdot\\!c = ${(a * c).toFixed(0)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[b / 2, -0.55]}
          tex={`b\\!=\\!${b.toFixed(1)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[b + c / 2, -0.55]}
          tex={`c\\!=\\!${c.toFixed(1)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.8, a / 2]}
          tex={`a\\!=\\!${a}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[total / 2, 4.0]}
          tex={`a(b+c) = ab + ac = ${(a * total).toFixed(0)}`}
          anchor="middle"
          size={13}
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
      <Plot xRange={[-5, 5]} yRange={[-2.2, 2.2]} width={520} height={220} pad={20}>
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
              size={11}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        <Dot x={Math.SQRT2} y={0} r={4.5} opacity={OPACITY.fg} />
        <Tex
          at={[Math.SQRT2, 1.0]}
          tex={'\\sqrt{2}'}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Dot x={Math.PI} y={0} r={4.5} opacity={OPACITY.fg} />
        <Tex at={[Math.PI, 1.0]} tex={'\\pi'} anchor="middle" size={13} opacity={OPACITY.fg} />
        <Dot x={1 / 3} y={0} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[1 / 3, 1.55]}
          tex={'\\tfrac{1}{3}'}
          anchor="middle"
          size={12}
          opacity={OPACITY.accent}
        />
        <Dot x={-0.75} y={0} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[-0.75, 1.55]}
          tex={'-\\tfrac{3}{4}'}
          anchor="middle"
          size={12}
          opacity={OPACITY.accent}
        />
        <Dot x={-Math.E} y={0} r={4.5} opacity={OPACITY.fg} />
        <Tex at={[-Math.E, 1.0]} tex={'-e'} anchor="middle" size={13} opacity={OPACITY.fg} />
      </Plot>
    </div>
  )
}

// 01.6 PEMDAS pure layout
export function PemdasViz() {
  const levels = [
    { text: 'PARENTHESES', op: OPACITY.fg, glyph: '( )' },
    { text: 'EXPONENTS', op: OPACITY.fg, glyph: 'a^b' },
    { text: 'MULTIPLY · DIVIDE', op: OPACITY.accent, glyph: '× ÷' },
    { text: 'ADD · SUBTRACT', op: OPACITY.accent, glyph: '+ −' }
  ]
  return (
    <div style={{ width: '100%', padding: '8px 0' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          fontFamily: "'D-DIN', ui-monospace, monospace"
        }}
      >
        {levels.map((lv, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              padding: '12px 16px',
              border: '1px solid rgba(240,240,250,0.15)',
              opacity: lv.op,
              color: 'rgba(240,240,250,1)'
            }}
          >
            <span style={{ fontSize: 11, letterSpacing: '0.18em' }}>{`0${i + 1}`}</span>
            <span style={{ fontSize: 12, letterSpacing: '0.18em' }}>{lv.text}</span>
            <span style={{ fontSize: 14, fontStyle: 'italic', opacity: 0.7 }}>{lv.glyph}</span>
          </div>
        ))}
        <div
          style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            color: 'rgba(240,240,250,0.5)',
            textAlign: 'center',
            marginTop: 4
          }}
        >
          TOP BINDS TIGHTEST · TIES BREAK LEFT TO RIGHT
        </div>
      </div>
    </div>
  )
}

// 01.7 Exponent laws typeset reference
export function ExponentLawsViz() {
  const laws = [
    { name: 'PRODUCT', tex: 'a^m \\cdot a^n = a^{m+n}' },
    { name: 'POWER OF POWER', tex: '(a^m)^n = a^{mn}' },
    { name: 'POWER OF PRODUCT', tex: '(ab)^n = a^n b^n' },
    { name: 'QUOTIENT', tex: 'a^m / a^n = a^{m-n}' },
    { name: 'NEGATIVE', tex: 'a^{-n} = 1 / a^{n}' },
    { name: 'FRACTIONAL', tex: 'a^{1/n} = \\sqrt[n]{a}' }
  ]
  return (
    <div style={{ width: '100%', padding: '12px 0' }}>
      <Plot xRange={[0, 10]} yRange={[0, laws.length]} width={520} height={240} pad={8}>
        {laws.map((lv, i) => (
          <React.Fragment key={i}>
            <Tex
              at={[0.4, laws.length - i - 0.55]}
              tex={`\\text{${lv.name.replace(/ /g, '\\,')}}`}
              anchor="start"
              size={10}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[9.6, laws.length - i - 0.55]}
              tex={lv.tex}
              anchor="end"
              size={14}
              opacity={OPACITY.fg}
            />
          </React.Fragment>
        ))}
      </Plot>
    </div>
  )
}

// 01.8 Square of a sum drag a and b
export function SquareOfSumGeomViz() {
  const [a, setA] = React.useState(3)
  const [b, setB] = React.useState(2)
  const total = a + b
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.8, 7.5]} yRange={[-1.2, 7.5]} width={520} height={340} pad={20}>
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
          strokeWidth={1.5}
        />
        <Tex at={[a / 2, a / 2]} tex={`a^2`} anchor="middle" size={14} opacity={OPACITY.fg} />
        <Tex
          at={[a + b / 2, a + b / 2]}
          tex={`b^2`}
          anchor="middle"
          size={14}
          opacity={OPACITY.fg}
        />
        <Tex at={[a / 2, a + b / 2]} tex={'ab'} anchor="middle" size={13} opacity={OPACITY.fg} />
        <Tex at={[a + b / 2, a / 2]} tex={'ab'} anchor="middle" size={13} opacity={OPACITY.fg} />
        <Tex
          at={[a / 2, -0.55]}
          tex={`a\\!=\\!${a.toFixed(1)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[a + b / 2, -0.55]}
          tex={`b\\!=\\!${b.toFixed(1)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[total / 2, total + 0.55]}
          tex={`(a+b)^2 = a^2 + 2ab + b^2 = ${(total * total).toFixed(2)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={a}
          y={-0.2}
          onChange={nx => setA(Math.max(0.3, Math.min(5, nx)))}
          constrain={nx => [Math.max(0.3, Math.min(5, nx)), -0.2]}
        />
        <DragHandle
          x={total}
          y={-0.2}
          onChange={nx => setB(Math.max(0.3, Math.min(5, nx - a)))}
          constrain={nx => [Math.max(a + 0.3, Math.min(a + 5, nx)), -0.2]}
        />
      </Plot>
    </div>
  )
}

// 01.9 Difference of squares drag a and b
export function DiffOfSquaresGeomViz() {
  const [a, setA] = React.useState(5)
  const [b, setB] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.7, 14]} yRange={[-1.4, 6.5]} width={520} height={300} pad={20}>
        {/* outer a² faint outline */}
        <Polyline
          points={[
            [0, 0],
            [a, 0],
            [a, a],
            [0, a]
          ]}
          closed
          opacity={OPACITY.faint * 2.5}
          dash="3 3"
        />
        {/* removed b² square (top-right corner) */}
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
        {/* L-shape (a² − b²) */}
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
          strokeWidth={1.5}
        />
        {/* arrow */}
        <Tex at={[a + 0.5, a / 2]} tex={'\\to'} anchor="middle" size={18} opacity={OPACITY.dim} />
        {/* rectangle (a+b) × (a−b) */}
        <Polyline
          points={[
            [a + 1.4, 0],
            [a + 1.4 + (a + b), 0],
            [a + 1.4 + (a + b), a - b],
            [a + 1.4, a - b]
          ]}
          closed
          opacity={OPACITY.accent}
          fillOpacity={0.18}
          strokeWidth={1.5}
        />
        <Tex
          at={[a / 2, a / 2 - 0.4]}
          tex={`a^2 - b^2`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[a + 1.4 + (a + b) / 2, (a - b) / 2]}
          tex={`(a+b)(a-b)`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[a / 2, -0.7]}
          tex={`a\\!=\\!${a.toFixed(1)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[a - b / 2, a - b - 0.4]}
          tex={`b\\!=\\!${b.toFixed(1)}`}
          anchor="middle"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[a + 1.4 + (a + b) / 2, a - b + 0.55]}
          tex={`= ${((a - b) * (a + b)).toFixed(2)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={a}
          y={-0.4}
          onChange={nx => setA(Math.max(b + 0.4, Math.min(7, nx)))}
          constrain={nx => [Math.max(b + 0.4, Math.min(7, nx)), -0.4]}
        />
        <DragHandle
          x={a - b}
          y={-0.4}
          onChange={nx => setB(Math.max(0.2, Math.min(a - 0.2, a - nx)))}
          constrain={nx => [Math.max(0.2, Math.min(a - 0.2, nx)), -0.4]}
        />
      </Plot>
    </div>
  )
}

// 01.10 Pascal's triangle hover to highlight row
export function PascalTriangleViz() {
  const [hover, setHover] = React.useState(-1)
  const rows = [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
    [1, 6, 15, 20, 15, 6, 1],
    [1, 7, 21, 35, 35, 21, 7, 1]
  ]
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
                size={13}
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

// ─── M02 LINEAR EQUATIONS ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

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
      <Plot xRange={[-7, 7]} yRange={[-5, 5]} width={520} height={330} pad={20}>
        <Axes step={1} showGrid={false} />
        <Polyline points={extend(p1a, p1b, 7)} opacity={OPACITY.fg} strokeWidth={1.5} />
        <Polyline points={extend(p2a, p2b, 7)} opacity={OPACITY.accent} strokeWidth={1.5} />
        {Number.isFinite(ix) && Math.abs(ix) < 8 && Math.abs(iy) < 6 && (
          <>
            <Dot x={ix} y={iy} r={6} opacity={OPACITY.fg} />
            <Tex
              at={[ix + 0.3, iy + 0.4]}
              tex={`(${ix.toFixed(2)},\\,${iy.toFixed(2)})`}
              anchor="start"
              size={12}
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
            size={12}
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
      <Plot xRange={[-2, 5]} yRange={[-1.5, 7]} width={520} height={340} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x - 3 * x + 2, -2, 5, 200)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Dot x={1} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={2} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={1.5} y={-0.25} r={4} opacity={OPACITY.accent} />
        <Tex at={[1, -0.7]} tex={'x_1=1'} anchor="middle" size={11} opacity={OPACITY.fg} />
        <Tex at={[2, -0.7]} tex={'x_2=2'} anchor="middle" size={11} opacity={OPACITY.fg} />
        <Tex at={[1.5, -0.7]} tex={''} anchor="middle" size={10} opacity={OPACITY.dim} />
        <Tex
          at={[2.5, -0.9]}
          tex={'\\text{vertex}\\;(1.5, -0.25)'}
          anchor="start"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[3.5, 4.5]}
          tex={'y = x^2 - 3x + 2'}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// ─── M03 QUADRATIC EQUATIONS ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

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
      <Plot xRange={[-4, 6]} yRange={[-5, 7]} width={520} height={340} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => a * x * x + b * x + c, -4, 6, 200)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[roots[1], -0.8]}
          tex={`r_1 = ${roots[1]}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[vx + 0.3, vy - 0.5]}
          tex={`(${vx},\\,${vy})`}
          anchor="start"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[3.8, 5.5]}
          tex={'y = x^2 - 2x - 3'}
          anchor="middle"
          size={13}
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
      <Plot xRange={[-5, 7]} yRange={[-3, 6]} width={520} height={300} pad={20}>
        <Axes step={1} showGrid={false} />
        {/* D > 0: y = x² − 3x + 1, roots (3±√5)/2 */}
        <Polyline
          points={sampleFn(x => x * x - 3 * x + 1, -2, 5, 200)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
          strokeWidth={1.5}
        />
        <Dot x={2} y={0} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[5.7, 1.1]}
          tex={'D = 0: \\text{double root}'}
          anchor="end"
          size={11}
          opacity={OPACITY.accent}
        />
        {/* D < 0: y = x² − x + 2 */}
        <Polyline
          points={sampleFn(x => x * x - x + 2, -2, 3, 200)}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        <Tex
          at={[5.7, -0.2]}
          tex={'D < 0: \\text{no real roots}'}
          anchor="end"
          size={11}
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
      <Plot xRange={[-4, 4]} yRange={[-3, 5]} width={520} height={300} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x + x + c, -4, 4, 200)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
          size={12}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[2.4, 3.5]}
          tex={`D = 1 - 4c = ${D.toFixed(2)}`}
          anchor="middle"
          size={11}
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
          size={11}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider
        label="c"
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
      <Plot xRange={[-6, 6]} yRange={[-6, 6]} width={520} height={300} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => aSafe * x * x + b * x + c, -6, 6, 200).filter(
            p => Math.abs(p[1]) < 20
          )}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
        <Tex
          at={[5, 5]}
          tex={`a=${aSafe.toFixed(2)}`}
          anchor="end"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex at={[5, 4.2]} tex={`b=${b.toFixed(2)}`} anchor="end" size={11} opacity={OPACITY.fg} />
        <Tex at={[5, 3.4]} tex={`c=${c.toFixed(2)}`} anchor="end" size={11} opacity={OPACITY.fg} />
        <Tex
          at={[5, 2.5]}
          tex={`D=${D.toFixed(2)}`}
          anchor="end"
          size={11}
          opacity={D > 0 ? OPACITY.fg : OPACITY.dim}
        />
      </Plot>
      <Slider label="a" value={a} min={-2} max={2} step={0.05} onChange={setA} />
      <Slider label="b" value={b} min={-4} max={4} step={0.05} onChange={setB} />
      <Slider label="c" value={c} min={-4} max={4} step={0.05} onChange={setC} />
    </div>
  )
}

// 03.5 Quadratic inequality (x−1)(x−2) sign chart
export function NumberLineInequalityViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3, 6]} yRange={[-2, 2]} width={520} height={180} pad={20}>
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
              size={10}
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
          strokeWidth={3.5}
        />
        <Polyline
          points={[
            [2, 0],
            [6, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={3.5}
        />
        <Polyline
          points={[
            [1, 0],
            [2, 0]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={3.5}
        />
        <Dot x={1} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={2} y={0} r={5} opacity={OPACITY.fg} />
        <Tex at={[-1, 0.7]} tex={'+'} anchor="middle" size={16} opacity={OPACITY.fg} />
        <Tex at={[1.5, 0.7]} tex={'-'} anchor="middle" size={16} opacity={OPACITY.accent} />
        <Tex at={[4, 0.7]} tex={'+'} anchor="middle" size={16} opacity={OPACITY.fg} />
        <Tex
          at={[1.5, 1.4]}
          tex={'(x-1)(x-2) < 0'}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

// 03.6 Powers of i animated rotation by i
export function PowersOfIViz() {
  const [k, setK] = React.useState(0) // counts steps 0,1,2,3,...
  React.useEffect(() => {
    const id = setInterval(() => setK(v => v + 1), 1200)
    return () => clearInterval(id)
  }, [])
  // We tween smoothly via animation time
  const t = useAnimationTime(true)
  // Cycle 0 → 1 → 2 → 3 → 0 each ~1.2s
  const cycT = (t / 1.2) % 4
  const stageI = Math.floor(cycT)
  const frac = cycT - stageI
  const ease = 0.5 - 0.5 * Math.cos(Math.PI * frac)
  const ang = ((stageI + ease) * Math.PI) / 2
  const px = Math.cos(ang),
    py = Math.sin(ang)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.6, 1.6]} yRange={[-1.6, 1.6]} width={520} height={320} pad={20}>
        <Axes step={0.5} showGrid={false} />
        <Parametric
          xy={t => [Math.cos(t), Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={120}
          opacity={OPACITY.dim}
          strokeWidth={1}
        />
        {/* axis-cardinal labels */}
        <Dot x={1} y={0} r={3} opacity={OPACITY.dim} />{' '}
        <Tex at={[1.18, 0]} tex={'1'} anchor="start" size={12} opacity={OPACITY.dim} />
        <Dot x={0} y={1} r={3} opacity={OPACITY.dim} />{' '}
        <Tex at={[0.12, 1.12]} tex={'i'} anchor="start" size={12} opacity={OPACITY.dim} />
        <Dot x={-1} y={0} r={3} opacity={OPACITY.dim} />{' '}
        <Tex at={[-1.18, 0]} tex={'-1'} anchor="end" size={12} opacity={OPACITY.dim} />
        <Dot x={0} y={-1} r={3} opacity={OPACITY.dim} />{' '}
        <Tex at={[0.12, -1.0]} tex={'-i'} anchor="start" size={12} opacity={OPACITY.dim} />
        {/* moving arrow */}
        <Arrow from={[0, 0]} to={[px, py]} opacity={OPACITY.fg} head={9} strokeWidth={2} />
        <Dot x={px} y={py} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[0, -1.42]}
          tex={`i^{${k}} \\to i^{${k + 1}}`}
          anchor="middle"
          size={12}
          opacity={OPACITY.accent}
        />
      </Plot>
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
      <Plot xRange={[-5, 5]} yRange={[-5, 5]} width={520} height={300} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(f, -5, 5, 200).filter(p => Math.abs(p[1]) < 8)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Dot x={r1} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={r2} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[-4.7, 4.3]}
          tex={`x^2 ${sum >= 0 ? '-' : '+'} ${Math.abs(sum).toFixed(2)}x ${prod >= 0 ? '+' : '-'} ${Math.abs(prod).toFixed(2)}`}
          anchor="start"
          size={12}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-4.7, 3.4]}
          tex={`r_1 + r_2 = ${sum.toFixed(2)}`}
          anchor="start"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-4.7, 2.6]}
          tex={`r_1 \\cdot r_2 = ${prod.toFixed(2)}`}
          anchor="start"
          size={11}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={r1}
          y={0}
          onChange={nx => setR1(Math.max(-4.5, Math.min(4.5, nx)))}
          constrain={nx => [Math.max(-4.5, Math.min(4.5, nx)), 0]}
          label="r₁"
        />
        <DragHandle
          x={r2}
          y={0}
          onChange={nx => setR2(Math.max(-4.5, Math.min(4.5, nx)))}
          constrain={nx => [Math.max(-4.5, Math.min(4.5, nx)), 0]}
          label="r₂"
        />
      </Plot>
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
      <Plot xRange={[-1, 7]} yRange={[0, 12]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => a * x * x + b * x + c, -1, 7, 200)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
          size={12}
          opacity={OPACITY.fg}
        />
        <Tex at={[vx + 0.3, 0.6]} tex={'x=2'} anchor="start" size={10} opacity={OPACITY.dim} />
        <Tex at={[-0.85, vy + 0.4]} tex={'y=3'} anchor="start" size={10} opacity={OPACITY.dim} />
        <Tex
          at={[4.5, 11]}
          tex={'f(x) = x^2 - 4x + 7'}
          anchor="middle"
          size={12}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[4.5, 10]}
          tex={'\\min f = 3'}
          anchor="middle"
          size={11}
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
      <Plot xRange={[-1.5, 10]} yRange={[-1.5, 10]} width={520} height={340} pad={20}>
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
          strokeWidth={1.5}
        />
        <Tex
          at={[halfB + x / 2, halfB + x / 2]}
          tex={'x^2'}
          anchor="middle"
          size={14}
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
            strokeWidth={1}
          />
        ))}
        <Tex
          at={[halfB + x / 2, halfB / 2]}
          tex={'2.5x'}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[halfB / 2, halfB + x / 2]}
          tex={'2.5x'}
          anchor="middle"
          size={11}
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
              strokeWidth={1}
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
          strokeWidth={1.5}
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

// ─── M04 ROOTS · POWERS · INEQUALITIES ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

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
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, X]} yRange={[-2.3, 2.5]} width={520} height={220} pad={20}>
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
              size={9}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        {/* a and b markers */}
        <Dot x={a} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[a, 1.8]}
          tex={`a=${a.toFixed(2)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Dot x={b} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[b, 1.8]}
          tex={`b=${b.toFixed(2)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        {/* four means as ticks above */}
        {[
          ['HM', hm, 0.5],
          ['GM', gm, 0.5],
          ['AM', am, 0.5],
          ['QM', qm, 0.5]
        ].map(([name, val]) => (
          <React.Fragment key={name}>
            <Polyline
              points={[
                [val, 0],
                [val, 0.9]
              ]}
              opacity={OPACITY.fg}
              strokeWidth={1.5}
            />
            <Dot x={val} y={0} r={3.5} opacity={OPACITY.fg} />
            <Tex at={[val, 1.15]} tex={name} anchor="middle" size={10} opacity={OPACITY.fg} />
            <Tex
              at={[val, -0.75]}
              tex={val.toFixed(2)}
              anchor="middle"
              size={10}
              opacity={OPACITY.dim}
            />
          </React.Fragment>
        ))}
        <Tex
          at={[X / 2, -2.05]}
          tex={`\\mathrm{HM} \\le \\mathrm{GM} \\le \\mathrm{AM} \\le \\mathrm{QM}`}
          anchor="middle"
          size={12}
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

// 04.2 AM-GM by rectangle: ab ≤ ((a+b)/2)²
export function AMGMRectViz() {
  const [a, setA] = React.useState(2)
  const [b, setB] = React.useState(5)
  const s = (a + b) / 2 // half-perimeter side
  const rectArea = a * b
  const sqArea = s * s
  // Rectangle of dimensions a × b inside a square of side s² ... no the classical:
  // Among rectangles of perimeter 2(a+b)=4s, the largest area is the square of side s.
  // We show: rectangle a×b vs the square s×s (same half-perimeter).
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.8, 8.5]} yRange={[-0.8, 8]} width={520} height={320} pad={20}>
        {/* the square s×s */}
        <Polyline
          points={[
            [0, 0],
            [s, 0],
            [s, s],
            [0, s]
          ]}
          closed
          opacity={OPACITY.fg}
          fillOpacity={0.04}
          strokeWidth={1.5}
        />
        {/* rectangle a×b drawn from origin */}
        <Polyline
          points={[
            [0, 0],
            [a, 0],
            [a, b],
            [0, b]
          ]}
          closed
          opacity={OPACITY.fg}
          fillOpacity={0.2}
          strokeWidth={1.5}
        />
        <Tex
          at={[a / 2, b / 2]}
          tex={`ab = ${rectArea.toFixed(2)}`}
          anchor="middle"
          size={12}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[s + 0.4, s + 0.2]}
          tex={`s^2 = ${sqArea.toFixed(2)}`}
          anchor="start"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[a / 2, -0.45]}
          tex={`a=${a.toFixed(1)}`}
          anchor="middle"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.45, b / 2]}
          tex={`b=${b.toFixed(1)}`}
          anchor="middle"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[s / 2, s + 0.5]}
          tex={`s = \\tfrac{a+b}{2} = ${s.toFixed(2)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[4, 7.3]}
          tex={`ab \\le \\left(\\tfrac{a+b}{2}\\right)^2`}
          anchor="middle"
          size={12}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={a}
          y={0}
          onChange={nx => setA(Math.max(0.5, Math.min(7, nx)))}
          constrain={nx => [Math.max(0.5, Math.min(7, nx)), 0]}
        />
        <DragHandle
          x={0}
          y={b}
          onChange={(_, ny) => setB(Math.max(0.5, Math.min(7, ny)))}
          constrain={(_, ny) => [0, Math.max(0.5, Math.min(7, ny))]}
        />
      </Plot>
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
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, 5]} yRange={[-1, 16]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x, -0.5, 4.5, 200)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Polyline
          points={[
            [a, y1],
            [b, y2]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
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
          strokeWidth={1.5}
        />
        <Tex
          at={[midX + 0.15, chordY + 0.5]}
          tex={`\\tfrac{a^2+b^2}{2} = ${chordY.toFixed(2)}`}
          anchor="start"
          size={10}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[midX + 0.15, curveY - 0.6]}
          tex={`\\left(\\tfrac{a+b}{2}\\right)^2 = ${curveY.toFixed(2)}`}
          anchor="start"
          size={10}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[a, -0.55]}
          tex={`a=${a.toFixed(1)}`}
          anchor="middle"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[b, -0.55]}
          tex={`b=${b.toFixed(1)}`}
          anchor="middle"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex at={[3.8, 14]} tex={'y = x^2'} anchor="middle" size={12} opacity={OPACITY.fg} />
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

// ─── M05 FRACTIONS · RATIOS · PROPORTIONS ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

// M05 Fractions, Ratios, Proportions
// 05.1 Fractions 1/3 and 2/7 on the unit line
export function FractionNumberLineViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.1, 1.1]} yRange={[-1.2, 1.5]} width={520} height={200} pad={32}>
        <Polyline
          points={[
            [0, 0],
            [1, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
        <Tex at={[0, -0.6]} tex={'0'} anchor="middle" size={11} opacity={OPACITY.dim} />
        <Tex at={[1, -0.6]} tex={'1'} anchor="middle" size={11} opacity={OPACITY.dim} />
        <Dot x={1 / 3} y={0} r={6} opacity={OPACITY.fg} />
        <Tex
          at={[1 / 3, 0.85]}
          tex={'\\tfrac{1}{3} \\approx 0.333'}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Dot x={2 / 7} y={0} r={6} opacity={OPACITY.accent} />
        <Tex
          at={[2 / 7, -0.95]}
          tex={'\\tfrac{2}{7} \\approx 0.286'}
          anchor="middle"
          size={13}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[0.95, 1.2]}
          tex={`\\tfrac{1}{3} - \\tfrac{2}{7} = \\tfrac{1}{21}`}
          anchor="end"
          size={11}
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
      <Plot xRange={[-6, 6]} yRange={[-5, 5]} width={520} height={300} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => k * x, -6, 6, 50).filter(p => Math.abs(p[1]) < 5)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {[1, 3, 5].map(x => (
          <Dot key={x} x={x} y={k * x} r={4} opacity={OPACITY.accent} />
        ))}
        <Tex
          at={[1.3, k * 1 + 0.5]}
          tex={`(1,\\,${(k * 1).toFixed(2)})`}
          anchor="start"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[3.3, k * 3 + 0.5]}
          tex={`(3,\\,${(k * 3).toFixed(2)})`}
          anchor="start"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-4, 4]}
          tex={`y = ${k.toFixed(2)}\\, x`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="k" value={k} min={-1.2} max={1.2} step={0.01} onChange={setK} />
    </div>
  )
}

// 05.3 Inverse proportion slider for k
export function InverseProportionViz() {
  const [k, setK] = React.useState(6)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, 10]} yRange={[-0.5, 8]} width={520} height={300} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => (x > 0.05 ? k / x : NaN), 0.05, 10, 300).filter(
            p => p[1] <= 8 && p[1] >= -0.5
          )}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {[1, 2, 4].map(x => (
          <React.Fragment key={x}>
            <Dot x={x} y={k / x} r={4} opacity={OPACITY.accent} />
            <Tex
              at={[x + 0.2, k / x + 0.4]}
              tex={`(${x},\\,${(k / x).toFixed(2)})`}
              anchor="start"
              size={11}
              opacity={OPACITY.dim}
            />
          </React.Fragment>
        ))}
        <Tex
          at={[7, 6]}
          tex={`xy = ${k.toFixed(1)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[7, 5]}
          tex={`y = \\tfrac{${k.toFixed(1)}}{x}`}
          anchor="middle"
          size={12}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="k" value={k} min={0.5} max={10} step={0.1} onChange={setK} />
    </div>
  )
}

// ─── M06 EXPONENTS · RADICALS ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

// M06 Exponents, Roots, Radicals
// 06.1 Powers of 2 on a log-style number line drag exponent
export function PowersOf2Viz() {
  const [n, setN] = React.useState(2)
  // Use a logarithmic axis: position = log2(value). Map log2(v) -> x.
  // Plot range in log2 from -3..5 (so 1/8 .. 32)
  const x2v = e => Math.pow(2, e)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3.4, 5.4]} yRange={[-2.4, 2.4]} width={520} height={220} pad={20}>
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
            <Tex at={[k, 0.7]} tex={`2^{${k}}`} anchor="middle" size={11} opacity={OPACITY.dim} />
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
          size={13}
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
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, 10]} yRange={[-1.8, 1.8]} width={520} height={200} pad={20}>
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
              size={9}
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
          strokeWidth={3}
        />
        <Polyline
          points={[
            [m, 0.35],
            [total, 0.35]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={3}
        />
        <Dot x={0} y={0.35} r={4} opacity={OPACITY.fg} />
        <Dot x={m} y={0.35} r={4} opacity={OPACITY.fg} />
        <Dot x={total} y={0.35} r={4} opacity={OPACITY.fg} />
        <Tex
          at={[m / 2, 0.9]}
          tex={`m=${m.toFixed(1)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[m + n / 2, 0.9]}
          tex={`n=${n.toFixed(1)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[total / 2, 1.35]}
          tex={`a^m \\cdot a^n = a^{${total.toFixed(1)}}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="m" value={m} min={0} max={5} step={0.1} onChange={setM} />
      <Slider label="n" value={n} min={0} max={5} step={0.1} onChange={setN} />
    </div>
  )
}

// 06.3 Compare 1/3 and 2/7 by scaling to common bar of 21
export function FractionCompareViz() {
  const scale = 21
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.5, 22]} yRange={[-2.5, 3]} width={520} height={250} pad={20}>
        <Polyline
          points={[
            [0, 0.5],
            [scale, 0.5]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
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
        <Tex at={[0, 1.0]} tex={'0'} anchor="middle" size={11} opacity={OPACITY.dim} />
        <Tex
          at={[scale, 1.0]}
          tex={'1 = \\tfrac{21}{21}'}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        {/* 1/3 bar = 7/21 */}
        <Polyline
          points={[
            [0, 1.7],
            [scale / 3, 1.7]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={4}
        />
        <Dot x={scale / 3} y={1.7} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[scale / 3 + 0.5, 2.3]}
          tex={'\\tfrac{1}{3} = \\tfrac{7}{21}'}
          anchor="start"
          size={13}
          opacity={OPACITY.fg}
        />
        {/* 2/7 bar = 6/21 */}
        <Polyline
          points={[
            [0, -0.7],
            [(2 * scale) / 7, -0.7]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={4}
        />
        <Dot x={(2 * scale) / 7} y={-0.7} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[(2 * scale) / 7 + 0.5, -1.3]}
          tex={'\\tfrac{2}{7} = \\tfrac{6}{21}'}
          anchor="start"
          size={13}
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

// ─── M07 POLYNOMIALS ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

// M07 Polynomials
// 07.1 Polynomial term degrees static layout
export function PolynomialLabeledViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, 11]} yRange={[-2, 2.5]} width={520} height={240} pad={20}>
        <Tex at={[1.0, 1.2]} tex={'-3x^3'} anchor="middle" size={20} opacity={OPACITY.fg} />
        <Tex at={[3.2, 1.2]} tex={'+'} anchor="middle" size={16} opacity={OPACITY.dim} />
        <Tex at={[4.5, 1.2]} tex={'x^2'} anchor="middle" size={20} opacity={OPACITY.fg} />
        <Tex at={[6.2, 1.2]} tex={'+'} anchor="middle" size={16} opacity={OPACITY.dim} />
        <Tex at={[7.5, 1.2]} tex={'2x'} anchor="middle" size={20} opacity={OPACITY.fg} />
        <Tex at={[9.0, 1.2]} tex={'+'} anchor="middle" size={16} opacity={OPACITY.dim} />
        <Tex at={[10.0, 1.2]} tex={'5'} anchor="middle" size={20} opacity={OPACITY.fg} />
        <Polyline
          points={[
            [0.4, 0.4],
            [1.6, 0.4]
          ]}
          opacity={OPACITY.accent}
        />
        <Polyline
          points={[
            [4.1, 0.4],
            [4.9, 0.4]
          ]}
          opacity={OPACITY.accent}
        />
        <Polyline
          points={[
            [7.2, 0.4],
            [7.8, 0.4]
          ]}
          opacity={OPACITY.accent}
        />
        <Polyline
          points={[
            [9.8, 0.4],
            [10.2, 0.4]
          ]}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[1.0, -0.5]}
          tex={'\\text{deg }3'}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[4.5, -0.5]}
          tex={'\\text{deg }2'}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[7.5, -0.5]}
          tex={'\\text{deg }1'}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[10.0, -0.5]}
          tex={'\\text{deg }0'}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[5.5, -1.55]}
          tex={'\\deg(P) = 3'}
          anchor="middle"
          size={13}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

// 07.2 Polynomial curve P(x) = x² − x − 4 drag marker
export function PolynomialCurveViz() {
  const P = x => x * x - x - 4
  const [x, setX] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3, 4.5]} yRange={[-6, 8]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline points={sampleFn(P, -3, 4.5, 200)} opacity={OPACITY.fg} strokeWidth={1.5} />
        {/* Sample evaluations */}
        {[0, 1, 2, 3].map(k => (
          <React.Fragment key={k}>
            <Dot x={k} y={P(k)} r={3.5} opacity={OPACITY.dim} />
            <Tex
              at={[k + 0.2, P(k) + 0.6]}
              tex={`P(${k})=${P(k)}`}
              anchor="start"
              size={10}
              opacity={OPACITY.dim}
            />
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
          at={[x + 0.3, P(x) + 0.7]}
          tex={`P(${x.toFixed(2)}) = ${P(x).toFixed(2)}`}
          anchor="start"
          size={12}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-2.7, 7]}
          tex={'P(x) = x^2 - x - 4'}
          anchor="start"
          size={12}
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
      <Plot xRange={[-2, 8]} yRange={[-2, 8]} width={520} height={320} pad={20}>
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
          strokeWidth={1.5}
        />
        <Polyline
          points={sampleFn(t => (t > 0.02 ? Math.log(t) / Math.log(3) : NaN), 0.02, 8, 200).filter(
            p => p[1] >= -2
          )}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
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
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[ex + 0.2, x - 0.6]}
          tex={`(${ex.toFixed(2)},\\,${x.toFixed(2)})`}
          anchor="start"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex at={[1.4, 6.5]} tex={'g(x) = 3^x'} anchor="start" size={12} opacity={OPACITY.fg} />
        <Tex
          at={[6.5, 2.2]}
          tex={'f(x) = \\log_3 x'}
          anchor="middle"
          size={12}
          opacity={OPACITY.accent}
        />
        <Tex at={[5.2, 5.6]} tex={'y = x'} anchor="start" size={11} opacity={OPACITY.dim} />
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
      <Plot xRange={[-2.5, 3.5]} yRange={[-2.8, 3]} width={520} height={300} pad={20}>
        <Axes step={1} />
        {steps.map(k => (
          <Polyline
            key={k}
            points={[
              [k, k],
              [k + 1, k]
            ]}
            opacity={OPACITY.fg}
            strokeWidth={2}
          />
        ))}
        {steps.map(k => (
          <Dot key={'c' + k} x={k} y={k} r={4} opacity={OPACITY.fg} />
        ))}
        {steps.map(k => (
          <Dot key={'o' + k} x={k + 1} y={k} r={4} opacity={OPACITY.faint * 4} fill={false} />
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
          size={12}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[3, 0.5]}
          tex={'\\lfloor x \\rfloor'}
          anchor="end"
          size={14}
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

// ─── M08 GRAPHING LINES ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

// M08 Graphing Lines and Linear Inequalities
// 08.1 Cartesian plane drag a point
export function CartesianPlaneViz() {
  const [pt, setPt] = React.useState([3, 2])
  const [x, y] = pt
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-6, 6]} yRange={[-5, 5]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Tex at={[5.5, 4.0]} tex={'\\mathrm{I}'} anchor="middle" size={16} opacity={OPACITY.dim} />
        <Tex
          at={[-5.5, 4.0]}
          tex={'\\mathrm{II}'}
          anchor="middle"
          size={16}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-5.5, -4.0]}
          tex={'\\mathrm{III}'}
          anchor="middle"
          size={16}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[5.5, -4.0]}
          tex={'\\mathrm{IV}'}
          anchor="middle"
          size={16}
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
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[x, -0.55]}
          tex={`x=${x.toFixed(2)}`}
          anchor="middle"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.2, y]}
          tex={`y=${y.toFixed(2)}`}
          anchor="end"
          size={10}
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
      <Plot xRange={[-6, 6]} yRange={[-5, 4]} width={520} height={320} pad={20}>
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
              size={11}
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
      <Plot xRange={[-2, 7]} yRange={[-1, 8]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline points={[Pa, Pb]} opacity={OPACITY.fg} strokeWidth={1.5} />
        <Polyline points={[Pa, [Pb[0], Pa[1]]]} opacity={OPACITY.dim} strokeWidth={1.5} />
        <Polyline points={[[Pb[0], Pa[1]], Pb]} opacity={OPACITY.dim} strokeWidth={1.5} />
        <Dot x={Pa[0]} y={Pa[1]} r={5} opacity={OPACITY.fg} />
        <Dot x={Pb[0]} y={Pb[1]} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[(Pa[0] + Pb[0]) / 2, Pa[1] - 0.5]}
          tex={`\\Delta x=${dx.toFixed(2)}`}
          anchor="middle"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[Pb[0] + 0.2, (Pa[1] + Pb[1]) / 2]}
          tex={`\\Delta y=${dy.toFixed(2)}`}
          anchor="start"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[(Pa[0] + Pb[0]) / 2 - 0.4, (Pa[1] + Pb[1]) / 2]}
          tex={`d=${dist.toFixed(2)}`}
          anchor="end"
          size={12}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[3, 7.5]}
          tex={`d = \\sqrt{\\Delta x^2 + \\Delta y^2}`}
          anchor="middle"
          size={12}
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
      <Plot xRange={[-5, 5]} yRange={[-4, 4]} width={520} height={300} pad={20}>
        <Axes step={1} />
        {/* positive m */}
        <Polyline
          points={[
            [-5, -5 * m],
            [5, 5 * m]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {/* horizontal */}
        <Polyline
          points={[
            [-5, -3],
            [5, -3]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        {/* steep negative */}
        <Polyline
          points={[
            [-5, 5 * m],
            [5, -5 * m]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
        />
        <Tex
          at={[3.4, Math.min(5 * m, 3.5)]}
          tex={`m = ${m.toFixed(2)}`}
          anchor="start"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[3.4, Math.max(-5 * m, -3.5)]}
          tex={`m = -${m.toFixed(2)}`}
          anchor="start"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex at={[4.5, -3.5]} tex={'m = 0'} anchor="end" size={11} opacity={OPACITY.dim} />
      </Plot>
      <Slider label="|m|" value={m} min={0} max={2} step={0.01} onChange={setM} />
    </div>
  )
}

// 08.5 Slope-intercept y = mx + b drag m and b
export function LineSlopeInterceptViz() {
  const [m, setM] = React.useState(2)
  const [b, setB] = React.useState(3)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 5]} yRange={[-4, 8]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-5, -5 * m + b],
            [5, 5 * m + b]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Dot x={0} y={b} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[0.4, b - 0.4]}
          tex={`(0,\\,${b.toFixed(2)})`}
          anchor="start"
          size={11}
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
        <Tex at={[0.5, b - 0.5]} tex={'1'} anchor="middle" size={10} opacity={OPACITY.dim} />
        <Tex
          at={[1.15, b + m / 2]}
          tex={`m=${m.toFixed(2)}`}
          anchor="start"
          size={10}
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
      <Plot xRange={[-5, 5]} yRange={[-4, 4]} width={520} height={300} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-5, -5 * m],
            [5, 5 * m]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Polyline
          points={[
            [-5, -5 * m + 2],
            [5, 5 * m + 2]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        <Polyline
          points={[
            [-5, 5 / m],
            [5, -5 / m]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
        />
        <Tex
          at={[4.4, 5 * m + 0.3]}
          tex={`m=${m.toFixed(2)}`}
          anchor="end"
          size={10}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[4.4, 5 * m + 2 + 0.3]}
          tex={`\\parallel`}
          anchor="end"
          size={14}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-4.4, 5 / m + 0.3]}
          tex={`m_\\perp=${(-1 / m).toFixed(2)}`}
          anchor="start"
          size={10}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[0, 3.6]}
          tex={`m \\cdot m_\\perp = ${(m * (-1 / m)).toFixed(2)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="m" value={m} min={0.2} max={3} step={0.01} onChange={setM} />
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
      <Plot xRange={[-5, 6]} yRange={[-4, 8]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline points={extend(p1a, p1b, 8)} opacity={OPACITY.fg} strokeWidth={1.5} />
        <Polyline points={extend(p2a, p2b, 8)} opacity={OPACITY.accent} strokeWidth={1.5} />
        {Number.isFinite(ix) && (
          <>
            <Dot x={ix} y={iy} r={6} opacity={OPACITY.fg} />
            <Tex
              at={[ix + 0.3, iy + 0.5]}
              tex={`(${ix.toFixed(2)},\\,${iy.toFixed(2)})`}
              anchor="start"
              size={11}
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

// 08.8 Inequality x ≤ c on number line drag endpoint
export function NumberLineInequalityVizGL() {
  const [c, setC] = React.useState(-2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 5]} yRange={[-1.5, 1.5]} width={520} height={160} pad={20}>
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
              size={9}
              opacity={OPACITY.faint * 3}
            />
          </React.Fragment>
        ))}
        <Polyline
          points={[
            [-5, 0],
            [c, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={4}
        />
        <Dot x={c} y={0} r={6} opacity={OPACITY.fg} />
        <Tex
          at={[c, 0.7]}
          tex={`x \\leq ${c.toFixed(2)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={c}
          y={0}
          onChange={nx => setC(Math.max(-4.5, Math.min(4.5, nx)))}
          constrain={nx => [Math.max(-4.5, Math.min(4.5, nx)), 0]}
        />
      </Plot>
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
      <Plot xRange={[-5, 5]} yRange={[-3, 6]} width={520} height={320} pad={20}>
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
          strokeWidth={1.5}
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
      <Slider label="m" value={m} min={-2} max={2} step={0.05} onChange={setM} />
      <Slider label="b" value={b} min={-3} max={5} step={0.05} onChange={setB} />
    </div>
  )
}

// 08.10 Feasible region: x+y ≤ 8, x+2y ≤ 12, x,y ≥ 0
export function FeasibleRegionViz() {
  // vertices: (0,0), (8,0), (4,4), (0,6)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, 11]} yRange={[-1, 8]} width={520} height={300} pad={20}>
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
          strokeWidth={1.5}
        />
        <Tex at={[8.5, 0.7]} tex={'x+y=8'} anchor="start" size={10} opacity={OPACITY.dim} />
        <Polyline
          points={[
            [0, 6],
            [12, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        <Tex at={[7.5, 3]} tex={'x+2y=12'} anchor="middle" size={10} opacity={OPACITY.dim} />
        <Dot x={0} y={0} r={4} opacity={OPACITY.fg} />
        <Dot x={8} y={0} r={4} opacity={OPACITY.fg} />
        <Dot x={4} y={4} r={5} opacity={OPACITY.accent} />
        <Tex at={[4.3, 4.5]} tex={'(4,4)'} anchor="start" size={11} opacity={OPACITY.accent} />
        <Dot x={0} y={6} r={4} opacity={OPACITY.fg} />
        <Tex at={[0.4, 6.5]} tex={'(0,6)'} anchor="start" size={10} opacity={OPACITY.fg} />
        <Tex at={[8.0, -0.55]} tex={'(8,0)'} anchor="middle" size={10} opacity={OPACITY.fg} />
      </Plot>
    </div>
  )
}

// ─── M09 QUADRATIC FUNCTIONS ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

// M09 Quadratic Functions and Polynomial Inequalities
// 09.1 Basic parabola y = x²
export function ParabolaBasicViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4, 4]} yRange={[-1, 7]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x, -3, 3, 200)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Dot x={0} y={0} r={5} opacity={OPACITY.accent} />
        <Tex at={[0.4, -0.5]} tex={'(0,0)'} anchor="start" size={11} opacity={OPACITY.accent} />
        <Tex at={[2.5, 6]} tex={'y = x^2'} anchor="middle" size={13} opacity={OPACITY.fg} />
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
        <Tex at={[-2, -0.5]} tex={'-2'} anchor="middle" size={10} opacity={OPACITY.dim} />
        <Tex at={[2, -0.5]} tex={'2'} anchor="middle" size={10} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}

// 09.2 Effect of a slider
export function ParabolaCoeffViz() {
  const [a, setA] = React.useState(1)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4, 4]} yRange={[-5, 5]} width={520} height={320} pad={20}>
        <Axes step={1} />
        {/* ref: y = x² */}
        <Polyline
          points={sampleFn(x => x * x, -3, 3, 200).filter(p => Math.abs(p[1]) < 5.5)}
          opacity={OPACITY.dim * 0.5}
          strokeWidth={1}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(x => a * x * x, -4, 4, 200).filter(p => Math.abs(p[1]) < 5.5)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Tex
          at={[3, 4]}
          tex={`y = ${a.toFixed(2)}\\,x^2`}
          anchor="end"
          size={12}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[3, 3]}
          tex={`a = ${a.toFixed(2)}`}
          anchor="end"
          size={11}
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
      <Slider label="a" value={a} min={-3} max={3} step={0.01} onChange={setA} />
    </div>
  )
}

// 09.3 Interactive vertex y = (x − h)² + k
export function InteractiveVertexViz() {
  const [h, setH] = React.useState(1)
  const [k, setK] = React.useState(-1)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 5]} yRange={[-4, 6]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => (x - h) * (x - h) + k, -5, 5, 200).filter(p => p[1] < 7)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
          size={12}
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
      <Plot xRange={[-5, 8]} yRange={[-7, 3]} width={520} height={300} pad={20}>
        <Axes step={1} />
        <Polyline
          points={pts.filter(p => p[0] < 8 && p[0] > -5)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Dot x={-3.5} y={-3} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[-3.2, -3.6]}
          tex={'(-3.5,\\,-3)'}
          anchor="start"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[5, 1.5]}
          tex={'x = \\tfrac{1}{2}y^2 + 3y + 1'}
          anchor="middle"
          size={12}
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
      <Plot xRange={[-2, 8]} yRange={[-3, 6]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Parametric
          xy={t => [center[0] + r * Math.cos(t), center[1] + r * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={200}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Dot x={center[0]} y={center[1]} r={5} opacity={OPACITY.accent} />
        <Polyline
          points={[center, [center[0] + r, center[1]]]}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        <Dot x={center[0] + r} y={center[1]} r={4} opacity={OPACITY.fg} />
        <Tex
          at={[center[0] + r / 2, center[1] + 0.4]}
          tex={`r=${r.toFixed(2)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[center[0] + 0.25, center[1] - 0.4]}
          tex={`(${center[0].toFixed(1)},\\,${center[1].toFixed(1)})`}
          anchor="start"
          size={10}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[6, 5]}
          tex={`(x-h)^2 + (y-k)^2 = r^2`}
          anchor="end"
          size={11}
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
      <Plot xRange={[-5, 8]} yRange={[-13, 7]} width={520} height={320} pad={20}>
        <Axes step={2} />
        <Polyline
          points={sampleFn(f, -5, 8, 200).filter(p => p[1] < 7 && p[1] > -13)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {/* solution interval on x-axis */}
        <Polyline
          points={[
            [-2, 0],
            [5, 0]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={4}
        />
        <Dot x={-2} y={0} r={5} opacity={OPACITY.accent} />
        <Dot x={5} y={0} r={5} opacity={OPACITY.accent} />
        <Tex at={[-2, 1.0]} tex={'-2'} anchor="middle" size={11} opacity={OPACITY.accent} />
        <Tex at={[5, 1.0]} tex={'5'} anchor="middle" size={11} opacity={OPACITY.accent} />
        <Tex
          at={[1.5, -10]}
          tex={'(x+2)(x-5) \\leq 0\\;\\text{ on }\\;[-2, 5]'}
          anchor="middle"
          size={12}
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
      <Plot xRange={[-3.5, 3.5]} yRange={[-0.7, 7]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(t => t * t, -3, 3, 200).filter(p => p[1] < 7.2)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
          size={12}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[0, -0.45]}
          tex={'\\min = 0\\text{ at }x=0'}
          anchor="middle"
          size={11}
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
      <Plot xRange={[-2, 14]} yRange={[-12, 6]} width={520} height={320} pad={20}>
        <Axes step={2} />
        <Polyline
          points={sampleFn(x => aSafe * x * x + 5 * x - 7, -2, 14, 200).filter(p => p[1] > -12)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[12, 5]}
          tex={`f(x) = ${aSafe.toFixed(2)}x^2 + 5x - 7`}
          anchor="end"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[12, 3.5]}
          tex={`\\max = ${vy.toFixed(2)}`}
          anchor="end"
          size={11}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider label="a" value={a} min={-2} max={-0.1} step={0.01} onChange={setA} />
    </div>
  )
}

// 09.9 Polynomial sign chart for (x+2)(x−5) ≥ 0
export function NumberLineSignViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 8]} yRange={[-2, 2]} width={520} height={180} pad={20}>
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
              size={9}
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
          strokeWidth={4}
        />
        <Polyline
          points={[
            [5, 0],
            [8, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={4}
        />
        <Polyline
          points={[
            [-2, 0],
            [5, 0]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={4}
        />
        <Dot x={-2} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={5} y={0} r={5} opacity={OPACITY.fg} />
        <Tex at={[-3.5, 0.7]} tex={'+'} anchor="middle" size={16} opacity={OPACITY.fg} />
        <Tex at={[1.5, 0.7]} tex={'-'} anchor="middle" size={16} opacity={OPACITY.accent} />
        <Tex at={[6.5, 0.7]} tex={'+'} anchor="middle" size={16} opacity={OPACITY.fg} />
        <Tex
          at={[1.5, 1.4]}
          tex={'(x+2)(x-5) \\geq 0:\\;(-\\infty, -2] \\cup [5, \\infty)'}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// ─── M10 FUNCTIONS ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

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
    strokeWidth={1.5}
  />
)

// 10.1 Function machine f(x) = 2x + 1 drag x
export function FunctionMachineViz() {
  const [x, setX] = React.useState(3)
  const fx = 2 * x + 1
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-8, 8]} yRange={[-2.5, 2.5]} width={520} height={220} pad={20}>
        <Arrow from={[-7, 0]} to={[-3.2, 0]} opacity={OPACITY.dim} />
        <BoxA x1={-3} x2={3} y1={-1.2} y2={1.2} opacity={OPACITY.fg} />
        <Arrow from={[3.2, 0]} to={[7, 0]} opacity={OPACITY.dim} />
        <Tex
          at={[-5, 0.6]}
          tex={`x = ${x.toFixed(2)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Tex at={[0, 0.4]} tex={'f(x) = 2x + 1'} anchor="middle" size={14} opacity={OPACITY.fg} />
        <Tex
          at={[5, 0.6]}
          tex={`f(x) = ${fx.toFixed(2)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider label="x" value={x} min={-5} max={5} step={0.05} onChange={setX} />
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
      <Plot xRange={[-9, 9]} yRange={[-2.5, 2.5]} width={520} height={220} pad={20}>
        <Arrow from={[-8.5, 0]} to={[-5.2, 0]} opacity={OPACITY.dim} />
        <BoxA x1={-5} x2={-1} y1={-1.2} y2={1.2} opacity={OPACITY.fg} />
        <Arrow from={[-0.8, 0]} to={[0.8, 0]} opacity={OPACITY.dim} />
        <BoxA x1={1} x2={5} y1={-1.2} y2={1.2} opacity={OPACITY.fg} />
        <Arrow from={[5.2, 0]} to={[8.5, 0]} opacity={OPACITY.dim} />
        <Tex
          at={[-7, 0.55]}
          tex={`${x.toFixed(2)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Tex at={[-3, 0.5]} tex={'g(u)=u+1'} anchor="middle" size={11} opacity={OPACITY.fg} />
        <Tex at={[-3, -0.45]} tex={'g'} anchor="middle" size={16} opacity={OPACITY.fg} />
        <Tex
          at={[0, 0.55]}
          tex={`${gx.toFixed(2)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.accent}
        />
        <Tex at={[3, 0.5]} tex={'f(u)=u^2'} anchor="middle" size={11} opacity={OPACITY.fg} />
        <Tex at={[3, -0.45]} tex={'f'} anchor="middle" size={16} opacity={OPACITY.fg} />
        <Tex
          at={[7, 0.55]}
          tex={`${fgx.toFixed(2)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0, 1.85]}
          tex={`f(g(${x.toFixed(2)})) = (${gx.toFixed(2)})^2 = ${fgx.toFixed(2)}`}
          anchor="middle"
          size={12}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider label="x" value={x} min={-4} max={4} step={0.05} onChange={setX} />
    </div>
  )
}

// 10.3 Point on a graph drag along f(x) = x² − 5
export function GraphPointViz() {
  const f = x => x * x - 5
  const [x, setX] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4, 4]} yRange={[-6, 6]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline points={sampleFn(f, -3.4, 3.4, 200)} opacity={OPACITY.fg} strokeWidth={1.5} />
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
          size={12}
          opacity={OPACITY.accent}
        />
        <Tex at={[3, 5]} tex={'f(x) = x^2 - 5'} anchor="end" size={12} opacity={OPACITY.fg} />
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
      <Plot xRange={[-1, 6]} yRange={[-2, 8]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x - 5 * x + 6, -1, 6, 200).filter(p => p[1] < 8)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Dot x={2} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={3} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={0} y={6} r={5} opacity={OPACITY.fg} />
        <Dot x={2.5} y={-0.25} r={4} opacity={OPACITY.accent} />
        <Tex at={[2, -0.7]} tex={'(2,0)'} anchor="middle" size={10} opacity={OPACITY.fg} />
        <Tex at={[3, -0.7]} tex={'(3,0)'} anchor="middle" size={10} opacity={OPACITY.fg} />
        <Tex at={[0.4, 6.4]} tex={'(0,6)'} anchor="start" size={10} opacity={OPACITY.fg} />
        <Tex
          at={[2.7, -1.0]}
          tex={'vertex (2.5,\\,-0.25)'}
          anchor="start"
          size={10}
          opacity={OPACITY.accent}
        />
        <Tex at={[5.5, 5]} tex={'y = x^2 - 5x + 6'} anchor="end" size={12} opacity={OPACITY.fg} />
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
      <Plot xRange={[-3, 3.5]} yRange={[-8, 10]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => x * x * x, -2.2, 2.2, 200).filter(p => p[1] > -8 && p[1] < 10)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Polyline
          points={sampleFn(x => 2 * x + 3, -3, 3.5, 50)}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
        />
        <Dot x={xi} y={yi} r={6} opacity={OPACITY.accent} />
        <Tex
          at={[xi + 0.2, yi - 0.6]}
          tex={`(${xi.toFixed(2)},\\,${yi.toFixed(2)})`}
          anchor="start"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex at={[1.8, 8]} tex={'y = x^3'} anchor="end" size={12} opacity={OPACITY.fg} />
        <Tex at={[-2.5, -2]} tex={'y = 2x + 3'} anchor="start" size={12} opacity={OPACITY.accent} />
      </Plot>
    </div>
  )
}

// 10.6 Vertical scaling slider c·sin(x)
export function VerticalScaleViz() {
  const [c, setC] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7, 7]} yRange={[-4, 4]} width={520} height={300} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => Math.sin(x), -7, 7, 200)}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        <Polyline
          points={sampleFn(x => c * Math.sin(x), -7, 7, 200).filter(p => Math.abs(p[1]) < 4)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Tex at={[5.5, 1.2]} tex={'f(x)=\\sin x'} anchor="end" size={11} opacity={OPACITY.dim} />
        <Tex
          at={[5.5, 2.2 * Math.sign(c) * Math.min(1, Math.abs(c)) + (Math.abs(c) > 1 ? 0.5 : 0)]}
          tex={`${c.toFixed(2)} f(x)`}
          anchor="end"
          size={11}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="c" value={c} min={-3} max={3} step={0.01} onChange={setC} />
    </div>
  )
}

// 10.7 Horizontal scaling slider sin(cx)
export function HorizontalScaleViz() {
  const [c, setC] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7, 7]} yRange={[-2, 2]} width={520} height={300} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => Math.sin(x), -7, 7, 200)}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        <Polyline
          points={sampleFn(x => Math.sin(c * x), -7, 7, 400)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Tex at={[5.5, 1.4]} tex={'f(x)=\\sin x'} anchor="end" size={11} opacity={OPACITY.dim} />
        <Tex
          at={[5.5, -1.5]}
          tex={`\\sin(${c.toFixed(2)}\\, x)`}
          anchor="end"
          size={11}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="c" value={c} min={-3} max={3} step={0.01} onChange={setC} />
    </div>
  )
}

// 10.8 Inverse graph f(x) = 4x − 3 and f⁻¹
export function InverseGraphViz() {
  const [x, setX] = React.useState(1)
  const fx = 4 * x - 3
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-6, 6]} yRange={[-6, 6]} width={520} height={320} pad={20}>
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
          strokeWidth={1.5}
        />
        <Polyline
          points={sampleFn(t => (t + 3) / 4, -6, 6, 50)}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
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
          size={10}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[fx + 0.2, x - 0.5]}
          tex={`(${fx.toFixed(2)},\\,${x.toFixed(2)})`}
          anchor="start"
          size={10}
          opacity={OPACITY.accent}
        />
        <Tex at={[1.5, 5]} tex={'f(x)=4x-3'} anchor="middle" size={12} opacity={OPACITY.fg} />
        <Tex
          at={[4.5, 1.5]}
          tex={'f^{-1}(x)=\\tfrac{x+3}{4}'}
          anchor="start"
          size={12}
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
      <Plot xRange={[-2, 14]} yRange={[-12, 8]} width={520} height={320} pad={20}>
        <Axes step={2} />
        <Polyline
          points={[
            [-12, -12],
            [14, 14]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(t => 2 * t - 9, -1, 12, 50).filter(p => p[1] > -12 && p[1] < 8)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Polyline
          points={sampleFn(t => (t + 9) / 2, -12, 14, 50).filter(p => p[1] > -12 && p[1] < 8)}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
        />
        <Dot x={4.5} y={0} r={4} opacity={OPACITY.dim} />
        <Dot x={0} y={4.5} r={4} opacity={OPACITY.dim} />
        <Tex at={[10, -2]} tex={'f(x)=2x-9'} anchor="middle" size={12} opacity={OPACITY.fg} />
        <Tex
          at={[2, 6]}
          tex={'f^{-1}(x)=\\tfrac{x+9}{2}'}
          anchor="middle"
          size={12}
          opacity={OPACITY.accent}
        />
      </Plot>
    </div>
  )
}

// ─── M11 EXPONENTIAL FUNCTIONS ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

// M11 Exponential Functions
// 11.1 Exponential graph bˣ slider base
export function ExponentialGraphViz() {
  const [b, setB] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3, 5]} yRange={[-0.5, 9]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => Math.pow(b, x), -3, 5, 200).filter(p => p[1] >= -0.5 && p[1] <= 9)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Dot x={0} y={1} r={5} opacity={OPACITY.accent} />
        <Tex at={[0.4, 1.5]} tex={'(0,1)'} anchor="start" size={11} opacity={OPACITY.accent} />
        {[1, 2, 3].map(x => (
          <React.Fragment key={x}>
            <Dot x={x} y={Math.pow(b, x)} r={3.5} opacity={OPACITY.dim} />
            {Math.pow(b, x) < 9 && (
              <Tex
                at={[x + 0.25, Math.pow(b, x) + 0.4]}
                tex={`(${x},\\,${Math.pow(b, x).toFixed(2)})`}
                anchor="start"
                size={10}
                opacity={OPACITY.dim}
              />
            )}
          </React.Fragment>
        ))}
        <Tex
          at={[3.5, 6]}
          tex={`f(x) = ${b.toFixed(2)}^x`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider label="b" value={b} min={0.3} max={3} step={0.01} onChange={setB} />
    </div>
  )
}

// 11.2 Linear vs exponential slider rate
export function GrowthComparisonViz() {
  const [r, setR] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, 7]} yRange={[-0.5, 12]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(x => r * x, 0, 7, 50).filter(p => p[1] <= 12)}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        <Polyline
          points={sampleFn(x => Math.pow(1 + r / 10, x * 2), 0, 7, 200).filter(p => p[1] <= 12)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Tex at={[6, 11]} tex={'\\text{exponential}'} anchor="end" size={11} opacity={OPACITY.fg} />
        <Tex
          at={[6, r * 6 - 0.5]}
          tex={'\\text{linear}'}
          anchor="end"
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="rate" value={r} min={0.5} max={3} step={0.01} onChange={setR} />
    </div>
  )
}

// 11.3 Solve 3ˣ = y drag y, see x = log₃ y
export function EqualBasesViz() {
  const [y, setY] = React.useState(4)
  const x = Math.log(y) / Math.log(3)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-2, 4]} yRange={[-0.5, 9]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(t => Math.pow(3, t), -2, 2, 200).filter(p => p[1] <= 9)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Polyline
          points={[
            [-2, y],
            [4, y]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
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
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex at={[3.5, 7]} tex={'y = 3^x'} anchor="end" size={12} opacity={OPACITY.fg} />
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
  // Auto-scale y range based on compounded final value
  const compMax = P0 * Math.pow(1 + r, maxT)
  const yMax = Math.max(15000, compMax * 1.05)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, maxT + 1]} yRange={[0, yMax]} width={520} height={320} pad={20}>
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
        {[5000, 10000, 15000, 20000]
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
              <Tex at={[-0.5, v]} tex={`${v}`} anchor="end" size={9} opacity={OPACITY.faint * 3} />
            </React.Fragment>
          ))}
        <Polyline
          points={sampleFn(t => P0 * (1 + r * t), 0, maxT, 50)}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        <Polyline
          points={sampleFn(t => P0 * Math.pow(1 + r, t), 0, maxT, 200)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Tex
          at={[maxT - 0.5, P0 * (1 + r * maxT) + yMax * 0.03]}
          tex={'\\text{simple}'}
          anchor="end"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[maxT - 0.5, Math.min(yMax * 0.94, P0 * Math.pow(1 + r, maxT))]}
          tex={'\\text{compound}'}
          anchor="end"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[1, yMax * 0.92]}
          tex={`r = ${(r * 100).toFixed(1)}\\%`}
          anchor="start"
          size={11}
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
      <Plot xRange={[-2, 9]} yRange={[-3, 4]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={[
            [-3, -3],
            [5, 5]
          ]}
          opacity={OPACITY.faint * 2}
          dash="3 3"
        />
        <Polyline
          points={sampleFn(x => (x > 0.05 ? Math.log(x) / Math.log(3) : NaN), 0.05, 9, 200)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Polyline
          points={sampleFn(x => Math.pow(3, x), -3, 1.3, 200).filter(p => p[1] <= 4)}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
        />
        <Dot x={1} y={0} r={5} opacity={OPACITY.fg} />
        <Tex at={[1.4, 0.5]} tex={'(1,0)'} anchor="start" size={10} opacity={OPACITY.fg} />
        <Dot x={0} y={1} r={5} opacity={OPACITY.accent} />
        <Tex at={[0.2, 1.4]} tex={'(0,1)'} anchor="start" size={10} opacity={OPACITY.accent} />
        <Tex at={[7, 2.5]} tex={'\\log_3 x'} anchor="middle" size={13} opacity={OPACITY.fg} />
        <Tex at={[1.4, 3.5]} tex={'3^x'} anchor="middle" size={13} opacity={OPACITY.accent} />
        <Tex at={[3, 3.4]} tex={'y=x'} anchor="middle" size={11} opacity={OPACITY.dim} />
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
      <Plot xRange={[-0.5, 10]} yRange={[-2.5, 3.5]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(t => (t > 0.05 ? Math.log(t) / Math.log(3) : NaN), 0.05, 10, 200)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
          size={12}
          opacity={OPACITY.accent}
        />
        <Tex at={[7, 2.6]} tex={'\\log_3 x'} anchor="middle" size={13} opacity={OPACITY.fg} />
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
      <Plot xRange={[-3, 5]} yRange={[-0.5, 9]} width={520} height={320} pad={20}>
        <Axes step={1} />
        <Polyline
          points={sampleFn(t => Math.pow(2, t), -3, 5, 200).filter(p => p[1] <= 9)}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
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
          size={12}
          opacity={OPACITY.accent}
        />
        <Tex at={[3.5, 7]} tex={'y = 2^x'} anchor="middle" size={13} opacity={OPACITY.fg} />
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

// ─── M12 SEQUENCES · SERIES ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

// M12 Sequences and Series
// 12.1 Sequence vs series paired layout
export function SequenceVsSeriesViz() {
  const terms = [1, 2, 3, 4, 5]
  return (
    <div
      style={{ width: '100%', fontFamily: "'D-DIN', ui-monospace, monospace", padding: '8px 0' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ padding: 16, border: '1px solid rgba(240,240,250,0.15)' }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.18em',
              color: 'rgba(240,240,250,0.5)',
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
                <span style={{ fontSize: 24, color: 'rgba(240,240,250,1)' }}>{t}</span>
                <KatexInline
                  tex={`a_{${i + 1}}`}
                  style={{ fontSize: 11, color: 'rgba(240,240,250,0.5)' }}
                />
              </span>
            ))}
            <span style={{ color: 'rgba(240,240,250,0.5)', fontSize: 18 }}>…</span>
          </div>
        </div>
        <div style={{ padding: 16, border: '1px solid rgba(240,240,250,0.15)' }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.18em',
              color: 'rgba(240,240,250,0.5)',
              textTransform: 'uppercase',
              marginBottom: 12
            }}
          >
            Series
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'baseline' }}>
            {terms.map((t, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                {i > 0 && <span style={{ color: 'rgba(240,240,250,0.7)', fontSize: 16 }}>+</span>}
                <span style={{ fontSize: 24, color: 'rgba(240,240,250,1)' }}>{t}</span>
              </span>
            ))}
            <span style={{ color: 'rgba(240,240,250,0.5)', fontSize: 14 }}>+ … = </span>
            <span style={{ color: 'rgba(240,240,250,1)', fontSize: 18, fontWeight: 600 }}>15</span>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: 12,
          color: 'rgba(240,240,250,0.5)',
          textAlign: 'center',
          display: 'flex',
          gap: 6,
          justifyContent: 'center',
          alignItems: 'baseline',
          flexWrap: 'wrap'
        }}
      >
        <span>Sequence is a list. Series is the running sum</span>
        <KatexInline
          tex={'S_n = a_1 + a_2 + \\cdots + a_n'}
          style={{ color: 'rgba(240,240,250,1)' }}
        />
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
      <Plot xRange={[lo, hi]} yRange={[-2.5, 2.2]} width={520} height={220} pad={20}>
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
              size={10}
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
              strokeWidth={2}
            />
            <Tex
              at={[(v + ap[i + 1]) / 2, -1.2]}
              tex={`d=${d}`}
              anchor="middle"
              size={9}
              opacity={OPACITY.dim}
            />
          </React.Fragment>
        ))}
        <Tex
          at={[(lo + hi) / 2, -2.1]}
          tex={`a_n = a_1 + (n-1)d`}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="d"
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
  const [n, setN] = React.useState(100)
  const S = (n * (n + 1)) / 2
  return (
    <div
      style={{
        width: '100%',
        fontFamily: "'D-DIN', ui-monospace, monospace",
        fontSize: 13,
        padding: '12px 0'
      }}
    >
      <div style={{ padding: 16, border: '1px solid rgba(240,240,250,0.15)' }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 8, color: 'rgba(240,240,250,1)' }}>
          <span style={{ opacity: 0.5, minWidth: 28 }}>S =</span>
          <span>
            1 + 2 + 3 + … + {n - 1} + {n}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 12, color: 'rgba(240,240,250,1)' }}>
          <span style={{ opacity: 0.5, minWidth: 28 }}>S =</span>
          <span>
            {n} + {n - 1} + {n - 2} + … + 2 + 1
          </span>
        </div>
        <div
          style={{
            borderTop: '1px solid rgba(240,240,250,0.15)',
            paddingTop: 10,
            color: 'rgba(240,240,250,0.5)'
          }}
        >
          Each column sums to <span style={{ color: 'rgba(240,240,250,1)' }}>{n + 1}</span>.{' '}
          <span style={{ color: 'rgba(240,240,250,1)' }}>{n}</span> columns → 2S = {n} · {n + 1} ={' '}
          <span style={{ color: 'rgba(240,240,250,1)' }}>{n * (n + 1)}</span>.
        </div>
        <div
          style={{ marginTop: 10, fontSize: 15, display: 'flex', gap: 8, alignItems: 'baseline' }}
        >
          <span>
            S = <span style={{ fontSize: 18, fontWeight: 600 }}>{S}</span> ={' '}
          </span>
          <KatexInline tex={'\\dfrac{n(n+1)}{2}'} />
        </div>
      </div>
      <div style={{ padding: '12px 4px 0' }}>
        <Slider
          label="n"
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
    <div
      style={{ width: '100%', fontFamily: "'D-DIN', ui-monospace, monospace", padding: '12px 0' }}
    >
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
                  background: `rgba(240,240,250,${opacity * 0.9})`,
                  border: '1px solid rgba(0,0,0,0.5)'
                }}
              />
            )
          })}
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: 13,
          color: 'rgba(240,240,250,1)',
          letterSpacing: '0.05em'
        }}
      >
        {Array.from({ length: n }, (_, k) => 2 * k + 1).join(' + ')} ={' '}
        <span style={{ fontWeight: 600, fontSize: 16 }}>{n * n}</span> = {n}²
      </div>
      <div style={{ padding: '12px 4px 0' }}>
        <Slider
          label="n"
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
        fontFamily: "'D-DIN', ui-monospace, monospace",
        fontSize: 13,
        padding: '12px 0'
      }}
    >
      <div style={{ padding: 16, border: '1px solid rgba(240,240,250,0.15)' }}>
        {pairs.map(([a, b], i) =>
          a === null ? (
            <div key={i} style={{ padding: '4px 0', opacity: 0.5, color: 'rgba(240,240,250,1)' }}>
              + ⋯
            </div>
          ) : (
            <div
              key={i}
              style={{ display: 'flex', gap: 6, padding: '4px 0', color: 'rgba(240,240,250,1)' }}
            >
              <span style={{ opacity: 0.5, width: 16 }}>{i === 0 ? '' : '+'}</span>
              <span>(</span>
              <span
                style={{
                  color: i === 0 ? 'rgba(240,240,250,1)' : 'rgba(240,240,250,0.5)',
                  textDecoration: i === 0 ? 'none' : 'line-through'
                }}
              >
                {a}
              </span>
              <span style={{ opacity: 0.5 }}>−</span>
              <span
                style={{
                  color: i === pairs.length - 1 ? 'rgba(240,240,250,1)' : 'rgba(240,240,250,0.5)',
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
            borderTop: '1px solid rgba(240,240,250,0.15)',
            marginTop: 12,
            paddingTop: 10,
            fontSize: 14,
            color: 'rgba(240,240,250,1)'
          }}
        >
          = 1000 − 332 = <span style={{ fontWeight: 600, fontSize: 16 }}>668</span>
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
      <Plot xRange={[0, N + 1]} yRange={[-0.05, 1.2]} width={520} height={280} pad={28}>
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
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={1.5} />
        {pts.map(([n, s], i) => (
          <Dot key={i} x={n} y={s} r={4} opacity={OPACITY.fg} />
        ))}
        {[1, 2, 4, 8].map(n => (
          <Tex
            key={n}
            at={[n, -0.07]}
            tex={`n=${n}`}
            anchor="middle"
            size={9}
            opacity={OPACITY.dim}
          />
        ))}
        <Tex at={[N - 0.5, 1.1]} tex={'S \\to 1'} anchor="end" size={12} opacity={OPACITY.accent} />
        <Tex at={[-0.3, 1]} tex={'1'} anchor="end" size={10} opacity={OPACITY.dim} />
        <Tex at={[-0.3, 0]} tex={'0'} anchor="end" size={10} opacity={OPACITY.dim} />
        <Tex
          at={[N / 2, -0.18]}
          tex={'S_n = 1 - 2^{-n}'}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// 12.7 Staircase as half rectangle slider n
export function StaircaseViz() {
  const [n, setN] = React.useState(5)
  const cellSize = 18
  const cells = []
  // left staircase: column i has i+1 cells; right staircase: column i has n-i cells stacked above
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) cells.push({ x: i, y: j, top: false })
    for (let j = i + 1; j < n + 1; j++) cells.push({ x: i, y: j, top: true })
  }
  return (
    <div
      style={{ width: '100%', fontFamily: "'D-DIN', ui-monospace, monospace", padding: '12px 0' }}
    >
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
                background: c.top ? 'rgba(240,240,250,0.7)' : 'rgba(240,240,250,0.18)',
                border: '1px solid rgba(0,0,0,0.4)'
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: 12,
          color: 'rgba(240,240,250,1)',
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'baseline',
          flexWrap: 'wrap'
        }}
      >
        <span>
          1 + 2 + … + {n} ={' '}
          <span style={{ fontWeight: 600, fontSize: 15 }}>{(n * (n + 1)) / 2}</span> ={' '}
        </span>
        <KatexInline tex={'\\dfrac{n(n+1)}{2}'} />
      </div>
      <div style={{ padding: '12px 4px 0' }}>
        <Slider
          label="n"
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
  const fibs = fibonacci(10).slice(1) // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  const maxV = fibs[fibs.length - 1]
  return (
    <div
      style={{ width: '100%', padding: '12px 0', fontFamily: "'D-DIN', ui-monospace, monospace" }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          columnGap: 14,
          rowGap: 6,
          alignItems: 'center',
          fontSize: 12
        }}
      >
        {fibs.map((v, i) => (
          <React.Fragment key={i}>
            <KatexInline tex={`F_{${i + 1}}`} style={{ color: 'rgba(240,240,250,0.5)' }} />
            <div style={{ height: 10, background: 'rgba(240,240,250,0.1)', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: 10,
                  width: `${(100 * v) / maxV}%`,
                  background: 'rgba(240,240,250,0.85)'
                }}
              />
            </div>
            <span
              style={{
                color: 'rgba(240,240,250,1)',
                minWidth: 28,
                textAlign: 'right',
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              {v}
            </span>
          </React.Fragment>
        ))}
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: 12,
          color: 'rgba(240,240,250,0.5)',
          display: 'flex',
          gap: 8,
          alignItems: 'baseline',
          flexWrap: 'wrap'
        }}
      >
        <KatexInline tex={'F_n = F_{n-1} + F_{n-2}'} style={{ color: 'rgba(240,240,250,1)' }} />
        <span>· ratio</span>
        <KatexInline
          tex={'\\tfrac{F_{n+1}}{F_n} \\to \\varphi \\approx 1.618'}
          style={{ color: 'rgba(240,240,250,1)' }}
        />
      </div>
    </div>
  )
}

// 12.9 Piano octave as geometric drag a key, show ratio
export function PianoViz() {
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
    <div
      style={{ width: '100%', padding: '12px 0', fontFamily: "'D-DIN', ui-monospace, monospace" }}
    >
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
                  ? 'rgba(240,240,250,1)'
                  : isBlack[i]
                    ? 'rgba(240,240,250,0.18)'
                    : 'rgba(240,240,250,0.08)',
              border: `1px solid rgba(240,240,250,${i === k ? 1 : 0.4})`,
              color: i === k ? 'rgba(0,0,0,1)' : 'rgba(240,240,250,0.6)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: 6,
              fontSize: 10,
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
          fontSize: 13,
          color: 'rgba(240,240,250,1)',
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
          fontSize: 11,
          color: 'rgba(240,240,250,0.5)',
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

// ─── M13 BINOMIAL THEOREM ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

// M13 The Binomial Theorem
// 13.1 Square of a sum (a+b)² drag a,b
export function SquareOfSumViz() {
  const [a, setA] = React.useState(3)
  const [b, setB] = React.useState(2)
  const total = a + b
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.5, 7.5]} yRange={[-1.5, 7.5]} width={520} height={340} pad={20}>
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
        <Polyline
          points={[
            [0, a],
            [a, a],
            [a, total],
            [0, total]
          ]}
          closed
          opacity={OPACITY.accent}
          fillOpacity={0.2}
        />
        <Polyline
          points={[
            [a, 0],
            [total, 0],
            [total, a],
            [a, a]
          ]}
          closed
          opacity={OPACITY.accent}
          fillOpacity={0.2}
        />
        <Polyline
          points={[
            [0, 0],
            [total, 0],
            [total, total],
            [0, total]
          ]}
          closed
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Tex at={[a / 2, a / 2]} tex={`a^2`} anchor="middle" size={14} opacity={OPACITY.fg} />
        <Tex
          at={[a + b / 2, a + b / 2]}
          tex={`b^2`}
          anchor="middle"
          size={14}
          opacity={OPACITY.fg}
        />
        <Tex at={[a / 2, a + b / 2]} tex={'ab'} anchor="middle" size={13} opacity={OPACITY.fg} />
        <Tex at={[a + b / 2, a / 2]} tex={'ab'} anchor="middle" size={13} opacity={OPACITY.fg} />
        <Tex
          at={[a / 2, -0.5]}
          tex={`a=${a.toFixed(1)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[a + b / 2, -0.5]}
          tex={`b=${b.toFixed(1)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[total / 2, total + 0.55]}
          tex={`(a+b)^2 = a^2 + 2ab + b^2 = ${(total * total).toFixed(2)}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={a}
          y={-0.15}
          onChange={nx => setA(Math.max(0.4, Math.min(5, nx)))}
          constrain={nx => [Math.max(0.4, Math.min(5, nx)), -0.15]}
        />
        <DragHandle
          x={total}
          y={-0.15}
          onChange={nx => setB(Math.max(0.4, Math.min(5, nx - a)))}
          constrain={nx => [Math.max(a + 0.4, Math.min(a + 5, nx)), -0.15]}
        />
      </Plot>
    </div>
  )
}

// 13.2 Difference of squares drag a, b
export function DiffOfSquaresViz() {
  const [a, setA] = React.useState(5)
  const [b, setB] = React.useState(2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.7, 14]} yRange={[-1.4, 6.5]} width={520} height={300} pad={20}>
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
          strokeWidth={1.5}
        />
        <Tex at={[a + 0.5, a / 2]} tex={'\\to'} anchor="middle" size={18} opacity={OPACITY.dim} />
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
          strokeWidth={1.5}
        />
        <Tex
          at={[a / 2, a / 2 - 0.4]}
          tex={`a^2-b^2`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[a + 1.4 + (a + b) / 2, (a - b) / 2]}
          tex={`(a+b)(a-b)`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[a / 2, -0.7]}
          tex={`a=${a.toFixed(1)}`}
          anchor="middle"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[a - b / 2, a - b - 0.4]}
          tex={`b=${b.toFixed(1)}`}
          anchor="middle"
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[a + 1.4 + (a + b) / 2, a - b + 0.55]}
          tex={`= ${((a - b) * (a + b)).toFixed(2)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <DragHandle
          x={a}
          y={-0.4}
          onChange={nx => setA(Math.max(b + 0.4, Math.min(7, nx)))}
          constrain={nx => [Math.max(b + 0.4, Math.min(7, nx)), -0.4]}
        />
        <DragHandle
          x={a - b}
          y={-0.4}
          onChange={nx => setB(Math.max(0.2, Math.min(a - 0.2, a - nx)))}
          constrain={nx => [Math.max(0.2, Math.min(a - 0.2, nx)), -0.4]}
        />
      </Plot>
    </div>
  )
}

// 13.3 Pascal's triangle / binomial expansion slider n
export function PascalTriangleBinViz() {
  const [n, setN] = React.useState(4)
  const row = pascalRow(n)
  const rows = []
  for (let i = 0; i <= n; i++) rows.push(pascalRow(i))
  const rowH = 0.85,
    spacing = 0.95
  const pts = []
  rows.forEach((r, ri) => {
    const y = (n - ri) * rowH
    const startX = -((r.length - 1) * spacing) / 2
    r.forEach((v, ci) => pts.push({ x: startX + ci * spacing, y, v, ri }))
  })
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[-5, 5]}
        yRange={[-0.6, Math.max(7, n + 1) * rowH]}
        width={520}
        height={320}
        pad={16}
      >
        {pts.map((p, i) => (
          <Tex
            key={i}
            at={[p.x, p.y]}
            tex={String(p.v)}
            anchor="middle"
            size={13}
            opacity={p.ri === n ? OPACITY.fg : OPACITY.dim * 0.7}
          />
        ))}
        <Tex
          at={[0, -0.25]}
          tex={`(a+b)^{${n}} = ${row
            .map((v, k) => {
              const c = v === 1 && k > 0 && k < n ? '' : v === 1 && (k === 0 || k === n) ? '' : v
              const ap = n - k === 0 ? '' : n - k === 1 ? 'a' : `a^{${n - k}}`
              const bp = k === 0 ? '' : k === 1 ? 'b' : `b^{${k}}`
              return (k > 0 ? '+' : '') + c + ap + bp
            })
            .join('')}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider
        label="n"
        value={n}
        min={0}
        max={7}
        step={1}
        onChange={v => setN(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}
