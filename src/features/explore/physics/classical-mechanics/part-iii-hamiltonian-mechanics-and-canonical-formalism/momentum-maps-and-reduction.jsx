import { LearningTemplate } from '../../../../../components/learning/learning-template'
import 'mafs/core.css'
import { Mafs, Coordinates, Plot, Text } from 'mafs'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  CoadjointOrbitSphere,
  JacobiGeodesicDeviation
} from '../../../../../components/viz/physics-viz/modules'

// Jacobi equation: geodesic separation for different curvature signs
function JacobiViz({ C }) {
  return (
    <div className="lrn-graph">
      <Mafs viewBox={{ x: [-0.5, 7], y: [-3.5, 3.5] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: false }}
          yAxis={{ lines: false, labels: false }}
        />
        {/* K > 0: oscillatory y(t) = sin(t), showing two converging geodesics */}
        <Plot.OfX
          y={x => 1.5 * Math.sin(Math.sqrt(0.8) * x)}
          color={C.accent}
          weight={2}
          style="solid"
        />
        <Plot.OfX
          y={x => -1.5 * Math.sin(Math.sqrt(0.8) * x)}
          color={C.accent}
          weight={2}
          style="solid"
        />
        {/* K < 0: exponential y(t) = sinh(0.4t), capped */}
        <Plot.Parametric
          xy={t => [t, Math.min(3.2, 0.5 * Math.sinh(0.55 * t))]}
          t={[0, 6.5]}
          color={C.fg}
          weight={2}
          style="solid"
        />
        <Plot.Parametric
          xy={t => [t, -Math.min(3.2, 0.5 * Math.sinh(0.55 * t))]}
          t={[0, 6.5]}
          color={C.fg}
          weight={2}
          style="solid"
        />
        {/* Labels */}
        <Text x={1.8} y={3.0} size={24} color={C.fg}>
          K &lt; 0: exponential
        </Text>
        <Text x={2.2} y={1.3} size={24} color={C.accent}>
          K &gt; 0: oscillatory
        </Text>
        <Text x={0.3} y={-0.25} size={24} color={C.dim}>
          t
        </Text>
        <Text x={-0.3} y={3.0} size={24} color={C.dim}>
          y
        </Text>
      </Mafs>
    </div>
  )
}

const config = {
  cssPrefix: 'mmr',
  source: 'Mathematical Methods of Classical Mechanics - Arnold',
  documentTitle: 'Momentum Maps and Reduction - AETHER',
  learning: {
    groupTitle: 'Part III: Hamiltonian Mechanics and Canonical Formalism',
    category: 'Mathematical Methods of Classical Mechanics (Arnold)',
    title: 'Momentum Maps and Reduction',
    subtitle:
      'Riemannian curvature, Jacobi equation, geodesics on Lie groups, Euler equations for rigid body and ideal fluid, exponential instability.',
    sections: [
      <>
        <h2>Riemannian Curvature: Parallel Translation on Surfaces</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Take a vector on the surface of a sphere. Carry it along a closed path, always keeping
            it "as parallel as possible" to the surface. When you return to the start, do you expect
            the vector to point in the same direction?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              No, not in general. On a curved surface, parallel transport around a closed loop
              rotates the vector. The amount of rotation depends on the curvature enclosed by the
              loop.
            </p>
          </details>
        </div>

        <p>
          <strong>What parallel translation is.</strong> On a curved surface, you can move a vector
          along a curve while keeping it "as parallel as possible." Formally:{' '}
          <strong>parallel translation</strong> transports a vector along a curve so that the angle
          between the vector and the tangent to the curve is preserved, and the length is preserved.
        </p>

        <p>
          <strong>Example: parallel translation on a sphere.</strong> Carry a vector around a
          right-angle spherical triangle. Start at the north pole pointing south along one meridian.
          Carry it to the equator, along the equator by 90 degrees, then back to the north pole. The
          vector has rotated by 90 degrees. The rotation equals the area of the triangle on the
          sphere divided by {`$R^2$`}.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does the rotation equal {`$\\frac{\\text{area}}{R^2}$`}?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              By the Gauss-Bonnet theorem, the total rotation of a vector around a closed curve
              equals {`$\\int_D K \\, dS = K \\cdot \\text{Area}(D)$`} for constant {`$K$`}. For a
              sphere of radius {`$R$`}, {`$K = R^{-2}$`}, so the rotation is{' '}
              {`$\\frac{\\text{Area}(D)}{R^2}$`}. For the right-angle triangle covering{' '}
              {`$\\tfrac{1}{8}$`} of the sphere, Area {`$= \\frac{\\pi R^2}{2}$`}, giving rotation{' '}
              {`$\\frac{\\pi}{2} = 90°$`}.
            </p>
          </details>
        </div>

        <p>
          <strong>Example: the 60th parallel.</strong> Carry a vector around the 60th parallel (at
          latitude {`$\\lambda = 60°$`}). The rotation angle is{' '}
          {`$2\\pi(1 - \\sin \\lambda) \\approx 50°$`}. The Earth's curvature causes the rotation.
        </p>

        <p>
          <strong>The three standard 2D geometries have:</strong>
        </p>
        <ul className="lrn-list">
          <li>Euclidean plane: {`$K = 0$`}.</li>
          <li>
            Sphere of radius {`$R$`}: {`$K = R^{-2}$`}.
          </li>
          <li>Lobachevsky plane: {`$K = -1$`}.</li>
        </ul>
      </>,

      <>
        <h2>The Curvature Form</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You carry a vector around an infinitesimally small parallelogram on a curved surface.
            The vector comes back slightly rotated. How would you define curvature from this
            rotation?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Take the rotation angle and divide it by the area of the parallelogram. In the limit
              of a shrinking parallelogram, this ratio defines the curvature at the point.
            </p>
          </details>
        </div>

        <p>
          <strong>Definition of curvature.</strong> The <strong>curvature form</strong>{' '}
          {`$\\Phi(D) = \\int_D \\Omega$`} measures the total rotation of a vector
          parallel-translated around the boundary of a region {`$D$`}.
        </p>

        <p>
          <strong>The curvature form on vectors.</strong> For two tangent vectors {`$\\xi$`},{' '}
          {`$\\eta$`}, define a parallelogram {`$\\Pi_\\varepsilon$`} with sides{' '}
          {`$\\varepsilon \\xi$`} and {`$\\varepsilon \\eta$`}. The rotation angle under parallel
          translation around {`$\\Pi_\\varepsilon$`} is {`$\\Phi(\\Pi_\\varepsilon)$`}. The
          curvature form is:
        </p>
        <div className="lrn-eq">{`$$\\Omega(\\xi, \\eta) = \\lim_{\\varepsilon \\to 0} \\frac{\\Phi(\\Pi_\\varepsilon)}{\\varepsilon^2}$$`}</div>

        <p>
          <strong>Relation to Gaussian curvature.</strong> On a 2D surface, {`$\\Omega = K \\, dS$`}
          , where {`$K$`} is the Gaussian curvature and {`$dS$`} is the area element. So{' '}
          {`$\\Phi(D) = \\int_D K \\, dS$`}: the total rotation equals the integral of curvature
          over the region.
        </p>

        <p>
          <strong>Why curvature is intrinsic.</strong> The curvature {`$K$`} does not change when
          you bend the surface (without stretching). A flat piece of paper rolled into a cylinder
          still has {`$K = 0$`}. Intrinsic means it is the same for any two isometric surfaces.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The metric {`$g_{ij}$`} determines all distances, and curvature is computed entirely
            from {`$g_{ij}$`} and its derivatives (via the Christoffel symbols). No information
            about how the surface sits in external space is needed.
          </p>
        </div>
      </>,

      <>
        <h2>The Riemannian Curvature of a Surface</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            On a surface with {`$K > 0$`} everywhere (like a sphere), do you expect nearby geodesics
            to stay close together, or to converge and then diverge?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Converge first, then diverge: like lines of longitude on a sphere that meet at the
              poles, then spread apart again on the other side.
            </p>
          </details>
        </div>

        <p>
          The curvature sign controls what nearby geodesics do. Positive curvature pulls them
          together; negative curvature pushes them apart, and pushes exponentially.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Positive Curvature ({`$K > 0$`})</span>
            <p>
              Nearby geodesics oscillate: they converge, then diverge, like lines of longitude on a
              sphere that meet at the poles. Example: sphere.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Negative Curvature ({`$K < 0$`})</span>
            <p>
              Nearby geodesics diverge exponentially. Separation grows as {`$e^{\\lambda t}$`}.
              Example: Lobachevsky plane.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Higher-Dimensional Parallel Translation</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            On a 2D surface, there is only one direction perpendicular to the direction of travel
            (within the surface). On an {`$n$`}-dimensional manifold, there are {`$n - 1$`} such
            perpendicular directions. What extra data does parallel translation need in the
            higher-dimensional case?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              In higher dimensions, there are multiple perpendicular directions, and the curvature
              depends on which 2-plane you pick. The curvature is no longer a single number but an
              operator that acts differently in each 2-plane direction.
            </p>
          </details>
        </div>

        <p>
          <strong>Formal definition.</strong> Parallel translation on a Riemannian manifold{' '}
          {`$(M, g)$`} along a curve {`$\\gamma$`} is the unique operation that: preserves the inner
          product {`$\\langle \\cdot, \\cdot \\rangle$`} between transported vectors, and has zero
          covariant derivative along {`$\\gamma$`}: {`$\\nabla_{\\dot{\\gamma}} \\xi = 0$`}.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">2D Parallel Translation</span>
            <p>
              Preserve angle with tangent and length. One perpendicular direction. Curvature is a
              single number {`$K$`}.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Higher-D Parallel Translation</span>
            <p>
              Zero covariant derivative {`$\\nabla_{\\dot{\\gamma}} \\xi = 0$`}. Multiple
              perpendicular directions. Must specify 2-plane. Curvature is an operator-valued
              2-form.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>The Curvature Tensor</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            In 2D, curvature is a single number {`$K$`} at each point. In higher dimensions, what do
            you expect curvature to look like?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              A matrix or operator: because in higher dimensions, a rotation is not just a number
              but a skew-symmetric matrix acting on the tangent space.
            </p>
          </details>
        </div>

        <p>
          <strong>The curvature tensor.</strong> In higher dimensions, curvature is a{' '}
          <strong>skew-symmetric operator-valued 2-form</strong> {`$\\Omega(\\xi, \\eta)$`}. For two
          tangent vectors {`$\\xi, \\eta$`} at a point, {`$\\Omega(\\xi, \\eta)$`} is a linear
          operator on the tangent space.
        </p>

        <p>
          <strong>Definition via parallel translation.</strong> Carry a vector {`$v$`} around the
          infinitesimal parallelogram spanned by {`$\\varepsilon \\xi$`} and{' '}
          {`$\\varepsilon \\eta$`}. The result is{' '}
          {`$v + \\varepsilon^2 \\Omega(\\xi, \\eta) v + O(\\varepsilon^3)$`}. So:
        </p>
        <div className="lrn-eq">{`$$\\Omega(\\xi, \\eta) = \\lim_{\\varepsilon \\to 0} \\frac{A_\\varepsilon(\\xi, \\eta) - E}{\\varepsilon^2}$$`}</div>
        <p>
          where {`$A_\\varepsilon$`} is the parallel transport operator around the parallelogram.
        </p>

        <p>
          <strong>Curvature in a 2-plane.</strong> For a 2-plane {`$L$`} spanned by orthonormal
          vectors {`$\\xi, \\eta$`}, the curvature in direction {`$L$`} is:{' '}
          {`$K = \\langle \\Omega(\\xi, \\eta) \\xi, \\eta \\rangle$`}. In 2D this reduces to the
          Gaussian curvature {`$K$`}.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            In 2D, parallel transport around a small loop rotates a vector by an angle. A rotation
            of a 1D space is just a number. In higher dimensions, a rotation of {`$n$`}-dimensional
            space is a linear operator (skew-symmetric matrix). The curvature tensor{' '}
            {`$\\Omega(\\xi, \\eta)$`} is exactly that operator, encoding all rotation information
            for the infinitesimal loop in the {`$(\\xi, \\eta)$`}-plane.
          </p>
        </div>
      </>,

      <>
        <h2>Covariant Differentiation</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            On a flat plane, you can differentiate a vector field {`$X$`} in the direction{' '}
            {`$\\xi$`} just by taking the ordinary derivative. On a sphere, why would this not give
            a vector tangent to the sphere?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The ordinary derivative measures change in the ambient space and points partly
              outward. Parallel-translating the displaced vector back to the base point along the
              geodesic removes that outward component and leaves the true geometric rate of change
              on the surface.
            </p>
          </details>
        </div>

        <p>
          <strong>Covariant derivative.</strong> The <strong>covariant derivative</strong>{' '}
          {`$\\nabla_\\xi X$`} at a point {`$p$`} in direction {`$\\xi$`} is defined by: (1) move
          the vector {`$X(p + \\varepsilon \\xi)$`} back to {`$p$`} by parallel translation along
          the geodesic, (2) take the limit{' '}
          {`$\\frac{X(p + \\varepsilon \\xi) - X(p)}{\\varepsilon}$`} as {`$\\varepsilon \\to 0$`}.
        </p>

        <p>
          <strong>Christoffel symbols.</strong> In local coordinates,{' '}
          {`$\\nabla_i X^k = \\partial_i X^k + \\Gamma^k_{ij} X^j$`}, where the Christoffel symbols
          are:
        </p>
        <div className="lrn-eq">{`$$\\Gamma^k_{ij} = \\frac{1}{2}\\, g^{kl}\\!\\left(\\partial_i g_{jl} + \\partial_j g_{il} - \\partial_l g_{ij}\\right)$$`}</div>
        <p>These encode how the coordinate basis vectors change as you move.</p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The ordinary derivative {`$\\partial_i X^k$`} measures change in coordinates, not in the
            actual geometric vector. As you move from point to point, the coordinate basis vectors
            themselves rotate and stretch. The Christoffel symbols {`$\\Gamma^k_{ij}$`} measure this
            change of basis. Subtracting the change of basis (via parallel translation) gives the
            true geometric rate of change.
          </p>
        </div>
      </>,

      <>
        <h2>The Jacobi Equation</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Two geodesics start from nearby points going in the same direction. On a sphere they
            will converge at the antipodal point. On a negatively curved surface they will diverge.
            What equation governs the separation between them?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              An equation involving the curvature: the separation should satisfy a second-order ODE
              with the curvature as a coefficient.
            </p>
          </details>
        </div>

        <p>
          <strong>The Jacobi equation.</strong> The deviation vector{' '}
          {`$\\xi(t) = \\frac{\\partial \\gamma_s}{\\partial s} |_{s=0}$`} between nearby geodesics
          satisfies:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$\\frac{D^2 \\xi}{Dt^2} = -\\Omega(v, \\xi) v$$`}</div>
        <p>
          where {`$v = \\dot{\\gamma}_0$`} is the tangent to the reference geodesic and{' '}
          {`$\\Omega$`} is the curvature tensor.
        </p>

        <p>
          <strong>In 2D: scalar form.</strong> For the component of {`$\\xi$`} normal to {`$v$`},
          write {`$\\xi = y \\cdot n$`}. Then:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$\\ddot{y} = -K y$$`}</div>
        <ul className="lrn-list">
          <li>
            If {`$K > 0$`}: {`$\\ddot{y} = -Ky$`} (oscillatory). Geodesics oscillate around each
            other.
          </li>
          <li>
            If {`$K < 0$`}: {`$\\ddot{y} = |K|y$`} (exponential growth). Geodesics diverge.
          </li>
          <li>
            If {`$K = 0$`}: {`$\\ddot{y} = 0$`} (linear growth). Geodesics separate linearly.
          </li>
        </ul>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does the curvature tensor appear when you commute covariant derivatives?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The curvature tensor is defined exactly as the failure of covariant derivatives to
              commute:{' '}
              {`$\\nabla_\\xi \\nabla_\\eta - \\nabla_\\eta \\nabla_\\xi = \\Omega(\\xi, \\eta)$`}.
              Switching the order of differentiation in the derivation of the Jacobi equation
              produces this commutator directly.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Investigation of the Jacobi Equation</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The Jacobi equation {`$\\ddot{y} = -Ky$`} looks like the harmonic oscillator equation
            when {`$K > 0$`}. What happens to the solution when {`$K < 0$`}?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              When {`$K < 0$`}, the equation is {`$\\ddot{y} = |K|y$`}, which has exponentially
              growing solutions instead of oscillating ones.
            </p>
          </details>
        </div>

        <p>
          <strong>Solutions.</strong> The general solution of {`$\\ddot{y} = -Ky$`} is:
        </p>
        <ul className="lrn-list">
          <li>
            {`$K > 0$`}: {`$y(t) = A \\cos(\\sqrt{K} t) + B \\sin(\\sqrt{K} t)$`} - oscillates,
            zeros at {`$t = \\frac{\\pi}{\\sqrt{K}}$`}.
          </li>
          <li>
            {`$K < 0$`}: {`$y(t) = A e^{\\sqrt{|K|} t} + B e^{-\\sqrt{|K|} t}$`} - grows
            exponentially.
          </li>
          <li>
            {`$K = 0$`}: {`$y(t) = A + Bt$`} - grows linearly.
          </li>
        </ul>

        <p>
          <strong>Characteristic exponent and path length.</strong> For a manifold with negative
          curvature {`$K < 0$`}, the exponential growth rate is {`$\\lambda = \\sqrt{|K|}$`}. The{' '}
          <strong>characteristic path length</strong> is {`$s = \\frac{1}{\\lambda}$`}: the distance
          over which two nearby geodesics diverge by a factor of {`$e$`}.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Suppose initial error is {`$\\delta_0$`} and tolerance is {`$\\Delta$`}. The error grows
            to {`$\\delta_0 e^{\\lambda t}$`}, which exceeds {`$\\Delta$`} at{' '}
            {`$t = \\frac{1}{\\lambda}\\ln\\frac{\\Delta}{\\delta_0}$`}. Improving precision by
            halving {`$\\delta_0$`} only adds {`$\\frac{\\ln 2}{\\lambda}$`} to the horizon. You
            cannot push the horizon to infinity by finite precision improvement. The limit is
            fundamental, not technological.
          </p>
        </div>

        <JacobiGeodesicDeviation />
      </>,

      <>
        <h2>Geodesic Flows on Compact Manifolds of Negative Curvature</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            On a compact surface of constant negative curvature, a "ball" bouncing inside will never
            settle down. Do you think such a system is ergodic (time averages equal space averages)?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. The exponential divergence of geodesics means every neighborhood of every
              trajectory eventually covers the whole unit tangent bundle. No invariant subset of
              positive measure can exist except the whole space.
            </p>
          </details>
        </div>

        <p>
          <strong>Ergodicity.</strong> On compact manifolds of negative curvature, the geodesic flow
          is <strong>ergodic</strong>: time averages of any function equal space averages (proved by
          Sinai and Anosov in the 1960s). The exponential divergence of geodesics makes the system
          mix thoroughly.
        </p>

        <p>
          <strong>Structural stability.</strong> The geodesic flow on a compact negative-curvature
          manifold is <strong>structurally stable</strong> (Anosov 1967, proving Smale's 1961
          conjecture). Small perturbations of the flow are topologically conjugate to the original.
        </p>

        <p>
          <strong>Boltzmann ergodic hypothesis.</strong> The hypothesis that the time average of a
          gas equals the phase-space average was proved for elastic balls by Sinai (Russian
          Mathematical Surveys 25, 1970). The key tool was the exponential instability of geodesic
          flows on compact manifolds of negative curvature.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Ergodicity requires thorough mixing. Negative curvature causes nearby geodesics to
            diverge exponentially, which means every neighborhood of every trajectory eventually
            covers all of {`$T_1 M$`} (the unit tangent bundle). This is the Anosov (hyperbolic)
            property, from which ergodicity follows: no proper invariant subset of positive measure
            can survive the mixing.
          </p>
        </div>
      </>,

      <>
        <h2>Geodesics on Lie Groups: Notation and Representations</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A rigid body fixed at a point can rotate freely. Can you guess what the "configuration
            space" (set of all orientations) of the body looks like geometrically?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The configuration space is the group {`$SO(3)$`} of all rotations: a 3-dimensional
              manifold where each point is an orientation.
            </p>
          </details>
        </div>

        <p>
          <strong>Setup.</strong> Let {`$G$`} be a Lie group (a group that is also a smooth
          manifold). The <strong>Lie algebra</strong> {`$\\mathfrak{g}$`} is the tangent space at
          the identity with the commutator bracket {`$[\\xi, \\eta]$`}.
        </p>

        <p>
          <strong>Adjoint representation.</strong> The <strong>adjoint representation</strong>{' '}
          {`$\\text{Ad}_g: \\mathfrak{g} \\to \\mathfrak{g}$`} is the derivative of conjugation by{' '}
          {`$g$`} (conjugation means {`$h \\mapsto ghg^{-1}$`}: sandwich {`$h$`} between {`$g$`} and{' '}
          {`$g^{-1}$`}): {`$\\text{Ad}_g = (R_{g^{-1}} L_g)_{*e}$`}. The infinitesimal form is:{' '}
          {`$\\text{ad}_\\xi(\\eta) = [\\xi, \\eta]$`}.
        </p>

        <p>
          <strong>Co-adjoint representation.</strong> The <strong>co-adjoint representation</strong>{' '}
          {`$\\text{Ad}^*$`} acts on the dual space {`$\\mathfrak{g}^*$`} (the set of all linear
          functions {`$\\mathfrak{g} \\to \\mathbb{R}$`}) by:{' '}
          {`$(\\text{Ad}^*_g f)(\\xi) = f(\\text{Ad}_{g^{-1}} \\xi)$`}. It satisfies{' '}
          {`$\\text{Ad}^*_{gh} = \\text{Ad}^*_h \\text{Ad}^*_g$`}.
        </p>

        <p>
          <strong>Symplectic form on co-adjoint orbit.</strong> Each co-adjoint orbit{' '}
          {`$\\mathcal{O} \\subset \\mathfrak{g}^*$`} carries a natural symplectic form (the{' '}
          <strong>Kirillov form</strong>):
        </p>
        <div className="lrn-eq">{`$$\\Omega(\\xi_1, \\xi_2) = \\langle x, [a_1, a_2] \\rangle, \\quad \\xi_i = \\text{ad}^*_{a_i} x$$`}</div>
        <p>
          where {`$\\text{ad}^*_{a_i} x$`} is the infinitesimal co-adjoint action of {`$a_i$`} at
          the point {`$x$`}: the tangent vector to the orbit generated by {`$a_i$`}.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The group {`$G$`} acts on {`$\\mathfrak{g}^*$`} by the co-adjoint representation, and
            the tangent vectors to the orbit are exactly the infinitesimal generators of this
            action. The Kirillov form is the unique {`$G$`}-invariant symplectic form on the orbit,
            and it is non-degenerate because the orbit is the "minimal" invariant manifold.
          </p>
        </div>
      </>,

      <>
        <h2>Left-Invariant Metrics on Lie Groups</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The kinetic energy of a rigid body is {`$\\frac{1}{2}(A \\omega, \\omega)$`} where{' '}
            {`$A$`} is the inertia tensor. Does this define a Riemannian metric on the configuration
            space?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. The kinetic energy is a positive definite quadratic form on the velocity. At each
              configuration, this gives an inner product on the tangent space, which is a Riemannian
              metric.
            </p>
          </details>
        </div>

        <p>
          <strong>Definition.</strong> A <strong>left-invariant metric</strong> on {`$G$`} is a
          Riemannian metric preserved by all left translations {`$L_g: h \\mapsto gh$`}. It is
          determined entirely by the scalar product {`$\\langle \\cdot, \\cdot \\rangle = A$`} on{' '}
          {`$\\mathfrak{g}$`}, where {`$A: \\mathfrak{g} \\to \\mathfrak{g}^*$`} is the{' '}
          <strong>inertia operator</strong> (symmetric positive definite).
        </p>

        <p>
          <strong>The B operator.</strong> Euler's equation lives on {`$\\mathfrak{g}$`}, but the
          co-adjoint action lives on {`$\\mathfrak{g}^*$`}. To write everything on{' '}
          {`$\\mathfrak{g}$`}, we define {`$B(c, a) \\in \\mathfrak{g}$`} by:{' '}
          {`$\\langle [a, b], c \\rangle = \\langle B(c, a), b \\rangle$`} for all{' '}
          {`$b \\in \\mathfrak{g}$`}. This is the co-adjoint action pulled back to{' '}
          {`$\\mathfrak{g}$`}
          via the inertia operator: {`$B(c,a) = A^{-1}\\text{ad}^*_a(Ac)$`}.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The defining relation {`$\\langle [a,b], c \\rangle = \\langle B(c,a), b \\rangle$`}{' '}
            says {`$B(c,a)$`} is the {`$\\mathfrak{g}$`}-adjoint of the map {`$b \\mapsto [a,b]$`}{' '}
            with respect to the inner product {`$A$`}. In matrix language, {`$B(c,a)$`} is obtained
            by transposing the adjoint action into body coordinates. Without {`$B$`}, Euler's
            equation would require working in {`$\\mathfrak{g}^*$`}; with {`$B$`}, everything stays
            on {`$\\mathfrak{g}$`}.
          </p>
        </div>
      </>,

      <>
        <h2>Example: {`$G = SO(3)$`} (Rigid Body)</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A rigid body fixed at its center of mass can rotate freely. The energy depends on the
            angular velocity. How does the angular velocity differ when measured from a body-fixed
            frame vs. a space-fixed frame?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The body-frame angular velocity is computed by left-translating the velocity to the
              identity; the space-frame by right-translating. They measure the same rotation but
              from different reference frames.
            </p>
          </details>
        </div>

        <p>
          <strong>Two angular velocities.</strong> Let {`$g(t)$`} be the orientation of the body
          over time, and {`$\\dot{g}$`} the velocity.
        </p>
        <ul className="lrn-list">
          <li>
            <strong>Angular velocity in the body frame:</strong>{' '}
            {`$\\omega_c = L_{g^{-1}*} \\dot{g}$`} (left translate {`$\\dot{g}$`} to the identity).
          </li>
          <li>
            <strong>Angular velocity in the space frame:</strong>{' '}
            {`$\\omega_s = R_{g^{-1}*} \\dot{g}$`} (right translate {`$\\dot{g}$`} to the identity).
          </li>
        </ul>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Body Frame</span>
            <p>
              Angular velocity {`$\\omega_c = L_{g^{-1}*}\\dot{g}$`}. Angular momentum{' '}
              {`$M_c = A\\omega_c$`} (not conserved). Equation: {`$\\dot{M}_c = [\\omega_c, M_c]$`}{' '}
              (Euler).
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Space Frame</span>
            <p>
              Angular velocity {`$\\omega_s = R_{g^{-1}*}\\dot{g}$`}. Angular momentum{' '}
              {`$M_s = \\text{Ad}^*_g M_c$`} (conserved). Equation: {`$\\dot{M}_s = 0$`}.
            </p>
          </div>
        </div>

        <p>
          <strong>Co-adjoint orbits for {`$SO(3)$`}.</strong> The co-adjoint orbits are spheres:{' '}
          {`$M_1^2 + M_2^2 + M_3^2 = \\text{const}$`}. Each sphere is an invariant manifold for the
          rigid body equations.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Space angular momentum {`$M_s = \\text{Ad}^*_g M_c$`} is measured in a fixed inertial
            frame. There is no external torque, so it is conserved by rotational symmetry. Body
            angular momentum {`$M_c$`} is measured in the rotating body frame. As the body rotates,
            the axes of the body frame rotate relative to space, so {`$M_c$`} changes direction,
            even though {`$M_s$`} stays fixed in space.
          </p>
        </div>

        <CoadjointOrbitSphere />
      </>,

      <>
        <h2>Euler's Equation for the Generalized Rigid Body</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            For a free rigid body, the angular momentum in space is conserved. Does this mean the
            body-frame angular momentum is also conserved?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              No. The body-frame angular momentum is measured in rotating axes. Even though the
              physical angular momentum vector does not change, its components in the rotating body
              frame change as the body rotates.
            </p>
          </details>
        </div>

        <p>
          <strong>Euler's equation.</strong> The angular velocity in the body frame satisfies:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$\\dot{M}_c = [\\omega_c, M_c], \\quad \\text{equivalently} \\quad \\dot{\\omega}_c = B(\\omega_c, \\omega_c)$$`}</div>
        <p>
          Here {`$[\\omega_c, M_c]$`} is the Lie bracket in {`$\\mathfrak{g}$`}. (The body angular
          momentum {`$M_c$`} evolves on a co-adjoint orbit; the Lie bracket encodes the rotation of
          body axes relative to space.)
        </p>

        <p>
          <strong>Hamiltonian structure.</strong> Euler's equation is Hamiltonian on each co-adjoint
          orbit with Hamiltonian:
        </p>
        <div className="lrn-eq">{`$$H = \\frac{1}{2}\\langle M_c, A^{-1} M_c \\rangle = \\frac{1}{2}\\langle \\omega_c, M_c \\rangle$$`}</div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why is the Hamiltonian {`$H = \\frac{1}{2}\\langle \\omega_c, M_c \\rangle$`} and not
            some other function?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              This is the kinetic energy of the rigid body:{' '}
              {`$T = \\frac{1}{2}(A\\omega_c, \\omega_c) = \\frac{1}{2}(M_c, \\omega_c)$`}. The
              Hamiltonian equals the kinetic energy because there is no potential energy for a free
              body.
            </p>
          </details>
        </div>

        <p>
          <strong>Stationary rotations and their stability.</strong> A rotation{' '}
          {`$\\omega_c = \\omega e_i$`} around a principal axis {`$e_i$`} is a stationary point of
          Euler's equation. The intermediate axis (middle moment of inertia {`$I_2$`}, with{' '}
          {`$I_1 < I_2 < I_3$`}) gives an <strong>unstable</strong> rotation. The axes with largest
          ({`$I_3$`}) and smallest ({`$I_1$`}) moments give stable rotations.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            On the angular momentum sphere {`$|M|^2 = \\text{const}$`}, the energy{' '}
            {`$H = \\frac{1}{2}(\\frac{M_1^2}{I_1} + \\frac{M_2^2}{I_2} + \\frac{M_3^2}{I_3})$`} has
            three critical points corresponding to the three axes. The {`$I_3$`}-axis (maximum
            moment) is a minimum of {`$H$`} on the sphere. The {`$I_1$`}-axis (minimum moment) is a
            maximum of {`$H$`} on the sphere. The {`$I_2$`}-axis is a saddle point. Energy minima
            and maxima are stable; saddle points are unstable.
          </p>
        </div>
      </>,

      <>
        <h2>Riemannian Curvature of Lie Groups with Left-Invariant Metric</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            For the rigid body ({`$SO(3)$`}), do you expect the curvature to be positive or
            negative? Why might the sign matter for stability?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              For compact Lie groups with bi-invariant metric, the curvature is non-negative. This
              means nearby geodesics (nearby rotations) converge, suggesting stability.
            </p>
          </details>
        </div>

        <p>
          <strong>Curvature formula (Theorem 10).</strong> For a Lie group {`$G$`} with
          left-invariant metric and orthonormal {`$\\xi, \\eta$`}:
        </p>
        <div className="lrn-eq">{`$$K_{\\xi, \\eta} = \\langle \\delta, \\delta \\rangle + 2\\langle \\alpha, \\beta \\rangle - 3\\langle \\alpha, \\alpha \\rangle - 4\\langle B_\\xi, B_\\eta \\rangle$$`}</div>
        <p>
          where {`$\\alpha = \\frac{1}{2}[\\xi, \\eta]_\\mathfrak{g}$`},{' '}
          {`$\\beta = \\frac{1}{2}B(\\xi, \\eta)$`}, {`$\\delta = \\frac{1}{2}(\\alpha - \\beta)$`}.
        </p>

        <p>
          <strong>Two-sided invariant metric simplification.</strong> For a bi-invariant metric
          (preserved by both left and right translations):
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$K_{\\xi, \\eta} = \\frac{1}{4}\\langle [\\xi, \\eta], [\\xi, \\eta] \\rangle \\geq 0$$`}</div>
        <p>Bi-invariant metrics always have non-negative curvature.</p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Under bi-invariance, left and right translations produce the same geodesics, so the{' '}
            {`$B$`} operation satisfies {`$B(c,a) = \\frac{1}{2}[c,a]$`}. Most terms in the general
            formula cancel. The only remaining term is the commutator squared, giving{' '}
            {`$K = \\frac{1}{4}|[\\xi,\\eta]|^2 \\geq 0$`}.
          </p>
        </div>
      </>,

      <>
        <h2>Ideal Fluid as Geodesic on Group of Diffeomorphisms</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The motion of an ideal (inviscid, incompressible) fluid in a region {`$D$`} is
            determined by a velocity field that changes over time. Can you think of this as a "path"
            in some infinite-dimensional space?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes: each configuration of the fluid is a volume-preserving diffeomorphism of {`$D$`}.
              The time evolution is a path in the group {`$\\text{SDiff}(D)$`} of all such
              diffeomorphisms.
            </p>
          </details>
        </div>

        <p>
          <strong>The geometric picture.</strong> The configuration of an ideal fluid in region{' '}
          {`$D$`} is a volume-preserving diffeomorphism {`$g: D \\to D$`}. The group{' '}
          {`$\\text{SDiff}(D)$`} of volume-preserving diffeomorphisms is the configuration space.
        </p>

        <p>
          <strong>Geodesics = fluid flows.</strong> The flow of an ideal fluid is a geodesic in the
          right-invariant {`$L^2$`} metric on {`$\\text{SDiff}(D)$`}: the kinetic energy{' '}
          {`$T = \\frac{1}{2}\\int_D |v|^2 \\, dx$`} defines the metric.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The kinetic energy {`$T = \\frac{1}{2}\\int_D |v|^2 dx$`} depends on the velocity field{' '}
            {`$v$`} in the fixed spatial frame. A right translation corresponds to relabeling fluid
            particles without changing the velocity in space. The kinetic energy sees only the
            spatial velocity, so it is unchanged by this relabeling. This is why the metric is
            right-invariant.
          </p>
        </div>
      </>,

      <>
        <h2>Euler's Equations in Bernoulli Form and Vorticity</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            For a fluid with velocity field {`$v$`}, the vorticity {`$\\omega = \\text{curl}(v)$`}{' '}
            measures local rotation. If there is no viscosity, do you expect the vorticity to grow,
            decay, or be transported?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Transported: ideal flow has no mechanism to create or destroy vorticity, only to move
              it with the fluid.
            </p>
          </details>
        </div>

        <p>
          <strong>Bernoulli form of Euler's equations.</strong> For an ideal incompressible fluid (
          {`$\\text{div}\\, v = 0$`}):
        </p>
        <div className="lrn-eq">{`$$\\frac{\\partial v}{\\partial t} = v \\wedge \\text{curl}\\, v + \\text{grad}\\, \\alpha, \\quad \\alpha = -p - \\frac{|v|^2}{2}$$`}</div>

        <p>
          <strong>Vorticity equation.</strong> Taking the curl:
        </p>
        <div className="lrn-eq">{`$$\\frac{\\partial (\\text{curl}\\, v)}{\\partial t} = [v, \\text{curl}\\, v]$$`}</div>
        <p>where {`$[v, w]$`} is the commutator of vector fields.</p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The Lie bracket {`$[v, w]$`} measures the infinitesimal failure of the flows of {`$v$`}{' '}
            and {`$w$`} to commute. In the fluid, the vorticity is "frozen" into the fluid: it moves
            with fluid particles. The equation {`$\\partial_t \\omega = [v, \\omega]$`} (Lie
            derivative) is exactly the statement that vorticity is Lie-transported by the flow.
          </p>
        </div>
      </>,

      <>
        <h2>Isovorticial Fields and Kelvin's Theorem</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Kelvin's circulation theorem says the circulation around a material loop is conserved.
            Does this mean the vorticity field is "frozen" into the fluid?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. Kelvin's theorem is equivalent to the statement that vorticity is Lie-transported
              (frozen) by the flow. The vorticity moves with fluid particles.
            </p>
          </details>
        </div>

        <p>
          <strong>Kelvin's circulation theorem (Theorem 12).</strong> The circulation{' '}
          {`$\\oint_\\gamma v \\cdot dl$`} around any closed contour {`$\\gamma$`} moving with the
          fluid does not change over time. This is equivalent to the vorticity equation.
        </p>

        <p>
          <strong>2D vs. 3D fluids.</strong>
        </p>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">2D Ideal Fluid</span>
            <p>
              Vorticity is a scalar function {`$\\omega = \\text{curl}(v)$`}. Every integral{' '}
              {`$\\int \\phi(\\omega) \\, dA$`} is conserved. Infinitely many first integrals.
              Co-adjoint orbits well understood.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">3D Ideal Fluid</span>
            <p>
              Vorticity is a vector field. Co-adjoint orbit structure is far more complicated. No
              complete list of conserved quantities. Whether smooth solutions exist for all time is
              an open problem - one of the seven Clay Millennium Prize Problems.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Stability of Planar Stationary Flows</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A river flows with velocity profile {`$v(y)$`} in the {`$x$`}-direction, varying only
            with the transverse coordinate {`$y$`}. If the profile is a smooth curve with an
            inflection point, do you expect the flow to be stable or unstable?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Potentially unstable. An inflection point means the vorticity has a local extremum. A
              perturbation can extract energy from the mean flow by interacting with the vorticity
              gradient there.
            </p>
          </details>
        </div>

        <p>
          <strong>Stability theorem (Theorem 13).</strong> In 2D, a flow with velocity field {`$v$`}{' '}
          can be encoded by a single scalar called the <strong>stream function</strong>{' '}
          {`$\\psi_0$`}: the velocity is {`$v = (-\\partial_y \\psi_0,\\, \\partial_x \\psi_0)$`}.
          The vorticity is {`$\\omega_0 = \\Delta \\psi_0$`}, where {`$\\Delta$`} is the Laplacian
          (sum of second partial derivatives). The stationary flow {`$v_0$`} is stable if:
        </p>
        <ol className="lrn-list">
          <li>
            The stream function is a function of the vorticity: {`$\\psi_0 = F(\\Delta \\psi_0)$`}{' '}
            for some {`$F$`}.
          </li>
          <li>
            The ratio{' '}
            {`$\\left|\\frac{\\text{grad}\\, \\psi_0}{\\text{grad}\\, \\omega_0}\\right|$`} is
            bounded.
          </li>
        </ol>

        <p>
          <strong>Rayleigh's criterion.</strong> The linearized analogue: a parallel flow is stable
          if the velocity profile has no inflection points ({`$\\frac{d^2v}{dy^2} \\neq 0$`}{' '}
          everywhere). This is Rayleigh's theorem.
        </p>

        <p>
          <strong>Example: flow on a torus {`$\\{(x, y) \\mod 2\\pi\\}$`}.</strong> Consider a
          sinusoidal flow. The flow is stable for {`$X \\leq 2\\pi$`} and unstable for{' '}
          {`$X > 2\\pi$`}. The length {`$X$`} determines whether the instability mode fits in the
          domain. The critical mode has wavelength {`$2\\pi$`}. It fits only if {`$X \\geq 2\\pi$`}.
        </p>
      </>,

      <>
        <h2>Riemannian Curvature of Groups of Diffeomorphisms</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The group of volume-preserving diffeomorphisms of a torus is the configuration space for
            ideal 2D fluid flows. Do you expect this space to have positive or negative curvature?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Negative (or zero). Fluid flows are chaotic and diverge exponentially, which is
              characteristic of negative curvature.
            </p>
          </details>
        </div>

        <p>
          <strong>Theorem 14 (Curvature formula for {`$\\text{SDiff}(T^2)$`}).</strong> For the
          torus {`$T^2 = \\{(x, y) \\mod 2\\pi\\}$`} with area {`$S$`}, the Fourier basis{' '}
          {`$e_k = e^{ik \\cdot x}$`} (here {`$k = (k_1, k_2)$`} is a pair of integers and{' '}
          {`$x = (x_1, x_2)$`} is the 2D coordinate on the torus) satisfies:
        </p>
        <ul className="lrn-list">
          <li>{`$\\langle e_k, e_{-k} \\rangle = k^2 S$`}.</li>
          <li>
            {`$[e_k, e_l] = (k \\wedge l) e_{k+l}$`}, where {`$k \\wedge l = k_1 l_2 - k_2 l_1$`}.
          </li>
        </ul>

        <p>
          <strong>Theorem 15 (Curvature via Fourier coefficients).</strong> The sectional curvature
          of {`$S_0 \\text{Diff}(T^2)$`} satisfies:
        </p>
        <div className="lrn-eq">{`$$\\langle \\Omega(\\xi, \\eta), \\xi \\rangle = -\\frac{S}{4} \\sum a^2_{k,l} |x_l + x_{l+2k}|^2 \\leq 0$$`}</div>
        <p>
          This is negative or zero: the group has <strong>non-positive curvature</strong>.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The coefficients {`$a_{k,l}$`} come from expressing the Lie bracket{' '}
            {`$[e_k, e_l] = (k \\wedge l)e_{k+l}$`} in terms of the basis. The sum{' '}
            {`$\\sum a^2_{k,l}|x_l + x_{l+2k}|^2$`} adds up contributions from all pairs of Fourier
            modes interacting through the bracket. Every term is non-negative, so the whole
            curvature is non-positive.
          </p>
        </div>
      </>,

      <>
        <h2>Weather Prediction and Exponential Instability</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A meteorologist knows the current state of the atmosphere to within 1% error. After one
            month, the error has grown by a factor of {`$10^{2.5}$`}. How far ahead can you predict
            before the error exceeds 100%?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The error exceeds 100% at {`$t = \\frac{1}{\\lambda}\\ln\\frac{\\Delta}{\\delta_0}$`}.
              With {`$\\lambda = 2.5 \\ln(10)$`} per month, {`$\\delta_0 = 0.01$`}, and{' '}
              {`$\\Delta = 1$`}: {`$t = \\frac{\\ln(100)}{2.5 \\ln(10)} = \\frac{2}{2.5} = 0.8$`}{' '}
              months. About 3 weeks.
            </p>
          </details>
        </div>

        <p>
          <strong>The model.</strong> Treat the atmosphere as an ideal 2D fluid flow on the torus{' '}
          {`$T^2$`} with area {`$S$`}. The geodesic flow on {`$\\text{SDiff}(T^2)$`} models
          atmospheric dynamics.
        </p>

        <p>
          <strong>Curvature and instability.</strong> The negative curvature of{' '}
          {`$\\text{SDiff}(T^2)$`} means geodesics diverge exponentially. The{' '}
          <strong>characteristic path length</strong> is {`$s = \\sqrt{2S}$`} (in appropriate
          units). Errors in initial conditions grow by a factor of {`$e$`} after one characteristic
          path length.
        </p>

        <p>
          <strong>Weather prediction horizon.</strong>
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$t_{\\rm pred} = \\frac{1}{\\lambda} \\ln\\!\\left(\\frac{\\Delta}{\\delta_0}\\right)$$`}</div>
        <p>
          where {`$\\lambda$`} is the characteristic exponent, {`$\\delta_0$`} is initial error, and{' '}
          {`$\\Delta$`} is tolerance.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Because in a system with characteristic exponent {`$\\lambda > 0$`}, an initial error{' '}
            {`$\\delta_0$`} grows to {`$\\delta_0 e^{\\lambda t}$`}. This exceeds a fixed tolerance{' '}
            {`$\\Delta$`} at {`$t = \\frac{1}{\\lambda} \\ln\\frac{\\Delta}{\\delta_0}$`}. Even
            halving {`$\\delta_0$`} only extends the horizon by {`$\\frac{\\ln 2}{\\lambda}$`}, a
            fixed additive constant. You cannot push the horizon to infinity by finite precision
            improvement.
          </p>
        </div>

        <p>
          <strong>Conclusion.</strong> The fundamental limit on weather prediction is not
          technological (better computers) but geometric (negative curvature of the dynamical
          group). Any initial error, no matter how small, eventually grows to the scale of the whole
          system.
        </p>
      </>
    ]
  },
  practice: [
    {
      q: `What is parallel translation on a surface? State the two preservation conditions.`,
      a: `Parallel translation moves a vector along a curve while preserving: (1) the angle between the vector and the tangent to the curve, and (2) the length of the vector. The result is the "most parallel" transport that stays on the surface.`
    },
    {
      q: `A vector is parallel-translated around a spherical right-angle triangle. How much does it rotate?`,
      a: `It rotates by 90 degrees. The rotation equals the area of the triangle on the sphere divided by $R^2$. For a right-angle triangle occupying $\\tfrac{1}{8}$ of the sphere's surface ($\\frac{4\\pi R^2}{8} = \\frac{\\pi R^2}{2}$), the rotation is $\\frac{\\frac{\\pi R^2}{2}}{R^2} = \\frac{\\pi}{2} = 90°$.`
    },
    {
      q: `A vector is parallel-translated around the 60th parallel (latitude $\\lambda = 60°$). How much does it rotate?`,
      a: `The formula gives $2\\pi(1 - \\sin \\lambda) \\approx 50°$. At $\\lambda = 60°$, $\\sin 60° = \\frac{\\sqrt{3}}{2} \\approx 0.866$, so $2\\pi(1 - \\sin 60°) \\approx 0.84$ radians $\\approx 50°$.`
    },
    {
      q: `Define the curvature form $\\Omega(\\xi, \\eta)$ for a surface.`,
      a: `$\\Omega(\\xi, \\eta) = \\lim_{\\varepsilon \\to 0} \\frac{\\Phi(\\Pi_\\varepsilon)}{\\varepsilon^2}$, where $\\Pi_\\varepsilon$ is the parallelogram with sides $\\varepsilon \\xi$ and $\\varepsilon \\eta$, and $\\Phi(\\Pi_\\varepsilon)$ is the rotation angle under parallel translation around its boundary. It measures how much a vector rotates per unit area of the parallelogram.`
    },
    {
      q: `On a 2D surface, the curvature form satisfies $\\Omega = K \\, dS$. What does this mean for parallel translation around a region $D$?`,
      a: `The total rotation angle under parallel translation around $\\partial D$ equals $\\int_D K \\, dS$: the integral of the Gaussian curvature over the region. For a sphere of radius $R$, $K = R^{-2}$, so the rotation around a spherical region equals $\\frac{\\text{area}}{R^2}$.`
    },
    {
      q: `List the curvature values for the three standard 2D geometries.`,
      a: `Euclidean plane: $K = 0$. Sphere of radius $R$: $K = R^{-2}$. Lobachevsky plane: $K = -1$. The sign of $K$ determines geodesic behavior: positive makes geodesics converge, negative makes them diverge.`
    },
    {
      q: `The Jacobi equation for geodesic deviation in 2D is $\\ddot{y} = -Ky$. Describe the solution for $K = -1$.`,
      a: `$y(t) = A e^t + B e^{-t}$. For initial conditions $y(0) = 0$, $\\dot{y}(0) = 1$: $y(t) = \\sinh(t)$. The separation grows exponentially. Nearby geodesics on a negatively curved surface diverge at an exponential rate.`
    },
    {
      q: `What is the characteristic path length $s$ for exponential instability?`,
      a: `$s = \\frac{1}{\\lambda}$, where $\\lambda$ is the characteristic exponent $\\lambda = \\lim_{T\\to\\infty} \\frac{1}{T} \\max \\ln|\\xi(t)|$. After traveling distance $s$, two nearby geodesics have diverged by a factor of $e$.`
    },
    {
      q: `Why does negative curvature on a compact manifold imply ergodicity of the geodesic flow?`,
      a: `Negative curvature causes exponential divergence of nearby geodesics (Jacobi equation: $\\ddot{y} = |K|y$). Every neighborhood of any trajectory eventually spreads over the entire unit tangent bundle. No proper invariant subset of positive measure can exist. This is the Anosov property, which implies ergodicity.`
    },
    {
      q: `What is the adjoint representation $\\text{Ad}_g$ of a Lie group?`,
      a: `$\\text{Ad}_g: \\mathfrak{g} \\to \\mathfrak{g}$ is the derivative at the identity of conjugation by $g$: $\\text{Ad}_g = (R_{g^{-1}} L_g)_{*e}$. In words: conjugate $g$ acts on the Lie algebra by the derivative of $h \\mapsto g h g^{-1}$. The infinitesimal form is $\\text{ad}_\\xi(\\eta) = [\\xi, \\eta]$.`
    },
    {
      q: `What is the Kirillov symplectic form on a co-adjoint orbit?`,
      a: `For a co-adjoint orbit $\\mathcal{O} \\subset \\mathfrak{g}^*$, the Kirillov form at $x \\in \\mathcal{O}$ is $\\Omega(\\xi_1, \\xi_2) = \\langle x, [a_1, a_2] \\rangle$, where $\\xi_i = \\text{ad}^*_{a_i} x$ are the tangent vectors generated by $a_i \\in \\mathfrak{g}$. It is a $G$-invariant non-degenerate 2-form, making each co-adjoint orbit a symplectic manifold.`
    },
    {
      q: `State Euler's equation for the angular velocity of a generalized rigid body.`,
      a: `$\\dot{\\omega}_c = B(\\omega_c, \\omega_c)$, where $B(c, a) = A^{-1}[a, Ac]$. Equivalently, $\\dot{M}_c = [\\omega_c, M_c]$ (Lie bracket in $\\mathfrak{g}$) where $M_c = A\\omega_c$. The body angular momentum moves on the co-adjoint orbit (a sphere for $SO(3)$), while the space angular momentum $M_s$ is conserved.`
    },
    {
      q: `For $G = SO(3)$, what are the co-adjoint orbits, and what do they represent physically?`,
      a: `Co-adjoint orbits are spheres $M_1^2 + M_2^2 + M_3^2 = \\text{const}$ in $\\mathfrak{so}(3)^*$. Physically, each sphere is the set of body angular momenta with fixed magnitude $|M_c|$. The body angular momentum moves on one of these spheres.`
    },
    {
      q: `A rigid body has principal moments $I_1 < I_2 < I_3$. Which rotation is unstable?`,
      a: `Rotation around the intermediate principal axis ($I_2$). The energy $H = \\frac{1}{2}(\\frac{M_1^2}{I_1} + \\frac{M_2^2}{I_2} + \\frac{M_3^2}{I_3})$ on the sphere $|M|^2 = \\text{const}$ has its saddle point at the $I_2$ axis. Rotations around the $I_1$ and $I_3$ axes are stable.`
    },
    {
      q: `For a Lie group with bi-invariant metric, what is the curvature formula?`,
      a: `$K_{\\xi, \\eta} = \\frac{1}{4}\\langle [\\xi, \\eta], [\\xi, \\eta] \\rangle \\geq 0$. Bi-invariant metrics always have non-negative curvature. The curvature is zero only when $[\\xi, \\eta] = 0$ (commuting directions).`
    },
    {
      q: `What geometric structure makes ideal fluid flows geodesics?`,
      a: `The kinetic energy $T = \\frac{1}{2}\\int_D |v|^2 \\, dx$ defines a right-invariant $L^2$ metric on $\\text{SDiff}(D)$, the group of volume-preserving diffeomorphisms of $D$. The Euler equations for ideal fluid are exactly the geodesic equations for this metric.`
    },
    {
      q: `State Kelvin's circulation theorem.`,
      a: `The circulation $\\oint_\\gamma v \\cdot dl$ around any closed contour $\\gamma$ moving with the fluid does not change over time. Equivalently: the vorticity $\\text{curl}(v)$ is transported by the flow (frozen into the fluid).`
    },
    {
      q: `Why are there infinitely many conserved quantities for a 2D ideal fluid but not for 3D?`,
      a: `In 2D, the vorticity $\\omega = \\text{curl}(v)$ is a scalar function, and it is transported by the flow. Every integral $\\int_D \\phi(\\omega) \\, dA$ (for any function $\\phi$) is conserved. In 3D, the vorticity is a vector field and its transport is far more complex; the geometry of co-adjoint orbits is not understood well enough.`
    },
    {
      q: `State Rayleigh's criterion for stability of a parallel flow $v = v(y)$.`,
      a: `A parallel flow is (linearly) stable if the velocity profile has no inflection points: $\\frac{d^2v}{dy^2} \\neq 0$ everywhere. If there is an inflection point, the flow can be unstable.`
    },
    {
      q: `What sign is the sectional curvature of $S_0\\text{Diff}(T^2)$?`,
      a: `Non-positive: $\\langle \\Omega(\\xi, \\eta), \\xi \\rangle = -\\frac{S}{4} \\sum a^2_{k,l} |x_l + x_{l+2k}|^2 \\leq 0$ (Theorem 15). The group of volume-preserving diffeomorphisms of the torus has non-positive curvature everywhere.`
    },
    {
      q: `Why does negative curvature of $S_0\\text{Diff}(T^2)$ imply a finite weather prediction horizon?`,
      a: `Negative curvature causes geodesics (fluid trajectories) to diverge exponentially. The characteristic exponent $\\lambda > 0$ means initial errors grow as $e^{\\lambda t}$. An initial error $\\delta_0$ exceeds tolerance $\\Delta$ at time $t = \\frac{1}{\\lambda}\\ln\\frac{\\Delta}{\\delta_0}$. This is finite for any $\\delta_0 > 0$, and cannot be made infinite by improving initial data.`
    },
    {
      q: `What does the Boltzmann ergodic hypothesis state, and who proved it for elastic balls?`,
      a: `The hypothesis states that the time average of a gas equals the phase-space average. For elastic balls (hard-sphere gas), this was proved by Sinai (Russian Mathematical Surveys 25, 1970). The key tool was the exponential instability of geodesic flows on compact manifolds of negative curvature.`
    },
    {
      q: `For the Lobachevsky plane $ds^2 = \\frac{dx^2 + dy^2}{y^2}$, what are the geodesics?`,
      a: `Circles and straight lines perpendicular to the $x$-axis. These are the curves that minimize arc length in the Lobachevsky metric. The curvature is $K = -1$ everywhere, and the geodesics diverge exponentially.`
    },
    {
      q: `Why does parallel translation around any closed curve on a flat surface (K=0) always return the vector to its original direction?`,
      a: `The total rotation equals $\\int_D K \\, dS = \\int_D 0 \\, dS = 0$ for any region $D$ bounded by the curve. So no rotation accumulates regardless of the path or the region it encloses.`
    },
    {
      q: `A surface has curvature $K > 0$ everywhere. Two geodesics start parallel at distance $\\varepsilon$ apart. How does their separation evolve according to the Jacobi equation?`,
      a: `The Jacobi equation $\\ddot{y} = -Ky$ with $K > 0$ gives oscillatory solutions $y(t) = A\\cos(\\sqrt{K}t) + B\\sin(\\sqrt{K}t)$. The geodesics converge to zero separation at $t = \\frac{\\pi}{\\sqrt{K}}$ (the first zero of $y$), then diverge, then converge again.`
    },
    {
      q: `What is the physical content of Kelvin's circulation theorem? State it precisely and give one consequence.`,
      a: `Theorem 12: the circulation $\\Gamma(t) = \\oint_{\\gamma(t)} v \\cdot dl$ around any closed contour $\\gamma(t)$ moving with the fluid particles is constant: $\\frac{d\\Gamma}{dt} = 0$. One consequence: if a region of fluid has zero vorticity initially, it has zero vorticity for all time (vorticity cannot be created or destroyed in ideal flow, only transported).`
    },
    {
      q: `Why does free rigid body motion define a geodesic on $SO(3)$?`,
      a: `Free rigid body motion has no external forces or torques: it is "inertial" motion in the configuration space. The kinetic energy $T = \\frac{1}{2}\\langle A\\omega_c, \\omega_c \\rangle$ defines a left-invariant Riemannian metric on $SO(3)$. Euler-Lagrange equations for a free particle in a Riemannian manifold are exactly the geodesic equations. The free rigid body satisfies these equations.`
    },
    {
      q: `For the tradewind model, the curvature satisfies $-\\frac{2}{S} \\leq K \\leq 0$ and the characteristic path length is $s = \\sqrt{2S}$. If $S = 4$ (in normalized units), compute $s$ and the minimum characteristic exponent.`,
      a: `$s = \\sqrt{2 \\cdot 4} = \\sqrt{8} = 2\\sqrt{2} \\approx 2.83$. The characteristic exponent: $\\lambda = \\frac{1}{s} = \\frac{1}{2\\sqrt{2}} \\approx 0.35$. The maximum curvature is $K = -\\frac{2}{S} = -\\tfrac{1}{2}$, giving $\\lambda_{\\max} = \\sqrt{\\tfrac{1}{2}} \\approx 0.71$.`
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Momentum Maps and Reduction',
    sections: [
      <>
        <h2>Riemannian Curvature</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Curvature Form on Vectors</span>
          <div className="lrn-definition-desc">
            <p>{`$\\Omega(\\xi, \\eta) = \\lim_{\\varepsilon \\to 0} \\frac{\\Phi(\\Pi_\\varepsilon)}{\\varepsilon^2}$`}</p>
            <p>
              When to use: defining the curvature 2-form from the rotation per unit area of an
              infinitesimal parallelogram.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Curvature and Area (2D)</span>
          <div className="lrn-definition-desc">
            <p>{`$\\Omega = K \\, dS$`}</p>
            <p>
              When to use: relating the curvature form to Gaussian curvature {`$K$`} and the area
              element {`$dS$`} on a 2D surface.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Curvature of Standard Spaces</span>
          <div className="lrn-definition-desc">
            <ul className="lrn-list">
              <li>
                Euclidean plane ({`$dx^2 + dy^2$`}): {`$K = 0$`}.
              </li>
              <li>
                Sphere of radius {`$R$`}: {`$K = R^{-2}$`}.
              </li>
              <li>
                Lobachevsky plane ({`$\\frac{dx^2+dy^2}{y^2}$`}): {`$K = -1$`}.
              </li>
            </ul>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Sectional Curvature</span>
          <div className="lrn-definition-desc">
            <p>
              {`$K = \\langle \\Omega(\\xi, \\eta) \\xi, \\eta \\rangle$`} for orthonormal{' '}
              {`$\\xi, \\eta$`} spanning plane {`$L$`}
            </p>
            <p>
              When to use: computing the curvature in a specific 2-plane direction; reduces to
              Gaussian {`$K$`} in 2D.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Jacobi Equation and Geodesic Instability</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Jacobi Equation (Vector Form)</span>
          <div className="lrn-definition-desc">
            <p>{`$\\frac{D^2 \\xi}{Dt^2} = -\\Omega(v, \\xi) v$`}</p>
            <p>
              When to use: computing the rate of separation between nearby geodesics;{' '}
              {`$v = \\dot{\\gamma}$`} is the geodesic velocity and {`$\\xi$`} is the deviation
              vector.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Jacobi Equation (Scalar, 2D)</span>
          <div className="lrn-definition-desc">
            <p>{`$\\ddot{y} = -K y$`}</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Solutions to {`$\\ddot{y} = -Ky$`}</span>
          <div className="lrn-definition-desc">
            <ul className="lrn-list">
              <li>
                {`$K > 0$`}: {`$A\\cos(\\sqrt{K}t) + B\\sin(\\sqrt{K}t)$`}. Oscillates, zeros at{' '}
                {`$\\frac{\\pi}{\\sqrt{K}}$`}.
              </li>
              <li>
                {`$K = 0$`}: {`$A + Bt$`}. Linear growth.
              </li>
              <li>
                {`$K < 0$`}: {`$Ae^{\\sqrt{|K|}t} + Be^{-\\sqrt{|K|}t}$`}. Exponential divergence.
              </li>
            </ul>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Characteristic Path Length</span>
          <div className="lrn-definition-desc">
            <p>
              {`$s = \\frac{1}{\\lambda}$`}, where{' '}
              {`$\\lambda = \\lim_{T\\to\\infty} \\frac{1}{T} \\max_{|t|<T} \\max_{|\\xi(0)|=1} \\ln|\\xi(t)|$`}
            </p>
            <p>
              When to use: the distance scale over which initial errors are amplified by factor{' '}
              {`$e$`}; enters weather prediction horizon formula.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Lie Groups, Euler's Equation, and Rigid Body</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Adjoint Representation</span>
          <div className="lrn-definition-desc">
            <p>{`$\\text{Ad}_g = (R_{g^{-1}} L_g)_{*e}: \\mathfrak{g} \\to \\mathfrak{g}$`}</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Kirillov Symplectic Form</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\Omega(\\xi_1, \\xi_2) = \\langle x, [a_1, a_2] \\rangle$`},{' '}
              {`$\\xi_i = \\{a_i, x\\}$`}
            </p>
            <p>
              When to use: the natural symplectic form on any co-adjoint orbit; makes each orbit a
              symplectic manifold.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Euler's Equation</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\dot{\\omega}_c = B(\\omega_c, \\omega_c)$`}, {`$B(c,a) = A^{-1}[a, Ac]$`}
            </p>
            <p>
              Equivalently: {`$\\dot{M}_c = [\\omega_c, M_c]$`} (Lie bracket in {`$\\mathfrak{g}$`})
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Bi-Invariant Metric Curvature</span>
          <div className="lrn-definition-desc">
            <p>{`$K_{\\xi,\\eta} = \\frac{1}{4}\\langle [\\xi,\\eta], [\\xi,\\eta] \\rangle \\geq 0$`}</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">{`$SO(3)$`} Rigid Body Summary</span>
          <div className="lrn-definition-desc">
            <ul className="lrn-list">
              <li>
                Body angular velocity: {`$\\omega_c = L_{g^{-1}*}\\dot{g}$`}. Angular momentum:{' '}
                {`$M_c = A\\omega_c$`} (not conserved). Euler: {`$\\dot{M}_c = [\\omega_c, M_c]$`}.
              </li>
              <li>
                Space angular velocity: {`$\\omega_s = R_{g^{-1}*}\\dot{g}$`}. Angular momentum:{' '}
                {`$M_s = \\text{Ad}^*_g M_c$`} (conserved). Equation: {`$\\dot{M}_s = 0$`}.
              </li>
              <li>Co-adjoint orbits: spheres {`$|M_c|^2 = \\text{const}$`}.</li>
            </ul>
          </div>
        </div>
      </>,

      <>
        <h2>Ideal Fluid and Diffeomorphism Groups</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Bernoulli Form of Euler Equations</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\frac{\\partial v}{\\partial t} = v \\wedge \\text{curl}\\, v + \\text{grad}\\, \\alpha$`}
              , {`$\\text{div}\\, v = 0$`}
            </p>
            <p>When to use: incompressible ideal fluid; {`$\\alpha = -p - \\frac{|v|^2}{2}$`}.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Vorticity Equation</span>
          <div className="lrn-definition-desc">
            <p>{`$\\frac{\\partial (\\text{curl}\\, v)}{\\partial t} = [v, \\text{curl}\\, v]$`}</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            Curvature of {`$S_0\\text{Diff}(T^2)$`} (Theorem 15)
          </span>
          <div className="lrn-definition-desc">
            <p>{`$\\langle \\Omega(\\xi,\\eta), \\xi \\rangle = -\\frac{S}{4} \\sum a^2_{k,l} |x_l + x_{l+2k}|^2 \\leq 0$`}</p>
            <p>
              When to use: bounding the sectional curvature of the diffeomorphism group; all
              sections have non-positive curvature.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Weather Prediction Horizon</span>
          <div className="lrn-definition-desc">
            <p>{`$t_{\\rm pred} = \\frac{1}{\\lambda} \\ln\\!\\left(\\frac{\\Delta}{\\delta_0}\\right)$`}</p>
            <p>
              When to use: estimating how far ahead a chaotic system can be predicted;{' '}
              {`$\\lambda$`} is the characteristic exponent, {`$\\delta_0$`} is initial error,{' '}
              {`$\\Delta$`} is tolerance.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Stability of Ideal Fluid Flows</span>
          <div className="lrn-definition-desc">
            <ul className="lrn-list">
              <li>
                Parallel flow on strip: stable if {`$\\frac{d^2v}{dy^2} \\neq 0$`} (Rayleigh).
                Unstable when velocity profile has inflection point.
              </li>
              <li>
                Sinusoidal flow on torus {`$[0,X] \\times [0,2\\pi]$`}: stable for{' '}
                {`$X \\leq 2\\pi$`}, unstable for {`$X > 2\\pi$`}.
              </li>
              <li>
                General stationary flow: stable if {`$\\psi_0 = F(\\Delta\\psi_0)$`} with bounded{' '}
                {`$\\left|\\frac{\\text{grad}\\,\\psi_0}{\\text{grad}\\,\\omega_0}\\right|$`}.
              </li>
            </ul>
          </div>
        </div>
      </>
    ]
  },
  customCss: `
    .MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }
  `
}

export default function MomentumMapsAndReduction() {
  const C = useVizColors()
  return <LearningTemplate config={config} />
}
