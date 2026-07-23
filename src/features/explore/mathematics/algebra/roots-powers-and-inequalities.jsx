import 'katex/dist/katex.min.css'
import { useMemo } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { AMGMRectViz } from '../../../../components/viz'

function useConfig() {
  return useMemo(
    () => ({
      cssPrefix: 'rpi',
      documentTitle: 'Surds, Inequalities and Means. AETHER',
      learning: {
        groupTitle: 'Equations and Inequalities',
        category: 'mathematics',
        title: 'Surds, Inequalities and Means',
        subtitle: 'Surds and rationalising, solving inequalities, and the basic AM-GM inequality.',
        sections: [
          // SECTION 0: Bridge + Comparing roots
          <>
            <h2>Putting Powers to Work</h2>
            <p>
              {`You now own the laws of powers, roots, and rational exponents. This part puts them
              to work. You will tidy up roots into surds, learn to solve inequalities, and meet the
              inequality that compares an average with a product.`}
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Which is larger, $\\sqrt{2}$ or $\\sqrt[3]{3}$? Write your guess, then check below.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$\\sqrt{2} = 2^{\\tfrac{1}{2}}$ and $\\sqrt[3]{3} = 3^{\\tfrac{1}{3}}$.
                  Raise both to the power 6: $2^3 = 8$ vs $3^2 = 9$.
                  Since $8 < 9$, we get $\\sqrt{2} < \\sqrt[3]{3}$.`}
                </p>
              </details>
            </div>

            <h2>Comparing Roots</h2>

            <p>
              {`To compare two roots, raise both to a common power so they turn into ordinary integers.
              One fact makes this safe: for $x \\geq 0$, raising to a fixed positive power keeps order.
              That is, if $0 \\leq a < b$ then $a^k < b^k$. So you can raise both sides of an inequality
              to the same power without flipping it.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Which is bigger: $\\sqrt{2}$ or $\\sqrt[3]{3}$?`}</span>
                <p className="lrn-step-content">
                  {`Raise both to the power 6 (the LCM of 2 and 3).
                  $(\\sqrt{2})^6 = 2^3 = 8$. $(\\sqrt[3]{3})^6 = 3^2 = 9$.
                  Since $8 < 9$, we get $\\sqrt{2} < \\sqrt[3]{3}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Which is bigger: $\\sqrt[3]{3}$ or $\\sqrt[4]{4}$?`}</span>
                <p className="lrn-step-content">
                  {`Raise both to the power 12 (LCM of 3 and 4).
                  $(\\sqrt[3]{3})^{12} = 3^4 = 81$. $(\\sqrt[4]{4})^{12} = 4^3 = 64$.
                  So $\\sqrt[3]{3} > \\sqrt[4]{4}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">You can now compare any two roots</span>
              <p>
                {`Pick the lowest common multiple of the two root indices, raise both numbers to that
                power, and compare the whole numbers you get. The order of the originals matches the
                order of the powers.`}
              </p>
            </div>
          </>,

          // SECTION 1: Surds (NEW)
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`The fraction $\\frac{1}{\\sqrt{2}}$ has a root on the bottom. Can you rewrite it so the
                bottom is a whole number, without changing its value?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Multiply top and bottom by $\\sqrt{2}$: $\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{\\sqrt{2}\\cdot\\sqrt{2}}
                  = \\frac{\\sqrt{2}}{2}$. The value is the same (about $0.707$), but the bottom is now rational.`}
                </p>
              </details>
            </div>

            <h2>Surds</h2>

            <p>
              {`A root that does not simplify to a whole number or a simple fraction is called a surd.
              For example $\\sqrt{2}$, $\\sqrt{3}$, and $\\sqrt[3]{5}$ are surds, but $\\sqrt{9} = 3$ is not.
              Surds are exact: $\\sqrt{2}$ is the precise length, while $1.41421$ is only a rounded copy.`}
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Surd</span>
              <div className="lrn-definition-desc">
                <p>{`A surd is a root of a whole number that is itself irrational (it cannot be written as
                an exact fraction). We keep surds in root form to stay exact.`}</p>
              </div>
            </div>

            <h3>Simplifying a Surd</h3>

            <p>
              {`A surd is in simplest form when no square factor (or $n$th-power factor) is left under
              the root. Pull out the largest such factor first.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Simplify $\\sqrt{50}$`}</span>
                <p className="lrn-step-content">
                  {`$50 = 25 \\cdot 2 = 5^2 \\cdot 2$. Pull out the square: $\\sqrt{50} = \\sqrt{5^2}\\cdot\\sqrt{2} = 5\\sqrt{2}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Simplify $\\sqrt{72}$`}</span>
                <p className="lrn-step-content">
                  {`$72 = 36 \\cdot 2 = 6^2 \\cdot 2$. So $\\sqrt{72} = 6\\sqrt{2}$.`}
                </p>
              </div>
            </div>

            <h3>Adding and Subtracting Like Surds</h3>

            <p>
              {`Two surds are "like" when they have the same number under the root, such as $\\sqrt{3}$
              and $\\sqrt{3}$. You add like surds the way you add like terms: keep the surd, add the
              counts in front. Unlike surds cannot be combined.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Add like surds: $2\\sqrt{3} + 5\\sqrt{3}$`}</span>
                <p className="lrn-step-content">
                  {`Both terms carry $\\sqrt{3}$. Add the numbers in front: $2 + 5 = 7$. So
                  $2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Simplify first, then combine: $\\sqrt{8} + \\sqrt{18}$`}</span>
                <p className="lrn-step-content">
                  {`$\\sqrt{8} = 2\\sqrt{2}$ and $\\sqrt{18} = 3\\sqrt{2}$. Now they are like surds:
                  $2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Unlike surds stay apart: $\\sqrt{2} + \\sqrt{3}$`}</span>
                <p className="lrn-step-content">
                  {`The numbers under the roots differ, so this cannot be simplified. It stays
                  $\\sqrt{2} + \\sqrt{3}$.`}
                </p>
              </div>
            </div>

            <h3>Multiplying Surds</h3>

            <p>{`Multiply surds with the root product rule: $\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{ab}$.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Multiply: $\\sqrt{2}\\cdot\\sqrt{3}$`}</span>
                <p className="lrn-step-content">{`$\\sqrt{2}\\cdot\\sqrt{3} = \\sqrt{6}$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Multiply and simplify: $\\sqrt{6}\\cdot\\sqrt{2}$`}</span>
                <p className="lrn-step-content">
                  {`$\\sqrt{6}\\cdot\\sqrt{2} = \\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`A surd times itself: $\\sqrt{5}\\cdot\\sqrt{5}$`}</span>
                <p className="lrn-step-content">{`$\\sqrt{5}\\cdot\\sqrt{5} = \\sqrt{25} = 5$. A surd times itself gives the number inside.`}</p>
              </div>
            </div>

            <h3>Rationalising the Denominator</h3>

            <p>
              {`A fraction with a surd on the bottom is hard to read and compare. Rationalising means
              rewriting it so the bottom is a whole number, without changing the value. The key fact:
              a surd times itself gives a whole number.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Rationalise $\\frac{1}{\\sqrt{2}}$`}</span>
                <p className="lrn-step-content">
                  {`Multiply top and bottom by $\\sqrt{2}$:
                  $\\frac{1}{\\sqrt{2}} = \\frac{1 \\cdot \\sqrt{2}}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.
                  The bottom is now the whole number 2.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Rationalise $\\frac{6}{\\sqrt{3}}$`}</span>
                <p className="lrn-step-content">
                  {`Multiply top and bottom by $\\sqrt{3}$:
                  $\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">
                When the bottom has two terms: use the conjugate
              </span>
              <p>
                {`If the bottom is like $\\sqrt{3} - \\sqrt{2}$, multiply top and bottom by its conjugate
                $\\sqrt{3} + \\sqrt{2}$ (the same two terms with the sign flipped). This uses the difference
                of squares $(x - y)(x + y) = x^2 - y^2$ to clear both roots at once.`}
              </p>
              <p>
                {`Example: $\\frac{1}{\\sqrt{3} - \\sqrt{2}} = \\frac{\\sqrt{3} + \\sqrt{2}}{(\\sqrt{3})^2 - (\\sqrt{2})^2}
                = \\frac{\\sqrt{3} + \\sqrt{2}}{3 - 2} = \\sqrt{3} + \\sqrt{2}$.`}
              </p>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Why does multiplying by the conjugate remove the surds from the bottom?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`The conjugate turns the bottom into a difference of squares: $(\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b})
                  = a - b$. Squaring each surd removes its root, leaving whole numbers.`}
                </p>
              </details>
            </div>
          </>,

          // SECTION 2: Solving Inequalities (NEW) + Bounding
          <>
            <h2>Properties of Inequalities</h2>

            <p>
              {`Inequalities follow rules that let you transform them safely, the same way you do with
              equations. But one rule is different: multiplying or dividing by a negative flips the
              direction.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Transitivity</span>
                <p className="lrn-step-content lrn-eq">{`$$\\text{If } a < b \\text{ and } b < c \\text{ then } a < c$$`}</p>
                <p className="lrn-step-content">{`Worked: $2 < 5$ and $5 < 8$ implies $2 < 8$. ✓`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Add the same to both sides</span>
                <p className="lrn-step-content lrn-eq">{`$$\\text{If } a < b \\text{ then } a + c < b + c$$`}</p>
                <p className="lrn-step-content">{`Direction stays the same. Worked: $3 < 7$, add 2: $5 < 9$. ✓`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Multiply by a positive</span>
                <p className="lrn-step-content lrn-eq">{`$$\\text{If } a < b \\text{ and } c > 0 \\text{ then } ac < bc$$`}</p>
                <p className="lrn-step-content">{`Direction stays the same. Worked: $2 < 5$, multiply by 3: $6 < 15$. ✓`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Multiply by a negative</span>
                <p className="lrn-step-content lrn-eq">{`$$\\text{If } a < b \\text{ and } c < 0 \\text{ then } ac > bc$$`}</p>
                <p className="lrn-step-content">{`Direction flips. Worked: $2 < 5$, multiply by $-3$: $-6 > -15$. ✓`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Take reciprocals (same sign)</span>
                <p className="lrn-step-content lrn-eq">{`$$\\text{If } 0 < a < b \\text{ then } \\frac{1}{a} > \\frac{1}{b}$$`}</p>
                <p className="lrn-step-content">{`Direction flips. Worked: $2 < 5$ implies $\\frac{1}{2} > \\frac{1}{5}$. ✓`}</p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY DOES NEGATION FLIP THE DIRECTION?</span>
              <p>
                {`The number line has a natural order: smaller numbers sit to the left. Multiplying by
                $-1$ reflects the line around zero. What was to the left of another point is now to the
                right. So the inequality flips.`}
              </p>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Solve $3x - 5 < 7$ for $x$. Then think: what changes if you have to divide by a
                negative number?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Add 5: $3x < 12$. Divide by 3: $x < 4$. Dividing by a positive number keeps the
                  direction. Dividing by a negative number flips it (by the property above).`}
                </p>
              </details>
            </div>

            <h2>Solving Inequalities</h2>

            <p>
              {`Solving an inequality works much like solving an equation, with one twist:
              multiplying or dividing by a negative number flips the direction. Use the properties
              above to transform inequalities step by step. The full toolkit for solving linear
              inequalities, graphing solution sets, combining conditions, the worked proof, lives in `}
              <strong>Graphing Lines and Linear Inequalities § Inequality Manipulation</strong>.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Solve $3x - 5 < 7$`}</span>
                <p className="lrn-step-content">{`Add 5 to both sides: $3x < 12$.`}</p>
                <p className="lrn-step-content">{`Divide by 3 (positive, so keep the direction): $x < 4$.`}</p>
              </div>
            </div>

            <h2>Bounding a Sum</h2>

            <p>
              {`Sometimes you cannot compute a sum exactly, but you can trap it between two values.
              If every one of $N$ terms sits between $L$ and $U$, then the whole sum sits between $NL$
              and $NU$. Replacing each term by a simpler bound is the core move.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $\\frac{1}{2} < \\frac{1}{101} + \\frac{1}{102} + \\cdots + \\frac{1}{200} < 1$`}</span>
                <p className="lrn-step-content">
                  {`Lower bound: each of the 100 terms is at least $\\frac{1}{200}$,
                  so the sum $> 100 \\cdot \\frac{1}{200} = \\frac{1}{2}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Upper bound: each of the 100 terms is at most $\\frac{1}{101}$,
                  so the sum $< 100 \\cdot \\frac{1}{101} < 1$.`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Why is each term $\\frac{1}{k}$ for $101 \\leq k \\leq 200$ at least $\\frac{1}{200}$?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`For $101 \\leq k \\leq 200$, we have $k \\leq 200$. A larger denominator makes a smaller
                  fraction, so $\\frac{1}{k} \\geq \\frac{1}{200}$. The largest term is $\\frac{1}{101}$.`}
                </p>
              </details>
            </div>

            <h3>Telescoping</h3>

            <p>{`When a sum collapses to just its two ends, use telescoping.`}</p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $1 + \\frac{1}{4} + \\frac{1}{9} + \\cdots + \\frac{1}{100^2} < 2$`}</span>
                <p className="lrn-step-content">
                  {`For $k \\geq 2$: $\\frac{1}{k^2} < \\frac{1}{k(k-1)} = \\frac{1}{k-1} - \\frac{1}{k}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Adding from $k = 2$ to $100$, the middle terms cancel in pairs:
                  $\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots +
                  \\left(\\frac{1}{99} - \\frac{1}{100}\\right) = 1 - \\frac{1}{100} < 1$.`}
                </p>
                <p className="lrn-step-content">{`Add the first term (which is 1): total $< 1 + 1 = 2$. ✓`}</p>
              </div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">What telescoping gives you</span>
              <p>
                {`Whenever a term can be written as a difference $f(k-1) - f(k)$, the whole sum collapses
                to the first minus the last. You can then bound long sums in one line.`}
              </p>
            </div>
          </>,

          // SECTION 3: AM and GM
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`You have a rectangle with sides $a = 4$ and $b = 9$.
                The arithmetic mean of the sides is $\\frac{4+9}{2} = 6.5$. What is the geometric mean
                $\\sqrt{ab}$? Which is larger?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$\\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$. So AM $= 6.5 > 6 =$ GM.
                  The arithmetic mean is always at least as large.`}
                </p>
              </details>
            </div>

            <h2>Arithmetic and Geometric Means</h2>

            <p>
              {`Two numbers have two natural middles. The arithmetic mean is the additive middle: add
              and halve. The geometric mean is the multiplicative middle: multiply and root.`}
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Arithmetic Mean (AM)</span>
              <div className="lrn-definition-desc">
                <p>{`The arithmetic mean of $a$ and $b$ is $\\text{AM} = \\dfrac{a+b}{2}$.`}</p>
                <p>{`It is the midpoint of $a$ and $b$ on the number line.`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Geometric Mean (GM)</span>
              <div className="lrn-definition-desc">
                <p>{`The geometric mean of two non-negative numbers $a$ and $b$ is $\\text{GM} = \\sqrt{ab}$.`}</p>
                <p>{`The three numbers $a, \\sqrt{ab}, b$ form a geometric sequence: each is the one before
                times the same factor.`}</p>
              </div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Squares, rectangles, and the two means</span>
              <p>
                {`A square has the same perimeter as an $a \\times b$ rectangle when its side is the
                arithmetic mean $\\frac{a+b}{2}$. A square has the same area as the rectangle when its side
                is the geometric mean $\\sqrt{ab}$. Two ways to "equalise" a square to a rectangle, two
                different means.`}
              </p>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`If AM of $1$ and $a$ is $7$, find $a$.`}</span>
                <p className="lrn-step-content">{`$\\frac{1+a}{2} = 7$, so $1 + a = 14$, giving $a = 13$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`If GM of $1$ and $a$ is $7$, find $a$.`}</span>
                <p className="lrn-step-content">{`$\\sqrt{1 \\cdot a} = 7$, so $a = 49$.`}</p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the AM problem give $a = 13$ while the GM problem gives $a = 49$, even though
                both means equal 7?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`AM is the additive midpoint: $\\frac{1+a}{2} = 7$ means $1 + a = 14$, so $a = 13$.
                  GM is the multiplicative midpoint: $\\sqrt{a} = 7$ means $a = 49$. The additive middle
                  doubles the mean and subtracts; the multiplicative middle squares the mean and divides.`}
                </p>
              </details>
            </div>
          </>,

          // SECTION 4: AM-GM inequality + optimization
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Two non-negative numbers add up to 10. Which pair has the largest product:
                $(1, 9)$, $(2, 8)$, $(4, 6)$, or $(5, 5)$?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Products: $9$, $16$, $24$, $25$. Equal numbers give the largest product.
                  AM-GM tells you why: the product is at most $\\left(\\frac{a+b}{2}\\right)^2 = 25$, hit only
                  when $a = b$.`}
                </p>
              </details>
            </div>

            <h2>The AM-GM Inequality</h2>

            <p>
              {`The geometric mean of two non-negative numbers is never bigger than their arithmetic
              mean. Use it to maximise a product when the sum is fixed, or to minimise a sum when the
              product is fixed.`}
            </p>

            <div className="lrn-insight">
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\sqrt{ab} \\leq \\frac{a+b}{2} \\quad (a, b \\geq 0)$$`}</span>
              </div>
              <p>Equality holds if and only if {`$a = b$`}.</p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Algebraic Proof</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`For any real $a, b$: $(a - b)^2 \\geq 0$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Expand: $a^2 - 2ab + b^2 \\geq 0$, so $a^2 + b^2 \\geq 2ab$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Add $2ab$ to both sides: $(a + b)^2 \\geq 4ab$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Take square roots (both sides are non-negative): $a + b \\geq 2\\sqrt{ab}$, i.e.
                  $\\sqrt{ab} \\leq \\frac{a+b}{2}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">{`Equality holds when $(a-b)^2 = 0$, i.e. $a = b$. ✓`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`In Step 3, why does adding $2ab$ to $a^2 + b^2$ give $(a+b)^2$?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$a^2 + b^2 + 2ab = (a+b)^2$. This is the perfect-square formula read backwards.
                  Adding $2ab$ completes the square.`}
                </p>
              </details>
            </div>

            <h3>Geometric Picture</h3>

            <p>
              {`Place four $a \\times b$ rectangles inside an $(a+b) \\times (a+b)$ square. They cover area
              $4ab$, and the square has area $(a+b)^2$. Since the rectangles fit inside, $4ab \\leq (a+b)^2$.`}
            </p>

            <div className="lrn-graph">
              <AMGMRectViz />
              <p>{`Four $a \\times b$ rectangles fit inside an $(a+b)^2$ square, proving $4ab \\leq (a+b)^2$.`}</p>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">How much space is left over?</span>
              <p>
                {`Free space $= (a+b)^2 - 4ab = a^2 - 2ab + b^2 = (a-b)^2$. That is the same $(a-b)^2 \\geq 0$
                that drives the algebra. The gap in the picture is exactly the slack in the inequality.`}
              </p>
            </div>

            <h2>Optimization with AM-GM</h2>

            <p>
              {`AM-GM turns into an optimisation tool because equality is reached, not just approached.
              The product hits its top value exactly when the two numbers are equal.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Max product with fixed sum`}</span>
                <p className="lrn-step-content">
                  {`If $x + y = c$, then $\\sqrt{xy} \\leq \\frac{c}{2}$, so $xy \\leq \\frac{c^2}{4}$.
                  The most is $\\frac{c^2}{4}$, reached when $x = y = \\frac{c}{2}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Min sum with fixed product`}</span>
                <p className="lrn-step-content">
                  {`If $xy = c > 0$, then $\\frac{x+y}{2} \\geq \\sqrt{c}$, so $x + y \\geq 2\\sqrt{c}$.
                  The least is $2\\sqrt{c}$, reached when $x = y = \\sqrt{c}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Fence problem: maximum area</span>
                <p className="lrn-step-content">
                  {`You have 120 m of fence for a rectangle. Perimeter $2(x+y) = 120$, so $x + y = 60$.
                  Area $= xy \\leq \\left(\\frac{60}{2}\\right)^2 = 900$ m², reached when $x = y = 30$ m (a square).`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Fence along a river (one side free)</span>
                <p className="lrn-step-content">
                  {`The river covers one side, so you fence three sides: $x + 2y = 120$, where $x$ runs
                  along the water. Apply AM-GM to $x$ and $2y$, whose sum is 120:
                  $x \\cdot 2y \\leq \\left(\\frac{x + 2y}{2}\\right)^2 = 3600$, so $xy \\leq 1800$.`}
                </p>
                <p className="lrn-step-content">
                  {`Max area is 1800 m², reached when $x = 2y$, that is $x = 60$ m, $y = 30$ m.`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`In the river-fence problem, why apply AM-GM to $x$ and $2y$ rather than $x$ and $y$?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`AM-GM needs the sum of the two terms. The constraint gives $x + 2y = 120$, so using
                  $x$ and $2y$ makes that sum exactly 120. Their product is $x \\cdot 2y = 2xy$, and halving
                  gives the area $xy$.`}
                </p>
              </details>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">One idea, many uses</span>
              <p>
                {`This same idea also holds for more than two numbers: their average is never
                smaller than the size you get by multiplying them and taking the matching root.
                The two-number case you just proved is the one you will reach for most.`}
              </p>
            </div>
          </>
        ]
      },

      practice: [
        // Inequality properties
        {
          q: `State the rule for multiplying both sides of an inequality by a negative number.`,
          a: `If $a < b$ and $c < 0$, then $ac > bc$. The inequality direction flips. Example: $2 < 5$; multiply by $-3$ to get $-6 > -15$.`
        },
        {
          q: `If $0 < a < b$, what can you say about $\\frac{1}{a}$ and $\\frac{1}{b}$?`,
          a: `$\\frac{1}{a} > \\frac{1}{b}$. The direction flips when you take reciprocals of positive numbers. Example: $2 < 5$ implies $\\frac{1}{2} > \\frac{1}{5}$.`
        },
        {
          q: `State transitivity for inequalities.`,
          a: `If $a < b$ and $b < c$, then $a < c$. The direction is consistent through a chain. Example: $2 < 5$ and $5 < 8$ implies $2 < 8$.`
        },
        // Comparing roots
        {
          q: `Which is bigger: $\\sqrt{2}$ or $\\sqrt[3]{3}$? Justify with a calculation.`,
          a: `$\\sqrt[3]{3}$ is bigger. The LCM of 2 and 3 is 6. Raise both to the 6th power: $(\\sqrt{2})^6 = 2^3 = 8$ and $(\\sqrt[3]{3})^6 = 3^2 = 9$. Since $8 < 9$ and $x^6$ keeps order for $x \\geq 0$, $\\sqrt{2} < \\sqrt[3]{3}$.`
        },
        {
          q: `An engineer compares two beams: beam A is rated $\\sqrt[3]{27}$ kN, beam B is rated $\\sqrt{8}$ kN. Which is stronger?`,
          a: `Beam A. Directly: $\\sqrt[3]{27} = 3$ and $\\sqrt{8} \\approx 2.83$, so $3 > 2.83$. Or raise both to the 6th power: $27^2 = 729$ vs $8^3 = 512$. Since $729 > 512$, beam A is stronger.`
        },
        // Surds
        {
          q: `Simplify $\\sqrt{50}$.`,
          a: `$5\\sqrt{2}$. Factor $50 = 25 \\cdot 2 = 5^2 \\cdot 2$, then pull out the square: $\\sqrt{50} = 5\\sqrt{2}$.`
        },
        {
          q: `Simplify $\\sqrt{8} + \\sqrt{18}$.`,
          a: `$5\\sqrt{2}$. First simplify: $\\sqrt{8} = 2\\sqrt{2}$ and $\\sqrt{18} = 3\\sqrt{2}$. They are like surds, so add the numbers in front: $2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$.`
        },
        {
          q: `Multiply and simplify $\\sqrt{6}\\cdot\\sqrt{2}$.`,
          a: `$2\\sqrt{3}$. By the product rule $\\sqrt{6}\\cdot\\sqrt{2} = \\sqrt{12}$, and $\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$.`
        },
        {
          q: `Rationalise the denominator of $\\frac{1}{\\sqrt{2}}$.`,
          a: `$\\frac{\\sqrt{2}}{2}$. Multiply top and bottom by $\\sqrt{2}$: $\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. The value is unchanged but the bottom is now rational.`
        },
        {
          q: `Rationalise $\\frac{6}{\\sqrt{3}}$.`,
          a: `$2\\sqrt{3}$. Multiply top and bottom by $\\sqrt{3}$: $\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.`
        },
        {
          q: `Rationalise $\\frac{1}{\\sqrt{3} - \\sqrt{2}}$ using the conjugate.`,
          a: `$\\sqrt{3} + \\sqrt{2}$. Multiply top and bottom by the conjugate $\\sqrt{3} + \\sqrt{2}$. The bottom becomes $(\\sqrt{3})^2 - (\\sqrt{2})^2 = 3 - 2 = 1$, so the result is $\\sqrt{3} + \\sqrt{2}$.`
        },
        // Solving inequalities
        {
          q: `Solve $3x - 5 < 7$.`,
          a: `$x < 4$. Add 5: $3x < 12$. Divide by 3 (positive, so keep the direction): $x < 4$.`
        },
        {
          q: `Solve $-2x + 1 \\geq 9$.`,
          a: `$x \\leq -4$. Subtract 1: $-2x \\geq 8$. Divide by $-2$, which is negative, so flip the direction: $x \\leq -4$.`
        },
        // Bounding + telescoping
        {
          q: `Prove that $\\frac{1}{101} + \\frac{1}{102} + \\cdots + \\frac{1}{200} > \\frac{1}{2}$.`,
          a: `Each of the 100 terms is at least $\\frac{1}{200}$. So the sum $\\geq 100 \\times \\frac{1}{200} = \\frac{1}{2}$. It strictly exceeds $\\frac{1}{2}$ because most terms are larger than $\\frac{1}{200}$.`
        },
        {
          q: `Prove $1 + \\frac{1}{4} + \\frac{1}{9} + \\cdots + \\frac{1}{100^2} < 2$ using telescoping.`,
          a: `For $k \\geq 2$: $\\frac{1}{k^2} < \\frac{1}{k-1} - \\frac{1}{k}$. Summing from $k = 2$ to $100$ the middle terms cancel, leaving $1 - \\frac{1}{100} < 1$. Add the first term (which is 1): total $< 2$.`
        },
        // AM and GM
        {
          q: `State the AM-GM inequality for two non-negative numbers. When does equality hold?`,
          a: `For $a, b \\geq 0$: $\\sqrt{ab} \\leq \\frac{a+b}{2}$. The geometric mean never exceeds the arithmetic mean. Equality holds if and only if $a = b$. The proof rests on $(a-b)^2 \\geq 0$, which gives $(a+b)^2 \\geq 4ab$, then take square roots.`
        },
        {
          q: `A rectangle has sides $a = 3$ and $b = 12$. Compare the side of a square with the same perimeter to the side of one with the same area.`,
          a: `Same perimeter: side $= \\frac{3+12}{2} = 7.5$ (the AM). Same area: side $= \\sqrt{36} = 6$ (the GM). The AM side is larger, illustrating AM $\\geq$ GM.`
        },
        {
          q: `Two positive numbers multiply to 36. What is the smallest possible sum?`,
          a: `$12$. By AM-GM, $\\frac{a+b}{2} \\geq \\sqrt{ab} = \\sqrt{36} = 6$, so $a + b \\geq 12$. Equality when $a = b = 6$.`
        },
        {
          q: `You have 100 m of fence for a rectangular garden. What shape maximises the area?`,
          a: `A square. With $2(x+y) = 100$, so $x + y = 50$. Area $= xy \\leq \\left(\\frac{x+y}{2}\\right)^2 = 625$ m². Equality when $x = y = 25$ m.`
        },
        {
          q: `A rectangle has area 36 cm². Find the dimensions that minimise the perimeter.`,
          a: `A 6 cm by 6 cm square. With $ab = 36$, by AM-GM $\\frac{a+b}{2} \\geq \\sqrt{ab} = 6$, so $a + b \\geq 12$ and the perimeter $2(a+b) \\geq 24$ cm. Equality when $a = b = 6$.`
        },
        {
          q: `Find the maximum value of $ab$ given $a + 2b = 6$ with $a, b \\geq 0$.`,
          a: `$\\frac{9}{2}$. Apply AM-GM to $a$ and $2b$: $\\frac{a + 2b}{2} \\geq \\sqrt{a \\cdot 2b}$, so $3 \\geq \\sqrt{2ab}$, giving $2ab \\leq 9$, i.e. $ab \\leq \\frac{9}{2}$. Equality when $a = 2b$, that is $a = 3, b = \\frac{3}{2}$.`
        },
        {
          q: `You enclose a rectangle next to a river using 200 m of fence, with the river forming one side. Maximise the area.`,
          a: `Let the side along the river be $x$ and each perpendicular side $y$: $x + 2y = 200$. Apply AM-GM to $x$ and $2y$: $\\sqrt{x \\cdot 2y} \\leq \\frac{x + 2y}{2} = 100$, so $2xy \\leq 10000$, hence $xy \\leq 5000$. Maximum area 5000 m², when $x = 100$ m, $y = 50$ m.`
        }
      ],

      reference: {
        category: 'Quick Reference',
        title: 'Surds, Inequalities and Means',
        sections: [
          <>
            <h2>Surds</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Method</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Simplify</td>
                  <td>Pull out the largest square factor</td>
                  <td>{`$\\sqrt{50} = 5\\sqrt{2}$`}</td>
                </tr>
                <tr>
                  <td>Add like surds</td>
                  <td>Add the numbers in front, keep the surd</td>
                  <td>{`$2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}$`}</td>
                </tr>
                <tr>
                  <td>Multiply</td>
                  <td>{`$\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$`}</td>
                  <td>{`$\\sqrt{2}\\sqrt{3} = \\sqrt{6}$`}</td>
                </tr>
                <tr>
                  <td>Rationalise (one term)</td>
                  <td>Multiply top and bottom by the surd</td>
                  <td>{`$\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$`}</td>
                </tr>
                <tr>
                  <td>Rationalise (two terms)</td>
                  <td>Multiply by the conjugate</td>
                  <td>{`$\\frac{1}{\\sqrt{3}-\\sqrt{2}} = \\sqrt{3}+\\sqrt{2}$`}</td>
                </tr>
              </tbody>
            </table>

            <h2>Inequality Properties</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Statement</th>
                  <th>Direction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transitivity</td>
                  <td>{`If $a < b$ and $b < c$ then $a < c$`}</td>
                  <td>Stays same</td>
                </tr>
                <tr>
                  <td>Add to both sides</td>
                  <td>{`If $a < b$ then $a + c < b + c$`}</td>
                  <td>Stays same</td>
                </tr>
                <tr>
                  <td>Multiply by positive</td>
                  <td>{`If $a < b$ and $c > 0$ then $ac < bc$`}</td>
                  <td>Stays same</td>
                </tr>
                <tr>
                  <td>Multiply by negative</td>
                  <td>{`If $a < b$ and $c < 0$ then $ac > bc$`}</td>
                  <td>Flips</td>
                </tr>
                <tr>
                  <td>Reciprocals (positive)</td>
                  <td>{`If $0 < a < b$ then $\\frac{1}{a} > \\frac{1}{b}$`}</td>
                  <td>Flips</td>
                </tr>
              </tbody>
            </table>

            <h2>Solving Inequalities</h2>
            <div className="lrn-callout">
              <span className="lrn-callout-label">Moves allowed</span>
              <p>
                {`Full operation/direction reference: see Graphing Lines and Linear Inequalities § Inequality Rules.`}
              </p>
            </div>

            <h2>Two Means and AM-GM</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Mean</th>
                  <th>{`Formula ($a, b \\geq 0$)`}</th>
                  <th>Use when</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Arithmetic (AM)</td>
                  <td>{`$\\dfrac{a+b}{2}$`}</td>
                  <td>Additive middle; same perimeter</td>
                </tr>
                <tr>
                  <td>Geometric (GM)</td>
                  <td>{`$\\sqrt{ab}$`}</td>
                  <td>Multiplicative middle; same area</td>
                </tr>
              </tbody>
            </table>

            <p className="lrn-eq lrn-eq-hero">{`$$\\sqrt{ab} \\leq \\frac{a+b}{2} \\quad (a, b \\geq 0)$$`}</p>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">When to use AM-GM</span>
              <p>{`Maximise a product with a fixed sum, or minimise a sum with a fixed product. Equality when the two numbers are equal.`}</p>
            </div>
          </>
        ]
      },

      customCss:
        '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
    }),
    []
  )
}

export default function RootsPowersAndInequalities() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}

export function useRootsPowersAndInequalitiesConfig() {
  return useConfig()
}
