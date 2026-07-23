// GROWTH, DEPRECIATION, APPLIED TAX
//
// REFINE pass 2026-07-02 (ar.45–ar.47):
// - ar.46/ar.47 scaled y to the compound-growth envelope every render
//   (forbidden mode 2): changing P changed NOTHING visually, and in ar.47 the
//   depreciation curve was drawn against a growth ceiling. ar.46 now plots
//   growth FACTORS on a fixed declared axis (P lives in the exact readout);
//   ar.47 plots both factor lines on a DECLARED log₁₀ axis - exponentials are
//   straight lines there, and growth/decay slopes are honestly asymmetric.
// - ar.45 printed the percent on canvas with toFixed(1) although the base is
//   100 (change IS the exact percent); off-scale size-24 text everywhere
//   (house type scale tops out at 12 for canvas annotation).
// Engine (WebSearch 2026-07-02, exponential-growth / log-scale classes): same
// verdicts as ar.24/ar.43 - semilog is the standard honest rendering; only
// banned dashboard stacks surfaced. Mafs (A) stays. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.

import { useState } from 'react'
import { Mafs, Coordinates, Point, Text, Line, LaTeX } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import { FONT_FAMILY, FONT_LABEL, LS_CONTROL, LS_OPEN } from '../../../scale-tokens'

const SLIDER_ROW = {
  display: 'flex',
  gap: 16,
  justifyContent: 'center',
  marginTop: 8,
  flexWrap: 'wrap'
}

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

const MODE_BTN_BASE = {
  padding: '4px 14px',
  cursor: 'pointer',
  fontFamily: 'var(--reader-font-family)',
  fontSize: FONT_LABEL,
  textTransform: 'uppercase',
  letterSpacing: LS_OPEN
}

// PercentageChangeExplorer - ar.45
// Original fixed at 100 so the CHANGE IS the PERCENT - the point of the viz.
// Value line 0–200 is fixed and declared; the exact percent (an integer, no
// toFixed dressing) lives in the readout row, not on the canvas.
export function PercentageChangeExplorer({ C }) {
  const [newVal, setNewVal] = useState(128)
  const original = 100
  const change = newVal - original // integer = exact percent
  const direction = change > 0 ? 'increase' : change < 0 ? 'decrease' : 'no change'

  const xScale = 14 / 200
  const xOf = v => v * xScale
  const origX = xOf(original)
  const newX = xOf(newVal)
  const tickVals = [0, 50, 100, 150, 200]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Percent change from a base of 100 on a fixed value line"
    >
      <Mafs viewBox={{ x: [-0.5, 14.5], y: [-2.5, 3.2] }} preserveAspectRatio={false} height={200}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[0, 0]} point2={[14, 0]} color={C.dim} weight={1} />
        {tickVals.map(v => (
          <g key={v}>
            <Line.Segment
              point1={[xOf(v), -0.15]}
              point2={[xOf(v), 0.15]}
              color={C.dim}
              weight={1}
            />
            <Text x={xOf(v)} y={-0.5} size={FONT_LABEL} attach="s" color={C.dim}>
              {String(v)}
            </Text>
          </g>
        ))}
        <Point x={origX} y={0} color={C.fg} />
        <Text x={origX} y={1} size={FONT_LABEL} attach="n" color={C.fg}>
          original
        </Text>
        <Point x={newX} y={0} color={C.accent} />
        <Text x={newX} y={-1.2} size={FONT_LABEL} attach="s" color={C.accent}>
          new
        </Text>
        {change !== 0 && (
          <Line.Segment point1={[origX, 0]} point2={[newX, 0]} color={C.accent} weight={3} />
        )}
      </Mafs>
      <div
        aria-label="Percent change readout: base 100 makes the change the percent"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`${newVal} - 100 = ${change}`} />
        </span>
        <span>
          <KatexInline
            tex={`\\tfrac{${Math.abs(change)}}{100} = ${Math.abs(change)}\\%\\ \\text{${direction}}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          base 100: the change is the percent
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="New value"
          value={newVal}
          min={0}
          max={200}
          step={1}
          onChange={setNewVal}
          format={v => String(v)}
        />
      </div>
    </div>
  )
}

// LinearVsExponentialComparison - ar.46
// Growth FACTORS (value ÷ principal) on a FIXED declared ×0…×14 axis - the
// old code normalized y to P·(1+r)^10·1.2, so P did nothing and r barely
// moved the picture. Simple interest is the line 1 + rt; compound bends
// above it. P lives only in the exact dollar readout.
// Math: R ≤ 30 ⇒ (1.3)^10 ≈ 13.786 < 14 - compound stays in frame ✓.
// Simple amount P(100 + 10R)/100 exact (P multiple of 100, R integer).
export function LinearVsExponentialComparison({ C }) {
  const [P, setP] = useState(500)
  const [R, setR] = useState(10)
  const r = R / 100
  const years = 10
  const simpleF = t => 1 + r * t
  const compoundF = t => Math.pow(1 + r, t)
  const sEnd = simpleF(years)
  const cEnd = compoundF(years)
  const simpleAmt = (P * (100 + 10 * R)) / 100 // exact integer dollars
  const compoundAmt = P * cEnd
  const X = 1.25 // mafs units per year
  // de-collide end tags: y-unit ≈ 260/15.6 ≈ 17 px ⇒ need ≥ 2.4u for 40 px
  let sTagY = sEnd
  let cTagY = cEnd
  if (cEnd - sEnd < 2.4) {
    const mid = (sEnd + cEnd) / 2
    cTagY = mid + 1.2
    sTagY = mid - 1.2
  }

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Simple versus compound growth factors on a fixed declared axis"
    >
      <Mafs viewBox={{ x: [-1.3, 15.4], y: [-1.1, 14.5] }} preserveAspectRatio={false} height={260}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {[0, 2, 4, 6, 8, 10].map(yr => (
          <Text key={yr} x={yr * X} y={-0.55} size={FONT_LABEL} attach="s" color={C.dim}>
            {`${yr}yr`}
          </Text>
        ))}
        {[1, 5, 10, 14].map(f => (
          <g key={f}>
            <Line.Segment
              point1={[0, f]}
              point2={[years * X + 0.4, f]}
              color={f === 1 ? C.dim : C.faint}
              weight={1}
            />
            <Text x={-0.7} y={f} size={FONT_LABEL} color={C.dim}>
              {`×${f}`}
            </Text>
          </g>
        ))}
        {Array.from({ length: years }, (_, t) => (
          <Line.Segment
            key={`s${t}`}
            point1={[t * X, simpleF(t)]}
            point2={[(t + 1) * X, simpleF(t + 1)]}
            color={C.fg}
            weight={2}
          />
        ))}
        {Array.from({ length: years }, (_, t) => (
          <Line.Segment
            key={`c${t}`}
            point1={[t * X, compoundF(t)]}
            point2={[(t + 1) * X, compoundF(t + 1)]}
            color={C.accent}
            weight={2}
          />
        ))}
        <Text x={years * X + 0.55} y={sTagY} size={FONT_LABEL} attach="e" color={C.fg}>
          simple
        </Text>
        <Text x={years * X + 0.55} y={cTagY} size={FONT_LABEL} attach="e" color={C.accent}>
          compound
        </Text>
      </Mafs>
      <div
        aria-label="Growth comparison readout: exact simple amount, compound amount, and the gap"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\text{simple: } ${P}(1 + ${r.toFixed(2)}\\cdot 10) = \\$${simpleAmt}`}
          />
        </span>
        <span>
          <KatexInline
            tex={`\\text{compound: } ${P}(${(1 + r).toFixed(2)})^{10} \\approx \\$${compoundAmt.toFixed(2)}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          same rate: compounding pulls ahead every year
        </span>
      </div>
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
          max={30}
          step={1}
          onChange={setR}
          format={v => `${v}%`}
        />
      </div>
    </div>
  )
}

// CompoundGrowthDepreciationSlider - ar.47
// Both factor lines on a DECLARED log₁₀ axis (×0.01 … ×10 decades, fixed):
// exponential change is a straight line there, growth slopes up, depreciation
// slopes down - and the two are honestly ASYMMETRIC (log(1+r) ≠ −log(1−r)).
// The mode toggle highlights one line and drives the exact-dollar readout.
// Math: R ≤ 40 ⇒ ends log₁₀(1.4)·10 ≈ +1.461 and log₁₀(0.6)·10 ≈ −2.218,
// inside the fixed y ∈ [−2.45, 1.75] frame for the whole slider range ✓.
export function CompoundGrowthDepreciationSlider({ C }) {
  const [P, setP] = useState(2000)
  const [R, setR] = useState(15)
  const [mode, setMode] = useState('depreciation')
  const r = R / 100
  const years = 10
  const X = 1.25
  const gSlope = Math.log10(1 + r)
  const dSlope = Math.log10(1 - r)
  const growthAmt = P * Math.pow(1 + r, years)
  const deprAmt = P * Math.pow(1 - r, years)
  const active = mode === 'growth'

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Growth and depreciation factor lines on a declared log-10 axis"
    >
      <Mafs
        viewBox={{ x: [-1.9, 15.4], y: [-2.45, 1.75] }}
        preserveAspectRatio={false}
        height={280}
      >
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {[0, 2, 4, 6, 8, 10].map(yr => (
          <Text key={yr} x={yr * X} y={-2.38} size={FONT_LABEL} attach="n" color={C.dim}>
            {`${yr}yr`}
          </Text>
        ))}
        {/* declared log decades */}
        {[
          [1, '×10'],
          [0, '×1'],
          [-1, '×0.1'],
          [-2, '×0.01']
        ].map(([y, lab]) => (
          <g key={lab}>
            <Line.Segment
              point1={[0, y]}
              point2={[years * X + 0.4, y]}
              color={y === 0 ? C.dim : C.faint}
              weight={1}
            />
            <Text x={-1} y={y} size={FONT_LABEL} color={C.dim}>
              {lab}
            </Text>
          </g>
        ))}
        {/* axis caption in LaTeX (rule 11: log₁₀ subscript is typeset math, not
            plain text); on-canvas KaTeX is size-harmonized to 13.3px in viz.css */}
        <LaTeX
          at={[years * X * 0.5, 1.6]}
          tex={'\\text{value} \\div \\text{start} \\;\\text{:}\\; \\log_{10}\\ \\text{scale}'}
          color={C.dim}
        />
        {/* factor lines are exactly straight in log space: y = t·log₁₀(factor) */}
        <Line.Segment
          point1={[0, 0]}
          point2={[years * X, years * gSlope]}
          color={C.accent}
          weight={active ? 2.5 : 1}
          opacity={active ? 1 : 0.45}
        />
        <Line.Segment
          point1={[0, 0]}
          point2={[years * X, years * dSlope]}
          color={C.fg}
          weight={active ? 1 : 2.5}
          opacity={active ? 0.45 : 1}
        />
        <Text x={years * X + 0.55} y={years * gSlope} size={FONT_LABEL} attach="e" color={C.accent}>
          growth
        </Text>
        <Text x={years * X + 0.55} y={years * dSlope} size={FONT_LABEL} attach="e" color={C.fg}>
          depreciation
        </Text>
        <Point x={0} y={0} color={C.fg} />
      </Mafs>
      <div
        aria-label="Growth and depreciation readout: ten-year amounts and the asymmetry"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: active ? 1 : OPACITY.dim }}>
          <KatexInline tex={`${P}(1 + ${r.toFixed(2)})^{10} \\approx \\$${growthAmt.toFixed(0)}`} />
        </span>
        <span style={{ opacity: active ? OPACITY.dim : 1 }}>
          <KatexInline tex={`${P}(1 - ${r.toFixed(2)})^{10} \\approx \\$${deprAmt.toFixed(0)}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          straight on a log axis, and losing {R}% cuts deeper than gaining {R}% grows
        </span>
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 10 }}>
        <button
          onClick={() => setMode('growth')}
          style={{
            ...MODE_BTN_BASE,
            background: mode === 'growth' ? C.accent : 'transparent',
            color: mode === 'growth' ? 'var(--bg)' : 'var(--text-secondary)',
            border: `1px solid ${mode === 'growth' ? C.accent : 'var(--border-default)'}`
          }}
        >
          Growth
        </button>
        <button
          onClick={() => setMode('depreciation')}
          style={{
            ...MODE_BTN_BASE,
            background: mode === 'depreciation' ? C.fg : 'transparent',
            color: mode === 'depreciation' ? 'var(--bg)' : 'var(--text-secondary)',
            border: `1px solid ${mode === 'depreciation' ? C.fg : 'var(--border-default)'}`
          }}
        >
          Depreciation
        </button>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="P ($)"
          value={P}
          min={100}
          max={10000}
          step={100}
          onChange={setP}
          format={v => `$${v.toLocaleString()}`}
        />
        <Slider
          label="Rate (%)"
          value={R}
          min={1}
          max={40}
          step={1}
          onChange={setR}
          format={v => `${v}%`}
        />
      </div>
    </div>
  )
}
