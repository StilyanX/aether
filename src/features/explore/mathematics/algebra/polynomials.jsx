import 'katex/dist/katex.min.css'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { PolynomialCurveViz, PolynomialLabeledViz } from '../../../../components/viz'
function useConfig() {
  const config = {
    cssPrefix: 'pol',
    documentTitle: 'Polynomials AETHER',
    learning: {
      groupTitle: 'Numbers and Expressions',
      category: 'Algebra',
      title: 'Polynomials',
      subtitle:
        'Polynomial arithmetic, factoring, rational expressions, exponential functions, logarithms, and special functions.',
      sections: [
        <>
          <h2>What Is a Polynomial?</h2>

          <p>
            A <strong>monomial</strong> is a single product of numbers and variables. Every variable
            carries a non-negative integer exponent. Examples: {`$3x^2y$`}, {`$-5ab^3$`}, {`$7$`},{' '}
            {`$x$`}.
          </p>

          <p>The minus sign in {`$-5ab^3$`} is part of the coefficient. It is not subtraction.</p>

          <p>
            A <strong>polynomial</strong> is a sum of monomials. Each monomial in the sum is a{' '}
            <strong>term</strong>; the number in front of its variable part is the term's
            coefficient, as on the Algebraic Foundations page.
          </p>

          <p>
            A monomial is itself a polynomial, just one term. "Poly" means many, "mono" means one.
          </p>

          <p>
            So {`$3x^2y$`} is a monomial (one product term), and {`$3x^2y + 2xy - 7$`} is a
            polynomial (a sum of monomials).
          </p>

          <h3>Degree</h3>

          <p>
            The <strong>degree of a monomial</strong> is the sum of all its exponents. For{' '}
            {`$3x^2y$`}, the exponents are 2 and 1, so the degree is 3. The constant 7 equals{' '}
            {`$7 \\cdot x^0$`}, so its degree is 0.
          </p>

          <p>
            The <strong>degree of a polynomial</strong> is the degree of its highest-degree nonzero
            term. For {`$4x^3 + 2x - 1$`}, the degree is 3.
          </p>

          <p>
            The <strong>zero polynomial</strong> (every coefficient zero) has no defined degree.
            Picking any "highest term" would be arbitrary, so the degree is left undefined.
          </p>

          <h3>Standard Form</h3>

          <p>Standard form lists terms in decreasing order of degree.</p>

          <p>
            Example: {`$2x + 5 - 3x^3 + x^2$`} in standard form is {`$-3x^3 + x^2 + 2x + 5$`}.
          </p>

          <div className="lrn-graph">
            <PolynomialLabeledViz />
          </div>

          <h3>Like Terms</h3>

          <p>
            Like terms share the same variables raised to the same powers, so you combine them by
            adding coefficients, same rule as in Algebraic Foundations. Example:{' '}
            {`$5x^2y + 3x^2y - 2x^2y = 6x^2y$`}.
          </p>

          <h3>When Two Polynomials Are Equal</h3>

          <p>
            Two polynomials are equal when, after collecting like terms, every coefficient matches:
            same constant, same coefficient on {`$x$`}, on {`$x^2$`}, and so on. The full Identity
            Principle below makes this precise.
          </p>
        </>,

        <>
          <h2>Polynomial Arithmetic</h2>

          <h3>Adding and Subtracting</h3>

          <p>
            Collect like terms and combine their coefficients. Every other term stays unchanged.
          </p>

          <div className="lrn-eq">
            <span>{`$$(3x^2 + 2x - 1) + (x^2 - 5x + 4)$$`}</span>
            <span>{`$$= (3+1)x^2 + (2-5)x + (-1+4)$$`}</span>
            <span>{`$$= 4x^2 - 3x + 3$$`}</span>
          </div>

          <h3>Multiplying</h3>

          <p>
            Multiply every term in the first polynomial by every term in the second, then collect
            like terms.
          </p>

          <p>Example: {`$(x+1)(x+2) = x^2 + 2x + x + 2 = x^2 + 3x + 2$`}.</p>

          <p>
            A <strong>binomial</strong> is a polynomial with two terms, like {`$x + 3$`} or{' '}
            {`$2y - 1$`}. A <strong>trinomial</strong> has three.
          </p>

          <p>
            The short-multiplication identities, difference of squares, square of a sum, square of
            a difference, cubes of sums and differences, live on the Algebraic Identities page. You
            use them constantly from here on.
          </p>

          <h3>The Binomial Theorem</h3>

          <p>
            To expand {`$(a+b)^n$`} for any positive integer {`$n$`}, you do not need to multiply{' '}
            {`$n$`} brackets by hand. The Binomial Theorem gives every coefficient at once.
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k}\\, a^{n-k}\\, b^k$$`}</span>
          </div>

          <p>
            The number {`$\\binom{n}{k}$`} (read "n choose k") is the{' '}
            <strong>binomial coefficient</strong>:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}$$`}</span>
          </div>

          <p>
            Here {`$n! = n\\cdot(n-1)\\cdots 2\\cdot 1$`}, with {`$0! = 1$`} by convention. The same
            numbers are row {`$n$`} of Pascal's triangle (see Algebraic Identities), the factorial
            form lets you compute any coefficient without rebuilding the triangle.
          </p>

          <p>
            Example with {`$n = 4$`}: {`$(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$`}.
          </p>

          <p>
            Example with {`$n = 5$`}:{' '}
            {`$(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$`}.
          </p>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Picking out one coefficient</span>
            <p>
              To find the coefficient of {`$x^5$`} in {`$(2x - 3)^8$`}, pick the term with{' '}
              {`$k = 3$`}, since {`$(2x)^{8-k}$`} gives {`$x^5$`} when {`$8 - k = 5$`}.
            </p>
            <p>
              That term is{' '}
              {`$\\binom{8}{3}(2x)^5(-3)^3 = 56 \\cdot 32 \\cdot (-27)\\, x^5 = -48{,}384\\, x^5$`}.
              The coefficient is {`$-48{,}384$`}.
            </p>
          </div>

          <h3>Degree Rules</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Degree of a product</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\deg(P \\cdot Q) = \\deg(P) + \\deg(Q)$`}. The leading terms multiply, and no
                cancellation can lower the degree.
              </p>
              <p>
                Example: {`$P = 2x^2 + 3x$`} (degree 2) times {`$Q = x^3 + 1$`} (degree 3) has
                degree 5. The leading product is {`$2x^2 \\cdot x^3 = 2x^5$`}.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Degree of a sum</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\deg(P + Q) \\leq \\max(\\deg P, \\deg Q)$`}. Equality holds unless the leading
                terms cancel.
              </p>
              <p>
                Example: {`$P = x^3 + x$`}, {`$Q = -x^3 + 2$`}. Then {`$P + Q = x + 2$`} has degree
                1.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Factoring Polynomials</h2>

          <p>
            Factoring is multiplication in reverse. Given a polynomial, you write it as a product of
            simpler polynomials. Factoring exposes roots, simplifies fractions, and solves
            equations.
          </p>

          <h3>Common Factor</h3>

          <p>
            Always look for a shared factor first and pull it out, as in Algebraic Foundations.
            Example: {`$6x^3 + 9x^2 = 3x^2(2x + 3)$`}.
          </p>

          <h3>Grouping</h3>

          <p>Group terms in pairs, factor each pair, then factor out the common piece.</p>

          <p>Example: {`$ab + ac + b^2 + bc = a(b+c) + b(b+c) = (a+b)(b+c)$`}.</p>

          <p>
            Both groups share the binomial {`$(b+c)$`} after the first round of factoring. Pulling
            it out finishes the job.
          </p>

          <p>
            The choice of pairing matters. For {`$2x^3 - 6x^2 + x - 3$`}, pair as{' '}
            {`$(2x^3 - 6x^2) + (x - 3) = 2x^2(x - 3) + 1(x - 3) = (x - 3)(2x^2 + 1)$`}. Pairing{' '}
            {`$(2x^3 + x) + (-6x^2 - 3) = x(2x^2 + 1) - 3(2x^2 + 1) = (x - 3)(2x^2 + 1)$`} also
            works.
          </p>

          <p>
            Pair {`$(2x^3 - 3) + (-6x^2 + x)$`} and neither group factors cleanly. If the first
            pairing fails, try the other.
          </p>

          <h3>Difference and Sum of Cubes</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$`}</span>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$`}</span>
          </div>

          <p>Difference of cubes: {`$8x^3 - 27 = (2x)^3 - 3^3 = (2x-3)(4x^2+6x+9)$`}.</p>
          <p>Sum of cubes: {`$x^3 + 1 = (x+1)(x^2-x+1)$`}.</p>

          <h3>Higher Powers</h3>

          <p>
            For odd {`$n$`}, {`$a^n + b^n$`} factors as{' '}
            {`$(a+b)(a^{n-1} - a^{n-2}b + \\cdots + b^{n-1})$`}. The signs alternate.
          </p>

          <p>Example: {`$a^5 + b^5 = (a+b)(a^4 - a^3b + a^2b^2 - ab^3 + b^4)$`}.</p>

          <p>
            For any {`$n$`}, {`$a^n - b^n$`} factors as{' '}
            {`$(a-b)(a^{n-1} + a^{n-2}b + \\cdots + b^{n-1})$`}. All signs are positive.
          </p>

          <h3>What Does Not Factor Over the Reals</h3>

          <p>
            {`$a^2 + b^2$`} has no real factorization, because {`$x^2 + 1 = 0$`} has no real root
            (see Quadratic Equations). {`$a^4 + b^4$`} factors only with irrational coefficients:{' '}
            {`$(a^2 + \\sqrt{2}\\,ab + b^2)(a^2 - \\sqrt{2}\\,ab + b^2)$`}.
          </p>
        </>,

        <>
          <h2>Rational Expressions</h2>

          <p>
            A <strong>rational expression</strong> is one polynomial divided by another. The only
            rule: the denominator must not be zero. Where the denominator hits zero, the expression
            is undefined.
          </p>

          <h3>The Four Operations</h3>

          <div className="lrn-eq">
            <span>{`$$\\frac{P}{Q} + \\frac{R}{S} = \\frac{PS + QR}{QS}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\frac{P}{Q} - \\frac{R}{S} = \\frac{PS - QR}{QS}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\frac{P}{Q} \\cdot \\frac{R}{S} = \\frac{PR}{QS}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\frac{\\frac{P}{Q}}{\\frac{R}{S}} = \\frac{PS}{QR}$$`}</span>
          </div>

          <p>
            Same four operations as algebraic fractions in Algebraic Foundations, extended to
            polynomial top and bottom.
          </p>

          <h3>Cancellation</h3>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              {`$\\frac{x^3+x^2+x+1}{x^2-1}$`} is undefined at both {`$x = 1$`} and {`$x = -1$`}.
              Factor and cancel: {`$\\frac{(x+1)(x^2+1)}{(x+1)(x-1)} = \\frac{x^2+1}{x-1}$`}. The
              simplified form looks defined at {`$x = -1$`}, but the original was not. List the
              forbidden values before you cancel.
            </p>
          </div>
        </>,

        <>
          <h2>Polynomial Long Division</h2>

          <p>
            When the numerator of a rational expression has degree at least as large as the
            denominator, you can extract a polynomial quotient with a smaller remainder.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Proper</span>
              <p>{`$\\deg(\\text{num}) < \\deg(\\text{den})$`}. Nothing to extract.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Improper</span>
              <p>
                {`$\\deg(\\text{num}) \\geq \\deg(\\text{den})$`}. Long division gives a quotient
                plus a proper remainder.
              </p>
            </div>
          </div>

          <h3>The Division Algorithm</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Division algorithm</span>
            <div className="lrn-definition-desc">
              <p>
                For any polynomials {`$P$`} (dividend) and {`$D \\neq 0$`} (divisor), there exist{' '}
                <em>unique</em> polynomials {`$Q$`} (quotient) and {`$R$`} (remainder) with:
              </p>
              <p style={{ textAlign: 'center' }}>
                {`$P = Q \\cdot D + R$`} and {`$\\deg(R) < \\deg(D)$`}.
              </p>
            </div>
          </div>

          <p>
            Uniqueness is what makes long division an algorithm: the same inputs always produce the
            same quotient and remainder.
          </p>

          <h3>Worked Example 1 x⁴ ÷ (x − 2)</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">
                {`$x^4 \\div x = x^3$`}. Multiply: {`$x^3(x-2) = x^4 - 2x^3$`}. Subtract: {`$2x^3$`}
                .
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">
                {`$2x^3 \\div x = 2x^2$`}. Multiply: {`$2x^3 - 4x^2$`}. Subtract: {`$4x^2$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3</span>
              <p className="lrn-step-content">
                {`$4x^2 \\div x = 4x$`}. Multiply: {`$4x^2 - 8x$`}. Subtract: {`$8x$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4</span>
              <p className="lrn-step-content">
                {`$8x \\div x = 8$`}. Multiply: {`$8x - 16$`}. Subtract: {`$16$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">{`$x^4 = (x^3 + 2x^2 + 4x + 8)(x - 2) + 16$`}.</p>
            </div>
          </div>

          <h3>Worked Example 2 (x³ + 2x) ÷ (x² − x + 1)</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">
                {`$x^3 \\div x^2 = x$`}. Multiply: {`$x(x^2 - x + 1) = x^3 - x^2 + x$`}. Subtract:{' '}
                {`$x^2 + x$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">
                {`$x^2 \\div x^2 = 1$`}. Multiply: {`$x^2 - x + 1$`}. Subtract:{' '}
                {`$(x^2 + x) - (x^2 - x + 1) = 2x - 1$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">
                Remainder {`$2x - 1$`} has degree 1, less than the divisor's degree 2. Stop.
                Quotient {`$(x + 1)$`}, remainder {`$(2x - 1)$`}.
              </p>
            </div>
          </div>

          <h3>Worked Example 3 x³ ÷ (2x − 3)</h3>

          <p>
            A divisor with leading coefficient not 1 produces fractional coefficients in the
            quotient. That is normal.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">
                {`$x^3 \\div 2x = \\frac{1}{2}x^2$`}. Multiply:{' '}
                {`$\\frac{1}{2}x^2(2x - 3) = x^3 - \\frac{3}{2}x^2$`}. Subtract:{' '}
                {`$\\frac{3}{2}x^2$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">
                {`$\\frac{3}{2}x^2 \\div 2x = \\frac{3}{4}x$`}. Multiply:{' '}
                {`$\\frac{3}{2}x^2 - \\frac{9}{4}x$`}. Subtract: {`$\\frac{9}{4}x$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3</span>
              <p className="lrn-step-content">
                {`$\\frac{9}{4}x \\div 2x = \\frac{9}{8}$`}. Multiply:{' '}
                {`$\\frac{9}{4}x - \\frac{27}{8}$`}. Subtract: {`$\\frac{27}{8}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">
                {`$x^3 = \\left(\\frac{1}{2}x^2 + \\frac{3}{4}x + \\frac{9}{8}\\right)(2x - 3) + \\frac{27}{8}$`}
                .
              </p>
            </div>
          </div>

          <h3>The Geometric Sum Formula</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{x^n - 1}{x - 1} = x^{n-1} + x^{n-2} + \\cdots + x + 1 \\quad (x \\neq 1)$$`}</span>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Multiply the right side by {`$(x - 1)$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`$(x-1)(x^{n-1} + x^{n-2} + \\cdots + 1) = x^n + x^{n-1} + \\cdots + x - (x^{n-1} + \\cdots + 1) = x^n - 1$`}
                . Every middle term cancels.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Divide both sides by {`$(x - 1)$`}, valid for {`$x \\neq 1$`}.
              </div>
            </div>
            <div className="lrn-qed">End of proof.</div>
          </div>

          <p>
            Setting {`$x = 2$`} gives a classic result:{' '}
            {`$1 + 2 + 4 + \\cdots + 2^{n-1} = 2^n - 1$`}.
          </p>

          <div className="lrn-insight">
            <strong>Payoff.</strong>
            <p>
              You can now reduce any improper rational expression to a quotient plus a proper
              remainder. That is the entry requirement for partial fractions later on this page.
            </p>
          </div>
        </>,

        <>
          <h2>Synthetic Division</h2>

          <p>
            When the divisor is linear of the form {`$(x - a)$`}, synthetic division gives the same
            quotient and remainder as long division, using only the coefficients, with no algebra
            in the margin.
          </p>

          <h3>The Procedure</h3>

          <ol className="lrn-list">
            <li>
              Write the coefficients of the dividend in order of decreasing degree. Use 0 for any
              missing power.
            </li>
            <li>Write the divisor's root {`$a$`} to the left.</li>
            <li>Bring the first coefficient straight down.</li>
            <li>
              Multiply that number by {`$a$`} and write the result under the next coefficient. Add
              the column.
            </li>
            <li>Repeat until the last column is added.</li>
            <li>
              The last number is the remainder. The numbers before it are the coefficients of the
              quotient, which has degree one less than the dividend.
            </li>
          </ol>

          <h3>Worked Example Divide 2x³ + 3x² − 11x − 6 by (x − 2)</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Set up</span>
              <p className="lrn-step-content">
                Coefficients: 2, 3, −11, −6. Divisor root: {`$a = 2$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Bring down and multiply-add</span>
              <p className="lrn-step-content">
                Bring 2 down. Multiply: {`$2 \\cdot 2 = 4$`}, add to 3: gives 7. Multiply:{' '}
                {`$7 \\cdot 2 = 14$`}, add to −11: gives 3. Multiply: {`$3 \\cdot 2 = 6$`}, add to
                −6: gives 0.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Read the answer</span>
              <p className="lrn-step-content">
                Bottom row: 2, 7, 3, 0. Quotient {`$2x^2 + 7x + 3$`}, remainder 0.
              </p>
            </div>
          </div>

          <p>
            The remainder is 0, so {`$(x - 2)$`} divides the dividend exactly:{' '}
            {`$2x^3 + 3x^2 - 11x - 6 = (x - 2)(2x^2 + 7x + 3) = (x - 2)(2x + 1)(x + 3)$`}.
          </p>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">When to use which</span>
            <p>
              Long division handles any divisor. Synthetic division is faster, but only when the
              divisor has the form {`$(x - a)$`}.
            </p>
          </div>
        </>,

        <>
          <h2>The Remainder Theorem</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Remainder Theorem (Bézout)</span>
            <div className="lrn-definition-desc">
              <p>
                When you divide a polynomial {`$P(x)$`} by {`$(x - a)$`}, the remainder equals{' '}
                {`$P(a)$`}.
              </p>
            </div>
          </div>

          <p>
            Write the division as {`$P(x) = Q(x)(x - a) + R$`}. The divisor {`$(x - a)$`} has degree
            1, so the remainder {`$R$`} is a constant. Substituting {`$x = a$`} gives{' '}
            {`$P(a) = Q(a) \\cdot 0 + R = R$`}.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Remainder Theorem</span>
              <p>Computes only the remainder, right away, by evaluating {`$P(a)$`}.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Long Division</span>
              <p>Computes both the quotient and the remainder. Use when you need the quotient.</p>
            </div>
          </div>

          <h3>Worked Example x³ − 1 divided by x − 1</h3>

          <p>
            Evaluate {`$P(1) = 1^3 - 1 = 0$`}. The remainder is 0, so {`$(x - 1)$`} divides{' '}
            {`$x^3 - 1$`} exactly. Doing the long division confirms{' '}
            {`$x^3 - 1 = (x - 1)(x^2 + x + 1)$`}, which is the geometric sum at {`$n = 3$`}.
          </p>

          <h3>Roots and the Factor Theorem</h3>

          <p>
            A <strong>root</strong> (or <strong>zero</strong>) of {`$P(x)$`} is a number {`$a$`}{' '}
            with {`$P(a) = 0$`}.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Factor Theorem</span>
            <div className="lrn-definition-desc">
              <p>
                {`$(x - a)$`} is a factor of {`$P(x)$`} if and only if {`$P(a) = 0$`}.
              </p>
            </div>
          </div>

          <p>
            One direction is immediate from the Remainder Theorem: {`$P(a) = 0$`} means the
            remainder is zero, so {`$(x - a)$`} divides {`$P$`} exactly. The other direction: if{' '}
            {`$P(x) = Q(x)(x - a)$`}, then {`$P(a) = Q(a) \\cdot 0 = 0$`}.
          </p>

          <h3>Maximum Number of Distinct Roots</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Maximum Roots Theorem</span>
            <div className="lrn-definition-desc">
              <p>
                A nonzero polynomial of degree {`$n$`} has at most {`$n$`} distinct roots.
              </p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Let {`$a_1, a_2, \\ldots, a_k$`} be distinct roots of {`$P$`}. Apply the Factor
                Theorem repeatedly: {`$P(x) = (x - a_1)(x - a_2) \\cdots (x - a_k) \\cdot S(x)$`}{' '}
                for some polynomial {`$S$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Degrees add: {`$n = \\deg P = k + \\deg S \\geq k$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">So {`$k \\leq n$`}.</div>
            </div>
            <div className="lrn-qed">End of proof.</div>
          </div>

          <h3>Multiplicity</h3>

          <p>
            A root may appear in the factorization more than once. In {`$P(x) = (x - 1)^2$`}, the
            value {`$x = 1$`} is the only root, but it has <strong>multiplicity</strong> 2. The
            bound "at most {`$n$`} roots" counts <em>distinct</em> roots. Counted with multiplicity,
            a degree-{`$n$`} polynomial over the complex numbers has exactly {`$n$`} roots.
          </p>

          <div className="lrn-insight">
            <strong>The bound has teeth.</strong>
            <p>
              If a polynomial of degree at most {`$n$`} becomes zero at {`$n + 1$`} distinct points,
              it is the zero polynomial. This is the lever behind proving polynomial identities.
            </p>
          </div>

          <div className="lrn-graph">
            <PolynomialCurveViz />
          </div>
        </>,

        <>
          <h2>Graphs of Polynomial Functions</h2>

          <p>
            The graph of a polynomial is one smooth, unbroken curve. It has no gaps, no corners, and
            no jumps. Its real zeros are exactly the x-intercepts.
          </p>

          <h3>End Behavior</h3>

          <p>
            End behavior means what the graph does as {`$x$`} runs far left and far right. Only the
            leading term controls it. The degree's parity and the leading coefficient's sign fix all
            four cases.
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Degree</th>
                <th>Leading coefficient</th>
                <th>{`$x \\to -\\infty$`}</th>
                <th>{`$x \\to +\\infty$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Odd</td>
                <td>Positive</td>
                <td>{`$y \\to -\\infty$`}</td>
                <td>{`$y \\to +\\infty$`}</td>
              </tr>
              <tr>
                <td>Odd</td>
                <td>Negative</td>
                <td>{`$y \\to +\\infty$`}</td>
                <td>{`$y \\to -\\infty$`}</td>
              </tr>
              <tr>
                <td>Even</td>
                <td>Positive</td>
                <td>{`$y \\to +\\infty$`}</td>
                <td>{`$y \\to +\\infty$`}</td>
              </tr>
              <tr>
                <td>Even</td>
                <td>Negative</td>
                <td>{`$y \\to -\\infty$`}</td>
                <td>{`$y \\to -\\infty$`}</td>
              </tr>
            </tbody>
          </table>

          <p>
            Example: {`$P(x) = -2x^4 + 5x^3 + 4x - 7$`} has even degree and a negative leading
            coefficient. So {`$y \\to -\\infty$`} at both ends.
          </p>

          <p>
            Example: {`$P(x) = 3x^5 - 5x^3 + 2x$`} has odd degree and a positive leading
            coefficient. So {`$y \\to -\\infty$`} on the left and {`$y \\to +\\infty$`} on the
            right.
          </p>

          <h3>Behavior at a Zero Matches Its Multiplicity</h3>

          <p>
            Near a zero {`$c$`} of multiplicity {`$m$`}, the graph behaves in one of two ways. The
            parity of {`$m$`} decides which.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Odd multiplicity</span>
              <p>
                The graph crosses the x-axis at {`$c$`}. It flattens more as {`$m$`} grows.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Even multiplicity</span>
              <p>The graph touches the x-axis at {`$c$`} and turns back. It never crosses.</p>
            </div>
          </div>

          <p>
            Example: {`$P(x) = x^4(x - 2)^3(x + 1)^2$`} has zeros {`$0$`}, {`$2$`}, and {`$-1$`}
            with multiplicities 4, 3, and 2. The graph touches at {`$0$`} and {`$-1$`} (even), and
            crosses at {`$2$`} (odd).
          </p>

          <h3>Turning Points</h3>

          <p>
            A turning point is a local high or low point on the curve. A polynomial of degree{' '}
            {`$n$`} has at most {`$n - 1$`} turning points. It may have fewer.
          </p>

          <p>
            Example: {`$P(x) = x^5$`} has degree 5 but no turning point at all. The bound only sets
            a ceiling.
          </p>

          <h3>The Intermediate Value Theorem</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Intermediate Value Theorem for polynomials</span>
            <div className="lrn-definition-desc">
              <p>
                If {`$P(a)$`} and {`$P(b)$`} have opposite signs, then {`$P$`} has at least one zero
                between {`$a$`} and {`$b$`}.
              </p>
            </div>
          </div>

          <p>
            A sign change traps a zero. So you can locate roots by testing values until the sign
            flips. Between two neighbouring zeros the graph stays entirely above or entirely below
            the axis.
          </p>
        </>,

        <>
          <h2>Solving Polynomial Equations by the Factor Theorem</h2>

          <p>
            The Factor Theorem becomes a method as soon as you can find one root. The plan: spot a
            root by inspection, divide it out, then solve the smaller polynomial that remains.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: search for an integer root</span>
              <p className="lrn-step-content">
                Test small integers (often {`$\\pm 1$`}, {`$\\pm 2$`}, {`$\\pm 3$`}). If{' '}
                {`$P(a) = 0$`}, then {`$(x - a)$`} is a factor.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: divide</span>
              <p className="lrn-step-content">
                Use long or synthetic division to write {`$P(x) = (x - a) \\cdot Q(x)$`}, where{' '}
                {`$Q$`} has degree one less than {`$P$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: solve the reduced polynomial</span>
              <p className="lrn-step-content">
                Solve {`$Q(x) = 0$`} by any method available, factoring, the quadratic formula, or
                repeating Steps 1–2 if {`$Q$`} is still cubic or higher.
              </p>
            </div>
          </div>

          <h3>Worked Example Solve x³ − 6x² + 11x − 6 = 0</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Hunt for a root</span>
              <p className="lrn-step-content">
                Try {`$x = 1$`}: {`$1 - 6 + 11 - 6 = 0$`}. So {`$(x - 1)$`} is a factor.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Divide by (x − 1)</span>
              <p className="lrn-step-content">
                Synthetic division with {`$a = 1$`} on 1, −6, 11, −6: bring 1; {`$1 \\cdot 1 = 1$`},
                −6 + 1 = −5; {`$-5 \\cdot 1 = -5$`}, 11 − 5 = 6; {`$6 \\cdot 1 = 6$`}, −6 + 6 = 0.
                Quotient {`$x^2 - 5x + 6$`}, remainder 0.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve the quadratic</span>
              <p className="lrn-step-content">
                {`$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$`}, so {`$x = 2$`} or {`$x = 3$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">All three roots</span>
              <p className="lrn-step-content">
                {`$x = 1, 2, 3$`}. Therefore {`$x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)$`}.
              </p>
            </div>
          </div>

          <p>
            Try this yourself on {`$x^3 + 2x^2 - 5x - 6 = 0$`}. Spotting {`$x = -1$`} gives the
            factorization {`$(x + 1)(x + 3)(x - 2)$`}, with roots {`$-1, -3, 2$`}.
          </p>
        </>,

        <>
          <h2>The Rational Root Theorem</h2>

          <p>
            What if no small integer works? The Rational Root Theorem narrows the search to a short
            list of fractions, for any polynomial with integer coefficients.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rational Root Theorem</span>
            <div className="lrn-definition-desc">
              <p>
                Suppose {`$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$`} has integer
                coefficients with {`$a_n \\neq 0$`} and {`$a_0 \\neq 0$`}. If a fraction{' '}
                {`$\\tfrac{p}{q}$`} in lowest terms is a root of {`$P$`}, then {`$p$`} divides{' '}
                {`$a_0$`} and {`$q$`} divides {`$a_n$`}.
              </p>
            </div>
          </div>

          <p>
            In words: the numerator of any rational root divides the constant term; the denominator
            divides the leading coefficient. The theorem only narrows the search. Each candidate
            still needs a check by substitution.
          </p>

          <h3>Worked Example Solve 2x³ + x² − 7x − 6 = 0</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">List the candidates</span>
              <p className="lrn-step-content">
                Constant {`$a_0 = -6$`}, leading {`$a_n = 2$`}. Numerator {`$p$`} divides 6:{' '}
                {`$p \\in \\{\\pm 1, \\pm 2, \\pm 3, \\pm 6\\}$`}. Denominator {`$q$`} divides 2:{' '}
                {`$q \\in \\{\\pm 1, \\pm 2\\}$`}. Candidates:{' '}
                {`$\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\tfrac{1}{2}, \\pm \\tfrac{3}{2}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Test until one works</span>
              <p className="lrn-step-content">
                {`$P(-1) = -2 + 1 + 7 - 6 = 0$`}. So {`$(x + 1)$`} is a factor.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Divide and finish</span>
              <p className="lrn-step-content">
                {`$2x^3 + x^2 - 7x - 6 \\div (x + 1) = 2x^2 - x - 6$`}. Factor:{' '}
                {`$2x^2 - x - 6 = (2x + 3)(x - 2)$`}. All roots: {`$x = -1, -\\tfrac{3}{2}, 2$`}.
              </p>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">What the theorem misses</span>
            <p>
              Irrational and complex roots are out of reach. {`$x^2 - 2 = 0$`} has roots{' '}
              {`$\\pm \\sqrt{2}$`}, which the theorem never lists. Use it to rule out, not to prove.
            </p>
          </div>
        </>,

        <>
          <h2>Counting Real Zeros Descartes' Rule and Bounds</h2>

          <p>
            The Rational Root Theorem lists candidates. Two more tools cut that list down before you
            test it. Both save work on higher-degree polynomials.
          </p>

          <h3>Variations in Sign</h3>

          <p>
            Write the polynomial in standard form. Drop any zero terms. A{' '}
            <strong>variation in sign</strong> happens whenever two neighbouring coefficients have
            opposite signs.
          </p>

          <p>
            Example: {`$5x^7 - 3x^5 + x^4 + 2x^2 + x - 3$`} has three sign changes. Count the
            switches, not the terms.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Descartes' Rule of Signs</span>
            <div className="lrn-definition-desc">
              <p>
                The number of positive real zeros of {`$P(x)$`} equals the sign variations of{' '}
                {`$P(x)$`}, or is less than that by an even number.
              </p>
              <p>
                The number of negative real zeros equals the sign variations of {`$P(-x)$`}, or is
                less than that by an even number.
              </p>
            </div>
          </div>

          <h3>Worked Example Count the zeros of x³ + 5x² + 7x + 3</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Positive zeros</span>
              <p className="lrn-step-content">
                Signs of {`$P(x)$`}: {`$+, +, +, +$`}. Zero sign changes, so {`$P$`} has no positive
                zero.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Negative zeros</span>
              <p className="lrn-step-content">
                {`$P(-x) = -x^3 + 5x^2 - 7x + 3$`}. Signs: {`$-, +, -, +$`}. Three sign changes, so{' '}
                {`$P$`} has three or one negative zeros.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Confirm</span>
              <p className="lrn-step-content">
                Factoring gives {`$(x + 1)^2(x + 3)$`}. The zeros are {`$-1$`} (twice) and {`$-3$`}{' '}, three negative zeros, all counted.
              </p>
            </div>
          </div>

          <h3>Upper and Lower Bounds</h3>

          <p>
            A number {`$b$`} is an <strong>upper bound</strong> for the zeros when no zero exceeds
            it. A number {`$a$`} is a <strong>lower bound</strong> when no zero falls below it. You
            test a bound with synthetic division.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Upper and Lower Bounds Theorem</span>
            <div className="lrn-definition-desc">
              <p>
                Divide {`$P(x)$`} by {`$(x - b)$`} with {`$b > 0$`}. If the bottom row has no
                negative entry, then {`$b$`} is an upper bound.
              </p>
              <p>
                Divide {`$P(x)$`} by {`$(x - a)$`} with {`$a < 0$`}. If the bottom row's signs
                alternate, then {`$a$`} is a lower bound. Treat a {`$0$`} as either sign.
              </p>
            </div>
          </div>

          <h3>Worked Example Bound the zeros of x⁴ − 3x² + 2x − 5</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Test b = 2</span>
              <p className="lrn-step-content">
                Synthetic division by {`$(x - 2)$`} on {`$1, 0, -3, 2, -5$`} gives bottom row{' '}
                {`$1, 2, 1, 4, 3$`}. No negative entry, so {`$2$`} is an upper bound.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Test a = −3</span>
              <p className="lrn-step-content">
                Synthetic division by {`$(x + 3)$`} gives bottom row {`$1, -3, 6, -16, 43$`}. The
                signs alternate, so {`$-3$`} is a lower bound.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Conclusion</span>
              <p className="lrn-step-content">
                Every real zero lies between {`$-3$`} and {`$2$`}. The search shrinks to that
                window.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Complex Zeros and Complete Factorization</h2>

          <p>
            The Maximum Roots Theorem bounds distinct real roots. Over the complex numbers the count
            becomes exact. This is the deepest fact about polynomials.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Fundamental Theorem of Algebra</span>
            <div className="lrn-definition-desc">
              <p>
                Every polynomial of degree at least 1, with complex coefficients, has at least one
                complex zero.
              </p>
            </div>
          </div>

          <p>
            Apply the Factor Theorem, peel off one zero, and repeat on the smaller quotient. Each
            step removes one factor.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Complete Factorization Theorem</span>
            <div className="lrn-definition-desc">
              <p>
                A polynomial of degree {`$n$`} factors as{' '}
                {`$P(x) = a(x - c_1)(x - c_2)\\cdots(x - c_n)$`}, where the {`$c_i$`} are its
                complex zeros and {`$a$`} is the leading coefficient.
              </p>
            </div>
          </div>

          <p>
            Counted with multiplicity, a degree-{`$n$`} polynomial has exactly {`$n$`} complex
            zeros. This sharpens the "at most {`$n$`} distinct roots" bound proved earlier.
          </p>

          <h3>Complex Zeros Come in Pairs</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Conjugate Zeros Theorem</span>
            <div className="lrn-definition-desc">
              <p>
                Suppose {`$P$`} has real coefficients. If {`$a + bi$`} is a zero, then its conjugate{' '}
                {`$a - bi$`} is a zero too.
              </p>
            </div>
          </div>

          <p>
            So complex zeros of a real polynomial always arrive in matched pairs. A real polynomial
            of odd degree therefore has at least one real zero. (Complex arithmetic lives on the
            Complex Numbers page.)
          </p>

          <h3>Worked Example Build a polynomial from a complex zero</h3>

          <p>
            Find a degree-3 polynomial with integer coefficients and zeros {`$\\tfrac{1}{2}$`} and{' '}
            {`$3 + i$`}.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Add the conjugate</span>
              <p className="lrn-step-content">
                Since {`$3 + i$`} is a zero, {`$3 - i$`} is a zero too. Three zeros give a degree-3
                polynomial.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Multiply the conjugate pair</span>
              <p className="lrn-step-content">
                {`$[x - (3 + i)][x - (3 - i)] = (x - 3)^2 - i^2 = x^2 - 6x + 10$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Clear the fraction</span>
              <p className="lrn-step-content">
                {`$P(x) = a\\left(x - \\tfrac{1}{2}\\right)(x^2 - 6x + 10)$`}. Set {`$a = 2$`}:{' '}
                {`$P(x) = 2x^3 - 13x^2 + 26x - 10$`}.
              </p>
            </div>
          </div>

          <h3>Factoring over the Reals</h3>

          <p>
            If you avoid complex numbers, you cannot always reach linear factors. But you can always
            reach linear and quadratic ones.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Linear and Quadratic Factors Theorem</span>
            <div className="lrn-definition-desc">
              <p>
                Every polynomial with real coefficients factors into linear factors and irreducible
                quadratic factors, all with real coefficients.
              </p>
            </div>
          </div>

          <p>
            Each conjugate pair {`$a \\pm bi$`} multiplies to a real quadratic{' '}
            {`$x^2 - 2ax + (a^2 + b^2)$`} with no real root. That is the source of every irreducible
            quadratic. It is exactly the factored denominator the Partial Fractions section below
            requires.
          </p>

          <h3>Worked Example Factor x⁴ + 2x² − 8</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Over the reals</span>
              <p className="lrn-step-content">
                {`$x^4 + 2x^2 - 8 = (x^2 - 2)(x^2 + 4) = (x - \\sqrt{2})(x + \\sqrt{2})(x^2 + 4)$`}.
                The factor {`$x^2 + 4$`} is irreducible.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Over the complex numbers</span>
              <p className="lrn-step-content">
                Split the last factor: {`$x^2 + 4 = (x - 2i)(x + 2i)$`}. So{' '}
                {`$P(x) = (x - \\sqrt{2})(x + \\sqrt{2})(x - 2i)(x + 2i)$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Values and Interpolation</h2>

          <p>
            A polynomial is fully determined by enough of its values. The next question is how many,
            and how to recover it.
          </p>

          <h3>Finite Differences</h3>

          <p>
            Given outputs at equally spaced inputs, the <strong>first differences</strong> are gaps
            between adjacent outputs. The <strong>second differences</strong> are gaps between the
            first differences, and so on.
          </p>

          <p>
            Example {`$P(x) = x^2 - x - 4$`} at {`$x = 0, 1, 2, 3, 4$`}:
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$x$`}</th>
                <th>{`$P(x)$`}</th>
                <th>First diff</th>
                <th>Second diff</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>−4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>−4</td>
                <td>0</td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>−2</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>2</td>
                <td>4</td>
                <td>2</td>
              </tr>
              <tr>
                <td>4</td>
                <td>8</td>
                <td>6</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>

          <p>
            Every second difference equals 2. That constant signals a degree-2 polynomial. In
            general, the {`$k$`}-th differences of a degree-{`$k$`} polynomial are constant.
          </p>

          <h3>Uniqueness</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Uniqueness Theorem</span>
            <div className="lrn-definition-desc">
              <p>
                A polynomial of degree at most {`$n$`} is determined uniquely by {`$n + 1$`} of its
                values.
              </p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Suppose {`$P$`} and {`$Q$`} both have degree at most {`$n$`} and agree at{' '}
                {`$n + 1$`} distinct points.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Then {`$P - Q$`} has degree at most {`$n$`} and becomes zero at {`$n + 1$`}
                points.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                By the Maximum Roots Theorem, {`$P - Q$`} is the zero polynomial. So {`$P = Q$`}.
              </div>
            </div>
            <div className="lrn-qed">End of proof.</div>
          </div>

          <h3>Reconstructing from Values Linear Case</h3>

          <p>
            Given {`$P(1) = 7$`} and {`$P(2) = 5$`}, write {`$P(x) = mx + b$`}. Then {`$m + b = 7$`}{' '}
            and {`$2m + b = 5$`}. Subtracting gives {`$m = -2$`}, so {`$b = 9$`}. Therefore{' '}
            {`$P(x) = -2x + 9$`}.
          </p>

          <h3>Lagrange Interpolation</h3>

          <p>
            For three known values {`$P(a)$`}, {`$P(b)$`}, {`$P(c)$`} at distinct inputs, define
            three weights:
          </p>

          <div className="lrn-eq">
            <span>{`$$L_a(x) = \\frac{(x-b)(x-c)}{(a-b)(a-c)}, \\quad L_b(x) = \\frac{(x-a)(x-c)}{(b-a)(b-c)}, \\quad L_c(x) = \\frac{(x-a)(x-b)}{(c-a)(c-b)}$$`}</span>
          </div>

          <p>
            Each weight equals 1 at its own input and 0 at the other two. The three weights always
            sum to 1. The unique polynomial of degree at most 2 through the three points is:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$P(x) = P(a) \\cdot L_a(x) + P(b) \\cdot L_b(x) + P(c) \\cdot L_c(x)$$`}</span>
          </div>

          <h3>Worked Example</h3>

          <p>
            Find the degree-2 polynomial through {`$(1, 3)$`}, {`$(2, 7)$`}, {`$(3, 13)$`}.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Set up</span>
              <p className="lrn-step-content">
                Write {`$P(x) = ax^2 + bx + c$`}. Plug in the three points:
              </p>
              <p className="lrn-step-content">
                {`$a + b + c = 3$`}, {`$4a + 2b + c = 7$`}, {`$9a + 3b + c = 13$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Eliminate c</span>
              <p className="lrn-step-content">
                Subtract row 1 from row 2: {`$3a + b = 4$`}. Subtract row 2 from row 3:{' '}
                {`$5a + b = 6$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve</span>
              <p className="lrn-step-content">
                Subtract: {`$2a = 2$`}, so {`$a = 1$`}, {`$b = 1$`}, {`$c = 1$`}. Therefore{' '}
                {`$P(x) = x^2 + x + 1$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>The Identity Principle</h2>
          <p>
            If {`$Ax + B = Cx + D$`} is true for <em>every</em> value of {`$x$`}, then {`$A = C$`}{' '}
            and {`$B = D$`}.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>The equation holds for every {`$x$`}, so in particular:</p>
                <ul className="lrn-list">
                  <li>
                    Plug {`$x = 0$`}: {`$B = D$`}.
                  </li>
                  <li>
                    Plug {`$x = 1$`}: {`$A + B = C + D$`}. Subtract {`$B = D$`}: {`$A = C$`}.
                  </li>
                </ul>
              </div>
            </div>
            <div className="lrn-qed">End of proof.</div>
          </div>
          <p>
            The same idea extends to polynomials of any degree. Two polynomials that agree at every
            value of the input have the same coefficients. This lets you match coefficients directly
            when an equation must hold for all {`$x$`}.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Sample values are not a proof</span>
            <p>
              The polynomials {`$P(x) = x^2$`} and {`$Q(x) = x$`} agree at {`$x = 0$`} and{' '}
              {`$x = 1$`}, but they differ at {`$x = 2$`}: {`$P(2) = 4$`} and {`$Q(2) = 2$`}. To
              prove equality, expand both sides into standard form and compare coefficients term by
              term.
            </p>
          </div>
        </>,

        <>
          <h2>Partial Fractions</h2>

          <p>
            Adding fractions combines two pieces into one larger expression. Partial fraction
            decomposition runs that process in reverse. Given a complicated rational expression, you
            split it into a sum of simpler pieces, one for each factor of the denominator.
          </p>

          <p>
            The payoff is concrete: simpler pieces are easier to manipulate, easier to evaluate, and
            easier to integrate later in calculus.
          </p>

          <h3>The Setup</h3>

          <p>
            Two conditions before you start. First, the fraction must be <strong>proper</strong>:
            the numerator's degree is less than the denominator's. If not, long-divide first (Case 4
            below). Second, fully factor the denominator into linear and irreducible quadratic
            pieces.
          </p>

          <p>
            Each factor in the denominator contributes a standard piece on the right side. The shape
            of that piece depends on the factor type.
          </p>

          <h3>Case 1: Distinct Linear Factors</h3>

          <p>
            For each distinct linear factor {`$(x - a)$`}, write one term {`$\\dfrac{A}{x - a}$`}
            with a constant on top.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Decompose 2x / (x² − 5x + 6)</span>
              <p className="lrn-step-content">
                Factor the denominator: {`$x^2 - 5x + 6 = (x - 3)(x - 2)$`}. Write{' '}
                {`$\\dfrac{2x}{(x-3)(x-2)} = \\dfrac{A}{x-3} + \\dfrac{B}{x-2}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Clear the fractions</span>
              <p className="lrn-step-content">
                Multiply both sides by {`$(x-3)(x-2)$`}: {`$2x = A(x - 2) + B(x - 3)$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Cover-up trick</span>
              <p className="lrn-step-content">
                Set {`$x = 3$`} to kill the {`$B$`} term: {`$6 = A \\cdot 1$`}, so {`$A = 6$`}. Set{' '}
                {`$x = 2$`} to kill the {`$A$`} term: {`$4 = B \\cdot (-1)$`}, so {`$B = -4$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">
                {`$\\dfrac{2x}{x^2 - 5x + 6} = \\dfrac{6}{x - 3} - \\dfrac{4}{x - 2}$`}.
              </p>
            </div>
          </div>

          <p>
            Plugging in the roots of the denominator (the <strong>cover-up trick</strong>) isolates
            one unknown at a time, because the corresponding factor becomes zero on the right.
          </p>

          <h3>Case 2: Repeated Linear Factors</h3>

          <p>
            A factor {`$(x - a)^m$`} that repeats {`$m$`} times contributes {`$m$`} terms:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{A_1}{x - a} + \\frac{A_2}{(x - a)^2} + \\cdots + \\frac{A_m}{(x - a)^m}$$`}</span>
          </div>

          <p>
            Each power of the repeated factor needs its own constant on top. Why? Because{' '}
            {`$\\dfrac{A}{(x-a)^m}$`} alone is not enough degrees of freedom to match a general
            numerator.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Decompose x / ((x − 1)(x + 1)²)</span>
              <p className="lrn-step-content">
                Set up:{' '}
                {`$\\dfrac{x}{(x-1)(x+1)^2} = \\dfrac{A}{x-1} + \\dfrac{B}{x+1} + \\dfrac{C}{(x+1)^2}$`}
                .
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Clear fractions</span>
              <p className="lrn-step-content">{`$x = A(x+1)^2 + B(x-1)(x+1) + C(x-1)$`}.</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Cover-up at the roots</span>
              <p className="lrn-step-content">
                Set {`$x = 1$`}: {`$1 = A(4)$`}, so {`$A = \\tfrac{1}{4}$`}. Set {`$x = -1$`}:{' '}
                {`$-1 = C(-2)$`}, so {`$C = \\tfrac{1}{2}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Equate coefficients for B</span>
              <p className="lrn-step-content">
                Cover-up only catches {`$A$`} and {`$C$`}. To get {`$B$`}, match coefficients of{' '}
                {`$x^2$`}: on the left, 0. On the right, {`$A + B = \\tfrac{1}{4} + B$`}. So{' '}
                {`$B = -\\tfrac{1}{4}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">
                {`$\\dfrac{x}{(x-1)(x+1)^2} = \\dfrac{1}{4(x-1)} - \\dfrac{1}{4(x+1)} + \\dfrac{1}{2(x+1)^2}$`}
                .
              </p>
            </div>
          </div>

          <h3>Case 3: Irreducible Quadratic Factor</h3>

          <p>
            A quadratic {`$x^2 + bx + c$`} is <strong>irreducible</strong> over the reals when its
            discriminant {`$b^2 - 4c$`} is negative, it has no real roots, so it does not split
            into two real linear factors.
          </p>

          <p>
            For each irreducible quadratic factor, the numerator must be a full linear expression{' '}
            {`$(Ax + B)$`}, not a constant.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Decompose (x² + 1) / ((x + 1)(x² + x + 1))</span>
              <p className="lrn-step-content">
                The quadratic {`$x^2 + x + 1$`} has discriminant {`$1 - 4 = -3 < 0$`}, so it is
                irreducible. Set up:{' '}
                {`$\\dfrac{x^2 + 1}{(x+1)(x^2+x+1)} = \\dfrac{A}{x+1} + \\dfrac{Bx + C}{x^2+x+1}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Clear fractions</span>
              <p className="lrn-step-content">{`$x^2 + 1 = A(x^2 + x + 1) + (Bx + C)(x + 1)$`}.</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Cover-up at x = −1</span>
              <p className="lrn-step-content">
                {`$1 + 1 = A(1 - 1 + 1) = A$`}, so {`$A = 2$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Equate coefficients</span>
              <p className="lrn-step-content">
                Match {`$x^2$`}: {`$1 = A + B = 2 + B$`}, so {`$B = -1$`}. Match constants:{' '}
                {`$1 = A + C = 2 + C$`}, so {`$C = -1$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">
                {`$\\dfrac{x^2 + 1}{(x+1)(x^2+x+1)} = \\dfrac{2}{x+1} - \\dfrac{x + 1}{x^2+x+1}$`}.
              </p>
            </div>
          </div>

          <h3>Case 4: Improper Rational Expression</h3>

          <p>
            If the numerator's degree is greater than or equal to the denominator's, long-divide
            first. Decompose only the proper remainder.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Decompose x³ / (x² − 1)</span>
              <p className="lrn-step-content">
                Degrees: numerator 3, denominator 2. Long-divide: {`$x^3 = x \\cdot (x^2 - 1) + x$`}
                . So {`$\\dfrac{x^3}{x^2 - 1} = x + \\dfrac{x}{x^2 - 1}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Decompose the proper remainder</span>
              <p className="lrn-step-content">
                {`$\\dfrac{x}{x^2 - 1} = \\dfrac{A}{x - 1} + \\dfrac{B}{x + 1}$`}. Clear:{' '}
                {`$x = A(x + 1) + B(x - 1)$`}. At {`$x = 1$`}: {`$A = \\tfrac{1}{2}$`}. At{' '}
                {`$x = -1$`}: {`$B = \\tfrac{1}{2}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">
                {`$\\dfrac{x^3}{x^2 - 1} = x + \\dfrac{1}{2(x - 1)} + \\dfrac{1}{2(x + 1)}$`}.
              </p>
            </div>
          </div>

          <h3>Two Methods, Same Answer</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cover-up</span>
              <p>
                Set {`$x$`} to a root of the denominator. The corresponding factor on the right
                becomes zero, leaving one unknown.
              </p>
              <p>Fast. Only catches constants on top of distinct linear factors.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Equating coefficients</span>
              <p>
                Expand both sides and match powers of {`$x$`} term by term. Each match gives one
                linear equation in the unknowns.
              </p>
              <p>Slower but always works, required for repeated and quadratic cases.</p>
            </div>
          </div>

          <p>
            The two methods often combine: cover-up handles the easy unknowns, equating coefficients
            picks up the rest.
          </p>

          <div className="lrn-insight">
            <strong>Why this matters.</strong>
            <p>
              Partial fractions break down a hard expression into pieces you already know how to
              handle. The technique simplifies algebra now, and it is the standard route for
              integrating rational functions in A2 calculus.
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'What is the degree of the monomial $5x^3y^2z$?',
        a: 'Add all exponents: 3 + 2 + 1 = 6. Degree is 6. The coefficient 5 has no effect on degree.'
      },
      {
        q: 'A polynomial of degree at most 2 is zero at x = 1, x = 2, and x = 3. What must be true?',
        a: 'It must be the zero polynomial. A nonzero polynomial of degree n has at most n distinct roots. Degree at most 2 with 3 roots forces every coefficient to zero.'
      },
      {
        q: 'What is the remainder when $P(x) = x^4$ is divided by $(x-2)$?',
        a: 'By the Remainder Theorem, the remainder is P(2) = 16. No long division needed.'
      },
      {
        q: 'Factor $a^3 - b^3$ completely.',
        a: '$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$. Verify by expanding: the cross terms cancel.'
      },
      {
        q: 'Divide $(x^3 + 2x)$ by $(x^2 - x + 1)$.',
        a: 'Step 1: $\\frac{x^3}{x^2} = x$. Multiply: $x^3 - x^2 + x$. Subtract: $x^2 + x$. Step 2: $\\frac{x^2}{x^2} = 1$. Multiply: $x^2 - x + 1$. Subtract: $2x - 1$. Quotient $x + 1$, remainder $2x - 1$.'
      },
      {
        q: 'Once you can factor a denominator like $x^2 - 5x + 6$, what does that let you do to a rational expression built on it?',
        a: 'You can split the single fraction back into a sum of simpler fractions, one per factor. This reverse-of-addition technique is partial fraction decomposition.'
      },
      {
        q: 'What is the maximum number of distinct roots of a degree-4 polynomial? If it has 5, what must be true?',
        a: 'At most 4 distinct roots. If it had 5, it would have to be the zero polynomial. Each distinct root contributes one linear factor, and degrees add.'
      },
      {
        q: 'If $P(a) = 0$, what does that tell you about the factorization of P?',
        a: '$(x - a)$ is a factor. By the Remainder Theorem, the remainder when dividing by $(x - a)$ equals P(a) = 0, so $(x - a)$ divides P exactly. Long division (or synthetic division) gives the other factor.'
      },
      {
        q: 'Write $x^3 + 1$ in factored form and verify by expanding.',
        a: 'Sum of cubes: $x^3 + 1 = (x + 1)(x^2 - x + 1)$. Expand: $x^3 - x^2 + x + x^2 - x + 1 = x^3 + 1$.'
      },
      {
        q: 'Prove $1 + x + x^2 + \\cdots + x^{n-1} = \\frac{x^n - 1}{x - 1}$ for $x \\neq 1$.',
        a: 'Multiply the left side by $(x - 1)$: every middle term cancels, leaving $x^n - 1$. Divide both sides by $x - 1$, which is allowed since $x \\neq 1$.'
      },
      {
        q: 'A polynomial is zero at x = 1 and x = 2. Does $(x-1)(x-2)$ divide P(x)?',
        a: 'Yes. By the Factor Theorem, both $(x - 1)$ and $(x - 2)$ divide P. They share no common factor, so their product divides P as well: $P(x) = (x - 1)(x - 2) \\cdot Q(x)$ for some polynomial Q.'
      },
      {
        q: 'Let $P(x) = x^3 + 2x^2 + 3x + 4$. Find Q and R such that $P(x) = (x^2 + x + 2)(x + 1) + R$.',
        a: 'Expand $(x^2 + x + 2)(x + 1) = x^3 + 2x^2 + 3x + 2$. So $P(x) = (x^2 + x + 2)(x + 1) + 2$. Quotient Q = $x^2 + x + 2$, remainder R = 2.'
      },
      {
        q: 'Factor by grouping: $ab + ac + b^2 + bc$.',
        a: '$(ab + ac) + (b^2 + bc) = a(b + c) + b(b + c) = (a + b)(b + c)$.'
      },
      {
        q: 'Why does cancelling PX / QX = P/Q require X ≠ 0? Give a concrete failure.',
        a: 'Cancelling means dividing by X. Division by zero is undefined. Example: $\\frac{x^3 + x^2 + x + 1}{x^2 - 1}$ factors as $\\frac{(x+1)(x^2+1)}{(x+1)(x-1)}$. Cancelling $(x+1)$ gives $\\frac{x^2+1}{x-1}$, which looks defined at x = −1. But the original was undefined at x = −1 because $x^2 - 1$ is zero there.'
      },
      {
        q: 'Prove that a polynomial of degree at most n is determined uniquely by n + 1 values.',
        a: 'Suppose P and Q both have degree at most n and agree at n + 1 distinct points. Then P − Q has degree at most n and becomes zero at n + 1 points. By the Maximum Roots Theorem, P − Q must be the zero polynomial. So P = Q.'
      },
      {
        q: 'Use synthetic division to divide $2x^3 + 3x^2 - 11x - 6$ by $(x - 2)$.',
        a: 'Coefficients 2, 3, −11, −6 with $a = 2$. Bring 2. Then $2 \\cdot 2 = 4$, $3 + 4 = 7$. Then $7 \\cdot 2 = 14$, $-11 + 14 = 3$. Then $3 \\cdot 2 = 6$, $-6 + 6 = 0$. Quotient $2x^2 + 7x + 3$, remainder 0. Factored form: $(x - 2)(2x + 1)(x + 3)$.'
      },
      {
        q: 'Solve $x^3 - 6x^2 + 11x - 6 = 0$ by the Factor Theorem.',
        a: 'Test $x = 1$: $1 - 6 + 11 - 6 = 0$, so $(x - 1)$ is a factor. Divide: $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3)$. Roots: $x = 1, 2, 3$.'
      },
      {
        q: 'Solve $x^3 + 2x^2 - 5x - 6 = 0$ by the Factor Theorem.',
        a: 'Test $x = -1$: $-1 + 2 + 5 - 6 = 0$, so $(x + 1)$ is a factor. Divide: $x^3 + 2x^2 - 5x - 6 = (x + 1)(x^2 + x - 6) = (x + 1)(x + 3)(x - 2)$. Roots: $x = -1, -3, 2$.'
      },
      {
        q: 'List the rational root candidates for $2x^3 - 3x^2 - 11x + 6 = 0$, then find all roots.',
        a: 'Constant 6, leading 2. Numerators $p$ divide 6; denominators $q$ divide 2. Candidates: $\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\tfrac{1}{2}, \\pm \\tfrac{3}{2}$. Testing $x = -2$ gives 0, so $(x + 2)$ is a factor. Dividing: $2x^2 - 7x + 3 = (2x - 1)(x - 3)$. All roots: $x = -2, \\tfrac{1}{2}, 3$.'
      },
      {
        q: 'Find the coefficient of $x^5$ in $(2x - 3)^8$.',
        a: 'General term $\\binom{8}{k}(2x)^{8-k}(-3)^k$. For $x^5$ we need $8 - k = 5$, so $k = 3$. The term is $\\binom{8}{3}(2x)^5(-3)^3 = 56 \\cdot 32 \\cdot (-27)\\, x^5 = -48{,}384\\, x^5$. Coefficient $-48{,}384$.'
      },
      {
        q: 'Decompose $\\dfrac{3}{(x-1)^2 (x+2)}$ into partial fractions.',
        a: 'Set up $\\dfrac{A}{x-1} + \\dfrac{B}{(x-1)^2} + \\dfrac{C}{x+2}$. Clear: $3 = A(x-1)(x+2) + B(x+2) + C(x-1)^2$. Cover-up at $x = 1$: $3 = 3B$, so $B = 1$. Cover-up at $x = -2$: $3 = 9C$, so $C = \\tfrac{1}{3}$. Compare $x^2$: $0 = A + C$, so $A = -\\tfrac{1}{3}$. Result: $-\\dfrac{1}{3(x-1)} + \\dfrac{1}{(x-1)^2} + \\dfrac{1}{3(x+2)}$.'
      },
      {
        q: 'Decompose $\\dfrac{4}{(x-1)(x^2+3)}$ into partial fractions.',
        a: 'The quadratic $x^2 + 3$ has discriminant $-12 < 0$, so it is irreducible. Set up $\\dfrac{A}{x-1} + \\dfrac{Bx + C}{x^2 + 3}$. Clear: $4 = A(x^2 + 3) + (Bx + C)(x - 1)$. Cover-up at $x = 1$: $4 = 4A$, so $A = 1$. Compare $x^2$: $0 = A + B$, so $B = -1$. Compare constants: $4 = 3A - C$, so $C = -1$. Result: $\\dfrac{1}{x-1} - \\dfrac{x + 1}{x^2 + 3}$.'
      },
      {
        q: 'Decompose $\\dfrac{x^2}{x - 1}$ into a polynomial plus a proper rational expression.',
        a: 'Numerator degree 2, denominator degree 1, so long-divide first. $x^2 = (x - 1)(x + 1) + 1$. Therefore $\\dfrac{x^2}{x - 1} = x + 1 + \\dfrac{1}{x - 1}$.'
      },
      {
        q: 'Describe the end behavior of $P(x) = -x^3 + 4x^2 - 1$.',
        a: 'Odd degree with a negative leading coefficient. So $y \\to +\\infty$ as $x \\to -\\infty$, and $y \\to -\\infty$ as $x \\to +\\infty$. Only the leading term $-x^3$ matters.'
      },
      {
        q: 'For $P(x) = (x - 1)^2 (x + 4)^3$, at which x-intercepts does the graph cross the axis, and where does it only touch?',
        a: 'The zero $x = -4$ has multiplicity 3 (odd), so the graph crosses there. The zero $x = 1$ has multiplicity 2 (even), so the graph touches and turns back without crossing.'
      },
      {
        q: 'What is the greatest possible number of turning points of a degree-6 polynomial?',
        a: 'At most $6 - 1 = 5$ turning points. A degree-$n$ polynomial has at most $n - 1$. It may have fewer, for example, $x^6$ has just one.'
      },
      {
        q: 'Use the Intermediate Value Theorem to show $P(x) = x^3 - x - 5$ has a real zero between 1 and 2.',
        a: '$P(1) = 1 - 1 - 5 = -5$ and $P(2) = 8 - 2 - 5 = 1$. The signs are opposite, so by the Intermediate Value Theorem a zero lies between $x = 1$ and $x = 2$.'
      },
      {
        q: "Use Descartes' Rule of Signs on $P(x) = x^3 - 4x^2 + x + 6$, then find all roots.",
        a: 'Signs of $P(x)$: $+, -, +, +$, two sign changes, so two or zero positive zeros. $P(-x) = -x^3 - 4x^2 - x + 6$ has signs $-, -, -, +$, one change, so one negative zero. Factoring: $(x + 1)(x - 2)(x - 3)$, roots $-1, 2, 3$ (two positive, one negative).'
      },
      {
        q: 'Show that all real zeros of $P(x) = x^3 - 3x^2 - 4x + 12$ lie between −3 and 4 using the Upper and Lower Bounds Theorem.',
        a: 'Synthetic division by $(x - 4)$ on $1, -3, -4, 12$ gives bottom row $1, 1, 0, 12$, no negative entry, so 4 is an upper bound. Division by $(x + 3)$ gives $1, -6, 14, -30$, alternating signs, so −3 is a lower bound. Every real zero lies between −3 and 4. (The roots are $-2, 2, 3$.)'
      },
      {
        q: 'A degree-3 polynomial with real coefficients has zeros $2$ and $1 + 2i$. Find it, taking leading coefficient 1.',
        a: 'By the Conjugate Zeros Theorem, $1 - 2i$ is also a zero. The conjugate pair multiplies to $(x - 1)^2 + 4 = x^2 - 2x + 5$. Then $P(x) = (x - 2)(x^2 - 2x + 5) = x^3 - 4x^2 + 9x - 10$.'
      },
      {
        q: 'Factor $x^4 - 16$ into linear and irreducible quadratic factors over the reals, then completely over the complex numbers.',
        a: 'Over the reals: $x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$, and $x^2 + 4$ is irreducible. Over the complex numbers: split $x^2 + 4 = (x - 2i)(x + 2i)$, giving $(x - 2)(x + 2)(x - 2i)(x + 2i)$.'
      },
      {
        q: 'A degree-5 polynomial with real coefficients has $i$ and $2i$ among its zeros. How many real zeros must it have, at least?',
        a: 'By the Conjugate Zeros Theorem, $-i$ and $-2i$ are also zeros. That accounts for four complex zeros. A degree-5 polynomial has exactly five zeros with multiplicity, so at least one remaining zero must be real.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Polynomials',
      sections: [
        <>
          <h2>Polynomial Basics</h2>
          <ul className="lrn-list">
            <li>
              <strong>Degree of a monomial:</strong> sum of all exponents in the term.
            </li>
            <li>
              <strong>Degree of a polynomial:</strong> degree of highest-degree nonzero term. The
              zero polynomial has no defined degree.
            </li>
            <li>
              <strong>Degree of a product:</strong> {`$\\deg(P \\cdot Q) = \\deg(P) + \\deg(Q)$`}
            </li>
            <li>
              <strong>Degree of a sum:</strong> {`$\\deg(P + Q) \\leq \\max(\\deg P, \\deg Q)$`},
              with equality unless leading terms cancel.
            </li>
            <li>
              <strong>Equality of polynomials:</strong> equal if and only if coefficients match term
              by term after collecting. Sample values are not a proof.
            </li>
          </ul>

          <h2>Factoring Identities</h2>
          <ul className="lrn-list">
            <li>
              <strong>Difference of cubes:</strong> {`$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$`}
            </li>
            <li>
              <strong>Sum of cubes:</strong> {`$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$`}
            </li>
            <li>
              <strong>Geometric sum:</strong>{' '}
              {`$\\frac{x^n - 1}{x - 1} = x^{n-1} + x^{n-2} + \\cdots + 1$`} for {`$x \\neq 1$`}
            </li>
            <li>
              <strong>Odd-power sum:</strong>{' '}
              {`$a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\cdots + b^{n-1})$`} for odd {`$n$`}
            </li>
            <li>
              <strong>Does not factor over reals:</strong> {`$a^2 + b^2$`} has no real
              factorization.
            </li>
          </ul>

          <h2>Rational Expressions</h2>
          <ul className="lrn-list">
            <li>
              <strong>Addition:</strong> {`$\\frac{P}{Q} + \\frac{R}{S} = \\frac{PS + QR}{QS}$`}
            </li>
            <li>
              <strong>Subtraction:</strong> {`$\\frac{P}{Q} - \\frac{R}{S} = \\frac{PS - QR}{QS}$`}
            </li>
            <li>
              <strong>Multiplication:</strong>{' '}
              {`$\\frac{P}{Q} \\cdot \\frac{R}{S} = \\frac{PR}{QS}$`}
            </li>
            <li>
              <strong>Division:</strong> {`$\\frac{\\frac{P}{Q}}{\\frac{R}{S}} = \\frac{PS}{QR}$`}
            </li>
            <li>
              <strong>Cancellation:</strong> {`$\\frac{PX}{QX} = \\frac{P}{Q}$`} provided{' '}
              {`$X \\neq 0$`}.
            </li>
          </ul>

          <h2>Polynomial Division</h2>
          <ul className="lrn-list">
            <li>
              <strong>Division algorithm:</strong> {`$P = Q \\cdot D + R$`} with{' '}
              {`$\\deg(R) < \\deg(D)$`}; {`$Q$`} and {`$R$`} are unique.
            </li>
          </ul>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Condition</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Proper</td>
                <td>deg(num) &lt; deg(den)</td>
                <td>Already simplest form</td>
              </tr>
              <tr>
                <td>Improper</td>
                <td>deg(num) ≥ deg(den)</td>
                <td>Long division to extract quotient</td>
              </tr>
            </tbody>
          </table>

          <h2>Synthetic Division</h2>
          <ul className="lrn-list">
            <li>
              <strong>When to use:</strong> divisor of the form {`$(x - a)$`} only.
            </li>
            <li>
              <strong>Procedure:</strong> write dividend coefficients (0 for missing powers); bring
              down the first; multiply by {`$a$`}, add to the next coefficient; repeat.
            </li>
            <li>
              <strong>Read-off:</strong> last number is the remainder; the rest are the quotient
              coefficients, with degree one less than the dividend.
            </li>
          </ul>

          <h2>Binomial Theorem</h2>
          <ul className="lrn-list">
            <li>
              <strong>Expansion:</strong>{' '}
              {`$(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k}\\, a^{n-k} b^k$`}.
            </li>
            <li>
              <strong>Binomial coefficient:</strong> {`$\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$`}.
            </li>
            <li>
              <strong>General term:</strong> the {`$(k+1)$`}-th term is{' '}
              {`$\\binom{n}{k}\\, a^{n-k} b^k$`}; use it to pick a single coefficient.
            </li>
            <li>
              <strong>Pascal connection:</strong> row {`$n$`} of Pascal's triangle lists{' '}
              {`$\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}$`}.
            </li>
          </ul>

          <h2>Remainder Theorem, Factor Theorem, Roots</h2>
          <ul className="lrn-list">
            <li>
              <strong>Remainder Theorem:</strong> remainder of {`$P(x) \\div (x - a)$`} equals{' '}
              {`$P(a)$`}.
            </li>
            <li>
              <strong>Factor Theorem:</strong> {`$(x - a)$`} is a factor of {`$P(x)$`} if and only
              if {`$P(a) = 0$`}.
            </li>
            <li>
              <strong>Maximum roots:</strong> a degree-{`$n$`} polynomial has at most {`$n$`}{' '}
              distinct roots; exactly {`$n$`} complex roots with multiplicity.
            </li>
            <li>
              <strong>Multiplicity:</strong> {`$(x - 1)^2$`} has one distinct root counted twice.
            </li>
            <li>
              <strong>Rational Root Theorem:</strong> for integer-coefficient {`$P$`}, any rational
              root {`$\\tfrac{p}{q}$`} in lowest terms has {`$p$`} dividing the constant term and{' '}
              {`$q$`} dividing the leading coefficient.
            </li>
            <li>
              <strong>Factor-Theorem application:</strong> find one root by inspection (or by the
              Rational Root Theorem), divide it out, then solve the reduced polynomial.
            </li>
          </ul>

          <h2>Graphs of Polynomial Functions</h2>
          <ul className="lrn-list">
            <li>
              <strong>End behavior:</strong> set by the leading term. Odd degree sends the ends
              opposite ways; even degree sends them the same way. A negative leading coefficient
              flips both.
            </li>
            <li>
              <strong>Zero of odd multiplicity:</strong> the graph crosses the x-axis there.
            </li>
            <li>
              <strong>Zero of even multiplicity:</strong> the graph touches the x-axis and turns
              back.
            </li>
            <li>
              <strong>Turning points:</strong> a degree-{`$n$`} polynomial has at most {`$n - 1$`}.
            </li>
            <li>
              <strong>Intermediate Value Theorem:</strong> opposite signs at {`$a$`} and {`$b$`}
              force a zero between them.
            </li>
          </ul>

          <h2>Counting and Factoring All Zeros</h2>
          <ul className="lrn-list">
            <li>
              <strong>Descartes' Rule of Signs:</strong> positive zeros equal the sign variations of{' '}
              {`$P(x)$`}, or fewer by an even number; negative zeros use {`$P(-x)$`}.
            </li>
            <li>
              <strong>Upper/Lower Bounds:</strong> synthetic-divide by {`$(x - b)$`}, {`$b > 0$`};
              no negative entry means {`$b$`} is an upper bound. Alternating signs from{' '}
              {`$(x - a)$`}, {`$a < 0$`}, means {`$a$`} is a lower bound.
            </li>
            <li>
              <strong>Fundamental Theorem of Algebra:</strong> every polynomial of degree at least 1
              has a complex zero; a degree-{`$n$`} polynomial has exactly {`$n$`} complex zeros with
              multiplicity.
            </li>
            <li>
              <strong>Conjugate Zeros Theorem:</strong> for real coefficients, {`$a + bi$`} a zero
              forces {`$a - bi$`} a zero.
            </li>
            <li>
              <strong>Linear and Quadratic Factors:</strong> every real polynomial factors into real
              linear and irreducible quadratic factors.
            </li>
          </ul>

          <h2>Partial Fractions</h2>
          <ul className="lrn-list">
            <li>
              <strong>Setup:</strong> fraction must be proper (long-divide first if not); then
              factor the denominator fully into linear and irreducible quadratic pieces.
            </li>
            <li>
              <strong>Cover-up trick:</strong> set {`$x$`} equal to a root of the denominator to
              isolate one unknown numerator.
            </li>
            <li>
              <strong>Equating coefficients:</strong> expand both sides and match powers of {`$x$`}.
              Required for repeated and quadratic cases.
            </li>
          </ul>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Factor in denominator</th>
                <th>Term in decomposition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$(x - a)$`} (distinct linear)</td>
                <td>{`$\\dfrac{A}{x - a}$`}</td>
              </tr>
              <tr>
                <td>{`$(x - a)^m$`} (repeated linear)</td>
                <td>
                  {`$\\dfrac{A_1}{x - a} + \\dfrac{A_2}{(x - a)^2} + \\cdots + \\dfrac{A_m}{(x - a)^m}$`}
                </td>
              </tr>
              <tr>
                <td>{`$x^2 + bx + c$`} (irreducible quadratic)</td>
                <td>{`$\\dfrac{Ax + B}{x^2 + bx + c}$`}</td>
              </tr>
              <tr>
                <td>deg(num) ≥ deg(den) (improper)</td>
                <td>Long-divide first; decompose the proper remainder</td>
              </tr>
            </tbody>
          </table>

          <h2>Values and Interpolation</h2>
          <ul className="lrn-list">
            <li>
              <strong>Uniqueness:</strong> a polynomial of degree at most {`$n$`} is determined
              uniquely by {`$n + 1$`} values.
            </li>
            <li>
              <strong>Lagrange basis:</strong> at three points, the three weights{' '}
              {`$L_a, L_b, L_c$`} sum to 1.
            </li>
          </ul>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Constant difference order</th>
                <th>Polynomial degree</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First differences constant</td>
                <td>Degree 1 (linear)</td>
              </tr>
              <tr>
                <td>Second differences constant</td>
                <td>Degree 2 (quadratic)</td>
              </tr>
              <tr>
                <td>{`$k$`}-th differences constant</td>
                <td>Degree {`$k$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Common Errors</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Situation</th>
                <th>Error</th>
                <th>Correct approach</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cancelling rational expressions</td>
                <td>Cancelling without listing where the factor is zero</td>
                <td>Note every value that makes the cancelled factor zero</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
  }

  return config
}

export default function Polynomials() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
