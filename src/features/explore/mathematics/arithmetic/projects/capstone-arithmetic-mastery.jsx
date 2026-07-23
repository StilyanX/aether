import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  FONT_CONTROL,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX
} from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A13: nested number systems N ⊂ Z ⊂ Q ⊂ R with one example in each region.
function NumberSystemsFig() {
  const C = useVizColors()
  const rings = [
    ['R', '√2', 188, 96],
    ['Q', '½', 150, 76],
    ['Z', '−3', 108, 56],
    ['N', '7', 62, 34]
  ]
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 210"
        role="img"
        aria-label="Naturals inside integers inside rationals inside reals"
        style={{ display: 'block', width: '100%', maxWidth: 360, height: 'auto', margin: '0 auto' }}
      >
        {rings.map(([label, ex, rx, ry], i) => (
          <g key={label}>
            <ellipse
              cx={200}
              cy={100}
              rx={rx}
              ry={ry}
              fill={i === 0 ? C.faint : 'none'}
              stroke={C.fg}
              strokeWidth={1.5}
            />
            <text
              x={200}
              y={100 - ry + 16}
              textAnchor="middle"
              fill={C.fg}
              fontSize={FONT_TEX}
              fontFamily={FONT}
            >
              {label}
            </text>
            <text
              x={200 - rx + (i === 3 ? 18 : 22)}
              y={104}
              textAnchor="middle"
              fill={C.dim}
              fontSize={FONT_LABEL}
              fontFamily={FONT}
            >
              {ex}
            </text>
          </g>
        ))}
        <text
          x={200}
          y={202}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          N ⊂ Z ⊂ Q ⊂ R
        </text>
      </svg>
    </div>
  )
}

// A5: factor tree for 2520 = 2³ × 3² × 5 × 7 (primes branch left, spine descends).
function FactorTreeFig() {
  const C = useVizColors()
  const nodes = [
    [205, 28, '2520', false],
    [120, 72, '2', true],
    [205, 72, '1260', false],
    [120, 116, '2', true],
    [205, 116, '630', false],
    [120, 160, '2', true],
    [205, 160, '315', false],
    [120, 204, '5', true],
    [205, 204, '63', false],
    [120, 248, '7', true],
    [205, 248, '9', false],
    [120, 292, '3', true],
    [205, 292, '3', true]
  ]
  const edges = [
    [0, 1, 2],
    [2, 3, 4],
    [4, 5, 6],
    [6, 7, 8],
    [8, 9, 10],
    [10, 11, 12]
  ]
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 300 330"
        role="img"
        aria-label="Factor tree for 2520 ending in primes two, two, two, three, three, five and seven"
        style={{ display: 'block', width: '100%', maxWidth: 250, height: 'auto', margin: '0 auto' }}
      >
        {edges.map(([p, l, r], i) => (
          <g key={i}>
            <line
              x1={nodes[p][0]}
              y1={nodes[p][1]}
              x2={nodes[l][0]}
              y2={nodes[l][1]}
              stroke={C.dim}
              strokeWidth={1}
            />
            <line
              x1={nodes[p][0]}
              y1={nodes[p][1]}
              x2={nodes[r][0]}
              y2={nodes[r][1]}
              stroke={C.dim}
              strokeWidth={1}
            />
          </g>
        ))}
        {nodes.map(([x, y, v, prime], i) =>
          prime ? (
            <g key={i}>
              <circle cx={x} cy={y} r={13} fill={C.faint} stroke={C.fg} strokeWidth={1.5} />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill={C.fg}
                fontSize={FONT_TEX}
                fontFamily={FONT}
              >
                {v}
              </text>
            </g>
          ) : (
            <text
              key={i}
              x={x}
              y={y + 4}
              textAnchor="middle"
              fill={C.fg}
              fontSize={FONT_CONTROL}
              fontFamily={FONT}
            >
              {v}
            </text>
          )
        )}
        <text
          x={150}
          y={322}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          2520 = 2³ × 3² × 5 × 7
        </text>
      </svg>
    </div>
  )
}

// B8: simple (linear) vs compound (curving) growth of €1000 over years.
function SimpleVsCompoundFig() {
  const C = useVizColors()
  const ox = 50
  const oy = 150
  const w = 300
  const h = 120
  const years = 10
  const base = 1000
  const top = base * Math.pow(1.06, years)
  const px = t => ox + (t / years) * w
  const py = v => oy - ((v - base) / (top - base)) * h
  const simple = []
  const compound = []
  for (let t = 0; t <= years; t++) {
    simple.push(`${px(t).toFixed(1)},${py(base + base * 0.06 * t).toFixed(1)}`)
    compound.push(`${px(t).toFixed(1)},${py(base * Math.pow(1.06, t)).toFixed(1)}`)
  }
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 380 184"
        role="img"
        aria-label="Linear simple-interest line versus a curving compound-interest line over ten years"
        style={{ display: 'block', width: '100%', maxWidth: 360, height: 'auto', margin: '0 auto' }}
      >
        <line x1={ox} y1={oy} x2={ox + w} y2={oy} stroke={C.dim} strokeWidth={1} />
        <line x1={ox} y1={oy} x2={ox} y2={oy - h - 6} stroke={C.dim} strokeWidth={1} />
        <polyline points={simple.join(' ')} fill="none" stroke={C.fg} strokeWidth={1.5} />
        <polyline
          points={compound.join(' ')}
          fill="none"
          stroke={C.fg}
          strokeWidth={1.5}
          strokeDasharray="4 3"
        />
        <text
          x={px(years)}
          y={py(base + base * 0.06 * years) - 6}
          textAnchor="end"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          6% simple
        </text>
        <text
          x={px(years)}
          y={py(base * Math.pow(1.06, years)) + 14}
          textAnchor="end"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          6% compound
        </text>
        <text
          x={ox + w}
          y={oy + 16}
          textAnchor="end"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          years
        </text>
      </svg>
    </div>
  )
}

// B11: unit square on [0,1], its diagonal √2, swung by compass onto the line.
function SqrtConstructionFig() {
  const C = useVizColors()
  const u = 70
  const x0 = 34
  const yLine = 140
  const vx = v => x0 + v * u
  const yTop = yLine - u
  const r = Math.SQRT2 * u
  const land = vx(Math.SQRT2)
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 240 170"
        role="img"
        aria-label="Unit square with its diagonal swung by compass down to root two on the number line"
        style={{ display: 'block', width: '100%', maxWidth: 280, height: 'auto', margin: '0 auto' }}
      >
        <line x1={10} y1={yLine} x2={232} y2={yLine} stroke={C.dim} strokeWidth={1.5} />
        {[0, 1, 2].map(v => (
          <g key={v}>
            <line
              x1={vx(v)}
              y1={yLine - 5}
              x2={vx(v)}
              y2={yLine + 5}
              stroke={C.dim}
              strokeWidth={1}
            />
            <text
              x={vx(v)}
              y={yLine + 18}
              textAnchor="middle"
              fill={C.dim}
              fontSize={FONT_LABEL}
              fontFamily={FONT}
            >
              {v}
            </text>
          </g>
        ))}
        <rect
          x={vx(0)}
          y={yTop}
          width={u}
          height={u}
          fill={C.faint}
          stroke={C.fg}
          strokeWidth={1.5}
        />
        <line x1={vx(0)} y1={yLine} x2={vx(1)} y2={yTop} stroke={C.fg} strokeWidth={1.5} />
        <path
          d={`M ${vx(1)} ${yTop} A ${r} ${r} 0 0 1 ${land} ${yLine}`}
          fill="none"
          stroke={C.fg}
          strokeWidth={1}
          strokeDasharray="3 3"
        />
        <circle cx={land} cy={yLine} r={3.5} fill={C.fg} />
        <text
          x={land}
          y={yLine - 10}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          √2
        </text>
        <text
          x={vx(0.5)}
          y={yTop - 4}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_SMALL}
          fontFamily={FONT}
        >
          diagonal = √2
        </text>
      </svg>
    </div>
  )
}

const exam = {
  sections: [
    {
      id: 'A',
      title: 'Theory',
      meta: '194 marks · no calculator',
      questions: [
        {
          id: 'A1',
          marks: 8,
          prompt: (
            <>
              (a) Write 40 723 in expanded form using powers of 10. (b) Compute{' '}
              {`$6.38 \\times 10^3$`} and {`$4500 \\div 10^2$`}. (c) Classify 0, −7, 144 as odd or
              even, justifying 0. (d) How many even integers are there from 1 to 200 inclusive?
            </>
          ),
          answer: (
            <>
              <p>
                (a){' '}
                {`$4 \\times 10^4 + 0 \\times 10^3 + 7 \\times 10^2 + 2 \\times 10^1 + 3 \\times 10^0$`}
                .
              </p>
              <p>(b) 6380 and 45.</p>
              <p>(c) 144 even, −7 odd, and 0 even since {`$0 = 2 \\times 0$`}.</p>
              <p>(d) {`$200 \\div 2 = 100$`}.</p>
            </>
          )
        },
        {
          id: 'A2',
          marks: 10,
          prompt: (
            <>
              (a) {`$80\\,004 - 27\\,659$`} by column method. (b) {`$638 \\times 27$`} by formal
              written multiplication. (c) {`$4571 \\div 8$`}, giving quotient and remainder. (d)
              Find {`$\\square$`} so that {`$7 \\times \\square + 12 = 54$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) 52 345.</p>
              <p>
                (b) {`$638 \\times 7 = 4466$`}, {`$638 \\times 20 = 12760$`}, total 17 226.
              </p>
              <p>(c) 571 remainder 3.</p>
              <p>
                (d) {`$7\\square = 42$`}, so {`$\\square = 6$`}.
              </p>
            </>
          )
        },
        {
          id: 'A3',
          marks: 9,
          prompt: (
            <>
              (a) Solve {`$-3x + 5 > 20$`}; state the effect on the inequality sign. (b) Order
              smallest to largest: {`$2^3$`}, {`$3^2$`}, {`$(\\tfrac{1}{2})^2$`}, {`$5^1$`}. (c) A
              rod length L must be within 2 mm of 50 mm. Write as an absolute-value inequality and
              give the interval.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$-3x > 15$`}, so {`$x < -5$`}. The sign flips when dividing by a negative.
              </p>
              <p>(b) {`$(\\tfrac{1}{2})^2 = \\tfrac{1}{4} < 5 < 8 < 9$`}.</p>
              <p>
                (c) {`$|L - 50| \\le 2$`}, giving {`$48 \\le L \\le 52$`} mm.
              </p>
            </>
          )
        },
        {
          id: 'A4',
          marks: 8,
          prompt: (
            <>
              (a) Which is larger, {`$-\\tfrac{3}{4}$`} or {`$-\\tfrac{5}{7}$`}? Show
              cross-multiplication and the sign pitfall. (b) Mean of 12, 19, 7, 22, 15. (c) A train
              covers 210 km in 2 h 30 min. Find the average speed in km/h, then the arrival time if
              it departs 13:48.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Compare {`$-3 \\times 7 = -21$`} with {`$-4 \\times 5 = -20$`}. Since{' '}
                {`$-21 < -20$`}, {`$-\\tfrac{5}{7}$`} is larger. With negatives the larger
                cross-product belongs to the smaller fraction.
              </p>
              <p>(b) {`$\\tfrac{75}{5} = 15$`}.</p>
              <p>
                (c) {`$210 \\div 2.5 = 84$`} km/h. Arrival {`$13{:}48 + 2{:}30 = 16{:}18$`}.
              </p>
            </>
          )
        },
        {
          id: 'A5',
          marks: 12,
          prompt: (
            <>
              (a) Write 2520 in prime-factor index form. (b) Define "factor" and "multiple". (c)
              Explain why testing factors up to {`$\\sqrt{n}$`} suffices for primality. (d) Prove a
              perfect square has an odd number of factors. (e) Verify{' '}
              {`$\\text{HCF}(a,b) \\cdot \\text{LCM}(a,b) = ab$`} for {`$a = 24$`}, {`$b = 36$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$2520 = 2^3 \\times 3^2 \\times 5 \\times 7$`}.</p>
              <p>
                (b) A factor divides a number exactly; a multiple is that number times a whole
                number.
              </p>
              <p>
                (c) Factors pair as {`$a \\times b = n$`}; if {`$a > \\sqrt{n}$`} its partner is
                below, so all are found by {`$\\sqrt{n}$`}.
              </p>
              <p>
                (d) Factor count is {`$(e_1 + 1)(e_2 + 1)\\cdots$`}. A perfect square has every
                exponent even, so every {`$(e_i + 1)$`} is odd, giving an odd product.
              </p>
              <p>(e) HCF 12, LCM 72; {`$12 \\times 72 = 864 = 24 \\times 36$`}.</p>
              <FactorTreeFig />
            </>
          )
        },
        {
          id: 'A6',
          marks: 14,
          prompt: (
            <>
              (a) Prove there is no largest prime. (b) State the Fundamental Theorem of Arithmetic
              (existence and uniqueness); explain why 1 is neither prime nor composite. (c) Prove
              the divisibility rule for 9 using {`$10 \\equiv 1 \\pmod 9$`}. (d) Prove: if{' '}
              {`$d \\mid a$`} and {`$d \\mid b$`} then {`$d \\mid (a \\pm b)$`}; hence state
              transitivity of divisibility.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Suppose finitely many primes {`$p_1, \\ldots, p_k$`}. Then{' '}
                {`$N = p_1 \\cdots p_k + 1$`} leaves remainder 1 on each, so a new prime exists.
                Contradiction.
              </p>
              <p>
                (b) Every integer above 1 is a product of primes (existence), unique up to order
                (uniqueness). 1 is a unit with one factor, so neither prime nor composite; allowing
                it would break uniqueness.
              </p>
              <p>
                (c) Since {`$10^k \\equiv 1 \\pmod 9$`}, each digit contributes itself, so a number
                is divisible by 9 exactly when its digit sum is.
              </p>
              <p>
                (d) {`$a = dm$`}, {`$b = dn$`}, so {`$a \\pm b = d(m \\pm n)$`}. Divisibility is
                transitive: if {`$d \\mid e$`} and {`$e \\mid f$`} then {`$d \\mid f$`}.
              </p>
            </>
          )
        },
        {
          id: 'A7',
          marks: 10,
          prompt: (
            <>
              (a) Prove {`$\\sqrt{2}$`} is irrational; state how it generalises to {`$\\sqrt{n}$`}{' '}
              for non-square n. (b) Without dividing, state whether {`$\\tfrac{7}{40}$`},{' '}
              {`$\\tfrac{5}{12}$`},{`$\\tfrac{3}{25}$`} terminate or recur, justifying via
              denominator prime factors. (c) Explain why {`$n! + 2, \\ldots, n! + n$`} give{' '}
              {`$n - 1$`} consecutive composites.
            </>
          ),
          answer: (
            <>
              <p>
                (a) If {`$\\sqrt{2} = \\tfrac{a}{b}$`} in lowest terms, {`$2b^2 = a^2$`} makes a
                even, then b even, contradicting lowest terms. For non-square n some prime has an
                odd exponent, so {`$\\sqrt{n}$`} is irrational.
              </p>
              <p>
                (b) {`$40 = 2^3 \\times 5$`} terminates; {`$12 = 2^2 \\times 3$`} recurs;{' '}
                {`$25 = 5^2$`} terminates.
              </p>
              <p>
                (c) Each {`$n! + k$`} (for {`$2 \\le k \\le n$`}) is divisible by k, so all are
                composite.
              </p>
            </>
          )
        },
        {
          id: 'A8',
          marks: 8,
          prompt: (
            <>
              (a) Use the Euclidean Algorithm for {`$\\text{HCF}(1071, 462)$`}. (b) State the
              division algorithm {`$a = qd + r$`} and the range of r. (c) Convert{' '}
              {`$0.\\overline{45}$`} to a fraction algebraically.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$1071 = 2 \\times 462 + 147$`}; {`$462 = 3 \\times 147 + 21$`};{' '}
                {`$147 = 7 \\times 21$`}. HCF = 21.
              </p>
              <p>
                (b) {`$a = qd + r$`} with {`$0 \\le r < d$`}.
              </p>
              <p>
                (c) {`$100x - x = 45$`}, so {`$x = \\tfrac{45}{99} = \\tfrac{5}{11}$`}.
              </p>
            </>
          )
        },
        {
          id: 'A9',
          marks: 10,
          prompt: (
            <>
              (a) Convert {`$\\tfrac{17}{5}$`} to a mixed number and {`$4\\tfrac{3}{5}$`} to
              improper. (b) Reduce {`$\\tfrac{84}{126}$`} using the GCF. (c) Prove{' '}
              {`$\\tfrac{k}{\\ell} = \\tfrac{nk}{n\\ell}$`} for integer {`$n \\ne 0$`}. (d) Compute{' '}
              {`$\\tfrac{3}{4} \\div \\tfrac{2}{9}$`}; explain why "repeated subtraction" is a poor
              model for dividing fractions.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$\\tfrac{17}{5} = 3\\tfrac{2}{5}$`}; {`$4\\tfrac{3}{5} = \\tfrac{23}{5}$`}.
              </p>
              <p>(b) GCF 42, so {`$\\tfrac{84}{126} = \\tfrac{2}{3}$`}.</p>
              <p>
                (c) Splitting each of {`$\\ell$`} parts into n gives {`$n\\ell$`} parts, and the k
                parts become {`$nk$`}, the same point.
              </p>
              <p>
                (d) {`$\\tfrac{3}{4} \\times \\tfrac{9}{2} = \\tfrac{27}{8}$`}. Division must give
                one number, not a count-with-remainder, so repeated subtraction does not define it.
              </p>
            </>
          )
        },
        {
          id: 'A10',
          marks: 8,
          prompt: (
            <>
              (a) {`$\\tfrac{5}{6} - \\tfrac{7}{8} + \\tfrac{1}{4}$`} via common denominator. (b){' '}
              {`$5\\tfrac{1}{3} - 2\\tfrac{3}{4}$`}. (c) Simplify {`$\\dfrac{2/3}{4/9}$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) Over 24: {`$\\tfrac{20 - 21 + 6}{24} = \\tfrac{5}{24}$`}.</p>
              <p>
                (b){' '}
                {`$\\tfrac{16}{3} - \\tfrac{11}{4} = \\tfrac{64 - 33}{12} = \\tfrac{31}{12} = 2\\tfrac{7}{12}$`}
                .
              </p>
              <p>(c) {`$\\tfrac{2}{3} \\times \\tfrac{9}{4} = \\tfrac{3}{2}$`}.</p>
            </>
          )
        },
        {
          id: 'A11',
          marks: 12,
          prompt: (
            <>
              (a) Place value of the 7 in 3.0274, as a power of 10. (b) Explain why {`$0.4 > 0.39$`}
              , addressing the misconception. (c) State and justify the theorem that every fraction
              terminates or recurs; give the exact criterion on the denominator. (d) Prove{' '}
              {`$0.\\overline{9} = 1$`} by multiply-and-subtract.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$7 \\times 10^{-3}$`} (thousandths).</p>
              <p>
                (b) Over 100, {`$0.4 = \\tfrac{40}{100} > \\tfrac{39}{100} = 0.39$`}. Compare place
                value, not the length of the digit string.
              </p>
              <p>
                (c) Long division leaves finitely many remainders, so it stops or a remainder
                repeats. It terminates exactly when the lowest-terms denominator is {`$2^a 5^b$`}.
              </p>
              <p>
                (d) {`$x = 0.\\overline{9}$`}, {`$10x = 9.\\overline{9}$`}, {`$9x = 9$`}, so{' '}
                {`$x = 1$`}.
              </p>
            </>
          )
        },
        {
          id: 'A12',
          marks: 10,
          prompt: (
            <>
              (a) A price rises 20% then falls 10%. Find the single percentage change; explain why
              it is not 0%. (b) After a 15% discount an item costs €68. Find the original price. (c)
              Explain the difference between 25% markup on cost and 25% margin on selling price. (d)
              Explain why 3% inflation over 4 years does not erode real value by 12%.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$1.20 \\times 0.90 = 1.08$`}, a net +8%. The fall acts on the larger raised
                price.
              </p>
              <p>(b) {`$68 \\div 0.85 = €80$`}.</p>
              <p>
                (c) Markup divides the profit by the cost; margin divides it by the selling price, a
                larger base.
              </p>
              <p>
                (d) {`$1.03^4 = 1.1255$`}, about 12.55%, because each year compounds on the last.
              </p>
            </>
          )
        },
        {
          id: 'A13',
          marks: 12,
          prompt: (
            <>
              (a) Give a number in each gap of{' '}
              {`$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$`}. (b)
              Using the missing-factor definition of division, explain why {`$5 \\div 0$`} and{' '}
              {`$0 \\div 0$`} both fail. (c) Prove {`$(-1)(-1) = +1$`} from the distributive law.
              (d) State the triangle inequality {`$|x + y| \\le |x| + |y|$`} and its equality
              condition.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$-3 \\in \\mathbb{Z} \\setminus \\mathbb{N}$`},{' '}
                {`$\\tfrac{1}{2} \\in \\mathbb{Q} \\setminus \\mathbb{Z}$`},{' '}
                {`$\\sqrt{2} \\in \\mathbb{R} \\setminus \\mathbb{Q}$`}.
              </p>
              <p>
                (b) {`$5 \\div 0$`} needs {`$c \\times 0 = 5$`} (impossible); {`$0 \\div 0$`} needs{' '}
                {`$c \\times 0 = 0$`} (every c works, so not unique).
              </p>
              <p>
                (c) {`$(-1)(-1) + (-1)(1) = (-1)(0) = 0$`}, and {`$(-1)(1) = -1$`}, so{' '}
                {`$(-1)(-1) = 1$`}.
              </p>
              <p>
                (d) {`$|x + y| \\le |x| + |y|$`}, with equality when x and y share a sign (or one is
                zero).
              </p>
              <NumberSystemsFig />
            </>
          )
        },
        {
          id: 'A14',
          marks: 8,
          prompt: (
            <>
              (a) Evaluate {`$(-3)^2$`} and {`$-3^2$`}; explain the difference. (b) State the
              zero-product property; explain why 0 has no reciprocal. (c) Order {`$-\\tfrac{3}{2}$`}
              , {`$-\\tfrac{5}{4}$`}, {`$-\\tfrac{7}{4}$`}, {`$-1$`} least to greatest.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$(-3)^2 = 9$`}, {`$-3^2 = -9$`}. The brackets square the negative; without
                them only 3 is squared.
              </p>
              <p>
                (b) If {`$ab = 0$`} then {`$a = 0$`} or {`$b = 0$`}. 0 has no reciprocal because{' '}
                {`$0 \\times c = 0 \\ne 1$`}.
              </p>
              <p>(c) {`$-\\tfrac{7}{4} < -\\tfrac{3}{2} < -\\tfrac{5}{4} < -1$`}.</p>
            </>
          )
        },
        {
          id: 'A15',
          marks: 12,
          prompt: (
            <>
              (a) {`$t_{n+1} = t_n^2 - 1$`}, {`$t_1 = 2$`}. Find {`$t_2$`}, {`$t_3$`}. (b) Find the
              nth term of 5, 8, 11, 14, …; derive it from {`$t_n = t_1 + (n-1)a$`}. (c) 1, 3, 7, 13,
              21 has constant second differences. Find the quadratic nth term. (d) Use Gauss pairing
              for {`$1 + 2 + \\cdots + 100$`}. (e) Geometric mean of 4 and 25.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$t_2 = 3$`}, {`$t_3 = 8$`}.
              </p>
              <p>
                (b) {`$a = 3$`}, so {`$t_n = 5 + 3(n - 1) = 3n + 2$`}.
              </p>
              <p>
                (c) Second difference 2 gives a leading {`$n^2$`}; {`$t_n = n^2 - 2n + 2$`}.
              </p>
              <p>(d) 50 pairs summing 101: 5050.</p>
              <p>(e) {`$\\sqrt{4 \\times 25} = 10$`}.</p>
            </>
          )
        },
        {
          id: 'A16',
          marks: 10,
          prompt: (
            <>
              (a) Derive {`$S_n = \\dfrac{a(q^n - 1)}{q - 1}$`}. (b) State the convergence condition
              for an infinite GP; find {`$S_\\infty$`} for{' '}
              {`$1 + \\tfrac{1}{2} + \\tfrac{1}{4} + \\cdots$`}. (c) Express {`$0.\\overline{6}$`}{' '}
              as an infinite GP and hence a fraction; relate to Zeno's paradox.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$qS_n - S_n = aq^n - a$`}, so {`$S_n(q - 1) = a(q^n - 1)$`}, giving the
                formula.
              </p>
              <p>
                (b) Converges when {`$|q| < 1$`}. Here {`$\\tfrac{1}{1 - 1/2} = 2$`}.
              </p>
              <p>
                (c) {`$0.6 + 0.06 + \\cdots = \\tfrac{0.6}{0.9} = \\tfrac{2}{3}$`}. Like Zeno's
                steps, infinitely many shrinking terms add to a finite total.
              </p>
            </>
          )
        },
        {
          id: 'A17',
          marks: 10,
          prompt: (
            <>
              (a) Use the quotient law to show {`$a^0 = 1$`} ({`$a \\ne 0$`}). (b) Evaluate{' '}
              {`$2^{-3}$`} and {`$(\\tfrac{3}{4})^{-1}$`}. (c) Evaluate {`$(-2)^4$`} and {`$-2^4$`}.
              (d) Show with numbers that {`$(a + b)^2 \\ne a^2 + b^2$`} but {`$(ab)^2 = a^2 b^2$`}.
              (e) State the condition on A for {`$A \\times 10^n$`} to be standard form.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$\\tfrac{a^m}{a^m} = a^0$`} and equals 1, so {`$a^0 = 1$`}.
              </p>
              <p>
                (b) {`$2^{-3} = \\tfrac{1}{8}$`}; {`$(\\tfrac{3}{4})^{-1} = \\tfrac{4}{3}$`}.
              </p>
              <p>
                (c) {`$(-2)^4 = 16$`}; {`$-2^4 = -16$`}.
              </p>
              <p>
                (d) {`$(3+4)^2 = 49 \\ne 25 = 3^2 + 4^2$`}, but{' '}
                {`$(2 \\times 3)^2 = 36 = 2^2 \\times 3^2$`}.
              </p>
              <p>(e) {`$1 \\le A < 10$`}.</p>
            </>
          )
        },
        {
          id: 'A18',
          marks: 14,
          prompt: (
            <>
              (a) State {`$\\sqrt{529}$`} and the solutions of {`$x^2 = 529$`}; explain the
              principal-root convention. (b) Classify {`$\\sqrt{2}$`}, {`$\\tfrac{3}{7}$`},
              0.101001000…, {`$\\sqrt{36}$`} as rational or irrational with reasons. (c) Prove{' '}
              {`$\\sqrt{p}$`} irrational for prime p; explain why it fails for composite perfect
              squares. (d) Show {`$\\mathbb{Q}$`} is closed under {`$+, -, \\times, \\div$`}{' '}
              (non-zero) but irrationals are not closed under + or ×. (e) Explain the
              finitely-many-remainders argument for why {`$\\tfrac{1}{p}$`} repeats.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$\\sqrt{529} = 23$`}; {`$x^2 = 529$`} gives {`$x = \\pm 23$`}. The radical
                means the non-negative root only.
              </p>
              <p>
                (b) {`$\\sqrt{2}$`} irrational; {`$\\tfrac{3}{7}$`} rational; 0.101001000…
                irrational (non-repeating); {`$\\sqrt{36} = 6$`} rational.
              </p>
              <p>
                (c) {`$pb^2 = a^2$`} gives {`$p \\mid a$`} then {`$p \\mid b$`}, contradiction. It
                needs "p prime divides {`$x^2$`} implies p divides x", which fails for 4 (since{' '}
                {`$4 \\mid 36$`} but {`$4 \\nmid 6$`}).
              </p>
              <p>
                (d) {`$\\mathbb{Q}$`} is closed under all four. But{' '}
                {`$\\sqrt{2} + (-\\sqrt{2}) = 0$`} and {`$\\sqrt{2} \\times \\sqrt{2} = 2$`} are
                rational, so irrationals are not closed.
              </p>
              <p>
                (e) Dividing by p gives remainders in {`$\\{1, \\ldots, p-1\\}$`}; one must recur,
                so the digits repeat (pigeonhole).
              </p>
            </>
          )
        },
        {
          id: 'A19',
          marks: 9,
          prompt: (
            <>
              (a) Simplify {`$\\sqrt{8}$`}, {`$\\sqrt{50}$`}, {`$\\sqrt{12} + \\sqrt{75}$`}. (b)
              Rationalise {`$\\tfrac{1}{\\sqrt{3}}$`} and {`$\\tfrac{1}{2 + \\sqrt{3}}$`}. (c) Show{' '}
              {`$\\sqrt{3 + 2\\sqrt{2}} = \\sqrt{2} + 1$`}; compare{' '}
              {`$\\sqrt{1001} - \\sqrt{1000}$`} with
              {`$\\tfrac{1}{10}$`} by rationalising.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$2\\sqrt{2}$`}, {`$5\\sqrt{2}$`}, {`$2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}$`}.
              </p>
              <p>
                (b) {`$\\tfrac{\\sqrt{3}}{3}$`}; and {`$\\tfrac{1}{2 + \\sqrt{3}} = 2 - \\sqrt{3}$`}
                .
              </p>
              <p>
                (c) {`$(\\sqrt{2} + 1)^2 = 3 + 2\\sqrt{2}$`}. And{' '}
                {`$\\sqrt{1001} - \\sqrt{1000} = \\tfrac{1}{\\sqrt{1001} + \\sqrt{1000}} < \\tfrac{1}{10}$`}
                .
              </p>
            </>
          )
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical and Applied',
      meta: '122 marks · calculator allowed except B1',
      questions: [
        {
          id: 'B1',
          marks: 10,
          prompt: (
            <>
              No calculator. (a) {`$100\\,000 - 46\\,821$`} via the complement-to-99999 trick; show
              the trick. (b) Convert {`$\\tfrac{3}{8}$`} to a decimal; state whether{' '}
              {`$\\tfrac{1}{7}$`} terminates. (c) Convert 2.5 km to m, 1.5 h to minutes, 750 g to
              kg. (d) Find 35% of €240; state the two integers {`$\\sqrt{70}$`} lies between.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$99\\,999 - 46\\,821 = 53\\,178$`}, then add 1: {`$53\\,179$`}.
              </p>
              <p>
                (b) {`$\\tfrac{3}{8} = 0.375$`}; {`$\\tfrac{1}{7}$`} does not terminate (7 is not 2
                or 5).
              </p>
              <p>(c) 2500 m, 90 minutes, 0.75 kg.</p>
              <p>
                (d) {`$0.35 \\times 240 = €84$`}; {`$\\sqrt{70}$`} lies between 8 and 9.
              </p>
            </>
          )
        },
        {
          id: 'B2',
          marks: 10,
          prompt: (
            <>
              (a) A plot is 18.5 m by 12 m. Find perimeter and area with units. (b) Two angles of a
              triangle are 47° and 68°. Find the third. (c) Convert 90 km/h to m/s. (d) 6 pens cost
              €13.50. Find the unit rate and the cost of 10.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Perimeter {`$2(18.5 + 12) = 61$`} m; area {`$18.5 \\times 12 = 222$`} m².
              </p>
              <p>(b) {`$180 - 115 = 65°$`}.</p>
              <p>(c) {`$90 \\times \\tfrac{1000}{3600} = 25$`} m/s.</p>
              <p>(d) {`$13.50 \\div 6 = €2.25$`} each, so 10 cost €22.50.</p>
            </>
          )
        },
        {
          id: 'B3',
          marks: 12,
          prompt: (
            <>
              (a) Of €600, Aoife gets {`$\\tfrac{2}{5}$`} and Ben the rest split 3:2 with a third
              person. State each share. (b) Tap A fills a tank in 4 h, tap B in 6 h. Time together?
              (c) A cyclist goes out at 20 km/h, returns at 30 km/h. Find the round-trip average
              speed; explain why it is the harmonic mean.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Aoife {`$\\tfrac{2}{5} \\times 600 = €240$`}. The other €360 splits 3:2 into
                €216 and €144.
              </p>
              <p>
                (b) {`$\\tfrac{1}{4} + \\tfrac{1}{6} = \\tfrac{5}{12}$`} per hour, so{' '}
                {`$\\tfrac{12}{5} = 2.4$`} h.
              </p>
              <p>
                (c) {`$\\tfrac{2 \\times 20 \\times 30}{20 + 30} = 24$`} km/h. It is the harmonic
                mean because equal distances mean more time at the slower speed.
              </p>
            </>
          )
        },
        {
          id: 'B4',
          marks: 10,
          prompt: (
            <>
              (a) 100 kg of cucumbers are 99% water; they dry to 98% water. New mass? Justify. (b) A
              spoon of wine goes to a water glass, mixed, then a spoon returned. More wine in water
              or water in wine? Justify. (c) A length measured 2.50 m has true value 2.54 m. Find
              absolute and relative error.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Dry matter is 1 kg, fixed. At 98% water it is 2% of the new mass, so{' '}
                {`$1 = 0.02w$`}, {`$w = 50$`} kg.
              </p>
              <p>
                (b) Equal. Each glass returns to its starting volume, so displaced amounts match.
              </p>
              <p>
                (c) Absolute {`$|2.50 - 2.54| = 0.04$`} m; relative{' '}
                {`$\\tfrac{0.04}{2.54} \\approx 1.57\\%$`}.
              </p>
              <SimpleVsCompoundFig />
            </>
          )
        },
        {
          id: 'B5',
          marks: 10,
          prompt: (
            <>
              (a) Round 0.04982 to 2 significant figures and to 3 decimal places. (b) A length is 36
              cm to the nearest cm. Give lower/upper bounds and the error interval. (c) By
              bracketing between successive decimals, locate {`$\\sqrt{7}$`} to 2 decimal places
              without a root key. (d) Explain why exact arithmetic with π is impossible and what
              "false precision" means.
            </>
          ),
          answer: (
            <>
              <p>(a) 0.050 (2 s.f.) and 0.050 (3 d.p.).</p>
              <p>(b) {`$35.5 \\le L < 36.5$`} cm.</p>
              <p>
                (c) {`$2.6^2 = 6.76$`}, {`$2.7^2 = 7.29$`}; refining, {`$\\sqrt{7} \\approx 2.65$`}.
              </p>
              <p>
                (d) π never ends or repeats, so it cannot be written exactly as a decimal. False
                precision means stating more digits than the data supports.
              </p>
            </>
          )
        },
        {
          id: 'B6',
          marks: 12,
          prompt: (
            <>
              (a) Write 0.00000615 and 73 200 000 in standard form. (b) Compute{' '}
              {`$(3 \\times 10^8)(2.5 \\times 10^{-4})$`} and{' '}
              {`$\\tfrac{6 \\times 10^{-2}}{1.5 \\times 10^3}$`} in standard form. (c) Order{' '}
              {`$4.1 \\times 10^{-5}$`}, {`$9.8 \\times 10^{-6}$`}, {`$2.0 \\times 10^{-5}$`}. (d)
              Light travels {`$3 \\times 10^8$`} m/s. Time to cross {`$1.5 \\times 10^{11}$`} m? (e)
              Give calculator keystrokes (EXP/EE) for {`$6 \\times 10^{-23}$`} and a common error;
              estimate the digit count of {`$2^{63}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$6.15 \\times 10^{-6}$`} and {`$7.32 \\times 10^7$`}.
              </p>
              <p>
                (b) {`$7.5 \\times 10^4$`} and {`$4 \\times 10^{-5}$`}.
              </p>
              <p>(c) {`$9.8 \\times 10^{-6} < 2.0 \\times 10^{-5} < 4.1 \\times 10^{-5}$`}.</p>
              <p>(d) {`$\\tfrac{1.5 \\times 10^{11}}{3 \\times 10^8} = 500$`} s.</p>
              <p>
                (e) Key 6, EXP, then −23; do not also press "× 10".{' '}
                {`$2^{63} \\approx 9.2 \\times 10^{18}$`}, about 19 digits.
              </p>
            </>
          )
        },
        {
          id: 'B7',
          marks: 14,
          prompt: (
            <>
              (a) An item costing €80 sells for €100. Find % profit on cost. (b) Apply successive
              discounts of 20% then 10% to €250; find the true overall % discount. (c) €4000 at 5%
              simple interest for 3 years: find the interest. Then find the rate giving €750 on
              €5000 in 3 years. (d) €4000 at 5% nominal compounded monthly for 2 years: find A and
              the EAR; explain why EAR &gt; nominal. (e) Use the Rule of 72 for the doubling time at
              6%; find the value after 3 years of €10 000 depreciating 15%/year.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$\\tfrac{20}{80} = 25\\%$`}.</p>
              <p>(b) {`$250 \\times 0.8 \\times 0.9 = €180$`}, a true discount of 28%.</p>
              <p>
                (c) {`$\\tfrac{4000 \\times 5 \\times 3}{100} = €600$`}. For €750:{' '}
                {`$R = \\tfrac{100 \\times 750}{5000 \\times 3} = 5\\%$`}.
              </p>
              <p>
                (d) {`$4000(1 + \\tfrac{0.05}{12})^{24} \\approx €4419.30$`}; EAR{' '}
                {`$= (1 + \\tfrac{0.05}{12})^{12} - 1 \\approx 5.12\\%$`}. Monthly interest earns
                interest within the year, so EAR exceeds the nominal rate.
              </p>
              <p>
                (e) {`$72 \\div 6 = 12$`} years. Depreciation:{' '}
                {`$10000 \\times 0.85^3 \\approx €6141$`}.
              </p>
            </>
          )
        },
        {
          id: 'B8',
          marks: 12,
          prompt: (
            <>
              A country taxes income: 0% on the first €12 000, 20% on the next €28 000, 40% above
              €40 000. (a) Tax and effective rate at €30 000 and €60 000; state the marginal rate at
              each. (b) A flat 25% tax is proposed. Find the crossover income where both systems
              charge equal tax; say who is better off below it. (c) €1000 invested: compare 6%
              simple vs 6% compound over 10 years; explain the linear-vs-exponential crossover.
            </>
          ),
          answer: (
            <>
              <p>
                (a) €30 000: tax {`$0.20 \\times 18000 = €3600$`}, effective 12%, marginal 20%. €60
                000: tax {`$5600 + 0.40 \\times 20000 = €13600$`}, effective 22.7%, marginal 40%.
              </p>
              <p>
                (b) Solving the banded tax against {`$0.25x$`} gives a crossover near €56 000. Below
                it, lower earners pay less under the banded system.
              </p>
              <p>
                (c) Simple gives {`$1000 + 600 = €1600$`}; compound gives{' '}
                {`$1000 \\times 1.06^{10} \\approx €1790.85$`}. Compound's gain grows each year, so
                it overtakes the linear simple total.
              </p>
            </>
          )
        },
        {
          id: 'B9',
          marks: 10,
          prompt: (
            <>
              (a) A diver at −18 m ascends 7 m then descends 4 m. Final depth, shown as number-line
              vector addition. (b) Convert 45 (base 10) to base 2 and base 5; convert {`$1101_2$`}{' '}
              to base 10. (c) Compute {`$1011_2 + 110_2$`} entirely in base 2. (d) Why must base{' '}
              {`$b > 1$`}, and what is the digit range? Name one historical non-positional system.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$-18 + 7 - 4 = -15$`} m.</p>
              <p>
                (b) {`$45 = 101101_2 = 140_5$`}; {`$1101_2 = 13$`}.
              </p>
              <p>(c) {`$1011_2 + 110_2 = 10001_2$`} (11 + 6 = 17).</p>
              <p>
                (d) {`$b = 1$`} gives only the digit 0. Digits run 0 to {`$b - 1$`}. Roman numerals
                are non-positional.
              </p>
            </>
          )
        },
        {
          id: 'B10',
          marks: 10,
          prompt: (
            <>
              (a) Matchstick pattern 4, 7, 10, 13. Find the nth-term rule and the count at pattern
              20. (b) State {`$T_n = \\tfrac{n(n+1)}{2}$`}; verify {`$1^3 + 2^3 + 3^3 = (T_3)^2$`}.
              (c) Equal temperament multiplies frequency by {`$2^{1/12}$`} per semitone. Find the
              ratio over 12 semitones; explain why it is an octave. (d) A ball dropped from 2 m
              rebounds to {`$\\tfrac{3}{4}$`} of each previous height. Total vertical distance?
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$t_n = 3n + 1$`}; at {`$n = 20$`}, {`$3 \\times 20 + 1 = 61$`}.
              </p>
              <p>(b) {`$1 + 8 + 27 = 36 = 6^2 = (T_3)^2$`}.</p>
              <p>(c) {`$(2^{1/12})^{12} = 2$`}, doubling the frequency, which is one octave.</p>
              <p>
                (d) Rebounds form a GP with {`$a = 1.5$`}, {`$q = \\tfrac{3}{4}$`}, summing to 6 m
                up and down; total {`$2 + 2 \\times 6 = 14$`} m.
              </p>
            </>
          )
        },
        {
          id: 'B11',
          marks: 12,
          prompt: (
            <>
              (a) Find {`$\\sqrt{576}$`} from its prime factorisation. (b) A square label has area
              169 cm²; a cube crate has volume 1000 cm³. Find side and edge. (c) Between which two
              integers does {`$\\sqrt{150}$`} lie? (d) Describe constructing {`$\\sqrt{2}$`} on a
              number line from a unit square's diagonal, and how the spiral of Theodorus extends it.
              (e) Solve {`$x^2 = 7$`} via difference of squares; state both roots; explain why{' '}
              {`$\\sqrt{a^2} = |a|$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$576 = 2^6 \\times 3^2$`}, so {`$\\sqrt{576} = 2^3 \\times 3 = 24$`}.
              </p>
              <p>
                (b) Side {`$\\sqrt{169} = 13$`} cm; edge {`$\\sqrt[3]{1000} = 10$`} cm.
              </p>
              <p>
                (c) Between 12 and 13 (since {`$12^2 = 144$`}, {`$13^2 = 169$`}).
              </p>
              <p>
                (d) A unit square's diagonal is {`$\\sqrt{2}$`}; swing it by compass onto the line.
                Each spiral triangle adds a unit leg, reaching {`$\\sqrt{3}, \\sqrt{4}, \\ldots$`}.
              </p>
              <p>
                (e) {`$x^2 - 7 = (x - \\sqrt{7})(x + \\sqrt{7}) = 0$`}, so {`$x = \\pm \\sqrt{7}$`}.
                The radical returns the non-negative root, which is {`$|a|$`}.
              </p>
              <SqrtConstructionFig />
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneArithmeticMastery() {
  const config = {
    documentTitle: 'Arithmetic Mastery Exam - AETHER',
    briefing: {
      title: 'Arithmetic Mastery',
      concepts: [
        'Number Line and Number Systems',
        'Prime Numbers and Prime Factorisation',
        'Percentages: Concept and Conversions',
        'Irrational Numbers and the Real-Number System'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
