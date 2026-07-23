import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { FONT_CONTROL, FONT_LABEL } from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A11: constant second difference for 3, 8, 15, 24, 35.
function SecondDiffFig() {
  const C = useVizColors()
  const terms = [3, 8, 15, 24, 35]
  const first = [5, 7, 9, 11]
  const second = [2, 2, 2]
  const Row = ({ label, vals, gap, accent }) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
      <div style={{ width: 70, fontSize: FONT_LABEL, color: C.dim, fontFamily: FONT }}>{label}</div>
      <div style={{ display: 'flex', marginLeft: gap }}>
        {vals.map((v, i) => (
          <div
            key={i}
            style={{
              width: 54,
              textAlign: 'center',
              fontSize: FONT_CONTROL,
              fontFamily: FONT,
              color: accent ? C.fg : C.dim
            }}
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  )
  return (
    <div style={{ margin: '12px 0 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'inline-block' }}>
        <Row label="term" vals={terms} gap={0} />
        <Row label="1st diff" vals={first} gap={27} />
        <Row label="2nd diff" vals={second} gap={54} accent />
        <div
          style={{
            fontSize: FONT_LABEL,
            color: C.dim,
            textAlign: 'center',
            marginTop: 6,
            fontFamily: FONT
          }}
        >
          2nd difference is constant 2, so tₙ = n² + 2n
        </div>
      </div>
    </div>
  )
}

// B1: a row of squares built from matchsticks: tₙ = 3n + 1.
function MatchstickFig() {
  const C = useVizColors()
  const n = 4
  const s = 34
  const x0 = 24
  const y0 = 30
  const lines = []
  // shared verticals
  for (let i = 0; i <= n; i++) {
    lines.push(
      <line
        key={`v${i}`}
        x1={x0 + i * s}
        y1={y0}
        x2={x0 + i * s}
        y2={y0 + s}
        stroke={C.fg}
        strokeWidth={1.5}
      />
    )
  }
  // top and bottom horizontals
  for (let i = 0; i < n; i++) {
    lines.push(
      <line
        key={`t${i}`}
        x1={x0 + i * s}
        y1={y0}
        x2={x0 + (i + 1) * s}
        y2={y0}
        stroke={C.fg}
        strokeWidth={1.5}
      />
    )
    lines.push(
      <line
        key={`b${i}`}
        x1={x0 + i * s}
        y1={y0 + s}
        x2={x0 + (i + 1) * s}
        y2={y0 + s}
        stroke={C.fg}
        strokeWidth={1.5}
      />
    )
  }
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 360 110"
        role="img"
        aria-label="Four squares in a row sharing sides, built from matchsticks"
        style={{ display: 'block', width: '100%', maxWidth: 340, height: 'auto', margin: '0 auto' }}
      >
        {lines}
        <text
          x={180}
          y={96}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          first square 4 sticks, each new square adds 3 → tₙ = 3n + 1
        </text>
      </svg>
    </div>
  )
}

// B2: odd numbers as L-shaped gnomons wrapping into an n × n square.
function OddSquareFig() {
  const C = useVizColors()
  const n = 5
  const g = 26
  const x0 = 90
  const y0 = 12
  const dots = []
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const layer = Math.max(r, c) // gnomon index 0..n-1
      const shade = layer % 2 === 0
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={x0 + c * g}
          cy={y0 + r * g}
          r={7}
          fill={shade ? C.fg : C.faint}
          stroke={C.fg}
          strokeWidth={1}
        />
      )
    }
  }
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 340 170"
        role="img"
        aria-label="A 5 by 5 grid of dots split into L-shaped layers of 1, 3, 5, 7 and 9"
        style={{ display: 'block', width: '100%', maxWidth: 300, height: 'auto', margin: '0 auto' }}
      >
        {dots}
        <text
          x={170}
          y={160}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          1 + 3 + 5 + 7 + 9 = 5² = 25
        </text>
      </svg>
    </div>
  )
}

// B3: two triangular staircases fill an n × (n+1) rectangle: Tₙ = n(n+1)/2.
function TriangularFig() {
  const C = useVizColors()
  const n = 4
  const g = 26
  const x0 = 60
  const y0 = 12
  const dots = []
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n + 1; c++) {
      // staircase A: columns 0..r ; staircase B: the rest
      const inA = c <= r
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={x0 + c * g}
          cy={y0 + r * g}
          r={7}
          fill={inA ? C.fg : C.faint}
          stroke={C.fg}
          strokeWidth={1}
        />
      )
    }
  }
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 320 150"
        role="img"
        aria-label="Two triangular staircases of dots filling a 4 by 5 rectangle"
        style={{ display: 'block', width: '100%', maxWidth: 300, height: 'auto', margin: '0 auto' }}
      >
        {dots}
        <text
          x={160}
          y={138}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          two Tₙ fill an n × (n+1) box, so Tₙ = n(n+1)/2
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
      meta: '60 marks · calculator allowed',
      questions: [
        {
          id: 'A1',
          marks: 3,
          prompt: (
            <>
              (a) Explain what is meant by a sequence and by a term. (b) Explain what the notation{' '}
              {`$t_n$`} (or {`$a_n$`}) means.
            </>
          ),
          answer: (
            <>
              <p>
                (a) A sequence is an ordered list of numbers that follows a rule. A term is each
                number in the list.
              </p>
              <p>(b) {`$t_n$`} means the term in position n.</p>
            </>
          )
        },
        {
          id: 'A2',
          marks: 4,
          prompt: (
            <>
              (a) For 5, 8, 11, 14, … state the term-to-term rule and write the next two terms. (b)
              For 80, 40, 20, … state the term-to-term rule. (c) Is "+3" a recursive or an explicit
              rule?
            </>
          ),
          answer: (
            <>
              <p>(a) Add 3 each time. Next terms 17 and 20.</p>
              <p>(b) Divide by 2 each time.</p>
              <p>(c) Recursive.</p>
            </>
          )
        },
        {
          id: 'A3',
          marks: 3,
          prompt: (
            <>
              Fill in the gaps in 4, 7, __, 13, __, 19 using first differences, and state the common
              difference.
            </>
          ),
          answer: <p>The common difference is 3. The gaps are 10 and 16.</p>
        },
        {
          id: 'A4',
          marks: 4,
          prompt: (
            <>
              (a) A Fibonacci-type sequence starts 2, 5 (each term is the sum of the two before).
              Write the next four terms. (b) A different Fibonacci-type sequence has 4th term 10 and
              5th term 16. Work backwards to find its first two terms.
            </>
          ),
          answer: (
            <>
              <p>(a) 7, 12, 19, 31.</p>
              <p>
                (b) The 3rd term is {`$16 - 10 = 6$`}, the 2nd is {`$10 - 6 = 4$`}, the 1st is{' '}
                {`$6 - 4 = 2$`}. So 2, 4.
              </p>
            </>
          )
        },
        {
          id: 'A5',
          marks: 3,
          prompt: (
            <>
              (a) A sequence obeys {`$t_{n+1} = t_n^2 - 1$`} with {`$t_1 = 2$`}. Find {`$t_2$`} and{' '}
              {`$t_3$`}. (b) Write the sequence whose nth term is the number of letters in the words
              "one, two, three, four, five".
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$t_2 = 2^2 - 1 = 3$`}, then {`$t_3 = 3^2 - 1 = 8$`}.
              </p>
              <p>(b) 3, 3, 5, 4, 4.</p>
            </>
          )
        },
        {
          id: 'A6',
          marks: 2,
          prompt: (
            <>
              Classify each rule as recursive or explicit: (i) {`$t_n = 3n + 2$`}; (ii){' '}
              {`$t_{n+1} = t_n + 4$`}.
            </>
          ),
          answer: <p>(i) Explicit. (ii) Recursive.</p>
        },
        {
          id: 'A7',
          marks: 4,
          prompt: (
            <>
              For 7, 12, 17, 22, … build a three-column mapping (n | 5n | term), find the offset,
              write {`$t_n$`}, and find {`$t_{20}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                The 5n column is 5, 10, 15, 20, always 2 less than the term. So the offset is +2.
              </p>
              <p>
                {`$t_n = 5n + 2$`}, and {`$t_{20} = 5 \\times 20 + 2 = 102$`}.
              </p>
            </>
          )
        },
        {
          id: 'A8',
          marks: 3,
          prompt: (
            <>
              A linear sequence has first term {`$t_1$`} and constant addition a. Explain why{' '}
              {`$t_n = t_1 + (n - 1)a$`}.
            </>
          ),
          answer: (
            <p>
              Each step adds a. Getting from {`$t_1$`} to {`$t_n$`} takes {`$n - 1$`} steps, so you
              add a a total of {`$n - 1$`} times. That gives {`$t_n = t_1 + (n - 1)a$`}.
            </p>
          )
        },
        {
          id: 'A9',
          marks: 3,
          prompt: (
            <>
              A linear sequence has {`$t_3 = 17$`} and {`$t_7 = 41$`}. Find the common difference
              and an expression for {`$t_n$`}.
            </>
          ),
          answer: (
            <>
              <p>
                {`$d = \\frac{41 - 17}{7 - 3} = \\frac{24}{4} = 6$`}. Then{' '}
                {`$t_1 = 17 - 2 \\times 6 = 5$`}.
              </p>
              <p>{`$t_n = 6n - 1$`}.</p>
            </>
          )
        },
        {
          id: 'A10',
          marks: 3,
          prompt: (
            <>
              Whole numbers are written in three columns: 1 2 3 / 4 5 6 / 7 8 9 / … (a) Find the
              nth-term rule for column 2. (b) In which column does 100 appear? Justify.
            </>
          ),
          answer: (
            <>
              <p>(a) Column 2 is 2, 5, 8, …, so {`$t_n = 3n - 1$`}.</p>
              <p>
                (b) Column 1 is {`$3n - 2$`}. Setting {`$3n - 2 = 100$`} gives {`$n = 34$`}, a whole
                number, so 100 is in column 1.
              </p>
            </>
          )
        },
        {
          id: 'A11',
          marks: 4,
          prompt: (
            <>
              For 3, 8, 15, 24, 35, … show the second difference is constant, use the 2a rule to
              find the leading coefficient, and find {`$t_n$`}.
            </>
          ),
          answer: (
            <>
              <p>
                First differences 5, 7, 9, 11; second differences all 2. The 2a rule gives{' '}
                {`$2a = 2$`}, so the leading coefficient is 1.
              </p>
              <p>
                Subtracting {`$n^2$`} leaves 2, 4, 6, 8, … which is 2n. So {`$t_n = n^2 + 2n$`}.
              </p>
              <SecondDiffFig />
            </>
          )
        },
        {
          id: 'A12',
          marks: 3,
          prompt: (
            <>
              For 2, 9, 28, 65, 126, … show the third difference is constant and equals 6, and find{' '}
              {`$t_n$`}.
            </>
          ),
          answer: (
            <>
              <p>
                The differences fall to a constant third difference of 6, which is the signature of
                a cube.
              </p>
              <p>Each term is one more than a cube: {`$t_n = n^3 + 1$`}.</p>
            </>
          )
        },
        {
          id: 'A13',
          marks: 3,
          prompt: (
            <>
              (a) Show that {`$n(n + 1) \\equiv n + n^2$`}. (b) Explain what it means to call this
              an identity.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$n(n + 1) = n^2 + n = n + n^2$`}.</p>
              <p>(b) An identity is true for every value of n, not just for a particular one.</p>
            </>
          )
        },
        {
          id: 'A14',
          marks: 3,
          prompt: (
            <>
              An arithmetic progression has {`$a = 4$`} and {`$d = 7$`}. State the formula for the
              nth term and find {`$a_{20}$`}.
            </>
          ),
          answer: (
            <>
              <p>{`$a_n = a + (n - 1)d$`}.</p>
              <p>{`$a_{20} = 4 + 19 \\times 7 = 4 + 133 = 137$`}.</p>
            </>
          )
        },
        {
          id: 'A15',
          marks: 4,
          prompt: (
            <>
              (a) Using Gauss pairing, evaluate {`$1 + 2 + 3 + \\cdots + 100$`}. (b) Hence or
              otherwise find the sum of the first 50 terms of the AP with {`$a = 3$`}, {`$d = 4$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Pair 1 with 100, 2 with 99, and so on: 50 pairs each summing 101, so{' '}
                {`$50 \\times 101 = 5050$`}.
              </p>
              <p>
                (b) The 50th term is {`$3 + 49 \\times 4 = 199$`}. Sum{' '}
                {`$= \\frac{50(3 + 199)}{2} = 5050$`}.
              </p>
            </>
          )
        },
        {
          id: 'A16',
          marks: 4,
          prompt: (
            <>
              (a) A geometric progression has {`$a = 3$`} and {`$q = 2$`}. Find {`$a_6$`}. (b) Three
              numbers 4, x, 25 are in geometric progression; find the positive value of x.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$a_6 = 3 \\times 2^5 = 96$`}.</p>
              <p>
                (b) {`$x^2 = 4 \\times 25 = 100$`}, so {`$x = 10$`}.
              </p>
            </>
          )
        },
        {
          id: 'A17',
          marks: 4,
          prompt: (
            <>
              (a) Using the multiply-and-subtract method, derive{' '}
              {`$S_n = \\frac{a(q^n - 1)}{q - 1}$`}. (b) State the special case when {`$q = 1$`}.
              (c) Evaluate {`$2 + 6 + 18 + 54 + 162$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$S_n = a + aq + \\cdots + aq^{n-1}$`}. Then {`$qS_n - S_n = aq^n - a$`}, so{' '}
                {`$S_n(q - 1) = a(q^n - 1)$`} and {`$S_n = \\frac{a(q^n - 1)}{q - 1}$`}.
              </p>
              <p>
                (b) If {`$q = 1$`} every term is a, so {`$S_n = na$`}.
              </p>
              <p>(c) 242.</p>
            </>
          )
        },
        {
          id: 'A18',
          marks: 3,
          prompt: (
            <>
              A sequence has 2nd term 6 and 5th term 48. (a) If it is an AP, find a and d. (b) If it
              is a GP, find a and q.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$a + d = 6$`} and {`$a + 4d = 48$`}, so {`$3d = 42$`}, {`$d = 14$`},{' '}
                {`$a = -8$`}.
              </p>
              <p>
                (b) {`$\\frac{aq^4}{aq} = q^3 = 8$`}, so {`$q = 2$`} and {`$a = 3$`}.
              </p>
            </>
          )
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical and Applied',
      meta: '60 marks · calculator allowed',
      questions: [
        {
          id: 'B1',
          marks: 10,
          prompt: (
            <>
              Squares are built in a row from matchsticks: 1 square = 4 sticks, 2 squares = 7, 3
              squares = 10. (a) Build a table of (squares n, sticks) up to {`$n = 5$`}. (b) Find the
              nth-term rule. (c) Justify the rule from the diagram. (d) How many sticks for 50
              squares? (e) How many squares with exactly 100 sticks?
            </>
          ),
          answer: (
            <>
              <p>(a) n = 1 → 4, 2 → 7, 3 → 10, 4 → 13, 5 → 16.</p>
              <p>(b) The first difference is 3, so {`$t_n = 3n + 1$`}.</p>
              <p>
                (c) The first square needs 4 sticks. Each extra square adds 3 sticks, since one side
                is shared.
              </p>
              <p>(d) {`$3 \\times 50 + 1 = 151$`} sticks.</p>
              <p>
                (e) {`$3n + 1 = 100$`} gives {`$n = 33$`} squares.
              </p>
              <MatchstickFig />
            </>
          )
        },
        {
          id: 'B2',
          marks: 8,
          prompt: (
            <>
              (a) Evaluate {`$1 + 3 + 5 + 7$`}. (b) Conjecture a formula for the sum of the first n
              odd numbers. (c) Justify it using a square dot pattern. (d) The odd numbers grouped 1
              | 3+5 | 7+9+11 | …: show the kth group sums to {`$k^3$`}, and state how this links the
              sum of cubes to a square.
            </>
          ),
          answer: (
            <>
              <p>(a) 16.</p>
              <p>(b) The sum of the first n odd numbers is {`$n^2$`}.</p>
              <p>
                (c) Each new odd number forms an L-shaped layer wrapping an {`$(n-1)^2$`} square
                into an {`$n^2$`} square.
              </p>
              <p>
                (d) {`$3 + 5 = 8 = 2^3$`} and {`$7 + 9 + 11 = 27 = 3^3$`}, so the kth group sums to{' '}
                {`$k^3$`}. Adding all groups,{' '}
                {`$1^3 + \\cdots + n^3 = (1 + \\cdots + n)^2 = (T_n)^2$`}.
              </p>
              <OddSquareFig />
            </>
          )
        },
        {
          id: 'B3',
          marks: 6,
          prompt: (
            <>
              (a) Write {`$T_1$`} … {`$T_5$`} (triangular numbers). (b) By fitting two staircases of
              dots into an {`$n \\times (n + 1)$`} rectangle, derive {`$T_n = \\frac{n(n + 1)}{2}$`}
              . (c) Find {`$T_{100}$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) 1, 3, 6, 10, 15.</p>
              <p>
                (b) Two copies of the staircase fit together into a rectangle that is n by{' '}
                {`$n + 1$`}. That rectangle holds {`$n(n + 1)$`} dots, so one staircase is{' '}
                {`$T_n = \\frac{n(n + 1)}{2}$`}.
              </p>
              <p>(c) {`$T_{100} = \\frac{100 \\times 101}{2} = 5050$`}.</p>
              <TriangularFig />
            </>
          )
        },
        {
          id: 'B4',
          marks: 8,
          prompt: (
            <>
              (a) Compute {`$1^3 + 2^3 + 3^3$`} and compare with {`$(T_3)^2$`}. (b) Verify the
              pattern for {`$n = 4$`}. (c) State the identity{' '}
              {`$1^3 + 2^3 + \\cdots + n^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$`} and explain its
              connection to triangular numbers.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$1 + 8 + 27 = 36$`}, and {`$(T_3)^2 = 6^2 = 36$`}. They match.
              </p>
              <p>(b) {`$1 + 8 + 27 + 64 = 100 = 10^2 = (T_4)^2$`}.</p>
              <p>
                (c) The sum of the first n cubes equals {`$(T_n)^2$`}, the square of the nth
                triangular number.
              </p>
            </>
          )
        },
        {
          id: 'B5',
          marks: 9,
          prompt: (
            <>
              In 12-tone equal temperament, successive semitone frequencies form a GP with ratio{' '}
              {`$r = 2^{1/12} \\approx 1.0595$`}. (a) Explain why these frequencies form a GP. (b)
              Concert A is 440 Hz. Find the frequency one octave (12 semitones) higher and show the
              octave ratio is exactly 2. (c) Find the frequency 3 semitones above 440 Hz. (d)
              Explain why r must equal {`$2^{1/12}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Each semitone multiplies the frequency by the same fixed ratio, which is exactly
                what a GP does.
              </p>
              <p>
                (b) {`$440 \\times r^{12} = 440 \\times 2 = 880$`} Hz, so the octave ratio is
                exactly 2.
              </p>
              <p>(c) {`$440 \\times 1.0595^3 \\approx 523$`} Hz.</p>
              <p>
                (d) Twelve equal steps must multiply up to the octave, so {`$r^{12} = 2$`} and{' '}
                {`$r = 2^{1/12}$`}.
              </p>
            </>
          )
        },
        {
          id: 'B6',
          marks: 13,
          prompt: (
            <>
              (a) State {`$S_\\infty = \\frac{a}{1 - q}$`} and the condition on q. (b) A ball is
              dropped from 2 m; each bounce reaches 0.6 of the previous height. Find the total
              distance travelled before it stops. (c) Express 0.4444… as an infinite GP and hence as
              a fraction. (d) Use an infinite GP to explain Zeno's paradox (
              {`$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots = 1$`}
              ). (e) Explain why convergence requires {`$|q| < 1$`}. (f) Show that 0.999… = 1 using{' '}
              {`$S_\\infty$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$S_\\infty = \\frac{a}{1 - q}$`}, valid when {`$|q| < 1$`}.
              </p>
              <p>
                (b) The bounce heights form a GP with {`$a = 1.2$`}, {`$q = 0.6$`}, summing to{' '}
                {`$\\frac{1.2}{0.4} = 3$`}. Each height is travelled up and down, so total{' '}
                {`$= 2 + 2 \\times 3 = 8$`} m.
              </p>
              <p>
                (c) {`$0.4 + 0.04 + \\cdots$`} with {`$a = 0.4$`}, {`$q = 0.1$`}, giving{' '}
                {`$\\frac{0.4}{0.9} = \\frac{4}{9}$`}.
              </p>
              <p>
                (d) The steps form a GP with {`$a = \\frac{1}{2}$`}, {`$q = \\frac{1}{2}$`}, so the
                sum is {`$\\frac{1/2}{1/2} = 1$`}.
              </p>
              <p>
                (e) If {`$|q| \\ge 1$`} the terms do not shrink toward 0, so the running total grows
                without limit.
              </p>
              <p>(f) {`$0.999\\ldots = \\frac{0.9}{1 - 0.1} = \\frac{0.9}{0.9} = 1$`}.</p>
            </>
          )
        },
        {
          id: 'B7',
          marks: 6,
          prompt: (
            <>
              Solid cubes are built from unit cubes: side 1 = 1, side 2 = 8, side 3 = 27. (a)
              Tabulate for {`$n = 1, 2, 3$`}. (b) Show the third difference is constant and equals
              6, and write {`$t_n$`}. (c) How many unit cubes for side 10? Explain why the third
              difference of {`$n^3$`} is always 6.
            </>
          ),
          answer: (
            <>
              <p>(a) 1, 8, 27.</p>
              <p>
                (b) The differences reduce to a constant third difference of 6, so {`$t_n = n^3$`}.
              </p>
              <p>
                (c) Side 10 needs {`$10^3 = 1000$`} unit cubes. Any cubic sequence has a constant
                third difference, and for {`$n^3$`} it is {`$3! = 6$`}.
              </p>
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneSequences() {
  const config = {
    documentTitle: 'Sequences Exam - AETHER',
    briefing: {
      title: 'Sequences',
      concepts: [
        'Number Sequences and Patterns',
        'Arithmetic and Geometric Sequences',
        'Sequences and Series'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
