import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { HJWavefronts, ActionCoordinate } from '../../../../../components/viz'

function HamiltonJacobiEquation() {
  const config = {
    learning: {
      groupTitle: 'Hamiltonian Mechanics and Canonical Formalism',
      category: 'Classical Mechanics',
      title: 'The Hamilton-Jacobi Equation',
      subtitle: "A single scalar function that encodes all of a system's dynamics",
      sections: [
        // Section 0: Overview
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Overview</h2>
            <p>
              {`Hamilton's equations describe motion as a path through phase space. The
              Hamilton-Jacobi equation describes the same motion as a wave front moving through
              configuration space. Both are exactly equivalent. The wave-front picture gives
              different power. One scalar function $S$, if you can find it, encodes every
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
          </div>
        </>,
        // Section 1: Why Replace ODEs with a PDE
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Why Replace ODEs with a PDE</h2>
            <p>
              {`Hamilton's equations for a system with $n$ degrees of freedom are $2n$ ordinary
              differential equations (ODEs): $\\dot q_i = \\frac{\\partial H}{\\partial p_i}$ and
              $\\dot p_i = -\\frac{\\partial H}{\\partial q_i}$. Integrating them gives one trajectory per
              initial condition. You cannot see the global structure. You cannot see the family of all
              possible trajectories at once.`}
            </p>
            <p>
              {`The Hamilton-Jacobi method trades those $2n$ ODEs for one partial differential
              equation (PDE): an equation in the partial derivatives of a single function
              $S(q_1, \\ldots, q_n, t)$. Solving the PDE once gives the complete dynamics.
              Every possible trajectory lives inside one solution.`}
            </p>
            <div className="lrn-insight">
              {`Drop a stone in still water. The circular ripples are level sets of $S$ (the curves
              along which $S$ holds one fixed value). Every floating leaf moves outward along an
              arrow perpendicular to the nearest ripple. Those arrows are the trajectories. The
              ripples and arrows together describe the motion of everything.`}
            </div>
            <p>
              This is not just a computational trick. The wave-front picture reveals a deep
              connection between mechanics and optics. Hamilton discovered this analogy in the
              1820s. More than a century later, quantum mechanics showed that classical trajectories
              really are rays in an underlying wave theory.
            </p>
            <HJWavefronts />
          </div>
        </>,
        // Section 2: Hamilton's Principal Function
        <>
          <div className="lrn-section" id="lrn-section-2" data-section-index="2">
            <h2>Hamilton's Principal Function</h2>
            <p>
              {`Take any system with Lagrangian $L(q, \\dot q, t)$. Fix a starting point
              $(q_0, t_0)$. For any endpoint $(q, t)$, there is exactly one actual trajectory
              connecting them. Integrate the Lagrangian along that trajectory:`}
            </p>
            <div className="lrn-eq-display">
              {`$$S(q,\\, t) = \\int_{t_0}^{t} L\\bigl(q(t'),\\, \\dot q(t'),\\, t'\\bigr)\\, dt'$$`}
            </div>
            <p>
              {`This number depends on the endpoint $(q, t)$ only. The starting point is fixed.
              Think of $S$ as the cost of traveling from the start to any given point along the
              system's natural path. Hamilton called it the `}
              <strong>principal function</strong>.
            </p>
            <p>
              {`Now vary the endpoint. How does $S$ change when you shift $q$ slightly? Vary the
              action and the path stays a true trajectory. The interior Euler-Lagrange terms
              cancel. Only the boundary term survives. That boundary term of the action variation
              is $p_i\\,\\delta q_i$, the momentum times the endpoint shift. So
              $\\frac{\\partial S}{\\partial q_i} = p_i$:`}
            </p>
            <div className="lrn-eq-display">{`$$p_i = \\frac{\\partial S}{\\partial q_i}$$`}</div>
            <p>
              {`Here $p_i = \\frac{\\partial L}{\\partial \\dot q_i}$ is the canonical momentum. Momentum at
              the endpoint is the gradient of the action with respect to position. Momentum and
              action are not independent. Each completely determines the other.`}
            </p>
            <p>
              {`Varying the endpoint in time gives a companion identity. Since $S$ is the integral
              of $L$, the total rate of change along the trajectory is $\\frac{dS}{dt} = L$. But
              the chain rule also gives $\\frac{dS}{dt} = \\frac{\\partial S}{\\partial t} + p\\cdot\\dot q$.
              Set the two equal: $\\frac{\\partial S}{\\partial t} = L - p\\cdot\\dot q = -H$.`}
            </p>
            <div className="lrn-eq-display">
              {`$$\\frac{\\partial S}{\\partial t} = -H(q,\\, p,\\, t)$$`}
            </div>
            <p>
              {`Minus the Hamiltonian equals the rate of change of the action in time. On any
              actual trajectory $H$ equals the total energy $E$, so $\\frac{\\partial S}{\\partial t} = -E$.
              The action decreases at a rate equal to the energy.`}
            </p>
            <ActionCoordinate />
          </div>
        </>,
        // Section 3: The Hamilton-Jacobi Equation
        <>
          <div className="lrn-section" id="lrn-section-3" data-section-index="3">
            <h2>The Hamilton-Jacobi Equation</h2>
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
              {`. It says the rate at which the action decreases in time equals the Hamiltonian
              evaluated at the current state. Because $H = E$ along the trajectory, the equation is
              energy conservation written as a condition on $S$.`}
            </p>
            <div className="lrn-callout">
              {`This is a first-order nonlinear PDE in $n + 1$ variables ($n$ coordinates plus
              time). "First-order" because only first derivatives of $S$ appear. "Nonlinear"
              because $H$ is typically a nonlinear function of $\\frac{\\partial S}{\\partial q}$. For
              example, kinetic energy contributes $\\left(\\frac{\\partial S}{\\partial q}\\right)^2$. Solving it in full
              generality is hard. Solving it even partially gives you everything.`}
            </div>
            <p>
              {`The same equation appears in the theory of canonical transformations. There $S$ is
              the generating function that maps to new coordinates in which the new Hamiltonian
              vanishes. Demanding the new Hamiltonian equal zero forces $S$ to obey exactly the PDE
              above. The two routes meet at the same equation.`}
            </p>
          </div>
        </>,
        // Section 4: Complete Integrals and Jacobi's Theorem
        <>
          <div className="lrn-section" id="lrn-section-4" data-section-index="4">
            <h2>Complete Integrals and Jacobi's Theorem</h2>
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
              directions in configuration space. They are not redundant.`}
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
              {` Solving by quadratures means reducing the whole problem to evaluating definite
              integrals. You solve algebraic equations and compute integrals. No ODEs, no repeated
              approximation, no guessing. A system solvable this way is called `}
              <em>integrable</em>.
            </p>
            <p>
              <strong>Why the theorem works.</strong>
              {` Each equation $\\frac{\\partial S}{\\partial Q_i} = -P_i$ is a first integral of
              Hamilton's equations: a quantity conserved along every trajectory. The determinant
              condition guarantees these $n$ conserved quantities are independent of one another.
              Together they pin down the trajectory uniquely.`}
            </p>
          </div>
        </>,
        // Section 5: Cyclic Coordinates and the Time-Independent Case
        <>
          <div className="lrn-section" id="lrn-section-5" data-section-index="5">
            <h2>Cyclic Coordinates and the Time-Independent Case</h2>
            <p>
              A coordinate {`$q_i$`} is <strong>cyclic</strong> if it does not appear in the
              Hamiltonian (only its conjugate momentum {`$p_i$`} appears). Then{' '}
              {`$\\dot p_i = -\\frac{\\partial H}{\\partial q_i} = 0$`}, so {`$p_i$`} is a constant
              of motion automatically. The HJ equation separates trivially in {`$q_i$`}. The
              contribution to {`$S$`} from that coordinate is simply {`$\\alpha_i q_i$`}. Here{' '}
              {`$\\alpha_i$`} is the constant value of {`$p_i$`}.
            </p>
            <p>
              When {`$H$`} has no explicit dependence on time, the system conserves energy:{' '}
              {`$H(q, p) = E$`} along every trajectory. Time itself becomes a cyclic variable.
              Write:
            </p>
            <div className="lrn-eq-display">{`$$S(q,\\, t) = W(q) - E\\, t$$`}</div>
            <p>
              Here {`$W(q)$`} is <strong>Hamilton's characteristic function</strong>. It carries all
              the geometric information about the shapes of trajectories at energy {`$E$`}.
              Substituting into the HJ equation eliminates the time derivative entirely:
            </p>
            <div className="lrn-eq-display">
              {`$$H\\!\\left(q,\\; \\frac{\\partial W}{\\partial q}\\right) = E$$`}
            </div>
            <p>
              {`$W$`} satisfies a PDE in {`$q$`} alone, with {`$E$`} as a parameter. The level sets
              of {`$W$`} are the shapes of the trajectories without their timing. Adding the{' '}
              {`$-Et$`} term recovers the full time-dependent solution {`$S$`}.
            </p>
            <div className="lrn-callout">
              Most problems in classical mechanics have time-independent Hamiltonians. In those
              cases write {`$S = W - Et$`} and solve the simpler equation for {`$W$`}. The energy{' '}
              {`$E$`} plays the role of one of the {`$n$`} free parameters in a complete integral.
            </div>
          </div>
        </>,
        // Section 6: Separation of Variables
        <>
          <div className="lrn-section" id="lrn-section-6" data-section-index="6">
            <h2>Separation of Variables</h2>
            <p>
              The main practical method for finding a complete integral is{' '}
              <strong>separation of variables</strong>. Guess that {`$W$`} splits into a sum of
              functions, each depending on only one coordinate, and write {`$S = W - Et$`}:
            </p>
            <div className="lrn-eq-display">
              {`$$S(q, t) = \\sum_{i=1}^{n} W_i(q_i) - E\\, t$$`}
            </div>
            <p>
              Substitute this guess into the time-independent equation{' '}
              {`$H(q, \\partial W/\\partial q) = E$`}. When the Hamiltonian is{' '}
              <strong>separable</strong>, the equation rearranges so that one group of terms depends
              only on {`$q_1$`}, another group only on {`$q_2$`}, and so on.
            </p>
            <div className="lrn-insight">
              {`Here is the key step. If one group depends only on $q_1$, and the rest of the
              equation depends only on the other coordinates, and the two sides must stay equal for
              every value of $q_1$, then each group cannot actually change. Each group must equal a
              constant. Those constants are the `}
              <strong>separation constants</strong>
              {`. They are the new constant momenta of the complete integral. The energy $E$ is one
              of them.`}
            </div>
            <p>
              Once each group equals a constant, every {`$W_i$`} obeys a first-order ODE in a single
              variable. You solve each by one integral. This is far easier than the original PDE.
              The right coordinate system matters enormously.
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
                {` ($H = \\frac{p^2}{2} + \\frac{q^2}{2}$, with unit mass and unit frequency): worked
                in full below.`}
              </li>
              <li>
                <strong>Central force / Kepler problem</strong>
                {` (a particle attracted to a fixed center): separates in polar coordinates $(r,
                \\theta)$, worked in full below. The angular momentum is its separation constant.`}
              </li>
            </ul>
            <p>
              <strong>The harmonic oscillator, worked in full.</strong>
              {` The Hamiltonian has no explicit time, so write $S = W - Et$. Substituting
              $p = \\frac{\\partial S}{\\partial q} = W'$ into $H = E$ gives:`}
            </p>
            <div className="lrn-eq-display">{`$$\\tfrac{1}{2}(W')^2 + \\tfrac{1}{2}q^2 = E$$`}</div>
            <p>{`Solve for the one derivative, then integrate:`}</p>
            <div className="lrn-eq-display">
              {`$$W' = \\sqrt{2E - q^2}, \\qquad W = \\int \\sqrt{2E - q^2}\\; dq$$`}
            </div>
            <p>
              {`Treat the energy $E$ as the single free constant of the complete integral. Jacobi's
              theorem then sets $\\frac{\\partial S}{\\partial E} = -P$, where $P$ is the new constant
              coordinate:`}
            </p>
            <div className="lrn-eq-display">
              {`$$\\frac{\\partial S}{\\partial E} = \\int \\frac{dq}{\\sqrt{2E - q^2}} - t = -P$$`}
            </div>
            <p>
              {`The integral is $\\arcsin\\!\\left(q/\\sqrt{2E}\\right)$, so this rearranges to
              $q(t) = \\sqrt{2E}\\,\\sin(t - P)$. The trajectory drops out by solving one integral.`}
            </p>
            <p>
              <strong>The central-force problem, worked in full.</strong>
              {` This is the case where separation truly earns its name, because two coordinates
              genuinely split apart. A particle of mass $m$ moves in a central potential $U(r)$.
              In polar coordinates the time-independent HJ equation is:`}
            </p>
            <div className="lrn-eq-display">
              {`$$\\frac{1}{2m}\\!\\left(\\frac{\\partial W}{\\partial r}\\right)^2 + \\frac{1}{2mr^2}\\!\\left(\\frac{\\partial W}{\\partial \\theta}\\right)^2 + U(r) = E$$`}
            </div>
            <p>
              {`Guess the separated form $W(r, \\theta) = W_r(r) + W_\\theta(\\theta)$. The angle
              $\\theta$ does not appear in $U$, so $\\theta$ is cyclic. Its whole contribution sits
              in the middle term. Multiply through by $2mr^2$ and group: everything in $r$ on one
              side, everything in $\\theta$ on the other. The $\\theta$ group can only equal a
              constant. Call it $\\alpha^2$:`}
            </p>
            <div className="lrn-eq-display">
              {`$$\\left(\\frac{dW_\\theta}{d\\theta}\\right)^2 = \\alpha^2 \\;\\Rightarrow\\; \\frac{dW_\\theta}{d\\theta} = \\alpha = p_\\theta$$`}
            </div>
            <p>
              {`That separation constant $\\alpha$ is the angular momentum, the conserved $p_\\theta$.
              So $W_\\theta = \\alpha\\,\\theta$. The radial part is left with one ODE in $r$ alone:`}
            </p>
            <div className="lrn-eq-display">
              {`$$\\frac{dW_r}{dr} = \\sqrt{2m\\bigl(E - U(r)\\bigr) - \\frac{\\alpha^2}{r^2}}$$`}
            </div>
            <p>
              {`Now $W_r$ comes from one integral, $W_r = \\int \\sqrt{\\,\\cdots\\,}\\,dr$. The full
              solution is $S = W_r(r) + \\alpha\\,\\theta - E t$, with two separation constants $E$ and
              $\\alpha$. Jacobi's theorem ($\\partial S/\\partial E = -t_0$, $\\partial S/\\partial \\alpha
              = -\\beta$) then gives the orbit shape and the timing by quadrature. The angular split
              is what makes the central-force problem the textbook demonstration of separation.`}
            </p>
            <div className="lrn-insight">
              Finding the right coordinates is the hard part. Physical symmetry guides the choice. A
              problem with angular symmetry separates in polar coordinates. A system with {`$n$`}{' '}
              conserved quantities whose Poisson brackets all vanish (they commute) is called{' '}
              <strong>Liouville integrable</strong>, and always produces a separable HJ equation.
              The Poisson-bracket machinery behind that statement is developed separately; here it
              is enough to know such systems are the ones that separate.
            </div>
          </div>
        </>,
        // Section 7: Huygens' Principle and Wave Fronts
        <>
          <div className="lrn-section" id="lrn-section-7" data-section-index="7">
            <h2>Huygens' Principle and Wave Fronts</h2>
            <p>
              At any fixed time {`$t$`}, the set of points satisfying {`$S(q, t) = c$`} for some
              constant {`$c$`} is a surface in configuration space. As {`$t$`} increases, this
              surface moves. These moving surfaces are the <strong>wave fronts</strong> of the
              action function.
            </p>
            <p>
              Before going further, name the optics idea this borrows. In wave optics the{' '}
              <strong>phase</strong> of a light wave is the quantity that counts how many cycles the
              wave has gone through at each point. A <strong>surface of constant phase</strong>{' '}
              joins all the points where the wave is at the same point in its cycle, like one ridge
              of a water wave. Light rays run perpendicular to those surfaces. The level set{' '}
              {`$S(q, t) = c$`} plays exactly the role of a surface of constant phase, and the
              trajectory plays the role of the ray.
            </p>
            <p>
              Trajectories are perpendicular to the wave fronts. The momentum{' '}
              {`$p = \\frac{\\partial S}{\\partial q}$`} is the gradient of {`$S$`}, which always
              points perpendicular to its level sets. So momentum points along the trajectory,
              across the wave fronts.
            </p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">{"Huygens' Theorem"}</span>
              <div className="lrn-definition-desc">
                <p>
                  The wave front at time {`$t + s$`} is the envelope of all secondary wave fronts of
                  radius {`$s$`} centered on every point of the front at time {`$t$`}. Each point on
                  the current front acts as a new source. The next front is tangent to all these
                  secondary fronts.
                </p>
              </div>
            </div>
            <p>
              This is the same principle Huygens stated for light in 1678. In mechanics it describes
              how the action function propagates. Geometrical optics and classical mechanics share
              the same mathematical structure.
            </p>
            <p>
              <strong>When wave fronts break down.</strong> As wave fronts evolve they can fold back
              on themselves. Where a fold occurs, multiple trajectories pass through the same point
              in configuration space. The action {`$S$`} becomes multi-valued there. Different
              branches correspond to different trajectories arriving at the same location. The
              surface where folding begins is called a <strong>caustic</strong> (the same word used
              for the bright curves formed by light focused through curved glass).
            </p>
            <p>
              A concrete example: take {`$H = \\frac{p^2}{2}$`} (a free particle) with initial wave
              front {`$S_0(q) = \\frac{q^2}{2}$`}. The wave fronts fold at a finite time and {`$S$`}{' '}
              becomes multi-valued. Past that moment, {`$S$`} is only meaningful branch by branch.
              The detailed classification of such folds belongs to a later treatment of
              singularities.
            </p>
          </div>
        </>,
        // Section 8: Optical-Mechanical Analogy and Quantum Mechanics
        <>
          <div className="lrn-section" id="lrn-section-8" data-section-index="8">
            <h2>The Optical-Mechanical Analogy and Quantum Mechanics</h2>
            <p>
              Hamilton built the entire HJ theory in the 1820s by analogy with geometrical optics.
              First fix two ideas from optics that the analogy leans on.
            </p>
            <ul className="lrn-list">
              <li>
                <strong>Fermat's principle.</strong>
                {` Light travels between two points along the path whose optical length is
                stationary. The optical length is the geometric distance weighted by how slow the
                light is along the way. In simple cases this is the path that takes the least time.`}
              </li>
              <li>
                <strong>Refractive index.</strong>
                {` The refractive index $n(q)$ measures how much a medium slows light. A larger
                $n$ means slower light and a longer optical path over the same distance. Light bends
                toward regions of higher $n$.`}
              </li>
            </ul>
            <p>With those in hand, the two theories share the same mathematical skeleton:</p>
            <ul className="lrn-list">
              <li>Light rays correspond to phase trajectories.</li>
              <li>{`Wave fronts (surfaces of constant phase) correspond to level sets of $S$.`}</li>
              <li>
                {`Fermat's principle (rays take stationary optical-path-length routes) corresponds
                to Hamilton's principle (trajectories are stationary-action paths).`}
              </li>
              <li>
                {`The slowness vector $\\mathbf{p} = \\nabla S$ points along the ray with magnitude
                $1/\\text{speed}$. It is the optical analogue of momentum.`}
              </li>
              <li>
                {`The refractive index $n(q)$ corresponds to $\\sqrt{2(E - U(q))}$. Since
                $|\\mathbf{p}| = \\sqrt{2(E - U)}$ is the momentum magnitude at energy $E$ in
                potential $U(q)$, the momentum plays the role of the optical index.`}
              </li>
            </ul>
            <p>
              Geometrical optics is the short-wavelength limit of wave optics. When the wavelength
              is tiny compared to the scale of the obstacles, light travels in straight rays.
              Hamilton recognized that classical mechanics should be the short-wavelength limit of
              some deeper wave theory. He did not know what that theory was.
            </p>
            <p>
              Schrödinger found it in 1926. In quantum mechanics, a particle is described by a
              wavefunction {`$\\psi(q, t)$`} satisfying the Schrödinger equation. Here{' '}
              {`$\\hat{H}$`} is the Hamiltonian written as an operator (the hat marks that it acts
              on the wavefunction rather than holding a number):
            </p>
            <div className="lrn-eq-display">
              {`$$i\\hbar\\, \\frac{\\partial \\psi}{\\partial t} = \\hat{H}\\, \\psi$$`}
            </div>
            <p>
              Here {`$\\hbar$`} is Planck's constant divided by {`$2\\pi$`} (a very small number at
              human scales). Take the simplest case{' '}
              {`$\\hat{H} = -\\frac{\\hbar^2}{2m}\\nabla^2 +
              U$`}
              , which comes from {`$H = \\frac{p^2}{2m} + U$`}. Write {`$\\psi = e^{iS/\\hbar}$`}{' '}
              and substitute. One derivative of {`$\\psi$`} brings down a factor{' '}
              {`$\\frac{i}{\\hbar}\\frac{\\partial S}{\\partial q}$`}, so{' '}
              {`$\\nabla\\psi =
              \\frac{i}{\\hbar}(\\nabla S)\\psi$`}{' '}
              and
            </p>
            <div className="lrn-eq-display">
              {`$$\\nabla^2\\psi = \\left[-\\frac{1}{\\hbar^2}(\\nabla S)^2 + \\frac{i}{\\hbar}\\nabla^2 S\\right]\\psi.$$`}
            </div>
            <p>
              Put that into the Schrödinger equation and cancel the common factor {`$\\psi$`}. Every{' '}
              {`$\\hbar$`} in front lines up so that one equation for {`$S$`} survives:
            </p>
            <div className="lrn-eq-display">
              {`$$\\frac{\\partial S}{\\partial t} + \\frac{1}{2m}\\!\\left(\\frac{\\partial S}{\\partial q}\\right)^2 + U - \\frac{i\\hbar}{2m}\\nabla^2 S = 0$$`}
            </div>
            <p>
              {`The last term carries the only leftover factor of $\\hbar$. As $\\hbar \\to 0$ it
              vanishes, leaving exactly the Hamilton-Jacobi equation $\\frac{\\partial S}{\\partial t} +
              H(q, \\partial S/\\partial q) = 0$. Higher powers of $\\hbar$ are quantum corrections to
              the classical motion. This is the `}
              <strong>WKB approximation</strong> (named after Wentzel, Kramers, and Brillouin).
            </p>
            <div className="lrn-insight">
              {`Classical mechanics is quantum mechanics at infinitely short wavelength. The
              action $S$ is the phase of the quantum wavefunction. Wave fronts are surfaces of
              constant phase. Caustics are exactly where the WKB approximation breaks down and
              quantum effects become essential. Hamilton's 1820s work, built on an analogy with
              light, anticipated the structure of quantum mechanics by a century.`}
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'Write the Hamilton-Jacobi equation for a particle of mass m in a potential U(q) with Hamiltonian H = p^2/(2m) + U(q).',
        a: 'Start from the general HJ equation: partial_S/partial_t + H(q, partial_S/partial_q, t) = 0. The momentum p is replaced by partial_S/partial_q everywhere it appears in H. For this Hamiltonian H = p^2/(2m) + U(q), substitute p = partial_S/partial_q to get: partial_S/partial_t + (1/(2m))*(partial_S/partial_q)^2 + U(q) = 0. This is a first-order nonlinear PDE for S(q, t). It is nonlinear because the momentum term is squared.'
      },
      {
        q: 'Solve the free particle (U = 0, one dimension) by the Hamilton-Jacobi method and find the trajectory q(t).',
        a: "The Hamiltonian has no explicit time, so write S = W(q) - E*t. The time-independent equation H(q, dW/dq) = E reads (1/(2m))*(dW/dq)^2 = E. Solve for the derivative: dW/dq = sqrt(2mE), a constant. Integrate: W = sqrt(2mE)*q. So S = sqrt(2mE)*q - E*t. Treat E as the single free constant. Jacobi's theorem sets partial_S/partial_E = -P, the new constant coordinate. Compute it: partial_S/partial_E = sqrt(2m)/(2*sqrt(E))*q - t = q*sqrt(m/(2E)) - t = -P. Solve for q: q = sqrt(2E/m)*(t - P). The particle moves at constant speed sqrt(2E/m), which is the expected v = p/m since p = sqrt(2mE). P is the time it passes the origin."
      },
      {
        q: 'For the harmonic oscillator with H = p^2/2 + q^2/2 (unit mass and frequency), find the complete integral S and show the motion is q(t) = sqrt(2E)*sin(t - P).',
        a: "Write S = W - E*t. The time-independent equation is (1/2)*(W')^2 + (1/2)*q^2 = E. Solve for the derivative: W' = sqrt(2E - q^2). Integrate: W = integral of sqrt(2E - q^2) dq, so the complete integral is S = integral of sqrt(2E - q^2) dq - E*t with E the one free constant. Apply Jacobi's theorem: partial_S/partial_E = -P. Differentiating under the integral, partial_S/partial_E = integral of dq/sqrt(2E - q^2) - t = -P. The integral evaluates to arcsin(q/sqrt(2E)). So arcsin(q/sqrt(2E)) - t = -P, which rearranges to arcsin(q/sqrt(2E)) = t - P, hence q(t) = sqrt(2E)*sin(t - P). The amplitude sqrt(2E) and the phase P are fixed by the two constants."
      },
      {
        q: 'Separate the central-force problem H = p_r^2/(2m) + p_theta^2/(2m r^2) + U(r) in polar coordinates and identify the two separation constants.',
        a: 'Write S = W_r(r) + W_theta(theta) - E*t. The time-independent equation is (1/(2m))*(dW_r/dr)^2 + (1/(2m r^2))*(dW_theta/dtheta)^2 + U(r) = E. Multiply through by 2m*r^2 and group: r^2*(dW_r/dr)^2 + 2m*r^2*(U(r) - E) on one side depends only on r, and (dW_theta/dtheta)^2 depends only on theta. Both sides must equal a constant. Call it alpha^2. The angular piece gives dW_theta/dtheta = alpha, so this separation constant alpha is the conserved angular momentum p_theta, and W_theta = alpha*theta. The radial piece gives dW_r/dr = sqrt(2m*(E - U(r)) - alpha^2/r^2). The two separation constants are the energy E and the angular momentum alpha. The full solution is S = integral of sqrt(2m(E-U) - alpha^2/r^2) dr + alpha*theta - E*t, reduced to one radial quadrature.'
      },
      {
        q: "Explain, using Jacobi's theorem, why the partial derivatives of the complete integral with respect to the constants give the trajectory.",
        a: "A complete integral S(q, Q, t) depends on n free constants Q_1, ..., Q_n and satisfies the determinant condition det(partial^2 S / partial Q_i partial q_j) != 0. Jacobi's theorem introduces n more constants P_i and sets partial_S/partial_Q_i = -P_i. Each such equation is a first integral of Hamilton's equations, meaning a quantity that stays constant along every trajectory. So holding each partial_S/partial_Q_i fixed at -P_i traces out exactly one path in time. The determinant condition guarantees these n conserved relations are independent, so together they pin down q_1(t), ..., q_n(t) uniquely. Each choice of the 2n constants (P, Q) selects one trajectory. The whole motion comes from differentiating one function and solving algebraic equations, no ODEs required."
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'The Hamilton-Jacobi Equation',
      sections: [
        <>
          <div className="ref">
            <h2>The Hamilton-Jacobi Equation</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Hamilton-Jacobi equation</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$\\frac{\\partial S}{\\partial t} + H\\!\\left(q, \\frac{\\partial S}{\\partial q}, t\\right) = 0$`}
                </p>
                <p>
                  First-order nonlinear PDE for one scalar {`$S$`}. Replaces {`$2n$`} of Hamilton's
                  ODEs.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Principal function S</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$S(q,t) = \\int_{t_0}^{t} L\\,dt'$ along the true trajectory. Gives $p = \\frac{\\partial S}{\\partial q}$ and $\\frac{\\partial S}{\\partial t} = -H$.`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Characteristic function W</span>
              <div className="lrn-definition-desc">
                <p>
                  {`Time-independent $H$: $S = W(q) - Et$, and $W$ solves $H(q, \\frac{\\partial W}{\\partial q}) = E$.`}
                </p>
                <p>{`Level sets of $W$ = trajectory shapes; $-Et$ adds the timing.`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Complete integral + Jacobi's theorem</span>
              <div className="lrn-definition-desc">
                <p>
                  {`Complete integral: $S(q, Q, t)$ with $n$ constants $Q_i$ and $\\det(\\partial^2 S/\\partial Q_i\\,\\partial q_j) \\neq 0$.`}
                </p>
                <p>
                  {`Trajectories from $\\frac{\\partial S}{\\partial Q_i} = -P_i$. Solving this way = "by quadratures".`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Separation of variables</span>
              <div className="lrn-definition-desc">
                <p>
                  {`Guess $S = \\sum_i W_i(q_i) - Et$. If the equation splits so each group depends on one coordinate, each group = a constant (the separation constant = new constant momentum).`}
                </p>
                <p>
                  {`Central force: $S = W_r(r) + \\alpha\\theta - Et$, with $\\alpha = p_\\theta$ the angular momentum.`}
                </p>
              </div>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Optics</th>
                    <th>Mechanics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Phase / surfaces of constant phase</td>
                    <td>{`Action $S$ / level sets of $S$`}</td>
                  </tr>
                  <tr>
                    <td>Wave fronts</td>
                    <td>{`Level sets $S = c$`}</td>
                  </tr>
                  <tr>
                    <td>Light rays</td>
                    <td>Trajectories</td>
                  </tr>
                  <tr>
                    <td>Fermat's principle (stationary optical path)</td>
                    <td>Hamilton's principle (stationary action)</td>
                  </tr>
                  <tr>
                    <td>{`Refractive index $n(q)$`}</td>
                    <td>{`$\\sqrt{2(E - U(q))} = |\\mathbf{p}|$`}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">WKB / classical limit</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$\\psi = e^{iS/\\hbar}$ in Schrödinger gives $\\frac{\\partial S}{\\partial t} + H - \\frac{i\\hbar}{2m}\\nabla^2 S = 0$. As $\\hbar \\to 0$ the last term drops and the HJ equation returns.`}
                </p>
              </div>
            </div>
          </div>
        </>
      ]
    },

    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }`
  }
  return <LearningTemplate config={config} />
}

export default HamiltonJacobiEquation
