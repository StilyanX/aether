// DIRECT AND INVERSE PROPORTION
// Visualizations for direct proportion (y = kx), inverse proportion (y = k/x),
// the unit-rate method, and foreign exchange conversion.
// Each viz takes a `C` color object from useVizColors().
//
// REFINE pass 2026-07-02:
// - ar.31/ar.35: sample points and curve labels sat OFF-FRAME for most of the
//   k range (y = kx labels pinned at x = 6–8 exit the top for k ≥ 2) - labels
//   now anchor dynamically inside the fixed frame; readouts moved below.
// - ar.33/ar.34: "bar models" drew no bars (loose points / corner dots) and
//   center-anchored LaTeX at x = 0 hung half off-frame; ar.34 printed a raw
//   float ("4.285714285714286 days") - days are now exact reduced fractions.
// - ar.36: was a Mafs canvas used purely as a text panel (forbidden mode 4) -
//   rebuilt as DOM; conversion computed in exact cents.
// Engine (WebSearch 2026-07-02, proportion-curve / strip-diagram classes):
// only banned dashboard stacks surfaced - Mafs (A) stays for the coordinate
// plots and true-scale strip diagrams; DOM is the correct form for the
// calculator-style converter. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.

import React, { useState } from 'react'
import { Mafs, Coordinates, Plot, Point, Text, LaTeX, Polygon } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import {
  FONT_BODY,
  FONT_FAMILY,
  FONT_LABEL,
  FONT_TINY,
  LS_CONTROL,
  LS_MEDIUM
} from '../../../scale-tokens'

// Readout row under the canvas - house convention (values never on canvas).
const READOUT_ROW = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px 28px',
  justifyContent: 'center',
  marginTop: 12,
  fontFamily: FONT_FAMILY,
  fontSize: FONT_LABEL,
  letterSpacing: LS_CONTROL
}

const gcdInt = (a, b) => {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) {
    const t = a % b
    a = b
    b = t
  }
  return a
}
// integers and exact halves print clean; anything else 2 dp (slider steps
// keep every value in this file dyadic, so no float dust reaches a display)
const fmtNum = v =>
  Number.isInteger(v) ? String(v) : Number.isInteger(v * 2) ? v.toFixed(1) : v.toFixed(2)

// (1) DirectProportionLine - ar.31
// y = kx through the origin on a FIXED frame; sample points (1, k) → (2, 2k)
// stay in-frame for every k ∈ [0.5, 5]; the curve tag hugs the line inside
// the frame instead of exiting the top.
export function DirectProportionLine({ C }) {
  const [k, setK] = useState(2)
  const x1 = 1
  const x2 = 2
  const y1 = k * x1
  const y2 = k * x2
  const xLab = Math.min(8.2, 10.4 / k) // keep the tag inside y ≤ 11.2

  return (
    <>
      <Mafs viewBox={{ x: [-0.5, 11], y: [-0.5, 12] }} height={260} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: x => (x === 0 ? '' : x), lines: 2 }}
          yAxis={{ labels: y => (y === 0 ? '' : y), lines: 2 }}
        />
        <Plot.OfX y={x => k * x} color={C.fg} />
        <Point x={x1} y={y1} color={C.dim} />
        <Point x={x2} y={y2} color={C.fg} />
        <LaTeX at={[x1 + 0.55, y1 + 0.75]} tex={`(1,\\,${fmtNum(y1)})`} color={C.dim} />
        <LaTeX at={[x2 + 0.55, y2 + 0.75]} tex={`(2,\\,${fmtNum(y2)})`} color={C.fg} />
        <LaTeX at={[xLab, k * xLab + 0.8]} tex={`y = ${fmtNum(k)}x`} color={C.fg} />
      </Mafs>
      <div
        aria-label="Direct proportion readout: doubling x doubles y, ratio constant"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`(1,\\,${fmtNum(y1)}) \\to (2,\\,${fmtNum(y2)})`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\tfrac{y}{x} = k = ${fmtNum(k)}\\ \\text{at both points}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          double x, y doubles
        </span>
      </div>
      <Slider
        label="k"
        value={k}
        min={0.5}
        max={5}
        step={0.5}
        onChange={v => setK(Math.round(v * 2) / 2)}
        format={v => v.toFixed(1)}
      />
    </>
  )
}

// (2) InverseProportionCurve - ar.32
// y = k/x for x > 0 on a fixed frame; the readout carries the invariant that
// defines inverse proportion: x·y is the SAME at both marked points.
export function InverseProportionCurve({ C }) {
  const [k, setK] = useState(12)
  const x1 = 2
  const x2 = 4
  const y1 = k / x1 // k is even ⇒ exact
  const y2 = k / x2 // k/4 ∈ {1, 1.5, 2, …} - dyadic, exact

  return (
    <>
      <Mafs viewBox={{ x: [0.2, 12], y: [-0.5, 16] }} height={280} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: x => (x % 2 === 0 ? x : ''), lines: 2 }}
          yAxis={{ labels: y => (y % 4 === 0 ? y : ''), lines: 4 }}
        />
        <Plot.OfX y={x => (x > 0.15 ? k / x : undefined)} color={C.fg} />
        <Point x={x1} y={y1} color={C.dim} />
        <Point x={x2} y={y2} color={C.fg} />
        <LaTeX at={[x1 + 0.75, y1 + 0.95]} tex={`(2,\\,${fmtNum(y1)})`} color={C.dim} />
        <LaTeX at={[x2 + 0.75, y2 + 0.95]} tex={`(4,\\,${fmtNum(y2)})`} color={C.fg} />
        <LaTeX at={[9, k / 9 + 1.2]} tex={`y = \\tfrac{${k}}{x}`} color={C.fg} />
      </Mafs>
      <div
        aria-label="Inverse proportion readout: doubling x halves y, product constant"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`x_1 y_1 = 2 \\cdot ${fmtNum(y1)} = ${k}`} />
        </span>
        <span>
          <KatexInline tex={`x_2 y_2 = 4 \\cdot ${fmtNum(y2)} = ${k}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          double x, y halves; the product never moves
        </span>
      </div>
      <Slider
        label="k"
        value={k}
        min={4}
        max={30}
        step={2}
        onChange={v => setK(Math.round(v / 2) * 2)}
        format={v => v.toFixed(0)}
      />
    </>
  )
}

// (3) UnitRateBarModel - ar.33
// The unit-rate method as an actual bar model on ONE true litre scale
// (0–40 L): the known 11 L bar, the 1 L unit bar, and the live bar. Length is
// proportional to litres - and, at a constant rate, to cost. Exact cents:
// $20.46/11 L = 186¢/L exactly (11 × 186 = 2046).
export function UnitRateBarModel({ C }) {
  const [litres, setLitres] = useState(27)
  const RATE_C = 186 // cents per litre - exact
  const costC = RATE_C * litres // exact integer cents
  const W = 10
  const BAR = 0.62
  const sx = v => (v / 40) * W // shared true scale: 40 L spans the bar area
  const money = c => (c / 100).toFixed(2) // integer cents ⇒ exact display

  const rows = [
    { y: 2.3, L: 11, cents: 2046, fill: 0.16, ink: C.dim },
    { y: 1.15, L: 1, cents: 186, fill: 0.5, ink: C.fg },
    { y: 0, L: litres, cents: costC, fill: 0.3, ink: C.fg }
  ]

  return (
    <>
      <Mafs
        viewBox={{ x: [-0.3, W + 3.4], y: [-1.15, 3.35] }}
        height={230}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* litre scale under the bars - declares the shared axis */}
        <Text x={0} y={-0.62} size={FONT_LABEL} color={C.dim} attach="e">
          0
        </Text>
        {[10, 20, 30, 40].map(v => (
          <React.Fragment key={v}>
            <Text x={sx(v)} y={-0.62} size={FONT_LABEL} color={C.dim}>
              {v}
            </Text>
            <Point x={sx(v)} y={-0.32} color={C.faint} />
          </React.Fragment>
        ))}
        <Text x={W + 1.05} y={-0.62} size={FONT_LABEL} color={C.dim}>
          litres
        </Text>
        {rows.map((r, i) => (
          <React.Fragment key={i}>
            <Polygon
              points={[
                [0, r.y],
                [sx(r.L), r.y],
                [sx(r.L), r.y + BAR],
                [0, r.y + BAR]
              ]}
              color={r.ink}
              fillOpacity={r.fill}
            />
            <LaTeX
              at={[sx(r.L) + 1.7, r.y + BAR / 2]}
              tex={`${r.L}\\,\\text{L} \\;\\to\\; \\$${money(r.cents)}`}
              color={r.ink}
            />
          </React.Fragment>
        ))}
      </Mafs>
      <div
        aria-label="Unit rate readout: divide to the unit, multiply back out, exact cents"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'\\$20.46 \\div 11 = \\$1.86/\\text{L}'} />
        </span>
        <span>
          <KatexInline tex={`\\$1.86 \\times ${litres} = \\$${money(costC)}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          one shared scale: length ∝ litres ∝ cost
        </span>
      </div>
      <Slider
        label="litres"
        value={litres}
        min={1}
        max={40}
        step={1}
        onChange={v => setLitres(Math.round(v))}
        format={v => `${Math.round(v)} L`}
      />
    </>
  )
}

// (4) HorsesHayBarModel - ar.34
// Fixed hay = 30 horse-days, drawn as a fixed strip split into one column per
// horse: fewer horses ⇒ wider shares ⇒ more days (width ∝ days). Days are
// shown as EXACT reduced fractions (30/7 days, not 4.285714285714286).
export function HorsesHayBarModel({ C }) {
  const [horses, setHorses] = useState(3)
  const TOTAL = 5 * 6 // 30 horse-days
  const exactDays = TOTAL % horses === 0
  const g = gcdInt(TOTAL, horses)
  const dNum = TOTAL / g
  const dDen = horses / g
  const daysTex = dDen === 1 ? `${dNum}` : `\\tfrac{${dNum}}{${dDen}}`
  const W = 10
  const H = 0.9
  const stepW = W / horses

  return (
    <>
      <Mafs
        viewBox={{ x: [-0.3, W + 0.3], y: [-0.6, 1.55] }}
        height={170}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {Array.from({ length: horses }).map((_, i) => {
          const x0 = i * stepW
          const x1 = (i + 1) * stepW
          return (
            <React.Fragment key={i}>
              <Polygon
                points={[
                  [x0, 0],
                  [x1, 0],
                  [x1, H],
                  [x0, H]
                ]}
                color={C.dim}
                fillOpacity={i === 0 ? 0.28 : 0.09}
              />
              <Text x={(x0 + x1) / 2} y={H / 2} size={FONT_LABEL} color={i === 0 ? C.fg : C.dim}>
                {`H${i + 1}`}
              </Text>
            </React.Fragment>
          )
        })}
        <Text x={W / 2} y={1.28} size={FONT_LABEL} color={C.dim}>
          same hay, split per horse: width ∝ days it lasts
        </Text>
      </Mafs>
      <div
        aria-label="Inverse proportion readout: horses times days is the fixed hay supply"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`${horses}\\ \\text{horses} \\Rightarrow ${daysTex}${exactDays ? '' : ` \\approx ${(TOTAL / horses).toFixed(2)}`}\\ \\text{days}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`x \\cdot y = ${horses} \\cdot ${daysTex} = ${TOTAL}\\ \\text{horse-days}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          fixed total: more horses, fewer days
        </span>
      </div>
      <Slider
        label="horses"
        value={horses}
        min={1}
        max={10}
        step={1}
        onChange={v => setHorses(Math.round(v))}
        format={v => `${Math.round(v)} horses`}
      />
    </>
  )
}

// (5) DirectVsInversePlots - ar.35
// Side-by-side y = kx and y = k/x under ONE k slider. The old fixed-position
// curve tags sat off-frame for the whole k range; both now anchor inside
// their frames. The defining invariants (y/x = k vs x·y = k) live below.
export function DirectVsInversePlots({ C }) {
  const [k, setK] = useState(6)
  const xD = Math.min(7.5, 9.2 / k) // direct tag stays inside y ≤ 10.1

  return (
    <>
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Mafs viewBox={{ x: [-0.5, 10], y: [-0.5, 11] }} height={220} preserveAspectRatio={false}>
            <Coordinates.Cartesian
              xAxis={{ labels: x => (x % 2 === 0 && x > 0 ? x : ''), lines: 2 }}
              yAxis={{ labels: y => (y % 2 === 0 && y > 0 ? y : ''), lines: 2 }}
            />
            <Plot.OfX y={x => k * x} color={C.fg} />
            <LaTeX at={[xD + 1.1, k * xD + 0.35]} tex={`y=${k}x`} color={C.fg} />
          </Mafs>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Mafs viewBox={{ x: [0.2, 10], y: [-0.5, 11] }} height={220} preserveAspectRatio={false}>
            <Coordinates.Cartesian
              xAxis={{ labels: x => (x % 2 === 0 && x > 0 ? x : ''), lines: 2 }}
              yAxis={{ labels: y => (y % 2 === 0 && y > 0 ? y : ''), lines: 2 }}
            />
            <Plot.OfX y={x => (x > 0.15 ? k / x : undefined)} color={C.dim} />
            <LaTeX at={[7, k / 7 + 1]} tex={`y=\\tfrac{${k}}{x}`} color={C.dim} />
          </Mafs>
        </div>
      </div>
      <div
        aria-label="Direct versus inverse readout: the two invariants under one k"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\text{direct: } \\tfrac{y}{x} = k = ${k}`} />
        </span>
        <span>
          <KatexInline tex={`\\text{inverse: } x\\,y = k = ${k}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          double x, y doubles vs y halves
        </span>
      </div>
      <Slider
        label="k"
        value={k}
        min={2}
        max={18}
        step={1}
        onChange={v => setK(Math.round(v))}
        format={v => v.toFixed(0)}
      />
    </>
  )
}

// (6) ExchangeRateConverter - ar.36
// REBUILT 2026-07-02: was a Mafs canvas holding four LaTeX text rows,
// center-anchored at x = 0 so every row hung half off-frame - a text panel,
// not a plot (forbidden mode 4). Now DOM: currency buttons + a computation
// stack; conversion computed in exact cents. Uses the fixed 7-row
// exchange-rate table from the source text.
const RATES = [
  { code: 'ARS', name: 'Argentine peso', rate: 3.79 },
  { code: 'AUD', name: 'Australian dollar', rate: 1.13 },
  { code: 'EUR', name: 'Euro', rate: 0.7 },
  { code: 'INR', name: 'Indian rupee', rate: 46.5 },
  { code: 'JPY', name: 'Japanese yen', rate: 91.2 },
  { code: 'KWD', name: 'Kuwaiti dinar', rate: 0.29 },
  { code: 'GBP', name: 'British pound', rate: 0.63 }
]
const RATES_MAP = Object.fromEntries(RATES.map(r => [r.code, r]))

export function ExchangeRateConverter({ C }) {
  const [dollars, setDollars] = useState(100)
  const [selected, setSelected] = useState('EUR')

  const entry = RATES_MAP[selected]
  // exact cents: dollars is an integer and rates have ≤ 2 decimals
  const converted = (Math.round(dollars * entry.rate * 100) / 100).toFixed(2)

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          marginBottom: 10,
          fontFamily: FONT_FAMILY,
          fontSize: FONT_LABEL,
          textTransform: 'uppercase',
          letterSpacing: LS_MEDIUM
        }}
      >
        {RATES.map(r => (
          <button
            key={r.code}
            onClick={() => setSelected(r.code)}
            style={{
              background: 'transparent',
              border: `1px solid ${r.code === selected ? 'var(--border-default)' : 'var(--border-subtle)'}`,
              color: 'var(--text-primary)',
              padding: '4px 10px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              letterSpacing: 'inherit',
              textTransform: 'inherit',
              opacity: r.code === selected ? 1 : 0.55
            }}
          >
            {r.code}
          </button>
        ))}
      </div>
      <div
        aria-label="Exchange conversion: the rate is the constant of a direct proportion"
        style={{
          border: `1px solid ${C.faint}`,
          background: '#000',
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          fontFamily: FONT_FAMILY,
          color: C.fg
        }}
      >
        <div style={{ fontSize: FONT_LABEL, opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\$1 = ${entry.rate}\\ \\text{${selected}}\\quad\\Rightarrow\\quad y = ${entry.rate}\\,x`}
          />
        </div>
        <div style={{ fontSize: FONT_BODY }}>
          <KatexInline
            tex={`\\$${dollars} \\times ${entry.rate} = ${converted}\\ \\text{${selected}}`}
          />
        </div>
        <div
          style={{
            fontSize: FONT_TINY,
            letterSpacing: LS_CONTROL,
            textTransform: 'uppercase',
            opacity: OPACITY.dim
          }}
        >
          {entry.name}, direct proportion, k = {entry.rate}
        </div>
      </div>
      <Slider
        label="US dollars"
        value={dollars}
        min={1}
        max={500}
        step={1}
        onChange={v => setDollars(Math.round(v))}
        format={v => `$${Math.round(v)}`}
      />
    </>
  )
}
