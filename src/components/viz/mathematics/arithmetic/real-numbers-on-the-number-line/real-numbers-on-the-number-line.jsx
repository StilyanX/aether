// REAL NUMBERS ON THE NUMBER LINE
// Mafs-driven viz for the Powers, Roots, and Real Numbers unit.
// Geometric placement of irrational numbers on the line: the compass transfer
// of a constructed length onto the line, the spiral of Theodorus, and the
// one-to-one match between points and real numbers.
//
// REFINE pass 2026-07-03 (real-numbers-on-the-number-line, ar.155–157):
// - Convention breach FIXED: on-canvas labels were size={24}/{22} (house max
//   FONT_TEX = 13) and all math was UNICODE plain text ("√2", "√2 ≈ 1.414",
//   "−3/2", "π", "√{n+1}") - rule 11 wants LaTeX. Root/fraction/π identifiers
//   now render as Mafs <LaTeX>; integer number-line ticks stay as Text at
//   FONT_AXIS. Value readouts ("√2 ≈ 1.414") and the "every point is one real
//   number, no gaps" sentence moved off the canvas into a KatexInline readout /
//   the existing prose caption. Stroke widths tokenized (STROKE_SECONDARY for
//   the line + ticks, STROKE_PRIMARY for constructed/accent segments).
// - CompassTransferViz + SpiralOfTheodorusViz are genuinely interactive
//   (compass swing t; triangle count n). RealsAsPointsViz is the canonical
//   "reals ARE the points" figure - static BY DESIGN (logged, not mode 1).
// Geometry verified honest: compass radius R = S·√2, lands at line-unit √2 ≈
//   1.414; spiral hypotenuse k = √(k+1) (√2, √3, √4 …). Engine: Mafs (A) is the
//   right tool for ruler-and-compass constructions - no swap, no rebuild.
import { useState } from 'react'
import { Mafs, Coordinates, Point, Text, Line, Polygon, Plot, LaTeX } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import {
  FONT_AXIS,
  FONT_LABEL,
  FONT_FAMILY,
  FONT_TEX,
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

const CAPTION = { textAlign: 'center', fontSize: FONT_TEX, marginTop: 6 }

// RNL.1: CompassTransferViz
// Build the unit square on the line (0 to 1), draw its diagonal (length √2),
// then swing a compass arc from the diagonal tip down to the line. It lands on √2.
export function CompassTransferViz({ C }) {
  const [t, setT] = useState(0)

  const S = 2 // 1 line-unit = 2 Mafs-units, so the figure is large and clear
  const sqrt2 = Math.SQRT2

  const startAngle = Math.PI / 4
  const angle = startAngle * (1 - t)
  const R = S * sqrt2
  const handX = R * Math.cos(angle)
  const handY = R * Math.sin(angle)
  const arc = a => [R * Math.cos(a), R * Math.sin(a)]

  const ticks = [0, 1, 2, 3, 4]

  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-1, 9], y: [-1.4, 4.6] }} preserveAspectRatio={false} height={300}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />

        {/* Number line */}
        <Line.Segment
          point1={[-0.6, 0]}
          point2={[8.6, 0]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />
        <Line.Segment
          point1={[8.3, 0.15]}
          point2={[8.6, 0]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />
        <Line.Segment
          point1={[8.3, -0.15]}
          point2={[8.6, 0]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />

        {/* Integer ticks (line-units 0,1,2,3 -> Mafs 0,2,4,6) */}
        {ticks.map(n => (
          <g key={n}>
            <Line.Segment
              point1={[n * S, -0.15]}
              point2={[n * S, 0.15]}
              color={C.dim}
              weight={STROKE_SECONDARY}
            />
            <Text x={n * S} y={-0.55} size={FONT_AXIS} attach="s" color={C.dim}>
              {String(n)}
            </Text>
          </g>
        ))}

        {/* Unit square on 0..1 */}
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

        {/* Diagonal = √2 */}
        <Line.Segment point1={[0, 0]} point2={[S, S]} color={C.accent} weight={STROKE_PRIMARY} />
        <LaTeX at={[S / 2 - 0.55, S / 2 + 0.4]} tex={`\\sqrt{2}`} color={C.accent} />

        {/* Right-angle marker at origin */}
        <Line.Segment
          point1={[0.25, 0]}
          point2={[0.25, 0.25]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />
        <Line.Segment
          point1={[0, 0.25]}
          point2={[0.25, 0.25]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />

        {/* Compass arc traced so far */}
        <Plot.Parametric
          t={[angle, startAngle]}
          xy={arc}
          color={C.faint}
          weight={STROKE_SECONDARY}
          style="dashed"
        />

        {/* Opened compass leg + moving pencil tip */}
        <Line.Segment
          point1={[0, 0]}
          point2={[handX, handY]}
          color={C.faint}
          weight={STROKE_SECONDARY}
        />
        <Point x={handX} y={handY} color={C.accent} />

        {/* Exact landing point on the line */}
        <Point x={R} y={0} color={C.accent} />
        <Line.Segment
          point1={[R, -0.4]}
          point2={[R, 0.4]}
          color={C.accent}
          weight={STROKE_PRIMARY}
        />
        <LaTeX at={[R, -0.85]} tex={`\\sqrt{2}`} color={C.accent} />
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="Swing the compass"
          value={t}
          min={0}
          max={1}
          step={0.02}
          onChange={setT}
          format={() => 'drag to swing'}
        />
      </div>
      <div
        aria-label="Compass transfer: the unit-square diagonal lands at root two on the line"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\text{diagonal} = \\sqrt{1^2 + 1^2} = \\sqrt{2}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\sqrt{2} \\approx 1.414`} />
        </span>
      </div>
      <p style={{ ...CAPTION, color: C.dim }}>
        The diagonal is <KatexInline tex={'\\sqrt{2}'} /> long. Swing it down to the line: it lands
        on one exact point.
      </p>
    </div>
  )
}

// RNL.2: SpiralOfTheodorusViz
// Stack unit right triangles; each adds a unit leg perpendicular to the previous
// hypotenuse, so the hypotenuses grow as √2, √3, √4, √5, … (slider adds triangles).
export function SpiralOfTheodorusViz({ C }) {
  const [n, setN] = useState(3)

  const verts = [[1, 0]]
  let angle = 0
  for (let k = 1; k <= 16; k++) {
    const r = Math.sqrt(k)
    angle += Math.atan2(1, r)
    const rNext = Math.sqrt(k + 1)
    verts.push([rNext * Math.cos(angle), rNext * Math.sin(angle)])
  }

  const SCALE = 1.6
  const sx = ([x, y]) => [x * SCALE, y * SCALE]

  const shown = []
  for (let k = 1; k <= n; k++) {
    shown.push({ k, a: sx(verts[k - 1]), b: sx(verts[k]) })
  }
  const last = shown[shown.length - 1]

  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-5, 5], y: [-4.5, 5.5] }} preserveAspectRatio={false} height={320}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />

        <Point x={0} y={0} color={C.fg} />

        {shown.map(({ k, a, b }) => (
          <g key={k}>
            <Line.Segment point1={[0, 0]} point2={a} color={C.dim} weight={STROKE_SECONDARY} />
            <Line.Segment point1={[0, 0]} point2={b} color={C.dim} weight={STROKE_SECONDARY} />
            <Line.Segment point1={a} point2={b} color={C.accent} weight={STROKE_PRIMARY} />
          </g>
        ))}

        {/* Label the newest hypotenuse */}
        {last && (
          <LaTeX
            at={[last.b[0] * 1.15, last.b[1] * 1.15]}
            tex={`\\sqrt{${n + 1}}`}
            color={C.accent}
          />
        )}
        {/* Label √2 on the first hypotenuse (only once it is not itself the newest) */}
        {n >= 2 && (
          <LaTeX at={[shown[0].b[0] * 1.2, shown[0].b[1] * 1.2]} tex={`\\sqrt{2}`} color={C.fg} />
        )}
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="Triangles"
          value={n}
          min={1}
          max={16}
          step={1}
          onChange={setN}
          format={v => `up to √${v + 1}`}
        />
      </div>
      <div
        aria-label="Spiral of Theodorus: each unit leg builds the next square root"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\text{hypotenuse } k = \\sqrt{k+1}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\sqrt{${n + 1}} \\approx ${Math.sqrt(n + 1).toFixed(3)}`} />
        </span>
      </div>
      <p style={{ ...CAPTION, color: C.dim }}>
        Each unit leg builds the next square root. The hypotenuses are{' '}
        <KatexInline tex={'\\sqrt{2},\\ \\sqrt{3},\\ \\sqrt{4},\\ \\sqrt{5},\\ \\ldots'} />
      </p>
    </div>
  )
}

// RNL.3: RealsAsPointsViz
// One number line with integers, a fraction, √2, and π marked as exact points.
// Static canonical figure BY DESIGN (logged): every point is one real number.
export function RealsAsPointsViz({ C }) {
  const integers = [-2, -1, 0, 1, 2, 3]
  const S = 2
  const xOf = v => v * S

  const marks = [
    { val: -1.5, tex: '-\\tfrac{3}{2}', color: C.fg, up: true },
    { val: Math.SQRT2, tex: '\\sqrt{2}', color: C.accent, up: false },
    { val: Math.PI, tex: '\\pi', color: C.accent, up: true }
  ]

  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-5, 8], y: [-2.5, 2.5] }} preserveAspectRatio={false} height={220}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />

        {/* Number line + arrowheads */}
        <Line.Segment
          point1={[xOf(-2.4), 0]}
          point2={[xOf(3.6), 0]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />
        <Line.Segment
          point1={[xOf(3.6) - 0.3, 0.15]}
          point2={[xOf(3.6), 0]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />
        <Line.Segment
          point1={[xOf(3.6) - 0.3, -0.15]}
          point2={[xOf(3.6), 0]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />
        <Line.Segment
          point1={[xOf(-2.4) + 0.3, 0.15]}
          point2={[xOf(-2.4), 0]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />
        <Line.Segment
          point1={[xOf(-2.4) + 0.3, -0.15]}
          point2={[xOf(-2.4), 0]}
          color={C.dim}
          weight={STROKE_SECONDARY}
        />

        {/* Integer ticks */}
        {integers.map(n => (
          <g key={n}>
            <Line.Segment
              point1={[xOf(n), -0.15]}
              point2={[xOf(n), 0.15]}
              color={C.dim}
              weight={STROKE_SECONDARY}
            />
            <Text x={xOf(n)} y={-0.5} size={FONT_AXIS} attach="s" color={C.dim}>
              {String(n)}
            </Text>
          </g>
        ))}

        {/* 0 marker bolder */}
        <Line.Segment point1={[0, -0.25]} point2={[0, 0.25]} color={C.fg} weight={STROKE_PRIMARY} />

        {/* The marked reals */}
        {marks.map((m, i) => (
          <g key={i}>
            <Point x={xOf(m.val)} y={0} color={m.color} />
            <Line.Segment
              point1={[xOf(m.val), -0.4]}
              point2={[xOf(m.val), 0.4]}
              color={m.color}
              weight={STROKE_PRIMARY}
            />
            <LaTeX at={[xOf(m.val), m.up ? 0.9 : -0.9]} tex={m.tex} color={m.color} />
          </g>
        ))}
      </Mafs>
      <div
        aria-label="Reals as points: a fraction, root two, and pi each sit at one exact point"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`-\\tfrac{3}{2}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\sqrt{2} \\approx 1.414`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\pi \\approx 3.14159`} />
        </span>
      </div>
      <p style={{ ...CAPTION, color: C.dim }}>
        Fractions and irrationals share the same line: every point is one real number, no gaps.
      </p>
    </div>
  )
}
