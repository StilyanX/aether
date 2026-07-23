import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { FONT_LABEL } from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A3: hundred-square with 45 cells shaded: 45% = 45/100 = 9/20.
function PercentGridFig() {
  const C = useVizColors()
  const x0 = 70
  const y0 = 12
  const cell = 18
  const cells = []
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      const n = r * 10 + c
      const on = n < 45
      cells.push(
        <rect
          key={n}
          x={x0 + c * cell}
          y={y0 + r * cell}
          width={cell}
          height={cell}
          fill={on ? C.fg : 'none'}
          opacity={on ? 0.5 : 1}
          stroke={C.faint}
          strokeWidth={1}
        />
      )
    }
  }
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 320 220"
        role="img"
        aria-label="A 10 by 10 grid with 45 of the 100 cells shaded"
        style={{ display: 'block', width: '100%', maxWidth: 280, height: 'auto', margin: '0 auto' }}
      >
        {cells}
        <rect
          x={x0}
          y={y0}
          width={cell * 10}
          height={cell * 10}
          fill="none"
          stroke={C.fg}
          strokeWidth={1.5}
        />
        <text
          x={160}
          y={210}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          45% = 45/100 = 9/20
        </text>
      </svg>
    </div>
  )
}

// A2: benchmark fractions placed along a 0% to 100% strip.
function BenchmarkFig() {
  const C = useVizColors()
  const x0 = 30
  const x1 = 374
  const sx = p => x0 + (p / 100) * (x1 - x0)
  const marks = [
    [12.5, '1/8'],
    [20, '1/5'],
    [33.333, '1/3'],
    [50, '1/2']
  ]
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 96"
        role="img"
        aria-label="Strip from 0 to 100 percent with benchmark fractions one eighth, one fifth, one third and one half marked"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <line x1={x0} y1={56} x2={x1} y2={56} stroke={C.dim} strokeWidth={1.5} />
        {[0, 100].map(p => (
          <g key={p}>
            <line x1={sx(p)} y1={50} x2={sx(p)} y2={62} stroke={C.fg} strokeWidth={1} />
            <text
              x={sx(p)}
              y={78}
              textAnchor="middle"
              fill={C.dim}
              fontSize={FONT_LABEL}
              fontFamily={FONT}
            >
              {p}%
            </text>
          </g>
        ))}
        {marks.map(([p, label]) => (
          <g key={label}>
            <line x1={sx(p)} y1={50} x2={sx(p)} y2={62} stroke={C.fg} strokeWidth={1} />
            <circle cx={sx(p)} cy={56} r={3} fill={C.fg} />
            <text
              x={sx(p)}
              y={40}
              textAnchor="middle"
              fill={C.fg}
              fontSize={FONT_LABEL}
              fontFamily={FONT}
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

// B6: the symmetry trap: 200 → 240 (×1.20) → 192 (×0.80).
function ChangeMultiplierFig() {
  const C = useVizColors()
  const x0 = 30
  const scale = 320 / 240 // €240 maps to the widest bar
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
        aria-label="Bars showing 200 euro rising to 240 then falling to 192"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <Bar y={16} value={200} label="€200 start" />
        <Bar y={56} value={240} label="€240  (×1.20)" />
        <Bar y={96} value={192} label="€192  (×0.80)" />
        <text x={x0} y={134} fill={C.dim} fontSize={FONT_LABEL} fontFamily={FONT}>
          the −20% acts on €240, not €200, so it removes more than was added
        </text>
      </svg>
    </div>
  )
}

// B8: area change: 10×10 square (100) versus 12×7.5 rectangle (90).
function AreaChangeFig() {
  const C = useVizColors()
  const u = 11 // px per cm
  const ox = 40
  const oy = 24
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 360 200"
        role="img"
        aria-label="A 10 by 10 square of area 100 next to a 12 by 7.5 rectangle of area 90"
        style={{ display: 'block', width: '100%', maxWidth: 340, height: 'auto', margin: '0 auto' }}
      >
        {/* original 10 x 10 */}
        <rect
          x={ox}
          y={oy}
          width={10 * u}
          height={10 * u}
          fill="none"
          stroke={C.dim}
          strokeWidth={1}
          strokeDasharray="3 3"
        />
        {/* new 12 x 7.5 */}
        <rect
          x={ox}
          y={oy + (10 - 7.5) * u}
          width={12 * u}
          height={7.5 * u}
          fill={C.fg}
          opacity={0.4}
          stroke={C.fg}
          strokeWidth={1.5}
        />
        <text
          x={ox + 5 * u}
          y={oy + 10 * u + 18}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          width ×1.20 = 12
        </text>
        <text
          x={ox + 12 * u + 8}
          y={oy + (10 - 3.75) * u}
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          height ×0.75 = 7.5
        </text>
        <text
          x={180}
          y={192}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          area 100 → 90, a 10% decrease
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
      meta: '31 marks · 38 minutes · calculator allowed',
      questions: [
        {
          id: 'A1',
          marks: 6,
          prompt: (
            <>
              Convert each of the following, giving fractions in their simplest form. (a) 65% to a
              fraction. (b) {`$\\frac{7}{8}$`} to a percent. (c) 0.06 to a percent. (d) 24% to a
              decimal. (e) {`$\\frac{3}{8}$`} to a decimal. (f) 0.35 to a fraction.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$\\frac{13}{20}$`}. (b) 87.5%. (c) 6%. (d) 0.24. (e) 0.375. (f){' '}
                {`$\\frac{7}{20}$`}.
              </p>
            </>
          )
        },
        {
          id: 'A2',
          marks: 4,
          prompt: (
            <>
              Write each fraction as a percent: {`$\\frac{1}{2}$`}, {`$\\frac{1}{5}$`},{' '}
              {`$\\frac{1}{8}$`}, {`$\\frac{1}{3}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                {`$\\frac{1}{2} = 50\\%$`}, {`$\\frac{1}{5} = 20\\%$`}, {`$\\frac{1}{8} = 12.5\\%$`}
                , {`$\\frac{1}{3} = 33\\frac{1}{3}\\%$`}.
              </p>
              <BenchmarkFig />
            </>
          )
        },
        {
          id: 'A3',
          marks: 2,
          prompt: (
            <>
              State what the symbol % means, and use it to show why 45% equals {`$\\frac{9}{20}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                % means "divided by 100". So {`$45\\% = \\frac{45}{100}$`}. Divide top and bottom by
                5 to get {`$\\frac{9}{20}$`}.
              </p>
              <PercentGridFig />
            </>
          )
        },
        {
          id: 'A4',
          marks: 2,
          prompt: (
            <>Explain why "35%" on its own and "35% of 80" are two different kinds of thing.</>
          ),
          answer: (
            <p>
              "35%" on its own is a fixed number, {`$\\frac{35}{100}$`}. "35% of 80" uses it as a
              multiplier, since "of" means multiply: {`$\\frac{35}{100} \\times 80 = 28$`}.
            </p>
          )
        },
        {
          id: 'A5',
          marks: 3,
          prompt: (
            <>
              One student scores 17 out of 25. Another scores 22 out of 32. By converting both to
              percentages, say who did better, and explain why turning each score into "parts per
              100" makes the comparison easy.
            </>
          ),
          answer: (
            <>
              <p>
                {`$\\frac{17}{25} = 68\\%$`} and {`$\\frac{22}{32} = 68.75\\%$`}.
              </p>
              <p>
                The second student did better. Once both scores are written over the same
                denominator 100, you just compare the numerators at a glance.
              </p>
            </>
          )
        },
        {
          id: 'A6',
          marks: 2,
          prompt: <>Express {`$12\\frac{1}{2}\\%$`} as a fraction in its simplest form.</>,
          answer: (
            <p>{`$12\\frac{1}{2}\\% = \\frac{12.5}{100} = \\frac{25}{200} = \\frac{1}{8}$`}.</p>
          )
        },
        {
          id: 'A7',
          marks: 3,
          prompt: (
            <>
              A student writes {`$33\\frac{1}{3}\\% = 0.333$`} and uses it to find{' '}
              {`$33\\frac{1}{3}\\%$`} of 90, getting 29.97. Explain why writing{' '}
              {`$33\\frac{1}{3}\\%$`} as {`$\\frac{1}{3}$`} gives the exact answer, and state that
              exact answer.
            </>
          ),
          answer: (
            <>
              <p>
                {`$33\\frac{1}{3}\\% = \\frac{100/3}{100} = \\frac{1}{3}$`} exactly. Then{' '}
                {`$\\frac{1}{3} \\times 90 = 30$`}.
              </p>
              <p>0.333 is rounded, so it brings a small error (29.97). The fraction avoids it.</p>
            </>
          )
        },
        {
          id: 'A8',
          marks: 2,
          prompt: <>Find 150% of 40. In one sentence, explain why the answer is larger than 40.</>,
          answer: (
            <p>
              {`$1.5 \\times 40 = 60$`}. It is larger than 40 because 150% is more than the whole
              (100%).
            </p>
          )
        },
        {
          id: 'A9',
          marks: 3,
          prompt: <>Find 22% of €40, showing the fraction method.</>,
          answer: <p>{`$\\frac{22}{100} \\times 40 = \\frac{880}{100} = €8.80$`}.</p>
        },
        {
          id: 'A10',
          marks: 4,
          prompt: (
            <>No calculator. Find these amounts of €80 using mental methods: 10%, 1%, 50%, 25%.</>
          ),
          answer: <p>10% = €8. 1% = €0.80. 50% = €40. 25% = €20.</p>
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical and Applied',
      meta: '30 marks · 37 minutes · calculator allowed',
      questions: [
        {
          id: 'B1',
          marks: 3,
          prompt: (
            <>
              A bag holds 80 kg of sand and a town has 5 000 residents. (a) Find 15% of 80 kg. (b)
              Find 8% of 5 000 residents.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$\\frac{15}{100} \\times 80 = 12$`} kg.</p>
              <p>(b) {`$\\frac{8}{100} \\times 5000 = 400$`} residents.</p>
            </>
          )
        },
        {
          id: 'B2',
          marks: 3,
          prompt: (
            <>
              A bank charges 6.5% interest on a deposit of €17.50. Find the interest, rounded to the
              nearest cent.
            </>
          ),
          answer: (
            <p>{`$0.065 \\times 17.50 = 1.1375$`}. The third decimal is 7, so round up to €1.14.</p>
          )
        },
        {
          id: 'B3',
          marks: 4,
          prompt: (
            <>
              (a) Find 35% of €60 by building it from 25% + 10%, showing each step. (b) No
              calculator. Estimate 19% of 200 by using 20% as a check, then give the exact value.
            </>
          ),
          answer: (
            <>
              <p>(a) 25% of €60 = €15, and 10% of €60 = €6. Total €21.</p>
              <p>
                (b) 20% of 200 = 40, so the answer is just under 40. Exact:{' '}
                {`$0.19 \\times 200 = 38$`}.
              </p>
            </>
          )
        },
        {
          id: 'B4',
          marks: 3,
          prompt: <>A car's price rises from €6 400 to €6 800. Find the percentage increase.</>,
          answer: (
            <p>
              Increase {`$= 6800 - 6400 = 400$`}. Then {`$\\frac{400}{6400} \\times 100 = 6.25\\%$`}
              .
            </p>
          )
        },
        {
          id: 'B5',
          marks: 3,
          prompt: (
            <>
              A trader buys a jacket for €500 and sells it for €620. State whether this is a profit
              or a loss, and find the percentage on the cost price.
            </>
          ),
          answer: (
            <p>
              Profit, since it sold for more than it cost.{' '}
              {`$\\frac{120}{500} \\times 100 = 24\\%$`}.
            </p>
          )
        },
        {
          id: 'B6',
          marks: 4,
          prompt: (
            <>
              A €200 item is increased by 20%. The new price is then decreased by 20%. A student
              claims the price returns to €200. Show the actual final price, and explain why it does
              not return to €200.
            </>
          ),
          answer: (
            <>
              <p>
                {`$200 \\times 1.20 = 240$`}, then {`$240 \\times 0.80 = 192$`}. The final price is
                €192.
              </p>
              <p>
                The 20% decrease acts on €240, the larger new value, not on the original €200. So it
                removes more than was added, a net change of −4%.
              </p>
              <ChangeMultiplierFig />
            </>
          )
        },
        {
          id: 'B7',
          marks: 3,
          prompt: (
            <>
              In a sale, a coat is reduced by 20% to a sale price of €220. Find its original price.
            </>
          ),
          answer: (
            <p>
              The sale price is 80% of the original, so divide by the multiplier:{' '}
              {`$220 \\div 0.80 = €275$`}.
            </p>
          )
        },
        {
          id: 'B8',
          marks: 4,
          prompt: (
            <>
              A square has sides of 10 cm. One side is increased by 20% and the adjacent side is
              decreased by 25%. Find the percentage change in the area.
            </>
          ),
          answer: (
            <>
              <p>
                New sides: {`$10 \\times 1.20 = 12$`} and {`$10 \\times 0.75 = 7.5$`}. New area{' '}
                {`$= 12 \\times 7.5 = 90$`}.
              </p>
              <p>
                Original area 100, so the change is {`$\\frac{90 - 100}{100} \\times 100 = -10\\%$`}
                .
              </p>
              <AreaChangeFig />
            </>
          )
        },
        {
          id: 'B9',
          marks: 3,
          prompt: (
            <>
              A business spends €6 000 on wages, €4 000 on materials, and €2 000 on overheads. Wages
              rise by 12%, materials by 8%, and overheads by 5%. Find the overall percentage
              increase in total spending.
            </>
          ),
          answer: (
            <>
              <p>
                New values: {`$6720 + 4320 + 2100 = 13140$`}. Old total {`$= 12000$`}.
              </p>
              <p>{`$\\frac{13140 - 12000}{12000} \\times 100 = 9.5\\%$`}.</p>
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstonePercentages() {
  const config = {
    documentTitle: 'Percentages Exam - AETHER',
    briefing: {
      title: 'Percentages',
      concepts: [
        'Percentages: Concept and Conversions',
        'Percentage of a Quantity',
        'Percentage Increase and Decrease',
        'Discount, Profit, Loss'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
