import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'

import {
  MirrorReflectionDiagram,
  VectorAdditionDiagram,
  TwoSidedNumberLine,
  InequalityFlipDiagram,
  AbsoluteValueDiagram
} from '../../../../components/viz'

export default function RationalNumbers() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'rtn',
    documentTitle: 'Rational Numbers - AETHER',
    learning: {
      category: 'Arithmetic',
      title: 'Rational Numbers',
      subtitle: 'The complete number line: negatives, operations, and order',
      sections: [
        <>
          <h2>Starting Point: The Two-Sided Number Line</h2>

          <p>
            In <em>Number Line and Number Systems</em> you met the two-sided number line. You
            learned that numbers to the right of 0 are positive, numbers to the left are negative,
            and the whole numbers sit inside the integers, which sit inside the rational numbers.
          </p>
          <p>
            A <strong>rational number</strong> is any fraction or the reflection of a fraction
            across 0. This page builds on that to add, subtract, multiply, and divide all of them.
          </p>

          <p>Here is the line, with negatives on the left and positives on the right.</p>

          <div className="lrn-graph">
            <TwoSidedNumberLine />
          </div>
          <p>Zero sits in the middle. Each step left or right is one unit.</p>

          <p>
            We need one piece of notation first. Every point p to the right of 0 has a mirror
            reflection across 0, the same distance away on the other side. We write that reflection
            as <strong>p*</strong> (read "p-star").
          </p>

          <div className="lrn-graph">
            <MirrorReflectionDiagram C={C} />
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Mirror Reflection p*</span>
            <div className="lrn-definition-desc">
              For any point p, <strong>p*</strong> is its reflection across 0: the same distance
              from 0 as p, but on the opposite side. Two facts follow. First, {`$0^* = 0$`}, because
              0 is its own reflection. Second, {`$p^{**} = p$`} (read "p-star-star"), because
              reflecting twice returns to where you started.
            </div>
          </div>

          <p>We use p* here instead of the minus sign. The reason comes later, with subtraction.</p>

        </>,
        <>
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
            Fractions let us solve equations like {`$7x = 5$`}, giving {`$x = \\frac{5}{7}$`}.
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

        </>,
        <>
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
              We write it as {`$\\vec{x}$`}. The little arrow on top means "the special vector for
              x." So {`$\\vec{x^*}$`} is the special vector ending at x*, and {`$\\vec{0}$`} is the
              special vector that starts and ends at 0. Every rational number has its own special
              vector.
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Vector Addition</span>
            <div className="lrn-definition-desc">
              To add {`$\\vec{x} + \\vec{y}$`}: place a copy of {`$\\vec{y}$`} at the endpoint of{' '}
              {`$\\vec{x}$`}. The result is the special vector to the new endpoint. This defines a
              single sum for every pair of vectors, including ones that point opposite ways.
            </div>
          </div>

          <div className="lrn-graph">
            <VectorAdditionDiagram C={C} />
          </div>

          <p>Vector addition is both commutative (order-free) and associative (grouping-free).</p>
          <p>
            Commutativity: {`$\\vec{x} + \\vec{y}$`} and {`$\\vec{y} + \\vec{x}$`} have the same
            direction and length regardless of order.
          </p>
          <p>
            Associativity means grouping does not matter:{' '}
            {`$(\\vec{x} + \\vec{y}) + \\vec{z} = \\vec{x} + (\\vec{y} + \\vec{z})$`}. Both sides
            trace the same total path. Both reach the same endpoint.
          </p>

        </>,
        <>
          <h2>Defining Addition and Subtraction</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Addition of Rational Numbers</span>
            <div className="lrn-definition-desc">
              For any rational numbers x and y, define{' '}
              <strong>x + y as the endpoint of {`$\\vec{x} + \\vec{y}$`}</strong>. This gives one
              answer for every pair of rationals, including negatives.
            </div>
          </div>

          <p>Two structural facts follow immediately from the definition.</p>

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
            <p>So $0$ is the additive identity, and $x^*$ is the additive inverse of $x$.</p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Subtraction of Rational Numbers</span>
            <div className="lrn-definition-desc">
              For any rational numbers x and y:
              <div className="lrn-eq">
                <span>{`$$x - y = x + y^* \\quad \\text{(Subtraction Rule)}$$`}</span>
              </div>
              Subtraction is not a new operation - it is addition of the reflection. So it is always
              defined, even when y is larger than x.
            </div>
          </div>

          <p>
            Once we define subtraction, we write {`$-y$`} instead of {`$y^*$`}.
          </p>
          <p>
            We also have {`$-0 = 0$`} and {`$-(-x) = x$`}.
          </p>
          <p>Subtraction then reads: {`$x - y = x + (-y)$`}.</p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Why the delayed minus sign</span>
            <p>
              We use x* before the minus sign on purpose. This stops you from mixing up "negative"
              with "subtraction." The x* notation keeps those two ideas apart until you know both
              well.
            </p>
          </div>

        </>,
        <>
          <h2>The Axiomatic Approach to Addition</h2>

          <p>Now we do the same thing a second way.</p>
          <p>Start from a small set of rules you accept. Then everything else follows by logic.</p>
          <p>This is called an axiomatic approach.</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you only know that addition is commutative and associative, that {`$x + x^* = 0$`},
              and that {`$x + 0 = x$`} - can you prove all other addition facts?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. These three assumptions - (A1), (A2), (A3) - are enough to work out every
                addition fact on this page.
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
                Abstract and short. You state three assumptions, and all properties follow by pure
                logic. The same structure is then used for multiplication.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Assumptions (A1)–(A3)</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>(A1)</strong> For positive inputs, adding works the same as adding
                  fractions. The order and grouping never change the answer.
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

          <p>From these three assumptions we now prove five facts, numbered for easy reference.</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Fact 1: if {`$x + y = x$`}, then {`$y = 0$`}
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
            <span className="lrn-definition-term">Facts 2 and 3</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>Fact 2:</strong> If {`$x + y = 0$`}, then {`$y = x^*$`} and {`$x = y^*$`}.
                  The additive inverse is unique.
                </li>
                <li>
                  <strong>Fact 3:</strong> {`$(x + y)^* = x^* + y^*$`}. The reflection of a sum
                  equals the sum of the reflections.
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the proof of Fact 1, why is "add {`$x^*$`} to both sides" the key move? Form your
              answer before reading on.
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

        </>,
        <>
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
                  <strong>(M1)</strong> For positive inputs, multiplying works the same as
                  multiplying fractions. The order and grouping never change the answer. The
                  distributive law also holds. The distributive law links multiplying and adding:{' '}
                  {`$a(b + c) = ab + ac$`}.
                </li>
                <li>
                  <strong>(M2)</strong> {`$1 \\cdot x = x$`} for any rational x.
                </li>
                <li>
                  <strong>(M3)</strong> {`$0 \\cdot x = x \\cdot 0 = 0$`} for any rational x (we
                  prove it from M1 and M2).
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Proof of (M3): {`$0 \\cdot x = (0 + 0) \\cdot x = 0 \\cdot x + 0 \\cdot x$`} by the
              distributive law.
            </p>
            <p>
              Let {`$y = 0 \\cdot x$`}. Then {`$y = y + y$`}, so {`$0 = y$`} by Fact 1.
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
            <span className="lrn-proof-header">Two-Negatives Theorem: {`$(-1)(-1) = 1$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                By Fact 2, it is enough to show {`$(-1)(-1) + (-1) = 0$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Factor: {`$(-1)(-1) + (-1) = (-1)(-1) + (-1)(1) = (-1)[(-1) + 1]$`} by the
                distributive law.
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
                Therefore {`$(-1)(-1) + (-1) = 0$`}. The reflection of {`$-1$`} is 1, so{' '}
                {`$(-1)(-1) = 1$`} by Fact 2.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In this proof, why is the key step "show that {`$(-1)(-1) + (-1) = 0$`}"? Form your
              answer before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Fact 2 says: if {`$a + b = 0$`}, then {`$a = b^*$`}.
              </p>
              <p>
                So if {`$(-1)(-1) + (-1) = 0$`}, then {`$(-1)(-1) = (-1)^* = 1$`}. The reflection of{' '}
                {`$-1$`} is 1.
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
                Negative-One Rule: {`$(-1)x = -x$`} for any rational x
              </span>
              <p className="lrn-step-content">
                Show that {`$(-1)x + x = 0$`}. Then{' '}
                {`$(-1)x + x = (-1)x + (1)x = [(-1) + 1]x = 0 \\cdot x = 0$`}. So {`$(-1)x = -x$`}{' '}
                by Fact 2.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                General case: {`$(-m)(-n) = mn$`} for whole numbers m, n
              </span>
              <p className="lrn-step-content">
                {`$(-m)(-n) = [(-1)m][(-1)n] = (-1)(-1)(mn) = 1 \\cdot mn = mn$`} using the
                Negative-One Rule twice and the Two-Negatives Theorem.
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
                Two-Negatives Theorem shows {`$(-1)(-1) = 1$`} without assuming any pattern.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Facts 4 and 5, and Distributive Subtraction</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>Fact 4:</strong> {`$(-x)y = -(xy)$`} for all rational x, y.
                </li>
                <li>
                  <strong>Fact 5:</strong> {`$(-x)(-y) = xy$`} for all rational x, y.
                </li>
                <li>
                  <strong>Distributive law for subtraction:</strong> {`$x(y - z) = xy - xz$`}.
                </li>
              </ul>
            </div>
          </div>

        </>,
        <>
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
              For nonzero y, the quotient (the answer to a division) x ÷ y is the unique rational z
              such that x = z · y. We write {`$x \\div y = x \\cdot y^{-1} = x/y$`}.
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiplicative Inverse</span>
            <div className="lrn-definition-desc">
              For any nonzero rational y, the <strong>multiplicative inverse</strong> {`$y^{-1}$`}{' '}
              is the unique number satisfying {`$y \\cdot y^{-1} = 1$`}. It exists and is unique.
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>For y negative: write {`$y = -t$`} where t is positive.</p>
            <p>
              Then {`$(-t) \\cdot \\left(-\\frac{1}{t}\\right) = \\frac{t}{t} = 1$`}, so{' '}
              {`$y^{-1} = -\\frac{1}{t}$`}.
            </p>
            <p>
              The inverse of a negative number is negative - same absolute value as the positive
              inverse, but with the opposite sign.
            </p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Zero Product Property</span>
            <div className="lrn-definition-desc">
              If a product is zero, one of the parts must be zero. So if {`$xy = 0$`} and{' '}
              {`$y \\neq 0$`}, then {`$x = 0$`}. Proof: multiply both sides by {`$y^{-1}$`}:{' '}
              {`$x = xy \\cdot y^{-1} = 0 \\cdot y^{-1} = 0$`}.
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
              Here X, Y, Z, W stand for any rational numbers, including negatives. All properties of
              complex fractions (fractions whose top or bottom is itself a fraction) also work for
              rational quotients:
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

          <p>Two rules state the structure of division as fractions.</p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\left(\\frac{X}{Y}\\right)^{-1} = \\frac{Y}{X} \\quad \\text{(Reciprocal Rule)}$$`}</span>
          </div>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\frac{X/Y}{Z/W} = \\frac{X}{Y} \\cdot \\frac{W}{Z} \\quad \\text{(Invert-and-Multiply Rule)}$$`}</span>
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
                Check: {`$(X/Y)(Y/X) = XY/(YX) = 1$`} by the fraction multiplication rule. So Y/X
                satisfies the definition. Uniqueness of the inverse confirms it is the only such
                number.
              </p>
            </details>
          </div>

        </>,
        <>
          <h2>Ordering, Powers, and Absolute Value</h2>

          <p>
            You already learned how to compare, raise to powers, and take the absolute value of
            signed numbers in <em>Opposite Numbers and Absolute Value</em>.
          </p>
          <p>
            Those rules carry over to all rational numbers without change. Here we only confirm what
            you already know.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">What you can already do</span>
            <ul className="lrn-list">
              <li>
                <strong>Order:</strong> {`$x < y$`} means x sits to the left of y. Multiplying both
                sides by a negative flips the inequality.
              </li>
              <li>
                <strong>Powers:</strong> {`$x^n$`} means x multiplied by itself n times, with{' '}
                {`$x^0 = 1$`} and {`$x^{-n} = \\frac{1}{x^n}$`} for nonzero x.
              </li>
              <li>
                <strong>Absolute value:</strong> {`$|x|$`} is the distance from x to 0, so it is
                never negative.
              </li>
            </ul>
          </div>

          <p>Watch the order flip when you multiply both sides by a negative.</p>

          <div className="lrn-graph">
            <InequalityFlipDiagram />
          </div>
          <p>
            The top line shows a and b. The bottom line shows them times k. A negative k swaps which
            point is on the left.
          </p>

          <p>Absolute value is the distance from 0. It catches both sides at once.</p>

          <div className="lrn-graph">
            <AbsoluteValueDiagram />
          </div>
          <p>
            The thick band holds every x with {`$|x| < c$`}. It runs from {`$-c$`} to {`$+c$`}{' '}
            around 0.
          </p>

          <p>
            All of these worked for fractions and integers. They work the same way for every
            rational number.
          </p>
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
        a: '(−3)(−5) = 15. By Fact 5, (−x)(−y) = xy for all rational x, y. Here x = 3, y = 5, so (−3)(−5) = 3 × 5 = 15. The result is positive because the proof of (−1)(−1) = 1 uses only the distributive law - not a pattern or an analogy.'
      },
      {
        q: 'What is the solution to 7 + x = 5 in rational numbers?',
        a: 'x = −2. Rational numbers include all mirror reflections of fractions, so −2 is a valid rational number. Check: 7 + (−2) = 5. This equation has no solution in whole numbers or fractions because those systems do not include negative numbers.'
      },
      {
        q: 'True or false: the "pattern argument" proves that negative × negative = positive.',
        a: 'False. The pattern argument extends a multiplication table and assumes the pattern must continue. That assumption is exactly what you must prove. A valid proof uses only the distributive law. The proof shows (−1)(−1) + (−1) = (−1)[(−1) + 1] = (−1)(0) = 0, so (−1)(−1) = 1 by the uniqueness of the additive inverse.'
      },
      {
        q: 'If x + y = x, what can you conclude about y? Prove it.',
        a: 'y = 0. Proof (Fact 1): add x* to both sides to get x* + (x + y) = x* + x. Left side: (x* + x) + y = 0 + y = y by (A1) and (A2). Right side: x* + x = 0 by (A2). So y = 0. This uses only assumptions (A1)–(A3).'
      },
      {
        q: 'Elaborate: why does the definition x − y = x + (−y) remove the restriction that was needed for fraction subtraction?',
        a: 'Fraction subtraction s − t required s ≥ t because the result had to be non-negative - fractions only go down to zero. Rational subtraction x − y = x + (−y) is defined for all x and y because rational numbers include all reflections. The result can be negative, which is a valid rational number.'
      },
      {
        q: 'Predict: if you multiply both sides of 3 < 7 by −2, what happens?',
        a: 'The inequality flips: 3 × (−2) > 7 × (−2), that is −6 > −14. Multiplying both sides by a negative reverses the order. Multiplying by −2 reflects and stretches both sides. On the number line −6 is to the right of −14, so −6 > −14.'
      },
      {
        q: 'Self-explain: why does (−x)(−y) = xy follow from the Negative-One Rule (−1)x = −x?',
        a: '(−x)(−y) = [(−1)x][(−1)y] by the Negative-One Rule applied to both factors. Then [(−1)x][(−1)y] = (−1)(−1)(xy) = 1 · xy = xy. The key step is that every negative number equals (−1) times a positive number. The Negative-One Rule links "multiply by −1" to "take the opposite." That makes Fact 5 follow directly.'
      },
      {
        q: 'Prove that the additive inverse of any rational number is unique.',
        a: 'Suppose x + y = 0 and x + z = 0. Subtract: (x + y) − (x + z) = 0 − 0 = 0. Using the definition of subtraction and commutativity: y − z = 0, so y = z. Any two numbers that both sum to zero with x must be equal. This is Fact 2.'
      },
      {
        q: 'Compute 9 + 5* using only assumptions (A1)–(A3).',
        a: '9 + 5* = 4. Proof: (9 + 5*) + 5 = 9 + (5* + 5) = 9 + 0 = 9 by (A1) and (A2). Also 4 + 5 = 9 from fraction arithmetic (part of A1). Both 9 + 5* and 4 satisfy "? + 5 = 9". By Fact 1, 9 + 5* = 4.'
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

          <h2>How the Operations Are Defined</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$x + y = \\text{endpoint of } \\vec{x} + \\vec{y}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> When you justify why addition of rationals gives exactly
            one answer and does not depend on order.
          </p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$x - y = x + (-y)$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Always. Subtraction is addition of the inverse.
          </p>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\frac{x}{y} = x \\cdot y^{-1}, \\quad y \\cdot y^{-1} = 1$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> When you justify why division is multiplication by the
            unique inverse, and why dividing by 0 has no answer.
          </p>

          <h2>Structural Results of the System</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$(-1)(-1) = 1 \\quad \\text{(Two-Negatives Theorem)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Foundation for all negative × negative = positive results.
          </p>

          <div className="lrn-eq">
            <span>{`$$(-x)(-y) = xy \\quad \\text{(Fact 5)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Multiplying two numbers with the same sign.
          </p>

          <div className="lrn-eq">
            <span>{`$$(-x)y = -(xy) \\quad \\text{(Fact 4)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Multiplying numbers with opposite signs.
          </p>

          <div className="lrn-eq">
            <span>{`$$(-1)x = -x \\quad \\text{(Negative-One Rule)}$$`}</span>
          </div>
          <p>
            <strong>When to use:</strong> Converting "multiply by −1" to "take the additive
            inverse."
          </p>

          <h2>Ordering, Powers, and Absolute Value</h2>

          <p>
            Full rules for comparing, powers, and absolute value live in{' '}
            <em>Opposite Numbers and Absolute Value</em>. They apply to every rational number
            without change. The key facts:
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute value</span>
            <div className="lrn-definition-desc">
              {`$|x|$`} is the distance from x to 0, so {`$|x| \\geq 0$`}:
              <div className="lrn-eq">
                <span>{`$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$`}</span>
              </div>
              <strong>When to use:</strong> Measuring how far a number is from 0, or expressing
              measurement error.
            </div>
          </div>

          <ul className="lrn-list">
            <li>
              <strong>Order:</strong> {`$x < y$`} means x is left of y. Multiplying both sides by a
              negative flips the inequality.
            </li>
            <li>
              <strong>Powers:</strong> {`$x^m \\cdot x^n = x^{m+n}$`}, with {`$x^0 = 1$`} and{' '}
              {`$x^{-n} = \\frac{1}{x^n}$`} for nonzero x.
            </li>
          </ul>
        </>
      ]
    },
    customCss: `
      .mafs-container { --mafs-bg: transparent; }
    `
  }

  return <LearningTemplate config={config} />
}
