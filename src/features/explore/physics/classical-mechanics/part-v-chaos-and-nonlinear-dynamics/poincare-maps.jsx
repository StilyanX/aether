import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  StandardMap,
  TwistMapCircles,
  PoincareSectionFlow,
  PrecessingKeplerSection
} from '../../../../../components/viz'

export default function PoincareMaps() {
  const config = {
    cssPrefix: 'pm',
    documentTitle: 'Poincaré Sections and Poincaré Maps - AETHER',
    learning: {
      groupTitle: 'Chaos and Nonlinear Dynamics',
      category: 'Module 5',
      title: 'Poincaré Sections and Poincaré Maps',
      subtitle: 'Reduce a continuous flow to a discrete map, then watch order dissolve into chaos.',
      sections: [
        <>
          <h2>Why Poincaré Sections Matter</h2>
          {/* SECTION 1: WHY AND WHAT */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A planet orbits the Sun with a slow precession. Each year you record where the planet
              crosses the x-axis. Do those crossing points form a random cloud, a single dot, or a
              smooth curve?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They form a smooth closed curve. Bounded motion always maps to a closed curve on the
                Poincaré section. Random scatter would mean unbounded or chaotic motion.
              </p>
            </details>
          </div>

          <p>
            Classical mechanics often hands you a system with two or more degrees of freedom (the
            independent ways the system can move). Visualizing the full phase space (the space of
            all positions and momenta) is impossible above four dimensions. Poincaré sections cut
            that complexity down to a picture you can actually read.
          </p>
          <p>
            This technique unlocks two things. First, it shows whether a trajectory is regular
            (lives on a torus, a doughnut-shaped surface in phase space) or chaotic (wanders
            randomly). Second, it converts the continuous flow into a discrete map. That map is far
            easier to study. The standard map, KAM theory (which predicts which tori survive a small
            perturbation), and chaos diagnostics all rest on this reduction.
          </p>
          <p>
            Real uses: planetary-orbit stability, particle storage rings in accelerators, and how
            stars orbit galactic centers.
          </p>

          <div className="lrn-insight">
            <p>
              A Poincaré section turns an unsolvable continuous problem into a solvable discrete
              one. The map carries all the information about whether motion is regular or chaotic.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Full flow</span>
              <p>
                The trajectory is a continuous curve in phase space. You watch every instant of the
                motion. In four or more dimensions you cannot draw it.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Poincaré section</span>
              <p>
                You keep only the crossing points through a chosen plane. The flow becomes a set of
                dots. A regular orbit gives a clean curve; a chaotic orbit gives a scattered cloud.
              </p>
            </div>
          </div>

          <p>Two words sound alike but mean different things. Keep them straight from the start.</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Poincaré section</span>
              <p>
                The section is the surface itself. It is the plane (or lower-dimensional slice) you
                choose to cut the flow. Think of it as a sheet of paper held up in phase space.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Poincaré map</span>
              <p>
                The map is the rule that takes one crossing point to the next. It is a function, not
                a surface. Each dot on the section is one step of the map.
              </p>
            </div>
          </div>

          {/* SECTION 2: DIMENSIONAL REDUCTION */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A Hamiltonian system has {`$N = 2$`} degrees of freedom. How many dimensions does the
              Poincaré section have?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Two dimensions. Energy fixes one dimension, and the section condition fixes one
                more.
                {`$2N - 2 = 2$`} for {`$N = 2$`}.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>Dimensional Reduction: From Flow to Section</h2>

          <p>
            An {`$N$`}-degree-of-freedom Hamiltonian lives in a {`$2N$`}-dimensional phase space.
            Fix the energy {`$E$`} and you cut to {`$2N - 1$`} dimensions. Pick a plane, say
            {`$y = 0$`}, and count only crossings in one direction ({`$\\dot{y} > 0$`}). You get a
            {`$2N - 2$`}-dimensional surface. This is the move that turns a continuous flow into a
            discrete repeated map.
          </p>
          <p>
            For {`$N = 2$`}, the section is a 2D plane. That is easy to draw. For {`$N > 2$`}, the
            section has four or more dimensions and loses its visual power, though it stays
            mathematically useful.
          </p>
          <p>
            Counting crossings in one direction only is essential. Recording both directions would
            double-count every orbit and make the map two-to-one. By convention, you record only
            points passing from {`$y < 0$`} to {`$y > 0$`} (the positive direction).
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Energy is a conserved quantity, so the trajectory is confined to the
              {`$(2N-1)$`}-dimensional hypersurface {`$H = E$`}. Adding the section condition
              {`$y = 0$`} removes one more dimension. The one-direction rule makes the map
              invertible: from any point on the section you can uniquely trace forward or backward
              to the next crossing.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$N = 2$`} (2D section)</span>
              <p>
                Four-dimensional phase space reduces to a 2D plane. You can draw it directly and see
                the island chains and chaotic seas by eye.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$N > 2$`} (higher section)</span>
              <p>
                Section is {`$2N - 2 > 2$`} dimensional. Mathematically exact but not easily
                visualized. Statistical tools replace pictures in this regime.
              </p>
            </div>
          </div>

          {/* SECTION 3: PRECESSING KEPLER */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              For an unperturbed Kepler orbit, how many distinct points appear on the
              {`$p_x$`}-{`$x$`} section after many orbits?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Exactly one point. The unperturbed orbit is closed and periodic, so it always
                returns to exactly the same perihelion. The map has a single fixed point.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>The Precessing Kepler Orbit</h2>

          <p>
            The Kepler problem is a perfect first example. Write the energy in Cartesian
            coordinates:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$E = \\frac{1}{2}m\\dot{x}^2 + \\frac{1}{2}m\\dot{y}^2 - \\frac{k}{\\sqrt{x^2 + y^2}}$$`}</span>
          </div>
          <p>
            Start at perihelion A (the orbit's closest point to the Sun) with {`$x = r_1$`},
            {`$y = 0$`}, {`$\\dot{x} = 0$`}. Energy determines {`$\\dot{y}$`}. Integrate Hamilton's
            equations. Each time the orbit crosses
            {`$y = 0$`} with {`$\\dot{y} > 0$`}, record {`$p_x = m\\dot{x}$`}. The unperturbed orbit
            is closed, so only one point A appears forever.
          </p>
          <p>
            Add a small perturbation that causes the ellipse to precess. Each orbit, the major axis
            rotates by a small angle. Now successive perihelia land at A, B, C, shifting slightly
            each time. These points trace a closed curve on the {`$p_x$`}-{`$x$`} section. That
            curve is the Poincaré map for this orbit. The figure greatly exaggerates the precession
            for clarity. Real precession is tiny: Mercury's perihelion advances only about 0.16
            degrees per century from the pull of the other planets.
          </p>

          <div>
            <PrecessingKeplerSection />
          </div>
          <p>
            Left panel: successive precessing ellipses in the orbital plane. Right panel: the
            {`$p_x$`}-{`$x$`} section. Points A, B, C mark successive perihelion crossings. The
            slider controls how many orbits are shown.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do points A, B, C land on a closed curve in the section, rather than spiraling
              outward or scattering randomly?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Bounded motion with a small perturbation still conserves energy. The orbit stays
                near the unperturbed torus. KAM theory guarantees that for small enough
                perturbation, most orbits remain on deformed (but intact) tori. The section of a
                torus is a closed curve.
              </p>
            </details>
          </div>

          {/* SECTION 4: INTEGRABLE SYSTEMS AND TORI */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An integrable system has two degrees of freedom. Its Hamiltonian depends only on the
              action variables. What shape does its trajectory trace in phase space?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A two-dimensional torus. The two action variables set the torus size; the two angle
                variables move around it. Motion is quasiperiodic unless the frequency ratio is
                rational.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>Integrable Systems: Motion on a Torus</h2>

          <p>
            Recall the action-angle picture for an integrable {`$N$`}-degree-of-freedom Hamiltonian{' '}
            {`$H = H_0(J_1, \\ldots, J_N)$`}. The motion winds on an {`$N$`}-dimensional torus. The
            action {`$J_i$`} labels which torus you are on; the angle {`$\\theta_i$`} says where on
            it. Each angle runs around its own circle at frequency{' '}
            {`$\\omega_i = \\partial H_0/\\partial J_i$`}, so{' '}
            {`$\\theta_i = \\omega_i t + \\theta_{i0}$`}.
          </p>
          <div className="lrn-eq">
            <span>{`$$\\theta_i = \\omega_i t + \\theta_{i0}$$`}</span>
          </div>
          <p>
            A magnetic field line in a tokamak makes this concrete. The line wraps the doughnut both
            the short way and the long way, tracing a torus you can almost see in the machine.
          </p>
          <p>
            The single fact this page needs from that picture is simple. When the frequency ratio is
            rational, the orbit closes and repeats. When it is irrational, the orbit is
            quasiperiodic (it never exactly repeats, but stays close to repeating) and slowly fills
            the torus. That rational-versus-irrational split is what the next section turns into a
            rotation number.
          </p>

          {/* SECTION 5: ROTATION NUMBER */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              On the section, one degree of freedom advances by a fixed angle each step. The angle
              advance per step is {`$2\\pi\\alpha$`}. If {`$\\alpha$`} is a whole number, what do
              the section points look like?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A single fixed point. A whole-number {`$\\alpha$`} advances the angle by a full turn
                each step, so the point lands back on itself. The orbit closes after one step.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>The Rotation Number and Section Structure</h2>

          <p>
            For two degrees of freedom, take the section {`$\\theta_2 = \\text{const.}$`}. The
            trajectory hits this section once every period of {`$\\theta_2$`}. At each hit,
            {`$\\theta_1$`} has advanced by:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\alpha = \\frac{\\omega_1}{\\omega_2}$$`}</span>
          </div>
          <p>
            This ratio is the rotation number. It depends only on the action {`$J_1$`}, not on
            initial angles. It is the one number that tells you whether a section orbit is periodic
            or dense.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              For an integrable system, each frequency {`$\\omega_i = \\partial H_0/\\partial J_i$`}
              is a function of the actions alone. Fix the energy and one action, and the other is
              fixed too. So both frequencies are set by {`$J_1$`}, and their ratio {`$\\alpha$`}
              cannot depend on where you started in angle. That is why two orbits on the same circle
              share the same rotation number.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rational {`$\\alpha = r/s$`}</span>
              <p>
                After exactly {`$s$`} steps on the section, {`$\\theta_1$`} has completed {`$r$`}
                full revolutions. The orbit closes. The section shows exactly {`$s$`} fixed points,
                equally spaced on a circle.
              </p>
              <p>
                Example: {`$\\alpha = \\tfrac{1}{6}$`} gives 6 points. Rotate the initial condition
                and you still get 6 points, just shifted around the circle.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Irrational {`$\\alpha$`}</span>
              <p>
                The orbit never closes. After {`$n \\to \\infty$`} steps, the points fill the entire
                circle densely. No two section points ever coincide.
              </p>
              <p>
                Rational numbers are dense in the reals. So any irrational orbit sits arbitrarily
                close to some rational, resonant orbit. That nearness is what lets a small
                perturbation break the rational tori first, the route to chaos you meet later.
              </p>
            </div>
          </div>

          <div>
            <TwistMapCircles />
          </div>
          <p>
            Each circle corresponds to a different action value. Toggle between the rational and
            irrational cases. Different radii rotate at different rates because {`$\\alpha$`}{' '}
            depends on {`$J$`}.
          </p>

          {/* SECTION 6: TWIST MAPPING */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The twist mapping sends each point {`$(J, \\theta)$`} on the section to a new point.
              What happens to the action {`$J$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Nothing. {`$J$`} stays exactly the same. The integrable system conserves all
                actions, so the twist map only advances the angle, never the radius.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>The Twist Mapping</h2>

          <p>
            The surface-of-section map for an integrable {`$N = 2$`} system is the twist mapping:
          </p>
          <div className="lrn-eq">
            <span>{`$$J_{n+1} = J_n$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\theta_{n+1} = \\theta_n + 2\\pi\\alpha(J_{n+1})$$`}</span>
          </div>
          <p>
            The action is exactly conserved. The angle advances by {`$2\\pi\\alpha$`} at each step.
            Different circles (different {`$J$`} values) rotate at different rates because
            {`$\\alpha$`} depends on {`$J$`}. This is the "twist." It describes the unperturbed
            surface-of-section structure for any integrable system.
          </p>
          <p>In Cartesian form, the same map is a rotation by a fixed angle {`$\\psi$`}:</p>
          <div className="lrn-eq">
            <span>{`$$x_{n+1} = x_n \\cos\\psi - y_n \\sin\\psi, \\quad y_{n+1} = x_n \\sin\\psi + y_n \\cos\\psi$$`}</span>
          </div>
          <p>
            This linear twist mapping is just a rigid rotation. Its Jacobian equals 1, so it
            preserves area.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Integrable Hamilton's equations give{' '}
              {`$\\dot{J} = -\\partial H_0 / \\partial \\theta = 0$`}
              because {`$H_0$`} does not depend on {`$\\theta$`}. So {`$J$`} is constant between
              section crossings. The angle advances by{' '}
              {`$\\omega_1 T_2 = \\omega_1 (2\\pi / \\omega_2)
              = 2\\pi\\alpha$`}
              . This is purely kinematic: no force changes the action.
            </p>
          </div>

          {/* SECTION 7: AREA PRESERVATION */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You draw a small blob of starting points on the section and apply the map once. The
              blob moves and stretches. What happens to the area it covers?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The area stays exactly the same. The map comes from Hamilton's equations, and
                Liouville's theorem conserves phase-space area. The blob can stretch and bend, but
                never grows or shrinks.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>Area Preservation and Symplecticity</h2>

          <p>
            Any map generated by Hamilton's equations must preserve phase-space area (Liouville's
            theorem). For a 2D map, this means the Jacobian equals 1:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{\\partial(J_{n+1}, \\theta_{n+1})}{\\partial(J_n, \\theta_n)} \\equiv [\\theta_{n+1}, J_{n+1}] = 1$$`}</span>
          </div>
          <p>
            The left side is the Jacobian determinant. The right side writes it as a Poisson bracket
            (a bilinear operation that tests whether two quantities are canonically paired). This is
            the discrete version of the symplectic condition (the property that Hamiltonian motion
            preserves phase-space area) for continuous flow. Apply this condition whenever you need
            to check or build a canonical map (one that keeps Hamilton's equations and phase-space
            area intact).
          </p>
          <p>
            Particle accelerators live by this rule. A beam in a storage ring fills a small area in
            position-momentum space called the emittance. Area preservation keeps that emittance
            fixed turn after turn, so the beam stays tight and focused for billions of laps.
          </p>
          <p>
            The generating-function approach builds in area preservation automatically. A generating
            function is a function whose derivatives produce a canonical change of variables. A
            type-2 function {`$F_2(J_{n+1}, \\theta_n)$`} of the new action and old angle produces a
            canonical map by construction. The perturbed twist map uses:
          </p>
          <div className="lrn-eq">
            <span>{`$$F_2 = J_{n+1}\\theta_n + 2\\pi\\mathcal{A}(J_{n+1}) + \\varepsilon\\mathcal{G}(J_{n+1}, \\theta_n)$$`}</span>
          </div>
          <p>
            Here {`$\\mathcal{A}$`} is the unperturbed action generator: it produces the plain
            twist, and its slope sets the rotation number, {`$\\alpha = d\\mathcal{A}/dJ_{n+1}$`}.
            The term {`$\\mathcal{G}$`} is the perturbation generator: it carries the small kick
            switched on by {`$\\varepsilon$`}. Taking derivatives of this {`$F_2$`} gives back the
            perturbed twist map of the next section, with the action correction{' '}
            {`$f = -\\partial\\mathcal{G}/\\partial\\theta_n$`} and the angle correction{' '}
            {`$g = \\partial\\mathcal{G}/\\partial J_{n+1}$`}. Because both come from one generator{' '}
            {`$\\mathcal{G}$`}, the area-preservation condition forces a relation between them:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{\\partial f}{\\partial J_{n+1}} + \\frac{\\partial g}{\\partial \\theta_n} = 0$$`}</span>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Liouville's theorem says the phase-space volume (and hence area in 2D) is constant
              along any Hamiltonian flow. The Jacobian condition is just this statement applied to
              the discrete map. The generating-function relations{' '}
              {`$f = -\\partial\\mathcal{G}/\\partial
              \\theta_n$`}{' '}
              and {`$g = \\partial\\mathcal{G}/\\partial J_{n+1}$`} imply
              {`$\\partial f / \\partial J + \\partial g / \\partial \\theta = -\\partial^2\\mathcal{G}/\\partial J\\partial\\theta + \\partial^2\\mathcal{G}/\\partial\\theta\\partial J = 0$`}
              by symmetry of mixed partials.
            </p>
          </div>

          {/* SECTION 8: NEAR-INTEGRABLE AND PERTURBED TWIST */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You add a small perturbation {`$\\varepsilon H_1(J, \\theta)$`} to an integrable
              Hamiltonian. What happens to the action on the Poincaré section?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The action changes by a small amount proportional to {`$\\varepsilon$`} at each
                step. The map gains a correction term {`$\\varepsilon f$`} in the {`$J$`} equation.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>Near-Integrable Systems: The Perturbed Twist Map</h2>

          <p>Add a perturbation to the integrable Hamiltonian:</p>
          <div className="lrn-eq">
            <span>{`$$H(J, \\theta) = H_0(J) + \\varepsilon H_1(J, \\theta)$$`}</span>
          </div>
          <p>
            The surface-of-section map is no longer exact twist. It becomes the perturbed twist
            mapping:
          </p>
          <div className="lrn-eq">
            <span>{`$$J_{n+1} = J_n + \\varepsilon f(J_{n+1}, \\theta_n)$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\theta_{n+1} = \\theta_n + 2\\pi\\alpha(J_{n+1}) + \\varepsilon g(J_{n+1}, \\theta_n)$$`}</span>
          </div>
          <p>
            This is the map for a nearly integrable system (small {`$\\varepsilon$`}); it tracks how
            the action changes step by step. The functions {`$f$`} and {`$g$`} are both periodic in{' '}
            {`$\\theta$`}. When {`$f$`} depends on {`$J_{n+1}$`}, the equation defines {`$J_{n+1}$`}
            implicitly. You solve it by Newton's method or successive approximation.
          </p>
          <p>
            For small {`$\\varepsilon$`}, KAM tori persist for most irrational {`$\\alpha$`} values.
            As {`$\\varepsilon$`} grows, rational tori break first (they are resonant). Stochastic
            (effectively random) regions grow around the rational orbits. This is the general route
            to chaos in Hamiltonian systems.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A rational {`$\\alpha = r/s$`} means the perturbation hits the orbit in phase at every
              return. Small kicks add up the same way each step, so resonance grows fast and the
              torus tears. An irrational {`$\\alpha$`} spreads the kicks over all phases, so they
              tend to cancel. The most irrational rotation number, the golden ratio, therefore holds
              its torus the longest, which is why it is the last to break.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Twist mapping (unperturbed)</span>
              <p>
                {`$J$`} is exactly conserved. Circles map exactly to circles. All motion is regular.
                The section shows clean nested circles.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Perturbed twist mapping</span>
              <p>
                {`$J$`} changes by {`$\\varepsilon f$`}. Circles deform. Rational tori break into
                chains of islands. Large {`$\\varepsilon$`} produces a chaotic sea.
              </p>
            </div>
          </div>

          {/* SECTION 9: RADIAL TWIST AND STANDARD MAP */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              In the radial twist map, {`$f$`} depends only on {`$\\theta$`} and {`$g = 0$`}. After
              several steps, does the angle increase, decrease, or oscillate?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It can do all three, depending on the initial angle and K. For large K, the motion
                becomes chaotic and the angle wanders unpredictably. For small K, it oscillates near
                the initial orbit.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>Radial Twist Map and the Standard Map</h2>

          <p>
            The radial twist map is the special case where {`$f$`} does not depend on {`$J$`} and
            {`$g = 0$`}:
          </p>
          <div className="lrn-eq">
            <span>{`$$J_{n+1} = J_n + \\varepsilon f(\\theta_n), \\quad \\theta_{n+1} = \\theta_n + 2\\pi\\alpha(J_{n+1})$$`}</span>
          </div>
          <p>
            This is explicit: compute {`$J_{n+1}$`} first, then {`$\\theta_{n+1}$`}. Linearize near
            a period-1 fixed point {`$J_0$`} where {`$\\alpha(J_0)$`} is an integer. Write
            {`$J_n = J_0 + \\Delta J_n$`} and rescale by {`$I_n = 2\\pi\\alpha'\\Delta J_n$`}
            (where {`$\\alpha' = d\\alpha/dJ$`} at {`$J_0$`}). Normalize {`$f^* = f / f_{\\max}$`}.
          </p>
          <p>
            Now watch the angle update collapse. Taylor-expand the twist:{' '}
            {`$2\\pi\\alpha(J_{n+1}) \\approx 2\\pi\\alpha(J_0) + 2\\pi\\alpha'\\Delta J_{n+1}$`}.
            The first term {`$2\\pi\\alpha(J_0)$`} is a whole multiple of {`$2\\pi$`}, so it drops
            out mod {`$2\\pi$`}. The second term is exactly {`$I_{n+1}$`} by the rescaling above. So
            the angle update becomes simply {`$\\theta_{n+1} = \\theta_n + I_{n+1}\\pmod{2\\pi}$`},
            and the map becomes:
          </p>
          <div className="lrn-eq">
            <span>{`$$I_{n+1} = I_n + K f^*(\\theta_n), \\quad \\theta_{n+1} = \\theta_n + I_{n+1} \\pmod{2\\pi}$$`}</span>
          </div>
          <p>with stochasticity parameter:</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$K = 2\\pi\\alpha'\\varepsilon f_{\\max}$$`}</span>
          </div>
          <p>
            Choose {`$f^*(\\theta) = \\sin\\theta$`} and you get the Chirikov-Taylor standard map:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$I_{n+1} = I_n + K\\sin\\theta_n, \\quad \\theta_{n+1} = \\theta_n + I_{n+1} \\pmod{2\\pi}$$`}</span>
          </div>

          <div>
            <StandardMap />
          </div>
          <p>
            Drag the K slider. Near {`$K = 0$`}: horizontal KAM lines (regular tori). Near
            {`$K = 1$`}: island chains appear at rational {`$\\alpha$`} values. Above
            {`$K \\approx 2$`}: a chaotic sea fills most of the plane. This is the standard map for
            the regular-to-chaotic transition.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does increasing K destroy the KAM tori? Trace the logic from{' '}
              {`$K = 2\\pi\\alpha'
              \\varepsilon f_{\\max}$`}{' '}
              back to the original perturbed Hamiltonian.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Larger {`$K$`} means larger {`$\\varepsilon$`} (stronger perturbation) or steeper
                twist (larger {`$\\alpha'$`}). The KAM theorem says tori survive only if the
                perturbation is small compared to the irrationality measure of {`$\\alpha$`}. Once
                {`$K$`} exceeds a critical value (around 1 for the standard map), the most resistant
                golden-ratio torus breaks. Orbits can then wander across the formerly closed
                barriers.
              </p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Reduce the pendulum {`$H = p^2/2 + F\\cos\\theta$`} to the standard map.</p>
              <ol className="lrn-list">
                <li>
                  Write the generating function:
                  {`$F_2 = p_{n+1}\\theta_n + \\Delta t(\\tfrac{1}{2}p_{n+1}^2 + F\\cos\\theta_n)$`}
                  .
                </li>
                <li>
                  Derive momentum update: {`$p_{n+1} = p_n - \\Delta t\\, F\\sin\\theta_n$`}
                  (force at old position).
                </li>
                <li>
                  Derive position update: {`$\\theta_{n+1} = \\theta_n + \\Delta t\\, p_{n+1}$`}
                  (using new momentum).
                </li>
                <li>
                  Set {`$I_n = p_n \\Delta t$`}. Then{' '}
                  {`$I_{n+1} = I_n + F(\\Delta t)^2 \\sin\\theta_n$`}, matching{' '}
                  {`$K = F(\\Delta t)^2$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                For the rotor {`$H = p^2/2 - F\\cos\\theta$`}, write down the generating function
                {`$F_2$`} and derive the momentum update. What sign does the force term have?
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Starting from {`$H = p^2/2 + (F/2)\\cos 2\\theta$`}, derive the standard map and
                identify {`$K$`} in terms of {`$F$`} and {`$\\Delta t$`}. Then state what value of
                {`$K$`} corresponds to the onset of widespread chaos.
              </p>
            </div>
          </div>

          {/* SECTION 10: HAMILTONIAN FORMS OF MAPS */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The radial twist map is discrete: it steps in integer time {`$n$`}. Can you write a
              continuous Hamiltonian that produces exactly the same iteration?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes, using the periodic delta function {`$\\delta_1(n) = \\sum_m \\delta(n-m)$`}.
                This creates a Hamiltonian that kicks the action only at integer times.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>Hamiltonian Forms of Maps</h2>

          <p>
            A discrete map and a continuous Hamiltonian are two descriptions of the same thing. The
            connection uses the periodic delta function:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\delta_1(n) = \\sum_{m=-\\infty}^{\\infty} \\delta(n-m) = 1 + 2\\sum_{q=1}^{\\infty} \\cos 2\\pi q n$$`}</span>
          </div>
          <p>
            Treat the iteration index {`$n$`} as continuous time. The radial twist map
            {`$J_{n+1} = J_n + \\varepsilon f(\\theta_n)$`} becomes the continuous equations:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{dJ}{dn} = \\varepsilon f(\\theta)\\,\\delta_1(n), \\quad \\frac{d\\theta}{dn} = 2\\pi\\alpha(J)$$`}</span>
          </div>
          <p>
            These come from the nonautonomous Hamiltonian (one that depends on time explicitly):
          </p>
          <div className="lrn-eq">
            <span>{`$$H(J, \\theta, n) = 2\\pi\\int^J \\alpha(J')\\,dJ' - \\varepsilon\\,\\delta_1(n)\\int^\\theta f(\\theta')\\,d\\theta'$$`}</span>
          </div>
          <p>
            Use this form to apply the analysis tools of Hamiltonian theory (Lie transforms,
            resonance analysis, diffusion estimates) directly to maps. The Fermi mapping and the
            separatrix mapping share this same kicked-Hamiltonian structure.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The periodic delta function fires a spike at every whole-number time {`$n$`}. Between
              spikes the action does not change, so {`$dJ/dn = 0$`}. Integrating across one spike
              adds exactly {`$\\varepsilon f(\\theta)$`} to the action. That single kick reproduces
              the map's discrete step {`$J_{n+1} = J_n + \\varepsilon f(\\theta_n)$`}, which is why
              the smooth Hamiltonian and the discrete map describe the same motion.
            </p>
          </div>

          <p>
            The compact notation {`$x_{n+1} = Tx_n$`} (with {`$x = (J, \\theta)$`}) lets you build
            the N-dof generalization directly:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{J}_{n+1} = \\mathbf{J}_n + \\varepsilon\\mathbf{f}(\\mathbf{J}_{n+1}, \\boldsymbol{\\theta}_n), \\quad \\boldsymbol{\\theta}_{n+1} = \\boldsymbol{\\theta}_n + 2\\pi\\boldsymbol{\\alpha}(\\mathbf{J}_{n+1}) + \\varepsilon\\mathbf{g}(\\mathbf{J}_{n+1}, \\boldsymbol{\\theta}_n)$$`}</span>
          </div>
          <p>
            Now {`$\\mathbf{J}$`} and {`$\\boldsymbol{\\theta}$`} are vectors with one entry per
            degree of freedom. This is the form you use for a star orbiting in a real galaxy, where
            three or more actions evolve together.
          </p>

          {/* SECTION 11: JUMP INTEGRAL AND PHASE-SPACE AREA */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              To find the action jump function {`$f$`} in the perturbed twist map, you integrate
              Hamilton's equations for one period. What period do you integrate over?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Over one period {`$T_2 = 2\\pi/\\omega_2$`} of the second degree of freedom. This is
                exactly the time between successive section crossings at{' '}
                {`$\\theta_2 = \\text{const.}$`}.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>The Jump Integral and Phase-Space Area</h2>

          <p>
            From Hamilton's equations,{' '}
            {`$dJ_1/dt = -\\varepsilon\\,\\partial H_1/\\partial\\theta_1$`}. Integrate over one
            period {`$T_2 = 2\\pi/\\omega_2$`} of the second degree of freedom. To first order in{' '}
            {`$\\varepsilon$`}, use the unperturbed trajectories on the right side:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\Delta J_1 = -\\varepsilon\\int_0^{T_2} dt\\; \\frac{\\partial H_1}{\\partial \\theta_1}\\bigl(J_{n+1}, J_2, \\theta_n + \\omega_1 t,\\, \\theta_{20} + \\omega_2 t\\bigr)$$`}</span>
          </div>
          <p>
            This integral is the function {`$f$`}:{' '}
            {`$\\varepsilon f(J_{n+1}, \\theta_n) = \\Delta J_1$`}.
          </p>
          <p>
            Work one case all the way through. Take the simplest perturbation{' '}
            {`$H_1 = \\cos\\theta_1$`}, which depends on {`$\\theta_1$`} alone. Then{' '}
            {`$\\partial H_1/\\partial\\theta_1 = -\\sin(\\theta_n + \\omega_1 t)$`} along the
            unperturbed orbit. The integral becomes:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\varepsilon f = \\varepsilon\\int_0^{T_2} \\sin(\\theta_n + \\omega_1 t)\\,dt = \\frac{\\varepsilon}{\\omega_1}\\bigl[\\cos\\theta_n - \\cos(\\theta_n + \\omega_1 T_2)\\bigr]$$`}</span>
          </div>
          <p>
            So {`$f$`} is a clean trigonometric function of {`$\\theta_n$`}. This is exactly the
            kind of sinusoidal kick that builds the standard map.
          </p>
          <p>Recover {`$g$`} from the area-preservation condition:</p>
          <div className="lrn-eq">
            <span>{`$$g(J, \\theta) = -\\int_0^\\theta \\frac{\\partial f}{\\partial J}\\,d\\theta'$$`}</span>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does this one integral hand you {`$g$`} for free, once you already know {`$f$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Area preservation forces{' '}
                {`$\\partial f/\\partial J_{n+1} + \\partial g/\\partial\\theta_n = 0$`}, the
                condition you derived in the area-preservation section. Rearranged, this says{' '}
                {`$\\partial g/\\partial\\theta = -\\partial f/\\partial J$`}. Integrating both
                sides in {`$\\theta$`} gives the formula for {`$g$`}. So once {`$f$`} is known,{' '}
                {`$g$`} is not free to choose: symplecticity ties them together.
              </p>
            </details>
          </div>
          <p>
            Near a resonance these kicks line up in phase and pile up step after step, so the action
            drifts fast. That same drift clears the asteroids out of resonant orbits and leaves the
            empty Kirkwood gaps in the asteroid belt. The mechanism is treated in full under KAM
            theory.
          </p>
          <p>
            When the second degree of freedom is not in action-angle form, replace {`$J_2$`} and
            {`$\\theta_2$`} by the unperturbed {`$p_2(t)$`}, {`$q_2(t)$`} orbits in the integral.
            The N-dof vector generalization integrates{' '}
            {`$\\partial H_1/\\partial \\boldsymbol{\\theta}$`}
            over period {`$T_N$`}.
          </p>
          <p>The phase-space area under a smooth curve {`$J(\\theta)$`} over an interval is:</p>
          <div className="lrn-eq">
            <span>{`$$A = \\int_{\\theta_1}^{\\theta_2} J(\\theta)\\,d\\theta$$`}</span>
          </div>
          <p>
            The next result is one you should know and use, not reproduce. It states that the change
            in area under any smooth curve over one map step equals the difference of the type-1
            generating function {`$F_1$`} at the endpoints only, independent of the curve's shape. A
            type-1 function {`$F_1(\\theta_n, \\theta_{n+1})$`} depends on the old and new angles,
            the natural variables for an area integral:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\Delta F_1(\\theta_2, \\theta_1) = A_{n+1} - A_n$$`}</span>
          </div>
          <p>
            For a phase-spanning orbit (one that winds all the way around in {`$\\theta$`}),
            {`$A_{n+1} = A_n = 0$`} by the periodicity constraint.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The type-1 generating function satisfies {`$J_n = -\\partial F_1/\\partial\\theta_n$`}
              and {`$J_{n+1} = \\partial F_1/\\partial\\theta_{n+1}$`}. Differentiating {`$F_1$`}
              along any smooth curve {`$J(\\theta)$`} parametrized by {`$\\lambda$`} and integrating
              gives{' '}
              {`$F_1(\\theta_{n+1}(\\theta_2), \\theta_2) - F_1(\\theta_{n+1}(\\theta_1),
              \\theta_1) = \\int J_{n+1}\\,d\\theta_{n+1} - \\int J_n\\,d\\theta_n = A_{n+1} - A_n$`}
              . The key is that {`$dF_1/d\\lambda$`} collapses to a total derivative, so only the
              endpoints matter.
            </p>
          </div>

          {/* SECTION 12: SYMPLECTIC INTEGRATION */}
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A standard Runge-Kutta integrator and a symplectic integrator both approximate the
              same orbit. After 10 million steps, which one still has closed KAM tori on the
              Poincaré section?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The symplectic integrator. It preserves the Poisson bracket structure exactly, so
                phase-space area is conserved and KAM tori persist. Runge-Kutta slowly drifts in
                energy and destroys the tori.
              </p>
            </details>
          </div>
        </>,
        <>
          <h2>Symplectic Integration</h2>

          <p>
            For the Hamiltonian {`$H = \\tfrac{1}{2}|p|^2 + V(\\theta)$`}, the first-order
            symplectic map is:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$p_{n+1} = p_n - \\Delta t\\,\\nabla V(\\theta_n), \\quad \\theta_{n+1} = \\theta_n + \\Delta t\\, p_{n+1}$$`}</span>
          </div>
          <p>
            Momentum updates with the force at the old position; position updates with the new
            momentum. This leapfrog or Stormer-Verlet structure comes from the generating function:
          </p>
          <div className="lrn-eq">
            <span>{`$$F_2 = p_{n+1}\\cdot\\theta_n + \\Delta t\\bigl(\\tfrac{1}{2}|p_{n+1}|^2 + V(\\theta_n)\\bigr)$$`}</span>
          </div>
          <p>
            Use symplectic integration whenever you need to run a Hamiltonian system for very many
            steps. This is critical for celestial mechanics (millions of orbital periods), particle
            storage rings, and tokamak field-line tracing. In all three a non-canonical integrator
            slowly accumulates energy error and destroys the orbit structure.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The map is built from a generating function, so it is canonical by construction. Every
              step preserves phase-space area exactly, with no approximation. A general integrator
              like Runge-Kutta only approximates the flow, so it leaks a tiny bit of area each step.
              Over millions of steps that leak adds up, the energy drifts, and the KAM tori that
              bound the motion fall apart. The symplectic map never leaks, so the tori stay intact.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Symplectic integrator</span>
              <p>
                Exactly preserves the Poisson bracket (phase-space area) at every step. KAM tori
                persist on the section. Only approximates the exact orbit trajectory (first-order in{' '}
                {`$\\Delta t$`}).
              </p>
              <p>
                As efficient as fourth-order Runge-Kutta when using the BCH fourth-order algorithm.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Runge-Kutta or Euler</span>
              <p>
                Higher formal accuracy per step but does not preserve canonical structure. Energy
                drifts over long times. KAM tori spiral inward or outward and eventually vanish.
              </p>
              <p>
                Fine for short integrations or dissipative systems, but wrong for Hamiltonian
                long-time studies.
              </p>
            </div>
          </div>

          <p>
            The first-order map factors as{' '}
            {`$T = T_1(\\Delta t) \\circ T_2(\\Delta t) + O((\\Delta t)^2)$`}. Here the kinetic map{' '}
            {`$T_1(\\tau)$`} advances position by {`$\\theta \\mapsto \\theta + \\tau p$`}, and the
            potential map {`$T_2(\\tau)$`} kicks momentum by{' '}
            {`$p \\mapsto p - \\tau\\nabla V(\\theta)$`}. This idea of splitting the step into a
            kinetic part and a potential part is called operator splitting.
          </p>
          <p>
            You can chain more sub-steps to cancel the leading error. The fourth-order variant (the
            Baker-Campbell-Hausdorff, or BCH, algorithm) uses seven such sub-steps:
          </p>
          <div className="lrn-eq">
            <span>{`$$T = T_1(s_1)\\circ T_2(d_1)\\circ T_1(s_2)\\circ T_2(d_2)\\circ T_1(s_2)\\circ T_2(d_1)\\circ T_1(s_1) + O((\\Delta t)^5)$$`}</span>
          </div>
          <p>
            The error per step now falls as {`$(\\Delta t)^5$`}, so the method is fourth-order
            accurate. The Reference card lists the seven sub-step constants.
          </p>

          <div>
            <PoincareSectionFlow />
          </div>
          <p>
            Hénon-Heiles system integrated with rk4 at {`$E = \\tfrac{1}{12}$`}. Five initial
            conditions, each integrated for 8000 steps. Section: {`$x = 0$`} crossings with{' '}
            {`$p_x > 0$`}. Nested oval curves show intact KAM tori. Each orbit generates its own
            closed curve.
          </p>

          <div className="lrn-insight">
            <p>
              At {`$E = \\tfrac{1}{12}$`} every Hénon-Heiles orbit stays on an intact torus, so the
              section is all nested curves. Raise the energy and the tori start to break. Near
              {`$E \\approx \\tfrac{1}{6}$`} large chaotic regions take over the section. The
              Attractors and Strange Attractors page tracks that energy sweep in full.
            </p>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'A Hamiltonian system has $N = 2$ degrees of freedom. Energy is fixed. You pick the section $y = 0$ with $\\dot{y} > 0$. What is the dimension of the resulting Poincaré section?',
        a: 'The section is 2-dimensional. Energy reduces phase space from $2N = 4$ dimensions to $2N - 1 = 3$. The section condition $y = 0$ removes one more, giving $2N - 2 = 2$. Recording only one crossing direction keeps the map one-to-one.'
      },
      {
        q: 'An unperturbed Kepler orbit starts at perihelion A. After 100 orbits, how many distinct points appear on the $p_x$-$x$ Poincaré section?',
        a: 'Exactly one point, A. The unperturbed Kepler orbit is closed and periodic. Every orbit returns to exactly the same perihelion with the same momentum. The Poincaré map has a single fixed point.'
      },
      {
        q: 'The rotation number is $\\alpha = 3/7$. How many points appear on the surface of section, and after how many orbits does the orbit close?',
        a: '$s = 7$ distinct points appear on the section. The orbit closes after $r = 3$ revolutions of $\\theta_1$ and $s = 7$ revolutions of $\\theta_2$. Each of the 7 section points cycles through the 7 positions in turn, returning to the start after 7 steps.'
      },
      {
        q: 'Why do you record Poincaré section crossings in only one direction (for example, $\\dot{y} > 0$ only)?',
        a: 'Recording both directions would make the map two-to-one: two distinct previous states could map to the same section point. By choosing one direction, the map is invertible. You can trace any section point uniquely backward or forward to adjacent crossings.'
      },
      {
        q: 'State the twist mapping equations and explain why the action $J$ does not change between successive section crossings.',
        a: "The twist map is $J_{n+1} = J_n$ and $\\theta_{n+1} = \\theta_n + 2\\pi\\alpha(J_{n+1})$. For an integrable system, $H_0$ depends only on $J$, not on $\\theta$. Hamilton's equation gives $\\dot{J} = -\\partial H_0/\\partial\\theta = 0$. So $J$ is constant between crossings, and the map only advances the angle."
      },
      {
        q: 'What does it mean for a map to be area-preserving? State the condition in terms of the Jacobian.',
        a: "An area-preserving map takes any region in the $(J, \\theta)$ plane to a region of the same area. For a 2D map, the condition is that the Jacobian determinant equals 1: $\\partial(J_{n+1}, \\theta_{n+1})/\\partial(J_n, \\theta_n) = 1$. This is Liouville's theorem applied to the discrete map."
      },
      {
        q: "Explain WHY area preservation is a requirement for any map generated by Hamilton's equations. Give the first-principles argument.",
        a: "Liouville's theorem says phase-space volume is conserved along any Hamiltonian flow. For a 2-DOF system restricted to the energy surface, the relevant volume element is the 2D area on the section. Any map obtained by integrating Hamilton's equations for a fixed time interval must inherit this conservation. The Jacobian equals 1 is exactly this statement for the discrete map."
      },
      {
        q: 'The perturbed twist mapping has $J_{n+1} = J_n + \\varepsilon f(J_{n+1}, \\theta_n)$ with $f$ depending on $J_{n+1}$. How do you solve for $J_{n+1}$?',
        a: "The equation defines $J_{n+1}$ implicitly. Solve it by Newton's method or successive approximation: start with $J^{(0)}_{n+1} = J_n$, then iterate $J^{(i+1)}_{n+1} = J_n + \\varepsilon f(J^{(i)}_{n+1}, \\theta_n)$. This converges rapidly because $\\varepsilon$ is small."
      },
      {
        q: 'Transfer question: A particle storage ring has millions of turns. Why is symplectic integration essential, and what goes wrong with standard Runge-Kutta?',
        a: 'A storage ring must confine particles for millions of oscillation periods. Symplectic integration preserves the Poisson bracket at every step, keeping phase-space area constant and maintaining KAM tori that bound particle motion. Standard Runge-Kutta accumulates a small energy error each step. Over millions of steps, energy drifts far enough that orbits escape the tori and the particle is lost.'
      },
      {
        q: 'Write down the Chirikov-Taylor standard map and identify $K$. For the pendulum $H = p^2/2 + F\\cos\\theta$ discretized with time step $\\Delta t$, what is $K$?',
        a: 'Standard map: $I_{n+1} = I_n + K\\sin\\theta_n$, $\\theta_{n+1} = \\theta_n + I_{n+1}$ (mod $2\\pi$). For the pendulum, setting $I_n = p_n \\Delta t$ gives $K = F(\\Delta t)^2$. Small $K$: regular KAM motion. Large $K$: widespread chaos. The critical transition is near $K \\approx 1$.'
      },
      {
        q: 'What is the stochasticity parameter $K$ and what does it control in the standard map?',
        a: "$K = 2\\pi\\alpha'\\varepsilon f_{\\max}$ measures the perturbation strength near a period-1 fixed point. Small $K$: KAM tori cover most of phase space and motion is regular. Large $K$: tori break and a chaotic sea expands. Chirikov and Greene used the standard map to estimate the critical $K$ for the onset of widespread stochasticity near $K \\approx 1$."
      },
      {
        q: 'Elaborate: Why is the standard map the "universal" local form near a period-1 fixed point of any radial twist map? Explain from first principles.',
        a: "Any radial twist map near a period-1 fixed point $J_0$ (where $\\alpha(J_0)$ is an integer) has the same local structure after two steps: linearize $\\Delta J = J - J_0$, rescale by $I = 2\\pi\\alpha'\\Delta J$, normalize $f^* = f/f_{\\max}$. The result is always $I_{n+1} = I_n + Kf^*$, $\\theta_{n+1} = \\theta_n + I_{n+1}$. Different maps differ in $K$ and $f^*$, but $f^* = \\sin\\theta$ is the generic choice. So the standard map captures the essential local dynamics of any smooth map near a fixed point."
      },
      {
        q: 'What is the area-preservation condition for the perturbed twist map in terms of the functions $f$ and $g$?',
        a: '$\\partial f/\\partial J_{n+1} + \\partial g/\\partial\\theta_n = 0$. This comes from the generating function: $f = -\\partial\\mathcal{G}/\\partial\\theta_n$ and $g = \\partial\\mathcal{G}/\\partial J_{n+1}$, so $\\partial f/\\partial J + \\partial g/\\partial\\theta = -\\partial^2\\mathcal{G}/\\partial J\\partial\\theta + \\partial^2\\mathcal{G}/\\partial\\theta\\partial J = 0$ by symmetry of mixed partials.'
      },
      {
        q: 'Transfer: A billiards problem has a ball bouncing inside a convex boundary. How does this connect to the radial twist map?',
        a: "At each collision, you record the position along the boundary and the angle of incidence. These two numbers form a 2D point $(q, p)$. The next collision gives the next point. This map is area-preserving by Liouville's theorem for the billiard flow. It also has the structure of a radial twist map. The action, related to the angle of incidence, changes according to the geometry. The angle, the position along the boundary, advances by an amount that depends on the action. So the billiard map is a concrete physical radial twist map."
      },
      {
        q: 'State the MacKay-Bensimon-Kadanoff-Mather result for phase-space area change under one map step.',
        a: 'The change in area under any smooth curve $J(\\theta)$ over one map step equals $\\Delta F_1(\\theta_2, \\theta_1) = A_{n+1} - A_n$, where $F_1$ is the type-1 generating function evaluated only at the endpoints $\\theta_1$ and $\\theta_2$. This is independent of the shape of the curve between the endpoints. For a phase-spanning orbit, $A_{n+1} = A_n = 0$.'
      },
      {
        q: 'Write the first-order symplectic map for $H = |p|^2/2 + V(\\theta)$ and identify the generating function that produces it.',
        a: 'Map: $p_{n+1} = p_n - \\Delta t\\nabla V(\\theta_n)$, $\\theta_{n+1} = \\theta_n + \\Delta t\\, p_{n+1}$. Generating function: $F_2 = p_{n+1}\\cdot\\theta_n + \\Delta t(\\tfrac{1}{2}|p_{n+1}|^2 + V(\\theta_n))$. This is type-2 (mixed old position, new momentum), which guarantees the map is canonical by construction.'
      },
      {
        q: 'Predict: A trajectory on the Poincaré section for the Hénon-Heiles system at low energy shows nested oval curves. What does this tell you about the motion?',
        a: 'Nested ovals are the section of intact KAM tori. Each oval corresponds to one conserved torus. The motion is regular (quasiperiodic): there are approximate constants of motion in addition to energy. The trajectory is confined to a 2D torus in the 4D phase space. At higher energy these ovals break apart and scatter into a chaotic sea.'
      },
      {
        q: 'Error detection: A student writes the standard map as $\\theta_{n+1} = \\theta_n + I_n$ (using old $I_n$ instead of new $I_{n+1}$). Is this still area-preserving? What is wrong?',
        a: 'No. Check the Jacobian: $\\partial(I_{n+1}, \\theta_{n+1})/\\partial(I_n, \\theta_n)$ with $\\theta_{n+1} = \\theta_n + I_n$ gives a Jacobian that is not 1 in general. The area-preservation condition requires the updated action $I_{n+1}$ in the angle equation. Using the old $I_n$ breaks symplecticity and the orbit will slowly drift in energy.'
      },
      {
        q: 'How is the periodic delta function $\\delta_1(n) = \\sum_m \\delta(n-m)$ used to convert a radial twist map into a continuous Hamiltonian?',
        a: 'Treat the iteration index $n$ as continuous time. The radial twist map kicks $J$ only at integer steps, like a periodic impulse force. The delta function creates exactly this: $dJ/dn = \\varepsilon f(\\theta)\\delta_1(n)$ fires the kick at each integer $n$, giving $J_{n+1} - J_n = \\varepsilon f(\\theta_n)$ after integrating through the delta. Between kicks, $dJ/dn = 0$ and $d\\theta/dn = 2\\pi\\alpha(J)$.'
      },
      {
        q: 'What is the jump integral for $\\Delta J_1$ in the perturbed 2-DOF twist map, and why do you integrate over period $T_2$?',
        a: '$\\Delta J_1 = -\\varepsilon\\int_0^{T_2} dt\\;\\partial H_1/\\partial\\theta_1$, evaluated along the unperturbed orbit. You integrate over $T_2 = 2\\pi/\\omega_2$ because one full period of $\\theta_2$ defines the Poincaré section. The map records the state once every $T_2$, so the net action change per map step is exactly this integral. To first order in $\\varepsilon$, you use the unperturbed orbit in the integrand.'
      },
      {
        q: 'Self-explain: The Chirikov-Taylor standard map is not integrable. Yet at small K, its Poincaré section looks regular and ordered, almost like the unperturbed twist map. Why?',
        a: 'At small $K$, KAM tori densely cover the phase plane. These tori are nearly horizontal lines (the unperturbed invariant lines). The KAM curves bound the few thin stochastic layers so tightly that the orbit structure looks clean and ordered, even though the map is not integrable. The regular look is a property of the surviving KAM structure at small perturbation, not of the map equations. As $K$ grows, the tori break and the chaotic regions become visible.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Poincaré Sections and Poincaré Maps',
      sections: [
        <>
          <h2>Core Equations</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Dimensional reduction</div>
            <div className="lrn-definition-desc">
              <p>
                Phase space dimension: {`$2N$`}. Energy surface: {`$2N - 1$`}. Poincaré section (one
                coordinate fixed, one direction): {`$2N - 2$`}.
              </p>
              <p>When to use: reduce any continuous N-DOF flow to an iterated map.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Rotation number</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\alpha = \\frac{\\omega_1}{\\omega_2}$$`}</p>
              <p>
                When to use: classify section orbits. Rational {`$\\alpha = r/s$`}: exactly {`$s$`}
                fixed points. Irrational {`$\\alpha$`}: dense circle filling.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Twist mapping</div>
            <div className="lrn-definition-desc">
              <p>{`$$J_{n+1} = J_n, \\ \\theta_{n+1} = \\theta_n + 2\\pi\\alpha(J_{n+1})$$`}</p>
              <p>When to use: unperturbed integrable system on the section.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Area-preservation condition</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\frac{\\partial(J_{n+1}, \\theta_{n+1})}{\\partial(J_n, \\theta_n)} = 1, \\quad \\frac{\\partial f}{\\partial J_{n+1}} + \\frac{\\partial g}{\\partial \\theta_n} = 0$$`}</p>
              <p>When to use: verify or construct any canonical 2D map.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Radial twist map</div>
            <div className="lrn-definition-desc">
              <p>{`$$J_{n+1} = J_n + \\varepsilon f(\\theta_n), \\quad \\theta_{n+1} = \\theta_n + 2\\pi\\alpha(J_{n+1})$$`}</p>
              <p>
                When to use: special case where {`$f$`} does not depend on {`$J$`} and {`$g = 0$`}.
                Explicit iteration: compute {`$J_{n+1}$`} first, then {`$\\theta_{n+1}$`}.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Perturbed twist mapping</div>
            <div className="lrn-definition-desc">
              <p>{`$$J_{n+1} = J_n + \\varepsilon f(J_{n+1}, \\theta_n), \\quad \\theta_{n+1} = \\theta_n + 2\\pi\\alpha(J_{n+1}) + \\varepsilon g(J_{n+1}, \\theta_n)$$`}</p>
              <p>
                When to use: near-integrable system, small {`$\\varepsilon$`}, track onset of chaos.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Stochasticity parameter</div>
            <div className="lrn-definition-desc">
              <p>{`$$K = 2\\pi\\alpha'\\varepsilon f_{\\max}$$`}</p>
              <p>
                When to use: quantify chaos strength near a period-1 fixed point. Small {`$K$`}:
                regular. Large {`$K$`}: chaotic.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Standard (Chirikov-Taylor) map</div>
            <div className="lrn-definition-desc">
              <p>{`$$I_{n+1} = I_n + K\\sin\\theta_n, \\quad \\theta_{n+1} = \\theta_n + I_{n+1} \\pmod{2\\pi}$$`}</p>
              <p>
                When to use: universal local normal form near any period-1 fixed point of a radial
                twist map. Pendulum gives {`$K = F(\\Delta t)^2$`}.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Jump integral</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\Delta J_1 = -\\varepsilon\\int_0^{T_2} dt\\;\\frac{\\partial H_1}{\\partial\\theta_1}\\bigl(J_{n+1}, J_2, \\theta_n + \\omega_1 t,\\,\\theta_{20} + \\omega_2 t\\bigr)$$`}</p>
              <p>
                When to use: compute {`$f$`} in the perturbed twist map from the Hamiltonian
                perturbation {`$H_1$`}.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Hamiltonian form of a map</div>
            <div className="lrn-definition-desc">
              <p>{`$$\\delta_1(n) = \\sum_m \\delta(n-m), \\quad \\frac{dJ}{dn} = \\varepsilon f(\\theta)\\,\\delta_1(n), \\quad \\frac{d\\theta}{dn} = 2\\pi\\alpha(J)$$`}</p>
              <p>
                When to use: turn a discrete map into a continuous (kicked) Hamiltonian so you can
                apply Lie transforms, resonance analysis, or diffusion estimates.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Phase-space area and generating function</div>
            <div className="lrn-definition-desc">
              <p>{`$$A = \\int_{\\theta_1}^{\\theta_2} J(\\theta)\\,d\\theta, \\quad \\Delta F_1(\\theta_2, \\theta_1) = A_{n+1} - A_n$$`}</p>
              <p>
                When to use: area change over one map step equals {`$F_1$`} difference at endpoints,
                independent of curve shape.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">First-order symplectic map</div>
            <div className="lrn-definition-desc">
              <p>{`$$p_{n+1} = p_n - \\Delta t\\,\\nabla V(\\theta_n), \\quad \\theta_{n+1} = \\theta_n + \\Delta t\\,p_{n+1}$$`}</p>
              <p>
                When to use: long-time Hamiltonian integration. Preserves phase-space area exactly.
                Use the BCH fourth-order variant for accuracy.
              </p>
            </div>
          </div>

          <h2>Map Type Comparison</h2>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Twist map</span>
              <p>{`$J$`} conserved. Circles map to circles. Integrable.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Radial twist map</span>
              <p>
                {`$f$`} independent of {`$J$`}, {`$g = 0$`}. Explicit iteration.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Standard map</span>
              <p>{`$f^* = \\sin\\theta$`}. Universal normal form near a period-1 fixed point.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Symplectic map</span>
              <p>
                Leapfrog structure. Area-preserving by construction. BCH fourth-order: 7 sub-steps.
              </p>
            </div>
          </div>

          <h2>Key Constants</h2>

          <ul className="lrn-list">
            <li>
              BCH {`$\\beta = \\sqrt[3]{2}$`}, {`$s_1 = \\Delta t / [2(2-\\beta)]$`},{' '}
              {`$d_1 = \\Delta t/(2-\\beta)$`}
            </li>
            <li>
              Standard map critical K: chaos onset near {`$K \\approx 1$`} (Chirikov, Greene 1979)
            </li>
            <li>Hénon-Heiles energy of chaos onset: {`$E \\approx \\tfrac{1}{6}$`}</li>
            <li>Period of second DOF section: {`$T_2 = 2\\pi/\\omega_2$`}</li>
          </ul>

          <h2>Named Results</h2>

          <ul className="lrn-list">
            <li>
              MacKay-Bensimon-Kadanoff-Mather (1984):{' '}
              {`$\\Delta F_1(\\theta_2, \\theta_1) = A_{n+1} - A_n$`}. Endpoints only.
            </li>
            <li>
              Forest-Berz BCH (1989): fourth-order symplectic algorithm from operator splitting.
            </li>
            <li>
              Chirikov (1979) and Greene (1979): standard map critical K for transition to
              widespread chaos.
            </li>
            <li>de Vogelaere (1958), Ruth (1983): foundational symplectic integrators.</li>
          </ul>
        </>
      ]
    },
    customCss: null
  }
  return <LearningTemplate config={config} />
}
