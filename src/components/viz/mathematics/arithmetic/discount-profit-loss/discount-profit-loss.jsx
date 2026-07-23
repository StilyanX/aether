// DISCOUNT, PROFIT, LOSS viz monolith.
//
// REFINE pass 2026-07-02 (ar.37–ar.44):
// - ar.38 rescaled both bars to max(cp,sp)·1.1 every drag (auto-normalized -
//   moving SP changed the drawn COST bar); now a fixed $0–12,000 axis.
// - ar.43 scaled y to the compound maximum (forbidden mode 2 - principal and
//   rate changed nothing visually); now growth FACTORS on a fixed declared
//   axis, with exact-dollar readouts.
// - ar.41 markup could reach 3900% and shot its bar + label off-frame; the
//   domain is now sp ≤ 2·cp on a fixed 0–100% axis.
// - ar.44's draggable point used the Mafs default indigo (monochrome breach).
// - weight-10/12/14 line-as-bar strokes → true Polygon bars; dollar/percent
//   readouts moved off-canvas into KatexInline rows; label de-collision for
//   rate→1 (ar.39), sale→original coincidence (ar.37), low-rate line ends
//   (ar.43). Exact cents/percent arithmetic throughout (integer-safe).
// Engine (WebSearch 2026-07-02, money-bar / percent-line classes): only
// banned dashboard stacks surfaced - Mafs (A) stays. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.

import React, { useState } from 'react'
import { Mafs, Coordinates, Point, Text, Line, Polygon, useMovablePoint } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import { FONT_FAMILY, FONT_LABEL, LS_CONTROL } from '../../../scale-tokens'

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

// PercentageChangeNumberLine - ar.37
// Percent change on a DECLARED 0–100% line: the marker sits at the computed
// percentage (70/7000 = 1% hugs zero; 70/100 = 70% strides out). Percentages
// are computed from the prices (the old hard-coded '1%'/'70%' strings and the
// on-canvas dollar readouts are gone); values live under the canvas.
const PERCENTAGE_EXAMPLES = [
  { original: 7000, final: 7070, label: 'Car: $7000 → $7070' },
  { original: 100, final: 170, label: 'Jacket: $100 → $170' }
]

export function PercentageChangeNumberLine({ C }) {
  const [idx, setIdx] = useState(0)
  const ex = PERCENTAGE_EXAMPLES[idx]
  const delta = ex.final - ex.original
  const pct = (delta / ex.original) * 100 // both presets exact integers
  const scale = 10 // 10 Mafs units = 100%
  const fin = (pct / 100) * scale

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Percent change marked on a declared 0 to 100 percent line"
    >
      <Mafs
        viewBox={{ x: [-1, scale + 1], y: [-2.5, 2.5] }}
        preserveAspectRatio={false}
        height={220}
      >
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[-0.5, 0]} point2={[scale + 0.5, 0]} color={C.dim} weight={1.5} />
        {/* percent axis - declares what position means */}
        {[0, 20, 40, 60, 80, 100].map(p => (
          <Text key={p} x={(p / 100) * scale} y={-0.85} size={FONT_LABEL} color={C.dim}>
            {`${p}%`}
          </Text>
        ))}
        <Line.Segment point1={[0, -0.25]} point2={[0, 0.25]} color={C.fg} weight={2} />
        <Text x={0} y={-1.7} size={FONT_LABEL} color={C.fg}>
          original
        </Text>
        <Line.Segment point1={[fin, -0.25]} point2={[fin, 0.25]} color={C.accent} weight={2} />
        <Text x={fin} y={1.6} size={FONT_LABEL} color={C.accent}>
          new
        </Text>
        <Line.Segment point1={[0, 0.6]} point2={[fin, 0.6]} color={C.accent} weight={1} />
        <Point x={0} y={0} color={C.fg} />
        <Point x={fin} y={0} color={C.accent} />
      </Mafs>
      <div
        aria-label="Percent change readout: the difference over the original"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\$${ex.final} - \\$${ex.original} = \\$${delta}`} />
        </span>
        <span>
          <KatexInline tex={`\\tfrac{${delta}}{${ex.original}} = ${pct}\\%`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          same $70: the base decides the percent
        </span>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}>
        {PERCENTAGE_EXAMPLES.map((e, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: FONT_LABEL,
              letterSpacing: LS_CONTROL,
              textTransform: 'uppercase',
              padding: '6px 14px',
              background: 'transparent',
              border: `1px solid ${i === idx ? 'var(--border-default)' : 'var(--border-subtle)'}`,
              color: C.fg, // literal ink - var(--text-primary) is undefined in the runner (SVG fill would go black)
              opacity: i === idx ? 1 : 0.55,
              cursor: 'pointer'
            }}
          >
            {e.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ProfitLossBar - ar.38
// Cost and selling price as bars on ONE FIXED $0–12,000 axis (the old code
// rescaled both bars to max(cp,sp)·1.1 on every drag - moving SP visibly
// changed the cost bar). The profit/loss strip is the true gap between ends.
export function ProfitLossBar({ C }) {
  const [cp, setCp] = useState(6400)
  const [sp, setSp] = useState(6800)
  const profit = sp - cp
  const isProfit = profit >= 0
  // percent of COST, exact when it terminates (Δ·10000 divisible by cp)
  const pctExact = (Math.abs(profit) * 10000) % cp === 0
  const pct = ((Math.abs(profit) / cp) * 100).toFixed(2)
  const MAX = 12000
  const W = 9
  const sx = v => (v / MAX) * W
  const BAR = 0.55

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Cost and selling price bars on one fixed dollar axis"
    >
      <Mafs viewBox={{ x: [-0.5, 10], y: [-2.6, 2.6] }} preserveAspectRatio={false} height={230}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {/* fixed $ axis */}
        {[0, 3000, 6000, 9000, 12000].map(v => (
          <Text key={v} x={sx(v)} y={-2.15} size={FONT_LABEL} color={C.dim}>
            {v === 0 ? '$0' : `$${v / 1000}k`}
          </Text>
        ))}
        <Line.Segment point1={[0, -1.75]} point2={[W, -1.75]} color={C.faint} weight={1} />
        <Polygon
          points={[
            [0, 0.55],
            [sx(cp), 0.55],
            [sx(cp), 0.55 + BAR],
            [0, 0.55 + BAR]
          ]}
          color={C.fg}
          fillOpacity={0.32}
        />
        <Text x={sx(cp) / 2} y={0.55 + BAR + 0.42} size={FONT_LABEL} color={C.fg}>
          cost
        </Text>
        <Polygon
          points={[
            [0, -0.55 - BAR],
            [sx(sp), -0.55 - BAR],
            [sx(sp), -0.55],
            [0, -0.55]
          ]}
          color={C.accent}
          fillOpacity={0.32}
        />
        <Text x={sx(sp) / 2} y={-0.55 - BAR - 0.42} size={FONT_LABEL} color={C.accent}>
          selling
        </Text>
        {Math.abs(profit) > 0 && (
          <>
            <Line.Segment
              point1={[Math.min(sx(cp), sx(sp)), 0]}
              point2={[Math.max(sx(cp), sx(sp)), 0]}
              color={isProfit ? C.accent : C.dim}
              weight={3}
            />
            <Line.Segment point1={[sx(cp), 0.55]} point2={[sx(cp), 0]} color={C.faint} weight={1} />
            <Line.Segment
              point1={[sx(sp), -0.55]}
              point2={[sx(sp), 0]}
              color={C.faint}
              weight={1}
            />
          </>
        )}
      </Mafs>
      <div
        aria-label="Profit or loss readout: difference over the cost price"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\$${sp} - \\$${cp} = ${profit < 0 ? `-\\$${-profit}` : `\\$${profit}`}`}
          />
        </span>
        <span>
          <KatexInline
            tex={`\\tfrac{${Math.abs(profit)}}{${cp}} ${pctExact ? '=' : '\\approx'} ${pct}\\%\\ \\text{${isProfit ? 'profit' : 'loss'}}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          percent is always taken of the cost price
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="CP"
          value={cp}
          min={1000}
          max={10000}
          step={100}
          onChange={setCp}
          format={v => `$${v.toFixed(0)}`}
        />
        <Slider
          label="SP"
          value={sp}
          min={500}
          max={12000}
          step={100}
          onChange={setSp}
          format={v => `$${v.toFixed(0)}`}
        />
      </div>
    </div>
  )
}

// DiscountPriceLadder - ar.39
// Vertical price ladder: rung height ∝ price (full height = marked price), so
// the selling rung sits at exactly (1 − rate/100) of the marked height. Labels
// de-collide as rate → 1% (rungs 2px apart); all dollar values live below.
// Exact cents: marked·rate is an integer, so discount = that/100 is exact.
export function DiscountPriceLadder({ C }) {
  const [marked, setMarked] = useState(100)
  const [rate, setRate] = useState(25)
  const discountC = marked * rate // cents: (marked·rate/100)·100 - exact integer
  const sellingC = marked * 100 - discountC
  const multiplier = (1 - rate / 100).toFixed(2)

  const h = 8
  const markedY = h
  const sellingY = h * (1 - rate / 100)
  // labels: marked above its rung, selling below its rung - ≥1.5u ≈ 45px apart
  const markedLabelY = markedY + 0.62
  const sellingLabelY = Math.min(sellingY - 0.62, markedY - 1.55)

  return (
    <div style={{ width: '100%' }} aria-label="Discount ladder: rung height proportional to price">
      <Mafs viewBox={{ x: [-3, 5], y: [-1, h + 1.3] }} preserveAspectRatio={false} height={300}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {/* price scale: baseline $0 and the marked height */}
        <Line.Segment point1={[-0.5, 0]} point2={[2, 0]} color={C.faint} weight={1} />
        <Text x={-1.5} y={0} size={FONT_LABEL} color={C.dim}>
          $0
        </Text>
        <Line.Segment point1={[-0.5, markedY]} point2={[2, markedY]} color={C.fg} weight={2} />
        <Text x={-1.5} y={markedLabelY} size={FONT_LABEL} color={C.fg}>
          marked
        </Text>
        <Line.Segment
          point1={[-0.5, sellingY]}
          point2={[2, sellingY]}
          color={C.accent}
          weight={2}
        />
        <Text x={-1.5} y={sellingLabelY} size={FONT_LABEL} color={C.accent}>
          selling
        </Text>
        <Line.Segment point1={[1.2, sellingY]} point2={[1.2, markedY]} color={C.dim} weight={1} />
        <Text x={2.9} y={(markedY + sellingY) / 2} size={FONT_LABEL} color={C.dim}>
          {`−${rate}%`}
        </Text>
      </Mafs>
      <div
        aria-label="Discount readout: multiplier form and exact prices"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\text{discount} = ${rate}\\% = \\$${(discountC / 100).toFixed(2)}`} />
        </span>
        <span>
          <KatexInline
            tex={`\\$${marked} \\times ${multiplier} = \\$${(sellingC / 100).toFixed(2)}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          one multiplication, not a subtraction chain
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="Marked"
          value={marked}
          min={10}
          max={500}
          step={5}
          onChange={setMarked}
          format={v => `$${v.toFixed(0)}`}
        />
        <Slider
          label="Rate"
          value={rate}
          min={1}
          max={90}
          step={1}
          onChange={setRate}
          format={v => `${v.toFixed(0)}%`}
        />
      </div>
    </div>
  )
}

// SuccessiveDiscountFunnel - ar.40
// Successive discounts as bars on a fixed scale (width ∝ remaining price of
// the $100 start): 20% then 25% off leaves 80%·75% = 60% - a 40% total, not
// 45%. All stage prices are exact (integers over 100).
export function SuccessiveDiscountFunnel({ C }) {
  const [r1, setR1] = useState(20)
  const [r2, setR2] = useState(25)
  const original = 100
  // exact: after1·100 = 100·(100−r1); after2·10000 = 100·(100−r1)(100−r2)
  const after1 = (original * (100 - r1)) / 100
  const after2 = (original * (100 - r1) * (100 - r2)) / 10000
  // total off is exact to 2 dp - hold it as integer hundredths of a percent so
  // the readout shows the true value (27.75, not toFixed(1)'s "27.8"; 13.51,
  // not "13.5") with an honest "="; trim to the fewest exact digits.
  const totalRedH = 10000 - (100 - r1) * (100 - r2) // = totalReduction·100, exact integer
  const totalRedTex =
    totalRedH % 100 === 0
      ? String(totalRedH / 100)
      : totalRedH % 10 === 0
        ? (totalRedH / 100).toFixed(1)
        : (totalRedH / 100).toFixed(2)
  const naiveSum = r1 + r2

  const maxW = 9
  const BAR = 0.6
  const rows = [
    { w: maxW, y: 5.4, ink: C.fg, fill: 0.32, tag: 'start' },
    { w: (after1 / original) * maxW, y: 3.2, ink: C.accent, fill: 0.32, tag: `after ${r1}% off` },
    { w: (after2 / original) * maxW, y: 1, ink: C.dim, fill: 0.32, tag: `then ${r2}% off` }
  ]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Successive discounts shrink a bar multiplicatively on a fixed scale"
    >
      <Mafs
        viewBox={{ x: [-1, maxW + 1.2], y: [-0.4, 7] }}
        preserveAspectRatio={false}
        height={280}
      >
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {rows.map((r, i) => (
          <React.Fragment key={i}>
            <Polygon
              points={[
                [0, r.y],
                [r.w, r.y],
                [r.w, r.y + BAR],
                [0, r.y + BAR]
              ]}
              color={r.ink}
              fillOpacity={r.fill}
            />
            <Text x={r.w / 2} y={r.y + BAR + 0.45} size={FONT_LABEL} color={r.ink}>
              {r.tag}
            </Text>
          </React.Fragment>
        ))}
      </Mafs>
      <div
        aria-label="Successive discount readout: exact stage prices and the true total"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\$100 \\to \\$${after1.toFixed(2)} \\to \\$${after2.toFixed(2)}`} />
        </span>
        <span>
          <KatexInline tex={`\\text{total off} = ${totalRedTex}\\% \\ne ${naiveSum}\\%`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          the second cut hits an already-smaller price
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="1st"
          value={r1}
          min={1}
          max={80}
          step={1}
          onChange={setR1}
          format={v => `${v.toFixed(0)}%`}
        />
        <Slider
          label="2nd"
          value={r2}
          min={1}
          max={80}
          step={1}
          onChange={setR2}
          format={v => `${v.toFixed(0)}%`}
        />
      </div>
    </div>
  )
}

// MarkupVsMarginPanel - ar.41
// Same profit, two bases: markup = profit/cost vs margin = profit/selling on
// ONE fixed 0–100% axis. Domain sp ≤ 2·cp keeps markup ≤ 100% (the old open
// domain let markup hit 3900%, firing the bar and its label off-frame).
export function MarkupVsMarginPanel({ C }) {
  const [cp, setCp] = useState(80)
  const [sp, setSp] = useState(100)
  const spLo = cp + 5
  const spHi = 2 * cp
  const spClamped = Math.min(Math.max(sp, spLo), spHi)
  const profit = spClamped - cp
  const markup = (profit / cp) * 100 // ≤ 100 by domain
  const margin = (profit / spClamped) * 100 // < markup always

  const barMax = 9
  const BAR = 0.55
  const sx = p => (p / 100) * barMax

  return (
    <div style={{ width: '100%' }} aria-label="Markup versus margin bars on one fixed percent axis">
      <Mafs
        viewBox={{ x: [-0.5, barMax + 0.6], y: [-1.6, 4.4] }}
        preserveAspectRatio={false}
        height={230}
      >
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {[0, 25, 50, 75, 100].map(p => (
          <Text key={p} x={sx(p)} y={-1.15} size={FONT_LABEL} color={C.dim}>
            {`${p}%`}
          </Text>
        ))}
        <Line.Segment point1={[0, -0.75]} point2={[barMax, -0.75]} color={C.faint} weight={1} />
        <Polygon
          points={[
            [0, 2.9],
            [sx(markup), 2.9],
            [sx(markup), 2.9 + BAR],
            [0, 2.9 + BAR]
          ]}
          color={C.fg}
          fillOpacity={0.32}
        />
        <Text x={sx(markup) / 2} y={2.9 + BAR + 0.45} size={FONT_LABEL} color={C.fg}>
          markup: profit ÷ cost
        </Text>
        <Polygon
          points={[
            [0, 0.9],
            [sx(margin), 0.9],
            [sx(margin), 0.9 + BAR],
            [0, 0.9 + BAR]
          ]}
          color={C.accent}
          fillOpacity={0.32}
        />
        <Text x={sx(margin) / 2} y={0.9 + BAR + 0.45} size={FONT_LABEL} color={C.accent}>
          margin: profit ÷ selling
        </Text>
      </Mafs>
      <div
        aria-label="Markup versus margin readout: one profit, two bases"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\text{profit} = \\$${spClamped} - \\$${cp} = \\$${profit}`} />
        </span>
        <span>
          <KatexInline
            tex={`\\text{markup} = \\tfrac{${profit}}{${cp}} \\approx ${markup.toFixed(1)}\\%`}
          />
        </span>
        <span>
          <KatexInline
            tex={`\\text{margin} = \\tfrac{${profit}}{${spClamped}} \\approx ${margin.toFixed(1)}\\%`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          same profit: the base decides the percent
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="CP"
          value={cp}
          min={10}
          max={200}
          step={5}
          onChange={setCp}
          format={v => `$${v.toFixed(0)}`}
        />
        <Slider
          label="SP"
          value={spClamped}
          min={spLo}
          max={spHi}
          step={5}
          onChange={setSp}
          format={v => `$${v.toFixed(0)}`}
        />
      </div>
    </div>
  )
}

// ReverseOriginalPrice - ar.42
// Reverse percentage: the ORIGINAL is the whole bar (100%), the sale price is
// its known (1 − rate) fraction - dividing by the multiplier rebuilds the
// whole. Bar ratio is the true sale/original ratio; the percent scale is
// declared. Division is genuinely inexact ⇒ the recovered price shows ≈.
export function ReverseOriginalPrice({ C }) {
  const [salePrice, setSalePrice] = useState(75.99)
  const [discountRate, setDiscountRate] = useState(20)
  const multiplier = 1 - discountRate / 100
  const originalPrice = salePrice / multiplier

  const maxW = 9
  const BAR = 0.55
  const saleX = (1 - discountRate / 100) * maxW // exact fraction of the bar

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Reverse percentage: the sale bar is a known fraction of the unknown whole"
    >
      <Mafs
        viewBox={{ x: [-1, maxW + 1.2], y: [-2.3, 2.9] }}
        preserveAspectRatio={false}
        height={230}
      >
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {[0, 50, 100].map(p => (
          <Text key={p} x={(p / 100) * maxW} y={-1.85} size={FONT_LABEL} color={C.dim}>
            {`${p}%`}
          </Text>
        ))}
        <Line.Segment point1={[0, -1.45]} point2={[maxW, -1.45]} color={C.faint} weight={1} />
        <Polygon
          points={[
            [0, 1.3],
            [maxW, 1.3],
            [maxW, 1.3 + BAR],
            [0, 1.3 + BAR]
          ]}
          color={C.fg}
          fillOpacity={0.18}
        />
        <Text x={maxW / 2} y={1.3 + BAR + 0.45} size={FONT_LABEL} color={C.fg}>
          original: the unknown whole
        </Text>
        <Polygon
          points={[
            [0, -0.75],
            [saleX, -0.75],
            [saleX, -0.75 + BAR],
            [0, -0.75 + BAR]
          ]}
          color={C.accent}
          fillOpacity={0.32}
        />
        <Text x={saleX / 2} y={-0.75 - 0.42} size={FONT_LABEL} color={C.accent}>
          {`sale: ${100 - discountRate}% of it`}
        </Text>
        <Line.Segment point1={[saleX, 1.3]} point2={[saleX, -0.2]} color={C.dim} weight={1} />
      </Mafs>
      <div
        aria-label="Reverse percentage readout: divide by the multiplier to recover the original"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\text{sale} = \\text{original} \\times ${multiplier.toFixed(2)}`} />
        </span>
        <span>
          <KatexInline
            tex={`\\$${salePrice.toFixed(2)} \\div ${multiplier.toFixed(2)} \\approx \\$${originalPrice.toFixed(2)}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          divide, never add the percent back on
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="Sale"
          value={salePrice}
          min={10}
          max={500}
          step={0.5}
          onChange={setSalePrice}
          format={v => `$${v.toFixed(2)}`}
        />
        <Slider
          label="Discount"
          value={discountRate}
          min={1}
          max={80}
          step={1}
          onChange={setDiscountRate}
          format={v => `${v.toFixed(0)}%`}
        />
      </div>
    </div>
  )
}

// SimpleVsCompoundInterest - ar.43
// Growth FACTORS (amount ÷ principal) on a FIXED declared axis ×0…×14 - the
// old code rescaled y to the compound maximum, so rate and principal changed
// nothing visually (forbidden mode 2). Simple interest is the straight line
// 1 + rt/100; compound bends above it as (1 + r/100)^t. Dollar amounts (with
// the live principal) are computed exactly in the readout.
export function SimpleVsCompoundInterest({ C }) {
  const [principal, setPrincipal] = useState(500)
  const [rate, setRate] = useState(10)
  const years = 10
  const simpleF = t => 1 + (rate / 100) * t
  const compoundF = t => Math.pow(1 + rate / 100, t)
  const sEnd = simpleF(years)
  const cEnd = compoundF(years)
  // simple amount is exact: P·(10 + r)/10 with P a multiple of 50
  const simpleAmt = (principal * (10 + rate)) / 10
  const compoundAmt = principal * cEnd
  // de-collide the two line tags (y-unit ≈ 280/15.4 ≈ 18 px ⇒ need ≥ 2.3u)
  let sTagY = sEnd
  let cTagY = cEnd
  if (cEnd - sEnd < 2.3) {
    const mid = (sEnd + cEnd) / 2
    cTagY = mid + 1.15
    sTagY = mid - 1.15
  }

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Simple versus compound interest as growth factors on a fixed axis"
    >
      <Mafs viewBox={{ x: [-0.9, 13.6], y: [-0.9, 14.5] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian
          xAxis={{
            lines: false,
            labels: n => (Number.isInteger(n) && n >= 0 && n <= years && n % 2 === 0 ? `${n}y` : '')
          }}
          yAxis={false}
        />
        {[1, 5, 10, 14].map(f => (
          <React.Fragment key={f}>
            <Line.Segment
              point1={[0, f]}
              point2={[years + 0.4, f]}
              color={f === 1 ? C.dim : C.faint}
              weight={1}
            />
            <Text x={-0.5} y={f} size={FONT_LABEL} color={C.dim}>
              {`×${f}`}
            </Text>
          </React.Fragment>
        ))}
        {Array.from({ length: years }, (_, t) => (
          <Line.Segment
            key={`s${t}`}
            point1={[t, simpleF(t)]}
            point2={[t + 1, simpleF(t + 1)]}
            color={C.dim}
            weight={2}
          />
        ))}
        {Array.from({ length: years }, (_, t) => (
          <Line.Segment
            key={`c${t}`}
            point1={[t, compoundF(t)]}
            point2={[t + 1, compoundF(t + 1)]}
            color={C.accent}
            weight={2}
          />
        ))}
        <Text x={years + 0.5} y={sTagY} size={FONT_LABEL} color={C.dim}>
          simple
        </Text>
        <Text x={years + 0.5} y={cTagY} size={FONT_LABEL} color={C.accent}>
          compound
        </Text>
      </Mafs>
      <div
        aria-label="Interest readout: exact simple amount and the compound amount"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\text{simple: } ${principal}(1 + \\tfrac{${rate}}{100}\\cdot 10) = \\$${simpleAmt}`}
          />
        </span>
        <span>
          <KatexInline
            tex={`\\text{compound: } ${principal}(1.${String(rate).padStart(2, '0')})^{10} \\approx \\$${compoundAmt.toFixed(2)}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          interest on interest: the gap widens every year
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="Principal"
          value={principal}
          min={100}
          max={2000}
          step={50}
          onChange={setPrincipal}
          format={v => `$${v.toFixed(0)}`}
        />
        <Slider
          label="Rate"
          value={rate}
          min={1}
          max={30}
          step={1}
          onChange={setRate}
          format={v => `${v.toFixed(0)}%`}
        />
      </div>
    </div>
  )
}

// DecimalMultiplierScale - ar.44
// Drag the multiplier along [0.1, 2.0]: ×m ⇔ (m−1)·100 percent change. The
// draggable point now uses the house palette (the Mafs default was indigo -
// monochrome breach); the live values sit under the canvas.
export function DecimalMultiplierScale({ C }) {
  const point = useMovablePoint([1.07, 0], {
    color: C.fg, // literal ink - var(--text-primary) is undefined in the runner (SVG fill would go black)
    constrain: ([x]) => [Math.max(0.1, Math.min(2.0, x)), 0]
  })
  const m = point.x
  const pct = (m - 1) * 100
  const isIncrease = m >= 1

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Decimal multiplier line: drag to trade between multiplier and percent change"
    >
      <Mafs viewBox={{ x: [0, 2.2], y: [-1.5, 1.5] }} preserveAspectRatio={false} height={200}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (n === 1 || n === 2 ? String(n) : '') }}
          yAxis={false}
        />
        <Line.Segment point1={[0.1, 0]} point2={[2.1, 0]} color={C.dim} weight={1.5} />
        <Line.Segment point1={[1, -0.2]} point2={[1, 0.2]} color={C.fg} weight={2} />
        <Text x={1} y={0.55} size={FONT_LABEL} color={C.dim}>
          no change
        </Text>
        <Line.Segment
          point1={[1, 0.7]}
          point2={[m, 0.7]}
          color={isIncrease ? C.accent : C.dim}
          weight={2}
        />
        {point.element}
      </Mafs>
      <div
        aria-label="Multiplier readout: the multiplier and its percent-change meaning"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\times\\,${m.toFixed(2)}`} />
        </span>
        <span>
          <KatexInline tex={`\\equiv ${pct >= 0 ? '+' : ''}${pct.toFixed(1)}\\%`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          {isIncrease ? 'above 1, an increase' : 'below 1, a decrease'}
        </span>
      </div>
    </div>
  )
}
