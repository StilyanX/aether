// RATIO
// Visualisations for ratio, sharing, scaling, and the ratio-vs-rate distinction.
// Each viz takes a `C` color object from useVizColors().
//
// REFINE pass 2026-07-03 (ratio, ar.146–154):
// - File-wide convention breach FIXED: every label was size={24} (house max is
//   FONT_LABEL = 11) and every ratio/equation/total was drawn ON the canvas as
//   plain text (e.g. "B:G = 4:5", "9 parts × 3 = 27", "45 km/h", "8/5 = 1.6").
//   All relational math moved to KatexInline readout rows below each figure
//   (rule 11: LaTeX, never plain text; values never on the canvas); only
//   diagram-integral identifiers (row letters, tape-cell part values that ARE
//   the diagram's ruler reading) stay on canvas at FONT_LABEL.
// - ar.152 TeacherStudentBeforeAfter - GEOMETRY BLOCKER: the teachers bar was
//   drawn at width `tUnitBefore*(W/tUnitBefore)*tUnitBefore` = W·tUnitBefore
//   ≈ 4.03 units - a garbled expression that rendered a 1:30 ratio as ≈1:2.7,
//   violating the core tape-diagram rule (segment length ∝ value; WebSearch
//   gate 2026-07-03). Rebuilt as the honest representation: a constant-length
//   student bar (450) divided into `teachers` equal class-groups - 15 groups
//   of 30 before, 18 groups of 25 after (the +3 new groups highlighted). More
//   teachers ⇒ more, smaller groups; the student total never changes.
// - Static worked-example figures BY DESIGN (each illustrates one specific
//   textbook problem: auditorium 4:5, Benoit/Carl/Davida 2:5:4, recipe 8/5…) -
//   logged, not "mode 1 decoration"; converting to generic sliders would
//   destroy the worked example. Every tape/bar segment length is proportional
//   to its value (WebSearch honesty gate).
// Engine (WebSearch 2026-07-03, tape-diagram / bar-model class): only the
// standard proportional-length tape diagram surfaced - no banned dashboard
// stack. Mafs (A) Polygon tapes stay.
import React from 'react'
import { Mafs, Coordinates, Polygon, Text } from 'mafs'
import 'mafs/core.css'
import { KatexInline } from '../../../primitives'
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

function Readout({ label, children, C }) {
  return (
    <div aria-label={label} style={{ ...READOUT_ROW, color: C.fg }}>
      {children}
    </div>
  )
}

// Thin vertical divider polygon (a tick / segment boundary).
function VDiv({ x, y0, y1, color, opacity = 0.6, w = 0.04 }) {
  return (
    <Polygon
      points={[
        [x, y0],
        [x + w, y0],
        [x + w, y1],
        [x, y1]
      ]}
      color={color}
      fillOpacity={opacity}
    />
  )
}

// (ar.146) RatioBoysGirls45
// Two proportional tracks: B = 4U and G = 5U with U = 3 (27 students, 4:5).

export function RatioBoysGirls45({ C }) {
  const U = 3
  const B = 4 * U // 12
  const G = 5 * U // 15

  return (
    <>
      <Mafs viewBox={{ x: [-1.2, 16], y: [-2, 3.2] }} height={240} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* Boys track (4 unit cells) */}
        {Array.from({ length: 4 }).map((_, i) => (
          <Polygon
            key={`b${i}`}
            points={[
              [i * U + 0.05, 1.2],
              [(i + 1) * U - 0.05, 1.2],
              [(i + 1) * U - 0.05, 1.8],
              [i * U + 0.05, 1.8]
            ]}
            color={C.fg}
            fillOpacity={0.5}
          />
        ))}
        <Text x={-0.7} y={1.5} size={FONT_LABEL} color={C.fg} attach="center">
          B
        </Text>
        <Text x={B / 2} y={2.35} size={FONT_LABEL} color={C.dim} attach="center">
          4 units
        </Text>

        {/* Girls track (5 unit cells) */}
        {Array.from({ length: 5 }).map((_, i) => (
          <Polygon
            key={`g${i}`}
            points={[
              [i * U + 0.05, 0.2],
              [(i + 1) * U - 0.05, 0.2],
              [(i + 1) * U - 0.05, 0.8],
              [i * U + 0.05, 0.8]
            ]}
            color={C.dim}
            fillOpacity={0.4}
          />
        ))}
        <Text x={-0.7} y={0.5} size={FONT_LABEL} color={C.fg} attach="center">
          G
        </Text>
        <Text x={G / 2} y={-0.35} size={FONT_LABEL} color={C.dim} attach="center">
          5 units
        </Text>

        {/* One unit cell called out */}
        <Text x={U / 2} y={1.5} size={FONT_LABEL} color={C.fg} attach="center">
          U
        </Text>
      </Mafs>
      <Readout label="Auditorium ratio: 4:5 of 27 students, one unit equals 3" C={C}>
        <span>
          <KatexInline tex={`B:G = 4:5`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`U = \\tfrac{27}{9} = 3`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`B = 4U = 12,\\quad G = 5U = 15`} />
        </span>
      </Readout>
    </>
  )
}

// (ar.147) ProblemOneFourthSolution
// 9 equal parts of 3 make 27; the first 4 are B, the last 5 are G.

export function ProblemOneFourthSolution({ C }) {
  const U = 3

  return (
    <>
      <Mafs viewBox={{ x: [-0.5, 27.5], y: [-1.6, 2.4] }} height={220} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* 9 equal parts */}
        {Array.from({ length: 9 }).map((_, i) => (
          <Polygon
            key={`seg${i}`}
            points={[
              [i * U + 0.08, 0.3],
              [(i + 1) * U - 0.08, 0.3],
              [(i + 1) * U - 0.08, 1.1],
              [i * U + 0.08, 1.1]
            ]}
            color={i < 4 ? C.fg : C.dim}
            fillOpacity={i < 4 ? 0.5 : 0.32}
          />
        ))}
        {/* Each part is worth 3 - a tape-cell reading, kept on canvas */}
        {Array.from({ length: 9 }).map((_, i) => (
          <Text
            key={`sl${i}`}
            x={i * U + U / 2}
            y={0.7}
            size={FONT_LABEL}
            color={C.fg}
            attach="center"
          >
            3
          </Text>
        ))}
        <Text x={(4 * U) / 2} y={1.7} size={FONT_LABEL} color={C.fg} attach="center">
          B: 4 parts
        </Text>
        <Text x={(4 * U + 9 * U) / 2} y={1.7} size={FONT_LABEL} color={C.dim} attach="center">
          G: 5 parts
        </Text>
      </Mafs>
      <Readout label="One-part solution: nine parts of three make twenty-seven" C={C}>
        <span>
          <KatexInline tex={`9 \\text{ parts} \\times 3 = 27`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`B = 4\\times 3 = 12,\\quad G = 5\\times 3 = 15`} />
        </span>
      </Readout>
    </>
  )
}

// (ar.148) ThreeQuantityBar
// $440 shared 2:5:4 (k = 40) → 80 / 200 / 160, one stacked proportional bar.

export function ThreeQuantityBar({ C }) {
  const total = 440
  const k = 40
  const parts = [
    { name: 'Benoit', share: 2, amt: 2 * k },
    { name: 'Carl', share: 5, amt: 5 * k },
    { name: 'Davida', share: 4, amt: 4 * k }
  ]
  const W = 11
  const scale = W / total
  let x = 0
  const segs = parts.map(p => {
    const w = p.amt * scale
    const seg = { ...p, x0: x, x1: x + w }
    x += w
    return seg
  })

  return (
    <>
      <Mafs
        viewBox={{ x: [-0.3, W + 0.3], y: [-1.6, 1.8] }}
        height={200}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {segs.map((s, i) => (
          <React.Fragment key={s.name}>
            <Polygon
              points={[
                [s.x0, -0.5],
                [s.x1, -0.5],
                [s.x1, 0.5],
                [s.x0, 0.5]
              ]}
              color={C.fg}
              fillOpacity={0.5 - i * 0.13}
            />
            {i > 0 && <VDiv x={s.x0} y0={-0.6} y1={0.6} color={C.fg} />}
            {/* Amount inside the cell = the tape reading */}
            <Text x={(s.x0 + s.x1) / 2} y={0} size={FONT_LABEL} color={C.fg} attach="center">
              {String(s.amt)}
            </Text>
            <Text
              x={(s.x0 + s.x1) / 2}
              y={1.1}
              size={FONT_LABEL}
              color={C.dim}
              attach="center"
            >{`${s.name} (${s.share})`}</Text>
          </React.Fragment>
        ))}
      </Mafs>
      <Readout label="Three-way share: 440 dollars in ratio 2 to 5 to 4" C={C}>
        <span>
          <KatexInline tex={`\\text{ratio } 2:5:4`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`k = \\tfrac{440}{11} = 40`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`2k + 5k + 4k = 80 + 200 + 160 = 440`} />
        </span>
      </Readout>
    </>
  )
}

// (ar.149) ChairsLegsComparison
// A (legs) = 4B vs B (chairs): multiplicative A:B = 4:1 vs additive A − B = 3B.

export function ChairsLegsComparison({ C }) {
  const B = 3
  const A = 4 * B // 12
  const W = 12
  const scale = W / A
  const chairW = B * scale // 3
  const legW = A * scale // 12

  return (
    <>
      <Mafs viewBox={{ x: [-1.2, W + 2], y: [-1.4, 2.2] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* Legs bar, divided into 4 chair-sized units */}
        <Polygon
          points={[
            [0, 1.0],
            [legW, 1.0],
            [legW, 1.7],
            [0, 1.7]
          ]}
          color={C.fg}
          fillOpacity={0.46}
        />
        {[1, 2, 3].map(i => (
          <VDiv key={`ld${i}`} x={i * chairW} y0={0.95} y1={1.75} color={C.fg} />
        ))}
        <Text x={-0.7} y={1.35} size={FONT_LABEL} color={C.fg} attach="center">
          A
        </Text>
        <Text x={legW + 0.3} y={1.35} size={FONT_LABEL} color={C.dim} attach="w">
          4B = 12
        </Text>

        {/* Chairs bar */}
        <Polygon
          points={[
            [0, 0],
            [chairW, 0],
            [chairW, 0.7],
            [0, 0.7]
          ]}
          color={C.dim}
          fillOpacity={0.42}
        />
        <Text x={-0.7} y={0.35} size={FONT_LABEL} color={C.fg} attach="center">
          B
        </Text>
        <Text x={chairW + 0.3} y={0.35} size={FONT_LABEL} color={C.dim} attach="w">
          B = 3
        </Text>
      </Mafs>
      <Readout
        label="Chairs and legs: the multiplicative ratio is fixed, the difference is not"
        C={C}
      >
        <span>
          <KatexInline tex={`A:B = 4:1`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`A - B = 3B`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          ratio fixed: the gap grows with B
        </span>
      </Readout>
    </>
  )
}

// (ar.150) MapScaleVisual
// 1 cm on the map ↔ 50 000 cm = 500 m on the ground (1:50 000).

export function MapScaleVisual({ C }) {
  const mapW = 1
  const landW = 10 // illustrative - the land length is 50 000× the map length

  return (
    <>
      <Mafs viewBox={{ x: [-1.4, 12], y: [-1.6, 2.4] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        <Polygon
          points={[
            [0, 1.2],
            [mapW, 1.2],
            [mapW, 1.8],
            [0, 1.8]
          ]}
          color={C.fg}
          fillOpacity={0.6}
        />
        <Text x={-0.8} y={1.5} size={FONT_LABEL} color={C.fg} attach="center">
          map
        </Text>
        <Text x={mapW / 2} y={2.35} size={FONT_LABEL} color={C.fg} attach="center">
          1 cm
        </Text>

        <Polygon
          points={[
            [0, 0],
            [landW, 0],
            [landW, 0.6],
            [0, 0.6]
          ]}
          color={C.dim}
          fillOpacity={0.4}
        />
        <Text x={-0.8} y={0.3} size={FONT_LABEL} color={C.fg} attach="center">
          land
        </Text>
        <Text x={landW / 2} y={-0.55} size={FONT_LABEL} color={C.dim} attach="center">
          500 m
        </Text>
      </Mafs>
      <Readout label="Map scale: one centimetre represents five hundred metres" C={C}>
        <span>
          <KatexInline tex={`\\text{scale } 1:50\\,000`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`1\\text{ cm} \\times 50\\,000 = 50\\,000\\text{ cm} = 500\\text{ m}`}
          />
        </span>
      </Readout>
    </>
  )
}

// (ar.151) ShareSixtyTwoThree
// $60 shared 2:3 → 5 equal parts of $12; first 2 = $24, last 3 = $36.

export function ShareSixtyTwoThree({ C }) {
  const cells = 5
  const cellW = 2
  const totalW = cells * cellW // 10

  return (
    <>
      <Mafs
        viewBox={{ x: [-0.3, totalW + 0.3], y: [-1.4, 2.0] }}
        height={200}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {Array.from({ length: cells }).map((_, i) => (
          <Polygon
            key={`cell${i}`}
            points={[
              [i * cellW + 0.08, -0.5],
              [(i + 1) * cellW - 0.08, -0.5],
              [(i + 1) * cellW - 0.08, 0.5],
              [i * cellW + 0.08, 0.5]
            ]}
            color={i < 2 ? C.fg : C.dim}
            fillOpacity={i < 2 ? 0.5 : 0.32}
          />
        ))}
        {Array.from({ length: cells }).map((_, i) => (
          <Text
            key={`cl${i}`}
            x={i * cellW + cellW / 2}
            y={0}
            size={FONT_LABEL}
            color={C.fg}
            attach="center"
          >
            12
          </Text>
        ))}
        <Text x={cellW} y={1.1} size={FONT_LABEL} color={C.fg} attach="center">
          2 parts
        </Text>
        <Text
          x={2 * cellW + (3 * cellW) / 2}
          y={1.1}
          size={FONT_LABEL}
          color={C.dim}
          attach="center"
        >
          3 parts
        </Text>
      </Mafs>
      <Readout label="Share sixty dollars in ratio two to three" C={C}>
        <span>
          <KatexInline tex={`\\text{ratio } 2:3`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\text{each part} = \\tfrac{60}{5} = 12`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`2\\times 12 = 24,\\quad 3\\times 12 = 36`} />
        </span>
      </Readout>
    </>
  )
}

// (ar.152) TeacherStudentBeforeAfter
// REBUILT (geometry Blocker - see file header). Constant student bar divided
// into `teachers` class-groups: 15 groups of 30 (1:30) → 18 groups of 25 (1:25);
// the 3 new groups highlighted. Segment length ∝ value (WebSearch gate).

export function TeacherStudentBeforeAfter({ C }) {
  const before = 15
  const after = 18
  const W = 11

  function Row({ y, teachers, highlightFrom, tag, size }) {
    const cw = W / teachers
    return (
      <>
        {/* Students bar (constant length = 450) */}
        <Polygon
          points={[
            [0, y - 0.35],
            [W, y - 0.35],
            [W, y + 0.35],
            [0, y + 0.35]
          ]}
          color={C.dim}
          fillOpacity={0.16}
        />
        {/* Class-group divisions - one per teacher */}
        {Array.from({ length: teachers }).map((_, i) => {
          const hl = highlightFrom != null && i >= highlightFrom
          return (
            <Polygon
              key={i}
              points={[
                [i * cw + 0.03, y - 0.35],
                [(i + 1) * cw - 0.03, y - 0.35],
                [(i + 1) * cw - 0.03, y + 0.35],
                [i * cw + 0.03, y + 0.35]
              ]}
              color={C.fg}
              fillOpacity={hl ? 0.75 : 0.4}
            />
          )
        })}
        <Text x={-0.7} y={y} size={FONT_LABEL} color={C.fg} attach="e">
          {tag}
        </Text>
        <Text
          x={W + 0.3}
          y={y}
          size={FONT_LABEL}
          color={C.dim}
          attach="w"
        >{`${teachers} groups of ${size}`}</Text>
      </>
    )
  }

  return (
    <>
      <Mafs viewBox={{ x: [-2, W + 4], y: [-1.6, 1.8] }} height={220} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        <Row y={1.0} teachers={before} tag="before" size={30} />
        <Row y={-0.6} teachers={after} highlightFrom={before} tag="after" size={25} />
      </Mafs>
      <Readout
        label="Teacher to student ratio improves from one to thirty to one to twenty-five"
        C={C}
      >
        <span>
          <KatexInline tex={`\\text{before } 1:30 \\;(15\\text{ teachers})`} />
        </span>
        <span>
          <KatexInline tex={`\\text{after } 1:25 \\;(18\\text{ teachers})`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\text{hire } 18 - 15 = 3`} />
        </span>
      </Readout>
    </>
  )
}

// (ar.153) RatioVsRateContrast
// Left: same-type bars (boys / girls) → a pure-number ratio.
// Right: different-type bars (distance / time) → a rate that carries units.

export function RatioVsRateContrast({ C }) {
  const W = 5

  return (
    <>
      <Mafs
        viewBox={{ x: [-0.5, W * 2 + 2], y: [-1.4, 3.4] }}
        height={240}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* LEFT - RATIO */}
        <Text x={W / 2} y={3.0} size={FONT_LABEL} color={C.fg} attach="center">
          RATIO: same type
        </Text>
        <Polygon
          points={[
            [0, 2.0],
            [4, 2.0],
            [4, 2.5],
            [0, 2.5]
          ]}
          color={C.fg}
          fillOpacity={0.5}
        />
        <Text x={2} y={2.25} size={FONT_LABEL} color={C.fg} attach="center">
          4 boys
        </Text>
        <Polygon
          points={[
            [0, 1.2],
            [5, 1.2],
            [5, 1.7],
            [0, 1.7]
          ]}
          color={C.dim}
          fillOpacity={0.38}
        />
        <Text x={2.5} y={1.45} size={FONT_LABEL} color={C.dim} attach="center">
          5 girls
        </Text>

        {/* Divider */}
        <VDiv x={W + 0.6} y0={0.6} y1={3.2} color={C.dim} opacity={0.3} />

        {/* RIGHT - RATE */}
        <Text x={W + 1 + W / 2} y={3.0} size={FONT_LABEL} color={C.fg} attach="center">
          RATE: different types
        </Text>
        <Polygon
          points={[
            [W + 1, 2.0],
            [W + 1 + W, 2.0],
            [W + 1 + W, 2.5],
            [W + 1, 2.5]
          ]}
          color={C.fg}
          fillOpacity={0.5}
        />
        <Text x={W + 1 + W / 2} y={2.25} size={FONT_LABEL} color={C.fg} attach="center">
          90 km
        </Text>
        <Polygon
          points={[
            [W + 1, 1.2],
            [W + 1 + 2, 1.2],
            [W + 1 + 2, 1.7],
            [W + 1, 1.7]
          ]}
          color={C.dim}
          fillOpacity={0.38}
        />
        <Text x={W + 1 + 1} y={1.45} size={FONT_LABEL} color={C.dim} attach="center">
          2 h
        </Text>
      </Mafs>
      <Readout
        label="Ratio versus rate: same-type gives a pure number, different-types gives a rate with units"
        C={C}
      >
        <span>
          <KatexInline tex={`4:5 = 0.8 \\text{ (pure number)}`} />
        </span>
        <span>
          <KatexInline tex={`\\tfrac{90\\text{ km}}{2\\text{ h}} = 45\\text{ km/h}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          same type → ratio · different types → rate
        </span>
      </Readout>
    </>
  )
}

// (ar.154) ScalingRecipe
// 5 servings / 1.5 kg scaled to 8 servings by the factor 8/5 = 1.6 → 2.4 kg.

export function ScalingRecipe({ C }) {
  const W = 12
  const baseBarW = (1.5 / 2.4) * W // length ∝ mass

  return (
    <>
      <Mafs viewBox={{ x: [-1.4, W + 1], y: [-1.4, 2.2] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        <Polygon
          points={[
            [0, 1.0],
            [baseBarW, 1.0],
            [baseBarW, 1.7],
            [0, 1.7]
          ]}
          color={C.dim}
          fillOpacity={0.42}
        />
        <Text x={-0.9} y={1.35} size={FONT_LABEL} color={C.fg} attach="center">
          5 serv
        </Text>
        <Text x={baseBarW / 2} y={1.35} size={FONT_LABEL} color={C.fg} attach="center">
          1.5 kg
        </Text>

        <Polygon
          points={[
            [0, 0],
            [W, 0],
            [W, 0.7],
            [0, 0.7]
          ]}
          color={C.fg}
          fillOpacity={0.5}
        />
        <Text x={-0.9} y={0.35} size={FONT_LABEL} color={C.fg} attach="center">
          8 serv
        </Text>
        <Text x={W / 2} y={0.35} size={FONT_LABEL} color={C.fg} attach="center">
          2.4 kg
        </Text>
      </Mafs>
      <Readout label="Scaling a recipe by the factor eight fifths" C={C}>
        <span>
          <KatexInline tex={`\\text{scale} = \\tfrac{8}{5} = 1.6`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`1.5 \\times 1.6 = 2.4\\text{ kg}`} />
        </span>
      </Readout>
    </>
  )
}
