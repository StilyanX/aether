import 'katex/dist/katex.min.css'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { DiffOfSquaresViz, PascalTriangleViz, SquareOfSumViz } from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'bth',
    documentTitle: 'The Binomial Theorem - AETHER',
    learning: {
      groupTitle: 'Advanced Topics',
      category: 'Module 1.4',
      title: 'The Binomial Theorem',
      subtitle:
        'Square a sum. Cube it. Build any power then read the coefficients from a triangle.',
      sections: [
        // ── Section 0: Intro ──────────────────────────────────────────────
        <>
          <h1>The Binomial Theorem</h1>
          <p>
            A <strong>binomial</strong> is a two-term expression like {`$a + b$`}.
          </p>
          <p>
            What happens when you raise it to a power squared, cubed, fourth, and beyond? Each
            expansion follows a precise pattern.
          </p>
          <p>
            The powers of {`$a$`} and {`$b$`} are easy to read off. The numbers out front the{' '}
            <strong>coefficients</strong> come from a triangle of numbers called{' '}
            <strong>Pascal's triangle</strong>.
          </p>
          <p>
            Three small identities, called <strong>short multiplication formulas</strong>, cover the
            cases you meet most often: the square of a sum, the square of a difference, and the
            difference of squares. Master these, then climb to higher powers.
          </p>
          <p>
            One bonus: these formulas let you square big numbers in your head. By the end of this
            page you will compute things like {`$101^2$`}, {`$998^2$`}, and {`$11^4$`} without a
            pencil.
          </p>
        </>,

        // ── Section 1: Square of a Sum ────────────────────────────────────
        <>
          <h2>The Square of a Sum</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Is {`$(a + b)^2$`} the same as {`$a^2 + b^2$`}? Or is something missing?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Something is missing. Squaring a sum produces a cross term {`$2ab$`}.</p>
              <p>The full result is {`$(a + b)^2 = a^2 + 2ab + b^2$`}.</p>
            </details>
          </div>

          <h3>The rule we already have</h3>
          <p>
            To multiply two sums, multiply each term of the first sum by each term of the second,
            then add the results.
          </p>

          <div className="lrn-eq">{`$$(a + b)(m + n) = am + an + bm + bn$$`}</div>

          <p>
            That is the only rule we need. Everything that follows on this module comes from applying
            it carefully.
          </p>

          <h3>Derivation</h3>
          <p>
            {`$(a + b)^2$`} means {`$(a + b)(a + b)$`}. Use the rule above with both sums equal.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$(a + b)(a + b) = aa + ab + ba + bb$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Write {`$aa = a^2$`} and {`$bb = b^2$`}. Use {`$ab = ba$`} to combine the two middle
                terms.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$= a^2 + 2ab + b^2$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">{`$$(a + b)^2 = a^2 + 2ab + b^2$$`}</div>

          <p>
            In words:{' '}
            <em>
              the square of the sum of two terms equals the sum of their squares plus twice their
              product.
            </em>
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Critical error to avoid</span>
            <p>
              <strong>{`$(a + b)^2 \\ \\neq \\ a^2 + b^2$`}</strong>
            </p>
            <p>
              "The square of the sum" and "the sum of the squares" sound alike but are not equal.
              The first includes the cross term {`$2ab$`}; the second does not. They agree only when{' '}
              {`$ab = 0$`}.
            </p>
          </div>

          <h3>Geometric proof</h3>
          <p>
            Draw a square with side {`$a + b$`}. Cut it with one horizontal line and one vertical
            line, both at distance {`$a$`} from the same corner.
          </p>
          <p>
            You get four pieces: an {`$a \\times a$`} square, a {`$b \\times b$`} square, and two{' '}
            {`$a \\times b$`} rectangles. Their areas add to {`$a^2 + 2ab + b^2$`}, which must equal
            the whole square {`$(a+b)^2$`}.
          </p>

          <div className="lrn-graph">
            <p>
              An {`$(a+b)$`}-sided square cut into four regions: one {`$a^2$`}, one {`$b^2$`}, and
              two {`$ab$`} rectangles.
            </p>
            <SquareOfSumViz />
          </div>

          <h3>The candy story</h3>
          <p>
            Here is a story that explains the formula without algebra. A kind wizard gives every
            visiting child as many candies as there are children present.
          </p>
          <p>
            <strong>Day 1.</strong> First {`$a$`} boys come alone. Each gets {`$a$`} candies, so the
            boys together get {`$a \\cdot a = a^2$`} candies. Then {`$b$`} girls come alone. Each
            gets {`$b$`} candies, so the girls together get {`$b^2$`}. Day 1 total: {`$a^2 + b^2$`}.
          </p>
          <p>
            <strong>Day 2.</strong> All {`$a + b$`} children come together. Each gets {`$a + b$`}{' '}
            candies, so the total is {`$(a+b)^2$`}.
          </p>
          <p>
            <strong>The difference.</strong> On day 2, each of the {`$a$`} boys got {`$b$`} extra
            candies (one for each girl present), so all the boys together got {`$ab$`} extra. Each
            of the {`$b$`} girls got {`$a$`} extra (one for each boy), so all the girls got {`$ba$`}{' '}
            extra. The total extra is {`$ab + ba = 2ab$`}.
          </p>
          <p>So {`$(a+b)^2 = a^2 + b^2 + 2ab$`}. The same formula, told in candies.</p>

          <h3>Worked example: plain numbers</h3>
          <p>Compute {`$(5 + 7)^2$`} using the formula, then check directly.</p>
          <div className="lrn-eq">{`$$(5 + 7)^2 = 5^2 + 2 \\cdot 5 \\cdot 7 + 7^2 = 25 + 70 + 49 = 144$$`}</div>
          <p>
            Check: {`$5 + 7 = 12$`} and {`$12^2 = 144$`}. ✓
          </p>

          <h3>Worked example: a fraction</h3>
          <p>Compute {`$\\left(13 + \\frac{1}{3}\\right)^2$`}.</p>
          <div className="lrn-eq">
            {`$$\\left(13 + \\tfrac{1}{3}\\right)^2 = 169 + 2 \\cdot 13 \\cdot \\tfrac{1}{3} + \\tfrac{1}{9} = 169 + \\tfrac{26}{3} + \\tfrac{1}{9}$$`}
          </div>
          <p>The formula works for any numbers whole, fractional, or algebraic.</p>

          <h3>Mental math: squaring big numbers near a round number</h3>
          <p>
            The formula turns {`$101^2$`} into something you can do in your head. Write{' '}
            {`$101 = 100 + 1$`}.
          </p>

          <div className="lrn-eq">{`$$101^2 = (100 + 1)^2 = 100^2 + 2 \\cdot 100 \\cdot 1 + 1^2 = 10000 + 200 + 1 = 10201$$`}</div>

          <p>
            Same trick for {`$1002^2$`}. Write {`$1002 = 1000 + 2$`}.
          </p>

          <div className="lrn-eq">{`$$1002^2 = 1000^2 + 2 \\cdot 1000 \\cdot 2 + 2^2 = 1000000 + 4000 + 4 = 1004004$$`}</div>

          <p>
            The pattern: split the number into a round part plus a small part, square each, and add
            twice their product.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is splitting the number this way so much faster than long multiplication?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Multiplying by a round number like 100 or 1000 is just shifting digits almost free.
                The only real arithmetic is the small {`$b^2$`} and the doubled product {`$2ab$`},
                which use small numbers.
              </p>
            </details>
          </div>

          <h3>What if {`$a = b$`}?</h3>
          <p>
            Setting {`$a = b$`} in {`$(a+b)^2 = a^2 + 2ab + b^2$`} gives {`$(2a)^2 = 4a^2$`}. The
            left side is also {`$2^2 \\cdot a^2 = 4a^2$`}. Consistent. The cross term carries half
            the result when the two terms are equal.
          </p>
        </>,

        // ── Section 1b: Square of a Difference ────────────────────────────
        <>
          <h2>The Square of a Difference</h2>

          <p>
            We do not need a new derivation. Replace {`$b$`} with {`$-b$`} in the square-of-sum
            formula and the rest follows.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$(a - b)^2 = (a + (-b))^2$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`$= a^2 + 2 \\cdot a \\cdot (-b) + (-b)^2$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Minus times plus is minus, and minus times minus is plus. So {`$2a(-b) = -2ab$`} and{' '}
                {`$(-b)^2 = b^2$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`$= a^2 - 2ab + b^2$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">{`$$(a - b)^2 = a^2 - 2ab + b^2$$`}</div>

          <p>
            In words:{' '}
            <em>
              the square of the difference equals the sum of the squares minus twice their product.
            </em>{' '}
            Only the middle sign changes.
          </p>

          <h3>Why this is the same formula, secretly</h3>
          <p>
            The square-of-sum formula already covers every case, even negative numbers. Plug in{' '}
            {`$a = 7$`}, {`$b = -5$`}:
          </p>

          <div className="lrn-eq">{`$$(7 + (-5))^2 = 7^2 + 2 \\cdot 7 \\cdot (-5) + (-5)^2 = 49 - 70 + 25 = 4$$`}</div>

          <p>
            Same answer as {`$(7 - 5)^2 = 2^2 = 4$`}. The square-of-difference is not a separate
            rule it is the square-of-sum with one term negative.
          </p>

          <h3>Mental math: numbers just below a round number</h3>
          <p>
            Compute {`$99^2$`} and {`$998^2$`} in your head.
          </p>

          <div className="lrn-eq">{`$$99^2 = (100 - 1)^2 = 10000 - 200 + 1 = 9801$$`}</div>
          <div className="lrn-eq">{`$$998^2 = (1000 - 2)^2 = 1000000 - 4000 + 4 = 996004$$`}</div>

          <h3>The {`$\\ldots 5$`} squaring trick</h3>
          <p>
            Any number ending in {`$5$`} can be squared in your head. Drop the {`$5$`}, get a number{' '}
            {`$n$`}, multiply {`$n$`} by {`$n + 1$`}, and write "25" at the end.
          </p>
          <p>
            <strong>Example.</strong> {`$35^2$`}: drop the 5 to get {`$n = 3$`}. Compute{' '}
            {`$3 \\cdot 4 = 12$`}. Append "25". Answer: {`$1225$`}.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>Any number ending in 5 has the form {`$10n + 5$`}. Square it:</p>
            <div className="lrn-eq">
              {`$$(10n + 5)^2 = 100n^2 + 100n + 25 = 100 \\cdot n(n+1) + 25$$`}
            </div>
            <p>
              The {`$100 \\cdot n(n+1)$`} pushes {`$n(n+1)$`} two digit-places to the left. The{' '}
              {`$25$`} fills the last two digits. That is exactly the trick.
            </p>
          </div>

          <h3>What if {`$a = b$`}?</h3>
          <p>
            Setting {`$a = b$`} in {`$(a-b)^2 = a^2 - 2ab + b^2$`} gives{' '}
            {`$0 = a^2 - 2a^2 + a^2 = 0$`}. Consistent, as it must be: {`$(a-a)^2 = 0^2 = 0$`}.
          </p>
        </>,

        // ── Section 2: Difference of Squares ─────────────────────────────
        <>
          <h2>The Difference of Squares</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Can {`$a^2 - b^2$`} be written as a product of two simpler expressions? If yes, which
              ones?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes: {`$a^2 - b^2 = (a + b)(a - b)$`}. The sum and the difference of the same two
                terms.
              </p>
            </details>
          </div>

          <h3>Derivation</h3>
          <p>
            Multiply {`$(a + b)$`} by {`$(a - b)$`} using our one rule for products of sums.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`$(a + b)(a - b) = a(a - b) + b(a - b) = a^2 - ab + ba - b^2$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                The middle terms {`$-ab$`} and {`$+ba$`} are equal in size but opposite in sign, so
                they cancel.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$= a^2 - b^2$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">{`$$a^2 - b^2 = (a + b)(a - b)$$`}</div>

          <p>
            Read this in two directions. Left to right, it factors a difference of two squares into
            a product. Right to left, it multiplies a sum by a difference and the middle terms
            disappear.
          </p>

          <h3>Geometric proof</h3>
          <p>
            Start with an {`$a \\times a$`} square of area {`$a^2$`}. Cut a {`$b \\times b$`} square
            out of one corner, area {`$b^2$`}. The remaining L-shape has area {`$a^2 - b^2$`}.
          </p>
          <p>
            Cut the L into two strips and slide them together to form an {`$(a-b) \\times (a+b)$`}{' '}
            rectangle. Its area is {`$(a-b)(a+b)$`}, and it must equal {`$a^2 - b^2$`}.
          </p>

          <div className="lrn-graph">
            <p>
              The L-shape (area {`$a^2 - b^2$`}) rearranges into a rectangle with sides {`$a + b$`}{' '}
              and {`$a - b$`}.
            </p>
            <DiffOfSquaresViz />
          </div>

          <h3>Mental math: a product near a round number</h3>
          <p>
            Use the formula right-to-left to compute {`$101 \\cdot 99$`} without writing anything
            down. Notice that {`$101 = 100 + 1$`} and {`$99 = 100 - 1$`}.
          </p>

          <div className="lrn-eq">{`$$101 \\cdot 99 = (100 + 1)(100 - 1) = 100^2 - 1^2 = 10000 - 1 = 9999$$`}</div>

          <p>
            The trick: spot the sum-and-difference pattern around a round number. Two-second
            arithmetic.
          </p>

          <h3>What happens at {`$a = b$`}?</h3>
          <p>
            Set {`$a = b$`}: {`$a^2 - a^2 = 0$`} on the left, and {`$(a+a)(a-a) = 2a \\cdot 0 = 0$`}{' '}
            on the right. Both sides are {`$0$`}, as they must be.
          </p>

          <h3>Application: two integers that differ by 2</h3>
          <p>
            <strong>Problem.</strong> Take any two integers that differ by 2. Multiply them and add
            1. Prove the result is always a perfect square. Examples:{' '}
            {`$3 \\cdot 5 + 1 = 16 = 4^2$`}; {`$13 \\cdot 15 + 1 = 196 = 14^2$`}.
          </p>
          <p>
            Let {`$n$`} be the integer halfway between them, so the two integers are {`$n - 1$`} and{' '}
            {`$n + 1$`}. Then:
          </p>

          <div className="lrn-eq">{`$$(n - 1)(n + 1) + 1 = n^2 - 1 + 1 = n^2$$`}</div>

          <p>
            The difference-of-squares identity does the work in one line. Choosing the midpoint as
            the variable is the move that makes it clean.
          </p>

          <h3>Why consecutive squares grow by odd numbers</h3>
          <p>
            Write out the squares: {`$1, 4, 9, 16, 25, 36, 49, \\ldots$`} The gaps between
            neighbours are {`$3, 5, 7, 9, 11, 13, \\ldots$`} odd numbers, each two more than the
            previous.
          </p>
          <p>The difference of squares identity explains this immediately:</p>

          <div className="lrn-eq">{`$$(n+1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$$`}</div>

          <p>
            The gap from {`$n^2$`} to the next square is {`$2n + 1$`}. When {`$n$`} grows by 1, this
            gap grows by 2. Such a sequence each term {`$2$`} more than the last is called an{' '}
            <strong>arithmetic progression</strong>.
          </p>

          <h3>A nested example: {`$(a^2 - 2ab + b^2)(a^2 + 2ab + b^2)$`}</h3>
          <p>
            Two methods. Both arrive at {`$a^4 - 2a^2 b^2 + b^4$`}. Pick whichever pattern you spot
            first.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Method 1 Recognise the squares</span>
              <p>{`$a^2 - 2ab + b^2 = (a-b)^2$`}</p>
              <p>{`$a^2 + 2ab + b^2 = (a+b)^2$`}</p>
              <p>{`$[(a-b)(a+b)]^2 = (a^2 - b^2)^2 = a^4 - 2a^2 b^2 + b^4$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Method 2 Group {`$a^2 + b^2$`}</span>
              <p>{`$[(a^2 + b^2) - 2ab][(a^2 + b^2) + 2ab]$`}</p>
              <p>{`$= (a^2 + b^2)^2 - (2ab)^2$`}</p>
              <p>{`$= a^4 + 2a^2 b^2 + b^4 - 4a^2 b^2 = a^4 - 2a^2 b^2 + b^4$`}</p>
            </div>
          </div>

          <p>
            Both methods use the difference-of-squares identity. Pattern recognition turns a
            four-by-four multiplication into a single line of algebra.
          </p>
        </>,

        // ── Section 2b: Three Terms ───────────────────────────────────────
        <>
          <h2>Squaring Three Terms</h2>

          <p>
            Everything we just did extends to sums with three terms. The trick is to treat two of
            the three terms as a single chunk.
          </p>

          <h3>Derivation of {`$(a + b + c)^2$`}</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Treat {`$a + b$`} as one chunk. Then {`$(a + b + c)^2 = ((a+b) + c)^2$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Apply the square-of-sum formula with the chunk and {`$c$`}:{' '}
                {`$= (a+b)^2 + 2(a+b)c + c^2$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Expand: {`$= a^2 + 2ab + b^2 + 2ac + 2bc + c^2$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                Reorder so the squares come first: {`$= a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$`}.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            {`$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$`}
          </div>

          <p>
            The pattern: square each of the three terms, then add twice the product of every
            distinct pair. A 3×3 multiplication grid shows it visually three diagonal cells give the
            squares; the off-diagonal cells appear in matching pairs and give the doubled cross
            products.
          </p>

          <h3>What about {`$(a + b - c)^2$`}?</h3>
          <p>
            Same trick. Replace {`$c$`} with {`$-c$`}. Square terms stay positive; mixed terms with{' '}
            {`$c$`} flip sign.
          </p>

          <div className="lrn-eq">{`$$(a + b - c)^2 = a^2 + b^2 + c^2 + 2ab - 2ac - 2bc$$`}</div>

          <h3>Four sum-and-difference products</h3>
          <p>
            Pair up a three-term sum with another three-term expression that flips some signs. In
            each case, look for chunks that match the {`$(X+Y)(X-Y) = X^2 - Y^2$`} pattern.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`$(a+b+c)(a+b-c)$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">Group: {`$((a+b) + c)((a+b) - c)$`}.</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Difference of squares with chunk {`$X = a+b$`}, {`$Y = c$`}: {`$= (a+b)^2 - c^2$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$= a^2 + 2ab + b^2 - c^2$`}</div>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`$(a+b+c)(a-b-c)$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">Group: {`$(a + (b+c))(a - (b+c))$`}.</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Difference of squares: {`$= a^2 - (b+c)^2 = a^2 - b^2 - 2bc - c^2$`}.
              </div>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`$(a+b-c)(a-b+c)$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">Group: {`$(a + (b-c))(a - (b-c))$`}.</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Difference of squares: {`$= a^2 - (b-c)^2 = a^2 - b^2 + 2bc - c^2$`}.
              </div>
            </div>
          </div>

          <p>
            Three identities, one trick. Pair the matching parts as the chunk {`$X$`}, the
            sign-flipped part as {`$Y$`}, and read off {`$X^2 - Y^2$`}.
          </p>
        </>,

        // ── Section 3: The Cube of a Sum ──────────────────────────────────
        <>
          <h2>The Cube of a Sum</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You already know {`$(a+b)^2 = a^2 + 2ab + b^2$`}. What do you think {`$(a+b)^3$`}{' '}
              looks like how many terms, and what coefficients?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Four terms, with coefficients {`$1, 3, 3, 1$`}:</p>
              <p>{`$(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$`}.</p>
            </details>
          </div>

          <h3>Derivation</h3>
          <p>
            {`$(a+b)^3$`} means {`$(a+b)^2 \\cdot (a+b)$`}. Half the work is already done we know{' '}
            {`$(a+b)^2 = a^2 + 2ab + b^2$`}. Multiply that by {`$(a+b)$`}.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$(a+b)^3 = (a^2 + 2ab + b^2)(a + b)$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Multiply each term in the first factor by each term in the second:{' '}
                {`$= a^3 + 2a^2 b + ab^2 + a^2 b + 2ab^2 + b^3$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Two terms have {`$a^2 b$`} and two have {`$ab^2$`}. Collect them:{' '}
                {`$2a^2 b + a^2 b = 3a^2 b$`}, {`$ab^2 + 2ab^2 = 3ab^2$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`$= a^3 + 3a^2 b + 3ab^2 + b^3$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">{`$$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$`}</div>

          <p>
            Notice the pattern. The power of {`$a$`} starts at 3 and drops by 1 each term; the power
            of {`$b$`} starts at 0 and rises by 1. The coefficients {`$1, 3, 3, 1$`} are symmetric:
            they read the same forwards and backwards.
          </p>

          <h3>The cube of a difference</h3>
          <p>
            We do not need a new derivation. Replace {`$b$`} with {`$-b$`} in the cube-of-sum
            formula. The {`$b$`}-terms flip sign every time they appear with an odd power; the
            even-power {`$b$`}-terms keep their sign.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$(a - b)^3 = (a + (-b))^3$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`$= a^3 + 3a^2(-b) + 3a(-b)^2 + (-b)^3$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$= a^3 - 3a^2 b + 3ab^2 - b^3$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">{`$$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$`}</div>

          <p>
            The signs alternate: plus, minus, plus, minus. Same coefficients, only the signs change.
          </p>

          <h3>Mental math: cubes of numbers near a round number</h3>
          <p>
            Compute {`$11^3$`} in your head. Write {`$11 = 10 + 1$`}.
          </p>
          <div className="lrn-eq">{`$$11^3 = (10 + 1)^3 = 1000 + 3 \\cdot 100 \\cdot 1 + 3 \\cdot 10 \\cdot 1 + 1 = 1331$$`}</div>

          <p>
            Compute {`$101^3$`}. Write {`$101 = 100 + 1$`}.
          </p>
          <div className="lrn-eq">{`$$101^3 = 100^3 + 3 \\cdot 100^2 + 3 \\cdot 100 + 1 = 1{,}000{,}000 + 30{,}000 + 300 + 1 = 1{,}030{,}301$$`}</div>

          <h3>Worked example with a variable: {`$(x + 2)^3$`}</h3>
          <p>
            Set {`$a = x$`}, {`$b = 2$`}.
          </p>
          <div className="lrn-eq">{`$$(x+2)^3 = x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8$$`}</div>

          <p>
            The middle coefficients come from multiplying the Pascal numbers {`$3$`} and {`$3$`} by
            the powers of {`$b = 2$`}: {`$3 \\cdot 2 = 6$`} and {`$3 \\cdot 4 = 12$`}.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN PARTIAL</span>
              <p>Expand {`$(x + 3)^3$`}.</p>
              <ol className="lrn-list">
                <li>
                  Identify: {`$a = x$`}, {`$b = 3$`}.
                </li>
                <li>{`$x^3 + 3 \\cdot x^2 \\cdot \\,?\\, + 3 \\cdot x \\cdot \\,?\\, + \\,?$`}</li>
                <li>Fill in and simplify.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>Expand {`$(2x - 1)^3$`} using the cube-of-difference formula.</p>
            </div>
          </div>
        </>,

        // ── Section 4: The Fourth Power and Coefficient Patterns ──────────
        <>
          <h2>The Fourth Power and the Pattern of Powers</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You know {`$(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$`}. What coefficients do you expect
              for {`$(a+b)^4$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The coefficients are {`$1, 4, 6, 4, 1$`}.</p>
              <p>{`$(a+b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$`}.</p>
            </details>
          </div>

          <h3>The pattern of powers (works for every {`$(a+b)^n$`})</h3>
          <p>Look at the formulas so far. The same rules govern every one of them.</p>
          <ul className="lrn-list">
            <li>
              There are {`$n + 1$`} terms in the expansion of {`$(a+b)^n$`}.
            </li>
            <li>
              The power of {`$a$`} starts at {`$n$`} and drops by 1 each term.
            </li>
            <li>
              The power of {`$b$`} starts at {`$0$`} and rises by 1 each term.
            </li>
            <li>The powers always add to {`$n$`} (the "total degree" of each term).</li>
          </ul>
          <p>
            So for {`$(a+b)^4$`}, the terms must be {`$a^4, a^3 b, a^2 b^2, ab^3, b^4$`}. Only the
            coefficients out front are unknown.
          </p>

          <h3>The coefficients are symmetric</h3>
          <p>
            In every {`$(a+b)^n$`}, the coefficients read the same forwards and backwards. They are{' '}
            <strong>palindromic</strong>.
          </p>
          <p>
            Why? Swapping {`$a$`} and {`$b$`} gives {`$(b+a)^n$`}, which equals {`$(a+b)^n$`}. The
            swap reverses the order of the terms, so the coefficients must equal themselves
            reversed. So the first coefficient equals the last, the second equals the
            second-to-last, and so on. The two edge coefficients are always {`$1$`}, because the
            edge terms come from picking only {`$a$`}s or only {`$b$`}s.
          </p>

          <h3>Two strategies for guessing {`$(a+b)^4$`}</h3>
          <p>
            Edges are {`$1$`}. The second coefficient follows the natural sequence 1, 2, 3, …, so it
            should be 4. By symmetry, the fourth coefficient is also 4. Only the middle one (
            {`$a^2 b^2$`}) is unknown. Trying values gives {`$1, 4, ?, 4, 1$`}.
          </p>
          <p>
            To pin down the {`$?$`}, multiply {`$(a+b)^3$`} by {`$(a+b)$`}.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`$(a^3 + 3a^2 b + 3ab^2 + b^3)(a + b)$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Multiply each term in the first factor by {`$a$`}, then by {`$b$`}, and write the
                results aligned by powers of {`$a$`}:{' '}
                {`$= a^4 + 3a^3 b + 3a^2 b^2 + ab^3 + a^3 b + 3a^2 b^2 + 3ab^3 + b^4$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Collect: {`$3a^3 b + a^3 b = 4a^3 b$`}; {`$3a^2 b^2 + 3a^2 b^2 = 6a^2 b^2$`};{' '}
                {`$ab^3 + 3ab^3 = 4ab^3$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`$= a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">{`$$(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$`}</div>

          <p>
            The middle coefficient is {`$6$`}, which we could not have guessed from the symmetry
            alone.
          </p>

          <h3>The fourth power of a difference</h3>
          <p>
            Substitute {`$-b$`} for {`$b$`}. Even powers of {`$b$`} keep their sign; odd powers
            flip.
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$(a-b)^4 = a^4 - 4a^3b + 6a^2b^2 - 4ab^3 + b^4$$`}</div>

          <p>
            The signs alternate plus, minus, plus, minus, plus. The same coefficients{' '}
            {`$1, 4, 6, 4, 1$`} appear; only the signs change.
          </p>
        </>,

        // ── Section 5: Pascal's Triangle ──────────────────────────────────
        <>
          <h2>Pascal's Triangle</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The coefficients for {`$(a+b)^4$`} are {`$1, 4, 6, 4, 1$`}. What do you think the
              coefficients for {`$(a+b)^5$`} are, just by looking at this row?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Each new coefficient is the sum of the two coefficients directly above it. From{' '}
                {`$1, 4, 6, 4, 1$`} you get {`$1, 5, 10, 10, 5, 1$`}.
              </p>
            </details>
          </div>

          <h3>Stacking the coefficients into a triangle</h3>
          <p>
            Write the coefficients we have collected so far, one row per power, with a {`$1$`} on
            top for {`$(a+b)^0 = 1$`}:
          </p>

          <div className="lrn-eq">
            {`$$\\begin{array}{c} 1 \\\\ 1 \\quad 1 \\\\ 1 \\quad 2 \\quad 1 \\\\ 1 \\quad 3 \\quad 3 \\quad 1 \\\\ 1 \\quad 4 \\quad 6 \\quad 4 \\quad 1 \\\\ 1 \\quad 5 \\quad 10 \\quad 10 \\quad 5 \\quad 1 \\end{array}$$`}
          </div>

          <p>
            This is <strong>Pascal's triangle</strong>. Every row begins and ends with {`$1$`}.
            Every interior entry equals the sum of the two entries immediately above it: {`$1+4=5$`}
            , {`$4+6=10$`}, {`$6+4=10$`}, {`$4+1=5$`}.
          </p>

          <div className="lrn-graph">
            <p>Pascal's triangle through row 6.</p>
            <PascalTriangleViz />
          </div>

          <h3>Why the sum-of-two-above rule works</h3>
          <p>
            Take any term in {`$(a+b)^n$`} with coefficient {`$c$`} and shape {`$a^k b^{n-k}$`}.
            Multiplying by {`$(a+b)$`} produces two children:
          </p>
          <ul className="lrn-list">
            <li>{`$c \\cdot a^k b^{n-k} \\cdot a = c \\cdot a^{k+1} b^{n-k}$`}</li>
            <li>{`$c \\cdot a^k b^{n-k} \\cdot b = c \\cdot a^k b^{n-k+1}$`}</li>
          </ul>
          <p>
            So every term in row {`$n+1$`} receives contributions from at most two parents in row{' '}
            {`$n$`}: the parent that contributed an {`$a$`} and the parent that contributed a{' '}
            {`$b$`}. Their coefficients add which is exactly the "sum of the two above" rule.
          </p>

          <h3>
            Reading {`$(a+b)^5$`} and {`$(a+b)^6$`}
          </h3>
          <p>
            Row 5 of the triangle is {`$1, 5, 10, 10, 5, 1$`}. Apply it with the standard power
            pattern (power of {`$a$`} from {`$5$`} down to {`$0$`}, power of {`$b$`} from {`$0$`} up
            to {`$5$`}):
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$`}</div>

          <p>
            For row 6, build by the rule:{' '}
            {`$1, 1+5, 5+10, 10+10, 10+5, 5+1, 1 = 1, 6, 15, 20, 15, 6, 1$`}.
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$(a+b)^6 = a^6 + 6a^5b + 15a^4b^2 + 20a^3b^3 + 15a^2b^4 + 6ab^5 + b^6$$`}
          </div>

          <p>
            Row 7 is {`$1, 7, 21, 35, 35, 21, 7, 1$`} (each entry is the sum of two above it). So:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$(a+b)^7 = a^7 + 7a^6b + 21a^5b^2 + 35a^4b^3 + 35a^3b^4 + 21a^2b^5 + 7ab^6 + b^7$$`}
          </div>

          <p>No new multiplication. Just one addition per coefficient.</p>

          <h3>The formula for {`$(a-b)^n$`}</h3>
          <p>
            Substitute {`$-b$`} for {`$b$`} in {`$(a+b)^n$`}. The signs alternate plus, minus, plus,
            minus, …
          </p>
          <div className="lrn-eq">{`$$(a-b)^4 = a^4 - 4a^3 b + 6a^2 b^2 - 4ab^3 + b^4$$`}</div>
          <div className="lrn-eq">{`$$(a-b)^5 = a^5 - 5a^4 b + 10a^3 b^2 - 10a^2 b^3 + 5ab^4 - b^5$$`}</div>
          <div className="lrn-eq">{`$$(a-b)^6 = a^6 - 6a^5 b + 15a^4 b^2 - 20a^3 b^3 + 15a^2 b^4 - 6ab^5 + b^6$$`}</div>

          <h3>Mental math: powers of 11</h3>
          <p>
            Set {`$a = 10$`}, {`$b = 1$`}. Every {`$b^k$`} equals {`$1$`}, so each term is just a
            Pascal coefficient times a power of 10. The expansion reads digits straight off the
            triangle when no row sums into the next decimal place.
          </p>
          <div className="lrn-eq">{`$$11^2 = 121, \\qquad 11^3 = 1331, \\qquad 11^4 = 14641$$`}</div>
          <p>
            At {`$11^5$`} the row is {`$1, 5, 10, 10, 5, 1$`}. The {`$10$`}s carry into the next
            place value, so the digits regroup to {`$161051$`}.
          </p>

          <h3>
            Two clean checks: {`$a = b$`} and {`$a = -b$`}
          </h3>
          <p>
            <strong>Sum of any row equals {`$2^n$`}.</strong> Set {`$a = b = 1$`} in {`$(a+b)^n$`}:
            the left side becomes {`$2^n$`}, and the right side becomes the sum of all the
            coefficients in row {`$n$`}.
          </p>

          <div className="lrn-eq">{`$$\\underbrace{1 + 1}_{\\text{row 1}} = 2, \\quad \\underbrace{1 + 2 + 1}_{\\text{row 2}} = 4, \\quad \\underbrace{1 + 3 + 3 + 1}_{\\text{row 3}} = 8, \\quad \\underbrace{1 + 4 + 6 + 4 + 1}_{\\text{row 4}} = 16$$`}</div>

          <p>
            Each row doubles. The pattern is {`$2^n$`} because every term gets one factor from each
            of the {`$n$`} copies of {`$(a+b)$`} and there are {`$2^n$`} ways to choose.
          </p>

          <p>
            <strong>Alternating sum of any row equals {`$0$`}.</strong> Set {`$a = 1$`},{' '}
            {`$b = -1$`}. The left side is {`$0^n = 0$`}. The right side becomes{' '}
            {`$1 - 4 + 6 - 4 + 1 = 0$`} for row 4, {`$1 - 5 + 10 - 10 + 5 - 1 = 0$`} for row 5, and
            so on. Pluses and minuses cancel exactly.
          </p>

          <h3>Summary table</h3>
          <table>
            <thead>
              <tr>
                <th>Power</th>
                <th>Expansion</th>
                <th>Coefficients</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$(a+b)^0$`}</td>
                <td>{`$1$`}</td>
                <td>1</td>
              </tr>
              <tr>
                <td>{`$(a+b)^1$`}</td>
                <td>{`$a + b$`}</td>
                <td>1, 1</td>
              </tr>
              <tr>
                <td>{`$(a+b)^2$`}</td>
                <td>{`$a^2 + 2ab + b^2$`}</td>
                <td>1, 2, 1</td>
              </tr>
              <tr>
                <td>{`$(a+b)^3$`}</td>
                <td>{`$a^3 + 3a^2 b + 3ab^2 + b^3$`}</td>
                <td>1, 3, 3, 1</td>
              </tr>
              <tr>
                <td>{`$(a+b)^4$`}</td>
                <td>{`$a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$`}</td>
                <td>1, 4, 6, 4, 1</td>
              </tr>
              <tr>
                <td>{`$(a+b)^5$`}</td>
                <td>{`$a^5 + 5a^4 b + 10a^3 b^2 + 10a^2 b^3 + 5ab^4 + b^5$`}</td>
                <td>1, 5, 10, 10, 5, 1</td>
              </tr>
              <tr>
                <td>{`$(a+b)^6$`}</td>
                <td>{`$a^6 + 6a^5 b + 15a^4 b^2 + 20a^3 b^3 + 15a^2 b^4 + 6ab^5 + b^6$`}</td>
                <td>1, 6, 15, 20, 15, 6, 1</td>
              </tr>
              <tr>
                <td>{`$(a+b)^7$`}</td>
                <td>
                  {`$a^7 + 7a^6 b + 21a^5 b^2 + 35a^4 b^3 + 35a^3 b^4 + 21a^2 b^5 + 7ab^6 + b^7$`}
                </td>
                <td>1, 7, 21, 35, 35, 21, 7, 1</td>
              </tr>
            </tbody>
          </table>

          <h3>Blaise Pascal</h3>
          <p>
            Blaise Pascal (1623–1662) was a French mathematician and philosopher. The triangle was
            known centuries before him Chinese and Persian mathematicians had used it but Pascal
            organised its properties in one famous treatise, so the name stuck.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Use Pascal's triangle to expand {`$(x + 1)^5$`}.</p>
              <ol className="lrn-list">
                <li>Row 5 coefficients: {`$1, 5, 10, 10, 5, 1$`}.</li>
                <li>
                  Since {`$b = 1$`}, every power of {`$b$`} is {`$1$`} and disappears.
                </li>
                <li>{`$(x + 1)^5 = x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1$`}.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN PARTIAL</span>
              <ol className="lrn-list">
                <li>Row 6 coefficients: {`$1, 6, 15, ?, ?, 6, 1$`} fill in the gaps.</li>
                <li>Write each term of {`$(x + 1)^6$`} using those coefficients.</li>
                <li>Simplify.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>Expand {`$(2x + y)^4$`} using Pascal's triangle.</p>
            </div>
          </div>
        </>
      ]
    },

    // ─── Practice cards ───────────────────────────────────────────────────────
    practice: [
      {
        q: 'Expand {`$(a + b)^2$`}.',
        a: 'Result: {`$(a+b)^2 = a^2 + 2ab + b^2$`}. Multiply {`$(a+b)(a+b)$`}: cross terms are {`$ab$`} and {`$ba$`}, both equal to {`$ab$`}, so they combine to {`$2ab$`}.'
      },
      {
        q: 'Compute {`$(10 + 3)^2$`} using the square-of-sum identity, then verify.',
        a: 'Result: 169. Apply {`$10^2 + 2\\cdot10\\cdot3 + 3^2 = 100 + 60 + 9 = 169$`}. Verify: {`$13^2 = 169$`}. ✓ The identity works for any numbers, not just variables.'
      },
      {
        q: 'Why is {`$(a+b)^2 \\neq a^2 + b^2$`}? Give a concrete example.',
        a: 'The missing term is {`$2ab$`}. When you square {`$(a+b)$`}, you multiply two full copies of the sum, producing cross-products {`$ab$`} and {`$ba = ab$`}. Together they give {`$2ab$`}. Example: {`$(3+4)^2 = 49$`} but {`$3^2 + 4^2 = 25$`}. The gap is {`$2 \\cdot 3 \\cdot 4 = 24$`}.'
      },
      {
        q: 'What is the square of a difference formula? How is it derived from the square of a sum?',
        a: 'Result: {`$(a-b)^2 = a^2 - 2ab + b^2$`}. Derived by substituting {`$-b$`} for {`$b$`} in {`$(a+b)^2 = a^2 + 2ab + b^2$`}: the cross term becomes {`$2a(-b) = -2ab$`} and the last term becomes {`$(-b)^2 = b^2$`}.'
      },
      {
        q: 'Expand {`$\\left(5 + \\frac{1}{5}\\right)^2$`}.',
        a: 'Result: {`$25 + 2 + \\frac{1}{25} = 27\\frac{1}{25}$`}. Apply {`$a=5, b=\\frac{1}{5}$`}: {`$5^2 + 2\\cdot5\\cdot\\frac{1}{5} + \\left(\\frac{1}{5}\\right)^2 = 25 + 2 + \\frac{1}{25}$`}. The formula handles fractions without any modification.'
      },
      {
        q: 'Predict: Two integers differ by 4. Is their product plus 4 always a perfect square?',
        a: 'Yes. Let the integers be {`$n$`} and {`$n+4$`}. Then {`$n(n+4) + 4 = n^2 + 4n + 4 = (n+2)^2$`}. The square-of-sum identity explains why: {`$(n+2)^2$`} is always a perfect square.'
      },
      {
        q: 'Factor {`$a^2 - b^2$`}.',
        a: 'Result: {`$(a+b)(a-b)$`}. Expanding {`$(a+b)(a-b)$`} gives {`$a^2 - ab + ab - b^2 = a^2 - b^2$`}. The cross terms cancel because they are equal and opposite.'
      },
      {
        q: 'Factor {`$9x^2 - 16$`} using the difference-of-squares identity.',
        a: 'Result: {`$(3x + 4)(3x - 4)$`}. Recognise {`$9x^2 = (3x)^2$`} and {`$16 = 4^2$`}, so {`$a = 3x$`} and {`$b = 4$`}. Apply {`$a^2 - b^2 = (a+b)(a-b)$`}. The same identity works whenever two terms are perfect squares.'
      },
      {
        q: 'Why do the cross terms cancel in {`$(a+b)(a-b)$`} but not in {`$(a+b)^2$`}?',
        a: 'In {`$(a+b)(a-b)$`} the cross terms are {`$+ab$`} and {`$-ab$`}: opposite signs, so they cancel. In {`$(a+b)^2 = (a+b)(a+b)$`} both copies have {`$+b$`}, so cross terms are {`$+ab$`} and {`$+ab$`}: same sign, so they add to {`$2ab$`}.'
      },
      {
        q: 'Prove that for any two integers differing by 2, their product plus 1 is a perfect square.',
        a: 'Let the smaller integer be {`$n$`}. Then the larger is {`$n+2$`}. Compute: {`$n(n+2) + 1 = n^2 + 2n + 1 = (n+1)^2$`}. This is the square of the integer between them, so it is always a perfect square. The square-of-sum identity {`$(n+1)^2 = n^2 + 2n + 1$`} is the key step.'
      },
      {
        q: 'The differences between consecutive perfect squares are {`$3, 5, 7, 9, \\ldots$`} Why do they always increase by 2?',
        a: 'The difference {`$(n+1)^2 - n^2 = 2n+1$`}. When {`$n$`} increases by 1, the difference increases by 2. So consecutive differences are consecutive odd numbers. The identity {`$(n+1)^2 = n^2 + 2n + 1$`} shows that each new square exceeds the previous by exactly {`$2n+1$`}.'
      },
      {
        q: 'Expand {`$(a + b)^3$`}.',
        a: 'Result: {`$a^3 + 3a^2 b + 3ab^2 + b^3$`}. Multiply {`$(a^2 + 2ab + b^2)(a+b)$`}: collect {`$a^2 b + 2a^2 b = 3a^2 b$`} and {`$2ab^2 + ab^2 = 3ab^2$`}. Coefficients are {`$1, 3, 3, 1$`}.'
      },
      {
        q: 'Expand {`$(x - 2)^3$`}.',
        a: 'Result: {`$x^3 - 6x^2 + 12x - 8$`}. Substitute {`$a = x$`}, {`$b = 2$`} into {`$(a-b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$`}: {`$x^3 - 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 4 - 8 = x^3 - 6x^2 + 12x - 8$`}. The substitution method is faster than expanding from scratch.'
      },
      {
        q: 'Why is {`$(a-b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$`} (not {`$a^3 - b^3$`})?',
        a: 'Cubing {`$(a-b)$`} means multiplying three copies of {`$(a-b)$`}. The intermediate terms do not cancel they generate {`$3a^2 b$`} and {`$3ab^2$`} terms that survive. Only the cross terms in the square-of-sum step cancel; the cube has different structure. Setting {`$b = 1$`}: {`$(a-1)^3 = a^3 - 3a^2 + 3a - 1 \\neq a^3 - 1$`}.'
      },
      {
        q: 'Which is faster for expanding {`$(a-b)^3$`}: direct multiplication or substituting {`$-b$`} into {`$(a+b)^3$`}? Why?',
        a: 'Substitution is faster. You already know {`$(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$`}. Replace {`$b$`} with {`$-b$`}: one substitution gives the answer immediately. Direct multiplication requires multiplying a trinomial by a binomial and collecting six terms.'
      },
      {
        q: "Write the coefficients of {`$(a+b)^4$`} using Pascal's triangle.",
        a: "Coefficients: {`$1, 4, 6, 4, 1$`}. Row 4 of Pascal's triangle is built from row 3 ({`$1, 3, 3, 1$`}): {`$1+3=4$`}, {`$3+3=6$`}, {`$3+1=4$`}. Edges are always 1. Full expansion: {`$(a+b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$`}."
      },
      {
        q: 'Expand {`$(2x + 1)^4$`} using the fourth-power formula.',
        a: 'Result: {`$16x^4 + 32x^3 + 24x^2 + 8x + 1$`}. Set {`$a = 2x$`}, {`$b = 1$`}. Apply coefficients {`$1, 4, 6, 4, 1$`}: {`$(2x)^4 + 4(2x)^3 + 6(2x)^2 + 4(2x) + 1 = 16x^4 + 32x^3 + 24x^2 + 8x + 1$`}. Substitute the actual values of {`$a$`} before simplifying.'
      },
      {
        q: "Predict the coefficients of {`$(a+b)^6$`} from Pascal's triangle without computing.",
        a: 'Row 6: {`$1, 6, 15, 20, 15, 6, 1$`}. Build from row 5 ({`$1, 5, 10, 10, 5, 1$`}): {`$1+5=6$`}, {`$5+10=15$`}, {`$10+10=20$`}, {`$10+5=15$`}, {`$5+1=6$`}. Each interior entry is the sum of the two entries above it.'
      },
      {
        q: 'Why are the coefficients in {`$(a+b)^n$`} always palindromic (the same forwards and backwards)?',
        a: 'Because {`$a$`} and {`$b$`} play equal roles in the expression. Swapping {`$a \\leftrightarrow b$`} gives {`$(b+a)^n = (a+b)^n$`}, which is the same expression. Swapping reverses the order of terms, so the coefficient sequence must equal its own reverse it must be palindromic.'
      },
      {
        q: 'A student writes {`$(a+b)^5 = a^5 + 5a^4 b + 10a^3 b^2 + 5a^2 b^3 + 5ab^4 + b^5$`}. Find the error.',
        a: "The coefficient of {`$a^2 b^3$`} is wrong. Row 5 of Pascal's triangle is {`$1, 5, 10, 10, 5, 1$`}. The correct coefficient of {`$a^2 b^3$`} is 10, not 5. The student likely misread the palindromic property they copied the left half of the row instead of recognizing the middle two are both 10."
      },
      {
        q: 'Use the difference-of-squares identity to factor {`$a^4 - b^4$`}.',
        a: 'Result: {`$(a^2 + b^2)(a + b)(a - b)$`}. First step: {`$a^4 - b^4 = (a^2)^2 - (b^2)^2 = (a^2 + b^2)(a^2 - b^2)$`}. Second step: factor {`$a^2 - b^2 = (a+b)(a-b)$`} again. The same identity applies at each level recognise the pattern, apply it repeatedly.'
      },
      {
        q: 'Expand {`$(a + b + c)^2$`}.',
        a: 'Result: {`$a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$`}. Group {`$a + b + c = (a+b) + c$`} and apply the square-of-sum formula: {`$(a+b)^2 + 2(a+b)c + c^2$`}. Expand {`$(a+b)^2$`} and distribute {`$2(a+b)c$`}. Every pair of distinct terms produces a cross term of the form {`$2 \\cdot \\text{term}_1 \\cdot \\text{term}_2$`}.'
      },
      {
        q: "In Pascal's triangle, why does each interior number equal the sum of the two numbers above it?",
        a: 'When you multiply {`$(a+b)^n$`} by {`$(a+b)$`}, every term {`$c \\cdot a^k b^{n-k}$`} produces two child terms: {`$c \\cdot a^{k+1} b^{n-k}$`} (times {`$a$`}) and {`$c \\cdot a^k b^{n+1-k}$`} (times {`$b$`}). Any given power {`$a^j b^l$`} receives contributions from two parent terms one that multiplied by {`$a$`} and one that multiplied by {`$b$`}. Their coefficients add, which is the Pascal rule.'
      },
      {
        q: 'Write out {`$(a+b)^6$`} in full.',
        a: "Result: {`$a^6 + 6a^5 b + 15a^4 b^2 + 20a^3 b^3 + 15a^2 b^4 + 6ab^5 + b^6$`}. Use row 6 of Pascal's triangle ({`$1, 6, 15, 20, 15, 6, 1$`}), apply the power pattern (power of {`$a$`} decreases from 6 to 0, power of {`$b$`} increases from 0 to 6). No multiplication needed."
      },
      {
        q: 'The identity {`$(a+b)^2 = a^2 + 2ab + b^2$`} is called a "generic formula." What does "generic" mean here?',
        a: '"Generic" means the formula holds for every value of {`$a$`} and {`$b$`}. One formula encodes infinitely many numeric equalities: substitute any numbers for {`$a$`} and {`$b$`} and the equation is always true. For example, {`$a=17, b=3$`} gives {`$20^2 = 289 + 102 + 9 = 400$`}.'
      },
      {
        q: 'Compute {`$101^2$`} without a pencil.',
        a: 'Write {`$101 = 100 + 1$`}. Then {`$101^2 = 100^2 + 2 \\cdot 100 \\cdot 1 + 1^2 = 10000 + 200 + 1 = 10201$`}. Splitting near a round number turns squaring into one easy addition.'
      },
      {
        q: 'Compute {`$998^2$`} without a pencil.',
        a: 'Write {`$998 = 1000 - 2$`}. Then {`$998^2 = 1000^2 - 2 \\cdot 1000 \\cdot 2 + 2^2 = 1{,}000{,}000 - 4000 + 4 = 996{,}004$`}. The square-of-difference identity does it in one line.'
      },
      {
        q: 'Compute {`$101 \\cdot 99$`} in your head.',
        a: 'Spot the sum-and-difference pattern: {`$101 = 100 + 1$`}, {`$99 = 100 - 1$`}. So {`$101 \\cdot 99 = 100^2 - 1^2 = 9999$`}. The difference-of-squares identity gives the answer instantly.'
      },
      {
        q: 'Why does the trick "square any number ending in 5" work? Demonstrate with {`$45^2$`}.',
        a: 'Any number ending in 5 is {`$10n + 5$`}. Square it: {`$(10n+5)^2 = 100n^2 + 100n + 25 = 100 \\cdot n(n+1) + 25$`}. So multiply {`$n$`} by {`$n+1$`}, write "25" at the end. For {`$45^2$`}: {`$n = 4$`}, {`$4 \\cdot 5 = 20$`}, append "25" → {`$2025$`}.'
      },
      {
        q: 'Compute {`$11^3$`} in your head.',
        a: 'Write {`$11 = 10 + 1$`}. Cube-of-sum: {`$11^3 = 10^3 + 3 \\cdot 10^2 + 3 \\cdot 10 + 1 = 1000 + 300 + 30 + 1 = 1331$`}. The Pascal row {`$1, 3, 3, 1$`} reads off directly as the digits 1, 3, 3, 1.'
      },
      {
        q: "Use Pascal's triangle to compute {`$11^4$`}.",
        a: 'Row 4 is {`$1, 4, 6, 4, 1$`}. With {`$a = 10$`}, {`$b = 1$`}: {`$11^4 = 10^4 + 4 \\cdot 10^3 + 6 \\cdot 10^2 + 4 \\cdot 10 + 1 = 10000 + 4000 + 600 + 40 + 1 = 14641$`}.'
      },
      {
        q: "Write {`$(a+b)^7$`} using Pascal's triangle.",
        a: 'Row 7 is built from row 6 ({`$1, 6, 15, 20, 15, 6, 1$`}): {`$1, 7, 21, 35, 35, 21, 7, 1$`}. So {`$(a+b)^7 = a^7 + 7a^6 b + 21a^5 b^2 + 35a^4 b^3 + 35a^3 b^4 + 21a^2 b^5 + 7ab^6 + b^7$`}.'
      },
      {
        q: 'Write the formula for {`$(a-b)^6$`}.',
        a: 'Same coefficients as {`$(a+b)^6$`}, with alternating signs starting plus: {`$(a-b)^6 = a^6 - 6a^5 b + 15a^4 b^2 - 20a^3 b^3 + 15a^2 b^4 - 6ab^5 + b^6$`}.'
      },
      {
        q: "The sum of all the numbers in row 5 of Pascal's triangle is {`$32$`}. Why exactly that number?",
        a: 'Set {`$a = b = 1$`} in {`$(a+b)^5$`}. The left side is {`$2^5 = 32$`}. The right side becomes the sum of all coefficients in row 5: {`$1 + 5 + 10 + 10 + 5 + 1 = 32$`}. In general, row {`$n$`} sums to {`$2^n$`}.'
      },
      {
        q: 'What does the alternating sum {`$1 - 6 + 15 - 20 + 15 - 6 + 1$`} of row 6 equal, and why?',
        a: 'It equals 0. Set {`$a = 1$`}, {`$b = -1$`} in {`$(a+b)^6$`}: left side is {`$0^6 = 0$`}, right side is the alternating sum. So for any {`$n \\geq 1$`}, the alternating row sum is 0.'
      },
      {
        q: 'Expand {`$(a+b+c)(a+b-c)$`}.',
        a: 'Group {`$(a+b)$`} as a chunk: {`$((a+b)+c)((a+b)-c)$`}. This is a difference of squares with {`$X = a+b$`}, {`$Y = c$`}. Result: {`$(a+b)^2 - c^2 = a^2 + 2ab + b^2 - c^2$`}.'
      },
      {
        q: 'Expand {`$(a+b-c)^2$`}.',
        a: 'Substitute {`$-c$`} for {`$c$`} in the three-term square formula. Squared terms stay positive; terms with one {`$c$`} flip sign. Result: {`$a^2 + b^2 + c^2 + 2ab - 2ac - 2bc$`}.'
      },
      {
        q: 'Expand {`$(a^2 - 2ab + b^2)(a^2 + 2ab + b^2)$`} using factoring patterns.',
        a: 'Recognise the squares: {`$a^2 - 2ab + b^2 = (a-b)^2$`} and {`$a^2 + 2ab + b^2 = (a+b)^2$`}. So the product is {`$(a-b)^2 (a+b)^2 = [(a-b)(a+b)]^2 = (a^2 - b^2)^2 = a^4 - 2a^2 b^2 + b^4$`}.'
      }
    ],

    // ─── Reference ────────────────────────────────────────────────────────────
    reference: {
      category: 'Quick Reference',
      title: 'The Binomial Theorem',
      sections: [
        <>
          <h2>Short Multiplication Formulas</h2>
          <p>The three core identities. Read in either direction expand or factor.</p>

          <h3>Distributive rule for products of sums</h3>
          <div className="lrn-eq">{`$$(a + b)(m + n) = am + an + bm + bn$$`}</div>

          <h3>Square of a Sum</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$(a + b)^2 = a^2 + 2ab + b^2$$`}</div>

          <h3>Square of a Difference</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$(a - b)^2 = a^2 - 2ab + b^2$$`}</div>

          <h3>Difference of Squares</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$a^2 - b^2 = (a + b)(a - b)$$`}</div>

          <h3>Consecutive-square gap</h3>
          <div className="lrn-eq">{`$$(n+1)^2 - n^2 = 2n + 1$$`}</div>

          <h3>Squaring a number that ends in 5</h3>
          <div className="lrn-eq">{`$$(10n + 5)^2 = 100 \\cdot n(n+1) + 25$$`}</div>
          <p>
            Example: {`$35^2$`} → {`$3 \\cdot 4 = 12$`}, append "25" → {`$1225$`}.
          </p>
        </>,

        <>
          <h2>Three-Term Identities</h2>

          <h3>Square of a sum of three terms</h3>
          <div className="lrn-eq">{`$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$`}</div>
          <p>Each variable squared, plus twice the product of every distinct pair.</p>

          <h3>Square with a minus sign</h3>
          <div className="lrn-eq">{`$$(a+b-c)^2 = a^2 + b^2 + c^2 + 2ab - 2ac - 2bc$$`}</div>

          <h3>Sum-and-difference products</h3>
          <div className="lrn-eq">{`$$(a+b+c)(a+b-c) = (a+b)^2 - c^2 = a^2 + 2ab + b^2 - c^2$$`}</div>
          <div className="lrn-eq">{`$$(a+b+c)(a-b-c) = a^2 - (b+c)^2 = a^2 - b^2 - 2bc - c^2$$`}</div>
          <div className="lrn-eq">{`$$(a+b-c)(a-b+c) = a^2 - (b-c)^2 = a^2 - b^2 + 2bc - c^2$$`}</div>
          <p>
            All three rely on the difference-of-squares pattern after pairing matched parts as a
            chunk.
          </p>
        </>,

        <>
          <h2>Higher Powers</h2>

          <h3>Cube of a Sum</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$`}</div>

          <h3>Cube of a Difference</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$`}</div>

          <h3>Fourth Power</h3>
          <div className="lrn-eq">{`$$(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$`}</div>
          <div className="lrn-eq">{`$$(a-b)^4 = a^4 - 4a^3b + 6a^2b^2 - 4ab^3 + b^4$$`}</div>

          <h3>Fifth Power</h3>
          <div className="lrn-eq">{`$$(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$`}</div>

          <h3>Sixth Power</h3>
          <div className="lrn-eq">{`$$(a+b)^6 = a^6 + 6a^5b + 15a^4b^2 + 20a^3b^3 + 15a^2b^4 + 6ab^5 + b^6$$`}</div>

          <h3>Seventh Power</h3>
          <div className="lrn-eq">{`$$(a+b)^7 = a^7 + 7a^6b + 21a^5b^2 + 35a^4b^3 + 35a^3b^4 + 21a^2b^5 + 7ab^6 + b^7$$`}</div>

          <p>For {`$(a-b)^n$`}: same coefficients, alternating signs starting with plus.</p>
        </>,

        <>
          <h2>Pascal's Triangle</h2>

          <p>
            Each interior entry equals the sum of the two entries directly above it. Every row
            starts and ends with {`$1$`}. Row {`$n$`} holds the coefficients of {`$(a+b)^n$`}.
          </p>

          <table>
            <thead>
              <tr>
                <th>Row {`$n$`}</th>
                <th>Coefficients</th>
                <th>Sum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1, 1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1, 2, 1</td>
                <td>4</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1, 3, 3, 1</td>
                <td>8</td>
              </tr>
              <tr>
                <td>4</td>
                <td>1, 4, 6, 4, 1</td>
                <td>16</td>
              </tr>
              <tr>
                <td>5</td>
                <td>1, 5, 10, 10, 5, 1</td>
                <td>32</td>
              </tr>
              <tr>
                <td>6</td>
                <td>1, 6, 15, 20, 15, 6, 1</td>
                <td>64</td>
              </tr>
              <tr>
                <td>7</td>
                <td>1, 7, 21, 35, 35, 21, 7, 1</td>
                <td>128</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-graph">
            <p>Pascal's triangle through row 6.</p>
            <PascalTriangleViz />
          </div>

          <h3>Structural facts</h3>
          <ul className="lrn-list">
            <li>Coefficients are palindromic: they read the same in reverse.</li>
            <li>
              Powers of {`$a$`} drop from {`$n$`} to {`$0$`}; powers of {`$b$`} rise from {`$0$`} to{' '}
              {`$n$`}. Powers always sum to {`$n$`}.
            </li>
            <li>{`$(a+b)^0 = 1$`} sits at the top (row 0).</li>
            <li>
              <strong>Row-sum identity:</strong> {`$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$`} (set{' '}
              {`$a = b = 1$`}).
            </li>
            <li>
              <strong>Alternating-sum identity:</strong>{' '}
              {`$\\sum_{k=0}^{n} (-1)^k \\binom{n}{k} = 0$`} for {`$n \\geq 1$`} (set {`$a = 1$`},{' '}
              {`$b = -1$`}).
            </li>
          </ul>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
  }

  return config
}

export default function TheBinomialTheorem() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
