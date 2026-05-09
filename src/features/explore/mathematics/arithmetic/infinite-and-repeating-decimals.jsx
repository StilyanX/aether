import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'

import {
  SqueezingVis,
  MultiplySubtractVis,
  LongDivisionVis
} from '../../../../components/viz/math-viz/modules'

const config = {
  cssPrefix: 'idr',
  source: 'Understanding Numbers in Elementary School Mathematics - Hung-Hsi Wu',
  documentTitle: 'Infinite and Repeating Decimals - AETHER',
  learning: {
    category: 'Arithmetic',
    title: 'Infinite and Repeating Decimals',
    subtitle:
      'Infinite decimals, limits, repeating decimals, conversion to fractions, and the theorem on decimal expansions.',
    sections: []
  },
  practice: [],
  reference: {
    category: 'Quick Reference',
    title: 'Infinite and Repeating Decimals',
    sections: []
  },
  customCss: `
    .MafsView { --mafs-bg: transparent; }
  `
}

function InfiniteAndRepeatingDecimalsContent() {
  const C = useVizColors()

  config.learning.sections = [
    /* ════════════════════════════════════════════════════════════════════════
     SECTION 1: DIVISION-WITH-REMAINDER REVIEW
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Division-with-Remainder Review</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          When you divide 29 by 7, you get 4 remainder 1. What does the remainder tell you about
          where 29 sits on the number line?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>
            29 = 4 x 7 + 1. So 29 sits 1 unit past 28 (which is 4 x 7). The remainder measures the
            gap between 29 and the nearest multiple of 7 below it.
          </p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> You need division-with-remainder for repeating decimals
        and the proofs that follow. This is the engine behind long division.
      </p>

      <p>{`For any whole number $a$ and positive integer $d$, there exist unique whole numbers $q$ (quotient) and $r$ (remainder) such that:`}</p>
      <div className="lrn-eq lrn-eq-display">{`$$a = qd + r, \\quad 0 \\leq r < d$$`}</div>
      <p>
        This means a sits between qd and (q+1)d on the number line. The remainder r measures the gap
        from qd to a.
      </p>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Start at 0 and count up by d: 0, d, 2d, 3d, ... Eventually you pass a. The last multiple
          of d that does not exceed a is qd. The leftover is r = a - qd. Since you have not yet
          reached the next multiple, r must be less than d.
        </p>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why must the remainder r be strictly less than d?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            If r were equal to or larger than d, you could subtract d from r and add 1 to q. That
            would give a new quotient and a smaller remainder. So r must be less than d.
          </p>
        </details>
      </div>
    </>,

    /* ════════════════════════════════════════════════════════════════════════
     SECTION 2: DECIMALS AND INFINITE DECIMALS (Module 41.2)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Infinite Decimals and Limits</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>{`The sequence 3.1, 3.14, 3.141, 3.1415, ... gets closer to $\\pi$. Will it ever exactly equal $\\pi$? What defines the infinite decimal?`}</p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>{`No finite term equals $\\pi$, because $\\pi$ is irrational (a number that is not a fraction). The infinite decimal $3.14159\\ldots$ is defined as the limit: the unique number that all these finite approximations approach.`}</p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> Use infinite decimals when a number cannot be expressed
        {`as a finite decimal. Examples: $\\frac{1}{3}$, $\\pi$, $\\sqrt{2}$. The concept of limit makes`}
        infinite decimals meaningful.
      </p>

      <p>
        In engineering, you never measure exactly. You measure to some tolerance: 1.41 meters, plus
        or minus 0.005. Infinite decimals formalize how approximations pin down a single exact
        number.
      </p>

      <h3>From Finite to Infinite</h3>
      <p>{`A finite decimal $w.a_1a_2 \\ldots a_n$ has finitely many digits. But some numbers need infinitely many digits. For example, $\\frac{1}{3} = 0.333\\ldots$ never ends.`}</p>

      <p>
        Start with an infinite sequence of single digits: a_1, a_2, a_3, ... (each between 0 and 9).
        Build a sequence of finite decimals.
      </p>
      <div className="lrn-eq">{`$$s_1 = w.a_1, \\quad s_2 = w.a_1a_2, \\quad s_3 = w.a_1a_2a_3, \\quad \\ldots$$`}</div>

      <p>Each term adds one more digit and gets closer to some target number.</p>

      <h3>The Limit</h3>
      <p>
        Here is the key idea. First, see a concrete example. Then the formal definition will make
        sense.
      </p>

      <p>{`Take $\\sqrt{2}$. We know $1^2 = 1 < 2 < 4 = 2^2$, so $1 < \\sqrt{2} < 2$. Then $1.4^2 = 1.96 < 2 < 2.25 = 1.5^2$, so $1.4 < \\sqrt{2} < 1.5$. Continue: $1.41 < \\sqrt{2} < 1.42$, and so on.`}</p>

      <SqueezingVis C={C} />

      <p>
        Each step pins down one more digit. The interval gets 10 times smaller each time. Only one
        number lies in all the intervals.
      </p>

      <p>
        Now the formal version. There exists a unique number s such that the sequence s_1, s_2, s_3,
        ... approaches s. This number s is the decimal w.a_1a_2a_3...
      </p>
      <div className="lrn-eq lrn-eq-display">{`$$w.a_1a_2a_3\\ldots = \\lim_{n \\to \\infty} s_n = \\lim_{n \\to \\infty} w.a_1a_2 \\ldots a_n$$`}</div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`Each $s_n$ adds a digit in the $10^{-n}$ place. The difference between $s_n$ and $s_{n+1}$ is at most $9 \\times 10^{-(n+1)}$, which shrinks toward zero.`}</p>
        <p>{`The terms get squeezed into ever-tighter intervals. The real number line guarantees a unique limit exists.`}</p>
      </div>

      <div className="lrn-faded">
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
          <p>{`Find the first 3 decimal digits of $\\sqrt{2}$.`}</p>
          <ul className="lrn-list">
            <li>{`$1.4^2 = 1.96 < 2 < 2.25 = 1.5^2$, so the first digit after the point is 4.`}</li>
            <li>{`$1.41^2 = 1.9881 < 2 < 2.0164 = 1.42^2$, so the second digit is 1.`}</li>
            <li>{`$1.414^2 = 1.999396 < 2 < 2.002225 = 1.415^2$, so the third digit is 4.`}</li>
          </ul>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
          <p>{`Find the first 2 decimal digits of $\\sqrt{3}$.`}</p>
          <p>{`You know $1^2 = 1 < 3 < 4 = 2^2$.`}</p>
          <ol className="lrn-list">
            <li>{`Try $1.7^2 = \\rule{1cm}{0.5pt}$ and $1.8^2 = \\rule{1cm}{0.5pt}$. Which pair traps 3?`}</li>
            <li>{`Narrow further: try $1.73^2$ and $1.74^2$.`}</li>
          </ol>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
          <p>{`Find the first 2 decimal digits of $\\sqrt{5}$ using the squeezing method.`}</p>
        </div>
      </div>

      <h3>Pi as an Infinite Decimal</h3>
      <div className="lrn-eq">{`$$\\pi = 3.14159\\,26535\\,89793\\,23846\\,26433\\,83279\\,50288\\ldots$$`}</div>
      <p>
        The sequence t_1 = 3.1, t_2 = 3.14, t_3 = 3.141, ... approaches pi but never reaches it.
      </p>
      <p>
        Each finite approximation is a rational number. The limit pi is irrational. Infinite
        decimals let us name irrational numbers precisely.
      </p>

      <h3>Why Infinite Decimal Arithmetic Is Hard</h3>
      <p>{`Computing $2\\pi$ seems simple: double each digit of $\\pi$. But carries spread in unpredictable ways. The digit "1" in the tenths place of $\\pi$ might change when you double it, because later digits cause carries.`}</p>
      <p>{`For $9\\pi$ or $\\pi^2$, the problem is worse. You cannot pin down any single digit of the result without computing infinitely many digits of $\\pi$.`}</p>
      <p>
        Finite decimal arithmetic reduces to whole number algorithms. Infinite decimal arithmetic
        does not. This is a fundamental difference.
      </p>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`Why can you compute $0.135 + 0.0486$ exactly, but not $\\pi + \\sqrt{2}$ exactly?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            Finite decimals have a last digit. You align, pad with zeros, and add whole numbers.
            Infinite decimals have no last digit. Carries can spread from the millionth place back
            to the first. You can only approximate the sum.
          </p>
        </details>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Finite Decimals</span>
          <p>
            Terminate. Exact arithmetic reduces to whole number algorithms. Represent only fractions
            with denominators 2^k x 5^l.
          </p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Infinite Decimals</span>
          <p>
            Never terminate. Arithmetic needs successive approximation. Represent every real number.
          </p>
        </div>
      </div>

      <h3>Decimal Point Shift</h3>
      <p>Multiplying a decimal by 10^k shifts the decimal point k places right.</p>
      <div className="lrn-eq lrn-eq-display">{`$$10^k \\times w.a_1a_2a_3\\ldots = \\text{(shift decimal point } k \\text{ places right)}$$`}</div>

      <p>Worked example: 10^3 x 0.1246 = 124.6.</p>
      <div className="lrn-eq">{`$$10^3 \\times 0.1246 = 10^3 \\times \\frac{1246}{10^4} = \\frac{1246}{10} = 124.6$$`}</div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`Multiplying by $10^k$ multiplies the numerator by $10^k$ while keeping the denominator. By the law of exponents, $10^k \\times a/10^n = a/10^{n-k}$. This moves every digit $k$ places left relative to the decimal point, which is the same as moving the point $k$ places right.`}</p>
      </div>

      <h3>Every Positive Number Equals a Decimal</h3>
      <p>For every positive real number x, there exists a decimal expansion that equals x.</p>
      <p>
        The squeezing method works for any number. Find the integer part. Then find the tenths
        digit, then hundredths, and so on. Each step narrows the interval by a factor of 10. The
        resulting sequence approaches the exact value.
      </p>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`Why does the squeezing process $1.4 < \\sqrt{2} < 1.5$, then $1.41 < \\sqrt{2} < 1.42$, guarantee a unique infinite decimal?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`Each step narrows the interval by a factor of 10. The intervals $[1.4, 1.5]$, $[1.41, 1.42]$, $[1.414, 1.415]$, ... all contain $\\sqrt{2}$. Their widths shrink to zero. Only one number can lie in all of them. That number is the limit.`}</p>
        </details>
      </div>
    </>,

    /* ════════════════════════════════════════════════════════════════════════
     SECTION 3: REPEATING DECIMALS (Module 41.3)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Repeating Decimals</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>{`If $0.\\overline{8} = 0.888\\ldots$, what fraction do you think it equals? Try to figure out the method before reading.`}</p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>{`Multiply by 10: $10 \\times 0.\\overline{8} = 8.\\overline{8}$. Subtract the original: $8.\\overline{8} - 0.\\overline{8} = 8$. So $9 \\times 0.\\overline{8} = 8$, giving $0.\\overline{8} = 8/9$.`}</p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> Use the multiply-and-subtract method to convert any
        repeating decimal to a fraction. Use repeating notation for fractions whose denominators
        have prime factors other than 2 and 5.
      </p>

      <p>
        Split 10 dollars among 3 people. Each person gets 3.333... dollars. That repeating decimal
        {`is exactly $\\frac{10}{3}$ dollars. Repeating decimals appear whenever division does not come out even.`}
      </p>

      <h3>Notation and Definitions</h3>
      <p>
        A repeating decimal has a block of digits that repeats forever. The bar marks the repeating
        block.
      </p>
      <div className="lrn-eq">{`$$0.\\overline{8} = 0.888\\ldots, \\qquad 0.\\overline{15} = 0.151515\\ldots, \\qquad 0.\\overline{285714} = 0.285714285714\\ldots$$`}</div>
      <p>
        The repeating block is the shortest string of digits that repeats. Its length is the period.
      </p>
      <p>{`$0.\\overline{8}$ has repeating block "8" and period 1. $0.\\overline{15}$ has repeating block "15" and period 2. $0.\\overline{285714}$ has repeating block "285714" and period 6.`}</p>

      <h3>Converting Simple Repeating Decimals to Fractions</h3>

      <p>{`Example: $0.\\overline{8} = \\frac{8}{9}$`}</p>
      <p>The decimal point shift rule gives:</p>
      <div className="lrn-eq">{`$$10 \\times 0.\\overline{8} = 8.\\overline{8}$$`}</div>
      <p>Subtract the original.</p>
      <div className="lrn-eq">{`$$10 \\times 0.\\overline{8} - 0.\\overline{8} = 8.\\overline{8} - 0.\\overline{8} = 8$$`}</div>
      <div className="lrn-eq">{`$$9 \\times 0.\\overline{8} = 8 \\quad \\Rightarrow \\quad 0.\\overline{8} = \\frac{8}{9}$$`}</div>

      <MultiplySubtractVis C={C} />

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`Why does subtracting $0.\\overline{8}$ from $8.\\overline{8}$ cancel the infinite repeating tail?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`Both $0.\\overline{8}$ and $8.\\overline{8}$ have the same digits after the decimal point: 888... Subtracting position by position, every digit after the decimal cancels to 0. Only the integer part 8 remains.`}</p>
        </details>
      </div>

      <p>{`Example: $0.\\overline{15} = \\frac{5}{33}$`}</p>
      <p>The period is 2, so multiply by 10^2 = 100.</p>
      <div className="lrn-eq">{`$$100 \\times 0.\\overline{15} = 15.\\overline{15}$$`}</div>
      <div className="lrn-eq">{`$$100 \\times 0.\\overline{15} - 0.\\overline{15} = 15$$`}</div>
      <div className="lrn-eq">{`$$99 \\times 0.\\overline{15} = 15 \\quad \\Rightarrow \\quad 0.\\overline{15} = \\frac{15}{99} = \\frac{5}{33}$$`}</div>

      <p>{`Example: $0.\\overline{285714} = \\frac{2}{7}$`}</p>
      <p>The period is 6. Multiply by 10^6 = 1,000,000.</p>
      <div className="lrn-eq">{`$$999999 \\times 0.\\overline{285714} = 285714 \\quad \\Rightarrow \\quad 0.\\overline{285714} = \\frac{285714}{999999} = \\frac{2}{7}$$`}</div>

      <h3>Converting Complex Repeating Decimals</h3>
      <p>Some decimals have a non-repeating prefix before the repeating block begins.</p>

      <p>
        <strong>Example: 16.41976-bar</strong>
      </p>
      <p>Break it into parts: integer + non-repeating + repeating.</p>
      <div className="lrn-eq">{`$$16.419\\overline{76} = 16 + 0.419 + 0.000\\overline{76}$$`}</div>
      <p>{`Handle the repeating part: $0.\\overline{76} = \\frac{76}{99}$. Shift it to the right position.`}</p>
      <div className="lrn-eq">{`$$0.000\\overline{76} = 0.\\overline{76} \\times 10^{-3} = \\frac{76}{99} \\times \\frac{1}{1000} = \\frac{76}{99000}$$`}</div>
      <p>Combine everything.</p>
      <div className="lrn-eq">{`$$16.419\\overline{76} = 16 + \\frac{419}{1000} + \\frac{76}{99000} = \\frac{16 \\times 99000 + 419 \\times 99 + 76}{99000} = \\frac{1625557}{99000}$$`}</div>

      <div className="lrn-faded">
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
          <p>{`Convert $4.008\\overline{76523}$ to a fraction. Split: $4 + 0.008 + 0.000\\overline{76523}$. Handle: $0.\\overline{76523} = \\frac{76523}{99999}$. Shift: $0.000\\overline{76523} = \\frac{76523}{99999 \\times 1000}$. Combine into a single fraction.`}</p>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
          <p>{`Convert $2.1\\overline{45}$ to a fraction.`}</p>
          <ol className="lrn-list">
            <li>{`Split: $2 + 0.1 + 0.0\\overline{45}$`}</li>
            <li>{`You know $0.\\overline{45} = \\frac{45}{99} = \\frac{5}{11}$`}</li>
            <li>{`Shift: $0.0\\overline{45} = \\rule{2cm}{0.5pt}$`}</li>
            <li>Combine all three parts.</li>
          </ol>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
          <p>{`Convert $7.03\\overline{142857}$ to a fraction. Decompose, convert the repeating part, shift, and combine.`}</p>
        </div>
      </div>

      <h3>0.9-bar Equals 1</h3>
      <p>Apply the standard method. Multiply by 10.</p>
      <div className="lrn-eq">{`$$10 \\times 0.\\overline{9} = 9.\\overline{9}$$`}</div>
      <div className="lrn-eq">{`$$9 \\times 0.\\overline{9} = 9 \\quad \\Rightarrow \\quad 0.\\overline{9} = 1$$`}</div>

      <div className="lrn-eq lrn-eq-display">{`$$0.\\overline{9} = 1$$`}</div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`The sequence $0.9, 0.99, 0.999, \\ldots$ has terms $s_n = 1 - 1/10^n$. As $n$ grows, $1/10^n$ approaches 0. So $s_n$ approaches 1. The infinite decimal $0.\\overline{9}$ is defined as this limit. The limit is exactly 1.`}</p>
      </div>

      <p>
        This means no decimal expansion ends with 9-bar. If it did, that tail equals an extra 1 in
        the next place.
      </p>
      <div className="lrn-eq">{`$$2.045\\overline{9} = 2.046, \\qquad 8.745\\overline{9} = 8.746$$`}</div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`Why does $2.045\\overline{9}$ equal $2.046$ exactly?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`$2.045\\overline{9} = 2.045 + 0.000\\overline{9}$. The tail $0.000\\overline{9} = 0.\\overline{9} \\times 10^{-3} = 1 \\times 10^{-3} = 0.001$. So $2.045 + 0.001 = 2.046$.`}</p>
        </details>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Immediate Repeating</span>
          <p>{`Block starts right after the decimal: $0.\\overline{285714}$. Multiply by $10^{\\text{period}}$, subtract, solve. One step.`}</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Delayed Repeating</span>
          <p>{`Non-repeating prefix first: $0.03\\overline{571428}$. Split into non-repeating + repeating. Convert each, then combine.`}</p>
        </div>
      </div>
    </>,

    /* ════════════════════════════════════════════════════════════════════════
     SECTION 4: DECIMAL EXPANSIONS OF FRACTIONS (Module 42 - Theorem)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Decimal Expansions of Fractions</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          You know 1/4 = 0.25 (finite) and 1/3 = 0.333... (repeating). Can every fraction produce
          one of these two patterns? What about 1/7?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>
            Yes. Every fraction is either a finite decimal or a repeating decimal. 1/7 =
            0.142857142857... with period 6. Long division produces a finite set of possible
            remainders, so a remainder must eventually repeat.
          </p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> Use this theorem to predict whether a fraction terminates
        or repeats. Check the denominator. If its only prime factors are 2 and 5, it terminates.
        Otherwise, it repeats.
      </p>

      <p>
        Your calculator shows 1/7 = 0.142857142857. Is the calculator rounding? No. The digits
        really do repeat in a cycle of length 6. This section explains why.
      </p>

      <h3>The Main Theorem</h3>
      <p>Every fraction equals either a finite decimal or a repeating decimal.</p>
      <div className="lrn-eq lrn-eq-display">{`$$\\text{Every } \\frac{m}{n} \\text{ (with } m, n \\text{ positive integers) is a finite or repeating decimal.}$$`}</div>

      <h3>The Finite Decimal Criterion</h3>
      <p>
        Recall: a fraction m/n in lowest terms is a finite decimal if and only if n has no prime
        factors other than 2 and 5.
      </p>
      <div className="lrn-eq">{`$$\\frac{m}{n} \\text{ is a finite decimal} \\iff n = 2^a \\cdot 5^b \\text{ for some } a, b \\geq 0$$`}</div>
      <p>If n has any other prime factor, the decimal repeats.</p>

      <h3>Long Division Produces the Decimal Expansion</h3>
      <p>The decimal expansion of m/n comes from long division of m by n.</p>

      <p>
        <strong>Example: 2/11</strong>
      </p>
      <p>Divide 2 by 11 using long division.</p>

      <LongDivisionVis C={C} />

      <p>The remainders cycle: 9, 2, 9, 2, ... The digits cycle: 1, 8, 1, 8, ...</p>
      <div className="lrn-eq">{`$$\\frac{2}{11} = 0.\\overline{18}$$`}</div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`When dividing by 11, the only possible remainders are 0 through 10. After at most 11 steps, some remainder must appear twice. Once a remainder repeats, the following digits repeat identically. This forces a repeating pattern.`}</p>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>
          In the long division of 2 by 11, why does getting remainder 9 again guarantee the digits
          will repeat?
        </p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            The next digit depends only on the current remainder. If the remainder is 9, the next
            step is always 90 / 11 = 8 remainder 2. Then 20 / 11 = 1 remainder 9. Same remainders
            produce same digits forever.
          </p>
        </details>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Fraction Representation</span>
          <p>Exact. Closed under +, -, x, /. Best for algebra and exact computation.</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Decimal Representation</span>
          <p>
            Easy size comparison. Approximates any real number. Best for measurement and ordering.
          </p>
        </div>
      </div>
    </>
  ]

  // ═══════════════════════════════════════════
  // PRACTICE CARDS (interleaved)
  // ═══════════════════════════════════════════
  config.practice = [
    {
      q: 'Convert $0.\\overline{8}$ to a fraction. Show every step.',
      a: 'Let $x = 0.888\\ldots$ Multiply by 10: $10x = 8.888\\ldots$ Subtract: $10x - x = 8$. So $9x = 8$, giving $x = \\frac{8}{9}$. Subtracting cancels the infinite tail because both have identical digits after the decimal point.'
    },
    {
      q: 'What does it mean precisely for a decimal to equal a number? Give the definition.',
      a: 'The decimal $w.a_1a_2a_3\\ldots$ is defined as the limit of the sequence $s_n = w.a_1a_2\\ldots a_n$. For any positive $\\varepsilon$, there exists $N$ such that for all $n > N$, $|s - s_n| < \\varepsilon$. The decimal IS the limit, not an approximation.'
    },
    {
      q: 'Convert $0.\\overline{15}$ to a fraction. Show every step.',
      a: 'Let $x = 0.151515\\ldots$ The period is 2, so multiply by 100: $100x = 15.1515\\ldots$ Subtract: $99x = 15$. So $x = \\frac{15}{99} = \\frac{5}{33}$. Multiplying by $10^{\\text{period}}$ aligns the repeating blocks so subtraction cancels them.'
    },
    {
      q: 'Why can you NOT compute $2\\pi$ exactly by doubling each digit of $\\pi$?',
      a: 'Carries spread in unpredictable ways. Doubling the tenths digit of $\\pi$ might be affected by a carry from the hundredths place. The hundredths digit depends on carries from the thousandths, and so on. No finite number of digits pins down any single digit of $2\\pi$.'
    },
    {
      q: 'Prove that $0.\\overline{9} = 1$.',
      a: 'Let $x = 0.999\\ldots$ Multiply by 10: $10x = 9.999\\ldots$ Subtract: $9x = 9$, so $x = 1$. The sequence $0.9, 0.99, 0.999, \\ldots$ has $n$-th term $s_n = 1 - \\frac{1}{10^n}$. As $n$ grows, $\\frac{1}{10^n}$ approaches 0, so $s_n$ approaches 1. The decimal is defined as this limit.'
    },
    {
      q: 'A calculator shows $\\frac{1}{7} = 0.142857142857$. What is the period and repeating block?',
      a: 'The repeating block is 142857. The period is 6. Check: 6 divides $7 - 1 = 6$. Each digit comes from the remainder in long division. After 6 steps, remainder 1 reappears, restarting the cycle.'
    },
    {
      q: 'Convert $16.419\\overline{76}$ (repeating block 76 after non-repeating 419) to a fraction.',
      a: 'Decompose: $16 + 0.419 + 0.000\\overline{76}$. Handle repeating: $0.\\overline{76} = \\frac{76}{99}$. Shift: $0.000\\overline{76} = \\frac{76}{99 \\times 1000} = \\frac{76}{99000}$. Combine: $16 + \\frac{419}{1000} + \\frac{76}{99000} = \\frac{16 \\times 99000 + 419 \\times 99 + 76}{99000} = \\frac{1625557}{99000}$.'
    },
    {
      q: 'What does $2.045\\overline{9}$ equal, and why?',
      a: '$2.045\\overline{9} = 2.046$. The trailing $\\overline{9}$ equals 1 in the next place: $0.000\\overline{9} = 0.001$. So $2.045 + 0.001 = 2.046$. This follows from $0.\\overline{9} = 1$ applied to the tail.'
    },
    {
      q: 'Convert $0.\\overline{285714}$ to a fraction. Show every step.',
      a: 'Let $x = 0.285714285714\\ldots$ Period $= 6$. Multiply by $10^6 = 1000000$: $1000000x = 285714.285714\\ldots$ Subtract: $999999x = 285714$. So $x = \\frac{285714}{999999}$. Simplify: $\\gcd = 142857$. Result: $\\frac{2}{7}$. The period 6 matches $7-1$.'
    },
    {
      q: 'Predict: You know $0.\\overline{9} = 1$. What does $0.4999\\ldots$ equal?',
      a: '$0.4999\\ldots = 0.5$. Decompose: $0.4 + 0.0999\\ldots = 0.4 + 0.1 \\times 0.999\\ldots = 0.4 + 0.1 \\times 1 = 0.5$. The trailing $\\overline{9}$ always adds 1 to the previous digit position.'
    },
    {
      q: 'Explain from first principles why every positive number has a decimal expansion.',
      a: 'Given positive $x$, squeeze it: find the integer part $w$. Then find the tenths digit $a_1$ (the largest digit so that $w.a_1 \\leq x$). Continue for hundredths, thousandths. At each step, $s_n \\leq x$ and $x < s_n + \\frac{1}{10^n}$. The gap shrinks to 0, so the sequence must approach $x$.'
    },
    {
      q: 'Self-explain: In converting $0.\\overline{15}$ to $\\frac{5}{33}$, why multiply by 100 instead of 10?',
      a: 'The repeating block "15" has period 2. Multiplying by $10^{\\text{period}} = 100$ shifts the decimal exactly one full cycle right. This aligns the repeating tails: $15.1515\\ldots$ and $0.1515\\ldots$ have identical tails. Subtracting cancels all the infinitely many repeating digits.'
    },
    {
      q: 'Transfer: You split 10 dollars evenly among 3 people. Express each share as a fraction and as a repeating decimal.',
      a: 'Each share is $\\frac{10}{3}$ dollars. As a decimal: $\\frac{10}{3} = 3.333\\ldots = 3.\\overline{3}$. The repeating pattern comes from dividing by 3, which has no factors of 2 or 5.'
    },
    {
      q: 'Elaborate: Why does the concept of "limit" matter for infinite decimals?',
      a: 'Without limits, the infinite decimal $0.333\\ldots$ is just a list of digits with no defined value. The limit says: the sequence $0.3, 0.33, 0.333, \\ldots$ gets arbitrarily close to exactly one number ($\\frac{1}{3}$). That number IS the decimal. Limits turn infinite notation into precise mathematics.'
    },
    {
      q: 'Transfer: A calculator shows $\\frac{1}{11} = 0.090909$. What is the exact repeating decimal? Why does the calculator truncate?',
      a: '$\\frac{1}{11} = 0.\\overline{09}$ (repeating block "09", period 2). The calculator truncates because its screen has limited digits. But the pattern 09 repeats forever because dividing by 11 cycles through remainders 9 and 2.'
    },
    {
      q: 'Predict: Will $\\frac{5}{6}$ be a finite or repeating decimal? What is it?',
      a: '$6 = 2 \\times 3$. Since 3 is a prime factor other than 2 or 5, the decimal repeats. Compute: $\\frac{5}{6} = 0.8333\\ldots = 0.8\\overline{3}$. The non-repeating prefix "8" has length 1 (from the single factor of 2). The period is 1 (from the factor 3).'
    }
  ]

  // ═══════════════════════════════════════════
  // REFERENCE MODE
  // ═══════════════════════════════════════════
  config.reference.sections = [
    <>
      <h2>Infinite and Repeating Decimals</h2>

      <div className="lrn-definition">
        <span className="lrn-definition-term">Infinite Decimal</span>
        <div className="lrn-definition-desc">
          <p>{`The limit of the sequence $s_n = w.a_1a_2 \\ldots a_n$ as $n \\to \\infty$.`}</p>
        </div>
      </div>

      <div className="lrn-eq lrn-eq-display">{`$$w.a_1a_2a_3\\ldots = \\lim_{n \\to \\infty} w.a_1a_2 \\ldots a_n$$`}</div>
      <p>
        When to use: Use this definition when you need to make infinite decimals rigorous. The
        decimal IS the limit, not an approximation.
      </p>

      <div className="lrn-definition">
        <span className="lrn-definition-term">Division-with-Remainder</span>
        <div className="lrn-definition-desc">
          <p>{`For whole number $a$ and positive $d$: $a = qd + r$ where $0 \\leq r < d$.`}</p>
          <p>{`The quotient $q$ and remainder $r$ are unique.`}</p>
        </div>
      </div>

      <h3>Decimal Point Shift</h3>
      <div className="lrn-eq lrn-eq-display">{`$$10^k \\times w.a_1a_2\\ldots = \\text{shift decimal point } k \\text{ places right}$$`}</div>
      <p>
        When to use: Use when converting repeating decimals to fractions (multiply-and-subtract
        method).
      </p>

      <h3>Repeating Decimal to Fraction</h3>
      <table className="lrn-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Method</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simple repeating</td>
            <td>{`Multiply by $10^{\\text{period}}$, subtract`}</td>
            <td>{`$0.\\overline{8}$: $9x = 8 \\Rightarrow x = 8/9$`}</td>
          </tr>
          <tr>
            <td>Delayed repeating</td>
            <td>Split into non-repeating + repeating, combine</td>
            <td>{`$16.419\\overline{76} = 1625557/99000$`}</td>
          </tr>
        </tbody>
      </table>

      <div className="lrn-eq lrn-eq-display">{`$$0.\\overline{9} = 1$$`}</div>
      <p>
        When to use: Eliminates all expansions ending in 9-bar. If you get a trailing 9-bar, round
        up the preceding digit.
      </p>
    </>,

    <>
      <h2>The Fundamental Theorem</h2>

      <div className="lrn-eq lrn-eq-display">{`$$\\text{Every fraction} = \\text{finite decimal or repeating decimal}$$`}</div>
      <p>
        When to use: Applies to every fraction m/n. Check the denominator to determine which case.
      </p>

      <h3>Finite Decimal Criterion</h3>
      <div className="lrn-eq lrn-eq-display">{`$$\\frac{m}{n} \\text{ (lowest terms) is finite} \\iff n = 2^a \\cdot 5^b$$`}</div>
      <p>
        When to use: Quick test. Factor the denominator. If only 2s and 5s appear, it terminates.
        Otherwise, it repeats.
      </p>
    </>
  ]

  return <LearningTemplate config={config} />
}

export default function InfiniteAndRepeatingDecimals() {
  return <InfiniteAndRepeatingDecimalsContent />
}
