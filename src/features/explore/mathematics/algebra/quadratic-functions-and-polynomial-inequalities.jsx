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
// ─── Visualization Components ─────────────────────────────────────────────────

// ─── Config ───────────────────────────────────────────────────────────────────

function useConfig() {
  return useMemo(
    () => ({
      cssPrefix: 'qfp',
      documentTitle: 'Quadratic Functions and Polynomial Inequalities - AETHER',
      learning: {
        groupTitle: 'Coordinate Geometry and Functions',
        category: 'Module 14-15',
        title: 'Quadratic Functions and Polynomial Inequalities',
        subtitle:
          'Graphing parabolas and circles, solving inequalities, and optimizing quadratics.',
        sections: [
          // ── SECTION 0: Parabolas ──────────────────────────────────────────────
          <>
            <div className="lrn-header">
              <div>
                <span className="lrn-label">Chapter 14</span>
                <h1>Graphing Quadratics</h1>
                <p>A parabola is the curve you get when you graph a quadratic equation.</p>
                <p>
                  Every parabola has an <strong>axis of symmetry</strong> a line that splits it into
                  two mirror halves.
                </p>
                <p>
                  The point where the axis meets the parabola is the <strong>vertex</strong>.
                </p>
              </div>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`$y = x^2$`} is a U-shaped curve. What changes if you replace {`$x^2$`} with{' '}
                {`$5x^2$`}? With {`$-x^2$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>The next subsection works out both cases.</p>
              </details>
            </div>

            <h2>14.1 Parabolas</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Parabola</span>
              <div className="lrn-definition-desc">
                <p>
                  The graph of {`$y = ax^2 + bx + c$`} where {`$a \neq 0$`}.
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

            <p>To go from {`$y = ax^2 + bx + c$`} to standard form, you complete the square.</p>

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
                <p className="lrn-step-content">{`Half of $-7$ is $-\tfrac{7}{2}$. Square it: $\bigl(-\tfrac{7}{2}\bigr)^2 = \tfrac{49}{4}$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Add and subtract inside</span>
                <p className="lrn-step-content">{`$$y = \\left(x^2 - 7x + \tfrac{49}{4}\right) - \tfrac{49}{4} + 6$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Factor and simplify</span>
                <p className="lrn-step-content">{`$$y = \\left(x - \tfrac{7}{2}\right)^2 - \tfrac{25}{4}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Read off vertex</span>
                <p className="lrn-step-content">{`Vertex: $\bigl(\tfrac{7}{2}, -\tfrac{25}{4}\bigr)$. The parabola opens upward since $a = 1 > 0$.`}</p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>Why add and then subtract {`$\tfrac{49}{4}$`}? Why not just add it?</p>
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
                <p className="lrn-step-content">{`Half of $4$ is $2$; $2^2 = 4$. Add $4$ inside the parentheses. Since $-3$ multiplies the parentheses, this adds $-3 \\cdot 4 = -12$ to the right side so add $+12$ to compensate.`}</p>
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

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does adding 4 inside the parentheses force us to add {`$+12$`} outside, not{' '}
                {`$+4$`}?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The {`$-3$`} sitting in front multiplies whatever is inside, so adding 4 inside is
                  really adding {`$-3 \\cdot 4 = -12$`} to the whole expression. To cancel that
                  silently we add {`$+12$`} outside. Net change: zero.
                </p>
              </details>
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
              <div className="lrn-faded-phase">
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
              <strong>Worked example:</strong> Graph {`$x = \tfrac{y^2}{2} + 3y + 1$`} and find the
              vertex.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square in {`$y$`}</span>
                <p className="lrn-step-content">{`$$x = \tfrac{1}{2}(y^2 + 6y) + 1$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Add 9 inside (half of 6 squared)</span>
                <p className="lrn-step-content">{`$$x = \tfrac{1}{2}(y + 3)^2 + 1 - \tfrac{9}{2} = \tfrac{1}{2}(y + 3)^2 - \tfrac{7}{2}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Read vertex</span>
                <p className="lrn-step-content">{`Vertex: $\bigl(-\tfrac{7}{2}, -3\bigr)$. Since $a = \tfrac{1}{2} > 0$, the parabola opens right. The vertex is the leftmost point.`}</p>
              </div>
            </div>

            <div className="lrn-graph">
              <HorizontalParabolaViz />
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why is the vertex {`$\bigl(-\tfrac{7}{2}, -3\bigr)$`} and not{' '}
                {`$\bigl(-3, -\tfrac{7}{2}\bigr)$`}?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  In {`$x = a(y - k)^2 + h$`}, {`$h$`} is the constant outside (so it equals the
                  output {`$x$`} at the vertex) and {`$k$`} is the constant inside (so it equals the
                  input {`$y$`} at the vertex). Here {`$h = -\tfrac{7}{2}$`} and {`$k = -3$`}.
                </p>
              </details>
            </div>

            <h3>General Form and Three-Point Problems</h3>

            <p>
              When you know three points on the parabola but not its vertex, switch to the general
              form {`$y = ax^2 + bx + c$`}. Substituting each point gives a linear system in {`$a$`}
              , {`$b$`}, {`$c$`}.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Standard Form {`$y = a(x-h)^2+k$`}</span>
                <p>Vertex {`$(h,k)$`} is readable at a glance.</p>
                <p>Best when the vertex or axis of symmetry is given.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">General Form {`$y = ax^2+bx+c$`}</span>
                <p>
                  Three unknowns: {`$a$`}, {`$b$`}, {`$c$`}.
                </p>
                <p>Best when three points are known each one becomes one linear equation.</p>
              </div>
            </div>

            <p>
              <strong>Worked example:</strong> Find the equation of the parabola through{' '}
              {`$(1, 0)$`}, {`$(2, 9)$`}, and {`$(-3, 4)$`} with a vertical axis.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Write general form</span>
                <p className="lrn-step-content">{`$y = ax^2 + bx + c$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Substitute each point</span>
                <p className="lrn-step-content">{`$0 = a + b + c$, $9 = 4a + 2b + c$, $4 = 9a - 3b + c$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Solve the system</span>
                <p className="lrn-step-content">{`Subtracting the first equation from the others: $9 = 3a + b$ and $4 = 8a - 4b$. Solve to get $a = 2$, $b = 3$, $c = -5$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Write answer</span>
                <p className="lrn-step-content">{`$$y = 2x^2 + 3x - 5$$`}</p>
              </div>
            </div>

            <div className="lrn-insight">
              <p>
                Two problem-solving habits to keep: when you are stuck, list every piece of
                information you have not yet used the unused fact is usually the key. And when one
                form of the equation leads to a tangled system, switch to the other form. Standard
                form is friendly to vertex information; general form is friendly to point
                information.
              </p>
              <p>
                The forms themselves are less important than knowing how to derive and pick between
                them. Memorising the formulas can wait; understanding how they come from completing
                the square cannot.
              </p>
            </div>
          </>,

          // ── SECTION 1: Circles ────────────────────────────────────────────────
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A circle is every point at the same distance from a center. If the center is{' '}
                {`$(h, k)$`} and the radius is {`$r$`}, what equation captures that?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>The next paragraph derives it from the distance formula.</p>
              </details>
            </div>

            <h2>14.2 Circles</h2>

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
                  {`$(h, k)$`} equals {`$r$`}. The distance formula gives{' '}
                  {`$\\sqrt{(x-h)^2 + (y-k)^2} = r$`}. Squaring both sides removes the root and gives
                  the standard form.
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
                <p className="lrn-step-content">{`$$x^2 + 2x + y^2 - 3y = -\tfrac{2}{3}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square in {`$x$`}</span>
                <p className="lrn-step-content">{`$(x+1)^2 - 1$. Add 1 to the right side.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square in {`$y$`}</span>
                <p className="lrn-step-content">{`$\bigl(y - \tfrac{3}{2}\bigr)^2 - \tfrac{9}{4}$. Add $\tfrac{9}{4}$ to the right side.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Combine</span>
                <p className="lrn-step-content">{`$$(x+1)^2 + \\left(y - \tfrac{3}{2}\right)^2 = -\tfrac{2}{3} + 1 + \tfrac{9}{4} = \tfrac{31}{12}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Read off</span>
                <p className="lrn-step-content">{`Center $\bigl(-1, \tfrac{3}{2}\bigr)$, radius $\\sqrt{\tfrac{31}{12}}$.`}</p>
              </div>
            </div>

            <h3>Degenerate Circles</h3>

            <p>
              Not every equation of the form {`$Ax^2 + Bx + Ay^2 + Cy = D$`} produces a circle you
              can draw. After completing the square, the right-hand side {`$r^2$`} tells you which
              case you are in.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Three cases after completing the square</span>
              <div className="lrn-definition-desc">
                <ul className="lrn-list">
                  <li>
                    <strong>Positive:</strong> a real circle with radius {`$\\sqrt{r^2}$`}.
                  </li>
                  <li>
                    <strong>Zero:</strong> a single point both squares must equal zero, so{' '}
                    {`$(x, y) = (h, k)$`}.
                  </li>
                  <li>
                    <strong>Negative:</strong> no real graph the left side {`$(x-h)^2 + (y-k)^2$`}{' '}
                    cannot be negative.
                  </li>
                </ul>
              </div>
            </div>

            <div className="lrn-insight">
              An equation of the form {`$Ax^2 + Bx + Ay^2 + Cy = D$`} (same coefficient on {`$x^2$`}{' '}
              and {`$y^2$`}, {`$A \neq 0$`}), if it has a graph at all, has a graph that is either a
              circle or a single point. It can never produce any other shape.
            </div>

            <h3>Finding a Circle from Three Points</h3>

            <p>
              When you know three points on the circle but not the centre, use the form{' '}
              {`$x^2 + Bx + y^2 + Cy = D$`} (divide through by {`$A$`} first if needed).
              Substituting each point gives a linear equation in {`$B$`}, {`$C$`}, {`$D$`}.
            </p>

            <p>
              <strong>Worked example:</strong> Find the circle through {`$(0, 0)$`}, {`$(3, -1)$`},
              and {`$(-1, 7)$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Write general form</span>
                <p className="lrn-step-content">{`$x^2 + Bx + y^2 + Cy = D$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Substitute {`$(0,0)$`}</span>
                <p className="lrn-step-content">{`$0 = D$, so $D = 0$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">
                  Substitute {`$(3,-1)$`} and {`$(-1,7)$`}
                </span>
                <p className="lrn-step-content">{`$3B - C = -10$ and $-B + 7C = -50$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Solve and convert to standard form</span>
                <p className="lrn-step-content">{`$B = -6$, $C = -8$. After completing the square: $(x-3)^2 + (y-4)^2 = 25$.`}</p>
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

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Substitute {`$x = y + 7$`} into the circle</span>
                <p className="lrn-step-content">{`$(y+7)^2 + y^2 - 4(y+7) + 12y + 27 = 0$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Expand and simplify</span>
                <p className="lrn-step-content">{`$2y^2 + 22y + 48 = 0 \\Rightarrow y^2 + 11y + 24 = 0$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Factor</span>
                <p className="lrn-step-content">{`$(y + 3)(y + 8) = 0 \\Rightarrow y = -3$ or $y = -8$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Find {`$x$`} and write solutions</span>
                <p className="lrn-step-content">{`$(4, -3)$ and $(-1, -8)$.`}</p>
              </div>
            </div>
          </>,

          // ── SECTION 2: Quadratic Inequalities ────────────────────────────────
          <>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`$(x+2)(x-5) = 0$`} when {`$x = -2$`} or {`$x = 5$`}. For which {`$x$`} is{' '}
                {`$(x+2)(x-5) \\geq 0$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Two numbers multiply to something nonnegative when they share a sign (both
                  positive or both negative). That happens for {`$x \\geq 5$`} and for{' '}
                  {`$x \\leq -2$`}.
                </p>
              </details>
            </div>

            <h2>15.1 Quadratic Inequalities</h2>

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
                compared to a nonzero number. For example, {`$(x-3)(x-1) > 2$`} is not solved by
                asking where each factor exceeds something expand, subtract 2, refactor, then
                analyse signs.
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
                <p className="lrn-step-content">{`The inequality is nonstrict, so the roots themselves count: $$x \\leq -2 \\quad \text{or} \\quad x \\geq 5.$$`}</p>
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

            <div className="lrn-callout">
              <span className="lrn-callout-label">Interval notation</span>
              <p>
                The solution {`$x \\leq -2$`} or {`$x \\geq 5$`} is written{' '}
                {`$(-\\infty, -2] \\cup [5, \\infty)$`}. The symbol {`$\\cup$`} means "union" every
                number that lies in at least one of the two intervals. Its counterpart {`$\\cap$`}{' '}
                ("intersection") means the numbers in both: for example,{' '}
                {`$[3, 7] \\cap [5, 11] = [5, 7]$`}.
              </p>
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

          // ── SECTION 3: Beyond Quadratics ─────────────────────────────────────
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

            <h2>15.2 Beyond Quadratics</h2>

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
                <p className="lrn-step-content">{`$x = \tfrac{1}{2}$, $x = -1$, $x = -7$. These create four intervals.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Build sign table</span>
                <p className="lrn-step-content">{`Intervals: $(-\\infty, -7)$, $(-7, -1)$, $(-1, \tfrac{1}{2})$, $(\tfrac{1}{2}, \\infty)$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Record signs</span>
                <p className="lrn-step-content">{`$(2x-1)$: $-$, $-$, $-$, $+$. $(x+1)$: $-$, $-$, $+$, $+$. $(x+7)$: $-$, $+$, $+$, $+$. Product: $-$, $+$, $-$, $+$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Solution (strict, so roots excluded)</span>
                <p className="lrn-step-content">{`$$-7 < x < -1 \\quad \text{or} \\quad x > \tfrac{1}{2}$$`}</p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>Why does the product flip sign every time {`$x$`} crosses a root?</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  At each root exactly one factor changes sign. Switching one factor from {`$+$`} to{' '}
                  {`$-$`} (or back) flips the parity of the count of negative factors, and the
                  product's sign is determined by that parity. So crossing a root always flips the
                  product.
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
              <strong>Worked example:</strong> Solve {`$(x+3)\frac{(1-x)}{(x-5)} \\geq 0$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Identify critical values</span>
                <p className="lrn-step-content">{`Numerator zeros: $x = -3$, $x = 1$. Denominator zero: $x = 5$ (excluded).`}</p>
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
                <p className="lrn-step-content">{`Multiply numerator signs, divide by denominator sign in each interval: $(-)\frac{(+)}{(-)} = +$, $(+)\frac{(+)}{(-)} = -$, $(+)\frac{(-)}{(-)} = +$, $(+)\frac{(-)}{(+)} = -$. The fraction is positive on $(-\\infty, -3)$ and $(1, 5)$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Write solution</span>
                <p className="lrn-step-content">{`Numerator zeros $x = -3$ and $x = 1$ are included (nonstrict); $x = 5$ is excluded (denominator zero). Final answer: $$x \\leq -3 \\quad \text{or} \\quad 1 \\leq x < 5.$$`}</p>
              </div>
            </div>

            <p>
              <strong>Worked example:</strong> Solve {`$\tfrac{2}{x-2} - \tfrac{2}{x+3} > -1$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Move everything to one side</span>
                <p className="lrn-step-content">{`$$\tfrac{2}{x-2} - \tfrac{2}{x+3} + 1 > 0$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Common denominator {`$(x-2)(x+3)$`}</span>
                <p className="lrn-step-content">{`Numerator: $2(x+3) - 2(x-2) + (x-2)(x+3) = 2x+6 - 2x+4 + x^2 + x - 6 = x^2 + x + 4$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Check if numerator has real roots</span>
                <p className="lrn-step-content">{`Discriminant: $1 - 16 = -15 < 0$. So $x^2 + x + 4 > 0$ always.`}</p>
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

          // ── SECTION 4: Trivial Inequality ─────────────────────────────────────
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

            <h2>15.3 The Trivial Inequality</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Trivial Inequality</span>
              <div className="lrn-definition-desc">
                <p>{`$$x^2 \\geq 0 \\quad \text{for every real } x$$`}</p>
                <p>Equality holds only when {`$x = 0$`}.</p>
                <p>
                  It looks too obvious to name, but this single fact is the seed for almost every
                  inequality proof you will ever write.
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
              <span className="lrn-definition-term">AM-GM Inequality</span>
              <div className="lrn-definition-desc">
                <p>{`$$\frac{a^2 + b^2}{2} \\geq ab \\quad \text{for all real } a, b$$`}</p>
                <p>Equality holds when {`$a = b$`}.</p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof</span>
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
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the proof open with {`$(a - b)^2 \\geq 0$`} instead of with the goal{' '}
                {`$\tfrac{a^2+b^2}{2} \\geq ab$`}?
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
              <strong>Worked example:</strong> Prove {`$x + \tfrac{1}{x} \\geq 2$`} for all positive{' '}
              {`$x$`}.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">
                Two Proofs of {`$x + \frac{1}{x} \\geq 2$`}
              </span>
              <div className="lrn-definition-desc">
                <p>
                  <strong>Solution 1 mimic the AM-GM proof:</strong>
                </p>
                <ol className="lrn-list">
                  <li>{`Start: $(x - 1)^2 \\geq 0$.`}</li>
                  <li>{`Expand: $x^2 - 2x + 1 \\geq 0$.`}</li>
                  <li>{`Add $2x$: $x^2 + 1 \\geq 2x$.`}</li>
                  <li>{`Divide by $x$ (positive, so inequality stays): $x + \tfrac{1}{x} \\geq 2$.`}</li>
                </ol>
                <p>
                  <strong>Solution 2 use AM-GM directly:</strong>
                </p>
                <ol className="lrn-list">
                  <li>{`Let $a = \\sqrt{x}$, $b = \tfrac{1}{\\sqrt{x}}$.`}</li>
                  <li>{`AM-GM gives $\tfrac{a^2 + b^2}{2} \\geq ab$, i.e., $\tfrac{x + \tfrac{1}{x}}{2} \\geq 1$.`}</li>
                  <li>{`Multiply by 2: $x + \tfrac{1}{x} \\geq 2$.`}</li>
                </ol>
              </div>
            </div>

            <div className="lrn-insight">
              Once you prove an inequality, you can use it as a step in other proofs. AM-GM is a
              direct tool that, once proved from the Trivial Inequality, becomes a reusable building
              block.
            </div>
          </>,

          // ── SECTION 5: Quadratic Optimization ────────────────────────────────
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

            <h2>15.4★ Quadratic Optimization</h2>

            <p>
              For any quadratic {`$f(x) = ax^2 + bx + c$`}, the largest or smallest value of {`$f$`}{' '}
              is at the vertex. Which one depends on the sign of {`$a$`}.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Where the optimum lives</span>
              <div className="lrn-definition-desc">
                <ul className="lrn-list">
                  <li>{`$a > 0$`}: parabola opens up vertex is the minimum.</li>
                  <li>{`$a < 0$`}: parabola opens down vertex is the maximum.</li>
                  <li>Vertex x-coordinate: {`$x = -\\dfrac{b}{2a}$`}.</li>
                </ul>
              </div>
            </div>

            <div className="lrn-graph">
              <InteractiveOptimizationViz />
            </div>

            <h3>Finding Maximum and Minimum by Completing the Square</h3>

            <p>
              <strong>Worked example:</strong> Find the largest value of {`$-x^2 + 5x - 7$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Factor out {`$-1$`} from x-terms</span>
                <p className="lrn-step-content">{`$$-(x^2 - 5x) - 7$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square inside</span>
                <p className="lrn-step-content">{`Half of $-5$ is $-\tfrac{5}{2}$; $\bigl(-\tfrac{5}{2}\bigr)^2 = \tfrac{25}{4}$. Adding $\tfrac{25}{4}$ inside adds $-\tfrac{25}{4}$ outside.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Standard form</span>
                <p className="lrn-step-content">{`$$-\\left(x - \tfrac{5}{2}\right)^2 - 7 + \tfrac{25}{4} = -\\left(x - \tfrac{5}{2}\right)^2 - \tfrac{3}{4}$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Find maximum</span>
                <p className="lrn-step-content">{`The square is always nonnegative, so $-(\\cdot)^2 \\leq 0$. Maximum is $-\tfrac{3}{4}$ when $x = \tfrac{5}{2}$.`}</p>
              </div>
            </div>

            <p>
              <strong>Worked example:</strong> Find the smallest value of {`$2x^2 + 8x - 9$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Factor out 2</span>
                <p className="lrn-step-content">{`$$2(x^2 + 4x) - 9$$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Complete the square</span>
                <p className="lrn-step-content">{`$2(x + 2)^2 - 8 - 9 = 2(x+2)^2 - 17$`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Minimum</span>
                <p className="lrn-step-content">{`Since $2(x+2)^2 \\geq 0$, minimum is $-17$ at $x = -2$.`}</p>
              </div>
            </div>

            <h3>Vertex Formula and Average of Roots</h3>

            <p>
              The vertex x-coordinate of {`$ax^2 + bx + c$`} is {`$x = -\\dfrac{b}{2a}$`}, which is
              the same number as the average {`$\\dfrac{r + s}{2}$`} of the two roots {`$r$`} and{' '}
              {`$s$`}. This identity holds even when the roots are complex the algebra of Vieta's
              formulas does not care whether the roots are real.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Derivation: General Quadratic Minimum</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Start with $ax^2 + bx + c$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Factor: $a\\!\\left(x^2 + \\dfrac{b}{a}x\right) + c$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`Complete the square: $a\\!\\left(x + \\dfrac{b}{2a}\right)^2 + c - \\dfrac{b^2}{4a}$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">{`The squared term is nonnegative. When $a > 0$, minimum is $c - \\dfrac{b^2}{4a}$ at $x = -\\dfrac{b}{2a}$.`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Completing the square</span>
                <p>
                  Always works, even when the roots are irrational or complex, and hands you the
                  optimum value at the same time as the optimum location.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Averaging the roots</span>
                <p>
                  Solve {`$ax^2 + bx + c = 0$`} and take {`$\tfrac{r+s}{2}$`}. Elegant when the
                  roots are easy to read off the factored revenue example below is exactly this
                  case.
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                By Vieta's formulas the sum of the roots is {`$r + s = -\frac{b}{a}$`}, so their
                average is {`$-\frac{b}{(2a)}$`} the same as the vertex formula. Geometrically, the
                axis of symmetry splits the parabola in half, so it must lie exactly between the two
                x-intercepts.
              </p>
            </div>

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
                <p className="lrn-step-content">{`$2y^2 - 14y = 2(y^2 - 7y) = 2\bigl(y - \tfrac{7}{2}\bigr)^2 - \tfrac{49}{2}$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Combine</span>
                <p className="lrn-step-content">{`$(x+2)^2 - 4 + 2\bigl(y - \tfrac{7}{2}\bigr)^2 - \tfrac{49}{2} + 1 = (x+2)^2 + 2\bigl(y-\tfrac{7}{2}\bigr)^2 - \tfrac{55}{2}$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Minimum</span>
                <p className="lrn-step-content">{`Both squares are nonnegative. Minimum is $-\tfrac{55}{2}$ at $x = -2$, $y = \tfrac{7}{2}$.`}</p>
              </div>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>Find the largest value of {`$-3a^2 - 36a + 2$`}.</p>
                <ol className="lrn-list">
                  <li>{`Factor out $-3$: $-3(a^2 + 12a) + 2$.`}</li>
                  <li>{`Complete the square: $-3(a + 6)^2 + 108 + 2 = -3(a+6)^2 + 110$.`}</li>
                  <li>{`Since $-3(\\cdot)^2 \\leq 0$, maximum is $110$ at $a = -6$.`}</li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <ol className="lrn-list">
                  <li>{`Factor $-2$ from the $x$-terms of $-2x^2 + 20x - 5$: $-2(x^2 - ?) - 5$.`}</li>
                  <li>Complete the square inside the parentheses. What do you add?</li>
                  <li>Adjust the constant outside. Write in standard form and find the maximum.</li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>Find the maximum value of {`$-4x^2 + 16x + 3$`}.</p>
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
                <p className="lrn-step-content">{`The coefficient of $x^2$ is negative, so the maximum is at $x = \tfrac{-20 + 100}{2} = 40$. Optimal price: $\\$20 + \\$40 = \\$60$. Maximum revenue: $R(40) = 100 \\cdot 60 \\cdot 60 = \\$360{,}000$.`}</p>
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
          a: 'The vertex is {`$(4, 7)$`}. In standard form {`$y = a(x-h)^2 + k$`}, the vertex is {`$(h, k)$`}. Here {`$h = 4$`} (note: the formula has {`$(x - h)$`}, so {`$h = 4$`} even though you see {`$-4$`}) and {`$k = 7$`}. The parabola opens upward since {`$a = 3 > 0$`}, so the vertex is the minimum point.'
        },
        {
          q: 'A parabola has equation {`$y = x^2 + 6x + 2$`}. Find its vertex by completing the square.',
          a: 'Vertex is {`$(-3, -7)$`}. Steps: (1) Group x-terms: {`$y = (x^2 + 6x) + 2$`}. (2) Half of 6 is 3; {`$3^2 = 9$`}. Add and subtract: {`$y = (x^2 + 6x + 9) - 9 + 2$`}. (3) Factor: {`$y = (x + 3)^2 - 7$`}. (4) Read vertex: {`$(-3, -7)$`}. The minimum value is {`$-7$`} at {`$x = -3$`}.'
        },
        {
          q: 'Solve the inequality {`$(x + 2)(x - 5) \\geq 0$`}.',
          a: 'Solution: {`$x \\leq -2$`} or {`$x \\geq 5$`}. (1) Roots: {`$x = -2$`} and {`$x = 5$`}. (2) Sign analysis: for {`$x < -2$`}, both factors are negative, product is positive. For {`$-2 < x < 5$`}, first factor positive, second negative, product is negative. For {`$x > 5$`}, both positive, product positive. (3) The inequality is {`$\\geq 0$`} (nonstrict), so roots are included. Solution: {`$(-\\infty, -2] \\cup [5, \\infty)$`}.'
        },
        {
          q: 'A student writes: "The center of {`$(x + 3)^2 + (y - 1)^2 = 16$`} is {`$(3, 1)$`}." Identify and fix the error.',
          a: 'The center is {`$(-3, 1)$`}, not {`$(3, 1)$`}. The standard form is {`$(x - h)^2 + (y - k)^2 = r^2$`}. When you see {`$(x + 3)^2$`}, that equals {`$(x - (-3))^2$`}, so {`$h = -3$`}. The {`$y$`} part {`$(y - 1)^2$`} correctly gives {`$k = 1$`}. Always flip the sign of what you see in the formula to get the center coordinate.'
        },
        {
          q: 'Explain why {`$x^2 - 6x + 13 \\leq 0$`} has no solutions.',
          a: 'The quadratic {`$x^2 - 6x + 13 = (x-3)^2 + 4$`}. Since {`$(x-3)^2 \\geq 0$`} always (Trivial Inequality), adding 4 gives {`$(x-3)^2 + 4 \\geq 4 > 0$`}. The expression is always strictly positive it never reaches zero or below. Therefore {`$\\leq 0$`} has no solutions. The graph is a parabola lying entirely above the x-axis.'
        },
        {
          q: 'Find the equation of the parabola with vertex {`$(4, -3)$`}, horizontal axis of symmetry, passing through {`$(5, -6)$`}.',
          a: 'Equation: {`$x = \tfrac{1}{9}(y+3)^2 + 4$`}. (1) Horizontal axis means standard form {`$x = a(y - k)^2 + h$`}. With vertex {`$(4, -3)$`}: {`$x = a(y + 3)^2 + 4$`}. (2) Substitute the point {`$(5, -6)$`}: {`$5 = a(-6 + 3)^2 + 4 = 9a + 4$`}. (3) Solve: {`$9a = 1$`}, so {`$a = \tfrac{1}{9}$`}. (4) Verify by plugging back in: {`$\tfrac{1}{9}(-6+3)^2 + 4 = \tfrac{1}{9}(9) + 4 = 1 + 4 = 5$`}. ✓'
        },
        {
          q: 'Solve {`$r^2 - 8r < -12$`}.',
          a: 'Solution: {`$2 < r < 6$`}. (1) Move to one side: {`$r^2 - 8r + 12 < 0$`}. (2) Factor: {`$(r - 2)(r - 6) < 0$`}. (3) Roots: {`$r = 2$`} and {`$r = 6$`}. (4) Sign analysis: the product is negative only between the roots. (5) Inequality is strict ({`$<$`}), so roots are excluded. Solution: {`$(2, 6)$`}.'
        },
        {
          q: 'Prove {`$\tfrac{a^2 + b^2}{2} \\geq ab$`} for all real {`$a$`} and {`$b$`}.',
          a: '(1) Start from the Trivial Inequality: {`$(a - b)^2 \\geq 0$`}. This is always true. (2) Expand: {`$a^2 - 2ab + b^2 \\geq 0$`}. (3) Add {`$2ab$`} to both sides (valid because adding the same thing preserves the inequality): {`$a^2 + b^2 \\geq 2ab$`}. (4) Divide both sides by 2 (positive, so inequality direction unchanged): {`$\tfrac{a^2 + b^2}{2} \\geq ab$`}. Equality holds when {`$a = b$`}, making {`$(a-b)^2 = 0$`}.'
        },
        {
          q: 'What is the minimum value of {`$2x^2 + 8x - 9$`}? At what {`$x$`} does it occur?',
          a: 'Minimum value is {`$-17$`} at {`$x = -2$`}. (1) Factor out 2 from x-terms: {`$2(x^2 + 4x) - 9$`}. (2) Complete the square: half of 4 is 2; {`$2^2 = 4$`}. Add 4 inside: {`$2(x + 2)^2 - 2 \\cdot 4 - 9 = 2(x+2)^2 - 17$`}. (3) Since {`$2(x+2)^2 \\geq 0$`}, the minimum is {`$-17$`} when {`$(x+2)^2 = 0$`}, i.e., {`$x = -2$`}.'
        },
        {
          q: 'Solve {`$(2x-1)(x+1)(x+7) > 0$`}.',
          a: 'Solution: {`$-7 < x < -1$`} or {`$x > \tfrac{1}{2}$`}. (1) Roots: {`$x = \tfrac{1}{2}$`}, {`$x = -1$`}, {`$x = -7$`}. Four intervals. (2) Sign table pick test value in each interval: {`$x = -10$`}: {`$(-)(-)(-) = -$`}. {`$x = -4$`}: {`$(-)(-)( +) = +$`}. {`$x = 0$`}: {`$(-)( +)( +) = -$`}. {`$x = 1$`}: {`$(+)(+)(+) = +$`}. (3) We want {`$> 0$`} (positive), so take intervals 2 and 4, excluding roots. Solution: {`$(-7, -1) \\cup (\tfrac{1}{2}, \\infty)$`}.'
        },
        {
          q: 'Is {`$3x^2 + 6x + 3y^2 - 9y = -2$`} a circle? If so, find its center and radius.',
          a: 'Yes. Center {`$(-1, \tfrac{3}{2})$`}, radius {`$\\sqrt{\tfrac{31}{12}}$`}. (1) Divide by 3: {`$x^2 + 2x + y^2 - 3y = -\tfrac{2}{3}$`}. (2) Complete square in {`$x$`}: add 1 to both sides {`$(x+1)^2$`}. (3) Complete square in {`$y$`}: add {`$\tfrac{9}{4}$`} to both sides {`$(y - \tfrac{3}{2})^2$`}. (4) Right side: {`$-\tfrac{2}{3} + 1 + \tfrac{9}{4} = \tfrac{31}{12} > 0$`}. It is a real circle.'
        },
        {
          q: 'Transfer: A ball is thrown upward with height {`$h(t) = -5t^2 + 20t + 3$`}. Find the maximum height.',
          a: 'Maximum height is {`$23$`} metres at {`$t = 2$`} seconds. (1) This is a downward-opening quadratic in {`$t$`}; the vertex gives the maximum. (2) Complete the square: {`$-5(t^2 - 4t) + 3 = -5(t - 2)^2 + 20 + 3 = -5(t-2)^2 + 23$`}. (3) Maximum is 23 when {`$t = 2$`}. The technique is identical to finding the vertex of any quadratic the physics context does not change the algebra.'
        },
        {
          q: 'Solve {`$(x+3)\frac{(1-x)}{(x-5)} \\geq 0$`}.',
          a: 'Solution: {`$x \\leq -3$`} or {`$1 \\leq x < 5$`}. (1) Critical values: numerator zeros {`$x = -3$`} and {`$x = 1$`}; denominator zero {`$x = 5$`} (excluded). (2) Four intervals. Sign table: {`$(-\\infty,-3)$`}: {`$(-)\frac{( +)}{(-)} = +$`}. {`$(-3, 1)$`}: {`$(+)\frac{(+)}{(-)} = -$`}. {`$(1, 5)$`}: {`$(+)\frac{(-)}{(-)} = +$`}. {`$(5, \\infty)$`}: {`$(+)\frac{(-)}{(+)} = -$`}. (3) We need {`$\\geq 0$`}: take intervals where sign is positive, including numerator zeros but excluding {`$x = 5$`}.'
        },
        {
          q: 'Elaborate: Why is the vertex x-coordinate {`$-\frac{b}{(2a)}$`} always equal to the average of the roots?',
          a: "By Vieta's formulas, for {`$ax^2 + bx + c = a(x-r)(x-s)$`}, the sum of the roots is {`$r + s = -\frac{b}{a}$`}. Their average is {`$\frac{(r+s)}{2} = -\frac{b}{(2a)}$`}. This is the same as the vertex formula. Geometrically: the axis of symmetry of the parabola bisects the segment between the two x-intercepts, so it must lie at the average of the root positions. This holds even when the roots are complex the formula {`$-\frac{b}{(2a)}$`} still gives the real x-coordinate of the vertex."
        },
        {
          q: 'Predict: Without computing, what do you expect the shape of the solution set of {`$x^2 - 4x + 4 < 0$`} to be?',
          a: 'No solutions. {`$x^2 - 4x + 4 = (x-2)^2$`}. A perfect square is always nonnegative ({`$\\geq 0$`}), never strictly negative. So the inequality {`$< 0$`} has no solutions. The graph is a parabola that touches the x-axis at exactly one point {`$(2, 0)$`} and lies entirely above the x-axis everywhere else.'
        },
        {
          q: 'Find the circle through {`$(0, 0)$`}, {`$(3, -1)$`}, and {`$(-1, 7)$`}.',
          a: 'Equation: {`$(x-3)^2 + (y-4)^2 = 25$`}. (1) General form with {`$D = 0$`} (from substituting {`$(0,0)$`}): {`$x^2 + Bx + y^2 + Cy = 0$`}. (2) Substitute {`$(3,-1)$`}: {`$9 + 3B + 1 - C = 0 \\Rightarrow 3B - C = -10$`}. (3) Substitute {`$(-1, 7)$`}: {`$1 - B + 49 + 7C = 0 \\Rightarrow -B + 7C = -50$`}. (4) Solve: {`$B = -6$`}, {`$C = -8$`}. (5) Complete the square: center {`$(3, 4)$`}, radius {`$5$`}.'
        },
        {
          q: 'Transfer: A rectangular pen has perimeter 40 m. Express the area as a quadratic and find the dimensions that maximize area.',
          a: 'Maximum area is {`$100$`} sq m, achieved with a {`$10 \times 10$`} square. (1) Let width {`$= w$`}, length {`$= 20 - w$`} (since {`$2w + 2l = 40$`}). (2) Area: {`$A = w(20-w) = -w^2 + 20w$`}. (3) Complete the square: {`$A = -(w-10)^2 + 100$`}. (4) Maximum is 100 when {`$w = 10$`}, so {`$l = 10$`}. The quadratic optimization technique applies directly to geometry problems involving fixed perimeter.'
        },
        {
          q: 'Solve {`$\tfrac{2}{x-2} - \tfrac{2}{x+3} > -1$`}.',
          a: 'Solution: {`$x \\in (-\\infty, -3) \\cup (2, \\infty)$`}. (1) Move everything to one side: {`$\tfrac{2}{x-2} - \tfrac{2}{x+3} + 1 > 0$`}. (2) Common denominator {`$(x-2)(x+3)$`}: numerator {`$= 2(x+3) - 2(x-2) + (x-2)(x+3) = 10 + x^2 + x - 6 = x^2 + x + 4$`}. (3) Discriminant of numerator: {`$1 - 16 = -15 < 0$`}; numerator always positive. (4) Sign of fraction = sign of denominator. Denominator positive when {`$x < -3$`} or {`$x > 2$`}. (5) Exclude {`$x = -3$`} and {`$x = 2$`} (denominator zeros).'
        },
        {
          q: 'Prove {`$x + \tfrac{1}{x} \\geq 2$`} for all positive {`$x$`}.',
          a: '(1) Start from the Trivial Inequality: {`$(x-1)^2 \\geq 0$`}. This is always true. (2) Expand: {`$x^2 - 2x + 1 \\geq 0$`}. (3) Add {`$2x$`}: {`$x^2 + 1 \\geq 2x$`}. (4) Since {`$x > 0$`}, divide both sides by {`$x$`} (inequality direction stays): {`$x + \tfrac{1}{x} \\geq 2$`}. Equality holds when {`$(x-1)^2 = 0$`}, i.e., {`$x = 1$`}. The crucial step is dividing by {`$x$`} we must know {`$x > 0$`} for this to be valid.'
        },
        {
          q: 'Self-explain: In the inequality {`$(x+3)\frac{(1-x)}{(x-5)} \\geq 0$`}, why is {`$x = 5$`} excluded but {`$x = -3$`} and {`$x = 1$`} are included?',
          a: '{`$x = 5$`} makes the denominator zero, so the fraction is undefined there it cannot satisfy any inequality. {`$x = -3$`} and {`$x = 1$`} make the numerator zero, so the fraction equals zero. Since the inequality is {`$\\geq 0$`} (nonstrict), zero is a valid solution. The rule is: denominator zeros are always excluded; numerator zeros are included only for nonstrict inequalities ({`$\\leq$`} or {`$\\geq$`}).'
        },
        {
          q: 'Find the smallest value of {`$x^2 + 4x + 2y^2 - 14y + 1$`}.',
          a: 'Minimum is {`$-\tfrac{55}{2}$`} at {`$x = -2$`}, {`$y = \tfrac{7}{2}$`}. (1) Complete square in {`$x$`}: {`$(x+2)^2 - 4$`}. (2) Complete square in {`$y$`}: {`$2(y-\tfrac{7}{2})^2 - \tfrac{49}{2}$`}. (3) Sum: {`$(x+2)^2 + 2(y-\tfrac{7}{2})^2 - 4 - \tfrac{49}{2} + 1 = (x+2)^2 + 2(y-\tfrac{7}{2})^2 - \tfrac{55}{2}$`}. (4) Both squared terms are nonnegative; minimum is {`$-\tfrac{55}{2}$`} when both equal zero.'
        },
        {
          q: 'Elaborate: Why does completing the square work to find the vertex what makes the squared term the key?',
          a: 'The Trivial Inequality guarantees that {`$a(x-h)^2 \\geq 0$`} when {`$a > 0$`} (or {`$\\leq 0$`} when {`$a < 0$`}). The squared term hits its extreme value (zero) at exactly one point: {`$x = h$`}. At that point the whole expression reaches its minimum (when {`$a > 0$`}) or maximum (when {`$a < 0$`}). The constant {`$k$`} is what remains when the squared term is zero that is the optimum value. The technique works because real squares can never go below zero, and this is a fundamental property of real numbers, not an algebraic trick.'
        },
        {
          q: 'Find the intersection of the line {`$x - y = 7$`} and the circle {`$x^2 + y^2 - 4x + 12y + 27 = 0$`}.',
          a: 'Intersections at {`$(4, -3)$`} and {`$(-1, -8)$`}. (1) From the line: {`$x = y + 7$`}. (2) Substitute into the circle: {`$(y+7)^2 + y^2 - 4(y+7) + 12y + 27 = 0$`}. (3) Expand: {`$y^2 + 14y + 49 + y^2 - 4y - 28 + 12y + 27 = 0 \\Rightarrow 2y^2 + 22y + 48 = 0$`}. (4) Divide by 2: {`$y^2 + 11y + 24 = 0 \\Rightarrow (y+3)(y+8) = 0$`}. (5) {`$y = -3 \\Rightarrow x = 4$`}; {`$y = -8 \\Rightarrow x = -1$`}.'
        },
        {
          q: 'Transfer: Describe a real-world scenario where knowing the vertex of a parabola gives you actionable information.',
          a: 'One example: a company selling a product at price {`$p$`} has revenue {`$R = -q \\cdot p^2 + c \\cdot p$`} (a downward parabola). The vertex gives the price that maximizes revenue. Another example: a ball thrown upward has height modeled by a downward-opening quadratic; the vertex gives the maximum height and the time at which it occurs. In both cases, completing the square or using {`$x = -\frac{b}{(2a)}$`} gives the optimal value without guessing. The vertex is the decision point the output at the vertex is the best achievable outcome.'
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
              <span>{`$$x_{\text{vertex}} = -\frac{b}{2a}$$`}</span>
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
              <span>{`$$\frac{a^2 + b^2}{2} \\geq ab$$`}</span>
            </div>

            <p>When to use: comparing a sum of squares to a product; equality when {`$a = b$`}.</p>

            <p>
              AM-GM: proved from {`$(a-b)^2 \\geq 0$`}. Equality when {`$a = b$`}.
            </p>

            <div className="lrn-eq">
              <span>{`$$x + \frac{1}{x} \\geq 2 \\quad (x > 0)$$`}</span>
            </div>

            <p>
              When to use: bounding expressions of the form {`$x + \frac{1}{x}$`} from below for
              positive {`$x$`}.
            </p>

            <p>
              Proved from {`$(x-1)^2 \\geq 0$`} or by applying AM-GM with {`$a = \\sqrt{x}$`},{' '}
              {`$b = \frac{1}{\\sqrt{x}}$`}.
            </p>

            <h2>Quadratic Optimization</h2>

            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$ax^2 + bx + c = a\\!\\left(x + \frac{b}{2a}\right)^{\\!2} + c - \frac{b^2}{4a}$$`}</span>
            </div>

            <p>
              When to use: finding the maximum or minimum value of a quadratic without calculus.
            </p>

            <ul className="lrn-list">
              <li>
                {`$a > 0$`}: minimum value is {`$c - \frac{b^2}{(4a)}$`} at{' '}
                {`$x = -\frac{b}{(2a)}$`}
              </li>
              <li>
                {`$a < 0$`}: maximum value is {`$c - \frac{b^2}{(4a)}$`} at{' '}
                {`$x = -\frac{b}{(2a)}$`}
              </li>
              <li>
                Vertex x-coord = average of roots: {`$x = \frac{(r+s)}{2} = -\frac{b}{(2a)}$`}
              </li>
            </ul>

            <p>
              <strong>Multi-variable:</strong> complete the square in each variable independently;
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
              <li>Proofs must be written forwards from a known truth.</li>
            </ul>
          </>
        ]
      },

      customCss:
        '.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }'
    }),
    []
  )
}

export default function QuadraticFunctionsAndPolynomialInequalities() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
