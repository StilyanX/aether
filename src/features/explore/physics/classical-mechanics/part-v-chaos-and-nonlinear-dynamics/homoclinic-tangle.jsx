import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  HtSeparatrixCases,
  HtMelnikovDistance,
  HtDuffingPortrait,
  HtMelnikovSignChange,
  HtDuffingThreshold,
  HtTangleGeometry,
  HtMelnikovSetup,
  HtBifurcationRegimes,
  HtStandardMapThreshold
} from '../../../../../components/viz'

export default function HomoclinicTangle() {
  const config = {
    cssPrefix: 'ht',
    documentTitle: 'Homoclinic Tangle and Poincaré-Birkhoff Theorem - AETHER',
    learning: {
      category: 'Module 5',
      groupTitle: 'Chaos and Nonlinear Dynamics',
      title: 'Homoclinic Tangle and Poincaré-Birkhoff Theorem',
      subtitle:
        "Melnikov's method predicts whether a periodic drive will push a nonlinear oscillator into chaos, giving an explicit damping threshold below which separatrix-splitting and chaotic motion occur.",
      sections: [
        <>
          {/* SECTION 1: THE HOMOCLINIC TANGLE */}
          <h2>The Homoclinic Tangle</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Homoclinic tangle</div>
            <div className="lrn-definition-desc">
              <p>
                A <strong>homoclinic tangle</strong> forms when the stable and unstable manifolds of
                a hyperbolic fixed point intersect each other transversely (at a nonzero angle). One
                transverse crossing forces infinitely many crossings. The resulting structure is an
                intricate tangle of folded curves concentrated near the fixed point.
              </p>
              <p>
                Use this concept whenever a nearly-integrable system has a hyperbolic equilibrium
                and you need to decide whether trajectories near the separatrix are chaotic.
              </p>
            </div>
          </div>

          <p>
            This structure appears in every driven pendulum, every forced nonlinear oscillator, and
            every nearly-integrable Hamiltonian system in celestial mechanics or plasma confinement.
          </p>

          <p>
            In the integrable case the stable manifold {`$x^s$`} and the unstable manifold {`$x^u$`}{' '}
            of the hyperbolic fixed point {`$X_0$`} coincide on a single separatrix. A small
            time-periodic perturbation splits them: the two-dimensional system becomes a
            three-dimensional flow in {`$(x_1, x_2, t)$`}, and on each fixed-time surface the two
            orbits peel apart. Whether they then intersect decides the fate of nearby trajectories.
            This page measures that splitting; what follows is its quantitative theory.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before reading on: a Hamiltonian perturbation ({`$\\varepsilon f_1$`} derived from a
              Hamiltonian) acts on a system whose unperturbed separatrix exists. Do you expect the
              perturbed manifolds to always intersect, never intersect, or sometimes intersect?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                For a Hamiltonian perturbation the manifolds generically always intersect. The
                Melnikov distance {`$D(t_0)$`} is sinusoidal in {`$t_0$`} with a nonzero amplitude,
                so it always changes sign. Chaos near the separatrix is the generic outcome for
                Hamiltonian systems, not a special case.
              </p>
            </details>
          </div>

          <HtTangleGeometry />

          <p>
            One transverse intersection between the stable and unstable manifolds forces infinitely
            many. The Poincaré map (the stroboscopic snapshot of the flow at each period {`$T$`})
            carries each intersection point to the next, producing an infinite cascade of crossings
            that stretch and fold phase space without limit.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The Poincaré map carries the stable manifold to itself and the unstable manifold to
              itself (both are invariant). If the two manifolds cross at point {`$p$`}, the map
              carries {`$p$`} to another point {`$p'$`} on both manifolds simultaneously, so{' '}
              {`$p'$`} is also an intersection. Applying the map repeatedly generates infinitely
              many intersections.
            </p>
            <p>
              Between consecutive intersections, each manifold must loop back. These loops (called
              homoclinic lobes) grow in length exponentially under iteration because the map
              stretches near the saddle. Volume preservation (or dissipation) forces compensating
              narrowing. This stretch-and-fold mechanism is the geometric origin of chaos.
            </p>
          </div>

          {/* SECTION 2: SEPARATRIX SPLITTING */}
        </>,
        <>
          <h2>Separatrix Splitting Under Perturbation</h2>

          <p>
            The perturbed system is {`$\\dot{x} = f_0(x) + \\varepsilon f_1(x,t)$`} where {`$f_1$`}{' '}
            is periodic in {`$t$`} with period {`$T$`}. The hyperbolic fixed point {`$X_0$`} moves
            to {`$X_p$`} under the perturbation. The stable and unstable orbits, which agreed
            exactly in the integrable case, now split.
          </p>

          <HtSeparatrixCases />

          <p>
            There are three possible outcomes, shown in panels (b), (c), and (d) above. In cases (b)
            and (c) the manifolds do not intersect: the unstable orbit lies entirely outside or
            entirely inside the stable orbit. In case (d) the manifolds cross transversely at some{' '}
            {`$t_0$`}, producing the homoclinic tangle and chaotic motion near the separatrix.
          </p>

          <p>
            In practice, the forcing term {`$\\varepsilon f_1$`} takes two common forms. It may be a
            periodic drive (Duffing oscillator, Josephson junction). Or it may be a gravitational
            perturbation (a planetary orbit under a secondary body).
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">Integrable system</div>
              <p>
                Stable orbit {`$x^s$`} and unstable orbit {`$x^u$`} smoothly coincide. They form a
                single separatrix connecting {`$X_0$`} to itself. All nearby motion is regular.
              </p>
            </div>
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">Perturbed system</div>
              <p>
                {`$x^s$`} and {`$x^u$`} split. They either remain separated (D always one sign) or
                intersect transversely (D changes sign). Transverse intersection means chaos near
                the separatrix.
              </p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The signed distance {`$D(t_0)$`} between the manifolds depends on where you measure
              (at which phase {`$t_0$`}). What must be true about {`$D(t_0)$`} for a transverse
              intersection to exist?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$D(t_0)$`} must change sign: it must be positive for some {`$t_0$`} and negative
                for others. A zero crossing of {`$D$`} marks a point where the two manifolds touch,
                i.e. an intersection. The sign convention is: {`$D > 0$`} means the unstable orbit
                is outside the stable orbit; {`$D < 0$`} means it is inside.
              </p>
            </details>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The perturbed fixed point moves from {`$X_0$`} to {`$X_p$`}. Why does the perturbation
              move the fixed point rather than destroy it?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A hyperbolic fixed point is structurally stable. Small perturbations deform it but
                cannot create or destroy it. The implicit function theorem guarantees a nearby fixed
                point persists for small {`$\\varepsilon$`}. The eigenvalues shift slightly, and the
                position moves to {`$X_p = X_0 + O(\\varepsilon)$`}, but the saddle topology
                survives. Only when the perturbation is large enough to merge two fixed points in a
                bifurcation does the saddle disappear.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Measuring the signed distance {`$D(t_0)$`} at different values of {`$t_0$`}
              corresponds to looking at different cross-sections of the 3D phase space{' '}
              {`$(x_1, x_2, t)$`}. Each value of {`$t_0$`} is one stroboscopic snapshot (one
              Poincaré section), and {`$D(t_0)$`} measures the normal separation between {`$x^s$`}{' '}
              and {`$x^u$`} on that section. As {`$t_0$`} sweeps one full period, the section
              rotates around the time axis. The sign of {`$D$`} tells you whether the manifolds
              cross on that particular section.
            </p>
          </div>

          <p>
            One difference already stands out. A dissipative drive adds a constant term to{' '}
            {`$D(t_0)$`} that grows with the damping, while a pure Hamiltonian drive does not. We
            derive that constant and the threshold {`$\\delta_c$`} in the Duffing section.
          </p>

          {/* SECTION 3: MELNIKOV'S METHOD */}
        </>,
        <>
          <h2>Melnikov's Method</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Melnikov's method</div>
            <div className="lrn-definition-desc">
              <p>
                <strong>Melnikov's method</strong> is a first-order perturbation technique that
                computes the signed distance {`$D(t_0)$`} between the stable and unstable manifolds
                analytically. Apply it whenever you have a weakly perturbed Hamiltonian system and
                want to know whether the separatrix splits to create chaos.
              </p>
            </div>
          </div>

          <p>
            The same method applies to forced pendulums (ship-rocking dynamics), Josephson junctions
            (superconducting circuit chaos), and particle orbits in storage rings under periodic
            kicking.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before the derivation: the unperturbed separatrix satisfies{' '}
              {`$\\lim_{t \\to \\pm\\infty} x_0(t) = X_0$`}. What boundary conditions do {`$x_1^s$`}{' '}
              and {`$x_1^u$`} each separately satisfy as {`$t \\to +\\infty$`} and{' '}
              {`$t \\to -\\infty$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The stable correction {`$x_1^s$`} must vanish as {`$t \\to +\\infty$`} because the
                full perturbed orbit {`$x^s = x_0 + \\varepsilon x_1^s$`} converges to{' '}
                {`$X_p \\approx X_0$`}. Similarly {`$x_1^u \\to 0$`} as {`$t \\to -\\infty$`}. These
                asymptotic conditions are what convert the indefinite variational ODE into definite
                integrals over the half-lines {`$[t_0, +\\infty)$`} and {`$(-\\infty, t_0]$`}.
              </p>
            </details>
          </div>

          <p>Expand the stable and unstable orbits to first order in {`$\\varepsilon$`}:</p>

          <div className="lrn-eq">
            {`$$x^{s,u}(t, t_0) = x_0(t - t_0) + \\varepsilon\\, x_1^{s,u}(t, t_0)$$`}
          </div>

          <p>
            Here {`$x_0(t)$`} is the unperturbed separatrix, satisfying{' '}
            {`$\\lim_{t \\to \\pm\\infty} x_0(t) = X_0$`}. The first-order corrections obey the
            variational equation:
          </p>

          <div className="lrn-eq">
            {`$$\\frac{dx_1^{s,u}}{dt} = M(x_0)\\cdot x_1^{s,u} + \\varepsilon f_1(x_0(t-t_0), t)$$`}
          </div>

          <p>
            where {`$M(x_0)$`} is the Jacobian of {`$f_0$`} evaluated on the unperturbed separatrix.
            The boundary conditions are: {`$x^s \\to X_p$`} as {`$t \\to +\\infty$`} and{' '}
            {`$x^u \\to X_p$`} as {`$t \\to -\\infty$`}.
          </p>

          <HtMelnikovSetup />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do we expand both orbits around the same unperturbed solution {`$x_0(t - t_0)$`}{' '}
              rather than two different solutions?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In the integrable system there is only one separatrix, not two. The stable and
                unstable orbits coincide exactly on {`$x_0$`}. The perturbation splits them, so both
                deviate from the same reference curve. Using the same {`$x_0$`} as the base allows
                us to measure their separation {`$d = x_1^s - x_1^u$`} as a small first-order
                quantity. If we chose different base solutions, the leading-order difference would
                be zeroth order, making the perturbation analysis inconsistent.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The variational equation for {`$x_1^{s,u}$`} has the Jacobian {`$M(x_0)$`} as its
              coefficient, not {`$M$`} evaluated at the perturbed solution. This is because we
              linearize around the unperturbed orbit {`$x_0$`}. The perturbed orbit is{' '}
              {`$x_0 + \\varepsilon x_1$`}, so evaluating {`$f_0$`} at the perturbed orbit gives{' '}
              {`$f_0(x_0) + \\varepsilon M(x_0) x_1 + O(\\varepsilon^2)$`}. At first order, only{' '}
              {`$M(x_0)$`} appears. The unperturbed orbit is the correct base for the linearization.
            </p>
          </div>

          {/* SECTION 4: THE MELNIKOV DISTANCE AND FUNCTION */}
        </>,
        <>
          <h2>The Melnikov Distance and Function</h2>

          <p>
            This section builds the Melnikov function as a single integral over all time. We keep it
            general here, then instantiate it for the Duffing oscillator two sections on. For
            Duffing the integral evaluates in closed form, which is rare. For most systems you
            compute it numerically from a known homoclinic orbit.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The integral for {`$D^s$`} runs from {`$t_0$`} to {`$+\\infty$`}. What physical
              picture motivates integrating forward to {`$+\\infty$`} for the stable manifold but
              backward to {`$-\\infty$`} for the unstable manifold?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The stable manifold converges to {`$X_p$`} in forward time ({`$t \\to +\\infty$`}),
                so the boundary condition {`$D^s(+\\infty, t_0) = 0$`} holds at {`$+\\infty$`}. We
                integrate forward from {`$t_0$`} to reach that boundary. The unstable manifold
                converges to {`$X_p$`} in backward time ({`$t \\to -\\infty$`}), so{' '}
                {`$D^u(-\\infty, t_0) = 0$`} holds at {`$-\\infty$`}. We integrate backward from{' '}
                {`$t_0$`} to reach that boundary.
              </p>
            </details>
          </div>

          <p>The separation vector between the two perturbed orbits at time {`$t$`} is:</p>

          <div className="lrn-eq">
            {`$$d(t, t_0) = x^s(t, t_0) - x^u(t, t_0) = \\varepsilon\\bigl[x_1^s(t, t_0) - x_1^u(t, t_0)\\bigr]$$`}
          </div>

          <p>
            The <strong>Melnikov distance</strong> is the projection of {`$d$`} onto the normal{' '}
            {`$N$`} to the unperturbed orbit. Write the two components of the vector field as{' '}
            {`$f_0 = (f_{01}, f_{02})$`}:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$D(t, t_0) = N \\cdot d, \\qquad N(t, t_0) = \\bigl(-f_{02}(x_0),\\; f_{01}(x_0)\\bigr)^T$$`}
          </div>

          <p>
            The normal {`$N$`} is not normalized to unit length. This does not matter: we only need
            to know the sign of {`$D$`} to determine intersection. Using the{' '}
            <strong>wedge (cross) product</strong> {`$x \\wedge y = x_1 y_2 - x_2 y_1$`}, the
            distance simplifies to:
          </p>

          <div className="lrn-eq">{`$$D(t, t_0) = f_0 \\wedge d$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The wedge product {`$f_0 \\wedge d = (f_0)_1 d_2 - (f_0)_2 d_1$`} is the same as the
              dot product {`$N \\cdot d$`} where {`$N = (-(f_0)_2, (f_0)_1)$`} is {`$f_0$`} rotated
              90 degrees. This 90-degree rotation makes {`$N$`} perpendicular to the flow direction{' '}
              {`$f_0$`}, i.e. normal to the orbit. The wedge product is a compact algebraic way to
              write this normal projection without explicitly constructing
              {`$N$`}.
            </p>
          </div>

          <HtMelnikovDistance />

          <p>
            Decompose {`$D = D^s - D^u$`} where {`$D^{s,u} = f_0 \\wedge x_1^{s,u}$`}.
            Differentiating {`$D^s$`} with respect to {`$t$`} and substituting the variational
            equation gives:
          </p>

          <div className="lrn-eq">
            {`$$\\dot{D}^s = \\operatorname{Tr} M(x_0)\\, D^s + f_0 \\wedge f_1$$`}
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-label">FADED DERIVATION: Full Melnikov Function</div>
            <div className="lrn-faded-phase">
              <strong>Phase 1 (complete).</strong>
              <p>
                For an unperturbed Hamiltonian system, {`$\\operatorname{Tr} M = 0$`} everywhere on
                the separatrix. The diagonal entries of the Jacobian are{' '}
                {`$\\partial^2 H/\\partial x\\,\\partial v$`} and{' '}
                {`$-\\partial^2 H/\\partial v\\,\\partial x$`}, which cancel because mixed partials
                are equal. This is the area-preserving (zero-divergence) property of Hamiltonian
                flow.
              </p>
              <p>
                The ODE for {`$D^s$`} then reduces to {`$\\dot{D}^s = f_0 \\wedge f_1$`}. Integrate
                from {`$t_0$`} to {`$+\\infty$`}, using the boundary condition{' '}
                {`$D^s(+\\infty, t_0) = 0$`}. The orbit ends at the perturbed fixed point {`$X_p$`},
                but to first order {`$f_0(X_p) = f_0(X_0) + O(\\varepsilon) = O(\\varepsilon)$`}{' '}
                since {`$f_0(X_0) = 0$`} and {`$X_p = X_0 + O(\\varepsilon)$`}. So the boundary term
                still vanishes at leading order:
              </p>
              <div className="lrn-eq">
                {`$$D^s(t_0, t_0) = -\\int_{t_0}^{+\\infty} f_0 \\wedge f_1\\, dt$$`}
              </div>
            </div>
            <div className="lrn-faded-phase">
              <strong>Phase 2 (fill in the step).</strong>
              <p>
                Write the analogous integral for {`$D^u$`}. Integrate the same ODE from{' '}
                {`$-\\infty$`} to {`$t_0$`}, using the boundary condition{' '}
                {`$D^u(-\\infty, t_0) = 0$`}. Write the result as a definite integral over{' '}
                {`$(-\\infty, t_0]$`}.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <strong>Phase 3 (derive on your own).</strong>
              <p>
                Combine {`$D = D^s - D^u$`} using your result from Phase 2 and the integral in Phase
                1. Show that the two integrals join to give the single Melnikov function:
              </p>
              <div className="lrn-eq lrn-eq-hero">
                {`$$D(t_0, t_0) = -\\int_{-\\infty}^{+\\infty} f_0\\bigl(x_0(t-t_0)\\bigr) \\wedge f_1\\bigl(x_0(t-t_0), t\\bigr)\\, dt$$`}
              </div>
            </div>
          </div>

          <p>
            <strong>Payoff:</strong> you can now write the Melnikov function for any Hamiltonian
            perturbation. This single improper integral encodes the total effect of {`$f_1$`} along
            the unperturbed separatrix. Whatever your system, plug in its {`$f_0$`} and {`$f_1$`}{' '}
            and integrate.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The derivation used {`$D^s(+\\infty, t_0) = 0$`} because {`$f_0(X_0) = 0$`}. Why does
              the vector field vanish at the fixed point, and why does that force the boundary term
              to zero?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$X_0$`} is a fixed point of the unperturbed flow by definition: {`$f_0(X_0) = 0$`}
                . The separatrix satisfies {`$\\lim_{t \\to +\\infty} x_0(t) = X_0$`}, so{' '}
                {`$f_0(x_0(t)) \\to 0$`} as {`$t \\to +\\infty$`}. Since{' '}
                {`$D^s = f_0 \\wedge x_1^s$`}, and {`$f_0 \\to 0$`} while {`$x_1^s$`} remains
                bounded (the perturbation stays small), the product {`$D^s \\to 0$`} at the upper
                limit. This boundary term is what allows the indefinite integral to become a
                definite one.
              </p>
            </details>
          </div>

          {/* SECTION 5: DUFFING'S EQUATION */}
        </>,
        <>
          <h2>Duffing's Double-Well Oscillator</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Duffing's equation</div>
            <div className="lrn-definition-desc">
              <p>
                <strong>Duffing's equation</strong> is the canonical test bed for Melnikov's method:
              </p>
              <div className="lrn-eq lrn-eq-hero">
                {`$$\\ddot{x} - x + x^3 = -\\varepsilon\\delta\\dot{x} + \\varepsilon\\gamma\\cos\\omega t$$`}
              </div>
              <p>
                It describes a particle in a double-well potential, driven periodically with
                amplitude {`$\\gamma$`} and frequency {`$\\omega$`}, and damped with coefficient{' '}
                {`$\\delta$`}. Use it as your first example whenever you apply Melnikov's method to
                a physical system.
              </p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Looking at the Hamiltonian{' '}
              {`$H_0 = \\tfrac{1}{2}v^2 - \\tfrac{1}{2}x^2 + \\tfrac{1}{4}x^4$`}: where are the
              fixed points, and what type is each? Predict the topology of the phase portrait before
              computing anything.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Fixed points satisfy {`$\\dot{x} = v = 0$`} and{' '}
                {`$\\dot{v} = x - x^3 = x(1-x^2) = 0$`}. The solutions are {`$x = 0, \\pm 1$`}. At{' '}
                {`$x = \\pm 1$`}: the Hessian shows these are minima of {`$H_0$`}, so they are
                elliptic centers (stable islands). At {`$x = 0$`}: it is a maximum of {`$-V$`}, so a
                saddle (hyperbolic). The portrait has two oval families of orbits around{' '}
                {`$x = \\pm 1$`} and a figure-eight separatrix through {`$x = 0$`}.
              </p>
            </details>
          </div>

          <p>
            In system form: {`$\\dot{x} = v$`},{' '}
            {`$\\dot{v} = x - x^3 + \\varepsilon[\\gamma\\cos\\omega t - \\delta v]$`}. The
            unperturbed Hamiltonian is:
          </p>

          <div className="lrn-eq">
            {`$$H_0 = \\tfrac{1}{2}v^2 - \\tfrac{1}{2}x^2 + \\tfrac{1}{4}x^4$$`}
          </div>

          <p>
            The level sets of {`$H_0$`} fall into three families. For {`$H_0 < 0$`}: closed orbits
            trapped around either the left well {`$(x = -1)$`} or the right well {`$(x = +1)$`}. For{' '}
            {`$H_0 = 0$`}: the figure-eight separatrix connecting the hyperbolic fixed point at the
            origin. For {`$H_0 > 0$`}: outer orbits that encircle both wells.
          </p>

          <HtDuffingPortrait />

          <h3>The Closed-Form Separatrix</h3>

          <p>
            Set {`$H_0 = 0$`} and solve for {`$v(x)$`}. Insert into {`$\\dot{x} = v$`} to get the
            separatrix ODE:
          </p>

          <div className="lrn-eq">
            {`$$\\frac{dx}{dt} = -x\\left(1 - \\tfrac{x^2}{2}\\right)^{1/2}$$`}
          </div>

          <p>The exact solution is one of the rare closed-form homoclinic orbits in physics:</p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$x_0(t) = \\sqrt{2}\\,\\operatorname{sech}\\,t, \\qquad v_0(t) = -\\sqrt{2}\\,\\operatorname{sech}\\,t\\,\\tanh t$$`}
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The separatrix solution {`$x_0(t) = \\sqrt{2}\\,\\operatorname{sech}\\,t$`} approaches
              0 as {`$t \\to \\pm\\infty$`}. Does the trajectory reach {`$x = 0$`} in finite time or
              only asymptotically? Why?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The trajectory only approaches {`$x = 0$`} asymptotically, never in finite time.
                Near the origin {`$f_0(x) \\to 0$`}, so the speed along the separatrix goes to zero.
                The system slows down exponentially as it nears the saddle at {`$x = 0$`}, taking
                infinite time to arrive. This is the defining property of a homoclinic orbit: it
                connects the fixed point to itself, but only in the limit {`$t \\to \\pm\\infty$`}.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              With {`$H_0 = 0$`}:{' '}
              {`$\\tfrac{1}{2}v^2 = \\tfrac{1}{2}x^2 - \\tfrac{1}{4}x^4 = \\tfrac{1}{4}x^2(2 - x^2)$`}
              , so {`$v = \\pm x(1 - x^2/2)^{1/2}$`}. On the separatrix approaching the origin from
              the right, {`$x > 0$`} and the trajectory flows toward {`$x = 0$`}, so{' '}
              {`$\\dot{x} < 0$`}, giving the minus sign.
            </p>
            <p>
              Separating variables and integrating: {`$\\int dx/[x(1-x^2/2)^{1/2}] = -t + C$`}. The
              substitution {`$x = \\sqrt{2}\\,\\operatorname{sech}\\,u$`} transforms the left side
              into {`$\\int du = u$`}. Matching boundary conditions ({`$x \\to 0$`} as{' '}
              {`$t \\to \\pm\\infty$`}) gives {`$x_0(t) = \\sqrt{2}\\,\\operatorname{sech}\\,t$`}.
              The velocity follows by differentiation.
            </p>
          </div>

          <p>
            <strong>Payoff:</strong> you now have the exact {`$x_0(t)$`} to substitute into the
            Melnikov integral. Every sech and tanh in the next section comes straight from this
            closed form.
          </p>

          {/* SECTION 6: THE DUFFING CHAOS CRITERION */}
        </>,
        <>
          <h2>The Duffing Chaos Criterion</h2>

          <p>
            For Duffing's equation, {`$f_0 = (v_0,\\; x_0 - x_0^3)$`} and{' '}
            {`$f_1 = (0,\\; \\gamma\\cos\\omega t - \\delta v_0)$`}. The wedge product is:
          </p>

          <div className="lrn-eq">
            {`$$f_0 \\wedge f_1 = v_0[\\gamma\\cos\\omega t - \\delta v_0]$$`}
          </div>

          <p>
            Substituting into the Melnikov integral and changing variable {`$\\tau = t - t_0$`}:
          </p>

          <div className="lrn-eq">
            {`$$D = -\\int_{-\\infty}^{+\\infty}\\! dt\\,\\bigl[\\gamma v_0(t-t_0)\\cos\\omega t - \\delta v_0^2(t-t_0)\\bigr]$$`}
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The damping integral gives a constant {`$+4\\delta/3$`} in {`$D(t_0)$`}, while driving
              gives a sinusoidal term. Before computing: if {`$\\delta$`} is very large, predict
              whether {`$D(t_0)$`} will change sign. What does this say about chaos?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                If {`$\\delta$`} is very large, the constant term {`$4\\delta/3$`} dominates the
                sinusoidal amplitude. Then {`$D(t_0) > 0$`} for all {`$t_0$`}, and no sign change
                occurs. Large damping prevents the manifolds from crossing, so no chaos exists near
                the separatrix. Chaos requires damping small enough that the driving amplitude
                overcomes the constant damping contribution.
              </p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-label">
              FADED DERIVATION: Evaluating the Melnikov Integral
            </div>
            <div className="lrn-faded-phase">
              <strong>Phase 1 (complete).</strong>
              <p>
                Substitute {`$\\tau = t - t_0$`} and split into two integrals. The damping integral
                involves {`$v_0^2 = 2\\,\\operatorname{sech}^2\\tau\\,\\tanh^2\\tau$`}. Evaluate it
                directly. The bare integral{' '}
                {`$\\int_{-\\infty}^{+\\infty} \\operatorname{sech}^2\\tau\\,\\tanh^2\\tau\\,d\\tau = 2/3$`}
                . With the factor of 2 from{' '}
                {`$v_0^2 = 2\\,\\operatorname{sech}^2\\tau\\,\\tanh^2\\tau$`}, this contributes{' '}
                {`$2 \\cdot (2/3) = 4/3$`}, giving {`$C = 4\\delta/3$`}:
              </p>
              <div className="lrn-eq">
                {`$$2\\int_{-\\infty}^{+\\infty}\\!\\operatorname{sech}^2\\tau\\,\\tanh^2\\tau\\,d\\tau = 2\\left[\\frac{\\tanh^3\\tau}{3}\\right]_{-\\infty}^{+\\infty} = \\frac{4}{3}$$`}
              </div>
            </div>
            <div className="lrn-faded-phase">
              <strong>Phase 2 (worked).</strong>
              <p>
                The driving integral involves{' '}
                {`$\\int_{-\\infty}^{+\\infty} \\operatorname{sech}\\tau\\,\\tanh\\tau\\,\\sin\\omega\\tau\\,d\\tau$`}
                . First note that{' '}
                {`$\\operatorname{sech}\\tau\\,\\tanh\\tau = -\\frac{d}{d\\tau}\\operatorname{sech}\\tau$`}
                . Integrate by parts. The boundary term vanishes because{' '}
                {`$\\operatorname{sech}\\tau \\to 0$`}
                at both ends:
              </p>
              <div className="lrn-eq">
                {`$$\\int_{-\\infty}^{+\\infty}\\!\\operatorname{sech}\\tau\\,\\tanh\\tau\\,\\sin\\omega\\tau\\,d\\tau = \\omega\\int_{-\\infty}^{+\\infty}\\!\\operatorname{sech}\\tau\\,\\cos\\omega\\tau\\,d\\tau$$`}
              </div>
              <p>
                The remaining integral is the Fourier transform of {`$\\operatorname{sech}$`}, a
                standard residue result. The function {`$\\operatorname{sech}\\tau$`} has simple
                poles at {`$\\tau = i\\pi(2k+1)/2$`} for integer {`$k$`}. Closing the contour in the
                upper half-plane and summing the residues gives the geometric series{' '}
                {`$\\pi\\,\\operatorname{sech}(\\pi\\omega/2)$`}. Multiplying by {`$\\omega$`}:
              </p>
              <div className="lrn-eq">
                {`$$\\int_{-\\infty}^{+\\infty}\\!\\operatorname{sech}\\tau\\,\\tanh\\tau\\,\\sin\\omega\\tau\\,d\\tau = \\pi\\omega\\,\\operatorname{sech}\\!\\left(\\frac{\\pi\\omega}{2}\\right)$$`}
              </div>
            </div>
            <div className="lrn-faded-phase">
              <strong>Phase 3 (complete on your own).</strong>
              <p>
                Combine the two results. Use{' '}
                {`$v_0(\\tau) = -\\sqrt{2}\\,\\operatorname{sech}\\tau\\,\\tanh\\tau$`} and the
                expansion of{' '}
                {`$\\cos\\omega(\\tau + t_0) = \\cos\\omega\\tau\\cos\\omega t_0 - \\sin\\omega\\tau\\sin\\omega t_0$`}
                . Show that the cosine term integrates to zero (odd integrand) and the sine term
                gives the driving contribution. Combine with the damping result to get:
              </p>
              <div className="lrn-eq lrn-eq-hero">
                {`$$D(t_0, t_0) = \\sqrt{2}\\,\\pi\\,\\gamma\\omega\\,\\operatorname{sech}\\!\\left(\\frac{\\pi\\omega}{2}\\right)\\sin\\omega t_0 + \\frac{4\\delta}{3}$$`}
              </div>
            </div>
          </div>

          <p>
            The Melnikov distance {`$D(t_0)$`} is a sinusoid in {`$t_0$`} plus a constant. It
            changes sign when the amplitude of the sinusoidal part exceeds the constant part:
          </p>

          <div className="lrn-eq">
            {`$$\\sqrt{2}\\,\\pi\\,\\gamma\\omega\\,\\operatorname{sech}\\!\\left(\\frac{\\pi\\omega}{2}\\right) > \\frac{4\\delta}{3}$$`}
          </div>

          <p>
            Rearranging gives the <strong>Duffing chaos criterion</strong>: chaotic separatrix
            motion occurs when:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$\\delta < \\delta_c = \\frac{3\\sqrt{2}\\,\\pi}{4}\\,\\gamma\\omega\\,\\operatorname{sech}\\!\\left(\\frac{\\pi\\omega}{2}\\right)$$`}
          </div>

          <p>
            <strong>Payoff:</strong> you can now compute the chaos threshold for any sech-separatrix
            drive. Plug in concrete numbers. For {`$\\gamma = 1$`} and {`$\\omega = 1$`}:{' '}
            {`$\\operatorname{sech}(\\pi/2) \\approx 0.399$`}, so{' '}
            {`$\\delta_c \\approx \\frac{3\\sqrt{2}\\,\\pi}{4}(1)(1)(0.399) \\approx 1.33$`}. Any
            damping below {`$1.33$`} splits the separatrix and produces chaos at this drive.
          </p>

          <HtMelnikovSignChange />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$\\operatorname{sech}(\\pi\\omega/2)$`} appear in the threshold? What does
              it mean physically that {`$\\delta_c \\to 0$`} as {`$\\omega \\to \\infty$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The unperturbed separatrix {`$x_0(t) = \\sqrt{2}\\,\\operatorname{sech}\\,t$`} is
                localized in time. Its Fourier spectrum decays exponentially at high frequencies:
                the amplitude at frequency {`$\\omega$`} is proportional to{' '}
                {`$\\omega\\,\\operatorname{sech}(\\pi\\omega/2)$`}. A high-frequency drive couples
                exponentially weakly to the separatrix because the orbit passes through the
                interaction region in a short time.
              </p>
              <p>
                Physically, {`$\\delta_c \\to 0$`} as {`$\\omega \\to \\infty$`} means that a
                high-frequency drive can produce chaos only if damping is exponentially small. For
                any fixed damping, high-frequency driving cannot break the separatrix: the system
                damps out the perturbation before it can accumulate enough effect to create an
                intersection.
              </p>
            </details>
          </div>

          <p>
            Only the sine component of the drive transfers energy across the separatrix. The cosine
            component has no net effect, because its integrand{' '}
            {`$\\operatorname{sech}\\tau\\,\\tanh\\tau\\,\\cos\\omega\\tau$`} is odd and integrates
            to zero over {`$(-\\infty, +\\infty)$`}.
          </p>

          {/* SECTION 7: PERSISTENCE VS TRANSIENCE */}
        </>,
        <>
          <h2>Persistence Versus Transience of Chaos</h2>

          <p>
            The chaos criterion {`$\\delta < \\delta_c$`} is a <em>local</em> condition. It tells
            you that orbits near the unperturbed separatrix behave chaotically. It does not
            guarantee a strange attractor (a fractal set that traps orbits in permanent chaos) or
            permanent chaos over the entire phase space.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Melnikov criterion {`$\\delta < \\delta_c$`} is satisfied. For Hamiltonian (
              {`$\\delta = 0$`}) and dissipative ({`$\\delta > 0$`}) perturbations separately, will
              the chaotic behavior be permanent or possibly transient? Give a reason before reading
              on.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                For {`$\\delta = 0$`}: the flow preserves area, so KAM tori (quasiperiodic invariant
                surfaces that survive small perturbations, the content of the
                Kolmogorov-Arnold-Moser theorem) bound the chaotic layer from outside. Chaos is
                permanent but spatially confined: orbits stay trapped in a thin stochastic layer
                around the separatrix and cannot escape past the outermost KAM curve.
              </p>
              <p>
                For {`$\\delta > 0$`}: KAM tori are destroyed by dissipation. Orbits in the chaotic
                layer can escape and eventually reach a periodic attractor. The Melnikov criterion
                being satisfied does not prevent eventual capture by a sink. Chaos can be transient.
              </p>
            </details>
          </div>

          <p>
            For one fixed choice of damping {`$\\delta$`} and drive frequency {`$\\omega$`},
            numerical simulation of Duffing's equation shows four regimes as {`$\\gamma$`}{' '}
            increases. The window boundaries below are the values for that one parameter set: they
            shift if you change {`$\\delta$`} or {`$\\omega$`}. Read them as the ordering of
            regimes, not as universal constants.
          </p>

          <ul className="lrn-list">
            <li>{`$\\gamma < 0.76$`}: regular periodic motion.</li>
            <li>
              {`$0.76 < \\gamma < 0.95$`}: transient chaos. Orbits behave chaotically for a finite
              time, then settle to a periodic sink.
            </li>
            <li>{`$0.95 < \\gamma < 1.08$`}: period-doubling cascade toward chaos.</li>
            <li>
              {`$1.08 < \\gamma < 2.45$`}: mostly strange attractor (with a period-5 window at{' '}
              {`$1.15 < \\gamma < 1.2$`}).
            </li>
          </ul>

          <HtBifurcationRegimes />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Transient chaos (0.76 &lt; {`$\\gamma$`} &lt; 0.95) satisfies the Melnikov criterion:
              {`$D(t_0)$`} changes sign, so intersections exist. But the orbit eventually escapes
              the chaotic layer and settles to a periodic attractor. The escape mechanism is the
              absence of confining KAM tori: with {`$\\delta > 0$`} the area-preserving structure
              breaks down, and the chaotic layer has no hard outer boundary. An orbit can drift
              across regions that would be forbidden in the Hamiltonian case.
            </p>
            <p>
              The gap between the Melnikov criterion (local, near-separatrix) and global attractor
              behavior is fundamental. Melnikov's method cannot predict whether the chaotic orbit
              eventually escapes, only whether transverse intersections exist.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">CAVEAT</span>
            <p>
              The Melnikov condition {`$\\delta < \\delta_c$`} is a necessary condition for chaos
              near the separatrix. It is not sufficient for a strange attractor. A strange attractor
              requires the period-doubling cascade to complete, which depends on global dynamics
              beyond the separatrix layer.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Dissipation destroys all KAM tori when {`$\\delta > 0$`}. Explain why dissipation
              destroys KAM tori that would otherwise confine chaos.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                KAM theory applies to area-preserving (Hamiltonian) maps. The proof of KAM
                invariance relies on the symplectic structure: the map must preserve a 2-form. When{' '}
                {`$\\delta > 0$`}, area contracts under the flow (phase-space volume shrinks), so
                the map is no longer symplectic. The theorem does not apply. Without the KAM
                guarantee, the tori that were barriers in the conservative case can break into
                cantori (Cantor-set remnants) or disappear entirely, opening gaps through which
                orbits can escape the chaotic layer.
              </p>
            </details>
          </div>

          {/* SECTION 8: APPLICATION TO MAPPINGS */}
        </>,
        <>
          <h2>Application to Mappings: The Dissipative Standard Map</h2>

          <p>
            Melnikov's method extends directly to two-dimensional dissipative maps. The dissipative
            standard map models a charged particle in a storage ring: {`$I$`} is the action (related
            to orbit amplitude) and {`$\\theta$`} is the angle coordinate, with periodic focusing
            kicks at each revolution and betatron damping (the slow shrinking of orbit amplitude as
            the particle radiates energy).
          </p>

          <p>
            The trick is to write each discrete kick at integer {`$n$`} as a Dirac delta impulse,
            then use the Fourier expansion of the periodic delta function to get a continuous ODE. A
            train of unit impulses at every integer is a periodic function of {`$n$`} with period 1.
            Its Fourier series is {`$\\delta_1(n) = 1 + 2\\sum_{q=1}^{\\infty} \\cos 2\\pi q n$`}:
            the constant term 1 is the average, and each cosine adds one harmonic. This is the
            stroboscopic kick-to-flow construction; we use the result here:
          </p>

          <div className="lrn-eq">
            {`$$\\frac{dI}{dn} = \\bigl[-\\delta I + f(\\theta)\\bigr]\\delta_1(n), \\qquad \\frac{d\\theta}{dn} = I$$`}
          </div>

          <p>
            From here the mechanics are identical to Duffing. Only the unperturbed orbit changes:
            the sech separatrix becomes the pendulum separatrix of the embedded pendulum. The
            Melnikov integral over that orbit again splits into a sinusoidal drive term and a
            constant damping term. We quote the resulting distance, with the pendulum-separatrix
            integrals supplying the {`$\\sinh$`} ratio in place of Duffing's{' '}
            {`$\\operatorname{sech}$`}:
          </p>

          <div className="lrn-eq">
            {`$$D(n_0) = \\frac{8\\pi}{Q_0}\\left[\\frac{Q_0^3\\sinh(\\pi Q_0/2)}{\\sinh(\\pi Q_0)}\\sin 2\\pi n_0 - 2\\delta\\right]$$`}
          </div>

          <p>
            where {`$K$`} is the kick amplitude and {`$Q_0 = 2\\pi K^{-1/2}$`} is the quality factor
            (large {`$Q_0$`} means weak kicks and slow energy loss). Setting the sinusoidal
            amplitude equal to the constant term gives the chaos condition:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$\\delta < \\frac{Q_0^3}{2}\\cdot\\frac{\\sinh(\\pi Q_0/2)}{\\sinh(\\pi Q_0)}$$`}
          </div>

          <p>
            For {`$Q_0 \\gg 1$`} (high-quality-factor regime),{' '}
            {`$\\sinh(\\pi Q_0/2)/\\sinh(\\pi Q_0) \\approx \\exp(-\\pi Q_0/2)$`}, so the threshold
            is exponentially small:
          </p>

          <div className="lrn-eq">{`$$\\delta < \\frac{Q_0^3}{2}\\,e^{-\\pi Q_0/2}$$`}</div>

          <HtStandardMapThreshold />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">Continuous flow (Duffing)</div>
              <p>
                Melnikov integral over real time {`$t \\in (-\\infty, +\\infty)$`}. Unperturbed
                orbit is {`$x_0(t)$`}. The integrand is {`$f_0 \\wedge f_1$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <div className="lrn-compare-title">Dissipative standard map</div>
              <p>
                Rewrite as continuous system via periodic delta function. Apply the same Melnikov
                integral over iteration index {`$n$`}. Both yield an explicit {`$\\delta$`}{' '}
                threshold.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The periodic delta function {`$\\delta_1(n) = 1 + 2\\sum_q \\cos 2\\pi qn$`} converts
              discrete kicks at integer {`$n$`} into a continuous forcing term. The map then fits
              exactly the form {`$\\dot{x} = f_0(x) + \\varepsilon f_1(x,t)$`} that Melnikov's
              method requires.
            </p>
            <p>
              The unperturbed ({`$\\varepsilon = 0$`}) continuous system is a pendulum with a known
              homoclinic orbit. The Melnikov integral over the pendulum separatrix evaluates in
              closed form using the same residue techniques as for Duffing. This is why both
              problems yield explicit closed-form thresholds.
            </p>
          </div>

          <p>
            So a high-quality-factor map is exponentially hard to push into chaos. Its separatrix
            couples very weakly to the perturbation, and even tiny dissipation regularizes the
            motion. Any finite real-world damping sits above the vanishing threshold.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              After converting the discrete map to a continuous system with {`$\\delta_1(n)$`}, the
              embedded pendulum appears. Explain why a pendulum separatrix, not Duffing's, is the
              correct unperturbed orbit here.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The unperturbed continuous system (with {`$\\varepsilon = 0$`}) reduces to a simple
                pendulum ODE: {`$\\ddot{\\theta} = -K\\sin\\theta$`}. The pendulum has a homoclinic
                orbit (the separatrix connecting the unstable equilibrium {`$\\theta = \\pi$`} to
                itself) with a known closed-form expression. Duffing's separatrix comes from a
                double-well {`$H_0$`} that does not appear here. The correct unperturbed orbit must
                match the unperturbed ODE, which is the pendulum.
              </p>
            </details>
          </div>

          <HtDuffingThreshold />

          {/* SECTION 9: THE POINCARÉ-BIRKHOFF THEOREM */}
        </>,
        <>
          <h2>The Poincaré-Birkhoff Theorem</h2>

          <p>
            The tangle does not appear from nowhere. It grows out of the broken resonant tori of a
            nearly-integrable system. The Poincaré-Birkhoff theorem tells you exactly where the
            hyperbolic fixed points that seed the tangle come from.
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Poincaré-Birkhoff theorem</div>
            <div className="lrn-definition-desc">
              <p>
                Take an area-preserving <strong>twist map</strong> of an annulus. A twist map
                rotates the inner and outer edges by different angles. Perturb it slightly away from
                an integrable twist map. On a circle whose rotation number is rational, {`$p/q$`},
                an even number {`$2kq$`} of fixed points of the {`$q$`}-th iterate survives the
                perturbation. These fixed points alternate in type around the circle: elliptic
                (stable centers) and hyperbolic (saddles), one after the other.
              </p>
            </div>
          </div>

          <p>
            A rotation number {`$p/q$`} means a point returns to its start after {`$q$`} steps,
            winding {`$p$`} times around. The integrable twist map has a whole circle of such
            periodic points: every point on the resonant circle is fixed under the {`$q$`}-th
            iterate. This is a non-generic, degenerate situation.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The unperturbed resonant circle is a continuous ring of fixed points. A generic
              perturbation cannot keep a whole circle fixed. How many fixed points do you expect to
              survive, and why must they come in two types?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Only finitely many survive, and the count is even. Picture the radial displacement
                that the perturbed map gives each point on the circle. Points that the map pushes
                outward and points it pushes inward must alternate, so the displacement changes sign
                an even number of times. Each sign change is a surviving fixed point. Area
                preservation then forces neighbors to differ in type: between two saddles sits a
                center, and between two centers sits a saddle.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Track the angular drift of each point on the resonant circle under the {`$q$`}-th
              iterate of the perturbed map. Points just inside the circle and points just outside
              drift in opposite angular directions, because the map twists. Somewhere between them
              the drift is zero: that radius carries the candidate fixed points.
            </p>
            <p>
              On that radial curve the perturbation gives a small radial kick. Area preservation
              forbids the kick from pointing outward everywhere or inward everywhere, since that
              would shrink or grow the enclosed area. So the radial kick changes sign an even number
              of times. Each zero crossing is a fixed point, giving the even count {`$2kq$`}.
              Linearizing at each one shows the alternation: a fixed point where neighbors flow
              toward it is elliptic, the next where neighbors flow away is hyperbolic.
            </p>
          </div>

          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              The hyperbolic fixed points born from Poincaré-Birkhoff are the seeds of the
              homoclinic tangle. Each surviving saddle has its own stable and unstable manifolds.
              Under the perturbation those manifolds split and cross transversely, exactly the
              mechanism of Sections 1 and 2. So Poincaré-Birkhoff supplies the saddles, and
              Melnikov's method measures whether their manifolds tangle.
            </p>
          </div>

          <p>
            A broken resonant torus therefore carries a chain of alternating islands (around the
            elliptic points) and saddles (the hyperbolic points). The KAM theorem governs which tori
            survive intact and which break into these chains. We assume that result here: the
            surviving invariant circles and the destroyed resonant ones are the subject of KAM
            theory.
          </p>

          <p>
            <strong>Payoff:</strong> you can now read any Poincaré section of a perturbed twist map.
            Spot the resonant chains, identify the saddles as tangle seeds, and apply Melnikov's
            criterion at each one to decide where chaos lives.
          </p>
        </>
      ]
    },

    practice: [
      {
        q: 'State the definition of a homoclinic tangle. Why does one transverse intersection force infinitely many?',
        a: 'A homoclinic tangle forms when the stable and unstable manifolds of a hyperbolic fixed point intersect transversely. One crossing forces infinitely many because the Poincaré map carries each intersection point to the next: if p is a transverse intersection, then T(p) lies on both manifolds and is also an intersection. Applying T repeatedly generates an infinite forward sequence T(p), T²(p), ... and T⁻¹ generates a backward sequence, all distinct.'
      },
      {
        q: 'What condition on D(t₀) signals that the stable and unstable manifolds intersect transversely?',
        a: 'D(t₀) must change sign as t₀ varies. A zero crossing of D means the two manifolds touch, i.e. intersect. If D is always positive or always negative, the manifolds do not cross and there is no homoclinic tangle. Transverse intersection (chaos) requires D to take both positive and negative values at different t₀.'
      },
      {
        q: 'What are the three possible outcomes (cases b, c, d) when a Hamiltonian system with a separatrix is perturbed by a dissipative periodic force?',
        a: 'Case b: D < 0 always, so the unstable manifold lies entirely outside the stable manifold. No intersection, no chaos. Case c: D > 0 always, so the stable manifold lies entirely outside the unstable manifold. No intersection, no chaos. Case d: D changes sign, so the manifolds intersect transversely at one or more values of t₀. This produces infinitely many crossings and chaotic motion near the separatrix. A dissipative drive adds a constant term to D (the +4δ/3 in Duffing). That constant pushes D toward case b or c, while a pure Hamiltonian drive has zero constant term and lands in case d.'
      },
      {
        q: 'State the Melnikov function for an unperturbed Hamiltonian system. What simplification allows the formula to take this form?',
        a: 'The Melnikov function is D(t₀, t₀) = −∫_{−∞}^{+∞} f₀(x₀(t−t₀)) ∧ f₁(x₀(t−t₀), t) dt. The simplification is that for a Hamiltonian system Tr M = 0 on the separatrix (area-preserving flow), so the integrating factor in the ODE for D^s is 1. This lets us integrate directly without an exponential weight, and the boundary terms vanish because f₀(X₀) = 0 at the fixed point.'
      },
      {
        q: 'The Melnikov distance D is defined using the wedge product f₀ ∧ d rather than the dot product f₀ · d. Why does the wedge product give the normal projection?',
        a: 'The wedge product f₀ ∧ d = (f₀)₁ d₂ − (f₀)₂ d₁ equals the dot product N · d where N = (−(f₀)₂, (f₀)₁). This N is f₀ rotated 90 degrees, which makes it perpendicular to the flow direction f₀, i.e. normal to the orbit. The wedge product is a compact algebraic way to write this normal projection without explicitly constructing N first.'
      },
      {
        q: 'The Duffing separatrix satisfies H₀ = 0. Derive the ODE dx/dt = −x(1 − x²/2)^{1/2} from H₀ = ½v² − ½x² + ¼x⁴.',
        a: 'Set H₀ = 0: ½v² = ½x² − ¼x⁴ = ¼x²(2 − x²), so v² = x²(1 − x²/2). Taking the square root: v = ±x(1 − x²/2)^{1/2}. On the separatrix approaching the origin with x > 0, the trajectory flows leftward so ẋ < 0, giving the minus sign. Substituting ẋ = v yields the stated ODE. This is separable and integrates to x₀(t) = √2 sech t.'
      },
      {
        q: 'The Duffing separatrix is x₀(t) = √2 sech t for the right lobe. What is the separatrix for the left lobe? How does the Melnikov function change for the left lobe?',
        a: "The left-lobe separatrix is x₀(t) = −√2 sech t (by the symmetry x → −x of Duffing's unperturbed equation). The velocity is v₀(t) = √2 sech t tanh t (sign flips). The Melnikov integral for the left lobe differs from the right only in the sign of v₀, but the integrand v₀[γ cos ωt − δ v₀] gives the same square v₀² for the damping term and an opposite-sign v₀ for the drive. By symmetry, the chaos threshold δ_c is identical for both lobes."
      },
      {
        q: 'Compute the Duffing Melnikov distance D(t₀). What are the two integrals you must evaluate, and what is the final result?',
        a: 'You evaluate (1) the damping integral: 2∫sech²τ tanh²τ dτ = 2[tanh³τ/3]_{−∞}^{+∞} = 4/3, and (2) the driving integral: ∫sech τ tanh τ sin ωτ dτ = πω sech(πω/2) by residues. Combining with v₀ = −√2 sech τ tanh τ and the substitution τ = t − t₀ gives D(t₀, t₀) = √2 πγω sech(πω/2) sin ωt₀ + 4δ/3. The sine term comes from the driving force; the constant term comes from the damping.'
      },
      {
        q: 'State the Duffing chaos criterion δ_c. A system has γ = 0.5, ω = 1.0. Compute δ_c.',
        a: 'The criterion is δ < δ_c = (3√2 π/4) γω sech(πω/2). With γ = 0.5, ω = 1.0: sech(π/2) = 1/cosh(π/2) ≈ 1/2.509 ≈ 0.3985. So δ_c = (3√2 π/4)(0.5)(1.0)(0.3985) ≈ (3.3322)(0.5)(0.3985) ≈ 0.664. Any damping δ < 0.664 produces chaotic separatrix motion for these parameters.'
      },
      {
        q: 'Why does the chaos threshold δ_c go to zero exponentially as ω → ∞? What is the physical interpretation?',
        a: "The threshold is δ_c ∝ ω sech(πω/2) ∼ ω e^{−πω/2} for large ω, which vanishes exponentially. The unperturbed separatrix x₀(t) = √2 sech t is time-localized: its Fourier spectrum decays exponentially at high frequencies as sech(πω/2). A high-frequency drive couples exponentially weakly to this localized orbit. Even a tiny amount of damping therefore overpowers the drive's effect on the separatrix, killing chaos."
      },
      {
        q: "For δ = 0 (Hamiltonian perturbation) of Duffing's equation, what bounds the chaotic layer?",
        a: 'KAM tori (quasiperiodic invariant surfaces that survive small perturbations, which the Kolmogorov-Arnold-Moser theorem guarantees) bound the chaotic layer from outside. With δ = 0 the flow is area-preserving, so KAM theory applies: most tori with sufficiently irrational frequency ratios survive small perturbations. The outermost surviving KAM torus acts as an impenetrable barrier. Chaotic orbits remain trapped in the thin stochastic layer between the separatrix and the first KAM torus. With δ > 0 dissipation destroys all KAM tori and orbits can escape.'
      },
      {
        q: 'If the Poincaré map carries intersection point p to T(p), and T(p) lies on both manifolds, why must the lobes between consecutive intersections grow exponentially long?',
        a: 'Near the saddle fixed point X₀, the Poincaré map stretches distances along the unstable direction by a factor of e^λ per iteration (where λ is the positive eigenvalue). The segment of the unstable manifold between consecutive intersections T^{n}(p) and T^{n+1}(p) maps to the next segment, so its length grows exponentially. Area preservation (or area contraction in the dissipative case) forces compensating narrowing. The result is lobes that are exponentially long and thin, folding back tighter and tighter as they accumulate near X₀.'
      },
      {
        q: 'The KAM theorem says most tori survive small Hamiltonian perturbations. When δ > 0 (dissipation), KAM theory no longer applies. Predict whether the chaotic layer expands or contracts when dissipation is added.',
        a: 'The chaotic layer expands globally when dissipation is added. With δ = 0, KAM tori act as impenetrable barriers that confine chaos to a thin layer around the separatrix. With δ > 0, dissipation destroys the KAM tori (it breaks the area-preserving symplectic structure). The outer boundary of the chaotic region disappears, allowing orbits to escape into previously regular regions. The chaotic behavior is no longer spatially confined, though it may be transient rather than permanent.'
      },
      {
        q: 'Consider a Josephson junction described by φ̈ + αφ̇ − sin φ = I₀ + ε I₁ cos ωt. Identify the role of α, I₁, and ω in the Melnikov criterion analogous to δ, γ, and ω in Duffing.',
        a: 'α plays the role of δ (damping). I₁ plays the role of γ (drive amplitude). ω is the drive frequency, playing the same role as in Duffing. The Melnikov function will take the form D(t₀) = A(ω, I₁) sin ωt₀ + C(α), where A encodes the coupling of the periodic drive to the separatrix and C is proportional to α. Chaos requires α < α_c where the threshold is determined by A = C, exactly paralleling Duffing. The specific numerical values of A and C depend on the shape of the Josephson separatrix.'
      },
      {
        q: 'A system with a separatrix has D(t₀) = 0.3 sin(2t₀) − 0.4. Does chaotic motion exist near the separatrix? Justify.',
        a: 'No. D(t₀) = 0.3 sin(2t₀) − 0.4. The maximum value of D is 0.3 − 0.4 = −0.1 < 0 and the minimum is −0.3 − 0.4 = −0.7 < 0. The distance D is always negative: the stable and unstable manifolds never cross. This is case b (unstable orbit always outside). Chaotic separatrix motion requires D to change sign, which demands the amplitude (0.3) to exceed the absolute value of the constant term (0.4). Since 0.3 < 0.4, no crossing occurs.'
      },
      {
        q: 'Apply Melnikov setup to a pendulum with small drag: φ̈ + ε(αφ̇ − γ cos ωt) + sin φ = 0. Identify f₀, f₁, the separatrix, and the boundary conditions.',
        a: 'Write as a system: ẋ₁ = x₂, ẋ₂ = −sin x₁. Then f₀ = (x₂, −sin x₁) and f₁ = (0, −αx₂ + γ cos ωt). The unperturbed separatrix is the pendulum homoclinic orbit connecting the unstable equilibrium θ = π to itself: x₁(t) = 4 arctan(e^t) − π (the kink solution), x₂(t) = 2 sech t. The boundary conditions are x^s → (π, 0) as t → +∞ and x^u → (π, 0) as t → −∞, since (π, 0) is the saddle fixed point. The Melnikov integral over this separatrix gives the pendulum chaos criterion.'
      },
      {
        q: 'Why does Tr M = 0 on the separatrix of a Hamiltonian system? State the connection to area preservation.',
        a: "For a Hamiltonian system ẋ = ∂H/∂v, v̇ = −∂H/∂x, the Jacobian matrix M has diagonal entries ∂f₁/∂x = ∂²H/∂x∂v and ∂f₂/∂v = −∂²H/∂v∂x. These are equal in magnitude and opposite in sign, so Tr M = ∂²H/∂x∂v − ∂²H/∂v∂x = 0. Geometrically, Tr M = 0 is Liouville's theorem: the divergence of the Hamiltonian vector field is zero, so phase-space volume is preserved. This holds everywhere along the flow, including on the separatrix."
      },
      {
        q: "[ELABORATE] The Duffing separatrix has an exact closed-form solution. For most physical systems, this is not the case. What does Melnikov's method require when no closed-form separatrix exists?",
        a: 'When no closed-form separatrix exists, you compute the Melnikov integral numerically. You need: (1) a numerical ODE solution for the unperturbed homoclinic orbit x₀(t) for t ∈ (−T, T) with T large enough that x₀ is close to X₀ at both ends, (2) the perturbation f₁ evaluated along x₀(t), and (3) numerical integration of f₀ ∧ f₁ over the orbit. The sign of the resulting D(t₀) still correctly predicts intersections. The method works numerically for any system where the homoclinic orbit can be traced.'
      },
      {
        q: 'Before evaluating: the Melnikov integral for Duffing involves ∫_{−∞}^{+∞} sech τ tanh τ cos ωτ dτ. Is this integral zero or nonzero? Why?',
        a: 'This integral is zero. The integrand sech τ tanh τ cos ωτ is an odd function times an even function: sech τ is even, tanh τ is odd, cos ωτ is even. So the product is odd. The integral of an odd function over a symmetric interval (−∞, +∞) is zero. This is why only the sine term in the expansion of cos ω(τ + t₀) survives in the Melnikov integral. The cosine term integrates to zero by parity, and only the sin ωτ sin ωt₀ part contributes.'
      },
      {
        q: 'In the Melnikov derivation, walk through why the boundary condition D^s(+∞, t₀) = 0 holds.',
        a: 'D^s = f₀(x₀(t − t₀)) ∧ x₁^s(t, t₀). As t → +∞, the unperturbed separatrix x₀(t − t₀) → X₀ because the separatrix approaches the fixed point. At the fixed point f₀(X₀) = 0 by definition (it is an equilibrium). Therefore f₀ → 0. The perturbation x₁^s remains bounded because it is the solution of a linear variational equation with bounded forcing. The product f₀ ∧ x₁^s → 0 × (bounded) = 0. This boundary term vanishes, converting the indefinite integral into the definite integral from t₀ to +∞.'
      },
      {
        q: "For the dissipative standard map, what role does the periodic delta function δ₁(n) play in applying Melnikov's method?",
        a: "The periodic delta function δ₁(n) = 1 + 2∑_q cos 2πqn converts the discrete map (kicks at integer n) into a continuous system of the form ẋ = f₀(x) + εf₁(x,t). This is exactly the structure Melnikov's method requires. Without this reformulation, Melnikov's integral formula (valid for continuous flows) could not be applied to discrete maps. Once reformulated, the pendulum separatrix serves as x₀ and the same residue computation applies."
      },
      {
        q: 'For the dissipative standard map, state the chaos condition for Q₀ ≫ 1. What does Q₀ measure physically?',
        a: 'For Q₀ ≫ 1 the chaos condition is δ < (Q₀³/2) exp(−πQ₀/2). Q₀ = 2π/K^{1/2} where K is the kick amplitude. Q₀ is inversely proportional to √K: large Q₀ means weak kicks, so the separatrix of the embedded pendulum is well-defined and sharp. The threshold is exponentially small in Q₀, meaning that in the weak-kick (high-Q₀) regime, chaos requires exponentially small damping. Almost any real dissipation suppresses the homoclinic intersection.'
      },
      {
        q: 'For the Josephson junction map (discrete kicks), write the equivalent of the dissipative standard map chaos condition in terms of the junction damping α and quality factor Q.',
        a: 'The Josephson junction under periodic current injection maps to a standard-map-like system where the quality factor Q = ωRC plays the role of Q₀ (R is junction resistance, C is capacitance). The chaos condition takes the same form: α < α_c = (Q³/2) sinh(πQ/2)/sinh(πQ). For large Q (underdamped junction), α_c ≈ (Q³/2)e^{−πQ/2}, exponentially small. This matches the physical observation that Josephson junctions exhibit chaos only for very small damping at high Q.'
      },
      {
        q: 'A graduate student claims: "If the Melnikov condition δ < δ_c is satisfied, the system must have a strange attractor." Is this correct? Explain.',
        a: "No. The Melnikov condition is only a local criterion near the unperturbed separatrix. It guarantees chaotic motion exists in a thin layer around the separatrix, but not globally. A strange attractor requires additionally that the period-doubling cascade completes. For example, in Duffing's equation with 0.76 < γ < 0.95, the Melnikov criterion is satisfied but orbits exhibit only transient chaos before settling to a periodic sink. The distinction is between local separatrix chaos and global attractor structure."
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Homoclinic Tangle and Poincaré-Birkhoff Theorem',
      sections: [
        <>
          <h2>Core Definitions</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Homoclinic tangle</div>
            <div className="lrn-definition-desc">
              <p>
                When stable and unstable manifolds of a hyperbolic fixed point intersect
                transversely. One crossing implies infinitely many. Use whenever a perturbed
                separatrix may split.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Melnikov's method</div>
            <div className="lrn-definition-desc">
              <p>
                A first-order perturbation technique that computes the signed distance {`$D(t_0)$`}{' '}
                between stable and unstable manifolds of a perturbed Hamiltonian system. Apply it
                when you have a weakly perturbed system with a known homoclinic orbit and want to
                determine whether the separatrix splits. Requires {`$\\operatorname{Tr} M = 0$`}{' '}
                (Hamiltonian base system).
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Melnikov distance / function</div>
            <div className="lrn-definition-desc">
              <p>
                {`$D(t, t_0) = N \\cdot d = f_0 \\wedge d$`}, where {`$N$`} is the normal to the
                unperturbed orbit and {`$d = x^s - x^u$`} is the separation vector. Sign change in{' '}
                {`$D(t_0)$`} as {`$t_0$`} varies signals transverse intersection. The full{' '}
                <strong>Melnikov function</strong> evaluates this distance on the section as the
                improper integral{' '}
                {`$D(t_0, t_0) = -\\int_{-\\infty}^{+\\infty} f_0 \\wedge f_1\\,dt$`}, often in
                closed form.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Duffing's equation</div>
            <div className="lrn-definition-desc">
              <p>
                {`$\\ddot{x} - x + x^3 = \\varepsilon(\\gamma\\cos\\omega t - \\delta\\dot{x})$`}.
                Parameters: {`$\\gamma$`} = drive amplitude, {`$\\omega$`} = drive frequency,{' '}
                {`$\\delta$`} = damping coefficient. Canonical test bed for Melnikov's method.
                Unperturbed system ({`$\\varepsilon = 0$`}) has a figure-eight separatrix at{' '}
                {`$H_0 = 0$`}.
              </p>
            </div>
          </div>

          <h2>Hero Formulas</h2>

          <div className="lrn-eq lrn-eq-hero">
            {`$$D(t_0, t_0) = -\\int_{-\\infty}^{+\\infty} f_0\\bigl(x_0(t-t_0)\\bigr) \\wedge f_1\\bigl(x_0(t-t_0),\\,t\\bigr)\\,dt$$`}
          </div>
          <p style={{ fontSize: '0.85em', opacity: 0.7, marginTop: '4px' }}>
            <strong>When to use:</strong> Whenever {`$\\varepsilon f_1$`} perturbs a Hamiltonian
            system with a known separatrix {`$x_0(t)$`}. Requires {`$\\operatorname{Tr} M = 0$`}{' '}
            (Hamiltonian base system).
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$D(t_0) = \\sqrt{2}\\,\\pi\\,\\gamma\\omega\\,\\operatorname{sech}\\!\\left(\\frac{\\pi\\omega}{2}\\right)\\sin\\omega t_0 + \\frac{4\\delta}{3}$$`}
          </div>
          <p style={{ fontSize: '0.85em', opacity: 0.7, marginTop: '4px' }}>
            <strong>When to use:</strong> Duffing's equation only (
            {`$\\ddot{x} - x + x^3 = \\varepsilon(\\gamma\\cos\\omega t - \\delta\\dot{x})$`}),
            after substituting the exact separatrix {`$x_0 = \\sqrt{2}\\,\\operatorname{sech}\\,t$`}
            .
          </p>

          <div className="lrn-eq lrn-eq-hero">
            {`$$\\delta_c = \\frac{3\\sqrt{2}\\,\\pi}{4}\\,\\gamma\\omega\\,\\operatorname{sech}\\!\\left(\\frac{\\pi\\omega}{2}\\right)$$`}
          </div>
          <p style={{ fontSize: '0.85em', opacity: 0.7, marginTop: '4px' }}>
            <strong>When to use:</strong> Duffing chaos threshold. Chaos near the separatrix occurs
            when {`$\\delta < \\delta_c$`}. Valid locally near the separatrix; does not guarantee a
            strange attractor.
          </p>

          <h2>Key Integrals (for Duffing evaluation)</h2>

          <div className="lrn-eq">
            {`$$2\\int_{-\\infty}^{+\\infty}\\!\\operatorname{sech}^2\\tau\\,\\tanh^2\\tau\\,d\\tau = \\frac{4}{3}$$`}
          </div>
          <p style={{ fontSize: '0.85em', opacity: 0.7, marginTop: '4px' }}>
            From {`$v_0^2 = 2\\,\\operatorname{sech}^2\\tau\\,\\tanh^2\\tau$`}. The bare integral{' '}
            {`$\\int \\operatorname{sech}^2\\tau\\,\\tanh^2\\tau\\,d\\tau = 2/3$`}; with the factor
            of 2 from {`$v_0^2$`} this contributes {`$2 \\cdot (2/3) = 4/3$`}, giving{' '}
            {`$C = 4\\delta/3$`}.
          </p>

          <div className="lrn-eq">
            {`$$\\int_{-\\infty}^{+\\infty}\\!\\operatorname{sech}\\tau\\,\\tanh\\tau\\,\\sin\\omega\\tau\\,d\\tau = \\pi\\omega\\,\\operatorname{sech}\\!\\left(\\frac{\\pi\\omega}{2}\\right)$$`}
          </div>

          <h2>Duffing Behavioral Regimes (fixed δ, ω; increasing γ)</h2>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em' }}>
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    borderBottom: '1px solid var(--ink-hairline)',
                    paddingBottom: '6px'
                  }}
                >
                  γ range
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    borderBottom: '1px solid var(--ink-hairline)',
                    paddingBottom: '6px'
                  }}
                >
                  Behavior
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>{`$\\gamma < 0.76$`}</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>Regular periodic motion</td>
              </tr>
              <tr>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>{`$0.76 < \\gamma < 0.95$`}</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>
                  Transient chaos (settles to periodic sink)
                </td>
              </tr>
              <tr>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>{`$0.95 < \\gamma < 1.08$`}</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>Period-doubling cascade</td>
              </tr>
              <tr>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>{`$1.08 < \\gamma < 2.45$`}</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>
                  Mostly strange attractor (period-5 window at {`$1.15 < \\gamma < 1.2$`})
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Separatrix Cases (perturbed dissipative system)</h2>

          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9em',
              marginTop: '12px'
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    borderBottom: '1px solid var(--ink-hairline)',
                    paddingBottom: '6px'
                  }}
                >
                  Case
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    borderBottom: '1px solid var(--ink-hairline)',
                    paddingBottom: '6px'
                  }}
                >
                  D(t₀) behavior
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    borderBottom: '1px solid var(--ink-hairline)',
                    paddingBottom: '6px'
                  }}
                >
                  Dynamics
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>(a)</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>D ≡ 0 (integrable)</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>Manifolds coincide, no splitting</td>
              </tr>
              <tr>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>(b)</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>D {'<'} 0 always</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>No crossing, no chaos</td>
              </tr>
              <tr>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>(c)</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>D {'>'} 0 always</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>No crossing, no chaos</td>
              </tr>
              <tr>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>(d)</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>D changes sign</td>
                <td style={{ padding: '6px 0', opacity: 0.8 }}>
                  Transverse intersection, homoclinic tangle, chaos
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Dissipative Standard Map Chaos Condition</h2>

          <div className="lrn-eq">
            {`$$\\delta < \\frac{Q_0^3}{2}\\cdot\\frac{\\sinh(\\pi Q_0/2)}{\\sinh(\\pi Q_0)}, \\qquad Q_0 = \\frac{2\\pi}{\\sqrt{K}}$$`}
          </div>
          <p style={{ fontSize: '0.85em', opacity: 0.7, marginTop: '4px' }}>
            <strong>When to use:</strong> Dissipative standard map with kick amplitude {`$K$`} and
            dissipation coefficient {`$\\delta$`}. For {`$Q_0 \\gg 1$`}: use the simpler form{' '}
            {`$\\delta < (Q_0^3/2)\\,e^{-\\pi Q_0/2}$`}.
          </p>

          <h2>Duffing Separatrix (exact closed form)</h2>

          <div className="lrn-eq">
            {`$$x_0(t) = \\sqrt{2}\\,\\operatorname{sech}\\,t, \\qquad v_0(t) = -\\sqrt{2}\\,\\operatorname{sech}\\,t\\,\\tanh t$$`}
          </div>
          <p style={{ fontSize: '0.85em', opacity: 0.7, marginTop: '4px' }}>
            <strong>When to use:</strong> The unperturbed Duffing separatrix (
            {`$H_0 = \\tfrac{1}{2}v^2 - \\tfrac{1}{2}x^2 + \\tfrac{1}{4}x^4 = 0$`}, right lobe{' '}
            {`$x > 0$`}). Substitute into the Melnikov integral to evaluate it exactly.
          </p>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}
