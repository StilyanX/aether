import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  BlockOnWedge,
  WeightDecomp,
  ConicalBifurcation,
  HangingRope,
  ViscousDecay,
  SHM,
  HarmonicPhasePortrait,
  CenterSaddle,
  DoubleWell,
  Lissajous,
  PendulumPhasePlane,
  InclineBlock
} from '../../../../../components/viz/physics-viz/modules'

export default function NewtonsLawsAndIntegration() {
  const config = {
    cssPrefix: 'nli',
    source:
      'An Introduction to Mechanics (Kleppner & Kolenkow) + Mathematical Methods of Classical Mechanics (Arnold)',
    documentTitle: "Newton's Laws and Integration - AETHER",
    learning: {
      category: 'Module 2',
      groupTitle: 'Part I: Newtonian Mechanics',
      title: "Newton's Laws and Integration",
      subtitle:
        "Three laws that govern all motion, plus the mathematical framework for solving them: Newton's equation as a second-order ODE, phase space, phase flow, and energy conservation.",
      sections: [
        /* ════════════════════════════════════════════════════════════════════════
         SECTION 1: WHY NEWTON'S LAWS MATTER
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Why Newton's Laws Matter</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>You slide a hockey puck across smooth ice and let go. What happens?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The puck keeps moving in a straight line at almost the same speed.</p>
              <p>Real ice has tiny friction, so it slows over many seconds.</p>
              <p>On perfectly smooth ice in space, the puck would travel forever.</p>
            </details>
          </div>

          <p>
            For two thousand years, the standard answer was: a moving thing needs a push to keep
            moving. Stop pushing the cart and it stops. Stop rowing and the boat drifts to a halt.
            That was Aristotle's view, and it ruled physics until the seventeenth century.
          </p>

          <p>
            Galileo and Newton overturned it. A smooth puck on smooth ice keeps going. Carts and
            boats slow down because of friction, not because they "want" to stop. Remove friction
            and motion never ends on its own.
          </p>

          <p>
            Newton's laws are the tool you reach for any time you need to predict how an everyday
            object moves: a falling apple, a swinging rope, a spring, a planet.
          </p>

          <h3>Aristotle vs Newton</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Aristotle</span>
              <p>A force must keep an object moving.</p>
              <p>The natural state of matter is rest.</p>
              <p>Heavier objects fall faster.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Newton</span>
              <p>A force is only needed to change motion.</p>
              <p>Uniform straight-line motion is the natural state.</p>
              <p>All objects fall at the same rate (in vacuum).</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Newton's view matches every experiment. Smoother ice slows the puck more slowly. A
              better vacuum makes a feather and a hammer fall at the same rate. The closer we get to
              a friction-free world, the more Aristotle's view fails.
            </p>
            <p>The illusion that things "want" to stop is just friction we cannot turn off.</p>
          </div>

          <h3>What This Module Delivers</h3>
          <p>By the end of this module you can do five things you cannot do now.</p>
          <ul className="lrn-list">
            <li>State the three laws and explain what each one says.</li>
            <li>Draw a free-body diagram for any object.</li>
            <li>Predict the motion of blocks, ropes, pulleys, and springs.</li>
            <li>Compute gravitational and electric forces between point objects.</li>
            <li>Analyze motion using phase portraits and energy conservation.</li>
          </ul>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 2: THE THREE LAWS
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Three Laws</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You are floating in deep space far from any star. You give a small push to a wrench.
              What happens to the wrench, and what happens to you?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The wrench drifts away in a straight line at constant speed.</p>
              <p>You drift the opposite way, slower if you are heavier.</p>
              <p>Both motions follow Newton's first and third laws.</p>
            </details>
          </div>

          <p>
            The three laws apply in any inertial frame. Reach for them first, before any specific
            force law.
          </p>

          <h3>The First Law</h3>
          <p>An isolated body moves at constant velocity.</p>
          <p>
            Constant velocity means two things at once: constant speed and constant direction. A
            body at rest stays at rest. A moving body keeps the same speed in a straight line.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Inertial Frame</span>
            <div className="lrn-definition-desc">{`A coordinate system in which an isolated body moves at constant velocity. In such a frame Newton's second law $F = ma$ holds without correction. Any frame moving uniformly relative to an inertial frame is also inertial.`}</div>
          </div>

          <p>
            The first law does more than describe motion. It claims that inertial frames exist at
            all. Without that claim, the second law has nowhere to apply.
          </p>

          <h3>The Second Law</h3>
          <p>The net force on a body equals its mass times its acceleration.</p>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F} = m\\vec{a}$$`}</div>

          <p>
            That equation only has meaning once we say what mass and force are. Both come from a
            single experiment: a stretched rubber band.
          </p>

          <h3>Defining Mass with a Rubber Band</h3>
          <p>
            Stretch a rubber band by a fixed amount. Call that the standard pull. Apply it to body 1
            in free space and measure the acceleration $a_1$. Apply the same pull to body 2 and
            measure $a_2$. Define the mass ratio as:
          </p>

          <div className="lrn-eq">{`$$\\frac{m_2}{m_1} = \\frac{a_1}{a_2}$$`}</div>

          <p>
            Pick body 1 to have unit mass. Then every other mass is fixed by a single measurement.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The ratio comes out the same whatever rubber band you use, and however hard you
              stretch it. That is not a definition we forced; it is a fact about the world. If
              different pulls gave different mass ratios, mass itself would not be a well-defined
              quantity.
            </p>
          </div>

          <h3>Defining Force by Superposition</h3>
          <p>
            One stretched rubber band is a unit force. Two identical rubber bands side by side give
            twice that. Forces in different directions add like arrows: place them head to tail and
            draw the total. This is the law of superposition: forces add as vectors.
          </p>

          <div className="lrn-eq">{`$$\\vec{F}_\\text{net} = \\sum_i \\vec{F}_i = m\\vec{a}$$`}</div>

          <p>
            Superposition, like the mass definition, is something we measure rather than prove. Pull
            a body with two rubber bands at right angles and the resulting acceleration is the
            vector sum of the two individual accelerations. Every time.
          </p>

          <h3>The Third Law</h3>
          <p>If body A pushes body B with force $F$, then B pushes A with force $-F$.</p>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}$$`}</div>

          <p>
            The two forces act on different bodies. They never cancel each other inside one body.
          </p>

          <p>
            Push a wall and the wall pushes back on you just as hard. Both forces are real. One acts
            on the wall; one acts on you. You feel only the one on your hand.
          </p>

          <h3>Worked Example: Astronauts and Fictitious Forces</h3>
          <p>
            Two spaceships A and B float in deep space. A pencil drifts nearby. Each ship measures
            the pencil's acceleration relative to itself. A reports the pencil at rest. B reports it
            accelerating at $50$ m/s$^2$. The pencil is the same pencil. So which reading is right?
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Set up coordinates in both frames</span>
              <p className="lrn-step-content">{`Let $x_A$ be the pencil's position in A's frame, $x_B$ its position in B's frame, and $X$ the position of B's origin in A's frame.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Relate the two coordinates</span>
              <p className="lrn-step-content">{`By geometry $x_A = x_B + X$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Differentiate twice in time</span>
              <p className="lrn-step-content">{`This gives $\\ddot{x}_A = \\ddot{x}_B + \\ddot{X}$, so the two accelerations differ by $\\ddot{X}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply Newton's second law in each frame</span>
              <p className="lrn-step-content">{`In A: $F_\\text{true} = m\\ddot{x}_A$. In B (if B uses $F = ma$): $F_\\text{apparent} = m\\ddot{x}_B = F_\\text{true} - m\\ddot{X}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Conclude</span>
              <p className="lrn-step-content">{`A is inertial because the isolated pencil floats. The pencil has no real force on it, so $F_\\text{true} = 0$. B reads $50$ m/s$^2$, meaning B itself accelerates at $-50$ m/s$^2$ relative to A.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the floating pencil tell us A is inertial? Form your answer before reading
              on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                An isolated pencil has zero real force on it. The first law says zero force gives
                zero acceleration in an inertial frame.
              </p>
              <p>
                A measures zero acceleration, so A obeys the first law without correction. That is
                the definition of inertial.
              </p>
            </details>
          </div>

          <p>
            B's reading is real to B, but no physical body produced it. It is a fictitious force, an
            artifact of working in a frame that is itself accelerating:
          </p>

          <div className="lrn-eq">{`$$\\vec{F}_\\text{fictitious} = -m\\ddot{\\vec{R}}$$`}</div>

          <p>{`Here $m$ is the object's mass and $\\ddot{\\vec{R}}$ is the acceleration of B's frame relative to an inertial frame.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Inertial Frame</span>
              <p>An isolated body moves at constant velocity.</p>
              <p>$F = ma$ holds with no correction.</p>
              <p>Real forces only.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Non-inertial Frame</span>
              <p>An isolated body appears to accelerate.</p>
              <p>$F = ma$ requires adding a fictitious force.</p>
              <p>Fictitious forces have no third-law partner.</p>
            </div>
          </div>

          <h3>Three Places Where Newton's Laws Stop Working</h3>
          <p>
            The laws are an excellent description of the everyday world, but they fail in three
            regions. Each one marks the edge of where you can trust them.
          </p>

          <ol className="lrn-list">
            <li>
              At speeds close to the speed of light, the laws need a relativistic correction. One
              common form rescales mass by {`$\\dfrac{m_0}{\\sqrt{1 - \\frac{v^2}{c^2}}}$`}. Below
              about $0.1c$, the correction is under one percent and you can ignore it.
            </li>
            <li>
              The laws describe point masses. Extended bodies (anything with size and shape) need
              integrals over the whole body, covered in Module 3.
            </li>
            <li>
              The laws are awkward for continuous fluids and electromagnetic fields. Fields carry
              their own energy and momentum and move on their own. Treat field problems with field
              equations instead.
            </li>
          </ol>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 3: NEWTON'S EQUATION AS AN ODE (Arnold)
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Newton's Equation as an ODE</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Newton's second law says {`$\\vec{F} = m\\vec{a}$`}. How many initial conditions do
              you need to predict all future motion?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Two: the initial position and the initial velocity. The second-order ODE{' '}
                {`$\\ddot{x} = \\dfrac{F(x, \\dot{x})}{m}$`} requires exactly one position and one
                velocity to fix a unique solution.
              </p>
            </details>
          </div>

          <p>
            Newton's second law is a second-order ordinary differential equation (an{' '}
            <strong>ODE</strong> is an equation that ties a quantity to its own rates of change).
            Once you see it that way, the whole toolkit for solving ODEs becomes available for
            mechanics.
          </p>

          <h3>Newton's Equation from Symmetry</h3>
          <p>The most general form of Newton's equation is:</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\ddot{x} = F(x, \\dot{x}, t)$$`}</div>
          <p>
            {`$\\ddot{x}$`} is acceleration: the rate of change of velocity, which is itself the
            rate of change of position. {`$x$`} is position, {`$\\dot{x}$`} is velocity, {`$t$`} is
            time. The equation says that acceleration equals some force function {`$F$`} that could,
            in principle, depend on all three.
          </p>
          <p>
            The next part is the hardest in this module. We ask: if the laws of physics are the same
            everywhere, at all times, and in every direction, what shape can {`$F$`} possibly take?
            Three short arguments cut almost everything away. Work through them once. The payoff is
            seeing <em>why</em> Newton's equation looks the way it does.
          </p>
          <p>
            Physics should give the same answer no matter when, where, or in what direction you run
            your experiment. That single statement has three pieces. Each piece eliminates a chunk
            of {`$F$`}.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">
                Step 1: Physics does not depend on when you start the clock
              </span>
              <p className="lrn-step-content">
                Shift every time value by a fixed amount {`$s$`}, that is, run the same experiment
                one hour later. If the outcome is identical, then {`$F$`} cannot contain {`$t$`}.
                The equation becomes:
              </p>
              <p className="lrn-step-content">{`$$\\ddot{x} = \\Phi(x, \\dot{x})$$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Step 2: Physics does not depend on where you set up your lab
              </span>
              <p className="lrn-step-content">
                Move the whole lab. Shift every position by the same vector {`$a$`}. Space is{' '}
                <strong>the same everywhere</strong> (the technical term is homogeneous). For{' '}
                {`$n$`} particles (with {`$n$`} the total count and subscripts {`$i, j, k$`}{' '}
                labelling individual particles), the force on particle {`$i$`} can only depend on
                the <em>differences</em> between positions and velocities, never on the raw values:
              </p>
              <p className="lrn-step-content">
                {`$$\\ddot{x}_i = f_i(\\{x_j - x_k,\\, \\dot{x}_j - \\dot{x}_k\\}),\\quad i,j,k = 1, \\ldots, n$$`}
              </p>
              <p className="lrn-step-content">
                Raw positions drop out because shifting all of them by the same {`$a$`} leaves every
                difference unchanged.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Step 3: Physics does not depend on which direction you face
              </span>
              <p className="lrn-step-content">
                Rotate the whole lab. Space is <strong>the same in every direction</strong> (the
                technical term is isotropic). If you rotate every input to the force by a rotation{' '}
                {`$G$`}, the output rotates by the same amount:
              </p>
              <p className="lrn-step-content">{`$$F(Gx, G\\dot{x}) = G \\cdot F(x, \\dot{x})$$`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does time-translation invariance eliminate {`$t$`} from {`$F$`}? Form your answer
              before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                If {`$F$`} depended on {`$t$`}, you could detect the passage of time by watching how
                forces change. That means physics is different at different times, violating the
                principle of relativity.
              </p>
            </details>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does translation invariance in space mean the right-hand side can only depend on{' '}
              {`$x_j - x_k$`}, not on {`$x_j$`} and {`$x_k$`} separately?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                If you shift all positions by the same vector {`$a$`}, the equation must be
                unchanged. The only way to achieve this is if the right-hand side depends only on
                differences {`$x_j - x_k$`}, since those are unchanged by the shift.
              </p>
            </details>
          </div>

          <h3>Newton's First Law (Derived)</h3>
          <p>
            Newton's first law falls out of these three constraints for free. With only one
            particle, there are no other particles to measure relative positions or velocities
            against. The right-hand side has nothing to depend on, so it must be zero, giving{' '}
            {`$\\ddot{x} = 0$`}: zero acceleration, uniform motion. The first law is not an extra
            assumption. It is forced by the symmetries of space and time.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Inertial Coordinate System (Arnold)</span>
            <div className="lrn-definition-desc">
              <p>
                A coordinate system in which Newton's equation holds with {`$F$`} set by the
                physical situation alone, never by fictitious forces from the frame's acceleration.
                A <strong>Galilean transformation</strong> shifts the origin in space and time,
                rotates the axes, or boosts to a frame moving at constant velocity. Any Galilean
                transformation of an inertial frame produces another inertial frame.
              </p>
            </div>
          </div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              The relativity principle applies only to closed systems. If you isolate part of a
              larger system, the rest acts as an external influence. The equation of motion for the
              isolated part can then depend on time explicitly.
            </p>
          </div>

          <h3>Examples of Mechanical Systems</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A spring pulls a mass back toward its rest position with a force that grows in
              proportion to how far you stretched it. What kind of motion do you expect: bounded,
              unbounded, decaying, growing?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Bounded oscillation. The mass swings back and forth around the rest position forever
                (with no friction). The equation turns out to be {`$\\ddot{x} = -\\alpha^2 x$`}, and
                the picture in the phase plane is a closed loop.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Falling Stone (Uniform Gravity)</span>
              <p>{`$$\\ddot{x} = -g,\\quad U = gx$$`}</p>
              <p>
                Constant gravitational field near Earth's surface. Valid when{' '}
                {`$r \\ll r_{\\text{Earth}}$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Inverse-Square Gravity</span>
              <p>{`$$\\ddot{x} = -g\\frac{r_0^2}{r^2},\\quad U = -\\frac{k}{r}$$`}</p>
              <p>
                Used for large distances. Force weakens as {`$\\frac{1}{r^2}$`}. Models planetary
                orbits.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Harmonic Oscillator</span>
              <p>{`$$\\ddot{x} = -\\alpha^2 x,\\quad U = \\tfrac{\\alpha^2 x^2}{2}$$`}</p>
              <p>Spring-mass system. Solutions are sinusoidal. Phase curves are ellipses.</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the negative sign in {`$\\ddot{x} = -\\alpha^2 x$`} guarantee oscillation?
              What would happen if the sign were positive?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The negative sign creates a restoring force: displacement in one direction produces
                acceleration in the opposite direction. If the sign were positive, displacement
                would create acceleration in the same direction, causing exponential runaway growth
                instead of oscillation.
              </p>
            </details>
          </div>

          <p>
            A system is called <strong>conservative</strong> if every force in it comes from a
            single shared function {`$U(x_1, \\ldots, x_n)$`} called the{' '}
            <strong>potential energy</strong>. For such a system of {`$n$`} particles with masses{' '}
            {`$m_i$`}:
          </p>
          <div className="lrn-eq">
            {`$$m_i \\ddot{x}_i = -\\frac{\\partial U}{\\partial x_i}, \\quad i = 1, \\ldots, n$$`}
          </div>
          <p>
            {`$\\frac{\\partial U}{\\partial x_i}$`} reads "how steeply {`$U$`} changes when
            particle {`$i$`} moves." The minus sign means the force on each particle points downhill
            on the energy landscape, toward lower potential.
          </p>

          <p>
            In plain words: photograph a billiard table at one instant, recording every ball's
            position and speed, and you can in principle predict every future collision. The only
            requirement is that the force function be smooth (no sudden jumps).
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Principle of Determinacy</span>
            <div className="lrn-definition-desc">
              <p>
                The positions and velocities of all particles at one instant uniquely determine all
                future motion. Formally: the ODE {`$\\ddot{x} = F(x, \\dot{x})$`} together with the
                initial state {`$(x_0, \\dot{x}_0)$`} (position {`$x_0$`} and velocity{' '}
                {`$\\dot{x}_0$`} at time zero) has a unique solution, provided {`$F$`} is smooth.
              </p>
            </div>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 4: PHASE PLANE AND INTEGRATION (Arnold Ch.2)
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Phase Plane and Integration</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A ball rolls in a bowl with potential energy {`$U(x)$`}. It starts near the bottom. Do
              you expect it to oscillate forever, escape, or do something else? How would a phase
              plane diagram show these possibilities?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It oscillates. The phase portrait shows closed loops (energy level sets) around the
                stable minimum. Escape requires enough energy to surpass the local maximum of{' '}
                {`$U$`}.
              </p>
            </details>
          </div>

          <h3>Systems with One Degree of Freedom</h3>
          <p>
            A <strong>one-degree-of-freedom (1-DOF) system</strong> is one whose position can be
            described by a single number: a bead on a wire, a mass on a spring, a pendulum swinging
            in a single plane. There is one position coordinate {`$x$`} and one velocity coordinate{' '}
            {`$\\dot{x}$`}. The 2D plane of all possible pairs {`$(x, \\dot{x})$`} is called the{' '}
            <strong>phase space</strong>, and it holds every state the system can ever be in.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Total Energy</span>
            <div className="lrn-definition-desc">
              <p>{`$$E = T + U = \\frac{1}{2}\\dot{x}^2 + U(x)$$`}</p>
              <p>
                {`$\\frac{1}{2}\\dot{x}^2$`} is kinetic energy (energy of motion). {`$U(x)$`} is
                potential energy (energy stored in position). Their sum {`$E$`} is constant as the
                system moves.
              </p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of Energy Conservation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Compute the time derivative:{' '}
                {`$$\\frac{d}{dt}(T + U) = \\dot{x}\\ddot{x} + \\frac{dU}{dx}\\dot{x} = \\dot{x}\\left(\\ddot{x} + \\frac{dU}{dx}\\right)$$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Newton's equation says {`$\\ddot{x} = f(x) = -\\frac{dU}{dx}$`}. Substituting:{' '}
                {`$$= \\dot{x}\\left(-\\frac{dU}{dx} + \\frac{dU}{dx}\\right) = \\dot{x} \\cdot 0 = 0$$`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The key step is substituting Newton's equation. Why does conservation of energy always
              rely on this cancellation?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The conservation of energy is not independent of Newton's second law. It is a
                consequence. The bracket {`$\\ddot{x} + \\frac{dU}{dx}$`} is exactly zero because
                Newton's law says {`$\\ddot{x} = -\\frac{dU}{dx}$`}. Without Newton's law, the
                bracket would not vanish and energy would not be conserved.
              </p>
            </details>
          </div>

          <h3>The Phase Plane</h3>
          <p>
            The phase plane is a map. Horizontal axis: position. Vertical axis: velocity. A single
            dot on the map records the entire state of the system at one instant. As time runs, the
            dot moves and traces out a path called a <strong>phase curve</strong>.
          </p>
          <p>Write Newton's equation as a system of two first-order equations:</p>
          <div className="lrn-eq">{`$$\\dot{x} = y, \\quad \\dot{y} = f(x)$$`}</div>
          <p>
            Here {`$y = \\dot{x}$`} is the velocity, so the pair {`$(x, y)$`} is the dot on the map.
            The total energy {`$E = \\tfrac{1}{2}y^2 + U(x)$`} stays constant along each phase
            curve. Phase curves are like height contour lines on a hiking map: each curve marks a
            single fixed value of total energy.
          </p>

          <PendulumPhasePlane />

          <h3>Simple Harmonic Oscillator</h3>
          <p>The basic oscillation equation is:</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\ddot{x} = -x$$`}</div>
          <p>
            Here {`$U(x) = \\frac{x^2}{2}$`}. The energy level sets{' '}
            {`$\\frac{1}{2}y^2 + \\frac{x^2}{2} = E$`} are circles centered at the origin. The phase
            flow is rotation of the phase plane through angle {`$t$`}. After time {`$2\\pi$`}, the
            point returns to the start.
          </p>

          <HarmonicPhasePortrait />

          <h3>Equilibrium Positions</h3>
          <p>
            A point in phase space is an <strong>equilibrium</strong> if both {`$\\dot{x} = 0$`}{' '}
            (the system is at rest) and {`$f(x) = 0$`} (no force pushes it). Equilibria sit at the
            critical points of {`$U$`}: the spots where the slope of the potential is zero.
          </p>

          <CenterSaddle />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Stable Equilibrium (Center)</span>
              <p>
                Local minimum of {`$U$`}. A small push returns. Phase portrait shows closed loops
                surrounding the equilibrium.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Unstable Equilibrium (Saddle)</span>
              <p>
                Local maximum of {`$U$`}. A small push diverges. Phase curves approach from some
                directions and flee in others.
              </p>
            </div>
          </div>

          <h3>Separatrix and Qualitative Behavior</h3>
          <p>
            The <strong>separatrix</strong> is the phase curve passing through a saddle point (at
            the energy level of a local maximum of {`$U$`}). It separates regions of qualitatively
            different motion.
          </p>
          <ul className="lrn-list">
            <li>Inside the separatrix: closed orbits (oscillation)</li>
            <li>Outside: open orbits (the system passes through and escapes)</li>
            <li>On the separatrix: takes infinite time to reach the saddle point</li>
          </ul>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A potential {`$U(x)$`} has two local minima and one local maximum between them. What
              do the energy level curves look like as {`$E$`} increases from the lower minimum to
              the maximum?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Start as a small closed loop around the minimum. Grow as {`$E$`} increases. Reach
                the saddle point as a figure-eight shaped separatrix. Open up into an unbounded
                curve above the maximum.
              </p>
            </details>
          </div>

          <DoubleWell />

          <h3>Key Formulas for 1-DOF Systems</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Time Between Two Points</span>
            <div className="lrn-definition-desc">
              <p>
                From {`$E = \\tfrac{1}{2}\\dot{x}^2 + U(x)$`}, we get{' '}
                {`$\\dot{x} = \\pm\\sqrt{2(E - U(x))}$`}. Separating variables:
              </p>
              <p>{`$$t_2 - t_1 = \\int_{x_1}^{x_2} \\frac{dx}{\\sqrt{2(E - U(x))}}$$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Period of Small Oscillations</span>
            <div className="lrn-definition-desc">
              <p>Near a stable equilibrium at position {`$\\xi$`}:</p>
              <p>{`$$T_0 = \\frac{2\\pi}{\\sqrt{U''(\\xi)}}$$`}</p>
              <p>
                Here {`$U''(\\xi)$`} is the second derivative of {`$U$`} at the equilibrium. Larger
                curvature means shorter period.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Period-Area Relation</span>
            <div className="lrn-definition-desc">
              <p>
                The period of an orbit at energy {`$E$`} equals the rate of change of the enclosed
                area {`$S$`} with energy:
              </p>
              <p>{`$$T = \\frac{dS}{dE}$$`}</p>
            </div>
          </div>

          <h3>Phase Flow</h3>
          <p>
            The <strong>phase flow</strong> is what you get by pressing "play" on the whole phase
            plane at once. Every dot moves along its own curve in parallel. Write {`$g^t$`} for the
            map that takes each starting dot {`$M$`} to where it ends up after time {`$t$`}, so that{' '}
            {`$g^t M = M(t)$`}.
          </p>
          <div className="lrn-eq">{`$$g^{t+s} = g^t \\circ g^s$$`}</div>
          <p>
            In words: running the system for time {`$t$`} and then for an extra time {`$s$`} is the
            same as running it once for time {`$t + s$`}. Each snapshot {`$g^t$`} is a smooth,
            perfectly reversible reshuffling of the plane (the mathematical name is a{' '}
            <strong>diffeomorphism</strong>). Smooth means no tearing or folding. Reversible means
            you can always run time backward and recover the starting dot. One consequence is that
            exactly one phase curve passes through every point, so phase curves never cross.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Phase Flow</span>
              <p>
                The whole collection of maps {`$g^t$`} acting on all dots simultaneously. The entire
                phase plane in motion at once.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Phase Curve</span>
              <p>
                The path of one specific dot: {`$\\{g^t M : t \\in \\mathbb{R}\\}$`} for fixed
                starting point {`$M$`}. One orbit within the flow.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why do phase curves never cross? Newton's equation {`$\\ddot{x} = f(x)$`} uniquely
              determines the acceleration given position and velocity. Two trajectories starting at
              the same point would have the same acceleration, same velocity change, same future, so
              they are the same trajectory. This requires smoothness of {`$f$`}.
            </p>
          </div>

          <h3>Systems with Two Degrees of Freedom</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two independent harmonic oscillators are coupled only through energy. What do their
              joint trajectories look like if their frequencies are equal? What if the frequencies
              are different?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Equal frequencies: closed ellipses. Different rational frequencies: closed Lissajous
                figures. Irrational frequencies: trajectories that fill a rectangular region
                densely.
              </p>
            </details>
          </div>

          <p>
            A <strong>2-DOF system</strong> needs two position numbers and two velocity numbers to
            describe its state. The phase space is now four-dimensional. The total energy is:
          </p>
          <div className="lrn-eq">
            {`$$E = \\frac{1}{2}(\\dot{x}_1^2 + \\dot{x}_2^2) + U(x_1, x_2) = E_0$$`}
          </div>

          <h3>Spherical Pendulum and Lissajous Figures</h3>
          <p>
            For {`$U = \\tfrac{1}{2}(x_1^2 + x_2^2)$`}, the equations decouple:
            {`$$\\ddot{x}_1 = -x_1, \\quad \\ddot{x}_2 = -x_2$$`}
          </p>
          <p>
            Each coordinate is an independent harmonic oscillator. The orbit in the {`$(x_1, x_2)$`}{' '}
            plane is a closed ellipse. This is the spherical pendulum with small oscillations.
          </p>

          <p>When the two frequencies differ:</p>
          <div className="lrn-eq">
            {`$$\\ddot{x}_1 = -x_1, \\quad \\ddot{x}_2 = -\\omega^2 x_2$$`}
          </div>
          <p>
            Solutions are {`$x_1(t) = A\\cos(t + \\phi_1)$`} and{' '}
            {`$x_2(t) = B\\cos(\\omega t + \\phi_2)$`}. The orbit in the {`$(x_1, x_2)$`} plane is a{' '}
            <strong>Lissajous figure</strong>.
          </p>

          <Lissajous />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rational {`$\\omega$`} (Closed Orbit)</span>
              <p>
                If {`$\\omega = \\frac{p}{q}$`} in lowest terms, the orbit repeats after {`$q$`}{' '}
                oscillations of {`$x_1$`} and {`$p$`} of {`$x_2$`}. The Lissajous figure closes on
                itself.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Irrational {`$\\omega$`} (Dense Orbit)</span>
              <p>
                The orbit never closes. Given long enough, it passes arbitrarily close to every
                point inside a rectangle. That is what mathematicians call <em>dense</em>: no empty
                patch, however small, ever stays untouched.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              When {`$\\omega$`} is irrational, the orbit never closes. Why? What does this tell you
              about the relationship between the two frequencies?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                For the orbit to close, both oscillators must return to their starting state
                simultaneously. This requires the ratio of their periods to be a whole-number
                fraction. If {`$\\omega$`} is irrational, the two periods share no whole-number
                ratio. There is no time {`$T$`} that is a whole multiple of both periods. The orbit
                never repeats.
              </p>
            </details>
          </div>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 5: STANDARDS AND UNITS
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Standards and Units</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to weigh an unknown rock using only a known $1$ kg block, a rubber band, and
              a stopwatch. How would you do it?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Stretch the rubber band by a fixed amount and pull the $1$ kg block. Time how long
                it takes to cross a known distance. Compute its acceleration $a_1$.
              </p>
              <p>{`Repeat with the rock to get $a_2$. The rock's mass is $m_2 = (1\\,\\text{kg})\\,\\dfrac{a_1}{a_2}$.`}</p>
            </details>
          </div>

          <p>
            Use SI units (meters, kilograms, seconds) for almost all physics. The older cgs system
            (centimeters, grams, seconds) only matters when reading texts that still use it.
          </p>

          <p>Newton's three laws need three primary standards: length, time, and mass.</p>

          <h3>Length</h3>
          <p>
            The first scientific meter was tied to the Earth: one meter equalled{' '}
            {`$\\frac{1}{40{,}000{,}000}$`} of the Earth's circumference through Paris. That value
            was then cast into a platinum-iridium bar at Sèvres, France.
          </p>
          <p>
            In 1960 the meter was redefined as $1{`,`}650{`,`}763.73$ wavelengths of orange light
            from krypton-86. Atomic standards are stable; bars warp with temperature.
          </p>
          <p>
            Today the meter is defined through the speed of light: one meter is the distance light
            travels in vacuum during {`$\\frac{1}{299{,}792{,}458}$`} of a second. Length is now
            derived from time.
          </p>

          <h3>Time</h3>
          <p>
            The second was originally {`$\\frac{1}{86{,}400}$`} of a mean solar day. But Earth's
            rotation drifts and slows, so the second drifted with it.
          </p>
          <p>
            Since 1967 the second has been defined by atoms: one second is $9{`,`}192{`,`}631{`,`}
            770$ cycles of the radiation from a specific cesium-133 transition. Two cesium clocks
            agree to better than one part in $10^{14}$.
          </p>

          <h3>Mass</h3>
          <p>
            The kilogram was the last primary unit tied to a physical object. For more than a
            century the standard was a single platinum-iridium cylinder kept at Sèvres, with copies
            calibrated against it. Atomic methods could not match the precision of length and time
            for mass, so the artifact stayed in use longer.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Atomic standards work because every atom of a given type emits light at exactly the
              same frequency. Quantum mechanics guarantees this is identical across the universe,
              forever. No two metal bars are identical in the same way.
            </p>
          </div>

          <h3>SI vs cgs</h3>
          <p>The two systems differ only in their length and mass units. The second is shared.</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>SI Unit</th>
                <th>cgs Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Length</td>
                <td>meter (m)</td>
                <td>centimeter (cm)</td>
              </tr>
              <tr>
                <td>Mass</td>
                <td>kilogram (kg)</td>
                <td>gram (g)</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>second (s)</td>
                <td>second (s)</td>
              </tr>
              <tr>
                <td>Force</td>
                <td>{`newton (N) = $\\text{kg}\\,\\text{m}/\\text{s}^2$`}</td>
                <td>{`dyne = $\\text{g}\\,\\text{cm}/\\text{s}^2$`}</td>
              </tr>
              <tr>
                <td>Energy</td>
                <td>{`joule (J) = $\\text{N}\\,\\text{m}$`}</td>
                <td>{`erg = $\\text{dyne}\\,\\text{cm}$`}</td>
              </tr>
            </tbody>
          </table>

          <p>One newton equals $10^5$ dynes. One joule equals $10^7$ ergs.</p>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 6: HOW TO SOLVE FORCE PROBLEMS
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>How to Solve Force Problems</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two astronauts pull on opposite ends of a massless rope in free space. Alex is twice
              as strong as Bob. Who pulls harder?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They pull with the same force. A massless rope has no inertia, so any net force on
                it would give it infinite acceleration.
              </p>
              <p>
                The rope tension is set by the weaker grip. Alex cannot pull harder than Bob holds.
              </p>
            </details>
          </div>

          <p>
            Use this procedure on every problem where two or more bodies interact through forces or
            constraints. It scales from a block on a wedge to a freight train.
          </p>

          <h3>The Six-Step Procedure</h3>

          <ol className="lrn-list">
            <li>
              Mentally subdivide the system into separate pieces. Treat each piece as a particle.
            </li>
            <li>Draw a free-body diagram for each piece. Show every external force as an arrow.</li>
            <li>Choose inertial coordinates. Write the equations of motion piece by piece.</li>
            <li>Apply Newton's third law between any two pieces that touch.</li>
            <li>
              Write constraint equations. These are geometric ties differentiated twice in time.
            </li>
            <li>Solve the resulting algebraic system for the unknowns.</li>
          </ol>

          <p>
            The diagram below shows what step 2 produces: weight, normal, and friction acting on a
            block.
          </p>

          <BlockOnWedge />

          <h3>Worked Example: Astronauts' Tug-of-War</h3>
          <p>
            Two astronauts in free space hold a massless rope. Alex (mass $M_A$) pulls one end, Bob
            (mass $M_B$) the other.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Subdivide the system</span>
              <p className="lrn-step-content">Three pieces: Alex, the rope, Bob.</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Force on the rope</span>
              <p className="lrn-step-content">{`Alex pulls one end with $F_A$ outward; Bob pulls the other end with $F_B$ outward.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Massless rope condition</span>
              <p className="lrn-step-content">{`Newton's second law on the rope: $F_A - F_B = m_\\text{rope} a_\\text{rope}$. With $m_\\text{rope} = 0$, we get $F_A = F_B$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Equations for the astronauts</span>
              <p className="lrn-step-content">{`$F_A = M_A a_A$ and $F_B = M_B a_B$ (taking inward as positive for each astronaut).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Conclude</span>
              <p className="lrn-step-content">{`Both pull with the same force, limited by the weaker grip. Their accelerations differ: heavier astronaut moves slower.`}</p>
            </div>
          </div>

          <h3>Worked Example: Freight Train</h3>
          <p>
            A locomotive pulls $N$ identical freight cars (each mass $M$) with a horizontal force
            $F$. Friction is negligible. Find the acceleration and the force in the coupling between
            car $k$ and car $k+1$ (numbering from the back).
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Whole-system acceleration</span>
              <p className="lrn-step-content">{`Total mass $NM$, total force $F$, so $a = \\dfrac{F}{NM}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Force on the back $k$ cars only</span>
              <p className="lrn-step-content">{`The coupling between car $k$ and car $k+1$ must accelerate the back $k$ cars. So that coupling carries $F_k = (kM)a = \\dfrac{k}{N}F$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Read off the answer</span>
              <p className="lrn-step-content">{`The coupling closest to the locomotive carries the largest tension; the one between the last two cars carries $\\dfrac{F}{N}$.`}</p>
            </div>
          </div>

          <h3>Worked Example: Constraint Equations</h3>
          <p>
            A constraint is a geometric rule that limits how the parts can move. Differentiate that
            rule twice in time to get a relation among accelerations.
          </p>

          <p>
            <strong>Subpart (a): block on a wedge.</strong> A wedge of angle $\theta$ moves
            horizontally at {`$\\ddot{X}$`}. A block sits on the wedge and slides along it.
          </p>

          <div className="lrn-eq">{`$$x - X = (h - y)\\cot\\theta \\;\\Rightarrow\\; \\ddot{x} - \\ddot{X} = -\\ddot{y}\\cot\\theta$$`}</div>

          <p>
            <strong>Subpart (b): masses on a string over an accelerating pulley.</strong> Two masses
            on either side of a pulley whose center accelerates upward at $A$.
          </p>

          <div className="lrn-eq">{`$$A = \\tfrac{1}{2}(\\ddot{y}_1 + \\ddot{y}_2)$$`}</div>

          <p>
            <strong>Subpart (c): two-pulley hoist.</strong> A hand pulls on one end of the rope,
            lifting a block via two pulleys.
          </p>

          <div className="lrn-eq">{`$$\\ddot{X} = -\\tfrac{1}{2}\\ddot{x}$$`}</div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why must we differentiate the geometric relation twice in time, not just once?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Newton's second law involves acceleration, not position or velocity. Differentiating
                twice converts the geometric tie into a relation among accelerations.
              </p>
              <p>Then we can substitute the constraint into the equations of motion and solve.</p>
            </details>
          </div>

          <WeightDecomp />
          <InclineBlock />

          <h3>Worked Example: Block on a String, Horizontal Whirl</h3>
          <p>
            A mass $m$ on a string of length $R$ whirls in a horizontal circle at constant speed
            $v$. Gravity is negligible. Find the tension.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Use polar coordinates</span>
              <p className="lrn-step-content">{`Radial acceleration is $a_r = \\ddot{r} - r\\dot\\theta^2$. Here $r = R$ and $\\dot{r} = \\ddot{r} = 0$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Plug in</span>
              <p className="lrn-step-content">{`$a_r = -R\\left(\\dfrac{v}{R}\\right)^2 = -\\dfrac{v^2}{R}$, pointing toward the center.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply Newton's second law radially</span>
              <p className="lrn-step-content">{`The string pulls inward with tension $T$, so $-T = m\\left(-\\dfrac{v^2}{R}\\right)$, giving $T = \\dfrac{mv^2}{R}$.`}</p>
            </div>
          </div>

          <h3>Worked Example: The Conical Pendulum</h3>
          <p>
            A mass $M$ on a massless rod of length $\ell$ rotates at constant $\omega$. The rod
            makes angle $\alpha$ with the vertical. Find $\alpha$.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Vertical equilibrium</span>
              <p className="lrn-step-content">{`$T\\cos\\alpha - W = 0$, so $T\\cos\\alpha = Mg$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Horizontal centripetal equation</span>
              <p className="lrn-step-content">{`$T\\sin\\alpha = M(\\ell\\sin\\alpha)\\omega^2 = M\\ell\\omega^2 \\sin\\alpha$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Two solutions</span>
              <p className="lrn-step-content">{`Either $\\sin\\alpha = 0$ ($\\alpha = 0$, always valid), or divide by $\\sin\\alpha$ to get $\\cos\\alpha = \\dfrac{g}{\\ell\\omega^2}$ (valid only if $\\omega^2 \\ge \\dfrac{g}{\\ell}$).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Stability</span>
              <p className="lrn-step-content">{`For $\\omega < \\omega_c = \\sqrt{\\dfrac{g}{\\ell}}$, only $\\alpha = 0$ exists and it is stable. For $\\omega > \\omega_c$, $\\alpha = 0$ becomes unstable and the tilted solution is the stable one.`}</p>
            </div>
          </div>

          <ConicalBifurcation />

          <h3>Proof: Inertial Frame Equivalence</h3>
          <p>
            Any frame moving at constant velocity relative to an inertial frame is itself inertial.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Let A be inertial. Let B move at constant velocity $\\vec{V}$ relative to A, so the origin of B sits at $\\vec{R}(t) = \\vec{V} t$ in A.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`A particle at position $\\vec{r}_A$ in A is at $\\vec{r}_B = \\vec{r}_A - \\vec{R}(t)$ in B.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Take two time derivatives. Since $\\vec{R}$ is linear in $t$, $\\ddot{\\vec{R}} = 0$, leaving $\\ddot{\\vec{r}}_B = \\ddot{\\vec{r}}_A$. Both observers measure the same acceleration, so $F = ma$ holds equally in A and B.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <p>{`If B accelerates relative to A ($\\ddot{\\vec{R}} \\ne 0$), the two frames disagree by an extra term $-M\\ddot{\\vec{R}}$. That extra term is the fictitious force.`}</p>
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 7: EVERYDAY FORCES
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>Everyday Forces</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>You drop a feather and a hammer in a vacuum chamber. Which hits the floor first?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They hit at the same time. In vacuum, only gravity acts, and gravity gives all
                objects the same acceleration $g$.
              </p>
              <p>This was tested on the Moon by Apollo 15 with a hammer and a falcon feather.</p>
            </details>
          </div>

          <p>
            Use these force laws after you have applied Newton's laws and the six-step procedure.
            Each one is a specific expression for {`$F$`} that you substitute into $F = ma$.
          </p>

          <h3>Gravity</h3>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_{ab} = -\\frac{G\\, M_a M_b}{r^2}\\,\\hat{r}_{ab}$$`}</div>

          <p>{`Here $M_a$ and $M_b$ are the two masses, $r$ is the distance between them, and $\\hat{r}_{ab}$ is a unit arrow (length 1) pointing from mass $b$ toward mass $a$. The gravitational constant $G = 6.67 \\times 10^{-11}$ N$\\cdot$m$^2$/kg$^2$ sets the overall strength. Two 1-kg masses one meter apart pull on each other with about $7 \\times 10^{-11}$ N. That tiny number is the reason we never feel gravity from everyday objects.`}</p>

          <p>The minus sign means the force is attractive: each mass pulls the other inward.</p>

          <p>
            The same letter $m$ appears in $F = ma$ (the <em>inertial mass</em>, which measures
            resistance to acceleration) and in {`$F = \\dfrac{GMm}{r^2}$`} (the{' '}
            <em>gravitational mass</em>, which measures how strongly the object responds to
            gravity). In principle these are two different quantities. Experiments match them to one
            part in $10^{11}$.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              If the two masses differed, two materials would fall at different rates. Galileo's
              tower experiments and modern Eötvös tests have ruled this out to extreme precision.
            </p>
            <p>
              Einstein later promoted the match to a principle: the equivalence principle is the
              starting point of general relativity, where gravity becomes the curvature of
              spacetime.
            </p>
          </div>

          <div className="lrn-eq">{`$$W = mg, \\qquad g = \\frac{GM_e}{R_e^2} \\approx 9.80\\ \\text{m/s}^2$$`}</div>

          <h3>Worked Example: Turtle in an Elevator</h3>
          <p>
            A turtle of mass $M$ stands in an elevator that accelerates upward at rate $a$. Find the
            floor's normal force on the turtle.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Choose an inertial frame outside the elevator</span>
              <p className="lrn-step-content">{`Let the upward direction be positive.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Forces on the turtle</span>
              <p className="lrn-step-content">{`Gravity pulls down with $W = Mg$. The floor pushes up with $N$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply Newton's second law</span>
              <p className="lrn-step-content">{`$N - Mg = Ma$, so $N = M(g + a)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Sanity checks</span>
              <p className="lrn-step-content">{`If $a = 0$, $N = Mg$ as expected. If $a = -g$ (free fall), $N = 0$ and the turtle floats.`}</p>
            </div>
          </div>

          <h3>The Normal Force and Friction</h3>

          <div className="lrn-eq">{`$$0 \\le f_s \\le \\mu_s N \\qquad\\text{(static)}$$`}</div>
          <div className="lrn-eq">{`$$f_k = \\mu_k N \\qquad\\text{(kinetic)}$$`}</div>

          <p>
            Static friction takes whatever value is needed to prevent motion, up to a maximum. Once
            the surface slips, kinetic friction takes over at a fixed value, usually a little
            smaller than the maximum static value.
          </p>

          <p>{`Both kinds are independent of the apparent contact area. Real contact happens only at microscopic high points (asperities), and the true contact area scales with the load you press down with, not with the size of the surface.`}</p>

          <h3>Worked Example: Block on a Wedge with Friction</h3>
          <p>
            A block of mass $m$ sits on a fixed wedge of angle $\theta$. The coefficient of static
            friction is $\mu$. Find the angle at which the block starts sliding.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Free-body diagram</span>
              <p className="lrn-step-content">{`Three forces: weight $W = mg$ pointing down, normal $N$ perpendicular to the slope, friction $f$ along the slope (pointing up the incline, since at the threshold the block is about to slide downhill).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Resolve along slope axes</span>
              <p className="lrn-step-content">{`Perpendicular to slope: $N = W\\cos\\theta$. Along slope: $W\\sin\\theta = f$ (just before sliding).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply the static friction limit</span>
              <p className="lrn-step-content">{`At the threshold $f = \\mu N$, so $W\\sin\\theta = \\mu W\\cos\\theta$, giving $\\tan\\theta_\\text{max} = \\mu$.`}</p>
            </div>
          </div>

          <h3>Tension in a String</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Tension</span>
            <div className="lrn-definition-desc">{`The force one piece of string exerts on the next. In a massless string with no friction, tension is uniform along the string. With mass or applied loads, tension varies along the string.`}</div>
          </div>

          <h3>Worked Example: Tension in a Hanging Rope</h3>
          <p>
            A uniform rope of mass $M$ and length $L$ hangs from a tree limb. Find the tension at
            distance $x$ from the bottom.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Free-body diagram of the lower section</span>
              <p className="lrn-step-content">{`Consider the bottom $x$ meters of rope. Mass is $\\dfrac{M}{L}x$. Weight is $\\dfrac{Mg}{L}x$ downward.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Equilibrium: tension at top of section equals weight below
              </span>
              <p className="lrn-step-content">{`The rope is at rest, so $T(x) = \\dfrac{Mg}{L}x$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Boundary check</span>
              <p className="lrn-step-content">{`At $x = 0$, $T = 0$ (free end). At $x = L$, $T = Mg$ (full weight at top).`}</p>
            </div>
          </div>

          <HangingRope />

          <h3>Viscous Drag</h3>
          <p>
            Fluids resist anything moving through them. At low speeds the resistance grows in
            proportion to velocity: move twice as fast, feel twice the drag.
          </p>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_v = -C\\vec{v}$$`}</div>
          <p>
            {`$C$`} is the drag coefficient (depends on the fluid and the object's shape).{' '}
            {`$\\vec{v}$`} is velocity. The minus sign means the drag always opposes motion. This
            formula applies only at low speeds. At high speeds, drag grows like the square of
            velocity instead.
          </p>

          <h3>Worked Example: Velocity Decay in a Viscous Medium</h3>
          <p>
            A body of mass $m$ enters a fluid at speed $v_0$. Only viscous drag acts. Find $v(t)$.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Equation of motion</span>
              <p className="lrn-step-content">{`$m\\,\\dfrac{dv}{dt} = -Cv$, or equivalently $m\\,\\dfrac{dv}{dt} + Cv = 0$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Try an exponential</span>
              <p className="lrn-step-content">{`Guess $v(t) = A\\,e^{at}$. Substitute: $mAa\\,e^{at} + CA\\,e^{at} = 0$, so $a = -\\dfrac{C}{m}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply initial condition</span>
              <p className="lrn-step-content">{`At $t = 0$, $v = v_0$, so $A = v_0$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">{`$v(t) = v_0\\,e^{-\\frac{t}{\\tau}}$ with characteristic time $\\tau = \\dfrac{m}{C}$.`}</p>
            </div>
          </div>

          <ViscousDecay />

          <h3>Hooke's Law and Simple Harmonic Motion</h3>
          <p>A spring stretched by a small amount $x$ pulls back with force proportional to $x$:</p>

          <div className="lrn-eq lrn-eq-display">{`$$F_s = -kx$$`}</div>

          <p>Newton's second law gives:</p>
          <div className="lrn-eq">{`$$M\\ddot{x} = -kx$$`}</div>
          <p>Define {`$\\omega = \\sqrt{\\dfrac{k}{M}}$`}. Then:</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\ddot{x} + \\omega^2 x = 0$$`}</div>
          <p>General solution:</p>
          <div className="lrn-eq">{`$$x(t) = A\\sin\\omega t + B\\cos\\omega t$$`}</div>

          <SHM />
        </>,

        /* ════════════════════════════════════════════════════════════════════════
         SECTION 8: THE SPHERICAL SHELL
         ════════════════════════════════════════════════════════════════════════ */
        <>
          <h2>The Spherical Shell</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You stand at the exact center of a hollow Earth. In which direction does gravity pull
              you?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Gravity pulls you in no direction. The net force is zero everywhere inside a
                spherically symmetric shell.
              </p>
              <p>The pulls from all sides cancel exactly. This is the shell theorem.</p>
            </details>
          </div>

          <p>
            Use the shell theorem any time you have a spherically symmetric body. It lets you
            replace planets, stars, and uniform shells with single point masses for any observer
            outside.
          </p>

          <h3>Statement of the Shell Theorem</h3>
          <p>{`A uniform spherical shell of mass $M$ pulls on an outside particle of mass $m$ at distance $r$ from the center exactly as if all the shell's mass were concentrated at the center. Inside the shell, the net gravitational force on the particle is zero.`}</p>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F} = \\begin{cases} -\\dfrac{GMm}{r^2}\\,\\hat{r} & r > R \\\\[6pt] 0 & r < R \\end{cases}$$`}</div>

          <h3>Symmetry Argument for the Inside</h3>
          <p>
            Stand inside the shell. Send out two narrow cones in opposite directions through the
            point where you stand. Each cone cuts out a small patch of the shell. The area of each
            patch grows as the square of its distance from you, and gravity falls as the square of
            that distance. The two effects cancel exactly: opposite patches pull with equal strength
            in opposite directions. Sum over all such pairs and the net pull is zero.
          </p>

          <h3>Full Integral Derivation</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation (Shell Theorem)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Place the test mass $m$ on the $z$-axis at distance $r$ from the shell's center. Take a ring on the shell at polar angle $\\theta$ from the $+z$ direction.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`The ring's mass element is $dm = \\dfrac{M}{2}\\sin\\theta\\,d\\theta$. Its distance from $m$ is given by $R'^2 = r^2 + R^2 - 2rR\\cos\\theta$, where $R$ is the shell radius, $r$ is the distance from the center to the test mass, and $\\theta$ is the angle of the ring from the straight line between the center and the test mass.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Each ring contributes a force along the axis: $dF = -\\dfrac{G\\,m\\,dm\\,\\cos\\alpha}{R'^2}$, where $\\alpha$ is the angle between the ring-to-mass direction and the axis, giving $\\cos\\alpha = \\dfrac{r - R\\cos\\theta}{R'}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Substitute $u = r - R\\cos\\theta$. Trig identities collapse, and the integrand becomes a clean rational function in $u$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`For $r > R$, the result is $-\\dfrac{GMm}{r^2}$. For $r < R$, the integral evaluates to zero.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Generalization to Solid Spheres</h3>
          <p>
            A solid sphere with spherically symmetric density acts like a stack of nested shells.
          </p>
          <p>{`Outside the sphere, integrate over all shells: each contributes $-\\dfrac{Gm\\,dM}{r^2}$, summing to $-\\dfrac{GMm}{r^2}$.`}</p>
          <p>{`Inside the sphere at radius $r$, only the mass inside $r$ contributes (outer shells give zero). So the gravity is $-\\dfrac{Gm\\,M(r)}{r^2}$ where $M(r)$ is the enclosed mass.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The shell theorem is what lets us replace a real planet with a point mass when we
              compute satellite orbits or the moon's trajectory. Without it, Newtonian gravity would
              be intractable for any extended body.
            </p>
            <p>
              A final caveat: Newton's framework assumes that space and time are absolute. Mach
              argued in the nineteenth century that these assumptions are not testable, and Einstein
              replaced them with curved spacetime in general relativity. For everything in this
              module, the Newtonian picture is more than accurate enough.
            </p>
          </div>
        </>
      ]
    },

    practice: [
      // ── K&K practice ─────────────────────────────────────────────────────────
      {
        q: `State Newton's first law in your own words.`,
        a: `An isolated body moves at constant velocity. If no net force acts, the body keeps the same speed and direction. The law also asserts that inertial frames exist where this holds.`
      },
      {
        q: `A puck slides on frictionless ice in deep space far from any star. Predict its motion.`,
        a: `It moves in a straight line at constant speed forever. No net force acts on it, so the velocity does not change. This is Newton's first law in action.`
      },
      {
        q: `A $2$ kg block experiences a net force of $10$ N. Find its acceleration.`,
        a: `Use $F = ma$, so $a = \\dfrac{F}{m}$. Plug in: $a = \\dfrac{10}{2} = 5$ m/s$^2$. The acceleration points along the direction of the net force.`
      },
      {
        q: `Why is friction approximately independent of contact area?`,
        a: `Surfaces only touch at microscopic high points. The real contact area depends on the load, not the apparent area. So doubling the apparent area does not double the actual contact, and friction stays the same.`
      },
      {
        q: `What does the constant $G = 6.67 \\times 10^{-11}$ N$\\cdot$m$^2$/kg$^2$ govern?`,
        a: `It is the universal gravitational constant. It sets the strength of gravity in $F = \\dfrac{G M_1 M_2}{r^2}$. The small value explains why gravity between everyday objects is tiny.`
      },
      {
        q: `Two astronauts pull on a massless rope in free space. Why must they pull with equal forces?`,
        a: `A massless rope has no inertia, so any net force would give it infinite acceleration. The two end forces must therefore balance. The stronger astronaut is limited by the weaker grip.`
      },
      {
        q: `State Newton's third law and give one example.`,
        a: `If body A pushes body B with force $F$, then B pushes A with force $-F$. Example: when you push a wall, the wall pushes back on you. The two forces act on different bodies.`
      },
      {
        q: `Define an inertial reference frame.`,
        a: `It is a coordinate system where an isolated body moves at constant velocity. In such a frame, $F = ma$ holds without any correction. Any frame moving uniformly relative to one inertial frame is also inertial.`
      },
      {
        q: `A turtle of mass $M$ rides an elevator that accelerates upward at rate $a$. Find the floor's normal force.`,
        a: `Newton's second law gives $N - Mg = Ma$. Solve for $N$: $N = M(g+a)$. The apparent weight is larger than $Mg$ because the floor must both support the turtle and accelerate it upward.`
      },
      {
        q: `What is the operational definition of mass using a stretched rubber band?`,
        a: `Apply the same standard rubber-band force to two bodies in turn. Measure each acceleration. Then $m_2 = m_1 \\dfrac{a_1}{a_2}$. The mass ratio comes out the same no matter which standard force you choose.`
      },
      {
        q: `Spaceship B sees a free pencil accelerate at $50$ m/s$^2$. Spaceship A nearby sees it at rest. What does B's reading tell you?`,
        a: `An isolated pencil cannot truly accelerate, so B is non-inertial. Its frame accelerates at $-50$ m/s$^2$ relative to A. The "force" B reports is fictitious: $F_\\text{fictitious} = -M\\ddot{R}$.`
      },
      {
        q: `Hooke's law states $F = -kx$. Why the minus sign?`,
        a: `The force always points back toward the equilibrium position. If you stretch the spring (positive $x$), the force pulls back (negative). If you compress it (negative $x$), the force pushes out (positive).`
      },
      {
        q: `Which standard now defines the meter?`,
        a: `The meter is defined by the speed of light. One meter is the distance light travels in vacuum during a fixed fraction of a second. The earlier krypton-86 wavelength standard from 1960 was replaced.`
      },
      {
        q: `A block of mass $m$ whirls in a horizontal circle of radius $R$ at constant speed $v$. Gravity is negligible. Find the string tension.`,
        a: `The radial equation gives $a_r = -\\dfrac{v^2}{R}$ (toward center). Newton's second law: $-T = m\\left(-\\dfrac{v^2}{R}\\right)$, so $T = \\dfrac{mv^2}{R}$. The string supplies the inward centripetal force.`
      },
      {
        q: `For a conical pendulum of length $\\ell$ rotating at $\\omega$, when does the tilted solution exist?`,
        a: `The condition is $\\omega > \\omega_c$ where $\\omega_c = \\sqrt{\\dfrac{g}{\\ell}}$. Below this, only $\\alpha = 0$ is possible. Above, $\\cos\\alpha = \\dfrac{g}{\\ell\\omega^2}$ also solves the equations.`
      },
      {
        q: `List the six steps for solving a force problem.`,
        a: `(1) Subdivide the system into separate bodies. (2) Draw a free-body diagram for each. (3) Choose inertial coordinates. (4) Write Newton's second law for each body. (5) Apply Newton's third law to internal forces. (6) Add constraint equations.`
      },
      {
        q: `In Example 2.3, a locomotive pulls $N$ identical cars with force $F$. What force does coupling $n$ from the back transmit?`,
        a: `The whole train accelerates at $a = \\dfrac{F}{NM}$. The coupling at position $n$ from the back must accelerate $n$ trailing cars. So the force is $\\dfrac{n}{N}F$, growing linearly toward the locomotive.`
      },
      {
        q: `What is a fictitious force?`,
        a: `It is an apparent force that arises in a non-inertial frame. It equals $-M\\ddot{R}$ where $\\ddot{R}$ is the frame's acceleration. It has no third-law partner because no real body exerts it.`
      },
      {
        q: `Why does superposition of forces work? (Elaborate.)`,
        a: `Experiments confirm that the acceleration produced by several forces equals the vector sum of their individual accelerations. This is an empirical fact, not a derivation. Newton's second law $F = \\sum F_i = ma$ encodes it.`
      },
      {
        q: `A uniform rope of mass $M$ and length $L$ hangs from a tree limb. Find the tension at height $x$ from the bottom.`,
        a: `Below height $x$ hangs mass $\\dfrac{M}{L}x$, supported by tension $T(x)$. Equilibrium: $T(x) = \\dfrac{M}{L} x g$. So $T(x) = \\dfrac{Mg}{L}x$, zero at the bottom and $Mg$ at the top.`
      },
      {
        q: `Find $g$ at Earth's surface using $G$, $M_e$, and $R_e$.`,
        a: `Use $g = \\dfrac{G M_e}{R_e^2}$. Plug in $G = 6.67\\times10^{-11}$, $M_e = 5.98\\times10^{24}$, $R_e = 6.37\\times10^6$. The result is $g \\approx 9.80$ m/s$^2$, matching surface measurements.`
      },
      {
        q: `A spinning drum of radius $R$ pins a rider against the wall. Find the minimum angular speed if the friction coefficient is $\\mu$.`,
        a: `Radial: $N = MR\\omega^2$. Vertical: friction must hold the rider, so $Mg \\le \\mu N = \\mu M R\\omega^2$. Solve: $\\omega_\\text{min} = \\sqrt{\\dfrac{g}{\\mu R}}$.`
      },
      {
        q: `State the shell theorem.`,
        a: `A uniform spherical shell attracts an outside mass as if all its mass sat at the center. An inside mass feels zero net force. The result follows from integrating $\\dfrac{1}{r^2}$ over the shell.`
      },
      {
        q: `Static friction satisfies $f \\le \\mu_s N$, while kinetic satisfies $f = \\mu_k N$. Why the difference?`,
        a: `Static friction adjusts to whatever value prevents slipping, up to its limit. Kinetic friction has a definite value because surfaces are sliding past each other. So static is an inequality and kinetic an equality.`
      },
      {
        q: `A spring obeys $F_s = -kx$. Show the equation of motion is $\\ddot{x} + \\omega^2 x = 0$ with $\\omega = \\sqrt{\\dfrac{k}{M}}$.`,
        a: `Newton's second law: $M\\ddot{x} = -kx$. Divide by $M$: $\\ddot{x} = -\\dfrac{k}{M}x$. Define $\\omega^2 = \\dfrac{k}{M}$ and rearrange to get $\\ddot{x} + \\omega^2 x = 0$.`
      },
      {
        q: `What does the cesium-133 atom contribute to the SI?`,
        a: `It defines the second. One second equals 9,192,631,770 cycles of a specific cesium-133 hyperfine transition. The choice was made in 1967.`
      },
      {
        q: `In Example 2.10, a force $F$ pulls a massive string attached to a block of mass $M$. The string has mass $m$. Find the force the string transmits to the block.`,
        a: `The system accelerates at $a = \\dfrac{F}{M+m}$. The string transmits only what is needed to accelerate the block: $F_1 = Ma = \\dfrac{MF}{M+m}$. When $m \\ll M$, $F_1 \\to F$.`
      },
      {
        q: `Why is a viscous drag force written $F_v = -Cv$ instead of just $-C$?`,
        a: `The drag depends on speed at low Reynolds number. Faster motion through fluid sweeps more molecules per second, raising drag linearly. The minus sign means the force opposes the velocity.`
      },
      {
        q: `Newton's third law gives $F_{a,b} = -F_{b,a}$. Why does this not mean nothing accelerates?`,
        a: `The two forces act on different bodies, so each body has its own net force. Earth pulls a falling apple (apple accelerates), and the apple pulls Earth (Earth's tiny acceleration is unmeasurable due to its huge mass).`
      },
      {
        q: `Coulomb's law has the form $F = \\dfrac{k q_a q_b}{r^2}$. What is $k$?`,
        a: `The constant $k = 8.99\\times10^9$ N$\\cdot$m$^2$/C$^2$. Like charges repel and unlike charges attract. The form is identical to gravity except charge replaces mass and the force can be either sign.`
      },
      {
        q: `A whirling rope of mass $M$ and length $L$ spins at angular velocity $\\omega$ about one end. Find the tension at radius $r$.`,
        a: `Apply Newton's second law to a small section: $\\dfrac{dT}{dr} = -\\dfrac{M\\omega^2}{L}r$. Integrate from $r$ to $L$ with $T(L) = 0$: $T(r) = \\dfrac{M\\omega^2}{2L}(L^2 - r^2)$.`
      },
      {
        q: `Predict what happens to a falling marble in a viscous fluid (no other force). Take initial speed $v_0$.`,
        a: `Solve $m\\dot{v} = -Cv$ with $v(0) = v_0$. The result is $v(t) = v_0 e^{-\\frac{t}{\\tau}}$ with $\\tau = \\dfrac{m}{C}$. The marble decelerates exponentially, never quite stopping but approaching rest.`
      },
      {
        q: `The whirling rope tension at the pivot end is what fraction of $M\\omega^2 L$?`,
        a: `Set $r = 0$ in $T(r) = \\dfrac{M\\omega^2}{2L}(L^2 - r^2)$. The result is $T(0) = \\dfrac{M\\omega^2 L}{2}$. So the pivot carries half of $M\\omega^2 L$, and the free end carries zero.`
      },
      {
        q: `A pulley deflects a string under tension $T$ by total angle $2\\theta_0$. Find the force on the pulley.`,
        a: `Sum the inward elements $T\\,d\\theta$ over the arc, taking the component along the bisector. The integral gives $F = 2T\\sin\\theta_0$. The pulley feels a force along the angle bisector.`
      },
      {
        q: `Predict: you stand on a bathroom scale in an elevator that suddenly free-falls. What does the scale read?`,
        a: `In free fall, $a = -g$, so $N = M(g + a) = 0$. The scale reads zero. You feel weightless because no surface supplies a contact force, even though gravity still acts.`
      },
      {
        q: `Why does the formula $\\dfrac{\\Delta g}{g} = -2\\dfrac{\\Delta r}{r}$ hold near Earth? (Self-explain.)`,
        a: `Differentiate $g(r) = \\dfrac{GM_e}{r^2}$: $\\dfrac{dg}{dr} = -\\dfrac{2GM_e}{r^3} = -\\dfrac{2g}{r}$. Rearrange to $\\dfrac{dg}{g} = -2\\dfrac{dr}{r}$. So a fractional rise $\\dfrac{\\Delta r}{r}$ shrinks $g$ by twice that fraction.`
      },
      {
        q: `What is the normal force?`,
        a: `It is the perpendicular component of contact force from a surface. It arises from microscopic compression of the surface atoms. It adjusts to whatever value keeps the body from passing through the surface.`
      },
      {
        q: `Why does the equivalence of inertial and gravitational mass surprise? (Elaborate.)`,
        a: `Inertial mass appears in $F = ma$, gravitational mass in $F = \\dfrac{GMm}{r^2}$. They are conceptually different roles. Yet experiments confirm they are proportional to one part in $10^{11}$. Einstein built general relativity on this fact.`
      },
      {
        q: `A block sits on a wedge of angle $\\theta$ with friction coefficient $\\mu$. Find the angle at which sliding starts.`,
        a: `Along the slope: $W\\sin\\theta - f = 0$ at the threshold, with $f = \\mu N = \\mu W\\cos\\theta$. So $\\sin\\theta = \\mu\\cos\\theta$, giving $\\tan\\theta_\\text{max} = \\mu$.`
      },
      {
        q: `Why does the symmetry argument prove zero gravity inside a spherical shell? (Elaborate.)`,
        a: `Take any interior point. Two narrow cones from the point cut equal shell areas at distances $r_1$ and $r_2$. The areas scale as $r^2$ and force as $\\dfrac{1}{r^2}$, so each pair cancels. Summing pairs leaves zero net force.`
      },
      {
        q: `In Example 2.1, A is inertial and reads $a_A = 1000$ m/s$^2$ for the unidentified object. B reports $a_B = 950$ m/s$^2$. What is B's acceleration?`,
        a: `Use $\\ddot{x}_A = \\ddot{x}_B + \\ddot{R}$, so $\\ddot{R} = 1000 - 950 = 50$ m/s$^2$. Spaceship B accelerates at $50$ m/s$^2$ relative to A.`
      },
      // ── Arnold practice (Newton's equation, phase plane, energy conservation) ─
      {
        q: `Newton's equation starts as $\\ddot{x} = F(x, \\dot{x}, t)$. Apply time-translation invariance. What form must $F$ take?`,
        a: `$F$ cannot depend on $t$. If the laws of physics are the same at all times, shifting $t \\to t + s$ must leave $F$ unchanged. The equation becomes $\\ddot{x} = \\Phi(x, \\dot{x})$. If $F$ changed with $t$, an isolated experiment could detect "what time it is", violating the principle.`
      },
      {
        q: `A stone falls near Earth's surface with $\\ddot{x} = -g$. Write the potential energy $U(x)$ and verify that $F = -\\dfrac{dU}{dx}$ gives the correct force.`,
        a: `$U(x) = gx$. Then $-\\dfrac{dU}{dx} = -\\dfrac{d(gx)}{dx} = -g$. This recovers the equation $\\ddot{x} = -g$. The potential increases with height because lifting the stone stores energy.`
      },
      {
        q: `State Newton's principle of determinacy. What physical claim does it make?`,
        a: `Knowing the positions and velocities of all particles at one instant uniquely determines all future motion. No randomness, no ambiguity. Formally: the right-hand side $F(x, \\dot{x})$, combined with initial data $(x_0, \\dot{x}_0)$, produces a unique trajectory. This requires $F$ to be sufficiently smooth.`
      },
      {
        q: `For the harmonic oscillator $\\ddot{x} = -x$, prove that total energy $E = \\frac{1}{2}\\dot{x}^2 + \\frac{1}{2}x^2$ is conserved.`,
        a: `Differentiate: $\\dfrac{dE}{dt} = \\dot{x}\\ddot{x} + x\\dot{x} = \\dot{x}(\\ddot{x} + x)$. Newton's equation says $\\ddot{x} = -x$, so $\\ddot{x} + x = 0$. Therefore $\\dfrac{dE}{dt} = 0$. Energy conservation always relies on this cancellation via Newton's equation.`
      },
      {
        q: `What is a separatrix in a 1-DOF phase portrait? What happens to a trajectory that starts exactly on the separatrix?`,
        a: `A separatrix is the phase curve passing through an unstable equilibrium (saddle point), at the energy level of a local maximum of $U$. A trajectory starting exactly on the separatrix approaches the saddle point but never reaches it: the time to arrive is infinite. The separatrix separates bounded oscillatory motion (inside) from unbounded escape (outside).`
      },
      {
        q: `A spring-mass system has $\\ddot{x} = -\\alpha^2 x$. What is the period of oscillation? If $\\alpha$ doubles, what happens to the period?`,
        a: `Period of small oscillations: $T_0 = \\dfrac{2\\pi}{\\sqrt{U''(0)}} = \\dfrac{2\\pi}{\\alpha}$. If $\\alpha$ doubles, the new period is $\\dfrac{2\\pi}{2\\alpha} = \\dfrac{T_0}{2}$. Doubling $\\alpha$ halves the period. A stiffer spring oscillates faster.`
      },
      {
        q: `Explain why Newton's first law (a free particle has zero acceleration) follows from Galilean invariance, rather than being an independent postulate.`,
        a: `A single isolated particle has no other particles to form relative positions or velocities with. The force function $\\ddot{x}_i = f_i(\\{x_j - x_k, \\dot{x}_j - \\dot{x}_k\\})$ has no arguments when $n = 1$. So $f_i = 0$ and $\\ddot{x} = 0$. Newton's first law follows from the assumption that space is the same everywhere (homogeneous) and in every direction (isotropic).`
      },
      {
        q: `What is the difference between a phase flow and a phase curve?`,
        a: `A phase curve is the trajectory of one specific starting point: the set $\\{(x(t), \\dot{x}(t)) : t \\in \\mathbb{R}\\}$ for fixed initial condition. A phase flow is the collection of all transformations $g^t: \\mathbb{R}^2 \\to \\mathbb{R}^2$ that map every phase point to where it ends up after time $t$. The phase curve of a point $M$ is $\\{g^t M : t \\in \\mathbb{R}\\}$.`
      },
      {
        q: `A 1-DOF system has potential $U(x) = x^4 - 2x^2$. Find the equilibrium positions and classify each as stable or unstable.`,
        a: `$\\dfrac{dU}{dx} = 4x^3 - 4x = 4x(x^2-1) = 0$. Equilibria at $x = -1, 0, 1$. $U''(x) = 12x^2 - 4$. At $x = 0$: $U''(0) = -4 < 0$, unstable (saddle). At $x = \\pm 1$: $U''(\\pm 1) = 8 > 0$, stable (centers).`
      },
      {
        q: `A potential $U(x)$ has a local minimum at $x = 2$ with $U''(2) = 9$ s$^{-2}$. What is the period of small oscillations around this equilibrium?`,
        a: `$T_0 = \\dfrac{2\\pi}{\\sqrt{U''(2)}} = \\dfrac{2\\pi}{\\sqrt{9}} = \\dfrac{2\\pi}{3}$ s. Near the minimum, $U(x) \\approx U(2) + \\dfrac{1}{2} \\cdot 9 \\cdot (x-2)^2$. This is harmonic with $\\alpha^2 = 9$, so period is $\\dfrac{2\\pi}{3}$.`
      },
      {
        q: `Lissajous figure for $\\ddot{x}_1 = -x_1$ and $\\ddot{x}_2 = -\\omega^2 x_2$. When is the orbit closed? When is it dense?`,
        a: `The orbit closes if and only if $\\omega$ is rational. If $\\omega = \\dfrac{p}{q}$ in lowest terms, the orbit repeats after $q$ oscillations of $x_1$ and $p$ of $x_2$. If $\\omega$ is irrational, the orbit never closes and densely fills a rectangular region.`
      },
      {
        q: `A 2-DOF system has $U = \\frac{1}{2}(x_1^2 + x_2^2)$. Show that the equations of motion decouple, and describe the resulting motion.`,
        a: `$\\ddot{x}_1 = -\\dfrac{\\partial U}{\\partial x_1} = -x_1$ and $\\ddot{x}_2 = -x_2$. The two equations are completely independent. Each is a simple harmonic oscillator with frequency 1. Solutions: $x_1(t) = A\\cos(t + \\phi_1)$, $x_2(t) = B\\cos(t + \\phi_2)$. Both oscillate at the same frequency. The orbit in the $(x_1, x_2)$ plane is a closed ellipse.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: "Newton's Laws and Integration",
      sections: [
        <>
          <h2>Definitions</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Inertial Frame</span>
            <div className="lrn-definition-desc">{`A coordinate system in which an isolated body moves at constant velocity. In such a frame, $F = ma$ holds without correction. Any frame moving uniformly relative to one inertial frame is also inertial.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Force (operational definition)</span>
            <div className="lrn-definition-desc">{`What a stretched standard rubber band exerts. Two such bands stretched together exert twice the force. The definition is testable, not metaphysical.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Mass (operational definition, inertial mass)
            </span>
            <div className="lrn-definition-desc">{`Apply the same standard force to two bodies. The mass ratio is $m_2 = m_1\\dfrac{a_1}{a_2}$. The ratio comes out the same whatever standard force you choose.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's First Law</span>
            <div className="lrn-definition-desc">{`Inertial frames exist. In any inertial frame, an isolated body moves at constant velocity. The law asserts a class of frames where the other two laws apply.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's Second Law</span>
            <div className="lrn-definition-desc">{`The vector equation $F = ma$ in an inertial frame. The net force equals mass times acceleration. With force and mass known, you can predict motion.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's Third Law</span>
            <div className="lrn-definition-desc">{`If body A exerts force $F$ on body B, then B exerts $-F$ on A. The two forces act on different bodies. They never cancel each other.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Fictitious Force</span>
            <div className="lrn-definition-desc">{`An apparent force in a non-inertial frame, equal to $-M\\ddot{R}$ where $\\ddot{R}$ is the frame's acceleration. It has no third-law partner since no real body exerts it.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Principle of Determinacy</span>
            <div className="lrn-definition-desc">{`Initial positions and velocities uniquely determine all future motion. Requires $F(x, \\dot{x})$ to be smooth. Newton's equations as ODEs have a unique solution for each set of initial data.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Phase Plane</span>
            <div className="lrn-definition-desc">{`The 2D space of $(x, \\dot{x})$ for a 1-DOF system. Phase curves are level sets of the energy $E = \\frac{1}{2}\\dot{x}^2 + U(x)$. Phase curves never cross (by uniqueness of ODE solutions).`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Phase Flow</span>
            <div className="lrn-definition-desc">{`The one-parameter group of diffeomorphisms $g^t$ that map each phase point to its position after time $t$. Satisfies $g^{t+s} = g^t \\circ g^s$.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Separatrix</span>
            <div className="lrn-definition-desc">{`The phase curve through a saddle point (unstable equilibrium). It separates bounded orbits (inside) from unbounded escapes (outside). Reaching the saddle point takes infinite time.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Free-Body Diagram</span>
            <div className="lrn-definition-desc">{`A sketch showing every force on a single isolated body. It is the second step of the six-step force procedure. Each interaction force later pairs with one on the other body via Newton's third law.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Constraint Equation</span>
            <div className="lrn-definition-desc">{`A kinematic relation between coordinates, found by differentiating geometry twice. Examples include wedge-block contact and pulley string lengths. Without it, the equations of motion are underdetermined.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Tension</span>
            <div className="lrn-definition-desc">{`The magnitude of the contact force between adjacent sections of a string. Uniform along a massless string. Varies along a massive or accelerating string.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Normal Force</span>
            <div className="lrn-definition-desc">{`The perpendicular component of contact force from a surface. It arises from microscopic compression of surface atoms. It adjusts to keep the body from passing through.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Static Friction</span>
            <div className="lrn-definition-desc">{`A contact force parallel to the surface that resists the start of sliding. It satisfies $0 \\le f \\le \\mu_s N$. The value adjusts to match whatever force is trying to start motion.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Kinetic Friction</span>
            <div className="lrn-definition-desc">{`A contact force on a sliding object, equal to $f = \\mu_k N$ opposite the relative velocity. The value is fixed once sliding begins. Usually slightly smaller than the maximum static friction.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Viscous Drag</span>
            <div className="lrn-definition-desc">{`A fluid resistance force linear in velocity at low Reynolds number: $F_v = -Cv$. The minus sign means it opposes motion. At high speed, drag scales like $v^2$ instead.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Hooke's Law</span>
            <div className="lrn-definition-desc">{`The linear restoring force $F_s = -kx$. It applies for small displacements from equilibrium. The minus sign points the force back toward equilibrium.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Simple Harmonic Motion</span>
            <div className="lrn-definition-desc">{`Motion satisfying $\\ddot{x} + \\omega^2 x = 0$. The solution is $x(t) = A\\sin\\omega t + B\\cos\\omega t$. The two constants come from initial conditions.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Shell Theorem</span>
            <div className="lrn-definition-desc">{`A uniform spherical shell attracts an outside mass as if all the shell mass sat at its center. An inside mass feels zero net force. Generalizes to any spherically symmetric distribution.`}</div>
          </div>
        </>,

        <>
          <h2>Newton's Equations</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's General Equation</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\ddot{x} = F(x, \\dot{x}, t)$$`}</p>
              <p>
                <strong>When to use:</strong> Starting point before applying symmetry constraints;
                use when the system is not closed or has time-dependent forcing.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Newton's Equation (Galilean-Invariant, Closed System)
            </span>
            <div className="lrn-definition-desc">
              <p>{`$$\\ddot{x} = \\Phi(x, \\dot{x})$$`}</p>
              <p>
                <strong>When to use:</strong> Any isolated mechanical system where time-translation
                invariance applies.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Conservative n-Body System</span>
            <div className="lrn-definition-desc">
              <p>{`$$m_i \\ddot{x}_i = -\\frac{\\partial U}{\\partial x_i},\\quad i=1,\\ldots,n$$`}</p>
              <p>
                <strong>When to use:</strong> Any system where all forces derive from a single
                scalar potential {`$U$`}.
              </p>
            </div>
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$F = ma$$`}</span>
          </div>
          <p>When to use: relate force, mass, and acceleration in inertial frames.</p>

          <div className="lrn-eq">
            <span>{`$$F_{a,b} = -F_{b,a}$$`}</span>
          </div>
          <p>When to use: every contact force has an equal and opposite reaction.</p>

          <div className="lrn-eq">
            <span>{`$$F_\\text{apparent} = F_\\text{true} - M\\ddot{R}$$`}</span>
          </div>
          <p>When to use: convert between inertial and accelerating frames.</p>

          <div className="lrn-eq">
            <span>{`$$a_r = \\ddot{r} - r\\dot\\theta^2$$`}</span>
          </div>
          <p>When to use: radial acceleration in polar coordinates.</p>

          <div className="lrn-eq">
            <span>{`$$\\ddot{x} - \\ddot{X} = -\\ddot{y}\\cot\\theta$$`}</span>
          </div>
          <p>When to use: wedge-block constraint.</p>

          <div className="lrn-eq">
            <span>{`$$A = \\tfrac{1}{2}(\\ddot{y}_1 + \\ddot{y}_2)$$`}</span>
          </div>
          <p>When to use: pulley accelerating up with two attached masses.</p>
        </>,

        <>
          <h2>Energy and Phase Plane (1-DOF)</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Total Energy (1-DOF)</span>
            <div className="lrn-definition-desc">
              <p>{`$$E = T + U = \\tfrac{1}{2}\\dot{x}^2 + U(x)$$`}</p>
              <p>
                <strong>When to use:</strong> Any 1-DOF conservative system; lets you read off phase
                curves as energy level sets.
              </p>
              <p>
                <strong>Conservation proof:</strong>{' '}
                {`$\\frac{d}{dt}(T+U) = \\dot{x}\\left(\\ddot{x} + \\dfrac{dU}{dx}\\right) = 0$`} by
                Newton's equation.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Phase Plane System</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\dot{x} = y,\\quad \\dot{y} = f(x)$$`}</p>
              <p>
                <strong>When to use:</strong> Converting a 2nd-order ODE to a 1st-order system for
                phase portrait analysis.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Time Between Two Points</span>
            <div className="lrn-definition-desc">
              <p>{`$$t_2 - t_1 = \\int_{x_1}^{x_2} \\frac{dx}{\\sqrt{2(E - U(x))}}$$`}</p>
              <p>
                <strong>When to use:</strong> Computing travel time between two positions in a 1-DOF
                conservative system, given the energy.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Period of Small Oscillations</span>
            <div className="lrn-definition-desc">
              <p>{`$$T_0 = \\frac{2\\pi}{\\sqrt{U''(\\xi)}}$$`}</p>
              <p>
                <strong>When to use:</strong> Estimating the period of any small oscillation about a
                stable equilibrium at position {`$\\xi$`}. Larger curvature gives shorter period.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Period-Area Relation</span>
            <div className="lrn-definition-desc">
              <p>{`$$T = \\frac{dS}{dE}$$`}</p>
              <p>
                <strong>When to use:</strong> Finding period from area enclosed by a phase curve as
                a function of energy.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Common Forces and Oscillations</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$F_g = -\\dfrac{G M_a M_b}{r^2}\\hat{r}$$`}</span>
          </div>
          <p>When to use: gravitational force between two point masses.</p>

          <div className="lrn-eq">
            <span>{`$$W = mg$$`}</span>
          </div>
          <p>When to use: weight of an object near Earth's surface.</p>

          <div className="lrn-eq">
            <span>{`$$N = M(g + a)$$`}</span>
          </div>
          <p>When to use: apparent weight in an elevator accelerating up.</p>

          <div className="lrn-eq">
            <span>{`$$F_e = k\\dfrac{q_a q_b}{r^2}\\hat{r}$$`}</span>
          </div>
          <p>When to use: electrostatic (Coulomb) force.</p>

          <div className="lrn-eq">
            <span>{`$$T(x) = \\dfrac{Mg}{L} x$$`}</span>
          </div>
          <p>When to use: tension at height $x$ in a uniform hanging rope.</p>

          <div className="lrn-eq">
            <span>{`$$T(r) = \\dfrac{M\\omega^2}{2L}(L^2 - r^2)$$`}</span>
          </div>
          <p>{`When to use: tension at radius $r$ in a rope whirling at $\\omega$.`}</p>

          <div className="lrn-eq">
            <span>{`$$0 \\le f \\le \\mu_s N$$`}</span>
          </div>
          <p>When to use: static friction; value adjusts to prevent slipping.</p>

          <div className="lrn-eq">
            <span>{`$$f = \\mu_k N$$`}</span>
          </div>
          <p>When to use: kinetic friction; opposite to relative velocity.</p>

          <div className="lrn-eq">
            <span>{`$$\\tan\\theta_\\text{max} = \\mu$$`}</span>
          </div>
          <p>When to use: critical angle for a block to slide on a rough wedge.</p>

          <div className="lrn-eq">
            <span>{`$$F_v = -Cv$$`}</span>
          </div>
          <p>When to use: linear viscous drag at low Reynolds number.</p>

          <div className="lrn-eq">
            <span>{`$$F_s = -kx$$`}</span>
          </div>
          <p>When to use: spring force or any small-displacement linear restoring force.</p>

          <div className="lrn-eq">
            <span>{`$$\\ddot{x} + \\omega^2 x = 0,\\ \\omega = \\sqrt{\\frac{k}{M}}$$`}</span>
          </div>
          <p>When to use: equation of motion for simple harmonic motion.</p>

          <div className="lrn-eq">
            <span>{`$$x(t) = A\\sin\\omega t + B\\cos\\omega t$$`}</span>
          </div>
          <p>When to use: general SHM solution; $A$ and $B$ from initial conditions.</p>

          <div className="lrn-eq">
            <span>{`$$v(t) = v_0 e^{-\\frac{t}{\\tau}},\\ \\tau = \\frac{m}{C}$$`}</span>
          </div>
          <p>When to use: velocity under linear viscous drag with no other forces.</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$G$`}</td>
                <td>Gravitational constant</td>
                <td>{`$6.67 \\times 10^{-11}$ N$\\cdot$m$^2$/kg$^2$`}</td>
              </tr>
              <tr>
                <td>{`$g$`}</td>
                <td>Earth surface gravity</td>
                <td>{`$9.80$ m/s$^2$`}</td>
              </tr>
              <tr>
                <td>{`$M_e$`}</td>
                <td>Earth mass</td>
                <td>{`$5.98 \\times 10^{24}$ kg`}</td>
              </tr>
              <tr>
                <td>{`$R_e$`}</td>
                <td>Earth radius</td>
                <td>{`$6.37 \\times 10^6$ m`}</td>
              </tr>
              <tr>
                <td>{`$k_e$`}</td>
                <td>Coulomb constant</td>
                <td>{`$8.99 \\times 10^9$ N$\\cdot$m$^2$/C$^2$`}</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },
    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }`
  }

  return <LearningTemplate config={config} />
}
