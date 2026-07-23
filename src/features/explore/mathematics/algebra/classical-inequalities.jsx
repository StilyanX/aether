import 'katex/dist/katex.min.css'
import { useMemo } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { MeanChainViz, QMConvexViz } from '../../../../components/viz'

function useConfig() {
  return useMemo(
    () => ({
      cssPrefix: 'cin',
      documentTitle: 'Classical Inequalities - AETHER',
      learning: {
        groupTitle: 'Equations and Inequalities',
        category: 'Module 3',
        title: 'Classical Inequalities',
        subtitle:
          'AM-GM for many numbers, the chain of four means, and the Cauchy-Schwarz inequality.',
        sections: [
          // SECTION 0: Bridge
          <>
            <h2>From Two Numbers to Many</h2>
            <p>
              {`You already know AM-GM for two numbers: $\\sqrt{ab} \\leq \\frac{a+b}{2}$.
              This topic pushes that idea further. It proves AM-GM for any number of values,
              lines up four different averages in one chain, and ends with the
              Cauchy-Schwarz inequality.`}
            </p>
            <p>
              {`Each result rests on the same trick you have seen: turn the claim into a
              statement that some squared quantity is never negative, then read off the
              answer.`}
            </p>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">What you need first</span>
              <p>
                {`This page builds on roots, rational exponents, and the two-number AM-GM
                inequality. If those feel shaky, review them before reading on. One new tool
                appears here: proof by induction, explained the first time it is used.`}
              </p>
            </div>
          </>,

          // SECTION 1: AM-GM for n numbers
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Three non-negative numbers add up to 9. What is the largest their product can be?
                Guess a value before reading on.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The product is largest when all three are equal: $3 \\times 3 \\times 3 = 27$.
                  This is AM-GM for three numbers in action.`}
                </p>
              </details>
            </div>

            <h2>AM-GM for n Numbers</h2>

            <p>{`The two-number rule extends to any list of non-negative numbers.`}</p>

            <p className="lrn-eq lrn-eq-hero">
              {`$$\\sqrt[n]{a_1 a_2 \\cdots a_n} \\leq \\frac{a_1 + a_2 + \\cdots + a_n}{n}$$`}
            </p>

            <p>{`Equality holds only when all the $a_i$ are equal.`}</p>

            <h3>Proof for Powers of 2</h3>

            <p>
              {`The plan: keep the sum fixed, then nudge the numbers toward equal values. Each
              nudge never lowers the product. Repeat until all numbers match, where the
              geometric mean equals the arithmetic mean.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`$n = 4$: balancing pairs`}</span>
                <p className="lrn-step-content">
                  {`Replace $a_1, a_2$ with two copies of their average $m_{12} = \\frac{a_1+a_2}{2}$.
                  The sum stays the same. The product changes from $a_1 a_2 a_3 a_4$ to
                  $m_{12}^2 a_3 a_4$, and since $m_{12}^2 \\geq a_1 a_2$ (the two-number rule),
                  the product does not drop.`}
                </p>
                <p className="lrn-step-content">
                  {`Do the same with $a_3, a_4$. Then balance the two averages. After three rounds
                  all four numbers equal $\\frac{S}{4}$ where $S = a_1+a_2+a_3+a_4$.`}
                </p>
                <p className="lrn-step-content">
                  {`The final product is $\\left(\\frac{S}{4}\\right)^4$, and it never decreased,
                  so $a_1 a_2 a_3 a_4 \\leq \\left(\\frac{S}{4}\\right)^4$. Take fourth roots:
                  $\\sqrt[4]{a_1 a_2 a_3 a_4} \\leq \\frac{S}{4}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`$n = 8$ and beyond`}</span>
                <p className="lrn-step-content">
                  {`Balance pairs, then balance quadruples, then balance the two halves. Three rounds
                  flatten all eight values without lowering the product. The same doubling argument
                  works for any $n$ that is a power of 2.`}
                </p>
              </div>
            </div>

            <h3>Proof for n = 3 (and any n)</h3>

            <p>
              {`Numbers that are not powers of 2 reduce to the next power of 2 above them. Add
              copies of the geometric mean until the list length is a power of 2.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`$n = 3$: reduce to $n = 4$`}</span>
                <p className="lrn-step-content">
                  {`Let $g = \\sqrt[3]{a_1 a_2 a_3}$. Add $g$ as a fourth number and apply the $n = 4$
                  rule to $(a_1, a_2, a_3, g)$. The product of all four is $g^3 \\cdot g = g^4$, so their
                  geometric mean is $g$.`}
                </p>
                <p className="lrn-step-content">
                  {`The $n = 4$ rule gives $g \\leq \\frac{a_1 + a_2 + a_3 + g}{4}$. Multiply by 4 and
                  subtract $g$: $3g \\leq a_1 + a_2 + a_3$, so $g \\leq \\frac{a_1+a_2+a_3}{3}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`$n = 7$, from $n = 8$`}</span>
                <p className="lrn-step-content">
                  {`Let $g = \\sqrt[7]{a_1 \\cdots a_7}$. Append $g$ to make eight numbers; their product is
                  $g^7 \\cdot g = g^8$, so their geometric mean is $g$. The $n = 8$ rule gives
                  $g \\leq \\frac{a_1 + \\cdots + a_7 + g}{8}$, which simplifies to $g \\leq \\frac{a_1 + \\cdots + a_7}{7}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Direct algebra for n = 3</span>
              <p>
                {`There is also a one-line route. Use the identity
                $a^3 + b^3 + c^3 - 3abc = \\tfrac{1}{2}(a+b+c)\\bigl((a-b)^2 + (b-c)^2 + (a-c)^2\\bigr)$.`}
              </p>
              <p>
                {`The right side is never negative, so $a^3 + b^3 + c^3 \\geq 3abc$. Substituting
                $a = \\sqrt[3]{a_1}$, $b = \\sqrt[3]{a_2}$, $c = \\sqrt[3]{a_3}$ gives AM-GM for three numbers.`}
              </p>
            </div>

            <h3>One Proof That Covers Every n</h3>

            <p>
              {`Multiplying every number by the same positive constant $c$ scales both the
              arithmetic mean and the geometric mean by $c$. So you can scale first and assume the
              arithmetic mean is 1, meaning $a_1 + \\cdots + a_n = n$. The claim becomes:
              $a_1 \\cdots a_n \\leq 1$. This is proved by induction.`}
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">What induction means</span>
              <p>
                {`Induction proves a claim for every whole number $n$ in two steps. First show it
                holds at the smallest case. Then show that whenever it holds at one value, it must
                hold at the next. Like dominoes: knock over the first, and each one topples the next,
                so they all fall.`}
              </p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Induction on $n$, given $a_1 + \\cdots + a_n = n$`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Smallest case $n = 2$. The sum is 2, so write $a_1 = 1 + h$, $a_2 = 1 - h$. The
                  product is $1 - h^2 \\leq 1$. ✓`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Step up. If all $a_i = 1$, the product is 1. Otherwise some $a_i > 1$ and some
                  $a_j < 1$. Pick $a < 1 < b$. Then $(a-1)(b-1) \\leq 0$, which expands to
                  $ab + 1 \\leq a + b$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Replace the pair $a, b$ by the single number $ab$. Now you have $n - 1$ numbers, and
                  their sum is at most $n - 1$ because $ab \\leq a + b - 1$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`The claim holds for $n - 1$ numbers (the induction step), so their product is at
                  most 1. That product equals the original $a_1 \\cdots a_n$. So $a_1 \\cdots a_n \\leq 1$. ✓`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Using AM-GM for n Numbers</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $\\frac{a_1}{a_2} + \\frac{a_2}{a_3} + \\cdots + \\frac{a_n}{a_1} \\geq n$`}</span>
                <p className="lrn-step-content">
                  {`Apply AM-GM to the $n$ terms. Their product telescopes to
                  $\\frac{a_1}{a_2} \\cdot \\frac{a_2}{a_3} \\cdots \\frac{a_n}{a_1} = 1$, so the geometric mean is 1.
                  Then the arithmetic mean is at least 1, meaning the sum is at least $n$. ✓`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $\\sqrt[3]{ab^2} \\leq \\frac{a+2b}{3}$`}</span>
                <p className="lrn-step-content">
                  {`Apply AM-GM to three numbers $a, b, b$:
                  $\\frac{a+b+b}{3} \\geq \\sqrt[3]{a \\cdot b \\cdot b} = \\sqrt[3]{ab^2}$. ✓`}
                </p>
              </div>
            </div>
          </>,

          // SECTION 2: Quadratic and Harmonic Means + Chain
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`For $a = 1$ and $b = 3$: the arithmetic mean is 2. The quadratic mean is
                $\\sqrt{\\frac{1+9}{2}} = \\sqrt{5} \\approx 2.24$. Which is larger? Predict the general pattern.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The quadratic mean is always at least the arithmetic mean. Squaring before
                  averaging gives extra weight to the larger value.`}
                </p>
              </details>
            </div>

            <h2>The Quadratic Mean</h2>

            <p>
              {`The quadratic mean (also called the root mean square or RMS) is sensitive to large
              values. Physics uses it to find the effective size of a signal that swings up and down.`}
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Quadratic Mean (QM)</span>
              <div className="lrn-definition-desc">
                <p>{`For two numbers: $\\text{QM}(a, b) = \\sqrt{\\dfrac{a^2 + b^2}{2}}$.`}</p>
                <p>{`For $n$ numbers: $\\text{QM} = \\sqrt{\\dfrac{a_1^2 + \\cdots + a_n^2}{n}}$.`}</p>
              </div>
            </div>

            <div className="lrn-insight">
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\sqrt{\\frac{a^2+b^2}{2}} \\geq \\frac{a+b}{2}$$`}</span>
              </div>
              <p>Equality holds if and only if {`$a = b$`}.</p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof: QM ≥ AM</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Square both sides (valid since both sides are zero or positive):
                  $\\frac{a^2+b^2}{2} \\geq \\frac{(a+b)^2}{4}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Multiply both sides by 4: $2(a^2+b^2) \\geq (a+b)^2 = a^2 + 2ab + b^2$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Simplify: $a^2 - 2ab + b^2 \\geq 0$, which is $(a-b)^2 \\geq 0$. Always true. ✓`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Geometric Picture</h3>

            <p>
              {`The curve $y = x^2$ bends upward. For any two points on it, the straight chord
              joining them sits above the curve.`}
            </p>

            <div className="lrn-graph">
              <QMConvexViz />
              <p>
                {`The chord from $(a, a^2)$ to $(b, b^2)$ lies above the curve at the midpoint.
                The chord's midpoint height is $\\frac{a^2+b^2}{2}$; the curve at the midpoint is
                $\\left(\\frac{a+b}{2}\\right)^2$. So $\\frac{a^2+b^2}{2} \\geq \\left(\\frac{a+b}{2}\\right)^2$, i.e. QM $\\geq$ AM.`}
              </p>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`For $a = 2$ and $b = 8$: the harmonic mean is $\\frac{2 \\cdot 8}{2+8} = 3.2$ and the
                geometric mean is $\\sqrt{16} = 4$. Which is larger? Predict the general pattern.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`HM $= 3.2 < 4 =$ GM. The pattern is HM $\\leq$ GM.`}</p>
              </details>
            </div>

            <h2>The Harmonic Mean</h2>

            <p>
              {`The harmonic mean is the right average for rates. Drive $d$ km at speed $a$ and
              another $d$ km at speed $b$; your average speed is the harmonic mean of $a$ and $b$.`}
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Harmonic Mean (HM)</span>
              <div className="lrn-definition-desc">
                <p>{`For two positive numbers: $\\text{HM}(a, b) = \\dfrac{2ab}{a+b}$.`}</p>
                <p>{`In words: flip each number, average, then flip back.`}</p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY HM FOR RATES?</span>
              <p>
                {`Each leg of length $d$ takes time $\\frac{d}{a}$ or $\\frac{d}{b}$. Total time is
                $d\\left(\\frac{1}{a} + \\frac{1}{b}\\right)$ and total distance is $2d$. Dividing gives the
                average speed $\\frac{2}{\\frac{1}{a} + \\frac{1}{b}} = \\frac{2ab}{a+b}$, which is the harmonic mean.`}
              </p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof: HM ≤ GM</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Apply AM-GM to $\\frac{1}{a}$ and $\\frac{1}{b}$:
                  $\\frac{\\frac{1}{a} + \\frac{1}{b}}{2} \\geq \\sqrt{\\frac{1}{ab}}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Take reciprocals, which flips the direction
                  (reciprocal inequality, proven in `}
                  <strong>Graphing Lines and Linear Inequalities § Reciprocal Inequality</strong>
                  {`): $\\frac{2}{\\frac{1}{a}+\\frac{1}{b}} \\leq \\sqrt{ab}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`The left side is HM$(a,b)$ and the right side is GM$(a,b)$. So HM $\\leq$ GM. ✓`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>The Full Chain of Means</h3>

            <div className="lrn-insight">
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\text{HM} \\leq \\text{GM} \\leq \\text{AM} \\leq \\text{QM}$$`}</span>
              </div>
              <p>
                {`For any two positive numbers:
                $\\dfrac{2ab}{a+b} \\leq \\sqrt{ab} \\leq \\dfrac{a+b}{2} \\leq \\sqrt{\\dfrac{a^2+b^2}{2}}$.`}
              </p>
              <p>Equality throughout if and only if {`$a = b$`}.</p>
            </div>

            <div className="lrn-graph">
              <MeanChainViz />
              <p>{`The four means for $a=1, b=9$: HM $= 1.8$, GM $= 3$, AM $= 5$, QM $\\approx 6.4$.`}</p>
            </div>
          </>,

          // SECTION 3: Cauchy-Schwarz
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Take $p = (3, 4)$ and $q = (1, 0)$. Compute $p_1 q_1 + p_2 q_2$, and compare its
                square with $(p_1^2 + p_2^2)(q_1^2 + q_2^2)$. Which is larger?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The sum is $3 \\cdot 1 + 4 \\cdot 0 = 3$, so its square is 9. The other side is
                  $(9 + 16)(1 + 0) = 25$. So $9 \\leq 25$. Cauchy-Schwarz always holds this way.`}
                </p>
              </details>
            </div>

            <h2>The Cauchy-Schwarz Inequality</h2>

            <p>
              {`This inequality compares a sum of products with the two sums of squares. Use it
              whenever a sum $\\sum p_i q_i$ must be bounded using $\\sum p_i^2$ and $\\sum q_i^2$.`}
            </p>

            <p className="lrn-eq lrn-eq-hero">
              {`$$(p_1 q_1 + \\cdots + p_n q_n)^2 \\leq (p_1^2 + \\cdots + p_n^2)(q_1^2 + \\cdots + q_n^2)$$`}
            </p>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">One tool you need: the discriminant</span>
              <p>
                {`A quadratic $At^2 + Bt + C$ with $A > 0$ stays at zero or above for every $t$ exactly
                when it never crosses zero. That happens precisely when $B^2 - 4AC \\leq 0$, the same
                discriminant test from the quadratic formula.`}
              </p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof via a non-negative quadratic</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Build $f(t) = \\sum_{i=1}^n (p_i t + q_i)^2$. Each term is a square, so $f(t) \\geq 0$
                  for every real $t$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Expand: $f(t) = \\left(\\sum p_i^2\\right)t^2 + 2\\left(\\sum p_i q_i\\right)t + \\sum q_i^2$.
                  This is a quadratic in $t$ that never dips below zero, so its discriminant is $\\leq 0$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`The discriminant condition reads
                  $4\\left(\\sum p_i q_i\\right)^2 - 4\\left(\\sum p_i^2\\right)\\left(\\sum q_i^2\\right) \\leq 0$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Divide by 4: $\\left(\\sum p_i q_i\\right)^2 \\leq \\left(\\sum p_i^2\\right)\\left(\\sum q_i^2\\right)$. ✓`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>The Sum-Product Inequality</h3>

            <div className="lrn-insight">
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$(a_1 + \\cdots + a_n)\\left(\\frac{1}{a_1} + \\cdots + \\frac{1}{a_n}\\right) \\geq n^2$$`}</span>
              </div>
              <p>{`For positive numbers, with equality when all $a_i$ are equal.`}</p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof via Cauchy-Schwarz</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Set $p_i = \\sqrt{a_i}$ and $q_i = \\frac{1}{\\sqrt{a_i}}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Then $\\sum p_i q_i = \\sum 1 = n$, $\\sum p_i^2 = \\sum a_i$, and
                  $\\sum q_i^2 = \\sum \\frac{1}{a_i}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Cauchy-Schwarz gives $n^2 \\leq \\left(\\sum a_i\\right)\\left(\\sum \\frac{1}{a_i}\\right)$,
                  which is the claim. ✓`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>
          </>
        ]
      },

      practice: [
        {
          q: 'State AM-GM for $n$ numbers. When does equality hold?',
          a: '$\\sqrt[n]{a_1 a_2 \\cdots a_n} \\leq \\frac{a_1 + \\cdots + a_n}{n}$ for non-negative $a_i$. The geometric mean never exceeds the arithmetic mean. Equality holds if and only if all $a_i$ are equal.'
        },
        {
          q: 'Three non-negative numbers add up to 12. What is their largest possible product?',
          a: '$64$. By AM-GM the product is largest when all three are equal: each is $\\frac{12}{3} = 4$, so the product is $4^3 = 64$.'
        },
        {
          q: 'How does the balancing proof of AM-GM for $n = 4$ work?',
          a: 'Replace $(a_1, a_2)$ with two copies of their average $m = \\frac{a_1+a_2}{2}$. The sum is unchanged and the product does not decrease, because $m^2 \\geq a_1 a_2$. Repeat for $(a_3, a_4)$, then balance the two averages. After three rounds all four numbers equal $\\frac{S}{4}$, and the product only grew. So $a_1 a_2 a_3 a_4 \\leq (\\frac{S}{4})^4$.'
        },
        {
          q: 'In the $n = 3$ proof, why is the fourth number chosen as $g = \\sqrt[3]{a_1 a_2 a_3}$?',
          a: 'Because it makes the product of the four numbers equal $g^4$, so their geometric mean is exactly $g$. The product is $a_1 a_2 a_3 \\cdot g = g^3 \\cdot g = g^4$. Any other choice would break the clean cancellation at the end.'
        },
        {
          q: 'Prove $\\frac{a_1}{a_2} + \\frac{a_2}{a_3} + \\frac{a_3}{a_1} \\geq 3$ for positive $a_1, a_2, a_3$.',
          a: 'Apply AM-GM to the three terms. Their product is $\\frac{a_1}{a_2} \\cdot \\frac{a_2}{a_3} \\cdot \\frac{a_3}{a_1} = 1$, so the geometric mean is 1. Then the arithmetic mean is at least 1, giving the sum $\\geq 3$.'
        },
        {
          q: 'Prove QM $\\geq$ AM for two numbers $a$ and $b$.',
          a: 'QM $= \\sqrt{\\frac{a^2+b^2}{2}}$, AM $= \\frac{a+b}{2}$. Square both: need $\\frac{a^2+b^2}{2} \\geq \\frac{(a+b)^2}{4}$. Multiply by 4: $2a^2 + 2b^2 \\geq a^2 + 2ab + b^2$, i.e. $(a-b)^2 \\geq 0$. Always true.'
        },
        {
          q: 'Prove HM $\\leq$ GM for two positive numbers.',
          a: 'Apply AM-GM to $\\frac{1}{a}$ and $\\frac{1}{b}$: $\\frac{\\frac{1}{a} + \\frac{1}{b}}{2} \\geq \\sqrt{\\frac{1}{ab}}$. Take reciprocals (which flips the direction): $\\frac{2}{\\frac{1}{a}+\\frac{1}{b}} \\leq \\sqrt{ab}$. The left side is HM and the right side is GM, so HM $\\leq$ GM.'
        },
        {
          q: 'Write the four-mean chain for $a = 4$ and $b = 16$.',
          a: 'HM $= \\frac{2 \\times 4 \\times 16}{4+16} = 6.4$. GM $= \\sqrt{4 \\times 16} = 8$. AM $= \\frac{4+16}{2} = 10$. QM $= \\sqrt{\\frac{16+256}{2}} = \\sqrt{136} \\approx 11.7$. Chain: $6.4 \\leq 8 \\leq 10 \\leq 11.7$.'
        },
        {
          q: 'State the Cauchy-Schwarz inequality.',
          a: '$(p_1 q_1 + \\cdots + p_n q_n)^2 \\leq (p_1^2 + \\cdots + p_n^2)(q_1^2 + \\cdots + q_n^2)$. In words: the square of the sum of products is at most the product of the two sums of squares.'
        },
        {
          q: 'Prove $(a_1 + \\cdots + a_n)(\\frac{1}{a_1} + \\cdots + \\frac{1}{a_n}) \\geq n^2$.',
          a: 'Set $p_i = \\sqrt{a_i}$ and $q_i = \\frac{1}{\\sqrt{a_i}}$ in Cauchy-Schwarz. Then $\\sum p_i q_i = n$, $\\sum p_i^2 = \\sum a_i$, and $\\sum q_i^2 = \\sum \\frac{1}{a_i}$. So $n^2 \\leq (\\sum a_i)(\\sum \\frac{1}{a_i})$.'
        },
        {
          q: 'In the sound desk, two speakers output 6 V and 8 V. What is the RMS (quadratic mean) amplitude?',
          a: 'RMS $= \\sqrt{\\frac{6^2 + 8^2}{2}} = \\sqrt{\\frac{36 + 64}{2}} = \\sqrt{50} \\approx 7.07$ V. The plain average gives 7, and QM $\\geq$ AM as expected. RMS suits power-related quantities because power scales with amplitude squared.'
        }
      ],

      reference: {
        category: 'Quick Reference',
        title: 'Classical Inequalities',
        sections: [
          <>
            <h2>The Four Means</h2>

            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\text{HM} \\leq \\text{GM} \\leq \\text{AM} \\leq \\text{QM}$$`}</span>
            </div>

            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Mean</th>
                  <th>{`Formula ($a, b > 0$)`}</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Harmonic (HM)</td>
                  <td>{`$\\dfrac{2ab}{a+b}$`}</td>
                  <td>Averaging rates over equal segments</td>
                </tr>
                <tr>
                  <td>Geometric (GM)</td>
                  <td>{`$\\sqrt{ab}$`}</td>
                  <td>Multiplicative center; growth rates</td>
                </tr>
                <tr>
                  <td>Arithmetic (AM)</td>
                  <td>{`$\\dfrac{a+b}{2}$`}</td>
                  <td>Balance point; additive average</td>
                </tr>
                <tr>
                  <td>Quadratic (QM)</td>
                  <td>{`$\\sqrt{\\dfrac{a^2+b^2}{2}}$`}</td>
                  <td>RMS; signals; weights large values</td>
                </tr>
              </tbody>
            </table>

            <h2>Key Inequalities</h2>

            <p className="lrn-eq lrn-eq-hero">{`$$\\sqrt[n]{a_1 \\cdots a_n} \\leq \\frac{a_1 + \\cdots + a_n}{n}$$`}</p>

            <p className="lrn-eq">{`$$(\\textstyle\\sum p_i q_i)^2 \\leq (\\textstyle\\sum p_i^2)(\\textstyle\\sum q_i^2)$$`}</p>

            <p className="lrn-eq">{`$$(a_1+\\cdots+a_n)\\left(\\tfrac{1}{a_1}+\\cdots+\\tfrac{1}{a_n}\\right) \\geq n^2$$`}</p>

            <h2>Proof Templates</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Goal</th>
                  <th>Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AM-GM for $n$</td>
                  <td>Balance pairs for powers of 2; add the geometric mean for other $n$</td>
                </tr>
                <tr>
                  <td>QM ≥ AM</td>
                  <td>{`Square both sides, reduce to $(a-b)^2 \\geq 0$`}</td>
                </tr>
                <tr>
                  <td>HM ≤ GM</td>
                  <td>{`Apply AM-GM to $\\frac{1}{a}$ and $\\frac{1}{b}$, then take reciprocals`}</td>
                </tr>
                <tr>
                  <td>Cauchy-Schwarz</td>
                  <td>{`Non-negative quadratic $\\sum (p_i t + q_i)^2$; discriminant $\\leq 0$`}</td>
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

export default function ClassicalInequalities() {
  return <LearningTemplate config={useConfig()} />
}
