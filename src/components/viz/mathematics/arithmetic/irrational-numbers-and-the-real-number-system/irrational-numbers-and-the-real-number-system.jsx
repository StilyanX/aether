// IRRATIONAL NUMBERS AND THE REAL-NUMBER SYSTEM
// Mafs-driven viz for the Powers, Roots, and Real Numbers unit.
//
// REFINE pass 2026-07-02 (file rewritten):
// - NumberSystemHierarchyViz had placement BLOCKERS: the "½ ∈ ℚ" point sat
//   INSIDE the ℤ rectangle, "−5 ∈ ℤ" sat inside ℕ, and "√2 ∈ ℝ, not ℚ" sat
//   inside ℚ - the containment diagram contradicted itself. All four
//   representatives now sit in their correct annular regions (coordinates
//   checked against every box edge in the header of that component).
// - DecimalExpansionStripViz clipped both edges: strip labels attached west
//   of x = −1.4 (extending off-frame left) and the "terminates/repeating"
//   notes started at x = 13.5 in a frame ending at 14.
// - PerfectSquareParityViz contained literal `y += 0.8` text nodes inside
//   JSX (rendered as junk in the SVG) and shouted "(ODD!)".
// - size-24 canvas text → house 12 file-wide; verdicts and step labels moved
//   to readout rows; dead rep/rx/ry fields removed.
// Engine (WebSearch 2026-07-02, number-line / containment-diagram classes):
// only banned dashboard stacks surfaced; Mafs (A) stays. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.

import { useState, Fragment } from 'react'
import { Mafs, Coordinates, Point, Text, Line, Polygon, LaTeX } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import { FONT_FAMILY, FONT_LABEL, LS_CONTROL, STROKE_PRIMARY } from '../../../scale-tokens'

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

// SqrtTwoBracketingViz - ar.74
// √2 squeezed by squaring: each zoom level is a DECLARED window with labeled
// endpoints, so the per-level rescale is the stated zoom (not mode 2). The
// squared endpoint values prove the bracket; the step statement lives below.
export function SqrtTwoBracketingViz({ C }) {
  const [level, setLevel] = useState(0)

  const levels = [
    { lo: 1, hi: 2, loSq: '1^2 = 1', hiSq: '2^2 = 4', bracket: '1 < \\sqrt{2} < 2' },
    {
      lo: 1.4,
      hi: 1.5,
      loSq: '1.4^2 = 1.96',
      hiSq: '1.5^2 = 2.25',
      bracket: '1.4 < \\sqrt{2} < 1.5'
    },
    {
      lo: 1.41,
      hi: 1.42,
      loSq: '1.41^2 = 1.9881',
      hiSq: '1.42^2 = 2.0164',
      bracket: '1.41 < \\sqrt{2} < 1.42'
    }
  ]
  const L = levels[level]
  const range = L.hi - L.lo
  const xOf = v => ((v - L.lo) / range) * 10 + 1
  const xSqrt = xOf(Math.SQRT2)

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Bracketing the square root of two by squaring, three declared zoom levels"
    >
      <Mafs viewBox={{ x: [-0.5, 13], y: [-2.4, 2.2] }} preserveAspectRatio={false} height={210}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[0, 0]} point2={[12.5, 0]} color={C.dim} weight={1} />
        {[
          [xOf(L.lo), L.lo, L.loSq],
          [xOf(L.hi), L.hi, L.hiSq]
        ].map(([x, v, sq]) => (
          <Fragment key={v}>
            <Line.Segment point1={[x, -0.18]} point2={[x, 0.18]} color={C.fg} weight={2} />
            <Text x={x} y={-0.7} size={FONT_LABEL} color={C.fg}>
              {String(v)}
            </Text>
            <LaTeX at={[x, 1.05]} tex={sq} color={C.dim} />
          </Fragment>
        ))}
        <Line.Segment point1={[xSqrt, -0.4]} point2={[xSqrt, 0.4]} color={C.accent} weight={3} />
        <Point x={xSqrt} y={0} color={C.accent} />
        <LaTeX at={[xSqrt, -1.35]} tex={'\\sqrt{2}'} color={C.accent} />
      </Mafs>
      <div
        aria-label="Bracketing readout: the current inequality and why squaring proves it"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={L.bracket} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'\\sqrt{2} \\approx 1.41421356\\ldots'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          squares bracket 2, the squeeze never ends
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="Zoom level"
          value={level}
          min={0}
          max={2}
          step={1}
          onChange={setLevel}
          format={v => ['Integers', 'Tenths', 'Hundredths'][v]}
        />
      </div>
    </div>
  )
}

// NumberSystemHierarchyViz - ar.75
// Nested boxes ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Placement contract (checked against every box
// edge): ℕ [-2,2]×[-1.2,1.2] · ℤ [-3.5,3.5]×[-2,2] · ℚ [-5,5]×[-2.8,2.8] ·
// ℝ [-6.5,6.5]×[-3.5,3.5].
//   3   at ( 0.0,  0.0) - inside ℕ ✓
//   −5  at (-2.8,  0.0) - |x| > 2 outside ℕ, |x| < 3.5 inside ℤ ✓
//   ½   at ( 4.25, 0.0) - x > 3.5 outside ℤ, x < 5 inside ℚ ✓
//   √2  at (-5.75, 0.0) - |x| > 5 outside ℚ, |x| < 6.5 inside ℝ ✓
export function NumberSystemHierarchyViz({ C }) {
  const boxes = [
    { label: '\\mathbb{R}', x: 6.5, y: 3.5 },
    { label: '\\mathbb{Q}', x: 5, y: 2.8 },
    { label: '\\mathbb{Z}', x: 3.5, y: 2 },
    { label: '\\mathbb{N}', x: 2, y: 1.2 }
  ]
  const reps = [
    { tex: '3', x: 0, accent: false },
    { tex: '-5', x: -2.8, accent: false },
    { tex: '\\tfrac{1}{2}', x: 4.25, accent: false },
    { tex: '\\sqrt{2}', x: -5.75, accent: true }
  ]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Nested number systems: naturals inside integers inside rationals inside reals"
    >
      <Mafs viewBox={{ x: [-7, 7], y: [-4, 4] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {boxes.map((b, i) => (
          <Fragment key={i}>
            <Polygon
              points={[
                [-b.x, -b.y],
                [b.x, -b.y],
                [b.x, b.y],
                [-b.x, b.y]
              ]}
              color={C.fg}
              fillOpacity={0}
              strokeWidth={STROKE_PRIMARY}
            />
            <LaTeX at={[-b.x + 0.55, b.y - 0.45]} tex={b.label} color={C.fg} />
          </Fragment>
        ))}
        {reps.map((r, i) => (
          <Fragment key={i}>
            <Point x={r.x} y={0} color={r.accent ? C.accent : C.fg} />
            <LaTeX at={[r.x, 0.62]} tex={r.tex} color={r.accent ? C.accent : C.fg} />
          </Fragment>
        ))}
      </Mafs>
      <div
        aria-label="Hierarchy readout: each example lives in its ring"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'3 \\in \\mathbb{N}'} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'-5 \\in \\mathbb{Z} \\setminus \\mathbb{N}'} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'\\tfrac{1}{2} \\in \\mathbb{Q} \\setminus \\mathbb{Z}'} />
        </span>
        <span>
          <KatexInline tex={'\\sqrt{2} \\in \\mathbb{R} \\setminus \\mathbb{Q}'} />
        </span>
      </div>
    </div>
  )
}

// DecimalExpansionStripViz - ar.76
// Three decimal expansions digit-by-digit: terminating (¼), repeating (⅓),
// patternless (√2 - digits are the true expansion 1.4142135623…). Labels sit
// ABOVE each strip inside the frame (the old west-attached labels rendered
// off-frame left, and the notes column clipped off-frame right).
export function DecimalExpansionStripViz({ C }) {
  const strips = [
    {
      tex: '\\tfrac{1}{4} = 0.25 \\;\\; \\text{: terminates}',
      digits: ['0', '.', '2', '5', '0', '0', '0', '0', '0', '0', '0', '0'],
      y: 2.4,
      accent: false
    },
    {
      tex: '\\tfrac{1}{3} = 0.\\overline{3} \\;\\; \\text{: repeats}',
      digits: ['0', '.', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
      y: -0.4,
      accent: false
    },
    {
      tex: '\\sqrt{2} = 1.41421356\\ldots \\;\\; \\text{: no pattern}',
      digits: ['1', '.', '4', '1', '4', '2', '1', '3', '5', '6', '2', '3'],
      y: -3.2,
      accent: true
    }
  ]
  const xStart = 0.5
  const spacing = 1.0

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Three decimal expansions: terminating, repeating, and patternless"
    >
      <Mafs viewBox={{ x: [-0.4, 14], y: [-4.2, 4.2] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {strips.map((s, si) => (
          <Fragment key={si}>
            <LaTeX at={[4.5, s.y + 1.15]} tex={s.tex} color={s.accent ? C.accent : C.fg} />
            {s.digits.map((d, di) => {
              const x = xStart + di * spacing
              const isDot = d === '.'
              const trailingZero = d === '0' && di > 3 && si === 0
              const ink = trailingZero ? C.faint : isDot ? C.dim : s.accent ? C.accent : C.fg
              return (
                <Fragment key={di}>
                  {!isDot && (
                    <Line.Segment
                      point1={[x - 0.4, s.y - 0.55]}
                      point2={[x + 0.4, s.y - 0.55]}
                      color={C.dim}
                      weight={1}
                    />
                  )}
                  <Text x={x} y={s.y} size={FONT_LABEL} color={ink}>
                    {d}
                  </Text>
                </Fragment>
              )
            })}
            <Text
              x={xStart + 12 * spacing + 0.3}
              y={s.y}
              size={FONT_LABEL}
              attach="e"
              color={C.dim}
            >
              …
            </Text>
          </Fragment>
        ))}
      </Mafs>
      <div
        aria-label="Expansion readout: the rational-irrational dividing line"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ textTransform: 'uppercase' }}>rational ⟺ decimal terminates or repeats</span>
      </div>
    </div>
  )
}

// PerfectSquareParityViz - ar.77
// Prime-factor stacks: 1936 = 2⁴·11² (all exponents even → perfect square,
// √1936 = 2²·11 = 44) vs 12 = 2²·3 (odd exponent → not). Two canonical
// exemplars by design; verdicts live below the canvas.
export function PerfectSquareParityViz({ C }) {
  const stacks = [
    {
      xBase: -3.5,
      titleTex: '1936 = 2^{4} \\cdot 11^{2}',
      groups: [
        { prime: '2', count: 4 },
        { prime: '11', count: 2 }
      ],
      square: true
    },
    {
      xBase: 3.5,
      titleTex: '12 = 2^{2} \\cdot 3',
      groups: [
        { prime: '2', count: 2 },
        { prime: '3', count: 1 }
      ],
      square: false
    }
  ]

  const renderStack = s => {
    const els = []
    let y = -2.6
    els.push(
      <LaTeX key="t" at={[s.xBase, 3.0]} tex={s.titleTex} color={s.square ? C.accent : C.fg} />
    )
    s.groups.forEach((g, gi) => {
      const y0 = y
      for (let i = 0; i < g.count; i++) {
        els.push(
          <Fragment key={`${gi}-${i}`}>
            <Polygon
              points={[
                [s.xBase - 1.0, y],
                [s.xBase + 1.0, y],
                [s.xBase + 1.0, y + 0.7],
                [s.xBase - 1.0, y + 0.7]
              ]}
              color={
                s.square ? C.accent : gi === s.groups.length - 1 && g.count % 2 === 1 ? C.dim : C.fg
              }
              fillOpacity={0.08}
            />
            <Text x={s.xBase} y={y + 0.35} size={FONT_LABEL} color={C.fg}>
              {g.prime}
            </Text>
          </Fragment>
        )
        y += 0.8
      }
      const mid = (y0 + y - 0.1) / 2
      els.push(
        <Text
          key={`a${gi}`}
          x={s.xBase + 1.3}
          y={mid}
          size={FONT_LABEL}
          attach="e"
          color={g.count % 2 === 0 ? C.accent : C.dim}
        >
          {`exp ${g.count}: ${g.count % 2 === 0 ? 'even' : 'odd'}`}
        </Text>
      )
      y += 0.25
    })
    return els
  }

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Perfect square test: every prime exponent must be even"
    >
      <Mafs viewBox={{ x: [-7, 7], y: [-3.1, 3.6] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[0, -2.9]} point2={[0, 3.4]} color={C.dim} weight={1} />
        {stacks.map((s, i) => (
          <Fragment key={i}>{renderStack(s)}</Fragment>
        ))}
      </Mafs>
      <div
        aria-label="Parity readout: even exponents split evenly under the square root"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={'\\sqrt{1936} = 2^{2} \\cdot 11 = 44'} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'\\sqrt{12} = 2\\sqrt{3} \\notin \\mathbb{Q}'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          perfect square ⟺ every exponent even
        </span>
      </div>
    </div>
  )
}

// SqrtOnNumberLineSliderViz - ar.78
// √n on a fixed 0–5 line: perfect squares land on rational marks, everything
// else lands strictly between them. Verdict and value live below the canvas.
export function SqrtOnNumberLineSliderViz({ C }) {
  const [n, setN] = useState(2)
  const sqrtN = Math.sqrt(n)
  const isPerfectSquare = Number.isInteger(sqrtN) // exact for n ≤ 20
  const xScale = 13 / 5
  const xOf = v => v * xScale
  const perfectSquares = [1, 4, 9, 16]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Square roots on a fixed number line: perfect squares land on integers"
    >
      <Mafs viewBox={{ x: [-0.5, 14], y: [-1.5, 1.9] }} preserveAspectRatio={false} height={180}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[0, 0]} point2={[13.5, 0]} color={C.dim} weight={1} />
        {[0, 1, 2, 3, 4, 5].map(t => (
          <Fragment key={t}>
            <Line.Segment
              point1={[xOf(t), -0.15]}
              point2={[xOf(t), 0.15]}
              color={C.dim}
              weight={1}
            />
            <Text x={xOf(t)} y={-0.55} size={FONT_LABEL} color={C.dim}>
              {String(t)}
            </Text>
          </Fragment>
        ))}
        {perfectSquares.map(ps => (
          <Fragment key={ps}>
            <Point x={xOf(Math.sqrt(ps))} y={0} color={C.accent} />
            <LaTeX at={[xOf(Math.sqrt(ps)), 0.75]} tex={`\\sqrt{${ps}}`} color={C.accent} />
          </Fragment>
        ))}
        {!isPerfectSquare && (
          <>
            <Point x={xOf(sqrtN)} y={0} color={C.fg} />
            <Line.Segment
              point1={[xOf(sqrtN), -0.45]}
              point2={[xOf(sqrtN), 0.45]}
              color={C.fg}
              weight={3}
            />
          </>
        )}
      </Mafs>
      <div
        aria-label="Square root readout: the value and whether it is rational"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={
              isPerfectSquare
                ? `\\sqrt{${n}} = ${sqrtN}`
                : `\\sqrt{${n}} \\approx ${sqrtN.toFixed(4)}`
            }
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          {isPerfectSquare ? 'perfect square: rational' : 'not a perfect square: irrational'}
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="n"
          value={n}
          min={1}
          max={20}
          step={1}
          onChange={setN}
          format={v => `n = ${v}`}
        />
      </div>
    </div>
  )
}

// UnitSquareDiagonalViz - ar.79
// The 1×1 square whose diagonal is √2 - the geometric origin. Static by
// design (the figure IS the theorem's instance); value lives below.
export function UnitSquareDiagonalViz({ C }) {
  const S = 8
  return (
    <div style={{ width: '100%' }} aria-label="Unit square with diagonal root two">
      <Mafs viewBox={{ x: [-1, 10], y: [-1.5, 9.2] }} preserveAspectRatio={false} height={260}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Polygon
          points={[
            [0, 0],
            [S, 0],
            [S, S],
            [0, S]
          ]}
          color={C.fg}
          fillOpacity={0.06}
        />
        <Line.Segment point1={[0, 0]} point2={[S, S]} color={C.accent} weight={2} />
        {[
          [0, 0],
          [S, 0],
          [S, S],
          [0, S]
        ].map(([x, y]) => (
          <Point key={`${x}${y}`} x={x} y={y} color={C.fg} />
        ))}
        <Text x={S / 2} y={-0.7} size={FONT_LABEL} color={C.fg}>
          1
        </Text>
        <Text x={S + 0.6} y={S / 2} size={FONT_LABEL} color={C.fg}>
          1
        </Text>
        <LaTeX at={[S / 2 - 1.3, S / 2 + 0.9]} tex={'\\sqrt{2}'} color={C.accent} />
        <Line.Segment point1={[0.6, 0]} point2={[0.6, 0.6]} color={C.dim} weight={1} />
        <Line.Segment point1={[0, 0.6]} point2={[0.6, 0.6]} color={C.dim} weight={1} />
      </Mafs>
      <div
        aria-label="Diagonal readout: Pythagoras gives root two"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={'d = \\sqrt{1^2 + 1^2} = \\sqrt{2} \\approx 1.41421'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          a length you can draw but never write as a fraction
        </span>
      </div>
    </div>
  )
}

// DensityStripViz - ar.80
// Between any two rationals lies an irrational and vice versa. Each example
// is a DECLARED window with labeled endpoints; the kind statement lives below.
export function DensityStripViz({ C }) {
  const [example, setExample] = useState(0)

  const examples = [
    {
      lo: { val: 0.5, tex: '\\tfrac{1}{2}' },
      hi: { val: 2 / 3, tex: '\\tfrac{2}{3}' },
      mid: { val: Math.sqrt(1 / 3), tex: '\\sqrt{\\tfrac{1}{3}}', accent: true },
      midVal: '\\sqrt{\\tfrac{1}{3}} \\approx 0.5774',
      kind: 'an irrational between two rationals'
    },
    {
      lo: { val: Math.SQRT2, tex: '\\sqrt{2}' },
      hi: { val: Math.sqrt(3), tex: '\\sqrt{3}' },
      mid: { val: 1.5, tex: '\\tfrac{3}{2}', accent: false },
      midVal: '\\sqrt{2} \\approx 1.414 < \\tfrac{3}{2} < \\sqrt{3} \\approx 1.732',
      kind: 'a rational between two irrationals'
    }
  ]
  const E = examples[example]
  const buffer = (E.hi.val - E.lo.val) * 0.25
  const domainLo = E.lo.val - buffer
  const range = E.hi.val + buffer - domainLo
  const xOf = v => ((v - domainLo) / range) * 12

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Density: something of the other kind always lies between"
    >
      <Mafs viewBox={{ x: [-0.5, 13], y: [-2, 2] }} preserveAspectRatio={false} height={190}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[0, 0]} point2={[12.5, 0]} color={C.dim} weight={1} />
        {[E.lo, E.hi].map((p, i) => (
          <Fragment key={i}>
            <Line.Segment
              point1={[xOf(p.val), -0.2]}
              point2={[xOf(p.val), 0.2]}
              color={C.fg}
              weight={2}
            />
            <LaTeX at={[xOf(p.val), -0.85]} tex={p.tex} color={C.fg} />
          </Fragment>
        ))}
        <Line.Segment
          point1={[xOf(E.mid.val), -0.45]}
          point2={[xOf(E.mid.val), 0.45]}
          color={E.mid.accent ? C.accent : C.fg}
          weight={3}
        />
        <Point x={xOf(E.mid.val)} y={0} color={E.mid.accent ? C.accent : C.fg} />
        <LaTeX at={[xOf(E.mid.val), 1.0]} tex={E.mid.tex} color={E.mid.accent ? C.accent : C.fg} />
      </Mafs>
      <div
        aria-label="Density readout: the sandwiched value and its kind"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={E.midVal} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>{E.kind}</span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="Example"
          value={example}
          min={0}
          max={1}
          step={1}
          onChange={setExample}
          format={v => (v === 0 ? 'Irrational between rationals' : 'Rational between irrationals')}
        />
      </div>
    </div>
  )
}
