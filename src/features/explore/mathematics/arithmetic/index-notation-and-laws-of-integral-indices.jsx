import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import * as viz from './index-notation-and-laws-of-integral-indices-viz'

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'ili',
    documentTitle: 'Index Notation and Laws of Integral Indices - AETHER',
    learning: {
      groupTitle: 'Indices and Scientific Notation',
      category: 'Module 10.1',
      title: 'Index Notation and Laws of Integral Indices',
      subtitle:
        'Powers are a shorthand for repeated multiplication. A handful of index laws govern everything you can do with them: from multiplying to writing the mass of the Earth.',
      sections: [
        <>
          <h2>{`Reading a Power`}</h2>

          <p>{`The mass of the Earth is 6,000,000,000,000,000,000,000,000 kg. Powers let you write that as $6 \\times 10^{24}$ kg. Instead of $2 \\times 2 \\times 2 \\times 2$, you write $2^4$. The number being multiplied is the base. The count of how many times it appears is the exponent (also called the index).`}</p>

          <p>{`$a^n$ is read "a to the n-th power." Two special names: $a^2$ is called "a squared" because a square of side $a$ has area $a^2$. $a^3$ is called "a cubed" because a cube of side $a$ has volume $a^3$.`}</p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Index Notation`}</div>
            <div className="lrn-definition-desc">
              <p>{`$$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ factors}}$$`}</p>
              <p>{`Here $a$ is the base and $n$ is the exponent (or index). This definition holds for positive integers $n$.`}</p>
            </div>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>{`When to use this:`}</strong>
              {` Any time you see repeated multiplication of the same factor, write it as a power. It saves space and makes laws easier to spot.`}
            </p>
          </div>

          <div className="lrn-contrast">
            <p>
              <strong>{`Contrast: $a^n$ vs $n \\times a$.`}</strong>
              {` $a^n$ means multiply $a$ by itself $n$ times. $n \\times a$ means add $a$ to itself $n$ times. These are different operations. For example, $2^3 = 8$ but $3 \\times 2 = 6$.`}
            </p>
          </div>

          <div className="lrn-graph">
            <viz.FactorBlockDiagram C={C} />
          </div>

          <h2>{`Computing Powers`}</h2>

          <p>{`To find $2^{10}$, multiply 2 by itself 10 times: $2^1=2,\\ 2^2=4,\\ 2^3=8,\\ 2^4=16,\\ 2^5=32,\\ 2^6=64,\\ 2^7=128,\\ 2^8=256,\\ 2^9=512,\\ 2^{10}=1024$.`}</p>

          <p>{`Powers of 10 are useful because each step up multiplies by 10, adding one zero. $10^3 = 1000$ and $10^7 = 10{,}000{,}000$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $2^{10}$ come out so close to $10^3$? What does that tell you about how 2 and 10 are related?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$2^{10} = 1024 \\approx 10^3 = 1000$. The base 2 grows slowly compared to base 10. It takes 10 doublings to roughly match 3 tens. Programmers use "kilo" to mean 1024, not 1000. This is why 1 kilobyte = 1024 bytes.`}</p>
            </details>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`How many decimal digits does $10^{1000}$ have? Think before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$10^{1000}$ is a 1 followed by 1000 zeros, so it has 1001 digits. In general, $10^n$ has $n+1$ digits.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Each power of 10 adds exactly one digit because our number system is base 10. $10^1 = 10$ has 2 digits, $10^2 = 100$ has 3, and so on.`}</p>
          </div>
        </>,

        <>
          <h2>{`Negative Powers`}</h2>

          <p>{`Start with the powers of 2 and step down. Each step to the right divides by 2: $\\ldots, 8, 4, 2, 1, \\ldots$ When you reach $2^0 = 1$, do not stop. Keep dividing by 2. The pattern keeps going: $2^{-1} = \\frac{1}{2}$, then $2^{-2} = \\frac{1}{4}$, then $2^{-3} = \\frac{1}{8}$.`}</p>

          <p>{`So a zero exponent lands on 1. Each negative exponent is a reciprocal. A reciprocal flips a fraction: the reciprocal of $a$ is $\\frac{1}{a}$. The halving pattern alone fixes these values.`}</p>

          <div className="lrn-callout">
            <p>
              <strong>{`When to use this:`}</strong>
              {` Use negative exponents whenever you need to write a reciprocal in compact form, especially for very small quantities.`}
            </p>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Negative Integer Exponent`}</div>
            <div className="lrn-definition-desc">
              <p>{`$$a^{-n} = \\frac{1}{a^n} \\quad \\text{for positive integer } n$$`}</p>
              <p>{`Each step down the ladder divides by $a$. Going $n$ steps below $a^0 = 1$ divides by $a$ a total of $n$ times, which gives $\\frac{1}{a^n}$.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Zero Exponent`}</div>
            <div className="lrn-definition-desc">
              <p>{`$$a^0 = 1 \\quad \\text{for any non-zero } a$$`}</p>
              <p>{`It sits where the ladder crosses 1, between $a^1 = a$ and $a^{-1} = \\frac{1}{a}$.`}</p>
            </div>
          </div>

          <div className="lrn-contrast">
            <p>
              <strong>{`Contrast: negative exponent vs negative base.`}</strong>
              {` $a^{-n}$ means take the reciprocal: $3^{-2} = \\frac{1}{9}$, which is positive. $(-3)^2 = 9$, also positive (even power). But $(-3)^3 = -27$, negative (odd power). These are different operations. Do not mix them up.`}
            </p>
          </div>

          <div className="lrn-contrast">
            <p>
              <strong>{`Contrast: $a^0 = 1$ vs $0^a = 0$.`}</strong>
              {` Any non-zero base to the power 0 equals 1. Zero raised to any positive power equals 0. These go in opposite directions. Note: most contexts leave $0^0$ undefined.`}
            </p>
          </div>

          <h2>{`Specific Values`}</h2>

          <p>{`The powers of 2 near zero form a clean halving sequence:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$2^3 = 8,\\quad 2^2 = 4,\\quad 2^1 = 2,\\quad 2^0 = 1,\\quad 2^{-1} = \\tfrac{1}{2},\\quad 2^{-2} = \\tfrac{1}{4},\\quad 2^{-3} = \\tfrac{1}{8}$$`}
          </div>

          <div className="lrn-graph">
            <viz.HalvingLadder C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does dividing by 2 at each step produce $\\frac{1}{2^n}$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Because $2^n \\div 2 = 2^{n-1}$, so going down the ladder always subtracts 1 from the exponent. After $n$ steps below $2^0 = 1$, you reach $2^{-n} = \\frac{1}{2^n}$.`}</p>
            </details>
          </div>

          <h2>{`Small Numbers Around Us`}</h2>

          <p>{`Just as large distances use positive powers of 10, tiny measurements use negative powers.`}</p>

          <ul className="lrn-list">
            <li>{`1 centimetre = $10^{-2}$ metres`}</li>
            <li>{`1 millimetre = $10^{-3}$ metres`}</li>
            <li>{`1 micrometre = $10^{-6}$ metres`}</li>
            <li>{`1 nanometre = $10^{-9}$ metres`}</li>
            <li>{`1 angstrom = $10^{-10}$ metres`}</li>
            <li>{`Mass of a water molecule: about $3 \\times 10^{-26}$ kg`}</li>
            <li>{`Size of a living cell: about $10^{-5}$ metres`}</li>
            <li>{`Wavelength of red light: about $7 \\times 10^{-7}$ metres`}</li>
          </ul>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Is $a^{-n} = \\frac{1}{a^n}$ still valid when $n$ is itself negative? For example, is $a^{-(-3)} = a^3$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. $a^{-(-3)} = \\frac{1}{a^{-3}} = \\frac{1}{\\frac{1}{a^3}} = a^3$. The formula holds for all integers $n$.`}</p>
            </details>
          </div>

          <div className="lrn-graph">
            <viz.InteractiveExponentSlider C={C} />
          </div>
        </>,

        <>
          <h2>{`Big Numbers Around Us`}</h2>

          <p>{`Scientists often work with numbers too large to write out. Powers of 10 give a compact language for them. The distance from Earth to the closest star (about 4 light-years) works out to roughly $4 \\times 10^{16}$ metres.`}</p>

          <div className="lrn-callout">
            <p>
              <strong>{`When to use this:`}</strong>
              {` Use powers of 10 whenever a plain number would need many digits. That usually means more than 4 or 5 zeros.`}
            </p>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Big Numbers as Powers of 10`}</div>
            <div className="lrn-definition-desc">
              <p>{`Examples from science and everyday life:`}</p>
              <ul className="lrn-list">
                <li>{`Molecules in a drop of water: about $10^{21}$`}</li>
                <li>{`Radius of Earth: about $6 \\times 10^6$ metres`}</li>
                <li>{`Earth to Moon distance: about $3.8 \\times 10^8$ metres`}</li>
                <li>{`Earth to Sun distance: about $1.5 \\times 10^{11}$ metres`}</li>
                <li>{`Radius of observable universe: about $10^{26}$ metres`}</li>
                <li>{`Mass of Earth: about $6 \\times 10^{24}$ kg`}</li>
                <li>{`Age of Earth: about $5 \\times 10^9$ years`}</li>
                <li>{`Age of universe: about $1.4 \\times 10^{10}$ years`}</li>
                <li>{`World population: about $8 \\times 10^9$`}</li>
                <li>{`Human lifespan in seconds: about $2.5 \\times 10^9$`}</li>
              </ul>
            </div>
          </div>

          <div className="lrn-graph">
            <viz.StandardFormScale C={C} />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Look at the scale diagram. Why does each step to the right represent 10 times the previous distance?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Because each step multiplies by 10. Moving one step right multiplies by $10^1 = 10$. Two steps right multiplies by $10^2 = 100$. The distance between steps is always the same on the diagram. But the actual quantity grows by a factor of 10 each time.`}</p>
            </details>
          </div>

          <p>{`A calculator showing $370{,}000 \\times 2{,}100{,}000$ may display "7.77 11" or "7.77 E11", meaning $7.77 \\times 10^{11}$.`}</p>
        </>,

        <>
          <h2>{`Compact Notation with Multiple Variables`}</h2>

          <p>{`When an expression has many repeated factors across several variables, index notation compresses all of them at once. For example:`}</p>

          <div className="lrn-eq">
            {`$$2 \\cdot a \\cdot a \\cdot a \\cdot a \\cdot b \\cdot b \\cdot b \\cdot c \\cdot c \\cdot d = 2a^4b^3c^2d$$`}
          </div>

          <p>{`In chemistry, the formula for caffeine is $C_8H_{10}N_4O_2$. Each subscript counts the atoms of that element. It is a count, not an exponent, but the idea of bundling repeats into one number is the same.`}</p>

          <div className="lrn-callout">
            <p>
              <strong>{`When to use this:`}</strong>
              {` Compact notation is standard in algebra. Always write products with indices rather than repeated letters.`}
            </p>
          </div>

          <p>{`Fractions with repeated variables also compress. Denominator factors become negative exponents:`}</p>

          <div className="lrn-eq">
            {`$$\\frac{2 \\cdot a \\cdot a \\cdot a \\cdot a \\cdot c \\cdot c}{b \\cdot b \\cdot b \\cdot d} = 2a^4b^{-3}c^2d^{-1}$$`}
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Before reading on, predict what $\\frac{a^3 b^{-2}}{c^{-1} d^2}$ looks like with only positive exponents.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{a^3 b^{-2}}{c^{-1} d^2} = \\frac{a^3 c}{b^2 d^2}$. Negative exponents in the numerator move to the denominator ($b^{-2}$ becomes $b^2$). Negative exponents in the denominator move to the numerator ($c^{-1}$ becomes $c$).`}</p>
            </details>
          </div>

          <h2>{`Writing Positive Powers Only`}</h2>

          <p>{`Sometimes you need to rewrite an expression using only positive exponents. Move any factor with a negative exponent to the other side of the fraction bar:`}</p>

          <div className="lrn-steps">
            <p>{`Example: rewrite $a^3b^{-5}$ with only positive exponents.`}</p>
            <ol className="lrn-list">
              <li>{`$b^{-5}$ means $\\frac{1}{b^5}$.`}</li>
              <li>{`So $a^3b^{-5} = \\frac{a^3}{b^5}$.`}</li>
            </ol>
          </div>

          <div className="lrn-steps">
            <p>{`Example: rewrite $a^{-2}b^{-7}$ with only positive exponents.`}</p>
            <ol className="lrn-list">
              <li>{`Both factors have negative exponents.`}</li>
              <li>{`$a^{-2}b^{-7} = \\frac{1}{a^2} \\cdot \\frac{1}{b^7} = \\frac{1}{a^2b^7}$.`}</li>
            </ol>
          </div>
        </>,

        <>
          <h2>{`The Product Law`}</h2>

          <p>{`Bacteria double every hour. After 3 hours a culture has $2^3$ cells. After 5 more hours it has $2^3 \\times 2^5 = 2^8$ cells. You add the exponents. This is the product law.`}</p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Product Law (Index Law 1)`}</div>
            <div className="lrn-definition-desc">
              <p>{`$$a^m \\cdot a^n = a^{m+n}$$`}</p>
              <p>{`The base must be the same. The exponents add.`}</p>
            </div>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>{`When to use this:`}</strong>
              {` Whenever you multiply two powers of the same base. Does not apply when the bases differ: $2^3 \\times 3^2 \\neq 6^5$.`}
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does it work for negative exponents too? Check: $a^5 \\cdot a^{-3} = a^5 \\cdot \\frac{1}{a^3} = \\frac{a^5}{a^3} = a^2 = a^{5+(-3)}$. The law holds.`}</p>
            <p>{`Also: $a^{-5} \\cdot a^3 = \\frac{1}{a^5} \\cdot a^3 = \\frac{a^3}{a^5} = \\frac{1}{a^2} = a^{-2} = a^{-5+3}$. Holds again.`}</p>
            <p>{`And: $a^{-5} \\cdot a^{-3} = \\frac{1}{a^5} \\cdot \\frac{1}{a^3} = \\frac{1}{a^8} = a^{-8} = a^{(-5)+(-3)}$. Holds.`}</p>
          </div>

          <div className="lrn-insight">
            <p>{`The product law also explains why $a^0 = 1$ and $a^{-n} = \\frac{1}{a^n}$ were the right choices. The halving ladder suggested them. The product law confirms them: $a^m \\cdot a^0 = a^{m+0} = a^m$, so $a^0$ must be 1. And $a^n \\cdot a^{-n} = a^{n+(-n)} = a^0 = 1$, so $a^{-n}$ must be $\\frac{1}{a^n}$. No other values keep the law working for every integer.`}</p>
          </div>

          <h2>{`Worked Examples`}</h2>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Simplify $3^2 \\times 3^4$.`}</p>
              <ol className="lrn-list">
                <li>{`Same base: 3.`}</li>
                <li>{`Add exponents: $2 + 4 = 6$.`}</li>
                <li>{`Answer: $3^6 = 729$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Simplify $3x^2 \\times 4x^5$.`}</p>
              <ol className="lrn-list">
                <li>{`Multiply the coefficients (the plain numbers in front, the 3 and the 4): $3 \\times 4 = 12$.`}</li>
                <li>{`Add the exponents of $x$: $2 + 5 = ?$`}</li>
                <li>{`Write the answer: $12x^{?}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Simplify $4a^7 \\times 5a^2$.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <p>{`$7^3 \\times 7^{-2}$: same base 7, add exponents: $7^{3+(-2)} = 7^1 = 7$.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do coefficients multiply separately from the variable part?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Because $3x^2 \\times 4x^5 = (3 \\times 4) \\times (x^2 \\times x^5)$ by the associative and commutative laws of multiplication (we may reorder and regroup factors freely). You can group the numbers and the variables separately.`}</p>
            </details>
          </div>

          <div className="lrn-graph">
            <viz.ProductLawVisualizer C={C} />
          </div>
        </>,

        <>
          <h2>{`The Quotient Law`}</h2>

          <p>{`A jet travels at $10^3$ km/h. A snail moves at $10^{-2}$ km/h. The ratio is $\\frac{10^3}{10^{-2}} = 10^{3-(-2)} = 10^5$. The jet is 100,000 times faster. This is the quotient law at work.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`What does $\\frac{a^n}{a^{n+1}}$ simplify to? Think before checking.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{a^n}{a^{n+1}} = a^{n-(n+1)} = a^{-1} = \\frac{1}{a}$. Subtracting a larger exponent in the denominator gives a negative result, which means a reciprocal.`}</p>
            </details>
          </div>

          <p>{`Dividing powers of the same base cancels common factors. $\\frac{a^5}{a^3} = \\frac{a \\times a \\times a \\times a \\times a}{a \\times a \\times a} = a^2$. Three factors cancel, leaving two. You subtract the exponents.`}</p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Quotient Law (Index Law 2)`}</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\frac{a^m}{a^n} = a^{m-n}$$`}</p>
              <p>{`The base must be the same. Subtract the denominator's exponent from the numerator's.`}</p>
            </div>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>{`When to use this:`}</strong>
              {` Whenever you divide two powers of the same base. Applies for all integer exponents, positive or negative.`}
            </p>
          </div>

          <h2>{`Worked Examples`}</h2>

          <div className="lrn-steps">
            <p>{`$2^4 \\div 2^2 = 2^{4-2} = 2^2 = 4$.`}</p>
          </div>

          <div className="lrn-steps">
            <p>{`$5^6 \\div 5^2 = 5^{6-2} = 5^4$.`}</p>
          </div>

          <div className="lrn-steps">
            <p>{`$12x^5 \\div 3x^2$: divide coefficients, subtract exponents: $\\frac{12}{3} = 4$, $x^{5-2} = x^3$, giving $4x^3$.`}</p>
          </div>

          <div className="lrn-graph">
            <viz.QuotientLawCancellation C={C} />
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The quotient law follows directly from the product law. $\\frac{a^m}{a^n} = a^m \\cdot a^{-n} = a^{m + (-n)} = a^{m-n}$.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`What happens when $m = n$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\frac{a^n}{a^n} = a^{n-n} = a^0 = 1$. This matches the fact that any non-zero quantity divided by itself is 1.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>{`The Power-of-a-Power Law`}</h2>

          <p>{`A savings account grows by a factor of $(1.05)^{12}$ per year. Over 10 years it grows by $((1.05)^{12})^{10} = (1.05)^{120}$. Raising a power to another power multiplies the exponents.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`What is $(10^3)^4$? Think in standard form terms before checking.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$(10^3)^4 = 10^{3 \\times 4} = 10^{12}$. In standard form terms: $10^3 = 1000$, and $1000^4 = 1{,}000{,}000{,}000{,}000 = 10^{12}$. Both routes give the same answer.`}</p>
            </details>
          </div>

          <p>{`Raising a power to another power repeats the whole group. $(a^2)^3 = a^2 \\cdot a^2 \\cdot a^2$. Each of the three groups has 2 factors, so there are $2 \\times 3 = 6$ factors in total: $(a^2)^3 = a^6$. You multiply the exponents.`}</p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Power-of-a-Power Law (Index Law 3)`}</div>
            <div className="lrn-definition-desc">
              <p>{`$$(a^m)^n = a^{m \\times n}$$`}</p>
              <p>{`Multiply the two exponents together.`}</p>
            </div>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>{`When to use this:`}</strong>
              {` When a power expression sits inside brackets with another exponent outside. Brackets matter: $(a^2)^3 \\neq a^{2^3}$.`}
            </p>
          </div>

          <div className="lrn-contrast">
            <p>
              <strong>{`Contrast: Product Law vs Power-of-a-Power.`}</strong>
              {` Product law: $a^m \\times a^n = a^{m+n}$ (add exponents). Power-of-power: $(a^m)^n = a^{mn}$ (multiply exponents). Both involve exponent arithmetic but in different directions.`}
            </p>
          </div>

          <div className="lrn-contrast">
            <p>
              <strong>{`Contrast: power of a product vs power of a sum.`}</strong>
              {` $(ab)^n = a^n b^n$ is true. But $(a+b)^n \\neq a^n + b^n$. For example, $(2+3)^2 = 25$ but $2^2 + 3^2 = 13$. The power applies to each factor, but not to each part of a sum.`}
            </p>
          </div>

          <h2>{`Worked Examples`}</h2>

          <div className="lrn-steps">
            <p>{`$(x^2)^3 = x^{2 \\times 3} = x^6$.`}</p>
          </div>

          <div className="lrn-steps">
            <p>{`$(a^4)^2 = a^{4 \\times 2} = a^8$.`}</p>
          </div>

          <div className="lrn-steps">
            <p>{`$(3a^2)^3$: raise the coefficient and the variable part separately. $3^3 = 27$ and $(a^2)^3 = a^6$, giving $27a^6$.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why can you raise the coefficient separately?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Because $(3a^2)^3 = (3a^2)(3a^2)(3a^2) = (3 \\times 3 \\times 3)(a^2 \\times a^2 \\times a^2) = 27a^6$. Multiplication is associative and commutative, so you can group the coefficients separately from the variables.`}</p>
            </details>
          </div>

          <div className="lrn-graph">
            <viz.PowerOfPowerVisualizer C={C} />
          </div>

          <h2>{`Power of a Product and Power of a Quotient`}</h2>

          <p>{`When brackets hold a product, the outside exponent reaches every factor. A plain numeric instance: $(2 \\times 5)^2 = 2^2 \\times 5^2 = 4 \\times 25 = 100$, which matches $10^2 = 100$.`}</p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Power of a Product (Index Law 4)`}</div>
            <div className="lrn-definition-desc">
              <p>{`$$(ab)^n = a^n b^n$$`}</p>
              <p>{`Raise each factor to the exponent separately. This is why $(3a^2)^3 = 3^3 (a^2)^3 = 27a^6$.`}</p>
            </div>
          </div>

          <p>{`A quotient inside brackets works the same way: the outside exponent reaches the top and the bottom. For example, $\\left(\\frac{2}{3}\\right)^2 = \\frac{2^2}{3^2} = \\frac{4}{9}$.`}</p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Power of a Quotient (Index Law 5)`}</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$`}</p>
              <p>{`Raise the numerator and the denominator to the exponent separately.`}</p>
            </div>
          </div>

          <div className="lrn-graph">
            <viz.PowerCurves C={C} />
          </div>
        </>,

        <>
          <h2>{`Standard Form`}</h2>

          <p>{`Recall standard form: any number written as $a \\times 10^n$. Here $1 \\leq a < 10$ and $n$ is any integer. The index laws let you compute with numbers in this form.`}</p>

          <div className="lrn-callout">
            <p>
              <strong>{`When to use this:`}</strong>
              {` Use standard form for any number outside the range 0.01 to 9999. It also helps when you compare sizes across a wide range.`}
            </p>
          </div>

          <h2>{`The Decimal-Shift Method`}</h2>

          <p>{`To write a number in standard form, move the decimal point. Stop when exactly one non-zero digit sits in front of it. Count how many places you moved it. That count is the size of $n$.`}</p>

          <ul className="lrn-list">
            <li>{`Large number: you move the decimal LEFT, so $n$ is positive.`}</li>
            <li>{`Small number: you move the decimal RIGHT, so $n$ is negative.`}</li>
          </ul>

          <div className="lrn-steps">
            <p>{`Write $48{,}000$ in standard form.`}</p>
            <ol className="lrn-list">
              <li>{`Place the decimal after the first digit: $4.8$.`}</li>
              <li>{`Count the places moved: from $48000.$ to $4.8$ is 4 places left.`}</li>
              <li>{`Moving left means $n$ is positive: $48{,}000 = 4.8 \\times 10^4$.`}</li>
            </ol>
          </div>

          <div className="lrn-steps">
            <p>{`Write $0.0004$ in standard form.`}</p>
            <ol className="lrn-list">
              <li>{`Place the decimal after the first non-zero digit: $4$.`}</li>
              <li>{`Count the places moved: from $0.0004$ to $4$ is 4 places right.`}</li>
              <li>{`Moving right means $n$ is negative: $0.0004 = 4 \\times 10^{-4}$.`}</li>
            </ol>
          </div>

          <p>{`With this place-counting method you can now convert any number to standard form, large or small, in one pass.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The rule $1 \\leq a < 10$ exists so each number has exactly one standard form. If $a$ could reach 10 or drop below 1, the same number would have many forms. Pinning $a$ between 1 and 10 makes the answer unique.`}</p>
          </div>

          <h2>{`Computing in Standard Form`}</h2>

          <div className="lrn-steps">
            <p>{`$1500 \\times 8{,}000{,}000$: convert then multiply.`}</p>
            <ol className="lrn-list">
              <li>{`$1500 = 1.5 \\times 10^3$.`}</li>
              <li>{`$8{,}000{,}000 = 8 \\times 10^6$.`}</li>
              <li>{`Product: $1.5 \\times 8 \\times 10^{3+6} = 12 \\times 10^9$.`}</li>
              <li>{`Adjust: the coefficient (the number in front, here between 1 and 10) is 12, which is 10 or more, so shift one factor of 10 into the exponent, giving $1.2 \\times 10^{10}$.`}</li>
            </ol>
          </div>

          <p>{`On a calculator, enter $1.6 \\times 10^7$ using the EXP button: type 1.6, press EXP (or EE), type 7. For $3.8 \\times 10^{-3}$: type 3.8, press EXP, type -3.`}</p>

          <div className="lrn-steps">
            <p>{`$(4.9 \\times 10^{11}) \\div (3.5 \\times 10^{-4})$:`}</p>
            <ol className="lrn-list">
              <li>{`Divide coefficients: $4.9 \\div 3.5 = 1.4$.`}</li>
              <li>{`Subtract exponents: $10^{11 - (-4)} = 10^{15}$.`}</li>
              <li>{`Result: $1.4 \\times 10^{15}$.`}</li>
            </ol>
          </div>
        </>
      ]
    },
    practice: [
      {
        id: 'a3f7k2m',
        q: `What is $2^{10}$?`,
        a: `$2^{10} = 1024$. Multiply 2 by itself 10 times: $2^5 = 32$, then $32^2 = 1024$. Alternatively, $2^{10} = 2^5 \\times 2^5 = 32 \\times 32 = 1024$.`
      },
      {
        id: 'ili_elab_notation',
        q: `Explain in your own words why $a^2$ is called "a squared" and $a^3$ is called "a cubed".`,
        a: `$a^2$ is called "squared" because a square with side length $a$ has area $a \\times a = a^2$. $a^3$ is called "cubed" because a cube with side length $a$ has volume $a \\times a \\times a = a^3$. The names come from geometry.`
      },
      {
        id: 'b8n4p1q',
        q: `Write $2 \\cdot a \\cdot a \\cdot a \\cdot b \\cdot b$ in index notation.`,
        a: `$2a^3b^2$. Count the repeated factors: $a$ appears 3 times, $b$ appears 2 times. The coefficient 2 stays as is.`
      },
      {
        id: 'ili_quotient_basic2',
        q: `Simplify $\\frac{3^8}{3^5}$.`,
        a: `$\\frac{3^8}{3^5} = 3^{8-5} = 3^3 = 27$. The quotient law subtracts the denominator's exponent from the numerator's. Both bases are 3, so the law applies.`
      },
      {
        id: 'e1m7t0u',
        q: `Write $a^{-3}$ as a fraction. What does a negative exponent mean?`,
        a: `$a^{-3} = \\frac{1}{a^3}$. A negative exponent means take the reciprocal. The definition is forced by the product law: $a^3 \\cdot a^{-3} = a^0 = 1$, so $a^{-3}$ must equal $\\frac{1}{a^3}$.`
      },
      {
        id: 'f9v2q8s',
        q: `Simplify $\\frac{5^7}{5^3}$.`,
        a: `$\\frac{5^7}{5^3} = 5^{7-3} = 5^4 = 625$. The quotient law subtracts exponents when the base is the same.`
      },
      {
        id: 'ili_quotient_elaborate',
        q: `Explain why the quotient law $\\frac{a^m}{a^n} = a^{m-n}$ follows from the product law.`,
        a: `The product law says $a^m \\cdot a^{-n} = a^{m+(-n)} = a^{m-n}$. Dividing by $a^n$ is the same as multiplying by $a^{-n}$. So $\\frac{a^m}{a^n} = a^m \\cdot a^{-n} = a^{m-n}$. The quotient law is the product law applied to a negative exponent.`
      },
      {
        id: 'ili_product_elaborate',
        q: `Elaborate: why does the product law $a^m \\cdot a^n = a^{m+n}$ work when $n$ is negative?`,
        a: `$a^5 \\cdot a^{-3} = a^5 \\cdot \\frac{1}{a^3} = \\frac{a^5}{a^3} = a^2 = a^{5+(-3)}$. The law holds because negative exponents are reciprocals. The counting still works: 5 factors on top, 3 cancel from the bottom, 2 remain.`
      },
      {
        id: 'd5h3j6l',
        q: `Simplify $7^4 \\times 7^{-1}$.`,
        a: `$7^4 \\times 7^{-1} = 7^{4+(-1)} = 7^3 = 343$. The product law adds exponents when the base is the same.`
      },
      {
        id: 'g4k1n8w',
        q: `Simplify $(a^3)^4$.`,
        a: `$(a^3)^4 = a^{3 \\times 4} = a^{12}$. The power-of-a-power law multiplies exponents. This is because $(a^3)^4 = a^3 \\cdot a^3 \\cdot a^3 \\cdot a^3$, giving $3+3+3+3 = 12$ factors.`
      },
      {
        id: 'h7r3c5y',
        q: `Write $a^3b^{-4}$ using only positive exponents.`,
        a: `$a^3b^{-4} = \\frac{a^3}{b^4}$. The factor $b^{-4} = \\frac{1}{b^4}$ moves to the denominator, changing the sign of its exponent from negative to positive.`
      },
      {
        id: 'i6p9d2z',
        q: `A student writes $2^3 \\times 3^2 = 6^5$. Find the error.`,
        a: `This is wrong. The product law $a^m \\times a^n = a^{m+n}$ only applies when the bases are the same. Here the bases are 2 and 3, which differ. The correct value is $2^3 \\times 3^2 = 8 \\times 9 = 72$.`
      },
      {
        id: 'j2s5b7x',
        q: `Simplify $5x^3 \\times 3x^4$.`,
        a: `$5x^3 \\times 3x^4 = (5 \\times 3)(x^3 \\times x^4) = 15x^{3+4} = 15x^7$. Multiply coefficients together and add the exponents of $x$ using the product law.`
      },
      {
        id: 'k8t1f4e',
        q: `Write $0.000006$ in standard form.`,
        a: `$0.000006 = 6 \\times 10^{-6}$. Move the decimal point 6 places to the right to get the coefficient 6, which satisfies $1 \\leq 6 < 10$. Moving right means a negative power of 10.`
      },
      {
        id: 'l3m6g9a',
        q: `Simplify $(2x^3)^4$.`,
        a: `$(2x^3)^4 = 2^4 \\times (x^3)^4 = 16x^{12}$. Raise both the coefficient and the variable to the power 4. The power-of-a-product law applies: $(ab)^n = a^n b^n$.`
      },
      {
        id: 'm5n2h7o',
        q: `What is $10^{-3}$ as a decimal? Explain the pattern.`,
        a: `$10^{-3} = \\frac{1}{10^3} = \\frac{1}{1000} = 0.001$. Each step down in exponent divides by 10: $10^0 = 1$, $10^{-1} = 0.1$, $10^{-2} = 0.01$, $10^{-3} = 0.001$.`
      },
      {
        id: 'n1q8j3p',
        q: `Transfer: simplify $\\frac{6a^5}{2a^2}$.`,
        a: `$\\frac{6a^5}{2a^2} = \\frac{6}{2} \\times a^{5-2} = 3a^3$. Divide the coefficients and subtract the exponents using the quotient law.`
      },
      {
        id: 'o9r4c6k',
        q: `Transfer: if $2^n = 128$, what is $n$?`,
        a: `$n = 7$. Build up: $2^1=2$, $2^2=4$, $2^3=8$, $2^4=16$, $2^5=32$, $2^6=64$, $2^7=128$. So $n=7$.`
      },
      {
        id: 'p7w5v1u',
        q: `Explain why $(-3)^2 = 9$ but $-3^2 = -9$. What is the difference?`,
        a: `$(-3)^2 = (-3) \\times (-3) = 9$: the negative sign is inside the brackets, so it gets squared. For $-3^2$, the exponent only applies to 3. You square first, then apply the minus sign: $-3^2 = -(3^2) = -9$. Brackets change what the exponent acts on.`
      },
      {
        id: 'ili_brackets_predict',
        q: `Predict: is $(-2)^4$ positive or negative? What about $(-2)^5$?`,
        a: `$(-2)^4 = (-2)(-2)(-2)(-2) = 16$, which is positive (even number of negatives multiply to a positive). $(-2)^5 = -32$, which is negative (odd number of negatives multiply to a negative). Even powers of a negative base are always positive.`
      },
      {
        id: 'ili_brackets_transfer',
        q: `A student claims $(-5)^2 = -25$. Find the error and give the correct value.`,
        a: `The error is forgetting that squaring a negative number gives a positive result. $(-5)^2 = (-5) \\times (-5) = 25$, not $-25$. The negative sign is inside the brackets, so it gets squared too. Only $-5^2 = -25$ (where the minus sign is outside).`
      },
      {
        id: 'q2l9n5t',
        q: `Compute $(4.9 \\times 10^{11}) \\div (3.5 \\times 10^{-4})$.`,
        a: `$\\frac{4.9}{3.5} \\times 10^{11-(-4)} = 1.4 \\times 10^{15}$. Divide the coefficients: $4.9 \\div 3.5 = 1.4$. Subtract the exponents: $11 - (-4) = 11 + 4 = 15$. The result is already in standard form.`
      },
      {
        id: 'r5s8m3b',
        q: `Transfer: simplify $(3a^2)^3 \\times 2a^{-1}$.`,
        a: `First, $(3a^2)^3 = 3^3 \\times a^{2 \\times 3} = 27a^6$. Then $27a^6 \\times 2a^{-1} = 54a^{6+(-1)} = 54a^5$. Apply power-of-a-power first, then the product law.`
      },
      {
        id: 's4k7p2f',
        q: `Elaborate: why do the definitions $a^0 = 1$ and $a^{-n} = \\frac{1}{a^n}$ make the product law universal?`,
        a: `The product law $a^m \\cdot a^n = a^{m+n}$ was first observed for positive integers. To extend it to zero and negatives without contradiction, we need $a^m \\cdot a^0 = a^m$, so $a^0 = 1$. We need $a^n \\cdot a^{-n} = a^0 = 1$, so $a^{-n} = \\frac{1}{a^n}$. These definitions are the only choices that keep the law consistent.`
      },
      {
        id: 't3n6r1w',
        q: `Self-explain: in $(a^m)^n = a^{mn}$, why do the exponents multiply rather than add?`,
        a: `Because you repeat the entire group $a^m$ a total of $n$ times: $(a^m)^n = a^m \\cdot a^m \\cdots a^m$ ($n$ times). The product law then gives $a^{m+m+\\cdots+m}$ ($n$ additions of $m$) $= a^{mn}$. You are adding $m$ to itself $n$ times, which is multiplication.`
      },
      {
        id: 'u8c5z9q',
        q: `Predict: what is $\\left(\\frac{1}{2}\\right)^{-3}$?`,
        a: `$\\left(\\frac{1}{2}\\right)^{-3} = \\frac{1}{\\left(\\frac{1}{2}\\right)^3} = \\frac{1}{\\frac{1}{8}} = 8$. A negative exponent takes the reciprocal. The reciprocal of $\\frac{1}{2}$ is $2$, so $\\left(\\frac{1}{2}\\right)^{-3} = 2^3 = 8$.`
      },
      {
        id: 'v1d4k8h',
        q: `Write $1500 \\times 8{,}000{,}000$ in standard form.`,
        a: `$1500 = 1.5 \\times 10^3$ and $8{,}000{,}000 = 8 \\times 10^6$. Multiply: $1.5 \\times 8 = 12$ and $10^{3+6} = 10^9$. So $12 \\times 10^9 = 1.2 \\times 10^{10}$ in standard form (since $1 \\leq 1.2 < 10$).`
      },
      {
        id: 'ili_stdform_elaborate',
        q: `Elaborate: explain why the coefficient in standard form must satisfy $1 \\leq a < 10$.`,
        a: `Standard form is meant to give exactly one way to write each number. If $a \\geq 10$, you could move another factor of 10 into the exponent. If $a < 1$, you could increase the exponent to pull a factor out. The rule $1 \\leq a < 10$ is the only range where exactly one form exists for every non-zero number.`
      },
      {
        id: 'w6m3b2r',
        q: `Error-detect: a student claims $a^3 \\div a^3 = a^0 = 0$. What went wrong?`,
        a: `The error is saying $a^0 = 0$. In fact, $a^0 = 1$ for non-zero $a$. This is a definition that keeps the product law consistent. $a^3 \\div a^3 = 1$ because any non-zero number divided by itself is 1.`
      },
      {
        id: 'x9p1s6n',
        q: `Transfer: express $\\frac{a^2b^{-3}}{c^{-1}}$ using only positive exponents.`,
        a: `$\\frac{a^2b^{-3}}{c^{-1}} = a^2b^{-3} \\times c^1 = \\frac{a^2c}{b^3}$. The $c^{-1}$ in the denominator moves to the numerator as $c^1 = c$, and $b^{-3}$ moves from numerator to denominator as $b^3$.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Index Notation and Laws of Integral Indices',
      sections: [
        <>
          <h2>{`Definitions`}</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Index Notation`}</div>
            <div className="lrn-definition-desc">
              <p>{`$a^n = a \\times a \\times \\cdots \\times a$ ($n$ factors, $n$ a positive integer)`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Zero Exponent`}</div>
            <div className="lrn-definition-desc">
              <p>{`$a^0 = 1$ for any non-zero $a$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Negative Exponent`}</div>
            <div className="lrn-definition-desc">
              <p>{`$a^{-n} = \\dfrac{1}{a^n}$ for positive integer $n$`}</p>
              <p>{`When to use: write reciprocals and move factors between numerator and denominator.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`Identity Exponent`}</div>
            <div className="lrn-definition-desc">
              <p>{`$a^1 = a$`}</p>
            </div>
          </div>

          <h2>{`The Index Laws`}</h2>

          <div className="lrn-eq lrn-eq-hero">{`$$a^m \\cdot a^n = a^{m+n}$$`}</div>
          <p>{`Product Law (same base, add exponents). Use when multiplying powers.`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{a^m}{a^n} = a^{m-n}$$`}</div>
          <p>{`Quotient Law (same base, subtract exponents). Use when dividing powers.`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$(a^m)^n = a^{mn}$$`}</div>
          <p>{`Power-of-a-Power (multiply exponents). Use when a power sits inside brackets with another exponent.`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$(ab)^n = a^n b^n$$`}</div>
          <p>{`Power of a Product (distribute the exponent). Use when brackets contain a product. Note: $(a+b)^n \\neq a^n + b^n$.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$`}
          </div>
          <p>{`Power of a Quotient (distribute the exponent over numerator and denominator).`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$a^0 = 1 \\quad (a \\neq 0)$$`}</div>
          <p>{`Zero Exponent. Any non-zero base to the power 0 equals 1.`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$a^{-n} = \\frac{1}{a^n}$$`}</div>
          <p>{`Negative Exponent (reciprocal). Use to convert between negative exponents and fractions.`}</p>

          <h2>{`Powers of 2`}</h2>

          <div className="lrn-compare">
            <table>
              <thead>
                <tr>
                  <th>{`Power`}</th>
                  <th>{`Value`}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$2^{-3}$', '$\\frac{1}{8} = 0.125$'],
                  ['$2^{-2}$', '$\\frac{1}{4} = 0.25$'],
                  ['$2^{-1}$', '$\\frac{1}{2} = 0.5$'],
                  ['$2^{0}$', '$1$'],
                  ['$2^{1}$', '$2$'],
                  ['$2^{2}$', '$4$'],
                  ['$2^{3}$', '$8$'],
                  ['$2^{4}$', '$16$'],
                  ['$2^{5}$', '$32$'],
                  ['$2^{10}$', '$1024$']
                ].map(([p, v]) => (
                  <tr key={p}>
                    <td>{p}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>{`Standard Form`}</h2>

          <div className="lrn-eq lrn-eq-hero">
            {`$$a \\times 10^n \\quad \\text{where } 1 \\leq a < 10$$`}
          </div>
          <p>{`Recall standard form (any number as $a \\times 10^n$ with $1 \\leq a < 10$). To compute with it: multiply by adding exponents, divide by subtracting exponents. Then adjust so the number in front sits between 1 and 10.`}</p>
        </>
      ]
    },
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function IndexNotationAndLawsOfIntegralIndices() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
