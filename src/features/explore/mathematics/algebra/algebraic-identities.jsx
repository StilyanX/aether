import 'katex/dist/katex.min.css'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { DiffOfSquaresViz, PascalTriangleViz, SquareOfSumGeomViz } from '../../../../components/viz'
// Config

function useConfig() {
  const config = {
    cssPrefix: 'aid',
    documentTitle: 'Algebraic Identities (Special Products) AETHER',
    learning: {
      groupTitle: 'Foundations',
      category: 'Module 1.3',
      title: 'Algebraic Identities (Special Products)',
      subtitle: 'Square a sum. Factor a difference. Build any power from the last.',
      sections: [
        // Section 0: Intro
        <div className="lrn-section" key="lrn-section-0" id="lrn-section-0">
          <h2>Short Multiplication Formulas</h2>
          <p>
            An <strong>identity</strong> is an equation that is true for every value of its letters,
            not just some values.
          </p>
          <p>
            One identity like {`$(a + b)^2 = a^2 + 2ab + b^2$`} stands for infinitely many numerical
            equalities. Pick any numbers for {`$a$`} and {`$b$`} and the equation holds. Pick{' '}
            {`$a = 5$`} and {`$b = 7$`} and you get one true statement. Pick {`$a = 100$`} and{' '}
            {`$b = 1$`} and you get another. The letters are placeholders for any number.
          </p>
          <p>
            Three identities form the core of elementary algebra: the{' '}
            <strong>square of a sum</strong>, the <strong>square of a difference</strong>, and the{' '}
            <strong>difference of squares</strong>. From these three, Pascal's triangle gives you
            every higher power of a binomial.
          </p>
        </div>,

        // Section 1: Square of a Sum
        <div className="lrn-section" key="lrn-section-1" id="lrn-section-1">
          <h2>The Square of a Sum</h2>

          <p>
            What is {`$(a + b)^2$`}? The trap is to write {`$a^2 + b^2$`}. That answer is wrong.
            Squaring a sum means multiplying {`$(a + b)$`} by itself, and that produces a middle
            term you cannot ignore.
          </p>

          <h3>Derivation</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$(a + b)^2 = (a + b)(a + b)$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Multiply each term of the first sum by each term of the second:{' '}
                {`$a \\cdot a + a \\cdot b + b \\cdot a + b \\cdot b$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`$ab = ba$`}, so the two middle terms combine: {`$ab + ba = 2ab$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`$(a + b)^2 = a^2 + 2ab + b^2$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">{`$$(a + b)^2 = a^2 + 2ab + b^2$$`}</div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Why the middle term exists</span>
            <p>
              A kind wizard gives every child as many candies as the number of children in the room.
            </p>
            <p>
              Day one: {`$a$`} boys come together and each gets {`$a$`} candies, so the boys get{' '}
              {`$a^2$`} candies in total. The {`$b$`} girls come separately, and each gets {`$b$`}{' '}
              candies, so the girls get {`$b^2$`}. Together, in their separate rooms, they get{' '}
              {`$a^2 + b^2$`}.
            </p>
            <p>
              Day two: all {`$a + b$`} children come into one room. Each gets {`$a + b$`} candies.
              Together they get {`$(a + b)^2$`}.
            </p>
            <p>
              The difference is the extra each group brings to the other. The {`$a$`} boys give the{' '}
              {`$b$`} girls {`$ab$`} extra candies, and the {`$b$`} girls give the {`$a$`} boys
              another {`$ba$`}. That is the {`$2ab$`} middle term.
            </p>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Common error</span>
            <p>
              <strong>{`$(a + b)^2 \\neq a^2 + b^2$`}</strong>
            </p>
            <p>
              "The square of the sum" includes the cross term {`$2ab$`}. "The sum of the squares" (
              {`$a^2 + b^2$`}) does not. These are different expressions.
            </p>
          </div>

          <h3>Geometric proof</h3>
          <p>Draw a square with side length {`$a + b$`}.</p>
          <p>
            Cut it with one horizontal and one vertical line at distance {`$a$`} from two adjacent
            edges. You get four pieces: one {`$a \\times a$`} square, one {`$b \\times b$`} square,
            and two {`$a \\times b$`} rectangles.
          </p>
          <p>
            Their total area is {`$a^2 + b^2 + 2ab$`}, which equals {`$(a + b)^2$`}.
          </p>

          <div className="lrn-graph">
            <p>
              An {`$(a+b)$`}-sided square cut into four regions: {`$a^2$`}, {`$b^2$`}, and two{' '}
              {`$ab$`} rectangles.
            </p>
            <SquareOfSumGeomViz />
          </div>

          <h3>Worked example: integers</h3>
          <p>Compute {`$(5 + 7)^2$`}.</p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Identify a and b</span>
              <p className="lrn-step-content">
                {`$a = 5$`}, {`$b = 7$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply the formula</span>
              <p className="lrn-step-content">{`$(5 + 7)^2 = 5^2 + 2 \\cdot 5 \\cdot 7 + 7^2$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Compute each part</span>
              <p className="lrn-step-content">{`$= 25 + 70 + 49 = 144$`}.</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Verify</span>
              <p className="lrn-step-content">
                {`$5 + 7 = 12$`}, and {`$12^2 = 144$`}, which matches.
              </p>
            </div>
          </div>

          <h3>Worked example: mental computation of 101²</h3>
          <p>
            Write {`$101 = 100 + 1$`} and apply the identity with {`$a = 100$`}, {`$b = 1$`}.
          </p>
          <div className="lrn-eq">
            {`$$101^2 = 100^2 + 2 \\cdot 100 \\cdot 1 + 1^2 = 10000 + 200 + 1 = 10201$$`}
          </div>
          <p>
            The identity turns a hard squaring into three easy pieces. This is the standard way to
            square any number close to a round one. For {`$1002^2$`}, pick {`$a = 1000$`},{' '}
            {`$b = 2$`}: {`$1000000 + 4000 + 4 = 1004004$`}.
          </p>

          <p>
            The letters {`$a$`} and {`$b$`} stand for any number or expression. Substitute and
            simplify.
          </p>

          <h3>Worked example: an expression inside</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before reading on, expand {`$(2x + 3)^2$`}. What are {`$a$`} and {`$b$`} here?
            </p>
          </div>
          <p>
            Use the formula with {`$a = 2x$`} and {`$b = 3$`}. The whole term {`$2x$`} plays the
            role of {`$a$`}, so you square all of it.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Apply the formula</span>
              <p className="lrn-step-content">
                {`$(2x + 3)^2 = (2x)^2 + 2 \\cdot (2x) \\cdot 3 + 3^2$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Square each piece</span>
              <p className="lrn-step-content">
                {`$(2x)^2 = 4x^2$`}, the middle term is {`$12x$`}, and {`$3^2 = 9$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">{`$(2x + 3)^2 = 4x^2 + 12x + 9$`}.</p>
            </div>
          </div>
          <p>
            The common slip is to write {`$2x^2$`} instead of {`$(2x)^2 = 4x^2$`}. Square the
            coefficient too.
          </p>

          <h3>The square of a difference</h3>
          <p>
            Replace {`$b$`} with {`$-b$`} in the square-of-sum formula. Every appearance of {`$b$`}{' '}
            flips sign accordingly.
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
                {`$(-b)^2 = b^2$`} (a negative squared is positive), so the result simplifies.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`$(a - b)^2 = a^2 - 2ab + b^2$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">{`$$(a - b)^2 = a^2 - 2ab + b^2$$`}</div>

          <p>Same structure as the sum formula. The middle sign flips.</p>

          <h3>Worked example: square of a difference</h3>
          <p>Compute {`$(7 - 5)^2$`}.</p>
          <div className="lrn-eq">
            {`$$(7 - 5)^2 = 7^2 - 2 \\cdot 7 \\cdot 5 + 5^2 = 49 - 70 + 25 = 4$$`}
          </div>
          <p>
            Check: {`$7 - 5 = 2$`} and {`$2^2 = 4$`}. The {`$-70$`} cancels most of {`$49 + 25$`},
            which is exactly why the difference formula gives a small answer here.
          </p>
        </div>,

        // Section 2: Difference of Squares
        <div className="lrn-section" key="lrn-section-2" id="lrn-section-2">
          <h2>The Difference of Squares</h2>

          <p>
            What happens when you multiply {`$(a + b)$`} by {`$(a - b)$`}? One factor adds {`$b$`}{' '}
            and the other subtracts it, so the cross terms cancel exactly. Only the squares survive.
          </p>

          <h3>Derivation</h3>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`$(a + b)(a - b) = a \\cdot a - a \\cdot b + b \\cdot a - b \\cdot b$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$= a^2 - ab + ba - b^2$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`$-ab$`} and {`$+ba$`} are the same number with opposite signs, so they cancel.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`$= a^2 - b^2$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">{`$$a^2 - b^2 = (a + b)(a - b)$$`}</div>

          <p>
            The identity runs in two directions. Read left to right, it factors a difference of
            squares into two binomials. Read right to left, it multiplies them in one step.
          </p>

          <h3>Worked example: factor {`$x^2 - 16$`}</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Is {`$16$`} a perfect square? If so, what is {`$b$`}, and what will the two factors
              be?
            </p>
          </div>
          <p>
            To factor, first spot the two squares. {`$x^2$`} is already a square, and {`$16 = 4^2$`}
            . So this is a difference of squares with {`$a = x$`} and {`$b = 4$`}.
          </p>
          <div className="lrn-eq">{`$$x^2 - 16 = x^2 - 4^2 = (x + 4)(x - 4)$$`}</div>
          <p>
            The hard step is recognizing {`$16$`} as {`$4^2$`}. Once you see the two squares, the
            factors fall out of the identity.
          </p>

          <h3>Geometric proof</h3>
          <p>
            Start with an {`$a \\times a$`} square and remove a {`$b \\times b$`} square from one
            corner.
          </p>
          <p>The remaining L-shaped region has area {`$a^2 - b^2$`}.</p>
          <p>
            Cut the L horizontally just below the missing corner. The two strips, placed end to end,
            form a single rectangle of dimensions {`$(a + b)$`} by {`$(a - b)$`}. Same area, new
            shape.
          </p>
          <p>So {`$a^2 - b^2 = (a + b)(a - b)$`}.</p>

          <div className="lrn-graph">
            <p>
              L-shaped region of area {`$a^2 - b^2$`} rearranged into an {`$(a+b)\\times(a-b)$`}{' '}
              rectangle.
            </p>
            <DiffOfSquaresViz />
          </div>

          <h3>Mental computation: 101 × 99</h3>
          <p>
            Recognize the product as {`$(100 + 1)(100 - 1)$`}, which is a difference of squares with{' '}
            {`$a = 100$`}, {`$b = 1$`}.
          </p>
          <div className="lrn-eq">{`$$101 \\cdot 99 = 100^2 - 1^2 = 10000 - 1 = 9999$$`}</div>
          <p>
            Same trick handles {`$99^2$`} and {`$998^2$`} via the square-of-difference identity, or
            any product where the two factors sit symmetrically around a round number.
          </p>

          <h3>Application: integers that differ by 2</h3>
          <p>
            Take any two integers that differ by 2, say 5 and 7. Their product plus 1 is always a
            perfect square (a number you get by squaring a whole number). Here,{' '}
            {`$5 \\cdot 7 + 1 = 36 = 6^2$`}.
          </p>
          <p>
            More examples: {`$3 \\cdot 5 + 1 = 16 = 4^2$`} and {`$13 \\cdot 15 + 1 = 196 = 14^2$`}.
            The square root is always the number sitting halfway between.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof (three views)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Let the smaller integer be {`$n$`}. Then{' '}
                {`$n(n + 2) + 1 = n^2 + 2n + 1 = (n + 1)^2$`} by the square-of-sum identity.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Let the larger integer be {`$n$`}. Then{' '}
                {`$n(n - 2) + 1 = n^2 - 2n + 1 = (n - 1)^2$`} by the square-of-difference identity.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Let {`$n$`} be the number halfway between. Then the two integers are {`$n - 1$`} and{' '}
                {`$n + 1$`}. Their product is {`$(n + 1)(n - 1) = n^2 - 1$`} by the
                difference-of-squares identity. Adding 1 gives {`$n^2$`}.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Differences of consecutive perfect squares</h3>
          <p>
            Write the squares of {`$0, 1, 2, 3, \\ldots$`} in a row and the differences below them:
          </p>
          <div className="lrn-eq">{`$$0, \\; 1, \\; 4, \\; 9, \\; 16, \\; 25, \\; 36, \\; 49, \\; \\ldots$$`}</div>
          <div className="lrn-eq">{`$$1, \\; 3, \\; 5, \\; 7, \\; 9, \\; 11, \\; 13, \\; \\ldots$$`}</div>
          <p>
            The differences are the odd numbers, and each one exceeds the previous by 2. To see why,
            expand:
          </p>
          <div className="lrn-eq">{`$$(n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$$`}</div>
          <p>
            As {`$n$`} grows by 1, the value {`$2n + 1$`} grows by 2. A sequence where each term
            exceeds the previous by a fixed constant is called an{' '}
            <strong>arithmetic progression</strong>.
          </p>

          <h3>Squaring any number ending in 5</h3>
          <p>
            To square a number ending in 5, drop the 5 to get {`$n$`}, multiply {`$n$`} by{' '}
            {`$n + 1$`}, then append "25".
          </p>
          <p>
            Example: {`$35^2$`}. Drop the 5 to get 3. Compute {`$3 \\cdot 4 = 12$`}. Append 25:{' '}
            {`$35^2 = 1225$`}.
          </p>
          <p>
            Another: {`$85^2$`}. {`$8 \\cdot 9 = 72$`}. Answer: 7225.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Why it works</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Any number ending in 5 can be written as {`$10n + 5$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`$(10n + 5)^2 = 100n^2 + 100n + 25 = 100 \\cdot n(n + 1) + 25$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                The {`$100 \\cdot n(n + 1)$`} part is {`$n(n + 1)$`} shifted two places left, and 25
                fills the last two digits. That is the rule.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>The square of a three-term sum</h3>
          <div className="lrn-eq lrn-eq-hero">
            {`$$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$`}
          </div>
          <p>
            Imagine a 3×3 grid with rows and columns labeled {`$a, b, c$`}. Each cell holds the
            product of its row and column.
          </p>
          <p>
            The three diagonal cells give {`$a^2$`}, {`$b^2$`}, {`$c^2$`}. The six off-diagonal
            cells come in three matching pairs: {`$ab$`} and {`$ba$`}, {`$ac$`} and {`$ca$`},{' '}
            {`$bc$`} and {`$cb$`}. Each pair contributes {`$2ab$`}, {`$2ac$`}, {`$2bc$`}.
          </p>
          <p>
            Use this whenever you square a sum of three terms instead of multiplying it out by hand.
            Check it with numbers: {`$(1 + 2 + 3)^2$`}.
          </p>
          <div className="lrn-eq">
            {`$$(1 + 2 + 3)^2 = 1 + 4 + 9 + 2 \\cdot 1 \\cdot 2 + 2 \\cdot 1 \\cdot 3 + 2 \\cdot 2 \\cdot 3 = 36$$`}
          </div>
          <p>
            And directly, {`$1 + 2 + 3 = 6$`} and {`$6^2 = 36$`}. The formula matches.
          </p>

          <h3>Grouping trick: difference of squares with three terms</h3>
          <p>
            When you see a product like {`$(a + b + c)(a + b - c)$`}, group the matching parts
            together. Treat {`$(a + b)$`} as a single block, call it {`$X$`}. Then the product
            becomes {`$(X + c)(X - c)$`}, which is difference of squares.
          </p>
          <div className="lrn-eq">
            {`$$(a + b + c)(a + b - c) = (a + b)^2 - c^2 = a^2 + 2ab + b^2 - c^2$$`}
          </div>
          <p>The same trick handles two related products:</p>
          <div className="lrn-eq">
            {`$$(a + b + c)(a - b - c) = a^2 - (b + c)^2 = a^2 - b^2 - 2bc - c^2$$`}
          </div>
          <div className="lrn-eq">
            {`$$(a + b - c)(a - b + c) = a^2 - (b - c)^2 = a^2 - b^2 + 2bc - c^2$$`}
          </div>
          <p>
            Each time the rule is the same: find the part shared by both factors, treat the rest as
            the new {`$b$`}, and apply {`$(X + Y)(X - Y) = X^2 - Y^2$`}.
          </p>

          <h3>Combining identities</h3>
          <p>Compute {`$(a^2 - 2ab + b^2)(a^2 + 2ab + b^2)$`}.</p>
          <p>
            The factors are {`$(a - b)^2$`} and {`$(a + b)^2$`}, so the product is{' '}
            {`$\\big((a - b)(a + b)\\big)^2 = (a^2 - b^2)^2 = a^4 - 2a^2 b^2 + b^4$`}.
          </p>
          <div className="lrn-eq">
            {`$$(a^2 - 2ab + b^2)(a^2 + 2ab + b^2) = a^4 - 2a^2 b^2 + b^4$$`}
          </div>
        </div>,

        // Section 3: The Cube of a Sum
        <div className="lrn-section" key="lrn-section-3" id="lrn-section-3">
          <h2>The Cube of a Sum</h2>

          <p>
            To cube a binomial, multiply the square by another copy of {`$(a + b)$`}. You already
            know {`$(a + b)^2 = a^2 + 2ab + b^2$`}, so the work is just one more multiplication.
          </p>

          <h3>Derivation</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`$(a + b)^3 = (a + b)^2 \\cdot (a + b) = (a^2 + 2ab + b^2)(a + b)$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Multiply {`$(a^2 + 2ab + b^2)$`} by {`$a$`}: get {`$a^3 + 2a^2 b + ab^2$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Multiply {`$(a^2 + 2ab + b^2)$`} by {`$b$`}: get {`$a^2 b + 2ab^2 + b^3$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                Add and collect like terms:{' '}
                {`$a^3 + (2a^2 b + a^2 b) + (ab^2 + 2ab^2) + b^3 = a^3 + 3a^2 b + 3ab^2 + b^3$`}.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">{`$$(a + b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$$`}</div>

          <h3>The cube of a difference</h3>
          <p>
            Substitute {`$-b$`} for {`$b$`}. Odd powers of {`$-b$`} are negative, even powers are
            positive, so the signs alternate {`$+, -, +, -$`}.
          </p>
          <div className="lrn-eq">{`$$(a - b)^3 = a^3 + 3a^2(-b) + 3a(-b)^2 + (-b)^3$$`}</div>
          <div className="lrn-eq lrn-eq-hero">{`$$(a - b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$$`}</div>

          <h3>Worked example: mental computation of 11³</h3>
          <p>
            Write {`$11 = 10 + 1$`}. Apply the cube-of-sum identity with {`$a = 10$`}, {`$b = 1$`}.
          </p>
          <div className="lrn-eq">
            {`$$11^3 = 10^3 + 3 \\cdot 10^2 \\cdot 1 + 3 \\cdot 10 \\cdot 1^2 + 1^3$$`}
          </div>
          <div className="lrn-eq">{`$$= 1000 + 300 + 30 + 1 = 1331$$`}</div>
          <p>
            Same trick for {`$101^3$`}: pick {`$a = 100$`}, {`$b = 1$`}, and the four terms drop
            into place. {`$1000000 + 30000 + 300 + 1 = 1030301$`}.
          </p>
        </div>,

        // Section 4: Higher Powers and Pascal's Triangle
        <div className="lrn-section" key="lrn-section-4" id="lrn-section-4">
          <h2>Higher Powers and Pascal's Triangle</h2>

          <p>
            You now have the first three powers of {`$(a + b)$`}. Lay them out and look for a
            pattern.
          </p>
          <div className="lrn-eq">{`$$(a + b)^1 = a + b$$`}</div>
          <div className="lrn-eq">{`$$(a + b)^2 = a^2 + 2ab + b^2$$`}</div>
          <div className="lrn-eq">{`$$(a + b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$$`}</div>

          <h3>Guessing the fourth power before computing it</h3>
          <p>
            What about {`$(a + b)^4$`}? Two questions decide it: which powers of {`$a$`} and {`$b$`}{' '}
            appear, and what coefficients sit in front of them?
          </p>
          <p>
            The powers are easy to read off the pattern. {`$(a + b)^1$`} uses {`$a$`} and {`$b$`}.{' '}
            {`$(a + b)^2$`} uses {`$a^2, ab, b^2$`}. {`$(a + b)^3$`} uses{' '}
            {`$a^3, a^2 b, ab^2, b^3$`}. So {`$(a + b)^4$`} must use{' '}
            {`$a^4, a^3 b, a^2 b^2, ab^3, b^4$`}. Every term has total degree 4: the exponents in
            each term add up to 4. The power of {`$a$`} decreases from 4 to 0; the power of {`$b$`}{' '}
            climbs from 0 to 4.
          </p>
          <p>Now the coefficients. Stack what you know with a leading 1 written explicitly:</p>
          <div className="lrn-eq">{`$$(a + b)^1 \\to \\;\\; 1, \\; 1$$`}</div>
          <div className="lrn-eq">{`$$(a + b)^2 \\to \\;\\; 1, \\; 2, \\; 1$$`}</div>
          <div className="lrn-eq">{`$$(a + b)^3 \\to \\;\\; 1, \\; 3, \\; 3, \\; 1$$`}</div>
          <p>
            The first and last coefficients are always 1. The second column reads{' '}
            {`$1, 2, 3, \\ldots$`}, so the second coefficient of {`$(a + b)^4$`} should be 4. By
            symmetry ({`$a$`} and {`$b$`} have equal roles, so the row reads the same forward and
            backward), the second-to-last coefficient is also 4. Only the middle term {`$a^2 b^2$`}{' '}
            has an unknown coefficient.
          </p>
          <p>Compute it directly:</p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`$(a + b)^4 = (a + b)^3 \\cdot (a + b) = (a^3 + 3a^2 b + 3ab^2 + b^3)(a + b)$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Multiply by {`$a$`}: {`$a^4 + 3a^3 b + 3a^2 b^2 + ab^3$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Multiply by {`$b$`}: {`$a^3 b + 3a^2 b^2 + 3ab^3 + b^4$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                Add and collect: {`$a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$`}. The missing
                coefficient is 6.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            {`$$(a + b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$$`}
          </div>

          <h3>Pascal's triangle</h3>
          <p>Now add the new row to the stack of coefficients:</p>
          <div className="lrn-eq">{`$$1, \\; 1$$`}</div>
          <div className="lrn-eq">{`$$1, \\; 2, \\; 1$$`}</div>
          <div className="lrn-eq">{`$$1, \\; 3, \\; 3, \\; 1$$`}</div>
          <div className="lrn-eq">{`$$1, \\; 4, \\; 6, \\; 4, \\; 1$$`}</div>
          <p>
            Look at the new row. {`$1 + 3 = 4$`}. {`$3 + 3 = 6$`}. {`$3 + 1 = 4$`}. Every interior
            entry is the sum of the two entries directly above it. That is the rule.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Pascal's triangle rule</span>
            <div className="lrn-definition-desc">
              <p>
                Write a 1 at the top. In every later row, the first and last entries are 1, and
                every interior entry equals the sum of the two entries directly above it (one on the
                left, one on the right). Row {`$n$`} gives the coefficients of {`$(a + b)^n$`}.
              </p>
            </div>
          </div>

          <div className="lrn-graph">
            <p>Pascal's triangle, rows 0 through 6.</p>
            <PascalTriangleViz />
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why the rule works</span>
            <p>
              When you multiply {`$(a + b)^n$`} by another {`$(a + b)$`} to get {`$(a + b)^{n+1}$`},
              every term in row {`$n$`} contributes to two terms in row {`$n + 1$`}: once by
              multiplication with {`$a$`} (keeping the same column position), once with {`$b$`}{' '}
              (shifting one column right).
            </p>
            <p>
              So each entry in row {`$n + 1$`} collects contributions from two adjacent entries in
              row {`$n$`}. That is exactly the addition rule.
            </p>
          </div>

          <h3>Worked example: expand {`$(x + 2)^4$`}</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Which Pascal row gives the coefficients of {`$(x + 2)^4$`}? What powers of 2 will you
              need?
            </p>
          </div>
          <p>
            Read the coefficients off row 4: {`$1, 4, 6, 4, 1$`}. Use {`$a = x$`} and {`$b = 2$`}.
            The powers of {`$b = 2$`} you need are {`$2^0 = 1$`}, {`$2^1 = 2$`}, {`$2^2 = 4$`},{' '}
            {`$2^3 = 8$`}, {`$2^4 = 16$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Write the skeleton</span>
              <p className="lrn-step-content">
                {`$(x + 2)^4 = 1 x^4 + 4 x^3 (2) + 6 x^2 (2)^2 + 4 x (2)^3 + 1 (2)^4$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Multiply each coefficient by its power of 2</span>
              <p className="lrn-step-content">{`$= x^4 + 8 x^3 + 24 x^2 + 32 x + 16$`}.</p>
            </div>
          </div>
          <p>
            Pascal's triangle and powers of {`$b$`} together give every coefficient with no
            multiplication of binomials at all.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Historical note</span>
            <p>
              This triangle is named after Pascal, but mathematicians in India, Persia, and China
              found it first.
            </p>
          </div>
        </div>
      ]
    },

    // Practice cards
    practice: [
      {
        q: 'Expand $(a + b)^2$.',
        a: '$(a + b)^2 = a^2 + 2ab + b^2$. Multiply $(a + b)(a + b)$: you get $a^2 + ab + ba + b^2$. The two middle terms combine to $2ab$. The identity has three terms, not two.'
      },
      {
        q: 'Compute $(5 + 7)^2$ using the square-of-sum identity.',
        a: '$(5 + 7)^2 = 5^2 + 2 \\cdot 5 \\cdot 7 + 7^2 = 25 + 70 + 49 = 144$. Check: $5 + 7 = 12$ and $12^2 = 144$, which matches.'
      },
      {
        q: 'A student writes $(x + 3)^2 = x^2 + 9$. Find the error and fix it.',
        a: 'The student dropped the middle term. The correct expansion is $(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$. Squaring a sum always produces a cross term $2ab$.'
      },
      {
        q: 'Compute $101^2$ mentally.',
        a: 'Write $101 = 100 + 1$. Then $101^2 = 100^2 + 2 \\cdot 100 \\cdot 1 + 1^2 = 10000 + 200 + 1 = 10201$. The identity turns a hard squaring into three easy pieces.'
      },
      {
        q: 'Compute $(7 - 5)^2$ using the square-of-difference identity.',
        a: '$(7 - 5)^2 = 7^2 - 2 \\cdot 7 \\cdot 5 + 5^2 = 49 - 70 + 25 = 4$. The middle term is negative because the difference identity has $-2ab$.'
      },
      {
        q: 'What is the rule in words for $(a - b)^2$?',
        a: '"The square of the difference equals the sum of the squares minus twice the product of the terms." Formally: $(a - b)^2 = a^2 - 2ab + b^2$.'
      },
      {
        q: 'Why does $(a - b)^2$ have a positive $b^2$ term?',
        a: 'Because $(-b)^2 = (-b)(-b) = b^2$. Squaring always removes the sign. The negative shows up only in the middle term, where $b$ appears to an odd power.'
      },
      {
        q: 'Expand $(2x + 3)^2$.',
        a: '$(2x + 3)^2 = (2x)^2 + 2 \\cdot (2x) \\cdot 3 + 3^2 = 4x^2 + 12x + 9$. Apply the formula with $a = 2x$ and $b = 3$. The identity works for any expressions, not just single variables.'
      },
      {
        q: 'Factor $x^2 - 16$.',
        a: '$x^2 - 16 = x^2 - 4^2 = (x + 4)(x - 4)$. Recognize $16 = 4^2$; this is a difference of squares with $a = x$ and $b = 4$.'
      },
      {
        q: 'Factor $4x^2 - 9$.',
        a: '$4x^2 - 9 = (2x)^2 - 3^2 = (2x + 3)(2x - 3)$. Apply the difference-of-squares identity with $a = 2x$ and $b = 3$.'
      },
      {
        q: 'Compute $99 \\times 101$ mentally.',
        a: '$99 \\times 101 = (100 - 1)(100 + 1) = 100^2 - 1^2 = 10000 - 1 = 9999$. Recognize the product as $(a - b)(a + b) = a^2 - b^2$.'
      },
      {
        q: 'Why does $(a + b)(a - b)$ have no middle term?',
        a: 'The cross terms are $-ab$ from the first factor and $+ab$ from the second. They are equal in size and opposite in sign, so they cancel exactly.'
      },
      {
        q: 'Prove that the product of two integers that differ by 2 is always one less than a perfect square.',
        a: 'Let the integers be $n$ and $n + 2$. Then $n(n + 2) + 1 = n^2 + 2n + 1 = (n + 1)^2$, so $n(n + 2) = (n + 1)^2 - 1$. Example: $5 \\cdot 7 = 35 = 36 - 1 = 6^2 - 1$.'
      },
      {
        q: 'Why are the differences of consecutive perfect squares the odd numbers $1, 3, 5, 7, \\ldots$?',
        a: '$(n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$. For $n = 0, 1, 2, \\ldots$ this gives $1, 3, 5, 7, \\ldots$. Each differs from the previous by 2, an arithmetic progression.'
      },
      {
        q: 'Explain the trick for squaring numbers ending in 5, and prove it.',
        a: 'Drop the 5 to get $n$, compute $n(n + 1)$, append 25. Example: $35^2$: $n = 3$, $3 \\cdot 4 = 12$, answer 1225. Proof: $(10n + 5)^2 = 100n^2 + 100n + 25 = 100 \\cdot n(n + 1) + 25$. The $100 \\cdot n(n + 1)$ part fills the higher digits; the 25 fills the last two.'
      },
      {
        q: 'Compute $(a + b + c)^2$.',
        a: '$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$. Think of a 3×3 grid: diagonal cells give the squares; each off-diagonal pair contributes one cross term doubled.'
      },
      {
        q: 'Compute $(a + b + c)(a + b - c)$.',
        a: 'Group the shared part: let $X = a + b$. Then $(X + c)(X - c) = X^2 - c^2 = (a + b)^2 - c^2 = a^2 + 2ab + b^2 - c^2$. The grouping trick reduces a six-term product to one difference of squares.'
      },
      {
        q: 'Compute $(a^2 - 2ab + b^2)(a^2 + 2ab + b^2)$.',
        a: 'Recognize the factors as $(a - b)^2$ and $(a + b)^2$. The product is $\\big((a - b)(a + b)\\big)^2 = (a^2 - b^2)^2 = a^4 - 2a^2 b^2 + b^4$.'
      },
      {
        q: 'Expand $(a - b)^3$.',
        a: '$(a - b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$. Substitute $-b$ for $b$ in the cube-of-sum identity. Signs alternate because odd powers of $-b$ are negative.'
      },
      {
        q: 'Compute $11^3$ mentally.',
        a: '$11^3 = (10 + 1)^3 = 10^3 + 3 \\cdot 10^2 \\cdot 1 + 3 \\cdot 10 \\cdot 1^2 + 1^3 = 1000 + 300 + 30 + 1 = 1331$.'
      },
      {
        q: 'Expand $(x + 1)^3$.',
        a: '$(x + 1)^3 = x^3 + 3x^2 + 3x + 1$. Coefficients are 1, 3, 3, 1 from row 3 of Pascal’s triangle.'
      },
      {
        q: 'Expand $(2y - 1)^3$.',
        a: '$(2y - 1)^3 = (2y)^3 - 3(2y)^2 \\cdot 1 + 3(2y) \\cdot 1^2 - 1^3 = 8y^3 - 12y^2 + 6y - 1$. Apply the cube-of-difference identity with $a = 2y$, $b = 1$.'
      },
      {
        q: 'Use Pascal’s triangle to expand $(x + 2)^4$.',
        a: 'Row 4 of Pascal: 1, 4, 6, 4, 1. Powers of $b = 2$ are $1, 2, 4, 8, 16$. So $(x + 2)^4 = x^4 + 4x^3 \\cdot 2 + 6x^2 \\cdot 4 + 4x \\cdot 8 + 16 = x^4 + 8x^3 + 24x^2 + 32x + 16$.'
      },
      {
        q: 'Find the coefficient of $a^3 b^2$ in $(a + b)^5$.',
        a: 'Row 5 of Pascal: 1, 5, 10, 10, 5, 1. The term $a^3 b^2$ has $b$ to the power 2, so its coefficient is the third entry (counting from 0): 10.'
      },
      {
        q: 'What is row 7 of Pascal’s triangle, and why?',
        a: 'Row 7: 1, 7, 21, 35, 35, 21, 7, 1. Each entry is the sum of the two entries above it in row 6 (1, 6, 15, 20, 15, 6, 1). For example: $1 + 6 = 7$, $6 + 15 = 21$, $15 + 20 = 35$.'
      },
      {
        q: 'Why are the coefficients of $(a + b)^n$ symmetric?',
        a: 'Swapping $a$ and $b$ gives $(b + a)^n = (a + b)^n$, the same expression. So the coefficient of $a^k b^{n-k}$ must equal the coefficient of $a^{n-k} b^k$. The row reads the same forward and backward.'
      },
      {
        q: 'Show that the sum of the entries in row $n$ of Pascal’s triangle equals $2^n$.',
        a: 'Substitute $a = 1$, $b = 1$ into $(a + b)^n$. The left side is $2^n$. The right side is the sum of every coefficient in row $n$. Example: row 4 gives $1 + 4 + 6 + 4 + 1 = 16 = 2^4$.'
      }
    ],

    // Reference
    reference: {
      category: 'Quick Reference',
      title: 'Algebraic Identities',
      sections: [
        <>
          <h2>The Short Multiplication Formulas</h2>

          <h3>Square of a sum</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$(a + b)^2 = a^2 + 2ab + b^2$$`}</div>
          <p>
            <strong>When to use:</strong> any binomial raised to the second power.
          </p>
          <p>
            The middle term {`$2ab$`} is always present. {`$(a + b)^2 \\neq a^2 + b^2$`}.
          </p>

          <h3>Square of a difference</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$(a - b)^2 = a^2 - 2ab + b^2$$`}</div>
          <p>
            <strong>When to use:</strong> the same situation as above, with subtraction.
          </p>
          <p>
            Derived by substituting {`$-b$`} for {`$b$`} in the sum formula.
          </p>

          <h3>Difference of squares</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$a^2 - b^2 = (a + b)(a - b)$$`}</div>
          <p>
            <strong>When to use:</strong> factoring {`$a^2 - b^2$`}, or expanding{' '}
            {`$(a + b)(a - b)$`}. The cross terms cancel; the identity works in both directions.
          </p>

          <h3>Square of a three-term sum</h3>
          <div className="lrn-eq">{`$$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$`}</div>
          <p>
            <strong>When to use:</strong> squaring any trinomial. Each pair of distinct terms
            contributes one cross term doubled.
          </p>

          <h3>Grouping trick</h3>
          <div className="lrn-eq">{`$$(a + b + c)(a + b - c) = (a + b)^2 - c^2$$`}</div>
          <p>
            <strong>When to use:</strong> any product whose two factors share a block of terms and
            differ only on the rest. Treat the shared part as a single variable and apply difference
            of squares.
          </p>

          <h3>Cube of a sum</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$(a + b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$$`}</div>
          <p>
            <strong>When to use:</strong> cubing a binomial, or building the fourth power.
            Coefficients 1, 3, 3, 1 (row 3 of Pascal's triangle).
          </p>

          <h3>Cube of a difference</h3>
          <div className="lrn-eq lrn-eq-hero">{`$$(a - b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$$`}</div>
          <p>
            <strong>When to use:</strong> cubing a binomial with subtraction. Signs alternate{' '}
            {`$+, -, +, -$`}.
          </p>

          <h3>Fourth power</h3>
          <div className="lrn-eq">{`$$(a + b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$$`}</div>
          <p>
            <strong>When to use:</strong> expanding {`$(a + b)^4$`} directly. Coefficients 1, 4, 6,
            4, 1 (row 4).
          </p>

          <h3>Higher powers</h3>
          <p>
            For {`$(a + b)^5$`} and beyond, read the coefficients off the next Pascal row and pair
            them with falling powers of {`$a$`} and rising powers of {`$b$`}.
          </p>
        </>,
        <>
          <h2>Pascal's Triangle (Rows 0–6)</h2>
          <div className="lrn-graph">
            <p>Coefficients for {`$(a + b)^n$`}, rows 0 through 6.</p>
            <PascalTriangleViz />
          </div>
          <p>
            <strong>Rule:</strong> first and last entries of every row are 1; every interior entry
            equals the sum of the two entries directly above it.
          </p>
          <p>
            <strong>Sum of row {`$n$`}:</strong> {`$2^n$`}. Substitute {`$a = b = 1$`} into the
            binomial identity.
          </p>
          <p>
            <strong>Alternating sum:</strong> {`$0$`} for {`$n \\geq 1$`}. Substitute {`$a = 1$`},{' '}
            {`$b = -1$`}.
          </p>
        </>,
        <>
          <h2>Key Facts</h2>
          <ul className="lrn-list">
            <li>
              Every term in {`$(a + b)^n$`} has total degree {`$n$`}: powers of {`$a$`} and {`$b$`}{' '}
              sum to {`$n$`}.
            </li>
            <li>Pascal's rows are symmetric: first equals last, second equals second-to-last.</li>
            <li>
              Consecutive-square differences form the arithmetic progression{' '}
              {`$1, 3, 5, 7, 9, \\ldots$`}
            </li>
            <li>
              Squaring a number ending in 5: drop the 5 to get {`$n$`}, compute {`$n(n + 1)$`},
              append 25.
            </li>
            <li>Product of integers differing by 2: {`$n(n + 2) = (n + 1)^2 - 1$`}.</li>
          </ul>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
  }

  return config
}

export default function AlgebraicIdentities() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}

export function useAlgebraicIdentitiesConfig() {
  return useConfig()
}
