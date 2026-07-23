import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  ReciprocalAnchorViz,
  RationalAsymptoteViz,
  RationalHoleViz,
  DegreeAsymptoteViz,
  SquareRootAnchorViz,
  SquareRootTransformViz,
  RadicalSquareSignViz
} from '../../../../components/viz'

const PRACTICE_CARDS = [
  {
    q: `What is a rational function? Give one example.`,
    a: `A rational function is a fraction where both top and bottom are polynomials. For example, $f(x) = \\dfrac{x + 1}{x - 3}$ is rational. The denominator must not be zero.`
  },
  {
    q: `Find the domain of $f(x) = \\dfrac{3x - 2}{x + 7}$.`,
    a: `The domain is all $x$ except $x = -7$. Set the denominator to zero: $x + 7 = 0$ gives $x = -7$. Remove that value. Write the domain as $x \\in \\mathbb{R},\\ x \\neq -7$.`
  },
  {
    q: `Find the domain of $g(x) = \\dfrac{x + 1}{x^2 - 9}$.`,
    a: `Factor the denominator: $x^2 - 9 = (x - 3)(x + 3)$. Set each factor to zero: $x = 3$ or $x = -3$. The domain is all real numbers except $3$ and $-3$.`
  },
  {
    q: `Describe the two branches of $y = \\dfrac{1}{x}$.`,
    a: `For $x > 0$, the branch sits in the first quadrant, falling from high up toward $y = 0$ as $x$ grows. For $x < 0$, the branch sits in the third quadrant, rising toward $y = 0$ as $x$ falls. Neither branch ever touches the axes.`
  },
  {
    q: `Find all vertical asymptotes of $f(x) = \\dfrac{x + 2}{(x - 1)(x + 3)}$.`,
    a: `Set the denominator to zero: $(x - 1)(x + 3) = 0$ gives $x = 1$ and $x = -3$. Check that neither value makes the numerator zero. Both are vertical asymptotes.`
  },
  {
    q: `Spot the mistake: "The function $f(x) = \\dfrac{x - 2}{x^2 - 4}$ has a vertical asymptote at $x = 2$."`,
    a: `This is wrong. Factor the denominator: $x^2 - 4 = (x - 2)(x + 2)$. The factor $(x - 2)$ cancels with the numerator. The function has a hole at $x = 2$, not an asymptote. The vertical asymptote is at $x = -2$.`
  },
  {
    q: `Explain in your own words: why does a cancelled factor create a hole, not an asymptote?`,
    a: `A hole happens when a factor disappears from top and bottom at the same point. The function shrinks to a simpler form but is still undefined at that one $x$ value. Since the denominator does not blow up there, the graph does not spike; it just has one missing point.`
  },
  {
    q: `Find the horizontal asymptote of $f(x) = \\dfrac{3x + 1}{x - 2}$.`,
    a: `The numerator and denominator both have degree one. Divide the leading coefficients: $\\dfrac{3}{1} = 3$. The horizontal asymptote is $y = 3$. As $x$ grows very large, the $+1$ and $-2$ become tiny and the ratio approaches $3$.`
  },
  {
    q: `Predict: what is the horizontal asymptote of $f(x) = \\dfrac{x^2 + 1}{x^3 - 1}$? Explain.`,
    a: `The horizontal asymptote is $y = 0$. The denominator has higher degree than the numerator. For large $x$, the bottom grows faster than the top, so the fraction shrinks toward zero.`
  },
  {
    q: `Does $f(x) = \\dfrac{x^3 + 2}{x^2 - 1}$ have a horizontal asymptote?`,
    a: `No. The numerator has degree three; the denominator has degree two. When the top degree exceeds the bottom degree, there is no horizontal asymptote. You get a slant asymptote instead, because the degrees differ by exactly one.`
  },
  {
    q: `Find the slant asymptote of $f(x) = \\dfrac{2x^2 - 5}{x - 1}$.`,
    a: `Degrees differ by one, so expect a slant. Use polynomial long division. Dividing $2x^2 - 5$ by $x - 1$ gives quotient $2x + 2$ and remainder $-3$. So $f(x) = 2x + 2 + \\dfrac{-3}{x - 1}$. As $x$ grows, the remainder vanishes. The slant asymptote is $y = 2x + 2$.`
  },
  {
    q: `Find the $y$-intercept of $f(x) = \\dfrac{2x + 3}{x - 4}$.`,
    a: `Substitute $x = 0$: $f(0) = \\dfrac{3}{-4} = -\\dfrac{3}{4}$. The $y$-intercept is $\\left(0,\\ -\\dfrac{3}{4}\\right)$. Always check that $x = 0$ is in the domain first.`
  },
  {
    q: `Find the $x$-intercepts of $f(x) = \\dfrac{x^2 - 1}{x - 1}$. Watch the domain.`,
    a: `Factor: $\\dfrac{(x - 1)(x + 1)}{x - 1}$. The $(x - 1)$ cancels and leaves $x + 1$ for $x \\neq 1$. Setting $x + 1 = 0$ gives $x = -1$. The candidate $x = 1$ from the original numerator is a hole, not an intercept. The single $x$-intercept is $(-1, 0)$.`
  },
  {
    q: `Solve $\\dfrac{2}{x + 1} + \\dfrac{5}{x - 3} = 0$.`,
    a: `Restricted values: $x \\neq -1$ and $x \\neq 3$. LCD is $(x + 1)(x - 3)$. Multiply: $2(x - 3) + 5(x + 1) = 0$. Expand: $2x - 6 + 5x + 5 = 0$, so $7x - 1 = 0$ and $x = \\dfrac{1}{7}$. Check: $\\dfrac{1}{7}$ is not restricted, so $x = \\dfrac{1}{7}$ is the answer.`
  },
  {
    q: `Solve $\\dfrac{4}{x + 2} = \\dfrac{x}{x + 2} - 1$.`,
    a: `Restricted: $x \\neq -2$. LCD is $x + 2$. Multiply through: $4 = x - (x + 2) = -2$. The result $4 = -2$ is false, so no value of $x$ can satisfy the equation. No solution. The contradiction also tells you the equation has no extraneous roots to check, just no roots at all.`
  },
  {
    q: `Why do rational equations sometimes produce extraneous solutions?`,
    a: `Multiplying by the LCD can introduce values that make the original denominator zero. Those values make the original equation undefined, so you must reject them. Always check every solution back in the original equation.`
  },
  {
    q: `What is an irrational function? Give one example.`,
    a: `An irrational function has a variable inside a radical (a root). For example, $f(x) = \\sqrt{2x + 5}$ is irrational. The radical prevents it from being a polynomial or a ratio of polynomials.`
  },
  {
    q: `Find the domain of $f(x) = \\sqrt{16 - x^2}$.`,
    a: `The radicand must be non-negative: $16 - x^2 \\geq 0$, so $x^2 \\leq 16$. This gives $-4 \\leq x \\leq 4$. The domain is the closed interval $[-4, 4]$. A quadratic under the radical produces a bounded interval, not a half-line.`
  },
  {
    q: `Find the domain of $f(x) = \\sqrt[4]{5 - x}$.`,
    a: `The index $4$ is even, so the radicand must be non-negative: $5 - x \\geq 0$, so $x \\leq 5$. The domain is $(-\\infty, 5]$. Any even index uses the same rule as the square root; only odd indices accept negative inputs.`
  },
  {
    q: `Compare: domain of $\\sqrt{x - 4}$ versus $\\sqrt[3]{x - 4}$.`,
    a: `For $\\sqrt{x - 4}$, you need $x - 4 \\geq 0$, so $x \\geq 4$. The domain is $[4, \\infty)$. For $\\sqrt[3]{x - 4}$, any $x$ works. The domain is all real numbers. Even roots demand non-negative inputs; odd roots do not.`
  },
  {
    q: `Describe the graph of $y = \\sqrt{x}$. State its domain, range, and starting point.`,
    a: `The graph starts at the origin $(0, 0)$ and curves upward and to the right, growing more slowly as $x$ increases. The domain is $x \\geq 0$. The range is $y \\geq 0$. It never goes left of the $y$-axis or below the $x$-axis.`
  },
  {
    q: `State the domain and starting point of $y = \\sqrt{x - 3} + 1$.`,
    a: `Set $x - 3 \\geq 0$ to get $x \\geq 3$. The domain is $[3, \\infty)$. The starting point is $(3, 1)$, because $\\sqrt{3 - 3} + 1 = 0 + 1 = 1$. The curve is the basic $\\sqrt{x}$ shape shifted right $3$ and up $1$.`
  },
  {
    q: `What does the $a$ in $y = a\\sqrt{x - h} + k$ control?`,
    a: `$a$ stretches or squashes the curve vertically. If $a > 1$ the curve rises faster; if $0 < a < 1$ it rises more slowly. If $a < 0$, the curve flips downward. The starting point $(h, k)$ does not change.`
  },
  {
    q: `Predict: what happens to the graph of $y = -2\\sqrt{x + 1} - 3$ compared with $y = \\sqrt{x}$?`,
    a: `The starting point moves to $(-1, -3)$: left $1$, down $3$. The graph stretches by a factor of $2$. The negative $a$ flips it upside down. The curve falls from the starting point instead of rising.`
  },
  {
    q: `Solve $3\\sqrt{x - 1} = 9$.`,
    a: `Divide both sides by $3$: $\\sqrt{x - 1} = 3$. Square: $x - 1 = 9$, so $x = 10$. Check: $3\\sqrt{10 - 1} = 3 \\cdot 3 = 9$. Correct. The solution is $x = 10$. Always divide off the coefficient before squaring so you square only what is inside the root.`
  },
  {
    q: `Solve $\\sqrt{x + 5} = x - 1$.`,
    a: `Require $x - 1 \\geq 0$, so $x \\geq 1$. Square both sides: $x + 5 = x^2 - 2x + 1$. Rearrange: $x^2 - 3x - 4 = 0$, so $(x - 4)(x + 1) = 0$. Candidates: $x = 4$ and $x = -1$. Check $x = 4$: $\\sqrt{9} = 3 = 4 - 1$, accept. Check $x = -1$: fails $x \\geq 1$ and $\\sqrt{4} = 2 \\neq -2$, reject. Answer: $x = 4$.`
  },
  {
    q: `Why does squaring both sides of a radical equation sometimes create extra answers?`,
    a: `Squaring removes the sign. The equation $\\sqrt{u} = v$ requires $v \\geq 0$. But $(\\sqrt{u})^2 = u = v^2$ is the same as $(- \\sqrt{u})^2$. Squaring cannot tell which sign the original had. Values that satisfy the squared equation but not the original are extraneous.`
  },
  {
    q: `Solve $\\sqrt{x + 6} = x$.`,
    a: `Square both sides: $x + 6 = x^2$. Rearrange: $x^2 - x - 6 = 0$, so $(x - 3)(x + 2) = 0$. Candidates: $x = 3$ and $x = -2$. Check $x = 3$: $\\sqrt{9} = 3$, accept. Check $x = -2$: $\\sqrt{4} = 2 \\neq -2$, reject. Answer: $x = 3$.`
  },
  {
    q: `Find the domain of $f(x) = \\dfrac{1}{\\sqrt{x^2 - 9}}$.`,
    a: `Two conditions stack here. The radical needs $x^2 - 9 \\geq 0$, so $x \\leq -3$ or $x \\geq 3$. The denominator needs the radical strictly positive (not zero), so $x^2 - 9 > 0$, that is $x < -3$ or $x > 3$. The strict inequality wins. Domain: $(-\\infty, -3) \\cup (3, \\infty)$. A quadratic under the radical can give a bounded interval; here it gives the complement of one.`
  }
]

function useConfig() {
  return {
    cssPrefix: 'rif',
    documentTitle: 'Rational and Irrational Functions - AETHER',
    learning: {
      groupTitle: 'Functions and Graphs',
      category: 'Module 3.5',
      title: 'Rational and Irrational Functions',
      subtitle: `Polynomials over polynomials, roots in the wild. Learn asymptotes, holes, domain restrictions, and how to solve equations that involve fractions and radicals.`,
      sections: [
        <>
          <h2>{`What a Rational Function Is`}</h2>
          <p>{`Two new families: rational functions (one polynomial over another) and irrational functions (a variable hidden inside a root). Both restrict their domains in new ways, and each comes with its own toolkit for graphing and solving.`}</p>

          {/* SECTION 1 */}

          <p>{`The rational expression $p(x)/q(x)$ from Polynomials becomes a rational function once you let $x$ vary as an input. A polynomial is defined everywhere; the moment you divide one by another, the ratio breaks whenever $q(x) = 0$. That single change creates the gaps, spikes, and forbidden values the rest of this module pins down. The name comes from "ratio".`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$f(x) = \\frac{p(x)}{q(x)}, \\quad q(x) \\neq 0$$`}</span>
          </div>

          <p>{`Examples: $\\dfrac{1}{x}$, $\\dfrac{x + 2}{x - 3}$, $\\dfrac{x^2 - 1}{x^2 + x + 1}$. Any time the denominator contains a variable, the function is rational.`}</p>

          <p>{`Counter-examples: $x^2 + 3x + 1$ has no division, so it is just a polynomial. The number $\\dfrac{3}{5}$ has no variable, so it is a constant, not a rational function.`}</p>

          {/* SECTION 2 */}
        </>,
        <>
          <h2>{`Where Rational Functions Live: Domain`}</h2>

          <p>{`Same exclusion rule as in Functions, applied to fractions: anywhere the denominator hits zero, that input leaves the domain. Try $f(x) = \\dfrac{1}{x - 2}$ at $x = 2$ and the denominator vanishes. The geometric payoff is new: every excluded value becomes either an asymptote or a hole on the graph. Finding the domain before graphing also marks where those features sit.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Domain of $g(x) = \\dfrac{x^2 + 3}{x^2 - x - 6}$`}</span>
              <p className="lrn-step-content">{`Factor the denominator to expose its zeros: $x^2 - x - 6 = (x - 3)(x + 2)$. Setting each factor to zero gives $x = 3$ and $x = -2$. Domain: $x \\in \\mathbb{R}$, $x \\neq 3$, $x \\neq -2$.`}</p>
            </div>
          </div>

          {/* SECTION 3 */}
        </>,
        <>
          <h2>{`The Anchor: $y = \\tfrac{1}{x}$`}</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`As $x$ grows very large and positive, what happens to $\\dfrac{1}{x}$? As $x$ shrinks toward zero from the right, what happens?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`For large positive $x$, $\\dfrac{1}{x}$ shrinks toward zero. As $x$ drops toward zero from the right, $\\dfrac{1}{x}$ shoots toward positive infinity. The graph approaches both axes but never touches them.`}</p>
            </details>
          </div>

          <p>{`The simplest rational function is $y = \\dfrac{1}{x}$. It is undefined at $x = 0$ and its graph splits into two separate branches, one in each of the first and third quadrants. Keep this shape as your mental reference, every rational function's behavior near an asymptote echoes it.`}</p>

          <div className="lrn-graph">
            <ReciprocalAnchorViz />
            <p>{`The curve approaches the $x$-axis and the $y$-axis but never touches either. Those two dashed lines are called asymptotes: lines the graph closes in on without ever reaching. Here, $y = 0$ is the horizontal asymptote and $x = 0$ is the vertical asymptote. In the first quadrant, $y = \\dfrac{1}{x}$ falls from top-left to bottom-right; in the third quadrant, it mirrors that.`}</p>
          </div>

          <div className="lrn-insight">
            <p>{`$y = \\dfrac{1}{x}$ is symmetric about the origin. Replace $x$ with $-x$ and $y$ with $-y$ and you get the same equation. The curve has $180^\\circ$ rotational symmetry: spin the graph half a turn around the origin and it lands on itself.`}</p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does the curve approach the axes but never touch them? For the $x$-axis: $\\dfrac{1}{x} = 0$ would require $1 = 0$, which is impossible. So the output never reaches zero.`}</p>
            <p>{`For the $y$-axis: the function is undefined at $x = 0$. You can get as close as you like, but you can never plug in zero.`}</p>
          </div>

          {/* SECTION 4 */}
        </>,
        <>
          <h2>{`Vertical Asymptotes`}</h2>

          <p>{`Near $x = 2$, the denominator of $f(x) = \\dfrac{1}{x - 2}$ is tiny positive from the right, so $f$ shoots to $+\\infty$. From the left it is tiny negative, so $f$ dives to $-\\infty$. A vertical asymptote sits at every $x$ value where the denominator is zero and the numerator is not. (The symbol $\\iff$ below reads as "if and only if".) Drawing vertical asymptotes first carves the plane into strips and tells you which strips can contain parts of the graph.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{VA at } x = a \\iff q(a) = 0 \\text{ and } p(a) \\neq 0$$`}</span>
          </div>

          <p>{`The simplest family of rational functions is the linear-over-linear form $f(x) = \\dfrac{ax + b}{cx + d}$. The vertical asymptote is $x = -\\dfrac{d}{c}$ (set the denominator to zero). The horizontal asymptote is $y = \\dfrac{a}{c}$ (the ratio of leading coefficients).`}</p>

          <div className="lrn-graph">
            <RationalAsymptoteViz />
            <p>{`Move the sliders $a$, $b$, $c$, $d$. The dashed vertical line updates to the new asymptote $x = -\\dfrac{d}{c}$. The horizontal dashed line shows $y = \\dfrac{a}{c}$.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find VA of $f(x) = \\dfrac{x + 1}{(x - 2)(x + 4)}$`}</span>
              <p className="lrn-step-content">{`The denominator is zero at $x = 2$ and $x = -4$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check the numerator at each value</span>
              <p className="lrn-step-content">{`$p(2) = 3 \\neq 0$ and $p(-4) = -3 \\neq 0$. Neither value cancels.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">State the asymptotes</span>
              <p className="lrn-step-content">{`Vertical asymptotes: $x = 2$ and $x = -4$.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why must you check whether the numerator is also zero at a root of the denominator? Form your answer first.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`If both numerator and denominator are zero at the same point, a factor cancels. Cancellation removes the asymptote and creates a hole instead. Checking the numerator separates the two cases.`}</p>
            </details>
          </div>

          <h3>{`One-Sided Behavior at a Vertical Asymptote`}</h3>

          <p>{`Knowing the asymptote sits at $x = a$ is not the same as knowing which way the graph spikes there. The graph rockets to $+\\infty$ on one side and dives to $-\\infty$ on the other, or shoots the same direction on both. The shape depends on the signs of the numerator and denominator just left and just right of $a$.`}</p>

          <p>
            <strong>The procedure:</strong>
            {` plug in a value slightly larger than $a$ (call it $a + \\varepsilon$) and a value slightly smaller ($a - \\varepsilon$). For each, work out the sign of the numerator and the sign of the denominator. A tiny positive denominator with positive numerator means $+\\infty$. A tiny negative denominator with positive numerator means $-\\infty$. Flip those when the numerator is negative.`}
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`One-sided behavior of $f(x) = \\dfrac{x + 1}{(x - 2)(x + 4)}$ near $x = 2$`}</span>
              <p className="lrn-step-content">{`The asymptote is at $x = 2$. Pick $x = 2.01$ (just to the right) and $x = 1.99$ (just to the left).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Sign at $x = 2.01$ (right side)`}</span>
              <p className="lrn-step-content">{`Numerator: $2.01 + 1 = 3.01 > 0$. Denominator: $(0.01)(6.01)$ is tiny positive. Positive over tiny positive: $f \\to +\\infty$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Sign at $x = 1.99$ (left side)`}</span>
              <p className="lrn-step-content">{`Numerator: $2.99 > 0$. Denominator: $(-0.01)(5.99)$ is tiny negative. Positive over tiny negative: $f \\to -\\infty$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Conclusion`}</span>
              <p className="lrn-step-content">{`Near $x = 2$, the graph dives to $-\\infty$ on the left and rockets to $+\\infty$ on the right. The two sides do not match.`}</p>
            </div>
          </div>

          {/* SECTION 5 */}
        </>,
        <>
          <h2>{`Holes: When a Factor Cancels`}</h2>

          <p>{`The cancellation rule from Polynomials still applies, a cancelled factor leaves a restriction ($x \\neq 2$) behind. The new ingredient here is what that restriction looks like on the graph. Take $f(x) = \\dfrac{x^2 - 4}{x - 2}$: the numerator factors as $(x - 2)(x + 2)$, so the $(x - 2)$ cancels and leaves $x + 2$. But the original is still undefined at $x = 2$. The graph looks like the line $y = x + 2$ with one point punched out. This is a hole, a single missing point you could "fill in", also called a removable discontinuity. To locate one: factor, cancel, then evaluate the simplified form at the cancelled value to get the missing $y$-coordinate.`}</p>

          <div className="lrn-graph">
            <RationalHoleViz />
            <p>{`The graph of $\\dfrac{x^2 - 4}{x - 2}$ simplifies to $y = x + 2$ for $x \\neq 2$. The open circle at $(2, 4)$ marks the hole, that point is not part of the graph.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Vertical asymptote</span>
              <p>{`$q(a) = 0$ and $p(a) \\neq 0$. The factor in the denominator does not cancel. The graph spikes to infinity near $x = a$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Hole</span>
              <p>{`$q(a) = 0$ and $p(a) = 0$. A common factor cancels. The graph is unbroken everywhere else; only one point is missing at $x = a$.`}</p>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Drop the restriction and you lose the hole</span>
            <p>{`Carry the $x \\neq 2$ tag beside the simplified expression, the graph feature you would draw next depends on it.`}</p>
          </div>

          {/* SECTION 6 */}
        </>,
        <>
          <h2>{`Horizontal Asymptotes by Degree`}</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`For large $x$, the biggest term in a polynomial dominates. What does $\\dfrac{3x^2 + 2x + 1}{x^2 - 5}$ approach as $x \\to \\infty$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The leading terms dominate: $\\dfrac{3x^2}{x^2} = 3$. So the function approaches $3$ as $x$ grows. The horizontal asymptote is $y = 3$.`}</p>
            </details>
          </div>

          <p>{`A horizontal asymptote describes long-run behavior, what the graph does far out on the left and right. The shorthand $x \\to \\infty$ reads as "$x$ grows without bound to the right"; $x \\to -\\infty$ is the matching left side. The shorthand $f(x) \\to L$ reads as "$f(x)$ closes in on the value $L$".`}</p>

          <div className="lrn-insight">
            <p>{`End-behavior principle: when $|x|$ is large, a polynomial behaves like its highest-degree term. The lower-degree terms become negligible. The "degree" is just the highest power of $x$ in the polynomial.`}</p>
          </div>

          <p>{`So you find the horizontal asymptote by comparing degrees. Compare $\\deg p$ on top with $\\deg q$ on the bottom; the three-case rule below fixes the long-run height of the graph on both sides.`}</p>

          <div className="lrn-graph">
            <DegreeAsymptoteViz />
            <p>{`Toggle between the three cases. The dashed horizontal line shows the asymptote when one exists. When $\\deg p > \\deg q$, no horizontal asymptote appears.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`deg p < deg q`}</span>
              <p>{`The denominator grows faster. The fraction shrinks toward zero. Horizontal asymptote: $y = 0$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`deg p = deg q`}</span>
              <p>{`Both grow at the same rate. Divide the leading coefficients (the numbers in front of the highest powers). Horizontal asymptote: $y = \\dfrac{a_n}{b_n}$, where $a_n$ and $b_n$ are the leading coefficients of $p$ and $q$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`deg p > deg q`}</span>
              <p>{`The numerator grows faster. The fraction grows without bound. No horizontal asymptote. (Slant asymptote instead when the degrees differ by one.)`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`HA of $\\dfrac{2}{x^2 + 1}$`}</span>
              <p className="lrn-step-content">{`$\\deg p = 0$, $\\deg q = 2$. Top degree is less. Horizontal asymptote: $y = 0$.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`HA of $\\dfrac{3x + 1}{x - 2}$`}</span>
              <p className="lrn-step-content">{`Both degrees equal one. Leading coefficients: $3$ and $1$. Horizontal asymptote: $y = \\dfrac{3}{1} = 3$.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`HA of $\\dfrac{x^2 + 1}{x - 1}$`}</span>
              <p className="lrn-step-content">{`$\\deg p = 2$, $\\deg q = 1$. Numerator degree exceeds denominator degree. No horizontal asymptote. Check for a slant asymptote instead.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does dividing leading coefficients give the horizontal asymptote when degrees are equal? Explain in your own words.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`For large $x$, the lower-degree terms become tiny compared with the leading term. The ratio simplifies to $\\dfrac{a_n x^n}{b_n x^n} = \\dfrac{a_n}{b_n}$. The $x^n$ cancels, leaving just the ratio of the top numbers.`}</p>
            </details>
          </div>

          {/* SECTION 7 */}
        </>,
        <>
          <h2>{`Slant Asymptotes`}</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`What if the numerator's degree is one more than the denominator's? The function grows without bound, but how, like a parabola, or at a constant rate?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It grows at a constant rate, like a slanted line. Polynomial long division splits the function into a line plus a small remainder that vanishes as $x$ grows. The graph hugs that line at both ends.`}</p>
            </details>
          </div>

          <p>{`A slant (oblique) asymptote appears when $\\deg p = \\deg q + 1$. Apply polynomial long division from the Polynomials topic: the quotient line is the asymptote, the remainder fraction is what dies off.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Slant asymptote of $f(x) = \\dfrac{x^2 + 2x + 3}{x + 1}$`}</span>
              <p className="lrn-step-content">{`Degrees differ by one, so expect a slant. Divide $x^2 + 2x + 3$ by $x + 1$ using the polynomial long division from Polynomials.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Leading term: $x^2 \\div x = x$`}</span>
              <p className="lrn-step-content">{`Multiply back: $x(x + 1) = x^2 + x$. Subtract from $x^2 + 2x + 3$ to leave $x + 3$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Next term: $x \\div x = 1$`}</span>
              <p className="lrn-step-content">{`Multiply back: $1 \\cdot (x + 1) = x + 1$. Subtract from $x + 3$ to leave the remainder $2$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Read off the line</span>
              <p className="lrn-step-content">{`Quotient $x + 1$, remainder $2$, so $f(x) = (x + 1) + \\dfrac{2}{x + 1}$. The remainder fraction shrinks to zero as $|x|$ grows. Slant asymptote: $y = x + 1$.`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY THE REMAINDER VANISHES</span>
            <p>{`As $|x|$ grows, the denominator grows large and $\\dfrac{R}{q(x)}$ shrinks to zero. The graph closes in on the quotient line on both ends, that line is the asymptote.`}</p>
          </div>

          {/* SECTION 8 */}
        </>,
        <>
          <h2>{`Intercepts of a Rational Function`}</h2>

          <p>{`Apply the intercept rule from Functions: the $y$-intercept is $f(0)$, and the $x$-intercepts solve $p(x) = 0$. Quick check: for $f(x) = \\dfrac{x + 1}{x - 2}$, $f(0) = \\dfrac{1}{-2} = -\\dfrac{1}{2}$. One catch unique to rational functions: a numerator zero is only an $x$-intercept if it survives cancellation. Otherwise it is a hole. And if $q(0) = 0$, the $y$-axis hits an asymptote or hole, there is no $y$-intercept.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Intercepts of $f(x) = \\dfrac{x^2 - 5x + 6}{x + 1}$`}</span>
              <p className="lrn-step-content">{`$y$-intercept: $f(0) = \\dfrac{6}{1} = 6$. Point $(0, 6)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Find $x$-intercepts`}</span>
              <p className="lrn-step-content">{`Set $x^2 - 5x + 6 = 0$: $(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check the domain</span>
              <p className="lrn-step-content">{`The domain excludes $x = -1$ only. Both $x = 2$ and $x = 3$ are in the domain. $x$-intercepts: $(2, 0)$ and $(3, 0)$.`}</p>
            </div>
          </div>

          {/* SECTION 9 */}
        </>,
        <>
          <h2>{`Sketching a Rational Function`}</h2>

          <p>{`Sketching combines all the earlier steps into one procedure. Work through them in order, each step narrows down what the graph can look like, and the picture emerges without plotting many individual points.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: simplify</span>
              <p className="lrn-step-content">{`Factor numerator and denominator. Cancel common factors. Record holes for every cancelled factor.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: domain</span>
              <p className="lrn-step-content">{`State the excluded $x$ values from the original (before cancellation). These are where asymptotes or holes sit.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: vertical asymptotes</span>
              <p className="lrn-step-content">{`Draw dashed vertical lines at every zero of the simplified denominator. Determine one-sided behavior: does the graph go to $+\\infty$ or $-\\infty$ on each side?`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4: horizontal or slant asymptote</span>
              <p className="lrn-step-content">{`Use the degree rule. Draw a dashed horizontal or slant line.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 5: intercepts</span>
              <p className="lrn-step-content">{`Find the $y$-intercept ($x = 0$) and $x$-intercepts (numerator zeros in domain). Plot them.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 6: sketch</span>
              <p className="lrn-step-content">{`Draw each branch in its strip between asymptotes. Approach asymptotes but do not cross them. (A graph may cross a horizontal asymptote at a finite point, only vertical asymptotes are always uncrossed.)`}</p>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE, hole and asymptotes</span>
              <p>{`Sketch $f(x) = \\dfrac{x^2 - 4}{x^2 + x - 6}$.`}</p>
              <ol className="lrn-list">
                <li>{`Simplify: $\\dfrac{(x - 2)(x + 2)}{(x + 3)(x - 2)} = \\dfrac{x + 2}{x + 3}$ for $x \\neq 2$. The factor $(x - 2)$ cancelled, so there is a hole at $x = 2$.`}</li>
                <li>{`Domain: $x \\neq -3$ and $x \\neq 2$ (from the original denominator).`}</li>
                <li>{`Vertical asymptote: only $x = -3$ remains in the simplified denominator. Near $x = -3^+$, $x + 3$ is tiny positive and $x + 2$ is $-1$, so $f \\to -\\infty$. Near $x = -3^-$, $x + 3$ is tiny negative, so $f \\to +\\infty$.`}</li>
                <li>{`Hole coordinate: plug $x = 2$ into the simplified form. $\\dfrac{2 + 2}{2 + 3} = \\dfrac{4}{5}$. Hole at $\\left(2, \\dfrac{4}{5}\\right)$.`}</li>
                <li>{`Degrees of the simplified form: both $1$. Horizontal asymptote: $y = \\dfrac{1}{1} = 1$.`}</li>
                <li>{`$y$-intercept: $f(0) = \\dfrac{2}{3}$. $x$-intercept: $x + 2 = 0$, so $x = -2$. Point $(-2, 0)$.`}</li>
                <li>{`Draw two strips: left of $x = -3$, right of $x = -3$. Sketch each branch approaching the asymptotes, then mark the open circle at $\\left(2, \\dfrac{4}{5}\\right)$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>{`Sketch $g(x) = \\dfrac{2x + 4}{x^2 - 1}$.`}</p>
              <ol className="lrn-list">
                <li>{`Factor: $\\dfrac{2(x + 2)}{(x - 1)(x + 1)}$. Any common factors?`}</li>
                <li>{`State the vertical asymptotes.`}</li>
                <li>{`Find the horizontal asymptote using the degree rule.`}</li>
                <li>{`Find the $y$-intercept and $x$-intercept.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Sketch $h(x) = \\dfrac{x - 1}{(x + 2)(x - 3)}$. Identify all asymptotes and intercepts before drawing.`}</p>
            </div>
          </div>

          <p>{`That six-step pass turns any rational formula into a sketch: simplify first, list holes and asymptotes, anchor with intercepts, then draw each branch in its own strip.`}</p>

          {/* SECTION 10 */}
        </>,
        <>
          <h2>{`Solving Rational Equations`}</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You want to solve $\\dfrac{3}{x} = \\dfrac{1}{x - 2}$. What is the danger of multiplying both sides by $x(x - 2)$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Multiplying can introduce $x = 0$ or $x = 2$ as apparent solutions, but those values make the original fractions undefined. You must check every answer at the end.`}</p>
            </details>
          </div>

          <p>{`Linear Equations introduced the LCD method, and Quadratic Equations applied it when the result became quadratic. The procedure here is the same, multiply by the LCD, solve, reject any candidate that makes the original denominator zero. The only difference is that the larger rational family lets the result land at any polynomial degree. The two worked examples below pair the procedure with the function families above.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $\\dfrac{3}{x} = \\dfrac{1}{x - 2}$`}</span>
              <p className="lrn-step-content">{`Restricted values: $x \\neq 0$, $x \\neq 2$. LCD is $x(x - 2)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Multiply both sides by LCD</span>
              <p className="lrn-step-content">{`$3(x - 2) = x$. Expand: $3x - 6 = x$. So $2x = 6$, $x = 3$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check</span>
              <p className="lrn-step-content">{`$x = 3$ is not restricted. Check: $\\dfrac{3}{3} = 1$ and $\\dfrac{1}{3 - 2} = 1$. Both sides equal $1$. Answer: $x = 3$.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $\\dfrac{x}{x - 1} = \\dfrac{1}{x - 1} + 2$`}</span>
              <p className="lrn-step-content">{`Restricted: $x \\neq 1$. LCD is $x - 1$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Multiply through</span>
              <p className="lrn-step-content">{`$x = 1 + 2(x - 1) = 2x - 1$. So $-x = -1$, $x = 1$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check for extraneous solutions</span>
              <p className="lrn-step-content">{`$x = 1$ is restricted. Reject it. No solution.`}</p>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Algebra correct, answer rejected</span>
            <p>{`The algebra produced $x = 1$, but that value violates the original domain. Reject candidates that conflict with the restricted list, no matter how clean the algebra looks.`}</p>
          </div>

          {/* SECTION 11 */}
        </>,
        <>
          <h2>{`What an Irrational Function Is`}</h2>

          <p>{`Rational functions broke when the denominator hit zero. Irrational functions break for a different reason: the radical refuses negative inputs. A fractional power is the same as a root ($x^{1/2} = \\sqrt{x}$), so the domain restricts in a new way, by the sign of whatever sits under the root, not just by zeros.`}</p>

          <p>{`An irrational function contains a variable under a root sign (also called a radical). It cannot be written as a ratio of polynomials. A polynomial ratio is defined for all real $x$ except finitely many zeros. But $\\sqrt{x}$ rejects a whole half-line of negative inputs, so no ratio matches. Examples: $\\sqrt{x}$, $\\sqrt{2x + 1}$, $\\sqrt[3]{x^2 - 4}$. Spot one by looking for a variable inside a radical. The index of the root then decides whether the domain is restricted.`}</p>

          <div className="lrn-insight">
            <p>{`The word "irrational" here means "not rational", not expressible as a polynomial ratio. It does not mean "chaotic" or "unpredictable". Irrational functions are perfectly well-behaved on their domains.`}</p>
          </div>

          {/* SECTION 12 */}
        </>,
        <>
          <h2>{`The Anchor: $y = \\sqrt{x}$`}</h2>

          <p>{`The function $y = \\sqrt{x}$ accepts only $x \\geq 0$. Its graph starts at the origin and curves upward to the right, growing more slowly as $x$ increases. At $x = 100$, $\\sqrt{100} = 10$, far less than $100$, so the curve flattens. Keep this anchor in mind: every square-root function you meet later shifts, stretches, or flips this shape.`}</p>

          <div className="lrn-graph">
            <SquareRootAnchorViz />
            <p>{`The graph starts at $(0, 0)$ and grows rightward. The shaded left region shows where $x < 0$: the function is undefined there. The starting point at the origin is the smallest output.`}</p>
          </div>

          <ul className="lrn-list">
            <li>{`Domain: $x \\geq 0$ (all non-negative reals)`}</li>
            <li>{`Range: $y \\geq 0$ (all non-negative reals)`}</li>
            <li>{`Starting point: $(0, 0)$`}</li>
            <li>{`Increasing: the curve rises for all $x > 0$`}</li>
            <li>{`Concave down: the curve bends like the top of a hill, with the rate of growth slowing as $x$ increases`}</li>
          </ul>

          {/* SECTION 13 */}
        </>,
        <>
          <h2>{`Domain of an Irrational Function`}</h2>

          <p>{`Square roots need $x \\geq 0$. Cube roots are more generous: $\\sqrt[3]{-8} = -2$ because $(-2)^3 = -8$, so odd-index roots accept every real number. Exponents, Roots and Radicals kept $\\sqrt[n]{a}$ with $a \\geq 0$ to run one rule book. We lift that restriction now: odd indices need it. The domain rule splits on the index. The index is the small number outside the root symbol. It is the $3$ in $\\sqrt[3]{x}$, the $2$ on a plain square root. The radicand is whatever sits under the root. Check the index first: even index means solve an inequality, odd index means no restriction from the radical.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Even index: $\\sqrt[2n]{u}$`}</span>
              <p>{`Need $u \\geq 0$. Solve $u \\geq 0$ to get the domain. The shorthand $2n$ means any even number: $2, 4, 6, \\ldots$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Odd index: $\\sqrt[2n+1]{u}$`}</span>
              <p>{`No restriction from the radical. Any real input is allowed. The only restrictions come from other parts of the function, like a denominator. The shorthand $2n+1$ means any odd number: $3, 5, 7, \\ldots$`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Even index, linear radicand: $f(x) = \\sqrt{3x - 6}$`}</span>
              <p className="lrn-step-content">{`Index is $2$ (even). Set $3x - 6 \\geq 0$. Divide by $3$: $x \\geq 2$. Domain: $[2, \\infty)$.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Odd index: $g(x) = \\sqrt[3]{2x - 7}$`}</span>
              <p className="lrn-step-content">{`Index is $3$ (odd). All real numbers are allowed. Domain: $x \\in \\mathbb{R}$.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Even index, quadratic radicand: $r(x) = \\sqrt{9 - x^2}$`}</span>
              <p className="lrn-step-content">{`Index $2$ is even, so set $9 - x^2 \\geq 0$. This rearranges to $x^2 \\leq 9$, giving $-3 \\leq x \\leq 3$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`State the domain`}</span>
              <p className="lrn-step-content">{`Domain: $[-3, 3]$. A quadratic radicand can produce a bounded interval instead of a half-line, the inequality you solve is no longer linear.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Radical over a denominator: $h(x) = \\dfrac{\\sqrt{x - 2}}{x - 5}$`}</span>
              <p className="lrn-step-content">{`Two conditions: $x - 2 \\geq 0$ (radical) and $x \\neq 5$ (denominator). Combine: $x \\geq 2$ and $x \\neq 5$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Write as intervals</span>
              <p className="lrn-step-content">{`Domain: $[2, 5) \\cup (5, \\infty)$. The symbol $\\cup$ means "or", the domain is either interval. The notations $x \\geq 2,\\ x \\neq 5$ and the interval-union form say the same thing.`}</p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Stacked conditions</span>
            <p>{`When two conditions stack, the stricter one wins. A radical inside a denominator forces the radicand strictly positive, not just non-negative, division still forbids zero.`}</p>
          </div>

          {/* SECTION 14 */}
        </>,
        <>
          <h2>{`Transformations of the Square-Root Curve`}</h2>

          <p>{`The general form $y = a\\sqrt{x - h} + k$ shifts, stretches, and flips the basic curve. The $(a, h, k)$ pattern mirrors the quadratic vertex form $a(x - h)^2 + k$, applied here to the $\\sqrt{x}$ anchor. The starting point moves from $(0, 0)$ to $(h, k)$. $a$ stretches or flips the curve. From those three numbers the sketch follows with no point-by-point plotting.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$y = a\\sqrt{x - h} + k, \\quad x \\geq h \\text{ (when } a > 0\\text{)}$$`}</span>
          </div>

          <p>{`Domain: $x \\geq h$ when $a > 0$, $x \\geq h$ when $a < 0$ too (the radical's restriction does not depend on $a$). Range: $y \\geq k$ when $a > 0$, $y \\leq k$ when $a < 0$, the curve only ever lies on one side of the horizontal line through the starting point.`}</p>

          <div className="lrn-graph">
            <SquareRootTransformViz />
            <p>{`The dashed curve is the reference $y = \\sqrt{x}$. Move the sliders to apply $a$ (stretch/flip), $h$ (shift right), and $k$ (shift up). The solid dot marks the starting point $(h, k)$.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Describe $y = 2\\sqrt{x - 1} + 3$`}</span>
              <p className="lrn-step-content">{`$a = 2$, $h = 1$, $k = 3$. Starting point: $(1, 3)$. Domain: $x \\geq 1$. Range: $y \\geq 3$. The curve is twice as steep as $\\sqrt{x}$ and opens upward.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Describe $y = -\\sqrt{x + 2} - 1$`}</span>
              <p className="lrn-step-content">{`$a = -1$, $h = -2$, $k = -1$. Starting point: $(-2, -1)$. Domain: $x \\geq -2$. Range: $y \\leq -1$ (negative $a$ flips the curve, so it falls from the starting point).`}</p>
            </div>
          </div>

          {/* SECTION 15 */}
        </>,
        <>
          <h2>{`Solving Equations with Radicals`}</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`To remove $\\sqrt{x}$ from an equation, you square both sides. But squaring $-3$ gives $9$, the same as squaring $3$. What problem does this cause?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Squaring destroys the sign. An equation like $\\sqrt{\\cdot} = -3$ has no solution. Square both sides and you get $\\cdot = 9$, which may have solutions. Those new solutions are extraneous.`}</p>
            </details>
          </div>

          <p>{`Squaring both sides can invent solutions, and every candidate has to be checked. Linear Equations already showed why. The same rule governs any single-radical equation here: isolate the radical, square both sides, solve, check. The two worked examples below apply the rule once the resulting polynomial is quadratic.`}</p>

          <div className="lrn-graph">
            <RadicalSquareSignViz />
            <p>{`Left: $y = \\sqrt{2x - 1} + 2$ meets $y = x$ only at $x = 5$. Right: after squaring, $(x - 2)^2 = 2x - 1$ meets at $x = 1$ and $x = 5$. The crossing at $x = 1$ is extraneous.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $\\sqrt{x + 3} = 4$`}</span>
              <p className="lrn-step-content">{`The radical is already isolated. Square both sides: $x + 3 = 16$. So $x = 13$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check</span>
              <p className="lrn-step-content">{`$\\sqrt{13 + 3} = \\sqrt{16} = 4$. Correct. Answer: $x = 13$.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Solve $\\sqrt{2x - 1} + 2 = x$`}</span>
              <p className="lrn-step-content">{`Isolate the radical: $\\sqrt{2x - 1} = x - 2$. For this to be valid, $x \\geq 2$ (right side must be $\\geq 0$).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Square both sides</span>
              <p className="lrn-step-content">{`$2x - 1 = (x - 2)^2 = x^2 - 4x + 4$. Rearrange: $x^2 - 6x + 5 = 0$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve the quadratic</span>
              <p className="lrn-step-content">{`$(x - 1)(x - 5) = 0$. Candidates: $x = 1$ and $x = 5$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check each candidate</span>
              <p className="lrn-step-content">{`$x = 1$: $\\sqrt{1} + 2 = 3 \\neq 1$. Reject. $x = 5$: $\\sqrt{9} + 2 = 5$. Accept. Answer: $x = 5$.`}</p>
            </div>
          </div>

          <p>{`That is the complete radical-equation toolkit. Each step earns its place: isolate strips the clutter from the radical, raising clears it, and the check restores the sign information that raising erased.`}</p>
        </>
      ]
    },

    practice: PRACTICE_CARDS,

    reference: {
      category: 'Quick Reference',
      title: 'Rational and Irrational Functions',
      sections: [
        <>
          <div className="ref-section">
            <div className="ref-label">RATIONAL FUNCTION ESSENTIALS</div>
            <h2>{`Definition and Domain`}</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">{`Rational Function`}</div>
              <div className="ref-formula-eq">{`$$f(x) = \\frac{p(x)}{q(x)}, \\quad q(x) \\neq 0$$`}</div>
              <div className="ref-formula-when">{`Identify any function where a polynomial divides another polynomial.`}</div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">{`Domain Rule`}</div>
              <div className="ref-formula-eq">{`$$\\text{Domain} = \\mathbb{R} \\setminus \\{x : q(x) = 0\\}$$`}</div>
              <div className="ref-formula-when">{`Always find the domain before graphing. The symbol $\\setminus$ means "set minus", take all reals, then remove those values. Solve $q(x) = 0$ and discard the roots.`}</div>
            </div>
          </div>

          <div className="ref-section">
            <div className="ref-label">ASYMPTOTES AND HOLES</div>
            <h2>{`Key Features`}</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">{`Vertical Asymptote`}</div>
              <div className="ref-formula-eq">{`$$x = a \\text{ where } q(a) = 0 \\text{ and } p(a) \\neq 0$$`}</div>
              <div className="ref-formula-when">{`After factoring and cancelling, any remaining denominator zero is a vertical asymptote.`}</div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">{`Hole (Removable Discontinuity)`}</div>
              <div className="ref-formula-eq">{`$$x = a \\text{ where } q(a) = 0 \\text{ and } p(a) = 0 \\text{ (common factor)}$$`}</div>
              <div className="ref-formula-when">{`Triggered the moment a factor cancels from both numerator and denominator. Record the hole at $(a,\\ \\text{simplified } f(a))$.`}</div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">{`Horizontal Asymptote (three cases)`}</div>
              <div className="ref-formula-eq">
                {`$$\\deg p < \\deg q \\Rightarrow y = 0$$`}
                {`$$\\deg p = \\deg q \\Rightarrow y = \\frac{a_n}{b_n}$$`}
                {`$$\\deg p > \\deg q \\Rightarrow \\text{no HA}$$`}
              </div>
              <div className="ref-formula-when">{`After the vertical asymptotes are placed, the degree comparison fixes the long-run height on both ends.`}</div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">{`Slant Asymptote`}</div>
              <div className="ref-formula-eq">{`$$\\deg p = \\deg q + 1 \\Rightarrow \\text{divide } p \\text{ by } q; \\text{ quotient is the SA}$$`}</div>
              <div className="ref-formula-when">{`Reach for this whenever the numerator degree exceeds the denominator degree by exactly one, the quotient line replaces the missing horizontal asymptote.`}</div>
            </div>
          </div>

          <div className="ref-section">
            <div className="ref-label">SKETCHING CHECKLIST</div>
            <h2>{`Steps to Sketch`}</h2>
            <ol className="ref-list lrn-list">
              <li>{`Factor and simplify; record holes from cancelled factors.`}</li>
              <li>{`State the domain (all roots of original denominator excluded).`}</li>
              <li>{`Draw vertical asymptotes; determine one-sided behavior at each.`}</li>
              <li>{`Find and draw horizontal or slant asymptote.`}</li>
              <li>{`Find $y$-intercept ($x = 0$) and $x$-intercepts (numerator zeros in domain).`}</li>
              <li>{`Sketch each branch in its vertical strip.`}</li>
            </ol>
          </div>

          <div className="ref-section">
            <div className="ref-label">RATIONAL EQUATIONS</div>
            <h2>{`Solving Rational Equations`}</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">{`LCD Method`}</div>
              <div className="ref-formula-eq">{`$$\\text{Multiply both sides by LCD, solve, check all solutions}$$`}</div>
              <div className="ref-formula-when">{`Any equation with $x$ in a denominator. Write restricted values first, then check every solution against them.`}</div>
            </div>
          </div>

          <div className="ref-section">
            <div className="ref-label">IRRATIONAL FUNCTION ESSENTIALS</div>
            <h2>{`Definition and Domain`}</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">{`Index parity rule`}</div>
              <div className="ref-formula-eq">{`$$\\sqrt[2n]{u(x)} \\text{ requires } u(x) \\geq 0; \\quad \\sqrt[2n+1]{u(x)} \\text{ is defined for all } x \\in \\mathbb{R}$$`}</div>
              <div className="ref-formula-when">{`Even index (square, fourth, sixth root) needs a non-negative radicand. Odd index (cube, fifth root) accepts any real. Same parity rule from fractional-exponent powers.`}</div>
            </div>
          </div>

          <div className="ref-section">
            <div className="ref-label">SQUARE-ROOT TRANSFORMATIONS</div>
            <h2>{`$y = a\\sqrt{x - h} + k$`}</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">{`General Square Root`}</div>
              <div className="ref-formula-eq">{`$$y = a\\sqrt{x - h} + k$$`}</div>
              <div className="ref-formula-when">{`Read off the starting point $(h, k)$, the stretch factor $a$, and the direction without plotting. Sign of $a$ chooses up or down. Same $(a, h, k)$ pattern as the quadratic vertex form.`}</div>
            </div>

            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Read from the formula</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`Starting point`}</td>
                  <td>{`$(h, k)$, the leftmost point of the curve (when $a > 0$)`}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ref-section">
            <div className="ref-label">RADICAL EQUATIONS</div>
            <h2>{`Isolate, Raise, Check`}</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">{`Three-Step Procedure`}</div>
              <div className="ref-formula-eq">{`$$\\text{1. Isolate radical} \\quad \\text{2. Square both sides} \\quad \\text{3. Check in original}$$`}</div>
              <div className="ref-formula-when">{`Apply to any equation where $x$ appears under a square root. The check step is not optional.`}</div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">{`Sign-Collapse Principle`}</div>
              <div className="ref-formula-eq">{`$$a = b \\Rightarrow a^2 = b^2, \\text{ but } a^2 = b^2 \\not\\Rightarrow a = b$$`}</div>
              <div className="ref-formula-when">{`Explains why extraneous solutions appear. Squaring is a one-way operation that erases sign information.`}</div>
            </div>
          </div>
        </>
      ]
    },

    customCss: null
  }
}

export default function RationalAndIrrationalFunctions() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
