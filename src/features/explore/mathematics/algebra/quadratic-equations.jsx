import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  AlKhwarizmiViz,
  InteractiveDiscriminantViz,
  InteractiveParabolaViz,
  MaxMinViz,
  NumberLineInequalityViz,
  ParabolaDiscriminantViz,
  PowersOfIViz,
  StandardFormViz,
  VietasRootsViz
} from '../../../../components/viz'
// ─── Visualization Components ────────────────────────────────────────────────

// ─── Config ──────────────────────────────────────────────────────────────────

function useConfig() {
  const config = {
    cssPrefix: 'qe',
    documentTitle: 'Quadratic Equations - AETHER',
    learning: {
      groupTitle: 'Equations and Inequalities',
      category: 'Module 06',
      title: 'Quadratic Equations',
      subtitle:
        "Factoring, completing the square, the quadratic formula, Vieta's formulas, and the geometry of parabolas",
      sections: [
        <>
          <div className="lrn-header">
            <div>
              <h2>What Is a Quadratic Equation?</h2>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Quadratic equation</span>
            <div className="lrn-definition-desc">
              <p>{`Any equation that rearranges into $ax^2 + bx + c = 0$, with $a \\neq 0$. The highest power of $x$ is 2. The numbers $a$, $b$, $c$ are the coefficients; the letter $x$ is the unknown. This form is called the standard form.`}</p>
              <p>{`If $a = 1$, the equation $x^2 + px + q = 0$ is called the monic form. Dividing the standard form by $a$ always reaches it, and many techniques are cleaner there.`}</p>
            </div>
          </div>

          <div className="lrn-graph">
            <StandardFormViz />
          </div>

          <div className="lrn-insight">
            <strong>What "solve" means.</strong>
            {` To solve an equation is to list every $x$ that makes the two sides equal or to prove that no such $x$ exists. "No solutions" is a finished answer, not a failure. For example, $\\frac{x+1}{x+2} = 1$ would require $x + 1 = x + 2$, which is impossible. The equation is solved: its solution set is empty.`}
          </div>

          <p>
            <strong>Equation vs. identity.</strong>
            {` An equation is true only for specific values of $x$: $x^2 - 5x + 6 = 0$ holds at $x = 2$ and $x = 3$, nowhere else. An identity is true for every $x$: $(x+1)^2 = x^2 + 2x + 1$ holds for all numbers. Two equations are equivalent if they have exactly the same solutions. Each step you take while solving must preserve equivalence.`}
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>How many solutions can a quadratic have? Write your guess before reading on.</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Two, counted with multiplicity. Either two distinct real roots, one repeated real root, or two complex roots. Never three or more.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Rearrange $3x^2 + 2 = 5x$ into standard form`}</span>
              <div className="lrn-step-content">
                <p>{`Subtract $5x$ from both sides: $3x^2 - 5x + 2 = 0$. Here $a = 3$, $b = -5$, $c = 2$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Is $4x^2 = 9$ a quadratic equation?`}</span>
              <div className="lrn-step-content">
                <p>{`Subtract $9$: $4x^2 - 9 = 0$. So $a = 4$, $b = 0$, $c = -9$. Yes, it is a quadratic. The $bx$ term may be missing; only $a \\neq 0$ is required.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Put $4x^2 = 5x - 1$ into standard form`}</span>
              <div className="lrn-step-content">
                <p>{`Subtract $5x - 1$ from both sides: $4x^2 - 5x + 1 = 0$. So $a = 4$, $b = -5$, $c = 1$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does a quadratic have at most two solutions?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Every quadratic can be written $a(x - r_1)(x - r_2)$. A product is zero only when one of its factors is zero, so the only roots are $r_1$ and $r_2$. A third root would force a third factor and push the degree above 2. The condition $a \\neq 0$ matters here: if $a = 0$, the equation collapses to $bx + c = 0$, which is linear and has only one root.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Solving by Factoring</h2>
            </div>
          </div>

          <p>{`Factoring turns a quadratic into a multiplication problem. The trick rests on one fact: a product is zero only when at least one of its factors is zero. If you can write the quadratic as a product of two simpler pieces, every solution comes from setting one piece equal to zero.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Zero-product property</span>
            <div className="lrn-definition-desc">
              <p>{`If $A \\cdot B = 0$, then $A = 0$ or $B = 0$. Each factor that contains $x$ gives one linear equation; together they give every root.`}</p>
            </div>
          </div>

          <p>{`To multiply two binomials, multiply each term in the first by each term in the second, then collect like terms: $(x + r)(x + s) = x^2 + (r + s)x + rs$. Factoring reverses this. To factor $x^2 + bx + c$, search for two numbers $r$ and $s$ with $r + s = b$ and $rs = c$.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`For $x^2 - 5x + 6 = 0$, which two numbers multiply to $6$ and add to $-5$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$-2$ and $-3$: $(-2)(-3) = 6$ and $-2 + (-3) = -5$.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$x^2 - 5x + 6 = 0$ (monic)`}</span>
              <div className="lrn-step-content">
                <p>{`Need $rs = 6$ and $r + s = -5$. Try $-2$ and $-3$.`}</p>
                <div className="lrn-eq">{`$$x^2 - 5x + 6 = (x-2)(x-3) = 0$$`}</div>
                <p>{`Set each factor to zero: $x = 2$ or $x = 3$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$x^2 + x - 12 = 0$ (sign clue: $c$ negative)`}</span>
              <div className="lrn-step-content">
                <p>{`Since $c = -12$ is negative, $r$ and $s$ have opposite signs. Since $b = 1$ is positive, the positive number is larger in size. Try $4$ and $-3$: $(4)(-3) = -12$, $4 + (-3) = 1$.`}</p>
                <div className="lrn-eq">{`$$x^2 + x - 12 = (x+4)(x-3) = 0 \\quad\\Rightarrow\\quad x = -4 \\text{ or } x = 3$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$2x^2 + 5x + 3 = 0$ (non-monic, ac method)`}</span>
              <div className="lrn-step-content">
                <p>{`Compute $ac = 2 \\cdot 3 = 6$. Find two numbers with product $6$ and sum $b = 5$: $2$ and $3$.`}</p>
                <p>{`Split the middle term using those numbers: $2x^2 + 2x + 3x + 3 = 0$.`}</p>
                <p>{`Group and factor: $2x(x+1) + 3(x+1) = (2x+3)(x+1) = 0$.`}</p>
                <p>{`So $x = -\\frac{3}{2}$ or $x = -1$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$x^2 - 4 = 0$ (no linear term)`}</span>
              <div className="lrn-step-content">
                <p>{`Recognize this as a difference of squares: $(x-2)(x+2) = 0$, so $x = \\pm 2$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-warning">
            <p>
              <strong>Common mistake.</strong>
              {` After factoring, you must set each factor equal to zero. Forgetting this last step is the most common error. Factoring alone is not solving.`}
            </p>
          </div>

          <div className="lrn-insight">
            {`Read the signs of $b$ and $c$ before guessing. If $c > 0$, the two numbers share a sign, matching $b$. If $c < 0$, the two numbers have opposite signs, and the one farther from zero matches the sign of $b$. If $c = 0$, factor an $x$ out: $x^2 + bx = x(x + b)$, with roots $0$ and $-b$.`}
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Factor and solve $x^2 - 7x + 10 = 0$.`}</p>
              <ol className="lrn-list">
                <li>{`Need product $10$, sum $-7$: $-2$ and $-5$.`}</li>
                <li>{`Write $(x-2)(x-5) = 0$.`}</li>
                <li>{`Set each factor to zero: $x = 2$ or $x = 5$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Factor and solve $x^2 + 2x - 15 = 0$.`}</p>
              <ol className="lrn-list">
                <li>{`Find two numbers with product $-15$ and sum $2$: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Write the factored form: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Solve for $x$: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Solve $3x^2 - 10x + 3 = 0$ by factoring.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Special Factorizations</h2>
            </div>
          </div>

          <p>{`A few algebraic shapes appear so often that they have names. Memorize the pattern and you factor in one step instead of guessing.`}</p>

          <h3>Difference of Squares</h3>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$a^2 - b^2 = (a-b)(a+b)$$`}</span>
          </div>

          <p>{`Two perfect squares separated by a minus sign. The factorization comes straight from multiplying out the right side: the $+ab$ and $-ab$ cancel, leaving $a^2 - b^2$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Factor $25a^2 - 9b^2$`}</span>
              <div className="lrn-step-content">
                <p>{`The squares are $(5a)^2$ and $(3b)^2$, so $25a^2 - 9b^2 = (5a-3b)(5a+3b)$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Factor $x^4 - 16$ completely`}</span>
              <div className="lrn-step-content">
                <p>{`Apply the rule once: $x^4 - 16 = (x^2)^2 - 4^2 = (x^2 - 4)(x^2 + 4)$.`}</p>
                <p>{`The first factor is itself a difference of squares: $x^2 - 4 = (x-2)(x+2)$. The second factor, $x^2 + 4$, is a sum of squares, which does not factor over the real numbers.`}</p>
                <div className="lrn-eq">{`$$x^4 - 16 = (x-2)(x+2)(x^2+4)$$`}</div>
              </div>
            </div>
          </div>

          <div className="lrn-insight">
            {`A sum of squares $a^2 + b^2$ has no real factorization. If $(a + pb)(a + qb) = a^2 + b^2$ for real $p, q$, then $p + q = 0$ and $pq = 1$, forcing $p^2 = -1$. No real number squares to $-1$. Over the complex numbers, however, $a^2 + b^2 = (a + bi)(a - bi)$.`}
          </div>

          <h3>Perfect Square Trinomials</h3>

          <div className="lrn-eq">{`$$a^2 + 2ab + b^2 = (a+b)^2$$`}</div>
          <div className="lrn-eq">{`$$a^2 - 2ab + b^2 = (a-b)^2$$`}</div>

          <p>{`The first and last terms are squares, and the middle term is exactly twice the product of their square roots. Recognizing this pattern is the basis for completing the square later.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Factor $x^2 + 6x + 9$`}</span>
              <div className="lrn-step-content">
                <p>{`With $a = x$, $b = 3$: $2ab = 6x$ matches the middle term, so $x^2 + 6x + 9 = (x+3)^2$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Factor $4x^2 - 12x + 9$`}</span>
              <div className="lrn-step-content">
                <p>{`With $a = 2x$, $b = 3$: $2ab = 12x$ matches, with a minus sign. So $4x^2 - 12x + 9 = (2x-3)^2$.`}</p>
              </div>
            </div>
          </div>

          <h3>Sum and Difference of Cubes</h3>

          <div className="lrn-eq">{`$$a^3 - b^3 = (a-b)(a^2+ab+b^2)$$`}</div>
          <div className="lrn-eq">{`$$a^3 + b^3 = (a+b)(a^2-ab+b^2)$$`}</div>

          <p>
            <strong>SOAP</strong>
            {` Same, Opposite, Always Positive names the signs in the second factor. The binomial sign matches the original; the middle sign of the trinomial is the opposite; the last term is always positive. The rule is not magic: multiply out $(a-b)(a^2+ab+b^2) = a^3 + a^2 b + ab^2 - a^2 b - ab^2 - b^3$, and the middle terms cancel in pairs, leaving $a^3 - b^3$.`}
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Factor $x^3 - 8$`}</span>
              <div className="lrn-step-content">
                <p>{`$a = x$, $b = 2$, so $x^3 - 8 = (x-2)(x^2 + 2x + 4)$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Factor $8a^3 + 27b^3$`}</span>
              <div className="lrn-step-content">
                <p>{`Recognize the cubes: $8a^3 = (2a)^3$ and $27b^3 = (3b)^3$. So $8a^3 + 27b^3 = (2a + 3b)(4a^2 - 6ab + 9b^2)$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Factor $27x^3 - 8$.`}</p>
              <ol className="lrn-list">
                <li>{`Cubes: $a = 3x$, $b = 2$.`}</li>
                <li>{`Binomial factor: $(3x - 2)$.`}</li>
                <li>{`Trinomial factor: $(3x)^2 + (3x)(2) + 2^2 = 9x^2 + 6x + 4$.`}</li>
                <li>{`Result: $(3x - 2)(9x^2 + 6x + 4)$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Factor $64a^3 + 125b^3$.`}</p>
              <ol className="lrn-list">
                <li>{`Identify the cubes: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Binomial factor: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Trinomial factor: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Factor $x^6 - 1$ completely. Hint: $x^6 - 1$ is both a difference of squares and a difference of cubes.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>{`Simon's Favorite Factoring Trick (SFFT)`}</h2>
            </div>
          </div>

          <p>{`When an expression mixes a product $xy$ with single-variable terms in $x$ and $y$, it often does not factor as written. SFFT fixes that by adding the one missing constant that completes the rectangle. The pattern that does the work is:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$xy + ax + by + ab = (x+b)(y+a)$$`}</span>
          </div>

          <p>{`If the constant $ab$ is missing, add it to both sides. The left side then factors, and you turn a stubborn equation into a list of factor pairs useful especially when you want integer solutions (a "Diophantine" equation, meaning one solved over the integers).`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`To make $xy + 3x + 2y$ factor, what constant do you add?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Add $3 \\times 2 = 6$, since the coefficients of $x$ and $y$ are $3$ and $2$. Then $xy + 3x + 2y + 6 = (x+2)(y+3)$.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Factor $xy + 3x + 2y + 6$`}</span>
              <div className="lrn-step-content">
                <p>{`Group: $x(y+3) + 2(y+3)$. The common factor $(y+3)$ pulls out.`}</p>
                <div className="lrn-eq">{`$$xy + 3x + 2y + 6 = (x+2)(y+3)$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $xy - 2x - 3y = -6$`}</span>
              <div className="lrn-step-content">
                <p>{`Move everything to one side: $xy - 2x - 3y + 6 = 0$. The $+6$ matches $(-2)(-3)$, so the trick is built in.`}</p>
                <div className="lrn-eq">{`$$x(y-2) - 3(y-2) = (x-3)(y-2) = 0$$`}</div>
                <p>{`Either $x = 3$ or $y = 2$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find integer pairs $(x, y)$ with $xy + x + y = 11$`}</span>
              <div className="lrn-step-content">
                <p>{`The coefficients of $x$ and $y$ are both $1$, so add $1 \\cdot 1 = 1$ to both sides: $xy + x + y + 1 = 12$.`}</p>
                <div className="lrn-eq">{`$$(x+1)(y+1) = 12$$`}</div>
                <p>{`Every integer solution comes from a factor pair of $12$: $1 \\cdot 12$, $2 \\cdot 6$, $3 \\cdot 4$, and the reversed and negative versions. Subtract $1$ from each factor to recover $(x, y)$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the missing constant equal the product of the coefficients of the linear terms?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Expand $(x+b)(y+a) = xy + ax + by + ab$. The constant $ab$ is the product of the numbers added inside each factor exactly the coefficients of the linear terms in the expansion. Add that constant and the expression becomes a complete product.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Complex Numbers</h2>
            </div>
          </div>

          <p>{`Some quadratics produce the square root of a negative number, which no real number can supply. Mathematicians enlarged the number system to handle this case. The enlarged system is consistent: no old rule of arithmetic breaks. It is also indispensable quantum mechanics, signal processing, and electrical engineering all depend on it.`}</p>

          <h3>The Imaginary Unit</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Imaginary unit</span>
            <div className="lrn-definition-desc">
              <p>{`The symbol $i$ is defined by the single rule $i^2 = -1$. From this, $\\sqrt{-n} = i\\sqrt{n}$ for any $n > 0$, since $(i\\sqrt{n})^2 = i^2 \\cdot n = -n$.`}</p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`What is $i^3$? Use $i^2 = -1$ to compute it before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$i^3 = i^2 \\cdot i = (-1) \\cdot i = -i$.`}</p>
            </details>
          </div>

          <h3>Form and Arithmetic</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Complex number</span>
            <div className="lrn-definition-desc">
              <p>{`A number of the form $a + bi$, where $a$ and $b$ are real. The number $a$ is the real part; $b$ is the imaginary part. If $b = 0$, the number is real. If $a = 0$ and $b \\neq 0$, the number is purely imaginary.`}</p>
            </div>
          </div>

          <p>
            <strong>Addition.</strong>
            {` Combine real with real, imaginary with imaginary, like collecting like terms.`}
          </p>
          <div className="lrn-eq">{`$$(3+2i) + (1-5i) = 4-3i$$`}</div>

          <p>
            <strong>Multiplication.</strong>
            {` Expand the product as you would two binomials, then replace every $i^2$ by $-1$.`}
          </p>
          <div className="lrn-eq">{`$$(2+3i)(1-i) = 2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i$$`}</div>

          <h3>Conjugates and Division</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Complex conjugate</span>
            <div className="lrn-definition-desc">
              <p>{`The conjugate of $a + bi$ is $a - bi$ flip the sign of the imaginary part. The product $(a+bi)(a-bi) = a^2 - (bi)^2 = a^2 + b^2$ is always real and never negative. That single fact is the engine of complex division.`}</p>
            </div>
          </div>

          <p>{`To divide by a complex number, multiply numerator and denominator by the conjugate of the denominator. The denominator becomes real, and the rest is ordinary fraction arithmetic.`}</p>
          <div className="lrn-eq">{`$$\\frac{a+bi}{c+di} = \\frac{(a+bi)(c-di)}{c^2+d^2}$$`}</div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Compute $\\frac{3+2i}{1-i}$`}</span>
              <div className="lrn-step-content">
                <p>{`The conjugate of $1 - i$ is $1 + i$. Multiply top and bottom by it.`}</p>
                <div className="lrn-eq">{`$$\\frac{(3+2i)(1+i)}{(1-i)(1+i)} = \\frac{3 + 3i + 2i + 2i^2}{1 + 1} = \\frac{1+5i}{2} = \\frac{1}{2} + \\frac{5}{2}i$$`}</div>
              </div>
            </div>
          </div>

          <h3>
            Powers of <em>i</em>
          </h3>

          <p>{`The powers of $i$ cycle with period $4$, because $i^4 = (i^2)^2 = (-1)^2 = 1$. Multiplying by $1$ restarts the cycle.`}</p>
          <div className="lrn-eq">{`$$i^1 = i,\\quad i^2 = -1,\\quad i^3 = -i,\\quad i^4 = 1,\\quad i^5 = i,\\ldots$$`}</div>

          <p>{`To compute $i^n$, divide $n$ by $4$ and look at the remainder: $0 \\to 1$, $1 \\to i$, $2 \\to -1$, $3 \\to -i$.`}</p>

          <div className="lrn-graph">
            <PowersOfIViz />
          </div>

          <h3>Square Root of a Complex Number</h3>

          <p>{`To find $\\sqrt{c+di}$, look for $a + bi$ with $(a+bi)^2 = c + di$. Expanding, $a^2 - b^2 + 2ab\\, i = c + di$, so match real and imaginary parts:`}</p>
          <div className="lrn-eq">{`$$a^2 - b^2 = c, \\qquad 2ab = d$$`}</div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find $\\sqrt{7 - 24i}$`}</span>
              <div className="lrn-step-content">
                <p>{`Need $a^2 - b^2 = 7$ and $2ab = -24$, so $ab = -12$. Try $a = 4$, $b = -3$: $16 - 9 = 7$ ✓ and $4(-3) = -12$ ✓.`}</p>
                <p>{`So $\\sqrt{7 - 24i} = \\pm(4 - 3i)$. Unlike real square roots, there is no convention picking the "positive" one both squares are valid.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the product $(a+bi)(a-bi)$ never become negative?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Expand to $a^2 - (bi)^2 = a^2 + b^2$. Since $a$ and $b$ are real, both squares are non-negative, and their sum is zero only when $a = b = 0$. Multiplying by the conjugate is the trick that turns a complex denominator into a real one.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Completing the Square</h2>
            </div>
          </div>

          <p>{`Completing the square is one move: turn $x^2 + bx$ into a perfect square by adding the one missing piece. Doing this rewrites any quadratic as $a(x+h)^2 + k$. From there you can finish solving with a square root, or read off the vertex of the parabola, or derive the quadratic formula itself.`}</p>

          <p>{`The missing piece is always the square of half the linear coefficient:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\left(\\frac{b}{2}\\right)^2$$`}</span>
          </div>

          <p>{`Why this number? Expand $(x + \\frac{b}{2})^2 = x^2 + bx + (\\frac{b}{2})^2$. Subtracting $(\\frac{b}{2})^2$ cancels the extra constant and leaves $x^2 + bx$. Geometrically (see the diagram below): start with a square of side $x$, attach a rectangle of width $b$, split that rectangle in half, and tuck one half against each side. A square corner of area $(\\frac{b}{2})^2$ is missing adding it completes the picture.`}</p>

          <div className="lrn-graph">
            <AlKhwarizmiViz />
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`For $x^2 + 6x$, what constant turns it into a perfect square?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$(\\frac{6}{2})^2 = 9$. Then $x^2 + 6x + 9 = (x+3)^2$.`}</p>
            </details>
          </div>

          <div className="lrn-warning">
            <p>
              <strong>Common mistake.</strong>
              {` When solving an equation, the constant must be added to both sides, never just the left. Otherwise you change the equation.`}
            </p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^2 + 6x + 5 = 0$`}</span>
              <div className="lrn-step-content">
                <p>{`Move the constant: $x^2 + 6x = -5$.`}</p>
                <p>{`Add $(\\frac{6}{2})^2 = 9$ to both sides: $x^2 + 6x + 9 = 4$.`}</p>
                <p>{`The left side is now a square: $(x+3)^2 = 4$.`}</p>
                <p>{`Take the square root, keeping both signs: $x + 3 = \\pm 2$, so $x = -1$ or $x = -5$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^2 - 4x + 7 = 0$ (complex roots)`}</span>
              <div className="lrn-step-content">
                <p>{`Move the constant: $x^2 - 4x = -7$. Add $(-\\frac{4}{2})^2 = 4$ to both sides: $(x-2)^2 = -3$.`}</p>
                <p>{`The square root of $-3$ is $\\pm i\\sqrt{3}$, so $x - 2 = \\pm i\\sqrt{3}$ and $x = 2 \\pm i\\sqrt{3}$. The method works without any change when the result is complex.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $5x^2 + 3x + 9 = 0$ Method 1: divide by $a$`}</span>
              <div className="lrn-step-content">
                <p>{`Divide everything by $5$: $x^2 + \\tfrac{3}{5}x + \\tfrac{9}{5} = 0$, then $x^2 + \\tfrac{3}{5}x = -\\tfrac{9}{5}$.`}</p>
                <p>{`Half of $\\frac{3}{5}$ is $\\frac{3}{10}$; its square is $\\frac{9}{100}$. Add to both sides: $\\left(x + \\tfrac{3}{10}\\right)^2 = \\tfrac{9}{100} - \\tfrac{9}{5} = -\\tfrac{171}{100}$.`}</p>
                <p>{`Take the square root: $x = -\\tfrac{3}{10} \\pm \\tfrac{3i\\sqrt{19}}{10}$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Same equation Method 2: factor $a$ out`}</span>
              <div className="lrn-step-content">
                <p>{`Factor $5$ from the variable terms: $5(x^2 + \\tfrac{3}{5}x) + 9 = 0$.`}</p>
                <p>{`Complete the square inside the parentheses. Because of the $5$ outside, the constant you add inside must be balanced by $5 \\cdot \\tfrac{9}{100}$ on the right.`}</p>
                <p>{`$5\\left(x + \\tfrac{3}{10}\\right)^2 - 5 \\cdot \\tfrac{9}{100} + 9 = 0$, giving $5\\left(x + \\tfrac{3}{10}\\right)^2 = -\\tfrac{171}{20}$.`}</p>
                <p>{`Solving gives the same roots as Method 1. Method 2 is useful when you want to keep $a$ visible for example, while putting the quadratic into vertex form.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Complete the square in the monic form $x^2 + px + q = 0$.`}</p>
              <ol className="lrn-list">
                <li>{`Move $q$: $x^2 + px = -q$.`}</li>
                <li>{`Add $(\\frac{p}{2})^2$: $x^2 + px + (\\frac{p}{2})^2 = (\\frac{p}{2})^2 - q$.`}</li>
                <li>{`Factor the left: $(x + \\frac{p}{2})^2 = \\frac{p^2}{4} - q$.`}</li>
                <li>{`Take the square root: $x + \\frac{p}{2} = \\pm\\sqrt{\\frac{p^2}{4} - q}$.`}</li>
                <li>{`Solve: $x = -\\frac{p}{2} \\pm \\sqrt{\\frac{p^2}{4} - q}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Complete the square on $x^2 + 8x + 3 = 0$.`}</p>
              <ol className="lrn-list">
                <li>{`Move constant: $x^2 + 8x = -3$.`}</li>
                <li>{`Add the missing square: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Factor the left side: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Solve for $x$: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Complete the square to solve $3x^2 - 6x + 1 = 0$.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Quadratic Formula</h2>
            </div>
          </div>

          <p>{`The quadratic formula is completing the square performed once for the general case. After you derive it, every quadratic with known coefficients reduces to plugging numbers into a single expression.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`}</span>
          </div>

          <p>{`Read the formula geometrically. The piece $-\\frac{b}{(2a)}$ is the $x$-coordinate of the vertex the axis of symmetry of the parabola. The piece $\\pm\\\frac{\\sqrt{b^2 - 4ac}}{(2a)}$ is the distance from that axis to each root. The two roots sit symmetrically around the vertex.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Where does the $\\pm$ come from? Which step in the derivation introduces two cases?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Taking the square root of both sides. If $A^2 = k$, then $A = +\\sqrt{k}$ or $A = -\\sqrt{k}$, giving the two cases.`}</p>
            </details>
          </div>

          <h3>Derivation</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">From $ax^2 + bx + c = 0$ to the formula</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Divide by $a$ (allowed since $a \\neq 0$): $x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Move the constant: $x^2 + \\frac{b}{a}x = -\\frac{c}{a}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Complete the square. Half of $\\frac{b}{a}$ is $\\frac{b}{(2a)}$; its square is $\\frac{b^2}{(4a^2)}$. Add to both sides: $x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = \\frac{b^2}{4a^2} - \\frac{c}{a} = \\frac{b^2 - 4ac}{4a^2}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`The left side is now a perfect square: $\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`Take the square root, keeping both signs: $x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">6.</span>
              <div className="lrn-proof-step-content">{`Subtract $\\frac{b}{(2a)}$ from both sides: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Why Exactly Two Roots</h3>

          <p>{`Every step above is reversible. Any solution of the original equation must pass through each step, and the $\\pm$ in step 5 captures both square-root cases. There is no room for a third solution.`}</p>

          <p>
            <strong>{`When $b^2 - 4ac = 0$:`}</strong>
            {` the $+$ and $-$ cases collapse to the same value $x = -\\frac{b}{(2a)}$. The equation has a single root, called a double root. The parabola touches the $x$-axis at exactly that point.`}
          </p>

          <h3>Monic Shortcut</h3>

          <p>{`If the leading coefficient is already $1$, the formula simplifies. For $x^2 + px + q = 0$:`}</p>
          <div className="lrn-eq">{`$$x = -\\frac{p}{2} \\pm \\sqrt{\\frac{p^2}{4} - q}$$`}</div>

          <h3>Alternative Form</h3>

          <p>{`Dividing the standard formula's top and bottom by $-b \\mp \\sqrt{b^2-4ac}$ rearranges it into a second, equivalent form:`}</p>
          <div className="lrn-eq">{`$$x = \\frac{2c}{-b \\mp \\sqrt{b^2 - 4ac}}$$`}</div>
          <p>{`Both forms give the same roots. The alternative is better-behaved when $a$ is small: the standard formula's $\\frac{1}{(2a)}$ blows up, while the alternative keeps a sensible numerator. It also makes clear what happens when $a \\to 0$ one root approaches $-\\frac{c}{b}$ (the linear-equation solution), and the other escapes to infinity.`}</p>

          <h3>Worked Examples</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$x^2 - 5x + 6 = 0$`}</span>
              <div className="lrn-step-content">
                <p>{`$a = 1$, $b = -5$, $c = 6$. Discriminant $= 25 - 24 = 1$. So $x = \\frac{(5 \\pm 1)}{2}$, giving $x = 3$ or $x = 2$. Factoring would have worked too the formula always agrees.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$5x^2 + 3x + 9 = 0$ (complex roots)`}</span>
              <div className="lrn-step-content">
                <p>{`Discriminant $= 9 - 180 = -171$. So $x = \\dfrac{-3 \\pm \\sqrt{-171}}{10} = \\dfrac{-3 \\pm 3i\\sqrt{19}}{10}$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$r^2 + 4r = 96$`}</span>
              <div className="lrn-step-content">
                <p>{`First put it in standard form: $r^2 + 4r - 96 = 0$. Discriminant $= 16 + 384 = 400$, so $\\sqrt{D} = 20$. Then $r = \\frac{(-4 \\pm 20)}{2}$, giving $r = 8$ or $r = -12$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$9x^2 - 42x + 49 = 0$ (double root)`}</span>
              <div className="lrn-step-content">
                <p>{`Discriminant $= 1764 - 1764 = 0$. The formula gives one value: $x = \\frac{42}{18} = \\frac{7}{3}$. Check by factoring: $(3x - 7)^2 = 0$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$z^2 + 6iz + 7 = 0$ (complex coefficients)`}</span>
              <div className="lrn-step-content">
                <p>{`The derivation never assumed the coefficients were real. With $a = 1$, $b = 6i$, $c = 7$: discriminant $= (6i)^2 - 28 = -36 - 28 = -64$, and $\\sqrt{-64} = 8i$. So $z = \\frac{(-6i \\pm 8i)}{2}$, giving $z = i$ or $z = -7i$.`}</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>The Discriminant</h2>
            </div>
          </div>

          <p>{`The expression under the square root in the quadratic formula carries all the information you need about the type of roots. It has a name.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Discriminant</span>
            <div className="lrn-definition-desc">
              <p>{`$D = b^2 - 4ac$. When $a$, $b$, $c$ are real, the sign of $D$ tells you everything about the nature of the roots, without solving.`}</p>
            </div>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Sign of $D$</th>
                <th>Roots</th>
                <th>Parabola</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$D > 0$`}</td>
                <td>Two distinct real roots</td>
                <td>Crosses the $x$-axis twice</td>
              </tr>
              <tr>
                <td>{`$D = 0$`}</td>
                <td>One real root, doubled</td>
                <td>Touches the $x$-axis at one point</td>
              </tr>
              <tr>
                <td>{`$D < 0$`}</td>
                <td>Two complex conjugate roots</td>
                <td>Never touches the $x$-axis</td>
              </tr>
            </tbody>
          </table>

          <p>{`The middle case is sharper than it looks. When $D = 0$, the $+$ and $-$ in the formula both yield $x = -\\frac{b}{(2a)}$. The two solutions coincide; the parabola is tangent to the $x$-axis.`}</p>

          <p
            style={{
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              opacity: 0.5,
              margin: '16px 0 8px'
            }}
          >
            {`Drag the slider to move $c$ in $x^2 + x + c = 0$`}
          </p>
          <div className="lrn-graph">
            <InteractiveDiscriminantViz />
          </div>

          <p
            style={{
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              opacity: 0.5,
              margin: '16px 0 8px'
            }}
          >
            Three discriminant cases
          </p>
          <div className="lrn-graph">
            <ParabolaDiscriminantViz />
          </div>

          <div className="lrn-warning">
            <p>
              <strong>Notation reminder.</strong>
              {` When $D < 0$, write $\\sqrt{D} = i\\sqrt{-D}$, with the positive number $-D$ under the radical. For example, $\\sqrt{-43} = i\\sqrt{43}$, not $\\sqrt{43} \\cdot i$ with the wrong sign hidden inside.`}
            </p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Classify the roots of $x^2 + x + 11 = 0$`}</span>
              <div className="lrn-step-content">
                <p>{`$D = 1 - 44 = -43 < 0$, so the roots are complex: $x = \\dfrac{-1 \\pm i\\sqrt{43}}{2}$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find $a$ so that $ax^2 - 5x + 6 = 0$ has a double root`}</span>
              <div className="lrn-step-content">
                <p>{`A double root requires $D = 0$: $25 - 24a = 0$, giving $a = \\frac{25}{24}$.`}</p>
              </div>
            </div>
          </div>

          <h3>Complex Conjugate Root Theorem</h3>

          <p>{`If $a$, $b$, $c$ are real and $D < 0$, the quadratic formula gives $x = -\\frac{b}{(2a)} \\pm i\\\frac{\\sqrt{-D}}{(2a)}$. The two roots share the real part $-\\frac{b}{(2a)}$ and have opposite imaginary parts. They are conjugates of each other:`}</p>

          <div className="lrn-eq">{`$$x_1 = r + si, \\qquad x_2 = r - si$$`}</div>

          <p>{`So complex roots of a real-coefficient quadratic always come in matched pairs. If you find one, you have the other for free.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`One root of $x^2 + bx + c = 0$ is $1 - 3i$. Find $b$ and $c$.`}</span>
              <div className="lrn-step-content">
                <p>{`Since the coefficients are real, the other root is the conjugate $1 + 3i$. Their sum is $2$ and their product is $(1-3i)(1+3i) = 1 + 9 = 10$. From the relations $x_1 + x_2 = -b$ and $x_1 x_2 = c$ (next section): $b = -2$, $c = 10$.`}</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>{`Vieta's Formulas`}</h2>
            </div>
          </div>

          <p>{`Vieta's formulas connect the roots of a quadratic to its coefficients. You get the sum and the product of the roots straight from $a$, $b$, $c$ no square roots, no solving.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x_1 + x_2 = -\\frac{b}{a}, \\qquad x_1 x_2 = \\frac{c}{a}$$`}</span>
          </div>

          <p>{`For the monic form $x^2 + px + q = 0$, this simplifies further: sum $= -p$, product $= q$.`}</p>

          <div className="lrn-graph">
            <VietasRootsViz />
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Use Vieta's to predict the sum and product of the roots of $x^2 - 5x + 6 = 0$ without solving.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Sum $= -\\frac{(-5)}{1} = 5$. Product $= \\frac{6}{1} = 6$. Roots are $2$ and $3$, which match.`}</p>
            </details>
          </div>

          <h3>Two Proofs</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof 1: from the quadratic formula</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Adding the two roots: $\\dfrac{-b + \\sqrt{D}}{2a} + \\dfrac{-b - \\sqrt{D}}{2a} = \\dfrac{-2b}{2a} = -\\dfrac{b}{a}$. The $\\sqrt{D}$ terms cancel.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Multiplying them is a difference of squares: $\\dfrac{(-b)^2 - (\\sqrt{D})^2}{4a^2} = \\dfrac{b^2 - (b^2 - 4ac)}{4a^2} = \\dfrac{4ac}{4a^2} = \\dfrac{c}{a}$.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof 2: from the factored form</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`If the roots are $x_1$ and $x_2$, the quadratic factors as $a(x - x_1)(x - x_2)$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Expand: $a(x - x_1)(x - x_2) = ax^2 - a(x_1 + x_2)x + a x_1 x_2$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Match the coefficients with $ax^2 + bx + c$: $-a(x_1 + x_2) = b$ and $a x_1 x_2 = c$, giving the formulas.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Building a Quadratic from Its Roots</h3>

          <p>{`Vieta's runs in reverse too. If you know that the roots are $r$ and $s$, the monic quadratic with those roots is $x^2 - (r+s)x + rs = 0$. For example, roots $4$ and $-7$ give sum $-3$ and product $-28$, so $x^2 + 3x - 28 = 0$.`}</p>

          <h3>Symmetric Identities</h3>

          <p>{`Many quantities involving both roots can be expressed in terms of the sum and product alone, without ever knowing the roots individually.`}</p>

          <div className="lrn-eq">{`$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2 x_1 x_2 = \\frac{b^2 - 2ac}{a^2} \\cdot \\frac{a}{a} = \\frac{b^2}{a^2} - \\frac{2c}{a}$$`}</div>
          <div className="lrn-eq">{`$$|x_1 - x_2| = \\frac{\\sqrt{b^2 - 4ac}}{|a|}$$`}</div>
          <div className="lrn-eq">{`$$\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1 x_2} = -\\frac{b}{c}$$`}</div>

          <p>{`The first comes from expanding $(x_1 + x_2)^2 = x_1^2 + 2 x_1 x_2 + x_2^2$ and subtracting $2 x_1 x_2$. The second follows from $(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4 x_1 x_2$, which simplifies to $\\frac{D}{a^2}$. The third just adds two fractions, then plugs in Vieta's.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Find $x_1^2 + x_2^2$ for the roots of $x^2 - 4x + 1 = 0$.`}</p>
              <ol className="lrn-list">
                <li>{`Sum $= 4$, product $= 1$.`}</li>
                <li>{`$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2 x_1 x_2 = 16 - 2 = 14$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Find $|x_1 - x_2|$ for the roots of $2x^2 - 5x + 1 = 0$.`}</p>
              <ol className="lrn-list">
                <li>{`Compute $D = b^2 - 4ac$: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Apply $|x_1 - x_2| = \\frac{\\sqrt{D}}{|a|}$: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`For $x^2 - 3x + 1 = 0$, compute $x_1^3 + x_2^3$ using the identity $x_1^3 + x_2^3 = (x_1 + x_2)^3 - 3 x_1 x_2 (x_1 + x_2)$.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Parabola Graphs and Transformations</h2>
            </div>
          </div>

          <p>{`The graph of $y = ax^2 + bx + c$ is a parabola. Every algebraic feature of the quadratic shows up as a geometric feature of the curve.`}</p>

          <ul className="lrn-list">
            <li>{`Sign of $a$: $a > 0$ opens upward (U shape), $a < 0$ opens downward (arch shape).`}</li>
            <li>{`Axis of symmetry: the vertical line $x = -\\dfrac{b}{2a}$.`}</li>
            <li>{`Vertex: $\\left(-\\dfrac{b}{2a},\\, c - \\dfrac{b^2}{4a}\\right)$ the point on the axis of symmetry, lowest if $a > 0$ and highest if $a < 0$.`}</li>
            <li>{`Vertex form: $y = a(x - h)^2 + k$ places the vertex directly at $(h, k)$.`}</li>
            <li>{`$y$-intercept: $y(0) = c$.`}</li>
            <li>{`$x$-intercepts (real roots): zero, one, or two matching the sign of the discriminant $D = b^2 - 4ac$.`}</li>
          </ul>

          <p
            style={{
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              opacity: 0.5,
              margin: '16px 0 8px'
            }}
          >
            Interactive: drag the colored points to change a, b, c
          </p>
          <div className="lrn-graph">
            <InteractiveParabolaViz />
          </div>

          <h3>Reading the Coefficients from the Graph</h3>

          <p>{`Given a sketch of the parabola alone, you can read off the sign of each coefficient.`}</p>

          <ul className="lrn-list">
            <li>{`$a$: positive if the parabola opens up, negative if it opens down.`}</li>
            <li>{`$c$: equal to the $y$-coordinate of the point where the curve meets the $y$-axis. Positive if that intersection sits above the $x$-axis, negative if below, zero if the curve passes through the origin.`}</li>
            <li>{`$b$: the vertex is at $x = -\\frac{b}{(2a)}$, so the sign of $b$ is the opposite of the sign of $a$ times the sign of the vertex's $x$-coordinate. Quicker shortcut: the slope of the parabola at $x = 0$ equals $b$ going up across the $y$-axis means $b > 0$, going down means $b < 0$.`}</li>
          </ul>

          <h3>Worked Examples</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$y = x^2 - 2x - 3$`}</span>
              <div className="lrn-step-content">
                <p>{`Axis of symmetry: $x = -\\frac{(-2)}{(2 \\cdot 1)} = 1$. Vertex value: $y(1) = 1 - 2 - 3 = -4$. So the vertex is $(1, -4)$.`}</p>
                <p>{`Factor to find roots: $x^2 - 2x - 3 = (x - 3)(x + 1)$, so $x = 3$ or $x = -1$. As expected, the vertex sits halfway between the roots.`}</p>
                <p>{`Vertex form: $y = (x - 1)^2 - 4$ confirms the vertex at $(1, -4)$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$y = 2x^2 - 8x + 6$`}</span>
              <div className="lrn-step-content">
                <p>{`Axis of symmetry: $x = \\frac{8}{(2 \\cdot 2)} = 2$. Vertex value: $y(2) = 8 - 16 + 6 = -2$.`}</p>
                <p>{`Roots: $2x^2 - 8x + 6 = 2(x - 1)(x - 3)$, so $x = 1$ or $x = 3$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the vertex sit halfway between the two real roots?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A parabola is symmetric across the vertical line through its vertex. The two real roots are reflections of each other across that line, so their average is the vertex's $x$-coordinate. From Vieta's, the average of the roots is $\\frac{(x_1 + x_2)}{2} = -\\frac{b}{(2a)}$ exactly the axis of symmetry.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Quadratic Inequalities</h2>
            </div>
          </div>

          <p>{`A quadratic inequality asks for which $x$ the quadratic is positive (or negative, or non-negative, etc.). Because the factored form $a(x - r)(x - s)$ flips sign each time $x$ crosses a root, the answer is always an interval or a union of intervals bounded by the roots.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Sign chart method</span>
            <div className="lrn-definition-desc">
              <ol className="lrn-list">
                <li>{`Solve $ax^2 + bx + c = 0$ to find the roots $r \\leq s$.`}</li>
                <li>{`The roots split the real number line into three intervals: $x < r$, $r < x < s$, and $x > s$.`}</li>
                <li>{`Test one value from each interval. The sign of the quadratic stays the same inside each interval, because the function only changes sign by passing through zero.`}</li>
                <li>{`If $a > 0$ (parabola opens up): positive outside the roots, negative between them.`}</li>
                <li>{`If $a < 0$ (parabola opens down): negative outside, positive between.`}</li>
              </ol>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`For $x^2 - 3x + 2 > 0$, will the solution lie inside or outside the roots?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Outside. With $a = 1 > 0$ the parabola opens upward, so it is positive outside the roots and negative between them.`}</p>
            </details>
          </div>

          <div className="lrn-graph">
            <NumberLineInequalityViz />
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^2 - 3x + 2 > 0$`}</span>
              <div className="lrn-step-content">
                <p>{`Factor: $(x - 1)(x - 2) > 0$. Roots at $x = 1$ and $x = 2$.`}</p>
                <p>{`Test one value per interval. At $x = 0$: $(-1)(-2) = 2 > 0$ ✓. At $x = 1.5$: $(0.5)(-0.5) = -0.25 < 0$ ✗. At $x = 3$: $(2)(1) = 2 > 0$ ✓.`}</p>
                <p>{`Solution: $x < 1$ or $x > 2$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^2 - 3x + 2 < 0$`}</span>
              <div className="lrn-step-content">
                <p>{`Same roots; flip the answer. The quadratic is negative between the roots: $1 < x < 2$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^2 - x - 6 > 0$`}</span>
              <div className="lrn-step-content">
                <p>{`Factor: $(x - 3)(x + 2) > 0$. Roots at $x = 3$ and $x = -2$. Since $a > 0$, positive outside the roots: $x < -2$ or $x > 3$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>{`When $D < 0$:`}</strong>
              {` the quadratic has no real roots, so the sign never flips. It is positive everywhere if $a > 0$, negative everywhere if $a < 0$. Then $ax^2 + bx + c > 0$ has solution "all real numbers" when $a > 0$, and the opposite inequality has no solution at all.`}
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Solve $x^2 - 5x + 6 \\leq 0$.`}</p>
              <ol className="lrn-list">
                <li>{`Factor: $(x - 2)(x - 3) \\leq 0$. Roots: $x = 2$, $x = 3$.`}</li>
                <li>{`$a = 1 > 0$, so the quadratic is non-positive between the roots, including the endpoints.`}</li>
                <li>{`Solution: $2 \\leq x \\leq 3$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Solve $x^2 + x - 6 < 0$.`}</p>
              <ol className="lrn-list">
                <li>{`Factor and find the roots: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Sign of $a$: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Solution: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Solve $2x^2 - 7x + 3 > 0$.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Maximum and Minimum Values</h2>
            </div>
          </div>

          <p>{`A quadratic reaches its extreme value at the vertex. Completing the square writes any $ax^2 + bx + c$ as $a(x - h)^2 + k$, with the vertex at $(h, k) = \\left(-\\dfrac{b}{2a},\\, c - \\dfrac{b^2}{4a}\\right)$. Since $(x - h)^2 \\geq 0$ for every real $x$, the term $a(x-h)^2$ is non-negative when $a > 0$ and non-positive when $a < 0$. The extreme value $k$ is reached only at $x = h$.`}</p>

          <ul className="lrn-list">
            <li>{`$a > 0$: the parabola opens up, the vertex is the minimum. $f_{\\min} = c - \\dfrac{b^2}{4a}$ at $x = -\\dfrac{b}{2a}$.`}</li>
            <li>{`$a < 0$: the parabola opens down, the vertex is the maximum. $f_{\\max} = c - \\dfrac{b^2}{4a}$ at $x = -\\dfrac{b}{2a}$.`}</li>
          </ul>

          <div className="lrn-graph">
            <MaxMinViz />
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`For $f(x) = x^2 - 4x + 7$, at what $x$ does the minimum occur?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$x = -\\frac{(-4)}{(2 \\cdot 1)} = 2$.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Minimum of $f(x) = x^2 - 4x + 7$`}</span>
              <div className="lrn-step-content">
                <p>{`$a = 1 > 0$, so the vertex is a minimum. Vertex $x = 2$, $f(2) = 4 - 8 + 7 = 3$. Confirm by completing the square: $f(x) = (x - 2)^2 + 3$, so $f(x) \\geq 3$ with equality at $x = 2$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Maximum of $f(x) = -x^2 + 4x - 1$`}</span>
              <div className="lrn-step-content">
                <p>{`$a = -1 < 0$, so the vertex is a maximum. Vertex $x = 2$, $f(2) = -4 + 8 - 1 = 3$. The maximum value is $3$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Largest possible product of two numbers summing to $1$`}</span>
              <div className="lrn-step-content">
                <p>{`Let one number be $x$; the other is $1 - x$. Their product is $f(x) = x(1 - x) = -x^2 + x$.`}</p>
                <p>{`This is a downward-opening parabola with vertex at $x = -\\frac{1}{(2 \\cdot -1)} = \\frac{1}{2}$. Then $f(\\frac{1}{2}) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$.`}</p>
                <p>{`So the maximum product is $\\frac{1}{4}$, reached when both numbers equal $\\frac{1}{2}$. Geometrically: among all rectangles of a fixed perimeter, the square has the largest area.`}</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Biquadratic and Symmetric Equations</h2>
            </div>
          </div>

          <p>{`Some higher-degree equations hide a quadratic inside them. A careful substitution lifts the disguise. The two patterns below are the most useful examples: both turn into a simple quadratic in a new variable, which you solve and then invert.`}</p>

          <h3>Biquadratic Equations</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Biquadratic equation</span>
            <div className="lrn-definition-desc">
              <p>{`An equation of the form $ax^4 + bx^2 + c = 0$ only even powers of $x$ appear. Set $y = x^2$. The equation becomes $ay^2 + by + c = 0$, a quadratic in $y$. Solve it, then recover $x$ from $x^2 = y$, taking both square roots.`}</p>
            </div>
          </div>

          <div className="lrn-warning">
            <p>
              <strong>{`Reject $y < 0$ for real $x$.`}</strong>
              {` Since $y = x^2 \\geq 0$ for real $x$, a negative value of $y$ gives no real solution. (It still gives complex solutions $x = \\pm i\\sqrt{-y}$.)`}
            </p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^4 - 5x^2 + 4 = 0$`}</span>
              <div className="lrn-step-content">
                <p>{`Let $y = x^2$. Then $y^2 - 5y + 4 = (y - 1)(y - 4) = 0$, so $y = 1$ or $y = 4$.`}</p>
                <p>{`Both are non-negative. Recover $x$: $x^2 = 1$ gives $x = \\pm 1$, $x^2 = 4$ gives $x = \\pm 2$. Four real solutions.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^4 + x^2 - 2 = 0$ over the reals`}</span>
              <div className="lrn-step-content">
                <p>{`Let $y = x^2$. Then $(y + 2)(y - 1) = 0$, so $y = -2$ or $y = 1$. Reject $y = -2$. From $y = 1$: $x = \\pm 1$.`}</p>
              </div>
            </div>
          </div>

          <h3>Symmetric Equations</h3>

          <p>{`A degree-4 equation whose coefficients read the same forwards and backwards is called symmetric (or palindromic). The standard example is $ax^4 + bx^3 + cx^2 + bx + a = 0$. The trick is to divide both sides by $x^2$ assuming $x \\neq 0$, which is fine since $a \\neq 0$ rules out $x = 0$ as a root. Then group the terms with matching pairs:`}</p>

          <div className="lrn-eq">{`$$a\\left(x^2 + \\tfrac{1}{x^2}\\right) + b\\left(x + \\tfrac{1}{x}\\right) + c = 0$$`}</div>

          <p>{`Let $y = x + \\frac{1}{x}$. Then $y^2 = x^2 + 2 + \\frac{1}{x^2}$, so $x^2 + \\frac{1}{x^2} = y^2 - 2$. Substituting gives a plain quadratic in $y$:`}</p>

          <div className="lrn-eq">{`$$a(y^2 - 2) + b y + c = 0$$`}</div>

          <p>{`Solve for $y$, then for each value of $y$ solve $x + \\frac{1}{x} = y$, i.e. $x^2 - yx + 1 = 0$, with the quadratic formula.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $x^2 + x + 1 + \\tfrac{1}{x} + \\tfrac{1}{x^2} = 0$`}</span>
              <div className="lrn-step-content">
                <p>{`Set $y = x + \\frac{1}{x}$, so $x^2 + \\frac{1}{x^2} = y^2 - 2$. The equation becomes $(y^2 - 2) + y + 1 = y^2 + y - 1 = 0$.`}</p>
                <p>{`Solve for $y$: $y = \\dfrac{-1 \\pm \\sqrt{5}}{2}$.`}</p>
                <p>{`For each $y$, solve $x^2 - yx + 1 = 0$ with the quadratic formula to recover $x$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does each substitution drop the degree?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Both equations have hidden structure that the substitution exposes. A biquadratic uses only even powers of $x$, so renaming $x^2$ as $y$ collapses $x^4$ to $y^2$. A symmetric equation is invariant when you swap $x$ and $\\frac{1}{x}$, which is exactly the symmetry of $x + \\frac{1}{x}$. In both cases the new variable absorbs the pattern, and what remains is an ordinary quadratic.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Applications and Word Problems</h2>
            </div>
          </div>

          <h3>Building a Quadratic from Its Roots</h3>

          <p>{`If you want a monic quadratic whose roots are exactly $r$ and $s$, write it directly using Vieta's: the linear coefficient is the negative of the sum of roots, and the constant is their product.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x^2 - (r + s)x + rs = 0$$`}</span>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Roots $3$ and $-2$`}</span>
              <div className="lrn-step-content">
                <p>{`Sum $= 1$, product $= -6$, giving $x^2 - x - 6 = 0$.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Complex-conjugate roots $1 - 3i$ and $1 + 3i$`}</span>
              <div className="lrn-step-content">
                <p>{`Sum $= 2$, product $= (1)^2 + (3)^2 = 10$. The resulting quadratic $x^2 - 2x + 10 = 0$ has real coefficients, as expected for a conjugate pair.`}</p>
              </div>
            </div>
          </div>

          <h3>Rational Equations That Become Quadratics</h3>

          <p>
            {`If an equation contains fractions whose denominators include $x$, multiply both sides by the least common denominator. The result is usually a polynomial equation often a quadratic. After solving, check every candidate against the original equation: any value that makes a denominator zero is an `}
            <strong>extraneous root</strong>
            {`, introduced by the multiplication step and not actually a solution.`}
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $\\dfrac{x}{x-1} + \\dfrac{1}{x-2} = 3$`}</span>
              <div className="lrn-step-content">
                <p>{`Excluded values: $x = 1$ and $x = 2$ make a denominator zero. Multiply both sides by $(x - 1)(x - 2)$.`}</p>
                <p>{`$x(x - 2) + (x - 1) = 3(x - 1)(x - 2)$, which expands to $x^2 - x - 1 = 3x^2 - 9x + 6$ and rearranges to $2x^2 - 8x + 7 = 0$.`}</p>
                <p>{`Quadratic formula: $x = \\dfrac{8 \\pm \\sqrt{64 - 56}}{4} = 2 \\pm \\dfrac{\\sqrt{2}}{2}$. Neither value equals $1$ or $2$, so both are valid.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-warning">
            <p>
              <strong>Check for extraneous roots.</strong>
              {` Whenever you multiply both sides by an expression containing $x$, list the excluded values before you start solving. After solving, discard any candidate that matches one of those values.`}
            </p>
          </div>

          <h3>The Golden Ratio</h3>

          <p>{`A golden rectangle has the property that removing a square from one end leaves a smaller rectangle with the same proportions as the original. If the long side is $\\ell$ and the short side is $w$, the condition is:`}</p>

          <div className="lrn-eq">{`$$\\frac{\\ell}{w} = \\frac{\\ell + w}{\\ell}$$`}</div>

          <p>{`Let $x = \\frac{\\ell}{w}$. Then $x = 1 + \\frac{w}{\\ell} = 1 + \\frac{1}{x}$, which rearranges to:`}</p>

          <div className="lrn-eq">{`$$x^2 - x - 1 = 0$$`}</div>

          <p>{`The positive root is the golden ratio. (The negative root is also a solution of the quadratic, but does not represent a ratio of positive lengths.)`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$$`}</span>
          </div>

          <h3>Roots Scaling</h3>

          <p>{`Sometimes you would rather work with a monic quadratic but the natural form of the problem is non-monic. There is a clean way to switch: if $r$ is a root of $ax^2 + bx + c = 0$, then $ar$ is a root of the monic equation`}</p>

          <div className="lrn-eq">{`$$x^2 + bx + ac = 0$$`}</div>

          <p>{`Multiplying each root by $a$ clears denominators when those roots are fractions.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Example`}</span>
              <div className="lrn-step-content">
                <p>{`$2x^2 - 5x + 2 = 0$ has roots $2$ and $\\frac{1}{2}$. The scaled equation $x^2 - 5x + 4 = 0$ has roots $4$ and $1$ each old root multiplied by $a = 2$.`}</p>
                <p>{`Why does this work? Substitute $x = ar$ into $x^2 + bx + ac$: $(ar)^2 + b(ar) + ac = a(ar^2 + br + c) = a \\cdot 0 = 0$.`}</p>
              </div>
            </div>
          </div>

          <h3>{`The Degenerate Case $a \\to 0$`}</h3>

          <p>{`As the leading coefficient shrinks toward zero, the parabola flattens. One root stays near $-\\frac{c}{b}$ the solution of the linear equation $bx + c = 0$ while the other escapes to infinity. At $a = 0$ exactly, the equation is no longer a quadratic; it is the linear equation with one solution $x = -\\frac{c}{b}$. The "missing" root is the same one the alternative quadratic formula $x = \\frac{2c}{-b \\pm \\sqrt{b^2 - 4ac}}$ exposes: the form that stays well-behaved as $a \\to 0$.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Rationalizing Denominators</h2>
            </div>
          </div>

          <p>
            {`To `}
            <strong>rationalize a denominator</strong>
            {` is to rewrite a fraction so that no square roots appear below the fraction bar. The standard tool is the difference of squares: $(a + b)(a - b) = a^2 - b^2$. When $a$ and $b$ contain square roots, the squares remove the radicals and the denominator becomes an ordinary integer or rational number.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Real conjugate</span>
            <div className="lrn-definition-desc">
              <p>{`The conjugate of $a + b\\sqrt{c}$ is $a - b\\sqrt{c}$. Their product $(a + b\\sqrt{c})(a - b\\sqrt{c}) = a^2 - b^2 c$ contains no square root. Multiplying numerator and denominator by the conjugate equals multiplying the fraction by $1$, so its value never changes.`}</p>
            </div>
          </div>

          <div className="lrn-insight">
            {`This is the same move as complex division. To clear $a + bi$ from a denominator, multiply by its conjugate $a - bi$; the product $a^2 + b^2$ is real. The radical case and the complex case are two faces of the same difference-of-squares identity.`}
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`What do you multiply $\\dfrac{1}{\\sqrt{3} + \\sqrt{2}}$ by to clear the denominator?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Multiply the top and bottom by the conjugate $\\sqrt{3} - \\sqrt{2}$.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Rationalize $\\dfrac{1}{\\sqrt{3} + \\sqrt{2}}$`}</span>
              <div className="lrn-step-content">
                <div className="lrn-eq">{`$$\\frac{1}{\\sqrt{3} + \\sqrt{2}} \\cdot \\frac{\\sqrt{3} - \\sqrt{2}}{\\sqrt{3} - \\sqrt{2}} = \\frac{\\sqrt{3} - \\sqrt{2}}{3 - 2} = \\sqrt{3} - \\sqrt{2}$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Rationalize $\\dfrac{3}{2 - \\sqrt{5}}$`}</span>
              <div className="lrn-step-content">
                <div className="lrn-eq">{`$$\\frac{3}{2 - \\sqrt{5}} \\cdot \\frac{2 + \\sqrt{5}}{2 + \\sqrt{5}} = \\frac{3(2 + \\sqrt{5})}{4 - 5} = -3(2 + \\sqrt{5})$$`}</div>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is the rationalized form often easier to work with?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Two reasons. First, the rationalized form makes the size of the number visible $\\sqrt{3} - \\sqrt{2}$ is easier to estimate than $\\frac{1}{\\sqrt{3} + \\sqrt{2}}$. Second, adding fractions with radical denominators requires a common denominator, and finding one is far easier after rationalization turns the denominators into ordinary integers.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Historical Note: Al-Khwarizmi</h2>
            </div>
          </div>

          <p>
            {`The word "algebra" comes from the title of a 9th-century book, `}
            <em>Hisab al-jabr w'al-muqabala</em>
            {`, written by the Persian mathematician Muhammad ibn Musa al-Khwarizmi. "Al-jabr" means moving a negative term across an equation (restoring); "al-muqabala" means cancelling equal terms on the two sides (balancing). Together they are the two basic moves of solving an equation.`}
          </p>

          <p>{`Working without zero, without negative numbers, and without modern symbolic notation, al-Khwarizmi classified quadratics into six canonical forms and solved each one geometrically. His proof of completing the square is exactly the diagram below.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Al-Khwarizmi's example is $x^2 + 10x = 39$. What shape did he use to represent the left side?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A central square of side $x$ with four rectangles of width $2.5$ attached, one to each side, so that the linear term $10x$ becomes the area of those four rectangles ($4 \\cdot 2.5x = 10x$).`}</p>
            </details>
          </div>

          <p>{`Adding four small corner squares of side $2.5$ completes the figure into a larger square of side $x + 5$. The total corner area is $4 \\times 2.5^2 = 25$, so adding $25$ to both sides of the equation gives:`}</p>

          <div className="lrn-eq">{`$$x^2 + 10x + 25 = 39 + 25 = 64 \\quad\\Rightarrow\\quad (x+5)^2 = 64 \\quad\\Rightarrow\\quad x = 3$$`}</div>

          <div className="lrn-graph">
            <AlKhwarizmiViz />
          </div>

          <div className="lrn-insight">
            {`Adding $(\\frac{b}{2})^2 = (\\frac{10}{2})^2 = 25$ in symbols is exactly the same act as fitting the four corner squares in al-Khwarizmi's diagram. Modern algebra discards the pictures and keeps the rules, but the logic has not changed in twelve hundred years.`}
          </div>
        </>
      ]
    },

    practice: [
      // Standard form
      {
        q: 'Put $4x^2 = 5x - 1$ into standard form and identify $a$, $b$, $c$.',
        a: '$4x^2 - 5x + 1 = 0$. So $a = 4$, $b = -5$, $c = 1$.'
      },
      // Factoring
      {
        q: 'Solve $x^2 - 5x + 6 = 0$ by factoring.',
        a: 'Two numbers multiplying to 6 and adding to $-5$: $-2$ and $-3$. Write $(x-2)(x-3) = 0$. By zero-product: $x = 2$ or $x = 3$.'
      },
      {
        q: 'What does the zero-product property say, and why is it the foundation of solving by factoring?',
        a: 'If $A \\cdot B = 0$, then $A = 0$ or $B = 0$. Factoring rewrites the quadratic as a product. The property turns one equation into two simpler ones.'
      },
      {
        q: 'Solve $2x^2 + 5x + 3 = 0$ by factoring.',
        a: '$ac = 6$. Numbers multiplying to $6$ and adding to $5$: $2$ and $3$. Rewrite: $2x^2 + 2x + 3x + 3 = (2x+3)(x+1) = 0$. So $x = -\\frac{3}{2}$ or $x = -1$.'
      },
      // Special factorizations
      {
        q: 'Factor $x^4 - 16$ completely.',
        a: '$x^4 - 16 = (x^2-4)(x^2+4) = (x-2)(x+2)(x^2+4)$. The factor $x^2+4$ has no real factors.'
      },
      {
        q: "Why can't you factor $a^2 + b^2$ over the real numbers?",
        a: 'You need $p + q = 0$ and $pq = 1$, giving $p^2 = -1$. No real number squares to $-1$. Over the complex numbers it factors as $(a+bi)(a-bi)$.'
      },
      {
        q: 'Factor $25a^2 - 9b^2$.',
        a: '$(5a-3b)(5a+3b)$.'
      },
      {
        q: 'How do you recognize a perfect square trinomial? Why does $4x^2 - 12x + 9$ qualify?',
        a: 'First term $(2x)^2$, last term $3^2$, middle term $12x = 2 \\times 2x \\times 3$. All match: $4x^2 - 12x + 9 = (2x-3)^2$.'
      },
      {
        q: 'Factor $8a^3 + 27b^3$.',
        a: '$(2a+3b)(4a^2-6ab+9b^2)$.'
      },
      {
        q: 'Factor $x^3 - 8$.',
        a: '$(x-2)(x^2+2x+4)$.'
      },
      // SFFT
      {
        q: 'Apply the SFFT to find all integer pairs $(x, y)$ with $xy + x + y = 11$.',
        a: 'Add $1$: $(x+1)(y+1) = 12$. Factor pairs of $12$ give all solutions by subtracting $1$ from each factor.'
      },
      {
        q: 'Apply the SFFT to factor $xy - 2x - 3y + 6$.',
        a: '$x(y-2) - 3(y-2) = (x-3)(y-2)$.'
      },
      {
        q: 'How does the SFFT work algebraically?',
        a: '$xy + ax + by + ab = (x+b)(y+a)$. Adding $ab$ fills the missing piece, analogous to adding $(\\frac{b}{2})^2$ to complete the square.'
      },
      {
        q: 'Solve the Diophantine equation $xy + x + y = 17$ for positive integers.',
        a: 'Add $1$: $(x+1)(y+1) = 18$. Factor pairs with both factors $> 1$: $(2,9),(3,6),(6,3),(9,2)$. Solutions: $(x,y) \\in \\{(1,8),(2,5),(5,2),(8,1)\\}$.'
      },
      // Complex numbers
      {
        q: 'What is $i^{23}$?',
        a: '$23 = 4 \\times 5 + 3$, remainder $3$. So $i^{23} = i^3 = -i$.'
      },
      {
        q: 'Compute $(2+3i)(1-i)$.',
        a: 'Expand: $2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i$.'
      },
      {
        q: 'What is the conjugate of $3 - 5i$, and what do you get when you multiply $3 - 5i$ by its conjugate?',
        a: 'Conjugate: $3 + 5i$. Product: $(3-5i)(3+5i) = 9 + 25 = 34$.'
      },
      {
        q: 'Compute $(3+2i) \\div (1-i)$.',
        a: '$\\frac{(3+2i)(1+i)}{2} = \\frac{1+5i}{2}$.'
      },
      {
        q: 'Why does dividing by a complex number require multiplying by its conjugate?',
        a: 'The conjugate product $(c+di)(c-di) = c^2 + d^2$ is always real. Multiplying both top and bottom converts the denominator to a real number you can divide into directly.'
      },
      // Completing the square
      {
        q: 'Solve $x^2 + 6x + 5 = 0$ by completing the square.',
        a: '$x^2 + 6x = -5$. Add $9$: $(x+3)^2 = 4$. $x + 3 = \\pm 2$. $x = -1$ or $x = -5$.'
      },
      {
        q: 'Solve $x^2 - 4x + 7 = 0$.',
        a: '$(x-2)^2 = -3$. $x = 2 \\pm i\\sqrt{3}$.'
      },
      {
        q: 'Why do we add to both sides when completing the square?',
        a: 'Adding to only the left changes the equation. Adding to both sides keeps the equality true.'
      },
      {
        q: 'Why does completing the square still work when the discriminant is negative?',
        a: 'The algebraic steps require no assumption about sign. When $D < 0$, the right side is negative, giving a complex square root. The method produces complex roots without breaking.'
      },
      {
        q: 'Explain why completing the square is more than a root-finding method.',
        a: 'Vertex form $a(x+h)^2 + k$ reveals the vertex $(-h, k)$, axis of symmetry, and min/max. The quadratic formula finds roots but gives none of this geometric information.'
      },
      {
        q: 'Explain why you cannot take $\\sqrt{x^2 + bx}$ without completing the square first.',
        a: '$x^2 + bx$ is not a perfect square. Adding $(\\frac{b}{2})^2$ creates $(x+\\frac{b}{2})^2$. Only then can you take the square root cleanly.'
      },
      // Quadratic formula
      {
        q: 'Use the quadratic formula to solve $2x^2 - 7x + 3 = 0$.',
        a: '$a = 2$, $b = -7$, $c = 3$. $D = 49 - 24 = 25$. $x = \\frac{(7 \\pm 5)}{4}$. So $x = 3$ or $x = \\frac{1}{2}$.'
      },
      {
        q: 'Solve $5x^2 + 3x + 9 = 0$ using the quadratic formula.',
        a: '$D = 9 - 180 = -171$. $x = \\frac{-3 \\pm 3i\\sqrt{19}}{10}$.'
      },
      {
        q: 'Solve $r^2 + 4r - 96 = 0$.',
        a: '$D = 16 + 384 = 400$. $r = \\frac{(-4 \\pm 20)}{2}$. $r = 8$ or $r = -12$.'
      },
      {
        q: 'Solve $9x^2 - 42x + 49 = 0$.',
        a: '$D = 0$. Double root: $x = \\frac{42}{18} = \\frac{7}{3}$. Confirm: $(3x-7)^2 = 0$.'
      },
      {
        q: 'Solve $z^2 + 6iz + 7 = 0$.',
        a: '$D = (6i)^2 - 28 = -64$. $\\sqrt{-64} = 8i$. $z = \\frac{(-6i \\pm 8i)}{2}$. So $z = i$ or $z = -7i$.'
      },
      {
        q: 'Solve $3y^2 - 14y = -8 + 5y$.',
        a: 'Rearrange: $3y^2 - 19y + 8 = 0$. $D = 361 - 96 = 265$. $y = \\frac{(19 \\pm \\sqrt{265})}{6}$.'
      },
      {
        q: 'How do you choose which solving method to use for a quadratic?',
        a: 'Factor first if roots look like integers. Use difference of squares or perfect square if the pattern is visible. Complete the square for vertex form. Use the quadratic formula when nothing else is obvious.'
      },
      // Discriminant
      {
        q: 'If $D = b^2 - 4ac < 0$, how many times does the parabola $y = ax^2 + bx + c$ cross the $x$-axis?',
        a: 'Zero times. When $D < 0$, both roots are complex. No real $x$ makes $y = 0$. The parabola stays entirely above (if $a > 0$) or below (if $a < 0$) the axis.'
      },
      {
        q: 'What value of $a$ gives $ax^2 - 5x + 6 = 0$ exactly one solution?',
        a: '$D = 0$: $25 - 24a = 0 \\Rightarrow a = \\frac{25}{24}$.'
      },
      {
        q: 'Explain complex roots of a real-coefficient quadratic always come in conjugate pairs.',
        a: 'The formula gives $x = -\\frac{b}{2a} \\pm \\frac{\\sqrt{D}}{2a}$. Real part $-\\frac{b}{2a}$ is equal for both. Imaginary parts are $\\pm\\frac{\\sqrt{|D|}}{2a}$: negatives of each other. So the roots are $r + si$ and $r - si$.'
      },
      {
        q: 'Explain what the discriminant tells you about the graph before solving.',
        a: '$D > 0$: two x-intercepts. $D = 0$: parabola tangent to x-axis. $D < 0$: no x-intercepts. You can draw the qualitative shape from $D$ and the sign of $a$ alone.'
      },
      {
        q: '$x^2 + x + 11 = 0$: without solving, determine the type of roots.',
        a: '$D = 1 - 44 = -43 < 0$. Two complex conjugate roots. No real solutions.'
      },
      // Vieta's formulas
      {
        q: "For $x^2 - 5x + 6 = 0$, use Vieta's formulas to find the sum and product of the roots.",
        a: '$p = -5$, $q = 6$. Sum $= -p = 5$. Product $= q = 6$. Verify: roots are $2$ and $3$; $2+3=5$, $2 \\times 3=6$.'
      },
      {
        q: "Using Vieta's formulas, find $x_1^2 + x_2^2$ for the roots of $x^2 - 4x + 1 = 0$.",
        a: 'Sum $= 4$, product $= 1$. $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1 x_2 = 16 - 2 = 14$.'
      },
      {
        q: 'Find $|x_1 - x_2|$ for the roots of $3x^2 - 7x + 2 = 0$.',
        a: '$D = 49 - 24 = 25$. $|x_1 - x_2| = \\frac{\\sqrt{D}}{|a|} = \\frac{5}{3}$.'
      },
      {
        q: "Derive the Vieta's sum formula from the quadratic formula.",
        a: '$x_1 + x_2 = \\frac{-b+\\sqrt{D}}{2a} + \\frac{-b-\\sqrt{D}}{2a} = \\frac{-2b}{2a} = -\\frac{b}{a}$. The $\\sqrt{D}$ terms cancel.'
      },
      {
        q: 'If the roots of a quadratic sum to $7$ and multiply to $10$, write the monic quadratic.',
        a: '$x^2 - 7x + 10 = 0$.'
      },
      {
        q: "Verify Vieta's formulas for $x^2 + 3x + 2 = 0$.",
        a: "Roots: $-1$ and $-2$. Sum $= -3 = -(3)$. Product $= 2$. Both match Vieta's."
      },
      {
        q: "Prove that the Vieta's product formula follows from the factored form.",
        a: '$(x-x_1)(x-x_2) = x^2 - (x_1+x_2)x + x_1 x_2$. Match constant terms: $x_1 x_2 = q$.'
      },
      {
        q: "When should you prefer Vieta's formulas over the quadratic formula?",
        a: "Use Vieta's for symmetric functions (sum, product, sum of squares) without needing individual root values. Use the formula when you need each root explicitly."
      },
      // Parabola
      {
        q: 'For $y = x^2 - 2x - 3$, find the vertex, axis of symmetry, and roots.',
        a: 'Axis: $x = 1$. Vertex: $(1, -4)$. Roots: $(x-3)(x+1) = 0$, so $x = 3$ or $x = -1$.'
      },
      {
        q: 'A parabola has vertex at $(3, -5)$ and opens upward. Write it in vertex form.',
        a: '$y = a(x-3)^2 - 5$ with $a > 0$. Without more information, $a$ is undetermined, but the form is $y = a(x-3)^2 - 5$.'
      },
      // Quadratic inequalities
      {
        q: 'Solve the inequality $x^2 - 3x + 2 > 0$.',
        a: '$(x-1)(x-2) > 0$. Roots: $x = 1$, $x = 2$. Test $x = 0$: positive. Test $x = 1.5$: negative. Test $x = 3$: positive. Solution: $x < 1$ or $x > 2$.'
      },
      {
        q: 'For $ax^2 + bx + c > 0$ with $a > 0$ and $D > 0$, where is the solution?',
        a: 'Outside the roots. The parabola opens upward, so it is positive outside the two roots: $x < r$ or $x > s$.'
      },
      {
        q: 'Solve $x^2 - x - 6 > 0$.',
        a: '$(x-3)(x+2) > 0$. Since $a > 0$, positive outside the roots. Solution: $x < -2$ or $x > 3$.'
      },
      {
        q: 'Solve $x^2 - x - 6 < 0$.',
        a: 'Roots: $x = 3$, $x = -2$. Since $a > 0$, negative between roots. Solution: $-2 < x < 3$.'
      },
      {
        q: 'What happens when you solve $ax^2 + bx + c < 0$ with $a > 0$ and $D < 0$?',
        a: 'No solution. When $D < 0$ and $a > 0$, the parabola stays entirely above the $x$-axis. The inequality has no solution.'
      },
      {
        q: 'Why does the sign stay the same between consecutive roots in a quadratic inequality?',
        a: 'The quadratic is continuous. It can only change sign by passing through zero. The only zeros are the roots. Between roots, no sign change is possible.'
      },
      {
        q: 'For $x^2 - x - 6 \\geq 0$, state the solution set.',
        a: 'Roots $x = 3$, $x = -2$. Non-negative outside and at the roots: $x \\leq -2$ or $x \\geq 3$.'
      },
      // Max/Min
      {
        q: 'For $f(x) = x^2 - 4x + 7$, find the minimum value and $x$ where it occurs.',
        a: 'Vertex $x = 2$. $f(2) = 3$. Minimum is $3$ at $x = 2$. Confirm: $f(x) = (x-2)^2 + 3$.'
      },
      {
        q: 'For $f(x) = -x^2 + 4x - 1$, find the maximum value.',
        a: '$a < 0$: maximum. $x = 2$. $f(2) = 3$. Maximum is $3$.'
      },
      {
        q: 'What is the minimum of $f(x) = 3x^2 - 12x + 7$?',
        a: '$x = 2$. $f(2) = 12 - 24 + 7 = -5$. Minimum is $-5$.'
      },
      // Biquadratic
      {
        q: 'Find all solutions to $x^4 - 5x^2 + 4 = 0$.',
        a: 'Let $y = x^2$: $(y-1)(y-4) = 0$. $y = 1$ or $y = 4$. So $x \\in \\{-2, -1, 1, 2\\}$.'
      },
      {
        q: 'Solve $x^4 + x^2 - 2 = 0$ over the reals.',
        a: 'Let $y = x^2$: $(y+2)(y-1) = 0$. $y = -2$ rejected. $y = 1$ gives $x = \\pm 1$.'
      },
      {
        q: 'Why do we reject $y = -2$ in $x^4 + x^2 - 2 = 0$ for real solutions?',
        a: '$x^2 \\geq 0$ for all real $x$. If $y = x^2 = -2$, then $x = \\pm i\\sqrt{2}$, not real.'
      },
      {
        q: 'Why does $y = x + \\frac{1}{x}$ reduce a symmetric degree-4 equation to degree 2?',
        a: 'After dividing by $x^2$, the equation has $x^2 + \\frac{1}{x^2} = y^2 - 2$ and $x + \\frac{1}{x} = y$. Every term becomes a polynomial in $y$. Degree drops from 4 to 2.'
      },
      {
        q: 'Solve the symmetric equation $x^2 + x + 1 + \\frac{1}{x} + \\frac{1}{x^2} = 0$.',
        a: 'Let $y = x + \\frac{1}{x}$: $y^2 + y - 1 = 0$. $y = \\frac{(-1 \\pm \\sqrt{5})}{2}$. Recover $x$ from $x^2 - yx + 1 = 0$ for each $y$.'
      },
      // Applications
      {
        q: 'Construct the quadratic with roots $1-3i$ and $1+3i$.',
        a: 'Sum $= 2$, product $= 10$. Monic: $x^2 - 2x + 10 = 0$.'
      },
      {
        q: 'A quadratic has roots $5+2i$ and $5-2i$. Write the monic quadratic equation.',
        a: 'Sum $= 10$, product $= 25+4 = 29$. Equation: $x^2 - 10x + 29 = 0$.'
      },
      {
        q: "A rectangle's sides satisfy $\\frac{\\ell}{w} = \\frac{(\\ell+w)}{\\ell}$. Find the ratio $\\frac{\\ell}{w}$.",
        a: '$x^2 - x - 1 = 0$. $x = \\frac{(1+\\sqrt{5})}{2} \\approx 1.618$ (golden ratio, positive root only).'
      },
      {
        q: 'Solve $\\frac{x}{x-1} + \\frac{1}{x-2} = 3$.',
        a: 'Multiply by $(x-1)(x-2)$: $2x^2 - 8x + 7 = 0$. $x = 2 \\pm \\frac{\\sqrt{2}}{2}$. Neither root equals $1$ or $2$, so neither is extraneous.'
      },
      {
        q: 'Why must you check for extraneous roots after multiplying a rational equation by an LCD containing $x$?',
        a: 'Multiplying by the LCD is valid only when it is non-zero. If a solution makes the LCD zero, the original is undefined. That solution is extraneous.'
      },
      {
        q: 'Predict: if you square both sides of $\\sqrt{x} = x - 2$, what could go wrong?',
        a: 'Squaring gives $x^2 - 5x + 4 = 0$: $x = 1$ or $x = 4$. Check $x = 1$: $\\sqrt{1} = 1 \\neq -1$. Extraneous. Only $x = 4$ is valid.'
      },
      {
        q: 'Prove: if $r$ is a root of $ax^2 + bx + c = 0$, then $ar$ is a root of $x^2 + bx + ac = 0$.',
        a: 'Substitute $x = ar$: $(ar)^2 + b(ar) + ac = a(ar^2 + br + c) = a \\times 0 = 0$.'
      },
      {
        q: 'If you replace the leading coefficient with $0$, what happens to the number of solutions?',
        a: 'The equation becomes linear: $bx + c = 0$. One solution $x = -\\frac{c}{b}$. One root escaped to infinity as $a \\to 0$.'
      },
      {
        q: 'For $x^2 + 4x - 12 = 0$, which method would you choose and why?',
        a: 'Try factoring: need numbers multiplying to $-12$ and adding to $4$: $6$ and $-2$. $(x+6)(x-2) = 0$, $x = -6$ or $x = 2$. Factoring works in seconds.'
      },
      // Rationalizing
      {
        q: 'Rationalize $\\dfrac{1}{\\sqrt{3}+\\sqrt{2}}$.',
        a: 'Multiply by the conjugate $\\sqrt{3}-\\sqrt{2}$. Denominator: $3 - 2 = 1$. Result: $\\sqrt{3} - \\sqrt{2}$.'
      },
      {
        q: 'Rationalize $\\dfrac{3}{2-\\sqrt{5}}$.',
        a: 'Multiply by $(2+\\sqrt{5})$: denominator $= 4-5 = -1$. Result: $-3(2+\\sqrt{5})$.'
      },
      {
        q: 'When would rationalizing a denominator make an expression easier to work with?',
        a: 'Rationalized form is easier to estimate and compare. Adding fractions with radical denominators requires a common denominator, which rationalization helps find.'
      },
      {
        q: 'Given roots $r, s$ of $x^2 + bx + ac = 0$, what are the roots of $ax^2 + bx + c = 0$?',
        a: '$\\frac{r}{a}$ and $\\frac{s}{a}$. The roots of $ax^2 + bx + c = 0$ are the roots of $x^2 + bx + ac = 0$ divided by $a$.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Quadratic Equations',
      sections: [
        <>
          <h3>Quadratic Formula</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Standard form</span>
            <div className="lrn-definition-desc">
              <p>{`$x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}$: solving $ax^2 + bx + c = 0$ when factoring is not obvious.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Monic form</span>
            <div className="lrn-definition-desc">
              <p>{`$x = -\\dfrac{p}{2} \\pm \\sqrt{\\dfrac{p^2}{4} - q}$: for $x^2 + px + q = 0$ directly.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Alternative form</span>
            <div className="lrn-definition-desc">
              <p>{`$x = \\dfrac{2c}{-b \\mp \\sqrt{b^2 - 4ac}}$: equivalent to the standard formula, well-behaved as $a \\to 0$.`}</p>
            </div>
          </div>

          <h3>Discriminant</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Standard form</span>
            <div className="lrn-definition-desc">
              <p>{`$D = b^2 - 4ac$: check root type before solving.`}</p>
            </div>
          </div>
          <ul className="lrn-list">
            <li>{`$D > 0$: two distinct real roots. Parabola crosses $x$-axis twice.`}</li>
            <li>{`$D = 0$: one repeated real root. Parabola tangent to $x$-axis.`}</li>
            <li>{`$D < 0$: two complex conjugate roots. Parabola never reaches $x$-axis.`}</li>
          </ul>

          <h3>{`Vieta's Formulas`}</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Standard form</span>
            <div className="lrn-definition-desc">
              <p>{`$x_1 + x_2 = -\\dfrac{b}{a}$, $\\quad x_1 x_2 = \\dfrac{c}{a}$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Monic form</span>
            <div className="lrn-definition-desc">
              <p>{`$x_1 + x_2 = -p$, $\\quad x_1 x_2 = q$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Sum of squares</span>
            <div className="lrn-definition-desc">
              <p>{`$x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1 x_2$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute difference</span>
            <div className="lrn-definition-desc">
              <p>{`$|x_1 - x_2| = \\dfrac{\\sqrt{b^2-4ac}}{|a|}$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Sum of reciprocals</span>
            <div className="lrn-definition-desc">
              <p>{`$\\dfrac{1}{x_1} + \\dfrac{1}{x_2} = \\dfrac{x_1 + x_2}{x_1 x_2} = -\\dfrac{b}{c}$`}</p>
            </div>
          </div>
        </>,

        <>
          <h3>Factored Form</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">General factored form</span>
            <div className="lrn-definition-desc">
              <p>{`$ax^2 + bx + c = a(x-x_1)(x-x_2)$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Constructing from roots</span>
            <div className="lrn-definition-desc">
              <p>{`$x^2 - (r+s)x + rs = 0$: given roots $r$ and $s$.`}</p>
            </div>
          </div>

          <h3>Completing the Square</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Identity</span>
            <div className="lrn-definition-desc">
              <p>{`$x^2 + bx = \\left(x + \\dfrac{b}{2}\\right)^2 - \\left(\\dfrac{b}{2}\\right)^2$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">General form</span>
            <div className="lrn-definition-desc">
              <p>{`$ax^2 + bx + c = 0 \\Rightarrow \\left(x + \\dfrac{b}{2a}\\right)^2 = \\dfrac{b^2-4ac}{4a^2}$`}</p>
            </div>
          </div>

          <h3>Vertex Form</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Vertex form</span>
            <div className="lrn-definition-desc">
              <p>{`$y = a(x+m)^2 + n$; vertex at $(-m, n)$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Vertex x-coordinate</span>
            <div className="lrn-definition-desc">
              <p>{`$x = -\\dfrac{b}{2a}$: axis of symmetry and extremum location.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Extremum value</span>
            <div className="lrn-definition-desc">
              <p>{`$f_{\\text{ext}} = c - \\dfrac{b^2}{4a}$: minimum if $a > 0$, maximum if $a < 0$.`}</p>
            </div>
          </div>
        </>,

        <>
          <h3>Special Factorizations</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Difference of squares</span>
            <div className="lrn-definition-desc">
              <p>{`$a^2 - b^2 = (a-b)(a+b)$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Perfect square (plus)</span>
            <div className="lrn-definition-desc">
              <p>{`$a^2 + 2ab + b^2 = (a+b)^2$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Perfect square (minus)</span>
            <div className="lrn-definition-desc">
              <p>{`$a^2 - 2ab + b^2 = (a-b)^2$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Difference of cubes</span>
            <div className="lrn-definition-desc">
              <p>{`$a^3 - b^3 = (a-b)(a^2+ab+b^2)$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Sum of cubes (SOAP)</span>
            <div className="lrn-definition-desc">
              <p>{`$a^3 + b^3 = (a+b)(a^2-ab+b^2)$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">SFFT</span>
            <div className="lrn-definition-desc">
              <p>{`$xy + ax + by + ab = (x+b)(y+a)$: for $xy$ mixed with single-variable terms.`}</p>
            </div>
          </div>

          <h3>Complex Numbers</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Imaginary unit</span>
            <div className="lrn-definition-desc">
              <p>{`$i^2 = -1$; $\\sqrt{-n} = i\\sqrt{n}$ for $n > 0$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Conjugate product</span>
            <div className="lrn-definition-desc">
              <p>{`$(a+bi)(a-bi) = a^2+b^2$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Complex division</span>
            <div className="lrn-definition-desc">
              <p>{`$\\dfrac{a+bi}{c+di} = \\dfrac{(a+bi)(c-di)}{c^2+d^2}$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Powers of i</span>
            <div className="lrn-definition-desc">
              <p>{`$i^n$ depends on $n \\bmod 4$: $0 \\to 1,\\; 1 \\to i,\\; 2 \\to -1,\\; 3 \\to -i$`}</p>
            </div>
          </div>
        </>,

        <>
          <h3>Quadratic Inequality Method</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Sign chart</span>
            <div className="lrn-definition-desc">
              <p>
                Find roots. Test one value per interval. Sign stays the same within each interval.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`Solution ($a > 0$)`}</span>
            <div className="lrn-definition-desc">
              <p>{`$< 0 \\Rightarrow r < x < s$. $> 0 \\Rightarrow x < r$ or $x > s$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">No-solution case</span>
            <div className="lrn-definition-desc">
              <p>{`$D < 0$ and $a > 0$: $ax^2+bx+c > 0$ for all $x$; the $< 0$ inequality has no solution.`}</p>
            </div>
          </div>

          <h3>Substitution Methods</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Biquadratic</span>
            <div className="lrn-definition-desc">
              <p>{`$ax^4 + bx^2 + c = 0$: let $y = x^2$. Reject $y < 0$ for real $x$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Symmetric equation</span>
            <div className="lrn-definition-desc">
              <p>{`Palindrome coefficients: divide by $x^2$, let $y = x + \\frac{1}{x}$, use $x^2 + \\frac{1}{x^2} = y^2 - 2$.`}</p>
            </div>
          </div>

          <h3>Conjugate / Rationalization</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Real conjugate</span>
            <div className="lrn-definition-desc">
              <p>{`$(a+b\\sqrt{c})(a-b\\sqrt{c}) = a^2 - b^2 c$: multiply numerator and denominator by the conjugate.`}</p>
            </div>
          </div>

          <h3>Advanced Results</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Degenerate case</span>
            <div className="lrn-definition-desc">
              <p>{`As $a \\to 0$, one root approaches $-\\frac{c}{b}$, the other grows without bound. At $a = 0$: linear equation with one solution $x = -\\frac{c}{b}$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Roots scaling</span>
            <div className="lrn-definition-desc">
              <p>{`If $r$ is a root of $ax^2+bx+c=0$, then $ar$ is a root of $x^2+bx+ac=0$.`}</p>
            </div>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
  }

  return config
}

export default function QuadraticEquations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
