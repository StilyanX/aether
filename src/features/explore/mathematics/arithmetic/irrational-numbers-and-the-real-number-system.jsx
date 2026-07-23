import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './irrational-numbers-and-the-real-number-system-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'inr',
    documentTitle: 'Irrational Numbers and the Real-Number System - AETHER',
    learning: {
      groupTitle: 'Powers, Roots, and Real Numbers',
      category: 'Arithmetic',
      title: 'Irrational Numbers and the Real-Number System',
      subtitle:
        'Some numbers cannot be written as fractions. When you design a square room with 1-meter walls, its diagonal measures √2 meters. No fraction can describe that length exactly.',
      sections: [
        {
          id: 'does-sqrt-two-exist',
          title: 'Does √2 Exist?',
          content: (
            <>
              <h2>Does √2 Exist?</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  You know that {`$1^2 = 1$`} and {`$2^2 = 4$`}. Is there a number whose square
                  equals exactly 2? Try to name one before reading on.
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    No integer works: {`$1^2 = 1$`} is too small and {`$2^2 = 4$`} is too large. No
                    fraction works either. The number exists on the number line, but it cannot be
                    written as a fraction. It is called an irrational number.
                  </p>
                </details>
              </div>

              <p>
                Start from what you already know: fractions. A fraction is any number of the form{' '}
                {`$\\frac{a}{b}$`} where {`$a$`} and {`$b$`} are integers and {`$b \\neq 0$`}.
                Fractions cover a lot of ground. They include whole numbers (write {`$3$`} as{' '}
                {`$\\frac{3}{1}$`}), negative numbers, and decimals like {`$0.25 = \\frac{1}{4}$`}.
                But they do not cover everything on the number line.
              </p>

              <p>
                The ancient Greeks discovered this the hard way. A group called the Pythagoreans
                believed every measurable quantity was a ratio of whole numbers. Then one of their
                members, Hippasus, showed that {`$\\sqrt{2}$`} could not be such a ratio. Legend
                says the Pythagoreans were so disturbed that they threw him overboard at sea. The
                discovery mattered because it forced mathematicians to invent a new kind of number.
              </p>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
                <p>
                  The number line has no gaps visually, but fractions leave gaps algebraically. You
                  can always find a fraction between any two fractions. Yet the fractions still
                  cannot account for every point on the line.
                </p>
                <p>
                  The square root of 2 is a real geometric length: it is the diagonal of a unit
                  square. That diagonal physically exists, so the number exists. The proof of
                  irrationality shows only that no fraction equals it exactly.
                </p>
              </div>

              <div className="lrn-graph">
                <viz.UnitSquareDiagonalViz C={C} />
              </div>

              <div className="lrn-definition">
                <span className="lrn-definition-term">Rational number</span>
                <div className="lrn-definition-desc">
                  <p>
                    {`Recall: a rational number is any $\\frac{a}{b}$ with $a$ and $b$ integers and
                    $b \\neq 0$. Whole numbers, fractions, and terminating or repeating decimals are
                    all rational.`}
                  </p>
                </div>
              </div>

              <div className="lrn-definition">
                <span className="lrn-definition-term">Irrational number</span>
                <div className="lrn-definition-desc">
                  <p>
                    A real number that cannot be written as {`$\\frac{a}{b}$`} for any integers{' '}
                    {`$a$`} and {`$b$`} with {`$b \\neq 0$`}. Its decimal expansion never ends and
                    never repeats. Examples: {`$\\sqrt{2}$`}, {`$\\sqrt{5}$`}, {`$\\pi$`},{' '}
                    {`$\\sqrt[3]{5}$`}.
                  </p>
                </div>
              </div>

              <p>
                Use this definition to classify numbers. Any time you see a square root, cube root,
                or {`$\\pi$`} in an answer, ask whether the result simplifies to a fraction. If it
                does not, the number is irrational.
              </p>
            </>
          )
        },
        {
          id: 'decimal-character',
          title: 'Decimals: Terminating, Repeating, Endless',
          content: (
            <>
              <h2>Decimals: Terminating, Repeating, Endless</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  {`$\\frac{1}{4} = 0.25$ and $\\frac{1}{3} = 0.333\\ldots$ are both rational.
                  What do you predict is different about $\\sqrt{2} = 1.41421356\\ldots$?`}
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    The decimal expansion of {`$\\sqrt{2}$`} never ends and never repeats. The
                    digits 41421356... go on forever without falling into a cycle. This
                    non-terminating, non-repeating pattern is exactly what makes a number
                    irrational.
                  </p>
                </details>
              </div>

              <p>
                Every rational number has a decimal expansion that either stops or repeats.{' '}
                {`$\\frac{1}{4} = 0.25$`} stops after two decimal places.{' '}
                {`$\\frac{1}{3} = 0.\\overline{3}$`} repeats forever with a single digit.{' '}
                {`$\\frac{1}{7} = 0.\\overline{142857}$`} repeats with a block of six digits.
              </p>

              <p>
                This is the bridge between the fraction definition and the decimal world.{' '}
                <strong>
                  A number is rational if and only if its decimal expansion terminates or repeats.
                </strong>{' '}
                So any non-terminating, non-repeating decimal is automatically irrational.
              </p>

              <div className="lrn-graph">
                <viz.DecimalExpansionStripViz C={C} />
              </div>

              <div className="lrn-compare">
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Rational decimals</span>
                  <p>
                    Terminate: {`$\\frac{1}{4} = 0.25$`}
                    <br />
                    Repeat: {`$\\frac{1}{3} = 0.\\overline{3}$`}
                    <br />
                    Repeat: {`$\\frac{1}{7} = 0.\\overline{142857}$`}
                  </p>
                </div>
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Irrational decimals</span>
                  <p>
                    {`$\\sqrt{2} = 1.41421356\\ldots$`}
                    <br />
                    {`$\\pi = 3.14159265\\ldots$`}
                    <br />
                    No pattern, no end.
                  </p>
                </div>
              </div>

              <div className="lrn-callout lrn-warning">
                <p>
                  <strong>Common trap.</strong> The number 22/7 is rational. It equals{' '}
                  {`$3.\\overline{142857}$`} and repeats. It is only an approximation of {`$\\pi$`}.
                  The number {`$\\pi$`} itself is irrational. Never write {`$\\pi = \\frac{22}{7}$`}
                  .
                </p>
              </div>

              <div className="lrn-callout lrn-tip">
                <p>
                  <strong>Exact vs approximate.</strong> Leaving an answer as {`$\\sqrt{5}$`} or{' '}
                  {`$\\frac{3}{7}$`} is exact. Writing {`$2.236$`} for {`$\\sqrt{5}$`} is only
                  correct to four decimal places. On exams, "exact" means keep the radical or
                  fraction.
                </p>
              </div>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
                <p>
                  Long division of {`$a$`} by {`$b$`} can only produce finitely many remainders, so
                  the digits must eventually terminate or fall into a repeating cycle. That is the
                  theorem: a number is rational if and only if its decimal terminates or repeats.
                  Irrational numbers have no fraction form, so their decimals never cycle.
                </p>
              </div>
            </>
          )
        },
        {
          id: 'perfect-squares-and-parity',
          title: 'Perfect Squares and the Parity Test',
          content: (
            <>
              <h2>Perfect Squares and the Parity Test</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  {`Is $\\sqrt{1936}$ rational or irrational? Is $\\sqrt{12}$ rational or irrational?
                  Guess before you see the prime factorizations.`}
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    {`$\\sqrt{1936}$`} is rational: {`$1936 = 44^2$`}, so {`$\\sqrt{1936} = 44$`}.{' '}
                    {`$\\sqrt{12}$`} is irrational: 12 is not a perfect square. The parity test
                    below (parity means even-or-odd) shows exactly why.
                  </p>
                </details>
              </div>

              <p>
                A <strong>perfect square</strong> is a whole number that equals another whole number
                squared. Examples: {`$25 = 5^2$`}, {`$1936 = 44^2$`}, {`$11025 = 105^2$`}. The
                square root of a perfect square is always a whole number, so it is rational.
              </p>

              <p>
                The key question is: how do you tell whether a number is a perfect square? The
                answer comes from its prime factorization (writing it as a product of prime
                numbers). <strong>When to use this test:</strong> any time you need to decide
                whether {`$\\sqrt{n}$`} is rational or irrational, factor {`$n$`} and check the
                exponents.
              </p>

              <div className="lrn-definition">
                <span className="lrn-definition-term">The Perfect Square Test</span>
                <div className="lrn-definition-desc">
                  <p>
                    A whole number {`$n$`} is a perfect square if and only if every prime in its
                    prime factorization appears an even number of times.
                  </p>
                  <p>
                    {`Example: $1936 = 2^4 \\cdot 11^2$. Exponents 4 and 2 are both even. Perfect
                    square. $\\sqrt{1936} = 2^2 \\cdot 11 = 44$.`}
                  </p>
                  <p>
                    {`Example: $12 = 2^2 \\cdot 3^1$. Exponent of 3 is 1 (odd). Not a perfect
                    square. $\\sqrt{12}$ is irrational.`}
                  </p>
                </div>
              </div>

              <div className="lrn-graph">
                <viz.PerfectSquareParityViz C={C} />
              </div>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
                <p>
                  If {`$n = m^2$`}, then every prime in the factorization of {`$m$`} appears doubled
                  in the factorization of {`$m^2$`}. Doubling an exponent always gives an even
                  number. So perfect squares have all even exponents.
                </p>
                <p>
                  Going the other way: if every exponent is even, you can halve each one to get the
                  exponents of {`$\\sqrt{n}$`}. Halving even numbers gives whole numbers, so{' '}
                  {`$\\sqrt{n}$`} is a whole number. Every number breaks into primes in exactly one
                  way, so the factorization is unique, and this argument is airtight in both
                  directions.
                </p>
              </div>

              <h3>Worked example: is 1936 a perfect square?</h3>
              <p>
                Factor 1936:{' '}
                {`$1936 = 2 \\times 968 = 4 \\times 484 = 4 \\times 4 \\times 121 = 2^4 \\times 11^2$`}
                . Every exponent (4 and 2) is even. Taking the root halves each exponent:{' '}
                {`$\\sqrt{1936} = 2^{4/2} \\times 11^{2/2} = 2^2 \\times 11 = 44$`}. Even exponents
                halve to whole numbers, so the root lands on a whole number.
              </p>

              <h3>Worked example: is 12 a perfect square?</h3>
              <p>
                Factor 12: {`$12 = 2^2 \\times 3$`}. The exponent of 3 is 1, which is odd. So 12 is
                not a perfect square and {`$\\sqrt{12}$`} is irrational.
              </p>
            </>
          )
        },
        {
          id: 'proof-sqrt-two-irrational',
          title: 'Why √2 Cannot Be a Fraction',
          content: (
            <>
              <h2>Why √2 Cannot Be a Fraction</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  Suppose someone claims {`$\\sqrt{2} = \\frac{a}{b}$`} and both {`$a$`} and {`$b$`}{' '}
                  are odd. Can you see how that leads to a problem after squaring both sides?
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    Squaring gives {`$2b^2 = a^2$`}. The left side is even. So {`$a^2$`} is even,
                    which forces {`$a$`} to be even. But we said {`$a$`} is odd. Contradiction. The
                    proof below develops this idea fully.
                  </p>
                </details>
              </div>

              <p>
                This proof uses only two facts about even and odd numbers. An even number times any
                integer is even. If a number's square is even, the number itself must be even. That
                second fact holds because an odd number is {`$2k+1$`}, and{' '}
                {`$(2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$`}, which is odd. So an even square
                can only come from an even number. No algebra beyond fractions is required.
              </p>

              <div className="lrn-proof">
                <span className="lrn-proof-header">Proof: Why √2 Cannot Be a Fraction</span>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">1.</span>
                  <div className="lrn-proof-step-content">
                    {`Assume $\\sqrt{2} = \\frac{a}{b}$ where $a$ and $b$ are whole numbers. Keep
                    dividing both by 2 until at least one of $a$ or $b$ is odd. You can always
                    do this: every even number can be halved, and you will stop when you reach
                    an odd number in at least one of $a$ or $b$.`}
                  </div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">2.</span>
                  <div className="lrn-proof-step-content">
                    {`Multiply both sides by $b$: $\\sqrt{2} \\cdot b = a$. Square both sides:
                    $2b^2 = a^2$.`}
                  </div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">3.</span>
                  <div className="lrn-proof-step-content">
                    {`$a^2 = 2b^2$ is even. An odd number squared is always odd, so $a$ itself must
                    be even. Write $a = 2c$ for some whole number $c$.`}
                  </div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">4.</span>
                  <div className="lrn-proof-step-content">
                    {`Substitute $a = 2c$: $2b^2 = (2c)^2 = 4c^2$. Divide both sides by 2:
                    $b^2 = 2c^2$. So $b^2$ is even, which forces $b$ to be even.`}
                  </div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">5.</span>
                  <div className="lrn-proof-step-content">
                    Both {`$a$`} and {`$b$`} are even. This contradicts Step 1, where we cancelled
                    all shared factors of 2. The assumption that {`$\\sqrt{2}$`} is a fraction must
                    be false.
                  </div>
                </div>
                <div className="lrn-qed">Q.E.D.</div>
              </div>

              <div className="lrn-self-explain">
                <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
                <p>
                  Why does Step 1 say "at least one of {`$a$`} or {`$b$`} is odd"? What is the point
                  of making that reduction?
                </p>
                <details className="lrn-self-explain-reveal">
                  <summary>Expert explanation</summary>
                  <p>
                    The reduction creates the target for the contradiction. We need a property the
                    fraction in Step 1 satisfies. Steps 3 and 4 must then destroy it. The property
                    is "not both even." Steps 3 and 4 prove both are even. Without Step 1, we would
                    have no contradiction. We would just know that {`$a$`} and {`$b$`} are both
                    even, which is expected before cancellation. The trick is cancelling first, then
                    showing the supposedly-reduced fraction is still even in both parts.
                  </p>
                </details>
              </div>

              <div className="lrn-faded">
                <div className="lrn-faded-phase">
                  <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                  <p>Show {`$\\sqrt{3}$`} is irrational using the same parity structure.</p>
                  <ol className="lrn-list">
                    <li>
                      {`Assume $\\sqrt{3} = \\frac{a}{b}$ reduced so that not both are multiples of 3.`}
                    </li>
                    <li>{`Square: $3b^2 = a^2$. So $a^2$ is divisible by 3.`}</li>
                    <li>
                      {`If 3 divides $a^2$, then 3 divides $a$ (since 3 is prime). Write $a = 3c$.`}
                    </li>
                    <li>
                      {`Substitute: $3b^2 = 9c^2$, so $b^2 = 3c^2$. Then 3 divides $b^2$, so 3 divides $b$.`}
                    </li>
                    <li>{`Both $a$ and $b$ are multiples of 3. Contradiction.`}</li>
                  </ol>
                </div>
                <div className="lrn-faded-phase lrn-faded-partial">
                  <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                  <p>Show {`$\\sqrt{5}$`} is irrational. Fill in the missing steps.</p>
                  <ol className="lrn-list">
                    <li>
                      {`Assume $\\sqrt{5} = \\frac{a}{b}$ reduced so that not both are multiples of 5.`}
                    </li>
                    <li>{`Square both sides: $\\square = a^2$. So $a^2$ is divisible by 5.`}</li>
                    <li>
                      {`Since 5 is prime and divides $a^2$, it divides $a$. Write $a = \\square$.`}
                    </li>
                    <li>{`Substitute and simplify to show 5 divides $\\square$.`}</li>
                    <li>Reach the contradiction.</li>
                  </ol>
                </div>
                <div className="lrn-faded-phase">
                  <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                  <p>
                    Use the same structure to show {`$\\sqrt{7}$`} is irrational. Write all five
                    steps without prompts.
                  </p>
                </div>
              </div>
            </>
          )
        },
        {
          id: 'sqrt-any-prime-irrational',
          title: 'The Square Root of Any Prime Is Irrational',
          content: (
            <>
              <h2>The Square Root of Any Prime Is Irrational</h2>

              <div className="lrn-callout lrn-tip">
                <span className="lrn-callout-label">TIP</span>
                <p>
                  You just proved that {`$\\sqrt{2}$`} cannot be a fraction. That proof used one
                  fact about even numbers. This section shows the same argument works for every
                  prime. The pattern is identical; only the word "even" changes.
                </p>
              </div>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  {`The proof for $\\sqrt{2}$ used "even/odd" reasoning. For $\\sqrt{3}$, can the same
                  idea work, or do you need a different approach?`}
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    The same idea works. It leans on one fact: if a prime {`$p$`} divides {`$a^2$`},
                    then {`$p$`} divides {`$a$`}. Every number factors into primes in only one way,
                    so a prime in {`$a^2$`} must already sit inside {`$a$`}.
                  </p>
                </details>
              </div>

              <p>
                The parity proof for {`$\\sqrt{2}$`} works because 2 is prime. The same argument
                generalizes to every prime {`$p$`}. The word "even" means "divisible by 2." Replace
                2 with any prime {`$p$`} and replace "even" with "divisible by {`$p$`}" throughout.
              </p>

              <div className="lrn-definition">
                <span className="lrn-definition-term">The Square Roots of Primes Rule</span>
                <div className="lrn-definition-desc">
                  <p>
                    If {`$p$`} is a prime number, then {`$\\sqrt{p}$`} is irrational. No prime has a
                    rational square root.
                  </p>
                </div>
              </div>

              <div className="lrn-proof">
                <span className="lrn-proof-header">
                  Proof: {`$\\sqrt{p}$`} Is Irrational for Every Prime {`$p$`}
                </span>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">1.</span>
                  <div className="lrn-proof-step-content">
                    {`Assume $\\sqrt{p} = \\frac{a}{b}$, reduced so that $p$ does not divide both $a$ and $b$.`}
                  </div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">2.</span>
                  <div className="lrn-proof-step-content">
                    {`Square: $pb^2 = a^2$. So $p$ divides $a^2$. Since $p$ is prime, $p$ divides
                    $a$. Write $a = pc$.`}
                  </div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">3.</span>
                  <div className="lrn-proof-step-content">
                    {`Substitute: $pb^2 = p^2c^2$. Divide by $p$: $b^2 = pc^2$. So $p$ divides
                    $b^2$, which means $p$ divides $b$.`}
                  </div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">4.</span>
                  <div className="lrn-proof-step-content">
                    {`Both $a$ and $b$ are divisible by $p$. This contradicts Step 1. So
                    $\\sqrt{p}$ cannot be a fraction.`}
                  </div>
                </div>
                <div className="lrn-qed">Q.E.D.</div>
              </div>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
                <p>
                  The critical fact is: if a prime {`$p$`} divides {`$a^2$`}, then {`$p$`} divides{' '}
                  {`$a$`}. This follows because primes cannot be broken into smaller factors. If{' '}
                  {`$p$`} divided {`$a^2 = a \\times a$`} but did not divide {`$a$`}, you could
                  split {`$p$`} into two parts, one for each factor of {`$a$`}. But primes have no
                  such splitting. This property fails for composite numbers: {`$4$`} divides{' '}
                  {`$6^2 = 36$`} but {`$4$`} does not divide {`$6$`}. That is why the proof requires{' '}
                  {`$p$`} to be prime.
                </p>
              </div>

              <h3>The general rule about {`$\\sqrt{n}$`}</h3>

              <p>
                The full result is: {`$\\sqrt{n}$`} is irrational unless {`$n$`} is a perfect
                square. If {`$n$`} is a perfect square, {`$\\sqrt{n}$`} is a whole number. If{' '}
                {`$n$`} is not a perfect square, {`$\\sqrt{n}$`} is irrational. Use the Perfect
                Square Test from the previous section to decide.
              </p>

              <div className="lrn-compare">
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Perfect square radicand</span>
                  <p>
                    {`$\\sqrt{36} = 6$ (rational)`}
                    <br />
                    {`$\\sqrt{1936} = 44$ (rational)`}
                    <br />
                    Every prime exponent is even.
                  </p>
                </div>
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Non-perfect-square radicand</span>
                  <p>
                    {`$\\sqrt{37}$ (irrational)`}
                    <br />
                    {`$\\sqrt{12} = 2\\sqrt{3}$ (irrational)`}
                    <br />
                    At least one prime exponent is odd.
                  </p>
                </div>
              </div>
            </>
          )
        },
        {
          id: 'bracketing-sqrt-two',
          title: 'Pinning Down √2 by Bracketing',
          content: (
            <>
              <h2>Pinning Down √2 by Bracketing</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  {`You know $1.4^2 = 1.96$ and $1.5^2 = 2.25$. So $1.4 < \\sqrt{2} < 1.5$. Can
                  you narrow it further using $1.41^2$ and $1.42^2$?`}
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    Yes. Square each new endpoint and compare to 2. Each extra decimal place
                    tightens the bracket by a factor of 10. The steps below carry this out.
                  </p>
                </details>
              </div>

              <p>
                You now know that {`$\\sqrt{2}$`} cannot be a fraction. But irrational does not mean
                unknowable. Engineers and scientists need decimal values of square roots. This
                method gives {`$\\sqrt{2}$`} to as many decimal places as a calculation requires.
              </p>

              <p>
                Even though {`$\\sqrt{2}$`} is irrational, you can locate it as precisely as you
                like using the ordering rule for square roots: if {`$0 \\leq a \\leq b$`}, then{' '}
                {`$\\sqrt{a} \\leq \\sqrt{b}$`}. <strong>Use this method</strong> any time you need
                the decimal value of a square root to a given number of decimal places.
              </p>

              <div className="lrn-steps">
                <ol className="lrn-list">
                  <li>{`Integers: $1^2 = 1 < 2 < 4 = 2^2$, so $1 < \\sqrt{2} < 2$.`}</li>
                  <li>
                    {`Tenths: $1.4^2 = 1.96 < 2 < 2.25 = 1.5^2$, so $1.4 < \\sqrt{2} < 1.5$.`}
                  </li>
                  <li>
                    {`Hundredths: $1.41^2 = 1.9881 < 2 < 2.0164 = 1.42^2$, so $1.41 < \\sqrt{2} < 1.42$.`}
                  </li>
                  <li>
                    {`Thousandths: $1.414^2 = 1.999396 < 2 < 2.002225 = 1.415^2$, so $1.414 < \\sqrt{2} < 1.415$.`}
                  </li>
                </ol>
              </div>

              <div className="lrn-graph">
                <viz.SqrtTwoBracketingViz C={C} />
              </div>

              <p>
                The decimal never stops and never repeats: {`$\\sqrt{2} = 1.41421356\\ldots$`} You
                can squeeze the brackets tighter by computing more decimal places, but you will
                never reach an exact terminating decimal. This is the practical face of
                irrationality.
              </p>

              <div className="lrn-compare">
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Bracketing (approximate)</span>
                  <p>
                    Square the endpoints and compare to 2. Gives a decimal approximation to any
                    number of places. Cannot give an exact value.
                  </p>
                </div>
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Simplification (exact)</span>
                  <p>
                    Use {`$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$`}. Extract
                    perfect-square factors. Gives exact simplified form like {`$2\\sqrt{2}$`}.
                  </p>
                </div>
              </div>

              <div className="lrn-graph">
                <viz.SqrtOnNumberLineSliderViz C={C} />
              </div>

              <div className="lrn-self-explain">
                <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
                <p>
                  In the bracketing table, each step moves from integers to tenths to hundredths.
                  Why does each step narrow the bracket by a factor of 10?
                </p>
                <details className="lrn-self-explain-reveal">
                  <summary>Expert explanation</summary>
                  <p>
                    Each step tests the next decimal place by squaring endpoints that differ by one
                    unit in that place. At the tenths step, you test 1.4 and 1.5 (a gap of 0.1). You
                    find the bracket narrows to 0.1 wide. At the hundredths step, you test numbers
                    0.01 apart; the bracket narrows to 0.01 wide. Each step divides the gap by 10
                    because you move one decimal place to the right. The ordering rule guarantees
                    that squaring preserves the inequality, so the bracket always contains{' '}
                    {`$\\sqrt{2}$`}.
                  </p>
                </details>
              </div>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
                <p>
                  The bracketing sequence is a practical version of a deeper idea. Each bracket is
                  an interval that contains {`$\\sqrt{2}$`}. The intervals shrink toward zero width.
                  Any number pinned inside every interval must equal {`$\\sqrt{2}$`}.
                </p>
                <p>
                  This is why the method works: it does not guess; it eliminates all other
                  possibilities one decimal place at a time. You cannot reach an exact terminating
                  decimal because that would make {`$\\sqrt{2}$`} rational, which the proof in the
                  previous sections ruled out.
                </p>
              </div>
            </>
          )
        },
        {
          id: 'square-root-arithmetic',
          title: 'Arithmetic with Square Roots',
          content: (
            <>
              <h2>Arithmetic with Square Roots</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  {`Is $\\sqrt{8}$ already in simplest form? Predict a simpler expression for it
                  before reading on.`}
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    {`No. $8 = 4 \\times 2$ and $\\sqrt{4} = 2$, so $\\sqrt{8} = 2\\sqrt{2}$. The
                    product rule lets you pull out the perfect-square factor.`}
                  </p>
                </details>
              </div>

              <p>
                Two rules govern all arithmetic with square roots.{' '}
                <strong>When to use them:</strong> whenever you see a product or quotient under a
                radical sign, or when you need to combine radical expressions.
              </p>

              <div className="lrn-definition">
                <span className="lrn-definition-term">Product rule</span>
                <div className="lrn-definition-desc">
                  <p>{`$$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab} \\quad (a, b \\geq 0)$$`}</p>
                  <p>
                    Use to split a radical into factors, or to merge two radicals into one. Pull
                    perfect-square factors out to simplify.
                  </p>
                </div>
              </div>

              <div className="lrn-definition">
                <span className="lrn-definition-term">Quotient rule</span>
                <div className="lrn-definition-desc">
                  <p>{`$$\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}} \\quad (a \\geq 0,\\, b > 0)$$`}</p>
                  <p>
                    Use to simplify fractions under a radical, or to separate a radical fraction.
                  </p>
                </div>
              </div>

              <div className="lrn-definition">
                <span className="lrn-definition-term">Square root identity</span>
                <div className="lrn-definition-desc">
                  <p>{`$$(\\sqrt{a})^2 = a \\quad (a \\geq 0)$$`}</p>
                  <p>{`$$\\sqrt{a^2} = a \\quad (a \\geq 0)$$`}</p>
                  <p>
                    Squaring and taking the square root undo each other for non-negative inputs. The
                    square root always returns the non-negative value.
                  </p>
                </div>
              </div>

              <h3>Worked example: simplify {`$\\sqrt{8}$`}</h3>
              <p>
                Find the largest perfect-square factor of 8: {`$8 = 4 \\times 2$`}. Apply the
                product rule:
              </p>
              <div className="lrn-eq">
                {`$$\\sqrt{8} = \\sqrt{4 \\times 2} = \\sqrt{4} \\cdot \\sqrt{2} = 2\\sqrt{2}$$`}
              </div>

              <h3>Worked example: simplify {`$\\sqrt{50}$`}</h3>
              <p>{`$50 = 25 \\times 2$`}. The largest perfect-square factor is 25:</p>
              <div className="lrn-eq">
                {`$$\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$$`}
              </div>

              <h3>Worked example: simplify {`$\\sqrt{12} + \\sqrt{75}$`}</h3>
              <p>Simplify each radical first, then add like terms:</p>
              <div className="lrn-steps">
                <ol className="lrn-list">
                  <li>{`$\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$`}</li>
                  <li>{`$\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$`}</li>
                  <li>{`$2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}$`}</li>
                </ol>
              </div>

              <div className="lrn-self-explain">
                <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
                <p>
                  In the {`$\\sqrt{12} + \\sqrt{75}$`} example, why can you add {`$2\\sqrt{3}$`} and{' '}
                  {`$5\\sqrt{3}$`} but NOT add {`$\\sqrt{12}$`} and {`$\\sqrt{75}$`} directly?
                </p>
                <details className="lrn-self-explain-reveal">
                  <summary>Expert explanation</summary>
                  <p>
                    You can only add terms that share the same radical part. {`$2\\sqrt{3}$`} and{' '}
                    {`$5\\sqrt{3}$`} both have {`$\\sqrt{3}$`}, so they are "like terms" just as{' '}
                    {`$2x$`} and {`$5x$`} are like terms. Before simplification, {`$\\sqrt{12}$`}{' '}
                    and {`$\\sqrt{75}$`} look different. After simplification they both reveal{' '}
                    {`$\\sqrt{3}$`}. The radical part is like a unit: you can only combine terms
                    that share the same unit.
                  </p>
                </details>
              </div>

              <div className="lrn-callout lrn-danger">
                <p>
                  <strong>Three rules that are NOT valid:</strong>
                </p>
                <ul className="lrn-list">
                  <li>
                    {`$\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$`}. Try {`$a = 9, b = 16$`}:{' '}
                    {`$\\sqrt{25} = 5$`} but {`$\\sqrt{9} + \\sqrt{16} = 7$`}.
                  </li>
                  <li>
                    {`$\\sqrt{a^2 + b^2} \\neq a + b$`}. Try {`$a = 3, b = 4$`}:{' '}
                    {`$\\sqrt{9 + 16} = 5$`} but {`$3 + 4 = 7$`}.
                  </li>
                  <li>
                    {`$\\sqrt{16} \\neq -4$`}. The square root symbol always means the positive
                    (non-negative) root. {`$\\sqrt{16} = 4$`} only.
                  </li>
                </ul>
              </div>
            </>
          )
        },
        {
          id: 'classifying-expressions',
          title: 'Classifying Radical Expressions',
          content: (
            <>
              <h2>Classifying Radical Expressions</h2>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  {`Is $(\\sqrt{17})^2$ rational or irrational? Is $\\frac{\\sqrt{12}}{\\sqrt{3}}$ rational or irrational?`}
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    {`$(\\sqrt{17})^2 = 17$ (rational: squaring undoes the root). $\\frac{\\sqrt{12}}{\\sqrt{3}} = \\sqrt{\\frac{12}{3}} = \\sqrt{4} = 2$ (rational: simplify first).`}
                  </p>
                </details>
              </div>

              <p>
                Many expressions look irrational but simplify to fractions. Always simplify before
                classifying. The worked examples below show the key discriminations.
              </p>

              <div className="lrn-definition">
                <span className="lrn-definition-term">Classification examples</span>
                <div className="lrn-definition-desc">
                  <ul className="lrn-list">
                    <li>
                      {`$\\frac{\\pi}{2}$: irrational. Dividing an irrational by a rational keeps it irrational.`}
                    </li>
                    <li>
                      {`$(\\sqrt{17})^2 = 17$: rational. Squaring removes the radical entirely.`}
                    </li>
                    <li>
                      {`$\\frac{\\sqrt{12}}{\\sqrt{3}} = \\sqrt{4} = 2$: rational. The quotient rule merges the radicals; the result is a perfect square.`}
                    </li>
                    <li>
                      {`$\\frac{22}{7}$: rational. It is a fraction of two integers, not $\\pi$.`}
                    </li>
                    <li>{`$\\sqrt{2} + 1$: irrational. Rational + irrational = irrational.`}</li>
                    <li>
                      {`$\\sqrt{2.25} = \\sqrt{\\frac{225}{100}} = \\frac{15}{10} = 1.5$: rational. The radicand is a perfect square fraction.`}
                    </li>
                    <li>{`$\\pi^2$: irrational. The square of $\\pi$ is still irrational.`}</li>
                  </ul>
                </div>
              </div>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
                <p>
                  The rule for sums: if {`$r$`} is rational and {`$x$`} is irrational, then{' '}
                  {`$r + x$`} is irrational. Suppose {`$r + x = s$`} where {`$s$`} is rational. Then{' '}
                  {`$x = s - r$`}. The difference of two rationals is always rational. So {`$x$`}{' '}
                  would be rational. That contradicts our assumption. The sum must be irrational.
                </p>
                <p>
                  Products behave differently. A non-zero rational times an irrational is always
                  irrational, but irrational times irrational can land anywhere. The closure section
                  ahead works through the multiplication case in full.
                </p>
              </div>

              <div className="lrn-compare">
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Always rational results</span>
                  <p>
                    Rational {`$\\pm$`} rational
                    <br />
                    Rational {`$\\times$`} rational
                    <br />
                    {`$(\\sqrt{n})^2$`} for any {`$n \\geq 0$`}
                    <br />
                    {`$\\sqrt{n}$`} where {`$n$`} is a perfect square
                  </p>
                </div>
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Always irrational results</span>
                  <p>
                    Rational {`$\\pm$`} irrational (non-zero rational)
                    <br />
                    Non-zero rational {`$\\times$`} irrational
                    <br />
                    {`$\\sqrt{p}$`} for any prime {`$p$`}
                  </p>
                </div>
              </div>
            </>
          )
        },
        {
          id: 'real-number-system',
          title: 'The Real-Number System (Synthesis)',
          content: (
            <>
              <h2>The Real-Number System (Synthesis)</h2>

              <div className="lrn-callout">
                <p>
                  <strong>Synthesis section.</strong> This section pulls the whole picture together:
                  where irrationals sit, why the real line has no gaps, and how the number systems
                  nest.
                </p>
              </div>

              <div className="lrn-predict">
                <span className="lrn-predict-label">PREDICT</span>
                <p>
                  You know natural numbers, integers, and fractions. Where do irrationals fit into
                  that picture? Are there numbers that are neither rational nor irrational?
                </p>
                <details className="lrn-predict-reveal">
                  <summary>Check your thinking</summary>
                  <p>
                    Every real number is either rational or irrational. There is no third category.
                    The rationals and irrationals together fill the entire number line with no gaps
                    and no overlaps.
                  </p>
                </details>
              </div>

              <p>
                The number systems nest inside each other like boxes. Each outer box contains
                everything inside the smaller boxes, plus something new.
              </p>

              <div className="lrn-graph">
                <viz.NumberSystemHierarchyViz C={C} />
              </div>

              <div className="lrn-definition">
                <span className="lrn-definition-term">The hierarchy</span>
                <div className="lrn-definition-desc">
                  <ul className="lrn-list">
                    <li>
                      Recall the nesting: counting numbers (ℕ) sit inside the integers (ℤ), which
                      sit inside the rationals (ℚ), every {`$\\frac{a}{b}$`} with{' '}
                      {`$a, b \\in \\mathbb{Z}$`}, {`$b \\neq 0$`}.
                    </li>
                    <li>
                      <strong>Reals (ℝ):</strong> all of ℚ plus all irrationals. Every point on the
                      number line. Nothing is left out.
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                The irrationals are everything in ℝ that is not in ℚ. They fill the gaps. Together,
                rationals and irrationals partition the real line: every real number belongs to
                exactly one of the two groups.
              </p>

              <h3>Density: between any two numbers lie both types</h3>

              <p>
                Between any two real numbers, no matter how close, there is at least one rational
                and at least one irrational number. This is called the <strong>density</strong>{' '}
                property.
              </p>

              <div className="lrn-steps">
                <ol className="lrn-list">
                  <li>
                    {`Find a rational between $\\sqrt{2} \\approx 1.414$ and $\\sqrt{3} \\approx 1.732$: $\\frac{3}{2} = 1.5$ works.`}
                  </li>
                  <li>
                    {`Find a rational between $\\pi \\approx 3.14159$ and $\\sqrt{10} \\approx 3.16228$: $3.15 = \\frac{63}{20}$ works.`}
                  </li>
                </ol>
              </div>

              <div className="lrn-graph">
                <viz.DensityStripViz C={C} />
              </div>

              <h3>Closure properties</h3>

              <p>
                The rationals are <strong>closed</strong> under addition, subtraction,
                multiplication, and division (by non-zero rationals). Adding two fractions gives a
                fraction. Multiplying two fractions gives a fraction. This closure makes ℚ a very
                tidy set to work with.
              </p>

              <p>
                The irrationals are <strong>not closed</strong> under any of these operations.{' '}
                {`$\\sqrt{2} + (-\\sqrt{2}) = 0$`} (rational). {`$\\sqrt{2} \\times \\sqrt{2} = 2$`}{' '}
                (rational). {`$\\frac{\\sqrt{2}}{\\sqrt{2}} = 1$`} (rational). Operations on
                irrationals can land anywhere.
              </p>

              <div className="lrn-compare">
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">ℚ is closed under arithmetic</span>
                  <p>
                    {`$\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}$`} (rational)
                    <br />
                    {`$\\frac{2}{5} \\times \\frac{3}{7} = \\frac{6}{35}$`} (rational)
                    <br />
                    Result always stays rational.
                  </p>
                </div>
                <div className="lrn-compare-col">
                  <span className="lrn-compare-title">Irrationals are not closed</span>
                  <p>
                    {`$\\sqrt{2} \\times \\sqrt{2} = 2$`} (rational)
                    <br />
                    {`$\\sqrt{2} + \\sqrt{3}$`}: irrational
                    <br />
                    Result can be either type.
                  </p>
                </div>
              </div>

              <h3>An application: arithmetic progressions</h3>

              <p>
                Irrationality has unexpected consequences. Consider the sequence{' '}
                {`$0, \\sqrt{2}, 2\\sqrt{2}, 3\\sqrt{2}, \\ldots$`}. Each term adds a fixed step of{' '}
                {`$\\sqrt{2}$`} to the one before, starting from 0. How many terms are whole
                numbers?
              </p>

              <p>
                The {`$n$`}-th term is {`$n\\sqrt{2}$`}. For this to be an integer, you would need{' '}
                {`$\\sqrt{2} = \\frac{\\text{integer}}{n}$`}, which is a fraction. But{' '}
                {`$\\sqrt{2}$`} is irrational, so no such {`$n$`} exists (except {`$n = 0$`}). The
                sequence contains exactly one integer: the first term, 0.
              </p>

              <div className="lrn-elaborate">
                <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
                <p>
                  Take a sequence that adds a fixed irrational step {`$d$`} each time, so its terms
                  are {`$a + nd$`}. Suppose two of them are integers, say {`$a + nd$`} and{' '}
                  {`$a + md$`} with {`$m \\neq n$`}. Then their difference {`$(n - m)d$`} is also an
                  integer. So {`$d = \\frac{\\text{integer}}{n - m}$`}, which is rational. If{' '}
                  {`$d$`} is irrational, no two terms can both be integers. At most one can.
                </p>
              </div>
            </>
          )
        }
      ]
    },
    practice: [
      {
        q: `Is $\\sqrt{2}$ rational or irrational? Explain using the definition.`,
        a: `$\\sqrt{2}$ is irrational. It cannot be written as $\\frac{a}{b}$ for any integers $a$ and $b$. The proof by contradiction starts by assuming $\\sqrt{2} = \\frac{a}{b}$, fully reduced. It then forces both $a$ and $b$ to be even. That contradicts the fully-reduced assumption. Its decimal expansion $1.41421356\\ldots$ also never terminates or repeats.`
      },
      {
        q: `Predict: what is $\\sqrt{1936}$? Is it rational or irrational? Use prime factorization.`,
        a: `$\\sqrt{1936} = 44$ (rational). Factor: $1936 = 2^4 \\times 11^2$. Both exponents (4 and 2) are even, so 1936 is a perfect square. $\\sqrt{1936} = 2^2 \\times 11 = 4 \\times 11 = 44$. When every prime exponent is even, the square root is a whole number.`
      },
      {
        q: `Is $\\sqrt{12}$ rational or irrational? Show the prime factorization test.`,
        a: `$\\sqrt{12}$ is irrational. Factor: $12 = 2^2 \\times 3^1$. The exponent of 3 is 1, which is odd. So 12 is not a perfect square. By the general theorem, $\\sqrt{n}$ is irrational whenever $n$ is not a perfect square.`
      },
      {
        q: `Simplify $\\sqrt{8}$. Write your answer in exact form.`,
        a: `$\\sqrt{8} = 2\\sqrt{2}$. The largest perfect-square factor of 8 is 4: $8 = 4 \\times 2$. By the product rule: $\\sqrt{8} = \\sqrt{4 \\times 2} = \\sqrt{4} \\cdot \\sqrt{2} = 2\\sqrt{2}$. The result is exact and simplified because 2 has no perfect-square factors greater than 1.`
      },
      {
        q: `Simplify $\\sqrt{50}$.`,
        a: `$\\sqrt{50} = 5\\sqrt{2}$. The largest perfect-square factor of 50 is 25: $50 = 25 \\times 2$. Product rule: $\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$. Always find the largest perfect-square factor to simplify in one step.`
      },
      {
        q: `Transfer: simplify $\\sqrt{72}$.`,
        a: `$\\sqrt{72} = 6\\sqrt{2}$. Factor: $72 = 36 \\times 2$. The largest perfect-square factor is 36. $\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$. If you had chosen $4 \\times 18$ instead, you would get $2\\sqrt{18} = 2\\sqrt{9 \\times 2} = 6\\sqrt{2}$ (same answer, just an extra step).`
      },
      {
        q: `Simplify $\\sqrt{12} + \\sqrt{75}$.`,
        a: `$\\sqrt{12} + \\sqrt{75} = 7\\sqrt{3}$. First simplify each: $\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$ and $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$. Then add like radicals: $2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}$. You can add them because they share the same radical part $\\sqrt{3}$.`
      },
      {
        q: `Self-explain: in the proof that $\\sqrt{2}$ is irrational, why must you first reduce $\\frac{a}{b}$ so that at least one of $a$ or $b$ is odd?`,
        a: `The reduction creates the target for the contradiction. After Steps 3 and 4, you discover that both $a$ and $b$ are even. This contradicts the state established in Step 1. Without the initial reduction, both being even would not be a contradiction. The trick is proving that the "already reduced" fraction still has both parts even, which is impossible.`
      },
      {
        q: `Classify each expression as rational or irrational: $(\\sqrt{17})^2$, $\\frac{22}{7}$, $\\sqrt{2.25}$, $\\pi^2$.`,
        a: `$(\\sqrt{17})^2 = 17$ (rational: squaring removes the radical). $\\frac{22}{7}$ (rational: it is a fraction of two integers). $\\sqrt{2.25} = \\sqrt{\\frac{225}{100}} = \\frac{15}{10} = 1.5$ (rational: the radicand is a perfect square fraction). $\\pi^2$ (irrational: the square of $\\pi$ is still irrational). Always simplify before classifying.`
      },
      {
        q: `Classify: $\\frac{\\sqrt{12}}{\\sqrt{3}}$. Show all steps.`,
        a: `Rational. Use the quotient rule: $\\frac{\\sqrt{12}}{\\sqrt{3}} = \\sqrt{\\frac{12}{3}} = \\sqrt{4} = 2$. The result is a whole number. The key step is merging the two radicals using the quotient rule, which reveals the radicand is a perfect square.`
      },
      {
        q: `Transfer: is $\\frac{\\sqrt{18}}{\\sqrt{2}}$ rational or irrational? Compute its value.`,
        a: `Rational. $\\frac{\\sqrt{18}}{\\sqrt{2}} = \\sqrt{\\frac{18}{2}} = \\sqrt{9} = 3$. The quotient rule merges the radicals, and 9 is a perfect square. Whenever a quotient of radicals simplifies to a perfect square under the radical, the result is rational.`
      },
      {
        q: `Elaborate: why is the sum of a rational and an irrational number always irrational?`,
        a: `Suppose $r + x = s$ where $r$ is rational, $x$ is irrational, and $s$ is supposed to be rational. Then $x = s - r$. The difference of two rationals is always rational (rationals are closed under subtraction). So $x$ would be rational. That contradicts the assumption that $x$ is irrational. The assumption that $s$ is rational must be false.`
      },
      {
        q: `Can two irrational numbers multiply to give a rational number? Give an example.`,
        a: `Yes. $\\sqrt{2} \\times \\sqrt{2} = 2$. Both factors are irrational, but their product is rational. Another example: $\\sqrt{3} \\times \\sqrt{3} = 3$. The irrationals are not closed under multiplication. This contrasts with the rationals, which always stay rational under multiplication.`
      },
      {
        q: `Transfer: is $\\sqrt{2} + (-\\sqrt{2})$ rational or irrational?`,
        a: `Rational. $\\sqrt{2} + (-\\sqrt{2}) = 0$. Both summands are irrational, but their sum is the rational number 0. This shows that irrational + irrational can be rational. The sum of two irrationals is not predictable without looking at the specific numbers.`
      },
      {
        q: `Find a rational number between $\\sqrt{2}$ and $\\sqrt{3}$.`,
        a: `$\\frac{3}{2} = 1.5$ works. $\\sqrt{2} \\approx 1.414$ and $\\sqrt{3} \\approx 1.732$, and $1.414 < 1.5 < 1.732$. Any rational in the interval works. The density property guarantees a rational exists between any two distinct real numbers.`
      },
      {
        q: `Predict: between $\\pi \\approx 3.14159$ and $\\sqrt{10} \\approx 3.16228$, name a rational number.`,
        a: `$3.15$ works. $3.14159 < 3.15 < 3.16228$. Written as a fraction: $3.15 = \\frac{63}{20}$. The key is picking a terminating or repeating decimal that falls strictly between the two irrational values.`
      },
      {
        q: `Explain the real-number hierarchy $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$ in plain language. What does each step add?`,
        a: `Natural numbers ($\\mathbb{N}$) are counting numbers: 0, 1, 2, 3, ... Integers ($\\mathbb{Z}$) add negatives. Rationals ($\\mathbb{Q}$) add all fractions, including terminating and repeating decimals. Reals ($\\mathbb{R}$) add irrationals: the non-terminating, non-repeating decimals like $\\sqrt{2}$ and $\\pi$. Each layer fills in numbers the previous layer was missing.`
      },
      {
        q: `Predict: is $\\pi/2$ rational or irrational?`,
        a: `Irrational. Dividing an irrational number by a non-zero rational gives an irrational. If $\\pi/2$ were rational, say $= r$, then $\\pi = 2r$ would be rational (a rational times a rational is rational). But $\\pi$ is irrational. Contradiction.`
      },
      {
        q: `A sequence starts at 0 and adds a fixed step of $\\sqrt{2}$ each time: $0, \\sqrt{2}, 2\\sqrt{2}, 3\\sqrt{2}, \\ldots$. How many terms are integers?`,
        a: `Exactly one (the first term, 0). The $n$-th term is $n\\sqrt{2}$. For this to be an integer, $\\sqrt{2}$ would need to equal $\\text{integer}/n$, making it rational. But $\\sqrt{2}$ is irrational, so $n\\sqrt{2}$ is never an integer for positive integer $n$.`
      },
      {
        q: `Transfer: the perimeter of a square with side $\\sqrt{5}$ cm. Is it rational or irrational?`,
        a: `Irrational. Perimeter $= 4\\sqrt{5}$. This is a non-zero rational (4) multiplied by an irrational ($\\sqrt{5}$), which is always irrational. Numerically $4\\sqrt{5} \\approx 8.944$ cm (non-terminating, non-repeating).`
      },
      {
        q: `Transfer: a right triangle has legs 1 and 2. What is the hypotenuse? Is it rational? (In a right triangle the squared legs add to the squared hypotenuse: $a^2 + b^2 = c^2$.)`,
        a: `Hypotenuse $= \\sqrt{1^2 + 2^2} = \\sqrt{5}$. Irrational. Factor 5: $5 = 5^1$. The exponent is 1 (odd), so 5 is not a perfect square. By the Square Roots of Primes Rule, $\\sqrt{5}$ is irrational since 5 is prime.`
      },
      {
        q: `Elaborate: why does the Square Roots of Primes Rule require the number to be prime? Give a counterexample for a composite number.`,
        a: `The proof uses the property: if prime $p$ divides $a^2$ then $p$ divides $a$. This fails for composite numbers. Example: $4$ divides $6^2 = 36$ but $4$ does not divide $6$. Because of this failure, $\\sqrt{4} = 2$ is rational even though 4 is composite. The primeness of $p$ is what makes the divisibility chain unbreakable.`
      },
      {
        q: `Self-explain: why is $\\sqrt{2.25}$ rational even though it involves a square root?`,
        a: `$\\sqrt{2.25} = \\sqrt{\\frac{225}{100}} = \\frac{\\sqrt{225}}{\\sqrt{100}} = \\frac{15}{10} = \\frac{3}{2}$. The radicand 2.25 is a ratio of two perfect squares (225 and 100), so both roots are whole numbers. The result is a fraction of two integers. A number under a radical is not automatically irrational: you must check whether it simplifies to a fraction.`
      },
      {
        q: `Is $\\frac{1}{\\sqrt{7}}$ rational or irrational?`,
        a: `Irrational. $\\sqrt{7}$ is irrational (7 is prime). The reciprocal of an irrational is irrational: if $\\frac{1}{\\sqrt{7}} = r$ (rational), then $\\sqrt{7} = \\frac{1}{r}$ (rational), contradicting irrationality. Numerically $\\frac{1}{\\sqrt{7}} \\approx 0.37796\\ldots$ (non-terminating, non-repeating).`
      },
      {
        q: `Predict: a circle has radius 3 cm. Is the area of the circle rational or irrational?`,
        a: `Irrational. Area of circle $= \\pi r^2 = \\pi \\times 9 = 9\\pi$. This is a rational (9) times an irrational ($\\pi$), which is always irrational. Compare: a square with integer side length has rational area. The circle's area always carries the irrational factor $\\pi$.`
      },
      {
        q: `State the perfect square test and use it to decide: is 11025 a perfect square?`,
        a: `The test: $n$ is a perfect square if and only if every prime in its factorization appears an even number of times. Factor 11025: $11025 = 3^2 \\times 5^2 \\times 7^2$. Every exponent (2, 2, 2) is even. So 11025 is a perfect square. Indeed $\\sqrt{11025} = 3 \\times 5 \\times 7 = 105$.`
      },
      {
        q: `Transfer: classify $\\sqrt{2} + 1$ as rational or irrational. Give a proof sketch.`,
        a: `Irrational. Suppose $\\sqrt{2} + 1 = r$ where $r$ is rational. Then $\\sqrt{2} = r - 1$. The right side is rational minus rational, which is rational. So $\\sqrt{2}$ would be rational. But $\\sqrt{2}$ is irrational. Contradiction. Adding 1 to $\\sqrt{2}$ cannot make it rational.`
      },
      {
        q: `Elaborate: describe the decimal characterization of irrationals. How does it connect to the fraction definition?`,
        a: `A rational number, when written as a decimal, always terminates or eventually repeats. This is because long division of integers must eventually produce a remainder cycle (only finitely many possible remainders exist). An irrational number has a decimal that never terminates and never repeats. The two characterizations are equivalent: a number is rational if and only if its decimal terminates or repeats. "Cannot be a fraction" and "non-terminating, non-repeating decimal" are two ways of saying the same thing.`
      },
      {
        q: `Is $\\mathbb{Q}$ closed under division? Give an example and state the one exception.`,
        a: `Yes, except for division by zero. If $\\frac{a}{b}$ and $\\frac{c}{d}$ are rationals with $c \\neq 0$, then $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{ad}{bc}$, which is rational. Example: $\\frac{2}{3} \\div \\frac{4}{5} = \\frac{10}{12} = \\frac{5}{6}$. Division by zero is undefined for all numbers.`
      },
      {
        q: `Transfer: can you find two irrationals $x$ and $y$ such that $x/y$ is rational? Give an example.`,
        a: `Yes. $x = \\sqrt{2}$, $y = \\sqrt{2}$. Then $x/y = 1$ (rational). Or: $x = 2\\sqrt{3}$, $y = \\sqrt{3}$, giving $x/y = 2$. Irrationals are not closed under division: the quotient can be rational when the irrational parts cancel.`
      },
      {
        q: `Predict: can $3\\sqrt{2} + 5\\sqrt{2}$ be combined? What about $3\\sqrt{2} + 5\\sqrt{3}$?`,
        a: `$3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$. Yes, they combine because they share the same radical part $\\sqrt{2}$, just as $3x + 5x = 8x$. $3\\sqrt{2} + 5\\sqrt{3}$ cannot be simplified further. The radical parts $\\sqrt{2}$ and $\\sqrt{3}$ are different (these are unlike terms), so the expression stays as $3\\sqrt{2} + 5\\sqrt{3}$.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Irrational Numbers and the Real-Number System',
      sections: [
        {
          title: 'Definitions',
          content: (
            <>
              <div className="lrn-eq lrn-eq-hero">
                {`$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$`}
              </div>
              <ul className="lrn-list">
                <li>
                  <strong>Rational (ℚ):</strong>{' '}
                  {`$\\frac{a}{b}$, $a, b \\in \\mathbb{Z}$, $b \\neq 0$. Decimal terminates or repeats.`}
                </li>
                <li>
                  <strong>Irrational (ℝ ∖ ℚ):</strong> cannot be written as {`$\\frac{a}{b}$`}.
                  Decimal never terminates, never repeats.
                </li>
                <li>
                  <strong>Real (ℝ):</strong> all rationals plus all irrationals. Every point on the
                  number line.
                </li>
              </ul>
              <p>
                <strong>When to use:</strong> classify any number before computing with it. A
                simplified radical of a non-perfect-square is irrational.
              </p>
            </>
          )
        },
        {
          title: 'Perfect Square Test',
          content: (
            <>
              <div className="lrn-eq">
                {`$$n \\text{ is a perfect square} \\iff \\text{every prime exponent in } n \\text{ is even}$$`}
              </div>
              <ul className="lrn-list">
                <li>
                  {`$1936 = 2^4 \\cdot 11^2$: all exponents even $\\Rightarrow$ $\\sqrt{1936} = 44$ (rational)`}
                </li>
                <li>
                  {`$12 = 2^2 \\cdot 3^1$: exponent of 3 is odd $\\Rightarrow$ $\\sqrt{12} = 2\\sqrt{3}$ (irrational)`}
                </li>
              </ul>
              <p>
                <strong>When to use:</strong> any time you need to decide whether {`$\\sqrt{n}$`} is
                rational. Factor {`$n$`} and check exponents.
              </p>
            </>
          )
        },
        {
          title: 'Irrationality Proof Skeleton (√2)',
          content: (
            <>
              <div className="lrn-proof">
                <span className="lrn-proof-header">Proof: √2 Is Irrational</span>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">1.</span>
                  <div className="lrn-proof-step-content">
                    {`Assume $\\sqrt{2} = \\frac{a}{b}$, reduced so not both even.`}
                  </div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">2.</span>
                  <div className="lrn-proof-step-content">
                    {`Square: $2b^2 = a^2$. So $a$ is even; write $a = 2c$.`}
                  </div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">3.</span>
                  <div className="lrn-proof-step-content">
                    {`Substitute: $b^2 = 2c^2$. So $b$ is even.`}
                  </div>
                </div>
                <div className="lrn-proof-step">
                  <span className="lrn-proof-step-num">4.</span>
                  <div className="lrn-proof-step-content">
                    Both even contradicts Step 1. Assumption fails.
                  </div>
                </div>
                <div className="lrn-qed">Q.E.D.</div>
              </div>
              <p>
                <strong>When to use:</strong> adapt this skeleton for any prime {`$p$`}: replace
                "even" with "divisible by {`$p$`}" throughout.
              </p>
            </>
          )
        },
        {
          title: 'Square Root Rules',
          content: (
            <>
              <div className="lrn-eq lrn-eq-hero">
                {`$$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab} \\qquad \\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}} \\qquad (\\sqrt{a})^2 = a$$`}
              </div>
              <ul className="lrn-list">
                <li>{`$a, b \\geq 0$; $b > 0$ for the quotient rule`}</li>
                <li>
                  Simplify: find largest perfect-square factor, extract it:{' '}
                  {`$\\sqrt{k^2 \\cdot m} = k\\sqrt{m}$`}
                </li>
                <li>Like radicals add: {`$m\\sqrt{c} + n\\sqrt{c} = (m+n)\\sqrt{c}$`}</li>
              </ul>
              <div className="lrn-callout lrn-danger">
                <p>
                  <strong>Invalid rules:</strong> {`$\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$`} and{' '}
                  {`$\\sqrt{a^2 + b^2} \\neq a + b$`}. Always check with numbers.
                </p>
              </div>
              <p>
                <strong>When to use:</strong> product rule to extract perfect-square factors;
                quotient rule to simplify radical fractions; identity to remove a radical by
                squaring.
              </p>
            </>
          )
        },
        {
          title: 'Closure and Classification',
          content: (
            <>
              <ul className="lrn-list">
                <li>
                  <strong>Rational {`$\\pm$`} rational</strong> = rational
                </li>
                <li>
                  <strong>Rational {`$\\pm$`} irrational</strong> = irrational (if rational part is
                  non-zero)
                </li>
                <li>
                  <strong>Irrational {`$\\pm$`} irrational</strong> = could be either
                </li>
                <li>
                  <strong>Non-zero rational {`$\\times$`} irrational</strong> = irrational
                </li>
                <li>
                  <strong>Irrational {`$\\times$`} irrational</strong> = could be either
                </li>
              </ul>
              <p>
                <strong>When to use:</strong> to classify expressions without computing. If the
                simplification trail leads to a fraction or perfect square, the number is rational.
                If an irremovable radical remains, it is irrational.
              </p>
            </>
          )
        },
        {
          title: 'Density and Ordering',
          content: (
            <>
              <ul className="lrn-list">
                <li>Between any two real numbers there is a rational and an irrational.</li>
                <li>
                  {`Ordering rule: $0 \\leq a \\leq b \\implies \\sqrt{a} \\leq \\sqrt{b}$. Use to bracket $\\sqrt{n}$.`}
                </li>
                <li>{`Bracketing: $k^2 < n < (k+1)^2 \\implies k < \\sqrt{n} < k+1$.`}</li>
              </ul>
              <p>
                <strong>When to use:</strong> to find a rational between two irrationals, pick any
                terminating decimal that fits numerically. To estimate {`$\\sqrt{n}$`}, find the
                nearest perfect squares and compute the endpoints.
              </p>
            </>
          )
        }
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function IrrationalNumbersAndTheRealNumberSystem() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
