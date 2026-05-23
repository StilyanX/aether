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

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have two cities on a map. Before reading on, how would you describe the exact
              location of each city using numbers?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You need two numbers: how far east-west and how far north-south. That is exactly
                what an ordered pair does.
              </p>
            </details>
          </div>

          <p>
            A <strong>number line</strong> is a straight line where every real number has exactly
            one point. Numbers grow to the right and shrink to the left. Zero sits at the center.
            The arrows on each end mean the line keeps going forever.
          </p>
          <p>
            The <strong>absolute value</strong> of a number is its distance from zero. Write it with
            vertical bars: {`$|{-}5| = 5$`}. Distance is never negative, so absolute value never is.
          </p>
          <p>
            An <strong>ordered pair</strong> is two numbers written as {`$(x, y)$`}. The first
            number says how far left or right. The second says how far up or down.
          </p>
          <p>
            The <strong>Cartesian plane</strong> is two number lines crossing at right angles. The
            horizontal one is the <strong>x-axis</strong>. The vertical one is the{' '}
            <strong>y-axis</strong>. They meet at the <strong>origin</strong>. The origin is the
            point {`$(0, 0)$`} zero steps right, zero steps up.
          </p>

          <div className="lrn-graph">
            <CartesianPlaneViz />
          </div>

          <h3>The Four Quadrants</h3>
          <p>
            The two axes split the plane into four regions called <strong>quadrants</strong>. They
            are numbered I, II, III, IV starting at the top right and going counterclockwise.
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
          <p>The straight-line distance between two points comes from the Pythagorean theorem.</p>
          <p>
            <strong>Derivation.</strong> Take two points {`$P_1 = (x_1, y_1)$`} and{' '}
            {`$P_2 = (x_2, y_2)$`}. Connect them and complete the right triangle with one horizontal
            leg and one vertical leg. The horizontal leg has length {`$|x_2 - x_1|$`}. The vertical
            leg has length {`$|y_2 - y_1|$`}. The Pythagorean theorem gives:
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
            The <strong>midpoint</strong> is the point exactly halfway between two endpoints.
            Average the x-coordinates and average the y-coordinates separately.
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$M = \\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)$$`}</div>
          <p>
            The average of two numbers sits exactly halfway between them. Averaging each coordinate
            puts the result at the same distance from both endpoints.
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
            {`$(\\frac{1}{2}, -5)$`} is half the move from {`$(0, -6)$`} to {`$(1, -4)$`} same
            direction, half the distance. So {`$(\\frac{1}{2}, -5)$`} lands on the same line.
          </p>

          <div className="lrn-insight">
            <span className="lrn-insight-label">EVERY LINEAR EQUATION IS A LINE</span>
            <p>
              An equation of the form {`$Ax + By = C$`}, where {`$A$`} and {`$B$`} are not both
              zero, has a straight-line graph. This is why such equations are called{' '}
              <strong>linear</strong>. Special cases include {`$y = mx + b$`} (slope-intercept
              form), {`$y = k$`} (horizontal), and {`$x = k$`} (vertical).
            </p>
          </div>

          <h3>Graphing by Finding Two Points</h3>
          <p>Two points fix a line. Find two solutions of the equation and connect them.</p>
          <p>
            <strong>Example.</strong> Graph {`$y = 2x + 3$`}. Pick {`$x = 0$`}: {`$y = 3$`}, so{' '}
            {`$(0, 3)$`} is on the line. Pick {`$x = 2$`}: {`$y = 7$`}, so {`$(2, 7)$`} is also on
            the line. Plot both points and draw the line through them. Setting {`$x = 0$`} first is
            easiest: the {`$2x$`} term vanishes and {`$y$`} drops out directly.
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

          <h3>x-Intercept and y-Intercept</h3>
          <p>
            The <strong>y-intercept</strong> is where the line crosses the y-axis. Every point on
            the y-axis has {`$x = 0$`}, so set {`$x = 0$`} and solve for {`$y$`}.
          </p>
          <p>
            The <strong>x-intercept</strong> is where the line crosses the x-axis. Every point on
            the x-axis has {`$y = 0$`}, so set {`$y = 0$`} and solve for {`$x$`}.
          </p>
          <p>
            <strong>Example.</strong> Intercepts of {`$3x + 2y = 12$`}:
          </p>
          <ul className="lrn-list">
            <li>{`y-intercept: set $x = 0$: $2y = 12$, so $y = 6$. Point: $(0, 6)$.`}</li>
            <li>{`x-intercept: set $y = 0$: $3x = 12$, so $x = 4$. Point: $(4, 0)$.`}</li>
          </ul>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">INTERCEPT SHORTCUT</span>
            <p>
              The two intercepts are usually the two easiest points to find on a line. Plot{' '}
              {`$(x\\text{-int}, 0)$`} and {`$(0, y\\text{-int})$`}, draw the line through them, and
              you are done no other points needed (except a third one to catch errors).
            </p>
          </div>
        </>,

        <>
          <h2>Slope</h2>

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
            by the horizontal change between any two points on the line:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$m = \\frac{y_2 - y_1}{x_2 - x_1}.$$`}</div>
          <p>
            Slope is a ratio, not just a rise. The same rise over a longer run gives a gentler line,
            so both numbers matter.
          </p>
          <p>
            Swapping which point you call {`$(x_1, y_1)$`} flips the sign of both top and bottom.
            The negatives cancel. The slope stays the same.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">WATCH THE ORDER</span>
            <p>
              The y-differences and x-differences must use the same order:{' '}
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
              <p>{`$m = 0$`}. Perfectly horizontal. Equation: $y = k$.</p>
            </div>
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">UNDEFINED SLOPE</div>
              <p>Perfectly vertical. Division by zero. Equation: {`$x = k$`}.</p>
            </div>
          </div>

          <div className="lrn-graph">
            <SlopeTypesViz />
          </div>

          <p>
            Division by zero is called "undefined" because the result has no single value. As the
            bottom of the ratio shrinks toward zero the ratio grows without bound, so no number
            fits.
          </p>

          <div className="lrn-insight">
            <span className="lrn-insight-label">SLOPE RANKS STEEPNESS</span>
            <p>
              A slope of 4 is steeper than a slope of {`$\\tfrac{1}{4}$`}. A slope close to zero,
              like {`$\\tfrac{1}{10}$`}, is nearly horizontal. A very large positive slope is nearly
              vertical. The same scale works for negatives: {`$-4$`} is steeper than{' '}
              {`$-\\tfrac{1}{4}$`}.
            </p>
          </div>

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
            The most useful equation form for a line uses the slope and the y-intercept directly:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$y = mx + b.$$`}</div>
          <p>
            Here {`$m$`} is the slope and {`$b$`} is the y-coordinate of the y-intercept. To see
            why: setting {`$x = 0$`} gives {`$y = b$`}, so the line crosses the y-axis at{' '}
            {`$(0, b)$`}. Increasing {`$x$`} by 1 increases {`$y$`} by {`$m$`}, matching the
            definition of slope.
          </p>
          <p>
            <strong>Example.</strong> The line {`$y = 2x + 3$`} has slope 2 and y-intercept{' '}
            {`$(0, 3)$`}. Move 1 right and 2 up from {`$(0, 3)$`} to land on {`$(1, 5)$`}, the next
            point on the line.
          </p>
          <p>
            <strong>Rate example.</strong> A taxi charges a flat \$3 fee plus \$2 per mile. The flat
            fee is the cost at zero miles, so it is the y-intercept: {`$b = 3$`}. The rate per mile
            is the slope: {`$m = 2$`}. The cost equation is {`$y = 2x + 3$`}. At 7 miles:{' '}
            {`$y = 2(7) + 3 = 17$`}, so the ride costs \$17.
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
            Pick the form that matches what you know. Slope and y-intercept? Use slope-intercept.
            Slope and one point? Use point-slope. Two points? Find the slope first, then use
            point-slope.
          </p>

          <h3>Slope-Intercept Form</h3>
          <p>
            With slope {`$m$`} and y-intercept {`$b$`}, the equation is {`$y = mx + b$`}. Example:
            slope 4, y-intercept {`$-1$`} gives {`$y = 4x - 1$`}.
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
            A horizontal line keeps {`$y$`} fixed. A vertical line keeps {`$x$`} fixed.
          </p>
          <p>
            <strong>Example.</strong> Through {`$(3, -5)$`}:
          </p>
          <ul className="lrn-list">
            <li>
              Horizontal: slope 0, y fixed at {`$-5$`}. Equation: {`$y = -5$`}.
            </li>
            <li>Vertical: x fixed at 3, slope undefined. Equation: {`$x = 3$`}.</li>
          </ul>
          <p>
            A vertical line cannot be written as {`$y = mx + b$`} because no finite slope works.
            Standard form handles it: {`$1 \\cdot x + 0 \\cdot y = 3$`}, i.e. {`$x = 3$`}.
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
        </>,

        <>
          <h2>Standard Form</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The equation $3x + 4y = 12$ has no $m$ or $b$ in it. How would you find where this line crosses each axis?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Set $x = 0$ for the y-intercept: $y = 3$. Set $y = 0$ for the x-intercept: $x = 4$.`}</p>
            </details>
          </div>

          <p>
            <strong>Standard form</strong> writes a line as
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$Ax + By = C,$$`}</div>
          <p>
            where {`$A$`}, {`$B$`}, {`$C$`} are integers with no common factor and {`$A \\geq 0$`}.
            Slope-intercept form is best for graphing. Standard form is best for reading intercepts
            and for comparing two lines in a system.
          </p>
          <p>
            Standard form covers vertical lines too. {`$x = 3$`} fits as{' '}
            {`$1 \\cdot x + 0 \\cdot y = 3$`}, so {`$B = 0$`} is allowed. Slope-intercept form
            cannot handle that case.
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
            <strong>Method 2 slope as instructions.</strong> An x-intercept has {`$y = 0$`}.
            Starting from {`$(10, 15)$`}, the line must drop 15 units in {`$y$`} to reach the
            x-axis. For slope 3, the change in {`$x$`} satisfies {`$\\tfrac{-15}{\\Delta x} = 3$`},
            so {`$\\Delta x = -5$`} and the x-intercept is {`$(5, 0)$`}. For slope 5,{' '}
            {`$\\Delta x = -3$`}, giving {`$(7, 0)$`}. Distance: 2. Same answer, less algebra.
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
            describe the same line not two parallel lines.
          </p>
          <div className="lrn-eq">{`$$m_1 = m_2, \\quad b_1 \\neq b_2.$$`}</div>
          <p>
            <strong>Example.</strong> {`$y = 2x + 3$`} and {`$y = 2x - 5$`} both have slope 2 and
            different y-intercepts, so they are parallel.
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
            a quarter turn gives "up 1, left 3" that is, "right 3, down 1" a slope of{' '}
            {`$-\\tfrac{1}{3}$`}. The run and the rise swap, and one of them changes sign.
          </p>
          <p>
            Horizontal and vertical lines are perpendicular, but the product rule does not apply to
            them directly, since vertical lines have no defined slope.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">PARALLEL</div>
              <p>{`$m_1 = m_2$. No intersection.`}</p>
            </div>
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">PERPENDICULAR</div>
              <p>{`$m_1 m_2 = -1$. Right-angle intersection.`}</p>
            </div>
          </div>

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
          <h2>Systems of Two Linear Equations</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two lines are drawn on the same coordinate plane. How many times can they possibly
              cross? List all cases before reading on.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Exactly once (different slopes), zero times (parallel), or infinitely many times
                (same line). Those are the only three cases.
              </p>
            </details>
          </div>

          <p>
            A <strong>system of two linear equations</strong> is two line equations taken together.
            The <strong>solution</strong> is the point where both equations are true at once. On a
            graph, that point is where the two lines cross.
          </p>

          <div className="lrn-insight">
            <span className="lrn-insight-label">THREE CASES, NO OTHERS</span>
            <ul className="lrn-list">
              <li>
                <strong>One solution.</strong> Slopes differ. The lines cross once.
              </li>
              <li>
                <strong>No solution.</strong> Same slope, different y-intercepts. The lines are
                parallel and never meet.
              </li>
              <li>
                <strong>Infinitely many solutions.</strong> Same slope, same y-intercept. The two
                equations describe the same line.
              </li>
            </ul>
          </div>

          <p>
            Two distinct lines cannot meet at two different points. Two points already fix a line,
            so sharing two points would mean sharing the whole line.
          </p>

          <p>
            <strong>Example one solution.</strong> Solve {`$y = 2x + 1$`} and {`$y = -x + 4$`}. At
            the crossing, both expressions for {`$y$`} are equal:{' '}
            {`$2x + 1 = -x + 4 \\implies 3x = 3 \\implies x = 1$`}. Then {`$y = 3$`}. The solution
            is {`$(1, 3)$`}.
          </p>

          <div className="lrn-graph">
            <SystemsViz />
          </div>

          <p>
            <strong>Example no solution.</strong> {`$y = 3x + 2$`} and {`$y = 3x - 5$`} both have
            slope 3 with different y-intercepts. They are parallel.
          </p>
          <p>
            <strong>Example infinitely many.</strong> {`$y = 2x + 1$`} and {`$2y = 4x + 2$`}. Divide
            the second by 2 to get {`$y = 2x + 1$`}. The two equations are identical, so every point
            on the line is a solution.
          </p>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">GRAPH VS. ALGEBRA</span>
            <p>
              Graphing both lines and reading off the crossing point is a useful sanity check. But
              if the intersection sits between grid lines, the graph cannot tell you the exact
              coordinates. For exact answers, solve the system algebraically set the two expressions
              for {`$y$`} equal, or eliminate one variable by adding multiples of the two equations.
            </p>
          </div>
        </>,

        <>
          <h2>Appendix: Parameterization of Line Segments</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You want to describe every point on the segment from $A = (1, 2)$ to $B = (4, 6)$ using a single formula. How might one number $t$ let you move smoothly from $A$ to $B$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`At $t = 0$ you are at $A$. At $t = 1$ you are at $B$. Between those values, $t$ tells you what fraction of the way from $A$ to $B$ you have traveled.`}</p>
            </details>
          </div>

          <p>
            A <strong>parameterization</strong> describes a path using one variable {`$t$`} that
            controls position along the path. The segment from {`$A$`} to {`$B$`} is:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$P = A + t(B - A), \\quad t \\in [0, 1].$$`}</div>
          <p>
            {`$B - A$`} is the full displacement from {`$A$`} to {`$B$`}. Multiplying it by {`$t$`}{' '}
            scales that displacement by the fraction {`$t$`}. Adding the result to {`$A$`} moves you
            that fraction of the way toward {`$B$`}.
          </p>

          <ul className="lrn-list">
            <li>{`$t = 0$: $P = A$ (start).`}</li>
            <li>{`$t = 1$: $P = B$ (end).`}</li>
            <li>{`$t = 0.5$: $P = \\frac{A + B}{2}$, the midpoint.`}</li>
          </ul>

          <p>
            <strong>Example.</strong> Parameterize the segment from {`$A = (1, 2)$`} to{' '}
            {`$B = (5, 6)$`}: {`$P = (1 + 4t,\\ 2 + 4t)$`}. At {`$t = 0.5$`}, {`$P = (3, 4)$`}.
          </p>
          <p>
            Letting {`$t$`} leave {`$[0, 1]$`} extends the formula beyond the segment. For{' '}
            {`$t > 1$`}, the point {`$P$`} passes {`$B$`} and keeps moving along the same line. For
            {` `}
            {`$t < 0$`}, {`$P$`} sits on the line on the far side of {`$A$`}, opposite {`$B$`}.
          </p>
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
            number line, the boundary is an open circle when excluded and a filled circle when
            included.
          </p>
          <p>
            <strong>Example.</strong> {`$x < 4$`}: open circle at 4, shade left. {`$x \\geq -2$`}:
            filled circle at {`$-2$`}, shade right.
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
            equations with one big trap. Multiplying or dividing by a negative flips the direction
            of the inequality. Everything else leaves it alone.
          </p>

          <h3>Adding and Subtracting the Same Quantity</h3>
          <p>
            If {`$a > b$`}, then {`$a + c > b + c$`} and {`$a - c > b - c$`} for any real {`$c$`}.
            Adding the same number to both sides shifts them equally on the number line. Their order
            does not change.
          </p>

          <h3>Adding Two Inequalities</h3>
          <p>{`If $a > b$ and $c > d$, then $a + c > b + d$.`}</p>
          <p>
            <strong>Proof.</strong> {`$a - b > 0$`} and {`$c - d > 0$`}. The sum of two positives is
            positive: {`$(a + c) - (b + d) > 0$`}. Example: {`$x > 3$`} and {`$y > 5$`} give{' '}
            {`$x + y > 8$`}.
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

          <h3>Multiplying by a Negative Number Sign Flip</h3>
          <p>
            If {`$a > b$`} and {`$k < 0$`}, then {`$ka < kb$`}. The direction reverses.
          </p>
          <p>
            <strong>Proof.</strong> {`$a - b > 0$`}. Multiply by {`$k < 0$`}: the product is
            negative, so {`$k(a-b) < 0$`}, i.e. {`$ka - kb < 0$`}, so {`$ka < kb$`}.
          </p>
          <p>
            Example: {`$x > 2$`}, multiply by {`$-3$`} to get {`$-3x < -6$`}.
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
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>{`Solve $-3x + 1 > 7$. First, subtract 1 from both sides.`}</li>
                <li>Then divide by {`$-3$`} remember to flip the direction.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Solve $-5x + 2 \\geq 12$ and write the solution in interval notation.`}</p>
            </div>
          </div>

          <h3>Powers and Roots of Both Sides</h3>
          <p>
            If {`$x > y > 0$`} and {`$a$`} is any positive real number, then {`$x^a > y^a$`} and{' '}
            {`$\\sqrt[a]{x} > \\sqrt[a]{y}$`}. Raising or rooting both sides preserves the direction
            as long as both sides are positive and the exponent is positive.
          </p>
          <p>
            <strong>Counterexample with a negative side.</strong> {`$2 > -3$`}, but {`$2^2 = 4$`}{' '}
            and {`$(-3)^2 = 9$`}, so squaring reverses the order. Always check that both sides are
            positive before raising to a power.
          </p>
          <p>
            For negative exponents, the order flips even with both sides positive: if{' '}
            {`$x > y > 0$`}, then {`$x^{-1} < y^{-1}$`} (the reciprocal rule below).
          </p>

          <h3>The Trivial Inequality</h3>
          <p>
            For any real number {`$x$`}, {`$x^2 \\geq 0$`}. A square is never negative. This simple
            fact is the seed of many proofs.
          </p>
          <p>
            <strong>Example.</strong> Use {`$(a - b)^2 \\geq 0$`} to prove {`$a^2 + b^2 \\geq 2ab$`}
            . Expand: {`$a^2 - 2ab + b^2 \\geq 0$`}. Add {`$2ab$`} to both sides:{' '}
            {`$a^2 + b^2 \\geq 2ab$`}.
          </p>

          <h3>Reciprocal Inequality</h3>
          <p>
            If {`$x$`} and {`$y$`} have the same sign and {`$x > y$`}, then{' '}
            {`$\\dfrac{1}{x} < \\dfrac{1}{y}$`}. Taking reciprocals reverses the direction. Two
            cases:
          </p>
          <ul className="lrn-list">
            <li>{`Both positive: $5 > 3 > 0$ gives $\\frac{1}{5} < \\frac{1}{3}$.`}</li>
            <li>{`Both negative: $-2 > -5$ gives $\\frac{1}{-2} < \\frac{1}{-5}$, i.e. $-\\frac{1}{2} < -\\frac{1}{5}$.`}</li>
          </ul>
          <p>
            <strong>Mixed signs break the rule.</strong> {`$2 > -3$`}, but {`$\\tfrac{1}{2} = 0.5$`}{' '}
            is greater than {`$-\\tfrac{1}{3} \\approx -0.33$`}, not less. The clean flip only
            happens when both numbers sit on the same side of zero.
          </p>
        </>,

        <>
          <h2>Which Is Greater?</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You need to compare {`$\\sqrt{2}$`} and {`$\\sqrt[3]{3}$`} with no calculator. What is
              one move you could make that turns both numbers into something easier to compare,
              without changing which one is bigger?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Raise both to the sixth power. Both sides are positive, so direction is preserved:{' '}
                {`$(\\sqrt{2})^6 = 8$`} and {`$(\\sqrt[3]{3})^6 = 9$`}. So{' '}
                {`$\\sqrt{2} < \\sqrt[3]{3}$`}.
              </p>
            </details>
          </div>

          <p>
            The inequality rules from the last section have a second use. They let you compare two
            ugly numbers radicals, big powers, fractions close to 1 without a calculator. The trick
            is to keep applying reversible, direction-preserving moves until the two sides are
            simple enough to compare directly.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">DIRECTION-PRESERVING MOVES</span>
            <p>
              Squaring or raising to a positive power preserves direction <em>only</em> when both
              sides are positive. Taking reciprocals reverses direction <em>only</em> when both
              sides share a sign. Always check the sign of each side before you make a move.
            </p>
          </div>

          <h3>Strategy 1 Raise Both Sides to a Power</h3>
          <p>
            <strong>Example.</strong> Compare {`$\\sqrt{3\\sqrt{6\\sqrt{2}}}$`} and{' '}
            {`$\\sqrt{6\\sqrt{2\\sqrt{3}}}$`}. Both sides are positive. Square both:
          </p>
          <div className="lrn-eq">{`$$3\\sqrt{6\\sqrt{2}} \\ \\ ?\\ \\ 6\\sqrt{2\\sqrt{3}}.$$`}</div>
          <p>Still messy. Square again:</p>
          <div className="lrn-eq">{`$$3^2 \\cdot 6\\sqrt{2} \\ \\ ?\\ \\ 6^2 \\cdot 2\\sqrt{3}.$$`}</div>
          <p>Square one more time:</p>
          <div className="lrn-eq">{`$$3^4 \\cdot 6^2 \\cdot 2 \\ \\ ?\\ \\ 6^4 \\cdot 2^2 \\cdot 3.$$`}</div>
          <p>
            Both sides have a factor of {`$3 \\cdot 6^2 \\cdot 2$`}. Divide it out (positive
            quantity, no flip):
          </p>
          <div className="lrn-eq">{`$$3^3 \\ \\ ?\\ \\ 6^2 \\cdot 2 \\implies 27 \\ \\ ?\\ \\ 72.$$`}</div>
          <p>
            {`$27 < 72$`}. Every step was reversible, so{' '}
            {`$\\sqrt{3\\sqrt{6\\sqrt{2}}} < \\sqrt{6\\sqrt{2\\sqrt{3}}}$`}.
          </p>

          <h3>Strategy 2 Take a Common Root</h3>
          <p>
            <strong>Example.</strong> Order {`$2^{300}$`}, {`$3^{200}$`}, {`$4^{125}$`},{' '}
            {`$5^{100}$`} from smallest to largest. All four are positive. Take the 25th root of
            each (positive root, direction preserved):
          </p>
          <div className="lrn-eq">{`$$2^{12},\\ 3^{8},\\ 4^{5},\\ 5^{4}.$$`}</div>
          <p>Compute each:</p>
          <ul className="lrn-list">
            <li>{`$2^{12} = 4096$`}</li>
            <li>{`$3^{8} = 6561$`}</li>
            <li>{`$4^{5} = 1024$`}</li>
            <li>{`$5^{4} = 625$`}</li>
          </ul>
          <p>Order: {`$625 < 1024 < 4096 < 6561$`}. So:</p>
          <div className="lrn-eq">{`$$5^{100} < 4^{125} < 2^{300} < 3^{200}.$$`}</div>

          <h3>Strategy 3 Compare to a Common Reference</h3>
          <p>
            <strong>Example.</strong> Which is larger, {`$A = \\dfrac{987654321}{987654322}$`} or{' '}
            {`$B = \\dfrac{98765432}{98765433}$`}? Both are just below 1. Rewrite each as 1 minus a
            tiny piece:
          </p>
          <div className="lrn-eq">{`$$A = 1 - \\frac{1}{987654322}, \\qquad B = 1 - \\frac{1}{98765433}.$$`}</div>
          <p>
            {`$\\dfrac{1}{987654322}$`} is smaller than {`$\\dfrac{1}{98765433}$`} because the
            denominator on the left is bigger. Subtracting a smaller piece from 1 leaves a larger
            result. So {`$A > B$`}.
          </p>

          <h3>Strategy 4 Take Reciprocals</h3>
          <p>
            Same {`$A$`} and {`$B$`}, second route. Both are positive, so taking reciprocals flips
            the direction:
          </p>
          <div className="lrn-eq">{`$$\\frac{1}{A} = 1 + \\frac{1}{987654321}, \\qquad \\frac{1}{B} = 1 + \\frac{1}{98765432}.$$`}</div>
          <p>
            {`$\\dfrac{1}{987654321} < \\dfrac{1}{98765432}$`}, so{' '}
            {`$\\dfrac{1}{A} < \\dfrac{1}{B}$`}. Flip the direction back: {`$A > B$`}. Same answer,
            different route.
          </p>

          <div className="lrn-insight">
            <span className="lrn-insight-label">CORE IDEA</span>
            <p>
              Pick reversible moves that simplify both sides at once. Squaring, taking roots,
              subtracting from 1, taking reciprocals each is a tool. Keep track of which moves
              preserve direction and which flip it.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does squaring both sides preserve the direction when both sides are positive, but
              possibly reverse it when one side is negative?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                For positives, the squaring function {`$f(x) = x^2$`} is increasing: a larger input
                gives a larger output. So {`$a > b > 0 \\implies a^2 > b^2$`}. For negatives,
                squaring is decreasing: {`$-3$`} is less than {`$-2$`}, but {`$(-3)^2 = 9$`} is more
                than {`$(-2)^2 = 4$`}. Squaring is monotonic only when both sides have the same sign
                and you stay on one side of zero.
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
            solution, not a single number. Solve it the same way you solve a linear equation, with
            one extra rule: any time you multiply or divide by a negative, flip the inequality sign.
          </p>

          <h3>Interval Notation</h3>
          <p>
            <strong>Interval notation</strong> is a compact way to write solution sets. A
            parenthesis means the endpoint is excluded. A bracket means it is included.
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
            <strong>Example with sign flip.</strong> Solve {`$-3x + 1 \\geq 7$`}. Subtract 1:{' '}
            {`$-3x \\geq 6$`}. Divide by {`$-3$`} and flip: {`$x \\leq -2$`}. Solution:{' '}
            {`$(-\\infty, -2]$`}.
          </p>

          <div className="lrn-graph">
            <NumberLineInequalityVizGL />
          </div>

          <h3>Compound Inequalities</h3>
          <p>
            A <strong>compound inequality</strong> chains two signs at once, like{' '}
            {`$-1 < 2x + 3 \\leq 9$`}. Perform the same operation on all three parts at the same
            time.
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
            When the chain links inequalities in opposite directions (like {`$2 + x > 5 - 3x > 8$`}
            ), split it into two separate inequalities and intersect the solutions. The "all at
            once" shortcut only works when every sign points the same way.
          </p>

          <h3>Linear-in-Disguise: Radical Inequalities</h3>
          <p>
            Some inequalities look harder than linear ones but solve in the same way. The trick is
            to treat the radical as the variable, then unwrap it at the end.
          </p>
          <p>
            <strong>Example.</strong> Find every {`$x$`} with{' '}
            {`$7 < 2\\sqrt{x} - 3 < 10\\tfrac{1}{2}$`}.
          </p>
          <ol className="lrn-list">
            <li>{`Add 3 to all parts: $10 < 2\\sqrt{x} < 13\\tfrac{1}{2}$.`}</li>
            <li>{`Divide all parts by 2: $5 < \\sqrt{x} < \\tfrac{27}{4}$.`}</li>
            <li>
              {`All three parts are positive, so squaring preserves direction: $25 < x < \\tfrac{729}{16}$.`}
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
            A <strong>two-variable linear inequality</strong> like {`$y > 2x + 1$`} is satisfied by
            an entire region a <strong>half-plane</strong>. The boundary is the line{' '}
            {`$y = 2x + 1$`} where equality holds. The line splits the plane in two: points above
            give larger y-values than the line predicts, points below give smaller. No third option.
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
            <strong>Method.</strong> Draw the boundary. Pick a test point off the line the origin{' '}
            {`$(0, 0)$`} is easiest if it is not on the line. Plug it in. If the inequality is true
            at the test point, shade that side; otherwise, shade the other.
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
            Shade the wedge where both conditions hold at once a triangular region opening to the
            left, bounded by the two lines.
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
            expression, given a set of linear inequality constraints. Four key words:
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

          <div className="lrn-insight">
            <span className="lrn-insight-label">CORNER-POINT THEOREM</span>
            <p>
              When the feasible region is bounded and the constraints are non-strict, the maximum
              and minimum of a linear objective function each occur at a corner point of the region.
            </p>
            <p>
              <strong>Why.</strong> A linear function over a polygon is a flat sheet tilted in one
              direction. The highest and lowest points of a tilted sheet over a polygon sit at
              vertices, never in the middle of an edge or in the interior.
            </p>
          </div>

          <h3>Procedure</h3>
          <ol className="lrn-list">
            <li>Translate the words into a system of linear inequalities and an objective.</li>
            <li>Graph the feasible region (intersection of all half-planes).</li>
            <li>Find every corner point by solving pairs of boundary lines.</li>
            <li>Evaluate the objective at each corner. Pick the largest or smallest.</li>
          </ol>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Maximize {`$P = 3x + 5y$`} with constraints {`$x \\geq 0$`}, {`$y \\geq 0$`},{' '}
                {`$x + y \\leq 8$`}, {`$x + 2y \\leq 12$`}.
              </p>
              <ol className="lrn-list">
                <li>
                  Corner points: {`$(0,0)$`}, {`$(8,0)$`}, {`$(0,6)$`}, {`$(4,4)$`} (intersection of{' '}
                  {`$x + y = 8$`} and {`$x + 2y = 12$`}).
                </li>
                <li>
                  Evaluate {`$P$`}: 0, 24, 30, <strong>32</strong>.
                </li>
                <li>
                  Maximum is {`$P = 32$`} at {`$(4, 4)$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>
                  Chairs ({`$x$`}) earn \$5, tables ({`$y$`}) earn \$8. Write the objective.
                  Constraints: {`$2x + y \\leq 10$`}, {`$x + 3y \\leq 12$`}, {`$x, y \\geq 0$`}.
                </li>
                <li>Find all corner points by solving pairs of boundary lines.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Maximize {`$Z = 4x + 6y$`} subject to {`$x \\geq 0$`}, {`$y \\geq 0$`},{' '}
                {`$x + y \\leq 7$`}, {`$2x + y \\leq 10$`}. Find the optimal corner point.
              </p>
            </div>
          </div>

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
            Let {`$d$`} be the number of pairs she accepts. After accepting {`$d$`} pairs, she has{' '}
            {`$34 + d$`} male dogs and {`$13 + d$`} female dogs, for {`$47 + 2d$`} total. Writing
            "males are at least 60% of total" as an inequality:
          </p>
          <div className="lrn-eq">{`$$\\frac{34 + d}{47 + 2d} \\geq \\frac{60}{100}.$$`}</div>
          <p>
            Multiply both sides by {`$100(47 + 2d)$`} (positive, since {`$d \\geq 0$`}):{' '}
            {`$100(34 + d) \\geq 60(47 + 2d)$`}, so {`$3400 + 100d \\geq 2820 + 120d$`}. Collect:{' '}
            {`$580 \\geq 20d$`}, so {`$d \\leq 29$`}.
          </p>
          <p>
            The inequality says she <em>cannot</em> exceed 29 pairs. Check that 29 actually works:
            at {`$d = 29$`}, she has 63 males out of 105 total, and {`$\\frac{63}{105} = 0.6$`}. So
            29 is feasible. Answer: 29 pairs.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">UPPER BOUND VS. ATTAINABLE MAX</span>
            <p>
              {`Finding $d \\leq 29$ proves an upper bound. You must also show the bound is reachable.`}{' '}
              Skipping the second step is a classic mistake: a bound you cannot reach is not the
              maximum.
            </p>
          </div>

          <h3>A Full Word Problem: Farmer Fred</h3>
          <p>
            Farmer Fred has 120 acres. Each acre of corn needs 5 pounds of fertilizer and 2 pounds
            of pesticide; each acre of beans needs 7 pounds of fertilizer and 4 pounds of pesticide.
            He has 660 pounds of fertilizer and 340 pounds of pesticide. Corn earns \$120 per acre,
            beans earn \$100 per acre. How many acres of each should he plant to maximize revenue?
          </p>
          <p>
            Let {`$x$`} = acres of beans, {`$y$`} = acres of corn. Constraints:
          </p>
          <ul className="lrn-list">
            <li>{`Acres: $x + y \\leq 120$.`}</li>
            <li>{`Fertilizer: $7x + 5y \\leq 660$.`}</li>
            <li>{`Pesticide: $4x + 2y \\leq 340$.`}</li>
            <li>{`Nonneg: $x \\geq 0$, $y \\geq 0$.`}</li>
          </ul>
          <p>
            Objective: maximize {`$R = 100x + 120y$`}. Solve pairs of boundary lines to find
            corners, then evaluate {`$R$`} at each. The best corner turns out to be {`$(30, 90)$`}
            30 acres of beans, 90 acres of corn with revenue \$12,600.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">STRICT INEQUALITIES BREAK THE THEOREM</span>
            <p>
              If any constraint is strict (uses {`$<$`} or {`$>$`}), the corner points are not in
              the feasible region. The objective can get arbitrarily close to a corner value without
              ever reaching it. You have a supremum but no maximum. Real-world problems almost
              always use {`$\\leq$`} and {`$\\geq$`}, but watch for this trap.
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
        q: `The equation $y = 3x - 7$ passes through $(0, -7)$. A second line is parallel to it and passes through $(2, 1)$. What is the equation of the second line?`,
        a: `Parallel means same slope $m = 3$. Point-slope: $y - 1 = 3(x - 2)$, so $y = 3x - 5$.`
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
        a: `The objective function is linear it forms flat planes over the feasible region. The highest or lowest value of a flat surface over a polygon occurs at a vertex, never strictly inside.`
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
        a: `Intersection of $2x + y = 10$ and $x + 3y = 12$: solve to get $x = 3.6$, $y = 2.8$. Evaluate $P$ at all corners: $(0,0) \\to 0$; $(5,0) \\to 25$; $(0,4) \\to 32$; $(3.6, 2.8) \\to 40.4$. Maximum: $P = 40.4$ at $(3.6, 2.8)$.`
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
        a: `Place $P_1$ and $P_2$. Draw a right triangle: horizontal leg $= x_2 - x_1$, vertical leg $= y_2 - y_1$, hypotenuse $= d$. Pythagorean theorem: $d^2 = (x_2-x_1)^2 + (y_2-y_1)^2$. Taking the square root: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.`
      },
      {
        q: `Predict: if you graph $y > 2x + 3$ and $y > 2x - 1$ together, what does the combined solution look like?`,
        a: `Both lines have slope 2 they are parallel. The binding constraint is $y > 2x + 3$ (higher line). Any point above it is automatically above $y = 2x - 1$. The intersection is $y > 2x + 3$.`
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
        q: `What is the parameterization of the segment from $A = (2, 3)$ to $B = (8, 7)$? What point does $t = 0.25$ give?`,
        a: `$P = (2 + 6t,\\ 3 + 4t)$. At $t = 0.25$: $P = (3.5, 4)$ one-quarter of the way from $A$ to $B$.`
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
        a: `A single inequality gives one half-plane. A feasible region is the intersection of multiple half-planes a polygon where all constraints hold simultaneously.`
      },
      {
        q: `Solve $y = x + 1$ and $y = 3x - 5$ algebraically. Identify the intersection point.`,
        a: `Set equal: $x + 1 = 3x - 5 \\implies 2x = 6 \\implies x = 3$. Then $y = 4$. Solution: $(3, 4)$.`
      },
      {
        q: `The slope formula gives $\\frac{0}{0}$ when two identical points are used. What does this tell you?`,
        a: `Two identical points do not determine a unique line. The slope is undefined. This is a degenerate case: the formula requires two distinct points.`
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
                <td>division by zero</td>
                <td>{`$x = k$ (vertical)`}</td>
              </tr>
            </tbody>
          </table>

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
              <p>{`$Ax + By = C$`}</p>
              <p>Use: find both intercepts quickly or compare lines in a system.</p>
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
                <td>Parallel (inconsistent)</td>
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
                <td>Same line (dependent)</td>
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
                at a corner point of the feasible region.
              </p>
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

          <h2>Parameterization of Line Segments</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Segment parameterization</div>
            <div className="lrn-definition-desc">
              <p>{`$P = A + t(B - A),\\quad t \\in [0, 1]$`}</p>
              <p>
                Use: describe all points on the segment from {`$A$`} to {`$B$`}, or find a point at
                fraction {`$t$`} of the way.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>{`$t$ value`}</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$t = 0$`}</td>
                <td>point {`$A$`} (start)</td>
              </tr>
              <tr>
                <td>{`$t = 0.5$`}</td>
                <td>midpoint of {`$AB$`}</td>
              </tr>
              <tr>
                <td>{`$t = 1$`}</td>
                <td>point {`$B$`} (end)</td>
              </tr>
            </tbody>
          </table>

          <h2>Quadrant Reference</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Quadrant</th>
                <th>x-sign</th>
                <th>y-sign</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>positive</td>
                <td>positive</td>
                <td>top right</td>
              </tr>
              <tr>
                <td>II</td>
                <td>negative</td>
                <td>positive</td>
                <td>top left</td>
              </tr>
              <tr>
                <td>III</td>
                <td>negative</td>
                <td>negative</td>
                <td>bottom left</td>
              </tr>
              <tr>
                <td>IV</td>
                <td>positive</td>
                <td>negative</td>
                <td>bottom right</td>
              </tr>
            </tbody>
          </table>
          <p>Quadrants are numbered counterclockwise starting from top right.</p>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
  }

  return config
}

export default function GraphingLinesAndLinearInequalities() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
