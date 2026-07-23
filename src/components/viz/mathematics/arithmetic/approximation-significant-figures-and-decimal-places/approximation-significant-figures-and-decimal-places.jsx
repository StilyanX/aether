// APPROXIMATION: SIGNIFICANT FIGURES AND DECIMAL PLACES
// Mafs-based visualizations covering:
//   (a) RoundingSnapDiagram: number-line snap with vertical guides
//   (b) SigFigHighlighter: place-value column diagram with digit highlight
//   (c) BoundsOfAccuracyInterval: interval [V-U/2, V+U/2] with shading
//   (d) AbsoluteVsRelativeError: paired bars showing same absolute error at different scales
//   (e) EstimationExample: 198x32 vs 200x30 bar comparison
//   (f) SigFigVsDecimalPlaces: contrast panel: 0.00312 rounded both ways
//   (g) ApproximationGap: exact value vs successive approximations
//   (h) ThreeReasonsPanel: three reasons to estimate
//   (i) RoundingRuleSnap: the "5 or more rounds up" rule derived from live distances (ADD pass 2026-07-02)
//   (j) AccuracyThresholdStrip: estimate-error verdict bands with live marker (ADD pass 2026-07-02)
// REFINE pass 2026-07-02: (a)(b)(c)(e)(g) recomputed from exact integer /
// rational arithmetic with readout rows under the canvas; (d) true-width
// error strips kept but located with end ticks + readout; (f)(h) rebuilt as
// DOM - they were prose drawn inside a Mafs canvas (forbidden mode 4).
// Each viz takes a `C` color object from useVizColors(). The ADD-pass viz
// also self-supply C via useVizColors() when the prop is absent, so they
// render in the standalone showcase catalog as well as on topic pages.

import React, { useState } from 'react'
import { Mafs, Coordinates, Polygon, LaTeX, Line, Vector } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { useVizColors, OPACITY } from '../../../theme'
import {
  FONT_BODY,
  FONT_FAMILY,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TINY,
  FONT_VALUE,
  LS_CONTROL,
  LS_MEDIUM,
  STROKE_PRIMARY,
  STROKE_SECONDARY
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

// Exact helpers - integer arithmetic only, so displays carry no float dust.
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
// m · 10^e as an exact decimal string (m ≥ 0 integer; e < 0 places the point).
const fmtIntExp = (m, e) => {
  if (e >= 0) return String(m) + '0'.repeat(e)
  const s = String(m).padStart(-e + 1, '0')
  return s.slice(0, e) + '.' + s.slice(e)
}
// Round m·10^e to k significant figures (integer round on the kept digits).
const roundSF = (m, e, k) => {
  const drop = String(m).length - k
  if (drop <= 0) return { m, e }
  return { m: Math.round(m / 10 ** drop), e: e + drop }
}
// Round m·10^e to dp decimal places (target exponent −dp).
const roundDP = (m, e, dp) => {
  const te = -dp
  if (e >= te) return { m: m * 10 ** (e - te), e: te }
  return { m: Math.round(m / 10 ** (te - e)), e: te }
}

// (a) RoundingSnapDiagram
// Shows 0.5764 being rounded to nearest 1, 0.1, 0.01, 0.001.
// Vertical guides above each rounding boundary. Slider picks the precision level.

export function RoundingSnapDiagram({ C }) {
  const [level, setLevel] = useState(2) // 0=units,1=tenth,2=hundredth,3=thousandth

  const labels = [
    'Units (nearest 1)',
    'Tenths (nearest 0.1)',
    'Hundredths (nearest 0.01)',
    'Thousandths (nearest 0.001)'
  ]
  const value = 0.5764
  // Worked value held as EXACT integer ten-thousandths: every boundary,
  // midpoint, snap target, and distance is DERIVED in integer arithmetic
  // (the old hand-precomputed `rounded` arrays are gone - forbidden mode 1).
  const V = 5764 // 0.5764 · 10⁴
  const U = [10000, 1000, 100, 10][level] // rounding unit in 10⁻⁴
  const dec = level // decimals shown at this precision
  const loI = Math.floor(V / U) * U
  const hiI = loI + U
  const midI = loI + U / 2
  const snapI = Math.round(V / U) * U // round-half-up; V is never at a midpoint
  const fmt = n => (n / 10000).toFixed(dec)
  const boundaries = [
    { v: loI / 10000, tex: fmt(loI) },
    { v: midI / 10000, tex: (midI / 10000).toFixed(dec + 1) },
    { v: hiI / 10000, tex: fmt(hiI) }
  ]
  const midTex = fmt(snapI)
  const downI = V - loI // exact distance to the lower boundary, in 10⁻⁴
  const upI = hiI - V // exact distance to the upper boundary

  const pad = 0.35 * U
  const w = { xMin: (loI - pad) / 10000, xMax: (hiI + pad) / 10000 }
  const span = w.xMax - w.xMin
  // Map to Mafs coords: x in [-7,7]
  const toMafs = v => -7 + ((v - w.xMin) / span) * 14
  const vx = toMafs(value)
  const rx = toMafs(snapI / 10000)

  return (
    <>
      <Slider
        label={`Precision: ${labels[level]}`}
        value={level}
        min={0}
        max={3}
        step={1}
        onChange={setLevel}
        format={v => String(Math.round(v))}
      />
      <Mafs viewBox={{ x: [-8, 8], y: [-1.8, 2.5] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* Number line */}
        <Line.Segment point1={[-7.5, 0]} point2={[7.5, 0]} color={C.dim} />

        {/* Boundary marks: multiples short, the decision midpoint tall */}
        {boundaries.map((b, i) => {
          const bx = toMafs(b.v)
          const isMid = i === 1
          return (
            <React.Fragment key={i}>
              <Line.Segment
                point1={[bx, isMid ? -0.35 : -0.25]}
                point2={[bx, isMid ? 1.8 : 0.25]}
                color={isMid ? C.accent : C.dim}
              />
              <LaTeX at={[bx, isMid ? 2.1 : -0.65]} tex={b.tex} color={isMid ? C.accent : C.dim} />
            </React.Fragment>
          )
        })}

        {/* Original value marker */}
        <Polygon
          points={[
            [vx - 0.08, -0.08],
            [vx + 0.08, -0.08],
            [vx + 0.08, 0.08],
            [vx - 0.08, 0.08]
          ]}
          color={C.fg}
          fillOpacity={0.9}
        />
        <LaTeX at={[vx, -1.1]} tex={String(value)} color={C.fg} />

        {/* Rounded value marker (open square; its value lives in the readout) */}
        <Polygon
          points={[
            [rx - 0.12, -0.12],
            [rx + 0.12, -0.12],
            [rx + 0.12, 0.12],
            [rx - 0.12, 0.12]
          ]}
          color={C.accent}
          fillOpacity={0.0}
        />
      </Mafs>
      <div
        aria-label="Rounding snap readout: exact distances to both boundaries and the snap"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: snapI === loI ? 1 : OPACITY.dim }}>
          <KatexInline tex={`|0.5764 - ${fmt(loI)}| = ${(downI / 10000).toFixed(4)}`} />
        </span>
        <span style={{ opacity: snapI === hiI ? 1 : OPACITY.dim }}>
          <KatexInline tex={`|${fmt(hiI)} - 0.5764| = ${(upI / 10000).toFixed(4)}`} />
        </span>
        <span>
          <KatexInline tex={`0.5764 \\approx ${midTex}`} />
        </span>
      </div>
    </>
  )
}

// (b) SigFigHighlighter
// Place-value column diagram. Shows digits of a number above place-value labels.
// Slider changes how many s.f. are kept. Kept digits are highlighted full opacity.

export function SigFigHighlighter({ C }) {
  const [sfCount, setSfCount] = useState(3)

  // 0.04031 held as exact integer hundred-thousandths (4031 · 10⁻⁵). Rounding
  // to k s.f. = integer-round the first k significant digits - COMPUTED here,
  // replacing the old hand-typed result strings (forbidden mode 1). First sig
  // digit sits at the hundredths place, so the display has k+1 decimals.
  const M = 4031
  const uSF = 10 ** (4 - sfCount)
  const keptI = Math.round(M / uSF) * uSF
  const resultTex = (keptI / 100000).toFixed(sfCount + 1)

  // Use 0.04031 as demo number (from inventory example [2])
  // digits: 0 . 0 4 0 3 1
  // significant digits start at index of first non-zero: '4' at column -2
  // Columns with values (d_n where n = column index from decimal point):
  // tenths=-1: 0, hundredths=-2: 4*, thousandths=-3: 0*, ten-thousandths=-4: 3*, hundred-thousandths=-5: 1*
  // First sig fig: hundredths (4). So: positions: [-2,-3,-4,-5] are significant

  const cols = [
    { label: 'tenths', value: '0', sigIndex: -1 }, // not significant (leading zero)
    { label: 'hund-ths', value: '4', sigIndex: 1 }, // 1st sig fig
    { label: 'thou-ths', value: '0', sigIndex: 2 }, // 2nd sig fig (zero between sig digits)
    { label: 'ten-thou', value: '3', sigIndex: 3 }, // 3rd sig fig
    { label: 'hun-thou', value: '1', sigIndex: 4 } // 4th sig fig
  ]

  const xStart = -4.5
  const colW = 2.0
  const maxSF = 4

  return (
    <>
      <Slider
        label={`Significant figures: ${sfCount}`}
        value={sfCount}
        min={1}
        max={maxSF}
        step={1}
        onChange={setSfCount}
      />
      <Mafs viewBox={{ x: [-6, 6], y: [-1.8, 2.5] }} height={210} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* "0." prefix */}
        <LaTeX at={[-5.5, 0.6]} tex={'0.'} color={C.dim} />

        {cols.map((col, i) => {
          const cx = xStart + i * colW
          const isLeading = col.sigIndex < 1
          const isKept = !isLeading && col.sigIndex <= sfCount
          const boxColor = isKept ? C.fg : C.dim

          return (
            <React.Fragment key={i}>
              {/* Column box */}
              <Polygon
                points={[
                  [cx - 0.7, 0.1],
                  [cx + 0.7, 0.1],
                  [cx + 0.7, 1.1],
                  [cx - 0.7, 1.1]
                ]}
                color={boxColor}
                fillOpacity={isKept ? 0.12 : 0.03}
              />
              {/* Digit */}
              <LaTeX at={[cx, 0.5]} tex={col.value} color={isKept ? C.fg : C.dim} />
              {/* Label below */}
              <LaTeX at={[cx, -0.7]} tex={`\\scriptsize{\\text{${col.label}}}`} color={C.dim} />
              {/* S.f. count badge */}
              {!isLeading && col.sigIndex <= sfCount && (
                <LaTeX at={[cx, 1.8]} tex={`\\scriptsize{${col.sigIndex}}`} color={C.accent} />
              )}
            </React.Fragment>
          )
        })}

        {/* Result moved to the readout row below */}
      </Mafs>
      <div
        aria-label="Significant figures readout: the number rounded to the kept figures"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`0.04031 \\;\\to\\; ${sfCount}\\ \\text{s.f.} = ${resultTex}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          counting starts at the first non-zero digit
        </span>
      </div>
    </>
  )
}

// (c) BoundsOfAccuracyInterval
// For a rounded value V to nearest unit U, shows [V-U/2, V+U/2).
// Slider lets user pick from a few preset examples from the inventory.

export function BoundsOfAccuracyInterval({ C }) {
  const [example, setExample] = useState(0)

  const examples = [
    { label: 'Book: 22 cm (nearest 1 cm)', V: 22, U: 1, unit: 'cm' },
    { label: 'Nail: 3.8 cm (nearest 0.1 cm)', V: 3.8, U: 0.1, unit: 'cm' },
    { label: 'Lake: 4200 m (nearest 100 m)', V: 4200, U: 100, unit: 'm' }
  ]

  const { V, U } = examples[example]
  // Exact bounds in integer hundredths - String(V ± U/2) on floats can print
  // "3.8499999999999996"; 100·V and 100·U are exact integers for every preset.
  const V100 = Math.round(V * 100)
  const U100 = Math.round(U * 100)
  const lo = (V100 - U100 / 2) / 100
  const hi = (V100 + U100 / 2) / 100

  // Map to Mafs coords: V at 0, lo at -6, hi at 6
  const toMafs = v => ((v - lo) / U) * 12 - 6

  const vx = toMafs(V) // = 0
  const lox = -6
  const hix = 6

  const loTex = String(lo)
  const hiTex = String(hi)
  const vTex = String(V)

  return (
    <>
      <Slider
        label={`Example ${example + 1} of ${examples.length}`}
        value={example}
        min={0}
        max={examples.length - 1}
        step={1}
        onChange={setExample}
      />
      <Mafs viewBox={{ x: [-8, 8], y: [-2, 2.5] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* Interval shading */}
        <Polygon
          points={[
            [lox, -0.35],
            [hix, -0.35],
            [hix, 0.35],
            [lox, 0.35]
          ]}
          color={C.faint}
          fillOpacity={0.35}
        />

        {/* Number line */}
        <Line.Segment point1={[-7.5, 0]} point2={[7.5, 0]} color={C.dim} />

        {/* Lower bound (closed) */}
        <Polygon
          points={[
            [lox - 0.1, -0.08],
            [lox + 0.1, -0.08],
            [lox + 0.1, 0.08],
            [lox - 0.1, 0.08]
          ]}
          color={C.fg}
          fillOpacity={1}
        />
        <LaTeX at={[lox, -0.9]} tex={loTex} color={C.fg} />
        <LaTeX at={[lox, 1.2]} tex={'\\text{lower}'} color={C.dim} />

        {/* Upper bound (open, small circle) */}
        <Polygon
          points={[
            [hix - 0.1, -0.08],
            [hix + 0.1, -0.08],
            [hix + 0.1, 0.08],
            [hix - 0.1, 0.08]
          ]}
          color={C.fg}
          fillOpacity={0}
        />
        <LaTeX at={[hix, -0.9]} tex={hiTex} color={C.fg} />
        <LaTeX at={[hix, 1.2]} tex={'\\text{upper}'} color={C.dim} />

        {/* Rounded value pinned */}
        <Line.Segment point1={[vx, -0.45]} point2={[vx, 0.45]} color={C.accent} />
        <LaTeX at={[vx, -1.45]} tex={vTex} color={C.accent} />
        <LaTeX at={[vx, 1.95]} tex={'\\text{rounded value}'} color={C.accent} />
      </Mafs>
      <div
        aria-label="Bounds readout: the interval a rounded value pins down and the max error"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`${loTex} \\le \\text{true} < ${hiTex}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\text{max error} = \\tfrac{1}{2} \\times ${U} = ${String(U100 / 2 / 100)}`}
          />
        </span>
      </div>
    </>
  )
}

// (d) AbsoluteVsRelativeError
// Paired horizontal bars. Same absolute error (11 vs 11 units off) but
// different scales so relative error differs dramatically.
// Uses inventory examples [9] and [11].

export function AbsoluteVsRelativeError({ C }) {
  // Examples: A: 127+284, estimated 400 · B: 4257+3461, estimated 7800.
  // B's ABSOLUTE error (82) is 7× A's (11), yet its RELATIVE error is smaller
  // - the base decides. All sums/errors computed in render (no typed answers).
  const examples = [
    { name: 'A', correct: 127 + 284, estimated: 400 },
    { name: 'B', correct: 4257 + 3461, estimated: 7800 }
  ]
  const rows = examples.map(ex => {
    const absErr = Math.abs(ex.correct - ex.estimated)
    return { ...ex, absErr, relPct: ((absErr / ex.correct) * 100).toFixed(1) }
  })

  const maxVal = 7800
  const W = 12 // total width in Mafs units
  const scale = W / maxVal

  const barY = [1.6, 0.2]
  const barH = 0.9

  return (
    <>
      <Mafs viewBox={{ x: [-0.5, 13], y: [-0.8, 3.2] }} height={220} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {rows.map((ex, i) => {
          const corrW = ex.correct * scale
          const estW = ex.estimated * scale
          const y = barY[i]

          return (
            <React.Fragment key={i}>
              {/* Correct value bar - both bars share ONE scale (honest lengths) */}
              <Polygon
                points={[
                  [0, y],
                  [corrW, y],
                  [corrW, y + barH],
                  [0, y + barH]
                ]}
                color={C.dim}
                fillOpacity={0.12}
              />
              {/* Error region at TRUE width - sub-pixel for A, and that IS the
                  point; the end ticks below locate it without inflating it */}
              <Polygon
                points={[
                  [Math.min(corrW, estW), y + 0.15],
                  [Math.max(corrW, estW), y + 0.15],
                  [Math.max(corrW, estW), y + barH - 0.15],
                  [Math.min(corrW, estW), y + barH - 0.15]
                ]}
                color={C.fg}
                fillOpacity={0.5}
              />
              <Line.Segment
                point1={[corrW, y - 0.18]}
                point2={[corrW, y + barH + 0.18]}
                color={C.fg}
              />
              <Line.Segment
                point1={[estW, y - 0.18]}
                point2={[estW, y + barH + 0.18]}
                color={C.accent}
                style="dashed"
              />
              <LaTeX at={[corrW / 2, y + barH + 0.28]} tex={`${ex.correct}`} color={C.dim} />
            </React.Fragment>
          )
        })}
      </Mafs>
      <div
        aria-label="Error comparison readout: absolute and relative error for both bars"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        {rows.map(ex => (
          <span key={ex.name} style={{ opacity: OPACITY.dim }}>
            <KatexInline
              tex={`\\text{${ex.name}: } |${ex.correct} - ${ex.estimated}| = ${ex.absErr},\\; ${ex.absErr}/${ex.correct} \\approx ${ex.relPct}\\%`}
            />
          </span>
        ))}
        <span style={{ textTransform: 'uppercase' }}>bigger base: smaller relative error</span>
      </div>
    </>
  )
}

// (e) EstimationExample
// Visualize 198x32 vs 200x30: true product vs estimate.
// Show as side-by-side area rectangles scaled proportionally.

export function EstimationExample({ C }) {
  // 198 × 32 = 6336 (exact), 200 × 30 = 6000 (estimate)
  // Represent as rectangles: width = longer dim, height = shorter dim
  // Scale to fit Mafs: width 200→10, height 32→1.6
  const scaleX = 10 / 200
  const scaleY = 2.5 / 32

  const exactW = 198 * scaleX // ≈9.9
  const exactH = 32 * scaleY // =2.5
  const estW = 200 * scaleX // =10
  const estH = 30 * scaleY // ≈2.34

  // Place exact at y=1.5, estimate at y=-2.5
  const yExact = 1.5
  const yEst = -3.45 // 40px rule: keeps the facing "198"/"200" labels ≈43px apart

  return (
    <>
      <Mafs viewBox={{ x: [-0.5, 11.5], y: [-5.5, 5.5] }} height={260} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* Exact rectangle */}
        <Polygon
          points={[
            [0, yExact],
            [exactW, yExact],
            [exactW, yExact + exactH],
            [0, yExact + exactH]
          ]}
          color={C.dim}
          fillOpacity={0.12}
        />
        <LaTeX
          at={[exactW / 2, yExact + exactH + 0.4]}
          tex={`198 \\times 32 = ${198 * 32}`}
          color={C.fg}
        />
        <LaTeX at={[-0.3, yExact + exactH / 2]} tex={'32'} color={C.dim} />
        <LaTeX at={[exactW / 2, yExact - 0.4]} tex={'198'} color={C.dim} />

        {/* Estimate rectangle */}
        <Polygon
          points={[
            [0, yEst],
            [estW, yEst],
            [estW, yEst + estH],
            [0, yEst + estH]
          ]}
          color={C.accent}
          fillOpacity={0.1}
        />
        <LaTeX at={[estW / 2, yEst - 0.45]} tex={`200 \\times 30 = ${200 * 30}`} color={C.accent} />
        <LaTeX at={[-0.3, yEst + estH / 2]} tex={'30'} color={C.accent} />
        <LaTeX at={[estW / 2, yEst + estH + 0.4]} tex={'200'} color={C.accent} />
      </Mafs>
      <div
        aria-label="Estimation readout: exact product, estimate, and the live error"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`${198 * 32} - ${200 * 30} = ${198 * 32 - 200 * 30}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`${198 * 32 - 200 * 30}/${198 * 32} \\approx ${(((198 * 32 - 200 * 30) / (198 * 32)) * 100).toFixed(1)}\\%`}
          />
        </span>
      </div>
    </>
  )
}

// (g) ApproximationGap
// Number-line showing the exact value 45.142857... next to successive
// approximations (45, 45.1, 45.14). A shaded segment shows the gap.
// Slider selects the approximation level.

export function ApproximationGap({ C }) {
  const [level, setLevel] = useState(0) // 0=45, 1=45.1, 2=45.14

  const labels = ['45 (0 decimal places)', '45.1 (1 decimal place)', '45.14 (2 decimal places)']
  // The exact value is genuinely exact: 316/7 = 45.142857142857… - each
  // approximation is COMPUTED (toFixed) and the gap is an exact fraction:
  // gap = (316·10^L − 7·A)/(7·10^L), gcd-reduced.
  const exact = 316 / 7
  const approxTexV = exact.toFixed(level)
  const approxV = Number(approxTexV)
  const DL = 10 ** level
  const gapNum0 = 316 * DL - 7 * Math.round(approxV * DL)
  const g = gcdInt(gapNum0, 7 * DL)
  const gapNum = gapNum0 / g
  const gapDen = (7 * DL) / g

  // Window: show range around the exact value
  const windows = [
    { xMin: 44.0, xMax: 46.5 },
    { xMin: 44.8, xMax: 45.5 },
    { xMin: 45.08, xMax: 45.22 }
  ]

  const w = windows[level]
  const span = w.xMax - w.xMin
  const toMafs = v => -7 + ((v - w.xMin) / span) * 14

  const ex = toMafs(exact)
  const ax = toMafs(approxV)
  const gapLeft = Math.min(ex, ax)
  const gapRight = Math.max(ex, ax)

  return (
    <>
      <Slider
        label={`Approximation: ${labels[level]}`}
        value={level}
        min={0}
        max={2}
        step={1}
        onChange={setLevel}
      />
      <Mafs viewBox={{ x: [-8, 8], y: [-2.9, 3.4] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* Number line */}
        <Line.Segment point1={[-7.5, 0]} point2={[7.5, 0]} color={C.dim} />

        {/* Gap shading */}
        <Polygon
          points={[
            [gapLeft, -0.3],
            [gapRight, -0.3],
            [gapRight, 0.3],
            [gapLeft, 0.3]
          ]}
          color={C.fg}
          fillOpacity={0.18}
        />

        {/* Exact value marker */}
        <Polygon
          points={[
            [ex - 0.08, -0.08],
            [ex + 0.08, -0.08],
            [ex + 0.08, 0.08],
            [ex - 0.08, 0.08]
          ]}
          color={C.fg}
          fillOpacity={1}
        />
        <LaTeX at={[ex, -1.1]} tex={'\\tfrac{316}{7} = 45.142857\\ldots'} color={C.fg} />
        <LaTeX at={[ex, 1.5]} tex={'\\text{exact}'} color={C.dim} />

        {/* Approximation marker */}
        <Polygon
          points={[
            [ax - 0.1, -0.1],
            [ax + 0.1, -0.1],
            [ax + 0.1, 0.1],
            [ax - 0.1, 0.1]
          ]}
          color={C.accent}
          fillOpacity={0}
        />
        <LaTeX at={[ax, -2.45]} tex={approxTexV} color={C.accent} />
        <LaTeX at={[ax, 2.85]} tex={'\\text{approx}'} color={C.accent} />
      </Mafs>
      <div
        aria-label="Approximation gap readout: the exact remaining gap at this precision"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`\\left|\\tfrac{316}{7} - ${approxTexV}\\right| = \\tfrac{${gapNum}}{${gapDen}} \\approx ${(gapNum / gapDen).toFixed(6)}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          more decimal places: smaller gap, never zero
        </span>
      </div>
    </>
  )
}

// (h) ThreeReasonsPanel
// REBUILT 2026-07-02: was three prose boxes drawn inside a Mafs canvas -
// canvas-as-text-panel (forbidden mode 4). Prose belongs to DOM: a three-card
// grid in house tokens (zero radius, uppercase labels, opacity hierarchy).
// Engine: DOM - no drawing engine applies to pure prose; verdict in audit.

export function ThreeReasonsPanel({ C }) {
  const panels = [
    {
      label: 'Impossible to measure exactly',
      example: 'Nearest star: 4.3 light years',
      sub: 'no instrument is that precise'
    },
    {
      label: 'Not needed exactly',
      example: 'Elevator rated for 10 people',
      sub: 'exact mass adds no benefit'
    },
    {
      label: 'Better left approximate',
      example: 'National debt: ~8.4 trillion',
      sub: 'exact figure is harder to grasp'
    }
  ]

  return (
    <div
      aria-label="Three reasons to estimate"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        fontFamily: FONT_FAMILY,
        color: C.fg
      }}
    >
      {panels.map((p, i) => (
        <div
          key={i}
          style={{
            border: `1px solid ${C.faint}`,
            background: '#000',
            padding: '16px 16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}
        >
          <div style={{ fontSize: FONT_TINY, letterSpacing: LS_CONTROL, opacity: OPACITY.dim }}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div
            style={{
              fontSize: FONT_LABEL,
              letterSpacing: LS_MEDIUM,
              textTransform: 'uppercase',
              lineHeight: 1.5
            }}
          >
            {p.label}
          </div>
          <div style={{ fontSize: FONT_SMALL, opacity: OPACITY.dim, lineHeight: 1.5 }}>
            {p.example}
          </div>
          <div style={{ fontSize: FONT_TINY, opacity: OPACITY.dim, lineHeight: 1.5 }}>{p.sub}</div>
        </div>
      ))}
    </div>
  )
}

// (i) RoundingRuleSnap
// RoundingRuleSnap - the "5 or more rounds up" rule DERIVED from live distances
// on the tenths line, with the d = 5 tie shown as equidistant + convention.
// Engine: A (Mafs) - WebSearch 2026-07-02: general chart libs (Chart.js /
// Highcharts / Plotly / amCharts) are dashboard-oriented and banned by the
// allowed list; Mafs is the best allowed fit for a slider-driven number line
// with computed snapping. Confirmed round-half-up is a tie-break convention
// (midpoint is genuinely equidistant; Math.round rounds .5 toward +∞).
// Section: approximation-significant-figures-and-decimal-places §0
//
// Math (all computed live from the integer digit d, no float traps):
//   value v = 3 + d/10 (worked interval [3, 4], neighbour digit d ∈ 0..9)
//   distance down = |v − 3| = d tenths;  distance up = |v − 4| = (10 − d) tenths
//   snapped = (d >= 5) ? 4 : 3 - shown to coincide with "nearest", except
//   d = 5 where both distances are equal and the convention decides.

export function RoundingRuleSnap({ C: CProp }) {
  const themeC = useVizColors()
  const C = CProp ?? themeC
  const [d, setD] = useState(7)

  const v = 3 + d / 10
  const downTenths = d // |v - 3| in tenths - exact integer arithmetic
  const upTenths = 10 - d // |v - 4| in tenths
  const roundsUp = d >= 5
  const target = roundsUp ? 4 : 3
  const isTie = d === 5
  const vTex = `3.${d}`
  const downTex = (downTenths / 10).toFixed(1)
  const upTex = (upTenths / 10).toFixed(1)

  // Ticks at every tenth 3.0 … 4.0
  const ticks = Array.from({ length: 11 }, (_, i) => 3 + i / 10)

  return (
    <>
      <Slider
        label={`Neighbour digit d: ${d}`}
        value={d}
        min={0}
        max={9}
        step={1}
        onChange={setD}
        format={x => String(x)}
      />
      <Mafs viewBox={{ x: [2.82, 4.18], y: [-2.0, 2.6] }} height={220} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* Travelled-gap shading: width IS the winning distance |v − target| */}
        {d !== 0 && d !== 10 && v !== target && (
          <Polygon
            points={[
              [Math.min(v, target), -0.12],
              [Math.max(v, target), -0.12],
              [Math.max(v, target), 0.12],
              [Math.min(v, target), 0.12]
            ]}
            color={C.fg}
            fillOpacity={0.18}
          />
        )}

        {/* Number line */}
        <Line.Segment point1={[2.9, 0]} point2={[4.1, 0]} color={C.dim} />

        {/* Tenth ticks; integers emphasized */}
        {ticks.map((t, i) => {
          const isInt = i === 0 || i === 10
          return (
            <Line.Segment
              key={i}
              point1={[t, isInt ? -0.2 : -0.12]}
              point2={[t, isInt ? 0.2 : 0.12]}
              color={isInt ? C.fg : C.dim}
            />
          )
        })}

        {/* Midpoint guide 3.5 - the decision boundary */}
        <Line.Segment
          point1={[3.5, -0.35]}
          point2={[3.5, 1.95]}
          color={isTie ? C.accent : C.dim}
          style="dashed"
        />
        <LaTeX at={[3.5, 2.25]} tex={'\\text{midpoint}'} color={isTie ? C.accent : C.dim} />

        {/* Static endpoint labels */}
        <LaTeX at={[3, -0.62]} tex={'3'} color={C.fg} />
        <LaTeX at={[3.5, -0.62]} tex={'3.5'} color={C.dim} />
        <LaTeX at={[4, -0.62]} tex={'4'} color={C.fg} />

        {/* Value marker (filled) + label */}
        <Polygon
          points={[
            [v - 0.012, -0.09],
            [v + 0.012, -0.09],
            [v + 0.012, 0.09],
            [v - 0.012, 0.09]
          ]}
          color={C.fg}
          fillOpacity={0.95}
        />
        <LaTeX at={[v, 0.55]} tex={vTex} color={C.fg} />

        {/* Target marker (open square) */}
        <Polygon
          points={[
            [target - 0.02, -0.14],
            [target + 0.02, -0.14],
            [target + 0.02, 0.14],
            [target - 0.02, 0.14]
          ]}
          color={C.accent}
          fillOpacity={0}
        />

        {/* Snap arrow at height 1.35: from v to the chosen integer */}
        {v !== target ? (
          <Vector tail={[v, 1.35]} tip={[target, 1.35]} color={C.accent} />
        ) : (
          <LaTeX at={[v, 1.35]} tex={'\\text{already exact}'} color={C.accent} />
        )}
      </Mafs>
      <div
        aria-label="Rounding rule readout: distances to 3 and to 4, and the resulting snap"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 28px',
          justifyContent: 'center',
          marginTop: 12,
          fontFamily: FONT_FAMILY,
          fontSize: FONT_LABEL,
          letterSpacing: LS_CONTROL,
          color: C.fg
        }}
      >
        <span style={{ opacity: roundsUp ? OPACITY.dim : 1 }}>
          <KatexInline tex={`|${vTex} - 3| = ${downTex}`} />
        </span>
        <span style={{ opacity: roundsUp ? 1 : OPACITY.dim }}>
          <KatexInline tex={`|${vTex} - 4| = ${upTex}`} />
        </span>
        <span style={{ opacity: 1 }}>
          <KatexInline tex={`${vTex} \\approx ${target}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          {isTie
            ? 'equidistant: convention rounds up'
            : roundsUp
              ? 'd ≥ 5 → nearer to 4'
              : 'd < 5 → nearer to 3'}
        </span>
      </div>
    </>
  )
}

// (j) AccuracyThresholdStrip
// AccuracyThresholdStrip - the section's three estimate-error verdicts anchored
// to a visual scale: excellent err < 5%, acceptable 5% ≤ err ≤ 10%, too rough
// err > 10%. Marker position and verdict are both computed from the same err.
// Engine: B (SVG primitives) - WebSearch 2026-07-02: linear-gauge libraries
// (gauge.js, AG Charts linear-gauge, Plotly indicator) are canvas-based /
// banned by the allowed list and fight the monochrome zero-radius style; the
// house Plot + rect primitives reproduce the band-scale semantics exactly.
// Section: approximation-significant-figures-and-decimal-places §5

export function AccuracyThresholdStrip({ C: CProp }) {
  const themeC = useVizColors()
  const C = CProp ?? themeC
  const [err, setErr] = useState(6)

  // Verdict - the literal comparisons the section states.
  const verdict = err < 5 ? 'excellent' : err <= 10 ? 'acceptable' : 'too rough'

  // Bands over err ∈ [0, 15] percent. Band ink intensity rises with roughness
  // (opacity ladder faint → dim → full, per the monochrome hierarchy rule).
  const bands = [
    { x0: 0, x1: 5, name: 'excellent', fill: 0.1, ink: OPACITY.faint },
    { x0: 5, x1: 10, name: 'acceptable', fill: 0.28, ink: OPACITY.dim },
    { x0: 10, x1: 15, name: 'too rough', fill: 0.6, ink: OPACITY.fg }
  ]
  const active = verdict === 'excellent' ? 0 : verdict === 'acceptable' ? 1 : 2

  const W = 640
  const H = 190
  const X = { min: -1.2, max: 16.2 }
  const Y = { min: -1.7, max: 2.1 }
  const sx = x => 16 + ((x - X.min) / (X.max - X.min)) * (W - 32)
  const sy = y => 16 + (1 - (y - Y.min) / (Y.max - Y.min)) * (H - 32)
  const rect = (x0, x1, y0, y1) =>
    `${sx(x0)},${sy(y0)} ${sx(x1)},${sy(y0)} ${sx(x1)},${sy(y1)} ${sx(x0)},${sy(y1)}`

  return (
    <>
      <Slider
        label={`Estimate error: ${err.toFixed(1)}%`}
        value={err}
        min={0}
        max={15}
        step={0.1}
        onChange={setErr}
        format={x => `${x.toFixed(1)}%`}
      />
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', width: '100%', height: 'auto', margin: '0 auto', color: C.fg }}
        fontFamily={FONT_FAMILY}
        aria-label="Accuracy verdict strip: error percentage marker over three threshold bands"
      >
        {/* Bands */}
        {bands.map((b, i) => (
          <polygon
            key={b.name}
            points={rect(b.x0, b.x1, 0, 0.8)}
            fill="currentColor"
            fillOpacity={b.fill}
            stroke={i === active ? 'currentColor' : 'none'}
            strokeWidth={STROKE_PRIMARY}
          />
        ))}

        {/* Band names - inside bands; black ink on the bright band */}
        {bands.map((b, i) => (
          <text
            key={b.name}
            x={sx((b.x0 + b.x1) / 2)}
            y={sy(0.4) + 4}
            fill={i === 2 ? '#000' : 'currentColor'}
            opacity={i === 2 ? 0.9 : b.ink}
            fontSize={FONT_LABEL}
            textAnchor="middle"
            letterSpacing="0.14em"
            style={{ textTransform: 'uppercase' }}
          >
            {b.name}
          </text>
        ))}

        {/* Threshold boundaries at 5 and 10 */}
        {[5, 10].map(t => (
          <g key={t} stroke="currentColor" opacity={OPACITY.dim}>
            <line
              x1={sx(t)}
              y1={sy(-0.15)}
              x2={sx(t)}
              y2={sy(0.95)}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={sx(t)}
              y={sy(-0.55)}
              fill="currentColor"
              stroke="none"
              fontSize={FONT_LABEL}
              textAnchor="middle"
            >
              {t}%
            </text>
          </g>
        ))}
        {/* Scale endpoints */}
        <text
          x={sx(0)}
          y={sy(-0.55)}
          fill="currentColor"
          opacity={OPACITY.dim}
          fontSize={FONT_LABEL}
          textAnchor="middle"
        >
          0%
        </text>
        <text
          x={sx(15)}
          y={sy(-0.55)}
          fill="currentColor"
          opacity={OPACITY.dim}
          fontSize={FONT_LABEL}
          textAnchor="middle"
        >
          15%
        </text>

        {/* Marker: triangle above the strip + drop-line through it (black over bright band) */}
        <polygon
          points={`${sx(err) - 6},${sy(1.35)} ${sx(err) + 6},${sy(1.35)} ${sx(err)},${sy(0.95)}`}
          fill="currentColor"
        />
        <line
          x1={sx(err)}
          y1={sy(0.8)}
          x2={sx(err)}
          y2={sy(0)}
          stroke={active === 2 ? '#000' : 'currentColor'}
          strokeWidth={STROKE_PRIMARY}
          opacity={0.9}
        />
        <text
          x={sx(err)}
          y={sy(1.75)}
          fill="currentColor"
          fontSize={FONT_LABEL}
          textAnchor="middle"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {err.toFixed(1)}%
        </text>
      </svg>
      <div
        aria-label="Accuracy verdict readout"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 28px',
          justifyContent: 'center',
          marginTop: 12,
          fontFamily: FONT_FAMILY,
          fontSize: FONT_LABEL,
          letterSpacing: LS_CONTROL,
          color: C.fg
        }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\text{error} = ${err.toFixed(1)}\\%`} />
        </span>
        <span style={{ textTransform: 'uppercase' }}>{verdict}</span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={
              verdict === 'excellent'
                ? '\\text{err} < 5\\%'
                : verdict === 'acceptable'
                  ? '5\\% \\le \\text{err} \\le 10\\%'
                  : '\\text{err} > 10\\%'
            }
          />
        </span>
      </div>
    </>
  )
}

// (f) SigFigVsDecimalPlacesContrast
// REBUILT 2026-07-02: was Mafs used as a text-layout canvas with hand-typed
// result strings (forbidden modes 4 + 1). Now a DOM contrast panel; BOTH
// roundings are COMPUTED with exact integer mantissa/exponent arithmetic
// (roundSF / roundDP / fmtIntExp - no floats, no typed answers).
// Values held as m·10^e: 0.00312 = 312e-5 · 2.6582 = 26582e-4 · 84660 = 84660e0.

export function SigFigVsDecimalPlacesContrast({ C }) {
  const [number, setNumber] = useState(0)

  const examples = [
    {
      m: 312,
      e: -5,
      sfNote: 'first s.f. is the 3: leading zeros never count',
      dpNote: 'tenths 0, hundredths 0: everything rounds away'
    },
    {
      m: 26582,
      e: -4,
      sfNote: 'first s.f. is the 2, second the 6',
      dpNote: 'cut after hundredths; the 8 rounds the 5 up to 6'
    },
    {
      m: 84660,
      e: 0,
      sfNote: 'first s.f. 8, second 4: round at the thousands',
      dpNote: 'no fractional digits to round: value unchanged'
    }
  ]
  const ex = examples[number]
  const valueTex = fmtIntExp(ex.m, ex.e)
  const sf = roundSF(ex.m, ex.e, 2)
  const dp = roundDP(ex.m, ex.e, 2)
  const sfTex = fmtIntExp(sf.m, sf.e)
  const dpTex = fmtIntExp(dp.m, dp.e)

  const cell = {
    border: `1px solid ${C.faint}`,
    background: '#000',
    padding: '16px 16px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }
  const cellHead = {
    fontSize: FONT_TINY,
    letterSpacing: LS_CONTROL,
    textTransform: 'uppercase',
    opacity: OPACITY.dim
  }
  const cellFoot = { ...cellHead, marginTop: 'auto', paddingTop: 8 }

  return (
    <>
      <Slider
        label={`Example ${number + 1} of ${examples.length}`}
        value={number}
        min={0}
        max={examples.length - 1}
        step={1}
        onChange={setNumber}
      />
      <div
        aria-label="Contrast: the same number rounded to two significant figures and to two decimal places"
        style={{ fontFamily: FONT_FAMILY, color: C.fg, marginTop: 12 }}
      >
        <div style={{ textAlign: 'center', margin: '4px 0 16px', fontSize: FONT_VALUE }}>
          <KatexInline tex={valueTex} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={cell}>
            <div style={cellHead}>2 significant figures</div>
            <div style={{ fontSize: FONT_BODY }}>
              <KatexInline tex={`${valueTex} \\;\\to\\; ${sfTex}`} />
            </div>
            <div style={{ fontSize: FONT_SMALL, opacity: OPACITY.dim, lineHeight: 1.5 }}>
              {ex.sfNote}
            </div>
            <div style={cellFoot}>count from the first non-zero digit</div>
          </div>
          <div style={cell}>
            <div style={cellHead}>2 decimal places</div>
            <div style={{ fontSize: FONT_BODY }}>
              <KatexInline tex={`${valueTex} \\;\\to\\; ${dpTex}`} />
            </div>
            <div style={{ fontSize: FONT_SMALL, opacity: OPACITY.dim, lineHeight: 1.5 }}>
              {ex.dpNote}
            </div>
            <div style={cellFoot}>count from the decimal point</div>
          </div>
        </div>
      </div>
    </>
  )
}
