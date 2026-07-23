import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  FONT_CONTROL,
  FONT_LABEL,
  FONT_TEX,
  FONT_TINY
} from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A14: labelled rectangle the perimeter/area question refers to.
function RectFig() {
  const C = useVizColors()
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 340 150"
        role="img"
        aria-label="Rectangle, 12 metres wide and 5 metres tall"
        style={{ display: 'block', width: '100%', maxWidth: 320, height: 'auto', margin: '0 auto' }}
      >
        <rect
          x={80}
          y={28}
          width={200}
          height={83}
          fill={C.faint}
          stroke={C.fg}
          strokeWidth={1.5}
        />
        <text
          x={180}
          y={134}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
          fontFamily={FONT}
        >
          12 m
        </text>
        <text
          x={62}
          y={70}
          textAnchor="end"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
          fontFamily={FONT}
        >
          5 m
        </text>
      </svg>
    </div>
  )
}

// A15: triangle with two given angles marked; the third is left as "?".
function TriangleFig() {
  const C = useVizColors()
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 340 200"
        role="img"
        aria-label="Triangle with angles of 47 and 68 degrees and a third unknown angle"
        style={{ display: 'block', width: '100%', maxWidth: 320, height: 'auto', margin: '0 auto' }}
      >
        <polygon points="60,170 288,170 178,46" fill={C.faint} stroke={C.fg} strokeWidth={1.5} />
        <path d="M 88,170 A 28 28 0 0 0 79,150" fill="none" stroke={C.fg} strokeWidth={1} />
        <path d="M 260,170 A 28 28 0 0 1 269,149" fill="none" stroke={C.fg} strokeWidth={1} />
        <text x={97} y={162} fill={C.dim} fontSize={FONT_TEX} fontFamily={FONT}>
          47°
        </text>
        <text x={243} y={162} textAnchor="end" fill={C.dim} fontSize={FONT_TEX} fontFamily={FONT}>
          68°
        </text>
        <text
          x={178}
          y={86}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_CONTROL}
          fontFamily={FONT}
        >
          ?
        </text>
        <text
          x={170}
          y={194}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_TINY}
          fontFamily={FONT}
        >
          not to scale
        </text>
      </svg>
    </div>
  )
}

// B2: time strip showing the overnight wrap past midnight.
function TimeStripFig() {
  const C = useVizColors()
  const x0 = 30
  const step = 300 / 9
  const at = h => x0 + h * step
  const hours = ['22', '23', '00', '01', '02', '03', '04', '05', '06', '07']
  const startX = at(40 / 60) // 22:40
  const endX = at(8 + 15 / 60) // 06:15
  const midX = at(2) // 00:00
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 360 130"
        role="img"
        aria-label="Time line from 22:40 to 06:15 spanning 7 hours 35 minutes across midnight"
        style={{ display: 'block', width: '100%', maxWidth: 360, height: 'auto', margin: '0 auto' }}
      >
        <line x1={x0} y1={72} x2={330} y2={72} stroke={C.dim} strokeWidth={1.5} />
        {hours.map((h, i) => {
          const x = at(i)
          const mid = i === 2
          return (
            <g key={h}>
              <line
                x1={x}
                y1={mid ? 58 : 67}
                x2={x}
                y2={mid ? 86 : 77}
                stroke={mid ? C.fg : C.dim}
                strokeWidth={mid ? 1.5 : 1}
              />
              <text
                x={x}
                y={100}
                textAnchor="middle"
                fill={C.dim}
                fontSize={FONT_TINY}
                fontFamily={FONT}
              >
                {h}
              </text>
            </g>
          )
        })}
        <line x1={startX} y1={44} x2={endX} y2={44} stroke={C.fg} strokeWidth={1} />
        <line x1={startX} y1={44} x2={startX} y2={50} stroke={C.fg} strokeWidth={1} />
        <line x1={endX} y1={44} x2={endX} y2={50} stroke={C.fg} strokeWidth={1} />
        <text
          x={(startX + endX) / 2}
          y={38}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          7 h 35 min
        </text>
        <circle cx={startX} cy={72} r={3} fill={C.fg} />
        <circle cx={endX} cy={72} r={3} fill={C.fg} />
        <text
          x={startX}
          y={64}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          22:40
        </text>
        <text
          x={endX}
          y={64}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          06:15
        </text>
        <text
          x={midX}
          y={120}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_TINY}
          fontFamily={FONT}
        >
          midnight
        </text>
      </svg>
    </div>
  )
}

// C4: nines-complement: every column of B + D adds to 9, so the sum is 99 999.
function NinesFig() {
  const C = useVizColors()
  const Cell = ({ children, op }) => (
    <div
      style={{
        width: 30,
        height: 32,
        lineHeight: '32px',
        textAlign: 'center',
        fontSize: FONT_CONTROL,
        fontFamily: FONT,
        color: op ? C.dim : C.fg,
        border: op ? 'none' : `1px solid ${C.faint}`
      }}
    >
      {children}
    </div>
  )
  const Row = ({ op, digits }) => (
    <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
      <Cell op>{op}</Cell>
      {digits.map((d, i) => (
        <Cell key={i}>{d}</Cell>
      ))}
    </div>
  )
  return (
    <div style={{ margin: '12px 0 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'inline-block' }}>
        <Row op="" digits={['5', '2', '7', '3', '1']} />
        <Row op="+" digits={['4', '7', '2', '6', '8']} />
        <div style={{ borderTop: `1px solid ${C.fg}`, margin: '0 0 4px' }} />
        <Row op="" digits={['9', '9', '9', '9', '9']} />
        <div
          style={{
            fontSize: FONT_LABEL,
            color: C.dim,
            textAlign: 'center',
            marginTop: 4,
            fontFamily: FONT
          }}
        >
          B + D = 99 999 (each column adds to 9)
        </div>
      </div>
    </div>
  )
}

const exam = {
  sections: [
    {
      id: 'A',
      title: 'Arithmetic and Fluency',
      meta: '30 marks · 30 minutes · no calculator',
      questions: [
        {
          id: 'A1',
          marks: 2,
          prompt: <>Write 80 305 in expanded form using powers of 10.</>,
          answer: <p>8×10⁴ + 3×10² + 5.</p>
        },
        {
          id: 'A2',
          marks: 3,
          prompt: <>Work out: (a) 6 820 × 100 (b) 47 000 ÷ 1000 (c) 0.6 × 1000.</>,
          answer: <p>(a) 682 000. (b) 47. (c) 600.</p>
        },
        {
          id: 'A3',
          marks: 2,
          prompt: <>4 002 − 1 875 =</>,
          answer: <p>2 127.</p>
        },
        {
          id: 'A4',
          marks: 3,
          prompt: <>Work out 638 × 27 using a formal written method.</>,
          answer: <p>17 226.</p>
        },
        {
          id: 'A5',
          marks: 3,
          prompt: <>Work out 1 924 ÷ 8. Give the quotient and the remainder.</>,
          answer: <p>240 remainder 4.</p>
        },
        {
          id: 'A6',
          marks: 1,
          prompt: <>Fill in the box so both sides are equal: 35 + 18 = ☐ + 30.</>,
          answer: <p>23.</p>
        },
        {
          id: 'A7',
          marks: 1,
          prompt: <>Write {`$\\frac{3}{8}$`} as a decimal.</>,
          answer: <p>0.375.</p>
        },
        {
          id: 'A8',
          marks: 1,
          prompt: (
            <>
              Which of these fractions does not give a terminating decimal: {`$\\frac{1}{4}$`},{' '}
              {`$\\frac{1}{5}$`}, {`$\\frac{1}{3}$`}, {`$\\frac{1}{8}$`}?
            </>
          ),
          answer: <p>{`$\\frac{1}{3}$`}.</p>
        },
        {
          id: 'A9',
          marks: 3,
          prompt: <>Convert: (a) 5.5 cm to mm (b) 2 400 g to kg (c) 3 hours to minutes.</>,
          answer: <p>(a) 55 mm. (b) 2.4 kg. (c) 180 min.</p>
        },
        {
          id: 'A10',
          marks: 2,
          prompt: <>Find 15% of €40.</>,
          answer: <p>€6, via 10% + 5%.</p>
        },
        {
          id: 'A11',
          marks: 1,
          prompt: <>Between which two whole numbers does {`$\\sqrt{58}$`} lie?</>,
          answer: <p>7 and 8.</p>
        },
        {
          id: 'A12',
          marks: 2,
          prompt: <>Write down whether each is odd or even: (a) 5 687 624 (b) 90 011.</>,
          answer: <p>(a) even. (b) odd.</p>
        },
        {
          id: 'A13',
          marks: 2,
          prompt: <>How many even numbers are there from 1 to 75?</>,
          answer: <p>37, since {`$\\lfloor \\frac{75}{2} \\rfloor = 37$`}.</p>
        },
        {
          id: 'A14',
          marks: 2,
          prompt: (
            <>
              Find the perimeter and the area of a rectangle 12 m by 5 m.
              <RectFig />
            </>
          ),
          answer: <p>Perimeter = 34 m. Area = 60 m².</p>
        },
        {
          id: 'A15',
          marks: 2,
          prompt: (
            <>
              Two angles of a triangle are 47° and 68°. Find the third.
              <TriangleFig />
            </>
          ),
          answer: <p>65°. 47 + 68 = 115, then 180 − 115 = 65.</p>
        }
      ]
    },
    {
      id: 'B',
      title: 'Reasoning and Applied',
      meta: '50 marks · 60 minutes · calculator allowed · method marks available',
      questions: [
        {
          id: 'B1',
          marks: 5,
          prompt: (
            <>
              A car travels 264 km in 4 hours at a steady speed. (a) Find its speed in km/h. (b) At
              the same speed, how long does 99 km take? Give the answer in hours and minutes.
            </>
          ),
          answer: (
            <>
              <p>(a) 66 km/h.</p>
              <p>(b) 99 ÷ 66 = 1.5 h = 1 h 30 min.</p>
            </>
          )
        },
        {
          id: 'B2',
          marks: 4,
          prompt: (
            <>
              A train leaves at 22:40 and arrives at 06:15 the next day. How long is the journey?
              Write the duration as |t₂ − t₁| and evaluate it.
            </>
          ),
          answer: (
            <>
              <p>7 h 35 min. Evaluate |06:15 − 22:40| with the +24 h overnight wrap handled.</p>
              <TimeStripFig />
            </>
          )
        },
        {
          id: 'B3',
          marks: 5,
          prompt: (
            <>
              A coat costs €80. The price rises by 25%, then in a sale the new price is cut by 25%.
              (a) Find the final price. (b) Explain in one sentence why the answer is not €80.
            </>
          ),
          answer: (
            <>
              <p>(a) €75.</p>
              <p>(b) The 25% cut is taken from the higher €100, not from the original €80.</p>
            </>
          )
        },
        {
          id: 'B4',
          marks: 4,
          prompt: (
            <>
              Three friends share 647 sheets of paper equally. (a) How many does each get, and how
              many are left over? (b) Is this sharing or grouping division? State which and why.
            </>
          ),
          answer: (
            <>
              <p>(a) 215 each, 2 left over.</p>
              <p>
                (b) Sharing (partitive): the number of groups is fixed at three, and the group size
                is what you are finding.
              </p>
            </>
          )
        },
        {
          id: 'B5',
          marks: 3,
          prompt: (
            <>The mean of four numbers is 21. Three of them are 18, 25, and 12. Find the fourth.</>
          ),
          answer: <p>29. 21 × 4 = 84, then 84 − 55 = 29.</p>
        },
        {
          id: 'B6',
          marks: 4,
          prompt: (
            <>
              Erica says: "To compare {`$-\\frac{1}{2}$`} and {`$-\\frac{1}{4}$`}, cross-multiply:
              (−1)(4) = −4 and (−1)(2) = −2, so {`$-\\frac{1}{2} < -\\frac{1}{4}$`}." She used
              positive denominators. Explain what goes wrong with cross-multiplication if a
              denominator is negative, and how to fix it.
            </>
          ),
          answer: (
            <p>
              A negative denominator reverses the inequality when you multiply across, so the result
              flips. Fix it by rewriting the fraction with a positive denominator first.
            </p>
          )
        },
        {
          id: 'B7',
          marks: 4,
          prompt: (
            <>
              Solve {`$-4x > 20$`}. Show the step where the inequality sign changes and say why it
              changes.
            </>
          ),
          answer: (
            <p>
              {`$x < -5$`}. The sign flips because dividing by a negative number reverses the order.
            </p>
          )
        },
        {
          id: 'B8',
          marks: 4,
          prompt: (
            <>
              Put these in order, smallest first: 2³, 0.5³, 2⁵, 0.5¹, 1. State the rule that decides
              whether a higher power is larger or smaller.
            </>
          ),
          answer: (
            <>
              <p>0.5³, 0.5¹, 1, 2³, 2⁵.</p>
              <p>Rule: above 1, a higher power grows; below 1, a higher power shrinks.</p>
            </>
          )
        },
        {
          id: 'B9',
          marks: 4,
          prompt: (
            <>
              A bolt is made to 50.00 ± 0.02 mm. (a) Write the allowed lengths as an inequality
              using |L − 50.00|. (b) A bolt measures 50.03 mm. Does it pass? Show why.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$|L - 50.00| \\le 0.02$`}.</p>
              <p>(b) It fails, since {`$0.03 > 0.02$`}.</p>
            </>
          )
        },
        {
          id: 'B10',
          marks: 5,
          prompt: (
            <>
              (a) Complete: odd × odd = ____, even + odd = ____. (b) Prove that the product of two
              odd numbers is always odd. Use the form 2k + 1.
            </>
          ),
          answer: (
            <>
              <p>(a) odd, odd.</p>
              <p>(b) (2j + 1)(2k + 1) = 2(2jk + j + k) + 1, which is an odd form.</p>
            </>
          )
        },
        {
          id: 'B11',
          marks: 4,
          prompt: (
            <>
              Can n² + n ever be odd for a whole number n? Explain using parity. (Theory only: this
              cannot be set as a practical task.)
            </>
          ),
          answer: <p>Never odd. n and n + 1 have opposite parity, so their product is even.</p>
        },
        {
          id: 'B12',
          marks: 4,
          prompt: (
            <>
              I am odd, greater than 1, and a factor of both 20 and 30. What number am I? Show how
              parity and the factor clues narrow it down.
            </>
          ),
          answer: (
            <p>
              5. Odd rules out the even common factors, the factor clue leaves 1 and 5, and it must
              be above 1.
            </p>
          )
        }
      ]
    },
    {
      id: 'C',
      title: 'Practical and Performance',
      meta: '20 marks · 30 minutes · done live and explained in writing',
      questions: [
        {
          id: 'C1',
          marks: 5,
          prompt: (
            <>
              Timed mental strip. Answer these in your head, writing only the answers, in 3 minutes:
              3 × 0.1; a tenth of 90; 5% of €60; 12 × 8; 999 − 387; 6 × 25; {`$\\frac{1}{8}$`} of
              200; 7²; 40 × 30; half of 4.6.
            </>
          ),
          answer: <p>0.3; 9; €3; 96; 612; 150; 25; 49; 1 200; 2.3.</p>
        },
        {
          id: 'C2',
          marks: 4,
          prompt: (
            <>
              Measurement task. You are given a ruler and three objects. Measure each in
              millimetres, convert each to centimetres, and add the three lengths in centimetres.
            </>
          ),
          answer: <p>Correct mm readings (2), correct cm conversion and sum (2).</p>
        },
        {
          id: 'C3',
          marks: 4,
          prompt: (
            <>
              Rate in context. Five identical pens cost €7.50. Find the cost of one, then the cost
              of eight. Show the unit-rate step.
            </>
          ),
          answer: <p>€1.50 per pen, then €12 for eight.</p>
        },
        {
          id: 'C4',
          marks: 7,
          prompt: (
            <>
              The five-number trick. The invigilator gives you a five-digit number A and lets you
              pick two five-digit numbers B and C. (a) Write D so that B + D = 99 999, and E so that
              C + E = 99 999. (b) Announce the total A + B + C + D + E before adding. (c) In one or
              two sentences, explain why the total is always A + 199 998.
            </>
          ),
          answer: (
            <>
              <p>(a) D and E are the nines-complements of B and C.</p>
              <p>(b) State the total before adding.</p>
              <p>
                (c) B + D and C + E each make 99 999, so the total is A + 2 × 99 999 = A + 199 998.
              </p>
              <NinesFig />
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneWholeNumbers() {
  const config = {
    documentTitle: 'Whole Numbers Exam - AETHER',
    briefing: {
      title: 'Whole Numbers',
      concepts: [
        'Place Value and Algorithms',
        'Mental Calculation Strategies',
        'Ordering and Comparison',
        'Odd and Even Numbers'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
