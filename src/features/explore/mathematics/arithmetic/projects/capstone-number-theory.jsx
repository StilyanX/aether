import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { FONT_CONTROL, FONT_LABEL, FONT_TEX } from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// B2: Sieve of Eratosthenes over 2–30. Primes are kept; composites are struck.
function SieveFig() {
  const C = useVizColors()
  const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
  const nums = Array.from({ length: 29 }, (_, i) => i + 2)
  return (
    <div style={{ margin: '12px 0 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 34px)', gap: 4 }}>
          {nums.map(n => {
            const prime = primes.has(n)
            return (
              <div
                key={n}
                style={{
                  width: 34,
                  height: 32,
                  lineHeight: '32px',
                  textAlign: 'center',
                  fontSize: FONT_CONTROL,
                  fontFamily: FONT,
                  color: prime ? C.fg : C.dim,
                  border: prime ? `1px solid ${C.fg}` : `1px solid ${C.faint}`,
                  textDecoration: prime ? 'none' : 'line-through'
                }}
              >
                {n}
              </div>
            )
          })}
        </div>
        <div
          style={{
            fontSize: FONT_LABEL,
            color: C.dim,
            textAlign: 'center',
            marginTop: 6,
            fontFamily: FONT
          }}
        >
          boxed = prime · struck = composite
        </div>
      </div>
    </div>
  )
}

// B3: factor tree for 720. Each composite splits into a prime (left) and a
// smaller composite (down), ending at 720 = 2⁴ × 3² × 5.
function FactorTreeFig() {
  const C = useVizColors()
  // [x, y, value, isPrime]
  const nodes = [
    [205, 28, '720', false],
    [120, 72, '2', true],
    [205, 72, '360', false],
    [120, 116, '2', true],
    [205, 116, '180', false],
    [120, 160, '2', true],
    [205, 160, '90', false],
    [120, 204, '2', true],
    [205, 204, '45', false],
    [120, 248, '5', true],
    [205, 248, '9', false],
    [120, 292, '3', true],
    [205, 292, '3', true]
  ]
  // parent index -> [leftChildIdx, rightChildIdx]
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
        aria-label="Factor tree for 720 ending in primes two, two, two, two, three, three and five"
        style={{ display: 'block', width: '100%', maxWidth: 260, height: 'auto', margin: '0 auto' }}
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
          720 = 2⁴ × 3² × 5
        </text>
      </svg>
    </div>
  )
}

// B8: two flash schedules on one axis; the first shared flash is at 36 s.
function LighthouseFig() {
  const C = useVizColors()
  const x0 = 34
  const x1 = 338
  const span = 72
  const sx = v => x0 + (v / span) * (x1 - x0)
  const aFlashes = [12, 24, 36, 48, 60, 72]
  const bFlashes = [18, 36, 54, 72]
  const together = [36, 72]
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 360 150"
        role="img"
        aria-label="Two flash schedules, every 12 and every 18 seconds, first aligning at 36 seconds"
        style={{ display: 'block', width: '100%', maxWidth: 360, height: 'auto', margin: '0 auto' }}
      >
        {together.map(t => (
          <line
            key={t}
            x1={sx(t)}
            y1={36}
            x2={sx(t)}
            y2={104}
            stroke={C.fg}
            strokeWidth={1}
            strokeDasharray="3 3"
          />
        ))}

        <line x1={x0} y1={48} x2={x1} y2={48} stroke={C.dim} strokeWidth={1.5} />
        {aFlashes.map(t => (
          <circle key={t} cx={sx(t)} cy={48} r={3} fill={C.fg} />
        ))}
        <text
          x={x0 - 6}
          y={52}
          textAnchor="end"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          A
        </text>

        <line x1={x0} y1={92} x2={x1} y2={92} stroke={C.dim} strokeWidth={1.5} />
        {bFlashes.map(t => (
          <circle key={t} cx={sx(t)} cy={92} r={3} fill={C.fg} />
        ))}
        <text
          x={x0 - 6}
          y={96}
          textAnchor="end"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          B
        </text>

        {together.map(t => (
          <text
            key={t}
            x={sx(t)}
            y={28}
            textAnchor="middle"
            fill={C.fg}
            fontSize={FONT_LABEL}
            fontFamily={FONT}
          >
            {t}s
          </text>
        ))}
        <text
          x={(sx(36) + sx(0)) / 2}
          y={130}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          LCM(12, 18) = 36 s
        </text>
      </svg>
    </div>
  )
}

// B11: the 5–12–13 right triangle from m = 3, n = 2.
function PythagFig() {
  const C = useVizColors()
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 240 170"
        role="img"
        aria-label="Right triangle with legs 5 and 12 and hypotenuse 13"
        style={{ display: 'block', width: '100%', maxWidth: 240, height: 'auto', margin: '0 auto' }}
      >
        <polygon points="40,140 200,140 40,74" fill={C.faint} stroke={C.fg} strokeWidth={1.5} />
        <rect x={40} y={126} width={14} height={14} fill="none" stroke={C.fg} strokeWidth={1} />
        <text
          x={120}
          y={158}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
          fontFamily={FONT}
        >
          12
        </text>
        <text x={30} y={111} textAnchor="end" fill={C.dim} fontSize={FONT_TEX} fontFamily={FONT}>
          5
        </text>
        <text x={128} y={100} textAnchor="middle" fill={C.fg} fontSize={FONT_TEX} fontFamily={FONT}>
          13
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
      meta: '50 marks · 60 minutes · no calculator',
      questions: [
        {
          id: 'A1',
          marks: 4,
          prompt: (
            <>
              (a) Write 360 as a product of its prime factors in index notation. (b) State what "m
              is a multiple of d" means, using the idea of a factor. (c) Using factor pairs, explain
              why you only test factors up to {`$\\sqrt{n}$`} when listing all factors of n.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$360 = 2^3 \\times 3^2 \\times 5$`}.</p>
              <p>
                (b) It means d is a factor of m. So {`$m = d \\times k$`} for some whole number k.
              </p>
              <p>
                (c) Factors come in pairs {`$a \\times b = n$`}. If {`$a > \\sqrt{n}$`} then its
                partner {`$b < \\sqrt{n}$`}. Every large factor pairs with a small one already
                found.
              </p>
            </>
          )
        },
        {
          id: 'A2',
          marks: 5,
          prompt: <>Prove that there is no largest prime number.</>,
          answer: (
            <>
              <p>
                Suppose only finitely many primes exist: {`$p_1, p_2, \\ldots, p_n$`}. Form{' '}
                {`$N = p_1 p_2 \\cdots p_n + 1$`}.
              </p>
              <p>
                Dividing N by any {`$p_i$`} leaves remainder 1. So no listed prime divides N. Then N
                is prime, or it has a prime factor not in the list.
              </p>
              <p>
                Either way a new prime exists. This contradicts the list being complete. So the
                primes never end.
              </p>
            </>
          )
        },
        {
          id: 'A3',
          marks: 4,
          prompt: (
            <>
              (a) State the Fundamental Theorem of Arithmetic, mentioning both existence and
              uniqueness. (b) A student writes "1 is prime." Explain why 1 is neither prime nor
              composite, and why excluding 1 makes the uniqueness work.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Every whole number above 1 is a product of primes (existence). That product is
                unique apart from the order of the factors (uniqueness).
              </p>
              <p>
                (b) 1 has only one factor, itself. So it fits neither definition. If 1 were prime,
                you could insert extra 1s into any factorisation, and uniqueness would break.
              </p>
            </>
          )
        },
        {
          id: 'A4',
          marks: 6,
          prompt: (
            <>
              (a) Show that the divisibility rule for 9 works for any number with three digits a, b,
              c (value {`$100a + 10b + c$`}). (b) Explain why this uses the fact that{' '}
              {`$10 \\equiv 1 \\pmod 9$`}, and say briefly why an easy rule for 7 does not arise the
              same way.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$100a + 10b + c = 99a + 9b + (a + b + c)$`}. The part {`$99a + 9b$`} is
                divisible by 9. So the number is divisible by 9 exactly when {`$a + b + c$`} is.
              </p>
              <p>
                (b) 10, 100, and 1000 are all {`$\\equiv 1 \\pmod 9$`}, so each digit contributes
                just its own value. For 7 the powers of 10 cycle through 1, 3, 2, 6, 4, 5 with no
                steady pattern. So any rule for 7 is as much work as dividing.
              </p>
            </>
          )
        },
        {
          id: 'A5',
          marks: 5,
          prompt: (
            <>
              (a) The sum–difference lemma says: if d divides a and d divides b, then d divides{' '}
              {`$a + b$`} and {`$a - b$`}. Prove this using letters. (b) Use transitivity of
              divisibility to explain why every number divisible by 6 is divisible by 3.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Suppose {`$a = dm$`} and {`$b = dn$`}. Then {`$a + b = d(m + n)$`} and{' '}
                {`$a - b = d(m - n)$`}. Both {`$m + n$`} and {`$m - n$`} are whole numbers. So d
                divides both.
              </p>
              <p>
                (b) Note {`$6 = 2 \\times 3$`}, so 3 divides 6. If {`$6 \\mid x$`} then{' '}
                {`$x = 6k = 3(2k)$`}, so 3 divides x.
              </p>
            </>
          )
        },
        {
          id: 'A6',
          marks: 5,
          prompt: (
            <>
              Explain why a perfect square has an odd number of factors, while a non-square has an
              even number. Refer to factor pairs and to the rule for exponents in a prime
              factorisation.
            </>
          ),
          answer: (
            <>
              <p>
                Factors pair up as {`$a \\times b = n$`}, normally an even count. In a perfect
                square one pair has {`$a = b = \\sqrt{n}$`}, counted once. That makes the total odd.
              </p>
              <p>
                With {`$n = p_1^{e_1} \\cdots p_k^{e_k}$`}, the factor count is{' '}
                {`$(e_1 + 1) \\cdots (e_k + 1)$`}. A number is a perfect square exactly when every{' '}
                {`$e_i$`} is even. Then every {`$(e_i + 1)$`} is odd, so the product is odd. A
                non-square has some odd {`$e_i$`}, giving an even count.
              </p>
            </>
          )
        },
        {
          id: 'A7',
          marks: 5,
          prompt: (
            <>
              (a) Using prime factorisation with smallest and largest exponents, explain why{' '}
              {`$\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$`}. (b) Two numbers have
              HCF 12 and LCM 72. One number is 24. Find the other, showing your reasoning.
            </>
          ),
          answer: (
            <>
              <p>
                (a) For each prime, the HCF takes the smaller exponent and the LCM takes the larger.
                For any two exponents, {`$\\min(x, y) + \\max(x, y) = x + y$`}. So multiplying HCF
                by LCM restores every exponent, giving {`$a \\times b$`}.
              </p>
              <p>(b) Other {`$= (12 \\times 72) / 24 = 864 / 24 = 36$`}.</p>
            </>
          )
        },
        {
          id: 'A8',
          marks: 6,
          prompt: (
            <>
              Prove that {`$\\sqrt{2}$`} is irrational. Then explain in one sentence why the same
              "primes must pair up" idea shows {`$\\sqrt{n}$`} is irrational whenever n is not a
              perfect square.
            </>
          ),
          answer: (
            <>
              <p>
                Suppose {`$\\sqrt{2} = a/b$`} in lowest terms. Then {`$2b^2 = a^2$`}, so {`$a^2$`}{' '}
                is even, so a is even. Write {`$a = 2c$`}.
              </p>
              <p>
                Then {`$2b^2 = 4c^2$`}, so {`$b^2 = 2c^2$`}, so b is even too. But then a and b
                share the factor 2, contradicting lowest terms. So {`$\\sqrt{2}$`} is irrational.
              </p>
              <p>
                In a perfect square every prime appears an even number of times; if n is not a
                perfect square some prime appears an odd number of times, so {`$\\sqrt{n}$`} cannot
                be a rational squared.
              </p>
            </>
          )
        },
        {
          id: 'A9',
          marks: 4,
          prompt: (
            <>
              (a) Without dividing, state which of {`$7/40$`}, {`$5/12$`}, {`$3/25$`}, {`$11/14$`}{' '}
              give terminating decimals and which recur. (b) Explain the rule you used.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Terminating: {`$7/40$`} and {`$3/25$`}. Recurring: {`$5/12$`} and {`$11/14$`}.
              </p>
              <p>
                (b) A fraction in lowest terms terminates exactly when its denominator has only the
                prime factors 2 and 5. Base ten is {`$2 \\times 5$`}, so only factors of a power of
                ten divide exactly.
              </p>
            </>
          )
        },
        {
          id: 'A10',
          marks: 6,
          prompt: (
            <>
              (a) State the twin-primes conjecture and Goldbach's conjecture, and say what "open"
              means. (b) Explain briefly why prime factorisation being hard for very large numbers
              is what makes RSA encryption secure. (c) Show how {`$5! + 2$`}, {`$5! + 3$`},{' '}
              {`$5! + 4$`}, {`$5! + 5$`} form a run of consecutive composite numbers, and say why.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Twin-primes conjecture: there are infinitely many prime pairs that differ by 2.
                Goldbach's conjecture: every even number above 2 is a sum of two primes. "Open"
                means no one has proved or disproved them yet.
              </p>
              <p>
                (b) Multiplying two large primes is easy, but recovering them from the product is
                extremely hard. The public key uses the product; the private key needs the factors.
              </p>
              <p>
                (c) {`$5! = 120$`}, and {`$5! + k$`} is divisible by k for {`$k = 2, 3, 4, 5$`},
                since 120 already contains each. So 122, 123, 124, 125 are all composite.
              </p>
            </>
          )
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical and Applied',
      meta: '54 marks · 60 minutes · calculator allowed',
      questions: [
        {
          id: 'B1',
          marks: 4,
          prompt: (
            <>
              List all factors of 84 by writing factor pairs in order, then state how many factors
              84 has.
            </>
          ),
          answer: (
            <>
              <p>
                Pairs: {`$1 \\times 84$`}, {`$2 \\times 42$`}, {`$3 \\times 28$`},{' '}
                {`$4 \\times 21$`}, {`$6 \\times 14$`}, {`$7 \\times 12$`}.
              </p>
              <p>Factors: 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84. So 84 has 12 factors.</p>
            </>
          )
        },
        {
          id: 'B2',
          marks: 4,
          prompt: (
            <>
              Using the Sieve of Eratosthenes on the numbers 2–30, list all primes. Explain which
              multiples you cross out and when you can stop.
            </>
          ),
          answer: (
            <>
              <p>Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.</p>
              <p>
                Cross out the multiples of each prime, starting at its square. Stop after 5, because{' '}
                {`$\\sqrt{30} < 6$`}. Any composite up to 30 has a factor of 5 or less.
              </p>
              <SieveFig />
            </>
          )
        },
        {
          id: 'B3',
          marks: 5,
          prompt: (
            <>
              (a) Express 720 as a product of prime factors in index notation, using a factor tree.
              (b) Hence find the number of factors of 720 from the exponents.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$720 = 2^4 \\times 3^2 \\times 5$`}.</p>
              <p>
                (b) Number of factors {`$= (4 + 1)(2 + 1)(1 + 1) = 5 \\times 3 \\times 2 = 30$`}.
              </p>
              <FactorTreeFig />
            </>
          )
        },
        {
          id: 'B4',
          marks: 6,
          prompt: (
            <>
              Given {`$504 = 2^3 \\times 3^2 \\times 7$`} and {`$540 = 2^2 \\times 3^3 \\times 5$`}:
              (a) find HCF(504, 540) in index form, (b) find LCM(504, 540) in index form, (c) verify
              that {`$\\text{HCF} \\times \\text{LCM} = 504 \\times 540$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) HCF: smallest exponent on each shared prime. {`$= 2^2 \\times 3^2 = 36$`}.</p>
              <p>
                (b) LCM: largest exponent on every prime.{' '}
                {`$= 2^3 \\times 3^3 \\times 5 \\times 7 = 7560$`}.
              </p>
              <p>
                (c) {`$36 \\times 7560 = 272160$`} and {`$504 \\times 540 = 272160$`}. They match.
              </p>
            </>
          )
        },
        {
          id: 'B5',
          marks: 5,
          prompt: (
            <>
              (a) Use the Euclidean Algorithm to find HCF(1071, 462), showing each division step
              with its quotient and remainder. (b) Hence write {`$1071/462$`} in lowest terms.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$1071 = 2 \\times 462 + 147$`}
                <br />
                {`$462 = 3 \\times 147 + 21$`}
                <br />
                {`$147 = 7 \\times 21 + 0$`}
                <br />
                So HCF {`$= 21$`}.
              </p>
              <p>
                (b) {`$1071 \\div 21 = 51$`} and {`$462 \\div 21 = 22$`}, so {`$1071/462 = 51/22$`}.
              </p>
            </>
          )
        },
        {
          id: 'B6',
          marks: 5,
          prompt: (
            <>
              (a) Using divisibility rules, not full division, test whether 3168 is divisible by
              each of 4, 8, 9, and 11, stating the check each time. (b) Find the digit d so that{' '}
              {`$72d6$`} is divisible by 3. Give all possible values.
            </>
          ),
          answer: (
            <>
              <p>
                (a) By 4: last two digits 68, and {`$68 \\div 4 = 17$`}. Yes. By 8: last three
                digits 168, and {`$168 \\div 8 = 21$`}. Yes. By 9: digit sum{' '}
                {`$3 + 1 + 6 + 8 = 18$`}, divisible by 9. Yes. By 11: alternating sum{' '}
                {`$8 - 6 + 1 - 3 = 0$`}, divisible by 11. Yes.
              </p>
              <p>
                (b) Digit sum is {`$7 + 2 + d + 6 = 15 + d$`}. This is divisible by 3 when{' '}
                {`$d = 0, 3, 6, 9$`}.
              </p>
            </>
          )
        },
        {
          id: 'B7',
          marks: 4,
          prompt: (
            <>
              When a number is divided by 7 the quotient is 13 and the remainder is 5. (a) Using{' '}
              {`$a = qd + r$`}, find the number. (b) State the possible values of a remainder when
              dividing by 7, and why.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$a = 13 \\times 7 + 5 = 91 + 5 = 96$`}.</p>
              <p>
                (b) Possible remainders: 0, 1, 2, 3, 4, 5, 6. The remainder must be a whole number
                less than the divisor 7.
              </p>
            </>
          )
        },
        {
          id: 'B8',
          marks: 6,
          prompt: (
            <>
              Two lighthouses flash at regular intervals: one every 12 seconds, the other every 18
              seconds. They flash together at 8:00:00. (a) After how many seconds do they next flash
              together? (b) How many times in the next 6 minutes, not counting 8:00:00, do they
              flash together?
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$12 = 2^2 \\times 3$`} and {`$18 = 2 \\times 3^2$`}. LCM{' '}
                {`$= 2^2 \\times 3^2 = 36$`} seconds.
              </p>
              <p>
                (b) 6 minutes {`$= 360$`} seconds. {`$360 \\div 36 = 10$`}. They flash together 10
                times.
              </p>
              <LighthouseFig />
            </>
          )
        },
        {
          id: 'B9',
          marks: 5,
          prompt: (
            <>
              A florist has 168 roses and 252 tulips and wants identical bunches with no flowers
              left over. (a) Find the largest number of bunches. (b) How many of each flower are in
              one bunch, and are those two counts coprime? Justify.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$168 = 2^3 \\times 3 \\times 7$`} and {`$252 = 2^2 \\times 3^2 \\times 7$`}.
                HCF {`$= 2^2 \\times 3 \\times 7 = 84$`} bunches.
              </p>
              <p>
                (b) Each bunch has {`$168 \\div 84 = 2$`} roses and {`$252 \\div 84 = 3$`} tulips. 2
                and 3 share no factor above 1, so they are coprime.
              </p>
            </>
          )
        },
        {
          id: 'B10',
          marks: 5,
          prompt: (
            <>
              (a) Convert the recurring decimal {`$0.\\overline{45}$`} (45 repeating) to a fraction
              in lowest terms, showing the algebra. (b) Write {`$7/8$`} as a decimal and state
              whether it terminates, giving the reason from its denominator.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Let {`$x = 0.4545\\ldots$`} Then {`$100x = 45.4545\\ldots$`} Subtract:{' '}
                {`$99x = 45$`}, so {`$x = 45/99 = 5/11$`}.
              </p>
              <p>
                (b) {`$7/8 = 0.875$`}. It terminates because {`$8 = 2^3$`} has only the prime factor
                2.
              </p>
            </>
          )
        },
        {
          id: 'B11',
          marks: 5,
          prompt: (
            <>
              The recipe {`$a = m^2 - n^2$`}, {`$b = 2mn$`}, {`$c = m^2 + n^2$`} (with{' '}
              {`$m > n > 0$`}) generates Pythagorean triples. (a) Use {`$m = 3$`}, {`$n = 2$`} to
              generate a triple and verify {`$a^2 + b^2 = c^2$`}. (b) Find the triple from{' '}
              {`$m = 4$`}, {`$n = 1$`}.
              <PythagFig />
            </>
          ),
          answer: (
            <>
              <p>
                (a) With {`$m = 3$`}, {`$n = 2$`}: {`$a = 9 - 4 = 5$`},{' '}
                {`$b = 2 \\times 3 \\times 2 = 12$`}, {`$c = 9 + 4 = 13$`}. Check:{' '}
                {`$25 + 144 = 169 = 13^2$`}.
              </p>
              <p>
                (b) With {`$m = 4$`}, {`$n = 1$`}: {`$a = 16 - 1 = 15$`},{' '}
                {`$b = 2 \\times 4 \\times 1 = 8$`}, {`$c = 16 + 1 = 17$`}. The triple is (8, 15,
                17).
              </p>
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneNumberTheory() {
  const config = {
    documentTitle: 'Number Theory Exam - AETHER',
    briefing: {
      title: 'Number Theory',
      concepts: [
        'Prime Numbers and Prime Factorisation',
        'Divisibility Tests',
        'HCF and LCM',
        'Irrational Numbers and the Real-Number System'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
