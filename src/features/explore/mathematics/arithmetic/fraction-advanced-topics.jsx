import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import { useMathJax } from '../../../../hooks/use-mathjax'

import {
  HarmonicMeanVis,
  CucumberVis,
  WineTeaVis
} from '../../../../components/viz/math-viz/modules'

function useConfig() {
  useMathJax([])
  const C = useVizColors()
  const config = {
    cssPrefix: 'frc',
    source: 'Understanding Numbers in Elementary School Mathematics: Hung-Hsi Wu',
    documentTitle: 'Fraction Advanced Topics - AETHER',
    learning: {
      category: 'Part 2',
      title: 'Fraction Advanced Topics',
      subtitle: 'Harmonic mean, paradoxes, and the big picture of fraction teaching.',
      sections: [
        /* ═══ HARMONIC MEAN ═══ */
        <>
          <h2>Harmonic Mean and Average Speed</h2>
          <p>
            You drive to a town and back at two different speeds. Your average speed is total
            distance divided by total time. You spend more time at the slower speed, so the true
            average falls below the simple midpoint. This quantity has a name: the{' '}
            <strong>harmonic mean</strong>.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Paul rides to a town at 15 mph and back at 18 mph. Is his average speed 16.5 mph?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. Average speed = $\\frac{180}{11} = 16\\frac{4}{11}$ mph. The harmonic mean is always less than the arithmetic mean.`}</p>
            </details>
          </div>

          <h3>Round Trip Problem</h3>
          <p>{`Paul rides 15 mph out and 18 mph back. Distance each way: $D$.`}</p>
          <p>{`Total distance: $2D$. Total time: $\\frac{D}{15} + \\frac{D}{18}$.`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Average speed} = \\frac{2D}{\\frac{D}{15} + \\frac{D}{18}} = \\frac{2}{\\frac{1}{15} + \\frac{1}{18}}$$`}</div>
          <p>
            This is the <strong>harmonic mean</strong> of 15 and 18.
          </p>
          <p>{`Computing: $\\frac{1}{15} + \\frac{1}{18} = \\frac{11}{90}$.`}</p>
          <p>{`Average speed = $\\frac{2}{11/90} = \\frac{180}{11} = 16\\frac{4}{11}$ mph.`}</p>
          <p>{`This is less than the arithmetic mean $\\frac{15 + 18}{2} = 16.5$.`}</p>
          <p>{`The distance $D$ cancels. The harmonic mean depends only on the two speeds.`}</p>

          <div className="lrn-graph">
            <HarmonicMeanVis C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $D$ cancel, making the harmonic mean independent of distance?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Total distance ($2D$) and total time ($D/v_1 + D/v_2$) are both proportional to $D$. Their ratio eliminates $D$.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              You spend more time at the slower speed. That pulls the average below the arithmetic
              mean. The harmonic mean accounts for this by weighting speeds inversely.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Average Speed (Correct)</span>
              <p>Total distance / total time. Harmonic mean for equal distances.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Arithmetic Mean (Wrong)</span>
              <p>{`$(v_1 + v_2)/2$. Only correct for equal TIME at each speed.`}</p>
            </div>
          </div>

          <h3>Speed and Time</h3>
          <p>{`A train travels at speed $s$ and takes time $I$. Increase speed by $\\frac{1}{3}$: new speed is $\\frac{4}{3}s$. Distance is fixed, so new time is $\\frac{3}{4}I$. You save exactly 25% of the trip.`}</p>
          <p>{`General rule: speed up by $\\frac{1}{n}$ and time drops by $\\frac{1}{n+1}$. Speed up by 50% ($n = 2$): time drops by $\\frac{1}{3}$, or 33%.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why can you factor out $I$ even when you do not know its value?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$I - \\frac{3}{4}I = (1 - \\frac{3}{4})I = \\frac{1}{4}I$. The distributive law works for any $I$.`}</p>
            </details>
          </div>
        </>,

        /* ═══ CUCUMBER PARADOX ═══ */
        <>
          <h2>The Cucumber Paradox</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              300 lbs of cucumbers are 99% water. After drying to 98% water, how much do they weigh?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>150 lbs. A 1% change in water content caused a 50% weight drop.</p>
            </details>
          </div>

          <p>Solids: 1% of 300 = 3 lbs. After drying, solids are 2% of new weight.</p>
          <div className="lrn-eq">{`$$3 = \\frac{2}{100} \\times w, \\quad w = 150 \\text{ lbs}$$`}</div>

          <div className="lrn-graph">
            <CucumberVis C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does a tiny 1% change in water percentage cause such a massive weight change?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The solids are a tiny fraction. At 99% water, solids = 1%. At 98% water, solids =
                2%. The solid percentage doubled. For the same 3 lbs of solids, the total must
                halve.
              </p>
            </details>
          </div>
        </>,

        /* ═══ WINE AND TEA ═══ */
        <>
          <h2>The Wine and Tea Exchange</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A spoon of tea goes into wine, the mix is stirred, a spoon goes back. More tea in wine
              or wine in tea?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Exactly equal, whether stirred or not.</p>
            </details>
          </div>

          <p>
            A bottle of wine and a kettle of tea. A spoon of tea goes into the wine. The mix is
            stirred. A spoon returns to the kettle.
          </p>
          <p>
            <strong>Answer:</strong> Tea in wine = wine in tea. Always.
          </p>

          <p>{`Let $b$ = bottle volume and $s$ = spoon volume.`}</p>
          <p>
            <strong>Stirred case:</strong>
            {` Wine in kettle = $\\frac{bs}{b+s}$. Tea in bottle = $\\frac{sb}{b+s}$. Equal.`}
          </p>
          <p>
            <strong>Unstirred case:</strong>
            {` Return spoon has $T$ cc tea and $W$ cc wine ($T + W = s$). Wine in kettle = $W$. Tea in bottle = $s - T = W$. Still equal.`}
          </p>

          <div className="lrn-graph">
            <WineTeaVis C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the unstirred case give the same answer?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Return spoon: $T$ cc tea + $W$ cc wine ($T + W = s$). Wine leaving = $W$. Tea staying in bottle = $s - T = W$. Whatever wine goes to the kettle is replaced by an equal volume of tea.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Conservation: the total liquid volume in each container stays constant after the
              exchange. Whatever foreign liquid enters must displace an equal volume of the
              original. So the amounts exchanged are always equal.
            </p>
          </div>
        </>,

        /* ═══ ON TEACHING FRACTIONS ═══ */
        <>
          <h2>The Big Picture</h2>
          <p>Four major problems in traditional fraction instruction:</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>What goes wrong when fractions are introduced as &ldquo;parts of a pizza&rdquo;?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No clear definition. Cannot handle fractions greater than 1. Cannot define
                multiplication. Creates confusion.
              </p>
            </details>
          </div>

          <ol className="lrn-list">
            <li>
              <strong>Unclear definitions.</strong> Fraction, decimal, percent, ratio are never
              clearly defined. Without clear definitions, you cannot reason precisely.
            </li>
            <li>
              <strong>Too many "meanings."</strong>
              {` Textbooks give $\\frac{c}{d}$ five different meanings (parts of a whole, portion, quotient, ratio, and scaling tool). No single meaning covers everything, so students juggle five. This creates confusion.`}
            </li>
            <li>
              <strong>Rules without reasons.</strong> The rules of fraction arithmetic are stated
              without showing where they come from.
            </li>
            <li>
              <strong>No proofs.</strong> &ldquo;Invert and multiply&rdquo; is handed down as a rule
              with no justification.
            </li>
          </ol>
          <p>
            The number line approach fixes all four. One clear definition. Fractions connect to
            whole numbers. Every rule has a proof.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does one definition fix all four problems?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The number line uses the same structure for fractions as for whole numbers.
                Addition, subtraction, multiplication, and division extend naturally. No new rules.
                Every formula is proved from the definition.
              </p>
            </details>
          </div>

          <h3>On Division</h3>
          <p>{`Take "invert and multiply." It is handed to students as a rule. But it is also a theorem: one that follows from a precise definition. $\\frac{A}{B}$ is the unique number $C$ such that $A = CB$. From there, the invert-and-multiply rule follows directly. That is the difference between a rule and a proof.`}</p>
        </>
      ]
    },

    practice: [
      {
        q: 'Paul rides at 15 mph out, 18 mph back. Average speed?',
        a: '$\\frac{180}{11} = 16\\frac{4}{11}$ mph. Harmonic mean: $\\frac{2}{\\frac{1}{15} + \\frac{1}{18}} = \\frac{2}{\\frac{11}{90}} = \\frac{180}{11}$.'
      },
      {
        q: 'Why is average speed NOT $\\frac{v_1 + v_2}{2}$?',
        a: 'Average speed = total distance ÷ total time, not arithmetic mean. You spend more time at the slower speed. The arithmetic mean is only correct for equal time at each speed.'
      },
      {
        q: 'A train increases speed by $\\frac{1}{3}$. By what percent is time shortened?',
        a: '25%. New speed $= \\frac{4s}{3}$. New time $= \\frac{3}{4}I$. Saved $= \\frac{1}{4}I = 25\\%$. Works for any distance.'
      },
      {
        q: 'Cucumbers weigh 300 lbs at 99% water. After drying to 98%, weight?',
        a: '150 lbs. Solids = 3 lbs. At 98% water, solids = 2%. So $3 = \\frac{2}{100} \\times w$. $w = 150$.'
      },
      {
        q: 'Wine-tea exchange: more tea in wine or wine in tea?',
        a: 'Exactly equal. Even unstirred. Return spoon has $T$ tea $+ W$ wine $(T+W=s)$. Wine in kettle $= W$. Tea in bottle $= s - T = W$.'
      },
      {
        q: "If you increase a car's speed by 50%, by what percent does time decrease?",
        a: '$33\\frac{1}{3}\\%$. New speed $= 1.5s$. New time $= \\frac{2}{3}$ of original. Saved: $\\frac{1}{3}$.'
      },
      {
        q: 'You drive 90 miles at 60 mph, then 90 at 45 mph. Average speed?',
        a: '$51\\frac{3}{7}$ mph. Total = 180 mi. Time $= \\frac{3}{2} + 2 = \\frac{7}{2}$ hr. Avg $= \\frac{180}{7/2} = \\frac{360}{7}$.'
      },
      {
        q: 'Sam drives 73 miles A to B at 60 mph, back at 70. Average speed?',
        a: '$64\\frac{8}{13}$ mph. $\\frac{2}{\\frac{1}{60} + \\frac{1}{70}} = \\frac{2}{\\frac{13}{420}} = \\frac{840}{13}$.'
      },
      {
        q: 'Why does a 1% change in water (99% to 98%) cause 50% weight loss?',
        a: 'Solids go from 1% to 2% of total. That doubles the solid percentage. For 3 lbs of solids, total must halve from 300 to 150.'
      },
      {
        q: 'Why does the unstirred wine-tea case give the same answer?',
        a: 'Return spoon: $T$ cc tea $+ W$ cc wine $(T+W=s)$. Wine in kettle $= W$. Tea in bottle $= s - T = W$. Equal regardless.'
      },
      {
        q: 'What are the four problems with traditional fraction teaching?',
        a: 'Unclear definitions, too many "meanings," rules without reasons, no proofs. The number line fixes all four.'
      },
      {
        q: 'Predict: What happens to harmonic mean if one speed is much larger than the other?',
        a: 'It approaches twice the slower speed. Most time is spent going slow.'
      },
      {
        q: 'Why does distance $D$ cancel in the harmonic mean formula?',
        a: 'Total distance $(2D)$ and total time $\\left(\\frac{D}{v_1} + \\frac{D}{v_2}\\right)$ are both proportional to $D$. The ratio eliminates $D$.'
      },
      {
        q: 'A painter finishes in 8 hrs, another in 6. They start together but after 2 hrs the first leaves. How much longer for the second?',
        a: '$2\\frac{1}{2}$ more hours. In 2 hrs together: $2\\left(\\frac{1}{8} + \\frac{1}{6}\\right) = \\frac{7}{12}$ done. Remaining: $\\frac{5}{12}$. At $\\frac{1}{6}$ per hr: $\\frac{5/12}{1/6} = \\frac{5}{2}$ hrs.'
      },
      {
        q: 'Two shuttles: A takes 3 hrs, B takes 5 hrs same route. Start from opposite ends. When meet?',
        a: '$1\\frac{7}{8}$ hours. Combined closing rate: $\\frac{1}{3} + \\frac{1}{5} = \\frac{8}{15}$. Time: $\\frac{15}{8}$.'
      },
      {
        q: 'A car travels at constant speed. In $2\\frac{1}{3}$ hours it covers 125 miles. How far in 4 hours?',
        a: '$214\\frac{2}{7}$ miles. Speed $= \\frac{125}{7/3} = \\frac{375}{7}$. In 4 hrs: $\\frac{1500}{7}$.'
      },
      {
        q: 'Shawna drives $\\frac{2}{3}$ hr to work. Firm moved: now $\\frac{5}{6}$ hr at same speed. She drives 12 more miles. How far is firm?',
        a: '60 miles. Extra time: $\\frac{5}{6} - \\frac{2}{3} = \\frac{1}{6}$ hr = 12 mi. Speed = 72 mph. Distance $= \\frac{5}{6} \\times 72 = 60$.'
      },
      {
        q: 'A sack of rice weighs $4\\frac{2}{3}$ times 5 books. Each book is $1\\frac{1}{2}$ lbs. Sack weight?',
        a: '35 lbs. 5 books $= \\frac{15}{2}$ lbs. Sack $= \\frac{14}{3} \\times \\frac{15}{2} = \\frac{210}{6} = 35$.'
      },
      {
        q: 'Simplify $\\left(2\\frac{2}{3}\\right)^2 \\times \\left(4\\frac{1}{8}\\right)^2$ without a calculator.',
        a: '$\\left(\\frac{8}{3}\\right)^2 \\times \\left(\\frac{33}{8}\\right)^2 = \\frac{64}{9} \\times \\frac{1089}{64} = \\frac{1089}{9} = 121$. The 64s cancel.'
      },
      {
        q: 'Find $q$ so that $28\\frac{1}{2} = q \\times 5\\frac{3}{4}$.',
        a: '$q = \\frac{57/2}{23/4} = \\frac{57}{2} \\times \\frac{4}{23} = \\frac{228}{46} = \\frac{114}{23} = 4\\frac{22}{23}$.'
      },
      {
        q: 'Mr. Dennis took students to a play. Only $\\frac{2}{5}$ showed up: 52 students. Total?',
        a: '130. $\\frac{2}{5} \\times \\text{total} = 52$. Total $= 52 \\times \\frac{5}{2} = 130$.'
      },
      {
        q: 'What is $\\frac{2}{3}$ of 15 people?',
        a: '10. $\\frac{2}{3} \\times 15 = \\frac{30}{3} = 10$. Divide 15 into 3 groups (5 each), take 2 = 10.'
      },
      {
        q: 'A rectangle has area $\\frac{7}{8}$ and one side $\\frac{1}{3}$. Other side?',
        a: '$\\frac{21}{8} = 2\\frac{5}{8}$. Side $= \\frac{7/8}{1/3} = \\frac{7}{8} \\times 3 = \\frac{21}{8}$.'
      },
      {
        q: 'A water tank is $\\frac{19}{23}$ full with 271 gallons. Full capacity?',
        a: '$\\frac{271}{19/23} = 271 \\times \\frac{23}{19} = \\frac{6233}{19} = 328\\frac{1}{19}$ gallons.'
      },
      {
        q: 'Explain why dividing by $\\frac{1}{2}$ doubles but dividing by 2 halves.',
        a: 'Dividing by $\\frac{1}{2}$: how many $\\frac{1}{2}$s fit? In 5, there are 10. Invert-and-multiply: dividing by $\\frac{k}{l}$ = multiplying by $\\frac{l}{k}$. For $\\frac{1}{2}$: multiply by 2.'
      },
      {
        q: 'Two fractions differ by $\\frac{4}{5}$ of the smaller. Sum is $\\frac{28}{15}$. Find them.',
        a: 'Let $x$ = smaller. Larger $= \\frac{9x}{5}$. Sum: $\\frac{14x}{5} = \\frac{28}{15}$. $x = \\frac{2}{3}$. Larger $= \\frac{6}{5}$.'
      },
      {
        q: '$\\frac{7}{18} \\times 3\\frac{1}{6} = ?$',
        a: '$\\frac{7}{18} \\times \\frac{19}{6} = \\frac{133}{108} = 1\\frac{25}{108}$.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Fraction Advanced Topics',
      sections: [
        <>
          <h2>Speed and Harmonic Mean</h2>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Harmonic mean: } \\bar{v} = \\frac{2}{\\frac{1}{v_1} + \\frac{1}{v_2}}$$`}</div>
          <p>Use for average speed over equal distances at different speeds.</p>
          <p>
            <strong>Speed increase rule:</strong>
            {` Speed up by $\\frac{1}{n}$ means time down by $\\frac{1}{n+1}$.`}
          </p>
          <div className="lrn-eq">{`$$\\text{Constant speed: } D = Tv, \\quad T = D/v$$`}</div>
        </>,
        <>
          <h2>Key Theorems</h2>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Equivalent Fractions</span>
              <p className="lrn-step-content">{`$k/\\ell = nk/n\\ell$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Cross-Multiplication</span>
              <p className="lrn-step-content">{`$k/\\ell < m/n$ iff $kn < \\ell m$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Addition</span>
              <p className="lrn-step-content">{`$k/\\ell + m/n = (kn + \\ell m)/\\ell n$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Product</span>
              <p className="lrn-step-content">{`$(m/n)(k/\\ell) = mk/n\\ell$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Uniqueness Lemma</span>
              <p className="lrn-step-content">{`Unique $C$ with $A = CB$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Multiplication = "Of"</span>
              <p className="lrn-step-content">{`$(m/n)(k/\\ell) = m/n$ of $k/\\ell$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Invert-and-Multiply</span>
              <p className="lrn-step-content">{`$(m/n)/(k/\\ell) = (m/n)(\\ell/k)$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Finite Decimal Test</span>
              <p className="lrn-step-content">{`Finite iff $n = 2^a 5^b$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Ratio Theorem</span>
              <p className="lrn-step-content">{`$a:b$ implies $M = au$, $N = bu$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Harmonic Mean</span>
              <p className="lrn-step-content">{`$2/(1/v_1 + 1/v_2)$`}</p>
            </div>
          </div>
        </>,
        <>
          <h2>Common Errors</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Error</span>
              <ul className="lrn-list">
                <li>Average speed = (v1 + v2)/2</li>
                <li>Percent is an &ldquo;operator&rdquo;</li>
                <li>Adding tops and bottoms</li>
                <li>Division = repeated subtraction</li>
              </ul>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Why It Fails</span>
              <ul className="lrn-list">
                <li>Must use total distance / total time</li>
                <li>Percent is a number (N/100)</li>
                <li>Gives the mediant, not the sum</li>
                <li>Gives a pair, not one number</li>
              </ul>
            </div>
          </div>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function FractionAdvancedTopics() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
