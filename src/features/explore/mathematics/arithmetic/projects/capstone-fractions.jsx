import ProjectTemplate from '../../../../../components/project/project-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { FONT_LABEL } from '../../../../../components/viz/scale-tokens'

const FONT = 'D-DIN, sans-serif'

// A1: number line 0 to 5 with 3/4 on the first unit and 17/4 = 4¼ marked.
function NumberLineFig() {
  const C = useVizColors()
  const x0 = 24
  const x1 = 376
  const span = 5
  const sx = v => x0 + (v / span) * (x1 - x0)
  const ticks = [0, 1, 2, 3, 4, 5]
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 96"
        role="img"
        aria-label="Number line from 0 to 5 with three quarters and seventeen quarters marked"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <line x1={x0} y1={56} x2={x1} y2={56} stroke={C.dim} strokeWidth={1.5} />
        {ticks.map(t => (
          <g key={t}>
            <line x1={sx(t)} y1={50} x2={sx(t)} y2={62} stroke={C.dim} strokeWidth={1} />
            <text
              x={sx(t)}
              y={78}
              textAnchor="middle"
              fill={C.dim}
              fontSize={FONT_LABEL}
              fontFamily={FONT}
            >
              {t}
            </text>
          </g>
        ))}
        <circle cx={sx(0.75)} cy={56} r={3.5} fill={C.fg} />
        <text
          x={sx(0.75)}
          y={42}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          3/4
        </text>
        <circle cx={sx(4.25)} cy={56} r={3.5} fill={C.fg} />
        <text
          x={sx(4.25)}
          y={42}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          17/4 = 4¼
        </text>
      </svg>
    </div>
  )
}

// A3: unit square as a 3-by-4 grid; the 2/3 by 3/4 rectangle covers 6 of 12 cells.
function AreaModelFig() {
  const C = useVizColors()
  const x = 60
  const y = 16
  const w = 240
  const h = 180
  const cols = 4 // quarters across (3/4 shaded)
  const rows = 3 // thirds down (2/3 shaded)
  const cw = w / cols
  const rh = h / rows
  const cells = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const inside = r < 2 && c < 3 // 2/3 of rows, 3/4 of cols
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={x + c * cw}
          y={y + r * rh}
          width={cw}
          height={rh}
          fill={inside ? C.fg : 'none'}
          opacity={inside ? 0.5 : 1}
          stroke={C.faint}
          strokeWidth={1}
        />
      )
    }
  }
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 360 230"
        role="img"
        aria-label="Unit square in a 3 by 4 grid, with the two-thirds by three-quarters rectangle shading six of twelve cells"
        style={{ display: 'block', width: '100%', maxWidth: 320, height: 'auto', margin: '0 auto' }}
      >
        {cells}
        <rect x={x} y={y} width={w} height={h} fill="none" stroke={C.fg} strokeWidth={1.5} />
        <rect
          x={x}
          y={y}
          width={(w / 4) * 3}
          height={(h / 3) * 2}
          fill="none"
          stroke={C.fg}
          strokeWidth={2}
        />
        <text
          x={x + w / 2}
          y={y + h + 22}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          shaded = 6/12 = 1/2
        </text>
      </svg>
    </div>
  )
}

// A4: [0,1] split into 3 parts, then each part split into 2, so 2/3 = 4/6.
function EquivFig() {
  const C = useVizColors()
  const x0 = 24
  const x1 = 376
  const W = x1 - x0
  const thirds = [0, 1, 2, 3].map(i => x0 + (i / 3) * W)
  const sixths = [0, 1, 2, 3, 4, 5, 6].map(i => x0 + (i / 6) * W)
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 120"
        role="img"
        aria-label="Unit interval split into three parts then six parts, showing two thirds equals four sixths"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        {/* shaded 2/3 = 4/6 region */}
        <rect x={x0} y={34} width={(W / 3) * 2} height={40} fill={C.fg} opacity={0.45} />
        <rect x={x0} y={34} width={W} height={40} fill="none" stroke={C.fg} strokeWidth={1.5} />
        {/* thirds (tall ticks) */}
        {thirds.map((px, i) => (
          <line key={`t${i}`} x1={px} y1={22} x2={px} y2={74} stroke={C.fg} strokeWidth={1.5} />
        ))}
        {/* sixths (short ticks below) */}
        {sixths.map((px, i) => (
          <line key={`s${i}`} x1={px} y1={74} x2={px} y2={92} stroke={C.dim} strokeWidth={1} />
        ))}
        <text
          x={x0}
          y={16}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          0
        </text>
        <text
          x={x1}
          y={16}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          1
        </text>
        <text
          x={x0 + W / 2}
          y={110}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT}
        >
          2/3 = 4/6
        </text>
      </svg>
    </div>
  )
}

// B8: two proportion bars. Solids stay fixed at 3 kg; water shrinks, weight halves.
function CucumberFig() {
  const C = useVizColors()
  const x0 = 30
  const full = 320 // 300 kg
  const half = 160 // 150 kg
  const solidsFull = full * 0.01
  const solidsHalf = half * 0.02
  const Bar = ({ y, len, solids, label }) => (
    <g>
      <rect x={x0} y={y} width={len} height={26} fill={C.faint} stroke={C.dim} strokeWidth={1} />
      <rect x={x0} y={y} width={solids} height={26} fill={C.fg} />
      <text x={x0 + len + 8} y={y + 18} fill={C.fg} fontSize={FONT_LABEL} fontFamily={FONT}>
        {label}
      </text>
    </g>
  )
  return (
    <div style={{ margin: '12px 0 0' }}>
      <svg
        viewBox="0 0 400 120"
        role="img"
        aria-label="Two bars: 300 kg then 150 kg, both with the same 3 kg of solids while the water shrinks"
        style={{ display: 'block', width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto' }}
      >
        <Bar y={20} len={full} solids={solidsFull} label="300 kg" />
        <Bar y={64} len={half} solids={solidsHalf} label="150 kg" />
        <text x={x0} y={108} fill={C.dim} fontSize={FONT_LABEL} fontFamily={FONT}>
          solid bar = 3 kg of dry matter, fixed in both
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
      meta: '53 marks · 60 minutes · no calculator',
      questions: [
        {
          id: 'A1',
          marks: 4,
          prompt: (
            <>
              Draw a number line from 0 to 5. (a) Mark {`$\\frac{3}{4}$`}. (b) Mark{' '}
              {`$\\frac{17}{4}$`} and write it as a mixed number.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Split the unit interval from 0 to 1 into four equal parts. {`$\\frac{3}{4}$`}{' '}
                sits at the third mark.
              </p>
              <p>
                (b) Split the interval from 4 to 5 into four equal parts. {`$\\frac{17}{4}$`} sits
                one part past 4, so {`$\\frac{17}{4} = 4\\frac{1}{4}$`}.
              </p>
              <NumberLineFig />
            </>
          )
        },
        {
          id: 'A2',
          marks: 3,
          prompt: (
            <>
              Write 0.375 as a fraction. First write it over a power of ten, then reduce to lowest
              terms.
            </>
          ),
          answer: (
            <>
              <p>{`$0.375 = \\frac{375}{1000}$`}.</p>
              <p>Divide top and bottom by 125: {`$\\frac{375}{1000} = \\frac{3}{8}$`}.</p>
            </>
          )
        },
        {
          id: 'A3',
          marks: 4,
          prompt: (
            <>
              (a) Draw a unit square split into equal parts to show {`$\\frac{3}{4}$`}. (b) Using an
              area-model diagram, show why {`$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{2}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Split the square into four equal strips and shade three of them. That is{' '}
                {`$\\frac{3}{4}$`}.
              </p>
              <p>
                (b) Split the square into a 3-by-4 grid, giving 12 equal cells. The rectangle that
                is {`$\\frac{2}{3}$`} tall and {`$\\frac{3}{4}$`} wide covers 6 cells. So{' '}
                {`$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$`}.
              </p>
              <AreaModelFig />
            </>
          )
        },
        {
          id: 'A4',
          marks: 6,
          prompt: (
            <>
              (a) Reduce {`$\\frac{48}{54}$`} to lowest terms using the greatest common factor. (b)
              Prove, using the number line, that {`$\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$`} for any
              whole number n that is not zero.
            </>
          ),
          answer: (
            <>
              <p>
                (a) The greatest common factor of 48 and 54 is 6. So{' '}
                {`$\\frac{48}{54} = \\frac{8}{9}$`}.
              </p>
              <p>
                (b) Split the unit interval into {`$\\ell$`} equal parts and take k of them; that
                point is {`$\\frac{k}{\\ell}$`}. Now split each part into n smaller parts. The unit
                now holds {`$n\\ell$`} small parts. The same k original parts now hold {`$nk$`}{' '}
                small parts. So {`$\\frac{k}{\\ell}$`} and {`$\\frac{nk}{n\\ell}$`} name the same
                point.
              </p>
              <EquivFig />
            </>
          )
        },
        {
          id: 'A5',
          marks: 4,
          prompt: (
            <>
              (a) Use cross-multiplication to decide which is larger: {`$\\frac{5}{8}$`} or{' '}
              {`$\\frac{7}{11}$`}. (b) Explain why comparing the cross-products kn and ℓm tells you
              which fraction is larger.
            </>
          ),
          answer: (
            <>
              <p>
                (a) Cross-products: {`$5 \\times 11 = 55$`} and {`$8 \\times 7 = 56$`}. Since{' '}
                {`$55 < 56$`}, we get {`$\\frac{5}{8} < \\frac{7}{11}$`}.
              </p>
              <p>
                (b) Rewrite both over the common denominator {`$\\ell n$`}, as{' '}
                {`$\\frac{kn}{\\ell n}$`} and {`$\\frac{\\ell m}{\\ell n}$`}. With equal
                denominators, the fraction with the larger numerator is larger.
              </p>
            </>
          )
        },
        {
          id: 'A6',
          marks: 7,
          prompt: (
            <>
              Compute, showing working. (a) {`$\\frac{2}{3} + \\frac{5}{7}$`}. (b){' '}
              {`$\\frac{5}{6} + \\frac{7}{4}$`}, using the lowest common multiple. (c){' '}
              {`$4\\frac{2}{3} - 1\\frac{5}{6}$`}, writing each as an improper fraction first. (d){' '}
              {`$4.0451 + 3.27$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a){' '}
                {`$\\frac{2}{3} + \\frac{5}{7} = \\frac{14 + 15}{21} = \\frac{29}{21} = 1\\frac{8}{21}$`}
                .
              </p>
              <p>
                (b) LCM of 6 and 4 is 12.{' '}
                {`$\\frac{10}{12} + \\frac{21}{12} = \\frac{31}{12} = 2\\frac{7}{12}$`}.
              </p>
              <p>
                (c){' '}
                {`$\\frac{14}{3} - \\frac{11}{6} = \\frac{28}{6} - \\frac{11}{6} = \\frac{17}{6} = 2\\frac{5}{6}$`}
                .
              </p>
              <p>(d) {`$4.0451 + 3.27 = 7.3151$`}.</p>
            </>
          )
        },
        {
          id: 'A7',
          marks: 6,
          prompt: (
            <>
              Compute, showing working. (a) {`$\\frac{2}{3} \\times \\frac{4}{5}$`}. (b){' '}
              {`$5 \\times \\frac{2}{3}$`}, as a mixed number. (c){' '}
              {`$\\frac{1}{2} \\times \\left(\\frac{1}{3} + \\frac{1}{5}\\right)$`}, using the
              distributive law. (d) {`$1.25 \\times 0.064$`}.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$`}.</p>
              <p>(b) {`$5 \\times \\frac{2}{3} = \\frac{10}{3} = 3\\frac{1}{3}$`}.</p>
              <p>
                (c){' '}
                {`$\\frac{1}{2} \\times \\frac{1}{3} + \\frac{1}{2} \\times \\frac{1}{5} = \\frac{1}{6} + \\frac{1}{10} = \\frac{5 + 3}{30} = \\frac{8}{30} = \\frac{4}{15}$`}
                .
              </p>
              <p>(d) {`$1.25 \\times 0.064 = 0.08$`}.</p>
            </>
          )
        },
        {
          id: 'A8',
          marks: 4,
          prompt: (
            <>
              (a) Compute {`$\\frac{3}{4} \\div \\frac{1}{4}$`} by invert and multiply, then check
              your answer by multiplication. (b) Compute {`$\\frac{2}{3} \\div \\frac{4}{5}$`}.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$\\frac{3}{4} \\div \\frac{1}{4} = \\frac{3}{4} \\times \\frac{4}{1} = 3$`}.
                Check: {`$3 \\times \\frac{1}{4} = \\frac{3}{4}$`}.
              </p>
              <p>
                (b){' '}
                {`$\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$`}
                .
              </p>
            </>
          )
        },
        {
          id: 'A9',
          marks: 4,
          prompt: (
            <>
              A student says "division is repeated subtraction" and works out{' '}
              {`$5 \\div \\frac{3}{4}$`} by subtracting {`$\\frac{3}{4}$`} again and again. They get
              "6 with a remainder of {`$\\frac{1}{2}$`}." Explain why this cannot be the definition
              of fraction division, and give the correct single-number answer.
            </>
          ),
          answer: (
            <>
              <p>
                Division must give one number, not a quotient-and-remainder pair. The "remainder{' '}
                {`$\\frac{1}{2}$`}" is measured against the divisor, not in the same terms as the
                answer. So the method does not define a single fraction.
              </p>
              <p>
                Correct method:{' '}
                {`$5 \\div \\frac{3}{4} = 5 \\times \\frac{4}{3} = \\frac{20}{3} = 6\\frac{2}{3}$`}.
              </p>
            </>
          )
        },
        {
          id: 'A10',
          marks: 5,
          prompt: (
            <>
              Without doing any long division, decide whether each is a finite or an infinite
              (repeating) decimal, and justify using prime factors. (a) {`$\\frac{7}{40}$`}. (b){' '}
              {`$\\frac{7}{12}$`}. (c) Explain why {`$\\frac{1}{3}$`} never stops.
            </>
          ),
          answer: (
            <>
              <p>
                (a) {`$40 = 2^3 \\times 5$`}, only 2s and 5s. So {`$\\frac{7}{40}$`} is finite.
              </p>
              <p>
                (b) {`$12 = 2^2 \\times 3$`}. The factor 3 forces it. So {`$\\frac{7}{12}$`} is
                infinite (repeating).
              </p>
              <p>
                (c) 3 is neither 2 nor 5, so the denominator can never become a power of ten. So{' '}
                {`$\\frac{1}{3}$`} never stops.
              </p>
            </>
          )
        },
        {
          id: 'A11',
          marks: 3,
          prompt: (
            <>
              Simplify the complex fraction {`$\\dfrac{2/3}{4/5}$`} to a single fraction in lowest
              terms. Name the rule you use at each step.
            </>
          ),
          answer: (
            <>
              <p>Invert and multiply: {`$\\frac{2}{3} \\times \\frac{5}{4}$`}.</p>
              <p>Multiply across: {`$\\frac{10}{12}$`}.</p>
              <p>Cancel the common factor 2: {`$\\frac{10}{12} = \\frac{5}{6}$`}.</p>
            </>
          )
        },
        {
          id: 'A12',
          marks: 3,
          prompt: (
            <>
              The "parts of a pizza" model is often used to introduce fractions. Give two reasons
              why the number-line definition is better for doing mathematics.
            </>
          ),
          answer: (
            <>
              <p>Any two of the following earn full marks:</p>
              <ul className="lrn-list">
                <li>It gives one clear definition, not several loosely related meanings.</li>
                <li>It handles fractions greater than 1 just as easily as small ones.</li>
                <li>It supports clean definitions of multiplication and division.</li>
                <li>It lets you prove statements, since each fraction is one exact point.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      id: 'B',
      title: 'Practical and Applied',
      meta: '47 marks · 60 minutes · calculator allowed',
      questions: [
        {
          id: 'B1',
          marks: 4,
          prompt: (
            <>
              A running track is {`$\\frac{5}{8}$`} of a kilometre long. You run {`$\\frac{3}{4}$`}{' '}
              of it. How far did you run? Write the calculation as a multiplication.
            </>
          ),
          answer: <p>{`$\\frac{3}{4} \\times \\frac{5}{8} = \\frac{15}{32}$`} km.</p>
        },
        {
          id: 'B2',
          marks: 7,
          prompt: (
            <>
              (a) What is 45% of 70? (b) 70 is 45% of what number? (c) A share price rises 12%, then
              falls 12%. Does it return to its starting value? Show the final value as a percent of
              the start, and state the net change. (d) Write {`$\\frac{5}{16}$`} as a percent.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$0.45 \\times 70 = 31.5$`}.</p>
              <p>(b) {`$70 \\times 100 \\div 45 = 155\\frac{5}{9}$`}.</p>
              <p>
                (c) {`$1.12 \\times 0.88 = 0.9856$`}, so the price is 98.56% of the start. That is a
                net fall of 1.44%. It does not return.
              </p>
              <p>(d) {`$\\frac{5}{16} = 0.3125 = 31.25\\%$`}.</p>
            </>
          )
        },
        {
          id: 'B3',
          marks: 5,
          prompt: (
            <>
              You approximate {`$67\\frac{1}{2}\\%$`} by {`$\\frac{2}{3}$`}. (a) Find the absolute
              error. (b) Find the relative error as a percent. (c) Explain why relative error is
              more useful here than absolute error.
            </>
          ),
          answer: (
            <>
              <p>(a) {`$67\\frac{1}{2}\\% - 66\\frac{2}{3}\\% = \\frac{5}{6}\\%$`}.</p>
              <p>
                (b) {`$\\frac{5}{6} \\div 67\\frac{1}{2} \\times 100\\% = 1\\frac{19}{81}\\%$`}.
              </p>
              <p>
                (c) Relative error compares the error to the true value. It shows whether the error
                is large or small for the size of the quantity.
              </p>
            </>
          )
        },
        {
          id: 'B4',
          marks: 5,
          prompt: (
            <>
              (a) A class of 27 has boys to girls in the ratio 4:5. Using the ratio theorem (write
              each part as a multiple of one group size u), find the number of boys. (b) Convert 18
              km/h to metres per second. Use 1 km = 1000 m and 1 hour = 3600 seconds.
            </>
          ),
          answer: (
            <>
              <p>
                (a) The parts are 4u and 5u, so {`$9u = 27$`}, giving {`$u = 3$`}. Boys{' '}
                {`$= 4u = 12$`}.
              </p>
              <p>(b) {`$18 \\text{ km/h} = \\frac{18000}{3600} = 5$`} m/s.</p>
            </>
          )
        },
        {
          id: 'B5',
          marks: 5,
          prompt: (
            <>
              A tap fills 3.5 cubic metres of water in 25 seconds at a constant rate. How long does
              it take to fill 11.5 cubic metres?
            </>
          ),
          answer: (
            <>
              <p>Rate {`$= 3.5 \\div 25 = 0.14$`} cubic metres per second.</p>
              <p>Time {`$= 11.5 \\div 0.14 \\approx 82.1$`} seconds.</p>
            </>
          )
        },
        {
          id: 'B6',
          marks: 5,
          prompt: (
            <>
              Regina mows a lawn in 10 hours. Eric mows the same lawn in 12 hours. Working together
              at their constant rates, how long do they take? Show that the size of the lawn cancels
              out.
            </>
          ),
          answer: (
            <>
              <p>
                Let the lawn be A. Regina's rate is {`$\\frac{A}{10}$`} and Eric's is{' '}
                {`$\\frac{A}{12}$`}. Together: {`$\\frac{A}{10} + \\frac{A}{12} = \\frac{11A}{60}$`}{' '}
                per hour.
              </p>
              <p>
                Time {`$= A \\div \\frac{11A}{60} = \\frac{60}{11} = 5\\frac{5}{11}$`} hours, about
                5 h 27 min. The A appears in every term and divides out.
              </p>
            </>
          )
        },
        {
          id: 'B7',
          marks: 6,
          prompt: (
            <>
              Paul cycles to a town at 15 km/h and returns along the same road at 18 km/h. (a) Find
              his average speed for the whole trip. (b) Is this the same as {`$(15 + 18) \\div 2$`}?
              Explain why the true average speed is lower. (c) State how the three means line up in
              order.
            </>
          ),
          answer: (
            <>
              <p>
                (a){' '}
                {`$\\frac{2 \\times 15 \\times 18}{15 + 18} = \\frac{540}{33} = \\frac{180}{11} = 16\\frac{4}{11}$`}{' '}
                km/h.
              </p>
              <p>
                (b) No. The arithmetic mean is 16.5 km/h. The true average is lower because more
                time is spent at the slower speed.
              </p>
              <p>(c) {`$H \\le G \\le A$`} (harmonic, then geometric, then arithmetic).</p>
            </>
          )
        },
        {
          id: 'B8',
          marks: 5,
          prompt: (
            <>
              300 kg of cucumbers are 99% water. They are left to dry until they are 98% water. What
              do they now weigh? Explain why a change of only 1% in the water content causes such a
              large drop in weight.
            </>
          ),
          answer: (
            <>
              <p>
                The dry matter is fixed: {`$1\\%$`} of 300 = 3 kg. After drying, the dry matter is{' '}
                {`$2\\%$`} of the new weight w. So {`$3 = 0.02w$`}, giving {`$w = 150$`} kg.
              </p>
              <p>
                The water does almost all the carrying. When the dry share doubles from 1% to 2%,
                the total must halve to keep the 3 kg of solids at that share.
              </p>
              <CucumberFig />
            </>
          )
        },
        {
          id: 'B9',
          marks: 5,
          prompt: (
            <>
              A spoonful of tea is stirred into a bottle of wine. Then a spoonful of the mixture is
              taken out and put back into the tea. Is there more tea in the wine, or more wine in
              the tea? Justify your answer.
            </>
          ),
          answer: (
            <>
              <p>The two amounts are exactly equal.</p>
              <p>
                Each container ends with the same volume it started with. So whatever wine is now
                missing from the wine bottle must have been replaced by an equal volume of tea. The
                tea that left the cup is replaced by an equal volume of wine.
              </p>
              <p>This holds whether or not the mixture is stirred.</p>
            </>
          )
        }
      ]
    }
  ]
}

export default function CapstoneFractions() {
  const config = {
    documentTitle: 'Fractions Exam - AETHER',
    briefing: {
      title: 'Fractions',
      concepts: [
        'Fraction Operations',
        'Decimal Fundamentals',
        'Percentages: Concept and Conversions',
        'Rate, Speed, Average Speed'
      ]
    },
    exam: exam
  }

  return <ProjectTemplate config={config} />
}
