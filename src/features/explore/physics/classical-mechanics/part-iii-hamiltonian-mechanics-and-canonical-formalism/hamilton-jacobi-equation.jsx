import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { HJWavefronts, ActionCoordinate } from '../../../../../components/viz/physics-viz/modules'

function HamiltonJacobiEquation() {
  const config = {
    learning: {
      groupTitle: 'Part III: Hamiltonian Mechanics and Canonical Formalism',
      category: 'Classical Mechanics',
      title: 'The Hamilton-Jacobi Equation',
      subtitle: "A single scalar function that encodes all of a system's dynamics"
    },
    units: [
      {
        title: 'The Hamilton-Jacobi Equation',
        subtitle: "A single scalar function that encodes all of a system's dynamics",
        cards: [
          {
            title: 'Overview',
            content: (
              <>
                <p>
                  {`Hamilton's equations describe motion as a path through phase space. The
                  Hamilton-Jacobi equation describes the same motion as a wave front moving through
                  configuration space. Both are exactly equivalent. But the wave-front picture gives
                  different power: one scalar function $S$, if you can find it, encodes every
                  trajectory the system can follow.`}
                </p>
                <ul className="lrn-list">
                  <li>
                    {`Hamilton's principal function $S$ and the identity $p = \\frac{\\partial S}{\\partial q}$`}
                  </li>
                  <li>The HJ equation: a first-order nonlinear PDE for {`$S$`}</li>
                  <li>Complete integrals and Jacobi's theorem (solving by quadratures)</li>
                  <li>Separation of variables and cyclic coordinates</li>
                  <li>Wave fronts, Huygens' principle, and caustics</li>
                  <li>The optical-mechanical analogy and the road to quantum mechanics</li>
                </ul>
              </>
            )
          },
          {
            title: 'Why Replace ODEs with a PDE',
            content: (
              <>
                <p>
                  {`Hamilton's equations for a system with $n$ degrees of freedom are $2n$ ordinary
                  differential equations (ODEs): $\\dot q_i = \\frac{\\partial H}{\\partial p_i}$ and
                  $\\dot p_i = -\\frac{\\partial H}{\\partial q_i}$. Integrating them gives one trajectory per
                  initial condition. You cannot see the global structure - the family of all
                  possible trajectories at once.`}
                </p>
                <p>
                  {`The Hamilton-Jacobi method trades those $2n$ ODEs for one partial differential
                  equation (PDE): an equation in the partial derivatives of a single function
                  $S(q_1, \\ldots, q_n, t)$. Solving the PDE once gives the complete dynamics.
                  Every possible trajectory lives inside one solution.`}
                </p>
                <div className="lrn-insight">
                  {`Drop a stone in still water. The circular ripples are level sets of $S$. Every
                  floating leaf moves outward along an arrow perpendicular to the nearest ripple.
                  Those arrows are the trajectories. The ripples and arrows together describe the
                  motion of everything.`}
                </div>
                <p>
                  This is not just a computational trick. The wave-front picture reveals a deep
                  connection between mechanics and optics. Hamilton discovered this analogy in the
                  1820s, more than a century before quantum mechanics showed that classical
                  trajectories really are rays in an underlying wave theory.
                </p>
                <HJWavefronts />
              </>
            )
          },
          {
            title: "Hamilton's Principal Function",
            content: (
              <>
                <p>
                  {`Take any system with Lagrangian $L(q, \\dot q, t)$. Fix a starting point
                  $(q_0, t_0)$. For any endpoint $(q, t)$, there is exactly one actual trajectory
                  connecting them. Integrate the Lagrangian along that trajectory:`}
                </p>
                <div className="lrn-eq-display">
                  {`$$S(q,\\, t) = \\int_{t_0}^{t} L\\bigl(q(t'),\\, \\dot q(t'),\\, t'\\bigr)\\, dt'$$`}
                </div>
                <p>
                  {`This number depends on the endpoint $(q, t)$ only - the starting point is fixed.
                  Think of $S$ as the cost of traveling from the start to any given point along the
                  system's natural path. Hamilton called it the `}
                  <strong>principal function</strong>.
                </p>
                <p>
                  {`Now vary the endpoint. How does $S$ change when you shift $q$ slightly? The
                  first-variation formula for the action gives:`}
                </p>
                <div className="lrn-eq-display">{`$$p_i = \\frac{\\partial S}{\\partial q_i}$$`}</div>
                <p>
                  {`Here $p_i = \\frac{\\partial L}{\\partial \\dot q_i}$ is the canonical momentum. The
                  statement: momentum at the endpoint is the gradient of the action with respect to
                  position. Momentum and action are not independent - each completely determines the
                  other.`}
                </p>
                <p>Varying the endpoint in time gives a companion identity:</p>
                <div className="lrn-eq-display">
                  {`$$\\frac{\\partial S}{\\partial t} = -H(q,\\, p,\\, t)$$`}
                </div>
                <p>
                  {`Minus the Hamiltonian equals the rate of change of the action in time. On any
                  actual trajectory $H$ equals the total energy $E$, so $\\frac{\\partial S}{\\partial t} = -E$.
                  The action decreases at a rate equal to the energy.`}
                </p>
                <ActionCoordinate />
              </>
            )
          },
          {
            title: 'The Hamilton-Jacobi Equation',
            content: (
              <>
                <p>
                  {`Take the identity $\\frac{\\partial S}{\\partial t} = -H(q, p, t)$ and substitute
                  $p_i = \\frac{\\partial S}{\\partial q_i}$ everywhere $p$ appears. Every momentum is now
                  expressed as a derivative of $S$. You get a single equation for $S$ alone:`}
                </p>
                <div className="lrn-eq-display">
                  {`$$\\frac{\\partial S}{\\partial t} + H\\!\\left(q,\\; \\frac{\\partial S}{\\partial q},\\; t\\right) = 0$$`}
                </div>
                <p>
                  {`This is the `}
                  <strong>Hamilton-Jacobi equation</strong>
                  {`. Every symbol:`}
                </p>
                <ul className="lrn-list">
                  <li>
                    {`$S(q, t)$ is Hamilton's principal function - a single real number for each
                    point $(q, t)$ in space-time.`}
                  </li>
                  <li>
                    {`$\\frac{\\partial S}{\\partial t}$ is the rate of change of $S$ in time (equals minus the
                    total energy).`}
                  </li>
                  <li>{`$\\frac{\\partial S}{\\partial q_i}$ is the $i$-th component of momentum.`}</li>
                  <li>
                    {`$H(q, p, t)$ is the Hamiltonian - the total energy written as a function of
                    position and momentum.`}
                  </li>
                </ul>
                <p>
                  {`The equation says: the rate at which the action decreases in time equals the
                  Hamiltonian evaluated at the current state. Since $H = E$ along any trajectory,
                  this is just energy conservation expressed as a condition on $S$.`}
                </p>
                <div className="lrn-callout">
                  {`This is a first-order nonlinear PDE in $n + 1$ variables ($n$ coordinates plus
                  time). "First-order" because only first derivatives of $S$ appear. "Nonlinear"
                  because $H$ is typically a nonlinear function of $\\frac{\\partial S}{\\partial q}$ - for
                  example, kinetic energy contributes $\\left(\\frac{\\partial S}{\\partial q}\\right)^2$. Solving it in full
                  generality is hard. Solving it even partially gives you everything.`}
                </div>
              </>
            )
          },
          {
            title: "Complete Integrals and Jacobi's Theorem",
            content: (
              <>
                <p>
                  {`A solution to the HJ equation is useful only if it contains enough free parameters
                  to fit any initial condition. For a system with $n$ degrees of freedom, the right
                  notion is a `}
                  <strong>complete integral</strong>
                  {`: a solution $S(q, Q, t)$ depending on $n$ free constants $Q_1, \\ldots, Q_n$
                  that satisfies one extra condition:`}
                </p>
                <div className="lrn-eq-display">
                  {`$$\\det\\!\\left(\\frac{\\partial^2 S}{\\partial Q_i\\,\\partial q_j}\\right) \\neq 0$$`}
                </div>
                <p>
                  {`The determinant condition means the $n$ parameters genuinely control different
                  directions in configuration space - they are not redundant.`}
                </p>
                <div className="lrn-definition">
                  <span className="lrn-definition-term">{"Jacobi's Theorem"}</span>
                  <div className="lrn-definition-desc">
                    <p>
                      {`Given a complete integral $S(q, Q, t)$, introduce $n$ new constants
                      $P_1, \\ldots, P_n$ and set:`}
                    </p>
                    <p>{`$$\\frac{\\partial S}{\\partial Q_i} = -P_i, \\qquad i = 1, \\ldots, n$$`}</p>
                    <p>
                      {`These $n$ equations in the unknowns $q_1(t), \\ldots, q_n(t)$ give all the
                      trajectories of the system. Each choice of the $2n$ constants $(P, Q)$ gives
                      one trajectory.`}
                    </p>
                  </div>
                </div>
                <p>
                  <strong>What "by quadratures" means.</strong>
                  {` Extracting the trajectory requires only solving algebraic equations and computing
                  definite integrals - no ODEs, no iteration, no approximation. A system solvable
                  this way is called `}
                  <em>integrable</em>.
                </p>
                <p>
                  <strong>Why the theorem works.</strong>
                  {` Each equation $\\frac{\\partial S}{\\partial Q_i} = -P_i$ is a first integral of
                  Hamilton's equations: a quantity conserved along every trajectory. The determinant
                  condition guarantees these $n$ conserved quantities are independent of one another.
                  Together they pin down the trajectory uniquely.`}
                </p>
              </>
            )
          },
          {
            title: 'Separation of Variables',
            content: (
              <>
                <p>
                  The main practical method for finding a complete integral is{' '}
                  <strong>separation of variables</strong>. Guess that {`$S$`} splits into a sum of
                  functions, each depending on only one coordinate:
                </p>
                <div className="lrn-eq-display">
                  {`$$S(q, Q, t) = \\sum_{i=1}^{n} S_i(q_i,\\, Q) - E(Q)\\, t$$`}
                </div>
                <p>
                  Substitute into the HJ equation. If it factors into {`$n$`} independent pieces,
                  one for each {`$q_i$`}, then each piece is a first-order ODE in a single variable
                  - far easier than the original PDE.
                </p>
                <p>
                  This works when the Hamiltonian is <strong>separable</strong>: the kinetic and
                  potential energy of each coordinate do not mix with the others. The right
                  coordinate system matters enormously.
                </p>
                <ul className="lrn-list">
                  <li>
                    <strong>Free particle</strong>
                    {` ($H = \\frac{p^2}{2m}$): separates trivially.
                    $S = Qq - \\frac{Q^2 t}{2m}$ is a complete integral. Each value of $Q$ picks a different
                    constant momentum.`}
                  </li>
                  <li>
                    <strong>Harmonic oscillator</strong>
                    {` ($H = \\frac{p^2}{2} + \\frac{q^2}{2}$): the HJ equation reduces to a single first-order ODE for
                    $S_q(q, E)$. Integrating it gives trajectories as functions of energy and
                    phase.`}
                  </li>
                  <li>
                    <strong>Kepler problem</strong>
                    {` (planet orbiting a fixed center): separable in polar coordinates $(r, \\theta)$.
                    The equation splits into separate ODEs for $S_r(r)$ and $S_\\theta(\\theta)$, each
                    depending on conserved quantities (energy and angular momentum).`}
                  </li>
                  <li>
                    <strong>Two-fixed-center problem</strong>
                    {` (particle attracted to two fixed points): not separable in Cartesian or polar
                    coordinates, but separable in elliptic coordinates $\\xi = \\frac{r_1 + r_2}{2}$,
                    $\\eta = \\frac{r_1 - r_2}{2}$, where $r_1, r_2$ are distances to the two centers.`}
                  </li>
                </ul>
                <div className="lrn-insight">
                  Finding the right coordinates is the hard part. Physical symmetry guides the
                  choice: a problem with angular symmetry separates in polar coordinates; a problem
                  with two focal points separates in elliptic coordinates. Liouville integrability
                  (see Poisson Brackets) guarantees that {`$n$`} commuting first integrals always
                  produce a separable HJ equation.
                </div>
              </>
            )
          },
          {
            title: 'Cyclic Coordinates and the Time-Independent Case',
            content: (
              <>
                <p>
                  A coordinate {`$q_i$`} is <strong>cyclic</strong> if it does not appear in the
                  Hamiltonian (only its conjugate momentum {`$p_i$`} appears). Then{' '}
                  {`$\\dot p_i = -\\frac{\\partial H}{\\partial q_i} = 0$`}, so {`$p_i$`} is a
                  constant of motion automatically. The HJ equation separates trivially in {`$q_i$`}
                  : the contribution to {`$S$`} from that coordinate is simply {`$\\alpha_i q_i$`},
                  where {`$\\alpha_i$`} is the constant value of {`$p_i$`}.
                </p>
                <p>
                  For systems where {`$H$`} has no explicit dependence on time, energy is conserved:{' '}
                  {`$H(q, p) = E$`} along every trajectory. Time itself becomes a cyclic variable.
                  Write:
                </p>
                <div className="lrn-eq-display">{`$$S(q,\\, t) = W(q) - E\\, t$$`}</div>
                <p>
                  Here {`$W(q)$`} is <strong>Hamilton's characteristic function</strong>. It carries
                  all the geometric information about the shapes of trajectories at energy {`$E$`}.
                  Substituting into the HJ equation eliminates the time derivative entirely:
                </p>
                <div className="lrn-eq-display">
                  {`$$H\\!\\left(q,\\; \\frac{\\partial W}{\\partial q}\\right) = E$$`}
                </div>
                <p>
                  {`$W$`} satisfies a PDE in {`$q$`} alone, with {`$E$`} as a parameter. The level
                  sets of {`$W$`} are the shapes of the trajectories without their timing. Adding
                  the {`$-Et$`} term recovers the full time-dependent solution {`$S$`}.
                </p>
                <div className="lrn-callout">
                  Most problems in classical mechanics have time-independent Hamiltonians. In those
                  cases write {`$S = W - Et$`} and solve the simpler equation for {`$W$`}. The
                  energy {`$E$`} plays the role of one of the {`$n$`} free parameters in a complete
                  integral.
                </div>
              </>
            )
          },
          {
            title: "Huygens' Principle and Wave Fronts",
            content: (
              <>
                <p>
                  At any fixed time {`$t$`}, the set of points satisfying {`$S(q, t) = c$`} for some
                  constant {`$c$`} is a surface in configuration space. As {`$t$`} increases, this
                  surface moves. These moving surfaces are the <strong>wave fronts</strong> of the
                  action function.
                </p>
                <p>
                  Trajectories are perpendicular to the wave fronts. This is identical to the
                  relation between light rays and wave fronts in optics: rays travel perpendicular
                  to surfaces of constant phase. The momentum{' '}
                  {`$p = \\frac{\\partial S}{\\partial q}$`} is the gradient of {`$S$`}, which
                  always points perpendicular to its level sets.
                </p>
                <div className="lrn-definition">
                  <span className="lrn-definition-term">{"Huygens' Theorem"}</span>
                  <div className="lrn-definition-desc">
                    <p>
                      The wave front at time {`$t + s$`} is the envelope of all secondary wave
                      fronts of radius {`$s$`} centered on every point of the front at time {`$t$`}.
                      Each point on the current front acts as a new source. The next front is
                      tangent to all these secondary fronts.
                    </p>
                  </div>
                </div>
                <p>
                  This is the same principle Huygens stated for light in 1678. In mechanics it
                  describes how the action function propagates. Geometrical optics and classical
                  mechanics share the same mathematical structure.
                </p>
                <p>
                  <strong>When wave fronts break down.</strong> As wave fronts evolve they can fold
                  back on themselves. Where a fold occurs, multiple trajectories pass through the
                  same point in configuration space, and the action {`$S$`} becomes multi-valued
                  there. Different branches correspond to different trajectories arriving at the
                  same location. The surface where folding begins is called a{' '}
                  <strong>caustic</strong> (the same word used for the bright curves formed by light
                  focused through curved glass).
                </p>
                <p>
                  A concrete example: take {`$H = \\frac{p^2}{2}$`} (a free particle) with initial
                  wave front {`$S_0(q) = \\frac{q^2}{2}$`}. The wave fronts fold at a finite time,
                  creating a "swallow's tail" singularity in the action surface. Past that moment,{' '}
                  {`$S$`} is only meaningful branch by branch.
                </p>
              </>
            )
          },
          {
            title: 'The Optical-Mechanical Analogy and Quantum Mechanics',
            content: (
              <>
                <p>
                  Hamilton built the entire HJ theory in the 1820s by analogy with geometrical
                  optics. He noticed that mechanics and optics share the same mathematical skeleton:
                </p>
                <ul className="lrn-list">
                  <li>Light rays correspond to phase trajectories.</li>
                  <li>
                    {`Wave fronts (surfaces of constant phase) correspond to level sets of $S$.`}
                  </li>
                  <li>
                    {`Fermat's principle (rays take stationary optical-path-length routes) corresponds
                    to Hamilton's principle (trajectories are stationary-action paths).`}
                  </li>
                  <li>
                    {`Normal slowness $\\mathbf{p} = \\nabla S$ (the direction perpendicular to wave
                    fronts, scaled by the inverse speed) corresponds to momentum.`}
                  </li>
                  <li>
                    {`The refractive index $n(q)$ of the medium corresponds to $\\sqrt{2(E - U(q))}$
                    - the local speed of the mechanical trajectory at energy $E$ in potential
                    $U(q)$.`}
                  </li>
                </ul>
                <p>
                  Geometrical optics is the short-wavelength limit of wave optics: when the
                  wavelength is tiny compared to the scale of the obstacles, light travels in
                  straight rays. Hamilton recognized that classical mechanics should be the
                  short-wavelength limit of some deeper wave theory. He did not know what that
                  theory was.
                </p>
                <p>
                  Schrödinger found it in 1926. In quantum mechanics, a particle is described by a
                  wavefunction {`$\\psi(q, t)$`} satisfying the Schrödinger equation:
                </p>
                <div className="lrn-eq-display">
                  {`$$i\\hbar\\, \\frac{\\partial \\psi}{\\partial t} = \\hat{H}\\, \\psi$$`}
                </div>
                <p>
                  Here {`$\\hbar$`} is Planck's constant divided by {`$2\\pi$`} (a very small number
                  at human scales). Write {`$\\psi = e^{iS/\\hbar}$`} and substitute. As{' '}
                  {`$\\hbar \\to 0$`}, the Schrödinger equation reduces exactly to the
                  Hamilton-Jacobi equation. Higher powers of {`$\\hbar$`} are quantum corrections to
                  the classical motion. This is the <strong>WKB approximation</strong> (named after
                  Wentzel, Kramers, and Brillouin).
                </p>
                <div className="lrn-insight">
                  {`Classical mechanics is quantum mechanics at infinitely short wavelength. The
                  action $S$ is the phase of the quantum wavefunction. Wave fronts are surfaces of
                  constant phase. Caustics are exactly where the WKB approximation breaks down and
                  quantum effects become essential. Hamilton's 1820s work, built on an analogy with
                  light, anticipated the structure of quantum mechanics by a century.`}
                </div>
              </>
            )
          }
        ]
      }
    ],
    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }`
  }
  return <LearningTemplate config={config} />
}

export default HamiltonJacobiEquation
