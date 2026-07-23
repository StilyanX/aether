import { LearningTemplate } from '../../../../components/learning/learning-template'
import { SystemsViz } from '../../../../components/viz'
import { VizFigure } from '../../../../components/viz-figure'

function useConfig() {
  const config = {
    cssPrefix: 'sle',
    documentTitle: 'Systems of Linear Equations - AETHER',
    learning: {
      groupTitle: 'Matrices and Linear Systems',
      category: 'Algebra',
      title: 'Systems of Linear Equations',
      subtitle:
        'Solving systems in three or more unknowns using augmented matrices, Gaussian elimination, and Gauss-Jordan elimination.',
      sections: [
        <>
          <div className="lrn-header">
            <div>
              <h2>What Is a Linear Equation?</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You see two equations, $x + 3y = 7$ and $x + 3\\sqrt{y} = 5$. What do you think makes one "linear" and the other not?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The first equation has every unknown appearing alone, raised to the first power. The second equation puts $y$ inside a square root, which breaks that pattern. A linear equation never lets an unknown sit inside a root, a power other than one, or a function.`}</p>
            </details>
          </div>

          <h3>The Linear Form</h3>
          <p>
            {`A `}
            <strong>{`linear equation`}</strong>
            {` in the unknowns $x_1, x_2, \\ldots, x_n$ has the form $a_1x_1 + a_2x_2 + \\cdots + a_nx_n = b$. The `}
            <strong>{`unknowns`}</strong>
            {` are the letters you solve for, and $a_1, \\ldots, a_n$ and $b$ are fixed numbers called coefficients and a constant. Every unknown appears only to the first power. No unknown multiplies another unknown, and no unknown sits inside a square root, sine, or other function.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Linear equation</span>
            <div className="lrn-definition-desc">
              <p>{`An equation of the form $a_1x_1 + a_2x_2 + \\cdots + a_nx_n = b$, where every unknown appears alone, to the first power, with no products between unknowns.`}</p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for the linear-equation form whenever every unknown in your relationship appears alone, raised to the first power, with no products between unknowns.`}
          </p>

          <h3>Solutions and Solution Sets</h3>
          <p>
            {`A `}
            <strong>{`solution`}</strong>
            {` is a list of numbers that, put in place of the unknowns, makes the equation true. The `}
            <strong>{`solution set`}</strong>
            {` is the collection of all such solutions. When a solution set has infinitely many members, you describe it with a `}
            <strong>{`parameter`}</strong>
            {`, a free-standing letter (often $t$) that can take any real value, generating every solution as it varies.`}
          </p>

          <h3>Recognizing Linear vs Nonlinear</h3>
          <p>{`Consider $x + 3y = 7$, $y = \\frac{1}{2}x + 3z + 1$, and $x_1 - 2x_2 - 3x_3 + x_4 = 7$. Each unknown here appears alone and to the first power, so all three are linear. Now compare $x + 3\\sqrt{y} = 5$, $3x + 2y - z + xz = 4$, and $y = \\sin x$. The first has $y$ under a square root, the second multiplies $x$ by $z$, and the third puts $x$ inside a trigonometric function (a curve-based function such as sine). None of these three are linear.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does multiplying two unknowns together, like $xz$ in $3x + 2y - z + xz = 4$, break linearity even though each unknown alone still looks simple?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Linearity requires every unknown to contribute to the equation independently, in its own separate term. The term $xz$ mixes two unknowns into one term, so the equation's value depends on the product of $x$ and $z$, not on each one alone. That coupling is exactly what the linear form forbids.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Linear`}</span>
              <p>{`$6x_1 - 3x_2 + \\sqrt{5}x_3 = 10$. The coefficients can be messy numbers like $\\sqrt{5}$, and the equation is still linear, because it is the unknowns, not the coefficients, that must stay simple.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Nonlinear`}</span>
              <p>{`$x^2 + 3y - \\sqrt{z} = 5$ or $x_1x_2 + 6x_3 = -6$. An unknown appears squared or under a root, or two unknowns multiply together.`}</p>
            </div>
          </div>

          <h3>Parameters Describe Infinite Solution Sets</h3>
          <p>{`A solution set can hold more than one solution. Take $4x - 2y = 1$. You can solve it two ways. Assign $x = t$ for any real number $t$, then $y = 2t - \\frac{1}{2}$. Or assign $y = t$ instead, then $x = \\frac{1}{2}t + \\frac{1}{4}$. Both choices describe the exact same solution set, written with different parameters.`}</p>
          <p>{`A second case shows a solution set with two free parameters. For $x_1 - 4x_2 + 7x_3 = 5$, assign $x_2 = s$ and $x_3 = t$ for any real numbers $s$ and $t$. Then $x_1 = 5 + 4s - 7t$. Every choice of $s$ and $t$ produces one valid solution, so this equation has infinitely many solutions described by two parameters.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does an equation with two unknowns need one parameter to describe its full solution set, while an equation with three unknowns needs two?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`One linear equation pins down only one relationship among its unknowns. With two unknowns, fixing one value determines the other, so one free parameter covers every solution. With three unknowns, fixing one value still leaves two unknowns related by a single equation, so two of them stay free and need their own parameters.`}</p>
            </details>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Systems of Linear Equations</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If you have three linear equations but only two unknowns, what do you think has to be true for all three equations to share a common solution?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The three equations must agree. With only two unknowns, two of the equations already pin down a single point, if one exists. The third equation must pass through that exact same point, or no shared solution exists at all.`}</p>
            </details>
          </div>

          <h3>Systems, Solutions, and Consistency</h3>
          <p>
            {`A `}
            <strong>{`system of linear equations`}</strong>
            {` (or `}
            <strong>{`linear system`}</strong>
            {`) is a finite collection of linear equations in the same set of unknowns. A `}
            <strong>{`solution of the system`}</strong>
            {` is a list of numbers that satisfies every equation in the collection at once, not just one of them.`}
          </p>

          <p>
            <strong>When to use this:</strong>{' '}
            {`You need a system, not a single equation, whenever a problem imposes more than one linear condition on the same unknowns at the same time.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Consistent and inconsistent systems</span>
            <div className="lrn-definition-desc">
              <p>
                {`A system is `}
                <strong>{`consistent`}</strong>
                {` if it has at least one solution. It is `}
                <strong>{`inconsistent`}</strong>
                {` if no solution satisfies every equation at once.`}
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A system becomes inconsistent when its equations demand contradictory things of the unknowns, such as two conditions that reduce to a false statement like $0 = 1$.`}</p>
            <p>{`No values of the unknowns can make a false numerical statement true, so the system has no solution.`}</p>
          </div>

          <h3>Checking a Proposed Solution</h3>
          <p>{`A proposed solution counts only if it satisfies every equation at once. Take the system $4x_1 - x_2 + 3x_3 = -1$ and $3x_1 + x_2 + 9x_3 = -4$. Test the list $x_1 = 1$, $x_2 = 2$, $x_3 = -1$. The first equation gives $4(1) - 2 + 3(-1) = 4 - 2 - 3 = -1$, which matches. The second gives $3(1) + 2 + 9(-1) = 3 + 2 - 9 = -4$, which also matches. Both hold, so $(1, 2, -1)$ is a solution of the system.`}</p>
          <p>{`Now test the list $x_1 = 1$, $x_2 = 8$, $x_3 = 1$. The first equation gives $4(1) - 8 + 3(1) = 4 - 8 + 3 = -1$, which matches. But the second gives $3(1) + 8 + 9(1) = 3 + 8 + 9 = 20$, not $-4$. This list satisfies only the first equation, so it is not a solution of the system.`}</p>

          <h3>Equivalent Systems</h3>
          <p>
            {`Two systems are `}
            <strong>{`equivalent`}</strong>
            {` if they share the exact same solution set, even when the equations look different. This idea matters because every method for solving a system works by rewriting it as a simpler, equivalent system, step by step, until the solution is obvious.`}
          </p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Three Ways to Solve a Two-Variable System</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`For the system $2x + y = 1$ and $3x + 4y = 14$, what do you think happens if you solve the first equation for $y$ and substitute it into the second?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The substitution replaces $y$ everywhere in the second equation, leaving only $x$. That turns a two-unknown problem into a one-unknown problem you can solve directly.`}</p>
            </details>
          </div>

          <p>{`Two of these methods, substitution and elimination, you already learned for two-variable systems. This page treats them as known tools. Here is a quick recall of both, before a third method, graphing, and the jump to larger systems.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Substitution (recall)`}</span>
              <p>{`Solve one equation for one unknown, then substitute that expression into the other equation. This leaves a single equation in one unknown, which you solve directly.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Elimination (recall)`}</span>
              <p>{`Scale one or both equations so a matching unknown cancels when you add them. This also leaves one equation in one unknown.`}</p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Substitution and elimination give exact answers by hand for small systems. Graphing gives a quick visual estimate, useful for checking or when exact coefficients are messy decimals.`}
          </p>

          <h3>Graphical Method</h3>
          <p>{`Each linear equation in two unknowns draws a straight line. The solution to the system is the point where the lines cross. For $1.35x - 2.13y = -2.36$ and $2.16x + 0.32y = 1.06$, graphing both lines and zooming in on their intersection point gives an approximate solution near $(0.30, 1.30)$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why can the graphical method only give an approximate answer here, while substitution and elimination gave exact fractions and whole numbers above?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Reading a graph depends on how precisely you can zoom and measure the intersection point by eye. Substitution and elimination use exact algebra instead, so they produce exact fractions or whole numbers rather than a rounded estimate.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Substitution`}</span>
              <p>{`Works best when one equation already isolates an unknown easily.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Elimination`}</span>
              <p>{`Works best when matching coefficients let you cancel a term by adding or subtracting.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Graphical`}</span>
              <p>{`Trades exactness for a quick visual read of where two lines meet.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>How Many Solutions? The Two-Variable Case</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Two straight lines sit on the same plane. What do you think are the only three ways they can relate to each other?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`They can cross at exactly one point, run parallel and never touch, or lie exactly on top of each other everywhere.`}</p>
            </details>
          </div>

          <p>{`A system of two linear equations in two unknowns has exactly one solution, no solution, or infinitely many solutions. No other outcome is possible.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Check the solution count first, before grinding through algebra, whenever a real-world model needs to know if an answer exists and whether it is unique.`}
          </p>

          <p>{`Geometrically, each equation is a line. Two lines in a plane can cross at exactly one point, run parallel and never meet, or lie exactly on top of each other.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`These three cases are the only possibilities for two straight lines, because two distinct, non-parallel lines always cross at exactly one point.`}</p>
            <p>{`Two lines with the same slope either never touch or lie on top of each other everywhere, so no fourth outcome is possible.`}</p>
          </div>

          <SystemsViz />
          <p>{`Drag the endpoints of either line. When the lines cross, the solution is the single point marked. Slide one line until it is parallel to the other and the intersection disappears: no solution. Lay one exactly over the other and every point is shared: infinitely many.`}</p>

          <h3>One Solution</h3>
          <p>{`For $3x - y = 0$ and $5x + 2y = 22$, solve the first for $y = 3x$, then substitute: $5x + 2(3x) = 22$, so $11x = 22$, giving $x = 2$ and $y = 6$. The lines cross at exactly one point, $(2, 6)$.`}</p>

          <h3>No Solution</h3>
          <p>{`For $8x - 2y = 5$ and $-12x + 3y = 7$, multiply the first equation by $\\frac{3}{2}$ to get $12x - 3y = 7.5$. Adding this to the second equation gives $0 = 14.5$, which is false. No values of $x$ and $y$ can satisfy both equations, so the system is inconsistent. The two lines are parallel and never meet.`}</p>

          <h3>Infinitely Many Solutions</h3>
          <p>{`For $3x - 6y = 12$ and $4x - 8y = 16$, both equations describe the exact same line. The second equation is just the first multiplied by $\\frac{4}{3}$, which never changes which points satisfy it. Let $t$ be any real number and set $x = t$. Then $y = \\frac{1}{2}t - 2$. Every value of $t$ gives a point that satisfies both equations, so the solution set is $\\left(t, \\frac{1}{2}t - 2\\right)$ for any real $t$.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Modeling With Two-Variable Systems</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A rower takes longer to travel a fixed distance against a river current than with it. What do you think two different travel times let you calculate about the rower and the river?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Two separate travel times give two separate equations relating the rower's speed and the current's speed. Solving that system finds both speeds at once.`}</p>
            </details>
          </div>

          <p>{`Real situations with two unknown quantities and two independent conditions translate directly into a two-variable linear system.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Set up a two-variable system whenever a word problem gives you two unknown quantities and two separate numeric facts that relate them.`}
          </p>

          <h3>A Distance-Speed-Time Problem</h3>
          <p>{`A rower travels 4 miles upstream against a current in $\\frac{3}{2}$ hours, and the same 4 miles downstream with the current in $\\frac{3}{4}$ hours. Let $x$ be the rower's speed in still water and $y$ be the speed of the current. Upstream, the current works against the rower, so the equation is $(x - y)\\left(\\frac{3}{2}\\right) = 4$. Downstream, the current helps, so $(x + y)\\left(\\frac{3}{4}\\right) = 4$.`}</p>
          <p>{`Solving the first equation gives $x - y = \\frac{8}{3}$. Solving the second gives $x + y = \\frac{16}{3}$. Adding these two results gives $2x = 8$, so $x = 4$. Then $y = \\frac{16}{3} - 4 = \\frac{4}{3}$. The rower's speed in still water is 4 miles per hour, and the current's speed is $\\frac{4}{3}$ miles per hour.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the upstream equation subtract the current's speed while the downstream equation adds it, even though both trips cover the same 4 miles?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Going upstream, the current pushes against the rower, slowing the net speed to rowing speed minus current speed. Going downstream, the current pushes along with the rower, so the net speed is rowing speed plus current speed.`}</p>
            </details>
          </div>

          <h3>A Mixture Problem</h3>
          <p>{`A winery wants to make 1000 liters of 16% alcohol wine. It blends its own 10% wine with a stronger 70% alcohol solution. Let $x$ be the liters of 10% wine and $y$ be the liters of 70% solution. The total volume gives $x + y = 1000$. The total alcohol content gives $0.10x + 0.70y = 0.16(1000)$, which simplifies to $x + 7y = 1600$.`}</p>
          <p>{`Subtracting the first equation from the second gives $6y = 600$, so $y = 100$. Then $x = 1000 - 100 = 900$. The blend needs 900 liters of the 10% wine and 100 liters of the 70% solution.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the alcohol-content equation need a different coefficient on $x$ and $y$, even though the volume equation treats them the same?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The volume equation only counts liters, so a liter of either liquid counts the same. The alcohol equation counts a fraction of each liter, 10% for one liquid and 70% for the other, so the two unknowns need different coefficients to reflect their different alcohol strengths.`}</p>
            </details>
          </div>

          <h3>More Situations With the Same Pattern</h3>
          <p>{`Many other real situations reduce to the same two-variable pattern. These include:`}</p>
          <ul className="lrn-list">
            <li>{`splitting a sum between two numbers`}</li>
            <li>{`counting dimes and quarters that add to a target value`}</li>
            <li>{`splitting adult and child admission tickets`}</li>
            <li>{`blending two grades of gasoline or two coffee blends`}</li>
            <li>{`finding an airplane's speed against a headwind and tailwind`}</li>
            <li>{`finding a boat's speed against a current`}</li>
            <li>{`mixing acid solutions or salt brine at different concentrations`}</li>
            <li>{`splitting an investment across two accounts at different interest rates`}</li>
            <li>{`timing two vehicles that leave in opposite directions`}</li>
            <li>{`splitting an exercise routine between two activities at different speeds`}</li>
          </ul>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Augmented Matrices and Elementary Row Operations</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Instead of writing out the unknowns $x$, $y$, and $z$ every time, what do you think you could keep track of if you only wrote down the numbers in front of them?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`You could track the entire system using a rectangular array of just the coefficients and constants. Position in the array would replace the variable names, saving repeated writing.`}</p>
            </details>
          </div>

          <h3>Matrices</h3>
          <p>
            {`You already met matrices. Recall the basics: a matrix is a rectangular array of numbers in rows and columns, its `}
            <strong>{`dimension`}</strong>
            {` $m \\times n$ counts $m$ rows by $n$ columns, and the `}
            <strong>{`entry`}</strong>
            {` $a_{ij}$ sits in row $i$, column $j$. Here you put matrices to work solving systems.`}
          </p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Switch from equations to matrices whenever a system has enough unknowns or equations that writing every variable name repeatedly becomes error-prone.`}
          </p>

          <h3>The Augmented Matrix</h3>
          <p>
            {`A general system of $m$ linear equations in $n$ unknowns has a coefficient in front of every unknown in every equation, written with double subscripts. The `}
            <strong>{`augmented matrix`}</strong>
            {` collects only these numbers: the coefficients form one block, written $A$, and the constants on the right side of each equation form one extra column, written $[A \\mid b]$. When you build an augmented matrix, list the unknowns in the same order in every equation, and place the constant terms in the rightmost column.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Keeping the unknowns in a fixed order matters because the matrix no longer shows the variable names.`}</p>
            <p>{`Position alone tells you which column belongs to which unknown.`}</p>
          </div>

          <p>{`For the system $6x - 2y - z = 4$, $x + 3z = 1$, $7y + z = 5$, write every equation with $x$, $y$, and $z$ in that order, filling in a zero coefficient where an unknown is missing. The augmented matrix is:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 6 & -2 & -1 & 4 \\\\ 1 & 0 & 3 & 1 \\\\ 0 & 7 & 1 & 5 \\end{array}\\right]$$`}</span>
          </div>

          <h3>Elementary Row Operations</h3>
          <p>
            {`You already met the three `}
            <strong>{`elementary row operations`}</strong>
            {` when finding matrix inverses. They transform a matrix without changing the underlying system's solution set: multiply a row by a nonzero constant ($kR_i$), interchange two rows ($R_i \\leftrightarrow R_j$), and add a multiple of one row to another row ($R_i + kR_j \\to R_i$). Each operation mirrors a legal operation on the original equations: multiplying an equation by a nonzero number, swapping the order equations are listed in, or adding a multiple of one equation to another.`}
          </p>

          <h3>Each Operation on Real Numbers</h3>
          <p>{`Watch each operation change a small matrix. Swapping two rows just reorders them. Here $R_1 \\leftrightarrow R_2$ brings a nonzero entry to the top:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{cc|c} 0 & 2 & 4 \\\\ 1 & 3 & 5 \\end{array}\\right] \\longrightarrow \\left[\\begin{array}{cc|c} 1 & 3 & 5 \\\\ 0 & 2 & 4 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Scaling a row multiplies every entry in it by one nonzero number. Here $\\frac{1}{2}R_1$ turns the leading entry into a leading 1:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{cc|c} 2 & 6 & 8 \\\\ 0 & 1 & 3 \\end{array}\\right] \\longrightarrow \\left[\\begin{array}{cc|c} 1 & 3 & 4 \\\\ 0 & 1 & 3 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Adding a multiple of one row to another clears an entry. Here $R_2 - 2R_1 \\to R_2$ forces a zero below the leading 1:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{cc|c} 1 & 3 & 4 \\\\ 2 & 5 & 9 \\end{array}\\right] \\longrightarrow \\left[\\begin{array}{cc|c} 1 & 3 & 4 \\\\ 0 & -1 & 1 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Each new matrix describes the exact same solution set as the one before it. The operations only rewrite the system, never change its answers.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Row-Echelon Form and Reduced Row-Echelon Form</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If you kept applying row operations to push a matrix into the simplest possible shape, what pattern of zeros and ones do you think you would end up with?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A staircase pattern of leading 1's moving down and to the right, with zeros below each leading 1, or zeros both above and below each leading 1 for the fully reduced version.`}</p>
            </details>
          </div>

          <h3>Row-Echelon Form</h3>
          <p>
            {`A matrix is in `}
            <strong>{`row-echelon form`}</strong>
            {` when it satisfies three conditions. First, in every row that is not entirely zero, the first nonzero number is a 1, called a `}
            <strong>{`leading 1`}</strong>
            {`. Second, any rows made entirely of zeros sit at the bottom of the matrix. Third, moving down through the nonzero rows, each leading 1 sits further to the right than the leading 1 in the row above it.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Reduced row-echelon form</span>
            <div className="lrn-definition-desc">
              <p>{`Reduced row-echelon form (rref) adds one more condition on top of these three: every column that contains a leading 1 has zeros in every other position of that column, both above and below the leading 1.`}</p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Row-echelon form is enough to finish solving with back-substitution. Reduced row-echelon form reads the solution straight off the matrix, with no extra substitution needed.`}
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Row-echelon form`}</span>
              <p>{`Only requires zeros below each leading 1, so it still needs a back-substitution pass to finish solving.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Reduced row-echelon form`}</span>
              <p>{`Requires zeros both above and below each leading 1, so the solution can be read directly from the matrix.`}</p>
            </div>
          </div>

          <p>{`Picture a matrix using a star to mean "any number, including zero." A matrix in row-echelon form looks like a staircase of 1's moving down and to the right, with stars filling every entry to the right of each leading 1 and zeros everywhere below the staircase. A matrix in reduced row-echelon form has that same staircase of leading 1's, but now every entry above and below each leading 1 is also forced to zero, leaving stars only in the columns that never contain a leading 1.`}</p>

          <h3>A Concrete Comparison</h3>
          <p>{`Look at two real matrices. The first sits in row-echelon form. Every nonzero row starts with a leading 1, each leading 1 sits further right than the one above, and every entry below each leading 1 is zero. The entries above the leading 1's, such as the $4$ and the $6$, are still free to be anything.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc} 1 & 4 & -3 \\\\ 0 & 1 & 6 \\\\ 0 & 0 & 1 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`The second matrix sits in reduced row-echelon form. It keeps the same staircase of leading 1's, but now every entry above and below each leading 1 is also forced to zero. Read as a system, it says $x_1 = 4$, $x_2 = 7$, $x_3 = -1$ directly, with no further work.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 0 & 0 & 4 \\\\ 0 & 1 & 0 & 7 \\\\ 0 & 0 & 1 & -1 \\end{array}\\right]$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does reduced row-echelon form need every entry in a leading 1's column to be zero, while ordinary row-echelon form only needs the entries below it to be zero?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Clearing the entries above each leading 1, in addition to below, isolates every leading variable completely in its own row. That isolation is exactly what lets you read the solution straight off the matrix without further substitution.`}</p>
            </details>
          </div>

          <h3>Leading Variables and Free Variables</h3>
          <p>
            {`Every column with a leading 1 corresponds to a `}
            <strong>{`leading variable`}</strong>
            {` (also called a pivot variable). Every column without a leading 1 corresponds to a `}
            <strong>{`free variable`}</strong>
            {`, one that can take any value. You assign it a parameter.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Free variables exist precisely because there are more unknowns than leading 1's.`}</p>
            <p>{`Each extra unknown, beyond the number of pivots, needs a parameter to describe every possible solution.`}</p>
          </div>

          <h3>Uniqueness of Reduced Row-Echelon Form</h3>
          <p>{`A key fact about reduced row-echelon form: every matrix has exactly one reduced row-echelon form, no matter which sequence of row operations you use to reach it. Plain row-echelon form does not share this property. Different valid sequences of row operations can leave a matrix in different row-echelon forms, even though every one of them still describes the same solution set.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Gaussian Elimination and Back-Substitution</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If you reduce a system down to a matrix where the last row reads directly as "$z$ equals a number," what do you think you can do with that value to find the rest of the unknowns?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Substitute that known value upward into the equation above it to solve for the next unknown, then continue substituting upward through the remaining equations.`}</p>
            </details>
          </div>

          <p>
            <strong>{`Gaussian elimination`}</strong>
            {` is the systematic procedure for reducing an augmented matrix to row-echelon form using elementary row operations, then finishing with `}
            <strong>{`back-substitution`}</strong>
            {`: solving the last equation first, then substituting that value upward into the equations above it.`}
          </p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Use Gaussian elimination with back-substitution whenever you want a direct path to a solution without doing the extra row operations that full reduction to rref requires.`}
          </p>

          <figure
            className="lrn-figure"
            style={{ maxWidth: '675px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <VizFigure aspect="auto" size="compact" title="Carl Friedrich Gauss">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Carl_Friedrich_Gauss.jpg"
                alt="Portrait of Carl Friedrich Gauss"
                style={{ width: '100%', display: 'block' }}
              />
              <figcaption>
                {'Carl Friedrich Gauss (1777 to 1855). '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Carl_Friedrich_Gauss.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </figcaption>
            </VizFigure>
          </figure>

          <p>{`Carl Friedrich Gauss (1777 to 1855) was a German mathematician who gave his name to this elimination procedure. Variations on systematic equation-solving predate him by centuries. He made basic contributions across number theory, astronomy, and statistics. People remember him as one of history's most influential mathematicians.`}</p>

          <h3>The Six-Step Reduction Procedure</h3>
          <p>{`The full procedure for reducing a matrix to row-echelon form has six explicit steps.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Try predicting each step before reading it. Given a matrix, how would you systematically clear out entries below a diagonal, one column at a time?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Work one column at a time, left to right. Bring a nonzero entry to the top, scale it to a leading 1, clear everything below it, then repeat on the smaller matrix that remains.`}</p>
            </details>
          </div>

          <ol className="lrn-list">
            <li>{`Locate the leftmost column that is not entirely zero.`}</li>
            <li>{`If needed, interchange rows so a nonzero entry sits at the top of that column.`}</li>
            <li>{`Divide that top row by its leading entry, turning it into a leading 1.`}</li>
            <li>{`Add suitable multiples of the top row to the rows below it, so every entry below the leading 1 becomes zero.`}</li>
            <li>{`Cover that top row, and mentally repeat steps 1 through 4 on the smaller remaining matrix beneath it.`}</li>
            <li>{`Repeat until the entire matrix is in row-echelon form.`}</li>
          </ol>

          <h3>A Worked Example</h3>
          <p>{`Solve the system $x + y + 2z = 9$, $2x + 4y - 3z = 1$, $3x + 6y - 5z = 0$. Start by writing its augmented matrix.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\\\ 2 & 4 & -3 & 1 \\\\ 3 & 6 & -5 & 0 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Clear the first column below the top 1. Replace row 2 with $R_2 - 2R_1$, and replace row 3 with $R_3 - 3R_1$.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\\\ 0 & 2 & -7 & -17 \\\\ 0 & 3 & -11 & -27 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Turn the second pivot into a leading 1. Scale row 2 by $\\frac{1}{2}$, giving $R_2 \\to \\frac{1}{2}R_2$.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\\\ 0 & 1 & -\\frac{7}{2} & -\\frac{17}{2} \\\\ 0 & 3 & -11 & -27 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Clear the entry below this new leading 1. Replace row 3 with $R_3 - 3R_2$.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\\\ 0 & 1 & -\\frac{7}{2} & -\\frac{17}{2} \\\\ 0 & 0 & -\\frac{1}{2} & -\\frac{3}{2} \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Turn the last pivot into a leading 1. Scale row 3 by $-2$, giving $R_3 \\to -2R_3$. The matrix now sits in row-echelon form.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\\\ 0 & 1 & -\\frac{7}{2} & -\\frac{17}{2} \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Now finish with back-substitution. The bottom row gives $z = 3$. Row 2 gives $y - \\frac{7}{2}(3) = -\\frac{17}{2}$, so $y = 2$. Row 1 gives $x + 2 + 2(3) = 9$, so $x = 1$. The solution is $(1, 2, 3)$.`}</p>

          <p>{`Check the answer in all three original equations. First: $1 + 2 + 2(3) = 9$. Second: $2(1) + 4(2) - 3(3) = 2 + 8 - 9 = 1$. Third: $3(1) + 6(2) - 5(3) = 3 + 12 - 15 = 0$. Every equation holds, so $(1, 2, 3)$ is correct.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does working the same steps on the equations and on the augmented matrix, side by side, always produce identical numbers in both columns?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The row operations are defined to mirror legal equation operations exactly: scaling a row matches scaling an equation, and adding rows matches adding equations. Since both start from the same system, applying matching operations keeps them in lockstep at every stage.`}</p>
            </details>
          </div>

          <h3>Back-Substitution on a Triangular System</h3>
          <p>{`A three-equation, three-unknown system with a triangular structure shows back-substitution in its clearest form. For $x - 2y - z = 1$, $y + 2z = 5$, $z = 3$, the last equation already gives $z = 3$. Substitute into the second equation: $y + 2(3) = 5$, so $y = -1$. Substitute both into the first equation: $x - 2(-1) - 3 = 1$, so $x = 2$. The solution is $(2, -1, 3)$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why can you solve this triangular system just by substituting upward, without needing any further elimination?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Each equation, from bottom to top, introduces exactly one new unknown once the equations below it are already solved. That structure lets substitution alone finish the job, with no extra row operations needed.`}</p>
            </details>
          </div>

          <p>{`A system that does not start in triangular form needs elimination first. Clear $x$ from the lower equations using the first equation. Then clear $y$ from the last equation using the new second equation. This produces a triangular system, which back-substitution finishes, exactly as the augmented-matrix reduction above showed.`}</p>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Checking Your Work</span>
            <p>{`Graphing calculators can automate this entire process. A built-in ref command reduces a matrix to row-echelon form. A separate rref command reduces it all the way to reduced row-echelon form. After finishing any elimination by hand, always check your answer. Substitute the solution back into every original equation.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Gauss-Jordan Elimination</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`If you kept eliminating entries above each leading 1, not just below it, what do you think the final matrix would let you skip?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It would let you skip back-substitution entirely, since reduced row-echelon form isolates each leading variable completely, letting the solution be read straight off the matrix.`}</p>
            </details>
          </div>

          <p>
            <strong>{`Gauss-Jordan elimination`}</strong>
            {` continues past row-echelon form all the way to reduced row-echelon form. It clears every entry above each leading 1 as well as below it. Because the matrix ends in reduced form, you read the solution straight off, with no back-substitution step.`}
          </p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Reach for Gauss-Jordan elimination when you want the solution to appear directly in the matrix, or when a system has free variables you need to express cleanly as parameters.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Wilhelm Jordan (1842 to 1899)</span>
            <div className="lrn-definition-desc">
              <p>{`Jordan, a German engineer, gave his name to this fuller reduction. He developed it for land surveying, the work of measuring exact positions and distances on the Earth.`}</p>
            </div>
          </div>

          <h3>Reading the Solution Straight Off the Matrix</h3>
          <p>{`Continue the earlier row-echelon matrix all the way to reduced row-echelon form. Start from the row-echelon result of the system $x + y + 2z = 9$, $2x + 4y - 3z = 1$, $3x + 6y - 5z = 0$.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\\\ 0 & 1 & -\\frac{7}{2} & -\\frac{17}{2} \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Clear the third column above its leading 1. Replace row 2 with $R_2 + \\frac{7}{2}R_3$, and replace row 1 with $R_1 - 2R_3$.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 1 & 0 & 3 \\\\ 0 & 1 & 0 & 2 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Now clear the second column above its leading 1. Replace row 1 with $R_1 - R_2$.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\\\ 0 & 1 & 0 & 2 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`The matrix now sits in reduced row-echelon form. Read the solution straight off: $x = 1$, $y = 2$, $z = 3$. No back-substitution is needed. This matches the answer the row-echelon route reached, so both procedures solve the same system.`}</p>

          <h3>Free Variables From Gauss-Jordan Elimination</h3>
          <p>{`Take a system of 4 equations in 6 unknowns. Reducing its augmented matrix all the way to reduced row-echelon form leaves 3 leading 1's. So 3 unknowns are leading variables. The remaining $6 - 3 = 3$ unknowns, here $x_2$, $x_4$, and $x_5$, are free variables. Assign each free variable its own parameter, then read the leading variables directly from the reduced matrix in terms of those parameters.`}</p>

          <h3>Gaussian Elimination vs Gauss-Jordan Elimination</h3>
          <p>{`The exact same system, solved instead by reducing only to row-echelon form and finishing with back-substitution, reaches the same solution through a different route. Reducing to row-echelon form takes fewer row operations, but then you must substitute upward through each remaining equation by hand. Reducing all the way to reduced row-echelon form takes more row operations up front, but the final substitution step disappears entirely.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Gaussian elimination`}</span>
              <p>{`Stops at row-echelon form and finishes with back-substitution, using fewer total row operations.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Gauss-Jordan elimination`}</span>
              <p>{`Continues to reduced row-echelon form and reads the answer directly, but costs roughly 50% more arithmetic operations on large systems.`}</p>
            </div>
          </div>

          <h3>Reading the Answer Directly</h3>
          <p>{`Continue the row-echelon matrix from the earlier worked example all the way to reduced row-echelon form. It ended in this shape:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\\\ 0 & 1 & -\\frac{7}{2} & -\\frac{17}{2} \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`First clear the entries above the third leading 1. Replace row 2 with $R_2 + \\frac{7}{2}R_3$, and replace row 1 with $R_1 - 2R_3$.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 1 & 0 & 3 \\\\ 0 & 1 & 0 & 2 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`Now clear the entry above the second leading 1. Replace row 1 with $R_1 - R_2$. The matrix reaches reduced row-echelon form.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left[\\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\\\ 0 & 1 & 0 & 2 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]$$`}</span>
          </div>

          <p>{`The matrix now reads $x = 1$, $y = 2$, $z = 3$ straight off, with no back-substitution. This matches the answer Gaussian elimination found, as it must.`}</p>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Solutions in Larger Systems: None, One, or Infinitely Many</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Three planes float in three-dimensional space. What do you think are the different ways all three planes could intersect, or fail to intersect, at once?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`They can meet at exactly one shared point, fail to share any common point at all, or intersect along a shared line or plane, giving infinitely many shared points.`}</p>
            </details>
          </div>

          <p>{`Just as with two-variable systems, a larger linear system has exactly one solution, no solution, or infinitely many solutions.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`After reducing a system's augmented matrix, read off the solution count by checking for a false row, a full staircase of leading 1's, or leftover free variables.`}
          </p>

          <p>{`Geometrically, each equation in three unknowns describes a plane in three-dimensional space. Three planes can meet at exactly one shared point, fail to share any common point, or intersect along a shared line or plane, giving infinitely many shared points.`}</p>
          <p>
            {`A reduced matrix reveals which case you are in. A row that reduces to something like $0 = 1$ signals no solution, because no values of the unknowns make a false numerical statement true. A full staircase of leading 1's, one per unknown, with no free variables, signals exactly one solution. A matrix with a leftover row of all zeros, meaning fewer leading 1's than unknowns, signals free variables and infinitely many solutions. This last case is sometimes called a `}
            <strong>{`dependent system`}</strong>
            {`.`}
          </p>

          <h3>No Solution</h3>
          <p>{`For a specific three-variable system, elimination can reach a row that reads $0 = -2$. Since this statement is false for every value of the unknowns, the system is inconsistent and has no solution.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does a row like $0 = -2$ prove there is no solution, when every step used to reach it was a valid row operation on a true system?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Row operations only rewrite a system into an equivalent form, never changing its solution set. If a valid rewrite produces a false statement, the original system could never have had a solution either, since an equivalent system shares the exact same solution set.`}</p>
            </details>
          </div>

          <h3>Infinitely Many Solutions</h3>
          <p>{`A different three-variable system reduces instead to a row that reads $0 = 0$. This row carries no information and can be dropped. What remains is fewer equations than unknowns, so one unknown becomes a free variable $t$. The full solution set then takes a shape written with a parameter, such as $(-3t, 2t + 2, t)$ for any real number $t$. This gives infinitely many solutions.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does dropping a $0 = 0$ row, rather than a $0 = 1$ row, lead to infinitely many solutions instead of none?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`A $0 = 0$ row is always true and carries no new restriction, so it can be safely removed, leaving one fewer independent equation than unknowns and creating a free variable. A $0 = 1$ row is always false, which makes the whole system impossible to satisfy.`}</p>
            </details>
          </div>

          <p>{`Working directly with the augmented matrix on another system, row-echelon form can also reveal a $0 = 1$ row. That means no solution exists. Or it can reveal a dropped $0 = 0$ row that leaves one free variable. Such a case gives a solution set written with a parameter, taking a shape like $(7t - 5, 3t + 1, t)$ for any real number $t$.`}</p>
          <p>{`A system with three equations but four unknowns, $x$, $y$, $z$, and $w$, can leave two free variables after reduction rather than one. Assigning parameters $s$ and $t$ to the two free variables gives a solution set with a shape like $x = 3s + 4t$, $y = 5$, $z = s$, $w = t$. When a solution has more than one free parameter, the different parameters need not take the same value. Each one ranges on its own over all real numbers.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A system needs at least as many independent equations as unknowns to pin down a single unique solution. Every equation short of that count leaves one more unknown free to vary.`}</p>
            <p>{`This is why counting leading 1's against the total number of unknowns tells you the solution count before you finish solving.`}</p>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Homogeneous Systems</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A linear system has every constant term equal to zero. What do you think is one solution that always works, no matter what the coefficients are?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Setting every unknown to zero always works, since every term on the left side becomes zero, matching the zero on the right side of every equation.`}</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Homogeneous system</span>
            <div className="lrn-definition-desc">
              <p>{`A linear system where every equation's constant term equals zero. Setting every unknown equal to zero always satisfies a homogeneous system, since every left side reduces to zero.`}</p>
              <p>
                {`This all-zero solution is called the `}
                <strong>{`trivial solution`}</strong>
                {`. Any other solution, where at least one unknown is nonzero, is called a `}
                <strong>{`nontrivial solution`}</strong>
                {`.`}
              </p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong>{' '}
            {`Recognize a homogeneous system whenever every equation already equals zero on the right side. This happens often when modeling systems where amounts must balance out to zero.`}
          </p>

          <p>{`For a system of 4 equations in 5 unknowns, Gauss-Jordan elimination reduces the augmented matrix and leaves two free variables, $s$ and $t$. Setting $s = 0$ and $t = 0$ recovers the trivial solution, all unknowns equal to zero. Any other choice of $s$ and $t$ produces a nontrivial solution.`}</p>

          <h3>The Homogeneous System Theorem</h3>
          <p>
            {`A homogeneous system with more unknowns than equations always has infinitely many solutions, since it is guaranteed to have at least one nontrivial solution alongside the trivial one. Call this the `}
            <strong>{`homogeneous system theorem`}</strong>
            {`.`}
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Why the theorem holds</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Suppose a homogeneous system has $m$ equations and $n$ unknowns, with more unknowns than equations, so $n$ is greater than $m$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`After reducing the augmented matrix to reduced row-echelon form, the number of nonzero rows, $r$, can be at most $m$, since there were only $m$ rows to begin with.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Because $n$ is greater than $m$, and $r$ is at most $m$, it follows that $r$ is less than $n$. That means fewer leading 1's than unknowns, so at least $n - r$ unknowns are free variables.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Any free variable can be set to a nonzero value, producing a nontrivial solution, and since a free variable can take infinitely many values, the system has infinitely many solutions.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`This theorem applies only to homogeneous systems. A nonhomogeneous system with more unknowns than equations is not guaranteed to be consistent at all, let alone have infinitely many solutions.`}</p>
            <p>{`A nonzero constant term can still produce a contradictory row during reduction, even when unknowns outnumber equations.`}</p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Open Questions</span>
            <p>{`Two open questions extend this reasoning, worth thinking through even without a full worked answer.`}</p>
            <ul className="lrn-list">
              <li>{`Can you show that two linear equations with the identical solution set must in fact be the same equation?`}</li>
              <li>{`Can you show that a homogeneous system's two distinct nontrivial solutions, averaged together, always produce a third valid solution, proving that any homogeneous system with one nontrivial solution actually has infinitely many?`}</li>
            </ul>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Modeling With Larger Systems</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`An inheritance is split across three investment accounts with three different conditions attached. What do you think three separate dollar conditions let you calculate about a three-way split?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Three independent dollar conditions let you set up and solve a three-equation, three-unknown system, pinning down the exact dollar amount placed in each of the three accounts.`}</p>
            </details>
          </div>

          <p>{`Larger real-world problems, with three or more unknown quantities, translate into systems with three or more equations, solved the same way as smaller systems.`}</p>
          <p>
            <strong>When to use this:</strong>{' '}
            {`Set up a system with as many equations as unknowns whenever a real problem gives one independent numeric condition for each unknown quantity you need to find.`}
          </p>

          <h3>A Financial-Planning Problem</h3>
          <p>{`Jason inherited $\\$50{,}000$ and splits it across a money-market fund, a blue-chip stock fund, and a high-tech stock fund. Let $x$, $y$, and $z$ be the amounts, in dollars, placed in each fund. The total gives $x + y + z = 50000$. The funds pay 5%, 9%, and 16% in that order, and together must earn $\\$4000$ in interest: $0.05x + 0.09y + 0.16z = 4000$. Jason also wants the money-market amount to equal three times the high-tech amount: $x = 3z$.`}</p>
          <p>{`Substitute $x = 3z$ into the total equation: $3z + y + z = 50000$, so $y = 50000 - 4z$. Substitute both $x = 3z$ and this expression for $y$ into the interest equation: $0.05(3z) + 0.09(50000 - 4z) + 0.16z = 4000$. This simplifies to $0.15z + 4500 - 0.36z + 0.16z = 4000$, then $-0.05z = -500$, so $z = 10000$. Then $x = 3(10000) = 30000$, and $y = 50000 - 40000 = 10000$. Jason should place $\\$30{,}000$ in the money-market fund, $\\$10{,}000$ in the blue-chip fund, and $\\$10{,}000$ in the high-tech fund.`}</p>

          <h3>A Nutrition Problem</h3>
          <p>{`Three diet foods, each with different amounts of potassium, protein, and vitamin D per ounce, must be combined to meet exact daily targets for all three nutrients. Setting up one linear equation per nutrient and one unknown per food produces a three-equation, three-unknown system. Solving it by Gaussian elimination or Gauss-Jordan elimination gives the exact number of ounces of each food that hits every nutrient target.`}</p>

          <h3>An Electrical Circuit Problem</h3>
          <p>{`Kirchhoff's laws describe how current splits and combines across the branches of a circuit. A three-branch circuit with unknown currents $I_1$, $I_2$, and $I_3$ gives the system $I_1 + I_2 - I_3 = 0$, $16I_1 - 8I_2 = 4$, $8I_2 + 4I_3 = 5$. From the first equation, $I_3 = I_1 + I_2$. Substituting into the third equation gives $8I_2 + 4(I_1 + I_2) = 5$, which simplifies to $4I_1 + 12I_2 = 5$. Dividing the second equation by 4 gives $4I_1 - 2I_2 = 1$. Subtracting this from $4I_1 + 12I_2 = 5$ gives $14I_2 = 4$, so $I_2 = \\frac{2}{7}$. Substituting back gives $4I_1 - 2\\left(\\frac{2}{7}\\right) = 1$, so $I_1 = \\frac{11}{28}$. Then $I_3 = I_1 + I_2 = \\frac{11}{28} + \\frac{8}{28} = \\frac{19}{28}$.`}</p>

          <h3>More Situations With the Same Pattern</h3>
          <p>{`Many other real problems reduce to the same three-or-more-unknown pattern. These include:`}</p>
          <ul className="lrn-list">
            <li>{`allocating farmland across three crops`}</li>
            <li>{`splitting a bond portfolio across short, intermediate, and long-term investments`}</li>
            <li>{`blending gasoline across three grades`}</li>
            <li>{`mixing rabbit feed from three pellet types`}</li>
            <li>{`planning a diet from three food servings`}</li>
            <li>{`blending fruit juices from three concentrates`}</li>
            <li>{`allocating factory output for three appliance types across three factories`}</li>
            <li>{`tracking a stock portfolio across three holdings and three trading days`}</li>
            <li>{`planning a vitamin regimen from three pill types`}</li>
            <li>{`mixing three acid solutions at different concentrations`}</li>
            <li>{`timing a three-leg race across three competitors`}</li>
            <li>{`reassigning 100 students across three classrooms`}</li>
            <li>{`scheduling furniture production across cutting, assembly, and finishing stages`}</li>
            <li>{`balancing traffic flow through a network of one-way streets with four unknown flow rates`}</li>
          </ul>
        </>,

        <>
          <div className="lrn-header">
            <div>
              <h2>Cramer's Rule: A Named Alternative</h2>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You have solved every system so far by reducing rows. What do you think a method built from a single formula per unknown would trade away compared to row reduction?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A formula-per-unknown method reads cleanly for a small square system with one unique answer. It struggles when a system has free variables or many equations, where row reduction still works directly.`}</p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">See Also</span>
            <p>{`Cramer's rule is a different method for solving a linear system, one built from determinants rather than row reduction. It belongs to matrix theory covered separately, alongside the study of determinants themselves.`}</p>
            <p>{`Row reduction, the method built throughout this topic, remains the more general and more commonly used technique, especially for larger systems and systems with free variables.`}</p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What do you think happens if you try to graph $y = \\sin x$ next to a straight line and call it a linear equation?',
        a: 'It fails, because $\\sin x$ is not the unknown $x$ raised to the first power alone. A linear equation needs every unknown to appear by itself, to the first power, with no functions wrapped around it. $y = \\sin x$ breaks that rule, so it is not linear.'
      },
      {
        q: 'Is $x_1 - 2x_2 - 3x_3 + x_4 = 7$ a linear equation? Explain why.',
        a: 'Yes, it is linear. Every unknown, $x_1$ through $x_4$, appears alone and to the first power. No unknown multiplies another, and none sits inside a root or trig function.'
      },
      {
        q: 'Classify $3x + 2y - z + xz = 4$ as linear or nonlinear, and explain your reasoning.',
        a: 'It is nonlinear. The term $xz$ multiplies two unknowns together, and a linear equation never allows a product of two unknowns.'
      },
      {
        q: 'For $4x - 2y = 1$, write the solution set two different ways: once by setting $x$ equal to a parameter, and once by setting $y$ equal to a parameter.',
        a: 'Setting $x = t$ gives $y = 2t - \\frac{1}{2}$. Setting $y = t$ gives $x = \\frac{1}{2}t + \\frac{1}{4}$. Both describe the exact same set of solutions, just written with a different free parameter.'
      },
      {
        q: 'A physics equation reads $F = ma^2$, treating $F$ and $a$ as unknowns for a fixed mass $m$. Is this equation linear in $F$ and $a$? Why or why not?',
        a: 'It is not linear, because $a$ appears squared instead of to the first power. A linear equation requires every unknown to appear only to the first power, so $a^2$ disqualifies it.'
      },
      {
        q: 'Why can an equation with three unknowns and only one equation never have a single unique solution?',
        a: 'One equation gives one condition, but three unknowns need three independent conditions to pin down a single point. With only one condition, two of the three unknowns stay free, so the solution set needs two parameters and has infinitely many members.'
      },
      {
        q: "What do you think must be true of a system's equations for the system to have zero solutions, rather than one or many?",
        a: 'The equations must contradict each other. Combining them through valid algebra must eventually produce a false numerical statement, such as $0$ equals a nonzero number, which no values of the unknowns can satisfy.'
      },
      {
        q: 'Define a consistent linear system and an inconsistent linear system.',
        a: 'A consistent system has at least one solution that satisfies every equation at once. An inconsistent system has no such solution; combining its equations always leads to a contradiction.'
      },
      {
        q: 'Two systems look completely different on paper, but every solution of one also solves the other, and vice versa. What term describes this relationship?',
        a: 'They are called equivalent systems. Equivalent systems share the exact same solution set even though their equations are written differently.'
      },
      {
        q: 'Why does every method for solving a linear system rely on rewriting it as an equivalent, simpler system?',
        a: "Because changing a system's form is only safe if the solution set stays identical. Every elimination or substitution step must preserve the original solutions, or the final answer would be wrong. Working toward simpler equivalent systems keeps the answer valid at every step."
      },
      {
        q: 'What do you think happens when you substitute $y = 1 - 2x$ into $3x + 4y = 14$?',
        a: 'The equation becomes $3x + 4(1 - 2x) = 14$, which has only one unknown, $x$. Solving it gives $x = -2$, and substituting back gives $y = 5$.'
      },
      {
        q: 'Solve $2x + y = 1$ and $3x + 4y = 14$ using substitution. Show your steps.',
        a: 'Solve the first equation for $y$: $y = 1 - 2x$. Substitute into the second: $3x + 4(1 - 2x) = 14$, which simplifies to $-5x = 10$, so $x = -2$. Then $y = 1 - 2(-2) = 5$. The solution is $(-2, 5)$.'
      },
      {
        q: 'Solve $3x + 2y = 14$ and $x - 2y = 2$ using elimination. Show your steps.',
        a: 'The $y$-terms have opposite signs and equal size, so add the equations directly: $4x = 16$, giving $x = 4$. Substitute into $x - 2y = 2$ to get $4 - 2y = 2$, so $y = 1$. The solution is $(4, 1)$.'
      },
      {
        q: 'A system graphed with decimal coefficients like $1.35x - 2.13y = -2.36$ gives a solution near $(0.30, 1.30)$ by zooming in on a graph. Why is this answer only approximate, unlike the exact answers from substitution or elimination?',
        a: 'Reading a graph depends on how precisely you can zoom and measure the intersection point by eye. Substitution and elimination use exact algebra instead, so they produce exact fractions or whole numbers rather than a rounded estimate.'
      },
      {
        q: 'A cost equation and a revenue equation, both linear in units sold and price, need to be solved together to find a break-even point. Which two of the three two-variable methods would give an exact answer?',
        a: 'Substitution and elimination both give exact answers, because they use algebra rather than a visual read of a graph. The graphical method only gives an approximate answer.'
      },
      {
        q: 'A recipe scaling problem gives two linear equations relating flour and sugar in two different batch sizes. One equation already isolates the sugar amount. Which method fits best, and why?',
        a: 'Substitution fits best, because one equation already isolates sugar. You can substitute that expression directly into the other equation without extra algebra.'
      },
      {
        q: 'Two straight lines sit on the same coordinate plane. What do you think are the only three ways they can relate to each other?',
        a: 'They can cross at exactly one point, run parallel and never touch, or lie exactly on top of each other everywhere. These are the only three possible relationships between two straight lines.'
      },
      {
        q: 'Solve $3x - y = 0$ and $5x + 2y = 22$. How many solutions does this system have?',
        a: 'Solve the first for $y = 3x$, substitute into the second: $5x + 6x = 22$, so $x = 2$ and $y = 6$. The system has exactly one solution, $(2, 6)$, where the two lines cross.'
      },
      {
        q: 'Solve $8x - 2y = 5$ and $-12x + 3y = 7$. What does the result tell you about the number of solutions?',
        a: 'Multiplying the first equation by $\\frac{3}{2}$ and adding it to the second gives $0 = 14.5$, a false statement. The system has no solution, because the two lines are parallel and never meet.'
      },
      {
        q: 'Solve $3x - 6y = 12$ and $4x - 8y = 16$, and describe the full solution set.',
        a: 'Both equations describe the same line. Setting $x = t$ gives $y = \\frac{1}{2}t - 2$ for any real number $t$. The system has infinitely many solutions, one for every value of $t$.'
      },
      {
        q: 'Why does reaching a false statement like $0 = 14.5$ prove a system has no solution, rather than meaning an arithmetic mistake was made?',
        a: 'Every step used to reach that statement was a valid, reversible row or equation operation. If the operations are correct, a false numerical result means no values of the unknowns could have satisfied the original equations either.'
      },
      {
        q: 'A system reduces to $2x + 4y = 10$ and $x + 2y = 5$. What do you expect for its solution count, and why?',
        a: 'Infinitely many solutions, because the second equation is exactly half of the first. They describe the same line, so every point on that line is a shared solution.'
      },
      {
        q: 'A system reduces to $x + y = 4$ and $x + y = 9$. What do you expect for its solution count, and why?',
        a: 'No solution, because the left sides are identical but the right sides differ. Combining them forces a false statement like $4 = 9$, which no values of $x$ and $y$ can satisfy.'
      },
      {
        q: 'Why must two straight lines with the same slope either never meet or lie on top of each other everywhere, and never meet at just one point?',
        a: 'Lines with the same slope stay the same distance apart at every $x$-value. If that distance is ever zero, it stays zero everywhere, so the lines lie on top of each other. Otherwise the distance never reaches zero, so the lines never touch.'
      },
      {
        q: "A rower travels 4 miles upstream in $\\frac{3}{2}$ hours and 4 miles downstream in $\\frac{3}{4}$ hours. Set up and solve the system for the rower's speed and the current's speed.",
        a: "Let $x$ be the rower's speed and $y$ the current's speed. Upstream: $(x - y)\\left(\\frac{3}{2}\\right) = 4$, so $x - y = \\frac{8}{3}$. Downstream: $(x + y)\\left(\\frac{3}{4}\\right) = 4$, so $x + y = \\frac{16}{3}$. Adding gives $2x = 8$, so $x = 4$ miles per hour, and $y = \\frac{4}{3}$ miles per hour."
      },
      {
        q: 'A winery blends 10% alcohol wine with a 70% alcohol solution to make 1000 liters of 16% wine. Set up and solve the system for how many liters of each are needed.',
        a: 'Let $x$ be liters of the original wine and $y$ liters of the 70% solution. Volume: $x + y = 1000$. Alcohol: $x + 7y = 1600$. Subtracting gives $6y = 600$, so $y = 100$ liters, and $x = 900$ liters.'
      },
      {
        q: "Why does the upstream equation subtract the current's speed while the downstream equation adds it, even though both trips cover the same 4 miles?",
        a: 'Going upstream, the current pushes against the rower, slowing the net speed to rowing speed minus current speed. Going downstream, the current pushes along with the rower, so the net speed is rowing speed plus current speed.'
      },
      {
        q: "A boat travels 20 miles upstream in 2 hours and 20 miles downstream in 1 hour. Set up the linear system you would solve for the boat's speed and the current's speed. You do not need to solve it.",
        a: "Let $x$ be the boat's still-water speed and $y$ the current's speed. Upstream gives $(x - y)(2) = 20$. Downstream gives $(x + y)(1) = 20$. Solving this system finds both speeds, the same way as the rowing problem."
      },
      {
        q: "A chemist mixes a 20% acid solution with a 60% acid solution to make 500 milliliters of a 32% acid solution. Set up the two equations for this mixture, following the wine mixture's pattern.",
        a: 'Let $x$ be milliliters of the 20% solution and $y$ milliliters of the 60% solution. Volume: $x + y = 500$. Acid content: $0.20x + 0.60y = 0.32(500)$. Solving this system finds both amounts, the same way as the wine problem.'
      },
      {
        q: 'A problem gives you two unknown quantities and two separate numeric facts relating them. What do you think you should set up to solve it?',
        a: 'A two-variable linear system, with one equation for each numeric fact. Two independent linear conditions on two unknowns are exactly what a two-equation system is built to solve.'
      },
      {
        q: 'Besides rowing and wine mixtures, name three other real situations that reduce to a two-variable linear system.',
        a: "Examples include splitting a sum between two numbers, counting dimes and quarters that add to a target value, and finding an airplane's speed against a headwind and tailwind. Any problem with two unknowns and two independent numeric facts fits this pattern."
      },
      {
        q: 'Write the augmented matrix for $6x - 2y - z = 4$, $x + 3z = 1$, $7y + z = 5$.',
        a: 'List $x$, $y$, $z$ in the same order in every row, filling in zero where an unknown is missing. The augmented matrix is $\\left[\\begin{array}{ccc|c} 6 & -2 & -1 & 4 \\\\ 1 & 0 & 3 & 1 \\\\ 0 & 7 & 1 & 5 \\end{array}\\right]$.'
      },
      {
        q: 'Why does the equation $x + 3z = 1$ need a zero entry in the $y$-column of the augmented matrix, even though $y$ never appears in that equation?',
        a: 'The augmented matrix drops the variable names and relies only on column position to identify each unknown. Without a zero placeholder, the numbers in that row would shift into the wrong columns, and the matrix would misrepresent the equation.'
      },
      {
        q: 'Name the three elementary row operations and the equation-level move each one mirrors.',
        a: 'Multiplying a row by a nonzero constant mirrors multiplying an equation by a nonzero number. Interchanging two rows mirrors reordering the equations. Adding a multiple of one row to another mirrors adding a multiple of one equation to another.'
      },
      {
        q: 'What do you think you could keep track of if you wrote down only the coefficients of a system, instead of the full equations with variable names each time?',
        a: 'You could track the entire system using an augmented matrix, a compact rectangular array of just the coefficients and constants. Position in the matrix would replace the variable names, saving repeated writing.'
      },
      {
        q: 'A four-equation system in three unknowns needs its augmented matrix built. What dimension will that matrix have?',
        a: "A $4 \\times 4$ matrix, using the augmented-matrix convention: 4 rows for the 4 equations, and 4 columns, 3 for the unknowns' coefficients plus 1 for the constants column."
      },
      {
        q: 'A system has 2 equations in 5 unknowns. What dimension will its augmented matrix have?',
        a: "A $2 \\times 6$ matrix: 2 rows for the 2 equations, and 6 columns, 5 for the unknowns' coefficients plus 1 for the constants column."
      },
      {
        q: 'Why does keeping the unknowns in a fixed, consistent order matter when building an augmented matrix?',
        a: 'The matrix has no variable labels once it is built. If the order changed between equations, a coefficient would land in the wrong column, and the matrix would no longer represent the correct system.'
      },
      {
        q: 'If you kept applying row operations to push a matrix into the simplest possible shape, what pattern of zeros and ones do you think you would end up with?',
        a: "A staircase pattern of leading 1's moving down and to the right, with zeros below each leading 1 for row-echelon form, or zeros both above and below each leading 1 for reduced row-echelon form."
      },
      {
        q: 'State the three conditions that define row-echelon form.',
        a: "Every nonzero row's first nonzero entry is a 1. Rows of all zeros sit at the bottom. Each leading 1, moving down the rows, sits further right than the one above it. Reduced row-echelon form adds one more condition: zeros above and below every leading 1."
      },
      {
        q: 'What is a leading variable, and what is a free variable?',
        a: 'A leading variable corresponds to a column containing a leading 1; its value is pinned down once the system is solved. A free variable corresponds to a column with no leading 1; it can take any value and is assigned a parameter.'
      },
      {
        q: 'Row-echelon form vs reduced row-echelon form: what is the key structural difference between the two?',
        a: 'Row-echelon form only requires zeros below each leading 1, so a back-substitution pass is still needed to finish solving. Reduced row-echelon form requires zeros both above and below each leading 1, so the solution can be read directly from the matrix.'
      },
      {
        q: "Why does reduced row-echelon form need every entry in a leading 1's column to be zero, not just the entries below it?",
        a: 'Clearing the entries above each leading 1, in addition to below, isolates every leading variable completely in its own row. That isolation is exactly what lets you read the solution straight off the matrix without further substitution.'
      },
      {
        q: 'Why does a matrix have only one reduced row-echelon form, while plain row-echelon form is not unique?',
        a: 'Reduced row-echelon form forces the strictest possible pattern of zeros, leaving no room for variation no matter which operations were used to reach it. Plain row-echelon form only requires zeros below each leading 1, so different valid operation sequences can leave different, still-correct, row-echelon matrices.'
      },
      {
        q: "A reduced matrix has 3 leading 1's across 5 unknowns. How many free variables does the system have?",
        a: "Two free variables, since the number of free variables equals the total unknowns minus the number of leading 1's: $5 - 3 = 2$."
      },
      {
        q: "A reduced matrix has 4 leading 1's across 4 unknowns, with no leftover zero row. What does that tell you about the solution count?",
        a: 'The system has exactly one solution. A leading 1 for every unknown, with no free variables and no false rows, always pins down a single unique value for each unknown.'
      },
      {
        q: 'If you reduce a system down to a matrix where the last row reads directly as "$z$ equals a number," what do you think you can do next?',
        a: 'Substitute that known value of $z$ upward into the equation above it to solve for the next unknown, then continue substituting upward. This process is called back-substitution.'
      },
      {
        q: 'Solve the triangular system $x - 2y - z = 1$, $y + 2z = 5$, $z = 3$ using back-substitution.',
        a: 'The last equation gives $z = 3$ directly. Substitute into the second: $y + 6 = 5$, so $y = -1$. Substitute both into the first: $x - 2(-1) - 3 = 1$, so $x = 2$. The solution is $(2, -1, 3)$.'
      },
      {
        q: 'List the six steps of the row-echelon reduction procedure in order.',
        a: 'Locate the leftmost nonzero column. Bring a nonzero entry to the top of that column by swapping rows if needed. Divide that row to make the top entry a leading 1. Add multiples of that row to clear every entry below it to zero. Cover that row and repeat the process on the smaller remaining matrix. Repeat until the whole matrix is in row-echelon form.'
      },
      {
        q: 'Solve $x + y + 2z = 9$, $2x + 4y - 3z = 1$, $3x + 6y - 5z = 0$ using Gaussian elimination.',
        a: 'Eliminate $x$ from the second and third equations using the first, then eliminate $y$ from the third using the new second equation. Back-substituting through the resulting triangular system gives $x = 1$, $y = 2$, $z = 3$.'
      },
      {
        q: 'Why does working the same row operations on the equations and on the augmented matrix, side by side, always produce identical numbers in both?',
        a: 'The row operations are defined to mirror legal equation operations exactly: scaling a row matches scaling an equation, and adding rows matches adding equations. Since both start from the same system, applying matching operations keeps them in lockstep at every stage.'
      },
      {
        q: 'A system in $x$, $y$, and $z$ is not already triangular. What is the first move to make it triangular?',
        a: 'Use the first equation to eliminate $x$ from the second and third equations, the same way $x$ is eliminated first in any three-variable Gaussian elimination.'
      },
      {
        q: 'A new three-variable system needs solving, and you want the fewest total row operations. Which method fits better, Gaussian elimination or Gauss-Jordan elimination?',
        a: 'Gaussian elimination fits better for the fewest operations, since it stops at row-echelon form and finishes with back-substitution, avoiding the extra work of clearing entries above each leading 1.'
      },
      {
        q: "Why is Carl Friedrich Gauss's name attached to this elimination procedure, even though systematic equation-solving predates him?",
        a: 'Gauss made influential contributions to mathematics broadly, and this procedure became strongly associated with his work, even though earlier variations on systematic elimination existed centuries before him.'
      },
      {
        q: 'If you kept eliminating entries above each leading 1, not just below it, what do you think the final matrix would let you skip?',
        a: 'It would let you skip back-substitution entirely, since reduced row-echelon form isolates each leading variable completely, letting the solution be read straight off the matrix.'
      },
      {
        q: "Solve the 4-equation, 6-unknown system by Gauss-Jordan elimination, where reduction leaves leading 1's in the columns for all unknowns except $x_2$, $x_4$, and $x_5$. Describe the solution.",
        a: 'The three unknowns without a leading 1, $x_2$, $x_4$, and $x_5$, are free variables, each assigned its own parameter. The remaining leading variables are then expressed in terms of those parameters, read directly from the reduced matrix.'
      },
      {
        q: 'Gaussian elimination vs Gauss-Jordan elimination: compare their final matrix form and their operation cost.',
        a: 'Gaussian elimination stops at row-echelon form and needs back-substitution to finish, using fewer row operations. Gauss-Jordan elimination continues to reduced row-echelon form and needs no back-substitution, but costs roughly 50% more arithmetic on large systems.'
      },
      {
        q: 'Why does Gauss-Jordan elimination cost more arithmetic than Gaussian elimination on a large system?',
        a: 'Clearing every entry above each leading 1, on top of the entries below, requires extra row operations that back-substitution would have handled far more cheaply by working through the equations one at a time.'
      },
      {
        q: 'Wilhelm Jordan developed the fuller reduction procedure named after him for what kind of work?',
        a: 'Geodetic surveying, the precise measuring of positions on Earth. Jordan was a German engineer who extended row-echelon reduction to reduced row-echelon form for that field.'
      },
      {
        q: 'A system needs solving twice: once quickly by hand, and once loaded into a computer program that must return exact free-variable formulas. Which method fits each situation?',
        a: 'Quick hand-solving favors Gaussian elimination with back-substitution, since it needs fewer operations. A computer program built to report exact free-variable formulas favors Gauss-Jordan elimination, since reduced row-echelon form expresses every leading variable directly in terms of the free parameters.'
      },
      {
        q: 'Three planes float in three-dimensional space. What do you think are the different ways all three planes could intersect, or fail to intersect, at once?',
        a: 'They can meet at exactly one shared point, fail to share any common point at all, or intersect along a shared line or plane, giving infinitely many shared points.'
      },
      {
        q: "A reduced augmented matrix contains a row that reads $0 = -2$. What does this tell you about the system's solution count?",
        a: 'The system has no solution. A row that reduces to a false numerical statement means no values of the unknowns can satisfy every original equation at once.'
      },
      {
        q: 'A reduced augmented matrix contains a dropped row of all zeros, leaving one free variable $t$, with solution $(-3t, 2t + 2, t)$. How many solutions does the system have?',
        a: 'Infinitely many solutions, one for every real value of $t$. Dropping a row of all zeros means one equation carried no new information, leaving an unknown free.'
      },
      {
        q: 'Why does dropping a row that reads $0 = 0$, rather than one that reads $0 = 1$, lead to infinitely many solutions instead of none?',
        a: 'A $0 = 0$ row is always true and carries no new restriction, so it can be safely removed, leaving one fewer independent equation than unknowns and creating a free variable. A $0 = 1$ row is always false, which makes the whole system impossible to satisfy.'
      },
      {
        q: 'A three-equation, four-unknown system reduces with two leftover free variables, $s$ and $t$, giving $x = 3s + 4t$, $y = 5$, $z = s$, $w = t$. Must $s$ and $t$ take the same numeric value in a given solution?',
        a: 'No. Each free parameter ranges independently over all real numbers, so $s$ and $t$ can take completely different values within the same valid solution.'
      },
      {
        q: "A system has 5 equations and 5 unknowns, and reduces to a full staircase of 5 leading 1's with no zero rows. What is its solution count?",
        a: 'Exactly one solution. A leading 1 for every unknown, with no free variables and no false rows, always pins down a single unique value for each unknown.'
      },
      {
        q: "A system has 3 equations and 5 unknowns, and reduces cleanly with no false row but only 3 leading 1's. What is its solution count?",
        a: "Infinitely many solutions. With only 3 leading 1's across 5 unknowns, $5 - 3 = 2$ unknowns are free variables, each contributing a parameter to an infinite solution set."
      },
      {
        q: "Why does counting leading 1's against the total number of unknowns tell you the solution count before you finish solving?",
        a: "Each leading 1 pins down exactly one unknown's value. Any unknown without a matching leading 1 stays free to vary, so comparing the leading-1 count to the unknown count reveals how many free variables, and therefore how much solution freedom, remains."
      },
      {
        q: 'A linear system has every constant term equal to zero. What do you think is one solution that always works, no matter what the coefficients are?',
        a: 'Setting every unknown to zero always works, since every term on the left side becomes zero, matching the zero on the right side of every equation. This all-zero solution is called the trivial solution.'
      },
      {
        q: 'Define trivial solution and nontrivial solution for a homogeneous system.',
        a: 'The trivial solution sets every unknown to zero, which always satisfies a homogeneous system. A nontrivial solution has at least one unknown that is not zero, and it may or may not exist depending on the system.'
      },
      {
        q: 'A homogeneous system with 4 equations and 5 unknowns reduces with free variables $s$ and $t$. What solution does $s = 0$, $t = 0$ give, and what does any other choice give?',
        a: 'Setting $s = 0$ and $t = 0$ recovers the trivial solution, all unknowns equal to zero. Any other choice of $s$ and $t$ produces a nontrivial solution.'
      },
      {
        q: 'State the homogeneous system theorem, and explain in one sentence why it is true.',
        a: "A homogeneous system with more unknowns than equations always has infinitely many solutions. It is true because the number of leading 1's can be at most the number of equations, leaving at least one free variable among the extra unknowns."
      },
      {
        q: 'Does the homogeneous system theorem apply to a nonhomogeneous system with more unknowns than equations?',
        a: 'No. The theorem applies only to homogeneous systems. A nonhomogeneous system with more unknowns than equations is not guaranteed to be consistent, since a nonzero constant term can still create a contradictory row.'
      },
      {
        q: 'A homogeneous system has 2 equations and 6 unknowns. Without solving it, what can you say about its solution count?',
        a: 'It has infinitely many solutions. The homogeneous system theorem guarantees this whenever there are more unknowns than equations, since at least one unknown must remain free.'
      },
      {
        q: 'A homogeneous system has 4 equations and 4 unknowns, and reduces with no free variables. What is its only solution?',
        a: 'The trivial solution, all unknowns equal to zero. With no free variables and no false row, a homogeneous system always has exactly the trivial solution as its only solution.'
      },
      {
        q: 'Why does a homogeneous system with more unknowns than equations always have at least one free variable after reduction?',
        a: "The number of leading 1's in the reduced matrix can never exceed the number of equations, since each equation contributes at most one leading 1. If there are more unknowns than equations, some unknowns must be left without a leading 1, making them free."
      },
      {
        q: 'An inheritance is split across three investment accounts with three different conditions attached. What do you think three separate dollar conditions let you calculate about a three-way split?',
        a: 'Three independent dollar conditions let you set up and solve a three-equation, three-unknown system, pinning down the exact dollar amount placed in each of the three accounts.'
      },
      {
        q: 'Jason splits $\\$50{,}000$ across three funds earning 5%, 9%, and 16%, wants $\\$4000$ total interest, and wants the money-market amount to equal three times the high-tech amount. Solve for the amount in each fund.',
        a: 'Substituting $x = 3z$ and $y = 50000 - 4z$ into the interest equation gives $-0.05z = -500$, so $z = 10000$. Then $x = 30000$ and $y = 10000$. Jason places $\\$30{,}000$ in money-market, $\\$10{,}000$ in blue-chip, and $\\$10{,}000$ in high-tech.'
      },
      {
        q: 'A three-branch circuit gives $I_1 + I_2 - I_3 = 0$, $16I_1 - 8I_2 = 4$, $8I_2 + 4I_3 = 5$. Solve for $I_1$, $I_2$, and $I_3$.',
        a: 'From the first equation, $I_3 = I_1 + I_2$. Substituting into the third gives $4I_1 + 12I_2 = 5$. Combining with the second, $4I_1 - 2I_2 = 1$, gives $14I_2 = 4$, so $I_2 = \\frac{2}{7}$, $I_1 = \\frac{11}{28}$, and $I_3 = \\frac{19}{28}$.'
      },
      {
        q: 'Why does the equation $I_1 + I_2 - I_3 = 0$ let you replace $I_3$ everywhere else in the circuit system before doing any further elimination?',
        a: 'That equation already isolates $I_3$ in terms of the other two currents. Substituting it immediately removes one unknown from the remaining equations, turning a three-unknown system into a two-unknown one.'
      },
      {
        q: 'A three-food diet problem sets one linear equation per nutrient target and one unknown per food. What method from this topic would you use to solve it, and why?',
        a: 'Gaussian elimination or Gauss-Jordan elimination, because the problem reduces to a square system of linear equations, the same structure solved throughout this topic using row reduction.'
      },
      {
        q: 'A furniture factory needs to schedule cutting, assembly, and finishing hours across tables, chairs, and armoires to hit fixed hour totals for each stage. What kind of system does this problem reduce to?',
        a: "A three-equation, three-unknown linear system, one equation per production stage and one unknown per furniture type, solvable the same way as Jason's inheritance problem."
      },
      {
        q: "What is Cramer's rule, and how does it relate to the methods covered in this topic?",
        a: "Cramer's rule is a different method for solving a linear system, built from determinants rather than row reduction. It belongs to matrix theory covered separately; row reduction remains the more general technique used throughout this topic."
      },
      {
        q: "Why does row reduction remain more broadly useful than Cramer's rule for large systems or systems with free variables?",
        a: "Row reduction directly handles any system size and naturally reveals free variables and solution sets written with parameters during reduction. Determinant-based methods like Cramer's rule are typically limited to square systems with a single unique solution."
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Systems of Linear Equations',
      sections: [
        <>
          <div className="ref-header">
            <span className="ref-label">Core Definitions</span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">General linear equation</span>
            <div className="ref-formula-eq">{`$$a_1x_1 + a_2x_2 + \\cdots + a_nx_n = b$$`}</div>
            <p className="ref-formula-desc">{`When to use: identify whether a given equation qualifies as linear before applying any system-solving method.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">General $m \\times n$ linear system</span>
            <div className="ref-formula-eq">{`$$a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n = b_i, \\quad i = 1, \\ldots, m$$`}</div>
            <p className="ref-formula-desc">{`When to use: represent any collection of linear conditions imposed on the same set of unknowns.`}</p>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Augmented matrix</span>
            <div className="ref-formula-eq">{`$$[A \\mid b]$$`}</div>
            <p className="ref-formula-desc">{`When to use: convert a linear system into matrix form before applying row operations. $A$ is the coefficient block, $b$ is the constants column.`}</p>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula-name">Linear equation</span>
              <p>{`Equation where every unknown appears alone, to the first power, with no products or functions of unknowns.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Unknowns</span>
              <p>{`The letters being solved for in an equation.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Solution</span>
              <p>{`A list of numbers that makes an equation or system true when substituted for the unknowns.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Solution set</span>
              <p>{`The collection of every solution to an equation or system.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Parameter</span>
              <p>{`A free-standing letter (often $t$, $s$) that ranges over all real numbers, used to describe an infinite solution set.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">System of linear equations</span>
              <p>{`A collection of linear equations sharing the same unknowns.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Consistent system</span>
              <p>{`A system with at least one solution.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Inconsistent system</span>
              <p>{`A system with no solution.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Equivalent systems</span>
              <p>{`Two systems that share the exact same solution set.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Augmented matrix</span>
              <p>{`A matrix combining a system's coefficients and constants, separated by a bar.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Row Reduction</span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Elementary row operations</span>
            <div className="ref-formula-eq">{`$$kR_i, \\qquad R_i \\leftrightarrow R_j, \\qquad R_i + kR_j \\to R_i$$`}</div>
            <p className="ref-formula-desc">{`When to use: transform an augmented matrix into a simpler equivalent matrix without changing the system's solution set. Scale a row, swap two rows, or add a multiple of one row to another.`}</p>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Row-echelon form condition</th>
                <th>Reduced row-echelon form condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`First nonzero entry of each nonzero row is a 1 (leading 1)`}</td>
                <td>{`Same`}</td>
              </tr>
              <tr>
                <td>{`Zero rows sit at the bottom`}</td>
                <td>{`Same`}</td>
              </tr>
              <tr>
                <td>{`Each leading 1 sits further right than the one above it`}</td>
                <td>{`Same`}</td>
              </tr>
              <tr>
                <td>{`(No further requirement)`}</td>
                <td>{`Every entry above and below each leading 1 is also zero`}</td>
              </tr>
            </tbody>
          </table>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula-name">Row-echelon form</span>
              <p>{`Matrix satisfying the three staircase conditions on leading 1's and zero rows.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Reduced row-echelon form</span>
              <p>{`Row-echelon form plus zeros above every leading 1.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Leading variable (pivot variable)</span>
              <p>{`Unknown whose column contains a leading 1.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Free variable</span>
              <p>{`Unknown whose column contains no leading 1, assigned a parameter.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Gaussian elimination</span>
              <p>{`Reduce to row-echelon form, then finish with back-substitution.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Gauss-Jordan elimination</span>
              <p>{`Reduce all the way to reduced row-echelon form, no back-substitution needed.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Back-substitution</span>
              <p>{`Solve the last equation first, then substitute upward through the remaining equations.`}</p>
            </div>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">The Six-Step Row-Echelon Reduction</span>
          </div>
          <ol className="lrn-list">
            <li>{`Locate the leftmost column that is not entirely zero.`}</li>
            <li>{`Interchange rows if needed so a nonzero entry sits at the top of that column.`}</li>
            <li>{`Divide that top row by its leading entry to create a leading 1.`}</li>
            <li>{`Add multiples of the top row to the rows below, clearing every entry below the leading 1 to zero.`}</li>
            <li>{`Cover the top row and repeat steps 1 through 4 on the smaller remaining matrix.`}</li>
            <li>{`Repeat until the whole matrix is in row-echelon form.`}</li>
          </ol>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Final matrix form</th>
                <th>Extra step needed</th>
                <th>Operation cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Gaussian elimination`}</td>
                <td>{`Row-echelon form`}</td>
                <td>{`Back-substitution`}</td>
                <td>{`Fewer row operations`}</td>
              </tr>
              <tr>
                <td>{`Gauss-Jordan elimination`}</td>
                <td>{`Reduced row-echelon form`}</td>
                <td>{`None, solution read directly`}</td>
                <td>{`Roughly 50% more operations on large systems`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Solution Count</span>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Reduced matrix signal</th>
                <th>Solution count</th>
                <th>Two-variable meaning</th>
                <th>Three-variable meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Row reduces to $0 = k$ for nonzero $k$`}</td>
                <td>{`No solution`}</td>
                <td>{`Two parallel lines`}</td>
                <td>{`Planes share no common point`}</td>
              </tr>
              <tr>
                <td>{`Full staircase of leading 1's, no zero row`}</td>
                <td>{`Exactly one solution`}</td>
                <td>{`Two lines cross at one point`}</td>
                <td>{`Planes meet at one point`}</td>
              </tr>
              <tr>
                <td>{`Zero row dropped, at least one free variable`}</td>
                <td>{`Infinitely many solutions`}</td>
                <td>{`Two lines lie on top of each other`}</td>
                <td>{`Planes share a common line or plane`}</td>
              </tr>
            </tbody>
          </table>
          <div className="ref-formula">
            <span className="ref-formula-name">Free-variable count</span>
            <div className="ref-formula-eq">{`$$(\\text{number of unknowns}) - (\\text{number of leading 1's})$$`}</div>
            <p className="ref-formula-desc">{`When to use: predict how many parameters a solution set needs, once a matrix is reduced.`}</p>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Two-Variable Solving Methods</span>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Approach</th>
                <th>Best used when</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Substitution`}</td>
                <td>{`Solve one equation for one unknown, substitute into the other`}</td>
                <td>{`One equation already isolates an unknown easily`}</td>
              </tr>
              <tr>
                <td>{`Elimination`}</td>
                <td>{`Scale and add or subtract equations to cancel an unknown`}</td>
                <td>{`Matching or easily matched coefficients allow direct cancellation`}</td>
              </tr>
              <tr>
                <td>{`Graphical`}</td>
                <td>{`Graph both lines, read the intersection point`}</td>
                <td>{`A quick visual estimate is enough, or coefficients are messy decimals`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Homogeneous Systems</span>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula-name">Homogeneous system</span>
              <p>{`A linear system where every equation's constant term is zero.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Trivial solution</span>
              <p>{`The all-zero solution, always valid for a homogeneous system.`}</p>
            </div>
            <div className="ref-item">
              <span className="ref-formula-name">Nontrivial solution</span>
              <p>{`Any solution with at least one nonzero unknown.`}</p>
            </div>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Homogeneous system theorem</span>
            <div className="ref-formula-eq">{`$$n > m \\ \\Longrightarrow \\ \\text{infinitely many solutions}$$`}</div>
            <p className="ref-formula-desc">{`When to use: predict a homogeneous system's solution count immediately, without reducing its matrix, whenever unknowns ($n$) outnumber equations ($m$). Applies only to homogeneous systems.`}</p>
          </div>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">Named Applied Models</span>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Problem type</th>
                <th>Model equations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Distance-speed-time (rowing)`}</td>
                <td>{`$(x-y)\\left(\\frac{3}{2}\\right) = 4$, $(x+y)\\left(\\frac{3}{4}\\right) = 4$`}</td>
              </tr>
              <tr>
                <td>{`Mixture (wine fortification)`}</td>
                <td>{`$x + y = 1000$, $x + 7y = 1600$`}</td>
              </tr>
              <tr>
                <td>{`Financial planning (three-fund split)`}</td>
                <td>{`$x+y+z=50000$, $0.05x+0.09y+0.16z=4000$, $x=3z$`}</td>
              </tr>
              <tr>
                <td>{`Electrical circuit (Kirchhoff's laws)`}</td>
                <td>{`$I_1+I_2-I_3=0$, $16I_1-8I_2=4$, $8I_2+4I_3=5$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <div className="ref-header">
            <span className="ref-label">See Also</span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Cramer's rule</span>
            <p className="ref-formula-desc">{`When to use: reach for it only on a small square system with a single unique solution, once determinants are available. It solves a linear system using determinants instead of row reduction. Covered separately under matrix theory and determinants; not a row-reduction technique.`}</p>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return config
}

export default function SystemsOfLinearEquations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
