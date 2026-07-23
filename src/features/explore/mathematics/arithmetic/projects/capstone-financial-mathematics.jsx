import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { FONT_LABEL, FONT_SMALL } from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A5: successive discounts as multipliers: 200 → 160 (×0.8) → 144 (×0.9).
function DiscountFig() {
  const C = useVizColors()
  const x0 = 30
  const scale = 320 / 200
  const Bar = ({ y, value, label }) => (
    <g>
      <rect
        x={x0}
        y={y}
        width={value * scale}
        height={26}
        fill={C.faint}
        stroke={C.dim}
        strokeWidth={1}
      />
      <text
        x={x0 + value * scale + 8}
        y={y + 18}
        fill={C.fg}
        fontSize={FONT_LABEL}
        fontFamily={FONT}
      >
        {label}
      </text>
    </g>
  )
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 140"
        role="img"
        aria-label="Bars showing 200 euro reduced to 160 then to 144"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <Bar y={16} value={200} label="€200 start" />
        <Bar y={56} value={160} label="€160  (×0.80)" />
        <Bar y={96} value={144} label="€144  (×0.90)" />
        <text x={x0} y={134} fill={C.dim} fontSize={FONT_LABEL} fontFamily={FONT}>
          0.80 × 0.90 = 0.72, so 28% off, not 30%
        </text>
      </svg>
    </div>
  )
}

// B1: simple (linear) vs compound (curving) growth of €6000 over years.
function SimpleVsCompoundFig() {
  const C = useVizColors()
  const ox = 50
  const oy = 150
  const w = 300
  const h = 120
  const years = 12
  const base = 6000
  const top = base + 6000 * 0.04 * years // simple at year 12 = 8880, the tallest
  const px = t => ox + (t / years) * w
  const py = v => oy - ((v - base) / (top - base)) * h
  const simple = []
  const compound = []
  for (let t = 0; t <= years; t++) {
    simple.push(`${px(t).toFixed(1)},${py(base + base * 0.04 * t).toFixed(1)}`)
    compound.push(`${px(t).toFixed(1)},${py(base * Math.pow(1.036, t)).toFixed(1)}`)
  }
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 380 184"
        role="img"
        aria-label="Linear simple-interest line versus a curving compound-interest line over twelve years"
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
          y={py(base + base * 0.04 * years) - 6}
          textAnchor="end"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          P: 4% simple
        </text>
        <text
          x={px(years)}
          y={py(base * Math.pow(1.036, years)) + 14}
          textAnchor="end"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          Q: 3.6% compound
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

// B2: compound depreciation of the van against the half-value line.
function DepreciationFig() {
  const C = useVizColors()
  const x0 = 40
  const scale = 320 / 30000
  const vals = [
    [30000, '2026: €30,000'],
    [22500, '2027: €22,500'],
    [19125, '2028: €19,125'],
    [16256.25, '2029: €16,256']
  ]
  const halfX = x0 + 15000 * scale
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 170"
        role="img"
        aria-label="Falling value bars for the van, staying just above the half-value line of 15000"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <line
          x1={halfX}
          y1={6}
          x2={halfX}
          y2={150}
          stroke={C.fg}
          strokeWidth={1}
          strokeDasharray="3 3"
        />
        <text
          x={halfX}
          y={164}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_SMALL}
          fontFamily={FONT}
        >
          half = €15,000
        </text>
        {vals.map(([v, label], i) => (
          <g key={i}>
            <rect
              x={x0}
              y={12 + i * 34}
              width={v * scale}
              height={24}
              fill={C.faint}
              stroke={C.dim}
              strokeWidth={1}
            />
            <text x={x0 + 6} y={28 + i * 34} fill={C.fg} fontSize={FONT_LABEL} fontFamily={FONT}>
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

// B4: Sara's €45,000 income split into tax bands, each at its own rate.
function TaxBandFig() {
  const C = useVizColors()
  const x0 = 30
  const scale = 340 / 45000
  const bands = [
    [12000, '0%', '€0', 0.12],
    [18000, '20%', '€3,600', 0.4],
    [15000, '35%', '€5,250', 0.65]
  ]
  let x = x0
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 110"
        role="img"
        aria-label="Income of 45000 split into a tax-free band, a 20 percent band and a 35 percent band"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        {bands.map(([amount, rate, tax, op], i) => {
          const wseg = amount * scale
          const seg = (
            <g key={i}>
              <rect
                x={x}
                y={28}
                width={wseg}
                height={34}
                fill={C.fg}
                opacity={op}
                stroke={C.fg}
                strokeWidth={1}
              />
              <text
                x={x + wseg / 2}
                y={22}
                textAnchor="middle"
                fill={C.dim}
                fontSize={FONT_LABEL}
                fontFamily={FONT}
              >
                {rate}
              </text>
              <text
                x={x + wseg / 2}
                y={49}
                textAnchor="middle"
                fill={C.fg}
                fontSize={FONT_LABEL}
                fontFamily={FONT}
              >
                {tax}
              </text>
            </g>
          )
          x += wseg
          return seg
        })}
        <text
          x={x0 + (45000 * scale) / 2}
          y={80}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          total tax = €8,850 on €45,000
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
      meta: '52 marks · 60 minutes · calculator allowed',
      questions: [
        {
          id: 'A1',
          marks: 3,
          prompt: (
            <>
              A bicycle's price rose from €240 to €294. (a) Calculate the percentage change. (b)
              State whether it is an increase or decrease and how you know from the sign.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$\\frac{294 - 240}{240} \\times 100 = \\frac{54}{240} \\times 100 = 22.5\\%$`}
                .
              </p>
              <p>(b) An increase, because new minus old is positive.</p>
            </>
          )
        },
        {
          id: 'A2',
          marks: 4,
          prompt: (
            <>
              A shop buys a lamp for €60 and sells it for €78. (a) Find the percentage profit, using
              cost price as the base. (b) The shop later sells an identical lamp for €51. Find the
              percentage loss.
            </>
          ),
          answer: (
            <>
              <p>(a) Profit €18, so {`$\\frac{18}{60} \\times 100 = 30\\%$`}.</p>
              <p>(b) Loss €9, so {`$\\frac{9}{60} \\times 100 = 15\\%$`}.</p>
            </>
          )
        },
        {
          id: 'A3',
          marks: 3,
          prompt: (
            <>
              A coat has a marked price of €120. A 35% discount is applied. Using the multiplier
              method, find the selling price.
            </>
          ),
          answer: (
            <p>
              Multiplier {`$= 1 - 0.35 = 0.65$`}. So {`$120 \\times 0.65 = €78$`}.
            </p>
          )
        },
        {
          id: 'A4',
          marks: 3,
          prompt: (
            <>
              A salary of €2,400 per month is increased by 4.5%. Use the multiplier{' '}
              {`$(1 + \\frac{r}{100})$`} to find the new salary.
            </>
          ),
          answer: (
            <p>
              Multiplier {`$= 1.045$`}. So {`$2400 \\times 1.045 = €2{,}508$`}.
            </p>
          )
        },
        {
          id: 'A5',
          marks: 5,
          prompt: (
            <>
              A jacket costs €200. In a sale it is reduced by 20%, then a further 10% is taken off
              the reduced price. (a) Calculate the final price. (b) A customer says "that's 30% off,
              so €140." Explain why this is wrong and state the true overall percentage discount.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$200 \\times 0.8 \\times 0.9 = €144$`}.</p>
              <p>
                (b) The second 10% comes off the already-reduced €160, not the original €200. So the
                multipliers multiply, {`$0.8 \\times 0.9 = 0.72$`}, giving a true discount of{' '}
                {`$1 - 0.72 = 28\\%$`}, not 30%.
              </p>
              <DiscountFig />
            </>
          )
        },
        {
          id: 'A6',
          marks: 3,
          prompt: (
            <>
              A bank raises its savings rate from 2% to 3%. (a) State the increase in percentage
              points. (b) State the percentage increase in the rate itself, and explain the
              difference between your two answers.
            </>
          ),
          answer: (
            <>
              <p>(a) 1 percentage point.</p>
              <p>
                (b) {`$\\frac{3 - 2}{2} \\times 100 = 50\\%$`}. The percentage point is the plain
                gap between the two rates; the 50% is that gap as a proportion of the starting rate.
              </p>
            </>
          )
        },
        {
          id: 'A7',
          marks: 3,
          prompt: (
            <>A sofa is sold for €442 after a 15% discount. Find its original marked price.</>
          ),
          answer: <p>€442 represents 85% of the original. So {`$442 \\div 0.85 = €520$`}.</p>
        },
        {
          id: 'A8',
          marks: 4,
          prompt: (
            <>
              A trader buys a watch for €80 and sells it for €100. (a) Find the profit as a
              percentage of the cost price (markup). (b) Find the profit as a percentage of the
              selling price (margin). (c) Explain why the two answers differ even though the cash
              profit is the same.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$\\frac{20}{80} \\times 100 = 25\\%$`}.</p>
              <p>(b) {`$\\frac{20}{100} \\times 100 = 20\\%$`}.</p>
              <p>
                (c) They use different bases: markup divides by the cost, margin divides by the
                selling price.
              </p>
            </>
          )
        },
        {
          id: 'A9',
          marks: 4,
          prompt: (
            <>
              €1,500 is invested at 4% per annum simple interest for 9 months. (a) Convert 9 months
              to years. (b) Calculate the simple interest using {`$I = \\frac{PRT}{100}$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$\\frac{9}{12} = 0.75$`} year.</p>
              <p>(b) {`$I = \\frac{1500 \\times 4 \\times 0.75}{100} = €45$`}.</p>
            </>
          )
        },
        {
          id: 'A10',
          marks: 3,
          prompt: (
            <>
              A simple-interest investment of €2,000 earns €120 interest in 2 years. Find the annual
              interest rate R.
            </>
          ),
          answer: (
            <p>{`$R = \\frac{100 I}{PT} = \\frac{100 \\times 120}{2000 \\times 2} = 3\\%$`}.</p>
          )
        },
        {
          id: 'A11',
          marks: 4,
          prompt: (
            <>
              €2,500 is invested at 3% per annum compound interest for 4 years. (a) Write the
              multiplier for one year. (b) Calculate the amount after 4 years.
            </>
          ),
          answer: (
            <>
              <p>(a) 1.03.</p>
              <p>(b) {`$2500 \\times 1.03^4 = €2{,}813.77$`}.</p>
            </>
          )
        },
        {
          id: 'A12',
          marks: 4,
          prompt: (
            <>
              €4,000 is invested at a nominal 6% per annum, compounded monthly, for 1 year, using{' '}
              {`$A = P(1 + \\frac{r}{n})^{nt}$`}. (a) Calculate the amount after 1 year. (b) State
              the value of n you used.
            </>
          ),
          answer: (
            <>
              <p>
                (a){' '}
                {`$4000 \\times (1 + \\frac{0.06}{12})^{12} = 4000 \\times 1.005^{12} = €4{,}246.71$`}
                .
              </p>
              <p>(b) {`$n = 12$`}.</p>
            </>
          )
        },
        {
          id: 'A13',
          marks: 4,
          prompt: (
            <>
              For a nominal 6% compounded monthly: (a) Find the effective annual rate (EAR). (b)
              Explain why the EAR is higher than the nominal 6%.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$(1.005^{12} - 1) \\times 100 \\approx 6.2\\%$`} (6.17%).</p>
              <p>
                (b) Interest is added each month and then itself earns interest within the same
                year. So slightly more than 6% builds up over the year.
              </p>
            </>
          )
        },
        {
          id: 'A14',
          marks: 5,
          prompt: (
            <>
              An investment grows from €5,000 to €5,800 in 2 years with annual compound interest.
              (a) Find the annual interest rate. (b) Use the Rule of 72 to estimate how many years
              it would take to double at that rate.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$\\frac{5800}{5000} = (1 + r)^2$`}, so {`$1 + r = \\sqrt{1.16}$`} and{' '}
                {`$r \\approx 7.7\\%$`}.
              </p>
              <p>(b) {`$72 \\div 7.7 \\approx 9.4$`} years.</p>
            </>
          )
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical and Applied',
      meta: '48 marks · 60 minutes · calculator allowed',
      questions: [
        {
          id: 'B1',
          marks: 8,
          prompt: (
            <>
              Lena has €6,000 to invest for 3 years. Account P pays 4.0% per annum simple interest.
              Account Q pays 3.6% per annum compound interest, compounded annually. (a) Calculate
              the final balance under each account. (b) State which is better after 3 years and by
              how much. (c) Explain, using linear vs exponential growth, whether Q would eventually
              overtake P over a much longer term.
            </>
          ),
          answer: (
            <>
              <p>
                (a) P: {`$6000 + \\frac{6000 \\times 4 \\times 3}{100} = €6{,}720$`}. Q:{' '}
                {`$6000 \\times 1.036^3 = €6{,}671.74$`}.
              </p>
              <p>(b) P is better after 3 years, by {`$6720 - 6671.74 = €48.26$`}.</p>
              <p>
                (c) Simple interest adds a fixed €240 each year (linear). Compound interest grows
                exponentially, so its yearly gain keeps rising. Over a long enough term Q overtakes
                P.
              </p>
              <SimpleVsCompoundFig />
            </>
          )
        },
        {
          id: 'B2',
          marks: 8,
          prompt: (
            <>
              A van is bought on 01/03/2026 for €30,000. It depreciates by 25% in the first year,
              then 15% per year after that (compound depreciation). (a) Find its value on 01/03/2027
              and on 01/03/2028. (b) A buyer offers €17,000 on 01/03/2028. Should the owner accept,
              purely on value? Justify. (c) Show whether the van has lost more than half its
              original value by 01/03/2029.
            </>
          ),
          answer: (
            <>
              <p>
                (a) 2027: {`$30000 \\times 0.75 = €22{,}500$`}. 2028:{' '}
                {`$22500 \\times 0.85 = €19{,}125$`}.
              </p>
              <p>
                (b) The offer €17,000 is below the model value €19,125, so on value alone, reject
                it.
              </p>
              <p>
                (c) 2029: {`$19125 \\times 0.85 = €16{,}256.25$`}. Half of €30,000 is €15,000. Since{' '}
                €16,256.25 is above €15,000, it has not lost more than half.
              </p>
              <DepreciationFig />
            </>
          )
        },
        {
          id: 'B3',
          marks: 8,
          prompt: (
            <>
              Marko's salary is frozen at €36,000 per year. Inflation runs at 3% per year for 4
              years. (a) Calculate the real value of his €36,000 after 4 years, using 3% compound
              erosion. (b) State how much purchasing power he has lost, in euros. (c) His manager
              says "inflation is 3% for 4 years, so you've lost 12%." Explain whether this is
              exactly correct.
            </>
          ),
          answer: (
            <>
              <p>(a) Real value {`$= \\frac{36000}{1.03^4} = €31{,}985.09$`}.</p>
              <p>(b) Lost {`$36000 - 31985.09 = €4{,}014.91$`} of purchasing power.</p>
              <p>
                (c) Not exact. {`$1.03^4 = 1.1255$`}, about 12.55% cumulative, not 12%, because each
                year's inflation compounds on the previous level rather than just adding up.
              </p>
            </>
          )
        },
        {
          id: 'B4',
          marks: 12,
          prompt: (
            <>
              A country taxes annual income: €0–€12,000 at 0%; €12,001–€30,000 at 20%;
              €30,001–€60,000 at 35%; over €60,000 at 45%. (a) Sara earns €45,000. Using the band
              method (each band at its own rate), calculate her total tax. (b) Calculate her
              effective (average) tax rate. (c) State her marginal rate and explain what it means.
              (d) Tom earns €70,000. Calculate his total tax and his effective rate.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Band 1: €0. Band 2: {`$18000 \\times 20\\% = €3{,}600$`}. Band 3:{' '}
                {`$15000 \\times 35\\% = €5{,}250$`}. Total {`$= €8{,}850$`}.
              </p>
              <p>(b) {`$\\frac{8850}{45000} \\times 100 = 19.7\\%$`}.</p>
              <p>(c) Marginal rate 35%. It is the rate paid on the next euro she earns.</p>
              <p>
                (d) Band 2: €3,600. Band 3: {`$30000 \\times 35\\% = €10{,}500$`}. Band 4:{' '}
                {`$10000 \\times 45\\% = €4{,}500$`}. Total €18,600. Effective{' '}
                {`$\\frac{18600}{70000} \\times 100 = 26.6\\%$`}.
              </p>
              <TaxBandFig />
            </>
          )
        },
        {
          id: 'B5',
          marks: 12,
          prompt: (
            <>
              Country A uses a flat tax of 28% on all income, no allowance. Country B uses the
              tiered system from B4. (a) For an income of €25,000, calculate the tax in each country
              and state which is cheaper. (b) For an income of €90,000, calculate the tax in each
              country and state which is cheaper. (c) Explain who tends to be favoured by a flat tax
              and who by a tiered tax, and identify roughly the income level where the two cost the
              same.
            </>
          ),
          answer: (
            <>
              <p>
                (a) A: {`$25000 \\times 0.28 = €7{,}000$`}. B: {`$13000 \\times 20\\% = €2{,}600$`}.
                B is cheaper, by €4,400.
              </p>
              <p>
                (b) A: {`$90000 \\times 0.28 = €25{,}200$`}. B:{' '}
                {`$3600 + 10500 + 30000 \\times 45\\% = €27{,}600$`}. A is cheaper, by €2,400.
              </p>
              <p>
                (c) A flat tax favours higher earners. The tiered tax favours lower earners, through
                the tax-free band and lower starting rates. The two cost about the same around
                €75,000–€80,000.
              </p>
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneFinancialMathematics() {
  const config = {
    documentTitle: 'Financial Mathematics Exam - AETHER',
    briefing: {
      title: 'Financial Mathematics',
      concepts: [
        'Discount, Profit, Loss',
        'Simple and Compound Interest',
        'Growth, Depreciation, Applied Tax',
        'Percentage Increase and Decrease'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
