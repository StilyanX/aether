import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  ExpLineIntersectionViz,
  GraphOnlyRootsViz,
  ExtraneousDomainViz,
  ExpInequalityViz,
  LightDecayViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'ele',
    documentTitle: 'Exponential and Logarithmic Equations - AETHER',
    learning: {
      groupTitle: 'Logarithms and Exponential Models',
      category: 'Algebra',
      title: 'Exponential and Logarithmic Equations',
      subtitle:
        'Five ways to free a variable trapped in an exponent or a logarithm, and how to catch the roots that only look correct.',
      sections: [
        <>
          <h2>Solving Exponential Equations with a Common Base</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Before doing any algebra, predict: for $5^x = 125$, can you find $x$ by matching bases instead of reaching for a logarithm?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Yes. Both sides can be written as a power of $5$, so you match exponents directly: $x = 3$. No logarithm is needed at all.`}
              </p>
            </details>
          </div>

          <p>
            {`An exponential equation puts the variable in the exponent, such as $5^x = 125$. You already solved equations like this by matching a common base. Reach for that method whenever you can rewrite both sides as powers of the same base.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              One-to-One Property of Exponential Functions
            </span>
            <div className="lrn-definition-desc">
              <p>{`For a base $a > 0$ with $a \\neq 1$: if $a^x = a^y$, then $x = y$.`}</p>
              <p>
                {`An exponential function never gives the same output twice for two different inputs. So if two powers of the same base are equal, the exponents themselves must be equal.`}
              </p>
              <p>
                {`The base must be positive: a negative or zero base is undefined for many exponents. It also cannot be $1$, since $1^x = 1$ for every $x$, so equal outputs would no longer force equal inputs.`}
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              An exponential function only ever increases or only ever decreases, so each output
              traces back to exactly one input. You already met this one-to-one behavior when you
              first studied exponential functions.
            </p>
          </div>

          <h3>Worked Example: Matching a Common Base</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): $5^x = 125$`}</span>
              <p className="lrn-step-content">
                {`Rewrite $125$ as a power of $5$: $125 = 5^3$. The equation becomes $5^x = 5^3$. By the one-to-one property, $x = 3$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): $5^{2x} = 5^{x+1}$`}</span>
              <p className="lrn-step-content">
                {`Both sides are already powers of the same base $5$. Match exponents directly: $2x = x + 1$, so $x = 1$.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Part (b) never rewrites either side before matching exponents. Why does the one-to-one property still apply immediately?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Both $5^{2x}$ and $5^{x+1}$ are already written as powers of the same base, $5$. The rewriting step in Part (a) exists only to force a common base. Since Part (b) already has one, you skip straight to matching exponents.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`$3^{x+2} = 7$ gives no way to write $7$ as a whole-number power of $3$. Predict which tool breaks that deadlock.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Taking a logarithm of both sides. A logarithm pulls the unknown exponent down out of its exponent position. From there you isolate it with ordinary algebra.`}
              </p>
            </details>
          </div>

          <h2>Solving Exponential Equations by Taking Logarithms</h2>

          <p>
            {`When the two sides cannot be forced onto a common base, take a logarithm of both sides instead. When to use this: reach for logarithms whenever the common-base method from the last section fails.`}
          </p>

          <div className="lrn-insight">
            <strong>The power law of logarithms makes this work.</strong>
            <p>
              {`Recall the power law: a log of a power moves the exponent out front, $\\log_a(A^C) = C\\log_a A$. It turns the exponent into an ordinary multiplying coefficient. That coefficient sits outside the log instead of trapped inside it.`}
            </p>
          </div>

          <h3>Guidelines for Solving Exponential Equations</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step one</span>
              <p className="lrn-step-content">
                Isolate the exponential expression on one side of the equation.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step two</span>
              <p className="lrn-step-content">
                Take a logarithm of both sides, then use the laws of logarithms to bring the
                exponent down as a coefficient.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step three</span>
              <p className="lrn-step-content">Solve the resulting equation for the variable.</p>
            </div>
          </div>

          <h3>Worked Example: An Exact Answer and a Decimal Approximation</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$3^{x+2} = 7$`}</span>
              <p className="lrn-step-content">
                {`Take the common logarithm of both sides: $\\log(3^{x+2}) = \\log 7$. Bring down the exponent with the power law: $(x+2)\\log 3 = \\log 7$. Divide by $\\log 3$: $x + 2 = \\dfrac{\\log 7}{\\log 3}$. Subtract $2$: $x = \\dfrac{\\log 7}{\\log 3} - 2$, which is about $-0.228756$.`}
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Using $\\log$ (base 10)`}</span>
              <p>{`$x = \\dfrac{\\log 7}{\\log 3} - 2 \\approx -0.228756$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Using $\\ln$ (base $e$)`}</span>
              <p>{`$x = \\dfrac{\\ln 7}{\\ln 3} - 2 \\approx -0.228756$.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why do the common-log route and the natural-log route land on the exact same decimal answer?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Both logarithms measure the same underlying equation, $3^{x+2} = 7$. The choice of base only changes which numbers you divide, never the value being solved for. Since an equation has one solution, any valid base must arrive at that same number.`}
              </p>
            </details>
          </div>

          <h3>Worked Example: Isolating Before Taking the Logarithm</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$8e^{2x} = 20$`}</span>
              <p className="lrn-step-content">
                {`Isolate the exponential term first by dividing by $8$: $e^{2x} = 2.5$. Take the natural logarithm of both sides: $2x = \\ln 2.5$. Divide by $2$: $x = \\dfrac{\\ln 2.5}{2} \\approx 0.458$.`}
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Check</span>
            <p>
              {`Substitute $x \\approx 0.458$ back into the original equation: $8e^{2(0.458)} = 8e^{0.916} \\approx 8(2.5) = 20$. It matches, so the solution checks out.`}
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why divide by $8$ before taking the natural log, instead of taking $\\ln$ of both sides while the $8$ is still attached?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Taking the log of $8e^{2x}$ directly would produce $\\ln 8 + 2x$, an extra term you would then have to subtract away. Isolating $e^{2x}$ first keeps the logarithm step clean: it brings down only the exponent you actually need.`}
              </p>
            </details>
          </div>

          <h3>Worked Example: Algebraic and Graphical Methods Compared</h3>

          <p>
            {`Consider $e^{3-2x} = 4$. Solving algebraically: take $\\ln$ of both sides, $3 - 2x = \\ln 4$. Solve for $x$: $-2x = \\ln 4 - 3$, so $x = \\dfrac{3 - \\ln 4}{2} \\approx 0.807$.`}
          </p>

          <p>
            {`Solving graphically instead: graph $y = e^{3-2x}$ and the horizontal line $y = 4$ on the same axes. Wherever the two curves cross marks a solution. Reading that crossing point gives $x \\approx 0.81$, matching the algebraic answer to the precision a graph can show.`}
          </p>

          <div className="lrn-graph">
            <ExpLineIntersectionViz />
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Algebraic method</span>
              <p>
                Gives an exact expression you can round to any number of decimal places. Requires an
                equation you can isolate by hand, using logarithm laws.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Graphical method</span>
              <p>
                Works even when an equation resists isolation. Only reads off an approximate
                decimal, taken from where two curves visibly cross.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Both methods solve the identical equation, so both must agree. The small gap between{' '}
              {`$0.807$`} and {`$0.81$`} comes only from rounding. The algebraic method carries more
              decimal places than a graph can display.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Common-base method (last section)`}</span>
              <p>
                Works only when both sides can be rewritten as powers of the identical base. Fast,
                but limited to equations built from friendly numbers.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Take-the-logarithm method (this section)`}</span>
              <p>
                Works on any exponential equation, friendly base or not. Slightly more steps, since
                it always needs a logarithm law to bring the exponent down.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`$e^{2x} - e^x - 6 = 0$ looks unlike anything solved so far. Predict which technique you have already used for quadratics still applies here.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Substitution. Treating $e^x$ as a single variable turns this into an ordinary quadratic equation, one you already know how to factor.`}
              </p>
            </details>
          </div>

          <h2>Exponential Equations of Quadratic Type</h2>

          <p>
            {`Some exponential equations hide a quadratic pattern. Reach for substitution whenever one exponential expression shows up twice. It appears squared in one term and to the first power in another.`}
          </p>

          <div className="lrn-insight">
            <strong>You already used this substitution on quadratics.</strong>
            <p>
              {`Let $w = e^x$, turn the equation into a quadratic in $w$, and solve it. The one new wrinkle: $w = e^x$ must stay positive. Reject any root of $w$ that is zero or negative before you solve $e^x = w$ for $x$.`}
            </p>
          </div>

          <h3>Worked Example: Substituting to Reveal a Quadratic</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$e^{2x} - e^x - 6 = 0$`}</span>
              <p className="lrn-step-content">
                {`Substitute $w = e^x$, noting $e^{2x} = (e^x)^2 = w^2$: $w^2 - w - 6 = 0$. Factor: $(w-3)(w+2) = 0$, so $w = 3$ or $w = -2$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Undoing the substitution</span>
              <p className="lrn-step-content">
                {`$w = 3$ gives $e^x = 3$, so $x = \\ln 3 \\approx 1.0986$, a valid solution. $w = -2$ gives $e^x = -2$, which has no solution: $e^x$ is never negative for any real $x$.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $e^x = 3$ lead to a valid answer, while $e^x = -2$ is a dead end?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The expression $e^x$ can only ever be positive, for any real number $x$. Since $3$ is positive, a matching $x$ exists. Since $-2$ is negative, no real $x$ can ever produce it, so that branch of the quadratic contributes no solution.`}
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Here is the mechanism. Raising $e$ to a very negative power shrinks the result toward zero. It never reaches zero or crosses into negative numbers. Raising $e$ to a very positive power grows without bound, and every value in between is positive too.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`$3xe^x + x^2e^x = 0$ has an $e^x$ factor buried in both terms. Predict whether substitution, the technique from the last section, is the right tool here.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`No. Factoring out the common $e^x$ factor is faster and simpler here than substitution.`}
              </p>
            </details>
          </div>

          <h2>Equations Involving Exponential Functions</h2>

          <p>
            Reach for factoring when the exponential expression is a common factor in every term.
            That differs from the squared-and-first-power pattern that calls for substitution.
          </p>

          <h3>Worked Example: Factoring Out a Common Exponential Factor</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$3xe^x + x^2e^x = 0$`}</span>
              <p className="lrn-step-content">
                {`Factor out $x e^x$, the piece common to both terms: $xe^x(3 + x) = 0$. Since $e^x$ is never $0$ for any real $x$, divide both sides by $e^x$ safely: $x(3+x) = 0$. This gives $x = 0$ or $x = -3$.`}
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Check</span>
            <p>
              {`Substituting $x = 0$: $3(0)e^0 + 0^2e^0 = 0$, true. Substituting $x = -3$: $3(-3)e^{-3} + (-3)^2e^{-3} = -9e^{-3} + 9e^{-3} = 0$, also true. Both roots check out.`}
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why is dividing both sides by $e^x$ always a safe move here, unlike dividing by a factor such as $x$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$e^x$ is never zero for any real $x$. Dividing by it never divides by zero and never throws away a solution. Dividing by $x$ instead would be unsafe. $x$ could equal zero, which is one of the actual solutions here.`}
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Both $x = 0$ and $x = -3$ survive with no domain check needed. An exponential expression accepts every real input, so no root here can fall outside a domain.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`$\\log_5(x^2+1) = \\log_5(x-2) + \\log_5(x+3)$ has logarithms on both sides. Predict the first move, before you can drop the logarithms entirely.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Combine the right side into one logarithm using the Product Law, so both sides read as a single $\\log_5$ expression.`}
              </p>
            </details>
          </div>

          <h2>Solving Logarithmic Equations with the One-to-One Property</h2>

          <p>
            {`A logarithmic equation puts the variable inside a logarithm. Reach for the one-to-one property once both sides are single logarithms. They must share the same base.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              One-to-One Property of Logarithmic Functions
            </span>
            <div className="lrn-definition-desc">
              <p>{`If $\\log_a x = \\log_a y$, then $x = y$ (with $x > 0$ and $y > 0$).`}</p>
              <p>
                {`This mirrors the one-to-one property for exponential functions. Equal outputs of a logarithm force equal inputs, because a logarithm never repeats an output. That is what lets you drop the logarithms and match the inside expressions directly.`}
              </p>
            </div>
          </div>

          <h3>Worked Example: Combining Then Matching</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$\\log_5(x^2+1) = \\log_5(x-2) + \\log_5(x+3)$`}</span>
              <p className="lrn-step-content">
                {`Recall the product law: the log of a product is the sum of the logs, $\\log_a(MN) = \\log_a M + \\log_a N$. Read backwards, it combines the right side: $\\log_5(x^2+1) = \\log_5[(x-2)(x+3)]$. Apply the one-to-one property: $x^2+1 = (x-2)(x+3)$. Expand the right side: $x^2+1 = x^2+x-6$. Subtract $x^2$ from both sides: $1 = x - 6$, so $x = 7$.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why must you check that $x = 7$ keeps every logarithm argument positive, before accepting it as the final answer?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A logarithm is undefined for a zero or negative argument. Checking $x = 7$: $x-2=5$, $x+3=10$, and $x^2+1=50$, all positive. Since every argument stays positive, $x=7$ is genuinely valid, not just an answer to the rearranged equation.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`$\\ln x = 8$ has no product or quotient to combine. Predict how you isolate $x$ when the equation is already a single logarithm.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Rewrite the equation in exponential form. Since $\\ln x = 8$ means $e^8 = x$ by definition, $x = e^8$.`}
              </p>
            </details>
          </div>

          <h2>Solving Logarithmic Equations by Converting to Exponential Form</h2>

          <h3>Guidelines for Solving Logarithmic Equations</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step one</span>
              <p className="lrn-step-content">
                {`Isolate the logarithmic term on one side, combining logarithms first if there is more than one.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step two</span>
              <p className="lrn-step-content">
                Rewrite the equation in exponential form, which is the same move as raising the base
                to both sides.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step three</span>
              <p className="lrn-step-content">Solve the resulting equation for the variable.</p>
            </div>
          </div>

          <p>Reach for this method once the equation is a single logarithm equal to a number.</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Exponential guidelines (earlier section)</span>
              <p>Once the term is isolated, you take a logarithm of both sides.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Logarithmic guidelines (this section)</span>
              <p>Once the term is isolated, you rewrite it in exponential form.</p>
            </div>
          </div>

          <h3>Worked Example: Two Ways to Undo a Natural Logarithm</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Method 1, direct exponential form: $\\ln x = 8$`}</span>
              <p className="lrn-step-content">
                {`By definition, $\\ln x = 8$ means $x = e^8 \\approx 2981$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Method 2, raising the base to both sides</span>
              <p className="lrn-step-content">
                {`Raise $e$ to both sides: $e^{\\ln x} = e^8$. Since $e$ and $\\ln$ undo each other, the left side simplifies to $x$, giving the same result, $x = e^8 \\approx 2981$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`A second equation: $\\log_2(25-x) = 3$`}</span>
              <p className="lrn-step-content">
                {`Rewrite in exponential form: $25 - x = 2^3 = 8$. Solve: $x = 25 - 8 = 17$.`}
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Check</span>
            <p>{`Substituting $x=17$: $\\log_2(25-17) = \\log_2 8 = 3$. It matches.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do both methods for solving $\\ln x = 8$ produce identical results?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Rewriting in exponential form is exactly what raising the base to both sides
                accomplishes. They are the same algebraic move, described from two different angles,
                so they cannot disagree.
              </p>
            </details>
          </div>

          <h3>Worked Example: Isolating the Logarithm First</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$4 + 3\\log(2x) = 16$`}</span>
              <p className="lrn-step-content">
                {`Subtract $4$ from both sides: $3\\log(2x) = 12$. Divide by $3$: $\\log(2x) = 4$. Rewrite in exponential form: $2x = 10^4 = 10000$. Divide by $2$: $x = 5000$.`}
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Check</span>
            <p>{`Substituting $x=5000$: $4 + 3\\log(10000) = 4 + 3(4) = 16$. It matches.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why fully isolate the logarithmic term, undoing the added 4 and the multiplied 3,
              before converting to exponential form?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Converting to exponential form only undoes a bare logarithm equal to a number.
                Remove any addition or multiplication around the logarithm first. Otherwise you
                apply the conversion to the wrong expression.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Rewriting $\\log_a N = k$ as $a^k = N$ is not a new rule. It is the definition of a logarithm read backwards. That is why the conversion always holds and never introduces a false root.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Solving $\\log(x+2)+\\log(x-1)=1$ will produce two candidate roots from a quadratic. Predict whether both candidates will actually work.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. One candidate will make a logarithm argument negative, which is undefined, so
                you must reject it.
              </p>
            </details>
          </div>

          <h2>Extraneous Solutions in Logarithmic Equations</h2>

          <p>
            An extraneous solution is a candidate root that solves the rearranged equation but fails
            the original one. Always check every candidate root against the domain of every
            logarithm in the original equation. Combining or clearing logs can introduce impossible
            answers.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE DERIVATION</span>
              <p>
                <strong>{`Combine the logarithms with the Product Law:`}</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$\\log[(x+2)(x-1)] = 1$$`}</span>
              </div>
              <p>
                <strong>Rewrite in exponential form:</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$(x+2)(x-1) = 10^1 = 10$$`}</span>
              </div>
              <p>
                <strong>Expand the left side:</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$x^2 + x - 2 = 10$$`}</span>
              </div>
              <p>
                <strong>Move everything to one side:</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$x^2 + x - 12 = 0$$`}</span>
              </div>
              <p>
                <strong>Factor:</strong>
              </p>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$(x+4)(x-3) = 0 \\;\\Rightarrow\\; x = -4 \\text{ or } x = 3$$`}</span>
              </div>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: CHECK WHICH ROOT SURVIVES</span>
              <p>
                {`The quadratic gave two candidates, $x=-4$ and $x=3$. Test each one against the original logarithms.`}
              </p>
              <ol className="lrn-list">
                <li>{`Substitute $x=-4$ into $x+2$ and $x-1$. Check whether both stay positive.`}</li>
                <li>{`Substitute $x=3$ into $x+2$ and $x-1$. Check whether both stay positive.`}</li>
                <li>State which root is the actual solution to the original equation.</li>
              </ol>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <p>
                  {`For $x=-4$: $x+2=-2$, negative, so $\\log(x+2)$ is undefined. Reject $x=-4$. For $x=3$: $x+2=5$ and $x-1=2$, both positive. Accept $x=3$ as the only solution.`}
                </p>
              </details>
            </div>
          </div>

          <p>
            {`Solving graphically confirms this. Graph $y = \\log(x+2)+\\log(x-1)-1$. The curve only exists where both logarithms are defined, and it crosses zero once, near $x \\approx 3$, matching the algebraic answer.`}
          </p>

          <div className="lrn-graph">
            <ExtraneousDomainViz />
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Rejected earlier: $e^x = -2$`}</span>
              <p>
                Rejected because an exponential expression can never equal a negative number, for
                any real exponent. This is a restriction on the exponential function's range, the
                set of values it can output.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Rejected here: $x = -4$`}</span>
              <p>
                Rejected because substituting it back makes a logarithm's argument negative, and a
                logarithm is undefined there. This is a restriction on the logarithm function's
                domain, the set of values it can accept.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`$x^2 = 2\\ln(x+2)$ mixes a plain $x^2$ term with a logarithm on the other side. Predict whether the algebra from this lesson can isolate $x$ here.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No single algebraic move separates them. This equation needs a graph to find
                approximate solutions.
              </p>
            </details>
          </div>

          <h2>Logarithmic Equations That Need a Graph</h2>

          <p>
            Reach for a graph when no algebra isolates the variable. Factoring, combining
            logarithms, and converting to exponential form have all failed.
          </p>

          <h3>Worked Example: Reading Solutions From a Graph</h3>

          <p>
            {`Move everything to one side: $x^2 - 2\\ln(x+2) = 0$. Graph $y = x^2 - 2\\ln(x+2)$. The $x$-intercepts of this graph, the points where the curve crosses zero, mark the solutions. Reading the graph gives two solutions, $x \\approx -0.71$ and $x \\approx 1.60$.`}
          </p>

          <div className="lrn-graph">
            <GraphOnlyRootsViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why do the $x$-intercepts of $y = x^2 - 2\\ln(x+2)$ match the solutions of the original equation?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`An $x$-intercept is exactly where $y=0$. Setting $y=0$ gives $x^2-2\\ln(x+2)=0$, which is precisely the rearranged original equation. So every $x$-intercept is a solution, and every solution shows up as an $x$-intercept.`}
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`No law of logs or exponents can gather the two copies of the variable onto one side. With algebra blocked, a graph becomes the only honest way to locate the solutions.`}
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Algebraically solvable (previous section)`}</span>
              <p>
                Every logarithm combines into one term, leaving a clean equation. It converts to
                exponential form and factors using ordinary algebra.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Must be graphical (this section)</span>
              <p>
                The variable appears both outside and inside a logarithm, in a way no law of logs or
                exponents can separate. Only a graph reveals where the two sides meet.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`The equation $e^x = 5$ has exactly one solution. Predict whether the inequality $e^x < 5$ also has just one number as its answer.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. An inequality's solution is usually a whole range of numbers, not a single
                number.
              </p>
            </details>
          </div>

          <h2>Exponential and Logarithmic Inequalities</h2>

          <p>
            An exponential or logarithmic inequality asks for every variable value that beats a
            target. The expression is greater than, or less than, that target. Reach for this
            approach when a problem asks for a range of values, not one exact answer.
          </p>

          <p>
            Solve the matching equation first to find the boundary number. Exponential and
            logarithmic functions each increase steadily, with no repeats and no reversals. Use that
            to decide which side of the boundary satisfies the inequality.
          </p>

          <h3>{`Worked Example: An Exponential Inequality`}</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$e^x > 5$`}</span>
              <p className="lrn-step-content">
                {`Solve the matching equation first: $e^x = 5$ gives $x = \\ln 5$. Since $e^x$ is increasing everywhere, larger $x$ always gives larger $e^x$. So $e^x > 5$ exactly when $x > \\ln 5$.`}
              </p>
            </div>
          </div>

          <div className="lrn-graph">
            <ExpInequalityViz />
          </div>

          <h3>{`Worked Example: A Logarithmic Inequality`}</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$\\log x < 2$`}</span>
              <p className="lrn-step-content">
                {`Solve the matching equation: $\\log x = 2$ gives $x = 10^2 = 100$. Since $\\log x$ is increasing, $\\log x < 2$ exactly when $x < 100$. But $\\log x$ is only defined for $x > 0$, so the full solution is $0 < x < 100$.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why can you replace an inequality sign with a comparison to the boundary number,
              simply because the function is increasing?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                An increasing function preserves order: a bigger input always produces a bigger
                output. So moving to the correct side of the boundary input lands you on the correct
                side of the boundary output. No sign flips happen in between.
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Light dims as it travels deeper into water. Predict whether that dimming follows a
              straight-line pattern or a curved, exponential pattern.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Exponential. Light intensity drops by a fixed percentage per foot of depth, not a
                fixed amount. That fixed-percentage drop is the signature of exponential decay.
              </p>
            </details>
          </div>

          <h2>Application: Light Transparency in Water</h2>

          <p>
            {`The Beer-Lambert Law connects the intensity of light passing through a substance to the depth it has traveled. Reach for this law when you measure how much a light beam fades. It passes through a known thickness of a medium such as water.`}
          </p>

          <p>
            {`Three quantities set up the law. The intensity $I$ is how bright the light is at depth $x$. The initial intensity $I_0$ is the light's strength before it enters the material. The absorption constant $k$ tells how strongly the material soaks up light.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$-\\dfrac{1}{k}\\ln\\!\\left(\\dfrac{I}{I_0}\\right) = x$$`}</span>
          </div>

          <h3>Worked Example: Solving the Law for Intensity</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): solve for $I$`}</span>
              <p className="lrn-step-content">
                {`Multiply both sides by $-k$: $\\ln\\!\\left(\\dfrac{I}{I_0}\\right) = -kx$. Raise $e$ to both sides to undo the log (exponentiate): $\\dfrac{I}{I_0} = e^{-kx}$. Multiply by $I_0$: $I = I_0e^{-kx}$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): $k=0.025$, $I_0=14$ lumens, $x=20$ feet`}</span>
              <p className="lrn-step-content">
                {`$I = 14e^{-0.025(20)} = 14e^{-0.5} \\approx 8.49$ lumens.`}
              </p>
            </div>
          </div>

          <div className="lrn-graph">
            <LightDecayViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does solving the Beer-Lambert Law for the intensity require exponentiating both
              sides, instead of taking a logarithm?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The unknown intensity $I$ is trapped inside a logarithm here, not sitting in an exponent. Exponentiating both sides frees a variable from inside a log. It is the mirror image of taking a log to free a variable from an exponent.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`\\$5000 invested at the same interest rate grows differently depending on how often interest compounds. Predict whether compounding continuously reaches double the money faster or slower than compounding twice a year.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Faster. Continuous compounding is the fastest possible compounding schedule at a
                given rate, so it reaches double the soonest.
              </p>
            </details>
          </div>

          <h2>Application: Compound Interest and Investment Growth</h2>

          <p>
            {`Choose the compound-interest formula that matches how often the bank adds interest. Treat continuous compounding as the fastest-growth limit of the other two.`}
          </p>

          <p>
            {`You already built these formulas: $A(t) = P\\left(1+\\dfrac{r}{n}\\right)^{nt}$ for interest added $n$ times a year, and $A(t) = Pe^{rt}$ for continuous compounding. This page adds the new part: solving them for the time $t$ with logarithms.`}
          </p>

          <h3>Worked Example: Time to Double an Investment</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): \\$5000 at 5%, compounded semiannually`}</span>
              <p className="lrn-step-content">
                {`$5000\\left(1+\\dfrac{0.05}{2}\\right)^{2t} = 10000$. Divide by $5000$: $(1.025)^{2t} = 2$. Take a logarithm of both sides and bring down the exponent: $2t\\log 1.025 = \\log 2$. Solve: $t = \\dfrac{\\log 2}{2\\log 1.025} \\approx 14.04$ years.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): \\$5000 at 5%, compounded continuously`}</span>
              <p className="lrn-step-content">
                {`$5000e^{0.05t} = 10000$. Divide by $5000$: $e^{0.05t} = 2$. Take a natural logarithm: $0.05t = \\ln 2$. Solve: $t = \\dfrac{\\ln 2}{0.05} \\approx 13.86$ years.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the continuous-compounding doubling time come out smaller than the semiannual
              doubling time?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Continuous compounding adds interest constantly rather than twice a year, so the
                balance grows slightly faster at every instant. Growing faster at every moment means
                it reaches double sooner.
              </p>
            </details>
          </div>

          <h3>Worked Example: Time to Reach a Target Amount</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$1000 growing to $4000 at 4%, compounded continuously`}</span>
              <p className="lrn-step-content">
                {`$1000e^{0.04t} = 4000$. Divide by $1000$: $e^{0.04t} = 4$. Take a natural logarithm: $0.04t = \\ln 4$. Solve: $t = \\dfrac{\\ln 4}{0.04} \\approx 34.66$ years, about $34$ years and $8$ months.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does this problem use $\\ln 4$ instead of $\\ln 2$, unlike the previous doubling example?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The investment must grow to four times its starting value here, from $1000$ to $4000$, rather than double. Since the target ratio changed from $2$ to $4$, the number inside the logarithm changes to match.`}
              </p>
            </details>
          </div>

          <div className="lrn-insight">
            <strong>{`Real-world tie-in: Radiocarbon Dating`}</strong>
            <p>
              Radiocarbon dating uses this exact same exponential pattern, just shrinking instead of
              growing. A donkey bone contains 73 percent of its original carbon-14, and carbon-14
              has a half-life of 5730 years.
            </p>
            <p>
              {`The exponent divides $\\ln 2$ by the half-life $5730$. That is exactly what makes the amount halve once every $5730$ years.`}
            </p>
            <p>
              {`Solve $0.73 = e^{-(t\\ln 2)/5730}$ for $t$. Take $\\ln$ of both sides: $\\ln 0.73 = -\\dfrac{t\\ln 2}{5730}$. Solve for $t$: $t = -\\dfrac{5730\\ln 0.73}{\\ln 2} \\approx 2600$ years old.`}
            </p>
            <p>
              {`The same $Pe^{kt}$ pattern models a growing investment and a shrinking sample. A positive rate grows and a negative rate decays, but the algebra for solving either one stays identical.`}
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Solve $7^x = 343$.`,
        a: `Rewrite $343$ as a power of $7$: $343 = 7^3$. The equation becomes $7^x = 7^3$. By the one-to-one property of exponential functions, $x = 3$.`
      },
      {
        q: `Solve $4^{x-1} = 9$, giving an exact expression and a decimal approximation.`,
        a: `Take a logarithm of both sides: $(x-1)\\log 4 = \\log 9$. Divide by $\\log 4$: $x - 1 = \\dfrac{\\log 9}{\\log 4}$. Add $1$: $x = 1 + \\dfrac{\\log 9}{\\log 4} \\approx 2.585$.`
      },
      {
        q: `Predict: without solving, does $6^x = 6^{x+1}$ have any solution? Explain.`,
        a: `No solution exists. Matching exponents by the one-to-one property would require $x = x+1$, and no number satisfies that equation. So there is no value of $x$ that makes the two sides equal.`
      },
      {
        q: `Solve $e^{2x} - e^x - 2 = 0$.`,
        a: `Substitute $w = e^x$: $w^2 - w - 2 = 0$. Factor: $(w-2)(w+1) = 0$, so $w = 2$ or $w = -1$. Since $e^x$ is never negative, reject $w=-1$. From $e^x = 2$: $x = \\ln 2 \\approx 0.693$.`
      },
      {
        q: `Solve $2^{2x} - 3(2^x) + 2 = 0$ using substitution, and check that both branches are valid.`,
        a: `Let $w = 2^x$, noting $2^{2x} = w^2$: $w^2 - 3w + 2 = 0$. Factor: $(w-1)(w-2) = 0$, so $w=1$ or $w=2$. Both are positive, so both are valid for $2^x$: $2^x=1$ gives $x=0$, and $2^x=2$ gives $x=1$.`
      },
      {
        q: `Elaborate: why must $w = e^x$ always come out positive when solving a quadratic-type exponential equation?`,
        a: `The expression $e^x$ produces only positive values for every real number $x$. A negative or zero root cannot match any real $x$. Reject it before you undo the substitution.`
      },
      {
        q: `Solve $x^2e^x - 4e^x = 0$.`,
        a: `Factor out the common term $e^x$: $e^x(x^2-4) = 0$. Since $e^x$ is never $0$, divide both sides by $e^x$: $x^2 - 4 = 0$, so $x = 2$ or $x = -2$.`
      },
      {
        q: `Method selection: given $5xe^x - 2x^2e^x = 0$, would you use substitution or factoring, and why?`,
        a: `Factoring, not substitution. Here $e^x$ is a common factor in every term. It does not appear squared in one term and first-power in another. Use substitution only for that quadratic-in-disguise pattern, which this equation is not.`
      },
      {
        q: `Solve $\\log_3(x+5) = \\log_3(2x-1)$, checking the domain of each side.`,
        a: `By the one-to-one property, $x + 5 = 2x - 1$, so $x = 6$. Check: $x+5 = 11 > 0$ and $2x-1 = 11 > 0$. Both arguments stay positive, so $x = 6$ is valid.`
      },
      {
        q: `Solve $\\log(x^2) = \\log(3x+4)$ and check every candidate root against the domain.`,
        a: `By the one-to-one property, $x^2 = 3x+4$, so $x^2 - 3x - 4 = 0$, giving $(x-4)(x+1) = 0$: $x=4$ or $x=-1$. Check $x=4$: $x^2=16>0$ and $3x+4=16>0$, valid. Check $x=-1$: $x^2=1>0$ and $3x+4=1>0$, also valid. Both roots work here.`
      },
      {
        q: `Solve $5e^{3x}=40$, and explain why you divide by $5$ before taking the natural log.`,
        a: `Divide by $5$ first: $e^{3x}=8$. Take the natural log: $3x=\\ln 8$. Divide by $3$: $x=\\dfrac{\\ln 8}{3} \\approx 0.693$. Dividing by $5$ first isolates the exponential. Taking the log while the $5$ is still attached would add an extra term, $\\ln 5$, to subtract away later.`
      },
      {
        q: `Solve $\\log_4(x+3) = 2$.`,
        a: `Rewrite in exponential form: $x + 3 = 4^2 = 16$. Solve: $x = 13$.`
      },
      {
        q: `Solve $2 + 5\\log(3x) = 17$.`,
        a: `Subtract $2$: $5\\log(3x) = 15$. Divide by $5$: $\\log(3x) = 3$. Rewrite in exponential form: $3x = 10^3 = 1000$. Divide by $3$: $x = \\dfrac{1000}{3} \\approx 333.33$.`
      },
      {
        q: `Transfer: solve $\\ln(2x-1) = 5$.`,
        a: `Rewrite in exponential form: $2x - 1 = e^5$. Add $1$ and divide by $2$: $x = \\dfrac{e^5+1}{2} \\approx 74.71$.`
      },
      {
        q: `Elaborate: why does converting $\\log_a(N) = k$ into $a^k = N$ never introduce an extraneous root, unlike squaring both sides of an equation?`,
        a: `This conversion simply restates the definition of a logarithm; it is a two-way equivalent step, true in both directions at once. Squaring both sides is different. It can turn a false equation true, because a positive and a negative number square to the same result. The logarithm-to-exponent conversion has no such hidden extra case.`
      },
      {
        q: `Solve $\\log(x-3) + \\log(x) = 1$, checking both candidate roots.`,
        a: `Combine with the Product Law: $\\log[x(x-3)] = 1$, so $x(x-3) = 10$, giving $x^2 - 3x - 10 = 0$, which factors as $(x-5)(x+2) = 0$: $x=5$ or $x=-2$. Reject $x=-2$, since $\\log(x)$ is undefined for a negative argument. Accept $x=5$, since $x-3=2>0$ and $x=5>0$.`
      },
      {
        q: `Error-detection: a student solves $\\log(x+1)+\\log(x-4)=1$, finds two roots, and reports both as final answers without checking. What step is missing, and why does it matter?`,
        a: `The student must substitute each candidate root back into every original logarithm and confirm every argument stays positive. Skipping this step risks reporting an extraneous root. That root solves the rearranged polynomial but makes an original logarithm undefined.`
      },
      {
        q: `Transfer: explain why $e^{2x} = -9$ has no real solution.`,
        a: `The expression $e^{2x}$ only ever outputs a positive number, for any real exponent. Since $-9$ is negative, no real value of $x$ can ever produce it.`
      },
      {
        q: `Elaborate: compare, in one sentence each, why $e^x = -2$ fails in one earlier example and why $x = -4$ fails in another.`,
        a: `$e^x = -2$ fails because the exponential function's range never includes negative numbers. $x = -4$ fails because substituting it back forces a logarithm's argument negative, and logarithms only accept positive arguments.`
      },
      {
        q: `Conceptual: for $x = \\ln(x+3)$, explain why you cannot isolate $x$ algebraically, and describe a graphical alternative.`,
        a: `The variable $x$ appears both outside and inside the logarithm, and no law of logarithms or exponents separates the two occurrences. Graphing $y = x - \\ln(x+3)$ and finding where the curve crosses zero locates the approximate solutions instead.`
      },
      {
        q: `Transfer: the equation $2x = \\ln(x+5)$ mixes $x$ with a logarithm term. Which method solves it, algebraic or graphical, and why?`,
        a: `Graphical. The variable $x$ sits both outside and inside the logarithm. No combination of logarithm or exponent laws isolates it on one side. Graphing the difference and finding where it crosses zero is the only route to an approximate answer.`
      },
      {
        q: `Solve $e^x > 10$.`,
        a: `Solve the matching equation first: $e^x = 10$ gives $x = \\ln 10$. Since $e^x$ is increasing everywhere, $e^x > 10$ exactly when $x > \\ln 10$.`
      },
      {
        q: `Solve $\\log(x) < 2$, including any domain restriction.`,
        a: `Solve the matching equation: $\\log x = 2$ gives $x = 100$. Since $\\log x$ is increasing, $\\log x < 2$ when $x < 100$. But $\\log x$ also requires $x > 0$. Combining both conditions gives $0 < x < 100$.`
      },
      {
        q: `Conceptual: why does solving $\\log(x) < 2$ need an extra domain condition that solving $e^x > 10$ does not?`,
        a: `A logarithm is only defined for a positive argument, so you must include that domain restriction alongside the inequality's boundary. An exponential expression is defined for every real number, with no matching restriction to add.`
      },
      {
        q: `Applied: using $I = I_0e^{-kx}$ with $k=0.03$, $I_0=20$ lumens, and $x=15$ feet, find the intensity $I$.`,
        a: `$I = 20e^{-0.03(15)} = 20e^{-0.45} \\approx 20(0.6376) \\approx 12.75$ lumens.`
      },
      {
        q: `Transfer: if depth $x$ doubles while $k$ and $I_0$ stay fixed, does intensity $I$ get cut exactly in half, or by more than half? Use the Beer-Lambert Law to justify your answer.`,
        a: `By more than half, in general. Intensity decreases exponentially with depth, not linearly. Doubling $x$ squares the decay factor, since $e^{-k(2x)} = (e^{-kx})^2$. Squaring a fraction between $0$ and $1$ shrinks it more than halving would.`
      },
      {
        q: `Solve $\\ln\\!\\left(\\dfrac{P}{500}\\right) = 0.2$ for $P$, and explain why you raise $e$ to both sides instead of taking another logarithm.`,
        a: `Raise $e$ to both sides: $\\dfrac{P}{500} = e^{0.2}$. Multiply by $500$: $P = 500e^{0.2} \\approx 610.7$. The unknown $P$ is trapped inside a logarithm, and raising $e$ to both sides undoes that logarithm directly. Taking another logarithm would only bury $P$ deeper.`
      },
      {
        q: `Solve for the time to grow $2000 to $6000 at 6 percent, compounded continuously.`,
        a: `$2000e^{0.06t} = 6000$. Divide by $2000$: $e^{0.06t}=3$. Take a natural logarithm: $0.06t=\\ln 3$. Solve: $t = \\dfrac{\\ln 3}{0.06} \\approx 18.31$ years.`
      },
      {
        q: `Solve for the time to double $3000 at 4 percent, compounded quarterly.`,
        a: `$3000\\left(1+\\dfrac{0.04}{4}\\right)^{4t} = 6000$. Divide by $3000$: $(1.01)^{4t}=2$. Take a logarithm and bring down the exponent: $4t\\log 1.01 = \\log 2$. Solve: $t = \\dfrac{\\log 2}{4\\log 1.01} \\approx 17.42$ years.`
      },
      {
        q: `Transfer: a fossil sample contains 40 percent of its original carbon-14, with a half-life of 5730 years. Find its age, using the same method as the radiocarbon dating example.`,
        a: `Solve $0.40 = e^{-(t\\ln 2)/5730}$: take $\\ln$ of both sides, $\\ln 0.40 = -\\dfrac{t\\ln 2}{5730}$. Solve for $t$: $t = -\\dfrac{5730\\ln 0.40}{\\ln 2} \\approx 7570$ years old.`
      },
      {
        q: `Elaborate: a bacteria colony grows by $Pe^{kt}$ with a positive $k$, while a warm drink cools by the same $Pe^{kt}$ with a negative $k$. Why does one formula fit both?`,
        a: `Both quantities change by a constant percentage of the current amount per unit of time. A positive $k$ makes that percentage add on, so the amount grows. A negative $k$ makes it subtract off, so the amount shrinks. The algebra for solving either one is identical.`
      },
      {
        q: `Applied: at the same stated rate, does a savings account reach a target balance sooner when interest is added monthly or continuously? Explain.`,
        a: `Sooner when interest is added continuously. Continuous compounding adds interest at every instant, rather than in separate steps once a month. Growing at every instant means the balance climbs a little faster, so it reaches the target sooner at the same stated rate.`
      },
      {
        q: `Conceptual: restate the three-step guideline for solving an exponential equation by logarithms.`,
        a: `First, isolate the exponential expression on one side of the equation. Second, take a logarithm of both sides and use the laws of logarithms to bring the exponent down as a coefficient. Third, solve the resulting equation for the variable.`
      },
      {
        q: `Conceptual: restate the three-step guideline for solving a logarithmic equation.`,
        a: `First, isolate the logarithmic term on one side, combining logarithms first if there is more than one. Second, rewrite the equation in exponential form. Third, solve the resulting equation for the variable.`
      },
      {
        q: `Transfer: solve $\\log_2(x) + \\log_2(x-2) = 3$, checking the domain of both candidate roots.`,
        a: `Combine with the Product Law: $\\log_2[x(x-2)] = 3$, so $x(x-2)=8$, giving $x^2-2x-8=0$, which factors as $(x-4)(x+2)=0$: $x=4$ or $x=-2$. Reject $x=-2$, since $\\log_2(x)$ is undefined for a negative argument. Accept $x=4$, since $x=4>0$ and $x-2=2>0$.`
      },
      {
        q: `Elaborate: why does an exponential equation like $5^x=125$ never need the same domain check a logarithmic equation does?`,
        a: `An exponential expression like $5^x$ accepts every real number $x$, with no restriction on the input. A logarithm only accepts a positive argument. So only the logarithm side of an equation can produce a root you must reject afterward.`
      },
      {
        q: `Predict: can you solve $9^x = 3$ using the common-base method? Explain.`,
        a: `Yes. Since $9 = 3^2$, rewrite both sides with base $3$: $3^{2x} = 3^1$. By the one-to-one property, $2x = 1$, so $x = \\dfrac{1}{2}$.`
      },
      {
        q: `Elaborate: why must the base $a$ satisfy $a>0$ and $a \\neq 1$ for the one-to-one property of exponential functions to hold?`,
        a: `A base of $1$ gives $1^x = 1$ for every $x$, so equal outputs would never force equal inputs. A base of $0$ or a negative base is undefined for many exponents, or it stops climbing steadily. Either way, an output no longer traces back to exactly one input.`
      },
      {
        q: `Solve $\\log_2(25-x) = 4$.`,
        a: `Rewrite in exponential form: $25 - x = 2^4 = 16$. Solve: $x = 9$.`
      },
      {
        q: `Solve $6e^{3x} = 42$.`,
        a: `Divide by $6$: $e^{3x} = 7$. Take a natural logarithm: $3x = \\ln 7$. Divide by $3$: $x = \\dfrac{\\ln 7}{3} \\approx 0.649$.`
      },
      {
        q: `Self-explain: in the compound interest formula $A(t)=P\\left(1+\\dfrac{r}{n}\\right)^{nt}$, explain why increasing $n$ while keeping $r$ and $t$ fixed increases the final amount, but only up to a limit.`,
        a: `Increasing $n$ compounds interest in smaller, more frequent steps within the same year, which grows the balance slightly faster. But this speedup has a ceiling. As $n$ grows without bound, the formula approaches $Pe^{rt}$ and never beats that limit.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Exponential and Logarithmic Equations',
      sections: [
        <>
          <h2>The Exponential-Logarithm Equivalence</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Definition, both directions</span>
            <div className="ref-formula-eq">{`$$\\log_a x = y \\iff a^y = x$$`}</div>
            <p className="ref-formula-desc">
              When to use: switching between exponential and logarithmic form, whichever isolates
              the variable more easily.
            </p>
          </div>

          <h2>One-to-One Properties</h2>

          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Statement</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Exponential</td>
                <td>{`$a^x = a^y \\Rightarrow x = y$`}</td>
                <td>Both sides share a common base</td>
              </tr>
              <tr>
                <td>Logarithmic</td>
                <td>{`$\\log_a x = \\log_a y \\Rightarrow x = y$`}</td>
                <td>Both sides reduce to a single log, same base</td>
              </tr>
            </tbody>
          </table>

          <h2>Guidelines: Solving Exponential Equations</h2>

          <ol className="lrn-list">
            <li>Isolate the exponential expression on one side.</li>
            <li>Take a logarithm of both sides and bring down the exponent.</li>
            <li>Solve for the variable.</li>
          </ol>

          <h2>Guidelines: Solving Logarithmic Equations</h2>

          <ol className="lrn-list">
            <li>Isolate the logarithmic term, combining logs first if needed.</li>
            <li>Rewrite in exponential form.</li>
            <li>Solve for the variable.</li>
          </ol>

          <h2>Quadratic-Type Substitution</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">{`Let $w = e^x$ or $w = a^x$`}</span>
            <div className="ref-formula-eq">{`$$w^2 + bw + c = 0$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: the same exponential expression appears both squared and to the first power in one equation. Reject any root of $w$ that is zero or negative before undoing the substitution.`}
            </p>
          </div>

          <h2>Extraneous Solutions: Two Different Reasons</h2>

          <div className="ref-grid">
            <div className="ref-item">
              <strong>{`$e^x = $ negative number`}</strong>
              <p>Rejected: the exponential function's range never includes negative numbers.</p>
            </div>
            <div className="ref-item">
              <strong>Log argument goes negative</strong>
              <p>Rejected: the logarithm function's domain only accepts positive arguments.</p>
            </div>
          </div>

          <h2>Exponential and Logarithmic Inequalities</h2>

          <p>
            {`Solve the matching equation for the boundary number first. Exponential and logarithmic functions increase steadily, with no reversals. So the boundary splits the number line into a true side and a false side. Remember to keep any logarithm's domain restriction, $x > 0$, alongside the boundary.`}
          </p>

          <h2>Applications</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Beer-Lambert Law (light transparency)</span>
            <div className="ref-formula-eq">{`$$I = I_0e^{-kx}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: intensity of light $I$ after traveling depth $x$ through a medium, given starting intensity $I_0$ and absorption constant $k$.`}
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Compound Interest</span>
            <div className="ref-formula-eq">
              {`$$A(t) = P\\left(1+\\dfrac{r}{n}\\right)^{nt} \\qquad A(t) = Pe^{rt} \\text{ (continuous)}$$`}
            </div>
            <p className="ref-formula-desc">
              {`When to use: finding a final balance, or solving for time to reach a target amount, given principal $P$, rate $r$, and compounding frequency $n$.`}
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Radioactive Decay and Radiocarbon Dating</span>
            <div className="ref-formula-eq">{`$$m(t) = m_0e^{-\\frac{t\\ln 2}{h}}$$`}</div>
            <p className="ref-formula-desc">
              {`When to use: finding remaining amount, or solving for elapsed time $t$, given a half-life $h$ and starting amount $m_0$.`}
            </p>
          </div>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function ExponentialAndLogarithmicEquations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
