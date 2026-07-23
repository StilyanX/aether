import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  FONT_BODY,
  FONT_CONTROL,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TINY
} from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A7: area model of (a+b)² = a² + 2ab + b², drawn with a = 3, b = 4.
function AreaSquareFig() {
  const C = useVizColors()
  const s = 20
  const ax = 30
  const ay = 16
  const a = 3 * s
  const b = 4 * s
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 220 200"
        role="img"
        aria-label="A square of side a plus b split into a squared, two a b rectangles and b squared"
        style={{ display: 'block', width: '100%', maxWidth: 240, height: 'auto', margin: '0 auto' }}
      >
        <rect
          x={ax}
          y={ay}
          width={a}
          height={a}
          fill={C.fg}
          opacity={0.45}
          stroke={C.fg}
          strokeWidth={1}
        />
        <rect x={ax + a} y={ay} width={b} height={a} fill={C.faint} stroke={C.fg} strokeWidth={1} />
        <rect x={ax} y={ay + a} width={a} height={b} fill={C.faint} stroke={C.fg} strokeWidth={1} />
        <rect
          x={ax + a}
          y={ay + a}
          width={b}
          height={b}
          fill={C.fg}
          opacity={0.2}
          stroke={C.fg}
          strokeWidth={1}
        />
        <text
          x={ax + a / 2}
          y={ay + a / 2 + 4}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          a²
        </text>
        <text
          x={ax + a + b / 2}
          y={ay + a / 2 + 4}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          ab
        </text>
        <text
          x={ax + a / 2}
          y={ay + a + b / 2 + 4}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          ab
        </text>
        <text
          x={ax + a + b / 2}
          y={ay + a + b / 2 + 4}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          b²
        </text>
        <text
          x={110}
          y={194}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          (a + b)² = a² + 2ab + b²
        </text>
      </svg>
    </div>
  )
}

// A7 helper concept doubles as B6: standard-form place shift for 4 530 000.
function StandardFormFig() {
  const C = useVizColors()
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 110"
        role="img"
        aria-label="Decimal point moving six places left to write 4 530 000 as 4.53 times ten to the sixth"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <text x={200} y={36} textAnchor="middle" fill={C.fg} fontSize={FONT_BODY} fontFamily={FONT}>
          4 530 000.
        </text>
        <path
          d="M 250 48 q -55 26 -110 0"
          fill="none"
          stroke={C.fg}
          strokeWidth={1}
          strokeDasharray="3 3"
        />
        <polygon points="140,48 148,44 147,52" fill={C.fg} />
        <text
          x={200}
          y={78}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          point moves 6 places left
        </text>
        <text
          x={200}
          y={100}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_CONTROL}
          fontFamily={FONT}
        >
          = 4.53 × 10⁶
        </text>
      </svg>
    </div>
  )
}

// B1: the four tiny lengths placed on a base-10 log scale.
function OrderMagnitudeFig() {
  const C = useVizColors()
  const x0 = 30
  const x1 = 374
  const lo = -11
  const hi = -4
  const sx = e => x0 + ((e - lo) / (hi - lo)) * (x1 - x0)
  const items = [
    [1e-10, 'atom', 1],
    [3e-8, 'virus', -1],
    [8e-6, 'cell', 1],
    [7e-5, 'hair', -1]
  ]
  const ticks = [-10, -8, -6, -4]
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 110"
        role="img"
        aria-label="Logarithmic scale placing atom, virus, cell and hair from smallest to largest"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <line x1={x0} y1={58} x2={x1} y2={58} stroke={C.dim} strokeWidth={1.5} />
        {ticks.map(e => (
          <g key={e}>
            <line x1={sx(e)} y1={52} x2={sx(e)} y2={64} stroke={C.dim} strokeWidth={1} />
            <text
              x={sx(e)}
              y={80}
              textAnchor="middle"
              fill={C.dim}
              fontSize={FONT_SMALL}
              fontFamily={FONT}
            >
              10{e}
            </text>
          </g>
        ))}
        {items.map(([v, label, dir]) => {
          const e = Math.log10(v)
          return (
            <g key={label}>
              <circle cx={sx(e)} cy={58} r={3.5} fill={C.fg} />
              <text
                x={sx(e)}
                y={dir > 0 ? 44 : 100}
                textAnchor="middle"
                fill={C.fg}
                fontSize={FONT_LABEL}
                fontFamily={FONT}
              >
                {label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// B7: grains doubling per square: square n holds 2^(n-1).
function DoublingFig() {
  const C = useVizColors()
  const x0 = 28
  const n = 8
  const gw = 40
  const max = Math.pow(2, n - 1) // 128
  const h = 70
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 360 130"
        role="img"
        aria-label="Bars doubling in height across eight squares: 1, 2, 4, up to 128 grains"
        style={{ display: 'block', width: '100%', maxWidth: 360, height: 'auto', margin: '0 auto' }}
      >
        <line x1={x0 - 4} y1={92} x2={x0 + n * gw} y2={92} stroke={C.dim} strokeWidth={1} />
        {Array.from({ length: n }, (_, i) => {
          const val = Math.pow(2, i)
          const bh = (val / max) * h
          return (
            <g key={i}>
              <rect
                x={x0 + i * gw + 6}
                y={92 - bh}
                width={gw - 14}
                height={bh}
                fill={C.fg}
                opacity={0.5}
                stroke={C.fg}
                strokeWidth={1}
              />
              <text
                x={x0 + i * gw + gw / 2 - 1}
                y={92 - bh - 4}
                textAnchor="middle"
                fill={C.dim}
                fontSize={FONT_TINY}
                fontFamily={FONT}
              >
                {val}
              </text>
              <text
                x={x0 + i * gw + gw / 2 - 1}
                y={104}
                textAnchor="middle"
                fill={C.dim}
                fontSize={FONT_TINY}
                fontFamily={FONT}
              >
                {i + 1}
              </text>
            </g>
          )
        })}
        <text
          x={180}
          y={124}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          square n holds 2ⁿ⁻¹ grains
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
      meta: '52 marks · no calculator',
      questions: [
        {
          id: 'A1',
          marks: 6,
          prompt: (
            <>
              (a) Write {`$7 \\times 7 \\times 7 \\times 7 \\times 7$`} in index form, and state the
              base and the index. (b) A student claims {`$3^4 = 4 \\times 3$`}. Give the value of{' '}
              {`$3^4$`} and of {`$4 \\times 3$`} and state which is correct. (c) Write {`$5^2$`} and{' '}
              {`$2^3$`} in words using "squared" and "cubed".
            </>
          ),
          answer: (
            <>
              <p>(a) {`$7^5$`}. The base is 7 and the index is 5.</p>
              <p>
                (b) {`$3^4 = 81$`}, while {`$4 \\times 3 = 12$`}. The claim is wrong.
              </p>
              <p>
                (c) {`$5^2$`} is "five squared"; {`$2^3$`} is "two cubed".
              </p>
            </>
          )
        },
        {
          id: 'A2',
          marks: 6,
          prompt: (
            <>
              (a) Evaluate {`$2^6$`} and {`$2^{10}$`}. (b) Write {`$10^7$`} as an ordinary number
              and state how many digits {`$10^n$`} has for a positive integer n. (c) State how many
              digits {`$2^{10}$`} has, and explain how you know without writing it in full.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$2^6 = 64$`} and {`$2^{10} = 1024$`}.
              </p>
              <p>
                (b) {`$10^7 = 10{,}000{,}000$`}. {`$10^n$`} has {`$n + 1$`} digits.
              </p>
              <p>
                (c) 4 digits. {`$1024$`} lies between {`$10^3$`} and {`$10^4$`}, so it has 4 digits.
              </p>
            </>
          )
        },
        {
          id: 'A3',
          marks: 7,
          prompt: (
            <>
              (a) Evaluate {`$5^0$`}, {`$7^{-2}$`}, and {`$\\left(\\frac{2}{3}\\right)^{-1}$`}. (b)
              Using the quotient law, explain why {`$a^0 = 1$`} for any {`$a \\ne 0$`}. (c) Explain
              how {`$a^0$`} differs from {`$0^a$`} for a positive integer a.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$5^0 = 1$`}, {`$7^{-2} = \\frac{1}{49}$`},{' '}
                {`$\\left(\\frac{2}{3}\\right)^{-1} = \\frac{3}{2}$`}.
              </p>
              <p>
                (b) {`$\\frac{a^m}{a^m} = a^{m-m} = a^0$`} by the quotient law, but that quotient is
                also 1. So {`$a^0 = 1$`}.
              </p>
              <p>
                (c) {`$a^0 = 1$`} for any {`$a \\ne 0$`}, but {`$0^a = 0$`} for a positive integer
                a.
              </p>
            </>
          )
        },
        {
          id: 'A4',
          marks: 4,
          prompt: (
            <>
              Evaluate {`$(-2)^4$`}, {`$-2^4$`}, {`$2^{-4}$`} and {`$(-2)^{-3}$`}, and explain why{' '}
              {`$(-2)^4$`} and {`$-2^4$`} give different answers.
            </>
          ),
          answer: (
            <>
              <p>
                {`$(-2)^4 = 16$`}, {`$-2^4 = -16$`}, {`$2^{-4} = \\frac{1}{16}$`},{' '}
                {`$(-2)^{-3} = -\\frac{1}{8}$`}.
              </p>
              <p>
                {`$(-2)^4$`} raises the whole of −2, while {`$-2^4$`} raises only the 2 and negates
                afterward.
              </p>
            </>
          )
        },
        {
          id: 'A5',
          marks: 5,
          prompt: (
            <>
              Simplify, leaving each answer in index form: (a) {`$a^5 \\times a^3$`}; (b){' '}
              {`$x^9 \\div x^4$`}; (c) {`$(m^4)^3$`}; (d) {`$(2^3 \\times 2^5) \\div 2^6$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$a^8$`}. (b) {`$x^5$`}. (c) {`$m^{12}$`}.
              </p>
              <p>(d) {`$2^{3+5-6} = 2^2 = 4$`}.</p>
            </>
          )
        },
        {
          id: 'A6',
          marks: 4,
          prompt: (
            <>
              (a) Expand {`$(3x)^4$`}. (b) Simplify {`$\\left(\\frac{2a}{b}\\right)^3$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$(3x)^4 = 81x^4$`}.</p>
              <p>(b) {`$\\left(\\frac{2a}{b}\\right)^3 = \\frac{8a^3}{b^3}$`}.</p>
            </>
          )
        },
        {
          id: 'A7',
          marks: 4,
          prompt: (
            <>
              A student writes {`$(a + b)^2 = a^2 + b^2$`}. Using {`$a = 3$`} and {`$b = 4$`}, show
              this is wrong, write the correct expansion of {`$(a + b)^2$`}, and explain why{' '}
              {`$(ab)^2 = a^2 b^2$`} is nevertheless correct.
            </>
          ),
          answer: (
            <>
              <p>
                {`$(3 + 4)^2 = 49$`}, but {`$3^2 + 4^2 = 9 + 16 = 25$`}. Not equal.
              </p>
              <p>Correct: {`$(a + b)^2 = a^2 + 2ab + b^2$`}.</p>
              <p>
                {`$(ab)^2 = a^2 b^2$`} holds because a power distributes over a product, but not
                over a sum.
              </p>
              <AreaSquareFig />
            </>
          )
        },
        {
          id: 'A8',
          marks: 6,
          prompt: (
            <>
              Give every answer with positive indices only. (a) Simplify{' '}
              {`$6x^7 y^4 \\times 5x^{-5} y$`}. (b) Simplify {`$(2a^4 b^3 c^2 d) \\div (a^2 b^5)$`}.
              (c) Rewrite {`$\\frac{3p^{-2} q^3}{r^{-1}}$`} as a single fraction with positive
              indices.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$30x^2 y^5$`}.</p>
              <p>(b) {`$\\frac{2a^2 c^2 d}{b^2}$`}.</p>
              <p>(c) {`$\\frac{3q^3 r}{p^2}$`}.</p>
            </>
          )
        },
        {
          id: 'A9',
          marks: 5,
          prompt: (
            <>
              (a) State the condition on A in the standard form {`$A \\times 10^n$`}. (b) Write 4
              530 000 and 0.000 072 in standard form. (c) Write {`$3.08 \\times 10^{-4}$`} and{' '}
              {`$6.2 \\times 10^5$`} as ordinary numbers.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$1 \\le A < 10$`}.</p>
              <p>
                (b) {`$4.53 \\times 10^6$`} and {`$7.2 \\times 10^{-5}$`}.
              </p>
              <p>(c) 0.000308 and 620 000.</p>
            </>
          )
        },
        {
          id: 'A10',
          marks: 5,
          prompt: (
            <>
              Without a calculator, giving each answer in standard form: (a){' '}
              {`$(3 \\times 10^5) \\times (4 \\times 10^3)$`}; (b){' '}
              {`$(8 \\times 10^7) \\div (2 \\times 10^{-2})$`}; (c){' '}
              {`$(6 \\times 10^4) \\times (5 \\times 10^9)$`}, adjusting the coefficient to correct
              standard form.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$12 \\times 10^8 = 1.2 \\times 10^9$`}.</p>
              <p>(b) {`$4 \\times 10^{9}$`}.</p>
              <p>(c) {`$30 \\times 10^{13} = 3 \\times 10^{14}$`}.</p>
            </>
          )
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical and Applied',
      meta: '48 marks · calculator allowed',
      questions: [
        {
          id: 'B1',
          marks: 8,
          prompt: (
            <>
              Approximate sizes: human hair 0.000 07 m; red blood cell 8 µm (
              {`$1\\,\\mu m = 10^{-6}$`} m); virus 0.000 000 03 m; hydrogen-atom radius 1 Å (
              {`$1\\,Å = 10^{-10}$`} m). (a) Write each length in metres in standard form. (b) Order
              the four from smallest to largest. (c) How many times larger is a red blood cell than
              a hydrogen-atom radius? Answer in standard form.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Hair {`$7 \\times 10^{-5}$`}, cell {`$8 \\times 10^{-6}$`}, virus{' '}
                {`$3 \\times 10^{-8}$`}, atom {`$1 \\times 10^{-10}$`} m.
              </p>
              <p>(b) atom &lt; virus &lt; cell &lt; hair.</p>
              <p>(c) {`$\\frac{8 \\times 10^{-6}}{1 \\times 10^{-10}} = 8 \\times 10^4$`} times.</p>
              <OrderMagnitudeFig />
            </>
          )
        },
        {
          id: 'B2',
          marks: 8,
          prompt: (
            <>
              Use: Earth–Sun distance 150 000 000 km; speed of light 300 000 km/s; stars in the
              Milky Way 100 000 000 000. (a) Write each in standard form, with the Earth–Sun
              distance in metres. (b) State the order of magnitude of each. (c) How many times more
              stars are there than seconds in one hour (3 600 s)? Answer in standard form to 2
              significant figures.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Earth–Sun {`$1.5 \\times 10^{11}$`} m, light {`$3 \\times 10^5$`} km/s, stars{' '}
                {`$1 \\times 10^{11}$`}.
              </p>
              <p>
                (b) Orders of magnitude {`$10^{11}$`}, {`$10^5$`}, {`$10^{11}$`}.
              </p>
              <p>(c) {`$\\frac{1 \\times 10^{11}}{3600} \\approx 2.8 \\times 10^7$`} times.</p>
            </>
          )
        },
        {
          id: 'B3',
          marks: 6,
          prompt: (
            <>
              Light travels at {`$3 \\times 10^8$`} m/s. The Sun is {`$1.5 \\times 10^{11}$`} m from
              Earth. (a) Calculate the time, in seconds, for light to travel from the Sun to Earth.
              (b) Convert this time to minutes, to 3 significant figures, and comment on whether it
              is reasonable.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$\\frac{1.5 \\times 10^{11}}{3 \\times 10^8} = 5 \\times 10^2 = 500$`}{' '}
                seconds.
              </p>
              <p>
                (b) {`$\\frac{500}{60} \\approx 8.33$`} minutes. Reasonable, since sunlight is known
                to take about 8 minutes.
              </p>
            </>
          )
        },
        {
          id: 'B4',
          marks: 8,
          prompt: (
            <>
              (a) Describe the keystrokes to enter {`$4.5 \\times 10^{12}$`} on a scientific
              calculator, naming the key (EXP, EE or ×10ˣ). (b) Compute{' '}
              {`$(4.5 \\times 10^{12}) \\times (6.0 \\times 10^{-5})$`}: give the display, then
              standard form. (c) Compute {`$(9.6 \\times 10^{-3}) \\div (1.6 \\times 10^4)$`}, in
              standard form to 3 significant figures. (d) Explain why entering "× 10 ^ 12" after the
              EXP key gives a wrong answer.
            </>
          ),
          answer: (
            <>
              <p>(a) Enter 4.5, press the EXP (or EE / ×10ˣ) key, then enter 12.</p>
              <p>(b) Display 2.7E8, which is {`$27 \\times 10^7 = 2.7 \\times 10^8$`}.</p>
              <p>(c) {`$6 \\times 10^{-7}$`}.</p>
              <p>
                (d) EXP already means "× 10 to the power". Adding "× 10 ^" multiplies by 10 again,
                making the value far too large.
              </p>
            </>
          )
        },
        {
          id: 'B5',
          marks: 6,
          prompt: (
            <>
              (a) By rounding each value to 1 significant figure, estimate{' '}
              {`$(3.9 \\times 10^6) \\times (2.1 \\times 10^{-2})$`}. Give the estimate in standard
              form. (b) A heart beats about 70 times per minute. Estimate the number of beats in 80
              years, in standard form to 1 significant figure. Show your assumptions.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$4 \\times 10^6 \\times 2 \\times 10^{-2} = 8 \\times 10^4$`}.</p>
              <p>
                (b) {`$70 \\times 60 \\times 24 \\times 365 \\times 80 \\approx 3 \\times 10^9$`}{' '}
                beats, assuming 60 minutes per hour, 24 hours per day, 365 days per year.
              </p>
            </>
          )
        },
        {
          id: 'B6',
          marks: 6,
          prompt: (
            <>
              (a) Convert 73 000 000 and 0.000 0049 to standard form, stating how many places the
              decimal point moved and in which direction. (b) Complete and justify: "When converting
              a number greater than 10 the exponent is ___; when converting a number between 0 and 1
              the exponent is ___." Explain how the exponent's size relates to the places moved.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$7.3 \\times 10^7$`} (point moved 7 places left); {`$4.9 \\times 10^{-6}$`}{' '}
                (point moved 6 places right).
              </p>
              <p>
                (b) Greater than 10: the exponent is positive. Between 0 and 1: the exponent is
                negative. Its size equals the number of places the point moved.
              </p>
              <StandardFormFig />
            </>
          )
        },
        {
          id: 'B7',
          marks: 6,
          prompt: (
            <>
              A grain of rice is placed on square 1 of a board, 2 on square 2, 4 on square 3,
              doubling each time. (a) Write an expression for the grains on square n. (b) Find the
              grains on square 11 and on square 21. (c) The 64th square holds about{' '}
              {`$9.2 \\times 10^{18}$`}. Roughly how many digits does it have, and how did you
              decide?
            </>
          ),
          answer: (
            <>
              <p>(a) {`$2^{n-1}$`}.</p>
              <p>
                (b) Square 11: {`$2^{10} = 1024$`}. Square 21: {`$2^{20} = 1{,}048{,}576$`}.
              </p>
              <p>
                (c) About 19 digits, since {`$9.2 \\times 10^{18}$`} lies between {`$10^{18}$`} (19
                digits) and {`$10^{19}$`}.
              </p>
              <DoublingFig />
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneIndices() {
  const config = {
    documentTitle: 'Indices Exam - AETHER',
    briefing: {
      title: 'Indices',
      concepts: [
        'Index Notation and Laws of Integral Indices',
        'Squares, Cubes, Square Roots, Cube Roots'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
