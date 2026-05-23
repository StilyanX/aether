import 'katex/dist/katex.min.css'
import { useMemo } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { ExponentAdditionViz, FractionCompareViz, PowersOf2Viz } from '../../../../components/viz'

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
          'From comparing fractions to laws of rational powers: the arithmetic of repeated multiplication.',
        sections: [
          // ─── SECTION 0: Introduction ───────────────────────────────────────
          <>
            <div className="lrn-header">
              <h1>Exponents, Roots and Radicals</h1>
              <p>
                {`Two big ideas drive this topic. First: how do you write and compare numbers that are
                very large or very small? Second: how do roots connect to powers?`}
              </p>
              <p>
                {`Both rest on one operation repeated multiplication. Every law in this topic follows
                from counting how many times you multiply.`}
              </p>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Which do you think is larger: $2^{10}$ or $10^3$? Write your guess before reading on.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`$2^{10} = 1024$ and $10^3 = 1000$. So $2^{10}$ is slightly larger.`}</p>
                <p>
                  {`This is useful: programmers use $2^{10} \\approx 10^3$ to convert between
                  binary and decimal sizes. One kilobyte = 1024 bytes, not exactly 1000.`}
                </p>
              </details>
            </div>

            {/* ─── Comparing Fractions ─────────────────────────────────── */}
            <h2>Comparing Fractions</h2>

            <p>{`Use these techniques to decide which of two similar-looking fractions is larger.`}</p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Equal Fractions</span>
              <div className="lrn-definition-desc">
                <p>{`$\\frac{a}{b} = \\frac{c}{d}$ exactly when $ad = bc$.`}</p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Start with $\\frac{a}{b} = \\frac{c}{d}$ and multiply both sides by $bd$. You get $ad = bc$.
                The argument runs backwards too: divide $ad = bc$ by $bd$ to recover the original equality.`}
              </p>
            </div>

            <h3>Common Denominator Method</h3>

            <p>{`Rewrite both fractions with the same denominator, then compare numerators.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Worked example: Compare $\\frac{3}{5}$ and $\\frac{9}{15}$`}</span>
                <p className="lrn-step-content">
                  {`Factor $\\frac{9}{15} = \\frac{3 \\cdot 3}{5 \\cdot 3} = \\frac{3}{5}$.
                  The two fractions are equal.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Worked example: Compare $\\frac{221}{391}$ and $\\frac{403}{713}$`}</span>
                <p className="lrn-step-content">
                  {`Factor each number. $221 = 13 \\times 17$, $391 = 17 \\times 23$,
                  $403 = 13 \\times 31$, $713 = 23 \\times 31$.`}
                </p>
                <p className="lrn-step-content">
                  {`Cancel shared factors. $\\frac{221}{391} = \\frac{13 \\times 17}{17 \\times 23} = \\frac{13}{23}$.
                  $\\frac{403}{713} = \\frac{13 \\times 31}{23 \\times 31} = \\frac{13}{23}$.`}
                </p>
                <p className="lrn-step-content">{`Both reduce to $\\frac{13}{23}$, so they are equal.`}</p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does factoring first beat raw cross-multiplication for $\\frac{221}{391}$
                versus $\\frac{403}{713}$?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`Without factoring, you must compute $221 \\times 713$ and $403 \\times 391$ six-digit products.
                  Factoring first reveals that both fractions reduce to $\\frac{13}{23}$ in two short steps.
                  Structure beats brute force.`}
                </p>
              </details>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">
                Never add numerators and denominators separately
              </span>
              <p>
                {`$\\frac{2}{3} + \\frac{5}{7} \\neq \\frac{2+5}{3+7} = \\frac{7}{10}$. The correct sum needs a
                common denominator: $\\frac{2}{3} + \\frac{5}{7} = \\frac{14}{21} + \\frac{15}{21} = \\frac{29}{21}$.`}
              </p>
              <p>
                {`The wrong rule gives a value between the two fractions, not their sum. Real-world picture:
                two bottles for three people and five bottles for seven people, mixed together, gives
                $\\frac{2+5}{3+7}$ the mediant, not the sum.`}
              </p>
            </div>

            <h3>Common Numerator Trick</h3>

            <p>
              {`Scale one fraction so the two numerators match. Then a smaller denominator wins,
              because dividing into fewer parts makes each part bigger.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Which is bigger: $\\frac{1}{3}$ or $\\frac{2}{7}$?`}</span>
                <p className="lrn-step-content">
                  {`Rewrite $\\frac{1}{3} = \\frac{2}{6}$. Now both numerators equal 2.
                  Compare denominators: $\\frac{2}{6}$ vs $\\frac{2}{7}$. A larger denominator means
                  a smaller fraction. So $\\frac{2}{6} > \\frac{2}{7}$, meaning $\\frac{1}{3} > \\frac{2}{7}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-graph" aria-label="Number line showing 1/3 and 2/7">
              <FractionCompareViz />
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does a larger denominator produce a smaller fraction when numerators are equal?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$\\frac{2}{d}$ asks: divide 2 into $d$ equal pieces. More pieces means each piece is
                  smaller. So increasing $d$ decreases $\\frac{2}{d}$.`}
                </p>
              </details>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Common Denominator</span>
                <p>
                  {`Cross-multiply. Compare $\\frac{a}{b}$ and $\\frac{c}{d}$ by testing $ad$ against $bc$.`}
                </p>
                <p>{`Always works. Produces large products when $b$ and $d$ share no factors.`}</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Common Numerator</span>
                <p>{`Scale one fraction so the numerators match. Smaller denominator wins.`}</p>
                <p>{`Faster when one numerator divides the other.`}</p>
              </div>
            </div>

            <h3>Neighbor Fractions</h3>

            <p>
              {`Two positive fractions $\\frac{a}{b}$ and $\\frac{c}{d}$ are neighbors when $|ad - bc| = 1$.`}
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Three Facts About Neighbors</span>
              <ul className="lrn-list">
                <li>{`Neither fraction can be simplified: $a, b$ share no factor, and $c, d$ share no factor.`}</li>
                <li>
                  {`The mediant $\\frac{a+c}{b+d}$ lies strictly between $\\frac{a}{b}$ and $\\frac{c}{d}$,
                  and is a neighbor to both.`}
                </li>
                <li>
                  {`No fraction $\\frac{e}{f}$ with positive integer $e$ and $f < b + d$ lies between
                  $\\frac{a}{b}$ and $\\frac{c}{d}$.`}
                </li>
              </ul>
              <p>
                {`Example: $\\frac{1}{2}$ and $\\frac{1}{3}$ are neighbors ($1 \\cdot 3 - 1 \\cdot 2 = 1$).
                Their mediant $\\frac{2}{5}$ is a neighbor to both.`}
              </p>
            </div>
          </>,

          // ─── SECTION 1: Powers ──────────────────────────────────────────────
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`If you multiply $a$ by itself 3 times and then by itself 5 more times, how many
                times did you multiply $a$ total? How does this relate to $a^3 \\cdot a^5$?`}
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

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The exponent counts factors. Write $a^5$ instead of $a \\cdot a \\cdot a \\cdot a \\cdot a$
                and the count is visible at a glance.`}
              </p>
              <p>
                {`This is why the product rule works. $a^3 \\cdot a^4$ joins three copies of $a$ with four more
                copies, giving seven copies total: $a^7$.`}
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
              {`Scientific notation writes any number as $a \\times 10^n$ with $1 \\leq a < 10$. It compresses
              quantities that are too large or too small to write as ordinary decimals.`}
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Big Numbers</span>
              <ul className="lrn-list">
                <li>{`Speed of light: $3 \\times 10^8$ m/s`}</li>
                <li>{`Molecules in 1 g of water: $\\approx 3 \\times 10^{22}$`}</li>
                <li>{`Radius of observable universe: $\\approx 10^{26}$ m`}</li>
                <li>{`Human lifespan: $\\approx 2 \\times 10^9$ seconds`}</li>
              </ul>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Small Numbers</span>
              <ul className="lrn-list">
                <li>{`1 centimetre $= 10^{-2}$ m`}</li>
                <li>{`1 nanometre $= 10^{-9}$ m`}</li>
                <li>{`Mass of a water molecule: $\\approx 3 \\times 10^{-23}$ g`}</li>
                <li>{`Elementary length: $\\approx 10^{-31}$ cm`}</li>
              </ul>
            </div>

            <div className="lrn-insight">
              {`"Big" and "small" depend on units. Earth's radius is $6 \\times 10^3$ km and
              $4 \\times 10^{-5}$ astronomical units at the same time. The number changes; the object does not.`}
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Programmers' Trick</span>
              <p>
                {`$2^{10} = 1024 \\approx 10^3$, so powers of 2 and powers of 10 stay close. The number of
                decimal digits in $2^n$ is roughly $0.3\\,n$. This trick is why "$1$ kilobyte" means $1024$
                bytes in computing.`}
              </p>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Calculator display: multiply big numbers</span>
                <p className="lrn-step-content">
                  {`$370{,}000 \\times 2{,}100{,}000 = 7.77 \\times 10^{11}$.
                  The calculator shows scientific notation automatically when the result is too large
                  for the display.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Distance to the nearest star in metres`}</span>
                <p className="lrn-step-content">
                  {`The nearest star is about 4 light-years away.
                  One light-year $= 3 \\times 10^8 \\text{ m/s} \\times 3.15 \\times 10^7 \\text{ s}
                  \\approx 9.5 \\times 10^{15}$ m.
                  So 4 light-years $\\approx 3.8 \\times 10^{16}$ m.`}
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

          // ─── SECTION 2: Zero and Negative Exponents ─────────────────────────
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
                cannot prove them "multiplying $a$ by itself zero times" has no direct meaning.`}
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
                <p>{`For any non-zero $a$ and positive integer $n$:`}</p>
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

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">{`Positive exponent $a^n$`}</span>
                <p>
                  {`Counts $n$ copies of $a$ multiplied together. Concrete, direct, derivable from
                  arithmetic alone.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Zero / negative exponent</span>
                <p>
                  {`Agreed by definition to preserve $a^m \\cdot a^n = a^{m+n}$. Not derived from counting 
                  chosen so the product rule never breaks.`}
                </p>
              </div>
            </div>
          </>,

          // ─── SECTION 3: Laws of Exponents ──────────────────────────────────
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`What should $(a^3)^4$ equal? Think of it as $(a^3)(a^3)(a^3)(a^3)$ apply the
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

            <p>{`Four laws govern every expression built from integer powers of one base.`}</p>

            <div className="lrn-graph" aria-label="Exponent addition: 2^3 times 2^4 equals 2^7">
              <ExponentAdditionViz />
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Product of powers</span>
                <p className="lrn-step-content lrn-eq">{`$$a^m \\cdot a^n = a^{m+n}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power of a power</span>
                <p className="lrn-step-content lrn-eq">{`$$(a^m)^n = a^{mn}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Quotient of powers</span>
                <p className="lrn-step-content lrn-eq">{`$$\\frac{a^m}{a^n} = a^{m-n}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power of a product</span>
                <p className="lrn-step-content lrn-eq">{`$$(ab)^n = a^n b^n$$`}</p>
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
                  {`The rule extends to zero and negative integers by the conventions $a^0 = 1$ and
                  $a^{-k} = \\frac{1}{a^k}$ the conventions were chosen for exactly this reason.`}
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

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Verify $2^{1001} \\cdot 2^n = 2^{2000}$ what must $n$ be? Why?`}</p>
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

          // ─── SECTION 4: Roots ───────────────────────────────────────────────
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
                  By convention we only define roots of non-negative numbers and only take the non-negative
                  answer. This sidesteps splitting every proof into "even $n$" and "odd $n$" cases.`}
                </p>
              </details>
            </div>

            <h2>Roots</h2>

            <p>{`A root reverses a power. The square root of $9$ is $3$ because $3^2 = 9$.`}</p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">nth Root</span>
              <div className="lrn-definition-desc">
                <p>{`For a positive integer $n$ and non-negative $a$, the nth root of $a$ is the
                non-negative number $x$ such that $x^n = a$. We write:`}</p>
                <p className="lrn-eq lrn-eq-hero">{`$$\\sqrt[n]{a} = x \\iff x^n = a, \\quad x \\geq 0.$$`}</p>
                <p>
                  {`Square root: $\\sqrt{a} = \\sqrt[2]{a}$. Cube root: $\\sqrt[3]{a}$. Fourth root: $\\sqrt[4]{a}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY DOES THIS UNIQUELY DEFINE A NUMBER?</span>
              <p>
                {`If $0 \\leq x_1 < x_2$, then $x_1^n < x_2^n$. A larger non-negative base gives a strictly
                larger nth power. So at most one non-negative $x$ can satisfy $x^n = a$.`}
              </p>
              <p>
                {`Existence requires a continuity argument from calculus, but the answer always exists
                for every $a \\geq 0$.`}
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

            <p>{`Every property below follows from one trick: raise both sides to the nth power.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Product rule</span>
                <p className="lrn-step-content lrn-eq">{`$$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Quotient rule</span>
                <p className="lrn-step-content lrn-eq">
                  {`$$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} \\quad (b > 0)$$`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power inside a root</span>
                <p className="lrn-step-content lrn-eq">{`$$\\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Nested roots</span>
                <p className="lrn-step-content lrn-eq">{`$$\\sqrt[mn]{a} = \\sqrt[m]{\\sqrt[n]{a}}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Factor pull-out</span>
                <p className="lrn-step-content lrn-eq">{`$$\\sqrt[n]{a^n b} = a \\sqrt[n]{b} \\quad (a \\geq 0)$$`}</p>
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

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Proof: $\\sqrt[mn]{a} = \\sqrt[m]{\\sqrt[n]{a}}$`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Let $y = \\sqrt[m]{\\sqrt[n]{a}}$. Then $y^m = \\sqrt[n]{a}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Raise to the $n$th power: $(y^m)^n = (\\sqrt[n]{a})^n = a$, so $y^{mn} = a$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`So $y$ is the non-negative number whose $mn$th power is $a$: $y = \\sqrt[mn]{a}$.`}
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

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Simplify $\\sqrt{50}$`}</span>
                <p className="lrn-step-content">
                  {`$50 = 25 \\cdot 2 = 5^2 \\cdot 2$. So $\\sqrt{50} = \\sqrt{5^2 \\cdot 2} = 5\\sqrt{2}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Simplify $\\sqrt[4]{16 \\cdot 81}$`}</span>
                <p className="lrn-step-content">
                  {`Use the product rule: $\\sqrt[4]{16 \\cdot 81} = \\sqrt[4]{16} \\cdot \\sqrt[4]{81} = 2 \\cdot 3 = 6$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Simplify $\\sqrt{\\sqrt{16}}$`}</span>
                <p className="lrn-step-content">
                  {`By nesting: $\\sqrt{\\sqrt{16}} = \\sqrt[4]{16} = 2$. Or directly: $\\sqrt{16} = 4$ and $\\sqrt{4} = 2$.`}
                </p>
              </div>
            </div>
          </>,

          // ─── SECTION 5: Fractional Exponents ───────────────────────────────
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
                  square is $a$ that is, $\\sqrt{a}$.`}
                </p>
              </details>
            </div>

            <h2>Rational (Fractional) Exponents</h2>

            <p>
              {`We just proved every root property by raising both sides to the nth power. The same
              proofs work if we redefine $\\sqrt[n]{a}$ as $a^{\\tfrac{1}{n}}$. Once we do, root rules become
              special cases of the laws of exponents one rule book for both.`}
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

            <p>{`All four integer-exponent laws extend to rational exponents without change.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Product rule</span>
                <p className="lrn-step-content lrn-eq">{`$$a^p \\cdot a^q = a^{p+q}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Product base rule</span>
                <p className="lrn-step-content lrn-eq">
                  {`$$(ab)^{\\tfrac{m}{n}} = a^{\\tfrac{m}{n}} \\cdot b^{\\tfrac{m}{n}}$$`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power of a power</span>
                <p className="lrn-step-content lrn-eq">{`$$(a^p)^q = a^{pq}$$`}</p>
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

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Prove $(a^p)^q = a^{pq}$ for rational $p = \\frac{1}{n}$ and general rational $q$.
                What are the three cases to handle?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`Case 1: $q$ is a positive integer. Apply power-of-a-power $q$ times.`}</p>
                <p>
                  {`Case 2: $q = \\frac{1}{k}$. Check: $((a^{\\tfrac{1}{n}})^{\\tfrac{1}{k}})^{nk} = a^1 = a$,
                  so $(a^{\\tfrac{1}{n}})^{\\tfrac{1}{k}} = a^{\\tfrac{1}{(nk)}}$. ✓`}
                </p>
                <p>{`Case 3: General rational $q = \\frac{m}{k}$. Combine cases 1 and 2.`}</p>
              </details>
            </div>

            <h3>Irrational Exponents (Preview)</h3>

            <p>
              {`$2^{\\sqrt{2}}$ has no meaning from repeated multiplication $\\sqrt{2}$ is irrational, so
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
          </>,

          // ─── SECTION 6: Proving Inequalities ────────────────────────────────
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Do you think $(1.01)^{100}$ is less than 2, equal to 2, or greater than 2?
                Write a rough estimate before reading on.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$(1.01)^{100} \\geq 2$. Even a rough count: multiplying 100 terms each at least
                  $1 + 0.01$ means the product grows by at least 1% each step,
                  doubling within 100 steps.`}
                </p>
              </details>
            </div>

            <h2>Proving Inequalities</h2>

            <p>{`These techniques give rigorous bounds instead of estimates.`}</p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">THE CORE IDEA</span>
              <p>
                {`Every technique below replaces complicated terms with simpler ones. If each of $n$ terms
                is at least $x$, the sum is at least $nx$.`}
              </p>
              <p>
                {`Each trick trades exact value for clean inequality. The price is precision; the prize is
                a proof.`}
              </p>
            </div>

            <h3>Bounding and Sandwiching</h3>

            <p>{`Replace each term with a clearly larger or smaller expression.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $\\frac{1}{2} < \\frac{1}{101} + \\frac{1}{102} + \\cdots + \\frac{1}{200} < 1$`}</span>
                <p className="lrn-step-content">
                  {`Lower bound: each of 100 terms exceeds $\\frac{1}{200}$.
                  Sum $> 100 \\times \\frac{1}{200} = \\frac{1}{2}$. ✓`}
                </p>
                <p className="lrn-step-content">
                  {`Upper bound: each of 100 terms is less than $\\frac{1}{100}$.
                  Sum $< 100 \\times \\frac{1}{100} = 1$. ✓`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why is each term $\\frac{1}{k}$ for $k \\in \\{101, \\ldots, 200\\}$ bounded below
                by $\\frac{1}{200}$ and above by $\\frac{1}{100}$?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$k$ ranges from 101 to 200. Larger $k$ means smaller $\\frac{1}{k}$.
                  The smallest term is $\\frac{1}{200}$ (when $k=200$) and the largest is
                  $\\frac{1}{101} < \\frac{1}{100}$ (when $k=101$).`}
                </p>
              </details>
            </div>

            <h3>{`Proving $(1.01)^{100} \\geq 2$`}</h3>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Method 1: Expansion bound</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`$(1.01)^{100} = (1 + 0.01)^{100}$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Expanding gives $1 + \\binom{100}{1} \\cdot 0.01 + \\text{(more positive terms)}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Keep only the first two terms: $\\geq 1 + 100 \\times 0.01 = 1 + 1 = 2$. ✓`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Method 2: Sequential bound (induction)`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Claim: $(1.01)^k \\geq 1 + 0.01k$ for every positive integer $k$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Base case: $(1.01)^1 = 1.01 = 1 + 0.01 \\cdot 1$. ✓`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Inductive step. Assume $(1.01)^k \\geq 1 + 0.01k$. Multiply both sides by $1.01$:`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`$(1.01)^{k+1} \\geq (1 + 0.01k)(1.01) = 1 + 0.01k + 0.01 + 0.0001k > 1 + 0.01(k+1)$. ✓`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">
                  {`At $k = 100$: $(1.01)^{100} \\geq 1 + 1 = 2$. ✓`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Telescoping</h3>

            <p>{`When a sum collapses to just two terms, use telescoping.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $1 + \\frac{1}{4} + \\frac{1}{9} + \\cdots + \\frac{1}{100^2} < 2$`}</span>
                <p className="lrn-step-content">
                  {`For $k \\geq 2$: $\\frac{1}{k^2} < \\frac{1}{k-1} - \\frac{1}{k}$
                  because $\\frac{1}{(k-1)k} = \\frac{1}{k^2 - k} > \\frac{1}{k^2}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Sum from $k=2$ to $100$: $\\sum_{k=2}^{100} \\frac{1}{k^2} < \\sum_{k=2}^{100}
                  \\left(\\frac{1}{k-1} - \\frac{1}{k}\\right) = 1 - \\frac{1}{100} < 1$.`}
                </p>
                <p className="lrn-step-content">{`Add the $k=1$ term: total $< 1 + 1 = 2$. ✓`}</p>
              </div>
            </div>

            <div className="lrn-insight">
              {`A surprising identity: $\\frac{1}{101} + \\cdots + \\frac{1}{200} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\cdots - \\frac{1}{200}$.
              To see why, start with $H = 1 + \\frac{1}{2} + \\cdots + \\frac{1}{200}$ and subtract twice the even terms:
              $H - 2\\left(\\frac{1}{2} + \\frac{1}{4} + \\cdots + \\frac{1}{200}\\right) = H - \\left(1 + \\frac{1}{2} + \\cdots + \\frac{1}{100}\\right)$.
              The left side is the alternating sum. The right side is exactly $\\frac{1}{101} + \\cdots + \\frac{1}{200}$.`}
            </div>

            <h3>Harmonic Series Growth</h3>

            <p>
              {`The harmonic series $1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots$ grows without bound,
              but very slowly.`}
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Bound</span>
              <p>
                {`$1 + \\frac{1}{2} + \\cdots + \\frac{1}{1{,}000{,}000} < 20$.
                Yet for some large $n$, the sum exceeds 20 the series diverges, just very slowly.`}
              </p>
            </div>
          </>,

          // ─── SECTION 7: Arithmetic and Geometric Means ──────────────────────
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`You have a rectangle with sides $a = 4$ and $b = 9$. Which is larger: the side of
                a square with the same perimeter, or the side of a square with the same area?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Same perimeter: side $= \\frac{a+b}{2} = \\frac{13}{2} = 6.5$ (the arithmetic mean).`}
                </p>
                <p>{`Same area: side $= \\sqrt{ab} = \\sqrt{36} = 6$ (the geometric mean).`}</p>
                <p>
                  {`The AM side is larger. This is the AM-GM inequality: $\\sqrt{ab} \\leq \\frac{a+b}{2}$.`}
                </p>
              </details>
            </div>

            <h2>Arithmetic and Geometric Means</h2>

            <p>
              {`The arithmetic mean is the additive middle of two numbers. The geometric mean is the
              multiplicative middle.`}
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Arithmetic Mean (AM)</span>
              <div className="lrn-definition-desc">
                <p>{`The arithmetic mean of $a$ and $b$ is:`}</p>
                <p className="lrn-eq lrn-eq-hero">{`$$\\text{AM} = \\frac{a+b}{2}$$`}</p>
                <p>{`It is the midpoint of $a$ and $b$ on the number line.`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Geometric Mean (GM)</span>
              <div className="lrn-definition-desc">
                <p>{`The geometric mean of two non-negative numbers $a$ and $b$ is:`}</p>
                <p className="lrn-eq lrn-eq-hero">{`$$\\text{GM} = \\sqrt{ab}$$`}</p>
                <p>{`It is the middle term of a geometric progression from $a$ to $b$.`}</p>
              </div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Connection to Progressions</span>
              <p>
                {`The AM is the middle term of the arithmetic progression $a, \\frac{a+b}{2}, b$.
                The GM is the middle term of the geometric progression $a, \\sqrt{ab}, b$.`}
              </p>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Find $a$ if AM of 1 and $a$ equals 7`}</span>
                <p className="lrn-step-content">{`$\\frac{1+a}{2} = 7 \\Rightarrow a = 13$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Find $a$ if GM of 1 and $a$ equals 7`}</span>
                <p className="lrn-step-content">
                  {`$\\sqrt{1 \\cdot a} = 7 \\Rightarrow a = 49$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Square with same perimeter vs same area</span>
                <p className="lrn-step-content">
                  {`Rectangle with sides $a, b$. Square with same perimeter: side $= \\frac{a+b}{2}$
                  (AM). Square with same area: side $= \\sqrt{ab}$ (GM). The AM square is always
                  at least as large.`}
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY DOES GM SIT BELOW AM?</span>
              <p>
                {`Squaring amplifies large numbers more than small ones. So when $a$ and $b$ differ, the
                multiplicative middle $\\sqrt{ab}$ gets pulled below the additive middle $\\frac{a+b}{2}$.
                Equality holds only when $a = b$.`}
              </p>
              <p>{`This seeds the AM-GM inequality in the next section.`}</p>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`If $a = 4$ and $b = 9$, compute the AM and GM. Why is the GM less than the AM?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`AM $= \\frac{4+9}{2} = 6.5$. GM $= \\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$.
                  The GM is smaller because squaring amplifies large numbers more than small ones,
                  so the geometric "middle" is pulled toward the smaller value.`}
                </p>
                <p>
                  {`The gap $(6.5 - 6 = 0.5)$ measures how unequal $a$ and $b$ are. If $a = b$,
                  AM and GM coincide.`}
                </p>
              </details>
            </div>
          </>,

          // ─── SECTION 8: AM-GM Inequality ────────────────────────────────────
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Two non-negative numbers sum to 10. Which pair do you think has the largest product:
                $(1, 9)$, $(2, 8)$, $(4, 6)$, or $(5, 5)$?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Products: $1 \\times 9 = 9$, $2 \\times 8 = 16$, $4 \\times 6 = 24$,
                  $5 \\times 5 = 25$.`}
                </p>
                <p>
                  {`Equal numbers give the largest product. AM-GM tells you why: the product is
                  at most $\\left(\\frac{a+b}{2}\\right)^2 = 25$, achieved only when $a = b$.`}
                </p>
              </details>
            </div>

            <h2>The AM-GM Inequality</h2>

            <p>
              {`Use AM-GM to maximise a product when the sum is fixed, or to minimise a sum when the
              product is fixed. For any non-negative $a$ and $b$:`}
            </p>

            <p className="lrn-eq lrn-eq-hero">{`$$\\sqrt{ab} \\leq \\frac{a+b}{2}, \\quad \\text{equality iff } a = b.$$`}</p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Algebraic Proof</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`$(\\sqrt{a} - \\sqrt{b})^2 \\geq 0$ for all $a, b \\geq 0$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Expand: $a - 2\\sqrt{ab} + b \\geq 0$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Rearrange: $\\frac{a+b}{2} \\geq \\sqrt{ab}$. ✓`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Equality when $(\\sqrt{a} - \\sqrt{b})^2 = 0$, i.e. $a = b$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the proof start from $(\\sqrt{a} - \\sqrt{b})^2 \\geq 0$?
                What property makes this always true?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`Any square is non-negative: $x^2 \\geq 0$ for all real $x$.
                  Setting $x = \\sqrt{a} - \\sqrt{b}$ gives a non-negative starting point.
                  The rest is algebra.`}
                </p>
              </details>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Algebraic Proof</span>
                <p>
                  {`Start from $(\\sqrt{a} - \\sqrt{b})^2 \\geq 0$, expand, rearrange. Short and general.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Geometric Proof</span>
                <p>
                  {`Fit four $a \\times b$ rectangles inside an $(a+b) \\times (a+b)$ square. The leftover
                  area is $(a-b)^2 \\geq 0$. So $4ab \\leq (a+b)^2$.`}
                </p>
              </div>
            </div>

            <h3>AM-GM Applications: Max and Min Problems</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Max product with fixed sum</span>
                <p className="lrn-step-content">
                  {`Two non-negative numbers sum to $c$. Their product is at most $\\left(\\frac{c}{2}\\right)^2 = \\frac{c^2}{4}$,
                  achieved when both equal $\\frac{c}{2}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Why: $ab \\leq \\left(\\frac{a+b}{2}\\right)^2 = \\left(\\frac{c}{2}\\right)^2$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Min sum with fixed product</span>
                <p className="lrn-step-content">
                  {`Two positive numbers have product $c > 0$. Their sum is at least $2\\sqrt{c}$,
                  achieved when both equal $\\sqrt{c}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Why: $\\frac{a+b}{2} \\geq \\sqrt{ab} = \\sqrt{c}$, so $a + b \\geq 2\\sqrt{c}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Fencing problem: max area</span>
                <p className="lrn-step-content">
                  {`You have 120 m of fence for a rectangle. Perimeter $= 2(a+b) = 120$, so $a + b = 60$.
                  Area $= ab \\leq \\left(\\frac{60}{2}\\right)^2 = 900$ m².`}
                </p>
                <p className="lrn-step-content">
                  {`Max area 900 m² when $a = b = 30$ m (a square).`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Fencing near the sea</span>
                <p className="lrn-step-content">
                  {`The sea covers one side for free. You fence only three sides: $a + 2b = 120$.
                  Area $= ab$.`}
                </p>
                <p className="lrn-step-content">
                  {`Apply AM-GM to $a$ and $2b$, whose sum is $120$:
                  $ab = \\frac{1}{2} \\cdot a \\cdot (2b) \\leq \\frac{1}{2}\\left(\\frac{a+2b}{2}\\right)^2 = \\frac{1}{2} \\cdot 60^2 = 1800$.`}
                </p>
                <p className="lrn-step-content">
                  {`Max area is $1800$ m², reached when $a = 2b$. Combined with $a + 2b = 120$: $a = 60$ m, $b = 30$ m.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Max product $ab$ given $a + 2b = 3$`}</span>
                <p className="lrn-step-content">
                  {`Use AM-GM on $a$ and $2b$: $ab = \\frac{1}{2} \\cdot a \\cdot 2b \\leq \\frac{1}{2}
                  \\left(\\frac{a + 2b}{2}\\right)^2 = \\frac{1}{2} \\cdot \\frac{9}{4} = \\frac{9}{8}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Max $= \\frac{9}{8}$ when $a = 2b$, i.e. $a = \\frac{3}{2}$, $b = \\frac{3}{4}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the fencing-near-the-sea problem give a different answer than the
                standard fencing problem, even though the total fence length is 120 m in both?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`In the standard problem, four sides must be covered; the constraint is $2a + 2b = 120$.
                  In the sea problem, only three sides need fence: $a + 2b = 120$. The sea replaces
                  one side for free, so you can stretch the parallel dimension further.`}
                </p>
              </details>
            </div>

            <h3>Geometric Illustration of AM-GM</h3>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Four-Rectangle Illustration</span>
              <p>
                {`Place four $a \\times b$ rectangles inside an $(a+b) \\times (a+b)$ square.
                The remaining area is $(a-b)^2$.`}
              </p>
              <p>
                {`So $4ab + (a-b)^2 = (a+b)^2$, giving $4ab \\leq (a+b)^2$, i.e. $\\sqrt{ab} \\leq \\frac{a+b}{2}$.`}
              </p>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Right-Angle Bisector Illustration</span>
              <p>
                {`Draw a right angle with the bisector. Build two right triangles, one with legs of length
                $a$ (area $\\tfrac{a^2}{2}$) and one with legs of length $b$ (area $\\tfrac{b^2}{2}$). Together
                they cover the $a \\times b$ rectangle, so $\\tfrac{a^2}{2} + \\tfrac{b^2}{2} \\geq ab$.`}
              </p>
              <p>
                {`Substitute $\\sqrt{c}$ for $a$ and $\\sqrt{d}$ for $b$ to recover the AM-GM inequality:
                $\\frac{c+d}{2} \\geq \\sqrt{cd}$.`}
              </p>
            </div>

            <h3>AM-GM for n Numbers</h3>

            <p className="lrn-eq lrn-eq-hero">
              {`$$\\sqrt[n]{a_1 a_2 \\cdots a_n} \\leq \\frac{a_1 + a_2 + \\cdots + a_n}{n}$$`}
            </p>

            <p>{`Equality holds if and only if all $a_i$ are equal.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Proof for $n = 4$ (balancing pairs)`}</span>
                <p className="lrn-step-content">
                  {`Replace $(a_1, a_2)$ with $(\\frac{a_1+a_2}{2}, \\frac{a_1+a_2}{2})$.
                  The sum stays the same. The product does not decrease (AM-GM for 2).
                  Repeat for the other pair. After two rounds, all four numbers are equal.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Proof for $n = 8$`}</span>
                <p className="lrn-step-content">
                  {`Apply the $n=4$ trick twice: first balance four pairs, then balance two pairs
                  of the resulting groups.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Proof for $n = 3$`}</span>
                <p className="lrn-step-content">
                  {`Set $g = \\sqrt[3]{a_1 a_2 a_3}$. Add $g$ as a fourth number and apply AM-GM for $n = 4$
                  to $(a_1, a_2, a_3, g)$.`}
                </p>
                <p className="lrn-step-content">
                  {`The product of all four is $a_1 a_2 a_3 \\cdot g = g^3 \\cdot g = g^4$, so their geometric mean
                  is $\\sqrt[4]{g^4} = g$. The $n = 4$ inequality says:`}
                </p>
                <p className="lrn-step-content lrn-eq">
                  {`$$\\frac{a_1 + a_2 + a_3 + g}{4} \\geq g.$$`}
                </p>
                <p className="lrn-step-content">
                  {`Multiply by $4$, subtract $g$ from both sides: $a_1 + a_2 + a_3 \\geq 3g$. Divide by $3$:
                  $\\frac{a_1 + a_2 + a_3}{3} \\geq g = \\sqrt[3]{a_1 a_2 a_3}$. ✓`}
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY THESE TRICKS WORK</span>
              <p>
                {`The balancing trick handles every power of 2. The "add a geometric mean" trick reduces
                $n = 3, 5, 6, 7$ to the next power of 2 above.`}
              </p>
              <p>
                {`A fourth route uses contradiction. Assume the product is maximum and not all numbers
                are equal. Replace two unequal numbers by their AM sum stays, product strictly
                increases. Contradiction. So the maximum forces every number equal.`}
              </p>
              <p>
                {`Caution: the contradiction route assumes a maximum exists. Existence needs calculus
                (extreme value theorem on a closed bounded set).`}
              </p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Third Proof for $n=3$: Direct Identity`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Identity: $a^3 + b^3 + c^3 - 3abc = \\frac{1}{2}(a+b+c)\\left[(a-b)^2+(b-c)^2+(a-c)^2\\right]$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`The right side is $\\geq 0$ when $a + b + c \\geq 0$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`So $a^3 + b^3 + c^3 \\geq 3abc$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Substitute $a = \\sqrt[3]{a_1}$, $b = \\sqrt[3]{a_2}$, $c = \\sqrt[3]{a_3}$
                  to get the AM-GM inequality for three numbers.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $\\frac{a_1}{a_2} + \\frac{a_2}{a_3} + \\cdots + \\frac{a_n}{a_1} \\geq n$`}</span>
                <p className="lrn-step-content">
                  {`Apply AM-GM to $n$ terms. Their product is
                  $\\frac{a_1}{a_2} \\cdot \\frac{a_2}{a_3} \\cdots \\frac{a_n}{a_1} = 1$.
                  GM $= \\sqrt[n]{1} = 1$. So AM $\\geq 1$, meaning sum $\\geq n$. ✓`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $\\sqrt[3]{ab^2} \\leq \\frac{a+2b}{3}$`}</span>
                <p className="lrn-step-content">
                  {`Apply AM-GM to three numbers $a, b, b$.
                  $\\sqrt[3]{a \\cdot b \\cdot b} \\leq \\frac{a+b+b}{3} = \\frac{a+2b}{3}$. ✓`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Min of $a+b$ when $ab^2 = 1$`}</span>
                <p className="lrn-step-content">
                  {`Split $a$ in half so all three terms appear in the product $a^2 \\frac{b}{4}$.
                  Apply AM-GM to $\\tfrac{a}{2}, \\tfrac{a}{2}, b$:`}
                </p>
                <p className="lrn-step-content lrn-eq">
                  {`$$\\frac{\\frac{a}{2} + \\frac{a}{2} + b}{3} \\geq \\sqrt[3]{\\frac{a^2 b}{4}}.$$`}
                </p>
                <p className="lrn-step-content">
                  {`The left side equals $\\tfrac{a+b}{3}$. The right side uses $ab^2 = 1$ but the
                  product inside is $a^2 \\frac{b}{4}$, not $ab^2$. Rewrite the constraint as $a^2 b^2 = a$,
                  then $a^2 \\frac{b}{4} = a \\cdot \\frac{ab}{4}$. A cleaner route is to apply the constraint after
                  finding the equality case.`}
                </p>
                <p className="lrn-step-content">
                  {`Equality holds when $\\tfrac{a}{2} = b$, i.e. $a = 2b$. Substitute into $ab^2 = 1$:
                  $2b^3 = 1$, so $b = 2^{-\\tfrac{1}{3}}$ and $a = 2^{\\tfrac{2}{3}}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Minimum: $a + b = 2^{\\tfrac{2}{3}} + 2^{-\\tfrac{1}{3}} = 2^{-\\tfrac{1}{3}}(2 + 1) = 3 \\cdot 2^{-\\tfrac{1}{3}}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">{`AM-GM for $n = 2^k$ (power-of-2 trick)`}</span>
                <p>
                  {`Apply pairwise balancing in $\\log_2 n$ rounds. Elegant and self-contained.
                  Works cleanly when $n$ is exactly a power of 2.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">{`AM-GM for other $n$ (add-extra-number trick)`}</span>
                <p>
                  {`For $n = 3$: add the geometric mean as a 4th number, apply $n=4$ case,
                  then cancel. Different structural trick for different $n$.`}
                </p>
              </div>
            </div>
          </>,

          // ─── SECTION 9: Quadratic and Harmonic Means ────────────────────────
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`You drive from A to B at 40 km/h and back at 60 km/h. Is your average speed
                the arithmetic mean (50 km/h), the geometric mean ($\\sqrt{40 \\times 60} \\approx 49$),
                or something else?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Total distance $= 2d$. Time $= \\frac{d}{40} + \\frac{d}{60} = \\frac{3d+2d}{120} = \\frac{5d}{120}$.`}
                </p>
                <p>
                  {`Average speed $= \\frac{2d}{\\frac{5d}{120}} = 48$ km/h. This is the harmonic mean:
                  $HM = \\frac{2}{\\frac{1}{40} + \\frac{1}{60}} = \\frac{2 \\times 120}{5} = 48$.`}
                </p>
              </details>
            </div>

            <h2>Quadratic Mean and Harmonic Mean</h2>

            <p>
              {`Two more averages complete the picture. QM appears with squared quantities like energy
              and signal amplitude. HM appears when you average rates.`}
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Quadratic Mean (QM)</span>
              <div className="lrn-definition-desc">
                <p>{`The quadratic mean (also called the root mean square) of $a$ and $b$ is:`}</p>
                <p className="lrn-eq lrn-eq-hero">
                  {`$$\\text{QM} = \\sqrt{\\frac{a^2+b^2}{2}}$$`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Harmonic Mean (HM)</span>
              <div className="lrn-definition-desc">
                <p>{`The harmonic mean of $a$ and $b$ (both positive) is:`}</p>
                <p className="lrn-eq lrn-eq-hero">
                  {`$$\\text{HM} = \\frac{2}{{\\dfrac{1}{a}+\\dfrac{1}{b}}} = \\frac{2ab}{a+b}$$`}
                </p>
              </div>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Quadratic Mean vs Arithmetic Mean</span>
                <p>
                  {`QM measures spread. It is the root mean square (RMS) used in physics, signal
                  processing, and statistics. AM measures the centre.`}
                </p>
                <p>{`QM $\\geq$ AM, with equality only when $a = b$.`}</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Harmonic Mean vs Geometric Mean</span>
                <p>
                  {`HM appears when you average rates. GM appears in growth and scaling. Both sit below AM.`}
                </p>
                <p>{`HM $\\leq$ GM, with equality only when $a = b$.`}</p>
              </div>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">{`Geometric picture: QM $\\geq$ AM from the curve $y = x^2$`}</span>
              <p>
                {`Place two points $(a, a^2)$ and $(b, b^2)$ on the parabola $y = x^2$. The midpoint of
                the line segment connecting them has $x$-coordinate $\\frac{a+b}{2}$ and $y$-coordinate
                $\\frac{a^2+b^2}{2}$.`}
              </p>
              <p>
                {`The parabola curves upward, so the midpoint of the segment sits above the curve.
                Compare $y$-values at $x = \\frac{a+b}{2}$: the curve gives $\\left(\\frac{a+b}{2}\\right)^2$,
                the segment gives $\\frac{a^2+b^2}{2}$. The segment is higher, so
                $\\frac{a^2+b^2}{2} \\geq \\left(\\frac{a+b}{2}\\right)^2$. Taking square roots gives QM $\\geq$ AM.`}
              </p>
            </div>

            <h3>Proofs: QM and HM Inequalities</h3>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof: QM ≥ AM</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Want: $\\sqrt{\\frac{a^2+b^2}{2}} \\geq \\frac{a+b}{2}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Square both sides (both sides are non-negative): $\\frac{a^2+b^2}{2} \\geq \\frac{(a+b)^2}{4}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Cross-multiply by 4: $2(a^2+b^2) \\geq (a+b)^2 = a^2 + 2ab + b^2$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Simplify: $a^2 - 2ab + b^2 \\geq 0$, i.e. $(a-b)^2 \\geq 0$. ✓`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof: HM ≤ GM</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`$\\frac{1}{HM} = \\frac{1}{2}\\left(\\frac{1}{a}+\\frac{1}{b}\\right) = AM\\left(\\frac{1}{a}, \\frac{1}{b}\\right)$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`By AM-GM: $AM\\left(\\frac{1}{a}, \\frac{1}{b}\\right) \\geq GM\\left(\\frac{1}{a}, \\frac{1}{b}\\right) = \\sqrt{\\frac{1}{ab}} = \\frac{1}{GM(a,b)}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`So $\\frac{1}{HM} \\geq \\frac{1}{GM}$, which means $HM \\leq GM$. ✓`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`The QM proof reduces to $(a-b)^2 \\geq 0$. The AM-GM proof also reduces to
                $(\\sqrt{a}-\\sqrt{b})^2 \\geq 0$. Why do both proofs end at a squared expression?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`Every inequality of the form $X \\geq Y$ where $X - Y$ can be written as a sum
                  of squares is automatically true. The art is finding the right squared expression.`}
                </p>
              </details>
            </div>

            <h3>The Four-Mean Chain</h3>

            <p className="lrn-eq lrn-eq-hero">
              {`$$\\text{HM} \\leq \\text{GM} \\leq \\text{AM} \\leq \\text{QM}$$`}
            </p>

            <p>{`Equality holds throughout if and only if $a = b$.`}</p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Three-Mean Chain in a Picture</span>
              <p>
                {`For $a = 1$ and $b = 9$: HM $= 1.8$, GM $= 3$, AM $= 5$, QM $\\approx 6.4$.
                You can place all four on a number line and see the strict ordering.`}
              </p>
            </div>

            <h3>The Cauchy-Schwarz Inequality</h3>

            <p>{`The Cauchy-Schwarz inequality bounds the dot product of two vectors.`}</p>

            <p className="lrn-eq lrn-eq-hero">
              {`$$(p_1 q_1 + \\cdots + p_n q_n)^2 \\leq (p_1^2 + \\cdots + p_n^2)(q_1^2 + \\cdots + q_n^2)$$`}
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof via Non-negative Quadratic</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Consider $f(x) = \\sum_{i=1}^n (p_i x + q_i)^2 \\geq 0$ for all real $x$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Expand: $f(x) = Ax^2 + Bx + C$ where $A = \\sum p_i^2$, $B = 2\\sum p_i q_i$,
                  $C = \\sum q_i^2$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Since $f(x) \\geq 0$ for all $x$, the discriminant is $\\leq 0$: $B^2 - 4AC \\leq 0$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`So $4(\\sum p_i q_i)^2 \\leq 4(\\sum p_i^2)(\\sum q_i^2)$, giving Cauchy-Schwarz. ✓`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`A quadratic $Ax^2 + Bx + C$ with $A > 0$ is non-negative for all $x$ exactly when
                it has no real roots i.e. discriminant $B^2 - 4AC \\leq 0$. This is the standard
                condition from the quadratic formula.`}
              </p>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $(a_1 + \\cdots + a_n)(\\frac{1}{a_1} + \\cdots + \\frac{1}{a_n}) \\geq n^2$`}</span>
                <p className="lrn-step-content">
                  {`By AM $\\geq$ HM: $\\frac{a_1 + \\cdots + a_n}{n} \\geq \\frac{n}{\\frac{1}{a_1}+\\cdots+\\frac{1}{a_n}}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Cross-multiply: $(a_1 + \\cdots + a_n)(\\frac{1}{a_1} + \\cdots + \\frac{1}{a_n}) \\geq n^2$. ✓`}
                </p>
              </div>
            </div>
          </>,

          // ─── SECTION 10: Which is bigger? Comparison problems ────────────────
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Which is bigger: $1000^{2000}$ or $2000^{1000}$?
                Write your guess and a rough reason before reading on.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Compare by taking both to the $\\frac{1}{1000}$ power: $1000^2 = 1{,}000{,}000$
                  vs $2000^1 = 2{,}000$. So $1000^2 > 2000$, meaning $1000^{2000} > 2000^{1000}$.`}
                </p>
              </details>
            </div>

            <h2>Comparison Problems</h2>

            <p>{`Compare two expressions without computing either one in full.`}</p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">THREE MOVES THAT COVER MOST CASES</span>
              <ul className="lrn-list">
                <li>{`Rewrite both sides in the same form, e.g. $1 - \\frac{1}{n+1}$.`}</li>
                <li>{`Cross-multiply and compare integer products.`}</li>
                <li>{`Raise both sides to a common power (the same positive power preserves direction).`}</li>
              </ul>
              <p>{`Each move turns a hard comparison into an easy one.`}</p>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Compare $\\frac{10001}{10002}$ and $\\frac{100001}{100002}$`}</span>
                <p className="lrn-step-content">
                  {`Both fractions have the form $1 - \\frac{1}{n+1}$. For the first, $n = 10001$;
                  for the second, $n = 100001$. A larger $n$ gives a smaller $\\frac{1}{n+1}$,
                  so a larger $1 - \\frac{1}{n+1}$.`}
                </p>
                <p className="lrn-step-content">
                  {`So $\\frac{100001}{100002} > \\frac{10001}{10002}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Compare $\\frac{12345}{54321}$ and $\\frac{12346}{54322}$`}</span>
                <p className="lrn-step-content">
                  {`Cross-multiply: $12346 \\times 54321$ vs $12345 \\times 54322$.`}
                </p>
                <p className="lrn-step-content">
                  {`Difference: $12346 \\times 54321 - 12345 \\times 54322 = 12346 \\times 54321 -
                  12345 \\times 54321 - 12345 = 54321 - 12345 = 41976 > 0$.`}
                </p>
                <p className="lrn-step-content">
                  {`So $\\frac{12346}{54322} > \\frac{12345}{54321}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`5% of 7 billion vs 7% of 5 billion`}</span>
                <p className="lrn-step-content">
                  {`$5\\% \\times 7{,}000{,}000{,}000 = 0.05 \\times 7 \\times 10^9 = 0.35 \\times 10^9$.`}
                </p>
                <p className="lrn-step-content">
                  {`$7\\% \\times 5{,}000{,}000{,}000 = 0.07 \\times 5 \\times 10^9 = 0.35 \\times 10^9$.`}
                </p>
                <p className="lrn-step-content">
                  {`They are equal. Both equal $\\frac{5 \\times 7}{100} \\times 10^9$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Which is bigger: $(1+\\frac{1}{10})^{10}$ or $(1+\\frac{1}{11})^{11}$?`}</span>
                <p className="lrn-step-content">
                  {`Apply AM-GM to 11 numbers: ten copies of $(1+\\frac{1}{10})$ and one copy of 1.
                  $\\sqrt[11]{(1+\\frac{1}{10})^{10} \\cdot 1} \\leq \\frac{10(1+\\frac{1}{10})+1}{11} = \\frac{11+1}{11} = 1+\\frac{1}{11}$.`}
                </p>
                <p className="lrn-step-content">
                  {`So $(1+\\frac{1}{10})^{10} < (1+\\frac{1}{11})^{11}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Cut $\\frac{1}{2}$ m from a $\\frac{2}{3}$ m string without a meter stick`}</span>
                <p className="lrn-step-content">
                  {`Ask what fraction of the string you want: $\\frac{\\frac{1}{2}}{\\frac{2}{3}} = \\frac{3}{4}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Fold the string into four equal parts. Each part is $\\frac{2}{3} \\times \\frac{1}{4} = \\frac{1}{6}$ m.
                  Cut off one part (one-quarter) and keep three parts: $3 \\times \\frac{1}{6} = \\frac{1}{2}$ m. ✓`}
                </p>
              </div>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Stick cut into 20 pieces by 7 red and 13 green marks`}</span>
                <p className="lrn-step-content">
                  {`A stick of length $1$ is divided into seven equal segments by red marks and into
                  thirteen equal segments by green marks. The red marks sit at $\\frac{k}{7}$ for $k = 1, \\ldots, 6$
                  (six interior marks). The green marks sit at $\\frac{j}{13}$ for $j = 1, \\ldots, 12$
                  (twelve interior marks). Cut the stick into $20$ equal pieces of length $\\frac{1}{20}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Claim: every interior piece contains exactly one mark.`}
                </p>
                <p className="lrn-step-content">
                  {`Two same-colour marks cannot share a piece: their gap is $\\frac{1}{7}$ or $\\frac{1}{13}$,
                  both larger than the piece length $\\frac{1}{20}$.`}
                </p>
                <p className="lrn-step-content">
                  {`A red mark $\\frac{k}{7}$ and a green mark $\\frac{j}{13}$ cannot share a piece either.
                  Their mediant $\\frac{k+j}{7+13} = \\frac{k+j}{20}$ lies strictly between them and is a
                  cut point of the $20$-piece division. So a cut point separates the two marks.`}
                </p>
                <p className="lrn-step-content">
                  {`Eighteen marks fit into eighteen interior pieces, one per piece. The two end pieces are mark-free.`}
                </p>
              </div>
            </div>
          </>
        ]
      },

      // ─── PRACTICE CARDS ──────────────────────────────────────────────────────
      practice: [
        // Fractions
        {
          q: 'Which is larger: $\\frac{1}{3}$ or $\\frac{2}{7}$? Show your method.',
          a: '$\\frac{1}{3}$ is larger. Rewrite $\\frac{1}{3} = \\frac{2}{6}$. Now compare $\\frac{2}{6}$ vs $\\frac{2}{7}$. Equal numerators, so compare denominators: 6 < 7 means $\\frac{2}{6} > \\frac{2}{7}$. Therefore $\\frac{1}{3} > \\frac{2}{7}$.'
        },
        {
          q: 'Two fractions $\\frac{a}{b}$ and $\\frac{c}{d}$ are equal. What algebraic condition must hold?',
          a: '$ad = bc$. This follows from multiplying both sides of $\\frac{a}{b} = \\frac{c}{d}$ by $bd$. It works in both directions: if $ad = bc$ then $\\frac{a}{b} = \\frac{c}{d}$.'
        },
        // Transfer: fractions
        {
          q: 'A shop sells orange juice at $\\frac{3}{5}$ of a litre for £2.40 and apple juice at $\\frac{5}{8}$ of a litre for £2.40. Which gives more juice per pound? Use the common denominator method.',
          a: 'Compare $\\frac{3}{5}$ and $\\frac{5}{8}$. Common denominator 40: $\\frac{3}{5} = \\frac{24}{40}$, $\\frac{5}{8} = \\frac{25}{40}$. Apple juice gives more per pound ($\\frac{25}{40} > \\frac{24}{40}$).'
        },
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
        // Transfer: scientific notation
        {
          q: 'The speed of light is $3 \\times 10^8$ m/s. Light takes about 8 minutes to reach Earth from the Sun. How far away is the Sun in metres? (8 minutes = 480 seconds)',
          a: 'Distance $= 3 \\times 10^8 \\times 480 = 3 \\times 480 \\times 10^8 = 1440 \\times 10^8 = 1.44 \\times 10^{11}$ m. The product rule for powers is not needed here just multiply the coefficients and keep the power.'
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
        // Transfer: exponent laws
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
          a: 'By convention we only take roots of non-negative numbers, and only the non-negative root. This avoids splitting every proof into separate "even $n$" and "odd $n$" cases. The cube root of a negative number can be defined, but you handle it elsewhere.'
        },
        {
          q: 'Prove $\\sqrt[6]{a} = \\sqrt{\\sqrt[3]{a}}$ for $a \\geq 0$.',
          a: 'Let $y = \\sqrt{\\sqrt[3]{a}}$. Then $y^2 = \\sqrt[3]{a}$ and $(y^2)^3 = a$, so $y^6 = a$. The non-negative number whose $6$th power equals $a$ is $\\sqrt[6]{a}$, so $y = \\sqrt[6]{a}$.'
        },
        // Fractional exponents
        {
          q: 'What does $a^{\\tfrac{1}{3}}$ mean? Why is this the natural definition?',
          a: '$a^{\\tfrac{1}{3}} = \\sqrt[3]{a}$. Force $(a^{\\tfrac{1}{3}})^3 = a^{(\\tfrac{1}{3}) \\cdot 3} = a^1 = a$, so $a^{\\tfrac{1}{3}}$ must be the number whose cube is $a$ the cube root.'
        },
        {
          q: 'Compute $8^{\\tfrac{2}{3}}$.',
          a: '$4$. By definition $8^{\\tfrac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$. Step 1: take the cube root of 8 to get 2. Step 2: square the result to get 4.'
        },
        {
          q: 'Prove $a^{\\tfrac{2}{3}} = a^{\\tfrac{10}{15}}$ for $a \\geq 0$.',
          a: 'Both expressions, when raised to the 15th power, give $a^{10}$. Since both are non-negative and have the same 15th power, they are equal. This shows reducing $\\frac{m}{n}$ does not change $a^{\\tfrac{m}{n}}$.'
        },
        // Transfer: fractional exponents
        {
          q: 'A bacteria culture multiplies by a factor of $N$ over one hour. Assume the growth is steady (same factor per unit of time). What factor does it multiply by over $\\frac{2}{3}$ of an hour?',
          a: '$N^{\\tfrac{2}{3}}$. If the hourly factor is $N$, then in time $t$ the factor is $N^t$ the only function that makes "factor over time $s + t$ equals factor over $s$ times factor over $t$" hold. At $t = \\frac{2}{3}$ the factor is $N^{\\tfrac{2}{3}} = (\\sqrt[3]{N})^2$.'
        },
        // Elaborate: conventions
        {
          q: 'A student says: "I proved $a^0 = 1$ by simplifying $\\frac{a^3}{a^3} = 1$." Is this a proof, or is it circular? Explain.',
          a: 'It is circular unless you have already defined $\\frac{a^m}{a^n} = a^{m-n}$. That quotient rule itself requires knowing what $a^0$ means. The honest answer: $a^0 = 1$ is a convention chosen to make $a^m \\cdot a^n = a^{m+n}$ hold for all integers. We cannot prove it from repeated multiplication alone.'
        },
        // Inequalities: bounding
        {
          q: 'Prove that $\\frac{1}{101} + \\frac{1}{102} + \\cdots + \\frac{1}{200} > \\frac{1}{2}$.',
          a: 'Each of the 100 terms is at least $\\frac{1}{200}$. So the sum $\\geq 100 \\times \\frac{1}{200} = \\frac{1}{2}$. The sum strictly exceeds $\\frac{1}{2}$ because most terms are strictly larger than $\\frac{1}{200}$.'
        },
        {
          q: 'Prove $(1.01)^{100} \\geq 2$ using the simplest method.',
          a: '$(1.01)^{100} = (1+0.01)^{100} \\geq 1 + 100 \\times 0.01 = 2$. We keep only the constant term (1) and the linear term ($\\binom{100}{1} \\times 0.01 = 1$). All remaining terms in the expansion are positive.'
        },
        {
          q: 'Prove $1 + \\frac{1}{4} + \\frac{1}{9} + \\cdots + \\frac{1}{100^2} < 2$ using telescoping.',
          a: 'For $k \\geq 2$: $\\frac{1}{k^2} < \\frac{1}{k-1} - \\frac{1}{k}$. Sum from $k=2$ to $100$: $\\sum_{k=2}^{100} \\frac{1}{k^2} < 1 - \\frac{1}{100} < 1$. Add the first term $\\frac{1}{1} = 1$: total $< 2$. ✓'
        },
        // AM-GM
        {
          q: 'State the AM-GM inequality for two numbers and give its proof in two lines.',
          a: '$\\sqrt{ab} \\leq \\frac{a+b}{2}$ for $a, b \\geq 0$, with equality iff $a = b$. Proof: $(\\sqrt{a}-\\sqrt{b})^2 \\geq 0$. Expanding gives $a - 2\\sqrt{ab} + b \\geq 0$, so $\\frac{a+b}{2} \\geq \\sqrt{ab}$.'
        },
        {
          q: 'Two positive numbers multiply to 36. What is the smallest possible sum?',
          a: '$12$. By AM-GM, $\\frac{a+b}{2} \\geq \\sqrt{ab} = \\sqrt{36} = 6$, so $a+b \\geq 12$. Equality when $a = b = 6$. The pair $(6, 6)$ achieves the minimum.'
        },
        {
          q: 'You have 100 m of fence for a rectangular garden. What shape maximizes the area?',
          a: 'A square. Perimeter $= 2(a+b) = 100$, so $a+b = 50$. Area $= ab \\leq \\left(\\frac{a+b}{2}\\right)^2 = 625$ m². Equality when $a = b = 25$ m.'
        },
        // Transfer: AM-GM
        {
          q: 'Find the maximum value of $ab$ given $a + 2b = 6$ with $a, b \\geq 0$.',
          a: 'Apply AM-GM to $a$ and $2b$: $\\frac{a + 2b}{2} \\geq \\sqrt{a \\cdot 2b}$, so $3 \\geq \\sqrt{2ab}$, giving $ab \\leq \\frac{9}{2}$. Equality when $a = 2b$, i.e. $a = 3, b = \\frac{3}{2}$.'
        },
        {
          q: 'Prove that $\\frac{a_1}{a_2} + \\frac{a_2}{a_3} + \\frac{a_3}{a_1} \\geq 3$ for positive $a_1, a_2, a_3$.',
          a: 'Apply AM-GM to three positive terms: $\\frac{a_1}{a_2} + \\frac{a_2}{a_3} + \\frac{a_3}{a_1} \\geq 3 \\sqrt[3]{\\frac{a_1}{a_2} \\cdot \\frac{a_2}{a_3} \\cdot \\frac{a_3}{a_1}} = 3\\sqrt[3]{1} = 3$. The product telescopes to 1.'
        },
        // AM-GM for n numbers
        {
          q: 'State AM-GM for $n$ numbers.',
          a: '$\\sqrt[n]{a_1 a_2 \\cdots a_n} \\leq \\frac{a_1 + \\cdots + a_n}{n}$ for non-negative $a_i$. Equality holds iff all $a_i$ are equal. The geometric mean never exceeds the arithmetic mean.'
        },
        {
          q: 'How does the balancing proof of AM-GM for $n = 4$ work?',
          a: '(1) Replace $(a_1, a_2)$ with $(m, m)$ where $m = \\frac{a_1+a_2}{2}$. Sum unchanged; product does not decrease by AM-GM for 2. (2) Repeat for $(a_3, a_4)$. After two rounds, all four numbers are equal, and the product has only increased. So the maximum product equals the product when all are equal.'
        },
        // Elaborate: AM-GM gap
        {
          q: 'The "replacement" proof of AM-GM for general $n$ assumes the maximum exists. Why is this an issue, and how is it addressed?',
          a: 'The argument says: if the product is maximum but not all values are equal, replacing two unequal values by their AM increases the product contradiction. But this only works if a maximum actually exists. Existence follows from the fact that the product is a continuous function on a closed bounded set. Proving this rigorously requires calculus (extreme value theorem).'
        },
        // QM and HM
        {
          q: 'Prove QM $\\geq$ AM for two numbers $a$ and $b$.',
          a: 'QM $= \\sqrt{\\frac{a^2+b^2}{2}}$, AM $= \\frac{a+b}{2}$. Squaring both: need $\\frac{a^2+b^2}{2} \\geq \\frac{(a+b)^2}{4}$. Cross-multiply by 4: $2a^2 + 2b^2 \\geq a^2 + 2ab + b^2$, i.e. $(a-b)^2 \\geq 0$. ✓'
        },
        {
          q: 'You drive 60 km at 30 km/h and then 60 km at 90 km/h. What is your average speed for the whole trip?',
          a: '$45$ km/h. Total time $= \\frac{60}{30} + \\frac{60}{90} = 2 + \\frac{2}{3} = \\frac{8}{3}$ hours. Total distance $= 120$ km. Average speed $= \\frac{120}{\\frac{8}{3}} = 45$ km/h. This is the harmonic mean: $HM = \\frac{2 \\times 30 \\times 90}{30 + 90} = \\frac{5400}{120} = 45$.'
        },
        {
          q: 'Write the four-mean chain for $a = 4$ and $b = 16$.',
          a: 'HM $= \\frac{2 \\times 4 \\times 16}{4+16} = \\frac{128}{20} = 6.4$. GM $= \\sqrt{4 \\times 16} = 8$. AM $= \\frac{4+16}{2} = 10$. QM $= \\sqrt{\\frac{16+256}{2}} = \\sqrt{136} \\approx 11.7$. Chain: $6.4 \\leq 8 \\leq 10 \\leq 11.7$.'
        },
        // Transfer: means
        {
          q: 'A rectangle has sides $a = 3$ and $b = 12$. Compare the side of a square with the same perimeter vs the same area.',
          a: 'Same perimeter: side $= AM = \\frac{3+12}{2} = 7.5$. Same area: side $= GM = \\sqrt{36} = 6$. AM side $>$ GM side (7.5 $>$ 6). This illustrates AM-GM: the equal-sided shape maximizes area for a given perimeter.'
        },
        // Cauchy-Schwarz
        {
          q: 'State the Cauchy-Schwarz inequality.',
          a: '$(p_1 q_1 + \\cdots + p_n q_n)^2 \\leq (p_1^2 + \\cdots + p_n^2)(q_1^2 + \\cdots + q_n^2)$. In words: the square of the dot product is at most the product of the squared lengths.'
        },
        // Predict
        {
          q: '[Predict] Before computing: is $(1 + \\frac{1}{10})^{10}$ larger or smaller than $(1 + \\frac{1}{11})^{11}$? Give your reasoning.',
          a: '$(1+\\frac{1}{11})^{11}$ is larger. Intuitively, adding one more compounding period (with a slightly smaller rate) still increases the total. Formally, AM-GM on ten copies of $(1+\\frac{1}{10})$ and one copy of 1 gives $(1+\\frac{1}{10})^{10} < (1+\\frac{1}{11})^{11}$.'
        },
        // Comparison problems
        {
          q: 'Which is bigger: $1000^{2000}$ or $2000^{1000}$?',
          a: '$1000^{2000}$ is bigger. Take both to the power $\\frac{1}{1000}$: compare $1000^2 = 1{,}000{,}000$ vs $2000^1 = 2{,}000$. Since $10^6 > 2000$, we get $1000^{2000} > 2000^{1000}$.'
        },
        // Self-explain
        {
          q: '[Self-explain] In the proof that HM $\\leq$ GM, why does the proof use the AM-GM inequality on the reciprocals $\\frac{1}{a}$ and $\\frac{1}{b}$?',
          a: '$\\frac{1}{HM} = AM(\\frac{1}{a}, \\frac{1}{b})$ by definition of harmonic mean. $AM \\geq GM$, so $AM(\\frac{1}{a}, \\frac{1}{b}) \\geq GM(\\frac{1}{a}, \\frac{1}{b}) = \\frac{1}{GM(a,b)}$. Therefore $\\frac{1}{HM} \\geq \\frac{1}{GM}$, which flips to $HM \\leq GM$. The key step: applying AM-GM to reciprocals and then taking reciprocals reverses the inequality.'
        }
      ],

      // ─── REFERENCE ───────────────────────────────────────────────────────────
      reference: {
        category: 'Quick Reference',
        title: 'Exponents, Roots and Radicals',
        sections: [
          <>
            <h2>Fractions</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Rule</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Equality</td>
                  <td>{`$\\frac{a}{b} = \\frac{c}{d} \\iff ad = bc$`}</td>
                  <td>Check if two fractions are equal</td>
                </tr>
                <tr>
                  <td>Common denominator</td>
                  <td>{`$\\frac{a}{b} = \\frac{ad}{bd}$`}</td>
                  <td>Compare or add fractions</td>
                </tr>
                <tr>
                  <td>Common numerator trick</td>
                  <td>{`Scale one fraction so numerators match, then compare denominators`}</td>
                  <td>Faster comparison when one numerator divides the other</td>
                </tr>
                <tr>
                  <td>Neighbor fractions</td>
                  <td>{`$|ad - bc| = 1$`}</td>
                  <td>Farey sequences, mediants</td>
                </tr>
              </tbody>
            </table>

            <h2>Integer Exponent Laws</h2>

            <p className="lrn-eq lrn-eq-hero">{`$$a^m \\cdot a^n = a^{m+n}$$`}</p>
            <p className="lrn-eq">{`$$(a^m)^n = a^{mn} \\qquad \\frac{a^m}{a^n} = a^{m-n} \\qquad (ab)^n = a^n b^n$$`}</p>

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

            <h2>The Mean Chain</h2>

            <p className="lrn-eq lrn-eq-hero">{`$$\\text{HM} \\leq \\text{GM} \\leq \\text{AM} \\leq \\text{QM}$$`}</p>

            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Mean</th>
                  <th>{`Formula ($a, b > 0$)`}</th>
                  <th>Use when</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Harmonic (HM)</td>
                  <td>{`$\\dfrac{2ab}{a+b}$`}</td>
                  <td>Averaging rates or speeds</td>
                </tr>
                <tr>
                  <td>Geometric (GM)</td>
                  <td>{`$\\sqrt{ab}$`}</td>
                  <td>Growth, scaling, geometric progressions</td>
                </tr>
                <tr>
                  <td>Arithmetic (AM)</td>
                  <td>{`$\\dfrac{a+b}{2}$`}</td>
                  <td>Center, midpoint, equal-weight average</td>
                </tr>
                <tr>
                  <td>Quadratic (QM)</td>
                  <td>{`$\\sqrt{\\dfrac{a^2+b^2}{2}}$`}</td>
                  <td>RMS (energy, signals), spread</td>
                </tr>
              </tbody>
            </table>

            <h2>AM-GM Inequality</h2>

            <p className="lrn-eq lrn-eq-hero">{`$$\\sqrt[n]{a_1 \\cdots a_n} \\leq \\frac{a_1 + \\cdots + a_n}{n}$$`}</p>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">When to use</span>
              <p>{`Maximize a product with a fixed sum, or minimize a sum with a fixed product. Equality when all values are equal.`}</p>
            </div>

            <h2>Cauchy-Schwarz Inequality</h2>

            <p className="lrn-eq lrn-eq-hero">{`$$(\\sum p_i q_i)^2 \\leq (\\sum p_i^2)(\\sum q_i^2)$$`}</p>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">When to use</span>
              <p>{`Bound a dot product; prove $\\sum \\geq n^2$ inequalities; derive HM $\\leq$ GM.`}</p>
            </div>

            <h2>Key Inequality Techniques</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Technique</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bounding each term</td>
                  <td>Sum of similar fractions bound each by largest or smallest</td>
                </tr>
                <tr>
                  <td>Telescoping</td>
                  <td>{`Sum collapses to two terms; bound $\\frac{1}{k^2}$ by $\\frac{1}{k-1} - \\frac{1}{k}$`}</td>
                </tr>
                <tr>
                  <td>Expansion bound</td>
                  <td>{`$(1+x)^n \\geq 1 + nx$ for small $x \\geq 0$`}</td>
                </tr>
                <tr>
                  <td>{`Reduce to $(x-y)^2 \\geq 0$`}</td>
                  <td>Most mean inequalities (AM-GM, QM-AM, HM-GM)</td>
                </tr>
              </tbody>
            </table>
          </>
        ]
      },

      customCss:
        '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
    }),
    []
  )
}

export default function ExponentsRootsAndRadicals() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
