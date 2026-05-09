import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  EffPotV,
  ConicOrbits,
  EllipseGeom,
  TwoBodyOrbit,
  HohmannTransfer,
  KeplerEA2,
  OrbitDesigner
} from '../../../../../components/viz/physics-viz/modules'

// Learning sections

const buildLearningSections = () => [
  // Section 1: Central Force Motion (K&K)
  <>
    <h2>Central Force Motion: From Two Bodies to One</h2>
    <p>
      A central force is a pull or push along the straight line between two objects. Its strength
      depends only on how far apart they are, not on the direction. Gravity between the Sun and a
      planet is the cleanest example. The electric pull between a proton and an electron works the
      same way.
    </p>
    <p>
      <strong>When to use this:</strong> Two objects, one force acting along the line between them,
      strength set by their separation alone.
    </p>
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        The reduction works for two bodies, not three. Two bodies have only one separation vector
        between them, {`$\\vec{r} = \\vec{r}_1 - \\vec{r}_2$`}. You can subtract their two equations
        of motion and get a single equation for that one vector. Three bodies have three separation
        vectors that all push on each other. No clean subtraction shrinks the problem to one
        equation.
      </p>
    </div>
    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        Two stars sit alone in empty space, pulled together only by their own gravity. What happens
        to their balance point (the center of mass) over time?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          It drifts in a straight line at a constant speed forever. The two pulls are equal and
          opposite, so they cancel for the system as a whole. Nothing pushes the balance point.
        </p>
      </details>
    </div>
    <h3>The One-Body Reduction</h3>
    <p>
      Two bodies have masses {`$m_1$`} and {`$m_2$`}. They pull on each other with a force of size{' '}
      {`$f(r)$`} along the line between them. The vector {`$\\hat{r}$`} is the unit vector pointing
      from body 2 to body 1. The separation between them is
    </p>
    <div className="lrn-eq">{`$$\\vec{r} = \\vec{r}_1 - \\vec{r}_2$$`}</div>
    <p>
      Newton's third law (every action has an equal and opposite reaction) gives the two coupled
      equations
    </p>
    <div className="lrn-eq">{`$$m_1 \\ddot{\\vec{r}}_1 = f(r) \\hat{r}, \\qquad m_2 \\ddot{\\vec{r}}_2 = -f(r) \\hat{r}$$`}</div>
    <p>
      Add them. The right sides cancel because they are equal in size and opposite in direction. The
      sum of the left sides is the total mass times the acceleration of the center of mass{' '}
      {`$\\vec{R}$`}, the mass-weighted average position. So
    </p>
    <div className="lrn-eq">{`$$\\ddot{\\vec{R}} = 0, \\qquad \\vec{R} = \\vec{R}_0 + \\vec{V} t$$`}</div>
    <p>
      The center of mass moves in a straight line at constant speed. Work in its rest frame from now
      on, since this kills off three of the six unknowns.
    </p>
    <p>
      Now subtract the equations instead of adding them. Divide the first by {`$m_1$`} and the
      second by {`$m_2$`}, then take the difference:
    </p>
    <div className="lrn-eq">{`$$\\ddot{\\vec{r}}_1 - \\ddot{\\vec{r}}_2 = \\left(\\frac{1}{m_1} + \\frac{1}{m_2}\\right) f(r) \\hat{r}$$`}</div>
    <p>
      The left side is {`$\\ddot{\\vec{r}}$`}. The bracket on the right is{' '}
      {`$\\frac{m_1 + m_2}{m_1 m_2}$`}. Take that to the other side and you get
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$\\mu \\ddot{\\vec{r}} = f(r) \\hat{r}, \\qquad \\mu = \\frac{m_1 m_2}{m_1 + m_2}$$`}</div>
    <p>
      The combination {`$\\mu$`} is called the <strong>reduced mass</strong>. The relative
      separation now obeys a single equation that looks like one particle of mass {`$\\mu$`} moving
      in the same central force, with a fixed center at the origin. The two-body problem has become
      a one-body problem.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>
        Why does {`$\\mu$`} appear instead of {`$m_1$`} or {`$m_2$`}?
      </p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          Both bodies accelerate, not just one. Body 1 picks up speed at the rate{' '}
          {`$\\frac{f}{m_1}$`} and body 2 at the rate {`$\\frac{f}{m_2}$`} in the opposite
          direction. Their relative acceleration is the sum,{' '}
          {`$f \\left(\\frac{1}{m_1} + \\frac{1}{m_2}\\right)$`}. Inverting that single bracket
          gives {`$\\mu$`}. When one mass is huge, {`$\\mu$`} reduces to the smaller mass, which
          matches the intuition that the big body barely moves.
        </p>
      </details>
    </div>
    <p>
      Once you know {`$\\vec{R}$`} and {`$\\vec{r}$`}, you can recover both body positions:
    </p>
    <div className="lrn-eq">{`$$\\vec{r}_1 = \\vec{R} + \\frac{m_2}{m_1 + m_2} \\vec{r}, \\qquad \\vec{r}_2 = \\vec{R} - \\frac{m_1}{m_1 + m_2} \\vec{r}$$`}</div>
    <TwoBodyOrbit />
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Two-body problem</span>
        <p>Collapses to a one-body equation through the reduced mass. Fully solvable.</p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Three-body problem</span>
        <p>No general formula exists. Most starting conditions lead to chaotic motion.</p>
      </div>
    </div>
  </>,

  // Section 2: Conservation Laws (K&K)
  <>
    <h2>Conservation Laws and Energy Diagrams in Central Forces</h2>
    <p>
      The reduced one-body problem has two quantities that stay fixed forever:{' '}
      <strong>angular momentum</strong> (a measure of how fast the body sweeps around the center)
      and <strong>energy</strong> (the sum of motion energy and stored energy). These two anchors
      shrink the motion down to a single equation in the radius.
    </p>
    <p>
      <strong>When to use this:</strong> Read off whether an orbit is closed, escapes to infinity,
      or sits at a fixed radius without solving the trajectory in detail.
    </p>
    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        Take any orbit under a central force. Will the body wander all over three-dimensional space,
        or will it stay in some flat region?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          The orbit stays inside one flat plane forever. Angular momentum is a fixed direction in
          space, and the body's position is always at right angles to it.
        </p>
      </details>
    </div>
    <h3>Motion Stays in a Plane</h3>
    <p>
      Angular momentum is the vector {`$\\vec{L} = \\vec{r} \\times \\mu \\vec{v}$`}, where{' '}
      {`$\\times$`} is the cross product (a vector at right angles to both inputs). Take its time
      derivative. The result is the torque {`$\\vec{r} \\times f(r) \\hat{r}$`}. The cross product
      of two parallel vectors is zero, and {`$\\vec{r}$`} and {`$\\hat{r}$`} point the same way. So
      the torque is zero and {`$\\vec{L}$`} stays fixed. Both {`$\\vec{r}$`} and {`$\\vec{v}$`}
      always sit at right angles to {`$\\vec{L}$`}, which means they live in the single plane
      perpendicular to that fixed vector.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>Why does {`$\\vec{L}$`} being constant force planar motion?</p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          {`$\\vec{r}$`} must always be perpendicular to fixed {`$\\vec{L}$`}. The set of all such{' '}
          {`$\\vec{r}$`} is a plane through the origin.
        </p>
      </details>
    </div>
    <p>
      Switch to polar coordinates {`$(r, \\theta)$`} inside that plane: {`$r$`} is the distance to
      the center, {`$\\theta$`} is the angle measured from a reference line. Working out{' '}
      {`$\\mu \\ddot{\\vec{r}}$`} in these coordinates splits Newton's equation into a radial part
      and an angular part:
    </p>
    <div className="lrn-eq">{`$$\\mu(\\ddot{r} - r \\dot\\theta^2) = f(r), \\qquad \\mu(r \\ddot\\theta + 2 \\dot{r} \\dot\\theta) = 0$$`}</div>
    <p>
      The angular equation can be rewritten as {`$\\frac{d}{dt}(\\mu r^2 \\dot\\theta) = 0$`}. So
      the quantity in the bracket stays fixed. That quantity is the angular momentum:
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$l = \\mu r^2 \\dot\\theta$$`}</div>
    <h3>Energy Equation</h3>
    <p>The total energy is the kinetic energy plus the potential energy:</p>
    <div className="lrn-eq">{`$$E = \\tfrac{1}{2} \\mu v^2 + U(r) = \\tfrac{1}{2} \\mu (\\dot{r}^2 + r^2 \\dot\\theta^2) + U(r)$$`}</div>
    <p>
      The potential energy {`$U(r)$`} is the work the central force does as you push the body inward
      from a chosen reference radius {`$r_a$`}. Negate the work integral to get
    </p>
    <div className="lrn-eq">{`$$U(r) - U(r_a) = -\\int_{r_a}^{r} f(r') \\, dr'$$`}</div>
    <p>
      Use the conservation law {`$l = \\mu r^2 \\dot\\theta$`} to replace {`$\\dot\\theta$`} by{' '}
      {`$\\frac{l}{\\mu r^2}$`}. The angular kinetic-energy piece becomes{' '}
      {`$\\frac{l^2}{2\\mu r^2}$`}, which depends only on {`$r$`}:
    </p>
    <div className="lrn-eq">{`$$E = \\tfrac{1}{2} \\mu \\dot{r}^2 + \\frac{l^2}{2 \\mu r^2} + U(r)$$`}</div>
    <p>
      Group the two {`$r$`}-only terms into the <strong>effective potential</strong>:
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$U_\\text{eff}(r) = \\frac{l^2}{2 \\mu r^2} + U(r)$$`}</div>
    <p>The energy now reads</p>
    <div className="lrn-eq">{`$$E = \\tfrac{1}{2} \\mu \\dot{r}^2 + U_\\text{eff}(r)$$`}</div>
    <p>
      This is identical in form to a single particle moving along a line under the potential{' '}
      {`$U_\\text{eff}$`}. The two-dimensional orbit becomes a one-dimensional radial problem.
    </p>
    <EffPotV />
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        The extra term {`$\\frac{l^2}{2\\mu r^2}$`} is called the{' '}
        <strong>centrifugal barrier</strong>. It is just the rotational piece of the kinetic energy,{' '}
        {`$\\tfrac{1}{2} \\mu r^2 \\dot\\theta^2$`}, rewritten in terms of the fixed angular
        momentum. It rises without bound as {`$r$`} shrinks, so it acts like a wall blocking the
        body from ever reaching the center whenever {`$l$`} is not zero.
      </p>
    </div>
    <h3>Formal Solution by Quadrature</h3>
    <p>
      <em>Quadrature</em> is an old word for "expressing the answer as an integral that can be
      evaluated." The energy equation lets you do exactly that. Rearrange it for the radial speed:
    </p>
    <div className="lrn-eq">{`$$\\frac{dr}{dt} = \\sqrt{\\frac{2}{\\mu}(E - U_\\text{eff})}$$`}</div>
    <p>
      Separate the variables and integrate to get the time spent moving from one radius to another:
    </p>
    <div className="lrn-eq">{`$$\\int \\frac{dr}{\\sqrt{\\frac{2}{\\mu}(E - U_\\text{eff})}} = t - t_0$$`}</div>
    <p>The angle obeys a similar integral, drawn from {`$\\dot\\theta = \\frac{l}{\\mu r^2}$`}:</p>
    <div className="lrn-eq">{`$$\\theta - \\theta_0 = \\int \\frac{l}{\\mu r^2} \\, dt$$`}</div>
    <p>
      Divide one by the other to remove the time variable. The result is a single equation for the
      shape of the orbit, the angle as a function of the radius:
    </p>
    <div className="lrn-eq">{`$$\\frac{d\\theta}{dr} = \\frac{\\frac{l}{\\mu r^2}}{\\sqrt{\\frac{2}{\\mu}(E - U_\\text{eff})}}$$`}</div>
    <h3>Noninteracting Particles Energy Diagram</h3>
    <p>
      First check the simplest case. Two particles drift past each other with no force between them,
      so {`$U(r) = 0$`}. The effective potential is just the centrifugal barrier{' '}
      {`$\\frac{l^2}{2\\mu r^2}$`}. As long as {`$l$`} is not zero, this curve falls from infinity
      at the center down to zero at large distances.
    </p>
    <p>
      The body's total energy {`$E$`} sits as a horizontal line on the diagram. The body can only
      live where {`$E \\geq U_\\text{eff}$`}, since the leftover kinetic part{' '}
      {`$\\tfrac{1}{2} \\mu \\dot{r}^2$`} cannot be negative. The line meets the curve at one
      crossing, the closest approach {`$r_\\text{min}$`}, set by{' '}
      {`$E = \\frac{l^2}{2\\mu r_\\text{min}^2}$`}. The particle slows down as it nears that
      crossing, stops moving inward, then heads back out to infinity.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>
        Why is {`$r = 0$`} unreachable for {`$l \\neq 0$`}?
      </p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          The centrifugal barrier blows up at {`$r = 0$`}. Reaching the origin would require
          infinite energy.
        </p>
      </details>
    </div>
    <h3>Capture of Comets by Jupiter</h3>
    <p>
      A comet falls toward the Sun on a parabolic path ({`$E = 0$`}, just barely unbound). On the
      way it passes near Jupiter. Working in the Sun's rest frame (the <em>heliocentric frame</em>,
      since Helios is Greek for Sun), Jupiter's gravity gives the comet a brief tug that adds or
      subtracts speed depending on the geometry. If the encounter slows the comet down enough, its
      total energy {`$E$`} flips from zero to negative. The comet is now stuck on a closed orbit
      around the Sun. Astronomers call this <strong>gravity capture</strong>.
    </p>
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        Total energy is built from the comet's speed in whichever frame you choose. Jupiter is
        moving in the Sun's frame, so during the brief close pass Jupiter's gravity changes the
        comet's velocity vector measured in that frame. After the encounter ends the comet sails
        away with a new speed and therefore a new value of {`$E$`}.
      </p>
    </div>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>
        Why does the comet's energy seem to change during the flyby, when energy is supposed to be
        conserved?
      </p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          Energy of a single body is only fixed in a frame where the forces on it are time-
          independent. In Jupiter's rest frame, that holds during the close approach: the comet's
          energy with respect to Jupiter is conserved. The Sun's frame is not Jupiter's frame, so
          the comet's energy with respect to the Sun shifts by an amount tied to Jupiter's speed
          through the Sun's frame. The full Sun + Jupiter + comet system does conserve total energy.
          Only the comet's individual piece is moving between accounts.
        </p>
      </details>
    </div>
    <h3>Perturbed Circular Orbit</h3>
    <p>
      A satellite sits in a circular orbit at radius {`$r_0$`}. Fire a short radial pulse from its
      thruster. Now the radius bobs slightly above and below {`$r_0$`}. To find that wobble, write{' '}
      {`$r = r_0 + \\delta r$`} with {`$\\delta r$`} small, drop everything quadratic in{' '}
      {`$\\delta r$`}, and what remains is a clean simple-harmonic-oscillator equation. (This step
      is called <em>linearization</em>: keep only the first-order piece of every term and discard
      the rest.) The wobble swings back and forth at angular frequency
    </p>
    <div className="lrn-eq">{`$$\\beta = \\sqrt{\\frac{C}{m r_0^3}} = \\frac{l}{m r_0^2}$$`}</div>
    <p>
      The two forms agree because a circular orbit demands{' '}
      {`$l = m r_0^2 \\dot\\theta_0 = m \\sqrt{C r_0}$`}: substitute and you get the same answer
      either way. For inverse-square gravity, {`$\\beta$`} happens to match the orbit's own angular
      speed {`$\\dot\\theta_0$`}, so the radial wobble lines up with one full lap. The disturbed
      path closes after exactly one period: it is a small tilted ellipse around the original circle,
      not a slow rosette that drifts open.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>Why does the orbit close exactly for inverse-square gravity?</p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          The radial wobble and the angular motion happen to share the same frequency, so after one
          lap the body is back where it started. Other power-law forces give two unequal frequencies
          and the orbit never closes; it traces out a flower-like rosette pattern instead.
        </p>
      </details>
    </div>
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Tangential thrust</span>
        <p>Changes both energy and angular momentum. Reshapes the orbit dramatically.</p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Radial thrust</span>
        <p>Changes only the energy and leaves {`$l$`} alone. Just shifts the radial wobble.</p>
      </div>
    </div>
  </>,

  // Section 3: Planetary Orbits (K&K)
  <>
    <h2>Planetary Orbits: Conic Sections</h2>
    <p>
      Plug Newton's gravity into the central-force machinery. The force law is{' '}
      {`$f(r) = -\\frac{C}{r^2}$`}, with {`$C = G m_1 m_2$`} a positive constant set by the two
      masses and the gravitational constant {`$G$`}. The matching potential is{' '}
      {`$U(r) = -\\frac{C}{r}$`}, negative because the bodies attract. Feed this into the orbit-
      shape integral from the previous section and the curve that comes out is a{' '}
      <em>conic section</em>: the family of curves you get by slicing a cone with a flat plane
      (circle, ellipse, parabola, hyperbola).
    </p>
    <p>
      <strong>When to use this:</strong> Anything pulled by a {`$\\frac{1}{r^2}$`} attraction.
      Planets, moons, satellites, comets, even an electron bound to a proton if you ignore quantum
      effects.
    </p>
    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>An object has total energy of exactly zero. What shape does its orbit trace?</p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          A parabola. The eccentricity (a number that measures how stretched the curve is) equals 1.
          The body coasts away to infinity and arrives with zero speed.
        </p>
      </details>
    </div>
    <figure className="lrn-figure">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Newton%27s_cannonball.svg"
        alt="Newton's cannonball thought experiment showing trajectories from short range to orbit"
        loading="lazy"
      />
      <figcaption>
        Newton's cannonball, from his 1728 Treatise. Higher launch speeds curve into longer
        trajectories, eventually closing into orbit.{' '}
        <a
          href="https://commons.wikimedia.org/wiki/File:Newton%27s_cannonball.svg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </figcaption>
    </figure>
    <h3>The Orbit Equation</h3>
    <p>
      Substitute {`$U_\\text{eff} = -\\frac{C}{r} + \\frac{l^2}{2\\mu r^2}$`} into the shape
      integral {`$\\frac{d\\theta}{dr}$`} from the previous section and carry out the integral.
      After the dust settles you get
    </p>
    <div className="lrn-eq">{`$$r = \\frac{\\frac{l^2}{\\mu C}}{1 - \\sqrt{1 + \\frac{2 E l^2}{\\mu C^2}} \\, \\sin(\\theta - \\theta_0)}$$`}</div>
    <p>The two messy combinations on the right deserve names. Let</p>
    <div className="lrn-eq">{`$$r_0 = \\frac{l^2}{\\mu C}, \\qquad \\epsilon = \\sqrt{1 + \\frac{2 E l^2}{\\mu C^2}}$$`}</div>
    <p>
      The length {`$r_0$`} sets the size of the orbit. The number {`$\\epsilon$`} (the{' '}
      <strong>eccentricity</strong>) measures how far the orbit deviates from a perfect circle.
      Rotating the angle so that {`$\\theta_0 = -\\frac{\\pi}{2}$`} converts the sine into a cosine
      and gives the clean polar equation
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$r = \\frac{r_0}{1 - \\epsilon \\cos\\theta}$$`}</div>
    <p>
      This is the standard polar equation of a conic section with one focus sitting at the origin
      (the location of the central body). Multiplying through by the denominator and writing{' '}
      {`$x = r\\cos\\theta$`}, {`$y = r\\sin\\theta$`} converts it to the Cartesian form
    </p>
    <div className="lrn-eq">{`$$(1 - \\epsilon^2) x^2 - 2 r_0 \\epsilon x + y^2 = r_0^2$$`}</div>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>Why does the central body sit at a focus, not at the geometric center of the ellipse?</p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          The inverse-square force points exactly at the origin, which is the spot the algebra
          singles out. A focus is defined by a fixed distance relation to every point on the curve;
          a center is defined by symmetry. The polar equation{' '}
          {`$r = \\frac{r_0}{1 - \\epsilon\\cos\\theta}$`} measures distances from the origin, not
          from a midpoint, so the focus property pops out for free.
        </p>
      </details>
    </div>
    <h3>Classification by Eccentricity</h3>
    <p>The shape of the orbit depends on the value of {`$\\epsilon$`}, which depends on energy:</p>
    <ul className="lrn-list">
      <li>
        {`$\\epsilon = 0$`}: a perfect circle. The energy hits its minimum,{' '}
        {`$E = -\\frac{\\mu C^2}{2 l^2}$`}.
      </li>
      <li>
        {`$0 < \\epsilon < 1$`}: an ellipse, with {`$-\\frac{\\mu C^2}{2 l^2} < E < 0$`}. The body
        is trapped on a closed loop.
      </li>
      <li>
        {`$\\epsilon = 1$`}: a parabola, with {`$E = 0$`}. The body just barely escapes.
      </li>
      <li>
        {`$\\epsilon > 1$`}: a hyperbola, with {`$E > 0$`}. The body flies off to infinity with
        energy to spare.
      </li>
    </ul>
    <ConicOrbits />
    <OrbitDesigner />
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Bounded orbit</span>
        <p>{`$E < 0$`} gives an ellipse. The body never escapes.</p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Unbounded orbit</span>
        <p>{`$E \\geq 0$`} gives a parabola or hyperbola. The body reaches infinity.</p>
      </div>
    </div>
    <h3>Geometric Properties of the Ellipse</h3>
    <p>
      Plug {`$\\theta = 0$`} into the orbit equation to get the closest distance to the focus, the{' '}
      <strong>perihelion</strong> (or perigee, when the focus is the Earth):
    </p>
    <div className="lrn-eq">{`$$r_\\text{min} = \\frac{r_0}{1 + \\epsilon}$$`}</div>
    <p>
      Plug {`$\\theta = \\pi$`} to get the farthest distance, the <strong>aphelion</strong> (apogee
      around the Earth):
    </p>
    <div className="lrn-eq">{`$$r_\\text{max} = \\frac{r_0}{1 - \\epsilon}$$`}</div>
    <p>
      The full long-axis length, called the <em>major axis</em>, is the sum of the two:
    </p>
    <div className="lrn-eq">{`$$A = r_\\text{max} + r_\\text{min} = \\frac{2 r_0}{1 - \\epsilon^2} = \\frac{C}{-E}$$`}</div>
    <p>
      The half-lengths {`$a$`} (long axis) and {`$b$`} (short axis), called the semi-major and
      semi-minor axes, are
    </p>
    <div className="lrn-eq">{`$$a = \\frac{r_0}{1 - \\epsilon^2} = \\frac{C}{-2E}, \\qquad b = \\frac{r_0}{\\sqrt{1 - \\epsilon^2}} = \\frac{l}{\\sqrt{-2 \\mu E}}$$`}</div>
    <p>The distance from the geometric center of the ellipse to either focus is</p>
    <div className="lrn-eq">{`$$x_0 = \\frac{r_0 \\epsilon}{1 - \\epsilon^2}$$`}</div>
    <p>
      Solving the perihelion and aphelion equations together gives a clean way to read{' '}
      {`$\\epsilon$`} off measured extremes:
    </p>
    <div className="lrn-eq">{`$$\\epsilon = \\frac{r_\\text{max} - r_\\text{min}}{r_\\text{max} + r_\\text{min}}$$`}</div>
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        The major axis depends only on the energy: {`$A = \\frac{C}{-E}$`}. Two orbits with the same
        total energy have the same long-axis length, no matter how stretched or round they look.
        Angular momentum sets only the width (the short axis), not the length.
      </p>
    </div>
    <EllipseGeom />
    <h3>Geometric Proof That the Origin Is at a Focus</h3>
    <p>
      The pure geometric definition of an ellipse: pick two points {`$F$`} and {`$F'$`} (the foci),
      separated by a distance {`$2 x_0$`}. The ellipse is every point whose distances to the two
      foci sum to a fixed total {`$2a$`}:
    </p>
    <div className="lrn-eq">{`$$r + r' = 2 a$$`}</div>
    <p>
      Now show that the orbit equation derived from gravity matches this geometric definition. Set{' '}
      {`$F$`} at the origin. Measure {`$r$`} (distance to {`$F$`}) and {`$\\theta$`} (angle from the
      major axis) in polar coordinates. The other focus {`$F'$`} sits a distance {`$2 x_0$`} along
      the major axis. The law of cosines gives the distance to {`$F'$`}:
    </p>
    <div className="lrn-eq">{`$$r'^2 = r^2 + (2 x_0)^2 - 2 r (2 x_0) \\cos\\theta$$`}</div>
    <p>
      Replace {`$r'$`} by {`$2a - r$`} (the focus property) and expand both sides:
    </p>
    <div className="lrn-eq">{`$$(2a - r)^2 = r^2 + 4 x_0^2 - 4 r x_0 \\cos\\theta$$`}</div>
    <div className="lrn-eq">{`$$4 a^2 - 4 a r = 4 x_0^2 - 4 r x_0 \\cos\\theta$$`}</div>
    <p>Solve algebraically for {`$r$`}:</p>
    <div className="lrn-eq">{`$$r = \\frac{a^2 - x_0^2}{a - x_0 \\cos\\theta} = \\frac{a(1 - \\epsilon^2)}{1 - \\epsilon \\cos\\theta}$$`}</div>
    <p>
      where {`$\\epsilon = \\frac{x_0}{a}$`} is the eccentricity from the geometry side. The
      numerator is exactly the {`$r_0 = a(1 - \\epsilon^2)$`} from the physics side, so
    </p>
    <div className="lrn-eq">{`$$r = \\frac{r_0}{1 - \\epsilon \\cos\\theta}$$`}</div>
    <p>
      This is identical to the orbit equation from {`$f(r) = -\\frac{C}{r^2}$`}. The body's orbit is
      an ellipse, and the central force pulls toward one of its two foci. This is Kepler's first law
      of planetary motion, derived from gravity instead of observed.
    </p>
    <h3>Hyperbolic Orbits and Rutherford Scattering</h3>
    <p>
      When {`$\\epsilon > 1$`} the body has more than enough energy to escape and the orbit traces a
      hyperbola: an open curve that swings around the focus once and flies away to infinity. The
      same closest-approach formula {`$r_\\text{min} = \\frac{r_0}{1 + \\epsilon}$`} still works,
      and you can rewrite it in terms of the semi-major axis {`$a = \\frac{r_0}{\\epsilon^2 - 1}$`}{' '}
      as
    </p>
    <div className="lrn-eq">{`$$r_\\text{min} = a(\\epsilon - 1)$$`}</div>
    <p>
      A hyperbola has two straight-line <strong>asymptotes</strong>, the directions the orbit
      follows at large distances. They sit at the angles where the denominator of the polar equation
      hits zero, that is where {`$\\cos\\theta_a = \\frac{1}{\\epsilon}$`}:
    </p>
    <div className="lrn-eq">{`$$\\cos\\theta_a = \\frac{1}{\\epsilon}$$`}</div>
    <p>
      The angle {`$\\theta_a$`} is measured between the major axis and the incoming asymptote. The
      same setup describes a charged particle bouncing off a nucleus: the inverse-square force is
      now electric repulsion instead of gravitational attraction, but the geometry is identical.
    </p>
    <p>
      The incoming alpha particle (a helium nucleus, used by Rutherford in his 1909 experiment)
      moves toward the gold nucleus along one asymptote. After a single close pass it leaves along
      the other asymptote. The total bend in its path, called the <strong>scattering angle</strong>{' '}
      {`$\\Theta$`}, is the angle between the two asymptotes:
    </p>
    <div className="lrn-eq">{`$$\\Theta = \\pi - 2\\theta_a$$`}</div>
    <p>
      The geometry of the approach has one more important number: the{' '}
      <strong>impact parameter</strong> {`$b$`}, the sideways miss distance the particle would have
      if there were no force. Far from the nucleus the alpha moves at speed {`$v_\\infty$`}, so its
      energy and angular momentum are
    </p>
    <div className="lrn-eq">{`$$E = \\tfrac{1}{2} \\mu v_\\infty^2, \\qquad l = \\mu v_\\infty b$$`}</div>
    <p>
      Substitute these into {`$\\epsilon^2 = 1 + \\frac{2 E l^2}{\\mu C^2}$`} and the eccentricity
      becomes
    </p>
    <div className="lrn-eq">{`$$\\epsilon^2 = 1 + \\left(\\frac{\\mu v_\\infty^2 b}{C}\\right)^2$$`}</div>
    <p>
      Combine with {`$\\cos\\theta_a = \\frac{1}{\\epsilon}$`} and you get a clean rule connecting
      how closely you aim ({`$b$`}) and how sharply the particle bends ({`$\\Theta$`}). A small{' '}
      {`$b$`} (near head-on aim) gives a large {`$\\Theta$`} (sharp deflection). A large {`$b$`}
      (far flyby) gives a small {`$\\Theta$`} (gentle bend). Rutherford counted alpha particles
      bouncing back at large angles from a thin gold foil, fit this rule to the data, and concluded
      that all the positive charge of the atom is concentrated in a tiny dense nucleus.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>Why does a smaller impact parameter produce a larger scattering angle?</p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          A smaller {`$b$`} gives smaller {`$l$`}, which lowers {`$\\epsilon$`} toward 1. Lower{' '}
          {`$\\epsilon$`} means {`$\\cos\\theta_a$`} closer to 1, so {`$\\theta_a$`} closer to zero.
          Then {`$\\Theta = \\pi - 2\\theta_a$`} approaches {`$\\pi$`}, a near head-on bounce.
        </p>
      </details>
    </div>
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Energy diagram method</span>
        <p>Gives bound or unbound character quickly. No need for full orbit shape.</p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Direct orbit-equation solution</span>
        <p>Gives full {`$r(\\theta)$`} but takes more algebra.</p>
      </div>
    </div>
    <h3>Satellite Orbit Computations</h3>
    <p>
      A satellite circling the Earth has a closest point (the <strong>perigee</strong>, subscript{' '}
      {`$p$`}) and a farthest point (the <strong>apogee</strong>, subscript {`$a$`}). Measure either
      the radius and speed at one of these two points and the rest of the orbit follows from two
      simple equations. The energy at any radius is
    </p>
    <div className="lrn-eq">{`$$E = \\tfrac{1}{2} m v^2 - \\frac{C}{r}$$`}</div>
    <p>
      Angular momentum conservation links speed and radius at the two extremes (where the velocity
      is purely sideways):
    </p>
    <div className="lrn-eq">{`$$\\mu v_p r_p = \\mu v_a r_a$$`}</div>
    <p>The eccentricity follows directly from the two extreme radii.</p>
    <h3>Worked Numerical Case</h3>
    <p>
      Take a satellite of mass {`$m = 100$`} kg with perigee distance {`$r_p = 7\\times 10^6$`} m
      (about 600 km above Earth's surface) and perigee speed {`$v_p = 9\\times 10^3$`} m/s. For
      Earth, {`$C = GMm = 3.99\\times 10^{16}$`} (in SI units, kg·m³/s²).
    </p>
    <p>Energy at perigee:</p>
    <div className="lrn-eq">{`$$E = \\tfrac{1}{2}(100)(9000)^2 - \\frac{3.99\\times 10^{16}}{7\\times 10^6} \\approx 4.05\\times 10^9 - 5.70\\times 10^9 \\approx -1.65\\times 10^9 \\text{ J}$$`}</div>
    <p>The orbit is bound since {`$E < 0$`}.</p>
    <p>Semi-major axis from energy:</p>
    <div className="lrn-eq">{`$$a = \\frac{C}{-2E} \\approx \\frac{3.99\\times 10^{16}}{3.30\\times 10^9} \\approx 1.21\\times 10^7 \\text{ m}$$`}</div>
    <p>Apogee from {`$r_p + r_a = 2a$`}:</p>
    <div className="lrn-eq">{`$$r_a = 2a - r_p \\approx 2.42\\times 10^7 - 7\\times 10^6 \\approx 1.72\\times 10^7 \\text{ m}$$`}</div>
    <p>Apogee speed from angular momentum conservation {`$v_p r_p = v_a r_a$`}:</p>
    <div className="lrn-eq">{`$$v_a = \\frac{v_p r_p}{r_a} \\approx \\frac{(9000)(7\\times 10^6)}{1.72\\times 10^7} \\approx 3{,}663 \\text{ m/s}$$`}</div>
    <p>Eccentricity from extremes:</p>
    <div className="lrn-eq">{`$$\\epsilon = \\frac{r_a - r_p}{r_a + r_p} \\approx \\frac{1.02\\times 10^7}{2.42\\times 10^7} \\approx 0.42$$`}</div>
    <p>
      So this satellite traces a moderately stretched ellipse. The orbital period comes from
      Kepler's third law, {`$T^2 = \\frac{4\\pi^2 a^3}{GM}$`}, derived in the next section.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>
        Why does {`$v_a$`} come out smaller than {`$v_p$`}?
      </p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          Angular momentum {`$\\mu v r$`} stays constant, but {`$r_a > r_p$`}. So {`$v_a$`} must
          drop in the same ratio. The satellite moves slowest at apogee and fastest at perigee. This
          is Kepler's second law in numerical form.
        </p>
      </details>
    </div>
    <h3>Satellite Maneuvers and Hohmann Transfer</h3>
    <p>
      Burning fuel changes a satellite's speed by an amount given by the <em>rocket equation</em>:
    </p>
    <div className="lrn-eq">{`$$\\Delta v = -u \\ln\\frac{M_i}{M_i - \\Delta M}$$`}</div>
    <p>
      Here {`$u$`} is the speed at which the exhaust gas leaves the engine, {`$M_i$`} is the
      satellite's mass before the burn, and {`$\\Delta M$`} is the mass of fuel burned. The minus
      sign indicates that the rocket gains speed in the direction opposite to the exhaust.
    </p>
    <p>
      To move a satellite from one circular orbit to a higher one, the cheapest path is the
      <strong> Hohmann transfer</strong>: fire the engine briefly along the direction of motion
      while at the inner orbit (this stretches the path into a long ellipse with its far end at the
      target radius), coast along that ellipse for half a lap, then fire again along the direction
      of motion when you arrive at the outer point. The second burn rounds the orbit out into a
      circle at the new altitude.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>
        Why fire along the direction of motion (tangentially) and not straight outward (radially)?
      </p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          A tangential burn changes both energy and angular momentum, which together push the
          opposite point of the orbit outward to the target altitude. A radial burn changes only the
          energy and barely shifts the orbit's shape, so it wastes most of the fuel for almost no
          useful change.
        </p>
      </details>
    </div>
    <HohmannTransfer />
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Tangential thrust</span>
        <p>
          Changes both {`$E$`} and {`$l$`}. Raises apogee or perigee on the opposite side.
        </p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Radial thrust</span>
        <p>Changes only {`$E$`}. Less efficient for orbit transfer.</p>
      </div>
    </div>
  </>,

  // Section 4: Kepler's Three Laws (K&K)
  <>
    <h2>Kepler's Three Laws Derived</h2>
    <p>
      Johannes Kepler stared at decades of telescope data on planetary positions and pulled out
      three patterns: orbits are ellipses with the Sun at one focus, equal areas are swept in equal
      times, and the period squared scales with the size cubed. He had no idea why. Newton's
      inverse-square gravity makes all three patterns fall out as direct consequences. The work from
      the previous sections is enough to derive each law from scratch.
    </p>
    <p>
      <strong>When to use this:</strong> Comparing periods, sizes, or sweep rates of any orbits in
      the same gravitational system, without solving the full motion.
    </p>
    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        Mars sits about 1.52 times farther from the Sun than Earth (in semi-major-axis terms). How
        long is one Mars year, in Earth years?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          Kepler's third law says {`$T^2 \\propto A^3$`}. Take {`$A \\approx 1.52$`} astronomical
          units, then {`$\\frac{T_M}{T_E} \\approx 1.52^{\\tfrac{3}{2}} \\approx 1.88$`}. A Mars year is about
          1.88 Earth years. The actual value is 1.881.
        </p>
      </details>
    </div>
    <h3>First Law: Elliptical Orbits</h3>
    <p>
      Each planet traces an ellipse with the Sun parked at one focus. The previous section derived
      this directly: bound orbits ({`$E < 0$`}) under the inverse-square pull{' '}
      {`$f(r) = -\\frac{C}{r^2}$`} are ellipses, and the polar orbit equation places the central
      body at a focus.
    </p>
    <h3>Second Law: Equal Areas in Equal Times</h3>
    <p>
      Draw the line from the Sun to a planet at every instant. As the planet moves, this line sweeps
      out area. The rate at which it sweeps stays constant:
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$\\frac{dA}{dt} = \\tfrac{1}{2} r^2 \\dot\\theta = \\frac{l}{2\\mu}$$`}</div>
    <p>
      The middle expression is the area of a thin triangle of base {`$r d\\theta$`} and height{' '}
      {`$r$`}. The right expression uses {`$l = \\mu r^2 \\dot\\theta$`} from earlier. Since {`$l$`}{' '}
      stays constant in central-force motion, the area rate is constant. Equal time intervals
      therefore sweep out equal areas, no matter where on the orbit the planet sits.
    </p>
    <KeplerEA2 />
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        Area rate is exactly {`$\\frac{l}{2\\mu}$`} because {`$r^2 \\dot\\theta = \\frac{l}{\\mu}$`}
        from angular momentum conservation, and the geometric area of a thin triangle is{' '}
        {`$\\tfrac{1}{2} r^2 d\\theta$`}. Multiply and divide.
      </p>
    </div>
    <h3>Third Law: Period Squared Proportional to Major Axis Cubed</h3>
    <p>
      Over one full revolution, the swept area must equal the area of the whole ellipse,{' '}
      {`$\\pi a b$`}. Multiply the constant area rate by the period {`$T$`} to get this total:
    </p>
    <div className="lrn-eq">{`$$\\frac{l}{2\\mu} T = \\pi a b$$`}</div>
    <p>
      Square both sides and plug in the expressions for {`$a$`} and {`$b$`} derived from the
      orbit-equation, {`$a = \\frac{C}{-2E}$`} and {`$b = \\frac{l}{\\sqrt{-2\\mu E}}$`}:
    </p>
    <div className="lrn-eq">{`$$\\frac{l^2}{4\\mu^2} T^2 = \\pi^2 \\cdot \\frac{C}{-2E} \\cdot \\frac{l^2}{-2\\mu E} = \\frac{\\pi^2 C l^2}{4 \\mu E^2}$$`}</div>
    <p>
      The {`$\\frac{l^2}{4}$`} cancels. Solve for {`$T^2$`}, then use {`$A = 2a = \\frac{C}{-E}$`}{' '}
      to write the answer in terms of the major axis {`$A$`}:
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$T^2 = \\frac{\\pi^2 \\mu}{2 C} A^3$$`}</div>
    <p>
      For two gravitating bodies {`$C = G m_1 m_2$`} and {`$\\mu = \\frac{m_1 m_2}{m_1 + m_2}$`}.
      The ratio {`$\\frac{\\mu}{C} = \\frac{1}{G(m_1 + m_2)}$`}. Substituting gives the standard
      form
    </p>
    <div className="lrn-eq">{`$$T^2 = \\frac{\\pi^2}{2 (M + m) G} A^3$$`}</div>
    <p>
      This is Kepler's third law. The square of the period is proportional to the cube of the major
      axis, with a proportionality constant fixed by only the total mass of the two bodies.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>
        Why does only the sum {`$M + m$`} appear, and not {`$M$`} and {`$m$`} separately?
      </p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          The combination {`$\\frac{\\mu}{C}$`} is what enters the period:{' '}
          {`$\\frac{\\mu}{C} = \\frac{m_1 m_2}{(m_1 + m_2) \\cdot G m_1 m_2} = \\frac{1}{G(m_1 + m_2)}$`}
          . The product {`$m_1 m_2$`} cancels exactly, leaving only the sum.
        </p>
      </details>
    </div>
    <h3>Alternative Period Derivation</h3>
    <p>
      The third law can also be reached by integrating directly. Solve the energy equation for{' '}
      {`$dt$`}: {`$dt = \\frac{\\mu r \\, dr}{\\sqrt{2\\mu E r^2 + 2\\mu C r - l^2}}$`}. Integrate
      from perihelion {`$r_\\text{min}$`} to aphelion {`$r_\\text{max}$`} (half an orbit) and double
      the result for the full period. The integral works out to the same {`$T^2 \\propto A^3$`}{' '}
      form.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>Why does this radial integral give the same period as the area-sweep argument?</p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          Both methods use the same conservation laws ({`$E$`} and {`$l$`}) applied to the same
          orbit. They are alternative book-keeping schemes for adding up time intervals during one
          revolution. They must agree because the orbit period is a single physical quantity.
        </p>
      </details>
    </div>
    <div className="lrn-faded">
      <div className="lrn-faded-phase">
        <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
        <p>Carry out the period integration to recover Kepler's third law:</p>
        <ol className="lrn-list">
          <li>
            Set up{' '}
            {`$T = 2 \\int_{r_\\text{min}}^{r_\\text{max}} \\frac{\\mu r \\, dr}{\\sqrt{2\\mu E r^2 + 2\\mu C r - l^2}}$`}
            .
          </li>
          <li>Complete the square inside the radical to get a standard form.</li>
          <li>Substitute {`$r = a(1 - \\epsilon \\cos\\psi)$`} (eccentric anomaly).</li>
          <li>
            Integrate from {`$\\psi = 0$`} to {`$\\pi$`}; double for full period.
          </li>
          <li>
            Obtain {`$T = 2\\pi \\sqrt{\\frac{\\mu a^3}{C}}$`}, which squares to{' '}
            {`$T^2 = \\frac{\\pi^2 \\mu A^3}{2C}$`} after using {`$A = 2a$`}.
          </li>
        </ol>
      </div>
      <div className="lrn-faded-phase">
        <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
        <p>For an Earth satellite at {`$A = 2 \\times 10^7$`} m:</p>
        <ol className="lrn-list">
          <li>
            Use {`$T^2 = \\frac{4\\pi^2}{GM} \\left(\\frac{A}{2}\\right)^3$`} with{' '}
            {`$GM = 3.99 \\times 10^{14}$`}.
          </li>
          <li>Solve for {`$T$`} and verify against Kepler's third law form.</li>
        </ol>
      </div>
      <div className="lrn-faded-phase">
        <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
        <p>
          Show that for binary stars of equal mass {`$M$`}, the period satisfies{' '}
          {`$T^2 = \\frac{\\pi^2 A^3}{4 G M}$`}.
        </p>
      </div>
    </div>
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Kepler's empirical laws</span>
        <p>Three patterns Kepler pulled from telescope data, with no underlying explanation.</p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Newton's derivation</span>
        <p>
          The same three laws fall out as direct consequences of {`$\\frac{1}{r^2}$`} gravity and
          the reduced-mass equation.
        </p>
      </div>
    </div>
    <figure className="lrn-figure">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/Kepler_laws_diagram.svg"
        alt="Kepler's three laws diagram with two planets, equal areas, and ellipse foci"
        loading="lazy"
      />
      <figcaption>
        Kepler's laws of planetary motion. Sun at one focus. Equal sectors swept in equal times.
        Period grows with semi-major axis.{' '}
        <a
          href="https://commons.wikimedia.org/wiki/File:Kepler_laws_diagram.svg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </figcaption>
    </figure>
  </>,

  // Section 5: Planar Orbits, Axial Symmetry, and Radial Motion (Arnold)
  <>
    <h2>Orbits in Central Fields Are Planar</h2>

    <p>
      A short note on notation. The next three sections follow Arnold's{' '}
      <em>Mathematical Methods of Classical Mechanics</em>. He writes the angular momentum vector as{' '}
      {`$M$`} (instead of {`$\\vec{L}$`}), the cross product as {`$[a, b]$`} (instead of{' '}
      {`$a \\times b$`}), and the dot product as {`$(a, b)$`} (instead of {`$a \\cdot b$`}). The
      physics is unchanged; only the symbols are different.
    </p>

    <p>
      Angular momentum {`$M = [r, \\dot{r}]$`} is the cross product of position and velocity, so it
      sits at right angles to both. It stays fixed in time for any central force, as derived
      earlier. So the position vector {`$r$`} must always lie in the single fixed plane that is at
      right angles to {`$M$`}.
    </p>

    <div className="lrn-proof">
      <span className="lrn-proof-header">Formal Proof</span>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">1.</span>
        <div className="lrn-proof-step-content">
          Compute the dot product {`$(M, r) = ([r, \\dot{r}], r)$`}. This is a scalar triple product
          (the volume of the parallelepiped built from three vectors). Two of its three vectors are
          the same {`$r$`}, so the parallelepiped is flat and its volume is zero.
        </div>
      </div>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">2.</span>
        <div className="lrn-proof-step-content">
          So {`$r$`} is at right angles to the fixed vector {`$M$`} at every moment. The collection
          of every vector at right angles to a single fixed direction is a single plane through the
          origin. The orbit lives entirely on that plane.
        </div>
      </div>
      <div className="lrn-qed">Q.E.D.</div>
    </div>

    <div className="lrn-callout">
      <span className="lrn-callout-label">Note</span>
      <p>
        When {`$M = 0$`}, the orbit passes through the center of force. This is radial motion: the
        particle moves directly toward or away from the center along a straight line.
      </p>
    </div>

    <h3>Axial Symmetry and Conservation of {`$M_z$`}</h3>

    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        A satellite moves in the gravitational field of an oblate planet. The field is no longer
        central but it is still symmetric around the planet's spin axis. Which component of angular
        momentum should still be conserved?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          The component along the symmetry axis. Rotations around that axis still leave the field
          unchanged, so the projection of angular momentum onto the axis is constant. The other
          components can change.
        </p>
      </details>
    </div>

    <p>
      Central fields are a special case. The fact that orbits are flat shrinks a problem in three
      dimensions to the two-dimensional one already solved. A weaker but still useful symmetry
      survives in many real systems: a force field with <strong>axial symmetry</strong>, meaning it
      looks the same after any rotation around a fixed axis.
    </p>

    <div className="lrn-definition">
      <span className="lrn-definition-term">Axial Symmetry</span>
      <div className="lrn-definition-desc">
        <p>
          A vector field in three-space has axial symmetry if it is invariant under all rotations
          that fix some axis. Pick the axis as the {`$z$`} axis with unit vector {`$e_z$`}.
        </p>
        <p>
          In cylindrical coordinates {`$(r, \\phi, z)$`}, the potential takes the form{' '}
          {`$U = U(r, z)$`}: it cannot depend on the rotation angle {`$\\phi$`}.
        </p>
      </div>
    </div>

    <div className="lrn-definition">
      <span className="lrn-definition-term">Moment Relative to an Axis</span>
      <div className="lrn-definition-desc">
        <p>
          The moment of a vector {`$F$`} applied at point {`$r$`}, relative to the {`$z$`} axis, is
          the projection of the cross product onto the axis:
        </p>
        <p>{`$$M_z = (e_z, [r, F])$$`}</p>
        <p>
          {`$M_z$`} does not depend on which point along the {`$z$`} axis you call the origin.
          Shifting the origin along the axis adds a vector parallel to {`$e_z$`}, which drops out of
          the triple product.
        </p>
      </div>
    </div>

    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        For motion in a conservative field with axial symmetry around the {`$z$`} axis, the moment
        of velocity relative to the {`$z$`} axis is conserved. The reason: {`$r$`} and{' '}
        {`$\\ddot{r}$`} both lie in the half-plane through the {`$z$`} axis that contains the
        particle. So {`$[r, \\ddot{r}]$`} is perpendicular to {`$e_z$`}, and its projection onto the
        axis vanishes. Therefore {`$\\dot{M}_z = 0$`}.
      </p>
    </div>

    <div className="lrn-proof">
      <span className="lrn-proof-header">Conservation of {`$M_z$`} (Axial Symmetry)</span>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">1.</span>
        <div className="lrn-proof-step-content">
          Differentiate {`$M_z = (e_z, [r, \\dot{r}])$`} using the product rule:{' '}
          {`$$\\dot{M}_z = (e_z, [\\dot{r}, \\dot{r}]) + (e_z, [r, \\ddot{r}])$$`}
        </div>
      </div>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">2.</span>
        <div className="lrn-proof-step-content">
          The first term vanishes: {`$[\\dot{r}, \\dot{r}] = 0$`}.
        </div>
      </div>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">3.</span>
        <div className="lrn-proof-step-content">
          In an axially symmetric field, the force {`$F$`} lies in the plane spanned by {`$r$`} and{' '}
          {`$e_z$`}. So {`$[r, F]$`} is perpendicular to {`$e_z$`}, and {`$(e_z, [r, F]) = 0$`}.
        </div>
      </div>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">4.</span>
        <div className="lrn-proof-step-content">
          Therefore {`$\\dot{M}_z = 0$`} and {`$M_z$`} is constant along the trajectory.
        </div>
      </div>
      <div className="lrn-qed">Q.E.D.</div>
    </div>

    <div className="lrn-callout lrn-tip">
      <span className="lrn-callout-label">When to use</span>
      <p>
        Use {`$M_z$`} conservation any time the force field has rotational symmetry about a fixed
        axis. The full angular momentum vector is no longer constant, but its axial projection is.
        This handles cases where central symmetry breaks but axial symmetry survives: oblate
        planets, charged particles in a uniform magnetic field, the Lagrange top.
      </p>
    </div>

    <h3>Degenerate Case: {`$M = 0$`} (Radial Motion)</h3>
    <p>
      The planar-orbit argument needs {`$M$`} to point in some specific direction. If {`$M = 0$`}
      that direction is undefined, and the proof breaks down. This case has to be examined on its
      own.
    </p>
    <p>
      Setting {`$M = [r, \\dot{r}] = 0$`} forces position and velocity to be parallel. The particle
      moves only along the line that joins it to the center. Picture a straight up-and- down fall,
      with no sideways motion at all. This is called <strong>radial motion</strong>.
    </p>
    <p>
      Radial motion is a one-dimensional problem in the radial coordinate alone, governed by the
      bare potential {`$U(r)$`}. The centrifugal barrier {`$\\frac{M^2}{2r^2}$`} is absent because{' '}
      {`$M = 0$`}. Without a barrier, the particle can reach {`$r = 0$`} in a finite amount of time
      if {`$U(r)$`} stays finite at the center. A ball dropped straight down toward Earth is the
      everyday example.
    </p>

    <h3>Worked Example: Cosmonaut Leonov's Lens Cap</h3>
    <p>
      In 1965, on the first ever spacewalk, the cosmonaut Alexei Leonov threw his camera lens cap
      directly toward Earth at 10 m/s relative to his spacecraft. The intuition says the cap falls
      toward Earth and is lost. The actual answer is far stranger.
    </p>

    <div className="lrn-steps">
      <div className="lrn-step">
        <span className="lrn-step-title">Setup</span>
        <p className="lrn-step-content">
          Make the math cleaner by picking units. Set the radius of the spacecraft's circular orbit
          to 1, and rescale time so that one full orbit takes {`$2\\pi$`} units. In these units the
          unperturbed orbit is just {`$r_0 = 1$`} and {`$\\phi_0 = t$`}, and Newton's equation in
          the orbital plane is {`$\\ddot{r} = -\\frac{r}{r^3}$`}.
        </p>
      </div>
      <div className="lrn-step">
        <span className="lrn-step-title">Perturbation Ansatz</span>
        <p className="lrn-step-content">
          Look for the cap's path as a small wobble away from the spacecraft's circular orbit:{' '}
          {`$r = r_0 + r_1$`} and {`$\\phi = \\phi_0 + \\phi_1$`}, where {`$r_1$`} and {`$\\phi_1$`}{' '}
          are small corrections. Plug these into the equations of motion and keep only the terms
          that are first-order in the corrections; toss out everything quadratic or smaller.
        </p>
      </div>
      <div className="lrn-step">
        <span className="lrn-step-title">Variational Equations</span>
        <p className="lrn-step-content">
          The result is two coupled linear equations that describe how a nearby orbit drifts away
          from the reference orbit (these are called the <em>variational equations</em>):{' '}
          {`$$\\ddot{r}_1 = 3 r_1 + 2 \\dot{\\phi}_1, \\quad \\ddot{\\phi}_1 = -2 \\dot{r}_1$$`}
          The {`$3 r_1$`} comes from expanding {`$\\frac{1}{r^2}$`} as {`$1 - 2 r_1 + \\ldots$`}
          and adding a {`$+r$`} centrifugal term; the {`$2 \\dot\\phi_1$`} is a Coriolis-style
          coupling that shows up because the unperturbed orbit is itself rotating.
        </p>
      </div>
      <div className="lrn-step">
        <span className="lrn-step-title">Initial Conditions</span>
        <p className="lrn-step-content">
          The throw gave the cap 10 m/s toward Earth on top of the spacecraft's orbital speed of
          about 8 km/s. Convert the radial speed to the rescaled units by dividing the two:{' '}
          {`$\\dot{r}_1(0) = -\\frac{10}{8000} = -\\frac{1}{800}$`}. The cap starts at the
          spacecraft's position and along its motion, so{' '}
          {`$r_1(0) = \\phi_1(0) = \\dot{\\phi}_1(0) = 0$`}.
        </p>
      </div>
      <div className="lrn-step">
        <span className="lrn-step-title">Solve and Interpret</span>
        <p className="lrn-step-content">
          Solve the linear system. The general solution is a sinusoid in {`$r_1$`} plus a linear
          drift in {`$\\phi_1$`}. Plugging in the initial values gives, in physical units, a closed
          loop in the spacecraft's frame: an ellipse roughly 32 km long along the orbit and 16 km
          wide across it, centered about 16 km ahead of Leonov.
        </p>
      </div>
      <div className="lrn-step">
        <span className="lrn-step-title">The Surprise</span>
        <p className="lrn-step-content">
          In the rotating frame of the spacecraft, the cap traces this small ellipse once per
          orbital period. It drifts up to 30 km away, then loops back and arrives within tens of
          meters of the spacecraft after about 90 minutes (one full orbit). The cap does not fall to
          Earth at all.
        </p>
      </div>
    </div>

    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>
        Why does the lens cap come back to the spaceship after one orbital period instead of falling
        away to Earth?
      </p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          The throw barely changes the cap's orbit. Both objects keep nearly the same orbital
          period. Kepler's third law links period to semi-major axis, which barely changes. Same
          period means both return to the same relative configuration after one revolution. In the
          rotating frame, the cap traces a small ellipse exactly once per orbital period.
        </p>
      </details>
    </div>
  </>,

  // Section 6: N-Body Systems and Conservation Laws (Arnold)
  <>
    <h2>Motions of a System of {`$n$`} Points</h2>

    <p>
      Two-body central force motion is a stepping stone. Real systems have many particles: the
      planets and asteroids of the solar system, the molecules in a gas, the stars in a globular
      cluster. Most of the structure of these systems comes from three conservation laws that
      survive the jump from two bodies to many: total momentum, total angular momentum, and total
      energy. None of them needs the forces to be central.
    </p>

    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        Picture a swarm of particles with no forces from outside, only forces between themselves.
        Will the total momentum of the swarm change as time passes?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          The total stays fixed. Every internal force comes paired with an equal and opposite
          partner by Newton's third law, so the sum of all internal pulls is zero. With no outside
          push, total momentum is conserved. A rocket relies on this: throw exhaust backward and the
          rocket itself moves forward by exactly the matching amount.
        </p>
      </details>
    </div>

    <h3>Internal and External Forces</h3>
    <p>
      Split every force on a particle into two kinds, depending on whether the source is inside or
      outside the system you chose to study.
    </p>
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Internal Forces</span>
        <p>
          Forces between particles inside the system. Write {`$F_{ij}$`} for the force on particle{' '}
          {`$j$`} from particle {`$i$`}. Newton's third law fixes the partner force:{' '}
          {`$F_{ij} = -F_{ji}$`}.
        </p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">External Forces</span>
        <p>
          Forces from sources outside the system, written {`$F_i'$`} for the external force on
          particle {`$i$`}. These can change the total momentum and angular momentum.
        </p>
      </div>
    </div>

    <h3>Conservation of Momentum</h3>
    <p>The total momentum is the sum of each particle's mass times its velocity:</p>
    <div className="lrn-eq">{`$$P = \\sum m_i \\dot{r}_i$$`}</div>

    <div className="lrn-proof">
      <span className="lrn-proof-header">Momentum Conservation (Closed System)</span>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">1.</span>
        <div className="lrn-proof-step-content">{`$$\\frac{dP}{dt} = \\sum m_i \\ddot{r}_i = \\sum F_i = \\sum_{i,j} F_{ij} + \\sum F_i'$$`}</div>
      </div>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">2.</span>
        <div className="lrn-proof-step-content">
          By Newton's third law, {`$F_{ij} = -F_{ji}$`}, so internal forces cancel in pairs:{' '}
          {`$\\sum_{i,j} F_{ij} = 0$`}.
        </div>
      </div>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">3.</span>
        <div className="lrn-proof-step-content">With no external forces, {`$\\frac{dP}{dt} = 0$`}.</div>
      </div>
      <div className="lrn-qed">Q.E.D.</div>
    </div>

    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>
        Why do internal forces not change the total momentum? What specific property of Newton's
        third law makes this work?
      </p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          Every internal force {`$F_{ij}$`} has an equal and opposite reaction{' '}
          {`$F_{ji} = -F_{ij}$`}. When you sum all internal forces over all particles, every pair
          contributes {`$F_{ij} + F_{ji} = 0$`}. The total is exactly zero regardless of how large
          the individual forces are.
        </p>
      </details>
    </div>

    <h3>Center of Mass</h3>
    <p>
      The <strong>center of mass</strong> is the mass-weighted average of every particle's position.
      Differentiating it twice and using the previous result gives the equation of motion for the
      whole system as if it were a single point:
    </p>
    <div className="lrn-eq">
      {`$$r = \\frac{\\sum m_i r_i}{\\sum m_i}, \\quad \\left(\\sum m_i\\right)\\ddot{r} = \\frac{dP}{dt} = \\sum F_i'$$`}
    </div>
    <p>
      The center of mass behaves as if every gram of mass in the system were concentrated at that
      one point and only the external forces acted on it. This is why a tossed wrench, no matter how
      it spins, has its center tracing a clean parabola.
    </p>

    <h3>Angular Momentum (n-body)</h3>
    <p>
      The total angular momentum {`$M$`} is the sum of each particle's individual angular momentum,
      and its rate of change is the sum of only the external torques:
    </p>
    <div className="lrn-eq">
      {`$$M = \\sum [r_i, m_i \\dot{r}_i], \\quad \\frac{dM}{dt} = \\sum [r_i, F_i']$$`}
    </div>
    <p>
      Internal forces contribute zero net torque. Only forces from outside can spin up or slow down
      the total angular momentum of the system.
    </p>

    <div className="lrn-proof">
      <span className="lrn-proof-header">Internal Torques Cancel</span>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">1.</span>
        <div className="lrn-proof-step-content">
          For each pair {`$(i,j)$`}, Newton's third law says {`$F_{ij} = -F_{ji}$`}. For central
          forces (gravity, electrostatics) the force also acts along the straight line joining the
          two particles: {`$F_{ij}$`} is parallel to {`$(r_i - r_j)$`}.
        </div>
      </div>
      <div className="lrn-proof-step">
        <span className="lrn-proof-step-num">2.</span>
        <div className="lrn-proof-step-content">
          Adding the two torques from the pair and factoring:{' '}
          {`$$[r_i, F_{ij}] + [r_j, F_{ji}] = [(r_i - r_j), F_{ij}] = 0$$`}
          The cross product is zero because {`$F_{ij}$`} is parallel to {`$(r_i - r_j)$`}. Every
          pair contributes nothing, so the full internal sum is zero.
        </div>
      </div>
      <div className="lrn-qed">Q.E.D.</div>
    </div>

    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>
        Why does the cancellation need both Newton's third law and the central-force assumption?
      </p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          Newton's third law alone gives {`$F_{ij} + F_{ji} = 0$`}, which is enough to cancel the
          two momenta but not the two torques (each torque also has a position factor). Pulling out
          the common force from the pair leaves the position difference {`$(r_i - r_j)$`}
          dotted with the force. That second cross product is zero only when the force points along
          that line. Magnetic forces between moving charges break this assumption, and a purely
          magnetic system can in fact carry net internal torque, with the missing piece stored in
          the field itself.
        </p>
      </details>
    </div>

    <h3>Total Energy Conservation (n-body)</h3>
    <p>
      When all internal interactions come from a potential {`$U_{ij}$`} that depends only on the
      distance between particles {`$i$`} and {`$j$`}, and the external forces also come from a
      potential, the total energy is conserved:
    </p>
    <div className="lrn-eq">
      {`$$E = \\sum \\frac{m_i \\dot{r}_i^2}{2} + \\sum_{i>j} U_{ij} + \\sum_i U_i' = \\text{const}$$`}
    </div>
    <p>
      The first sum is the kinetic energy of every particle. The second sum is the stored energy in
      every pair (counted once each, since the {`$i > j$`} restriction avoids double-counting). The
      third sum is the stored energy from external sources.
    </p>
  </>,

  // Section 7: Method of Similarity and Dimensional Scaling (Arnold)
  <>
    <h2>Method of Similarity and Dimensional Scaling</h2>

    <p>
      Sometimes the answer to a hard question can be read off without ever solving the equation of
      motion. The trick is to ask how the equation behaves under <em>rescaling</em>: stretch every
      length by some factor, every time by some other factor, and check what factor of stretching
      keeps the equation looking the same. This pins down how key quantities (period, speed, energy)
      must depend on the size of the orbit.
    </p>

    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        Without solving any equations, how should the orbital period of a planet depend on the size
        of its orbit, given Newton's {`$\\frac{1}{r^2}$`} gravity?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          Gravity gives an acceleration of size {`$\\sim \\frac{1}{a^2}$`} at distance {`$a$`}. The
          orbital path is of length {`$\\sim a$`}. From {`$\\frac{v^2}{a} \\sim \\frac{1}{a^2}$`}{' '}
          the orbital speed must scale as {`$\\sqrt{\\frac{k}{a}}$`}. The period is path length over
          speed, so {`$T \\sim \\frac{a}{\\sqrt{\\frac{1}{a}}} = a^{\\tfrac{3}{2}}$`}. This is Kepler's third law
          without doing the integral.
        </p>
      </details>
    </div>

    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        Take the gravitational potential {`$U = -\\frac{k}{r}$`} and a solution {`$r(t)$`} of the
        equations of motion. Rescale by replacing {`$r$`} with {`$\\lambda r$`} and {`$t$`} with{' '}
        {`$\\tau t$`}. The kinetic side {`$\\ddot{r}$`} picks up a factor{' '}
        {`$\\frac{\\lambda}{\\tau^2}$`}; the gravitational acceleration {`$\\frac{k}{r^2}$`} picks
        up {`$\\frac{1}{\\lambda^2}$`}. The two factors must match, so{' '}
        {`$\\frac{\\lambda}{\\tau^2} = \\frac{1}{\\lambda^2}$`}, which forces{' '}
        {`$\\tau = \\lambda^{\\tfrac{3}{2}}$`}. Periods scale by exactly that, so {`$T \\propto a^{\\tfrac{3}{2}}$`}.
        The {`$\\tfrac{3}{2}$`} exponent is fixed by the {`$\\frac{1}{r^2}$`} force law alone; a{' '}
        {`$\\frac{1}{r^3}$`} force would give {`$T \\propto a^{2}$`} instead.
      </p>
    </div>

    <h3>Why the Three-Body Problem Has No Closed Solution</h3>
    <p>
      The same scaling logic explains why three gravitating bodies are so much harder than two. With
      three bodies, the potential energy splits into three separate pair terms (one for each pair of
      particles):
    </p>
    <div className="lrn-eq">
      {`$$U = -\\frac{m_1 m_2}{\\|x_1 - x_2\\|} - \\frac{m_2 m_3}{\\|x_2 - x_3\\|} - \\frac{m_3 m_1}{\\|x_3 - x_1\\|}$$`}
    </div>
    <p>
      Newtonian gravity has no genuine three-body force; everything happens through pair
      interactions. But the three pair distances cannot all be eliminated by changing coordinates,
      so unlike the two-body case there is no clean way to collapse the equations to one closed
      form. Most starting conditions then lead to chaotic orbits that resist any analytic
      description.
    </p>
  </>
]

// Practice cards

const practiceCards = [
  {
    q: `A satellite orbits Earth with $r_\\text{min} = 7000$ km and $r_\\text{max} = 9000$ km. Find the orbit eccentricity.`,
    a: `Use $\\epsilon = (r_\\text{max} - r_\\text{min})/(r_\\text{max} + r_\\text{min})$. Plug in: $\\epsilon = \\tfrac{2000}{16000} = 0.125$. The orbit is a mildly elongated ellipse.`
  },
  {
    q: `Why does conservation of angular momentum link $v_p$ and $v_a$ at perigee and apogee?`,
    a: `At perigee and apogee the velocity is purely tangential, since the radial velocity is zero at the turning points. So $|l| = \\mu v r$ at each extreme. Setting $\\mu v_p r_p = \\mu v_a r_a$ gives $v_a = \\frac{v_p r_p}{r_a}$. This single line replaces a full orbital integration when computing one speed from another.`
  },
  {
    q: `Two stars of masses $2 M_\\odot$ and $3 M_\\odot$ orbit their center of mass. What is the reduced mass?`,
    a: `The reduced mass is $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$. Plug in: $\\mu = \\frac{2 \\cdot 3}{(2+3) M_\\odot} = 1.2 M_\\odot$. This is the effective mass for the relative-motion equation.`
  },
  {
    q: `What do you predict happens to an orbit when total energy is exactly zero in an inverse-square attractive field?`,
    a: `The eccentricity $\\epsilon = \\sqrt{1 + \\frac{2El^2}{\\mu C^2}}$ becomes $1$ when $E = 0$. The orbit is a parabola. The body just barely escapes, reaching infinity with zero speed.`
  },
  {
    q: `A body of mass $m$ orbits a mass $M$ in a circular orbit at radius $r_0$. What is $E$ in terms of $G$, $M$, $m$, $r_0$?`,
    a: `For a circular orbit gravity equals centripetal force: $\\frac{GMm}{r_0^2} = \\frac{mv^2}{r_0}$, so $v^2 = \\frac{GM}{r_0}$. Total energy is $E = \\tfrac{1}{2} m v^2 - \\frac{GMm}{r_0} = -\\frac{GMm}{2r_0}$. Energy is negative because the orbit is bound.`
  },
  {
    q: `Why does central-force motion stay in a single plane?`,
    a: `The torque $\\vec{r} \\times f(r)\\hat{r}$ vanishes because the cross product of parallel vectors is zero. So $\\vec{L}$ is constant. Both $\\vec{r}$ and $\\vec{v}$ stay perpendicular to fixed $\\vec{L}$, which forces them to lie in a single plane.`
  },
  {
    q: `A satellite is in a circular orbit. Briefly fire a tangential rocket burn. What kind of new orbit results?`,
    a: `Tangential thrust changes both energy and angular momentum. The orbit becomes elliptical, not circular. The burn point becomes either perigee (if you sped up) or apogee (if you slowed down).`
  },
  {
    q: `Predict: What happens to a satellite if you fire a tangential burn at apogee that increases its speed?`,
    a: `Tangential thrust at apogee raises perigee on the opposite side. The orbit becomes more circular if $r_\\text{perigee}$ approaches $r_\\text{apogee}$. Continued burning lifts the entire orbit to a higher altitude.`
  },
  {
    q: `A comet on a parabolic orbit ($E = 0$) passes near Jupiter and emerges with $E < 0$. What happened?`,
    a: `Jupiter's gravity briefly altered the comet's velocity in the heliocentric frame. The encounter shifted total energy because the comet's speed in the Sun frame depends on Jupiter's relative motion. The comet became gravitationally captured by the Sun.`
  },
  {
    q: `Why can a planet capture a parabolic comet into a bound orbit?`,
    a: `The comet starts with $E = 0$ in the heliocentric frame. During the close encounter the planet's gravity changes the comet's velocity in this frame. After the planet passes, the new total energy $E = \\tfrac{1}{2}\\mu v^2 - \\frac{C}{r}$ can be negative if the planet pulled the comet against its motion. The comet now orbits the Sun in a bound ellipse.`
  },
  {
    q: `Predict: What kind of orbit results if eccentricity equals 2?`,
    a: `$\\epsilon > 1$ corresponds to a hyperbola. Total energy is positive. The body comes in from infinity, swings around the focus, and escapes back to infinity along an asymptotic line.`
  },
  {
    q: `A particle in a central force has $E = -1$ J, $l = 5$ kg$\\cdot$m$^2$/s, $\\mu = 0.5$ kg under $U(r) = -\\frac{2}{r}$ J$\\cdot$m. Is the orbit bound?`,
    a: `Total energy $E = -1$ J is negative, so the orbit is bound. The effective potential is $U_\\text{eff} = \\frac{25}{2 \\cdot 0.5 \\cdot r^2} - \\frac{2}{r} = \\frac{25}{r^2} - \\frac{2}{r}$ J. Since $E < 0$ and $E$ exceeds the minimum of $U_\\text{eff}$, the radial motion oscillates between two turning points, an ellipse.`
  },
  {
    q: `A particle moves under a central potential $U(r) = -\\frac{k}{r}$. The angular momentum is $l$ and reduced mass is $\\mu$. Find the radius of the stable circular orbit.`,
    a: `For a circular orbit set $dU_\\text{eff}/dr = 0$, where $U_\\text{eff} = \\frac{l^2}{2\\mu r^2} - \\frac{k}{r}$. Differentiate: $-\\frac{l^2}{\\mu r^3} + \\frac{k}{r^2} = 0$. Solve: $r = \\frac{l^2}{\\mu k}$. This radius marks the bottom of the effective potential well, the stable circular orbit.`
  },
  {
    q: `A 100 kg satellite at 7000 km altitude has $v = 7.5$ km/s. Is the orbit bound?`,
    a: `Compute total energy $E = \\tfrac{1}{2} m v^2 - \\frac{GMm}{r}$. With $GM = 3.99\\times 10^{14}$ for Earth and $r = R_E + 7000$ km $\\approx 1.337\\times 10^7$ m, the kinetic part is $\\tfrac{1}{2}(100)(7500)^2 \\approx 2.81\\times 10^9$ J. The potential part is $-\\frac{(3.99\\times 10^{14})(100)}{1.337\\times 10^7} \\approx -2.98\\times 10^9$ J. Adding gives $E \\approx -1.7 \\times 10^8$ J. Since $E < 0$, the orbit is bound.`
  },
  {
    q: `Why can the two-body problem be reduced to one body, but the three-body problem cannot?`,
    a: `Two-body central forces have only one independent relative coordinate $\\vec{r} = \\vec{r}_1 - \\vec{r}_2$. Subtraction yields one closed equation with reduced mass. Three bodies introduce two relative coordinates and coupled forces. No general analytic reduction exists, so chaotic motion appears.`
  },
  {
    q: `Predict: What does the orbit look like if you fire a brief radial pulse on a circular satellite orbit?`,
    a: `For inverse-square gravity radial perturbations oscillate at the same rate as the original orbit. The orbit becomes a small ellipse around the original radius. It closes after one period and stays bounded.`
  },
  {
    q: `What is the major axis of an orbit with energy $E = -\\frac{GMm}{4r_0}$?`,
    a: `The major axis is $A = \\frac{C}{-E} = \\frac{GMm}{\\frac{GMm}{4r_0}} = 4r_0$. The orbit is twice as wide as a circular orbit with $E_\\text{circ} = -\\frac{GMm}{2r_0}$.`
  },
  {
    q: `A geostationary satellite must orbit at the rate Earth rotates. Find its orbital radius.`,
    a: `Use Kepler's third law: $T^2 = \\frac{4\\pi^2}{GM} r^3$. Set $T = 86164$ s (sidereal day) and $GM = 3.99\\times 10^{14}$. Solving gives $r^3 = \\frac{GM T^2}{4\\pi^2}$. So $r \\approx 4.22\\times 10^7$ m, or about 42200 km from Earth's center.`
  },
  {
    q: `A satellite has $r_0 = 8000$ km and $\\epsilon = 0.5$. Find $r_\\text{min}$ and $r_\\text{max}$.`,
    a: `Use $r_\\text{min} = \\frac{r_0}{1+\\epsilon} = \\frac{8000}{1.5} \\approx 5333$ km. And $r_\\text{max} = \\frac{r_0}{1-\\epsilon} = \\frac{8000}{0.5} = 16000$ km. The major axis is $r_\\text{min} + r_\\text{max} \\approx 21{,}333$ km.`
  },
  {
    q: `An alpha particle approaches a gold nucleus with energy 5 MeV and impact parameter 10 fm. Will it scatter elastically?`,
    a: `Yes. With $E > 0$ the orbit is hyperbolic. The Coulomb repulsion is conservative. Energy and angular momentum stay constant, so the particle scatters elastically. The scattering angle depends on $E$ and $b$ via the eccentricity $\\epsilon = \\sqrt{1 + \\frac{2El^2}{\\mu C^2}}$.`
  },
  {
    q: `Why is $r_\\text{min} = a(\\epsilon - 1)$ for a hyperbolic orbit and $r_\\text{min} = \\frac{r_0}{1+\\epsilon}$ for an elliptical one?`,
    a: `For an ellipse the semi-major axis is $a = \\frac{r_0}{1-\\epsilon^2}$, so $\\frac{r_0}{1+\\epsilon} = a(1-\\epsilon)$. For a hyperbola the analog uses $a = \\frac{r_0}{\\epsilon^2-1}$, since $\\epsilon > 1$. Then $r_\\text{min} = \\frac{r_0}{1+\\epsilon} = a(\\epsilon - 1)$. Both forms describe the same closest-approach distance, just with different sign conventions for $a$.`
  },
  {
    q: `Predict what changes in Kepler's third law if a planet's mass is comparable to the Sun's.`,
    a: `The constant becomes $\\frac{\\pi^2}{2(M+m)G}$. For small $m$ (most planets) this is essentially $\\frac{\\pi^2}{2MG}$. For binary stars where $m \\sim M$ the sum matters. So the period at fixed $A$ is shorter than for tiny test masses.`
  },
  {
    q: `Why does angular momentum conservation force the area swept rate to be constant?`,
    a: `The geometric area rate is $\\frac{dA}{dt} = \\tfrac{1}{2} r^2 \\dot\\theta$. Angular momentum is $l = \\mu r^2 \\dot\\theta$. So $\\frac{dA}{dt} = \\frac{l}{2\\mu}$. Since $l$ stays constant, the area rate stays constant. Equal time intervals always sweep equal areas.`
  },
  {
    q: `Why does the alternative integral derivation give the same Kepler third law as the area-sweep method?`,
    a: `Both methods use only the conserved quantities $E$ and $l$ for the central force. The orbit is fully determined by these conservation laws plus the inverse-square form of $f(r)$. So the period must come out the same regardless of which integral form you set up. The two derivations are different bookkeeping of the same physics.`
  },
  {
    q: `A rocket of initial mass $M_i = 1000$ kg burns 200 kg of fuel at exhaust speed $u = 2500$ m/s. What is its $\\Delta v$?`,
    a: `Use $\\Delta v = -u \\ln\\frac{M_i}{M_i - \\Delta M}$. Plug in: $\\Delta v = -2500 \\ln\\tfrac{1000}{800} = -2500 \\ln(1.25) \\approx -2500 \\cdot 0.223 \\approx -558$ m/s. The rocket gains 558 m/s along the thrust direction.`
  },
  {
    q: `Why does the perturbed circular orbit close exactly for inverse-square gravity?`,
    a: `The radial small-oscillation frequency is $\\beta = \\frac{l}{mr_0^2}$, which equals the orbital angular frequency for inverse-square forces. Equal rates make the perturbation come back in phase after one orbit. Other power-law forces give incommensurate rates and rosette orbits.`
  },
  {
    q: `A binary star system has stars of equal mass orbiting their common center. The separation is $r$. Find each star's orbital radius from the center of mass.`,
    a: `For equal masses, $m_1 = m_2$, the center of mass sits at the midpoint. From $\\vec{r}_1 = \\vec{R} + \\frac{m_2}{m_1+m_2}\\vec{r}$ each radius is $\\frac{r}{2}$. Both stars orbit the center at radius $\\frac{r}{2}$.`
  },
  {
    q: `Why does a Hohmann transfer use exactly two tangential burns instead of one continuous thrust?`,
    a: `Each tangential burn at perigee or apogee changes both energy and angular momentum efficiently. A burn at perigee raises the apogee. A burn at apogee circularizes the orbit at the new altitude. Two impulsive burns at these special points minimize fuel use. Continuous thrust spreads the change inefficiently, since much of it pushes against the wrong direction.`
  },
  {
    q: `A satellite in circular orbit at $r_0$ executes a Hohmann transfer to a higher orbit at $r_1$. Sketch the energy changes.`,
    a: `Burn 1 (tangential at perigee) raises $E$ from $-\\frac{C}{2r_0}$ to $-\\frac{C}{r_0 + r_1}$. The transfer ellipse has semi-major axis $a = \\frac{r_0+r_1}{2}$. Burn 2 at apogee raises $E$ to $-\\frac{C}{2r_1}$. Both burns increase energy. Total $\\Delta v$ depends on the radii ratio.`
  },
  {
    q: `A planet's orbit has $a = 4 \\times 10^{11}$ m around a star of $M = 2 \\times 10^{30}$ kg. Find its period.`,
    a: `Use Kepler's third law: $T^2 = \\frac{4\\pi^2 a^3}{GM}$. Compute $a^3 = 6.4\\times 10^{34}$ and $GM = 6.674\\times 10^{-11} \\cdot 2\\times 10^{30} = 1.335\\times 10^{20}$. So $T^2 = 4\\pi^2 \\cdot 6.4\\times \\frac{10^{34}}{1.335}\\times 10^{20} \\approx 1.894\\times 10^{16}$. Taking the square root gives $T \\approx 1.38\\times 10^8$ s, or about $4.36$ years.`
  },
  {
    q: `Why does the effective potential $U_\\text{eff} = \\frac{l^2}{2\\mu r^2} + U(r)$ block a particle from $r = 0$?`,
    a: `The centrifugal-barrier term $\\frac{l^2}{2\\mu r^2}$ goes to infinity as $r \\to 0$. To reach the origin the particle would need infinite radial energy. Conservation of $E$ and $l$ keeps $r$ bounded below. Only $l = 0$ allows true head-on approach.`
  },
  {
    q: `A circular orbit has radius $r_0 = 10^7$ m around Earth. Find the orbital speed.`,
    a: `Equate gravity to centripetal force: $\\frac{GM}{r_0^2} = \\frac{v^2}{r_0}$. So $v = \\sqrt{\\frac{GM}{r_0}}$. Plug in $GM = 3.99\\times 10^{14}$ for Earth: $v = \\sqrt{3.99\\times \\frac{10^{14}}{10^7}} = \\sqrt{3.99\\times 10^7} \\approx 6320$ m/s.`
  },
  {
    q: `Find the orbit period of a satellite with $E = -10^9$ J, $\\mu = 100$ kg, and $C = GMm = 4 \\times 10^{16}$.`,
    a: `First find $A = \\frac{C}{-E} = 4\\times \\frac{10^{16}}{10^9} = 4 \\times 10^7$ m. Then $T^2 = \\frac{\\pi^2 \\mu A^3}{2C} = \\frac{\\pi^2 (100)(4\\times 10^7)^3}{2 \\cdot 4\\times 10^{16}} = \\pi^2 \\cdot 8\\times 10^7$. Compute: $T^2 \\approx 7.9\\times 10^8$, so $T \\approx 28{,}100$ s, about $7.8$ hours.`
  },
  {
    q: `Why is angular momentum conserved in central-force motion?`,
    a: `Angular momentum changes by torque $\\vec{\\tau} = \\vec{r}\\times \\vec{F}$. A central force $\\vec{F} = f(r)\\hat{r}$ is parallel to $\\vec{r}$. Their cross product is zero. So $\\vec{\\tau} = 0$ and $\\vec{L}$ stays constant.`
  },
  {
    q: `Predict: What is the impact parameter for an alpha particle approaching a nucleus at very low energy?`,
    a: `At low $E$ the eccentricity $\\epsilon = \\sqrt{1 + \\frac{2El^2}{\\mu C^2}}$ approaches 1. The orbit becomes nearly parabolic. Even with small $b$ the particle just barely escapes after coming close. The scattering angle approaches 180 degrees for head-on approach.`
  },
  // Arnold cards
  {
    q: `Two particles have masses $m_1 = 3$ kg and $m_2 = 6$ kg. They interact through a potential $U(|r_1 - r_2|)$. What is the reduced mass? What is the equivalent one-body problem?`,
    a: `Reduced mass $m = \\frac{m_1 m_2}{m_1 + m_2} = \\frac{(3)(6)}{3+6} = \\tfrac{18}{9} = 2$ kg. The equivalent problem is a single particle of mass 2 kg moving in the potential $U(|r|)$, where $r = r_1 - r_2$ is the separation.`
  },
  {
    q: `Why do internal forces not change the total momentum of a closed n-body system? What specific property of Newton's third law makes this work?`,
    a: `Internal force $F_{ij}$ from particle $j$ on particle $i$ equals $-F_{ji}$ (Newton's third law: equal and opposite). When you sum all internal forces, every pair $(i,j)$ contributes $F_{ij} + F_{ji} = 0$. So $\\sum_{i,j} F_{ij} = 0$ exactly. For a closed system with no external forces, $\\frac{dP}{dt} = 0$.`
  },
  {
    q: `Use dimensional reasoning to argue that $T \\propto a^{\\tfrac{3}{2}}$ for Keplerian orbits without doing the full calculation.`,
    a: `In gravity, acceleration $\\sim \\frac{GM}{a^2}$. For an orbit of size $a$, the characteristic speed is $v \\sim \\sqrt{\\frac{GM}{a}}$ (from $v^2 \\sim$ acceleration $\\times$ size). Period = circumference/speed $\\sim \\frac{a}{\\sqrt{\\frac{GM}{a}}} = \\frac{a^{\\tfrac{3}{2}}}{\\sqrt{GM}}$. So $T \\propto a^{\\tfrac{3}{2}}$.`
  },
  {
    q: `Why does the lens cap (Leonov example) come back near the spaceship after exactly one orbital period?`,
    a: `Both objects keep nearly the same orbital period. Kepler's third law links period to semi-major axis, which barely changes from a 10 m/s throw. Same period means both return to the same relative configuration after one revolution. In the rotating frame, the cap traces a small ellipse exactly once per orbital period.`
  },
  {
    q: `State and prove why internal torques cancel in an n-body system.`,
    a: `For each pair $(i,j)$: $F_{ij} = -F_{ji}$ and $F_{ij}$ is parallel to $(r_i - r_j)$. The combined torque of the pair is $[r_i, F_{ij}] + [r_j, F_{ji}] = [(r_i - r_j), F_{ij}] = 0$ because the cross product of parallel vectors is zero. Summing over all pairs gives zero total internal torque.`
  },
  {
    q: `State the three-body gravitational potential. Why does it have exactly three terms?`,
    a: `$U = -\\frac{m_1 m_2}{\\}|x_1-x_2\\| - \\frac{m_2 m_3}{\\}|x_2-x_3\\| - \\frac{m_3 m_1}{\\}|x_3-x_1\\|$. It has three terms because three bodies form exactly three distinct pairs: (1,2), (2,3), and (3,1). Each term is the gravitational potential energy of one pair. There is no triple interaction in Newtonian gravity.`
  },
  {
    q: `A central field has $M \\neq 0$. Prove that the orbit stays in a fixed plane.`,
    a: `Compute $(M, r) = ([r, \\dot{r}], r)$. This is the scalar triple product of $r, \\dot{r}, r$. Two of the three vectors are equal ($r$ appears twice), so the triple product is zero. Therefore $r \\perp M$ at all times. Since $M$ is a fixed constant vector, $r$ stays in the fixed plane perpendicular to $M$.`
  },
  {
    q: `An axially symmetric field has $U = U(r, z)$ in cylindrical coordinates. Which component of angular momentum is conserved?`,
    a: `Only $M_z = (e_z, [r, \\dot{r}])$ is conserved. The full vector $M$ is not conserved because the field is not fully central. But rotations around the $z$ axis leave the field unchanged, so the projection of angular momentum onto the $z$ axis is constant. The $x$ and $y$ components can change.`
  },
  {
    q: `What is radial motion ($M = 0$)? Give a physical example.`,
    a: `When $M = [r, \\dot{r}] = 0$, the position vector $r$ and velocity $\\dot{r}$ are parallel. The particle moves along a straight line through the center of force. This is radial motion: the orbit collapses to a 1D fall. Example: a ball dropped straight down toward the Earth, purely radial, no sideways motion.`
  },
  {
    q: `Why is the reduced mass $m = \\frac{m_1 m_2}{m_1 + m_2}$ always less than either original mass?`,
    a: `$m = \\frac{m_1 m_2}{m_1 + m_2} = \\frac{1}{\\frac{1}{m_1} + \\frac{1}{m_2}}$. This is the harmonic mean of the masses divided by 2, which is always less than either $m_1$ or $m_2$. When one mass is much larger, $m \\approx$ the smaller mass: the heavier body barely moves, and all the relative motion belongs to the lighter one.`
  },
  {
    q: `ELABORATE: What does the two-body reduction tell you about the Earth-Moon system?`,
    a: `The Earth-Moon system reduces to a single body of reduced mass $m = \\frac{m_E m_M}{m_E + m_M}$ moving in the gravitational potential of the total mass $m_E + m_M$. Since $m_E \\gg m_M$, the reduced mass $m \\approx m_M$. The Moon does nearly all the relative motion. The center of mass barely moves. This is why we say the Moon orbits the Earth rather than both orbiting equally.`
  },
  {
    q: `PREDICT: If two equal masses collide head-on with no external forces, what happens to the center of mass?`,
    a: `The center of mass moves at constant velocity throughout. Before the collision, both masses move toward each other with equal and opposite momenta, so total $P = 0$. The center of mass stays fixed. During and after the collision, internal forces only redistribute momentum between the two masses. The total stays zero. The center of mass does not move.`
  },
  {
    q: `TRANSFER: A rocket burns fuel and expels exhaust backward. No external force acts. What can you say about the rocket-exhaust system?`,
    a: `The rocket and all exhaust together form a closed system with no external forces. Total momentum is conserved: $P_{rocket} + P_{exhaust} = \\text{const}$. Initially both are at rest, so $P = 0$. As exhaust goes backward (negative momentum), the rocket gains positive momentum forward. Momentum conservation is the engine of rocketry.`
  },
  {
    q: `A 2-DOF conservative system satisfies $\\frac{dE}{dt} = 0$. Prove this from Newton's equations.`,
    a: `$E = \\frac{1}{2}(\\dot{x}_1^2 + \\dot{x}_2^2) + U(x_1, x_2)$. Differentiate: $\\frac{dE}{dt} = \\dot{x}_1\\ddot{x}_1 + \\dot{x}_2\\ddot{x}_2 + \\frac{\\partial U}{\\partial x_1}\\dot{x}_1 + \\frac{\\partial U}{\\partial x_2}\\dot{x}_2 = \\dot{x}_1(\\ddot{x}_1 + \\frac{\\partial U}{\\partial x_1}) + \\dot{x}_2(\\ddot{x}_2 + \\frac{\\partial U}{\\partial x_2})$. Newton's equations say each bracket is zero. Therefore $\\frac{dE}{dt} = 0$.`
  }
]

// Reference sections

const buildReferenceSections = () => [
  <>
    <h2>Two-Body Reduction</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Two-body separation vector</span>
      <div className="ref-formula-eq">{`$$\\vec{r} = \\vec{r}_1 - \\vec{r}_2$$`}</div>
      <p className="ref-formula-desc">
        When to use: Define the relative coordinate for any two-body central-force problem.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Coupled equations of motion</span>
      <div className="ref-formula-eq">{`$$m_1 \\ddot{\\vec{r}}_1 = f(r) \\hat{r}, \\quad m_2 \\ddot{\\vec{r}}_2 = -f(r) \\hat{r}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Newton's second law on each body acted on only by the central force.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Center-of-mass equation</span>
      <div className="ref-formula-eq">{`$$\\ddot{\\vec{R}} = 0, \\quad \\vec{R} = \\vec{R}_0 + \\vec{V} t$$`}</div>
      <p className="ref-formula-desc">
        When to use: The center of mass of any isolated two-body system moves at constant velocity.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Reduced-mass equation</span>
      <div className="ref-formula-eq">{`$$\\mu \\ddot{\\vec{r}} = f(r) \\hat{r}, \\quad \\mu = \\frac{m_1 m_2}{m_1 + m_2}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Reduce the two-body central-force problem to a one-body problem with reduced
        mass {`$\\mu$`}.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Body positions in CM frame</span>
      <div className="ref-formula-eq">{`$$\\vec{r}_1 = \\vec{R} + \\frac{m_2}{m_1+m_2} \\vec{r}, \\quad \\vec{r}_2 = \\vec{R} - \\frac{m_1}{m_1+m_2} \\vec{r}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Recover individual body positions from the relative vector and center of mass.
      </p>
    </div>

    <h2>Polar Equations and Conservation Laws</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Polar equations of motion</span>
      <div className="ref-formula-eq">{`$$\\mu(\\ddot{r} - r \\dot\\theta^2) = f(r), \\quad \\mu(r \\ddot\\theta + 2 \\dot{r} \\dot\\theta) = 0$$`}</div>
      <p className="ref-formula-desc">
        When to use: Express the reduced one-body equation in plane-polar coordinates.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Angular momentum magnitude</span>
      <div className="ref-formula-eq">{`$$l = \\mu r^2 \\dot\\theta$$`}</div>
      <p className="ref-formula-desc">
        When to use: Conserved quantity in any central-force motion.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Total energy with potential</span>
      <div className="ref-formula-eq">{`$$E = \\tfrac{1}{2} \\mu v^2 + U(r) = \\tfrac{1}{2} \\mu (\\dot{r}^2 + r^2 \\dot\\theta^2) + U(r)$$`}</div>
      <p className="ref-formula-desc">
        When to use: Conserved total mechanical energy in central-force motion.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Potential energy</span>
      <div className="ref-formula-eq">{`$$U(r) - U(r_a) = -\\int_{r_a}^r f(r') \\, dr'$$`}</div>
      <p className="ref-formula-desc">
        When to use: Define potential energy by integrating the central force from a reference
        radius.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Reduced 1D energy equation</span>
      <div className="ref-formula-eq">{`$$E = \\tfrac{1}{2} \\mu \\dot{r}^2 + \\frac{l^2}{2 \\mu r^2} + U(r)$$`}</div>
      <p className="ref-formula-desc">
        When to use: Eliminate {`$\\dot\\theta$`} using {`$l = \\mu r^2 \\dot\\theta$`} to get a
        purely radial equation.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Effective potential</span>
      <div className="ref-formula-eq">{`$$U_\\text{eff}(r) = \\frac{l^2}{2 \\mu r^2} + U(r)$$`}</div>
      <p className="ref-formula-desc">
        When to use: Combine angular and radial potentials for energy-diagram analysis.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Compact energy equation</span>
      <div className="ref-formula-eq">{`$$E = \\tfrac{1}{2} \\mu \\dot{r}^2 + U_\\text{eff}(r)$$`}</div>
      <p className="ref-formula-desc">
        When to use: Treat radial motion as a 1D particle in the effective potential.
      </p>
    </div>

    <h2>Quadrature Solutions</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Radial separation integral</span>
      <div className="ref-formula-eq">{`$$\\frac{dr}{dt} = \\sqrt{\\frac{2}{\\mu}(E - U_\\text{eff})}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Solve for radial velocity at any energy and effective potential.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Time-of-motion integral</span>
      <div className="ref-formula-eq">{`$$\\int \\frac{dr}{\\sqrt{\\frac{2}{\\mu}(E - U_\\text{eff})}} = t - t_0$$`}</div>
      <p className="ref-formula-desc">
        When to use: Compute the time for a particle to move between two radii.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Angular position by integration</span>
      <div className="ref-formula-eq">{`$$\\theta - \\theta_0 = \\int \\frac{l}{\\mu r^2} \\, dt$$`}</div>
      <p className="ref-formula-desc">
        When to use: Find {`$\\theta(t)$`} once {`$r(t)$`} is known.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Orbit-shape differential</span>
      <div className="ref-formula-eq">{`$$\\frac{d\\theta}{dr} = \\frac{\\frac{l}{\\mu r^2}}{\\sqrt{\\frac{2}{\\mu}(E - U_\\text{eff})}}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Eliminate time to get the geometric orbit shape {`$r(\\theta)$`}.
      </p>
    </div>

    <h2>Inverse-Square Orbits</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Gravitational potential</span>
      <div className="ref-formula-eq">{`$$U(r) = -\\frac{G M m}{r} = -\\frac{C}{r}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Define {`$C = G m_1 m_2 > 0$`} for an attractive inverse-square force.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Gravitational effective potential</span>
      <div className="ref-formula-eq">{`$$U_\\text{eff}(r) = -\\frac{C}{r} + \\frac{l^2}{2 \\mu r^2}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Energy-diagram analysis for any inverse-square attractive central force.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Conic-section orbit form</span>
      <div className="ref-formula-eq">{`$$r = \\frac{\\frac{l^2}{\\mu C}}{1 - \\sqrt{1 + \\frac{2 E l^2}{\\mu C^2}} \\, \\sin(\\theta - \\theta_0)}$$`}</div>
      <p className="ref-formula-desc">
        When to use: General solution to the orbit equation under inverse-square gravity.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Semi-latus rectum</span>
      <div className="ref-formula-eq">{`$$r_0 = \\frac{l^2}{\\mu C}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Characteristic length scale of any conic-section orbit.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Eccentricity</span>
      <div className="ref-formula-eq">{`$$\\epsilon = \\sqrt{1 + \\frac{2 E l^2}{\\mu C^2}}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Determine orbit shape from total energy and angular momentum.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Standard conic-orbit equation</span>
      <div className="ref-formula-eq">{`$$r = \\frac{r_0}{1 - \\epsilon \\cos\\theta}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Polar form of any conic with one focus at origin (after fixing {`$\\theta_0$`}
        ).
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Cartesian conic form</span>
      <div className="ref-formula-eq">{`$$(1 - \\epsilon^2) x^2 - 2 r_0 \\epsilon x + y^2 = r_0^2$$`}</div>
      <p className="ref-formula-desc">
        When to use: Convert the polar orbit to Cartesian coordinates.
      </p>
    </div>

    <h2>Conic Section Classification</h2>
    <table className="lrn-table">
      <thead>
        <tr>
          <th>Eccentricity</th>
          <th>Orbit shape</th>
          <th>Total energy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`$\\epsilon = 0$`}</td>
          <td>Circle</td>
          <td>{`$E = -\\frac{\\mu C^2}{2 l^2}$`} (minimum)</td>
        </tr>
        <tr>
          <td>{`$0 < \\epsilon < 1$`}</td>
          <td>Ellipse</td>
          <td>{`$-\\frac{\\mu C^2}{2l^2} < E < 0$`}</td>
        </tr>
        <tr>
          <td>{`$\\epsilon = 1$`}</td>
          <td>Parabola</td>
          <td>{`$E = 0$`}</td>
        </tr>
        <tr>
          <td>{`$\\epsilon > 1$`}</td>
          <td>Hyperbola</td>
          <td>{`$E > 0$`}</td>
        </tr>
      </tbody>
    </table>
    <table className="lrn-table">
      <thead>
        <tr>
          <th>Orbit</th>
          <th>Bound?</th>
          <th>Reaches infinity?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Circle</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Ellipse</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Parabola</td>
          <td>Marginal</td>
          <td>Yes (at zero speed)</td>
        </tr>
        <tr>
          <td>Hyperbola</td>
          <td>No</td>
          <td>Yes (at finite speed)</td>
        </tr>
      </tbody>
    </table>

    <h2>Ellipse Geometry</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Closest approach (perihelion)</span>
      <div className="ref-formula-eq">{`$$r_\\text{min} = \\frac{r_0}{1 + \\epsilon}$$`}</div>
      <p className="ref-formula-desc">When to use: Smallest radius on any conic-section orbit.</p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Farthest distance (aphelion)</span>
      <div className="ref-formula-eq">{`$$r_\\text{max} = \\frac{r_0}{1 - \\epsilon}$$`}</div>
      <p className="ref-formula-desc">When to use: Largest radius on a bound elliptical orbit.</p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Major axis from extremes</span>
      <div className="ref-formula-eq">{`$$A = r_\\text{max} + r_\\text{min} = \\frac{2 r_0}{1 - \\epsilon^2}$$`}</div>
      <p className="ref-formula-desc">When to use: Total long-axis length of an ellipse.</p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Major axis from energy</span>
      <div className="ref-formula-eq">{`$$A = \\frac{C}{-E}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Compute major axis directly from total energy and force constant {`$C$`}.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Semi-axes of ellipse</span>
      <div className="ref-formula-eq">{`$$a = \\frac{r_0}{1 - \\epsilon^2} = \\frac{C}{-2E}, \\quad b = \\frac{r_0}{\\sqrt{1-\\epsilon^2}} = \\frac{l}{\\sqrt{-2 \\mu E}}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Compute semi-major and semi-minor axes of a bound elliptical orbit.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Eccentricity from extremes</span>
      <div className="ref-formula-eq">{`$$\\epsilon = \\frac{r_\\text{max} - r_\\text{min}}{r_\\text{max} + r_\\text{min}}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Extract eccentricity from observed perihelion and aphelion.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Focus offset from ellipse center</span>
      <div className="ref-formula-eq">{`$$x_0 = \\frac{r_0 \\epsilon}{1 - \\epsilon^2}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Locate the focus relative to the geometric center of the ellipse.
      </p>
    </div>

    <h2>Orbit Energetics</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Speed via energy</span>
      <div className="ref-formula-eq">{`$$E = \\tfrac{1}{2} m v^2 - \\frac{C}{r}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Relate speed and radius along any orbit at known total energy.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Conservation of angular momentum at perigee/apogee</span>
      <div className="ref-formula-eq">{`$$\\mu v_p r_p = \\mu v_a r_a$$`}</div>
      <p className="ref-formula-desc">
        When to use: Relate speeds at the two extremes of an elliptical orbit.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Rocket-burn velocity change</span>
      <div className="ref-formula-eq">{`$$\\Delta v = -u \\ln\\frac{M_i}{M_i - \\Delta M}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Compute thrust-induced velocity change from exhaust speed {`$u$`} and
        propellant burned.
      </p>
    </div>

    <h2>Kepler's Three Laws</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Kepler's first law</span>
      <div className="ref-formula-eq">Orbit is an ellipse with the central body at one focus</div>
      <p className="ref-formula-desc">
        When to use: Describe any planet's bound orbit around the Sun.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Kepler's second law</span>
      <div className="ref-formula-eq">{`$r$ sweeps equal areas in equal times`}</div>
      <p className="ref-formula-desc">
        When to use: Relate orbital position rate to angular momentum conservation.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Kepler's third law (general)</span>
      <div className="ref-formula-eq">{`$$T^2 = k A^3$$`}</div>
      <p className="ref-formula-desc">
        When to use: State the period-axis relation for orbits in any inverse-square field.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Area-rate from angular momentum</span>
      <div className="ref-formula-eq">{`$$\\frac{dA}{dt} = \\frac{l}{2\\mu}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Quantify Kepler's second law as a constant area sweep rate.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Period via ellipse area</span>
      <div className="ref-formula-eq">{`$$\\frac{l}{2\\mu} T = \\pi a b$$`}</div>
      <p className="ref-formula-desc">
        When to use: Equate total swept area to the area of the elliptical orbit.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Kepler third law in terms of mu</span>
      <div className="ref-formula-eq">{`$$T^2 = \\frac{\\pi^2 \\mu}{2 C} A^3$$`}</div>
      <p className="ref-formula-desc">
        When to use: General form of Kepler's third law before substituting masses.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Kepler third law in terms of total mass</span>
      <div className="ref-formula-eq">{`$$T^2 = \\frac{\\pi^2}{2 (M+m) G} A^3$$`}</div>
      <p className="ref-formula-desc">
        When to use: Standard form for gravitating two-body systems where {`$C = G M m$`}.
      </p>
    </div>
    <table className="lrn-table">
      <thead>
        <tr>
          <th>Law</th>
          <th>Statement</th>
          <th>Origin</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>First</td>
          <td>Ellipse with focus</td>
          <td>Inverse-square attractive force</td>
        </tr>
        <tr>
          <td>Second</td>
          <td>Equal areas in equal times</td>
          <td>Angular momentum conservation</td>
        </tr>
        <tr>
          <td>Third</td>
          <td>{`$T^2 \\propto A^3$`}</td>
          <td>Combining area sweep with ellipse geometry</td>
        </tr>
      </tbody>
    </table>

    <h2>Orbit Planarity and Axial Symmetry</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Orbit Planarity</span>
      <div className="ref-formula-eq">{`$$( M, r ) = ([r, \\dot{r}], r) = 0$$`}</div>
      <p className="ref-formula-desc">
        When to use: Proving that central-field orbits stay in a fixed plane perpendicular to{' '}
        {`$M$`}. Holds as long as {`$M \\neq 0$`}. When {`$M = 0$`}: radial motion on a line through
        the center.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Axial Angular Momentum</span>
      <div className="ref-formula-eq">{`$$M_z = (e_z, [r, F])$$`}</div>
      <p className="ref-formula-desc">
        When to use: Any field with rotational symmetry around the {`$z$`} axis (oblate planets,
        magnetic fields). {`$M_z$`} stays constant even when full {`$M$`} does not.
      </p>
    </div>

    <h2>N-Body Conservation Laws</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Conservation Laws (Closed System)</span>
      <div className="ref-formula-eq">
        <p>
          <strong>Momentum:</strong> {`$P = \\sum m_i \\dot{r}_i = \\text{const}$`} (no external
          forces)
        </p>
        <p>
          <strong>Angular momentum:</strong> {`$M = \\sum [r_i, m_i \\dot{r}_i]$`}, rate of change{' '}
          {`$= \\sum [r_i, F_i']$`}
        </p>
        <p>
          <strong>Energy:</strong>{' '}
          {`$E = \\frac{\\sum m_i\\dot{r}_i^2}{2} + \\sum_{i>j} U_{ij} + \\sum_i U_i' = \\text{const}$`}
        </p>
      </div>
      <p className="ref-formula-desc">
        When to use: Any closed n-body system. Pick whichever conserved quantity isolates the
        variable you care about.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Center of Mass (n-body)</span>
      <div className="ref-formula-eq">{`$$r = \\frac{\\sum m_i r_i}{\\sum m_i}, \\quad \\left(\\sum m_i\\right)\\ddot{r} = \\sum F_i'$$`}</div>
      <p className="ref-formula-desc">
        When to use: Splitting any n-body motion into uniform translation of the center of mass and
        motion relative to it.
      </p>
    </div>

    <h2>Method of Similarity</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Dimensional Scaling ({`$U = -\\frac{k}{r}$`})</span>
      <div className="ref-formula-eq">{`$$r \\to \\lambda r \\implies t \\to \\lambda^{\\tfrac{3}{2}} t$$`}</div>
      <p className="ref-formula-desc">
        When to use: Deriving power-law scaling relations for orbit periods without solving the full
        equations. Consequence: {`$T \\propto a^{\\tfrac{3}{2}}$`} (Kepler's third law by dimensional
        reasoning).
      </p>
    </div>

    <h2>Worked-Example Quick Lookup</h2>
    <table className="lrn-table">
      <thead>
        <tr>
          <th>Example</th>
          <th>Setup</th>
          <th>Key result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Comet Capture</td>
          <td>Parabolic comet meets Jupiter</td>
          <td>{`$E$`} becomes negative, captured</td>
        </tr>
        <tr>
          <td>Hyperbolic Orbits</td>
          <td>Rutherford-style scattering</td>
          <td>{`$\\cos\\theta_a = \\frac{1}{\\epsilon}$`}</td>
        </tr>
        <tr>
          <td>Satellite Orbit</td>
          <td>{`$r_\\text{min}, r_\\text{max}$`} measured</td>
          <td>{`$\\epsilon = (r_\\text{max}-r_\\text{min})/(r_\\text{max}+r_\\text{min})$`}</td>
        </tr>
        <tr>
          <td>Hohmann Transfer</td>
          <td>Two tangential burns</td>
          <td>Perigee burn raises apogee</td>
        </tr>
        <tr>
          <td>Leonov Lens Cap</td>
          <td>10 m/s radial throw from circular orbit</td>
          <td>Cap traces 30 km ellipse, returns after one period</td>
        </tr>
        <tr>
          <td>Law of Periods</td>
          <td>General Kepler third law</td>
          <td>{`$T^2 = \\frac{\\pi^2 A^3}{2(M+m)G}$`}</td>
        </tr>
      </tbody>
    </table>
  </>
]

export default function CentralForceMotion() {
  const sections = buildLearningSections()
  const config = {
    cssPrefix: 'cf',
    source: 'Kleppner & Kolenkow · Arnold',
    documentTitle: 'Central Force Motion and the Kepler Problem - AETHER',
    learning: {
      groupTitle: 'Part I: Newtonian Mechanics',
      category: 'Module 8',
      title: 'Central Force Motion and the Kepler Problem',
      subtitle:
        "Two gravitating bodies reduce to one via reduced mass. Angular momentum conservation forces planar motion. The effective potential classifies orbits as conic sections. Kepler's three laws follow from inverse-square gravity. N-body conservation laws and dimensional scaling complete the picture.",
      sections
    },
    practice: practiceCards,
    reference: {
      category: 'Quick Reference',
      title: 'Central Force Motion and the Kepler Problem',
      sections: buildReferenceSections()
    },
    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }`
  }
  return <LearningTemplate config={config} />
}
