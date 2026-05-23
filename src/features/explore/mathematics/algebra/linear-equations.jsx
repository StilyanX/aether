import 'mafs/core.css'
import 'katex/dist/katex.min.css'
import { Mafs, Coordinates, Point, Line, LaTeX } from 'mafs'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { ParabolaPlotViz, TwoLinesViz } from '../../../../components/viz'
import { useVizColors } from '../../../../hooks/use-viz-colors'

function NumberLineXMinus3({ C }) {
  return (
    <Mafs viewBox={{ x: [-1, 13], y: [-1.5, 1.5] }} height={120} preserveAspectRatio={false}>
      <Coordinates.Cartesian
        xAxis={{ lines: false, labels: n => (Number.isInteger(n) && n >= 0 && n <= 12 ? n : '') }}
        yAxis={false}
      />
      <Point x={6} y={0} color={C.accent} />
      <Point x={9} y={0} color={C.fg} />
      <Line.Segment point1={[6, 0.15]} point2={[9, 0.15]} color={C.accent} />
      <LaTeX at={[6, -0.7]} tex="6" color={C.accent} />
      <LaTeX at={[9, -0.7]} tex="9 = x" color={C.fg} />
      <LaTeX at={[7.5, 0.6]} tex="+3" color={C.accent} />
    </Mafs>
  )
}

const PRACTICE_CARDS = [
  {
    q: 'Solve $x - 3 = 6$.',
    a: 'Add 3 to both sides: $x = 9$. Check: $9 - 3 = 6$.'
  },
  {
    q: 'Solve $x^2 + px + q = 0$ by completing the square. Give the general formula for $x$.',
    a: 'Add $\\bigl(\\tfrac{p}{2}\\bigr)^2$ to both sides: $\\bigl(x + \\tfrac{p}{2}\\bigr)^2 = \\tfrac{p^2}{4} - q$. Take $\\pm$ square root: $x = -\\tfrac{p}{2} \\pm \\sqrt{\\tfrac{p^2}{4} - q}$.'
  },
  {
    q: 'You simplify a linear equation and get $5 = 5$. How many solutions does the original have, and what is this called?',
    a: 'Infinitely many. It is an identity: every real number satisfies the original equation.'
  },
  {
    q: 'Solve $-\\dfrac{2r}{5} = 12$ for $r$.',
    a: 'Multiply both sides by the reciprocal $-\\tfrac{5}{2}$: $r = -\\tfrac{5}{2} \\cdot 12 = -30$.'
  },
  {
    q: "Vieta's theorem says the roots $\\alpha, \\beta$ of $x^2 + px + q = 0$ satisfy $\\alpha + \\beta = ?$ and $\\alpha\\beta = ?$.",
    a: '$\\alpha + \\beta = -p$ and $\\alpha\\beta = q$. The quadratic factors as $(x - \\alpha)(x - \\beta) = x^2 - (\\alpha+\\beta)x + \\alpha\\beta$. Match coefficients.'
  },
  {
    q: 'Solve the system $x + 3y = 6$; $2x - 5y = 1$ using any method.',
    a: 'From the first: $x = 6 - 3y$. Substitute: $12 - 6y - 5y = 1 \\to 11y = 11 \\to y = 1$. Then $x = 3$.'
  },
  {
    q: 'The discriminant of $x^2 + px + q = 0$ is $D = \\dfrac{p^2}{4} - q$. What does each case mean?',
    a: '$D > 0$: two distinct real roots. $D = 0$: one repeated root at $x = -\\tfrac{p}{2}$. $D < 0$: no real roots.'
  },
  {
    q: 'Solve $5x - 2y = 12$ and $y - 9x + 22 = -2y$.',
    a: 'Simplify the second: $3y = 9x - 22$, so $y = 3x - \\tfrac{22}{3}$. Substitute: $5x - 2(3x - \\tfrac{22}{3}) = 12 \\to -x + \\tfrac{44}{3} = 12 \\to x = \\tfrac{8}{3}$, then $y = 8 - \\tfrac{22}{3} = \\tfrac{2}{3}$.'
  },
  {
    q: 'Find a quadratic with integer coefficients having $4 - \\sqrt{7}$ as a root.',
    a: 'The conjugate $4 + \\sqrt{7}$ is also a root. Sum $= 8$, product $= 16 - 7 = 9$. Quadratic: $x^2 - 8x + 9 = 0$.'
  },
  {
    q: 'Construct a biquadratic equation with exactly three real solutions.',
    a: 'Need $y = x^2$ roots: one $= 0$, one $> 0$. Take $(y)(y - 1) = 0$, i.e. $y^2 - y = 0$. Then $x^4 - x^2 = 0$ has $x = 0, \\pm 1$: three solutions.'
  },
  {
    q: 'A doctor prescribes 14 days of pills. Each day you take $2x + 1$ pills at $\\$1$ each. The total bill is $\\$546$. Find $x$.',
    a: 'Divide first: $14(2x + 1) = 546 \\to 2x + 1 = 39 \\to x = 19$. Dividing first beats expanding.'
  },
  {
    q: 'Why must you check $\\sqrt{r} + 13 = 9 - \\sqrt{r}$ after solving?',
    a: 'Isolating gives $\\sqrt{r} = -2$. But $\\sqrt{r}$ is non-negative for any real $r$, so the equation has no real solution. Squaring would invent the extraneous answer $r = 4$.'
  },
  {
    q: 'Vertex of $y = a(x + m)^2 + n$? Why is the $x$-coordinate $-m$?',
    a: 'Vertex is $(-m, n)$. The squared term is zero exactly when $x = -m$. At that $x$, $y = n$.'
  },
  {
    q: 'Solve $2x + 3y = -11$; $5x - 3y = 67$ by elimination.',
    a: 'The $y$ coefficients are opposite. Add: $7x = 56 \\to x = 8$. Back-substitute: $3y = -27 \\to y = -9$.'
  },
  {
    q: 'Given roots $x_1, x_2$ of $x^2 + px + q = 0$, prove $x_1^2 + x_2^2 = p^2 - 2q$.',
    a: "$(x_1 + x_2)^2 = x_1^2 + 2x_1 x_2 + x_2^2$. By Vieta's: $x_1 + x_2 = -p$, $x_1 x_2 = q$. So $p^2 = x_1^2 + 2q + x_2^2$, giving $x_1^2 + x_2^2 = p^2 - 2q$."
  },
  {
    q: 'Solve $\\dfrac{3}{x} - 2 = 7 + \\dfrac{2}{x}$.',
    a: 'Subtract $\\tfrac{2}{x}$ and add $2$: $\\tfrac{1}{x} = 9$, so $x = \\tfrac{1}{9}$.'
  },
  {
    q: 'Predict: $3r + 5 + r = 7r - 2 + 7 - 3r$ has how many solutions?',
    a: 'Left $= 4r + 5$. Right $= 4r + 5$. Identity, so infinitely many solutions.'
  },
  {
    q: 'You solve $ax + b = c$ for $x$. If $a = 0$ and $b \\ne c$, what happens?',
    a: 'The equation becomes $b = c$, a contradiction. No solution exists.'
  },
  {
    q: 'The quadratic $x^2 + px + q = 0$ has two roots of opposite sign. What must be true about $q$?',
    a: "By Vieta's, $\\alpha\\beta = q$. Two numbers have opposite signs exactly when their product is negative. So $q < 0$."
  },
  {
    q: 'If the roots of $ax^2 + bx + c = 0$ are $x_1, x_2$, what are the roots of $cx^2 + bx + a = 0$?',
    a: 'They are $\\tfrac{1}{x_1}$ and $\\tfrac{1}{x_2}$. Substitute $y = \\tfrac{1}{x}$ into the first, multiply by $y^2$, and you get the second.'
  },
  {
    q: 'Solve $ax + bc = 3c - 2d^2x$ for $x$.',
    a: 'Collect $x$ terms: $x(a + 2d^2) = 3c - bc$. Divide: $x = \\tfrac{3c - bc}{a + 2d^2}$, assuming $a + 2d^2 \\ne 0$.'
  },
  {
    q: 'Predict: $-u + 3v = 8$ and $10v - 2u = 16 + 4v$ one solution, none, or infinitely many?',
    a: 'Simplify the second: $-u + 3v = 8$, identical to the first. Infinitely many.'
  },
  {
    q: 'Where does cross-multiplication come from? Is it a separate rule?',
    a: '$\\tfrac{a}{b} = \\tfrac{c}{d} \\implies ad = bc$ comes from multiplying both sides by $bd$. It is LCD clearing applied to a proportion, not a new rule.'
  },
  {
    q: 'Solve $x^2 - 3x + 2 < 0$.',
    a: 'Factor: $(x-1)(x-2) < 0$. Roots split the line into three pieces. Test $x = 1.5$: $(0.5)(-0.5) = -0.25 < 0$. Solution: $1 < x < 2$.'
  },
  {
    q: 'Find the minimum value of $x + \\tfrac{2}{x}$ for positive $x$.',
    a: 'Set $x + \\tfrac{2}{x} = c$, rewrite as $x^2 - cx + 2 = 0$. Real $x$ needs $D = c^2 - 8 \\ge 0$, so $c \\ge 2\\sqrt{2}$. Minimum is $2\\sqrt{2}$ at $x = \\sqrt{2}$.'
  },
  {
    q: 'Solve $x + 3y - 4z = 25$; $-2x + 5y + 7z = -66$; $3x - 2y + 3z = 7$.',
    a: 'From (1): $x = 25 - 3y + 4z$. Substitute into (2) and (3): $11y - z = -16$ and $-11y + 15z = -68$. Add: $14z = -84 \\to z = -6$, $y = -2$, $x = 7$.'
  },
  {
    q: 'When is the alternative quadratic formula $x = \\tfrac{2c}{-b \\mp \\sqrt{b^2 - 4ac}}$ preferred?',
    a: 'When $|b|$ is large. The standard form subtracts two nearly equal numbers (catastrophic cancellation). The alternative avoids that subtraction.'
  },
  {
    q: 'Explain the error: "Let $x$ be my age. My age six years ago was $x$. Twice that is $2x$."',
    a: 'Reusing $x$ for two different quantities. Current age $= x$. Age six years ago $= x - 6$, not $x$.'
  },
  {
    q: 'Solve $3\\sqrt{x} - 2 = 30 - \\sqrt{x}$.',
    a: 'Let $y = \\sqrt{x}$: $4y = 32 \\to y = 8 \\to x = 64$. Check: $3(8) - 2 = 22$ and $30 - 8 = 22$.'
  },
  {
    q: 'Prove that $Ax + B = Cx + D$ for all $x$ implies $A = C$ and $B = D$.',
    a: 'Plug $x = 0$: $B = D$. Plug $x = 1$: $A + B = C + D$. Subtract $B = D$ from both: $A = C$.'
  },
  {
    q: 'Solve $\\sqrt{a} + \\sqrt{b} = 37$ and $\\sqrt{a} = 2\\sqrt{b} + 10$.',
    a: 'Let $u = \\sqrt{a}$, $v = \\sqrt{b}$. Add: $u + v = 37$, $u - 2v = 10$. Subtract: $3v = 27 \\to v = 9$, $u = 28$. So $a = 784$, $b = 81$.'
  },
  {
    q: 'How does the graph of $y = ax^2$ change when $a$ flips sign?',
    a: 'If $a > 0$: opens upward, vertex is a minimum. If $a < 0$: opens downward, vertex is a maximum.'
  },
  {
    q: 'Solve $\\dfrac{3}{x} - \\dfrac{2}{y} = -\\dfrac{7}{2}$ and $\\dfrac{6}{x} + \\dfrac{4}{y} = 9$.',
    a: 'Let $r = \\tfrac{1}{x}$, $s = \\tfrac{1}{y}$: $3r - 2s = -\\tfrac{7}{2}$ and $6r + 4s = 9$. Multiply the first by $2$ and add: $12r = 2 \\to r = \\tfrac{1}{6}$, so $x = 6$. Then $s = 2$, so $y = \\tfrac{1}{2}$.'
  },
  {
    q: 'Solve $\\dfrac{x}{x-1} + \\dfrac{2}{3} = \\dfrac{2}{x-1}$.',
    a: 'Multiply through by $3(x-1)$: $3x + 2(x-1) = 6 \\to 5x = 8 \\to x = \\tfrac{8}{5}$. Check $x \\ne 1$. Valid.'
  },
  {
    q: 'Find $(x_1 - x_2)^2$ for the roots of $x^2 + px + q = 0$.',
    a: '$(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4 x_1 x_2 = p^2 - 4q = 4D$.'
  },
  {
    q: 'Two linear equations share the same solution: $2x + 7 = 3$ and $bx - 10 = -2$. Find $b$.',
    a: 'From the first: $x = -2$. Substitute: $-2b - 10 = -2 \\to -2b = 8 \\to b = -4$.'
  },
  {
    q: 'Solve $4x - 7y = 13$; $2x + 3y = -5$ by elimination.',
    a: 'Multiply the second by $-2$: $-4x - 6y = 10$. Add to the first: $-13y = 23 \\to y = -\\tfrac{23}{13}$. Back-substitute: $x = \\tfrac{2}{13}$.'
  },
  {
    q: 'Solve $2 - y + 10 + \\tfrac{y}{2} = 3y - \\tfrac{7}{3} + 2y$ by clearing fractions.',
    a: 'LCD $= 6$. Multiply every term: $12 - 6y + 60 + 3y = 18y - 14 + 12y \\to 72 - 3y = 30y - 14 \\to 86 = 33y \\to y = \\tfrac{86}{33}$.'
  },
  {
    q: 'Prove that among rectangles with a fixed perimeter, the square has the largest area.',
    a: 'Fix perimeter $P$. Sides $x$ and $\\tfrac{P}{2} - x$. Area $= x(\\tfrac{P}{2} - x) = -(x - \\tfrac{P}{4})^2 + \\tfrac{P^2}{16}$. Maximum at $x = \\tfrac{P}{4}$, a square.'
  },
  {
    q: 'Solve $\\sqrt[3]{2z+1} - 5 + 2\\sqrt[3]{2z+1} = -14$.',
    a: 'Let $u = \\sqrt[3]{2z+1}$: $3u - 5 = -14 \\to u = -3$. Then $2z + 1 = -27 \\to z = -14$.'
  },
  {
    q: 'Combine $\\dfrac{2}{r} + \\dfrac{3}{s}$ into a single fraction.',
    a: 'LCD $= rs$: $\\tfrac{2s}{rs} + \\tfrac{3r}{rs} = \\tfrac{2s + 3r}{rs}$.'
  },
  {
    q: 'When should you use substitution vs elimination for a two-variable system?',
    a: 'Substitution when one variable has coefficient $\\pm 1$. Elimination when two coefficients are equal, opposite, or easy to match by multiplication.'
  },
  {
    q: 'What does the vertex of $y = ax^2 + bx + c$ tell you about extreme values?',
    a: 'Minimum if $a > 0$, maximum if $a < 0$. Vertex is at $x = -\\tfrac{b}{2a}$; the $y$-value there is the extreme value.'
  },
  {
    q: 'Profit $P(x) = -2x^2 + 60x - 100$. Find the number of items that maximizes profit.',
    a: 'Opens down ($a = -2$). Vertex at $x = -\\tfrac{60}{-4} = 15$. Maximum profit at $x = 15$: $P(15) = -450 + 900 - 100 = 350$.'
  },
  {
    q: 'A rectangle has perimeter 40 m. Dimensions for maximum area?',
    a: '$L + W = 20$. Area $= L(20 - L) = -L^2 + 20L$. Vertex at $L = 10$. Square of side $10$, area $100$ m².'
  },
  {
    q: 'Water flows at rate $r$ L/min. After $t$ min the tank has $rt + 5$ L. If it holds $65$ L after $12$ min, find $r$.',
    a: '$12r + 5 = 65 \\to 12r = 60 \\to r = 5$ L/min.'
  },
  {
    q: 'Plan A: $\\$20 + 0.10n$. Plan B: $\\$30 + 0.05n$. For how many texts are they equal?',
    a: '$20 + 0.10n = 30 + 0.05n \\to 0.05n = 10 \\to n = 200$ texts.'
  },
  {
    q: 'A ball: $h(t) = -16t^2 + 32t + 6$. When does it hit the ground?',
    a: 'Solve $-16t^2 + 32t + 6 = 0$, i.e. $16t^2 - 32t - 6 = 0$. Quadratic formula: $t = \\tfrac{32 \\pm \\sqrt{1024 + 384}}{32} = \\tfrac{32 \\pm \\sqrt{1408}}{32}$. Positive root: $t \\approx 2.17$ s.'
  },
  {
    q: 'Inside $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ we wrote $\\sqrt{4a^2} = 2a$. But $\\sqrt{4a^2} = 2|a|$. Why is using $2a$ still correct?',
    a: 'The $\\pm$ in front absorbs the sign. If $a < 0$, the "$+$" branch becomes the "$-$" branch, and vice versa. The set of two roots is the same either way.'
  },
  {
    q: 'A degree-4 equation $3(y^2 + y - 1)^2 + 2(y^2 + y - 1) - 10 = 0$ looks brutal. What is the move?',
    a: 'Substitute $x = y^2 + y - 1$. The equation becomes $3x^2 + 2x - 10 = 0$. Solve for $x$, then for each $x$ solve $y^2 + y - 1 = x$ for $y$.'
  }
]

function useConfig() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'leq',
    documentTitle: 'Linear Equations | AETHER',
    learning: {
      groupTitle: 'Equations and Inequalities',
      category: 'Algebra',
      title: 'Linear Equations',
      subtitle: 'Solving, systems, quadratics, and special cases',
      sections: [
        <>
          <h2>What Is a Linear Equation?</h2>
          <p>
            A <strong>variable</strong> is a letter that stands for a number you do not yet know. An{' '}
            <strong>equation</strong> says two expressions are equal. A{' '}
            <strong>linear equation</strong> is one where the variable appears only to the first
            power: never squared, never under a root, never in a denominator.
          </p>
          <p>
            <strong>Linear:</strong>
          </p>
          <ul className="lrn-list">
            <li>{`$x - 3 = 6$`}</li>
            <li>{`$3x = 15$`}</li>
            <li>{`$7r - 8 = 55$`}</li>
          </ul>
          <p>
            <strong>Not linear:</strong>
          </p>
          <ul className="lrn-list">
            <li>{`$x^2 - 3x = 4$`} variable is squared</li>
            <li>{`$\\dfrac{1}{z - 8} + z = 2$`} variable is in a denominator</li>
            <li>{`$\\sqrt{r} + \\sqrt{r + 5} = 5$`} variable is under a root</li>
          </ul>
          <p>
            The word &ldquo;linear&rdquo; means &ldquo;line.&rdquo; The graph of a linear equation
            is a straight line. Only the first power gives that shape.
          </p>
          <div className="lrn-insight">
            <p>
              When the coefficient of {`$x$`} is nonzero, a linear equation has exactly one
              solution. The first power is one-to-one: every {`$x$`} gives a different value, so at
              most one {`$x$`} can match a given target. Squaring is not one-to-one (
              {`$2^2 = (-2)^2 = 4$`}), which is why {`$x^2 = 4$`} has two solutions.
            </p>
          </div>
        </>,

        <>
          <h2>Three Ways to Solve {`$x - 3 = 6$`}</h2>
          <h3>Method 1: Inspection</h3>
          <p>
            Read the equation aloud. &ldquo;What number minus 3 gives 6?&rdquo; You see immediately
            that {`$x = 9$`}. Inspection only works when the answer is obvious.
          </p>
          <h3>Method 2: The Number Line</h3>
          <p>
            {`$x - 3 = 6$`} says {`$x$`} sits three steps to the right of 6. So {`$x = 9$`}.
          </p>
          <div className="lrn-graph">
            <NumberLineXMinus3 C={C} />
          </div>
          <h3>Method 3: Algebra</h3>
          <p>
            The strategy is to <strong>isolate</strong> the variable: get {`$x$`} alone on one side.
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$x - 3 = 6$$`}</div>
          <p>Add 3 to both sides:</p>
          <div className="lrn-eq">{`$$x - 3 + 3 = 6 + 3$$`}</div>
          <div className="lrn-eq">{`$$x = 9$$`}</div>
          <div className="lrn-insight">
            <p>
              An equation is a balanced scale. Whatever you do to one side, do to the other, and the
              scale stays balanced. If {`$A = B$`}, then {`$A + 3 = B + 3$`}. The same change to two
              equal things keeps them equal. That is why &ldquo;do the same to both sides&rdquo;
              never breaks an equation.
            </p>
          </div>
          <p>
            Inspection works for trivial cases. Algebra works for any case, no matter how many
            operations stack on top of the variable.
          </p>
        </>,

        <>
          <h2>Isolating with Addition and Subtraction</h2>
          <p>
            To undo a number added to {`$x$`}, subtract it from both sides. To undo a number
            subtracted from {`$x$`}, add it. Addition and subtraction are inverse operations.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Solve {`$x + 7 = -19$`}</span>
              <div className="lrn-step-content">
                <p>Subtract 7 from both sides:</p>
                <div className="lrn-eq">{`$$x = -19 - 7 = -26$$`}</div>
                <p>
                  <strong>Check:</strong> {`$-26 + 7 = -19$`}.
                </p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Solve {`$x - 2\\tfrac{3}{5} = 6\\tfrac{4}{5}$`}
              </span>
              <div className="lrn-step-content">
                <p>Add {`$2\\tfrac{3}{5}$`} to both sides:</p>
                <div className="lrn-eq">{`$$x = 6\\tfrac{4}{5} + 2\\tfrac{3}{5} = 9\\tfrac{2}{5}$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve {`$-5.1 + 2 = 17 - 3.2 + x + 6.3$`}</span>
              <div className="lrn-step-content">
                <p>Combine like terms on each side first:</p>
                <div className="lrn-eq">{`$$-3.1 = 20.1 + x$$`}</div>
                <p>Subtract 20.1:</p>
                <div className="lrn-eq">{`$$x = -23.2$$`}</div>
              </div>
            </div>
          </div>
          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Tip</span>
            <p>
              Combine like terms on each side <em>before</em> moving anything across. Each extra
              step is a chance for a sign error.
            </p>
          </div>
          <p>
            Always <strong>check</strong> by substituting your answer back into the original
            equation.
          </p>
        </>,

        <>
          <h2>Isolating with Multiplication and Division</h2>
          <p>
            When {`$x$`} is multiplied by a constant, divide both sides by it. When {`$x$`} is
            divided by a constant, multiply both sides by it. Multiplication and division are
            inverse operations.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Divide both sides</span>
              <p>{`$4x = 20 \\Rightarrow x = 5$`}</p>
              <p>{`$3z = -8 \\Rightarrow z = -\\tfrac{8}{3}$`}</p>
              <p>{`$15 = -2y \\Rightarrow y = -\\tfrac{15}{2}$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Multiply both sides</span>
              <p>{`$\\dfrac{a}{9} = \\dfrac{2}{3} \\Rightarrow a = 6$`}</p>
            </div>
          </div>
          <p>
            When the coefficient is a fraction, multiply by its <strong>reciprocal</strong> in one
            step. Solve {`$-\\dfrac{2r}{5} = 12$`}: the coefficient of {`$r$`} is{' '}
            {`$-\\tfrac{2}{5}$`}. Multiply both sides by {`$-\\tfrac{5}{2}$`}:
          </p>
          <div className="lrn-eq">{`$$r = -\\tfrac{5}{2} \\cdot 12 = -30$$`}</div>
          <div className="lrn-insight">
            <p>
              The reciprocal of {`$\\tfrac{a}{b}$`} is {`$\\tfrac{b}{a}$`}. Their product is
              {` $\\tfrac{a}{b} \\cdot \\tfrac{b}{a} = 1$`}. Every nonzero number has exactly one
              reciprocal.
            </p>
          </div>
        </>,

        <>
          <h2>Multi-Step Equations</h2>
          <p>When an equation has multiple terms on each side, work in this order:</p>
          <ol className="lrn-list">
            <li>Combine like terms on each side.</li>
            <li>Move all variable terms to one side.</li>
            <li>Move all constants to the other side.</li>
            <li>Divide to isolate the variable.</li>
          </ol>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Solve {`$3t - 7 - 6 + 2t = 4t + 2 - 6t$`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>Combine like terms on each side:</p>
                <div className="lrn-eq">{`$$5t - 13 = -2t + 2$$`}</div>
                <p>Add {`$2t$`} to both sides:</p>
                <div className="lrn-eq">{`$$7t - 13 = 2$$`}</div>
                <p>Add 13 to both sides:</p>
                <div className="lrn-eq">{`$$7t = 15$$`}</div>
                <p>Divide by 7:</p>
                <div className="lrn-eq">{`$$t = \\tfrac{15}{7}$$`}</div>
                <p>
                  <strong>Check.</strong> Left:{' '}
                  {`$5 \\cdot \\tfrac{15}{7} - 13 = \\tfrac{75 - 91}{7} = -\\tfrac{16}{7}$`}. Right:{' '}
                  {`$-2 \\cdot \\tfrac{15}{7} + 2 = -\\tfrac{16}{7}$`}.
                </p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <p>
            <strong>Order matters for arithmetic cleanliness.</strong> In {`$7r - 8 = 55$`}, add 8
            first to get {`$7r = 63$`}, then divide: {`$r = 9$`}. Integers throughout. Divide first
            and you carry {`$\\tfrac{8}{7}$`} and {`$\\tfrac{55}{7}$`} through the rest of the
            solve.
          </p>
        </>,

        <>
          <h2>Clearing Fractions with the LCD</h2>
          <p>
            Fractions inside an equation are where mistakes happen. Clear them first by multiplying{' '}
            <em>every</em> term on both sides by the <strong>LCD</strong> (least common denominator,
            the smallest number divisible by all denominators).
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Solve {`$2 - y + 10 + \\tfrac{y}{2} = 3y - \\tfrac{7}{3} + 2y$`}
            </span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>Denominators are 2 and 3. LCD = 6. Multiply every term by 6:</p>
                <div className="lrn-eq">{`$$12 - 6y + 60 + 3y = 18y - 14 + 12y$$`}</div>
                <div className="lrn-eq">{`$$72 - 3y = 30y - 14$$`}</div>
                <div className="lrn-eq">{`$$86 = 33y \\implies y = \\tfrac{86}{33}$$`}</div>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <div className="lrn-insight">
            <p>
              You must multiply <em>every</em> term, not just the fractions. The rule is &ldquo;do
              the same to both sides.&rdquo; Skipping a term breaks the balance.
            </p>
          </div>
          <p>
            <strong>Cross-multiplication is the same rule.</strong> Given{' '}
            {`$\\tfrac{a}{b} = \\tfrac{c}{d}$`}, multiply both sides by {`$bd$`}. The left becomes{' '}
            {`$ad$`}; the right becomes {`$bc$`}. So {`$ad = bc$`}. It is not a new rule, just LCD
            clearing applied to a proportion. Use it only when the equation is exactly &ldquo;one
            fraction equals one fraction&rdquo; with nothing else attached.
          </p>
        </>,

        <>
          <h2>No Solution and Infinite Solutions</h2>
          <p>A linear equation has one of three outcomes:</p>
          <ol className="lrn-list">
            <li>
              <strong>One solution.</strong> The normal case.
            </li>
            <li>
              <strong>No solution.</strong> The variable cancels and you are left with a{' '}
              <strong>contradiction</strong> a false statement like {`$-1 = -5$`}.
            </li>
            <li>
              <strong>Infinitely many solutions.</strong> The variable cancels and you are left with
              an <strong>identity</strong> a statement always true like {`$5 = 5$`}.
            </li>
          </ol>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">No solution</span>
              <p>
                {`$2z + 3 - 4 = 3z - 5 - z$`}. Left: {`$2z - 1$`}. Right: {`$2z - 5$`}. Subtract{' '}
                {`$2z$`}: {`$-1 = -5$`}. False. No solution.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Infinitely many</span>
              <p>
                {`$3r + 5 + r = 7r - 2 + 7 - 3r$`}. Left: {`$4r + 5$`}. Right: {`$4r + 5$`}.
                Subtract {`$4r$`}: {`$5 = 5$`}. Always true. Every real number works.
              </p>
            </div>
          </div>
          <p>
            When the variable cancels, the equation no longer pins it down. The leftover statement
            is either always true (every value works) or always false (no value works). There is no
            middle ground.
          </p>
        </>,

        <>
          <h2>Word Problems: English to Algebra</h2>
          <p>A reliable five-step process:</p>
          <ol className="lrn-list">
            <li>Define the variable. Say exactly what it represents.</li>
            <li>Write algebraic expressions for every quantity.</li>
            <li>Set up the equation from the relationship the problem states.</li>
            <li>Solve and check.</li>
            <li>Answer the question the problem actually asked.</li>
          </ol>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                &ldquo;Three less than two times a number equals four times the number plus
                eight.&rdquo;
              </span>
              <div className="lrn-step-content">
                <p>
                  Let {`$x$`} be the number. &ldquo;Two times the number&rdquo; is {`$2x$`}.
                  &ldquo;Three less than that&rdquo; is {`$2x - 3$`}. The right side is {`$4x + 8$`}
                  .
                </p>
                <div className="lrn-eq">{`$$2x - 3 = 4x + 8 \\implies -11 = 2x \\implies x = -\\tfrac{11}{2}$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Pill cost (AMC 10)</span>
              <div className="lrn-step-content">
                <p>
                  14 days, {`$2x + 1$`} pills per day at {`$\\$1$`} each, total {`$\\$546$`}.
                </p>
                <div className="lrn-eq">{`$$14(2x + 1) = 546 \\implies 2x + 1 = 39 \\implies x = 19$$`}</div>
                <p>
                  Divide by 14 first. Expanding {`$14(2x+1) = 28x + 14$`} costs two extra steps for
                  no gain.
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              <strong>The bogus variable error.</strong> Define each variable once and stick with
              it. If {`$x$`} is your current age, then your age six years ago is {`$x - 6$`}, not{' '}
              {`$x$`}. Reusing {`$x$`} to mean two different things is the most common error in word
              problems.
            </p>
          </div>
        </>,

        <>
          <h2>Linear Equations in Disguise</h2>
          <p>
            When the same complex expression appears more than once, name it. The equation becomes
            linear in the new name. Solve the linear equation, then unwind the substitution.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                Square root: solve {`$3\\sqrt{x} - 2 = 30 - \\sqrt{x}$`}
              </span>
              <div className="lrn-step-content">
                <p>Let {`$y = \\sqrt{x}$`}:</p>
                <div className="lrn-eq">{`$$3y - 2 = 30 - y \\implies 4y = 32 \\implies y = 8$$`}</div>
                <p>
                  Recover {`$x$`}: {`$\\sqrt{x} = 8 \\implies x = 64$`}.
                </p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Variable in denominator: solve {`$\\dfrac{3}{x} - 2 = 7 + \\dfrac{2}{x}$`}
              </span>
              <div className="lrn-step-content">
                <p>Move the {`$\\tfrac{1}{x}$`} terms together:</p>
                <div className="lrn-eq">{`$$\\tfrac{1}{x} = 9 \\implies x = \\tfrac{1}{9}$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Cube root: solve {`$\\sqrt[3]{2z+1} - 5 + 2\\sqrt[3]{2z+1} = -14$`}
              </span>
              <div className="lrn-step-content">
                <p>Let {`$u = \\sqrt[3]{2z+1}$`}:</p>
                <div className="lrn-eq">{`$$3u - 5 = -14 \\implies u = -3$$`}</div>
                <p>
                  Recover {`$z$`}: {`$2z + 1 = -27 \\implies z = -14$`}.
                </p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Rational equation: solve {`$\\dfrac{x}{x-1} + \\dfrac{2}{3} = \\dfrac{2}{x-1}$`}
              </span>
              <div className="lrn-step-content">
                <p>Multiply every term by {`$3(x-1)$`}:</p>
                <div className="lrn-eq">{`$$3x + 2(x-1) = 6 \\implies 5x = 8 \\implies x = \\tfrac{8}{5}$$`}</div>
                <p>
                  Check that {`$x \\ne 1$`} (so we did not multiply by zero).{' '}
                  {`$\\tfrac{8}{5} \\ne 1$`}. Valid.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <h2>Extraneous Solutions</h2>
          <p>
            An <strong>extraneous solution</strong> satisfies a step you took during solving but not
            the original equation. They come from two sources:
          </p>
          <ul className="lrn-list">
            <li>Raising both sides to an even power (squaring is the usual case).</li>
            <li>Multiplying by an expression that contains the variable.</li>
          </ul>
          <p>
            <strong>Example.</strong> Solve {`$\\sqrt{r} + 13 = 9 - \\sqrt{r}$`}. Isolating gives
            {` $2\\sqrt{r} = -4$`}, so {`$\\sqrt{r} = -2$`}. But {`$\\sqrt{r}$`} is never negative
            for real {`$r$`}. No real solution exists. If you square both sides anyway, you get{' '}
            {`$r = 4$`}, which fails the original: {`$\\sqrt{4} + 13 = 15 \\ne 7 = 9 - \\sqrt{4}$`}.
            So {`$r = 4$`} is extraneous.
          </p>
          <p>
            <strong>Why squaring invents solutions.</strong> If {`$a = b$`}, then {`$a^2 = b^2$`}.
            But
            {` $a^2 = b^2$`} also allows {`$a = -b$`}. The squared equation accepts the
            negative-version solutions too.
          </p>
          <p>
            <strong>Why denominators invent solutions.</strong> Multiplying through by an expression
            with the variable in it might multiply by zero. The equation{' '}
            {`$0 \\cdot A = 0 \\cdot B$`} holds even when {`$A \\ne B$`}, so the cleared equation is
            weaker than the original.
          </p>
          <p>
            <strong>Rule:</strong> always plug your answer back into the original whenever you
            squared (or raised to any even power) or cleared a variable from a denominator.
          </p>
        </>,

        <>
          <h2>Multi-Variable Expressions</h2>
          <p>
            A <strong>multi-variable expression</strong> contains more than one variable. The rules
            of one-variable algebra carry over unchanged.
          </p>
          <h3>Evaluating expressions</h3>
          <p>
            To evaluate, substitute numbers for letters. Take {`$r = 3$`} and {`$s = -2$`}:
          </p>
          <ul className="lrn-list">
            <li>{`$r + s = 3 + (-2) = 1$`}</li>
            <li>{`$2rs = 2 \\cdot 3 \\cdot (-2) = -12$`}</li>
            <li>{`$r^2 + s^2 = 9 + 4 = 13$`}</li>
            <li>{`$\\dfrac{r^2 - 3r}{4s} = \\dfrac{9 - 9}{-8} = 0$`}</li>
            <li>{`$(r - s)^2 + (r + s)^2 = 5^2 + 1^2 = 26$`}</li>
          </ul>
          <h3>Coefficients and products</h3>
          <p>
            A <strong>coefficient</strong> is the constant multiplying a product of variables. In{' '}
            {`$3xy$`}, the coefficient is 3.
          </p>
          <p>
            Group identical letters into powers: {`$a \\cdot b \\cdot a \\cdot b = a^2 b^2$`}.
            Cancel common factors in fractions: {`$\\dfrac{3xy}{6xz} = \\dfrac{y}{2z}$`} (the{' '}
            {`$x$`} cancels; {`$\\tfrac{3}{6} = \\tfrac{1}{2}$`}).
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Like terms</span>
            <div className="lrn-definition-desc">
              <p>
                Same variables, same powers. {`$3xy$`} and {`$-7xy$`} are like terms. {`$3xy$`} and{' '}
                {`$3x^2 y$`} are not (powers of {`$x$`} differ). Only like terms combine.
              </p>
            </div>
          </div>
          <h3>Distribute and factor</h3>
          <p>Distributing multiplies through:</p>
          <div className="lrn-eq">{`$$7(2x + 4y) = 14x + 28y$$`}</div>
          <p>Factoring pulls a common factor out the reverse:</p>
          <div className="lrn-eq">{`$$3x^2 + 2xz = x(3x + 2z)$$`}</div>
          <p>Verify by multiplying back: {`$x \\cdot 3x + x \\cdot 2z = 3x^2 + 2xz$`}.</p>
          <h3>Combining fractions</h3>
          <p>
            Combine {`$\\dfrac{2}{r} + \\dfrac{3}{s}$`} using LCD {`$rs$`}:
          </p>
          <div className="lrn-eq">{`$$\\frac{2}{r} + \\frac{3}{s} = \\frac{2s}{rs} + \\frac{3r}{rs} = \\frac{2s + 3r}{rs}$$`}</div>
        </>,

        <>
          <h2>Solving for One Variable in Terms of Others</h2>
          <p>
            When the constants are letters instead of numbers, the moves are the same. Each line
            below is the same idea, one step harder:
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                Solve {`$x + b = c$`} for {`$x$`}
              </span>
              <div className="lrn-step-content">
                <p>Subtract {`$b$`}:</p>
                <div className="lrn-eq">{`$$x = c - b$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Solve {`$ax = c$`} for {`$x$`}
              </span>
              <div className="lrn-step-content">
                <p>
                  Divide by {`$a$`}, with {`$a \\ne 0$`}:
                </p>
                <div className="lrn-eq">{`$$x = \\frac{c}{a}$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Solve {`$ax + b = c$`} for {`$x$`}
              </span>
              <div className="lrn-step-content">
                <p>
                  Subtract {`$b$`}, then divide by {`$a$`}:
                </p>
                <div className="lrn-eq">{`$$x = \\frac{c - b}{a} \\quad (a \\ne 0)$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Solve {`$ax + bc = 3c - 2d^2 x$`} for {`$x$`}
              </span>
              <div className="lrn-step-content">
                <p>Collect {`$x$`} terms on the left; constants on the right:</p>
                <div className="lrn-eq">{`$$ax + 2d^2 x = 3c - bc$$`}</div>
                <p>Factor out {`$x$`} (reverse distribute):</p>
                <div className="lrn-eq">{`$$x(a + 2d^2) = 3c - bc$$`}</div>
                <p>Divide, with {`$a + 2d^2 \\ne 0$`}:</p>
                <div className="lrn-eq">{`$$x = \\frac{3c - bc}{a + 2d^2}$$`}</div>
              </div>
            </div>
          </div>
          <div className="lrn-insight">
            <p>
              Without the factoring step you cannot isolate {`$x$`} when it appears in two terms.
              Reverse distribution is the key move.
            </p>
          </div>
        </>,

        <>
          <h2>Systems of Equations: Two Variables</h2>
          <p>
            A single two-variable equation like {`$ax + by = c$`} has infinitely many solutions:
            pick any {`$x$`}, solve for {`$y$`}. A <strong>system</strong> of two equations forces
            both to hold at once. Two lines usually meet at exactly one point.
          </p>
          <div className="lrn-graph">
            <TwoLinesViz />
          </div>
          <h3>Substitution</h3>
          <p>
            Solve one equation for one variable, then plug that expression into the other. Use this
            when one variable in one equation has coefficient {`$\\pm 1$`}.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Solve {`$x + 3y = 4$`}; {`$-2x + 5y = -30$`}
            </span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>From the first: {`$x = 4 - 3y$`}. Substitute into the second:</p>
                <div className="lrn-eq">{`$$-2(4 - 3y) + 5y = -30 \\implies 11y = -22 \\implies y = -2$$`}</div>
                <p>Back-substitute: {`$x = 4 - 3(-2) = 10$`}.</p>
                <p>
                  <strong>Check.</strong> {`$10 + 3(-2) = 4$`} and {`$-2(10) + 5(-2) = -30$`}.
                </p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <h3>Elimination</h3>
          <p>
            Add or subtract the equations (or multiples of them) so one variable cancels. Use this
            when two coefficients are equal, opposite, or easy to match by multiplication.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Solve {`$2x + 3y = -11$`}; {`$5x - 3y = 67$`}
            </span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>
                  The {`$y$`} coefficients are {`$+3$`} and {`$-3$`}, opposites. Add the equations:
                </p>
                <div className="lrn-eq">{`$$7x = 56 \\implies x = 8$$`}</div>
                <p>Back-substitute: {`$2(8) + 3y = -11 \\implies y = -9$`}.</p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <p>Either method works for any system. Choose the one that creates fewer fractions.</p>
        </>,

        <>
          <h2>Three Outcomes for a Two-Variable System</h2>
          <p>
            Two lines in a plane either cross at one point, run parallel, or coincide. That gives
            three cases for the system:
          </p>
          <ol className="lrn-list">
            <li>
              <strong>One solution.</strong> Lines cross at one point.
            </li>
            <li>
              <strong>No solution.</strong> Lines are parallel. Algebra gives a contradiction like{' '}
              {`$0 = 9$`}.
            </li>
            <li>
              <strong>Infinitely many solutions.</strong> Equations describe the same line. Algebra
              gives an identity like {`$0 = 0$`}.
            </li>
          </ol>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Infinitely many</span>
              <p>
                {`$-u + 3v = 8$`}; {`$10v - 2u = 16 + 4v$`}. Simplify the second to{' '}
                {`$-u + 3v = 8$`} same equation. Parametric: {`$(u, v) = (3t - 8, t)$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">No solution</span>
              <p>
                {`$2t - r = 1$`}; {`$5t = 2.5r + 7$`}. From the first, {`$r = 2t - 1$`}. Substitute:
                {` $5t = 2.5(2t - 1) + 7 \\Rightarrow 5t = 5t + 4.5 \\Rightarrow 0 = 4.5$`}. No
                solution.
              </p>
            </div>
          </div>
          <p>
            <strong>Parallel test.</strong> For {`$a_1 x + b_1 y = c_1$`} and{' '}
            {`$a_2 x + b_2 y = c_2$`}, the lines are parallel when {`$a_1 : b_1 = a_2 : b_2$`} but
            the constants do not match the same ratio.
          </p>
        </>,

        <>
          <h2>Systems in Disguise</h2>
          <p>
            Same trick as before. When the same non-linear chunk appears more than once across the
            system, name it. The system becomes linear in the new names. Solve, then unwind.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                Square roots: {`$\\sqrt{a} + \\sqrt{b} = 37$`}; {`$\\sqrt{a} = 2\\sqrt{b} + 10$`}
              </span>
              <div className="lrn-step-content">
                <p>
                  Let {`$u = \\sqrt{a}$`} and {`$v = \\sqrt{b}$`}. Substitute the second into the
                  first:
                </p>
                <div className="lrn-eq">{`$$(2v + 10) + v = 37 \\implies 3v = 27 \\implies v = 9, \\; u = 28$$`}</div>
                <p>
                  Recover: {`$a = u^2 = 784$`}, {`$b = v^2 = 81$`}.
                </p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Reciprocals: {`$\\dfrac{3}{x} - \\dfrac{2}{y} = -\\dfrac{7}{2}$`};{' '}
                {`$\\dfrac{6}{x} + \\dfrac{4}{y} = 9$`}
              </span>
              <div className="lrn-step-content">
                <p>
                  Let {`$r = \\tfrac{1}{x}$`} and {`$s = \\tfrac{1}{y}$`}. The system becomes{' '}
                  {`$3r - 2s = -\\tfrac{7}{2}$`} and {`$6r + 4s = 9$`}. Multiply the first by 2 and
                  add:
                </p>
                <div className="lrn-eq">{`$$12r = 2 \\implies r = \\tfrac{1}{6}, \\; s = 2$$`}</div>
                <p>
                  Recover: {`$x = 6$`}, {`$y = \\tfrac{1}{2}$`}.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <h2>Three-Variable Systems</h2>
          <p>
            Strip one variable at a time. Use substitution or elimination to reduce three equations
            in three unknowns to two equations in two unknowns. Then reduce again.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">
              Solve {`$x + 3y - 4z = 25$`}; {`$-2x + 5y + 7z = -66$`}; {`$3x - 2y + 3z = 7$`}
            </span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>From (1): {`$x = 25 - 3y + 4z$`}. Substitute into (2) and (3):</p>
                <div className="lrn-eq">{`$$11y - z = -16 \\quad \\text{and} \\quad -11y + 15z = -68$$`}</div>
                <p>
                  Add the two: {`$14z = -84 \\Rightarrow z = -6$`}. Then {`$y = -2$`}, {`$x = 7$`}.
                </p>
                <p>Solution: {`$(x, y, z) = (7, -2, -6)$`}.</p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <div className="lrn-insight">
            <p>
              In general, {`$n$`} unknowns need {`$n$`} independent equations. Each elimination step
              removes one unknown and one equation, until you reach one equation in one unknown.
            </p>
          </div>
        </>,

        <>
          <h2>The Identity Principle</h2>
          <p>
            If {`$Ax + B = Cx + D$`} is true for <em>every</em> value of {`$x$`}, then {`$A = C$`}{' '}
            and {`$B = D$`}.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>The equation holds for every {`$x$`}, so in particular:</p>
                <ul className="lrn-list">
                  <li>
                    Plug {`$x = 0$`}: {`$B = D$`}.
                  </li>
                  <li>
                    Plug {`$x = 1$`}: {`$A + B = C + D$`}. Subtract {`$B = D$`}: {`$A = C$`}.
                  </li>
                </ul>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <p>
            Use this when an equation must hold for all values of a variable. It lets you match
            coefficients directly rather than solving.
          </p>
        </>,

        <>
          <h2>Completing the Square</h2>
          <p>
            Goal: rewrite {`$x^2 + px$`} as a perfect square minus a constant, so the quadratic
            opens up into a single squared term. Take half the linear coefficient and square it.
          </p>
          <div className="lrn-eq">{`$$\\left(x + \\tfrac{p}{2}\\right)^2 = x^2 + p x + \\tfrac{p^2}{4}$$`}</div>
          <p>So adding and subtracting {`$\\tfrac{p^2}{4}$`}:</p>
          <div className="lrn-eq lrn-eq-hero">{`$$x^2 + p x = \\left(x + \\tfrac{p}{2}\\right)^2 - \\left(\\tfrac{p}{2}\\right)^2$$`}</div>
          <p>Apply this to the monic quadratic {`$x^2 + px + q = 0$`}:</p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation of the monic formula</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <div className="lrn-eq">{`$$\\left(x + \\tfrac{p}{2}\\right)^2 = \\tfrac{p^2}{4} - q$$`}</div>
                <p>Take the square root, remembering the {`$\\pm$`}:</p>
                <div className="lrn-eq">{`$$x + \\tfrac{p}{2} = \\pm \\sqrt{\\tfrac{p^2}{4} - q}$$`}</div>
                <div className="lrn-eq">{`$$x = -\\tfrac{p}{2} \\pm \\sqrt{\\tfrac{p^2}{4} - q}$$`}</div>
                <p>
                  The expression {`$D = \\tfrac{p^2}{4} - q$`} is the <strong>discriminant</strong>.
                </p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <div className="lrn-callout">
            <p>
              <strong>Three cases:</strong>
            </p>
            <ul className="lrn-list">
              <li>{`$D > 0$`}: two distinct real roots.</li>
              <li>
                {`$D = 0$`}: one repeated real root at {`$x = -\\tfrac{p}{2}$`}.
              </li>
              <li>{`$D < 0$`}: no real roots (no real number squares to a negative).</li>
            </ul>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$x^2 + 3x + 1 = 0$`}</span>
              <p>
                {`$p = 3, q = 1$`}. {`$D = \\tfrac{9}{4} - 1 = \\tfrac{5}{4} > 0$`}.
              </p>
              <div className="lrn-eq">{`$$x = -\\tfrac{3}{2} \\pm \\tfrac{\\sqrt{5}}{2}$$`}</div>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$x^2 - 2x + 2 = 0$`}</span>
              <p>
                Rewrite: {`$(x - 1)^2 + 1 = 0$`}. A real square is never negative, so no real number
                makes this zero. {`$D = 1 - 2 = -1 < 0$`} confirms it.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Vieta&rsquo;s Theorem</h2>
          <p>
            <strong>
              For {`$x^2 + px + q = 0$`} with roots {`$\\alpha, \\beta$`}:
            </strong>
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\alpha + \\beta = -p, \\qquad \\alpha\\beta = q$$`}</div>
          <p>
            The sum and product of the roots can be read straight from the coefficients, no solving
            needed.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Proof via the formula</span>
              <div className="lrn-eq">{`$$\\alpha + \\beta = \\left(-\\tfrac{p}{2} + \\sqrt{D}\\right) + \\left(-\\tfrac{p}{2} - \\sqrt{D}\\right) = -p$$`}</div>
              <div className="lrn-eq">{`$$\\alpha \\beta = \\left(-\\tfrac{p}{2}\\right)^2 - D = \\tfrac{p^2}{4} - \\left(\\tfrac{p^2}{4} - q\\right) = q$$`}</div>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Proof via factoring (stronger)</span>
              <div className="lrn-eq">{`$$x^2 + px + q = (x - \\alpha)(x - \\beta) = x^2 - (\\alpha + \\beta) x + \\alpha\\beta$$`}</div>
              <p>Match coefficients to get both relations at once. Works even when {`$D = 0$`}.</p>
            </div>
          </div>
          <p>
            <strong>Cubic version.</strong> For {`$x^3 + p x^2 + q x + r = 0$`} with roots{' '}
            {`$\\alpha, \\beta, \\gamma$`}:
          </p>
          <div className="lrn-eq">{`$$\\alpha + \\beta + \\gamma = -p, \\qquad \\alpha\\beta + \\alpha\\gamma + \\beta\\gamma = q, \\qquad \\alpha\\beta\\gamma = -r$$`}</div>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Compute {`$x_1^2 + x_2^2$`}</span>
              <div className="lrn-step-content">
                <div className="lrn-eq">{`$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2 x_1 x_2 = p^2 - 2q$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Build a quadratic from a root {`$4 - \\sqrt{7}$`}
              </span>
              <div className="lrn-step-content">
                <p>
                  With integer coefficients, the conjugate {`$4 + \\sqrt{7}$`} must also be a root.
                  Sum {`$= 8$`}, product {`$= 16 - 7 = 9$`}.
                </p>
                <div className="lrn-eq">{`$$x^2 - 8x + 9 = 0$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Opposite-sign test</span>
              <div className="lrn-step-content">
                <p>
                  {`$x^2 + px + q = 0$`} has two roots of opposite sign exactly when {`$q < 0$`}.
                  Two numbers have opposite signs precisely when their product is negative, and the
                  product equals {`$q$`}.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <h2>The General Quadratic Formula</h2>
          <p>
            For any {`$a x^2 + b x + c = 0$`} with {`$a \\ne 0$`}, divide through by {`$a$`} and
            apply the monic formula with {`$p = \\tfrac{b}{a}$`} and {`$q = \\tfrac{c}{a}$`}.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <div className="lrn-eq">{`$$x^2 + \\tfrac{b}{a} x + \\tfrac{c}{a} = 0$$`}</div>
                <div className="lrn-eq">{`$$x = -\\tfrac{b}{2a} \\pm \\sqrt{\\tfrac{b^2}{4 a^2} - \\tfrac{c}{a}} = -\\tfrac{b}{2a} \\pm \\sqrt{\\tfrac{b^2 - 4 a c}{4 a^2}}$$`}</div>
                <p>
                  Now {`$\\sqrt{4 a^2} = 2|a|$`}, not {`$2a$`}. But the {`$\\pm$`} in front absorbs
                  the sign: if {`$a < 0$`}, the &ldquo;{`$+$`}&rdquo; branch and the &ldquo;{`$-$`}
                  &rdquo; branch swap roles, and the pair of roots is the same. So we can safely
                  write {`$2a$`} in the denominator:
                </p>
                <div className="lrn-eq lrn-eq-hero">{`$$x = \\frac{-b \\pm \\sqrt{b^2 - 4 a c}}{2a}$$`}</div>
                <p>The discriminant is {`$D = b^2 - 4 a c$`}. Same three cases as before.</p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Factor {`$2x^2 + 5x - 3$`}</span>
              <div className="lrn-step-content">
                <p>
                  {`$D = 25 + 24 = 49$`}. {`$x = \\tfrac{-5 \\pm 7}{4}$`}, giving{' '}
                  {`$x = \\tfrac{1}{2}$`} or {`$x = -3$`}.
                </p>
                <div className="lrn-eq">{`$$2x^2 + 5x - 3 = 2\\left(x - \\tfrac{1}{2}\\right)(x + 3) = (2x - 1)(x + 3)$$`}</div>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Two-variable factor: {`$2a^2 + 5ab - 3b^2$`}</span>
              <div className="lrn-step-content">
                <p>
                  Divide everything by {`$b^2$`} and let {`$u = \\tfrac{a}{b}$`}:{' '}
                  {`$2u^2 + 5u - 3 = (2u - 1)(u + 3)$`}. Multiply back by {`$b^2$`}:
                </p>
                <div className="lrn-eq">{`$$2a^2 + 5ab - 3b^2 = (2a - b)(a + 3b)$$`}</div>
              </div>
            </div>
          </div>
          <h3>Reciprocal-roots identity</h3>
          <p>
            If the roots of {`$a x^2 + b x + c = 0$`} are {`$x_1$`} and {`$x_2$`}, then the roots of{' '}
            {`$c x^2 + b x + a = 0$`} are {`$\\tfrac{1}{x_1}$`} and {`$\\tfrac{1}{x_2}$`}.
          </p>
          <p>
            <strong>Proof.</strong> Let {`$y = \\tfrac{1}{x}$`}. Substitute into{' '}
            {`$a x^2 + b x + c = 0$`}:
          </p>
          <div className="lrn-eq">{`$$\\frac{a}{y^2} + \\frac{b}{y} + c = 0$$`}</div>
          <p>Multiply through by {`$y^2$`}:</p>
          <div className="lrn-eq">{`$$a + b y + c y^2 = 0 \\iff c y^2 + b y + a = 0$$`}</div>
          <p>
            So each root {`$x_i$`} of the first becomes a root {`$y_i = \\tfrac{1}{x_i}$`} of the
            second.
          </p>
          <h3>The alternative formula</h3>
          <p>
            Multiply the standard formula by{' '}
            {`$\\tfrac{-b \\mp \\sqrt{b^2 - 4ac}}{-b \\mp \\sqrt{b^2 - 4ac}}$`}. The numerator
            collapses to {`$2c$`}, and you get
          </p>
          <div className="lrn-eq">{`$$x = \\frac{2c}{-b \\mp \\sqrt{b^2 - 4 a c}}$$`}</div>
          <p>
            Use this when {`$|b|$`} is large. The standard form subtracts two nearly equal numbers
            (catastrophic cancellation), losing precision. The alternative form replaces that
            subtraction with one in the denominator that does not lose precision.
          </p>
          <p>
            <strong>As {`$a \\to 0$`}:</strong> the equation degenerates to {`$bx + c = 0$`}, a
            linear equation with the single root {`$x = -\\tfrac{c}{b}$`}. The alternative formula
            gives exactly that in the limit: {`$x = \\tfrac{2c}{-2b} = -\\tfrac{c}{b}$`}. The other
            root flies to infinity matching the picture of one branch of the parabola flattening out
            as {`$a$`} vanishes.
          </p>
        </>,

        <>
          <h2>The Parabola: Graph of a Quadratic</h2>
          <p>
            The graph of {`$y = a x^2 + b x + c$`} is a <strong>parabola</strong>.
          </p>
          <div className="lrn-graph">
            <ParabolaPlotViz />
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Effect of {`$a$`}</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>{`$a > 0$`}: opens up. Vertex is the minimum.</li>
                <li>{`$a < 0$`}: opens down. Vertex is the maximum.</li>
                <li>
                  {`$|a| > 1$`}: narrower. {`$|a| < 1$`}: wider.
                </li>
              </ul>
            </div>
          </div>
          <h3>Building the parabola in three stages</h3>
          <p>
            Start with {`$y = x^2$`} and apply three transformations <em>in this order</em>:
          </p>
          <ol className="lrn-list">
            <li>
              <strong>Stretch vertically by {`$a$`}:</strong> {`$y = a x^2$`}.
            </li>
            <li>
              <strong>Shift horizontally by {`$m$`}:</strong> {`$y = a(x + m)^2$`}. Positive {`$m$`}{' '}
              moves left; negative {`$m$`} moves right.
            </li>
            <li>
              <strong>Shift vertically by {`$n$`}:</strong> {`$y = a(x + m)^2 + n$`}. Positive{' '}
              {`$n$`} moves up; negative {`$n$`} moves down.
            </li>
          </ol>
          <p>
            <strong>Order matters.</strong> Doing the horizontal shift before the vertical stretch
            would shift the original parabola but stretch the shifted one a different final curve.
            The stages above are the order baked into the formula.
          </p>
          <h3>Vertex form and standard form</h3>
          <p>
            In <strong>vertex form</strong> {`$y = a(x + m)^2 + n$`}, the vertex sits at{' '}
            {`$(-m, n)$`}. (The squared term is zero exactly when {`$x = -m$`}, leaving {`$y = n$`}
            .)
          </p>
          <p>Completing the square on standard form connects the two:</p>
          <div className="lrn-eq">{`$$a x^2 + b x + c = a\\left(x + \\tfrac{b}{2a}\\right)^2 - \\tfrac{b^2}{4a} + c$$`}</div>
          <p>So the vertex is at {`$\\left(-\\tfrac{b}{2a},\\; c - \\tfrac{b^2}{4a}\\right)$`}.</p>
          <h3>Reading signs from the graph</h3>
          <ul className="lrn-list">
            <li>
              <strong>Sign of {`$a$`}:</strong> if the parabola holds water, {`$a > 0$`}; if it
              spills, {`$a < 0$`}.
            </li>
            <li>
              <strong>Sign of {`$c$`}:</strong> the {`$y$`}-intercept is {`$(0, c)$`}. Above the{' '}
              {`$x$`}-axis means {`$c > 0$`}; below means {`$c < 0$`}.
            </li>
            <li>
              <strong>Sign of {`$b$`}:</strong> at {`$x = 0$`}, the slope of the parabola is {`$b$`}{' '}
              (because the derivative {`$2 a x + b$`} at {`$x = 0$`} is just {`$b$`}). Curve
              climbing through the {`$y$`}-axis: {`$b > 0$`}. Descending: {`$b < 0$`}.
            </li>
          </ul>
        </>,

        <>
          <h2>Quadratic Inequalities</h2>
          <p>
            A quadratic inequality asks: for which {`$x$`} is the quadratic positive, negative, or
            zero?
          </p>
          <p>
            <strong>Sign-chart method:</strong>
          </p>
          <ol className="lrn-list">
            <li>Find the roots (where the expression equals zero).</li>
            <li>Mark them on a number line. They split it into intervals.</li>
            <li>Test one point per interval to determine the sign.</li>
            <li>The quadratic keeps the same sign throughout each interval.</li>
          </ol>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Solve {`$x^2 - 3x + 2 < 0$`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>Factor: {`$(x - 1)(x - 2) < 0$`}. Roots are 1 and 2.</p>
                <p>
                  Test {`$x = 0$`}: {`$(-1)(-2) = 2 > 0$`}. Not in the solution.
                </p>
                <p>
                  Test {`$x = 1.5$`}: {`$(0.5)(-0.5) = -0.25 < 0$`}. In the solution.
                </p>
                <p>
                  Test {`$x = 3$`}: {`$(2)(1) = 2 > 0$`}. Not in the solution.
                </p>
                <p>Solution: {`$1 < x < 2$`}.</p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <div className="lrn-insight">
            <p>
              For a parabola opening up: negative between its roots, positive outside them. The
              graph confirms it the parabola dips below the {`$x$`}-axis exactly between the two
              crossings.
            </p>
          </div>
        </>,

        <>
          <h2>Maximum and Minimum Values</h2>
          <p>
            The vertex of a parabola gives its extreme value: maximum if {`$a < 0$`}, minimum if{' '}
            {`$a > 0$`}.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Maximize {`$x(1 - x)$`}</span>
              <div className="lrn-step-content">
                <div className="lrn-eq">{`$$x(1 - x) = -x^2 + x = -\\left(x - \\tfrac{1}{2}\\right)^2 + \\tfrac{1}{4}$$`}</div>
                <p>
                  Coefficient of {`$x^2$`} is {`$-1 < 0$`}, so the parabola opens down. Maximum is{' '}
                  {`$\\tfrac{1}{4}$`} at {`$x = \\tfrac{1}{2}$`}.
                </p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Fixed perimeter: the square wins on area</span>
              <div className="lrn-step-content">
                <p>
                  Perimeter {`$P$`} fixed. Sides {`$x$`} and {`$\\tfrac{P}{2} - x$`}. Area:
                </p>
                <div className="lrn-eq">{`$$A(x) = x\\!\\left(\\tfrac{P}{2} - x\\right) = -\\!\\left(x - \\tfrac{P}{4}\\right)^2 + \\tfrac{P^2}{16}$$`}</div>
                <p>
                  Maximum at {`$x = \\tfrac{P}{4}$`}: both sides equal {`$\\tfrac{P}{4}$`}, a
                  square.
                </p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Fixed area: the square wins on perimeter</span>
              <div className="lrn-step-content">
                <p>
                  Area {`$A$`} fixed. Sides {`$x$`} and {`$\\tfrac{A}{x}$`}. Perimeter:
                </p>
                <div className="lrn-eq">{`$$P(x) = 2x + \\tfrac{2A}{x}$$`}</div>
                <p>
                  Set {`$P(x) = c$`}, rewrite as {`$2x^2 - cx + 2A = 0$`}. Real {`$x$`} requires{' '}
                  {`$D = c^2 - 16A \\ge 0$`}, so {`$c \\ge 4\\sqrt{A}$`}. Minimum {`$4\\sqrt{A}$`}{' '}
                  at {`$x = \\sqrt{A}$`}: both sides {`$\\sqrt{A}$`}, a square again.
                </p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Minimize {`$x + \\tfrac{2}{x}$`} for positive {`$x$`}
              </span>
              <div className="lrn-step-content">
                <p>
                  Set {`$x + \\tfrac{2}{x} = c$`}, rewrite as {`$x^2 - cx + 2 = 0$`}. Real {`$x$`}{' '}
                  needs {`$D = c^2 - 8 \\ge 0$`}, so {`$c \\ge 2\\sqrt{2}$`}. Minimum is{' '}
                  {`$2\\sqrt{2}$`} at {`$x = \\sqrt{2}$`}.
                </p>
                <p>
                  Cross-check with AM-GM:{' '}
                  {`$\\dfrac{x + \\tfrac{2}{x}}{2} \\ge \\sqrt{x \\cdot \\tfrac{2}{x}} = \\sqrt{2}$`}
                  .
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <h2>Biquadratic Equations</h2>
          <p>
            A <strong>biquadratic equation</strong> has the form {`$a x^4 + b x^2 + c = 0$`}: only
            even powers, no odd powers. Substitute {`$y = x^2$`} to collapse it into a quadratic in{' '}
            {`$y$`}.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Solve {`$x^4 - 3x^2 + 2 = 0$`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>
                  Let {`$y = x^2$`}. Then {`$x^4 = y^2$`}, and the equation becomes:
                </p>
                <div className="lrn-eq">{`$$y^2 - 3y + 2 = 0 \\implies (y - 1)(y - 2) = 0$$`}</div>
                <p>
                  For each {`$y$`}, recover {`$x = \\pm \\sqrt{y}$`}:
                </p>
                <ul className="lrn-list">
                  <li>{`$y = 1 \\implies x = \\pm 1$`}</li>
                  <li>{`$y = 2 \\implies x = \\pm \\sqrt{2}$`}</li>
                </ul>
                <p>Four real solutions.</p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <h3>Possible solution counts</h3>
          <p>
            A biquadratic can have 0, 1, 2, 3, or 4 real solutions but never 5. Each positive{' '}
            {`$y$`}-root gives a pair {`$\\pm \\sqrt{y}$`}; the value {`$y = 0$`} gives only{' '}
            {`$x = 0$`}; negative {`$y$`}-roots give no real {`$x$`}.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>0:</strong> both {`$y$`}-roots negative, e.g. {`$x^4 + 3x^2 + 2 = 0$`} (roots{' '}
              {`$y = -1, -2$`}).
            </li>
            <li>
              <strong>1:</strong> one {`$y$`}-root is zero, the other negative, e.g.{' '}
              {`$x^4 + x^2 = 0$`} (roots {`$y = 0, -1$`}; only {`$x = 0$`}).
            </li>
            <li>
              <strong>2:</strong> one positive {`$y$`}-root, one negative.
            </li>
            <li>
              <strong>3:</strong> one {`$y$`}-root is zero, the other positive.
            </li>
            <li>
              <strong>4:</strong> both {`$y$`}-roots positive (the worked case above).
            </li>
          </ul>
          <h3>Same idea, higher powers</h3>
          <p>
            <strong>{`$a x^6 + b x^3 + c = 0$`}:</strong> substitute {`$y = x^3$`}. Each real{' '}
            {`$y$`} gives exactly one real cube root, so the solution count is 0, 1, or 2 except if{' '}
            {`$a = b = c = 0$`}, in which case every {`$x$`} works.
          </p>
          <p>
            <strong>{`$a x^8 + b x^4 + c = 0$`}:</strong> substitute {`$y = x^4$`}. Each positive{' '}
            {`$y$`} gives two real fourth roots; zero gives one; negative gives none. Same counting
            as the biquadratic: 0, 1, 2, 3, or 4.
          </p>
        </>,

        <>
          <h2>Symmetric (Palindrome) Equations</h2>
          <p>
            A <strong>symmetric equation</strong> has coefficients that read the same forwards and
            backwards. Take {`$2x^4 + 7x^3 + 4x^2 + 7x + 2 = 0$`}: coefficients 2, 7, 4, 7, 2.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Solve {`$2x^4 + 7x^3 + 4x^2 + 7x + 2 = 0$`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>
                  The constant term is 2, so {`$x = 0$`} is not a root. Divide every term by{' '}
                  {`$x^2$`} and group symmetric pairs:
                </p>
                <div className="lrn-eq">{`$$2\\!\\left(x^2 + \\tfrac{1}{x^2}\\right) + 7\\!\\left(x + \\tfrac{1}{x}\\right) + 4 = 0$$`}</div>
                <p>Let {`$t = x + \\tfrac{1}{x}$`}. Squaring gives:</p>
                <div className="lrn-eq">{`$$t^2 = x^2 + 2 + \\tfrac{1}{x^2} \\implies x^2 + \\tfrac{1}{x^2} = t^2 - 2$$`}</div>
                <p>Substitute:</p>
                <div className="lrn-eq">{`$$2(t^2 - 2) + 7t + 4 = 0 \\implies 2t^2 + 7t = 0 \\implies t(2t + 7) = 0$$`}</div>
                <p>Two cases:</p>
                <ul className="lrn-list">
                  <li>
                    {`$t = 0 \\implies x + \\tfrac{1}{x} = 0 \\implies x^2 = -1$`}. No real
                    solutions.
                  </li>
                  <li>
                    {`$t = -\\tfrac{7}{2} \\implies 2x^2 + 7x + 2 = 0 \\implies x = \\tfrac{-7 \\pm \\sqrt{33}}{4}$`}
                    .
                  </li>
                </ul>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Biquadratic ({`$y = x^2$`})</span>
              <p>Only even powers. Substitute {`$y = x^2$`}.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Symmetric ({`$t = x + \\tfrac{1}{x}$`})</span>
              <p>Palindrome coefficients. Divide by {`$x^{\\tfrac{n}{2}}$`} first.</p>
            </div>
          </div>
        </>,

        <>
          <h2>Equations Built from a Substitution</h2>
          <p>
            A degree-4 equation can hide a degree-2 equation inside a substitution. Spotting the
            repeated chunk turns the problem into two easier ones.
          </p>
          <p>
            <strong>How they are built.</strong> Take any quadratic, say {`$3x^2 + 2x - 10 = 0$`},
            and replace {`$x$`} with some expression in {`$y$`}, say {`$x = y^2 + y - 1$`}. Expand
            and you get an ugly degree-4 mess in {`$y$`}.
          </p>
          <p>
            <strong>How to undo it.</strong> If you face an equation like
          </p>
          <div className="lrn-eq">{`$$3(y^2 + y - 1)^2 + 2(y^2 + y - 1) - 10 = 0$$`}</div>
          <p>
            the same chunk {`$y^2 + y - 1$`} appears twice. Name it {`$x = y^2 + y - 1$`}. The
            equation collapses to {`$3 x^2 + 2x - 10 = 0$`}. The quadratic formula gives
          </p>
          <div className="lrn-eq">{`$$x = \\frac{-2 \\pm \\sqrt{4 + 120}}{6} = \\frac{-1 \\pm \\sqrt{31}}{3}$$`}</div>
          <p>
            For each value of {`$x$`}, solve {`$y^2 + y - 1 = x$`}, i.e. {`$y^2 + y - (1 + x) = 0$`}
            , with the quadratic formula again. Each {`$x$`} produces up to two real {`$y$`}s, so up
            to four real solutions overall.
          </p>
          <div className="lrn-insight">
            <p>
              The strategy is the same as &ldquo;linear in disguise&rdquo; and biquadratics: when a
              non-trivial expression appears more than once, name it. Pattern recognition beats
              brute expansion.
            </p>
          </div>
        </>
      ]
    },

    practice: PRACTICE_CARDS,

    reference: {
      category: 'Quick Reference',
      title: 'Linear Equations',
      sections: [
        <>
          <h2>Solving One-Variable Linear Equations</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Add/subtract isolation</span>
            <div className="lrn-definition-desc">
              <p>
                {`$x - a = b \\implies x = b + a$`}. Undo the constant attached to the variable.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiply/divide isolation</span>
            <div className="lrn-definition-desc">
              <p>
                {`$ax = b \\implies x = \\tfrac{b}{a}$`} for {`$a \\ne 0$`}. Multiply by the
                reciprocal if {`$a$`} is a fraction.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">General linear equation</span>
            <div className="lrn-definition-desc">
              <p>
                {`$ax + b = c \\implies x = \\tfrac{c - b}{a}$`}, {`$a \\ne 0$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">LCD clearing</span>
            <div className="lrn-definition-desc">
              <p>
                Multiply every term by {`$\\text{lcm}(d_1, d_2, \\ldots)$`}. Cross-multiplication is
                the special case for {`$\\tfrac{a}{b} = \\tfrac{c}{d}$`}: {`$ad = bc$`}.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Outcome</th>
                <th>Algebraic signal</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>One solution</td>
                <td>{`$x = \\text{number}$`}</td>
                <td>normal case</td>
              </tr>
              <tr>
                <td>No solution</td>
                <td>contradiction, e.g. {`$-1 = -5$`}</td>
                <td>variable cancelled, false statement</td>
              </tr>
              <tr>
                <td>Infinitely many</td>
                <td>identity, e.g. {`$5 = 5$`}</td>
                <td>variable cancelled, always true</td>
              </tr>
            </tbody>
          </table>

          <h2>Multi-Step Equations</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Variables on both sides</span>
            <div className="lrn-definition-desc">
              <ol className="lrn-list">
                <li>Combine like terms on each side.</li>
                <li>Move variable terms to one side.</li>
                <li>Move constants to the other.</li>
                <li>Divide to isolate.</li>
              </ol>
            </div>
          </div>

          <h2>Equations in Disguise</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Substitution for repeated expressions</span>
            <div className="lrn-definition-desc">
              <p>
                Let {`$u$`} = the repeated chunk. Solve for {`$u$`}. Unwind. Use for {`$\\sqrt{x}$`}
                , {`$\\tfrac{1}{x}$`}, cube roots, or nested polynomials that appear twice.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Extraneous solution check</span>
            <div className="lrn-definition-desc">
              <p>
                Plug answers into the original. Always required after raising to an even power, or
                after clearing a variable from a denominator.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Even power</td>
                <td>
                  {`$a^2 = b^2$`} also admits {`$a = -b$`}
                </td>
              </tr>
              <tr>
                <td>Variable in denominator</td>
                <td>multiplying through may multiply by zero</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Multi-Variable Expressions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Combining fractions</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{a}{r} + \\frac{b}{s} = \\frac{as + br}{rs}$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Factoring</span>
            <div className="lrn-definition-desc">
              <p>{`$ax + bx = x(a + b)$`}. Pull a common factor out of two or more terms.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Solving for one variable in terms of others</span>
            <div className="lrn-definition-desc">
              <p>
                {`$ax + bc = 3c - 2d^2 x \\implies x = \\tfrac{3c - bc}{a + 2d^2}$`}. Collect,
                factor, divide.
              </p>
            </div>
          </div>

          <h2>Systems: Two Variables</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Substitution</span>
            <div className="lrn-definition-desc">
              <ol className="lrn-list">
                <li>Solve one equation for one variable.</li>
                <li>Substitute into the other.</li>
                <li>Solve, then back-substitute.</li>
              </ol>
              <p>Best when one variable has coefficient {`$\\pm 1$`}.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Elimination</span>
            <div className="lrn-definition-desc">
              <ol className="lrn-list">
                <li>Multiply to match one coefficient.</li>
                <li>Add or subtract to cancel.</li>
                <li>Solve, then back-substitute.</li>
              </ol>
              <p>Best when two coefficients are equal, opposite, or easy to match.</p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Outcome</th>
                <th>Algebraic signal</th>
                <th>Geometric meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>One solution</td>
                <td>unique {`$(x, y)$`}</td>
                <td>lines intersect at one point</td>
              </tr>
              <tr>
                <td>No solution</td>
                <td>contradiction, e.g. {`$0 = 9$`}</td>
                <td>parallel lines</td>
              </tr>
              <tr>
                <td>Infinitely many</td>
                <td>identity, e.g. {`$0 = 0$`}</td>
                <td>same line</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Cramer&rsquo;s Rule (2×2)</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$x = \\frac{ed - bf}{ad - bc}, \\quad y = \\frac{af - ce}{ad - bc}$$`}</div>
              <p>
                for {`$ax + by = e$`}; {`$cx + dy = f$`}. Use when {`$ad - bc \\ne 0$`}.
              </p>
            </div>
          </div>

          <h2>Systems in Disguise</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Reciprocal substitution</span>
            <div className="lrn-definition-desc">
              <p>
                Let {`$r = \\tfrac{1}{x}$`}, {`$s = \\tfrac{1}{y}$`}. Solve linear system. Recover{' '}
                {`$x = \\tfrac{1}{r}$`}, {`$y = \\tfrac{1}{s}$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Square-root substitution</span>
            <div className="lrn-definition-desc">
              <p>
                Let {`$u = \\sqrt{a}$`}, {`$v = \\sqrt{b}$`}. Solve linear system. Recover{' '}
                {`$a = u^2$`}, {`$b = v^2$`}.
              </p>
            </div>
          </div>

          <h2>Identity Principle</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Coefficient matching</span>
            <div className="lrn-definition-desc">
              <p>
                {`$Ax + B = Cx + D$`} for all {`$x \\implies A = C, \\, B = D$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Completing the Square</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Key identity</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$x^2 + p x = \\left(x + \\tfrac{p}{2}\\right)^2 - \\left(\\tfrac{p}{2}\\right)^2$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Monic quadratic formula</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$x = -\\tfrac{p}{2} \\pm \\sqrt{\\tfrac{p^2}{4} - q} \\quad \\text{for } x^2 + p x + q = 0$$`}</div>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Discriminant {`$D = \\tfrac{p^2}{4} - q$`}</th>
                <th>Real roots</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$D > 0$`}</td>
                <td>2</td>
                <td>distinct real roots</td>
              </tr>
              <tr>
                <td>{`$D = 0$`}</td>
                <td>1</td>
                <td>repeated root at {`$-\\tfrac{p}{2}$`}</td>
              </tr>
              <tr>
                <td>{`$D < 0$`}</td>
                <td>0</td>
                <td>no real roots</td>
              </tr>
            </tbody>
          </table>

          <h2>Vieta&rsquo;s Theorem</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Sum and product (monic quadratic)</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\alpha + \\beta = -p$`}; {`$\\alpha\\beta = q$`} for roots of{' '}
                {`$x^2 + p x + q = 0$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Build a quadratic from roots</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Useful identities</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$x_1^2 + x_2^2 = p^2 - 2q$$`}</div>
              <div className="lrn-eq">{`$$(x_1 - x_2)^2 = p^2 - 4q = 4D$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Vieta&rsquo;s for the cubic</span>
            <div className="lrn-definition-desc">
              <p>
                For {`$x^3 + p x^2 + q x + r = 0$`} with roots {`$\\alpha, \\beta, \\gamma$`}:
              </p>
              <div className="lrn-eq">{`$$\\alpha + \\beta + \\gamma = -p, \\quad \\alpha\\beta + \\alpha\\gamma + \\beta\\gamma = q, \\quad \\alpha\\beta\\gamma = -r$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Opposite-sign root test</span>
            <div className="lrn-definition-desc">
              <p>Roots of opposite sign {`$\\iff q < 0$`}.</p>
            </div>
          </div>

          <h2>General Quadratic Formula</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Standard formula</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$x = \\frac{-b \\pm \\sqrt{b^2 - 4 a c}}{2a}, \\quad a \\ne 0$$`}</div>
              <p>
                Note: {`$\\sqrt{4a^2} = 2|a|$`}, but the {`$\\pm$`} absorbs the sign, so the{' '}
                {`$2a$`} in the denominator is correct.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Factor via roots</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$a x^2 + b x + c = a(x - x_1)(x - x_2)$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Reciprocal-roots identity</span>
            <div className="lrn-definition-desc">
              <p>
                Roots of {`$cx^2 + bx + a = 0$`} are reciprocals of roots of {`$ax^2 + bx + c = 0$`}
                .
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Alternative formula</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$x = \\frac{2c}{-b \\mp \\sqrt{b^2 - 4 a c}}$$`}</div>
              <p>Preferred when {`$|b|$`} is large, to avoid catastrophic cancellation.</p>
            </div>
          </div>

          <h2>The Parabola</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Vertex form</span>
            <div className="lrn-definition-desc">
              <p>
                {`$y = a(x + m)^2 + n$`}; vertex at {`$(-m, n)$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Vertex from standard form</span>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\text{Vertex at} \\left(-\\tfrac{b}{2a},\\; c - \\tfrac{b^2}{4a}\\right)$$`}</div>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Controlled by</th>
                <th>How</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Opens up / down</td>
                <td>sign of {`$a$`}</td>
                <td>
                  {`$a > 0$`} opens up; {`$a < 0$`} opens down
                </td>
              </tr>
              <tr>
                <td>Width</td>
                <td>magnitude of {`$a$`}</td>
                <td>
                  {`$|a| > 1$`} narrower; {`$|a| < 1$`} wider
                </td>
              </tr>
              <tr>
                <td>{`$y$`}-intercept</td>
                <td>{`$c$`}</td>
                <td>{`$(0, c)$`}</td>
              </tr>
              <tr>
                <td>Slope at {`$y$`}-axis</td>
                <td>{`$b$`}</td>
                <td>
                  positive {`$b$`} climbs; negative {`$b$`} falls
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Quadratic Inequalities</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Sign-chart method</span>
            <div className="lrn-definition-desc">
              <ol className="lrn-list">
                <li>Factor.</li>
                <li>Find roots.</li>
                <li>Test one point per interval.</li>
                <li>The quadratic has constant sign on each interval.</li>
              </ol>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Region ({`$a > 0$`})</th>
                <th>Sign</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Outside roots</td>
                <td>positive</td>
              </tr>
              <tr>
                <td>Between roots</td>
                <td>negative</td>
              </tr>
            </tbody>
          </table>

          <h2>Biquadratic and Symmetric</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Biquadratic substitution</span>
            <div className="lrn-definition-desc">
              <p>
                {`$a x^4 + b x^2 + c = 0$`}: let {`$y = x^2$`}, solve {`$a y^2 + b y + c = 0$`},
                recover {`$x = \\pm \\sqrt{y}$`} for each non-negative {`$y$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Symmetric reduction</span>
            <div className="lrn-definition-desc">
              <p>
                Divide by {`$x^{\\lfloor \\tfrac{n}{2} \\rfloor}$`}. Let {`$t = x + \\tfrac{1}{x}$`}
                . Use {`$x^2 + \\tfrac{1}{x^2} = t^2 - 2$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Nested-substitution equations</span>
            <div className="lrn-definition-desc">
              <p>
                When the same chunk {`$f(y)$`} appears more than once in a polynomial in {`$y$`},
                set {`$x = f(y)$`}. Solve the outer equation in {`$x$`}, then solve {`$f(y) = x$`}{' '}
                for each {`$x$`}.
              </p>
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

export default function LinearEquations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
