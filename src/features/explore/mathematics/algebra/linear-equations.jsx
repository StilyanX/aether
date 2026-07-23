import 'mafs/core.css'
import 'katex/dist/katex.min.css'
import { Mafs, Coordinates, Point, Line, LaTeX } from 'mafs'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { TwoLinesViz } from '../../../../components/viz'
import { useVizColors } from '../../../../hooks/use-viz-colors'

function NumberLineXMinus3({ C }) {
  return (
    <Mafs viewBox={{ x: [-1, 13], y: [-1.5, 1.5] }} height={180} preserveAspectRatio={false}>
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
    q: 'You simplify a linear equation and get $5 = 5$. How many solutions does the original have, and what is this called?',
    a: 'Infinitely many. It is an identity: every real number satisfies the original equation.'
  },
  {
    q: 'Solve $-\\dfrac{2r}{5} = 12$ for $r$.',
    a: 'Multiply both sides by the reciprocal $-\\tfrac{5}{2}$: $r = -\\tfrac{5}{2} \\cdot 12 = -30$.'
  },
  {
    q: 'Solve the system $x + 3y = 6$; $2x - 5y = 1$ using any method.',
    a: 'From the first: $x = 6 - 3y$. Substitute: $12 - 6y - 5y = 1 \\to 11y = 11 \\to y = 1$. Then $x = 3$.'
  },
  {
    q: 'Solve $5x - 2y = 12$ and $y - 9x + 22 = -2y$.',
    a: 'Simplify the second: $3y = 9x - 22$, so $y = 3x - \\tfrac{22}{3}$. Substitute: $5x - 2(3x - \\tfrac{22}{3}) = 12 \\to -x + \\tfrac{44}{3} = 12 \\to x = \\tfrac{8}{3}$, then $y = 8 - \\tfrac{22}{3} = \\tfrac{2}{3}$.'
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
    q: 'Solve $2x + 3y = -11$; $5x - 3y = 67$ by elimination.',
    a: 'The $y$ coefficients are opposite. Add: $7x = 56 \\to x = 8$. Back-substitute: $3y = -27 \\to y = -9$.'
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
    q: 'Solve $x + 3y - 4z = 25$; $-2x + 5y + 7z = -66$; $3x - 2y + 3z = 7$.',
    a: 'From (1): $x = 25 - 3y + 4z$. Substitute into (2) and (3): $11y - z = -16$ and $-11y + 15z = -68$. Add: $14z = -84 \\to z = -6$, $y = -2$, $x = 7$.'
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
    q: 'Solve $\\sqrt{a} + \\sqrt{b} = 37$ and $\\sqrt{a} = 2\\sqrt{b} + 10$.',
    a: 'Let $u = \\sqrt{a}$, $v = \\sqrt{b}$. Add: $u + v = 37$, $u - 2v = 10$. Subtract: $3v = 27 \\to v = 9$, $u = 28$. So $a = 784$, $b = 81$.'
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
    q: 'Water flows at rate $r$ L/min. After $t$ min the tank has $rt + 5$ L. If it holds $65$ L after $12$ min, find $r$.',
    a: '$12r + 5 = 65 \\to 12r = 60 \\to r = 5$ L/min.'
  },
  {
    q: 'Plan A: $\\$20 + 0.10n$. Plan B: $\\$30 + 0.05n$. For how many texts are they equal?',
    a: '$20 + 0.10n = 30 + 0.05n \\to 0.05n = 10 \\to n = 200$ texts.'
  },
  {
    q: 'Solve $3x + 7 = 22$.',
    a: 'Subtract 7: $3x = 15$. Divide by 3: $x = 5$. Check: $3(5) + 7 = 22$.'
  },
  {
    q: 'Solve $\\dfrac{x}{4} - 5 = -2$.',
    a: 'Add 5: $\\dfrac{x}{4} = 3$. Multiply by 4: $x = 12$. Check: $\\dfrac{12}{4} - 5 = 3 - 5 = -2$.'
  },
  {
    q: 'Solve $-2x + 9 = 3$.',
    a: 'Subtract 9: $-2x = -6$. Divide by $-2$: $x = 3$. Check: $-2(3) + 9 = -6 + 9 = 3$.'
  },
  {
    q: 'Maria is three times as old as her brother. In 6 years their ages will sum to 36. How old are they now?',
    a: "Let $b$ be the brother's age. Maria's age is $3b$. In 6 years: $(b + 6) + (3b + 6) = 36$, so $4b + 12 = 36$, giving $b = 6$. Maria is $18$. Check: $12 + 24 = 36$."
  },
  {
    q: 'How many liters of 20% saline must you add to 5 L of 50% saline to reach a 30% mixture?',
    a: 'Let $x$ be the liters added. Salt balance: $0.20x + 0.50(5) = 0.30(x + 5)$, so $0.20x + 2.5 = 0.30x + 1.5$, giving $1 = 0.10x$ and $x = 10$ L.'
  },
  {
    q: 'A car travels at 60 km/h. How long does it take to cover 150 km?',
    a: 'Distance equals rate times time: $60t = 150$, so $t = 2.5$ hours.'
  },
  {
    q: 'Three consecutive integers sum to 51. Find them.',
    a: 'Let the smallest be $n$. The three are $n$, $n+1$, $n+2$, summing to $3n + 3 = 51$, so $n = 16$. The integers are 16, 17, 18.'
  },
  {
    q: 'Does $4(x - 3) + 2 = 2(2x - 5)$ have a solution?',
    a: 'Distribute: left $= 4x - 12 + 2 = 4x - 10$; right $= 4x - 10$. The equation becomes $4x - 10 = 4x - 10$, always true. Infinitely many solutions.'
  },
  {
    q: 'Solve $|3x - 1| = 8$.',
    a: 'Split into two cases: $3x - 1 = 8 \\to x = 3$, or $3x - 1 = -8 \\to x = -\\tfrac{7}{3}$.'
  },
  {
    q: 'How many solutions does $|2x + 7| = -4$ have, and why?',
    a: 'None. An absolute value is a distance, so it is never negative. No $x$ can make $|2x + 7|$ equal $-4$.'
  },
  {
    q: 'Solve $|x - 4| + 5 = 12$.',
    a: 'Isolate first: $|x - 4| = 7$. Then $x - 4 = 7$ or $x - 4 = -7$, so $x = 11$ or $x = -3$.'
  },
  {
    q: 'You invest $\\$8000$, part at 5% and the rest at 3%. One year of interest is $\\$340$. How much is at 5%?',
    a: 'Let $x$ be the amount at 5%: $0.05x + 0.03(8000 - x) = 340 \\to 0.02x = 100 \\to x = 5000$. So $\\$5000$ at 5% and $\\$3000$ at 3%.'
  },
  {
    q: 'Pipe A fills a tank in 3 hours, pipe B in 6 hours. Open both. How long to fill it?',
    a: 'Rates add: $\\tfrac{1}{3} + \\tfrac{1}{6} = \\tfrac{1}{x}$. Multiply by $6x$: $2x + x = 6 \\to x = 2$ hours.'
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
      subtitle: 'Solving, systems, and special cases',
      sections: [
        <>
          <h2>What Is a Linear Equation?</h2>
          <p>
            A <strong>variable</strong> is the unknown letter we will solve for. An{' '}
            <strong>equation</strong> says two expressions are equal. A{' '}
            <strong>linear equation</strong> is one where the variable appears only to the first
            power. It is never squared, never under a root, never in a denominator.
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
              When the coefficient of {`$x$`} (the number multiplying {`$x$`}) is nonzero, a linear
              equation has exactly one solution. The first power is one-to-one. Every {`$x$`} gives
              a different value, so at most one {`$x$`} can match a given target. Squaring is not
              one-to-one ({`$2^2 = (-2)^2 = 4$`}), which is why {`$x^2 = 4$`} has two solutions.
            </p>
          </div>
        </>,

        <>
          <h2>Multi-Variable Expressions</h2>
          <p>
            A <strong>multi-variable expression</strong> contains more than one variable. The rules
            of one-variable algebra carry over unchanged.
          </p>
          <p>
            Evaluate by substituting numbers for letters (Algebraic Foundations). Like terms,
            distribute, factor, and combining fractions with the LCD also live in Algebraic
            Foundations. The next section uses all of them on equations whose constants are letters.
          </p>
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
          <p>
            Equality survives the same operation on both sides. That is the balance rule the
            Equality axioms below codify.
          </p>
          <p>
            Inspection works for trivial cases. Algebra works for any case, no matter how many
            operations stack on top of the variable.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Equality axioms</span>
            <div className="lrn-definition-desc">
              <p>The four moves that keep an equation true:</p>
              <ul className="lrn-list">
                <li>Add the same number to both sides.</li>
                <li>Subtract the same number from both sides.</li>
                <li>Multiply both sides by the same nonzero number.</li>
                <li>Divide both sides by the same nonzero number.</li>
              </ul>
              <p>
                Every solve below is a chain of these four moves. Algebra is the method that works
                on any linear equation.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Isolating with Addition and Subtraction</h2>
          <p>Isolate the variable by inverse operation.</p>
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
            Isolate by the inverse operation: divide to undo a multiplied constant, multiply to undo
            a divisor.
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
            When the coefficient is a fraction, multiply by its <strong>reciprocal</strong> (
            {`$b/a$`} for {`$a/b$`}, whose product is 1) in one step. Solve{' '}
            {`$-\\dfrac{2r}{5} = 12$`}: the coefficient of {`$r$`} is {`$-\\tfrac{2}{5}$`}. Multiply
            both sides by {`$-\\tfrac{5}{2}$`}:
          </p>
          <div className="lrn-eq">{`$$r = -\\tfrac{5}{2} \\cdot 12 = -30$$`}</div>
          <h3>Negative coefficients</h3>
          <p>
            Dividing by a negative number still preserves the equation. Solve {`$-3x + 5 = 14$`}:
            subtract 5 to get {`$-3x = 9$`}, then divide by {`$-3$`} to get {`$x = -3$`}. Check:{' '}
            {`$-3(-3) + 5 = 9 + 5 = 14$`}.
          </p>
          <p>
            Inequalities behave differently. Dividing an inequality by a negative number flips the
            direction. You will see why later.
          </p>
        </>,

        <>
          <h2>Two-Step Equations</h2>
          <p>
            Most linear equations need two undo moves: undo addition, then undo multiplication. Work
            the moves in that order.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Solve {`$3x + 7 = 22$`}</span>
            <div className="lrn-proof-step">
              <div className="lrn-proof-step-content">
                <p>Subtract 7 from both sides:</p>
                <div className="lrn-eq">{`$$3x = 15$$`}</div>
                <p>Divide both sides by 3:</p>
                <div className="lrn-eq">{`$$x = 5$$`}</div>
                <p>
                  <strong>Check:</strong> {`$3(5) + 7 = 15 + 7 = 22$`}.
                </p>
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <p>
            <strong>The pattern.</strong> Any equation of the form {`$ax + b = c$`} solves the same
            way: undo the add, then undo the multiply. The variable comes out the other side alone.
          </p>
        </>,

        <>
          <h2>Multi-Step Equations</h2>
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
          <p>What we just did, in steps:</p>
          <ol className="lrn-list">
            <li>Combine like terms on each side.</li>
            <li>Move all variable terms to one side.</li>
            <li>Move all constants to the other side.</li>
            <li>Divide to isolate the variable.</li>
          </ol>
          <h3>Variable on both sides</h3>
          <p>
            When the variable appears on both sides, move all variable terms to one side first.
            Solve {`$5x + 3 = 2x + 12$`}:
          </p>
          <ul className="lrn-list">
            <li>
              Subtract {`$2x$`} from both sides: {`$3x + 3 = 12$`}.
            </li>
            <li>Subtract 3 from both sides: {`$3x = 9$`}.</li>
            <li>Divide by 3: {`$x = 3$`}.</li>
          </ul>
          <p>
            Check: {`$5(3) + 3 = 18$`} and {`$2(3) + 12 = 18$`}. The two sides agree.
          </p>
          <h3>Parentheses: distribute first</h3>
          <p>
            When parentheses sit between the variable and the rest of the equation, distribute to
            clear them. Solve {`$3(x - 4) + 2 = 5x + 1$`}:
          </p>
          <ul className="lrn-list">
            <li>Distribute on the left: {`$3x - 12 + 2 = 5x + 1$`}.</li>
            <li>Combine: {`$3x - 10 = 5x + 1$`}.</li>
            <li>
              Subtract {`$3x$`} and subtract 1: {`$-11 = 2x$`}.
            </li>
            <li>Divide by 2: {`$x = -\\tfrac{11}{2}$`}.</li>
          </ul>
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
            Use the LCD (covered in Algebraic Foundations): multiply every term on both sides by the
            LCD. Skipping a term breaks the balance.
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
          <p>
            <strong>Cross-multiplication is the same rule.</strong> Cross-multiplication is LCD
            clearing applied to a one-fraction-equals-one-fraction proportion (proved in Algebraic
            Foundations). Use it only when the equation is exactly &ldquo;one fraction equals one
            fraction&rdquo; with nothing else attached.
          </p>
        </>,

        <>
          <h2>No Solution and Infinite Solutions</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Worked: no solution</span>
              <p>
                {`$2z + 3 - 4 = 3z - 5 - z$`}. Left: {`$2z - 1$`}. Right: {`$2z - 5$`}. Subtract{' '}
                {`$2z$`}: {`$-1 = -5$`}. False. No solution.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Worked: infinitely many</span>
              <p>
                {`$3r + 5 + r = 7r - 2 + 7 - 3r$`}. Left: {`$4r + 5$`}. Right: {`$4r + 5$`}.
                Subtract {`$4r$`}: {`$5 = 5$`}. Always true. Every real number works.
              </p>
            </div>
          </div>
          <p>What we just saw, named:</p>
          <ol className="lrn-list">
            <li>
              <strong>One solution.</strong> The normal case.
            </li>
            <li>
              <strong>No solution.</strong> The variable cancels and you are left with a{' '}
              <strong>contradiction</strong>, a false statement like {`$-1 = -5$`}.
            </li>
            <li>
              <strong>Infinitely many solutions.</strong> The variable cancels and you are left with
              an <strong>identity</strong>, a statement always true like {`$5 = 5$`}.
            </li>
          </ol>
          <p>
            When the variable cancels, the equation no longer pins it down. The leftover statement
            is either always true (every value works) or always false (no value works). There is no
            middle ground.
          </p>
        </>,

        <>
          <h2>Absolute-Value Equations</h2>
          <p>
            The absolute value {`$|X|$`} is the distance from {`$X$`} to zero, so it is never
            negative. The equation {`$|X| = c$`} with {`$c > 0$`} asks which values sit exactly{' '}
            {`$c$`} steps from zero. There are two: {`$X = c$`} and {`$X = -c$`}.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">The two-case rule</span>
            <div className="lrn-definition-desc">
              <p>
                {`$|X| = c$`} (with {`$c \\ge 0$`}) is equivalent to {`$X = c$`} or {`$X = -c$`}.
                Each {`$X$`} here is a linear expression, so each case is its own linear equation.
                Solve both.
              </p>
            </div>
          </div>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Solve {`$|2x - 5| = 3$`}</span>
              <div className="lrn-step-content">
                <p>Split into two cases:</p>
                <div className="lrn-eq">{`$$2x - 5 = 3 \\implies x = 4$$`}</div>
                <div className="lrn-eq">{`$$2x - 5 = -3 \\implies x = 1$$`}</div>
                <p>
                  Both check. The solutions are {`$x = 1$`} and {`$x = 4$`}.
                </p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Isolate first: solve {`$|x - 4| + 2 = 9$`}</span>
              <div className="lrn-step-content">
                <p>Subtract 2 to isolate the absolute value, then split:</p>
                <div className="lrn-eq">{`$$|x - 4| = 7 \\implies x - 4 = 7 \\;\\text{or}\\; x - 4 = -7$$`}</div>
                <p>
                  So {`$x = 11$`} or {`$x = -3$`}.
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              {`$|X| = c$`} has <strong>no solution</strong> when {`$c$`} is negative. An absolute
              value is a distance, and no distance is negative. So {`$|3x + 1| = -2$`} has no
              solution.
            </p>
          </div>
          <p>
            Always isolate the absolute value on one side <em>before</em> you split into cases.
            Splitting too early breaks the balance.
          </p>
        </>,

        <>
          <h2>Lines in the Plane</h2>
          <p>
            Every linear equation in {`$x$`} and {`$y$`} graphs as a straight line. The coordinate
            plane, ordered-pair notation, and the geometry of two-line systems are covered in full
            in <strong>Graphing Lines and Linear Inequalities</strong>; here we keep working in
            algebra.
          </p>
        </>,

        <>
          <h2>Word Problems: English to Algebra</h2>
          <p>
            Algebraic Foundations introduces the five-step recipe (define, translate, set up, solve,
            answer). Here are two larger applications.
          </p>
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
              <span className="lrn-step-title">Pill cost: a two-step word problem</span>
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
            <div className="lrn-step">
              <span className="lrn-step-title">Investment: money split across two rates</span>
              <div className="lrn-step-content">
                <p>
                  You invest {`$\\$100{,}000$`}. Part earns 6% simple interest, the rest earns 4.5%.
                  One year of interest totals {`$\\$5025$`}. How much sits at 6%?
                </p>
                <p>
                  Let {`$x$`} be the amount at 6%. Then {`$100{,}000 - x$`} sits at 4.5%. Simple
                  interest is rate times principal:
                </p>
                <div className="lrn-eq">{`$$0.06x + 0.045(100{,}000 - x) = 5025$$`}</div>
                <p>Distribute, then collect the {`$x$`} terms:</p>
                <div className="lrn-eq">{`$$0.015x = 525 \\implies x = 35{,}000$$`}</div>
                <p>
                  So {`$\\$35{,}000$`} earns 6% and {`$\\$65{,}000$`} earns 4.5%.
                </p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Work rate: two openings draining together</span>
              <div className="lrn-step-content">
                <p>
                  Spillway A lowers a reservoir 1 ft in 4 hours. Spillway B does it in 6 hours. Open
                  both. How long does the drop take?
                </p>
                <p>
                  Rates add, not times. In one hour A does {`$\\tfrac{1}{4}$`} of the job and B does{' '}
                  {`$\\tfrac{1}{6}$`}. Let {`$x$`} be the hours together, so both together do{' '}
                  {`$\\tfrac{1}{x}$`} per hour:
                </p>
                <div className="lrn-eq">{`$$\\tfrac{1}{4} + \\tfrac{1}{6} = \\tfrac{1}{x}$$`}</div>
                <p>Multiply every term by the LCD {`$12x$`}:</p>
                <div className="lrn-eq">{`$$3x + 2x = 12 \\implies x = \\tfrac{12}{5} = 2\\text{ h } 24\\text{ min}$$`}</div>
                <p>
                  This is the reciprocal substitution again: name {`$u = \\tfrac{1}{x}$`} and the
                  equation is linear.
                </p>
              </div>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Mixture: raising a concentration</span>
              <div className="lrn-step-content">
                <p>
                  A soda holds {`$900$`} gallons at {`$5\\%$`} orange juice. How much pure juice
                  must you add to make the drink {`$10\\%$`} juice?
                </p>
                <p>
                  Let {`$x$`} be the gallons of pure juice added. Track the juice, not the total
                  volume. The soda already holds {`$0.05(900)$`} gallons of juice. Pure juice adds{' '}
                  {`$x$`} more. The final mix holds {`$0.10(900 + x)$`}:
                </p>
                <div className="lrn-eq">{`$$0.05(900) + x = 0.10(900 + x)$$`}</div>
                <p>Distribute, then collect the {`$x$`} terms:</p>
                <div className="lrn-eq">{`$$45 + x = 90 + 0.1x \\implies 0.9x = 45 \\implies x = 50$$`}</div>
                <p>
                  Add {`$50$`} gallons of pure juice. The trick is to count one substance on both
                  sides, so the total volume cancels out of the way.
                </p>
              </div>
            </div>
          </div>
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              <strong>The bogus variable error.</strong> Define each variable once and stick with it
              (Algebraic Foundations covers the discipline in full).
            </p>
          </div>
        </>,

        <>
          <h2>Linear Equations in Disguise</h2>
          <p>
            Start with {`$3\\sqrt{x} - 2 = 30 - \\sqrt{x}$`}. What is repeated? The chunk{' '}
            {`$\\sqrt{x}$`} appears on both sides. Name it.
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
          </div>
          <p>
            <strong>The substitution rule.</strong> When the same complex expression appears more
            than once, name it. The equation becomes linear in the new name. Solve the linear
            equation, then unwind the substitution.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                Variable in denominator: solve {`$\\dfrac{3}{x} - 2 = 7 + \\dfrac{2}{x}$`}
              </span>
              <div className="lrn-step-content">
                <p>
                  Implicit substitution {`$u = \\tfrac{1}{x}$`}. Move the {`$u$`} terms together:
                </p>
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
            Solve {`$\\sqrt{r} + 13 = 9 - \\sqrt{r}$`}. Isolating gives {`$2\\sqrt{r} = -4$`}, so{' '}
            {`$\\sqrt{r} = -2$`}. But {`$\\sqrt{r}$`} is never negative for real {`$r$`}, so no real
            solution exists.
          </p>
          <p>
            Square both sides anyway: {`$(\\sqrt{r})^2 = (-2)^2 \\implies r = 4$`}. Check in the
            original: {`$\\sqrt{4} + 13 = 15 \\ne 7 = 9 - \\sqrt{4}$`}. The candidate {`$r = 4$`}{' '}
            fails.
          </p>
          <p>
            An <strong>extraneous solution</strong> satisfies a step you took during solving but not
            the original equation. They come from two sources:
          </p>
          <ul className="lrn-list">
            <li>Raising both sides to an even power (squaring is the usual case).</li>
            <li>Multiplying by an expression that contains the variable.</li>
          </ul>
          <p>
            <strong>Why squaring invents solutions.</strong> If {`$a = b$`}, then {`$a^2 = b^2$`}.
            But {`$a^2 = b^2$`} also allows {`$a = -b$`}. The squared equation accepts the
            negative-version solutions too.
          </p>
          <p>
            <strong>Why denominators invent solutions.</strong> Multiplying through by an expression
            with the variable in it might multiply by zero. The equation{' '}
            {`$0 \\cdot A = 0 \\cdot B$`} holds even when {`$A \\ne B$`}. The cleared equation lets
            in extra answers.
          </p>
          <p>
            <strong>Rule:</strong> always check your answer in the original. Do this whenever you
            squared (or raised to any even power) or cleared a variable from a denominator.
          </p>
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
          <h3>
            Solve {`$ax + by = c$`} for {`$y$`}: the bridge to systems
          </h3>
          <p>
            Subtract {`$ax$`} from both sides, then divide by {`$b$`} (with {`$b \\ne 0$`}):
          </p>
          <div className="lrn-eq">{`$$y = \\frac{c - ax}{b}$$`}</div>
          <p>
            Concrete: {`$2x + 3y = 12 \\Rightarrow y = \\tfrac{12 - 2x}{3}$`}. The next section uses
            exactly this move. Substitution into a second equation needs one variable already
            isolated.
          </p>
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
          <p>
            <strong>What we just did, named.</strong> Solve one equation for one variable, then plug
            that expression into the other. Use this when one variable in one equation has
            coefficient {`$\\pm 1$`}.
          </p>
          <h3>Elimination</h3>
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
          <p>
            <strong>What we just did, named.</strong> Add or subtract the equations (or multiples of
            them) so one variable cancels. Use this when two coefficients are equal, opposite, or
            easy to match by multiplication.
          </p>
          <p>Either method works for any system. Choose the one that creates fewer fractions.</p>
        </>,

        <>
          <h2>Three Outcomes for a Two-Variable System: The Algebraic Signal</h2>
          <p>
            Geometrically there are three cases, one crossing, parallel, or the same line, and the
            geometric treatment lives in <strong>Graphing Lines and Linear Inequalities</strong>.
            Here we name what the <em>algebra</em> does in each case, so you can recognize the
            outcome without drawing a picture.
          </p>
          <ol className="lrn-list">
            <li>
              <strong>One solution.</strong> Substitution or elimination collapses to a single value
              for each variable.
            </li>
            <li>
              <strong>No solution.</strong> The variable cancels and you are left with a
              contradiction like {`$0 = 9$`}.
            </li>
            <li>
              <strong>Infinitely many solutions.</strong> The variable cancels and you are left with
              an identity like {`$0 = 0$`}. The two equations describe the same line.
            </li>
          </ol>
          <p>
            <strong>Parallel test from the coefficients.</strong> Take {`$a_1 x + b_1 y = c_1$`} and{' '}
            {`$a_2 x + b_2 y = c_2$`}. The lines are parallel when {`$a_1 b_2 = a_2 b_1$`}. They
            coincide when {`$a_1 c_2 = a_2 c_1$`} also holds. This is a quick coefficient check
            before you commit to substitution or elimination.
          </p>
          <p>
            <strong>Parametric form names the free variable.</strong> When the algebra reveals two
            equations describing the same line, say both reduce to {`$-u + 3v = 8$`}, set{' '}
            {`$v = t$`}, then {`$u = 3t - 8$`}. The solution set is the family {`$(3t - 8, t)$`} as{' '}
            {`$t$`} ranges over real numbers.
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
            <span className="lrn-definition-term">Equality axioms</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>Add the same number to both sides.</li>
                <li>Subtract the same number from both sides.</li>
                <li>Multiply both sides by the same nonzero number.</li>
                <li>Divide both sides by the same nonzero number.</li>
              </ul>
            </div>
          </div>
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
                Multiply every term by the least common multiple (lcm){' '}
                {`$\\text{lcm}(d_1, d_2, \\ldots)$`}. Cross-multiplication is the special case for{' '}
                {`$\\tfrac{a}{b} = \\tfrac{c}{d}$`}: {`$ad = bc$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute-value equation</span>
            <div className="lrn-definition-desc">
              <p>
                {`$|X| = c$`} with {`$c \\ge 0$`} splits into two linear equations: {`$X = c$`} or{' '}
                {`$X = -c$`}. No solution when {`$c < 0$`}. Isolate the absolute value before
                splitting.
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
                Plug answers into the original. Always do this after raising to an even power, or
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
          <p>
            Algebraic signals: one solution gives a unique {`$(x, y)$`}; no solution surfaces as a
            contradiction like {`$0 = 9$`}; infinitely many surfaces as an identity like {`$0 = 0$`}
            . The full geometric outcome table (slopes, intercepts, solution counts) is in{' '}
            <strong>Graphing Lines and Linear Inequalities § Systems of Linear Equations</strong>.
          </p>

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
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
  }

  return config
}

export default function LinearEquations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
