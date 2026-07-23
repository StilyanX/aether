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
// Visualization Components

// Config

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
              <p>{`Any equation that rearranges into $ax^2 + bx + c = 0$, with $a \\neq 0$. The highest power of $x$ is $2$. The numbers $a$, $b$, $c$ are the coefficients (the numbers in front of each power of $x$); the letter $x$ is the unknown. This is the standard form.`}</p>
              <p>{`If $a = 1$, the equation $x^2 + px + q = 0$ is the monic form. Dividing the standard form by $a$ always reaches it, and many techniques are cleaner there.`}</p>
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
              <p>{`Two, counted with multiplicity. Either two distinct real roots, one repeated real root, or two non-real roots (we will meet these in $\\S$5). Counted with multiplicity means a repeated root is counted twice. Never three or more.`}</p>
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

          <p>{`Why exactly two? Every quadratic can be written $a(x - r_1)(x - r_2)$. A product is zero only when one of its factors is zero, so the only roots are $r_1$ and $r_2$. A third root would force a third factor and push the degree above $2$. (The degree of a polynomial is its highest power of $x$.) The condition $a \\neq 0$ matters here: if $a = 0$, the equation collapses to $bx + c = 0$, which is linear and has only one root.`}</p>
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

          <p>{`A binomial is a sum of two terms. To multiply two binomials, multiply each term in the first by each term in the second, then collect like terms (terms that share the same power of $x$): $(x + r)(x + s) = x^2 + (r + s)x + rs$. Factoring reverses this. To factor $x^2 + bx + c$, search for two numbers $r$ and $s$ with $r + s = b$ and $rs = c$.`}</p>

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
            <div className="lrn-faded-phase lrn-faded-partial">
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

          <p>{`The factoring patterns we use most often, difference of squares $a^2 - b^2 = (a-b)(a+b)$ and perfect-square trinomials $a^2 \\pm 2ab + b^2 = (a \\pm b)^2$, are developed on the *Algebraic Identities* page. Here we apply them to quadratics and record one fact that bridges to complex numbers.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Factor $x^4 - 16$ completely`}</span>
              <div className="lrn-step-content">
                <p>{`Apply difference of squares once: $x^4 - 16 = (x^2 - 4)(x^2 + 4)$. The first factor is itself a difference of squares: $x^2 - 4 = (x-2)(x+2)$. The second factor, $x^2 + 4$, is a sum of squares, it does not factor over the real numbers.`}</p>
                <div className="lrn-eq">{`$$x^4 - 16 = (x-2)(x+2)(x^2+4)$$`}</div>
              </div>
            </div>
          </div>

          <div className="lrn-insight">
            {`A sum of squares $a^2 + b^2$ has no real factorization. If $(a + pb)(a + qb) = a^2 + b^2$ for real $p, q$, then $p + q = 0$ and $pq = 1$, forcing $p^2 = -1$. No real number squares to $-1$. Over the complex numbers, however, $a^2 + b^2 = (a + bi)(a - bi)$.`}
          </div>

          <h3>Sum and Difference of Cubes</h3>

          <div className="lrn-eq">{`$$a^3 - b^3 = (a-b)(a^2+ab+b^2)$$`}</div>
          <div className="lrn-eq">{`$$a^3 + b^3 = (a+b)(a^2-ab+b^2)$$`}</div>

          <p>
            <strong>SOAP</strong>
            {`, Same, Opposite, Always Positive, names the signs in the second factor. The binomial sign matches the original. The middle sign of the trinomial is the opposite. The last term is always positive. The rule is not magic: multiply out $(a-b)(a^2+ab+b^2) = a^3 + a^2 b + ab^2 - a^2 b - ab^2 - b^3$, and the middle terms cancel in pairs, leaving $a^3 - b^3$.`}
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
            <div className="lrn-faded-phase lrn-faded-partial">
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

          <p>{`If the constant $ab$ is missing, add it to both sides. The left side then factors, and you turn a stubborn equation into a list of factor pairs, useful especially when you want integer solutions.`}</p>

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
            <p>{`Why does the trick fail if $xy + ax + by + c$ has $c \\neq ab$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Expanding $(x+b)(y+a) = xy + ax + by + ab$ shows the constant must be exactly $ab$, that is the only constant the factored form produces. Any other constant blocks the factorization. You can still solve by completing the rectangle: add the missing amount to make the constant equal $ab$, then subtract the same amount on the other side of the equation.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Complex Numbers</h2>
            </div>
          </div>

          <p>{`Some quadratics produce the square root of a negative number, which no real number can supply. Mathematicians enlarged the number system to handle this case. The enlarged system is consistent: no old rule of arithmetic breaks. It is also needed everywhere, quantum mechanics, signal processing, and electrical engineering all depend on it.`}</p>

          <h3>The Imaginary Unit</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Imaginary unit</span>
            <div className="lrn-definition-desc">
              <p>{`The symbol $i$ obeys one rule: $i^2 = -1$. From this, $\\sqrt{-n} = i\\sqrt{n}$ for any $n > 0$, since $(i\\sqrt{n})^2 = i^2 \\cdot n = -n$.`}</p>
            </div>
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
              <p>{`The conjugate of $a + bi$ is $a - bi$, flip the sign of the imaginary part. The product $(a+bi)(a-bi) = a^2 - (bi)^2 = a^2 + b^2$ is always real and never negative. That single fact is the engine of complex division.`}</p>
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

          <p>{`Powers of $i$ cycle with period $4$: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, then repeat. The same difference-of-squares trick that clears radicals from a denominator (developed on the *Surds, Inequalities and Means* page) clears complex numbers from a denominator: multiply by the conjugate, and the product $(a+bi)(a-bi) = a^2 + b^2$ comes out real.`}</p>

          <div className="lrn-graph">
            <PowersOfIViz />
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Completing the Square</h2>
            </div>
          </div>

          <p>{`Completing the square is one move: turn $x^2 + bx$ into a perfect square by adding the one missing piece. Doing this rewrites any quadratic as $a(x+h)^2 + k$. From there you can finish solving with a square root, or read off the vertex of the parabola (the parabola's lowest or highest point), or derive the quadratic formula itself.`}</p>

          <p>{`The missing piece is always the square of half the linear coefficient:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\left(\\frac{b}{2}\\right)^2$$`}</span>
          </div>

          <p>{`Why this number? Expand $(x + \\frac{b}{2})^2 = x^2 + bx + (\\frac{b}{2})^2$. Subtracting $(\\frac{b}{2})^2$ cancels the extra constant and leaves $x^2 + bx$. In pictures: start with a square of side $x$, attach a rectangle of width $b$, split that rectangle in half, and tuck one half against each side. A square corner of area $(\\frac{b}{2})^2$ is missing, adding it completes the picture. (The full geometric diagram appears in *Historical Note: Al-Khwarizmi*, §16.)`}</p>

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
                <p>{`Solving gives the same roots as Method 1. Method 2 is useful when you want to keep $a$ visible, for example, while putting the quadratic into vertex form.`}</p>
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
            <div className="lrn-faded-phase lrn-faded-partial">
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

          <p>{`The quadratic formula is completing the square performed once for the general case. After you derive it, every quadratic with known coefficients becomes plugging numbers into a single expression.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`}</span>
          </div>

          <p>{`Read the formula geometrically. The piece $-\\frac{b}{(2a)}$ is the $x$-coordinate of the vertex, the axis of symmetry of the parabola. (The axis of symmetry is the vertical line that splits the parabola into two mirror halves.) The piece $\\pm\\frac{\\sqrt{b^2 - 4ac}}{(2a)}$ is the distance from that axis to each root. The two roots sit symmetrically around the vertex.`}</p>

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

          <h3>Reciprocal-roots identity</h3>

          <p>{`If the roots of $a x^2 + b x + c = 0$ are $x_1$ and $x_2$, then the roots of $c x^2 + b x + a = 0$ are $\\tfrac{1}{x_1}$ and $\\tfrac{1}{x_2}$.`}</p>

          <p>{`Proof. Let $y = \\tfrac{1}{x}$ and substitute into $a x^2 + b x + c = 0$:`}</p>

          <div className="lrn-eq">{`$$\\frac{a}{y^2} + \\frac{b}{y} + c = 0$$`}</div>

          <p>{`Multiply through by $y^2$:`}</p>

          <div className="lrn-eq">{`$$a + b y + c y^2 = 0 \\iff c y^2 + b y + a = 0$$`}</div>

          <p>{`So each root $x_i$ of the first equation gives a root $y_i = \\tfrac{1}{x_i}$ of the second. Reversing the coefficient order reciprocates the roots.`}</p>

          <h3>Worked Examples</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$x^2 - 4x + 3 = 0$`}</span>
              <div className="lrn-step-content">
                <p>{`$a = 1$, $b = -4$, $c = 3$. Discriminant $= 16 - 12 = 4$. So $x = \\frac{(4 \\pm 2)}{2}$, giving $x = 3$ or $x = 1$. Factoring would have worked too, the formula always agrees.`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$2x^2 + x + 3 = 0$ (complex roots)`}</span>
              <div className="lrn-step-content">
                <p>{`Discriminant $= 1 - 24 = -23$. So $x = \\dfrac{-1 \\pm \\sqrt{-23}}{4} = \\dfrac{-1 \\pm i\\sqrt{23}}{4}$.`}</p>
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
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Solve $3x^2 + 5x - 2 = 0$ with the quadratic formula.`}</p>
              <ol className="lrn-list">
                <li>{`$a = 3$, $b = 5$, $c = -2$. $D = 25 + 24 = 49$.`}</li>
                <li>{`$x = \\dfrac{-5 \\pm 7}{6}$, giving $x = \\dfrac{1}{3}$ or $x = -2$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Solve $2x^2 - 7x + 3 = 0$.`}</p>
              <ol className="lrn-list">
                <li>{`Identify $a$, $b$, $c$: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Compute $D$: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Apply the formula: $x = \\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Solve $4x^2 - 12x + 9 = 0$. Identify the type of roots from $D$ before solving.`}</p>
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

          <p>{`The middle case is sharper than it looks. When $D = 0$, the $+$ and $-$ in the formula both yield $x = -\\frac{b}{(2a)}$. The two solutions coincide; the parabola is tangent to the $x$-axis. (Tangent means the curve touches the line at exactly one point and does not cross it.)`}</p>

          <p className="lrn-viz-caption">{`Drag the slider to move $c$ in $x^2 + x + c = 0$`}</p>
          <div className="lrn-graph">
            <InteractiveDiscriminantViz />
          </div>

          <p className="lrn-viz-caption">Three discriminant cases</p>
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

          <p>{`If $a$, $b$, $c$ are real and $D < 0$, the quadratic formula gives $x = -\\frac{b}{(2a)} \\pm i\\frac{\\sqrt{-D}}{(2a)}$. The two roots share the real part $-\\frac{b}{(2a)}$ and have opposite imaginary parts. They are conjugates of each other:`}</p>

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

          <h3>Symmetric Identities</h3>

          <p>{`A symmetric identity stays the same when you swap $x_1$ and $x_2$. Many quantities in both roots reduce to the sum and product alone, with no need to know the roots individually.`}</p>

          <div className="lrn-eq">{`$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2 x_1 x_2 = \\left(-\\frac{b}{a}\\right)^2 - 2 \\cdot \\frac{c}{a} = \\frac{b^2}{a^2} - \\frac{2c}{a} = \\frac{b^2 - 2ac}{a^2}$$`}</div>
          <div className="lrn-eq">{`$$|x_1 - x_2| = \\frac{\\sqrt{b^2 - 4ac}}{|a|}$$`}</div>
          <div className="lrn-eq">{`$$\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1 x_2} = -\\frac{b}{c}$$`}</div>

          <p>{`The first comes from expanding $(x_1 + x_2)^2 = x_1^2 + 2 x_1 x_2 + x_2^2$ and subtracting $2 x_1 x_2$. The second follows from $(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4 x_1 x_2$, which simplifies to $\\frac{D}{a^2}$. The third just adds two fractions, then plugs in Vieta's.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Find $x_1^2 + x_2^2$ for the roots of $2x^2 - 6x + 1 = 0$.`}</p>
              <ol className="lrn-list">
                <li>{`Sum $= -\\frac{-6}{2} = 3$, product $= \\frac{1}{2}$.`}</li>
                <li>{`$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2 x_1 x_2 = 9 - 1 = 8$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
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
              <h2>Parabola Graphs and Roots</h2>
            </div>
          </div>

          <p>{`Parabola anatomy, vertex, axis of symmetry, opening direction, $y$-intercept, vertex form, is developed in full on the *Quadratic Functions and Polynomial Inequalities* page. Here we record the one algebraic-geometric link that solving by formula relies on: the real roots of $ax^2 + bx + c = 0$ are exactly the $x$-coordinates where the parabola $y = ax^2 + bx + c$ crosses the $x$-axis. The vertex sits halfway between the two real roots, on the axis of symmetry $x = -b/(2a)$.`}</p>

          <p className="lrn-viz-caption">Interactive: drag the colored points to change a, b, c</p>
          <div className="lrn-graph">
            <InteractiveParabolaViz />
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$y = x^2 - 2x - 3$`}</span>
              <div className="lrn-step-content">
                <p>{`Axis of symmetry: $x = -\\frac{(-2)}{(2 \\cdot 1)} = 1$. Vertex value: $y(1) = 1 - 2 - 3 = -4$. So the vertex is $(1, -4)$.`}</p>
                <p>{`Factor to find roots: $x^2 - 2x - 3 = (x - 3)(x + 1)$, so $x = 3$ or $x = -1$. As expected, the vertex sits halfway between the roots.`}</p>
                <p>{`Vertex form: $y = (x - 1)^2 - 4$ confirms the vertex at $(1, -4)$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the vertex sit halfway between the two real roots?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A parabola is symmetric across the vertical line through its vertex. The two real roots are reflections of each other across that line, so their average is the vertex's $x$-coordinate. From Vieta's, the average of the roots is $\\frac{(x_1 + x_2)}{2} = -\\frac{b}{(2a)}$, exactly the axis of symmetry.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Quadratic Inequalities</h2>
            </div>
          </div>

          <p>{`The full sign-chart method and the case-by-case workflow are developed on the *Quadratic Functions and Polynomial Inequalities* page. Here we record the connection to the quadratic equation: the inequality $ax^2 + bx + c > 0$ has solution determined by where the parabola sits relative to the $x$-axis. If $a > 0$ and the discriminant is positive, the parabola is positive outside the two roots and negative between them; non-strict inequalities ($\\geq$, $\\leq$) include the roots in the solution set.`}</p>

          <div className="lrn-graph">
            <NumberLineInequalityViz />
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
            <div className="lrn-faded-phase lrn-faded-partial">
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

          <p>{`The vertex-as-extremum technique and standard optimization word problems are developed on the *Quadratic Functions and Polynomial Inequalities* page. Here we record the rule: a quadratic reaches its extreme value at the vertex. (An extreme value is the smallest or the largest value the function reaches.) Completing the square writes any $ax^2 + bx + c$ as $a(x - h)^2 + k$, with the vertex at $(h, k) = \\left(-\\dfrac{b}{2a},\\, c - \\dfrac{b^2}{4a}\\right)$.`}</p>

          <ul className="lrn-list">
            <li>{`$a > 0$: the parabola opens up, the vertex is the minimum. $f_{\\min} = c - \\dfrac{b^2}{4a}$ at $x = -\\dfrac{b}{2a}$.`}</li>
            <li>{`$a < 0$: the parabola opens down, the vertex is the maximum. $f_{\\max} = c - \\dfrac{b^2}{4a}$ at $x = -\\dfrac{b}{2a}$.`}</li>
          </ul>

          <div className="lrn-graph">
            <MaxMinViz />
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Minimum of $f(x) = x^2 - 4x + 7$`}</span>
              <div className="lrn-step-content">
                <p>{`$a = 1 > 0$, so the vertex is a minimum. Vertex $x = 2$, $f(2) = 4 - 8 + 7 = 3$. Confirm by completing the square: $f(x) = (x - 2)^2 + 3$, so $f(x) \\geq 3$ with equality at $x = 2$.`}</p>
              </div>
            </div>
          </div>

          <h3>Range and Domain</h3>

          <p>{`The vertex value $k = c - \\dfrac{b^2}{4a}$ is the lowest or highest output of the quadratic. The range follows directly: $[k, \\infty)$ when $a > 0$ (vertex is the minimum), and $(-\\infty, k]$ when $a < 0$ (vertex is the maximum). The domain is always all real numbers, every $x$ produces an output.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Reciprocal-Roots Identity</h2>
            </div>
          </div>

          <p>{`Reversing the coefficients of a quadratic reverses and inverts its roots. This symmetry, proved by Gelfand, connects two seemingly different equations.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Reciprocal-roots identity</span>
            <div className="lrn-definition-desc">
              <p>{`If the roots of $ax^2 + bx + c = 0$ are $x_1$ and $x_2$, then the roots of $cx^2 + bx + a = 0$ are $\\frac{1}{x_1}$ and $\\frac{1}{x_2}$.`}</p>
            </div>
          </div>

          <p>{`The proof uses substitution. Let $y = \\frac{1}{x}$, so $x = \\frac{1}{y}$. Substitute into $ax^2 + bx + c = 0$:`}</p>

          <div className="lrn-eq">{`$$\\frac{a}{y^2} + \\frac{b}{y} + c = 0$$`}</div>

          <p>{`Multiply both sides by $y^2$ (valid since $y \\neq 0$ when $x_i \\neq 0$):`}</p>

          <div className="lrn-eq">{`$$a + by + cy^2 = 0 \\quad\\Rightarrow\\quad cy^2 + by + a = 0$$`}</div>

          <p>{`The new equation in $y$ has coefficients in reverse order. Every root $x_i$ becomes $y_i = \\frac{1}{x_i}$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Roots of $2x^2 - 5x + 2 = 0$ and its reciprocal`}</span>
              <div className="lrn-step-content">
                <p>{`Factor the first: $2x^2 - 5x + 2 = (2x - 1)(x - 2) = 0$. Roots: $x = 2$ and $x = \\frac{1}{2}$.`}</p>
                <p>{`Reciprocal equation: $2y^2 - 5y + 2 = 0$ (coefficients already reversed). Roots: $y = 2$ and $y = \\frac{1}{2}$.`}</p>
                <p>{`Notice: $\\frac{1}{2} = \\frac{1}{2}$ and $\\frac{1}{1/2} = 2$. The roots have swapped!`}</p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Roots of $3x^2 + 2x - 10 = 0$ and its reciprocal`}</span>
              <div className="lrn-step-content">
                <p>{`Quadratic formula: $x = \\dfrac{-2 \\pm \\sqrt{4 + 120}}{6} = \\dfrac{-1 \\pm \\sqrt{31}}{3}$. Call these $x_1$ and $x_2$.`}</p>
                <p>{`Reciprocal equation: $-10y^2 + 2y + 3 = 0$, or $10y^2 - 2y - 3 = 0$. By the identity, its roots are $\\frac{1}{x_1}$ and $\\frac{1}{x_2}$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-warning">
            <p>
              <strong>Caution.</strong>
              {` If one of the original roots is zero, then $x_1 x_2 = 0$ and the reciprocal is undefined. The identity requires $x_i \\neq 0$ for all roots.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Symmetric Equations</h2>
            </div>
          </div>

          <p>{`A polynomial is symmetric if its coefficients read the same forwards and backwards. Reversing the order of coefficients matches the original. This symmetry lets you solve a degree-4 equation by reducing it to degree-2 using the reciprocal substitution.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Symmetric polynomial</span>
            <div className="lrn-definition-desc">
              <p>{`Coefficients are palindromic. Example: $2x^4 + 7x^3 + 4x^2 + 7x + 2$. Reading left to right: $2, 7, 4, 7, 2$. Reading right to left: $2, 7, 4, 7, 2$.`}</p>
            </div>
          </div>

          <h3>Solving Symmetric Equations</h3>

          <p>{`The trick: $x = 0$ is never a root (the constant term would be zero). Divide by $x^2$ to split the polynomial into two parts, then pair terms symmetrically.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $2x^4 + 7x^3 + 4x^2 + 7x + 2 = 0$`}</span>
              <div className="lrn-step-content">
                <p>{`Divide by $x^2$: $2x^2 + 7x + 4 + \\frac{7}{x} + \\frac{2}{x^2} = 0$.`}</p>
                <p>{`Rearrange by grouping symmetric terms: $2\\left(x^2 + \\frac{1}{x^2}\\right) + 7\\left(x + \\frac{1}{x}\\right) + 4 = 0$.`}</p>
                <p>{`Let $y = x + \\frac{1}{x}$. Then $y^2 = x^2 + 2 + \\frac{1}{x^2}$, so $x^2 + \\frac{1}{x^2} = y^2 - 2$.`}</p>
                <p>{`Substitute: $2(y^2 - 2) + 7y + 4 = 0 \\Rightarrow 2y^2 + 7y = 0 \\Rightarrow y(2y + 7) = 0$.`}</p>
                <p>{`So $y = 0$ or $y = -\\frac{7}{2}$.`}</p>
                <p>{`Recover $x$ from $y = 0$: $x + \\frac{1}{x} = 0 \\Rightarrow x^2 + 1 = 0 \\Rightarrow x^2 = -1$. Complex roots $x = \\pm i$.`}</p>
                <p>{`Recover $x$ from $y = -\\frac{7}{2}$: $x + \\frac{1}{x} = -\\frac{7}{2} \\Rightarrow 2x^2 + 7x + 2 = 0$.`}</p>
                <p>{`Quadratic formula: $x = \\dfrac{-7 \\pm \\sqrt{49-16}}{4} = \\dfrac{-7 \\pm \\sqrt{33}}{4}$.`}</p>
                <p>{`Four roots: $x \\in \\left\\{i, -i, \\dfrac{-7+\\sqrt{33}}{4}, \\dfrac{-7-\\sqrt{33}}{4}\\right\\}$.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-insight">
            {`Symmetric structure is the key: you reduce a degree-4 problem to degree-2 with a single clever substitution. The reciprocal-roots identity explains why: if the polynomial is symmetric in the coefficients, the roots come in reciprocal pairs. When you substitute $y = x + \\frac{1}{x}$, you collapse each pair into one variable.`}
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Solve $x^4 + 4x^3 + 6x^2 + 4x + 1 = 0$. (Hint: recognize the binomial coefficients.)`}</p>
              <ol className="lrn-list">
                <li>{`Coefficients are $1, 4, 6, 4, 1$, the binomial expansion of $(x+1)^4$. So the equation is $(x+1)^4 = 0$.`}</li>
                <li>{`Single root: $x = -1$ with multiplicity $4$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Solve $3x^4 + 5x^3 + 4x^2 + 5x + 3 = 0$. This is symmetric.`}</p>
              <ol className="lrn-list">
                <li>{`Divide by $x^2$: $3x^2 + 5x + 4 + \\frac{5}{x} + \\frac{3}{x^2} = 0$.`}</li>
                <li>{`Rearrange: $3\\left(x^2 + \\frac{1}{x^2}\\right) + 5\\left(x + \\frac{1}{x}\\right) + 4 = 0$.`}</li>
                <li>{`Let $y = x + \\frac{1}{x}$. Then $x^2 + \\frac{1}{x^2} = \\rule{1cm}{0.5pt}$, giving $3(\\rule{1cm}{0.5pt}) + 5y + 4 = 0$.`}</li>
                <li>{`Solve for $y$: $\\rule{1cm}{0.5pt}$`}</li>
                <li>{`Recover $x$ from each value of $y$ using $x + \\frac{1}{x} = y$: $\\rule{1cm}{0.5pt}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Solve $2x^4 - 3x^3 + 4x^2 - 3x + 2 = 0$.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Biquadratic Equations</h2>
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

          <h3>Equations Built from a Substitution</h3>

          <p>{`A degree-4 equation can hide a quadratic inside a substitution. Spot the repeated chunk and the problem collapses to two easier ones.`}</p>

          <p>{`How they are built. Take any quadratic, say $3x^2 + 2x - 10 = 0$, and replace $x$ with some expression in $y$, say $x = y^2 + y - 1$. Expand and you get an ugly degree-4 mess in $y$.`}</p>

          <p>{`How to undo it. If you face an equation like`}</p>

          <div className="lrn-eq">{`$$3(y^2 + y - 1)^2 + 2(y^2 + y - 1) - 10 = 0$$`}</div>

          <p>{`the same chunk $y^2 + y - 1$ appears twice. Name it $x = y^2 + y - 1$. The equation collapses to $3 x^2 + 2x - 10 = 0$. The quadratic formula gives`}</p>

          <div className="lrn-eq">{`$$x = \\frac{-2 \\pm \\sqrt{4 + 120}}{6} = \\frac{-1 \\pm \\sqrt{31}}{3}$$`}</div>

          <p>{`For each value of $x$, solve $y^2 + y - (1 + x) = 0$ with the quadratic formula again. Each $x$ produces up to two real $y$s, so up to four real solutions overall.`}</p>

          <div className="lrn-insight">
            <p>{`Same strategy as the biquadratic case above: when a non-trivial expression appears more than once, name it. Pattern recognition beats brute expansion.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the substitution drop the degree?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A biquadratic uses only even powers of $x$, so renaming $x^2$ as $y$ collapses $x^4$ to $y^2$. A nested-substitution equation hides a repeated chunk; naming that chunk as a single variable replaces every occurrence at once. In both cases the new variable absorbs the pattern, and what remains is an ordinary quadratic.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Applications and Word Problems</h2>
            </div>
          </div>

          <p>{`Quadratics model anything where a quantity changes with the square of another. Below are three standard setups. Each one becomes a quadratic, solves with the formula or factoring, and asks you to reject any answer that does not fit the physical context.`}</p>

          <h3>Projectile Motion</h3>

          <p>{`A ball thrown straight up from a $6$-foot platform with initial velocity $32$ ft/s has height $h(t) = -16t^2 + 32t + 6$ feet at time $t$ seconds. When does it hit the ground?`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Solve $-16t^2 + 32t + 6 = 0$`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Multiply both sides by $-1$ and divide by $2$: $8t^2 - 16t - 3 = 0$.`}</p>
                <p>{`Apply the quadratic formula with $a = 8$, $b = -16$, $c = -3$:`}</p>
                <div className="lrn-eq">{`$$t = \\frac{16 \\pm \\sqrt{256 + 96}}{16} = \\frac{16 \\pm \\sqrt{352}}{16} = \\frac{16 \\pm 4\\sqrt{22}}{16} = \\frac{4 \\pm \\sqrt{22}}{4}$$`}</div>
                <p>{`Numerically: $\\sqrt{22} \\approx 4.69$, so $t \\approx 2.17$ s or $t \\approx -0.17$ s. Time cannot be negative, so reject the second root. The ball hits the ground at $t \\approx 2.17$ s.`}</p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Rectangle with Fixed Perimeter and Area</h3>

          <p>{`A rectangular garden has perimeter $40$ m and area $96$ m$^2$. Find its dimensions.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Reduce to a quadratic in one variable`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Let length $L$ and width $W$. Then $2(L + W) = 40$, so $L + W = 20$, which gives $W = 20 - L$. Area: $L(20 - L) = 96$.`}</p>
                <p>{`Expand and rearrange: $-L^2 + 20L - 96 = 0$, or $L^2 - 20L + 96 = 0$.`}</p>
                <p>{`Factor: look for two numbers with sum $20$ and product $96$. They are $8$ and $12$. So $(L - 8)(L - 12) = 0$, giving $L = 8$ or $L = 12$.`}</p>
                <p>{`Both roots are positive, so both are valid dimensions. By symmetry $L = 12, W = 8$ and $L = 8, W = 12$ describe the same garden: $8$ m by $12$ m.`}</p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Consecutive Positive Integers</h3>

          <p>{`The product of two consecutive positive integers is $132$. Find them.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">{`Set up and solve`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>{`Let the smaller integer be $n$; the next is $n + 1$. Their product: $n(n + 1) = 132$.`}</p>
                <p>{`Expand: $n^2 + n - 132 = 0$. Factor: two numbers with sum $1$ and product $-132$ are $12$ and $-11$. So $(n + 12)(n - 11) = 0$, giving $n = 11$ or $n = -12$.`}</p>
                <p>{`The problem asks for positive integers, so reject $n = -12$. The two integers are $11$ and $12$, and $11 \\cdot 12 = 132$.`}</p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
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
          </div>
          <p>{`For complex-conjugate roots, see the worked example in *The Discriminant* (§8), where $1 \\pm 3i$ rebuilds $x^2 - 2x + 10 = 0$.`}</p>

          <h3>Rational Equations That Become Quadratics</h3>

          <p>
            {`A rational equation has fractions with $x$ in a denominator. Multiply both sides by the least common denominator (the smallest expression every denominator divides into). The result is usually a polynomial equation, often a quadratic. After solving, check every candidate against the original equation: any value that makes a denominator zero is an `}
            <strong>extraneous root</strong>
            {`, the multiplication step introduces it, and it is not actually a solution.`}
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

          <h3>The Golden Ratio</h3>

          <p>{`A golden rectangle has the property that removing a square from one end leaves a smaller rectangle with the same proportions as the original. If the long side is $\\ell$ and the short side is $w$, the condition is:`}</p>

          <div className="lrn-eq">{`$$\\frac{\\ell}{w} = \\frac{\\ell + w}{\\ell}$$`}</div>

          <p>{`Let $x = \\frac{\\ell}{w}$. Then $x = 1 + \\frac{w}{\\ell} = 1 + \\frac{1}{x}$, which rearranges to:`}</p>

          <div className="lrn-eq">{`$$x^2 - x - 1 = 0$$`}</div>

          <p>{`The positive root is the golden ratio. (The negative root is also a solution of the quadratic, but does not represent a ratio of positive lengths.)`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$x = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$$`}</span>
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

          <p>{`Working without zero, without negative numbers, and without modern symbolic notation, al-Khwarizmi classified quadratics into standard shapes and solved each one as a picture. His proof of completing the square is exactly the diagram below.`}</p>

          <p>{`His worked example is $x^2 + 10x = 39$. He represents the left side as a central square of side $x$ with four rectangles of width $2.5$ attached, one to each side. The four rectangles have total area $4 \\cdot 2.5x = 10x$, matching the linear term. Adding four small corner squares of side $2.5$ completes the figure into a larger square of side $x + 5$. The total corner area is $4 \\times 2.5^2 = 25$, so adding $25$ to both sides of the equation gives:`}</p>

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
      // Complex numbers
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
        q: 'What happens when you solve $ax^2 + bx + c < 0$ with $a > 0$ and $D < 0$?',
        a: 'No solution. When $D < 0$ and $a > 0$, the parabola stays entirely above the $x$-axis. The inequality has no solution.'
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
      // Reciprocal-roots identity
      {
        q: 'If $2x^2 - 5x + 2 = 0$ has roots $2$ and $\\frac{1}{2}$, what are the roots of $2y^2 - 5y + 2 = 0$?',
        a: 'By the reciprocal-roots identity: $2$ and $\\frac{1}{2}$. The coefficients are palindromic, so the equation is self-reciprocal: reversing gives the same equation.'
      },
      {
        q: 'The roots of $3x^2 + 4x + 1 = 0$ are $-\\frac{1}{3}$ and $-1$. What are the roots of $x^2 + 4x + 3 = 0$?',
        a: 'By the reciprocal-roots identity, the roots are $\\frac{1}{-1/3} = -3$ and $\\frac{1}{-1} = -1$. Check: $(-3) + (-1) = -4 = -b/a$ and $(-3)(-1) = 3 = c/a$. ✓'
      },
      {
        q: 'Construct a quadratic whose roots are the reciprocals of the roots of $5x^2 - 7x + 2 = 0$.',
        a: 'Reverse the coefficients: $2x^2 - 7x + 5 = 0$. By the identity, this has roots that are reciprocals of the first.'
      },
      {
        q: 'Why does the reciprocal-roots identity require $x_i \\neq 0$ for all roots?',
        a: 'If a root is zero, the reciprocal $1/0$ is undefined. The identity requires that we can form $y = 1/x$ for each root, which forbids zero.'
      },
      // Symmetric equations
      {
        q: 'Show that $2x^4 + 7x^3 + 4x^2 + 7x + 2 = 0$ is symmetric.',
        a: 'The coefficients are $2, 7, 4, 7, 2$. Reading forwards and backwards gives the same sequence, so the equation is symmetric.'
      },
      {
        q: 'Divide $x^4 + 5x^3 + 6x^2 + 5x + 1 = 0$ by $x^2$ and group symmetric terms.',
        a: '$x^2 + 5x + 6 + \\frac{5}{x} + \\frac{1}{x^2} = 0$. Group: $\\left(x^2 + \\frac{1}{x^2}\\right) + 5\\left(x + \\frac{1}{x}\\right) + 6 = 0$.'
      },
      {
        q: 'If $y = x + \\frac{1}{x}$, express $x^2 + \\frac{1}{x^2}$ in terms of $y$.',
        a: 'Square both sides: $y^2 = x^2 + 2 + \\frac{1}{x^2}$, so $x^2 + \\frac{1}{x^2} = y^2 - 2$.'
      },
      {
        q: 'Solve $x^4 - 5x^3 + 6x^2 - 5x + 1 = 0$ using the symmetric equation method.',
        a: 'Divide by $x^2$: $(x^2 + \\frac{1}{x^2}) - 5(x + \\frac{1}{x}) + 6 = 0$. Let $y = x + \\frac{1}{x}$: $(y^2 - 2) - 5y + 6 = 0 \\Rightarrow y^2 - 5y + 4 = 0$. Factor: $(y-1)(y-4) = 0$. From $y=1$: $x + 1/x = 1 \\Rightarrow x^2 - x + 1 = 0$ (complex roots). From $y=4$: $x + 1/x = 4 \\Rightarrow x^2 - 4x + 1 = 0 \\Rightarrow x = 2 \\pm \\sqrt{3}$.'
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

          <h3>Reciprocal-Roots Identity</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Transformation</span>
            <div className="lrn-definition-desc">
              <p>{`If $ax^2 + bx + c = 0$ has roots $x_1, x_2$, then $cx^2 + bx + a = 0$ has roots $\\dfrac{1}{x_1}, \\dfrac{1}{x_2}$`}</p>
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
          <h3>Quadratic Inequalities</h3>
          <div className="lrn-definition">
            <span className="lrn-definition-term">No-solution case</span>
            <div className="lrn-definition-desc">
              <p>{`$D < 0$ and $a > 0$: $ax^2+bx+c > 0$ for all $x$; the $< 0$ inequality has no solution. (Sign-chart method and worked examples live on the *Quadratic Functions and Polynomial Inequalities* page.)`}</p>
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
              <p>{`Palindromic coefficients: divide by $x^2$, substitute $y = x + \\frac{1}{x}$, note $x^2 + \\frac{1}{x^2} = y^2 - 2$. Solve the quadratic in $y$, then recover $x$ from each $y$ value.`}</p>
            </div>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
  }

  return config
}

export default function QuadraticEquations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
