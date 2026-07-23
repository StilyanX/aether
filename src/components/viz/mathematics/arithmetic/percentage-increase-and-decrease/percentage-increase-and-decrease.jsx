// PERCENTAGE INCREASE AND DECREASE
// Mafs-based visualizations for percentage increase, decrease, profit, loss,
// geometric area change, and reverse percentage reasoning.
// Each viz takes a `C` color object from useVizColors().
//
// REFINE pass 2026-07-02 (ar.120–ar.127, file rewritten):
// - ReversePercentageReasoning (ar.125) had a LOGIC blocker: its epsilon
//   tests marked the wrong candidates (B on 300, S on 237.5) so no candidate
//   ever satisfied both and the ✓ never rendered - the true answer 250 was
//   never identified. The test is now the correct reverse one (could c be
//   the TRUE area given each stated wrong answer), in exact integer
//   arithmetic on 2c (candidates are halves).
// - GeometricAreaChange (ar.124) drew its new rectangle to x = 18 in a
//   13-unit frame at +100% (off-frame); PercentageChangeSymmetryTrap
//   (ar.126) overflowed past ~+70%. Frames/scales now hold the full domain.
// - PercentageIncreaseFormula / DecreaseMirror / ProfitLossOnCostPrice /
//   MultiStepCombinedChange rescaled their axes from the live values every
//   drag (mode 2) - all now use fixed declared dollar scales.
// - On-canvas formula/verdict labels → readout rows; percent readouts get
//   = only when exact ((diff·10⁴) % base === 0), ≈ otherwise.
// Engine (WebSearch 2026-07-02, money-bar / percent classes): only banned
// dashboard stacks surfaced; Mafs (A) stays. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.
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

// percent of base with honest =/≈: exact iff diff·10000 divides base evenly
const pctTex = (diff, base, dp = 2) => {
  const val = (diff / base) * 100
  const exact = (diff * 100 * 10 ** dp) % base === 0
  return `${exact ? '=' : '\\approx'} ${val.toFixed(dp).replace(/\.?0+$/, '')}\\%`
}

// (a) SameIncreaseDifferentBase - ar.120
// The same dollar increase on two bases, drawn on ONE shared dollar scale.
export function SameIncreaseDifferentBase({ C }) {
  const [increase, setIncrease] = useState(70)
  const BASE_LARGE = 7000
  const BASE_SMALL = 100
  const SCALE = 10 / 7700 // shared scale: max drawn length = 7000 + 700
  const H = 0.7

  const wLarge = BASE_LARGE * SCALE
  const wSmall = BASE_SMALL * SCALE
  const wInc = increase * SCALE

  return (
    <>
      <Mafs viewBox={{ x: [-0.3, 11], y: [-0.3, 3.4] }} height={210} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* top: $7000 base + appended increase */}
        <Polygon
          points={[
            [0, 2],
            [wLarge, 2],
            [wLarge, 2 + H],
            [0, 2 + H]
          ]}
          color={C.dim}
          fillOpacity={0.18}
        />
        <Polygon
          points={[
            [wLarge, 2],
            [wLarge + wInc, 2],
            [wLarge + wInc, 2 + H],
            [wLarge, 2 + H]
          ]}
          color={C.accent}
          fillOpacity={0.6}
        />
        <LaTeX at={[wLarge / 2, 2 + H + 0.32]} tex={'\\$7000'} color={C.dim} />
        {/* bottom: $100 base + the SAME appended increase */}
        <Polygon
          points={[
            [0, 0.8],
            [wSmall, 0.8],
            [wSmall, 0.8 + H],
            [0, 0.8 + H]
          ]}
          color={C.dim}
          fillOpacity={0.18}
        />
        <Polygon
          points={[
            [wSmall, 0.8],
            [wSmall + wInc, 0.8],
            [wSmall + wInc, 0.8 + H],
            [wSmall, 0.8 + H]
          ]}
          color={C.accent}
          fillOpacity={0.6}
        />
        <LaTeX at={[Math.max(wSmall / 2, 0.35), 0.8 + H + 0.32]} tex={'\\$100'} color={C.dim} />
      </Mafs>
      <div
        aria-label="Same increase, different base readout"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\tfrac{${increase}}{7000} ${pctTex(increase, 7000)}`} />
        </span>
        <span>
          <KatexInline tex={`\\tfrac{${increase}}{100} = ${increase}\\%`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          same +${increase}: the base decides the percent
        </span>
      </div>
      <Slider
        label="Absolute increase ($)"
        value={increase}
        min={1}
        max={700}
        step={1}
        onChange={setIncrease}
      />
    </>
  )
}

// (b) PercentageIncreaseFormula - ar.121
// Original and new value at TRUE positions on a fixed declared $0–20k line.
export function PercentageIncreaseFormula({ C }) {
  const [origVal, setOrigVal] = useState(6400)
  const [newVal, setNewVal] = useState(6800)
  const effectiveNew = Math.max(origVal + 1, newVal)
  const diff = effectiveNew - origVal
  const MAX = 20000
  const toX = v => (v / MAX) * 10

  return (
    <>
      <Mafs viewBox={{ x: [-0.3, 10.8], y: [-1.6, 2.2] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        <Polygon
          points={[
            [0, 0],
            [10, 0],
            [10, 0.05],
            [0, 0.05]
          ]}
          color={C.dim}
          fillOpacity={0.4}
        />
        {[0, 5000, 10000, 15000, 20000].map(v => (
          <Text key={v} x={toX(v)} y={-1.1} size={FONT_LABEL} color={C.dim}>
            {v === 0 ? '$0' : `$${v / 1000}k`}
          </Text>
        ))}
        {[
          [origVal, '\\text{original}', C.dim],
          [effectiveNew, '\\text{new}', C.fg]
        ].map(([v, tex, ink]) => (
          <React.Fragment key={tex}>
            <Polygon
              points={[
                [toX(v) - 0.03, -0.35],
                [toX(v) + 0.03, -0.35],
                [toX(v) + 0.03, 0.35],
                [toX(v) - 0.03, 0.35]
              ]}
              color={ink}
              fillOpacity={0.9}
            />
            <LaTeX at={[toX(v), 0.68]} tex={tex} color={ink} />
          </React.Fragment>
        ))}
        <Polygon
          points={[
            [toX(origVal), 1.15],
            [toX(effectiveNew), 1.15],
            [toX(effectiveNew), 1.27],
            [toX(origVal), 1.27]
          ]}
          color={C.accent}
          fillOpacity={0.6}
        />
      </Mafs>
      <div aria-label="Percentage increase readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\$${effectiveNew.toLocaleString()} - \\$${origVal.toLocaleString()} = \\$${diff.toLocaleString()}`}
          />
        </span>
        <span>
          <KatexInline tex={`\\tfrac{${diff}}{${origVal}} \\times 100 ${pctTex(diff, origVal)}`} />
        </span>
      </div>
      <Slider
        label="Original value ($)"
        value={origVal}
        min={100}
        max={10000}
        step={100}
        onChange={setOrigVal}
      />
      <Slider
        label="New value ($)"
        value={newVal}
        min={100}
        max={20000}
        step={100}
        onChange={setNewVal}
      />
    </>
  )
}

// (c) PercentageDecreaseMirror - ar.122
// Mirror case on the same fixed $0–10k line.
export function PercentageDecreaseMirror({ C }) {
  const [origVal, setOrigVal] = useState(6800)
  const [newVal, setNewVal] = useState(6400)
  const effectiveNew = Math.min(origVal - 1, newVal)
  const diff = origVal - effectiveNew
  const MAX = 10000
  const toX = v => (v / MAX) * 10

  return (
    <>
      <Mafs viewBox={{ x: [-0.3, 10.8], y: [-1.6, 2.2] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        <Polygon
          points={[
            [0, 0],
            [10, 0],
            [10, 0.05],
            [0, 0.05]
          ]}
          color={C.dim}
          fillOpacity={0.4}
        />
        {[0, 2500, 5000, 7500, 10000].map(v => (
          <Text key={v} x={toX(v)} y={-1.1} size={FONT_LABEL} color={C.dim}>
            {v === 0 ? '$0' : `$${v / 1000}k`}
          </Text>
        ))}
        {[
          [origVal, '\\text{original}', C.dim],
          [effectiveNew, '\\text{new}', C.fg]
        ].map(([v, tex, ink]) => (
          <React.Fragment key={tex}>
            <Polygon
              points={[
                [toX(v) - 0.03, -0.35],
                [toX(v) + 0.03, -0.35],
                [toX(v) + 0.03, 0.35],
                [toX(v) - 0.03, 0.35]
              ]}
              color={ink}
              fillOpacity={0.9}
            />
            <LaTeX at={[toX(v), 0.68]} tex={tex} color={ink} />
          </React.Fragment>
        ))}
        <Polygon
          points={[
            [toX(effectiveNew), 1.15],
            [toX(origVal), 1.15],
            [toX(origVal), 1.27],
            [toX(effectiveNew), 1.27]
          ]}
          color={C.accent}
          fillOpacity={0.6}
        />
      </Mafs>
      <div aria-label="Percentage decrease readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\$${origVal.toLocaleString()} - \\$${effectiveNew.toLocaleString()} = \\$${diff.toLocaleString()}`}
          />
        </span>
        <span>
          <KatexInline tex={`\\tfrac{${diff}}{${origVal}} \\times 100 ${pctTex(diff, origVal)}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          still divided by the ORIGINAL
        </span>
      </div>
      <Slider
        label="Original value ($)"
        value={origVal}
        min={200}
        max={10000}
        step={100}
        onChange={setOrigVal}
      />
      <Slider
        label="New value ($)"
        value={newVal}
        min={100}
        max={9900}
        step={100}
        onChange={setNewVal}
      />
    </>
  )
}

// (d) ProfitLossOnCostPrice - ar.123
// Cost and selling bars on a FIXED $0–3000 height scale.
export function ProfitLossOnCostPrice({ C }) {
  const [cost, setCost] = useState(500)
  const [selling, setSelling] = useState(620)
  const isProfit = selling >= cost
  const diff = Math.abs(selling - cost)
  const MAX = 3000
  const toH = v => (v / MAX) * 5.5
  const BW = 1.8

  return (
    <>
      <Mafs viewBox={{ x: [-1.6, 7], y: [-1.1, 6.4] }} height={240} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* fixed $ scale */}
        {[0, 1000, 2000, 3000].map(v => (
          <React.Fragment key={v}>
            <Polygon
              points={[
                [0.1, toH(v)],
                [5.6, toH(v)],
                [5.6, toH(v) + 0.015],
                [0.1, toH(v) + 0.015]
              ]}
              color={C.faint}
              fillOpacity={0.5}
            />
            <Text x={-0.8} y={toH(v)} size={FONT_LABEL} color={C.dim}>
              {v === 0 ? '$0' : `$${v / 1000}k`}
            </Text>
          </React.Fragment>
        ))}
        <Polygon
          points={[
            [0.7, 0],
            [0.7 + BW, 0],
            [0.7 + BW, toH(cost)],
            [0.7, toH(cost)]
          ]}
          color={C.dim}
          fillOpacity={0.3}
        />
        <LaTeX at={[0.7 + BW / 2, -0.5]} tex={'\\text{cost}'} color={C.dim} />
        <Polygon
          points={[
            [3.4, 0],
            [3.4 + BW, 0],
            [3.4 + BW, toH(selling)],
            [3.4, toH(selling)]
          ]}
          color={C.fg}
          fillOpacity={0.35}
        />
        <LaTeX at={[3.4 + BW / 2, -0.5]} tex={'\\text{selling}'} color={C.fg} />
        {/* the profit/loss strip on the selling bar */}
        <Polygon
          points={[
            [3.4, toH(Math.min(cost, selling))],
            [3.4 + BW, toH(Math.min(cost, selling))],
            [3.4 + BW, toH(Math.max(cost, selling))],
            [3.4, toH(Math.max(cost, selling))]
          ]}
          color={C.accent}
          fillOpacity={0.55}
        />
      </Mafs>
      <div
        aria-label="Profit or loss readout: percent of the cost price"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\$${selling} - \\$${cost} = ${isProfit ? '' : '-'}\\$${diff}`} />
        </span>
        <span>
          <KatexInline
            tex={`\\tfrac{${diff}}{${cost}} \\times 100 ${pctTex(diff, cost, 1)}\\ \\text{${isProfit ? 'profit' : 'loss'}}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          base: the cost price
        </span>
      </div>
      <Slider
        label="Cost price ($)"
        value={cost}
        min={100}
        max={2000}
        step={10}
        onChange={setCost}
      />
      <Slider
        label="Selling price ($)"
        value={selling}
        min={10}
        max={3000}
        step={10}
        onChange={setSelling}
      />
    </>
  )
}

// (e) GeometricAreaChange - ar.124
// One side up p%, the adjacent side down q%: the rectangles are drawn at true
// relative scale, and the area change is the EXACT p − q − pq/100.
export function GeometricAreaChange({ C }) {
  const [sidePct, setSidePct] = useState(20)
  const [adjPct, setAdjPct] = useState(25)
  // exact rational: Δ% = p − q − pq/100 (integer p, q ⇒ exact to 2 dp)
  const areaPct = sidePct - adjPct - (sidePct * adjPct) / 100
  const areaTex = `${areaPct >= 0 ? '+' : ''}${Number(areaPct.toFixed(2))}\\%`

  const S = 4.2 // original square side in mafs units
  const dW = S * (1 + sidePct / 100) // ≤ 6.3 at +50%
  const dH = S * (1 - adjPct / 100)

  return (
    <>
      <Mafs viewBox={{ x: [-0.7, 12.6], y: [-0.9, 5.4] }} height={230} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        <Polygon
          points={[
            [0, 0],
            [S, 0],
            [S, S],
            [0, S]
          ]}
          color={C.dim}
          fillOpacity={0.12}
        />
        <LaTeX at={[S / 2, -0.42]} tex={'s'} color={C.dim} />
        <LaTeX at={[-0.35, S / 2]} tex={'s'} color={C.dim} />
        <LaTeX at={[S / 2, S / 2]} tex={'\\text{original}'} color={C.dim} />
        <Polygon
          points={[
            [5.6, 0],
            [5.6 + dW, 0],
            [5.6 + dW, dH],
            [5.6, dH]
          ]}
          color={C.fg}
          fillOpacity={0.2}
        />
        <LaTeX at={[5.6 + dW / 2, -0.42]} tex={`+${sidePct}\\%`} color={C.fg} />
        <LaTeX at={[5.25, Math.max(dH / 2, 0.3)]} tex={`-${adjPct}\\%`} color={C.fg} />
      </Mafs>
      <div
        aria-label="Area change readout: the exact combined effect"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`(1 + ${(sidePct / 100).toFixed(2)})(1 - ${(adjPct / 100).toFixed(2)}) = ${(((100 + sidePct) * (100 - adjPct)) / 10000).toFixed(4).replace(/0+$/, '').replace(/\.$/, '')}`}
          />
        </span>
        <span>
          <KatexInline tex={`\\text{area change} = ${areaTex}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          equal percents do not cancel: the cross term pq/100 remains
        </span>
      </div>
      <Slider
        label="Side increase (%)"
        value={sidePct}
        min={0}
        max={50}
        step={1}
        onChange={setSidePct}
      />
      <Slider
        label="Adjacent side decrease (%)"
        value={adjPct}
        min={0}
        max={50}
        step={1}
        onChange={setAdjPct}
      />
    </>
  )
}

// (f) ReversePercentageReasoning - ar.125
// Beatriz answered 300 (wrong by 20%); Saghir answered 237.5 (wrong by 5%).
// A candidate c can be the TRUE area only if each stated answer is exactly
// that percent off c. Exact integer tests on 2c (candidates are halves):
//   Beatriz: 300 = 1.2c ⇔ 6·(2c) = 3000 ⇒ c = 250 · 300 = 0.8c ⇒ c = 375
//   Saghir: 237.5 = 0.95c ⇔ 19·(2c) = 9500 ⇒ c = 250 · 237.5 = 1.05c ⇒ c ∉ ℤ/2
// Only c = 250 passes both - the old epsilon version marked B on 300 and S
// on 237.5, so its ✓ could never fire.
export function ReversePercentageReasoning({ C }) {
  const [showBeatriz, setShowBeatriz] = useState(true)
  const [showSaghir, setShowSaghir] = useState(true)
  const candidates = [237.5, 250, 260, 300]

  const checkBeatriz = c => {
    const c2 = 2 * c // integer
    return 6 * c2 === 3000 || 4 * c2 === 3000 // 1.2c = 300 or 0.8c = 300
  }
  const checkSaghir = c => {
    const c2 = 2 * c
    return 19 * c2 === 9500 || 21 * c2 === 9500 // 0.95c = 237.5 or 1.05c = 237.5
  }

  const MIN_V = 220
  const MAX_V = 320
  const toX = v => ((v - MIN_V) / (MAX_V - MIN_V)) * 9

  return (
    <>
      <Mafs viewBox={{ x: [-0.5, 9.7], y: [-1.9, 2.1] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        <Polygon
          points={[
            [0, 0],
            [9.2, 0],
            [9.2, 0.04],
            [0, 0.04]
          ]}
          color={C.dim}
          fillOpacity={0.4}
        />
        {candidates.map(c => {
          const x = toX(c)
          const okB = checkBeatriz(c)
          const okS = checkSaghir(c)
          const active =
            (!showBeatriz || okB) && (!showSaghir || okS) && (showBeatriz || showSaghir)
          const col = active ? C.accent : C.dim
          return (
            <React.Fragment key={c}>
              <Polygon
                points={[
                  [x - 0.05, -0.4],
                  [x + 0.05, -0.4],
                  [x + 0.05, 0.44],
                  [x - 0.05, 0.44]
                ]}
                color={col}
                fillOpacity={active ? 1 : 0.45}
              />
              <LaTeX at={[x, -0.85]} tex={`${c}`} color={col} />
              {active && <LaTeX at={[x, 0.95]} tex={'\\checkmark'} color={C.accent} />}
            </React.Fragment>
          )
        })}
      </Mafs>
      <div
        aria-label="Reverse percentage readout: undoing each error lands on 250"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        {showBeatriz && (
          <span style={{ opacity: OPACITY.dim }}>
            <KatexInline tex={'300 \\div 1.2 = 250'} />
          </span>
        )}
        {showSaghir && (
          <span style={{ opacity: OPACITY.dim }}>
            <KatexInline tex={'237.5 \\div 0.95 = 250'} />
          </span>
        )}
        <span>
          <KatexInline tex={'\\text{true area} = 250\\ \\text{m}^2'} />
        </span>
      </div>
      <div style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}>
        {[
          { label: 'Beatriz answered 300 (wrong by 20%)', val: showBeatriz, set: setShowBeatriz },
          { label: 'Saghir answered 237.5 (wrong by 5%)', val: showSaghir, set: setShowSaghir }
        ].map(({ label, val, set }) => (
          <label
            key={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              color: 'var(--text-body)',
              fontSize: '14px',
              fontFamily: FONT_FAMILY
            }}
          >
            <input
              type="checkbox"
              checked={val}
              onChange={e => set(e.target.checked)}
              style={{ accentColor: 'var(--text-primary)' }}
            />
            {label}
          </label>
        ))}
      </div>
    </>
  )
}

// (h) PercentageChangeSymmetryTrap - ar.126
// Up p% then down q%: three bars on one FIXED scale that holds ×2 (the old
// scale overflowed the frame past ~+70%).
export function PercentageChangeSymmetryTrap({ C }) {
  const [upPct, setUpPct] = useState(20)
  const [downPct, setDownPct] = useState(20)
  const orig = 100
  const afterUp = orig * (1 + upPct / 100)
  const afterDown = afterUp * (1 - downPct / 100)
  // exact: net% = p − q − pq/100
  const netPct = upPct - downPct - (upPct * downPct) / 100
  const netTex = `${netPct >= 0 ? '+' : ''}${Number(netPct.toFixed(2))}\\%`

  const SCALE = 9.6 / 200 // holds afterUp ≤ 200
  const H = 0.55
  const GAP = 1.1
  const rows = [
    { w: orig * SCALE, y: GAP * 2, tex: '\\text{start}', fill: 0.25, ink: C.dim },
    {
      w: afterUp * SCALE,
      y: GAP,
      tex: `\\times ${(1 + upPct / 100).toFixed(2)}`,
      fill: 0.35,
      ink: C.fg
    },
    {
      w: afterDown * SCALE,
      y: 0,
      tex: `\\times ${(1 - downPct / 100).toFixed(2)}`,
      fill: 0.55,
      ink: C.fg
    }
  ]

  return (
    <>
      <Mafs viewBox={{ x: [-1.6, 10.4], y: [-0.4, 3.4] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* reference line at the original width */}
        <Polygon
          points={[
            [orig * SCALE, -0.15],
            [orig * SCALE + 0.02, -0.15],
            [orig * SCALE + 0.02, GAP * 2 + H + 0.15],
            [orig * SCALE, GAP * 2 + H + 0.15]
          ]}
          color={C.faint}
          fillOpacity={0.6}
        />
        {rows.map((r, i) => (
          <React.Fragment key={i}>
            <Polygon
              points={[
                [0, r.y],
                [r.w, r.y],
                [r.w, r.y + H],
                [0, r.y + H]
              ]}
              color={r.ink}
              fillOpacity={r.fill}
            />
            <LaTeX at={[-0.75, r.y + H / 2]} tex={r.tex} color={r.ink} />
          </React.Fragment>
        ))}
      </Mafs>
      <div
        aria-label="Symmetry trap readout: the changes do not cancel"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`100 \\to ${Number(afterUp.toFixed(2))} \\to ${Number(afterDown.toFixed(2))}`}
          />
        </span>
        <span>
          <KatexInline tex={`\\text{net} = ${netTex}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          the decrease acts on a bigger number
        </span>
      </div>
      <Slider label="Increase (%)" value={upPct} min={1} max={100} step={1} onChange={setUpPct} />
      <Slider
        label="Decrease (%)"
        value={downPct}
        min={1}
        max={99}
        step={1}
        onChange={setDownPct}
      />
    </>
  )
}

// (g) MultiStepCombinedChange - ar.127
// Three cost components each changing; bars on one FIXED $0–23k scale.
export function MultiStepCombinedChange({ C }) {
  const [wagesBase, setWagesBase] = useState(6000)
  const [materialsBase, setMaterialsBase] = useState(4000)
  const [overheadsBase, setOverheadsBase] = useState(2000)
  const [wagesPct, setWagesPct] = useState(12)
  const [materialsPct, setMaterialsPct] = useState(8)
  const [overheadsPct, setOverheadsPct] = useState(5)

  const newWages = wagesBase * (1 + wagesPct / 100)
  const newMaterials = materialsBase * (1 + materialsPct / 100)
  const newOverheads = overheadsBase * (1 + overheadsPct / 100)
  const origTotal = wagesBase + materialsBase + overheadsBase
  const newTotal = newWages + newMaterials + newOverheads
  const totalDiff = newTotal - origTotal

  const MAX = 23000 // fixed: max component = 15000 × 1.5 = 22500
  const toW = v => (v / MAX) * 9
  const H = 0.9
  const GAP = 1.2
  const rows = [
    { label: '\\text{wages}', base: wagesBase, newVal: newWages, y: GAP * 2 },
    { label: '\\text{materials}', base: materialsBase, newVal: newMaterials, y: GAP },
    { label: '\\text{overheads}', base: overheadsBase, newVal: newOverheads, y: 0 }
  ]

  return (
    <>
      <Mafs viewBox={{ x: [-1.9, 9.4], y: [-0.4, 3.6] }} height={220} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {rows.map(({ label, base, newVal, y }) => (
          <React.Fragment key={label}>
            <Polygon
              points={[
                [0, y],
                [toW(base), y],
                [toW(base), y + H * 0.45],
                [0, y + H * 0.45]
              ]}
              color={C.dim}
              fillOpacity={0.2}
            />
            <Polygon
              points={[
                [0, y + H * 0.5],
                [toW(newVal), y + H * 0.5],
                [toW(newVal), y + H],
                [0, y + H]
              ]}
              color={C.fg}
              fillOpacity={0.4}
            />
            <LaTeX at={[-1.0, y + H / 2]} tex={label} color={C.dim} />
          </React.Fragment>
        ))}
      </Mafs>
      <div
        aria-label="Combined change readout: totals and the overall percent"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\$${origTotal.toLocaleString()} \\to \\$${Math.round(newTotal).toLocaleString()}`}
          />
        </span>
        <span>
          <KatexInline tex={`\\text{overall} ${pctTex(totalDiff, origTotal, 1)}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          a weighted blend, nearer the biggest component's change
        </span>
      </div>
      <Slider
        label="Wages ($)"
        value={wagesBase}
        min={1000}
        max={15000}
        step={500}
        onChange={setWagesBase}
      />
      <Slider
        label="Materials ($)"
        value={materialsBase}
        min={500}
        max={10000}
        step={500}
        onChange={setMaterialsBase}
      />
      <Slider
        label="Overheads ($)"
        value={overheadsBase}
        min={500}
        max={8000}
        step={500}
        onChange={setOverheadsBase}
      />
      <Slider
        label="Wages increase (%)"
        value={wagesPct}
        min={0}
        max={50}
        step={1}
        onChange={setWagesPct}
      />
      <Slider
        label="Materials increase (%)"
        value={materialsPct}
        min={0}
        max={50}
        step={1}
        onChange={setMaterialsPct}
      />
      <Slider
        label="Overheads increase (%)"
        value={overheadsPct}
        min={0}
        max={50}
        step={1}
        onChange={setOverheadsPct}
      />
    </>
  )
}
