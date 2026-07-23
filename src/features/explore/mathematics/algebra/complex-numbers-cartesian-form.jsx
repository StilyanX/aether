import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  ArgandPointViz,
  ComplexAddViz,
  ModulusTriangleViz,
  PowersOfIViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'cnc',
    documentTitle: 'Complex Numbers (Cartesian Form) - AETHER',
    learning: {
      groupTitle: 'Complex Numbers',
      category: 'Algebra',
      title: 'Complex Numbers (Cartesian Form)',
      subtitle:
        'A complex number starts as an ordered pair, becomes $x + yi$, and comes with its own arithmetic, conjugate, modulus, and geometric picture.',
      sections: [
        <>
          <div className="lrn-header">
            <div>
              <h2>Building Complex Numbers from Ordered Pairs</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Complex number</span>
            <div className="lrn-definition-desc">
              <p>{`A complex number is an ordered pair $(x, y)$ of real numbers. The first entry $x$ and the second entry $y$ can be any real numbers, including zero or negative numbers. Two pairs $(x_1, y_1)$ and $(x_2, y_2)$ are equal only when $x_1 = x_2$ and $y_1 = y_2$.`}</p>
              <p>{`Reach for this ordered-pair view when you want to check the algebra laws. Complex numbers obey the same laws as ordinary numbers, even before any symbol $i$ appears.`}</p>
            </div>
          </div>

          <p>{`Real numbers alone cannot solve every equation. $x^2 = -1$ has no real solution, because a real number squared is never negative. Mathematicians built a bigger number system to close this gap: the complex numbers, written $\\mathbb{C}$.`}</p>

          <p>{`Start with ordered pairs of real numbers, the same kind of pair you use for a point on a graph. Define two operations on these pairs so the result still behaves like arithmetic. Addition works the way you would expect, combining each slot separately.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$(x_1, y_1) + (x_2, y_2) = (x_1 + x_2,\\ y_1 + y_2)$$`}</span>
          </div>

          <p>{`Subtraction follows the same slot-by-slot pattern: $(x_1,y_1)-(x_2,y_2)=(x_1-x_2,\\ y_1-y_2)$. This is just adding the additive opposite $(-x_2,-y_2)$.`}</p>

          <p>{`Multiplication is less obvious. Multiplying each slot separately does not build a useful number system. Instead, the rule mixes the two slots on purpose.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$(x_1, y_1) \\cdot (x_2, y_2) = (x_1 x_2 - y_1 y_2,\\ x_1 y_2 + x_2 y_1)$$`}</span>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Use the multiplication rule above to compute $(0, 1) \\cdot (0, 1)$ by hand before reading on. What ordered pair do you get?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$(0,1)\\cdot(0,1) = (0\\cdot 0 - 1\\cdot 1,\\ 0\\cdot 1 + 0\\cdot 1) = (-1, 0)$. This one pair squares to a negative result, something no real number does. It is the seed of the entire complex number system.`}</p>
            </details>
          </div>

          <p>{`These two rules make $\\mathbb{C}$ behave like a field. A field is a number system where addition and multiplication both work smoothly, with identities and inverses. The remark below covers two special cases worth noticing early.`}</p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Note</span>
            <p>{`When $y_1 = 0$, the rule becomes $(x_1, 0)\\cdot(x_2,y_2) = (x_1x_2,\\ x_1y_2)$, which scales every part of $(x_2,y_2)$ by the real number $x_1$. When $x_1 = 0$, the pair $(0, y_1)$ multiplied by $(x_2, y_2)$ gives $(-y_1y_2,\\ y_1x_2)$, a mix of scaling and the sign flip you will soon trace back to $i$.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Add and multiply $z_1 = (-5, 6)$ and $z_2 = (1, -2)$`}</span>
              <div className="lrn-step-content">
                <p>{`Addition: $z_1 + z_2 = (-5+1,\\ 6+(-2)) = (-4, 4)$.`}</p>
                <p>{`Multiplication: $z_1 \\cdot z_2 = \\big((-5)(1) - (6)(-2),\\ (-5)(-2)+(1)(6)\\big) = (-5+12,\\ 10+6) = (7, 16)$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Add and multiply $z_1 = (-\\tfrac{1}{2}, 1)$ and $z_2 = (-\\tfrac{1}{3}, \\tfrac{1}{2})$`}</span>
              <div className="lrn-step-content">
                <p>{`Addition: $z_1+z_2 = (-\\tfrac{1}{2}-\\tfrac{1}{3},\\ 1+\\tfrac{1}{2}) = (-\\tfrac{5}{6}, \\tfrac{3}{2})$.`}</p>
                <p>{`Multiplication: $z_1\\cdot z_2 = \\big((-\\tfrac12)(-\\tfrac13) - (1)(\\tfrac12),\\ (-\\tfrac12)(\\tfrac12)+(-\\tfrac13)(1)\\big) = (\\tfrac16 - \\tfrac12,\\ -\\tfrac14-\\tfrac13) = (-\\tfrac13, -\\tfrac{7}{12})$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does multiplication subtract $y_1y_2$ in the first slot instead of multiplying each slot straight across, the way addition combines each slot on its own?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The subtraction comes from the term $-y_1y_2$ in the first slot. For $(0,1)\\cdot(0,1)$, that term is $-(1)(1)=-1$, which drags the first slot negative. A straight slot-by-slot rule has no such term, so it can never produce a negative square.`}</p>
            </details>
          </div>

          <h3>Why These Rules Deserve to Be Called Arithmetic</h3>

          <p>{`Addition and multiplication of ordered pairs are not just any two rules. They satisfy the same laws real-number arithmetic satisfies: commutative (order does not matter), associative (grouping does not matter), with identities and inverses. This is what lets you compute with complex numbers exactly like you compute with real numbers.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Addition Is Commutative, Associative, and Has an Identity and Inverse
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Commutative: $(x_1,y_1)+(x_2,y_2) = (x_1+x_2,\\ y_1+y_2) = (x_2+x_1,\\ y_2+y_1) = (x_2,y_2)+(x_1,y_1)$, because real-number addition already commutes in each slot.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Associative: grouping three pairs either way adds the same three real numbers in each slot. So $\\big((x_1,y_1)+(x_2,y_2)\\big)+(x_3,y_3) = (x_1,y_1)+\\big((x_2,y_2)+(x_3,y_3)\\big)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Identity: $(0,0)$ added to any $(x,y)$ leaves it unchanged, since $(x+0,\\ y+0)=(x,y)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Inverse: $(-x,-y)$ added to $(x,y)$ gives $(0,0)$, the identity. Every pair has an additive opposite.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Multiplication Is Commutative, Associative, and Has an Identity
            </span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Commutative: $(x_1,y_1)(x_2,y_2) = (x_1x_2-y_1y_2,\\ x_1y_2+x_2y_1)$ and $(x_2,y_2)(x_1,y_1) = (x_2x_1-y_2y_1,\\ x_2y_1+x_1y_2)$ are the same pair, since real multiplication and addition already commute term by term.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Associative: expanding $\\big((x_1,y_1)(x_2,y_2)\\big)(x_3,y_3)$ and $(x_1,y_1)\\big((x_2,y_2)(x_3,y_3)\\big)$ both reduce, after collecting the real terms, to the same pair.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Identity: $(1,0)$ multiplied by any $(x,y)$ gives $(1\\cdot x - 0\\cdot y,\\ 1\\cdot y + 0\\cdot x) = (x,y)$, unchanged.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY DOES THIS MATTER?</span>
            <p>{`Every number system you already trust, like the integers or the real numbers, has these same properties. Proving $\\mathbb{C}$ has them too means every algebra trick that works on real numbers still works on complex numbers. That covers moving terms across an equals sign, factoring, and canceling. Nothing you already know has to be re-learned from scratch.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Algebraic Form x + yi</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Algebraic form</span>
            <div className="lrn-definition-desc">
              <p>{`Every complex number $(x, y)$ can be rewritten as $z = x + yi$, where $i$ stands for the pair $(0, 1)$. The real number $x$ is the real part, written $\\text{Re}(z)$. The real number $y$ is the imaginary part, written $\\text{Im}(z)$.`}</p>
              <p>{`Switch to this notation for everyday computation. Nobody keeps writing ordered pairs once $x + yi$ is available; it turns complex arithmetic into ordinary algebra with one extra rule.`}</p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Deriving x + yi from the Ordered Pair</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Split any pair into two simpler pairs: $(x, y) = (x, 0) + (0, y)$, using the addition rule.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Factor each piece using the multiplication rule: $(x, 0) = x \\cdot (1, 0)$ and $(0, y) = y \\cdot (0, 1)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Identify $(1, 0)$ with the real number $1$, since it is the multiplicative identity. Name $(0, 1)$ the imaginary unit $i$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Combine the pieces: $(x, y) = x \\cdot 1 + y \\cdot i = x + yi$. This is the algebraic form.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Square $i$: $i^2 = (0,1)\\cdot(0,1) = (0\\cdot0 - 1\\cdot1,\\ 0\\cdot1+1\\cdot0) = (-1, 0)$, the real number $-1$. So $i^2 = -1$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$i^2 = -1$$`}</span>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Before you check, predict what $i \\cdot i \\cdot i \\cdot i$ equals, using only the fact $i^2=-1$.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$i^4 = (i^2)^2 = (-1)^2 = 1$. Multiplying $i$ by itself four times returns to $1$, the starting identity.`}</p>
            </details>
          </div>

          <p>{`A number with $y = 0$, such as $x + 0i$, is just the real number $x$. A number with $x = 0$, such as $0 + yi$, written simply $yi$, is purely imaginary. Every real number is a complex number; the reverse is not true.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Identify the real and imaginary parts of four numbers`}</span>
              <div className="lrn-step-content">
                <p>{`$3 + 4i$: real part $3$, imaginary part $4$.`}</p>
                <p>{`$\\tfrac12 - \\tfrac23 i$: real part $\\tfrac12$, imaginary part $-\\tfrac23$.`}</p>
                <p>{`$6i$: real part $0$, imaginary part $6$. This is purely imaginary.`}</p>
                <p>{`$-7$: real part $-7$, imaginary part $0$. This is an ordinary real number written as a complex number.`}</p>
              </div>
            </div>
          </div>

          <h3>Adding, Subtracting, and Multiplying in This Notation</h3>

          <p>{`Once numbers are written $x+yi$, the four basic operations follow ordinary algebra rules, with $i^2=-1$ used wherever it appears.`}</p>

          <div className="lrn-eq">
            <span>{`$$(a+bi)+(c+di) = (a+c) + (b+d)i$$`}</span>
            <span>{`$$(a+bi)-(c+di) = (a-c) + (b-d)i$$`}</span>
            <span>{`$$(a+bi)(c+di) = (ac-bd) + (ad+bc)i$$`}</span>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`You never memorize this product rule. Multiply $(a+bi)(c+di)$ with the ordinary distributive law and you get $ac + (ad+bc)i + bd\\,i^2$.`}</p>
            <p>{`Now replace $i^2$ with $-1$. The last term becomes $-bd$, and the whole product collapses to $(ac-bd)+(ad+bc)i$.`}</p>
            <p>{`So the single fact $i^2=-1$ forces every complex product. The algebraic form and the ordered-pair rule are the same object.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Add, subtract, and multiply $3+5i$ and $4-2i$`}</span>
              <div className="lrn-step-content">
                <p>{`Sum: $(3+5i)+(4-2i) = (3+4)+(5-2)i = 7+3i$.`}</p>
                <p>{`Difference: $(3+5i)-(4-2i) = (3-4)+(5-(-2))i = -1+7i$.`}</p>
                <p>{`Product: $(3+5i)(4-2i) = 12 -6i+20i-10i^2$. Since $i^2=-1$, this becomes $12+14i+10 = 22+14i$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the product above, where exactly did $i^2=-1$ flip the sign of a term compared to ordinary polynomial multiplication?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The term $-10i^2$ came from $5i\\cdot(-2i)$. In ordinary polynomial algebra it would stay $-10i^2$. Because $i^2=-1$, it flips to $+10$, a real number. It then joins the real part of the answer instead of staying imaginary.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ordered-pair form</span>
              <p>{`$(x, y)$. Best for proving field properties, since every rule is spelled out with no symbol to misuse.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Algebraic form</span>
              <p>{`$x + yi$. Best for everyday computation: ordinary algebra applies, with $i^2=-1$ as the one extra rule.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Multiplicative Inverse and Dividing Complex Numbers</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiplicative inverse</span>
            <div className="lrn-definition-desc">
              <p>{`For a nonzero complex number $z = (x,y)$, the inverse $z^{-1}$ is the number satisfying $z \\cdot z^{-1} = (1,0)$, the multiplicative identity.`}</p>
              <p>{`Reach for this whenever a complex number sits in a denominator. Dividing is defined as multiplying by the inverse: $\\dfrac{z_1}{z_2} = z_1 \\cdot z_2^{-1}$.`}</p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Predict: does every nonzero complex number have an inverse, the way every nonzero real number does?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. The derivation below solves for the inverse directly and only fails when $x=y=0$, which is exactly the zero complex number.`}</p>
            </details>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Deriving the Inverse Formula</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Let $z=(x,y) \\ne (0,0)$ and search for $z^{-1}=(x', y')$ with $z\\cdot z^{-1} = (1,0)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Apply the multiplication rule: $(xx' - yy',\\ xy'+yx') = (1, 0)$. This gives a system of two real equations: $xx'-yy'=1$ and $yx'+xy'=0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Eliminate $y'$: multiply the first equation by $x$, the second by $y$, then add to get $(x^2+y^2)x'=x$. Eliminate $x'$: multiply the first by $-y$, the second by $x$, then add to get $(x^2+y^2)y'=-y$. So $x' = \\dfrac{x}{x^2+y^2}$ and $y' = \\dfrac{-y}{x^2+y^2}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Since $z \\ne (0,0)$, at least one of $x,y$ is nonzero, so $x^2+y^2 > 0$ and the division is always valid.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$z^{-1} = \\left(\\dfrac{x}{x^2+y^2},\\ \\dfrac{-y}{x^2+y^2}\\right)$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\dfrac{z_1}{z_2} = \\left(\\dfrac{x_1x_2+y_1y_2}{x_2^2+y_2^2},\\ \\dfrac{-x_1y_2+y_1x_2}{x_2^2+y_2^2}\\right)$$`}</span>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find the inverse of $z=(1,2)$`}</span>
              <div className="lrn-step-content">
                <p>{`$x^2+y^2 = 1+4=5$. So $z^{-1} = \\left(\\dfrac{1}{5},\\ \\dfrac{-2}{5}\\right)$, which is $\\dfrac{1}{5} - \\dfrac{2}{5}i$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find $\\dfrac{z_1}{z_2}$ for $z_1=(1,2)$, $z_2=(3,4)$`}</span>
              <div className="lrn-step-content">
                <p>{`$x_2^2+y_2^2 = 9+16=25$. Real part: $\\dfrac{1\\cdot3+2\\cdot4}{25} = \\dfrac{11}{25}$. Imaginary part: $\\dfrac{-1\\cdot4+2\\cdot3}{25} = \\dfrac{2}{25}$.`}</p>
                <p>{`So $\\dfrac{z_1}{z_2} = \\dfrac{11}{25} + \\dfrac{2}{25}i$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $x^2+y^2$ show up in the denominator of both the inverse and the quotient formula?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Solving the two-equation system for $x'$ and $y'$ makes you divide by the quantity $x^2+y^2$. It is always positive for a nonzero $z$, which is exactly what guarantees the inverse always exists.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`This system-solving method works, but it hides a shortcut. A later section shows the exact same formula falls out in one line once you have the complex conjugate. Both routes reach the identical answer.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Powers of the Imaginary Unit i</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Powers of i</span>
            <div className="lrn-definition-desc">
              <p>{`Every whole-number power of $i$ falls into a repeating pattern of four values: $1$, $i$, $-1$, $-i$, then back to $1$.`}</p>
              <p>{`Reach for this cycle whenever you need to simplify $i$ raised to a large power. It beats multiplying $i$ by itself one step at a time.`}</p>
            </div>
          </div>

          <p>{`Start from $i^2=-1$ and build up. $i^0=1$ by definition. $i^1=i$. $i^2=-1$, already known. $i^3 = i^2 \\cdot i = -i$. $i^4 = i^2 \\cdot i^2 = (-1)(-1) = 1$, back to the start.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Each power of $i$ is the one before it times $i$. So every value is locked to the value just behind it.`}</p>
            <p>{`Reaching $i^4=1$ lands you back on $i^0=1$, the start. The next power $i^5 = i^4\\cdot i = i$ repeats $i^1$ exactly.`}</p>
            <p>{`Once a sequence returns to an earlier value, it must loop that same short list forever. Four values are all $i$ can ever produce.`}</p>
          </div>

          <div className="lrn-graph">
            <PowersOfIViz />
          </div>

          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>Power</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$i^0$`}</td>
                  <td>{`$1$`}</td>
                </tr>
                <tr>
                  <td>{`$i^1$`}</td>
                  <td>{`$i$`}</td>
                </tr>
                <tr>
                  <td>{`$i^2$`}</td>
                  <td>{`$-1$`}</td>
                </tr>
                <tr>
                  <td>{`$i^3$`}</td>
                  <td>{`$-i$`}</td>
                </tr>
                <tr>
                  <td>{`$i^{4n}$`}</td>
                  <td>{`$1$`}</td>
                </tr>
                <tr>
                  <td>{`$i^{4n+1}$`}</td>
                  <td>{`$i$`}</td>
                </tr>
                <tr>
                  <td>{`$i^{4n+2}$`}</td>
                  <td>{`$-1$`}</td>
                </tr>
                <tr>
                  <td>{`$i^{4n+3}$`}</td>
                  <td>{`$-i$`}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Before computing, predict which of the four cycle values $i^{23}$ equals. Only the remainder of $23$ divided by $4$ matters.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$23 = 4(5)+3$, so $i^{23}=i^{4n+3}=-i$.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Evaluate $i^{105}+i^{23}+i^{20}-i^{34}$`}</span>
              <div className="lrn-step-content">
                <p>{`Divide each exponent by $4$ and keep the remainder. $105 = 4(26)+1 \\Rightarrow i^{105}=i$. $23=4(5)+3 \\Rightarrow i^{23}=-i$. $20=4(5)+0 \\Rightarrow i^{20}=1$. $34=4(8)+2 \\Rightarrow i^{34}=-1$.`}</p>
                <p>{`Combine: $i + (-i) + 1 - (-1) = i - i + 1 + 1 = 2$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does only the remainder after dividing the exponent by $4$ matter, and not the exponent itself?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Every group of four consecutive powers multiplies in an extra factor of $i^4=1$, which changes nothing. So $i^{4n+k} = (i^4)^n \\cdot i^k = 1^n \\cdot i^k = i^k$. Only the leftover $k$, the remainder, decides the value.`}</p>
            </details>
          </div>

          <h3>Using Powers to Solve an Equation</h3>

          <p>{`The same power rules let you solve equations. Suppose $z=x+yi$ has integer parts and satisfies $z^3=18+26i$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $z^3=18+26i$ for integers $x$ and $y$`}</span>
              <div className="lrn-step-content">
                <p>{`Expand the cube: $(x+yi)^3 = (x^3-3xy^2) + (3x^2y-y^3)i$. Match real and imaginary parts: $x^3-3xy^2=18$ and $3x^2y-y^3=26$.`}</p>
                <p>{`Set $y=tx$ to link the two equations. This gives $18(3t-t^3)=26(1-3t^2)$, which factors as $(3t-1)(3t^2-12t-13)=0$.`}</p>
                <p>{`The only rational solution is $t=\\tfrac13$, so $y=\\tfrac13 x$. Substituting back gives $x=3$ and $y=1$, so $z=3+i$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the substitution $y=tx$ turn two equations into one equation in $t$ alone?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Both equations become a power of $x$ times a polynomial in $t$. Dividing one equation by the other cancels every $x$ factor. That leaves a single equation in the ratio $t=\\dfrac{y}{x}$.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Complex Conjugate</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Complex conjugate</span>
            <div className="lrn-definition-desc">
              <p>{`The conjugate of $z = x+yi$ is $\\bar z = x - yi$: same real part, imaginary part flipped in sign.`}</p>
              <p>{`Reach for the conjugate whenever you need to turn a complex expression into a real one. A common use is clearing a complex number out of a denominator.`}</p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Predict: is $z \\cdot \\bar z$ always a real number, for every complex $z$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. $z\\bar z = (x+yi)(x-yi) = x^2 - (yi)^2 = x^2+y^2$, a sum of two real squares, always real and never negative.`}</p>
            </details>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\text{Re}(z) = \\dfrac{z+\\bar z}{2}, \\qquad \\text{Im}(z) = \\dfrac{z-\\bar z}{2i}$$`}</span>
          </div>

          <p>{`These two identities recover the real and imaginary parts directly from $z$ and its conjugate, without reading them off by inspection. Check the first: $z+\\bar z = (x+yi)+(x-yi) = 2x$, so dividing by $2$ gives $x=\\text{Re}(z)$. Check the second: $z-\\bar z = (x+yi)-(x-yi) = 2yi$, so dividing by $2i$ gives $y=\\text{Im}(z)$.`}</p>

          <h3>The Eight Algebraic Properties</h3>

          <p>{`The conjugate obeys a short list of properties. Two are proved fully below; the rest follow the same pattern of writing everything in $x+yi$ form and comparing real and imaginary parts.`}</p>

          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Statement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`1`}</td>
                  <td>{`$\\overline{\\overline{z}} = z$`}</td>
                </tr>
                <tr>
                  <td>{`2`}</td>
                  <td>{`$\\overline{z_1+z_2} = \\overline{z_1}+\\overline{z_2}$`}</td>
                </tr>
                <tr>
                  <td>{`3`}</td>
                  <td>{`$\\overline{z_1 z_2} = \\overline{z_1}\\ \\overline{z_2}$`}</td>
                </tr>
                <tr>
                  <td>{`4`}</td>
                  <td>{`$\\overline{\\left(\\dfrac{z_1}{z_2}\\right)} = \\dfrac{\\overline{z_1}}{\\overline{z_2}}$, for $z_2 \\ne 0$`}</td>
                </tr>
                <tr>
                  <td>{`5`}</td>
                  <td>{`$z+\\bar z = 2\\,\\text{Re}(z)$`}</td>
                </tr>
                <tr>
                  <td>{`6`}</td>
                  <td>{`$z-\\bar z = 2i\\,\\text{Im}(z)$`}</td>
                </tr>
                <tr>
                  <td>{`7`}</td>
                  <td>{`$z \\bar z = x^2+y^2 \\ge 0$, with equality only when $z=0$`}</td>
                </tr>
                <tr>
                  <td>{`8`}</td>
                  <td>{`$z$ is real exactly when $z=\\bar z$; $z$ is purely imaginary exactly when $z=-\\bar z$ (and $z \\ne 0$)`}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proving Property 2 and Property 3</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Write $z_1=x_1+y_1i$, $z_2=x_2+y_2i$. Then $z_1+z_2=(x_1+x_2)+(y_1+y_2)i$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Conjugate the sum: $\\overline{z_1+z_2} = (x_1+x_2)-(y_1+y_2)i$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Compute $\\overline{z_1}+\\overline{z_2} = (x_1-y_1i)+(x_2-y_2i) = (x_1+x_2)-(y_1+y_2)i$, the same expression. Property 2 holds.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`For property 3, expand $z_1z_2=(x_1x_2-y_1y_2)+(x_1y_2+x_2y_1)i$, so $\\overline{z_1z_2}=(x_1x_2-y_1y_2)-(x_1y_2+x_2y_1)i$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Compute $\\overline{z_1}\\ \\overline{z_2}=(x_1-y_1i)(x_2-y_2i) = (x_1x_2-y_1y_2) - (x_1y_2+x_2y_1)i$, again the same expression. Property 3 holds.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Extending to more terms</span>
            <p>{`Property 2 and property 3 extend from two numbers to any list of $n$ numbers by repeating the two-term case: $\\overline{z_1+z_2+\\cdots+z_n}=\\overline{z_1}+\\overline{z_2}+\\cdots+\\overline{z_n}$, and $\\overline{z_1z_2\\cdots z_n}=\\overline{z_1}\\ \\overline{z_2}\\cdots\\overline{z_n}$. Applying property 3 with every factor equal to $z$ also gives $\\overline{z^n}=(\\bar z)^n$.`}</p>
          </div>

          <h3>Using the Conjugate to Divide</h3>

          <p>{`You can reach the inverse formula from before in one line using the conjugate, instead of solving a two-equation system.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">The Conjugate Shortcut for Division</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Multiply the top and bottom of $\\dfrac{1}{z}$ by $\\bar z$: $\\dfrac{1}{z} = \\dfrac{\\bar z}{z\\bar z}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`By property 7, $z\\bar z = x^2+y^2$, a real number. So $\\dfrac{1}{z} = \\dfrac{x-yi}{x^2+y^2} = \\dfrac{x}{x^2+y^2} - \\dfrac{y}{x^2+y^2}i$, matching the earlier system-solving result exactly.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`The same idea gives any quotient: $\\dfrac{z_1}{z_2} = \\dfrac{z_1 \\overline{z_2}}{z_2\\overline{z_2}} = \\dfrac{z_1\\overline{z_2}}{x_2^2+y_2^2}$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">System-solving method</span>
              <p>{`Solve $xx'-yy'=1$, $yx'+xy'=0$ directly. Shows exactly why the inverse always exists, but takes several lines.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Conjugate method</span>
              <p>{`Multiply by $\\dfrac{\\bar z}{\\bar z}$. One line, and it is the method you use in practice.`}</p>
            </div>
          </div>

          <div className="lrn-eq">
            <span>{`$$\\dfrac{a+bi}{c+di} = \\dfrac{(ac+bd)+(bc-ad)i}{c^2+d^2}$$`}</span>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Divide $3+5i$ by $1-2i$`}</span>
              <div className="lrn-step-content">
                <p>{`Multiply top and bottom by the conjugate $1+2i$: $\\dfrac{(3+5i)(1+2i)}{(1-2i)(1+2i)} = \\dfrac{3+6i+5i+10i^2}{1+4} = \\dfrac{-7+11i}{5}$.`}</p>
                <p>{`So $\\dfrac{3+5i}{1-2i} = -\\dfrac{7}{5}+\\dfrac{11}{5}i$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Divide $7+3i$ by $4i$`}</span>
              <div className="lrn-step-content">
                <p>{`Multiply top and bottom by the conjugate of $4i$, which is $-4i$: $\\dfrac{(7+3i)(-4i)}{(4i)(-4i)} = \\dfrac{-28i-12i^2}{16} = \\dfrac{12-28i}{16}$.`}</p>
                <p>{`So $\\dfrac{7+3i}{4i} = \\dfrac{3}{4}-\\dfrac{7}{4}i$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does multiplying top and bottom by the conjugate always remove $i$ from the denominator?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The denominator becomes $z\\bar z$, and property 7 guarantees $z\\bar z = x^2+y^2$ is always a real number. Dividing by a real number never reintroduces $i$ into the denominator.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Conjugation only flips the sign of the imaginary part. Addition and multiplication combine the real and imaginary parts by fixed rules.`}</p>
            <p>{`So flipping every sign first, then combining, matches combining first, then flipping. That is exactly why $\\overline{z_1+z_2}=\\bar z_1+\\bar z_2$ and $\\overline{z_1z_2}=\\bar z_1\\,\\bar z_2$.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Modulus of a Complex Number</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Modulus</span>
            <div className="lrn-definition-desc">
              <p>{`The modulus of $z=x+yi$ is $|z| = \\sqrt{x^2+y^2}$, always a nonnegative real number.`}</p>
              <p>{`Reach for the modulus whenever you need a single real number measuring the size of a complex number. It helps you compare two complex numbers or bound an expression.`}</p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Predict: is $|z_1+z_2|$ always equal to $|z_1|+|z_2|$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No, only sometimes. The triangle inequality below shows $|z_1+z_2|$ can never exceed $|z_1|+|z_2|$, but it can be smaller.`}</p>
            </details>
          </div>

          <h3>The Basic Properties</h3>

          <p>{`For example, $|4+3i|=\\sqrt{4^2+3^2}=\\sqrt{25}=5$. Every property below can be checked this same concrete way.`}</p>

          <div className="lrn-graph">
            <ModulusTriangleViz />
          </div>

          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Statement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`1`}</td>
                  <td>{`$|z| \\ge 0$, with $|z|=0$ exactly when $z=0$`}</td>
                </tr>
                <tr>
                  <td>{`2`}</td>
                  <td>{`$|\\text{Re}(z)| \\le |z|$ and $|\\text{Im}(z)| \\le |z|$`}</td>
                </tr>
                <tr>
                  <td>{`3`}</td>
                  <td>{`$z\\bar z = |z|^2$`}</td>
                </tr>
                <tr>
                  <td>{`4`}</td>
                  <td>{`$|\\bar z| = |z|$`}</td>
                </tr>
                <tr>
                  <td>{`5`}</td>
                  <td>{`$|z_1z_2| = |z_1||z_2|$`}</td>
                </tr>
                <tr>
                  <td>{`6`}</td>
                  <td>{`$\\left|\\dfrac{z_1}{z_2}\\right| = \\dfrac{|z_1|}{|z_2|}$, for $z_2 \\ne 0$`}</td>
                </tr>
                <tr>
                  <td>{`7`}</td>
                  <td>{`$|z^n| = |z|^n$`}</td>
                </tr>
                <tr>
                  <td>{`8`}</td>
                  <td>{`$|z_1+z_2| \\le |z_1|+|z_2|$ (triangle inequality)`}</td>
                </tr>
                <tr>
                  <td>{`9`}</td>
                  <td>{`$|z_1-z_2| \\ge \\big||z_1|-|z_2|\\big|$ (reverse triangle inequality)`}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proving the Triangle Inequality</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Start from $|z_1+z_2|^2 = (z_1+z_2)\\overline{(z_1+z_2)}$, using property 3 with $z=z_1+z_2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Expand using conjugate property 2: $= z_1\\bar z_1 + z_1\\bar z_2 + z_2\\bar z_1 + z_2\\bar z_2 = |z_1|^2 + |z_2|^2 + (z_1\\bar z_2 + \\overline{z_1\\bar z_2})$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`The bracketed term equals $2\\,\\text{Re}(z_1\\bar z_2)$ by conjugate property 5, and $\\text{Re}(w) \\le |w|$ for any complex $w$ by property 2 of the modulus.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`So $|z_1+z_2|^2 \\le |z_1|^2+|z_2|^2+2|z_1\\bar z_2| = |z_1|^2+|z_2|^2+2|z_1||z_2| = (|z_1|+|z_2|)^2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Both sides are nonnegative, so taking square roots preserves the inequality: $|z_1+z_2| \\le |z_1|+|z_2|$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Justifying Properties 2 and 4 Through 7 and 9`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Property 2: $|\\text{Re}(z)|=|x|=\\sqrt{x^2}\\le\\sqrt{x^2+y^2}=|z|$, and the same argument gives $|\\text{Im}(z)|\\le|z|$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Property 4: $|\\bar z|^2=\\bar z\\,\\overline{\\bar z}=\\bar z z=z\\bar z=|z|^2$, so $|\\bar z|=|z|$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Property 5: $|z_1z_2|^2=(z_1z_2)\\overline{(z_1z_2)}=(z_1\\bar z_1)(z_2\\bar z_2)=|z_1|^2|z_2|^2$, so $|z_1z_2|=|z_1||z_2|$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Property 6: apply property 5 to $z_1=\\dfrac{z_1}{z_2}\\cdot z_2$, so $|z_1|=\\left|\\dfrac{z_1}{z_2}\\right||z_2|$, giving $\\left|\\dfrac{z_1}{z_2}\\right|=\\dfrac{|z_1|}{|z_2|}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Property 7: repeat property 5 with every factor equal to $z$, so $|z^n|=|z|^n$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">6.</span>
              <div className="lrn-proof-step-content">{`Property 9: the triangle inequality gives $|z_1|=|(z_1-z_2)+z_2|\\le|z_1-z_2|+|z_2|$, so $|z_1-z_2|\\ge|z_1|-|z_2|$. Swapping $z_1$ and $z_2$ then gives $|z_1-z_2|\\ge\\big||z_1|-|z_2|\\big|$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Extending to more terms</span>
            <p>{`Repeating the triangle inequality gives $|z_1+z_2+\\cdots+z_n| \\le |z_1|+|z_2|+\\cdots+|z_n|$ for any list of complex numbers. Property 5 extends the same way: $|z_1z_2\\cdots z_n| = |z_1||z_2|\\cdots|z_n|$.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find the moduli of $z_1=4+3i$, $z_2=-3i$, $z_3=2$`}</span>
              <div className="lrn-step-content">
                <p>{`$|z_1| = \\sqrt{4^2+3^2} = \\sqrt{25}=5$. $|z_2|=\\sqrt{0^2+(-3)^2}=\\sqrt{9}=3$. $|z_3|=\\sqrt{2^2+0^2}=\\sqrt{4}=2$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is the modulus of a purely real number, like $z_3=2$, just its ordinary absolute value?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`When $y=0$, $|z|=\\sqrt{x^2+0^2}=\\sqrt{x^2}=|x|$, the ordinary absolute value. The modulus is a direct extension of absolute value to two dimensions.`}</p>
            </details>
          </div>

          <h3>Two Worked Examples Using the Conjugate and the Modulus</h3>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Compute $z=\\dfrac{5+5i}{3-4i}+\\dfrac{20}{4+3i}$.`}</p>
              <ol className="lrn-list">
                <li>{`Clear the first denominator by multiplying by $\\dfrac{3+4i}{3+4i}$: $\\dfrac{(5+5i)(3+4i)}{25} = \\dfrac{15+20i+15i-20}{25} = \\dfrac{-5+35i}{25} = -\\tfrac15+\\tfrac75 i$.`}</li>
                <li>{`Clear the second denominator by multiplying by $\\dfrac{4-3i}{4-3i}$: $\\dfrac{20(4-3i)}{25} = \\dfrac{80-60i}{25} = \\tfrac{16}{5}-\\tfrac{12}{5}i$.`}</li>
                <li>{`Add the two results: $\\left(-\\tfrac15+\\tfrac{16}{5}\\right) + \\left(\\tfrac75-\\tfrac{12}{5}\\right)i = 3 - i$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Compute $\\dfrac{2+2i}{1-i}$. The conjugate of $1-i$ is already identified for you: it is $1+i$.`}</p>
              <ol className="lrn-list">
                <li>{`Multiply top and bottom by $1+i$ and expand the top.`}</li>
                <li>{`Simplify the bottom using $z\\bar z=x^2+y^2$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Compute $\\dfrac{6-8i}{2+i}$ fully on your own, choosing the correct conjugate to multiply by.`}</p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Proving $E = z_1\\bar z_2 + \\bar z_1 z_2$ Is Always Real`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Take the conjugate of $E = z_1\\bar z_2 + \\bar z_1 z_2$ using conjugate properties 1, 2, and 3.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$\\bar E = \\overline{z_1\\bar z_2} + \\overline{\\bar z_1 z_2} = \\bar z_1 z_2 + z_1 \\bar z_2$, using $\\overline{\\bar z_2}=z_2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Rearranging the two terms in $\\bar E$ gives exactly $E$ back again, so $\\bar E = E$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`By conjugate property 8, a number equal to its own conjugate is real. So $E$ is real.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Selected Worked Problems Using the Modulus</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Proving $|z_1+z_2|^2 + |z_1-z_2|^2 = 2(|z_1|^2 + |z_2|^2)$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Use $|w|^2=w\\bar w$ on both terms: $|z_1+z_2|^2=(z_1+z_2)(\\bar z_1+\\bar z_2)$ and $|z_1-z_2|^2=(z_1-z_2)(\\bar z_1-\\bar z_2)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Expand both: $z_1\\bar z_1+z_1\\bar z_2+z_2\\bar z_1+z_2\\bar z_2$ and $z_1\\bar z_1-z_1\\bar z_2-z_2\\bar z_1+z_2\\bar z_2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Add the two expansions. The cross terms $z_1\\bar z_2+z_2\\bar z_1$ cancel with their negatives, leaving $2z_1\\bar z_1+2z_2\\bar z_2 = 2|z_1|^2+2|z_2|^2$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Proving $\\dfrac{z_1+z_2}{1+z_1z_2}$ Is Real When $|z_1|=|z_2|=1$ and $z_1z_2 \\ne -1$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Since $|z_1|=1$, property 3 gives $z_1\\bar z_1=1$, so $\\bar z_1 = \\dfrac{1}{z_1}$. Likewise $\\bar z_2=\\dfrac{1}{z_2}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Let $w = \\dfrac{z_1+z_2}{1+z_1z_2}$. Conjugate it: $\\bar w = \\dfrac{\\bar z_1+\\bar z_2}{1+\\bar z_1\\bar z_2} = \\dfrac{\\tfrac{1}{z_1}+\\tfrac{1}{z_2}}{1+\\tfrac{1}{z_1z_2}}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Multiply the top and bottom of $\\bar w$ by $z_1z_2$: $\\bar w = \\dfrac{z_2+z_1}{z_1z_2+1} = w$, the same expression.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Since $z_1z_2 \\ne -1$, the denominator never vanishes, and $\\bar w = w$ means $w$ is real.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY DOES THIS MATTER?</span>
            <p>{`The modulus turns geometric questions, like how big or how close two complex numbers are, into ordinary algebra with square roots. Every one of these worked problems reduces to manipulating $z\\bar z=|z|^2$ and the triangle inequality.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Square Roots of Negative Numbers</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Square root of a negative number</span>
            <div className="lrn-definition-desc">
              <p>{`For a positive real number $r$, define $\\sqrt{-r} = i\\sqrt{r}$. This is the only way to give $-r$ a square root, since $(i\\sqrt r)^2 = i^2 r = -r$.`}</p>
              <p>{`Reach for this the moment a square root of a negative number appears. Convert it to $i$ times a real square root, then keep computing safely.`}</p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Predict: does $\\sqrt{-2}\\cdot\\sqrt{-3}$ equal $\\sqrt{(-2)(-3)} = \\sqrt6$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. The warning below shows this rule breaks down whenever both numbers under the root are negative.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Simplify $\\sqrt{-1}$, $\\sqrt{-16}$, $\\sqrt{-3}$`}</span>
              <div className="lrn-step-content">
                <p>{`$\\sqrt{-1} = i$. $\\sqrt{-16} = i\\sqrt{16} = 4i$. $\\sqrt{-3} = i\\sqrt3$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Evaluate $(\\sqrt{12}-\\sqrt{-3})(3+\\sqrt{-4})$`}</span>
              <div className="lrn-step-content">
                <p>{`Convert first: $\\sqrt{12}=2\\sqrt3$, $\\sqrt{-3}=i\\sqrt3$, $\\sqrt{-4}=2i$. The product becomes $(2\\sqrt3-i\\sqrt3)(3+2i)$.`}</p>
                <p>{`Expand: $6\\sqrt3+4i\\sqrt3-3i\\sqrt3-2i^2\\sqrt3 = 6\\sqrt3+i\\sqrt3+2\\sqrt3 = 8\\sqrt3+i\\sqrt3$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`In the expansion above, why did the term $-2i^2\\sqrt3$ turn into a positive real number instead of staying imaginary?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The factor $i^2$ equals $-1$, so $-2i^2\\sqrt3$ becomes $+2\\sqrt3$. That is a real number, not an imaginary one. This is why the answer $8\\sqrt3+i\\sqrt3$ gains part of its real part from an $i^2$ term.`}</p>
            </details>
          </div>

          <div className="lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>{`The rule $\\sqrt a \\cdot \\sqrt b = \\sqrt{ab}$ only holds when $a$ and $b$ are not both negative. Convert each negative number under the root sign to $i\\sqrt{r}$ form first, then multiply.`}</p>
            <p>{`Counterexample: $\\sqrt{-2}\\cdot\\sqrt{-3} = (i\\sqrt2)(i\\sqrt3) = i^2\\sqrt6 = -\\sqrt6$, but $\\sqrt{(-2)(-3)} = \\sqrt6$. These do not match, because $-\\sqrt6 \\ne \\sqrt6$.`}</p>
            <p>{`Applying $\\sqrt a\\sqrt b=\\sqrt{ab}$ straight to two negatives skips the $i^2=-1$ sign flip. That skipped sign flip is the whole error.`}</p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The rule $\\sqrt a\\sqrt b=\\sqrt{ab}$ was only ever proved for $a$ and $b$ that are not negative. Its proof leans on each root being a single nonnegative number.`}</p>
            <p>{`A negative number has no nonnegative root. Both $i$ and $-i$ square to $-1$, since $(-i)^2 = i^2 = -1$, so neither one is the natural choice.`}</p>
            <p>{`With no consistent way to pick a root, no version of the product rule can survive. The ambiguity, not just a sign, is the real reason it fails.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Real square roots</span>
              <p>{`Every nonnegative real number has a single nonnegative root. $\\sqrt a\\cdot\\sqrt b=\\sqrt{ab}$ always holds.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Roots of negative numbers</span>
              <p>{`$\\sqrt{-r}=i\\sqrt r$ has two square roots overall, $\\pm i\\sqrt r$. The product rule fails when both numbers under the root sign are negative.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Solving Quadratic Equations over the Complex Numbers</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Complex-valued roots</span>
            <div className="lrn-definition-desc">
              <p>{`Every quadratic equation has exactly two roots once complex numbers are allowed, even when the usual real discriminant $b^2-4ac$ is negative.`}</p>
              <p>{`Reach for the complex quadratic formula whenever a real-coefficient quadratic has a negative discriminant, or whenever the coefficients themselves are complex.`}</p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Predict: does $x^2+9=0$ have any real solutions?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. $x^2=-9$ needs a real number whose square is negative, which does not exist. The worked example below finds its complex solutions instead.`}</p>
            </details>
          </div>

          <h3>Real Coefficients with a Negative Discriminant</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Solving $ax^2 + bx + c = 0$ When $\\Delta < 0$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Complete the square as usual: $a\\left(x+\\dfrac{b}{2a}\\right)^2 = \\dfrac{b^2-4ac}{4a} = \\dfrac{\\Delta}{4a}$, where $\\Delta=b^2-4ac$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Since $\\Delta<0$, write $\\dfrac{\\Delta}{4a^2} = \\dfrac{-(-\\Delta)}{4a^2}$ and take the square root using $\\sqrt{-r}=i\\sqrt r$: $\\left(x+\\dfrac{b}{2a}\\right) = \\pm\\dfrac{i\\sqrt{-\\Delta}}{2a}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Solve for $x$: $x_{1,2} = \\dfrac{-b \\pm i\\sqrt{-\\Delta}}{2a}$. The two roots are complex conjugates of each other, since they differ only in the sign in front of $i$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^2+9=0$`}</span>
              <div className="lrn-step-content">
                <p>{`$x^2=-9$, so $x=\\pm\\sqrt{-9}=\\pm3i$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^2+4x+5=0$`}</span>
              <div className="lrn-step-content">
                <p>{`$\\Delta = 4^2-4(1)(5) = 16-20=-4$. So $x = \\dfrac{-4\\pm\\sqrt{-4}}{2} = \\dfrac{-4\\pm2i}{2} = -2\\pm i$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`When solving $x^2+4x+5=0$, why does the $\\sqrt{-4}$ give an imaginary part instead of making the equation unsolvable?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The definition $\\sqrt{-r}=i\\sqrt r$ turns $\\sqrt{-4}$ into $2i$, a genuine complex number. Real numbers cannot solve $x^2=-9$, but complex numbers can. So a negative discriminant never blocks a solution. It just pushes the answer off the real line.`}</p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Note</span>
            <p>{`Whenever a quadratic has real coefficients and a negative discriminant, its two complex solutions always come as a conjugate pair, $p+qi$ and $p-qi$.`}</p>
          </div>

          <h3>Fully Complex Coefficients</h3>

          <p>{`When $a$, $b$, and $c$ are themselves complex numbers, the same completing-the-square method still works. But $\\Delta$ is now complex, so you need the square root of a complex number, not just $i\\sqrt r$.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Deriving the General Complex Quadratic Formula</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Complete the square exactly as before: $\\left(x+\\dfrac{b}{2a}\\right)^2 = \\dfrac{\\Delta}{4a^2}$, where $\\Delta=b^2-4ac$ is now complex, $\\Delta=u+vi$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Find a square root $y=p+qi$ of $\\Delta$ by solving $p^2-q^2=u$ and $2pq=v$ together with $p^2+q^2=|\\Delta|=\\sqrt{u^2+v^2}=r$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Adding and subtracting the two equations $p^2+q^2=r$ and $p^2-q^2=u$ gives $p=\\pm\\sqrt{\\tfrac{r+u}{2}}$ and $q=\\pm\\sqrt{\\tfrac{r-u}{2}}$, with signs matched to keep $2pq=v$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`This gives $y_{1,2} = \\pm\\left(\\sqrt{\\tfrac{r+u}{2}} + \\text{sgn}(v)\\sqrt{\\tfrac{r-u}{2}}\\,i\\right)$, where $\\text{sgn}(v)$ is $+1$ when $v>0$ and $-1$ when $v<0$. Finally $z_{1,2} = \\dfrac{1}{2a}(-b+y_{1,2})$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Vieta's formulas still apply</span>
            <p>{`For any quadratic $az^2+bz+c=0$, complex or real, the roots satisfy $z_1+z_2=-\\dfrac{b}{a}$ and $z_1z_2=\\dfrac{c}{a}$. Unlike the real-Δ&lt;0 case, complex-coefficient roots are not guaranteed to be conjugates of each other.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Real coefficients, Δ &lt; 0</span>
              <p>{`Roots are $\\dfrac{-b\\pm i\\sqrt{-\\Delta}}{2a}$: always a conjugate pair.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Fully complex coefficients</span>
              <p>{`Roots need the general complex square root formula; they are not guaranteed to be conjugates.`}</p>
            </div>
          </div>

          <h3>Further Worked Problems</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Solving $z^2 - 8(1-i)z + 63-16i = 0$`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Here $a=1$, $b=-8+8i$, $c=63-16i$. Compute $b^2 = (-8+8i)^2 = 64-128i+64i^2 = -128i$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Compute $4ac = 4(63-16i)=252-64i$. So $\\Delta=b^2-4ac = -128i-252+64i = -252-64i$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Find $\\sqrt\\Delta=p+qi$: $|\\Delta|=\\sqrt{252^2+64^2}=\\sqrt{67600}=260$. Then $p^2=\\tfrac{260-252}{2}=4$ so $p=\\pm2$, and $q^2=\\tfrac{260+252}{2}=256$ so $q=\\pm16$, matched to give $2pq=-64$: $p=2,q=-16$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`So $\\sqrt\\Delta = 2-16i$. Then $z = \\dfrac{-b\\pm\\sqrt\\Delta}{2} = \\dfrac{(8-8i)\\pm(2-16i)}{2}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`$z_1 = \\dfrac{10-24i}{2}=5-12i$. $z_2 = \\dfrac{6+8i}{2}=3+4i$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Proving $\\dfrac{p}{q}$ Is Real When Both Roots of $x^2 + px + q^2 = 0$ Share a Modulus`}</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Let the roots be $z_1,z_2$ with $|z_1|=|z_2|=\\rho$. Vieta gives $z_1+z_2=-p$, $z_1z_2=q^2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Compute $\\dfrac{p^2}{q^2} = \\dfrac{(z_1+z_2)^2}{z_1z_2} = \\dfrac{z_1}{z_2}+\\dfrac{z_2}{z_1}+2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Let $w=\\dfrac{z_1}{z_2}$. Since $|z_1|=|z_2|$, $w$ has modulus $1$, so $w\\bar w=1$ and $\\bar w=\\dfrac{1}{w}$. That makes $\\dfrac{z_2}{z_1}=\\dfrac{1}{w}=\\bar w$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`So $\\dfrac{p^2}{q^2} = w+\\bar w+2 = 2\\,\\text{Re}(w)+2$. Since $|w|=1$, $\\text{Re}(w)$ lies between $-1$ and $1$, so $\\dfrac{p^2}{q^2}$ is real and between $0$ and $4$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Write $\\dfrac{p}{q}=a+bi$. Since $\\left(\\dfrac{p}{q}\\right)^2 = (a^2-b^2)+2abi$ is real and nonnegative, its imaginary part $2ab$ must be zero, so $a=0$ or $b=0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">6.</span>
              <div className="lrn-proof-step-content">{`If $a=0$, the square is $-b^2 \\le 0$; but we showed the square is nonnegative, forcing $b=0$ too. So $b=0$ is the only option, meaning $\\dfrac{p}{q}=a$ is real.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^2-24x+37=0$ scaled by $4$: solve $4x^2-24x+37=0$`}</span>
              <div className="lrn-step-content">
                <p>{`$\\Delta = (-24)^2-4(4)(37) = 576-592=-16$. So $x=\\dfrac{24\\pm\\sqrt{-16}}{8} = \\dfrac{24\\pm4i}{8} = 3\\pm\\tfrac12 i$.`}</p>
                <p>{`The two roots, $3+\\tfrac12i$ and $3-\\tfrac12i$, are complex conjugates, matching the real-coefficient rule from earlier in this section.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Completing the square works for any coefficients, real or complex. The steps never used the fact that the numbers were real.`}</p>
            <p>{`So the same method solves every quadratic, once you can take a square root. Allowing complex numbers guarantees that square root always exists.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Complex Plane: Points and Position Vectors</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Geometric image</span>
            <div className="lrn-definition-desc">
              <p>{`Every complex number $z=x+yi$ has a geometric image: the point $M(x,y)$ in a plane. That plane has a horizontal real axis and a vertical imaginary axis. It is the complex plane.`}</p>
              <p>{`Reach for the complex plane whenever an algebra problem is easier to see as points, distances, or directions than as raw equations.`}</p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Predict: on the complex plane, where does the number $-3+2i$ sit, relative to the origin?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Three units left of the origin along the real axis, then two units up along the imaginary axis: the point $(-3, 2)$.`}</p>
            </details>
          </div>

          <p>{`The same point can be pictured a second way: as a position vector $\\overrightarrow{OM}$, an arrow from the origin $O$ to the point $M(x,y)$. Both pictures describe the identical complex number. They differ only in whether you read it as a location or as a displacement.`}</p>

          <div className="lrn-graph">
            <ArgandPointViz />
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Point picture</span>
              <p>{`$M(x,y)$. Best for plotting a single complex number and reading off its coordinates.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Position-vector picture</span>
              <p>{`$\\overrightarrow{OM}$. Best for adding, subtracting, or scaling complex numbers, since vectors already have rules for all three.`}</p>
            </div>
          </div>

          <h3>The Modulus as a Distance</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Modulus as distance</span>
            <div className="lrn-definition-desc">
              <p>{`$|z|$ equals the length of the segment $OM$, the ordinary Euclidean distance from the origin to the point $M(x,y)$.`}</p>
              <p>{`Reach for this whenever a problem talks about how far a complex number is from the origin, or from another complex number.`}</p>
            </div>
          </div>

          <p>{`The distance formula, already known from the coordinate plane, gives the distance from $(0,0)$ to $(x,y)$ as $\\sqrt{x^2+y^2}$. That is exactly $|z|$.`}</p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Circles and the modulus</span>
            <p>{`All points with $|z|=r$ form a circle of radius $r$ centered at the origin. Points with $|z|<r$ lie strictly inside that circle; points with $|z|>r$ lie strictly outside it.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Locate $z_k = \\pm\\tfrac12 \\pm \\tfrac{\\sqrt3}{2}i$ on the unit circle`}</span>
              <div className="lrn-step-content">
                <p>{`For each of the four sign choices, $x^2+y^2 = \\tfrac14+\\tfrac34=1$, so $|z_k|=1$ every time. All four points sit on the circle of radius $1$ centered at the origin, one in each quadrant.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why do all four sign choices above land on the same circle, even though they are four different points?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The modulus formula squares both $x$ and $y$, so a sign flip on either coordinate never changes $x^2+y^2$. All four points share the same distance from the origin, just in different directions.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A complex number carries exactly two real numbers, $x$ and $y$. A point in a plane also needs exactly two numbers to locate it.`}</p>
            <p>{`This exact match is why every complex number pairs with one point, and every point pairs with one complex number.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Geometric Meaning of Addition, Subtraction, and Scalar Multiples</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Vector addition and subtraction</span>
            <div className="lrn-definition-desc">
              <p>{`Adding two complex numbers matches adding their position vectors by the parallelogram rule. Subtracting two complex numbers gives the vector that points from one to the other.`}</p>
              <p>{`Reach for this geometric picture whenever a problem describes complex numbers as points and asks about paths, distances, or directions between them.`}</p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Predict: if $z_1$ and $z_2$ are two points in the plane, what shape do the four points $O$, $z_1$, $z_1+z_2$, $z_2$ form?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A parallelogram. The side from $O$ to $z_1$ is parallel to the side from $z_2$ to $z_1+z_2$, and the same length. The other pair of sides matches the same way.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Add $3+5i$ and $6+i$ geometrically`}</span>
              <div className="lrn-step-content">
                <p>{`$(3+5i)+(6+i) = 9+6i$. On the plane, the vector to $9+6i$ is the diagonal of the parallelogram built from the vectors to $3+5i$ and $6+i$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Add $6-2i$ and $-2+5i$, then find their difference`}</span>
              <div className="lrn-step-content">
                <p>{`Sum: $(6-2i)+(-2+5i) = 4+3i$, again the parallelogram diagonal.`}</p>
                <p>{`Difference: $z_1-z_2 = (6-2i)-(-2+5i) = 8-7i$. Geometrically, this is the vector pointing from the point $-2+5i$ to the point $6-2i$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Subtract $(-3+i)-(2+3i)$ and $(3-2i)-(-2-4i)$`}</span>
              <div className="lrn-step-content">
                <p>{`$(-3+i)-(2+3i) = -5-2i$.`}</p>
                <p>{`$(3-2i)-(-2-4i) = 5+2i$. Notice this second result is the exact negative of the first, since the two subtractions swap the same pair of points in opposite order.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-graph">
            <ComplexAddViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does swapping the order of a subtraction, from $A-B$ to $B-A$, always flip the sign of every coordinate?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$B-A = -(A-B)$ is just ordinary algebra applied to complex numbers. Geometrically, reversing a subtraction reverses the direction of the arrow between the two points, which flips both the horizontal and vertical component.`}</p>
            </details>
          </div>

          <h3>Scaling a Complex Number by a Real Number</h3>

          <p>{`Multiplying a complex number by a positive real number stretches or shrinks its position vector without changing direction. Multiplying by a negative real number also reverses the direction.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Scale $1+2i$ by $3$, and $-3+2i$ by $-2$`}</span>
              <div className="lrn-step-content">
                <p>{`$3(1+2i) = 3+6i$: the vector to $3+6i$ points the same direction as the vector to $1+2i$, three times as long.`}</p>
                <p>{`$-2(-3+2i) = 6-4i$: the negative scale factor flips the direction as well as changing the length.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-eq">
            <span>{`$$|M_1M_2| = |z_1-z_2|$$`}</span>
          </div>

          <p>{`This single formula covers every distance computation on the complex plane.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY DOES THIS MATTER?</span>
            <p>{`Complex-number algebra and plane geometry describe the same facts in two languages. A subtraction becomes a distance; an addition becomes a parallelogram; a real scaling becomes a stretch. Translating between the two languages often turns a hard algebra problem into an easy picture.`}</p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'Add and multiply $z_1=(-5,6)$ and $z_2=(1,-2)$ as ordered pairs.',
        a: 'Sum: $(-4,4)$, adding each slot separately. Product: use $(x_1x_2-y_1y_2,\\ x_1y_2+x_2y_1) = ((-5)(1)-(6)(-2),\\ (-5)(-2)+(1)(6)) = (7,16)$. The subtraction inside the first slot is what makes multiplication different from addition.'
      },
      {
        q: 'Why must the ordered-pair multiplication rule mix both real numbers in each slot, instead of multiplying slot by slot like addition does?',
        a: 'A slot-by-slot rule gives $(0,1)\\cdot(0,1)=(0,1)$, unchanged. The whole point of the construction is that $(0,1)$ should square to $(-1,0)$, a negative real number. Only the cross-multiplied rule, $(x_1x_2-y_1y_2, x_1y_2+x_2y_1)$, produces that result.'
      },
      {
        q: 'Rewrite the ordered pair $(4,-7)$ in algebraic form, and name its real and imaginary parts.',
        a: '$(4,-7) = 4 + (-7)i = 4-7i$. Real part $\\text{Re}(z)=4$. Imaginary part $\\text{Im}(z)=-7$.'
      },
      {
        q: 'Predict what $i^{10}$ equals before dividing $10$ by $4$, then check your answer.',
        a: 'A reasonable guess is $-1$, matching the pattern that even powers of $i$ tend to be real. Checking: $10=4(2)+2$, so $i^{10}=i^{4n+2}=-1$. The guess is confirmed.'
      },
      {
        q: 'Compute $(3+5i)(4-2i)$ and show every step, including where $i^2=-1$ is used.',
        a: 'Expand: $3\\cdot4+3\\cdot(-2i)+5i\\cdot4+5i\\cdot(-2i) = 12-6i+20i-10i^2$. Since $i^2=-1$, the last term becomes $+10$. Combine: $(12+10)+(-6+20)i = 22+14i$.'
      },
      {
        q: 'A student claims $(a+bi)(c+di)$ always has a larger real part than $ac+bd$. Find the error.',
        a: 'The real part is actually $ac-bd$, not $ac+bd$, because $bi\\cdot di = bdi^2=-bd$ subtracts rather than adds. The student forgot that $i^2=-1$ flips the sign of the cross term $bd$.'
      },
      {
        q: 'Find the multiplicative inverse of $z=(1,2)$ using the inverse formula, and explain why $x^2+y^2$ must be positive for this to work.',
        a: '$x^2+y^2=1+4=5$, so $z^{-1}=\\left(\\tfrac15,-\\tfrac25\\right)=\\tfrac15-\\tfrac25i$. Since $z\\ne(0,0)$, at least one of $x,y$ is nonzero, which forces $x^2+y^2>0$. That guarantees the inverse always exists for a nonzero complex number.'
      },
      {
        q: 'Divide $z_1=(1,2)$ by $z_2=(3,4)$ using the quotient formula for ordered pairs.',
        a: '$x_2^2+y_2^2=9+16=25$. Real part: $\\tfrac{1\\cdot3+2\\cdot4}{25}=\\tfrac{11}{25}$. Imaginary part: $\\tfrac{-1\\cdot4+2\\cdot3}{25}=\\tfrac{2}{25}$. So $\\tfrac{z_1}{z_2}=\\tfrac{11}{25}+\\tfrac{2}{25}i$.'
      },
      {
        q: 'A new number system defines complex multiplication as $(x_1,y_1)(x_2,y_2)=(x_1x_2,y_1y_2)$, straight across. Predict what would go wrong if you tried to build this new system the same way you built $\\mathbb{C}$.',
        a: 'The special pair $(0,1)$ would give $(0,1)\\cdot(0,1)=(0,1)$, not $(-1,0)$. No pair would ever square to a negative real number, so this system could not represent $\\sqrt{-1}$ and would fail to solve $x^2=-1$.'
      },
      {
        q: 'Evaluate $i^{105}+i^{23}+i^{20}-i^{34}$, showing each remainder.',
        a: '$105=4(26)+1 \\Rightarrow i^{105}=i$. $23=4(5)+3 \\Rightarrow i^{23}=-i$. $20=4(5)+0 \\Rightarrow i^{20}=1$. $34=4(8)+2 \\Rightarrow i^{34}=-1$. Sum: $i-i+1-(-1)=2$.'
      },
      {
        q: 'Explain in your own words why the powers of $i$ repeat every four steps instead of every two or every three.',
        a: 'The cycle length depends on how many multiplications by $i$ it takes to return to $1$. $i^1=i$, $i^2=-1$, $i^3=-i$, $i^4=1$: exactly four steps bring it back to the start, because $i^4=(i^2)^2=(-1)^2=1$ closes the loop at four, not sooner.'
      },
      {
        q: 'Find the real and imaginary parts of the conjugate of $-2+9i$, then compute $z+\\bar z$ and $z-\\bar z$.',
        a: 'Conjugate: $\\overline{-2+9i}=-2-9i$. Sum: $z+\\bar z=(-2+9i)+(-2-9i)=-4=2\\,\\text{Re}(z)$. Difference: $z-\\bar z=(-2+9i)-(-2-9i)=18i=2i\\,\\text{Im}(z)$.'
      },
      {
        q: 'Prove that $\\overline{z_1+z_2}=\\overline{z_1}+\\overline{z_2}$ for any two complex numbers, writing out both sides in $x+yi$ form.',
        a: 'Let $z_1=x_1+y_1i$, $z_2=x_2+y_2i$. Left side: $\\overline{z_1+z_2}=\\overline{(x_1+x_2)+(y_1+y_2)i}=(x_1+x_2)-(y_1+y_2)i$. Right side: $\\overline{z_1}+\\overline{z_2}=(x_1-y_1i)+(x_2-y_2i)=(x_1+x_2)-(y_1+y_2)i$. Both sides match, so the identity holds.'
      },
      {
        q: 'Divide $3+5i$ by $1-2i$ using the conjugate method, showing the clearing step.',
        a: 'Multiply top and bottom by $1+2i$: $\\dfrac{(3+5i)(1+2i)}{(1-2i)(1+2i)} = \\dfrac{3+6i+5i+10i^2}{1+4} = \\dfrac{-7+11i}{5} = -\\dfrac75+\\dfrac{11}{5}i$.'
      },
      {
        q: 'A classmate divides $\\dfrac{7+3i}{4i}$ by multiplying top and bottom by $4i$ instead of $-4i$. What goes wrong?',
        a: 'Here $(4i)(4i)=16i^2=-16$ is real, so $4i$ happens to clear $i$ by coincidence, only because $4i$ is purely imaginary. The reliable rule is always to multiply by the true conjugate $-4i$. That clears $i$ for every complex denominator, not just pure-imaginary ones.'
      },
      {
        q: 'You need to simplify $\\dfrac{5}{2+3i}$ but only know the inverse-formula method from ordered pairs, not the conjugate shortcut. Solve it that way, then check it matches the conjugate method.',
        a: 'Ordered-pair method: $x^2+y^2=4+9=13$, so $(2+3i)^{-1}=\\tfrac{2}{13}-\\tfrac{3}{13}i$, and $5\\cdot(2+3i)^{-1}=\\tfrac{10}{13}-\\tfrac{15}{13}i$. Conjugate method: $\\dfrac{5(2-3i)}{(2+3i)(2-3i)}=\\dfrac{10-15i}{13}$. Both give $\\tfrac{10}{13}-\\tfrac{15}{13}i$.'
      },
      {
        q: 'Why is $z\\bar z$ always a real number, for every complex number $z$, and never negative?',
        a: '$z\\bar z=(x+yi)(x-yi)=x^2-(yi)^2=x^2-y^2i^2=x^2+y^2$, using $i^2=-1$. This is a sum of two real squares, always real, and always at least zero, since a square can never be negative.'
      },
      {
        q: 'Find the moduli of $z_1=4+3i$, $z_2=-3i$, and $z_3=2$.',
        a: '$|z_1|=\\sqrt{16+9}=\\sqrt{25}=5$. $|z_2|=\\sqrt{0+9}=3$. $|z_3|=\\sqrt{4+0}=2$.'
      },
      {
        q: 'Predict whether $|z_1+z_2|$ can ever be strictly greater than $|z_1|+|z_2|$.',
        a: 'No, never. The triangle inequality proves $|z_1+z_2|\\le|z_1|+|z_2|$ for every pair of complex numbers, with equality only in special cases. It can never exceed that sum.'
      },
      {
        q: 'Prove that $|z_1+z_2|^2+|z_1-z_2|^2=2\\big(|z_1|^2+|z_2|^2\\big)$.',
        a: 'Write both moduli-squared using $|w|^2=w\\bar w$: $(z_1+z_2)(\\bar z_1+\\bar z_2)+(z_1-z_2)(\\bar z_1-\\bar z_2)$. Expanding, the cross terms $z_1\\bar z_2+z_2\\bar z_1$ cancel with their opposite signs, leaving $2z_1\\bar z_1+2z_2\\bar z_2=2|z_1|^2+2|z_2|^2$.'
      },
      {
        q: 'Given $|z_1|=|z_2|=1$ and $z_1z_2\\ne-1$, explain from first principles why $\\dfrac{z_1+z_2}{1+z_1z_2}$ must be real.',
        a: 'Since each modulus is $1$, $\\bar z_1=\\dfrac{1}{z_1}$ and $\\bar z_2=\\dfrac{1}{z_2}$. Conjugating the whole expression and multiplying top and bottom by $z_1z_2$ returns the exact same expression, so it equals its own conjugate. A number equal to its own conjugate is real.'
      },
      {
        q: 'Prove that $|1+z|^2+|1-z|^2=2+2|z|^2$ for every complex number $z$, then evaluate it when $|z|=3$.',
        a: 'Use $|w|^2=w\\bar w$. So $|1+z|^2=(1+z)(1+\\bar z)=1+z+\\bar z+z\\bar z=1+2\\,\\text{Re}(z)+|z|^2$. Likewise $|1-z|^2=1-2\\,\\text{Re}(z)+|z|^2$. Adding cancels the $\\text{Re}(z)$ terms, leaving $2+2|z|^2$. When $|z|=3$, this equals $2+2(9)=20$.'
      },
      {
        q: 'Simplify $\\sqrt{-16}$ and $\\sqrt{-3}$, and explain why the answers use $i$.',
        a: '$\\sqrt{-16}=i\\sqrt{16}=4i$. $\\sqrt{-3}=i\\sqrt3$. Both use $i$ because a real number squared is never negative, so the definition $\\sqrt{-r}=i\\sqrt r$ is the only way to assign these expressions a value.'
      },
      {
        q: 'Explain why $\\sqrt{-2}\\cdot\\sqrt{-3}$ does not equal $\\sqrt6$, even though $(-2)(-3)=6$.',
        a: 'Converting first: $\\sqrt{-2}\\cdot\\sqrt{-3}=(i\\sqrt2)(i\\sqrt3)=i^2\\sqrt6=-\\sqrt6$. The rule $\\sqrt a\\sqrt b=\\sqrt{ab}$ only holds when $a,b$ are not both negative; applying it directly here skips the $i^2=-1$ sign flip and gives the wrong, positive answer.'
      },
      {
        q: 'Evaluate $(\\sqrt{12}-\\sqrt{-3})(3+\\sqrt{-4})$.',
        a: 'Convert each root: $\\sqrt{12}=2\\sqrt3$, $\\sqrt{-3}=i\\sqrt3$, $\\sqrt{-4}=2i$. Expand $(2\\sqrt3-i\\sqrt3)(3+2i) = 6\\sqrt3+4i\\sqrt3-3i\\sqrt3-2i^2\\sqrt3 = 6\\sqrt3+i\\sqrt3+2\\sqrt3=8\\sqrt3+i\\sqrt3$.'
      },
      {
        q: 'Solve $x^2+4x+5=0$ over the complex numbers.',
        a: 'Discriminant: $16-20=-4$. So $x=\\dfrac{-4\\pm\\sqrt{-4}}{2}=\\dfrac{-4\\pm2i}{2}=-2\\pm i$.'
      },
      {
        q: 'A quadratic $4x^2-24x+37=0$ has real coefficients and a negative discriminant. Predict, without solving, whether the two roots will be complex conjugates of each other.',
        a: 'Yes. Whenever a quadratic has real coefficients and $\\Delta<0$, the two roots always come out as a conjugate pair. The $\\pm i\\sqrt{-\\Delta}$ term is the only part that differs between them.'
      },
      {
        q: 'Solve $z^2-8(1-i)z+63-16i=0$ using the general complex quadratic method.',
        a: 'Here $b=-8+8i$, $c=63-16i$. Compute $\\Delta=b^2-4ac=-128i-(252-64i)=-252-64i$. Its square root, found by matching $p^2-q^2=-252$, $p^2+q^2=260$, $2pq=-64$, is $2-16i$. So $z=\\dfrac{(8-8i)\\pm(2-16i)}{2}$, giving $z_1=5-12i$ and $z_2=3+4i$.'
      },
      {
        q: 'A quadratic $x^2+px+q^2=0$ has complex coefficients $p,q$ with $q\\ne0$, and its two roots share the same modulus. Explain from first principles why $\\dfrac{p}{q}$ must be real.',
        a: 'By Vieta, $\\dfrac{p^2}{q^2}=\\dfrac{z_1}{z_2}+\\dfrac{z_2}{z_1}+2$. Let $w=\\dfrac{z_1}{z_2}$. Since $|z_1|=|z_2|$, $w$ has modulus $1$, so $\\bar w=\\dfrac{1}{w}$. Then $w+\\dfrac{1}{w}=w+\\bar w=2\\,\\text{Re}(w)$, a real number. That makes $\\dfrac{p^2}{q^2}$ real and nonnegative. Writing $\\dfrac{p}{q}=a+bi$, its square $(a^2-b^2)+2abi$ is real, so $ab=0$; nonnegative rules out $a=0$, leaving $b=0$. So $\\dfrac{p}{q}$ is real.'
      },
      {
        q: 'For nonzero complex numbers with $|z_1|=|z_2|$ and $z_1\\ne z_2$, prove that $\\dfrac{z_1+z_2}{z_1-z_2}$ is purely imaginary or zero.',
        a: 'Let $\\rho=|z_1|=|z_2|$. Property 3 gives $\\bar z_1=\\dfrac{\\rho^2}{z_1}$ and $\\bar z_2=\\dfrac{\\rho^2}{z_2}$. Let $w=\\dfrac{z_1+z_2}{z_1-z_2}$. Then $\\bar w=\\dfrac{\\bar z_1+\\bar z_2}{\\bar z_1-\\bar z_2}=\\dfrac{\\rho^2/z_1+\\rho^2/z_2}{\\rho^2/z_1-\\rho^2/z_2}=\\dfrac{z_2+z_1}{z_2-z_1}=-w$. A number with $\\bar w=-w$ is purely imaginary or zero, by conjugate property 8.'
      },
      {
        q: 'Rewrite the point $z=-3+2i$ as both a point and a position vector, and state what each picture is best used for.',
        a: 'As a point: $M(-3,2)$ on the complex plane, useful for plotting and reading coordinates. As a vector: $\\overrightarrow{OM}$, an arrow from the origin, useful for adding, subtracting, and scaling, since vectors already have rules for those operations.'
      },
      {
        q: 'Explain why $|z|$ equals the distance from the origin to the point representing $z$, starting from the definition of modulus.',
        a: '$|z|=\\sqrt{x^2+y^2}$ is exactly the ordinary distance formula from $(0,0)$ to $(x,y)$. Since $z$ is pictured as the point $(x,y)$, its modulus equals its distance from the origin. They are the same number by definition.'
      },
      {
        q: 'Four points $z_k=\\pm\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$ are given. Predict whether they all lie on the same circle before computing any modulus.',
        a: 'Yes, since squaring removes the effect of a sign, and each point has the same $x^2$ and $y^2$ values regardless of sign choice. Checking confirms $|z_k|=\\sqrt{\\tfrac14+\\tfrac34}=1$ for all four, so they lie on the unit circle.'
      },
      {
        q: 'Add $3+5i$ and $6+i$, and describe the result using the parallelogram picture.',
        a: '$(3+5i)+(6+i)=9+6i$. The point $9+6i$ is the fourth corner of the parallelogram whose other three corners are the origin, $3+5i$, and $6+i$.'
      },
      {
        q: 'Compute $(6-2i)-(-2+5i)$ and $(-2+5i)-(6-2i)$. How do the two answers relate to each other?',
        a: 'First: $(6-2i)-(-2+5i)=8-7i$. Second: $(-2+5i)-(6-2i)=-8+7i$. The two answers are exact negatives of each other, since swapping the order of a subtraction reverses the direction of the vector between the two points.'
      },
      {
        q: 'Scale $-3+2i$ by the real number $-2$, and explain geometrically what the negative sign does.',
        a: '$-2(-3+2i)=6-4i$. Geometrically, the negative sign reverses the direction of the position vector, pointing it the opposite way, while the factor of $2$ doubles its length.'
      },
      {
        q: 'Two points on the complex plane are $z_1=3+5i$ and $z_2=-1+2i$. Find the distance between them using the modulus.',
        a: 'Distance $=|z_1-z_2|=|(3-(-1))+(5-2)i|=|4+3i|=\\sqrt{16+9}=5$.'
      },
      {
        q: 'A student says the geometric picture of complex numbers is "just decoration" and the algebra alone is enough. Give one example where the geometric picture makes a fact obvious that the algebra alone does not.',
        a: 'The triangle inequality $|z_1+z_2|\\le|z_1|+|z_2|$ is immediate from the picture: one side of a triangle can never be longer than the sum of the other two. The algebraic proof, using conjugates and real parts, takes several steps to reach the same fact.'
      },
      {
        q: 'Using the field properties proved for ordered pairs, explain why $(z_1z_2)z_3=z_1(z_2z_3)$ for complex numbers, without re-expanding everything from scratch.',
        a: 'We proved associativity of multiplication directly from the ordered-pair rule and real-number associativity. Every complex number is an ordered pair, so this property already covers them all. No separate proof is needed for the algebraic form.'
      },
      {
        q: 'Method selection: to compute $\\dfrac{1}{3-4i}$ quickly, would you rather solve the two-equation inverse system or multiply by the conjugate? Justify your choice.',
        a: 'The conjugate method: multiply top and bottom by $3+4i$ to get $\\dfrac{3+4i}{9+16}=\\dfrac{3+4i}{25}$ in one line. The system-solving method reaches the same answer but requires setting up and solving two equations first, which is slower for routine computation.'
      },
      {
        q: 'Predict the value of $i^{4n}$ for any whole number $n$, then justify it using the definition of the powers-of-i cycle.',
        a: '$i^{4n}=1$ for every whole number $n$. Since $i^4=1$, raising it to any whole-number power $n$ still gives $1^n=1$, because $i^{4n}=(i^4)^n$.'
      },
      {
        q: 'Explain why every real number is a complex number, but not every complex number is real.',
        a: 'You can always write a real number $x$ as the complex number $x+0i$, matching the definition exactly. A complex number like $2+3i$ has a nonzero imaginary part, so no real number alone can equal it.'
      },
      {
        q: 'Compute $|\\bar z|$ for $z=5-12i$, and explain why it always equals $|z|$.',
        a: '$\\bar z=5+12i$, so $|\\bar z|=\\sqrt{25+144}=13$. Also $|z|=\\sqrt{25+144}=13$, the same value. Conjugating only flips the sign of $y$, and squaring removes any sign, so $x^2+y^2$ is unchanged by conjugation.'
      },
      {
        q: 'Transfer: two ships start at the same port, represented by the origin. Ship A sails to position $8+6i$ and ship B sails to position $2-3i$ (units in kilometers). Find the distance between the two ships.',
        a: 'Distance $=|z_A-z_B|=|(8-2)+(6-(-3))i|=|6+9i|=\\sqrt{36+81}=\\sqrt{117}=3\\sqrt{13}$ kilometers, using the modulus as a distance.'
      },
      {
        q: 'Transfer: an electrical engineer writes an impedance as $Z=4+3i$ ohms. Find $|Z|$ and explain what computing a modulus achieves here, without any electrical background.',
        a: '$|Z|=\\sqrt{16+9}=5$ ohms. The modulus reduces a two-part quantity, real and imaginary, to one single size number. That is the same role it plays for any complex number, whatever field it is used in.'
      },
      {
        q: 'Transfer: a game designer places two objects at complex-number positions $z_1=1+i$ and $z_2$, and wants their midpoint to sit exactly at the origin. Find $z_2$.',
        a: 'The midpoint condition is $\\dfrac{z_1+z_2}{2}=0$, so $z_2=-z_1=-1-i$. This uses the same addition rule that governs the parallelogram picture, applied in reverse.'
      },
      {
        q: 'Transfer: a quadratic $x^2+bx+13=0$ with real coefficient $b$ has $-2+3i$ as one root. Find $b$ and the other root, using the conjugate-pair property.',
        a: 'Since the coefficients are real and one root is non-real, the other root is the conjugate, $-2-3i$. By Vieta, the sum of roots is $-b$: $(-2+3i)+(-2-3i)=-4=-b$, so $b=4$.'
      },
      {
        q: 'Elaborate: explain from first principles why dividing by a complex number is defined as multiplying by its inverse, rather than as some new operation.',
        a: 'Division is defined this way in every field, including the real numbers: $\\dfrac{a}{b}$ means $a\\cdot b^{-1}$. Complex numbers were built to be a field, obeying the same basic rules as $\\mathbb{R}$. So the same definition of division carries over automatically, with no new rule needed.'
      },
      {
        q: 'Elaborate: explain from first principles why the conjugate of a real number equals itself.',
        a: 'A real number is $x+0i$, so its conjugate is $x-0i=x$, unchanged. The conjugate only flips the sign of the imaginary part, and a real number has no imaginary part to flip.'
      },
      {
        q: 'Elaborate: explain from first principles why $|z_1 z_2|=|z_1||z_2|$, using the definition of modulus and conjugate together.',
        a: '$|z_1z_2|^2=(z_1z_2)\\overline{z_1z_2}=z_1z_2\\bar z_1\\bar z_2=(z_1\\bar z_1)(z_2\\bar z_2)=|z_1|^2|z_2|^2$. Taking square roots of both sides, which are nonnegative, gives $|z_1z_2|=|z_1||z_2|$.'
      },
      {
        q: 'Error detection: a student solves $x^2+9=0$ and writes $x=3i$ only, missing a second answer. What is missing and why?',
        a: 'The equation $x^2=-9$ has two square roots, $3i$ and $-3i$, just as $x^2=9$ has two roots, $3$ and $-3$. The student needs both: $x=\\pm3i$.'
      },
      {
        q: 'Predict, without a full proof: for a complex number $z$ with $|z|=2$, is $|z-1|$ always between $1$ and $3$?',
        a: 'Yes. The reverse triangle inequality gives $|z-1|\\ge\\big||z|-|1|\\big|=1$. The triangle inequality gives $|z-1|\\le|z|+1=3$. So $|z-1|$ stays between $1$ and $3$ for every such $z$.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Complex Numbers (Cartesian Form)',
      sections: [
        <>
          <h3>Ordered-Pair Definition</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Addition</span>
            <div className="lrn-definition-desc">
              <p>{`$(x_1,y_1)+(x_2,y_2)=(x_1+x_2,\\ y_1+y_2)$: combining any two complex numbers.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiplication</span>
            <div className="lrn-definition-desc">
              <p>{`$(x_1,y_1)(x_2,y_2)=(x_1x_2-y_1y_2,\\ x_1y_2+x_2y_1)$: the field-defining rule, rarely used directly once $x+yi$ is available.`}</p>
            </div>
          </div>

          <h3>Algebraic Form</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Standard form</span>
            <div className="lrn-definition-desc">
              <p>{`$z=x+yi$, $i^2=-1$: use for all everyday complex arithmetic.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Add, subtract, multiply</span>
            <div className="lrn-definition-desc">
              <p>{`$(a+bi)\\pm(c+di)=(a\\pm c)+(b\\pm d)i$; $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$: use for combining two complex numbers directly.`}</p>
            </div>
          </div>

          <h3>Powers of i</h3>
          <div className="lrn-table">
            <table>
              <thead>
                <tr>
                  <th>Exponent form</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$4n$`}</td>
                  <td>{`$1$`}</td>
                </tr>
                <tr>
                  <td>{`$4n+1$`}</td>
                  <td>{`$i$`}</td>
                </tr>
                <tr>
                  <td>{`$4n+2$`}</td>
                  <td>{`$-1$`}</td>
                </tr>
                <tr>
                  <td>{`$4n+3$`}</td>
                  <td>{`$-i$`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Reduction rule</span>
            <div className="lrn-definition-desc">
              <p>{`When to use: divide the exponent by $4$, keep only the remainder, and look it up in the table above.`}</p>
            </div>
          </div>
        </>,

        <>
          <h3>Inverse and Division</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiplicative inverse</span>
            <div className="lrn-definition-desc">
              <p>{`$z^{-1}=\\dfrac{x}{x^2+y^2}-\\dfrac{y}{x^2+y^2}i = \\dfrac{\\bar z}{|z|^2}$: when to use: whenever a nonzero complex number needs to be inverted.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Division by conjugate</span>
            <div className="lrn-definition-desc">
              <p>{`$\\dfrac{a+bi}{c+di}=\\dfrac{(ac+bd)+(bc-ad)i}{c^2+d^2}$: when to use: any time a complex number sits in a denominator; multiply top and bottom by the conjugate of the denominator.`}</p>
            </div>
          </div>

          <h3>Complex Conjugate</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Definition</span>
            <div className="lrn-definition-desc">
              <p>{`$\\bar z = x-yi$: when to use: to clear $i$ from a denominator, or to test whether a number is real.`}</p>
            </div>
          </div>
          <div className="ref-grid">
            <div className="ref-item">{`$\\overline{\\overline{z}}=z$`}</div>
            <div className="ref-item">{`$\\overline{z_1+z_2}=\\overline{z_1}+\\overline{z_2}$`}</div>
            <div className="ref-item">{`$\\overline{z_1z_2}=\\overline{z_1}\\ \\overline{z_2}$`}</div>
            <div className="ref-item">{`$\\overline{\\left(\\dfrac{z_1}{z_2}\\right)}=\\dfrac{\\overline{z_1}}{\\overline{z_2}}$`}</div>
            <div className="ref-item">{`$z+\\bar z=2\\,\\text{Re}(z)$`}</div>
            <div className="ref-item">{`$z-\\bar z=2i\\,\\text{Im}(z)$`}</div>
            <div className="ref-item">{`$z\\bar z=x^2+y^2\\ge0$`}</div>
            <div className="ref-item">{`$z=\\bar z \\iff z$ real`}</div>
          </div>

          <h3>Modulus</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Definition</span>
            <div className="lrn-definition-desc">
              <p>{`$|z|=\\sqrt{x^2+y^2}$: when to use: whenever you need a single real number measuring the size of a complex number.`}</p>
            </div>
          </div>
          <div className="ref-grid">
            <div className="ref-item">{`$|z|\\ge0$, $=0$ iff $z=0$`}</div>
            <div className="ref-item">{`$z\\bar z=|z|^2$`}</div>
            <div className="ref-item">{`$|\\bar z|=|z|$`}</div>
            <div className="ref-item">{`$|z_1z_2|=|z_1||z_2|$`}</div>
            <div className="ref-item">{`$\\left|\\dfrac{z_1}{z_2}\\right|=\\dfrac{|z_1|}{|z_2|}$`}</div>
            <div className="ref-item">{`$|z^n|=|z|^n$`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Triangle inequality</span>
            <div className="lrn-definition-desc">
              <p>{`$|z_1+z_2|\\le|z_1|+|z_2|$: when to use: bounding a sum of complex numbers from above.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Reverse triangle inequality</span>
            <div className="lrn-definition-desc">
              <p>{`$|z_1-z_2|\\ge\\big||z_1|-|z_2|\\big|$: when to use: bounding a difference of complex numbers from below.`}</p>
            </div>
          </div>
        </>,

        <>
          <h3>Square Roots of Negative Numbers</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Definition</span>
            <div className="lrn-definition-desc">
              <p>{`$\\sqrt{-r}=i\\sqrt r$ for $r>0$: when to use: the instant a square root of a negative number appears, before doing any further algebra.`}</p>
            </div>
          </div>
          <div className="lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>{`$\\sqrt a\\cdot\\sqrt b=\\sqrt{ab}$ fails when $a$ and $b$ are both negative. Convert to $i\\sqrt r$ form first, always.`}</p>
          </div>

          <h3>Quadratic Equations</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Real coefficients, Δ &lt; 0</span>
            <div className="lrn-definition-desc">
              <p>{`$x_{1,2}=\\dfrac{-b\\pm i\\sqrt{-\\Delta}}{2a}$: when to use: real-coefficient quadratic with a negative discriminant; roots are always a conjugate pair.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Fully complex coefficients</span>
            <div className="lrn-definition-desc">
              <p>{`$z_{1,2}=\\dfrac{1}{2a}(-b\\pm y)$, where $y^2=\\Delta=u+vi$ and $y=\\pm\\left(\\sqrt{\\tfrac{r+u}{2}}+\\text{sgn}(v)\\sqrt{\\tfrac{r-u}{2}}i\\right)$, $r=|\\Delta|$, and $\\text{sgn}(v)=+1$ for $v>0$, $-1$ for $v<0$: when to use: any quadratic with complex coefficients.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Vieta's formulas</span>
            <div className="lrn-definition-desc">
              <p>{`$z_1+z_2=-\\dfrac{b}{a}$, $z_1z_2=\\dfrac{c}{a}$: when to use: checking or building roots without solving the full quadratic.`}</p>
            </div>
          </div>
        </>,

        <>
          <h3>The Complex Plane</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Geometric image</span>
            <div className="lrn-definition-desc">
              <p>{`$z=x+yi \\leftrightarrow M(x,y)$: when to use: translating an algebra problem into a picture of points and vectors.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Modulus as distance</span>
            <div className="lrn-definition-desc">
              <p>{`$|z|=OM$: when to use: reading the distance from the origin directly off the plane.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Distance between two points</span>
            <div className="lrn-definition-desc">
              <p>{`$|M_1M_2|=|z_1-z_2|$: when to use: finding the distance between any two complex numbers.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Addition and subtraction</span>
            <div className="lrn-definition-desc">
              <p>{`Sum: parallelogram diagonal from the origin. Difference: vector from one point to the other. When to use: visualizing a sum or difference before computing it.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Real scalar multiple</span>
            <div className="lrn-definition-desc">
              <p>{`$k \\cdot z$ stretches the position vector by $|k|$, reversing direction when $k<0$. When to use: predicting the geometric effect of multiplying by a real number.`}</p>
            </div>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function ComplexNumbersCartesianForm() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
