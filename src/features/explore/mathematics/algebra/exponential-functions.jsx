import 'katex/dist/katex.min.css'
import { LearningTemplate } from '../../../../components/learning/learning-template'

import {
  CompoundVsSimpleViz,
  EqualBasesViz,
  ExponentialGraphViz,
  GrowthComparisonViz,
  InteractiveExponentialViz
} from '../../../../components/viz'
// Visualizations

// Config

function useConfig() {
  const config = {
    cssPrefix: 'exp',
    documentTitle: 'Exponential Functions - AETHER',
    learning: {
      groupTitle: 'Coordinate Geometry and Functions',
      category: 'Module 19',
      title: 'Exponential Functions',
      subtitle:
        'Functions where the variable lives in the exponent. Growth that multiplies itself.',
      sections: [
        <>
          <h2>Exponential Functions</h2>

          <p>
            An <strong>exponential function</strong> puts the variable in the exponent, the small
            raised number that says how many times to multiply. For example, {`$2^x$`} doubles its
            output every time {`$x$`} goes up by one. The same meaning extends to fractional and
            decimal exponents through the standard exponent rules.
          </p>
          <p>
            You write it as {`$f(x) = a^x$`}, where {`$a$`} is the fixed base and {`$x$`} is the
            input you change. We'll start with {`$a > 1$`} so the function grows. Bases between 0
            and 1 work the same way but shrink, you'll see one in the carbon-14 example below.
          </p>
          <p>
            This is the opposite of a polynomial like {`$x^2$`} (a sum of powers of {`$x$`}). In{' '}
            {`$x^2$`} the variable is the base. In {`$2^x$`} the base is fixed and the variable is
            the power.
          </p>
          <p>
            Exponential functions describe anything that grows by multiplying by the same factor
            each step. Populations grow this way. So does money in a bank. So does radioactive
            material as it decays.
          </p>

          <h3>The Chessboard Story</h3>
          <p>
            Two friends, Arial and Meena, ask a king for grains of rice on a chessboard. A
            chessboard has 64 squares.
          </p>
          <p>
            Arial asks for 1 grain on square 1, then 10 more grains on every square after that. So
            she gets 1, 11, 21, 31, and so on. On square 1 she has 1. Each later square adds 10. So{' '}
            {`$A(n) = 1 + 10(n-1) = 10n - 9$`}. This is <strong>linear growth</strong>: a fixed
            amount added each step.
          </p>
          <p>
            Meena asks for 1 grain on square 1, then double the previous square every time after
            that. So she gets 1, 2, 4, 8, 16. Doubling happens {`$n - 1$`} times by square {`$n$`},
            so {`$M(n) = 1 \\cdot 2^{n-1} = 2^{n-1}$`}. This is <strong>exponential growth</strong>:
            a fixed factor multiplied each step.
          </p>
          <p>
            On square 64, Arial gets {`$A(64) = 631$`} grains. Meena gets{' '}
            {`$M(64) = 2^{63} \\approx 9.2 \\times 10^{18}$`} grains. That is more than every grain
            of rice ever grown in human history. Multiplication outruns addition.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Linear growth adds the same amount every time. Exponential growth makes each new gain
              a fixed fraction of the current total. The increments themselves keep doubling.
              Compare additions to ever-larger multiplications, and multiplication always wins. No
              matter how steep the line, an exponential curve overtakes it.
            </p>
          </div>

          <p>
            So linear adds 10 each step ({`$A(n) = 10n - 9$`}); exponential doubles each step (
            {`$M(n) = 2^{n-1}$`}).
          </p>

          <div className="lrn-graph">
            <GrowthComparisonViz />
          </div>

          <h3>Graphing {`$f(x) = 2^x$`}</h3>
          <p>
            To draw the graph, plug small values of {`$x$`} into {`$2^x$`}:
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$x$`}</th>
                <th>{`$f(x)$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-2</td>
                <td>{`$\\frac{1}{4}$`}</td>
              </tr>
              <tr>
                <td>-1</td>
                <td>{`$\\frac{1}{2}$`}</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>3</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
          <p>
            For large negative {`$x$`}, the value is close to zero but never reaches it. The line{' '}
            {`$y = 0$`} is a <strong>horizontal asymptote</strong>. At {`$x = 0$`}, {`$f(0) = 1$`}.
            Then the curve climbs faster and faster as {`$x$`} grows. Domain (the inputs that work):
            all real numbers. Range (the outputs you get): all positive numbers. {`$2^x$`} is never
            zero and never negative, because multiplying any number of positive 2's gives a positive
            answer.
          </p>
          <p>
            You can now sketch {`$a^x$`} for any base {`$a > 1$`} from a small table of integer
            inputs. Pin the y-intercept at 1. Pin the horizontal asymptote at {`$y = 0$`}. Connect a
            smooth curve through the points.
          </p>

          <div className="lrn-graph">
            <ExponentialGraphViz />
          </div>

          <div className="lrn-graph">
            <InteractiveExponentialViz />
          </div>

          <h3>Finding the Base From a Point</h3>
          <p>
            Run the graph the other way. Someone hands you the curve {`$f(x) = a^x$`} and one point
            it passes through. You can recover the base {`$a$`}. Plug the point into {`$a^x$`}, then
            solve for {`$a$`}.
          </p>
          <p>
            Suppose the graph of {`$f(x) = a^x$`} passes through {`$(2, 25)$`}. Then
          </p>
          <div className="lrn-eq">{`$$a^2 = 25$$`}</div>
          <p>
            Take the positive square root, a base is always positive, to get {`$a = 5$`}. So the
            function is {`$f(x) = 5^x$`}.
          </p>
          <p>
            The same move handles decay. If the graph passes through{' '}
            {`$\\left(3, \\tfrac{1}{8}\\right)$`}, then {`$a^3 = \\tfrac{1}{8}$`}, so{' '}
            {`$a = \\tfrac{1}{2}$`} and {`$f(x) = \\left(\\tfrac{1}{2}\\right)^x$`}. Every {`$a^x$`}{' '}
            already passes through {`$(0, 1)$`}, so one more point pins the whole curve.
          </p>

          <h3>Decay: When the Base Is Between 0 and 1</h3>
          <p>
            Take the same recipe with base {`$\\tfrac{1}{2}$`}. At {`$x = 0$`},{' '}
            {`$(\\tfrac{1}{2})^0 = 1$`}. At {`$x = 1$`}, the value is {`$\\tfrac{1}{2}$`}. At{' '}
            {`$x = 2$`}, it's {`$\\tfrac{1}{4}$`}. The output halves with every unit step right, so
            the curve falls instead of climbs. The y-intercept is still 1 and the asymptote is still{' '}
            {`$y = 0$`}, but the asymptote is now on the right. Functions with {`$0 < a < 1$`} are
            called <strong>exponential decay</strong> instead of growth. Algebraically nothing
            changes, every property and every rule on this page still applies.
          </p>
          <p>
            A handy shortcut: {`$\\left(\\tfrac{1}{2}\\right)^x = 2^{-x}$`}. So the decay graph is
            just the growth graph reflected across the y-axis.
          </p>

          <h3>Shifting and Scaling the Graph</h3>
          <p>
            You can move and stretch any exponential the same way you moved lines and parabolas. The
            general shape is
          </p>
          <div className="lrn-eq">{`$$y = a \\cdot b^{x - h} + k$$`}</div>
          <ul className="lrn-list">
            <li>
              {`$h$`} shifts the graph right (positive {`$h$`}) or left.
            </li>
            <li>
              {`$k$`} shifts the graph up (positive {`$k$`}) or down. The horizontal asymptote moves
              with it to {`$y = k$`}.
            </li>
            <li>
              {`$a$`} stretches the graph vertically. The y-intercept becomes {`$a + k$`}, not 1.
            </li>
            <li>A negative {`$a$`} flips the curve across the asymptote.</li>
          </ul>
          <p>
            For example, {`$y = 2^{x-3} + 5$`} is the {`$2^x$`} curve shifted 3 units right and 5
            units up. Its asymptote is {`$y = 5$`}; its y-intercept is {`$2^{-3} + 5 = 5.125$`}.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">EXPLORE</span>
            <p>
              Drag the point along {`$f(x) = 2^x$`}. What happens to the output for negative {`$x$`}
              ? What happens between {`$x = 2$`} and {`$x = 3$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                For negative {`$x$`}, the output stays tiny but stays positive. From {`$x = 2$`} to{' '}
                {`$x = 3$`} the value jumps from 4 to 8, the same step earlier (0 to 1) only added
                1.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Equal-Bases Rule</h2>

          <p>
            Start with a concrete case. If {`$2^x = 2^5$`}, what is {`$x$`}? The two sides use the
            same base and equal each other, so the exponents must match: {`$x = 5$`}.
          </p>
          <p>
            That's the <strong>equal-bases rule</strong>. In symbols: if {`$a^m = a^n$`} and{' '}
            {`$a > 1$`}, then {`$m = n$`}.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The function {`$f(x) = a^x$`} with {`$a > 1$`} is <strong>one-to-one</strong>. It
              always climbs, so it never gives the same output twice. If {`$a^m$`} and {`$a^n$`}
              land at the same height, the same input produced both. Therefore {`$m = n$`}.
            </p>
          </div>

          <div className="lrn-graph">
            <EqualBasesViz />
          </div>

          <h3>Solving with the Same Base</h3>
          <p>Solve {`$3^{2x} = 3^{x-5}$`}.</p>
          <p>Both sides already use base 3. Equate the exponents:</p>
          <div className="lrn-eq">{`$$2x = x - 5$$`}</div>
          <div className="lrn-eq lrn-eq-hero">{`$$x = -5$$`}</div>
          <p>
            That is the whole method. The hard part is spotting that both sides share a base. Once
            you spot it, the exponential equation becomes a linear one you already know how to
            solve. Equate the exponents, then solve.
          </p>

          <p>
            The next moves lean on three exponent rules. The <strong>power-of-a-power</strong> rule:{' '}
            {`$(a^b)^c = a^{bc}$`} (so {`$(5^2)^3 = 5^6$`}). The <strong>product</strong> rule:{' '}
            {`$a^b \\cdot a^c = a^{b+c}$`} (so {`$3^2 \\cdot 3^4 = 3^6$`}). The{' '}
            <strong>quotient</strong> rule: {`$a^m / a^n = a^{m-n}$`} (so {`$2^5 / 2^2 = 2^3$`}).
          </p>

          <h3>Forcing a Common Base</h3>
          <p>
            What if the bases look different? Often you can rewrite them as powers of the same
            smaller number. Solve {`$2^{16^x} = 16^{2^x}$`}.
          </p>
          <p>
            One quick parsing note before we touch the algebra. The stack {`$2^{16^x}$`} means{' '}
            {`$2^{(16^x)}$`}, towers of exponents read top-down (right-associative), not{' '}
            {`$(2^{16})^x$`}. Compute the top first, then use the result as the next exponent.
          </p>
          <p>Since {`$16 = 2^4$`}, rewrite each side with base 2:</p>
          <ul className="lrn-list">
            <li>Left side: {`$2^{16^x}$`}.</li>
            <li>Right side: {`$16^{2^x} = (2^4)^{2^x} = 2^{4 \\cdot 2^x}$`}.</li>
          </ul>
          <p>
            Both sides are now powers of 2, so equate the top-level exponents. Equal-bases doesn't
            care how complicated the exponent expression is. Same base on both sides means the
            exponents themselves are equal:
          </p>
          <div className="lrn-eq">{`$$16^x = 4 \\cdot 2^x$$`}</div>
          <p>
            Use the power-of-a-power rule on the left: {`$16^x = (2^4)^x = 2^{4x}$`}. Use the
            product-of-powers rule on the right: {`$4 \\cdot 2^x = 2^2 \\cdot 2^x = 2^{x+2}$`}.
          </p>
          <div className="lrn-eq">{`$$2^{4x} = 2^{x+2}$$`}</div>
          <p>Equate exponents one more time:</p>
          <div className="lrn-eq">{`$$4x = x + 2$$`}</div>
          <div className="lrn-eq lrn-eq-hero">{`$$x = \\frac{2}{3}$$`}</div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">METHOD</span>
              <p>To force a common base, in order:</p>
              <ol className="lrn-list">
                <li>Find the smallest base that every number is a power of ({`$2$`} here).</li>
                <li>Rewrite every number as a power of that base.</li>
                <li>Use {`$(a^b)^c = a^{bc}$`} to combine the two exponents into one.</li>
                <li>Equate the exponents and solve.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <p>
                Solve {`$4^{x+1} = 8^x$`}. Hint: {`$4 = 2^2$`} and {`$8 = 2^3$`}.
              </p>
              <ol className="lrn-list">
                <li>
                  {`$(2^2)^{x+1} = (2^3)^x$`}, so {`$2^{2x+2} = 2^{3x}$`}.
                </li>
                <li>{`$2x + 2 = 3x$`}.</li>
                <li>Solve for {`$x$`}.</li>
              </ol>
              <details>
                <summary>Answer</summary>
                <p>
                  {`$x = 2$`}. Subtract {`$2x$`} from both sides: {`$2 = x$`}.
                </p>
              </details>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT</span>
              <p>Solve {`$9^x = 27$`} by writing both sides as powers of 3.</p>
              <details>
                <summary>Answer</summary>
                <p>
                  {`$x = \\tfrac{3}{2}$`}. Write {`$9 = 3^2$`} and {`$27 = 3^3$`}, so{' '}
                  {`$3^{2x} = 3^3$`}, giving {`$2x = 3$`}.
                </p>
              </details>
            </div>
          </div>
          <p>
            Any exponential equation whose bases share a single prime falls to this method: rewrite,
            equate, solve.
          </p>

          <h3>Substitution: When You Cannot Find x</h3>
          <p>
            A problem may ask for an expression in {`$x$`} instead of {`$x$`} itself. Suppose{' '}
            {`$2^x = 6$`}. Evaluate {`$2^{3x-1}$`}.
          </p>
          <p>
            You cannot find {`$x$`} by hand, no neat power of 2 equals 6. But you do not have to.
            Use the quotient rule {`$a^{b-c} = a^b / a^c$`} to peel off the {`$-1$`} from the
            exponent. Then use the power-of-a-power rule {`$2^{3x} = (2^x)^3$`} to expose the block:
          </p>
          <div className="lrn-eq">{`$$2^{3x-1} = \\frac{2^{3x}}{2^1} = \\frac{(2^x)^3}{2} = \\frac{6^3}{2} = \\frac{216}{2} = 108$$`}</div>
          <p>
            Call this <strong>block-substitution</strong>: treat {`$2^x$`} as one quantity. Reshape
            the target until that block appears, then swap in its value.
          </p>

          <h3>Turning an Exponential into a Quadratic</h3>
          <p>
            The same trick lets you turn a multi-term exponential equation into a polynomial. Solve{' '}
            {`$4^x - 33 \\cdot 2^{x-1} + 8 = 0$`}.
          </p>
          <p>
            Apply the same substitution trick you used on hidden quadratics: let {`$y = 2^x$`}. The
            equation becomes a polynomial in {`$y$`}. Call this the{' '}
            <strong>let-substitution</strong> technique when you meet it for exponentials.
          </p>
          <p>
            Write every exponential as a power of 2: {`$4^x = (2^2)^x = (2^x)^2$`}, and{' '}
            {`$2^{x-1} = \\frac{2^x}{2}$`}. Let {`$y = 2^x$`}. The equation becomes
          </p>
          <div className="lrn-eq">{`$$y^2 - \\frac{33y}{2} + 8 = 0$$`}</div>
          <p>Multiply through by 2:</p>
          <div className="lrn-eq">{`$$2y^2 - 33y + 16 = 0$$`}</div>
          <p>
            Apply the quadratic formula. The discriminant is{' '}
            {`$33^2 - 4 \\cdot 2 \\cdot 16 = 1089 - 128 = 961 = 31^2$`}. So{' '}
            {`$y = \\frac{33 \\pm 31}{4} \\in \\{\\tfrac{1}{2}, 16\\}$`}. You can confirm the
            factorisation: {`$(2y - 1)(y - 16) = 0$`}. Translate back through {`$y = 2^x$`}:
          </p>
          <ul className="lrn-list">
            <li>
              {`$2^x = \\tfrac{1}{2} = 2^{-1}$`} gives {`$x = -1$`}.
            </li>
            <li>
              {`$2^x = 16 = 2^4$`} gives {`$x = 4$`}.
            </li>
          </ul>
          <p>
            Any exponential equation that collapses to a polynomial through one let-substitution
            falls to the same routine: substitute, solve, translate back.
          </p>

          <h3>Carbon-14 Dating</h3>
          <p>
            All the equal-bases tricks above still work when the base is a fraction. Living things
            absorb a steady mix of carbon-12 and carbon-14. Carbon-14 is a heavier version. It
            slowly breaks down into other elements, that's what <em>radioactive</em> means. When an
            animal or plant dies, no new carbon-14 comes in, and the carbon-14 inside decays. The{' '}
            <strong>half-life</strong> of carbon-14 is 5,730 years. That's the fixed time it takes
            for half of any sample to disappear. Every exponential decay has its own constant
            half-life. Every exponential growth has its own constant <strong>doubling time</strong>{' '}
            , the fixed time it takes for the quantity to double. For {`$2^x$`} the doubling time is
            1 unit of {`$x$`}; for a balance growing at 7% per year it is about 10.24 years. Both
            half-life and doubling time depend only on the growth (or decay) factor: if a balance{' '}
            {`$B$`} becomes {`$2B$`} after time {`$T$`}, that ratio is the same whether {`$B$`} is
            10 dollars or 10 million.
          </p>
          <p>
            Suppose a fossil contains exactly {`$\\tfrac{1}{4}$`} of the carbon-14 a living creature
            would have. How old is it?
          </p>
          <p>
            Let {`$t$`} be the number of half-lives that have passed. Each half-life multiplies the
            remaining carbon-14 by {`$\\tfrac{1}{2}$`}. So
          </p>
          <div className="lrn-eq">{`$$\\left(\\tfrac{1}{2}\\right)^t = \\tfrac{1}{4}$$`}</div>
          <p>
            The base is {`$\\tfrac{1}{2}$`}, between 0 and 1, but equal-bases still applies. Write
            the right side with base {`$\\tfrac{1}{2}$`}:{' '}
            {`$\\tfrac{1}{4} = \\left(\\tfrac{1}{2}\\right)^2$`}. Equate exponents to get{' '}
            {`$t = 2$`}. Two half-lives is {`$2 \\times 5730 = 11{,}460$`} years.
          </p>
          <p>
            When {`$\\frac{a}{b}$`} is not a clean power of {`$\\tfrac{1}{2}$`}, equal-bases cannot
            finish the job. Logarithms can.
          </p>
        </>,

        <>
          <h2>Show Me the Money</h2>

          <p>
            Borrow {`$\\$100$`} at 10%: simple interest pays {`$\\$10$`} every year flat.{' '}
            <strong>Compound interest</strong> is different. In year two, that first {`$\\$10$`}{' '}
            earns interest of its own, so the bank charges {`$\\$11$`} instead of {`$\\$10$`}.
            Compound interest is what makes this an exponential story: each year, the balance
            multiplies by the same factor. After {`$n$`} years the total is
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\$k \\left(1 + \\frac{r}{100}\\right)^n$$`}</div>
          <p>
            where {`$\\$k$`} is the starting <strong>principal</strong> and {`$r\\%$`} is the annual
            rate. Viewed from algebra, that's an exponential function {`$f(n) = k a^n$`} with growth
            factor {`$a = 1 + r/100$`}. It's Meena's chessboard pattern, in dollars instead of rice.
          </p>

          <p>
            <strong>Worked example.</strong> Invest {`$\\$1000$`} at 5% compounded annually for 3
            years. The growth factor is {`$1 + 0.05 = 1.05$`}, applied 3 times:
          </p>
          <div className="lrn-eq">{`$$1000 \\cdot 1.05^3 = 1000 \\cdot 1.157625 \\approx \\$1{,}157.63$$`}</div>
          <p>
            Year 1: {`$\\$1050.00$`}. Year 2: {`$\\$1102.50$`}. Year 3: {`$\\$1157.63$`}. Each year
            the balance multiplies by 1.05, that's all "compound" means.
          </p>

          <div className="lrn-graph">
            <CompoundVsSimpleViz />
          </div>

          <h3>Compounding More Than Once a Year</h3>
          <p>
            Banks often compound more often than yearly, every six months, every quarter, every
            month, even every day. A 12% annual rate compounded quarterly means each quarter charges{' '}
            {`$12/4 = 3\\%$`}, applied 4 times per year. In general, the bank splits the annual rate{' '}
            {`$r\\%$`} into {`$m$`} equal pieces and applies each piece in turn. The per-period rate
            is {`$\\frac{r}{100m}$`}, and over {`$n$`} years there are {`$nm$`} periods. Multiplying
            once per period gives the general formula:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\$k \\left(1 + \\frac{r}{100m}\\right)^{nm}$$`}</div>
          <p>
            When {`$m = 1$`} this is the annual compound formula. When {`$m = 12$`} it's monthly
            compounding. The exponent grows with {`$m$`}, but the per-period factor shrinks. The two
            effects nearly cancel, but not quite.
          </p>

          <p>
            Take Brad's loan: 10,000 dollars at 14% for one year. How much does he owe under
            different compounding frequencies?
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Frequency</th>
                <th>{`$m$`}</th>
                <th>Amount owed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Annually</td>
                <td>1</td>
                <td>{`$\\$11{,}400.00$`}</td>
              </tr>
              <tr>
                <td>Semi-annually</td>
                <td>2</td>
                <td>{`$\\$11{,}449.00$`}</td>
              </tr>
              <tr>
                <td>Quarterly</td>
                <td>4</td>
                <td>{`$\\$11{,}475.09$`}</td>
              </tr>
              <tr>
                <td>Daily</td>
                <td>365</td>
                <td>{`$\\$11{,}502.46$`}</td>
              </tr>
              <tr>
                <td>Every second</td>
                <td>{`$\\approx 3.15 \\times 10^7$`}</td>
                <td>{`$\\$11{,}502.74$`}</td>
              </tr>
            </tbody>
          </table>
          <p>
            (The last row's {`$m \\approx 3.15 \\times 10^7$`} is roughly the number of seconds in a
            year.)
          </p>
          <p>
            More compounding does grow the total, but the gains shrink fast. Look at the last two
            rows: jumping from daily (365 compounds) to every-second (≈31 million compounds) adds
            only 28 cents. There is a hard ceiling.
          </p>

          <h3>Euler's Number {`$e$`}</h3>
          <p>
            The ceiling has a name. To isolate the behaviour of {`$m$`} itself, simplify to one
            dollar at 100%. That strips everything except the part that depends on {`$m$`}.
            Compounded {`$m$`} times, the total after one year is{' '}
            {`$\\left(1 + \\frac{1}{m}\\right)^m$`}. Compute it for growing {`$m$`}:
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$m$`} (times per year)</th>
                <th>{`$\\left(1 + \\frac{1}{m}\\right)^m$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2.000</td>
              </tr>
              <tr>
                <td>10</td>
                <td>2.594</td>
              </tr>
              <tr>
                <td>100</td>
                <td>2.705</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>2.717</td>
              </tr>
              <tr>
                <td>10000</td>
                <td>2.718</td>
              </tr>
            </tbody>
          </table>
          <p>
            The values get closer and closer to a fixed number. Push {`$m$`} as large as you like
            and the expression settles toward a constant called <strong>Euler's number</strong>{' '}
            {`$e$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\left(1 + \\frac{1}{m}\\right)^m \\longrightarrow e \\approx 2.71828\\ldots$$`}</div>
          <p>
            (The arrow means "gets closer and closer to.") The number {`$e$`} is the ceiling for the
            one-dollar, 100%, infinitely-compounded case. The digits of {`$e$`} never end and never
            repeat, like {`$\\pi$`}.
          </p>
          <p>
            Because {`$2 < e < 3$`}, the curve {`$f(x) = e^x$`} sits between {`$y = 2^x$`} and{' '}
            {`$y = 3^x$`}. This function {`$f(x) = e^x$`} is called the{' '}
            <strong>natural exponential function</strong>. It is <em>the</em> exponential of smooth,
            continuous growth, the base that appears whenever change happens every instant instead
            of in separate steps.
          </p>
          <p>
            For irrational exponents (decimals that never end or repeat) like {`$e^{0.14}$`}, use a
            calculator's {`$e^x$`} or <strong>exp</strong> key: type 0.14, then {`$e^x$`}. You
            should read {`$e^{0.14} \\approx 1.150274$`}. Compare with Brad's ceiling row: the
            growth factor is {`$11502.74 / 10000 = 1.150274$`}. The formula and the table agree to
            six decimals on this one case.
          </p>

          <h3>From One Case to the General Formula</h3>
          <p>
            Now generalise. Start from the {`$m$`}-times formula and let {`$m$`} grow without bound:
          </p>
          <div className="lrn-eq">{`$$\\$k \\left(1 + \\frac{r}{100m}\\right)^{nm}$$`}</div>
          <p>
            The trick is to rewrite the exponent so the {`$(1 + 1/u)^u$`} pattern appears. Let{' '}
            {`$u = 100m/r$`}, so that {`$1/u = r/(100m)$`}. Then {`$nm = u \\cdot \\frac{rn}{100}$`}
            :
          </p>
          <div className="lrn-eq">{`$$\\$k \\left(1 + \\frac{1}{u}\\right)^{u \\cdot \\frac{rn}{100}} = \\$k \\left[\\left(1 + \\frac{1}{u}\\right)^u\\right]^{\\frac{rn}{100}}$$`}</div>
          <p>
            As the compounding frequency grows without bound, written {`$m \\to \\infty$`}, where
            the arrow is shorthand for "grows without bound", {`$u$`} grows without bound too. The
            inner expression {`$\\left(1 + \\frac{1}{u}\\right)^u$`} settles toward {`$e$`}. The
            outer exponent {`$\\frac{rn}{100}$`} stays fixed. So the whole expression settles toward
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\$k \\, e^{\\tfrac{rn}{100}}$$`}</div>
          <p>
            This is the <strong>continuously compounded</strong> amount for principal {`$\\$k$`},
            rate {`$r\\%$`}, and {`$n$`} years. The same one-step rewrite turns any{' '}
            {`$(1 + r/(100m))^{mn}$`} into a power of {`$e$`}. {`$e$`} will appear again every time
            growth or decay happens smoothly rather than in separate steps.
          </p>
        </>,

        <>
          <h2>Interest-ing Problems</h2>

          <p>
            Back to annual compounding, the {`$(1 + r/100)^n$`} form, for the rest of this section.
            Real problems run the formula backwards. You know the final amount and need the rate. Or
            you know what you want and need to find what to invest today. The compound interest
            formula
          </p>
          <div className="lrn-eq">{`$$\\$k \\left(1 + \\frac{r}{100}\\right)^n = \\$m$$`}</div>
          <p>has four quantities. Given any three, you can solve for the fourth.</p>

          <h3>Working Backwards to Find the Rate</h3>
          <p>
            Sayeed borrowed 2,300 dollars. Five years later, at compound annual interest, he owes
            3,301.95 dollars. What is the rate?
          </p>
          <p>
            Set up the formula with {`$k = 2300$`}, {`$n = 5$`}, {`$m = 3301.95$`}:
          </p>
          <div className="lrn-eq">{`$$2300 \\left(1 + \\frac{r}{100}\\right)^5 = 3301.95$$`}</div>
          <p>
            Divide by 2,300 to isolate the growth factor, which removes the principal from the
            problem:
          </p>
          <div className="lrn-eq">{`$$\\left(1 + \\frac{r}{100}\\right)^5 = 1.4356$$`}</div>
          <p>
            Now the only unknown is the per-year multiplier raised to the fifth power. Take the
            fifth root to undo five years of compounding in one step:
          </p>
          <div className="lrn-eq">{`$$1 + \\frac{r}{100} = 1.4356^{\\tfrac{1}{5}} = 1.075$$`}</div>
          <div className="lrn-eq lrn-eq-hero">{`$$r = 7.5\\%$$`}</div>
          <p>
            The same move finds any unknown in the compound interest formula: isolate the growth
            factor, then undo the exponent.
          </p>

          <h3>Annual Percentage Yield</h3>
          <p>
            Two accounts quote different compounding, one monthly, one daily. Which pays more?
            Compare their <strong>annual percentage yield</strong> (APY): the flat once-a-year rate
            that grows your money by the same factor in one year.
          </p>
          <p>Take an account paying 6% compounded daily. Over one year the balance multiplies by</p>
          <div className="lrn-eq">{`$$\\left(1 + \\frac{6}{100 \\cdot 365}\\right)^{365} \\approx 1.06183$$`}</div>
          <p>
            A flat annual rate that multiplies by {`$1.06183$`} is {`$6.183\\%$`}. So the APY is{' '}
            {`$6.183\\%$`}, a little above the stated 6%. The extra comes from interest earning
            interest during the year.
          </p>
          <p>
            To find any APY: raise the one-period factor to the number of periods in a year,
            subtract 1, then read it as a percent. APY puts every account on the same footing.
          </p>

          <h3>Present Value</h3>
          <p>
            Now run the same formula in the other direction. You know the future amount and want
            today's amount. The <strong>present value</strong> of a future sum is the amount you
            must invest right now to reach that sum.
          </p>
          <p>Solve the compound formula for {`$\\$k$`}: divide by the growth factor.</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\$k \\;=\\; \\frac{\\$m}{\\left(1 + \\frac{r}{100}\\right)^n}$$`}</div>
          <p>
            Money grows over time, so a dollar today is worth more than a dollar in the future. A
            higher rate or a longer wait widens the gap.
          </p>

          <p>
            <strong>Example.</strong> How much must you invest today at 10% compounded semi-annually
            to have one million dollars in 10 years?
          </p>
          <p>
            Each period is half a year, so the per-period rate is {`$\\frac{10}{2} = 5\\%$`}. Over
            10 years there are {`$10 \\times 2 = 20$`} periods.
          </p>
          <div className="lrn-eq">{`$$\\text{Present value} = \\frac{1{,}000{,}000}{(1.05)^{20}} = \\frac{1{,}000{,}000}{2.6533} \\approx \\$376{,}889$$`}</div>
          <p>That one division converts any future sum into its equivalent in today's dollars.</p>

          <h3>The Loan Payment Problem</h3>
          <p>
            You borrow 10,000 dollars for three years at 6% compounded annually. You make three
            equal payments {`$P$`}, one at the end of each year. Each payment lands right after the
            bank adds that year's interest. The third payment must clear the loan. Find {`$P$`}.
          </p>
          <p>You can write the same constraint three ways. Each gives the same equation.</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Method 1: Year-by-year balance</span>
              <p className="lrn-step-content">
                Track the balance year by year. Start at 10,000. Each year, multiply the balance by
                1.06, then subtract {`$P$`}. So
              </p>
              <ol className="lrn-list">
                <li>After year 1: {`$10000 \\cdot 1.06 - P$`}.</li>
                <li>
                  After year 2: take the year-1 balance, multiply by 1.06, subtract {`$P$`}.
                  Distribute the 1.06 across both terms:{' '}
                  {`$(10000 \\cdot 1.06 - P) \\cdot 1.06 - P = 10000 \\cdot 1.06^2 - 1.06 P - P$`}.
                </li>
                <li>
                  After year 3: repeat. Distribute the new 1.06 across every term in the year-2
                  balance:{' '}
                  {`$(10000 \\cdot 1.06^2 - 1.06P - P) \\cdot 1.06 - P = 10000 \\cdot 1.06^3 - 1.06^2 P - 1.06 P - P$`}
                  .
                </li>
              </ol>
              <p className="lrn-step-content">After three rounds the balance is zero:</p>
              <div className="lrn-eq">{`$$10000 \\cdot 1.06^3 - P(1.06^2 + 1.06 + 1) = 0$$`}</div>
              <p className="lrn-step-content">
                Compute each side: {`$10000 \\cdot 1.06^3 = 10000 \\cdot 1.191016 = 11{,}910.16$`},
                and {`$1.06^2 + 1.06 + 1 = 1.1236 + 1.06 + 1 = 3.1836$`}. So
              </p>
              <div className="lrn-eq">{`$$P = \\frac{11{,}910.16}{3.1836} \\approx \\$3{,}741.10$$`}</div>
              <p className="lrn-step-content">
                That's the borrower's view: chase the balance down to zero year by year.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Method 2: Three separate loans</span>
              <p className="lrn-step-content">
                Pretend each payment pays off a separate mini-loan. The first payment pays off a
                one-year loan of {`$\\$a$`}. The second pays off a two-year loan of {`$\\$b$`}. The
                third pays off a three-year loan of {`$\\$c$`}. So {`$P = 1.06 \\, a$`},{' '}
                {`$P = 1.06^2 \\, b$`}, and {`$P = 1.06^3 \\, c$`}. Solve each for the
                mini-principal: {`$a = P/1.06$`}, {`$b = P/1.06^2$`}, {`$c = P/1.06^3$`}. The three
                principals add to the full loan:
              </p>
              <div className="lrn-eq">{`$$\\frac{P}{1.06} + \\frac{P}{1.06^2} + \\frac{P}{1.06^3} = 10000$$`}</div>
              <p className="lrn-step-content">
                Factor out {`$P$`} and add the three fractions:{' '}
                {`$0.9434 + 0.8900 + 0.8396 = 2.6730$`}. So{' '}
                {`$P = 10000 / 2.6730 \\approx \\$3{,}741.10$`}, the same answer as Method 1.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Method 3: Present value of all payments</span>
              <p className="lrn-step-content">
                Same equation, lender's view. Each {`$P/1.06^j$`} is the present value of payment{' '}
                {`$j$`}, the amount that, invested today, grows to {`$P$`} by the time payment{' '}
                {`$j$`} is due. Discount each payment (find its present value), then sum. The total
                in today's dollars must equal the 10,000 borrowed today.
              </p>
              <div className="lrn-eq">{`$$P \\left(\\frac{1}{1.06} + \\frac{1}{1.06^2} + \\frac{1}{1.06^3}\\right) = 10000$$`}</div>
              <p className="lrn-step-content">
                Solve for {`$P$`} and you get {`$\\$3{,}741.10$`} again, the lender's books and the
                borrower's books close on the same number.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY THE THREE METHODS AGREE</span>
            <p>
              Multiply Method 1 by {`$\\frac{1}{1.06^3}$`} and the equation collapses straight into
              Method 3. The three methods are the same equation written from different angles:
              borrower's balance, three sub-loans, lender's discounted income. The math doesn't care
              which view you take.
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">METHOD</span>
              <p>To set up any equal-payment loan problem:</p>
              <ol className="lrn-list">
                <li>Identify the principal, the annual rate, and the number of payments.</li>
                <li>Pick a time point, usually "today", and discount or grow everything to it.</li>
                <li>Write: (loan today) = (sum of payments, discounted to today).</li>
                <li>Solve the resulting linear equation in {`$P$`}.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <p>
                You borrow 5,000 dollars for 2 years at 8% compounded annually. Find the equal
                annual payment {`$P$`}.
              </p>
              <ol className="lrn-list">
                <li>
                  Present value equation:{' '}
                  {`$P\\left(\\frac{1}{1.08} + \\frac{1}{1.08^2}\\right) = 5000$`}.
                </li>
                <li>{`$0.9259 + 0.8573 = 1.7832$`}.</li>
                <li>Solve for {`$P$`}.</li>
              </ol>
              <details>
                <summary>Answer</summary>
                <p>{`$P = \\dfrac{5000}{1.7832} \\approx \\$2{,}803.95$`} per year.</p>
              </details>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT</span>
              <p>
                Verify your answer with Method 1. Start at 5,000. Run the year-by-year balance.
                Check that it reaches zero after two payments.
              </p>
            </div>
          </div>

          <p>
            You can now set up and solve any equal-payment loan problem given principal, rate, and
            term. When equal-bases doesn't apply, logarithms handle the rest.
          </p>
        </>,

        <>
          <h2>Summary</h2>

          <p>
            Every idea on this page comes from one move: multiplying a number by itself a chosen
            number of times. Exponential functions do that multiplying when the count sits in the
            exponent. Compound interest is the bank applying that same move to your balance every
            year. The equal-bases rule lets you compare two exponential expressions when they share
            a base. Let-substitution turns a mixed-exponential equation into a polynomial you
            already know how to solve.
          </p>
          <p>
            Given any equation with an unknown in an exponent, read the structure. If both sides
            share a base, equate exponents. If they don't but share a prime, force a common base. If
            a power-of-a-power and a single power appear together, let-substitute. Everything else
            waits for logarithms.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHAT COMES NEXT</span>
            <p>
              Logarithms are the inverse of the exponential function, the move that brings an
              unknown down out of an exponent.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `Solve $5^{3x+1} = 5^{2x-4}$.`,
        a: `$x = -5$. Both sides share base 5, so equate the exponents: $3x + 1 = 2x - 4$. Subtract $2x$ and 1 from both sides: $x = -5$. Once the bases match, the equation is just linear.`
      },
      {
        q: `Find a formula for an investment of 2,000 dollars at 7% compounded annually after $n$ years.`,
        a: `Total $= 2000 \\times (1.07)^n$. Each year the balance multiplies by $1 + \\frac{7}{100} = 1.07$. After $n$ years, you've applied that factor $n$ times. Repeated multiplication by a fixed factor is the shape of every compound interest formula.`
      },
      {
        q: `Is $-2$ in the range of $f(x) = 3^x$? Explain in one sentence.`,
        a: `No. The range of $3^x$ is all positive numbers, so it never reaches a negative value. For any real $x$, $3^x$ is a product of positive factors. Positive times positive (or one over a positive) is always positive. So $3^x = -2$ has no real solution.`
      },
      {
        q: `Solve $9^x - 28 \\cdot 3^x + 27 = 0$.`,
        a: `$x = 0$ or $x = 3$. Note $9^x = (3^x)^2$. Let $y = 3^x$, so $y^2 - 28y + 27 = 0$. Factor: $(y - 1)(y - 27) = 0$, giving $y = 1$ or $y = 27$. Translate back: $3^x = 1$ gives $x = 0$, and $3^x = 27 = 3^3$ gives $x = 3$.`
      },
      {
        q: `If $3^x = 5$, find $3^{2x+1}$.`,
        a: `$3^{2x+1} = 75$. Rewrite: $3^{2x+1} = 3 \\cdot 3^{2x} = 3 \\cdot (3^x)^2 = 3 \\cdot 5^2 = 3 \\cdot 25 = 75$. You never need the actual value of $x$. Treat $3^x$ as a known block and rebuild the target around it.`
      },
      {
        q: `Solve $25^x = 125$.`,
        a: `$x = \\frac{3}{2}$. Write both sides as powers of 5: $25 = 5^2$ and $125 = 5^3$. So $5^{2x} = 5^3$, giving $2x = 3$ and $x = \\frac{3}{2}$. Force a common base by rewriting each side as a power of the smallest shared prime.`
      },
      {
        q: `Reza borrowed 4,000 dollars. After 6 years he owes 6,000 dollars at compound annual interest. Find the interest rate.`,
        a: `$r \\approx 6.99\\%$ (about 7%). Set up: $4000\\left(1 + \\frac{r}{100}\\right)^6 = 6000$. Divide by 4000: $\\left(1 + \\frac{r}{100}\\right)^6 = 1.5$. Take the sixth root: $1 + \\frac{r}{100} = 1.5^{1/6} \\approx 1.0699$. So $r \\approx 6.99\\%$.`
      },
      {
        q: `Compute the gap after 20 years between simple and compound interest on 4,000 dollars at 8%.`,
        a: `Simple gives $4000(1 + 20 \\times 0.08) = 4000 \\times 2.6 = \\$10{,}400$. Compound gives $4000 \\times 1.08^{20} \\approx 4000 \\times 4.6610 \\approx \\$18{,}644$. The gap is about $\\$8{,}244$. Compounding adds interest on top of accumulated interest, so the gap widens fast.`
      },
      {
        q: `Solve $3^{9^x} = 9^{3^x}$ as far as the equal-bases rule will take you.`,
        a: `$3^x = 2$. Equal-bases alone can't finish this one. Write $9 = 3^2$: left side $3^{9^x}$ stays put; right side $9^{3^x} = (3^2)^{3^x} = 3^{2 \\cdot 3^x}$. Equate exponents of 3: $9^x = 2 \\cdot 3^x$, then $(3^x)^2 = 2 \\cdot 3^x$. Let $y = 3^x$. Since $y = 3^x > 0$, the $y = 0$ branch is impossible. Divide by $y$: $y = 2$. Then $3^x = 2$, which logarithms will solve.`
      },
      {
        q: `How much must you invest today at 6% compounded semi-annually to have 250,000 dollars in 12 years?`,
        a: `About $\\$122{,}983$. Semi-annual rate: $\\frac{6}{2} = 3\\%$. Periods: $12 \\times 2 = 24$. Present value $= \\frac{250{,}000}{(1.03)^{24}} = \\frac{250{,}000}{2.03279} \\approx \\$122{,}983$. (Use a calculator for $1.03^{24}$.)`
      },
      {
        q: `A substance has a 20-year half-life. After some time $t$, only $\\frac{1}{5}$ of it remains. Set up the equation for $t$ and explain why equal-bases can't finish it.`,
        a: `Setup: $\\left(\\frac{1}{2}\\right)^{t/20} = \\frac{1}{5}$. The base on the left is $\\frac{1}{2}$, but $\\frac{1}{5}$ is not a clean power of $\\frac{1}{2}$. No integer or rational exponent $k$ satisfies $(1/2)^k = 1/5$. Logarithms are the tool that finishes this kind of equation.`
      },
      {
        q: `Cesium-137 has a half-life of about 30 years. A waste sample contains $\\frac{1}{16}$ of its original cesium-137. How long ago was the sample fresh?`,
        a: `120 years. Write $\\left(\\frac{1}{2}\\right)^t = \\frac{1}{16} = \\left(\\frac{1}{2}\\right)^4$. Equal bases give $t = 4$ (in half-lives). Age $= 4 \\times 30 = 120$ years.`
      },
      {
        q: `From the chessboard story, Arial gets 631 grains on square 64 and Meena gets $2^{63}$. How many times more grains does Meena get?`,
        a: `About $1.5 \\times 10^{16}$ times more. $2^{63} \\approx 9.2 \\times 10^{18}$, so the ratio is $\\frac{9.2 \\times 10^{18}}{631} \\approx 1.5 \\times 10^{16}$.`
      },
      {
        q: `A bank doubles your deposit every 12 years. Write the multiplier as a power of 2 and find the equivalent annual percentage rate.`,
        a: `Multiplier after $t$ years is $2^{t/12}$. The annual factor is $2^{1/12}$. Compute it with a calculator's $x^y$ or $y^x$ key: $2^{1/12} \\approx 1.05946$, so $r \\approx 5.95\\%$. Each year the balance multiplies by about 1.0595, and 12 such multiplications give 2.`
      },
      {
        q: `You borrow 6,000 dollars for 3 years at 7% compounded annually. Find the equal annual payment $P$.`,
        a: `$P \\approx \\$2{,}286.31$. Use present value: $P\\left(\\frac{1}{1.07} + \\frac{1}{1.07^2} + \\frac{1}{1.07^3}\\right) = 6000$. Compute $\\frac{1}{1.07} \\approx 0.9346$, $\\frac{1}{1.07^2} \\approx 0.8734$, and $\\frac{1}{1.07^3} \\approx 0.8163$. Their sum is $\\approx 2.6243$. So $P = \\frac{6000}{2.6243} \\approx \\$2{,}286.31$.`
      },
      {
        q: `You invest 1,000 dollars at 100% annual interest compounded continuously (using $e$). How much do you have after 1 year?`,
        a: `About $\\$2{,}718.28$. Continuous compounding at 100% multiplies by $e^1 = e \\approx 2.71828$. Compounding once a year would give $\\$2{,}000$. Compounding more and more often pushes the total toward $\\$e \\cdot 1000$, the ceiling.`
      },
      {
        q: `Verify the 6,000-dollar loan answer ($P \\approx 2{,}286.31$) using Method 1: run the year-by-year balance and check that it reaches zero.`,
        a: `Start at 6000. Year 1: $6000 \\times 1.07 - 2286.31 = 6420 - 2286.31 = 4133.69$. Year 2: $4133.69 \\times 1.07 - 2286.31 = 4423.05 - 2286.31 = 2136.74$. Year 3: $2136.74 \\times 1.07 - 2286.31 = 2286.31 - 2286.31 = 0$. The balance hits zero exactly, confirming $P$.`
      },
      {
        q: `Which of these are exponential functions: $f(x) = x^2$, $g(x) = 2^x$, $h(x) = 2x$, $p(x) = x^x$?`,
        a: `Only $g(x) = 2^x$. An exponential function has the variable in the exponent and a fixed base. $f(x) = x^2$ is a polynomial (variable in the base). $h(x) = 2x$ is linear. $p(x) = x^x$ has the variable in both places, so it's neither exponential nor polynomial.`
      },
      {
        q: `State the domain, range, and horizontal asymptote of $f(x) = 4^x$.`,
        a: `Domain: all real numbers. Range: all positive numbers. Horizontal asymptote: $y = 0$. The base 4 is positive, so $4^x > 0$ for every real $x$. As $x$ grows large and negative, $4^x$ shrinks toward 0 but never touches it.`
      },
      {
        q: `The graph of $f(x) = a^x$ passes through the point $(2, 49)$. Find the base and write the function.`,
        a: `$a = 7$, so $f(x) = 7^x$. Plug in the point: $a^2 = 49$. A base is always positive, so take the positive square root: $a = 7$. Every $a^x$ also passes through $(0, 1)$, so this one extra point fixes the base.`
      },
      {
        q: `The graph of $f(x) = a^x$ passes through $\\left(2, \\frac{1}{9}\\right)$. Find the base.`,
        a: `$a = \\frac{1}{3}$. Solve $a^2 = \\frac{1}{9}$ and take the positive root: $a = \\frac{1}{3}$. The base sits between 0 and 1, so this is a decay curve.`
      },
      {
        q: `An account pays 4% compounded quarterly. Find the annual percentage yield (APY).`,
        a: `APY $\\approx 4.06\\%$. Each quarter charges $\\frac{4}{4} = 1\\%$, applied 4 times, so the yearly factor is $\\left(1 + \\frac{4}{100 \\times 4}\\right)^4 = 1.01^4 \\approx 1.04060$. Subtract 1 and read as a percent: about $4.06\\%$.`
      },
      {
        q: `Why does the graph of $f(x) = e^x$ lie between $y = 2^x$ and $y = 3^x$?`,
        a: `Because $2 < e < 3$. For any $x > 0$, a bigger base gives a bigger power, so $2^x < e^x < 3^x$. Since $e \\approx 2.718$, its curve is squeezed between the base-2 and base-3 curves. $f(x) = e^x$ is the natural exponential function.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Exponential Functions',
      sections: [
        <>
          <h2>Exponential Functions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">General exponential function</span>
            <div className="lrn-definition-desc">
              <p>
                {`$f(x) = a^x$`} with {`$a > 0$`} and {`$a \\ne 1$`}.
              </p>
              <p>(Learning treated {`$a > 1$`}; reference admits any positive base except 1.)</p>
              <p>
                Use: model any quantity that changes by multiplying by a fixed factor each step. If{' '}
                {`$a > 1$`}, the function grows. If {`$0 < a < 1$`}, the function decays. Every
                other property still applies.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Equal-bases rule</span>
            <div className="lrn-definition-desc">
              <p>
                {`$a^m = a^n \\Rightarrow m = n$`} (for {`$a > 0$`}, {`$a \\ne 1$`})
              </p>
              <p>
                We leave out {`$a = 1$`} because {`$1^m = 1^n$`} for every {`$m, n$`}, the rule
                would give nothing.
              </p>
              <p>Use: solve exponential equations where both sides share the same base.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Half-life equation</span>
            <div className="lrn-definition-desc">
              <p>{`$\\left(\\frac{1}{2}\\right)^{t/T} = \\frac{a}{b}$`}</p>
              <p>
                {`$a/b$`} is the fraction of the substance still present. {`$T$`} is the half-life
                of that substance, the fixed time it takes for half of any sample to disappear.{' '}
                {`$t$`} is elapsed time in the same units as {`$T$`}.
              </p>
              <p>
                Use: find the age of a sample when you know the fraction remaining. Carbon-14 has{' '}
                {`$T = 5{,}730$`} years; cesium-137 has {`$T \\approx 30$`} years.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Domain of {`$f(x) = a^x$`}</td>
                <td>All real numbers</td>
              </tr>
              <tr>
                <td>Range of {`$f(x) = a^x$`}</td>
                <td>All positive real numbers</td>
              </tr>
              <tr>
                <td>x-intercept</td>
                <td>None</td>
              </tr>
              <tr>
                <td>y-intercept</td>
                <td>{`$(0, 1)$`}</td>
              </tr>
              <tr>
                <td>For very large negative {`$x$`}</td>
                <td>Approaches 0 (horizontal asymptote {`$y = 0$`})</td>
              </tr>
              <tr>
                <td>
                  For very large positive {`$x$`} (when {`$a > 1$`})
                </td>
                <td>Grows without bound</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Interest Formulas</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$m$`}-times-per-year compounding</span>
            <div className="lrn-definition-desc">
              <p>{`$\\$k \\left(1 + \\frac{r}{100m}\\right)^{nm}$`}</p>
              <p>
                Use: compute total when interest compounds {`$m$`} times per year for {`$n$`} years.{' '}
                {`$m = 1$`} recovers annual compounding; {`$m \\to \\infty$`} gives continuous
                compounding (see Euler's number).
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Annual percentage yield (APY)</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\text{APY} = \\left(1 + \\frac{r}{100m}\\right)^{m} - 1$`} (read as a percent)
              </p>
              <p>
                The flat once-a-year rate that grows a balance by the same factor in one year as{' '}
                {`$m$`}-times compounding at rate {`$r\\%$`}. Use: compare accounts with different
                compounding frequencies on equal footing.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Euler's number (continuous compounding)</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\left(1 + \\frac{1}{m}\\right)^m$`} settles toward {`$e \\approx 2.71828$`} as{' '}
                {`$m$`} grows without bound.
              </p>
              <p>
                The function {`$f(x) = e^x$`} is the <strong>natural exponential function</strong>.
                Since {`$2 < e < 3$`}, its graph lies between {`$y = 2^x$`} and {`$y = 3^x$`}.
              </p>
              <p>
                For principal {`$\\$k$`} at rate {`$r\\%$`} over {`$n$`} years, the continuously
                compounded amount is {`$\\$k \\cdot e^{\\tfrac{rn}{100}}$`}. That's the ceiling the{' '}
                {`$m$`}-times formula approaches as {`$m$`} grows.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Depreciation / decay multiplier</span>
            <div className="lrn-definition-desc">
              <p>{`$\\$k \\left(1 - \\frac{r}{100}\\right)^n$`}</p>
              <p>
                Use: compute the value left after {`$n$`} years when a quantity loses {`$r\\%$`} of
                its current value each year. Same shape as the growth formula with a minus sign; the
                factor {`$(1 - r/100)$`} is between 0 and 1, so the curve decays.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Present value</span>
            <div className="lrn-definition-desc">
              <p>{`$\\$k = \\frac{\\$m}{\\left(1 + \\frac{r}{100}\\right)^n}$`}</p>
              <p>
                Use: find the amount to invest today at rate {`$r\\%$`} to reach {`$\\$m$`} in{' '}
                {`$n$`} years.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Key Techniques</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Problem type</th>
                <th>Technique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Same base, different exponents</td>
                <td>Equal-bases rule: equate exponents</td>
              </tr>
              <tr>
                <td>Graph through a known point</td>
                <td>
                  Plug the point into {`$a^x$`}; solve for the base {`$a$`}
                </td>
              </tr>
              <tr>
                <td>Compare different compounding</td>
                <td>Annual percentage yield: one-year factor minus 1</td>
              </tr>
              <tr>
                <td>Different bases that share a prime</td>
                <td>Rewrite each side as a power of that prime</td>
              </tr>
              <tr>
                <td>{`Mixed exponential ($4^x$ and $2^x$)`}</td>
                <td>{`Let-substitution $y = 2^x$ turns it into a polynomial`}</td>
              </tr>
              <tr>
                <td>Unknown rate</td>
                <td>Isolate growth factor, then take {`$n$`}th root</td>
              </tr>
              <tr>
                <td>Unknown principal (present value)</td>
                <td>Divide by the growth factor</td>
              </tr>
              <tr>
                <td>Equal payments on a loan</td>
                <td>Discount each payment, sum equals principal</td>
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

export default function ExponentialFunctions() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
