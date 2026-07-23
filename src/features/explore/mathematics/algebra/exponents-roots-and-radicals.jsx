import 'katex/dist/katex.min.css'
import { useMemo } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { ExponentAdditionViz, PowersOf2Viz } from '../../../../components/viz'

function useConfig() {
  return useMemo(
    () => ({
      cssPrefix: 'era',
      documentTitle: 'Exponents, Roots and Radicals AETHER',
      learning: {
        groupTitle: 'Numbers and Expressions',
        category: 'Module 3.2',
        title: 'Exponents, Roots and Radicals',
        subtitle:
          'From the laws of powers to roots and rational exponents: the arithmetic of repeated multiplication.',
        sections: [
          // SECTION 0: Powers
          <>
            <h2>Two Ideas, One Operation</h2>
            <p>
              {`Two big ideas drive this topic. First: how do you write and compare numbers that
              are very large or very small? Second: how do roots connect to powers?`}
            </p>
            <p>
              {`Both rest on one operation: repeated multiplication. Every law in this topic
              follows from counting how many times you multiply.`}
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`If you multiply $a$ by itself 3 times and then by itself 5 more times, how many
                times did you multiply $a$ in total? How does this relate to $a^3 \\cdot a^5$?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`You multiplied $a$ a total of $3 + 5 = 8$ times. So $a^3 \\cdot a^5 = a^8$.
                  This is exactly the product rule for powers.`}
                </p>
              </details>
            </div>

            <h2>Powers with Positive Exponents</h2>

            <p>{`Powers are compact notation for repeated multiplication.`}</p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Power</span>
              <div className="lrn-definition-desc">
                <p>{`For a positive integer $n$, the $n$th power of $a$ is:`}</p>
                <p className="lrn-eq">
                  {`$$a^n = \\underbrace{a \\cdot a \\cdots a}_{n \\text{ times}}$$`}
                </p>
                <p>
                  {`The number $a$ is the `}
                  <strong>base</strong>
                  {` and $n$ is the `}
                  <strong>exponent</strong>
                  {`.`}
                </p>
                <p>
                  {`We read $a^2$ as "$a$ squared" because a square with side $a$ has area $a \\cdot a = a^2$.
                  We read $a^3$ as "$a$ cubed" because a cube with edge $a$ has volume $a \\cdot a \\cdot a = a^3$.`}
                </p>
              </div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Building on what you know</span>
              <p>
                {`You have met powers before. Here you collect every rule for working with them in
                one place, then push the idea to roots and fractional exponents. For a refresher
                on the basic meaning of a base and an exponent, see the arithmetic foundations module.`}
              </p>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The exponent counts factors. Write $a^5$ instead of $a \\cdot a \\cdot a \\cdot a \\cdot a$
                and the count is visible at a glance.`}
              </p>
              <p>
                {`This is why the product rule works. $a^3 \\cdot a^4$ joins three copies of $a$ with four
                more copies, giving seven copies in total: $a^7$.`}
              </p>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Powers of 2</span>
                <p className="lrn-step-content">
                  {`$2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $\\ldots$, $2^{10} = 1024$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Compact notation</span>
                <p className="lrn-step-content">
                  {`$2 \\cdot a \\cdot a \\cdot a \\cdot a \\cdot b \\cdot b \\cdot b \\cdot c \\cdot c \\cdot d
                  = 2a^4b^3c^2d$.`}
                </p>
              </div>
            </div>

            <h3>Scientific Notation</h3>

            <p>
              {`Scientific notation writes any number as $a \\times 10^n$ with $1 \\leq a < 10$. It shortens
              quantities too large or too small to write as ordinary decimals.`}
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Big Numbers</span>
              <ul className="lrn-list">
                <li>{`Speed of light: $3 \\times 10^8$ m/s`}</li>
                <li>{`Molecules in 1 g of water: $\\approx 3 \\times 10^{22}$`}</li>
                <li>{`Radius of the visible universe: $\\approx 10^{26}$ m`}</li>
                <li>{`Human lifespan: $\\approx 2 \\times 10^9$ seconds`}</li>
              </ul>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Small Numbers</span>
              <ul className="lrn-list">
                <li>{`1 centimetre $= 10^{-2}$ m`}</li>
                <li>{`1 nanometre $= 10^{-9}$ m`}</li>
                <li>{`Mass of a water molecule: $\\approx 3 \\times 10^{-23}$ g`}</li>
                <li>{`Diameter of a hydrogen atom: $\\approx 10^{-10}$ m`}</li>
              </ul>
            </div>

            <div className="lrn-insight">
              {`The symbol $\\approx$ means "is roughly equal to". "Big" and "small" depend on units.
              Earth's radius is $6 \\times 10^3$ km and $4 \\times 10^{-5}$ astronomical units at the same
              time. The number changes; the object does not.`}
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Programmers' Trick</span>
              <p>
                {`$2^{10} = 1024$, which is very close to $10^3 = 1000$. So powers of 2 and powers of 10
                stay near each other. This is why "1 kilobyte" means 1024 bytes in computing, not
                exactly 1000.`}
              </p>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Multiplying big numbers</span>
                <p className="lrn-step-content">
                  {`$370{,}000 \\times 2{,}100{,}000 = 7.77 \\times 10^{11}$.
                  A calculator switches to scientific notation when the result is too long for the
                  display.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Distance to a nearby star`}</span>
                <p className="lrn-step-content">
                  {`A star a few light-years away sits at a vast distance in metres.
                  One light-year is light's speed times one year:
                  $3 \\times 10^8 \\text{ m/s} \\times 3.15 \\times 10^7 \\text{ s} \\approx 9.5 \\times 10^{15}$ m.
                  Four light-years is then about $3.8 \\times 10^{16}$ m.`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`How many decimal digits does $10^{1000}$ have? How do you know without computing it?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$10^n$ has $n+1$ digits: a 1 followed by $n$ zeros.
                  So $10^{1000}$ has 1001 digits.`}
                </p>
              </details>
            </div>
          </>,

          // SECTION 1: Zero and Negative Exponents
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`The sequence $2^4 = 16$, $2^3 = 8$, $2^2 = 4$, $2^1 = 2$ halves each time the
                exponent drops by 1. What should $2^0$ equal to keep that pattern?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Halving 2 gives 1. So $2^0 = 1$. The same argument works for any non-zero base:
                  $a^0 = 1$.`}
                </p>
              </details>
            </div>

            <h2>Zero and Negative Exponents</h2>

            <p>
              {`Zero and negative exponents extend the product rule $a^m \\cdot a^n = a^{m+n}$ to all
              integers, not just positive ones.`}
            </p>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Convention, not theorem</span>
              <p>
                {`$a^0 = 1$ and $a^{-n} = \\frac{1}{a^n}$ are agreements. Repeated multiplication alone
                cannot prove them. "Multiplying $a$ by itself zero times" has no direct meaning.`}
              </p>
              <p>
                {`These are the only values that keep $a^m \\cdot a^n = a^{m+n}$ true for every integer
                $m$ and $n$. Any other choice breaks the rule.`}
              </p>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Force the product rule to hold at $n = 0$: $a^m \\cdot a^0 = a^{m+0} = a^m$. Divide by $a^m$.
                You get $a^0 = 1$.`}
              </p>
              <p>
                {`Now force it at $n = -m$: $a^m \\cdot a^{-m} = a^0 = 1$. Divide by $a^m$. You get
                $a^{-m} = \\frac{1}{a^m}$.`}
              </p>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Zero and Negative Powers</span>
              <div className="lrn-definition-desc">
                <p>{`For any non-zero $a$ (that is, $a$ is not zero) and positive integer $n$:`}</p>
                <p className="lrn-eq lrn-eq-hero">
                  {`$$a^0 = 1 \\qquad a^{-n} = \\frac{1}{a^n}$$`}
                </p>
              </div>
            </div>

            <div className="lrn-graph" aria-label="Powers of 2 extending to negative exponents">
              <PowersOf2Viz />
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Extending the sequence of powers of 2</span>
                <p className="lrn-step-content">
                  {`$2^7 = 128$, $2^6 = 64$, $2^5 = 32$, $2^4 = 16$, $2^3 = 8$, $2^2 = 4$,
                  $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$, $2^{-2} = \\frac{1}{4}$,
                  $2^{-3} = \\frac{1}{8}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Writing with only positive exponents</span>
                <p className="lrn-step-content">
                  {`$a^3 b^{-5} = \\frac{a^3}{b^5}$ and $a^{-2}b^{-7} = \\frac{1}{a^2 b^7}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Negative powers of 10`}</span>
                <p className="lrn-step-content">
                  {`$10^{-1} = 0.1$, $10^{-2} = 0.01$, $10^{-3} = 0.001$.`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Verify that $a^5 \\cdot a^{-3} = a^2$ by expanding $a^5 = aaaaa$ and
                $a^{-3} = \\frac{1}{aaa}$, then cancelling.`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$a^5 \\cdot a^{-3} = aaaaa \\cdot \\frac{1}{aaa} = \\frac{aaaaa}{aaa} = aa = a^2$.
                  Three $a$'s cancel from numerator and denominator.`}
                </p>
                <p>{`And $5 + (-3) = 2$, confirming the product rule.`}</p>
              </details>
            </div>
          </>,

          // SECTION 2: Laws of Exponents
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`What should $(a^3)^4$ equal? Think of it as $(a^3)(a^3)(a^3)(a^3)$ and apply the
                product rule four times.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$(a^3)^4 = a^3 \\cdot a^3 \\cdot a^3 \\cdot a^3 = a^{3+3+3+3} = a^{12} = a^{3 \\cdot 4}$.`}
                </p>
              </details>
            </div>

            <h2>Laws of Integer Exponents</h2>

            <p>{`Five laws govern every expression built from integer powers of one base.`}</p>

            <div className="lrn-graph" aria-label="Exponent addition: 2^3 times 2^4 equals 2^7">
              <ExponentAdditionViz />
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Product of powers</span>
                <p className="lrn-step-content lrn-eq">{`$$a^m \\cdot a^n = a^{m+n}$$`}</p>
                <p className="lrn-step-content">{`Example: $a^2 \\cdot a^5 = a^7$ (join 2 copies with 5 more).`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power of a power</span>
                <p className="lrn-step-content lrn-eq">{`$$(a^m)^n = a^{mn}$$`}</p>
                <p className="lrn-step-content">{`Example: $(a^2)^3 = a^6$ (3 copies of $a^2$).`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Quotient of powers</span>
                <p className="lrn-step-content lrn-eq">{`$$\\frac{a^m}{a^n} = a^{m-n}$$`}</p>
                <p className="lrn-step-content">{`Example: $\\frac{a^5}{a^2} = a^3$ (cancel 2 of the 5 copies).`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power of a product</span>
                <p className="lrn-step-content lrn-eq">{`$$(ab)^n = a^n b^n$$`}</p>
                <p className="lrn-step-content">{`Example: $(2a)^3 = 2^3 a^3 = 8a^3$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power of a quotient</span>
                <p className="lrn-step-content lrn-eq">{`$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$`}</p>
                <p className="lrn-step-content">{`Example: $\\left(\\frac{a}{3}\\right)^2 = \\frac{a^2}{9}$ (square the top and the bottom).`}</p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof: Product of Powers</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`$a^m$ is $m$ copies of $a$ multiplied together.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`$a^n$ is $n$ more copies of $a$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Lining them up side by side gives $m + n$ copies in total: $a^{m+n}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`The rule reaches zero and negative integers through the conventions $a^0 = 1$ and
                  $a^{-k} = \\frac{1}{a^k}$. Those conventions were chosen for exactly this reason.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">CHECK A NEGATIVE CASE</span>
              <p>
                {`$a^{-5} \\cdot a^{-3} = \\frac{1}{a^5} \\cdot \\frac{1}{a^3} = \\frac{1}{a^8} = a^{-8}$.
                And $-5 + (-3) = -8$. The rule holds. ✓`}
              </p>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  <strong>{`Multiply $2 \\times 10^7$ and $3 \\times 10^{-11}$.`}</strong>
                </p>
                <ol className="lrn-list">
                  <li>{`Multiply the number parts: $2 \\times 3 = 6$.`}</li>
                  <li>{`Multiply the power parts: $10^7 \\cdot 10^{-11} = 10^{7+(-11)} = 10^{-4}$.`}</li>
                  <li>{`Result: $6 \\times 10^{-4}$.`}</li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">YOUR TURN PARTIAL</span>
                <p>
                  <strong>{`Multiply $5 \\times 10^3$ and $4 \\times 10^{-6}$.`}</strong>
                </p>
                <ol className="lrn-list">
                  <li>{`Multiply the number parts: $5 \\times 4 = ?$`}</li>
                  <li>{`Multiply the power parts: $10^3 \\cdot 10^{-6} = 10^?$`}</li>
                  <li>Write the result in scientific notation.</li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>{`Multiply $7 \\times 10^{-3}$ and $9 \\times 10^{8}$.`}</p>
              </div>
            </div>

            <h3>Combining Several Laws</h3>

            <p>{`Real expressions need more than one law at once. Work outward, one law at a time.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Simplify $\\dfrac{a^3 b^{-2} \\cdot a^{-1}}{b^4}$`}</span>
                <p className="lrn-step-content">
                  {`Top: $a^3 \\cdot a^{-1} = a^{3+(-1)} = a^2$ by the product rule, and the $b^{-2}$ stays.`}
                </p>
                <p className="lrn-step-content">
                  {`So far: $\\frac{a^2 b^{-2}}{b^4}$. Now $\\frac{b^{-2}}{b^4} = b^{-2-4} = b^{-6}$ by the quotient rule.`}
                </p>
                <p className="lrn-step-content">
                  {`Result: $a^2 b^{-6} = \\frac{a^2}{b^6}$. Check at $a = 2, b = 3$: this gives
                  $\\frac{4}{729}$, matching the original. ✓`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Find $n$ so that $2^{1001} \\cdot 2^n = 2^{2000}$. Why?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`Apply the product rule: $2^{1001+n} = 2^{2000}$. So $1001 + n = 2000$,
                  giving $n = 999$.`}
                </p>
              </details>
            </div>

            <h3>Deriving the Power-of-a-Power Rule</h3>

            <p>{`Apply the product rule $n$ times to derive $(a^m)^n = a^{mn}$.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Step-by-step derivation</span>
                <p className="lrn-step-content">
                  {`$(a^m)^n$ is $n$ copies of $a^m$ multiplied together. Add the exponents $n$ times:
                  $m + m + \\cdots + m = mn$. So $(a^m)^n = a^{mn}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Example: $4^{100} = 2^n$`}</span>
                <p className="lrn-step-content">
                  {`$4^{100} = (2^2)^{100} = 2^{2 \\times 100} = 2^{200}$. So $n = 200$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Example: $(2^{10})^{15} = 2^n$`}</span>
                <p className="lrn-step-content">
                  {`$(2^{10})^{15} = 2^{10 \\times 15} = 2^{150}$. So $n = 150$.`}
                </p>
              </div>
            </div>
          </>,

          // SECTION 3: Roots
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`The cube of $2$ is $8$. What number cubed gives $27$? What number cubed gives $-8$?
                Should you accept the negative answer?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$3$ cubed is $27$, so $\\sqrt[3]{27} = 3$. And $(-2)^3 = -8$, so $-2$ does cube to $-8$.
                  By convention we only define roots of zero-or-positive numbers and only take the
                  zero-or-positive answer. This avoids splitting every proof into "even $n$" and
                  "odd $n$" cases.`}
                </p>
              </details>
            </div>

            <h2>Roots</h2>

            <p>{`A root reverses a power. The square root of $9$ is $3$ because $3^2 = 9$.`}</p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">nth Root</span>
              <div className="lrn-definition-desc">
                <p>{`For a positive integer $n$ and a non-negative $a$ (zero or positive), the $n$th root of
                $a$ is the non-negative number $x$ such that $x^n = a$. We write:`}</p>
                <p className="lrn-eq lrn-eq-hero">{`$$\\sqrt[n]{a} = x \\iff x^n = a, \\quad x \\geq 0.$$`}</p>
                <p>
                  {`Square root: $\\sqrt{a} = \\sqrt[2]{a}$. Cube root: $\\sqrt[3]{a}$. Fourth root: $\\sqrt[4]{a}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY DOES THIS NAME EXACTLY ONE NUMBER?</span>
              <p>
                {`If $0 \\leq x_1 < x_2$, then $x_1^n < x_2^n$. A larger non-negative base gives a strictly
                larger $n$th power. So at most one non-negative $x$ can satisfy $x^n = a$.`}
              </p>
              <p>
                {`And one always exists. As $x$ runs from 0 upward, $x^n$ also runs from 0 upward,
                smoothly, with no jumps. So it must hit the value $a$ exactly once.`}
              </p>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Two conventions you must remember</span>
              <ul className="lrn-list">
                <li>
                  {`We take $a \\geq 0$ only. We do not write $\\sqrt[3]{-8}$, even though $(-2)^3 = -8$.
                  This avoids splitting rules into "even $n$" and "odd $n$" cases.`}
                </li>
                <li>
                  {`We take the non-negative root only. For even $n$, both $x$ and $-x$ satisfy $x^n = a$;
                  we always choose the non-negative one.`}
                </li>
              </ul>
            </div>

            <h3>Properties of Roots</h3>

            <p>{`Every property below follows from one trick: raise both sides to the $n$th power.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Product rule</span>
                <p className="lrn-step-content lrn-eq">{`$$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$$`}</p>
                <p className="lrn-step-content">{`Worked: $\\sqrt[4]{16 \\cdot 81} = \\sqrt[4]{16} \\cdot \\sqrt[4]{81} = 2 \\cdot 3 = 6$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Quotient rule</span>
                <p className="lrn-step-content lrn-eq">
                  {`$$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} \\quad (b > 0)$$`}
                </p>
                <p className="lrn-step-content">{`Worked: $\\sqrt{\\frac{9}{4}} = \\frac{\\sqrt{9}}{\\sqrt{4}} = \\frac{3}{2}$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power inside a root</span>
                <p className="lrn-step-content lrn-eq">{`$$\\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$`}</p>
                <p className="lrn-step-content">{`Worked: $\\sqrt{8^2} = (\\sqrt{8})^2 = 8$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Nested roots</span>
                <p className="lrn-step-content lrn-eq">{`$$\\sqrt[mn]{a} = \\sqrt[m]{\\sqrt[n]{a}}$$`}</p>
                <p className="lrn-step-content">{`Worked: $\\sqrt{\\sqrt{16}} = \\sqrt[4]{16} = 2$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Factor pull-out</span>
                <p className="lrn-step-content lrn-eq">{`$$\\sqrt[n]{a^n b} = a \\sqrt[n]{b} \\quad (a \\geq 0)$$`}</p>
                <p className="lrn-step-content">{`Worked: $\\sqrt{50} = \\sqrt{5^2 \\cdot 2} = 5\\sqrt{2}$.`}</p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Proof: $\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Let $x = \\sqrt[n]{a}$ and $y = \\sqrt[n]{b}$. So $x^n = a$ and $y^n = b$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Raise the product $xy$ to the $n$th power: $(xy)^n = x^n y^n = ab$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`So $xy$ is a non-negative number whose $n$th power equals $ab$. By the uniqueness above,
                  $xy = \\sqrt[n]{ab}$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Why does $\\sqrt[n]{a^n b} = a \\sqrt[n]{b}$ follow from the product rule?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`Split the inside: $\\sqrt[n]{a^n b} = \\sqrt[n]{a^n} \\cdot \\sqrt[n]{b}$. By definition,
                  $\\sqrt[n]{a^n} = a$ for $a \\geq 0$. So the whole expression is $a \\sqrt[n]{b}$.`}
                </p>
              </details>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">You can now simplify any root</span>
              <p>
                {`Pull out the largest square (or $n$th power) factor, take its root, and leave the rest
                under the sign. That single move handles every simplification in this section. The next
                section turns these root rules into one rule book by writing roots as exponents.`}
              </p>
            </div>
          </>,

          // SECTION 4: Fractional Exponents
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`If the product rule says $a^p \\cdot a^p = a^{2p}$, what should $a^{\\tfrac{1}{2}}$ equal so
                that $\\left(a^{\\tfrac{1}{2}}\\right)^2 = a^1 = a$?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$(a^{\\tfrac{1}{2}})^2 = a^{(\\tfrac{1}{2}) \\cdot 2} = a^1 = a$. So $a^{\\tfrac{1}{2}}$ is the number whose
                  square is $a$. That is $\\sqrt{a}$.`}
                </p>
              </details>
            </div>

            <h2>Rational (Fractional) Exponents</h2>

            <p>
              {`We just proved every root property by raising both sides to the $n$th power. The same
              proofs work if we redefine $\\sqrt[n]{a}$ as $a^{\\tfrac{1}{n}}$. Once we do, root rules become
              special cases of the laws of exponents. One rule book covers both.`}
            </p>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">The root index is the denominator</span>
              <p>{`$\\sqrt{a} = a^{\\tfrac{1}{2}}$, $\\sqrt[3]{a} = a^{\\tfrac{1}{3}}$, $\\sqrt[4]{a} = a^{\\tfrac{1}{4}}$.`}</p>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Fractional Power</span>
              <div className="lrn-definition-desc">
                <p>{`For $a \\geq 0$, integer $m$, and positive integer $n$:`}</p>
                <p className="lrn-eq lrn-eq-hero">
                  {`$$a^{\\tfrac{1}{n}} = \\sqrt[n]{a}, \\qquad a^{\\tfrac{m}{n}} = (\\sqrt[n]{a})^m.$$`}
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY THIS DEFINITION?</span>
              <p>
                {`Force the power-of-a-power rule at $(a^{\\tfrac{1}{n}})^n = a^{(\\tfrac{1}{n}) \\cdot n} = a^1 = a$. The only
                non-negative number whose $n$th power equals $a$ is $\\sqrt[n]{a}$. So $a^{\\tfrac{1}{n}} = \\sqrt[n]{a}$.`}
              </p>
              <p>
                {`Once unit fractions are pinned down, the rest follows: $a^{\\tfrac{m}{n}} = (a^{\\tfrac{1}{n}})^m = (\\sqrt[n]{a})^m$.`}
              </p>
            </div>

            <h3>A First Numeric Example</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Compute $8^{\\tfrac{2}{3}}$`}</span>
                <p className="lrn-step-content">
                  {`Take the cube root first: $\\sqrt[3]{8} = 2$. Then square it: $2^2 = 4$. So $8^{\\tfrac{2}{3}} = 4$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`A negative fractional power: $16^{-\\tfrac{3}{4}}$`}</span>
                <p className="lrn-step-content">
                  {`The minus sign means "flip": $16^{-\\tfrac{3}{4}} = \\frac{1}{16^{\\tfrac{3}{4}}}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Now $16^{\\tfrac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$. So $16^{-\\tfrac{3}{4}} = \\frac{1}{8}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`One more: $27^{-\\tfrac{2}{3}}$`}</span>
                <p className="lrn-step-content">
                  {`Flip, then evaluate: $27^{-\\tfrac{2}{3}} = \\frac{1}{27^{\\tfrac{2}{3}}} = \\frac{1}{(\\sqrt[3]{27})^2}
                  = \\frac{1}{3^2} = \\frac{1}{9}$.`}
                </p>
              </div>
            </div>

            <h3>Well-Definedness Check</h3>

            <p>
              {`The fraction $\\frac{m}{n}$ can be written in many ways: $\\frac{2}{3} = \\frac{10}{15}$.
              We must check that $a^{\\tfrac{2}{3}}$ and $a^{\\tfrac{10}{15}}$ give the same answer.`}
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Proof: Reducing $\\frac{m}{n}$ Does Not Change $a^{\\tfrac{m}{n}}$`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`$a^{\\tfrac{10}{15}} = (\\sqrt[15]{a})^{10}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`We need to show this equals $(\\sqrt[3]{a})^2$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Raise both to the 15th power. $((\\sqrt[15]{a})^{10})^{15} = a^{10}$ ✓.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Also $((\\sqrt[3]{a})^2)^{15} = (\\sqrt[3]{a})^{30} = ((\\sqrt[3]{a})^3)^{10} = a^{10}$ ✓.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">
                  {`Both expressions have the same 15th power and are non-negative, so they are equal.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Laws of Rational Exponents</h3>

            <p>{`All five integer-exponent laws extend to rational exponents without change.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Product rule</span>
                <p className="lrn-step-content lrn-eq">{`$$a^p \\cdot a^q = a^{p+q}$$`}</p>
                <p className="lrn-step-content">{`Friendly case: $8^{\\tfrac{1}{3}} \\cdot 8^{\\tfrac{1}{3}} = 8^{\\tfrac{2}{3}} = 4$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Product base rule</span>
                <p className="lrn-step-content lrn-eq">
                  {`$$(ab)^{\\tfrac{m}{n}} = a^{\\tfrac{m}{n}} \\cdot b^{\\tfrac{m}{n}}$$`}
                </p>
                <p className="lrn-step-content">{`Friendly case: $(4 \\cdot 9)^{\\tfrac{1}{2}} = 4^{\\tfrac{1}{2}} \\cdot 9^{\\tfrac{1}{2}} = 2 \\cdot 3 = 6$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power of a power</span>
                <p className="lrn-step-content lrn-eq">{`$$(a^p)^q = a^{pq}$$`}</p>
                <p className="lrn-step-content">{`Friendly case: $(9^{\\tfrac{1}{2}})^3 = 9^{\\tfrac{3}{2}} = 27$.`}</p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof: Product Rule for Rational Exponents</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Let $p = \\frac{2}{5}$ and $q = \\frac{3}{7}$. Find a common denominator: $p + q =
                  \\frac{14}{35} + \\frac{15}{35} = \\frac{29}{35}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`$a^{2/5} \\cdot a^{3/7} = (\\sqrt[5]{a})^2 \\cdot (\\sqrt[7]{a})^3
                  = (\\sqrt[35]{a})^{14} \\cdot (\\sqrt[35]{a})^{15} = (\\sqrt[35]{a})^{29} = a^{29/35}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`This equals $a^{p+q}$. ✓`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Irrational Exponents (Preview)</h3>

            <p>
              {`$2^{\\sqrt{2}}$ has no meaning from repeated multiplication. $\\sqrt{2}$ is irrational, so
              it cannot count copies.`}
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Definition via Approximation</span>
              <p>
                {`$2^{\\sqrt{2}}$ is the unique number larger than every $2^{\\tfrac{p}{q}}$ with $\\frac{p}{q} < \\sqrt{2}$
                and smaller than every $2^{\\tfrac{p}{q}}$ with $\\frac{p}{q} > \\sqrt{2}$.`}
              </p>
              <p>
                {`Calculus is needed to prove this number exists and is unique. Once it does, every
                exponent law extends from rationals to all real numbers.`}
              </p>
            </div>
          </>
        ]
      },

      // PRACTICE CARDS
      practice: [
        // Powers positive
        {
          q: 'Write $a \\cdot a \\cdot a \\cdot b \\cdot b \\cdot c$ in power notation.',
          a: '$a^3 b^2 c$. Count the repetitions: $a$ appears 3 times, $b$ appears 2 times, $c$ appears once. Exponents record the count of repeated multiplication.'
        },
        {
          q: 'How many decimal digits does $10^{7}$ have?',
          a: '8 digits. $10^7 = 10{,}000{,}000$. In general, $10^n$ has $n+1$ digits: a 1 followed by $n$ zeros.'
        },
        // Scientific notation
        {
          q: 'A calculator shows $3.77 \\times 10^{11}$ for a product. Convert this to a regular integer.',
          a: '$377{,}000{,}000{,}000$ (377 billion). Move the decimal point 11 places to the right: $3.77 \\times 10^{11} = 377 \\times 10^9$.'
        },
        {
          q: 'The speed of light is $3 \\times 10^8$ m/s. Light takes about 8 minutes to reach Earth from the Sun. How far away is the Sun in metres? (8 minutes = 480 seconds)',
          a: 'Distance $= 3 \\times 10^8 \\times 480 = 3 \\times 480 \\times 10^8 = 1440 \\times 10^8 = 1.44 \\times 10^{11}$ m. Just multiply the number parts and keep the power of ten.'
        },
        // Zero and negative exponents
        {
          q: 'Why does $a^0 = 1$ follow from the product rule $a^m \\cdot a^n = a^{m+n}$?',
          a: 'Set $n = 0$: $a^m \\cdot a^0 = a^{m+0} = a^m$. Divide both sides by $a^m$: $a^0 = 1$. This is the only value of $a^0$ that keeps the product rule true.'
        },
        {
          q: 'Write $\\frac{1}{a^5}$ using a negative exponent.',
          a: '$a^{-5}$. By definition $a^{-n} = \\frac{1}{a^n}$, so $\\frac{1}{a^5} = a^{-5}$. This convention is chosen to preserve $a^m \\cdot a^n = a^{m+n}$.'
        },
        {
          q: 'Write $a^{-2} b^{-7}$ using only positive exponents.',
          a: '$\\frac{1}{a^2 b^7}$. Move each factor with a negative exponent to the denominator: $a^{-2} = \\frac{1}{a^2}$ and $b^{-7} = \\frac{1}{b^7}$.'
        },
        // Product rule
        {
          q: 'Simplify $a^5 \\cdot a^{-3}$. Show the cancellation.',
          a: '$a^{5+(-3)} = a^2$. By the product rule, add exponents. To verify: $a^5 \\cdot a^{-3} = aaaaa \\cdot \\frac{1}{aaa} = aa = a^2$. ✓'
        },
        {
          q: 'Simplify $(2^{10})^{15}$.',
          a: '$2^{150}$. Apply $(a^m)^n = a^{mn}$: $10 \\times 15 = 150$. This rule says repeated powering multiplies the exponents.'
        },
        {
          q: 'Simplify $\\dfrac{a^3 b^{-2} \\cdot a^{-1}}{b^4}$ using only positive exponents.',
          a: '$\\frac{a^2}{b^6}$. Top: $a^3 \\cdot a^{-1} = a^2$ (product rule), leaving $\\frac{a^2 b^{-2}}{b^4}$. Then $\\frac{b^{-2}}{b^4} = b^{-6}$ (quotient rule). So the result is $a^2 b^{-6} = \\frac{a^2}{b^6}$.'
        },
        {
          q: 'Find $n$ such that $2^{1001} \\cdot 2^n = 2^{2000}$.',
          a: '$n = 999$. By the product rule: $2^{1001+n} = 2^{2000}$, so $1001 + n = 2000$, giving $n = 999$.'
        },
        {
          q: '$4^{100} = 2^n$. Find $n$.',
          a: '$n = 200$. Write $4 = 2^2$, so $4^{100} = (2^2)^{100} = 2^{200}$ by the power-of-a-power rule.'
        },
        // Roots
        {
          q: 'Simplify $\\sqrt{72}$ using the factor pull-out rule.',
          a: '$6\\sqrt{2}$. Factor $72 = 36 \\cdot 2 = 6^2 \\cdot 2$. So $\\sqrt{72} = \\sqrt{6^2 \\cdot 2} = 6\\sqrt{2}$.'
        },
        {
          q: 'Why is $\\sqrt[3]{-8}$ left undefined in this module, even though $(-2)^3 = -8$?',
          a: 'By convention we only take roots of zero-or-positive numbers, and only the zero-or-positive root. This avoids splitting every proof into separate "even $n$" and "odd $n$" cases. The cube root of a negative number can be defined, but you handle it elsewhere.'
        },
        {
          q: 'Prove $\\sqrt[6]{a} = \\sqrt{\\sqrt[3]{a}}$ for $a \\geq 0$.',
          a: 'Let $y = \\sqrt{\\sqrt[3]{a}}$. Then $y^2 = \\sqrt[3]{a}$ and $(y^2)^3 = a$, so $y^6 = a$. The non-negative number whose $6$th power equals $a$ is $\\sqrt[6]{a}$, so $y = \\sqrt[6]{a}$.'
        },
        // Fractional exponents
        {
          q: 'What does $a^{\\tfrac{1}{3}}$ mean? Why is this the natural definition?',
          a: '$a^{\\tfrac{1}{3}} = \\sqrt[3]{a}$. Force $(a^{\\tfrac{1}{3}})^3 = a^{(\\tfrac{1}{3}) \\cdot 3} = a^1 = a$, so $a^{\\tfrac{1}{3}}$ must be the number whose cube is $a$, the cube root.'
        },
        {
          q: 'Compute $8^{\\tfrac{2}{3}}$.',
          a: '$4$. By definition $8^{\\tfrac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$. Step 1: take the cube root of 8 to get 2. Step 2: square the result to get 4.'
        },
        {
          q: 'Compute $16^{-\\tfrac{3}{4}}$.',
          a: '$\\frac{1}{8}$. The minus sign means flip: $16^{-\\tfrac{3}{4}} = \\frac{1}{16^{\\tfrac{3}{4}}}$. Then $16^{\\tfrac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$. So the answer is $\\frac{1}{8}$.'
        },
        {
          q: 'Prove $a^{\\tfrac{2}{3}} = a^{\\tfrac{10}{15}}$ for $a \\geq 0$.',
          a: 'Both expressions, when raised to the 15th power, give $a^{10}$. Since both are non-negative and have the same 15th power, they are equal. This shows reducing $\\frac{m}{n}$ does not change $a^{\\tfrac{m}{n}}$.'
        },
        {
          q: 'A bacteria culture multiplies by a factor of $N$ over one hour, with steady growth (same factor per unit of time). What factor does it multiply by over $\\frac{2}{3}$ of an hour?',
          a: '$N^{\\tfrac{2}{3}}$. If the hourly factor is $N$, then in time $t$ the factor is $N^t$. At $t = \\frac{2}{3}$ the factor is $N^{\\tfrac{2}{3}} = (\\sqrt[3]{N})^2$.'
        },
        {
          q: 'A student says: "I proved $a^0 = 1$ by simplifying $\\frac{a^3}{a^3} = 1$." Is this a proof, or is it circular? Explain.',
          a: 'It is circular unless you have already defined $\\frac{a^m}{a^n} = a^{m-n}$. That quotient rule itself requires knowing what $a^0$ means. The honest answer: $a^0 = 1$ is a convention chosen to make $a^m \\cdot a^n = a^{m+n}$ hold for all integers. We cannot prove it from repeated multiplication alone.'
        }
      ],

      // REFERENCE
      reference: {
        category: 'Quick Reference',
        title: 'Exponents, Roots and Radicals',
        sections: [
          <>
            <h2>Integer Exponent Laws</h2>

            <p className="lrn-eq lrn-eq-hero">{`$$a^m \\cdot a^n = a^{m+n}$$`}</p>
            <p className="lrn-eq">{`$$(a^m)^n = a^{mn} \\qquad \\frac{a^m}{a^n} = a^{m-n}$$`}</p>
            <p className="lrn-eq">{`$$(ab)^n = a^n b^n \\qquad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$`}</p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Conventions</span>
              <p>{`$a^0 = 1$ and $a^{-n} = \\frac{1}{a^n}$ for $a \\neq 0$. These are agreements, not theorems.`}</p>
            </div>

            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Expression</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$2^{10}$`}</td>
                  <td>1024</td>
                </tr>
                <tr>
                  <td>{`$10^{-1}$`}</td>
                  <td>0.1</td>
                </tr>
                <tr>
                  <td>{`$10^{-2}$`}</td>
                  <td>0.01</td>
                </tr>
                <tr>
                  <td>{`$10^{-3}$`}</td>
                  <td>0.001</td>
                </tr>
              </tbody>
            </table>

            <h2>Rational Exponents and Roots</h2>

            <p className="lrn-eq lrn-eq-hero">{`$$a^{\\tfrac{1}{n}} = \\sqrt[n]{a} \\qquad a^{\\tfrac{m}{n}} = (\\sqrt[n]{a})^m$$`}</p>

            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Root Rule</th>
                  <th>Formula</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product</td>
                  <td>{`$\\sqrt[n]{ab} = \\sqrt[n]{a}\\cdot\\sqrt[n]{b}$`}</td>
                </tr>
                <tr>
                  <td>Quotient</td>
                  <td>{`$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$`}</td>
                </tr>
                <tr>
                  <td>Power of root</td>
                  <td>{`$\\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$`}</td>
                </tr>
                <tr>
                  <td>Nested roots</td>
                  <td>{`$\\sqrt[mn]{a} = \\sqrt[m]{\\sqrt[n]{a}}$`}</td>
                </tr>
                <tr>
                  <td>Factor pull-out</td>
                  <td>{`$\\sqrt[n]{a^n b} = a\\sqrt[n]{b}$`}</td>
                </tr>
              </tbody>
            </table>
          </>
        ]
      },

      customCss:
        '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
    }),
    []
  )
}

export default function ExponentsRootsAndRadicals() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}

export function useExponentsRootsAndRadicalsConfig() {
  return useConfig()
}
