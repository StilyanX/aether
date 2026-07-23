import { LearningTemplate } from '../../../../components/learning/learning-template'
import { ForgettingCurveViz, ParetoCurveViz } from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'lgl',
    documentTitle: 'Logarithms and Their Laws - AETHER',
    learning: {
      groupTitle: 'Logarithms and Exponential Models',
      category: 'Algebra',
      title: 'Logarithms and Their Laws',
      subtitle:
        'Logarithms are exponents. Three laws, one change-of-base formula, and the three mistakes almost everyone makes at least once.',
      sections: [
        <>
          <h2>Why the Laws of Logarithms Are True</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A logarithm is secretly an exponent. Before you see why, guess: what do you think $\\log_a(AB)$ equals, written in terms of $\\log_a A$ and $\\log_a B$?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The answer is $\\log_a(AB) = \\log_a A + \\log_a B$. A product inside a logarithm turns into a sum outside it. You will prove exactly why in this section.`}
              </p>
            </details>
          </div>

          <p>
            A logarithm answers one question. What power do you raise a base to, to get a number?
            The base is the fixed number you raise to a power. Write {`$\\log_a x = y$`} to mean{' '}
            {`$a^y = x$`}. The value {`$\\log_a x$`} is not a separate kind of object. It is the
            exponent itself, the exponent that turns {`$a$`} into {`$x$`}.
          </p>

          <p>
            Reach for this definition whenever you need to prove a logarithm law from scratch. It
            also helps you convert between exponential form and logarithmic form.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">The Base Identity</span>
            <div className="lrn-definition-desc">
              <p>
                {`For any base $a > 0$ with $a \\neq 1$, the equation $\\log_a(a^x) = x$ always holds.`}
              </p>
              <p>
                This works because raising {`$a$`} to a power, then asking a logarithm for that same
                power back, undoes itself. You use this identity inside every proof of the three
                Laws of Logarithms below.
              </p>
            </div>
          </div>

          <p>
            {`Try it with numbers. $\\log_2(2^5) = 5$, because $2^5$ is $2$ raised to the fifth power, and the logarithm hands that exponent straight back.`}
          </p>

          <p>
            {`One more: $\\log_{10} 1000 = 3$, since $1000 = 10^3$. The logarithm reports the exponent, which is $3$.`}
          </p>

          <p>
            {`Two shorthands are worth knowing now. When you write $\\log$ with no base shown, it means base 10, called the common logarithm. When you write $\\ln$, it means base $e$, called the natural logarithm, where $e \\approx 2.718$.`}
          </p>

          <div className="lrn-insight">
            <strong>The organizing idea.</strong>
            <p>
              Since logarithms are exponents, the Laws of Exponents give rise to the Laws of
              Logarithms. Every law you are about to learn is really a law of exponents, translated
              into logarithm language.
            </p>
            <p>
              {`The exponent laws are $a^u a^v = a^{u+v}$, $\\frac{a^u}{a^v} = a^{u-v}$, and $(a^u)^c = a^{uc}$. Each one becomes a logarithm law next.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Before seeing the proof, predict: what do you think $\\log_a\\!\\left(\\frac{A}{B}\\right)$ equals, in terms of $\\log_a A$ and $\\log_a B$?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$\\log_a\\!\\left(\\frac{A}{B}\\right) = \\log_a A - \\log_a B$. Division inside the logarithm becomes subtraction outside it, the same way division of exponents subtracts.`}
              </p>
            </details>
          </div>

          <h2>The Three Laws of Logarithms</h2>

          <p>
            The Laws of Exponents describe what happens when you multiply, divide, or raise a power
            to another power. Because a logarithm is an exponent, each law of exponents produces a
            matching law of logarithms.
          </p>

          <p>
            When to use this: reach for these three laws whenever you need to evaluate, expand, or
            combine a logarithm. They apply when it is built from products, quotients, or powers.
          </p>

          <h3>The Product Law</h3>

          <p>
            {`Consider $\\log_4 2 + \\log_4 32$. Using the product law, this equals $\\log_4(2 \\times 32) = \\log_4 64 = 3$, since $4^3 = 64$.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\log_a(AB) = \\log_a A + \\log_a B$$`}</span>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of the Product Law</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Let $u = \\log_a A$ and $v = \\log_a B$. By definition, $a^u = A$ and $a^v = B$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Multiply: $AB = a^u \\cdot a^v = a^{u+v}$, using the exponent rule for multiplying same-base powers.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Take $\\log_a$ of both sides: $\\log_a(AB) = \\log_a(a^{u+v}) = u + v$, by the Base Identity.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Substitute back: $u + v = \\log_a A + \\log_a B$. So $\\log_a(AB) = \\log_a A + \\log_a B$.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Step 3 takes $\\log_a$ of both sides of $AB = a^{u+v}$. Why is that step allowed, and why does it collapse straight to $u + v$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Applying the same operation to both sides of a true equation keeps the equation
                true. You can add the same number to both sides and it stays true.{' '}
                {`Once $\\log_a$ lands on $a^{u+v}$, the Base Identity says $\\log_a(a^{u+v}) = u+v$ right away.`}
              </p>
            </details>
          </div>

          <h3>The Quotient Law</h3>

          <p>
            {`Consider $\\log_2 80 - \\log_2 5$. Using the quotient law, this equals $\\log_2(80 \\div 5) = \\log_2 16 = 4$, since $2^4 = 16$.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\log_a\\!\\left(\\frac{A}{B}\\right) = \\log_a A - \\log_a B$$`}</span>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of the Quotient Law</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Write $A$ as $A = \\frac{A}{B} \\cdot B$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Apply the Product Law to the right side: $\\log_a A = \\log_a\\!\\left(\\frac{A}{B}\\right) + \\log_a B$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Rearrange: $\\log_a\\!\\left(\\frac{A}{B}\\right) = \\log_a A - \\log_a B$.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`In the numeric case, $\\log_2 80 - \\log_2 5 = \\log_2 16 = 4$. Why does subtraction outside the logarithm turn into division inside it?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A logarithm is an exponent, and dividing two same-base powers subtracts their exponents: $\\frac{a^u}{a^v} = a^{u-v}$. So subtracting the two logarithms subtracts the two exponents, which matches dividing $80$ by $5$ inside the logarithm.`}
              </p>
            </details>
          </div>

          <p>
            {`The Quotient Law is not a new idea. It is the Product Law, applied after you rewrite $A$ as $\\frac{A}{B}$ times $B$.`}
          </p>

          <h3>The Power Law</h3>

          <p>
            {`Start with a clean case: $\\log_2(8^2)$. By the Power Law, $\\log_2(8^2) = 2\\log_2 8 = 2 \\times 3 = 6$, since $2^3 = 8$.`}
          </p>

          <p>
            {`Now a harder case: $-\\frac{1}{3}\\log 8$. Since $8^{1/3} = 2$, you get $8^{-1/3} = \\frac{1}{2}$, so $-\\frac{1}{3}\\log 8 = \\log\\!\\left(8^{-1/3}\\right) = \\log\\!\\left(\\frac{1}{2}\\right) \\approx -0.301$.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\log_a(A^C) = C\\log_a A$$`}</span>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of the Power Law</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Let $u = \\log_a A$. By definition, $a^u = A$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Raise both sides to the power $C$: $A^C = (a^u)^C = a^{uC}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`Take $\\log_a$ of both sides: $\\log_a(A^C) = \\log_a(a^{uC}) = uC$, by the Base Identity.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`So $\\log_a(A^C) = uC = C\\log_a A$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`In the numeric instance above, the exponent was $-\\frac{1}{3}$, a negative fraction. How does that connect to $8^{-1/3}$ landing on $\\frac{1}{2}$ instead of $2$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A negative exponent flips the base into a reciprocal: $8^{-1/3} = \\frac{1}{8^{1/3}}$. Since $8^{1/3} = 2$, the reciprocal is $\\frac{1}{2}$. The Power Law only moves the exponent $-\\frac{1}{3}$ out front. It does not change what that exponent means.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Predict: how many separate logarithm terms will $\\log_5(x^3y^6)$ expand into, and what will each term look like?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Two terms, one for each variable. A product inside a log splits into a sum of logs first. Then each exponent steps out front as a multiplier.`}
              </p>
            </details>
          </div>

          <h2>Expanding Logarithmic Expressions</h2>

          <p>
            Expanding a logarithmic expression means rewriting one complicated log as several
            simpler ones. You turn the log of a product, quotient, or power into a sum, difference,
            or multiple. You run the three laws forward.
          </p>

          <p>
            When to use this: reach for expanding when a logarithm holds a single product, quotient,
            power, or root. Use it when you need separate simpler terms, for example before
            differentiating in calculus.
          </p>

          <p>
            {`One tool you will need first: a root is a fractional exponent. In general $\\sqrt[n]{x} = x^{1/n}$, so $\\sqrt[3]{c} = c^{1/3}$ and $\\sqrt{x} = x^{1/2}$.`}
          </p>

          <h3>Worked Example: Expanding Three Expressions</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): $\\log_2(6x)$`}</span>
              <p className="lrn-step-content">
                {`The argument, the value inside the log, is a product here: $6$ times $x$. By the Product Law: $\\log_2(6x) = \\log_2 6 + \\log_2 x$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): $\\log_5(x^3y^6)$`}</span>
              <p className="lrn-step-content">
                {`First split the product with the Product Law: $\\log_5(x^3y^6) = \\log_5(x^3) + \\log_5(y^6)$. Then pull each exponent out front with the Power Law: $= 3\\log_5 x + 6\\log_5 y$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (c): $\\ln\\!\\left(\\dfrac{ab}{\\sqrt[3]{c}}\\right)$`}</span>
              <p className="lrn-step-content">
                {`Rewrite the cube root as an exponent: $\\sqrt[3]{c} = c^{1/3}$. Split the quotient with the Quotient Law: $\\ln(ab) - \\ln\\!\\left(c^{1/3}\\right)$. Split the product with the Product Law: $\\ln a + \\ln b - \\ln\\!\\left(c^{1/3}\\right)$. Pull the exponent out with the Power Law: $= \\ln a + \\ln b - \\frac{1}{3}\\ln c$.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Part (c) starts by rewriting $\\sqrt[3]{c}$ as $c^{1/3}$. Why is that rewrite necessary before you can apply the Power Law?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The Power Law only recognizes an exponent written as an exponent. A root symbol
                hides an exponent inside its notation. You cannot pull that exponent out front until
                you rewrite the root as a fractional power. Once the hidden exponent{' '}
                {`$\\frac{1}{3}$`} is visible, the Power Law applies exactly as it does to any other
                exponent.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Expanding always works because the three laws cover every way a product, quotient, or
              power can appear inside a logarithm. You apply whichever law matches the structure you
              see. Then you repeat on what is left. You stop when no products, quotients, or powers
              remain inside any log.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Predict: what single logarithm does $3\\log x + \\frac{1}{2}\\log(x-1)$ combine into?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`One single logarithm. Each coefficient, the number multiplying a log, becomes an exponent first, using the Power Law backward. Then the two logs merge into one with the Product Law.`}
              </p>
            </details>
          </div>

          <h2>Combining Logarithmic Expressions</h2>

          <p>
            Combining is the reverse of expanding. You start with a sum, difference, or multiple of
            logarithms and rewrite it as a single logarithm.
          </p>

          <p>
            When to use this: reach for combining when you need one logarithm instead of several. It
            helps you solve an equation, or simplify an expression before graphing it.
          </p>

          <h3>Worked Example: Combining Two Expressions</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): $3\\log x + \\frac{1}{2}\\log(x-1)$`}</span>
              <p className="lrn-step-content">
                {`Turn each coefficient into an exponent with the Power Law: $3\\log x = \\log(x^3)$ and $\\frac{1}{2}\\log(x-1) = \\log\\!\\left((x-1)^{1/2}\\right)$. Merge with the Product Law: $\\log\\!\\left[x^3(x-1)^{1/2}\\right] = \\log\\!\\left[x^3\\sqrt{x-1}\\right]$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): $3\\ln s + \\frac{1}{2}\\ln t - 4\\ln(t^2+1)$`}</span>
              <p className="lrn-step-content">
                {`Turn each coefficient into an exponent: $\\ln(s^3) + \\ln\\!\\left(t^{1/2}\\right) - \\ln\\!\\left((t^2+1)^4\\right)$. Merge the additions with the Product Law, then the subtraction with the Quotient Law: $\\ln\\!\\left[\\dfrac{s^3\\sqrt{t}}{(t^2+1)^4}\\right]$.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Part (a) turns $\\frac{1}{2}\\log(x-1)$ into $\\log\\!\\left(\\sqrt{x-1}\\right)$. Why is a square root the right way to write that fractional exponent?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A fractional exponent of $\\frac{1}{2}$ means the same thing as a square root, by definition: $(x-1)^{1/2} = \\sqrt{x-1}$. Writing the square root form is just a more familiar way to display the same number.`}
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Expanding</span>
              <p>
                Starts with one logarithm of a product, quotient, or power. Ends with several
                simpler logs added, subtracted, or multiplied by constants.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Combining</span>
              <p>
                Starts with several logs added, subtracted, or multiplied by constants. Ends with
                one logarithm of a single product, quotient, or power.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Predict: is $\\log_a(x+y)$ equal to $\\log_a x + \\log_a y$? Test it numerically with $x=2$, $y=3$, $a=10$ before you answer.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`No. $\\log 2 + \\log 3 = \\log 6 \\approx 0.778$, but $\\log(2+3) = \\log 5 \\approx 0.699$. The two numbers are different, so no such law can exist.`}
              </p>
            </details>
          </div>

          <h2>Common Mistakes with the Laws of Logarithms</h2>

          <p>
            There is no law for the logarithm of a sum or a difference. This is the single most
            common mistake with these laws, alongside two other look-alike errors.
          </p>

          <p>
            When to use this: check your work against these three patterns whenever a logarithm
            expression looks almost like one of the laws above.
          </p>

          <h3>Mistake One: The Sum Inside a Logarithm</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Tempting, but wrong</span>
              <p>{`$\\log_a(x+y) = \\log_a x + \\log_a y$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">What is actually true</span>
              <p>
                {`$\\log_a x + \\log_a y = \\log_a(xy)$, by the real Product Law. There is no law that simplifies $\\log_a(x+y)$ at all.`}
              </p>
            </div>
          </div>

          <h3>Mistake Two: A Ratio of Two Logs</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Tempting, but wrong</span>
              <p>{`$\\dfrac{\\log 6}{\\log 2} = \\log\\!\\left(\\dfrac{6}{2}\\right)$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">What is actually true</span>
              <p>
                {`$\\dfrac{\\log 6}{\\log 2}$ is a ratio of two separate logarithm values, not the logarithm of a quotient. It equals $\\log_2 6$ instead, a fact you will meet again in the Change of Base Formula. Meanwhile $\\log\\!\\left(\\frac{6}{2}\\right) = \\log 3$, an entirely different number.`}
              </p>
            </div>
          </div>

          <h3>Mistake Three: A Power of a Log Value</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Tempting, but wrong</span>
              <p>{`$(\\log_2 x)^3 = 3\\log_2 x$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">What is actually true</span>
              <p>
                {`$(\\log_2 x)^3$ cubes the number $\\log_2 x$ itself. The real Power Law instead says $\\log_2(x^3) = 3\\log_2 x$, which is the log of a cube, not the cube of a log.`}
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Every real logarithm law traces back to a law of exponents. There is no exponent rule for $a^x + a^y$. There is none that turns a ratio of two exponents into an exponent of a ratio. And no exponent rule turns cubing a value into tripling that value.`}
            </p>
            <p>
              None of these three patterns match a real rule of exponents. So none of them match a
              real law of logarithms either.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Predict: your calculator only has LOG and LN keys. How could you use one of those keys to compute $\\log_8 5$, a base your calculator does not have?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Use the idea behind the Change of Base Formula. Any base-8 log equals a ratio of two logs your calculator already has. You divide a log of $5$ by a log of $8$, in base 10 or base $e$.`}
              </p>
            </details>
          </div>

          <h2>The Change of Base Formula</h2>

          <p>
            The Change of Base Formula rewrites a logarithm in any base using logs in a base your
            calculator supports. Calculators only have keys for base 10 (log) and base {`$e$`} (ln).
            So this formula converts any other base into one of those two.
          </p>

          <p>
            When to use this: reach for this formula whenever you need a decimal value for a
            logarithm whose base is not 10 or {`$e$`}.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE DERIVATION</span>
              <p>
                <strong>Set up the unknown as an exponent:</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$y = \\log_b x$$`}</span>
              </div>
              <p>
                <strong>Rewrite in exponential form:</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$b^y = x$$`}</span>
              </div>
              <p>
                <strong>{`Take $\\log_a$ of both sides:`}</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$\\log_a(b^y) = \\log_a x$$`}</span>
              </div>
              <p>
                <strong>Apply the Power Law to the left side:</strong>
              </p>
              <div className="lrn-eq">
                <span>{`$$y\\log_a b = \\log_a x$$`}</span>
              </div>
              <p>
                <strong>Divide both sides by {`$\\log_a b$`}:</strong>
              </p>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\log_b x = \\dfrac{\\log_a x}{\\log_a b}$$`}</span>
              </div>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: DERIVE A DIRECT RESULT</span>
              <p>
                {`The formula above holds for any $x$. Set $x = a$ and simplify to find a rule for $\\log_b a$.`}
              </p>
              <ol className="lrn-list">
                <li>{`Substitute $x = a$ into $\\log_b x = \\dfrac{\\log_a x}{\\log_a b}$.`}</li>
                <li>{`Simplify $\\log_a a$ using the Base Identity.`}</li>
                <li>{`Write the simplified formula for $\\log_b a$.`}</li>
              </ol>
              <details className="lrn-self-explain-reveal">
                <summary>Check your answer</summary>
                <p>
                  {`Substituting gives $\\log_b a = \\dfrac{\\log_a a}{\\log_a b}$. By the Base Identity, $\\log_a a = 1$ (since $a = a^1$). So $\\log_b a = \\dfrac{1}{\\log_a b}$.`}
                </p>
              </details>
            </div>
          </div>

          <div className="lrn-insight">
            <strong>A conceptual reframing.</strong>
            <p>
              {`The formula can be rewritten as $\\log_b x = \\dfrac{1}{\\log_a b}\\cdot\\log_a x$. Read this way, $\\log_b x$ is just a constant multiple of $\\log_a x$. The constant is $\\dfrac{1}{\\log_a b}$.`}
            </p>
          </div>

          <h3>Worked Example: Evaluating with the Change of Base Formula</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (a): $\\log_8 5$ using common logarithms`}</span>
              <p className="lrn-step-content">
                {`$\\log_8 5 = \\dfrac{\\log 5}{\\log 8} \\approx 0.77398$.`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Part (b): $\\log_9 20$ using natural logarithms`}</span>
              <p className="lrn-step-content">
                {`$\\log_9 20 = \\dfrac{\\ln 20}{\\ln 9} \\approx 1.36342$.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Part (a) uses base-10 logs and Part (b) uses natural logs, two completely different keys on the calculator. Why must both approaches give the correct value for their own logarithm, regardless of which base you pick for $a$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The derivation never assumed a specific value for $a$. It only needed a valid base to take a logarithm in. Choosing $a=10$ or $a=e$ both satisfy that requirement. So both routes solve the same equation $b^y=x$ and land on the same answer.`}
              </p>
            </details>
          </div>

          <p>
            {`Graphing devices have the identical limitation as calculators. They can only plot functions built from keys they recognize, mainly $\\log$ and $\\ln$. To graph $f(x) = \\log_6 x$, first rewrite it with the Change of Base Formula as $f(x) = \\dfrac{\\ln x}{\\ln 6}$, then graph that instead. The two expressions produce identical output at every $x$.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The entire formula collapses to one application of the Power Law. Taking {`$\\log_a$`}{' '}
              of an exponential equation always pulls the exponent out front as a multiplying
              constant. The Change of Base Formula is that one move. Then you solve for the exponent
              you wanted in the first place.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`The Law of Forgetting says $\\log P = \\log P_0 - c\\log(t+1)$. Suppose you combine each side into a single logarithm. Predict: what property lets you then drop both logs and keep a true equation?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`A logarithm is one-to-one, so equal logs force equal arguments. Once each side is a single log, you can set the two arguments equal and solve for $P$.`}
              </p>
            </details>
          </div>

          <h2>Using Logarithm Laws in the Real World</h2>

          <p>
            Logarithm laws model real decay and inequality patterns. Two examples: how memory fades
            with time, and how wealth spreads across a population.
          </p>

          <p>
            When to use this: reach for a logarithmic model whenever a quantity shrinks, or spreads
            unevenly, following a power-law pattern over time or rank.
          </p>

          <h3>The Law of Forgetting</h3>

          <p>
            Hermann Ebbinghaus (1850 to 1909) studied how performance fades after learning something
            new. His model relates performance {`$P$`} at time {`$t$`} to the starting performance{' '}
            {`$P_0$`} and a forgetting constant {`$c$`}.
          </p>

          <div className="lrn-eq">
            <span>{`$$\\log P = \\log P_0 - c\\log(t+1)$$`}</span>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Solving for P</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`Move the $\\log P_0$ term: $\\log P - \\log P_0 = -c\\log(t+1)$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                {`Combine the left side with the Quotient Law, and the right side with the Power Law: $\\log\\!\\left(\\dfrac{P}{P_0}\\right) = \\log\\!\\left((t+1)^{-c}\\right)$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                {`A logarithm is one-to-one: it never repeats a value, so equal outputs force equal inputs. Since the two logs are equal, their arguments are equal: $\\dfrac{P}{P_0} = (t+1)^{-c}$.`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                {`Solve for $P$: $P = \\dfrac{P_0}{(t+1)^c}$.`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>
            {`With $P_0 = 90$ and $c = 0.2$, after $t=2$ months: $P = \\dfrac{90}{(3)^{0.2}}$. Since $\\log(3^{0.2}) = 0.2\\log 3 \\approx 0.0954$, you get $3^{0.2}\\approx 1.246$, so $P \\approx 72$. After $t=12$ months: $P = \\dfrac{90}{(13)^{0.2}} \\approx \\dfrac{90}{1.670} \\approx 54$.`}
          </p>

          <div className="lrn-graph">
            <ForgettingCurveViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Both $P_0$ and $c$ are positive in this model. Using the solved formula $P = \\dfrac{P_0}{(t+1)^c}$, explain why $P$ keeps shrinking as $t$ grows, without recomputing any numbers.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`As $t$ grows, $(t+1)^c$ grows too, since $c>0$. Dividing the fixed value $P_0$ by an ever-larger number produces an ever-smaller result. $P$ shrinks toward zero but never turns negative, since a positive number divided by a positive number stays positive.`}
              </p>
            </details>
          </div>

          <h3>Pareto's Wealth Distribution</h3>

          <p>
            Vilfredo Pareto (1848 to 1923) modeled how wealth spreads across a population. Let{' '}
            {`$P$`} be the number of people with wealth at least {`$W$`}, and let {`$k$`} and{' '}
            {`$c$`} be constants that describe the population.
          </p>

          <div className="lrn-eq">
            <span>{`$$\\log P = \\log c - k\\log W$$`}</span>
          </div>

          <p>
            Solving for {`$P$`} follows the same three moves used for the Law of Forgetting. First
            combine both sides into single logarithms. Then drop the logs, since equal logs force
            equal arguments. Last, isolate {`$P$`}.
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$P = \\dfrac{c}{W^k}$$`}</span>
          </div>

          <p>
            {`With $k = 2.1$ and $c = 8000$, the model becomes $P = \\dfrac{8000}{W^{2.1}}$. This tells you how many people have wealth of at least $W$. The exponent $2.1$ is greater than $1$, so $P$ shrinks quickly as $W$ grows. That matches the real-world pattern where very few people hold very high wealth.`}
          </p>

          <div className="lrn-graph">
            <ParetoCurveViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does a larger exponent $k$ make wealth concentrate more sharply, meaning fewer and fewer people qualify as $W$ rises?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`In $P = \\dfrac{c}{W^k}$, a larger $k$ makes $W^k$ grow faster as $W$ increases. A faster-growing denominator drives $P$ toward zero more quickly. So a bigger $k$ means the population above any given wealth threshold thins out faster.`}
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">
              Going further: counting digits with logarithms
            </span>
            <p>
              {`Base-10 logarithms also count the digits in a whole number. For a positive integer $x$, the number of digits equals $\\lfloor\\log x\\rfloor + 1$, where $\\lfloor\\ \\rfloor$ means round down to the nearest whole number.`}
            </p>
            <p>
              {`Try it on $2^{100}$. By the Power Law, $\\log(2^{100}) = 100\\log 2 \\approx 100(0.30103) = 30.103$. Rounding down gives $30$, so $2^{100}$ has $30 + 1 = 31$ digits, without ever writing out the full number.`}
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Before deriving anything, predict: does $\\log_a(a^7)$ equal $7$, equal $a$, or equal something else? Explain using the definition of a logarithm.`,
        a: `It equals $7$. A logarithm asks what exponent produces the argument. Since $a^7$ is already $a$ raised to the power $7$, the exponent that produces it is exactly $7$. This is the Base Identity: $\\log_a(a^x) = x$ for any $x$.`
      },
      {
        q: `Evaluate $\\log_4 2 + \\log_4 32$ using the Product Law. Show every step.`,
        a: `The Product Law says $\\log_a A + \\log_a B = \\log_a(AB)$. Here $\\log_4 2 + \\log_4 32 = \\log_4(2\\times32) = \\log_4 64$. Since $4^3 = 64$, the answer is $3$.`
      },
      {
        q: `Expand $\\log_2\\!\\left(\\dfrac{x}{8}\\right)$ fully using the Quotient Law.`,
        a: `The argument is a quotient, so the Quotient Law applies: $\\log_2\\!\\left(\\dfrac{x}{8}\\right) = \\log_2 x - \\log_2 8$. Since $2^3 = 8$, this becomes $\\log_2 x - 3$.`
      },
      {
        q: `What is wrong with writing $\\log(x+y) = \\log x + \\log y$?`,
        a: `There is no law for the logarithm of a sum. The Product Law only applies to $\\log x + \\log y$, which equals $\\log(xy)$, not $\\log(x+y)$. Check numerically with $x=2$, $y=3$: $\\log 2 + \\log 3 = \\log 6 \\approx 0.778$, while $\\log(2+3) = \\log 5 \\approx 0.699$. The two results differ, so the rule is false.`
      },
      {
        q: `Predict: the Law of Forgetting states $P = \\dfrac{P_0}{(t+1)^c}$. As $t$ grows very large, does $P$ approach $0$, stay constant, or grow without bound?`,
        a: `$P$ approaches $0$. As $t$ grows, $(t+1)^c$ grows without bound, since $c>0$. Dividing the fixed value $P_0$ by an ever-larger number drives the result toward $0$. It never becomes negative.`
      },
      {
        q: `Use the Product Law to evaluate $\\log_3 9 + \\log_3 3$. Show the reasoning.`,
        a: `Combine using the Product Law: $\\log_3 9 + \\log_3 3 = \\log_3(9\\times3) = \\log_3 27$. Since $3^3 = 27$, the answer is $3$. The Product Law turns a sum of two same-base logs into the log of their product.`
      },
      {
        q: `Evaluate $\\log_2 80 - \\log_2 5$ using the Quotient Law. Show every step.`,
        a: `The Quotient Law says $\\log_a A - \\log_a B = \\log_a\\!\\left(\\frac{A}{B}\\right)$. Here $\\log_2 80 - \\log_2 5 = \\log_2(80\\div5) = \\log_2 16$. Since $2^4 = 16$, the answer is $4$.`
      },
      {
        q: `Expand $\\log_2(6x)$ fully.`,
        a: `The argument $6x$ is a product, so the Product Law applies directly: $\\log_2(6x) = \\log_2 6 + \\log_2 x$. No further expansion is possible since both terms are already simple logarithms.`
      },
      {
        q: `Combine $3\\log x + \\frac{1}{2}\\log(x-1)$ into a single logarithm. Show every step.`,
        a: `Turn coefficients into exponents with the Power Law: $\\log(x^3) + \\log\\!\\left((x-1)^{1/2}\\right)$. Merge with the Product Law: $\\log\\!\\left[x^3(x-1)^{1/2}\\right] = \\log\\!\\left[x^3\\sqrt{x-1}\\right]$.`
      },
      {
        q: `Derive the direct result $\\log_b a = \\dfrac{1}{\\log_a b}$ from the Change of Base Formula. Show your steps.`,
        a: `Start from $\\log_b x = \\dfrac{\\log_a x}{\\log_a b}$ and substitute $x=a$: $\\log_b a = \\dfrac{\\log_a a}{\\log_a b}$. By the Base Identity, $\\log_a a = 1$ since $a = a^1$. So $\\log_b a = \\dfrac{1}{\\log_a b}$.`
      },
      {
        q: `Solve $\\log P = \\log P_0 - c\\log(t+1)$ for $P$. Show every algebraic step.`,
        a: `Move the $\\log P_0$ term: $\\log P - \\log P_0 = -c\\log(t+1)$. Combine the left side with the Quotient Law and the right side with the Power Law: $\\log\\!\\left(\\dfrac{P}{P_0}\\right) = \\log\\!\\left((t+1)^{-c}\\right)$. Equal logs mean equal arguments: $\\dfrac{P}{P_0} = (t+1)^{-c}$. Solve for $P$: $P = \\dfrac{P_0}{(t+1)^c}$.`
      },
      {
        q: `The proof of the Product Law ends by taking $\\log_a$ of both sides of $AB = a^{u+v}$. Why is that step valid, and why does it simplify so quickly?`,
        a: `Applying the same operation to both sides of a true equation keeps it true, just like adding a number to both sides. Once you apply $\\log_a$ to $a^{u+v}$, the Base Identity $\\log_a(a^x) = x$ takes over. It collapses $\\log_a(a^{u+v})$ straight to $u+v$ with no extra algebra.`
      },
      {
        q: `Use the Quotient Law to evaluate $\\log_5 100 - \\log_5 4$. Show the reasoning.`,
        a: `Combine using the Quotient Law: $\\log_5 100 - \\log_5 4 = \\log_5(100\\div4) = \\log_5 25$. Since $5^2 = 25$, the answer is $2$. The Quotient Law turns any difference of two same-base logs into the log of their quotient.`
      },
      {
        q: `Expand $\\ln\\!\\left(\\dfrac{ab}{\\sqrt[3]{c}}\\right)$ fully. Show each law you use.`,
        a: `Rewrite the cube root as an exponent: $\\sqrt[3]{c} = c^{1/3}$. Apply the Quotient Law: $\\ln(ab) - \\ln\\!\\left(c^{1/3}\\right)$. Apply the Product Law to $\\ln(ab)$: $\\ln a + \\ln b - \\ln\\!\\left(c^{1/3}\\right)$. Apply the Power Law to the last term: $\\ln a + \\ln b - \\frac{1}{3}\\ln c$.`
      },
      {
        q: `Combine $3\\ln s + \\frac{1}{2}\\ln t - 4\\ln(t^2+1)$ into a single logarithm. Show every step.`,
        a: `Turn coefficients into exponents: $\\ln(s^3) + \\ln\\!\\left(t^{1/2}\\right) - \\ln\\!\\left((t^2+1)^4\\right)$. Merge the two additions with the Product Law, then the subtraction with the Quotient Law: $\\ln\\!\\left[\\dfrac{s^3\\sqrt{t}}{(t^2+1)^4}\\right]$.`
      },
      {
        q: `Evaluate $\\log_8 5$ using the Change of Base Formula with common logarithms.`,
        a: `$\\log_8 5 = \\dfrac{\\log 5}{\\log 8}$. Using $\\log 5 \\approx 0.69897$ and $\\log 8 \\approx 0.90309$, the ratio is approximately $0.77398$.`
      },
      {
        q: `Using $P = \\dfrac{P_0}{(t+1)^c}$ with $P_0=90$ and $c=0.2$, find $P$ at $t=2$ months and at $t=12$ months.`,
        a: `At $t=2$: $P = \\dfrac{90}{3^{0.2}}$. Since $\\log(3^{0.2}) = 0.2\\log 3 \\approx 0.0954$, $3^{0.2}\\approx1.246$, so $P\\approx72$. At $t=12$: $P = \\dfrac{90}{13^{0.2}}$. Since $\\log(13^{0.2}) = 0.2\\log 13 \\approx 0.2230$, $13^{0.2}\\approx1.670$, so $P\\approx54$.`
      },
      {
        q: `Elaborate: why does the Product Law hold, using the Laws of Exponents rather than restating the proof steps?`,
        a: `The Product Law works because multiplying two same-base powers adds their exponents: $a^u \\cdot a^v = a^{u+v}$. A logarithm is an exponent. So adding two logarithms adds two exponents, and multiplying the values $a^u$ and $a^v$ multiplies inside one log. The log law and the exponent law describe the same fact under two names.`
      },
      {
        q: `Expand $\\log_5(x^3y^6)$ fully, showing which law applies at each step.`,
        a: `The Product Law splits the product first: $\\log_5(x^3) + \\log_5(y^6)$. The Power Law then pulls each exponent out front: $3\\log_5 x + 6\\log_5 y$. Two laws, applied in sequence.`
      },
      {
        q: `Transfer: combine $2\\log x - \\log y$ into a single logarithm.`,
        a: `Turn the coefficient into an exponent with the Power Law: $\\log(x^2) - \\log y$. Merge with the Quotient Law: $\\log\\!\\left(\\dfrac{x^2}{y}\\right)$.`
      },
      {
        q: `Predict: before checking, do you think $\\dfrac{\\log 8}{\\log 2}$ equals $\\log\\!\\left(\\dfrac{8}{2}\\right)$? Test both numerically before you answer.`,
        a: `No, they are different numbers. $\\dfrac{\\log 8}{\\log 2} = \\dfrac{0.903}{0.301} \\approx 3$, which matches $\\log_2 8$ by the Change of Base Formula, since $2^3=8$. But $\\log\\!\\left(\\frac{8}{2}\\right) = \\log 4 \\approx 0.602$. A ratio of two logs is not the log of a quotient.`
      },
      {
        q: `Evaluate $\\log_9 20$ using the Change of Base Formula with natural logarithms.`,
        a: `$\\log_9 20 = \\dfrac{\\ln 20}{\\ln 9}$. Using $\\ln 20 \\approx 2.99573$ and $\\ln 9 \\approx 2.19722$, the ratio is approximately $1.36342$.`
      },
      {
        q: `Solve $\\log P = \\log c - k\\log W$ for $P$ in Pareto's wealth model. Show the algebra, and state what $P$ represents.`,
        a: `Move the $\\log c$ term: $\\log P - \\log c = -k\\log W$. Combine each side: $\\log\\!\\left(\\dfrac{P}{c}\\right) = \\log\\!\\left(W^{-k}\\right)$. Equal logs mean equal arguments: $\\dfrac{P}{c} = W^{-k}$, so $P = \\dfrac{c}{W^k}$. Here $P$ is the number of people whose wealth is at least $W$.`
      },
      {
        q: `Transfer: expand $\\log_3(9x^2y)$ fully.`,
        a: `Split the product with the Product Law: $\\log_3 9 + \\log_3(x^2) + \\log_3 y$. Pull the exponent out with the Power Law: $\\log_3 9 + 2\\log_3 x + \\log_3 y$. Since $3^2=9$, you can also simplify $\\log_3 9 = 2$, giving $2 + 2\\log_3 x + \\log_3 y$.`
      },
      {
        q: `Transfer: combine $\\frac{1}{4}\\log a + \\log b - 2\\log c$ into a single logarithm.`,
        a: `Turn each coefficient into an exponent: $\\log\\!\\left(a^{1/4}\\right) + \\log b - \\log(c^2)$. Merge the additions with the Product Law, then the subtraction with the Quotient Law: $\\log\\!\\left[\\dfrac{a^{1/4}b}{c^2}\\right] = \\log\\!\\left[\\dfrac{b\\sqrt[4]{a}}{c^2}\\right]$.`
      },
      {
        q: `Transfer: is $\\log(10) + \\log(20)$ equal to $\\log(200)$? Explain using the correct law, and contrast with the sum misconception.`,
        a: `Yes, this one is true. $\\log(10) + \\log(20) = \\log(10\\times20) = \\log(200)$ by the real Product Law, since this is a sum of two logs, not a log of a sum. It looks like the sum-inside-a-log misconception, but it is actually a correct use of the Product Law: the addition happens outside the logs, matching a multiplication inside one log.`
      },
      {
        q: `Transfer: evaluate $\\log_7 50$ using the Change of Base Formula.`,
        a: `$\\log_7 50 = \\dfrac{\\log 50}{\\log 7}$. Using $\\log 50 \\approx 1.69897$ and $\\log 7 \\approx 0.84510$, the ratio is approximately $2.0102$.`
      },
      {
        q: `Transfer: in Pareto's model $P = \\dfrac{c}{W^k}$ with $k=2.1$, describe in words what happens to $P$ when $W$ doubles.`,
        a: `Doubling $W$ multiplies the denominator $W^k$ by $2^{2.1}\\approx4.29$. Since $P$ is $c$ divided by that denominator, $P$ shrinks to roughly $\\frac{1}{4.29}$ of its previous value. A modest increase in the wealth threshold produces a much larger drop in how many people clear it.`
      },
      {
        q: `Transfer: expand $\\log\\!\\left(\\dfrac{100x}{\\sqrt[3]{y}}\\right)$ fully, using common logarithms.`,
        a: `Rewrite the root as an exponent: $\\sqrt[3]{y} = y^{1/3}$. Apply the Quotient Law: $\\log(100x) - \\log\\!\\left(y^{1/3}\\right)$. Apply the Product Law: $\\log 100 + \\log x - \\log\\!\\left(y^{1/3}\\right)$. Apply the Power Law: $\\log 100 + \\log x - \\frac{1}{3}\\log y$. Since $\\log 100 = 2$, this simplifies to $2 + \\log x - \\frac{1}{3}\\log y$.`
      },
      {
        q: `Elaborate: why is combining always possible whenever expanding was possible, and vice versa?`,
        a: `Both directions use the same three laws, which are true equalities rather than one-way instructions. An equality that reads left-to-right as "expand" always reads right-to-left as "combine." Nothing in the laws restricts which direction you read them. So every expansion reverses into a combination, and every combination reverses into an expansion.`
      },
      {
        q: `Transfer: is $(\\log 5)^2$ equal to $2\\log 5$? Explain, and contrast with the correct Power Law statement.`,
        a: `No. $(\\log 5)^2$ squares the number $\\log 5$, while $2\\log 5$ doubles it. These are different operations on the same number, and they give different results unless $\\log 5$ happens to equal $0$ or $2$. The correct Power Law statement instead is $\\log(5^2) = 2\\log 5$, the log of $25$, not the square of $\\log 5$.`
      },
      {
        q: `Transfer: evaluate $\\log_{12} 3$ using the Change of Base Formula.`,
        a: `$\\log_{12} 3 = \\dfrac{\\log 3}{\\log 12}$. Using $\\log 3 \\approx 0.47712$ and $\\log 12 \\approx 1.07918$, the ratio is approximately $0.4421$.`
      },
      {
        q: `Transfer: in the Law of Forgetting, if the forgetting constant $c$ were made larger while $P_0$ stayed the same, would performance decay faster or slower? Use the solved formula to justify your answer.`,
        a: `Faster. In $P = \\dfrac{P_0}{(t+1)^c}$, a larger $c$ makes the denominator $(t+1)^c$ grow more quickly as $t$ increases (for any $t+1 > 1$). A faster-growing denominator drives $P$ toward $0$ sooner, so a larger forgetting constant means faster decay.`
      },
      {
        q: `Elaborate: why can you always fully expand any logarithm of a product, quotient, or power, with no case left over?`,
        a: `The three laws cover every possible structure inside a logarithm: multiplication, division, and exponentiation. You match whichever law fits the structure you currently see, apply it, and repeat on whatever remains. Every algebraic combination of products, quotients, and powers is built from those same three operations. So repeating the process always finishes with nothing left to expand.`
      },
      {
        q: `In combining $3\\log x + \\frac{1}{2}\\log(x-1)$, the middle step produces $(x-1)^{1/2}$. Why do you then write it as $\\sqrt{x-1}$ instead of leaving the fractional exponent?`,
        a: `A fractional exponent of $\\frac{1}{2}$ means the same thing as a square root, by definition: $(x-1)^{1/2} = \\sqrt{x-1}$. Writing the root form is simply the more familiar way to display the identical value, not a separate mathematical step.`
      },
      {
        q: `Elaborate: why do none of the three common mistakes correspond to a real law of exponents?`,
        a: `No exponent rule turns $a^x + a^y$ into a single power. None turns a ratio of two exponents into an exponent of a ratio. And none turns cubing a value into tripling that value. Every real logarithm law is a translation of an exponent law. So a pattern with no matching exponent rule cannot have a matching logarithm law either.`
      },
      {
        q: `Elaborate: why does the Change of Base Formula work for any valid choice of the helper base $a$?`,
        a: `The derivation sets $y=\\log_b x$, rewrites it as $b^y=x$, and takes $\\log_a$ of both sides using the Power Law. Nothing in that argument depends on what $a$ specifically is, only that it is a valid logarithm base. Choosing $a=10$ or $a=e$ both satisfy that requirement, so both choices solve the same equation and must produce the same value of $y$.`
      },
      {
        q: `Elaborate: why do the Law of Forgetting and Pareto's wealth model both get solved with the exact same three algebraic moves?`,
        a: `Both start as an equation between two logarithms after rearranging: one log on each side. The three moves work for any equation of that shape. First combine each side into a single log. Then drop the logs, since equal logs force equal arguments. Last, isolate the variable. The letters and real-world meaning differ, but the algebraic structure is identical. So the same method solves both.`
      },
      {
        q: `You compute $\\log_8 5$ once using base 10 and once using base $e$. Why must both computations land on the same decimal value?`,
        a: `Both computations solve the identical equation $8^y = 5$ for $y$. The Change of Base Formula only changes which logarithm key you use to extract $y$; it never changes the equation being solved. Since an equation has one solution, both routes must agree on the same number.`
      },
      {
        q: `Method selection: you need to find the number of digits in $2^{100}$ without writing out the full number. Which logarithm law lets you do this, and how?`,
        a: `Use the Power Law together with the digit-counting identity: for a positive integer $x$, digits of $x$ equals $\\lfloor\\log x\\rfloor + 1$. By the Power Law, $\\log(2^{100}) = 100\\log 2 \\approx 100(0.30103) = 30.103$. Rounding down gives $30$, so $2^{100}$ has $30+1=31$ digits.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Logarithms and Their Laws',
      sections: [
        <>
          <h2>The Base Identity</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Definition and identity</span>
            <div className="ref-formula-eq">
              {`$$\\log_a x = y \\iff a^y = x \\qquad\\qquad \\log_a(a^x) = x$$`}
            </div>
            <p className="ref-formula-desc">
              When to use: whenever you need to prove a law from scratch, or convert between
              exponential and logarithmic form.
            </p>
          </div>

          <h2>The Three Laws of Logarithms</h2>

          <table>
            <thead>
              <tr>
                <th>Law</th>
                <th>Statement</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product Law</td>
                <td>{`$\\log_a(AB) = \\log_a A + \\log_a B$`}</td>
                <td>The argument is a product</td>
              </tr>
              <tr>
                <td>Quotient Law</td>
                <td>{`$\\log_a\\!\\left(\\frac{A}{B}\\right) = \\log_a A - \\log_a B$`}</td>
                <td>The argument is a quotient</td>
              </tr>
              <tr>
                <td>Power Law</td>
                <td>{`$\\log_a(A^C) = C\\log_a A$`}</td>
                <td>The argument is a power or root</td>
              </tr>
            </tbody>
          </table>

          <h2>Expanding vs. Combining</h2>

          <ul className="lrn-list">
            <li>
              Expanding: one log of a product, quotient, or power, split into several simple logs.
            </li>
            <li>
              Combining: several logs merged back into one log of a product, quotient, or power.
            </li>
            <li>Both directions use the same three laws, read forward or backward.</li>
          </ul>

          <h2>Common Errors</h2>

          <div className="ref-grid">
            <div className="ref-item">
              <strong>{`Wrong: $\\log_a(x+y) = \\log_a x + \\log_a y$`}</strong>
              <p>{`Correct: no law exists for a sum inside a log. Only $\\log_a x + \\log_a y = \\log_a(xy)$ is true.`}</p>
            </div>
            <div className="ref-item">
              <strong>{`Wrong: $\\dfrac{\\log 6}{\\log 2} = \\log\\!\\left(\\dfrac{6}{2}\\right)$`}</strong>
              <p>{`Correct: $\\dfrac{\\log 6}{\\log 2} = \\log_2 6$ (Change of Base). It is not the log of a quotient.`}</p>
            </div>
            <div className="ref-item">
              <strong>{`Wrong: $(\\log_2 x)^3 = 3\\log_2 x$`}</strong>
              <p>{`Correct: $\\log_2(x^3) = 3\\log_2 x$. The log of a cube, not the cube of a log.`}</p>
            </div>
          </div>

          <h2>Change of Base Formula</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Change of base</span>
            <div className="ref-formula-eq">{`$$\\log_b x = \\dfrac{\\log_a x}{\\log_a b}$$`}</div>
            <p className="ref-formula-desc">
              When to use: your calculator only has log (base 10) and ln (base {`$e$`}) keys. Set{' '}
              {`$a=10$`} or {`$a=e$`} to evaluate any base {`$b$`} logarithm numerically.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Direct result</span>
            <div className="ref-formula-eq">{`$$\\log_b a = \\dfrac{1}{\\log_a b}$$`}</div>
            <p className="ref-formula-desc">
              When to use: swapping the base and argument of a logarithm. Set {`$x=a$`} in the
              Change of Base Formula to derive it.
            </p>
          </div>

          <h2>Applications</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Law of Forgetting (Ebbinghaus, 1850 to 1909)</span>
            <div className="ref-formula-eq">
              {`$$\\log P = \\log P_0 - c\\log(t+1) \\;\\Rightarrow\\; P = \\dfrac{P_0}{(t+1)^c}$$`}
            </div>
            <p className="ref-formula-desc">
              When to use: modeling how performance {`$P$`} fades from a starting value {`$P_0$`}{' '}
              over time {`$t$`}, with forgetting constant {`$c$`}.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">
              Pareto's Wealth Distribution (Vilfredo Pareto, 1848 to 1923)
            </span>
            <div className="ref-formula-eq">
              {`$$\\log P = \\log c - k\\log W \\;\\Rightarrow\\; P = \\dfrac{c}{W^k}$$`}
            </div>
            <p className="ref-formula-desc">
              When to use: modeling how many people {`$P$`} hold wealth of at least {`$W$`}, with
              constants {`$c$`} and {`$k$`}.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Digit-counting identity</span>
            <div className="ref-formula-eq">{`$$\\text{digits of } x = \\lfloor\\log x\\rfloor + 1$$`}</div>
            <p className="ref-formula-desc">
              When to use: finding how many digits a large positive integer has, without writing it
              out in full.
            </p>
          </div>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function LogarithmsAndTheirLaws() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
