// PERCENTAGES: CONCEPT AND CONVERSIONS
// Visualisations for the meaning of percent, conversion drills, and relative error.
// Each viz takes a `C` color object from useVizColors().
//
// REFINE pass 2026-07-02 (ar.131–ar.135):
// - FractionToPercentMap's clustered labels (5/16 at 0.3125, 1/3 at 0.333,
//   3/8 at 0.375 - two sharing the same below-offset) overlapped heavily
//   (40 px rule); each label now has an explicit hand-placed anchor with a
//   faint leader line, verified pairwise ≥ 40 px.
// - size-24 → 12 file-wide; fraction/recovery/relative-error equations moved
//   to readout rows; ≈ used where the value is genuinely inexact (relative
//   error, recovery percent), = kept where exact (0.35 = 35/100;
//   112 × 0.88 = 98.56 exact to 2 dp for integer r).
// Engine (WebSearch 2026-07-02, percent-bar / linear-map classes): only
// banned dashboard stacks surfaced; Mafs (A) stays. No swaps.
import React, { useState } from 'react'
import { Mafs, Coordinates, Point, Polygon, Text, LaTeX, Line } from 'mafs'
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

// (a) PercentBar
// Interactive bar showing N% filled (0 to 100).
// A slider controls N. Shows the filled fraction and the label N%.

export function PercentBar({ C, value: initValue = 35 }) {
  const [pct, setPct] = useState(initValue)
  const W = 10
  const H = 1.2
  const filled = (pct / 100) * W
  return (
    <>
      <Mafs
        viewBox={{ x: [-0.5, W + 0.5], y: [-1.8, 2.2] }}
        height={180}
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
          fillOpacity={0.12}
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
            fillOpacity={0.5}
          />
        ))}
        {/* Percent label inside bar */}
        {pct > 8 && (
          <Text x={filled / 2} y={H / 2} size={FONT_LABEL} color={C.fg}>
            {`${pct}%`}
          </Text>
        )}
        {/* Unfilled label */}
        {pct < 92 && (
          <Text x={(filled + W) / 2} y={H / 2} size={FONT_LABEL} color={C.dim}>
            {`${100 - pct}%`}
          </Text>
        )}
        {/* 0 and 100 labels */}
        <Text x={0} y={-0.55} size={FONT_LABEL} color={C.dim}>
          {'0'}
        </Text>
        <Text x={W} y={-0.55} size={FONT_LABEL} color={C.dim}>
          {'100'}
        </Text>
      </Mafs>
      <div
        aria-label="Percent bar readout: the fraction form"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`${pct}\\% = \\tfrac{${pct}}{100}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          percent means per hundred
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
    </>
  )
}

// 10×10 grid of cells. N cells highlighted = N%.
// Slider controls N. Shows "N% of X = (N/100)×X".

// Two parallel horizontal number lines.
// Top: quantity 0..X. Bottom: percent 0..100%.
// An interactive slider chooses the percent; corresponding quantity shown.

// (d) FractionToPercentMap
// Mafs plot of y = 100x showing the linear mapping fraction → percent.
// Labeled points: (1/2, 50), (1/4, 25), (3/8, 37.5), (1/3, 33.3), (3/4, 75), (5/16, 31.25).

// The 0.31/0.33/0.375 cluster cannot be labeled in place - labels are ~0.2
// x-units wide at this aspect, wider than the point spacing. The three
// cluster labels live in a right-side legend column (x = 0.93, 18-unit ≈
// 40 px vertical pitch) with leader lines; ¼ and ½ anchors sit clear of the
// 25%/50% y-tick rows (verifier-probed).
const FRAC_POINTS = [
  { x: 0.5, y: 50, lx: 0.62, ly: 44, tex: '\\tfrac{1}{2} = 50\\%' },
  { x: 0.25, y: 25, lx: 0.36, ly: 15, tex: '\\tfrac{1}{4} = 25\\%' },
  { x: 0.75, y: 75, lx: 0.81, ly: 69, tex: '\\tfrac{3}{4} = 75\\%' },
  { x: 3 / 8, y: 37.5, lx: 0.93, ly: 42, tex: '\\tfrac{3}{8} = 37.5\\%', leader: true },
  {
    x: 1 / 3,
    y: 100 / 3,
    lx: 0.93,
    ly: 24,
    tex: '\\tfrac{1}{3} = 33.\\overline{3}\\%',
    leader: true
  },
  { x: 5 / 16, y: 31.25, lx: 0.93, ly: 6, tex: '\\tfrac{5}{16} = 31.25\\%', leader: true }
]

export function FractionToPercentMap({ C }) {
  return (
    <Mafs viewBox={{ x: [-0.05, 1.1], y: [-8, 108] }} height={260} preserveAspectRatio={false}>
      <Coordinates.Cartesian
        xAxis={{
          labels: x =>
            x === 0
              ? '0'
              : x === 0.25
                ? '¼'
                : x === 0.5
                  ? '½'
                  : x === 0.75
                    ? '¾'
                    : x === 1
                      ? '1'
                      : '',
          lines: 0.25
        }}
        yAxis={{
          labels: y => (y >= 0 && y <= 100 && y % 25 === 0 ? `${y}%` : ''),
          lines: 25
        }}
      />
      {/* y = 100x line */}
      <Line.Segment point1={[0, 0]} point2={[1, 100]} color={C.dim} weight={1.5} />
      {/* Points with hand-placed labels + leaders for the crowded cluster */}
      {FRAC_POINTS.map(({ x, y, lx, ly, tex, leader }) => (
        <React.Fragment key={tex}>
          {leader && (
            <Line.Segment point1={[x, y]} point2={[lx - 0.1, ly]} color={C.faint} weight={1} />
          )}
          <Point x={x} y={y} color={C.fg} opacity={0.9} />
          <LaTeX at={[lx, ly]} tex={tex} color={C.fg} />
        </React.Fragment>
      ))}
    </Mafs>
  )
}

// (e) PercentDecimalSlide
// Shows a decimal number and two arrows: move decimal 2 places right → percent.
// Slider picks the decimal value. Shows the conversion both ways.

export function PercentDecimalSlide({ C }) {
  const [dec, setDec] = useState(0.35)
  // dec is an exact multiple of 0.01 ⇒ the percent is an exact integer; derive
  // it by rounding so float dust (0.07·100 = 7.000000000000001) never reaches
  // the display as a spurious "7.0%".
  const pctInt = Math.round(dec * 100)

  const decStr = dec.toFixed(2) // step 0.01 ⇒ exact
  const pctStr = String(pctInt)

  return (
    <>
      <Mafs viewBox={{ x: [-1, 12], y: [-2.5, 2.5] }} height={180} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* Decimal value */}
        <Text x={2} y={0.8} size={FONT_LABEL} color={C.fg}>
          {decStr}
        </Text>
        {/* Arrow right (→ percent) */}
        <Polygon
          points={[
            [3.5, 0.15],
            [7.5, 0.15],
            [7.5, 0.25],
            [3.5, 0.25]
          ]}
          color={C.fg}
          fillOpacity={0.5}
        />
        <Polygon
          points={[
            [7.5, -0.1],
            [8.2, 0.2],
            [7.5, 0.5]
          ]}
          color={C.fg}
          fillOpacity={0.8}
        />
        <Text x={5.5} y={0.75} size={FONT_LABEL} color={C.dim}>
          {'× 100'}
        </Text>
        {/* Percent value */}
        <Text x={9.5} y={0.8} size={FONT_LABEL} color={C.fg}>
          {`${pctStr}%`}
        </Text>
        {/* Arrow left (← decimal) */}
        <Polygon
          points={[
            [3.5, -0.55],
            [7.5, -0.55],
            [7.5, -0.45],
            [3.5, -0.45]
          ]}
          color={C.dim}
          fillOpacity={0.4}
        />
        <Polygon
          points={[
            [3.5, -0.7],
            [2.8, -0.5],
            [3.5, -0.3]
          ]}
          color={C.dim}
          fillOpacity={0.6}
        />
        <Text x={5.5} y={-0.95} size={FONT_LABEL} color={C.dim}>
          {'÷ 100'}
        </Text>
      </Mafs>
      <div
        aria-label="Decimal-percent readout: the fraction that links them"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`${decStr} = \\tfrac{${pctInt}}{100} = ${pctStr}\\%`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          two decimal places: one factor of 100
        </span>
      </div>
      <Slider
        label="decimal"
        value={dec}
        min={0.01}
        max={1.0}
        step={0.01}
        onChange={v => setDec(Math.round(v * 100) / 100)}
        format={v => v.toFixed(2)}
      />
    </>
  )
}

// (f) UpThenDownAsymmetry
// Shows that P × (1 + r%) × (1 - r%) < P.
// Bar chart: original, after rise, after fall.
// Also shows the recovery percent needed.

export function UpThenDownAsymmetry({ C }) {
  const [r, setR] = useState(12)
  const P = 100
  const afterUp = P * (1 + r / 100)
  const afterDown = afterUp * (1 - r / 100)
  const loss = P - afterDown
  const recoveryPct = (loss / afterDown) * 100

  const MAX_H = 8
  const BAR_W = 1.4
  const barH = v => (v / 150) * MAX_H

  return (
    <>
      <Mafs
        viewBox={{ x: [-0.5, 10], y: [-1.5, MAX_H + 1.5] }}
        height={240}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{
            labels: y =>
              y >= 0 && y <= MAX_H && y % 2 === 0 ? String(Math.round((y / MAX_H) * 150)) : '',
            lines: 2
          }}
        />
        {/* Original bar */}
        <Polygon
          points={[
            [0.5, 0],
            [0.5 + BAR_W, 0],
            [0.5 + BAR_W, barH(P)],
            [0.5, barH(P)]
          ]}
          color={C.fg}
          fillOpacity={0.3}
        />
        <Text x={0.5 + BAR_W / 2} y={-0.7} size={FONT_LABEL} color={C.dim}>
          {'original'}
        </Text>
        <Text x={0.5 + BAR_W / 2} y={barH(P) + 0.4} size={FONT_LABEL} color={C.fg}>
          {String(P)}
        </Text>
        {/* After +r% bar */}
        <Polygon
          points={[
            [3.5, 0],
            [3.5 + BAR_W, 0],
            [3.5 + BAR_W, barH(afterUp)],
            [3.5, barH(afterUp)]
          ]}
          color={C.fg}
          fillOpacity={0.5}
        />
        <Text x={3.5 + BAR_W / 2} y={-0.7} size={FONT_LABEL} color={C.dim}>
          {`+${r}%`}
        </Text>
        <Text x={3.5 + BAR_W / 2} y={barH(afterUp) + 0.4} size={FONT_LABEL} color={C.fg}>
          {afterUp.toFixed(1)}
        </Text>
        {/* After −r% bar */}
        <Polygon
          points={[
            [6.5, 0],
            [6.5 + BAR_W, 0],
            [6.5 + BAR_W, barH(afterDown)],
            [6.5, barH(afterDown)]
          ]}
          color={C.dim}
          fillOpacity={0.4}
        />
        <Text x={6.5 + BAR_W / 2} y={-0.7} size={FONT_LABEL} color={C.dim}>
          {`−${r}%`}
        </Text>
        <Text x={6.5 + BAR_W / 2} y={barH(afterDown) + 0.4} size={FONT_LABEL} color={C.dim}>
          {afterDown.toFixed(2)}
        </Text>
        {/* Horizontal reference line at P */}
        <Polygon
          points={[
            [0, barH(P) - 0.02],
            [9.5, barH(P) - 0.02],
            [9.5, barH(P) + 0.02],
            [0, barH(P) + 0.02]
          ]}
          color={C.dim}
          fillOpacity={0.25}
        />
      </Mafs>
      <div
        aria-label="Asymmetry readout: the exact net loss and the recovery percent"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`100 \\to ${afterUp.toFixed(0)} \\to ${afterDown.toFixed(2)}`} />
        </span>
        <span>
          <KatexInline tex={`\\text{recovery needed} \\approx ${recoveryPct.toFixed(2)}\\%`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          climbing back is steeper than the fall
        </span>
      </div>
      <Slider
        label="rate r%"
        value={r}
        min={1}
        max={40}
        step={1}
        onChange={v => setR(Math.round(v))}
        format={v => `${Math.round(v)}%`}
      />
    </>
  )
}

// (g) RelativeErrorViz
// Two bars: true value and approximate value.
// Shows absolute error as an overlay and relative error as a percent.
// Based on Example 8 from the source: 67.5% ≈ 2/3 ≈ 66.667%.

export function RelativeErrorViz({ C }) {
  const [trueVal, setTrueVal] = useState(67.5)
  const [approxVal, setApproxVal] = useState(66.667)

  const absErr = Math.abs(trueVal - approxVal)
  const relErr = trueVal !== 0 ? (absErr / trueVal) * 100 : 0
  const MAX_H = 8
  const BAR_W = 1.8

  const hTrue = (trueVal / 100) * MAX_H
  const hApprox = (approxVal / 100) * MAX_H

  return (
    <>
      <Mafs viewBox={{ x: [-0.5, 9], y: [-2, MAX_H + 2] }} height={250} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{
            labels: y =>
              y >= 0 && y <= MAX_H && y % 2 === 0 ? `${Math.round((y / MAX_H) * 100)}%` : '',
            lines: 2
          }}
        />
        {/* True value bar */}
        <Polygon
          points={[
            [0.5, 0],
            [0.5 + BAR_W, 0],
            [0.5 + BAR_W, hTrue],
            [0.5, hTrue]
          ]}
          color={C.fg}
          fillOpacity={0.4}
        />
        <Text x={0.5 + BAR_W / 2} y={-0.7} size={FONT_LABEL} color={C.fg}>
          {'true'}
        </Text>
        <Text x={0.5 + BAR_W / 2} y={hTrue + 0.4} size={FONT_LABEL} color={C.fg}>
          {`${trueVal}%`}
        </Text>
        {/* Approx value bar */}
        <Polygon
          points={[
            [4, 0],
            [4 + BAR_W, 0],
            [4 + BAR_W, hApprox],
            [4, hApprox]
          ]}
          color={C.dim}
          fillOpacity={0.35}
        />
        <Text x={4 + BAR_W / 2} y={-0.7} size={FONT_LABEL} color={C.dim}>
          {'approx'}
        </Text>
        <Text x={4 + BAR_W / 2} y={hApprox + 0.4} size={FONT_LABEL} color={C.dim}>
          {`${approxVal.toFixed(3)}%`}
        </Text>
        {/* Absolute error bracket */}
        {absErr > 0.01 && (
          <>
            <Polygon
              points={[
                [4 + BAR_W + 0.15, Math.min(hTrue, hApprox)],
                [4 + BAR_W + 0.25, Math.min(hTrue, hApprox)],
                [4 + BAR_W + 0.25, Math.max(hTrue, hApprox)],
                [4 + BAR_W + 0.15, Math.max(hTrue, hApprox)]
              ]}
              color={C.accent}
              fillOpacity={0.6}
            />
            <LaTeX at={[4 + BAR_W + 1, (hTrue + hApprox) / 2]} tex={'\\Delta'} color={C.accent} />
          </>
        )}
      </Mafs>
      <div
        aria-label="Relative error readout: absolute gap over the true value"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\Delta \\approx ${absErr.toFixed(4)}\\%`} />
        </span>
        <span>
          <KatexInline
            tex={`\\text{rel. error} = \\tfrac{\\Delta}{${trueVal}} \\approx ${relErr.toFixed(2)}\\%`}
          />
        </span>
      </div>
      <Slider
        label="true %"
        value={trueVal}
        min={10}
        max={100}
        step={0.5}
        onChange={setTrueVal}
        format={v => `${v.toFixed(1)}%`}
      />
      <Slider
        label="approx %"
        value={approxVal}
        min={10}
        max={100}
        step={0.001}
        onChange={setApproxVal}
        format={v => `${v.toFixed(3)}%`}
      />
    </>
  )
}

// Radial dial from 0 to 100%. Arc swept from the top, clockwise.
// Slider controls the value. Shows the fraction label inside.
