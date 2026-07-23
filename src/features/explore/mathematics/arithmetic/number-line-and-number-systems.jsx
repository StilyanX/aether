import { useState } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { VizFigure } from '../../../../components/viz-figure'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import {
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TINY
} from '../../../../components/viz/scale-tokens'
import {
  Plot,
  Polyline,
  Dot,
  Arrow,
  Tex,
  Label,
  Slider
} from '../../../../components/viz/primitives'

function OperationsOnNumberLine() {
  const C = useVizColors()
  const [op, setOp] = useState('+')
  const [a, setA] = useState(2.5)
  const [b, setB] = useState(1.5)

  let result = 0
  if (op === '+') result = a + b
  else if (op === '−') result = a - b
  else if (op === '×') result = a * b
  else if (op === '÷') result = b !== 0 ? a / b : NaN

  const xMax = 10
  const xMin = 0
  const clamp = x => Math.max(xMin, Math.min(xMax, x))
  const inRange = x => x >= xMin && x <= xMax
  const ops = ['+', '−', '×', '÷']

  // Division geometry: how many full b-segments fit in a, and the remainder.
  const divCount = op === '÷' && b > 0 ? Math.max(0, Math.floor(a / b)) : 0
  const divCovered = divCount * b
  const divRemainder = op === '÷' && b > 0 ? a - divCovered : 0

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <div
        role="group"
        aria-label="Operation"
        style={{
          display: 'flex',
          gap: 6,
          justifyContent: 'center',
          marginBottom: 8
        }}
      >
        {ops.map(o => {
          const active = op === o
          return (
            <button
              key={o}
              type="button"
              onClick={() => setOp(o)}
              aria-pressed={active}
              style={{
                background: 'transparent',
                color: C.fg,
                border: `1px solid ${active ? C.fg : C.faint}`,
                padding: '4px 12px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                opacity: active ? 1 : 0.55,
                fontSize: FONT_LABEL,
                minWidth: 32,
                minHeight: 28
              }}
            >
              {o}
            </button>
          )
        })}
      </div>
      <Plot xRange={[xMin, xMax]} yRange={[-0.3, 1.25]} width={620} height={240}>
        <Polyline
          points={[
            [xMin, 0],
            [xMax, 0]
          ]}
          opacity={1}
        />
        {Array.from({ length: 11 }, (_, i) => i).map(t => (
          <g key={t}>
            <Polyline
              points={[
                [t, -0.08],
                [t, 0.08]
              ]}
              opacity={0.5}
            />
            <Label at={[t, -0.18]} anchor="middle" size={FONT_SMALL} opacity={0.5} upper={false}>
              {String(t)}
            </Label>
          </g>
        ))}
        {op === '+' && (
          <>
            <Arrow from={[clamp(0), 0.4]} to={[clamp(a), 0.4]} opacity={1} />
            <Arrow from={[clamp(a), 0.7]} to={[clamp(a + b), 0.7]} opacity={0.7} />
            {inRange(result) && <Dot x={result} y={0} r={4} />}
          </>
        )}
        {op === '−' && (
          <>
            <Arrow from={[clamp(0), 0.4]} to={[clamp(a), 0.4]} opacity={1} />
            <Arrow from={[clamp(a), 0.7]} to={[clamp(a - b), 0.7]} opacity={0.7} />
            {inRange(result) && <Dot x={result} y={0} r={4} />}
          </>
        )}
        {op === '×' && (
          <>
            {Array.from({ length: Math.min(Math.abs(Math.round(b)), 10) }, (_, i) => i)
              .filter(i => {
                const lo = Math.min(i * a, (i + 1) * a)
                const hi = Math.max(i * a, (i + 1) * a)
                return hi > xMin && lo < xMax
              })
              .map(i => (
                <Arrow
                  key={i}
                  from={[clamp(i * a), 0.4 + i * 0.05]}
                  to={[clamp((i + 1) * a), 0.4 + i * 0.05]}
                  opacity={0.5 + 0.05 * i}
                />
              ))}
            {inRange(result) && <Dot x={result} y={0} r={4} />}
          </>
        )}
        {op === '÷' && (
          <>
            {Array.from({ length: Math.min(divCount, 20) }, (_, i) => i).map(i => (
              <Polyline
                key={i}
                points={[
                  [i * b, 0.4],
                  [(i + 1) * b, 0.4]
                ]}
                opacity={1}
                strokeWidth={2}
              />
            ))}
            {divRemainder > 0 && inRange(a) && (
              <>
                <Polyline
                  points={[
                    [divCovered, 0.4],
                    [a, 0.4]
                  ]}
                  opacity={0.5}
                  strokeWidth={2}
                  dash="2 3"
                />
                <Label
                  at={[(divCovered + a) / 2, 0.55]}
                  anchor="middle"
                  size={FONT_TINY}
                  opacity={0.7}
                >
                  {`R ${divRemainder.toFixed(2)}`}
                </Label>
              </>
            )}
            {inRange(a) && <Dot x={a} y={0.4} r={3} />}
            <Tex
              at={[xMax - 1, 1.1]}
              tex={`${a.toFixed(2)} \\div ${b.toFixed(2)} = ${result.toFixed(3)}`}
              anchor="end"
              size={FONT_LABEL}
            />
          </>
        )}
        {op !== '÷' && (
          <Tex
            at={[xMax - 1, 1.1]}
            tex={`${a.toFixed(2)} ${op} ${b.toFixed(2)} = ${result.toFixed(3)}`}
            anchor="end"
            size={FONT_LABEL}
          />
        )}
      </Plot>
      <Slider label="a" value={a} min={0} max={8} step={0.1} onChange={setA} />
      <Slider label="b" value={b} min={op === '÷' ? 0.1 : 0} max={8} step={0.1} onChange={setB} />
    </div>
  )
}

function NumberLineWithTypes() {
  const C = useVizColors()
  const [showSet, setShowSet] = useState({ N: true, Z: true, Q: true, R: true })
  const xMin = -4
  const xMax = 6.5
  const yAxis = 0
  const yN = -0.7
  const yZ = 0.55
  const yQ = 1.15
  const yR = 1.75
  const yIrr = 2.0
  const xLabel = xMin + 0.15

  // Q sample: integers + halves + thirds, filtered to visible range
  const qSet = new Set()
  for (let n = -5; n <= 7; n++) {
    qSet.add(n)
    qSet.add(n + 1 / 3)
    qSet.add(n + 1 / 2)
    qSet.add(n + 2 / 3)
  }
  const qVisible = Array.from(qSet).filter(v => v > xMin + 0.5 && v < xMax - 0.05)
  const ints = Array.from({ length: 11 }, (_, i) => i - 4)

  const sets = ['N', 'Z', 'Q', 'R']

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[xMin, xMax]} yRange={[-1.15, 2.25]} width={620} height={320}>
        <Polyline
          points={[
            [xMin, yAxis],
            [xMax, yAxis]
          ]}
          opacity={1}
        />
        {ints.map(t => (
          <g key={t}>
            <Polyline
              points={[
                [t, yAxis - 0.07],
                [t, yAxis + 0.07]
              ]}
              opacity={0.5}
            />
            <Label
              at={[t, yAxis - 0.24]}
              anchor="middle"
              size={FONT_SMALL}
              opacity={0.5}
              upper={false}
            >
              {String(t)}
            </Label>
          </g>
        ))}
        {showSet.R && (
          <g>
            <Polyline
              points={[
                [xMin + 0.7, yR],
                [xMax - 0.1, yR]
              ]}
              opacity={0.5}
              strokeWidth={3}
            />
            <Tex at={[xLabel, yR]} tex="\mathbb{R}" anchor="start" size={FONT_TEX} />
            <Dot x={Math.sqrt(2)} y={yR} r={3.5} opacity={1} />
            <Dot x={Math.PI} y={yR} r={3.5} opacity={1} />
            <Tex
              at={[Math.sqrt(2), yIrr]}
              tex="\sqrt{2}"
              anchor="middle"
              size={FONT_SMALL}
              opacity={0.85}
            />
            <Tex at={[Math.PI, yIrr]} tex="\pi" anchor="middle" size={FONT_SMALL} opacity={0.85} />
          </g>
        )}
        {showSet.Q && (
          <g>
            <Tex at={[xLabel, yQ]} tex="\mathbb{Q}" anchor="start" size={FONT_TEX} />
            {qVisible.map((v, i) => (
              <Dot key={i} x={v} y={yQ} r={1.6} opacity={0.6} />
            ))}
          </g>
        )}
        {showSet.Z && (
          <g>
            <Tex at={[xLabel, yZ]} tex="\mathbb{Z}" anchor="start" size={FONT_TEX} />
            {ints
              .filter(t => t > xMin + 0.5)
              .map(t => (
                <Dot key={t} x={t} y={yZ} r={3} opacity={0.85} />
              ))}
          </g>
        )}
        {showSet.N && (
          <g>
            <Tex at={[xLabel, yN]} tex="\mathbb{N}" anchor="start" size={FONT_TEX} />
            {Array.from({ length: 6 }, (_, i) => i + 1).map(t => (
              <Dot key={t} x={t} y={yN} r={3.5} opacity={1} />
            ))}
          </g>
        )}
      </Plot>
      <div
        role="group"
        aria-label="Number sets"
        style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}
      >
        {sets.map(s => {
          const active = showSet[s]
          return (
            <button
              key={s}
              type="button"
              onClick={() => setShowSet({ ...showSet, [s]: !showSet[s] })}
              aria-pressed={active}
              style={{
                background: 'transparent',
                color: C.fg,
                border: `1px solid ${active ? C.fg : C.faint}`,
                padding: '4px 12px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                opacity: active ? 1 : 0.55,
                fontSize: FONT_LABEL,
                minWidth: 32,
                minHeight: 28
              }}
            >
              {s}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function RoundingVisualization() {
  const C = useVizColors()
  const [v, setV] = useState(3.47)
  const [place, setPlace] = useState(0)
  const unit = Math.pow(10, -place)
  const lo = Math.floor(v / unit) * unit
  const hi = lo + unit
  const mid = (lo + hi) / 2
  const rounded = Math.round(v / unit) * unit
  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot
        xRange={[lo - unit * 0.2, hi + unit * 0.2]}
        yRange={[-0.36, 0.72]}
        width={620}
        height={240}
      >
        <Polyline
          points={[
            [lo - unit * 0.2, 0],
            [hi + unit * 0.2, 0]
          ]}
          opacity={1}
        />
        {[lo, mid, hi].map((t, i) => (
          <g key={i}>
            <Polyline
              points={[
                [t, -0.12],
                [t, 0.12]
              ]}
              opacity={i === 1 ? 0.15 : 1}
              dash={i === 1 ? '2 3' : null}
            />
            <Label
              at={[t, -0.28]}
              anchor="middle"
              size={FONT_SMALL}
              opacity={i === 1 ? 0.5 : 1}
              upper={false}
            >
              {t.toFixed(Math.max(0, place))}
            </Label>
          </g>
        ))}
        <Polyline
          points={[
            [lo, 0.35],
            [rounded, 0.35]
          ]}
          opacity={0.85}
          strokeWidth={2}
        />
        <Dot x={v} y={0} r={3.5} opacity={1} />
        <Tex at={[v, 0.18]} tex={`x = ${v.toFixed(3)}`} anchor="middle" size={FONT_SMALL} />
        <Tex
          at={[(lo + hi) / 2, 0.55]}
          tex={`\\to ${rounded.toFixed(Math.max(0, place))}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={0.85}
        />
      </Plot>
      <Slider
        label="x"
        value={v}
        min={0}
        max={10}
        step={0.001}
        onChange={setV}
        format={x => x.toFixed(3)}
      />
      <Slider
        label="place"
        value={place}
        min={-1}
        max={2}
        step={1}
        onChange={p => setPlace(p | 0)}
        format={p => ['tens', 'ones', 'tenths', 'hundredths'][p + 1]}
      />
    </div>
  )
}

function BaseConversionVis() {
  const C = useVizColors()
  const [n, setN] = useState(73)
  const [base, setBase] = useState(2)
  const steps = []
  let cur = n
  while (cur > 0 && steps.length < 24) {
    const r = cur % base
    const q = Math.floor(cur / base)
    steps.push({ cur, q, r })
    cur = q
  }
  const digits = steps.map(s => s.r).reverse()
  const digitChar = d => (d < 10 ? String(d) : String.fromCharCode(55 + d))
  const answer = digits.length ? digits.map(digitChar).join('') : '0'
  return (
    <div className="viz-baseconv" style={{ color: C.fg }}>
      <div className="viz-baseconv-table" role="table" aria-label="Repeated division steps">
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'contents' }} role="row">
            <span className="viz-baseconv-cell" role="cell">{`${s.cur} ÷ ${base}`}</span>
            <span
              className="viz-baseconv-cell viz-baseconv-cell--op"
              role="cell"
            >{`= ${s.q}`}</span>
            <span className="viz-baseconv-cell viz-baseconv-cell--op" role="cell">{`r =`}</span>
            <span className="viz-baseconv-cell viz-baseconv-cell--r" role="cell">
              {digitChar(s.r)}
            </span>
          </div>
        ))}
      </div>
      <div className="viz-baseconv-bar" />
      <div className="viz-baseconv-note">Read remainders bottom-up:</div>
      <div className="viz-baseconv-answer">
        <span>{n}</span>
        <sub>(10)</sub>
        <span className="viz-baseconv-eq">=</span>
        <span>{answer}</span>
        <sub>({base})</sub>
      </div>
      <Slider
        label="n"
        value={n}
        min={1}
        max={2000}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v}
      />
      <Slider
        label="base"
        value={base}
        min={2}
        max={16}
        step={1}
        onChange={v => setBase(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export default function NumberLineAndNumberSystems() {
  const config = {
    cssPrefix: 'whn',
    documentTitle: 'Number Line and Number Systems - AETHER',
    learning: {
      category: 'Part 1',
      title: 'Number Line and Number Systems',
      subtitle: 'The number line, estimation, and number bases.',
      sections: [
        /* SECTION 7: THE NUMBER LINE AND THE FOUR OPERATIONS
         */
        <>
          <h2>The Number Line and the Four Operations</h2>

          <p>{`A thermometer reading is a point on a number line. Adding and subtracting degrees is moving along that line. The same picture, drawn carefully, supports every operation in this lesson.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You already add, subtract, multiply, and divide whole numbers. Can you picture each of
              the four operations as a movement or a shape on a number line?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Addition places one segment right after another. Subtraction is the segment left over. Multiplication is repeated addition, or the area of a rectangle. Division undoes multiplication by finding the missing side of that rectangle.`}</p>
            </details>
          </div>

          <h3>The Number Line and the Unit</h3>
          <p>
            {`You already build the number line by laying copies of a chosen `}
            <strong>unit segment</strong>
            {` end to end from 0, marking 1, 2, 3, and so on. The one idea to add here is that each whole number $n$ is two things at once: a point on the line, and the length of the segment from 0 to $n$. That double reading, point and length, is what lets the line carry every operation in this lesson.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Whole Number</span>
            <div className="lrn-definition-desc">
              One of the marked points to the right of 0 on the number line (including 0 itself).
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Number (Real Number)</span>
            <div className="lrn-definition-desc">Any point on the number line.</div>
          </div>

          <p>{`Every number you write down depends on which segment you chose as the unit. The equation $3 + 4 = 7$ is a statement about lengths. Three of those segments end-to-end, plus four more, equals seven. Every term must use the same unit, or the equation is nonsense. "3 apples + 4 oranges" is not $3 + 4 = 7$, because the two segments live on different number lines.`}</p>

          <h3>Addition and Subtraction on the Number Line</h3>
          <p>{`Addition is segment-after-segment. To compute $m + n$, start at 0, move right $m$ units, then continue right $n$ more units. You land on $m + n$.`}</p>
          <p>{`Subtraction reverses the second move. To compute $m - n$ (with $m \\geq n$), start at 0 and go right $m$ units. Then turn around and move $n$ units back to the left. You land on $m - n$. The result is the length of the segment that is left when you cut $n$ off of $m$.`}</p>

          <VizFigure title="Operations on Number Line" size="body" aspect="620/192">
            <OperationsOnNumberLine />
          </VizFigure>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Compute $5 + 3$ on the number line.`}</p>
              <p>{`Start at 0, go right 5 units.`}</p>
              <p>{`Then go right 3 more.`}</p>
              <p>{`You land on 8, so $5 + 3 = 8$.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Compute $9 - 4$ on the number line.`}</p>
              <p>{`Start at 0, go right 9 units.`}</p>
              <p>{`Then go back $\\underline{\\phantom{00}}$ units to the left.`}</p>
              <p>{`You land on $\\underline{\\phantom{00}}$.`}</p>
              <p>{`So $9 - 4 = \\underline{\\phantom{00}}$.`}</p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Use the number line to show that $7 + 6 = 13$ and $13 - 6 = 7$.`}</p>
            </div>
          </div>

          <h3>Multiplication on the Number Line</h3>
          <p>{`You already read $m \\times n$ as $m$ copies of $n$, and as the area of a rectangle with sides $m$ and $n$. On the number line, $2 \\times 3$ is two segments of length 3 laid end-to-end, landing on 6. The rectangle and the repeated-addition picture are two views of that same point, and it is the rectangle view that we lean on next for division.`}</p>

          <h3>Division on the Number Line</h3>
          <p>{`Division undoes multiplication. If $a = q \\times d$ with $d \\neq 0$, then $a \\div d = q$. The area picture makes this concrete: a rectangle of area $a$ with one side equal to $d$ has its other side equal to $q$. Division finds the missing side when you know the area and one of the two sides.`}</p>

          <p>
            <strong>Why you cannot divide by zero.</strong>
            {` Suppose $a \\div 0 = k$ for some number $k$. By the inverse rule above, that means $a = k \\times 0 = 0$. If $a$ is nonzero, this is a contradiction, so there is no $k$ to be the answer. If $a$ is zero, then $0 = k \\times 0$ is true for `}
            <em>every</em>
            {` $k$, so the answer is not pinned down to a single number. Either way the answer fails to exist, which is what "undefined" means.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Use the rectangle model to explain why $18 \\div 6 = 3$. What are the sides? What is the area?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A rectangle with area 18 and one side 6 has the other side equal to $18 \\div 6 = 3$. Check by multiplying back: $6 \\times 3 = 18$.`}</p>
            </details>
          </div>
        </>,

        /* SECTION 8: WHAT IS A NUMBER?
         */
        <>
          <h2>What Is a Number?</h2>

          <p>{`The four operations all happen on a single number line. What counts as a point on that line, and what kinds of numbers besides 0, 1, 2, 3, ... live there?`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have used numbers your whole life. Can you state a single definition of "number"
              that works for whole numbers, fractions, decimals, and even $\sqrt{2}$ and $\pi$?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A number is a point on the number line. One definition, every kind.`}</p>
            </details>
          </div>

          <h3>The Concept of a Number</h3>
          <p>{`A number is a point on the number line. That one statement covers whole numbers, fractions, decimals, and irrational numbers at once. Whole numbers are easy to picture (you can show five with your fingers). A fraction like $\\frac{13}{7}$ is harder to picture. But on the number line it sits at a specific point between 1 and 2, no harder to locate than 1 or 2 themselves. Whole numbers and fractions live on the same line and obey the same rules, which is the whole reason for defining numbers this way.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Explain why defining a number as "a point on the number line" is better than defining
              it as "a quantity."
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`"Quantity" tells you nothing about where a number sits relative to others. A point on the number line has a fixed position. So you can compare two numbers, add them, and subtract them by reading positions and lengths directly. The definition is exact, and it works the same way for whole numbers, fractions, and irrational numbers.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Counting Numbers</span>
              <p>{`1, 2, 3, ... Used for counting objects. Begin at 1.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Whole Numbers</span>
              <p>{`0, 1, 2, 3, ... The counting numbers plus 0. Zero is the starting point on the number line.`}</p>
            </div>
          </div>

          <h3>The Real Number Line</h3>
          <p>
            {`The line holds far more than the whole numbers. Between any two of them sit infinitely many other points: fractions such as $\\frac{1}{2}$, decimals such as 0.75, and irrational numbers such as $\\sqrt{2}$ and $\\pi$ that no fraction can name. Every point on the line is a `}
            <strong>real number</strong>
            {`, and every real number is a point on the line. The whole numbers are the evenly spaced markers. The fractions fill in some of the gaps, and the irrational numbers fill in the rest. The result is a line with no holes, and that is what lets all arithmetic happen on one picture.`}
          </p>

          <p>{`The figure stacks four named sets of numbers on one line, each written with a standard symbol: $\\mathbb{N}$ the counting numbers $1, 2, 3, \\ldots$, $\\mathbb{Z}$ the integers (the whole numbers and their mirror images on the left of 0), $\\mathbb{Q}$ the rational numbers (every fraction), and $\\mathbb{R}$ the real numbers (every point on the line). Each set sits inside the next: $\\mathbb{N}$ inside $\\mathbb{Z}$ inside $\\mathbb{Q}$ inside $\\mathbb{R}$.`}</p>

          <VizFigure title="Number Types on Line" size="body" aspect="31/16">
            <NumberLineWithTypes />
          </VizFigure>

          <h3>Decimal Fractions and Infinite Decimals</h3>
          <p>{`A decimal fraction is a fraction over a power of 10, and on the line each decimal digit you write down narrows the number's location by a factor of 10. So 0.3 sits three-tenths of the way from 0 to 1, and after $k$ digits the number sits in a segment of length $\\frac{1}{10^k}$.`}</p>
          <p>{`Some numbers have no finite decimal. The fraction $\\frac{1}{3} = 0.333\\ldots$ needs infinitely many digits, and $\\sqrt{2} = 1.41421\\ldots$ never settles into any repeating pattern. Even so, an infinite decimal still names a single point: the digits keep narrowing toward one location even though the writing never finishes.`}</p>
        </>,

        /* SECTION 9: ESTIMATION
         */
        <>
          <h2>Estimation</h2>

          <p>{`Estimation gives a quick sense of a number's size without the exact digits. Its main tool, rounding to a place value, is also the move that feeds base conversion in the next section: both split a number at a chosen place.`}</p>

          <h3>Rounding</h3>
          <p>
            {`To round a whole number $n$ to the nearest 10, replace it with the closest multiple of 10. If two multiples are tied, choose the larger one. To make this mechanical, write $n = N + \\bar{n}$ where $N$ is a multiple of 10 and $\\bar{n}$ is the ones digit. Round to $N$ if $\\bar{n} < 5$, and to $N + 10$ if $\\bar{n} \\geq 5$. The number 248 splits as $240 + 8$, and since $8 \\geq 5$, it rounds up to 250.`}
          </p>

          <VizFigure title="Rounding" size="body" aspect="620/192">
            <RoundingVisualization />
          </VizFigure>

          <p>{`The same idea scales to any rounding unit $10^k$. Write $n = N + \\bar{n}$ where $N$ is a multiple of $10^k$ and $\\bar{n}$ is the last $k$ digits. Then look at the leading digit of $\\bar{n}$: round down if it is less than 5, up if it is 5 or more. Rounding 12996 to the nearest thousand gives $12996 = 12000 + 996$, and the leading 9 of 996 is $\\geq 5$, so it rounds up to 13000. This split-at-a-place move is exactly what repeated division does in the next section, one place at a time.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Round 12,996 to the nearest thousand. Split: $12996 = 12000 + 996$. Leading digit of 996 is 9, which is $\\geq 5$, so round up: $12000 + 1000 = 13000$.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Round 45,297 to the nearest thousand.`}</p>
              <p>{`Write $45297 = 45000 + \\underline{\\phantom{00}}$.`}</p>
              <p>{`The leading digit of $\\underline{\\phantom{00}}$ is $\\underline{\\phantom{00}}$, which is $\\underline{\\phantom{00}}$ 5.`}</p>
              <p>{`So the rounded number is $\\underline{\\phantom{00}}$.`}</p>
            </div>
          </div>

          <p>{`Rounding always trades exactness for a smaller number. The gap between the rounded value and the true one is its error, and that gap is at most the rounding unit. The error in raw units is the absolute error; the same gap measured against the true value, as a percent, is the relative error. A small absolute error can still be a large relative one when the number itself is small, so a rounded estimate is only as trustworthy as that gap is small.`}</p>
        </>,

        /* SECTION 10: NUMBERS IN BASE b
         */
        <>
          <h2>{`Numbers in Base $b$`}</h2>

          <h3>Place Value and Base $b$</h3>
          <p>{`Our number system uses base 10, which means each digit's value depends on its position as a power of 10. The number 36402 stands for:`}</p>
          <div className="lrn-eq">{`$$3 \\times 10^4 + 6 \\times 10^3 + 4 \\times 10^2 + 0 \\times 10^1 + 2 \\times 10^0$$`}</div>
          <p>
            {`Each place value is a power of 10, and each digit is a `}
            <strong>coefficient</strong>
            {` between 0 and 9. Replace 10 with any whole number $b > 1$ and you have base $b$. The same expansion still works; only the base of the powers changes, and the digits now run from 0 to $b - 1$. Binary (base 2) keeps only 0 and 1, which is why computers use it: each digit is one bit, either on or off.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">{`Base $b$ Expansion`}</span>
            <div className="lrn-definition-desc">{`A whole number $n$ written as $a_k b^k + a_{k-1} b^{k-1} + \\cdots + a_1 b + a_0$ where each coefficient $a_i$ satisfies $0 \\leq a_i < b$. The string of coefficients $(a_k a_{k-1} \\cdots a_1 a_0)_b$ is the representation of $n$ in base $b$.`}</div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In base 5 the digits are 0, 1, 2, 3, 4. What happens if you try to use the digit 6?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Invalid. Each coefficient must satisfy $0 \\leq a_i < b$, so in base 5 only the digits 0 through 4 are allowed. Writing 6 in a base-5 number violates the definition.`}</p>
            </details>
          </div>

          <h3>Why Every Number Has Exactly One Base $b$ Form</h3>
          <p>
            {`When $b > 1$, every whole number has exactly one base $b$ representation. Here is why such a form always exists, and why no number has two of them.`}
          </p>
          <p>
            <strong>Why a form always exists.</strong>
            {` The algorithm that builds the representation also shows it exists. Divide $n$ by $b$; record the remainder; replace $n$ by the quotient; repeat until the quotient is 0. The remainders, read bottom to top, are the digits of $n$ in base $b$. Take $3644$ in base 7:`}
          </p>
          <div className="lrn-eq">
            <span>{`$$3644 = 520 \\times 7 + 4$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$520 = 74 \\times 7 + 2$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$74 = 10 \\times 7 + 4$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$10 = 1 \\times 7 + 3$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$1 = 0 \\times 7 + 1$$`}</span>
          </div>
          <p>{`Read the remainders bottom to top: $3644 = (13424)_7$. Each remainder is less than 7, so each is a valid base-7 digit. The process always stops. Each quotient is strictly smaller than the one before it, and a falling sequence of whole numbers must reach 0 in a finite number of steps.`}</p>

          <VizFigure title="Base Conversion" size="body" aspect="auto">
            <BaseConversionVis />
          </VizFigure>

          <p>
            <strong>Why no number has two forms.</strong>
            {` Suppose $3644$ had two base-7 representations. Both must end in the remainder of $3644 \\div 7$. Dividing by 7 gives exactly one quotient and one remainder, so the last digit is forced. Replace $3644$ with the quotient and repeat. Every digit is forced, so the two representations must be the same.`}
          </p>
          <p>
            <strong>Why $b &gt; 1$ is essential.</strong>
            {` Base 1 would have only the digit 0. Every coefficient would be 0, and the expansion $0 \\times 1^n + \\cdots + 0 \\times 1^0 = 0$ can name only the number 0. No positive number has a representation, so the theorem fails. This is the edge case the condition $b > 1$ rules out.`}
          </p>

          <h3>{`Arithmetic in Base $b$`}</h3>
          <p>{`The four standard algorithms work in every base: addition with carrying, subtraction with trading, multiplication with partial products, and long division. The shape of each algorithm is identical to base 10. The only thing that changes is the single-digit addition and multiplication tables that feed the columns.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The algorithms depend only on the associative, commutative, and distributive laws of arithmetic, plus the place-value structure $\\sum a_i b^i$. These hold for any base $b > 1$, so the same column-by-column procedure works no matter what base you write the numbers in.`}</p>
          </div>

          <p>
            <strong>Addition in base 7.</strong>
            {` Add $(103)_7 + (242)_7$ column by column. Ones: $3 + 2 = 5$. Sevens: $0 + 4 = 4$. Forty-nines: $1 + 2 = 3$. Result: $(345)_7$. No column produced a 7 or larger, so nothing carried.`}
          </p>
          <p>
            <strong>Addition with carrying.</strong>
            {` Add $(64)_7 + (25)_7$. Ones: $4 + 5 = 9$. Since $9 = 1 \\times 7 + 2$, write 2 and carry 1 to the sevens column. Sevens: $6 + 2 + 1 = 9 = 1 \\times 7 + 2$, write 2 and carry 1. Forty-nines: just the carried 1. Result: $(122)_7$. Carrying in base $b$ is the same idea as base 10. When a column reaches $b$, you trade $b$ ones at that place for 1 unit at the next place up.`}
          </p>
          <p>
            <strong>Subtraction with trading.</strong>
            {` Compute $(502)_7 - (213)_7$. Ones: $2 - 3$ is negative, so trade. You want to borrow from the sevens place, but it is 0. So trade across it. First take 1 from the forty-nines place to make the sevens place worth 7. Then take 1 from the sevens place to make the ones place worth $2 + 7 = 9$. Now $9 - 3 = 6$. Sevens: after the trade, the sevens place is 6, and $6 - 1 = 5$. Forty-nines: $4 - 2 = 2$. Result: $(256)_7$. Trading across a zero is the case to watch. When the next column has nothing to give, the trade chains one column further up.`}
          </p>
          <p>
            <strong>Multiplication with partial products.</strong>
            {` Compute $(265)_7 \\times (4)_7$, right to left. $5 \\times 4 = 20 = 2 \\times 7 + 6$, write 6 carry 2. $6 \\times 4 = 24$, add the carried 2 for 26; $26 = 3 \\times 7 + 5$, write 5 carry 3. $2 \\times 4 = 8$, add the carried 3 for 11; $11 = 1 \\times 7 + 4$, write 4 carry 1. Result: $(1456)_7$. Each step does base-10 arithmetic internally, then converts the result to a base-7 digit and carry by dividing by 7.`}
          </p>
          <p>
            <strong>Multiplication by a two-digit number.</strong>
            {` A two-digit multiplier works the same way as in base 10: one partial product per digit, each shifted left, then added. Compute $(265)_7 \\times (34)_7$. The ones digit gives $(265)_7 \\times (4)_7 = (1456)_7$. The sevens digit gives $(265)_7 \\times (3)_7 = (1161)_7$, shifted one place left to $(11610)_7$. Add the two: $(1456)_7 + (11610)_7 = (13366)_7$.`}
          </p>
          <p>
            <strong>Long division in base 7.</strong>
            {` Divide $(1456)_7$ by $(4)_7$, digit by digit from the left. The leading 1 is less than 4, so the first quotient digit is 0 and 1 carries over. Bring down the 4 to make $(14)_7$, which is 11 in base 10; $11 = 2 \\times 4 + 3$, so write 2 and carry remainder 3. Bring down the 5 to make $(35)_7$, which is 26; $26 = 6 \\times 4 + 2$, write 6 carry 2. Bring down the 6 to make $(26)_7$, which is 20; $20 = 5 \\times 4 + 0$, write 5 remainder 0. Quotient: $(265)_7$, which checks against the multiplication above.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the multiplication $(265)_7 \\times (4)_7$, the step "$6 \\times 4 = 24$" uses base-10 arithmetic. After you carry 2 to get 26, how do you turn 26 into a base-7 digit and carry?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Divide the base-10 total by 7. The remainder is the digit you write down; the quotient is what you carry into the next column. Here $26 = 3 \\times 7 + 5$, so write 5 and carry 3.`}</p>
            </details>
          </div>

          <h3>Binary Arithmetic</h3>
          <p>{`Binary is base 2, using only the digits 0 and 1. The single-digit tables shrink to almost nothing:`}</p>
          <p>{`Addition: $0 + 0 = 0$, $0 + 1 = 1$, $1 + 0 = 1$, $1 + 1 = 10$.`}</p>
          <p>{`Multiplication: $0 \\times 0 = 0$, $0 \\times 1 = 0$, $1 \\times 0 = 0$, $1 \\times 1 = 1$.`}</p>
          <p>{`Three facts make binary fast to think about:`}</p>
          <ul className="lrn-list">
            <li>{`$(1\\underbrace{00\\cdots0}_{m})_2 = 2^m$ (a 1 followed by $m$ zeros names the $m$-th power of 2).`}</li>
            <li>{`$2^m + 2^m = 2^{m+1}$ (doubling shifts every bit one place to the left).`}</li>
            <li>{`$(\\underbrace{11\\cdots1}_{m})_2 + (1)_2 = (1\\underbrace{00\\cdots0}_{m})_2$ (a string of $m$ ones plus one more equals $2^m$).`}</li>
          </ul>
          <p>{`Working in binary feels different from base 7 because every column is dominated by carries: $1 + 1$ already produces a carry, and any column that sums to 2 or 3 carries on. The procedure, though, is the same column-by-column algorithm as every other base.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Compute $(1111)_2 \\times (11)_2$. The two partial products are $(1111)_2 \\times 1 = (1111)_2$ and $(1111)_2 \\times 1$ shifted one place left $= (11110)_2$. Add them: ones 1; twos $1+1 = 10$ write 0 carry 1; fours $1+1+1 = 11$ write 1 carry 1; eights $1+1+1 = 11$ write 1 carry 1; sixteens $0+1+1 = 10$ write 0 carry 1; thirty-twos just the carried 1. Result: $(101101)_2$, which is $32 + 8 + 4 + 1 = 45$, matching $15 \\times 3 = 45$.`}</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Convert 67 to binary using repeated division.`}</p>
              <p>{`$67 = \\underline{\\phantom{00}} \\times 2 + \\underline{\\phantom{00}}$.`}</p>
              <p>{`$33 = \\underline{\\phantom{00}} \\times 2 + \\underline{\\phantom{00}}$.`}</p>
              <p>{`Continue until the quotient is 0.`}</p>
              <p>{`Read remainders bottom to top: $67 = (\\underline{\\phantom{0000}})_2$.`}</p>
            </div>
          </div>

          <h3>Conversion Between Bases</h3>
          <p>{`The two directions of base conversion use different mechanics, but both rely on the place-value expansion. From base 10 to base $b$, run repeated division by $b$ (the same algorithm that proves the Representation Theorem). From base $b$ to base 10, expand each digit times its power of $b$ and add.`}</p>
          <p>
            <strong>Base 10 to base 5: convert 247.</strong>
          </p>
          <div className="lrn-eq">
            <span>{`$$247 = 49 \\times 5 + 2$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$49 = 9 \\times 5 + 4$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$9 = 1 \\times 5 + 4$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$1 = 0 \\times 5 + 1$$`}</span>
          </div>
          <p>{`Read remainders bottom to top: $247 = (1442)_5$. Check by expanding: $1 \\times 125 + 4 \\times 25 + 4 \\times 5 + 2 = 125 + 100 + 20 + 2 = 247$.`}</p>
          <p>
            <strong>{`Base 7 to base 10: convert $(305)_7$.`}</strong>
            {` Expand each digit times its power of 7: $3 \\times 49 + 0 \\times 7 + 5 \\times 1 = 147 + 0 + 5 = 152$.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the repeated-division method give digits from right to left, not left to right?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each division by $b$ peels off the current ones digit as the remainder and pushes everything above it down by one place. So the first remainder is the ones digit, the second is the $b$'s digit, and so on. You always get the least significant digit first.`}</p>
            </details>
          </div>

          <h3>Why the Emphasis on Base 10?</h3>
          <p>{`Humans use base 10 because we have ten fingers. There is no mathematical preference: every algorithm in this lesson works in any base $b > 1$. Addition carries the same way, subtraction trades the same way, multiplication uses the same distributive law, and long division estimates the same way. The only thing the base controls is the size of the single-digit addition and multiplication tables: base 2 needs four entries in each table, base 7 needs $7 \\times 7$, base 10 needs $10 \\times 10$. That universality is the deep point. The algorithms ride on the laws of arithmetic and on place value, not on the digit 10.`}</p>

          <h3>Historical Context</h3>
          <p>{`Positional numeral systems were invented more than once, in different bases. The ancient Babylonians wrote numbers in base 60 and used a system of about 59 wedge-shaped symbols; we still inherit base 60 in our clocks (60 seconds per minute, 60 minutes per hour) and in angle measurement (60 minutes per degree).`}</p>
          <p>{`The Maya of Central America wrote numbers in base 20 using dots and bars, and they were among the first people anywhere to use a dedicated symbol for zero as a placeholder.`}</p>
          <p>{`The system we now use, Hindu-Arabic base 10, took shape in India around the sixth century and was carried to Europe by Arab scholars. Its ten symbols 0 through 9 and its explicit zero placeholder are what make the column-by-column algorithms possible. All three systems share the same governing idea: the value of a digit depends on its position. A 3 in the tens place names 30, a 3 in the hundreds place names 300, and this positional principle is what lets a finite set of symbols name numbers as large as you like.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Positional (Hindu-Arabic)</span>
              <p>{`Digit value depends on position. Enables column-by-column algorithms. Compact notation.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Non-Positional (Roman)</span>
              <p>{`I, V, X, L, C, D, M. Symbol value is fixed regardless of position. Column arithmetic is not possible, so multi-digit algorithms do not exist.`}</p>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      // Number Line: basic, transfer, elaborate, predict
      {
        q: 'Why can you never divide by 0?',
        a: 'Division by $d$ asks for the number you multiply $d$ by to get back to your starting number. Zero times anything is zero. So the question has no answer if you started somewhere nonzero, and infinitely many answers if you started at zero. Either way, there is no single number to call $a \\div 0$, which is what "undefined" means.'
      },
      {
        q: 'Explain why $3 + 4 = 7$ requires all three numbers to use the same unit.',
        a: 'Addition on the number line is segment-after-segment, so both segments must be measured against the same unit. "3 apples + 4 oranges" places two segments from different number lines side by side. The total length has no meaning because the two lines have different scales.'
      },
      {
        q: 'Use the rectangle model to explain why $15 \\div 5 = 3$.',
        a: 'Picture a rectangle with area 15 and one side of length 5. Division asks for the other side. The only length that makes the area come out to 15 is 3, since $5 \\times 3 = 15$. Division is finding the missing side when the area and one side are known.'
      },
      {
        q: 'On the number line, show that subtraction undoes addition using $8 + 5 - 5$.',
        a: 'Start at 0, go right 8 units (land on 8). Go right 5 more units (land on 13). Now subtract: the segment from 5 to 13 has length 8. So $8 + 5 - 5 = 8$. Adding then subtracting the same amount returns you to where you started.'
      },
      {
        q: 'Predict: can multiplication on the number line be shown as a single segment?',
        a: 'Yes. $3 \\times 4 = 12$. You can show it as three segments of length 4 joined end-to-end, landing on 12. Or as a single segment from 0 to 12. The area model (a rectangle of sides 3 and 4) also gives 12.'
      },
      // What Is a Number?: basic, transfer, elaborate, predict
      {
        q: 'What is the difference between a counting number and a whole number?',
        a: 'Counting numbers are 1, 2, 3, ... They do not include zero. Whole numbers are 0, 1, 2, 3, ... They include zero. Zero is the starting point on the number line.'
      },
      {
        q: 'Why is the number line definition of "number" better than "a quantity"?',
        a: '"A quantity" is vague and does not tell you where a number sits relative to others. The number line gives every number a precise location. You can compare, add, and measure directly on it. It works for whole numbers, fractions, and irrationals alike.'
      },
      {
        q: 'Explain how each decimal digit narrows a number to a smaller interval.',
        a: 'The first digit after the decimal point pins the number to a segment of length $\\frac{1}{10}$. The second digit narrows it to $\\frac{1}{100}$. Each new digit shrinks the segment by a factor of 10, closing in on a single point.'
      },
      {
        q: 'Predict: does $\\sqrt{2}$ have a location on the number line?',
        a: 'Yes. Every real number is a point on the number line. $\\sqrt{2} \\approx 1.414$ sits between 1 and 2, slightly closer to 1. It is irrational, so its decimal expansion never ends or repeats, but it still names a single point.'
      },
      // Estimation: rounding to a unit
      {
        q: 'Round 20,245,386 to the nearest ten-thousand.',
        a: '$20,245,386 = 20,240,000 + 5,386$. The thousands digit of 5,386 is 5, which is $\\geq 5$. So round up: $20,240,000 + 10,000 = 20,250,000$.'
      },
      {
        q: 'The population of a city is reported as 102,743. Why is "about 100,000" reasonable?',
        a: 'Rounding to the nearest $10^4$ gives 100,000. The last digits may be unreliable, and "about 100,000" still gives the right size at a glance. For everyday use, this level of accuracy is enough.'
      },
      // Base b: basic, transfer, elaborate, predict
      {
        q: 'What is $36402$ in base 7?',
        a: 'Repeated division: $36402 = 5200 \\times 7 + 2$. $5200 = 742 \\times 7 + 6$. $742 = 106 \\times 7 + 0$. $106 = 15 \\times 7 + 1$. $15 = 2 \\times 7 + 1$. $2 = 0 \\times 7 + 2$. Remainders bottom to top: $(211062)_7$.'
      },
      {
        q: 'Add $(64)_7 + (25)_7$ in base 7 without converting to base 10.',
        a: 'Ones: $4 + 5 = 9 = 1 \\times 7 + 2$. Write 2, carry 1. Sevens: $6 + 2 + 1 = 9 = 1 \\times 7 + 2$. Write 2, carry 1. Answer: $(122)_7$.'
      },
      {
        q: 'Convert 45 to binary.',
        a: '$45 = 22 \\times 2 + 1$. $22 = 11 \\times 2 + 0$. $11 = 5 \\times 2 + 1$. $5 = 2 \\times 2 + 1$. $2 = 1 \\times 2 + 0$. $1 = 0 \\times 2 + 1$. Remainders bottom to top: $(101101)_2$. Check: $32 + 8 + 4 + 1 = 45$.'
      },
      {
        q: 'In binary, what is $(1111)_2 + (1)_2$?',
        a: '$(1111)_2 = 2^3 + 2^2 + 2^1 + 2^0 = 15$. Add 1: $16 = 2^4 = (10000)_2$. Pattern: a string of $m$ ones plus 1 equals $1$ followed by $m$ zeros.'
      },
      {
        q: 'Why do the standard algorithms work the same way in every base?',
        a: 'The column-by-column procedures are built out of three things: the laws of arithmetic (associative, commutative, distributive), the structure of place-value expansion $\\sum a_i b^i$, and division-with-remainder. None of those depend on the digit 10. Change the base and only the single-digit tables change; the shape of carrying, trading, partial products, and long division stays identical.'
      },
      {
        q: 'Why does trading in base 7 subtraction give you 7 ones (not 10 ones)?',
        a: 'In base 7, each "sevens place" unit equals 7 ones. Trading converts 1 seven into 7 ones, preserving value. In base 10, trading gives 10 ones. The number of ones always equals the base.'
      },
      {
        q: 'Predict: will the Representation Theorem fail if $b = 1$?',
        a: 'Yes. The condition on digits is $0 \\leq a_i < b$, so base 1 allows only the digit 0. Every expansion $0 \\times 1^k + \\cdots + 0 \\times 1^0$ evaluates to 0, meaning no positive number has any representation. That is why the theorem states $b > 1$ explicitly: base 1 is the edge case it rules out.'
      },
      {
        q: 'Compute $(265)_7 \\times (34)_7$ in base 7 without converting to base 10.',
        a: 'First partial product: $(265)_7 \\times (4)_7 = (1456)_7$. Second partial product: $(265)_7 \\times (3)_7$. Ones: $5 \\times 3 = 15 = 2 \\times 7 + 1$, write 1 carry 2. Sevens: $6 \\times 3 + 2 = 20 = 2 \\times 7 + 6$, write 6 carry 2. Forty-nines: $2 \\times 3 + 2 = 8 = 1 \\times 7 + 1$, write 1 carry 1. So $(265)_7 \\times (3)_7 = (1161)_7$, which shifts one place left to $(11610)_7$. Now add $(1456)_7 + (11610)_7$. Ones: $6 + 0 = 6$. Sevens: $5 + 1 = 6$. Forty-nines: $4 + 6 = 10 = 1 \\times 7 + 3$, write 3 carry 1. Three-forty-threes: $1 + 1 + 1 = 3$. Twenty-four-oh-ones: $0 + 1 = 1$. Result: $(13366)_7$.'
      },
      {
        q: 'Every whole number has exactly one base $b$ representation. Which earlier fact about division does the repeated-division proof use at each step?',
        a: 'The fact that dividing by $b$ gives exactly one quotient and one remainder. Each step peels off one remainder, and because that remainder is forced, the digit it produces is forced too. So every digit is pinned down and no other representation is possible.'
      },
      {
        q: 'Compute $(1111)_2 \\times (11)_2$ in binary.',
        a: 'Row 1: $(1111)_2 \\times 1 = (1111)_2$. Row 2: $(1111)_2 \\times 1 = (1111)_2$, shifted one left = $(11110)_2$. Add: $(1111)_2 + (11110)_2$. Ones: 1. Twos: $1 + 1 = 10$, write 0 carry 1. Fours: $1 + 1 + 1 = 11$, write 1 carry 1. Eights: $1 + 1 + 1 = 11$, write 1 carry 1. Sixteens: $0 + 1 + 1 = 10$, write 0 carry 1. Answer: $(101101)_2$. Check: $15 \\times 3 = 45$.'
      },
      {
        q: 'Compute $(502)_7 - (213)_7$ in base 7.',
        a: 'Ones: $2 - 3$: trade 1 seven. $2 + 7 = 9$. $9 - 3 = 6$. Sevens: $0 - 1$ (after giving 1 to ones): trade from forty-nines. $5 \\to 4$, sevens becomes $0 - 1 + 7 = 6$. $6 - 1 = 5$. Forty-nines: $4 - 2 = 2$. Answer: $(256)_7$.'
      },
      {
        q: 'When rounding the decimal 59.99725 to the nearest hundredth, a student gets 59.99. What went wrong?',
        a: 'The student looked at the wrong digit. Rounding to the nearest hundredth: look at the third decimal digit, which is 7. Since $7 \\geq 5$, round up: $59.99 + 0.01 = 60.00$.'
      },
      // Interleaved across sections
      {
        q: 'You have $742 in hundred-dollar, ten-dollar, and one-dollar bills. Explain how splitting it into 4 equal stacks models long division.',
        a: '7 hundreds split 4 ways: 1 each, 3 left. Convert 3 hundreds to 30 tens, plus 4 = 34 tens. Split 4 ways: 8 each, 2 left. Convert to 20 ones, plus 2 = 22 ones. Split 4 ways: 5 each, 2 left. Each stack: $185. Remainder: $2. This matches $742 = 185 \\times 4 + 2$.'
      },
      {
        q: 'A rectangle has area 56 and one side of length 8. Find the other side, and explain why this is a division.',
        a: 'The other side is $56 \\div 8 = 7$, because $8 \\times 7 = 56$. Division undoes multiplication: when you know the area and one side, you are looking for the missing side. So $56 \\div 8 = 7$ asks "8 times what gives 56?" and the answer is 7.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Number Line and Number Systems',
      sections: [
        <>
          <h2>Definitions</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Number Line</span>
            <div className="lrn-definition-desc">{`A horizontal line with equally spaced points identified with whole numbers. The segment $[0,1]$ is the unit. Addition = placing one segment right after another.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Whole Number</span>
            <div className="lrn-definition-desc">
              One of the marked points to the right of 0 on the number line (including 0 itself).
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Real Number</span>
            <div className="lrn-definition-desc">
              Any point on the number line. Includes whole numbers, fractions, and irrational
              numbers.
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Decimal Fraction</span>
            <div className="lrn-definition-desc">{`A fraction whose denominator is a power of 10. Example: $\\frac{47}{100} = 0.47$.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Infinite Decimal</span>
            <div className="lrn-definition-desc">{`A decimal that never ends. Each digit narrows the location on the number line by a factor of 10, closing in on a single point.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Rounding</span>
            <div className="lrn-definition-desc">{`Replace $n$ by the closest multiple of the target unit. If tied, choose the bigger number. Use for simplifying numbers, checking answers, communicating approximate values.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute Error</span>
            <div className="lrn-definition-desc">{`$|\\text{correct value} - \\text{estimate}|$. Measures how far off an estimate is in absolute terms.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Relative Error</span>
            <div className="lrn-definition-desc">{`$\\frac{\\text{absolute error}}{\\text{correct value}} \\times 100\\%$. Compares errors across different scales. \\$100 error on \\$2000 (5%) vs \\$100 on \\$200 (50%).`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`Base $b$ Representation`}</span>
            <div className="lrn-definition-desc">{`$n = a_k b^k + a_{k-1} b^{k-1} + \\cdots + a_1 b + a_0$ where $0 \\leq a_i < b$. Use when writing numbers in non-decimal systems (binary base 2, octal base 8, hex base 16).`}</div>
          </div>
        </>,

        <>
          <h2>Formulas</h2>

          <div className="lrn-eq">
            <span>{`$$\\text{Absolute error} = |x - \\tilde{x}|$$`}</span>
          </div>
          <p>Measuring estimation accuracy.</p>

          <div className="lrn-eq">
            <span>{`$$\\text{Relative error} = \\frac{|x - \\tilde{x}|}{x} \\times 100\\%$$`}</span>
          </div>
          <p>Comparing estimation accuracy across scales.</p>

          <div className="lrn-eq">
            <span>{`$$n = a_k b^k + \\cdots + a_0 b^0, \\quad 0 \\leq a_i < b$$`}</span>
          </div>
          <p>{`Base $b$ expansion (Representation Theorem).`}</p>

          <div className="lrn-eq">
            <span>{`$$b^m \\times b^n = b^{m+n}$$`}</span>
          </div>
          <p>Law of exponents.</p>

          <div className="lrn-eq">
            <span>{`$$2^m + 2^m = 2^{m+1}$$`}</span>
          </div>
          <p>Binary doubling.</p>
        </>,

        <>
          <h2>Theorems</h2>

          <h3>Representation Theorem</h3>
          <p>{`If $b > 1$, every whole number has exactly one base $b$ representation. Base conversion always gives a unique result. Supports all positional numeral systems.`}</p>
        </>,

        <>
          <h2>Algorithms</h2>

          <h3>{`Rounding Algorithm (to nearest $10^k$)`}</h3>
          <ol className="lrn-list">
            <li>{`Write $n = N + \\bar{n}$ where $\\bar{n}$ is the last $k$ digits.`}</li>
            <li>{`Look at the leading digit of $\\bar{n}$.`}</li>
            <li>{`If $< 5$: round to $N$.`}</li>
            <li>{`If $\\geq 5$: round to $N + 10^k$.`}</li>
          </ol>

          <h3>Base Conversion (Repeated Division)</h3>
          <ol className="lrn-list">
            <li>{`Divide $n$ by $b$. Record remainder.`}</li>
            <li>{`Replace $n$ with the quotient.`}</li>
            <li>Repeat until quotient is 0.</li>
            <li>Read remainders from bottom to top.</li>
          </ol>
        </>,

        <>
          <h2>Key Contrasts</h2>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Absolute Error</span>
              <p>Raw difference in units. Context-free.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Relative Error</span>
              <p>Difference as fraction of true value. Context-aware.</p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Base 10</span>
              <p>{`Historical accident (ten fingers). $9 \\times 9$ multiplication table.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Base $b$`}</span>
              <p>{`Same algorithms, different single-digit tables. Mathematics identical in any base $b > 1$.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Common Errors</h2>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Rounding 12996 to nearest 10 incorrectly</span>
              <p className="lrn-step-content">
                The closest multiple of 10 is 13000, not 12900. Use the definition: find the nearest
                multiple.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Checking numbers in the hundreds by rounding to nearest 100
              </span>
              <p className="lrn-step-content">
                Unreliable. Relative error can reach 50%. Use nearest 10 instead.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Claiming the rounded answer is the exact answer
              </span>
              <p className="lrn-step-content">
                If your write-up has no error figure, the estimate is incomplete. Quote both the
                rounded value and its worst-case distance from the truth.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Using digit 6 in a base 5 number</span>
              <p className="lrn-step-content">{`Base 5 digits are 0, 1, 2, 3, 4 only. Each coefficient must satisfy $0 \\leq a_i < b$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Using base-10 addition facts in base 7</span>
              <p className="lrn-step-content">{`In base 7, $4 + 5 = 12$ (not 9). You must use base-$b$ arithmetic tables when computing in base $b$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Trying to represent a positive number in base 1`}</span>
              <p className="lrn-step-content">{`Base 1 has only the digit 0, so every expansion equals 0. The Representation Theorem requires $b > 1$ for this reason; base 1 is the edge case it rules out.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Trading subtraction when the next column is 0`}</span>
              <p className="lrn-step-content">{`If the column you need to borrow from is 0, the trade chains: borrow one step further up first, then bring the value back down. In $(502)_7 - (213)_7$, the ones column needs to borrow from the sevens, but the sevens column is 0, so the borrow comes from the forty-nines column first.`}</p>
            </div>
          </div>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
