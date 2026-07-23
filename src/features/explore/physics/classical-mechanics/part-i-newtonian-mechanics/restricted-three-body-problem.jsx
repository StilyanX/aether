import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { ThreeBodyField } from '../../../../../components/viz'

// Learning mode

const buildLearningSections = () => [
  // Section 1: The general three-body problem
  <>
    <h2>The Three-Body Problem Has No General Solution</h2>
    <p>
      The two-body problem is fully solved. Two masses pulling on each other reduce to one body
      moving around a fixed center. You get clean conic-section orbits. Add a third mass and that
      magic stops working.
    </p>
    <p>
      <strong>When to use this:</strong> Any time three or more masses pull on each other with
      gravity. None of them can be so tiny you can ignore its pull.
    </p>
    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        Three equal stars start at rest at the corners of a triangle. You let gravity take over. Can
        you write a formula for where each star sits at any later time?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          No. There is no general closed-form formula. For most starting setups the motion is
          chaotic. Tiny changes in the start lead to wildly different paths.
        </p>
      </details>
    </div>
    <h3>Setting Up the Three Bodies</h3>
    <p>
      Place three masses {`$m_1$`}, {`$m_2$`}, {`$m_3$`} at positions {`$\\vec{r}_1$`},{' '}
      {`$\\vec{r}_2$`}, {`$\\vec{r}_3$`}. Work in the center-of-mass frame, the frame where the
      mass-weighted average position stays still. Newton's law of gravity gives each mass an
      acceleration from the other two. For the first mass:
    </p>
    <div className="lrn-eq">{`$$\\ddot{\\vec{r}}_1 = -G m_2 \\frac{\\vec{r}_1 - \\vec{r}_2}{|\\vec{r}_1 - \\vec{r}_2|^3} - G m_3 \\frac{\\vec{r}_1 - \\vec{r}_3}{|\\vec{r}_1 - \\vec{r}_3|^3}$$`}</div>
    <p>
      Two more equations like this hold for {`$m_2$`} and {`$m_3$`}. Each body feels a pull from
      each of the other two. The pulls couple all three paths together.
    </p>
    <ThreeBodyField />
    <h3>The Symmetrical Equation of Motion</h3>
    <p>
      Raw position vectors are clumsy here. Switch to <strong>relative-position vectors</strong>.
      Define {`$\\vec{s}_i$`} as the vector from one pair of bodies, cycling through the labels:
    </p>
    <div className="lrn-eq">{`$$\\vec{s}_i = \\vec{r}_j - \\vec{r}_k$$`}</div>
    <p>These three vectors close up into a triangle, so their sum vanishes:</p>
    <div className="lrn-eq">{`$$\\vec{s}_1 + \\vec{s}_2 + \\vec{s}_3 = 0$$`}</div>
    <p>
      To get one tidy equation, subtract the Newton equations in pairs. Take the side{' '}
      {`$\\vec{s}_3 = \\vec{r}_1 - \\vec{r}_2$`}. Differentiate twice and subtract mass 2's equation
      from mass 1's:
    </p>
    <div className="lrn-eq">{`$$\\ddot{\\vec{s}}_3 = \\ddot{\\vec{r}}_1 - \\ddot{\\vec{r}}_2 = -G(m_1 + m_2)\\frac{\\vec{s}_3}{s_3^3} + (\\text{terms with } m_3)$$`}</div>
    <p>
      The pull each body feels from the other one in the pair adds up, so {`$m_1$`} and {`$m_2$`}{' '}
      both land in the first factor. Doing the same for all three sides, and folding in the leftover{' '}
      {`$m_3$`} terms, every equation collapses into one shape that looks the same for{' '}
      {`$i = 1, 2, 3$`}:
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$\\ddot{\\vec{s}}_i = -m G \\frac{\\vec{s}_i}{s_i^3} + m_i \\vec{G}$$`}</div>
    <p>
      Here {`$m = m_1 + m_2 + m_3$`} is the total mass. The full total appears because the leftover
      terms from the third body fill the first factor out to the whole mass. The coupling weights by
      the individual mass {`$m_i$`}, because each side reacts to the body opposite it. The vector{' '}
      {`$\\vec{G}$`} bundles the leftover coupling between the three sides:
    </p>
    <div className="lrn-eq">{`$$\\vec{G} = G\\left(\\frac{\\vec{s}_1}{s_1^3} + \\frac{\\vec{s}_2}{s_2^3} + \\frac{\\vec{s}_3}{s_3^3}\\right)$$`}</div>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>
        Why does the first term look exactly like a two-body Kepler force, while {`$\\vec{G}$`} is
        the troublemaker?
      </p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          The first term {`$-mG \\frac{\\vec{s}_i}{s_i^3}$`} is a clean inverse-square pull on one
          side of the triangle. If {`$\\vec{G}$`} were zero, each side would obey its own Kepler
          problem (a single body on a conic-section orbit) and you could solve it.
        </p>
        <p>
          But {`$\\vec{G}$`} mixes all three sides together. It refuses to vanish in general. That
          coupling is exactly what blocks a closed-form solution.
        </p>
      </details>
    </div>
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        Look at what sits inside {`$\\vec{G}$`}: three vectors, one pointing along each side of the
        triangle, each shrunk by its own {`$1/s_i^3$`} factor.
      </p>
      <p>
        For them to cancel, the three sides need just the right lengths and directions. A random
        arrangement gives three unequal vectors that fail to add to zero, so {`$\\vec{G}$`} stays
        alive and keeps the three paths locked together. Only one special shape can kill it, which
        is the door into the next section.
      </p>
    </div>
  </>,

  // Section 2: Euler and Lagrange special solutions
  <>
    <h2>Two Special Solutions: Euler and Lagrange</h2>
    <p>
      The general problem has no formula. But two exact solutions do exist for special geometries.
      Euler and Lagrange found both in the 1700s. In each, the three bodies hold a fixed shape while
      the whole figure scales and spins.
    </p>
    <p>
      <strong>When to use this:</strong> When the three bodies start in one of these two exact
      arrangements, you can predict the motion forever.
    </p>
    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        Three masses sit on one straight line and orbit their shared center. As they move, does the
        line stay straight or bend?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          It stays straight. In Euler's solution the three masses always stay collinear. The line
          rotates and stretches, but never bends. This works only for one special set of mass ratios
          and spacings.
        </p>
      </details>
    </div>
    <h3>Euler's Collinear Solution</h3>
    <p>
      Euler found a bound solution where the three masses always sit on a single straight line. Each
      mass traces its own ellipse. All three ellipses share the same focus and the same period{' '}
      {`$\\tau$`}. So the line of three bodies rotates and changes length, yet always points the
      same way through the center.
    </p>
    <p>
      At one moment all three reach their closest point to the focus together. Half a period later
      they all reach their farthest point together. The spacing along the line is fixed by the mass
      ratios. It only works for one matching set of distances.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>Why must the three bodies share the same period in this solution?</p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          The shape stays rigid. If one body lapped another, the line would bend and the geometry
          would break. A rigid rotating line forces every body to complete one turn in the same
          time.
        </p>
      </details>
    </div>
    <h3>Lagrange's Equilateral-Triangle Solution</h3>
    <p>
      Lagrange found the second exact solution. Put the three masses at the corners of an{' '}
      <strong>equilateral triangle</strong>. With this shape, the coupling vector {`$\\vec{G}$`}{' '}
      becomes exactly zero. The symmetrical equation drops to a pure two-body form:
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$\\ddot{\\vec{s}}_i = -m G \\frac{\\vec{s}_i}{s_i^3}$$`}</div>
    <p>
      Now each side of the triangle obeys its own Kepler equation. The whole triangle keeps its
      shape while it spins and scales. Every mass moves on an ellipse with the same shared focus and
      the same period.
    </p>
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        For an equilateral triangle, all three sides have equal length, so {`$s_1 = s_2 = s_3$`}.
      </p>
      <p>
        The three terms in {`$\\vec{G}$`} are then three equal-length vectors pointing along the
        three sides. Because the sides close into a triangle, those three vectors add to zero. With{' '}
        {`$\\vec{G} = 0$`} the equations split into three clean Kepler problems.
      </p>
    </div>
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Euler's collinear solution</span>
        <p>
          Three masses on a line. {`$\\vec{G} \\neq 0$`}. The geometry is constrained by special
          mass ratios.
        </p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Lagrange's triangle solution</span>
        <p>
          Three masses at triangle corners. {`$\\vec{G} = 0$`}. The motion decouples into three
          Kepler problems.
        </p>
      </div>
    </div>
    <h3>What Happens in the General Case</h3>
    <p>
      Outside these two special shapes, the long-term fate depends on the total energy. There are
      three broad outcomes:
    </p>
    <ul className="lrn-list">
      <li>Positive total energy: all three bodies fly apart, or one escapes and two stay bound.</li>
      <li>Negative total energy: one body escapes and leaves the other two in a bound pair.</li>
      <li>Negative total energy: all three settle into bound orbits around their common center.</li>
    </ul>
  </>,

  // Section 3: The restricted three-body problem
  <>
    <h2>The Restricted Three-Body Problem</h2>
    <p>
      The full problem is hopeless in general. So we simplify. Make one of the three masses so tiny
      that its own gravity does not move the other two. That tiny mass is a{' '}
      <strong>test mass</strong>. The two big masses are the <strong>primaries</strong>.
    </p>
    <p>
      <strong>When to use this:</strong> When a small object (a spacecraft, an asteroid, a moonlet)
      moves near two much larger bodies whose orbit it does not disturb.
    </p>
    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        A spacecraft drifts between the Earth and the Moon. Does the spacecraft change the orbits of
        the Earth and the Moon?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          No, not noticeably. The spacecraft is far too light. We treat its pull on the Earth and
          Moon as zero. The Earth and Moon keep their normal orbit while the spacecraft responds to
          both.
        </p>
      </details>
    </div>
    <div className="lrn-definition">
      <div className="lrn-definition-term">Restricted three-body problem</div>
      <div className="lrn-definition-desc">
        <p>
          Two large masses orbit their common center in fixed, undisturbed circular orbits. A third
          mass is so small it does not affect them. We solve only for the path of that small test
          mass.
        </p>
      </div>
    </div>
    <h3>The Mass Parameter</h3>
    <p>
      One number sets how lopsided the two primaries are. Call the heavier primary {`$m_1$`} and the
      lighter one {`$m_2$`}. The <strong>mass parameter</strong> {`$\\mu$`} is the lighter mass as a
      fraction of the total:
    </p>
    <div className="lrn-eq">{`$$\\mu = \\frac{m_2}{m_1 + m_2}$$`}</div>
    <p>
      When {`$\\mu$`} is small, one body dominates. The Sun-Jupiter pair has{' '}
      {`$\\mu \\approx
      0.00095$`}
      , and the Earth-Moon pair has {`$\\mu \\approx 0.012$`}, about 1.2 percent. Two equal stars
      give {`$\\mu = 0.5$`}. This single number decides whether the triangular balance points can
      hold a test mass, as you will see later.
    </p>
    <h3>Why This Helps</h3>
    <p>
      The two primaries now move in a known, fixed circular orbit. Their motion is no longer part of
      the puzzle. Only the test mass is unknown. The hard coupling is gone.
    </p>
    <p>
      Real examples are everywhere. A spacecraft between the Earth and the Moon is one test mass and
      two primaries. The Moon perturbed by the distant Sun is another: treat the Moon as the test
      mass and the Earth plus Sun as the two large bodies.
    </p>
    <div className="lrn-self-explain">
      <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
      <p>Why does ignoring the test mass's gravity make the problem solvable?</p>
      <details className="lrn-self-explain-reveal">
        <summary>Expert explanation</summary>
        <p>
          The coupling vector {`$\\vec{G}$`} was the obstacle. It mixed all three motions. If the
          third body cannot push back, the two big bodies obey a clean two-body orbit on their own.
        </p>
        <p>
          That leaves one unknown path instead of three coupled ones. One equation in one body is
          something we can integrate by computer.
        </p>
      </details>
    </div>
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        The cleanest version of this setup takes the two primaries on circular orbits, not ellipses.
        We use that version here and in the rotating frame ahead.
      </p>
      <p>
        A circle keeps their separation fixed and sweeps them around at one steady rate{' '}
        {`$\\omega$`}. That single constant rate is what later lets us ride along in a frame
        spinning at exactly {`$\\omega$`} and freeze both primaries in place. Elliptical orbits
        would make {`$\\omega$`} change, and the whole landscape would breathe in and out instead of
        holding still.
      </p>
    </div>
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">General three-body</span>
        <p>Three comparable masses. All motions coupled. No general solution.</p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Restricted three-body</span>
        <p>
          Two big primaries plus one tiny test mass. Primaries fixed in known orbits. Tractable.
        </p>
      </div>
    </div>
  </>,

  // Section 4: Equipotentials and the five Lagrange points
  <>
    <h2>Gravitational Equipotentials and the Five Lagrange Points</h2>
    <p>
      Look at the energy landscape around the two primaries. The curves of equal potential energy
      are the <strong>equipotentials</strong> you met in conservative force fields. Close to each
      body they form small loops around that body alone. Far from both, a single big loop wraps
      around the pair. Between these regions sit special balance points.
    </p>
    <p>
      <strong>When to use this:</strong> When you want to find where a test mass can sit still
      relative to the two primaries, or how an orbit can pass from one region to another.
    </p>
    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        How many points exist where a test mass can ride along with the two primaries and stay in
        the same spot relative to them?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          Exactly five. They are the Lagrange points. The rest of this section locates each one.
        </p>
      </details>
    </div>
    <h3>Reading the Equipotentials</h3>
    <p>
      Imagine the Earth-Moon pair. Near the Earth, the potential energy curves loop tightly around
      the Earth. Near the Moon, they loop around the Moon. Move outward and the two sets of loops
      meet and merge. Where they meet, the landscape forms saddles and dips. Those are the balance
      points.
    </p>
    <p>
      The energy along the line joining the two bodies blends gravity with the spin of the frame, an
      idea we build into a formula later as the effective potential. Two deep wells mark the
      primaries. Between and beyond them stand three humps. Those humps are {`$L_1$`}, {`$L_2$`},
      and {`$L_3$`}.
    </p>
    <h3>The Three Collinear Points: L1, L2, L3</h3>
    <p>
      Three balance points lie on the straight line through the two primaries. {`$L_1$`} sits
      between them. {`$L_2$`} sits just beyond the smaller primary. {`$L_3$`} sits on the far side
      of the larger primary. Each one is a <strong>saddle point</strong>: a hill in one direction
      and a dip in another.
    </p>
    <p>
      Take {`$L_2$`} as the example. Along the line joining the primaries, {`$L_2$`} is a local low
      point. But step sideways, off the line, and the potential drops away. So {`$L_2$`} is a low
      point one way and a high point the other way. That mixed shape is the signature of a saddle.
    </p>
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        Recall the saddle-versus-minimum test from Newton's laws and integration. A minimum dips
        down every way, so a ball rolled off it rolls back. A saddle dips one way but rises the
        other.
      </p>
      <p>
        At {`$L_2$`}, a sideways nudge sends the test mass downhill and away. There is no restoring
        pull in that direction. That is why {`$L_1$`}, {`$L_2$`}, and {`$L_3$`} cannot trap an
        object on their own.
      </p>
    </div>
    <h3>The Two Triangular Points: L4 and L5</h3>
    <p>
      Two more balance points sit off the line. Each forms an <strong>equilateral triangle</strong>{' '}
      with the two primaries. {`$L_4$`} leads ahead of the smaller primary by 60 degrees. {`$L_5$`}{' '}
      trails behind it by 60 degrees. These are <strong>local minima</strong> in the energy
      landscape, so a test mass near them feels a pull back toward them. Jupiter's Trojan asteroids
      ride in these two spots, as the applications section shows later.
    </p>
    <p>
      All five balance points come from the same condition. The collinear positions {`$L_1$`},{' '}
      {`$L_2$`}, {`$L_3$`} were found by solving the force-balance equation along the axis with a
      few Newton steps. The triangular points {`$L_4$`} and {`$L_5$`} sit at the exact 60-degree
      corners.
    </p>
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Collinear points (L1, L2, L3)</span>
        <p>On the line through the primaries. Saddle points. Unstable: drift away without help.</p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Triangular points (L4, L5)</span>
        <p>At 60-degree corners. Local minima. Stable for small mass ratios.</p>
      </div>
    </div>
  </>,

  // Section 5: The rotating frame, Coriolis and centrifugal forces
  <>
    <h2>The Rotating Frame: Coriolis and Centrifugal Terms</h2>
    <p>
      In the lab frame, the two primaries orbit each other, so the energy landscape spins. That is
      awkward. Instead, ride along with the primaries in a frame that turns at their orbital rate{' '}
      {`$\\omega$`}. Now the two big bodies sit still. The price is two new pseudo-forces: Coriolis
      and centrifugal.
    </p>
    <p>
      <strong>When to use this:</strong> When you want the two primaries to appear fixed so the five
      balance points become visible as true resting spots.
    </p>
    <h3>Newton's Law Inside the Spinning Frame</h3>
    <p>
      Switch to a frame turning at the steady orbital rate {`$\\omega$`}. The two primaries now sit
      still. We study the test mass in the flat plane of the primaries' orbit, the {`$z = 0$`}{' '}
      plane, where {`$z$`} is the height above that plane. Let {`$\\vec{\\rho}$`} be the test mass's
      position measured from the center of mass.
    </p>
    <p>
      You already met rotating frames in non-inertial frames. Moving into a frame spinning at rate{' '}
      {`$\\omega$`} adds two pseudo-forces to Newton's law. The force balance becomes:
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$m\\ddot{\\vec{\\rho}} = \\vec{F}_{\\text{grav}} + m\\omega^2\\vec{\\rho} - 2m\\,\\vec{\\omega}\\times\\dot{\\vec{\\rho}}$$`}</div>
    <p>
      The term {`$m\\omega^2\\vec{\\rho}$`} is the <strong>centrifugal force</strong>. It points
      outward from the rotation center and depends only on position. The term{' '}
      {`$-2m\\,\\vec{\\omega}\\times\\dot{\\vec{\\rho}}$`} is the <strong>Coriolis force</strong>.
      It depends on the test mass's velocity {`$\\dot{\\vec{\\rho}}$`} in the rotating frame, so it
      vanishes for a body at rest.
    </p>
    <p>
      The big win comes from the gravity term. In the rotating frame the two primaries are pinned in
      place, so the gravity field they make stops changing with time. The potential freezes into a
      fixed shape {`$V'$`} with no {`$t$`} inside. A frozen landscape can have fixed resting spots,
      which the spinning lab frame never could.
    </p>
    <div className="lrn-faded">
      <div className="lrn-faded-phase">
        <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
        <p>
          Check that the centrifugal force {`$m\\omega^2\\vec{\\rho}$`} comes from a potential
          energy, step by step:
        </p>
        <ol className="lrn-list">
          <li>
            Guess the centrifugal potential energy {`$U_c = -\\tfrac{1}{2} m \\omega^2 \\rho^2$`},
            where {`$\\rho$`} is the distance from the rotation center.
          </li>
          <li>A force from a potential is minus its slope: {`$\\vec{F} = -\\nabla U_c$`}.</li>
          <li>
            Take the slope in the radial direction: {`$-\\frac{dU_c}{d\\rho} = m \\omega^2 \\rho$`}.
          </li>
          <li>
            This points outward and matches {`$m\\omega^2\\vec{\\rho}$`}. So the centrifugal force
            does come from {`$U_c$`}.
          </li>
        </ol>
      </div>
      <div className="lrn-faded-phase lrn-faded-partial">
        <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
        <p>Sort the two pseudo-forces by what they depend on:</p>
        <ol className="lrn-list">
          <li>Which force grows with the test mass's speed? Name it.</li>
          <li>Which force depends only on distance from the center? Name it.</li>
        </ol>
      </div>
      <div className="lrn-faded-phase">
        <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
        <p>
          Explain in one sentence why the centrifugal force {`$m\\omega^2\\vec{\\rho}$`} pushes the
          test mass outward, away from the rotation center.
        </p>
      </div>
    </div>
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Lab frame</span>
        <p>
          Primaries orbit. The gravity field they make changes with time. No fixed balance points.
        </p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Rotating frame</span>
        <p>
          Primaries fixed. Potential {`$V'$`} is frozen. Centrifugal and Coriolis forces appear.
          Five equilibria show up.
        </p>
      </div>
    </div>
    <h3>Finding the Five Lagrange Points</h3>
    <p>
      To find a resting spot, hold the test mass still in the rotating frame. At rest its velocity
      is zero, so the Coriolis force vanishes. Its acceleration is also zero. The force balance
      collapses to gravity against the outward centrifugal force:
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_{\\text{grav}} + m\\omega^2\\vec{\\rho} = 0$$`}</div>
    <p>
      On the line through the two primaries this becomes one equation in the position along that
      line. Writing it out turns into a fifth-degree polynomial. It has no neat formula, so we solve
      it with a few Newton steps. It gives three roots, the collinear points {`$L_1$`}, {`$L_2$`},{' '}
      {`$L_3$`}.
    </p>
    <p>
      Off the line, the same balance is solved by the two points where the test mass sits at an
      equilateral-triangle corner with the primaries. Those are {`$L_4$`} and {`$L_5$`}. So the one
      balance condition has exactly five solutions in the plane.
    </p>
  </>,

  // Section 6: Effective potential, Jacobi constant, Hill regions, stability
  <>
    <h2>Effective Potential, Hill Regions, and Stability</h2>
    <p>
      Central-force motion folded the angular-momentum term into a one-dimensional energy landscape,
      the <strong>effective potential</strong>. Do the same here in two dimensions: combine the real
      gravity with the centrifugal term into a single landscape. Its shape tells you where a test
      mass can travel and where it is forbidden. The boundaries are{' '}
      <strong>zero-velocity curves</strong>.
    </p>
    <p>
      <strong>When to use this:</strong> To map out which regions a test mass can reach for a given
      energy, and to judge which Lagrange points are stable.
    </p>
    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        A test mass has just enough energy to reach {`$L_1$`} but no more. Can it cross from the
        region around one primary to the region around the other?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          Just barely. At exactly the {`$L_1$`} energy, a narrow neck opens at {`$L_1$`} that links
          the two regions. Below that energy the neck is shut and the mass is trapped near one
          primary.
        </p>
      </details>
    </div>
    <h3>The Effective Potential</h3>
    <p>
      Write the effective potential for the test mass in the rotating frame. It is the gravity from
      both primaries plus the centrifugal piece:
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$V_{\\text{eff}}(x, y) = -\\frac{G m_1}{r_1} - \\frac{G m_2}{r_2} - \\tfrac{1}{2} \\omega^2 (x^2 + y^2)$$`}</div>
    <p>
      Here {`$r_1$`} and {`$r_2$`} are the distances from the test mass to each primary. The two
      gravity terms make deep wells. The centrifugal term tilts the whole surface up away from the
      center. The Lagrange points are the flat spots where the slopes cancel.
    </p>
    <h3>The Jacobi Constant and Zero-Velocity Curves</h3>
    <p>
      In the rotating frame {`$V'$`} no longer depends on time, so one quantity stays fixed along
      any path: the <strong>Jacobi constant</strong> {`$C_J$`}. It combines the effective potential
      with the speed {`$v$`} of the test mass:
    </p>
    <div className="lrn-eq lrn-eq-display">{`$$C_J = -2 V_{\\text{eff}}(x, y) - v^2$$`}</div>
    <p>
      Read it as an energy budget. The speed term {`$v^2$`} can never go below zero, so the test
      mass can only reach places where {`$-2 V_{\\text{eff}} \\geq C_J$`}. Where the two sides are
      equal the speed must be zero, and the test mass turns back. Those turning boundaries are the
      zero-velocity curves.
    </p>
    <p>
      For a high Jacobi constant, the allowed region splits into separate pockets, one around each
      primary. Lower the constant and a neck opens first at {`$L_1$`}, linking the two pockets.
      Lower it more and a neck opens at {`$L_2$`}, letting the mass escape past the smaller body.
      Lower it further and {`$L_3$`} opens too. These allowed pockets are the{' '}
      <strong>Hill regions</strong>.
    </p>
    <p>
      As the Jacobi constant drops, the forbidden region shrinks. The necks open in the order{' '}
      {`$L_1$`}, then {`$L_2$`}, then {`$L_3$`}, exactly as the energy budget grows.
    </p>
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        The Jacobi constant fixes the sum of effective potential and kinetic energy. The test mass
        can only go where its kinetic energy stays positive.
      </p>
      <p>
        The forbidden region is exactly where the effective potential exceeds the budget. As you
        give the mass more energy, the forbidden region pulls back through the lowest passes first,
        which are the saddle points {`$L_1$`}, {`$L_2$`}, {`$L_3$`} in that order.
      </p>
    </div>
    <h3>Which Points Are Stable</h3>
    <p>
      Stability asks what happens after a small nudge. You already met the saddle-versus-minimum
      test in Newton's laws and integration. A minimum dips down every way and pulls a nudge back. A
      saddle lets the nudge grow along the downhill direction. The collinear points {`$L_1$`},{' '}
      {`$L_2$`}, {`$L_3$`} are saddles, so a nudge sends the test mass drifting away. They are{' '}
      <strong>unstable</strong>. Only {`$L_4$`} and {`$L_5$`} can be stable, and only for a small{' '}
      mass parameter {`$\\mu$`}.
    </p>
    <p>
      The stability of {`$L_4$`} and {`$L_5$`} comes from the Coriolis force. A test mass starting
      to slide downhill gets deflected sideways and curls into a small loop around the point. It
      librates instead of escaping. The full test linearizes the rotating-frame equations near the
      point. The motion stays bounded only when one quantity built from those equations (its
      discriminant) stays positive. That happens exactly when {`$\\mu < 0.0385$`}, the Routh value.
      Beyond it the loop opens and the mass escapes.
    </p>
    <p>
      The rotating-frame equations of motion carry Coriolis and centrifugal terms. Near {`$L_4$`}{' '}
      the test mass librates in a small stable loop. At {`$L_1$`} the same tiny nudge sends it
      drifting off, since the collinear point cannot hold it.
    </p>
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Stable equilibrium</span>
        <p>
          {`$L_4$`} and {`$L_5$`}. A small nudge leads to a loop back. Holds for small mass ratio.
        </p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Unstable equilibrium</span>
        <p>
          {`$L_1$`}, {`$L_2$`}, {`$L_3$`}. A small nudge grows. Needs thrusters to hold position.
        </p>
      </div>
    </div>
  </>,

  // Section 7: Applications
  <>
    <h2>Where Lagrange Points Show Up in Space</h2>
    <p>
      Lagrange points are not just math. Spacecraft park near them. Asteroids cluster at them. Each
      use makes a different trade between stability and convenience.
    </p>
    <p>
      <strong>When to use this:</strong> When choosing a parking spot for a telescope or a probe, or
      when explaining why certain asteroids travel in herds.
    </p>
    <div className="lrn-predict">
      <span className="lrn-predict-label">PREDICT</span>
      <p>
        A sun-watching satellite wants a clear, steady view of the Sun. Should it sit exactly on a
        collinear Lagrange point, or orbit around it?
      </p>
      <details className="lrn-predict-reveal">
        <summary>Check your thinking</summary>
        <p>
          It orbits around the point. Sitting exactly on the Sun-Earth line would block its radio
          signals to Earth (the Sun's glare swamps the link). So it traces a loop in the plane
          facing the Sun.
        </p>
      </details>
    </div>
    <h3>SOHO at the Sun-Earth L1 Point</h3>
    <p>
      The SOHO mission (the Solar and Heliospheric Observatory, launched in the 1990s) watches the
      Sun from near {`$L_1$`}, the collinear point between the Sun and the Earth. Because that point
      is a saddle, the satellite cannot just sit there. It would drift off and it would also block
      its own signal path.
    </p>
    <p>
      So SOHO orbits the point in a plane set across the Sun-Earth line. Small steering rockets fire
      now and then to keep it on track. This regular nudging is called{' '}
      <strong>station-keeping</strong>. It is the cost of using an unstable saddle point.
    </p>
    <h3>Trojan Asteroids at Jupiter's L4 and L5</h3>
    <p>
      Jupiter and the Sun form a system with a small mass ratio, so Jupiter's {`$L_4$`} and{' '}
      {`$L_5$`} are stable. Thousands of asteroids ride in those two spots, leading and trailing
      Jupiter by 60 degrees. They are called the <strong>Trojan asteroids</strong>. They have stayed
      there since the early Solar System.
    </p>
    <p>
      A test mass placed near these points does not just sit still. It loops slowly around the point
      in a path called a <strong>tadpole orbit</strong>. If it has more room to wander, it can swing
      across both points in a longer <strong>horseshoe orbit</strong> that passes near {`$L_3$`}.
    </p>
    <div className="lrn-elaborate">
      <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
      <p>
        Asteroids that wandered near those points long ago got curled into stable loops by the
        Coriolis effect. They never escaped, so they piled up into the two visible clusters.
      </p>
    </div>
    <div className="lrn-compare">
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">SOHO at a collinear point</span>
        <p>Saddle. Needs station-keeping thrusters. Chosen for its clear view of the Sun.</p>
      </div>
      <div className="lrn-compare-col">
        <span className="lrn-compare-title">Trojans at L4 and L5</span>
        <p>Stable minima. No thrust needed. Asteroids stay for the age of the Solar System.</p>
      </div>
    </div>
  </>
]

// Practice cards (interleaved across sections)

const practiceCards = [
  {
    q: `Why does the three-body problem have no general closed-form solution, while the two-body problem does?`,
    a: `The two-body problem has only one relative-position vector. Subtracting the two equations gives one clean equation for a single effective body (the reduced-mass form you met in central-force motion). The three-body problem has three relative vectors coupled through $\\vec{G}$, which does not vanish in general. No single subtraction shrinks it to one solvable equation, so most setups become chaotic.`
  },
  {
    q: `In the symmetrical equation $\\ddot{\\vec{s}}_i = -mG \\frac{\\vec{s}_i}{s_i^3} + m_i \\vec{G}$, what condition makes the motion decouple into three Kepler problems?`,
    a: `The coupling vector $\\vec{G}$ must equal zero. This happens for Lagrange's equilateral-triangle solution. There all three sides are equal, so the three terms in $\\vec{G}$ are equal-length vectors. They close into a triangle and sum to zero. With $\\vec{G} = 0$ each side obeys its own inverse-square Kepler problem.`
  },
  {
    q: `Name the two exact special solutions of the three-body problem and state the geometry of each.`,
    a: `Euler's collinear solution keeps the three masses on a single straight line that rotates and scales. Lagrange's equilateral-triangle solution keeps the three masses at the corners of an equilateral triangle. In both, the shape stays rigid while the figure spins, and all bodies share one period.`
  },
  {
    q: `Predict: three equal stars start at rest at the corners of a triangle that is NOT equilateral, then gravity acts. Will their motion be predictable in closed form?`,
    a: `No. Only the exact equilateral-triangle and collinear setups give closed-form motion. A general non-equilateral start has $\\vec{G} \\neq 0$, so the motion is chaotic. Small changes in the start lead to wildly different paths over time.`
  },
  {
    q: `What defines the restricted three-body problem, and why is it tractable?`,
    a: `Two large primaries orbit in fixed circular orbits, and a third mass is so tiny it does not affect them. It is tractable because the test mass cannot push back, so the two big bodies follow a known two-body orbit. That leaves only one unknown path to integrate instead of three coupled ones.`
  },
  {
    q: `A spacecraft of mass 500 kg drifts near the Earth and Moon. Why can we treat this as a restricted three-body problem?`,
    a: `The spacecraft is far too light to move the Earth or Moon, so its pull on them is taken as zero. The Earth and Moon keep their normal orbit (the two primaries), while the spacecraft responds to both pulls (the test mass). This removes the troublesome coupling and leaves one solvable path.`
  },
  {
    q: `How many Lagrange points are there, and how are they arranged?`,
    a: `There are exactly five. Three points ($L_1$, $L_2$, $L_3$) lie on the straight line through the two primaries. Two points ($L_4$, $L_5$) lie off the line, each forming an equilateral triangle with the two primaries. $L_4$ leads by 60 degrees and $L_5$ trails by 60 degrees.`
  },
  {
    q: `Why is $L_2$ called a saddle point rather than a true minimum?`,
    a: `Along the line joining the primaries, $L_2$ is a local low point. But step sideways off the line and the potential drops away, so it is a high point in that direction. A point that is low one way and high another is a saddle. A nudge along the unstable direction sends the test mass drifting off.`
  },
  {
    q: `Transfer: the Sun and Jupiter have a small mass ratio. Where do the Trojan asteroids sit, and why do they stay there?`,
    a: `They sit at Jupiter's $L_4$ and $L_5$, 60 degrees ahead of and behind Jupiter. These triangular points are local minima. They are stable because the mass parameter $\\mu$ for Sun-Jupiter is well under the threshold $\\mu < 0.0385$. The Coriolis force curls any small drift into a stable loop, so the asteroids stay for billions of years.`
  },
  {
    q: `Transfer: a binary star system has two nearly equal-mass stars. Would a dust cloud sit stably at the $L_4$ point?`,
    a: `No. $L_4$ and $L_5$ are stable only when one primary is much heavier than the other, meaning $\\mu < 0.0385$. Two nearly equal stars give $\\mu$ near 0.5, far above that threshold, so the triangular points are unstable. A dust cloud placed there would drift away rather than librate in a loop.`
  },
  {
    q: `What new transformation lets us treat the two primaries as fixed, and what is the price?`,
    a: `We move into a frame rotating at the primaries' orbital rate $\\omega$, using $\\theta' = \\theta - \\omega t$. The two primaries then appear stationary and the potential $V'$ no longer depends on time. The price is two new pseudo-force terms: the velocity-dependent Coriolis term and the position-dependent centrifugal term.`
  },
  {
    q: `Name the two extra forces that appear in the rotating frame and write each one.`,
    a: `The centrifugal force is $m\\omega^2\\vec{\\rho}$, which points outward and depends only on position $\\vec{\\rho}$. The Coriolis force is $-2m\\,\\vec{\\omega}\\times\\dot{\\vec{r}}$, which depends on the test mass's velocity in the rotating frame. Both come from rewriting Newton's law inside a frame spinning at rate $\\omega$.`
  },
  {
    q: `Why does the Coriolis force depend on velocity while the centrifugal force depends only on position?`,
    a: `The Coriolis force carries the velocity factor $\\dot{\\vec{r}}$ in the cross product $\\vec{\\omega}\\times\\dot{\\vec{r}}$. So it vanishes for a test mass at rest. The centrifugal force is $m\\omega^2\\vec{\\rho}$, built from the fixed spin rate $\\omega$ and the position $\\vec{\\rho}$. No velocity appears, so it acts even on a body at rest in the frame.`
  },
  {
    q: `What condition yields the five Lagrange points in the rotating frame?`,
    a: `Set the test mass at rest in the rotating frame, so its velocity and acceleration are both zero. With zero velocity the Coriolis force vanishes. The leftover balance is gravity against the outward centrifugal force: $\\vec{F}_{\\text{grav}} + m\\omega^2\\vec{\\rho} = 0$. That balance has exactly five solutions, the five Lagrange points.`
  },
  {
    q: `Write the effective potential $V_{\\text{eff}}(x,y)$ for the test mass in the rotating frame and explain each piece.`,
    a: `$V_{\\text{eff}}(x,y) = -\\frac{Gm_1}{r_1} - \\frac{Gm_2}{r_2} - \\tfrac{1}{2}\\omega^2(x^2+y^2)$. The first two terms are the gravity wells from each primary, with $r_1$ and $r_2$ the distances to each. The last term is the centrifugal contribution, which tilts the surface up away from the rotation center. The Lagrange points are the flat spots where all slopes cancel.`
  },
  {
    q: `What is a zero-velocity curve, and what does the Jacobi constant control?`,
    a: `A zero-velocity curve is a boundary where the test mass's speed would be zero, so it turns back there. The Jacobi constant fixes the sum of effective potential and kinetic energy in the rotating frame. As you lower the Jacobi constant (more energy budget), the forbidden region shrinks and the allowed Hill regions grow.`
  },
  {
    q: `Predict: you slowly lower the Jacobi constant from a high value. In what order do the necks between regions open?`,
    a: `First a neck opens at $L_1$, connecting the two regions around the primaries. Next a neck opens at $L_2$, letting the test mass escape past the smaller body. Then a neck opens at $L_3$. The order follows the heights of the saddle points, lowest pass first.`
  },
  {
    q: `Which Lagrange points are stable, which are unstable, and what force is responsible for the stable ones?`,
    a: `$L_1$, $L_2$, $L_3$ are saddle points and unstable: a small nudge grows. $L_4$ and $L_5$ are local minima and stable, but only for a small mass ratio. The Coriolis force is responsible: it deflects a sliding test mass sideways and curls its motion into a stable loop around the triangular point.`
  },
  {
    q: `Why is a small mass parameter $\\mu$ needed for $L_4$ and $L_5$ to be stable?`,
    a: `The Coriolis deflection must win against the outward slide near the triangular point. That balance depends on how lopsided the two masses are, which $\\mu$ measures. When $\\mu < 0.0385$ (smaller mass under about 4 percent of the total), Coriolis curls the motion into a stable loop. Above that value the loop opens and the test mass escapes.`
  },
  {
    q: `Transfer: the James Webb-style telescope idea places a probe near the Sun-Earth $L_2$ region. Why does it orbit the point instead of sitting on it?`,
    a: `The collinear point is a saddle, so sitting exactly on it is unstable and the probe would drift off. It also lines up with the Sun-Earth axis, which interferes with a clear signal and view. So the probe traces a loop around the point and uses small thrusters for station-keeping.`
  },
  {
    q: `Transfer: SOHO watches the Sun from near the Sun-Earth $L_1$ point, between the Sun and Earth. Why can it not sit exactly at the point?`,
    a: `That collinear point is a saddle, so the satellite would drift away on its own. Sitting on the Sun-Earth line would also block its radio transmissions to Earth. So SOHO orbits the point in a plane across the Sun-Earth line. It fires small steering rockets for station-keeping.`
  },
  {
    q: `Error-detection: a student claims "$L_4$ is stable because it is a saddle point that traps objects." What is wrong?`,
    a: `Two errors. $L_4$ is a local minimum, not a saddle. And saddle points do not trap objects; they let them drift away along the unstable direction. $L_4$ is stable because it is a minimum and because the Coriolis force curls small drifts into a loop, given a small mass ratio.`
  },
  {
    q: `A test mass librates in a small loop around Jupiter's $L_4$. What is this orbit called, and what is the longer version that crosses both triangular points?`,
    a: `The small loop around one triangular point is a tadpole orbit. The test mass may have enough room to swing across both $L_4$ and $L_5$. Then it traces a longer horseshoe orbit that passes near $L_3$. Both are signatures of motion near the stable triangular points.`
  },
  {
    q: `Method-selection: you want to know quickly whether a test mass can travel from near one primary to near the other, without integrating its full path. What do you use?`,
    a: `Use the Jacobi constant and the zero-velocity curves, not a full trajectory integration. Compute the Jacobi constant from the test mass's energy, then check whether the neck at $L_1$ is open for that value. If the forbidden region has pulled back past $L_1$, travel between the two regions is allowed.`
  },
  {
    q: `Applied: the symmetrical equation introduces total mass $m = m_1 + m_2 + m_3$. Why does the whole total mass appear in the first term rather than a single mass?`,
    a: `Subtract the Newton equations in pairs to form the relative vector $\\vec{s}_1 = \\vec{r}_2 - \\vec{r}_3$. The pull of $m_1$ on both bodies adds in, so all three masses pile into one factor. That factor is the total $m$ multiplying the inverse-square term. This is the three-body version of how reduced mass packages two masses in the two-body problem. The leftover coupling lands in the separate $\\vec{G}$ term.`
  },
  {
    q: `Self-explain: in the effective-potential cross-section along the primary axis, why do two deep wells appear with three humps between and beyond them?`,
    a: `The two wells are the gravity singularities at the two primaries, where $-Gm/r$ plunges down. The humps appear where the inward gravity and the outward centrifugal slope cancel and reverse. Those flat-then-falling spots are $L_1$ between the primaries, $L_2$ beyond the smaller body, and $L_3$ beyond the larger body.`
  },
  {
    q: `Predict: a test mass sits exactly at $L_3$ on the far side of the larger primary, then gets a tiny sideways push. What happens next?`,
    a: `It drifts away. $L_3$ is a collinear saddle point and is unstable. The tiny push has no restoring force to cancel it, so the displacement grows over time. Holding a craft there would require continual station-keeping thrust.`
  },
  {
    q: `Why does moving to the rotating frame make the potential $V'$ time-independent, and why does that matter?`,
    a: `In the rotating frame the two primaries are fixed in place, so the gravity field they create no longer changes with time. A time-independent potential means energy-like quantities (the Jacobi constant) are conserved and the five equilibrium points become true fixed spots. That is what lets us map Hill regions and study stability cleanly.`
  },
  {
    q: `Transfer: the Earth and Moon system. The Moon's mass is about 1.2 percent of the total. Are the Earth-Moon $L_4$ and $L_5$ stable?`,
    a: `Yes. Here $\\mu \\approx 0.012$, well below the stability threshold $\\mu < 0.0385$. So the Earth-Moon triangular points $L_4$ and $L_5$ are stable. Faint dust concentrations have been reported near these points, consistent with stable libration.`
  }
]

// Reference mode

const buildReferenceSections = () => [
  <>
    <h2>The General Three-Body Problem</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Newton's equation for one body</span>
      <div className="ref-formula-eq">{`$$\\ddot{\\vec{r}}_1 = -G m_2 \\frac{\\vec{r}_1 - \\vec{r}_2}{|\\vec{r}_1 - \\vec{r}_2|^3} - G m_3 \\frac{\\vec{r}_1 - \\vec{r}_3}{|\\vec{r}_1 - \\vec{r}_3|^3}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Set up gravity on each of three comparable masses in the center-of-mass frame.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Relative-position vectors and closure</span>
      <div className="ref-formula-eq">{`$$\\vec{s}_i = \\vec{r}_j - \\vec{r}_k, \\qquad \\vec{s}_1 + \\vec{s}_2 + \\vec{s}_3 = 0$$`}</div>
      <p className="ref-formula-desc">
        When to use: Reduce the three position vectors to triangle sides that close on themselves.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Symmetrical equation of motion</span>
      <div className="ref-formula-eq">{`$$\\ddot{\\vec{s}}_i = -m G \\frac{\\vec{s}_i}{s_i^3} + m_i \\vec{G}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Write all three equations in one shape; {`$m = m_1 + m_2 + m_3$`}.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Coupling vector</span>
      <div className="ref-formula-eq">{`$$\\vec{G} = G\\left(\\frac{\\vec{s}_1}{s_1^3} + \\frac{\\vec{s}_2}{s_2^3} + \\frac{\\vec{s}_3}{s_3^3}\\right)$$`}</div>
      <p className="ref-formula-desc">
        When to use: Track the term that blocks a general solution; it vanishes for the equilateral
        case.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Decoupled (Lagrange) form</span>
      <div className="ref-formula-eq">{`$$\\ddot{\\vec{s}}_i = -m G \\frac{\\vec{s}_i}{s_i^3} \\quad (\\vec{G} = 0)$$`}</div>
      <p className="ref-formula-desc">
        When to use: When the three masses sit at equilateral-triangle corners, each side obeys
        Kepler.
      </p>
    </div>

    <h2>Rotating Frame</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Frame transformation</span>
      <div className="ref-formula-eq">{`$$\\theta' = \\theta - \\omega t$$`}</div>
      <p className="ref-formula-desc">
        When to use: Switch into the frame spinning at the primaries' orbital rate so they sit
        still.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Rotating-frame force balance (planar)</span>
      <div className="ref-formula-eq">{`$$m\\ddot{\\vec{r}} = \\vec{F}_{\\text{grav}} + m\\omega^2\\vec{\\rho} - 2m\\,\\vec{\\omega}\\times\\dot{\\vec{r}}$$`}</div>
      <p className="ref-formula-desc">
        When to use: Newton's law inside the frame spinning at {`$\\omega$`}. The extra terms are
        the outward centrifugal force {`$m\\omega^2\\vec{\\rho}$`} and the velocity-dependent
        Coriolis force {`$-2m\\,\\vec{\\omega}\\times\\dot{\\vec{r}}$`}.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Equilibrium condition</span>
      <div className="ref-formula-eq">{`$$\\dot{\\vec{r}} = 0,\\ \\ddot{\\vec{r}} = 0 \\quad \\Longrightarrow \\quad \\vec{F}_{\\text{grav}} + m\\omega^2\\vec{\\rho} = 0$$`}</div>
      <p className="ref-formula-desc">
        When to use: A test mass at rest in the rotating frame has no Coriolis force, so gravity
        must balance centrifugal. This condition has exactly five solutions, the Lagrange points.
      </p>
    </div>

    <h2>Effective Potential and Hill Regions</h2>
    <div className="ref-formula">
      <span className="ref-formula-name">Effective potential</span>
      <div className="ref-formula-eq">{`$$V_{\\text{eff}}(x,y) = -\\frac{Gm_1}{r_1} - \\frac{Gm_2}{r_2} - \\tfrac{1}{2}\\omega^2(x^2+y^2)$$`}</div>
      <p className="ref-formula-desc">
        When to use: Map the rotating-frame energy landscape; flat spots are the Lagrange points.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Jacobi constant</span>
      <div className="ref-formula-eq">{`$$C_J = 2\\,\\Omega(x,y) - v^2$$`}</div>
      <p className="ref-formula-desc">
        When to use: The one conserved quantity in the rotating frame. Here {`$v$`} is the test
        mass's speed and {`$\\Omega = -V_{\\text{eff}}$`} is the effective potential flipped to be
        positive in the wells.
      </p>
    </div>
    <div className="ref-formula">
      <span className="ref-formula-name">Zero-velocity boundary</span>
      <div className="ref-formula-eq">{`$$2\\,\\Omega(x,y) = C_J$$`}</div>
      <p className="ref-formula-desc">
        When to use: Set {`$v = 0$`} to find where the test mass turns back for a given {`$C_J$`};
        this curve bounds the Hill regions.
      </p>
    </div>

    <h2>The Five Lagrange Points</h2>
    <table className="lrn-table">
      <thead>
        <tr>
          <th>Point</th>
          <th>Location</th>
          <th>Type</th>
          <th>Stability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`$L_1$`}</td>
          <td>On the line, between the primaries</td>
          <td>Saddle</td>
          <td>Unstable</td>
        </tr>
        <tr>
          <td>{`$L_2$`}</td>
          <td>On the line, beyond the smaller primary</td>
          <td>Saddle</td>
          <td>Unstable</td>
        </tr>
        <tr>
          <td>{`$L_3$`}</td>
          <td>On the line, beyond the larger primary</td>
          <td>Saddle</td>
          <td>Unstable</td>
        </tr>
        <tr>
          <td>{`$L_4$`}</td>
          <td>60 degrees ahead of the smaller primary</td>
          <td>Local minimum</td>
          <td>Stable (small mass ratio)</td>
        </tr>
        <tr>
          <td>{`$L_5$`}</td>
          <td>60 degrees behind the smaller primary</td>
          <td>Local minimum</td>
          <td>Stable (small mass ratio)</td>
        </tr>
      </tbody>
    </table>

    <h2>Special Solutions and Outcomes</h2>
    <table className="lrn-table">
      <thead>
        <tr>
          <th>Solution</th>
          <th>Geometry</th>
          <th>Key condition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Euler collinear</td>
          <td>Three masses on a line</td>
          <td>{`$\\vec{G} \\neq 0$`}, special mass ratios</td>
        </tr>
        <tr>
          <td>Lagrange triangle</td>
          <td>Equilateral-triangle corners</td>
          <td>{`$\\vec{G} = 0$`}, decouples into Kepler</td>
        </tr>
        <tr>
          <td>Restricted problem</td>
          <td>Two primaries + tiny test mass</td>
          <td>Test mass does not perturb primaries</td>
        </tr>
      </tbody>
    </table>

    <h2>Applications Quick Lookup</h2>
    <table className="lrn-table">
      <thead>
        <tr>
          <th>Application</th>
          <th>Point used</th>
          <th>Why</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SOHO solar observatory</td>
          <td>Sun-Earth {`$L_1$`}</td>
          <td>Clear Sun view; orbits it with station-keeping</td>
        </tr>
        <tr>
          <td>Trojan asteroids</td>
          <td>
            Jupiter {`$L_4$`} and {`$L_5$`}
          </td>
          <td>Stable minima; small mass ratio</td>
        </tr>
        <tr>
          <td>Earth-Moon dust</td>
          <td>
            Earth-Moon {`$L_4$`} and {`$L_5$`}
          </td>
          <td>Stable; Moon is about 1.2 percent of total mass</td>
        </tr>
      </tbody>
    </table>
  </>
]

export default function RestrictedThreeBodyProblem() {
  const sections = buildLearningSections()
  const config = {
    cssPrefix: 'r3bp',
    documentTitle: 'Restricted Three-Body Problem and Lagrange Points - AETHER',
    learning: {
      groupTitle: 'Newtonian Mechanics',
      category: 'Module 1',
      title: 'Restricted Three-Body Problem and Lagrange Points',
      subtitle:
        'The three-body problem has no general solution, but two exact special solutions exist. Shrinking one mass to a test particle gives the tractable restricted problem. In the rotating frame, five Lagrange points appear: three unstable saddles and two stable triangular minima. The effective potential and Jacobi constant map where a test mass can travel.',
      sections
    },
    practice: practiceCards,
    reference: {
      category: 'Quick Reference',
      title: 'Restricted Three-Body Problem and Lagrange Points',
      sections: buildReferenceSections()
    },
    customCss: null
  }
  return <LearningTemplate config={config} />
}
