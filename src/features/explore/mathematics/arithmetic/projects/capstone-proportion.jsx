import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { FONT_LABEL, FONT_SMALL } from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A3: 180 kg split in the ratio 1 : 3 : 5 → 20 / 60 / 100 kg.
function RatioBarFig() {
  const C = useVizColors()
  const x0 = 30
  const W = 340
  const parts = [
    [1, '20 kg'],
    [3, '60 kg'],
    [5, '100 kg']
  ]
  let x = x0
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 84"
        role="img"
        aria-label="A bar of 180 kg split in the ratio 1 to 3 to 5"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        {parts.map(([share, label], i) => {
          const w = (share / 9) * W
          const seg = (
            <g key={i}>
              <rect
                x={x}
                y={26}
                width={w}
                height={32}
                fill={i % 2 ? C.faint : C.fg}
                opacity={i % 2 ? 1 : 0.45}
                stroke={C.fg}
                strokeWidth={1}
              />
              <text
                x={x + w / 2}
                y={47}
                textAnchor="middle"
                fill={C.fg}
                fontSize={FONT_LABEL}
                fontFamily={FONT}
              >
                {label}
              </text>
              <text
                x={x + w / 2}
                y={18}
                textAnchor="middle"
                fill={C.dim}
                fontSize={FONT_LABEL}
                fontFamily={FONT}
              >
                {share}
              </text>
            </g>
          )
          x += w
          return seg
        })}
        <text
          x={x0 + W / 2}
          y={76}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          9 parts of 20 kg = 180 kg
        </text>
      </svg>
    </div>
  )
}

// A6: inverse proportion y = 60/x: decreasing curve, asymptotic to both axes.
function InverseFig() {
  const C = useVizColors()
  const ox = 40
  const oy = 150
  const w = 320
  const h = 130
  const k = 60
  const xMin = 2
  const xMax = 22
  const yMax = k / xMin // 30
  const px = x => ox + ((x - xMin) / (xMax - xMin)) * w
  const py = y => oy - (y / yMax) * h
  const pts = []
  for (let x = xMin; x <= xMax; x += 0.5) pts.push(`${px(x).toFixed(1)},${py(k / x).toFixed(1)}`)
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 380 180"
        role="img"
        aria-label="Decreasing curve y equals 60 over x, approaching but never touching the axes"
        style={{ display: 'block', width: '100%', maxWidth: 360, height: 'auto', margin: '0 auto' }}
      >
        <line x1={ox} y1={oy} x2={ox + w} y2={oy} stroke={C.dim} strokeWidth={1} />
        <line x1={ox} y1={oy} x2={ox} y2={oy - h - 6} stroke={C.dim} strokeWidth={1} />
        <polyline points={pts.join(' ')} fill="none" stroke={C.fg} strokeWidth={1.5} />
        <text
          x={ox + w}
          y={oy + 16}
          textAnchor="end"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          x
        </text>
        <text
          x={ox - 8}
          y={oy - h}
          textAnchor="end"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          y
        </text>
        <text
          x={ox + w - 4}
          y={oy - 18}
          textAnchor="end"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          y = 60 / x
        </text>
      </svg>
    </div>
  )
}

// A8: direct proportion C = 2.25L: straight line through the origin.
function DirectFig() {
  const C = useVizColors()
  const ox = 44
  const oy = 150
  const w = 300
  const h = 120
  const lMax = 10
  const cMax = 22.5
  const px = l => ox + (l / lMax) * w
  const py = c => oy - (c / cMax) * h
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 380 180"
        role="img"
        aria-label="Straight line C equals 2.25 L passing through the origin"
        style={{ display: 'block', width: '100%', maxWidth: 360, height: 'auto', margin: '0 auto' }}
      >
        <line x1={ox} y1={oy} x2={ox + w} y2={oy} stroke={C.dim} strokeWidth={1} />
        <line x1={ox} y1={oy} x2={ox} y2={oy - h - 6} stroke={C.dim} strokeWidth={1} />
        <line x1={px(0)} y1={py(0)} x2={px(lMax)} y2={py(cMax)} stroke={C.fg} strokeWidth={1.5} />
        <circle cx={px(0)} cy={py(0)} r={3.5} fill={C.fg} />
        <text x={px(0) + 6} y={py(0) - 6} fill={C.dim} fontSize={FONT_LABEL} fontFamily={FONT}>
          (0, 0)
        </text>
        <text
          x={ox + w}
          y={oy + 16}
          textAnchor="end"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          L (litres)
        </text>
        <text
          x={px(lMax) - 4}
          y={py(cMax) + 4}
          textAnchor="end"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          C = 2.25 L
        </text>
      </svg>
    </div>
  )
}

// B5: workers × days = 72; plotted points with a smooth inverse curve.
function InversePlotFig() {
  const C = useVizColors()
  const ox = 44
  const oy = 150
  const w = 310
  const h = 120
  const xMax = 26
  const yMax = 20
  const px = x => ox + (x / xMax) * w
  const py = y => oy - (y / yMax) * h
  const data = [
    [4, 18],
    [6, 12],
    [8, 9],
    [24, 3]
  ]
  const curve = []
  for (let x = 4; x <= 24; x += 0.5) curve.push(`${px(x).toFixed(1)},${py(72 / x).toFixed(1)}`)
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 380 180"
        role="img"
        aria-label="Plotted points for workers against days following workers times days equals 72"
        style={{ display: 'block', width: '100%', maxWidth: 360, height: 'auto', margin: '0 auto' }}
      >
        <line x1={ox} y1={oy} x2={ox + w} y2={oy} stroke={C.dim} strokeWidth={1} />
        <line x1={ox} y1={oy} x2={ox} y2={oy - h - 6} stroke={C.dim} strokeWidth={1} />
        <polyline
          points={curve.join(' ')}
          fill="none"
          stroke={C.dim}
          strokeWidth={1}
          strokeDasharray="3 3"
        />
        {data.map(([x, y]) => (
          <g key={x}>
            <circle cx={px(x)} cy={py(y)} r={3.5} fill={C.fg} />
            <text
              x={px(x)}
              y={py(y) - 8}
              textAnchor="middle"
              fill={C.fg}
              fontSize={FONT_SMALL}
              fontFamily={FONT}
            >
              ({x},{y})
            </text>
          </g>
        ))}
        <text
          x={ox + w}
          y={oy + 16}
          textAnchor="end"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          workers
        </text>
        <text
          x={ox - 8}
          y={oy - h}
          textAnchor="end"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          days
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
      meta: '55 marks · 60 minutes · A1–A4 no calculator',
      questions: [
        {
          id: 'A1',
          marks: 5,
          prompt: (
            <>
              No calculator. (a) Write 45 : 27 in simplest form. (b) Write{' '}
              {`$0.75 : 1\\frac{1}{4}$`} as a ratio of whole numbers. (c) Red to blue counters are
              in ratio 2 : 3. What fraction of all counters is red?
            </>
          ),
          answer: (
            <>
              <p>(a) Divide both by the HCF 9: 45 : 27 = 5 : 3.</p>
              <p>(b) Multiply both by 4: {`$0.75 : 1.25 = 3 : 5$`}.</p>
              <p>(c) Red is 2 parts out of 5, so {`$\\frac{2}{5}$`}.</p>
            </>
          )
        },
        {
          id: 'A2',
          marks: 4,
          prompt: (
            <>
              No calculator. In one sentence each, with an example: (a) the difference between a
              ratio and a rate; (b) the difference between a ratio comparison and an additive
              comparison.
            </>
          ),
          answer: (
            <>
              <p>
                (a) A ratio compares two quantities of the same kind and is a pure number, like 2 :
                3 counters. A rate compares different kinds and carries units, like 60 km per hour.
              </p>
              <p>
                (b) A ratio compares by division (twice as much), while an additive comparison
                compares by subtraction (4 more than). For 8 and 4: the ratio is 2 : 1, the additive
                gap is 4.
              </p>
            </>
          )
        },
        {
          id: 'A3',
          marks: 3,
          prompt: <>No calculator. Divide 180 kg in the ratio 1 : 3 : 5.</>,
          answer: (
            <>
              <p>
                There are {`$1 + 3 + 5 = 9$`} parts, so one part is {`$180 \\div 9 = 20$`} kg.
              </p>
              <p>The shares are 20 kg, 60 kg, and 100 kg.</p>
              <RatioBarFig />
            </>
          )
        },
        {
          id: 'A4',
          marks: 4,
          prompt: (
            <>
              No calculator. A recipe for 10 pancakes uses 300 ml of milk. (a) How much milk for 25
              pancakes? (b) Is this direct or inverse proportion, and why?
            </>
          ),
          answer: (
            <>
              <p>
                (a) One pancake needs {`$300 \\div 10 = 30$`} ml, so 25 need{' '}
                {`$30 \\times 25 = 750$`} ml.
              </p>
              <p>
                (b) Direct proportion. More pancakes need more milk in the same ratio, and the graph
                passes through the origin.
              </p>
            </>
          )
        },
        {
          id: 'A5',
          marks: 5,
          prompt: (
            <>
              A car travels 150 km in 2 h 30 min. (a) Find its average speed in km/h. (b) Convert
              that speed to m/s.
            </>
          ),
          answer: (
            <>
              <p>(a) 2 h 30 min = 2.5 h, so speed {`$= 150 \\div 2.5 = 60$`} km/h.</p>
              <p>(b) {`$60 \\times 1000 \\div 3600 = \\frac{50}{3} \\approx 16.7$`} m/s.</p>
            </>
          )
        },
        {
          id: 'A6',
          marks: 6,
          prompt: (
            <>
              y is inversely proportional to x. When {`$x = 4$`}, {`$y = 15$`}. (a) Find k and the
              equation. (b) Find y when {`$x = 10$`}. (c) Sketch the shape of the graph.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$k = xy = 4 \\times 15 = 60$`}, so {`$y = \\frac{60}{x}$`}.
              </p>
              <p>(b) {`$y = \\frac{60}{10} = 6$`}.</p>
              <p>
                (c) A decreasing curve in the first quadrant. It falls steeply then flattens,
                approaching both axes without ever touching them.
              </p>
              <InverseFig />
            </>
          )
        },
        {
          id: 'A7',
          marks: 8,
          prompt: (
            <>
              A map has scale 1 : 50 000. (a) Complete: "1 cm represents ___ km." (b) Two towns are
              8 cm apart on the map; find the real distance in km. (c) A lake of real area 4 km²
              covers what area on the map, in cm²? (d) Is a 1 : 25 000 map larger- or smaller-scale
              than 1 : 50 000? Explain using the representative fraction.
            </>
          ),
          answer: (
            <>
              <p>(a) 1 cm represents 0.5 km (50 000 cm = 0.5 km).</p>
              <p>(b) {`$8 \\times 50000 = 400000$`} cm = 4 km.</p>
              <p>
                (c) Areas scale by the square of the length scale.{' '}
                {`$4 \\text{ km}^2 = 4 \\times 10^{10} \\text{ cm}^2$`}; divide by {`$50000^2$`} to
                get 16 cm².
              </p>
              <p>
                (d) Larger-scale. {`$\\frac{1}{25000} > \\frac{1}{50000}$`}, so each centimetre
                covers less ground and shows more detail.
              </p>
            </>
          )
        },
        {
          id: 'A8',
          marks: 6,
          prompt: (
            <>
              10 litres of petrol cost $22.50. (a) Find the cost per litre. (b) Write the equation
              linking cost C and litres L. (c) Explain why the graph passes through the origin.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$22.50 \\div 10 = \\$2.25$`} per litre.</p>
              <p>(b) {`$C = 2.25 L$`}.</p>
              <p>
                (c) Zero litres cost zero dollars, so the line passes through (0, 0). The ratio C/L
                stays constant at 2.25.
              </p>
              <DirectFig />
            </>
          )
        },
        {
          id: 'A9',
          marks: 5,
          prompt: (
            <>
              One worker paints a fence in 6 hours; another in 4 hours. Working together, how long
              do they take? Show your reasoning.
            </>
          ),
          answer: (
            <>
              <p>
                Their rates are {`$\\frac{1}{6}$`} and {`$\\frac{1}{4}$`} of the fence per hour.
                Together: {`$\\frac{1}{6} + \\frac{1}{4} = \\frac{5}{12}$`} per hour.
              </p>
              <p>
                Time {`$= 1 \\div \\frac{5}{12} = \\frac{12}{5} = 2\\frac{2}{5}$`} hours, that is 2
                h 24 min.
              </p>
            </>
          )
        },
        {
          id: 'A10',
          marks: 5,
          prompt: (
            <>
              A drink mixes concentrate to water in ratio 2 : 9, currently 2 L concentrate and 9 L
              water. (a) 1 L of concentrate is added; find the new ratio. (b) Explain why this
              changes the ratio differently from adding 1 L to each.
            </>
          ),
          answer: (
            <>
              <p>(a) Now 3 L concentrate to 9 L water, which is 3 : 9 = 1 : 3.</p>
              <p>
                (b) A ratio is a multiplicative relationship. Adding to only one part shifts it out
                of proportion. Adding 1 L to each part instead changes both, but not by the same
                factor, so it does not keep the ratio fixed either.
              </p>
            </>
          )
        },
        {
          id: 'A11',
          marks: 4,
          prompt: (
            <>
              A machine fills 480 bottles in 20 minutes at constant rate. (a) Find the rate in
              bottles per minute. (b) If the rate drops by 25%, how many bottles are filled in 1
              hour?
            </>
          ),
          answer: (
            <>
              <p>(a) {`$480 \\div 20 = 24$`} bottles per minute.</p>
              <p>
                (b) New rate {`$= 24 \\times 0.75 = 18$`} per minute, so in 60 minutes{' '}
                {`$18 \\times 60 = 1080$`} bottles.
              </p>
            </>
          )
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical and Applied',
      meta: '45 marks · 60 minutes · calculator allowed',
      questions: [
        {
          id: 'B1',
          marks: 8,
          prompt: (
            <>
              Using a ruler and a 1 : 25 000 map extract: (a) Measure the straight-line map distance
              from P to Q in cm. (b) Convert it to a real distance in m and km. (c) Describe a
              method to measure the real length of a winding footpath, and state why your
              straight-line method underestimates it.
            </>
          ),
          answer: (
            <>
              <p>(a) Read the ruler to the nearest 0.1 cm. Suppose P to Q measures 6.0 cm.</p>
              <p>
                (b) Multiply by 25 000: {`$6.0 \\times 25000 = 150000$`} cm. Divide by 100 for
                metres (1500 m), then by 1000 for kilometres (1.5 km).
              </p>
              <p>
                (c) Lay a piece of string along every bend of the path, then straighten and measure
                it. A straight line cuts across the bends, so it is shorter than the real winding
                path.
              </p>
            </>
          )
        },
        {
          id: 'B2',
          marks: 8,
          prompt: (
            <>
              Exchange rate: 1 GBP = 1.85 SGD (ignore commission). (a) Change £240 into SGD. (b)
              Change 150 SGD back into pounds. (c) Using direct proportion, explain why one
              direction multiplies by 1.85 and the other divides by it.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$240 \\times 1.85 = 444$`} SGD.</p>
              <p>(b) {`$150 \\div 1.85 \\approx £81.08$`}.</p>
              <p>
                (c) The two currencies are in direct proportion with constant 1.85: SGD = 1.85 ×
                GBP. Going from pounds to dollars multiplies by 1.85; reversing the same
                relationship divides by it.
              </p>
            </>
          )
        },
        {
          id: 'B3',
          marks: 9,
          prompt: (
            <>
              A smoothie for 4 people uses 200 g banana, 300 ml yoghurt, 150 ml juice (ratio fixed).
              (a) Rewrite it for 10 people. (b) You have only 250 ml of yoghurt; find the largest
              whole number of people you can serve and the banana and juice needed. (c) Justify why
              yoghurt is the limiting ingredient.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Scale by {`$10 \\div 4 = 2.5$`}: 500 g banana, 750 ml yoghurt, 375 ml juice.
              </p>
              <p>
                (b) 250 ml of yoghurt is {`$250 \\div 300 = \\frac{5}{6}$`} of one batch, serving{' '}
                {`$4 \\times \\frac{5}{6} \\approx 3.3$`}, so 3 whole people. That needs 150 g
                banana and 112.5 ml juice.
              </p>
              <p>
                (c) At the fixed ratio, yoghurt is the ingredient you have least of relative to the
                recipe, so it runs out first and caps the number served.
              </p>
            </>
          )
        },
        {
          id: 'B4',
          marks: 10,
          prompt: (
            <>
              A cyclist rides 40 km at 20 km/h, then 30 km at 15 km/h. (a) Find the time for each
              leg. (b) Find the average speed for the whole journey. (c) A friend says the average
              is {`$(20 + 15) \\div 2 = 17.5$`} km/h. Explain why this method is generally wrong,
              and state the one condition under which it gives the right answer.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$40 \\div 20 = 2$`} h, and {`$30 \\div 15 = 2$`} h.
              </p>
              <p>
                (b) Total distance 70 km in total time 4 h, so {`$70 \\div 4 = 17.5$`} km/h. Use
                total distance divided by total time.
              </p>
              <p>
                (c) Averaging the speeds ignores how long is spent at each. It is correct only when
                the two legs take equal time. Here both legs happen to take 2 h, so the two methods
                agree by coincidence.
              </p>
            </>
          )
        },
        {
          id: 'B5',
          marks: 10,
          prompt: (
            <>
              A fixed job satisfies workers × days = constant. With 6 workers it takes 12 days. (a)
              Complete a table of days for 4, 8 and 24 workers. (b) Plot the points and describe the
              graph's shape. (c) Explain why this is inverse, not direct, proportion, referring to
              your table.
            </>
          ),
          answer: (
            <>
              <p>
                (a) The constant is {`$6 \\times 12 = 72$`}. So 4 workers take 18 days, 8 take 9
                days, and 24 take 3 days.
              </p>
              <p>
                (b) The points lie on a smooth decreasing curve that falls steeply then flattens,
                approaching the axes without touching them.
              </p>
              <p>
                (c) The product workers × days stays fixed at 72, which is the signature of inverse
                proportion. Direct proportion would instead keep a constant ratio and give a
                straight line through the origin.
              </p>
              <InversePlotFig />
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneProportion() {
  const config = {
    documentTitle: 'Proportion Exam - AETHER',
    briefing: {
      title: 'Proportion',
      concepts: [
        'Ratio',
        'Direct and Inverse Proportion',
        'Rate, Speed, Average Speed',
        'Map Scales'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
