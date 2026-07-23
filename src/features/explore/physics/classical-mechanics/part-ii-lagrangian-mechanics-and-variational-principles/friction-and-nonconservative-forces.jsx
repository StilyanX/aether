import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  RayleighDissipationFunction,
  DissipatedEnergyDecay,
  DampedPhasePortrait,
  MassSpringDamperSim,
  DampedOsc,
  HarmonicPhasePortrait
} from '../../../../../components/viz'

export default function FrictionAndNonConservativeForces() {
  const config = {
    cssPrefix: 'fnc',
    documentTitle: 'Friction and Non-Conservative Forces - AETHER',
    learning: {
      groupTitle: 'Lagrangian Mechanics and Variational Principles',
      category: 'Module 2',
      title: 'Friction and Non-Conservative Forces',
      subtitle:
        'Extend the Lagrangian framework to handle friction, drag, and any force that drains energy from a system.',
      sections: [
        <>
          <h2>Why Ideal Lagrangians Break Down</h2>
          <p>
            {`The standard Lagrangian $L = T - V$ captures only conservative forces. These are forces that
            derive from a potential $V(q)$. Real systems lose energy to heat through friction,
            air drag, and viscous damping (the slowing drag of a thick fluid like oil).
            Those forces have no potential, so $L$ alone cannot describe them.`}
          </p>
          <p>
            {`This page shows you how to extend the Euler-Lagrange equations to include
            any nonpotential force (any force that no potential $V$ can produce). You
            will learn to write down the Rayleigh dissipation function, derive the damped
            harmonic oscillator from scratch, and read its three different phase
            portraits. Use this framework whenever your system loses energy to the
            environment.`}
          </p>
          <div className="lrn-callout">
            <p>After this page you can:</p>
            <ol className="lrn-list">
              <li>{`Identify whether a force is conservative or dissipative from its form.`}</li>
              <li>
                {`Construct the Rayleigh function $\\mathcal{F}$ for velocity-proportional damping.`}
              </li>
              <li>{`Write the modified Euler-Lagrange equation with $D_\\alpha$.`}</li>
              <li>{`Derive the damped harmonic oscillator equation of motion.`}</li>
              <li>
                {`Classify underdamped, critically damped, and overdamped behavior from $\\beta$ and $\\omega_0$.`}
              </li>
            </ol>
          </div>
        </>,

        <>
          <h2>Forces That Don't Come From a Potential</h2>
          <p>
            {`A conservative force satisfies $\\sum_i \\mathbf{F}_i \\cdot \\frac{\\partial \\mathbf{x}_i}{\\partial q^\\alpha} = -\\frac{\\partial V}{\\partial q^\\alpha}$.
            The force follows from a single scalar $V(q)$, and it does
            path-independent work. Friction and drag violate both conditions.`}
          </p>
          <p>
            {`Use the split below whenever a force depends on velocity or does
            path-dependent work, so no potential $V$ can hold it.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A particle moves through oil. The drag force is $\\mathbf{F} = -b\\mathbf{v}$.
              Can you write this force as $-\\nabla V$ for some $V(q)$? Predict yes or no
              before reading on.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`No. $-b\\mathbf{v}$ depends on velocity, not position alone. A potential
                $V(q)$ can only produce position-dependent forces. Velocity-dependent
                forces sit outside the standard Lagrangian.`}
              </p>
            </details>
          </div>
          <p>{`The fix is to split every particle force into two parts:`}</p>
          <p className="lrn-eq">{`$$\\mathbf{F}_i = \\mathbf{F}_{Pi} + \\mathbf{F}_{Di}$$`}</p>
          <p>
            {`$\\mathbf{F}_{Pi}$ comes from potential $V$ as usual. $\\mathbf{F}_{Di}$ is the
            nonpotential part (friction, drag, or any driving force). Project $\\mathbf{F}_{Di}$
            onto the generalized coordinates to get the generalized nonpotential force:`}
          </p>
          <p className="lrn-eq">
            {`$$D_\\alpha = \\sum_{i=1}^N \\mathbf{F}_{Di} \\cdot \\frac{\\partial \\mathbf{x}_i}{\\partial q^\\alpha}$$`}
          </p>
          <p>
            {`This is the generalized dissipative force in coordinate $q^\\alpha$.
            It carries all the physics that the Lagrangian cannot encode on its own.`}
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The virtual-work argument from d'Alembert already showed how any force turns
              into a generalized force: project it with $\\partial \\mathbf{x}_i / \\partial
              q^\\alpha$. Applying that same projection to the nonpotential part
              $\\mathbf{F}_{Di}$ gives $D_\\alpha$. Because this force comes from no
              potential, it cannot live inside $L$. It lands on the right-hand side of the
              Euler-Lagrange equation instead.`}
            </p>
          </div>
          <h3>The Modified Euler-Lagrange Equation</h3>
          <p>
            {`Adding $D_\\alpha$ to the right-hand side gives the modified Euler-Lagrange
            equation:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{q}^\\alpha}\\right) - \\frac{\\partial L}{\\partial q^\\alpha} = D_\\alpha$$`}
          </p>
          <p>
            {`$L$ still contains only the conservative part. $D_\\alpha$ carries all
            nonpotential generalized forces. You cannot eliminate $D_\\alpha$ by a
            clever coordinate choice. Unlike constraint forces, it must appear
            explicitly every time.`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Conservative Force</span>
              <p>
                {`Derives from $V(q)$. Does path-independent work. $\\sum_i \\mathbf{F}_{Pi} \\cdot
                \\delta \\mathbf{x}_i = -\\delta V$. Appears inside $L = T - V$.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Nonpotential Force</span>
              <p>
                {`Does path-dependent work. Cannot be absorbed into $L$. Appears as $D_\\alpha$
                on the right-hand side of the EL equation. Reduces energy when dissipative.`}
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Dissipative vs Driving: Two Kinds of Nonpotential Force</h2>
          <p>
            {`Not every nonpotential force takes energy away. The sign of $D_\\alpha$
            tells you which way energy flows. Use this distinction whenever you add
            a nonpotential term to the equations of motion.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A motor spins a flywheel faster over time. Is the motor's generalized
              force $D_\\alpha$ positive, negative, or zero? Predict before reading on.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Positive. The motor adds energy to the flywheel, so $D_\\alpha > 0$.
                A dissipative force would have $D_\\alpha < 0$ and remove energy.`}
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Dissipative Force</span>
              <p>
                {`$D_\\alpha < 0$. The force opposes motion: $\\mathbf{F}_{Di} = -g_i(v_i)\\mathbf{v}_i$
                with $g_i > 0$. Energy flows from the system to heat.
                Friction and air drag are the standard examples.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Driving Force</span>
              <p>
                {`$D_\\alpha > 0$. The force adds energy to the system. Driving forces
                are usually time-dependent (an external agent does work). A motor,
                a pump, or a forced oscillator provides this.`}
              </p>
            </div>
          </div>
          <p>
            {`The form $\\mathbf{F}_{Di} = -g_i(v_i)\\mathbf{v}_i$ says the force points
            opposite to velocity with magnitude $g_i(v_i)\\,v_i$. When $g_i > 0$,
            the force always does negative work on the particle. It always dissipates
            energy.`}
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The power delivered by $\\mathbf{F}_{Di}$ to particle $i$ is
              $\\mathbf{F}_{Di} \\cdot \\mathbf{v}_i = -g_i(v_i)\\,v_i^2$.
              Since $g_i > 0$ and $v_i^2 \\geq 0$, this power is always
              $\\leq 0$. The force can never add energy. It can only take energy away
              or, at rest, do nothing.`}
            </p>
          </div>
        </>,

        <>
          <h2>The Rayleigh Dissipation Function</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Friction force is $F_f = -bv$. Guess a scalar function $\\mathcal{F}(v)$
              whose velocity derivative gives that force, so $F_f = -\\partial\\mathcal{F}/\\partial v$.
              Predict the form of $\\mathcal{F}$ before reading on.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$\\mathcal{F} = \\frac{1}{2}bv^2$. Its derivative is
                $\\partial\\mathcal{F}/\\partial v = bv$, so $F_f = -bv$. The quadratic
                form is the key. A scalar replaces the whole vector friction calculation.`}
              </p>
            </details>
          </div>
          <p>
            {`Computing $D_\\alpha$ directly from the particle forces is tedious.
            Rayleigh found a scalar shortcut: define the dissipative function`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\mathcal{F} = \\sum_{i=1}^N \\int_0^{v_i} g_i(z)\\, z\\, dz$$`}
          </p>
          <p>
            {`Here $z$ is a dummy speed that runs from rest up to the particle's actual
            speed $v_i$. Why does this integral return the right force? Differentiate it
            with respect to the upper limit $v_i$. The integral undoes the derivative, so
            $\\partial \\mathcal{F}/\\partial v_i = g_i(v_i)\\,v_i$, which is exactly the
            friction-force magnitude. Then $D_\\alpha = -\\partial \\mathcal{F}/\\partial \\dot{q}^\\alpha$,
            and the modified Euler-Lagrange equation becomes:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{q}^\\alpha}\\right) - \\frac{\\partial L}{\\partial q^\\alpha} + \\frac{\\partial \\mathcal{F}}{\\partial \\dot{q}^\\alpha} = 0$$`}
          </p>
          <p>
            {`Use this whenever the nonpotential force is velocity-dependent and
            directed opposite to velocity. One scalar $\\mathcal{F}$ replaces a vector
            calculation across all particles.`}
          </p>
          <h3>The Rayleigh Special Case: Force Proportional to Speed</h3>
          <p>
            {`When each $g_i$ is a constant $b_i$ (force directly proportional to speed),
            the integral gives the Rayleigh function:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\mathcal{F} = \\sum_{i=1}^N \\tfrac{1}{2}\\, b_i\\, v_i^2$$`}
          </p>
          <p>
            {`The friction force follows by differentiation. For one particle moving
            along $x$ with $\\mathcal{F} = \\frac{1}{2}b\\,v^2$:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$F_f = -\\frac{\\partial \\mathcal{F}}{\\partial v} = -b\\,v$$`}
          </p>
          <p>
            {`The same rule works in three dimensions. Each velocity component gets its
            own term, and differentiating with respect to that component returns the
            friction force along that axis.`}
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Take $D_\\alpha = -\\partial \\mathcal{F}/\\partial \\dot{q}^\\alpha$ and
              substitute $\\mathcal{F} = \\sum_i \\frac{1}{2}b_i v_i^2$. Since
              $\\partial v_i / \\partial \\dot{q}^\\alpha$ links particle speeds to
              generalized velocities (the same Jacobian used in the kinetic energy),
              you get $D_\\alpha = -\\sum_i b_i v_i \\frac{\\partial v_i}{\\partial
              \\dot{q}^\\alpha}$, which is exactly $-\\mathbf{F}_{Di} \\cdot
              \\partial \\mathbf{v}_i / \\partial \\dot{q}^\\alpha$. The scalar
              $\\mathcal{F}$ encodes all the vector friction forces in one function.`}
            </p>
          </div>
          <div className="lrn-callout">
            <p>
              {`Note: real frictional forces (metal on metal, rubber on road) often have
              a different velocity dependence than the linear $-bv$ law. The Rayleigh
              quadratic is a simple model that works well for viscous fluids and
              magnetic damping. At the atomic scale, friction comes from mechanical
              energy leaking into countless tiny lattice vibrations that become heat.
              The real $g_i(v)$ depends on the two surfaces in contact.`}
            </p>
          </div>
          <div>
            <RayleighDissipationFunction />
            <p>
              {`The parabola $\\mathcal{F} = \\frac{1}{2}b v^2$ (solid) and the friction
              force $F_f = -bv$ (faint). The friction force is the negative slope of
              $\\mathcal{F}$ at each $v$. Drag the slider to change $b$.`}
            </p>
          </div>
        </>,

        <>
          <h2>Energy Drains Away: The Rate of Dissipation</h2>
          <p>
            {`Use this result whenever you need to know how fast a system loses mechanical
            energy to heat. The mechanical energy $E = \\dot{q}^\\alpha \\frac{\\partial L}{\\partial
            \\dot{q}^\\alpha} - L$ changes at a rate given by:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\frac{dE}{dt} = -\\dot{q}^\\alpha \\frac{\\partial \\mathcal{F}}{\\partial \\dot{q}^\\alpha}$$`}
          </p>
          <p>
            {`When $\\mathcal{F} > 0$ (dissipative), the right side is negative, so $E$
            decreases. In Cartesian coordinates this equals $-\\sum_i \\mathbf{v}_i
            \\cdot \\mathbf{F}_{Di}$, which is minus the power delivered by all
            friction forces. Energy lost by the system becomes heat.`}
          </p>
          <p>
            {`The next example uses a damped oscillator with $\\mathcal{F} = \\hat{b}\\,\\dot{x}^2$.
            Here $\\hat{b}$ is written with no factor of $\\frac{1}{2}$ out front. That
            choice is on purpose: differentiating the square then drops a clean factor
            of 2, giving the friction term $2\\hat{b}\\,\\dot{x}$.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`For a damped harmonic oscillator with $\\mathcal{F} = \\hat{b}\\,\\dot{x}^2$,
              apply the energy-rate equation to find $dE/dt$. What does it depend on?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$\\partial \\mathcal{F}/\\partial \\dot{x} = 2\\hat{b}\\,\\dot{x}$, so
                $dE/dt = -\\dot{x} \\cdot 2\\hat{b}\\,\\dot{x} = -2\\hat{b}\\,\\dot{x}^2$.
                It depends on the square of velocity. It is always negative, always draining
                energy regardless of direction of motion.`}
              </p>
            </details>
          </div>
          <div>
            <DissipatedEnergyDecay />
            <p>
              {`Mechanical energy $E(t) \\propto e^{-2\\beta t}$ (solid) and the
              instantaneous power loss $-dE/dt$ (dashed). Increase $\\beta$ to watch
              both curves steepen.`}
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Start from $E = \\dot{q}^\\alpha \\frac{\\partial L}{\\partial \\dot{q}^\\alpha} - L$.
              Differentiate with respect to time using the product rule. The
              $\\partial L/\\partial q^\\alpha$ terms cancel against the EL equation,
              leaving only the $D_\\alpha \\dot{q}^\\alpha = -\\dot{q}^\\alpha \\frac{\\partial
              \\mathcal{F}}{\\partial \\dot{q}^\\alpha}$ contribution. That single
              surviving term is the power drained by friction.`}
            </p>
          </div>
          <p>
            {`This leak is what sets dissipation apart. A frictionless system has a
            time-translation symmetry that keeps $E$ constant. Friction breaks that
            symmetry, so $E$ no longer holds fixed. With that loss in view, you can ask
            what every losing system settles toward, which the next section answers.`}
          </p>
        </>,

        <>
          <h2>Why Every System Near Equilibrium Is a Harmonic Oscillator</h2>
          <p>
            {`Any one-freedom system (one that needs just a single coordinate to
            describe) near a stable equilibrium behaves like a harmonic oscillator.
            You already proved the potential half of this in Oscillations: Taylor-expand
            $V$ about a minimum, the linear term vanishes, and the quadratic survives as
            $V(x) \\approx \\frac{1}{2}V''(q_0)x^2 = \\frac{1}{2}kx^2$ with $k \\equiv V''(q_0)$.
            Here you need only the result, plus one new piece the oscillator setup also
            needs: the kinetic term.`}
          </p>
          <p>
            {`Start from a general one-freedom Lagrangian, where $\\tau(q)$ is a
            position-dependent mass coefficient:`}
          </p>
          <p className="lrn-eq">{`$$L = \\tfrac{1}{2}\\tau(q)\\,\\dot{q}^2 - V(q)$$`}</p>
          <p>
            {`Write $x = q - q_0$ for small displacements. Expand the kinetic term the
            same way you expanded $V$: $\\frac{1}{2}\\tau(q)\\dot{q}^2 = \\frac{1}{2}m\\dot{x}^2
            + \\frac{1}{2}rx\\dot{x}^2 + \\cdots$ where $m \\equiv \\tau(q_0)$ and $r \\equiv \\tau'(q_0)$.
            For small $x$, the $rx\\dot{x}^2$ term is higher order, so drop it. With the
            quadratic $V$ from above, the Lagrangian reduces to:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$L = \\tfrac{1}{2}m\\dot{x}^2 - \\tfrac{1}{2}kx^2$$`}
          </p>
          <p>
            {`This is exactly the harmonic oscillator Lagrangian, with natural frequency
            $\\omega_0 = \\sqrt{k/m}$. The quadratic wins because the linear term vanishes
            at a minimum by definition, so the Taylor series of $V$ starts at $x^2$, and
            $x^3$, $x^4$, and higher terms shrink faster than $x^2$ as $x \\to 0$.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A bead sits at the bottom of a bowl described by $V(x) = ax^4$ (no
              quadratic term). Does the standard small-oscillation argument apply?
              Predict whether oscillation frequency is well-defined before reading on.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Not in the standard sense. The argument requires $V''(q_0) \\neq 0$ to
                define $k$. When $V''(q_0) = 0$, the leading restoring term is quartic
                (fourth power, $x^4$). The system is then a nonlinear oscillator: its
                frequency depends on amplitude, not fixed. The standard harmonic
                approximation fails.`}
              </p>
            </details>
          </div>
          <div className="lrn-callout">
            <p>
              {`For oscillations to occur, the lowest-power term in the Taylor expansion
              of $V$ about $q_0$ must be even (quadratic, quartic, and so on). If
              $V''(q_0)$ vanishes, the first term is quartic and the system is nonlinear
              (a separate, harder case).`}
            </p>
          </div>
        </>,

        <>
          <h2>The Damped Harmonic Oscillator</h2>
          <p>
            {`Now combine the two pieces you just built. Use this whenever a system near
            a stable equilibrium also loses energy to linear velocity damping.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`You add the Rayleigh term $\\mathcal{F} = \\hat{b}\\,\\dot{x}^2$ to the
              oscillator $L = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2$. Predict whether
              the new equation of motion stays linear in $x$ and its derivatives.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`It stays linear. The Rayleigh term is quadratic in $\\dot{x}$, so its
                derivative $\\partial\\mathcal{F}/\\partial\\dot{x} = 2\\hat{b}\\,\\dot{x}$
                is linear. The result is $m\\ddot{x} + 2\\hat{b}\\,\\dot{x} + kx = 0$.`}
              </p>
            </details>
          </div>
          <p>
            {`Add the Rayleigh function $\\mathcal{F} = \\hat{b}\\,\\dot{x}^2$ to the
            harmonic oscillator Lagrangian $L = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2$.
            Apply the modified EL equation:`}
          </p>
          <p className="lrn-eq">
            {`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) - \\frac{\\partial L}{\\partial x} + \\frac{\\partial \\mathcal{F}}{\\partial \\dot{x}} = 0$$`}
          </p>
          <p>
            {`Compute each term: $\\frac{\\partial L}{\\partial \\dot{x}} = m\\dot{x}$, so
            $\\frac{d}{dt}(m\\dot{x}) = m\\ddot{x}$. Then $\\frac{\\partial L}{\\partial x} = -kx$.
            And $\\frac{\\partial \\mathcal{F}}{\\partial \\dot{x}} = 2\\hat{b}\\,\\dot{x}$.
            Substituting gives the damped harmonic oscillator equation:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">{`$$m\\ddot{x} + 2\\hat{b}\\,\\dot{x} + kx = 0$$`}</p>
          <p>
            {`The system is linear: $x$, $\\dot{x}$, and $\\ddot{x}$ all appear to the
            first power. This linearity holds because $\\mathcal{F}$ is quadratic in
            $\\dot{x}$. If $\\mathcal{F}$ were cubic or higher, the friction force would
            carry higher powers of $\\dot{x}$. The system would then become nonlinear.`}
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Two key parameters</div>
            <div className="lrn-definition-desc">
              <p>
                {`Damping factor: $\\beta = \\hat{b}/m$ (units: 1/time).
                Natural frequency: $\\omega_0 = \\sqrt{k/m}$ (units: rad/s).
                The damped frequency: $\\omega = \\sqrt{\\omega_0^2 - \\beta^2}$.`}
              </p>
            </div>
          </div>
          <p>
            {`You solved this same equation in Oscillations, so the solution forms are
            already familiar. The Lagrangian route here is the new part: the equation
            now drops out of $L$ and $\\mathcal{F}$ instead of being posited. The
            underdamped general solution is`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$x(t) = e^{-\\beta t}\\bigl(a\\cos\\omega t + b\\sin\\omega t\\bigr)$$`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The friction term in the equation is $2\\hat{b}\\dot{x}$, but the Rayleigh
              function is $\\mathcal{F} = \\hat{b}\\dot{x}^2$ with no factor of 2. Explain
              where the 2 comes from.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$\\partial \\mathcal{F}/\\partial \\dot{x} = \\partial(\\hat{b}\\dot{x}^2)/\\partial \\dot{x} = 2\\hat{b}\\dot{x}$.
                The factor of 2 comes from differentiating a square. The convention
                $\\mathcal{F} = \\hat{b}\\dot{x}^2$ (without the $\\frac{1}{2}$) is chosen
                precisely so that the equation of motion has $2\\hat{b}\\dot{x}$, which
                many authors write as $2m\\beta\\dot{x}$ with $\\beta = \\hat{b}/m$.`}
              </p>
            </details>
          </div>
          <div>
            <DampedOsc />
            <p>
              {`Live RK4 integration (a precise step-by-step numerical method) of
              $\\ddot{x} + 2\\beta\\dot{x} + \\omega_0^2 x = 0$. The dashed envelope
              $\\pm e^{-\\beta t}$ shows the exponential decay.`}
            </p>
          </div>
          <h3>Real-World Examples of the Damped Harmonic Oscillator</h3>
          <p>
            {`The equation $m\\ddot{x} + 2\\hat{b}\\dot{x} + kx = 0$ appears in many
            systems beyond a block on a spring.`}
          </p>
          <ul className="lrn-list">
            <li>
              {`A struck tuning fork or a plucked guitar string. The note rings, then
              fades as the vibration energy radiates away as sound. This is
              underdamped: many swings before the amplitude dies.`}
            </li>
            <li>
              {`The needle of an analytical balance or a moving-coil meter. A magnet
              induces eddy currents (swirling electric currents a moving magnet stirs
              up in metal) that drag on the needle. Engineers set this drag near
              critical damping. The needle then settles to its reading fast, without
              wobbling back and forth.`}
            </li>
            <li>
              {`A pendulum clock. Friction at the pivot and air drag drain a little
              energy from every swing. A wound spring or a falling weight feeds that
              energy back, which is why the clock must be rewound.`}
            </li>
          </ul>
        </>,

        <>
          <h2>Three Fates: Underdamped, Critical, and Overdamped</h2>
          <p>
            {`You met the three damping regimes in Oscillations. Here you see what
            produces them: the roots of the characteristic equation. Try the solution
            $x = e^{\\lambda t}$ in $m\\ddot{x} + 2\\hat{b}\\dot{x} + kx = 0$. The exponential
            cancels, leaving a quadratic for $\\lambda$:`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$m\\lambda^2 + 2\\hat{b}\\lambda + k = 0 \\;\\Rightarrow\\; \\lambda = \\frac{-\\hat{b} \\pm \\sqrt{\\hat{b}^2 - mk}}{m} = -\\beta \\pm \\sqrt{\\beta^2 - \\omega_0^2}$$`}
          </p>
          <p>
            {`The sign inside the square root sets the regime. Two complex roots
            ($\\beta < \\omega_0$) give the underdamped solution
            $x = e^{-\\beta t}(a\\cos\\omega t + b\\sin\\omega t)$, which oscillates while
            decaying. Two real roots ($\\beta > \\omega_0$) give the overdamped solution
            $x = e^{-\\beta t}(ae^{-\\nu t} + be^{\\nu t})$ with $\\nu = \\sqrt{\\beta^2 - \\omega_0^2}$,
            which creeps back without oscillating.`}
          </p>
          <p>
            {`At the boundary $\\beta = \\omega_0$ (critical damping), the discriminant
            $\\hat{b}^2 - mk$ vanishes and the two roots merge into one repeated root
            $\\lambda = -\\beta$. A repeated root forces a second, $t$-weighted solution,
            giving $x(t) = (A + Bt)e^{-\\beta t}$. Critical damping is the fastest return
            to equilibrium without overshoot (without passing the target and coming back).`}
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`In the overdamped case, write $x(t) = e^{-\\beta t}(ae^{-\\nu t} + be^{\\nu t})$.
              As $t \\to \\infty$, the $e^{\\nu t}$ term grows, but it is multiplied by
              $e^{-\\beta t}$. Since $\\beta > \\nu$ (because $\\nu = \\sqrt{\\beta^2 - \\omega_0^2} < \\beta$),
              the combination $e^{-(\\beta - \\nu)t}$ still decays to zero. Both terms go to
              zero, but the $be^{\\nu t}$ term decays more slowly. The system approaches
              the origin along the straight-line direction set by the slower mode.`}
            </p>
          </div>
        </>,

        <>
          <h2>Phase Portraits: Reading the Geometry of Damped Motion</h2>
          <p>
            {`The phase plane plots $x$ on the horizontal axis and $\\dot{x}$ on the
            vertical axis. Every state of the system is a single point. The trajectory
            over time is a curve in this plane. Damping changes the shape of these
            curves in a fundamental way.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`In the undamped case ($\\beta = 0$), the energy $E = \\frac{1}{2}m\\dot{x}^2 + \\frac{1}{2}kx^2$
              is conserved. What shape must the phase-plane trajectories take?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The level sets of $E$ (curves of constant energy) are ellipses in the
                $(x, \\dot{x})$ plane with
                semi-axes $c = \\sqrt{2E/k}$ along $x$ and $\\omega_0 c$ along $\\dot{x}$.
                Each trajectory is a closed ellipse: periodic, never spiraling in or out.`}
              </p>
            </details>
          </div>
          <div>
            <HarmonicPhasePortrait />
            <p>
              {`Undamped phase portrait: nested closed ellipses (elliptic singular point
              at the origin, a center the motion circles forever). Each ellipse is a
              constant-energy curve. No energy is lost.`}
            </p>
          </div>
          <h3>When Damping Wins: Overdamped Motion</h3>
          <p>
            {`Add damping and the closed ellipses open into spirals or curves that
            settle onto the origin. The character of that approach depends on $\\beta$
            vs $\\omega_0$.`}
          </p>
          <ul className="lrn-list">
            <li>
              {`Underdamped ($\\beta < \\omega_0$): trajectories spiral inward,
              winding around the origin. The origin is a focal point.`}
            </li>
            <li>
              {`Overdamped ($\\beta > \\omega_0$): trajectories approach the origin
              along a straight line in the phase plane with slope $\\nu - \\beta$,
              where $\\nu = \\sqrt{\\beta^2 - \\omega_0^2}$.
              The origin is a nodal point.`}
            </li>
          </ul>
          <p>
            {`The faint dotted ellipses in the phase portrait below are the
            constant-energy contours from the undamped case. Damped trajectories cross
            these contours inward, losing energy with each crossing.`}
          </p>
          <div>
            <DampedPhasePortrait />
            <p>
              {`Phase portrait of the damped oscillator. Below the critical damping threshold
              ($\\beta < \\omega_0 = 2$): inward spirals converging on a focal point.
              Above threshold: trajectories converge along the nodal slope (dashed line).
              Drag the $\\beta$ slider across the boundary to see the transition.`}
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`In the overdamped phase portrait, there is a straight line through the
              origin. Explain why the trajectories approach this line and follow it
              into the origin, rather than spiraling around it.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`In the overdamped case, $x(t) = e^{-\\beta t}(ae^{-\\nu t} + be^{\\nu t})$.
                As $t \\to \\infty$, the fast-decaying term $ae^{-(\\beta+\\nu)t}$ becomes
                negligible compared to the slow-decaying term $be^{-(\\beta-\\nu)t}$.
                The velocity satisfies $\\dot{x} \\approx -(\\beta - \\nu)x$ asymptotically.
                So $\\dot{x}/x \\to -(\\beta - \\nu)$, which is the
                slope of the line in the phase plane. No complex exponents means no
                oscillation, hence no spiraling.`}
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Live Simulation: Viscous Mass-Spring-Damper</h2>
          <p>
            {`This simulation uses Matter.js to integrate the honest equations for a
            mass attached to a spring with viscous (velocity-proportional) damping.
            The spring provides the restoring force $-kx$; the frictionAir parameter
            provides the $2\\hat{b}\\dot{x}$ term in the damped-oscillator equation. This is the same
            physics, not an animation.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`You crank the damping slider all the way to the right, past critical
              damping. Predict whether the mass will cross the equilibrium line even
              once before it settles.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`At most once. In the overdamped regime ($\\beta > \\omega_0$) the mass
                creeps back to equilibrium without true oscillation. It can overshoot a
                single time for some starting conditions, then never crosses again.`}
              </p>
            </details>
          </div>
          <div>
            <MassSpringDamperSim />
            <p>
              {`Drag the damping slider from left (underdamped: the mass oscillates)
              to right (overdamped: the mass creeps back without crossing equilibrium).
              The trail plots $x(t)$ in real time.`}
            </p>
          </div>
          <div className="lrn-callout">
            <p>
              {`The frictionAir in Matter.js acts as a velocity-proportional drag:
              at each timestep, the engine removes a fraction of momentum proportional
              to velocity. This is exactly the Rayleigh dissipation force $F_f = -bv$
              applied to a rigid body. The spring stiffness produces the $kx$ restoring
              force via the constraint length.`}
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `What is the modified Euler-Lagrange equation when nonpotential forces are present? State what each term represents.`,
        a: `The equation is $\\frac{d}{dt}(\\partial L/\\partial \\dot{q}^\\alpha) - \\partial L/\\partial q^\\alpha = D_\\alpha$. $L$ contains only the conservative (potential) part of the physics. $D_\\alpha = \\sum_i \\mathbf{F}_{Di} \\cdot \\partial \\mathbf{x}_i/\\partial q^\\alpha$ is the generalized nonpotential force in coordinate $q^\\alpha$. Without $D_\\alpha$, friction and drag would be invisible to the equation.`
      },
      {
        q: `A particle moves in one dimension with Rayleigh function $\\mathcal{F} = \\frac{1}{2}bv^2$. What is the friction force $F_f$? Show the calculation.`,
        a: `$F_f = -\\partial \\mathcal{F}/\\partial v = -\\partial(\\frac{1}{2}bv^2)/\\partial v = -bv$. The negative sign ensures the force opposes velocity: when $v > 0$, the force is negative (braking), and when $v < 0$, the force is positive (braking in the other direction).`
      },
      {
        q: `PREDICT: A spring-mass system has $\\omega_0 = 3$ rad/s and damping factor $\\beta = 1$ rad/s. Is the system underdamped, critically damped, or overdamped?`,
        a: `Underdamped, because $\\beta = 1 < \\omega_0 = 3$. The damped frequency is $\\omega = \\sqrt{9 - 1} = \\sqrt{8} \\approx 2.83$ rad/s, which is real and positive. The system oscillates with exponentially decaying amplitude.`
      },
      {
        q: `Derive the equation of motion $m\\ddot{x} + 2\\hat{b}\\dot{x} + kx = 0$ starting from $L = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2$ and $\\mathcal{F} = \\hat{b}\\dot{x}^2$.`,
        a: `Apply $\\frac{d}{dt}(\\partial L/\\partial \\dot{x}) - \\partial L/\\partial x + \\partial \\mathcal{F}/\\partial \\dot{x} = 0$. Compute each term: $\\partial L/\\partial \\dot{x} = m\\dot{x}$, so $\\frac{d}{dt}(m\\dot{x}) = m\\ddot{x}$. Then $\\partial L/\\partial x = -kx$, giving $-\\partial L/\\partial x = +kx$. Finally $\\partial \\mathcal{F}/\\partial \\dot{x} = 2\\hat{b}\\dot{x}$. Summing: $m\\ddot{x} + kx + 2\\hat{b}\\dot{x} = 0$.`
      },
      {
        q: `ERROR DETECTION: A student writes the rate of energy loss as $dE/dt = +\\dot{q}\\,\\partial \\mathcal{F}/\\partial \\dot{q}$. What is wrong?`,
        a: `The sign is wrong. The correct equation is $dE/dt = -\\dot{q}\\,\\partial \\mathcal{F}/\\partial \\dot{q}$. When $\\mathcal{F} > 0$, the right side is negative, confirming that energy decreases. The student's version would imply energy increases due to dissipation, which contradicts the physics.`
      },
      {
        q: `TRANSFER: An RLC circuit has inductance $L_0$, resistance $R$, and capacitance $C$. The charge $q(t)$ satisfies $L_0 \\ddot{q} + R\\dot{q} + q/C = 0$. Identify $\\beta$ and $\\omega_0$ for this circuit.`,
        a: `Match with $m\\ddot{x} + 2\\hat{b}\\dot{x} + kx = 0$: set $m = L_0$, $2\\hat{b} = R$, $k = 1/C$. Then $\\beta = \\hat{b}/m = R/(2L_0)$ and $\\omega_0 = \\sqrt{k/m} = \\sqrt{1/(L_0 C)} = 1/\\sqrt{L_0 C}$. Critical damping occurs when $R = 2\\sqrt{L_0/C}$.`
      },
      {
        q: `What is the difference between the general dissipative function $\\mathcal{F} = \\sum_i \\int_0^{v_i} g_i(z)z\\,dz$ and the Rayleigh function $\\mathcal{F} = \\sum_i \\frac{1}{2}b_i v_i^2$?`,
        a: `The general dissipative function allows $g_i(v_i)$ to be any function of speed, capturing non-linear drag (turbulent drag $\\propto v^2$, for example). The Rayleigh function is the special case where each $g_i = b_i$ is a constant, giving linear velocity-proportional friction. The Rayleigh form produces the simplest (linear) equations of motion.`
      },
      {
        q: `ELABORATE: Why can't you eliminate a dissipative force $D_\\alpha$ by a clever choice of generalized coordinates, even though you can sometimes simplify potential forces that way?`,
        a: `Coordinate choices affect $\\partial \\mathbf{x}_i/\\partial q^\\alpha$ but not the physical power $\\mathbf{F}_{Di} \\cdot \\mathbf{v}_i$ being dissipated. A coordinate transformation can redistribute $D_\\alpha$ across coordinates but cannot make it zero. The total energy loss rate $dE/dt = -\\dot{q}^\\alpha D_\\alpha$ is a physical scalar that coordinate changes cannot remove. In contrast, adding a gradient to $V$ (a gauge transformation) changes $V$ but not the forces $-\\nabla V$.`
      },
      {
        q: `PREDICT: The undamped phase portrait shows nested ellipses. What happens to these ellipses when you add small damping $\\beta \\ll \\omega_0$?`,
        a: `They open into inward spirals. Each successive loop sits inside the previous one because energy decreases on every cycle. The system still oscillates (since $\\beta < \\omega_0$), but the amplitude shrinks. The origin changes from an elliptic (center) point to a focal (spiral) point. The constant-energy ellipses from the undamped case become the reference contours that the spiral crosses inward.`
      },
      {
        q: `TRANSFER: A pendulum near equilibrium has length $\\ell$ and is immersed in a viscous fluid with drag coefficient $b$ per unit mass per unit velocity. Write the equation of motion using the modified Euler-Lagrange equation.`,
        a: `Near equilibrium, $L = \\frac{1}{2}\\ell^2 m\\dot{\\theta}^2 - \\frac{1}{2}mg\\ell\\,\\theta^2$ (with $\\omega_0^2 = g/\\ell$, mass $m$). The Rayleigh function is $\\mathcal{F} = \\frac{1}{2}b\\ell^2 m\\dot{\\theta}^2$. Apply the modified EL equation: $m\\ell^2 \\ddot{\\theta} + b\\ell^2 m\\dot{\\theta} + mg\\ell\\,\\theta = 0$, which simplifies to $\\ddot{\\theta} + b\\dot{\\theta} + (g/\\ell)\\theta = 0$. This is the standard damped pendulum equation with $2\\hat{b}/m = b$ and $\\omega_0 = \\sqrt{g/\\ell}$.`
      },
      {
        q: `What determines whether the phase-plane origin is a focal point or a nodal point for the damped harmonic oscillator?`,
        a: `The ratio $\\beta/\\omega_0$ determines the type. When $\\beta < \\omega_0$ (underdamped), the damped frequency $\\omega = \\sqrt{\\omega_0^2 - \\beta^2}$ is real, trajectories spiral into a focal point. When $\\beta > \\omega_0$ (overdamped), $\\omega$ becomes imaginary, there is no oscillation, and trajectories approach a nodal point along the straight line $\\dot{x}/x = -(\\beta - \\nu)$ with $\\nu = \\sqrt{\\beta^2 - \\omega_0^2}$.`
      },
      {
        q: `SELF-EXPLAIN: A student says "the Rayleigh function $\\mathcal{F}$ is just like a potential energy for friction." Evaluate this claim. Where is it right? Where does it break down?`,
        a: `It is right in one way: both $V$ and $\\mathcal{F}$ are scalar functions from which forces are derived by differentiation. For $V$: force $= -\\partial V/\\partial q$. For $\\mathcal{F}$: friction force $= -\\partial \\mathcal{F}/\\partial \\dot{q}$. The analogy breaks down because $V$ is a function of positions and $\\mathcal{F}$ is a function of velocities. $V$ enters $L$ directly; $\\mathcal{F}$ appears on the right-hand side of the EL equation. The power of $V$ is path-independent; the power of $\\mathcal{F}$ is always negative (always drains energy), which $V$ cannot do.`
      },
      {
        q: `ELABORATE: Why does every one-freedom dynamical system near a stable equilibrium behave like a harmonic oscillator, regardless of the specific form of $V(q)$?`,
        a: `At a stable equilibrium $q_0$, the potential has a minimum: $V'(q_0) = 0$ and $V''(q_0) > 0$. Taylor-expanding $V$ about $q_0$, the linear term vanishes and the leading term is $\\frac{1}{2}V''(q_0)x^2 = \\frac{1}{2}kx^2$. For small $x$, cubic and higher terms are negligible compared to the quadratic. The same Taylor expansion of the kinetic term reduces to $\\frac{1}{2}m\\dot{x}^2$. The result is the harmonic oscillator Lagrangian $L = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2$ for every such system. This is why the damped harmonic oscillator shows up so broadly in physics and engineering.`
      },
      {
        q: `TRANSFER: A door closer has a spring constant $k = 50$ N/m and a hydraulic damping coefficient $2\\hat{b} = 20$ N·s/m. The door mass is $m = 2$ kg. Find $\\beta$, $\\omega_0$, and determine the damping regime.`,
        a: `$\\omega_0 = \\sqrt{k/m} = \\sqrt{50/2} = 5$ rad/s. $\\hat{b} = 10$ N·s/m, so $\\beta = \\hat{b}/m = 10/2 = 5$ rad/s. Since $\\beta = \\omega_0 = 5$ rad/s, the system is critically damped. This is the designed condition: the door closes as fast as possible without slamming (no overshoot).`
      },
      {
        q: `Compute the rate of energy loss $dE/dt$ for a damped oscillator with $m = 1$ kg, $\\hat{b} = 0.5$ N·s/m, and instantaneous velocity $\\dot{x} = 2$ m/s.`,
        a: `The Rayleigh function is $\\mathcal{F} = \\hat{b}\\dot{x}^2$, so $\\partial \\mathcal{F}/\\partial \\dot{x} = 2\\hat{b}\\dot{x}$. From the energy-rate equation: $dE/dt = -\\dot{x}(2\\hat{b}\\dot{x}) = -2\\hat{b}\\dot{x}^2 = -2(0.5)(4) = -4$ W. The system loses 4 watts of mechanical power to heat at that instant.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Friction and Non-Conservative Forces',
      sections: [
        <>
          <h2>Core Equations</h2>

          <h3>Force Decomposition</h3>
          <p className="lrn-eq">{`$$\\mathbf{F}_i = \\mathbf{F}_{Pi} + \\mathbf{F}_{Di}$$`}</p>
          <p>
            {`$\\mathbf{F}_{Pi}$: potential part. $\\mathbf{F}_{Di}$: nonpotential part.
            When to use: any time forces cannot all be written as $-\\nabla V$.`}
          </p>

          <h3>Generalized Nonpotential Force</h3>
          <p className="lrn-eq">
            {`$$D_\\alpha = \\sum_{i=1}^N \\mathbf{F}_{Di} \\cdot \\frac{\\partial \\mathbf{x}_i}{\\partial q^\\alpha}$$`}
          </p>
          <p>
            {`When to use: to project nonpotential particle forces onto generalized coordinates.`}
          </p>

          <h3>Modified Euler-Lagrange Equation</h3>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{q}^\\alpha}\\right) - \\frac{\\partial L}{\\partial q^\\alpha} = D_\\alpha$$`}
          </p>
          <p>
            {`When to use: whenever $D_\\alpha \\neq 0$ (nonpotential forces present).
            $L$ still contains only the conservative part.`}
          </p>

          <h3>Modified EL with Dissipation Function</h3>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{q}^\\alpha}\\right) - \\frac{\\partial L}{\\partial q^\\alpha} + \\frac{\\partial \\mathcal{F}}{\\partial \\dot{q}^\\alpha} = 0$$`}
          </p>
          <p>
            {`When to use: when all nonpotential forces are velocity-dependent and
            directed against motion; replace $D_\\alpha$ with $-\\partial \\mathcal{F}/\\partial \\dot{q}^\\alpha$.`}
          </p>

          <h3>General Dissipative Function</h3>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\mathcal{F} = \\sum_{i=1}^N \\int_0^{v_i} g_i(z)\\, z\\, dz$$`}
          </p>
          <p>
            {`When to use: for any velocity-dependent friction with $g_i(v_i) > 0$.
            The friction force on particle $i$ is $\\mathbf{F}_{Di} = -g_i(v_i)\\mathbf{v}_i$.`}
          </p>

          <h3>Rayleigh Function (Linear Drag)</h3>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\mathcal{F} = \\sum_{i=1}^N \\tfrac{1}{2}\\, b_i\\, v_i^2$$`}
          </p>
          <p>
            {`When to use: forces proportional to speed ($g_i = b_i = \\text{const}$).
            Friction force: $F_f = -\\partial \\mathcal{F}/\\partial v = -b\\,v$.`}
          </p>
          <p className="lrn-eq lrn-eq-hero">
            {`$$F_f = -\\frac{\\partial \\mathcal{F}}{\\partial v} = -b\\,v$$`}
          </p>

          <h3>Rate of Energy Dissipation</h3>
          <p className="lrn-eq lrn-eq-hero">
            {`$$\\frac{dE}{dt} = -\\dot{q}^\\alpha \\frac{\\partial \\mathcal{F}}{\\partial \\dot{q}^\\alpha}$$`}
          </p>
          <p>
            {`When to use: to find how fast mechanical energy converts to heat.
            Always $\\leq 0$ for dissipative $\\mathcal{F}$.`}
          </p>

          <h3>Damped Harmonic Oscillator Equation</h3>
          <p className="lrn-eq lrn-eq-hero">
            {`$$m\\ddot{x} + 2\\hat{b}\\,\\dot{x} + k\\,x = 0$$`}
          </p>
          <p>
            {`When to use: any one-freedom system near a stable equilibrium with linear
            velocity damping. Derived from $L = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2$
            and $\\mathcal{F} = \\hat{b}\\dot{x}^2$ via the modified EL equation.`}
          </p>

          <h3>DHO Solution (Underdamped)</h3>
          <p className="lrn-eq lrn-eq-hero">
            {`$$x(t) = e^{-\\beta t}\\bigl(a\\cos\\omega t + b\\sin\\omega t\\bigr)$$`}
          </p>
          <p>
            {`Parameters: $\\beta = \\hat{b}/m$, $\\omega = \\sqrt{\\omega_0^2 - \\beta^2}$,
            $\\omega_0 = \\sqrt{k/m}$. When to use: $\\beta < \\omega_0$ (underdamped).`}
          </p>

          <h3>Characteristic Equation</h3>
          <p className="lrn-eq">
            {`$$m\\lambda^2 + 2\\hat{b}\\lambda + k = 0 \\;\\Rightarrow\\; \\lambda = \\frac{-\\hat{b} \\pm \\sqrt{\\hat{b}^2 - mk}}{m}$$`}
          </p>
          <p>
            {`When to use: to classify the three regimes. Two complex roots give
            underdamped; a repeated real root ($\\hat{b}^2 = mk$) gives critical
            damping with $x(t) = (A + Bt)e^{-\\beta t}$; two real roots give overdamped.`}
          </p>

          <h3>Overdamped Nodal Slope</h3>
          <p className="lrn-eq">
            {`$$\\lim_{t\\to\\infty} \\frac{\\dot{x}}{x} = -(\\beta - \\nu), \\quad \\nu = \\sqrt{\\beta^2 - \\omega_0^2}$$`}
          </p>
          <p>
            {`When to use: overdamped case ($\\beta > \\omega_0$) to identify the nodal
            direction (the straight line trajectories settle onto) in the phase portrait.`}
          </p>
        </>,

        <>
          <h2>Damping Regimes: Quick Reference</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Underdamped</span>
              <p>
                {`Condition: $\\beta < \\omega_0$. Damped frequency: $\\omega = \\sqrt{\\omega_0^2 - \\beta^2}$ (real). Behavior: oscillates with decaying amplitude. Phase portrait: inward spiral to focal point.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Critically Damped</span>
              <p>
                {`Condition: $\\beta = \\omega_0$. Behavior: fastest return to zero without oscillation. Solution: $(A + Bt)e^{-\\beta t}$. Phase portrait: boundary between spiral and node.`}
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Overdamped</span>
              <p>
                {`Condition: $\\beta > \\omega_0$. Let $\\nu = \\sqrt{\\beta^2 - \\omega_0^2}$. Solution: $e^{-\\beta t}(ae^{-\\nu t} + be^{\\nu t})$. Behavior: no oscillation, slow decay. Phase portrait: nodal point, trajectories approach along slope $-(\\beta - \\nu)$.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Undamped ($\\beta = 0$)`}</span>
              <p>
                {`Condition: $\\hat{b} = 0$. $\\omega = \\omega_0$. Solution: $a\\cos\\omega_0 t + b\\sin\\omega_0 t$. Energy conserved. Phase portrait: nested ellipses (elliptic singular point).`}
              </p>
            </div>
          </div>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}
