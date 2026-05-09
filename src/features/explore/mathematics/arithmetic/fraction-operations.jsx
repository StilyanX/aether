import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'

import {
  AdditionNumberLine,
  SubtractionNumberLine,
  FractionMultiplicationArea as MultiplicationAreaModel,
  FractionDistributiveLaw as DistributiveLawVis,
  FractionOfNumberLine,
  FiniteDecimalVis
} from '../../../../components/viz/math-viz/modules'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'frc',
    source: 'Understanding Numbers in Elementary School Mathematics: Hung-Hsi Wu',
    documentTitle: 'Fraction Operations - AETHER',
    learning: {
      category: 'Part 2',
      title: 'Fraction Operations',
      subtitle:
        'Addition, subtraction, multiplication, and division of fractions. Every formula proved from one definition.',
      sections: [
        /* ═══ ADDITION ═══ */
        <>
          <h2>Addition of Fractions</h2>
          <p>
            <strong>Addition</strong> of fractions means joining two segments end to end on the
            number line.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`You place a segment of length $\\frac{2}{3}$ and one of length $\\frac{5}{7}$ end to end from 0. Where do you land?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{2}{3} + \\frac{5}{7} = \\frac{14 + 15}{21} = \\frac{29}{21} = 1\\frac{8}{21}$.`}</p>
            </details>
          </div>

          <h3>The Addition Formula</h3>
          <p>{`For any fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$:`}</p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\frac{k}{\\ell} + \\frac{m}{n} = \\frac{kn + \\ell m}{\\ell n}$$`}
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Correct: Common Denominator</span>
              <p>{`$\\frac{1}{2} + \\frac{1}{3} = \\frac{3+2}{6} = \\frac{5}{6}$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Wrong: Adding Tops and Bottoms</span>
              <p>{`$\\frac{1}{2} + \\frac{1}{3} \\neq \\frac{2}{5}$. Different-sized pieces cannot be added directly.`}</p>
            </div>
          </div>

          <h3>Derivation from the Number Line</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <ol className="lrn-list">
                <li>{`Rewrite with common denominator $\\ell n$: $\\frac{k}{\\ell} = \\frac{kn}{\\ell n}$ and $\\frac{m}{n} = \\frac{m\\ell}{\\ell n}$.`}</li>
                <li>{`Now both fractions measure in units of $\\frac{1}{\\ell n}$.`}</li>
                <li>{`Joining $kn$ units with $m\\ell$ units gives $kn + m\\ell$ units.`}</li>
                <li>{`Total: $\\frac{kn + m\\ell}{\\ell n}$.`}</li>
              </ol>
            </div>
          </div>

          <p>
            <strong>{`Example: $\\frac{2}{3} + \\frac{5}{7}$`}</strong>
          </p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\frac{2}{3} + \\frac{5}{7} = \\frac{2 \\times 7 + 3 \\times 5}{3 \\times 7} = \\frac{14 + 15}{21} = \\frac{29}{21} = 1\\frac{8}{21}$$`}
          </div>

          <div className="lrn-graph">
            <AdditionNumberLine C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does using a common denominator let you just add the numerators?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A common denominator means both fractions use the same-sized pieces. Like adding 3 apples and 5 apples: same unit, so just add the counts. With denominator $\\ell n$, you add $kn$ pieces to $m\\ell$ pieces.`}
              </p>
            </details>
          </div>

          <h3>Same-Denominator Shortcut</h3>
          <p>When the denominators match:</p>
          <div className="lrn-eq">{`$$\\frac{k}{\\ell} + \\frac{m}{\\ell} = \\frac{k + m}{\\ell}$$`}</div>

          <h3>Mixed Numbers</h3>
          <p>
            A <strong>mixed number</strong> combines a whole number with a proper fraction.
          </p>
          <p>
            <strong>{`Example: $4\\frac{2}{3}$`}</strong>
          </p>
          <p>{`This means $4 + \\frac{2}{3}$. To convert to an improper fraction:`}</p>
          <div className="lrn-eq">{`$$4\\frac{2}{3} = \\frac{4 \\times 3 + 2}{3} = \\frac{14}{3}$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Because $4 = \\frac{12}{3}$, and $\\frac{12}{3} + \\frac{2}{3} = \\frac{14}{3}$.`}</p>
          </div>

          <h3>LCM Refinement</h3>
          <p>{`The formula always works. Using the LCM (least common multiple) instead gives smaller intermediate numbers.`}</p>
          <p>
            <strong>{`Example: $\\frac{5}{6} + \\frac{7}{4}$`}</strong>
          </p>
          <p>{`Formula: $\\frac{20 + 42}{24} = \\frac{62}{24} = \\frac{31}{12}$. LCM(6, 4) = 12: $\\frac{10}{12} + \\frac{21}{12} = \\frac{31}{12}$.`}</p>
          <p>Both give the same answer. The LCM method starts with a smaller denominator.</p>

          <h3>Addition of Decimals</h3>
          <p>Adding decimals is fraction addition in disguise.</p>
          <p>
            <strong>{`Example: $4.0451 + 3.27$`}</strong>
          </p>
          <p>{`Align decimal places: $4.0451 + 3.2700 = 7.3151$. Aligning creates equal denominators (both in ten-thousandths), so the numerators add directly.`}</p>

          <h3>Neighboring Fractions and the Mediant</h3>
          <p>
            {`Some people add fractions by adding tops and bottoms: "$\\frac{2}{5} + \\frac{3}{7} = \\frac{5}{12}$." That is wrong. The correct sum is $\\frac{29}{35}$. The "tops and bottoms" result has a name: the `}
            <strong>mediant</strong>
            {`. It is not a sum. It does something else entirely.`}
          </p>
          <p>
            {`Two fractions $\\frac{a}{b}$ and $\\frac{c}{d}$ are `}
            <strong>neighboring</strong>
            {` if $|ad - bc| = 1$. The mediant of neighboring fractions always lands between them.`}
          </p>
          <p>
            {`Example: $\\frac{2}{5}$ and $\\frac{3}{7}$. Check: $|2 \\times 7 - 5 \\times 3| = 1$. They are neighbors. Their mediant $\\frac{2+3}{5+7} = \\frac{5}{12}$ satisfies $\\frac{2}{5} < \\frac{5}{12} < \\frac{3}{7}$.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Cross-multiplication: $2 \\times 12 = 24 < 25 = 5 \\times 5$, so $\\frac{2}{5} < \\frac{5}{12}$. And $5 \\times 7 = 35 < 36 = 12 \\times 3$, so $\\frac{5}{12} < \\frac{3}{7}$.`}
            </p>
          </div>
        </>,

        /* ═══ SUBTRACTION ═══ */
        <>
          <h2>Subtraction of Fractions</h2>
          <p>
            <strong>Subtraction</strong> is the reverse of addition. On the number line, {`$A - B$`}{' '}
            is the distance from {`$B$`} to {`$A$`}.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>What is 7/9 minus 5/11?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{7}{9} - \\frac{5}{11} = \\frac{77 - 45}{99} = \\frac{32}{99}$.`}</p>
            </details>
          </div>

          <h3>The Subtraction Formula</h3>
          <p>{`For $\\frac{k}{\\ell} \\geq \\frac{m}{n}$:`}</p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\frac{k}{\\ell} - \\frac{m}{n} = \\frac{kn - \\ell m}{\\ell n}$$`}
          </div>

          <div className="lrn-graph">
            <SubtractionNumberLine C={C} />
          </div>

          <h3>Proof from Addition</h3>
          <p>{`$A - B = C$ means $C + B = A$. So $\\frac{k}{\\ell} - \\frac{m}{n}$ is the $C$ with $C + \\frac{m}{n} = \\frac{k}{\\ell}$.`}</p>
          <div className="lrn-eq">
            {`$$\\frac{kn - \\ell m}{\\ell n} + \\frac{m}{n} = \\frac{(kn - \\ell m) + \\ell m}{\\ell n} = \\frac{kn}{\\ell n} = \\frac{k}{\\ell}$$`}
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does adding the subtraction result back to B always give A?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`By definition. $A - B$ is the number $C$ satisfying $C + B = A$. Adding $B$ back to $C$ gives $A$ by the very definition of subtraction.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The subtraction formula mirrors the addition formula. Both come from rewriting
              fractions with a common denominator. Addition joins segments; subtraction measures the
              gap between them.
            </p>
          </div>

          <h3>Comparing Fractions by Subtraction</h3>
          <p>
            <strong>{`Example: Which is closer to 1: $\\frac{7}{9}$ or $\\frac{5}{11}$?`}</strong>
          </p>
          <p>Compute the distance from each to 1:</p>
          <div className="lrn-eq">
            <span>{`$$1 - \\frac{7}{9} = \\frac{2}{9}$$`}</span>
            <span>{`$$1 - \\frac{5}{11} = \\frac{6}{11}$$`}</span>
          </div>
          <p>{`Cross-multiply: $2 \\times 11 = 22$ and $9 \\times 6 = 54$. Since $22 < 54$, $\\frac{2}{9} < \\frac{6}{11}$.`}</p>
          <p>{`So $\\frac{7}{9}$ is closer to 1.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does finding the distance to 1 answer the &ldquo;closer to 1&rdquo; question?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Distance from a fraction to 1 measures how far it sits from 1 on the number line.
                The fraction with the smaller distance is closer.
              </p>
            </details>
          </div>
        </>,

        /* ═══ CONCEPT OF "m/n OF k/l" ═══ */
        <>
          <h2>{`The Concept of "$\\frac{m}{n}$ of $\\frac{k}{\\ell}$"`}</h2>
          <p>
            {`The phrase "$\\frac{m}{n}$ of $\\frac{k}{\\ell}$" means: divide $\\frac{k}{\\ell}$ into $n$ equal parts and take $m$ of them. You ran $\\frac{3}{4}$ of a $\\frac{5}{8}$-mile track. How far? This section answers that.`}
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`What is $\\frac{2}{3}$ of $\\frac{5}{7}$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{2}{3}$ of $\\frac{5}{7} = \\frac{2 \\times 5}{3 \\times 7} = \\frac{10}{21}$.`}</p>
            </details>
          </div>

          <h3>How It Works</h3>
          <p>{`To find $\\frac{m}{n}$ of $\\frac{k}{\\ell}$:`}</p>
          <ol className="lrn-list">
            <li>{`Divide the segment from 0 to $\\frac{k}{\\ell}$ into $n$ equal parts. Each part has length $\\frac{k}{n\\ell}$.`}</li>
            <li>{`Take $m$ of those parts. Total length: $\\frac{mk}{n\\ell}$.`}</li>
          </ol>
          <p>{`This is the same as $\\frac{m}{n} \\times \\frac{k}{\\ell}$. We prove this formally below.`}</p>

          <div className="lrn-graph">
            <FractionOfNumberLine C={C} />
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`"$\\frac{2}{3}$ of $\\frac{1}{2}$"`}</span>
              <p>{`Means $\\frac{2}{3} \\times \\frac{1}{2} = \\frac{1}{3}$. Multiplication.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`"$\\frac{2}{3} + \\frac{1}{2}$"`}</span>
              <p>{`Means $\\frac{7}{6} = 1\\frac{1}{6}$. Addition. Completely different.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`You compute $\\frac{2}{3}$ of $\\frac{5}{7}$ and get $\\frac{10}{21}$. Why is this less than $\\frac{5}{7}$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Taking 2 out of 3 equal parts gives you less than the whole. Since $\\frac{2}{3} < 1$, multiplying $\\frac{5}{7}$ by something less than 1 shrinks it. The result $\\frac{10}{21}$ is smaller than $\\frac{5}{7} = \\frac{15}{21}$.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Equivalent fractions give $\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$. Dividing $[0, \\frac{k}{\\ell}]$ into $n$ equal parts means each part is $\\frac{k}{n\\ell}$. Taking $m$ of them gives $\\frac{mk}{n\\ell}$.`}
            </p>
          </div>
        </>,

        /* ═══ MULTIPLICATION ═══ */
        <>
          <h2>Multiplication of Fractions</h2>
          <p>
            <strong>Multiplication</strong> of fractions is defined as the area of a rectangle.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>What is the area of a rectangle with sides 1/3 and 1/4?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12}$.`}</p>
            </details>
          </div>

          <h3>The Product Formula</h3>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{m}{n} \\times \\frac{k}{\\ell} = \\frac{mk}{n\\ell}$$`}</div>
          <p>Multiply the numerators. Multiply the denominators.</p>

          <h3>Derivation from the Area Model</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <ol className="lrn-list">
                <li>{`A unit square has area 1. Divide it into $n$ rows and $\\ell$ columns.`}</li>
                <li>{`This creates $n\\ell$ small rectangles, each with area $\\frac{1}{n\\ell}$.`}</li>
                <li>{`A rectangle with sides $\\frac{m}{n}$ and $\\frac{k}{\\ell}$ covers $m$ rows and $k$ columns.`}</li>
                <li>{`It contains $mk$ small rectangles. Its area is $\\frac{mk}{n\\ell}$.`}</li>
              </ol>
            </div>
          </div>

          <p>
            <strong>{`Example: $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$`}</strong>
          </p>

          <div className="lrn-graph">
            <MultiplicationAreaModel C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does counting small rectangles ($mk$ out of $n\\ell$) give the area?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each small rectangle has area $\\frac{1}{n\\ell}$ because the unit square is divided into $n\\ell$ equal parts. The shaded rectangle covers $mk$ of them. Total: $\\frac{mk}{n\\ell}$.`}</p>
            </details>
          </div>

          <h3>Multiplication of Decimals</h3>
          <p>
            <strong>{`Example: $1.25 \\times 0.064$`}</strong>
          </p>
          <div className="lrn-eq">{`$$1.25 \\times 0.064 = \\frac{125}{100} \\times \\frac{64}{1000} = \\frac{8000}{100000} = 0.08$$`}</div>
          <p>Count total decimal places in both factors. The product has that many places.</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why do the decimal places add when you multiply?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The denominators multiply: $10^a \\times 10^b = 10^{a+b}$. Two places times three places equals five places in the product.`}</p>
            </details>
          </div>

          <h3>The Distributive Law</h3>
          <div className="lrn-eq lrn-eq-display">{`$$A(B + C) = AB + AC$$`}</div>
          <p>
            {`A rectangle with sides $A$ and $(B + C)$ splits into two smaller rectangles. One has area $AB$, the other $AC$.`}
          </p>

          <div className="lrn-graph">
            <DistributiveLawVis C={C} />
          </div>

          <h3>Whole Number Times Fraction</h3>
          <p>{`$m \\times \\frac{k}{\\ell} = \\frac{mk}{\\ell}$. This is $m$ copies joined end to end.`}</p>
          <p>
            <strong>{`Example: $5 \\times \\frac{2}{3} = \\frac{10}{3} = 3\\frac{1}{3}$`}</strong>
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Because $5 \\times \\frac{2}{3}$ means $\\frac{2}{3} + \\frac{2}{3} + \\frac{2}{3} + \\frac{2}{3} + \\frac{2}{3} = \\frac{10}{3}$.`}</p>
          </div>
        </>,

        /* ═══ SECOND INTERPRETATION (17.7) ═══ */
        <>
          <h2>Multiplication as &ldquo;Of&rdquo;</h2>
          <p>
            {`The area model defines multiplication one way. The "of" idea defines it another. This section proves they always agree.`}
          </p>

          <p>
            {`One fact powers the proof: for any fraction $A$ and any nonzero fraction $B$, exactly one fraction $C$ satisfies $A = CB$. That $C$ is what we call $A/B$. This is the `}
            <strong>uniqueness lemma</strong>
            {`.`}
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A bucket holds 4.5 gallons. You need $5\\frac{2}{3}$ buckets. How many gallons total?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{17}{3} \\times \\frac{9}{2} = \\frac{153}{6} = 25.5$ gallons.`}</p>
            </details>
          </div>

          <h3>Proof (Three Cases)</h3>
          <p>
            <strong>{`Case I ($n = 1$):`}</strong>
            {` $m \\times \\frac{k}{\\ell} = m$ copies of $\\frac{k}{\\ell}$. Repeated addition.`}
          </p>
          <p>
            <strong>{`Case II ($m = 1$):`}</strong>
            {` $\\frac{1}{n} \\times \\frac{k}{\\ell} = \\frac{k}{n\\ell}$. One part when $\\frac{k}{\\ell}$ is split into $n$ parts.`}
          </p>
          <p>
            <strong>Case III (general):</strong>
            {` $\\frac{m}{n} \\times \\frac{k}{\\ell} = m \\times (\\frac{1}{n} \\times \\frac{k}{\\ell})$. Take $m$ joined parts after splitting $\\frac{k}{\\ell}$ into $n$ parts.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does breaking $\\frac{m}{n}$ into $m$ copies of $\\frac{1}{n}$ simplify the proof?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Case II handles $\\frac{1}{n}$ (one part). Case III takes $m$ copies of that one part. The general case reduces to two simpler cases already proved.`}</p>
            </details>
          </div>

          <h3>Worked Examples</h3>
          <p>
            <strong>Example 1:</strong>
            {` A container holds $6\\frac{1}{3}$ gallons. A bucket holds $2\\frac{1}{2}$ gallons. How many buckets?`}
          </p>
          <p>{`We need $C$ with $C \\times \\frac{5}{2} = \\frac{19}{3}$. By the uniqueness lemma, $C = \\frac{19}{3} \\times \\frac{2}{5} = \\frac{38}{15}$.`}</p>

          <p>
            <strong>Example 2:</strong>
            {` A ribbon makes $11\\frac{1}{3}$ bows, each $\\frac{7}{8}$ foot. How long is the ribbon?`}
          </p>
          <div className="lrn-eq">{`$$\\frac{34}{3} \\times \\frac{7}{8} = \\frac{238}{24} = \\frac{119}{12} = 9\\frac{11}{12} \\text{ feet}$$`}</div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>In Example 1, why must you use the uniqueness lemma instead of guessing?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The lemma guarantees exactly one fraction $C$ satisfies $A = CB$. It also gives the formula: $C = A \\times B^{-1}$. Guessing might work but does not prove the answer is unique.`}</p>
            </details>
          </div>

          <h3>The Word &ldquo;Of&rdquo;</h3>
          <p>
            {`"Three-fifths of a rod" equals $\\frac{3}{5} \\times (\\text{rod length})$. The word "of" is not a definition. It is a result of the area-based multiplication theorem.`}
          </p>
          <p>Start with the precise definition (area). Then prove that &ldquo;of&rdquo; works.</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Any fraction $\\frac{m}{n}$ can be written as $m$ copies of $\\frac{1}{n}$. Case II proves the formula for one copy. Case III scales to $m$ copies. Nothing is left uncovered.`}
            </p>
          </div>
        </>,

        /* ═══ DIVISION ═══ */
        <>
          <h2>Division of Fractions</h2>
          <p>
            <strong>Division</strong>
            {` is defined by: $\\frac{A}{B} = C$ means the same as $A = CB$.`}
          </p>

          <div className="lrn-warning">
            <p>{`You cannot divide by zero. $B = 0$ is not allowed because no number $C$ satisfies $A = C \\times 0$ when $A \\neq 0$.`}</p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`How many pieces of $\\frac{5}{3}$ meters fit in a $43\\frac{3}{8}$ meter rod?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{347/8}{5/3} = \\frac{347}{8} \\times \\frac{3}{5} = \\frac{1041}{40} = 26\\frac{1}{40}$. You get 26 complete pieces.`}</p>
            </details>
          </div>

          <h3>Informal Overview</h3>
          <p>
            <strong>Key idea:</strong> Division asks &ldquo;how many copies of B make up A?&rdquo;
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example 1</span>
              <p className="lrn-step-content">{`$\\frac{1}{1/n} = n$. How many copies of $\\frac{1}{n}$ make 1? Answer: $n$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Example 2</span>
              <p className="lrn-step-content">{`$\\frac{5}{1/3} = 15$. Three copies of $\\frac{1}{3}$ make 1. So 15 copies make 5.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Example 3</span>
              <p className="lrn-step-content">{`$\\frac{15/4}{3/4} = 5$. In units of $\\frac{1}{4}$: 15 units / 3 units = 5.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In Example 3, why does using 1/4 as the unit reduce this to whole number division?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Both fractions share denominator 4. In units of $\\frac{1}{4}$, the dividend is 15 and the divisor is 3. Dividing 15 by 3 is just $5$.`}</p>
            </details>
          </div>

          <h3>The Invert-and-Multiply Rule</h3>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{m/n}{k/\\ell} = \\frac{m}{n} \\times \\frac{\\ell}{k}$$`}</div>
          <p>To divide by a fraction, multiply by its reciprocal.</p>

          <h3>Derivation</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <ol className="lrn-list">
                <li>{`We need $C$ such that $\\frac{m}{n} = C \\times \\frac{k}{\\ell}$.`}</li>
                <li>By the uniqueness lemma, exactly one such C exists.</li>
                <li>{`The reciprocal of $\\frac{k}{\\ell}$ is $\\frac{\\ell}{k}$, satisfying $\\frac{k}{\\ell} \\times \\frac{\\ell}{k} = 1$.`}</li>
                <li>{`Multiply both sides by $\\frac{\\ell}{k}$: $\\frac{m}{n} \\times \\frac{\\ell}{k} = C \\times 1 = C$.`}</li>
              </ol>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Invert-and-multiply is not a separate rule. It follows directly from the definition: division asks for $C$ with $A = CB$. The uniqueness lemma gives $C = A \\times B^{-1}$.`}</p>
          </div>

          <h3>The Reciprocal</h3>
          <p>{`The reciprocal of $B = \\frac{k}{\\ell}$ is $B^{-1} = \\frac{\\ell}{k}$. It satisfies $B \\times B^{-1} = 1$.`}</p>

          <h3>Applications</h3>
          <p>
            <strong>Cutting a rod.</strong>
            {` Rod is $43\\frac{3}{8}$ m. Pieces are $\\frac{5}{3}$ m each.`}
          </p>
          <div className="lrn-eq">{`$$\\frac{347/8}{5/3} = \\frac{347}{8} \\times \\frac{3}{5} = \\frac{1041}{40} = 26\\frac{1}{40}$$`}</div>
          <p>{`26 complete pieces. The leftover is $\\frac{1}{40}$ of one piece length.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the fractional part 1/40 represent a fraction of the piece, not the rod?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\frac{A}{B} = 26\\frac{1}{40}$ means $A = 26\\frac{1}{40} \\times B$. The $\\frac{1}{40}$ multiplies $B$ (piece length), not $A$ (rod length).`}</p>
            </details>
          </div>

          <p>
            <strong>Hiking.</strong>
            {` Trail is $12\\frac{1}{3}$ miles. Speed is $3\\frac{1}{2}$ mph.`}
          </p>
          <div className="lrn-eq">{`$$T = \\frac{37/3}{7/2} = \\frac{37}{3} \\times \\frac{2}{7} = \\frac{74}{21} = 3\\frac{11}{21} \\text{ hours}$$`}</div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $T = D/v$ follow from constant speed?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Constant speed means $D/T = v$. Rearranging: $T = D/v$. This is division-multiplication equivalence.`}</p>
            </details>
          </div>
        </>,

        /* ═══ DIVISION OF DECIMALS ═══ */
        <>
          <h2>Division of Decimals</h2>
          <p>Every division of decimals reduces to whole number division.</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>How would you simplify 2.0498 / 14.3?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Convert to fractions: $\\frac{20498/10000}{143/10} = \\frac{20498}{143000}$.`}</p>
            </details>
          </div>

          <h3>The Method</h3>
          <div className="lrn-eq">{`$$\\frac{2.0498}{14.3} = \\frac{20498}{10000} \\times \\frac{10}{143} = \\frac{20498}{143000}$$`}</div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does converting decimals to fractions reduce the problem to whole numbers?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Trace the example: $2.0498 = \\frac{20498}{10000}$ and $14.3 = \\frac{143}{10}$. Inverting $\\frac{143}{10}$ gives $\\frac{10}{143}$. Multiplying: $\\frac{20498}{10000} \\times \\frac{10}{143} = \\frac{20498}{143000}$. The numerator and denominator are both whole numbers.`}
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Every decimal, when written as a fraction, has a power-of-10 denominator.
              Invert-and-multiply then gives a fraction with whole numbers on both top and bottom.
            </p>
          </div>
        </>,

        /* ═══ FINITE VS INFINITE DECIMALS ═══ */
        <>
          <h2>Finite vs. Infinite Decimals</h2>
          <p>
            Your calculator shows 0.333... for 1/3 and never stops. Why? Because 3 is neither 2 nor
            5. A reduced fraction {`$\\frac{m}{n}$`} is a finite decimal if and only if {`$n$`}
            &rsquo;s only prime factors are 2 and 5.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Is 7/12 a finite or infinite decimal? What about 7/40?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`7/12 is infinite ($12 = 2^2 \\times 3$, the 3 prevents it). 7/40 is finite ($40 = 2^3 \\times 5$, only 2s and 5s).`}</p>
            </details>
          </div>

          <h3>The Finite Decimal Test</h3>
          <p>{`$\\frac{m}{n}$ (reduced) equals a finite decimal if and only if $n = 2^a \\times 5^b$.`}</p>

          <h3>Why This Works</h3>
          <p>
            {`$10^k = 2^k \\times 5^k$. To turn a fraction into $\\frac{q}{10^k}$, you need $10^k / n$ to be a whole number.`}
          </p>
          <p>
            {`This works only when every prime factor of $n$ divides $10^k$. A `}
            <strong>prime factor</strong> is a prime number that divides evenly into another number.
            The only prime factors of {`$10^k$`} are 2 and 5.
          </p>

          <p>
            <strong>{`Example: $\\frac{3}{8}$`}</strong>
          </p>
          <p>{`$8 = 2^3$. Pick $k = 3$: $10^3 / 8 = 125$. So $\\frac{3}{8} = \\frac{3 \\times 125}{1000} = \\frac{375}{1000} = 0.375$.`}</p>

          <p>
            <strong>{`Example: $\\frac{15}{32}$`}</strong>
          </p>
          <p>{`$32 = 2^5$. Pick $k = 5$: $10^5 / 32 = 3125$. So $\\frac{15}{32} = \\frac{15 \\times 3125}{100000} = \\frac{46875}{100000} = 0.46875$.`}</p>

          <div className="lrn-graph">
            <FiniteDecimalVis C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $8 = 2^3$ tell you to use $10^3$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$10^3 = 2^3 \\times 5^3$. The $2^3$ cancels the 8. Any smaller power of 10 would not fully cancel it.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Finite Decimals</span>
              <p>{`Denominator = $2^a \\times 5^b$. Terminates. Ex: $\\frac{3}{8} = 0.375$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Infinite Decimals</span>
              <p>{`Other prime factors present. Never ends. Ex: $\\frac{1}{7} = 0.142857\\ldots$`}</p>
            </div>
          </div>

          <h3>Error Bounds</h3>
          <p>{`For an infinite decimal, truncating after $k$ places gives error less than $\\frac{1}{10^k}$.`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$0 < \\frac{m}{n} - \\frac{q}{10^k} < \\frac{1}{10^k}$$`}</div>
          <p>More places = smaller error = better approximation.</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The remainder after long division is less than the divisor. So the leftover fraction $\\frac{r}{n} \\times \\frac{1}{10^k} < \\frac{1}{10^k}$.`}</p>
          </div>

          <h3>Reciprocals Reverse Order</h3>
          <p>One general property of fractions connects directly to these comparisons.</p>
          <p>{`If $A$ and $B$ are positive and $A < B$, then $\\frac{1}{A} > \\frac{1}{B}$.`}</p>
          <p>Smaller positive numbers have larger reciprocals.</p>

          <h3>A Note on Calculators</h3>
          <p>
            Calculators give decimal approximations. They do not tell you why an answer is correct.
            Understanding the formulas lets you verify results and catch errors.
          </p>
        </>,

        /* ═══ FALSE DOCTRINES ═══ */
        <>
          <h2>False Doctrines in Division</h2>
          <p>
            Three common approaches to fraction division are wrong. Knowing why protects you from
            circular reasoning.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If someone says &ldquo;division is repeated subtraction&rdquo; for fractions, what
              goes wrong?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It gives two numbers (quotient and remainder), not one. It also breaks when the
                divisor exceeds the dividend.
              </p>
            </details>
          </div>

          <h3>False Doctrine 1: Repeated Subtraction</h3>
          <p>{`Subtract $\\frac{3}{4}$ from 5 repeatedly. After 6 times, $\\frac{1}{2}$ remains. The "answer" is 6 with remainder $\\frac{1}{2}$.`}</p>
          <div className="lrn-warning">
            <p>{`Division must give one number, not a pair. This also fails for "$\\frac{5}{3}$'s in $\\frac{1}{8}$" since you cannot subtract even once.`}</p>
          </div>

          <h3>False Doctrine 2: Circular Equivalent Fractions</h3>
          <p>{`This writes: $\\frac{m/n}{k/\\ell} = \\frac{(m/n) \\times \\ell n}{(k/\\ell) \\times \\ell n} = \\frac{m\\ell}{nk}$`}</p>
          <div className="lrn-warning">
            <p>
              The equivalent fractions theorem applies to whole number multipliers only. This
              argument uses it with fraction multipliers. That has not been proved yet. The argument
              assumes what it tries to prove.
            </p>
          </div>

          <h3>False Doctrine 3: &ldquo;New Unit&rdquo;</h3>
          <div className="lrn-warning">
            <p>
              Same circular reasoning as Doctrine 2, just disguised differently. It declares the
              divisor the new unit, then computes in those new units — but computing in fractional
              units requires fraction multiplication, which requires fraction division to be already
              defined.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does circular reasoning produce a correct answer but still fail as a proof?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A circular proof assumes its conclusion. It gives the right answer by accident, not
                by logic. It cannot tell you WHY the answer is right or guarantee it works in all
                cases.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The correct proof starts from the definition ($A = CB$) and uses the uniqueness lemma. No circular step. Every line follows from something already proved.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Correct Approach</span>
              <p>{`Derive from $A = CB$ and the uniqueness lemma. Rigorous.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">False Approaches</span>
              <p>Assume division works before defining it. Circular.</p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'Compute $\\frac{3}{8} + \\frac{5}{12}$. Show every step.',
        a: '$\\frac{3}{8} + \\frac{5}{12} = \\frac{3 \\times 12 + 8 \\times 5}{8 \\times 12} = \\frac{36 + 40}{96} = \\frac{76}{96} = \\frac{19}{24}$. Cancel by 4.'
      },
      {
        q: 'Compute $\\frac{7}{9} - \\frac{4}{15}$.',
        a: '$\\frac{7}{9} - \\frac{4}{15} = \\frac{7 \\times 15 - 9 \\times 4}{9 \\times 15} = \\frac{105 - 36}{135} = \\frac{69}{135} = \\frac{23}{45}$.'
      },
      {
        q: 'A recipe needs $\\frac{2}{3}$ cup of sugar and $\\frac{5}{8}$ cup of butter. What is the total?',
        a: '$\\frac{2}{3} + \\frac{5}{8} = \\frac{16 + 15}{24} = \\frac{31}{24} = 1\\frac{7}{24}$ cups.'
      },
      {
        q: 'What is $\\frac{2}{5}$ of $\\frac{3}{7}$? Compute it.',
        a: '"$\\frac{2}{5}$ of $\\frac{3}{7}$" means divide $[0, \\frac{3}{7}]$ into 5 parts and take 2. Each part is $\\frac{3}{35}$. Two parts: $\\frac{6}{35}$. This equals $\\frac{2}{5} \\times \\frac{3}{7} = \\frac{6}{35}$.'
      },
      {
        q: 'Compute $\\frac{3}{7} \\times \\frac{14}{9}$.',
        a: '$\\frac{3 \\times 14}{7 \\times 9} = \\frac{42}{63} = \\frac{2}{3}$. Cancel 21 from both.'
      },
      {
        q: 'A garden is $\\frac{2}{3}$ acre. You plant flowers on $\\frac{3}{4}$ of it. How many acres of flowers?',
        a: '$\\frac{3}{4} \\times \\frac{2}{3} = \\frac{6}{12} = \\frac{1}{2}$ acre.'
      },
      {
        q: 'Compute $\\frac{5}{8} \\div \\frac{3}{4}$. Show why invert-and-multiply works.',
        a: '$\\frac{5}{8} \\times \\frac{4}{3} = \\frac{20}{24} = \\frac{5}{6}$. We need $C$ with $\\frac{5}{8} = C \\times \\frac{3}{4}$. The uniqueness lemma gives $C = \\frac{5}{8} \\times \\frac{4}{3}$. Check: $\\frac{5}{6} \\times \\frac{3}{4} = \\frac{15}{24} = \\frac{5}{8}$.'
      },
      {
        q: 'A rod is $15\\frac{3}{4}$ meters long. You cut pieces of $\\frac{7}{8}$ meter. How many complete pieces?',
        a: '$\\frac{63}{4} \\div \\frac{7}{8} = \\frac{63}{4} \\times \\frac{8}{7} = \\frac{504}{28} = 18$ pieces exactly.'
      },
      {
        q: 'Convert $7\\frac{2}{5}$ to an improper fraction.',
        a: '$7\\frac{2}{5} = \\frac{7 \\times 5 + 2}{5} = \\frac{37}{5}$. Rewrite 7 as $\\frac{35}{5}$, then $\\frac{35}{5} + \\frac{2}{5} = \\frac{37}{5}$.'
      },
      {
        q: 'Why does the LCM method give the same answer as the general formula?',
        a: 'Both produce equivalent fractions. The formula gives $\\frac{kn + lm}{ln}$. The LCM method gives a smaller common denominator. Both name the same point on the number line.'
      },
      {
        q: 'Verify the distributive law: $\\frac{2}{3} \\times (\\frac{1}{4} + \\frac{5}{6})$.',
        a: 'Left: $\\frac{2}{3} \\times \\frac{13}{12} = \\frac{26}{36} = \\frac{13}{18}$. Right: $\\frac{2}{3} \\times \\frac{1}{4} + \\frac{2}{3} \\times \\frac{5}{6} = \\frac{1}{6} + \\frac{5}{9} = \\frac{3}{18} + \\frac{10}{18} = \\frac{13}{18}$. Equal.'
      },
      {
        q: 'Compute 1.25 x 0.064 and explain why decimal places add.',
        a: '0.08. Denominators multiply: 100 x 1000 = $10^5$. Product has 5 decimal places (2 + 3).'
      },
      {
        q: "A bucket holds 4.5 gallons. A tank needs $5\\frac{2}{3}$ buckets. What is the tank's capacity?",
        a: '$\\frac{17}{3} \\times \\frac{9}{2} = \\frac{153}{6} = 25.5$ gallons.'
      },
      {
        q: 'What is the multiplicative inverse of $\\frac{7}{11}$? Why does it matter?',
        a: '$\\frac{11}{7}$, because $\\frac{7}{11} \\times \\frac{11}{7} = 1$. Division by $\\frac{7}{11}$ equals multiplication by $\\frac{11}{7}$.'
      },
      {
        q: 'A trail is $12\\frac{1}{3}$ miles. Speed is $3\\frac{1}{2}$ mph. How long is the hike?',
        a: '$\\frac{37}{3} \\div \\frac{7}{2} = \\frac{37}{3} \\times \\frac{2}{7} = \\frac{74}{21} = 3\\frac{11}{21}$ hours.'
      },
      {
        q: 'Why is the "repeated subtraction" approach to fraction division wrong?',
        a: 'It gives a pair (quotient + remainder), not one number. Division must produce exactly one number. It also fails when the divisor exceeds the dividend.'
      },
      {
        q: 'What is wrong with proving invert-and-multiply using equivalent fractions?',
        a: 'The equivalent fractions theorem applies to whole number multipliers only. The argument uses fraction multipliers without proof. It assumes what it tries to prove. Circular reasoning.'
      },
      {
        q: 'Is $\\frac{7}{12}$ a finite or infinite decimal? Is $\\frac{7}{40}$?',
        a: "$\\frac{7}{12}$ is infinite: $12 = 2^2 \\times 3$, and 3 is not 2 or 5. $\\frac{7}{40}$ is finite: $40 = 2^3 \\times 5$, only 2's and 5's."
      },
      {
        q: 'Convert $\\frac{15}{32}$ to a decimal.',
        a: '$0.46875$. Since $32 = 2^5$, use $10^5$: $\\frac{15 \\times 100000}{32} = 46875$. So $\\frac{15}{32} = 0.46875$.'
      },
      {
        q: 'Express the division $\\frac{2.0498}{14.3}$ as whole number division.',
        a: '$\\frac{20498}{143000}$. Convert: $2.0498 = \\frac{20498}{10000}$, $14.3 = \\frac{143}{10}$. Then $\\frac{20498}{10000} \\times \\frac{10}{143} = \\frac{20498}{143000}$.'
      },
      {
        q: 'Which fraction is closer to 1: $\\frac{11}{13}$ or $\\frac{8}{9}$?',
        a: '$\\frac{8}{9}$ is closer. Distance of $\\frac{11}{13}$ from 1: $\\frac{2}{13}$. Distance of $\\frac{8}{9}$: $\\frac{1}{9}$. Cross-multiply: $2 \\times 9 = 18 > 13 \\times 1 = 13$. So $\\frac{2}{13} > \\frac{1}{9}$, meaning $\\frac{8}{9}$ is closer.'
      },
      {
        q: 'Compute $\\frac{11}{15} - \\frac{3}{10}$.',
        a: '$\\frac{110 - 45}{150} = \\frac{65}{150} = \\frac{13}{30}$.'
      },
      {
        q: 'What is $\\frac{7}{8} \\times \\frac{4}{21}$?',
        a: '$\\frac{28}{168} = \\frac{1}{6}$.'
      },
      {
        q: 'Compute $\\frac{9}{4} \\div \\frac{3}{8}$.',
        a: '$\\frac{9}{4} \\times \\frac{8}{3} = \\frac{72}{12} = 6$. Check: $6 \\times \\frac{3}{8} = \\frac{18}{8} = \\frac{9}{4}$.'
      },
      {
        q: 'Explain why adding fractions by "adding tops and bottoms" ($\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$) is wrong.',
        a: '$\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$, not $\\frac{2}{5}$. Without common denominators, the numerators count different-sized pieces. Adding them is like adding 3 feet and 2 meters.'
      },
      {
        q: 'Prove that $\\frac{k}{l} \\times \\frac{l}{k} = 1$.',
        a: '$\\frac{k}{l} \\times \\frac{l}{k} = \\frac{kl}{lk} = 1$. Any nonzero number times its reciprocal equals 1.'
      },
      {
        q: 'If $A$ and $B$ are positive fractions with $A < B$, prove that $\\frac{1}{A} > \\frac{1}{B}$.',
        a: '$A < B$ means $kn < lm$. Reciprocals: $\\frac{1}{A} = \\frac{l}{k}$, $\\frac{1}{B} = \\frac{n}{m}$. Cross-multiply the reciprocals: $lm$ vs $kn$. Since $kn < lm$, the inequality reverses.'
      },
      {
        q: 'What is the cancellation property for products? Show $\\frac{l}{k} \\times \\frac{kn}{lm} = \\frac{n}{m}$.',
        a: '$\\frac{l}{k} \\times \\frac{kn}{lm} = \\frac{lkn}{klm}$. Cancel $l$ from top and bottom: $\\frac{kn}{km}$. Cancel $k$: $\\frac{n}{m}$.'
      },
      {
        q: 'A ribbon is $9\\frac{11}{12}$ feet. How many bows of $\\frac{7}{8}$ foot?',
        a: '$\\frac{119}{12} \\div \\frac{7}{8} = \\frac{119}{12} \\times \\frac{8}{7} = \\frac{952}{84} = \\frac{34}{3} = 11\\frac{1}{3}$. So 11 complete bows.'
      },
      {
        q: 'Predict: If you multiply $\\frac{8}{9}$ by a number less than 1, is the result bigger or smaller than $\\frac{8}{9}$?',
        a: 'Smaller. Multiplying by less than 1 shrinks the value.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Fraction Operations',
      sections: [
        <>
          <h2>Four Operations</h2>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Addition: } \\frac{k}{\\ell} + \\frac{m}{n} = \\frac{kn + \\ell m}{\\ell n}$$`}</div>
          <div className="lrn-eq">{`$$\\text{Same denom: } \\frac{k}{\\ell} + \\frac{m}{\\ell} = \\frac{k + m}{\\ell}$$`}</div>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Subtraction: } \\frac{k}{\\ell} - \\frac{m}{n} = \\frac{kn - \\ell m}{\\ell n}$$`}</div>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Product: } \\frac{m}{n} \\times \\frac{k}{\\ell} = \\frac{mk}{n\\ell}$$`}</div>
          <div className="lrn-eq">{`$$\\text{Distributive: } A(B + C) = AB + AC$$`}</div>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Division: } \\frac{m/n}{k/\\ell} = \\frac{m}{n} \\times \\frac{\\ell}{k}$$`}</div>
          <p>
            <strong>Mixed number:</strong>
            {` $a\\frac{b}{c} = \\frac{ac + b}{c}$`}
          </p>
          <p>
            <strong>Reciprocal:</strong>
            {` $B^{-1} = \\frac{\\ell}{k}$ when $B = \\frac{k}{\\ell}$`}
          </p>
        </>,
        <>
          <h2>Decimals</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Finite Decimal Test</span>
            <div className="lrn-definition-desc">{`$\\frac{m}{n}$ (reduced) terminates iff $n = 2^a \\times 5^b$.`}</div>
          </div>
          <div className="lrn-eq">{`$$\\text{Error bound: } 0 < \\frac{m}{n} - \\frac{q}{10^k} < \\frac{1}{10^k}$$`}</div>
          <p>
            <strong>Reciprocal inequality:</strong>
            {` $A < B \\Rightarrow \\frac{1}{A} > \\frac{1}{B}$ (positive fractions)`}
          </p>
        </>,
        <>
          <h2>False Doctrines</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Error</span>
              <ul className="lrn-list">
                <li>Division = repeated subtraction</li>
                <li>Equivalent fractions proof of invert-and-multiply</li>
                <li>&ldquo;New unit&rdquo; proof</li>
                <li>Adding tops and bottoms</li>
              </ul>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Why It Fails</span>
              <ul className="lrn-list">
                <li>Gives a pair, not one number</li>
                <li>Circular reasoning</li>
                <li>Same circular reasoning in disguise</li>
                <li>Gives the mediant, not the sum</li>
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

export default function FractionOperations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
