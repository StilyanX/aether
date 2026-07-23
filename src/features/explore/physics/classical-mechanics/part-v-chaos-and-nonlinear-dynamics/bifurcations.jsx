import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  BifSaddleNode,
  BifTranscritical,
  BifPitchfork,
  BifPhaseLine,
  BifHopf,
  BifPeriodDoubling,
  BifFermiIsland
} from '../../../../../components/viz'

export default function Bifurcations() {
  const config = {
    cssPrefix: 'bif',
    documentTitle: 'Bifurcations: Saddle-Node, Pitchfork, and Hopf - AETHER',
    learning: {
      category: 'Module 5',
      groupTitle: 'Chaos and Nonlinear Dynamics',
      title: 'Bifurcations: Saddle-Node, Pitchfork, and Hopf',
      subtitle:
        'How fixed points are born, die, and swap stability as a control parameter changes, from basic normal forms through period-doubling cascades in real chaotic systems.',
      sections: [
        <>
          <h2>Linear Stability and What a Bifurcation Is</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You push a ball resting at the bottom of a bowl. It returns. You balance a ball on top
              of a hill. It rolls away. Both are fixed points. What is the key difference?
            </p>
          </div>
          <p>
            Consider a 1D system {`$\\dot{x} = f(x)$`}. A fixed point {`$x^*$`} satisfies{' '}
            {`$f(x^*) = 0$`}. Write a small perturbation {`$\\eta = x - x^*$`}. Differentiating,{' '}
            {`$\\dot{\\eta} = \\dot{x} = f(x^* + \\eta)$`}. Taylor-expanding to first order gives
            the key result:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\dot{\\eta} \\approx f'(x^*)\\,\\eta$$`}</span>
          </div>
          <p>
            This is a linear ODE with solution {`$\\eta(t) = \\eta_0 e^{f'(x^*)t}$`}. The sign of{' '}
            {`$f'(x^*)$`} decides everything. The fixed point is <strong>stable</strong> when{' '}
            {`$f'(x^*) < 0$`}, <strong>unstable</strong> when {`$f'(x^*) > 0$`}, and marginal when{' '}
            {`$f'(x^*) = 0$`}.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The Taylor expansion works because the perturbation {`$\\eta$`} is small. The linear
              term {`$f'(x^*)\\eta$`} dominates all higher-order terms near {`$x^*$`}. When{' '}
              {`$f'(x^*) < 0$`} the exponential decays: perturbations shrink back to zero. When{' '}
              {`$f'(x^*) > 0$`} the exponential grows: perturbations run away. The derivative is the
              local slope of the velocity field, and its sign is the restoring or repelling force on
              nearby trajectories.
            </p>
          </div>
          <p>
            A <strong>bifurcation</strong> is a qualitative change in the number or stability of
            fixed points as a control parameter {`$r$`} varies. At a bifurcation, {`$f'(x^*) = 0$`}{' '}
            exactly, so the linear analysis fails to decide stability. This marginal case is where
            the interesting behavior lives: it marks the moment a fixed point is created, destroyed,
            or swaps stability with another. The normal forms below classify every generic case.
          </p>
        </>,

        <>
          <h2>Saddle-Node Bifurcation</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A light switch circuit has a stable off-state at low current. As current increases the
              off-state suddenly vanishes. Can you sketch the bifurcation diagram before reading on?
            </p>
          </div>
          <p>
            Use the saddle-node when equilibria suddenly appear or vanish as a parameter changes.
            Examples: a neuron starting to spike, a circuit turning on, the onset of a heartbeat.
          </p>
          <p>
            The normal form is {`$\\dot{x} = r + x^2$`}. Setting {`$f(x) = 0$`} gives{' '}
            {`$x^* = \\pm\\sqrt{-r}$`}. Both roots require {`$r \\leq 0$`}.
          </p>
          <ul className="lrn-list">
            <li>
              {`$r < 0$`}: two fixed points. Lower branch {`$x^* = -\\sqrt{-r}$`} is stable (solid).
              Upper branch {`$x^* = +\\sqrt{-r}$`} is unstable (hollow).
            </li>
            <li>
              {`$r = 0$`}: the two collide into one half-stable point at {`$x^* = 0$`}.
            </li>
            <li>{`$r > 0$`}: no fixed points exist. Trajectories escape to infinity.</li>
          </ul>
          <div>
            <BifSaddleNode />
          </div>
          <p>
            Drag the slider and watch the two fixed points approach, merge at {`$r = 0$`}, and
            vanish. The solid dot marks the stable fixed point; the hollow circle marks the unstable
            one.
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">
                COMPLETE EXAMPLE: Finding stability in the saddle-node
              </span>
              <p>{`Compute $f'(x) = 2x$ for $\\dot{x} = r + x^2$. At $x^* = -\\sqrt{-r}$:`}</p>
              <div className="lrn-eq">
                <span>{`$$f'(-\\sqrt{-r}) = 2(-\\sqrt{-r}) = -2\\sqrt{-r} < 0 \\quad (r < 0)$$`}</span>
              </div>
              <p>
                The derivative is negative, so the lower branch is stable. At{' '}
                {`$x^* = +\\sqrt{-r}$`}: {`$f'(+\\sqrt{-r}) = +2\\sqrt{-r} > 0$`}, so the upper
                branch is unstable.
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN: What is the stability at r = 0?</span>
              <p>
                At {`$r = 0$`} the fixed point is {`$x^* = 0$`}. Compute {`$f'(0)$`}. What does the
                result tell you?
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Apply the same steps to {`$\\dot{x} = r - x^2$`}. Find the fixed points, compute the
                derivative at each, and determine which branch is stable.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the stability check require computing the derivative at each fixed point
              separately, rather than just reading off the sign of {`$r$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$r$`} only tells you whether fixed points exist. Stability depends on{' '}
                {`$f'(x^*)$`} at the specific location of each fixed point. The two roots of the
                saddle-node sit at different {`$x$`} values with opposite signs of {`$f'$`}, so they
                have opposite stability even though they share the same {`$r$`}.
              </p>
            </details>
          </div>
          <div>
            <BifPhaseLine />
          </div>
          <p>
            The phase line shows flow arrows (direction = sign of {`$f(x)$`}) and the fixed points.
            Move the {`$r$`} slider to watch arrows, fixed points, and flow directions change in
            real time.
          </p>
        </>,

        <>
          <h2>Transcritical Bifurcation</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A laser always has a zero-output state, both below and above the lasing threshold. But
              above the threshold the laser emits light. How can the zero-output state survive while
              the system clearly changes behavior?
            </p>
          </div>
          <p>
            Use the transcritical when a fixed point always exists but swaps stability at a
            threshold. Examples: laser threshold, population models where extinction is impossible,
            epidemic onset in an always-susceptible population.
          </p>
          <p>
            Normal form: {`$\\dot{x} = rx - x^2$`}. Factor: {`$x(r - x) = 0$`}. Two fixed points for
            all {`$r$`}: {`$x^* = 0$`} and {`$x^* = r$`}.
          </p>
          <p>Compute {`$f'(x) = r - 2x$`}. At each fixed point:</p>
          <ul className="lrn-list">
            <li>
              {`$x^* = 0$`}: {`$f'(0) = r$`}. Stable when {`$r < 0$`}, unstable when {`$r > 0$`}.
            </li>
            <li>
              {`$x^* = r$`}: {`$f'(r) = r - 2r = -r$`}. Unstable when {`$r < 0$`}, stable when{' '}
              {`$r > 0$`}.
            </li>
          </ul>
          <p>
            At {`$r = 0$`} both fixed points coincide at the origin and swap stability. Neither is
            created nor destroyed: they merely pass through each other and exchange roles.
          </p>
          <div>
            <BifTranscritical />
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Saddle-node</span>
              <p>
                Two fixed points collide and disappear. Above the bifurcation there is no fixed
                point at all. The change is irreversible: you cannot recover the lost equilibria by
                reversing {`$r$`} without going back below zero.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Transcritical</span>
              <p>
                Two fixed points both persist for all {`$r$`}. They exchange stability at{' '}
                {`$r = 0$`}. No equilibrium is ever lost. The system always has two fixed points;
                the question is only which one attracts trajectories.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The transcritical form {`$rx - x^2 = x(r-x)$`} has a zero at {`$x=0$`} for every value
              of {`$r$`}. This is a structural constraint: the origin is a fixed point by the form
              of the equation, not by accident. Any system where a specific state is always an
              equilibrium (zero population, zero output) and a parameter controls its stability has
              the transcritical structure.
            </p>
          </div>
        </>,

        <>
          <h2>Pitchfork Bifurcation</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A symmetric beam is compressed from both ends. At a critical load it buckles. It can
              buckle left or right with equal probability. How does symmetry constrain the
              bifurcation diagram shape?
            </p>
          </div>
          <p>
            Use the supercritical pitchfork when a symmetric system has one stable state that splits
            into two at a threshold. Examples: buckling beam, a magnet cooled below its Curie
            temperature, convection rolls, symmetry-breaking in coupled oscillators.
          </p>
          <h3>Supercritical Case</h3>
          <p>
            Normal form: {`$\\dot{x} = rx - x^3$`}. The symmetry condition {`$f(-x) = -f(x)$`}
            requires only odd powers. Fixed points: {`$x^* = 0$`} always, and{' '}
            {`$x^* = \\pm\\sqrt{r}$`} for {`$r > 0$`} only.
          </p>
          <ul className="lrn-list">
            <li>
              {`$r < 0$`}: only {`$x^* = 0$`}, and {`$f'(0) = r < 0$`} so it is stable.
            </li>
            <li>
              {`$r > 0$`}: {`$x^* = 0$`} has {`$f'(0) = r > 0$`}, unstable. The two branches{' '}
              {`$x^* = \\pm\\sqrt{r}$`} have {`$f'(\\pm\\sqrt{r}) = r - 3r = -2r < 0$`}, both
              stable.
            </li>
          </ul>
          <p>
            One stable state smoothly splits into two. The transition is continuous and has no
            hysteresis.
          </p>
          <h3>Subcritical Case</h3>
          <p>
            Normal form: {`$\\dot{x} = rx + x^3$`} (plus a stabilizing {`$-x^5$`} term in real
            systems). Fixed points {`$x^* = \\pm\\sqrt{-r}$`} exist for {`$r < 0$`} and are both
            unstable. At {`$r = 0$`} the origin loses stability with no nearby stable state, so
            trajectories jump to a distant attractor. Reversing {`$r$`} brings the system back by a
            different path: hysteresis.
          </p>
          <div>
            <BifPitchfork />
          </div>
          <p>
            Toggle between supercritical and subcritical. Solid curves are stable branches; dashed
            curves are unstable.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Supercritical pitchfork</span>
              <p>
                The two new branches are stable. The transition is smooth. The system moves
                continuously to one of the two new states. No sudden jumps. No hysteresis.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Subcritical pitchfork</span>
              <p>
                The two branches emerging at {`$r = 0$`} are unstable. There is no soft landing: the
                trajectory jumps to a far attractor. The return path is different, producing
                hysteresis.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the pitchfork normal form contain only odd powers of {`$x$`} while the
              saddle-node contains an even power ({`$x^2$`})?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The pitchfork applies to symmetric systems where {`$f(-x) = -f(x)$`}. This odd
                symmetry forces all even powers to vanish: a constant term would break symmetry (it
                would shift the zero), and {`$x^2$`} is even. The saddle-node has no such symmetry,
                so even powers are allowed. The symmetry of the physical system determines which
                normal form applies.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Hopf Bifurcation</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An electronic circuit runs at a steady voltage. As you increase a gain parameter the
              voltage starts to oscillate with a small but growing amplitude. Predict what happens
              to the eigenvalues of the fixed point as you cross the threshold.
            </p>
          </div>
          <p>
            Use the supercritical Hopf when a steady state gives birth to oscillations at a
            threshold. Examples: onset of oscillation in circuits, chemical clocks
            (Belousov-Zhabotinsky), flutter in aircraft wings, predator-prey cycles.
          </p>
          <p>
            A Hopf bifurcation requires at least two dimensions. The fixed point has a pair of
            complex-conjugate eigenvalues {`$\\lambda = \\mu \\pm i\\omega$`}. You already know a
            spiral from the previous topic: {`$\\text{Re}(\\lambda) < 0$`} winds inward (stable),
            {`$\\text{Re}(\\lambda) > 0$`} winds outward (unstable). The Hopf bifurcation is the
            moment that real part crosses zero, at {`$\\mu = 0$`}. The new thing is what crossing
            does: for {`$\\mu > 0$`} the spiral turns unstable, but a stable limit cycle of radius
            {`$\\approx\\sqrt{\\mu}$`} appears around it, and outward trajectories settle onto that
            cycle instead of escaping.
          </p>
          <p>The polar normal form that captures this is:</p>
          <div className="lrn-eq">
            <span>{`$$\\dot{r} = \\mu r - r^3, \\qquad \\dot{\\theta} = \\omega + br^2$$`}</span>
          </div>
          <p>
            The limit cycle radius satisfies {`$\\dot{r} = 0$`}, giving {`$r^* = \\sqrt{\\mu}$`} for{' '}
            {`$\\mu > 0$`}. The amplitude grows continuously from zero at the bifurcation.
          </p>
          <div>
            <BifHopf />
          </div>
          <p>
            Move {`$\\mu$`} below zero: the spiral contracts to the stable origin. Move it above
            zero: the origin becomes unstable (hollow) and a stable limit cycle appears (the bold
            circle). The bifurcation diagram on the left shows its radius growing as √μ.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              In the radial equation {`$\\dot{r} = \\mu r - r^3$`}, the term {`$\\mu r$`} is a
              linear growth or decay, and {`$-r^3$`} is a nonlinear saturation. For {`$\\mu < 0$`}
              both terms damp {`$r$`} to zero. For {`$\\mu > 0$`} the linear term grows {`$r$`}
              until {`$-r^3$`} balances it, exactly at {`$r^* = \\sqrt{\\mu}$`}. The nonlinearity is
              the mechanism that creates a finite-amplitude oscillation from a vanishingly small
              instability.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Supercritical Hopf</span>
              <p>
                {`$\\dot{r} = \\mu r - r^3$`}. Stable limit cycle of radius {`$\\sqrt{\\mu}$`} born
                at {`$\\mu = 0$`}. Amplitude grows continuously from zero. Safe transition to
                oscillations.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Subcritical Hopf</span>
              <p>
                {`$\\dot{r} = \\mu r + r^3$`} (with stabilizing {`$-r^5$`}). An unstable limit cycle
                for {`$\\mu < 0$`} shrinks to zero at {`$\\mu = 0$`}. The steady state then jumps
                suddenly to a large-amplitude oscillation. Hysteresis appears on the return path.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Period Doubling and the Path to Chaos</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You increase the driving amplitude {`$g$`} of a pendulum in small steps. At first the
              pendulum swings at one frequency. Then at two. Then at four. What comes next?
            </p>
          </div>
          <p>
            Chaos needs two conditions: the system must be nonlinear, and it must have at least
            three first-order variables. A second-order nonlinear ODE can become chaotic by adding
            one more variable. The driven, damped pendulum does exactly this.
          </p>
          <p>Starting from:</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d^2\\theta}{dt^2} + \\frac{1}{q}\\frac{d\\theta}{dt} + \\sin\\theta = g\\cos(\\omega_D t)$$`}</span>
          </div>
          <p>
            Here {`$g$`} is the drive strength, {`$\\omega_D$`} the drive frequency, and {`$q$`}
            the quality factor: a large {`$q$`} means weak damping, so the pendulum bleeds energy
            slowly. Introduce {`$\\phi$`} as the phase of the driving term,{' '}
            {`$\\dot{\\phi} = \\omega_D$`}. Then define {`$\\omega = \\dot{\\theta}$`}. The single
            second-order equation becomes three first-order ODEs:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\dot{\\phi} = \\omega_D, \\qquad \\dot{\\theta} = \\omega, \\qquad \\dot{\\omega} = -\\frac{1}{q}\\omega - \\sin\\theta + g\\cos\\phi$$`}</span>
          </div>
          <p>
            The third equation is nonlinear ({`$\\sin\\theta$`}) and depends on all three variables.
            Three variables plus nonlinearity opens the door to chaos.
          </p>
          <p>
            With {`$q = 2$`} fixed, the amplitude {`$g$`} serves as the control parameter. To read
            the motion, take a Poincaré section: instead of watching the full path, snapshot the
            state once every drive period and plot just those dots. A repeating motion lands on a
            few fixed dots; a chaotic motion scatters them. At {`$g = 0.9$`} the section shows a
            single closed elliptic orbit: regular, periodic motion. At {`$g = 1.15$`} the section
            shows a scattered cloud of points: chaotic motion.
          </p>
          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              As {`$g$`} increases from 1.0 to 1.5, the pendulum undergoes a cascade of
              bifurcations. At each bifurcation the number of allowed oscillation frequencies
              doubles. The cascade {`$1 \\to 2 \\to 4 \\to 8 \\to \\cdots$`} converges to a limit
              beyond which chaos begins.
            </p>
          </div>
          <div>
            <BifPeriodDoubling />
          </div>
          <p>
            To see the cascade cleanly, swap the pendulum for the simplest system that does the same
            thing: a one-line map that takes a number and returns the next one. This diagram repeats
            the map {`$x_{n+1} = a - x_n^2$`}, lets the early wobble die away, and plots the
            long-term state against the control parameter {`$a$`}. Watch the branches split in the
            sequence {`$1 \\to 2 \\to 4 \\to 8$`}, then dissolve into chaos. The pendulum does the
            same; the map just shows it without clutter.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Each branch-split is a bifurcation of the periodic orbit, just like the ones you
              already met. A stable orbit of period {`$k$`} loses stability, and a stable orbit of
              period {`$2k$`} is born around it: a pitchfork of the whole cycle. Stack these
              doublings and the cascade marches to chaos. How fast the steps shrink, and why every
              smooth one-hump map shrinks them the same way, is the Feigenbaum story the
              logistic-map topic tells in full.
            </p>
          </div>
        </>,

        <>
          <h2>Bifurcations in Area-Preserving Maps: Fermi Mapping</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A stable periodic orbit in a Hamiltonian system becomes unstable as a parameter
              decreases. Where do the nearby trajectories go? Do they escape, or can something hold
              them nearby?
            </p>
          </div>
          <p>
            In a Hamiltonian system, bifurcations of fixed points follow different rules than in
            dissipative systems. An area-preserving map cannot shrink a patch of phase space, so it
            has no attractors. A stable fixed point is instead ringed by KAM tori: closed invariant
            curves that survive the nonlinearity and act as walls in phase space, trapping nearby
            orbits inside. When a fixed point loses stability, new stable fixed points of higher
            period appear nearby, each ringed by its own set of these walls.
          </p>
          <p>
            The Fermi map models a particle bouncing between a fixed wall and an oscillating wall.
            Each bounce off the moving wall speeds the particle up or slows it down, depending on
            the wall's phase at impact. Track the particle by its scaled speed {`$u$`} and the
            wall's phase {`$\\psi$`} at each bounce. One control parameter {`$M$`} sets how strong
            the speed kicks are. The map has a period-1 fixed point: a steady bounce that repeats
            the same speed and phase forever.
          </p>
          <p>
            As {`$M$`} changes, that steady bounce can lose stability. When it does, a pair of
            period-2 elliptic (stable) fixed points appears nearby. Each is a two-bounce cycle, and
            each is ringed by its own island of closed orbits. Push {`$M$`} further and these
            period-2 points lose stability in turn, spawning period-4 cycles, then period-8, a
            cascade {`$2 \\to 4 \\to 8 \\to 16 \\to \\cdots$`} of the same period-doubling kind you
            just met. The logistic-map topic measures how fast this cascade runs.
          </p>
          <h3>The Averaged Hamiltonian and Island Structure</h3>
          <p>
            Zoom in on one island. Let {`$\\Delta\\hat{u}$`} be the small drift in speed away from
            the period-1 fixed-point speed {`$u_0$`}, and let {`$\\hat{\\phi}$`} be the phase
            measured relative to the cycle. The particle bounces fast, but the island it sits in
            drifts slowly. Average over the fast bounces and the slow drift follows one Hamiltonian:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\Delta\\bar{H} = -\\frac{2\\pi M}{u_0^2}\\,\\frac{(\\Delta\\hat{u})^2}{2} + \\cos\\hat{\\phi} = C$$`}</span>
          </div>
          <p>
            This is exactly a pendulum Hamiltonian in the {`$(\\hat{\\phi}, \\Delta\\hat{u})$`}{' '}
            plane: a speed-squared term plays the role of kinetic energy, and the{' '}
            {`$\\cos\\hat{\\phi}$`} term plays the role of gravity. The constant {`$C$`} labels each
            orbit. Its structure is:
          </p>
          <ul className="lrn-list">
            <li>
              Elliptic (stable) fixed point at {`$(\\hat{\\phi}, \\Delta\\hat{u}) = (0, 0)$`}.
            </li>
            <li>
              Hyperbolic (unstable) fixed point at {`$(\\pi, 0)$`}, where the separatrix passes.
            </li>
            <li>
              Separatrix at {`$C = -1$`} (the value at the hyperbolic point). Inside (
              {`$-1 < C < 1$`}): encircling island orbits. Outside ({`$C < -1$`}): passing orbits.
            </li>
          </ul>
          <div>
            <BifFermiIsland />
          </div>
          <p>
            The solid dot at the origin is the elliptic (stable) fixed point ({`$C = 1$`}). The
            crossed rings at {`$\\hat{\\phi} = \\pm\\pi$`} are the hyperbolic (unstable) fixed
            points. The bold curve through them is the separatrix ({`$C = -1$`}). The closed loops
            inside are libration (island) orbits. The dashed open curves above and below are passing
            orbits ({`$C < -1$`}) that sweep across all phases instead of circling the island.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Regular (island) motion {`$-1 < C < 1$`}</span>
              <p>
                Trajectories circulate around the elliptic fixed point in closed loops. The motion
                is quasiperiodic: the orbit returns close to its starting point on each cycle. These
                are the Hamiltonian analogs of stable spirals.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Passing (stochastic) motion {`$C < -1$`}</span>
              <p>
                Trajectories pass over the hyperbolic fixed point and do not encircle the island.
                Outside the KAM surface these mix with the stochastic sea and behave chaotically.
                The separatrix is the boundary between these two regimes.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the averaged Hamiltonian {`$\\Delta\\bar{H}$`} look like a pendulum equation,
              even though the original system is a particle bouncing off walls?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The averaging removes fast-oscillating terms and keeps only the slowly varying
                resonant interaction. The result is a {`$\\cos\\hat{\\phi}$`} potential plus a
                kinetic-energy-like term in {`$\\Delta\\hat{u}$`}: the standard shape of a nonlinear
                resonance. The same shape turns up near any resonance in a Hamiltonian system, so
                the pendulum analogy is not a coincidence. It is the geometry every resonance island
                shares.
              </p>
            </details>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `What is the normal form of the saddle-node bifurcation, and for which values of $r$ do fixed points exist?`,
        a: `The normal form is $\\dot{x} = r + x^2$. Fixed points $x^* = \\pm\\sqrt{-r}$ exist only for $r \\leq 0$. At $r = 0$ they collide and annihilate. For $r > 0$ there are no fixed points.`
      },
      {
        q: `How do you determine whether a fixed point $x^*$ of $\\dot{x} = f(x)$ is stable?`,
        a: `Compute $f'(x^*)$. If $f'(x^*) < 0$ the fixed point is stable. If $f'(x^*) > 0$ it is unstable. The sign controls whether a small perturbation $\\eta$ grows or shrinks, since $\\dot{\\eta} \\approx f'(x^*)\\eta$.`
      },
      {
        q: `In the transcritical bifurcation $\\dot{x} = rx - x^2$, what happens to the fixed points at $r = 0$?`,
        a: `Both fixed points $x^* = 0$ and $x^* = r$ exist for all $r$. At $r = 0$ they coincide at the origin and exchange stability. The origin goes from stable (for $r<0$) to unstable (for $r>0$), while $x^* = r$ goes from unstable to stable. No fixed point is created or destroyed.`
      },
      {
        q: `A neuron has a stable resting state at low applied current. Above a threshold current the resting state suddenly vanishes. Which bifurcation type describes this onset, and why?`,
        a: `This is a saddle-node bifurcation. The stable resting state and an unstable threshold state collide at the critical current and annihilate. Above threshold there is no fixed point, so the neuron must spike. The transcritical and pitchfork would not apply. Both of those keep the fixed point alive after the bifurcation.`
      },
      {
        q: `Write the normal form of the supercritical pitchfork and identify all fixed points with their stability for $r > 0$.`,
        a: `Normal form: $\\dot{x} = rx - x^3$. For $r > 0$: $x^* = 0$ is unstable ($f'(0) = r > 0$), and $x^* = \\pm\\sqrt{r}$ are both stable ($f'(\\pm\\sqrt{r}) = -2r < 0$). One stable state splits into two as the symmetry breaks.`
      },
      {
        q: `A thin elastic beam is compressed along its length. Below a critical load it is straight (stable). Above the critical load it snaps to one of two bent positions. Which bifurcation type applies?`,
        a: `This is the supercritical pitchfork. The system has a left-right symmetry, so the normal form must be odd: $\\dot{x} = rx - x^3$. Below the critical load the straight state is stable. Above it the straight state becomes unstable. Two new stable states, left and right deflection, appear continuously from zero amplitude.`
      },
      {
        q: `Describe what happens in a supercritical Hopf bifurcation as $\\mu$ increases through zero.`,
        a: `For $\\mu < 0$ the fixed point is a stable spiral: trajectories wind in. At $\\mu = 0$ the eigenvalue pair $\\mu \\pm i\\omega$ is purely imaginary. For $\\mu > 0$ the fixed point becomes an unstable spiral and a stable limit cycle of radius $\\sqrt{\\mu}$ appears. The amplitude of oscillation grows continuously from zero at the bifurcation point.`
      },
      {
        q: `A chemical reaction runs at a steady concentration at low temperature. Above a critical temperature the concentration begins to oscillate. Which bifurcation type is this, and what is the amplitude of oscillation just above the threshold?`,
        a: `This is a supercritical Hopf bifurcation. Just above the critical temperature $\\mu > 0$ and the limit-cycle radius is $r^* = \\sqrt{\\mu}$. The amplitude grows continuously from zero, so the oscillations start small and grow as temperature increases further beyond the threshold.`
      },
      {
        q: `What are the minimum requirements for a dynamical system to exhibit chaos?`,
        a: `The system must be nonlinear, and it must have at least three first-order variables (or equivalently, a non-autonomous second-order system). A two-variable autonomous system can have fixed points and limit cycles but not chaos. The driven pendulum meets both requirements: it has three variables ($\\phi, \\theta, \\omega$) and the $\\sin\\theta$ term is nonlinear.`
      },
      {
        q: `Write the three first-order ODEs for the driven, damped pendulum and identify which term produces nonlinearity.`,
        a: `$\\dot{\\phi} = \\omega_D$, $\\dot{\\theta} = \\omega$, $\\dot{\\omega} = -\\frac{1}{q}\\omega - \\sin\\theta + g\\cos\\phi$. The $\\sin\\theta$ term in the third equation is nonlinear. It makes the system eligible for chaotic behavior for appropriate values of $q$, $g$, and $\\omega_D$.`
      },
      {
        q: `Each step of a period-doubling cascade is a bifurcation. Of what kind of orbit, and what bifurcation type?`,
        a: `Each step is a bifurcation of the current periodic orbit. A stable orbit of period $k$ loses stability, and a stable orbit of period $2k$ is born around it. This is a pitchfork-type bifurcation of the period-$k$ cycle: one cycle splits into a doubled one as the control parameter passes the threshold.`
      },
      {
        q: `In the Fermi mapping a period-1 fixed point can be unstable yet still trap nearby orbits. How does that happen?`,
        a: `The fixed point loses stability when an eigenvalue of the linearized map drops below $-1$, so a nearby orbit flips side to side and stretches away. Even so, a ring of unbroken KAM curves can still surround it. Those curves wall it off from the chaotic stochastic sea outside, so nearby orbits stay close instead of escaping.`
      },
      {
        q: `When the period-1 fixed point of an area-preserving map loses stability, what appears nearby, and how does this differ from a dissipative bifurcation?`,
        a: `A pair of period-2 elliptic (stable) fixed points appears nearby, each ringed by its own island of closed orbits. There is no attractor, since the map preserves area. A dissipative bifurcation instead sends trajectories to a basin of attraction. Here the new stable points trap nearby orbits inside KAM islands, not basins.`
      },
      {
        q: `Write the averaged Hamiltonian for the Fermi-map island and state the conditions for the elliptic and hyperbolic fixed points.`,
        a: `$\\Delta\\bar{H} = -\\frac{2\\pi M}{u_0^2}\\frac{(\\Delta\\hat{u})^2}{2} + \\cos\\hat{\\phi} = C$. The elliptic (stable) fixed point is at $(\\hat{\\phi}, \\Delta\\hat{u}) = (0, 0)$. The hyperbolic (unstable) fixed point is at $(\\pi, 0)$, where $C = -1$. The separatrix is the level set passing through it, so the separatrix is at $C = -1$ (the elliptic centre is at $C = +1$).`
      },
      {
        q: `Compare island (encircling) orbits and passing orbits in the Fermi-map averaged Hamiltonian picture.`,
        a: `The elliptic centre sits at $C = +1$ (the maximum). Island orbits have $-1 < C < 1$: they encircle the elliptic fixed point in closed loops, like a pendulum swinging back and forth below the separatrix. Passing orbits have $C < -1$: they do not encircle the island, like a pendulum with enough energy to swing over the top. The separatrix at $C = -1$ passes through the hyperbolic fixed point and separates the two regimes.`
      },
      {
        q: `A student says the transcritical and saddle-node bifurcations both involve two fixed points colliding at a critical parameter value. What is the key difference in the outcome?`,
        a: `In the saddle-node the two fixed points annihilate: above the bifurcation value neither exists. In the transcritical they exchange stability: both fixed points persist on both sides of the bifurcation. The collision in the transcritical is a crossing, not a destruction. The saddle-node is an irreversible creation or annihilation; the transcritical is a reversible swap.`
      },
      {
        q: `Explain why the subcritical pitchfork produces hysteresis but the supercritical pitchfork does not.`,
        a: `In the supercritical case the new stable branches $x^* = \\pm\\sqrt{r}$ grow continuously from zero at $r = 0$, so forward and backward paths follow the same curve. In the subcritical case the origin loses stability at $r = 0$ and the trajectory jumps to a far attractor. That attractor survives until a different, often negative, $r$ value. So the return path follows a different branch. This gap between the up-path and down-path is hysteresis.`
      },
      {
        q: `You observe a real oscillator. Its output frequency doubles as you raise a control parameter: 1 Hz, then 2 Hz, then 4 Hz, then irregular behavior. What sequence of bifurcations is this, and what is the irregular behavior called?`,
        a: `This is the period-doubling cascade. Each doubling is a bifurcation: a stable periodic orbit loses stability, and an orbit of twice the period is born. The irregular behavior at the end is deterministic chaos. The shrinking ratio of parameter gaps between doublings approaches the Feigenbaum constant, about 4.669, which the logistic-map topic studies in full.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Bifurcations',
      sections: [
        <>
          <h2>Linear Stability Summary</h2>
          <p>
            For {`$\\dot{x} = f(x)$`}, a fixed point {`$x^*$`} satisfies {`$f(x^*) = 0$`}. A
            perturbation {`$\\eta = x - x^*$`} obeys {`$\\dot{\\eta} \\approx f'(x^*)\\eta$`}.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Stable:</strong> {`$f'(x^*) < 0$`}
            </li>
            <li>
              <strong>Unstable:</strong> {`$f'(x^*) > 0$`}
            </li>
            <li>
              <strong>Marginal (bifurcation):</strong> {`$f'(x^*) = 0$`}
            </li>
          </ul>

          <h2>Normal Forms</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Saddle-Node</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\dot{x} = r + x^2$`}. Fixed points {`$x^* = \\pm\\sqrt{-r}$`} for {`$r < 0$`}
                only. Lower branch stable, upper unstable. Points collide and vanish at {`$r=0$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Transcritical</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\dot{x} = rx - x^2$`}. Fixed points {`$x^*=0$`} and {`$x^*=r$`} for all {`$r$`}.
                Exchange stability at {`$r=0$`}. Neither is created nor destroyed.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Supercritical Pitchfork</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\dot{x} = rx - x^3$`}. For {`$r > 0$`}: {`$x^* = 0$`} unstable,{' '}
                {`$x^* = \\pm\\sqrt{r}$`} stable. Smooth symmetry-breaking. No hysteresis.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Subcritical Pitchfork</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\dot{x} = rx + x^3$`} (plus {`$-x^5$`} stabilizer). Branches at {`$r < 0$`} are
                unstable. Origin loses stability at {`$r=0$`} with no nearby stable state.
                Hysteresis.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Supercritical Hopf</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\dot{r} = \\mu r - r^3$`}, {`$\\dot{\\theta} = \\omega + br^2$`}. For{' '}
                {`$\\mu > 0$`}: stable limit cycle of radius {`$\\sqrt{\\mu}$`}. Onset of
                oscillations from a steady state. Amplitude grows continuously from zero.
              </p>
            </div>
          </div>

          <h2>Chaos Requirements</h2>
          <p>
            Nonlinear system with at least three first-order variables. The driven pendulum{' '}
            {`$\\ddot{\\theta} + \\frac{1}{q}\\dot{\\theta} + \\sin\\theta = g\\cos(\\omega_D t)$`}
            meets both criteria.
          </p>

          <h2>Fermi-Map Island Structure</h2>
          <ul className="lrn-list">
            <li>
              Area-preserving map: no attractors. Stable fixed points are ringed by KAM tori, not
              basins.
            </li>
            <li>
              Period-1 fixed point (steady bounce) at speed {`$u_0$`}, phase {`$\\psi_0 = 0$`}. Lose
              stability and a pair of period-2 elliptic points appears, each in its own island.
            </li>
            <li>
              Averaged Hamiltonian:{' '}
              {`$\\Delta\\bar{H} = -\\frac{2\\pi M}{u_0^2}\\frac{(\\Delta\\hat{u})^2}{2} + \\cos\\hat{\\phi} = C$`}
            </li>
            <li>
              Elliptic centre at {`$(0,0)$`} ({`$C = +1$`}, the maximum); hyperbolic point at{' '}
              {`$(\\pi, 0)$`} ({`$C = -1$`}); separatrix {`$C = -1$`}; island {`$-1 < C < 1$`};
              passing {`$C < -1$`}
            </li>
          </ul>
        </>
      ]
    },
    customCss: null
  }
  return <LearningTemplate config={config} />
}
