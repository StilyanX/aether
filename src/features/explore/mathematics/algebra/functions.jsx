import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  CompositionChainViz,
  FunctionMachineViz,
  GraphPointViz,
  HorizontalScaleViz,
  IntersectionViz,
  InverseGraphViz,
  ParabolaViz,
  RefInverseViz,
  VerticalScaleViz
} from '../../../../components/viz'

const PRACTICE_CARDS = [
  {
    q: `What is a function? Give one example and one non-example.`,
    a: `A function is a rule where each valid input gives exactly one output. Example: $f(x) = 2x + 3$ every number you put in gives exactly one number out. Non-example: the rule "input a positive number, output its square roots" input 4 gives both 2 and −2, so two outputs, not one.`
  },
  {
    q: `If $f(x) = 3x - 7$, find $f(0)$, $f(4)$, and $f(2k)$.`,
    a: `$f(0) = -7$, $f(4) = 5$, $f(2k) = 6k - 7$. Replace $x$ with each input. $f(0) = 3(0) - 7 = -7$. $f(4) = 3(4) - 7 = 5$. $f(2k) = 3(2k) - 7 = 6k - 7$.`
  },
  {
    q: `If $g(x) = x^2 + 4$, find $g(t + 1)$.`,
    a: `$g(t + 1) = t^2 + 2t + 5$. Replace $x$ with $(t + 1)$: $(t + 1)^2 + 4 = t^2 + 2t + 1 + 4 = t^2 + 2t + 5$.`
  },
  {
    q: `Find the domain of $f(x) = \\sqrt{2x - 8}$.`,
    a: `$x \\geq 4$. The inside of a square root must be $\\geq 0$. Solve $2x - 8 \\geq 0$: $x \\geq 4$.`
  },
  {
    q: `Find the domain of $h(x) = \\frac{1}{x^2 - 9}$.`,
    a: `All real numbers except $x = 3$ and $x = -3$. The denominator $(x - 3)(x + 3)$ is zero at $x = \\pm 3$. Division by zero is undefined.`
  },
  {
    q: `Find the range of $f(x) = 2x^2 - 5$. Is $-7$ in the range?`,
    a: `The range is $y \\geq -5$. Solving $f(x) = -7$ gives $x^2 = -1$, which has no real solution. So $-7$ is not in the range.`
  },
  {
    q: `Find the range of $f(x) = \\frac{2x - 3}{x + 5}$.`,
    a: `All reals except 2. Set $y = \\frac{2x - 3}{x + 5}$ and solve: $x = \\frac{-3 - 5y}{y - 2}$. When $y = 2$ the denominator is 0, so no valid $x$ exists.`
  },
  {
    q: `A function is defined on the inputs $\\{$dogs, cats, fish$\\}$. It maps dogs → 3, cats → 7, fish → 3. Is this a function? What is its range?`,
    a: `Yes. Two inputs (dogs and fish) share output 3, but each input still has exactly one output. Functions allow multiple inputs to share an output. Range: $\\{3, 7\\}$.`
  },
  {
    q: `A temperature converter is $C(x) = \\frac{(x - 32)}{1.8}$, where $x$ is degrees Fahrenheit. Find $C(212)$.`,
    a: `$C(212) = \\frac{(212 - 32)}{1.8} = \\frac{180}{1.8} = 100$. So 212° F equals 100° C the boiling point of water.`
  },
  {
    q: `What is a dummy variable, and why can you freely change it?`,
    a: `A dummy variable is the placeholder letter in a function definition, like $x$ in $f(x) = 2x + 5$. $f(t) = 2t + 5$ defines the same function. The letter is a label for "the input"; only the rule matters.`
  },
  {
    q: `Why is the sum of two functions always a function?`,
    a: `For any input $a$, $f(a)$ has one value and $g(a)$ has one value. Adding two unique numbers gives one unique number. So $(f + g)(a)$ has exactly one value.`
  },
  {
    q: `If $f(x) = 3x + 2$ and $g(x) = 2x - 9$, find $(f + g)(x)$ and $(f \\cdot g)(x)$.`,
    a: `$(f + g)(x) = 5x - 7$. $(f \\cdot g)(x) = 6x^2 - 23x - 18$. Add and multiply the formulas directly. $(3x + 2)(2x - 9) = 6x^2 - 27x + 4x - 18 = 6x^2 - 23x - 18$.`
  },
  {
    q: `If $f(x) = \\sqrt{x}$ and $g(x) = \\sqrt{x^2 - x - 6}$, what is the domain of $\\frac{f}{g}$?`,
    a: `$x > 3$. Domain of $f$: $x \\geq 0$. Domain of $g$: $x \\geq 3$ or $x \\leq -2$. Combined: $x \\geq 3$. For $\\frac{f}{g}$, also exclude where $g(x) = 0$ (at $x = 3$). Final: $x > 3$.`
  },
  {
    q: `Compute $f(g(2))$ and $g(f(2))$ for $f(x) = 2x - 6$ and $g(x) = 3x - 9$. Are they equal?`,
    a: `$f(g(2)) = -12$ and $g(f(2)) = -15$. Not equal. $g(2) = -3$, $f(-3) = -12$. $f(2) = -2$, $g(-2) = -15$. Composition is not commutative.`
  },
  {
    q: `Find $f(g(x))$ for $f(x) = 2x - 6$ and $g(x) = 3x - 9$.`,
    a: `$f(g(x)) = 6x - 24$. Substitute $g(x) = 3x - 9$ into $f$: $f(3x - 9) = 2(3x - 9) - 6 = 6x - 18 - 6 = 6x - 24$.`
  },
  {
    q: `If $p(x) = x^2$ and $q(x) = x + 3$, find $p(q(x))$ and $q(p(x))$.`,
    a: `$p(q(x)) = (x + 3)^2 = x^2 + 6x + 9$. $q(p(x)) = x^2 + 3$. They differ squaring after the shift gives a different result from squaring before it.`
  },
  {
    q: `What does $f^2(x)$ mean for a function $f$? What does it NOT mean?`,
    a: `$f^2(x)$ means $f(f(x))$ apply $f$ twice. It does NOT mean $f(x) \\cdot f(x)$. If $f(x) = 3x + 10$, then $f^2(x) = f(f(x)) = 9x + 40$.`
  },
  {
    q: `Find $x$ such that $f(f(x)) = x$ where $f(x) = 3x + 10$.`,
    a: `$x = -5$. $f(f(x)) = 9x + 40$. Setting $9x + 40 = x$ gives $8x = -40$, so $x = -5$. Check: $f(-5) = -5$.`
  },
  {
    q: `From a graph, $f(3) = 1$, $f(1) = -1$, $f(-1) = 0$. Find $f(f(f(3)))$.`,
    a: `$f(f(f(3))) = 0$. Work inside out: $f(3) = 1$, $f(1) = -1$, $f(-1) = 0$.`
  },
  {
    q: `Verify that $f(x) = 2x - 9$ and $g(x) = \\frac{x + 9}{2}$ are inverses.`,
    a: `Check both directions. $g(f(x)) = \\frac{(2x - 9) + 9}{2} = x$. $f(g(x)) = 2 \\cdot \\frac{x + 9}{2} - 9 = (x + 9) - 9 = x$. Both hold, so they are inverses.`
  },
  {
    q: `Find the inverse of $f(x) = 4x - 3$.`,
    a: `$f^{-1}(x) = \\frac{x + 3}{4}$. Solve $4 g(x) - 3 = x$: $g(x) = \\frac{x + 3}{4}$. Check: $f(\\frac{x+3}{4}) = (x + 3) - 3 = x$.`
  },
  {
    q: `A function $f$ has an inverse and $f(3) = 5$. What is $f^{-1}(5)$?`,
    a: `$f^{-1}(5) = 3$. The inverse reverses every mapping: $f$ sends 3 to 5, so $f^{-1}$ sends 5 back to 3.`
  },
  {
    q: `$f$ is the inverse of $g(x) = \\frac{2x - 3}{x + 5}$. Find $f(4)$.`,
    a: `$f(4) = -\\frac{23}{2}$. Find $x$ with $g(x) = 4$: $2x - 3 = 4(x + 5)$, $2x - 3 = 4x + 20$, $-2x = 23$, $x = -\\frac{23}{2}$. So $f(4) = -\\frac{23}{2}$.`
  },
  {
    q: `Does $f(x) = x^2$ have an inverse on all reals? What about $h(x) = x^2$ for $x \\geq 0$?`,
    a: `$f$ has no inverse: $f(2) = f(-2) = 4$, so the inverse cannot decide between 2 and $-2$. $h$ has an inverse: $h^{-1}(x) = \\sqrt{x}$. Restricting the domain removes the ambiguity.`
  },
  {
    q: `A graph of $f$ has a horizontal line $y = 4$ passing through two points. Does $f$ have an inverse?`,
    a: `No. Two points at height 4 means two different inputs both map to output 4. The inverse cannot return both.`
  },
  {
    q: `Explain why $f^{-1}(x)$ does NOT mean $\\frac{1}{f(x)}$.`,
    a: `$\\frac{1}{f(x)}$ is the reciprocal of the output. $f^{-1}(x)$ applies the inverse function a different operation. If $f(x) = 2x$, then $f^{-1}(x) = \\frac{x}{2}$ but $\\frac{1}{f(x)} = \\frac{1}{2x}$.`
  },
  {
    q: `Three points on $f$ are $(1, 2)$, $(3, -4)$, $(5, 0)$. What are three points on $f^{-1}$?`,
    a: `$(2, 1)$, $(-4, 3)$, $(0, 5)$. Swap the coordinates of each point.`
  },
  {
    q: `Given $f(x - 3) = 9x^2 + 2$, find $f(5)$.`,
    a: `$f(5) = 578$. Set $x - 3 = 5$: $x = 8$. Substitute: $f(5) = 9(64) + 2 = 578$. The trap is substituting $x = 5$, which would give $f(2)$.`
  },
  {
    q: `Given $f(x - 3) = 9x^2 + 2$, find $f(x)$ as an explicit formula.`,
    a: `$f(x) = 9(x + 3)^2 + 2$. Let $u = x - 3$, so $x = u + 3$. Substitute: $f(u) = 9(u + 3)^2 + 2$. Rename $u$ to $x$.`
  },
  {
    q: `Given $f(2x + 1) = x^2 - 3$, find $f(5)$.`,
    a: `$f(5) = 1$. Set $2x + 1 = 5$: $x = 2$. Substitute: $f(5) = 4 - 3 = 1$.`
  },
  {
    q: `Given $f(\\frac{x}{3}) = x^2 + x + 1$, find the sum of all $z$ where $f(3z) = 7$.`,
    a: `Sum $= -\\frac{1}{9}$. Set $x = 9z$ (so that $\\frac{x}{3} = 3z$): $f(3z) = 81z^2 + 9z + 1 = 7$, giving $81z^2 + 9z - 6 = 0$. By Vieta's: sum of roots $= -\\frac{9}{81} = -\\frac{1}{9}$.`
  },
  {
    q: `Why must you substitute for the entire expression in a functional equation, not just the variable?`,
    a: `$f(x - 3)$ is NOT $f(x) - 3$. The expression $x - 3$ is the input to $f$. The rule applies to the whole input. Splitting it changes what $f$ actually receives.`
  },
  {
    q: `Given $f(m) + f(n) = f(mn)$, $f(2) = 7$, $f(3) = 10$. Find $f(12)$.`,
    a: `$f(12) = 24$. $12 = 2 \\cdot 6$, so $f(12) = f(2) + f(6)$. $f(6) = f(2) + f(3) = 17$. So $f(12) = 7 + 17 = 24$.`
  },
  {
    q: `Suppose $f(a) + f(b) = n^2$ whenever $a + b = 2^n$. Find $f(2)$.`,
    a: `$f(2) = 2$. Use $a = b = 2$: $2 + 2 = 4 = 2^2$, so $2 f(2) = 4$, giving $f(2) = 2$.`
  },
  {
    q: `Given $f(x) = 3 - 2x$ and $g(f(x)) = 2x^3 - 3x + 5$, find $g(7)$.`,
    a: `$g(7) = -5$. Find $x$ with $f(x) = 7$: $3 - 2x = 7$, $x = -2$. Then $g(7) = 2(-2)^3 - 3(-2) + 5 = -16 + 6 + 5 = -5$.`
  },
  {
    q: `You know $h(f(x)) = x^2 + 4x + 1$ and $f(x) = x + 2$. Find $h(5)$.`,
    a: `$h(5) = 22$. Find $x$ with $f(x) = 5$: $x = 3$. Then $h(5) = 3^2 + 4(3) + 1 = 22$.`
  },
  {
    q: `Why is it wrong to substitute $x = 7$ directly when computing $g(7)$ from $g(f(x)) = 2x^3 - 3x + 5$?`,
    a: `Substituting $x = 7$ computes $g(f(7))$, not $g(7)$. $f(7) = 3 - 14 = -11$, so it returns $g(-11)$. To get $g(7)$, find $x$ with $f(x) = 7$, which is $x = -2$.`
  },
  {
    q: `Define $x \\star y = (x + y)(x - y)$. Compute $3 \\star (4 \\star 5)$.`,
    a: `$-72$. First: $4 \\star 5 = (9)(-1) = -9$. Then: $3 \\star (-9) = (-6)(12) = -72$.`
  },
  {
    q: `Define $a \\# b = ab - a + b - 8$. Solve $x \\# 3 = 37$.`,
    a: `$x = 21$. Substitute $b = 3$: $x \\# 3 = 3x - x + 3 - 8 = 2x - 5$. Set $2x - 5 = 37$: $x = 21$.`
  },
  {
    q: `Is $x \\star y = (x - y)^2$ commutative?`,
    a: `Yes. $(x - y)^2 = (y - x)^2$ because squaring removes the sign. So $x \\star y = y \\star x$ for all real inputs.`
  },
  {
    q: `Evaluate $f(x, y) = 2xy - x + y$ at $(3, 4)$.`,
    a: `$f(3, 4) = 25$. Replace $x$ with 3 and $y$ with 4: $2(3)(4) - 3 + 4 = 24 - 3 + 4 = 25$.`
  },
  {
    q: `Why is the quadratic formula NOT a valid function of $(a, b, c)$?`,
    a: `It produces two outputs for most inputs. The $\\pm$ sign in $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives two values. A function must give exactly one output per input.`
  },
  {
    q: `Graph $f(x) = x^2 - 5x + 6$. What are the x-intercepts and y-intercept?`,
    a: `x-intercepts at $(2, 0)$ and $(3, 0)$. y-intercept at $(0, 6)$. Set $f(x) = 0$ and factor $(x - 2)(x - 3)$. y-intercept: $f(0) = 6$.`
  },
  {
    q: `Why can a function have at most one y-intercept?`,
    a: `The y-intercept needs $x = 0$. Since $f(0)$ has at most one value, the graph can cross the y-axis at most once.`
  },
  {
    q: `Explain why the vertical line test works.`,
    a: `Each vertical line $x = a$ represents one input. If the line hits the graph at two points $(a, b_1)$ and $(a, b_2)$, input $a$ produces two outputs not a function. A graph is a function exactly when every vertical line hits at most one point.`
  },
  {
    q: `A graph is a perfect circle centered at the origin. Is it a function?`,
    a: `No. The vertical line $x = 0$ passes through $(0, r)$ and $(0, -r)$ one input, two outputs.`
  },
  {
    q: `How many real solutions does $x^6 = 2x + 3$ have?`,
    a: `Two. The line $y = 2x + 3$ crosses the U-shaped curve $y = x^6$ at two points. Each crossing is one solution.`
  },
  {
    q: `$D(x) = 100 + 4x$ and $A(x) = 800 - 3x$. At what integer $x$ does $D(x)$ first exceed $2 A(x)$?`,
    a: `$x = 151$. Set $100 + 4x > 1600 - 6x$: $10x > 1500$, $x > 150$. First integer above 150: $x = 151$.`
  },
  {
    q: `Effect on the graph of $y = f(x) + 3$ versus $y = f(x + 3)$.`,
    a: `$y = f(x) + 3$ adds 3 to every output the graph shifts UP 3 units. $y = f(x + 3)$ adds 3 to every input the graph shifts LEFT 3 units. Input shifts go opposite the sign.`
  },
  {
    q: `How do $y = -f(x)$ and $y = f(-x)$ differ?`,
    a: `$y = -f(x)$ negates the output, reflecting over the x-axis. $y = f(-x)$ negates the input, reflecting over the y-axis. One flips y-coordinates; the other flips x-coordinates.`
  },
  {
    q: `You know $f(5) = 8$. Find a point on $y = f(x + 3)$ and on $y = f(2x + 3)$.`,
    a: `On $y = f(x + 3)$: set $x + 3 = 5$, $x = 2$, so the point is $(2, 8)$. On $y = f(2x + 3)$: set $2x + 3 = 5$, $x = 1$, so the point is $(1, 8)$.`
  },
  {
    q: `Sketch $y = f(2x - 1) + 3$ from $y = f(x)$. What are the steps?`,
    a: `Factor first: $2x - 1 = 2(x - \\frac{1}{2})$. Step 1: horizontal compression by 2. Step 2: horizontal shift right by $\\frac{1}{2}$. Step 3: vertical shift up 3.`
  },
  {
    q: `What is the graphical relationship between $f$ and $f^{-1}$?`,
    a: `The graph of $f^{-1}$ is the reflection of $f$ over the line $y = x$. Every point $(a, b)$ on $f$ corresponds to $(b, a)$ on $f^{-1}$.`
  },
  {
    q: `A function satisfies $f(x) = f(-x)$ for all $x$. Can it have an inverse?`,
    a: `Only if it is constant zero, or only defined at $x = 0$. Otherwise, two different inputs ($x$ and $-x$) share an output, so the horizontal line test fails.`
  },
  {
    q: `What does $f^n(x)$ mean, and how does it appear in the Mandelbrot set?`,
    a: `$f^n(x)$ means applying $f$ exactly $n$ times. The Mandelbrot set uses $f_c(z) = z^2 + c$ starting at $z = 0$. If $f_c^n(0)$ stays bounded as $n \\to \\infty$, then $c$ belongs to the set.`
  }
]

function useConfig() {
  const config = {
    cssPrefix: 'fnc',
    documentTitle: 'Functions AETHER',
    learning: {
      groupTitle: 'Coordinate Geometry and Functions',
      category: 'Module 16–17',
      title: 'Functions',
      subtitle: `A function assigns exactly one output to each input. Master evaluation, composition, inverses, transformations, and functional equations.`,
      sections: [
        <>
          {/* ═══════════════════════════════════════════════
              SECTION 1: WHAT IS A FUNCTION?
          ═══════════════════════════════════════════════ */}
          <h2>{`What Is a Function?`}</h2>

          <p>{`A function is a rule that takes an input and produces exactly one output. Feed it the same input twice and you get the same answer twice. If a single input could yield two different outputs, it is not a function.`}</p>

          <p>{`Write a function as $f(x)$ read "f of x." The letter $f$ names the function; the $x$ inside the parentheses is the input. The parentheses do not mean multiplication.`}</p>

          <div className="lrn-graph">
            <FunctionMachineViz />
            <p>{`A function as a machine: one input enters from the left, one output exits from the right.`}</p>
          </div>

          <p>
            <strong>{`Dummy variables.`}</strong>
            {` The letter $x$ is a placeholder, called a `}
            <strong>{`dummy variable`}</strong>
            {`. Replace it with any letter and the function is unchanged: $f(x) = 2x + 3$ and $f(t) = 2t + 3$ are the same function. The rule is what matters, not the label.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Domain</span>
            <div className="lrn-definition-desc">
              <p>{`The set of all values you can put into a function and get a valid output. Unless stated otherwise, inputs and outputs are real numbers.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Range</span>
            <div className="lrn-definition-desc">
              <p>{`The set of all values that can actually come out of a function.`}</p>
            </div>
          </div>

          <h2>{`Recognizing Functions`}</h2>

          <p>{`Check each rule against the "exactly one output per input" requirement. Concrete cases:`}</p>

          <ul className="lrn-list">
            <li>
              <strong>{`Input: name of a month. Output: number of days in 2005.`}</strong>
              {` Every month has exactly one day count. Function. Domain: the twelve months. Range: $\\{28, 30, 31\\}$.`}
            </li>
            <li>
              <strong>{`Input: a positive integer. Output: a month with that many days.`}</strong>
              {` Input 30 matches April, June, September, and November. One input, four outputs. Not a function.`}
            </li>
            <li>
              <strong>{`Input: a positive integer. Output: a perfect square less than the input.`}</strong>
              {` Input 10 could give 0, 1, 4, or 9. Not a function.`}
            </li>
            <li>
              <strong>{`Input: a positive integer. Output: the largest perfect square less than the input.`}</strong>
              {` For each positive integer, exactly one perfect square is the largest one below it. Function.`}
            </li>
          </ul>

          <p>{`The pattern: one valid input must produce one output never two, never several. Two different inputs may share an output (cats and dogs can both map to 3); that does not break the rule.`}</p>

          <h2>{`Evaluating a Function`}</h2>

          <p>{`To evaluate a function, replace the dummy variable everywhere it appears with the input whether the input is a number, a letter, or a whole expression.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>{`Evaluate $f(x) = 2x + 5$.`}</strong>
                {` Find $f(3)$, $f(-4)$, and $f(x^2 + y^2 - z^2)$.`}
              </p>
              <ol className="lrn-list">
                <li>{`Replace $x$ with 3: $f(3) = 2(3) + 5 = 11$.`}</li>
                <li>{`Replace $x$ with $-4$: $f(-4) = 2(-4) + 5 = -3$.`}</li>
                <li>
                  {`Replace $x$ with the whole expression $x^2 + y^2 - z^2$:`}
                  <div className="lrn-eq">{`$$f(x^2 + y^2 - z^2) = 2(x^2 + y^2 - z^2) + 5$$`}</div>
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                <strong>{`Evaluate $f(x) = 3x - 7$.`}</strong>
                {` Find $f(0)$, $f(4)$, and $f(2k)$.`}
              </p>
              <ol className="lrn-list">
                <li>{`$f(0) = 3(0) - 7 = $ ___`}</li>
                <li>{`$f(4) = 3(4) - 7 = $ ___`}</li>
                <li>{`$f(2k) = 3(\\square) - 7 = $ ___`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Given $g(x) = x^2 + 4$, find $g(t + 1)$ in fully simplified form.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why replace $x$ with the entire expression $x^2 + y^2 - z^2$ rather than treating $x^2$, $y^2$, and $z^2$ as three separate substitutions?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The dummy variable $x$ stands for "whatever is inside the parentheses of $f$." The whole expression $x^2 + y^2 - z^2$ is the single input. Splitting it into three pieces would feed three separate inputs into $f$, which is not what the notation says.`}</p>
            </details>
          </div>

          <h2>{`Finding the Domain`}</h2>

          <p>{`Ask: for which inputs does the function produce a real-number output? Two situations remove an input from the domain.`}</p>

          <ul className="lrn-list">
            <li>
              <strong>{`Division by zero.`}</strong>
              {` Any input that makes a denominator zero is excluded.`}
            </li>
            <li>
              <strong>{`Negative inside a square root.`}</strong>
              {` Any input that makes the inside of a square root negative is excluded. Zero inside is fine $\\sqrt{0} = 0$.`}
            </li>
          </ul>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(x) = \\frac{2x - 3}{x + 5}$`}</span>
              <p className="lrn-step-content">{`The denominator is $x + 5$. Solve $x + 5 = 0$: $x = -5$. Exclude that input. Domain: all reals except $-5$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $g(x) = \\sqrt{x^2 - x - 6}$`}</span>
              <p className="lrn-step-content">{`Need $x^2 - x - 6 \\geq 0$. Factor: $(x - 3)(x + 2) \\geq 0$. The product is nonnegative when both factors are nonnegative or both are nonpositive. So $x \\geq 3$ or $x \\leq -2$.`}</p>
            </div>
          </div>

          <h2>{`Finding the Range`}</h2>

          <p>{`The range is every output the function can actually produce. The general method: set $y = f(x)$, then solve for $x$ in terms of $y$. Any value of $y$ that gives no valid $x$ is not in the range.`}</p>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Note</span>
            <p>{`Range is usually trickier than domain because it asks what the function can produce, not just where it is defined.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: Range of $f(x) = \\frac{2x - 3}{x + 5}$`}</span>
              <p className="lrn-step-content">{`Set $y = \\frac{2x - 3}{x + 5}$ and solve for $x$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">{`Multiply both sides by $(x + 5)$: $y(x + 5) = 2x - 3$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">{`Expand and gather: $yx + 5y = 2x - 3$, so $yx - 2x = -3 - 5y$, then $x(y - 2) = -3 - 5y$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3</span>
              <p className="lrn-step-content">{`Divide: $x = \\frac{-3 - 5y}{y - 2}$. This gives a valid $x$ for every $y$ except $y = 2$ (division by zero). Range: all reals except 2.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $y = 2$ fall out of the range?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`At $y = 2$, the equation $x(y - 2) = -3 - 5y$ becomes $0 = -13$ a contradiction. No $x$ produces output 2. The original equation $\\frac{2x - 3}{x + 5} = 2$ leads to $2x - 3 = 2x + 10$, which is also impossible.`}</p>
            </details>
          </div>

          <h2>{`Restricted Domains`}</h2>

          <p>
            {`A `}
            <strong>{`restricted domain`}</strong>
            {` is a deliberate limit on which inputs the function accepts. Limiting the inputs limits the outputs.`}
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $G(x) = 3x - 7$ for $3 \\leq x \\leq 8$`}</span>
              <p className="lrn-step-content">{`$G(3) = 2$ and $G(8) = 17$. Since $G$ is linear and increasing, the range on this restricted domain is $2 \\leq G(x) \\leq 17$.`}</p>
            </div>
          </div>

          <p>{`Restricting a domain is also how you can give a function an inverse when the unrestricted version has none covered later under inverse functions.`}</p>

          <h2>{`Multi-Input Functions`}</h2>

          <p>{`A function can take more than one input. The notation extends naturally: $f(x, y)$ takes two inputs, $G(a, b, c)$ takes three. The dummy variables are listed in a fixed order.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(x, y) = 2xy - x + y$. Find $f(2, 3)$.`}</span>
              <p className="lrn-step-content">{`Replace $x$ with 2 and $y$ with 3: $f(2, 3) = 2(2)(3) - 2 + 3 = 12 - 2 + 3 = 13$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $G(a, b, c) = 2a + 3b - 4ac$. Find $a$ if $G(3, a, 5) = 15$.`}</span>
              <p className="lrn-step-content">{`Match positions: the first dummy slot gets 3, the second gets $a$, the third gets 5. So $G(3, a, 5) = 2(3) + 3a - 4(3)(5) = 6 + 3a - 60 = 3a - 54$. Set $3a - 54 = 15$: $a = 23$.`}</p>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Input order matters</span>
            <p>{`When you evaluate $f(2, 3)$ with $f(x, y) = 2xy - x + y$, the first input goes to the first dummy variable ($x = 2$) and the second to the second ($y = 3$). Reversing the pairing gives a different answer: $f(3, 2) = 2(3)(2) - 3 + 2 = 11$, not 13.`}</p>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Reused variable names are different variables</span>
            <p>{`In $G(3, a, 5)$ with definition $G(a, b, c) = 2a + 3b - 4ac$, the outer $a$ (the input) is a completely different variable from the dummy $a$ in the definition. Substitute by position, not by name. The trap: writing $G(3, a, 5) = 2a + 9 - 20a$ by treating both $a$'s as the same variable. The correct work assigns the first slot to 3 and the third slot to 5.`}</p>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Why the quadratic formula is not a function</span>
            <p>{`The formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives two outputs for most inputs (one with $+$, one with $-$). A function must give exactly one output per input combination. So the quadratic formula is not a valid function of $(a, b, c)$.`}</p>
          </div>

          {/* ═══════════════════════════════════════════════
              SECTION 2: COMBINING FUNCTIONS
          ═══════════════════════════════════════════════ */}
          <h2>{`Combining Functions`}</h2>

          <p>{`Build new functions from old ones with arithmetic:`}</p>

          <ul className="lrn-list">
            <li>
              <strong>{`Sum:`}</strong>
              {` $(f + g)(x) = f(x) + g(x)$`}
            </li>
            <li>
              <strong>{`Difference:`}</strong>
              {` $(f - g)(x) = f(x) - g(x)$`}
            </li>
            <li>
              <strong>{`Product:`}</strong>
              {` $(f \\cdot g)(x) = f(x) \\cdot g(x)$`}
            </li>
            <li>
              <strong>{`Quotient:`}</strong>
              {` $\\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}$, where $g(x) \\neq 0$`}
            </li>
          </ul>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(x) = 3x + 2$, $g(x) = 2x - 9$`}</span>
              <p className="lrn-step-content">{`$(f + g)(x) = (3x + 2) + (2x - 9) = 5x - 7$. $(f \\cdot g)(x) = (3x + 2)(2x - 9) = 6x^2 - 27x + 4x - 18 = 6x^2 - 23x - 18$.`}</p>
            </div>
          </div>

          <p>{`The domain of $f + g$, $f - g$, and $f \\cdot g$ is the overlap (intersection) of the two domains both must be defined at $x$ for the combination to be defined. For $\\frac{f}{g}$, also exclude inputs where $g(x) = 0$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(x) = \\sqrt{x}$, $g(x) = \\sqrt{x^2 - x - 6}$`}</span>
              <p className="lrn-step-content">{`Domain of $f$: $x \\geq 0$. Domain of $g$: $x \\geq 3$ or $x \\leq -2$ (from factoring $x^2 - x - 6 \\geq 0$).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Domain of $f + g$`}</span>
              <p className="lrn-step-content">{`Need $x \\geq 0$ AND ($x \\geq 3$ or $x \\leq -2$). The overlap is $x \\geq 3$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Domain of $\\frac{f}{g}$`}</span>
              <p className="lrn-step-content">{`Same overlap, then exclude where $g(x) = 0$. $g(x) = 0$ at $x = 3$ and $x = -2$. Excluding $x = 3$ from $x \\geq 3$: final domain $x > 3$.`}</p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <p>
              <strong>{`Sum, difference, product, and quotient of functions are functions.`}</strong>
            </p>
            <p>{`Pick any input $a$ in the shared domain. Since $f$ is a function, $f(a)$ has exactly one value. Since $g$ is a function, $g(a)$ has exactly one value. Adding, subtracting, multiplying, or dividing two single real numbers gives one single real number. So $(f + g)(a)$, $(f - g)(a)$, $(f \\cdot g)(a)$, and (when $g(a) \\neq 0$) $(\\frac{f}{g})(a)$ each have exactly one value. Each combination is a function.`}</p>
          </div>

          {/* ═══════════════════════════════════════════════
              SECTION 3: COMPOSITION
          ═══════════════════════════════════════════════ */}
          <h2>{`Composition of Functions`}</h2>

          <p>
            <strong>{`Composition`}</strong>
            {` chains two functions: put $x$ into $g$, then feed the output of $g$ into $f$. Write it $f(g(x))$ or $(f \\circ g)(x)$.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$(f \\circ g)(x) = f(g(x))$$`}</div>

          <div className="lrn-graph">
            <CompositionChainViz />
            <p>{`Input $x$ enters $g$, producing $g(x)$, which then enters $f$, producing $f(g(x))$.`}</p>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Order matters</span>
            <p>{`$f(g(x))$ and $g(f(x))$ are generally different. Swap the order, change the result.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(x) = 2x - 6$, $g(x) = 3x - 9$`}</span>
              <p className="lrn-step-content">{`Compute $f(g(2))$, $g(f(2))$, and $f(g(x))$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$f(g(2))$`}</span>
              <p className="lrn-step-content">{`$g(2) = 3(2) - 9 = -3$. Then $f(-3) = 2(-3) - 6 = -12$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$g(f(2))$`}</span>
              <p className="lrn-step-content">{`$f(2) = 2(2) - 6 = -2$. Then $g(-2) = 3(-2) - 9 = -15$. Different from $f(g(2))$ composition is not commutative.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$f(g(x))$`}</span>
              <p className="lrn-step-content">{`$f(g(x)) = f(3x - 9) = 2(3x - 9) - 6 = 6x - 24$.`}</p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <p>
              <strong>{`The composition of two functions is a function.`}</strong>
            </p>
            <p>{`Pick any input $a$ in the domain of $f \\circ g$. Since $g$ is a function, $g(a)$ has exactly one value call it $b$. Since $f$ is a function and $b$ is in $f$'s domain, $f(b)$ has exactly one value. So $f(g(a))$ has exactly one value. Therefore $f \\circ g$ is a function.`}</p>
          </div>

          <h2>{`Repeated Composition and Fixed Points`}</h2>

          <p>{`$f^2(x)$ means $f(f(x))$ apply $f$ twice. More generally, $f^n(x)$ means apply $f$ exactly $n$ times.`}</p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Notation trap</span>
            <p>
              {`$f^2(x)$ does `}
              <strong>{`NOT`}</strong>
              {` mean $f(x) \\cdot f(x)$. The superscript on a function name means repeated application, not raising the output to a power.`}
            </p>
          </div>

          <p>
            {`A value $x$ where $f(x) = x$ is called a `}
            <strong>{`fixed point`}</strong>
            {` of $f$. Every fixed point automatically satisfies $f^n(x) = x$ for every $n$, because each application returns the input unchanged.`}
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: Solve $f(f(x)) = x$ for $f(x) = 3x + 10$`}</span>
              <p className="lrn-step-content">{`$f(f(x)) = f(3x + 10) = 3(3x + 10) + 10 = 9x + 40$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve</span>
              <p className="lrn-step-content">{`Set $9x + 40 = x$: $8x = -40$, so $x = -5$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check</span>
              <p className="lrn-step-content">{`$f(-5) = 3(-5) + 10 = -5$. So $-5$ is a fixed point of $f$, which is why $f(f(-5)) = -5$ as well.`}</p>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              SECTION 4: INVERSE FUNCTIONS
          ═══════════════════════════════════════════════ */}
          <h2>{`Inverse Functions`}</h2>

          <p>
            {`The `}
            <strong>{`inverse`}</strong>
            {` of $f$, written $f^{-1}$, is the function that undoes $f$. If $f$ maps $a$ to $b$, then $f^{-1}$ maps $b$ back to $a$. Two functions $f$ and $g$ are inverses if and only if both conditions hold:`}
          </p>

          <div className="lrn-eq">{`$$g(f(x)) = x \\quad \\text{for all } x \\text{ in the domain of } f$$`}</div>
          <div className="lrn-eq">{`$$f(g(x)) = x \\quad \\text{for all } x \\text{ in the domain of } g$$`}</div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Notation trap</span>
            <p>
              {`$f^{-1}(x)$ does `}
              <strong>{`NOT`}</strong>
              {` mean $\\frac{1}{f(x)}$. The $-1$ superscript on a function name denotes the inverse, not the reciprocal of the output.`}
            </p>
          </div>

          <h3>{`Verifying inverses`}</h3>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: are $f(x) = 3x - 2$ and $g(x) = \\frac{x + 2}{3}$ inverses?`}</span>
              <p className="lrn-step-content">{`Both directions must give $x$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Check $g(f(x))$`}</span>
              <p className="lrn-step-content">{`$g(f(x)) = g(3x - 2) = \\frac{(3x - 2) + 2}{3} = \\frac{3x}{3} = x$. ✓`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Check $f(g(x))$`}</span>
              <p className="lrn-step-content">{`$f(g(x)) = f\\!\\left(\\frac{x + 2}{3}\\right) = 3 \\cdot \\frac{x + 2}{3} - 2 = (x + 2) - 2 = x$. ✓`}</p>
            </div>
          </div>

          <h3>{`Finding the inverse formula`}</h3>

          <p>{`To find $f^{-1}$, solve the equation $f(g(x)) = x$ for the unknown $g(x)$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: inverse of $f(x) = 2x - 9$`}</span>
              <p className="lrn-step-content">{`Write $f(g(x)) = x$: $2 g(x) - 9 = x$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve</span>
              <p className="lrn-step-content">{`Add 9: $2 g(x) = x + 9$. Divide by 2: $g(x) = \\frac{x + 9}{2}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check</span>
              <p className="lrn-step-content">{`$f(g(x)) = 2 \\cdot \\frac{x + 9}{2} - 9 = (x + 9) - 9 = x$. ✓ So $f^{-1}(x) = \\frac{x + 9}{2}$.`}</p>
            </div>
          </div>

          <h3>{`One inverse value without the full formula`}</h3>

          <p>{`If you only need $f^{-1}(b)$ for one specific $b$, you do not need the full inverse formula. Use the shortcut $f(a) = b \\iff f^{-1}(b) = a$. Find the $x$ such that $f(x) = b$; that $x$ is $f^{-1}(b)$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f$ is the inverse of $g(x) = \\frac{2x - 3}{x + 5}$. Find $f(4)$.`}</span>
              <p className="lrn-step-content">{`Find $x$ with $g(x) = 4$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve</span>
              <p className="lrn-step-content">{`$\\frac{2x - 3}{x + 5} = 4 \\Rightarrow 2x - 3 = 4(x + 5) = 4x + 20 \\Rightarrow -2x = 23 \\Rightarrow x = -\\frac{23}{2}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Conclude</span>
              <p className="lrn-step-content">{`$g(-\\frac{23}{2}) = 4$, so $f(4) = -\\frac{23}{2}$.`}</p>
            </div>
          </div>

          <h2>{`When Inverses Fail`}</h2>

          <p>{`A function has an inverse if and only if it never sends two different inputs to the same output. The moment two inputs share an output, the "undo" machine cannot decide which input to return so no inverse exists.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`$f(x) = x^2$ on all reals`}</span>
              <p className="lrn-step-content">{`$f(2) = 4$ and $f(-2) = 4$. Two inputs share one output. No inverse.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$h(x) = x^2$ on $x \\geq 0$`}</span>
              <p className="lrn-step-content">{`Every output now comes from exactly one nonnegative input. Inverse: $h^{-1}(x) = \\sqrt{x}$.`}</p>
            </div>
          </div>

          <p>{`Restricting the domain is a standard trick: it turns a non-invertible rule into an invertible one.`}</p>

          <p>
            <strong>{`Inverse uniqueness:`}</strong>
            {` if a function has an inverse, it has exactly one. The reversal of each mapping is forced input $a$ maps to output $b$, so the inverse must map $b$ back to $a$. No other option exists.`}
          </p>

          {/* ═══════════════════════════════════════════════
              SECTION 5: FUNCTIONAL EQUATIONS
          ═══════════════════════════════════════════════ */}
          <h2>{`Functional Equations`}</h2>

          <p>
            {`A `}
            <strong>{`functional equation`}</strong>
            {` is an equation that defines $f$ at an expression of $x$, not directly at $x$. Example: $f(x - 3) = 9x^2 + 2$. The whole expression $x - 3$ is the input to $f$.`}
          </p>

          <div className="lrn-callout lrn-danger">
            <span className="lrn-callout-label">The bogus solution</span>
            <p>
              {`$f(x - 3)$ does `}
              <strong>{`NOT`}</strong>
              {` equal $f(x) - 3$. To find $f(5)$, never substitute $x = 5$ directly into the right-hand side. That computes $f(5 - 3) = f(2)$, not $f(5)$. Always make the expression inside $f$ equal the target.`}
            </p>
          </div>

          <h3>{`Method 1: direct substitution`}</h3>

          <p>{`Set the expression inside $f$ equal to the target value. Solve for the variable. Substitute that value into the right-hand side.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(x - 3) = 9x^2 + 2$. Find $f(5)$.`}</span>
              <p className="lrn-step-content">{`Set $x - 3 = 5$: $x = 8$. Substitute: $f(5) = 9(8)^2 + 2 = 576 + 2 = 578$.`}</p>
            </div>
          </div>

          <h3>{`Method 2: rewrite f explicitly`}</h3>

          <p>{`Introduce a new variable for the input. Let $u$ equal the expression inside $f$; express the original variable in terms of $u$; substitute. The result is an explicit formula for $f(u)$, which you can rename to $f(x)$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Same problem, Method 2: $f(x - 3) = 9x^2 + 2$, find $f(x)$`}</span>
              <p className="lrn-step-content">{`Let $u = x - 3$, so $x = u + 3$. Substitute into the right side: $f(u) = 9(u + 3)^2 + 2$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check by computing $f(5)$</span>
              <p className="lrn-step-content">{`$f(5) = 9(5 + 3)^2 + 2 = 9(64) + 2 = 578$. Same answer as Method 1.`}</p>
            </div>
          </div>

          <p>{`Method 1 is faster for a single value. Method 2 gives the full formula and is better when you need many values or symbolic manipulation.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does substituting $x = 5$ into $9x^2 + 2$ give $f(2)$ instead of $f(5)$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The formula $9x^2 + 2$ is the output of $f$ when its input is $x - 3$. At $x = 5$, the input is $5 - 3 = 2$. So substituting $x = 5$ computes $f(2)$. To compute $f(5)$, you need $x - 3 = 5$, which requires $x = 8$.`}</p>
            </details>
          </div>

          <h2>{`Experimentation and Working Backwards`}</h2>

          <p>{`When a functional equation describes a property rather than an explicit formula, find $f$ at specific values by chaining the property from known cases.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(m) + f(n) = f(mn)$, $f(2) = 7$, $f(3) = 10$. Find $f(12)$.`}</span>
              <p className="lrn-step-content">{`Build 12 from 2 and 3.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">{`$12 = 2 \\cdot 6$, so $f(12) = f(2) + f(6)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">{`Need $f(6)$. $6 = 2 \\cdot 3$, so $f(6) = f(2) + f(3) = 17$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Combine</span>
              <p className="lrn-step-content">{`$f(12) = 7 + 17 = 24$.`}</p>
            </div>
          </div>

          <p>{`For large or distant targets, find a partner that pairs into the property, then work backwards through smaller values until you hit a known case.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(a) + f(b) = n^2$ whenever $a + b = 2^n$. Find $f(2002)$.`}</span>
              <p className="lrn-step-content">{`Find pairs summing to a power of 2.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">{`$2002 + 46 = 2048 = 2^{11}$, so $f(2002) + f(46) = 121$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">{`$46 + 18 = 64 = 2^6$, so $f(46) + f(18) = 36$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3</span>
              <p className="lrn-step-content">{`$18 + 14 = 32 = 2^5$, so $f(18) + f(14) = 25$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4</span>
              <p className="lrn-step-content">{`$14 + 2 = 16 = 2^4$, so $f(14) + f(2) = 16$. Also $2 + 2 = 4 = 2^2$, so $2 f(2) = 4$, giving $f(2) = 2$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Chain back</span>
              <p className="lrn-step-content">{`$f(14) = 14$. Then $f(18) = 25 - 14 = 11$. Then $f(46) = 36 - 11 = 25$. Then $f(2002) = 121 - 25 = 96$.`}</p>
            </div>
          </div>

          <h2>{`Word Problems with Functions`}</h2>

          <p>{`Functions organize information in word problems. Name each changing quantity as a function of its driving variable, then do algebra on the names.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: Daesun counts up by 4 from 100. Andrew counts down by 3 from 800. Both start at the same moment. After how many steps does Daesun's count first exceed twice Andrew's?`}</span>
              <p className="lrn-step-content">{`$D(x) = 100 + 4x$, $A(x) = 800 - 3x$. Solve $D(x) > 2 A(x)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve</span>
              <p className="lrn-step-content">{`$100 + 4x > 2(800 - 3x) = 1600 - 6x \\Rightarrow 10x > 1500 \\Rightarrow x > 150$. First integer above 150: $x = 151$.`}</p>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              SECTION 6: OPERATIONS
          ═══════════════════════════════════════════════ */}
          <h2>{`Operations (Custom Symbols)`}</h2>

          <p>
            {`An `}
            <strong>{`operation`}</strong>
            {` is a function of two inputs written with a custom symbol $\\star$, $\\#$, $\\diamond$, anything. $x \\star y$ is just $f(x, y)$ with new notation. Evaluate the same way: substitute the two inputs into the defining formula, respecting position.`}
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $x \\star y = (x + y)(x - y)$. Compute $3 \\star (4 \\star 5)$.`}</span>
              <p className="lrn-step-content">{`Inner first: $4 \\star 5 = (9)(-1) = -9$. Then $3 \\star (-9) = (3 + (-9))(3 - (-9)) = (-6)(12) = -72$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $a \\# b = ab - a + b - 8$. Solve $x \\# 3 = 37$.`}</span>
              <p className="lrn-step-content">{`Substitute $b = 3$: $x \\# 3 = 3x - x + 3 - 8 = 2x - 5$. Set $2x - 5 = 37$: $x = 21$.`}</p>
            </div>
          </div>

          <p>
            <strong>{`Commutative operations.`}</strong>
            {` An operation is `}
            <strong>{`commutative`}</strong>
            {` if $x \\star y = y \\star x$ for all valid inputs. Regular addition and multiplication are commutative; subtraction and division are not. To check, compute $x \\star y$ and $y \\star x$ symbolically and compare.`}
          </p>

          {/* ═══════════════════════════════════════════════
              SECTION 7: GRAPHING FUNCTIONS
          ═══════════════════════════════════════════════ */}
          <h2>{`Graphing Functions`}</h2>

          <p>
            {`The `}
            <strong>{`graph of $f$`}</strong>
            {` is the set of all points $(x, y)$ with $y = f(x)$. The point $(a, b)$ is on the graph if and only if $f(a) = b$.`}
          </p>

          <div className="lrn-graph">
            <GraphPointViz />
            <p>{`The point $(3, 7)$ on the graph encodes $f(3) = 7$.`}</p>
          </div>

          <p>{`To find intercepts:`}</p>

          <ul className="lrn-list">
            <li>
              <strong>{`x-intercepts:`}</strong>
              {` solve $f(x) = 0$. These are where the graph crosses the x-axis.`}
            </li>
            <li>
              <strong>{`y-intercept:`}</strong>
              {` evaluate $f(0)$. The graph crosses the y-axis at $(0, f(0))$ if 0 is in the domain.`}
            </li>
          </ul>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: Graph $f(x) = x^2 - 5x + 6$`}</span>
              <p className="lrn-step-content">{`x-intercepts: set $f(x) = 0$ and factor $(x - 2)(x - 3) = 0$, so $x = 2$ and $x = 3$. y-intercept: $f(0) = 6$.`}</p>
            </div>
          </div>

          <div className="lrn-graph">
            <ParabolaViz />
            <p>{`The parabola $f(x) = x^2 - 5x + 6$ with x-intercepts $(2, 0)$ and $(3, 0)$, and y-intercept $(0, 6)$.`}</p>
          </div>

          <p>{`Reading values from a graph: locate $x = a$ on the horizontal axis, move to the curve, read the y-coordinate. That y-value is $f(a)$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: From a graph, $f(3) = 1$, $f(1) = -1$, $f(-1) = 0$. Find $f(f(f(3)))$.`}</span>
              <p className="lrn-step-content">{`Work inside out: $f(3) = 1$, then $f(1) = -1$, then $f(-1) = 0$. So $f(f(f(3))) = 0$.`}</p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <p>
              <strong>{`A function has at most one y-intercept.`}</strong>
            </p>
            <p>{`The y-intercept is where $x = 0$. Since $f$ is a function, $f(0)$ has at most one value. So there is at most one y-intercept, namely $(0, f(0))$. If 0 is not in the domain, there is no y-intercept.`}</p>
          </div>

          <h2>{`The Vertical Line Test`}</h2>

          <p>
            {`The `}
            <strong>{`vertical line test`}</strong>
            {` says: a graph represents a function if and only if every vertical line passes through at most one point on the graph.`}
          </p>

          <p>{`Each vertical line $x = a$ represents the single input $a$. If it crosses the graph twice, the input $a$ produces two outputs not a function. One crossing means one output. So the test is just a visual restatement of the "one output per input" rule.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Apply the test to four shapes</span>
              <p className="lrn-step-content">{`A circle, an upward parabola, a horizontal line, and a cubic.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Circle</span>
              <p className="lrn-step-content">{`The vertical line $x = 0$ passes through $(0, r)$ and $(0, -r)$. Two outputs for one input. Not a function.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Upward parabola</span>
              <p className="lrn-step-content">{`Every vertical line hits exactly one point. Function. Domain: all reals. Range: $y \\geq$ vertex value.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Horizontal line $y = c$`}</span>
              <p className="lrn-step-content">{`Every vertical line hits one point. Function. Domain: all reals. Range: $\\{c\\}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Cubic $y = x^3$`}</span>
              <p className="lrn-step-content">{`Every vertical line hits one point. Function.`}</p>
            </div>
          </div>

          <h2>{`Counting Solutions with Graphs`}</h2>

          <p>{`When an equation is algebraically hard, count its real solutions visually. Rewrite $A(x) = B(x)$ as "how many points do $y = A(x)$ and $y = B(x)$ share?" Each intersection is one real solution.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: How many real solutions does $x^6 = 2x + 3$ have?`}</span>
              <p className="lrn-step-content">{`Count intersections of $y = x^6$ and $y = 2x + 3$. The U-shaped curve $y = x^6$ and the line $y = 2x + 3$ cross at two points. So the equation has two real solutions.`}</p>
            </div>
          </div>

          <div className="lrn-graph">
            <IntersectionViz />
            <p>{`The line $y = 2x + 3$ crosses the curve $y = x^6$ at two points two real solutions.`}</p>
          </div>

          {/* ═══════════════════════════════════════════════
              SECTION 8: TRANSFORMATIONS
          ═══════════════════════════════════════════════ */}
          <h2>{`Transformations of Functions`}</h2>

          <p>{`A transformation changes the input or output of $f$ in a way that moves or rescales its graph predictably. Four basic types plus their negatives cover everything.`}</p>

          <h3>{`Vertical shift: $y = f(x) + k$`}</h3>

          <p>{`Adds $k$ to every output. The graph shifts up by $k$ (down if $k < 0$). Each point $(a, b)$ becomes $(a, b + k)$ x stays put, y moves.`}</p>

          <h3>{`Horizontal shift: $y = f(x + k)$`}</h3>

          <p>{`Adds $k$ to every input. The graph shifts LEFT by $k$ for positive $k$, and right for negative $k$. The direction is opposite to the sign this is the most common transformation mistake.`}</p>

          <p>{`Why left: the point $(a, b)$ on $y = f(x)$ corresponds to the input $a$. On $y = f(x + k)$, we need $x + k = a$, so $x = a - k$. The point appears at $x = a - k$, which is $k$ units to the left of $a$.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$y = f(x) + k$`}</span>
              <p>{`Add to OUTPUT. Shifts graph UP by $k$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$y = f(x + k)$`}</span>
              <p>{`Add to INPUT. Shifts graph LEFT by $k$ opposite of the sign.`}</p>
            </div>
          </div>

          <h3>{`Vertical scaling: $y = k f(x)$`}</h3>

          <p>{`Multiplies every output by $k$. Each point $(a, b)$ becomes $(a, k b)$.`}</p>

          <ul className="lrn-list">
            <li>{`$k > 1$: stretches away from the x-axis.`}</li>
            <li>{`$0 < k < 1$: compresses toward the x-axis.`}</li>
            <li>{`$k = -1$: $y = -f(x)$ reflects over the x-axis. Negative $k$ generally combines a reflection with a scale.`}</li>
          </ul>

          <div className="lrn-graph">
            <VerticalScaleViz />
            <p>{`Original $f(x)$, stretched $2 f(x)$, and reflected $-f(x)$.`}</p>
          </div>

          <h3>{`Horizontal scaling: $y = f(k x)$`}</h3>

          <p>{`Replaces the input with $k x$. The point $(a, b)$ on $f$ moves to where $k x = a$, giving $x = \\frac{a}{k}$. So x-coordinates DIVIDE by $k$.`}</p>

          <ul className="lrn-list">
            <li>{`$k > 1$: compresses horizontally (narrower).`}</li>
            <li>{`$0 < k < 1$: stretches horizontally (wider).`}</li>
            <li>{`$k = -1$: $y = f(-x)$ reflects over the y-axis.`}</li>
          </ul>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Counterintuitive direction</span>
            <p>{`A factor of $k > 1$ in the input COMPRESSES, not stretches. The scale factor on the graph is $\\frac{1}{k}$, not $k$. Same flip happens with horizontal shifts: input changes act opposite to what you might expect.`}</p>
          </div>

          <div className="lrn-graph">
            <HorizontalScaleViz />
            <p>{`Original $\\sin(x)$, compressed $\\sin(2x)$, and reflected $\\sin(-x)$.`}</p>
          </div>

          <h2>{`Applying Transformations to Known Points`}</h2>

          <p>{`If you know a point on $f$, you can place its image on a transformed graph without redrawing anything. Use the transformation rule on the coordinates.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $q(3) = 14$. Find a point on each transformed graph.`}</span>
              <p className="lrn-step-content">{`Start with the point $(3, 14)$ on $y = q(x)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$y = 5 q(x)$`}</span>
              <p className="lrn-step-content">{`Multiply y-coordinate by 5: $(3, 70)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$y = q(x) + 5$`}</span>
              <p className="lrn-step-content">{`Add 5 to y-coordinate: $(3, 19)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$y = q(x + 5)$`}</span>
              <p className="lrn-step-content">{`Shift left 5: $(3 - 5, 14) = (-2, 14)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$y = q(\\frac{x}{5})$`}</span>
              <p className="lrn-step-content">{`Need $\\frac{x}{5} = 3$, so $x = 15$: $(15, 14)$.`}</p>
            </div>
          </div>

          <p>{`For multi-step transformations, factor the input first to separate the horizontal scale from the horizontal shift. The factored form $k(x - h)$ makes the scale $k$ and the shift $h$ readable.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>{`Sketch $y = f(2x - 1) + 3$ from the graph of $y = f(x)$.`}</strong>
              </p>
              <p>{`Factor the input: $2x - 1 = 2(x - \\frac{1}{2})$. Apply in order:`}</p>
              <ol className="lrn-list">
                <li>{`Horizontal compression by 2: $y = f(2x)$ (x-coordinates halve).`}</li>
                <li>{`Horizontal shift right by $\\frac{1}{2}$: $y = f(2(x - \\frac{1}{2})) = f(2x - 1)$.`}</li>
                <li>{`Vertical shift up 3: $y = f(2x - 1) + 3$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                <strong>{`Sketch $y = g(3x + 2) - 1$ from $y = g(x)$.`}</strong>
              </p>
              <ol className="lrn-list">
                <li>{`Factor $3x + 2 = 3(x + \\frac{2}{3})$.`}</li>
                <li>{`Horizontal compression by ___ to get $y = g(3x)$.`}</li>
                <li>{`Horizontal shift ___ by $\\frac{2}{3}$ to get $y = g(3x + 2)$.`}</li>
                <li>{`Vertical shift ___ by 1 to get $y = g(3x + 2) - 1$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Given the point $(4, 6)$ on $y = h(x)$, find the corresponding point on $y = 2 h(3x - 6) + 1$.`}</p>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              SECTION 9: INVERSE FUNCTIONS ON A GRAPH
          ═══════════════════════════════════════════════ */}
          <h2>{`Inverse Functions on a Graph`}</h2>

          <p>{`The graph of $f^{-1}$ is the reflection of the graph of $f$ over the line $y = x$. Every point $(a, b)$ on $f$ corresponds to the point $(b, a)$ on $f^{-1}$: the coordinates swap.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <p>{`If $(a, b)$ is on $y = f(x)$, then $b = f(a)$. By definition of inverse, $f^{-1}(b) = a$, so $(b, a)$ is on $y = f^{-1}(x)$. Reflecting $(a, b)$ over $y = x$ gives $(b, a)$ the coordinates swap. So the graph of $f^{-1}$ is exactly the reflection of $f$ over $y = x$.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: Three points on $f$: $(1, 2)$, $(3, -4)$, $(5, 0)$. Find three points on $f^{-1}$.`}</span>
              <p className="lrn-step-content">{`Swap each pair: $(2, 1)$, $(-4, 3)$, $(0, 5)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(x) = 4x - 3$. Find $f^{-1}(x)$ and describe both graphs.`}</span>
              <p className="lrn-step-content">{`Solve $4 g(x) - 3 = x$: $g(x) = \\frac{x + 3}{4}$. So $f^{-1}(x) = \\frac{x + 3}{4}$. $f$ has slope 4, y-intercept $-3$. $f^{-1}$ has slope $\\frac{1}{4}$, y-intercept $\\frac{3}{4}$. Slopes are reciprocals because reflection over $y = x$ swaps rise and run.`}</p>
            </div>
          </div>

          <div className="lrn-graph">
            <InverseGraphViz />
            <p>{`$f(x) = 4x - 3$ and $f^{-1}(x) = \\frac{x + 3}{4}$ as mirror images over the dashed line $y = x$.`}</p>
          </div>

          <h2>{`The Horizontal Line Test`}</h2>

          <p>{`A function has an inverse if and only if no horizontal line passes through two or more points on its graph.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <p>{`Suppose $f$ has an inverse. If two points $(a, c)$ and $(b, c)$ with $a \\neq b$ were both on the graph, then $f(a) = c$ and $f(b) = c$ two inputs map to the same output. The inverse cannot decide which one to return. So no horizontal line can hit the graph twice.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Vertical line test</span>
              <p>{`Asks: is this graph a function? Fails when one vertical line hits 2+ points one input gives two outputs.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Horizontal line test</span>
              <p>{`Asks: does this function have an inverse? Fails when one horizontal line hits 2+ points two inputs share an output.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Both tests look identical visually. What is the precise difference between what they check?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The vertical line test checks the input direction: each $x$-value (input) must produce only one $y$-value (output). The horizontal line test checks the output direction: each $y$-value must come from only one $x$-value. Same picture, different axis, different requirement. A graph can pass the vertical test (be a function) and still fail the horizontal test (have no inverse) the parabola $y = x^2$ is the standard example.`}</p>
            </details>
          </div>

          {/* ═══════════════════════════════════════════════
              SECTION 10: COMPLEX FUNCTIONS AND MANDELBROT
          ═══════════════════════════════════════════════ */}
          <h2>{`Extra: Complex Functions and the Mandelbrot Set`}</h2>

          <p>{`Functions are not restricted to real-number inputs and outputs. A complex function accepts complex numbers numbers of the form $a + bi$ where $i = \\sqrt{-1}$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $g(z) = 3iz + 2i$`}</span>
              <p className="lrn-step-content">{`$g(2) = 3i(2) + 2i = 6i + 2i = 8i$. $g(5 - 2i) = 3i(5 - 2i) + 2i = 15i - 6i^2 + 2i = 15i + 6 + 2i = 6 + 17i$.`}</p>
            </div>
          </div>

          <p>{`The Mandelbrot set is built by repeated composition of one such function. Fix a complex number $c$, define $f_c(z) = z^2 + c$, and iterate starting from $z_0 = 0$: $z_1 = f_c(0) = c$, $z_2 = f_c(c) = c^2 + c$, and so on. The $n$-th iterate is $f_c^n(0)$.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Mandelbrot Set</span>
            <div className="lrn-definition-desc">
              <p>{`The set of complex numbers $c$ for which the sequence $f_c^n(0)$ stays bounded as $n \\to \\infty$. The notation $f_c^n$ is the same repeated-composition idea as $f^n(x)$: apply $f_c$ exactly $n$ times.`}</p>
            </div>
          </div>

          <p>
            <strong>{`Coloring rule:`}</strong>
            {` if the sequence stays bounded, $c$ is in the set (black). If it escapes to infinity, $c$ is outside, colored by how fast the iterates grow.`}
          </p>

          <figure className="lrn-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Mandel_zoom_00_mandelbrot_set.jpg"
              alt="The Mandelbrot set a black fractal shape on a colored background showing complex iteration"
            />
            <figcaption>
              {`The Mandelbrot set. Black region: bounded orbits under repeated composition of $f_c(z) = z^2 + c$. Colors show escape speed. `}
              <a
                href="https://commons.wikimedia.org/wiki/File:Mandel_zoom_00_mandelbrot_set.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wolfgang Beyer, CC BY-SA 3.0
              </a>
            </figcaption>
          </figure>
        </>
      ]
    },

    practice: PRACTICE_CARDS,

    reference: {
      category: 'Quick Reference',
      title: 'Functions',
      sections: [
        <>
          <h2>{`Core Definitions`}</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Function</span>
            <div className="lrn-definition-desc">
              <p>{`Rule assigning exactly one output to each valid input. Written $f(x)$ "f of x." Parentheses mean input, not multiplication.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Domain</span>
            <div className="lrn-definition-desc">
              <p>{`All $x$ where $f(x)$ is defined.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Range</span>
            <div className="lrn-definition-desc">
              <p>{`All $y$ that $f$ can output. Find by solving $y = f(x)$ for $x$.`}</p>
            </div>
          </div>

          <h2>{`Function Evaluation`}</h2>

          <p>{`Substitute the full input for the dummy variable everywhere it appears.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Input</th>
                <th>{`Rule: $f(x) = 2x + 5$`}</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>{`$2(3) + 5$`}</td>
                <td>11</td>
              </tr>
              <tr>
                <td>{`$-4$`}</td>
                <td>{`$2(-4) + 5$`}</td>
                <td>{`$-3$`}</td>
              </tr>
              <tr>
                <td>{`$x^2 + y^2 - z^2$`}</td>
                <td>{`$2(x^2 + y^2 - z^2) + 5$`}</td>
                <td>{`$2x^2 + 2y^2 - 2z^2 + 5$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>{`Finding the Domain`}</h2>

          <ul className="lrn-list">
            <li>
              <strong>{`Exclude division by zero:`}</strong>
              {` set denominator $= 0$, exclude those $x$.`}
            </li>
            <li>
              <strong>{`Exclude negative square roots:`}</strong>
              {` set inside of $\\sqrt{\\phantom{x}} \\geq 0$, solve.`}
            </li>
          </ul>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>Restriction</th>
                <th>Domain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\frac{1}{x + 5}$`}</td>
                <td>{`$x + 5 \\neq 0$`}</td>
                <td>{`all reals except $-5$`}</td>
              </tr>
              <tr>
                <td>{`$\\sqrt{x}$`}</td>
                <td>{`$x \\geq 0$`}</td>
                <td>{`$[0, \\infty)$`}</td>
              </tr>
              <tr>
                <td>{`$\\sqrt{x^2 - x - 6}$`}</td>
                <td>{`$(x-3)(x+2) \\geq 0$`}</td>
                <td>{`$x \\geq 3$ or $x \\leq -2$`}</td>
              </tr>
              <tr>
                <td>{`$\\frac{2x - 3}{x + 5}$`}</td>
                <td>{`$x \\neq -5$`}</td>
                <td>{`all reals except $-5$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>{`Finding the Range`}</h2>

          <p>{`Set $y = f(x)$, solve for $x$ in terms of $y$. Values of $y$ with no valid $x$ are not in the range.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>Solve for x</th>
                <th>Excluded y</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\frac{2x - 3}{x + 5}$`}</td>
                <td>{`$x = \\frac{-3 - 5y}{y - 2}$`}</td>
                <td>{`$y = 2$`}</td>
                <td>{`all reals except 2`}</td>
              </tr>
              <tr>
                <td>{`$2x^2 - 5$`}</td>
                <td>{`$x = \\pm\\sqrt{\\frac{y+5}{2}}$`}</td>
                <td>{`$y < -5$`}</td>
                <td>{`$y \\geq -5$`}</td>
              </tr>
              <tr>
                <td>{`$\\sqrt{x}$`}</td>
                <td>{`$x = y^2$`}</td>
                <td>{`$y < 0$`}</td>
                <td>{`$y \\geq 0$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>{`Combining Functions`}</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Operation</th>
                <th>Formula</th>
                <th>Domain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$f + g$`}</td>
                <td>{`$f(x) + g(x)$`}</td>
                <td>{`domain($f$) $\\cap$ domain($g$)`}</td>
              </tr>
              <tr>
                <td>{`$f - g$`}</td>
                <td>{`$f(x) - g(x)$`}</td>
                <td>{`domain($f$) $\\cap$ domain($g$)`}</td>
              </tr>
              <tr>
                <td>{`$f \\cdot g$`}</td>
                <td>{`$f(x) \\cdot g(x)$`}</td>
                <td>{`domain($f$) $\\cap$ domain($g$)`}</td>
              </tr>
              <tr>
                <td>{`$\\frac{f}{g}$`}</td>
                <td>{`$\\frac{f(x)}{g(x)}$`}</td>
                <td>{`domain($f$) $\\cap$ domain($g$), exclude $g(x) = 0$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>{`Composition`}</h2>

          <div className="lrn-eq lrn-eq-hero">{`$$(f \\circ g)(x) = f(g(x))$$`}</div>

          <div className="lrn-graph">
            <CompositionChainViz height={110} />
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Notation</th>
                <th>Meaning</th>
                <th>Common error</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$f(g(x))$`}</td>
                <td>{`apply $g$ first, then $f$`}</td>
                <td>{`confusing with $g(f(x))$ order reversed`}</td>
              </tr>
              <tr>
                <td>{`$f^2(x)$`}</td>
                <td>{`$f(f(x))$`}</td>
                <td>{`NOT $f(x) \\cdot f(x)$`}</td>
              </tr>
              <tr>
                <td>{`$f^n(x)$`}</td>
                <td>{`$f$ applied $n$ times`}</td>
                <td>{`NOT $f(x)$ raised to the $n$`}</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Key</span>
            <p>{`$f(g(x))$ and $g(f(x))$ are generally NOT equal composition order matters.`}</p>
          </div>

          <h2>{`Inverse Functions`}</h2>

          <p>
            <strong>{`Definition:`}</strong>
            {` $g(f(x)) = x$ for all $x$ in the domain of $f$, AND $f(g(x)) = x$ for all $x$ in the domain of $g$.`}
          </p>

          <p>
            <strong>{`Finding the inverse:`}</strong>
            {` solve $f(g(x)) = x$ for $g(x)$.`}
          </p>

          <p>
            <strong>{`One inverse value:`}</strong>
            {` if $f(a) = b$, then $f^{-1}(b) = a$.`}
          </p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$f(x)$`}</th>
                <th>{`$f^{-1}(x)$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$2x - 9$`}</td>
                <td>{`$\\frac{x + 9}{2}$`}</td>
              </tr>
              <tr>
                <td>{`$4x - 3$`}</td>
                <td>{`$\\frac{x + 3}{4}$`}</td>
              </tr>
              <tr>
                <td>{`$\\frac{2x - 3}{x + 5}$`}</td>
                <td>{`$\\frac{-3 - 5x}{x - 2}$`}</td>
              </tr>
              <tr>
                <td>{`$x^3$`}</td>
                <td>{`$x^{\\tfrac{1}{3}}$`}</td>
              </tr>
              <tr>
                <td>{`$x^2$ ($x \\geq 0$ only)`}</td>
                <td>{`$\\sqrt{x}$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>{`When Inverses Exist`}</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>Has inverse?</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$f(x) = 2x - 9$`}</td>
                <td>Yes</td>
                <td>Every output from exactly one input</td>
              </tr>
              <tr>
                <td>{`$f(x) = x^2$ (all reals)`}</td>
                <td>No</td>
                <td>{`$f(2) = f(-2) = 4$`}</td>
              </tr>
              <tr>
                <td>{`$h(x) = x^2$ ($x \\geq 0$)`}</td>
                <td>Yes</td>
                <td>Restricted domain removes ambiguity</td>
              </tr>
              <tr>
                <td>{`$f(x) = x^2 + bx + c$`}</td>
                <td>No (in general)</td>
                <td>Parabola fails horizontal line test</td>
              </tr>
            </tbody>
          </table>

          <h2>{`Functional Equations`}</h2>

          <p>
            <strong>{`Direct substitution:`}</strong>
            {` set the expression inside $f$ equal to the target value; solve for the variable; substitute.`}
          </p>
          <p>
            <strong>{`Variable rewrite:`}</strong>
            {` let $u =$ the expression inside $f$; express the original variable in terms of $u$; substitute to get an explicit $f(u)$.`}
          </p>

          <div className="lrn-callout lrn-danger">
            <span className="lrn-callout-label">Bogus solution warning</span>
            <p>{`NEVER substitute $x =$ target directly. Always first find the $x$ that makes the expression equal the target.`}</p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Given</th>
                <th>Target</th>
                <th>Correct x</th>
                <th>f(target)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$f(x - 3) = 9x^2 + 2$`}</td>
                <td>{`$f(5)$`}</td>
                <td>{`$x - 3 = 5,\\; x = 8$`}</td>
                <td>{`$9(64) + 2 = 578$`}</td>
              </tr>
              <tr>
                <td>{`$g(f(x)) = 2x^3 - 3x + 5,\\; f(x) = 3 - 2x$`}</td>
                <td>{`$g(7)$`}</td>
                <td>{`$f(x) = 7,\\; x = -2$`}</td>
                <td>{`$2(-8) - 3(-2) + 5 = -5$`}</td>
              </tr>
            </tbody>
          </table>

          <h2>{`Graphing Functions`}</h2>

          <ul className="lrn-list">
            <li>
              <strong>{`Point on graph:`}</strong>
              {` $(a, f(a))$ is on $y = f(x)$.`}
            </li>
            <li>
              <strong>{`x-intercepts:`}</strong>
              {` set $f(x) = 0$ and solve.`}
            </li>
            <li>
              <strong>{`y-intercept:`}</strong>
              {` evaluate $f(0)$. A function has at most one y-intercept.`}
            </li>
          </ul>

          <div className="lrn-graph">
            <ParabolaViz height={200} showVertex />
            <p>{`The parabola $f(x) = x^2 - 5x + 6$ with labeled intercepts.`}</p>
          </div>

          <h2>{`Line Tests`}</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Test</th>
                <th>What it checks</th>
                <th>Passes when</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vertical line test</td>
                <td>Is this graph a function?</td>
                <td>{`Every vertical line hits $\\leq 1$ point`}</td>
              </tr>
              <tr>
                <td>Horizontal line test</td>
                <td>Does this function have an inverse?</td>
                <td>{`Every horizontal line hits $\\leq 1$ point`}</td>
              </tr>
            </tbody>
          </table>

          <h2>{`Transformations`}</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Transformation</th>
                <th>Formula</th>
                <th>{`Point $(a, b)$ becomes`}</th>
                <th>Direction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Vertical shift up $k$`}</td>
                <td>{`$y = f(x) + k$`}</td>
                <td>{`$(a, b + k)$`}</td>
                <td>up</td>
              </tr>
              <tr>
                <td>{`Horizontal shift left $k$`}</td>
                <td>{`$y = f(x + k)$`}</td>
                <td>{`$(a - k, b)$`}</td>
                <td>left</td>
              </tr>
              <tr>
                <td>{`Vertical scale by $k$`}</td>
                <td>{`$y = k f(x)$`}</td>
                <td>{`$(a, k b)$`}</td>
                <td>y stretches/compresses</td>
              </tr>
              <tr>
                <td>{`Horizontal scale by $\\frac{1}{k}$`}</td>
                <td>{`$y = f(k x)$`}</td>
                <td>{`$(\\frac{a}{k}, b)$`}</td>
                <td>x compresses/stretches</td>
              </tr>
              <tr>
                <td>Reflect over x-axis</td>
                <td>{`$y = -f(x)$`}</td>
                <td>{`$(a, -b)$`}</td>
                <td>vertical flip</td>
              </tr>
              <tr>
                <td>Reflect over y-axis</td>
                <td>{`$y = f(-x)$`}</td>
                <td>{`$(-a, b)$`}</td>
                <td>horizontal flip</td>
              </tr>
            </tbody>
          </table>

          <h2>{`Inverse Function Graph`}</h2>

          <p>{`The graph of $f^{-1}$ is the reflection of $f$ over the line $y = x$. Every point $(a, b)$ on $f$ becomes $(b, a)$ on $f^{-1}$.`}</p>

          <div className="lrn-graph">
            <RefInverseViz />
            <p>{`$f$ and $f^{-1}$ as reflections over the dashed line $y = x$.`}</p>
          </div>

          <h2>{`Operations (Custom Symbols)`}</h2>

          <p>{`Treat $x \\star y = $ formula as $f(x, y) = $ formula. Substitute both inputs in order.`}</p>

          <p>
            <strong>{`Commutativity check:`}</strong>
            {` is $x \\star y = y \\star x$ for all valid inputs?`}
          </p>

          <h2>{`Key Warnings`}</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Notation</th>
                <th>Correct meaning</th>
                <th>Common mistake</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$f^{-1}(x)$`}</td>
                <td>{`Inverse function of $f$`}</td>
                <td>{`$\\frac{1}{f(x)}$ (reciprocal)`}</td>
              </tr>
              <tr>
                <td>{`$f^2(x)$`}</td>
                <td>{`$f(f(x))$`}</td>
                <td>{`$f(x)^2$ (square of output)`}</td>
              </tr>
              <tr>
                <td>{`$f(x - 3)$`}</td>
                <td>{`Apply $f$ to input $(x - 3)$`}</td>
                <td>{`$f(x) - 3$`}</td>
              </tr>
              <tr>
                <td>{`$y = f(x + k)$, $k > 0$`}</td>
                <td>{`Shift LEFT by $k$`}</td>
                <td>{`Shift right by $k$`}</td>
              </tr>
              <tr>
                <td>{`$y = f(k x)$, $k > 1$`}</td>
                <td>{`Horizontal COMPRESSION by $k$`}</td>
                <td>{`Horizontal stretch by $k$`}</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
  }

  return config
}

export default function Functions() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
