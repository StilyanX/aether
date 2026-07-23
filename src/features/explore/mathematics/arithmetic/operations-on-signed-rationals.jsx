import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './operations-on-signed-rationals-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'osr',
    documentTitle: 'Operations on Signed Rationals - AETHER',
    learning: {
      groupTitle: 'Rational Numbers',
      category: 'Arithmetic',
      title: 'Operations on Signed Rationals',
      subtitle:
        'How to add, subtract, multiply, and divide rational numbers using vectors on the number line, sign rules, and the distributive law.',
      sections: [
        // == Section 1: Adding signed rationals ================================
        <>
          <h2>Adding Signed Rationals</h2>
          <p>
            {`After this section, you can add, subtract, multiply, and divide any two rational
            numbers, including negatives. You can track debt, depth below sea level, and
            temperature below zero.`}
          </p>
          <p>
            {`Every signed rational has an opposite, its mirror across zero. Write the opposite of
            $x$ as $-x$: same distance from zero, pointing the other way. Picture each number as
            an arrow from $0$ to that number: positive points right, negative points left, and the
            length is the absolute value $|x|$.`}
          </p>
          <p>
            {`Real bank accounts mix credits and debits. A credit of $\\$12$ and a debit of
            $\\$19$ gives a net change of $-\\$7$. Signed addition handles this exactly.`}
          </p>
          <p>
            {`The sum $x + y$ is the endpoint of $\\vec{x} + \\vec{y}$. Slide $\\vec{y}$ so its
            tail rests at the tip of $\\vec{x}$. The new endpoint is $x + y$.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Before computing: if both $x$ and $y$ are negative, will $x + y$ be greater than,
              less than, or equal to $x$?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Less than $x$. Adding a negative number moves you further left on the number line.
                The result is more negative than the number you added.`}
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">The Vector-Sum Length Rule</span>
            <div className="lrn-definition-desc">
              <p>{`For any two arrows $\\vec{x}$ and $\\vec{y}$:`}</p>
              <ul className="lrn-list">
                <li>{`If both point the same way, the length is the sum of the lengths, and the result points that same way.`}</li>
                <li>{`If they point opposite ways, the longer arrow wins: the result points the way the longer arrow points, with length equal to the difference of the lengths.`}</li>
              </ul>
            </div>
          </div>
          <p>
            {`Why the longer arrow wins. Lay the arrows tip to tail. The shorter one cancels an
            equal piece of the longer one. What is left points the longer arrow's way.`}
          </p>
          <p>
            {`Same-sign instance: $3 + 2$ lays two right arrows end to end, lengths $3$ and $2$,
            so the result is $5$. Opposite-sign instance: $5 + (-3)$ lays a right arrow of length
            $5$ and a left arrow of length $3$; the right arrow is longer, so the result is
            positive with length $5 - 3 = 2$.`}
          </p>
          <viz.VectorAddSameSign C={C} />
          <h3>Worked Example: Same Sign</h3>
          <p>{`Compute $\\tfrac{1}{4} + \\tfrac{2}{3}$.`}</p>
          <p>
            {`Both numbers are positive, so both arrows point right. Their lengths add. Use a common
            denominator: $\\tfrac{1}{4} + \\tfrac{2}{3} = \\tfrac{3}{12} + \\tfrac{8}{12}
            = \\tfrac{11}{12}$.`}
          </p>
          <h3>The Four Sign Cases</h3>
          <p>
            {`There are four possible sign combinations for $x + y$. The Vector-Sum Length Rule
            handles all of them. Two explicit formulas cover the mixed-sign cases.`}
          </p>
          <h3>Worked Example: Two Negatives</h3>
          <p>{`Compute $\\left(-\\tfrac{3}{4}\\right) + \\left(-\\tfrac{1}{2}\\right)$.`}</p>
          <p>
            {`Both arrows point left, so their lengths add and the result stays negative.
            $-\\left(\\tfrac{3}{4} + \\tfrac{1}{2}\\right) = -\\left(\\tfrac{3}{4} + \\tfrac{2}{4}\\right)
            = -\\tfrac{5}{4}$.`}
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Sum of Two Negatives</span>
            <div className="lrn-definition-desc">
              <p>{`For $s > 0$ and $t > 0$: $(-s) + (-t) = -(s + t)$.`}</p>
              <p>
                {`Both arrows point left. Their lengths add. The result is a longer left-pointing
                vector.`}
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Mixed Signs: Two Cases</span>
            <div className="lrn-definition-desc">
              <p>{`For $s \\geq 0$ and $t \\geq 0$:`}</p>
              <ul className="lrn-list">
                <li>{`If $s \\geq t$: $s + (-t) = s - t$ (positive result).`}</li>
                <li>{`If $s < t$: $s + (-t) = -(t - s)$ (negative result).`}</li>
              </ul>
            </div>
          </div>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              {`A common mistake: $-3 + (-2) = -1$. This treats addition like subtraction of
              absolute values. The correct answer is $-5$. Both numbers are negative, so add their
              absolute values and keep the negative sign: $-(3 + 2) = -5$.`}
            </p>
          </div>
          <viz.VectorAddOppositeSign C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`In the mixed-signs case, why does the result switch sign depending on whether
              $s \\geq t$ or $s < t$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The Vector-Sum Length Rule says the direction of the sum follows the longer vector.
                When $s \\geq t$, the positive arrow is longer, so the result is positive with
                length $s - t$. When $s < t$, the negative arrow is longer, so the result is
                negative with length $t - s$. The side that wins determines both sign and
                size.`}
              </p>
            </details>
          </div>
          <h3>Worked Example: Mixed Fractions</h3>
          <p>{`Compute $\\tfrac{15}{4} + \\left(-\\tfrac{5}{3}\\right)$.`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">1</span>
              <p className="lrn-step-content">
                {`Check signs: $\\tfrac{15}{4} > 0$ and $-\\tfrac{5}{3} < 0$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">2</span>
              <p className="lrn-step-content">
                {`Compare absolute values: $\\tfrac{15}{4} = 3.75$ and $\\tfrac{5}{3} \\approx 1.67$.
                Since $\\tfrac{15}{4} > \\tfrac{5}{3}$, use $s + (-t) = s - t$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">3</span>
              <p className="lrn-step-content">
                {`Compute: $\\tfrac{15}{4} - \\tfrac{5}{3} = \\tfrac{45}{12} - \\tfrac{20}{12}
                = \\tfrac{25}{12}$.`}
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why did we convert to a common denominator in step 3 but not in step 2?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Step 2 only asks which fraction is larger. A rough decimal comparison is enough.
                Step 3 requires exact arithmetic, so a common denominator is needed to subtract
                the fractions precisely.`}
              </p>
            </details>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Compute $-\\tfrac{5}{6} + \\tfrac{2}{3}$.`}</p>
              <p>
                {`Step 1: $\\left|-\\tfrac{5}{6}\\right| = \\tfrac{5}{6}$ and $\\tfrac{2}{3}
                = \\tfrac{4}{6}$. The negative arrow is longer ($\\tfrac{5}{6} > \\tfrac{4}{6}$).`}
              </p>
              <p>
                {`Step 2: Use $s + (-t) = -(t - s)$ with $s = \\tfrac{4}{6}$, $t = \\tfrac{5}{6}$:
                $-(\\tfrac{5}{6} - \\tfrac{4}{6}) = -\\tfrac{1}{6}$.`}
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Compute $-\\tfrac{3}{4} + \\tfrac{1}{2}$.`}</p>
              <p>
                {`Which absolute value is larger? Which formula applies?
                Convert to a common denominator, then compute the result.`}
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Compute $-\\tfrac{7}{6} + \\left(-\\tfrac{2}{5}\\right)$ on your own.`}</p>
            </div>
          </div>
          <h3>Sum of Opposites</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$x + (-x) = 0$$`}</div>
          <p>
            {`Any rational number and its mirror reflection cancel. The vectors are equal in
            length but opposite in direction. Their sum is the zero vector.`}
          </p>
          <viz.SumOfOppositesViz C={C} />
          <h3>Commutativity and Associativity</h3>
          <p>
            {`Addition of signed rationals is commutative: $x + y = y + x$. It is also
            associative: $(x + y) + z = x + (y + z)$. Both follow from the Vector-Sum Length
            Rule. Direction and length of the sum depend only on the vectors themselves, not
            their order.`}
          </p>
          <div className="lrn-insight">
            <p>
              {`The additive identity is $0$: $x + 0 = 0 + x = x$ for every rational $x$.
              A number has exactly one additive inverse: the only number that adds with $x$ to
              give $0$ is $-x$. We rely on this every time we say "the opposite" of a number.`}
            </p>
          </div>
          <p>
            {`You can now add any two signed rationals: check the signs, then add or subtract their
            absolute values and keep the right sign.`}
          </p>
        </>,

        // == Section 2: Subtraction ============================================
        <>
          <h2>Subtraction as Adding the Opposite</h2>
          <p>
            {`With whole numbers, $50 - 80$ is impossible. A bank account overdrawn by $\\$30$
            produces exactly that: $50 - 80 = -30$. Signed subtraction makes this legal.`}
          </p>
          <p>
            {`Subtraction comes directly from addition. For any rationals $x$ and $y$, the
            difference $x - y$ means $x + (-y)$. This makes subtraction always valid, even when
            $x < y$.`}
          </p>
          <p>
            {`Replace every subtraction with "add the opposite," then apply the addition
            formulas.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Before computing: what is $2 - 5$? Does your answer surprise you?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$2 - 5 = 2 + (-5) = -(5 - 2) = -3$. With whole numbers, $2 - 5$ seemed
                impossible. With signed rationals, it always works. You move 5 units left from 2
                and land at $-3$.`}
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Subtraction Definition</span>
            <div className="lrn-definition-desc">
              <p>{`$x - y := x + (-y)$ for all rationals $x$ and $y$.`}</p>
            </div>
          </div>
          <viz.SubtractionAsAddOpposite C={C} />
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">
                Old View: Subtraction Only Works When x is Bigger
              </span>
              <p>
                {`With whole numbers, $x - y$ only makes sense when $x \\geq y$.
                The result must be non-negative.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">New View: Subtraction Always Works</span>
              <p>
                {`With signed rationals, $x - y = x + (-y)$ is valid for any $x$ and $y$.
                The result can be negative, zero, or positive.`}
              </p>
            </div>
          </div>
          <h3>Rules for Removing Parentheses</h3>
          <div className="lrn-eq">{`$$-(x + y) = -x - y$$`}</div>
          <div className="lrn-eq">{`$$-(x - y) = -x + y$$`}</div>
          <p>
            {`Negating a sum negates each term. Negating a difference flips the sign of the second
            term. These follow from the definition of subtraction and the additive inverse.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does $-(x - y) = -x + y$ rather than $-x - y$? What happens to the minus
              sign between $x$ and $y$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$x - y$ means $x + (-y)$. So $-(x - y) = -(x + (-y)) = -x + (-(-y)) = -x + y$.
                Negating $-y$ returns $y$ (double reflection). The minus between $x$ and $y$ flips
                to a plus because $-(-y) = y$.`}
              </p>
            </details>
          </div>
          <h3>Three-Term Subtraction Identity</h3>
          <div className="lrn-eq">
            {`$$(x + y + z) - (a + b + c) = (x - a) + (y - b) + (z - c)$$`}
          </div>
          <p>
            {`You can break a difference of two sums into pairwise differences. This is useful for
            subtracting mixed numbers or multi-term expressions.`}
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                {`Compute $5 - \\left(\\tfrac{1}{2} - 8\\right)$. Apply $-(x - y) = -x + y$
                with $x = \\tfrac{1}{2}$, $y = 8$:`}
              </p>
              <p>
                {`$5 + \\left(-\\tfrac{1}{2} + 8\\right) = 5 - \\tfrac{1}{2} + 8 = 13 - \\tfrac{1}{2}
                = \\tfrac{25}{2}$.`}
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                {`Compute $1 - \\left(-\\tfrac{1}{4} + \\tfrac{5}{4}\\right)$. Identify $a$ and $b$
                in the bracket, then apply $-(a + b) = -a - b$ and simplify.`}
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Compute $\\tfrac{2}{3} - \\left(5 - \\tfrac{4}{7}\\right)$ on your own.`}</p>
            </div>
          </div>
          <p>
            {`You can now subtract any two signed rationals: rewrite the subtraction as adding the
            opposite, then use the addition rules.`}
          </p>
        </>,

        // == Section 3: Multiplying signed rationals ===========================
        <>
          <h2>Multiplying Signed Rationals</h2>
          <p>
            {`A temperature drops $3°$ per hour for $5$ hours. That is $5 \\times (-3) = -15°$.
            A debt of $\\$8$ owed three times is $3 \\times (-8) = -24$. Signed multiplication
            models both.`}
          </p>
          <p>
            {`Multiplication of signed rationals works like fraction multiplication, with sign
            rules added. To multiply, first find the sign from the rules, then multiply the
            absolute values.`}
          </p>
          <p>{`Use this for any product involving at least one negative factor.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`What is $(-1)(-1)$? Write your guess before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`It equals $1$. Two negative factors give a positive product. The sign rules below
                tell you which sign to write.`}
              </p>
            </details>
          </div>
          <h3>The Three Sign Rules</h3>
          <p>
            {`Three rules cover every signed product. Use them directly; they hold because of how
            the rational number system is built.`}
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">The Negative-One Multiplier Rule</span>
            <div className="lrn-definition-desc">
              <p>{`$(-1)x = -x$. Multiplying by $(-1)$ gives the opposite. Example:
              $(-1) \\times 6 = -6$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">The Single-Negative Multiplication Rule</span>
            <div className="lrn-definition-desc">
              <p>{`$(-x)y = -(xy)$. One negative factor makes the product negative. Example:
              $(-3) \\times 4 = -12$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">The Two-Negative Multiplication Rule</span>
            <div className="lrn-definition-desc">
              <p>{`$(-x)(-y) = xy$. Two negative factors give a positive product. Example:
              $(-3) \\times (-4) = 12$.`}</p>
            </div>
          </div>
          <viz.SignRuleGrid C={C} />
          <div className="lrn-callout">
            <p>
              {`Negative times negative gives positive, because of how the number system is built.
              You do not check this with a pattern or a story. You simply apply the rule and read
              off the sign.`}
            </p>
          </div>
          <h3>Worked Example</h3>
          <p>{`Compute $\\left(-\\tfrac{2}{5}\\right) \\times \\left(-\\tfrac{15}{8}\\right)$.`}</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">1</span>
              <p className="lrn-step-content">
                {`Both factors are negative, so the product is positive (The Two-Negative
                Multiplication Rule).`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">2</span>
              <p className="lrn-step-content">
                {`Multiply the absolute values, top times top and bottom times bottom:
                $\\tfrac{2}{5} \\times \\tfrac{15}{8} = \\tfrac{30}{40} = \\tfrac{3}{4}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">3</span>
              <p className="lrn-step-content">
                {`Result: $\\left(-\\tfrac{2}{5}\\right)\\left(-\\tfrac{15}{8}\\right) = \\tfrac{3}{4}$.`}
              </p>
            </div>
          </div>
          <h3>Distributive Law for Subtraction</h3>
          <div className="lrn-eq">{`$$x(y - z) = xy - xz$$`}</div>
          <p>
            {`This follows from $y - z = y + (-z)$ and the Single-Negative Multiplication Rule.
            It is the signed-rational version of the familiar distributive law.`}
          </p>
          <viz.DistributiveLawVizOSR C={C} />
          <p>
            {`You can now multiply any two signed rationals: find the sign from the rules, then
            multiply the absolute values.`}
          </p>
        </>,

        // == Section 4: Dividing signed rationals ==============================
        <>
          <h2>Dividing Signed Rationals</h2>
          <p>
            {`A debt of $\\$24$ split equally among 4 friends is $\\frac{-24}{4} = -6$ dollars
            each. Each friend carries a $\\$6$ share of the debt. Division of a negative by a
            positive always gives a negative.`}
          </p>
          <p>
            {`We define division precisely. The quotient $\\frac{x}{y}$ (with $y \\neq 0$) is the
            unique rational number $z$ satisfying $x = zy$.`}
          </p>
          <p>
            {`Uniqueness makes division well-defined. If no such unique $z$ exists, division has
            no answer.`}
          </p>
          <p>
            {`Replace division with multiplication by the multiplicative inverse, then apply the
            sign rules.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`What is the sign of $\\tfrac{-3}{7}$? What about $\\tfrac{3}{-7}$? Are they the
              same or different?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Both equal $-\\tfrac{3}{7}$. One negative factor makes the quotient negative.
                Placing the negative sign in the numerator, denominator, or out front gives the
                same number.`}
              </p>
            </details>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Division as Multiplication by Inverse</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\dfrac{x}{y} = x \\cdot y^{-1}$, where $y^{-1}$ is the unique rational satisfying
                $y \\cdot y^{-1} = 1$.`}
              </p>
              <p>
                {`Example: $\\left(\\tfrac{2}{3}\\right)^{-1} = \\tfrac{3}{2}$ because
                $\\tfrac{2}{3} \\cdot \\tfrac{3}{2} = 1$.`}
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Uniqueness is what makes division trustworthy. Without it, $\\frac{x}{y}$ could
              have more than one answer, or no answer. The definition says: $z$ is the quotient
              exactly when $x = zy$ and no other $z$ satisfies this. Division by zero fails this
              test. Suppose $y = 0$. Then $x = z \\cdot 0 = 0$ for every $z$. So when $x \\neq 0$,
              no $z$ works at all. That is why division by zero has no answer.`}
            </p>
          </div>
          <h3>Sign Rules for Quotients</h3>
          <div className="lrn-eq">
            {`$$-\\frac{a}{b} = \\frac{a}{-b} = -\\left(\\frac{a}{b}\\right)
            \\qquad \\frac{-a}{-b} = \\frac{a}{b}$$`}
          </div>
          <p>
            {`These follow directly from the Single-Negative Multiplication Rule. One negative (in
            either position) makes the quotient negative. Two negatives cancel and give a
            positive.`}
          </p>
          <viz.SignRulesQuotientViz C={C} />
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does $\\tfrac{-a}{b} = \\tfrac{a}{-b}$? They look different. Explain why they
              must be equal.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`By the Single-Negative Multiplication Rule, $(-a) \\cdot \\tfrac{1}{b}
                = -(a \\cdot \\tfrac{1}{b}) = -\\tfrac{a}{b}$. Also, $a \\cdot \\tfrac{1}{-b}
                = a \\cdot (-\\tfrac{1}{b}) = -(a \\cdot \\tfrac{1}{b}) = -\\tfrac{a}{b}$.
                Both equal $-\\tfrac{a}{b}$, so they equal each other.`}
              </p>
            </details>
          </div>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              {`Common error: $\\tfrac{0}{x} = \\tfrac{x}{0} = 0$. Wrong.
              $\\tfrac{0}{x} = 0$ when $x \\neq 0$, because $0 = 0 \\cdot x$.
              But $\\tfrac{x}{0}$ has no answer for any $x$: there is no number $z$ with
              $x = z \\cdot 0$. Division by zero never works.`}
            </p>
          </div>
          <h3>Rational Quotient Properties</h3>
          <ul className="lrn-list">
            <li>{`Equivalent fractions: $\\dfrac{X}{Y} = \\dfrac{ZX}{ZY}$ for nonzero $Z$.`}</li>
            <li>{`Addition: $\\dfrac{X}{Y} \\pm \\dfrac{Z}{W} = \\dfrac{XW \\pm ZY}{YW}$.`}</li>
            <li>{`Multiplication: $\\dfrac{X}{Y} \\cdot \\dfrac{Z}{W} = \\dfrac{XZ}{YW}$.`}</li>
            <li>
              {`Distributive: $\\dfrac{U}{V}\\left(\\dfrac{X}{Y} \\pm \\dfrac{Z}{W}\\right)
              = \\dfrac{U}{V} \\cdot \\dfrac{X}{Y} \\pm \\dfrac{U}{V} \\cdot \\dfrac{Z}{W}$.`}
            </li>
          </ul>
          <h3>Dividing Rational Quotients (Invert and Multiply)</h3>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\frac{X/Y}{Z/W} = \\frac{X}{Y} \\times \\frac{W}{Z}$$`}
          </div>
          <p>
            {`To divide by $\\tfrac{Z}{W}$, multiply by its inverse $\\tfrac{W}{Z}$. The proof uses
            the uniqueness of division and $\\left(\\tfrac{Z}{W}\\right)^{-1} = \\tfrac{W}{Z}$.`}
          </p>
          <viz.InvertAndMultiplyViz C={C} />
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Compute $\\dfrac{3/4}{-9/8}$.`}</p>
              <p>
                {`Step 1: Invert the denominator: $-\\tfrac{9}{8}$ inverts to $-\\tfrac{8}{9}$.
                Step 2: Multiply: $\\tfrac{3}{4} \\times \\left(-\\tfrac{8}{9}\\right)
                = -\\tfrac{24}{36} = -\\tfrac{2}{3}$. One negative factor makes the quotient
                negative.`}
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                {`Compute $\\dfrac{-2/5}{4/7}$. Invert the denominator, determine the sign of
                the product, then multiply the absolute values.`}
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Compute $\\dfrac{-3/5}{-7/4}$ on your own.`}</p>
            </div>
          </div>
          <p>
            {`You can now divide any two signed rationals: invert the divisor, set the sign from the
            rules, then multiply.`}
          </p>
        </>,

        // == Section 5: Properties and order of operations =====================
        <>
          <h2>Properties, Order of Operations, and Common Pitfalls</h2>
          <p>
            {`Take a navigation problem: a ship travels north $\\tfrac{5}{2}$ km, then south
            $4$ km, then north $\\tfrac{3}{4}$ km. Commutativity lets you reorder the legs.
            Associativity lets you group them. The distributive law lets you compute fuel cost
            per km. All three properties work together.`}
          </p>
          <p>
            {`The operations on signed rationals satisfy all standard algebraic properties.
            These let you simplify expressions without computing each step.`}
          </p>
          <p>
            {`Order of operations matches whole numbers. The one pitfall: a minus sign before
            parentheses changes all signs inside.`}
          </p>
          <p>
            {`Use this when simplifying expressions with multiple operations, especially when
            subtraction or negation is involved.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Is $3 - (4 + 5)$ the same as $3 - 4 + 5$? Compute both. What does the
              parenthesis do?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`No. $3 - (4 + 5) = 3 - 9 = -6$. But $3 - 4 + 5 = -1 + 5 = 4$. The parenthesis
                distributes the negative to both terms inside: $-(4 + 5) = -4 - 5$. Removing
                parentheses after a minus sign flips all signs inside.`}
              </p>
            </details>
          </div>
          <viz.ParenthesisRemovalViz C={C} />
          <h3>Summary of Properties</h3>
          <ul className="lrn-list">
            <li>
              <strong>Commutativity:</strong>
              {` $x + y = y + x$ and $xy = yx$.`}
            </li>
            <li>
              <strong>Associativity:</strong>
              {` $(x + y) + z = x + (y + z)$ and $(xy)z = x(yz)$.`}
            </li>
            <li>
              <strong>Distributive law:</strong>
              {` $x(y + z) = xy + xz$ and $x(y - z) = xy - xz$.`}
            </li>
            <li>
              <strong>Additive identity and inverse:</strong>
              {` $x + 0 = x$ and $x + (-x) = 0$.`}
            </li>
            <li>
              <strong>Multiplicative identity:</strong>
              {` $1 \\cdot x = x$.`}
            </li>
            <li>
              <strong>Zero product:</strong>
              {` $0 \\cdot x = 0$.`}
            </li>
          </ul>
          <p>
            {`The same laws that worked for positive fractions still work for all signed rationals,
            with no exceptions.`}
          </p>
          <h3>Common Pitfalls</h3>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              {`$(-x)^2 \\neq -x^2$. The expression $(-x)^2 = (-x)(-x) = x^2$ is positive.
              But $-x^2$ means $-(x^2)$, which is negative for $x \\neq 0$.`}
            </p>
          </div>
          <h3>Worked Example: Multi-Step Expression</h3>
          <p>
            {`Simplify $\\dfrac{-3}{4} + \\dfrac{5}{6} \\times \\left(-\\dfrac{2}{5}\\right)
            - \\dfrac{1}{3}$.`}
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">1</span>
              <p className="lrn-step-content">
                {`Multiplication first (order of operations): $\\dfrac{5}{6} \\times
                \\left(-\\dfrac{2}{5}\\right) = -\\dfrac{10}{30} = -\\dfrac{1}{3}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">2</span>
              <p className="lrn-step-content">
                {`Substitute: $-\\dfrac{3}{4} + \\left(-\\dfrac{1}{3}\\right) - \\dfrac{1}{3}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">3</span>
              <p className="lrn-step-content">
                {`Combine the two $-\\tfrac{1}{3}$ terms: $-\\dfrac{2}{3}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">4</span>
              <p className="lrn-step-content">
                {`Add: $-\\dfrac{3}{4} + \\left(-\\dfrac{2}{3}\\right)
                = -\\dfrac{9}{12} - \\dfrac{8}{12} = -\\dfrac{17}{12}$.`}
              </p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Compute $\\frac{7}{8} + \\left(-\\frac{1}{3}\\right)$.`,
        a: `Answer: $\\frac{13}{24}$. Since $\\frac{7}{8} > \\frac{1}{3}$, use $s + (-t) = s - t$: $\\frac{7}{8} - \\frac{1}{3} = \\frac{21}{24} - \\frac{8}{24} = \\frac{13}{24}$. The positive number is larger, so the result is positive.`
      },
      {
        q: `What is $\\left(-\\frac{4}{3}\\right) + \\left(-\\frac{2}{5}\\right)$?`,
        a: `Answer: $-\\frac{26}{15}$. Both are negative, so use $(-s) + (-t) = -(s+t)$: $-\\left(\\frac{4}{3} + \\frac{2}{5}\\right) = -\\left(\\frac{20}{15} + \\frac{6}{15}\\right) = -\\frac{26}{15}$. Adding two negatives gives a larger negative.`
      },
      {
        q: `A student writes $3 - (4 + 5) = 3 - 4 + 5 = 4$. Find the error.`,
        a: `The student dropped the parentheses incorrectly. The rule is $-(4 + 5) = -4 - 5$, not $-4 + 5$. The correct answer is $3 - 4 - 5 = -6$. Removing parentheses after a minus sign flips all signs inside the bracket.`
      },
      {
        q: `Explain why $x + (-x) = 0$ for any rational number $x$.`,
        a: `The vectors $\\vec{x}$ and $\\vec{-x}$ have the same length but opposite directions. When you slide $\\vec{-x}$ to start at the endpoint of $\\vec{x}$, the tip lands exactly at $0$. This is the Vector-Sum Length Rule applied to vectors of equal length pointing opposite ways.`
      },
      {
        q: `Compute $\\left(-\\frac{3}{7}\\right) \\times \\left(-\\frac{14}{9}\\right)$.`,
        a: `Answer: $\\frac{2}{3}$. Both factors are negative, so the product is positive (The Two-Negative Multiplication Rule). Multiply absolute values: $\\frac{3}{7} \\times \\frac{14}{9} = \\frac{42}{63} = \\frac{2}{3}$. The two negatives cancel and the result is positive.`
      },
      {
        q: `Use the definition of subtraction to compute $2.1 - 7$.`,
        a: `$2.1 - 7 = 2.1 + (-7)$. Since $7 > 2.1$, use $s + (-t) = -(t - s)$: $-(7 - 2.1) = -4.9$. Subtraction converts to addition of the opposite, and the sign follows which absolute value is larger.`
      },
      {
        q: `Predict: before computing, is $\\left(-\\frac{3}{4}\\right)^2$ positive or negative?`,
        a: `Positive. $\\left(-\\frac{3}{4}\\right)^2 = \\left(-\\frac{3}{4}\\right)\\left(-\\frac{3}{4}\\right)$. Two negative factors give a positive product by the Two-Negative Multiplication Rule. Any non-zero number squared is positive because $(-x)(-x) = x^2 > 0$.`
      },
      {
        q: `Compute $(-2)(-3)$ and state the sign rule you used.`,
        a: `$(-2)(-3) = 6$. Both factors are negative, so use the Two-Negative Multiplication Rule: $(-x)(-y) = xy$. Multiply the absolute values: $2 \\times 3 = 6$. Two negative factors give a positive product.`
      },
      {
        q: `Is $\\frac{-5}{8} = \\frac{5}{-8}$? Justify your answer.`,
        a: `Yes. By the Single-Negative Multiplication Rule, $(-5) \\cdot \\frac{1}{8} = -\\frac{5}{8}$. Also, $5 \\cdot \\frac{1}{-8} = 5 \\cdot (-\\frac{1}{8}) = -\\frac{5}{8}$. Both expressions equal $-\\frac{5}{8}$. Moving the minus sign between numerator and denominator does not change the value.`
      },
      {
        q: `Compute $\\frac{2}{3} - \\left(5 - \\frac{4}{7}\\right)$.`,
        a: `Apply $-(a - b) = -a + b$: $\\frac{2}{3} - 5 + \\frac{4}{7}$. Common denominator 21: $\\frac{14}{21} - \\frac{105}{21} + \\frac{12}{21} = \\frac{14 - 105 + 12}{21} = -\\frac{79}{21}$. Distribute the negative across the bracket first, then combine all three fractions.`
      },
      {
        q: `Explain what the Vector-Sum Length Rule says about adding a large positive and a small negative.`,
        a: `The Vector-Sum Length Rule says the direction of the sum follows the longer vector. When the positive number has larger absolute value, the positive arrow is longer. So the sum is positive, with length equal to the difference of the absolute values: $s + (-t) = s - t$ when $s > t > 0$.`
      },
      {
        q: `Compute $\\left(-\\frac{5}{6}\\right) + \\frac{2}{3}$.`,
        a: `$\\left|-\\frac{5}{6}\\right| = \\frac{5}{6}$ and $\\frac{2}{3} = \\frac{4}{6}$. Since $\\frac{5}{6} > \\frac{4}{6}$, the negative arrow is longer. Use $s + (-t) = -(t - s)$ with $s = \\frac{2}{3}$, $t = \\frac{5}{6}$: $-(\\frac{5}{6} - \\frac{4}{6}) = -\\frac{1}{6}$. The larger absolute value wins and determines the sign.`
      },
      {
        q: `What does the Negative-One Multiplier Rule $(-1)x = -x$ tell you that the sign rules for products do not directly tell you?`,
        a: `The sign rules say negative times negative is positive. But $(-1)x = -x$ connects multiplying by $(-1)$ (a multiplication step) with the additive inverse $-x$ (an addition step). It ties the two operations together, which the sign rules alone do not show.`
      },
      {
        q: `Predict: without computing, is $\\frac{1}{5} - 7$ positive or negative? By how much, roughly?`,
        a: `Negative. $\\frac{1}{5} = 0.2$ and we subtract $7$. Since $7 > 0.2$, the result is $-(7 - 0.2) = -6.8 = -\\frac{34}{5}$. A small positive minus a large positive always gives a negative result.`
      },
      {
        q: `Show that $x(y - z) = xy - xz$ using the definition of subtraction and the Single-Negative Multiplication Rule.`,
        a: `$x(y - z) = x(y + (-z))$ by definition of subtraction. By the distributive law: $= xy + x(-z)$. By the Single-Negative Multiplication Rule, $x(-z) = -(xz)$. So $xy + x(-z) = xy - xz$. Each step uses a single rule you already know.`
      },
      {
        q: `Compute $\\frac{5}{8} - \\left(\\frac{5}{8} - \\frac{1}{4}\\right)$ using the rules.`,
        a: `Apply $-(x - y) = -x + y$ inside: $\\frac{5}{8} - \\frac{5}{8} + \\frac{1}{4} = 0 + \\frac{1}{4} = \\frac{1}{4}$. The two $\\frac{5}{8}$ terms cancel because a number and its opposite sum to zero. The leftover is $\\frac{1}{4}$.`
      },
      {
        q: `What is $\\frac{-a}{-b}$ for integers $a$ and $b$ with $b \\neq 0$?`,
        a: `$\\frac{-a}{-b} = \\frac{a}{b}$. The numerator and denominator each contribute a factor of $(-1)$. By the Two-Negative Multiplication Rule, $(-1)(-1) = 1$, so the two negatives cancel. The quotient equals the corresponding positive fraction.`
      },
      {
        q: `A student claims: "Negative times negative is positive because two wrongs make a right." Is this a valid mathematical justification?`,
        a: `No. It is a memory aid, not a justification. The real reason is the Two-Negative Multiplication Rule: $(-x)(-y) = xy$. That rule holds because of how the rational number system is built, not because of any story.`
      },
      {
        q: `Compute $-\\frac{7}{6} + \\left(-\\frac{2}{5}\\right)$ and express as a single fraction.`,
        a: `Both negative, so add absolute values: $\\frac{7}{6} + \\frac{2}{5} = \\frac{35}{30} + \\frac{12}{30} = \\frac{47}{30}$. Result: $-\\frac{47}{30}$. Adding two negatives gives $-(s + t)$ where $s$ and $t$ are the absolute values.`
      },
      {
        q: `Is division of signed rationals commutative? Give an example to support your answer.`,
        a: `No. $\\frac{a}{b} \\neq \\frac{b}{a}$ in general. For example, $\\frac{-3}{7} \\neq \\frac{7}{-3}$: the first is $-\\frac{3}{7}$ and the second is $-\\frac{7}{3}$. They have the same sign but different sizes.`
      },
      {
        q: `Use the three-term subtraction identity to compute $\\left(5 + \\frac{1}{3} + 7\\right) - \\left(2 + \\frac{1}{4} + 3\\right)$.`,
        a: `Apply $(x + y + z) - (a + b + c) = (x - a) + (y - b) + (z - c)$: $(5 - 2) + (\\frac{1}{3} - \\frac{1}{4}) + (7 - 3) = 3 + \\frac{1}{12} + 4 = 7\\frac{1}{12}$. Breaking a difference of sums into pairwise differences is faster than combining all terms first.`
      },
      {
        q: `Why does the vector model guarantee that $x + y = y + x$ for signed rationals?`,
        a: `The Vector-Sum Length Rule determines the direction and length of $\\vec{x} + \\vec{y}$ using only the lengths and directions of the two vectors, not their order. Swapping $x$ and $y$ does not change which vector is longer, so the sum has the same length and direction. Therefore $x + y = y + x$.`
      },
      {
        q: `Compute $\\frac{3}{4} \\div \\left(-\\frac{9}{8}\\right)$.`,
        a: `Invert the divisor: $-\\frac{9}{8}$ inverts to $-\\frac{8}{9}$. Multiply: $\\frac{3}{4} \\times (-\\frac{8}{9}) = -\\frac{24}{36} = -\\frac{2}{3}$. One negative factor makes the quotient negative. The invert-and-multiply rule works for signed rationals exactly as for positive fractions.`
      },
      {
        q: `What is the additive inverse of $-\\frac{5}{7}$?`,
        a: `The additive inverse of $-\\frac{5}{7}$ is $\\frac{5}{7}$, because $-\\frac{5}{7} + \\frac{5}{7} = 0$. The additive inverse of $x$ is $-x$, and $-(-x) = x$ always. Double negation returns to the original.`
      },
      {
        q: `Compute $(-1) \\times \\left(-\\frac{4}{9}\\right)$ and name the rule.`,
        a: `$(-1) \\times \\left(-\\frac{4}{9}\\right) = \\frac{4}{9}$. By the Negative-One Multiplier Rule, $(-1)x = -x$, so multiplying by $(-1)$ gives the opposite. The opposite of $-\\frac{4}{9}$ is $\\frac{4}{9}$.`
      },
      {
        q: `What does $-(-x) = x$ mean geometrically? Why does it hold for every rational?`,
        a: `It means reflecting across zero twice returns to the start. $-x$ flips $x$ to the opposite side of $0$. Negating again, $-(-x)$, flips back to $x$. Every reflection has an exact reverse. The distance from $0$ never changes, only the direction flips each time.`
      },
      {
        q: `Transfer: a bank account starts at $-45.20$ dollars (overdrawn). Three charges of $\\$12.50$ each are added. What is the new balance?`,
        a: `$-45.20 + 3 \\times (-12.50) = -45.20 + (-37.50) = -(45.20 + 37.50) = -82.70$. Both the starting balance and the charges are negative. Adding three equal negative charges uses the sum-of-negatives formula: the total overdrawn amount grows to $82.70$.`
      },
      {
        q: `Transfer: a diver is at $-18$ m. She rises $\\frac{7}{2}$ m, then descends $\\frac{11}{4}$ m. What is her final depth?`,
        a: `$-18 + \\frac{7}{2} + \\left(-\\frac{11}{4}\\right) = -18 + \\frac{14}{4} - \\frac{11}{4} = -18 + \\frac{3}{4} = -\\frac{69}{4}$ m. The net change is $+\\frac{3}{4}$ m upward, so she ends $\\frac{3}{4}$ m shallower than she started.`
      },
      {
        q: `Transfer: a temperature drops $\\frac{3}{4}$ degree every hour for 5 hours. What is the total temperature change?`,
        a: `$5 \\times \\left(-\\frac{3}{4}\\right) = -\\frac{15}{4}$ degrees. One positive factor times one negative factor gives a negative product by the Single-Negative Multiplication Rule. The temperature falls by $\\frac{15}{4}$ degrees total.`
      },
      {
        q: `Transfer: a debt of $\\$24$ is split equally among 4 friends who each owe the same amount. Express each friend's balance as a signed quotient.`,
        a: `Each friend's balance is $\\frac{-24}{4} = -6$ dollars. A negative numerator divided by a positive denominator gives a negative quotient by the Single-Negative Multiplication Rule. Each friend owes $\\$6$.`
      },
      {
        q: `Predict: will $\\frac{2}{3}(10 - 1)$ equal $\\frac{2}{3} \\times 10 - \\frac{2}{3} \\times 1$? Justify before computing.`,
        a: `Yes, they match. The distributive law says $\\frac{2}{3}(10 - 1) = \\frac{2}{3} \\times 10 - \\frac{2}{3} \\times 1$. Both equal $\\frac{2}{3} \\times 9 = 6$. The distributive law holds for all signed rationals, so the two forms are always equal.`
      },
      {
        q: `Compute $-\\frac{1}{2} \\times 4 + \\frac{3}{4} - \\left(-\\frac{1}{8}\\right)$.`,
        a: `Step 1: Multiplication first: $-\\frac{1}{2} \\times 4 = -2$. Step 2: Substitute: $-2 + \\frac{3}{4} - (-\\frac{1}{8}) = -2 + \\frac{3}{4} + \\frac{1}{8}$. Step 3: Common denominator 8: $-\\frac{16}{8} + \\frac{6}{8} + \\frac{1}{8} = -\\frac{9}{8}$.`
      },
      {
        q: `A student writes $-3^2 = 9$. Find the error.`,
        a: `Wrong. $-3^2$ means $-(3^2) = -9$, not $(-3)^2$. The minus sign belongs to the expression, not the base. Exponentiation applies to $3$ first, then the negative sign negates the result. Only $(-3)^2 = 9$.`
      },
      {
        q: `Elaborate: can $\\frac{x}{y} = 0$ with $y \\neq 0$ and $x \\neq 0$?`,
        a: `No. $\\frac{x}{y} = z$ means $x = zy$. If $z = 0$, then $x = 0 \\cdot y = 0$, which contradicts $x \\neq 0$. So if $y \\neq 0$ and $x \\neq 0$, the quotient $\\frac{x}{y}$ cannot be $0$.`
      },
      {
        q: `Use the distributive law to compute $\\frac{2}{3}(9 - 6)$ two ways.`,
        a: `Direct: $\\frac{2}{3}(9 - 6) = \\frac{2}{3} \\times 3 = 2$. Distributed: $\\frac{2}{3} \\times 9 - \\frac{2}{3} \\times 6 = 6 - 4 = 2$. Both give $2$. The distributive law $x(y - z) = xy - xz$ lets you expand the bracket before multiplying.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Operations on Signed Rationals',
      sections: [
        <>
          <h2>Core Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Signed Rational</span>
            <div className="lrn-definition-desc">
              <p>{`Any number $\\tfrac{a}{b}$ where $a, b$ are integers and $b \\neq 0$.`}</p>
              <p>
                <strong>When to use:</strong> all arithmetic in this section.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Mirror Reflection</span>
            <div className="lrn-definition-desc">
              <p>{`$-x$: same distance from $0$, opposite direction. $-(-x) = x$.`}</p>
              <p>
                <strong>When to use:</strong> finding the additive inverse of any signed rational.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Addition</span>
            <div className="lrn-definition-desc">
              <p>
                {`$x + y =$ endpoint of $\\vec{x} + \\vec{y}$. Slide $\\vec{y}$ to start at the tip
                of $\\vec{x}$; the new endpoint is $x + y$.`}
              </p>
              <p>
                <strong>When to use:</strong> any sum of signed rationals.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Subtraction</span>
            <div className="lrn-definition-desc">
              <p>{`$x - y := x + (-y)$. Subtraction is addition of the opposite.`}</p>
              <p>
                <strong>When to use:</strong> every subtraction. Replace $x - y$ with $x + (-y)$,
                then add.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiplication</span>
            <div className="lrn-definition-desc">
              <p>
                {`$x \\cdot y$ for signed rationals: multiply absolute values, then apply the sign
                rule. Same signs give a positive product. Opposite signs give a negative product.`}
              </p>
              <p>
                <strong>When to use:</strong> any product involving at least one negative factor.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Division</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\dfrac{x}{y} = x \\cdot y^{-1}$, where $y^{-1}$ is the unique rational
                satisfying $y \\cdot y^{-1} = 1$.`}
              </p>
              <p>
                <strong>When to use:</strong> dividing signed rationals; replace with multiplication
                by the inverse.
              </p>
            </div>
          </div>
          <h2>Addition Formulas</h2>
          <div className="lrn-eq">{`$$(-s) + (-t) = -(s + t)$$`}</div>
          <p>
            <strong>When to use:</strong> adding two negative numbers. Add absolute values and
            negate.
          </p>
          <div className="lrn-eq">{`$$s + (-t) = s - t \\quad (s \\geq t \\geq 0)$$`}</div>
          <p>
            <strong>When to use:</strong> positive plus negative, positive wins.
          </p>
          <div className="lrn-eq">{`$$s + (-t) = -(t - s) \\quad (0 \\leq s < t)$$`}</div>
          <p>
            <strong>When to use:</strong> positive plus negative, negative wins.
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$x + (-x) = 0$$`}</div>
          <p>
            <strong>When to use:</strong> cancellation. Any number and its opposite sum to zero.
          </p>
        </>,
        <>
          <h2>Multiplication Sign Rules</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$(-1)(-1) = 1$$`}</div>
          <p>
            <strong>When to use:</strong> the root theorem. All other sign rules follow from this.
          </p>
          <div className="lrn-eq">{`$$(-1)x = -x$$`}</div>
          <p>
            <strong>When to use:</strong> multiplying by $(-1)$ is the same as negating.
          </p>
          <div className="lrn-eq">{`$$(-x)y = -(xy)$$`}</div>
          <p>
            <strong>When to use:</strong> one negative factor negates the product (Single-Negative
            Multiplication Rule).
          </p>
          <div className="lrn-eq">{`$$(-x)(-y) = xy$$`}</div>
          <p>
            <strong>When to use:</strong> two negative factors give a positive product (Two-Negative
            Multiplication Rule).
          </p>
          <h2>Sign Rules Summary</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Same Signs</span>
              <p>{`$(+)(+) = +$ and $(-)(-)= +$. Product or quotient is positive.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Opposite Signs</span>
              <p>{`$(+)(-) = -$ and $(-)(+) = -$. Product or quotient is negative.`}</p>
            </div>
          </div>
          <h2>Sign Rules for Quotients</h2>
          <div className="lrn-eq">
            {`$$-\\frac{a}{b} = \\frac{a}{-b} = -\\left(\\frac{a}{b}\\right) \\qquad
            \\frac{-a}{-b} = \\frac{a}{b}$$`}
          </div>
          <p>
            <strong>When to use:</strong> simplifying fractions with negative numerators or
            denominators.
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{X/Y}{Z/W} = \\frac{X}{Y} \\times \\frac{W}{Z}$$`}</div>
          <p>
            <strong>When to use:</strong> dividing one rational quotient by another. Invert the
            divisor and multiply.
          </p>
          <h2>Key Identities</h2>
          <div className="lrn-eq">{`$$-(x + y) = -x - y$$`}</div>
          <p>
            <strong>When to use:</strong> removing parentheses after a minus sign. Both terms change
            sign.
          </p>
          <div className="lrn-eq">{`$$-(x - y) = -x + y$$`}</div>
          <p>
            <strong>When to use:</strong> removing parentheses after a minus sign from a difference.
          </p>
          <div className="lrn-eq">{`$$(x + y + z) - (a + b + c) = (x - a) + (y - b) + (z - c)$$`}</div>
          <p>
            <strong>When to use:</strong> subtracting multi-term sums by breaking into pairwise
            differences.
          </p>
          <div className="lrn-eq">{`$$x(y - z) = xy - xz$$`}</div>
          <p>
            <strong>When to use:</strong> distributing multiplication over subtraction.
          </p>
          <div className="lrn-callout">
            <span className="lrn-callout-label">Order of Operations</span>
            <p>
              {`Parentheses first, then multiplication and division, then addition and subtraction.
              Same order as for whole numbers.`}
            </p>
          </div>
          <h2>Rational Quotient Properties</h2>
          <ul className="lrn-list">
            <li>
              <strong>Equivalent fractions:</strong>
              {` $\\dfrac{X}{Y} = \\dfrac{ZX}{ZY}$ for $Z \\neq 0$.`}
            </li>
            <li>
              <strong>Addition:</strong>
              {` $\\dfrac{X}{Y} \\pm \\dfrac{Z}{W} = \\dfrac{XW \\pm ZY}{YW}$.`}
            </li>
            <li>
              <strong>Multiplication:</strong>
              {` $\\dfrac{X}{Y} \\cdot \\dfrac{Z}{W} = \\dfrac{XZ}{YW}$.`}
            </li>
          </ul>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              {`$\\frac{0}{x} = 0$ when $x \\neq 0$. But $\\frac{x}{0}$ has no answer for any $x$.
              Division by zero never works.`}
            </p>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function OperationsOnSignedRationals() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
