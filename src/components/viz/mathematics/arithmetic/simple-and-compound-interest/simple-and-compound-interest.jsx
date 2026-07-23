// SIMPLE AND COMPOUND INTEREST
// Mafs-driven viz for the Financial Applications unit.
//
// REFINE pass 2026-07-03 (simple-and-compound-interest, ar.158–161):
// - Convention breach FIXED across the file: every label was size={24}
//   (house max FONT_TEX = 13); all formulas/values were on the canvas as plain
//   text ("I = 400 × 5 × T ÷ 100", "A = 500 × 1.10ⁿ", "×1.10", "$665.50",
//   "Total tax … | Effective rate …"). Relational math → KatexInline readout
//   rows in LaTeX (rule 11, never plain text); only diagram-integral readings
//   (ladder-rung dollar amounts, bar band tags) stay on canvas at FONT_LABEL.
// - SCI.1 SimpleInterestNumberLine - mode-2 auto-normalized y (yMax = maxI·1.2;
//   my = i/yMax) rescaled per drag so the line looked identical for every P,R.
//   FIXED: a DECLARED dollar axis (0…$420, ticks $100) in TRUE coordinates -
//   bigger P·R now draws a genuinely steeper line; ranges trimmed
//   (P 100–1000, R 1–10) so the whole family stays in frame.
// - SCI.3 CompoundingFrequencyComparison - mode-2 auto-normalized y
//   (yMax = annual¹⁰·1.15) hid that frequency changes the balance. FIXED: a
//   DECLARED log₁₀ growth-FACTOR axis (ar.47 precedent) - both curves become
//   straight lines from the origin, monthly steeper than annual, so the
//   frequency gap fans open honestly; P now only scales the readout dollars.
// - SCI.4 TieredTaxBracketBar - weight-14 lines drawn AS bars → real Polygons;
//   rebuilt as ONE stacked bar (allowance | 20% band | 40% band) whose segment
//   lengths sum to gross (part-whole honesty). Summary → readout.
// - SCI.2 CompoundMultiplierLadder - kept as the step ladder (right engine);
//   tokens + readout; the ×multiplier step tags stay (diagram-integral).
// Engine (WebSearch 2026-07-02 growth/exponential gate, reused): only banned
// dashboard stacks surfaced - Mafs (A) plots + hand ladder/bar stay.
import { useState } from 'react'
import { Mafs, Coordinates, Plot, Point, Text, Line, Polygon } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import {
  FONT_AXIS,
  FONT_LABEL,
  FONT_SMALL,
  FONT_FAMILY,
  LS_CONTROL,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from '../../../scale-tokens'

const SLIDER_ROW = {
  display: 'flex',
  gap: 16,
  justifyContent: 'center',
  marginTop: 8,
  flexWrap: 'wrap'
}
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

// Plain-text money for on-canvas Text nodes.
const money = v => (v % 1 === 0 ? `$${v.toLocaleString()}` : `$${v.toFixed(2)}`)
// LaTeX-safe money: a bare '$' is illegal in KaTeX math mode, so escape it.
const texMoney = v => '\\$' + (v % 1 === 0 ? v.toLocaleString() : v.toFixed(2))

// SCI.1: Simple Interest - linear growth of I = PRT/100 on a fixed dollar axis.
export function SimpleInterestNumberLine({ C }) {
  const [P, setP] = useState(400)
  const [R, setR] = useState(5)
  const interest = t => (P * R * t) / 100
  const i4 = interest(4)
  const points = [0, 1, 2, 3, 4]

  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-0.6, 4.5], y: [-60, 440] }} preserveAspectRatio={false} height={260}>
        <Coordinates.Cartesian
          xAxis={{ lines: 1, labels: t => (t >= 1 && t <= 4 && t % 1 === 0 ? `${t}` : '') }}
          yAxis={{ lines: 100, labels: d => (d > 0 && d <= 400 && d % 100 === 0 ? `$${d}` : '') }}
        />
        <Line.Segment
          point1={[0, interest(0)]}
          point2={[4, interest(4)]}
          color={C.accent}
          weight={STROKE_PRIMARY}
        />
        {points.map(t => (
          <Point key={t} x={t} y={interest(t)} color={C.accent} />
        ))}
        <Text x={2.2} y={-42} size={FONT_AXIS} attach="center" color={C.faint}>
          T (years)
        </Text>
        <Text x={0.15} y={430} size={FONT_AXIS} attach="w" color={C.faint}>
          I (interest)
        </Text>
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="P ($)"
          value={P}
          min={100}
          max={1000}
          step={50}
          onChange={setP}
          format={v => `$${v}`}
        />
        <Slider
          label="R (%)"
          value={R}
          min={1}
          max={10}
          step={0.5}
          onChange={setR}
          format={v => `${v}%`}
        />
      </div>
      <div
        aria-label="Simple interest grows linearly with time"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`I = \\tfrac{P R T}{100}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`I(4) = \\tfrac{${P}\\times ${R}\\times 4}{100} = ${texMoney(i4)}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          equal step every year
        </span>
      </div>
    </div>
  )
}

// SCI.2: Compound Multiplier Ladder - 500 → 550 → 605 → 665.50, each step ×(1+r).
export function CompoundMultiplierLadder({ C }) {
  const [P, setP] = useState(500)
  const [r, setR] = useState(10)
  const mult = 1 + r / 100
  const years = [0, 1, 2, 3]
  const values = years.map(n => P * Math.pow(mult, n))
  const xOf = n => n * 5

  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-1.4, 16.4], y: [-2.5, 3] }} preserveAspectRatio={false} height={220}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment
          point1={[-0.2, 0]}
          point2={[15.4, 0]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />
        {years.map(n => (
          <g key={n}>
            <Point x={xOf(n)} y={0} color={n === 0 ? C.fg : C.accent} />
            <Text x={xOf(n)} y={1.3} size={FONT_LABEL} attach="n" color={n === 0 ? C.fg : C.accent}>
              {money(values[n])}
            </Text>
            <Text x={xOf(n)} y={-0.5} size={FONT_SMALL} attach="s" color={C.dim}>
              {n === 0 ? 'Start' : `Year ${n}`}
            </Text>
          </g>
        ))}
        {[0, 1, 2].map(n => {
          const x1 = xOf(n) + 0.3
          const x2 = xOf(n + 1) - 0.3
          return (
            <g key={n}>
              <Line.Segment
                point1={[x1, 0]}
                point2={[x2, 0]}
                color={C.accent}
                weight={STROKE_PRIMARY}
              />
              <Text x={(x1 + x2) / 2} y={-1.2} size={FONT_SMALL} attach="s" color={C.dim}>
                {`×${mult.toFixed(2)}`}
              </Text>
            </g>
          )
        })}
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="P ($)"
          value={P}
          min={100}
          max={2000}
          step={50}
          onChange={setP}
          format={v => `$${v}`}
        />
        <Slider
          label="Rate (%)"
          value={r}
          min={1}
          max={30}
          step={0.5}
          onChange={setR}
          format={v => `${v}%`}
        />
      </div>
      <div
        aria-label="Compound growth multiplies by one plus the rate each year"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`A = P\\,(1+r)^n`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`A = ${P}\\times ${mult.toFixed(2)}^{\\,n}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`A(3) = ${texMoney(values[3])}`} />
        </span>
      </div>
    </div>
  )
}

// SCI.3: Compounding Frequency - annual vs monthly growth FACTOR on a declared
// log₁₀ axis. Both are straight lines from the origin; monthly is steeper.
export function CompoundingFrequencyComparison({ C }) {
  const [P, setP] = useState(1000)
  const [R, setR] = useState(10)
  const rA = R / 100
  const rM = R / 100 / 12
  const annualLog = x => x * Math.log10(1 + rA)
  const monthlyLog = x => 12 * x * Math.log10(1 + rM)
  const facTicks = [1, 2, 3, 5, 10]
  const finalA = P * Math.pow(1 + rA, 10)
  const finalM = P * Math.pow(1 + rM, 120)

  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-1.2, 11], y: [-0.12, 1.12] }} preserveAspectRatio={false} height={260}>
        <Coordinates.Cartesian
          xAxis={{ lines: 2, labels: t => (t > 0 && t <= 10 && t % 2 === 0 ? `${t}` : '') }}
          yAxis={false}
        />
        {facTicks.map(f => {
          const y = Math.log10(f)
          return (
            <g key={f}>
              <Line.Segment
                point1={[-0.15, y]}
                point2={[0, y]}
                color={C.dim}
                weight={STROKE_SECONDARY}
              />
              <Text x={-0.3} y={y} size={FONT_AXIS} attach="e" color={C.faint}>{`×${f}`}</Text>
            </g>
          )
        })}
        <Plot.OfX
          y={x => (x >= 0 && x <= 10 ? annualLog(x) : NaN)}
          color={C.fg}
          weight={STROKE_PRIMARY}
        />
        <Plot.OfX
          y={x => (x >= 0 && x <= 10 ? monthlyLog(x) : NaN)}
          color={C.accent}
          weight={STROKE_PRIMARY}
        />
        <Text x={10.2} y={annualLog(10)} size={FONT_SMALL} attach="w" color={C.fg}>
          annual
        </Text>
        <Text x={10.2} y={monthlyLog(10)} size={FONT_SMALL} attach="w" color={C.accent}>
          monthly
        </Text>
        <Text x={5} y={-0.09} size={FONT_AXIS} attach="center" color={C.faint}>
          years
        </Text>
        <Text x={-0.35} y={1.07} size={FONT_AXIS} attach="e" color={C.faint}>
          ×P (log)
        </Text>
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="P ($)"
          value={P}
          min={100}
          max={5000}
          step={100}
          onChange={setP}
          format={v => `$${v}`}
        />
        <Slider
          label="Rate (%)"
          value={R}
          min={1}
          max={20}
          step={0.5}
          onChange={setR}
          format={v => `${v}%`}
        />
      </div>
      <div
        aria-label="Monthly compounding beats annual at the same nominal rate"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\text{annual } P(1+r)^{10} = ${texMoney(Math.round(finalA))}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\text{monthly } P(1+\\tfrac{r}{12})^{120} = ${texMoney(Math.round(finalM))}`}
          />
        </span>
      </div>
    </div>
  )
}

// SCI.4: Tiered Tax Bracket - one stacked bar: allowance | 20% band | 40% band,
// segment lengths summing to gross (part-whole). Tax + effective rate in readout.
export function TieredTaxBracketBar({ C }) {
  const [gross, setGross] = useState(42000)
  const allowance = 6000
  const band1Limit = 30000
  const rate1 = 0.2
  const rate2 = 0.4

  const taxable = Math.max(0, gross - allowance)
  const band1 = Math.min(taxable, band1Limit)
  const band2 = Math.max(0, taxable - band1Limit)
  const tax1 = band1 * rate1
  const tax2 = band2 * rate2
  const totalTax = tax1 + tax2
  const effective = gross > 0 ? ((totalTax / gross) * 100).toFixed(1) : '0.0'

  const W = 14
  const s = v => (v / gross) * W // segment length ∝ dollars (segments sum to W = gross)
  const aW = s(allowance)
  const b1W = s(band1)
  const b2W = s(band2)
  const segs = [
    { x0: 0, x1: aW, color: C.dim, op: 0.22, tag: 'free' },
    { x0: aW, x1: aW + b1W, color: C.accent, op: 0.4, tag: '20%' },
    { x0: aW + b1W, x1: aW + b1W + b2W, color: C.fg, op: 0.5, tag: '40%' }
  ].filter(seg => seg.x1 - seg.x0 > 0.001)

  return (
    <div style={{ width: '100%' }}>
      <Mafs
        viewBox={{ x: [-0.5, W + 0.5], y: [-1.6, 1.8] }}
        preserveAspectRatio={false}
        height={200}
      >
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {segs.map((seg, i) => (
          <g key={i}>
            <Polygon
              points={[
                [seg.x0, -0.5],
                [seg.x1, -0.5],
                [seg.x1, 0.5],
                [seg.x0, 0.5]
              ]}
              color={seg.color}
              fillOpacity={seg.op}
            />
            {i > 0 && (
              <Polygon
                points={[
                  [seg.x0, -0.6],
                  [seg.x0 + 0.03, -0.6],
                  [seg.x0 + 0.03, 0.6],
                  [seg.x0, 0.6]
                ]}
                color={C.fg}
                fillOpacity={0.6}
              />
            )}
            <Text x={(seg.x0 + seg.x1) / 2} y={1.1} size={FONT_LABEL} attach="center" color={C.dim}>
              {seg.tag}
            </Text>
          </g>
        ))}
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="Gross ($)"
          value={gross}
          min={6000}
          max={100000}
          step={1000}
          onChange={setGross}
          format={v => `$${v.toLocaleString()}`}
        />
      </div>
      <div
        aria-label="Tiered tax: allowance is free, then twenty and forty percent bands"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`\\text{tax} = 0.2\\times ${band1.toLocaleString()} + 0.4\\times ${band2.toLocaleString()} = ${texMoney(totalTax)}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\text{effective} = \\tfrac{${Math.round(totalTax).toLocaleString()}}{${gross.toLocaleString()}} = ${effective}\\%`}
          />
        </span>
      </div>
    </div>
  )
}
