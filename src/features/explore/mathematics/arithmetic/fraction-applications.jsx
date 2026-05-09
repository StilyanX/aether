import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import { useMathJax } from '../../../../hooks/use-mathjax'

import {
  PercentBarVis,
  RatioBarVis,
  RateGraphVis,
  CoopWorkVis,
  ComplexFractionVis
} from '../../../../components/viz/math-viz/modules'

function useConfig() {
  const C = useVizColors()
  useMathJax([])
  const config = {
    cssPrefix: 'frc',
    source: 'Understanding Numbers in Elementary School Mathematics: Hung-Hsi Wu',
    documentTitle: 'Fraction Applications - AETHER',
    learning: {
      category: 'Part 2',
      title: 'Fraction Applications',
      subtitle:
        'Complex fractions, percent, ratio, rate, and cooperative work. Fractions in the real world.',
      sections: [
        /* ═══ COMPLEX FRACTIONS ═══ */
        <>
          <h2>Complex Fractions</h2>
          <p>
            A <strong>complex fraction</strong>
            {` is a fraction $\\frac{A}{C}$ where $A$ and $C$ are themselves fractions.`}
          </p>
          <p>
            <strong>When to use this:</strong> Use complex fraction rules for percent, rate, and
            ratio problems where numerator or denominator is a fraction.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Can you compute $\\frac{0.06}{1.3} + \\frac{0.5}{3.4}$ using ordinary fraction rules?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. Apply rule (d): $\\frac{AD + BC}{BD}$. Result: $\\frac{0.854}{4.42} = \\frac{854}{4420}$.`}</p>
            </details>
          </div>

          <div className="lrn-graph">
            <ComplexFractionVis C={C} />
          </div>

          <h3>Rules (a) through (f)</h3>
          <p>{`For fractions $A$, $B$, $C$, $D$, $E$, $F$ (denominators nonzero):`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">(a)</span>
              <p className="lrn-step-content">{`$A \\times \\frac{B}{C} = \\frac{AB}{C}$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(b) Cancellation</span>
              <p className="lrn-step-content">{`$\\frac{AC}{BC} = \\frac{A}{B}$ (when $C \\neq 0$)`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(c) Cross-multiplication</span>
              <p className="lrn-step-content">{`$\\frac{A}{B} = \\frac{C}{D}$ iff $AD = BC$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(d) Addition/Subtraction</span>
              <p className="lrn-step-content">{`$\\frac{A}{B} \\pm \\frac{C}{D} = \\frac{AD \\pm BC}{BD}$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(e) Multiplication</span>
              <p className="lrn-step-content">{`$\\frac{A}{B} \\times \\frac{C}{D} = \\frac{AC}{BD}$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(f) Distributive law</span>
              <p className="lrn-step-content">{`$\\frac{A}{B}(\\frac{C}{D} \\pm \\frac{E}{F}) = \\frac{A}{B} \\cdot \\frac{C}{D} \\pm \\frac{A}{B} \\cdot \\frac{E}{F}$`}</p>
            </div>
          </div>
          <p>These are the same rules as for ordinary fractions. One set of rules handles both.</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do the same six rules work for whole numbers and fractions alike?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A complex fraction $\\frac{A}{C}$ (where $A = \\frac{a}{b}$ and $C = \\frac{c}{d}$) equals the ordinary fraction $\\frac{ad}{bc}$. Every complex fraction IS an ordinary fraction. The same proofs apply.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Invert-and-multiply turns any complex fraction into an ordinary one. Since the rules
              were proved for all fractions, they cover complex fractions too.
            </p>
          </div>

          <h3>Applications</h3>
          <p>
            <strong>Example:</strong>
            {` $\\frac{0.06}{1.3} + \\frac{0.5}{3.4} = \\frac{0.204 + 0.65}{4.42} = \\frac{0.854}{4.42} = \\frac{854}{4420}$`}
          </p>

          <h3>Why Complex Fractions Matter</h3>
          <ul className="lrn-list">
            <li>{`Percent problems use $\\frac{N}{100}$ where $N$ can be a fraction.`}</li>
            <li>Rate problems involve distance/time where both can be fractions.</li>
            <li>Interest rate changes involve complex fractions.</li>
          </ul>
        </>,

        /* ═══ PERCENT ═══ */
        <>
          <h2>Percent</h2>
          <p>
            A <strong>percent</strong>
            {` is a complex fraction with denominator 100. $N\\% = \\frac{N}{100}$.`}
          </p>
          <p>
            The word comes from the Latin <em>per centum</em>, meaning &ldquo;by the hundred.&rdquo;
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>A stock goes up 12% then down 12%. Does it return to its original price?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. After +12%: $1.12D$. After -12%: $0.88 \\times 1.12D = 0.9856D$. Lost 1.44%.`}</p>
            </details>
          </div>

          <h3>The Definition</h3>
          <div className="lrn-eq lrn-eq-display">{`$$N\\% = \\frac{N}{100}$$`}</div>
          <ul className="lrn-list">
            <li>{`$2\\% = \\frac{2}{100}$`}</li>
            <li>{`$33\\frac{1}{3}\\% = \\frac{1}{3}$`}</li>
            <li>{`$7\\frac{1}{2}\\% = \\frac{3}{40}$`}</li>
          </ul>

          <div className="lrn-graph">
            <PercentBarVis C={C} />
          </div>

          <h3>The Three Types of Percent Problems</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Type 1: What is N% of X?</span>
            <div className="lrn-definition-desc">{`$\\frac{N}{100} \\times X$`}</div>
          </div>
          <p>
            <strong>Example:</strong>
            {` 45% of 70 = $\\frac{45}{100} \\times 70 = 31.5$`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Type 2: X is N% of what?</span>
            <div className="lrn-definition-desc">{`$? = X \\times \\frac{100}{N}$`}</div>
          </div>
          <p>
            <strong>Example:</strong>
            {` 70 is 45% of $\\frac{7000}{45} = 155\\frac{5}{9}$`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Type 3: What percent of X is Y?</span>
            <div className="lrn-definition-desc">{`$N = \\frac{Y}{X} \\times 100$`}</div>
          </div>
          <p>
            <strong>Example:</strong>
            {` What percent of 70 is 45? $\\frac{450}{7} = 64\\frac{2}{7}\\%$`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do all three types reduce to one equation?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Percent IS a fraction ($\\frac{N}{100}$), and "of" IS multiplication. Every percent problem says $\\frac{N}{100} \\times X = Y$. Three unknowns, three types, one equation.`}</p>
            </details>
          </div>

          <h3>Percent Increase and Decrease</h3>
          <p>{`Up 15%: new = $P(1.15)$. Down 12%: new = $P(0.88)$.`}</p>
          <p>
            <strong>Stock up 12%, then down 12%:</strong>
          </p>
          <p>{`After up: $1.12D$. After down: $0.88 \\times 1.12D = 0.9856D$. Lost 1.44%.`}</p>
          <p>{`To return to original, drop by $x\\%$ where $(100 - x) \\times 112 = 10000$. So $x = 10\\frac{5}{7}\\%$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is the required drop different from the rise?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The 12% decrease applies to a higher base (1.12D, not D). A smaller percentage of a
                larger base can equal the same amount.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`After a $P\\%$ rise, the base grows. The same $P\\%$ of a bigger base is a bigger amount. So the decrease overshoots. The final price is always $(1 - (P/100)^2)$ of the original.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Percent as a Number</span>
              <p>{`$N\\% = \\frac{N}{100}$. No special treatment needed.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Percent as &ldquo;Operator&rdquo;</span>
              <p>Wrong framing. Percent is not an action. It is just a number.</p>
            </div>
          </div>

          <h3>Expressing Fractions as Percents</h3>
          <p>
            <strong>Example:</strong>
            {` $\\frac{5}{16} = 31\\frac{1}{4}\\%$. Compute: $C = 100 \\times \\frac{5}{16} = \\frac{500}{16} = 31\\frac{1}{4}$.`}
          </p>
        </>,

        /* ═══ RELATIVE ERROR ═══ */
        <>
          <h2>Relative Error</h2>
          <p>
            <strong>Relative error</strong> measures approximation quality as a percent of the true
            value.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You approximate $67\\frac{1}{2}\\%$ by $\\frac{2}{3}$. Is this close enough?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. Relative error is about $1\\frac{19}{81}\\%$, under 2%.`}</p>
            </details>
          </div>

          <h3>The Formula</h3>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{relative error} = \\frac{|\\text{true} - \\text{approx}|}{\\text{true}} \\times 100\\%$$`}</div>

          <p>
            <strong>Example:</strong>
            {` Approximate $67\\frac{1}{2}\\%$ by $\\frac{2}{3}$. Absolute error: $\\frac{5}{6}\\%$. Relative error: $1\\frac{19}{81}\\%$.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is relative error more useful than absolute error?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Absolute error ignores scale. An error of 5 minutes means little for a 7-hour drive
                but a lot for a 20-minute meeting. Relative error scales by the true value.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Relative error answers "how big is this error compared to what you are measuring?"
              That comparison is what determines if the error matters in practice.
            </p>
          </div>
        </>,

        /* ═══ FASM ═══ */
        <>
          <h2>FASM: Fundamental Assumption of School Mathematics</h2>
          <p>
            {`You have used $\\pi \\times r^2$ since grade school. But $\\pi$ is not a fraction. Why do fraction rules work on it?`}{' '}
            <strong>Irrational numbers</strong>
            {` like $\\pi$ and $\\sqrt{2}$ cannot be written as fractions.`}
          </p>
          <p>
            <strong>FASM states:</strong> All fraction arithmetic rules extend to all real numbers.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Can you add $\\frac{\\pi}{7} + \\frac{\\sqrt{2}}{3\\sqrt{5}}$ using the addition formula?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. FASM guarantees it: $\\frac{3\\pi\\sqrt{5} + 7\\sqrt{2}}{21\\sqrt{5}}$.`}</p>
            </details>
          </div>

          <p>This is an important assumption. It lets you write:</p>
          <div className="lrn-eq">{`$$\\frac{\\pi}{7} + \\frac{\\sqrt{2}}{3\\sqrt{5}} = \\frac{3\\pi\\sqrt{5} + 7\\sqrt{2}}{21\\sqrt{5}}$$`}</div>
          <p>{`even though $\\pi$ and $\\sqrt{2}$ are not fractions.`}</p>
          <p>
            Advanced mathematics proves FASM is true. It justifies using fraction rules for all real
            numbers.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Use FASM to simplify $\\frac{\\pi}{7} + \\frac{1}{3}$. Why can you apply the addition formula here?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\frac{\\pi}{7} + \\frac{1}{3} = \\frac{3\\pi + 7}{21}$. FASM says the addition formula works for all real numbers, not just fractions. You can use it without proof at this level.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The real number system extends fractions while preserving all arithmetic properties.
              Every rule proved for fractions carries over. The proof requires university-level
              mathematics.
            </p>
          </div>
        </>,

        /* ═══ RATIO ═══ */
        <>
          <h2>Ratio</h2>
          <p>
            The <strong>{`ratio of $M$ to $N$`}</strong>
            {`, written $M : N = a : b$, means $\\frac{M}{N} = \\frac{a}{b}$.`} A ratio is just a
            division. Nothing more.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>In a class of 27 students, boys to girls is 4:5. How many boys?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$B = 4u$, $G = 5u$, $9u = 27$, $u = 3$. Boys = 12.`}</p>
            </details>
          </div>

          <h3>The Ratio Theorem</h3>
          <p>{`If $\\frac{M}{N} = \\frac{a}{b}$, then $M = au$ and $N = bu$ for some fraction $u$.`}</p>
          <p>{`Proof: $\\frac{M}{a} = \\frac{N}{b} = u$. Then $M = au$, $N = bu$.`}</p>

          <div className="lrn-graph">
            <RatioBarVis C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the ratio theorem give you a concrete tool for solving ratio problems?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`It converts the ratio into two equations: $M = au$ and $N = bu$. Combined with $M + N = \\text{total}$, you solve for $u$, then find $M$ and $N$.`}</p>
            </details>
          </div>

          <h3>Worked Problems</h3>
          <p>
            <strong>Problem 1:</strong> 27 students, boys:girls = 4:5.
          </p>
          <p>{`$4u + 5u = 27$, $u = 3$. Boys = 12, Girls = 15.`}</p>

          <p>
            <strong>Problem 2:</strong> Benoit, Carl, Davida split 440 dollars in ratio 2:5:4.
          </p>
          <p>{`$2k + 5k + 4k = 11k = 440$, $k = 40$. B = 80, C = 200, D = 160.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does subtracting the current ratio from the target give the number of new teachers
              needed?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The gap between ratios (1:24 to 1:20) gives additional teachers per student.
                Multiply by student count for the total.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The ratio theorem works for fractional ratios too. $M : N = a : b$ always gives $M = au$ and $N = bu$. The value $u$ adjusts to make the total work out.`}</p>
          </div>

          <h3>Unit Conversion</h3>
          <p>
            <strong>Example:</strong> 5 gal/min = ? qt/sec.
          </p>
          <p>{`$\\frac{5 \\times 4 \\text{ qt}}{60 \\text{ sec}} = \\frac{1}{3}$ qt/sec. Convert each unit, then divide.`}</p>
        </>,

        /* ═══ RATE ═══ */
        <>
          <h2>Rate</h2>
          <p>
            A <strong>rate</strong> is a division of two quantities of different types
            (distance/time, volume/time, cost/item).
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A faucet fills $3\\frac{1}{2}$ cu ft in 25 sec. How long for $11\\frac{1}{2}$ cu ft?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$82\\frac{1}{7}$ seconds. Rate = $\\frac{3.5}{25}$. Time = $\\frac{11.5}{3.5/25}$.`}</p>
            </details>
          </div>

          <h3>Constant Rate</h3>
          <p>
            A rate is <strong>constant</strong>
            {` if $\\frac{M}{N}$ stays the same for every measurement.`}
          </p>
          <p>{`Constant speed: $\\frac{D}{T} = v$ for every time interval.`}</p>

          <div className="lrn-graph">
            <RateGraphVis C={C} />
          </div>

          <h3>Solving Rate Problems</h3>
          <p>
            <strong>Problem:</strong>
            {` Faucet fills $3\\frac{1}{2}$ cu ft in 25 sec.`}
          </p>
          <p>{`Rate $r = \\frac{3.5}{25}$. For 11.5 cu ft: $t = \\frac{287.5}{3.5} = 82\\frac{1}{7}$ sec.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does constant rate justify $\\frac{11.5}{t} = \\frac{3.5}{25}$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Constant rate means volume/time is the same for ALL measurements. The first
                measurement fixes the ratio. Constancy guarantees it holds for any other pair.
              </p>
            </details>
          </div>

          <p>
            <strong>Reduced rate:</strong> Faucet fills tub in 15 min. Rate drops 15%.
          </p>
          <p>{`New time: $\\frac{15}{0.85} = 17\\frac{11}{17}$ min.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`If rate drops by $N\\%$, new rate is $(1 - N/100)$ of the original. Time = work/rate. Smaller rate means more time: $\\frac{k \\times 100}{100 - N}$.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Mathematical Reasoning</span>
              <p>Constant rate logically implies the proportion.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">&ldquo;Setting Up a Proportion&rdquo;</span>
              <p>The proportion is a consequence of constant rate, not a starting point.</p>
            </div>
          </div>
        </>,

        /* ═══ COOPERATIVE WORK ═══ */
        <>
          <h2>Cooperative Work</h2>
          <p>
            When two or more workers work at constant rates on separate parts of a job, their rates
            add.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Regina mows in 10 hours. Eric in 12. How long together?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Combined rate: $\\frac{11A}{60}$. Time: $\\frac{60}{11} = 5\\frac{5}{11}$ hours.`}</p>
            </details>
          </div>

          <h3>The Formula</h3>
          <p>{`Rates add: $R_1 + R_2$. Time: $T = \\frac{A}{R_1 + R_2}$.`}</p>

          <h3>Derivation</h3>
          <ol className="lrn-list">
            <li>{`Let $A$ = total work.`}</li>
            <li>{`Regina: $\\frac{A}{10}$. Eric: $\\frac{A}{12}$.`}</li>
            <li>{`Together: $\\frac{6A + 5A}{60} = \\frac{11A}{60}$.`}</li>
            <li>{`Time: $\\frac{A}{11A/60} = \\frac{60}{11} = 5\\frac{5}{11}$ hours.`}</li>
          </ol>

          <div className="lrn-graph">
            <CoopWorkVis C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the total area A cancel out?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Both rates are proportional to $A$. Combined rate = $\\frac{11A}{60}$. Time = $\\frac{A}{11A/60} = \\frac{60}{11}$. The $A$ cancels, leaving a number independent of job size.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Independent workers each complete their own portion. The total rate is the sum of
              individual rates because the portions do not overlap. This is addition of rates, not
              addition of times.
            </p>
          </div>

          <h3>Three Workers</h3>
          <p>
            <strong>Problem:</strong> Joshua (18 hrs), Li (15 hrs), Manfred (16 hrs).
          </p>
          <div className="lrn-eq">{`$$\\frac{40H}{720} + \\frac{48H}{720} + \\frac{45H}{720} = \\frac{133H}{720}$$`}</div>
          <p>{`Time: $\\frac{720}{133}$ hours (about 5 hours 25 min).`}</p>
        </>
      ]
    },

    practice: [
      {
        q: 'Compute $\\frac{0.06}{1.3} + \\frac{0.5}{3.4}$.',
        a: '$\\frac{3.4 \\times 0.06 + 1.3 \\times 0.5}{1.3 \\times 3.4} = \\frac{0.854}{4.42} = \\frac{854}{4420} = \\frac{427}{2210}$.'
      },
      {
        q: 'Express $33\\frac{1}{3}\\%$ as a fraction.',
        a: '$33\\frac{1}{3}\\% = \\frac{100/3}{100} = \\frac{1}{3}$.'
      },
      { q: 'What is 45% of 70?', a: '$\\frac{45}{100} \\times 70 = \\frac{3150}{100} = 31.5$.' },
      {
        q: '70 is 45% of what number?',
        a: '$\\frac{70}{45/100} = 70 \\times \\frac{100}{45} = \\frac{7000}{45} = 155\\frac{5}{9}$.'
      },
      {
        q: 'A stock goes up 12% then down 12%. Final price as percent of original?',
        a: '0.9856D. Lost 1.44%. The decrease applies to a higher base.'
      },
      {
        q: 'After a 12% increase, by what percent must the stock drop to return to original?',
        a: '$10\\frac{5}{7}\\%$. Solve: $(100 - x) \\times 1.12 = 100$. $x = \\frac{1200}{112}$.'
      },
      {
        q: 'What is the relative error if you approximate $67\\frac{1}{2}\\%$ by $\\frac{2}{3}$?',
        a: 'Less than 2%. Absolute error: $\\frac{5}{6}\\%$. Relative: $\\frac{5/6}{67.5} \\times 100 = 1\\frac{19}{81}\\%$.'
      },
      {
        q: 'What is the FASM and why does it matter?',
        a: 'FASM says all fraction rules extend to all real numbers. It matters because students use fraction rules on irrational numbers. FASM says this is valid.'
      },
      {
        q: 'In a class of 45, girls to boys is 5:4. How many girls?',
        a: '$5u + 4u = 9u = 45$. $u = 5$. Girls = 25, boys = 20.'
      },
      {
        q: 'Benoit, Carl, Davida split 440 dollars in ratio 2:5:4.',
        a: '$11k = 440$, $k = 40$. B = 80, C = 200, D = 160.'
      },
      {
        q: 'Convert 5 gal/min to qt/sec.',
        a: '$\\frac{5 \\times 4 \\text{ qt}}{60 \\text{ sec}} = \\frac{20}{60} = \\frac{1}{3}$ qt/sec.'
      },
      {
        q: 'A faucet fills $3\\frac{1}{2}$ cu ft in 25 sec. How long for $11\\frac{1}{2}$ cu ft?',
        a: 'Rate $= \\frac{7}{50}$. Time $= \\frac{23/2}{7/50} = \\frac{23}{2} \\times \\frac{50}{7} = \\frac{575}{7} = 82\\frac{1}{7}$ sec.'
      },
      {
        q: 'If a faucet fills a tub in 20 min and flow drops 25%, new time?',
        a: '$20 \\times \\frac{100}{75} = \\frac{2000}{75} = \\frac{80}{3} = 26\\frac{2}{3}$ min.'
      },
      {
        q: 'Regina mows in 10 hrs, Eric in 12. How long together?',
        a: 'Combined: $\\frac{11A}{60}$. Time: $\\frac{60}{11} = 5\\frac{5}{11}$ hours. $A$ cancels.'
      },
      {
        q: 'Three painters: 18, 15, 16 hours alone. Together?',
        a: '$\\frac{720}{133}$ hours (about 5 hr 25 min). Rates add: $\\frac{133H}{720}$.'
      },
      {
        q: 'What percent of 70 is 45?',
        a: '$64\\frac{2}{7}\\%$. $N = \\frac{45}{70} \\times 100 = \\frac{450}{7}$.'
      },
      {
        q: 'Express $\\frac{5}{16}$ as a percent.',
        a: '$31\\frac{1}{4}\\%$. $C = 100 \\times \\frac{5}{16} = \\frac{500}{16} = 31\\frac{1}{4}$.'
      },
      {
        q: 'Express $\\frac{1}{85}$ as a percent.',
        a: '$1\\frac{3}{17}\\%$. $C = \\frac{100}{85} = \\frac{20}{17} = 1\\frac{3}{17}$.'
      },
      {
        q: '7 is 26% of what number? Estimate first, then compute.',
        a: 'Estimate: $26\\% \\approx 25\\% = \\frac{1}{4}$, so $L \\approx 28$. Exact: $7 \\times \\frac{100}{26} = \\frac{350}{13} = 26\\frac{12}{13}$.'
      },
      {
        q: 'A store discounts 20%, then adds 20%. Same price?',
        a: 'No. $0.80P \\times 1.20 = 0.96P$. Lost 4%.'
      },
      {
        q: 'A bike costs 469.80 dollars with 8% tax. Price before tax?',
        a: '$\\frac{469.80}{1.08} = 435$ dollars.'
      },
      {
        q: 'Why do complex fraction rules (a)-(f) match ordinary fraction rules?',
        a: 'A complex fraction $\\frac{A}{C} = \\frac{ad}{bc}$ by invert-and-multiply. Every complex fraction IS an ordinary fraction. Same proofs apply.'
      },
      {
        q: 'Teacher-student ratio is 1:24. Want 1:20. With 480 students, how many new teachers?',
        a: '4 teachers. Current: 20 teachers. Need: $\\frac{480}{20} = 24$. Hire 4.'
      },
      {
        q: 'What does "constant speed v" mean precisely?',
        a: 'For ANY time interval of length $t$, $\\frac{d}{t} = v$. The word "any" is critical.'
      },
      {
        q: 'Predict: Two pipes fill a tank in 6 and 8 hours. Together under 3 hours?',
        a: 'No. Combined rate: $\\frac{7}{24}$. Time: $\\frac{24}{7} = 3\\frac{3}{7}$ hours.'
      },
      {
        q: "If you triple a car's speed, what fraction of travel time remains?",
        a: '$\\frac{1}{3}$. New speed $= 3s$. New time $= \\frac{D}{3s} = \\frac{1}{3}$ of original.'
      },
      {
        q: 'A stock drops 55%. A broker says going up 55% returns it. Right?',
        a: 'No. $0.45N \\times 1.55 = 0.6975N$. Must rise about 122% to recover.'
      },
      {
        q: 'Convert the ratio 3.5 : 2.8 to whole numbers.',
        a: '$5 : 4$. Divide: $\\frac{3.5}{2.8} = \\frac{35}{28} = \\frac{5}{4}$.'
      },
      {
        q: 'A fruit punch uses grape, lemon, orange in 3:1:2. You want 25 cups.',
        a: '$6k = 25$, $k = \\frac{25}{6}$. Grape: $12\\frac{1}{2}$, Lemon: $4\\frac{1}{6}$, Orange: $8\\frac{1}{3}$.'
      },
      {
        q: 'A law firm is 5:1 men-to-women. They want 4:1. What percent increase in women?',
        a: '25%. Current $W = u$. Need $\\frac{5u}{W_{new}} = 4$. $W_{new} = \\frac{5u}{4}$. Increase $= \\frac{u}{4}$. That is 25%.'
      },
      {
        q: 'Explain why the cooperative work formula $T = \\frac{1}{\\frac{1}{t_1} + \\frac{1}{t_2}}$ works.',
        a: 'Each worker rate is $\\frac{1}{t_i}$. Rates add. Combined $= \\frac{1}{t_1} + \\frac{1}{t_2}$. Time $= \\frac{1}{\\text{combined rate}}$. The job size cancels.'
      },
      {
        q: 'Sunil mows in 15 minutes, reduces rate to 85%. New time?',
        a: '$15 \\times \\frac{100}{85} = \\frac{300}{17} = 17\\frac{11}{17}$ min.'
      },
      {
        q: 'Predict: Approximate $\\frac{3}{8}$ by 37%. What is the relative error?',
        a: 'About $1\\frac{1}{3}\\%$. $\\frac{3}{8} = 37.5\\%$. Error $= 0.5\\%$. Relative $= \\frac{0.5}{37.5} \\times 100 = \\frac{4}{3}\\%$.'
      },
      {
        q: 'What is the historical origin of "percent"?',
        a: 'Latin "per centum" meaning "by the hundred." People agreed to use 100 as a common denominator.'
      },
      {
        q: 'Explain why percent increase then same decrease never returns to original.',
        a: 'The decrease applies to a larger base. Final $= (1 - (P/100)^2)$ times original, always less than 1.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Fraction Applications',
      sections: [
        <>
          <h2>Complex Fraction Rules</h2>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">(a)</span>
              <p className="lrn-step-content">{`$A \\times \\frac{B}{C} = \\frac{AB}{C}$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(b)</span>
              <p className="lrn-step-content">{`$\\frac{AC}{BC} = \\frac{A}{B}$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(c)</span>
              <p className="lrn-step-content">{`$\\frac{A}{B} = \\frac{C}{D}$ iff $AD = BC$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(d)</span>
              <p className="lrn-step-content">{`$\\frac{A}{B} \\pm \\frac{C}{D} = \\frac{AD \\pm BC}{BD}$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(e)</span>
              <p className="lrn-step-content">{`$\\frac{A}{B} \\times \\frac{C}{D} = \\frac{AC}{BD}$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">(f)</span>
              <p className="lrn-step-content">{`$\\frac{A}{B}(\\frac{C}{D} \\pm \\frac{E}{F}) = \\frac{A}{B} \\cdot \\frac{C}{D} \\pm \\frac{A}{B} \\cdot \\frac{E}{F}$`}</p>
            </div>
          </div>
        </>,
        <>
          <h2>Percent</h2>
          <div className="lrn-eq">{`$$N\\% \\text{ of } X = \\frac{N}{100} \\times X$$`}</div>
          <div className="lrn-eq">{`$$X \\text{ is } N\\% \\text{ of ? } \\Rightarrow ? = X \\times \\frac{100}{N}$$`}</div>
          <div className="lrn-eq">{`$$\\text{What \\% of } X \\text{ is } Y? \\Rightarrow N = \\frac{Y}{X} \\times 100$$`}</div>
          <div className="lrn-eq">{`$$\\text{Increase: new} = P(1 + N/100)$$`}</div>
          <div className="lrn-eq">{`$$\\text{Decrease: new} = P(1 - N/100)$$`}</div>
          <div className="lrn-eq">{`$$\\text{Relative error} = \\frac{|\\text{true} - \\text{approx}|}{\\text{true}} \\times 100\\%$$`}</div>
        </>,
        <>
          <h2>Ratio, Rate, Cooperative Work</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Ratio Theorem</span>
            <div className="lrn-definition-desc">{`$M : N = a : b$ implies $M = au$, $N = bu$.`}</div>
          </div>
          <div className="lrn-eq">{`$$\\text{Constant speed: } D = Tv, \\quad t = D/v$$`}</div>
          <div className="lrn-eq">{`$$\\text{Reduced rate time: } t_{new} = \\frac{k \\times 100}{100 - N}$$`}</div>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Cooperative work: } T = \\frac{1}{\\frac{1}{t_1} + \\frac{1}{t_2}}$$`}</div>
          <p>
            <strong>FASM:</strong>
            {` All fraction rules extend to all real numbers.`}
          </p>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function FractionApplications() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
