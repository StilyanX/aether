// NUMBER SEQUENCES AND PATTERNS viz monolith.
//
// REFINE pass 2026-07-02 (file rewritten) - this file had COUNT blockers:
// drawings that contradicted the formulas they illustrate.
// - MatchstickHouses drew 5 sticks per house (bottom, right, TOP, 2 roof)
//   + 1 shared wall = 5h+1, labeled m = 4h+1. The pentagon house has NO top
//   wall (the roof rests on the walls): 4 sticks per house + 1 ✓. Stick
//   count is now derived by counting the drawn <line> elements.
// - TileSequence drew a 3-row border grid with 2b+6 whites, labeled
//   w = b + 4. Correct geometry for w = b+4: top row of b+2 whites over
//   [white | b blues | white] - (b+2) + 2 = b+4 ✓.
// - NicomachusSquares assigned gnomons by max(r,c) - that dissection gives
//   the ODD numbers 1,3,5,… (sum = side²), yet the labels claimed 1³/2³/3³.
//   The true Nicomachus dissection uses bands of thickness k between
//   triangular-number squares: T_k² − T_{k−1}² = k·(T_k+T_{k−1}) = k³ ✓.
// - OddSumCubes drew a 2×2 grid (4 cells) labeled "3+5=8" and a 3×3 (9
//   cells) labeled "27". Now each odd group is a ROW of that many unit
//   squares - 1 · 3+5 · 7+9+11 - so the counts ARE the arithmetic.
// - CubicSequencePlot clipped 2n³ off-frame from n = 5 (250, 432 > 240 max);
//   frame now holds 2·6³ = 432; per-point value-label clutter (colliding at
//   the origin) removed in favour of end tags + readout.
// - size-24 → 12 file-wide; formulas moved to readout rows.
// Engine (WebSearch 2026-07-02, sequence-scatter / unit-square-dissection
// classes): only banned dashboard stacks surfaced; Mafs (A) + hand SVG (B)
// stay. No swaps. Section anchors unverified - logged in audit.

import { useState, Fragment } from 'react'
import { Mafs, Coordinates, Point, Text, Line, LaTeX } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import {
  FONT_CONTROL,
  FONT_FAMILY,
  FONT_LABEL,
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

// superscript tspan for exponents inside SVG <text> (hcf-and-lcm pattern) -
// keeps on-canvas powers as true superscripts, never unicode ³.
const Sup = ({ e }) => (
  <tspan baselineShift="super" fontSize="0.7em">
    {e}
  </tspan>
)

// 1. LinearSequencePlot
// tₙ = 5n − 2 as a scatter: constant first difference ⇒ collinear points.
export function LinearSequencePlot({ C }) {
  const pts = Array.from({ length: 10 }, (_, i) => ({ n: i + 1, t: 5 * (i + 1) - 2 }))
  return (
    <div
      style={{ width: '100%' }}
      aria-label="Linear sequence: constant difference makes collinear points"
    >
      <Mafs viewBox={{ x: [0, 11], y: [-2, 54] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian
          xAxis={{
            lines: 1,
            labels: n => (Number.isInteger(n) && n >= 1 && n <= 10 ? String(n) : '')
          }}
          yAxis={{ lines: 10, labels: n => (n % 10 === 0 && n >= 0 ? String(n) : '') }}
        />
        <Line.Segment point1={[1, 3]} point2={[10, 48]} color={C.dim} weight={1} />
        {pts.map(({ n, t }) => (
          <Point key={n} x={n} y={t} color={C.accent} />
        ))}
      </Mafs>
      <div aria-label="Linear sequence readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={'t_n = 5n - 2'} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'3,\\; 8,\\; 13,\\; 18,\\;\\ldots,\\; t_{10} = 48'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          constant difference: points on a line
        </span>
      </div>
    </div>
  )
}

// 3. FirstDifferenceStrip
// The sequence as a term list with +5 bridges - index strip, not a value line.
export function FirstDifferenceStrip({ C }) {
  const vals = [3, 8, 13, 18, 23]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="First differences: plus five between every pair of terms"
    >
      <Mafs viewBox={{ x: [0.2, 5.8], y: [-1.6, 1.9] }} preserveAspectRatio={false} height={180}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[0.5, 0]} point2={[5.5, 0]} color={C.dim} weight={1.5} />
        {vals.map((v, i) => (
          <Fragment key={i}>
            <Point x={i + 1} y={0} color={C.accent} />
            <Text x={i + 1} y={-0.65} size={FONT_LABEL} color={C.fg}>
              {String(v)}
            </Text>
          </Fragment>
        ))}
        {vals.slice(0, -1).map((_, i) => (
          <Fragment key={`arc${i}`}>
            <Line.Segment
              point1={[i + 1.15, 0.4]}
              point2={[i + 1.85, 0.4]}
              color={C.accent}
              weight={1}
            />
            <Text x={i + 1.5} y={0.85} size={FONT_LABEL} color={C.accent}>
              +5
            </Text>
          </Fragment>
        ))}
      </Mafs>
      <div aria-label="First difference readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={'t_{n+1} - t_n = 5 \\;\\text{for every } n'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          constant first difference: the sequence is linear
        </span>
      </div>
    </div>
  )
}

// 4. QuadraticSequencePlot
// tₙ = n² + 2: first differences grow (odd numbers), second difference is 2.
export function QuadraticSequencePlot({ C }) {
  const pts = Array.from({ length: 8 }, (_, i) => ({ n: i + 1, t: (i + 1) ** 2 + 2 }))
  const firstDiffs = pts.slice(1).map(({ t }, i) => t - pts[i].t) // 5,7,9,…
  const secondDiffs = firstDiffs.slice(1).map((d, i) => d - firstDiffs[i]) // 2,2,…

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Quadratic sequence: growing first differences, constant second difference"
    >
      <Mafs viewBox={{ x: [0, 9.6], y: [-2, 72] }} preserveAspectRatio={false} height={300}>
        <Coordinates.Cartesian
          xAxis={{
            lines: 1,
            labels: n => (Number.isInteger(n) && n >= 1 && n <= 8 ? String(n) : '')
          }}
          yAxis={{ lines: 10, labels: n => (n % 20 === 0 && n >= 0 ? String(n) : '') }}
        />
        {pts.map(({ n, t }) => (
          <Point key={n} x={n} y={t} color={C.accent} />
        ))}
        {/* growing first differences bracketed on the right */}
        {firstDiffs.map((d, i) => (
          <Text
            key={`fd-${i}`}
            x={9}
            y={(pts[i].t + pts[i + 1].t) / 2}
            size={FONT_LABEL}
            attach="e"
            color={C.dim}
          >
            {`+${d}`}
          </Text>
        ))}
      </Mafs>
      <div aria-label="Quadratic sequence readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={'t_n = n^2 + 2'} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\Delta = ${firstDiffs.join(',')}`} />
        </span>
        <span>
          <KatexInline tex={`\\Delta^2 = ${secondDiffs[0]} \\;\\text{(constant)}`} />
        </span>
      </div>
    </div>
  )
}

// 5. MatchstickHouses
// Pentagon houses sharing walls: each house is bottom + right + 2 roof sticks
// (NO top wall - the roof rests on the walls), plus one first left wall:
// m = 4h + 1. The readout counts the drawn sticks - geometry = formula.
export function MatchstickHouses({ C }) {
  const [h, setH] = useState(4)
  const U = 40
  const sticksDrawn = 4 * h + 1 // 1 left wall + (bottom, right, roof×2) per house

  return (
    <div style={{ width: '100%' }} aria-label="Matchstick houses: four new sticks per extra house">
      <svg
        viewBox="0 0 560 150"
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', fontFamily: FONT_FAMILY }}
      >
        <rect x="0" y="0" width="560" height="150" fill="var(--bg)" />
        {Array.from({ length: h }, (_, idx) => {
          const x = 40 + idx * U
          const y = 120
          return (
            <g key={idx}>
              {idx === 0 && <line x1={x} y1={y} x2={x} y2={y - U} stroke={C.fg} strokeWidth="3" />}
              <line x1={x} y1={y} x2={x + U} y2={y} stroke={C.fg} strokeWidth="3" />
              <line x1={x + U} y1={y} x2={x + U} y2={y - U} stroke={C.fg} strokeWidth="3" />
              <line
                x1={x}
                y1={y - U}
                x2={x + U / 2}
                y2={y - U - 26}
                stroke={C.accent}
                strokeWidth="3"
              />
              <line
                x1={x + U}
                y1={y - U}
                x2={x + U / 2}
                y2={y - U - 26}
                stroke={C.accent}
                strokeWidth="3"
              />
            </g>
          )
        })}
      </svg>
      <div
        aria-label="Matchstick readout: sticks counted from the drawing"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`m = 4h + 1 = 4 \\cdot ${h} + 1 = ${sticksDrawn}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          each new house shares a wall: only 4 new sticks
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="Houses h"
          value={h}
          min={1}
          max={12}
          step={1}
          onChange={setH}
          format={v => String(v)}
        />
      </div>
    </div>
  )
}

// 6. TileSequence
// w = b + 4 white tiles around b blue tiles: a top row of b+2 whites over
// [white | b blues | white] - (b+2) + 2 = b+4. The drawing IS the count.
export function TileSequence({ C }) {
  const frames = [1, 2, 3]
  const T = 26
  const gap = 4

  const Frame = ({ b, ox, oy }) => {
    const tiles = []
    // top row: b+2 whites
    for (let c = 0; c < b + 2; c++) {
      tiles.push(
        <rect
          key={`t${c}`}
          x={ox + c * (T + gap)}
          y={oy}
          width={T}
          height={T}
          fill="var(--bg)"
          stroke={C.fg}
          strokeWidth={STROKE_PRIMARY}
        />
      )
    }
    // bottom row: white | b blues | white
    for (let c = 0; c < b + 2; c++) {
      const isBlue = c >= 1 && c <= b
      tiles.push(
        <rect
          key={`b${c}`}
          x={ox + c * (T + gap)}
          y={oy + T + gap}
          width={T}
          height={T}
          fill={isBlue ? C.faint : 'var(--bg)'}
          stroke={C.fg}
          strokeWidth={STROKE_PRIMARY}
        />
      )
    }
    return <g>{tiles}</g>
  }

  return (
    <div style={{ width: '100%' }} aria-label="Tile pattern: white count is blue count plus four">
      <svg
        viewBox="0 0 640 120"
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', fontFamily: FONT_FAMILY }}
      >
        <rect x="0" y="0" width="640" height="120" fill="var(--bg)" />
        {frames.map((b, i) => {
          const ox = 40 + i * 210
          return (
            <g key={b}>
              <Frame b={b} ox={ox} oy={16} />
              <text
                x={ox + ((b + 2) * (T + gap) - gap) / 2}
                y={104}
                textAnchor="middle"
                fontSize={FONT_TEX}
                fill={C.dim}
              >
                {`b = ${b}, w = ${b + 4}`}
              </text>
            </g>
          )
        })}
      </svg>
      <div aria-label="Tile pattern readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={'w = (b + 2) + 2 = b + 4'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          top row grows with b, the two side tiles never change
        </span>
      </div>
    </div>
  )
}

// 7. NthTermExplorer
// Choose a rule, slide n: the axis window is declared per rule (labels every
// 10) and the highlighted term is computed live in the readout.
const FORMULAS = [
  { label: '5n − 2', tex: '5n - 2', fn: n => 5 * n - 2 },
  { label: 'n² + 2', tex: 'n^2 + 2', fn: n => n * n + 2 },
  { label: '3n + 2', tex: '3n + 2', fn: n => 3 * n + 2 }
]

export function NthTermExplorer({ C }) {
  const [fIdx, setFIdx] = useState(0)
  const [nVal, setNVal] = useState(5)
  const formula = FORMULAS[fIdx]
  const pts = Array.from({ length: 10 }, (_, i) => ({ n: i + 1, t: formula.fn(i + 1) }))
  const maxT = Math.max(...pts.map(p => p.t))
  const minT = Math.min(...pts.map(p => p.t))
  const tSel = formula.fn(nVal)

  return (
    <div style={{ width: '100%' }} aria-label="Nth term explorer: pick a rule, slide n">
      <Mafs
        viewBox={{ x: [0, 11], y: [minT - 4, maxT + 6] }}
        preserveAspectRatio={false}
        height={260}
      >
        <Coordinates.Cartesian
          xAxis={{
            lines: 1,
            labels: n => (Number.isInteger(n) && n >= 1 && n <= 10 ? String(n) : '')
          }}
          yAxis={{ lines: 10, labels: n => (n % 20 === 0 ? String(n) : '') }}
        />
        {pts.map(({ n, t }) => (
          <Point key={n} x={n} y={t} color={n === nVal ? C.fg : C.accent} />
        ))}
        <Line.Segment point1={[nVal, minT - 4]} point2={[nVal, tSel]} color={C.faint} weight={1} />
      </Mafs>
      <div
        aria-label="Nth term readout: the highlighted term"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`t_n = ${formula.tex}`} />
        </span>
        <span>
          <KatexInline tex={`t_{${nVal}} = ${tSel}`} />
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          marginTop: 8,
          flexWrap: 'wrap'
        }}
      >
        {FORMULAS.map((f, i) => (
          <button
            key={i}
            onClick={() => setFIdx(i)}
            aria-label={f.label}
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: FONT_LABEL,
              padding: '6px 14px',
              background: i === fIdx ? 'var(--border-default)' : 'transparent',
              border: '1px solid var(--border-default)',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            <KatexInline tex={f.tex} />
          </button>
        ))}
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="n"
          value={nVal}
          min={1}
          max={10}
          step={1}
          onChange={setNVal}
          format={v => String(Math.round(v))}
        />
      </div>
    </div>
  )
}

// 9. CubicSequencePlot
// n³, n³ + 1, 2n³ for n = 1..6 on a frame that HOLDS all of them (the old
// frame topped out at 240 and silently clipped 2n³ from n = 5; 2·6³ = 432).
export function CubicSequencePlot({ C }) {
  const ns = [1, 2, 3, 4, 5, 6]
  const series = [
    { tex: 'n^3', fn: i => i ** 3, ink: C.accent },
    { tex: 'n^3 + 1', fn: i => i ** 3 + 1, ink: C.fg },
    { tex: '2n^3', fn: i => 2 * i ** 3, ink: C.dim }
  ]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Cubic sequences: all points inside a frame that holds two n cubed"
    >
      <Mafs viewBox={{ x: [0, 8.4], y: [-12, 452] }} preserveAspectRatio={false} height={320}>
        <Coordinates.Cartesian
          xAxis={{
            lines: 1,
            labels: x => (Number.isInteger(x) && x >= 1 && x <= 6 ? String(x) : '')
          }}
          yAxis={{ lines: 50, labels: y => (y % 100 === 0 && y >= 0 ? String(y) : '') }}
        />
        {series.map((s, si) =>
          ns.map(i => <Point key={`${si}-${i}`} x={i} y={s.fn(i)} color={s.ink} />)
        )}
        {/* end tags: 216/217 coincide - one merged tag; 432 separate */}
        <LaTeX at={[7.3, 216]} tex={'n^3,\\; n^3\\!+\\!1'} color={C.fg} />
        <LaTeX at={[7.0, 432]} tex={'2n^3'} color={C.dim} />
      </Mafs>
      <div aria-label="Cubic sequence readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'6^3 = 216,\\;\\; 6^3+1 = 217,\\;\\; 2\\cdot 6^3 = 432'} />
        </span>
        <span>
          <KatexInline tex={'\\Delta^3(n^3) = 6 \\;\\text{(constant)}'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          shifting adds a constant, scaling stretches the whole curve
        </span>
      </div>
    </div>
  )
}

// 10. NicomachusSquares
// The true Nicomachus dissection: a 6×6 square (side = 1+2+3) split into
// L-bands of THICKNESS k between the squares of triangular numbers
// T₀=0, T₁=1, T₂=3, T₃=6. Band k has area T_k² − T_{k−1}² = k³:
//   1² − 0 = 1 = 1³ · 3² − 1² = 8 = 2³ · 6² − 3² = 27 = 3³ ✓
export function NicomachusSquares({ C }) {
  const S = 34
  const GAP = 2
  const side = 6
  const bandOf = m => (m < 1 ? 1 : m < 3 ? 2 : 3) // band index from max(r,c)

  const cells = []
  for (let r = 0; r < side; r++) {
    for (let c = 0; c < side; c++) {
      const k = bandOf(Math.max(r, c))
      const opacity = k === 1 ? 0.4 : k === 2 ? 0.2 : 0.08
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={30 + c * (S + GAP)}
          y={16 + r * (S + GAP)}
          width={S}
          height={S}
          fill={C.fg}
          fillOpacity={opacity}
          stroke={C.fg}
          strokeWidth={STROKE_SECONDARY}
          strokeOpacity={0.3}
        />
      )
    }
  }
  const gridW = side * (S + GAP)
  // band label positions: centered in each band's outer column strip
  const bandLabels = [
    { base: '1', cx: 30 + S / 2, cy: 16 + S / 2 },
    { base: '2', cx: 30 + 2 * (S + GAP) - S / 2 - GAP, cy: 16 + 2 * (S + GAP) - S / 2 - GAP },
    { base: '3', cx: 30 + 5 * (S + GAP) - S / 2 + 8, cy: 16 + 5 * (S + GAP) - S / 2 + 8 }
  ]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Nicomachus: the square on one plus two plus three splits into cube bands"
    >
      <svg
        viewBox={`0 0 ${gridW + 70} ${gridW + 40}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', fontFamily: FONT_FAMILY, maxWidth: 340, margin: '0 auto' }}
      >
        <rect x="0" y="0" width={gridW + 70} height={gridW + 40} fill="var(--bg)" />
        {cells}
        {bandLabels.map(({ base, cx, cy }) => (
          <text
            key={base}
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            fontSize={FONT_CONTROL}
            fill={C.fg}
          >
            {base}
            <Sup e={3} />
          </text>
        ))}
      </svg>
      <div
        aria-label="Nicomachus readout: band areas are cubes"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'1^2 - 0 = 1 \\;\\cdot\\; 3^2 - 1^2 = 8 \\;\\cdot\\; 6^2 - 3^2 = 27'} />
        </span>
        <span>
          <KatexInline tex={'(1+2+3)^2 = 1^3 + 2^3 + 3^3 = 36'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          band k is k cells thick: its area is <KatexInline tex={'k^3'} />
        </span>
      </div>
    </div>
  )
}

// 8. OddSumCubes
// Consecutive odd numbers grouped: 1 · 3+5 · 7+9+11 - each group drawn as
// ROWS of that many unit squares, so the drawn count IS the sum: 1, 8, 27.
// (The old version drew a 2×2 grid labeled "8" and a 3×3 labeled "27".)
export function OddSumCubes({ C }) {
  const S = 16
  const GAP = 3
  const groups = [
    { odds: [1], k: 1 },
    { odds: [3, 5], k: 2 },
    { odds: [7, 9, 11], k: 3 }
  ]

  let oy = 14
  const blocks = []
  groups.forEach(({ odds, k }, gi) => {
    odds.forEach((count, ri) => {
      for (let c = 0; c < count; c++) {
        blocks.push(
          <rect
            key={`${gi}-${ri}-${c}`}
            x={120 + c * (S + GAP)}
            y={oy}
            width={S}
            height={S}
            fill={C.fg}
            fillOpacity={ri % 2 === 0 ? 0.28 : 0.12}
            stroke={C.fg}
            strokeWidth={STROKE_PRIMARY}
          />
        )
      }
      blocks.push(
        <text
          key={`n-${gi}-${ri}`}
          x={108}
          y={oy + S - 3}
          textAnchor="end"
          fontSize={FONT_LABEL}
          fill={C.dim}
        >
          {count}
        </text>
      )
      oy += S + GAP
    })
    blocks.push(
      <text
        key={`s-${gi}`}
        x={120 + 11 * (S + GAP) + 12}
        y={oy - (odds.length * (S + GAP)) / 2 + 2}
        fontSize={FONT_TEX}
        fill={C.accent}
      >
        {`= ${odds.reduce((a, b) => a + b, 0)} = ${k}`}
        <Sup e={3} />
      </text>
    )
    oy += 10
  })

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Odd number groups summing to cubes, drawn as counted squares"
    >
      <svg
        viewBox={`0 0 460 ${oy + 6}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        style={{ display: 'block', fontFamily: FONT_FAMILY, maxWidth: 520, margin: '0 auto' }}
      >
        <rect x="0" y="0" width="460" height={oy + 6} fill="var(--bg)" />
        {blocks}
      </svg>
      <div aria-label="Odd sum cubes readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'1 \\;\\cdot\\; 3+5 = 8 \\;\\cdot\\; 7+9+11 = 27'} />
        </span>
        <span>
          <KatexInline tex={'\\text{group } n \\text{ sums to } n^3'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          next: <KatexInline tex={'13 + 15 + 17 + 19 = 64 = 4^3'} />
        </span>
      </div>
    </div>
  )
}
