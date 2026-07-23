import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  VariedPathAction,
  GeodesicStraightLine,
  CatenaryProfile,
  BrachistochroneCycloid
} from '../../../../../components/viz'

export default function VariationalProblemsBeyondMechanics() {
  const config = {
    cssPrefix: 'vpbm',
    documentTitle: 'Variational Problems Beyond Mechanics - AETHER',
    learning: {
      category: 'Module 2',
      groupTitle: 'Lagrangian Mechanics and Variational Principles',
      title: 'Variational Problems Beyond Mechanics',
      subtitle:
        'The Euler-Lagrange equation solves geometric and physical optimization problems far beyond classical mechanics.',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>What Is a Functional?</h2>

            <p>
              You know how to minimize a function: take a derivative, set it to zero, solve. But
              some problems ask for something harder. Instead of a single number, the unknown is an
              entire curve. You need the path of shortest length, smallest surface, or fastest
              descent. For this, ordinary derivatives are not enough.
            </p>
            <p>
              A <strong>functional</strong> takes a whole curve as input and returns one number. Arc
              length is a functional: hand it a path, get back its length. Travel time is a
              functional: hand it a route, get back how long the journey takes. Ordinary calculus
              minimizes functions of numbers. Variational calculus minimizes functionals of curves.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Functional</span>
              <div className="lrn-definition-desc">
                <p>
                  {`A functional $J$ assigns one number to each curve. The standard form is $J = \\int_{x_1}^{x_2} f(y,\\dot{y},x)\\, dx$, where $y(x)$ is the unknown curve, $\\dot{y} = dy/dx$, and $f$ combines position, slope, and the integration variable into a single number.`}
                </p>
              </div>
            </div>

            <p>
              <strong>When to use the calculus of variations:</strong> reach for it whenever the
              unknown is an entire curve, not just one number. Shortest path, minimum area, fastest
              descent, and geodesics (the shortest path along a curved surface, like a sphere) are
              all problems of this type.
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`A functional's input is a whole curve $y(x)$, an infinite list of numbers, so ordinary derivatives are not enough. The calculus of variations is the tool built to handle this larger kind of input.`}
              </p>
            </div>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Why This Matters Beyond Mechanics</span>
              <p>
                {`The same variational technique describes non-mechanical systems, such as field theory, by casting them in the mathematical form of classical mechanics. The three examples on this page (shortest path, minimum surface of revolution, brachistochrone) are purely geometric or physical, yet all reduce to one equation: the Euler-Lagrange equation.`}
              </p>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Before any calculation: among all smooth curves connecting two points in the plane, which one minimizes the arc-length functional $I = \\int \\sqrt{1+\\dot{y}^2}\\, dx$?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  A straight line. This is the geometric claim that the shortest distance between
                  two points is a straight line. The derivation below will confirm it: the
                  Euler-Lagrange equation forces the slope to be constant, which is exactly a
                  straight line.
                </p>
              </details>
            </div>

            <div>
              <VariedPathAction />
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>The Euler-Lagrange Equation</h2>

            <p>
              <strong>When to use this:</strong> whenever you have a functional{' '}
              {`$J = \\int f(y, \\dot{y}, x)\\, dx$`} and need the curve that makes it stationary.
              Plug your integrand {`$f$`} into the Euler-Lagrange equation and solve the resulting
              ODE.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`In ordinary calculus, $df/dx = 0$ finds a stationary point. What do you think the analogous condition should look like for a functional $J[y]$ when we vary the curve $y$?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The analogue is $\\delta J = 0$: the functional must not change to first order when you make any small change to the curve. The Euler-Lagrange equation is the ODE that encodes exactly this condition. You reach it by introducing a one-parameter family of curves $y(x,\\alpha) = y(x,0) + \\alpha\\,\\eta(x)$ and demanding stationarity at $\\alpha = 0$.`}
                </p>
              </details>
            </div>

            <h3>The Equation You Will Use</h3>

            <p>
              You derived this equation in full when you first met it: introduce a one-parameter
              family of competitor curves, demand that the functional be stationary at the true
              path, integrate by parts, and apply the Fundamental Lemma. The result is the tool this
              whole page runs on:
            </p>

            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\frac{\\partial f}{\\partial y} - \\frac{d}{dx}\\!\\left(\\frac{\\partial f}{\\partial \\dot{y}}\\right) = 0$$`}</span>
            </div>

            <p>
              {`To use it, compute the two partial derivatives $\\partial f/\\partial y$ (treat $y$, $\\dot{y}$, $x$ as independent) and $\\partial f/\\partial \\dot{y}$, then solve the resulting ODE for the curve $y(x)$. Two definitions from that derivation come up again below.`}
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">The Fundamental Lemma</span>
              <div className="lrn-definition-desc">
                <p>
                  {`If $\\int_{x_1}^{x_2} M(x)\\,\\eta(x)\\, dx = 0$ for every smooth $\\eta$ with $\\eta(x_1) = \\eta(x_2) = 0$, then $M(x) = 0$ everywhere on $(x_1, x_2)$. This is the step that turns the integral stationarity condition into the local Euler-Lagrange ODE.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">The Delta Notation</span>
              <div className="lrn-definition-desc">
                <p>
                  {`Write $\\delta y = \\eta(x)\\, d\\alpha$ for a small change in the curve and $\\delta J$ for the matching first-order change in the functional. The stationarity condition then reads $\\delta J = 0$. This $\\delta$-notation is shorthand for the family derivation. It adds no new mathematics.`}
                </p>
              </div>
            </div>

            <h3>Stationary versus Minimum</h3>

            <p>
              The Euler-Lagrange equation finds curves where {`$J$`} is <em>stationary</em>, not
              necessarily minimum. Just as {`$f'(x^*) = 0$`} can mark a minimum, maximum, or saddle
              point, the equation can yield a local minimum, local maximum, or inflection point. To
              confirm a true minimum, you must check the second variation or the endpoint
              conditions. The catenary example below shows this in action.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-2" data-section-index="2">
            <h2>Shortest Path: The Geodesic</h2>

            <p>
              <strong>When to use this:</strong> whenever you need the curve of minimum length
              between two fixed points on a surface. In the plane the answer is a straight line. On
              a sphere, it is a great-circle arc.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`For the arc-length integrand $f = \\sqrt{1+\\dot{y}^2}$, notice that $f$ contains no $y$, only $\\dot{y}$. Before calculating, predict what the Euler-Lagrange equation will simplify to and what kind of curve it produces.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`When $\\partial f/\\partial y = 0$, the Euler-Lagrange equation reduces to $d/dx(\\partial f/\\partial \\dot{y}) = 0$, which says $\\partial f/\\partial \\dot{y}$ is a constant. For this $f$, that means $\\dot{y}/\\sqrt{1+\\dot{y}^2} = c$, forcing $\\dot{y}$ to be constant, so $y$ is linear in $x$: a straight line.`}
                </p>
              </details>
            </div>

            <h3>Worked Solution: Straight Line</h3>

            <p>
              The arc-length functional between fixed endpoints {`$(x_1,y_1)$`} and {`$(x_2,y_2)$`}{' '}
              is:
            </p>
            <div className="lrn-eq">
              <span>{`$$I = \\int_{x_1}^{x_2} \\sqrt{1+\\dot{y}^2}\\, dx, \\qquad f = \\sqrt{1+\\dot{y}^2}$$`}</span>
            </div>

            <p>
              {`This is the arc-length example you solved when you first met the Euler-Lagrange equation, so the steps are quick. Since $f$ has no $y$, the equation collapses to the first integral $\\partial f/\\partial \\dot{y} = \\dot{y}/\\sqrt{1+\\dot{y}^2} = c$. Squaring and solving for $\\dot{y}$ gives a constant slope $\\dot{y} = c/\\sqrt{1-c^2}$. A constant slope integrates to a straight line:`}
            </p>

            <div className="lrn-eq">
              <span>{`$$y = ax + b \\qquad \\text{(straight line; }a, b\\text{ from endpoints)}$$`}</span>
            </div>

            <p>
              The same result generalizes to geodesics on curved surfaces. On a sphere, write the
              arc-length functional in spherical coordinates and apply the same method. The
              extremals are great-circle arcs: the circles cut by a plane through the sphere's
              center, which are the shortest routes across its surface.
            </p>
            <p>
              The full reduction of the spherical ODE to great circles is left for the practice set;
              the result is stated here. The variational machinery works in any coordinate system.
            </p>

            <div>
              <GeodesicStraightLine />
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-3" data-section-index="3">
            <h2>Minimum Surface of Revolution: The Catenary</h2>

            <p>
              <strong>When to use this:</strong> minimize the area of a surface formed by rotating a
              curve about an axis. The integrand has the form {`$f = x\\sqrt{1+\\dot{y}^2}$`} (or{' '}
              {`$f = y\\sqrt{1+\\dot{x}^2}$`} depending on which axis you rotate about). The
              extremal is a catenary, the same shape as a freely hanging chain.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`The integrand is $f = x\\sqrt{1+\\dot{y}^2}$. Notice that $f$ contains no $y$, only $x$ and $\\dot{y}$. What do you expect the Euler-Lagrange equation to give you immediately?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Because $\\partial f/\\partial y = 0$, the Euler-Lagrange equation reduces to $d/dx(\\partial f/\\partial \\dot{y}) = 0$, which means $\\partial f/\\partial \\dot{y}$ is a constant. This is called a first integral. It turns the second-order ODE into a first-order one that you can integrate directly.`}
                </p>
              </details>
            </div>

            <h3>Setup and Integrand</h3>

            <p>
              Rotate a curve connecting {`$(x_1,y_1)$`} and {`$(x_2,y_2)$`} about the {`$y$`}-axis.
              The surface area is:
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\pi \\int_{x_1}^{x_2} x\\sqrt{1+\\dot{y}^2}\\, dx, \\qquad f = x\\sqrt{1+\\dot{y}^2}$$`}</span>
            </div>

            <h3>Worked Solution: Catenary</h3>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  Compute the partial derivatives and apply Euler-Lagrange, then integrate to the
                  catenary.
                </p>
                <ol className="lrn-list">
                  <li>
                    {`$\\partial f/\\partial y = 0$ (no $y$ in $f$). $\\partial f/\\partial \\dot{y} = x\\dot{y}/\\sqrt{1+\\dot{y}^2}$.`}
                  </li>
                  <li>
                    {`Euler-Lagrange: $\\frac{d}{dx}\\!\\left(\\frac{x\\dot{y}}{\\sqrt{1+\\dot{y}^2}}\\right) = 0$. So the first integral is $\\frac{x\\dot{y}}{\\sqrt{1+\\dot{y}^2}} = a$ (constant).`}
                  </li>
                  <li>
                    {`Square: $x^2\\dot{y}^2 = a^2(1+\\dot{y}^2) = a^2 + a^2\\dot{y}^2$. Rearrange: $\\dot{y}^2(x^2 - a^2) = a^2$.`}
                  </li>
                  <li>
                    {`Take the square root: $\\frac{dy}{dx} = \\frac{a}{\\sqrt{x^2 - a^2}}$.`}
                  </li>
                  <li>
                    {`Integrate (using $\\int dx/\\sqrt{x^2-a^2} = \\operatorname{arccosh}(x/a)$, where arccosh is the inverse of cosh): $y = a\\operatorname{arccosh}(x/a) + b$.`}
                  </li>
                  <li>
                    {`Invert: $x = a\\cosh\\!\\left(\\frac{y-b}{a}\\right)$. This is the catenary.`}
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <ol className="lrn-list">
                  <li>
                    {`Starting from the first integral $x\\dot{y}/\\sqrt{1+\\dot{y}^2} = a$, derive the separable ODE $dy/dx = a/\\sqrt{x^2-a^2}$ on your own.`}
                  </li>
                  <li>
                    {`Check that squaring and rearranging gives $\\dot{y}^2(x^2-a^2) = a^2$.`}
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <ol className="lrn-list">
                  <li>
                    {`Verify by substitution that $x = a\\cosh((y-b)/a)$ satisfies the ODE $dy/dx = a/\\sqrt{x^2-a^2}$.`}
                  </li>
                  <li>
                    {`Compute $dx/dy$ from the catenary and confirm it equals $\\sqrt{x^2-a^2}/a$.`}
                  </li>
                </ol>
              </div>
            </div>

            <div className="lrn-eq">
              <span>{`$$x = a\\cosh\\!\\left(\\frac{y-b}{a}\\right) \\qquad \\text{(catenary; }a, b\\text{ from endpoints)}$$`}</span>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the equation $\\dot{y}^2(x^2-a^2) = a^2$ tell us we need $x > a$? What is the geometric meaning of $a$?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`Because $\\dot{y}^2 \\geq 0$, we need $x^2 - a^2 \\geq 0$, so $x \\geq a$. The constant $a$ is the minimum $x$-coordinate of the catenary: the point where the curve is closest to the $y$-axis (the axis of rotation). At that point the curve is horizontal ($\\dot{y} = 0$). The catenary solution only exists for $x > a$; the constant $a$ must satisfy $a < \\min(x_1, x_2)$.`}
                </p>
              </details>
            </div>

            <h3>Three Solution Regimes and the Goldschmidt Curve</h3>

            <p>
              The catenary is a stationary curve, not necessarily the global minimum. Depending on
              the endpoint positions, three regimes exist:
            </p>
            <ul className="lrn-list">
              <li>
                <strong>One catenary:</strong> for most endpoint pairs, a unique smooth solution
                exists.
              </li>
              <li>
                <strong>Two catenaries:</strong> for some pairs, two catenaries connect the
                endpoints. One is a local minimum, the other a saddle point of the functional.
              </li>
              <li>
                <strong>No catenary:</strong> for endpoints with large vertical separation, no
                smooth catenary exists at all.
              </li>
            </ul>
            <p>
              When no catenary exists, the absolute minimum is the{' '}
              <strong>Goldschmidt discontinuous curve</strong>: travel along the {`$x$`}-axis to the{' '}
              {`$y$`}-axis, up the {`$y$`}-axis to the correct height, then out to the second
              endpoint. Each horizontal segment sweeps a flat disk of area {`$\\pi x_i^2$`} about
              the {`$y$`}-axis, while the vertical segment sweeps zero area. So the total surface
              area of this piecewise path is:
            </p>
            <div className="lrn-eq">
              <span>{`$$A_{\\text{Goldschmidt}} = \\pi(x_1^2 + x_2^2)$$`}</span>
            </div>
            <p>
              This curve has discontinuous first derivatives, so the Euler-Lagrange equation cannot
              find it. The variational machinery produces only smooth extremals. So always check
              whether your smooth catenary is the true global minimum, because for some endpoint
              pairs the Goldschmidt curve has the smaller area.
            </p>

            <div>
              <CatenaryProfile />
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-4" data-section-index="4">
            <h2>The Brachistochrone: Fastest Descent</h2>

            <p>
              <strong>When to use this:</strong> minimize travel time for a particle sliding under
              gravity with no friction. Set up the time integral using energy conservation to
              express speed as a function of height, then apply Euler-Lagrange.
            </p>
            <p>
              The brachistochrone problem asks: among all frictionless curves connecting a high
              point to a lower point, which one lets a bead slide down fastest? This problem founded
              the calculus of variations. John Bernoulli posed it in 1696. Newton, Leibniz, and
              Jakob Bernoulli also sent in solutions, and the field grew from their work.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Three candidate paths: a straight line, a circular arc, and some curved path. Which
                do you predict is fastest? Reason from physics, not calculation.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The straight line is shortest but starts descending slowly (shallow angle near the
                  top). A steeper initial drop builds speed faster, which can save more time than
                  the extra distance costs. The optimal path is neither the straight line nor a
                  circular arc. It is a cycloid, which drops steeply at first then curves gently
                  toward the endpoint.
                </p>
              </details>
            </div>

            <h3>Setting Up the Time Integral</h3>

            <p>
              Measure {`$y$`} downward from the release point. Energy conservation gives the speed
              at depth {`$y$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\tfrac{1}{2}mv^2 = mgy \\implies v = \\sqrt{2gy}$$`}</span>
            </div>
            <p>
              The travel time from point 1 to point 2 along the curve is {`$t_{12} = \\int ds/v$`}.
              Using {`$ds = \\sqrt{1+\\dot{y}^2}\\, dx$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$t_{12} = \\int_1^2 \\frac{\\sqrt{1+\\dot{y}^2}}{\\sqrt{2gy}}\\, dx, \\qquad f = \\sqrt{\\frac{1+\\dot{y}^2}{2gy}}$$`}</span>
            </div>

            <h3>The Cycloid Solution</h3>

            <p>
              Look at the integrand {`$f = \\sqrt{(1+\\dot{y}^2)/(2gy)}$`}. It contains {`$y$`} and{' '}
              {`$\\dot{y}$`} but no explicit {`$x$`}. When the integrand has no explicit {`$x$`}, a
              different first integral applies: the <strong>Beltrami identity</strong>.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">The Beltrami Identity</span>
              <div className="lrn-definition-desc">
                <p>
                  {`When the integrand $f(y,\\dot{y})$ has no explicit $x$, the Euler-Lagrange equation has the first integral $f - \\dot{y}\\,\\dfrac{\\partial f}{\\partial \\dot{y}} = \\text{const}$. This is the partner of the "no explicit $y$" case from the catenary: there $\\partial f/\\partial \\dot{y}$ was constant; here $f - \\dot{y}\\,\\partial f/\\partial \\dot{y}$ is constant. Either way a second-order ODE drops to first order.`}
                </p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Brachistochrone Derivation</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  {`The integrand has no explicit $x$, so apply the Beltrami identity: $f - \\dot{y}\\,\\partial f/\\partial \\dot{y} = \\text{const}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  {`Compute the slope partial: $\\partial f/\\partial \\dot{y} = \\dfrac{\\dot{y}}{\\sqrt{2gy}\\,\\sqrt{1+\\dot{y}^2}}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  {`Substitute and combine over the common factor. The $\\dot{y}^2$ terms collapse: $f - \\dot{y}\\,\\partial f/\\partial \\dot{y} = \\dfrac{(1+\\dot{y}^2) - \\dot{y}^2}{\\sqrt{2gy}\\,\\sqrt{1+\\dot{y}^2}} = \\dfrac{1}{\\sqrt{2gy}\\,\\sqrt{1+\\dot{y}^2}} = \\text{const}$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  {`Invert and square. The constant absorbs $2g$ into a new constant $2a$: $y(1+\\dot{y}^2) = 2a$. This is the separable ODE for the curve.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">
                  {`Solve $y(1+\\dot{y}^2) = 2a$ with the substitution $y = a(1-\\cos\\theta)$. The result is the cycloid in parametric form (below).`}
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <p>
              A <strong>cycloid</strong> is the path traced by a point on the rim of a wheel as the
              wheel rolls along a straight line. In parametric form, with {`$a$`} the radius of the
              rolling wheel:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$x = a(\\theta - \\sin\\theta), \\qquad y = a(1 - \\cos\\theta)$$`}</span>
            </div>
            <p>
              {`The single parameter $a$ (the wheel radius) is fixed by the endpoint condition at $(x_2, y_2)$. The parameter $\\theta$ runs over the first arch, $0 \\leq \\theta \\leq 2\\pi$. At the start ($\\theta = 0$) the curve drops vertically: this steep initial plunge is exactly the early speed gain that minimizes the travel time.`}
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`The catenary integrand had no explicit $y$, so $\\partial f/\\partial \\dot{y}$ was constant. The brachistochrone integrand has no explicit $x$, so the Beltrami combination $f - \\dot{y}\\,\\partial f/\\partial \\dot{y}$ is constant instead. Why does the brachistochrone produce a cycloid rather than a straight line?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`The speed $v = \\sqrt{2gy}$ grows with depth, so the bead can trade extra length for early speed. That is why $y$ enters the integrand at all. The Beltrami first integral gives $y(1+\\dot{y}^2) = 2a$. A straight line has constant slope, which cannot satisfy this equation, since $y$ changes along the path while $1+\\dot{y}^2$ stays fixed. The cycloid balances the trade exactly: it drops steeply at first to build speed, then flattens toward the endpoint. No other curve matches its descent time.`}
                </p>
              </details>
            </div>

            <div>
              <BrachistochroneCycloid />
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-5" data-section-index="5">
            <h2>A Coordinate-Free View: Functionals on Curve Space</h2>

            <p>
              <strong>When to use this framing:</strong> when you want to see <em>why</em> the
              extremal curve does not care which coordinates you use. Think of a functional as a map
              on the space of curves. Then "extremal" means the same thing a critical point means
              for an ordinary function: the functional does not change to first order when you nudge
              the curve.
            </p>

            <p>
              You already derived the Euler-Lagrange equation in Section 1. You introduced a family
              of nearby curves, demanded that the functional be stationary, and integrated by parts.
              The same equation drops out no matter how you label the curve. Take it as given here:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) - \\frac{\\partial L}{\\partial x} = 0$$`}</span>
            </div>

            <h3>Coordinate Independence</h3>

            <p>
              The extremal condition does not depend on your choice of coordinate system. Write the
              same functional in Cartesian or in polar coordinates. The integrand {`$L$`} changes
              form, but the extremals stay the same curves. In Cartesian coordinates the arc-length
              functional is:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\Phi_{\\text{cart}} = \\int\\sqrt{\\dot{x}_1^2+\\dot{x}_2^2}\\, dt$$`}</span>
            </div>
            <p>In polar coordinates the same arc length reads:</p>
            <div className="lrn-eq">
              <span>{`$$\\Phi_{\\text{pol}} = \\int\\sqrt{\\dot{r}^2+r^2\\dot{\\varphi}^2}\\, dt$$`}</span>
            </div>
            <p>
              Both measure arc length. Both Euler-Lagrange systems are solved by straight lines,
              written in different coordinates. An extremal is a geometric object. It is not tied to
              one set of formulas.
            </p>

            <h3>Connection to Mechanics</h3>

            <p>
              Now feed mechanics into the same machine. Take {`$L = T - U$`} (kinetic energy minus
              potential energy). The extremals of {`$\\Phi(\\gamma) = \\int L(x,\\dot{x},t)\\, dt$`}{' '}
              are exactly Newton's equations of motion. The Euler-Lagrange equation becomes:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\frac{d}{dt}(m_i\\dot{r}_i) + \\frac{\\partial U}{\\partial r_i} = 0$$`}</span>
            </div>
            <p>
              This is Newton's second law (here {`$U$`} is the potential energy and {`$T$`} the
              kinetic energy, as on the action page). The three geometric problems on this page
              share the same structure as the equations of motion. One technique covers all of them.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What is the difference between a function and a functional? Give one example of each.',
        a: 'A function takes a number (or finite list of numbers) and returns a number. A functional takes an entire curve (an infinite-dimensional object) and returns a number. Example function: $f(x) = x^2$, takes the number $x$, returns $x^2$. Example functional: $I[y] = \\int_0^1 \\sqrt{1+\\dot{y}^2}\\, dx$, takes the curve $y(x)$, returns its arc length. The key distinction is that the domain of a functional is a space of curves, not a set of numbers.'
      },
      {
        q: 'State the Euler-Lagrange equation for the functional $J = \\int f(y,\\dot{y},x)\\, dx$. What condition on the endpoints is required?',
        a: 'The Euler-Lagrange equation is $\\partial f/\\partial y - d/dx(\\partial f/\\partial \\dot{y}) = 0$. The required endpoint condition is that the varied paths all share the same endpoints: any variation $\\eta(x)$ must satisfy $\\eta(x_1) = \\eta(x_2) = 0$. This condition makes the boundary terms in the integration-by-parts step vanish, which is essential for reducing the integral condition $\\int M(x)\\eta(x)\\, dx = 0$ to the local ODE $M(x) = 0$.'
      },
      {
        q: 'ELABORATE: Why does the Fundamental Lemma convert the integral condition $\\int M(x)\\eta(x)\\, dx = 0$ into the pointwise condition $M(x) = 0$? What would go wrong without it?',
        a: 'The integral condition holds for every smooth $\\eta$ vanishing at the endpoints. The Fundamental Lemma says this forces $M(x) = 0$ everywhere. Proof by contradiction: suppose $M(x^*) > 0$ somewhere. Choose $\\eta$ to be a positive bump concentrated near $x^*$ and zero elsewhere. Then $\\int M\\eta\\, dx > 0$, contradicting the assumption. So $M = 0$ everywhere. Without the Lemma, we would only know the integral vanishes. We could not conclude the integrand is zero. The Euler-Lagrange equation would not follow.'
      },
      {
        q: 'For the arc-length functional $I = \\int \\sqrt{1+\\dot{y}^2}\\, dx$, derive the shortest-path curve. Show all steps.',
        a: '(1) $f = \\sqrt{1+\\dot{y}^2}$; $\\partial f/\\partial y = 0$; $\\partial f/\\partial \\dot{y} = \\dot{y}/\\sqrt{1+\\dot{y}^2}$. (2) Euler-Lagrange: $d/dx(\\dot{y}/\\sqrt{1+\\dot{y}^2}) = 0$, so $\\dot{y}/\\sqrt{1+\\dot{y}^2} = c$. (3) Square: $\\dot{y}^2 = c^2(1+\\dot{y}^2)$, giving $\\dot{y}^2(1-c^2) = c^2$, so $\\dot{y} = c/\\sqrt{1-c^2} \\equiv a$ = constant. (4) Integrate: $y = ax + b$. The constants $a, b$ are fixed by the two endpoint conditions. This is a straight line.'
      },
      {
        q: 'TRANSFER: Apply the Euler-Lagrange equation to the arc-length functional on the sphere surface. The integrand in spherical coordinates (colatitude $\\theta$, longitude $\\phi$) along a curve $\\phi(\\theta)$ is $f = \\sqrt{1 + \\sin^2\\theta \\cdot (d\\phi/d\\theta)^2}$. What type of curves are the extremals?',
        a: '(1) Write $\\dot{\\phi} = d\\phi/d\\theta$. Then $f = \\sqrt{1 + \\sin^2\\theta\\,\\dot{\\phi}^2}$. (2) $f$ does not contain $\\phi$ explicitly, so $\\partial f/\\partial \\phi = 0$ and Euler-Lagrange gives $d/d\\theta(\\partial f/\\partial \\dot{\\phi}) = 0$. (3) The first integral is $\\sin^2\\theta\\,\\dot{\\phi}/\\sqrt{1+\\sin^2\\theta\\,\\dot{\\phi}^2} = c$. (4) Integrating this ODE (the algebra is involved and beyond scope here) gives the great circles: the intersections of the sphere with planes through its center. Great circles are the geodesics of the sphere, the shortest routes between two points on the surface.'
      },
      {
        q: 'For the surface-of-revolution problem, the first integral is $x\\dot{y}/\\sqrt{1+\\dot{y}^2} = a$. Derive the catenary $x = a\\cosh((y-b)/a)$ from this first integral.',
        a: '(1) Square the first integral: $x^2\\dot{y}^2/(1+\\dot{y}^2) = a^2$, so $x^2\\dot{y}^2 = a^2 + a^2\\dot{y}^2$. (2) Rearrange: $\\dot{y}^2(x^2 - a^2) = a^2$. (3) Take positive root: $dy/dx = a/\\sqrt{x^2-a^2}$. (4) Integrate: $y = a\\operatorname{arccosh}(x/a) + b$. (5) Invert cosh: $x/a = \\cosh((y-b)/a)$, so $x = a\\cosh((y-b)/a)$. The two constants $a$ and $b$ are fixed by the two endpoint conditions.'
      },
      {
        q: 'PREDICT/SELF-EXPLAIN: The catenary integrand $f = x\\sqrt{1+\\dot{y}^2}$ has $\\partial f/\\partial y = 0$. The brachistochrone integrand $f = \\sqrt{(1+\\dot{y}^2)/(2gy)}$ has $\\partial f/\\partial y \\neq 0$. How does this difference change the Euler-Lagrange equation and its difficulty?',
        a: '(1) When $\\partial f/\\partial y = 0$, Euler-Lagrange reduces to $d/dx(\\partial f/\\partial \\dot{y}) = 0$: a first integral. You only need to solve a first-order ODE. This is what happens for both the shortest-path and catenary problems. (2) When $\\partial f/\\partial y \\neq 0$, both terms in Euler-Lagrange survive. You get a full second-order ODE coupling $y$ and $\\dot{y}$. The brachistochrone is in this category: $y$ appears in the denominator, so $\\partial f/\\partial y = -\\sqrt{(1+\\dot{y}^2)/(2g)}/(2y) \\neq 0$. (3) The resulting ODE is harder to integrate and produces the cycloid rather than a simple closed-form curve.'
      },
      {
        q: 'The brachistochrone solution is the cycloid $x = a(\\theta - \\sin\\theta)$, $y = a(1 - \\cos\\theta)$. Near the start, $\\theta \\to 0$, find how $y$ grows with $x$.',
        a: '(1) Expand for small $\\theta$. Use $\\sin\\theta \\approx \\theta - \\theta^3/6$ and $\\cos\\theta \\approx 1 - \\theta^2/2$. (2) Then $x = a(\\theta - \\sin\\theta) \\approx a\\theta^3/6$ and $y = a(1 - \\cos\\theta) \\approx a\\theta^2/2$. (3) From the $y$ relation, $\\theta \\approx \\sqrt{2y/a}$. (4) Substitute into $x$: $x \\approx (a/6)(2y/a)^{3/2}$. Solving for $y$ gives $y \\approx (a/2)(6x/a)^{2/3}$, so $y \\propto x^{2/3}$. (5) This is why the curve plunges vertically at the start: the slope $dy/dx$ blows up as $x \\to 0$, giving the steep early drop that builds speed.'
      },
      {
        q: 'TRANSFER: Fermat says light takes the path of least travel time. In a medium where speed is $v(y) = c/n(y)$, the time integral is $T = \\int n(y)\\sqrt{1+\\dot{y}^2}\\, dx / c$. The integrand has the same shape as the brachistochrone. Set up the Euler-Lagrange equation and find the first integral.',
        a: "(1) Drop the constant $1/c$. The integrand is $f = n(y)\\sqrt{1+\\dot{y}^2}$, with $y$ appearing through $n(y)$. (2) Here $f$ has no explicit $x$, so the Beltrami first integral applies: $f - \\dot{y}\\,\\partial f/\\partial \\dot{y} = \\text{const}$. (3) Compute $\\partial f/\\partial \\dot{y} = n(y)\\dot{y}/\\sqrt{1+\\dot{y}^2}$. (4) The first integral becomes $n(y)/\\sqrt{1+\\dot{y}^2} = \\text{const}$. (5) This is Snell's law in disguise: $n\\sin\\phi = \\text{const}$, where $\\phi$ is the angle from the vertical. The same first-integral trick that solved the catenary and brachistochrone gives the law of refraction."
      },
      {
        q: 'TRANSFER: A soap film stretched between two parallel rings forms a minimum-area surface, the same minimal-area problem as the surface of revolution. The film between rings of radius $R$ a distance $2d$ apart breaks (jumps to flat disks) when the rings are too far apart. Connect this to the catenary regimes.',
        a: '(1) The soap film minimizes area, so its profile is the catenary $x = a\\cosh((y-b)/a)$, the same extremal as the surface of revolution. (2) When the rings are close, a smooth catenary (catenoid) connects them: this is the one-catenary or two-catenary regime. (3) As the rings move apart, the two catenary solutions merge and then vanish: no smooth catenary exists. (4) Past that point the film snaps to the Goldschmidt-type solution: two flat disks, one on each ring. (5) The physical breaking of the soap film is exactly the moment the smooth extremal stops existing and the discontinuous solution wins.'
      },
      {
        q: "ERROR DETECTION: A student writes 'the Euler-Lagrange equation finds the minimum of the functional.' What is wrong with this statement? Give a concrete example from this topic.",
        a: "(1) The Euler-Lagrange equation finds stationary curves of the functional (curves where $\\delta J = 0$), not necessarily minima. (2) A stationary functional can be at a minimum, maximum, or saddle point (inflection point), just as $f'(x^*) = 0$ in ordinary calculus does not guarantee a minimum. (3) Concrete example: for the minimum surface of revolution, the catenary satisfies $\\delta J = 0$. But for certain endpoint pairs, two catenaries exist: one a local minimum, the other a saddle point. For other endpoint pairs, no catenary exists and the global minimum is the discontinuous Goldschmidt curve, which lies outside the smooth class the equation searches."
      },
      {
        q: 'ELABORATE: What is the Goldschmidt discontinuous curve? Why can the Euler-Lagrange equation not find it?',
        a: '(1) The Goldschmidt curve is a piecewise path: from $(x_1, y_1)$ travel horizontally along the $x$-axis to the $y$-axis, then vertically up (or down) to the correct height, then horizontally out to $(x_2, y_2)$. It lies entirely on the $x$-axis and $y$-axis segments. (2) Its surface area is $\\pi(x_1^2 + x_2^2)$. (3) For certain endpoint pairs (both $x_1, x_2$ small, large vertical separation), this area is smaller than any smooth catenary. (4) The Euler-Lagrange equation applies only to smooth curves with continuous first derivatives. The Goldschmidt curve has a corner at the $y$-axis, so its first derivative is discontinuous there. The class of smooth curves does not include it. The equation cannot find what lies outside its class.'
      },
      {
        q: "One approach defines 'extremal' as a curve where the differential $F(h) = 0$ for all variations $h$. How does this relate to setting $dJ/d\\alpha = 0$ at $\\alpha = 0$ for a one-parameter family?",
        a: '(1) The family approach introduces $y(x,\\alpha) = y(x,0) + \\alpha\\eta(x)$ and requires $(dJ/d\\alpha)|_{\\alpha=0} = 0$. (2) The differential $F(h)$ is exactly the linear part of $\\Phi(\\gamma+h) - \\Phi(\\gamma)$ for a variation $h$. Setting $F(h) = 0$ for all $h$ is the same as requiring $(d/d\\alpha)\\Phi(\\gamma + \\alpha h)|_{\\alpha=0} = 0$ for all $h$. (3) With $h = \\eta(x)\\,d\\alpha$, the differential $F(h)$ equals $(dJ/d\\alpha)|_0 \\cdot d\\alpha$. The two are identical. (4) The differential framing says $\\Phi$ is differentiable at $\\gamma$ and $F$ is its differential. The family framing works operationally. The results agree.'
      },
      {
        q: 'TRANSFER: Consider the functional $J = \\int_0^1 (\\dot{y}^2 + y^2)\\, dx$ with $y(0) = 0$ and $y(1) = 1$. Write down and solve the Euler-Lagrange equation.',
        a: '(1) $f = \\dot{y}^2 + y^2$. Compute: $\\partial f/\\partial y = 2y$; $\\partial f/\\partial \\dot{y} = 2\\dot{y}$; $d/dx(\\partial f/\\partial \\dot{y}) = 2\\ddot{y}$. (2) Euler-Lagrange: $2y - 2\\ddot{y} = 0$, giving $\\ddot{y} = y$. (3) General solution: $y = A\\cosh(x) + B\\sinh(x)$. (4) Apply boundary conditions: $y(0) = A = 0$; $y(1) = B\\sinh(1) = 1$, so $B = 1/\\sinh(1)$. (5) Extremal: $y = \\sinh(x)/\\sinh(1)$.'
      },
      {
        q: 'Why does coordinate independence of the Euler-Lagrange equation matter in physics? Illustrate with the arc-length functional in Cartesian versus polar coordinates.',
        a: '(1) Coordinate independence means you can write $L$ in whichever coordinates make the problem simple. The Euler-Lagrange equation in those coordinates finds the same physical curves as it would in any other coordinates. (2) Arc length in Cartesian: $\\Phi_{\\text{cart}} = \\int\\sqrt{\\dot{x}_1^2+\\dot{x}_2^2}\\, dt$. In polar: $\\Phi_{\\text{pol}} = \\int\\sqrt{\\dot{r}^2+r^2\\dot{\\varphi}^2}\\, dt$. (3) Both describe the same geometric object (length) and both Euler-Lagrange systems have straight lines as their extremals. A straight line in Cartesian coordinates is $x_1 = c_1 t + c_2$, $x_2 = c_3 t + c_4$. In polar it satisfies $r^2\\dot{\\varphi}^2 = c^2(\\dot{r}^2 + r^2\\dot{\\varphi}^2)$ for some constant $c$. Different equations, same geometric curves. (4) In mechanics, picking polar or spherical coordinates for a central force problem is simpler than Cartesian. Coordinate independence guarantees the answer is correct.'
      },
      {
        q: 'PREDICT: For the surface-of-revolution problem, what does the constraint $x > a$ (where $a$ is the first-integral constant) tell you about physically valid endpoint pairs?',
        a: "(1) The catenary solution requires $x > a$ because the equation $dy/dx = a/\\sqrt{x^2-a^2}$ needs $x^2 > a^2$ to give a real slope. (2) Both endpoints must satisfy $x_1 > a$ and $x_2 > a$, meaning $a < \\min(x_1, x_2)$. (3) Given two fixed endpoints, the constant $a$ is determined by the endpoint conditions. For some endpoint pairs, no value of $a$ satisfying both conditions exists. This is the 'no catenary' regime. (4) When no valid $a$ exists, the Goldschmidt curve takes over as the global minimum. The constraint $x > a$ is therefore the boundary between the smooth-catenary regime and the discontinuous-solution regime."
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Variational Problems Beyond Mechanics',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Core Equations</h2>

            <h3>The Main Equation</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Euler-Lagrange Equation</span>
              <div className="ref-formula-eq">
                {`$$\\frac{\\partial f}{\\partial y} - \\frac{d}{dx}\\!\\left(\\frac{\\partial f}{\\partial \\dot{y}}\\right) = 0$$`}
              </div>
              <p className="ref-formula-desc">
                <strong>When to use:</strong> any functional {`$J = \\int f(y,\\dot{y},x)\\, dx$`}{' '}
                with fixed endpoints. Plug in your integrand
                {` $f$`}, compute the two partial derivatives, and solve the resulting ODE. The
                solution is the extremal path (stationary, not necessarily minimum).
              </p>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">Varied Path Family</span>
              <div className="ref-formula-eq">
                {`$$y(x,\\alpha) = y(x,0) + \\alpha\\,\\eta(x), \\quad \\eta(x_1)=\\eta(x_2)=0$$`}
              </div>
              <p className="ref-formula-desc">
                <strong>When to use:</strong> deriving the Euler-Lagrange equation from scratch. The
                correct path is {`$\\alpha = 0$`}. Stationarity requires{' '}
                {`$(dJ/d\\alpha)|_{\\alpha=0} = 0$`}.
              </p>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">Fundamental Lemma</span>
              <div className="ref-formula-eq">
                {`$$\\int_{x_1}^{x_2} M(x)\\,\\eta(x)\\, dx = 0 \\;\\text{ for all }\\eta \\implies M(x) \\equiv 0$$`}
              </div>
              <p className="ref-formula-desc">
                <strong>When to use:</strong> converting the integral stationarity condition into a
                pointwise ODE. Essential in every Euler-Lagrange derivation.
              </p>
            </div>

            <h3>The Three Classic Problems</h3>
            <table>
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Integrand {`$f$`}</th>
                  <th>Extremal curve</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shortest path in the plane</td>
                  <td>{`$\\sqrt{1+\\dot{y}^2}$`}</td>
                  <td>{`$y = ax+b$`} (straight line)</td>
                  <td>Minimize arc length between two points</td>
                </tr>
                <tr>
                  <td>Minimum surface of revolution</td>
                  <td>{`$x\\sqrt{1+\\dot{y}^2}$`}</td>
                  <td>{`$x = a\\cosh((y-b)/a)$`} (catenary)</td>
                  <td>Minimize area of surface rotated about the {`$y$`}-axis</td>
                </tr>
                <tr>
                  <td>Brachistochrone</td>
                  <td>{`$\\sqrt{(1+\\dot{y}^2)/(2gy)}$`}</td>
                  <td>Cycloid (one parameter {`$a$`})</td>
                  <td>Minimize sliding time under gravity</td>
                </tr>
              </tbody>
            </table>

            <h3>Key Formulas</h3>

            <div className="ref-formula">
              <span className="ref-formula-name">Catenary</span>
              <div className="ref-formula-eq">
                {`$$x = a\\cosh\\!\\left(\\frac{y-b}{a}\\right)$$`}
              </div>
              <p className="ref-formula-desc">
                <strong>When to use:</strong> finding the minimum-area surface of revolution for
                endpoints satisfying {`$x_1, x_2 > a$`}. The constants {`$a$`} and {`$b$`} come from
                the two endpoint conditions. Check whether the catenary gives a true global minimum
                or whether the Goldschmidt curve is smaller.
              </p>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">Goldschmidt Discontinuous Solution Area</span>
              <div className="ref-formula-eq">{`$$A = \\pi(x_1^2 + x_2^2)$$`}</div>
              <p className="ref-formula-desc">
                <strong>When to use:</strong> when no smooth catenary connects the endpoints. This
                piecewise straight path (along the axes) is the global minimum for those endpoint
                pairs. Compare with the catenary area to determine which is smaller.
              </p>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">Brachistochrone Cycloid</span>
              <div className="ref-formula-eq">
                {`$$x = a(\\theta - \\sin\\theta), \\qquad y = a(1 - \\cos\\theta)$$`}
              </div>
              <p className="ref-formula-desc">
                <strong>When to use:</strong> the brachistochrone problem with energy conservation{' '}
                {`$v = \\sqrt{2gy}$`} ({`$y$`} measured downward from the release point). Reached
                from the Beltrami first integral {`$y(1+\\dot{y}^2) = 2a$`}. The radius {`$a$`} is
                fixed by the endpoint. Valid for the first arch {`$0 \\leq \\theta \\leq 2\\pi$`}.
              </p>
            </div>

            <div className="ref-formula">
              <span className="ref-formula-name">Euler-Lagrange (n Dimensions)</span>
              <div className="ref-formula-eq">
                {`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}_i}\\right) - \\frac{\\partial L}{\\partial x_i} = 0, \\quad i = 1,\\ldots,n$$`}
              </div>
              <p className="ref-formula-desc">
                <strong>When to use:</strong> systems with {`$n$`} unknown functions {`$x_i(t)$`}.
                Produces {`$n$`} coupled second-order ODEs. In mechanics with {`$L = T-U$`}, this
                recovers Newton's equations in any coordinate system.
              </p>
            </div>

            <h3>Contrasting Pairs</h3>
            <table>
              <thead>
                <tr>
                  <th>Pair</th>
                  <th>Left</th>
                  <th>Right</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ordinary vs. variational stationary</td>
                  <td>{`$df/dx = 0$ at a point $x^*$`}</td>
                  <td>{`$\\delta J = 0$ for a whole curve $y(x)$`}</td>
                </tr>
                <tr>
                  <td>Stationary vs. minimum</td>
                  <td>{`$\\delta J = 0$`}: necessary condition</td>
                  <td>True minimum: requires second variation or global check</td>
                </tr>
                <tr>
                  <td>Catenary vs. Goldschmidt</td>
                  <td>Smooth, found by E-L; local or global min</td>
                  <td>Piecewise, outside E-L class; global min for some endpoints</td>
                </tr>
                <tr>
                  <td>Shortest-path integrand vs. brachistochrone integrand</td>
                  <td>{`$\\partial f/\\partial y = 0$`}: first integral exists</td>
                  <td>{`$\\partial f/\\partial y \\neq 0$`}: full second-order ODE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
