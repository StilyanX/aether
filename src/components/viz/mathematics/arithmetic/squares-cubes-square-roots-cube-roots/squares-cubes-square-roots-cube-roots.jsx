// SQUARES, CUBES, SQUARE ROOTS, CUBE ROOTS
// Dot arrays (n²), isometric cube stacks (n³), and root number-lines / curves.
//
// REFINE pass 2026-07-03 (squares-cubes…, ar.167–172):
// - Unicode power labels drawn on canvas ("5² = 25", "4³ = 64", "n² = …")
//   moved into KatexInline readout rows in LaTeX (rule 11); the "5 columns /
//   5 rows" dimension tags stay on canvas (identifiers, not math). Literal
//   fontSize={FONT_CONTROL}/{14} and the cube-edge strokeWidth={0.6}/{0.7} tokenized.
// - SquareRootNumberLine: the moving "√x ≈ …" value moved to a readout
//   (ar.78 precedent); the on-canvas √x tag stays as the point's identifier;
//   perfect-square integer marks stay (ruler readings). Non-integer x now
//   labels correctly (was Math.round-ed, mislabelling half-steps).
// - SquareArray / CubeStack are the static canonical openers beside their
//   interactive twins (SquareArrayInteractive / CubeStackInteractive) -
//   logged, not mode 1. RootCurveComparison is a static labelled comparison.
//   Engine: hand-SVG for the arrays/isometric cubes, Mafs (A) for the
//   number-line and the √x vs ∛x curves.
import { useState } from 'react'
import { Mafs, Coordinates, Plot, Point, LaTeX, Line } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import {
  FONT_FAMILY,
  FONT_LABEL,
  LS_CONTROL,
  LS_OPEN,
  STROKE_GUIDE,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from '../../../scale-tokens'

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

const COS30 = Math.cos(Math.PI / 6)
const SIN30 = Math.sin(Math.PI / 6)

const polyStr = pts => pts.map(p => p.join(',')).join(' ')

function isoProject(col, row, layer, cellSize) {
  const cx = cellSize * COS30
  const cy = cellSize * SIN30
  const px = (col - row) * cx
  const py = (col + row) * cy - layer * cellSize
  return { px, py }
}

function buildCubeFaces(n, cellSize, offX, offY, C) {
  const cx = cellSize * COS30
  const cy = cellSize * SIN30
  const faces = []
  // Back-to-front, bottom-to-top loop order = painter's algorithm.
  for (let z = 0; z < n; z++) {
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const o = isoProject(x, y, z, cellSize)
        const px = o.px + offX
        const py = o.py + offY

        const topPts = [
          [px, py],
          [px + cx, py + cy],
          [px, py + cellSize],
          [px - cx, py + cy]
        ]
        const rightPts = [
          [px, py + cellSize],
          [px + cx, py + cy + cellSize],
          [px + cx, py + cy],
          [px, py]
        ]
        const leftPts = [
          [px, py + cellSize],
          [px - cx, py + cy + cellSize],
          [px - cx, py + cy],
          [px, py]
        ]

        faces.push(
          <g key={`${x}-${y}-${z}`}>
            <polygon
              points={polyStr(leftPts)}
              fill="var(--bg)"
              stroke={C.dim}
              strokeWidth={STROKE_GUIDE}
              opacity={0.7}
            />
            <polygon
              points={polyStr(rightPts)}
              fill="var(--bg)"
              stroke={C.dim}
              strokeWidth={STROKE_GUIDE}
              opacity={0.9}
            />
            <polygon
              points={polyStr(topPts)}
              fill="var(--bg)"
              stroke={C.fg}
              strokeWidth={STROKE_SECONDARY}
              opacity={0.85}
            />
          </g>
        )
      }
    }
  }
  return faces
}

export function SquareArray({ C }) {
  const N = 5
  const cellSize = 40
  const r = 5
  const pad = 28
  const W = N * cellSize + pad * 2
  const H = N * cellSize + pad * 2

  return (
    <div style={{ width: '100%' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ display: 'block', maxWidth: 300, margin: '0 auto' }}
      >
        <line
          x1={pad}
          y1={pad - 14}
          x2={pad + (N - 1) * cellSize}
          y2={pad - 14}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={pad + ((N - 1) * cellSize) / 2}
          y={pad - 18}
          textAnchor="middle"
          fontSize={FONT_LABEL}
          fill={C.dim}
          fontFamily={FONT_FAMILY}
          letterSpacing={LS_OPEN}
        >
          5 columns
        </text>
        <line
          x1={pad - 14}
          y1={pad}
          x2={pad - 14}
          y2={pad + (N - 1) * cellSize}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={pad - 20}
          y={pad + ((N - 1) * cellSize) / 2}
          textAnchor="middle"
          fontSize={FONT_LABEL}
          fill={C.dim}
          fontFamily={FONT_FAMILY}
          letterSpacing={LS_OPEN}
          transform={`rotate(-90, ${pad - 20}, ${pad + ((N - 1) * cellSize) / 2})`}
        >
          5 rows
        </text>
        {Array.from({ length: N }, (_, row) =>
          Array.from({ length: N }, (_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={pad + col * cellSize}
              cy={pad + row * cellSize}
              r={r}
              fill={C.fg}
              opacity={0.85}
            />
          ))
        )}
      </svg>
      <div
        aria-label="A five by five array holds five squared dots"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`5^2 = 5 \\times 5 = 25`} />
        </span>
      </div>
    </div>
  )
}

export function SquareArrayInteractive({ C }) {
  const [n, setN] = useState(4)
  const cellSize = 28
  const r = 4
  const pad = 24
  const maxN = 8
  const W = maxN * cellSize + pad * 2
  const H = maxN * cellSize + pad * 2

  return (
    <div style={{ width: '100%' }}>
      <Slider
        label="n"
        value={n}
        min={1}
        max={8}
        step={1}
        onChange={setN}
        format={v => String(Math.round(v))}
      />
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ display: 'block', maxWidth: 340, margin: '8px auto 0' }}
      >
        {Array.from({ length: n }, (_, row) =>
          Array.from({ length: n }, (_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={pad + col * cellSize}
              cy={pad + row * cellSize}
              r={r}
              fill={C.fg}
              opacity={0.85}
            />
          ))
        )}
      </svg>
      <div
        aria-label="An n by n array holds n squared dots"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`${n}^2 = ${n} \\times ${n} = ${n * n}`} />
        </span>
      </div>
    </div>
  )
}

export function CubeStack({ C }) {
  const N = 4
  const W = 320
  const H = 240

  return (
    <div style={{ width: '100%' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ display: 'block', maxWidth: 320, margin: '0 auto' }}
      >
        {buildCubeFaces(N, 22, 160, 170, C)}
      </svg>
      <div
        aria-label="A four by four by four stack holds four cubed unit cubes"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`4^3 = 64 \\text{ unit cubes}`} />
        </span>
      </div>
    </div>
  )
}

export function CubeStackInteractive({ C }) {
  const [n, setN] = useState(3)
  const W = 320
  const H = 260

  return (
    <div style={{ width: '100%' }}>
      <Slider
        label="n"
        value={n}
        min={1}
        max={5}
        step={1}
        onChange={setN}
        format={v => String(Math.round(v))}
      />
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ display: 'block', maxWidth: 320, margin: '8px auto 0' }}
      >
        {buildCubeFaces(n, 20, 160, 195, C)}
      </svg>
      <div aria-label="An n cubed stack of unit cubes" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={`${n}^3 = ${n * n * n} \\text{ unit cubes}`} />
        </span>
      </div>
    </div>
  )
}

const PERFECT_SQUARES = [0, 1, 4, 9, 16, 25]

export function SquareRootNumberLine({ C }) {
  const [x, setX] = useState(9)
  const sqrtX = Math.sqrt(x)
  const xTex = Number.isInteger(x) ? String(x) : x.toFixed(1)
  const isPerfect = Number.isInteger(sqrtX)

  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-1, 27], y: [-1.8, 2.2] }} preserveAspectRatio={false} height={180}>
        <Coordinates.Cartesian xAxis={{ labels: false, lines: 0 }} yAxis={false} />
        {PERFECT_SQUARES.map(p => (
          <Point key={p} x={p} y={0} color={C.dim} opacity={0.6} />
        ))}
        {PERFECT_SQUARES.filter(p => p > 0).map((p, i) => (
          <LaTeX key={p} at={[p, i % 2 === 0 ? 0.65 : -0.85]} tex={`${p}`} color={C.dim} />
        ))}
        <Point x={x} y={0} color={C.fg} />
        <LaTeX at={[x, 1.4]} tex={`\\sqrt{${xTex}}`} color={C.fg} />
        <Line.Segment
          point1={[x, 0]}
          point2={[x, 1.1]}
          color={C.accent}
          weight={STROKE_SECONDARY}
        />
      </Mafs>
      <Slider
        label="x"
        value={x}
        min={0}
        max={25}
        step={0.5}
        onChange={setX}
        format={v => v.toFixed(1)}
      />
      <div
        aria-label="The square root of x lands between the perfect squares"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={
              isPerfect
                ? `\\sqrt{${xTex}} = ${sqrtX}`
                : `\\sqrt{${xTex}} \\approx ${sqrtX.toFixed(2)}`
            }
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          {isPerfect ? 'perfect square: exact' : 'between perfect squares: irrational'}
        </span>
      </div>
    </div>
  )
}

const ROOT_KEY_POINTS = [
  { x: 1, y: 1, tex: '(1,1)', offY: 0.4 },
  { x: 4, y: 2, tex: '(4,2)', offY: 0.4 },
  { x: 8, y: 2, tex: '(8,2)', offY: -0.55 },
  { x: 9, y: 3, tex: '(9,3)', offY: 0.4 },
  { x: 27, y: 3, tex: '(27,3)', offY: 0.4 }
]

export function RootCurveComparison({ C }) {
  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-1, 29], y: [-0.5, 5.5] }} preserveAspectRatio={false} height={240}>
        <Coordinates.Cartesian
          xAxis={{ lines: 9, labels: x => (x % 9 === 0 && x > 0 ? String(x) : '') }}
          yAxis={{ lines: 1, labels: y => (y > 0 && y <= 5 ? String(y) : '') }}
        />
        <Plot.OfX y={x => (x >= 0 ? Math.sqrt(x) : NaN)} color={C.fg} weight={STROKE_PRIMARY} />
        <Plot.OfX
          y={x => (x >= 0 ? Math.cbrt(x) : NaN)}
          color={C.accent}
          weight={STROKE_PRIMARY}
          style="dashed"
        />
        {ROOT_KEY_POINTS.map(pt => (
          <Point key={`${pt.x}-${pt.y}`} x={pt.x} y={pt.y} color={C.fg} opacity={0.7} />
        ))}
        {ROOT_KEY_POINTS.map(pt => (
          <LaTeX
            key={`lbl-${pt.x}-${pt.y}`}
            at={[pt.x, pt.y + pt.offY]}
            tex={pt.tex}
            color={C.dim}
          />
        ))}
        <LaTeX at={[22, 4.8]} tex={`y = \\sqrt{x}`} color={C.fg} />
        <LaTeX at={[22, 4.1]} tex={`y = \\sqrt[3]{x}`} color={C.accent} />
      </Mafs>
      <div
        aria-label="Square root rises faster than cube root"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\sqrt{4} = 2,\\quad \\sqrt[3]{8} = 2,\\quad \\sqrt[3]{27} = 3`} />
        </span>
      </div>
    </div>
  )
}
