import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { FONT_LABEL, FONT_SMALL, FONT_TEX } from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A3: nested number systems N ⊂ Z ⊂ Q ⊂ R with one example in each region.
function NumberSystemsFig() {
  const C = useVizColors()
  const rings = [
    ['R', '√2', 188, 96],
    ['Q', '½', 150, 76],
    ['Z', '−5', 108, 56],
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

// B5: bracketing √2 to three decimal places by squaring the endpoints.
function BracketingFig() {
  const C = useVizColors()
  const rows = [
    ['1', '2', '1² = 1', '2² = 4'],
    ['1.4', '1.5', '1.96', '2.25'],
    ['1.41', '1.42', '1.9881', '2.0164'],
    ['1.414', '1.415', '1.999396', '2.002225']
  ]
  return (
    <div style={{ margin: '12px 0 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'inline-block', fontFamily: FONT }}>
        {rows.map(([lo, hi, slo, shi], i) => {
          const last = i === rows.length - 1
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
              <div
                style={{
                  width: 56,
                  textAlign: 'right',
                  fontSize: FONT_TEX,
                  color: last ? C.fg : C.dim
                }}
              >
                {lo}
              </div>
              <div style={{ fontSize: FONT_LABEL, color: C.dim }}>&lt; √2 &lt;</div>
              <div style={{ width: 56, fontSize: FONT_TEX, color: last ? C.fg : C.dim }}>{hi}</div>
              <div style={{ width: 150, fontSize: FONT_LABEL, color: C.dim, paddingLeft: 12 }}>
                {slo} | {shi}
              </div>
            </div>
          )
        })}
        <div style={{ fontSize: FONT_LABEL, color: C.dim, textAlign: 'center', marginTop: 6 }}>
          √2 ≈ 1.414
        </div>
      </div>
    </div>
  )
}

// B13: unit square on [0,1], its diagonal √2, and the compass arc onto the line.
function SqrtConstructionFig() {
  const C = useVizColors()
  const u = 70
  const x0 = 34 // pixel of value 0
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
        {/* number line */}
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
        {/* unit square */}
        <rect
          x={vx(0)}
          y={yTop}
          width={u}
          height={u}
          fill={C.faint}
          stroke={C.fg}
          strokeWidth={1.5}
        />
        {/* diagonal */}
        <line x1={vx(0)} y1={yLine} x2={vx(1)} y2={yTop} stroke={C.fg} strokeWidth={1.5} />
        {/* compass arc from top corner down to the line */}
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

// B14: spiral of Theodorus from √2 to √5, each triangle adding a unit leg.
function TheodorusFig() {
  const C = useVizColors()
  const cx = 120
  const cy = 150
  const s = 38
  const pts = []
  let ang = 0
  for (let k = 1; k <= 5; k++) {
    const r = Math.sqrt(k) * s
    pts.push([cx + r * Math.cos(ang), cy - r * Math.sin(ang)])
    ang += Math.atan(1 / Math.sqrt(k))
  }
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 240 180"
        role="img"
        aria-label="Spiral of Theodorus with hypotenuses root two through root five"
        style={{ display: 'block', width: '100%', maxWidth: 280, height: 'auto', margin: '0 auto' }}
      >
        {/* spokes from origin */}
        {pts.map(([x, y], i) => (
          <line
            key={`sp${i}`}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke={i === 0 ? C.dim : C.fg}
            strokeWidth={1.2}
          />
        ))}
        {/* unit legs between consecutive points */}
        {pts.slice(0, -1).map(([x, y], i) => {
          const [x2, y2] = pts[i + 1]
          return (
            <line key={`lg${i}`} x1={x} y1={y} x2={x2} y2={y2} stroke={C.dim} strokeWidth={1} />
          )
        })}
        {/* hypotenuse labels √2..√5 at spoke midpoints */}
        {pts.slice(1).map(([x, y], i) => (
          <text
            key={`lb${i}`}
            x={(cx + x) / 2}
            y={(cy + y) / 2 - 3}
            textAnchor="middle"
            fill={C.fg}
            fontSize={FONT_SMALL}
            fontFamily={FONT}
          >
            √{i + 2}
          </text>
        ))}
        <circle cx={cx} cy={cy} r={2.5} fill={C.fg} />
        <text x={cx + 6} y={cy + 14} fill={C.dim} fontSize={FONT_SMALL} fontFamily={FONT}>
          each step adds a unit leg
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
      meta: '72 marks · no calculator',
      questions: [
        {
          id: 'A1',
          marks: 3,
          prompt: (
            <>
              State the principal-root convention. Hence explain why {`$\\sqrt{529} = 23$`} and not
              {`$\\pm 23$`}, but the equation {`$x^2 = 529$`} has two solutions.
            </>
          ),
          answer: (
            <>
              <p>The radical symbol denotes the non-negative root only.</p>
              <p>
                So {`$\\sqrt{529} = 23$`}, the positive root. But solving {`$x^2 = 529$`} allows{' '}
                {`$x = \\pm 23$`}, since both square to 529. The two-root case comes from solving,
                not from the symbol.
              </p>
            </>
          )
        },
        {
          id: 'A2',
          marks: 4,
          prompt: (
            <>
              Define a rational number and an irrational number. State the necessary and sufficient
              condition on a decimal expansion for the number to be rational.
            </>
          ),
          answer: (
            <>
              <p>
                A rational number is {`$\\frac{a}{b}$`} with a, b integers and {`$b \\ne 0$`}. An
                irrational number is a real number that cannot be written that way.
              </p>
              <p>
                A number is rational exactly when its decimal terminates or repeats. Non-terminating
                non-repeating means irrational.
              </p>
            </>
          )
        },
        {
          id: 'A3',
          marks: 4,
          prompt: (
            <>
              Draw the nesting{' '}
              {`$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$`} and
              place one example in each region not in the next-smaller set: one in{' '}
              {`$\\mathbb{Z} \\setminus \\mathbb{N}$`}, one in{' '}
              {`$\\mathbb{Q} \\setminus \\mathbb{Z}$`}, one in{' '}
              {`$\\mathbb{R} \\setminus \\mathbb{Q}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                {`$-5 \\in \\mathbb{Z} \\setminus \\mathbb{N}$`},{' '}
                {`$\\frac{1}{2} \\in \\mathbb{Q} \\setminus \\mathbb{Z}$`}, and{' '}
                {`$\\sqrt{2} \\in \\mathbb{R} \\setminus \\mathbb{Q}$`}.
              </p>
              <NumberSystemsFig />
            </>
          )
        },
        {
          id: 'A4',
          marks: 6,
          prompt: (
            <>
              Classify each as rational or irrational, with a one-line reason. (a){' '}
              {`$(\\sqrt{17})^2$`}
              (b) {`$\\frac{\\sqrt{12}}{\\sqrt{3}}$`} (c) {`$\\frac{22}{7}$`} (d){' '}
              {`$\\sqrt{2} + 1$`} (e)
              {`$\\sqrt{2.25}$`} (f) {`$\\pi^2$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) Rational: squaring removes the root, giving 17.</p>
              <p>(b) Rational: {`$\\frac{\\sqrt{12}}{\\sqrt{3}} = \\sqrt{4} = 2$`}.</p>
              <p>(c) Rational: an integer fraction (not equal to π).</p>
              <p>(d) Irrational: a rational plus an irrational.</p>
              <p>(e) Rational: {`$\\sqrt{2.25} = 1.5$`}.</p>
              <p>(f) Irrational: the square of π.</p>
            </>
          )
        },
        {
          id: 'A5',
          marks: 4,
          prompt: (
            <>
              Use the prime-factorisation parity test to decide whether each is a perfect square.
              Show the factorisation and the exponents. (a) 1936 (b) 12.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$1936 = 2^4 \\times 11^2$`}. Exponents 4 and 2 are both even, so it is a
                perfect square (44²).
              </p>
              <p>
                (b) {`$12 = 2^2 \\times 3^1$`}. The exponent of 3 is odd, so 12 is not a perfect
                square.
              </p>
            </>
          )
        },
        {
          id: 'A6',
          marks: 6,
          prompt: <>Prove that {`$\\sqrt{2}$`} is irrational.</>,
          answer: (
            <>
              <p>
                Suppose {`$\\sqrt{2} = \\frac{a}{b}$`} in lowest terms, so a and b are not both
                even.
              </p>
              <p>
                Then {`$2b^2 = a^2$`}, so {`$a^2$`} is even, hence a is even. Write {`$a = 2c$`}.
              </p>
              <p>
                Then {`$2b^2 = 4c^2$`}, so {`$b^2 = 2c^2$`}, hence b is even too.
              </p>
              <p>
                But a and b both even contradicts lowest terms. So {`$\\sqrt{2}$`} is irrational.
              </p>
            </>
          )
        },
        {
          id: 'A7',
          marks: 7,
          prompt: (
            <>
              Prove that for any prime p, {`$\\sqrt{p}$`} is irrational. State the fact about primes
              the proof needs, and give a composite counterexample showing that fact fails for
              non-primes.
            </>
          ),
          answer: (
            <>
              <p>
                Suppose {`$\\sqrt{p} = \\frac{a}{b}$`} in lowest terms. Then {`$pb^2 = a^2$`}, so{' '}
                {`$p \\mid a^2$`}.
              </p>
              <p>
                Since p is prime, {`$p \\mid a$`}. Write {`$a = pc$`}. Then {`$b^2 = pc^2$`}, so{' '}
                {`$p \\mid b$`} too, contradicting lowest terms.
              </p>
              <p>
                The proof depends on "if p is prime and {`$p \\mid x^2$`} then {`$p \\mid x$`}."
                This fails for composites: {`$4 \\mid 6^2 = 36$`}, yet {`$4 \\nmid 6$`}.
              </p>
            </>
          )
        },
        {
          id: 'A8',
          marks: 4,
          prompt: (
            <>
              State the density property of {`$\\mathbb{R}$`}. Find one rational and one irrational
              number strictly between {`$\\sqrt{2}$`} and {`$\\sqrt{3}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                Density: between any two distinct reals there is both a rational and an irrational
                number.
              </p>
              <p>
                Since {`$\\sqrt{2} \\approx 1.414$`} and {`$\\sqrt{3} \\approx 1.732$`}, the
                rational 1.5 lies between them, as does the irrational{' '}
                {`$\\frac{\\sqrt{2} + \\sqrt{3}}{2}$`}.
              </p>
            </>
          )
        },
        {
          id: 'A9',
          marks: 4,
          prompt: (
            <>
              State the closure of {`$\\mathbb{Q}$`} under the four operations. Then give explicit
              counterexamples showing the irrationals are not closed under (a) addition and (b)
              multiplication.
            </>
          ),
          answer: (
            <>
              <p>
                {`$\\mathbb{Q}$`} is closed under addition, subtraction, multiplication, and
                division by a non-zero rational.
              </p>
              <p>(a) {`$\\sqrt{2} + (-\\sqrt{2}) = 0$`}, which is rational.</p>
              <p>(b) {`$\\sqrt{2} \\times \\sqrt{2} = 2$`}, which is rational.</p>
            </>
          )
        },
        {
          id: 'A10',
          marks: 5,
          prompt: (
            <>
              The sequence 0, {`$\\sqrt{2}$`}, {`$2\\sqrt{2}$`}, {`$3\\sqrt{2}$`}, … adds a fixed
              step {`$\\sqrt{2}$`}. Prove that exactly one term is an integer.
            </>
          ),
          answer: (
            <>
              <p>The nth term is {`$n\\sqrt{2}$`}.</p>
              <p>
                For {`$n \\ge 1$`}, if {`$n\\sqrt{2}$`} were an integer m, then{' '}
                {`$\\sqrt{2} = \\frac{m}{n}$`} would be rational. That contradicts A6.
              </p>
              <p>
                So no term with {`$n \\ge 1$`} is an integer. Only {`$n = 0$`} gives an integer,
                namely 0. Exactly one term.
              </p>
            </>
          )
        },
        {
          id: 'A11',
          marks: 6,
          prompt: (
            <>
              Prove that any fraction whose denominator is of the form {`$2^a \\cdot 5^b$`} has a
              terminating decimal expansion.
            </>
          ),
          answer: (
            <>
              <p>
                A decimal terminates exactly when the number can be written as{' '}
                {`$\\frac{\\text{integer}}{10^k}$`}.
              </p>
              <p>
                Take {`$k = \\max(a, b)$`}. Multiply numerator and denominator by the missing
                factors of 2 or 5 so the denominator becomes {`$2^k \\cdot 5^k = 10^k$`}.
              </p>
              <p>The result is an integer over {`$10^k$`}, so it terminates.</p>
            </>
          )
        },
        {
          id: 'A12',
          marks: 4,
          prompt: (
            <>
              A fraction in lowest terms has a denominator with a prime factor other than 2 or 5.
              (a) Using the fact that long division produces only finitely many possible remainders,
              explain why the decimal must repeat. (b) Name the principle in (a).
            </>
          ),
          answer: (
            <>
              <p>
                (a) Dividing by n leaves remainders only in the finite set{' '}
                {`$\\{0, 1, \\ldots, n-1\\}$`}. A non-terminating expansion never reaches remainder
                0, so within finitely many steps a remainder must recur. From a repeated remainder,
                the digits repeat forever.
              </p>
              <p>(b) The pigeonhole principle.</p>
            </>
          )
        },
        {
          id: 'A13',
          marks: 7,
          prompt: (
            <>
              Stretch. For {`$\\frac{3}{7}$`} the repeating block has length 6. (a) Define the
              period of
              {`$\\frac{1}{n}$`} as an order of 10 modulo n. (b) Using Fermat's Little Theorem,
              prove that for a prime {`$p \\notin \\{2, 5\\}$`} the period of {`$\\frac{1}{p}$`}{' '}
              divides {`$p - 1$`}. (c) For a denominator {`$2^a \\cdot 5^b \\cdot m$`} with{' '}
              {`$\\gcd(m, 10) = 1$`}, state the length of the non-repeating prefix.
            </>
          ),
          answer: (
            <>
              <p>
                (a) The period is the smallest k with {`$10^k \\equiv 1 \\pmod n$`}, that is{' '}
                {`$\\text{ord}_n(10)$`}.
              </p>
              <p>
                (b) Fermat gives {`$10^{p-1} \\equiv 1 \\pmod p$`}. The period is the least exponent
                k with {`$10^k \\equiv 1$`}, and the least such k divides any exponent that also
                works. So the period divides {`$p - 1$`}.
              </p>
              <p>(c) The non-repeating prefix has length {`$\\max(a, b)$`}.</p>
            </>
          )
        },
        {
          id: 'A14',
          marks: 3,
          prompt: (
            <>
              Show that {`$\\sqrt{a^2} = |a|$`} for all real a, and give a numerical example with{' '}
              {`$a < 0$`} demonstrating that {`$\\sqrt{a^2} = a$`} is false.
            </>
          ),
          answer: (
            <>
              <p>
                The radical returns the non-negative root, which equals {`$|a|$`} whatever the sign
                of a.
              </p>
              <p>
                For {`$a = -5$`}: {`$\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$`}, not −5. So{' '}
                {`$\\sqrt{a^2} = a$`} fails.
              </p>
            </>
          )
        },
        {
          id: 'A15',
          marks: 5,
          prompt: (
            <>
              Solve {`$x^2 + q = 0$`} for {`$q = -9$`}, {`$q = 0$`}, {`$q = 4$`}. State the number
              of real solutions in each case and explain, from the sign of the constant, why the
              count changes.
            </>
          ),
          answer: (
            <>
              <p>Rewrite as {`$x^2 = -q$`}.</p>
              <p>
                {`$q = -9$`}: {`$x^2 = 9$`}, so {`$x = \\pm 3$`}, two solutions.
              </p>
              <p>
                {`$q = 0$`}: {`$x = 0$`}, one solution.
              </p>
              <p>
                {`$q = 4$`}: {`$x^2 = -4$`}, no real solution.
              </p>
              <p>
                A square is never negative, so a positive value on the right gives none, zero gives
                one, and a positive value gives two. The sign of {`$-q$`} controls the count.
              </p>
            </>
          )
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical',
      meta: '75 marks · no calculator except B7',
      questions: [
        {
          id: 'B1',
          marks: 5,
          prompt: (
            <>
              Without a calculator, evaluate: (a) {`$13^2$`} (b) {`$7^3$`} (c) {`$\\sqrt{196}$`} (d){' '}
              {`$\\sqrt[3]{512}$`} (e) {`$\\sqrt[3]{-8}$`}.
            </>
          ),
          answer: <p>(a) 169. (b) 343. (c) 14. (d) 8. (e) −2.</p>
        },
        {
          id: 'B2',
          marks: 3,
          prompt: (
            <>
              Find {`$\\sqrt{576}$`} exactly from its prime factorisation. Show the pairing of
              factors.
            </>
          ),
          answer: (
            <p>
              {`$576 = 2^6 \\times 3^2$`}. Pairing gives {`$2^3 \\times 3 = 24$`}, so{' '}
              {`$\\sqrt{576} = 24$`}.
            </p>
          )
        },
        {
          id: 'B3',
          marks: 4,
          prompt: (
            <>
              A square tile has area 529 cm². A cube has volume 512 cm³. Find the side of the tile
              and the edge of the cube, and verify each answer.
            </>
          ),
          answer: (
            <>
              <p>
                Tile side {`$= \\sqrt{529} = 23$`} cm, since {`$23^2 = 529$`}.
              </p>
              <p>
                Cube edge {`$= \\sqrt[3]{512} = 8$`} cm, since {`$8^3 = 512$`}.
              </p>
            </>
          )
        },
        {
          id: 'B4',
          marks: 4,
          prompt: (
            <>
              Without a calculator, state the two consecutive integers each root lies between, and
              which it is nearer: (a) {`$\\sqrt{10}$`} (b) {`$\\sqrt[3]{20}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$3 < \\sqrt{10} < 4$`}; nearer 3 (since {`$3^2 = 9$`} is close to 10).
              </p>
              <p>
                (b) {`$2 < \\sqrt[3]{20} < 3$`}; nearer 3 (since {`$3^3 = 27$`} is closer to 20 than{' '}
                {`$2^3 = 8$`}).
              </p>
            </>
          )
        },
        {
          id: 'B5',
          marks: 5,
          prompt: (
            <>
              Find the first three decimal places of {`$\\sqrt{2}$`} by bracketing: show the
              integer, tenths, hundredths and thousandths steps with the squared endpoints.
            </>
          ),
          answer: (
            <>
              <p>
                {`$1^2 = 1$`} and {`$2^2 = 4$`}, so {`$1 < \\sqrt{2} < 2$`}.
              </p>
              <p>
                {`$1.4^2 = 1.96$`}, {`$1.5^2 = 2.25$`}, so 1.4 to 1.5.
              </p>
              <p>
                {`$1.41^2 = 1.9881$`}, {`$1.42^2 = 2.0164$`}, so 1.41 to 1.42.
              </p>
              <p>
                {`$1.414^2 = 1.999396$`}, {`$1.415^2 = 2.002225$`}, so{' '}
                {`$\\sqrt{2} \\approx 1.414$`}.
              </p>
              <BracketingFig />
            </>
          )
        },
        {
          id: 'B6',
          marks: 5,
          prompt: (
            <>
              Simplify fully: (a) {`$\\sqrt{8}$`} (b) {`$\\sqrt{50}$`} (c){' '}
              {`$\\sqrt{12} + \\sqrt{75}$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$\\sqrt{8} = 2\\sqrt{2}$`}.</p>
              <p>(b) {`$\\sqrt{50} = 5\\sqrt{2}$`}.</p>
              <p>(c) {`$\\sqrt{12} + \\sqrt{75} = 2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}$`}.</p>
            </>
          )
        },
        {
          id: 'B7',
          marks: 3,
          prompt: (
            <>
              Calculator allowed. Evaluate {`$3.2^2$`} and {`$\\sqrt[3]{512}$`}, and write the
              keystroke sequence you used for each.
            </>
          ),
          answer: (
            <>
              <p>{`$3.2^2 = 10.24$`}, keying 3.2, then the x² key, then =.</p>
              <p>{`$\\sqrt[3]{512} = 8$`}, keying the cube-root key, then 512, then =.</p>
            </>
          )
        },
        {
          id: 'B8',
          marks: 4,
          prompt: (
            <>
              Show that {`$\\frac{1}{2 + \\sqrt{3}}$`} can be written in the form{' '}
              {`$a + b\\sqrt{c}$`} with a, b integers, by rationalising the denominator.
            </>
          ),
          answer: (
            <p>
              Multiply by the conjugate {`$2 - \\sqrt{3}$`}: denominator{' '}
              {`$(2 + \\sqrt{3})(2 - \\sqrt{3}) = 4 - 3 = 1$`}. So{' '}
              {`$\\frac{1}{2 + \\sqrt{3}} = 2 - \\sqrt{3}$`}.
            </p>
          )
        },
        {
          id: 'B9',
          marks: 4,
          prompt: (
            <>Rationalise the denominator of {`$\\frac{1}{\\sqrt{7} - \\sqrt{5}}$`} and simplify.</>
          ),
          answer: (
            <p>
              Multiply by {`$\\sqrt{7} + \\sqrt{5}$`}: denominator {`$7 - 5 = 2$`}, so{' '}
              {`$\\frac{1}{\\sqrt{7} - \\sqrt{5}} = \\frac{\\sqrt{7} + \\sqrt{5}}{2}$`}.
            </p>
          )
        },
        {
          id: 'B10',
          marks: 4,
          prompt: <>Show that {`$\\sqrt{3 + 2\\sqrt{2}} = \\sqrt{2} + 1$`}.</>,
          answer: (
            <>
              <p>
                Set {`$\\sqrt{3 + 2\\sqrt{2}} = \\sqrt{a} + \\sqrt{b}$`}. Squaring: {`$a + b = 3$`}{' '}
                and {`$2\\sqrt{ab} = 2\\sqrt{2}$`}, so {`$ab = 2$`}.
              </p>
              <p>
                Then {`$a = 2$`}, {`$b = 1$`}, giving the positive root {`$\\sqrt{2} + 1$`}.
              </p>
            </>
          )
        },
        {
          id: 'B11',
          marks: 4,
          prompt: (
            <>
              Without a calculator, determine which is larger: {`$\\sqrt{1001} - \\sqrt{1000}$`} or{' '}
              {`$\\frac{1}{10}$`}. Justify by rationalising.
            </>
          ),
          answer: (
            <>
              <p>{`$\\sqrt{1001} - \\sqrt{1000} = \\frac{1}{\\sqrt{1001} + \\sqrt{1000}}$`}.</p>
              <p>
                The denominator is more than {`$2\\sqrt{1000} \\approx 63.2 > 10$`}, so the
                difference is less than {`$\\frac{1}{10}$`}. Thus {`$\\frac{1}{10}$`} is larger.
              </p>
            </>
          )
        },
        {
          id: 'B12',
          marks: 4,
          prompt: (
            <>
              Solve {`$x^2 = 7$`} exactly by factorising as a difference of two squares. Give both
              solutions.
            </>
          ),
          answer: (
            <p>
              {`$x^2 - 7 = x^2 - (\\sqrt{7})^2 = (x - \\sqrt{7})(x + \\sqrt{7}) = 0$`}, so{' '}
              {`$x = \\pm \\sqrt{7}$`}.
            </p>
          )
        },
        {
          id: 'B13',
          marks: 8,
          prompt: (
            <>
              On a number line with 0 and 1 marked, construct the exact point {`$\\sqrt{2}$`} from
              the diagonal of a unit square. Label the unit square, its diagonal, the compass arc,
              and the landing point. State why the arc lands on the exact value rather than an
              approximation.
            </>
          ),
          answer: (
            <>
              <p>
                Build the unit square on the segment from 0 to 1. Its diagonal has length{' '}
                {`$\\sqrt{1^2 + 1^2} = \\sqrt{2}$`} by Pythagoras. Put the compass point at 0 with
                that diagonal as radius, and swing an arc down to the number line.
              </p>
              <p>
                The landing point is exactly {`$\\sqrt{2}$`}. The compass preserves the diagonal's
                exact length, so the point is exact, not a rounded decimal.
              </p>
              <SqrtConstructionFig />
            </>
          )
        },
        {
          id: 'B14',
          marks: 8,
          prompt: (
            <>
              Beginning from your {`$\\sqrt{2}$`} segment, construct the spiral of Theodorus to
              reach {`$\\sqrt{5}$`}: build each right triangle with a unit leg and label the
              hypotenuses {`$\\sqrt{3}$`}, {`$\\sqrt{4}$`}, {`$\\sqrt{5}$`}. State what each new
              unit leg adds.
            </>
          ),
          answer: (
            <>
              <p>
                On the {`$\\sqrt{2}$`} hypotenuse, raise a unit leg at a right angle. The new
                hypotenuse is {`$\\sqrt{(\\sqrt{2})^2 + 1^2} = \\sqrt{3}$`}. Repeat to get{' '}
                {`$\\sqrt{4} = 2$`}, then
                {`$\\sqrt{5}$`}.
              </p>
              <p>
                Each unit leg raises the hypotenuse from {`$\\sqrt{n}$`} to {`$\\sqrt{n + 1}$`}.
              </p>
              <TheodorusFig />
            </>
          )
        },
        {
          id: 'B15',
          marks: 10,
          prompt: (
            <>
              A storage company stacks identical cubic crates. (a) One crate has volume 729 cm³.
              Find its edge length, and verify by cubing. (b) A square shipping label has area 196
              cm². Find its side. (c) The crates have edge lengths {`$\\sqrt{2}$`}, {`$2\\sqrt{2}$`}
              , {`$3\\sqrt{2}$`}, … cm. Using A10, explain whether any crate has an integer edge
              length other than the first. (d) Classify the total edge length{' '}
              {`$\\sqrt{2} + 2\\sqrt{2} + 3\\sqrt{2}$`} as rational or irrational and justify.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Edge {`$= \\sqrt[3]{729} = 9$`} cm, since {`$9^3 = 729$`}.
              </p>
              <p>(b) Side {`$= \\sqrt{196} = 14$`} cm.</p>
              <p>
                (c) No. By A10, every {`$n\\sqrt{2}$`} with {`$n \\ge 1$`} is irrational, so no
                crate edge is an integer.
              </p>
              <p>
                (d) {`$\\sqrt{2} + 2\\sqrt{2} + 3\\sqrt{2} = 6\\sqrt{2}$`}, irrational: a non-zero
                rational times an irrational.
              </p>
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneRealNumbers() {
  const config = {
    documentTitle: 'Real Numbers Exam - AETHER',
    briefing: {
      title: 'Real Numbers',
      concepts: [
        'Squares, Cubes, Square Roots, Cube Roots',
        'Irrational Numbers and the Real-Number System',
        'Real Numbers on the Number Line',
        'Simple Quadratic Surds'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
