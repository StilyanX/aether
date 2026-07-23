import 'katex/dist/katex.min.css'
import { useMemo } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import {
  CircleViz,
  HorizontalParabolaViz,
  InteractiveOptimizationViz,
  InteractiveVertexViz,
  NumberLineSignViz,
  ParabolaBasicViz,
  ParabolaCoeffViz,
  QuadInequalityViz,
  TrivialInequalityViz
} from '../../../../components/viz'
// Visualization Components

// Config

function useConfig() {
  return useMemo(
    () => ({
      cssPrefix: 'qfp',
      documentTitle: 'Quadratic Functions and Polynomial Inequalities - AETHER',
      learning: {
        groupTitle: 'Coordinate Geometry and Functions',
        category: 'Algebra',
        title: 'Quadratic Functions and Polynomial Inequalities',
        subtitle:
          'Graphing parabolas and circles, solving inequalities, and optimizing quadratics.',
        sections: [
          // SECTION 0: Parabolas
          <>
            <span className="lrn-label">Part 1</span>
            <h2>Parabolas</h2>
            <p>A parabola is the curve you get when you graph a quadratic equation.</p>
            <p>
              Every parabola has an <strong>axis of symmetry</strong> a line that splits it into two
              mirror halves. The point where the axis meets the parabola is the{' '}
              <strong>vertex</strong>.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Parabola</span>
              <div className="lrn-definition-desc">
                <p>
                  The graph of {`$y = ax^2 + bx + c$`} where {`$a \\neq 0$`}.
                </p>
                <p>
                  It is symmetric about a vertical line called the <strong>axis of symmetry</strong>
                  .
                </p>
                <p>
                  The vertex is the lowest point when {`$a > 0$`} and the highest point when{' '}
                  {`$a < 0$`}.
                </p>
              </div>
            </div>

            <div className="lrn-graph">
              <ParabolaBasicViz />
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                For any number {`$n$`}, {`$(-n)^2 = n^2$`}. So {`$(n, n^2)$`} and {`$(-n, n^2)$`}{' '}
                are both on the graph, and the y-axis is their mirror.
              </p>
            </div>

            <h3>Effect of the Coefficient {`$a$`}</h3>

            <p>
              The number {`$a$`} in {`$y = ax^2$`} controls two things: direction and width. If
              {`$a > 0$`} the parabola opens upward; if {`$a < 0$`} it opens downward. The larger{' '}
              {`$|a|$`} is, the faster y grows for a given x, so the curve looks narrower. A small{' '}
              {`$|a|$`} makes the curve wider.
            </p>

            <div className="lrn-graph">
              <ParabolaCoeffViz />
            </div>

            <h3>Standard Form {`$y = a(x - h)^2 + k$`}</h3>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Standard Form (Vertical Axis)</span>
              <div className="lrn-definition-desc">
                <p>{`$$y = a(x - h)^2 + k$$`}</p>
                <ul className="lrn-list">
                  <li>Vertex: {`$(h, k)$`}</li>
                  <li>Axis of symmetry: {`$x = h$`}</li>
                  <li>
                    {`$a > 0$`}: opens up; {`$a < 0$`}: opens down
                  </li>
                </ul>
              </div>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Warning</span>
              <p>The sign of {`$h$`} is tricky.</p>
              <p>
                In {`$y = -3(x + 2)^2 + 7$`}, the vertex is {`$(-2, 7)$`}, not {`$(2, 7)$`}.
              </p>
              <p>
                The standard form has {`$(x - h)$`} inside, so when you see {`$(x + 2)$`}, that
                means {`$h = -2$`}.
              </p>
            </div>

            <div className="lrn-graph">
              <InteractiveVertexViz />
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does {`$h$`} shift the vertex sideways and {`$k$`} shift it up or down?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  When {`$a > 0$`}, {`$a(x - h)^2$`} is at its smallest exactly when {`$x = h$`},
                  and at that input the whole expression equals {`$k$`}. So {`$(h, k)$`} is the
                  vertex {`$h$`} fixes its x-coordinate, {`$k$`} its y-coordinate.
                </p>
              </details>
            </div>

            <h3>Completing the Square to Find the Vertex</h3>

            <p>
              To go from {`$y = ax^2 + bx + c$`} to standard form, complete the square rewrite so
              the x-terms form a perfect square plus a constant.
            </p>

            <p>
              <strong>Worked example:</strong> Graph {`$y = x^2 - 7x + 6$`} and find its vertex.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Group the x-terms</span>
                <p className="lrn-step-content">{`$$y = (x^2 - 7x) + 6$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Find the number to complete the square</span>
                <p className="lrn-step-content">{`Half of $-7$ is $-\\tfrac{7}{2}$. Square it: $\\bigl(-\\tfrac{7}{2}\\bigr)^2 = \\tfrac{49}{4}$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Add and subtract inside</span>
                <p className="lrn-step-content">{`$$y = \\left(x^2 - 7x + \\tfrac{49}{4}\\right) - \\tfrac{49}{4} + 6$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Factor and simplify</span>
                <p className="lrn-step-content">{`$$y = \\left(x - \\tfrac{7}{2}\\right)^2 - \\tfrac{25}{4}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Read off vertex</span>
                <p className="lrn-step-content">{`Vertex: $\\bigl(\\tfrac{7}{2}, -\\tfrac{25}{4}\\bigr)$. The parabola opens upward since $a = 1 > 0$.`}</p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>Why add and then subtract {`$\\tfrac{49}{4}$`}? Why not just add it?</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Adding alone would change the right-hand side. Adding and subtracting the same
                  number is adding zero the equation stays true, but the x-terms can now be packaged
                  as a perfect square.
                </p>
              </details>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Method 1: Divide by {`$a$`}</span>
                <p>Divide the whole equation by {`$a$`} first.</p>
                <p>This makes the {`$x^2$`} coefficient equal to 1, which is easy to complete.</p>
                <p>
                  <strong>Downside:</strong> Dividing can introduce fractions throughout.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Method 2: Factor out {`$a$`}</span>
                <p>Factor {`$a$`} out of only the x-terms.</p>
                <p>Complete the square inside the parentheses.</p>
                <p>
                  <strong>Advantage:</strong> Avoids fractions in many cases; constants stay
                  cleaner.
                </p>
              </div>
            </div>

            <p>
              <strong>Worked example (Method 2):</strong> Graph {`$y = -3x^2 - 12x - 5$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Factor {`$-3$`} from x-terms</span>
                <p className="lrn-step-content">{`$$y = -3(x^2 + 4x) - 5$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square inside</span>
                <p className="lrn-step-content">{`Half of $4$ is $2$; $2^2 = 4$. Add $4$ inside the parentheses. Since $-3$ multiplies the parentheses, this adds $-3 \\cdot 4 = -12$ to the right side so add $+12$ outside to make up for it.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Write in standard form</span>
                <p className="lrn-step-content">{`$$y = -3(x + 2)^2 + 7$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Read vertex</span>
                <p className="lrn-step-content">{`Vertex: $(-2, 7)$. Since $a = -3 < 0$, the parabola opens downward.`}</p>
              </div>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>Graph {`$y = 2x^2 - 8x + 5$`}.</p>
                <ol className="lrn-list">
                  <li>Factor 2 from x-terms: {`$y = 2(x^2 - 4x) + 5$`}.</li>
                  <li>
                    Half of {`$-4$`} is {`$-2$`}; {`$(-2)^2 = 4$`}. Adding 4 inside adds{' '}
                    {`$2 \\cdot 4 = 8$`} to the right, so subtract 8:{' '}
                    {`$y = 2(x^2 - 4x + 4) + 5 - 8$`}.
                  </li>
                  <li>Factor: {`$y = 2(x - 2)^2 - 3$`}.</li>
                  <li>Vertex: {`$(2, -3)$`}. Opens upward.</li>
                </ol>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <ol className="lrn-list">
                  <li>
                    Factor 3 from x-terms of {`$y = 3x^2 + 6x + 1$`}: {`$y = 3(x^2 + ?) + 1$`}.
                  </li>
                  <li>Complete the square inside. What number do you add?</li>
                  <li>Write in standard form and identify the vertex.</li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>Find the vertex of {`$y = -2x^2 + 12x - 7$`} by completing the square.</p>
              </div>
            </div>

            <h3>Horizontal Parabolas {`$x = a(y - k)^2 + h$`}</h3>

            <p>
              If {`$y$`} is squared instead of {`$x$`}, the parabola opens left or right rather than
              up or down. The same algebra works, with {`$x$`} and {`$y$`} swapped.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Standard Form (Horizontal Axis)</span>
              <div className="lrn-definition-desc">
                <p>{`$$x = a(y - k)^2 + h$$`}</p>
                <ul className="lrn-list">
                  <li>Vertex: {`$(h, k)$`}</li>
                  <li>Axis of symmetry: {`$y = k$`} (horizontal line)</li>
                  <li>
                    {`$a > 0$`}: opens right; {`$a < 0$`}: opens left
                  </li>
                </ul>
              </div>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Vertical Parabola</span>
                <p>{`$y = a(x-h)^2 + k$`}</p>
                <p>Opens up or down.</p>
                <p>Axis of symmetry: {`$x = h$`} (vertical line).</p>
                <p>Vertex is lowest or highest point.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Horizontal Parabola</span>
                <p>{`$x = a(y-k)^2 + h$`}</p>
                <p>Opens left or right.</p>
                <p>Axis of symmetry: {`$y = k$`} (horizontal line).</p>
                <p>Vertex is leftmost or rightmost point.</p>
              </div>
            </div>

            <p>
              <strong>Worked example:</strong> Graph {`$x = \\tfrac{y^2}{2} + 3y + 1$`} and find the
              vertex.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square in {`$y$`}</span>
                <p className="lrn-step-content">{`$$x = \\tfrac{1}{2}(y^2 + 6y) + 1$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Add 9 inside (half of 6 squared)</span>
                <p className="lrn-step-content">{`$$x = \\tfrac{1}{2}(y + 3)^2 + 1 - \\tfrac{9}{2} = \\tfrac{1}{2}(y + 3)^2 - \\tfrac{7}{2}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Read vertex</span>
                <p className="lrn-step-content">{`Vertex: $\\bigl(-\\tfrac{7}{2}, -3\\bigr)$. Since $a = \\tfrac{1}{2} > 0$, the parabola opens right. The vertex is the leftmost point.`}</p>
              </div>
            </div>

            <div className="lrn-graph">
              <HorizontalParabolaViz />
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why is the vertex {`$\\bigl(-\\tfrac{7}{2}, -3\\bigr)$`} and not{' '}
                {`$\\bigl(-3, -\\tfrac{7}{2}\\bigr)$`}?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  In {`$x = a(y - k)^2 + h$`}, {`$h$`} is the constant outside (so it equals the
                  output {`$x$`} at the vertex) and {`$k$`} is the constant inside (so it equals the
                  input {`$y$`} at the vertex). Here {`$h = -\\tfrac{7}{2}$`} and {`$k = -3$`}.
                </p>
              </details>
            </div>

            <div className="lrn-insight">
              <p>
                When standard form leads to a tangled system, switch to the general form{' '}
                {`$y = ax^2 + bx + c$`} and vice versa. Standard form reads off vertex information
                at a glance; general form takes one substitution per known point.
              </p>
            </div>
          </>,

          // SECTION 1: Circles
          <>
            <h2>Part 2, Circles</h2>

            <p>
              A <strong>circle</strong> is the set of all points at one fixed distance the{' '}
              <strong>radius</strong> from one fixed point the <strong>centre</strong>. The same
              word "radius" also names any segment from the centre to a point on the circle.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Standard Form of a Circle</span>
              <div className="lrn-definition-desc">
                <p>{`$$(x - h)^2 + (y - k)^2 = r^2$$`}</p>
                <ul className="lrn-list">
                  <li>Centre: {`$(h, k)$`}</li>
                  <li>Radius: {`$r$`}</li>
                </ul>
                <p>
                  Derivation: a point {`$(x, y)$`} is on the circle exactly when its distance to{' '}
                  {`$(h, k)$`} equals {`$r$`}. The distance between two points is Pythagoras on the
                  coordinate differences: square the horizontal gap, square the vertical gap, add,
                  take the square root. So {`$\\sqrt{(x-h)^2 + (y-k)^2} = r$`}. Squaring both sides
                  removes the root and gives the standard form.
                </p>
              </div>
            </div>

            <div className="lrn-graph">
              <CircleViz />
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Warning</span>
              <p>
                Read the centre by flipping the signs you see. The centre of{' '}
                {`$(x - 7)^2 + (y - 4)^2 = 25$`} is {`$(7, 4)$`}, not {`$(-7, -4)$`}, because the
                formula has {`$(x - h)$`} and {`$(y - k)$`} what appears with a minus on the page is
                the actual coordinate.
              </p>
            </div>

            <p>
              <strong>Worked example:</strong> Is {`$3x^2 + 6x + 3y^2 - 9y = -2$`} a circle? If so,
              find its center and radius.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Divide by 3</span>
                <p className="lrn-step-content">{`$$x^2 + 2x + y^2 - 3y = -\\tfrac{2}{3}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square in {`$x$`}</span>
                <p className="lrn-step-content">{`$(x+1)^2 - 1$. Add 1 to the right side.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square in {`$y$`}</span>
                <p className="lrn-step-content">{`$\\bigl(y - \\tfrac{3}{2}\\bigr)^2 - \\tfrac{9}{4}$. Add $\\tfrac{9}{4}$ to the right side.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Combine</span>
                <p className="lrn-step-content">{`$$(x+1)^2 + \\left(y - \\tfrac{3}{2}\\right)^2 = -\\tfrac{2}{3} + 1 + \\tfrac{9}{4} = \\tfrac{31}{12}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Read off</span>
                <p className="lrn-step-content">{`Center $\\bigl(-1, \\tfrac{3}{2}\\bigr)$, radius $\\sqrt{\\tfrac{31}{12}}$.`}</p>
              </div>
            </div>

            <h3>Degenerate Circles</h3>

            <p>
              <em>Degenerate</em> here means an equation that looks like a circle but graphs to a
              single point or to nothing at all. Not every equation of the form{' '}
              {`$Ax^2 + Bx + Ay^2 + Cy = D$`} produces a real circle. After completing the square,
              the right-hand side {`$r^2$`} tells you which case you are in.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Three cases after completing the square</span>
              <div className="lrn-definition-desc">
                <ul className="lrn-list">
                  <li>
                    <strong>Positive:</strong> a real circle with radius {`$\\sqrt{r^2}$`}. Example:{' '}
                    {`$(x-1)^2 + y^2 = 4$`} is a circle of radius 2 centred at {`$(1, 0)$`}.
                  </li>
                  <li>
                    <strong>Zero:</strong> a single point both squares must equal zero, so{' '}
                    {`$(x, y) = (h, k)$`}. Example: {`$(x-1)^2 + y^2 = 0$`} is just the point{' '}
                    {`$(1, 0)$`}.
                  </li>
                  <li>
                    <strong>Negative:</strong> no real graph the left side {`$(x-h)^2 + (y-k)^2$`}{' '}
                    cannot be negative. Example: {`$(x-1)^2 + y^2 = -4$`} has no real solutions.
                  </li>
                </ul>
              </div>
            </div>

            <div className="lrn-insight">
              An equation of the form {`$Ax^2 + Bx + Ay^2 + Cy = D$`} (same coefficient on {`$x^2$`}{' '}
              and {`$y^2$`}, {`$A \\neq 0$`}), if it has a graph at all, has a graph that is either
              a circle or a single point. It can never produce any other shape.
            </div>

            <h3>Reading the Coefficients From the Graph</h3>

            <p>
              Given the graph of {`$y = ax^2 + bx + c$`}, you can determine the signs of {`$a$`},{' '}
              {`$b$`}, and {`$c$`} by inspection.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Sign of {`$a$`}</span>
                <p className="lrn-step-content">
                  If the parabola opens upward, {`$a > 0$`}. If it opens downward, {`$a < 0$`}.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Sign of {`$c$`}</span>
                <p className="lrn-step-content">
                  The y-intercept occurs at {`$x = 0$`}, so {`$y = c$`}. If the curve crosses the
                  y-axis above the origin, {`$c > 0$`}. If below, {`$c < 0$`}.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Sign of {`$b$`}</span>
                <p className="lrn-step-content">
                  The vertex x-coordinate is {`$x = -\\tfrac{b}{2a}$`}. If the vertex is to the left
                  of the y-axis (negative x), then {`$-\\tfrac{b}{2a} < 0$`}, so{' '}
                  {`$\\tfrac{b}{2a} > 0$`} has the same sign as {`$a$`}. If the vertex is to the
                  right (positive x), then {`$b$`} has the opposite sign of {`$a$`}.
                </p>
              </div>
            </div>

            <p>
              <strong>Worked example:</strong> A parabola opens downward, crosses the y-axis below
              the origin, and has its vertex to the left of the y-axis. Determine the signs of{' '}
              {`$a$`}, {`$b$`}, and {`$c$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Sign of {`$a$`}</span>
                <p className="lrn-step-content">Opens downward, so {`$a < 0$`}.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Sign of {`$c$`}</span>
                <p className="lrn-step-content">Crosses below the origin, so {`$c < 0$`}.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Sign of {`$b$`}</span>
                <p className="lrn-step-content">
                  Vertex to the left means {`$x = -\\tfrac{b}{2a} < 0$`}, so {`$-\\tfrac{b}{2a}$`}{' '}
                  is negative. Since {`$a < 0$`}, we have {`$-\\tfrac{b}{2a} = \\tfrac{-b}{2a}$`}.
                  For this to be negative with {`$2a < 0$`} in the denominator, the numerator{' '}
                  {`$-b$`}
                  must be positive, so {`$b < 0$`}.
                </p>
              </div>
            </div>

            <h3>Intersection of Graphs</h3>

            <p>
              The intersection points of two graphs are exactly the ordered pairs {`$(x, y)$`} that
              satisfy both equations at once. Finding them is the same job as solving the two
              equations as a system.
            </p>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Warning</span>
              <p>
                Never read intersection coordinates off a graph. Graph the lines {`$x = 1.99$`} and{' '}
                {`$y = 3.01$`} on ordinary paper and they will look like they meet at {`$(2, 3)$`}
                but they actually meet at {`$(1.99, 3.01)$`}. Use algebra to get exact answers; the
                graph is only good for the rough location.
              </p>
            </div>

            <p>
              <strong>Worked example:</strong> Find the intersection of {`$x - y = 7$`} and{' '}
              {`$x^2 + y^2 - 4x + 12y + 27 = 0$`}.
            </p>

            <p>
              Substitute {`$x = y + 7$`} into the circle. Expanding gives{' '}
              {`$(y+7)^2 + y^2 - 4(y+7) + 12y + 27 = 0$`}, which simplifies to{' '}
              {`$2y^2 + 22y + 48 = 0$`}, that is {`$y^2 + 11y + 24 = 0$`}. Factor{' '}
              {`$(y+3)(y+8) = 0$`}: {`$y = -3$`} (then {`$x = 4$`}) or {`$y = -8$`} (then{' '}
              {`$x = -1$`}). The two intersection points are {`$(4, -3)$`} and {`$(-1, -8)$`}.
            </p>
          </>,

          // SECTION 2: Quadratic Inequalities
          <>
            <h2>Part 3, Quadratic Inequalities</h2>

            <h3>Why Sign Analysis Works</h3>

            <p>
              The Intermediate Value Theorem tells us that a continuous function cannot change sign
              without crossing zero. So a polynomial is either positive or negative throughout each
              interval between roots the only place it can switch signs is at a root where it equals
              zero.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Solving a Quadratic Inequality</span>
              <div className="lrn-definition-desc">
                <ol className="lrn-list">
                  <li>Move every term to one side so the inequality compares to 0.</li>
                  <li>Factor the quadratic.</li>
                  <li>Find the roots the {`$x$`}-values that make each factor zero.</li>
                  <li>Check the sign of the product in each interval between roots.</li>
                </ol>
              </div>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Warning</span>
              <p>
                Move everything to one side first. You cannot analyse signs when the quadratic is
                compared to a nonzero number. Wherever you see two factors on the left and a
                non-zero number on the right, expand, subtract the right side, factor again, then
                analyse signs.
              </p>
            </div>

            <p>
              <strong>Worked example:</strong> Solve {`$(x-3)(x-1) > 2$`} the trap from the warning,
              worked out.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Expand the left side</span>
                <p className="lrn-step-content">{`$(x-3)(x-1) = x^2 - 4x + 3$`}.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Subtract 2 to move everything to one side</span>
                <p className="lrn-step-content">{`$x^2 - 4x + 1 > 0$`}.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Find roots and analyse signs</span>
                <p className="lrn-step-content">{`By the quadratic formula the roots are $x = 2 \\pm \\sqrt{3}$. The parabola opens upward, so the expression is positive outside the roots.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">
                  Write the solution (strict, so roots excluded)
                </span>
                <p className="lrn-step-content">{`$$x < 2 - \\sqrt{3} \\quad \\text{or} \\quad x > 2 + \\sqrt{3}.$$`}</p>
              </div>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Interval notation</span>
              <p>
                A solution like {`$x \\leq -2$`} or {`$x \\geq 5$`} is written{' '}
                {`$(-\\infty, -2] \\cup [5, \\infty)$`}. The symbol {`$\\cup$`} means "union" every
                number that lies in at least one of the two intervals.
              </p>
            </div>

            <p>
              <strong>Worked example:</strong> Solve {`$(x+2)(x-5) \\geq 0$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Find roots</span>
                <p className="lrn-step-content">{`Roots: $x = -2$ and $x = 5$. These cut the number line into three intervals.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Test each interval</span>
                <p className="lrn-step-content">{`$x < -2$: both factors negative, product positive. $-2 < x < 5$: one positive, one negative, product negative. $x > 5$: both positive, product positive.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Write solution</span>
                <p className="lrn-step-content">{`The inequality is nonstrict ($\\leq$ or $\\geq$ allows equality), so the roots themselves count: $$x \\leq -2 \\quad \\text{or} \\quad x \\geq 5.$$`}</p>
              </div>
            </div>

            <div className="lrn-graph">
              <NumberLineSignViz />
            </div>

            <div className="lrn-graph">
              <QuadInequalityViz />
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">
                  Strict ({`$<$`} or {`$>$`})
                </span>
                <p>Roots are not solutions open circles, parentheses {`$(\\,)$`}.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">
                  Nonstrict ({`$\\leq$`} or {`$\\geq$`})
                </span>
                <p>Roots are solutions closed circles, brackets {`$[\\,]$`}.</p>
              </div>
            </div>

            <p>
              <strong>Worked example:</strong> Solve {`$r^2 - 8r < -12$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Move all terms to one side</span>
                <p className="lrn-step-content">{`$$r^2 - 8r + 12 < 0$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Factor</span>
                <p className="lrn-step-content">{`$(r - 2)(r - 6) < 0$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Sign analysis</span>
                <p className="lrn-step-content">{`Product is negative only between the roots.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Solution (strict, so roots excluded)</span>
                <p className="lrn-step-content">{`$$2 < r < 6$$`}</p>
              </div>
            </div>

            <h3>Quadratics With No Real Roots</h3>

            <p>
              If the quadratic has no real roots, its graph never touches the x-axis. So the
              expression is either always positive or always negative every {`$x$`} gives the same
              sign.
            </p>

            <p>
              <strong>Worked example:</strong> Solve {`$x^2 - 6x + 13 \\leq 0$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square</span>
                <p className="lrn-step-content">{`$x^2 - 6x + 13 = (x-3)^2 + 4$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Bound from below</span>
                <p className="lrn-step-content">{`$(x-3)^2 \\geq 0$, so $(x-3)^2 + 4 \\geq 4 > 0$ for every real $x$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Conclusion</span>
                <p className="lrn-step-content">
                  The quadratic is strictly positive everywhere, so {`$\\leq 0$`} has no solutions.
                  The reversed inequality {`$x^2 - 6x + 13 > 0$`} is true for every real {`$x$`}.
                </p>
              </div>
            </div>

            <h3>Graphing Two-Variable Quadratic Inequalities</h3>

            <p>
              An inequality with both {`$x$`} and {`$y$`}, like {`$y > 2x^2 + 8x - 3$`}, has a
              region of the plane as its solution rather than a set on a line.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Draw the boundary parabola</span>
                <p className="lrn-step-content">
                  Use a dashed curve for strict inequality ({`$>$`} or {`$<$`}), solid for
                  nonstrict.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Shade the correct side</span>
                <p className="lrn-step-content">{`Shade above for $y > f(x)$, below for $y < f(x)$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Verify with a test point</span>
                <p className="lrn-step-content">
                  Pick any point not on the parabola. If it satisfies the inequality, the side you
                  shaded is correct; otherwise switch sides.
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The parabola itself is the set of points where {`$y = ax^2 + bx + c$`}. Above that
                curve every point has a larger {`$y$`} than the formula gives, so it satisfies{' '}
                {`$y > ax^2 + bx + c$`}; below, every point has a smaller {`$y$`}.
              </p>
            </div>
          </>,

          // SECTION 3: Beyond Quadratics
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                You can solve {`$(x+2)(x-5) \\geq 0$`} with two factors. What changes for three
                factors like {`$(2x-1)(x+1)(x+7) > 0$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Three roots cut the number line into four intervals. A sign table tracks each
                  factor in each interval, then multiplies the signs together.
                </p>
              </details>
            </div>

            <h2>Part 4, Polynomial and Rational Inequalities</h2>

            <p>
              The same idea track the sign of each factor, then multiply works for any number of
              factors and for fractions. A sign table is a tidy way to do it once you have three or
              more factors.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Number-line method</span>
                <p>
                  Draw one number line per factor, shading where each is positive, then read off
                  where the shading patterns produce the sign you want. Fine for two factors;
                  cluttered for more.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Sign-table method</span>
                <p>
                  List every root in order to split the line into intervals. For each interval,
                  write the sign of every factor in a column, then multiply down. Scales cleanly to
                  any number of factors.
                </p>
              </div>
            </div>

            <p>
              <strong>Worked example:</strong> Solve {`$(2x-1)(x+1)(x+7) > 0$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Find roots</span>
                <p className="lrn-step-content">{`$x = \\tfrac{1}{2}$, $x = -1$, $x = -7$. These create four intervals.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Build sign table</span>
                <p className="lrn-step-content">{`Intervals: $(-\\infty, -7)$, $(-7, -1)$, $(-1, \\tfrac{1}{2})$, $(\\tfrac{1}{2}, \\infty)$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Record signs</span>
                <p className="lrn-step-content">{`$(2x-1)$: $-$, $-$, $-$, $+$. $(x+1)$: $-$, $-$, $+$, $+$. $(x+7)$: $-$, $+$, $+$, $+$. Product: $-$, $+$, $-$, $+$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Solution (strict, so roots excluded)</span>
                <p className="lrn-step-content">{`$$-7 < x < -1 \\quad \\text{or} \\quad x > \\tfrac{1}{2}$$`}</p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>Why does the product flip sign every time {`$x$`} crosses a root?</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  At each root exactly one factor changes sign. Switching one factor from {`$+$`} to{' '}
                  {`$-$`} (or back) flips the parity (even-or-odd count) of negative factors, and
                  the product is positive when the count is even and negative when odd. So crossing
                  a root always flips the product.
                </p>
              </details>
            </div>

            <h3>Rational Inequalities</h3>

            <p>
              When the expression includes a fraction with {`$x$`} in the denominator, the method
              extends with one extra rule: the sign of a fraction is the sign of the numerator
              divided by the sign of the denominator, and any {`$x$`} that zeroes the denominator
              must be excluded from the solution.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Solving Rational Inequalities</span>
              <div className="lrn-definition-desc">
                <ol className="lrn-list">
                  <li>Move every term to one side; combine into a single fraction over zero.</li>
                  <li>Factor numerator and denominator.</li>
                  <li>
                    Mark every zero of the numerator and denominator on the number line these are
                    the only places where the fraction can change sign.
                  </li>
                  <li>
                    Build a sign table; multiply numerator and denominator signs per interval.
                  </li>
                  <li>
                    Include numerator zeros only when the inequality is nonstrict. Always exclude
                    denominator zeros.
                  </li>
                </ol>
              </div>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Warning</span>
              <p>
                Never cross-multiply in an inequality unless you already know the sign of what you
                multiply by. Multiplying by a negative quantity flips the direction. When the sign
                is unknown, the safe move is to combine into one fraction and analyse its sign not
                to multiply and hope.
              </p>
            </div>

            <p>
              <strong>Worked example:</strong> Solve {`$(x+3)\\frac{(1-x)}{(x-5)} \\geq 0$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Identify critical values</span>
                <p className="lrn-step-content">{`Critical values are the $x$-values that zero the numerator or denominator the only points where the fraction can change sign. Numerator zeros: $x = -3$, $x = 1$. Denominator zero: $x = 5$ (excluded).`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Four intervals</span>
                <p className="lrn-step-content">{`$(-\\infty, -3)$, $(-3, 1)$, $(1, 5)$, $(5, \\infty)$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Signs of each factor</span>
                <p className="lrn-step-content">{`$(x+3)$ on the four intervals: $-,+,+,+$. $(1-x)$: $+,+,-,-$. $(x-5)$: $-,-,-,+$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Sign of the fraction</span>
                <p className="lrn-step-content">{`Multiply numerator signs, divide by denominator sign in each interval: $(-)\\frac{(+)}{(-)} = +$, $(+)\\frac{(+)}{(-)} = -$, $(+)\\frac{(-)}{(-)} = +$, $(+)\\frac{(-)}{(+)} = -$. The fraction is positive on $(-\\infty, -3)$ and $(1, 5)$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Write solution</span>
                <p className="lrn-step-content">{`Numerator zeros $x = -3$ and $x = 1$ are included (nonstrict); $x = 5$ is excluded (denominator zero). Final answer: $$x \\leq -3 \\quad \\text{or} \\quad 1 \\leq x < 5.$$`}</p>
              </div>
            </div>

            <p>
              <strong>Worked example:</strong> Solve {`$\\tfrac{2}{x-2} - \\tfrac{2}{x+3} > -1$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Move everything to one side</span>
                <p className="lrn-step-content">{`$$\\tfrac{2}{x-2} - \\tfrac{2}{x+3} + 1 > 0$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Common denominator {`$(x-2)(x+3)$`}</span>
                <p className="lrn-step-content">{`Numerator: $2(x+3) - 2(x-2) + (x-2)(x+3) = 2x+6 - 2x+4 + x^2 + x - 6 = x^2 + x + 4$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Check if numerator has real roots</span>
                <p className="lrn-step-content">{`The discriminant $b^2 - 4ac$ tells you: negative means no real roots. Here $1 - 16 = -15 < 0$. With no real roots and a positive leading coefficient, $x^2 + x + 4 > 0$ always.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Analyze denominator</span>
                <p className="lrn-step-content">{`Positive when both factors are same sign. Critical values: $x = -3$ and $x = 2$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Solution</span>
                <p className="lrn-step-content">{`$$x \\in (-\\infty, -3) \\cup (2, \\infty)$$`}</p>
              </div>
            </div>
          </>,

          // SECTION 4: Trivial Inequality
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>Can squaring a real number ever produce a negative result?</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  No. Positive times positive is positive, negative times negative is positive, and{' '}
                  {`$0 \\cdot 0 = 0$`}. The next definition gives this a name.
                </p>
              </details>
            </div>

            <h2>Part 5, The Trivial Inequality and AM-GM</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Trivial Inequality</span>
              <div className="lrn-definition-desc">
                <p>{`$$x^2 \\geq 0 \\quad \\text{for every real } x$$`}</p>
                <p>Equality holds only when {`$x = 0$`}.</p>
                <p>
                  It looks too obvious to name, but it anchors almost every inequality proof in this
                  lesson.
                </p>
              </div>
            </div>

            <div className="lrn-graph">
              <TrivialInequalityViz />
            </div>

            <h3>Working Backwards vs. Writing Forwards</h3>

            <p>
              You usually <em>discover</em> an inequality proof by starting from what you want and
              rearranging until you hit something you know is true. But you must <em>write</em> the
              final proof in the opposite order, starting from the known truth and ending at the
              goal. Otherwise the "proof" is just a chain of if-this-then-that with no anchor.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Backwards</span>
                <p>
                  Start at the goal, rearrange toward something known. Use this to find the path.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Forwards</span>
                <p>
                  Start at the known truth, apply valid steps to reach the goal. Use this to write
                  the proof.
                </p>
              </div>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Warning: Bogus Backwards Proof</span>
              <p>
                Backwards only works if every step is reversible. Squaring is not: starting from{' '}
                {`$1 \\leq -2$`} and squaring gives {`$1 \\leq 4$`}, which is true, yet{' '}
                {`$1 \\leq -2$`} is false. Always reverse and rewrite the proof forwards to catch
                this trap.
              </p>
            </div>

            <h3>AM-GM Inequality</h3>

            <div className="lrn-definition">
              <span className="lrn-definition-term">
                AM-GM (Arithmetic Mean Geometric Mean) Inequality
              </span>
              <div className="lrn-definition-desc">
                <p>{`$$\\frac{a + b}{2} \\geq \\sqrt{ab} \\quad \\text{for all } a, b \\geq 0$$`}</p>
                <p>
                  Equality holds when {`$a = b$`}. The name says the same thing in words: the
                  average of two non-negative numbers is at least their geometric mean.
                </p>
                <p>
                  The squared form below follows by substituting {`$a \\to a^2$`} and{' '}
                  {`$b \\to b^2$`} and now holds for all real {`$a, b$`} since{' '}
                  {`$a^2, b^2 \\geq 0$`}:
                </p>
                <p>{`$$\\frac{a^2 + b^2}{2} \\geq ab \\quad \\text{for all real } a, b$$`}</p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof of the squared form</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Start from the Trivial Inequality: $(a - b)^2 \\geq 0$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Expand: $a^2 - 2ab + b^2 \\geq 0$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`Add $2ab$ to both sides: $a^2 + b^2 \\geq 2ab$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">{`Divide by 2: $\\dfrac{a^2 + b^2}{2} \\geq ab$. $\\square$`}</div>
              </div>
              <div className="lrn-qed">Q.E.D. (Latin: which was to be demonstrated)</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the proof open with {`$(a - b)^2 \\geq 0$`} instead of with the goal{' '}
                {`$\\tfrac{a^2+b^2}{2} \\geq ab$`}?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$(a-b)^2 \\geq 0$`} is guaranteed by the Trivial Inequality, so it is a safe
                  starting point. Beginning at the goal and walking toward something true is the
                  backwards habit useful for finding the steps, but never the final proof.
                </p>
              </details>
            </div>

            <p>
              <strong>Worked example:</strong> Prove {`$x + \\tfrac{1}{x} \\geq 2$`} for all
              positive {`$x$`}.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof (using AM-GM as a tool)</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Let $a = \\sqrt{x}$ and $b = \\tfrac{1}{\\sqrt{x}}$ (both real and positive since $x > 0$). Then $a^2 = x$, $b^2 = \\tfrac{1}{x}$, and $ab = 1$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Apply the squared form of AM-GM, $\\tfrac{a^2 + b^2}{2} \\geq ab$: $\\tfrac{x + 1/x}{2} \\geq 1$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`Multiply both sides by 2: $x + \\tfrac{1}{x} \\geq 2$. $\\square$`}</div>
              </div>
            </div>

            <p>
              Once proved from the Trivial Inequality, AM-GM becomes a reusable tool it short-cuts
              the same work the Trivial Inequality would do from scratch.
            </p>
          </>,

          // SECTION 5: Quadratic Optimization
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Where does the maximum of {`$-x^2 + 5x - 7$`} live at the vertex, or somewhere else?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The {`$x^2$`} coefficient is negative, so the parabola opens downward and the
                  vertex is the highest point. Completing the square will pin it down exactly.
                </p>
              </details>
            </div>

            <h2>Part 6, Quadratic Optimization</h2>

            <p>
              For any quadratic {`$f(x) = ax^2 + bx + c$`}, the largest or smallest value of {`$f$`}{' '}
              is at the vertex. Which one depends on the sign of {`$a$`}.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Where the optimum lives</span>
              <div className="lrn-definition-desc">
                <p>
                  <em>Optimum</em> here means the largest or smallest value.
                </p>
                <ul className="lrn-list">
                  <li>{`$a > 0$`}: parabola opens up vertex is the minimum.</li>
                  <li>{`$a < 0$`}: parabola opens down vertex is the maximum.</li>
                </ul>
                <p>The vertex x-coordinate is derived below.</p>
              </div>
            </div>

            <div className="lrn-graph">
              <InteractiveOptimizationViz />
            </div>

            <h3>Vertex Formula by Completing the Square</h3>

            <p>
              The vertex x-coordinate of {`$ax^2 + bx + c$`} is {`$x = -\\dfrac{b}{2a}$`}.
              Geometrically this is also the average {`$\\dfrac{r + s}{2}$`} of the two roots{' '}
              {`$r$`} and {`$s$`}: the axis of symmetry splits the parabola in half, so it sits
              exactly between the two x-intercepts (the points where the graph crosses the x-axis).
              When the discriminant is negative the roots are complex (non-real), but the quadratic
              formula still produces two values whose sum is {`$-\\dfrac{b}{a}$`}, so the identity
              still gives the real vertex location.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Derivation: General Quadratic Minimum</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Start with $ax^2 + bx + c$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Factor: $a\\!\\left(x^2 + \\dfrac{b}{a}x\\right) + c$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`Complete the square: $a\\!\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a}$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">{`The squared term is nonnegative. When $a > 0$, minimum is $c - \\dfrac{b^2}{4a}$ at $x = -\\dfrac{b}{2a}$.`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <p>
              The same algebra (Vieta's sum of roots formula gives {`$r + s = -\\dfrac{b}{a}$`}, so
              the average is {`$-\\dfrac{b}{2a}$`}) confirms the geometric picture.
            </p>

            <h3>Multi-Variable Optimization</h3>

            <p>
              When the expression has both {`$x$`} and {`$y$`} terms, complete the square in each
              variable separately exactly the move used to put a circle equation in standard form.
              The two squared terms can each be driven to zero, so the minimum is whatever constant
              remains.
            </p>

            <p>
              <strong>Worked example:</strong> Find the smallest value of{' '}
              {`$x^2 + 4x + 2y^2 - 14y + 1$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square in {`$x$`}</span>
                <p className="lrn-step-content">{`$x^2 + 4x = (x + 2)^2 - 4$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square in {`$y$`}</span>
                <p className="lrn-step-content">{`$2y^2 - 14y = 2(y^2 - 7y) = 2\\bigl(y - \\tfrac{7}{2}\\bigr)^2 - \\tfrac{49}{2}$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Combine</span>
                <p className="lrn-step-content">{`$(x+2)^2 - 4 + 2\\bigl(y - \\tfrac{7}{2}\\bigr)^2 - \\tfrac{49}{2} + 1 = (x+2)^2 + 2\\bigl(y-\\tfrac{7}{2}\\bigr)^2 - \\tfrac{55}{2}$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Minimum</span>
                <p className="lrn-step-content">{`Both squares are nonnegative. Minimum is $-\\tfrac{55}{2}$ at $x = -2$, $y = \\tfrac{7}{2}$.`}</p>
              </div>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>Find the maximum value of {`$-4x^2 + 16x + 3$`}.</p>
              </div>
            </div>

            <h3>Pure Optimization: No Business Frame</h3>

            <p>
              Optimization problems are not always about money or physics. Sometimes the constraint
              is purely mathematical, and the goal is just to find where a quadratic reaches its
              extreme value.
            </p>

            <p>
              <strong>Worked example:</strong> The sum of two numbers is 1. What is the largest
              possible value of their product?
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Define a variable</span>
                <p className="lrn-step-content">
                  Let the first number be {`$x$`}. Since the sum is 1, the second number is{' '}
                  {`$1 - x$`}.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Write the product as a quadratic</span>
                <p className="lrn-step-content">{`$$P = x(1 - x) = x - x^2 = -x^2 + x$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square</span>
                <p className="lrn-step-content">
                  Factor {`$-1$`} from the x-terms: {`$P = -(x^2 - x)$`}. Half of {`$-1$`} is{' '}
                  {`$-\\tfrac{1}{2}$`}; {`$\\bigl(-\\tfrac{1}{2}\\bigr)^2 = \\tfrac{1}{4}$`}. Add
                  and subtract:{' '}
                  {`$P = -\\bigl(x^2 - x + \\tfrac{1}{4}\\bigr) + \\tfrac{1}{4} = -\\bigl(x - \\tfrac{1}{2}\\bigr)^2 + \\tfrac{1}{4}$`}
                  .
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Read the maximum</span>
                <p className="lrn-step-content">
                  The squared term is at most zero, so the maximum product is {`$\\tfrac{1}{4}$`},
                  achieved when {`$x = \\tfrac{1}{2}$`}. The two numbers are both{' '}
                  {`$\\tfrac{1}{2}$`}.
                </p>
              </div>
            </div>

            <h3>Real-World Optimization: Revenue</h3>

            <p>
              <strong>Worked example:</strong> A company sells a video game for $20 and at that
              price sells 10 000 copies. Every $1 they raise the price loses them 100 copies. What
              price maximises revenue?
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Express price and quantity</span>
                <p className="lrn-step-content">{`Let $x$ be the number of dollars added to the price. New price: $20 + x$. New quantity sold: $10000 - 100x$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Write revenue as a product</span>
                <p className="lrn-step-content">{`$R(x) = (20 + x)(10000 - 100x) = 100(20 + x)(100 - x)$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Read off the roots</span>
                <p className="lrn-step-content">{`In factored form, $R = 0$ when $x = -20$ (price gives away the game for free) or $x = 100$ (price chokes off all sales).`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Maximum at the average of the roots</span>
                <p className="lrn-step-content">{`The coefficient of $x^2$ is negative, so the maximum is at $x = \\tfrac{-20 + 100}{2} = 40$. Optimal price: $\\$20 + \\$40 = \\$60$. Maximum revenue: $R(40) = 100 \\cdot 60 \\cdot 60 = \\$360{,}000$.`}</p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does locating the roots of revenue give you the maximum without any calculus or
                completing the square?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Revenue is a downward parabola in {`$x$`}. The axis of symmetry of a parabola lies
                  exactly halfway between its two x-intercepts, and for a downward parabola the
                  vertex on that axis is the maximum. So the average of the roots is, for free, the{' '}
                  {`$x$`} that maximises revenue.
                </p>
              </details>
            </div>
          </>
        ]
      },

      practice: [
        // interleaved: computation, conceptual, applied, method selection, transfer, predict, self-explain, elaborate, error detection
        {
          q: 'What is the vertex of {`$y = 3(x - 4)^2 + 7$`}?',
          a: 'The vertex is {`$(4, 7)$`}. In standard form {`$y = a(x-h)^2 + k$`}, the vertex is {`$(h, k)$`}. Here {`$h = 4$`} (the formula has {`$(x - h)$`}, so {`$h = 4$`} even though you see {`$-4$`}) and {`$k = 7$`}. The parabola opens upward since {`$a = 3 > 0$`}, so the vertex is the minimum point.'
        },
        {
          q: 'Find the vertex and minimum value of {`$y = x^2 - 10x + 21$`} by completing the square.',
          a: 'Vertex {`$(5, -4)$`}; minimum value {`$-4$`} at {`$x = 5$`}. (1) Group x-terms: {`$y = (x^2 - 10x) + 21$`}. (2) Half of {`$-10$`} is {`$-5$`}; {`$(-5)^2 = 25$`}. Add and subtract: {`$y = (x^2 - 10x + 25) - 25 + 21$`}. (3) Factor: {`$y = (x - 5)^2 - 4$`}. (4) The squared term is at least zero, so the smallest value of {`$y$`} is {`$-4$`}, hit when {`$x = 5$`}.'
        },
        {
          q: 'Solve the inequality {`$(x - 3)(x + 1) \\leq 0$`}.',
          a: 'Solution: {`$-1 \\leq x \\leq 3$`}. (1) Roots: {`$x = -1$`} and {`$x = 3$`}. (2) Sign analysis. For {`$x < -1$`}, both factors are negative, product positive. For {`$-1 < x < 3$`}, the first factor is negative and the second is positive, product negative. For {`$x > 3$`}, both positive. (3) The inequality is nonstrict ({`$\\leq$`}: includes equality), so roots count. Solution: {`$[-1, 3]$`}.'
        },
        {
          q: 'A student writes: "The center of {`$(x + 3)^2 + (y - 1)^2 = 16$`} is {`$(3, 1)$`}." Identify and fix the error.',
          a: 'The center is {`$(-3, 1)$`}, not {`$(3, 1)$`}. The standard form is {`$(x - h)^2 + (y - k)^2 = r^2$`}. When you see {`$(x + 3)^2$`}, that equals {`$(x - (-3))^2$`}, so {`$h = -3$`}. The {`$y$`} part {`$(y - 1)^2$`} gives {`$k = 1$`}. Always flip the sign of what you see in the formula to read off the center coordinate.'
        },
        {
          q: 'Show that {`$2x^2 + 4x + 5 > 0$`} for every real {`$x$`}.',
          a: 'Complete the square. (1) Factor 2 from the x-terms: {`$2(x^2 + 2x) + 5$`}. (2) Half of 2 is 1; {`$1^2 = 1$`}. Add 1 inside, subtract {`$2 \\cdot 1 = 2$`} outside: {`$2((x + 1)^2 - 1) + 5 = 2(x + 1)^2 + 3$`}. (3) By the Trivial Inequality {`$(x + 1)^2 \\geq 0$`}, so {`$2(x + 1)^2 \\geq 0$`} and the whole expression is at least {`$3$`}. So it is strictly positive everywhere.'
        },
        {
          q: 'Find the equation of the parabola with vertex {`$(4, -3)$`}, horizontal axis of symmetry, passing through {`$(5, -6)$`}.',
          a: 'Equation: {`$x = \\tfrac{1}{9}(y+3)^2 + 4$`}. (1) Horizontal axis means standard form {`$x = a(y - k)^2 + h$`}. With vertex {`$(4, -3)$`}: {`$x = a(y + 3)^2 + 4$`}. (2) Substitute the point {`$(5, -6)$`}: {`$5 = a(-6 + 3)^2 + 4 = 9a + 4$`}. (3) Solve: {`$9a = 1$`}, so {`$a = \\tfrac{1}{9}$`}. (4) Check by plugging back: {`$\\tfrac{1}{9}(-6+3)^2 + 4 = \\tfrac{1}{9}(9) + 4 = 5$`}.'
        },
        {
          q: 'Solve {`$x^2 + 5x \\geq 14$`}.',
          a: 'Solution: {`$x \\leq -7$`} or {`$x \\geq 2$`}. (1) Move everything to one side: {`$x^2 + 5x - 14 \\geq 0$`}. (2) Factor: {`$(x + 7)(x - 2) \\geq 0$`}. (3) Roots: {`$x = -7$`} and {`$x = 2$`}. (4) Sign analysis. For {`$x < -7$`}, both factors negative, product positive. Between the roots, product negative. For {`$x > 2$`}, both positive. (5) Nonstrict, so roots count. Solution: {`$(-\\infty, -7] \\cup [2, \\infty)$`}.'
        },
        {
          q: 'Prove {`$a^2 + b^2 + c^2 \\geq ab + bc + ca$`} for all real {`$a, b, c$`}.',
          a: '(1) Start from three copies of the Trivial Inequality: {`$(a - b)^2 \\geq 0$`}, {`$(b - c)^2 \\geq 0$`}, {`$(c - a)^2 \\geq 0$`}. (2) Add them: {`$(a-b)^2 + (b-c)^2 + (c-a)^2 \\geq 0$`}. (3) Expand: {`$2a^2 + 2b^2 + 2c^2 - 2ab - 2bc - 2ca \\geq 0$`}. (4) Divide by 2: {`$a^2 + b^2 + c^2 \\geq ab + bc + ca$`}. Equality holds when {`$a = b = c$`} (all three squared differences must be zero at once).'
        },
        {
          q: 'What is the minimum value of {`$2x^2 + 8x - 9$`}? At what {`$x$`} does it occur?',
          a: 'Minimum value is {`$-17$`} at {`$x = -2$`}. (1) Factor 2 from x-terms: {`$2(x^2 + 4x) - 9$`}. (2) Half of 4 is 2; {`$2^2 = 4$`}. Add 4 inside, subtract {`$2 \\cdot 4 = 8$`} outside: {`$2(x + 2)^2 - 17$`}. (3) Since {`$2(x+2)^2 \\geq 0$`}, the minimum is {`$-17$`}, hit when {`$(x+2)^2 = 0$`}, that is {`$x = -2$`}.'
        },
        {
          q: 'Solve {`$(x - 2)(x + 3)(x - 5) < 0$`}.',
          a: 'Solution: {`$x < -3$`} or {`$2 < x < 5$`}. (1) Roots: {`$x = -3$`}, {`$x = 2$`}, {`$x = 5$`}. They cut the line into four intervals. (2) Pick a test value in each. {`$x = -4$`}: {`$(-6)(-1)(-9) = -54 < 0$`} keep. {`$x = 0$`}: {`$(-2)(3)(-5) = 30 > 0$`} drop. {`$x = 3$`}: {`$(1)(6)(-2) = -12 < 0$`} keep. {`$x = 6$`}: {`$(4)(9)(1) = 36 > 0$`} drop. (3) Strict ({`$<$`}: equality excluded), so roots are out. Solution: {`$(-\\infty, -3) \\cup (2, 5)$`}.'
        },
        {
          q: 'Is {`$2x^2 - 8x + 2y^2 + 12y = -10$`} a circle? If so, find its center and radius.',
          a: 'Yes. Center {`$(2, -3)$`}, radius {`$2\\sqrt{2}$`}. (1) Divide by 2: {`$x^2 - 4x + y^2 + 6y = -5$`}. (2) Complete the square in {`$x$`}: {`$(x - 2)^2 - 4$`}. (3) Complete the square in {`$y$`}: {`$(y + 3)^2 - 9$`}. (4) Combine: {`$(x - 2)^2 + (y + 3)^2 = -5 + 4 + 9 = 8 > 0$`}. So it is a real circle with center {`$(2, -3)$`} and radius {`$\\sqrt{8} = 2\\sqrt{2}$`}.'
        },
        {
          q: 'Transfer: A ball is thrown upward with height {`$h(t) = -5t^2 + 20t + 3$`} metres. Find the maximum height.',
          a: 'Maximum height is {`$23$`} metres at {`$t = 2$`} seconds. (1) Downward-opening quadratic in {`$t$`}; the vertex gives the maximum. (2) Complete the square: {`$-5(t^2 - 4t) + 3 = -5((t - 2)^2 - 4) + 3 = -5(t-2)^2 + 23$`}. (3) The squared term is at most zero (negated), so the maximum is {`$23$`}, hit when {`$t = 2$`}. The physics setting does not change the algebra.'
        },
        {
          q: 'Solve {`$\\dfrac{(x - 1)(x + 2)}{x + 4} \\leq 0$`}.',
          a: 'Solution: {`$x < -4$`} or {`$-2 \\leq x \\leq 1$`}. (1) Numerator zeros: {`$x = 1$` } and {`$x = -2$`}. Denominator zero: {`$x = -4$`} (always excluded). (2) Four intervals. Test values. {`$x = -5$`}: {`$(-6)(-3)/(-1) = -18 < 0$`} keep. {`$x = -3$`}: {`$(-4)(-1)/(1) = 4 > 0$`} drop. {`$x = 0$`}: {`$(-1)(2)/(4) = -0.5 < 0$`} keep. {`$x = 2$`}: {`$(1)(4)/(6) > 0$`} drop. (3) Nonstrict, so include numerator zeros {`$x = -2, 1$`}; exclude {`$x = -4$`}.'
        },
        {
          q: 'Without completing the square, find the vertex of {`$y = 3x^2 + 12x + 7$`} using the average-of-roots identity.',
          a: 'Vertex {`$(-2, -5)$`}. (1) The vertex x-coordinate equals {`$-\\dfrac{b}{2a} = -\\dfrac{12}{2 \\cdot 3} = -2$`}. (2) Substitute back to get the y-coordinate: {`$y(-2) = 3(4) + 12(-2) + 7 = 12 - 24 + 7 = -5$`}. (3) So the vertex is {`$(-2, -5)$`}. This is the same number the average of the roots would give if you solved {`$3x^2 + 12x + 7 = 0$`} first the identity lets you skip that step.'
        },
        {
          q: 'Predict: Without computing fully, what shape does the solution set of {`$x^2 - 4x + 4 < 0$`} take?',
          a: 'No solutions. {`$x^2 - 4x + 4 = (x-2)^2$`}. A perfect square (a real number times itself) is never below zero, so {`$(x-2)^2 < 0$`} is impossible. The graph touches the x-axis at the single point {`$(2, 0)$`} and lies above it everywhere else.'
        },
        {
          q: 'Find the center and radius of the circle {`$x^2 + y^2 + 4x - 10y + 13 = 0$`}.',
          a: 'Center {`$(-2, 5)$`}, radius {`$4$`}. (1) Group: {`$(x^2 + 4x) + (y^2 - 10y) = -13$`}. (2) Complete the square in {`$x$`}: half of 4 is 2, {`$2^2 = 4$`}, add 4 to both sides. (3) Complete the square in {`$y$`}: half of {`$-10$`} is {`$-5$`}, {`$(-5)^2 = 25$`}, add 25 to both sides. (4) Result: {`$(x + 2)^2 + (y - 5)^2 = -13 + 4 + 25 = 16$`}. (5) Read off: center {`$(-2, 5)$`}, radius {`$\\sqrt{16} = 4$`}.'
        },
        {
          q: 'Transfer: A rectangular pen has perimeter 40 m. Express the area as a quadratic and find the dimensions that make it as large as possible.',
          a: 'Largest area is {`$100$`} square metres, achieved with a {`$10 \\times 10$`} square. (1) Let width be {`$w$`}; then length is {`$20 - w$`} (since {`$2w + 2l = 40$`}). (2) Area: {`$A = w(20 - w) = -w^2 + 20w$`}. (3) Complete the square: {`$A = -((w - 10)^2 - 100) = -(w - 10)^2 + 100$`}. (4) The squared term is at most zero, so the maximum is {`$100$`}, hit when {`$w = 10$`}, giving {`$l = 10$` } a square.'
        },
        {
          q: 'Solve {`$\\dfrac{1}{x - 1} + \\dfrac{1}{x + 1} \\geq 0$`}.',
          a: 'Solution: {`$-1 < x \\leq 0$`} or {`$x > 1$`}. (1) Combine over common denominator {`$(x-1)(x+1) = x^2 - 1$`}: numerator {`$= (x + 1) + (x - 1) = 2x$`}. So the inequality is {`$\\dfrac{2x}{x^2 - 1} \\geq 0$`}. (2) Numerator zero: {`$x = 0$`}. Denominator zeros: {`$x = \\pm 1$`} (always excluded). (3) Sign chart on the four intervals. {`$x < -1$`}: {`$2x < 0$`}, {`$x^2 - 1 > 0$`}, ratio negative. {`$-1 < x < 0$`}: numerator negative, denominator negative, ratio positive. {`$0 < x < 1$`}: numerator positive, denominator negative, ratio negative. {`$x > 1$`}: both positive, ratio positive. (4) Include {`$x = 0$`} (nonstrict, numerator zero); exclude {`$x = \\pm 1$`}.'
        },
        {
          q: 'Prove {`$x + \\tfrac{1}{x} \\geq 2$`} for all positive {`$x$`}.',
          a: '(1) Start from the Trivial Inequality: {`$(x-1)^2 \\geq 0$`}. (2) Expand: {`$x^2 - 2x + 1 \\geq 0$`}. (3) Add {`$2x$`}: {`$x^2 + 1 \\geq 2x$`}. (4) Since {`$x > 0$`}, divide both sides by {`$x$`} the direction stays: {`$x + \\tfrac{1}{x} \\geq 2$`}. Equality holds when {`$(x-1)^2 = 0$`}, that is {`$x = 1$`}. The {`$x > 0$`} condition is load-bearing: dividing by a negative number would flip the direction.'
        },
        {
          q: 'Self-explain: In a rational inequality, why are denominator zeros always excluded but numerator zeros included only for nonstrict ({`$\\leq$`} or {`$\\geq$`})?',
          a: 'A denominator zero makes the fraction undefined the fraction has no value at that {`$x$`}, so it cannot satisfy any inequality, strict or not. A numerator zero makes the fraction equal to zero. For a nonstrict inequality (which permits equality), zero counts. For a strict inequality (which forbids equality), zero does not count. So the rule is: drop denominator zeros every time; keep numerator zeros only when the inequality allows equality.'
        },
        {
          q: 'Find the smallest value of {`$x^2 - 6x + 3y^2 + 12y + 5$`}.',
          a: 'Minimum is {`$-16$`} at {`$x = 3$`}, {`$y = -2$`}. (1) Complete the square in {`$x$`}: {`$x^2 - 6x = (x - 3)^2 - 9$`}. (2) Complete the square in {`$y$`}: {`$3y^2 + 12y = 3(y^2 + 4y) = 3((y + 2)^2 - 4) = 3(y + 2)^2 - 12$`}. (3) Combine: {`$(x - 3)^2 - 9 + 3(y + 2)^2 - 12 + 5 = (x - 3)^2 + 3(y + 2)^2 - 16$`}. (4) Both squared terms are at least zero, so the minimum is {`$-16$`}, hit when {`$x = 3$`} and {`$y = -2$`}.'
        },
        {
          q: 'Elaborate: Why does completing the square work to find the vertex what makes the squared term the key?',
          a: 'The Trivial Inequality says {`$(x - h)^2 \\geq 0$`} for every real {`$x$`}, with equality only at {`$x = h$`}. So {`$a(x - h)^2 + k$`} reaches its smallest value (when {`$a > 0$`}) or largest (when {`$a < 0$`}) exactly at {`$x = h$`}, and the value there is {`$k$`}. Completing the square is the rewrite that exposes both {`$h$`} (the optimum location) and {`$k$`} (the optimum value) in one shape.'
        },
        {
          q: 'Prove {`$x^2 + \\tfrac{1}{x^2} \\geq 2$`} for every {`$x \\neq 0$`}, using AM-GM as a tool.',
          a: 'Apply the squared form of AM-GM, {`$a^2 + b^2 \\geq 2ab$`}, with {`$a = x$`} and {`$b = \\tfrac{1}{x}$`}. (1) Substitute: {`$x^2 + \\tfrac{1}{x^2} \\geq 2 \\cdot x \\cdot \\tfrac{1}{x} = 2$`}. (2) Equality holds when {`$a = b$`}, that is {`$x = \\tfrac{1}{x}$`} or {`$x^2 = 1$`}, so {`$x = \\pm 1$`}. AM-GM, once proved, is a reusable tool that short-cuts work the Trivial Inequality would otherwise do from scratch.'
        },
        {
          q: 'A downward-opening parabola crosses the y-axis above the origin and has its vertex to the right of the y-axis. Determine the signs of {`$a$`}, {`$b$`}, and {`$c$`} in {`$y = ax^2 + bx + c$`}.',
          a: 'Sign of {`$a$`}: negative (opens down). Sign of {`$c$`}: positive (y-intercept above origin). Sign of {{`$b$`}}: negative. (1) Vertex at {{`$x = -\\tfrac{b}{2a} > 0$`}} (to the right). (2) Since {{`$a < 0$`}}, we have {{`$2a < 0$`}}. (3) For {{`$-\\tfrac{b}{2a} > 0$`}} with {{`$2a < 0$`}} in the denominator, the numerator {{`$-b$`}} must be negative, so {{`$b$`}} is negative. Flipping signs off the graph is faster than completing the square every time.'
        },
        {
          q: 'Two numbers add up to 5. Find the two numbers that make their product as large as possible.',
          a: 'The numbers are both {`$\\tfrac{5}{2}$`} and the maximum product is {`$\\tfrac{25}{4}$`}. (1) Let one number be {{`$x$`}}; the other is {{`$5 - x$`}}. (2) Product: {{`$P = x(5 - x) = 5x - x^2 = -x^2 + 5x$`}}. (3) Complete the square: {{`$-\\bigl(x^2 - 5x\\bigr) = -\\bigl(x - \\tfrac{5}{2}\\bigr)^2 + \\tfrac{25}{4}$`}}. (4) Maximum is {{`$\\tfrac{25}{4}$`}} at {{`$x = \\tfrac{5}{2}$`}}. By symmetry, the maximum product of two numbers with a fixed sum always occurs when the numbers are equal.'
        },
        {
          q: 'Does the line {`$y = x + 1$`} meet the circle {`$x^2 + y^2 = 5$`} in 0, 1, or 2 points?',
          a: 'Two points: {`$(-2, -1)$`} and {`$(1, 2)$`}. (1) Substitute {`$y = x + 1$`} into the circle: {`$x^2 + (x + 1)^2 = 5$`}. (2) Expand: {`$x^2 + x^2 + 2x + 1 = 5$`}, so {`$2x^2 + 2x - 4 = 0$`}, that is {`$x^2 + x - 2 = 0$`}. (3) The discriminant is {`$1 + 8 = 9 > 0$`} two real roots, so two intersection points. (4) Factor: {`$(x + 2)(x - 1) = 0$`} gives {`$x = -2$`} or {`$x = 1$`}, and the line gives the matching {`$y$`}-values.'
        },
        {
          q: 'Transfer: Describe a real-world scenario where knowing the vertex of a parabola gives you actionable information.',
          a: 'One example: a company selling a product at price {`$p$`} has revenue {`$R = -q \\cdot p^2 + c \\cdot p$`} (a downward parabola). The vertex gives the price that makes revenue the largest. Another example: a ball thrown upward has height modelled by a downward-opening quadratic; the vertex gives the highest point and the time when it happens. In both cases, completing the square or {`$x = -\\tfrac{b}{2a}$`} gives the best value without guessing.'
        }
      ],

      reference: {
        category: 'Quick Reference',
        title: 'Quadratic Functions and Polynomial Inequalities',
        sections: [
          <>
            <h2>Parabolas</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Vertical Axis Standard Form</span>
              <div className="lrn-definition-desc">
                <p>{`$$y = a(x - h)^2 + k$$`}</p>
                <ul className="lrn-list">
                  <li>
                    Vertex {`$(h, k)$`}, axis {`$x = h$`}
                  </li>
                  <li>{`$a > 0$`}: opens up (minimum at vertex)</li>
                  <li>{`$a < 0$`}: opens down (maximum at vertex)</li>
                </ul>
                <p>
                  When to use: graphing a vertical parabola, reading the vertex, or optimization.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Horizontal Axis Standard Form</span>
              <div className="lrn-definition-desc">
                <p>{`$$x = a(y - k)^2 + h$$`}</p>
                <ul className="lrn-list">
                  <li>
                    Vertex {`$(h, k)$`}, axis {`$y = k$`}
                  </li>
                  <li>
                    {`$a > 0$`}: opens right; {`$a < 0$`}: opens left
                  </li>
                </ul>
                <p>
                  When to use: the squared variable is {`$y$`} the parabola opens left or right.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">General Form</span>
              <div className="lrn-definition-desc">
                <p>{`$y = ax^2 + bx + c$`}</p>
                <p>
                  When to use: three points on the parabola are known; substitute each to build a
                  linear system.
                </p>
              </div>
            </div>

            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$x_{\\text{vertex}} = -\\frac{b}{2a}$$`}</span>
            </div>

            <p>
              When to use: finding the vertex x-coordinate without completing the square; also
              equals the average of the roots.
            </p>

            <h2>Circles</h2>

            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$(x - h)^2 + (y - k)^2 = r^2$$`}</span>
            </div>

            <p>
              When to use: graphing a circle, finding its center and radius, or locating
              intersections with lines.
            </p>

            <p>
              Center {`$(h, k)$`}, radius {`$r$`}. Derived from the distance formula.
            </p>

            <ul className="lrn-list">
              <li>Right side {`$> 0$`}: real circle</li>
              <li>Right side {`$= 0$`}: single point</li>
              <li>Right side {`$< 0$`}: no real graph</li>
            </ul>

            <h2>Quadratic Inequalities</h2>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Step 1</span>
                <p className="lrn-step-content">Move all terms to one side; compare to 0.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Step 2</span>
                <p className="lrn-step-content">Factor (or find roots).</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Step 3</span>
                <p className="lrn-step-content">Sign analysis in each interval.</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Step 4</span>
                <p className="lrn-step-content">
                  Strict ({`$<, >$`}): exclude roots. Nonstrict ({`$\\leq, \\geq$`}): include roots.
                </p>
              </div>
            </div>

            <p>
              <strong>Rational inequalities:</strong> also exclude denominator zeros.
            </p>
            <p>
              <strong>No real roots:</strong> quadratic is always positive or always negative check
              the direction it opens.
            </p>

            <h2>Trivial Inequality and AM-GM</h2>

            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$x^2 \\geq 0$$`}</span>
            </div>

            <p>
              When to use: proving any expression is always nonnegative; starting point for
              inequality proofs.
            </p>

            <p>Equality only when {`$x = 0$`}. Foundation for all other inequality proofs here.</p>

            <div className="lrn-eq">
              <span>{`$$\\frac{a + b}{2} \\geq \\sqrt{ab} \\quad (a, b \\geq 0)$$`}</span>
            </div>

            <p>
              AM-GM (Arithmetic Mean Geometric Mean). When to use: bounding the average of two
              non-negative numbers below by their geometric mean; equality when {`$a = b$`}.
            </p>

            <div className="lrn-eq">
              <span>{`$$\\frac{a^2 + b^2}{2} \\geq ab$$`}</span>
            </div>

            <p>
              Squared form (holds for all real {`$a, b$`}). When to use: comparing a sum of squares
              to a product. Proved from {`$(a-b)^2 \\geq 0$`}; equality when {`$a = b$`}.
            </p>

            <div className="lrn-eq">
              <span>{`$$x + \\frac{1}{x} \\geq 2 \\quad (x > 0)$$`}</span>
            </div>

            <p>
              When to use: bounding expressions of the form {`$x + \\frac{1}{x}$`} from below for
              positive {`$x$`}.
            </p>

            <p>
              Proved from {`$(x-1)^2 \\geq 0$`} or by applying AM-GM with {`$a = \\sqrt{x}$`},{' '}
              {`$b = \\frac{1}{\\sqrt{x}}$`}.
            </p>

            <h2>Quadratic Optimization</h2>

            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$ax^2 + bx + c = a\\!\\left(x + \\frac{b}{2a}\\right)^{\\!2} + c - \\frac{b^2}{4a}$$`}</span>
            </div>

            <p>
              When to use: finding the maximum or minimum value of a quadratic without calculus.
            </p>

            <ul className="lrn-list">
              <li>
                {`$a > 0$`}: minimum value is {`$c - \\frac{b^2}{(4a)}$`} at{' '}
                {`$x = -\\frac{b}{(2a)}$`}
              </li>
              <li>
                {`$a < 0$`}: maximum value is {`$c - \\frac{b^2}{(4a)}$`} at{' '}
                {`$x = -\\frac{b}{(2a)}$`}
              </li>
              <li>
                Vertex x-coord = average of roots: {`$x = \\frac{(r+s)}{2} = -\\frac{b}{(2a)}$`}
              </li>
            </ul>

            <p>
              <strong>Multi-variable:</strong> complete the square in each variable separately;
              minimum is the sum of constants.
            </p>

            <h2>Key Warnings</h2>

            <ul className="lrn-list">
              <li>
                Vertex of {`$y = a(x+p)^2 + k$`} is {`$(-p, k)$`}, not {`$(p, k)$`}.
              </li>
              <li>
                Center of {`$(x+p)^2 + (y+q)^2 = r^2$`} is {`$(-p, -q)$`}.
              </li>
              <li>Must move all terms to one side before sign analysis.</li>
              <li>Never cross-multiply in inequalities without knowing the sign.</li>
              <li>Write proofs forwards from a known truth.</li>
            </ul>
          </>
        ]
      },

      customCss:
        '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }'
    }),
    []
  )
}

export default function QuadraticFunctionsAndPolynomialInequalities() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
