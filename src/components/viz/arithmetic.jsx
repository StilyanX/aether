import { useState } from 'react'
import { Plot, Polyline, Dot, Arrow, Tex, Label, Slider, OPACITY } from './primitives'
import { useVizColors } from '../../hooks/use-viz-colors'
import {
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TINY,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from './scale-tokens'
// M02 FRACTION OPERATIONS

// M04 FRACTION ADVANCED

// M05 RATIONAL NUMBERS

export function MirrorReflectionDiagram() {
  const [p, setP] = useState(2.5)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3.48, 3.61]} yRange={[-1.34, 0.97]} width={620} height={380}>
        <Polyline
          points={[
            [-5, 0],
            [5, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {Array.from({ length: 11 }, (_, i) => {
          const x = i - 5
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, -0.12],
                  [x, 0.12]
                ]}
                opacity={x === 0 ? OPACITY.fg : OPACITY.dim}
              />
              <Tex
                at={[x, -0.32]}
                tex={String(x)}
                anchor="middle"
                size={FONT_SMALL}
                opacity={OPACITY.dim}
              />
            </g>
          )
        })}
        {/* mirror axis: two segments so the tick label at "0" stays clear */}
        <Polyline
          points={[
            [0, 0.15],
            [0, 1.1]
          ]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Polyline
          points={[
            [0, -1.1],
            [0, -0.5]
          ]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Dot x={p} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={-p} y={0} r={5} opacity={OPACITY.accent} />
        {/* p label above the line, -p label below, so they never overlap for small p */}
        <Tex
          at={[p, 0.7]}
          tex={`p = ${p.toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-p, -0.85]}
          tex={`-p = ${(-p).toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Arrow from={[p * 0.05, 0.35]} to={[-p * 0.95, 0.35]} opacity={OPACITY.dim} head={6} />
      </Plot>
      <Slider
        label="$p$"
        value={p}
        min={0.1}
        max={4.5}
        step={0.05}
        onChange={setP}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}

export function TwoSidedNumberLine() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3.86, 3.86]} yRange={[-0.65, 0.83]} width={620} height={320}>
        <Polyline
          points={[
            [-5.5, 0],
            [5.5, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {Array.from({ length: 11 }, (_, i) => {
          const x = i - 5
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, -0.16],
                  [x, 0.16]
                ]}
                opacity={x === 0 ? OPACITY.fg : OPACITY.dim}
              />
              <Tex
                at={[x, -0.4]}
                tex={x > 0 ? `+${x}` : String(x)}
                anchor="middle"
                size={11}
                opacity={OPACITY.dim}
              />
            </g>
          )
        })}
        <Arrow from={[-5.0, 0]} to={[-5.4, 0]} opacity={OPACITY.dim} head={6} />
        <Arrow from={[5.0, 0]} to={[5.4, 0]} opacity={OPACITY.dim} head={6} />
        <Tex
          at={[-2.5, 0.5]}
          tex="\text{negatives}"
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[2.5, 0.5]}
          tex="\text{positives}"
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex at={[0, 0.78]} tex="0" anchor="middle" size={FONT_LABEL} opacity={OPACITY.fg} />
      </Plot>
    </div>
  )
}

export function VectorAdditionDiagram() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(-5)
  const sum = a + b
  const lo = Math.min(0, a, sum) - 1,
    hi = Math.max(0, a, sum) + 1
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[lo, hi]} yRange={[-1.2, 1.2]} width={620} height={400}>
        <Polyline
          points={[
            [lo, 0],
            [hi, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.2}
        />
        {Array.from({ length: hi - lo + 1 }, (_, i) => {
          const x = lo + i
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, -0.1],
                  [x, 0.1]
                ]}
                opacity={x === 0 ? OPACITY.fg : OPACITY.faint}
              />
              <Tex
                at={[x, -0.3]}
                tex={String(x)}
                anchor="middle"
                size={FONT_SMALL}
                opacity={x === 0 ? OPACITY.dim : OPACITY.faint}
              />
            </g>
          )
        })}
        <Arrow
          from={[0, 0.36]}
          to={[a, 0.36]}
          opacity={OPACITY.fg}
          head={7}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[a / 2, 0.6]}
          tex={`a=${a}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Arrow
          from={[a, 0.78]}
          to={[sum, 0.78]}
          opacity={OPACITY.accent}
          head={7}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[(a + sum) / 2, 1.02]}
          tex={`b=${b}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Dot x={sum} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[sum, -0.6]}
          tex={`a+b = ${sum}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="$a$"
        value={a}
        min={-6}
        max={6}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => (v >= 0 ? '+' : '') + v}
      />
      <Slider
        label="$b$"
        value={b}
        min={-6}
        max={6}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => (v >= 0 ? '+' : '') + v}
      />
    </div>
  )
}

export function InequalityFlipDiagram() {
  const [a, setA] = useState(2)
  const [b, setB] = useState(4)
  const [k, setK] = useState(-1)
  const ka = k * a,
    kb = k * b
  const abClose = Math.abs(a - b) < 2 && a !== b
  const aLabelY = abClose ? (a < b ? 0.78 : 1.0) : 0.85
  const bLabelY = abClose ? (a < b ? 1.0 : 0.78) : 0.85
  const kabClose = Math.abs(ka - kb) < 2 && ka !== kb
  const kaLabelY = kabClose ? (ka < kb ? -0.58 : -0.8) : -0.65
  const kbLabelY = kabClose ? (ka < kb ? -0.8 : -0.58) : -0.65
  const lo = Math.min(0, a, b, ka, kb) - 1,
    hi = Math.max(0, a, b, ka, kb) + 1
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[lo, hi]} yRange={[-1.2, 1.6]} width={620} height={400}>
        <Polyline
          points={[
            [lo, 0.6],
            [hi, 0.6]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.2}
        />
        {Array.from({ length: hi - lo + 1 }, (_, i) => (
          <Polyline
            key={i}
            points={[
              [lo + i, 0.55],
              [lo + i, 0.65]
            ]}
            opacity={lo + i === 0 ? OPACITY.fg : OPACITY.faint}
          />
        ))}
        <Dot x={a} y={0.6} r={5} opacity={OPACITY.fg} />
        <Dot x={b} y={0.6} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[a, aLabelY]}
          tex={`a=${a}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[b, bLabelY]}
          tex={`b=${b}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[lo + 0.3, 1.18]}
          tex={a < b ? 'a < b' : a > b ? 'a > b' : 'a = b'}
          anchor="start"
          size={12}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [lo, -0.4],
            [hi, -0.4]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.2}
        />
        {Array.from({ length: hi - lo + 1 }, (_, i) => (
          <Polyline
            key={i}
            points={[
              [lo + i, -0.45],
              [lo + i, -0.35]
            ]}
            opacity={lo + i === 0 ? OPACITY.fg : OPACITY.faint}
          />
        ))}
        <Dot x={ka} y={-0.4} r={5} opacity={OPACITY.fg} />
        <Dot x={kb} y={-0.4} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[ka, kaLabelY]}
          tex={`${k}a=${ka}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[kb, kbLabelY]}
          tex={`${k}b=${kb}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[lo + 0.3, -1.0]}
          tex={ka < kb ? `${k}a < ${k}b` : ka > kb ? `${k}a > ${k}b` : `${k}a = ${k}b`}
          anchor="start"
          size={12}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="$a$"
        value={a}
        min={-5}
        max={5}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="$b$"
        value={b}
        min={-5}
        max={5}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
      <Slider
        label="$k$"
        value={k}
        min={-3}
        max={3}
        step={1}
        onChange={v => setK(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function AbsoluteValueDiagram() {
  const [c, setC] = useState(3)
  const cClose = c < 2
  const negLabelY = cClose ? 0.35 : 0.4
  const posLabelY = cClose ? 0.52 : 0.4
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-6.65, 6.72]} yRange={[-0.34, 0.73]} width={620} height={380}>
        <Polyline
          points={[
            [-6, 0],
            [6, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {Array.from({ length: 13 }, (_, i) => {
          const x = i - 6
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, -0.1],
                  [x, 0.1]
                ]}
                opacity={x === 0 ? OPACITY.fg : OPACITY.faint}
              />
              <Tex
                at={[x, -0.28]}
                tex={String(x)}
                anchor="middle"
                size={FONT_SMALL}
                opacity={OPACITY.faint}
              />
            </g>
          )
        })}
        <Polyline
          points={[
            [-c, 0.18],
            [c, 0.18]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={2.5}
        />
        <Dot x={-c} y={0.18} r={4} opacity={OPACITY.fg} fill={false} />
        <Dot x={c} y={0.18} r={4} opacity={OPACITY.fg} fill={false} />
        <Tex
          at={[-c, negLabelY]}
          tex={`-${c}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[c, posLabelY]}
          tex={`+${c}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0, 0.75]}
          tex={`|x| < ${c}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="$c$"
        value={c}
        min={1}
        max={5}
        step={1}
        onChange={v => setC(v | 0)}
        format={v => v}
      />
    </div>
  )
}

// M06 PLACE VALUE AND ALGORITHMS

export function PlaceValueNumberLine() {
  const C = useVizColors()
  const [v, setV] = useState(3.476)
  const i1 = Math.floor(v)
  const t1 = Math.floor(v * 10) / 10
  const t2 = Math.floor(v * 100) / 100

  const strips = [
    { y: 0.62, lo: i1, hi: i1 + 1, digits: 0, place: 'ONES' },
    { y: 0.0, lo: t1, hi: t1 + 0.1, digits: 1, place: 'TENTHS' },
    { y: -0.62, lo: t2, hi: t2 + 0.01, digits: 2, place: 'HUNDREDTHS' }
  ]

  const Strip = ({ y, lo, hi, digits, place }) => {
    const N = 10
    const labelDigits = digits + 1
    const pos = (v - lo) / (hi - lo)
    const activeIdx = Math.floor(pos * N)
    return (
      <g>
        <Label at={[-0.06, y + 0.22]} size={FONT_SMALL} opacity={0.55} anchor="start">
          {place}
        </Label>
        <Polyline
          points={[
            [0, y],
            [1, y]
          ]}
          opacity={1}
          strokeWidth={1.2}
        />
        {Array.from({ length: N + 1 }, (_, i) => {
          const x = i / N
          const edge = i === 0 || i === N
          const isActiveLeft = i === activeIdx
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, y + (edge ? 0.07 : 0.05)],
                  [x, y - (edge ? 0.07 : 0.05)]
                ]}
                opacity={edge ? 1 : isActiveLeft ? 0.7 : 0.5}
              />
              <Label
                at={[x, y + 0.13]}
                size={FONT_TINY}
                opacity={edge || isActiveLeft ? 0.85 : 0.5}
                anchor="middle"
                upper={false}
              >
                {(lo + ((hi - lo) * i) / N).toFixed(labelDigits)}
              </Label>
            </g>
          )
        })}
        <Dot x={pos} y={y} r={4} opacity={1} />
      </g>
    )
  }

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[-0.08, 1.08]} yRange={[-1.05, 1.05]} width={620} height={560}>
        <Tex
          at={[-0.04, 0.94]}
          tex={`x = ${v.toFixed(3)}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={1}
        />
        {strips.map((s, i) => (
          <Strip key={i} y={s.y} lo={s.lo} hi={s.hi} digits={s.digits} place={s.place} />
        ))}
      </Plot>
      <Slider
        label="$x$"
        value={v}
        min={0}
        max={9.999}
        step={0.001}
        onChange={setV}
        format={x => x.toFixed(3)}
      />
    </div>
  )
}

export function WholeDistributiveLawArea() {
  const C = useVizColors()
  const [a, setA] = useState(23)
  const [b, setB] = useState(47)
  const a1 = Math.floor(a / 10) * 10
  const a2 = a - a1
  const b1 = Math.floor(b / 10) * 10
  const b2 = b - b1

  // Plot uses unit coords; cells are proportioned by a1/a and b1/b so the
  // splits track the actual decomposition (40+3) × (40+7).
  const xSplit = a1 / a
  const ySplit = b2 / b // y grows upward in Plot; bottom row is the b2 strip

  const cells = [
    // top-left: a1 · b1: most opaque (largest product)
    { x0: 0, x1: xSplit, y0: ySplit, y1: 1, lhs: `${a1}\\cdot${b1}`, rhs: a1 * b1, op: 0.55 },
    // top-right: a2 · b1
    { x0: xSplit, x1: 1, y0: ySplit, y1: 1, lhs: `${a2}\\cdot${b1}`, rhs: a2 * b1, op: 0.4 },
    // bottom-left: a1 · b2
    { x0: 0, x1: xSplit, y0: 0, y1: ySplit, lhs: `${a1}\\cdot${b2}`, rhs: a1 * b2, op: 0.3 },
    // bottom-right: a2 · b2: faintest (smallest product)
    { x0: xSplit, x1: 1, y0: 0, y1: ySplit, lhs: `${a2}\\cdot${b2}`, rhs: a2 * b2, op: 0.2 }
  ]

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[-0.18, 1.1]} yRange={[-0.22, 1.18]} width={620} height={560}>
        {/* each cell: filled rectangle with stroked border (single Polyline draws both) */}
        {cells.map((c, i) => (
          <Polyline
            key={`cell-${i}`}
            points={[
              [c.x0, c.y0],
              [c.x1, c.y0],
              [c.x1, c.y1],
              [c.x0, c.y1]
            ]}
            closed
            fillOpacity={c.op}
            opacity={1}
            strokeWidth={STROKE_SECONDARY}
          />
        ))}
        {/* labels inside each cell */}
        {cells.map((c, i) => (
          <Tex
            key={`label-${i}`}
            at={[(c.x0 + c.x1) / 2, (c.y0 + c.y1) / 2]}
            tex={`${c.lhs}=${c.rhs}`}
            anchor="middle"
            size={FONT_LABEL}
            opacity={1}
          />
        ))}
        {/* top edge: a1 + a2 dimension labels */}
        <Tex
          at={[xSplit / 2, 1.06]}
          tex={String(a1)}
          anchor="middle"
          size={FONT_LABEL}
          opacity={0.7}
        />
        <Tex
          at={[xSplit + (1 - xSplit) / 2, 1.06]}
          tex={String(a2)}
          anchor="middle"
          size={FONT_LABEL}
          opacity={0.7}
        />
        {/* left edge: b1 + b2 dimension labels */}
        <Tex
          at={[-0.04, ySplit + (1 - ySplit) / 2]}
          tex={String(b1)}
          anchor="end"
          size={FONT_LABEL}
          opacity={0.7}
        />
        <Tex
          at={[-0.04, ySplit / 2]}
          tex={String(b2)}
          anchor="end"
          size={FONT_LABEL}
          opacity={0.7}
        />
        {/* total below the area */}
        <Tex
          at={[0.5, -0.14]}
          tex={`${a}\\times${b}=${a * b}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={1}
        />
      </Plot>
      <Slider
        label="$a$"
        value={a}
        min={11}
        max={99}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="$b$"
        value={b}
        min={11}
        max={99}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function AdditionCarryVis() {
  const C = useVizColors()
  const [a, setA] = useState(467)
  const [b, setB] = useState(289)
  const [step, setStep] = useState(0)
  const sum = a + b
  const numCols = Math.max(4, String(sum).length)
  const ad = String(a).padStart(numCols, ' ').split('')
  const bd = String(b).padStart(numCols, ' ').split('')
  const sd = String(sum).padStart(numCols, ' ').split('')

  // Compute carries right-to-left. carries[i] = the digit (0 or 1) that flows
  // OUT of column i into column i-1.
  const carries = Array(numCols).fill(0)
  let carry = 0
  for (let i = numCols - 1; i >= 0; i--) {
    const da = parseInt(ad[i], 10) || 0
    const db = parseInt(bd[i], 10) || 0
    const s = da + db + carry
    carries[i] = s >= 10 ? 1 : 0
    carry = carries[i]
  }

  const colsRevealed = step
  const focusCol = step >= 1 && step <= numCols ? numCols - step : -1

  // Grid template: one leading label column + numCols digit columns.
  const gridTemplate = `auto repeat(${numCols}, 1fr)`

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <div className="va-arith-grid" style={{ gridTemplateColumns: gridTemplate }}>
        {/* carries row: visual column v shows carries[v+1] (carry that flowed
            out of column v+1 into column v) */}
        <div className="va-arith-cell va-arith-cell--label" />
        {Array.from({ length: numCols }, (_, v) => {
          // The carry displayed above visual column v came from column v+1.
          const src = v + 1
          const show = src < numCols && src >= numCols - colsRevealed && carries[src] === 1
          return (
            <div
              key={`c-${v}`}
              className="va-arith-cell va-arith-cell--carry"
              data-focus={focusCol === v ? 'true' : undefined}
            >
              {show ? '1' : ''}
            </div>
          )
        })}

        {/* addend a */}
        <div className="va-arith-cell va-arith-cell--label" />
        {ad.map((c, i) => (
          <div
            key={`a-${i}`}
            className="va-arith-cell va-arith-cell--digit"
            data-focus={focusCol === i ? 'true' : undefined}
          >
            {c === ' ' ? '' : c}
          </div>
        ))}

        {/* addend b with leading + operator */}
        <div className="va-arith-cell va-arith-cell--op">+</div>
        {bd.map((c, i) => (
          <div
            key={`b-${i}`}
            className="va-arith-cell va-arith-cell--digit"
            data-focus={focusCol === i ? 'true' : undefined}
          >
            {c === ' ' ? '' : c}
          </div>
        ))}

        {/* sum row (border-top on each cell forms the horizontal bar) */}
        <div className="va-arith-cell va-arith-cell--label va-arith-bar" />
        {sd.map((c, i) => {
          const show = i >= numCols - colsRevealed && c !== ' '
          return (
            <div
              key={`s-${i}`}
              className="va-arith-cell va-arith-cell--digit va-arith-bar"
              data-focus={focusCol === i ? 'true' : undefined}
            >
              {show ? c : ''}
            </div>
          )
        })}
      </div>

      <div className="va-arith-readout" data-complete={step >= numCols ? 'true' : undefined}>
        {`${a} + ${b} = ${sum}`}
      </div>

      <Slider
        label="$a$"
        value={a}
        min={1}
        max={9999}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="$b$"
        value={b}
        min={1}
        max={9999}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
      <Slider
        label="step"
        value={step}
        min={0}
        max={numCols}
        step={1}
        onChange={v => setStep(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function SubtractionTradingVis() {
  const C = useVizColors()
  const [a, setA] = useState(503)
  const [b, setB] = useState(247)
  const [step, setStep] = useState(0)
  const result = a - b
  const numCols = Math.max(4, String(a).length, String(b).length, String(result).length)
  const ad = String(a).padStart(numCols, ' ').split('')
  const bd = String(b).padStart(numCols, ' ').split('')
  const rd = String(result).padStart(numCols, ' ').split('')

  // Simulate trades right-to-left. topD[i] is the effective top digit after
  // any borrows; modStep[i] records the step at which that change becomes
  // visible (= numCols - triggering column).
  const topD = ad.map(c => (c === ' ' ? null : parseInt(c, 10)))
  const modStep = Array(numCols).fill(null)
  for (let i = numCols - 1; i >= 0; i--) {
    const da = topD[i] ?? 0
    const db = bd[i] === ' ' ? 0 : parseInt(bd[i], 10)
    if (da < db) {
      let j = i - 1
      while (j >= 0 && (topD[j] ?? 0) === 0) j--
      if (j >= 0) {
        const revealAt = numCols - i
        topD[j] = (topD[j] ?? 0) - 1
        modStep[j] = revealAt
        for (let k = j + 1; k < i; k++) {
          topD[k] = 9
          modStep[k] = revealAt
        }
        topD[i] = (topD[i] ?? 0) + 10
        modStep[i] = revealAt
      }
    }
  }

  const colsRevealed = step
  const focusCol = step >= 1 && step <= numCols ? numCols - step : -1

  // Grid template: one leading label column + numCols digit columns.
  const gridTemplate = `auto repeat(${numCols}, 1fr)`

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <div className="va-arith-grid" style={{ gridTemplateColumns: gridTemplate }}>
        {/* borrow row: shows the adjusted top digit after trading (column i
            with modStep set displays topD[i] once colsRevealed reaches it) */}
        <div className="va-arith-cell va-arith-cell--label" />
        {topD.map((d, i) => {
          const show = modStep[i] !== null && colsRevealed >= modStep[i]
          return (
            <div
              key={`t-${i}`}
              className="va-arith-cell va-arith-cell--borrow"
              data-focus={focusCol === i ? 'true' : undefined}
            >
              {show ? String(d) : ''}
            </div>
          )
        })}

        {/* minuend a: original digits, struck through where a trade modified them */}
        <div className="va-arith-cell va-arith-cell--label" />
        {ad.map((c, i) => {
          const modified = modStep[i] !== null && colsRevealed >= modStep[i]
          return (
            <div
              key={`a-${i}`}
              className="va-arith-cell va-arith-cell--digit"
              data-focus={focusCol === i ? 'true' : undefined}
              data-traded={modified ? 'true' : undefined}
            >
              {c === ' ' ? '' : modified ? <s>{c}</s> : c}
            </div>
          )
        })}

        {/* subtrahend b with leading − operator */}
        <div className="va-arith-cell va-arith-cell--op">−</div>
        {bd.map((c, i) => (
          <div
            key={`b-${i}`}
            className="va-arith-cell va-arith-cell--digit"
            data-focus={focusCol === i ? 'true' : undefined}
          >
            {c === ' ' ? '' : c}
          </div>
        ))}

        {/* result row (border-top forms the horizontal bar) */}
        <div className="va-arith-cell va-arith-cell--label va-arith-bar" />
        {rd.map((c, i) => {
          const show = i >= numCols - colsRevealed && c !== ' '
          return (
            <div
              key={`r-${i}`}
              className="va-arith-cell va-arith-cell--digit va-arith-bar"
              data-focus={focusCol === i ? 'true' : undefined}
            >
              {show ? c : ''}
            </div>
          )
        })}
      </div>

      <div className="va-arith-readout" data-complete={step >= numCols ? 'true' : undefined}>
        {`${a} − ${b} = ${result}`}
      </div>

      <Slider
        label="$a$"
        value={a}
        min={b + 1}
        max={9999}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="$b$"
        value={b}
        min={1}
        max={Math.min(a - 1, 9998)}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
      <Slider
        label="step"
        value={step}
        min={0}
        max={numCols}
        step={1}
        onChange={v => setStep(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function WholeMultiplicationArea() {
  const C = useVizColors()
  const [a, setA] = useState(34)
  const [b, setB] = useState(28)
  const a1 = Math.floor(a / 10) * 10
  const a2 = a - a1
  const b1 = Math.floor(b / 10) * 10
  const b2 = b - b1

  // Cells are proportioned by a1/a and b1/b so the splits track the actual
  // place-value decomposition (e.g. 34 = 30 + 4, 28 = 20 + 8).
  const xSplit = a1 / a
  const ySplit = b2 / b // y grows upward; bottom row is the b2 strip

  const product = a * b
  const cells = [
    // top-left: a1 · b1: largest product, most opaque
    { x0: 0, x1: xSplit, y0: ySplit, y1: 1, lhs: `${a1}\\cdot${b1}`, rhs: a1 * b1, op: 0.55 },
    // top-right: a2 · b1
    { x0: xSplit, x1: 1, y0: ySplit, y1: 1, lhs: `${a2}\\cdot${b1}`, rhs: a2 * b1, op: 0.4 },
    // bottom-left: a1 · b2
    { x0: 0, x1: xSplit, y0: 0, y1: ySplit, lhs: `${a1}\\cdot${b2}`, rhs: a1 * b2, op: 0.3 },
    // bottom-right: a2 · b2: smallest product, faintest
    { x0: xSplit, x1: 1, y0: 0, y1: ySplit, lhs: `${a2}\\cdot${b2}`, rhs: a2 * b2, op: 0.2 }
  ]

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[-0.18, 1.1]} yRange={[-0.22, 1.18]} width={620} height={560}>
        {/* each cell: filled rectangle with stroked border */}
        {cells.map((c, i) => (
          <Polyline
            key={`cell-${i}`}
            points={[
              [c.x0, c.y0],
              [c.x1, c.y0],
              [c.x1, c.y1],
              [c.x0, c.y1]
            ]}
            closed
            fillOpacity={c.op}
            opacity={1}
            strokeWidth={STROKE_SECONDARY}
          />
        ))}
        {/* partial-product label inside each cell */}
        {cells.map((c, i) => (
          <Tex
            key={`label-${i}`}
            at={[(c.x0 + c.x1) / 2, (c.y0 + c.y1) / 2]}
            tex={`${c.lhs}=${c.rhs}`}
            anchor="middle"
            size={FONT_LABEL}
            opacity={1}
          />
        ))}
        {/* top edge: a1 + a2 dimension labels */}
        <Tex
          at={[xSplit / 2, 1.06]}
          tex={String(a1)}
          anchor="middle"
          size={FONT_LABEL}
          opacity={0.7}
        />
        <Tex
          at={[xSplit + (1 - xSplit) / 2, 1.06]}
          tex={String(a2)}
          anchor="middle"
          size={FONT_LABEL}
          opacity={0.7}
        />
        {/* left edge: b1 + b2 dimension labels */}
        <Tex
          at={[-0.04, ySplit + (1 - ySplit) / 2]}
          tex={String(b1)}
          anchor="end"
          size={FONT_LABEL}
          opacity={0.7}
        />
        <Tex
          at={[-0.04, ySplit / 2]}
          tex={String(b2)}
          anchor="end"
          size={FONT_LABEL}
          opacity={0.7}
        />
        {/* total product below the area */}
        <Tex
          at={[0.5, -0.14]}
          tex={`${a}\\times${b}=${product}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={1}
        />
      </Plot>
      <Slider
        label="$a$"
        value={a}
        min={11}
        max={99}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="$b$"
        value={b}
        min={11}
        max={99}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function LongDivisionStepVis() {
  const C = useVizColors()
  const [N, setN] = useState(3724)
  const [D, setD] = useState(7)
  const [step, setStep] = useState(0)

  const Nd = String(N).split('').map(Number)
  const numCols = Nd.length

  // Simulate the algorithm. Each step processes one dividend digit:
  // bring it down, divide, record quotient digit, subtraction value, remainder.
  const steps = []
  {
    let curr = 0
    for (let i = 0; i < numCols; i++) {
      curr = curr * 10 + Nd[i]
      const qd = Math.floor(curr / D)
      const sub = qd * D
      const rem = curr - sub
      steps.push({ working: curr, qd, sub, rem })
      curr = rem
    }
  }
  const quotient = steps.map(s => s.qd).join('')
  const finalRem = steps.length ? steps[steps.length - 1].rem : 0

  // How many step rows are revealed (clamped). focusCol = the dividend column
  // currently being processed by the active step, for a dashed highlight.
  const visible = Math.min(step, steps.length)
  const focusCol = step >= 1 && step <= steps.length ? step - 1 : -1

  // Grid template: one leading column for divisor/minus + numCols digit columns.
  const gridTemplate = `auto repeat(${numCols}, 1fr)`

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <div className="va-arith-grid va-divgrid" style={{ gridTemplateColumns: gridTemplate }}>
        {/* quotient row: digits revealed left-to-right above each dividend
            column. The L-bracket overbar is the border-top on the dividend
            row immediately below, so this row carries no border. */}
        <div className="va-arith-cell va-arith-cell--label" />
        {Nd.map((_, i) => {
          const show = i < visible
          return (
            <div
              key={`q-${i}`}
              className="va-arith-cell va-arith-cell--digit va-divgrid-quotient"
              data-focus={focusCol === i ? 'true' : undefined}
            >
              {show ? String(steps[i].qd) : ''}
            </div>
          )
        })}

        {/* dividend row: divisor in leading column, then dividend digits.
            border-top on each dividend cell forms the overbar; border-left
            on the leftmost dividend cell forms the vertical bracket arm. */}
        <div className="va-arith-cell va-arith-cell--label va-divgrid-divisor">{D}</div>
        {Nd.map((d, i) => (
          <div
            key={`n-${i}`}
            className={`va-arith-cell va-arith-cell--digit va-divgrid-dividend${i === 0 ? ' va-divgrid-dividend--first' : ''}`}
            data-focus={focusCol === i ? 'true' : undefined}
          >
            {d}
          </div>
        ))}

        {/* per-step subtraction blocks. Each step contributes two rows:
            subtrahend (with leading minus) and remainder (with horizontal
            rule on top). The subtrahend digits sit under the working
            dividend columns: startCol = i - L + 1 ... i. */}
        {steps.slice(0, visible).flatMap((s, i) => {
          const subStr = String(s.sub)
          const L = subStr.length
          const startCol = i - L + 1
          const remStr = String(s.rem)
          const remStartCol = i - remStr.length + 1
          const rows = []
          // subtrahend row
          rows.push(
            <div key={`s-op-${i}`} className="va-arith-cell va-arith-cell--op">
              −
            </div>
          )
          for (let c = 0; c < numCols; c++) {
            const inRange = c >= startCol && c <= i
            const ch = inRange ? subStr[c - startCol] : ''
            rows.push(
              <div
                key={`s-${i}-${c}`}
                className="va-arith-cell va-arith-cell--digit va-divgrid-sub"
                data-focus={focusCol === c ? 'true' : undefined}
              >
                {ch}
              </div>
            )
          }
          // remainder row (border-top across working cols only forms the bar)
          rows.push(<div key={`r-lab-${i}`} className="va-arith-cell va-arith-cell--label" />)
          for (let c = 0; c < numCols; c++) {
            const inBar = c >= startCol && c <= i
            const inRem = c >= remStartCol && c <= i
            const ch = inRem ? remStr[c - remStartCol] : ''
            rows.push(
              <div
                key={`r-${i}-${c}`}
                className={`va-arith-cell va-arith-cell--digit va-divgrid-rem${inBar ? ' va-divgrid-rem--bar' : ''}`}
                data-focus={focusCol === c ? 'true' : undefined}
              >
                {ch}
              </div>
            )
          }
          return rows
        })}
      </div>

      <div
        className="va-arith-readout"
        data-complete={visible === steps.length ? 'true' : undefined}
      >
        {`${N} ÷ ${D} = ${quotient} r ${finalRem}`}
      </div>

      <Slider
        label="$N$"
        value={N}
        min={10}
        max={9999}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v}
      />
      <Slider
        label="$D$"
        value={D}
        min={2}
        max={99}
        step={1}
        onChange={v => setD(v | 0)}
        format={v => v}
      />
      <Slider
        label="step"
        value={step}
        min={0}
        max={steps.length}
        step={1}
        onChange={v => setStep(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function ExpandedFormDecomposition() {
  const C = useVizColors()
  const [n, setN] = useState(3728)
  const [step, setStep] = useState(0)

  // Always render a 4-column grid so the layout stays stable across slider
  // values. Leading-zero columns render blank (digit '0' contributes nothing).
  const numCols = 4
  const digits = String(n)
    .padStart(numCols, '0')
    .split('')
    .map(d => parseInt(d, 10))
  // Power of 10 for each visual column (leftmost is 10^3, rightmost is 10^0).
  const powers = digits.map((_, i) => numCols - 1 - i)
  const contributions = digits.map((d, i) => d * 10 ** powers[i])

  // Step semantics: 0 = just the digits row; k = reveal contribution column
  // k - 1 from the left; numCols + 1 = reveal final sum readout.
  const maxStep = numCols + 1
  const colsRevealed = Math.min(step, numCols)
  const sumRevealed = step >= maxStep
  const focusCol = step >= 1 && step <= numCols ? step - 1 : -1

  const gridTemplate = `auto repeat(${numCols}, 1fr)`

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <div className="va-arith-grid" style={{ gridTemplateColumns: gridTemplate }}>
        {/* digits row */}
        <div className="va-arith-cell va-arith-cell--label" />
        {digits.map((d, i) => {
          const leading = digits.slice(0, i).every(x => x === 0) && d === 0 && i < numCols - 1
          return (
            <div
              key={`d-${i}`}
              className="va-arith-cell va-arith-cell--digit"
              data-focus={focusCol === i ? 'true' : undefined}
            >
              {leading ? '' : d}
            </div>
          )
        })}

        {/* contribution row */}
        <div className="va-arith-cell va-arith-cell--label va-arith-bar" />
        {contributions.map((c, i) => {
          const reveal = i < colsRevealed
          const leading = digits.slice(0, i).every(x => x === 0) && digits[i] === 0
          return (
            <div
              key={`c-${i}`}
              className="va-arith-cell va-arith-cell--digit va-arith-bar"
              data-focus={focusCol === i ? 'true' : undefined}
              style={{ fontSize: 'clamp(14px, 2.6vw, 20px)' }}
            >
              {reveal && !leading ? c : ''}
            </div>
          )
        })}
      </div>

      <div className="va-arith-readout" data-complete={sumRevealed ? 'true' : undefined}>
        {sumRevealed
          ? `${contributions.filter((c, i) => c !== 0 || digits[i] !== 0).join(' + ')} = ${n}`
          : `${n}`}
      </div>

      <Slider
        label="$n$"
        value={n}
        min={1}
        max={9999}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v}
      />
      <Slider
        label="step"
        value={step}
        min={0}
        max={maxStep}
        step={1}
        onChange={v => setStep(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function ColumnMultiplicationVis() {
  const C = useVizColors()
  const [a, setA] = useState(852)
  const [b, setB] = useState(73)
  const [step, setStep] = useState(0)

  // Decompose b into its digits (right to left order makes shift = index).
  const bStr = String(b)
  const bLen = bStr.length
  const partials = []
  for (let i = 0; i < bLen; i++) {
    const digit = parseInt(bStr[bLen - 1 - i], 10)
    partials.push({ product: a * digit, shift: i, digit })
  }
  const sum = a * b
  const numCols = Math.max(4, String(sum).length)

  const ad = String(a).padStart(numCols, ' ').split('')
  const bd = String(b).padStart(numCols, ' ').split('')
  // Each partial row: visualize a*digit shifted left by `shift` columns by
  // appending `shift` trailing spaces, then left-pad to numCols.
  const partialRows = partials.map(p => {
    const withShift = String(p.product) + ' '.repeat(p.shift)
    return withShift.padStart(numCols, ' ').split('')
  })
  const sd = String(sum).padStart(numCols, ' ').split('')

  // Step semantics:
  // 0           : show only a and b.
  // 1..bLen     : reveal partial row (step - 1).
  // bLen + 1    : reveal final sum.
  const maxStep = bLen + 1
  const partialsRevealed = Math.min(step, bLen)
  const sumRevealed = step >= maxStep
  const focusPartial = step >= 1 && step <= bLen ? step - 1 : -1

  const gridTemplate = `auto repeat(${numCols}, 1fr)`

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <div className="va-arith-grid" style={{ gridTemplateColumns: gridTemplate }}>
        {/* multiplicand a */}
        <div className="va-arith-cell va-arith-cell--label" />
        {ad.map((c, i) => (
          <div key={`a-${i}`} className="va-arith-cell va-arith-cell--digit">
            {c === ' ' ? '' : c}
          </div>
        ))}

        {/* multiplier b with leading × operator */}
        <div className="va-arith-cell va-arith-cell--op">×</div>
        {bd.map((c, i) => (
          <div key={`b-${i}`} className="va-arith-cell va-arith-cell--digit">
            {c === ' ' ? '' : c}
          </div>
        ))}

        {/* partial-product rows; first row has the top bar, subsequent rows
            carry a leading "+" operator to read as an addition stack */}
        {partialRows.flatMap((row, p) => {
          const reveal = p < partialsRevealed
          const isFirst = p === 0
          const focused = focusPartial === p
          const cells = []
          cells.push(
            <div
              key={`pop-${p}`}
              className={`va-arith-cell ${
                isFirst ? 'va-arith-cell--label' : 'va-arith-cell--op'
              }${isFirst ? ' va-arith-bar' : ''}`}
            >
              {isFirst ? '' : '+'}
            </div>
          )
          for (let i = 0; i < numCols; i++) {
            const c = row[i]
            const showDigit = reveal && c !== ' '
            cells.push(
              <div
                key={`p-${p}-${i}`}
                className={`va-arith-cell va-arith-cell--digit${isFirst ? ' va-arith-bar' : ''}`}
                data-focus={focused ? 'true' : undefined}
              >
                {showDigit ? c : ''}
              </div>
            )
          }
          return cells
        })}

        {/* sum row (border-top forms the final bar) */}
        <div className="va-arith-cell va-arith-cell--label va-arith-bar" />
        {sd.map((c, i) => (
          <div key={`s-${i}`} className="va-arith-cell va-arith-cell--digit va-arith-bar">
            {sumRevealed && c !== ' ' ? c : ''}
          </div>
        ))}
      </div>

      <div className="va-arith-readout" data-complete={sumRevealed ? 'true' : undefined}>
        {`${a} × ${b} = ${sum}`}
      </div>

      <Slider
        label="$a$"
        value={a}
        min={10}
        max={999}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="$b$"
        value={b}
        min={10}
        max={99}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
      <Slider
        label="step"
        value={step}
        min={0}
        max={maxStep}
        step={1}
        onChange={v => setStep(v | 0)}
        format={v => v}
      />
    </div>
  )
}

// Decimal-fundamentals viz (09.1.x) moved inline into
// src/features/explore/mathematics/arithmetic/decimal-fundamentals.jsx.

// Infinite-and-repeating-decimals viz (10.1.x) moved inline into
// src/features/explore/mathematics/arithmetic/infinite-and-repeating-decimals.jsx.

// Decimal-expansion-proofs viz (11.1.x) moved inline into
// src/features/explore/mathematics/arithmetic/decimal-expansion-proofs.jsx.

// Mental-calculation-strategies viz (12.1.x) moved inline into
// src/features/explore/mathematics/arithmetic/mental-calculation-strategies.jsx.
