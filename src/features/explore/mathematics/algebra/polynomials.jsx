import 'katex/dist/katex.min.css'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  FloorStaircaseViz,
  LogExpInverseViz,
  PolynomialCurveViz,
  PolynomialLabeledViz
} from '../../../../components/viz'
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
            <strong>term</strong>. The number in front of the variable part is the{' '}
            <strong>coefficient</strong>. In {`$3x^2y$`}, the coefficient is 3.
          </p>

          <p>A monomial is itself a polynomial one term. "Poly" means many, "mono" means one.</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Monomial</span>
              <p>One product term. {`$3x^2y$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Polynomial</span>
              <p>A sum of monomials. {`$3x^2y + 2xy - 7$`}</p>
            </div>
          </div>

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
            Picking any "highest term" would be arbitrary, so we leave it undefined.
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
            <strong>Like terms</strong> are monomials with the same variables raised to the same
            powers. To combine them, add the coefficients.
          </p>

          <p>Example: {`$5x^2y + 3x^2y - 2x^2y = (5 + 3 - 2)x^2y = 6x^2y$`}.</p>

          <p>
            The variable part {`$x^2y$`} is a common factor. Factoring it out gives the same result.
          </p>

          <h3>When Two Polynomials Are Equal</h3>

          <p>
            Two polynomials are <strong>equal</strong> when, after collecting like terms, every
            coefficient matches: same constant, same coefficient on {`$x$`}, on {`$x^2$`}, and so
            on.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Sample values are not a proof</span>
            <p>
              The polynomials {`$P(x) = x^2$`} and {`$Q(x) = x$`} agree at {`$x = 0$`} and{' '}
              {`$x = 1$`}, but they are not equal at {`$x = 2$`}, {`$P(2) = 4$`} and {`$Q(2) = 2$`}.
            </p>
            <p>
              To prove equality, expand both sides into standard form and compare coefficients term
              by term.
            </p>
          </div>
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

          <h3>Key Identities</h3>

          <ul className="lrn-list">
            <li>{`$(a+b)(a-b) = a^2 - b^2$`} difference of squares</li>
            <li>{`$(a+b)^2 = a^2 + 2ab + b^2$`} square of a sum</li>
            <li>{`$(a-b)^2 = a^2 - 2ab + b^2$`} square of a difference</li>
            <li>{`$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$`} cube of a sum</li>
            <li>{`$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$`} cube of a difference</li>
          </ul>

          <p>
            The middle terms in {`$(a+b)(a-b)$`} cancel: {`$a^2 - ab + ab - b^2 = a^2 - b^2$`}. In{' '}
            {`$(a+b)^2$`}, both {`$ab$`} and {`$ba$`} appear, so they sum to {`$2ab$`}.
          </p>

          <h3>Pascal's Triangle</h3>

          <p>The coefficients of {`$(a+b)^n$`} form Pascal's triangle:</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$n$`}</th>
                <th>Expansion</th>
                <th>Coefficients</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>{`$1$`}</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>{`$a + b$`}</td>
                <td>1, 1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{`$a^2 + 2ab + b^2$`}</td>
                <td>1, 2, 1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{`$a^3 + 3a^2b + 3ab^2 + b^3$`}</td>
                <td>1, 3, 3, 1</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{`$a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$`}</td>
                <td>1, 4, 6, 4, 1</td>
              </tr>
            </tbody>
          </table>

          <p>Each entry is the sum of the two entries above it.</p>

          <h3>Degree Rules</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Degree of a product</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\deg(P \\cdot Q) = \\deg(P) + \\deg(Q)$`}. The leading terms multiply, and no
                cancellation can lower the degree.
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

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Expand {`$(a+b)^3$`} step by step:</p>
              <ol className="lrn-list">
                <li>Write {`$(a+b)^3 = (a+b) \\cdot (a+b)^2$`}.</li>
                <li>Expand {`$(a+b)^2 = a^2 + 2ab + b^2$`}.</li>
                <li>
                  Multiply: {`$(a+b)(a^2 + 2ab + b^2) = a^3 + 2a^2b + ab^2 + a^2b + 2ab^2 + b^3$`}.
                </li>
                <li>Collect: {`$a^3 + 3a^2b + 3ab^2 + b^3$`}.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <p>Expand {`$(x+2)^3$`}.</p>
              <ol className="lrn-list">
                <li>First compute {`$(x+2)^2 = x^2 + \\underline{\\phantom{4x}} + 4$`}.</li>
                <li>
                  Then multiply by {`$(x+2)$`}: {`$x^3 + \\underline{\\phantom{6x^2}} + 12x + 8$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>Expand {`$(2x-1)^3$`} completely.</p>
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

          <p>Always look for a common factor first. If every term shares a factor, pull it out.</p>

          <p>Example: {`$6x^3 + 9x^2 = 3x^2(2x + 3)$`}.</p>

          <h3>Grouping</h3>

          <p>Group terms in pairs, factor each pair, then factor out the common piece.</p>

          <p>Example: {`$ab + ac + b^2 + bc = a(b+c) + b(b+c) = (a+b)(b+c)$`}.</p>

          <p>
            Both groups share the binomial {`$(b+c)$`} after the first round of factoring. Pulling
            it out finishes the job.
          </p>

          <h3>Difference and Sum of Cubes</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$`}</span>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$`}</span>
          </div>

          <p>
            Expanding {`$(a-b)(a^2+ab+b^2)$`} gives {`$a^3+a^2b+ab^2-a^2b-ab^2-b^3 = a^3-b^3$`}. The
            middle terms cancel in pairs.
          </p>

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

          <h3>Sophie Germain Identity</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$$`}</span>
          </div>

          <p>
            This is the rare factorization of a sum of fourth powers. The trick: add and subtract{' '}
            {`$4a^2b^2$`} to complete a square, then use difference of squares.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`$a^4 + 4b^4 = a^4 + 4a^2b^2 + 4b^4 - 4a^2b^2$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$= (a^2 + 2b^2)^2 - (2ab)^2$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Apply difference of squares with {`$A = a^2 + 2b^2$`} and {`$B = 2ab$`}.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>What Does Not Factor Over the Reals</h3>

          <p>
            {`$a^2 + b^2$`} has no real factorization. Any real factorization would give it real
            roots, but {`$x^2 + 1 = 0$`} has no real solution.
          </p>

          <p>
            {`$a^4 + b^4$`} factors only with irrational coefficients:{' '}
            {`$(a^2 + \\sqrt{2}\\,ab + b^2)(a^2 - \\sqrt{2}\\,ab + b^2)$`}. The Sophie Germain
            identity needs the extra factor of 4.
          </p>

          <h3>Newton's Identity</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$$`}</span>
          </div>

          <p>
            Use this whenever you see three cubes minus three times a product. If{' '}
            {`$a + b + c = 0$`}, the right side is zero, so {`$a^3 + b^3 + c^3 = 3abc$`}.
          </p>

          <h3>Complex Numbers and the Fundamental Theorem</h3>

          <p>
            Some polynomials never factor over the reals. {`$x^2 + 1$`} is the smallest example. The
            number {`$i$`} is defined so that {`$i^2 = -1$`}. Then {`$x^2 + 1 = (x-i)(x+i)$`}.
          </p>

          <div className="lrn-insight">
            <strong>Fundamental Theorem of Algebra.</strong>
            <p>
              Every degree-{`$n$`} polynomial has exactly {`$n$`} complex roots, counted with
              multiplicity. Each root {`$r$`} contributes a factor {`$(x - r)$`}.
            </p>
          </div>

          <h3>Worked Example Factor x⁶ − y⁶</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: difference of squares</span>
              <p className="lrn-step-content">
                {`$x^6 - y^6 = (x^3)^2 - (y^3)^2 = (x^3 - y^3)(x^3 + y^3)$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: apply cube identities</span>
              <p className="lrn-step-content">
                {`$x^3 - y^3 = (x - y)(x^2 + xy + y^2)$`} and{' '}
                {`$x^3 + y^3 = (x + y)(x^2 - xy + y^2)$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: combine</span>
              <p className="lrn-step-content">
                {`$x^6 - y^6 = (x - y)(x + y)(x^2 + xy + y^2)(x^2 - xy + y^2)$`}.
              </p>
            </div>
          </div>

          <p>
            Starting with difference of squares is usually simpler. Starting with difference of
            cubes ({`$x^6 - y^6 = (x^2)^3 - (y^2)^3$`}) also works and gives the same final answer.
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
            These match the rules for ordinary fractions. To add or subtract, put both fractions
            over a common denominator. To divide, multiply by the reciprocal.
          </p>

          <h3>Cancellation</h3>

          <p>
            You may cancel a common factor only where it is nonzero. Cancelling a factor that hits
            zero somewhere hides a real domain restriction.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              {`$\\frac{x^3+x^2+x+1}{x^2-1}$`} is undefined at both {`$x = 1$`} and {`$x = -1$`}.
              Factor and cancel: {`$\\frac{(x+1)(x^2+1)}{(x+1)(x-1)} = \\frac{x^2+1}{x-1}$`}. The
              simplified form looks defined at {`$x = -1$`}, but the original was not. List the
              forbidden values before you cancel.
            </p>
          </div>

          <h3>Harmonic Mean</h3>

          <p>
            The <strong>harmonic mean</strong> of two numbers {`$a$`} and {`$b$`} is{' '}
            {`$\\frac{2ab}{a+b}$`}. It equals the reciprocal of the average of {`$\\frac{1}{a}$`}{' '}
            and {`$\\frac{1}{b}$`}.
          </p>

          <p>
            It is the right "average" for rates: if a trip is half at speed {`$a$`} and half at
            speed {`$b$`}, the average speed is the harmonic mean, not the arithmetic mean.
          </p>
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
            A non-monic divisor produces fractional coefficients in the quotient. That is normal.
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
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>
            Setting {`$x = 2$`} gives a classic result:{' '}
            {`$1 + 2 + 4 + \\cdots + 2^{n-1} = 2^n - 1$`}.
          </p>
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
              <p>Computes only the remainder, instantly, by evaluating {`$P(a)$`}.</p>
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
            <div className="lrn-qed">Q.E.D.</div>
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
              If a polynomial of degree at most {`$n$`} vanishes at {`$n + 1$`} distinct points, it
              is the zero polynomial. This is the lever behind proving polynomial identities.
            </p>
          </div>

          <div className="lrn-graph">
            <PolynomialCurveViz />
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
                Then {`$P - Q$`} has degree at most {`$n$`} and vanishes at {`$n + 1$`} points.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                By the Maximum Roots Theorem, {`$P - Q$`} is the zero polynomial. So {`$P = Q$`}.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
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
          <h2>Exponential Functions</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Exponential function</span>
            <div className="lrn-definition-desc">
              <p>
                {`$f(x) = a \\cdot b^x$`} where {`$a$`} is a constant and {`$b > 0$`},{' '}
                {`$b \\neq 1$`} is the <strong>base</strong>.
              </p>
            </div>
          </div>

          <p>
            The base cannot equal 1, because {`$1^x = 1$`} gives a constant. The base must be
            positive: if {`$b = -2$`} and {`$x = \\frac{1}{2}$`}, you need {`$\\sqrt{-2}$`}, which
            is not real.
          </p>

          <h3>Shape and Range</h3>

          <p>
            For {`$f(x) = b^x$`} with {`$b > 1$`}:
          </p>

          <ul className="lrn-list">
            <li>Domain: all real numbers.</li>
            <li>Range: {`$(0, \\infty)$`} always positive, never zero.</li>
            <li>
              As {`$x \\to \\infty$`}, {`$f(x) \\to \\infty$`} (explodes).
            </li>
            <li>
              As {`$x \\to -\\infty$`}, {`$f(x) \\to 0$`} (horizontal asymptote at {`$y = 0$`}).
            </li>
          </ul>

          <p>
            Example: {`$f(x) = 3 \\cdot 5^x - 4$`}. The piece {`$3 \\cdot 5^x$`} has range{' '}
            {`$(0, \\infty)$`}. Subtracting 4 shifts the range to {`$(-4, \\infty)$`}.
          </p>

          <h3>Solving by Matching Bases</h3>

          <p>If both sides become powers of the same base, set the exponents equal.</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example Solve 5^(2r−3) = 25</span>
              <p className="lrn-step-content">
                Rewrite {`$25 = 5^2$`}, so {`$5^{2r-3} = 5^2$`}. Match exponents: {`$2r - 3 = 2$`},
                giving {`$r = \\frac{5}{2}$`}.
              </p>
            </div>
          </div>

          <p>
            This works because {`$b^x$`} is one-to-one for {`$b > 0$`}, {`$b \\neq 1$`}: equal
            outputs force equal inputs.
          </p>

          <h3>Solving by Rewriting Both Sides</h3>

          <p>When the bases differ, rewrite one as a power of the other.</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example Solve 2^(6y) = 16^(2y)</span>
              <p className="lrn-step-content">
                Rewrite {`$16 = 2^4$`}, so {`$16^{2y} = (2^4)^{2y} = 2^{8y}$`}. The equation becomes{' '}
                {`$2^{6y} = 2^{8y}$`}, giving {`$6y = 8y$`}, so {`$y = 0$`}.
              </p>
            </div>
          </div>

          <h3>Solving by Substitution</h3>

          <p>
            When the same exponential appears with different exponents, substitute a new variable to
            turn the equation into a polynomial one.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example Solve 4^x − 33·2^(x−1) + 8 = 0</span>
              <p className="lrn-step-content">
                Note {`$4^x = (2^2)^x = (2^x)^2$`} and {`$2^{x-1} = \\frac{1}{2} \\cdot 2^x$`}. Let{' '}
                {`$y = 2^x$`}. The equation becomes {`$y^2 - \\frac{33}{2}y + 8 = 0$`}, or{' '}
                {`$2y^2 - 33y + 16 = 0$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve the quadratic</span>
              <p className="lrn-step-content">
                Factor: {`$(2y - 1)(y - 16) = 0$`}, giving {`$y = \\frac{1}{2}$`} or {`$y = 16$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Back-substitute</span>
              <p className="lrn-step-content">
                {`$2^x = \\frac{1}{2}$`} gives {`$x = -1$`}. {`$2^x = 16$`} gives {`$x = 4$`}.
              </p>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch the parentheses</span>
            <p>
              {`$(a^b)^c = a^{bc}$`} the exponents multiply. Without parentheses, {`$a^{b^c}$`}{' '}
              means {`$a$`} raised to {`$b^c$`}, which is different. Write {`$2^{3^2}$`} ={' '}
              {`$2^9 = 512$`}, but {`$(2^3)^2 = 2^6 = 64$`}.
            </p>
          </div>
        </>,

        <>
          <h2>Simple vs. Compound Interest</h2>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Simple Interest</span>
              <p>Adds the same fixed amount each year. Linear growth.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Compound Interest</span>
              <p>Multiplies by the same factor each year. Exponential growth.</p>
            </div>
          </div>

          <h3>Simple Interest</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{Total} = \\left(1 + \\frac{nr}{100}\\right) \\cdot k$$`}</span>
          </div>

          <p>
            {`$k$`} is the starting amount, {`$r$`} is the annual rate as a percentage, and {`$n$`}{' '}
            is the number of years.
          </p>

          <p>
            Example: $5,000 at 9% for 4 years gives{' '}
            {`$5{,}000 \\cdot (1 + 4 \\cdot 0.09) = 5{,}000 \\cdot 1.36 = \\$6{,}800$`}.
          </p>

          <h3>Compound Interest (Annual)</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{Total} = \\left(1 + \\frac{r}{100}\\right)^n \\cdot k$$`}</span>
          </div>

          <p>
            Example: $5,000 at 9% compounded annually for 4 years gives{' '}
            {`$5{,}000 \\cdot (1.09)^4 \\approx \\$7{,}058$`}.
          </p>

          <p>
            Each year, you earn interest on the new balance principal plus all prior interest.
            Repeated multiplication outpaces repeated addition, so the gap with simple interest
            widens over time.
          </p>
        </>,

        <>
          <h2>Compounding Frequency, e, and Present Value</h2>

          <h3>Compounding m Times Per Year</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{Total} = \\left(1 + \\frac{r}{100m}\\right)^{nm} \\cdot k$$`}</span>
          </div>

          <p>
            Each period gets {`$\\frac{r}{m}$`} percent interest, and there are {`$nm$`} periods
            over {`$n$`} years. More periods mean earlier compounding, which raises the total.
          </p>

          <p>
            Example: $10,000 at 14%. Annually: {`$\\$11{,}400$`}. Monthly:{' '}
            {`$10{,}000 \\cdot (1 + \\frac{0.14}{12})^{12} \\approx \\$11{,}493$`}.
          </p>

          <h3>Euler's Number e</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\approx 2.71828$$`}</span>
          </div>

          <p>
            As {`$m \\to \\infty$`}, the compound interest formula approaches a clean limit. Each
            year's balance multiplies by {`$e^{\\tfrac{r}{100}}$`}, so:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\text{Total (continuous)} = k \\cdot e^{\\tfrac{rn}{100}}$$`}</span>
          </div>

          <p>
            Compounding more frequently always raises the total, but the gains shrink. The
            continuous limit is the ceiling.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Annual</span>
              <p>{`$10{,}000 \\cdot 1.14 = \\$11{,}400$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Continuous</span>
              <p>{`$10{,}000 \\cdot e^{0.14} \\approx \\$11{,}502.74$`}</p>
            </div>
          </div>

          <h3>Present Value</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$PV = \\frac{\\text{Future Amount}}{(1 + \\frac{r}{100})^n}$$`}</span>
          </div>

          <p>
            Present value reverses compound interest. To have a target future amount, you ask: what
            must you invest today, given the rate?
          </p>

          <p>
            Example: To have $1,000,000 in 10 years at 10% compounded semi-annually. The rate per
            period is 5%, with 20 periods:
          </p>

          <div className="lrn-eq">
            <span>{`$$PV = \\frac{1{,}000{,}000}{(1.05)^{20}} \\approx \\$376{,}889.48$$`}</span>
          </div>

          <h3>Loan Payments</h3>

          <p>
            A loan is solved by setting the present value of all future payments equal to the loan
            amount.
          </p>

          <p>Example a $10,000 loan at 6% repaid in three equal annual payments {`$P$`}:</p>

          <div className="lrn-eq">
            <span>{`$$\\frac{P}{1.06} + \\frac{P}{1.06^2} + \\frac{P}{1.06^3} = 10{,}000$$`}</span>
          </div>

          <p>
            The sum of discount factors is about {`$2.6730$`}, giving {`$P \\approx \\$3{,}741.10$`}
            .
          </p>

          <h3>Rule of 72</h3>

          <div className="lrn-insight">
            <strong>
              Money at {`$r\\%$`} annually doubles in approximately {`$\\frac{72}{r}$`} years.
            </strong>
            <p>
              At 6%, it takes about 12 years. At 8%, about 9 years. The rule is mental arithmetic,
              not exact.
            </p>
          </div>

          <p>
            Doubling means {`$(1 + \\frac{r}{100})^t = 2$`}. Taking logarithms:{' '}
            {`$t = \\frac{\\ln 2}{\\ln(1 + \\frac{r}{100})}$`}. For small {`$r$`},{' '}
            {`$\\ln(1 + \\frac{r}{100}) \\approx \\frac{r}{100}$`}, so{' '}
            {`$t \\approx 100 \\ln \\frac{2}{r} \\approx \\frac{69.3}{r}$`}. We use 72 instead of
            69.3 because 72 has more whole-number divisors.
          </p>
        </>,

        <>
          <h2>Logarithms</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Logarithm</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\log_a b = c$`} means {`$a^c = b$`}. The base {`$a$`} is positive and not 1. The
                argument {`$b$`} must be positive. The answer {`$c$`} can be any real number.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Logarithmic form</span>
              <p>
                {`$\\log_a b = c$`} asks "{`$a$`} to what power gives {`$b$`}?"
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Exponential form</span>
              <p>{`$a^c = b$`} the answer stated as a power.</p>
            </div>
          </div>

          <h3>Evaluating</h3>

          <p>
            Example: {`$\\log_3 81 = 4$`}, because {`$3^4 = 81$`}. The skill is recognizing powers
            of the base. Try {`$3^1 = 3$`}, {`$3^2 = 9$`}, {`$3^3 = 27$`}, {`$3^4 = 81$`}.
          </p>

          <h3>Two Special Bases</h3>

          <ul className="lrn-list">
            <li>
              <strong>Common logarithm</strong>: base 10, written {`$\\log x$`} (no base shown).
            </li>
            <li>
              <strong>Natural logarithm</strong>: base {`$e \\approx 2.71828$`}, written{' '}
              {`$\\ln x$`}.
            </li>
          </ul>

          <h3>Inverse of Exponential</h3>

          <p>
            {`$f(x) = \\log_a x$`} and {`$g(x) = a^x$`} are <strong>inverses</strong>. Their graphs
            are reflections across the line {`$y = x$`}.
          </p>

          <div className="lrn-graph">
            <LogExpInverseViz />
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof they invert each other</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`$f(g(x)) = \\log_a(a^x) = x$`} (by definition).
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`$g(f(x)) = a^{\\log_a x} = x$`} (by definition).
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Laws of Logarithms</h3>

          <ul className="lrn-list">
            <li>
              <strong>Product law:</strong> {`$\\log_b(cd) = \\log_b c + \\log_b d$`}
            </li>
            <li>
              <strong>Quotient law:</strong> {`$\\log_b(\\frac{c}{d}) = \\log_b c - \\log_b d$`}
            </li>
            <li>
              <strong>Power law:</strong> {`$\\log_b(c^n) = n \\log_b c$`}
            </li>
            <li>
              <strong>Change of base:</strong> {`$\\log_a b = \\dfrac{\\log_c b}{\\log_c a}$`} for
              any valid base {`$c$`}
            </li>
            <li>
              <strong>Identity:</strong> {`$\\log_a a^p = p$`} and {`$a^{\\log_a x} = x$`}
            </li>
          </ul>

          <p>
            The product law converts multiplication into addition. Slide rules exploited this: by
            placing logarithmic scales side by side, sliding one over the other adds distances, and
            therefore multiplies the corresponding numbers.
          </p>

          <p>
            The product law follows from the exponent law {`$a^m \\cdot a^n = a^{m+n}$`}. If{' '}
            {`$c = a^m$`} and {`$d = a^n$`}, then {`$cd = a^{m+n}$`}, so{' '}
            {`$\\log_a(cd) = m + n = \\log_a c + \\log_a d$`}.
          </p>

          <h3>Solving Logarithmic Equations</h3>

          <p>General method: isolate the logarithm, then switch to exponential form.</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example Solve y = 2 + 3 log_5(2x + 1) for x</span>
              <p className="lrn-step-content">
                Subtract 2 and divide by 3: {`$\\frac{y - 2}{3} = \\log_5(2x + 1)$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Switch to exponential form</span>
              <p className="lrn-step-content">{`$5^{\\tfrac{(y-2)}{3}} = 2x + 1$`}.</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve for x</span>
              <p className="lrn-step-content">{`$x = \\dfrac{5^{\\tfrac{(y-2)}{3}} - 1}{2}$`}.</p>
            </div>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Real-world use Richter scale</span>
            <p>
              Earthquake magnitude is {`$\\log_{10}$`} of seismic amplitude relative to a baseline.
              A magnitude-6 quake has 10 times the amplitude of a magnitude-5 quake, and 100 times
              the amplitude of a magnitude-4 quake.
            </p>
          </div>
        </>,

        <>
          <h2>Radical Functions</h2>

          <h3>Square vs. Cube Roots</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Square root {`$\\sqrt{x}$`}</span>
              <p>Domain {`$[0, \\infty)$`}. No real number squares to give a negative result.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cube root {`$\\sqrt[3]{x}$`}</span>
              <p>Domain all reals. Cubing a negative gives a negative: {`$\\sqrt[3]{-8} = -2$`}.</p>
            </div>
          </div>

          <p>
            <strong>General rule for nth roots:</strong> if {`$n$`} is even, the radicand must be{' '}
            {`$\\geq 0$`}. If {`$n$`} is odd, all real inputs are allowed.
          </p>

          <p>
            For {`$x > 1$`}: {`$\\sqrt{x} > \\sqrt[3]{x}$`}. For {`$0 < x < 1$`}:{' '}
            {`$\\sqrt{x} < \\sqrt[3]{x}$`}. The two graphs cross at {`$x = 0$`} and {`$x = 1$`}.
          </p>

          <h3>Transformations</h3>

          <p>
            Example: {`$f(x) = 2\\sqrt{x - 3} + 1$`} starts from {`$y = \\sqrt{x}$`}, shifts right
            3, stretches by 2, shifts up 1. Domain {`$x \\geq 3$`}; range {`$f \\geq 1$`}.
          </p>

          <h3>Solving Radical Equations</h3>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Squaring creates extraneous solutions</span>
            <p>
              Squaring both sides of an equation can introduce solutions that satisfy the squared
              equation but not the original. Always check candidates in the original.
            </p>
          </div>

          <h3>Worked Example One Radical</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Solve √(x² + 9) = 2x − 3</span>
              <p className="lrn-step-content">
                Square: {`$x^2 + 9 = (2x - 3)^2 = 4x^2 - 12x + 9$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Rearrange</span>
              <p className="lrn-step-content">
                {`$0 = 3x^2 - 12x = 3x(x - 4)$`}. Candidates: {`$x = 0$`} and {`$x = 4$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check x = 0</span>
              <p className="lrn-step-content">
                Left: {`$\\sqrt{9} = 3$`}. Right: {`$-3$`}. Not equal extraneous.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check x = 4</span>
              <p className="lrn-step-content">
                Left: {`$\\sqrt{25} = 5$`}. Right: {`$5$`}. Valid. Only solution: {`$x = 4$`}.
              </p>
            </div>
          </div>

          <p>
            Squaring loses sign information. {`$3 = -3$`} is false, but {`$3^2 = (-3)^2$`} is true.
            The squared step accepted a false solution.
          </p>

          <h3>Worked Example Two Radicals</h3>

          <p>
            Solve {`$\\sqrt{2x + 10} - \\sqrt{7 - x} = \\sqrt{2x - 2}$`}. Move one radical to the
            other side, then square. Repeat until no radicals remain.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: isolate one radical</span>
              <p className="lrn-step-content">
                {`$\\sqrt{2x + 10} = \\sqrt{2x - 2} + \\sqrt{7 - x}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: square both sides</span>
              <p className="lrn-step-content">
                {`$2x + 10 = (2x - 2) + 2\\sqrt{(2x-2)(7-x)} + (7 - x)$`}, which simplifies to{' '}
                {`$x + 5 = 2\\sqrt{(2x-2)(7-x)}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: square again</span>
              <p className="lrn-step-content">
                {`$(x + 5)^2 = 4(2x - 2)(7 - x)$`}. Expand and solve the resulting polynomial.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4: check every candidate</span>
              <p className="lrn-step-content">
                Each squaring step may produce extraneous roots. Plug every solution back into the
                original equation; keep only those that satisfy it.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Absolute Value</h2>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$`}</span>
          </div>

          <p>
            For negative {`$x$`}, {`$-x$`} is positive: {`$|-3| = -(-3) = 3$`}. The result is always
            non-negative.
          </p>

          <h3>Distance Interpretation</h3>

          <p>
            {`$|x|$`} is the distance from {`$x$`} to 0 on the number line. More generally:
          </p>

          <div className="lrn-insight">
            <strong>
              {`$|x - y|$`} is the distance between {`$x$`} and {`$y$`}.
            </strong>
            <p>
              {`$|3 - 5| = 2$`}, and {`$|7 - 5| = 2$`} both points sit 2 units from 5.
            </p>
          </div>

          <h3>Triangle Inequality</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$|a + b| \\leq |a| + |b|$$`}</span>
          </div>

          <p>
            Equality holds exactly when {`$a$`} and {`$b$`} have the same sign (or one is zero).
          </p>

          <p>
            Check: {`$|3 + 4| = 7 = |3| + |4|$`} same sign, equal.{' '}
            {`$|3 + (-4)| = 1 < 7 = |3| + |-4|$`} opposite signs, strict inequality.
          </p>

          <h3>Solving |2x − 9| = 5</h3>

          <p>Two clean methods, both giving the same answer.</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Casework</span>
              <p>
                Either {`$2x - 9 = 5$`} (gives {`$x = 7$`}) or {`$2x - 9 = -5$`} (gives {`$x = 2$`}
                ). Both check.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Squaring</span>
              <p>
                {`$(2x - 9)^2 = 25$`}, so {`$4x^2 - 36x + 56 = 0$`}, factoring as{' '}
                {`$(x - 2)(x - 7) = 0$`}. Same two solutions.
              </p>
            </div>
          </div>

          <p>
            Casework scales to multiple absolute values. Squaring is faster for a single absolute
            value, but it may introduce extraneous roots always verify in the original.
          </p>

          <h3>Sum of Absolute Values</h3>

          <p>
            Example: {`$f(x) = |x - 3| + |x + 2|$`}. The breakpoints are {`$x = -2$`} and{' '}
            {`$x = 3$`}.
          </p>

          <ul className="lrn-list">
            <li>
              {`$x < -2$`}: both inside expressions negative.{' '}
              {`$f(x) = (3 - x) + (-x - 2) = 1 - 2x$`}.
            </li>
            <li>
              {`$-2 \\leq x < 3$`}: {`$f(x) = (3 - x) + (x + 2) = 5$`}.
            </li>
            <li>
              {`$x \\geq 3$`}: both positive. {`$f(x) = (x - 3) + (x + 2) = 2x - 1$`}.
            </li>
          </ul>

          <p>
            The minimum value is 5, achieved across the entire interval {`$[-2, 3]$`}. Between the
            breakpoints, the two {`$x$`} terms cancel, leaving a constant.
          </p>
        </>,

        <>
          <h2>Floor, Ceiling, Fractional Part, Sign</h2>

          <ul className="lrn-list">
            <li>
              <strong>Floor</strong> {`$\\lfloor x \\rfloor$`}: the greatest integer {`$\\leq x$`}.{' '}
              {`$\\lfloor 2.7 \\rfloor = 2$`}, {`$\\lfloor -5.3 \\rfloor = -6$`}.
            </li>
            <li>
              <strong>Ceiling</strong> {`$\\lceil x \\rceil$`}: the smallest integer {`$\\geq x$`}.{' '}
              {`$\\lceil 3.5 \\rceil = 4$`}, {`$\\lceil -2.1 \\rceil = -2$`}.
            </li>
            <li>
              <strong>Fractional part</strong> {`$\\{x\\} = x - \\lfloor x \\rfloor$`}. Always
              satisfies {`$0 \\leq \\{x\\} < 1$`}.
            </li>
            <li>
              <strong>Sign function</strong>: {`$\\operatorname{sgn}(x) = 1$`} if {`$x > 0$`},{' '}
              {`$0$`} if {`$x = 0$`}, {`$-1$`} if {`$x < 0$`}.
            </li>
          </ul>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Floor of a negative is not "drop the decimal"</span>
            <p>
              {`$\\lfloor -5.3 \\rfloor = -6$`}, not {`$-5$`}. Floor rounds toward {`$-\\infty$`}.
              Since {`$-6 < -5.3 < -5$`}, the greatest integer below {`$-5.3$`} is {`$-6$`}.
            </p>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\lfloor x \\rfloor + \\{x\\} = x$$`}</span>
          </div>

          <p>
            The defining relation. For {`$x = 3.14$`}: {`$3 + 0.14 = 3.14$`}. For {`$x = -5.3$`}:{' '}
            {`$\\lfloor -5.3 \\rfloor = -6$`} and {`$\\{-5.3\\} = -5.3 - (-6) = 0.7$`}, and{' '}
            {`$-6 + 0.7 = -5.3$`}.
          </p>

          <div className="lrn-graph">
            <FloorStaircaseViz />
          </div>

          <p>
            The floor function is a staircase. Each step is a horizontal segment, closed at the left
            integer, open at the right.
          </p>
        </>,

        <>
          <h2>Rational Functions</h2>

          <p>
            A <strong>rational function</strong> is one polynomial divided by another:{' '}
            {`$f(x) = \\frac{P(x)}{Q(x)}$`}. Its domain excludes any value where {`$Q(x) = 0$`}.
          </p>

          <h3>Asymptotes</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Vertical asymptote</span>
              <p>
                {`$x = c$`} where {`$Q(c) = 0$`} and {`$P(c) \\neq 0$`}. Near {`$c$`}, the function
                blows up to {`$\\pm \\infty$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Horizontal asymptote</span>
              <p>
                {`$y \\to k$`} as {`$|x| \\to \\infty$`}. Found by comparing degrees of {`$P$`} and{' '}
                {`$Q$`}.
              </p>
            </div>
          </div>

          <p>
            Example: {`$f(x) = \\dfrac{3x - 4}{x + 5}$`}. Vertical asymptote at {`$x = -5$`}. For
            large {`$|x|$`}, the {`$3x$`} and {`$x$`} dominate, so {`$f(x) \\to 3$`}. Horizontal
            asymptote: {`$y = 3$`}.
          </p>

          <h3>Slant Asymptote</h3>

          <p>
            When {`$\\deg P = \\deg Q + 1$`}, polynomial long division gives a linear quotient plus
            a proper remainder. The linear quotient is the slant asymptote.
          </p>

          <p>
            Example: {`$\\dfrac{x^2 + 1}{x} = x + \\dfrac{1}{x}$`}. The remainder{' '}
            {`$\\frac{1}{x} \\to 0$`} for large {`$|x|$`}, so the slant asymptote is {`$y = x$`}.
          </p>

          <h3>Solving Rational Equations</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example Solve x/(x − 2) + 3/(x − 5) = −1</span>
              <p className="lrn-step-content">
                Multiply both sides by {`$(x - 2)(x - 5)$`}:{' '}
                {`$x(x - 5) + 3(x - 2) = -(x - 2)(x - 5)$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Expand and collect</span>
              <p className="lrn-step-content">
                {`$x^2 - 2x - 6 = -x^2 + 7x - 10$`}, giving {`$2x^2 - 9x + 4 = 0$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Factor and check</span>
              <p className="lrn-step-content">
                {`$(2x - 1)(x - 4) = 0$`}. So {`$x = \\frac{1}{2}$`} or {`$x = 4$`}. Neither is 2 or
                5, so both are valid.
              </p>
            </div>
          </div>

          <h3>Partial Fractions</h3>

          <p>
            Partial fraction decomposition splits a complicated rational expression into a sum of
            simpler ones useful for integration, algebraic manipulation, and Laplace-style
            transforms.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example Decompose 2x / (x² − 5x + 6)</span>
              <p className="lrn-step-content">
                Factor: {`$x^2 - 5x + 6 = (x - 3)(x - 2)$`}. Write{' '}
                {`$\\dfrac{2x}{(x-3)(x-2)} = \\dfrac{A}{x-3} + \\dfrac{B}{x-2}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve for A and B</span>
              <p className="lrn-step-content">
                Multiply through: {`$2x = A(x - 2) + B(x - 3)$`}. Set {`$x = 3$`}: {`$6 = A$`}. Set{' '}
                {`$x = 2$`}: {`$4 = -B$`}, so {`$B = -4$`}.
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
            Plugging in the roots of the denominator (the "cover-up" trick) isolates one unknown at
            a time, because the corresponding factor becomes zero on the right.
          </p>
        </>,

        <>
          <h2>Piecewise Defined Functions</h2>

          <p>
            A <strong>piecewise function</strong> applies different rules to different inputs.
            Absolute value, floor, ceiling, and tax brackets are all piecewise.
          </p>

          <h3>Worked Example</h3>

          <p>Define</p>

          <div className="lrn-eq">
            <span>{`$$f(n) = \\begin{cases} n + 3 & \\text{if } n \\text{ is odd} \\\\ \\frac{n}{2} & \\text{if } n \\text{ is even} \\end{cases}$$`}</span>
          </div>

          <p>
            Find {`$k$`} such that {`$f(f(f(k))) = 27$`}.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Work backwards from 27</span>
              <p className="lrn-step-content">
                27 is odd. To get 27 from the odd branch we'd need {`$n + 3 = 27$`}, so {`$n = 24$`}
                . So {`$f(f(k)) = 24$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Next step back</span>
              <p className="lrn-step-content">
                24 is even. From the even branch: {`$\\frac{n}{2} = 24$`}, so {`$n = 48$`}. So{' '}
                {`$f(k) = 48$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Try odd k</span>
              <p className="lrn-step-content">
                {`$k = 105$`} (odd): {`$f(105) = 108$`}, {`$f(108) = 54$`}, {`$f(54) = 27$`}.
                Confirmed: {`$k = 105$`}.
              </p>
            </div>
          </div>

          <p>
            Working backwards turns a search into a chain of forced choices. Each branch of the
            piecewise definition determines the preimage at that step.
          </p>

          <h3>Continuity</h3>

          <p>
            A function is <strong>continuous</strong> at a point if its graph has no gap, jump, or
            hole there. Piecewise functions can be discontinuous at boundaries where the rule
            switches.
          </p>

          <p>
            Example: {`$f(x) = x$`} for {`$x < 1$`} and {`$f(x) = x + 2$`} for {`$x \\geq 1$`}. The
            left piece approaches 1 as {`$x \\to 1$`}; the right piece equals 3 at {`$x = 1$`}. The
            graph jumps by 2 at {`$x = 1$`} a jump discontinuity.
          </p>
        </>,

        <>
          <h2>Roots of Unity</h2>

          <p>
            The <strong>{`$n$`}-th roots of unity</strong> are the {`$n$`} complex solutions of{' '}
            {`$x^n = 1$`}, equivalently {`$x^n - 1 = 0$`}.
          </p>

          <ul className="lrn-list">
            <li>
              {`$n = 2$`}: {`$1$`} and {`$-1$`}.
            </li>
            <li>{`$n = 3$`}: three points spaced 120° apart on the unit circle.</li>
            <li>
              {`$n = 4$`}: {`$1, i, -1, -i$`} a square.
            </li>
            <li>{`$n = 6$`}: six vertices of a regular hexagon.</li>
          </ul>

          <p>
            All roots sit on the unit circle (each has magnitude 1) and are spaced by{' '}
            {`$\\frac{360°}{n}$`}. Equal spacing at equal radius gives the vertices of a regular{' '}
            {`$n$`}-gon.
          </p>

          <p>
            From the geometric sum formula, {`$x^n - 1 = (x - 1)(x^{n-1} + x^{n-2} + \\cdots + 1)$`}
            . So 1 is always a root, and the other {`$n - 1$`} roots satisfy{' '}
            {`$x^{n-1} + x^{n-2} + \\cdots + 1 = 0$`}.
          </p>
        </>,

        <>
          <h2>Connections</h2>

          <div className="lrn-insight">
            <strong>Logarithms and exponentials are inverse operations.</strong>
            <p>
              {`$a^c = b$`} and {`$\\log_a b = c$`} say the same thing. Every exponential equation
              has a logarithmic twin.
            </p>
          </div>

          <div className="lrn-insight">
            <strong>Compound interest is an exponential function.</strong>
            <p>
              {`$\\text{Total} = k(1 + \\frac{r}{100})^n$`} is {`$k \\cdot b^n$`} with{' '}
              {`$b = 1 + \\frac{r}{100}$`}. Continuous compounding plugs in {`$e$`}.
            </p>
          </div>

          <div className="lrn-insight">
            <strong>Absolute value, floor, ceiling, sign all piecewise.</strong>
            <p>
              Each one applies different rules to different input ranges. Absolute value is the
              simplest case.
            </p>
          </div>

          <div className="lrn-insight">
            <strong>The Remainder Theorem links values and factors.</strong>
            <p>
              {`$P(a)$`} is the remainder when {`$P$`} is divided by {`$(x - a)$`}. So{' '}
              {`$P(a) = 0$`} means {`$(x - a)$`} is a factor.
            </p>
          </div>

          <div className="lrn-insight">
            <strong>
              Constant {`$k$`}-th differences mean degree {`$k$`}.
            </strong>
            <p>
              Finite differences are the discrete shadow of derivatives. A degree-{`$k$`} polynomial
              has constant {`$k$`}-th differences over equally spaced inputs.
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
        a: 'It must be the zero polynomial. A nonzero polynomial of degree n has at most n distinct roots. Degree ≤ 2 with 3 roots is impossible unless every coefficient is zero.'
      },
      {
        q: 'Solve $5^{2r-3} = 25$ for r.',
        a: 'Rewrite 25 = 5². Match exponents: 2r − 3 = 2, so r = 5/2.'
      },
      {
        q: 'You invest $5,000 at 9% simple interest. How much do you have after 6 years?',
        a: 'Total = 5,000(1 + 6 × 0.09) = 5,000 × 1.54 = $7,700. Each year adds 9% of the original $5,000 = $450; six years adds $2,700.'
      },
      {
        q: 'What is the remainder when $P(x) = x^4$ is divided by $(x-2)$?',
        a: 'By the Remainder Theorem, the remainder is P(2) = 16. No long division needed.'
      },
      {
        q: 'You double the compounding frequency on a savings account. Does the final amount double, slightly increase, or stay the same?',
        a: 'It slightly increases. Earlier compounding earns interest on interest sooner. The gain shrinks at higher frequencies and approaches the continuous-compounding limit $k \\cdot e^{\\tfrac{rn}{100}}$.'
      },
      {
        q: 'Factor $a^3 - b^3$ completely.',
        a: '$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$. Verify by expanding: the cross terms cancel.'
      },
      {
        q: 'What is the domain and range of $f(x) = 2\\sqrt{x-3} + 1$?',
        a: 'Domain: x ≥ 3. Range: f ≥ 1. The minimum of $\\sqrt{x-3}$ is 0 at x = 3, giving f(3) = 1.'
      },
      {
        q: 'Evaluate $\\log_3 81$.',
        a: '$\\log_3 81 = 4$, because $3^4 = 81$. The logarithm asks "3 to what power equals 81?"'
      },
      {
        q: 'Why is $\\lfloor -5.3 \\rfloor = -6$, not $-5$?',
        a: 'Floor rounds toward $-\\infty$. Since $-6 < -5.3 < -5$, the greatest integer not exceeding $-5.3$ is $-6$. This is different from rounding to the nearest integer.'
      },
      {
        q: 'Factor $x^4 + 4$ using the Sophie Germain identity.',
        a: 'Sophie Germain: $a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$. Set a = x, b = 1: $x^4 + 4 = (x^2 + 2x + 2)(x^2 - 2x + 2)$. It works because $x^4 + 4 = (x^2 + 2)^2 - (2x)^2$, a difference of squares.'
      },
      {
        q: 'Divide $(x^3 + 2x)$ by $(x^2 - x + 1)$.',
        a: 'Step 1: $\\frac{x^3}{x^2} = x$. Multiply: $x^3 - x^2 + x$. Subtract: $x^2 + x$. Step 2: $\\frac{x^2}{x^2} = 1$. Multiply: $x^2 - x + 1$. Subtract: $2x - 1$. Quotient $x + 1$, remainder $2x - 1$.'
      },
      {
        q: 'An investor wants $1,000,000 in 10 years at 10% compounded semi-annually. How much to invest today?',
        a: 'Rate per period = 5%, periods = 20. PV = 1,000,000 / $(1.05)^{20}$ ≈ $376,889.48. Present value reverses compound interest.'
      },
      {
        q: 'Solve $\\sqrt{x^2 + 9} = 2x - 3$ and check for extraneous solutions.',
        a: 'Square: $x^2 + 9 = 4x^2 - 12x + 9$, so $3x(x - 4) = 0$. Candidates x = 0 and x = 4. Check x = 0: $\\sqrt{9} = 3 \\neq -3$ extraneous. Check x = 4: $\\sqrt{25} = 5 = 5$ valid. Only x = 4.'
      },
      {
        q: 'Decompose $\\frac{2x}{x^2 - 5x + 6}$ into partial fractions.',
        a: 'Factor denominator: $(x - 3)(x - 2)$. Write A/(x − 3) + B/(x − 2). Multiply: $2x = A(x - 2) + B(x - 3)$. Set x = 3: A = 6. Set x = 2: B = −4. Result: $\\frac{6}{x-3} - \\frac{4}{x-2}$.'
      },
      {
        q: 'What is the maximum number of distinct roots of a degree-4 polynomial? If it has 5, what must be true?',
        a: 'At most 4 distinct roots. If it had 5, it would have to be the zero polynomial. Each distinct root contributes one linear factor; degrees add.'
      },
      {
        q: 'Compare $10,000 at 14% (a) compounded annually vs. (b) compounded monthly.',
        a: '(a) Annual: 10,000 × 1.14 = $11,400. (b) Monthly: 10,000 × $(1 + 0.14/12)^{12}$ ≈ $11,493. Monthly earns about $93 more by compounding interest on a slightly larger base each period.'
      },
      {
        q: 'Solve $|2x - 9| = 5$.',
        a: 'Casework: 2x − 9 = 5 gives x = 7; 2x − 9 = −5 gives x = 2. Both check: |2(7) − 9| = 5 and |2(2) − 9| = 5.'
      },
      {
        q: 'A $10,000 loan at 6% is repaid in three equal annual payments P. Find P.',
        a: 'Set present value of payments equal to loan: P/1.06 + P/1.06² + P/1.06³ = 10,000. The discount-factor sum ≈ 2.6730. So P ≈ $3,741.10.'
      },
      {
        q: 'If $P(a) = 0$, what does that tell you about the factorization of P?',
        a: '$(x - a)$ is a factor. By the Remainder Theorem, the remainder when dividing by $(x - a)$ equals P(a) = 0, so $(x - a)$ divides P exactly. Long division (or synthetic division) gives the other factor.'
      },
      {
        q: 'Write $x^3 + 1$ in factored form and verify by expanding.',
        a: 'Sum of cubes: $x^3 + 1 = (x + 1)(x^2 - x + 1)$. Expand: $x^3 - x^2 + x + x^2 - x + 1 = x^3 + 1$. ✓'
      },
      {
        q: 'Convert $\\log_5(2x + 1) = \\frac{(y - 2)}{3}$ into x in terms of y.',
        a: 'Switch to exponential form: $5^{\\tfrac{(y-2)}{3}} = 2x + 1$. Subtract 1, divide by 2: $x = \\frac{5^{\\tfrac{(y-2)}{3}} - 1}{2}$.'
      },
      {
        q: "Newton's identity: $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$. If $a+b+c=0$ and $abc = 6$, find $a^3 + b^3 + c^3$.",
        a: 'The right side is zero, so $a^3 + b^3 + c^3 = 3abc = 18$.'
      },
      {
        q: 'Compute $\\lfloor 3.14 \\rfloor + \\{3.14\\}$. Is the result a coincidence?',
        a: '3 + 0.14 = 3.14. Not a coincidence this is the defining identity $\\lfloor x \\rfloor + \\{x\\} = x$.'
      },
      {
        q: 'Prove $1 + x + x^2 + \\cdots + x^{n-1} = \\frac{x^n - 1}{x - 1}$ for $x \\neq 1$.',
        a: 'Multiply the left side by $(x - 1)$: every middle term cancels, leaving $x^n - 1$. Divide both sides by $x - 1$, which is allowed since $x \\neq 1$.'
      },
      {
        q: 'Find all asymptotes of $f(x) = \\frac{3x - 4}{x + 5}$.',
        a: 'Vertical: x + 5 = 0, so x = −5. Horizontal: leading-coefficient ratio 3/1 = 3, so y = 3. For large |x|, f approaches 3 but never reaches it.'
      },
      {
        q: 'Why is the domain of $\\sqrt{x}$ restricted to $x \\geq 0$, but $\\sqrt[3]{x}$ has all real numbers?',
        a: 'No real number squares to give a negative result, so $\\sqrt{x}$ has no real value for x < 0. Cubing a negative gives a negative, so $\\sqrt[3]{-8} = -2$. Even-index roots need non-negative inputs; odd-index roots take all reals.'
      },
      {
        q: 'You solve $|f(x)| = c$ by splitting into two cases. What must you check for each solution?',
        a: 'Each case carries a sign condition: one assumes f(x) ≥ 0, the other f(x) < 0. After solving, plug each candidate back into the case it came from. Discard any that violate its condition.'
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
        q: 'Simplify $5x^2y + 3x^2y - 2x^2y$.',
        a: 'All three are like terms. Add coefficients: (5 + 3 − 2)x²y = 6x²y.'
      },
      {
        q: 'Solve $4^x - 33 \\cdot 2^{x-1} + 8 = 0$.',
        a: 'Let $y = 2^x$. Then $4^x = y^2$ and $2^{x-1} = \\frac{y}{2}$. The equation becomes $2y^2 - 33y + 16 = 0$, factoring as $(2y - 1)(y - 16) = 0$. So $y = \\frac{1}{2}$ or $y = 16$, giving $x = -1$ or $x = 4$.'
      },
      {
        q: 'Solve: $f(n) = n + 3$ if n odd, $f(n) = \\frac{n}{2}$ if n even. Find k such that $f(f(f(k))) = 27$.',
        a: 'Work backwards. f(?) = 27 (odd) needs ? + 3 = 27, so ? = 24. f(?) = 24 (even branch) needs ?/2 = 24, so ? = 48. Try odd k = 105: f(105) = 108, f(108) = 54, f(54) = 27. So k = 105.'
      },
      {
        q: 'Show $a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$.',
        a: 'Add and subtract $4a^2b^2$: $a^4 + 4b^4 = a^4 + 4a^2b^2 + 4b^4 - 4a^2b^2 = (a^2 + 2b^2)^2 - (2ab)^2$. This is a difference of squares with $A = a^2 + 2b^2$ and $B = 2ab$.'
      },
      {
        q: 'For $P(x) = x^2 - x - 4$, compute first and second differences at x = 0, 1, 2, 3, 4. What do they say about the degree?',
        a: 'Values: −4, −4, −2, 2, 8. First differences: 0, 2, 4, 6. Second differences: 2, 2, 2 (constant). Constant second differences mean degree 2.'
      },
      {
        q: 'Simple vs. compound interest: $5,000 at 9% for 4 years. Compute both and explain the gap.',
        a: 'Simple: 5,000 × 1.36 = $6,800. Compound: 5,000 × $(1.09)^4$ ≈ $7,058. Gap ≈ $258. Compound earns 9% on a growing balance each year instead of just on the original.'
      },
      {
        q: 'Factor by grouping: $ab + ac + b^2 + bc$.',
        a: '$(ab + ac) + (b^2 + bc) = a(b + c) + b(b + c) = (a + b)(b + c)$.'
      },
      {
        q: 'Solve $\\log_n 3 = -\\frac{3}{2}$ for n.',
        a: 'Switch to exponential form: $n^{-\\tfrac{3}{2}} = 3$. Raise both sides to power $-\\frac{2}{3}$: $n = 3^{-\\tfrac{2}{3}} = \\frac{1}{\\sqrt[3]{9}}$. Equivalently, $n = \\frac{\\sqrt[3]{9}}{9} = \\sqrt[3]{\\frac{1}{9}}$.'
      },
      {
        q: 'Reconstruct the linear polynomial P given P(1) = 7 and P(2) = 5.',
        a: 'Write P(x) = mx + b. From m + b = 7 and 2m + b = 5: m = −2, b = 9. So P(x) = −2x + 9. Check: P(1) = 7, P(2) = 5. ✓'
      },
      {
        q: 'Why does cancelling PX / QX = P/Q require X ≠ 0? Give a concrete failure.',
        a: 'Cancelling means dividing by X. Division by zero is undefined. Example: $\\frac{(x^3 + x^2 + x + 1)}{(x^2 - 1)}$ factors as $\\frac{(x+1)(x^2+1)}{(x+1)(x-1)}$. Cancelling $(x+1)$ gives $\\frac{(x^2+1)}{(x-1)}$, which looks defined at x = −1. But the original was undefined at x = −1 (the original $x^2 - 1$ is zero there). The cancellation hid a real restriction.'
      },
      {
        q: 'Prove that a polynomial of degree at most n is determined uniquely by n + 1 values.',
        a: 'Suppose P and Q both have degree ≤ n and agree at n + 1 distinct points. Then P − Q has degree ≤ n and vanishes at n + 1 points. By the Maximum Roots Theorem (nonzero degree-n polynomial has at most n distinct roots), P − Q must be the zero polynomial. So P = Q.'
      },
      {
        q: 'State and verify the triangle inequality with $a = 3$, $b = -4$.',
        a: '$|a + b| \\leq |a| + |b|$. Plug in: $|3 + (-4)| = |-1| = 1$. $|3| + |-4| = 3 + 4 = 7$. Then 1 ≤ 7. Strict inequality because a and b have opposite signs.'
      },
      {
        q: 'Find the slant asymptote of $f(x) = \\frac{x^2 + 1}{x}$.',
        a: 'Long division: $f(x) = x + \\frac{1}{x}$. The remainder term $\\frac{1}{x}$ vanishes as $|x| \\to \\infty$, so the slant asymptote is $y = x$.'
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
              <strong>Equality of polynomials:</strong> equal iff coefficients match term by term
              after collecting. Sample values are not a proof.
            </li>
          </ul>

          <h2>Key Product Identities</h2>
          <ul className="lrn-list">
            <li>{`$(a + b)(a - b) = a^2 - b^2$`}</li>
            <li>{`$(a + b)^2 = a^2 + 2ab + b^2$`}</li>
            <li>{`$(a - b)^2 = a^2 - 2ab + b^2$`}</li>
            <li>{`$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$`}</li>
            <li>{`$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$`}</li>
            <li>
              Pascal's triangle row {`$n$`}: coefficients of {`$(a + b)^n$`}.
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
              <strong>Sophie Germain:</strong>{' '}
              {`$a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$`}
            </li>
            <li>
              <strong>Newton's identity:</strong>{' '}
              {`$a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$`}
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
              <strong>Does not factor over reals:</strong> {`$a^2 + b^2$`}, also {`$a^4 + b^4$`}{' '}
              without {`$\\sqrt{2}$`} coefficients.
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
            <li>
              <strong>Harmonic mean:</strong> {`$\\frac{2ab}{a + b}$`}
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

          <h2>Remainder Theorem, Factor Theorem, Roots</h2>
          <ul className="lrn-list">
            <li>
              <strong>Remainder Theorem:</strong> remainder of {`$P(x) \\div (x - a)$`} equals{' '}
              {`$P(a)$`}.
            </li>
            <li>
              <strong>Factor Theorem:</strong> {`$(x - a)$`} is a factor of {`$P(x)$`} iff{' '}
              {`$P(a) = 0$`}.
            </li>
            <li>
              <strong>Maximum roots:</strong> a degree-{`$n$`} polynomial has at most {`$n$`}{' '}
              distinct roots; exactly {`$n$`} complex roots with multiplicity.
            </li>
            <li>
              <strong>Multiplicity:</strong> {`$(x - 1)^2$`} has one distinct root counted twice.
            </li>
          </ul>

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

          <h2>Interest Formulas</h2>
          <ul className="lrn-list">
            <li>
              <strong>Simple interest:</strong> {`$\\text{Total} = (1 + \\frac{nr}{100}) \\cdot k$`}
            </li>
            <li>
              <strong>Compound (annual):</strong>{' '}
              {`$\\text{Total} = (1 + \\frac{r}{100})^n \\cdot k$`}
            </li>
            <li>
              <strong>Compound (m times/year):</strong>{' '}
              {`$\\text{Total} = (1 + \\frac{r}{(100m)})^{nm} \\cdot k$`}
            </li>
            <li>
              <strong>Continuous compounding:</strong>{' '}
              {`$\\text{Total} = k \\cdot e^{\\tfrac{rn}{100}}$`}
            </li>
            <li>
              <strong>Present value:</strong>{' '}
              {`$PV = \\frac{\\text{Future amount}}{(1 + \\frac{r}{100})^n}$`}
            </li>
            <li>
              <strong>Rule of 72:</strong> doubling time {`$\\approx \\frac{72}{r}$`} years at{' '}
              {`$r\\%$`}.
            </li>
          </ul>

          <h2>Exponentials and Logarithms</h2>
          <ul className="lrn-list">
            <li>
              <strong>Exponential function:</strong> {`$f(x) = a \\cdot b^x$`}, {`$b > 0$`},{' '}
              {`$b \\neq 1$`}.
            </li>
            <li>
              <strong>Euler's number:</strong>{' '}
              {`$e = \\lim_{n \\to \\infty}(1 + \\frac{1}{n})^n \\approx 2.71828$`}
            </li>
            <li>
              <strong>Equivalence:</strong> {`$\\log_a b = c \\iff a^c = b$`}
            </li>
            <li>
              <strong>Identity:</strong> {`$\\log_a a^p = p$`} and {`$a^{\\log_a x} = x$`}
            </li>
            <li>
              <strong>Product:</strong> {`$\\log_b(cd) = \\log_b c + \\log_b d$`}
            </li>
            <li>
              <strong>Quotient:</strong> {`$\\log_b(\\frac{c}{d}) = \\log_b c - \\log_b d$`}
            </li>
            <li>
              <strong>Power:</strong> {`$\\log_b(c^n) = n \\log_b c$`}
            </li>
            <li>
              <strong>Change of base:</strong> {`$\\log_a b = \\frac{\\log_c b}{\\log_c a}$`}
            </li>
          </ul>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Base</th>
                <th>Notation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Common logarithm</td>
                <td>10</td>
                <td>{`$\\log x$`} (no base)</td>
              </tr>
              <tr>
                <td>Natural logarithm</td>
                <td>{`$e$`}</td>
                <td>{`$\\ln x$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>Absolute Value, Floor, Ceiling, Sign</h2>
          <ul className="lrn-list">
            <li>
              <strong>Absolute value:</strong> {`$|x| = x$`} if {`$x \\geq 0$`}, else {`$-x$`}.
            </li>
            <li>
              <strong>Distance:</strong> {`$|x - y|$`} is the distance between {`$x$`} and {`$y$`}{' '}
              on the number line.
            </li>
            <li>
              <strong>Triangle inequality:</strong> {`$|a + b| \\leq |a| + |b|$`}, equality iff same
              sign.
            </li>
            <li>
              <strong>Floor:</strong> {`$\\lfloor x \\rfloor$`} = greatest integer {`$\\leq x$`}.
            </li>
            <li>
              <strong>Ceiling:</strong> {`$\\lceil x \\rceil$`} = smallest integer {`$\\geq x$`}.
            </li>
            <li>
              <strong>Fractional part:</strong> {`$\\{x\\} = x - \\lfloor x \\rfloor$`},{' '}
              {`$0 \\leq \\{x\\} < 1$`}.
            </li>
            <li>
              <strong>Identity:</strong> {`$\\lfloor x \\rfloor + \\{x\\} = x$`}
            </li>
            <li>
              <strong>Sign:</strong> {`$\\operatorname{sgn}(x) = 1, 0, -1$`} for {`$x > 0$`},{' '}
              {`$x = 0$`}, {`$x < 0$`}.
            </li>
          </ul>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$x$`}</th>
                <th>{`$\\lfloor x \\rfloor$`}</th>
                <th>{`$\\lceil x \\rceil$`}</th>
                <th>{`$\\{x\\}$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2.7</td>
                <td>2</td>
                <td>3</td>
                <td>0.7</td>
              </tr>
              <tr>
                <td>−5.3</td>
                <td>−6</td>
                <td>−5</td>
                <td>0.7</td>
              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>0</td>
              </tr>
              <tr>
                <td>−2.1</td>
                <td>−3</td>
                <td>−2</td>
                <td>0.9</td>
              </tr>
            </tbody>
          </table>

          <h2>Rational and Special Functions</h2>
          <ul className="lrn-list">
            <li>
              <strong>Vertical asymptote:</strong> {`$x = c$`} where {`$Q(c) = 0$`} and{' '}
              {`$P(c) \\neq 0$`}.
            </li>
            <li>
              <strong>Horizontal asymptote:</strong>{' '}
              {`$y = \\frac{\\text{leading coeff of } P}{\\text{leading coeff of } Q}$`} when{' '}
              {`$\\deg P = \\deg Q$`}; {`$y = 0$`} when {`$\\deg P < \\deg Q$`}.
            </li>
            <li>
              <strong>Slant asymptote:</strong> when {`$\\deg P = \\deg Q + 1$`}, long division
              yields a linear quotient the asymptote.
            </li>
          </ul>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>Domain</th>
                <th>Range</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\sqrt{x}$`}</td>
                <td>{`$[0, \\infty)$`}</td>
                <td>{`$[0, \\infty)$`}</td>
                <td>Even root: non-negative inputs only</td>
              </tr>
              <tr>
                <td>{`$\\sqrt[3]{x}$`}</td>
                <td>all reals</td>
                <td>all reals</td>
                <td>Odd root: all reals</td>
              </tr>
              <tr>
                <td>{`$|x|$`}</td>
                <td>all reals</td>
                <td>{`$[0, \\infty)$`}</td>
                <td>Always non-negative</td>
              </tr>
              <tr>
                <td>{`$\\lfloor x \\rfloor$`}</td>
                <td>all reals</td>
                <td>integers</td>
                <td>Step function</td>
              </tr>
              <tr>
                <td>{`$\\lceil x \\rceil$`}</td>
                <td>all reals</td>
                <td>integers</td>
                <td>Step function</td>
              </tr>
            </tbody>
          </table>

          <h2>Solving {`$|f(x)| = c$`}</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Steps</th>
                <th>Watch out</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Casework</td>
                <td>
                  {`$f(x) = c$`} or {`$f(x) = -c$`}
                </td>
                <td>Check each solution against its case's sign condition</td>
              </tr>
              <tr>
                <td>Squaring</td>
                <td>{`$[f(x)]^2 = c^2$`}</td>
                <td>May produce extraneous roots always verify</td>
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
                <td>Radical equation</td>
                <td>Forgetting to check for extraneous roots</td>
                <td>Substitute every candidate back into the original</td>
              </tr>
              <tr>
                <td>Absolute value casework</td>
                <td>Skipping the sign condition</td>
                <td>Verify each solution satisfies its case</td>
              </tr>
              <tr>
                <td>Floor of a negative</td>
                <td>{`$\\lfloor -5.3 \\rfloor = -5$`}</td>
                <td>
                  {`$\\lfloor -5.3 \\rfloor = -6$`} floor rounds toward {`$-\\infty$`}
                </td>
              </tr>
              <tr>
                <td>Cancelling rational expressions</td>
                <td>Cancelling without listing where the factor is zero</td>
                <td>Note every value that makes the cancelled factor zero</td>
              </tr>
              <tr>
                <td>Iterated exponents</td>
                <td>
                  {`$(a^b)^c$`} treated as {`$a^{b^c}$`}
                </td>
                <td>
                  {`$(a^b)^c = a^{bc}$`}; without parentheses, {`$a^{b^c}$`} is different
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
  }

  return config
}

export default function Polynomials() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
