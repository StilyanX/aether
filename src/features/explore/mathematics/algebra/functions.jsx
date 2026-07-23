import { LearningTemplate } from '../../../../components/learning/learning-template'
import { VizFigure } from '../../../../components/viz-figure'
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
    a: `A function is a rule where each valid input gives exactly one output. Example: $f(x) = 2x + 3$. Every number you put in gives exactly one number out. Non-example: the rule "input a positive number, output its square roots." Input 4 gives both 2 and −2, so two outputs, not one.`
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
    a: `Range: $y \\geq -5$. Set $y = 2x^2 - 5$; rearrange to $x^2 = \\frac{y + 5}{2}$; take square roots to get $x = \\pm\\sqrt{(y+5)/2}$. A real $x$ exists only when $\\frac{y+5}{2} \\geq 0$, so $y \\geq -5$. Is $-7$ in the range? $-7 < -5$, so no. Direct check: $2x^2 - 5 = -7$ gives $x^2 = -1$, impossible.`
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
    a: `$C(212) = \\frac{(212 - 32)}{1.8} = \\frac{180}{1.8} = 100$. So 212° F equals 100° C, the boiling point of water.`
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
    q: `If $f(x) = x^2 + 1$ and $g(x) = 4x - 7$, find $(f - g)(x)$ and $(f \\cdot g)(2)$.`,
    a: `$(f - g)(x) = x^2 - 4x + 8$. Subtract the formulas: $(x^2 + 1) - (4x - 7) = x^2 - 4x + 8$. $(f \\cdot g)(2) = f(2) \\cdot g(2) = 5 \\cdot 1 = 5$.`
  },
  {
    q: `If $f(x) = \\sqrt{x}$ and $g(x) = \\sqrt{x^2 - x - 6}$, what is the domain of $\\frac{f}{g}$?`,
    a: `$x > 3$. Domain of $f$: $x \\geq 0$. Domain of $g$: $x \\geq 3$ or $x \\leq -2$. Combined: $x \\geq 3$. For $\\frac{f}{g}$, also exclude where $g(x) = 0$ (at $x = 3$). Final: $x > 3$.`
  },
  {
    q: `Compute $f(g(1))$ and $g(f(1))$ for $f(x) = x^2 + 2$ and $g(x) = 4x - 5$. Are they equal?`,
    a: `$f(g(1)) = 3$ and $g(f(1)) = 7$. Not equal. $g(1) = -1$, $f(-1) = 1 + 2 = 3$. $f(1) = 3$, $g(3) = 12 - 5 = 7$. Composition is not commutative.`
  },
  {
    q: `Find $f(g(x))$ for $f(x) = x^2 + 2$ and $g(x) = 4x - 5$.`,
    a: `$f(g(x)) = 16x^2 - 40x + 27$. Substitute $g(x) = 4x - 5$ into $f$: $f(4x - 5) = (4x - 5)^2 + 2 = 16x^2 - 40x + 25 + 2 = 16x^2 - 40x + 27$.`
  },
  {
    q: `If $p(x) = x^2$ and $q(x) = x + 3$, find $p(q(x))$ and $q(p(x))$.`,
    a: `$p(q(x)) = (x + 3)^2 = x^2 + 6x + 9$. $q(p(x)) = x^2 + 3$. They differ: squaring after the shift gives a different result from squaring before it.`
  },
  {
    q: `What does $f^2(x)$ mean for a function $f$? What does it NOT mean?`,
    a: `$f^2(x)$ means $f(f(x))$, apply $f$ twice. It does NOT mean $f(x) \\cdot f(x)$. If $f(x) = x + 4$, then $f^2(x) = f(f(x)) = f(x + 4) = (x + 4) + 4 = x + 8$, not $(x+4)^2$.`
  },
  {
    q: `Find every fixed point of $f(x) = x^2 - 6$.`,
    a: `$x = 3$ and $x = -2$. A fixed point satisfies $f(x) = x$: $x^2 - 6 = x$, so $x^2 - x - 6 = 0$, factoring $(x - 3)(x + 2) = 0$. Check: $f(3) = 3$ ✓, $f(-2) = -2$ ✓.`
  },
  {
    q: `From a graph, $f(3) = 1$, $f(1) = -1$, $f(-1) = 0$. Find $f(f(f(3)))$.`,
    a: `$f(f(f(3))) = 0$. Work inside out: $f(3) = 1$, $f(1) = -1$, $f(-1) = 0$.`
  },
  {
    q: `Verify that $f(x) = 5x + 4$ and $g(x) = \\frac{x - 4}{5}$ are inverses.`,
    a: `Check both directions. $g(f(x)) = \\frac{(5x + 4) - 4}{5} = \\frac{5x}{5} = x$. $f(g(x)) = 5 \\cdot \\frac{x - 4}{5} + 4 = (x - 4) + 4 = x$. Both hold, so they are inverses.`
  },
  {
    q: `Find the inverse of $f(x) = \\frac{x}{3} + 7$.`,
    a: `$f^{-1}(x) = 3(x - 7) = 3x - 21$. Solve $\\frac{g(x)}{3} + 7 = x$: subtract 7, then multiply by 3, giving $g(x) = 3(x - 7)$. Check: $f(3x - 21) = \\frac{3x - 21}{3} + 7 = (x - 7) + 7 = x$. ✓`
  },
  {
    q: `A function $f$ has an inverse and $f(3) = 5$. What is $f^{-1}(5)$?`,
    a: `$f^{-1}(5) = 3$. The inverse reverses every mapping: $f$ sends 3 to 5, so $f^{-1}$ sends 5 back to 3.`
  },
  {
    q: `$f$ is the inverse of $g(x) = \\frac{3x + 1}{x - 2}$. Find $f(5)$.`,
    a: `$f(5) = \\frac{11}{2}$. Find $x$ with $g(x) = 5$: $3x + 1 = 5(x - 2)$, $3x + 1 = 5x - 10$, $-2x = -11$, $x = \\frac{11}{2}$. So $f(5) = \\frac{11}{2}$.`
  },
  {
    q: `Does $f(x) = x^2$ have an inverse on all reals? What about $h(x) = x^2$ for $x \\geq 0$?`,
    a: `$f$ has no inverse: $f(2) = f(-2) = 4$, so the inverse cannot decide between 2 and $-2$. $h$ has an inverse: $h^{-1}(x) = \\sqrt{x}$. Restricting the domain removes the double answer.`
  },
  {
    q: `A graph of $f$ has a horizontal line $y = 4$ passing through two points. Does $f$ have an inverse?`,
    a: `No. Two points at height 4 means two different inputs both map to output 4. The inverse cannot return both.`
  },
  {
    q: `Explain why $f^{-1}(x)$ does NOT mean $\\frac{1}{f(x)}$.`,
    a: `$\\frac{1}{f(x)}$ is the reciprocal of the output. $f^{-1}(x)$ applies the inverse function, a different operation. If $f(x) = 2x$, then $f^{-1}(x) = \\frac{x}{2}$ but $\\frac{1}{f(x)} = \\frac{1}{2x}$.`
  },
  {
    q: `Three points on $f$ are $(1, 2)$, $(3, -4)$, $(5, 0)$. What are three points on $f^{-1}$?`,
    a: `$(2, 1)$, $(-4, 3)$, $(0, 5)$. Swap the coordinates of each point.`
  },
  {
    q: `Given $f(2x + 4) = x^3 - 5$, find $f(10)$.`,
    a: `$f(10) = 22$. Set $2x + 4 = 10$: $x = 3$. Substitute: $f(10) = 3^3 - 5 = 27 - 5 = 22$. The trap is substituting $x = 10$, which would give $f(24)$.`
  },
  {
    q: `Given $f(2x + 4) = x^3 - 5$, find $f(x)$ as an explicit formula.`,
    a: `$f(x) = \\left(\\frac{x - 4}{2}\\right)^3 - 5$. Let $u = 2x + 4$, so $x = \\frac{u - 4}{2}$. Substitute: $f(u) = \\left(\\frac{u - 4}{2}\\right)^3 - 5$. Rename $u$ to $x$. Check: $f(10) = \\left(\\frac{6}{2}\\right)^3 - 5 = 27 - 5 = 22$ ✓.`
  },
  {
    q: `Given $f(2x + 1) = x^2 - 3$, find $f(5)$.`,
    a: `$f(5) = 1$. Set $2x + 1 = 5$: $x = 2$. Substitute: $f(5) = 4 - 3 = 1$.`
  },
  {
    q: `Given $f(\\frac{x}{3}) = x^2 + x + 1$, find the sum of all $z$ where $f(3z) = 7$.`,
    a: `Sum $= -\\frac{1}{9}$. Set $x = 9z$ (so that $\\frac{x}{3} = 3z$): $f(3z) = 81z^2 + 9z + 1 = 7$, giving $81z^2 + 9z - 6 = 0$. Use Vieta's formula from Quadratic Equations: for $ax^2 + bx + c = 0$, the sum of the roots is $-\\frac{b}{a}$. Here $a = 81$, $b = 9$, so sum $= -\\frac{9}{81} = -\\frac{1}{9}$.`
  },
  {
    q: `Why must you substitute for the entire expression in a functional equation, not just the variable?`,
    a: `$f(x - 3)$ is NOT $f(x) - 3$. The expression $x - 3$ is the input to $f$. The rule applies to the whole input. Splitting it changes what $f$ actually receives.`
  },
  {
    q: `Given $f(m) + f(n) = f(mn)$ with $f(3) = 5$ and $f(5) = 8$, find $f(45)$.`,
    a: `$f(45) = 18$. Build 45 from the known cases: $45 = 3 \\cdot 15$, so $f(45) = f(3) + f(15)$. Get $f(15) = f(3) + f(5) = 13$. So $f(45) = 5 + 13 = 18$.`
  },
  {
    q: `Suppose $f(a) + f(b) = n^2$ whenever $a + b = 2^n$. Find $f(2)$.`,
    a: `$f(2) = 2$. Look for inputs to the property that coincide with the target: use $a = b = 2$, then $a + b = 4 = 2^2$, so $2 f(2) = 4$, giving $f(2) = 2$.`
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
    q: `Define $x \\diamond y = x^2 + 2y$. Compute $(2 \\diamond 5) \\diamond 3$.`,
    a: `$202$. Inner first: $2 \\diamond 5 = 2^2 + 2(5) = 4 + 10 = 14$. Outer: $14 \\diamond 3 = 14^2 + 2(3) = 196 + 6 = 202$.`
  },
  {
    q: `Define $a \\triangle b = 2ab - b + 5$. Solve $4 \\triangle x = 25$.`,
    a: `$x = \\frac{20}{7}$. Substitute $a = 4$: $4 \\triangle x = 8x - x + 5 = 7x + 5$. Set $7x + 5 = 25$: $7x = 20$, $x = \\frac{20}{7}$.`
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
    q: `The "two positive square roots of n" rule sends each $n > 0$ to $\\sqrt{n}$ and $-\\sqrt{n}$. Why is this not a function of $n$? How would you fix it?`,
    a: `It produces two outputs per input, so it fails the one-output-per-input rule. Fix it by choosing one branch: define $f(n) = \\sqrt{n}$ (the principal root) or $g(n) = -\\sqrt{n}$. Each branch by itself is a valid function.`
  },
  {
    q: `Graph $f(x) = x^2 + 2x - 8$. What are the x-intercepts and y-intercept?`,
    a: `x-intercepts at $(-4, 0)$ and $(2, 0)$. y-intercept at $(0, -8)$. Set $f(x) = 0$ and factor $(x + 4)(x - 2) = 0$. y-intercept: $f(0) = -8$.`
  },
  {
    q: `Why can a function have at most one y-intercept?`,
    a: `The y-intercept needs $x = 0$. Since $f(0)$ has at most one value, the graph can cross the y-axis at most once.`
  },
  {
    q: `Explain why the vertical line test works.`,
    a: `Each vertical line $x = a$ represents one input. If the line hits the graph at two points $(a, b_1)$ and $(a, b_2)$, input $a$ produces two outputs. That fails the function rule. A graph is a function exactly when every vertical line hits at most one point.`
  },
  {
    q: `A graph is a sideways parabola: $x = y^2$. Apply the vertical line test. Is it a function of $x$?`,
    a: `No. The vertical line $x = 4$ passes through $(4, 2)$ and $(4, -2)$. One input, two outputs.`
  },
  {
    q: `How many real solutions does $x^4 = x + 2$ have? Use the intersection method.`,
    a: `Two. Sketch $y = x^4$ (U-shaped, flatter near origin, steep beyond $|x| > 1$) and $y = x + 2$ (line, slope 1, y-intercept 2). The line crosses the curve once on the left (negative $x$) and once on the right (positive $x$). Two crossings → two real solutions.`
  },
  {
    q: `A tank holds $V(t) = 500 - 12t$ litres after $t$ minutes; a second tank holds $W(t) = 80 + 8t$. At what integer time does $W$ first exceed $V$?`,
    a: `$t = 22$. Set $80 + 8t > 500 - 12t$: $20t > 420$, $t > 21$. First integer above 21: $t = 22$. Check: $V(22) = 236$, $W(22) = 256$, and $W > V$. ✓`
  },
  {
    q: `Describe the effect on the graph of $y = f(x) - 4$ versus $y = f(x - 4)$.`,
    a: `$y = f(x) - 4$ subtracts 4 from every output. The graph shifts DOWN 4 units. $y = f(x - 4)$ subtracts 4 from every input. The graph shifts RIGHT 4 units (input shifts go opposite the sign).`
  },
  {
    q: `How do $y = -f(x)$ and $y = f(-x)$ differ? Apply each to the point $(3, -5)$.`,
    a: `$y = -f(x)$ negates the output: $(3, -5)$ becomes $(3, 5)$. Reflects over the x-axis. $y = f(-x)$ negates the input: needing $-x = 3$ gives $x = -3$, so $(3, -5)$ becomes $(-3, -5)$. Reflects over the y-axis.`
  },
  {
    q: `You know $g(2) = 11$. Find a point on $y = g(x - 4)$ and on $y = g(3x)$.`,
    a: `On $y = g(x - 4)$: set $x - 4 = 2$, $x = 6$, so $(6, 11)$. On $y = g(3x)$: set $3x = 2$, $x = \\frac{2}{3}$, so $\\left(\\frac{2}{3}, 11\\right)$.`
  },
  {
    q: `Sketch $y = h(3x + 6) - 2$ from $y = h(x)$. List the steps in order.`,
    a: `Factor first: $3x + 6 = 3(x + 2)$. Step 1: horizontal compression by 3 to get $y = h(3x)$. Step 2: horizontal shift LEFT by 2 to get $y = h(3(x + 2)) = h(3x + 6)$. Step 3: vertical shift DOWN by 2 to get $y = h(3x + 6) - 2$.`
  },
  {
    q: `The point $(6, -3)$ lies on $y = f(x)$. Find the corresponding point on $y = f^{-1}(x)$.`,
    a: `$(-3, 6)$. The graph of $f^{-1}$ is the reflection of $f$ over $y = x$. Every point $(a, b)$ on $f$ corresponds to $(b, a)$ on $f^{-1}$; swap the coordinates.`
  },
  {
    q: `A function satisfies $f(x) = f(-x)$ for all $x$. Can it have an inverse?`,
    a: `Only if it is constant zero, or only defined at $x = 0$. Otherwise, two different inputs ($x$ and $-x$) share an output, so the horizontal line test fails.`
  },
  {
    q: `What does $f^n(x)$ mean? Trace $f_c^n(0)$ for $f_c(z) = z^2 + c$ at $c = 1$ for $n = 0, 1, 2, 3$. Is $c = 1$ in the Mandelbrot set?`,
    a: `$f^n(x)$ means applying $f$ exactly $n$ times. At $c = 1$: $z_0 = 0$, $z_1 = 0^2 + 1 = 1$, $z_2 = 1^2 + 1 = 2$, $z_3 = 2^2 + 1 = 5$. The values grow without limit, so the sequence does not stay bounded. Therefore $c = 1$ is NOT in the Mandelbrot set.`
  },
  {
    q: `A parking garage charges 5 dollars for up to 2 hours, then 3 dollars for each extra hour. So $P(t) = 5$ if $0 \\leq t \\leq 2$, and $P(t) = 5 + 3(t - 2)$ if $t > 2$. Find $P(1)$, $P(2)$, and $P(5)$.`,
    a: `$P(1) = 5$ and $P(2) = 5$, since both inputs satisfy $0 \\leq t \\leq 2$. For $P(5)$, note $5 > 2$, so use the second rule: $P(5) = 5 + 3(5 - 2) = 5 + 9 = 14$.`
  },
  {
    q: `Evaluate the piecewise function $f(x) = x^2$ for $x < 0$ and $f(x) = 2x + 1$ for $x \\geq 0$. Find $f(-3)$ and $f(4)$.`,
    a: `$f(-3) = 9$: since $-3 < 0$, use $x^2$, giving $(-3)^2 = 9$. $f(4) = 9$: since $4 \\geq 0$, use $2x + 1$, giving $2(4) + 1 = 9$. Two different rules can still land on the same output.`
  },
  {
    q: `For $f(x) = x^2 - 6x + 5$, state where it increases and decreases, and give its local minimum.`,
    a: `The parabola opens up; its vertex is at $x = 3$. So $f$ is decreasing on $(-\\infty, 3)$ and increasing on $(3, \\infty)$. The local minimum value is $f(3) = 9 - 18 + 5 = -4$, at $x = 3$.`
  },
  {
    q: `A graph rises on $(-\\infty, -1)$, falls on $(-1, 2)$, then rises on $(2, \\infty)$. Where are the local maximum and local minimum?`,
    a: `Local maximum at $x = -1$: the graph switches from rising to falling, a peak. Local minimum at $x = 2$: the graph switches from falling to rising, a valley.`
  },
  {
    q: `Find the average rate of change of $f(x) = x^2 + 1$ between $x = 2$ and $x = 5$.`,
    a: `$f(5) = 26$ and $f(2) = 5$. Average rate of change $= \\frac{26 - 5}{5 - 2} = \\frac{21}{3} = 7$.`
  },
  {
    q: `Find the difference quotient $\\frac{f(a + h) - f(a)}{h}$ for $f(x) = x^2 + x$.`,
    a: `$f(a + h) = (a + h)^2 + (a + h) = a^2 + 2ah + h^2 + a + h$. Subtract $f(a) = a^2 + a$: the difference is $2ah + h^2 + h$. Divide by $h$: $2a + h + 1$.`
  },
  {
    q: `The average rate of change of $f$ between $x = 1$ and $x = 4$ is $-3$. If $f(1) = 10$, find $f(4)$.`,
    a: `Net change $=$ rate $\\times$ change in input $= -3 \\times (4 - 1) = -9$. So $f(4) = f(1) + (-9) = 10 - 9 = 1$.`
  },
  {
    q: `Is $f(x) = x^4 - 3x^2$ even, odd, or neither?`,
    a: `$f(-x) = (-x)^4 - 3(-x)^2 = x^4 - 3x^2 = f(x)$. Even. Its graph is symmetric about the y-axis.`
  },
  {
    q: `Is $f(x) = x^3 - x$ even, odd, or neither?`,
    a: `$f(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -f(x)$. Odd. Its graph is symmetric about the origin.`
  },
  {
    q: `Is $f(x) = x^2 + x$ even, odd, or neither?`,
    a: `$f(-x) = x^2 - x$. This is not $f(x) = x^2 + x$, and not $-f(x) = -x^2 - x$. So it is neither even nor odd.`
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
          {/* SECTION 1: WHAT IS A FUNCTION? */}
          <h2>{`What Is a Function?`}</h2>

          <p>{`An input is something you give the function; an output is what it returns. A function is a rule that takes an input and produces exactly one output. Feed it the same input twice and you get the same answer twice. If a single input could yield two different outputs, it is not a function.`}</p>

          <p>{`Write a function as $f(x)$, read "f of x." The letter $f$ names the function; the $x$ inside the parentheses is the input. The parentheses do not mean multiplication.`}</p>

          <div className="lrn-graph">
            <FunctionMachineViz />
            <p>{`A function as a machine: one input enters from the left, one output exits from the right.`}</p>
          </div>

          <p>
            <strong>{`Dummy variables.`}</strong>
            {` The letter $x$ is a `}
            <strong>{`dummy variable`}</strong>
            {`: a placeholder name for the input. Replace it with any letter and the function is unchanged: $f(x) = 2x + 3$ and $f(t) = 2t + 3$ are the same function. The rule is what matters, not the label.`}
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
        </>,
        <>
          <h2>{`Recognizing Functions`}</h2>

          <p>{`Check each rule against the "exactly one output per input" requirement. Concrete trace first: $f(x) = 2x$ takes input 3 to output 6. Feed it 3 again: still 6. Same input, same output, so it qualifies as a function.`}</p>

          <p>{`More cases:`}</p>

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

          <p>{`Two different inputs may share an output (cats and dogs can both map to 3); that does not break the rule.`}</p>
        </>,
        <>
          <h2>{`Evaluating a Function`}</h2>

          <p>{`Function evaluation is the substitution mechanic from Algebraic Foundations: replace the dummy variable everywhere it appears with the input. The input can be a number, a letter, or a whole expression.`}</p>

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
            <div className="lrn-faded-phase lrn-faded-partial">
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
              <p>{`The dummy variable $x$ stands for "whatever is inside the parentheses of $f$." The whole expression $x^2 + y^2 - z^2$ is the single input. Splitting it into three pieces would feed three separate inputs into $f$. That is not what the notation says.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Piecewise-Defined Functions`}</h2>

          <p>
            {`A `}
            <strong>{`piecewise-defined function`}</strong>
            {` uses different rules on different parts of its domain. To evaluate one, first check which interval the input falls in. Then apply that piece's rule.`}
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: a phone plan`}</span>
              <p className="lrn-step-content">{`A plan costs 39 dollars a month and includes 2 gigabytes of data. Extra data costs 15 dollars per gigabyte. The monthly charge for $x$ gigabytes is $C(x) = 39$ if $0 \\leq x \\leq 2$, and $C(x) = 39 + 15(x - 2)$ if $x > 2$. Find $C(0.5)$, $C(2)$, and $C(4)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$C(0.5)$ and $C(2)$`}</span>
              <p className="lrn-step-content">{`Both inputs satisfy $0 \\leq x \\leq 2$, so both use the first rule: $C(0.5) = 39$ and $C(2) = 39$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$C(4)$`}</span>
              <p className="lrn-step-content">{`Here $4 > 2$, so use the second rule: $C(4) = 39 + 15(4 - 2) = 39 + 30 = 69$.`}</p>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Pick the piece before you compute</span>
            <p>{`The pieces cover the domain with no overlap, so each input lands in exactly one piece. Check the input against each condition first. Only then substitute into the matching rule.`}</p>
          </div>
        </>,
        <>
          <h2>{`Finding the Domain`}</h2>

          <p>{`Ask: for which inputs does the function produce a real-number output? Two situations remove an input from the domain.`}</p>

          <ul className="lrn-list">
            <li>
              <strong>{`Division by zero.`}</strong>
              {` Exclude any input that makes a denominator zero (division by zero is undefined, from Arithmetic Foundations).`}
            </li>
            <li>
              <strong>{`Negative inside a square root.`}</strong>
              {` Exclude any input that makes the inside of a square root negative (real square roots require non-negative inputs, from Exponents and Roots). Zero inside is fine: $\\sqrt{0} = 0$.`}
            </li>
          </ul>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(x) = \\frac{2x - 3}{x + 5}$`}</span>
              <p className="lrn-step-content">{`The denominator is $x + 5$. Solve $x + 5 = 0$: $x = -5$. Exclude that input. Domain: all reals except $-5$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $g(x) = \\sqrt{x^2 - x - 6}$`}</span>
              <p className="lrn-step-content">{`Need $x^2 - x - 6 \\geq 0$. Factor: $(x - 3)(x + 2) \\geq 0$. Apply the quadratic-inequality sign chart from Quadratic Equations: roots at $x = 3$ and $x = -2$; the product is $\\geq 0$ on the outer intervals, so $x \\geq 3$ or $x \\leq -2$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: both restrictions at once, $h(x) = \\frac{1}{\\sqrt{x - 4}}$`}</span>
              <p className="lrn-step-content">{`The square root needs $x - 4 \\geq 0$, so $x \\geq 4$. The denominator $\\sqrt{x - 4}$ must not be zero, which would happen at $x = 4$. Combine both: $x - 4 > 0$, so the domain is $x > 4$.`}</p>
            </div>
          </div>
        </>,
        <>
          <h2>{`Finding the Range`}</h2>

          <p>{`The range is every output the function can actually produce. The general method: set $y = f(x)$, then solve for $x$ in terms of $y$. Any value of $y$ that gives no valid $x$ is not in the range.`}</p>

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
              <p>{`At $y = 2$, the equation $x(y - 2) = -3 - 5y$ becomes $0 = -13$, a contradiction. No $x$ produces output 2. The original equation $\\frac{2x - 3}{x + 5} = 2$ leads to $2x - 3 = 2x + 10$, which is also impossible.`}</p>
            </details>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: Range of $f(x) = 2x^2 - 5$`}</span>
              <p className="lrn-step-content">{`Set $y = 2x^2 - 5$ and solve for $x$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1</span>
              <p className="lrn-step-content">{`Rearrange: $2x^2 = y + 5$, so $x^2 = \\frac{y + 5}{2}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2</span>
              <p className="lrn-step-content">{`Take square roots: $x = \\pm\\sqrt{\\frac{y + 5}{2}}$. For a real $x$ to exist, the inside must be $\\geq 0$: $\\frac{y + 5}{2} \\geq 0$, so $y \\geq -5$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3</span>
              <p className="lrn-step-content">{`Range: $y \\geq -5$. Check: is $-7$ in the range? Solving $f(x) = -7$ gives $x^2 = -1$, no real solution, so $-7$ is not in the range. ✓`}</p>
            </div>
          </div>
        </>,
        <>
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
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $H(x) = x^2$ for $-2 \\leq x \\leq 1$`}</span>
              <p className="lrn-step-content">{`$H$ is not monotonic on this interval, it decreases on $[-2, 0]$ and increases on $[0, 1]$. So the range is not just from $H(-2)$ to $H(1)$. The minimum is at the vertex: $H(0) = 0$. The maximum is the larger of $H(-2) = 4$ and $H(1) = 1$, which is 4. Range: $0 \\leq H(x) \\leq 4$.`}</p>
            </div>
          </div>

          <p>{`Restricting a domain is also how you can give a function an inverse when the unrestricted version has none, covered later under inverse functions.`}</p>
        </>,
        <>
          <h2>{`Multi-Input Functions`}</h2>

          <p>{`A function can take more than one input. The notation works the same way: $f(x, y)$ takes two inputs, $G(a, b, c)$ takes three. List the dummy variables in a fixed order. The $k$-th input goes into the $k$-th slot, by position, never by name.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(x, y) = 2xy - x + y$. Find $f(2, 3)$.`}</span>
              <p className="lrn-step-content">{`Replace $x$ with 2 and $y$ with 3: $f(2, 3) = 2(2)(3) - 2 + 3 = 12 - 2 + 3 = 13$. Reversing the pairing gives a different answer: $f(3, 2) = 2(3)(2) - 3 + 2 = 11$, not 13. Input order matters.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $G(a, b, c) = 2a + 3b - 4ac$. Find $a$ if $G(3, a, 5) = 15$.`}</span>
              <p className="lrn-step-content">{`Match positions: the first dummy slot gets 3, the second gets $a$, the third gets 5. So $G(3, a, 5) = 2(3) + 3a - 4(3)(5) = 6 + 3a - 60 = 3a - 54$. Set $3a - 54 = 15$: $a = 23$.`}</p>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Reused variable names are different variables</span>
            <p>{`In $G(3, a, 5)$ with definition $G(a, b, c) = 2a + 3b - 4ac$, the outer $a$ (the input) is a completely different variable from the dummy $a$ in the definition. Substitute by position, not by name. The trap: writing $G(3, a, 5) = 2a + 9 - 20a$ by treating both $a$'s as the same variable. The correct work assigns the first slot to 3 and the third slot to 5.`}</p>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Why the quadratic formula is not a function</span>
            <p>{`The formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ gives two outputs for most inputs (one with $+$, one with $-$). A function must give exactly one output per input combination. So the quadratic formula is not a valid function of $(a, b, c)$.`}</p>
          </div>

          {/* SECTION 2: COMBINING FUNCTIONS */}
        </>,
        <>
          <h2>{`Combining Functions`}</h2>

          <p>{`Concrete first: with $f(x) = 3x + 2$ and $g(x) = 2x - 9$, the sum is $(3x + 2) + (2x - 9) = 5x - 7$. You add the two formulas like any algebraic expressions. The same idea gives difference, product, and quotient:`}</p>

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

          <p>{`The domain of $f + g$, $f - g$, and $f \\cdot g$ is the overlap of the two domains, the set of inputs where both are defined. For $\\frac{f}{g}$, also exclude inputs where $g(x) = 0$.`}</p>

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
            <p>{`Pick any input $a$ in the shared domain. Since $f$ is a function, $f(a)$ has exactly one value. Since $g$ is a function, $g(a)$ has exactly one value. Adding, subtracting, multiplying, or dividing two single real numbers gives one single real number. So $(f + g)(a)$, $(f - g)(a)$, $(f \\cdot g)(a)$, and (when $g(a) \\neq 0$) $(\\frac{f}{g})(a)$ each have exactly one value. Each combination is therefore a function.`}</p>
          </div>

          {/* SECTION 3: COMPOSITION */}
        </>,
        <>
          <h2>{`Composition of Functions`}</h2>

          <p>
            <strong>{`Composition`}</strong>
            {` chains two functions: put $x$ into $g$, then feed the output of $g$ into $f$. Concrete chain: with $f(x) = 2x - 6$ and $g(x) = 3x - 9$, computing $f(g(2))$ goes $g(2) = -3$, then $f(-3) = -12$. Write it $f(g(x))$ or $(f \\circ g)(x)$. Order matters: $f(g(x))$ and $g(f(x))$ are generally different.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$(f \\circ g)(x) = f(g(x))$$`}</div>

          <div className="lrn-graph">
            <CompositionChainViz />
            <p>{`Input $x$ enters $g$, producing $g(x)$, which then enters $f$, producing $f(g(x))$.`}</p>
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
              <p className="lrn-step-content">{`$f(2) = 2(2) - 6 = -2$. Then $g(-2) = 3(-2) - 9 = -15$. Different from $f(g(2))$: composition is not commutative, swapping the order changes the answer.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$f(g(x))$`}</span>
              <p className="lrn-step-content">{`$f(g(x)) = f(3x - 9) = 2(3x - 9) - 6 = 6x - 24$.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: domain of $f \\circ g$ with $f(x) = \\sqrt{x}$, $g(x) = x - 5$`}</span>
              <p className="lrn-step-content">{`Composition needs two conditions: $x$ must be in the domain of $g$, AND $g(x)$ must be in the domain of $f$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply</span>
              <p className="lrn-step-content">{`$g(x) = x - 5$ is defined for all reals. $f$ requires its input to be $\\geq 0$, so $g(x) \\geq 0$, meaning $x - 5 \\geq 0$, so $x \\geq 5$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">{`Domain of $f(g(x)) = \\sqrt{x - 5}$ is $x \\geq 5$.`}</p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <p>
              <strong>{`The composition of two functions is a function.`}</strong>
            </p>
            <p>{`Pick any input $a$ in the domain of $f \\circ g$. Since $g$ is a function, $g(a)$ has exactly one value. Call it $b$. Since $f$ is a function and $b$ is in $f$'s domain, $f(b)$ has exactly one value. So $f(g(a))$ has exactly one value, which proves $f \\circ g$ is a function.`}</p>
          </div>
        </>,
        <>
          <h2>{`Repeated Composition and Fixed Points`}</h2>

          <p>{`Preview: take $f(x) = 2x$. Then $f^2(x) = f(f(x)) = f(2x) = 4x$. Each application doubles, so two applications quadruple.`}</p>

          <p>{`In general, $f^2(x)$ means $f(f(x))$. Apply $f$ twice. $f^n(x)$ means apply $f$ exactly $n$ times.`}</p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Notation trap</span>
            <p>
              {`$f^2(x)$ does `}
              <strong>{`NOT`}</strong>
              {` mean $f(x) \\cdot f(x)$. The superscript on a function name means repeated application, not raising the output to a power.`}
            </p>
          </div>

          <p>
            {`A value $x$ where $f(x) = x$ is a `}
            <strong>{`fixed point`}</strong>
            {` of $f$. Every fixed point automatically satisfies $f^n(x) = x$ for every $n$, because each application returns the input unchanged. Geometrically, a fixed point is where the graph of $f$ crosses the line $y = x$.`}
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

          {/* SECTION 4: INVERSE FUNCTIONS */}
        </>,
        <>
          <h2>{`Inverse Functions`}</h2>

          <p>
            {`The `}
            <strong>{`inverse`}</strong>
            {` of $f$, written $f^{-1}$, is the function that undoes $f$. If $f$ maps $a$ to $b$, then $f^{-1}$ maps $b$ back to $a$.`}
          </p>

          <p>{`Quick preview: take $f(x) = x + 5$ and $g(x) = x - 5$. Feed any number through $f$ then $g$: $g(f(4)) = g(9) = 4$. Feed it the other way: $f(g(4)) = f(-1) = 4$. Both directions return the input unchanged. That is the inverse condition.`}</p>

          <p>{`In general, two functions $f$ and $g$ are inverses if and only if both conditions hold:`}</p>

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
        </>,
        <>
          <h2>{`When Inverses Fail`}</h2>

          <p>{`A function has an inverse if and only if it never sends two different inputs to the same output. A function with this property, different inputs always give different outputs, is called one-to-one. The moment two inputs share an output, the "undo" machine cannot decide which input to return. So no inverse exists.`}</p>

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
            {` if a function has an inverse, it has exactly one. The reversal of each mapping is forced. Input $a$ maps to output $b$, so the inverse must map $b$ back to $a$. No other option exists.`}
          </p>

          {/* SECTION 5: FUNCTIONAL EQUATIONS */}
        </>,
        <>
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
        </>,
        <>
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

          <p>{`You can now solve functional-equation problems by chaining the property from known cases back to your target.`}</p>
        </>,
        <>
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

          {/* SECTION 6: OPERATIONS */}
        </>,
        <>
          <h2>{`Operations (Custom Symbols)`}</h2>

          <p>
            {`An `}
            <strong>{`operation`}</strong>
            {` is a function of two inputs that uses a custom symbol $\\star$, $\\#$, $\\diamond$, anything. $x \\star y$ is just $f(x, y)$ with new notation. Evaluate the same way: substitute the two inputs into the defining formula, respecting position.`}
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

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>{`Define $p \\diamond q = p^2 - 2q$. Compute $(3 \\diamond 1) \\diamond 4$.`}</strong>
              </p>
              <ol className="lrn-list">
                <li>{`Inner first: $3 \\diamond 1 = 3^2 - 2(1) = 9 - 2 = 7$.`}</li>
                <li>{`Outer: $7 \\diamond 4 = 7^2 - 2(4) = 49 - 8 = 41$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                <strong>{`Same operation $p \\diamond q = p^2 - 2q$. Solve $x \\diamond 5 = 39$.`}</strong>
              </p>
              <ol className="lrn-list">
                <li>{`Substitute $q = 5$: $x \\diamond 5 = x^2 - $ ___.`}</li>
                <li>{`Set the result equal to 39: $x^2 = $ ___.`}</li>
                <li>{`Take square roots: $x = $ ___.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`With $p \\diamond q = p^2 - 2q$, find all $a$ such that $a \\diamond a = -1$.`}</p>
            </div>
          </div>

          <p>
            <strong>{`Commutative operations.`}</strong>
            {` An operation is `}
            <strong>{`commutative`}</strong>
            {` if $x \\star y = y \\star x$ for all valid inputs. Regular addition and multiplication are commutative; subtraction and division are not. For example, $5 - 3 = 2$ but $3 - 5 = -2$, so subtraction fails the check. To test a new operation, compute $x \\star y$ and $y \\star x$ symbolically and compare.`}
          </p>

          {/* SECTION 7: GRAPHING FUNCTIONS */}
        </>,
        <>
          <h2>{`Graphing Functions`}</h2>

          <p>{`The graph of $f$ specialises the graph-of-an-equation idea from Graphing Lines: every point is $(a, f(a))$, so $(a, b)$ is on the graph if and only if $f(a) = b$.`}</p>

          <div className="lrn-graph">
            <GraphPointViz />
            <p>{`The point $(3, 7)$ on the graph encodes $f(3) = 7$.`}</p>
          </div>

          <p>{`Intercepts use the same rule from Graphing Lines, now with a general $f$: x-intercepts solve $f(x) = 0$; the y-intercept is $f(0)$ (assuming $0$ is in the domain).`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: Graph $f(x) = x^2 - 5x + 6$`}</span>
              <p className="lrn-step-content">{`x-intercepts: set $f(x) = 0$ and factor $(x - 2)(x - 3) = 0$, so $x = 2$ and $x = 3$. y-intercept: $f(0) = 6$.`}</p>
            </div>
          </div>

          <div className="lrn-graph">
            <ParabolaViz />
            <p>{`The parabola from the worked example, with its intercepts marked.`}</p>
          </div>

          <p>{`Reading values from a graph: locate $x = a$ on the horizontal axis, move to the curve, read the y-coordinate. That y-value is $f(a)$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: read the domain and range off a graph`}</span>
              <p className="lrn-step-content">{`Suppose the parabola $p(x) = x^2$ is drawn only between $x = -3$ and $x = 3$, with the segment shown ending at $(-3, 9)$ on the left and $(3, 9)$ on the right.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Domain</span>
              <p className="lrn-step-content">{`The leftmost and rightmost x-values on the drawn curve. Here $-3 \\leq x \\leq 3$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Range</span>
              <p className="lrn-step-content">{`The lowest and highest y-values on the drawn curve. The minimum is at the vertex $(0, 0)$ and the maximum is at the endpoints, $9$. So the range is $0 \\leq y \\leq 9$.`}</p>
            </div>
          </div>

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
        </>,
        <>
          <h2>{`The Vertical Line Test`}</h2>

          <p>
            {`The `}
            <strong>{`vertical line test`}</strong>
            {` says: a graph represents a function if and only if every vertical line passes through at most one point on the graph.`}
          </p>

          <p>{`Each vertical line $x = a$ represents the single input $a$. If it crosses the graph twice, the input $a$ produces two outputs. That fails the "one output per input" rule. One crossing means one output. So the test is just a visual restatement of the function definition.`}</p>

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

          <p>{`You can now determine, from a single graph, whether it represents a function.`}</p>
        </>,
        <>
          <h2>{`Counting Solutions with Graphs`}</h2>

          <p>{`Apply the intersection rule from Simultaneous Equations: the number of real solutions to $A(x) = B(x)$ equals the number of points where $y = A(x)$ and $y = B(x)$ cross. This rescues equations that are algebraically intractable.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: How many real solutions does $x^6 = 2x + 3$ have?`}</span>
              <p className="lrn-step-content">{`Count crossings of $y = x^6$ and $y = 2x + 3$. The U-shaped curve $y = x^6$ and the line $y = 2x + 3$ cross at two points. So the equation has two real solutions.`}</p>
            </div>
          </div>

          <div className="lrn-graph">
            <IntersectionViz />
            <p>{`The line $y = 2x + 3$ crosses the curve $y = x^6$ at two points: two real solutions.`}</p>
          </div>

          <p>{`You can now estimate the number of real solutions to an algebraically intractable equation by graphing both sides and counting crossings.`}</p>

          {/* SECTION 7B: INCREASING, DECREASING, LOCAL EXTREMES */}
        </>,
        <>
          <h2>{`Increasing, Decreasing, and Local Extremes`}</h2>

          <p>{`A graph tells you where a function rises and where it falls. Reading these intervals is one of the most useful things a graph gives you.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Increasing / Decreasing</span>
            <div className="lrn-definition-desc">
              <p>{`$f$ is increasing on an interval $I$ if $f(x_1) < f(x_2)$ whenever $x_1 < x_2$ in $I$. The graph rises left to right. $f$ is decreasing on $I$ if $f(x_1) > f(x_2)$ whenever $x_1 < x_2$. The graph falls.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: reading intervals off a graph`}</span>
              <p className="lrn-step-content">{`A graph shows a person's weight $W$ against age $x$ in years. The curve climbs, levels off, climbs again, then drops. From the graph, $W$ is increasing on $(0, 25)$ and $(35, 40)$, decreasing on $(40, 50)$, and constant on $(25, 35)$ and $(50, 80)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Read the story`}</span>
              <p className="lrn-step-content">{`The person gained weight until age 25, held steady to age 35, gained again to age 40, then lost weight until age 50. By convention, write these intervals as open intervals.`}</p>
            </div>
          </div>

          <p>{`A high point or low point on the graph gets its own name.`}</p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Local Maximum / Minimum</span>
            <div className="lrn-definition-desc">
              <p>{`$f(a)$ is a local maximum value if $f(a) \\geq f(x)$ for all $x$ near $a$: a peak. $f(a)$ is a local minimum value if $f(a) \\leq f(x)$ for all $x$ near $a$: a valley. A function switches from increasing to decreasing at a local maximum, and from decreasing to increasing at a local minimum.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: local minimum of $f(x) = x^2 - 4x$`}</span>
              <p className="lrn-step-content">{`This parabola opens up, so its vertex is a low point. Use the vertex method from Quadratic Functions: the vertex is at $x = 2$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Intervals and the extreme value`}</span>
              <p className="lrn-step-content">{`$f$ is decreasing on $(-\\infty, 2)$ and increasing on $(2, \\infty)$. The local minimum value is $f(2) = 4 - 8 = -4$, at $x = 2$. This parabola has no local maximum.`}</p>
            </div>
          </div>

          {/* SECTION 7C: NET CHANGE AND AVERAGE RATE OF CHANGE */}
        </>,
        <>
          <h2>{`Net Change and Average Rate of Change`}</h2>

          <p>
            {`The `}
            <strong>{`net change`}</strong>
            {` in $f$ as the input goes from $a$ to $b$ is $f(b) - f(a)$: how much the output moved. Divide by the change in input and you get the `}
            <strong>{`average rate of change`}</strong>
            {`.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\text{average rate of change} = \\frac{f(b) - f(a)}{b - a}$$`}</div>

          <p>{`This is the slope of the secant line through $(a, f(a))$ and $(b, f(b))$ on the graph. A positive rate means the function rose on average; a negative rate means it fell.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $f(x) = (x - 3)^2$`}</span>
              <p className="lrn-step-content">{`Find the net change and average rate of change between $x = 1$ and $x = 3$, then between $x = 4$ and $x = 7$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`From $x = 1$ to $x = 3$`}</span>
              <p className="lrn-step-content">{`$f(3) = 0$ and $f(1) = 4$. Net change $= 0 - 4 = -4$. Average rate of change $= \\frac{-4}{3 - 1} = -2$. Negative, so the function fell over this interval.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`From $x = 4$ to $x = 7$`}</span>
              <p className="lrn-step-content">{`$f(7) = 16$ and $f(4) = 1$. Net change $= 16 - 1 = 15$. Average rate of change $= \\frac{15}{7 - 4} = 5$. Positive, so the function rose.`}</p>
            </div>
          </div>

          <h3>{`The difference quotient`}</h3>

          <p>
            {`Take the average rate of change over the special interval from $a$ to $a + h$. The result is the `}
            <strong>{`difference quotient`}</strong>
            {`, the starting point for calculus:`}
          </p>

          <div className="lrn-eq">{`$$\\frac{f(a + h) - f(a)}{h}, \\quad h \\neq 0$$`}</div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: difference quotient of $f(x) = 2x^2 - 3x + 1$`}</span>
              <p className="lrn-step-content">{`Expand $f(a + h) = 2(a + h)^2 - 3(a + h) + 1 = 2a^2 + 4ah + 2h^2 - 3a - 3h + 1$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Subtract and simplify`}</span>
              <p className="lrn-step-content">{`Subtract $f(a) = 2a^2 - 3a + 1$: the difference is $4ah + 2h^2 - 3h$. Divide by $h$: $\\frac{4ah + 2h^2 - 3h}{h} = 4a + 2h - 3$.`}</p>
            </div>
          </div>

          {/* SECTION 8: TRANSFORMATIONS */}
        </>,
        <>
          <h2>{`Transformations of Functions`}</h2>

          <p>{`A transformation changes the input or output of $f$ in a way that moves or rescales its graph predictably. Four basic types plus their negatives cover everything.`}</p>

          <h3>{`Vertical shift: $y = f(x) + k$`}</h3>

          <p>{`Adds $k$ to every output. The graph shifts up by $k$ (down if $k < 0$). Each point $(a, b)$ becomes $(a, b + k)$. The x-coordinate stays put; y moves.`}</p>

          <p>{`Example: if $f(x) = x^2$, then $f(x) + 3 = x^2 + 3$. The whole parabola shifts up 3 units; the vertex moves from $(0, 0)$ to $(0, 3)$.`}</p>

          <h3>{`Horizontal shift: $y = f(x + k)$`}</h3>

          <p>{`Adds $k$ to every input. The graph shifts LEFT by $k$ for positive $k$, and right for negative $k$. The direction is opposite to the sign. This is the most common transformation mistake.`}</p>

          <p>{`Why left: the point $(a, b)$ on $y = f(x)$ corresponds to the input $a$. On $y = f(x + k)$, we need $x + k = a$, so $x = a - k$. The point appears at $x = a - k$, which is $k$ units to the left of $a$.`}</p>

          <p>{`Example: if $f(x) = x^2$, then $f(x + 3) = (x + 3)^2$. The vertex was at $(0, 0)$; now it needs $x + 3 = 0$, so $x = -3$. The parabola shifts LEFT 3 units.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$y = f(x) + k$`}</span>
              <p>{`Add to OUTPUT. Shifts graph UP by $k$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$y = f(x + k)$`}</span>
              <p>{`Add to INPUT. Shifts graph LEFT by $k$, opposite of the sign.`}</p>
            </div>
          </div>

          <h3>{`Vertical scaling: $y = k f(x)$`}</h3>

          <p>{`Multiplies every output by $k$. Each point $(a, b)$ becomes $(a, k b)$.`}</p>

          <ul className="lrn-list">
            <li>{`$k > 1$: stretches away from the x-axis.`}</li>
            <li>{`$0 < k < 1$: compresses toward the x-axis.`}</li>
            <li>{`$k = -1$: $y = -f(x)$ reflects over the x-axis. Negative $k$ generally combines a reflection with a scale.`}</li>
          </ul>

          <p>{`Example: if $f(x) = x^2$ has the point $(2, 4)$, then $3 f(x) = 3x^2$ has $(2, 12)$. Outputs triple; x-coordinates stay.`}</p>

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

          <p>{`Example: if $f(x) = x^2$ has the point $(4, 16)$, then $f(2x) = (2x)^2 = 4x^2$ has $(2, 16)$. Same height, but it appears at half the x-coordinate.`}</p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Counterintuitive direction</span>
            <p>{`A factor of $k > 1$ in the input COMPRESSES, not stretches. The scale factor on the graph is $\\frac{1}{k}$, not $k$. Same flip happens with horizontal shifts: input changes act opposite to the direction the sign suggests.`}</p>
          </div>

          <div className="lrn-graph">
            <HorizontalScaleViz />
            <p>{`Original $\\sin(x)$, compressed $\\sin(2x)$, and reflected $\\sin(-x)$.`}</p>
          </div>
        </>,
        <>
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

          <p>{`For multi-step transformations, factor the input first to separate the horizontal scale from the horizontal shift, the same vertex-form trick used in Quadratic Functions: $kx + c = k(x + c/k)$ exposes the scale $k$ and the shift $c/k$ directly.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>{`Sketch $y = f(2x - 1) + 3$ from the graph of $y = f(x)$.`}</strong>
              </p>
              <p>{`Factor the input: $2x - 1 = 2(x - \\frac{1}{2})$. Apply in order:`}</p>
              <ol className="lrn-list">
                <li>{`Horizontal compression by 2: $y = f(2x)$ (x-coordinates halve). Point $(2, 5)$ on $f$ becomes $(1, 5)$.`}</li>
                <li>{`Horizontal shift right by $\\frac{1}{2}$: $y = f(2(x - \\frac{1}{2})) = f(2x - 1)$. The point $(1, 5)$ becomes $(1.5, 5)$.`}</li>
                <li>{`Vertical shift up 3: $y = f(2x - 1) + 3$. The point $(1.5, 5)$ becomes $(1.5, 8)$. So $(2, 5)$ on $f$ ends at $(1.5, 8)$ on the final graph.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
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

          {/* SECTION 8B: EVEN AND ODD FUNCTIONS */}
        </>,
        <>
          <h2>{`Even and Odd Functions`}</h2>

          <p>{`Some functions have a built-in symmetry you can test with algebra. Replace $x$ with $-x$ and see what happens.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Even</span>
              <p>{`$f(-x) = f(x)$ for all $x$. The graph is symmetric about the y-axis. Example: $f(x) = x^2$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Odd</span>
              <p>{`$f(-x) = -f(x)$ for all $x$. The graph is symmetric about the origin. Example: $f(x) = x^3$.`}</p>
            </div>
          </div>

          <p>{`To classify a function, compute $f(-x)$, then compare it with $f(x)$ and with $-f(x)$. A match with $f(x)$ means even; a match with $-f(x)$ means odd; no match means neither.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: classify three functions`}</span>
              <p className="lrn-step-content">{`Test $f(x) = x^5 + x$, $g(x) = 1 - x^4$, and $h(x) = 2x - x^2$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$f(x) = x^5 + x$`}</span>
              <p className="lrn-step-content">{`$f(-x) = (-x)^5 + (-x) = -x^5 - x = -(x^5 + x) = -f(x)$. Odd.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$g(x) = 1 - x^4$`}</span>
              <p className="lrn-step-content">{`$g(-x) = 1 - (-x)^4 = 1 - x^4 = g(x)$. Even.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`$h(x) = 2x - x^2$`}</span>
              <p className="lrn-step-content">{`$h(-x) = -2x - x^2$. This equals neither $h(x) = 2x - x^2$ nor $-h(x) = -2x + x^2$. Neither even nor odd.`}</p>
            </div>
          </div>

          <p>{`The even/odd test connects to the reflections you just met: an even function is unchanged by a reflection over the y-axis, and an odd function is unchanged by a half-turn about the origin.`}</p>

          {/* SECTION 9: INVERSE FUNCTIONS ON A GRAPH */}
        </>,
        <>
          <h2>{`Inverse Functions on a Graph`}</h2>

          <p>{`The graph of $f^{-1}$ is the reflection of the graph of $f$ over the line $y = x$. Every point $(a, b)$ on $f$ corresponds to the point $(b, a)$ on $f^{-1}$: the coordinates swap.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <p>{`If $(a, b)$ is on $y = f(x)$, then $b = f(a)$. By definition of inverse, $f^{-1}(b) = a$, so $(b, a)$ is on $y = f^{-1}(x)$. Reflecting $(a, b)$ over $y = x$ swaps the coordinates and gives $(b, a)$. So the graph of $f^{-1}$ is exactly the reflection of $f$ over $y = x$.`}</p>
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
        </>,
        <>
          <h2>{`The Horizontal Line Test`}</h2>

          <p>{`A function has an inverse if and only if no horizontal line passes through two or more points on its graph.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Concrete failure: $y = x^2$ at height $y = 4$`}</span>
              <p className="lrn-step-content">{`The horizontal line $y = 4$ hits the parabola at $(2, 4)$ and $(-2, 4)$. Two inputs share one output, so $y = x^2$ on all reals has no inverse.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Restrict to fix it: $h(x) = x^2$ for $x \\geq 0$`}</span>
              <p className="lrn-step-content">{`Now every horizontal line $y = c$ with $c \\geq 0$ hits the curve at exactly one point. The inverse is $h^{-1}(x) = \\sqrt{x}$.`}</p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <p>{`Suppose $f$ has an inverse. If two points $(a, c)$ and $(b, c)$ with $a \\neq b$ were both on the graph, then $f(a) = c$ and $f(b) = c$. Two inputs map to the same output. The inverse cannot decide which one to return. So no horizontal line can hit the graph twice.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Vertical line test</span>
              <p>{`Asks: is this graph a function? Fails when one vertical line hits 2+ points: one input gives two outputs.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Horizontal line test</span>
              <p>{`Asks: does this function have an inverse? Fails when one horizontal line hits 2+ points: two inputs share an output.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Both tests look identical visually. What is the precise difference between what they check?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The vertical line test checks the input direction: each $x$-value (input) must produce only one $y$-value (output). The horizontal line test checks the output direction: each $y$-value must come from only one $x$-value. Same picture, different axis, different requirement. A graph can pass the vertical test (be a function) and still fail the horizontal test (have no inverse). The parabola $y = x^2$ is the standard example.`}</p>
            </details>
          </div>

          {/* SECTION 10: COMPLEX FUNCTIONS AND MANDELBROT */}
        </>,
        <>
          <h2>{`Extra: Complex Functions and the Mandelbrot Set`}</h2>

          <p>{`Functions accept more than real-number inputs and outputs. They also accept complex numbers $a + bi$ from the Quadratic Equations module. The earlier domain rule "no negative inside a square root" applies to real-valued functions; the complex system extends the number line so that $i$ satisfies $i^2 = -1$, and the same substitution mechanic still works.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked Example: $g(z) = 3iz + 2i$`}</span>
              <p className="lrn-step-content">{`$g(2) = 3i(2) + 2i = 6i + 2i = 8i$. $g(5 - 2i) = 3i(5 - 2i) + 2i = 15i - 6i^2 + 2i = 15i + 6 + 2i = 6 + 17i$.`}</p>
            </div>
          </div>

          <p>{`The Mandelbrot set is built by repeated composition of one such function. Fix a complex number $c$ and define $f_c(z) = z^2 + c$. Repeat starting from $z_0 = 0$: $z_1 = f_c(0) = c$, $z_2 = f_c(c) = c^2 + c$, and so on. The $n$-th value in this sequence is $f_c^n(0)$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Iteration trace at $c = 0$`}</span>
              <p className="lrn-step-content">{`$z_0 = 0$. $z_1 = 0^2 + 0 = 0$. $z_2 = 0$. Every value is 0. The sequence stays bounded (does not run off to infinity), so $c = 0$ is in the set.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Iteration trace at $c = 1$`}</span>
              <p className="lrn-step-content">{`$z_0 = 0$, $z_1 = 1$, $z_2 = 2$, $z_3 = 5$, $z_4 = 26$, $z_5 = 677$. The values grow without limit, so $c = 1$ is not in the set.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Mandelbrot Set</span>
            <div className="lrn-definition-desc">
              <p>{`The set of complex numbers $c$ for which the sequence $f_c^n(0)$ stays bounded (does not run off to infinity) no matter how many times you repeat $f_c$. The notation $f_c^n$ is the same repeated-composition idea as $f^n(x)$: apply $f_c$ exactly $n$ times.`}</p>
            </div>
          </div>

          <p>
            <strong>{`Coloring rule:`}</strong>
            {` if the sequence stays bounded, $c$ is in the set (black). If the values escape to infinity, $c$ is outside, colored by how fast they grow.`}
          </p>

          <figure className="lrn-figure">
            <VizFigure aspect="auto" title="Mandelbrot Set">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Mandel_zoom_00_mandelbrot_set.jpg"
                alt="The Mandelbrot set a black fractal shape on a colored background showing complex iteration"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {`The Mandelbrot set. Black region: starting values whose sequences stay bounded under repeated composition of $f_c(z) = z^2 + c$. Colors show escape speed. `}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Mandel_zoom_00_mandelbrot_set.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wolfgang Beyer, CC BY-SA 3.0
                </a>
              </figcaption>
            </VizFigure>
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

          <h2>{`Piecewise-Defined Functions`}</h2>

          <p>{`Different rules on different parts of the domain. Check which condition the input satisfies, then apply that piece.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Rule</th>
                <th>Input</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$C(x) = 39$ if $0 \\leq x \\leq 2$`}</td>
                <td>{`$x = 2$`}</td>
                <td>{`$39$`}</td>
              </tr>
              <tr>
                <td>{`$C(x) = 39 + 15(x - 2)$ if $x > 2$`}</td>
                <td>{`$x = 4$`}</td>
                <td>{`$69$`}</td>
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

          <h2>{`Multi-Input Functions`}</h2>

          <p>{`Notation: $f(x, y)$, $G(a, b, c)$. The $k$-th input goes into the $k$-th slot, by position, never by name. $f(2, 3) \\neq f(3, 2)$ unless the rule is symmetric.`}</p>

          <p>
            <strong>{`Reused variable trap:`}</strong>
            {` in $G(3, a, 5)$ with $G(a, b, c) = 2a + 3b - 4ac$, the outer $a$ (input) is a different variable from the dummy $a$. Substitute by position: slot 1 = 3, slot 3 = 5, so $G(3, a, 5) = 6 + 3a - 60 = 3a - 54$.`}
          </p>

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
                <td>Restricted domain removes the double answer</td>
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

          <h2>{`Increasing, Decreasing, Local Extremes`}</h2>

          <ul className="lrn-list">
            <li>
              <strong>{`Increasing on $I$:`}</strong>
              {` $f(x_1) < f(x_2)$ whenever $x_1 < x_2$. Graph rises.`}
            </li>
            <li>
              <strong>{`Decreasing on $I$:`}</strong>
              {` $f(x_1) > f(x_2)$ whenever $x_1 < x_2$. Graph falls.`}
            </li>
            <li>
              <strong>{`Local maximum $f(a)$:`}</strong>
              {` $f(a) \\geq f(x)$ for $x$ near $a$. A peak.`}
            </li>
            <li>
              <strong>{`Local minimum $f(a)$:`}</strong>
              {` $f(a) \\leq f(x)$ for $x$ near $a$. A valley.`}
            </li>
          </ul>

          <h2>{`Net Change and Average Rate of Change`}</h2>

          <p>
            <strong>{`Net change`}</strong>
            {` from $a$ to $b$: $f(b) - f(a)$. `}
            <strong>{`Average rate of change`}</strong>
            {`: $\\frac{f(b) - f(a)}{b - a}$, the slope of the secant line.`}
          </p>

          <p>
            <strong>{`Difference quotient`}</strong>
            {` (rate from $a$ to $a + h$): $\\frac{f(a + h) - f(a)}{h}$, $h \\neq 0$.`}
          </p>

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

          <h2>{`Even and Odd Functions`}</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Test</th>
                <th>Symmetry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Even</td>
                <td>{`$f(-x) = f(x)$`}</td>
                <td>{`about the y-axis`}</td>
              </tr>
              <tr>
                <td>Odd</td>
                <td>{`$f(-x) = -f(x)$`}</td>
                <td>{`about the origin`}</td>
              </tr>
              <tr>
                <td>Neither</td>
                <td>{`$f(-x)$ matches neither`}</td>
                <td>{`no symmetry`}</td>
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

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Definition</th>
                <th>Compute</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$x \\star y = (x + y)(x - y)$`}</td>
                <td>{`$3 \\star 5 = (8)(-2)$`}</td>
                <td>{`$-16$`}</td>
              </tr>
              <tr>
                <td>{`$a \\# b = ab - a + b - 8$`}</td>
                <td>{`$4 \\# 2 = 8 - 4 + 2 - 8$`}</td>
                <td>{`$-2$`}</td>
              </tr>
            </tbody>
          </table>

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
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
  }

  return config
}

export default function Functions() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
