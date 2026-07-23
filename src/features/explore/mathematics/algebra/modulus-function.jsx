import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  ModulusGraphViz,
  ModulusDistanceViz,
  ModulusTransformViz,
  ModulusEquationViz,
  ModulusInequalityViz
} from '../../../../components/viz'

const PRACTICE_CARDS = [
  {
    q: `Find $|11|$, $|-11|$, and $|0|$.`,
    a: `$|11| = 11$, $|-11| = 11$, $|0| = 0$. The modulus is the distance from zero. Both $11$ and $-11$ sit $11$ steps from zero, so both give $11$. Zero sits at zero, so its distance is $0$.`
  },
  {
    q: `Why can $|x|$ never be negative?`,
    a: `Because $|x|$ measures distance, and distance is never negative. You cannot be $-3$ steps away from a point. The smallest possible distance is $0$, which happens only when $x = 0$. So $|x| \\geq 0$ for every number $x$.`
  },
  {
    q: `Simplify $|-x|$ given that $x > 0$. Which piece of the two-piece rule do you use?`,
    a: `$|-x| = x$. Since $x > 0$, the quantity $-x$ is negative, so use the piece $|u| = -u$ with $u = -x$. Then $|-x| = -(-x) = x$. The two negations cancel and leave the positive $x$.`
  },
  {
    q: `Simplify $\\sqrt{a^4}$.`,
    a: `$\\sqrt{a^4} = a^2$. Write $a^4 = (a^2)^2$, so $\\sqrt{(a^2)^2} = |a^2|$. Because $a^2 \\geq 0$ for every real $a$, that is, $a^2$ is always zero or positive, the modulus is unneeded: $|a^2| = a^2$. The rule $\\sqrt{x^2} = |x|$ collapses to $a^2$ here because the inside is already non-negative.`
  },
  {
    q: `What does $|x - 4|$ measure on the number line?`,
    a: `It measures the distance between $x$ and $4$. The expression $|a - b|$ is always the gap between $a$ and $b$. So $|x - 4|$ tells you how far $x$ sits from $4$, in either direction.`
  },
  {
    q: `Find the distance between $4$ and $-9$ using the modulus.`,
    a: `The distance is $13$. Use $|a - b|$: $|4 - (-9)| = |13| = 13$. You get the same answer the other way: $|-9 - 4| = |-13| = 13$. Order does not matter for distance.`
  },
  {
    q: `Solve $|2x| = 8$.`,
    a: `$x = 4$ or $x = -4$. The bare modulus $|2x|$ equals $8$, so $2x = 8$ or $2x = -8$. Divide each case by $2$: $x = 4$ or $x = -4$. A coefficient inside the bars just scales the answers.`
  },
  {
    q: `Solve $|x| = -7$.`,
    a: `No solution. The modulus is a distance, so it is never negative. No number can sit $-7$ steps from zero. Whenever a modulus equals a negative number, stop and write "no solution".`
  },
  {
    q: `Solve $|x - 1| = 2$. Explain the two cases.`,
    a: `$x = 3$ or $x = -1$. The equation says $x$ sits $2$ away from $1$. Case one: $x - 1 = 2$, so $x = 3$. Case two: $x - 1 = -2$, so $x = -1$. Both points, $3$ and $-1$, are exactly $2$ steps from $1$.`
  },
  {
    q: `Solve $|3x - 4| = 11$.`,
    a: `$x = 5$ or $x = -\\tfrac{7}{3}$. Split into two cases. Case one: $3x - 4 = 11$, so $3x = 15$ and $x = 5$. Case two: $3x - 4 = -11$, so $3x = -7$ and $x = -\\tfrac{7}{3}$. Each case is a linear equation.`
  },
  {
    q: `Predict: how many solutions does $|x - 3| = 0$ have, and why?`,
    a: `Exactly one solution, $x = 3$. Zero distance means $x$ sits right on top of $3$. The two cases $x - 3 = 0$ and $x - 3 = -0$ are the same equation. So the two answers collapse into one.`
  },
  {
    q: `Solve the inequality $|x| < 5$.`,
    a: `$-5 < x < 5$. The inequality asks which numbers sit less than $5$ steps from zero. These are the numbers trapped between $-5$ and $5$. "Less than" gives one connected stretch around zero.`
  },
  {
    q: `Solve the inequality $|x| > 7$.`,
    a: `$x < -7$ or $x > 7$. The inequality asks which numbers sit more than $7$ steps from zero. These are the far numbers on both ends. "Greater than" gives two separate pieces, not one stretch.`
  },
  {
    q: `Solve $|x + 5| \\leq 3$.`,
    a: `$-8 \\leq x \\leq -2$. Rewrite as $-3 \\leq x + 5 \\leq 3$, then subtract $5$ from each part to get $-8 \\leq x \\leq -2$. Equivalently, the centre is $-5$ and $x$ sits at most $3$ away from it. So $x$ lies in the band from $-8$ to $-2$.`
  },
  {
    q: `Solve $|x - 4| > 1$.`,
    a: `$x < 3$ or $x > 5$. The centre is $4$, and $x$ must be more than $1$ from $4$. Split: $x - 4 < -1$ gives $x < 3$, and $x - 4 > 1$ gives $x > 5$. The band $3 \\leq x \\leq 5$ around the centre fails the inequality.`
  },
  {
    q: `The graph of $y = |x|$ is a "V". Where is its lowest point and why?`,
    a: `The lowest point is the origin, $(0, 0)$. Height on the graph equals $|x|$, the distance from zero. That distance is smallest, namely $0$, exactly when $x = 0$. So the V bottoms out at the origin and opens upward.`
  },
  {
    q: `Predict: how does the graph of $y = |x - 3|$ differ from $y = |x|$?`,
    a: `It is the same V slid $3$ units to the right. Replacing $x$ with $x - 3$ shifts the graph right by $3$. The corner moves from $(0, 0)$ to $(3, 0)$. The shape and steepness stay the same.`
  },
  {
    q: `Describe the graph of $y = |x| + 2$ compared with $y = |x|$.`,
    a: `It is the V lifted up by $2$. Adding $2$ to the whole function raises every point by $2$. The corner moves from $(0, 0)$ to $(0, 2)$. The V now sits entirely above the line $y = 2$.`
  },
  {
    q: `Explain in your own words why $y = 2|x|$ looks narrower than $y = |x|$.`,
    a: `The factor $2$ doubles every height. At each $x$, the new point is twice as high as before. Doubling heights makes the V rise faster, so its arms tilt up more steeply. A steeper V looks narrower.`
  },
  {
    q: `Solve $|x + 2| = |x - 6|$.`,
    a: `$x = 2$. Apply the rule $|A| = |B| \\Rightarrow A = B$ or $A = -B$. Case one: $x + 2 = x - 6$ gives $2 = -6$, no solution. Case two: $x + 2 = -(x - 6) = -x + 6$, so $2x = 4$ and $x = 2$. Geometric check: the midpoint of $-2$ and $6$ is $2$, equally far from both.`
  },
  {
    q: `A thermostat must keep a room within $2$ degrees of $21$ degrees. Write this as a modulus inequality and solve it.`,
    a: `Write $|T - 21| \\leq 2$, where $T$ is the temperature. This says $T$ is at most $2$ away from $21$. Solving gives $19 \\leq T \\leq 23$. The room must stay between $19$ and $23$ degrees.`
  },
  {
    q: `Solve $2|x + 1| + 3 = 11$.`,
    a: `$x = 3$ or $x = -5$. Isolate the modulus first: subtract $3$ to get $2|x + 1| = 8$, then divide by $2$ to get $|x + 1| = 4$. Now split: $x + 1 = 4$ gives $x = 3$, and $x + 1 = -4$ gives $x = -5$.`
  },
  {
    q: `Solve $|3x + 2| = x + 10$, then verify each root.`,
    a: `$x = 4$ or $x = -3$. Case one: $3x + 2 = x + 10$ gives $2x = 8$, so $x = 4$. Case two: $3x + 2 = -(x + 10)$ gives $4x = -12$, so $x = -3$. Check both: $|14| = 14$ and $4 + 10 = 14$ ✓; $|-7| = 7$ and $-3 + 10 = 7$ ✓. Both pass.`
  },
  {
    q: `Sketch the shape of $y = |x^2 - 9|$ by reflection. Where are its lowest and highest local points?`,
    a: `Start from $y = x^2 - 9$, a parabola with vertex $(0, -9)$ and roots at $x = \\pm 3$. The dipped arc between $\\pm 3$ reflects above the $x$-axis; its lowest point $(0, -9)$ becomes a peak at $(0, 9)$. The roots stay fixed at $(\\pm 3, 0)$, now the lowest points. The branches outside $\\pm 3$ stay as the original upward parabola, rising like $x^2$.`
  },
  {
    q: `Sketch $y = (|x| - 2)^2$ by reflection. Where are its low points and its peak between them?`,
    a: `Start from $y = (x - 2)^2$ for $x \\geq 0$: an upward parabola with low point $(2, 0)$. Reflect this right-half graph across the $y$-axis to make the left half. The result is a "double-dip" curve: low points at $(2, 0)$ and $(-2, 0)$, with a local peak at $(0, 4)$ in the middle. The graph is symmetric about the $y$-axis.`
  },
  {
    q: `A temperature sensor has a tolerance of $\\pm 2$ degrees Celsius. If the true temperature is $T$ and the sensor reads $S$, then $|S - T| \\leq 2$. If the true temperature is $20^\\circ C$, what range of readings is acceptable?`,
    a: `Write $|S - 20| \\leq 2$. This unfolds to $-2 \\leq S - 20 \\leq 2$. Add $20$ to all parts: $18 \\leq S \\leq 22$. The sensor can read anything between $18^\\circ C$ and $22^\\circ C$ and still be within tolerance.`
  },
  {
    q: `Medicine must be stored at a temperature between $5^\\circ C$ and $30^\\circ C$. Write this as a single modulus inequality with the midpoint as the centre, then solve.`,
    a: `The midpoint of $5$ and $30$ is $17.5$. The distance from the midpoint to each end is $30 - 17.5 = 12.5$. So the condition is $|T - 17.5| \\leq 12.5$. This unfolds to $-12.5 \\leq T - 17.5 \\leq 12.5$, giving $5 \\leq T \\leq 30$ when we add $17.5$ throughout. The answer is the original range.`
  },
  {
    q: `A company measures component lengths to within $0.1$ mm precision. If the target length is $50$ mm, write the acceptable range using a modulus inequality.`,
    a: `Let $L$ be the actual length. The error is $|L - 50| \\leq 0.1$. Solving: $-0.1 \\leq L - 50 \\leq 0.1$, so $49.9 \\leq L \\leq 50.1$ mm. The component passes if its length is between $49.9$ and $50.1$ mm.`
  },
  {
    q: `A car's stopping distance $d$ (in feet) at speed $v$ (in mi/h) is $d = \\frac{v^2}{20}$. If a driver wants stopping distance to be at most $240$ feet, write and solve an inequality for the speed.`,
    a: `Write $\\frac{v^2}{20} \\leq 240$. Multiply both sides by $20$: $v^2 \\leq 4800$. Take square roots: $|v| \\leq \\sqrt{4800} \\approx 69.3$. Since speed is positive, $0 < v \\leq 69.3$ mi/h. The driver can travel at most about $69.3$ mph to stay within the stopping distance limit.`
  }
]

function useConfig() {
  const config = {
    cssPrefix: 'mdf',
    documentTitle: 'Modulus Function AETHER',
    learning: {
      groupTitle: 'Coordinate Geometry and Functions',
      category: 'Module 18',
      title: 'Modulus Function',
      subtitle: `The modulus of a number is its distance from zero. Master the two-piece rule, the V-shaped graph, and how to solve modulus equations and inequalities.`,
      sections: [
        <>
          {/* SECTION 1: WHAT MODULUS MEANS */}
          <h2>{`What "Modulus" Means`}</h2>

          <p>{`Quick numerics first: $|5| = 5$, $|-5| = 5$, $|0| = 0$. The modulus of $x$, written $|x|$, is the distance of $x$ from zero. The bars throw away the sign and keep the size. Read $|x|$ as "the modulus of $x$" or "the absolute value of $x$." The arithmetic side, the piecewise definition, the distance picture, the product rule, the triangle inequality, already lives in the prior topic on opposite numbers and absolute value. Here, you treat $|x|$ as a function: you graph it, transform it, and solve every equation and inequality that uses it. The starting facts come along: $|x| \\geq 0$ for every real $x$, with $|x| = 0$ only at $x = 0$.`}</p>

          <p>
            <strong>When to use this:</strong>
            {` reach for the modulus whenever you want to ignore direction or sign and keep only the size. Distances, gaps, errors, and tolerances are all modulus questions.`}
          </p>

          {/* SECTION 2: THE TWO-PIECE RULE */}
        </>,
        <>
          <h2>{`The Two-Piece Rule`}</h2>

          <p>
            <strong>When to use this:</strong>
            {` use the two-piece rule whenever you must remove the bars in algebra. It turns $|x|$ into a plain expression you can solve, but you must track which piece applies.`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$`}</span>
          </div>

          <p>{`This is a piecewise definition: one rule for each interval of inputs. The top line says: if the number is zero or positive, leave it alone. The bottom line uses $-x$ because negating a negative gives a positive. The expression $-x$ is an instruction, not a sign label. So when $x$ is negative, $-x$ comes out positive.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The piecewise rule routes the input to one of two pieces. Which piece does the rule pick for $|3|$, $|-3|$, and $|-8|$? What does each piece return?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$|3|$ uses the top piece (input is positive): the rule returns $3$. $|-3|$ uses the bottom piece (input is negative): the rule returns $-(-3) = 3$. $|-8|$ uses the bottom piece: the rule returns $-(-8) = 8$. The bottom piece reads as an instruction to negate, not a sign label, so it produces a positive result.`}</p>
            </details>
          </div>

          <h3>{`A Second Form: $\\sqrt{x^2} = |x|$`}</h3>

          <p>{`Squaring hides sign, and the square root returns the principal (zero or positive) value. So squaring then square-rooting recovers the size, not the original number, exactly the modulus.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\sqrt{x^2} = |x|$$`}</span>
          </div>

          <p>{`This is not $\\sqrt{x^2} = x$, which fails when $x$ is negative. Example: $\\sqrt{(-6)^2} = 6 = |-6|$. The modulus is the honest answer.`}</p>

          {/* SECTION 3: DISTANCE BETWEEN TWO NUMBERS */}
        </>,
        <>
          <h2>{`The Distance Between Two Numbers`}</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The number $7$ and the number $3$ sit on a line. How far apart are they? Now what about $-2$ and $3$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$7$ and $3$ are $4$ apart. $-2$ and $3$ are $5$ apart. You can count the gap directly. The modulus gives a formula that always returns this gap as a positive number.`}</p>
            </details>
          </div>

          <p>{`Distance from zero extends to distance between any two numbers: take the modulus of their difference.`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\text{distance between } a \\text{ and } b = |a - b|$$`}</span>
          </div>

          <div className="lrn-graph">
            <ModulusDistanceViz />
            <p>{`Drag the point $x$. The bar shows $|x - 3|$, the gap between $x$ and the fixed point $3$. The gap stays positive whether $x$ is left or right of $3$.`}</p>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: distance between $-2$ and $5$`}</span>
              <p className="lrn-step-content">{`Take the difference: $-2 - 5 = -7$. Then $|-7| = 7$. The two numbers are $7$ apart.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Order does not matter</span>
              <p className="lrn-step-content">{`$|5 - (-2)| = |7| = 7$ gives the same answer. Reversing the subtraction flips the sign, and the modulus strips signs off.`}</p>
            </div>
          </div>

          {/* SECTION 4: THE GRAPH OF y = |x| */}
        </>,
        <>
          <h2>{`The Graph of $y = |x|$`}</h2>

          <p>{`To graph $y = |x|$, the height above each $x$ is its distance from zero. Positive and negative inputs of the same size give the same height. So the graph dips to a single low point at the origin and rises on both sides.`}</p>

          <p>
            <strong>When to use this:</strong>
            {` picture the V graph whenever you want to see a modulus problem at a glance. The graph turns "how many solutions?" into "how many times do two curves cross?"`}
          </p>

          <div className="lrn-graph">
            <ModulusGraphViz />
            <p>{`Drag the point. Its height is always $|x|$. The graph is two rays (half-lines starting at the origin) meeting at the origin, forming a "V".`}</p>
          </div>

          <p>{`The piecewise rule splits the V into two arms. For $x \\geq 0$, $y = x$, the line sloping up to the right. For $x < 0$, $y = -x$, sloping up to the left. The two arms meet at a sharp corner at the origin, $(0, 0)$, the lowest point. The whole graph sits on or above the $x$-axis.`}</p>

          <p>{`The domain (the inputs allowed) is all real numbers; the range (the outputs produced) is $y \\geq 0$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why a sharp corner instead of a smooth curve? On the right, the graph climbs with slope $+1$. On the left, it climbs with slope $-1$.`}</p>
            <p>{`At the origin the slope jumps straight from $-1$ to $+1$ with no in-between. That sudden change in direction shows up as a point, not a curve.`}</p>
          </div>

          {/* SECTION 5: MOVING AND STRETCHING THE V */}
        </>,
        <>
          <h2>{`Moving and Stretching the V`}</h2>

          <p>{`Four standard transformations act on the V: shift left or right, shift up or down, stretch heights, flip vertically. They work exactly as they do on any function. The job here is to name where each one moves the V's corner.`}</p>

          <div className="lrn-graph">
            <ModulusTransformViz />
            <p>{`The faint dashed V is the basic $y = |x|$. Move the sliders for $a$, $h$, and $k$ to see the V slide and stretch.`}</p>
          </div>

          <p>{`Start with a concrete example: $y = |x - 3| + 2$. Inside the bars, $x - 3$ slides the V right by $3$. Outside the bars, $+2$ lifts the whole V up by $2$. The corner lands at $(3, 2)$.`}</p>

          <p>{`The general pattern is $y = a|x - h| + k$, where the letters $a$, $h$, $k$ stand for chosen numbers (positive, negative, or zero). Read each one independently:`}</p>

          <ul className="lrn-list">
            <li>{`$h$ slides the V sideways. $|x - h|$ shifts right by $h$; $|x + 2|$ shifts left by $2$ (read as $|x - (-2)|$). The value $h$ is also the centre, the input that sits directly below the corner.`}</li>
            <li>{`$k$ slides the V up or down. $+k$ lifts; $-k$ lowers.`}</li>
            <li>{`$a$ stretches the heights. $|a| > 1$ makes the V narrower; $0 < |a| < 1$ makes it wider; $a < 0$ flips it upside down.`}</li>
          </ul>

          <p>{`The corner of $y = a|x - h| + k$ sits at $(h, k)$. The horizontal shift and the vertical stretch act on separate axes, so they do not interfere. The vertical stretch must come before the vertical shift, since $a$ multiplies before $k$ adds.`}</p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Describe the graph of $y = |x - 2| + 1$ and name its corner.`}</p>
              <ol className="lrn-list">
                <li>{`Inside the bars, $x - 2$ shifts the V right by $2$.`}</li>
                <li>{`Outside the bars, $+1$ lifts it up by $1$.`}</li>
                <li>{`The corner moves from $(0, 0)$ to $(2, 1)$. The V opens upward from there.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN, PARTIAL</span>
              <p>{`Describe $y = |x + 3| - 4$. Note: $x + 3$ is the same as $x - (-3)$.`}</p>
              <ol className="lrn-list">
                <li>{`Inside the bars: the centre is at $x = -3$, so the V shifts left by $3$.`}</li>
                <li>{`Outside the bars: $-4$ does what to the height?`}</li>
                <li>{`So the corner is at the point $(\\_\\_,\\ \\_\\_)$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Describe $y = 2|x - 1| - 3$ and name its corner. Then say whether the V is narrower or wider than the basic V.`}</p>
            </div>
          </div>

          <h3>{`Sketching $y = |f(x)|$ by Reflection`}</h3>

          <p>{`The bars are not limited to wrapping $x$. Any expression $f(x)$ can sit inside. To sketch $y = |f(x)|$: first sketch the inner $y = f(x)$ in pencil. Where the graph dips below the $x$-axis, reflect that part upward over the axis. Parts on or above the axis stay put.`}</p>

          <div className="lrn-eq">
            <span>{`$$|f(x)| = \\begin{cases} f(x) & \\text{if } f(x) \\geq 0 \\\\ -f(x) & \\text{if } f(x) < 0 \\end{cases}$$`}</span>
          </div>

          <p>{`The piecewise rule explains the rule of thumb. Where $f(x) < 0$, the modulus replaces $f(x)$ with $-f(x)$. That swap mirrors the dip across the $x$-axis.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: sketch $y = |x^2 - 4|$`}</span>
              <p className="lrn-step-content">{`First sketch $y = x^2 - 4$: an upward parabola with vertex (turning point) $(0, -4)$ and roots (where the graph crosses the $x$-axis) at $x = \\pm 2$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Mark the dipped portion</span>
              <p className="lrn-step-content">{`Between $x = -2$ and $x = 2$, the parabola sits below the $x$-axis. Its deepest point is $(0, -4)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Reflect that portion upward</span>
              <p className="lrn-step-content">{`Flip the dipped arc over the $x$-axis. The vertex $(0, -4)$ becomes $(0, 4)$. The roots stay fixed at $(\\pm 2, 0)$. The result is a "W"-like shape.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Keep the rest unchanged</span>
              <p className="lrn-step-content">{`The branches outside $\\pm 2$ already sit above the $x$-axis, so they stay. The full sketch is the upward parabola for $|x| \\geq 2$, joined to the reflected arc for $|x| < 2$.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: sketch $y = ||x - 1| - 2|$`}</span>
              <p className="lrn-step-content">{`First sketch the inner $y = |x - 1| - 2$: a V with corner at $(1, -2)$. Its arms cross the $x$-axis at $x = -1$ and $x = 3$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Reflect the dipped portion</span>
              <p className="lrn-step-content">{`Between $x = -1$ and $x = 3$, the inner V sits below the $x$-axis. Flip it up. The corner $(1, -2)$ becomes $(1, 2)$; the inner arms now meet at $(-1, 0)$ and $(3, 0)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Read the final shape</span>
              <p className="lrn-step-content">{`The result is a W-like shape. Three corners sit on the $x$-axis at $-1$ and $3$, with an upper corner at $(1, 2)$.`}</p>
            </div>
          </div>

          <p>
            <strong>Payoff:</strong>
            {` any modulus wrapped around a function reflects every dipped portion upward. The rule does not care about shape: sketch the inside, then flip whatever lies below the $x$-axis.`}
          </p>

          <h3>{`Sketching $y = f(|x|)$ by Reflection`}</h3>

          <p>{`Now the bars sit on the input, not the output. The rule changes too. To sketch $y = f(|x|)$: take the graph of $y = f(x)$ for $x \\geq 0$, the right half, and reflect that piece across the $y$-axis. The reflected copy becomes the new left half, and the original left half is discarded.`}</p>

          <div className="lrn-eq">
            <span>{`$$f(|x|) = \\begin{cases} f(x) & \\text{if } x \\geq 0 \\\\ f(-x) & \\text{if } x < 0 \\end{cases}$$`}</span>
          </div>

          <p>{`Why the rule works: $|x| = x$ for $x \\geq 0$, so the right half stays. For $x < 0$, $|x| = -x$, so the left half plots $f(-x)$, the right-half graph read backwards, which is the mirror image across the $y$-axis. Every graph $y = f(|x|)$ is symmetric about the $y$-axis.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: sketch $y = (|x| - 2)^2$`}</span>
              <p className="lrn-step-content">{`Start from $y = (x - 2)^2$ for $x \\geq 0$. This is an upward parabola with low point $(2, 0)$, climbing through $(0, 4)$ on the left edge and rising past $(4, 4)$ on the right.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Reflect the right half across the $y$-axis</span>
              <p className="lrn-step-content">{`The right half's mirror image gives a second low point at $(-2, 0)$, sloping up to $(0, 4)$. Throw away whatever the original $y = (x - 2)^2$ did for $x < 0$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Read the final shape</span>
              <p className="lrn-step-content">{`A "double-dip" curve: low points at $(\\pm 2, 0)$, a local peak at $(0, 4)$, symmetric about the $y$-axis.`}</p>
            </div>
          </div>

          <p>
            <strong>Payoff:</strong>
            {` two reflection rules sit side by side. $y = |f(x)|$ flips dips upward over the $x$-axis. $y = f(|x|)$ mirrors the right half across the $y$-axis. The bars on the outside act on output; the bars on the input act on input.`}
          </p>

          <h3>{`Scaling Inside the Bars: $y = k|x|$ and $y = |kx|$`}</h3>

          <p>{`A coefficient can sit inside the bars or outside. Each changes the graph differently. The coefficient outside scales the height; the coefficient inside scales the width.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: compare $y = |x|$, $y = 2|x|$, and $y = |2x|$`}</span>
              <p className="lrn-step-content">{`Start with $y = |x|$: the standard V with slope $\\pm 1$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`For $y = 2|x|$: the coefficient is outside`}</span>
              <p className="lrn-step-content">{`Every height is doubled. At $x = 1$, the standard V gives $y = 1$, but $y = 2|x|$ gives $y = 2$. The graph is twice as tall. The slope is now $\\pm 2$, so the V is narrower (steeper arms).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`For $y = |2x|$: the coefficient is inside`}</span>
              <p className="lrn-step-content">{`Replacing $x$ with $2x$ compresses the graph horizontally. At $x = \\tfrac{1}{2}$, the graph gives $y = |2 \\cdot \\tfrac{1}{2}| = 1$, which the standard V reaches at $x = 1$. So the V arrives at each height twice as fast. The graph is half as wide.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Summary</span>
              <p className="lrn-step-content">{`$y = 2|x|$ (coefficient outside) scales the height: steeper slope, narrower V. $y = |2x|$ (coefficient inside) compresses the width: reaches each height sooner, narrower V. Both look narrower, but for different reasons.`}</p>
            </div>
          </div>

          <h3>{`Sums and Differences of Moduli`}</h3>

          <p>{`When two or more moduli are added or subtracted, the graph becomes piecewise linear. The key is finding the corner points (where the inside expressions equal zero) and writing the equation for each piece.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: find the graph of $y = |x + 1| + |x - 1|$`}</span>
              <p className="lrn-step-content">{`First identify the corner points. The inside expressions $x + 1$ and $x - 1$ are zero at $x = -1$ and $x = 1$. These divide the number line into three regions.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Region 1: $x < -1$`}</span>
              <p className="lrn-step-content">{`Both $x + 1 < 0$ and $x - 1 < 0$, so $|x + 1| = -(x + 1) = -x - 1$ and $|x - 1| = -(x - 1) = -x + 1$. Thus $y = (-x - 1) + (-x + 1) = -2x$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Region 2: $-1 \\leq x \\leq 1$`}</span>
              <p className="lrn-step-content">{`Now $x + 1 \\geq 0$ but $x - 1 \\leq 0$, so $|x + 1| = x + 1$ and $|x - 1| = -(x - 1) = -x + 1$. Thus $y = (x + 1) + (-x + 1) = 2$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Region 3: $x > 1$`}</span>
              <p className="lrn-step-content">{`Both $x + 1 > 0$ and $x - 1 > 0$, so $|x + 1| = x + 1$ and $|x - 1| = x - 1$. Thus $y = (x + 1) + (x - 1) = 2x$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Read the graph</span>
              <p className="lrn-step-content">{`The result is a piecewise linear graph: a line of slope $-2$ for $x < -1$, a horizontal line at height $y = 2$ between $-1$ and $1$, and a line of slope $+2$ for $x > 1$. The corners are at $(-1, 2)$ and $(1, 2)$, forming a "W" or "trough" shape.`}</p>
            </div>
          </div>

          {/* SECTION 6: SOLVING MODULUS EQUATIONS */}
        </>,
        <>
          <h2>{`Solving Modulus Equations`}</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Which numbers sit exactly $9$ steps from zero? How many are there?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Two numbers: $9$ and $-9$. One lies on each side of zero. This is why a modulus equation like $|x| = 9$ usually has two answers, not one.`}</p>
            </details>
          </div>

          <p>{`A modulus equation asks: which inputs give a fixed distance? Picture the V and a flat horizontal line at that height. The answers are where they cross.`}</p>

          <p>
            <strong>When to use this:</strong>
            {` use the two-case method whenever a modulus equals a value.`}
          </p>

          <div className="lrn-graph">
            <ModulusEquationViz />
            <p>{`The line $y = c$ meets the V $y = |x - 1|$ at the solutions. Slide $c$: above zero gives two crossings, exactly zero gives one, below zero gives none.`}</p>
          </div>

          <p>{`Write $u$ for whatever expression sits inside the bars. To solve $|u| = c$ when $c$ is positive, split into two cases: $u = c$ or $u = -c$. Solve each linear equation on its own.`}</p>

          <p>{`If the modulus is not already alone, say, $3|x| - 5 = 7$, peel off the outside terms first. The two-case rule only works on a bare modulus.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: solve $|2x + 6| = 10$`}</span>
              <p className="lrn-step-content">{`The modulus is already alone, and $10$ is positive. Split into two cases.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Case one: inside equals $10$`}</span>
              <p className="lrn-step-content">{`$2x + 6 = 10$, so $2x = 4$ and $x = 2$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Case two: inside equals $-10$`}</span>
              <p className="lrn-step-content">{`$2x + 6 = -10$, so $2x = -16$ and $x = -8$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Combine the cases</span>
              <p className="lrn-step-content">{`Together: $x = 2$ or $x = -8$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check by substitution</span>
              <p className="lrn-step-content">{`$|2(2) + 6| = |10| = 10$ and $|2(-8) + 6| = |-10| = 10$. Both work.`}</p>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch out</span>
            <p>{`If a modulus equals a negative number, there is no solution. A distance can never be negative, so $|x| = -4$ has no answer. Spot this before doing any work.`}</p>
          </div>

          <h3>{`Extra Terms Outside the Bars`}</h3>

          <p>{`When the modulus sits inside a larger expression, peel away the outside terms first. Only a bare modulus equals a clean $\\pm c$.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: solve $3|x| - 5 = 7$`}</span>
              <p className="lrn-step-content">{`Add $5$ to both sides: $3|x| = 12$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Divide to get the modulus alone</span>
              <p className="lrn-step-content">{`Divide both sides by $3$: $|x| = 4$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Split into two cases</span>
              <p className="lrn-step-content">{`$x = 4$ or $x = -4$. Check: $|4| = 4$ ✓ and $|-4| = 4$ ✓. Both give $3 \\cdot 4 - 5 = 7$.`}</p>
            </div>
          </div>

          <h3>{`When the Right Side Is an Expression in $x$`}</h3>

          <p>{`Sometimes the right side is not a fixed number but another expression in $x$. The two-case method still works, but you must check each candidate.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: solve $|2x - 1| = x + 4$`}</span>
              <p className="lrn-step-content">{`Two cases: the inside equals $x + 4$, or the inside equals $-(x + 4)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Case one: $2x - 1 = x + 4$`}</span>
              <p className="lrn-step-content">{`Subtract $x$ from both sides: $x - 1 = 4$, so $x = 5$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Case two: $2x - 1 = -(x + 4)$`}</span>
              <p className="lrn-step-content">{`Expand the right: $2x - 1 = -x - 4$. Add $x$ to both sides: $3x - 1 = -4$, so $3x = -3$ and $x = -1$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check both roots in the original</span>
              <p className="lrn-step-content">{`$x = 5$: $|9| = 9$ and $5 + 4 = 9$. Pass. $x = -1$: $|-3| = 3$ and $-1 + 4 = 3$. Pass. Both work, so $x = 5$ or $x = -1$.`}</p>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch out</span>
            <p>{`When the right side depends on $x$, the check is not optional. Plug each candidate into the right side: if it comes out negative, the candidate fails, because a modulus is never negative.`}</p>
          </div>

          <h3>{`When Both Sides Have a Modulus`}</h3>

          <p>{`An equation $|A| = |B|$ asks for two expressions of equal size. Two numbers have equal size when they are equal, or when one is the negative of the other. So either $A = B$ or $A = -B$.`}</p>

          <div className="lrn-eq">
            <span>{`$$|A| = |B| \\iff A = B \\text{ or } A = -B$$`}</span>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: solve $|2x - 3| = |x + 5|$`}</span>
              <p className="lrn-step-content">{`Apply the two-case split.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Case one: $2x - 3 = x + 5$`}</span>
              <p className="lrn-step-content">{`Subtract $x$: $x - 3 = 5$, so $x = 8$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Case two: $2x - 3 = -(x + 5)$`}</span>
              <p className="lrn-step-content">{`Expand the right: $2x - 3 = -x - 5$. Add $x$: $3x - 3 = -5$, so $3x = -2$ and $x = -\\tfrac{2}{3}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Check</span>
              <p className="lrn-step-content">{`$x = 8$: $2(8) - 3 = 13$ and $8 + 5 = 13$, so $|13| = 13 = |13|$. $x = -\\tfrac{2}{3}$: $2(-\\tfrac{2}{3}) - 3 = -\\tfrac{13}{3}$ and $-\\tfrac{2}{3} + 5 = \\tfrac{13}{3}$, so $\\left|-\\tfrac{13}{3}\\right| = \\tfrac{13}{3} = \\left|\\tfrac{13}{3}\\right|$. Both work.`}</p>
            </div>
          </div>

          <p>
            <strong>Payoff:</strong>
            {` you can now solve every shape of modulus equation. Bare modulus equal to a value: split. Modulus equal to an expression: split and check. Two moduli equal: split into $A = B$ or $A = -B$.`}
          </p>

          {/* SECTION 7: SOLVING MODULUS INEQUALITIES */}
        </>,
        <>
          <h2>{`Solving Modulus Inequalities`}</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Which numbers sit less than $3$ steps from zero? Which sit more than $3$ steps? Picture both groups on the number line.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Less than $3$ away: the band $-3 < x < 3$. More than $3$ away: two separate rays, $x < -3$ and $x > 3$.`}</p>
            </details>
          </div>

          <p>{`An inequality with a modulus asks about a range of distances. The answer is a stretch of the number line, not a few points.`}</p>

          <p>
            <strong>When to use this:</strong>
            {` use these patterns whenever a problem says "within", "no more than", or "more than" a certain distance. Tolerances (allowed wiggle room) and error bounds (limits on how much something can be off) are modulus inequalities. The arithmetic page on opposite numbers and absolute value frames the same idea as a distance bound.`}
          </p>

          <div className="lrn-graph">
            <ModulusInequalityViz />
            <p>{`The top bar shows $|x| < c$: the inside numbers, trapped between $-c$ and $c$. The bottom rays show $|x| > c$: the outside numbers, beyond $-c$ and $c$.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$|x| < c$ (less than)`}</span>
              <p>{`These numbers are close to zero, less than $c$ steps away. They form one connected band: $-c < x < c$. Picture the V $y = |x|$ and a horizontal line at height $c$: the band is the stretch of $x$-values where the V sits below the line.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$|x| > c$ (greater than)`}</span>
              <p>{`These numbers are far from zero, more than $c$ steps away. They form two pieces: $x < -c$ or $x > c$. Picture the same V and horizontal line: the two pieces are the $x$-values where the V sits above the line.`}</p>
            </div>
          </div>

          <p>{`The same logic applies to any expression $u$ in place of $x$. For a positive number $c$:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$|u| < c \\iff -c < u < c$$`}</span>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$|u| > c \\iff u < -c \\text{ or } u > c$$`}</span>
          </div>

          <p>{`Swap $<$ for $\\le$ and $>$ for $\\ge$ to get the non-strict versions; the endpoints join the solution.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked example: solve $|x - 2| \\leq 4$</span>
              <p className="lrn-step-content">{`The centre is $2$, the distance is $4$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Write the band</span>
              <p className="lrn-step-content">{`$x$ is at most $4$ from $2$: $-4 \\leq x - 2 \\leq 4$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Add $2$ to all three parts</span>
              <p className="lrn-step-content">{`$-2 \\leq x \\leq 6$. So $x$ lies between $-2$ and $6$, ends included.`}</p>
            </div>
          </div>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Worked example: solve $|x + 1| &gt; 2$</span>
              <p className="lrn-step-content">{`Rewrite $x + 1$ as $x - (-1)$, so the centre is $-1$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Split into two pieces</span>
              <p className="lrn-step-content">{`$x + 1 < -2$ or $x + 1 > 2$. The inside is more than $2$ from zero on either side.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Solve each piece</span>
              <p className="lrn-step-content">{`$x < -3$ or $x > 1$. The answer skips the middle band between $-3$ and $1$.`}</p>
            </div>
          </div>

          <h3>{`When the Bound Is an Expression in $x$`}</h3>

          <p>{`Sometimes the bound on the right is not a fixed number but an expression in $x$. The "less than" rule still gives a band, but the band has moving walls.`}</p>

          <div className="lrn-eq">
            <span>{`$$|f(x)| < g(x) \\iff -g(x) < f(x) < g(x) \\text{ and } g(x) > 0$$`}</span>
          </div>

          <p>{`The extra condition $g(x) > 0$ matters. A modulus is never negative, so if $g(x)$ drops to zero or below, no $x$ in that range can work.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: solve $|x - 2| < 3x$`}</span>
              <p className="lrn-step-content">{`First check the right side is positive: $3x > 0$ forces $x > 0$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Unfold the band</span>
              <p className="lrn-step-content">{`$-3x < x - 2 < 3x$. Two inequalities to solve in parallel.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Left piece: $-3x < x - 2$`}</span>
              <p className="lrn-step-content">{`Add $3x$ to both sides: $0 < 4x - 2$. Then $4x > 2$, so $x > \\tfrac{1}{2}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Right piece: $x - 2 < 3x$`}</span>
              <p className="lrn-step-content">{`Subtract $x$: $-2 < 2x$, so $x > -1$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Combine all three conditions</span>
              <p className="lrn-step-content">{`$x > 0$ and $x > \\tfrac{1}{2}$ and $x > -1$. The tightest is $x > \\tfrac{1}{2}$. So the solution is $x > \\tfrac{1}{2}$.`}</p>
            </div>
          </div>

          <p>{`The greater-than case follows a similar split, with one fewer constraint:`}</p>

          <div className="lrn-eq">
            <span>{`$$|f(x)| > g(x) \\iff f(x) > g(x) \\text{ or } f(x) < -g(x)$$`}</span>
          </div>

          <p>{`No extra check on $g(x)$ is needed here. If $g(x)$ is zero or negative, any real $x$ makes $|f(x)| > g(x)$ true, and the two cases still capture that.`}</p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">{`Worked example: solve $|x - 1| > 2x$`}</span>
              <p className="lrn-step-content">{`Split into two cases joined by "or".`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Right piece: $x - 1 > 2x$`}</span>
              <p className="lrn-step-content">{`Subtract $x$: $-1 > x$, so $x < -1$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">{`Left piece: $x - 1 < -2x$`}</span>
              <p className="lrn-step-content">{`Add $2x$: $3x - 1 < 0$, so $3x < 1$ and $x < \\tfrac{1}{3}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Combine the two pieces</span>
              <p className="lrn-step-content">{`Combining the two: every $x < -1$ already satisfies $x < \\tfrac{1}{3}$, so the full answer is $x < \\tfrac{1}{3}$.`}</p>
            </div>
          </div>

          <p>
            <strong>Payoff:</strong>
            {` you can now solve any modulus inequality, whether the right side is a fixed number or an expression. "Less than" gives a band; "greater than" gives two rays. A "less than" with an expression on the right adds the extra check that the right side is positive.`}
          </p>

          {/* SECTION 8: ALGEBRAIC PROPERTIES — REFERENCE FORWARD */}
        </>,
        <>
          <h2>{`Algebraic Properties`}</h2>

          <p>{`Four arithmetic facts about $|x|$ are proved in the prior topic on opposite numbers and absolute value:`}</p>

          <ul className="lrn-list">
            <li>{`Product rule: $|xy| = |x|\\,|y|$.`}</li>
            <li>{`Quotient rule: $\\left|\\dfrac{x}{y}\\right| = \\dfrac{|x|}{|y|}$, $y \\neq 0$.`}</li>
            <li>{`Symmetry: $|-x| = |x|$.`}</li>
            <li>{`Triangle inequality: $|x + y| \\le |x| + |y|$.`}</li>
          </ul>

          <p>{`Use them freely here on any expression that contains a product, a quotient, an inside sign flip, or a sum inside the bars.`}</p>
        </>
      ]
    },

    practice: PRACTICE_CARDS,

    reference: {
      category: 'Quick Reference',
      title: 'Modulus Function',
      sections: [
        <>
          <h2>{`Core Definition`}</h2>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$|x| = \\begin{cases} x & x \\geq 0 \\\\ -x & x < 0 \\end{cases}$$`}</span>
          </div>

          <p>{`$|x|$ is the distance of $x$ from zero. It is always non-negative: $|x| \\geq 0$.`}</p>
          <p>{`When to use: any time you want to drop direction or sign and keep only the size.`}</p>

          <h2>{`Key Facts`}</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Fact</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$|x| \\geq 0$`}</td>
                <td>{`To rule out impossible cases (a modulus can never be negative)`}</td>
              </tr>
              <tr>
                <td>{`$|-x| = |x|$`}</td>
                <td>{`When a sign appears inside the bars and you want it gone`}</td>
              </tr>
              <tr>
                <td>{`$\\sqrt{x^2} = |x|$`}</td>
                <td>{`When taking a square root of a square of unknown sign`}</td>
              </tr>
              <tr>
                <td>{`$|a - b|$`}</td>
                <td>{`To get the positive gap between two numbers`}</td>
              </tr>
              <tr>
                <td>{`$|xy| = |x|\\,|y|$`}</td>
                <td>{`To split the modulus of a product`}</td>
              </tr>
              <tr>
                <td>{`$\\left|\\dfrac{x}{y}\\right| = \\dfrac{|x|}{|y|}$ ($y \\neq 0$)`}</td>
                <td>{`To split the modulus of a quotient`}</td>
              </tr>
              <tr>
                <td>{`$|x + y| \\leq |x| + |y|$`}</td>
                <td>{`To bound the size of a sum (triangle inequality)`}</td>
              </tr>
              <tr>
                <td>{`Sketch $y = |f(x)|$`}</td>
                <td>{`Sketch $y = f(x)$, then reflect every part below the $x$-axis upward`}</td>
              </tr>
              <tr>
                <td>{`Sketch $y = f(|x|)$`}</td>
                <td>{`Sketch $y = f(x)$ for $x \\geq 0$, then reflect that right half across the $y$-axis`}</td>
              </tr>
            </tbody>
          </table>

          <h2>{`The Graph`}</h2>

          <p>{`$y = |x|$ is a "V": two rays (half-lines) of slope $+1$ and $-1$ meeting at a corner at the origin. It sits on or above the $x$-axis.`}</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Change</th>
                <th>Effect on the V</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$y = |x - h|$`}</td>
                <td>{`Shift right by $h$ (corner at $(h, 0)$)`}</td>
              </tr>
              <tr>
                <td>{`$y = |x| + k$`}</td>
                <td>{`Shift up by $k$ (corner at $(0, k)$)`}</td>
              </tr>
              <tr>
                <td>{`$y = a|x|$`}</td>
                <td>{`Stretch by $a$; $a < 0$ flips the V upside down`}</td>
              </tr>
              <tr>
                <td>{`$y = a|x - h| + k$`}</td>
                <td>{`Apply in order: slide right by $h$, stretch heights by $a$, lift by $k$. Corner at $(h, k)$. If $a < 0$, V opens downward.`}</td>
              </tr>
            </tbody>
          </table>

          <h2>{`Scaling`}</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>Effect on graph</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$y = k|x|$ ($k > 1$)`}</td>
                <td>{`Steeper slopes: narrower V`}</td>
              </tr>
              <tr>
                <td>{`$y = |kx|$ ($k > 1$)`}</td>
                <td>{`Compresses horizontally: narrower V, reaches heights sooner`}</td>
              </tr>
              <tr>
                <td>{`$y = |x + a| + |x - a|$`}</td>
                <td>{`Piecewise linear: flat top between $-a$ and $a$, slope $\\pm 2$ outside`}</td>
              </tr>
            </tbody>
          </table>

          <h2>{`Solving Rules`}</h2>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Problem (with $c &gt; 0$)</th>
                <th>Solution</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Anything outside the bars`}</td>
                <td>{`Isolate the modulus first, then apply a row below`}</td>
                <td>{`E.g. $3|x| - 5 = 7$ becomes $|x| = 4$`}</td>
              </tr>
              <tr>
                <td>{`$|u| = c$`}</td>
                <td>{`$u = c$ or $u = -c$`}</td>
                <td>{`Exact distance: two cases`}</td>
              </tr>
              <tr>
                <td>{`$|u| = 0$`}</td>
                <td>{`$u = 0$`}</td>
                <td>{`Zero distance: one solution`}</td>
              </tr>
              <tr>
                <td>{`$|u| = $ negative`}</td>
                <td>{`No solution`}</td>
                <td>{`Distance can never be negative`}</td>
              </tr>
              <tr>
                <td>{`$|u| = g(x)$`}</td>
                <td>{`$u = g(x)$ or $u = -g(x)$, then check each root`}</td>
                <td>{`Expression on the right: extra roots possible`}</td>
              </tr>
              <tr>
                <td>{`$|A| = |B|$`}</td>
                <td>{`$A = B$ or $A = -B$`}</td>
                <td>{`Two moduli set equal: split into two linear equations`}</td>
              </tr>
              <tr>
                <td>{`$|u| < c$`}</td>
                <td>{`$-c < u < c$`}</td>
                <td>{`"Inside": one band around the centre`}</td>
              </tr>
              <tr>
                <td>{`$|u| > c$`}</td>
                <td>{`$u < -c$ or $u > c$`}</td>
                <td>{`"Outside": two rays away from the centre`}</td>
              </tr>
              <tr>
                <td>{`$|u| < g(x)$`}</td>
                <td>{`$-g(x) < u < g(x)$ with $g(x) > 0$`}</td>
                <td>{`Expression on the right: requires $g(x)$ positive`}</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Tip</span>
            <p>{`When an expression sits on the right, check every answer in the original equation. Squaring or splitting can introduce extra roots that fail the check.`}</p>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
  }

  return config
}

export default function ModulusFunction() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
