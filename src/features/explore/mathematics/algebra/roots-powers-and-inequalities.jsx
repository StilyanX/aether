import 'katex/dist/katex.min.css'
import { useMemo } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { AMGMRectViz, MeanChainViz, QMConvexViz } from '../../../../components/viz'

function useConfig() {
  return useMemo(
    () => ({
      cssPrefix: 'rpi',
      documentTitle: 'Roots, Powers and Inequalities. AETHER',
      learning: {
        groupTitle: 'Equations and Inequalities',
        category: 'mathematics',
        title: 'Roots, Powers and Inequalities',
        subtitle: 'From the nth root to the chain of means: HM ≤ GM ≤ AM ≤ QM',
        sections: [
          <>
            <div className="lrn-header">
              <h1>Roots, Powers and Inequalities</h1>
              <p>
                {`From the $n$th root to the chain of means, this topic builds the tools that turn
                inequality problems into algebra. Every claim below rests on one idea: if two
                non-negative numbers are equal, their squares are equal too, and vice versa.`}
              </p>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Before you read on: which is larger, $\\sqrt{2}$ or $\\sqrt[3]{3}$?
              Write your guess, then check it at the end of this section.`}
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

            <h2>Roots</h2>

            <p>
              {`Use roots whenever you need to reverse a power. You know $3^2 = 9$, so you need a
            way to go back: $\\sqrt{9} = 3$.`}
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">{`$n$th Root`}</span>
              <div className="lrn-definition-desc">
                <p>
                  {`The $n$th root of $a$, written $\\sqrt[n]{a}$, is the unique non-negative number $x$
                such that $x^n = a$. Here $a \\geq 0$ and $n$ is a positive integer.`}
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Why is $x$ unique? If $0 \\leq x_1 < x_2$, then multiplying $n$ non-negative
              factors term-by-term gives $x_1^n < x_2^n$. So two different non-negative numbers
              cannot share the same $n$th power. That is what "unique" means here.`}
              </p>
              <p>
                {`Why does $x$ exist? As $x$ runs from $0$ upward, $x^n$ also runs from $0$ upward,
              continuously, with no jumps. It must hit the value $a$ exactly once.`}
              </p>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Convention</span>
              <p>
                {`For even $n$, both $x$ and $-x$ satisfy $x^n = a$, but we always pick the
              non-negative one. For odd $n$, negative numbers also have an $n$th root
              ($\\sqrt[3]{-8} = -2$, say), but throughout this topic we restrict to
              non-negative inputs to avoid splitting into cases.`}
              </p>
              <p>{`A direct consequence of the definition: $\\sqrt[n]{a^n} = a$ for $a \\geq 0$.`}</p>
            </div>

            <h3>Root Properties</h3>

            <p>
              {`Use these rules to simplify expressions and convert between root notation and
            exponent notation.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Product rule</span>
                <p className="lrn-step-content">
                  {`$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$ for $a, b \\geq 0$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Quotient rule</span>
                <p className="lrn-step-content">
                  {`$\\sqrt[n]{\\dfrac{a}{b}} = \\dfrac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$ for $a, b \\geq 0$,
                $b \\neq 0$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Reciprocal rule</span>
                <p className="lrn-step-content">
                  {`$\\sqrt[n]{\\dfrac{1}{a}} = \\dfrac{1}{\\sqrt[n]{a}}$ for $a > 0$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power-of-root rule</span>
                <p className="lrn-step-content">
                  {`$\\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$ for $a \\geq 0$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Nested root rule</span>
                <p className="lrn-step-content">
                  {`$\\sqrt[mn]{a} = \\sqrt[m]{\\sqrt[n]{a}}$ for $a \\geq 0$ and positive integers
                $m, n$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Three-factor product</span>
                <p className="lrn-step-content">
                  {`$\\sqrt[n]{abc} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b} \\cdot \\sqrt[n]{c}$ for
                $a, b, c \\geq 0$. Same idea works for any number of non-negative factors:
                apply the product rule once to combine $a$ and $b$, then again with $c$.`}
                </p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof of Product Rule</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Let $x = \\sqrt[n]{a}$ and $y = \\sqrt[n]{b}$. By definition $x^n = a$ and
                $y^n = b$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Then $(xy)^n = x^n y^n = ab$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Since $xy \\geq 0$, the definition says $xy = \\sqrt[n]{ab}$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does Step 2 use $(xy)^n = x^n y^n$? What rule is that, and why does it hold?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`It is the product rule for integer powers: $(xy)^n = (xy)(xy)\\cdots(xy)$.
                You can rearrange the factors because multiplication is commutative and associative,
                giving $x^n y^n$.`}
                </p>
              </details>
            </div>

            <h3>Comparing Roots. Worked Examples</h3>

            <p>
              {`To compare roots, find a common exponent so both sides become ordinary integers.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Which is bigger: $\\sqrt{2}$ or $\\sqrt[3]{3}$?`}</span>
                <p className="lrn-step-content">
                  {`Raise both to the power 6 (the LCM of 2 and 3).
                $(\\sqrt{2})^6 = 2^3 = 8$. $(\\sqrt[3]{3})^6 = 3^2 = 9$.
                Since $8 < 9$ and the function $x^6$ preserves order for $x \\geq 0$,
                we get $\\sqrt{2} < \\sqrt[3]{3}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Which is bigger: $\\sqrt[10]{2}$ or $1.2$?`}</span>
                <p className="lrn-step-content">
                  {`Raise both to the 10th power.
                $(1.2)^{10} = (1 + 0.2)^{10}$. Even just the first two terms of the expansion give
                $1 + 10 \\cdot 0.2 = 3 > 2$. So $(1.2)^{10} > 2$, which means $1.2 > \\sqrt[10]{2}$.`}
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
              <div className="lrn-step">
                <span className="lrn-step-title">{`Verify $\\sqrt{\\sqrt{2}} = \\sqrt[4]{2}$.`}</span>
                <p className="lrn-step-content">
                  {`$\\sqrt{\\sqrt{2}} = (2^{\\tfrac{1}{2}})^{\\tfrac{1}{2}} = 2^{\\tfrac{1}{4}} = \\sqrt[4]{2}$. They are the same.`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`In the comparison of $\\sqrt{2}$ vs $\\sqrt[3]{3}$, why is it valid to raise both
              sides to a positive power and keep the inequality direction the same?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`For non-negative numbers, $f(x) = x^k$ with $k > 0$ is a strictly increasing
                function. So $a < b$ if and only if $a^k < b^k$. This lets us raise both sides
                to the same positive power without flipping the inequality.`}
                </p>
              </details>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Compute $\\sqrt[3]{0.999}$ to three decimal places.`}</span>
                <p className="lrn-step-content">
                  {`Try $x = 0.9997$ as a guess and cube it.
                $0.9997^3 = (1 - 0.0003)^3 = 1 - 3(0.0003) + 3(0.0003)^2 - (0.0003)^3$.
                The last two terms are smaller than $10^{-6}$, so
                $0.9997^3 \\approx 1 - 0.0009 = 0.9991$. Too low.`}
                </p>
                <p className="lrn-step-content">
                  {`Try $x = 0.99967$: $(1 - 0.00033)^3 \\approx 1 - 3(0.00033) = 0.99901$. Still low.`}
                </p>
                <p className="lrn-step-content">
                  {`The right value sits near $0.99967$. Rounded to three decimals,
                $\\sqrt[3]{0.999} \\approx 1.000$. To get a meaningful answer at three decimals
                you must keep more digits than three throughout the calculation.`}
                </p>
              </div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Why this is harder than it looks</span>
              <p>
                {`Numbers close to $1$ have cube roots close to $1$. The first three decimals of
              both numbers are $1.000$, so "three decimal places" is too coarse to distinguish
              them. The PDF asks you to notice this. Use the binomial approximation
              $(1+x)^{\\tfrac{1}{3}} \\approx 1 + \\frac{x}{3}$ for small $|x|$ to compute extra digits, then round
              at the end.`}
              </p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof of Nested Root Rule</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Let $u = \\sqrt[m]{\\sqrt[n]{a}}$. Then $u^m = \\sqrt[n]{a}$, so $(u^m)^n = a$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`That means $u^{mn} = a$ with $u \\geq 0$, so $u = \\sqrt[mn]{a}$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Power-of-root rule for negative $m$`}</span>
              <p>
                {`The rule $\\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$ was stated for any integer $m$.
              The cases $m = 0$ and $m = 1$ are immediate. For $m = -3$ (the general negative
              case is the same), use the reciprocal rule:`}
              </p>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`$\\sqrt[n]{a^{-3}} = \\sqrt[n]{\\frac{1}{a^3}} = \\frac{1}{\\sqrt[n]{a^3}}$
                by the reciprocal rule.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`$\\frac{1}{\\sqrt[n]{a^3}} = \\frac{1}{(\\sqrt[n]{a})^3} = (\\sqrt[n]{a})^{-3}$
                by the positive-$m$ case applied to $m = 3$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>
          </>,

          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`You know $2^3 = 8$ and $2^4 = 16$. What do you think $2^{3.5}$ means?
              Can you guess a value before reading on?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$2^{3.5} = 2^{\\tfrac{7}{2}} = (\\sqrt{2})^7 \\approx 11.31$.
                It sits between $2^3 = 8$ and $2^4 = 16$, as expected.`}
                </p>
              </details>
            </div>

            <h2>Non-Integer Powers</h2>

            <p>
              {`Use fractional exponents when a root and a power appear together, and you want
            to apply standard exponent laws without switching notation.`}
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Fractional Exponent</span>
              <div className="lrn-definition-desc">
                <p>{`Define $a^{\\tfrac{1}{n}} = \\sqrt[n]{a}$ for integer $n \\geq 1$ and $a \\geq 0$.`}</p>
                <p>
                  {`More generally, $a^{\\tfrac{m}{n}} = (\\sqrt[n]{a})^m$ for integers $m, n$ with $n \\geq 1$.`}
                </p>
              </div>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Consistency Check</span>
              <p>
                {`The definition must not depend on how you write the fraction. For example,
              $\\frac{2}{4}$ and $\\frac{1}{2}$ both equal the same number, so $a^{\\tfrac{2}{4}}$
              must equal $a^{\\tfrac{1}{2}}$. This is true because $\\sqrt[4]{a^2} = \\sqrt{a}$
              follows from the nested root rule.`}
              </p>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Why does $\\sqrt[4]{a^2} = \\sqrt{a}$? Use the nested root rule:
              $\\sqrt[4]{a^2} = \\sqrt[4 \\cdot 1]{a^{2 \\cdot 1}}$. Or directly:
              $(\\sqrt[4]{a^2})^4 = a^2$, so $\\sqrt[4]{a^2} = \\sqrt{a}$
              because $(\\sqrt{a})^4 = a^2$ and $\\sqrt{a} \\geq 0$.`}
              </p>
            </div>

            <h3>Rational Power Laws</h3>

            <p>
              All integer exponent laws extend to rational exponents. Below, {`$p$`} and {`$q$`} are
              any rational numbers.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Product law</span>
                <p className="lrn-step-content">{`$a^p \\cdot a^q = a^{p+q}$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Product base law</span>
                <p className="lrn-step-content">{`$(ab)^{\\tfrac{m}{n}} = a^{\\tfrac{m}{n}} \\cdot b^{\\tfrac{m}{n}}$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Power of power</span>
                <p className="lrn-step-content">{`$(a^p)^q = a^{pq}$`}</p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Proof of $a^p \\cdot a^q = a^{p+q}$`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Write $p = \\frac{k}{m}$ and $q = \\frac{l}{n}$ with a common denominator $N$:
                $p = \\frac{k'}{N}$, $q = \\frac{l'}{N}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Then $a^p \\cdot a^q = (\\sqrt[N]{a})^{k'} \\cdot (\\sqrt[N]{a})^{l'} =
                (\\sqrt[N]{a})^{k'+l'}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`And $p + q = \\frac{k'+l'}{N}$, so $a^{p+q} = (\\sqrt[N]{a})^{k'+l'}$.
                They match.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does Step 2 use integer exponent rules on $\\sqrt[N]{a}$, and what justifies that?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$\\sqrt[N]{a}$ is just a non-negative real number. Call it $b$.
                We already know $b^{k'} \\cdot b^{l'} = b^{k'+l'}$ for integers $k', l'$.
                So the integer power law applies with $b = \\sqrt[N]{a}$.`}
                </p>
              </details>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Proof of $(a^p)^q = a^{pq}$ for rational $p, q$`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Write $p = \\frac{k}{m}$ and $q = \\frac{l}{n}$.
                Then $(a^{\\tfrac{k}{m}})^{\\tfrac{l}{n}} = ((\\sqrt[m]{a})^k)^{\\tfrac{l}{n}}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Using the definition: $((\\sqrt[m]{a})^k)^{\\tfrac{l}{n}} = (\\sqrt[n]{(\\sqrt[m]{a})^k})^l$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`By the nested root and power-of-root rules:
                $(\\sqrt[n]{(\\sqrt[m]{a})^k})^l = (\\sqrt[mn]{a^k})^l = \\sqrt[mn]{a^{kl}} = a^{\\tfrac{kl}{(mn)}} = a^{pq}$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Monotonicity of Rational Powers</h3>

            <p>
              {`If $a > 1$, then $a^p$ grows as $p$ increases. If $0 < a < 1$, then $a^p$ shrinks
            as $p$ increases. This is why raising both sides of an inequality to a positive
            power preserves the inequality direction (for non-negative bases).`}
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Proof that $a^p$ is monotone in $p$`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Take rationals $p < q$. Write them with a common denominator $N$:
                $p = \\frac{k}{N}$, $q = \\frac{l}{N}$ with integers $k < l$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Let $b = \\sqrt[N]{a}$. Then $a^p = b^k$ and $a^q = b^l$ with integer exponents.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`If $a > 1$ then $b > 1$, so $b^l = b^k \\cdot b^{l-k} > b^k$. If $0 < a < 1$
                then $0 < b < 1$, so $b^l = b^k \\cdot b^{l-k} < b^k$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Irrational Exponents</span>
              <p>
                {`To define $2^{\\sqrt{2}}$, pick rationals $\\frac{p}{q}$ that get closer and closer to
              $\\sqrt{2}$ from below and from above. Monotonicity (just proved) says the values
              $2^{\\tfrac{p}{q}}$ from below all stay below the values from above. Define $2^{\\sqrt{2}}$
              as the unique number trapped between them. Proving such a number exists is a
              calculus topic.`}
              </p>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Root notation</span>
                <p>{`$\\sqrt[n]{a^m}$`}</p>
                <p>Concrete. Easy to picture for small {`$n$`}.</p>
                <p>Harder to apply laws (need separate root rules).</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Fractional exponent notation</span>
                <p>{`$a^{\\tfrac{m}{n}}$`}</p>
                <p>Abstract. One symbol carries both root and power.</p>
                <p>All power laws apply mechanically, no separate rules needed.</p>
              </div>
            </div>
          </>,

          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Can you prove that $\\frac{1}{101} + \\frac{1}{102} + \\cdots + \\frac{1}{200}$
              is greater than $\\frac{1}{2}$? Try a strategy before reading on.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Each of the 100 terms satisfies $\\frac{1}{k} \\geq \\frac{1}{200}$.
                So the sum $\\geq 100 \\cdot \\frac{1}{200} = \\frac{1}{2}$. Done.`}
                </p>
              </details>
            </div>

            <h2>Proving Inequalities</h2>

            <p>
              {`Use these techniques when you need to bound a sum or a power from above or below.
            The main tools are: grouping terms, comparing each term to a constant, and the
            binomial expansion.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Why does bracketing each term work? If every term sits between $L$ and $U$, and
              there are $N$ terms, then the whole sum sits between $NL$ and $NU$. This rests on
              the order axiom: adding inequalities preserves the direction. So $a_1 \\geq L$ and
              $a_2 \\geq L$ implies $a_1 + a_2 \\geq 2L$.`}
              </p>
            </div>

            <h3>Bounding a Harmonic-Type Sum</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $\\frac{1}{2} < \\frac{1}{101} + \\cdots + \\frac{1}{200} < 1$`}</span>
                <p className="lrn-step-content">
                  {`Lower bound: each of the 100 terms is $\\geq \\frac{1}{200}$,
                so the sum $\\geq 100 \\cdot \\frac{1}{200} = \\frac{1}{2}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Upper bound: each of the 100 terms is $\\leq \\frac{1}{101}$,
                so the sum $\\leq 100 \\cdot \\frac{1}{101} < 1$.`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why can we say each term is $\\geq \\frac{1}{200}$?
              State the exact inequality being used.`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`For $101 \\leq k \\leq 200$, we have $k \\leq 200$, so $\\frac{1}{k} \\geq \\frac{1}{200}$.
                Division reverses order: larger denominator means smaller fraction.`}
                </p>
              </details>
            </div>

            <h3>The Alternating Sum Identity</h3>

            <p>
              {`The two sums $\\frac{1}{101} + \\cdots + \\frac{1}{200}$ and
            $1 - \\frac{1}{2} + \\frac{1}{3} - \\cdots - \\frac{1}{200}$ are equal.
            That is not obvious. Here is the derivation.`}
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Identity: $\\frac{1}{101} + \\cdots + \\frac{1}{200} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\cdots - \\frac{1}{200}$`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Let $S = 1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots + \\frac{1}{200}$
                (the full sum from $1$ to $\\frac{1}{200}$).`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`The alternating sum is $S$ minus twice every even-index term:
                $1 - \\frac{1}{2} + \\frac{1}{3} - \\cdots - \\frac{1}{200}
                = S - 2\\left(\\frac{1}{2} + \\frac{1}{4} + \\cdots + \\frac{1}{200}\\right)$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Factor: $\\frac{1}{2} + \\frac{1}{4} + \\cdots + \\frac{1}{200}
                = \\frac{1}{2}\\left(1 + \\frac{1}{2} + \\cdots + \\frac{1}{100}\\right)$.
                So $2$ times this sum equals $1 + \\frac{1}{2} + \\cdots + \\frac{1}{100}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Subtract from $S$. The terms $1, \\frac{1}{2}, \\ldots, \\frac{1}{100}$
                cancel, leaving $\\frac{1}{101} + \\frac{1}{102} + \\cdots + \\frac{1}{200}$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>{`Proving $(1.01)^{100} \\geq 2$`}</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Method 1. Binomial expansion</span>
                <p className="lrn-step-content">
                  {`$(1.01)^{100} = \\sum_{k=0}^{100} \\binom{100}{k} (0.01)^k \\geq
                1 + \\binom{100}{1}(0.01) = 1 + 1 = 2$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Method 2. Successive squaring</span>
                <p className="lrn-step-content">
                  {`Start small and chain. $(1.01)^2 = 1.0201 > 1.02$. So $(1.01)^2 > 1.02$.`}
                </p>
                <p className="lrn-step-content">
                  {`$(1.01)^3 = (1.01)^2 \\cdot 1.01 > 1.02 \\cdot 1.01 = (1+0.02)(1+0.01)
                = 1 + 0.03 + 0.0002 > 1.03$.`}
                </p>
                <p className="lrn-step-content">
                  {`The pattern: each multiplication by $1.01$ adds at least $0.01$ to the running
                bound, because $(1 + p)(1 + 0.01) = 1 + p + 0.01 + 0.01p > 1 + p + 0.01$.
                Repeat $100$ times starting from $(1.01)^0 = 1$: $(1.01)^{100} > 1 + 1 = 2$.`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`In Method 1, why is it enough to keep only the $k=0$ and $k=1$ terms?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`All terms in the binomial expansion are non-negative (since we raise a positive
                number to a positive power). Dropping terms can only make the sum smaller.
                So the sum of all terms $\\geq$ sum of just the first two terms $= 2$.`}
                </p>
              </details>
            </div>

            <h3>Bounding the Sum of Reciprocals of Squares</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $1 + \\frac{1}{4} + \\frac{1}{9} + \\cdots + \\frac{1}{100^2} < 2$`}</span>
                <p className="lrn-step-content">
                  {`For $k \\geq 2$: $\\frac{1}{k^2} < \\frac{1}{k(k-1)} = \\frac{1}{k-1} - \\frac{1}{k}$.`}
                </p>
                <p className="lrn-step-content">
                  {`Sum from $k=2$ to $100$: $\\frac{1}{4} + \\cdots + \\frac{1}{100^2} <
                \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots +
                \\left(\\frac{1}{99} - \\frac{1}{100}\\right) = 1 - \\frac{1}{100} < 1$.`}
                </p>
                <p className="lrn-step-content">{`Add the $k=1$ term: total $< 1 + 1 = 2$.`}</p>
              </div>
            </div>

            <h3>Bounding the Harmonic Series</h3>

            <p>
              {`Group the terms of $1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots$ into blocks of
            doubling length:`}
            </p>

            <div className="lrn-eq">
              <span>
                {`$$1 + \\underbrace{\\frac{1}{2}}_{\\geq \\tfrac{1}{2}} + \\underbrace{\\frac{1}{3} + \\frac{1}{4}}_{\\geq \\tfrac{1}{2}} + \\underbrace{\\frac{1}{5} + \\cdots + \\frac{1}{8}}_{\\geq \\tfrac{1}{2}} + \\underbrace{\\frac{1}{9} + \\cdots + \\frac{1}{16}}_{\\geq \\tfrac{1}{2}} + \\cdots$$`}
              </span>
            </div>

            <p>
              {`Each block has terms $\\frac{1}{2^{k}+1}, \\frac{1}{2^{k}+2}, \\ldots, \\frac{1}{2^{k+1}}$.
            That is $2^k$ terms, each $\\geq \\frac{1}{2^{k+1}}$, so the block sums to
            $\\geq 2^k \\cdot \\frac{1}{2^{k+1}} = \\frac{1}{2}$.`}
            </p>

            <div className="lrn-insight">
              <p>
                {`The harmonic series $1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots$ grows without
              bound: adding enough blocks gives a sum larger than any fixed number.`}
              </p>
            </div>

            <h3>{`Upper Bound: $1 + \\frac{1}{2} + \\cdots + \\frac{1}{10^6} < 20$`}</h3>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Block-doubling upper bound</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Group the same way: $\\frac{1}{2}$, $\\frac{1}{3} + \\frac{1}{4}$,
                $\\frac{1}{5} + \\cdots + \\frac{1}{8}$, … The block starting at $\\frac{1}{2^k + 1}$
                contains $2^k$ terms, each $\\leq \\frac{1}{2^k + 1} < \\frac{1}{2^k}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Each block sums to $< 2^k \\cdot \\frac{1}{2^k} = 1$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Since $2^{20} > 10^6$, twenty blocks cover all terms up to $\\frac{1}{10^6}$.
                The total is $1 + (\\text{sum of blocks}) < 1 + 20 \\cdot 1 = 21$. A slightly
                tighter count gives $< 20$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>
          </>,

          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`You have a rectangle with sides $a = 4$ and $b = 9$.
              The arithmetic mean is $\\frac{4+9}{2} = 6.5$. What is the geometric mean?
              Which is larger?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$\\text{GM} = \\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$. So $\\text{AM} = 6.5 > 6 = \\text{GM}$.
                The arithmetic mean is always at least as large.`}
                </p>
              </details>
            </div>

            <h2>Arithmetic and Geometric Means</h2>

            <p>
              {`Use the arithmetic mean (AM) when you want the "balance point" of a set of
            numbers. It minimizes the sum of squared deviations. Use the geometric mean (GM)
            when you want the "multiplicative center". It minimizes the sum of squared
            log-deviations. AM appears in additive contexts; GM appears in multiplicative ones
            like compound growth.`}
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Arithmetic Mean (AM)</span>
              <div className="lrn-definition-desc">
                <p>{`For two numbers: $\\text{AM}(a, b) = \\dfrac{a + b}{2}$.`}</p>
                <p>{`For $n$ numbers: $\\text{AM} = \\dfrac{a_1 + a_2 + \\cdots + a_n}{n}$.`}</p>
                <p>
                  {`Geometrically, $\\frac{(a+b)}{2}$ is the midpoint of the segment from $a$ to $b$ on the
                number line.`}
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Why is $\\frac{(a+b)}{2}$ the midpoint? The midpoint $m$ satisfies $m - a = b - m$
              (equal distances). Solving: $2m = a + b$, so $m = \\frac{(a+b)}{2}$.`}
              </p>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Geometric Mean (GM)</span>
              <div className="lrn-definition-desc">
                <p>{`For two non-negative numbers: $\\text{GM}(a, b) = \\sqrt{ab}$.`}</p>
                <p>
                  {`For $n$ non-negative numbers: $\\text{GM} = \\sqrt[n]{a_1 a_2 \\cdots a_n}$.`}
                </p>
                <p>
                  {`Connection: $a, \\sqrt{ab}, b$ is a geometric progression each term is the
                previous one times $\\sqrt{\\frac{b}{a}}$. The middle term is the geometric mean of the
                outer two.`}
                </p>
              </div>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">{`Why we require $a, b \\geq 0$`}</span>
              <p>
                {`If $a$ and $b$ have opposite signs, then $ab < 0$ and $\\sqrt{ab}$ is undefined
              over the reals. If both are negative, $\\sqrt{ab}$ exists but it would be strange
              to call a positive number the "mean" of two negative numbers. Restricting to
              non-negative inputs avoids both problems.`}
              </p>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Squares, rectangles, and the two means</span>
              <p>
                {`A square with side $s$ has the same perimeter as an $a \\times b$ rectangle when
              $s = \\frac{(a+b)}{2}$ the arithmetic mean. A square with side $s$ has the same area as
              that rectangle when $s = \\sqrt{ab}$ the geometric mean. Two ways of asking
              "what side equalizes a square to this rectangle"; two different means.`}
              </p>
            </div>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`If AM of $1$ and $a$ is $7$, find $a$.`}</span>
                <p className="lrn-step-content">{`$\\frac{(1 + a)}{2} = 7 \\Rightarrow a = 13$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`If GM of $1$ and $a$ is $7$, find $a$.`}</span>
                <p className="lrn-step-content">{`$\\sqrt{a} = 7 \\Rightarrow a = 49$.`}</p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the AM problem give $a = 13$ while the GM problem gives $a = 49$, even
              though both means equal 7? Explain the difference in mechanism.`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`AM is the additive midpoint: $\\frac{(1 + a)}{2} = 7$ means $1 + a = 14$, so $a = 13$.
                GM is the multiplicative midpoint: $\\sqrt{1 \\cdot a} = 7$ means $a = 49$. AM
                doubles the mean and subtracts the other value. GM squares the mean and divides
                by the other value. The mean of 7 sits closer to 1 multiplicatively (it is
                $1 \\cdot 7$) but closer to the middle additively.`}
                </p>
              </details>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Arithmetic Mean</span>
                <p>{`$\\frac{(a+b)}{2}$: add and halve.`}</p>
                <p>Relates to arithmetic progressions.</p>
                <p>Midpoint on the number line.</p>
                <p>{`Always $\\geq \\text{GM}$.`}</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Geometric Mean</span>
                <p>{`$\\sqrt{ab}$: multiply and root.`}</p>
                <p>Relates to geometric progressions.</p>
                <p>Midpoint in the multiplicative sense.</p>
                <p>{`Always $\\leq \\text{AM}$.`}</p>
              </div>
            </div>
          </>,

          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`You want to maximize the product $xy$ given that $x + y = 10$ (with $x, y \\geq 0$).
              What values of $x$ and $y$ give the largest product? Guess before reading.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`By AM-GM: $\\sqrt{xy} \\leq \\frac{(x+y)}{2} = 5$, so $xy \\leq 25$.
                Equality holds when $x = y = 5$. Maximum product is 25.`}
                </p>
              </details>
            </div>

            <h2>The AM-GM Inequality</h2>

            <p>
              {`The AM-GM inequality says: for any non-negative numbers, their geometric mean is
            at most their arithmetic mean. Use it whenever you need the maximum product given
            a fixed sum, or the minimum sum given a fixed product.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Why does the inequality follow from $(a-b)^2 \\geq 0$? Squares of real numbers are
              never negative. Expand $(a-b)^2 = a^2 - 2ab + b^2 \\geq 0$. Add $2ab$ to get
              $(a+b)^2 \\geq 4ab$. Take square roots, since both sides are non-negative. You land
              at $a + b \\geq 2\\sqrt{ab}$, which is AM $\\geq$ GM.`}
              </p>
            </div>

            <div className="lrn-insight">
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\sqrt{ab} \\leq \\frac{a+b}{2} \\quad (a, b \\geq 0)$$`}</span>
              </div>
              <p>Equality holds if and only if {`$a = b$`}.</p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof of AM-GM for 2 numbers</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`For any real $a, b$: $(a - b)^2 \\geq 0$.`}
                </div>
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
                  {`Add $2ab$ to both sides: $(a+b)^2 \\geq 4ab$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Take square roots (valid since both sides are non-negative): $a + b \\geq 2\\sqrt{ab}$,
                i.e., $\\sqrt{ab} \\leq \\frac{(a+b)}{2}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">
                  {`Equality holds when $(a-b)^2 = 0$, i.e., $a = b$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`In Step 3, we "add $2ab$ to both sides". Why does this produce $(a+b)^2$?
              Check the algebra carefully.`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$a^2 + b^2 + 2ab = (a+b)^2$. This is just the perfect square formula in reverse.
                Adding $2ab$ to $a^2 + b^2$ completes the square.`}
                </p>
              </details>
            </div>

            <h3>Geometric Illustration</h3>

            <p>
              {`Place four $a \\times b$ rectangles inside an $(a+b) \\times (a+b)$ square.
            They cover area $4ab$. The square has area $(a+b)^2$.
            Since the rectangles fit inside the square, $4ab \\leq (a+b)^2$.`}
            </p>

            <div className="lrn-graph">
              <AMGMRectViz />
              <p>{`Four $a \\times b$ rectangles fit inside an $(a+b)^2$ square, proving $4ab \\leq (a+b)^2$.`}</p>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">How much space is left over?</span>
              <p>
                {`Free space $= (a+b)^2 - 4ab = a^2 + 2ab + b^2 - 4ab = a^2 - 2ab + b^2 = (a-b)^2$.
              That is the same $(a-b)^2 \\geq 0$ that drives the algebraic proof. The picture and
              the algebra meet here: the gap in the picture is exactly the slack in the
              inequality.`}
              </p>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">
                Second Geometric Proof: right-angle bisector
              </span>
              <p>
                {`Draw the bisector of a right angle. Place two right triangles with legs $a$ and
              $b$ parallel to the sides of the angle. Their areas are $\\frac{a^2}{2}$ and $\\frac{b^2}{2}$.
              Together they cover a rectangle with sides $a$ and $b$ (area $ab$).`}
              </p>
              <p>{`So $\\frac{a^2}{2} + \\frac{b^2}{2} \\geq ab$, i.e., $a^2 + b^2 \\geq 2ab$.`}</p>
              <p>
                {`To turn this into AM $\\geq$ GM directly, substitute $a \\to \\sqrt{c}$ and
              $b \\to \\sqrt{d}$ for non-negative $c, d$. Then
              $\\sqrt{c}\\cdot\\sqrt{d} \\leq \\frac{(\\sqrt{c})^2 + (\\sqrt{d})^2}{2}$, which is
              $\\sqrt{cd} \\leq \\frac{c+d}{2}$ exactly AM $\\geq$ GM.`}
              </p>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Other curves, other inequalities</span>
              <p>
                {`The same triangle trick with the curve $y = x^2$ gives triangles of areas
              $\\frac{a^3}{3}$ and $\\frac{2}{3}b^{\\tfrac{3}{2}}\\sqrt{b}$. The same containment argument yields
              $\\frac{a^3}{3} + \\frac{2b\\sqrt{b}}{3} \\geq ab$. Different curves produce
              different inequalities but the principle is one: areas of bounding regions
              dominate the area of what they contain.`}
              </p>
            </div>

            <h3>AM-GM for n Numbers</h3>

            <div className="lrn-insight">
              <div className="lrn-eq">
                <span>{`$$\\sqrt[n]{a_1 a_2 \\cdots a_n} \\leq \\frac{a_1 + a_2 + \\cdots + a_n}{n}$$`}</span>
              </div>
              <p>For non-negative {`$a_1, \\ldots, a_n$`}. Equality iff all are equal.</p>
            </div>

            <h3>Proving AM-GM for Powers of 2</h3>

            <p>
              {`Strategy: keep the sum (and so the AM) fixed; show that adjusting the numbers
            toward equal values never decreases the product. Repeat until all numbers are
            equal at which point GM = AM. So the original GM was at most the original AM.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`$n = 4$. Pair-balancing (Steiner symmetrization)`}</span>
                <p className="lrn-step-content">
                  {`Step 1. Replace $a_1, a_2$ by two copies of their AM $m_{12} = \\frac{(a_1+a_2)}{2}$.
                Sum stays the same. Product changes from $a_1 a_2 a_3 a_4$ to
                $m_{12}^2 a_3 a_4$. Because $m_{12}^2 \\geq a_1 a_2$ (the $n=2$ result), the
                product does not decrease.`}
                </p>
                <p className="lrn-step-content">
                  {`Step 2. Do the same with $a_3, a_4$: replace both by $m_{34} = \\frac{(a_3+a_4)}{2}$.
                Again sum stays put, product does not decrease.`}
                </p>
                <p className="lrn-step-content">
                  {`Step 3. Now replace $m_{12}, m_{12}, m_{34}, m_{34}$ by four copies of their
                common AM, which equals $\\frac{S}{4}$ where $S = a_1+a_2+a_3+a_4$. Sum unchanged,
                product not decreased.`}
                </p>
                <p className="lrn-step-content">
                  {`Final product is $(\\frac{S}{4})^4$. Original product was $a_1 a_2 a_3 a_4$. Since the
                product only grew, $a_1 a_2 a_3 a_4 \\leq (\\frac{S}{4})^4$. Take 4th roots:
                $\\sqrt[4]{a_1 a_2 a_3 a_4} \\leq \\frac{S}{4} = \\text{AM}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`$n = 8$`}</span>
                <p className="lrn-step-content">
                  {`Apply the same idea: balance pairs, then balance quadruples, then balance the
                two halves. Three rounds of balancing flatten all eight values to $\\frac{S}{8}$ without
                decreasing the product. So $\\sqrt[8]{a_1 \\cdots a_8} \\leq \\frac{S}{8}$. The same
                doubling argument extends to any $n = 2^k$.`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`In the $n=4$ proof, why is the final step, applying AM-GM to the two square
              roots, valid? What are the "two numbers" in this application?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`The two numbers are $u = \\sqrt{a_1 a_2}$ and $v = \\sqrt{a_3 a_4}$.
                They are non-negative, so AM-GM applies: $\\sqrt{uv} \\leq \\frac{(u+v)}{2}$.
                Note $\\sqrt{uv} = (a_1 a_2 a_3 a_4)^{\\tfrac{1}{4}}$ and $\\frac{(u+v)}{2} \\leq \\frac{(a_1+a_2+a_3+a_4)}{4}$
                by the two inequalities from the first step.`}
                </p>
              </details>
            </div>

            <h3>Proving AM-GM for n = 3</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Method. Reduce to n = 4</span>
                <p className="lrn-step-content">
                  {`Given $a_1, a_2, a_3 \\geq 0$, let $g = \\sqrt[3]{a_1 a_2 a_3}$.
                Set $a_4 = g$ and apply AM-GM for $n=4$:
                $\\sqrt[4]{a_1 a_2 a_3 \\cdot g} \\leq \\frac{a_1+a_2+a_3+g}{4}$.`}
                </p>
                <p className="lrn-step-content">
                  {`The left side: $\\sqrt[4]{a_1 a_2 a_3 \\cdot g} = \\sqrt[4]{g^3 \\cdot g} = g$.`}
                </p>
                <p className="lrn-step-content">
                  {`So $g \\leq \\frac{a_1+a_2+a_3+g}{4}$, giving $4g \\leq a_1+a_2+a_3+g$,
                hence $3g \\leq a_1+a_2+a_3$, i.e., $g \\leq \\frac{a_1+a_2+a_3}{3}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Algebraic identity proof for n = 3</span>
              <p>
                {`There is a direct algebraic proof using the identity:
              $a^3 + b^3 + c^3 - 3abc = \\tfrac{1}{2}(a+b+c)\\bigl((a-b)^2 + (b-c)^2 + (a-c)^2\\bigr)$.`}
              </p>
              <p>
                {`Since the right side is $\\geq 0$, we get $a^3 + b^3 + c^3 \\geq 3abc$.
              Substituting $a = \\sqrt[3]{a_1}$, $b = \\sqrt[3]{a_2}$, $c = \\sqrt[3]{a_3}$
              gives AM-GM for $n=3$.`}
              </p>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">n=4 proof (pair-balancing)</span>
                <p>Works directly for powers of 2.</p>
                <p>Each step applies AM-GM to a pair.</p>
                <p>Cannot handle odd n directly.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">n=3 proof (reduce-to-n=4)</span>
                <p>Adds the geometric mean as a fourth number.</p>
                <p>Requires canceling the extra term at the end.</p>
                <p>Generalizes: to prove for n=7, use n=8 similarly.</p>
              </div>
            </div>

            <h3>From n = 4 down to n = 7 and n = 6</h3>

            <p>
              {`The trick used for $n=3$ works for any $n$. Reduce upward to the next power of $2$
            by appending copies of the geometric mean, then apply the known result there.`}
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`$n = 7$, from $n = 8$`}</span>
                <p className="lrn-step-content">
                  {`Let $g = \\sqrt[7]{a_1 \\cdots a_7}$. Form the eight-number list
                $(a_1, \\ldots, a_7, g)$. Its product is $g^7 \\cdot g = g^8$, so its GM is $g$.
                Apply AM-GM for $n=8$: $g \\leq \\frac{a_1 + \\cdots + a_7 + g}{8}$.
                Multiply: $8g \\leq a_1 + \\cdots + a_7 + g$, so $7g \\leq a_1 + \\cdots + a_7$,
                i.e., $g \\leq \\frac{a_1 + \\cdots + a_7}{7}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`$n = 6$, from $n = 8$`}</span>
                <p className="lrn-step-content">
                  {`Same idea, append $g = \\sqrt[6]{a_1 \\cdots a_6}$ twice to reach eight numbers.
                The product is $g^6 \\cdot g^2 = g^8$, GM is $g$. AM-GM for $n=8$ gives
                $g \\leq \\frac{a_1 + \\cdots + a_6 + 2g}{8}$, so $6g \\leq a_1 + \\cdots + a_6$.`}
                </p>
              </div>
            </div>

            <h3>AM-GM for All n</h3>

            <p>
              {`The general proof strategy: first prove for all powers of $2$ (by pair-balancing),
            then for any $n$ reduce to the next higher power of $2$ by appending $g$ (the
            geometric mean) enough times. Equality drops out everywhere: it holds in AM-GM only
            when all numbers are equal.`}
            </p>

            <h3>Alternative Proof: reduce to mean equal to 1</h3>

            <p>
              {`Multiplying every $a_i$ by the same constant $c > 0$ multiplies both AM and GM by
            $c$. So we can scale and assume AM $= 1$, i.e. $a_1 + \\cdots + a_n = n$. The claim
            becomes: $a_1 \\cdots a_n \\leq 1$.`}
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">{`Induction on $n$ given AM $= 1$`}</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Base case $n = 2$. Sum $= 2$, so write $a_1 = 1 + h$, $a_2 = 1 - h$. Product
                $= 1 - h^2 \\leq 1$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Inductive step. If all $a_i = 1$, the product is $1$. Otherwise, some $a_i > 1$
                and some $a_j < 1$. Pick $a < 1 < b$. Note $(a - 1)(b - 1) \\leq 0$, which
                expands to $ab + 1 \\leq a + b$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Replace the pair $a, b$ in the list by the single number $ab$. The remaining
                $n - 1$ numbers are $ab$ together with the other $n - 2$ values; their sum is
                $ab + (n - 2 \\text{ others}) \\leq a + b - 1 + (\\text{rest}) = n - 1$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`By the induction hypothesis for $n - 1$ numbers with sum $\\leq n - 1$, their
                product is $\\leq 1$. But that product equals the original product
                $a_1 \\cdots a_n$. So $a_1 \\cdots a_n \\leq 1$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Gap in "maximum product" argument</span>
              <p>
                {`We sometimes argue: "the maximum of the product exists because the product
              is bounded above." But why does a maximum actually exist? For a finite closed
              interval this follows from calculus. Without that tool, the existence of the
              maximum is an assumption, not a proof.`}
              </p>
            </div>
          </>,

          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`You have 120 m of fence. You want to enclose a rectangle.
              What shape maximizes the enclosed area? Guess before reading.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`A square: side $= \\frac{120}{4} = 30$ m, area $= 900$ m². Any other rectangle has
                smaller area by AM-GM.`}
                </p>
              </details>
            </div>

            <h2>Optimization via AM-GM</h2>

            <p>
              {`Use AM-GM when you need the maximum product with a fixed sum, or the minimum sum
            with a fixed product. The key template: set AM equal to a constant, then use
            AM ≥ GM to bound the product.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Equality $\\sqrt{ab} = \\frac{(a+b)}{2}$ holds only when $a = b$. So if the sum is fixed
              at $c$, the product hits the upper bound $\\frac{c^2}{4}$ exactly when $a = b = \\frac{c}{2}$, and
              not just in the limit. That is what makes AM-GM a working optimization tool
              instead of just an inequality.`}
              </p>
            </div>

            <h3>Max Product with Fixed Sum, Min Sum with Fixed Product</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Max $xy$ given $x + y = c$, $x, y \\geq 0$`}</span>
                <p className="lrn-step-content">
                  {`AM-GM: $\\sqrt{xy} \\leq \\frac{x+y}{2} = \\frac{c}{2}$.
                So $xy \\leq \\frac{c^2}{4}$. Equality when $x = y = \\frac{c}{2}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Min $xy$ given $x + y = c$, $x, y \\geq 0$`}</span>
                <p className="lrn-step-content">
                  {`Minimum is $0$, reached when one of $x, y$ is $0$ and the other is $c$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Min sum $x + y$ given $xy = c > 0$`}</span>
                <p className="lrn-step-content">
                  {`AM-GM: $\\frac{x+y}{2} \\geq \\sqrt{xy} = \\sqrt{c}$, so $x + y \\geq 2\\sqrt{c}$.
                Equality when $x = y = \\sqrt{c}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Max sum $x + y$ given $xy = c > 0$`}</span>
                <p className="lrn-step-content">
                  {`There is no maximum. Take $x$ very large and $y = \\frac{c}{x}$ very small;
                $x + y$ can be made arbitrarily large.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Min sum $a + b$ given $ab^2 = 1$`}</span>
                <p className="lrn-step-content">
                  {`Write $a + b = \\frac{a}{2} + \\frac{a}{2} + b$.
                AM-GM for 3 terms: $\\frac{\\frac{a}{2} + \\frac{a}{2} + b}{3} \\geq \\sqrt[3]{\\frac{a}{2} \\cdot \\frac{a}{2} \\cdot b} = \\sqrt[3]{\\frac{a^2 b}{4}} = \\sqrt[3]{\\frac{1}{4}}$.`}
                </p>
                <p className="lrn-step-content">
                  {`So $a + b \\geq 3\\sqrt[3]{\\frac{1}{4}} = \\frac{3}{\\sqrt[3]{4}}$.
                Equality when $\\frac{a}{2} = b$, combined with $ab^2 = 1$.`}
                </p>
              </div>
            </div>

            <h3>Fence Problems</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Rectangle enclosed by 120 m of fence</span>
                <p className="lrn-step-content">
                  {`Let sides be $x$ and $y$ with $2x + 2y = 120$, so $x + y = 60$.
                Area $= xy \\leq \\left(\\frac{x+y}{2}\\right)^2 = 900$.
                Max area is 900 m², achieved at $x = y = 30$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Rectangle along a sea shore (one side free)</span>
                <p className="lrn-step-content">
                  {`Three sides of fence: $x + 2y = 120$ where $x$ is the side along the water.
                Area $= xy = \\frac{(120 - 2y) \\cdot y}{1}$.
                Write as: $(x)(2y) \\leq \\left(\\frac{x + 2y}{2}\\right)^2 = 3600$.
                So $xy \\leq 1800$, with equality when $x = 2y = 60$, i.e., $y = 30$, $x = 60$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Max $ab$ if $a + 2b = 3$`}</span>
                <p className="lrn-step-content">
                  {`Write $a + 2b = (a)(2b) + \\ldots$. Use AM-GM on $a$ and $2b$:
                $\\frac{a + 2b}{2} \\geq \\sqrt{a \\cdot 2b}$, so $\\frac{3}{2} \\geq \\sqrt{2ab}$,
                giving $2ab \\leq \\frac{9}{4}$, i.e., $ab \\leq \\frac{9}{8}$.
                Equality when $a = 2b$, combined with $a + 2b = 3$: $a = \\frac{3}{2}$, $b = \\frac{3}{4}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`In the sea-shore fence problem, we applied AM-GM to $x$ and $2y$ rather than
              $x$ and $y$. Why did we use $2y$ instead of $y$?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`The constraint is $x + 2y = 120$. AM-GM requires knowing the sum of the two terms.
                If we apply AM-GM to $x$ and $2y$, their sum is exactly 120. Then the product of
                the AM-GM terms is $x \\cdot 2y = 2xy$. Dividing by 2 gives us the area $xy$.`}
                </p>
              </details>
            </div>

            <h3>Weighted AM-GM Applications</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $\\sqrt[3]{ab^2} \\leq \\frac{a + 2b}{3}$`}</span>
                <p className="lrn-step-content">
                  {`Apply AM-GM to three numbers $a, b, b$:
                $\\frac{a + b + b}{3} \\geq \\sqrt[3]{a \\cdot b \\cdot b} = \\sqrt[3]{ab^2}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $\\sqrt[6]{a} \\cdot \\sqrt[3]{b} \\cdot \\sqrt{c} \\leq \\frac{a + 2b + 3c}{6}$`}</span>
                <p className="lrn-step-content">
                  {`Apply AM-GM to six numbers: $a, b, b, c, c, c$.
                Their mean is $\\frac{a+2b+3c}{6}$.
                Their product is $a \\cdot b^2 \\cdot c^3$, so their geometric mean is
                $\\sqrt[6]{ab^2 c^3} = a^{\\tfrac{1}{6}} b^{\\tfrac{2}{6}} c^{\\tfrac{3}{6}} = \\sqrt[6]{a}\\sqrt[3]{b}\\sqrt{c}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $(1 + \\frac{1}{10})^{10} < (1 + \\frac{1}{11})^{11}$`}</span>
                <p className="lrn-step-content">
                  {`The sequence $(1 + \\frac{1}{n})^n$ is strictly increasing. To prove it, apply AM-GM
                to $n+1$ numbers: $n$ copies of $(1+\\frac{1}{n})$ and one copy of $1$.
                Their AM is $\\frac{n(1+\\frac{1}{n})+1}{n+1} = 1 + \\frac{1}{n+1}$.
                AM $>$ GM (strict, since the numbers are not all equal) gives
                $\\left(1 + \\frac{1}{n+1}\\right)^{n+1} > \\left(1+\\frac{1}{n}\\right)^n \\cdot 1$.
                Setting $n = 10$ gives $(1 + \\frac{1}{11})^{11} > (1 + \\frac{1}{10})^{10}$.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $(1 + \\frac{1}{10})^{11} > (1 + \\frac{1}{11})^{12}$`}</span>
                <p className="lrn-step-content">
                  {`Mirror trick. Apply AM-GM to $n+2$ numbers: one copy of $1$ and $n+1$ copies
                of $\\frac{n}{n+1}$. Sum is $1 + (n+1)\\cdot\\frac{n}{n+1} = n+1$, so AM is
                $\\frac{n+1}{n+2}$. Product is $\\left(\\frac{n}{n+1}\\right)^{n+1}$.`}
                </p>
                <p className="lrn-step-content">
                  {`GM $\\leq$ AM (strict, since the numbers are not all equal):
                $\\left(\\frac{n}{n+1}\\right)^{\\tfrac{(n+1)}{(n+2)}} < \\frac{n+1}{n+2}$.
                Raise both sides to the $(n+2)$-th power, then take reciprocals (flipping the
                inequality direction): $\\left(\\frac{n+1}{n}\\right)^{n+1} > \\left(\\frac{n+2}{n+1}\\right)^{n+2}$.
                Setting $n = 10$ gives $(1+\\frac{1}{10})^{11} > (1+\\frac{1}{11})^{12}$.
                So the sequence $(1+\\frac{1}{n})^{n+1}$ is strictly decreasing.`}
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Putting the four numbers in order</span>
                <p className="lrn-step-content">
                  {`From the two results above:
                $(1+\\frac{1}{10})^{10} < (1+\\frac{1}{11})^{11} < (1+\\frac{1}{11})^{12} < (1+\\frac{1}{10})^{11}$.
                Each step uses one of the two monotonicity directions.`}
                </p>
              </div>
            </div>

            <h3>Cyclic Inequality</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Prove $\\frac{a_1}{a_2} + \\frac{a_2}{a_3} + \\cdots + \\frac{a_n}{a_1} \\geq n$ for positive numbers`}</span>
                <p className="lrn-step-content">
                  {`Apply AM-GM to the $n$ terms. Their product is
                $\\frac{a_1}{a_2} \\cdot \\frac{a_2}{a_3} \\cdots \\frac{a_n}{a_1} = 1$.
                So $\\text{GM} = 1$ and $\\text{AM} \\geq 1$, giving the sum $\\geq n \\cdot 1 = n$.`}
                </p>
              </div>
            </div>
          </>,

          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`For $a = 1$ and $b = 3$: AM $= 2$ and QM $= \\sqrt{\\frac{(1+9)}{2}} = \\sqrt{5} \\approx 2.24$.
              Which is larger? Now try to predict the general inequality before reading.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`QM $\\geq$ AM always. Here QM $\\approx 2.24 > 2 =$ AM. The quadratic mean
                weights large values more heavily by squaring before averaging.`}
                </p>
              </details>
            </div>

            <h2>The Quadratic Mean</h2>

            <p>
              {`Use the quadratic mean (QM, also called the root-mean-square or RMS) when you need
            a mean that is sensitive to large values, for example, in physics when computing
            the effective amplitude of an oscillating signal.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Why is QM always at least AM? Squaring amplifies large values more than small
              ones. So averaging the squares before taking a root gives extra weight to the
              bigger inputs. The chord-above-curve argument on $y = x^2$ makes this geometric:
              the curve is convex, so its midpoint sits below the chord midpoint.`}
              </p>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Quadratic Mean (QM)</span>
              <div className="lrn-definition-desc">
                <p>{`For two numbers: $\\text{QM}(a, b) = \\sqrt{\\dfrac{a^2 + b^2}{2}}$.`}</p>
                <p>
                  {`For $n$ numbers: $\\text{QM} = \\sqrt{\\dfrac{a_1^2 + \\cdots + a_n^2}{n}}$.`}
                </p>
              </div>
            </div>

            <div className="lrn-insight">
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\sqrt{\\frac{a^2+b^2}{2}} \\geq \\frac{a+b}{2}$$`}</span>
              </div>
              <p>Equality holds if and only if {`$a = b$`}.</p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof of QM ≥ AM</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Square both sides (valid since both sides are non-negative):
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
                  {`Simplify: $a^2 - 2ab + b^2 \\geq 0$, which is $(a-b)^2 \\geq 0$. Always true.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why is it valid to square both sides of QM $\\geq$ AM in Step 1?
              What condition is needed, and does it hold here?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`Squaring preserves order only when both sides are non-negative: if $0 \\leq A \\leq B$
                then $A^2 \\leq B^2$. Here, QM $\\geq 0$ and AM $\\geq 0$ always (since $a, b \\geq 0$),
                so squaring is valid. Proving the squared form is equivalent to proving the original.`}
                </p>
              </details>
            </div>

            <h3>Geometric Proof via Convexity</h3>

            <p>
              {`The curve $y = x^2$ is convex (bends upward). For any two points on the curve,
            the chord connecting them lies above the curve.`}
            </p>

            <div className="lrn-graph">
              <QMConvexViz />
              <p>
                {`The chord from $(a, a^2)$ to $(b, b^2)$ lies above the curve at the midpoint.
              The chord's midpoint height is $\\frac{(a^2+b^2)}{2}$; the curve at the midpoint is
              $(\\frac{(a+b)}{2})^2$. So $\\frac{(a^2+b^2)}{2} \\geq (\\frac{(a+b)}{2})^2$, i.e., QM $\\geq$ AM.`}
              </p>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Turning the graph</span>
              <p>
                {`Flipping the graph $y = x^2$ over the line $y = x$ gives $y = \\sqrt{x}$, which is
              concave (bends downward). The chord-above-curve argument flips too: the chord now
              lies below the curve. That yields $\\sqrt{\\frac{a+b}{2}} \\geq \\frac{\\sqrt{a}+\\sqrt{b}}{2}$,
              i.e., AM of $\\sqrt{a}, \\sqrt{b}$ is at most $\\sqrt{\\text{AM}(a,b)}$.`}
              </p>
            </div>

            <h3>QM ≥ AM for n Numbers</h3>

            <p>{`The same inequality holds for any number of inputs.`}</p>

            <div className="lrn-insight">
              <div className="lrn-eq">
                <span>
                  {`$$\\sqrt{\\frac{a_1^2 + a_2^2 + \\cdots + a_n^2}{n}} \\geq \\frac{a_1 + a_2 + \\cdots + a_n}{n}$$`}
                </span>
              </div>
              <p>{`Equality holds if and only if $a_1 = a_2 = \\cdots = a_n$.`}</p>
            </div>

            <p>
              {`Proof: squaring both sides gives $n(a_1^2 + \\cdots + a_n^2) \\geq (a_1 + \\cdots + a_n)^2$.
            Expand the right side; the cross-terms $2a_ia_j$ pair off against
            $a_i^2 + a_j^2 \\geq 2a_ia_j$ (which is just $(a_i - a_j)^2 \\geq 0$). Counting,
            each $a_i^2$ appears on the left $n$ times, and on the right once directly plus
            $(n-1)$ times in cross-term pairings the inequality follows.`}
            </p>

            <h3>The "Mean ≤ 1" Region</h3>

            <p>
              {`Plot the set of $(a, b)$ with $a, b \\geq 0$ where each mean is at most $1$:
            AM $\\leq 1$ is the triangle $a + b \\leq 2$; GM $\\leq 1$ is the region under
            the hyperbola $ab = 1$; QM $\\leq 1$ is the quarter-disk $a^2 + b^2 \\leq 2$.
            The bigger mean corresponds to the smaller region. The QM-region sits inside the
            AM-triangle, which sits inside the GM-region exactly mirroring
            QM $\\geq$ AM $\\geq$ GM.`}
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Quadratic Mean</span>
                <p>{`$\\sqrt{\\frac{(a^2+b^2)}{2}}$`}</p>
                <p>Squares before averaging.</p>
                <p>Always the largest of the four means.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Arithmetic Mean</span>
                <p>{`$\\frac{(a+b)}{2}$`}</p>
                <p>Averages directly.</p>
                <p>{`$\\leq$ QM always.`}</p>
              </div>
            </div>
          </>,

          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`For $a = 2$ and $b = 8$: the harmonic mean is $\\frac{2}{\\frac{1}{2} + \\frac{1}{8}} = \\frac{2 \\cdot 8}{2+8} = 3.2$.
              The geometric mean is $\\sqrt{16} = 4$. Which is larger? Predict the general pattern.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`HM $= 3.2 < 4 =$ GM always. HM $\\leq$ GM is the pattern.`}</p>
              </details>
            </div>

            <h2>The Harmonic Mean</h2>

            <p>
              {`Use the harmonic mean (HM) when averaging rates. For example, if you drive
            $d$ km at speed $a$ km/h and another $d$ km at speed $b$ km/h, your average speed
            is the harmonic mean of $a$ and $b$.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Why is HM the right mean for rates? Total time equals total distance divided by
              average speed. Each leg contributes time $\\frac{d}{a}$ or $\\frac{d}{b}$. Total time is
              $d(\\frac{1}{a} + \\frac{1}{b})$. Total distance is $2d$. The ratio gives speed
              $\\frac{2}{\\frac{1}{a} + \\frac{1}{b}} = \\frac{2ab}{a+b}$, which is exactly the harmonic mean.`}
              </p>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Harmonic Mean (HM)</span>
              <div className="lrn-definition-desc">
                <p>
                  {`For two positive numbers: $\\text{HM}(a, b) = \\dfrac{1}{\\dfrac{\\frac{1}{a} + \\frac{1}{b}}{2}} = \\dfrac{2ab}{a+b}$.`}
                </p>
                <p>
                  {`Equivalently, HM is the reciprocal of the arithmetic mean of the reciprocals.`}
                </p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof of HM ≤ GM</span>
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
                  {`Take reciprocals (reversing the inequality):
                $\\frac{2}{\\frac{1}{a}+\\frac{1}{b}} \\leq \\frac{1}{\\sqrt{\\frac{1}{(ab)}}} = \\sqrt{ab}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`The left side is exactly HM$(a,b)$, and the right side is GM$(a,b)$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`In Step 2, taking reciprocals reverses the inequality. Why does that happen?
              What is the general rule about reciprocals and order?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`For positive numbers: if $A \\leq B$ then $\\frac{1}{A} \\geq \\frac{1}{B}$.
                Intuitively, a larger denominator means a smaller fraction. Algebraically:
                multiply both sides of $A \\leq B$ by $\\frac{1}{AB} > 0$ to get $\\frac{1}{B} \\leq \\frac{1}{A}$.`}
                </p>
              </details>
            </div>

            <h3>The Full Chain of Means</h3>

            <div className="lrn-insight">
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\text{HM} \\leq \\text{GM} \\leq \\text{AM} \\leq \\text{QM}$$`}</span>
              </div>
              <p>
                {`For any two positive numbers $a, b$:
              $\\dfrac{2ab}{a+b} \\leq \\sqrt{ab} \\leq \\dfrac{a+b}{2} \\leq \\sqrt{\\dfrac{a^2+b^2}{2}}$.`}
              </p>
              <p>Equality throughout if and only if {`$a = b$`}.</p>
            </div>

            <div className="lrn-graph">
              <MeanChainViz />
              <p>{`The four means for $a=1, b=9$: HM $= 1.8$, GM $= 3$, AM $= 5$, QM $\\approx 6.4$.`}</p>
            </div>

            <h3>Cauchy-Schwarz Inequality</h3>

            <p>
              {`The Cauchy-Schwarz inequality bounds a dot product by the product of magnitudes.
            Use it whenever a sum $\\sum p_i q_i$ must be compared with $\\sum p_i^2$ and
            $\\sum q_i^2$ for example, to prove the sum-product inequality below.`}
            </p>

            <div className="lrn-insight">
              <div className="lrn-eq">
                <span>{`$$(p_1 q_1 + \\cdots + p_n q_n)^2 \\leq (p_1^2 + \\cdots + p_n^2)(q_1^2 + \\cdots + q_n^2)$$`}</span>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof of Cauchy-Schwarz via discriminant</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Let $f(t) = \\sum_{i=1}^n (p_i t + q_i)^2 \\geq 0$ for all real $t$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Expand: $f(t) = (\\sum p_i^2)t^2 + 2(\\sum p_i q_i)t + \\sum q_i^2$.
                This is a non-negative quadratic in $t$, so its discriminant is $\\leq 0$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Discriminant $\\leq 0$:
                $4(\\sum p_i q_i)^2 - 4(\\sum p_i^2)(\\sum q_i^2) \\leq 0$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Divide by 4: $(\\sum p_i q_i)^2 \\leq (\\sum p_i^2)(\\sum q_i^2)$.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`In Step 2, we say "a non-negative quadratic has non-positive discriminant."
              Why is that true? Think about what the discriminant tells us about roots.`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`A quadratic $At^2 + Bt + C$ with $A > 0$ is non-negative for all $t$ if and only
                if it has no real roots or one repeated root. The discriminant is $B^2 - 4AC$.
                No real roots means discriminant $< 0$; one repeated root means discriminant $= 0$.
                So "non-negative for all $t$" is equivalent to discriminant $\\leq 0$.`}
                </p>
              </details>
            </div>

            <h3>Sum-Product Inequality</h3>

            <div className="lrn-insight">
              <div className="lrn-eq">
                <span>{`$$(a_1 + \\cdots + a_n)\\left(\\frac{1}{a_1} + \\cdots + \\frac{1}{a_n}\\right) \\geq n^2$$`}</span>
              </div>
              <p>{`For positive numbers $a_1, \\ldots, a_n$. Equality when all $a_i$ are equal.`}</p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">
                Proof: insert the geometric mean between AM and HM
              </span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`Rewrite the claim as $\\frac{a_1 + \\cdots + a_n}{n} \\geq \\frac{n}{\\frac{1}{a_1} + \\cdots + \\frac{1}{a_n}}$.
                The left side is AM of the $a_i$. The right side is HM of the $a_i$ (the
                reciprocal of the AM of the reciprocals).`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`By AM-GM applied to $a_1, \\ldots, a_n$: $\\frac{a_1 + \\cdots + a_n}{n} \\geq \\sqrt[n]{a_1 \\cdots a_n}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`By AM-GM applied to $\\frac{1}{a_1}, \\ldots, \\frac{1}{a_n}$:
                $\\frac{\\frac{1}{a_1} + \\cdots + \\frac{1}{a_n}}{n} \\geq \\sqrt[n]{\\frac{1}{a_1 \\cdots a_n}} = \\frac{1}{\\sqrt[n]{a_1 \\cdots a_n}}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Take the reciprocal of step 3 (it flips $\\geq$ to $\\leq$): $\\frac{n}{\\frac{1}{a_1} + \\cdots + \\frac{1}{a_n}} \\leq \\sqrt[n]{a_1 \\cdots a_n}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">
                  {`Chain steps 2 and 4 through the common $\\sqrt[n]{a_1 \\cdots a_n}$:
                AM $\\geq$ GM $\\geq$ HM. So AM $\\geq$ HM, which rearranges to the claim.`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Same fact via Cauchy-Schwarz</span>
              <p>
                {`Set $p_i = \\sqrt{a_i}$ and $q_i = \\frac{1}{\\sqrt{a_i}}$ in Cauchy-Schwarz.
              Then $\\sum p_i q_i = \\sum 1 = n$, $\\sum p_i^2 = \\sum a_i$, and
              $\\sum q_i^2 = \\sum \\frac{1}{a_i}$. The inequality reads
              $n^2 \\leq (\\sum a_i)(\\sum \\frac{1}{a_i})$, which is the claim.`}
              </p>
            </div>
          </>
        ]
      },

      practice: [
        {
          q: `Which is larger: $\\sqrt[10]{2}$ or $1.2$? Show your reasoning.`,
          a: `$1.2$ is larger. Raise both to the 10th power: $(1.2)^{10} = (1 + 0.2)^{10}$. The first two binomial terms alone give $1 + 10 \\cdot 0.2 = 3 > 2$. Since all remaining terms are positive, $(1.2)^{10} > 2$. Since $x \\mapsto x^{10}$ preserves order for $x \\geq 0$, we get $1.2 > \\sqrt[10]{2}$.`
        },
        {
          q: `State the AM-GM inequality for two non-negative numbers. When does equality hold?`,
          a: `For $a, b \\geq 0$: $\\sqrt{ab} \\leq \\frac{a+b}{2}$. The geometric mean never exceeds the arithmetic mean. Equality holds if and only if $a = b$. The proof rests on $(a-b)^2 \\geq 0$, which expands to give $4ab \\leq (a+b)^2$, then take square roots.`
        },
        {
          q: `What is $a^{\\tfrac{m}{n}}$ in terms of a root and a power? Give the definition.`,
          a: `$a^{\\tfrac{m}{n}} = (\\sqrt[n]{a})^m$ for $a \\geq 0$, integer $m$, and positive integer $n$. This equals the $n$th root of $a$, then raised to the $m$th power. The definition is well-posed because reducing $\\frac{m}{n}$ to lowest terms gives the same value, a consequence of the nested root rule.`
        },
        {
          q: `Which is bigger: $\\sqrt{2}$ or $\\sqrt[3]{3}$? Justify with a calculation.`,
          a: `$\\sqrt[3]{3}$ is bigger. The LCM of 2 and 3 is 6. Raise both to the 6th power: $(\\sqrt{2})^6 = 2^3 = 8$ and $(\\sqrt[3]{3})^6 = 3^2 = 9$. Since $8 < 9$ and $x^6$ preserves order for $x \\geq 0$, we get $\\sqrt{2} < \\sqrt[3]{3}$.`
        },
        {
          q: `You have 120 m of fence. What rectangle shape maximizes area?`,
          a: `A square with side 30 m, giving area 900 m². With $2x + 2y = 120$, so $x + y = 60$. By AM-GM: $xy \\leq \\left(\\frac{x+y}{2}\\right)^2 = 900$. Equality when $x = y = 30$. Any non-square rectangle has strictly smaller area.`
        },
        {
          q: `Prove $\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$ for $a, b \\geq 0$.`,
          a: `Let $x = \\sqrt[n]{a}$ and $y = \\sqrt[n]{b}$. Then $x^n = a$ and $y^n = b$. Compute $(xy)^n = x^n y^n = ab$ using the product rule for integer powers. Since $xy \\geq 0$, by the definition of $n$th root: $xy = \\sqrt[n]{ab}$.`
        },
        {
          q: `What is the full chain of means? Write it as an inequality.`,
          a: `$\\text{HM} \\leq \\text{GM} \\leq \\text{AM} \\leq \\text{QM}$. In full: $\\frac{2ab}{a+b} \\leq \\sqrt{ab} \\leq \\frac{a+b}{2} \\leq \\sqrt{\\frac{a^2+b^2}{2}}$. Each pair of adjacent means is proved separately: HM $\\leq$ GM via AM-GM applied to reciprocals; GM $\\leq$ AM via $(a-b)^2 \\geq 0$; AM $\\leq$ QM via $(a-b)^2 \\geq 0$ again after squaring.`
        },
        {
          q: `[Transfer] In chemistry, a reaction rate doubles every 10°C rise. Starting at 20°C, what rate multiplier do you reach at 70°C? Express as a root-power, then as a decimal.`,
          a: `Temperature rises 50°C, which is 5 intervals of 10°C. Rate multiplier $= 2^5 = 32$. In root-power form: $2^{\\tfrac{50}{10}} = 2^5$. This is a direct application of rational exponents: $a^{\\tfrac{m}{n}} = (a^m)^{\\tfrac{1}{n}}$ run in reverse. The doubling law is $r(T) = 2^{\\tfrac{(T-T_0)}{10}}$, evaluated at $T - T_0 = 50$.`
        },
        {
          q: `[Transfer] A wire of length $L$ is cut into two pieces of lengths $x$ and $L - x$. You form a square from one piece and a circle from the other. Use AM-GM thinking to argue whether equal division maximizes or minimizes the total area.`,
          a: `The total area is $A(x) = \\left(\\frac{x}{4}\\right)^2 + \\pi\\left(\\frac{L-x}{2\\pi}\\right)^2 = \\frac{x^2}{16} + \\frac{(L-x)^2}{4\\pi}$. This is a sum of squared terms. Its minimum (not maximum) occurs at an interior point found by calculus. AM-GM shows products are maximized at equal values, but here we have a sum of squares, not a product, so the argument does not directly give a maximum from AM-GM.`
        },
        {
          q: `[Elaborate] Why is it true that $(1.01)^{100} \\geq 2$? Explain from first principles using the binomial theorem.`,
          a: `$(1.01)^{100} = \\sum_{k=0}^{100} \\binom{100}{k}(0.01)^k$. Every term is non-negative since $\\binom{100}{k} > 0$ and $(0.01)^k > 0$. The $k=0$ term is 1 and the $k=1$ term is $100 \\cdot 0.01 = 1$. Their sum is already 2. Dropping all remaining (non-negative) terms makes the expression smaller, so the full sum $\\geq 2$. The binomial theorem is valid because $(1 + x)^n = \\sum_{k=0}^n \\binom{n}{k} x^k$ holds for all real $x$ and non-negative integer $n$.`
        },
        {
          q: `[Elaborate] Why does AM ≥ GM hold for all non-negative numbers? Explain from first principles.`,
          a: `Start from the always-true fact $(a - b)^2 \\geq 0$. Expand: $a^2 - 2ab + b^2 \\geq 0$, so $a^2 + b^2 \\geq 2ab$. Add $2ab$: $(a+b)^2 \\geq 4ab$. Take square roots (valid since both sides are non-negative): $a + b \\geq 2\\sqrt{ab}$, i.e., $\\frac{a+b}{2} \\geq \\sqrt{ab}$. The key step is that $(a-b)^2 \\geq 0$ is true for every real number. It is a perfect square.`
        },
        {
          q: `[Predict] If $a > 1$, what happens to $a^p$ as $p$ increases? What if $0 < a < 1$?`,
          a: `If $a > 1$, then $a^p$ increases as $p$ increases: larger exponent means more multiplications by $a > 1$, making the result bigger. If $0 < a < 1$, then $a^p$ decreases: multiplying by $a < 1$ makes it smaller each time. Formally: for rational $p < q$, write $q - p = r > 0$, then $a^q = a^p \\cdot a^r$. If $a > 1$ then $a^r > 1$ so $a^q > a^p$; if $0 < a < 1$ then $a^r < 1$ so $a^q < a^p$.`
        },
        {
          q: `Prove $\\sqrt{\\frac{(a^2+b^2)}{2}} \\geq \\frac{(a+b)}{2}$ for $a, b \\geq 0$.`,
          a: `Square both sides (valid since both sides are non-negative): $\\frac{(a^2+b^2)}{2} \\geq \\frac{(a+b)^2}{4}$. Multiply by 4: $2(a^2+b^2) \\geq (a+b)^2 = a^2+2ab+b^2$. Subtract: $a^2 - 2ab + b^2 \\geq 0$, which is $(a-b)^2 \\geq 0$. Always true. Equality when $a = b$.`
        },
        {
          q: `Prove HM ≤ GM for two positive numbers $a, b$.`,
          a: `Apply AM-GM to $\\frac{1}{a}$ and $\\frac{1}{b}$: $\\frac{(\\frac{1}{a} + \\frac{1}{b})}{2} \\geq \\sqrt{\\frac{1}{(ab)}}$. Take reciprocals (reversing the inequality, valid since both sides are positive): $\\frac{2}{(\\frac{1}{a}+\\frac{1}{b})} \\leq \\frac{1}{\\sqrt{\\frac{1}{(ab)}}} = \\sqrt{ab}$. The left side is exactly $\\text{HM}(a,b) = \\frac{2ab}{a+b}$ and the right side is $\\text{GM}(a,b)$. So HM $\\leq$ GM.`
        },
        {
          q: `[Self-explain] In the AM-GM proof for $n = 3$, we added a fourth number $g = \\sqrt[3]{a_1 a_2 a_3}$ to use the $n = 4$ result. Why was $g$ chosen specifically as the geometric mean?`,
          a: `We need the product of the four numbers to equal $g^4$, so that the geometric mean of the four numbers is $g$. The product is $a_1 a_2 a_3 \\cdot g = g^3 \\cdot g = g^4$ because $g = \\sqrt[3]{a_1 a_2 a_3}$ means $g^3 = a_1 a_2 a_3$. Any other choice of fourth number would not make the geometric mean of the four numbers equal to $g$, and the final algebraic cancellation would fail.`
        },
        {
          q: `[Transfer] A rectangle has area 36 cm². Find the dimensions that minimize the perimeter.`,
          a: `Let sides be $a$ and $b$ with $ab = 36$. Perimeter $= 2(a+b)$. We want to minimize $a + b$ given $ab = 36$. By AM-GM: $\\frac{(a+b)}{2} \\geq \\sqrt{ab} = 6$, so $a + b \\geq 12$. Minimum perimeter $= 24$ cm, achieved when $a = b = 6$. This is the square, where equal sides minimize perimeter for fixed area.`
        },
        {
          q: `Prove $(p_1 q_1 + \\cdots + p_n q_n)^2 \\leq (p_1^2 + \\cdots + p_n^2)(q_1^2 + \\cdots + q_n^2)$.`,
          a: `Form $f(t) = \\sum_{i=1}^n (p_i t + q_i)^2 \\geq 0$ for all real $t$. Expand: $f(t) = (\\sum p_i^2)t^2 + 2(\\sum p_i q_i)t + \\sum q_i^2$. This non-negative quadratic in $t$ has discriminant $\\leq 0$: $4(\\sum p_i q_i)^2 - 4(\\sum p_i^2)(\\sum q_i^2) \\leq 0$. Divide by 4 to get the Cauchy-Schwarz inequality.`
        },
        {
          q: `[Transfer] You drive 60 km at 40 km/h, then another 60 km at 60 km/h. What is your average speed? Is this the AM or HM of 40 and 60?`,
          a: `Total time $= \\frac{60}{40} + \\frac{60}{60} = 1.5 + 1 = 2.5$ hours. Total distance $= 120$ km. Average speed $= \\frac{120}{2.5} = 48$ km/h. This is the harmonic mean: $\\text{HM}(40, 60) = 2 \\cdot 40 \\cdot \\frac{60}{(40+60)} = \\frac{4800}{100} = 48$. The HM is the right mean for equal-distance averaging because each segment's contribution to total time is inversely proportional to speed.`
        },
        {
          q: `[Predict] What happens to the product $a_1 a_2 \\cdots a_n$ if the sum $a_1 + \\cdots + a_n = n$ is fixed but the numbers are not all equal?`,
          a: `The product is strictly less than 1. By AM-GM: $\\sqrt[n]{a_1 \\cdots a_n} \\leq \\frac{(a_1 + \\cdots + a_n)}{n} = \\frac{n}{n} = 1$. So $a_1 \\cdots a_n \\leq 1$. Equality holds only when all $a_i$ are equal. If they are not all equal, the geometric mean is strictly less than the arithmetic mean, so the product is strictly less than 1.`
        },
        {
          q: `Find the minimum value of $a + b$ if $ab^2 = 1$, $a, b > 0$.`,
          a: `Write $a + b = \\frac{a}{2} + \\frac{a}{2} + b$. Apply AM-GM to three terms $\\frac{a}{2}, \\frac{a}{2}, b$: their mean $\\geq (\\frac{a}{2} \\cdot \\frac{a}{2} \\cdot b)^{\\tfrac{1}{3}} = (\\frac{a^2 b}{4})^{\\tfrac{1}{3}} = (\\frac{1}{4})^{\\tfrac{1}{3}}$. So $a + b = \\frac{a}{2}+\\frac{a}{2}+b \\geq 3(\\frac{1}{4})^{\\tfrac{1}{3}} = \\frac{3}{\\sqrt[3]{4}}$. Equality when $\\frac{a}{2} = b$. Combined with $ab^2 = 1$ and $a = 2b$: $2b \\cdot b^2 = 1$, so $b = (\\frac{1}{2})^{\\tfrac{1}{3}}$ and $a = 2^{\\tfrac{2}{3}}$.`
        },
        {
          q: `[Elaborate] Why is the proof technique for AM-GM for $n=3$ (reducing to $n=4$ by adding $g$) valid? What is the logical structure?`,
          a: `The argument is: assume AM-GM holds for $n=4$ (proved separately). Take any three non-negative numbers $a_1, a_2, a_3$ and let $g = \\sqrt[3]{a_1 a_2 a_3}$. Form the four-number list $(a_1, a_2, a_3, g)$. Its geometric mean is $\\sqrt[4]{a_1 a_2 a_3 g} = \\sqrt[4]{g^3 \\cdot g} = g$. Applying AM-GM for $n=4$: $g \\leq \\frac{(a_1+a_2+a_3+g)}{4}$. Rearrange to get $3g \\leq a_1+a_2+a_3$, i.e., $g \\leq \\frac{(a_1+a_2+a_3)}{3}$. No circularity: we used $n=4$ to prove $n=3$.`
        },
        {
          q: `[Transfer] A bacterial culture doubles in size every 3 hours. If it starts at 100 cells, how many cells are there after 7 hours? Use rational exponents.`,
          a: `After $t$ hours, size $= 100 \\cdot 2^{\\tfrac{t}{3}}$. At $t = 7$: $100 \\cdot 2^{\\tfrac{7}{3}} = 100 \\cdot (2^7)^{\\tfrac{1}{3}} = 100 \\cdot \\sqrt[3]{128} \\approx 100 \\cdot 5.04 \\approx 504$ cells. The exponent $\\frac{7}{3}$ is a rational power: $a^{\\tfrac{m}{n}} = (\\sqrt[n]{a})^m$. So $2^{\\tfrac{7}{3}} = \\sqrt[3]{2^7} = \\sqrt[3]{128}$. This kind of fractional exponent is needed because 7 hours is not a whole number of doubling periods.`
        },
        {
          q: `[Transfer] An engineer compares two beams: beam A is rated $\\sqrt[3]{27}$ kN, beam B is rated $\\sqrt{8}$ kN. Which beam is stronger?`,
          a: `Beam A is stronger. Compute directly: $\\sqrt[3]{27} = 3$ and $\\sqrt{8} \\approx 2.83$. So $3 > 2.83$, beam A wins. Alternatively, raise both to the 6th power (LCM of 2 and 3): $(\\sqrt[3]{27})^6 = 27^2 = 729$ and $(\\sqrt{8})^6 = 8^3 = 512$. Since $729 > 512$ and $x^6$ preserves order for $x \\geq 0$, beam A is stronger.`
        },
        {
          q: `[Transfer] In a sound mixing console, two speakers output amplitudes 6 V and 8 V. What is the RMS (quadratic mean) amplitude, which approximates the perceived loudness?`,
          a: `RMS $= \\sqrt{\\frac{(a^2 + b^2)}{2}} = \\sqrt{\\frac{(36 + 64)}{2}} = \\sqrt{50} \\approx 7.07$ V. This is the quadratic mean. The simple average would give $\\frac{(6+8)}{2} = 7$. Notice QM $\\geq$ AM as expected. RMS is the right measure for power-related quantities because power scales as amplitude squared, so we average squares first.`
        },
        {
          q: `[Transfer] A water pump delivers 10 liters/min for the first half-hour, then 30 liters/min for the second half-hour. What is the average flow rate? Is this AM or HM?`,
          a: `Total volume $= 10 \\cdot 30 + 30 \\cdot 30 = 300 + 900 = 1200$ liters. Total time $= 60$ min. Average rate $= \\frac{1200}{60} = 20$ liters/min. This is the arithmetic mean: $\\frac{(10 + 30)}{2} = 20$. AM applies here because we averaged over equal time intervals (not equal volumes). If the two rates ran for equal volumes instead, we would use HM.`
        },
        {
          q: `[Transfer] You need to bound the sum $1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots + \\frac{1}{1{,}000{,}000}$. Show it is less than 20.`,
          a: `Group terms in blocks of doubling size: $\\frac{1}{2}, \\frac{1}{3}+\\frac{1}{4}, \\frac{1}{5}+\\cdots+\\frac{1}{8}, \\ldots$. The block starting at $\\frac{1}{(2^k+1)}$ has $2^k$ terms, each $\\leq \\frac{1}{(2^k+1)} < \\frac{1}{2^k}$, so the block sums to $< 2^k \\cdot \\frac{1}{2^k} = 1$. Since $2^{20} > 10^6$, twenty blocks cover all terms up to $\\frac{1}{10^6}$. Total sum $< 1 + 20 \\cdot 1 = 21$, and a tighter count gives $< 20$. The harmonic series grows like $\\ln n$, slowly but without bound.`
        },
        {
          q: `[Transfer] You enclose a rectangle next to a river using 200 m of fence, with the river forming one side. Maximize the area.`,
          a: `Let the side parallel to the river be $x$ and each side perpendicular be $y$. Fence constraint: $x + 2y = 200$. Area $= xy$. Apply AM-GM to $x$ and $2y$: $\\sqrt{x \\cdot 2y} \\leq \\frac{(x + 2y)}{2} = 100$. So $2xy \\leq 10000$, hence $xy \\leq 5000$. Maximum area is 5000 m², achieved when $x = 2y = 100$, so $x = 100$ m and $y = 50$ m.`
        }
      ],

      reference: {
        category: 'mathematics',
        title: 'Roots, Powers and Inequalities',
        sections: [
          <>
            <h2>Core Definitions</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">{`$n$th Root`}</span>
              <div className="lrn-definition-desc">
                <p>{`$\\sqrt[n]{a}$ is the unique $x \\geq 0$ with $x^n = a$. Requires $a \\geq 0$, $n$ a positive integer.`}</p>
                <p>
                  <strong>When to use:</strong> {`reversing an $n$th power.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Fractional / Rational Exponent</span>
              <div className="lrn-definition-desc">
                <p>{`$a^{\\tfrac{1}{n}} = \\sqrt[n]{a}$, $\\quad a^{\\tfrac{m}{n}} = (\\sqrt[n]{a})^m$.`}</p>
                <p>
                  <strong>When to use:</strong> {`applying power laws without separate root rules.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Harmonic Mean (HM)</span>
              <div className="lrn-definition-desc">
                <p>{`$\\text{HM}(a, b) = \\dfrac{2ab}{a+b}$ for $a, b > 0$. Equivalently, the reciprocal of the AM of the reciprocals.`}</p>
                <p>
                  <strong>When to use:</strong>{' '}
                  {`averaging rates over equal segments (e.g., speeds over equal distances).`}
                </p>
              </div>
            </div>

            <h2>Root Properties</h2>

            <table>
              <thead>
                <tr>
                  <th>Rule</th>
                  <th>Formula</th>
                  <th>Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product</td>
                  <td>{`$\\sqrt[n]{ab} = \\sqrt[n]{a}\\sqrt[n]{b}$`}</td>
                  <td>{`$a,b \\geq 0$`}</td>
                </tr>
                <tr>
                  <td>Quotient</td>
                  <td>{`$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$`}</td>
                  <td>{`$a \\geq 0, b > 0$`}</td>
                </tr>
                <tr>
                  <td>Reciprocal</td>
                  <td>{`$\\sqrt[n]{\\frac{1}{a}} = \\frac{1}{\\sqrt[n]{a}}$`}</td>
                  <td>{`$a > 0$`}</td>
                </tr>
                <tr>
                  <td>Power of root</td>
                  <td>{`$\\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$`}</td>
                  <td>{`$a \\geq 0$`}</td>
                </tr>
                <tr>
                  <td>Nested root</td>
                  <td>{`$\\sqrt[mn]{a} = \\sqrt[m]{\\sqrt[n]{a}}$`}</td>
                  <td>{`$a \\geq 0$`}</td>
                </tr>
              </tbody>
            </table>

            <h2>Rational Power Laws</h2>

            <table>
              <thead>
                <tr>
                  <th>Law</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product</td>
                  <td>{`$a^p \\cdot a^q = a^{p+q}$`}</td>
                  <td>Combining powers of same base</td>
                </tr>
                <tr>
                  <td>Product base</td>
                  <td>{`$(ab)^{\\tfrac{m}{n}} = a^{\\tfrac{m}{n}}b^{\\tfrac{m}{n}}$`}</td>
                  <td>Splitting product into factors</td>
                </tr>
                <tr>
                  <td>Power of power</td>
                  <td>{`$(a^p)^q = a^{pq}$`}</td>
                  <td>Raising an exponent to an exponent</td>
                </tr>
              </tbody>
            </table>

            <h2>The Four Means</h2>

            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\text{HM} \\leq \\text{GM} \\leq \\text{AM} \\leq \\text{QM}$$`}</span>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Mean</th>
                  <th>Formula (2 numbers)</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Harmonic (HM)</td>
                  <td>{`$\\dfrac{2ab}{a+b}$`}</td>
                  <td>Averaging rates (e.g., speeds over equal distances)</td>
                </tr>
                <tr>
                  <td>Geometric (GM)</td>
                  <td>{`$\\sqrt{ab}$`}</td>
                  <td>Multiplicative center; compound growth rates</td>
                </tr>
                <tr>
                  <td>Arithmetic (AM)</td>
                  <td>{`$\\dfrac{a+b}{2}$`}</td>
                  <td>Balance point; additive contexts</td>
                </tr>
                <tr>
                  <td>Quadratic (QM)</td>
                  <td>{`$\\sqrt{\\dfrac{a^2+b^2}{2}}$`}</td>
                  <td>RMS; signals; penalizes large deviations</td>
                </tr>
              </tbody>
            </table>

            <h2>Key Inequalities</h2>

            <div className="lrn-insight">
              <div className="lrn-eq">
                <span>{`$$(a+b)^2 - 4ab = (a-b)^2 \\geq 0 \\quad \\text{(seed of AM-GM and QM-AM)}$$`}</span>
              </div>
              <p>
                <strong>When to use:</strong>{' '}
                {`the underlying identity behind GM $\\leq$ AM, QM $\\geq$ AM, and the geometric "four rectangles in a square" picture.`}
              </p>
            </div>

            <div className="lrn-insight">
              <div className="lrn-eq">
                <span>{`$$\\sqrt{ab} \\leq \\frac{a+b}{2} \\quad \\text{(AM-GM, 2 numbers)}$$`}</span>
              </div>
              <p>
                <strong>When to use:</strong>{' '}
                {`maximizing a product with fixed sum, or minimizing a sum with fixed product.`}
              </p>
            </div>

            <div className="lrn-insight">
              <div className="lrn-eq">
                <span>{`$$\\sqrt[n]{a_1 \\cdots a_n} \\leq \\frac{a_1 + \\cdots + a_n}{n} \\quad \\text{(AM-GM, $n$ numbers)}$$`}</span>
              </div>
              <p>
                <strong>When to use:</strong>{' '}
                {`optimization with $n$ variables; cyclic inequalities.`}
              </p>
            </div>

            <div className="lrn-insight">
              <div className="lrn-eq">
                <span>{`$$(\\textstyle\\sum p_i q_i)^2 \\leq (\\textstyle\\sum p_i^2)(\\textstyle\\sum q_i^2) \\quad \\text{(Cauchy-Schwarz)}$$`}</span>
              </div>
              <p>
                <strong>When to use:</strong>{' '}
                {`bounding a dot product; proving sum-product inequalities.`}
              </p>
            </div>

            <div className="lrn-insight">
              <div className="lrn-eq">
                <span>{`$$(a_1+\\cdots+a_n)\\left(\\tfrac{1}{a_1}+\\cdots+\\tfrac{1}{a_n}\\right) \\geq n^2$$`}</span>
              </div>
              <p>
                <strong>When to use:</strong>{' '}
                {`bounding products involving a sum and a sum of reciprocals.`}
              </p>
            </div>

            <h2>Proof Templates</h2>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Compare roots: raise to common power</span>
                <p className="lrn-step-content">{`To compare $\\sqrt[m]{a}$ and $\\sqrt[n]{b}$: raise both to the LCM of $m$ and $n$, then compare.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Bound a sum: bracket each term</span>
                <p className="lrn-step-content">{`Find constants $L \\leq \\text{each term} \\leq U$, multiply by the number of terms.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Maximize product: use AM-GM</span>
                <p className="lrn-step-content">{`Set the AM equal to the constraint, bound the GM from above, find equality condition.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">QM ≥ AM</span>
                <p className="lrn-step-content">{`Square both sides, reduce to $(a-b)^2 \\geq 0$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">HM ≤ GM</span>
                <p className="lrn-step-content">{`Apply AM-GM to $\\frac{1}{a}$ and $\\frac{1}{b}$, then take reciprocals.`}</p>
              </div>
            </div>
          </>
        ]
      },

      customCss:
        '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
    }),
    []
  )
}

export default function RootsPowersAndInequalities() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
