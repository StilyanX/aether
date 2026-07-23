import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { FONT_CONTROL, FONT_LABEL, FONT_TEX } from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A1: nested number systems N ⊂ Z ⊂ Q ⊂ R, each with an example member.
function NumberSystemsFig() {
  const C = useVizColors()
  const rings = [
    ['R', '√2', 188, 96, C.faint],
    ['Q', '½', 150, 76, 'none'],
    ['Z', '−3', 108, 56, 'none'],
    ['N', '7', 62, 34, 'none']
  ]
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 210"
        role="img"
        aria-label="Nested sets: naturals inside integers inside rationals inside reals"
        style={{ display: 'block', width: '100%', maxWidth: 360, height: 'auto', margin: '0 auto' }}
      >
        {rings.map(([label, ex, rx, ry, fill], i) => (
          <g key={label}>
            <ellipse
              cx={200}
              cy={100}
              rx={rx}
              ry={ry}
              fill={fill}
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

// A8: the descending pattern that forces (−1)(−1) = +1.
function SignPatternFig() {
  const C = useVizColors()
  const rows = [
    ['3 × (−1)', '= −3'],
    ['2 × (−1)', '= −2'],
    ['1 × (−1)', '= −1'],
    ['0 × (−1)', '= 0'],
    ['(−1) × (−1)', '= +1']
  ]
  return (
    <div style={{ margin: '12px 0 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'inline-block' }}>
        {rows.map(([lhs, rhs], i) => {
          const last = i === rows.length - 1
          return (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 3 }}>
              <div
                style={{
                  width: 110,
                  height: 28,
                  lineHeight: '28px',
                  textAlign: 'right',
                  paddingRight: 8,
                  fontSize: FONT_CONTROL,
                  fontFamily: FONT,
                  color: last ? C.fg : C.dim
                }}
              >
                {lhs}
              </div>
              <div
                style={{
                  width: 60,
                  height: 28,
                  lineHeight: '28px',
                  textAlign: 'left',
                  fontSize: FONT_CONTROL,
                  fontFamily: FONT,
                  color: last ? C.fg : C.dim,
                  border: last ? `1px solid ${C.fg}` : 'none'
                }}
              >
                {rhs}
              </div>
            </div>
          )
        })}
        <div
          style={{
            fontSize: FONT_LABEL,
            color: C.dim,
            textAlign: 'center',
            marginTop: 6,
            fontFamily: FONT
          }}
        >
          each step rises by 1, so the last must be +1
        </div>
      </div>
    </div>
  )
}

// A10: |x − 5| < 2 as the open interval 3 < x < 7, centre 5, radius 2.
function AbsIntervalFig() {
  const C = useVizColors()
  const x0 = 30
  const x1 = 374
  const lo = 1
  const hi = 9
  const sx = v => x0 + ((v - lo) / (hi - lo)) * (x1 - x0)
  const ticks = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 96"
        role="img"
        aria-label="Number line with the open interval from 3 to 7, centred on 5 with radius 2"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <line x1={x0} y1={54} x2={x1} y2={54} stroke={C.dim} strokeWidth={1.5} />
        {ticks.map(t => (
          <g key={t}>
            <line x1={sx(t)} y1={48} x2={sx(t)} y2={60} stroke={C.dim} strokeWidth={1} />
            <text
              x={sx(t)}
              y={76}
              textAnchor="middle"
              fill={C.dim}
              fontSize={FONT_LABEL}
              fontFamily={FONT}
            >
              {t}
            </text>
          </g>
        ))}
        <line x1={sx(3)} y1={54} x2={sx(7)} y2={54} stroke={C.fg} strokeWidth={3} />
        <circle cx={sx(3)} cy={54} r={4} fill="none" stroke={C.fg} strokeWidth={1.5} />
        <circle cx={sx(7)} cy={54} r={4} fill="none" stroke={C.fg} strokeWidth={1.5} />
        <circle cx={sx(5)} cy={54} r={3} fill={C.fg} />
        <text
          x={sx(5)}
          y={38}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          centre 5, radius 2
        </text>
      </svg>
    </div>
  )
}

// B7: vectors (+5) and (−2) added tip-to-tail give +3.
function VectorSumFig() {
  const C = useVizColors()
  const x0 = 30
  const x1 = 374
  const lo = -1
  const hi = 6
  const sx = v => x0 + ((v - lo) / (hi - lo)) * (x1 - x0)
  const Arrow = ({ from, to, y, label }) => {
    const dir = to > from ? 1 : -1
    return (
      <g>
        <line x1={sx(from)} y1={y} x2={sx(to)} y2={y} stroke={C.fg} strokeWidth={1.5} />
        <polygon
          points={`${sx(to)},${y} ${sx(to) - dir * 7},${y - 4} ${sx(to) - dir * 7},${y + 4}`}
          fill={C.fg}
        />
        <text
          x={(sx(from) + sx(to)) / 2}
          y={y - 7}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          {label}
        </text>
      </g>
    )
  }
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 120"
        role="img"
        aria-label="Vector plus five then vector minus two added tip to tail giving plus three"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <line x1={x0} y1={92} x2={x1} y2={92} stroke={C.dim} strokeWidth={1.5} />
        {[-1, 0, 1, 2, 3, 4, 5].map(t => (
          <g key={t}>
            <line x1={sx(t)} y1={88} x2={sx(t)} y2={96} stroke={C.dim} strokeWidth={1} />
            <text
              x={sx(t)}
              y={110}
              textAnchor="middle"
              fill={C.dim}
              fontSize={FONT_LABEL}
              fontFamily={FONT}
            >
              {t}
            </text>
          </g>
        ))}
        <Arrow from={0} to={5} y={56} label="+5" />
        <Arrow from={5} to={3} y={34} label="−2" />
        <circle cx={sx(3)} cy={92} r={3.5} fill={C.fg} />
        <text
          x={sx(3)}
          y={84}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          +3
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
      meta: '100 marks · no calculator',
      questions: [
        {
          id: 'A1',
          marks: 6,
          prompt: (
            <>
              (a) Define a number as an object on the number line. (b) State the inclusion chain for
              N, Z, Q, R and give one number in Z not in N, one in Q not in Z, and one in R not in
              Q.
            </>
          ),
          answer: (
            <>
              <p>(a) A number is a point on the number line.</p>
              <p>
                (b) {`$N \\subset Z \\subset Q \\subset R$`}. For example {`$-3 \\in Z$`} but not N;{' '}
                {`$\\frac{1}{2} \\in Q$`} but not Z; {`$\\sqrt{2} \\in R$`} but not Q.
              </p>
              <NumberSystemsFig />
            </>
          )
        },
        {
          id: 'A2',
          marks: 5,
          prompt: (
            <>
              Using the missing-factor definition of division, explain why {`$5 \\div 0$`} has no
              value and why {`$0 \\div 0$`} is not well-defined.
            </>
          ),
          answer: (
            <>
              <p>
                {`$a \\div b$`} is the number c with {`$c \\times b = a$`}.
              </p>
              <p>
                {`$5 \\div 0$`} needs {`$c \\times 0 = 5$`}, which is impossible since anything
                times 0 is 0.
              </p>
              <p>
                {`$0 \\div 0$`} needs {`$c \\times 0 = 0$`}, which every c satisfies. There is no
                single answer, so it is undefined.
              </p>
            </>
          )
        },
        {
          id: 'A3',
          marks: 6,
          prompt: (
            <>
              (a) Classify as terminating, repeating, or non-repeating non-terminating:{' '}
              {`$\\frac{3}{8}$`}, {`$\\frac{2}{11}$`}, {`$\\sqrt{2}$`}, 0.101001000100001…. (b)
              Convert 0.454545… to a fraction, showing working.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$\\frac{3}{8}$`} terminating, {`$\\frac{2}{11}$`} repeating, {`$\\sqrt{2}$`}{' '}
                non-repeating non-terminating, and 0.101001000… non-repeating non-terminating.
              </p>
              <p>
                (b) Let {`$x = 0.\\overline{45}$`}. Then {`$100x - x = 45$`}, so {`$99x = 45$`} and{' '}
                {`$x = \\frac{45}{99} = \\frac{5}{11}$`}.
              </p>
            </>
          )
        },
        {
          id: 'A4',
          marks: 9,
          prompt: (
            <>
              (a) Prove every positive integer has a base-b representation (integer {`$b > 1$`}) by
              repeated division. (b) Prove it is unique. (c) Explain why {`$b > 1$`} is essential.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Divide n by b: {`$n = qb + r$`} with {`$0 \\le r < b$`}. The remainder r is the
                lowest digit. Repeat on q, which gets strictly smaller each time, so the process
                ends. The remainders read upward give the digits.
              </p>
              <p>
                (b) Suppose n had two representations. Their lowest digits both equal n mod b, so
                they agree. Dividing out b and repeating forces every digit to match. So the
                representation is unique.
              </p>
              <p>
                (c) If {`$b = 1$`} the only digit is 0, which cannot build other numbers. If{' '}
                {`$b \\le 0$`} the division rule breaks. So b must be at least 2.
              </p>
            </>
          )
        },
        {
          id: 'A5',
          marks: 4,
          prompt: (
            <>
              (a) Write 3047 (base 10) as a sum of place values. (b) State why every base-b digit
              must satisfy {`$0 \\le \\text{digit} \\le b - 1$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$3047 = 3 \\times 10^3 + 0 \\times 10^2 + 4 \\times 10 + 7$`}.</p>
              <p>
                (b) Each digit counts units before a carry happens. A digit equal to b would fill a
                whole group and should carry up to the next place instead.
              </p>
            </>
          )
        },
        {
          id: 'A6',
          marks: 6,
          prompt: (
            <>
              (a) Name the base of the Babylonian, Maya and Hindu-Arabic systems. (b) Explain what
              makes Roman numerals non-positional and give one disadvantage versus a positional
              system.
            </>
          ),
          answer: (
            <>
              <p>(a) Babylonian base 60, Maya base 20, Hindu-Arabic base 10.</p>
              <p>
                (b) A Roman symbol has the same value wherever it sits, so position carries no
                meaning. The system needs new symbols for each higher power and has no place-value
                zero, which makes calculation hard.
              </p>
            </>
          )
        },
        {
          id: 'A7',
          marks: 4,
          prompt: (
            <>
              Remove brackets: (a) {`$+(+7)$`} (b) {`$+(-7)$`} (c) {`$-(+7)$`} (d) {`$-(-7)$`}.
            </>
          ),
          answer: <p>(a) 7. (b) −7. (c) −7. (d) 7.</p>
        },
        {
          id: 'A8',
          marks: 10,
          prompt: (
            <>
              (a) Give the descending-pattern argument that {`$(-1)(-1) = +1$`}. (b) Prove from the
              distributive law that {`$(-1)(-1) = 1$`}, then extend to {`$(-m)(-n) = mn$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Look at {`$3(-1) = -3$`}, {`$2(-1) = -2$`}, {`$1(-1) = -1$`}, {`$0(-1) = 0$`}.
                Each result rises by 1 as the multiplier drops by 1. The next line, {`$(-1)(-1)$`},
                must be +1.
              </p>
              <p>
                (b) {`$(-1)(-1) + (-1)(1) = (-1)(-1 + 1) = (-1)(0) = 0$`}. Since {`$(-1)(1) = -1$`},
                we get {`$(-1)(-1) - 1 = 0$`}, so {`$(-1)(-1) = 1$`}. Then{' '}
                {`$(-m)(-n) = (-1)(-1)(mn) = mn$`}.
              </p>
              <SignPatternFig />
            </>
          )
        },
        {
          id: 'A9',
          marks: 6,
          prompt: (
            <>
              (a) State the opposite-of-the-opposite rule with an example. (b) Prove that if{' '}
              {`$a < b$`} then {`$-a > -b$`}. (c) State the multiply-by-a-negative flip rule.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$-(-a) = a$`}. For example {`$-(-5) = 5$`}.
              </p>
              <p>
                (b) If {`$a < b$`} then {`$b - a > 0$`}. But {`$-a - (-b) = b - a > 0$`}, so{' '}
                {`$-a > -b$`}.
              </p>
              <p>
                (c) Multiplying both sides of an inequality by a negative number reverses its
                direction.
              </p>
            </>
          )
        },
        {
          id: 'A10',
          marks: 7,
          prompt: (
            <>
              (a) Give the piecewise definition of {`$|x|$`}. (b) Prove {`$|x| < b$`} (with{' '}
              {`$b > 0$`}) is equivalent to {`$-b < x < b$`}. (c) Write {`$|x - 5| < 2$`} as a
              double inequality and state the centre and radius.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$|x| = x$`} if {`$x \\ge 0$`}, and {`$|x| = -x$`} if {`$x < 0$`}.
              </p>
              <p>
                (b) If {`$x \\ge 0$`}, {`$|x| = x < b$`}. If {`$x < 0$`}, {`$|x| = -x < b$`} means{' '}
                {`$x > -b$`}. Together these give {`$-b < x < b$`}, and each step reverses, so the
                two statements are equivalent.
              </p>
              <p>(c) {`$3 < x < 7$`}. The centre is 5 and the radius is 2.</p>
              <AbsIntervalFig />
            </>
          )
        },
        {
          id: 'A11',
          marks: 10,
          prompt: (
            <>
              (a) Prove {`$|x||y| = |xy|$`} by cases on the signs. (b) Prove{' '}
              {`$|x + y| \\le |x| + |y|$`} and state when equality holds.
            </>
          ),
          answer: (
            <>
              <p>
                (a) If both are non-negative, {`$|x||y| = xy = |xy|$`}. If both are negative,{' '}
                {`$|x||y| = (-x)(-y) = xy = |xy|$`}. If signs differ, {`$|x||y| = -(xy) = |xy|$`}{' '}
                since xy is negative. Every case gives {`$|xy|$`}.
              </p>
              <p>
                (b) From {`$-|x| \\le x \\le |x|$`} and {`$-|y| \\le y \\le |y|$`}, add to get{' '}
                {`$-(|x| + |y|) \\le x + y \\le |x| + |y|$`}, which is {`$|x + y| \\le |x| + |y|$`}.
                Equality holds exactly when x and y have the same sign (or one is zero).
              </p>
            </>
          )
        },
        {
          id: 'A12',
          marks: 9,
          prompt: (
            <>
              From the addition axioms (associativity, commutativity, existence of 0 and inverses),
              prove: (i) 0 is unique; (ii) inverses are unique; (iii) {`$-(-a) = a$`}; (iv){' '}
              {`$a + c = b + c \\implies a = b$`}; (v) {`$-(a + b) = (-a) + (-b)$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (i) If {`$0'$`} is another zero, {`$0 = 0 + 0' = 0'$`}.
              </p>
              <p>
                (ii) If {`$b$`} and {`$b'$`} both invert a, then{' '}
                {`$b = b + (a + b') = (b + a) + b' = b'$`}.
              </p>
              <p>(iii) a inverts −a, and inverses are unique, so {`$-(-a) = a$`}.</p>
              <p>
                (iv) Add {`$-c$`} to both sides of {`$a + c = b + c$`} to get {`$a = b$`}.
              </p>
              <p>
                (v) {`$((-a) + (-b)) + (a + b) = 0$`}, so {`$(-a) + (-b)$`} is the inverse of{' '}
                {`$a + b$`}.
              </p>
            </>
          )
        },
        {
          id: 'A13',
          marks: 5,
          prompt: (
            <>
              (a) Give the opposite and the reciprocal of {`$-\\frac{4}{3}$`}. (b) State the
              zero-product property. (c) State why 0 has no reciprocal.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Opposite {`$\\frac{4}{3}$`}, reciprocal {`$-\\frac{3}{4}$`}.
              </p>
              <p>
                (b) If {`$ab = 0$`} then {`$a = 0$`} or {`$b = 0$`}.
              </p>
              <p>
                (c) A reciprocal needs {`$x \\times \\frac{1}{x} = 1$`}, but {`$0$`} times anything
                is 0, never 1.
              </p>
            </>
          )
        },
        {
          id: 'A14',
          marks: 8,
          prompt: (
            <>
              (a) Explain why {`$a + x = b$`} forces negative and rational numbers, with an example
              where a, b are natural but x is not. (b) Prove the rule {`$(-1) \\cdot a = -a$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$5 + x = 3$`} has no natural-number answer; it needs {`$x = -2$`}, an integer.
                Likewise {`$2x = 1$`} needs {`$x = \\frac{1}{2}$`}, a rational. So solving such
                equations forces these wider number sets.
              </p>
              <p>
                (b) {`$a + (-1)a = (1 + (-1))a = 0 \\cdot a = 0$`}. So {`$(-1)a$`} is the inverse of
                a, that is {`$(-1)a = -a$`}.
              </p>
            </>
          )
        },
        {
          id: 'A15',
          marks: 5,
          prompt: (
            <>
              (a) Evaluate {`$(-3)^2$`} and {`$-3^2$`} and explain the difference. (b) Simplify{' '}
              {`$8 - (3 - 5)$`} and explain the sign change. (c) A student writes{' '}
              {`$-x^2 = (-x)^2$`}; identify the error.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$(-3)^2 = 9$`}, but {`$-3^2 = -9$`}. The brackets square the negative; without
                them only the 3 is squared.
              </p>
              <p>(b) {`$8 - (3 - 5) = 8 - (-2) = 10$`}. The minus sign negates each term inside.</p>
              <p>
                (c) Wrong: {`$-x^2 = -(x^2)$`}, while {`$(-x)^2 = x^2$`}. They are not equal.
              </p>
            </>
          )
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical and Applied',
      meta: '110 marks · calculator allowed where stated',
      questions: [
        {
          id: 'B1',
          marks: 9,
          prompt: (
            <>
              On graph paper with unit segment 1 cm: (a) mark 0–5 and −1, −2. (b) Show {`$2 + 3$`}{' '}
              as segment-after-segment. (c) Show {`$5 - 2$`} as the leftover segment. (d) Show{' '}
              {`$2 \\times 3$`} as repeated addition and as the area of a 2×3 rectangle. (e) Show{' '}
              {`$6 \\div 2$`} as the missing side of a rectangle of area 6 with one side 2.
            </>
          ),
          answer: (
            <>
              <p>(a) Draw an evenly scaled line with the negative marks to the left of 0.</p>
              <p>(b) Lay a length 2 then a length 3 end to end, reaching 5.</p>
              <p>(c) From 5, step back 2, leaving 3.</p>
              <p>(d) Three jumps of 2 reach 6, the same as a 2 by 3 rectangle of area 6.</p>
              <p>
                (e) A rectangle of area 6 with one side 2 has the other side {`$6 \\div 2 = 3$`}.
              </p>
            </>
          )
        },
        {
          id: 'B2',
          marks: 10,
          prompt: (
            <>
              (a) Convert 213 (base 10) to base 2 by repeated division, showing remainders. (b)
              Convert 1101101 (base 2) to base 10. (c) Convert 213 (base 10) to base 5.
            </>
          ),
          answer: (
            <>
              <p>(a) Repeated division by 2 gives {`$213 = 11010101_2$`}.</p>
              <p>(b) {`$64 + 32 + 8 + 4 + 1 = 109$`}.</p>
              <p>(c) Repeated division by 5 gives {`$213 = 1323_5$`}.</p>
            </>
          )
        },
        {
          id: 'B3',
          marks: 12,
          prompt: (
            <>
              Work entirely in base 2: (a) {`$1011 + 1101$`}. (b) {`$1000 - 11$`}. (c){' '}
              {`$101 \\times 11$`}. (d) {`$1110 \\div 10$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$1011 + 1101 = 11000_2$`} (which is 11 + 13 = 24).</p>
              <p>(b) {`$1000 - 11 = 101_2$`} (8 − 3 = 5).</p>
              <p>(c) {`$101 \\times 11 = 1111_2$`} (5 × 3 = 15).</p>
              <p>(d) {`$1110 \\div 10 = 111_2$`} (14 ÷ 2 = 7).</p>
            </>
          )
        },
        {
          id: 'B4',
          marks: 10,
          prompt: (
            <>
              Calculator allowed. A length is measured as 4.736 m. (a) Round to 1 decimal place and
              to 2 significant figures. (b) Taking 4.736 as true and the 1-dp value as the
              approximation, find the absolute error and the relative error as a percent. (c)
              Estimate {`$41.3 \\div (9.79 \\times 0.765)$`} by rounding each to 1 significant
              figure.
            </>
          ),
          answer: (
            <>
              <p>(a) 4.7 m to 1 decimal place, and 4.7 m to 2 significant figures.</p>
              <p>
                (b) Absolute error {`$|4.736 - 4.7| = 0.036$`}. Relative error{' '}
                {`$\\frac{0.036}{4.736} \\approx 0.76\\%$`}.
              </p>
              <p>(c) {`$40 \\div (10 \\times 0.8) = 40 \\div 8 = 5$`}.</p>
            </>
          )
        },
        {
          id: 'B5',
          marks: 12,
          prompt: (
            <>
              (a) At 06:00 it is −7 °C; it rises 11 °C by noon, then falls 4 °C by 18:00. Find the
              18:00 temperature. (b) An account is overdrawn by €120; a €200 deposit then a €95
              withdrawal occur. Find the balance. (c) A diver at −18 m descends 7 m then ascends 25
              m. Find the new elevation. (d) A golfer scores +2, −1, −3, +1 to par. Find the total
              to par.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$-7 + 11 - 4 = 0$`} °C.</p>
              <p>(b) {`$-120 + 200 - 95 = -€15$`} (still €15 overdrawn).</p>
              <p>(c) {`$-18 - 7 + 25 = 0$`} m.</p>
              <p>(d) {`$2 - 1 - 3 + 1 = -1$`}, that is 1 under par.</p>
            </>
          )
        },
        {
          id: 'B6',
          marks: 8,
          prompt: (
            <>
              Using a number-line movement diagram for each, evaluate and name which sign-case
              applies: (a) {`$(+4) + (+3)$`}; (b) {`$(-4) + (-3)$`}; (c) {`$(+4) + (-7)$`}; (d){' '}
              {`$(-4) + (+7)$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) +7, positive plus positive.</p>
              <p>(b) −7, negative plus negative.</p>
              <p>(c) −3, mixed signs.</p>
              <p>(d) +3, mixed signs.</p>
            </>
          )
        },
        {
          id: 'B7',
          marks: 10,
          prompt: (
            <>
              (a) Plot {`$p = 3$`} and its mirror reflection {`$p^*$`} across 0; state {`$p^*$`}.
              (b) Represent (+5) and (−2) as vectors and add them tip-to-tail; state the resultant.
              (c) Represent {`$(-5) + (+5)$`}; state the sum of opposites and name the zero vector.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$p^* = -3$`}, the reflection of 3 across 0.</p>
              <p>(b) Place +5 then −2 tip-to-tail; the resultant is +3.</p>
              <p>
                (c) {`$(-5) + (+5) = 0$`}. Opposites sum to the zero vector, which has no length.
              </p>
              <VectorSumFig />
            </>
          )
        },
        {
          id: 'B8',
          marks: 10,
          prompt: (
            <>
              Evaluate, stating the sign rule used: (a) {`$(-6) \\times (+4)$`}; (b){' '}
              {`$(-7) \\times (-3)$`}; (c) {`$(+20) \\div (-5)$`}; (d){' '}
              {`$\\left(-\\frac{3}{4}\\right) \\times \\left(-\\frac{8}{9}\\right)$`}; (e){' '}
              {`$\\left(-\\frac{2}{3}\\right) \\div \\left(+\\frac{4}{9}\\right)$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) −24 (negative × positive = negative).</p>
              <p>(b) +21 (negative × negative = positive).</p>
              <p>(c) −4 (positive ÷ negative = negative).</p>
              <p>(d) {`$\\frac{24}{36} = \\frac{2}{3}$`} (negative × negative = positive).</p>
              <p>
                (e) {`$-\\frac{2}{3} \\times \\frac{9}{4} = -\\frac{3}{2}$`} (invert and multiply).
              </p>
            </>
          )
        },
        {
          id: 'B9',
          marks: 9,
          prompt: (
            <>
              (a) Rewrite {`$12 - (-5)$`} as an addition and evaluate. (b) Simplify{' '}
              {`$-(3 - 8 + 2)$`}. (c) Verify {`$a - (b - c) = a - b + c$`} for {`$a = 10$`},{' '}
              {`$b = 4$`}, {`$c = 6$`}. (d) Expand {`$-3(x - 5)$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$12 - (-5) = 12 + 5 = 17$`}.</p>
              <p>(b) {`$-(3 - 8 + 2) = -3 + 8 - 2 = 3$`}.</p>
              <p>
                (c) Left: {`$10 - (4 - 6) = 10 - (-2) = 12$`}. Right: {`$10 - 4 + 6 = 12$`}. They
                match.
              </p>
              <p>(d) {`$-3(x - 5) = -3x + 15$`}.</p>
            </>
          )
        },
        {
          id: 'B10',
          marks: 6,
          prompt: (
            <>
              Calculator allowed. Light speed is quoted as {`$c = (2.998 \\pm 0.003) \\times 10^8$`}{' '}
              m/s. (a) Write this as an absolute-value inequality. (b) State the lower and upper
              bounds. (c) Express the tolerance as a relative error percent.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$|c - 2.998 \\times 10^8| \\le 0.003 \\times 10^8$`}.</p>
              <p>
                (b) Lower {`$2.995 \\times 10^8$`} m/s, upper {`$3.001 \\times 10^8$`} m/s.
              </p>
              <p>(c) {`$\\frac{0.003}{2.998} \\approx 0.10\\%$`}.</p>
            </>
          )
        },
        {
          id: 'B11',
          marks: 8,
          prompt: (
            <>
              (a) Tabulate {`$|x + y|$`} and {`$|x| + |y|$`} for (3,5), (−3,5), (−3,−5); state when
              they are equal. (b) Check{' '}
              {`$(a_1 b_1 + a_2 b_2)^2 \\le (a_1^2 + a_2^2)(b_1^2 + b_2^2)$`} for (1,2) and (3,4);
              state whether equality holds. (c) Give the equality condition for the triangle
              inequality.
            </>
          ),
          answer: (
            <>
              <p>
                (a) (3,5): both 8. (−3,5): {`$|x+y| = 2$`} but {`$|x|+|y| = 8$`}. (−3,−5): both 8.
                They are equal when x and y have the same sign.
              </p>
              <p>
                (b) Left {`$(3 + 8)^2 = 121$`}; right {`$(1 + 4)(9 + 16) = 125$`}. Since{' '}
                {`$121 \\le 125$`}, it holds, and equality does not.
              </p>
              <p>
                (c) Equality holds when the two numbers have the same sign, or one of them is zero.
              </p>
            </>
          )
        },
        {
          id: 'B12',
          marks: 6,
          prompt: (
            <>
              (a) Order least to greatest: {`$-\\frac{3}{2}$`}, {`$-\\frac{5}{4}$`}, {`$|-1|$`},{' '}
              {`$(-1)^3$`}, 0.6. (b) Evaluate {`$\\left(-\\frac{2}{3}\\right)^2$`}. (c) Evaluate{' '}
              {`$\\left|-\\frac{7}{2}\\right| - \\left|\\frac{3}{2}\\right|$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$-\\frac{3}{2} < -\\frac{5}{4} < (-1)^3 < 0.6 < |-1|$`} (that is{' '}
                {`$-1.5 < -1.25 < -1 < 0.6 < 1$`}).
              </p>
              <p>(b) {`$\\frac{4}{9}$`}.</p>
              <p>(c) {`$\\frac{7}{2} - \\frac{3}{2} = 2$`}.</p>
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneRationalNumbers() {
  const config = {
    documentTitle: 'Rational Numbers Exam - AETHER',
    briefing: {
      title: 'Rational Numbers',
      concepts: [
        'Number Line and Number Systems',
        'Integers and Negative Numbers',
        'Operations on Signed Rationals',
        'Opposite Numbers and Absolute Value'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
