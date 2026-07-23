import 'katex/dist/katex.min.css'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  CartesianPlaneViz,
  DistanceTriangleViz,
  FeasibleRegionViz,
  HalfPlaneViz,
  LineSlopeInterceptViz,
  NumberLineInequalityVizGL,
  ParallelPerpViz,
  PlotPointsViz,
  SlopeTypesViz,
  SystemsViz
} from '../../../../components/viz'

function useConfig() {
  const config = {
    cssPrefix: 'gli',
    documentTitle: 'Graphing Lines and Linear Inequalities AETHER',
    learning: {
      groupTitle: 'Coordinate Geometry and Functions',
      category: 'Algebra',
      title: 'Graphing Lines and Linear Inequalities',
      subtitle:
        'Coordinate geometry, slope, linear equations, inequalities, and linear programming',
      sections: [
        <>
          <h2>The Number Line and the Cartesian Plane</h2>

          <p>
            A <strong>number line</strong> is a straight line where every real number, every whole
            number, fraction, decimal, or irrational like {`$\\sqrt{2}$`}, has exactly one point.
            Numbers grow to the right and shrink to the left. Zero sits at the center. The arrows on
            each end mean the line keeps going forever. The <strong>absolute value</strong>{' '}
            {`$|a|$`} is the distance from {`$a$`} to zero, never negative, we use it here as the
            "non-negative distance" between two coordinates.
          </p>
          {/* verified: "real number" framing standard — Cambridge IGCSE 0580 includes rational + irrational under reals */}
          <p>
            An <strong>ordered pair</strong> is two numbers written as {`$(x, y)$`}. The first
            number says how far left or right. The second says how far up or down.
          </p>
          <p>
            The <strong>Cartesian plane</strong> is two number lines crossing at right angles. The
            horizontal one is the <strong>x-axis</strong>. The vertical one is the{' '}
            <strong>y-axis</strong>. They meet at the <strong>origin</strong>, the point{' '}
            {`$(0, 0)$`}, zero steps right and zero steps up.
          </p>

          <div className="lrn-graph">
            <CartesianPlaneViz />
          </div>

          <h3>The Four Quadrants</h3>
          <p>
            The two axes split the plane into four regions called <strong>quadrants</strong>. We
            number them I, II, III, IV starting at the top right and going counterclockwise.
          </p>
          <ul className="lrn-list">
            <li>
              Quadrant I: top right {`$x > 0$`}, {`$y > 0$`}.
            </li>
            <li>
              Quadrant II: top left {`$x < 0$`}, {`$y > 0$`}.
            </li>
            <li>
              Quadrant III: bottom left {`$x < 0$`}, {`$y < 0$`}.
            </li>
            <li>
              Quadrant IV: bottom right {`$x > 0$`}, {`$y < 0$`}.
            </li>
          </ul>

          <p>
            <strong>Lattice points</strong> are points where both coordinates are integers.{' '}
            {`$(3, -2)$`} is a lattice point. {`$(2.5, 1)$`} is not.
          </p>

          <h3>Plotting Points and Identifying Quadrants</h3>
          <p>
            <strong>Worked example:</strong> Plot {`$A = (3, 2)$`}, {`$B = (-4, 1)$`},{' '}
            {`$C = (-2, -3)$`}, and {`$D = (1, -5)$`}. State the quadrant for each.
          </p>
          <ul className="lrn-list">
            <li>{`$A = (3, 2)$`}: right 3, up 2. Quadrant I.</li>
            <li>{`$B = (-4, 1)$`}: left 4, up 1. Quadrant II.</li>
            <li>{`$C = (-2, -3)$`}: left 2, down 3. Quadrant III.</li>
            <li>{`$D = (1, -5)$`}: right 1, down 5. Quadrant IV.</li>
          </ul>

          <div className="lrn-graph">
            <PlotPointsViz />
          </div>
        </>,

        <>
          <h2>Distance and Midpoint</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Two points sit on a grid. One is at $(1, 1)$ and the other at $(4, 5)$. Before using a formula, how would you estimate the straight-line distance between them?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Draw a right triangle connecting the two points. The horizontal leg is 3, the
                vertical leg is 4. The Pythagorean theorem gives {`$d = 5$`}.
              </p>
            </details>
          </div>

          <h3>Distance Between Two Points</h3>
          <p>
            The straight-line distance between two points comes from the Pythagorean theorem from
            school geometry: for a right triangle with legs {`$a$`}, {`$b$`} and hypotenuse {`$c$`},{' '}
            {`$a^2 + b^2 = c^2$`}.
          </p>
          <p>
            <strong>Derivation.</strong> Take two points {`$P_1 = (x_1, y_1)$`} and{' '}
            {`$P_2 = (x_2, y_2)$`}. Connect them and complete the right triangle with one horizontal
            leg and one vertical leg. A leg's length is non-negative regardless of which point you
            label first, so wrap each difference in absolute-value bars: the horizontal leg has
            length {`$|x_2 - x_1|$`} and the vertical leg has length {`$|y_2 - y_1|$`}. The
            Pythagorean theorem gives:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$`}</div>
          <p>Take the square root of both sides:</p>
          <div className="lrn-eq lrn-eq-hero">{`$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$`}</div>

          <p>
            Squaring removes the absolute-value bars because {`$(x_2 - x_1)^2 = (x_1 - x_2)^2$`}.
            The order of the two points does not matter.
          </p>

          <p>
            <strong>Example.</strong> Distance between {`$(1, 2)$`} and {`$(4, 6)$`}:
          </p>
          <div className="lrn-eq">{`$$d = \\sqrt{(4 - 1)^2 + (6 - 2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5.$$`}</div>

          <div className="lrn-graph">
            <DistanceTriangleViz />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do we square the differences before adding them, rather than just adding the
              differences directly?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The differences can be negative. Adding them directly could give zero even when the
                points are far apart. Squaring makes each term positive before the sum.
              </p>
            </details>
          </div>

          <h3>Midpoint Between Two Points</h3>
          <p>
            The <strong>midpoint</strong> is the point exactly halfway between two endpoints. On the
            number line, the midpoint of two numbers is their average: {`$\\tfrac{a + b}{2}$`} sits
            exactly halfway between {`$a$`} and {`$b$`}. The plane is two number lines, so average
            each coordinate on its own:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$M = \\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right).$$`}</div>
          <p>
            The result sits at the same distance from both endpoints, along the segment joining
            them.
          </p>
          <p>
            <strong>Example.</strong> Midpoint of the segment from {`$(1, 3)$`} to {`$(5, 7)$`}:
          </p>
          <div className="lrn-eq">{`$$M = \\left(\\frac{1 + 5}{2},\\ \\frac{3 + 7}{2}\\right) = (3, 5).$$`}</div>

          <h3>Finding an Endpoint From the Midpoint</h3>
          <p>
            If you know the midpoint and one endpoint, the same formula run in reverse gives the
            other endpoint. Let {`$A = (x_1, y_1)$`}, midpoint {`$M = (m_x, m_y)$`}, and unknown
            endpoint {`$B = (x_2, y_2)$`}. Solving the midpoint formula for {`$x_2$`} and {`$y_2$`}:
          </p>
          <div className="lrn-eq">{`$$x_2 = 2 m_x - x_1, \\qquad y_2 = 2 m_y - y_1.$$`}</div>
          <p>
            <strong>Example.</strong> {`$A = (1, 2)$`} and {`$M = (4, 5)$`}.{' '}
            {`$x_2 = 2(4) - 1 = 7$`} and {`$y_2 = 2(5) - 2 = 8$`}, so {`$B = (7, 8)$`}.
          </p>
        </>,

        <>
          <h2>Graphing Linear Equations</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Start at $(0, -6)$. Each step, move 1 right and 2 up. After many steps, what shape do the points form?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A straight line. Every step changes y by the same amount, so the points never bend
                away from one direction.
              </p>
            </details>
          </div>

          <p>
            The <strong>graph</strong> of an equation is the set of all points {`$(x, y)$`} that
            make it true. We also use "graph" as a verb: to graph an equation is to draw that set.
          </p>

          <p>
            Watch what happens with {`$y = 2x - 6$`}. Pick whole values of {`$x$`} and compute{' '}
            {`$y$`}: at {`$x = 0$`}, {`$y = -6$`}; at {`$x = 1$`}, {`$y = -4$`}; at {`$x = 2$`},{' '}
            {`$y = -2$`}; at {`$x = 3$`}, {`$y = 0$`}. Every time {`$x$`} grows by 1, {`$y$`} grows
            by 2. The plotted points line up in one direction and form a straight line.
          </p>
          <p>
            The same is true for fractional and negative {`$x$`}. Going from {`$(0, -6)$`} to{' '}
            {`$(\\tfrac{1}{2}, -5)$`} is half the move from {`$(0, -6)$`} to {`$(1, -4)$`}, same
            direction, half the distance. Any partial step along a straight line is still on that
            line, so {`$(\\tfrac{1}{2}, -5)$`} lands on the same line.
          </p>

          <h3>Graphing by Finding Two Points</h3>
          <p>Two points fix a line. Find two solutions of the equation and connect them.</p>
          <p>
            <strong>Example.</strong> Graph {`$y = 2x + 3$`}. Pick {`$x = 0$`}: {`$y = 3$`}, so{' '}
            {`$(0, 3)$`} is on the line. Pick {`$x = 2$`}: {`$y = 7$`}, so {`$(2, 7)$`} is also on
            the line. Plot both points and draw the line through them. Setting {`$x = 0$`} first is
            easiest, the {`$2x$`} term vanishes and {`$y$`} drops out directly.
          </p>

          <div className="lrn-graph">
            <LineSlopeInterceptViz />
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">CHECK WITH A THIRD POINT</span>
            <p>
              Before drawing, plot a third solution. If the three points do not lie on one straight
              line, you made an arithmetic mistake. Find the bad point and redo it.
            </p>
          </div>

          <div className="lrn-insight">
            <span className="lrn-insight-label">EVERY LINEAR EQUATION IS A LINE</span>
            <p>
              An equation of the form {`$Ax + By = C$`}, where {`$A$`} and {`$B$`} are not both
              zero, and {`$A$`}, {`$B$`}, {`$C$`} are constants, has a straight-line graph. That is
              why such equations are called <strong>linear</strong>. Special cases you will see
              named in later sections include {`$y = mx + b$`} (slope-intercept form), {`$y = k$`}{' '}
              (horizontal), and {`$x = k$`} (vertical).
            </p>
          </div>

          <h3>x-Intercept and y-Intercept</h3>
          <p>
            The <strong>y-intercept</strong> is where the line crosses the y-axis. Every point on
            the y-axis has {`$x = 0$`}, so set {`$x = 0$`} and solve for {`$y$`}. The{' '}
            <strong>x-intercept</strong> is where the line crosses the x-axis. Every point on the
            x-axis has {`$y = 0$`}, so set {`$y = 0$`} and solve for {`$x$`}. These two intercepts
            are usually the easiest pair of points to find on a line, plot {`$(x\\text{-int}, 0)$`}{' '}
            and {`$(0, y\\text{-int})$`}, draw through them, and you are done (a third point still
            serves as the error check above).
          </p>
          <p>
            <strong>Example.</strong> Intercepts of {`$3x + 2y = 12$`}:
          </p>
          <ul className="lrn-list">
            <li>{`y-intercept: set $x = 0$: $2y = 12$, so $y = 6$. Point: $(0, 6)$.`}</li>
            <li>{`x-intercept: set $y = 0$: $3x = 12$, so $x = 4$. Point: $(4, 0)$.`}</li>
          </ul>

          <p>
            <strong>Capstone.</strong> You can now graph any linear equation by computing two
            solutions, plotting them, and drawing the line through them.
          </p>
        </>,

        <>
          <h2>Slope</h2>

          <p>
            The previous section showed that each unit step right on a line changes {`$y$`} by the
            same fixed amount. That fixed amount is what we now name, slope, and it is the single
            number that captures a line's steepness.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A road rises 3 meters for every 10 meters you travel horizontally. Another road rises
              8 meters for every 10 meters. Which is steeper? How would you express steepness as a
              single number?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The second road is steeper. Divide rise by run: {`$\\frac{8}{10} = 0.8$`} vs{' '}
                {`$\\frac{3}{10} = 0.3$`}. A larger ratio means a steeper slope.
              </p>
            </details>
          </div>

          <p>
            <strong>Slope</strong> measures how steep a line is. It is the vertical change divided
            by the horizontal change between any two points on the line. By convention, slope is
            named {`$m$`}. Pick any two points on the line and call them {`$(x_1, y_1)$`} and{' '}
            {`$(x_2, y_2)$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$m = \\frac{y_2 - y_1}{x_2 - x_1}.$$`}</div>
          <p>
            British syllabi call this the <strong>gradient</strong>; American ones call it the{' '}
            <strong>slope</strong>. Same thing. Geometrically, {`$m = \\tan\\theta$`} where{' '}
            {`$\\theta$`} is the angle the line makes with the positive x-axis, a slope of 1
            corresponds to a 45° tilt, a slope of {`$\\sqrt{3}$`} to 60°, and so on.
          </p>
          {/* verified: Cambridge IGCSE 0580 syllabus uses "gradient"; m = tan θ standard A-level identity (siyavula, AMSI ESA) */}
          <p>
            Slope is a ratio, not just a rise. The same rise over a longer run gives a gentler line,
            so both numbers matter. Concretely, the line through {`$(2, 1)$`} and {`$(5, 7)$`} has
            slope {`$\\tfrac{7-1}{5-2} = 2$`} either way you order the points: swap to{' '}
            {`$\\tfrac{1-7}{2-5} = \\tfrac{-6}{-3} = 2$`}. Both signs flip together, so they cancel.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">WATCH THE ORDER</span>
            <p>
              The y-differences and x-differences must use the <em>same</em> order:{' '}
              {`$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$`}, not {`$\\dfrac{y_2 - y_1}{x_1 - x_2}$`}.
              Swapping only one side flips the sign and gives a wrong answer.
            </p>
          </div>

          <h3>Positive, Negative, Zero, and Undefined Slope</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">POSITIVE SLOPE</div>
              <p>{`$m > 0$`}. The line rises from left to right.</p>
            </div>
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">NEGATIVE SLOPE</div>
              <p>{`$m < 0$`}. The line falls from left to right.</p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">ZERO SLOPE</div>
              <p>
                {`$m = 0$`}. Perfectly horizontal. Equation: {`$y = k$`} for some constant {`$k$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">UNDEFINED SLOPE</div>
              <p>
                Perfectly vertical. Division by zero. Equation: {`$x = k$`} for some constant{' '}
                {`$k$`}.
              </p>
            </div>
          </div>

          <div className="lrn-graph">
            <SlopeTypesViz />
          </div>

          <p>
            Division by zero is called "undefined" because no number fits the result. As the bottom
            of the ratio gets smaller and smaller, the ratio gets larger and larger without settling
            on any value, so there is no number to write down.
          </p>

          <p>
            <strong>Example basic slope.</strong> Slope of the line through {`$(2, 1)$`} and{' '}
            {`$(5, 7)$`}: {`$m = \\tfrac{7 - 1}{5 - 2} = \\tfrac{6}{3} = 2$`}. The line rises 2
            units for every 1 unit right.
          </p>

          <p>
            <strong>Example horizontal and vertical.</strong>
          </p>
          <ul className="lrn-list">
            <li>{`Horizontal through $(1, 4)$ and $(6, 4)$: $m = \\frac{4-4}{6-1} = 0$.`}</li>
            <li>{`Vertical through $(3, 1)$ and $(3, 7)$: $m = \\frac{7-1}{3-3}$ undefined.`}</li>
          </ul>

          <h3>Slope-Intercept Form</h3>
          <p>
            <strong>Example first.</strong> Look at {`$y = 2x + 3$`}. Setting {`$x = 0$`} gives{' '}
            {`$y = 3$`}, so the line crosses the y-axis at {`$(0, 3)$`}. Increasing {`$x$`} by 1
            increases {`$y$`} by 2, which is exactly the slope. The "2" is the slope; the "3" is the
            y-coordinate of the y-intercept. Move 1 right and 2 up from {`$(0, 3)$`} to land on{' '}
            {`$(1, 5)$`}, the next point on the line.
          </p>
          <p>
            <strong>The form.</strong> The most useful equation form for a line uses the slope and
            the y-intercept directly:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$y = mx + b.$$`}</div>
          <p>
            Here {`$m$`} is the slope and {`$b$`} is the y-coordinate of the y-intercept (by
            convention, {`$b$`} stands for the y-intercept value). The same {`$x = 0$`} argument as
            the example generalizes: setting {`$x = 0$`} gives {`$y = b$`}, so the line crosses the
            y-axis at {`$(0, b)$`}, and each unit increase in {`$x$`} adds {`$m$`} to {`$y$`}.
          </p>
          {/* verified: by-convention framing — "b" predates "modulus" theories and is mathematical convention (nebusresearch on intercept letter; physicsforums on y=mx+b origin) */}
          <p>
            <strong>Rate example.</strong> A taxi charges a flat \$3 fee plus \$2 per mile. The flat
            fee is the cost at zero miles, so it is the y-intercept: {`$b = 3$`}. The rate per mile
            is the slope: {`$m = 2$`}. The cost equation is {`$y = 2x + 3$`}. At 7 miles:{' '}
            {`$y = 2(7) + 3 = 17$`}, so the ride costs \$17.
          </p>

          <h3>Slope as a Rate of Change</h3>
          <p>
            The taxi example points to a bigger idea. For a line {`$y = mx + b$`}, the slope {`$m$`}{' '}
            is the <strong>rate of change</strong>, how fast {`$y$`} grows for each unit that{' '}
            {`$x$`} grows. A line has one fixed slope, so this rate never changes. The y-intercept{' '}
            {`$b$`} is the starting value at {`$x = 0$`}.
          </p>
          <div className="lrn-insight">
            <span className="lrn-insight-label">CONSTANT RATE OF CHANGE</span>
            <p>
              A linear function {`$y = mx + b$`} changes at one steady rate. That rate is the slope{' '}
              {`$m$`}. "Slope" and "rate of change" name the same number from two points of view, steepness on a graph, speed of change in a story.
            </p>
          </div>
          {/* verified: Stewart §2.5 "Slope and Rate of Change" — for f(x)=ax+b, slope = rate of change = a */}
          <p>
            <strong>Build a model from a rate and a start.</strong> Water flows into a pool at 5
            gallons per minute. The pool starts with 200 gallons. The rate is the slope, so{' '}
            {`$m = 5$`}; the starting amount is the y-intercept, so {`$b = 200$`}. The volume after{' '}
            {`$t$`} minutes is {`$V = 5t + 200$`}.
          </p>
          <p>
            <strong>Run the model backward.</strong> The pool holds 600 gallons. When is it full?
            Set {`$V = 600$`}: {`$600 = 5t + 200$`}, so {`$5t = 400$`} and {`$t = 80$`}. The pool
            fills in 80 minutes.
          </p>

          <h3>Graphing a Line From One Point and a Slope</h3>
          <p>
            One point fixes where the line sits. The slope fixes which direction it goes. Use the
            slope as instructions: rise over run.
          </p>
          <p>
            <strong>Example.</strong> Graph the line through {`$(-3, 1)$`} with slope{' '}
            {`$-\\tfrac{1}{4}$`}. Read the slope as "down 1, right 4". Starting at {`$(-3, 1)$`},
            move 4 right and 1 down to get {`$(1, 0)$`}. A second point fixes the line. Draw through
            both.
          </p>

          <h3>Collinearity: Three Points on the Same Line</h3>
          <p>
            Three points are <strong>collinear</strong> when they all lie on one straight line. Two
            points always fix a line, so the test is: compute the slope between one pair of points
            and the slope between another pair sharing a point with the first. If the two slopes
            match, the three points are collinear.
          </p>
          <p>
            <strong>Example.</strong> Three of these four points lie on one line. Which one is the
            odd one out? {`$A = (32, 5)$`}, {`$B = (24, 18)$`}, {`$C = (22, 21)$`},{' '}
            {`$D = (17, 29)$`}.
          </p>
          <p>Compute the slope from {`$A$`} to each of the others:</p>
          <ul className="lrn-list">
            <li>{`Slope $AB$: $\\frac{18 - 5}{24 - 32} = -\\frac{13}{8}$.`}</li>
            <li>{`Slope $AC$: $\\frac{21 - 5}{22 - 32} = -\\frac{8}{5}$.`}</li>
            <li>{`Slope $AD$: $\\frac{29 - 5}{17 - 32} = -\\frac{8}{5}$.`}</li>
          </ul>
          <p>
            Slopes {`$AC$`} and {`$AD$`} match, so {`$A$`}, {`$C$`}, {`$D$`} are collinear. Point{' '}
            {`$B$`} is off the line.
          </p>
        </>,

        <>
          <h2>Finding the Equation of a Line</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You know a line has slope 3 and passes through the point $(2, 5)$. How would you figure out its equation without a formula?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Use $y = 3x + b$ and plug in $(2, 5)$: $5 = 6 + b$, so $b = -1$. Equation: $y = 3x - 1$.`}</p>
            </details>
          </div>

          <p>
            Pick the form that matches what you know. Slope and y-intercept? Use{' '}
            <strong>slope-intercept</strong> {`$y = mx + b$`} from the previous section, slope 4
            and y-intercept {`$-1$`} gives {`$y = 4x - 1$`}. Slope and one point? Use point-slope.
            Two points? Find the slope first, then use point-slope.
          </p>

          <h3>Point-Slope Form</h3>
          <p>
            With slope {`$m$`} and one known point {`$(x_1, y_1)$`}, use{' '}
            <strong>point-slope form</strong>:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$y - y_1 = m(x - x_1).$$`}</div>
          <p>
            This form comes straight from the slope definition. The slope between {`$(x, y)$`} and{' '}
            {`$(x_1, y_1)$`} is {`$m = \\dfrac{y - y_1}{x - x_1}$`}. Multiply both sides by{' '}
            {`$(x - x_1)$`} and you have point-slope form.
          </p>
          <p>
            <strong>Example.</strong> Slope 3 through {`$(2, 5)$`}:
          </p>
          <div className="lrn-eq">{`$$y - 5 = 3(x - 2) \\implies y = 3x - 1.$$`}</div>

          <h3>Finding the Equation Through Two Points</h3>
          <p>
            <strong>Example.</strong> Line through {`$(1, 3)$`} and {`$(4, 9)$`}.
          </p>
          <ol className="lrn-list">
            <li>{`Slope: $m = \\frac{9 - 3}{4 - 1} = 2$.`}</li>
            <li>{`Point-slope with $(1, 3)$: $y - 3 = 2(x - 1)$, so $y = 2x + 1$.`}</li>
          </ol>
          <p>Either point gives the same final equation. Both lie on the same line.</p>

          <h3>Horizontal and Vertical Lines</h3>
          <p>
            A horizontal line keeps {`$y$`} fixed. A vertical line keeps {`$x$`} fixed. Through{' '}
            {`$(3, -5)$`}:
          </p>
          <ul className="lrn-list">
            <li>
              Horizontal: slope 0, {`$y$`} fixed at {`$-5$`}. Equation: {`$y = -5$`}.
            </li>
            <li>
              Vertical: {`$x$`} fixed at 3, slope undefined. Equation: {`$x = 3$`}.
            </li>
          </ul>
          <p>
            Vertical lines have no slope-intercept form (no finite {`$m$`} works); the next section
            covers <strong>standard form</strong>, which handles them directly.
          </p>

          <h3>Hidden Linear Equations: Grade-Curving</h3>
          <p>
            A teacher wants to curve a test. She turns each old score {`$s$`} into a new score{' '}
            {`$t = As + B$`} for some constants {`$A$`} and {`$B$`}. She wants a 100 to stay a 100,
            and she wants a 62 to become an 81. Find {`$A$`} and {`$B$`}, then curve a 74.
          </p>
          <p>
            The formula {`$t = As + B$`} is a linear equation in {`$s$`} and {`$t$`}, so the pairs
            {` `}
            {`$(s, t)$`} lie on a line. The two known pairs give two points: {`$(100, 100)$`} and{' '}
            {`$(62, 81)$`}. Compute the slope:
          </p>
          <div className="lrn-eq">{`$$A = \\frac{81 - 100}{62 - 100} = \\frac{-19}{-38} = \\frac{1}{2}.$$`}</div>
          <p>
            Plug {`$(100, 100)$`} into {`$t = \\tfrac{1}{2}s + B$`}: {`$100 = 50 + B$`}, so{' '}
            {`$B = 50$`}. The curve is {`$t = \\tfrac{1}{2}s + 50$`}. A student who scored 74 gets{' '}
            {`$t = \\tfrac{1}{2}(74) + 50 = 87$`}.
          </p>

          <p>
            <strong>Capstone.</strong> You can now write the equation of any line given (a) slope
            and y-intercept, (b) slope and one point, or (c) two points.
          </p>
        </>,

        <>
          <h2>Standard Form</h2>

          <p>
            <strong>Standard form</strong> writes a line as
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$Ax + By = C,$$`}</div>
          <p>
            where {`$A$`}, {`$B$`}, {`$C$`} are integers with no common factor and {`$A \\geq 0$`}.
            The "no common factor" and "{`$A \\geq 0$`}" rules pin down a unique representation, without them, every line could be written infinitely many ways (multiply through by
            anything). Slope-intercept form is best for graphing; standard form is best for reading
            intercepts and for comparing two lines in a system.
          </p>
          <p>
            Standard form covers vertical lines too. {`$x = 3$`} fits as{' '}
            {`$1 \\cdot x + 0 \\cdot y = 3$`}, so {`$B = 0$`} is allowed.
          </p>

          <h3>Slope from Standard Form</h3>
          <p>
            Solve {`$Ax + By = C$`} for {`$y$`}:
          </p>
          <div className="lrn-eq">{`$$y = -\\frac{A}{B}x + \\frac{C}{B} \\implies m = -\\frac{A}{B}.$$`}</div>
          <p>
            The negative sign comes from moving {`$Ax$`} across the equals sign. Example: slope of{' '}
            {`$3x + 4y = 12$`} is {`$m = -\\tfrac{3}{4}$`}.
          </p>

          <h3>Intercepts from Standard Form</h3>
          <div className="lrn-eq">{`$$x\\text{-intercept: } x = \\frac{C}{A} \\qquad y\\text{-intercept: } y = \\frac{C}{B}.$$`}</div>
          <p>
            <strong>Example.</strong> Intercepts of {`$2x + 5y = 10$`}: {`$x = \\tfrac{10}{2} = 5$`}{' '}
            gives {`$(5, 0)$`}; {`$y = \\tfrac{10}{5} = 2$`} gives {`$(0, 2)$`}.
          </p>
          <p>
            <strong>Edge cases.</strong> If {`$A = 0$`}, the line is horizontal ({`$y = C/B$`}) and
            never crosses the y-axis at a single isolated point, it <em>is</em> the line{' '}
            {`$y = C/B$`}, so there is no x-intercept. If {`$B = 0$`}, the line is vertical (
            {`$x = C/A$`}) and there is no y-intercept. Divide-by-zero appears in the formulas
            exactly when one intercept does not exist.
          </p>
          <p>
            <strong>Point-slope ↔ standard form conversion.</strong> Take {`$y - 3 = 2(x - 1)$`}.
            Expand: {`$y - 3 = 2x - 2$`}, so {`$-2x + y = 1$`}. Multiply through by {`$-1$`} to make{' '}
            {`$A \\geq 0$`}: {`$2x - y = -1$`}. That last line is the canonical standard form.
          </p>
          {/* verified: point-slope to standard conversion uses elementary algebra; canonicalization rule A ≥ 0 is standard */}

          <h3>Converting to Standard Form</h3>
          <p>
            <strong>Example.</strong> Convert {`$y = \\tfrac{1}{2}x + 3$`} to standard form.
            Multiply through by 2: {`$2y = x + 6$`}. Move {`$x$`} to the left: {`$-x + 2y = 6$`}.
            Multiply by {`$-1$`} so the leading coefficient is positive: {`$x - 2y = -6$`}.
          </p>

          <h3>Two Lines Through One Point (Competition Example)</h3>
          <p>
            <strong>Example.</strong> A line with slope 3 and a line with slope 5 both pass through{' '}
            {`$(10, 15)$`}. Find the distance between their x-intercepts.
          </p>
          <p>
            <strong>Method 1 equations.</strong> Point-slope for the first line:{' '}
            {`$y - 15 = 3(x - 10)$`}, i.e. {`$y = 3x - 15$`}. Set {`$y = 0$`}: {`$x = 5$`}.
            Point-slope for the second: {`$y - 15 = 5(x - 10)$`}, i.e. {`$y = 5x - 35$`}. Set{' '}
            {`$y = 0$`}: {`$x = 7$`}. The x-intercepts are {`$(5, 0)$`} and {`$(7, 0)$`}, distance
            2.
          </p>
          <p>
            <strong>Method 2 slope as instructions.</strong> Read slope 3 as "for each step right,{' '}
            {`$y$`} rises 3"; solve for the step that drops {`$y$`} by the required amount. An
            x-intercept has {`$y = 0$`}. Starting from {`$(10, 15)$`}, the line must drop 15 units
            in {`$y$`} to reach the x-axis. For slope 3, the change in {`$x$`} satisfies{' '}
            {`$\\tfrac{-15}{\\Delta x} = 3$`}, so {`$\\Delta x = -5$`} and the x-intercept is{' '}
            {`$(5, 0)$`}. For slope 5, {`$\\Delta x = -3$`}, giving {`$(7, 0)$`}. Distance: 2. Same
            answer, less algebra.
          </p>
        </>,

        <>
          <h2>Parallel and Perpendicular Lines</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Two lines have slopes of 2 and $-\\frac{1}{2}$. Before reading on, predict whether they are parallel, perpendicular, or neither.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Product: $2 \\times (-\\frac{1}{2}) = -1$. They are perpendicular.`}</p>
            </details>
          </div>

          <h3>Parallel Lines</h3>
          <p>
            Two lines are <strong>parallel</strong> when they have the same slope and different
            y-intercepts. They never meet. If both slope and y-intercept match, the two equations
            describe the same line, not two parallel lines.
          </p>
          <div className="lrn-eq">{`$$m_1 = m_2, \\quad b_1 \\neq b_2.$$`}</div>
          <p>
            <strong>Example.</strong> Same family as the running example {`$y = 2x + 3$`}: compare
            with {`$y = 2x - 5$`}. Both have slope 2, different y-intercepts, so they are parallel.
          </p>

          <h3>Perpendicular Lines</h3>
          <p>
            Two lines are <strong>perpendicular</strong> when they meet at a right angle. Their
            slopes multiply to {`$-1$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$m_1 \\cdot m_2 = -1.$$`}</div>
          <p>
            One slope is the <strong>negative reciprocal</strong> of the other:{' '}
            {`$m_2 = -\\dfrac{1}{m_1}$`}. A slope of 3 means "right 1, up 3". Turning that direction
            a quarter turn gives "up 1, left 3", that is, "right 3, down 1", a slope of{' '}
            {`$-\\tfrac{1}{3}$`}. The run and the rise swap, and one of them changes sign. (A full
            proof from the identity {`$\\tan(\\theta + 90°) = -\\cot\\theta$`} belongs in
            trigonometry; the geometric quarter-turn argument is enough here.)
          </p>
          <p>
            Horizontal and vertical lines are perpendicular by inspection, they meet at a right
            angle, but the product rule does not apply directly because vertical lines have no
            defined slope.
          </p>

          <div className="lrn-graph">
            <ParallelPerpViz />
          </div>

          <p>
            <strong>Example parallel.</strong> Line parallel to {`$y = 2x + 5$`} through{' '}
            {`$(1, 3)$`}. Same slope {`$m = 2$`}. Point-slope:{' '}
            {`$y - 3 = 2(x - 1) \\implies y = 2x + 1$`}.
          </p>
          <p>
            <strong>Example perpendicular.</strong> Line perpendicular to {`$y = 2x + 5$`} through{' '}
            {`$(1, 3)$`}. Perpendicular slope: {`$m = -\\tfrac{1}{2}$`}. Point-slope:{' '}
            {`$y - 3 = -\\tfrac{1}{2}(x - 1) \\implies y = -\\tfrac{1}{2}x + \\tfrac{7}{2}$`}.
          </p>
        </>,

        <>
          <h2>Systems of Two Linear Equations: The Geometric Picture</h2>

          <p>
            A <strong>system of two linear equations</strong> is two line equations taken together;
            its <strong>solution</strong> is the point where both equations hold at once, on the
            graph, where the two lines cross. <strong>Linear Equations</strong> owns the algebraic
            side, {' '}
            <strong>substitution, elimination, and the contradiction-versus-identity test</strong>{' '}
            for the three cases. Here we stay with the picture: two distinct lines cannot meet at
            two different points (two points already fix a line, so sharing two would mean sharing
            the whole line), so the three cases, one crossing, parallel, or coincident, are{' '}
            <em>all</em> the cases.
          </p>

          <div className="lrn-graph">
            <SystemsViz />
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">GRAPH VS. ALGEBRA</span>
            <p>
              Graphing both lines and reading off the crossing point is a useful sanity check. But
              if the intersection sits between grid lines, the graph cannot tell you the exact
              coordinates. For exact answers, solve the system algebraically, set the two
              expressions for {`$y$`} equal, or eliminate one variable by adding multiples of the
              two equations (the toolkit lives in <strong>Linear Equations</strong>).
            </p>
          </div>
        </>,

        <>
          <h2>The Basics of Inequalities</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You know $5 > 3$. What happens if you multiply both sides by $-1$? Does the inequality still point the same direction?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`You get $-5 < -3$. The direction flips. Multiplying by a negative reverses the inequality.`}</p>
            </details>
          </div>

          <p>
            An <strong>inequality</strong> says one quantity is larger or smaller than another. The
            four signs are:
          </p>
          <ul className="lrn-list">
            <li>{`$a < b$: $a$ is strictly less than $b$.`}</li>
            <li>{`$a > b$: $a$ is strictly greater than $b$.`}</li>
            <li>{`$a \\leq b$: $a$ is less than or equal to $b$.`}</li>
            <li>{`$a \\geq b$: $a$ is greater than or equal to $b$.`}</li>
          </ul>

          <p>
            <strong>Strict</strong> inequalities ({`$<$`}, {`$>$`}) exclude the boundary value.
            <strong> Non-strict</strong> inequalities ({`$\\leq$`}, {`$\\geq$`}) include it. On a
            number line, {`$x < 4$`} uses an open circle at 4 and shades left; {`$x \\geq -2$`} uses
            a filled circle at {`$-2$`} and shades right.
          </p>

          <div className="lrn-insight">
            <span className="lrn-insight-label">TRANSITIVITY</span>
            <p>
              If {`$a > b$`} and {`$b > c$`}, then {`$a > c$`}. The same chain works for {`$\\geq$`}
              . On the number line, {`$a$`} sits right of {`$b$`}, and {`$b$`} sits right of {`$c$`}
              , so {`$a$`} is right of {`$c$`}. We sometimes write this as a single chain:{' '}
              {`$a > b > c$`}.
            </p>
          </div>
        </>,

        <>
          <h2>Inequality Manipulation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You know $a > b$. You add the same number $c$ to both sides. Does the inequality direction change?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. Adding the same quantity to both sides shifts both points equally. Their
                relative order is unchanged.
              </p>
            </details>
          </div>

          <p>
            Solving an inequality means isolating the variable. The same moves work as with
            equations, with one trap. Multiplying or dividing by a negative flips the direction of
            the inequality. Everything else leaves it alone.
          </p>

          <h3>Adding and Subtracting the Same Quantity</h3>
          <p>
            If {`$a > b$`}, then {`$a + c > b + c$`} and {`$a - c > b - c$`} for any real {`$c$`}.
            Adding the same number to both sides shifts them equally on the number line. Their order
            does not change.
          </p>

          <h3>Adding Two Inequalities</h3>
          <p>
            <strong>Example first.</strong> Suppose {`$x > 3$`} and {`$y > 5$`}. Add corresponding
            sides: {`$x + y > 3 + 5 = 8$`}. That always works.
          </p>
          <p>
            <strong>The rule.</strong> If {`$a > b$`} and {`$c > d$`}, then {`$a + c > b + d$`}.
          </p>
          <p>
            <strong>Proof.</strong> {`$a - b > 0$`} and {`$c - d > 0$`}. The sum of two positives is
            positive: {`$(a + c) - (b + d) > 0$`}.
          </p>

          <h3>Why You Cannot Subtract Two Inequalities</h3>
          <p>
            Subtracting {`$c > d$`} is the same as adding {`$-c < -d$`}. You would be adding two
            inequalities pointing in opposite directions, which is not safe. Counterexample:{' '}
            {`$5 > 3$`} and {`$4 > 1$`}. Subtraction claims {`$5 - 4 > 3 - 1$`}, i.e. {`$1 > 2$`}.
            False.
          </p>

          <h3>Multiplying by a Positive Number</h3>
          <p>
            If {`$a > b$`} and {`$k > 0$`}, then {`$ka > kb$`}. The direction does not change.
            Example: {`$x > 2$`}, multiply by 3 to get {`$3x > 6$`}.
          </p>

          <h3>Multiplying by a Negative Number, Sign Flip</h3>
          <p>
            <strong>Example first.</strong> Start with {`$x > 2$`}. Multiply both sides by {`$-3$`}:
            {`$-3x < -6$`}. The direction flipped, left was on the right of 2, now {`$-3x$`} is on
            the <em>left</em> of {`$-6$`} on the number line.
          </p>
          <p>
            <strong>The rule.</strong> If {`$a > b$`} and {`$k < 0$`}, then {`$ka < kb$`}. The
            direction reverses. (The fact that this rule exists was first shown in{' '}
            <strong>Exponents, Radicals and Inequalities § Solving Inequalities</strong>; here we
            prove it cleanly and put it to use.)
          </p>
          <p>
            <strong>Proof.</strong> {`$a - b > 0$`}. Multiply by {`$k < 0$`}: a positive times a
            negative is negative, so {`$k(a-b) < 0$`}, i.e. {`$ka - kb < 0$`}, so {`$ka < kb$`}.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Solve $-2x + 4 > 10$.`}</p>
              <ol className="lrn-list">
                <li>{`Subtract 4 from both sides: $-2x > 6$.`}</li>
                <li>{`Divide by $-2$ and flip: $x < -3$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>{`Solve $-3x + 1 > 7$. First, subtract 1 from both sides.`}</li>
                <li>Then divide by {`$-3$`}, remember to flip the direction.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Solve $-5x + 2 \\geq 12$ and write the solution in interval notation.`}</p>
            </div>
          </div>

          <h3>Powers and Roots of Both Sides</h3>
          <p>
            If {`$x > y > 0$`} and {`$n$`} is a positive integer, then {`$x^n > y^n$`} and{' '}
            {`$\\sqrt[n]{x} > \\sqrt[n]{y}$`}. Raising or rooting both sides preserves the direction
            as long as both sides are positive and the exponent is positive. (The same holds for
            positive fractional exponents like {`$\\tfrac{1}{2}$`} or {`$\\tfrac{2}{3}$`}, but
            integer powers and integer roots are the cases you will see most often.)
          </p>
          {/* verified: positive real exponents preserve order on positive reals; Cambridge IGCSE 0580 Extended covers integer + fractional indices */}
          <p>
            <strong>Counterexample with a negative side.</strong> {`$2 > -3$`}, but {`$2^2 = 4$`}{' '}
            and {`$(-3)^2 = 9$`}, so squaring reverses the order. Always check that both sides are
            positive before raising to a power.
          </p>
          <p>
            Raising to a <em>negative</em> power flips the order even with both sides positive: if{' '}
            {`$x > y > 0$`}, then {`$\\tfrac{1}{x} < \\tfrac{1}{y}$`}, the reciprocal rule below.
          </p>

          <h3>The Trivial Inequality</h3>
          <p>
            For any real number {`$x$`}, {`$x^2 \\geq 0$`}. A square is never negative. Expanding{' '}
            {`$(a - b)^2 \\geq 0$`} yields the workhorse {`$a^2 + b^2 \\geq 2ab$`}, the launching
            move for the AM-GM proof in{' '}
            <strong>Exponents, Radicals and Inequalities § AM-GM Inequality</strong>.
          </p>

          <h3>Reciprocal Inequality</h3>
          <p>
            If {`$x$`} and {`$y$`} share a sign and {`$x > y$`}, then{' '}
            {`$\\dfrac{1}{x} < \\dfrac{1}{y}$`}, taking reciprocals reverses the direction. Both
            positive: {`$5 > 3 > 0$`} gives {`$\\tfrac{1}{5} < \\tfrac{1}{3}$`}. Both negative:{' '}
            {`$-2 > -5$`} gives {`$-\\tfrac{1}{2} < -\\tfrac{1}{5}$`}. Mixed signs break the rule, {`$2 > -3$`} but {`$\\tfrac{1}{2} > -\\tfrac{1}{3}$`}, so always check both sides sit
            on the same side of zero first.
          </p>
        </>,

        <>
          <h2>Which Is Greater?</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Which is larger, $\\dfrac{99}{100}$ or $\\dfrac{999}{1000}$? Both are very close to 1, so the usual cross-multiply is awkward. What is one move that turns both into something easy to compare without changing which one is bigger?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Subtract each from 1: $1 - \\tfrac{99}{100} = \\tfrac{1}{100}$ and $1 - \\tfrac{999}{1000} = \\tfrac{1}{1000}$. The second remainder is smaller, so the second fraction is closer to 1, that is, $\\tfrac{999}{1000} > \\tfrac{99}{100}$.`}</p>
            </details>
          </div>

          <p>
            The inequality rules have a second use. They let you compare two ugly numbers, radicals, powers, fractions near 1, without a calculator. Keep applying reversible,
            direction-preserving moves until the two sides are simple enough to compare directly.
            (For the underlying mechanics, squaring with positive sides, raising both sides to the
            same positive power, see the previous section.)
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">DIRECTION-PRESERVING MOVES</span>
            <p>
              Squaring or raising to a positive power preserves direction <em>only</em> when both
              sides are positive. Taking reciprocals reverses direction <em>only</em> when both
              sides share a sign. Always check the sign of each side before you make a move.
            </p>
          </div>

          <h3>Strategy 1, Raise Both Sides to a Power</h3>
          <p>
            <strong>Example.</strong> Compare {`$\\sqrt{7}$`} and {`$\\sqrt[3]{20}$`}. Both sides
            are positive, so raising both to the sixth power preserves direction:
          </p>
          <div className="lrn-eq">{`$$\\left(\\sqrt{7}\\right)^6 = 7^3 = 343, \\qquad \\left(\\sqrt[3]{20}\\right)^6 = 20^2 = 400.$$`}</div>
          <p>
            {`$343 < 400$`}, and every step was reversible, so {`$\\sqrt{7} < \\sqrt[3]{20}$`}.
          </p>

          <h3>Strategy 2, Take a Common Root</h3>
          <p>
            <strong>Example.</strong> Compare {`$2^{10}$`} and {`$3^{6}$`}. Both are positive. Take
            the smallest convenient root that simplifies both, here both exponents share a factor
            of 2, so take the square root (direction preserved):
          </p>
          <div className="lrn-eq">{`$$\\sqrt{2^{10}} = 2^{5} = 32, \\qquad \\sqrt{3^{6}} = 3^{3} = 27.$$`}</div>
          <p>
            {`$32 > 27$`}, so {`$2^{10} > 3^{6}$`}. Direct check: {`$2^{10} = 1024 > 729 = 3^6$`}.
          </p>

          <h3>Strategy 3, Compare to a Common Reference</h3>
          <p>
            <strong>Example.</strong> Which is larger, {`$A = \\dfrac{7}{8}$`} or{' '}
            {`$B = \\dfrac{8}{9}$`}? Both are just below 1. Rewrite each as 1 minus a small piece:
          </p>
          <div className="lrn-eq">{`$$A = 1 - \\frac{1}{8}, \\qquad B = 1 - \\frac{1}{9}.$$`}</div>
          <p>
            {`$\\tfrac{1}{9} < \\tfrac{1}{8}$`} because the denominator is larger. Subtracting a
            smaller piece from 1 leaves a larger result, so {`$B > A$`}.
          </p>

          <h3>Strategy 4, Take Reciprocals</h3>
          <p>
            Same {`$A = \\tfrac{7}{8}$`} and {`$B = \\tfrac{8}{9}$`}, second route. Both are
            positive, so taking reciprocals flips the direction:
          </p>
          <div className="lrn-eq">{`$$\\frac{1}{A} = \\frac{8}{7}, \\qquad \\frac{1}{B} = \\frac{9}{8}.$$`}</div>
          <p>
            Compare via 1: {`$\\tfrac{8}{7} = 1 + \\tfrac{1}{7}$`} and{' '}
            {`$\\tfrac{9}{8} = 1 + \\tfrac{1}{8}$`}. The first is larger, so{' '}
            {`$\\tfrac{1}{A} > \\tfrac{1}{B}$`}. Flip the direction back: {`$A < B$`}, i.e.{' '}
            {`$B > A$`}. Same answer, different route.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does squaring both sides preserve the direction when both sides are positive, but
              possibly reverse it when one side is negative?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                For positives, the squaring function {`$f(x) = x^2$`} is increasing, a larger input
                gives a larger output. So {`$a > b > 0 \\implies a^2 > b^2$`}. For negatives,
                squaring is decreasing: {`$-3$`} is less than {`$-2$`}, but {`$(-3)^2 = 9$`} is more
                than {`$(-2)^2 = 4$`}. Squaring is order-preserving only when both sides have the
                same sign and you stay on one side of zero.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Linear Inequalities in One Variable</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The equation $2x + 3 = 9$ has exactly one solution. The inequality $2x + 3 < 9$ has how many solutions? What do they look like?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Infinitely many. They form a ray on the number line: all values of {`$x$`} less than
                3.
              </p>
            </details>
          </div>

          <p>
            A <strong>linear inequality in one variable</strong> has a whole range of values as its
            solution, not a single number. The moves to isolate the variable are the same moves you
            use on equations, governed by the inequality rules in the last section.
          </p>

          <h3>Interval Notation</h3>
          <p>
            <strong>Interval notation</strong> is a compact way to write solution sets. A
            parenthesis means the endpoint is excluded. A bracket means it is included. (The
            notation {`$(a, b)$`} now means "every {`$x$`} with {`$a < x < b$`}", not the ordered
            pair from the coordinate plane. Context tells you which is which.)
          </p>
          <ul className="lrn-list">
            <li>{`$(a, b)$: $a < x < b$ both endpoints out.`}</li>
            <li>{`$[a, b]$: $a \\leq x \\leq b$ both endpoints in.`}</li>
            <li>{`$[a, b)$: $a \\leq x < b$ left in, right out.`}</li>
            <li>{`$[a, \\infty)$: $x \\geq a$ unbounded right.`}</li>
            <li>{`$(-\\infty, b)$: $x < b$ unbounded left.`}</li>
          </ul>
          <p>Infinity is not a number, so it always gets a parenthesis, never a bracket.</p>

          <h3>Solving One-Variable Inequalities</h3>
          <p>
            <strong>Example.</strong> Solve {`$2x + 3 < 9$`}. Subtract 3 from both sides:{' '}
            {`$2x < 6$`}. Divide by 2 (positive, no flip): {`$x < 3$`}. Solution:{' '}
            {`$(-\\infty, 3)$`}.
          </p>
          <p>
            <strong>Example with sign flip.</strong> Solve {`$5 - 2x \\geq 11$`}. Subtract 5:{' '}
            {`$-2x \\geq 6$`}. Divide by {`$-2$`} and flip the direction (negative divisor):{' '}
            {`$x \\leq -3$`}. Solution: {`$(-\\infty, -3]$`}.
          </p>

          <div className="lrn-graph">
            <NumberLineInequalityVizGL />
          </div>

          <h3>Compound Inequalities</h3>
          <p>
            A <strong>compound inequality</strong> chains two signs at once, like{' '}
            {`$-1 < 2x + 3 \\leq 9$`}. This is shorthand for an <em>AND</em> of two simple
            inequalities, {`$-1 < 2x + 3$`} <em>and</em> {`$2x + 3 \\leq 9$`}, both must hold. Any
            reversible move applied to all three parts at once acts on both simple inequalities
            together. So you can operate on all three parts at once.
          </p>
          <p>
            <strong>Example.</strong> Solve {`$-1 < 2x + 3 \\leq 9$`}.
          </p>
          <ol className="lrn-list">
            <li>Subtract 3 from all parts: {`$-4 < 2x \\leq 6$`}.</li>
            <li>Divide all parts by 2: {`$-2 < x \\leq 3$`}.</li>
          </ol>
          <p>Solution: {`$(-2, 3]$`}.</p>
          <p>
            When the chain links inequalities in opposite directions, like {`$2 + x > 5 - 3x > 8$`}{' '}, split it into two separate inequalities and intersect the solutions. The "all at once"
            shortcut only works when every sign points the same way.
          </p>

          <h3>Linear-in-Disguise: Radical Inequalities</h3>
          <p>
            Some inequalities look harder than linear ones but solve in the same way. Treat the
            radical as the variable, isolate it, then unwrap it at the end.
          </p>
          <p>
            <strong>Example.</strong> Find every {`$x$`} with{' '}
            {`$7 < 2\\sqrt{x} - 3 < 10\\tfrac{1}{2}$`}.
          </p>
          <ol className="lrn-list">
            <li>{`Add 3 to all parts: $10 < 2\\sqrt{x} < 13\\tfrac{1}{2}$.`}</li>
            <li>{`Divide all parts by 2: $5 < \\sqrt{x} < \\tfrac{27}{4}$.`}</li>
            <li>
              {`$\\sqrt{x}$ is non-negative by definition, so all three parts are positive, squaring preserves the direction: $25 < x < \\tfrac{729}{16}$.`}
            </li>
          </ol>
          <p>
            Solution: {`$x \\in \\left(25,\\ \\tfrac{729}{16}\\right)$`}. Sanity check: at{' '}
            {`$x = 30.25$`}, {`$\\sqrt{x} = 5.5$`}, so {`$2\\sqrt{x} - 3 = 8$`}, which sits between
            7 and {`$10\\tfrac{1}{2}$`}.
          </p>

          <h3>Word Problem: Translate, Then Solve</h3>
          <p>
            <strong>Example.</strong> Three more than twice my number is less than 17, but at least{' '}
            {`$-1$`}. If my number is an integer, list every possible value.
          </p>
          <p>Let {`$n$`} be my number. The two conditions:</p>
          <ul className="lrn-list">
            <li>{`"Three more than twice $n$ is less than 17": $2n + 3 < 17$.`}</li>
            <li>{`"...but at least $-1$": $2n + 3 \\geq -1$.`}</li>
          </ul>
          <p>Combine into one chain and solve all at once (both signs point the same way):</p>
          <div className="lrn-eq">{`$$-1 \\leq 2n + 3 < 17 \\implies -4 \\leq 2n < 14 \\implies -2 \\leq n < 7.$$`}</div>
          <p>
            The integers in {`$[-2, 7)$`} are {`$-2, -1, 0, 1, 2, 3, 4, 5, 6$`}.
          </p>

          <p>
            <strong>Capstone.</strong> You can now solve any linear inequality in one variable, the
            same moves as a linear equation, with the sign-flip on multiply or divide by a negative.
          </p>
        </>,

        <>
          <h2>Graphing Inequalities in Two Variables</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The equation $y = 2x + 1$ is a line that divides the plane into two regions. Which side satisfies $y > 2x + 1$? Make a guess before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The region above the line. Points above the line have larger y-values than the line
                predicts.
              </p>
            </details>
          </div>

          <p>
            A <strong>two-variable linear inequality</strong> like {`$y > 2x + 1$`} has an entire
            region, a <strong>half-plane</strong>, as its solution. The boundary is the line{' '}
            {`$y = 2x + 1$`} where equality holds. The line splits the plane in two: for each
            {` $x$`}, the line gives one y-value, and points directly above have larger {`$y$`}{' '}
            while points directly below have smaller. No third option.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">STRICT ({`$<$, $>$`})</div>
              <p>Draw the boundary line dashed. Points on the line are not solutions.</p>
            </div>
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">NON-STRICT ({`$\\leq$, $\\geq$`})</div>
              <p>Draw the boundary line solid. Points on the line are solutions.</p>
            </div>
          </div>

          <h3>Shading the Correct Half-Plane</h3>
          <p>
            Inside one half-plane, the inequality is either true everywhere or false everywhere.
            Crossing the boundary is the only way the answer can change. So you only need to test
            one point.
          </p>
          <p>
            <strong>Method.</strong> Draw the boundary. Pick a test point off the line, the origin{' '}
            {`$(0, 0)$`} is easiest if it is not on the line. (If the boundary passes through the
            origin, pick any other off-line point such as {`$(1, 0)$`} or {`$(0, 1)$`}.) Plug it in.
            If the inequality is true at the test point, shade that side; otherwise, shade the
            other.
          </p>

          <p>
            <strong>Example.</strong> Graph {`$y > x + 2$`}. Draw {`$y = x + 2$`} dashed. Test{' '}
            {`$(0, 0)$`}: {`$0 > 2$`}? False. Shade the side <em>not</em> containing the origin
            above the line.
          </p>

          <div className="lrn-graph">
            <HalfPlaneViz />
          </div>

          <p>
            <strong>Example.</strong> Graph {`$y \\leq 2x - 1$`}. Draw {`$y = 2x - 1$`} solid. Test{' '}
            {`$(0, 0)$`}: {`$0 \\leq -1$`}? False. Shade below the line.
          </p>

          <h3>Intersection and Union of Two Inequalities</h3>
          <p>
            <strong>Intersection (AND).</strong> A point must satisfy both inequalities. Shade only
            where the two regions overlap.
          </p>
          <p>
            <strong>Union (OR).</strong> A point must satisfy at least one. Shade wherever either
            region applies.
          </p>
          <p>
            <strong>Example.</strong> Graph the intersection of {`$y > x$`} and {`$y < -x + 4$`}.
            The two lines meet at {`$(2, 2)$`}. Shade the wedge where both conditions hold at once, an unbounded wedge opening to the left, bounded above by {`$y = -x + 4$`} and below by{' '}
            {`$y = x$`}. A third constraint, say {`$x \\geq 0$`}, would close the wedge into a
            triangle.
          </p>

          <p>
            <strong>From wedge to polygon.</strong> Intersecting three or more half-planes typically
            yields a polygon, the boundaries cut each other into a closed region. That region is
            called the <strong>feasible region</strong>. The next section uses it to solve
            optimization problems.
          </p>
        </>,

        <>
          <h2>Optimization and Linear Programming</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You run a small business making two products. Each has a different profit and requires
              different amounts of resources. You have limited resources. Before reading on, how
              would you decide how many of each product to make?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You need to express the constraints as inequalities and the profit as a formula.
                Then find which combination of products maximizes profit without violating any
                constraint.
              </p>
            </details>
          </div>

          <p>
            <strong>Linear programming</strong> finds the largest or smallest value of a linear
            expression, given a set of linear inequality constraints. Four key words name the moving
            parts:
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Objective function:</strong> the quantity you maximize or minimize, like{' '}
              {`$P = 3x + 5y$`}.
            </li>
            <li>
              <strong>Constraints:</strong> the inequalities that limit the variables.
            </li>
            <li>
              <strong>Feasible region:</strong> the set of points satisfying every constraint.
            </li>
            <li>
              <strong>Corner points (vertices):</strong> the corners of the feasible region.
            </li>
          </ul>

          <h3>Procedure</h3>
          <ol className="lrn-list">
            <li>Translate the words into a system of linear inequalities and an objective.</li>
            <li>Graph the feasible region, the intersection of all half-planes.</li>
            <li>Find every corner point by solving pairs of boundary lines.</li>
            <li>Evaluate the objective at each corner. Pick the largest or smallest.</li>
          </ol>

          <p>
            <strong>Why corners?</strong> Work a concrete example first, then read the rule off the
            answer.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Maximize {`$P = 3x + 5y$`} with constraints {`$x \\geq 0$`}, {`$y \\geq 0$`},{' '}
                {`$x + y \\leq 8$`}, {`$x + 2y \\leq 12$`}.
              </p>
              <ol className="lrn-list">
                <li>
                  Corner points: {`$(0,0)$`}, {`$(8,0)$`}, {`$(0,6)$`}, and {`$(4,4)$`}, the last
                  is the intersection of {`$x + y = 8$`} and {`$x + 2y = 12$`} (subtract the first
                  from the second to get {`$y = 4$`}, then {`$x = 4$`}).
                </li>
                <li>
                  Evaluate {`$P$`}: 0, 24, 30, <strong>32</strong>.
                </li>
                <li>
                  Maximum is {`$P = 32$`} at the corner {`$(4, 4)$`}. Try a non-corner point inside
                  the region: at {`$(3, 3)$`}, inside because {`$3 + 3 = 6 \\leq 8$`} and{' '}
                  {`$3 + 2(3) = 9 \\leq 12$`}, {`$P = 24$`}, strictly smaller. The corner wins.
                </li>
              </ol>
            </div>
          </div>

          <div className="lrn-insight">
            <span className="lrn-insight-label">CORNER-POINT THEOREM</span>
            <p>
              When the feasible region is bounded and the constraints are non-strict, the maximum
              and minimum of a linear objective function each occur at a corner point of the region.
            </p>
            <p>
              <strong>Why.</strong> Level sets of {`$P = ax + by$`} are parallel lines, every point
              on one line gives the same value of {`$P$`}, and lines for larger values sit parallel
              to the smaller ones. Slide a level set across the feasible region in the direction of
              increasing {`$P$`}. The last level set that still touches the region must touch at a
              vertex, because a non-vertex contact point would leave room for the level set to slide
              further and still stay inside.
            </p>
          </div>
          {/* verified: corner-point theorem proof via parallel level sets — planetmath.org/cornerpointtheorem; Chvátal "Linear Programming" */}

          <h3>Bounded and Unbounded Feasible Regions</h3>
          <p>
            The theorem above needs the word <strong>bounded</strong>. A region is{' '}
            <strong>bounded</strong> when a large enough circle can enclose it. A region that runs
            off to infinity is <strong>unbounded</strong>.
          </p>
          <p>
            The difference matters. A bounded region has both a highest and a lowest objective
            value, each at a corner. An unbounded region can be missing one of them.
          </p>
          <p>
            <strong>Example.</strong> The constraints {`$x \\geq 0$`}, {`$y \\geq 0$`},{' '}
            {`$x + y \\geq 4$`} give an unbounded region, it stretches up and to the right forever.
            Minimize {`$P = 2x + 3y$`}: the smallest value sits at the corner {`$(4, 0)$`}, where{' '}
            {`$P = 8$`}. But {`$P$`} has no maximum, pushing {`$x$`} and {`$y$`} outward makes{' '}
            {`$P$`} grow without limit.
          </p>
          {/* verified: Stewart §10.9 defines bounded (fits in a circle) vs unbounded region */}
          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">CHECK BOUNDEDNESS FIRST</span>
            <p>
              Before you hunt for a maximum, check that the feasible region is bounded. An unbounded
              region may have no maximum to find.
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Maximize {`$P = 5x + 8y$`} subject to {`$2x + y \\leq 10$`}, {`$x + 3y \\leq 12$`},{' '}
                {`$x, y \\geq 0$`}. Find all four corner points by intersecting pairs of boundary
                lines. (The interior corner is the intersection of the two non-axis lines.)
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Maximize {`$Z = 4x + 6y$`} subject to {`$x \\geq 0$`}, {`$y \\geq 0$`},{' '}
                {`$x + y \\leq 7$`}. Three corners, no interior intersection, easier than the
                previous problem.
              </p>
            </div>
          </div>

          <p>
            <strong>Capstone.</strong> You can now solve any 2-variable linear programming problem
            with a bounded feasible region: list corners, evaluate the objective at each, take the
            extreme value.
          </p>

          <div className="lrn-graph">
            <FeasibleRegionViz />
          </div>

          <h3>A Smaller Word Problem: Dog Shelter Quota</h3>
          <p>
            <strong>Example.</strong> Georgia starts a dog shelter. She already has 34 male dogs and
            13 female dogs. From now on, she only accepts dogs in male-female pairs. She wants at
            least 60% of her dogs to be male. What is the largest number of pairs she can take?
          </p>
          <p>
            Let {`$n$`} be the number of pairs she accepts. After accepting {`$n$`} pairs, she has{' '}
            {`$34 + n$`} male dogs and {`$13 + n$`} female dogs, for {`$47 + 2n$`} total. Writing
            "males are at least 60% of total" as an inequality:
          </p>
          <div className="lrn-eq">{`$$\\frac{34 + n}{47 + 2n} \\geq \\frac{60}{100}.$$`}</div>
          <p>
            Multiply both sides by {`$100(47 + 2n)$`}, a positive quantity, since {`$n \\geq 0$`},
            so by the multiply-by-positive rule the direction is preserved:{' '}
            {`$100(34 + n) \\geq 60(47 + 2n)$`}, so {`$3400 + 100n \\geq 2820 + 120n$`}. Collect:{' '}
            {`$580 \\geq 20n$`}, so {`$n \\leq 29$`}.
          </p>
          <p>
            The inequality says she <em>cannot</em> exceed 29 pairs. Check that 29 actually works:
            at {`$n = 29$`}, she has 63 males out of 105 total, and {`$\\frac{63}{105} = 0.6$`}. So
            29 is feasible. Answer: 29 pairs.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">UPPER BOUND VS. ATTAINABLE MAX</span>
            <p>
              {`Finding $n \\leq 29$ proves an upper bound. You must also show the bound is reachable.`}{' '}
              Skipping the second step is a common mistake, a bound you cannot reach is not the
              maximum.
            </p>
          </div>

          <h3>A Full Word Problem: Farmer Fred</h3>
          <p>
            Farmer Fred has 120 acres. Each acre of beans needs 5 pounds of fertilizer and 2 pounds
            of pesticide; each acre of corn needs 7 pounds of fertilizer and 4 pounds of pesticide.
            He has 660 pounds of fertilizer and 340 pounds of pesticide. Beans earn \$100 per acre,
            corn earns \$120 per acre. How many acres of each should he plant to maximize revenue?
          </p>
          <p>
            Let {`$x$`} = acres of beans, {`$y$`} = acres of corn. Translating each limit into an
            inequality:
          </p>
          <ul className="lrn-list">
            <li>{`Acres: $x + y \\leq 120$.`}</li>
            <li>{`Fertilizer: $5x + 7y \\leq 660$.`}</li>
            <li>{`Pesticide: $2x + 4y \\leq 340$.`}</li>
            <li>{`Nonneg: $x \\geq 0$, $y \\geq 0$.`}</li>
          </ul>
          <p>
            Objective: maximize {`$R = 100x + 120y$`}. Five boundary lines give up to ten
            intersection points; only the feasible ones, those satisfying every constraint, are
            corners of the region.
          </p>

          <p>
            <strong>Find each corner.</strong> Walk through every pair of boundary lines:
          </p>
          <ul className="lrn-list">
            <li>{`$x = 0$ with $y = 0$: $(0, 0)$. Feasible.`}</li>
            <li>
              {`$y = 0$ with acres: $x = 120$, so $(120, 0)$. Check pesticide: $2(120) = 240 \\leq 340$ ✓. Check fertilizer: $5(120) = 600 \\leq 660$ ✓. Feasible.`}
            </li>
            <li>
              {`$x = 0$ with fertilizer: $7y = 660$, so $(0, 660/7) \\approx (0, 94.3)$. Check acres: $94.3 \\leq 120$ ✓. Check pesticide: $4(94.3) = 377 > 340$ ✗. Infeasible.`}
            </li>
            <li>
              {`$x = 0$ with pesticide: $4y = 340$, so $(0, 85)$. Check fertilizer: $7(85) = 595 \\leq 660$ ✓. Check acres: $85 \\leq 120$ ✓. Feasible.`}
            </li>
            <li>
              {`Acres with fertilizer: solve $x + y = 120$ and $5x + 7y = 660$. From the first, $x = 120 - y$; substitute: $5(120 - y) + 7y = 660$, so $2y = 60$, $y = 30$, $x = 90$. Point $(90, 30)$. Check pesticide: $2(90) + 4(30) = 300 \\leq 340$ ✓. Feasible.`}
            </li>
            <li>
              {`Acres with pesticide: solve $x + y = 120$ and $2x + 4y = 340$. From the first, $x = 120 - y$; substitute: $2(120 - y) + 4y = 340$, so $2y = 100$, $y = 50$, $x = 70$. Point $(70, 50)$. Check fertilizer: $5(70) + 7(50) = 700 > 660$ ✗. Infeasible.`}
            </li>
            <li>
              {`Fertilizer with pesticide: solve $5x + 7y = 660$ and $2x + 4y = 340$. Multiply the second by $\\tfrac{5}{2}$: $5x + 10y = 850$. Subtract: $3y = 190$, $y = 190/3 \\approx 63.3$, $x \\approx 43.3$. Check acres: $43.3 + 63.3 = 106.6 \\leq 120$ ✓. Feasible.`}
            </li>
          </ul>

          <p>
            <strong>Evaluate {`$R = 100x + 120y$`} at every feasible corner:</strong>
          </p>
          <ul className="lrn-list">
            <li>{`$(0, 0)$: $R = 0$.`}</li>
            <li>{`$(120, 0)$: $R = 12{,}000$.`}</li>
            <li>{`$(0, 85)$: $R = 10{,}200$.`}</li>
            <li>{`$(90, 30)$: $R = 9{,}000 + 3{,}600 = 12{,}600$.`}</li>
            <li>{`$(\\tfrac{130}{3}, \\tfrac{190}{3}) \\approx (43.3, 63.3)$: $R = 100 \\cdot \\tfrac{130}{3} + 120 \\cdot \\tfrac{190}{3} = \\tfrac{35800}{3} \\approx 11{,}933$.`}</li>
          </ul>

          <p>
            <strong>Maximum:</strong> {`$R = \\$12{,}600$`} at {`$(x, y) = (90, 30)$`}, 90 acres of
            beans and 30 acres of corn. The <strong>binding</strong> constraints, the ones used in
            full at the optimum, are acres and fertilizer; pesticide has 40 pounds left over.
          </p>
          {/* verified: arithmetic checked computationally — see audit Fixes Applied */}

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">STRICT INEQUALITIES BREAK THE THEOREM</span>
            <p>
              If any constraint is strict (uses {`$<$`} or {`$>$`}), the corner points are not in
              the feasible region. You can get as close as you want to that corner value, but you
              never actually hit it. Real-world problems almost always use {`$\\leq$`} and{' '}
              {`$\\geq$`}, but watch for this trap.
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Solve $-4x + 5 > 13$ and write the solution in interval notation.`,
        a: `Subtract 5: $-4x > 8$. Divide by $-4$ and flip: $x < -2$. Solution: $(-\\infty, -2)$.`
      },
      {
        q: `What are the four quadrants of the Cartesian plane and in which direction are they numbered?`,
        a: `Quadrant I: top right ($x > 0$, $y > 0$). Quadrant II: top left. Quadrant III: bottom left. Quadrant IV: bottom right. Numbered counterclockwise from top right.`
      },
      {
        q: `Given $p > q > 0$, is $\\frac{1}{p}$ greater than or less than $\\frac{1}{q}$? Explain why.`,
        a: `$\\frac{1}{p} < \\frac{1}{q}$. A larger positive denominator produces a smaller fraction. Reciprocal inequality: if $a > b > 0$, then $\\frac{1}{a} < \\frac{1}{b}$.`
      },
      {
        q: `Find the distance between $(3, 1)$ and $(7, 4)$.`,
        a: `$d = \\sqrt{(7-3)^2 + (4-1)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.`
      },
      {
        q: `Solve $-1 \\leq 3x + 2 < 8$ and write the answer in interval notation.`,
        a: `Subtract 2 from all parts: $-3 \\leq 3x < 6$. Divide by 3: $-1 \\leq x < 2$. Solution: $[-1, 2)$.`
      },
      {
        q: `A line passes through $(0, 4)$ and $(6, 0)$. A second line passes through $(0, 4)$ and $(3, 7)$. Do these lines form a right angle at $(0, 4)$?`,
        a: `Slope of first: $\\frac{0-4}{6-0} = -\\frac{2}{3}$. Slope of second: $\\frac{7-4}{3-0} = 1$. Product: $-\\frac{2}{3} \\neq -1$. Not perpendicular.`
      },
      {
        q: `Why does multiplying both sides of an inequality by a negative number reverse the direction?`,
        a: `If $a > b$, then $a - b > 0$. Multiply by $k < 0$: $k(a-b) < 0$, so $ka < kb$. Check: $3 > 1$, multiply by $-1$: $-3 < -1$.`
      },
      {
        q: `Find the midpoint of the segment from $(-2, 5)$ to $(4, 1)$.`,
        a: `$M = \\left(\\frac{-2+4}{2}, \\frac{5+1}{2}\\right) = (1, 3)$.`
      },
      {
        q: `When you graph $y < 3x + 1$, should the boundary line be dashed or solid? Why?`,
        a: `Dashed. The strict inequality $<$ means the boundary is not part of the solution. A dashed line signals points on the line do not satisfy the condition.`
      },
      {
        q: `The corner-point theorem says the maximum or minimum of an objective function occurs at a corner point. Why?`,
        a: `Level sets of a linear objective $P = ax + by$ are parallel lines. Slide the level set in the direction of increasing $P$; the last position that still touches the feasible region must touch at a vertex, because at a non-vertex contact point the level set could slide further into the region without leaving it.`
      },
      {
        q: `Are $2x - 3y = 6$ and $4x - 6y = 9$ parallel, perpendicular, or identical?`,
        a: `Slope of first: $\\frac{2}{3}$. Slope of second: $\\frac{4}{6} = \\frac{2}{3}$. Same slope. Y-intercepts: $-2$ vs $-\\frac{3}{2}$. Different. They are parallel.`
      },
      {
        q: `What is the slope of a horizontal line? What is the slope of a vertical line?`,
        a: `Horizontal: slope 0, equation $y = k$. Vertical: slope undefined (division by zero), equation $x = k$.`
      },
      {
        q: `A company makes chairs (x) and tables (y). Profit: $P = 5x + 8y$. Constraints: $x \\geq 0$, $y \\geq 0$, $2x + y \\leq 10$, $x + 3y \\leq 12$. Find the corner that maximizes profit.`,
        a: `Intersection of $2x + y = 10$ and $x + 3y = 12$: solve to get $x = 3.6$, $y = 2.8$. Check $(3.6, 2.8)$ is feasible: $2(3.6) + 2.8 = 10 \\leq 10$ ✓, $3.6 + 3(2.8) = 12 \\leq 12$ ✓. Reachable. Evaluate $P$ at all corners: $(0,0) \\to 0$; $(5,0) \\to 25$; $(0,4) \\to 32$; $(3.6, 2.8) \\to 40.4$. Maximum: $P = 40.4$ at $(3.6, 2.8)$.`
      },
      {
        q: `Write an inequality for "all numbers greater than $-3$ and at most 7" in interval notation.`,
        a: `$-3 < x \\leq 7$. Interval notation: $(-3, 7]$. Open circle at $-3$, closed circle at 7.`
      },
      {
        q: `Predict what happens to the solution set of $kx > 6$ when $k$ changes from positive to negative.`,
        a: `$k > 0$: divide (no flip), $x > \\frac{6}{k}$ right half-line. $k < 0$: divide and flip, $x < \\frac{6}{k}$ left half-line.`
      },
      {
        q: `Find the equation of the line perpendicular to $y = 4x + 2$ that passes through $(4, 3)$.`,
        a: `Perpendicular slope: $-\\frac{1}{4}$. Point-slope: $y - 3 = -\\frac{1}{4}(x - 4)$, so $y = -\\frac{1}{4}x + 4$.`
      },
      {
        q: `You are given $a > b$. A classmate claims $a - c > b - c$ is always true. Is the classmate correct?`,
        a: `Yes. Subtracting $c$ from both sides is adding $-c$ to both sides. Adding the same quantity never changes the direction.`
      },
      {
        q: `Derive why the distance formula has a square root.`,
        a: `Two points form a right triangle with horizontal leg $|x_2 - x_1|$, vertical leg $|y_2 - y_1|$, and hypotenuse $d$. Pythagoras gives $d^2 = (x_2-x_1)^2 + (y_2-y_1)^2$; take the square root for $d$.`
      },
      {
        q: `Predict: if you graph $y > 2x + 3$ and $y > 2x - 1$ together, what does the combined solution look like?`,
        a: `Both lines have slope 2, they are parallel. The binding constraint is $y > 2x + 3$ (higher line). Any point above it is automatically above $y = 2x - 1$. The intersection is $y > 2x + 3$.`
      },
      {
        q: `Convert $y = \\frac{3}{4}x - 2$ to standard form with integer coefficients.`,
        a: `Multiply by 4: $4y = 3x - 8$. Rearrange: $3x - 4y = 8$.`
      },
      {
        q: `Are $(2, 3)$, $(4, 7)$, and $(6, 11)$ collinear?`,
        a: `Slope from $(2,3)$ to $(4,7)$: $\\frac{4}{2} = 2$. Slope from $(4,7)$ to $(6,11)$: $\\frac{4}{2} = 2$. Equal slopes. Collinear.`
      },
      {
        q: `Why does the trivial inequality $x^2 \\geq 0$ hold? What does it imply about $(a-b)^2$?`,
        a: `Squaring any real number gives a non-negative result. For $(a-b)^2 \\geq 0$: expand to $a^2 - 2ab + b^2 \\geq 0$, giving $a^2 + b^2 \\geq 2ab$.`
      },
      {
        q: `A line has the equation $5x + 2y = 20$. Find its slope, x-intercept, and y-intercept.`,
        a: `Slope: $m = -\\frac{5}{2}$. x-intercept: $x = \\frac{20}{5} = 4$. y-intercept: $y = \\frac{20}{2} = 10$.`
      },
      {
        q: `Explain why two distinct lines with the same slope can never intersect.`,
        a: `Setting $mx + b_1 = mx + b_2$ gives $b_1 = b_2$, a contradiction. No value of $x$ satisfies this, so no intersection exists.`
      },
      {
        q: `Given $x > 4$ and $y > 2$, what is the smallest lower bound you can guarantee for $x + y$?`,
        a: `Add the inequalities: $x + y > 4 + 2 = 6$. You cannot guarantee $x + y > 7$ without more information.`
      },
      {
        q: `Feasible region with corners $(0,0)$, $(6,0)$, $(4,3)$, $(0,5)$. Objective: $Z = 3x + 4y$. Find the maximum and minimum.`,
        a: `$(0,0) \\to 0$; $(6,0) \\to 18$; $(4,3) \\to 24$; $(0,5) \\to 20$. Maximum: $Z = 24$ at $(4,3)$. Minimum: $Z = 0$ at $(0,0)$.`
      },
      {
        q: `Predict: what happens to the feasible region if you tighten $x + y \\leq 10$ to $x + y \\leq 6$?`,
        a: `The region shrinks. Corner points on or beyond the old boundary become infeasible. The optimal value can only stay the same or get worse.`
      },
      {
        q: `Give a counterexample: "If $a > b$ and $c > d$, then $a - c > b - d$."`,
        a: `$a=5, b=3, c=4, d=1$. Claim: $5-4 > 3-1$, i.e., $1 > 2$. False. Subtracting $c > d$ reverses to adding $-c < -d$, which gives inequalities in opposite directions.`
      },
      {
        q: `Write the equation of the line through $(3, -2)$ and $(7, 6)$ in slope-intercept and standard form.`,
        a: `Slope: $m = \\frac{8}{4} = 2$. Point-slope: $y + 2 = 2(x-3) \\implies y = 2x - 8$. Standard: $2x - y = 8$.`
      },
      {
        q: `The system $y = -\\frac{1}{2}x + 4$ and $y = -\\frac{1}{2}x - 1$ has how many solutions?`,
        a: `No solutions. Both have slope $-\\frac{1}{2}$, so they are parallel. Setting equal: $4 = -1$, a contradiction.`
      },
      {
        q: `How is the feasible region different from the solution to a single two-variable inequality?`,
        a: `A single inequality gives one half-plane. A feasible region is the intersection of multiple half-planes, a polygon where all constraints hold simultaneously.`
      },
      {
        q: `Solve $y = x + 1$ and $y = 3x - 5$ algebraically. Identify the intersection point.`,
        a: `Set equal: $x + 1 = 3x - 5 \\implies 2x = 6 \\implies x = 3$. Then $y = 4$. Solution: $(3, 4)$.`
      },
      {
        q: `The slope formula gives $\\frac{0}{0}$ when two identical points are used. What does this tell you?`,
        a: `Two identical points do not determine a unique line, every line through that point passes through both, so no single slope is picked out. $\\frac{0}{0}$ does not pick out any single value (it is what mathematicians call **indeterminate**), different from $\\frac{n}{0}$ for nonzero $n$, which has no value at all and flags a vertical line. The formula assumes two distinct points.`
      },
      {
        q: `A candle is 20 cm tall and burns down 2.5 cm every hour. Write a linear model for its height $h$ after $t$ hours, then find when it reaches 5 cm.`,
        a: `The rate is the slope: $m = -2.5$. The starting height is the y-intercept: $b = 20$. Model: $h = -2.5t + 20$. Set $h = 5$: $5 = -2.5t + 20$, so $2.5t = 15$ and $t = 6$. The candle reaches 5 cm after 6 hours.`
      },
      {
        q: `The region $x \\geq 0$, $y \\geq 0$, $x + 2y \\geq 6$ is the feasible region for maximizing $P = 4x + 5y$. Is the region bounded, and does a maximum exist?`,
        a: `Unbounded, it stretches to infinity, so no circle can enclose it. Pushing $x$ and $y$ outward makes $P$ grow without limit, so there is no maximum. A minimum does exist, at a corner of the edge $x + 2y = 6$: at $(0, 3)$, $P = 15$.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Graphing Lines and Linear Inequalities',
      sections: [
        <>
          <h2>Distance and Midpoint</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Distance formula</div>
            <div className="lrn-definition-desc">
              <p>{`$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$`}</p>
              <p>{`Example: distance from $(1, 2)$ to $(4, 6)$ is $\\sqrt{9 + 16} = 5$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Midpoint formula</div>
            <div className="lrn-definition-desc">
              <p>{`$M = \\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Absolute value</div>
            <div className="lrn-definition-desc">
              <p>{`$|a|$ is the distance from $a$ to $0$ on the number line.`}</p>
            </div>
          </div>

          <h2>Slope</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Slope (rise over run)</div>
            <div className="lrn-definition-desc">
              <p>{`$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$`}</p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Slope type</th>
                <th>Value</th>
                <th>Equation form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Positive</td>
                <td>{`$m > 0$`}</td>
                <td>rises left to right</td>
              </tr>
              <tr>
                <td>Negative</td>
                <td>{`$m < 0$`}</td>
                <td>falls left to right</td>
              </tr>
              <tr>
                <td>Zero</td>
                <td>{`$m = 0$`}</td>
                <td>{`$y = k$ (horizontal)`}</td>
              </tr>
              <tr>
                <td>Undefined</td>
                <td>{`$x_2 - x_1 = 0$`}</td>
                <td>{`$x = k$ (vertical)`}</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Slope as rate of change</div>
            <div className="lrn-definition-desc">
              <p>{`For $y = mx + b$, the slope $m$ is the constant rate of change and $b$ is the starting value at $x = 0$.`}</p>
              <p>{`Example: $V = 5t + 200$ fills a pool at 5 gal/min from 200 gal.`}</p>
            </div>
          </div>

          <h2>Forms of a Linear Equation</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Slope-intercept form</div>
            <div className="lrn-definition-desc">
              <p>{`$y = mx + b$`}</p>
              <p>Use: graph a line quickly when you know slope and y-intercept.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Point-slope form</div>
            <div className="lrn-definition-desc">
              <p>{`$y - y_1 = m(x - x_1)$`}</p>
              <p>Use: write a line equation when you know one point and the slope.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Standard form</div>
            <div className="lrn-definition-desc">
              <p>
                {`$Ax + By = C$`}, with {`$A$`}, {`$B$`}, {`$C$`} integers, no common factor, and{' '}
                {`$A \\geq 0$`}.
              </p>
              <p>
                Use: find both intercepts quickly, handle vertical lines, or compare lines in a
                system.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Slope from standard form</div>
            <div className="lrn-definition-desc">
              <p>{`$m = -\\dfrac{A}{B}$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">x-intercept / y-intercept from standard form</div>
            <div className="lrn-definition-desc">
              <p>{`$x$-intercept: $x = \\dfrac{C}{A}$ (set $y = 0$)`}</p>
              <p>{`$y$-intercept: $y = \\dfrac{C}{B}$ (set $x = 0$)`}</p>
              <p>
                Both formulas need the matching coefficient {`$\\neq 0$`}. If {`$A = 0$`} the line
                is horizontal and has no x-intercept. If {`$B = 0$`} it is vertical and has no
                y-intercept.
              </p>
            </div>
          </div>
        </>,
        <>
          <h2>Parallel and Perpendicular Lines</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Parallel condition</div>
            <div className="lrn-definition-desc">
              <p>{`$m_1 = m_2,\\ b_1 \\neq b_2$`}</p>
              <p>Use: determine whether two lines never intersect.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Perpendicular condition</div>
            <div className="lrn-definition-desc">
              <p>{`$m_1 \\cdot m_2 = -1$`}</p>
              <p>Use: determine whether two lines meet at a right angle.</p>
              <p>
                <em>Edge case:</em> a horizontal line ({`$m = 0$`}) is perpendicular to a vertical
                line (slope undefined). The product rule does not apply directly; verify by
                inspection.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Relationship</th>
                <th>Slope condition</th>
                <th>Intersection</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parallel</td>
                <td>{`$m_1 = m_2$, $b_1 \\neq b_2$`}</td>
                <td>None</td>
              </tr>
              <tr>
                <td>Perpendicular</td>
                <td>{`$m_1 m_2 = -1$`}</td>
                <td>One point (right angle)</td>
              </tr>
              <tr>
                <td>Same line</td>
                <td>{`$m_1 = m_2$, $b_1 = b_2$`}</td>
                <td>Infinitely many</td>
              </tr>
              <tr>
                <td>Intersecting</td>
                <td>{`$m_1 \\neq m_2$`}</td>
                <td>Exactly one point</td>
              </tr>
            </tbody>
          </table>

          <h2>Systems of Linear Equations</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Case</th>
                <th>Slopes</th>
                <th>Intercepts</th>
                <th>Solutions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parallel</td>
                <td>{`$m_1 = m_2$`}</td>
                <td>{`$b_1 \\neq b_2$`}</td>
                <td>0</td>
              </tr>
              <tr>
                <td>One solution</td>
                <td>{`$m_1 \\neq m_2$`}</td>
                <td>any</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Same line</td>
                <td>{`$m_1 = m_2$`}</td>
                <td>{`$b_1 = b_2$`}</td>
                <td>{`$\\infty$`}</td>
              </tr>
            </tbody>
          </table>
        </>,
        <>
          <h2>Inequality Rules</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Transitive property</div>
            <div className="lrn-definition-desc">
              <p>{`If $a > b$ and $b > c$, then $a > c$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Adding inequalities</div>
            <div className="lrn-definition-desc">
              <p>{`If $a > b$ and $c > d$, then $a + c > b + d$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Trivial inequality</div>
            <div className="lrn-definition-desc">
              <p>{`$x^2 \\geq 0$ for all real $x$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Reciprocal inequality</div>
            <div className="lrn-definition-desc">
              <p>{`If $a > b > 0$, then $\\dfrac{1}{a} < \\dfrac{1}{b}$.`}</p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Operation</th>
                <th>Direction change?</th>
                <th>Valid?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Add same quantity</td>
                <td>No</td>
                <td>Always</td>
              </tr>
              <tr>
                <td>Subtract same quantity</td>
                <td>No</td>
                <td>Always</td>
              </tr>
              <tr>
                <td>Multiply by positive</td>
                <td>No</td>
                <td>Always</td>
              </tr>
              <tr>
                <td>Divide by positive</td>
                <td>No</td>
                <td>Always</td>
              </tr>
              <tr>
                <td>Multiply by negative</td>
                <td>Yes (flip)</td>
                <td>Always</td>
              </tr>
              <tr>
                <td>Divide by negative</td>
                <td>Yes (flip)</td>
                <td>Always</td>
              </tr>
              <tr>
                <td>Add two inequalities</td>
                <td>No</td>
                <td>Always</td>
              </tr>
              <tr>
                <td>Subtract two inequalities</td>
                <td>N/A</td>
                <td>Not always valid</td>
              </tr>
              <tr>
                <td>Square both sides</td>
                <td>No</td>
                <td>Only when both sides positive</td>
              </tr>
              <tr>
                <td>Take reciprocals</td>
                <td>Yes (flip)</td>
                <td>Only when both sides share a sign</td>
              </tr>
            </tbody>
          </table>

          <h2>Interval Notation</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Notation</th>
                <th>Meaning</th>
                <th>Endpoint status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$(a, b)$`}</td>
                <td>{`$a < x < b$`}</td>
                <td>both excluded</td>
              </tr>
              <tr>
                <td>{`$[a, b]$`}</td>
                <td>{`$a \\leq x \\leq b$`}</td>
                <td>both included</td>
              </tr>
              <tr>
                <td>{`$[a, b)$`}</td>
                <td>{`$a \\leq x < b$`}</td>
                <td>left in, right out</td>
              </tr>
              <tr>
                <td>{`$(a, b]$`}</td>
                <td>{`$a < x \\leq b$`}</td>
                <td>left out, right in</td>
              </tr>
              <tr>
                <td>{`$[a, \\infty)$`}</td>
                <td>{`$x \\geq a$`}</td>
                <td>left in, unbounded right</td>
              </tr>
              <tr>
                <td>{`$(-\\infty, b)$`}</td>
                <td>{`$x < b$`}</td>
                <td>unbounded left, right out</td>
              </tr>
            </tbody>
          </table>
        </>,
        <>
          <h2>Two-Variable Inequalities</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Inequality type</th>
                <th>Boundary line</th>
                <th>Shading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Strict ($<$ or $>$)`}</td>
                <td>Dashed</td>
                <td>Half-plane not on boundary</td>
              </tr>
              <tr>
                <td>{`Non-strict ($\\leq$ or $\\geq$)`}</td>
                <td>Solid</td>
                <td>Half-plane including boundary</td>
              </tr>
            </tbody>
          </table>
          <p>
            Method: draw boundary line, pick test point {`$(0,0)$`} (if not on line), shade the side
            that satisfies the inequality.
          </p>

          <h2>Linear Programming</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Objective function</div>
            <div className="lrn-definition-desc">
              <p>{`$P = ax + by$`} (maximize or minimize).</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Corner-point theorem</div>
            <div className="lrn-definition-desc">
              <p>
                The maximum or minimum of a linear objective function over a feasible region occurs
                at a corner point.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Bounded vs. unbounded region</div>
            <div className="lrn-definition-desc">
              <p>{`Bounded: a circle can enclose it, both a max and a min exist at corners.`}</p>
              <p>{`Unbounded: it runs to infinity, a max or a min may not exist.`}</p>
            </div>
          </div>
          <ol className="lrn-list">
            <li>Define variables and write the objective function.</li>
            <li>Write all constraints as inequalities.</li>
            <li>Graph the feasible region (intersection of all half-planes).</li>
            <li>Identify all corner points (solve pairs of boundary lines).</li>
            <li>Evaluate the objective function at every corner point.</li>
            <li>Report the corner with the highest (or lowest) value.</li>
          </ol>

          <h2>Quadrant Reference</h2>
          <p>Quadrants I–IV go counterclockwise from top right; see Learning §1 for sign rules.</p>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
  }

  return config
}

export default function GraphingLinesAndLinearInequalities() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
