import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  HoopOnIncline,
  StrongFieldConfinement,
  HolonomicVsNonholonomic,
  ConstraintForceMultiplier
} from '../../../../../components/viz'

export default function HolonomicAndNonHolonomicConstraints() {
  const config = {
    cssPrefix: 'hnhc',
    documentTitle: 'Holonomic and Non-Holonomic Constraints - AETHER',
    customCss: null,
    learning: {
      category: 'Module 2',
      groupTitle: 'Lagrangian Mechanics and Variational Principles',
      title: 'Holonomic and Non-Holonomic Constraints',
      subtitle:
        'Constraints tie coordinates together. Knowing whether a constraint is integrable determines which mathematical tools apply and whether the constraint force appears in your answer.',
      sections: [
        // SECTION 1 · WHAT A CONSTRAINT IS
        <>
          <h2>What a Constraint Is</h2>
          <p>
            A <strong>constraint</strong> is any condition that limits the possible configurations
            or motions of a mechanical system. A bead threaded on a wire cannot leave the wire. A
            pendulum bob must stay at fixed distance from the pivot. A wheel must keep contact with
            the ground. In each case, not all coordinates are free. Some combination of them is
            forced to satisfy an equation.
          </p>
          <p>
            D'Alembert's principle named the two kinds of constraint and used the holonomic count.
            Here we make the holonomic-versus-nonholonomic split sharp and show what to do with
            each.
          </p>
          <p>
            When constraints exist, the generalized coordinates you choose may not all be
            independent. The standard Lagrange equations assume independence. Their last step picks
            out each equation by setting each {`$\\delta q_i$`} independently to zero. When
            coordinates are constrained, that step fails. You must then either reduce to truly
            independent coordinates or handle the dependence directly.
          </p>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Holonomic constraint</div>
            <div className="lrn-definition-desc">
              <p>
                A constraint of the form {`$f(q_1, q_2, \\ldots, q_n, t) = 0$`}. It depends only on
                coordinates and time, not on velocities. Each such equation removes one degree of
                freedom. You can solve for one coordinate in terms of the others and substitute,
                leaving only independent coordinates for the Lagrange equations.
              </p>
            </div>
          </div>
          <p>
            Use holonomic constraints when you need to count degrees of freedom or when you want to
            work in reduced coordinates. A pendulum is a classic example: the bob lives on a circle,
            so {`$x^2 + y^2 = l^2$`} eliminates one coordinate and leaves one degree of freedom, the
            angle {`$\\theta$`}.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A bead slides on a wire shaped like a parabola. How many degrees of freedom does it
              have after the constraint? Does the accessible configuration space shrink to a
              lower-dimensional set?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The bead in the plane normally has two degrees of freedom {`$(x, y)$`}. The parabola
                imposes one holonomic constraint {`$y = ax^2$`}, leaving one degree of freedom. The
                accessible set is the curve itself. Every point off the parabola is unreachable.
                This is the defining feature of holonomic constraints: they collapse the reachable
                set to a lower-dimensional surface.
              </p>
            </details>
          </div>

          <HolonomicVsNonholonomic />

          <h3>Nonholonomic constraints</h3>
          <p>
            A <strong>nonholonomic</strong> constraint restricts velocities in a way that cannot be
            written as {`$f(q,t)=0$`}. A coin rolling free on a flat surface is the classic example.
            The coin's contact point must have zero lateral velocity. In terms of coordinates{' '}
            {`$(x, y, \\psi)$`} (position and heading), this reads{' '}
            {`$\\dot x \\sin\\psi = \\dot y \\cos\\psi$`}. No integration of this expression yields
            a function {`$f(x,y,\\psi)=0$`}. The constraint is non-integrable.
          </p>
          <p>
            Here is the crucial point. The velocity direction is restricted at each instant. Even
            so, by chaining many small allowed moves you can still reach any configuration. The full{' '}
            {`$(x, y, \\psi)$`} space stays reachable. Nonholonomic constraints show up in robot
            motion planning, vehicle dynamics, and any system where direction-of-motion is
            controlled but position is not directly fixed.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">HOW TO TELL THEM APART</span>
            <p>
              How do you check whether a velocity constraint is secretly holonomic? Write it as a
              differential form {`$\\sum_k a_k\\,dq_k = 0$`}. It is holonomic when this form is the
              exact differential of some function {`$f$`}, either directly or after multiplying by
              an integrating factor. Then {`$\\sum_k a_k\\,dq_k = df$`}, and integrating gives the
              position constraint {`$f(q,t) = \\text{const}$`}.
            </p>
            <p>
              For just two variables, such a form is always integrable, so it is always holonomic.
              With three or more variables it can fail. For {`$P\\,dx + Q\\,dy + R\\,dz = 0$`} the
              test is {`$\\mathbf{X}\\cdot(\\nabla\\times\\mathbf{X}) = 0$`} with{' '}
              {`$\\mathbf{X} = (P, Q, R)$`}. The rolling-coin form has three variables and fails
              this test, so it is genuinely nonholonomic.
            </p>
          </div>
          <div className="lrn-insight">
            <p>
              Rolling on a line versus rolling on a plane. A hoop rolling along a fixed straight
              line obeys {`$r\\,d\\theta = dx$`}. That has two variables and integrates to{' '}
              {`$r\\theta = x + \\text{const}$`}, so it is <strong>holonomic</strong>. A coin free
              on a plane can also turn its heading, so its constraint has three variables and does
              not integrate. That one is <strong>nonholonomic</strong>. The same word "rolling" can
              mean either, depending on whether the path can curve.
            </p>
          </div>
        </>,

        // SECTION 2 · SEMI-HOLONOMIC FORM
        <>
          <h2>Semi-Holonomic Form and Dependent Coordinates</h2>
          <p>
            The Lagrange multiplier method handles a broad class called{' '}
            <strong>semi-holonomic constraints</strong>: equation constraints that may depend on
            velocities, not just position. They take the form
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$f_\\alpha(q_1, \\ldots, q_n,\\; \\dot q_1, \\ldots, \\dot q_n,\\; t) = 0, \\quad \\alpha = 1, \\ldots, m$$`}</span>
          </div>
          <p>
            The equals sign matters: this form covers equality constraints only. Inequality limits,
            like a ball kept on one side of a wall, are not of this type. Each equation involves
            both coordinates and velocities. A common subcase is the linear differential form:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\sum_k a_{\\alpha k}(q,t)\\, dq_k + a_{\\alpha t}(q,t)\\, dt = 0$$`}</span>
          </div>
          <p>
            This is the same velocity constraint written with differentials, using{' '}
            {`$dq_k = \\dot q_k\\,dt$`}. Here {`$a_{\\alpha k}$`} is the coefficient of each{' '}
            {`$dq_k$`} in constraint {`$\\alpha$`}, and {`$a_{\\alpha t}$`} is the coefficient of{' '}
            {`$dt$`}. Rolling constraints, like {`$r\\,d\\theta = dx$`} for a hoop, fit this
            pattern. Holonomic constraints {`$f(q,t)=0$`} also fit: they are the special case where{' '}
            {`$a_{\\alpha k} = \\partial f/\\partial q_k$`} and the velocity dependence is a total
            derivative.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              When you have {`$m$`} constraints and {`$n$`} generalized coordinates, how many
              unknowns does the system have, and how many equations do you need?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You have {`$n$`} coordinate trajectories {`$q_k(t)$`} and {`$m$`} multiplier
                functions {`$\\lambda_\\alpha(t)$`}: a total of {`$n + m$`} unknowns. The {`$n$`}{' '}
                Lagrange equations plus the {`$m$`} constraint equations give exactly {`$n + m$`}{' '}
                equations. The system is determined.
              </p>
            </details>
          </div>
          <p>
            The problem with nonholonomic systems is that generalized coordinates cannot be reduced
            to a smaller independent set. Trying to eliminate coordinates would require integrating
            the velocity constraint, which is impossible by definition. The multiplier approach
            avoids this: it keeps all {`$n$`} coordinates and adds {`$m$`} multipliers instead of
            reducing.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Standard Lagrange equations derive from Hamilton's principle by requiring each{' '}
              {`$\\delta q_i$`} to be free and independent. The {`$\\delta q_i$`} are the virtual
              displacements: tiny imagined shifts in each coordinate at a frozen instant. For
              constrained systems they are not all independent.
            </p>
            <p>
              The multiplier trick adds terms {`$\\lambda_\\alpha f_\\alpha$`} inside the action
              integral. With the right {`$\\lambda_\\alpha$`}, the sum over constrained
              displacements splits into independent parts. The multipliers handle the dependent
              directions, and the remaining independent directions reproduce the standard equations.
            </p>
          </div>
        </>,

        // SECTION 3 · LAGRANGE MULTIPLIER METHOD
        <>
          <h2>The Lagrange Multiplier Method</h2>
          <p>
            Start from Hamilton's principle for an unconstrained system:{' '}
            {`$\\delta \\int L\\,dt = 0$`}. Now take a system with {`$m$`} semi-holonomic
            constraints {`$f_\\alpha = 0$`}. Multiply each constraint by an undetermined function{' '}
            {`$\\lambda_\\alpha(t)$`} and add it to the Lagrangian. The{' '}
            <strong>modified Hamilton's principle</strong> is
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\delta \\int \\!\\left(L + \\sum_\\alpha \\lambda_\\alpha f_\\alpha\\right) dt = 0$$`}</span>
          </div>
          <p>
            Now treat all {`$n$`} coordinates {`$q_k$`} and all {`$m$`} multipliers{' '}
            {`$\\lambda_\\alpha$`} as independent variables. Varying {`$\\lambda_\\alpha$`}
            recovers the constraint equations {`$f_\\alpha = 0$`}. Varying the {`$q_k$`} gives the{' '}
            {`$n$`} equations of motion:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q_k} - \\frac{\\partial L}{\\partial q_k} = Q_k$$`}</span>
          </div>
          <p>where the generalized constraint force is</p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$Q_k = \\sum_\\alpha \\left\\{ \\lambda_\\alpha \\left[\\frac{\\partial f_\\alpha}{\\partial q_k} - \\frac{d}{dt}\\frac{\\partial f_\\alpha}{\\partial \\dot q_k}\\right] - \\dot\\lambda_\\alpha\\frac{\\partial f_\\alpha}{\\partial \\dot q_k} \\right\\}$$`}</span>
          </div>
          <p>
            Where do the velocity terms come from? Varying the extra term gives{' '}
            {`$\\lambda_\\alpha\\big(\\frac{\\partial f_\\alpha}{\\partial q_k}\\delta q_k + \\frac{\\partial f_\\alpha}{\\partial \\dot q_k}\\delta \\dot q_k\\big)$`}
            . The {`$\\delta\\dot q_k$`} piece is handled the same way as in the Euler-Lagrange
            derivation: integrate by parts in time to turn {`$\\delta\\dot q_k$`} into{' '}
            {`$\\delta q_k$`}. That differentiation hits both {`$\\lambda_\\alpha$`} and{' '}
            {`$\\partial f_\\alpha/\\partial \\dot q_k$`}, producing the {`$\\frac{d}{dt}$`} term
            and the {`$\\dot\\lambda_\\alpha$`} term above.
          </p>
          <p>
            Together these {`$n$`} motion equations and {`$m$`} constraint equations form a complete
            system for the {`$n + m$`} unknowns {`$q_k(t)$`} and {`$\\lambda_\\alpha(t)$`}.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              For a holonomic constraint {`$f(q,t) = 0$`} with no velocity dependence, how does the
              general {`$Q_k$`} expression simplify?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                When {`$f$`} does not depend on {`$\\dot q$`}, all the{' '}
                {`$\\partial f/\\partial \\dot q_k$`} terms are zero. The generalized constraint
                force reduces to {`$Q_k = \\lambda \\, \\partial f / \\partial q_k$`}. This is the
                classical form for holonomic constraints: the constraint force is proportional to
                the gradient of the constraint function in configuration space.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Eliminate Coordinates</span>
              <p>
                Substitute the constraint to reduce to independent coordinates. Clean equations of
                motion. Constraint forces disappear. Simpler algebra when forces are not needed.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Keep Multipliers</span>
              <p>
                Keep all coordinates, add {`$m$`} multipliers. More equations but constraint forces
                appear as outputs. Required for nonholonomic systems. Useful when you need the
                reaction force.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              After the variation splits into a sum over all {`$n$`} coordinates {`$q_k$`}, the{' '}
              {`$m$`} dependent directions cannot vanish on their own. You pick the {`$m$`}{' '}
              multipliers {`$\\lambda_\\alpha$`} so their equations hold. The remaining {`$n - m$`}{' '}
              directions are free, so each of their brackets must vanish too. Every bracket then
              gives one equation of motion.
            </p>
          </div>
        </>,

        // SECTION 4 · PHYSICAL MEANING OF λ
        <>
          <h2>Physical Meaning of the Multipliers</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The multiplier {`$\\lambda$`} starts as a pure math trick. Do you expect it to carry
              any physical meaning?
            </p>
            <p>For the rolling hoop, what real force do you think {`$\\lambda$`} ends up being?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The multiplier is the generalized force of constraint. For the hoop, {`$\\lambda$`}
                is exactly the static friction at the contact point.
              </p>
              <p>
                So the trick is not just bookkeeping. It hands you a real, measurable force as part
                of the answer.
              </p>
            </details>
          </div>
          <p>
            The multipliers {`$\\lambda_\\alpha$`} are not just mathematical bookkeeping. They carry
            direct physical meaning. The generalized constraint force {`$Q_k$`} that appears on the
            right side of the equations of motion is exactly the force the constraint mechanism
            exerts on the system.
          </p>
          <p>
            Here is why. Remove the physical constraint entirely. Instead, apply external
            generalized forces {`$Q_k'$`} to each coordinate so the system follows the same
            trajectory it would under the constraint. Both motions obey the same equations of
            motion, and a given trajectory needs one set of forces. So {`$Q_k' = Q_k$`}: the applied
            forces that reproduce the constrained motion are exactly the forces of constraint. The
            multiplier method delivers them as part of the solution, with no need to model the
            detailed mechanism of the constraint.
          </p>
          <p>
            These multiplier forces are <strong>ideal</strong> constraint forces, the
            no-virtual-work kind D'Alembert's principle relies on:{' '}
            {`$\\sum_k Q_k \\,\\delta q_k = 0$`} for any virtual displacement {`$\\delta q$`} that
            respects the constraint. The rolling hoop is the classic case, worked just below.
          </p>

          <ConstraintForceMultiplier />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the force diagram above, the friction force points up the incline at the contact
              point. Why does this force do no work in the actual rolling motion?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Work requires both a force and a displacement in the direction of that force. For
                rolling without slipping, the contact point between the hoop and the incline has
                zero velocity at every instant. A point with zero velocity has zero displacement in
                any infinitesimal time interval. Force times zero displacement is zero work. The
                constraint does no work even though the friction force is nonzero.
              </p>
            </details>
          </div>
        </>,

        // SECTION 5 · WORKED EXAMPLE: HOOP
        <>
          <h2>Worked Example: Rolling Hoop</h2>
          <p>
            A uniform hoop of mass {`$M$`} and radius {`$r$`} rolls without slipping down a fixed
            inclined plane of angle {`$\\varphi$`} and length {`$l$`}. Use the Lagrange multiplier
            method to find the acceleration and the constraint force.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Before working the steps, predict the speed at the bottom. Does the hoop arrive faster
              or slower than a same-mass block that slides without friction? What physical reasoning
              leads you there?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Less speed. Rolling forces the hoop to share its kinetic energy between translation
                and rotation. A frictionless sliding block puts all kinetic energy into translation.
                Both objects gain the same gravitational energy, but the hoop splits it two ways and
                arrives slower.
              </p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>Step 1: Generalized coordinates.</strong> Use {`$x$`} (distance traveled
                down the incline) and {`$\\theta$`} (angle rotated). One constraint: rolling without
                slipping gives {`$r\\,d\\theta = dx$`}, or equivalently{' '}
                {`$r\\dot\\theta = \\dot x$`}. One constraint means one multiplier {`$\\lambda$`}.
              </p>
              <p>
                <strong>Step 2: Kinetic and potential energy.</strong> The rotational term is{' '}
                {`$\\tfrac{1}{2}I\\dot\\theta^2$`} with moment of inertia {`$I = Mr^2$`} for a hoop.
              </p>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$T = \\tfrac{1}{2}M\\dot x^2 + \\tfrac{1}{2}Mr^2\\dot\\theta^2, \\qquad V = Mg(l-x)\\sin\\varphi$$`}</span>
              </div>
              <p>
                <strong>Step 3: Lagrangian.</strong>
              </p>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$L = T - V = \\tfrac{1}{2}M\\dot x^2 + \\tfrac{1}{2}Mr^2\\dot\\theta^2 - Mg(l-x)\\sin\\varphi$$`}</span>
              </div>
              <p>
                <strong>Step 4: Constraint coefficients.</strong> Writing the constraint as{' '}
                {`$a_x\\,dx + a_\\theta\\,d\\theta = 0$`} gives {`$a_x = -1$`}, {`$a_\\theta = r$`}.
              </p>
              <p>
                <strong>
                  Step 5: Lagrange equations for {`$x$`} and {`$\\theta$`}.
                </strong>{' '}
                The constraint force on each coordinate is {`$Q_k = \\lambda a_k$`}, so{' '}
                {`$Q_x = \\lambda a_x = -\\lambda$`} and{' '}
                {`$Q_\\theta = \\lambda a_\\theta = \\lambda r$`}. Moving each {`$Q_k$`} to the left
                gives:
              </p>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$M\\ddot x - Mg\\sin\\varphi + \\lambda = 0 \\qquad (x)$$`}</span>
              </div>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$Mr^2\\ddot\\theta - \\lambda r = 0 \\qquad (\\theta)$$`}</span>
              </div>
              <p>
                <strong>Step 6: Solve.</strong> Differentiate the constraint:{' '}
                {`$r\\ddot\\theta = \\ddot x$`}. From the {`$\\theta$`} equation:{' '}
                {`$Mr^2(\\ddot x / r) = \\lambda r$`}, so {`$M\\ddot x = \\lambda$`}. Substitute
                into the {`$x$`} equation:
              </p>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$M\\ddot x - Mg\\sin\\varphi + M\\ddot x = 0 \\implies \\ddot x = \\frac{g\\sin\\varphi}{2}$$`}</span>
              </div>
              <p>And {`$\\lambda = M\\ddot x = \\dfrac{Mg\\sin\\varphi}{2}$`}.</p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>
                  Write the kinetic energy of a solid uniform disk of mass {`$M$`}, radius {`$r$`},
                  moment of inertia {`$I = \\tfrac{1}{2}Mr^2$`}, rolling down the same incline. How
                  does it differ from the hoop's {`$T$`}?
                </li>
                <li>
                  Write the two Lagrange equations (for {`$x$`} and {`$\\theta$`}) for the disk. One
                  multiplier {`$\\lambda$`} still applies.
                </li>
                <li>
                  Using {`$r\\ddot\\theta = \\ddot x$`}, solve for {`$\\ddot x$`} and {`$\\lambda$`}
                  . Compare to the hoop's answer.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                A uniform sphere of mass {`$M$`}, radius {`$r$`}, moment of inertia{' '}
                {`$I = \\tfrac{2}{5}Mr^2$`} rolls without slipping down the same incline. Find the
                acceleration and the constraint force using the Lagrange multiplier method. Verify
                your answer reduces correctly in the zero-friction limit.
              </p>
            </div>
          </div>

          <HoopOnIncline />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The rolling hoop accelerates at exactly half the rate of the frictionless slipping
              hoop. Trace where the factor of 2 comes from in the algebra above. Which step
              introduces it, and what physical fact does it represent?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The factor of 2 enters at Step 6. After substituting {`$\\lambda = M\\ddot x$`}
                into the {`$x$`} equation you get {`$2M\\ddot x = Mg\\sin\\varphi$`}. The extra
                factor of {`$M\\ddot x$`} on the left comes from the {`$\\theta$`} equation: the
                rotational inertia of the hoop ({`$Mr^2$`}) equals its translational inertia (
                {`$M$`}) times {`$r^2$`}. For the hoop, rotational and translational kinetic
                energies are equal at every speed. Gravity must accelerate both equally, so each
                gets half the available force.
              </p>
            </details>
          </div>
        </>,

        // SECTION 6 · STRONG-FIELD LIMIT
        <>
          <h2>Constraint as a Strong-Field Limit</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Picture a bead on a wire. In real life the wire pushes back with a strong force when
              the bead tries to leave.
            </p>
            <p>
              If you make that pushback force stronger and stronger, what happens to the bead's path
              in the limit?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The bead is squeezed onto the wire more tightly. Its sideways wobble shrinks toward
                zero.
              </p>
              <p>
                In the limit of infinite force, the bead moves exactly on the wire. That limit is
                the constraint.
              </p>
            </details>
          </div>
          <p>
            A constraint is often treated as a clean limit: the bead is <em>perfectly</em> confined
            to the wire, with no give. Where does this clean picture come from physically? The
            answer reveals the nature of holonomic constraints.
          </p>
          <p>
            Let {`$\\gamma$`} be a smooth curve in the plane. A particle moves under a potential
            that includes a strong restoring term toward {`$\\gamma$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$U_N = N q_2^2 + U_0(q_1, q_2)$$`}</span>
          </div>
          <p>
            where {`$q_2$`} is the perpendicular distance from {`$\\gamma$`}, {`$q_1$`} is distance
            along {`$\\gamma$`}, and {`$N$`} is a large parameter. As {`$N \\to \\infty$`}, the
            restoring force toward {`$\\gamma$`} becomes infinitely strong. The particle is pressed
            harder and harder onto {`$\\gamma$`}.
          </p>

          <StrongFieldConfinement />

          <div className="lrn-insight">
            <p>
              As {`$N \\to \\infty$`} the perpendicular oscillations shrink to zero. In the limit,
              the motion is exactly on {`$\\gamma$`} and obeys Lagrange's equations for the
              constrained system.{' '}
              <strong>
                The constraint is the {`$N \\to \\infty$`} limit of a strong confining potential.
              </strong>
            </p>
          </div>
          <p>
            A limit theorem makes this precise. Start on {`$\\gamma$`}: place initial conditions
            with {`$q_2(0) = 0$`} and {`$\\dot q_2(0) = 0$`}. Let {`$q_1(t; N)$`} be the motion of{' '}
            {`$q_1$`} under {`$U_N$`}. Then
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\lim_{N \\to \\infty} q_1(t;N) = \\psi(t)$$`}</span>
          </div>
          <p>
            where {`$\\psi(t)$`} solves Lagrange's equation with the{' '}
            <strong>limit Lagrangian</strong>
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$L^* = T\\big|_{q_2=\\dot q_2=0} - U_0\\big|_{q_2=0}$$`}</span>
          </div>
          <p>
            This is the kinetic energy restricted to motion along {`$\\gamma$`}, minus the
            background potential on {`$\\gamma$`}. The result generalizes to the {`$3n$`}
            -dimensional configuration space: replace the curve {`$\\gamma$`} by any smooth
            constraint surface of higher dimension. Ideal holonomic constraints rest on the
            experimental fact that many physical systems fall into this class.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Geometric definition</span>
              <p>
                Motion confined to a surface {`$\\gamma$`} in configuration space of dimension{' '}
                {`$f = 3n - m$`}, set by {`$m$`} independent equations {`$f_i(r) = 0$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Physical definition</span>
              <p>
                The {`$N \\to \\infty$`} limit of a confining potential {`$U_N = Nq_2^2 + U_0$`}.
                Constraint forces arise from the large restoring term.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The perpendicular potential {`$U_\\perp = N q_2^2$`} is a spring. Writing it as{' '}
              {`$\\tfrac{1}{2} k q_2^2$`} gives spring constant {`$k = 2N$`}. So the {`$q_2$`}{' '}
              motion is a rapid oscillation at frequency {`$\\sqrt{2N}$`} about {`$q_2 = 0$`}.
            </p>
            <p>
              Now bound the amplitude. The particle starts with some fixed perpendicular energy{' '}
              {`$E_\\perp$`}. At the turning point all of it is potential: {`$N A^2 = E_\\perp$`},
              so the amplitude is {`$A = \\sqrt{E_\\perp / N}$`}. It shrinks like {`$1/\\sqrt{N}$`}.
            </p>
            <p>
              As {`$N \\to \\infty$`} the amplitude goes to zero. The motion averages to{' '}
              {`$q_2 = 0$`} exactly. The {`$q_1$`} equation decouples and reduces to the constrained
              Lagrange equation.
            </p>
          </div>
        </>,

        // SECTION 7 · CONFIGURATION SPACE AND COUNTING
        <>
          <h2>Configuration Space and Counting Degrees of Freedom</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Take two point masses in 3D, joined by a rigid rod of fixed length. Before the rod,
              each point has 3 coordinates.
            </p>
            <p>
              After the one distance constraint, how many degrees of freedom are left? What does
              each one stand for?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Raw freedom is {`$6$`}. One distance constraint removes one, leaving {`$5$`}.
              </p>
              <p>
                Those 5 split into 3 for the center of mass and 2 for the orientation of the rod.
                The counting rule {`$f = 3n - m$`} gives this directly.
              </p>
            </details>
          </div>
          <p>
            D'Alembert's principle introduced this count. A system of {`$n$`} mass-points in three
            dimensions has a {`$3n$`}-dimensional configuration space before any constraints. Each
            holonomic constraint {`$f_i(r_1, \\ldots, r_n) = 0$`} is a {`$(3n-1)$`}-dimensional
            surface in that space. With {`$m$`} independent constraints, the constrained
            configuration space is a surface {`$\\gamma$`} of dimension
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$f = 3n - m$$`}</span>
          </div>
          <p>
            and the system has {`$f$`} degrees of freedom. The motion is governed by {`$f$`}{' '}
            Lagrange equations in the coordinates {`$(q_1, \\ldots, q_f)$`} on {`$\\gamma$`}.
          </p>
          <p>
            Use this counting to check your setup before solving. A pendulum: 1 particle in 3D (3
            coordinates), 2 constraints ({`$x^2 + y^2 = l^2$`} in the plane and {`$z = 0$`}),
            leaving 1 degree of freedom. A rigid body of 2 particles at fixed distance has{' '}
            {`$6 - 1 = 5$`} degrees of freedom: 3 for the center of mass, 2 for orientation.
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Count particles and raw coordinates</span>
              <p className="lrn-step-content">
                Write {`$n$`} = number of particles. Raw degrees of freedom = {`$3n$`} for 3D,{' '}
                {`$2n$`} for planar systems.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">List independent constraints</span>
              <p className="lrn-step-content">
                Write each holonomic constraint as {`$f_i = 0$`}. Count {`$m$`}. Make sure they are
                functionally independent (no constraint follows from the others).
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Compute degrees of freedom</span>
              <p className="lrn-step-content">
                {`$f = 3n - m$`}. Choose {`$f$`} generalized coordinates that describe points on the
                constraint surface.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Decide: reduce or use multipliers</span>
              <p className="lrn-step-content">
                If you need only the motion, reduce to {`$f$`} independent coordinates. If you need
                constraint forces, keep all coordinates and introduce {`$m$`} multipliers.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              A planar double pendulum has 2 rods, each with its own pivot. What are {`$n$`},{' '}
              {`$m$`}, and {`$f$`}? List the constraints explicitly.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Two particles in the plane: {`$n = 2$`}, raw degrees of freedom = 4 (coordinates
                {`$x_1, y_1, x_2, y_2$`}). Two length constraints: {`$x_1^2 + y_1^2 = l_1^2$`}
                (first rod from origin) and {`$(x_2 - x_1)^2 + (y_2 - y_1)^2 = l_2^2$`} (second rod
                from first bob). So {`$m = 2$`} and {`$f = 4 - 2 = 2$`}. The two degrees of freedom
                are the two angles {`$\\theta_1, \\theta_2$`}.
              </p>
            </details>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'Classify this constraint as holonomic or nonholonomic: a particle stuck to the surface of a sphere of radius $R$. Justify your answer.',
        a: 'Holonomic. The constraint is $x^2 + y^2 + z^2 = R^2$, which depends only on coordinates, not velocities. You can write it as $f(q) = 0$. It removes one freedom, so the particle goes from 3 degrees of freedom down to 2.'
      },
      {
        q: 'Classify: a disk rolls without slipping on a flat surface. The constraint links the speed of the contact point to the spin rate. Is it holonomic?',
        a: 'Nonholonomic. The rolling rule gives a velocity equation. You cannot integrate it into a position constraint $f(x, y, \\theta) = 0$. The constraint limits the instant velocity direction. Still, the full set of states $(x, y, \\text{heading})$ stays reachable.'
      },
      {
        q: 'A bead slides on a fixed wire shaped like a helix: $x = R\\cos\\theta$, $y = R\\sin\\theta$, $z = c\\theta$. What is the dimension of the configuration space? How many constraints?',
        a: 'The helix in 3D adds 2 constraints, since two equations tie the three coordinates together. Raw freedom is 3. After 2 constraints, $m = 3 - 2 = 1$. So the bead has one degree of freedom. That free variable is the angle $\\theta$, which moves you along the wire.'
      },
      {
        q: "Write the modified Hamilton's principle for a system with one semi-holonomic constraint $f(q, \\dot q, t) = 0$.",
        a: `It is $\\delta \\int (L + \\lambda f)\\,dt = 0$. Treat $q$ and $\\lambda$ as independent. Varying $\\lambda$ gives back $f = 0$, the constraint. Varying $q$ gives the Lagrange equation with constraint force $Q_k = \\lambda\\left[\\frac{\\partial f}{\\partial q_k} - \\frac{d}{dt}\\frac{\\partial f}{\\partial \\dot q_k}\\right] - \\dot\\lambda\\,\\frac{\\partial f}{\\partial \\dot q_k}$.`
      },
      {
        q: 'State the two conditions where you should use the Lagrange multiplier method for a holonomic constraint instead of eliminating it.',
        a: 'First, when you need the constraint force as an output. Eliminating coordinates throws the constraint forces away. Second, when reducing to independent coordinates is messy or inconvenient. The multiplier keeps all coordinates, paying with a few extra unknowns.'
      },
      {
        q: `A hoop of mass $M$ and radius $r$ rolls without slipping down an incline of angle $\\varphi$. The rolling constraint is $r\\dot\\theta = \\dot x$. Write the two Lagrange equations using one multiplier $\\lambda$.`,
        a: `For $x$: $M\\ddot x - Mg\\sin\\varphi + \\lambda = 0$. For $\\theta$: $Mr^2\\ddot\\theta - \\lambda r = 0$. Differentiate the rolling constraint to get $r\\ddot\\theta = \\ddot x$, which links the two equations. Together with the constraint they form three equations in $x$, $\\theta$, and $\\lambda$.`
      },
      {
        q: 'From the hoop Lagrange equations, derive $\\ddot x = \\frac{g\\sin\\varphi}{2}$.',
        a: 'From the $\\theta$ equation, $Mr^2(\\ddot x / r) = \\lambda r$, so $\\lambda = M\\ddot x$. Substitute into the $x$ equation: $M\\ddot x - Mg\\sin\\varphi + M\\ddot x = 0$. That gives $2M\\ddot x = Mg\\sin\\varphi$, so $\\ddot x = \\frac{g\\sin\\varphi}{2}$.'
      },
      {
        q: 'What is the constraint force $\\lambda$ for the rolling hoop? State its physical meaning.',
        a: 'It is $\\lambda = \\frac{Mg\\sin\\varphi}{2}$. This is the static friction force at the contact point, pointing up the incline. Remove the incline and apply this exact force at the contact point, and the hoop follows the same path. The multiplier method hands you this force with no separate friction model.'
      },
      {
        q: `A disk of mass $M$ and moment of inertia $I = \\frac{1}{2}Mr^2$ rolls without slipping down the same incline. Compare its acceleration to the hoop's $\\frac{g\\sin\\varphi}{2}$.`,
        a: `For the disk, $T = \\frac{1}{2}M\\dot x^2 + \\frac{1}{2}\\cdot\\frac{1}{2}Mr^2\\dot\\theta^2$. Using $r\\ddot\\theta = \\ddot x$, the $\\theta$ equation gives $\\frac{1}{2}M\\ddot x = \\lambda$. Substituting: $M\\ddot x - Mg\\sin\\varphi + \\frac{1}{2}M\\ddot x = 0$, so $\\frac{3}{2}M\\ddot x = Mg\\sin\\varphi$ and $\\ddot x = \\frac{2}{3}g\\sin\\varphi$. The disk speeds up faster than the hoop because less energy goes into spin, since $I$ is smaller.`
      },
      {
        q: 'Why does rolling without slipping do no virtual work?',
        a: `In a virtual displacement the constraint force acts at the contact point. For rolling, the contact point has zero velocity at each instant, since it is the instant center of rotation. A point with zero velocity has zero displacement in any short time. Force times zero displacement is zero work, so the sum $\\sum_k Q_k\\,\\delta q_k = 0$.`
      },
      {
        q: `Describe the strong-field limit argument for the physical origin of a holonomic constraint.`,
        a: `Picture a strong potential $U_N = N q_2^2$ pulling toward a curve $\\gamma$, where $q_2$ is the perpendicular distance from $\\gamma$ and $N$ is large. As $N$ grows, the pull toward $\\gamma$ gets stronger and the perpendicular wobbles shrink. As $N \\to \\infty$, the amplitude drops to zero and the particle moves exactly on $\\gamma$. The constraint is the limit of a very strong confining field.`
      },
      {
        q: `In the strong-field setup, what initial conditions for $q_2(0)$ and $\\dot q_2(0)$ make the limit the constrained motion?`,
        a: `You need $q_2(0) = 0$, so the particle starts on $\\gamma$, and $\\dot q_2(0) = 0$, so it starts with zero perpendicular velocity. With these the particle has no energy to leave $\\gamma$, and the wobble amplitude shrinks to zero as $N$ grows. Different starting values, like $q_2(0) \\neq 0$, give a limit that starts off $\\gamma$ and follows a different path.`
      },
      {
        q: `State the limit Lagrangian $L^*$ for the strong-field limit. How does it relate to the full Lagrangian under $U_N$?`,
        a: `It is $L^* = T\\big|_{q_2 = \\dot q_2 = 0} - U_0\\big|_{q_2 = 0}$. You take the kinetic energy of motion along $\\gamma$, setting perpendicular displacement and velocity to zero. Then you subtract the background potential evaluated on $\\gamma$. The strong restoring part $N q_2^2$ drops out because $q_2 = 0$ on $\\gamma$.`
      },
      {
        q: `Take $n = 3$ mass-points in 3D, locked into a rigid equilateral triangle by three fixed distances. How many constraints $m$? What is $f$, the dimension of the configuration space?`,
        a: `The three distance constraints are $|r_1 - r_2| = L_{12}$, $|r_2 - r_3| = L_{23}$, and $|r_1 - r_3| = L_{13}$. So $m = 3$ and $f = 9 - 3 = 6$. These 6 freedoms split into 3 for the center of mass and 3 for the orientation. That is the full rigid-body count in 3D.`
      },
      {
        q: `The semi-holonomic form $f_\\alpha(q, \\dot q, t) = 0$ does NOT cover all nonholonomic constraints. What type does it leave out?`,
        a: `It leaves out inequality constraints, such as $q \\geq 0$ for a particle kept to one side of a wall. An inequality marks out a region, not a surface, so you cannot write it as $f = 0$ with equality. The Lagrange multiplier method works only for equality constraints of the stated form.`
      },
      {
        q: `Is the hoop's rolling constraint $r\\,d\\theta = dx$ really holonomic or nonholonomic? Explain.`,
        a: `Really holonomic. The equation $r\\,d\\theta = dx$ integrates straight to $r\\theta = x + \\text{constant}$. That is a position constraint $f(x, \\theta) = x - r\\theta = 0$. Rolling along a fixed line stays integrable, so it is holonomic. The coin rolling free on a plane is different: there the heading can turn, the velocity form has three variables, and it does not integrate. We still use the multiplier method on the hoop because the method works for holonomic and nonholonomic constraints alike.`
      },
      {
        q: `For a system with $n = 4$ generalized coordinates and $m = 2$ semi-holonomic constraints, how many equations does the full system have? How many unknowns?`,
        a: `The unknowns are 4 coordinate functions $q_k(t)$ plus 2 multiplier functions $\\lambda_\\alpha(t)$, which is 6. The equations are 4 constrained Lagrange equations plus 2 constraint equations, which is also 6. The system is exactly determined.`
      },
      {
        q: `Transfer: a car drives only forward or backward, with velocity along its length. It cannot slide sideways. Is this holonomic or nonholonomic? Can the car still reach any $(x, y, \\text{heading})$?`,
        a: `Nonholonomic. The no-sideways-slip rule constrains velocity: $\\dot x\\sin\\psi = \\dot y\\cos\\psi$, where $\\psi$ is the heading. You cannot integrate this into a position constraint. Yet by driving forward, turning, and reversing, like parallel parking, the car reaches any $(x, y, \\text{heading})$. The full configuration space stays open.`
      },
      {
        q: `Explain in a short paragraph why the standard Lagrange equations, without multipliers, need the generalized coordinates to be independent.`,
        a: `The derivation sets the variation of the action to zero. That gives an integral of the form $\\int \\sum_k E_k\\,\\delta q_k\\,dt = 0$. For this to force each $E_k = 0$ on its own, each $\\delta q_k$ must be free to vary on its own. With constraints the $\\delta q_k$ are not independent, since varying one forces others to change. The step fails, so you must reduce to independent coordinates or add multipliers.`
      },
      {
        q: `Elaborate: what physical property tells an ideal constraint apart from a non-ideal one?`,
        a: `An ideal constraint does zero virtual work: $\\sum_k Q_k\\,\\delta q_k = 0$ for any displacement that respects the constraint. Non-ideal constraints include sliding friction that burns energy. Such a force has a component along the motion, so it does nonzero virtual work. Rolling without slipping and rigid rods are ideal. Rough sliding contact is not.`
      },
      {
        q: `Predict: if you double the incline angle $\\varphi$ from $15°$ to $30°$, how do the acceleration $\\ddot x$ and constraint force $\\lambda$ change for the rolling hoop? By what factor?`,
        a: `Both $\\ddot x = \\frac{g\\sin\\varphi}{2}$ and $\\lambda = \\frac{Mg\\sin\\varphi}{2}$ scale with $\\sin\\varphi$. Here $\\sin 30° = 0.5$ and $\\sin 15° \\approx 0.259$, so the ratio is about $1.93$. They grow together by that same factor, close to double but not exactly. Doubling the angle does not double the sine.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Holonomic and Non-Holonomic Constraints',
      sections: [
        <>
          <h2>Key Equations</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Holonomic constraint</div>
            <div className="ref-formula-eq">{`$$f(q_1, \\ldots, q_n, t) = 0$$`}</div>
            <div className="ref-formula-desc">
              When to use: any constraint that depends only on coordinates and time. Reduces degrees
              of freedom by 1 per equation. Lets you eliminate one coordinate.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Semi-holonomic constraint</div>
            <div className="ref-formula-eq">{`$$f_\\alpha(q, \\dot q, t) = 0, \\quad \\alpha = 1, \\ldots, m$$`}</div>
            <div className="ref-formula-desc">
              When to use: velocity-dependent constraints (rolling, nonholonomic systems). The
              Lagrange multiplier method applies directly.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Linear constraint form</div>
            <div className="ref-formula-eq">{`$$\\sum_k a_{\\alpha k}(q,t)\\, dq_k + a_{\\alpha t}\\, dt = 0$$`}</div>
            <div className="ref-formula-desc">
              When to use: rolling constraints, velocity constraints linear in {`$dq$`}. Fits
              directly into the multiplier method.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Modified Hamilton's principle</div>
            <div className="ref-formula-eq">{`$$\\delta \\int\\!\\left(L + \\sum_\\alpha \\lambda_\\alpha f_\\alpha\\right)dt = 0$$`}</div>
            <div className="ref-formula-desc">
              When to use: starting point for deriving constrained equations of motion. Treat
              {`$q_k$`} and {`$\\lambda_\\alpha$`} as independent variables.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Constrained Lagrange equations</div>
            <div className="ref-formula-eq">{`$$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q_k} - \\frac{\\partial L}{\\partial q_k} = Q_k$$`}</div>
            <div className="ref-formula-desc">
              When to use: the {`$n$`} equations of motion for the constrained system. {`$Q_k$`}
              is the generalized constraint force from the multipliers.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Generalized constraint force</div>
            <div className="ref-formula-eq">{`$$Q_k = \\sum_\\alpha \\left\\{\\lambda_\\alpha\\left[\\frac{\\partial f_\\alpha}{\\partial q_k} - \\frac{d}{dt}\\frac{\\partial f_\\alpha}{\\partial \\dot q_k}\\right] - \\dot\\lambda_\\alpha\\frac{\\partial f_\\alpha}{\\partial \\dot q_k}\\right\\}$$`}</div>
            <div className="ref-formula-desc">
              When to use: computing constraint forces from multipliers and constraint equations.
              Simplifies to {`$\\lambda\\,\\partial f/\\partial q_k$`} for holonomic constraints.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Strong-field confining potential</div>
            <div className="ref-formula-eq">{`$$U_N = N\\, q_2^2 + U_0(q_1, q_2)$$`}</div>
            <div className="ref-formula-desc">
              When to use: understanding the physical origin of a holonomic constraint. As{' '}
              {`$N \\to \\infty$`}, motion confined to {`$q_2 = 0$`} exactly.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Degrees of freedom</div>
            <div className="ref-formula-eq">{`$$f = 3n - m$$`}</div>
            <div className="ref-formula-desc">
              When to use: counting independent coordinates after {`$m$`} holonomic constraints on
              {`$n$`} particles. Check before choosing generalized coordinates.
            </div>
          </div>
        </>,

        <>
          <h2>Hoop Rolling on Incline</h2>
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kinetic energy</td>
                <td>{`$T = \\tfrac{1}{2}M\\dot x^2 + \\tfrac{1}{2}Mr^2\\dot\\theta^2$`}</td>
              </tr>
              <tr>
                <td>Potential energy</td>
                <td>{`$V = Mg(l-x)\\sin\\varphi$`}</td>
              </tr>
              <tr>
                <td>Rolling constraint</td>
                <td>{`$r\\dot\\theta = \\dot x$`}</td>
              </tr>
              <tr>
                <td>Constraint coefficients</td>
                <td>{`$a_x = -1,\\; a_\\theta = r$`}</td>
              </tr>
              <tr>
                <td>Acceleration</td>
                <td>{`$\\ddot x = \\dfrac{g\\sin\\varphi}{2}$`}</td>
              </tr>
              <tr>
                <td>Constraint force</td>
                <td>{`$\\lambda = \\dfrac{Mg\\sin\\varphi}{2}$`}</td>
              </tr>
              <tr>
                <td>Angular acceleration</td>
                <td>{`$\\ddot\\theta = \\dfrac{g\\sin\\varphi}{2r}$`}</td>
              </tr>
              <tr>
                <td>Frictionless slipping</td>
                <td>{`$\\ddot x = g\\sin\\varphi$`} (twice as fast)</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Holonomic vs Nonholonomic</h2>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Holonomic</th>
                <th>Nonholonomic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Form</td>
                <td>{`$f(q,t)=0$`}</td>
                <td>{`$f(q,\\dot q,t)=0$`} (non-integrable)</td>
              </tr>
              <tr>
                <td>Integrable?</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Reduces degrees of freedom?</td>
                <td>Yes, by 1 per constraint</td>
                <td>No reduction in configuration degrees of freedom</td>
              </tr>
              <tr>
                <td>Reachable set</td>
                <td>Lower-dimensional surface</td>
                <td>Full configuration space</td>
              </tr>
              <tr>
                <td>Example</td>
                <td>Bead on wire, pendulum, rigid rod</td>
                <td>Rolling coin, parallel-parking car</td>
              </tr>
              <tr>
                <td>Method</td>
                <td>Eliminate coordinates or use multipliers</td>
                <td>Multipliers required</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    }
  }
  return <LearningTemplate config={config} />
}
