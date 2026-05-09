import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'

import {
  NumberLineBasic,
  NumberLineFraction34,
  NumberLine17over4,
  AreaModelFraction,
  EquivalentFractionVis,
  DecimalNumberLine,
  DecimalFractionCompare,
  CompareFractionsVis,
  FFPVis
} from '../../../../components/viz/math-viz/modules'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'frc',
    source: 'Understanding Numbers in Elementary School Mathematics: Hung-Hsi Wu',
    documentTitle: 'Fraction Foundations - AETHER',
    learning: {
      category: 'Part 2',
      title: 'Fraction Foundations',
      subtitle: 'One definition. Every fraction on the number line. Complete precision.',
      sections: [
        /* ════════════════════════════════════════════════════════════════════════
         SECTION 1: WHAT IS A FRACTION?
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>What Is a Fraction?</h2>

          <p>
            A <strong>fraction</strong> is a point on the number line. That is the complete
            definition. Not a pizza slice. Not a piece of pie. A precise location on a line.
          </p>

          <h3>The Number Line Foundation</h3>
          <p>
            A <strong>number line</strong> is a straight line with evenly spaced marks. You pick a
            starting point and call it 0. You pick the next mark and call it 1.
          </p>
          <p>
            The distance from 0 to 1 is the <strong>unit</strong>. Every whole number sits on this
            line: 0, 1, 2, 3, and so on.
          </p>

          <div className="lrn-graph">
            <NumberLineBasic C={C} />
          </div>

          <p>{`A fraction $\\frac{m}{n}$ tells you two things:`}</p>
          <ul className="lrn-list">
            <li>
              {`$n$`} is the <strong>denominator</strong>. It says: divide each unit into {`$n$`}{' '}
              equal parts.
            </li>
            <li>
              {`$m$`} is the <strong>numerator</strong>. It says: start at 0 and count off {`$m$`}{' '}
              of those parts.
            </li>
          </ul>
          <p>{`The point you land on is the fraction $\\frac{m}{n}$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Every point on the number line has exactly one location. When you count $m$ copies of $\\frac{1}{n}$ from 0, you arrive at precisely one point — not approximately $\\frac{m}{n}$, but exactly $\\frac{m}{n}$. That precision is what makes this a definition you can build mathematics on.`}
            </p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>If you divide [0, 1] into 4 equal parts and count 3 of them, where do you land?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`You land on $\\frac{3}{4}$. Each part has length $\\frac{1}{4}$. Three parts from 0 puts you at $\\frac{3}{4}$.`}</p>
            </details>
          </div>

          <h3>Locating Fractions on the Number Line</h3>

          <p>
            <strong>{`Example: Locating $\\frac{3}{4}$`}</strong>
          </p>
          <ol className="lrn-list">
            <li>Draw the number line with 0 and 1 marked.</li>
            <li>Divide the segment [0, 1] into 4 equal parts.</li>
            <li>Starting from 0, count 3 parts to the right.</li>
            <li>{`You land on $\\frac{3}{4}$.`}</li>
          </ol>

          <div className="lrn-graph">
            <NumberLineFraction34 C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does counting 3 out of 4 equal parts give exactly $\\frac{3}{4}$ and not some other number?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Each part has length exactly $\\frac{1}{4}$ by construction. Three copies of $\\frac{1}{4}$ placed end to end cover a distance of $\\frac{3}{4}$. The number line assigns one and only one number to each point.`}
              </p>
            </details>
          </div>

          <p>
            <strong>{`Example: Locating $\\frac{17}{4}$`}</strong>
          </p>
          <p>The numerator 17 is bigger than the denominator 4. This means you go past 1.</p>
          <ol className="lrn-list">
            <li>Divide each unit segment into 4 equal parts.</li>
            <li>Starting from 0, count off 17 of these small parts.</li>
            <li>
              You pass through 1 (at the 4th part), 2 (at the 8th), 3 (at the 12th), 4 (at the
              16th).
            </li>
            <li>{`One more part puts you at $\\frac{17}{4}$, between 4 and 5.`}</li>
          </ol>
          <p>{`So $\\frac{17}{4} = 4\\frac{1}{4}$.`}</p>

          <div className="lrn-graph">
            <NumberLine17over4 C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why can the number line handle fractions bigger than 1, while the pizza model breaks
              down?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The number line extends forever in both directions. You can always count more parts.
                The pizza model limits you to one whole. Fractions greater than 1 need multiple
                pizzas, which makes &ldquo;parts of a whole&rdquo; confusing.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Number Line</span>
              <p>Precise. Extends to any fraction. Supports all operations and proofs.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Pizza / Pie Model</span>
              <p>
                Breaks for fractions greater than 1. No way to multiply. &ldquo;Equal parts&rdquo;
                is ambiguous.
              </p>
            </div>
          </div>

          <p>
            The number line fixes all of these. It gives one clear definition that works for every
            fraction, every operation, every proof.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The number line is the same tool used for whole numbers. Fractions are just more
              points on it. Every rule for whole numbers extends naturally to fractions on the
              number line.
            </p>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 2: DECIMALS AS FRACTIONS
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Decimals as Fractions</h2>

          <p>
            A <strong>decimal</strong> (also called a <strong>finite decimal</strong>) is a fraction
            whose denominator is a power of 10.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>What fraction does the decimal 0.375 represent?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$0.375 = \\frac{375}{1000} = \\frac{3}{8}$.`}</p>
            </details>
          </div>

          <h3>The Definition</h3>
          <p>{`The decimal 0.375 means $\\frac{375}{1000}$. The decimal 4.0451 means $\\frac{40451}{10000}$.`}</p>
          <p>{`A finite decimal with $k$ places after the dot equals a fraction with denominator $10^k$.`}</p>

          <div className="lrn-graph">
            <DecimalNumberLine C={C} />
          </div>

          <h3>Converting Fractions to Decimals</h3>
          <p>
            <strong>{`Example: $\\frac{1}{4} = 0.25$`}</strong>
          </p>
          <p>{`Since $10 = 2 \\times 5$, we have $2^2 \\times 5^2 = 10^2 = 100$. Multiply numerator and denominator by $5^2 = 25$:`}</p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\frac{1}{4} = \\frac{1 \\times 25}{4 \\times 25} = \\frac{25}{100} = 0.25$$`}
          </div>

          <p>
            <strong>{`Example: $\\frac{7}{8} = 0.875$`}</strong>
          </p>
          <p>{`Since $2^3 \\times 5^3 = 10^3 = 1000$, multiply by $5^3 = 125$:`}</p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\frac{7}{8} = \\frac{7 \\times 125}{8 \\times 125} = \\frac{875}{1000} = 0.875$$`}
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does multiplying by 125/125 work here? What property of fractions allows this?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The equivalent fractions theorem: $\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$ for any nonzero $n$. Multiplying numerator and denominator by the same number does not change the point on the number line.`}
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`You choose a multiplier that makes the denominator a power of 10. That is exactly the definition of a decimal. The multiplier does not change the fraction's value.`}
            </p>
          </div>

          <h3>Comparing Decimals</h3>
          <p>
            You can compare two decimals by giving them the same number of decimal places. This
            works because adding a trailing zero does not change a decimal's value.
          </p>
          <p>{`For example, compare 0.12 and 0.117:`}</p>
          <div className="lrn-eq">
            {`$$0.12 = 0.120 = \\frac{120}{1000}, \\quad 0.117 = \\frac{117}{1000}$$`}
          </div>
          <p>{`Since 120 > 117, we get $0.12 > 0.117$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does adding a trailing zero to 0.12 not change its value?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Because $0.12 = \\frac{12}{100}$ and $0.120 = \\frac{120}{1000}$. By equivalent fractions: $\\frac{12}{100} = \\frac{12 \\times 10}{100 \\times 10} = \\frac{120}{1000}$. Same point on the number line.`}
              </p>
            </details>
          </div>

          <h3>Converting Decimals to Fractions</h3>
          <p>{`Since $0.125 = \\frac{125}{1000}$, cancel by 125:`}</p>
          <div className="lrn-eq">{`$$\\frac{125}{1000} = \\frac{1}{8}$$`}</div>

          <div className="lrn-graph">
            <DecimalFractionCompare C={C} />
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Decimals and fractions are two ways to name the same points. Every decimal is a
              fraction with a power-of-10 denominator. Converting between them uses only equivalent
              fractions.
            </p>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 3: THE AREA MODEL
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Area Model</h2>
          <p>
            The <strong>area model</strong> represents a fraction as a shaded part of a rectangle.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you shade 3 out of 4 equal vertical strips in a unit square, what fraction of the
              area is shaded?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{3}{4}$. Each strip is $\\frac{1}{4}$ of the total area. Three strips = $\\frac{3}{4}$.`}</p>
            </details>
          </div>

          <h3>How It Works</h3>
          <p>Take a unit square (a square with side length 1, so area = 1).</p>
          <p>{`To show $\\frac{3}{4}$:`}</p>
          <ol className="lrn-list">
            <li>Divide the square into 4 equal vertical strips.</li>
            <li>Shade 3 of them.</li>
            <li>{`The shaded area is $\\frac{3}{4}$ of the total.`}</li>
          </ol>

          <div className="lrn-graph">
            <AreaModelFraction n={4} m={3} C={C} />
          </div>

          <p>
            This model agrees with the number line. Both give the same answer. The area model
            becomes essential later when we define multiplication.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why must the area model agree with the number line definition?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Both models divide a unit into $n$ equal parts and select $m$ of them. The number line measures length; the area model measures area. Since the strips have width $\\frac{1}{n}$ and height 1, each strip has area $\\frac{1}{n}$. Selecting $m$ strips gives area $\\frac{m}{n}$. Same number, different shape.`}
              </p>
            </details>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 4: EQUIVALENT FRACTIONS
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Equivalent Fractions</h2>
          <p>
            Two fractions are <strong>equivalent</strong>
            {` if they name the same point on the number line. A recipe calls for $\\frac{2}{3}$ cup. You only have a $\\frac{1}{6}$-cup scoop. You need 4 scoops, because $\\frac{2}{3} = \\frac{4}{6}$.`}
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Are $\\frac{2}{3}$ and $\\frac{6}{9}$ the same point on the number line?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. $\\frac{2}{3} = \\frac{2 \\times 3}{3 \\times 3} = \\frac{6}{9}$. Both name the same point.`}</p>
            </details>
          </div>

          <h3>The Equivalent Fractions Theorem</h3>
          <p>{`For any fraction $\\frac{k}{\\ell}$ and any nonzero whole number $n$:`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$$`}</div>
          <p>
            Multiplying the numerator and denominator by the same nonzero number gives an equivalent
            fraction.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`On the number line, dividing each unit into $\\ell$ equal parts gives parts of size $\\frac{1}{\\ell}$. If you further divide each part into $n$ equal pieces, each unit now has $n\\ell$ parts. The original $k$ parts equal $nk$ of the new smaller parts. The point does not move.`}
            </p>
          </div>

          <h3>Proof (from the Number Line)</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <ol className="lrn-list">
                <li>{`Start with $\\frac{k}{\\ell}$: divide [0, 1] into $\\ell$ parts, take $k$ of them.`}</li>
                <li>{`Now subdivide each of those $\\ell$ parts into $n$ equal sub-parts.`}</li>
                <li>{`The unit [0, 1] now has $n\\ell$ sub-parts total.`}</li>
                <li>{`The original $k$ parts contain $nk$ sub-parts.`}</li>
                <li>{`So $\\frac{k}{\\ell}$ and $\\frac{nk}{n\\ell}$ mark the same point.`}</li>
              </ol>
            </div>
          </div>

          <div className="lrn-graph">
            <EquivalentFractionVis C={C} />
          </div>

          <h3>Cancellation</h3>
          <p>
            The reverse direction is called <strong>cancellation</strong> (or simplifying):
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{km}{kn} = \\frac{m}{n}$$`}</div>
          <p>
            You divide both the numerator and denominator by the same factor. The{' '}
            <strong>GCF</strong> (greatest common factor) is the largest number that divides both
            evenly.
          </p>

          <p>
            <strong>{`Example: Reducing $\\frac{48}{54}$`}</strong>
          </p>
          <div className="lrn-eq">
            {`$$\\frac{48}{54} = \\frac{8 \\times 6}{9 \\times 6} = \\frac{8}{9}$$`}
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does dividing both numerator and denominator by 6 give the same point on the
              number line?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Cancellation is the reverse of the equivalent fractions theorem. If $\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$, then reading backwards gives $\\frac{nk}{n\\ell} = \\frac{k}{\\ell}$. Dividing by a common factor undoes the subdivision. The point does not move.`}
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Finding equivalent fractions is the foundation of all fraction work. You use it to add (common denominator), simplify (cancellation), and compare. Without it, fractions with different denominators could never interact.`}
            </p>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 5: COMPARING FRACTIONS AND FFFP
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Comparing Fractions</h2>
          <p>You can compare any two fractions without finding a common denominator.</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Which is bigger: $\\frac{4}{7}$ or $\\frac{3}{5}$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{3}{5}$ is bigger. Cross-multiply: $4 \\times 5 = 20$ and $7 \\times 3 = 21$. Since $20 < 21$, $\\frac{4}{7} < \\frac{3}{5}$.`}</p>
            </details>
          </div>

          <h3>The Cross-Multiplication Rule</h3>
          <p>
            {`For fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$ (with positive denominators):`}
          </p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\frac{k}{\\ell} < \\frac{m}{n} \\quad \\text{if and only if} \\quad kn < \\ell m$$`}
          </div>

          <div className="lrn-warning">
            <p>
              Cross-multiplication is for <strong>comparing</strong> fractions only. Do not use it
              when <strong>adding</strong>
              {` fractions. Adding tops and bottoms (like $\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$) gives the wrong answer.`}
            </p>
          </div>

          <p>
            <strong>{`Example: Compare $\\frac{4}{7}$ and $\\frac{3}{5}$`}</strong>
          </p>
          <p>{`Cross-multiply: $4 \\times 5 = 20$ and $7 \\times 3 = 21$.`}</p>
          <p>{`Since $20 < 21$, we get $\\frac{4}{7} < \\frac{3}{5}$.`}</p>

          <div className="lrn-graph">
            <CompareFractionsVis C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does comparing products $kn$ and $\\ell m$ tell you which fraction is larger?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Rewriting both fractions with common denominator $\\ell n$ gives $\\frac{kn}{\\ell n}$ and $\\frac{\\ell m}{\\ell n}$. With the same denominator, the larger numerator wins. So comparing $kn$ and $\\ell m$ is the same as comparing the fractions.`}
              </p>
            </details>
          </div>

          <h3>Proof of Cross-Multiplication</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <ol className="lrn-list">
                <li>{`Rewrite both with denominator $\\ell n$: $\\frac{k}{\\ell} = \\frac{kn}{\\ell n}$ and $\\frac{m}{n} = \\frac{m\\ell}{\\ell n}$.`}</li>
                <li>
                  Two fractions with the same denominator: the one with the bigger numerator is
                  bigger.
                </li>
                <li>{`So $\\frac{k}{\\ell} < \\frac{m}{n}$ exactly when $kn < \\ell m$.`}</li>
              </ol>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Equivalent fractions name the same point. With the same denominator, comparing
              numerators directly tells you the order on the number line.
            </p>
          </div>

          <h3>FFFP: The Fundamental Fact of Fraction Pairs</h3>
          <p>
            The <strong>FFFP</strong> is just a name for cross-multiplication applied to all three
            cases: equal, less than, and greater than.
          </p>
          <p>{`For fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$, compare $kn$ and $\\ell m$:`}</p>
          <ul className="lrn-list">
            <li>{`$kn = \\ell m$ means $\\frac{k}{\\ell} = \\frac{m}{n}$`}</li>
            <li>{`$kn < \\ell m$ means $\\frac{k}{\\ell} < \\frac{m}{n}$`}</li>
            <li>{`$kn > \\ell m$ means $\\frac{k}{\\ell} > \\frac{m}{n}$`}</li>
          </ul>
          <p>No common denominator needed. No decimal conversion needed.</p>

          <div className="lrn-graph">
            <FFPVis C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`In the example $\\frac{5}{8}$ vs $\\frac{7}{11}$, we get products 55 and 56. Why does just one unit of difference settle the comparison?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Cross-multiplication is exact, not approximate. If $kn < \\ell m$ by even 1, the fractions are different and the first is smaller. There is no "margin of error." The products encode the exact positions on the number line.`}
              </p>
            </details>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'What is the definition of a fraction $\\frac{m}{n}$?',
        a: 'A fraction $\\frac{m}{n}$ is a point on the number line. You divide each unit segment into $n$ equal parts. Starting from 0, you count $m$ of those parts. The point you land on is $\\frac{m}{n}$.'
      },
      {
        q: 'Which is larger: $\\frac{5}{13}$ or $\\frac{7}{18}$? Use cross-multiplication.',
        a: '$\\frac{7}{18}$ is larger. Cross-multiply: $5 \\times 18 = 90$ and $13 \\times 7 = 91$. Since $90 < 91$, $\\frac{5}{13} < \\frac{7}{18}$.'
      },
      {
        q: 'Locate $\\frac{23}{5}$ on the number line. Between which two whole numbers does it fall?',
        a: '$\\frac{23}{5}$ falls between 4 and 5. Each unit is split into 5 parts. Count 23 parts from 0. After 20 parts you reach 4. Three more parts puts you at $\\frac{23}{5} = 4\\frac{3}{5}$.'
      },
      {
        q: 'A tank holds $\\frac{3}{8}$ of a full load. Express this as a decimal. Show your work.',
        a: '$\\frac{3}{8} = 0.375$. Since $8 = 2^3$, multiply top and bottom by $5^3 = 125$: $\\frac{3 \\times 125}{8 \\times 125} = \\frac{375}{1000} = 0.375$.'
      },
      {
        q: 'Explain why the pizza model fails for the fraction $\\frac{7}{3}$, but the number line does not.',
        a: 'The pizza model defines fractions as "parts of a whole." For $\\frac{7}{3}$, you need 7 parts when the whole has 3. This requires more than one pizza, making "parts of a whole" confusing. The number line handles it naturally: divide each unit into 3 parts, count 7 from 0. You land at $2\\frac{1}{3}$.'
      },
      {
        q: 'Prove that $\\frac{2}{3} = \\frac{8}{12}$ using the number line.',
        a: 'Start with [0,1] divided into 3 equal parts. The point $\\frac{2}{3}$ is at the second mark. Subdivide each of those 3 parts into 4 sub-parts. Now [0,1] has 12 sub-parts. The original 2 parts contain $2 \\times 4 = 8$ sub-parts. So $\\frac{2}{3}$ and $\\frac{8}{12}$ mark the same point.'
      },
      {
        q: 'Reduce $\\frac{72}{108}$ to lowest terms.',
        a: '$\\frac{72}{108} = \\frac{2}{3}$. Factor: $72 = 36 \\times 2$, $108 = 36 \\times 3$. Cancel the common factor 36: $\\frac{36 \\times 2}{36 \\times 3} = \\frac{2}{3}$.'
      },
      {
        q: 'Which is larger: 0.12 or 0.117?',
        a: '0.12 is larger. Align decimal places: 0.120 vs 0.117. Since $\\frac{120}{1000} > \\frac{117}{1000}$, 0.12 wins.'
      },
      {
        q: 'What fraction does 0.375 represent? Simplify it.',
        a: '$0.375 = \\frac{375}{1000} = \\frac{3}{8}$. Cancel by 125: $375 \\div 125 = 3$, $1000 \\div 125 = 8$.'
      },
      {
        q: 'Shade 3 out of 5 equal vertical strips in a unit square. What fraction of the area is shaded? Why does this match the number line answer?',
        a: '$\\frac{3}{5}$ of the area is shaded. Each strip has width $\\frac{1}{5}$ and height 1, so area $\\frac{1}{5}$. Three strips have total area $\\frac{3}{5}$. This matches the number line because both models divide a unit into 5 parts and count 3.'
      },
      {
        q: 'Predict: What happens to a fraction when you make the denominator larger but keep the numerator the same?',
        a: 'The fraction gets smaller. A larger denominator means each piece ($\\frac{1}{n}$) is smaller. The same count of pieces covers less distance. $\\frac{3}{5} > \\frac{3}{7} > \\frac{3}{100}$.'
      },
      {
        q: 'Predict: You have a fraction close to $\\frac{1}{2}$. If you add 1 to both numerator and denominator, does it get closer to or farther from $\\frac{1}{2}$?',
        a: 'It moves toward $\\frac{1}{2}$ in both cases. If $\\frac{k}{l} < \\frac{1}{2}$, then $\\frac{k+1}{l+1}$ is closer to $\\frac{1}{2}$ (it increases). If $\\frac{k}{l} > \\frac{1}{2}$, then $\\frac{k+1}{l+1}$ is also closer (it decreases).'
      },
      {
        q: 'The number line shows 0 and 1. How do you locate $\\frac{5}{3}$?',
        a: 'Divide each unit into 3 equal parts. Count 5 parts from 0. After 3 parts you reach 1. Two more puts you at $\\frac{5}{3} = 1\\frac{2}{3}$, between 1 and 2.'
      },
      {
        q: 'Simplify $\\frac{150}{225}$ to lowest terms.',
        a: '$\\frac{150}{225} = \\frac{2}{3}$. $\\gcd(150, 225) = 75$. Divide: $150 \\div 75 = 2$, $225 \\div 75 = 3$.'
      },
      {
        q: 'Convert $\\frac{7}{40}$ to a decimal.',
        a: '$0.175$. Since $40 = 2^3 \\times 5$, use $10^3 = 1000$. Multiply: $7 \\times 25 = 175$. So $\\frac{7}{40} = \\frac{175}{1000} = 0.175$.'
      },
      {
        q: 'Find a fraction between $\\frac{2}{7}$ and $\\frac{3}{7}$.',
        a: '$\\frac{5}{14}$. By equivalent fractions: $\\frac{2}{7} = \\frac{4}{14}$ and $\\frac{3}{7} = \\frac{6}{14}$. So $\\frac{5}{14}$ lies between them.'
      },
      {
        q: 'Why can you compare two fractions by cross-multiplying? Explain the geometry.',
        a: 'Cross-multiplication rewrites both fractions with the same denominator. With equal denominators, the bigger numerator means a bigger fraction. The products $kn$ and $lm$ are those adjusted numerators.'
      },
      {
        q: 'Why does the power-of-10 trick work for converting fractions to decimals?',
        a: 'A decimal is defined as a fraction with a power-of-10 denominator. Multiplying top and bottom by the same number gives an equivalent fraction. Choosing the right multiplier makes the denominator exactly $10^k$.'
      },
      {
        q: 'Is $\\frac{2.5}{7}$ a fraction between $\\frac{2}{7}$ and $\\frac{3}{7}$?',
        a: 'Yes. $\\frac{2.5}{7} = \\frac{5}{14}$. And $\\frac{4}{14} < \\frac{5}{14} < \\frac{6}{14}$. So it lies between them.'
      },
      {
        q: 'Predict: If you keep adding 1 to both numerator and denominator of $\\frac{1}{2}$, what value does the fraction approach?',
        a: 'It approaches 1. The sequence is $\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\frac{4}{5}, \\ldots$ The general term $\\frac{n}{n+1}$ gets closer to 1 but never reaches it.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Fraction Foundations',
      sections: [
        <>
          <h2>Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Fraction</span>
            <div className="lrn-definition-desc">
              {`$\\frac{m}{n}$ = point on the number line: divide each unit into $n$ parts, count $m$ from 0.`}
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Decimal</span>
            <div className="lrn-definition-desc">
              {`$0.d_1 d_2 \\ldots d_k = \\frac{d_1 d_2 \\ldots d_k}{10^k}$. A fraction with a power-of-10 denominator.`}
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Area Model</span>
            <div className="lrn-definition-desc">
              {`$\\frac{m}{n}$ = shading $m$ out of $n$ equal strips in a unit square. Gives the same value as the number line.`}
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Equivalent Fractions</span>
            <div className="lrn-definition-desc">
              {`$\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$ for any nonzero $n$. Two fractions are equivalent when they name the same point.`}
            </div>
          </div>
        </>,
        <>
          <h2>Equivalence and Comparison</h2>
          <div className="lrn-eq">{`$$\\text{Cancellation: } \\frac{km}{kn} = \\frac{m}{n}$$`}</div>
          <p>Divide both numerator and denominator by a common factor.</p>
          <div className="lrn-eq">
            {`$$\\text{Cross-multiplication: } \\frac{k}{\\ell} < \\frac{m}{n} \\text{ iff } kn < \\ell m$$`}
          </div>
          <p>Compare two fractions without finding a common denominator.</p>
          <p>
            <strong>FFFP:</strong>
            {` $kn$ vs $\\ell m$ determines the full relationship between $\\frac{k}{\\ell}$ and $\\frac{m}{n}$.`}
          </p>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function FractionFoundations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
