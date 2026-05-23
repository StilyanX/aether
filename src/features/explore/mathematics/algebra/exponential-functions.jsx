import 'katex/dist/katex.min.css'
import { LearningTemplate } from '../../../../components/learning/learning-template'

import {
  CompoundVsSimpleViz,
  EqualBasesViz,
  ExponentialGraphViz,
  GrowthComparisonViz,
  InteractiveExponentialViz,
  LogSolvingViz,
  LogarithmGraphViz
} from '../../../../components/viz'
// ── Visualizations ─────────────────────────────────────────────────────────────

// ── Config ─────────────────────────────────────────────────────────────────────

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
            An <strong>exponential function</strong> puts the variable in the exponent. You write it
            as {`$f(x) = a^x$`}, where {`$a > 1$`}. The base {`$a$`} is a fixed number. The exponent{' '}
            {`$x$`} is the input you change.
          </p>
          <p>
            This is the opposite of a polynomial like {`$x^2$`}. In {`$x^2$`} the variable is the
            base. In {`$2^x$`} the base is fixed and the variable is the power. Exponential
            functions describe anything that grows by multiplying by the same factor each step:
            populations, money in a bank, radioactive material as it decays.
          </p>

          <h3>The Chessboard Story</h3>
          <p>
            Two friends, Arial and Meena, ask a king for grains of rice on a chessboard. A
            chessboard has 64 squares.
          </p>
          <p>
            Arial asks for 1 grain on square 1, then 10 more grains on every square after that. So
            she gets 1, 11, 21, 31, and so on. Her rule is {`$A(n) = 10n - 9$`}. This is{' '}
            <strong>linear growth</strong>: a fixed amount added each step.
          </p>
          <p>
            Meena asks for 1 grain on square 1, then double the previous square every time after
            that. So she gets 1, 2, 4, 8, 16. Her rule is {`$M(n) = 2^{n-1}$`}. This is{' '}
            <strong>exponential growth</strong>: a fixed factor multiplied each step.
          </p>
          <p>
            On square 64, Arial gets {`$A(64) = 631$`} grains. Meena gets {`$M(64) = 2^{63}$`} a
            number larger than all the rice ever grown in human history. The king learned the hard
            way that multiplication outruns addition.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Linear growth adds the same amount every time. Exponential growth makes each new gain
              proportional to the current total, so the increments themselves keep doubling. Once
              you compare additions against ever-larger multiplications, multiplication always wins.
              No matter how steep the line, an exponential curve eventually overtakes it.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">LINEAR (ARIAL)</span>
              <p>{`$A(n) = 10n - 9$`}</p>
              <p>Adds a fixed number each step.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">EXPONENTIAL (MEENA)</span>
              <p>{`$M(n) = 2^{n-1}$`}</p>
              <p>Multiplies by a fixed factor each step.</p>
            </div>
          </div>

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
            For large negative {`$x$`}, the value is close to zero but never reaches it. As {`$x$`}{' '}
            crosses zero, {`$f(0) = 1$`}. Then the curve climbs faster and faster as {`$x$`} grows.
            The <strong>domain</strong> is all real numbers you can raise 2 to any power. The{' '}
            <strong>range</strong> is all positive numbers. {`$2^x$`} is never zero and never
            negative, because multiplying any number of positive 2's gives a positive answer.
          </p>

          <div className="lrn-graph">
            <ExponentialGraphViz />
          </div>

          <div className="lrn-graph">
            <InteractiveExponentialViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">EXPLORE</span>
            <p>
              Drag the point along {`$f(x) = 2^x$`}. What happens to the output for negative {`$x$`}
              ? What happens between {`$x = 2$`} and {`$x = 3$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                For negative {`$x$`}, the output stays tiny but stays positive. Each unit step right
                doubles the output. From {`$x = 2$`} to {`$x = 3$`} the value jumps from 4 to 8 the
                same step earlier (0 to 1) only added 1. The graph never repeats a value, which is
                exactly the property the next section relies on.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>The Equal-Bases Rule</h2>

          <p>
            If two powers have the same base and the same value, their exponents must match. In
            symbols: if {`$a^m = a^n$`} and {`$a > 1$`}, then {`$m = n$`}. This is the{' '}
            <strong>equal-bases rule</strong>.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The function {`$f(x) = a^x$`} with {`$a > 1$`} always climbs. It never gives the same
              output twice. Look at the graph below: any horizontal line crosses the curve at most
              once. So if {`$a^m$`} and {`$a^n$`} produce the same height, they had to come from the
              same input. Therefore {`$m = n$`}.
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
            That is the whole method. The hard part was spotting that both sides shared a base. Once
            spotted, the exponential equation became a linear one you already know how to solve.
          </p>

          <h3>Forcing a Common Base</h3>
          <p>
            What if the bases look different? Often you can rewrite them as powers of the same
            smaller number. Solve {`$2^{16^x} = 16^{2^x}$`} (a Mandelbrot competition problem).
          </p>
          <p>Note that {`$16 = 2^4$`}. Rewrite each side as a tower of 2:</p>
          <ul className="lrn-list">
            <li>Left side: {`$2^{16^x}$`}.</li>
            <li>Right side: {`$16^{2^x} = (2^4)^{2^x} = 2^{4 \\cdot 2^x}$`}.</li>
          </ul>
          <p>Both sides are now powers of 2, so equate the top-level exponents:</p>
          <div className="lrn-eq">{`$$16^x = 4 \\cdot 2^x$$`}</div>
          <p>
            Rewrite {`$16^x = (2^4)^x = 2^{4x}$`} and {`$4 \\cdot 2^x = 2^2 \\cdot 2^x = 2^{x+2}$`}:
          </p>
          <div className="lrn-eq">{`$$2^{4x} = 2^{x+2}$$`}</div>
          <p>Equate exponents one more time:</p>
          <div className="lrn-eq">{`$$4x = x + 2$$`}</div>
          <div className="lrn-eq lrn-eq-hero">{`$$x = \\frac{2}{3}$$`}</div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch your exponent rules</span>
            <p>
              Two rules get mixed up here. The correct ones are {`$(a^b)^c = a^{bc}$`} and{' '}
              {`$a^b \\cdot a^c = a^{b+c}$`}. There is no rule that says {`$(a^b)^c = a^{b+c}$`},
              and {`$a^m \\cdot b^n$`} with different bases cannot be combined at all.
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">METHOD</span>
              <p>To force a common base, in order:</p>
              <ol className="lrn-list">
                <li>Find the smallest base that divides every number ({`$2$`} here).</li>
                <li>Rewrite every number as a power of that base.</li>
                <li>Use {`$(a^b)^c = a^{bc}$`} to flatten each side.</li>
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
                <li>Solve: {`$x = ?$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT</span>
              <p>Solve {`$9^x = 27$`} by writing both sides as powers of 3.</p>
            </div>
          </div>

          <h3>Substitution: When You Cannot Find x</h3>
          <p>
            Sometimes a problem asks for an expression in {`$x$`}, not for {`$x$`} itself. Suppose{' '}
            {`$2^x = 6$`}. Evaluate {`$2^{3x-1}$`}.
          </p>
          <p>
            You cannot find {`$x$`} by hand no neat power of 2 equals 6. But you do not have to.
            Rewrite the target using the rule {`$2^{3x} = (2^x)^3$`}:
          </p>
          <div className="lrn-eq">{`$$2^{3x-1} = \\frac{2^{3x}}{2^1} = \\frac{(2^x)^3}{2} = \\frac{6^3}{2} = \\frac{216}{2} = 108$$`}</div>
          <p>
            The trick is to treat {`$2^x$`} as a known quantity and shape the unknown expression
            until {`$2^x$`} appears as a block you can replace.
          </p>

          <h3>Turning an Exponential into a Quadratic</h3>
          <p>
            Sometimes one substitution converts an exponential equation into a polynomial you can
            factor. Solve {`$4^x - 33 \\cdot 2^{x-1} + 8 = 0$`}.
          </p>
          <p>
            Write every exponential as a power of 2: {`$4^x = (2^2)^x = (2^x)^2$`}, and{' '}
            {`$2^{x-1} = \\frac{2^x}{2}$`}. Let {`$y = 2^x$`}. The equation becomes
          </p>
          <div className="lrn-eq">{`$$y^2 - \\frac{33y}{2} + 8 = 0$$`}</div>
          <p>Multiply through by 2 and factor:</p>
          <div className="lrn-eq">{`$$2y^2 - 33y + 16 = 0$$`}</div>
          <div className="lrn-eq">{`$$(2y - 1)(y - 16) = 0$$`}</div>
          <p>
            So {`$y = \\tfrac{1}{2}$`} or {`$y = 16$`}. Translate back through {`$y = 2^x$`}:
          </p>
          <ul className="lrn-list">
            <li>
              {`$2^x = \\tfrac{1}{2} = 2^{-1}$`} gives {`$x = -1$`}.
            </li>
            <li>
              {`$2^x = 16 = 2^4$`} gives {`$x = 4$`}.
            </li>
          </ul>

          <h3>Carbon-14 Dating</h3>
          <p>
            Living things absorb a steady mix of carbon-12 and the radioactive carbon-14. When an
            animal or plant dies, no new carbon-14 comes in, and the carbon-14 inside decays.
            Roughly half of any sample of carbon-14 disappears every 5,700 years. That fixed time is
            its <strong>half-life</strong>.
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
            Write the right side with base {`$\\tfrac{1}{2}$`}:{' '}
            {`$\\tfrac{1}{4} = \\left(\\tfrac{1}{2}\\right)^2$`}. Equal bases give equal exponents,
            so {`$t = 2$`}. Two half-lives is {`$2 \\times 5700 = 11{,}400$`} years.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">THE GENERAL EQUATION</span>
            <p>
              If a fossil keeps a fraction {`$\\frac{a}{b}$`} of its original carbon-14, then{' '}
              {`$\\left(\\tfrac{1}{2}\\right)^t = \\frac{a}{b}$`} and the fossil's age is{' '}
              {`$5700t$`} years. When {`$\\frac{a}{b}$`} is not a clean power of {`$\\tfrac{1}{2}$`}
              , you cannot use the equal-bases rule. You need logarithms which arrive a few sections
              from now.
            </p>
          </div>
        </>,

        <>
          <h2>Show Me the Money</h2>

          <p>
            A bank loan is a real-world exponential function. The <strong>principal</strong> is the
            money you start with what you borrow or invest. The <strong>interest rate</strong>{' '}
            {`$r$`} is a percentage that decides how much extra money is added on top each year. The
            total is the original amount plus all the interest.
          </p>
          <p>
            There are two ways banks add interest: simple and compound. The difference is the
            difference between addition and multiplication. Both matter, but compound is far more
            common.
          </p>

          <h3>Simple Interest</h3>
          <p>
            With <strong>simple interest</strong>, the bank charges {`$r\\%$`} of the original
            amount every year. The fee stays the same forever. Invest {`$\\$k$`} at rate {`$r\\%$`}{' '}
            for {`$n$`} years and the total is
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\$k \\left(1 + \\frac{nr}{100}\\right)$$`}</div>
          <p>
            That is a linear formula. If Jayne invests 5,000 dollars at 9% simple interest, she
            earns {`$0.09 \\times 5000 = 450$`} dollars every single year. After 3 years she has{' '}
            {`$5000 + 3 \\times 450 = \\$6{,}350$`}. The 9% never applies to anything except the
            original 5,000.
          </p>

          <h3>Compound Interest</h3>
          <p>
            With <strong>compound interest</strong>, the bank adds the interest to your balance at
            the end of each year. The next year, the new interest is calculated on the bigger
            balance. You earn interest on interest.
          </p>
          <p>
            Start with {`$\\$k$`} at rate {`$r\\%$`}. After one year, the balance multiplies by{' '}
            {`$\\left(1 + \\frac{r}{100}\\right)$`}. After two years it multiplies by that factor
            twice. After {`$n$`} years:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\$k \\left(1 + \\frac{r}{100}\\right)^n$$`}</div>
          <p>
            The variable {`$n$`} sits in the exponent. That is exactly Meena's chessboard pattern,
            in dollars instead of rice.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">SIMPLE VS COMPOUND IN ONE LINE</span>
            <p>
              Simple interest adds the same dollar amount each year. Compound interest multiplies
              the balance by the same factor each year. Addition is linear. Multiplication is
              exponential. Over decades the difference is enormous.
            </p>
          </div>

          <p>Now redo Jayne's investment at 9% compounded annually. Multiply by 1.09 each year:</p>
          <ul className="lrn-list">
            <li>Year 1: {`$5000 \\times 1.09 = \\$5{,}450.00$`} (same as simple).</li>
            <li>Year 2: {`$5000 \\times 1.09^2 = \\$5{,}940.50$`} (simple gives 5,900).</li>
            <li>Year 3: {`$5000 \\times 1.09^3 \\approx \\$6{,}475.15$`} (simple gives 6,350).</li>
          </ul>
          <p>
            Year 1 ties because compounding hasn't kicked in yet. Year 2 compounds the interest on
            the new 5,450, not on the original 5,000. By year 30 the compound balance is roughly
            66,000 while simple is only 18,500.
          </p>

          <div className="lrn-graph">
            <CompoundVsSimpleViz />
          </div>

          <h3>Compounding More Than Once a Year</h3>
          <p>
            Banks often compound more frequently every six months, every quarter, every month, even
            every day. The annual rate {`$r\\%$`} stays the same, but they split it into {`$m$`}{' '}
            equal pieces and apply each piece in turn. So the per-period rate is{' '}
            {`$\\frac{r}{100m}$`}, and over {`$n$`} years there are {`$nm$`} periods. Multiplying
            once per period gives the general formula:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\$k \\left(1 + \\frac{r}{100m}\\right)^{nm}$$`}</div>
          <p>
            When {`$m = 1$`} this is the annual compound formula. When {`$m = 12$`} it's monthly
            compounding. The exponent grows with {`$m$`}, but the per-period factor shrinks. The two
            effects nearly cancel but not quite.
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
            More compounding does grow the total, but the gains shrink fast. After about 100,000
            compounds per year, every extra compounding adds less than a penny. There is a hard
            ceiling.
          </p>

          <h3>Euler's Number {`$e$`}</h3>
          <p>
            The ceiling has a name. Look at the simplest case of the compounding formula: one
            dollar, 100% annual rate, compounded {`$m$`} times. The total after one year is{' '}
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
            The values get closer and closer to a fixed number. As {`$m \\to \\infty$`}, this
            expression approaches a constant called <strong>Euler's number</strong>:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$e = \\lim_{m \\to \\infty} \\left(1 + \\frac{1}{m}\\right)^m \\approx 2.71828\\ldots$$`}</div>
          <p>
            The number {`$e$`} is the ceiling for one-dollar, 100%, infinite-compounding. For a
            general principal {`$\\$k$`}, rate {`$r\\%$`}, and {`$n$`} years, the continuously
            compounded total is {`$\\$k \\, e^{\\tfrac{rn}{100}}$`}. The digits of {`$e$`} never end
            and never repeat, like {`$\\pi$`}. It will appear again every time growth or decay
            happens smoothly rather than in discrete steps.
          </p>
        </>,

        <>
          <h2>Interest-ing Problems</h2>

          <p>
            Real problems run the formula backwards. You know the final amount and need the rate, or
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

          <h3>Present Value</h3>
          <p>
            Now run the same formula in the other direction. You know the future amount and want
            today's amount. The <strong>present value</strong> of a future sum is what you would
            have to invest right now to reach that sum.
          </p>
          <p>Solve the compound formula for {`$\\$k$`}: divide by the growth factor.</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{Present value} = \\frac{\\$m}{\\left(1 + \\frac{r}{100}\\right)^n}$$`}</div>
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

          <h3>The Loan Payment Problem</h3>
          <p>
            You borrow 10,000 dollars for three years at 6% compounded annually. You make three
            equal payments {`$P$`}, one at the end of each year, right after the year's interest is
            added. The loan must be fully paid off after the third payment. Find {`$P$`}.
          </p>
          <p>The same constraint can be written in three ways. Each gives the same equation.</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Method 1: Year-by-year balance</span>
              <p className="lrn-step-content">
                Track what is owed year by year. Start at 10,000. Each year, multiply the balance by
                1.06, then subtract {`$P$`}. After three rounds the balance is zero:
              </p>
              <div className="lrn-eq">{`$$10000 \\cdot 1.06^3 - P(1.06^2 + 1.06 + 1) = 0$$`}</div>
              <div className="lrn-eq">{`$$P = \\frac{11{,}910.16}{3.1836} \\approx \\$3{,}741.10$$`}</div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Method 2: Three separate loans</span>
              <p className="lrn-step-content">
                Pretend each payment pays off a separate mini-loan. The first payment pays off a
                one-year loan of {`$\\$a$`}, the second a two-year loan of {`$\\$b$`}, the third a
                three-year loan of {`$\\$c$`}. So {`$P = 1.06 \\, a$`}, {`$P = 1.06^2 \\, b$`},{' '}
                {`$P = 1.06^3 \\, c$`}. Together the three principals add to the loan:
              </p>
              <div className="lrn-eq">{`$$\\frac{P}{1.06} + \\frac{P}{1.06^2} + \\frac{P}{1.06^3} = 10000$$`}</div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Method 3: Present value of all payments</span>
              <p className="lrn-step-content">
                Discount each future payment back to today's value, then sum them. The total of
                today's-dollar amounts must equal the 10,000 borrowed today:
              </p>
              <div className="lrn-eq">{`$$P \\left(\\frac{1}{1.06} + \\frac{1}{1.06^2} + \\frac{1}{1.06^3}\\right) = 10000$$`}</div>
              <div className="lrn-eq">{`$$P \\times 2.6730 = 10000 \\implies P \\approx \\$3{,}741.10$$`}</div>
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
                <li>Pick a time point usually "today" and discount or grow everything to it.</li>
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
                <li>Solve: {`$P = ?$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT</span>
              <p>
                Verify your answer with Method 1: start at 5,000, run the year-by-year balance, and
                check that it reaches zero after two payments.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>What is a Logarithm?</h2>

          <p>
            An exponent tells you how many times to multiply a base by itself. A{' '}
            <strong>logarithm</strong> asks the opposite question: given a base and a result, what
            exponent did we use? Write it as
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\log_a(b) = c \\quad\\Longleftrightarrow\\quad a^c = b$$`}</div>
          <p>
            The two forms carry identical information. {`$a$`} is the <strong>base</strong>, {`$b$`}{' '}
            is the <strong>argument</strong>, and {`$c$`} is the answer. Read {`$\\log_2(32) = 5$`}{' '}
            aloud as "the log base 2 of 32 is 5," which is just another way to say {`$2^5 = 32$`}.
          </p>
          <p>
            The base must be positive and not equal to 1. The argument must be positive there is no
            exponent on a positive base that produces zero or a negative number.
          </p>

          <h3>Evaluating Logarithms</h3>
          <p>
            The strategy is always the same: write the argument as a power of the base, then read
            off the exponent.
          </p>
          <ol className="lrn-list">
            <li>
              {`$\\log_3(81) = 4$`}, because {`$3^4 = 81$`}.
            </li>
            <li>
              {`$\\log_{10}(100{,}000) = 5$`}, because {`$10^5 = 100{,}000$`}.
            </li>
            <li>
              {`$\\log_8(2) = \\tfrac{1}{3}$`}, because {`$8^{\\tfrac{1}{3}} = 2$`}.
            </li>
            <li>
              {`$\\log_5(\\sqrt[3]{25}) = \\tfrac{2}{3}$`}, because{' '}
              {`$\\sqrt[3]{25} = 25^{\\tfrac{1}{3}} = 5^{\\tfrac{2}{3}}$`}.
            </li>
            <li>
              {`$\\log_2(\\tfrac{1}{8}) = -3$`}, because {`$\\tfrac{1}{8} = 2^{-3}$`}.
            </li>
            <li>
              {`$\\log_{\\tfrac{1}{2}}(\\sqrt{2}) = -\\tfrac{1}{2}$`}, because{' '}
              {`$\\sqrt{2} = \\left(\\tfrac{1}{2}\\right)^{-\\tfrac{1}{2}}$`}.
            </li>
          </ol>
          <p>
            When the base and argument do not share an obvious power, rewrite both as powers of the
            same smaller number. For example, {`$\\log_4(\\tfrac{1}{8})$`}: write {`$4 = 2^2$`} and{' '}
            {`$\\tfrac{1}{8} = 2^{-3}$`}. Then {`$(2^2)^x = 2^{-3}$`} gives {`$2x = -3$`}, so{' '}
            {`$x = -\\tfrac{3}{2}$`}.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch out</span>
            <p>
              {`$\\log_a(b + c)$`} is not {`$\\log_a(b) + \\log_a(c)$`}. Check:{' '}
              {`$\\log_2(4 + 4) = \\log_2(8) = 3$`}, but {`$\\log_2(4) + \\log_2(4) = 4$`}.
              Logarithms split across multiplication, not addition (more on that below).
            </p>
          </div>

          <h3>The Identity log_a(a^p) = p</h3>
          <p>The definition itself produces one identity you will use constantly:</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\log_a(a^p) = p$$`}</div>
          <p>
            The question "what exponent on {`$a$`} gives {`$a^p$`}?" answers itself: it's {`$p$`}.
            This is not a separate rule to memorize it's the definition stated forwards.
          </p>

          <h3>Graphing log_3(x)</h3>
          <p>
            Build a table by reading the exponent off each power of 3. The graph of {`$\\log_3(x)$`}{' '}
            climbs slowly. Its <strong>domain</strong> is {`$x > 0$`} (the argument of a log must be
            positive). Its <strong>range</strong> is all real numbers. The graph crosses the x-axis
            at {`$x = 1$`}, because {`$\\log_3(1) = 0$`}.
          </p>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$x$`}</th>
                <th>{`$\\log_3(x)$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\tfrac{1}{9}$`}</td>
                <td>-2</td>
              </tr>
              <tr>
                <td>{`$\\tfrac{1}{3}$`}</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1</td>
              </tr>
              <tr>
                <td>9</td>
                <td>2</td>
              </tr>
              <tr>
                <td>27</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-graph">
            <LogarithmGraphViz />
          </div>

          <h3>Logarithms and Exponentials are Inverses</h3>
          <p>
            The graph above plots {`$3^x$`} and {`$\\log_3(x)$`} together. They are reflections of
            each other across the line {`$y = x$`}. That mirror image is the visible signature of{' '}
            <strong>inverse functions</strong>: each undoes what the other did.
          </p>
          <div className="lrn-proof">
            <p>
              <strong>Proof.</strong> Let {`$f(x) = \\log_3(x)$`} and {`$g(x) = 3^x$`}.
            </p>
            <p>
              Compose one way: {`$f(g(x)) = \\log_3(3^x) = x$`} (by the identity{' '}
              {`$\\log_a(a^p) = p$`}).
            </p>
            <p>
              Compose the other way: {`$g(f(x)) = 3^{\\log_3(x)} = x$`} (because {`$\\log_3(x)$`} is
              exactly the exponent that turns 3 into {`$x$`}).
            </p>
            <p>Both compositions return {`$x$`}, so the two functions are inverses.</p>
          </div>
          <p>
            Notice how the domain and range swap. The exponential takes any real input and produces
            a positive output; the logarithm takes any positive input and produces a real output.
          </p>

          <h3>Common Log and Natural Log</h3>
          <p>
            Two bases get special shorthand. <strong>Common log</strong>, written just "log" without
            a base, means base 10. It matches our decimal system, so scientists use it for things
            like decibels and pH. <strong>Natural log</strong>, written "ln", means base {`$e$`}. It
            makes calculus formulas cleaner, so mathematicians and physicists prefer it. When you
            see a log with no base, check the context scientists default to 10, mathematicians
            default to {`$e$`}.
          </p>

          <h3>The Richter Scale</h3>
          <p>
            An earthquake's Richter magnitude is the base-10 logarithm of how much ground moved
            compared to a tiny reference movement:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{magnitude} = \\log_{10}\\left(\\frac{M}{M_c}\\right)$$`}</div>
          <p>
            Here {`$M$`} is the measured shaking and {`$M_c$`} is a fixed reference. Because the
            scale is logarithmic, each step up means ten times the displacement. A magnitude 8
            earthquake shakes the ground 100 times harder than a magnitude 6, even though the
            numbers only differ by 2. The scale exists because raw displacements vary by factors of
            millions much easier to talk about a 7 than about a 10-million-fold movement.
          </p>

          <h3>Logarithms Split Across Multiplication</h3>
          <p>
            Logarithms turn products into sums. For any positive {`$b$`} and {`$c$`} (same base
            throughout):
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\log_a(bc) = \\log_a(b) + \\log_a(c)$$`}</div>
          <p>
            Check with numbers: {`$\\log_{10}(4) + \\log_{10}(5) = \\log_{10}(20)$`}. This is the
            rule that made the slide rule possible multiplication done by sliding two log-marked
            rulers and reading off the sum. You will use this rule and its cousins (
            {`$\\log_a\\!\\left(\\frac{b}{c}\\right) = \\log_a(b) - \\log_a(c)$`} and{' '}
            {`$\\log_a(b^n) = n \\log_a(b)$`}) constantly in the next chapter.
          </p>

          <h3>The Rule of 72</h3>
          <p>
            At {`$r\\%$`} annual compound interest, your money roughly doubles every{' '}
            {`$\\tfrac{72}{r}$`} years. At 6%, doubling takes about {`$\\frac{72}{6} = 12$`} years.
            At 8%, about {`$\\frac{72}{8} = 9$`} years.
          </p>
          <p>
            The exact doubling time solves {`$\\left(1 + \\frac{r}{100}\\right)^t = 2$`}. Take logs
            and you get {`$t = \\log_{1 + \\tfrac{r}{100}}(2)$`}, which for small {`$r$`} is close
            to {`$\\frac{69.3}{r}$`}. The number 72 is used instead of 69.3 because 72 has many
            small divisors (2, 3, 4, 6, 8, 9, 12), so the division is easy to do in your head.
          </p>
        </>,

        <>
          <h2>Solving Logarithmic Equations</h2>

          <p>
            One move solves almost every logarithm equation: convert from log form to exponential
            form. The statement {`$\\log_a(b) = c$`} carries the exact same content as {`$a^c = b$`}
            , and you already have lots of algebra tools for working with exponents. Rewriting puts
            the problem in familiar territory.
          </p>

          <h3>Finding an Unknown Base</h3>
          <p>
            Find base {`$n$`} such that {`$\\log_n(3) = -\\tfrac{3}{2}$`}. Convert to exponential
            form first:
          </p>
          <div className="lrn-eq">{`$$n^{-\\tfrac{3}{2}} = 3$$`}</div>
          <p>
            Now {`$n$`} is the base of a power, not buried inside a log. To isolate it, raise both
            sides to the {`$-\\tfrac{2}{3}$`} power. That power undoes the {`$-\\tfrac{3}{2}$`} on
            the left because {`$(-\\tfrac{3}{2}) \\cdot (-\\tfrac{2}{3}) = 1$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$n = 3^{-\\tfrac{2}{3}} = \\frac{1}{3^{\\tfrac{2}{3}}} = \\frac{1}{\\sqrt[3]{9}}$$`}</div>

          <div className="lrn-graph">
            <LogSolvingViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">EXPLORE</span>
            <p>
              Drag the point along {`$\\log_3(x)$`}. What happens to the output when you double the
              input? What happens for inputs less than 1?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Doubling the input adds {`$\\log_3(2) \\approx 0.63$`} to the output, not double.
                For inputs below 1, the output is negative. The curve is a mirror image of {`$3^x$`}
                : where the exponential's input goes negative, the log's output goes negative.
              </p>
            </details>
          </div>

          <h3>Combining Conversion with the Equal-Bases Rule</h3>
          <p>Evaluate {`$\\log_{3\\sqrt{3}}\\left(\\tfrac{1}{81}\\right)$`}.</p>
          <p>Call the answer {`$x$`} and convert to exponential form:</p>
          <div className="lrn-eq">{`$$(3\\sqrt{3})^x = \\frac{1}{81}$$`}</div>
          <p>
            Both the base and the argument are powers of 3. Write{' '}
            {`$3\\sqrt{3} = 3 \\cdot 3^{\\tfrac{1}{2}} = 3^{\\tfrac{3}{2}}$`} and{' '}
            {`$\\tfrac{1}{81} = 3^{-4}$`}:
          </p>
          <div className="lrn-eq">{`$$3^{\\tfrac{3x}{2}} = 3^{-4}$$`}</div>
          <p>Equal bases give equal exponents:</p>
          <div className="lrn-eq">{`$$\\frac{3x}{2} = -4 \\quad\\Longrightarrow\\quad x = -\\frac{8}{3}$$`}</div>
          <p>
            Two techniques chained together: convert log to exponential, then rewrite both sides as
            powers of the same prime.
          </p>

          <h3>Isolate the Log First</h3>
          <p>
            Solve {`$y = 2 + 3\\log_5(2x + 1)$`} for {`$x$`} in terms of {`$y$`}.
          </p>
          <p>
            The conversion rule {`$\\log_a(b) = c \\Leftrightarrow a^c = b$`} only works when the
            log stands alone. So first move the constant and the coefficient:
          </p>
          <div className="lrn-eq">{`$$\\log_5(2x + 1) = \\frac{y - 2}{3}$$`}</div>
          <p>Now convert to exponential form and solve for {`$x$`}:</p>
          <div className="lrn-eq">{`$$5^{\\tfrac{y-2}{3}} = 2x + 1$$`}</div>
          <div className="lrn-eq lrn-eq-hero">{`$$x = \\frac{5^{\\tfrac{y-2}{3}} - 1}{2}$$`}</div>

          <h3>Two Equations, Shared Unknown</h3>
          <p>
            If {`$3 = k \\cdot 2^r$`} and {`$15 = k \\cdot 4^r$`}, find {`$r$`}.
          </p>
          <p>
            You don't need both {`$k$`} and {`$r$`} just {`$r$`}. Divide the second equation by the
            first. The {`$k$`} cancels:
          </p>
          <div className="lrn-eq">{`$$\\frac{15}{3} = \\frac{k \\cdot 4^r}{k \\cdot 2^r} = \\left(\\frac{4}{2}\\right)^r = 2^r$$`}</div>
          <p>
            So {`$2^r = 5$`}. There is no whole number {`$r$`} that turns 2 into 5, so the answer is
            a logarithm:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$r = \\log_2(5)$$`}</div>
          <p>
            The trick was dividing two equations to cancel a shared unknown. Addition and
            subtraction aren't the only ways to eliminate variables multiplication and division work
            too, and often work faster on exponential systems.
          </p>
        </>,

        <>
          <h2>Summary</h2>

          <p>
            Every idea in this module is built from one move: multiplying a number by itself, or
            undoing that multiplication. Exponential functions do the multiplying. Logarithms do the
            undoing. Compound interest is the bank applying multiplication to your balance every
            year. The equal-bases rule lets you compare two exponential expressions when they share
            a base. When they don't share a base, logarithms step in.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">CHECK YOURSELF</span>
            <p>You face an equation with an unknown in an exponent. What is your first move?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Try to rewrite both sides as powers of the same base. If you can, equate the
                exponents the equation becomes linear. If you can't, either substitute (when one
                exponential appears as a piece of another, like {`$4^x = (2^x)^2$`}) or take a
                logarithm to bring the unknown down from the exponent.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHAT COMES NEXT</span>
            <p>
              The next chapter pushes these tools into growth and decay, medicine dosing,
              radioactive half-life on irregular fractions, and population models. You will also
              meet the full set of logarithm laws the product rule, quotient rule, and power rule
              which let you take any tangled log expression apart or put one together.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `Evaluate $\\log_3(81)$.`,
        a: `$\\log_3(81) = 4$. Ask: what power of 3 gives 81? $3^1=3$, $3^2=9$, $3^3=27$, $3^4=81$. The answer is 4. The logarithm is always the exponent that makes $3^c = 81$ true.`
      },
      {
        q: `Solve $3^{2x} = 3^{x-5}$.`,
        a: `$x = -5$. Both sides have base 3, so equate the exponents: $2x = x - 5$. Subtract $x$: $x = -5$. Equal bases imply equal exponents because $f(x) = 3^x$ is a one-to-one function.`
      },
      {
        q: `Jayne invests 5000 dollars at 9% compounded annually. Write a formula for her total after $n$ years.`,
        a: `Total $= 5000 \\times (1.09)^n$. Each year the balance multiplies by $\\left(1 + \\frac{9}{100}\\right) = 1.09$. After $n$ years, apply this factor $n$ times. Repeated multiplication by a fixed factor is exponential growth.`
      },
      {
        q: `What is the domain and range of $f(x) = 2^x$?`,
        a: `Domain: all real numbers. Range: all positive real numbers. You can raise 2 to any power, so $x$ is unrestricted. But $2^x$ always produces a positive result. It never equals zero or goes negative.`
      },
      {
        q: `Solve $4^x - 33 \\cdot 2^{x-1} + 8 = 0$.`,
        a: `$x = -1$ or $x = 4$. Let $y = 2^x$. Then $4^x = y^2$ and $2^{x-1} = \\frac{y}{2}$. The equation becomes $y^2 - \\frac{33y}{2} + 8 = 0$. Multiply by 2: $2y^2 - 33y + 16 = 0$. Factor: $(2y-1)(y-16) = 0$. So $y = \\frac{1}{2}$ or $y = 16$. Then $2^x = 2^{-1}$ gives $x=-1$ and $2^x = 2^4$ gives $x = 4$.`
      },
      {
        q: `If $2^x = 6$, find $2^{3x-1}$.`,
        a: `$2^{3x-1} = 108$. Rewrite: $2^{3x-1} = \\frac{(2^x)^3}{2} = \\frac{6^3}{2} = \\frac{216}{2} = 108$. You never need to find $x$ explicitly. Using the substitution $2^x = 6$ avoids needing logarithms or a calculator.`
      },
      {
        q: `You see the equation $9^x = 27$. Before solving, predict: will $x$ be a whole number, a fraction, or impossible to find?`,
        a: `$x$ will be a fraction. Both 9 and 27 are powers of 3: $9 = 3^2$ and $27 = 3^3$. So $3^{2x} = 3^3$, giving $2x = 3$ and $x = \\frac{3}{2}$. When the exponents do not divide evenly, the solution is a fraction.`
      },
      {
        q: `Sayeed borrowed 2,300 dollars. After 5 years he owes 3,301.95 dollars at compound annual interest. Find the interest rate.`,
        a: `The rate is $7.5\\%$. Set up: $2300\\left(1 + \\frac{r}{100}\\right)^5 = 3301.95$. Divide by 2300: $\\left(1 + \\frac{r}{100}\\right)^5 = 1.4356$. Take the fifth root: $1 + \\frac{r}{100} = 1.075$. So $r = 7.5$.`
      },
      {
        q: `Explain the difference between simple interest and compound interest.`,
        a: `Simple interest adds the same fixed amount each year (linear growth). Compound interest multiplies the balance by a fixed factor each year (exponential growth). Simple: $k\\left(1 + \\frac{nr}{100}\\right)$. Compound: $k\\left(1 + \\frac{r}{100}\\right)^n$. Compound interest earns interest on accumulated interest, so each year's gain is larger than the last.`
      },
      {
        q: `What does the present value formula compute, and what is it?`,
        a: `Present value is the amount you must invest today to reach a target future sum. The formula is $\\$k = \\frac{\\$m}{\\left(1 + \\tfrac{r}{100}\\right)^n}$. Start from $k\\left(1 + \\frac{r}{100}\\right)^n = m$ and solve for $k$. Dividing by $\\left(1 + \\frac{r}{100}\\right)^n$ "undoes" $n$ years of compounding.`
      },
      {
        q: `Evaluate $\\log_8(2)$.`,
        a: `$\\log_8(2) = \\frac{1}{3}$. Ask: what power of 8 gives 2? Since $8 = 2^3$, we need $8^x = 2$, i.e., $(2^3)^x = 2^1$, so $3x = 1$ and $x = \\frac{1}{3}$. Convert both base and argument to the same prime power to compare exponents directly.`
      },
      {
        q: `What is Euler's number $e$, and how does it appear in compound interest?`,
        a: `$e \\approx 2.71828$. As you compound interest more often (semi-annual, quarterly, daily, then infinitely often), the total approaches a limit. For a 100% annual rate, compounding infinitely often gives $e$ times your principal after one year.`
      },
      {
        q: `Prove that $f(x) = \\log_3(x)$ and $g(x) = 3^x$ are inverse functions.`,
        a: `They are inverses because $f(g(x)) = x$ and $g(f(x)) = x$. $f(g(x)) = \\log_3(3^x) = x$ by the identity $\\log_a(a^p) = p$. $g(f(x)) = 3^{\\log_3(x)} = x$ by the definition of logarithm. Two functions are inverses when each undoes the other.`
      },
      {
        q: `What happens to your investment's doubling time if the interest rate doubles (using the Rule of 72)?`,
        a: `The doubling time halves. By the Rule of 72, doubling time $\\approx \\frac{72}{r}$. If $r$ doubles from 6% to 12%, time changes from $\\frac{72}{6} = 12$ years to $\\frac{72}{12} = 6$ years. Doubling the rate halves the time.`
      },
      {
        q: `Solve $2^{16^x} = 16^{2^x}$.`,
        a: `$x = \\frac{2}{3}$. Write $16 = 2^4$. Right side: $(2^4)^{2^x} = 2^{4 \\cdot 2^x}$. Left side: $2^{16^x} = 2^{2^{4x}}$. Equate exponents: $2^{4x} = 4 \\cdot 2^x = 2^{x+2}$. So $4x = x+2$, giving $x = \\frac{2}{3}$.`
      },
      {
        q: `How much must you invest today at 10% semi-annually to have 1,000,000 dollars in 10 years?`,
        a: `Approximately $\\$376{,}889$. Semi-annual rate: $5\\%$. Periods: $20$. Present value $= \\frac{1{,}000{,}000}{(1.05)^{20}} = \\frac{1{,}000{,}000}{2.6533} \\approx \\$376{,}889$.`
      },
      {
        q: `Evaluate $\\log_5(\\sqrt[3]{25})$.`,
        a: `$\\log_5(\\sqrt[3]{25}) = \\frac{2}{3}$. Write $\\sqrt[3]{25} = 25^{\\tfrac{1}{3}} = (5^2)^{\\tfrac{1}{3}} = 5^{\\tfrac{2}{3}}$. So $\\log_5\\!\\left(5^{\\tfrac{2}{3}}\\right) = \\frac{2}{3}$ by the identity $\\log_a(a^p) = p$.`
      },
      {
        q: `A friend says $\\log_2\\!\\left(\\frac{1}{8}\\right) = 3$ because $2^3 = 8$. What is wrong?`,
        a: `The correct answer is $\\log_2\\!\\left(\\frac{1}{8}\\right) = -3$, not $3$. $\\frac{1}{8} = 2^{-3}$, so $\\log_2(2^{-3}) = -3$. The friend forgot the negative sign from the reciprocal. $2^3 = 8$ gives $\\log_2(8) = 3$, but the argument here is $\\frac{1}{8}$.`
      },
      {
        q: `At 8% annual compound interest, about how many years until an investment doubles?`,
        a: `About 9 years. Rule of 72: doubling time $\\approx \\frac{72}{r} = \\frac{72}{8} = 9$ years. The Rule of 72 trades exact calculation for mental arithmetic.`
      },
      {
        q: `Solve $y = 2 + 3\\log_5(2x+1)$ for $x$ in terms of $y$.`,
        a: `$x = \\frac{5^{\\tfrac{y-2}{3}} - 1}{2}$. Isolate the log: $\\frac{y-2}{3} = \\log_5(2x+1)$. Convert to exponential: $5^{\\tfrac{y-2}{3}} = 2x+1$. Solve: $x = \\frac{5^{\\tfrac{y-2}{3}} - 1}{2}$.`
      },
      {
        q: `Find base $n$ such that $\\log_n(3) = -\\frac{3}{2}$.`,
        a: `$n = \\frac{1}{\\sqrt[3]{9}}$. Convert to exponential: $n^{-\\tfrac{3}{2}} = 3$. Raise both sides to $-\\frac{2}{3}$: $n = 3^{-\\tfrac{2}{3}} = \\frac{1}{3^{\\tfrac{2}{3}}} = \\frac{1}{\\sqrt[3]{9}}$.`
      },
      {
        q: `Evaluate $\\log_{2\\sqrt{2}}\\!\\left(\\frac{1}{32}\\right)$ using the same method as $\\log_{3\\sqrt{3}}\\!\\left(\\frac{1}{81}\\right)$.`,
        a: `$-\\frac{10}{3}$. Call the answer $x$. Then $(2\\sqrt{2})^x = \\frac{1}{32}$. Write $2\\sqrt{2} = 2^{\\tfrac{3}{2}}$ and $\\frac{1}{32} = 2^{-5}$. So $\\left(2^{\\tfrac{3}{2}}\\right)^x = 2^{-5}$, giving $\\frac{3x}{2} = -5$, so $x = -\\frac{10}{3}$. The trick is always: rewrite base and argument as powers of the same prime, then equate exponents.`
      },
      {
        q: `Why does linear growth always eventually lose to exponential growth, no matter how large the linear slope?`,
        a: `Exponential growth compounds. Each period the increment is proportional to the current total. Linear growth adds a fixed amount regardless of size. For any fixed $a > 1$ and slope $m$, there is a point where $a^n > mn$ for all larger $n$. In the chessboard story, Meena's additions eventually exceed billions per step.`
      },
      {
        q: `Carbon-14 has a half-life of 5700 years. An artifact has 25% of its original C-14. How old is it?`,
        a: `About 11,400 years old. Use $\\left(\\frac{1}{2}\\right)^t = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2$. So $t = 2$ (in units of 5700 years). Age $= 2 \\times 5700 = 11{,}400$ years. Writing the fraction as a power of $\\frac{1}{2}$ directly gives the number of half-lives.`
      },
      {
        q: `In the Richter scale formula $\\log_{10}\\!\\left(\\frac{M}{M_c}\\right)$, an earthquake measures 8 on the scale and another measures 6. How many times more displacement does the magnitude 8 earthquake have?`,
        a: `100 times more displacement. $\\frac{M_8}{M_c} = 10^8$ and $\\frac{M_6}{M_c} = 10^6$. The ratio is $\\frac{M_8}{M_6} = 10^2 = 100$. Each unit increase in Richter magnitude is a factor of 10 in displacement.`
      },
      {
        q: `Linear vs exponential: $A(64) = 631$ grains for Arial vs $M(64) = 2^{63}$ for Meena. Who has more, and roughly by how much?`,
        a: `Meena has enormously more. $A(64) = 631$. $M(64) = 2^{63} \\approx 9.2 \\times 10^{18}$ grains. The ratio $\\frac{M}{A} \\approx 1.5 \\times 10^{16}$. Exponential growth compounds multiplicatively. Each step doubles.`
      },
      {
        q: `Explain in your own words why $\\log_a(a^p) = p$.`,
        a: `The logarithm asks "what exponent on base $a$ gives the argument?" The argument here is $a^p$, which is already $a$ raised to the $p$th power. So the answer is obviously $p$. This identity is just a restatement of the definition.`
      },
      {
        q: `You invest 1,000 dollars at 6% compounded annually. How long until it reaches 2,000 dollars? Use the Rule of 72.`,
        a: `About 12 years. Rule of 72: $\\frac{72}{6} = 12$ years to double. The Rule of 72 replaces an exact logarithm calculation with a simple division, accurate to within a year for typical interest rates.`
      },
      {
        q: `A quantity decays to half its size every 10 years. Write a formula for the fraction remaining after $t$ years.`,
        a: `Fraction remaining $= \\left(\\frac{1}{2}\\right)^{\\tfrac{t}{10}}$. At $t = 0$: $\\left(\\frac{1}{2}\\right)^0 = 1$. At $t = 10$: $\\left(\\frac{1}{2}\\right)^1 = \\frac{1}{2}$. At $t = 20$: $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$. Each 10-year period multiplies by $\\frac{1}{2}$, applied $\\frac{t}{10}$ times.`
      },
      {
        q: `If $3 = k \\cdot 2^r$ and $15 = k \\cdot 4^r$, find $r$.`,
        a: `$r = \\log_2(5)$. Divide the second equation by the first: $\\frac{15}{3} = \\frac{k \\cdot 4^r}{k \\cdot 2^r} = \\left(\\frac{4}{2}\\right)^r = 2^r$. So $2^r = 5$, giving $r = \\log_2(5)$. Dividing eliminates $k$ immediately.`
      },
      {
        q: `You invest 3,000 dollars at 5% simple interest for 4 years. What is the total?`,
        a: `The total is $\\$3{,}600$. Use the simple interest formula: $3000 \\times \\left(1 + 4 \\times \\frac{5}{100}\\right) = 3000 \\times 1.20 = 3600$. Simple interest adds the same fixed amount each year: $3000 \\times 0.05 = \\$150$ per year, so $4 \\times 150 = \\$600$ total interest.`
      },
      {
        q: `You borrow 10,000 dollars for 3 years at 6% compounded annually. Your annual payment is 3,741.10 dollars. Verify this using the present value method.`,
        a: `Sum the discounted payments: $\\frac{3741.10}{1.06} + \\frac{3741.10}{1.06^2} + \\frac{3741.10}{1.06^3} = 3529.34 + 3330.51 + 3142.94 \\approx 10002.79 \\approx 10000$. Small rounding error is expected. The present value of all payments equals the loan. This confirms the payment is correct.`
      },
      {
        q: `You invest 1,000 dollars at 100% annual interest compounded continuously (using $e$). How much do you have after 1 year?`,
        a: `You have $\\$e \\cdot 1000 \\approx \\$2{,}718.28$. Continuous compounding at 100% means multiplying by $e^{1} = e$. This is the limit of $\\left(1 + \\frac{1}{m}\\right)^m$ as $m \\to \\infty$. Compounding once gives $\\$2{,}000$. Compounding infinitely often gives about $\\$2{,}718$.`
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
              <p>{`$f(x) = a^x,\\; a > 1$`}</p>
              <p>Use: model any quantity that grows by multiplying by a fixed factor each step.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Equal-bases rule</span>
            <div className="lrn-definition-desc">
              <p>
                {`$a^m = a^n \\Rightarrow m = n$`} (for {`$a > 1$`})
              </p>
              <p>Use: solve exponential equations where both sides share the same base.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Carbon dating half-life</span>
            <div className="lrn-definition-desc">
              <p>{`$\\left(\\frac{1}{2}\\right)^t = \\frac{a}{b}$`}</p>
              <p>
                Use: find the age of an object when you know the fraction of C-14 remaining. One
                half-life = 5700 years; {`$t$`} is in units of half-lives.
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
                <td>{`$x \\to -\\infty$`}</td>
                <td>Approaches 0</td>
              </tr>
              <tr>
                <td>{`$x \\to +\\infty$`}</td>
                <td>Grows without bound</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Interest Formulas</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Simple interest</span>
            <div className="lrn-definition-desc">
              <p>{`$\\left(1 + \\frac{nr}{100}\\right)\\$k$`}</p>
              <p>Use: compute total when interest is on the original principal only (linear).</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Annually compounded interest</span>
            <div className="lrn-definition-desc">
              <p>{`$\\$k \\times \\left(1 + \\frac{r}{100}\\right)^n$`}</p>
              <p>Use: compute total when interest compounds once per year for {`$n$`} years.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$m$`}-times-per-year compounding</span>
            <div className="lrn-definition-desc">
              <p>{`$\\$k \\times \\left(1 + \\frac{r}{100m}\\right)^{nm}$`}</p>
              <p>
                Use: compute total when interest compounds {`$m$`} times per year for {`$n$`} years.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Euler's number</span>
            <div className="lrn-definition-desc">
              <p>{`$e = \\lim_{n \\to \\infty}\\left(1 + \\frac{1}{n}\\right)^n \\approx 2.71828$`}</p>
              <p>
                Use: express the limit of compound interest as compounding frequency approaches
                infinity. For principal {`$\\$k$`} at rate {`$r\\%$`} over {`$n$`} years:{' '}
                {`$\\$k \\cdot e^{\\tfrac{rn}{100}}$`}.
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
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Compounding</th>
                <th>{`$m$`}</th>
                <th>Formula per year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Annually</td>
                <td>1</td>
                <td>{`$\\left(1 + \\frac{r}{100}\\right)^1$`}</td>
              </tr>
              <tr>
                <td>Semi-annually</td>
                <td>2</td>
                <td>{`$\\left(1 + \\frac{r}{200}\\right)^2$`}</td>
              </tr>
              <tr>
                <td>Quarterly</td>
                <td>4</td>
                <td>{`$\\left(1 + \\frac{r}{400}\\right)^4$`}</td>
              </tr>
              <tr>
                <td>Monthly</td>
                <td>12</td>
                <td>{`$\\left(1 + \\frac{r}{1200}\\right)^{12}$`}</td>
              </tr>
              <tr>
                <td>Continuously</td>
                <td>{`$\\infty$`}</td>
                <td>{`$e^{\\tfrac{r}{100}}$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Logarithms</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Logarithm definition</span>
            <div className="lrn-definition-desc">
              <p>{`$\\log_a(b) = c \\iff a^c = b$`}</p>
              <p>
                Use: convert between log and exponential form; use when the unknown is in an
                exponent.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Log identity</span>
            <div className="lrn-definition-desc">
              <p>{`$\\log_a(a^p) = p$`}</p>
              <p>Use: simplify any expression where the argument is the base raised to a power.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Richter magnitude</span>
            <div className="lrn-definition-desc">
              <p>{`$\\text{magnitude} = \\log_{10}\\!\\left(\\frac{M}{M_c}\\right)$`}</p>
              <p>Use: compute earthquake magnitude from displacement ratio.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Rule of 72</span>
            <div className="lrn-definition-desc">
              <p>{`$t \\approx \\frac{72}{r}$`} years</p>
              <p>
                Use: quickly estimate how many years to double an investment at {`$r\\%$`} annual
                compound interest.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Constraint</th>
                <th>Rule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base {`$a$`}</td>
                <td>
                  {`$a > 0$`} and {`$a \\ne 1$`}
                </td>
              </tr>
              <tr>
                <td>Argument {`$b$`}</td>
                <td>{`$b > 0$`}</td>
              </tr>
              <tr>
                <td>Domain of {`$\\log_a(x)$`}</td>
                <td>All positive reals</td>
              </tr>
              <tr>
                <td>Range of {`$\\log_a(x)$`}</td>
                <td>All real numbers</td>
              </tr>
              <tr>
                <td>x-intercept of {`$\\log_a(x)$`}</td>
                <td>{`$(1, 0)$`}</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Log notation</th>
                <th>Base</th>
                <th>Used by</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>log (no subscript)</td>
                <td>10</td>
                <td>Scientists</td>
              </tr>
              <tr>
                <td>ln</td>
                <td>{`$e \\approx 2.71828$`}</td>
                <td>Mathematicians</td>
              </tr>
              <tr>
                <td>{`$\\log_a$`}</td>
                <td>{`$a$`}</td>
                <td>General</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Inverse Relationship</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Exponential-log inverse (1)</span>
            <div className="lrn-definition-desc">
              <p>{`$\\log_a(a^x) = x$`}</p>
              <p>Use: simplify a log of an exponential with the same base.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Exponential-log inverse (2)</span>
            <div className="lrn-definition-desc">
              <p>{`$a^{\\log_a(x)} = x$`}</p>
              <p>Use: simplify an exponential where the exponent is a log with the same base.</p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>Domain</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$g(x) = a^x$`}</td>
                <td>All reals</td>
                <td>Positive reals</td>
              </tr>
              <tr>
                <td>{`$f(x) = \\log_a(x)$`}</td>
                <td>Positive reals</td>
                <td>All reals</td>
              </tr>
            </tbody>
          </table>

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
                <td>Different bases</td>
                <td>Convert all to a common base</td>
              </tr>
              <tr>
                <td>{`Mixed exponential ($4^x$ and $2^x$)`}</td>
                <td>{`Substitute $y = 2^x$ to get a polynomial`}</td>
              </tr>
              <tr>
                <td>Unknown in exponent, no common base</td>
                <td>Use logarithms to isolate the exponent</td>
              </tr>
              <tr>
                <td>Unknown rate</td>
                <td>Isolate growth factor, then take {`$n$`}th root</td>
              </tr>
              <tr>
                <td>Log with unknown base or argument</td>
                <td>Convert to exponential form</td>
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

export default function ExponentialFunctions() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
