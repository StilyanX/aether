import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'

import {
  FractionToDecimalVis,
  NumberLinePlacement,
  DecimalComparisonVis,
  ScientificNotationVis,
  PlaceValueVis
} from '../../../../components/viz/math-viz/modules'

const config = {
  cssPrefix: 'dcf',
  source: 'Understanding Numbers in Elementary School Mathematics - Hung-Hsi Wu',
  documentTitle: 'Decimal Fundamentals - AETHER',
  learning: {
    category: 'Arithmetic',
    title: 'Decimal Fundamentals',
    subtitle:
      'Finite decimals, notation, arithmetic, comparison, expanded form, and scientific notation.',
    sections: []
  },
  practice: [],
  reference: {
    category: 'Quick Reference',
    title: 'Decimal Fundamentals',
    sections: []
  },
  customCss: `
    .MafsView { --mafs-bg: transparent; }
  `
}

function DecimalFundamentalsContent() {
  const C = useVizColors()

  config.learning.sections = [
    /* ════════════════════════════════════════════════════════════════════════
     SECTION 1: WHY FINITE DECIMALS MATTER (Module 38)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Why Finite Decimals Matter</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          You want to compare 2/9 and 3/11. Without finding a common denominator, how could decimals
          help?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>
            Convert each fraction to a decimal. 2/9 = 0.222... and 3/11 = 0.272... Compare digit by
            digit. 0.22 &lt; 0.27, so 2/9 &lt; 3/11.
          </p>
        </details>
      </div>

      <p>
        Have you ever tried to compare 2/9 and 3/11? Finding a common denominator takes work.
        Decimals make it instant.
      </p>

      <p>
        <strong>When to use this:</strong> Use finite decimals for quick size comparison. Use them
        for exact arithmetic with powers of 10. Use them to approximate any real number.
      </p>

      <h3>What Is a Finite Decimal?</h3>
      <p>A finite decimal is a fraction whose denominator is a power of 10.</p>
      <p>The notation 2.87 means 287/100. The notation 0.00065 means 65/100000.</p>
      <div className="lrn-eq lrn-eq-display">{`$$2.87 = \\frac{287}{10^2}, \\qquad 0.00065 = \\frac{65}{10^5}$$`}</div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Every finite decimal is a fraction with a power-of-10 denominator. The decimal point marks
          where the ones place sits. Everything after the point contributes less than 1. This is not
          a convention. It is the definition.
        </p>
      </div>

      <h3>Three Reasons Finite Decimals Are Important</h3>
      <ol className="lrn-list">
        <li>
          Our numeral system uses base 10. Finite decimals extend place value past the ones place.
          They continue whole number notation naturally.
        </li>
        <li>
          You can compare finite decimals by scanning digits left to right. No common-denominator
          work needed.
        </li>
        <li>
          Every real number can be approximated as closely as you want by a finite decimal. This
          includes irrational numbers like pi.
        </li>
      </ol>

      <h3>Fat Content Example</h3>
      <p>One food has 2/9 lb (about 0.1 kg) of fat. Another has 3/11 lb. Which has more fat?</p>
      <p>Convert to decimals: 2/9 = 0.2222... and 3/11 = 0.2727...</p>
      <p>Compare: 0.22 &lt; 0.27. So 2/9 &lt; 3/11. The second food has more fat.</p>

      <FractionToDecimalVis C={C} />

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>
          Why does comparing decimal forms give the same answer as finding a common denominator?
        </p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            Both methods compare the same two points on the number line. Decimals give the location
            directly. Common denominators give equivalent fractions that are easy to compare. Both
            find which fraction sits further right.
          </p>
        </details>
      </div>
    </>,

    /* ════════════════════════════════════════════════════════════════════════
     SECTION 2: DECIMAL NOTATION AND BASIC PROPERTIES (Module 39, Part 1)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Decimal Notation and Basic Properties</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          Is the decimal 7.20 equal to 7.2? What about 0.0050 and 0.005? Predict the rule before
          reading.
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>
            Yes. Trailing zeros after the last nonzero digit do not change the value. 7.20 = 720/100
            = 72/10 = 7.2. The same logic gives 0.0050 = 50/10000 = 5/1000 = 0.005.
          </p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> Use these rules when you do arithmetic with decimals. Use
        them when you align decimal points for addition. Use them when you convert between decimal
        and fraction form.
      </p>

      <p>
        Think of prices at a store. You add 4.50 dollars and 3.75 dollars every day. Decimals turn
        that into whole number arithmetic: 450 + 375 = 825 cents.
      </p>

      <h3>Decimal Notation and the Decimal Point</h3>
      <p>The notation 7.20 means 720/100. The notation 0.0050 means 50/10000.</p>
      <div className="lrn-eq">{`$$7.20 = \\frac{720}{10^2}, \\qquad 0.0050 = \\frac{50}{10^4}$$`}</div>

      <p>
        The decimal point sits between the ones digit and the tenths digit. The first digit after
        the point is in the tenths place. The second is in the hundredths place.
      </p>

      <h3>Trailing Zeros</h3>
      <p>You can add or remove trailing zeros without changing the value.</p>
      <div className="lrn-eq">{`$$2.0050000 = \\frac{2005000 \\times 10^4}{10^3 \\times 10^4} = \\frac{2005000}{10^7} = \\frac{2005}{10^3} = 2.005$$`}</div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Multiplying top and bottom by the same power of 10 gives an equivalent fraction. (Two
          fractions are equivalent when they name the same point on the number line.) Trailing zeros
          in the decimal match these extra factors. Removing them simplifies without changing the
          number.
        </p>
      </div>

      <p>
        Two finite decimals are equal exactly when they represent the same point on the number line.
      </p>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Trailing Zeros Change Value</span>
          <p>
            0.5 and 0.05 are different. The zero is not trailing. It sits between the decimal point
            and the 5.
          </p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Trailing Zeros Keep Value</span>
          <p>0.5 and 0.50 and 0.500 are all equal. The zeros come after the last nonzero digit.</p>
        </div>
      </div>

      <h3>Integer Part and Decomposition</h3>
      <p>Every finite decimal has an integer part and a decimal part.</p>
      <p>The integer part of 41.15 is 41. The integer part of 0.265 is 0.</p>
      <div className="lrn-eq">{`$$41.15 = 41 + \\frac{15}{10^2} = 41 + 0.15$$`}</div>
      <div className="lrn-eq">{`$$6.028 = 6 + \\frac{28}{10^3} = 6 + 0.028$$`}</div>
      <div className="lrn-eq">{`$$0.0752 = 0 + 0.0752$$`}</div>
      <p>
        This split is unique. Every finite decimal becomes exactly one whole number plus one number
        between 0 and 1.
      </p>

      <NumberLinePlacement C={C} />

      <p>
        On the number line, 41.15 sits between 41 and 42. It sits 15/100 of the way from 41 toward
        42.
      </p>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why does 41.15 sit exactly 15/100 of the way from 41 to 42?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            Because 41.15 = 41 + 0.15 = 41 + 15/100. The gap from 41 to 42 is exactly 1. The decimal
            part 15/100 tells you what fraction of that gap to travel.
          </p>
        </details>
      </div>

      <h3>Negative Exponents</h3>
      <p>We define negative powers of 10 as reciprocals.</p>
      <div className="lrn-eq lrn-eq-display">{`$$10^{-n} = \\frac{1}{10^n}$$`}</div>
      <p>So 10^(-1) = 1/10, 10^(-2) = 1/100, and 10^(-5) = 1/100000.</p>
      <p>This lets us rewrite any finite decimal compactly.</p>
      <div className="lrn-eq">{`$$41.15 = 4115 \\times 10^{-2}$$`}</div>
      <p>In general, a/10^n = a x 10^(-n).</p>

      <h3>Law of Exponents for Integers</h3>
      <div className="lrn-eq lrn-eq-display">{`$$10^m \\times 10^n = 10^{m+n} \\quad \\text{for all integers } m, n$$`}</div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`When both $m$ and $n$ are positive, this is repeated multiplication. When one is negative, say $m > 0$ and $n < 0$, you multiply $10^m$ by $1/10^{|n|}$. Factors of 10 cancel. You always get $10^{m+n}$. All cases give the same rule.`}</p>
      </div>
    </>,

    /* ════════════════════════════════════════════════════════════════════════
     SECTION 3: DECIMAL ARITHMETIC (Module 39, Part 2)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Decimal Arithmetic</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          You know that 0.135 + 0.0486 requires aligning decimal points. Why? What goes wrong if you
          stack digits without aligning?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>
            Each digit position means a different power of 10. Adding a tenths digit to a hundredths
            digit mixes different units. You must add tenths to tenths, hundredths to hundredths.
          </p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> Use these methods for any decimal calculation. Every
        operation reduces to whole number arithmetic once you choose a common power of 10.
      </p>

      <p>
        Imagine mixing metric measurements in a lab. You add 0.135 liters and 0.0486 liters of a
        solution. Getting the decimal arithmetic right matters.
      </p>

      <h3>Addition of Finite Decimals</h3>
      <p>To add finite decimals, align the decimal points and pad with zeros.</p>
      <div className="lrn-eq">{`$$0.135 + 0.0486 = ?$$`}</div>
      <p>Rewrite both with the same denominator 10^4.</p>
      <div className="lrn-eq">{`$$0.135 = \\frac{1350}{10^4}, \\qquad 0.0486 = \\frac{486}{10^4}$$`}</div>
      <div className="lrn-eq">{`$$\\frac{1350 + 486}{10^4} = \\frac{1836}{10^4} = 0.1836$$`}</div>
      <p>
        The key insight: once you match denominators, decimal addition becomes whole number
        addition.
      </p>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why must you align decimal points before adding?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>
            Each digit position represents a different power of 10. Adding a tenths digit to a
            hundredths digit mixes different sized units. Alignment ensures you add tenths to
            tenths, hundredths to hundredths.
          </p>
        </details>
      </div>

      <h3>Subtraction of Finite Decimals</h3>
      <p>The same principle applies to subtraction.</p>
      <div className="lrn-eq">{`$$3.145 - 2.8675 = ?$$`}</div>
      <p>Rewrite with denominator 10^4.</p>
      <div className="lrn-eq">{`$$\\frac{31450 - 28675}{10^4} = \\frac{2775}{10^4} = 0.2775$$`}</div>

      <h3>Multiplication of Finite Decimals</h3>
      <p>
        Count the total decimal places in both factors. The product has that many decimal places.
      </p>
      <div className="lrn-eq">{`$$11.4608 \\times 0.397 = ?$$`}</div>
      <p>11.4608 has 4 decimal places. 0.397 has 3. The product has 4 + 3 = 7 decimal places.</p>
      <div className="lrn-eq">{`$$114608 \\times 397 = 45499376 \\quad \\Rightarrow \\quad 11.4608 \\times 0.397 = 4.5499376$$`}</div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`Write $11.4608 = 114608 \\times 10^{-4}$ and $0.397 = 397 \\times 10^{-3}$. By the law of exponents, the product is $114608 \\times 397 \\times 10^{-7}$. Multiply the whole numbers, then place the point 7 digits from the right.`}</p>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Addition/Subtraction</span>
          <p>
            Align decimal points. Pad with zeros. Add or subtract the whole numerators. Same
            denominator.
          </p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Multiplication</span>
          <p>
            Ignore the points. Multiply whole numbers. Count total decimal places. Place the point.
            No alignment needed.
          </p>
        </div>
      </div>

      <h3>Division of Finite Decimals</h3>
      <p>To divide finite decimals, convert to a fraction of whole numbers.</p>
      <div className="lrn-eq">{`$$\\frac{0.0045}{0.14} = \\frac{45 \\times 10^{-4}}{14 \\times 10^{-2}} = \\frac{45 \\times 10^{-4}}{14 \\times 10^{-2}} \\cdot \\frac{10^4}{10^4} = \\frac{45}{1400}$$`}</div>
      <p>Now 45/1400 is a fraction of whole numbers. Simplify if possible.</p>

      <p>But does 45/1400 produce a finite decimal? Factor the denominator.</p>
      <div className="lrn-eq">{`$$\\frac{45}{1400} = \\frac{3^2}{2^3 \\times 5^2 \\times 7}$$`}</div>
      <p>
        The denominator contains 7. A prime factor is a prime number that divides evenly into
        another number. A fraction in lowest terms is a finite decimal only when its denominator has
        no prime factors other than 2 and 5. Since 7 appears, this decimal never terminates.
      </p>

      <div className="lrn-faded">
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
          <p>{`$0.0045 / 0.14$: Multiply top and bottom by $10^4$: $45/1400$. Factor: $1400 = 2^3 \\times 5^2 \\times 7$. Since 7 appears, not a finite decimal. Simplify: $45/1400 = 9/280$.`}</p>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
          <p>{`$0.036 / 0.12$: Multiply top and bottom by $10^3$: $36 / \\rule{1cm}{0.5pt}$. Factor the denominator: $\\rule{2cm}{0.5pt}$. Is it a finite decimal?`}</p>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
          <p>{`Compute $0.0084 / 0.21$. Convert to a whole number fraction and determine if the result is a finite decimal.`}</p>
        </div>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why does the prime factor 7 in the denominator prevent a finite decimal?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`A finite decimal equals $m/10^n$ for some integers. Since $10^n = 2^n \\times 5^n$, the only primes in the denominator can be 2 and 5. No power of 10 can absorb a factor of 7. So the fraction cannot equal any $m/10^n$.`}</p>
        </details>
      </div>
    </>,

    /* ════════════════════════════════════════════════════════════════════════
     SECTION 4: COMPARING FINITE DECIMALS (Module 40.1)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Comparing Finite Decimals</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>Which is larger: 0.4 or 0.38972? Predict your answer before reading.</p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>
            0.4 = 0.40000. Compare digit by digit: 0.4 has 4 in the tenths place. 0.38972 has 3.
            Since 4 &gt; 3, we know 0.4 &gt; 0.38972.
          </p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> Use the same-denominator method for rigorous proofs. Use
        digit-by-digit scanning for quick answers. The same-denominator method supports the
        digit-by-digit shortcut.
      </p>

      <p>
        Compare race times: 9.58 seconds vs 9.63 seconds in the 100m sprint. Scan left to right.
        First difference is at the tenths place: 5 vs 6. Since 5 &lt; 6, the 9.58 time is faster
        (smaller).
      </p>

      <h3>Same-Denominator Method</h3>
      <p>
        Pad both decimals with trailing zeros. Give them the same number of decimal places. Then
        compare the whole numbers.
      </p>
      <div className="lrn-eq">{`$$0.4 = 0.40000, \\qquad 0.38972 = 0.38972$$`}</div>
      <p>Multiply both by 10^5 to get whole numbers.</p>
      <div className="lrn-eq">{`$$40000 > 38972 \\quad \\Rightarrow \\quad 0.4 > 0.38972$$`}</div>

      <DecimalComparisonVis C={C} />

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`Multiplying two positive numbers by the same positive factor keeps their order. If $A \\times 10^k < B \\times 10^k$, then $A < B$. This is the comparison rule for fractions with the same denominator.`}</p>
      </div>

      <h3>Unequal Integer Parts</h3>
      <p>
        If two decimals have different integer parts, the one with the larger integer part is
        larger.
      </p>
      <div className="lrn-eq">{`$$120.89 < 121.4 \\qquad \\text{because } 120 < 121$$`}</div>

      <h3>Equal Integer Parts</h3>
      <p>
        If the integer parts are equal, compare the decimal parts digit by digit from left to right.
      </p>

      <h3>Digit-by-Digit Comparison</h3>
      <p>
        Scan left to right. At the first position where the digits differ, the decimal with the
        larger digit is larger.
      </p>
      <div className="lrn-eq">{`$$0.234\\mathbf{1}927 < 0.234\\mathbf{2} \\qquad \\text{because at the 4th place, } 1 < 2$$`}</div>

      <div className="lrn-callout">
        <p>
          <strong>Common mistake:</strong> Students sometimes think more digits means a bigger
          number. But 0.38972 has more digits than 0.4, yet 0.4 is bigger. Always compare digit by
          digit, not digit count.
        </p>
      </div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why can you stop comparing at the first digit that differs?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`The first differing digit sits in the $10^{-k}$ place. Its contribution is at least $1/10^k$. All later digits combined add up to less than $1/10^k$. So the later digits can never close the gap.`}</p>
        </details>
      </div>

      <p>
        The key reduction: when integer parts are equal, subtract them from both. Now you compare
        two decimals between 0 and 1. The digit-by-digit rule handles this directly.
      </p>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Same-Denominator Method</span>
          <p>Pad with zeros. Multiply by 10^k. Compare whole numbers. Rigorous. Good for proofs.</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Digit-by-Digit Scanning</span>
          <p>Scan left to right. Stop at first difference. Fast. Good for quick comparisons.</p>
        </div>
      </div>
    </>,

    /* ════════════════════════════════════════════════════════════════════════
     SECTION 5: EXPANDED FORM AND PLACE VALUE (Module 41.1)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Expanded Form and Place Value</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>{`How would you write 35.2647 as a sum of single digits times powers of 10?`}</p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>{`Each digit sits in a place: 3 in tens, 5 in ones, 2 in tenths, 6 in hundredths, 4 in thousandths, 7 in ten-thousandths. Write each as digit times its power of 10.`}</p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> Use expanded form to see what each digit in a decimal
        contributes. It connects decimal notation to place value.
      </p>

      <p>
        Think of a digital odometer reading 35.2647 km. Each digit tells you a different level of
        precision. The 3 counts tens of kilometers. The 7 counts ten-thousandths.
      </p>

      <h3>Complete Expanded Form</h3>
      <div className="lrn-eq lrn-eq-display">{`$$35.2647 = (3 \\times 10^1) + (5 \\times 10^0) + (2 \\times 10^{-1}) + (6 \\times 10^{-2}) + (4 \\times 10^{-3}) + (7 \\times 10^{-4})$$`}</div>

      <PlaceValueVis C={C} />

      <p>
        Every digit multiplies a power of 10. The powers decrease by 1 from left to right. The
        decimal point separates positive powers from negative powers.
      </p>

      <div className="lrn-eq">{`$$0.00004975 = (4 \\times 10^{-5}) + (9 \\times 10^{-6}) + (7 \\times 10^{-7}) + (5 \\times 10^{-8})$$`}</div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`Start with the definition: $w.a_1a_2\\ldots a_n = w + a_1/10 + a_2/10^2 + \\ldots + a_n/10^n$. Each fraction $a_k/10^k$ equals $a_k \\times 10^{-k}$. The whole number part $w$ itself expands in positive powers. Combining both gives the complete form.`}</p>
      </div>

      <h3>Generalized Place Value</h3>
      <p>
        For whole numbers, place value covers ones, tens, hundreds, and so on. For finite decimals,
        place value extends in both directions.
      </p>
      <p>
        Look at 35.2647 again. The digit 2 sits in the tenths place. That means it has place value
        10^(-1). The digit 4 sits in the thousandths place, with place value 10^(-3).
      </p>
      <div className="lrn-eq">{`$$w.a_1a_2 \\ldots a_n = w + a_1 \\times 10^{-1} + a_2 \\times 10^{-2} + \\ldots + a_n \\times 10^{-n}$$`}</div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>
          Why does expanding 35.2647 into powers of 10 give the same result as the fraction
          352647/10000?
        </p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`$352647/10000 = (350000 + 2000 + 600 + 40 + 7)/10000$. Divide each term by 10000: $35 + 0.2 + 0.06 + 0.004 + 0.0007$. This is exactly the expanded form. The fraction and the expansion encode the same information.`}</p>
        </details>
      </div>

      <div className="lrn-faded">
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
          <p>{`Expand 7.304: $(7 \\times 10^0) + (3 \\times 10^{-1}) + (0 \\times 10^{-2}) + (4 \\times 10^{-3})$. The zero in the hundredths place contributes nothing, but it holds the position.`}</p>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
          <p>{`Expand 0.0819: $(\\rule{1cm}{0.5pt} \\times 10^{-2}) + (1 \\times 10^{\\rule{0.5cm}{0.5pt}}) + (9 \\times 10^{\\rule{0.5cm}{0.5pt}})$`}</p>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
          <p>Write the complete expanded form of 206.0051.</p>
        </div>
      </div>
    </>,

    /* ════════════════════════════════════════════════════════════════════════
     SECTION 6: SCIENTIFIC NOTATION (Module 40.2)
     ════════════════════════════════════════════════════════════════════════ */
    <>
      <h2>Scientific Notation</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>{`Which is larger: $8.5 \\times 10^{34}$ or $2.3 \\times 10^{35}$? The first has a bigger leading number. Predict the answer.`}</p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>{`$2.3 \\times 10^{35}$ is larger. The exponent 35 > 34 means the second number has an extra factor of 10. Even though 8.5 > 2.3, multiplying 2.3 by $10^{35}$ makes it about 23 x $10^{34}$, which dwarfs 8.5 x $10^{34}$.`}</p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> Use scientific notation for very large or very small
        numbers. The exponent tells you the magnitude. The leading factor tells you the precise
        value within that magnitude.
      </p>

      <p>
        The distance from Earth to the Sun is about 150,000,000 km. The size of an atom is about
        0.0000000001 m. Writing all those zeros is error-prone. Scientific notation solves this.
      </p>

      <h3>Definition</h3>
      <p>
        A number in scientific notation has the form a x 10^k, where 1 &lt; a &lt; 10 and k is an
        integer.
      </p>
      <div className="lrn-eq lrn-eq-display">{`$$a \\times 10^k, \\quad \\text{where } 1 \\leq a < 10$$`}</div>

      <ScientificNotationVis C={C} />

      <h3>Converting to Scientific Notation</h3>
      <div className="lrn-eq">{`$$751.2 = 7.512 \\times 10^2$$`}</div>
      <div className="lrn-eq">{`$$5.7 = 5.7 \\times 10^0$$`}</div>
      <div className="lrn-eq">{`$$0.0000287 = 2.87 \\times 10^{-5}$$`}</div>
      <p>
        Move the decimal point until you have one nonzero digit before it. Count the places you
        moved. That count becomes the exponent. Move left gives a positive exponent. Move right
        gives a negative exponent.
      </p>

      <h3>Comparison Rules for Scientific Notation</h3>
      <p>Two cases arise when comparing a x 10^k and b x 10^l.</p>

      <p>
        <strong>Case 1: Same exponent (k = l).</strong> Compare a and b directly.
      </p>
      <div className="lrn-eq">{`$$\\text{If } k = l, \\text{ then } a < b \\implies a \\times 10^k < b \\times 10^k$$`}</div>

      <p>
        <strong>Case 2: Different exponents (k &lt; l).</strong> The one with the larger exponent
        wins.
      </p>
      <div className="lrn-eq">{`$$\\text{If } k < l, \\text{ then } a \\times 10^k < b \\times 10^l$$`}</div>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`When $k < l$, we know $l \\geq k + 1$. Then $a \\times 10^k < 10 \\times 10^k = 10^{k+1} \\leq 10^l \\leq b \\times 10^l$ since $b \\geq 1$. The entire first number fits inside a single power-of-10 step below the second.`}</p>
      </div>

      <h3>Worked Examples</h3>
      <div className="lrn-eq">{`$$8.5 \\times 10^{34} < 2.3 \\times 10^{35}$$`}</div>
      <p>Different exponents. 34 &lt; 35, so the first is smaller, despite 8.5 &gt; 2.3.</p>
      <div className="lrn-eq">{`$$9.2 \\times 10^{-8} < 1.1 \\times 10^{-7}$$`}</div>
      <p>Different exponents. -8 &lt; -7, so the first is smaller.</p>

      <p>Negative numbers in scientific notation work the same way. Put a minus sign in front.</p>
      <div className="lrn-eq">{`$$-3.2 \\times 10^5 = -320000$$`}</div>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>{`Why does $8.5 \\times 10^{34}$ lose to $2.3 \\times 10^{35}$, even though 8.5 is almost 4 times 2.3?`}</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`$10^{35} = 10 \\times 10^{34}$. So $2.3 \\times 10^{35} = 23 \\times 10^{34}$. Now compare: 23 vs 8.5. The extra factor of 10 from the exponent difference more than compensates for the smaller leading factor.`}</p>
        </details>
      </div>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Standard Decimal Notation</span>
          <p>Shows exact value with all digits. Best for computation and exact answers.</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Scientific Notation</span>
          <p>
            Highlights magnitude via exponent. Best for comparing very large or very small numbers.
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
      q: 'What does the decimal 0.00065 mean as a fraction?',
      a: '$0.00065 = \\frac{65}{100000} = \\frac{65}{10^5}$. A finite decimal is a fraction with a power-of-10 denominator. The 5 digits after the decimal point tell you the denominator is $10^5$.'
    },
    {
      q: 'Which is larger: 0.4 or 0.38972? Explain using the same-denominator method.',
      a: 'Pad: $0.4 = 0.40000$. Multiply both by $10^5$: 40000 vs 38972. Since $40000 > 38972$, we get $0.4 > 0.38972$. Multiplying by the same positive number preserves the order.'
    },
    {
      q: 'Write 751.2 in scientific notation.',
      a: '$751.2 = 7.512 \\times 10^2$. Move the decimal point 2 places left to get a number between 1 and 10. The exponent 2 records how many places you moved. Moving left produces a positive exponent.'
    },
    {
      q: 'Why is $\\frac{45}{1400}$ NOT a finite decimal?',
      a: 'Factor: $1400 = 2^3 \\times 5^2 \\times 7$. A fraction in lowest terms is a finite decimal only when its denominator has no prime factors other than 2 and 5. The prime 7 prevents any power of 10 from absorbing it.'
    },
    {
      q: 'Explain from first principles why a finite decimal IS a fraction.',
      a: 'By definition, a finite decimal like $3.47$ means $\\frac{347}{10^2}$. The numerator is a whole number. The denominator is a power of 10 (also a whole number). A fraction is the ratio of two whole numbers. So every finite decimal is automatically a fraction.'
    },
    {
      q: 'What is the integer part and decimal part of 6.028?',
      a: 'Integer part $= 6$. Decimal part $= 0.028$. The decomposition: $6.028 = 6 + \\frac{28}{10^3}$. This split is unique. Every finite decimal becomes exactly one whole number plus one number between 0 and 1.'
    },
    {
      q: 'Which is larger: $8.5 \\times 10^{34}$ or $2.3 \\times 10^{35}$? Explain why.',
      a: '$2.3 \\times 10^{35}$ is larger. Rewrite: $2.3 \\times 10^{35} = 23 \\times 10^{34}$. Compare: $23 \\times 10^{34}$ vs $8.5 \\times 10^{34}$. Since $23 > 8.5$, the second wins. One extra power of 10 gives a factor of 10, which overwhelms the smaller leading factor.'
    },
    {
      q: 'Compute $0.135 + 0.0486$. Show the fraction method.',
      a: 'Rewrite with denominator $10^4$: $0.135 = \\frac{1350}{10^4}$, $0.0486 = \\frac{486}{10^4}$. Add numerators: $\\frac{1350 + 486}{10^4} = \\frac{1836}{10^4} = 0.1836$. Matching denominators turns decimal addition into whole number addition.'
    },
    {
      q: 'Predict: what happens to the decimal expansion of $\\frac{1}{n}$ as $n$ gets more prime factors (other than 2 and 5)?',
      a: 'The repeating block gets longer. More prime factors mean more possible remainders in long division. More remainders means it takes longer before one repeats, producing a longer period.'
    },
    {
      q: 'Why does $10^m \\times 10^n = 10^{m+n}$ hold even when $m$ or $n$ is negative?',
      a: 'Case: $m > 0$, $n < 0$. Then $10^m \\times 10^n = 10^m \\times \\frac{1}{10^{|n|}}$. If $m > |n|$, cancel factors: $10^{m-|n|} = 10^{m+n}$. If $m < |n|$, get $\\frac{1}{10^{|n|-m}} = 10^{m+n}$. All cases give the same rule.'
    },
    {
      q: 'What is the complete expanded form of 35.2647?',
      a: '$35.2647 = (3 \\times 10^1) + (5 \\times 10^0) + (2 \\times 10^{-1}) + (6 \\times 10^{-2}) + (4 \\times 10^{-3}) + (7 \\times 10^{-4})$. Each digit multiplies the power of 10 for its position. Powers decrease by 1 from left to right.'
    },
    {
      q: 'Transfer: You measured a bolt at 0.375 inches (about 9.5 mm). Express this as a fraction in lowest terms.',
      a: '$0.375 = \\frac{375}{1000}$. Factor: $1000 = 2^3 \\times 5^3$. $\\gcd(375, 1000) = 125$. So $\\frac{375}{1000} = \\frac{3}{8}$. Since $8 = 2^3$ (only factor 2), this confirms it is a valid finite decimal.'
    },
    {
      q: 'Transfer: A measuring instrument reads 0.0000287 meters. Express in scientific notation and explain the magnitude.',
      a: '$0.0000287 = 2.87 \\times 10^{-5}$. Move the decimal 5 places right. The exponent $-5$ means the number is in the hundred-thousandths. It is roughly 0.03 millimeters.'
    },
    {
      q: 'Explain from first principles why the digit-by-digit comparison method works.',
      a: 'The first differing digit sits in the $10^{-k}$ place. Its contribution is at least $\\frac{1}{10^k}$. All later digits combined add up to less than $\\frac{1}{10^k}$. So the later digits cannot close the gap at position $k$. The first difference decides the comparison.'
    },
    {
      q: 'Compute $3.145 - 2.8675$ using the fraction method.',
      a: 'Rewrite with denominator $10^4$: $3.145 = \\frac{31450}{10^4}$, $2.8675 = \\frac{28675}{10^4}$. Subtract numerators: $\\frac{31450 - 28675}{10^4} = \\frac{2775}{10^4} = 0.2775$. Matching denominators turns subtraction into whole number subtraction.'
    },
    {
      q: 'How many decimal places does the product $11.4608 \\times 0.397$ have? Explain why.',
      a: '$11.4608$ has 4 decimal places and $0.397$ has 3. Total: $4 + 3 = 7$. The product is $(114608 \\times 10^{-4}) \\times (397 \\times 10^{-3}) = (114608 \\times 397) \\times 10^{-7}$. The law of exponents gives $10^{-7}$, meaning 7 decimal places.'
    },
    {
      q: 'Transfer: A chemistry textbook says the density of iron is $7.874 \\times 10^3$ kg/m³. Express as a standard decimal.',
      a: '$7.874 \\times 10^3 = 7874$. Move the decimal 3 places right. The exponent 3 means multiply by 1000. This gives $7874$ kg/m³.'
    },
    {
      q: 'Compute $\\frac{0.0045}{0.14}$. Show how to reduce to a whole number fraction.',
      a: '$\\frac{0.0045}{0.14} = \\frac{45 \\times 10^{-4}}{14 \\times 10^{-2}}$. Multiply top and bottom by $10^4$: $\\frac{45}{14 \\times 10^2} = \\frac{45}{1400}$. This works because $\\frac{10^{-4}}{10^{-2}} = 10^{-2}$. The result $\\frac{45}{1400} = \\frac{9}{280}$.'
    },
    {
      q: 'Self-explain: Why does 0.0050000 = 0.005? Show the algebraic steps.',
      a: '$0.0050000 = \\frac{50000}{10^7}$. Factor: $50000 = 5 \\times 10^4$. So $\\frac{50000}{10^7} = \\frac{5}{10^3} = 0.005$. Trailing zeros multiply numerator and denominator by equal factors, which cancels out.'
    },
    {
      q: '$9.2 \\times 10^{-8}$ and $1.1 \\times 10^{-7}$. Which is larger? Explain.',
      a: '$1.1 \\times 10^{-7}$ is larger. Exponents differ: $-8 < -7$. When exponents differ, the number with the larger exponent wins. Rewrite: $9.2 \\times 10^{-8} = 0.92 \\times 10^{-7}$. Now compare: $0.92 < 1.1$, confirming the result.'
    },
    {
      q: 'Transfer: A stock price changed from 0.2341927 to 0.2342 dollars. Which is higher? Use digit-by-digit.',
      a: 'Compare left to right. First 3 digits match: $0.234\\ldots$ Fourth digit: 1 vs 2. Since $1 < 2$, we get $0.2341927 < 0.2342$. The remaining digits (927) cannot overcome the gap at the fourth place.'
    },
    {
      q: 'Predict: Will adding trailing zeros to 0.7 change its value? What about adding leading zeros after the decimal point?',
      a: '$0.7 = 0.70 = 0.700$. Trailing zeros do not change the value. They multiply top and bottom by the same power of 10. But $0.07$ is different from $0.7$. The zero between the point and the 7 is not trailing. It shifts the 7 to the hundredths place.'
    },
    {
      q: 'Elaborate: Why can every real number be approximated by a finite decimal?',
      a: 'Pick any real number $x$. Find the largest whole number $w$ below $x$. Then find the largest tenths digit so that $w.a_1 \\leq x$. Continue for hundredths, thousandths. Each step narrows the interval by a factor of 10. The interval width shrinks to zero, so you can get as close to $x$ as you want.'
    },
    {
      q: 'Transfer: You add 4.50 dollars and 3.75 dollars. Show how this reduces to whole number arithmetic.',
      a: 'Rewrite with denominator $10^2$: $4.50 = \\frac{450}{100}$, $3.75 = \\frac{375}{100}$. Add: $\\frac{450 + 375}{100} = \\frac{825}{100} = 8.25$. You added whole numbers (cents) and converted back. Decimal addition is whole number addition in disguise.'
    },
    {
      q: 'Write the expanded form of 0.00004975. Identify each digit and its power of 10.',
      a: '$0.00004975 = (4 \\times 10^{-5}) + (9 \\times 10^{-6}) + (7 \\times 10^{-7}) + (5 \\times 10^{-8})$. The zeros in positions $10^{-1}$ through $10^{-4}$ contribute nothing. Each nonzero digit multiplies its place value.'
    }
  ]

  // ═══════════════════════════════════════════
  // REFERENCE MODE
  // ═══════════════════════════════════════════
  config.reference.sections = [
    <>
      <h2>Finite Decimal Fundamentals</h2>

      <div className="lrn-definition">
        <span className="lrn-definition-term">Finite Decimal</span>
        <div className="lrn-definition-desc">
          <p>{`A fraction with denominator $10^n$. Example: $2.87 = 287/10^2$.`}</p>
        </div>
      </div>

      <div className="lrn-eq lrn-eq-display">{`$$w.a_1a_2 \\ldots a_n = w + \\frac{a_1}{10} + \\frac{a_2}{10^2} + \\ldots + \\frac{a_n}{10^n}$$`}</div>
      <p>
        When to use: This is the definition. Use it to convert between decimal and fraction form.
      </p>

      <div className="lrn-definition">
        <span className="lrn-definition-term">Negative Exponents</span>
        <div className="lrn-definition-desc">
          <p>{`$10^{-n} = 1/10^n$. Allows compact notation: $41.15 = 4115 \\times 10^{-2}$.`}</p>
        </div>
      </div>

      <div className="lrn-eq lrn-eq-display">{`$$10^m \\times 10^n = 10^{m+n} \\quad \\text{(all integer } m, n\\text{)}$$`}</div>
      <p>
        When to use: Use the law of exponents when you multiply or divide numbers in scientific or
        decimal form.
      </p>

      <h3>Expanded Form</h3>
      <div className="lrn-eq lrn-eq-display">{`$$35.2647 = (3 \\times 10^1) + (5 \\times 10^0) + (2 \\times 10^{-1}) + (6 \\times 10^{-2}) + (4 \\times 10^{-3}) + (7 \\times 10^{-4})$$`}</div>
      <p>
        When to use: Use expanded form to see each digit's contribution. Each digit multiplies the
        power of 10 for its position.
      </p>

      <h3>Arithmetic Rules</h3>
      <table className="lrn-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Method</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Addition</td>
            <td>Match denominators, add numerators</td>
            <td>{`$0.135 + 0.0486 = 1836/10^4 = 0.1836$`}</td>
          </tr>
          <tr>
            <td>Subtraction</td>
            <td>Match denominators, subtract numerators</td>
            <td>{`$3.145 - 2.8675 = 2775/10^4 = 0.2775$`}</td>
          </tr>
          <tr>
            <td>Multiplication</td>
            <td>Multiply whole numbers, sum decimal places</td>
            <td>{`$11.4608 \\times 0.397 = 4.5499376$ (7 places)`}</td>
          </tr>
          <tr>
            <td>Division</td>
            <td>Convert to whole number fraction</td>
            <td>{`$0.0045/0.14 = 45/1400$`}</td>
          </tr>
        </tbody>
      </table>
    </>,

    <>
      <h2>Comparison Methods</h2>

      <h3>Finite Decimal Comparison</h3>
      <div className="lrn-eq lrn-eq-display">{`$$A \\times 10^k < B \\times 10^k \\implies A < B$$`}</div>
      <p>
        When to use: Pad with trailing zeros to match decimal places. Then compare whole numbers.
        This is the rigorous method.
      </p>

      <p>
        <strong>Digit-by-digit shortcut:</strong> Scan left to right. First differing digit decides.
      </p>

      <h3>Scientific Notation</h3>
      <div className="lrn-eq lrn-eq-display">{`$$a \\times 10^k, \\quad 1 \\leq a < 10$$`}</div>
      <p>
        When to use: For comparing very large or very small numbers. The exponent gives the
        magnitude.
      </p>

      <table className="lrn-table">
        <thead>
          <tr>
            <th>Comparison Case</th>
            <th>Rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Same exponent (k = l)</td>
            <td>Compare a and b directly</td>
          </tr>
          <tr>
            <td>Different exponents (k &lt; l)</td>
            <td>{`$a \\times 10^k < b \\times 10^l$ always`}</td>
          </tr>
        </tbody>
      </table>
    </>
  ]

  return <LearningTemplate config={config} />
}

export default function DecimalFundamentals() {
  return <DecimalFundamentalsContent />
}
