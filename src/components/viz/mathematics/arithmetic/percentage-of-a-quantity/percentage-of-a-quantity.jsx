// PERCENTAGE OF A QUANTITY
// Visualizations for computing percentages of money, simple and compound interest,
// multiplier method, and income tax with tax-free allowances.
// Each viz takes a `C` color object from useVizColors().
//
// REFINE pass 2026-07-02 (ar.128–ar.130):
// - SimpleVsCompoundGrowth normalized bar heights to the live compound max
//   (mode 2 - principal and rate changed nothing visually); now growth
//   FACTORS on a fixed declared ×0…×4 scale (max (1.3)⁵ ≈ 3.71), exact
//   dollar totals in the readout (ar.43/ar.46 treatment).
// - size-24 → 12; result formulas moved to readout rows. ar.128's result is
//   exact to 2 dp always (pct·qty integer ⇒ /100 terminates) - keeps '='.
// Engine (WebSearch 2026-07-02, percent-bar classes): only banned dashboard
// stacks surfaced; Mafs (A) stays. No swaps. Anchors unverified - audit.
import React, { useState } from 'react'
import { Mafs, Coordinates, Polygon, Text, LaTeX } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import { FONT_FAMILY, FONT_LABEL, LS_CONTROL } from '../../../scale-tokens'

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

const fmtMoney = v => (Number.isInteger(v) ? String(v) : v.toFixed(2))

// (a) BarModelPercentOfQuantity
// Horizontal bar representing 100%. A shaded region shows P% of the whole.
// Default: 22% of $40 (the worked example from the source).
// Sliders: percent and quantity.

export function BarModelPercentOfQuantity({ C, percent: initPct = 22, qty: initQty = 40 }) {
  const [pct, setPct] = useState(initPct)
  const [qty, setQty] = useState(initQty)
  const W = 10
  const H = 1.4
  const filled = (pct / 100) * W
  const result = (pct / 100) * qty

  return (
    <>
      <Mafs
        viewBox={{ x: [-0.5, W + 0.5], y: [-2.2, 2.5] }}
        height={200}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* Background bar */}
        <Polygon
          points={[
            [0, 0],
            [W, 0],
            [W, H],
            [0, H]
          ]}
          color={C.dim}
          fillOpacity={0.1}
        />
        {/* Filled portion */}
        {filled > 0 && (
          <Polygon
            points={[
              [0, 0],
              [filled, 0],
              [filled, H],
              [0, H]
            ]}
            color={C.fg}
            fillOpacity={0.55}
          />
        )}
        {/* Dividers at 10% marks */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
          <Polygon
            key={i}
            points={[
              [i, 0],
              [i + 0.02, 0],
              [i + 0.02, H],
              [i, H]
            ]}
            color={C.dim}
            fillOpacity={0.45}
          />
        ))}
        {/* Percent label inside filled bar */}
        {pct > 7 && (
          <Text x={filled / 2} y={H / 2} size={FONT_LABEL} color={C.fg}>
            {`${pct}%`}
          </Text>
        )}
        {/* Remainder label */}
        {pct < 92 && (
          <Text x={(filled + W) / 2} y={H / 2} size={FONT_LABEL} color={C.dim}>
            {`${100 - pct}%`}
          </Text>
        )}
        {/* 0 label */}
        <Text x={0} y={-0.6} size={FONT_LABEL} color={C.dim}>
          {'$0'}
        </Text>
        {/* full-quantity label */}
        <Text x={W} y={-0.6} size={FONT_LABEL} color={C.dim}>
          {`$${qty}`}
        </Text>
      </Mafs>
      <div
        aria-label="Percent of a quantity readout: exact result"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\tfrac{${pct}}{100} \\times ${qty} = ${fmtMoney(result)}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          the filled fraction of the bar IS the percent
        </span>
      </div>
      <Slider
        label="percent"
        value={pct}
        min={0}
        max={100}
        step={1}
        onChange={v => setPct(Math.round(v))}
        format={v => `${Math.round(v)}%`}
      />
      <Slider
        label="quantity"
        value={qty}
        min={10}
        max={200}
        step={10}
        onChange={v => setQty(Math.round(v))}
        format={v => `$${Math.round(v)}`}
      />
    </>
  )
}

// (b) FractionVsDecimalMethod
// Side-by-side bar comparison: fraction method vs decimal method.
// Default: 16% of $85. Both bars reach the same answer.

export function FractionVsDecimalMethod({ C }) {
  const [pct, setPct] = useState(16)
  const [qty, setQty] = useState(85)
  const result = (pct / 100) * qty
  const MAX_H = 7
  const BAR_W = 1.6
  const scale = v => (v / 200) * MAX_H

  return (
    <>
      <Mafs
        viewBox={{ x: [-0.5, 10], y: [-1.5, MAX_H + 2] }}
        height={240}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* Fraction method bar */}
        <Polygon
          points={[
            [0.5, 0],
            [0.5 + BAR_W, 0],
            [0.5 + BAR_W, scale(result)],
            [0.5, scale(result)]
          ]}
          color={C.fg}
          fillOpacity={0.45}
        />
        <Text x={0.5 + BAR_W / 2} y={-0.65} size={FONT_LABEL} color={C.fg}>
          {'fraction'}
        </Text>
        <LaTeX
          at={[0.5 + BAR_W / 2, scale(result) + 0.7]}
          tex={`\\tfrac{${pct}}{100} \\times ${qty}`}
          color={C.fg}
        />
        {/* Decimal method bar */}
        <Polygon
          points={[
            [5.5, 0],
            [5.5 + BAR_W, 0],
            [5.5 + BAR_W, scale(result)],
            [5.5, scale(result)]
          ]}
          color={C.dim}
          fillOpacity={0.4}
        />
        <Text x={5.5 + BAR_W / 2} y={-0.65} size={FONT_LABEL} color={C.dim}>
          {'decimal'}
        </Text>
        <LaTeX
          at={[5.5 + BAR_W / 2, scale(result) + 0.7]}
          tex={`${(pct / 100).toFixed(2)} \\times ${qty}`}
          color={C.dim}
        />
        {/* Equals label */}
        <Text x={5} y={scale(result) / 2 + 0.2} size={FONT_LABEL} color={C.faint}>
          {'='}
        </Text>
      </Mafs>
      <div
        aria-label="Two-method readout: both notations give the same answer"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`\\tfrac{${pct}}{100} \\times ${qty} = ${(pct / 100).toFixed(2)} \\times ${qty} = ${fmtMoney(result)}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          one number, two costumes
        </span>
      </div>
      <Slider
        label="percent"
        value={pct}
        min={1}
        max={100}
        step={1}
        onChange={v => setPct(Math.round(v))}
        format={v => `${Math.round(v)}%`}
      />
      <Slider
        label="quantity"
        value={qty}
        min={10}
        max={200}
        step={5}
        onChange={v => setQty(Math.round(v))}
        format={v => `$${Math.round(v)}`}
      />
    </>
  )
}

// Drag the percent slider. Shows two-step vs single-multiplier side by side.
// Increase: multiply by (1 + P/100). Decrease: multiply by (1 - P/100).
// Default: 7% increase on $11.60 (the worked example).

// (d) SimpleVsCompoundGrowth
// Year-by-year bar chart: compound interest (growing bar) vs simple interest
// (constant increment). Default: $500 at 10% per year for 5 years.

export function SimpleVsCompoundGrowth({ C }) {
  const [principal, setPrincipal] = useState(500)
  const [rate, setRate] = useState(10)
  const YEARS = 5
  const MAX_H = 8
  const MAX_F = 4 // fixed factor scale: (1.3)⁵ ≈ 3.71 < 4 for the whole domain

  const simpleF = Array.from({ length: YEARS + 1 }, (_, n) => 1 + (rate / 100) * n)
  const compoundF = Array.from({ length: YEARS + 1 }, (_, n) => Math.pow(1 + rate / 100, n))
  const scale = f => (f / MAX_F) * MAX_H
  // exact dollars: P(100 + 5r)/100 with P a multiple of 100 ⇒ exact integer
  const simpleAmt = (principal * (100 + YEARS * rate)) / 100
  const compoundAmt = principal * compoundF[YEARS]

  const BAR_W = 0.55
  const STEP = 1.5
  const OFFSET_S = 0.08
  const OFFSET_C = 0.7

  return (
    <>
      <Mafs
        viewBox={{ x: [-1.4, (YEARS + 1) * STEP + 0.5], y: [-1.4, MAX_H + 1.8] }}
        height={260}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* declared factor gridlines */}
        {[1, 2, 3, 4].map(f => (
          <React.Fragment key={f}>
            <Polygon
              points={[
                [0.2, scale(f)],
                [(YEARS + 1) * STEP + 0.2, scale(f)],
                [(YEARS + 1) * STEP + 0.2, scale(f) + 0.02],
                [0.2, scale(f) + 0.02]
              ]}
              color={f === 1 ? C.dim : C.faint}
              fillOpacity={0.6}
            />
            <Text x={-0.7} y={scale(f)} size={FONT_LABEL} color={C.dim}>
              {`×${f}`}
            </Text>
          </React.Fragment>
        ))}
        {Array.from({ length: YEARS + 1 }, (_, n) => {
          const xBase = n * STEP + 0.4
          return (
            <React.Fragment key={n}>
              <Polygon
                points={[
                  [xBase + OFFSET_S, 0],
                  [xBase + OFFSET_S + BAR_W, 0],
                  [xBase + OFFSET_S + BAR_W, scale(simpleF[n])],
                  [xBase + OFFSET_S, scale(simpleF[n])]
                ]}
                color={C.dim}
                fillOpacity={0.3}
              />
              <Polygon
                points={[
                  [xBase + OFFSET_C, 0],
                  [xBase + OFFSET_C + BAR_W, 0],
                  [xBase + OFFSET_C + BAR_W, scale(compoundF[n])],
                  [xBase + OFFSET_C, scale(compoundF[n])]
                ]}
                color={C.fg}
                fillOpacity={0.5}
              />
              <Text x={xBase + OFFSET_C} y={-0.7} size={FONT_LABEL} color={C.dim}>
                {`Y${n}`}
              </Text>
            </React.Fragment>
          )
        })}
        {/* Legend */}
        <Polygon
          points={[
            [0.4, MAX_H + 1.0],
            [0.4 + BAR_W, MAX_H + 1.0],
            [0.4 + BAR_W, MAX_H + 1.4],
            [0.4, MAX_H + 1.4]
          ]}
          color={C.dim}
          fillOpacity={0.3}
        />
        <Text x={0.4 + BAR_W + 0.75} y={MAX_H + 1.2} size={FONT_LABEL} color={C.dim}>
          {'simple'}
        </Text>
        <Polygon
          points={[
            [3.5, MAX_H + 1.0],
            [3.5 + BAR_W, MAX_H + 1.0],
            [3.5 + BAR_W, MAX_H + 1.4],
            [3.5, MAX_H + 1.4]
          ]}
          color={C.fg}
          fillOpacity={0.5}
        />
        <Text x={3.5 + BAR_W + 1.05} y={MAX_H + 1.2} size={FONT_LABEL} color={C.fg}>
          {'compound'}
        </Text>
      </Mafs>
      <div
        aria-label="Simple versus compound readout: five-year amounts"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\text{simple: } ${principal}(1 + ${(rate / 100).toFixed(2)} \\cdot 5) = \\$${fmtMoney(simpleAmt)}`}
          />
        </span>
        <span>
          <KatexInline
            tex={`\\text{compound: } ${principal}(${(1 + rate / 100).toFixed(2)})^{5} \\approx \\$${compoundAmt.toFixed(2)}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          bars show value ÷ principal: the factor is what compounds
        </span>
      </div>
      <Slider
        label="principal $"
        value={principal}
        min={100}
        max={2000}
        step={100}
        onChange={v => setPrincipal(Math.round(v))}
        format={v => `$${Math.round(v)}`}
      />
      <Slider
        label="rate %"
        value={rate}
        min={1}
        max={30}
        step={1}
        onChange={v => setRate(Math.round(v))}
        format={v => `${Math.round(v)}%`}
      />
    </>
  )
}

// Income bar showing tax-free allowance, first band (20%), second band (40%).
// Based on the worked example: Vivien earns $42 000, allowance $6 000,
// 20% on next $30 000, 40% on the rest.
// Sliders: annual income.

// Year-by-year polyline showing I = P*R*T/100 growing at a constant fixed step.
// Default: P=400, R=5. Slider for T (1–10 years).

// Animates the year-by-year compounding from the source derivation:
// $500 at 10%. Shows each year's total and the multiplier check annotation.
