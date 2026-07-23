import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { FONT_BODY, FONT_LABEL, FONT_TEX } from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A1: place-value chart for 540.36 across powers of ten.
function PlaceValueFig() {
  const C = useVizColors()
  const cols = [
    ['10²', '5'],
    ['10¹', '4'],
    ['10⁰', '0'],
    ['·', '·'],
    ['10⁻¹', '3'],
    ['10⁻²', '6']
  ]
  return (
    <div style={{ margin: '12px 0 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'inline-block' }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {cols.map(([power, digit], i) => {
            const isPoint = power === '·'
            return (
              <div key={i} style={{ textAlign: 'center', fontFamily: FONT }}>
                <div style={{ fontSize: FONT_LABEL, color: C.dim, height: 18 }}>
                  {isPoint ? '' : power}
                </div>
                <div
                  style={{
                    width: isPoint ? 16 : 34,
                    height: 34,
                    lineHeight: '34px',
                    fontSize: FONT_BODY,
                    color: C.fg,
                    border: isPoint ? 'none' : `1px solid ${C.faint}`
                  }}
                >
                  {digit}
                </div>
              </div>
            )
          })}
        </div>
        <div
          style={{
            fontSize: FONT_LABEL,
            color: C.dim,
            textAlign: 'center',
            marginTop: 8,
            fontFamily: FONT
          }}
        >
          540.36 = 5×10² + 4×10¹ + 3×10⁻¹ + 6×10⁻²
        </div>
      </div>
    </div>
  )
}

// B6: number line 3.4 to 3.5 in ten parts; 3.47 and 3.428 marked.
function NumberLineFig() {
  const C = useVizColors()
  const x0 = 30
  const x1 = 374
  const lo = 3.4
  const hi = 3.5
  const sx = v => x0 + ((v - lo) / (hi - lo)) * (x1 - x0)
  const ticks = Array.from({ length: 11 }, (_, i) => lo + i * 0.01)
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 110"
        role="img"
        aria-label="Number line from 3.4 to 3.5 in ten parts, with 3.47 and 3.428 marked"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <line x1={x0} y1={58} x2={x1} y2={58} stroke={C.dim} strokeWidth={1.5} />
        {ticks.map((t, i) => {
          const ends = i === 0 || i === 10
          return (
            <g key={i}>
              <line
                x1={sx(t)}
                y1={52}
                x2={sx(t)}
                y2={64}
                stroke={ends ? C.fg : C.dim}
                strokeWidth={1}
              />
              {ends && (
                <text
                  x={sx(t)}
                  y={80}
                  textAnchor="middle"
                  fill={C.dim}
                  fontSize={FONT_LABEL}
                  fontFamily={FONT}
                >
                  {t.toFixed(1)}
                </text>
              )}
            </g>
          )
        })}
        <circle cx={sx(3.47)} cy={58} r={3.5} fill={C.fg} />
        <text
          x={sx(3.47)}
          y={44}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          3.47
        </text>
        <circle cx={sx(3.428)} cy={58} r={3.5} fill={C.fg} />
        <text
          x={sx(3.428)}
          y={100}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          3.428
        </text>
      </svg>
    </div>
  )
}

// B7: squeezing √5 between successive bounds on a zoomed line.
function SqueezeFig() {
  const C = useVizColors()
  const x0 = 40
  const x1 = 360
  const lo = 2.2
  const hi = 2.3
  const sx = v => x0 + ((v - lo) / (hi - lo)) * (x1 - x0)
  const root5 = 2.2360679
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 120"
        role="img"
        aria-label="Squeezing root five between 2.2 and 2.3, then between 2.23 and 2.24"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <line x1={x0} y1={66} x2={x1} y2={66} stroke={C.dim} strokeWidth={1.5} />
        {[2.2, 2.3].map(v => (
          <g key={v}>
            <line x1={sx(v)} y1={60} x2={sx(v)} y2={72} stroke={C.fg} strokeWidth={1} />
            <text
              x={sx(v)}
              y={88}
              textAnchor="middle"
              fill={C.dim}
              fontSize={FONT_LABEL}
              fontFamily={FONT}
            >
              {v.toFixed(1)}
            </text>
          </g>
        ))}
        {/* tighter bracket 2.23 – 2.24 */}
        <rect
          x={sx(2.23)}
          y={50}
          width={sx(2.24) - sx(2.23)}
          height={32}
          fill={C.fg}
          opacity={0.18}
        />
        {[2.23, 2.24].map(v => (
          <line
            key={v}
            x1={sx(v)}
            y1={50}
            x2={sx(v)}
            y2={82}
            stroke={C.fg}
            strokeWidth={1}
            strokeDasharray="3 3"
          />
        ))}
        <circle cx={sx(root5)} cy={66} r={3.5} fill={C.fg} />
        <text
          x={sx(root5)}
          y={40}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          √5 ≈ 2.236
        </text>
        <text
          x={(x0 + x1) / 2}
          y={110}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          2.23² &lt; 5 &lt; 2.24²
        </text>
      </svg>
    </div>
  )
}

// B8: the ten unit fractions, terminating (boxed) vs repeating (struck).
function TerminatingGridFig() {
  const C = useVizColors()
  const items = [
    ['1/2', true],
    ['1/3', false],
    ['1/4', true],
    ['1/5', true],
    ['1/6', false],
    ['1/8', true],
    ['1/9', false],
    ['1/15', false],
    ['1/16', true],
    ['1/20', true]
  ]
  return (
    <div style={{ margin: '12px 0 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 50px)', gap: 4 }}>
          {items.map(([label, terminates]) => (
            <div
              key={label}
              style={{
                width: 50,
                height: 32,
                lineHeight: '32px',
                textAlign: 'center',
                fontSize: FONT_TEX,
                fontFamily: FONT,
                color: terminates ? C.fg : C.dim,
                border: terminates ? `1px solid ${C.fg}` : `1px solid ${C.faint}`,
                textDecoration: terminates ? 'none' : 'line-through'
              }}
            >
              {label}
            </div>
          ))}
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
          boxed = terminates (only 2s and 5s) · struck = repeats
        </div>
      </div>
    </div>
  )
}

const exam = {
  sections: [
    {
      id: 'A',
      title: 'Theory',
      meta: '45 marks · 45 minutes · no calculator',
      questions: [
        {
          id: 'A1',
          marks: 3,
          prompt: (
            <>
              (a) State the place value of the digit 7 in 3.0726. (b) Write 540.36 in expanded form
              using powers of 10, including negative powers.
            </>
          ),
          answer: (
            <>
              <p>(a) Hundredths, that is 0.07.</p>
              <p>
                (b){' '}
                {`$540.36 = 5 \\times 10^2 + 4 \\times 10^1 + 3 \\times 10^{-1} + 6 \\times 10^{-2}$`}
                .
              </p>
              <PlaceValueFig />
            </>
          )
        },
        {
          id: 'A2',
          marks: 3,
          prompt: (
            <>
              (a) Write {`$10^{-3}$`} as a fraction. (b) Simplify {`$10^5 \\times 10^{-2}$`} as a
              single power of 10. (c) Write that value as an ordinary number.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$10^{-3} = \\frac{1}{1000}$`}.</p>
              <p>(b) {`$10^5 \\times 10^{-2} = 10^3$`}.</p>
              <p>(c) 1000.</p>
            </>
          )
        },
        {
          id: 'A3',
          marks: 5,
          prompt: (
            <>
              (a) Write 0.275 as a fraction with a power-of-10 denominator, then simplify fully. (b)
              Explain whether writing 0.275 as 0.2750 changes its value, and give one situation
              where adding a zero does change a number's value. (c) Write 6.48 as its integer part
              plus its decimal part.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$0.275 = \\frac{275}{1000} = \\frac{11}{40}$`}.</p>
              <p>
                (b) It is unchanged. A trailing zero after the last digit adds nothing. But a zero
                that moves the other digits does change the value, like 27 becoming 270, or a zero
                inserted between digits.
              </p>
              <p>(c) {`$6.48 = 6 + 0.48$`}.</p>
            </>
          )
        },
        {
          id: 'A4',
          marks: 3,
          prompt: (
            <>
              Maria says "0.4 is smaller than 0.39 because 39 is bigger than 4." Explain her error,
              state which is larger, and justify it with a common-denominator comparison.
            </>
          ),
          answer: (
            <>
              <p>She compared the digit strings instead of the place value.</p>
              <p>
                0.4 is larger. Write both over 100: {`$0.4 = \\frac{40}{100}$`} and{' '}
                {`$0.39 = \\frac{39}{100}$`}. Since {`$40 > 39$`}, we get {`$0.4 > 0.39$`}.
              </p>
            </>
          )
        },
        {
          id: 'A5',
          marks: 5,
          prompt: (
            <>
              (a) Write 0.00056 in scientific notation. (b) Write {`$3.08 \\times 10^4$`} as an
              ordinary number. (c) Which is larger, {`$4.5 \\times 10^6$`} or {`$8.1 \\times 10^5$`}
              ? Explain the rule for different exponents. (d) Write −4500 in scientific notation.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$5.6 \\times 10^{-4}$`}.</p>
              <p>(b) 30 800.</p>
              <p>
                (c) {`$4.5 \\times 10^6$`} is larger. Compare the exponents first; the larger
                exponent wins, whatever the front numbers are.
              </p>
              <p>(d) {`$-4.5 \\times 10^3$`}.</p>
            </>
          )
        },
        {
          id: 'A6',
          marks: 6,
          prompt: (
            <>
              (a) Evaluate {`$1.2 \\times 0.05$`}, explaining how you place the decimal point by
              counting decimal places. (b) Convert {`$\\frac{7}{8}$`} to a decimal by long division,
              showing working. (c) Using the prime factors of each denominator, explain why{' '}
              {`$\\frac{7}{8}$`} terminates but {`$\\frac{7}{12}$`} does not.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$12 \\times 5 = 60$`}. There are 3 decimal places in total (1 in 1.2, 2 in
                0.05), so {`$1.2 \\times 0.05 = 0.06$`}.
              </p>
              <p>
                (b) {`$7 \\div 8 = 0.875$`} (8 into 70 is 8 r 6, into 60 is 7 r 4, into 40 is 5 r
                0).
              </p>
              <p>
                (c) {`$8 = 2^3$`}, only 2s, so it terminates. {`$12 = 2^2 \\times 3$`}; the factor 3
                means it repeats.
              </p>
            </>
          )
        },
        {
          id: 'A7',
          marks: 3,
          prompt: (
            <>
              (a) Express {`$47 \\div 6$`} in the form {`$a = qd + r$`} with {`$0 \\le r < d$`},
              stating q and r. (b) Explain why r must always be strictly less than d.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$47 = 6 \\times 7 + 5$`}, so {`$q = 7$`} and {`$r = 5$`}.
              </p>
              <p>
                (b) If {`$r \\ge d$`}, another whole d could still be removed. That would raise the
                quotient. So the true remainder must be smaller than d.
              </p>
            </>
          )
        },
        {
          id: 'A8',
          marks: 4,
          prompt: (
            <>
              (a) Write 0.7777… in bar notation and state its period. (b) Convert 0.363636… to a
              fraction in lowest terms using the multiply-and-subtract method. Show working.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$0.\\overline{7}$`}, period 1.</p>
              <p>
                (b) Let {`$x = 0.\\overline{36}$`}. Then {`$100x = 36.\\overline{36}$`}. Subtract:{' '}
                {`$99x = 36$`}, so {`$x = \\frac{36}{99} = \\frac{4}{11}$`}.
              </p>
            </>
          )
        },
        {
          id: 'A9',
          marks: 3,
          prompt: (
            <>
              Convert 0.58333… (only the 3 repeating) to a fraction in lowest terms. Show the
              shift-and-subtract steps.
            </>
          ),
          answer: (
            <>
              <p>
                Let {`$x = 0.58\\overline{3}$`}. Then {`$100x = 58.\\overline{3}$`} and{' '}
                {`$1000x = 583.\\overline{3}$`}.
              </p>
              <p>
                Subtract: {`$900x = 525$`}, so {`$x = \\frac{525}{900} = \\frac{7}{12}$`}.
              </p>
            </>
          )
        },
        {
          id: 'A10',
          marks: 4,
          prompt: (
            <>
              (a) Prove that {`$0.\\overline{9} = 1$`} algebraically. Let {`$x = 0.\\overline{9}$`},
              multiply by 10, then subtract. (b) State what this shows about expansions that appear
              to end in {`$\\overline{9}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Let {`$x = 0.\\overline{9}$`}. Then {`$10x = 9.\\overline{9}$`}. Subtract:{' '}
                {`$9x = 9$`}, so {`$x = 1$`}.
              </p>
              <p>
                (b) Such a tail equals the rounded-up terminating decimal. So no number's single
                expansion truly ends in {`$\\overline{9}$`}.
              </p>
            </>
          )
        },
        {
          id: 'A11',
          marks: 6,
          prompt: (
            <>
              (a) State the effect on the decimal point of multiplying 4.6 by {`$10^3$`}, and give
              the result. (b) State the theorem that every fraction is a finite or repeating
              decimal, and the exact criterion for it to be finite. (c) Explain, using remainders in
              long division, why every fraction must terminate or eventually repeat.
            </>
          ),
          answer: (
            <>
              <p>(a) The point moves 3 places right, giving 4600.</p>
              <p>
                (b) Every fraction is either finite or eventually repeating. It is finite exactly
                when its denominator in lowest terms is {`$2^a \\times 5^b$`}.
              </p>
              <p>
                (c) Dividing by d leaves only d possible remainders. If a remainder hits 0 the
                decimal stops. Otherwise some remainder must repeat, and from there the digits
                repeat forever.
              </p>
            </>
          )
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical and Applied',
      meta: '45 marks · 45 minutes · calculator allowed',
      questions: [
        {
          id: 'B1',
          marks: 4,
          prompt: (
            <>
              A report states a concert crowd was "53 827 people." (a) Explain why this is likely
              false precision. (b) Give a more sensible estimate. (c) State one reason real life
              uses estimates rather than exact figures.
            </>
          ),
          answer: (
            <>
              <p>
                (a) A crowd cannot be counted to the exact person. Showing 53 827 pretends to a
                precision no one actually has.
              </p>
              <p>(b) About 54 000 people.</p>
              <p>
                (c) Exact counts are slow, costly, or impossible, and an estimate is enough to
                decide.
              </p>
            </>
          )
        },
        {
          id: 'B2',
          marks: 5,
          prompt: (
            <>
              (a) Round 0.040721 to 3 significant figures. (b) Round 0.040721 to 3 decimal places.
              (c) Explain why the answers differ, referring to the leading zeros.
            </>
          ),
          answer: (
            <>
              <p>(a) 0.0407.</p>
              <p>(b) 0.041.</p>
              <p>
                (c) Significant figures count from the first non-zero digit, so the leading zeros do
                not count. Decimal places count from the point, so those zeros do count. The two
                rules start counting in different places.
              </p>
            </>
          )
        },
        {
          id: 'B3',
          marks: 5,
          prompt: (
            <>
              (a) Estimate {`$(412 \\times 5.87) \\div 0.21$`} by rounding each number to 1
              significant figure. Show the rounded values and your estimate. (b) A calculator shows
              11518.9. State with a reason whether this is reasonable. (c) Explain why estimating
              first is a useful habit.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Rounded: 400, 6, 0.2. Estimate{' '}
                {`$(400 \\times 6) \\div 0.2 = 2400 \\div 0.2 = 12000$`}.
              </p>
              <p>(b) Reasonable, since {`$11518.9 \\approx 12000$`}.</p>
              <p>(c) It catches order-of-magnitude mistakes, like a misplaced decimal point.</p>
            </>
          )
        },
        {
          id: 'B4',
          marks: 5,
          prompt: (
            <>
              (a) A length is 24 cm to the nearest cm. Write its lower and upper bounds, using a
              strict inequality for the upper bound. (b) A mass is 7.50 kg to 3 significant figures.
              State the rounding unit and write the error interval.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$23.5 \\le L < 24.5$`}.</p>
              <p>
                (b) The rounding unit is 0.01 kg, so the half-unit is 0.005 kg. Interval:{' '}
                {`$7.495 \\le m < 7.505$`}.
              </p>
            </>
          )
        },
        {
          id: 'B5',
          marks: 5,
          prompt: (
            <>
              A pipe's true length is 2.50 m; an estimate gives 2.36 m. (a) Find the absolute error.
              (b) Find the relative error as a percentage. (c) Classify it (under 5% excellent,
              5–10% acceptable, over 10% too rough). (d) State what relative error tells you that
              absolute error does not.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$|2.50 - 2.36| = 0.14$`} m.</p>
              <p>(b) {`$\\frac{0.14}{2.50} = 0.056 = 5.6\\%$`}.</p>
              <p>(c) Acceptable (it falls in the 5–10% band).</p>
              <p>
                (d) It shows the error as a proportion of the true size, not just its raw amount.
              </p>
            </>
          )
        },
        {
          id: 'B6',
          marks: 3,
          prompt: (
            <>
              Draw a number line from 3.4 to 3.5 in ten equal parts. Mark and label 3.47 and 3.428.
            </>
          ),
          answer: (
            <>
              <p>
                Each small part is 0.01. So 3.47 sits at the 7th mark. 3.428 sits between the 2nd
                and 3rd marks, a little under three-tenths of the way along.
              </p>
              <NumberLineFig />
            </>
          )
        },
        {
          id: 'B7',
          marks: 9,
          prompt: (
            <>
              (a) Between which two whole numbers does {`$\\sqrt{5}$`} lie? (b) Use the squeezing
              method to find {`$\\sqrt{5}$`} to 1 decimal place. Show the values you square at each
              step. (c) Continue the squeeze to find {`$\\sqrt{5}$`} to 2 decimal places. (d) π =
              3.14159… is infinite and non-repeating. Explain why exact arithmetic with such
              decimals is difficult.
            </>
          ),
          answer: (
            <>
              <p>(a) Between 2 and 3, since {`$2^2 = 4 < 5 < 9 = 3^2$`}.</p>
              <p>
                (b) {`$2.2^2 = 4.84 < 5$`} and {`$2.3^2 = 5.29 > 5$`}, so it is 2.2 to one decimal
                place. Checking, {`$2.23^2 < 5 < 2.24^2$`} confirms the tenths digit.
              </p>
              <p>
                (c) {`$2.236^2 \\approx 4.9997$`} and {`$2.237^2 \\approx 5.0042$`}, so{' '}
                {`$\\sqrt{5} \\approx 2.24$`} to two decimal places.
              </p>
              <p>
                (d) The digits never end and never repeat. Carries can come from far down the line,
                so no single digit is ever final and the calculation cannot be completed exactly.
              </p>
              <SqueezeFig />
            </>
          )
        },
        {
          id: 'B8',
          marks: 9,
          prompt: (
            <>
              Given:{' '}
              {`$\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\frac{1}{5}, \\frac{1}{6}, \\frac{1}{8}, \\frac{1}{9}, \\frac{1}{15}, \\frac{1}{16}, \\frac{1}{20}$`}
              . (a) Sort them into terminating and repeating. (b) Write each denominator as prime
              factors, and state a rule predicting which terminate. (c) Without dividing, predict
              whether {`$\\frac{7}{40}$`} and {`$\\frac{5}{14}$`} terminate, and justify each.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Terminate:{' '}
                {`$\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{5}, \\frac{1}{8}, \\frac{1}{16}, \\frac{1}{20}$`}
                . Repeat: {`$\\frac{1}{3}, \\frac{1}{6}, \\frac{1}{9}, \\frac{1}{15}$`}.
              </p>
              <p>
                (b) Denominators: {`$2, 2^2, 5, 2^3, 2^4, 2^2 \\times 5$`} (these terminate) versus{' '}
                {`$3, 2 \\times 3, 3^2, 3 \\times 5$`} (these repeat). Rule: a fraction in lowest
                terms terminates exactly when its denominator has only the prime factors 2 and 5.
              </p>
              <p>
                (c) {`$40 = 2^3 \\times 5$`}, only 2s and 5s, so {`$\\frac{7}{40}$`} terminates.{' '}
                {`$14 = 2 \\times 7$`}; the factor 7 means {`$\\frac{5}{14}$`} repeats.
              </p>
              <TerminatingGridFig />
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneDecimals() {
  const config = {
    documentTitle: 'Decimals Exam - AETHER',
    briefing: {
      title: 'Decimals',
      concepts: [
        'Decimal Fundamentals',
        'Infinite and Repeating Decimals',
        'Approximation: Significant Figures and Decimal Places',
        'Decimal Expansion Proofs'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
