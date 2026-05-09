import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'

import {
  MirrorReflectionDiagram,
  TwoSidedNumberLine,
  VectorAdditionDiagram,
  InequalityFlipDiagram,
  AbsoluteValueDiagram
} from '../../../../components/viz/math-viz/modules'

export default function RationalNumbers() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'rtn',
    source: 'Understanding Numbers in Elementary School Mathematics - Hung-Hsi Wu',
    documentTitle: 'Rational Numbers - AETHER',
    learning: {
      category: 'Arithmetic',
      title: 'Rational Numbers',
      subtitle: 'The complete number line: negatives, operations, and order',
      sections: [
        <>
          <h2>The Two-Sided Number Line</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What do you think happens when you reflect a point p across 0 on the number line
              twice?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>You return to the original point. Reflecting twice undoes the first reflection.</p>
            </details>
          </div>

          <p>You already know the number line as a ray pointing right from 0.</p>
          <p>Now extend it in both directions - left and right of 0.</p>
          <p>
            Every point p to the right of 0 has a <strong>mirror reflection</strong> across 0.
          </p>
          <p>
            We call that reflection <strong>p*</strong> (read "p-star").
          </p>

          <div className="lrn-graph">
            <MirrorReflectionDiagram C={C} />
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Mirror Reflection p*</span>
            <div className="lrn-definition-desc">
              For any point p on the number line, <strong>p*</strong> is its reflection across 0. It
              is the same distance from 0 as p, but on the opposite side.
            </div>
          </div>

          <p>Two key facts follow from this definition directly.</p>
          <p>First: {`$0^* = 0$`}, because 0 is its own reflection.</p>
          <p>Second: {`$p^{**} = p$`}, because reflecting twice returns to the original point.</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>Reflecting p across 0 moves it to the opposite side at the same distance.</p>
            <p>
              Reflecting p* across 0 again moves it back to the original side at the same distance.
            </p>
            <p>So p** lands exactly where p started.</p>
            <p>The double reflection is identical to doing nothing.</p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rational Numbers</span>
            <div className="lrn-definition-desc">
              The <strong>rational numbers</strong> are all fractions together with their mirror
              reflections. Every fraction m/n has a reflection (m/n)*, and both are rational
              numbers.
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Integers</span>
            <div className="lrn-definition-desc">
              The <strong>integers</strong> are the whole numbers together with their reflections:{' '}
              {`$\\ldots, 3^*, 2^*, 1^*, 0, 1, 2, 3, \\ldots$`}
            </div>
          </div>

          <p>
            These three sets are nested: every whole number is an integer, and every integer is a
            rational number.
          </p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\text{whole numbers} \\subset \\text{integers} \\subset \\text{rational numbers}$$`}</span>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Positive, Negative, Zero</span>
            <div className="lrn-definition-desc">
              Numbers to the right of 0 are <strong>positive</strong>. Numbers to the left are{' '}
              <strong>negative</strong>. Zero is neither positive nor negative.
            </div>
          </div>

          <div className="lrn-graph">
            <TwoSidedNumberLine C={C} />
          </div>

          <div className="lrn-insight">
            <p>
              The notation x* is used deliberately. The minus sign (−) is introduced later, after
              subtraction is formally defined. Using x* first avoids the confusion between
              "negative" and "subtraction."
            </p>
          </div>

          <h2>Why We Need Rational Numbers</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What equation has no solution among whole numbers or fractions, but does have a
              solution among rational numbers?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The equation {`$7 + x = 5$`} has no solution among fractions.</p>
              <p>In rational numbers, {`$x = 2^*$`} is the solution.</p>
            </details>
          </div>

          <p>
            Fractions let us solve equations like {`$7x = 5$`}, giving {`$x = 5/7$`}.
          </p>
          <p>But the equation {`$7 + x = 5$`} has no solution among fractions.</p>
          <p>We need rational numbers to solve {`$a + x = b$`} for any rational a and b.</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example 1: {`$7 + x = 5$`}</span>
              <p className="lrn-step-content">
                In rational numbers, {`$x = 2^*$`} works because {`$7 + 2^* = 5$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Example 2: {`$\\frac{1}{2} + y = \\frac{1}{4}$`}
              </span>
              <p className="lrn-step-content">
                The solution is {`$y = \\left(\\frac{1}{4}\\right)^*$`}.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$x = 2^*$`} satisfy {`$7 + x = 5$`}? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>Adding 2* to 7 means "start at 7, move 2 units left."</p>
              <p>That lands on 5, so the equation is satisfied.</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Equation-based definition of fractions</span>
              <p>
                Defines m/n as the solution to {`$nx = m$`}. Correct but too abstract for school.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Number-line definition of fractions</span>
              <p>
                Defines m/n as a point on the number line. Visual, concrete, and it extends
                naturally to negative numbers.
              </p>
            </div>
          </div>

          <h2>Vectors and Vector Addition</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A segment starts at 1* and ends at 2*. What direction does it point, and how long is
              it?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>It points left with length 1. Going from 1* to 2* moves one unit further left.</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Vector</span>
            <div className="lrn-definition-desc">
              A <strong>vector</strong> is a segment on the number line with a starting point and an
              endpoint. It has two properties: <strong>length</strong> (always positive) and{' '}
              <strong>direction</strong> (left or right).
            </div>
          </div>

          <p>A segment from 1* to 2* points left with length 1.</p>
          <p>A segment from 0 to 2 points right with length 2.</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Special Vector</span>
            <div className="lrn-definition-desc">
              The <strong>special vector</strong> for x is the vector starting at 0 with endpoint x.
              We write it as {`$\\vec{x}$`}. Every rational number has a unique special vector.
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Key Observation: Vector Addition</span>
            <div className="lrn-definition-desc">
              To add {`$\\vec{x} + \\vec{y}$`}: place a copy of {`$\\vec{y}$`} at the endpoint of{' '}
              {`$\\vec{x}$`}. The result is the special vector to the new endpoint.
              <ul className="lrn-list">
                <li>Same direction: result length = sum of lengths, same direction.</li>
                <li>
                  Opposite directions: result length = longer minus shorter ("difference" always
                  means longer minus shorter, which is positive), direction of the longer vector.
                </li>
                <li>
                  Equal lengths, opposite directions: result is the zero vector {`$\\vec{0}$`}.
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-graph">
            <VectorAdditionDiagram C={C} />
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example: 3 + 1* = 2</span>
              <p className="lrn-step-content">
                {`$\\vec{3}$`} points right with length 3. {`$\\vec{1^*}$`} points left with length
                1. Opposite directions: subtract 3 − 1 = 2. The longer vector ({`$\\vec{3}$`}){' '}
                points right. Endpoint is 2.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Example: 3* + 1.2 = (1.8)*</span>
              <p className="lrn-step-content">
                {`$\\vec{3^*}$`} points left with length 3. {`$\\vec{1.2}$`} points right with
                length 1.2. Subtract: 3 − 1.2 = 1.8. The longer vector ({`$\\vec{3^*}$`}) points
                left. Endpoint is (1.8)*.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do two vectors of equal length but opposite directions sum to zero? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The second vector exactly cancels the first. You go right 3 units, then left 3
                units. You land back at 0.
              </p>
              <p>The endpoint of the resulting special vector is 0.</p>
            </details>
          </div>

          <p>Vector addition is both commutative and associative.</p>
          <p>
            Commutativity: {`$\\vec{x} + \\vec{y}$`} and {`$\\vec{y} + \\vec{x}$`} have the same
            direction and length regardless of order.
          </p>
          <p>
            Associativity means grouping does not matter:{' '}
            {`$(\\vec{x} + \\vec{y}) + \\vec{z} = \\vec{x} + (\\vec{y} + \\vec{z})$`}. Both sides
            trace the same total displacement and reach the same endpoint.
          </p>

          <h2>Adding Rational Numbers</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Using vectors, predict what {`$2 + 5^*$`} equals. Sketch it in your mind first.</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$\\vec{2}$`} goes right 2. {`$\\vec{5^*}$`} goes left 5. The left vector is
                longer: 5 − 2 = 3. Result is 3*.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Addition of Rational Numbers</span>
            <div className="lrn-definition-desc">
              For any rational numbers x and y, define{' '}
              <strong>x + y as the endpoint of {`$\\vec{x} + \\vec{y}$`}</strong>. This extends
              fraction addition to all rational numbers.
            </div>
          </div>

          <p>Two facts follow immediately from the definition.</p>

          <div className="lrn-eq">
            <span>{`$$0 + x = x + 0 = x \\text{ for any rational } x$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$x + x^* = 0 \\text{ for any rational } x$$`}</span>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`$x + x^* = 0$`} because {`$\\vec{x}$`} and {`$\\vec{x^*}$`} have the same length and
              opposite directions.
            </p>
            <p>Their sum is the zero vector, whose endpoint is 0.</p>
            <p>This is the vector proof of the additive inverse property.</p>
          </div>

          <p>Three explicit computation rules follow from the Key Observation.</p>

          <div className="lrn-eq">
            <span>{`$$x^* + y^* = (x + y)^* \\quad \\text{(27.1)}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$s + t^* = s - t \\quad \\text{if } s \\geq t \\quad \\text{(27.2)}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$s + t^* = (t - s)^* \\quad \\text{if } s < t \\quad \\text{(27.3)}$$`}</span>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Proof of (27.2): s + t* = s − t when s ≥ t</span>
              <p className="lrn-step-content">
                {`$\\vec{s}$`} points right, length s. {`$\\vec{t^*}$`} points left, length t. Since
                s ≥ t, the right vector is longer. Subtract lengths: s − t. The result points right.
                Endpoint is s − t.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Proof of (27.3): s + t* = (t − s)* when s &lt; t
              </span>
              <p className="lrn-step-content">
                Now {`$\\vec{t^*}$`} is longer. Subtract: t − s. The result points left. Endpoint is
                (t − s)*.
              </p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked example: 15/4 + (5/3)*</span>
              <p className="lrn-step-content">
                15/4 = 3.75 and 5/3 ≈ 1.67. Since 3.75 &gt; 1.67, use rule (27.2):{' '}
                {`$\\frac{15}{4} - \\frac{5}{3} = \\frac{45}{12} - \\frac{20}{12} = \\frac{25}{12}$`}
                .
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Worked example: 7/6 + 2*</span>
              <p className="lrn-step-content">
                7/6 ≈ 1.17 &lt; 2. Use rule (27.3):{' '}
                {`$\\frac{7}{6} + 2^* = \\left(2 - \\frac{7}{6}\\right)^* = \\left(\\frac{5}{6}\\right)^*$`}
                .
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$x^* + y^* = (x+y)^*$`}? Explain the vector reasoning before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Both {`$\\vec{x^*}$`} and {`$\\vec{y^*}$`} point left.
              </p>
              <p>
                Adding them places them end to end, both going left. Total length is x + y, still
                pointing left. Endpoint is (x+y)*.
              </p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Compute {`$3 + (4\\tfrac{5}{6})^*$`}. Since {`$3 < 4\\tfrac{5}{6}$`}, use rule
                (27.3): result is {`$(4\\tfrac{5}{6} - 3)^* = (1\\tfrac{5}{6})^*$`}.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN - PARTIAL</span>
              <p>
                Compute {`$\\tfrac{7}{8} + (\\tfrac{1}{3})^*$`}. Compare the two fractions. Since{' '}
                {`$\\tfrac{7}{8} > \\tfrac{1}{3}$`}, use rule (27.2). Complete the subtraction:{' '}
                {`$\\tfrac{7}{8} - \\tfrac{1}{3} = ?$`}
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Compute {`$(7\\tfrac{2}{3})^* + 9\\tfrac{1}{4}$`} and {`$401 + (193.7)^*$`}.
              </p>
            </div>
          </div>

          <h2>Subtraction as Addition</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>What does {`$\\frac{15}{4} - \\frac{5}{3}$`} mean in terms of addition?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Subtraction is adding the reflection:{' '}
                {`$\\frac{15}{4} - \\frac{5}{3} = \\frac{15}{4} + \\left(\\frac{5}{3}\\right)^*$`}.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Subtraction of Rational Numbers</span>
            <div className="lrn-definition-desc">
              For any rational numbers x and y:
              <div className="lrn-eq">
                <span>{`$$x - y = x + y^* \\quad \\text{(27.5)}$$`}</span>
              </div>
              Subtraction is not a new operation - it is addition of the reflection.
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Fraction subtraction</span>
              <p>
                Requires s ≥ t. The restriction exists because fractions do not include negative
                numbers - the result must be non-negative.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rational subtraction</span>
              <p>
                Always defined as x + y*. No restriction needed - rational numbers include all
                reflections, so the result can be negative.
              </p>
            </div>
          </div>

          <p>
            After subtraction is defined, we write {`$-y$`} instead of {`$y^*$`}.
          </p>
          <p>
            We also have {`$-0 = 0$`} and {`$-(-x) = x$`}.
          </p>
          <p>Subtraction then reads: {`$x - y = x + (-y)$`}.</p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Why the delayed minus sign</span>
            <p>
              The text uses x* before introducing the minus sign. This stops students from confusing
              "negative" with "subtraction." The x* notation keeps those ideas separate until both
              are firmly established.
            </p>
          </div>

          <p>Four rules follow from the definition of subtraction.</p>

          <div className="lrn-eq">
            <span>{`$$-(x + y) = -x - y \\quad \\text{(27.6)}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$-(x - y) = -x + y \\quad \\text{(27.7)}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$(x + y + z) - (a + b + c) = (x-a) + (y-b) + (z-c) \\quad \\text{(27.8)}$$`}</span>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>Rule (27.6): {`$-(x+y) = (x+y)^*$`}.</p>
            <p>From rule (27.1), {`$(x+y)^* = x^* + y^* = -x + (-y) = -x - y$`}.</p>
            <p>
              Rule (27.7): {`$-(x-y) = -(x+(-y))$`} by the definition of subtraction. Apply (27.6):{' '}
              {`$= -x + (-(-y)) = -x + y$`}. The double negation {`$-(-y) = y$`} comes from{' '}
              {`$p^{**} = p$`}.
            </p>
            <p>Both rules follow from how reflections add.</p>
          </div>

          <div className="lrn-insight">
            <p>
              Rule (27.8) explains why the standard subtraction algorithm works. When you compute
              756 − 389, you subtract column by column: hundreds, tens, ones separately. The
              rational number identity (27.8) is exactly this column-by-column structure.
            </p>
          </div>

          <h2>The Axiomatic Approach to Addition</h2>

          <p>
            An axiomatic approach means starting from a small set of accepted rules and deriving
            everything else by logic alone.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you only know that addition is commutative and associative, that {`$x + x^* = 0$`},
              and that {`$x + 0 = x$`} - can you prove all other addition facts?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. These three assumptions - (A1), (A2), (A3) - are enough to derive all basic
                facts about rational addition.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Vector approach</span>
              <p>
                Geometric and intuitive. Each step connects to a picture. Good for building initial
                understanding.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Axiomatic approach</span>
              <p>
                Abstract and concise. Three assumptions are stated, and all properties follow by
                pure logic. The same structure is then used for multiplication.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Assumptions (A1)–(A3)</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>(A1)</strong> Addition exists, is unique, equals fraction addition for
                  positive inputs, and obeys the associative and commutative laws.
                </li>
                <li>
                  <strong>(A2)</strong> {`$x + x^* = 0$`} for any rational x.
                </li>
                <li>
                  <strong>(A3)</strong> {`$x + 0 = x$`} for any rational x.
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Basic Fact 1: if {`$x + y = x$`}, then {`$y = 0$`}
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">Start with {`$x + y = x$`}.</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Add {`$x^*$`} to both sides: {`$x^* + (x + y) = x^* + x$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Left side: {`$(x^* + x) + y = 0 + y = y$`} by (A1) and (A2).
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">Right side: {`$x^* + x = 0$`} by (A2).</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">Therefore {`$y = 0$`}.</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Basic Facts 2 and 3</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>Basic Fact 2:</strong> If {`$x + y = 0$`}, then {`$y = x^*$`} and{' '}
                  {`$x = y^*$`}. The additive inverse is unique.
                </li>
                <li>
                  <strong>Basic Fact 3:</strong> {`$(x + y)^* = x^* + y^*$`}. The reflection of a
                  sum equals the sum of the reflections.
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the proof of Basic Fact 1, why is "add {`$x^*$`} to both sides" the key move? Form
              your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Adding {`$x^*$`} to x produces 0 by (A2). This clears the x from both sides, leaving
                only y on the left and 0 on the right.
              </p>
              <p>It is the same move as "subtract x from both sides" in algebra.</p>
            </details>
          </div>

          <h2>Multiplying Rational Numbers</h2>

          <p>
            The sign rules for multiplication follow from the distributive law, not from intuition
            or analogy.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Why is proving {`$(-1)(-1) = 1$`} the critical step for understanding why a negative
              times a negative is positive?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Every negative number equals {`$(-1)$`} times a positive number. So {`$(-m)(-n)$`}{' '}
                factors through {`$(-1)(-1)$`}. Once you know {`$(-1)(-1) = 1$`}, the general result
                follows.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Assumptions (M1)–(M3)</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>(M1)</strong> Multiplication exists, is unique, equals fraction
                  multiplication for positive inputs, and obeys the associative, commutative, and
                  distributive laws. The distributive law connects multiplication and addition:{' '}
                  {`$a(b + c) = ab + ac$`}.
                </li>
                <li>
                  <strong>(M2)</strong> {`$1 \\cdot x = x$`} for any rational x.
                </li>
                <li>
                  <strong>(M3)</strong> {`$0 \\cdot x = x \\cdot 0 = 0$`} for any rational x (proved
                  from M1 and M2).
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Proof of (M3): {`$0 \\cdot x = (0 + 0) \\cdot x = 0 \\cdot x + 0 \\cdot x$`} by
              distributivity.
            </p>
            <p>
              Let {`$y = 0 \\cdot x$`}. Then {`$y = y + y$`}, so {`$0 = y$`} by Basic Fact 1.
            </p>
            <p>Zero times anything is zero - proved from the distributive law alone.</p>
          </div>

          <div className="lrn-callout">
            <p>
              Why is negative times negative positive? This is the most common question in school
              mathematics. The proof is far simpler than any analogy - it follows from the
              distributive law.
            </p>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Theorem 29.1: {`$(-1)(-1) = 1$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                By Basic Fact 2, it is enough to show {`$(-1)(-1) + (-1) = 0$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Factor: {`$(-1)(-1) + (-1) = (-1)(-1) + (-1)(1) = (-1)[(-1) + 1]$`} by
                distributivity.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$(-1) + 1 = 0$`} by (A2).</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">So {`$(-1)[0] = 0$`} by (M3).</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">
                Therefore {`$(-1)(-1) + (-1) = 0$`}, so {`$(-1)(-1) = 1$`} by Basic Fact 2.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the proof of Theorem 29.1, why is the key step "show that {`$(-1)(-1) + (-1) = 0$`}
              "? Form your answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Basic Fact 2 says: if {`$a + b = 0$`}, then {`$a = b^*$`}.
              </p>
              <p>
                So if {`$(-1)(-1) + (-1) = 0$`}, then {`$(-1)(-1) = (-1)^* = 1$`}.
              </p>
              <p>
                The distributive law then factors {`$(-1)$`} out to get{' '}
                {`$(-1)[(-1) + 1] = (-1)(0) = 0$`}.
              </p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                Theorem 29.2: {`$(-1)x = -x$`} for any rational x
              </span>
              <p className="lrn-step-content">
                Show that {`$(-1)x + x = 0$`}. Then{' '}
                {`$(-1)x + x = (-1)x + (1)x = [(-1) + 1]x = 0 \\cdot x = 0$`}. So {`$(-1)x = -x$`}{' '}
                by Basic Fact 2.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                General case: {`$(-m)(-n) = mn$`} for whole numbers m, n
              </span>
              <p className="lrn-step-content">
                {`$(-m)(-n) = [(-1)m][(-1)n] = (-1)^2(mn) = 1 \\cdot mn = mn$`} using Theorem 29.2
                twice and Theorem 29.1.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Pattern argument (not a proof)</span>
              <p>
                Extend the table: {`$(-2)(3) = -6$`}, {`$(-2)(2) = -4$`}, {`$(-2)(1) = -2$`},{' '}
                {`$(-2)(0) = 0$`}, so {`$(-2)(-1) = 2$`}. This is not a proof - it assumes the
                pattern must continue. That assumption is exactly what needs to be justified.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rigorous proof</span>
              <p>
                Use only the distributive law and the additive inverse. No pattern assumption. The
                proof of Theorem 29.1 shows {`$(-1)(-1) = 1$`} without assuming any pattern.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Basic Facts 4 and 5, and Distributive Subtraction
            </span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>Basic Fact 4:</strong> {`$(-x)y = -(xy)$`} for all rational x, y.
                </li>
                <li>
                  <strong>Basic Fact 5:</strong> {`$(-x)(-y) = xy$`} for all rational x, y.
                </li>
                <li>
                  <strong>Distributive law for subtraction:</strong> {`$x(y - z) = xy - xz$`}.
                </li>
              </ul>
            </div>
          </div>

          <h2>Dividing Rational Numbers</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If division means "find the unique z such that x = z · y," what happens when y = 0?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No unique z exists. If {`$x \\neq 0$`}, there is no solution. If {`$x = 0$`}, every
                z works. Division by zero is undefined.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Division of Rational Numbers</span>
            <div className="lrn-definition-desc">
              For nonzero y, the quotient x ÷ y is the unique rational z such that x = z · y. We
              write {`$x \\div y = x \\cdot y^{-1} = x/y$`}.
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiplicative Inverse</span>
            <div className="lrn-definition-desc">
              For any nonzero rational y, the <strong>multiplicative inverse</strong> {`$y^{-1}$`}{' '}
              is the unique number satisfying {`$y \\cdot y^{-1} = 1$`}. It exists and is unique.
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example: solve {`$\\frac{1}{3} = (-5)z$`}</span>
              <p className="lrn-step-content">
                {`$z = \\frac{1}{3} \\div (-5) = \\frac{1}{3} \\cdot (-5)^{-1}$`}.
              </p>
              <p className="lrn-step-content">
                Since {`$(-5)(-\\frac{1}{5}) = 1$`}, we have {`$(-5)^{-1} = -\\frac{1}{5}$`}.
              </p>
              <p className="lrn-step-content">
                So {`$z = \\frac{1}{3} \\cdot (-\\frac{1}{5}) = -\\frac{1}{15}$`}.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>For y negative: write {`$y = -t$`} where t is positive.</p>
            <p>
              Then {`$(-t) \\cdot (-1/t) = t/t = 1$`}, so {`$y^{-1} = -1/t$`}.
            </p>
            <p>
              The inverse of a negative number is negative - same absolute value as the positive
              inverse, but with the opposite sign.
            </p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Zero Product Property</span>
            <div className="lrn-definition-desc">
              If {`$xy = 0$`} and {`$y \\neq 0$`}, then {`$x = 0$`}. Proof: multiply both sides by{' '}
              {`$y^{-1}$`}: {`$x = xy \\cdot y^{-1} = 0 \\cdot y^{-1} = 0$`}.
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Sign rules for quotients</span>
            <div className="lrn-definition-desc">
              For integers a, b with {`$b \\neq 0$`}:
              <div className="lrn-eq">
                <span>{`$$\\frac{-a}{b} = \\frac{a}{-b} = -\\frac{a}{b}$$`}</span>
              </div>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rational Quotients (a)–(d)</span>
            <div className="lrn-definition-desc">
              All properties of complex fractions (fractions whose top or bottom is itself a
              fraction) extend to rational quotients:
              <ul className="lrn-list">
                <li>
                  <strong>(a) Equivalent fractions:</strong> {`$\\frac{X}{Y} = \\frac{ZX}{ZY}$`} for
                  nonzero Z.
                </li>
                <li>
                  <strong>(b) Addition:</strong>{' '}
                  {`$\\frac{X}{Y} \\pm \\frac{Z}{W} = \\frac{XW \\pm ZY}{YW}$`}.
                </li>
                <li>
                  <strong>(c) Multiplication:</strong>{' '}
                  {`$\\frac{X}{Y} \\cdot \\frac{Z}{W} = \\frac{XZ}{YW}$`}.
                </li>
                <li>
                  <strong>(d) Distributivity:</strong>{' '}
                  {`$\\frac{U}{V}\\left(\\frac{X}{Y} \\pm \\frac{Z}{W}\\right) = \\frac{U}{V}\\cdot\\frac{X}{Y} \\pm \\frac{U}{V}\\cdot\\frac{Z}{W}$`}
                  .
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\left(\\frac{X}{Y}\\right)^{-1} = \\frac{Y}{X} \\quad \\text{(30.1)}$$`}</span>
          </div>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\frac{X/Y}{Z/W} = \\frac{X}{Y} \\cdot \\frac{W}{Z} \\quad \\text{(30.2)}$$`}</span>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example: {`$(−3/5) \\div (2.4/(−7))$`}</span>
              <p className="lrn-step-content">
                Apply (30.2):{' '}
                {`$\\frac{-3/5}{2.4/(-7)} = \\frac{-3}{5} \\cdot \\frac{-7}{2.4} = \\frac{(-3)(-7)}{5 \\times 2.4} = \\frac{21}{12} = \\frac{7}{4}$`}
                .
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$(X/Y)^{-1} = Y/X$`}? Explain why this follows from the definition of
              multiplicative inverse before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>The inverse of X/Y is the number that, when multiplied by X/Y, gives 1.</p>
              <p>
                Check: {`$(X/Y)(Y/X) = XY/(YX) = 1$`} by rule (c). So Y/X satisfies the definition.
                Uniqueness of the inverse confirms it is the only such number.
              </p>
            </details>
          </div>

          <h2>Ordering Rational Numbers</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If {`$x < y$`}, what happens to the inequality when you multiply both sides by a
              negative number?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The inequality flips. If {`$x < y$`} and {`$z < 0$`}, then {`$xz > yz$`}.
              </p>
              <p>
                Multiplying by a negative reflects both sides across 0, swapping their positions.
              </p>
            </details>
          </div>

          <p>On the number line: {`$x < y$`} means x is to the left of y.</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Inequalities (A)–(H)</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>(A)</strong> {`$x < y \\Leftrightarrow -x > -y$`}. Negating flips the
                  order.
                </li>
                <li>
                  <strong>(B)</strong> {`$x < y \\Rightarrow x + z < y + z$`}. Adding the same value
                  preserves order.
                </li>
                <li>
                  <strong>(C)</strong> {`$x < y \\Leftrightarrow y - x > 0$`}.
                </li>
                <li>
                  <strong>(D)</strong> {`$x < y$`} and {`$z > 0 \\Rightarrow xz < yz$`}. Positive
                  multiplier preserves order.
                </li>
                <li>
                  <strong>(E)</strong> {`$x < y$`} and {`$z < 0 \\Rightarrow xz > yz$`}. Negative
                  multiplier reverses order.
                </li>
                <li>
                  <strong>(F)</strong> {`$x > 0 \\Leftrightarrow 1/x > 0$`}.
                </li>
                <li>
                  <strong>(G)</strong> Dividing by positive preserves order; dividing by negative
                  reverses it.
                </li>
                <li>
                  <strong>(H) Cross-multiplication:</strong> For {`$X/Y$`} and {`$Z/W$`} with{' '}
                  <strong>positive denominators</strong> Y, W:{' '}
                  {`$X/Y < Z/W \\Leftrightarrow XW < ZY$`}.
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-graph">
            <InequalityFlipDiagram C={C} />
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Critical restriction on (H)</span>
            <p>
              The cross-multiplication algorithm works only when both denominators are positive.
              With fractions this is automatic. With rational numbers, a denominator can be
              negative. Always convert to positive denominators before applying (H).
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>Why does multiplying by a negative flip the inequality?</p>
            <p>
              If {`$x < y$`}, then {`$y - x > 0$`} by (C). For {`$z < 0$`}, we have {`$-z > 0$`}.
            </p>
            <p>
              So {`$(y - x)(-z) > 0$`} by (D). Distributing: {`$(y)(-z) + (-x)(-z) = -yz + xz > 0$`}
              , meaning {`$xz > yz$`}.
            </p>
            <p>On the number line: reflection across 0 swaps left and right.</p>
          </div>

          <h2>Powers of Rational Numbers</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If {`$0 < x < 1$`} and m is bigger than n, is {`$x^m$`} bigger or smaller than{' '}
              {`$x^n$`}? Think about what happens when you multiply a number less than 1 by itself
              repeatedly.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$x^m$`} is smaller than {`$x^n$`}. Each multiplication by x (which is less than 1)
                makes the product smaller.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Powers</span>
            <div className="lrn-definition-desc">
              For any rational number x and integer n:
              <ul className="lrn-list">
                <li>{`$x^n = x \\cdot x \\cdots x$`} (n factors) for positive integer n.</li>
                <li>{`$x^0 = 1$`} for any nonzero x.</li>
                <li>{`$x^{-n} = 1/x^n$`} for nonzero x and positive integer n.</li>
                <li>{`$x^m \\cdot x^n = x^{m+n}$`} for all integers m, n (equation 31.1).</li>
              </ul>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Power inequalities (I) and (J)</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>(I)</strong> If {`$x > 1$`} and m &gt; n, then {`$x^m > x^n$`}. If{' '}
                  {`$0 < x < 1$`} and m &gt; n, then {`$x^m < x^n$`}.
                </li>
                <li>
                  <strong>(J)</strong> If {`$0 < x < y$`} and n is a positive whole number, then{' '}
                  {`$x^n < y^n$`}.
                </li>
              </ul>
            </div>
          </div>

          <h2>Absolute Value</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The speed of light c is measured as approximately 299,792,458 m/s, with a possible
              error of 1.2 m/s. How would you write this as an inequality involving absolute value?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$|c - 299{,}792{,}458| \\leq 1.2$`}. The true value is within 1.2 of the measured
                value.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute Value</span>
            <div className="lrn-definition-desc">
              The <strong>absolute value</strong> {`$|x|$`} is the <strong>distance</strong> from x
              to 0. It is never negative.
              <div className="lrn-eq">
                <span>{`$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$`}</span>
              </div>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Not just "remove the minus sign"</span>
            <p>
              The school rule "remove the minus sign" is misleading. The correct idea is distance
              from 0. This distance view connects absolute value to limits and analysis in advanced
              mathematics.
            </p>
          </div>

          <div className="lrn-eq">
            <span>{`$$|x| < b \\Leftrightarrow x \\in (-b, b) \\quad \\text{(31.2)}$$`}</span>
          </div>

          <div className="lrn-graph">
            <AbsoluteValueDiagram C={C} />
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Key properties of absolute value</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  {`$|x||y| = |xy|$`} - the absolute value of a product equals the product of
                  absolute values.
                </li>
                <li>
                  <strong>Triangle inequality:</strong> {`$|x + y| \\leq |x| + |y|$`}.
                </li>
                <li>
                  <strong>Cauchy-Schwarz inequality</strong> (a sharper bound for pairs of numbers):{' '}
                  {`$|ac + bd| \\leq \\sqrt{a^2 + b^2}\\sqrt{c^2 + d^2}$`}.
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>Triangle inequality: think of it as travel distance.</p>
            <p>
              Going from 0 to x takes distance {`$|x|$`}. Going from x to x + y takes distance{' '}
              {`$|y|$`}. Total: {`$|x| + |y|$`}.
            </p>
            <p>
              The direct route from 0 to x + y is {`$|x + y|$`}. A direct route is never longer than
              a detour.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$|x| < b$`} mean the same as {`$x \\in (-b, b)$`}? Form your answer before
              reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$|x| < b$`} means the distance from x to 0 is less than b.</p>
              <p>
                On the number line, this means x lies strictly between −b and b - the open interval
                (−b, b).
              </p>
            </details>
          </div>

          <div className="lrn-insight">
            <p>
              In most school curricula, absolute value is taught in isolation. Its real importance
              is in advanced mathematics: it defines distance, which in turn defines limits,
              continuity, and all of analysis.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'A point p is 5 units to the right of 0. Where is p*?',
        a: 'p* is 5 units to the left of 0, at the point −5. The mirror reflection p* is defined as the point the same distance from 0 as p but on the opposite side. Since p is at 5, p* is at −5.'
      },
      {
        q: 'Compute (−3)(−5) and explain why the result is positive.',
        a: '(−3)(−5) = 15. By Basic Fact 5, (−x)(−y) = xy for all rational x, y. Here x = 3, y = 5, so (−3)(−5) = 3 × 5 = 15. The result is positive because the proof of (−1)(−1) = 1 uses only the distributive law - not a pattern or an analogy.'
      },
      {
        q: 'What is the solution to 7 + x = 5 in rational numbers?',
        a: 'x = −2. Rational numbers include all mirror reflections of fractions, so −2 is a valid rational number. Check: 7 + (−2) = 5. This equation has no solution in whole numbers or fractions because those systems do not include negative numbers.'
      },
      {
        q: 'Compute $\\left(\\frac{4}{3}\\right)^* + \\left(\\frac{2}{5}\\right)^*$.',
        a: '$\\left(\\frac{4}{3}\\right)^* + \\left(\\frac{2}{5}\\right)^* = \\left(\\frac{4}{3} + \\frac{2}{5}\\right)^*$. By rule (27.1), the sum of two reflections is the reflection of the sum. Convert: $\\frac{4}{3} + \\frac{2}{5} = \\frac{20}{15} + \\frac{6}{15} = \\frac{26}{15}$. Result: $\\left(\\frac{26}{15}\\right)^*$. Both vectors point left, so their total length is the sum of the lengths.'
      },
      {
        q: 'True or false: the "pattern argument" proves that negative × negative = positive.',
        a: "False. The pattern argument extends a multiplication table and assumes the pattern must continue - but that assumption is exactly what needs to be proved. A valid proof uses only the distributive law. Wu's proof shows (−1)(−1) + (−1) = (−1)[(−1) + 1] = (−1)(0) = 0, so (−1)(−1) = 1 by the uniqueness of the additive inverse."
      },
      {
        q: 'Compute 2 + 5*.',
        a: '2 + 5* = (5 − 2)* = 3*. Since 2 < 5, use rule (27.3): s + t* = (t − s)* when s < t. Here s = 2, t = 5, so the result is 3*. The vector for 5* is longer and points left, so the combined vector points left with length 3.'
      },
      {
        q: 'Transfer: a thermometer reads −8 in the morning and 3 in the afternoon. Write this change as a rational number addition and compute it.',
        a: 'Start at −8, add 11: (−8) + 11. Since the vectors point in opposite directions and the positive vector (length 11) is longer, use (27.2) reversed: result is 11 − 8 = 3. The endpoint is 3, confirming the afternoon temperature.'
      },
      {
        q: 'If x + y = x, what can you conclude about y? Prove it.',
        a: 'y = 0. Proof (Basic Fact 1): add x* to both sides to get x* + (x + y) = x* + x. Left side: (x* + x) + y = 0 + y = y by (A1) and (A2). Right side: x* + x = 0 by (A2). So y = 0. This uses only assumptions (A1)–(A3).'
      },
      {
        q: 'Elaborate: why does the definition x − y = x + (−y) remove the restriction that was needed for fraction subtraction?',
        a: 'Fraction subtraction s − t required s ≥ t because the result had to be non-negative - fractions only go down to zero. Rational subtraction x − y = x + (−y) is defined for all x and y because rational numbers include all reflections. The result can be negative, which is a valid rational number.'
      },
      {
        q: 'Predict: if you multiply both sides of 3 < 7 by −2, what happens?',
        a: 'The inequality flips: 3 × (−2) > 7 × (−2), that is −6 > −14. By inequality (E): x < y and z < 0 implies xz > yz. Multiplying by −2 reflects and stretches both sides. On the number line −6 is to the right of −14, so −6 > −14.'
      },
      {
        q: 'Compute $\\frac{15}{4} + \\left(\\frac{5}{3}\\right)^*$.',
        a: '$\\frac{15}{4} + \\left(\\frac{5}{3}\\right)^* = \\frac{15}{4} - \\frac{5}{3}$. Since $\\frac{15}{4} = 3.75 > \\frac{5}{3} \\approx 1.67$, use rule (27.2): $s + t^* = s - t$. Compute: $\\frac{15}{4} - \\frac{5}{3} = \\frac{45}{12} - \\frac{20}{12} = \\frac{25}{12}$. The result is positive because the positive vector was longer.'
      },
      {
        q: 'Transfer: on a number line, point A is at $-\\frac{5}{2}$ and point B is at $\\frac{7}{3}$. Compute A + B.',
        a: '$\\left(-\\frac{5}{2}\\right) + \\frac{7}{3}$. The vectors point in opposite directions. $\\left|-\\frac{5}{2}\\right| = 2.5$ and $\\left|\\frac{7}{3}\\right| \\approx 2.33$. Since $\\frac{5}{2} > \\frac{7}{3}$, the negative vector is longer. Use (27.3) adapted: result is $-\\!\\left(\\frac{5}{2} - \\frac{7}{3}\\right) = -\\!\\left(\\frac{15}{6} - \\frac{14}{6}\\right) = -\\frac{1}{6}$. The endpoint is $\\frac{1}{6}$ to the left of 0.'
      },
      {
        q: 'What is $\\left(-\\frac{3}{5}\\right) \\div \\frac{2.4}{-7}$?',
        a: '$\\left(-\\frac{3}{5}\\right) \\div \\frac{2.4}{-7} = \\left(-\\frac{3}{5}\\right) \\times \\left(-\\frac{7}{2.4}\\right)$ by the invert-and-multiply rule (30.2). Multiply: $\\frac{(-3)(-7)}{5 \\times 2.4} = \\frac{21}{12} = \\frac{7}{4}$. The two negatives cancel by Basic Fact 5: $(-x)(-y) = xy$.'
      },
      {
        q: 'Elaborate: why is the cross-multiplication algorithm restricted to positive denominators when comparing rational numbers?',
        a: 'For fractions, denominators are always positive, so multiplying by Y and W (both positive) preserves the inequality. For rational numbers, a denominator can be negative. Multiplying by a negative number flips the inequality (rule E). So cross-multiplication gives the wrong answer if a denominator is negative - you must use positive denominators only.'
      },
      {
        q: 'If |x| < 4, what are the possible values of x?',
        a: 'x ∈ (−4, 4). By equation (31.2), |x| < b ⟺ x ∈ (−b, b). Here b = 4. The condition means the distance from x to 0 is less than 4, so x lies strictly between −4 and 4.'
      },
      {
        q: 'Self-explain: why does (−x)(−y) = xy follow from the theorem that (−1)x = −x?',
        a: '(−x)(−y) = [(−1)x][(−1)y] by Theorem 29.2 applied to both factors. Then [(−1)x][(−1)y] = (−1)²(xy) = 1 · xy = xy. The key step is that every negative number equals (−1) times a positive number. Theorem 29.2 connects the multiplicative structure (times −1) to the additive inverse, making Basic Fact 5 a direct consequence.'
      },
      {
        q: 'Predict: if 0 < x < 1 and n is a large positive whole number, is x^n larger or smaller than x?',
        a: 'x^n is smaller than x for n > 1. By inequality (I), when 0 < x < 1, higher powers are smaller: x² < x¹ = x, x³ < x², and so on. Each multiplication by x makes the product smaller because x < 1. For example, (0.5)³ = 0.125 < 0.5.'
      },
      {
        q: 'Transfer: in a bank account, a withdrawal of 45 is followed by a deposit of 20. Express this as a rational number sum and find the net change.',
        a: 'Net change = (−45) + 20. The vectors point in opposite directions; 45 > 20 so the negative vector is longer. Use (27.3): result is −(45 − 20) = −25. The account balance decreases by 25. The withdrawal vector (length 45, left) dominates the deposit vector (length 20, right).'
      },
      {
        q: 'Prove that the additive inverse of any rational number is unique.',
        a: 'Suppose x + y = 0 and x + z = 0. Subtract: (x + y) − (x + z) = 0 − 0 = 0. Using the definition of subtraction and commutativity: y − z = 0, so y = z. Any two numbers that both sum to zero with x must be equal. This is Basic Fact 2.'
      },
      {
        q: 'Elaborate: why is the absolute value interpretation as "distance from 0" more useful than "remove the minus sign"?',
        a: 'The "remove the minus sign" rule fails to explain: (1) why |x + y| ≤ |x| + |y| (the triangle inequality), (2) why |x| < b means x lies in an interval, and (3) how absolute value generalises. The distance interpretation generalises naturally - |x − y| becomes the distance between x and y, and |x| < b defines a ball of radius b. This is the foundation of limits and continuity.'
      },
      {
        q: 'Compute 9 + 5* using only assumptions (A1)–(A3).',
        a: '9 + 5* = 4. Proof: (9 + 5*) + 5 = 9 + (5* + 5) = 9 + 0 = 9 by (A1) and (A2). Also 4 + 5 = 9 from fraction arithmetic (part of A1). Both 9 + 5* and 4 satisfy "? + 5 = 9". By Basic Fact 1, 9 + 5* = 4.'
      },
      {
        q: 'Predict: if $x = -\\frac{1}{3}$, what is $x^{-2}$?',
        a: '$x^{-2} = 9$. First: $x^2 = \\left(-\\frac{1}{3}\\right)^2 = \\left(-\\frac{1}{3}\\right)\\left(-\\frac{1}{3}\\right) = \\frac{1}{9}$ by Basic Fact 5. Then: $x^{-2} = \\frac{1}{x^2} = \\frac{1}{\\frac{1}{9}} = 9$. The negative sign disappears because the exponent is even.'
      },
      {
        q: 'Transfer: compare $-\\frac{7}{3}$ and $-\\frac{5}{4}$ using the ordering rules. Which is larger?',
        a: '$-\\frac{5}{4} > -\\frac{7}{3}$. Convert to the same denominator: $-\\frac{7}{3} = -\\frac{28}{12}$ and $-\\frac{5}{4} = -\\frac{15}{12}$. Since $-15 > -28$, we have $-\\frac{15}{12} > -\\frac{28}{12}$, so $-\\frac{5}{4} > -\\frac{7}{3}$. Alternatively, use inequality (A): $x < y \\Leftrightarrow -x > -y$. Since $\\frac{7}{3} > \\frac{5}{4}$ (as positive numbers), we have $-\\frac{7}{3} < -\\frac{5}{4}$.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Rational Numbers',
      sections: [
        <>
          <h2>Core Definitions</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rational numbers</span>
            <div className="lrn-definition-desc">
              All fractions and their mirror reflections across 0.
              <br />
              <strong>When to use:</strong> Whenever you need to solve {`$a + x = b$`} for any
              rational a, b, or whenever subtraction might give a negative result.
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Mirror reflection p* (= −p)</span>
            <div className="lrn-definition-desc">
              Same distance from 0 as p, opposite side. Key facts: {`$0^* = 0$`}, {`$p^{**} = p$`}.
              <br />
              <strong>When to use:</strong> Any time you need the additive inverse of a number.
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Containment</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$\\text{whole numbers} \\subset \\text{integers} \\subset \\text{rational numbers}$$`}</span>
              </div>
            </div>
          </div>

          <h2>Addition and Subtraction - Hero Formulas</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$x + y = \\text{endpoint of } \\vec{x} + \\vec{y}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> When justifying why addition of rationals is well-defined
            and commutative.
          </p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$x - y = x + (-y)$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Always. Subtraction is addition of the inverse.
          </p>

          <h2>Explicit Computation Rules</h2>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rule</span>
              <p>{`$x^* + y^* = (x+y)^*$`}</p>
              <p>{`$s + t^* = s - t$`} (s ≥ t)</p>
              <p>{`$s + t^* = (t-s)^*$`} (s &lt; t)</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">When to use</span>
              <p>Adding two negative numbers.</p>
              <p>Adding a positive and negative when the positive is larger.</p>
              <p>Adding a positive and negative when the negative part is larger.</p>
            </div>
          </div>

          <h2>Multiplication - Key Results</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$(-1)(-1) = 1 \\quad \\text{(Theorem 29.1)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Foundation for all negative × negative = positive results.
          </p>

          <div className="lrn-eq">
            <span>{`$$(-x)(-y) = xy \\quad \\text{(Basic Fact 5)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Multiplying two numbers with the same sign.
          </p>

          <div className="lrn-eq">
            <span>{`$$(-x)y = -(xy) \\quad \\text{(Basic Fact 4)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Multiplying numbers with opposite signs.
          </p>

          <div className="lrn-eq">
            <span>{`$$(-1)x = -x \\quad \\text{(Theorem 29.2)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Converting "multiply by −1" to "take the additive
            inverse."
          </p>

          <h2>Division - Hero Formulas</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\left(\\frac{X}{Y}\\right)^{-1} = \\frac{Y}{X} \\quad \\text{(30.1)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Finding the reciprocal of any rational quotient.
          </p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\frac{X/Y}{Z/W} = \\frac{X}{Y} \\cdot \\frac{W}{Z} \\quad \\text{(30.2 - invert and multiply)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Dividing one fraction by another.
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{-a}{b} = \\frac{a}{-b} = -\\frac{a}{b}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Moving the negative sign in a fraction.
          </p>

          <h2>Sign rules for division</h2>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Same sign → positive</span>
              <p>
                {`$\\frac{+}{+} = +$`} and {`$\\frac{-}{-} = +$`}.
              </p>
              <p>Example: {`$\\frac{-6}{-3} = 2$`}.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Opposite sign → negative</span>
              <p>
                {`$\\frac{+}{-} = -$`} and {`$\\frac{-}{+} = -$`}.
              </p>
              <p>Example: {`$\\frac{-6}{3} = -2$`}.</p>
            </div>
          </div>
          <p>
            <strong>When to use:</strong> Determining the sign of a quotient before computing its
            value.
          </p>

          <h2>Inequalities - Summary Table</h2>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rule</span>
              <p>(A): {`$x < y \\Leftrightarrow -x > -y$`}</p>
              <p>(B): {`$x < y \\Rightarrow x+z < y+z$`}</p>
              <p>(C): {`$x < y \\Leftrightarrow y-x > 0$`}</p>
              <p>(D): {`$x < y, z > 0 \\Rightarrow xz < yz$`}</p>
              <p>(E): {`$x < y, z < 0 \\Rightarrow xz > yz$`}</p>
              <p>(F): {`$x > 0 \\Leftrightarrow 1/x > 0$`}</p>
              <p>(G): positive divisor → preserves; negative → reverses</p>
              <p>(H): {`$X/Y < Z/W \\Leftrightarrow XW < ZY$`} (Y, W &gt; 0 required)</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">When to use</span>
              <p>Negating both sides of an inequality.</p>
              <p>Adding the same value to both sides.</p>
              <p>Checking if x is less than y via their difference.</p>
              <p>Multiplying by a positive number.</p>
              <p>Multiplying by a negative number - flip!</p>
              <p>Checking the sign of a reciprocal.</p>
              <p>Dividing both sides of an inequality.</p>
              <p>Comparing two fractions with positive denominators.</p>
            </div>
          </div>

          <h2>Absolute Value</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$|x| < b \\Leftrightarrow x \\in (-b, b) \\quad \\text{(31.2)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Converting absolute value inequalities to intervals, or
            expressing measurement error.
          </p>

          <div className="lrn-eq">
            <span>{`$$|x + y| \\leq |x| + |y| \\quad \\text{(triangle inequality)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Bounding the size of a sum. Used in proofs involving
            limits and approximation.
          </p>

          <div className="lrn-eq">
            <span>{`$$|ac + bd| \\leq \\sqrt{a^2 + b^2}\\,\\sqrt{c^2 + d^2} \\quad \\text{(Cauchy-Schwarz)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Bounding inner products; foundational in linear algebra
            and analysis.
          </p>

          <h2>Powers</h2>

          <div className="lrn-eq">
            <span>{`$$x^m \\cdot x^n = x^{m+n} \\quad \\text{(31.1, all integers } m, n\\text{)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Combining powers of the same base.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">x &gt; 1 and m &gt; n</span>
              <p>Higher powers are larger: {`$x^m > x^n$`}.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">0 &lt; x &lt; 1 and m &gt; n</span>
              <p>Higher powers are smaller: {`$x^m < x^n$`}.</p>
            </div>
          </div>
          <p>
            <strong>When to use (I):</strong> Comparing powers of the same base.
          </p>
          <p>
            <strong>When to use (J):</strong> Comparing the same power applied to two different
            positive bases.
          </p>
        </>
      ]
    },
    customCss: `
      .mafs-container { --mafs-bg: transparent; }
    `
  }

  return <LearningTemplate config={config} />
}
