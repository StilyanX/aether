// HCF AND LCM: viz monolith
// All viz take a `C` color object (fg / accent / dim / faint) from the consumer.
// Every viz is interactive: sliders recompute live, step-throughs reveal a process.
// Domain = Mathematics/arithmetic → hand-rolled SVG + HTML tables (approved stack).
//
// REFINE pass 2026-07-02 (ar.48–ar.56): file audited - strongest in the
// catalog; all arithmetic already exact-integer (gcd/lcm/factorize/bezout
// hand-verified: gcd(1560,676)=52; 168/180 table → HCF 12, LCM 2520,
// 12·2520 = 168·180 = 30240 ✓). Two fixes:
// - ar.56: tick labels at every multiple of gcd collided for coprime pairs
//   (g=1, span 24 ⇒ 49 labels at ~10 px pitch - 40 px rule); labels now
//   decimate to ≥40 px pitch while dots still mark every reachable value.
// - ar.50: caption claimed "HCF = product of shared primes" - wrong when a
//   shared prime carries exponent > 1 (8,4 ⇒ HCF 4 = 2², not 2); the code
//   was already correct (min exponents); wording fixed.
// SVG bottom-strip captions retained (computed live, in the caption band
// below each drawing - logged as the file's uniform readout convention).
// Engine (WebSearch 2026-07-02, Venn / factor-tree / algorithm-table
// classes): only banned dashboard stacks surfaced; hand-rolled SVG (B) and
// DOM tables stay. No swaps.
import React, { useState } from 'react'
import {
  FONT_CONTROL,
  FONT_FAMILY,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TINY,
  FONT_VALUE,
  LS_LABEL,
  LS_TIGHT,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from '../../../scale-tokens'
import { Slider, VizControls } from '../../../primitives'

// Shared helpers

const F = { fontFamily: FONT_FAMILY }

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
const lcm = (a, b) => (a / gcd(a, b)) * b

function factorize(n) {
  const f = {}
  let m = Math.abs(n)
  let d = 2
  while (d * d <= m) {
    while (m % d === 0) {
      f[d] = (f[d] || 0) + 1
      m /= d
    }
    d++
  }
  if (m > 1) f[m] = (f[m] || 0) + 1
  return f
}

// sorted [prime, exponent] pairs
const factorPairs = f =>
  Object.keys(f)
    .map(Number)
    .sort((a, b) => a - b)
    .map(p => [p, f[p]])

// superscript tspan for exponents inside <text>
const Sup = ({ e }) =>
  e > 1 ? (
    <tspan baselineShift="super" fontSize="0.7em">
      {e}
    </tspan>
  ) : null

// "2³ × 3 × 7" as an array of tspans, from [prime, exp] pairs
const factorTspans = pairs =>
  pairs.map(([p, e], i) => (
    <tspan key={p}>
      {i > 0 ? '  ×  ' : ''}
      {p}
      <Sup e={e} />
    </tspan>
  ))

// extended Euclid → { g, x, y } with g = x·a + y·b
function bezout(a, b) {
  let [or, r] = [a, b]
  let [os, s] = [1, 0]
  let [ot, t] = [0, 1]
  while (r !== 0) {
    const q = Math.floor(or / r)
    ;[or, r] = [r, or - q * r]
    ;[os, s] = [s, os - q * s]
    ;[ot, t] = [t, ot - q * t]
  }
  return { g: or, x: os, y: ot }
}

// division chain for the Euclidean algorithm
function euclidChain(a, b) {
  const steps = []
  let x = Math.max(a, b)
  let y = Math.min(a, b)
  let guard = 0
  while (y !== 0 && guard++ < 60) {
    const q = Math.floor(x / y)
    const r = x % y
    steps.push({ x, y, q, r })
    x = y
    y = r
  }
  return steps
}

// Shared controls

const SliderControl = ({ label, value, onChange, min, max, step = 1, display }) => (
  <Slider
    label={label}
    value={value}
    min={min}
    max={max}
    step={step}
    onChange={onChange}
    format={v => String(display != null ? display : v)}
  />
)

const StepControl = ({ step, total, setStep, C }) => {
  const btn = on => ({
    ...F,
    fontSize: FONT_LABEL,
    letterSpacing: LS_LABEL,
    padding: '6px 18px',
    background: 'transparent',
    cursor: on ? 'pointer' : 'default',
    border: `1px solid ${on ? C.dim : C.faint}`,
    color: on ? C.fg : C.faint,
    textTransform: 'uppercase'
  })
  return (
    <VizControls>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
        <button style={btn(step > 0)} onClick={() => step > 0 && setStep(step - 1)}>
          Prev
        </button>
        <span
          style={{ ...F, fontSize: FONT_LABEL, color: C.dim, minWidth: 48, textAlign: 'center' }}
        >
          {step + 1} / {total}
        </span>
        <button style={btn(step < total - 1)} onClick={() => step < total - 1 && setStep(step + 1)}>
          Next
        </button>
      </div>
    </VizControls>
  )
}

const Caption = ({ children, C }) => (
  <text
    fill={C.dim}
    fontSize={FONT_LABEL}
    textAnchor="middle"
    letterSpacing={LS_TIGHT}
    style={{ textTransform: 'uppercase', ...F }}
  >
    {children}
  </text>
)

// (1) HCL_SharedMultiplesLine: drag two periods, watch the LCM emerge
export function HCL_SharedMultiplesLine({ C }) {
  const [a, setA] = useState(4)
  const [b, setB] = useState(6)
  const L = lcm(a, b)

  const W = 580
  const H = 158
  const axisY = 74
  const padL = 40
  const padR = 26
  const toX = v => padL + (v / L) * (W - padL - padR)

  const multA = []
  const multB = []
  for (let k = a; k <= L; k += a) multA.push(k)
  for (let k = b; k <= L; k += b) multB.push(k)

  const Marker = ({ n, above }) => {
    const shared = n === L
    const cy = axisY + (above ? -20 : 20)
    return (
      <g>
        <circle
          cx={toX(n)}
          cy={cy}
          r={shared ? 11 : 7}
          fill={shared ? C.fg : 'var(--bg)'}
          stroke={C.fg}
          strokeWidth={shared ? 2 : 1}
          opacity={shared ? 1 : 0.7}
        />
        <text
          x={toX(n)}
          y={cy + 3.5}
          fill={shared ? 'var(--bg)' : C.fg}
          fontSize={shared ? 10 : 9}
          textAnchor="middle"
          fontWeight={shared ? 700 : 400}
          {...F}
        >
          {n}
        </text>
      </g>
    )
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', ...F }}
      >
        <line
          x1={toX(0)}
          y1={axisY}
          x2={toX(L)}
          y2={axisY}
          stroke={C.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={toX(0)}
          y={axisY + 4}
          fill={C.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          dx={-6}
          {...F}
        >
          0
        </text>
        {/* dashed connector where the two cycles coincide */}
        <line
          x1={toX(L)}
          y1={axisY - 30}
          x2={toX(L)}
          y2={axisY + 30}
          stroke={C.fg}
          strokeWidth={STROKE_SECONDARY}
          opacity={0.3}
          strokeDasharray="2 2"
        />
        <text x={16} y={axisY - 16} fill={C.dim} fontSize={FONT_SMALL} textAnchor="start" {...F}>
          ×{a}
        </text>
        <text x={16} y={axisY + 24} fill={C.dim} fontSize={FONT_SMALL} textAnchor="start" {...F}>
          ×{b}
        </text>
        {multA.map(n => (
          <Marker key={`a${n}`} n={n} above />
        ))}
        {multB.map(n => (
          <Marker key={`b${n}`} n={n} above={false} />
        ))}
        <Caption C={C}>
          <tspan
            x={W / 2}
            y={H - 8}
          >{`First shared multiple is the LCM · lcm(${a}, ${b}) = ${L}`}</tspan>
        </Caption>
      </svg>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <SliderControl label="First" value={a} onChange={setA} min={2} max={9} C={C} />
        <SliderControl label="Second" value={b} onChange={setB} min={2} max={9} C={C} />
      </div>
    </div>
  )
}

// (2) HCL_PrimeFactorVenn: live prime-factor Venn: intersection = HCF, union = LCM
export function HCL_PrimeFactorVenn({ C }) {
  const [a, setA] = useState(56)
  const [b, setB] = useState(96)
  const fa = factorize(a)
  const fb = factorize(b)
  const primes = [...new Set([...Object.keys(fa), ...Object.keys(fb)].map(Number))].sort(
    (x, y) => x - y
  )

  const leftOnly = []
  const shared = []
  const rightOnly = []
  primes.forEach(p => {
    const ea = fa[p] || 0
    const eb = fb[p] || 0
    if (ea && eb) shared.push([p, Math.min(ea, eb)])
    else if (ea) leftOnly.push([p, ea])
    else rightOnly.push([p, eb])
  })
  const H_ = shared.reduce((acc, [p, m]) => acc * p ** m, 1)
  const Lc = primes.reduce((acc, p) => acc * p ** Math.max(fa[p] || 0, fb[p] || 0), 1)

  const W = 560
  const H = 266
  const cy = 116
  const r = 104
  const cx1 = 196
  const cx2 = 364

  const stack = (items, cx, dxNudge = 0) =>
    items.map(([p, e], i) => {
      const y = cy - (items.length - 1) * 12 + i * 24
      return (
        <text
          key={p}
          x={cx + dxNudge}
          y={y}
          fill={C.fg}
          fontSize={FONT_CONTROL}
          textAnchor="middle"
          fontWeight={700}
          {...F}
        >
          {p}
          <Sup e={e} />
        </text>
      )
    })

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', ...F }}
      >
        <circle
          cx={cx1}
          cy={cy}
          r={r}
          fill={C.fg}
          fillOpacity={0.04}
          stroke={C.fg}
          strokeWidth={STROKE_PRIMARY}
          opacity={0.6}
        />
        <circle
          cx={cx2}
          cy={cy}
          r={r}
          fill={C.fg}
          fillOpacity={0.04}
          stroke={C.fg}
          strokeWidth={STROKE_PRIMARY}
          opacity={0.6}
        />

        <text
          x={cx1 - 70}
          y={26}
          fill={C.fg}
          fontSize={FONT_TEX}
          textAnchor="middle"
          fontWeight={700}
          {...F}
        >
          {a} = {factorTspans(factorPairs(fa))}
        </text>
        <text
          x={cx2 + 70}
          y={26}
          fill={C.fg}
          fontSize={FONT_TEX}
          textAnchor="middle"
          fontWeight={700}
          {...F}
        >
          {b} = {factorTspans(factorPairs(fb))}
        </text>

        {stack(leftOnly, cx1 - 48)}
        {stack(shared, (cx1 + cx2) / 2)}
        {stack(rightOnly, cx2 + 48)}

        <text
          x={(cx1 + cx2) / 2}
          y={cy + r - 14}
          fill={C.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          {...F}
        >
          intersection = HCF
        </text>

        <text
          x={W / 2}
          y={H - 34}
          fill={C.fg}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          opacity={0.85}
          {...F}
        >
          HCF = {H_} · LCM = {Lc}
        </text>
        <Caption C={C}>
          <tspan x={W / 2} y={H - 12}>
            Intersection = min exponents (HCF) · Union = max exponents (LCM)
          </tspan>
        </Caption>
      </svg>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <SliderControl label="First" value={a} onChange={setA} min={4} max={120} C={C} />
        <SliderControl label="Second" value={b} onChange={setB} min={4} max={120} C={C} />
      </div>
    </div>
  )
}

// (3) HCL_TwoFactorTrees: live factor trees; shared primes highlight
function buildSpine(n) {
  const spine = [n]
  const primes = []
  let m = n
  let guard = 0
  while (m > 1 && guard++ < 40) {
    let d = 2
    while (m % d !== 0) d++
    primes.push(d)
    m /= d
    if (m > 1) spine.push(m)
  }
  return { spine, primes } // spine.length === primes.length
}

export function HCL_TwoFactorTrees({ C }) {
  const [a, setA] = useState(84)
  const [b, setB] = useState(105)
  const ta = buildSpine(a)
  const tb = buildSpine(b)
  const setA_ = new Set(Object.keys(factorize(a)).map(Number))
  const setB_ = new Set(Object.keys(factorize(b)).map(Number))
  const common = [...setA_].filter(p => setB_.has(p)).sort((x, y) => x - y)
  const commonSet = new Set(common)
  const hcf = common.reduce((acc, p) => acc * p ** Math.min(factorize(a)[p], factorize(b)[p]), 1)

  const W = 580
  const dy = 42
  const y0 = 38
  const maxLen = Math.max(ta.spine.length, tb.spine.length)
  const H = y0 + maxLen * dy + 56
  const nodeR = 18

  const Node = ({ x, y, label, prime, hi }) => (
    <g>
      <circle
        cx={x}
        cy={y}
        r={nodeR}
        fill="var(--bg)"
        stroke={C.fg}
        strokeWidth={hi ? 2.5 : prime ? 1.8 : 1}
        opacity={hi ? 1 : prime ? 0.85 : 0.6}
      />
      <text
        x={x}
        y={y + 4}
        fill={C.fg}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        fontWeight={hi ? 700 : prime ? 600 : 400}
        opacity={hi ? 1 : 0.9}
        {...F}
      >
        {label}
      </text>
    </g>
  )
  const Edge = ({ x1, y1, x2, y2 }) => (
    <line
      x1={x1}
      y1={y1 + nodeR}
      x2={x2}
      y2={y2 - nodeR}
      stroke={C.dim}
      strokeWidth={1.1}
      opacity={0.5}
    />
  )

  // Tree renders as a spine going straight down; each step peels a prime leaf to the left.
  const Tree = ({ t, sx, leafDx }) => {
    const els = []
    t.spine.forEach((val, i) => {
      const y = y0 + i * dy
      const last = i === t.spine.length - 1
      const prime = t.primes[i]
      if (!last) {
        // edge down to next spine node
        els.push(<Edge key={`sp${i}`} x1={sx} y1={y} x2={sx} y2={y0 + (i + 1) * dy} />)
        // edge to prime leaf on the left
        els.push(<Edge key={`le${i}`} x1={sx} y1={y} x2={sx + leafDx} y2={y0 + (i + 1) * dy} />)
        els.push(
          <Node
            key={`lf${i}`}
            x={sx + leafDx}
            y={y0 + (i + 1) * dy}
            label={String(prime)}
            prime
            hi={commonSet.has(prime)}
          />
        )
        els.push(<Node key={`sn${i}`} x={sx} y={y} label={String(val)} prime={false} hi={false} />)
      } else {
        // last spine node IS the final prime
        els.push(
          <Node key={`sn${i}`} x={sx} y={y} label={String(val)} prime hi={commonSet.has(val)} />
        )
      }
    })
    return els
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', ...F }}
      >
        <Tree t={ta} sx={170} leafDx={-58} />
        <Tree t={tb} sx={410} leafDx={-58} />
        <text
          x={W / 2}
          y={H - 28}
          fill={C.fg}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          opacity={0.85}
          {...F}
        >
          {common.length
            ? `Shared primes ${common.join(', ')} → HCF = ${hcf}`
            : `No shared primes → HCF = 1 (coprime)`}
        </text>
        <Caption C={C}>
          <tspan x={W / 2} y={H - 10}>
            Bold circles are primes common to both · HCF = shared primes at their smaller exponents
          </tspan>
        </Caption>
      </svg>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <SliderControl label="First" value={a} onChange={setA} min={4} max={120} C={C} />
        <SliderControl label="Second" value={b} onChange={setB} min={4} max={120} C={C} />
      </div>
    </div>
  )
}

// (4) HCL_EuclidSteps: step through the Euclidean descent
export function HCL_EuclidSteps({ C }) {
  const [a, setA] = useState(1560)
  const [b, setB] = useState(676)
  const [step, setStep] = useState(99)

  const chain = euclidChain(a, b)
  const total = Math.max(chain.length, 1)
  const s = Math.min(step, total - 1)
  const g = chain.length ? chain[chain.length - 1].y : 0

  const head = {
    ...F,
    fontSize: FONT_SMALL,
    letterSpacing: LS_LABEL,
    textTransform: 'uppercase',
    padding: '6px 8px',
    textAlign: 'center',
    borderBottom: '1px solid var(--border-subtle)',
    color: C.dim
  }
  const cell = {
    ...F,
    fontSize: FONT_TEX,
    padding: '6px 12px',
    borderBottom: '1px solid var(--border-subtle)',
    color: C.fg
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }}
    >
      <table
        style={{
          width: '100%',
          maxWidth: 560,
          borderCollapse: 'collapse',
          border: '1px solid var(--border-subtle)',
          ...F
        }}
      >
        <thead>
          <tr>
            <th style={head}>Step</th>
            <th style={head}>Equation</th>
          </tr>
        </thead>
        <tbody>
          {chain.map((st, i) => {
            const shown = i <= s
            const isLast = st.r === 0
            const active = i === s
            return (
              <tr
                key={i}
                style={{
                  opacity: shown ? 1 : 0.15,
                  background: active ? 'var(--border-subtle)' : 'transparent'
                }}
              >
                <td
                  style={{ ...cell, textAlign: 'left', fontWeight: active || isLast ? 700 : 600 }}
                >
                  gcd({st.x}, {st.y})
                </td>
                <td style={{ ...cell, textAlign: 'right', fontWeight: isLast ? 700 : 400 }}>
                  {isLast
                    ? `${st.x} = ${st.q} × ${st.y} + 0  →  gcd = ${st.y}`
                    : `${st.x} = ${st.q} × ${st.y} + ${st.r}`}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {s === total - 1 && (
        <div
          style={{ ...F, fontSize: FONT_TEX, color: C.fg, textAlign: 'center', fontWeight: 700 }}
        >
          gcd({Math.max(a, b)}, {Math.min(a, b)}) = {g}
        </div>
      )}
      <p
        style={{
          ...F,
          fontSize: FONT_LABEL,
          color: C.dim,
          textTransform: 'uppercase',
          letterSpacing: LS_TIGHT,
          textAlign: 'center',
          margin: '2px 0'
        }}
      >
        Each step: gcd(a, b) = gcd(b, r) where a = q·b + r
      </p>
      <div
        style={{ width: '100%', maxWidth: 380, display: 'flex', flexDirection: 'column', gap: 10 }}
      >
        <StepControl step={s} total={total} setStep={setStep} C={C} />
        <div>
          <SliderControl
            label="First"
            value={a}
            onChange={v => {
              setA(v)
              setStep(0)
            }}
            min={20}
            max={2000}
            C={C}
          />
          <SliderControl
            label="Second"
            value={b}
            onChange={v => {
              setB(v)
              setStep(0)
            }}
            min={10}
            max={1500}
            C={C}
          />
        </div>
      </div>
    </div>
  )
}

// (5) HCL_ProductRuleGrid: equal-area tiling: a×b cells = HCF×LCM cells
export function HCL_ProductRuleGrid({ C }) {
  const [a, setA] = useState(8)
  const [b, setB] = useState(6)
  const g = gcd(a, b)
  const L = lcm(a, b)
  const product = a * b

  const W = 560
  const H = 250
  const baseY = 178
  // one cell size for BOTH rectangles → equal cell count is visibly equal area
  const cell = Math.min(180 / a, 180 / g, 130 / b, 130 / L)
  const showGrid = cell >= 4

  const Rect = ({ cx, cols, rows, topLabel }) => {
    const w = cols * cell
    const h = rows * cell
    const x = cx - w / 2
    const y = baseY - h
    const lines = []
    if (showGrid) {
      for (let i = 1; i < cols; i++)
        lines.push(
          <line
            key={`v${i}`}
            x1={x + i * cell}
            y1={y}
            x2={x + i * cell}
            y2={y + h}
            stroke={C.fg}
            strokeWidth={0.5}
            opacity={0.18}
          />
        )
      for (let j = 1; j < rows; j++)
        lines.push(
          <line
            key={`h${j}`}
            x1={x}
            y1={y + j * cell}
            x2={x + w}
            y2={y + j * cell}
            stroke={C.fg}
            strokeWidth={0.5}
            opacity={0.18}
          />
        )
    }
    return (
      <g>
        <text
          x={cx}
          y={28}
          fill={C.dim}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_TIGHT}
          style={{ textTransform: 'uppercase', ...F }}
        >
          {topLabel}
        </text>
        <rect
          x={x}
          y={y}
          width={w}
          height={h}
          fill={C.fg}
          fillOpacity={0.07}
          stroke={C.fg}
          strokeWidth={STROKE_PRIMARY}
          opacity={0.8}
        />
        {lines}
        <text
          x={cx}
          y={baseY + 18}
          fill={C.fg}
          fontSize={FONT_TEX}
          textAnchor="middle"
          fontWeight={700}
          {...F}
        >
          {cols} × {rows}
        </text>
      </g>
    )
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', ...F }}
      >
        <Rect cx={150} cols={a} rows={b} topLabel="a × b" />
        <text
          x={W / 2}
          y={baseY - 50}
          fill={C.fg}
          fontSize={FONT_VALUE}
          textAnchor="middle"
          opacity={0.6}
          {...F}
        >
          =
        </text>
        <Rect cx={410} cols={g} rows={L} topLabel="HCF × LCM" />
        <text
          x={W / 2}
          y={baseY + 18}
          fill={C.fg}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          opacity={0.85}
          {...F}
        >
          both = {product} cells
        </text>
        <Caption C={C}>
          <tspan
            x={W / 2}
            y={H - 8}
          >{`a × b = HCF × LCM   ·   ${a} × ${b} = ${g} × ${L} = ${product}`}</tspan>
        </Caption>
      </svg>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <SliderControl label="First (a)" value={a} onChange={setA} min={2} max={12} C={C} />
        <SliderControl label="Second (b)" value={b} onChange={setB} min={2} max={12} C={C} />
      </div>
    </div>
  )
}

// (6) HCL_MethodCompare: live prime-power table (min → HCF, max → LCM)
export function HCL_MethodCompare({ C }) {
  const [a, setA] = useState(168)
  const [b, setB] = useState(180)
  const fa = factorize(a)
  const fb = factorize(b)
  const primes = [...new Set([...Object.keys(fa), ...Object.keys(fb)].map(Number))].sort(
    (x, y) => x - y
  )
  const rows = primes.map(p => {
    const ea = fa[p] || 0
    const eb = fb[p] || 0
    return { p, ea, eb, min: Math.min(ea, eb), max: Math.max(ea, eb) }
  })
  const H_ = rows.reduce((acc, r) => acc * r.p ** r.min, 1)
  const Lc = rows.reduce((acc, r) => acc * r.p ** r.max, 1)
  const product = a * b

  const cell = {
    ...F,
    fontSize: FONT_TEX,
    padding: '6px 8px',
    textAlign: 'center',
    borderBottom: `1px solid var(--border-subtle)`,
    color: C.fg
  }
  const head = {
    ...F,
    fontSize: FONT_SMALL,
    letterSpacing: LS_LABEL,
    textTransform: 'uppercase',
    padding: '6px 8px',
    textAlign: 'center',
    color: C.dim
  }
  const Exp = ({ p, e }) => (
    <>
      {e === 0 ? (
        <span style={{ opacity: 0.35 }}>-</span>
      ) : (
        <>
          {p}
          {e > 1 && <sup>{e}</sup>}
        </>
      )}
    </>
  )

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }}
    >
      <table
        style={{
          width: '100%',
          maxWidth: 480,
          borderCollapse: 'collapse',
          border: `1px solid var(--border-default)`
        }}
      >
        <thead>
          <tr>
            <th style={head}>Prime</th>
            <th style={head}>in {a}</th>
            <th style={head}>in {b}</th>
            <th style={head}>min → HCF</th>
            <th style={head}>max → LCM</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.p}>
              <td style={{ ...cell, fontWeight: 700 }}>{r.p}</td>
              <td style={cell}>{r.ea || <span style={{ opacity: 0.35 }}>0</span>}</td>
              <td style={cell}>{r.eb || <span style={{ opacity: 0.35 }}>0</span>}</td>
              <td style={cell}>
                <Exp p={r.p} e={r.min} />
              </td>
              <td style={cell}>
                <Exp p={r.p} e={r.max} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ ...F, fontSize: FONT_TEX, color: C.fg, textAlign: 'center', lineHeight: 1.6 }}>
        <div>
          <strong>HCF = {H_}</strong> &nbsp;·&nbsp; <strong>LCM = {Lc}</strong>
        </div>
        <div
          style={{
            fontSize: FONT_LABEL,
            color: C.dim,
            textTransform: 'uppercase',
            letterSpacing: LS_TIGHT
          }}
        >
          check: {a} × {b} = {product} = {H_} × {Lc} {H_ * Lc === product ? '✓' : ''}
        </div>
      </div>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <SliderControl label="First" value={a} onChange={setA} min={4} max={200} C={C} />
        <SliderControl label="Second" value={b} onChange={setB} min={4} max={200} C={C} />
      </div>
    </div>
  )
}

// (7) HCL_DivisorPairs: every factor pair of n drawn as an equal-area rectangle
export function HCL_DivisorPairs({ C }) {
  const [n, setN] = useState(18)
  const pairs = []
  for (let d = 1; d * d <= n; d++) {
    if (n % d === 0) pairs.push([d, n / d])
  }
  const divisorCount = pairs.reduce((acc, [d, e]) => acc + (d === e ? 1 : 2), 0)

  const W = 560
  const H = 210
  const baseY = 150
  const unit = 96 / n // tallest rect (1 × n) → 96px
  const widthScale = 4 // widen rects so thin ones stay visible; area stays constant

  const slotW = (W - 40) / pairs.length
  const x0 = 20

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', ...F }}
      >
        <text
          x={W / 2}
          y={20}
          fill={C.dim}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_TIGHT}
          style={{ textTransform: 'uppercase', ...F }}
        >
          {`Factor pairs of ${n} · every rectangle has area ${n}`}
        </text>
        {pairs.map(([a, b], i) => {
          const cx = x0 + i * slotW + slotW / 2
          const rw = a * unit * widthScale
          const rh = b * unit
          const rx = cx - rw / 2
          const ry = baseY - rh
          return (
            <g key={i}>
              <rect
                x={rx}
                y={ry}
                width={rw}
                height={rh}
                fill={C.fg}
                fillOpacity={0.06}
                stroke={C.fg}
                strokeWidth={1.4}
                opacity={0.8}
              />
              <text
                x={cx}
                y={baseY + 18}
                fill={C.fg}
                fontSize={FONT_LABEL}
                textAnchor="middle"
                fontWeight={700}
                {...F}
              >
                {a} × {b}
              </text>
            </g>
          )
        })}
        <Caption C={C}>
          <tspan
            x={W / 2}
            y={H - 8}
          >{`Divisors come in pairs · ${n} has ${divisorCount} divisors`}</tspan>
        </Caption>
      </svg>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <SliderControl label="Number" value={n} onChange={setN} min={6} max={48} C={C} />
      </div>
    </div>
  )
}

// (8) HCL_CoprimeVenn: coprime test: empty intersection vs shared factors
export function HCL_CoprimeVenn({ C }) {
  const [a, setA] = useState(8)
  const [b, setB] = useState(15)
  const g = gcd(a, b)
  const coprime = g === 1
  const fa = factorize(a)
  const fb = factorize(b)
  const primes = [...new Set([...Object.keys(fa), ...Object.keys(fb)].map(Number))].sort(
    (x, y) => x - y
  )

  const leftOnly = []
  const shared = []
  const rightOnly = []
  primes.forEach(p => {
    const ea = fa[p] || 0
    const eb = fb[p] || 0
    if (ea && eb) shared.push([p, Math.min(ea, eb)])
    else if (ea) leftOnly.push([p, ea])
    else rightOnly.push([p, eb])
  })

  const W = 560
  const H = 244
  const cy = 110
  const r = 92
  // overlapping when not coprime, tangent (just touching) when coprime
  const gap = coprime ? r : r * 0.62
  const cx1 = W / 2 - gap
  const cx2 = W / 2 + gap

  const stack = (items, cx) =>
    items.map(([p, e], i) => {
      const y = cy - (items.length - 1) * 11 + i * 22
      return (
        <text
          key={p}
          x={cx}
          y={y}
          fill={C.fg}
          fontSize={FONT_CONTROL}
          textAnchor="middle"
          fontWeight={700}
          {...F}
        >
          {p}
          <Sup e={e} />
        </text>
      )
    })

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', ...F }}
      >
        <circle
          cx={cx1}
          cy={cy}
          r={r}
          fill={C.fg}
          fillOpacity={0.04}
          stroke={C.fg}
          strokeWidth={STROKE_PRIMARY}
          opacity={0.65}
        />
        <circle
          cx={cx2}
          cy={cy}
          r={r}
          fill={C.fg}
          fillOpacity={0.04}
          stroke={C.fg}
          strokeWidth={STROKE_PRIMARY}
          opacity={0.65}
        />

        {stack(leftOnly, coprime ? cx1 : cx1 - 34)}
        {coprime ? (
          <text x={W / 2} y={cy + 4} fill={C.dim} fontSize={FONT_VALUE} textAnchor="middle" {...F}>
            ∅
          </text>
        ) : (
          stack(shared, W / 2)
        )}
        {stack(rightOnly, coprime ? cx2 : cx2 + 34)}

        <text
          x={cx1}
          y={cy + r + 22}
          fill={C.fg}
          fontSize={FONT_TEX}
          textAnchor="middle"
          fontWeight={700}
          {...F}
        >
          {a}
        </text>
        <text
          x={cx2}
          y={cy + r + 22}
          fill={C.fg}
          fontSize={FONT_TEX}
          textAnchor="middle"
          fontWeight={700}
          {...F}
        >
          {b}
        </text>

        <text
          x={W / 2}
          y={24}
          fill={C.fg}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          opacity={0.85}
          letterSpacing={LS_TIGHT}
          style={{ textTransform: 'uppercase', ...F }}
        >
          {coprime ? `gcd(${a}, ${b}) = 1 · coprime` : `gcd(${a}, ${b}) = ${g} · shared factors`}
        </text>
        <Caption C={C}>
          <tspan x={W / 2} y={H - 10}>
            Empty intersection = coprime · Shared primes = common factors
          </tspan>
        </Caption>
      </svg>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <SliderControl label="First" value={a} onChange={setA} min={2} max={60} C={C} />
        <SliderControl label="Second" value={b} onChange={setB} min={2} max={60} C={C} />
      </div>
    </div>
  )
}

// (9) HCL_BezoutCombinationLine: every value of ax + by is a multiple of gcd
export function HCL_BezoutCombinationLine({ C }) {
  const [a, setA] = useState(6)
  const [b, setB] = useState(4)
  const g = gcd(a, b)
  const bz = bezout(a, b)

  const span = Math.max(a, b) * 2
  const xMin = -span
  const xMax = span
  const W = 580
  const H = 188
  const axisY = 104
  const padL = 30
  const padR = 30
  const toX = v => padL + ((v - xMin) / (xMax - xMin)) * (W - padL - padR)

  const combos = new Set()
  for (let x = -6; x <= 6; x++) {
    for (let y = -6; y <= 6; y++) {
      const v = a * x + b * y
      if (v >= xMin && v <= xMax) combos.add(v)
    }
  }
  const positives = [...combos].filter(v => v > 0)
  const smallestPos = positives.length ? Math.min(...positives) : g

  const ticks = []
  for (let n = xMin; n <= xMax; n++) ticks.push(n)
  // 40 px rule: label multiples of g, decimated so adjacent labels sit ≥ 40 px
  // apart (px per unit = (W − pads)/(2·span); dots still mark every hit)
  const pxPerUnit = (W - padL - padR) / (xMax - xMin)
  const labelStep = g * Math.max(1, Math.ceil(40 / (pxPerUnit * g)))

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', ...F }}
      >
        <text
          x={padL}
          y={22}
          fill={C.dim}
          fontSize={FONT_LABEL}
          textAnchor="start"
          letterSpacing={LS_TIGHT}
          style={{ textTransform: 'uppercase', ...F }}
        >
          Values of {a}x + {b}y
        </text>
        <line
          x1={toX(xMin)}
          y1={axisY}
          x2={toX(xMax)}
          y2={axisY}
          stroke={C.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        {ticks.map(n => {
          const hit = combos.has(n)
          const isKey = n === smallestPos || n === 0
          const showLabel = n % labelStep === 0 || n === smallestPos
          return (
            <g key={n}>
              <line
                x1={toX(n)}
                y1={axisY - 4}
                x2={toX(n)}
                y2={axisY + 4}
                stroke={C.dim}
                strokeWidth={STROKE_SECONDARY}
                opacity={0.35}
              />
              {showLabel && (
                <text
                  x={toX(n)}
                  y={axisY + 18}
                  fill={C.fg}
                  fontSize={FONT_TINY}
                  textAnchor="middle"
                  opacity={hit ? 0.6 : 0.25}
                  {...F}
                >
                  {n}
                </text>
              )}
              {hit && (
                <circle
                  cx={toX(n)}
                  cy={axisY - 26}
                  r={isKey ? 8 : 5}
                  fill={isKey ? C.fg : 'var(--bg)'}
                  stroke={C.fg}
                  strokeWidth={isKey ? 2 : 1}
                  opacity={isKey ? 1 : 0.65}
                />
              )}
            </g>
          )
        })}
        <text
          x={toX(smallestPos)}
          y={axisY - 28}
          fill={C.fg}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          fontWeight={700}
          {...F}
        >
          gcd = {g}
        </text>
      </svg>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <SliderControl label="First (a)" value={a} onChange={setA} min={2} max={12} C={C} />
        <SliderControl label="Second (b)" value={b} onChange={setB} min={2} max={12} C={C} />
      </div>
    </div>
  )
}
