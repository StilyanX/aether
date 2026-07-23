import { useState } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { VizFigure } from '../../../../components/viz-figure'
import {
  Plot,
  Polyline,
  Label,
  Tex,
  Slider,
  FG,
  OPACITY
} from '../../../../components/viz/primitives'
import { gcd, factor } from '../../../../components/viz/math-utils'
import { FONT_BODY, FONT_CONTROL, FONT_LABEL } from '../../../../components/viz/scale-tokens'

// Inline viz, wrapped in <VizFigure>. Engine choices per pattern map.

// 08.1.6: Pythagorean Triple from two whole numbers m and n.
// Plot-based; closed Polyline for the triangle; labels in Plot coords (no
// rotated text: hypotenuse label sits near the midpoint along screen axes).
function Nt_PythagoreanTripleInline() {
  const [m, setM] = useState(3)
  const [n, setN] = useState(2)
  const legA = m * m - n * n
  const legB = 2 * m * n
  const c = m * m + n * n
  const primitive = m > n && gcd(m, n) === 1 && m % 2 !== n % 2
  const scale = 3.6 / Math.max(legA, legB, 1)
  const A = legA * scale
  const B = legB * scale
  return (
    <div style={{ width: '100%' }}>
      {/* Equal x/y units: width === height·0.8 with equal ranges, so the right
          angle is square and a 3-4-5 renders in true proportion (Plot uses
          independent x/y scales, so the ranges must be matched by hand). */}
      <Plot xRange={[-1, 4.6]} yRange={[-1.4, 4.2]} width={520} height={650}>
        {m > n && (
          <>
            <Polyline
              points={[
                [0, 0],
                [A, 0],
                [0, B]
              ]}
              closed
              fillOpacity={OPACITY.faint}
              opacity={OPACITY.fg}
              strokeWidth={1.5}
            />
            {/* right-angle marker at the origin vertex: now a true square */}
            <Polyline
              points={[
                [0.28, 0],
                [0.28, 0.28],
                [0, 0.28]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={1}
            />
            <Label
              at={[A / 2, -0.3]}
              anchor="middle"
              upper={false}
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            >{`a = ${legA}`}</Label>
            <Label
              at={[-0.2, B / 2]}
              anchor="end"
              upper={false}
              size={FONT_LABEL}
              opacity={OPACITY.fg}
              dy={4}
            >{`b = ${legB}`}</Label>
            <Label
              at={[A / 2 + 0.3, B / 2 + 0.25]}
              anchor="start"
              upper={false}
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            >{`c = ${c}`}</Label>
            <Tex
              at={[1.8, 4.0]}
              tex={`${legA}^2 + ${legB}^2 = ${legA * legA + legB * legB} = ${c}^2`}
              anchor="middle"
              size={FONT_LABEL}
              opacity={OPACITY.dim}
            />
            <Label
              at={[1.8, -1.1]}
              anchor="middle"
              upper
              size={FONT_LABEL}
              opacity={primitive ? OPACITY.fg : OPACITY.dim}
            >
              {primitive
                ? 'sides share no common factor'
                : `sides share a factor of ${gcd(gcd(legA, legB), c)}`}
            </Label>
          </>
        )}
      </Plot>
      <Slider
        label="m"
        value={m}
        min={2}
        max={9}
        step={1}
        onChange={v => setM(v | 0)}
        format={v => v}
      />
      <Slider
        label="n"
        value={n}
        min={1}
        max={Math.max(1, m - 1)}
        step={1}
        onChange={v => setN(Math.min(m - 1, v | 0))}
        format={v => v}
      />
    </div>
  )
}

// 08.1.7: Perfect squares pair up their primes. A number is a perfect square
// when every prime in its factor list appears an even number of times. Blocks
// pair up per prime; a lone unpaired block marks an odd count, so the square
// root is not a whole number: the fact behind irrational square roots.
function Nt_PerfectSquareLemmaInline() {
  const [n, setN] = useState(72)
  const fac = factor(n)
  const primes = Object.keys(fac)
    .map(Number)
    .sort((x, y) => x - y)
  const oddPrimes = primes.filter(p => fac[p] % 2 === 1)
  const isSquare = oddPrimes.length === 0
  const root = isSquare ? Math.round(Math.sqrt(n)) : null
  const W = 640
  const H = 300
  const baseline = H - 78
  const blockH = 22
  const blockW = 36
  const pairGap = 8
  const count = primes.length
  const colAt = idx => (W * (idx + 1)) / (count + 1)
  return (
    <div style={{ width: '100%' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ display: 'block', color: 'var(--text-primary)' }}
      >
        <g fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          <Label x={W / 2} y={26} anchor="middle" upper size={FONT_LABEL} opacity={OPACITY.dim}>
            a square needs every prime's blocks to pair up
          </Label>
          {primes.map((p, idx) => {
            const e = fac[p]
            const cx = colAt(idx)
            const oddTop = e % 2 === 1
            return (
              <g key={p}>
                {Array.from({ length: e }, (_, i) => {
                  const y = baseline - blockH * (i + 1) - pairGap * Math.floor(i / 2)
                  const unpaired = oddTop && i === e - 1
                  return (
                    <rect
                      key={i}
                      x={cx - blockW / 2}
                      y={y}
                      width={blockW}
                      height={blockH - 3}
                      fill={FG}
                      fillOpacity={unpaired ? OPACITY.accent : OPACITY.faint * 1.6}
                      stroke={FG}
                      strokeOpacity={unpaired ? OPACITY.fg : OPACITY.dim}
                    />
                  )
                })}
                {/* left bracket per complete pair: makes "blocks pair up" literal */}
                {Array.from({ length: Math.floor(e / 2) }, (_, pr) => {
                  const yTop = baseline - blockH * (2 * pr + 2) - pairGap * pr
                  const yBot = baseline - blockH * (2 * pr + 1) - pairGap * pr + (blockH - 3)
                  const bx = cx - blockW / 2 - 5
                  return (
                    <path
                      key={`pair-${pr}`}
                      d={`M ${bx + 3} ${yTop} L ${bx} ${yTop} L ${bx} ${yBot} L ${bx + 3} ${yBot}`}
                      fill="none"
                      stroke={FG}
                      strokeOpacity={OPACITY.dim}
                      strokeWidth={1}
                    />
                  )
                })}
                <text
                  x={cx}
                  y={baseline + 26}
                  textAnchor="middle"
                  fontSize={FONT_BODY}
                  opacity={OPACITY.fg}
                >
                  {p}
                  <tspan fontSize={FONT_LABEL} dy={-8}>
                    {e}
                  </tspan>
                </text>
                <text
                  x={cx}
                  y={baseline + 46}
                  textAnchor="middle"
                  fontSize={FONT_LABEL}
                  opacity={oddTop ? OPACITY.fg : OPACITY.dim}
                >
                  {oddTop ? 'odd' : 'even'}
                </text>
              </g>
            )
          })}
          <text
            x={W / 2}
            y={H - 14}
            textAnchor="middle"
            fontSize={FONT_CONTROL}
            opacity={OPACITY.fg}
          >
            {isSquare
              ? `${n} is a perfect square · √${n} = ${root}`
              : `${n} is not a perfect square · odd count of ${oddPrimes.join(', ')}`}
          </text>
        </g>
      </svg>
      <Slider
        label="n"
        value={n}
        min={2}
        max={200}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v}
      />
    </div>
  )
}

function useConfig() {
  return {
    cssPrefix: 'nth',
    documentTitle: 'Number Theory - AETHER',
    learning: {
      category: 'Part 4',
      title: 'Number Theory',
      subtitle:
        'Putting your number tools to work: which fractions give decimals that stop, which square roots are not fractions, and how to build Pythagorean triples.',
      sections: [
        /* SECTION 1: TERMINATING DECIMALS
         */
        <>
          <h2>Terminating Decimals</h2>
          <p>
            You have built a toolkit: factors, primes, divisibility rules, and the greatest common
            divisor from the Euclidean Algorithm. This page puts those tools to work on three new
            questions. Which fractions turn into decimals that stop? Which square roots are not
            fractions? And how do you build right triangles with whole-number sides?
          </p>

          <p>
            {`Some fractions turn into decimals that stop. Others run on forever. $\\frac{1}{4} = 0.25$ stops. $\\frac{1}{3} = 0.333\\ldots$ runs on. You can tell which one will happen before you divide.`}
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Will $\\frac{5}{16}$ stop or run on? Look only at the bottom number and its factors.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$16 = 2 \\times 2 \\times 2 \\times 2$. The bottom is made of only 2s. So the decimal stops: $\\frac{5}{16} = 0.3125$.`}</p>
            </details>
          </div>

          <p>{`First put the fraction in lowest terms. A fraction is in lowest terms when its top and bottom share no factor except 1. You reduce it by dividing top and bottom by their gcd, the Euclidean Algorithm tool you already have.`}</p>

          <p>{`Then break the bottom number into its prime factors. Those are the primes you multiply together to make it.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">When a Decimal Stops</span>
            <div className="lrn-definition-desc">{`A fraction in lowest terms gives a decimal that stops exactly when its bottom number breaks into only 2s and 5s. If any other prime is on the bottom, the decimal runs on forever.`}</div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Our decimals are tenths, hundredths, thousandths, and so on. Every one of these is a power of 10. And $10 = 2 \\times 5$. A bottom made of only 2s and 5s can be grown into a power of 10. Just multiply the top and bottom by the missing 2s or 5s. For $\\frac{1}{8}$: the bottom $8 = 2 \\times 2 \\times 2$. Multiply top and bottom by $5 \\times 5 \\times 5 = 125$ to get $\\frac{125}{1000} = 0.125$.`}</p>
          </div>

          <p>More examples:</p>
          <ul className="lrn-list">
            <li>{`$\\frac{3}{20}$: the bottom $20 = 2 \\times 2 \\times 5$. Only 2s and 5s, so it stops. $\\frac{3}{20} = 0.15$.`}</li>
            <li>{`$\\frac{7}{40}$: the bottom $40 = 2 \\times 2 \\times 2 \\times 5$. Only 2s and 5s, so it stops. $\\frac{7}{40} = 0.175$.`}</li>
            <li>{`$\\frac{1}{6}$: the bottom $6 = 2 \\times 3$. The 3 is not a 2 or a 5, so it runs on. $\\frac{1}{6} = 0.1666\\ldots$`}</li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Does $\\frac{3}{12}$ stop? The bottom 12 has a factor of 3. Be careful before you answer.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`First put the fraction in lowest terms. $\\frac{3}{12} = \\frac{1}{4}$, and $4 = 2 \\times 2$. Only 2s, so it stops: $\\frac{1}{4} = 0.25$. The rule only works after you reduce. The original bottom 12 hides a 3 that cancels away.`}</p>
            </details>
          </div>

          <h3>What You Can Now Do</h3>

          <p>{`You can tell whether a fraction stops or repeats without dividing. Reduce it first, then check the bottom for any prime other than 2 or 5.`}</p>
        </>,

        /* SECTION 2: SQUARE ROOTS THAT ARE NOT FRACTIONS
         */
        <>
          <h2>Square Roots That Are Not Fractions</h2>

          <p>
            {`Draw a square with sides of length 1. Its diagonal has length $\\sqrt{2}$. You might hope $\\sqrt{2}$ is a neat fraction. It is not. No fraction in the world equals $\\sqrt{2}$ exactly.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Irrational Number</span>
            <div className="lrn-definition-desc">{`A number that cannot be written as a fraction of two whole numbers is called irrational. $\\sqrt{2}$ is irrational.`}</div>
          </div>

          <p>{`A perfect square is a number you get by multiplying a whole number by itself. $9$ is a perfect square because $9 = 3 \\times 3$. So is $36 = 6 \\times 6$. A whole number has a whole-number square root only when it is a perfect square.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">When a Square Root Is Irrational</span>
            <div className="lrn-definition-desc">{`If a whole number is a perfect square, its square root is a whole number. If it is not a perfect square, its square root is irrational.`}</div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Square any number and every prime inside it comes in pairs. Take $6 = 2 \\times 3$. Then $36 = 2 \\times 2 \\times 3 \\times 3$: each prime appears twice. So a perfect square always has its primes in pairs. The number 2 has a single 2, with no pair. So 2 is not a perfect square, and $\\sqrt{2}$ is irrational.`}</p>
          </div>

          <VizFigure title="Perfect Squares Pair Up Their Primes" size="body" aspect="auto">
            <Nt_PerfectSquareLemmaInline />
          </VizFigure>

          <p>A few to compare:</p>
          <ul className="lrn-list">
            <li>{`$\\sqrt{4} = 2$. Here $4 = 2 \\times 2$, primes paired, so the root is a whole number.`}</li>
            <li>{`$\\sqrt{9} = 3$. Here $9 = 3 \\times 3$, primes paired, so the root is a whole number.`}</li>
            <li>{`$\\sqrt{20}$: $20 = 2 \\times 2 \\times 5$. The 5 has no pair, so 20 is not a perfect square and $\\sqrt{20}$ is irrational.`}</li>
          </ul>

          <h3>What You Can Now Do</h3>

          <p>{`You can tell which square roots are whole numbers and which are irrational. Break the number into primes and check whether every prime comes in a pair.`}</p>
        </>,

        /* SECTION 3: PYTHAGOREAN TRIPLES
         */
        <>
          <h2>Pythagorean Triples</h2>

          <p>
            Egyptian rope-stretchers tied 12 equal spaces into a loop. They pulled it into a
            triangle with sides 3, 4, and 5. That triangle always had a perfect right angle.
            Whole-number right triangles were a builder's tool thousands of years ago.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Pythagorean Triple</span>
            <div className="lrn-definition-desc">{`Three whole numbers $a$, $b$, $c$ form a Pythagorean triple when $a^2 + b^2 = c^2$. The sides 3, 4, 5 work because $9 + 16 = 25$.`}</div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You know $3^2 + 4^2 = 5^2$. Are there other whole-number triangles like it? Could there be many?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes, there are endlessly many. A simple recipe builds them from any two whole numbers, as you will see below.`}</p>
            </details>
          </div>

          <p>A few triples to check for yourself:</p>
          <ul className="lrn-list">
            <li>{`$3, 4, 5$: $9 + 16 = 25 = 5^2$.`}</li>
            <li>{`$5, 12, 13$: $25 + 144 = 169 = 13^2$.`}</li>
            <li>{`$8, 15, 17$: $64 + 225 = 289 = 17^2$.`}</li>
          </ul>

          <h3>A Recipe for Triples</h3>

          <p>{`Here is a way to build them. Pick two whole numbers $m$ and $n$ with $m$ bigger than $n$. Then these three numbers always form a triple:`}</p>

          <div className="lrn-eq lrn-eq-display">{`$$m^2 - n^2, \\quad 2mn, \\quad m^2 + n^2$$`}</div>

          <p>{`Take $m = 2$ and $n = 1$. Then $m^2 - n^2 = 3$, $2mn = 4$, and $m^2 + n^2 = 5$. You get 3, 4, 5. Take $m = 3$ and $n = 2$ and you get 5, 12, 13.`}</p>

          <VizFigure title="Building a Pythagorean Triple" size="body" aspect="auto">
            <Nt_PythagoreanTripleInline />
          </VizFigure>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The recipe always balances. Square the first two numbers, add them, and you get exactly the square of the third. Try it on any $m$ and $n$ and the check $a^2 + b^2 = c^2$ comes out true every time.`}</p>
          </div>

          <h3>What You Can Now Do</h3>

          <p>{`You can build right triangles with whole-number sides whenever you need one. Pick any two whole numbers, run the recipe, and the three results always make a right triangle.`}</p>
        </>
      ]
    },

    practice: [
      {
        q: 'Does 7/40 give a decimal that stops? Explain.',
        a: 'First check it is in lowest terms: 7 and 40 share no factor, so yes. Break the bottom into primes: 40 = 2 × 2 × 2 × 5. Only 2s and 5s. So the decimal stops. In fact 7/40 = 0.175.'
      },
      {
        q: 'Does 5/6 give a decimal that stops? Explain.',
        a: 'The fraction 5/6 is in lowest terms. Break the bottom into primes: 6 = 2 × 3. The 3 is not a 2 or a 5. So the decimal runs on forever. In fact 5/6 = 0.8333...'
      },
      {
        q: 'Does 9/15 give a decimal that stops? Be careful to reduce first.',
        a: 'Reduce first: gcd(9, 15) = 3, so 9/15 = 3/5. The bottom 5 is just a single 5. Only 2s and 5s allowed, and 5 passes. So it stops: 3/5 = 0.6. Reducing first matters: the original bottom 15 hides a 3 that cancels.'
      },
      {
        q: 'Is √36 a whole number? Is √20? Explain each.',
        a: 'For 36: 36 = 6 × 6, a perfect square. So √36 = 6, a whole number. For 20: 20 = 2 × 2 × 5. The 5 has no pair, so 20 is not a perfect square. So √20 is irrational, not a whole number and not a fraction.'
      },
      {
        q: 'A student says √4 is irrational because 4 is not prime. Find the mistake.',
        a: 'Being prime is not the test. The test is whether the number is a perfect square. Here 4 = 2 × 2, so 4 is a perfect square. That means √4 = 2, which is a whole number, not irrational. The student used the wrong test.'
      },
      {
        q: 'Is 50 a perfect square? Use its prime factors.',
        a: 'Break 50 into primes: 50 = 2 × 5 × 5. The 5s pair up, but the 2 is alone with no pair. A perfect square needs every prime in pairs. So 50 is not a perfect square, and √50 is irrational.'
      },
      {
        q: 'Check that 8, 15, 17 is a Pythagorean triple.',
        a: 'Square the two smaller sides and add: 8² + 15² = 64 + 225 = 289. Square the largest: 17² = 289. They match, so 8² + 15² = 17². Yes, 8, 15, 17 is a Pythagorean triple.'
      },
      {
        q: 'Use m = 3 and n = 1 in the recipe to build a triple. Check that it works.',
        a: 'm² − n² = 9 − 1 = 8. 2mn = 2 × 3 × 1 = 6. m² + n² = 9 + 1 = 10. The triple is 8, 6, 10. Check: 8² + 6² = 64 + 36 = 100 = 10². It works.'
      },
      {
        q: 'Use m = 4 and n = 3 in the recipe to build a triple. Check that it works.',
        a: 'm² − n² = 16 − 9 = 7. 2mn = 2 × 4 × 3 = 24. m² + n² = 16 + 9 = 25. The triple is 7, 24, 25. Check: 7² + 24² = 49 + 576 = 625 = 25². It works.'
      },
      {
        q: 'An architect wants a right-angle corner with whole-number sides. Use m = 5 and n = 2 to build one.',
        a: 'm² − n² = 25 − 4 = 21. 2mn = 2 × 5 × 2 = 20. m² + n² = 25 + 4 = 29. The triple is 20, 21, 29. Check: 20² + 21² = 400 + 441 = 841 = 29². A 20-21-29 frame gives a true right angle.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Number Theory',
      sections: [
        <>
          <h2>Terminating Decimals</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">When a Decimal Stops</span>
            <div className="lrn-definition-desc">{`A fraction in lowest terms stops as a decimal exactly when its bottom number breaks into only 2s and 5s. Any other prime on the bottom makes it run on forever.`}</div>
          </div>
          <p>
            <strong>When to use:</strong>{' '}
            {`Reduce the fraction first, then factor the bottom number. Examples: $\\frac{7}{40}$ stops, $\\frac{1}{6}$ runs on.`}
          </p>

          <h2>Square Roots</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Perfect Squares and Their Roots</span>
            <div className="lrn-definition-desc">{`A number is a perfect square when every prime in its factor list appears an even number of times. If a whole number is a perfect square, its square root is a whole number. If not, its square root is irrational.`}</div>
          </div>
          <p>
            <strong>When to use:</strong> Test whether a square root is a whole number. Break the
            number into primes and check that every prime comes in a pair.
          </p>

          <h2>Pythagorean Triples</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$a^2 + b^2 = c^2$$`}</span>
          </div>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\text{recipe: } \\; m^2 - n^2, \\quad 2mn, \\quad m^2 + n^2$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong>{' '}
            {`Build a right triangle with whole-number sides. Pick whole numbers $m > n$ and run the recipe.`}
          </p>
        </>
      ]
    },

    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }`
  }
}

export default function NumberTheory() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
