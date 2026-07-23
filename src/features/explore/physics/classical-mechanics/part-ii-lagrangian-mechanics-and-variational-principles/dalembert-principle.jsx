import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  VirtualVsRealDisplacement,
  ConstraintForceNormal,
  InclineVirtualWork,
  ReversedEffectiveForce,
  BeadOnRotatingRod
} from '../../../../../components/viz'

export default function DAlembertsPrincipleAndVirtualDisplacements() {
  const config = {
    cssPrefix: 'dap',
    documentTitle: "D'Alembert's Principle and Virtual Displacements - AETHER",
    learning: {
      groupTitle: 'Lagrangian Mechanics and Variational Principles',
      category: 'Module 2',
      title: "D'Alembert's Principle and Virtual Displacements",
      subtitle:
        "Eliminate unknown constraint forces by replacing Newton's vector law with a single scalar condition on virtual work.",
      sections: [
        <>
          <h2>The Problem with Newton's Laws</h2>
          <p>
            Newton's second law says {`$\\mathbf{F}_i = \\dot{\\mathbf{p}}_i$`} for each particle.
            The dot means rate of change in time, so {`$\\dot{\\mathbf{p}}_i$`} is how fast the
            momentum changes. To apply it you need every force on every particle, including the push
            or pull from whatever holds the object in place. That push or pull is the constraint
            force. A bead on a wire, a pendulum bob on a string, a block on a ramp: in each case the
            constraint produces a force whose size you do not know in advance. You have to solve for
            it alongside the motion.
          </p>
          <p>
            D'Alembert's principle removes those unknown constraint forces entirely. It replaces
            Newton's vector equation with a single scalar condition. That condition involves only
            the applied forces and the inertia of the system. Constraint forces disappear. This is
            the bridge from Newton's law, with one equation per direction in space, to Lagrange's
            equations.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A bead slides on a frictionless curved wire in a plane. The wire exerts a normal force
              on the bead. You want to find the bead's acceleration along the wire. Before reading
              further: what makes the constraint force inconvenient, and how might you get rid of
              it?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The constraint force is always perpendicular to the wire. Any displacement along the
                wire is tangent to the wire. So the constraint force does zero work on any
                displacement that stays on the wire. If you restrict attention to those
                displacements, the constraint force contributes nothing to the work balance.
                D'Alembert formalizes exactly this idea.
              </p>
            </details>
          </div>

          <h3>The Constraint Force</h3>
          <p>
            Split the total force on particle {`$i$`} into two parts. The applied force{' '}
            {`$\\mathbf{F}_i^{(a)}$`} includes gravity, springs, electric fields: everything you
            specify as the physics of the problem. The constraint force {`$\\mathbf{f}_i$`}
            is whatever the constraint must supply to keep the particle on its surface or curve.
          </p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{F}_i = \\mathbf{F}_i^{(a)} + \\mathbf{f}_i$$`}</span>
          </div>
          <p>
            In equilibrium (all accelerations zero), Newton's law gives{' '}
            {`$\\sum_i \\mathbf{F}_i = 0$`}. Take the dot product of each force with a tiny allowed
            shift {`$\\delta\\mathbf{r}_i$`} and add them up. That sum is the{' '}
            <strong>virtual work</strong>: force times the imagined shift along its direction. It is
            zero:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\sum_i \\mathbf{F}_i \\cdot \\delta\\mathbf{r}_i = 0$$`}</span>
          </div>
          <p>
            This is the <strong>principle of virtual work</strong>. Use it when a system is at rest
            and you want unknown constraint forces without drawing a full force diagram (a sketch of
            every force on the body).
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              An <strong>ideal constraint</strong> is one whose push never adds or removes energy as
              the object moves along it. In symbols its virtual work is zero:{' '}
              {`$\\sum_i \\mathbf{f}_i \\cdot \\delta\\mathbf{r}_i = 0$`}. This holds for a particle
              on a frictionless surface (the push is normal, the shift is along the surface), for a
              rigid body (the inner forces cancel in pairs), and for rolling without slipping.
              Sliding friction breaks it. For ideal constraints the full virtual work reduces to
              just the applied forces.
            </p>
            <p>
              Note that rolling without slipping shows up later as the standard nonholonomic case. A
              constraint can be both ideal and nonholonomic: ideal is about doing no virtual work,
              nonholonomic is about being a rule on velocities, not positions.
            </p>
          </div>
        </>,

        <>
          <h2>Virtual Displacements</h2>
          <p>
            A <strong>virtual displacement</strong> {`$\\delta\\mathbf{r}_i$`} is a tiny change in
            the position of particle {`$i$`}. It must agree with the constraints, and it happens at
            a fixed instant, so no time passes. The word "virtual" signals an imagined variation,
            not an actual motion.
          </p>
          <p>
            One more name to fix now. The <strong>generalized coordinates</strong> {`$q_j$`} are the
            handful of numbers, angles or distances, that pin down where everything is. The next
            section counts them. The formulas just below use them, and a tiny change in a {`$q_j$`}{' '}
            is written {`$\\delta q_j$`}.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A pendulum bob hangs on a rigid rod of length {`$l$`}. At this instant the rod makes
              angle {`$\\theta$`} with the vertical. What does a virtual displacement of the bob
              look like, and in what direction does it point?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The constraint is {`$|\\mathbf{r}| = l$`} (constant length). A virtual displacement
                must keep the bob on the circle of radius {`$l$`}. At the current position it must
                be tangent to that circle, perpendicular to the rod.
              </p>
            </details>
          </div>

          <div>
            <VirtualVsRealDisplacement />
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Real displacement {`$d\\mathbf{r}$`}</span>
              <p>
                Occurs over a time interval {`$dt$`}. The constraints may shift during {`$dt$`}{' '}
                (e.g., a moving surface). The velocity formula picks up a{' '}
                {`$\\frac{\\partial \\mathbf{r}}{\\partial t}\\,dt$`} term.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">
                Virtual displacement {`$\\delta\\mathbf{r}$`}
              </span>
              <p>
                Instantaneous: {`$\\delta t = 0$`}. Time is frozen. The formula is{' '}
                {`$\\delta\\mathbf{r}_i = \\sum_j \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\,\\delta q_j$`}
                . No {`$\\frac{\\partial \\mathbf{r}}{\\partial t}$`} term appears.
              </p>
            </div>
          </div>

          <p>
            This distinction matters for time-dependent constraints. Suppose a bead slides on a wire
            that is itself rotating. A real displacement {`$d\\mathbf{r}$`} in time {`$dt$`}{' '}
            includes both the bead's motion along the wire and the wire's rotation. A virtual
            displacement freezes the wire at its current position and only varies the bead's
            position along it. This frozen-time rule is not just convenient. It is what lets the
            constraint force, which is normal to the surface, drop out of the work balance later.
          </p>

          <p>
            Watch this bead on a spinning rod. The single generalized coordinate is the bead's
            distance along the rod. The rod sets the constraint, and you track one number.
          </p>
          <div>
            <BeadOnRotatingRod />
          </div>
          <p>
            The bead slides outward as the rod spins. The dashed line marks the transverse distance,
            and the trail shows the bead speeding up.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the virtual displacement formula{' '}
              {`$\\delta\\mathbf{r}_i = \\sum_j \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\,\\delta q_j$`}{' '}
              contain no {`$\\frac{\\partial \\mathbf{r}_i}{\\partial t}$`} term, even though the
              velocity formula{' '}
              {`$\\dot{\\mathbf{r}}_i = \\sum_j \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\,\\dot{q}_j + \\frac{\\partial \\mathbf{r}_i}{\\partial t}$`}{' '}
              does?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Velocity is {`$\\frac{d\\mathbf{r}}{dt}$`}: time advances by {`$dt$`}, so the
                constraint surface itself can move, contributing{' '}
                {`$\\frac{\\partial \\mathbf{r}_i}{\\partial t}\\,dt$`}. Virtual displacement fixes{' '}
                {`$t$`} ({`$\\delta t = 0$`}), so the term carrying {`$\\delta t$`} must be zero.
                The virtual displacement is a variation within the surface of allowed positions
                right now, not along the actual path.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>D'Alembert's Principle</h2>
          <p>
            D'Alembert's key move: rewrite Newton's second law as{' '}
            {`$\\mathbf{F}_i - \\dot{\\mathbf{p}}_i = 0$`}. The term{' '}
            {`$-\\dot{\\mathbf{p}}_i = -m_i \\ddot{\\mathbf{r}}_i$`} is the{' '}
            <strong>reversed effective force</strong>: mass times acceleration, written with a minus
            sign. With this term added, the particle acts as if it were in equilibrium under the
            applied force plus the reversed effective force.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If {`$\\mathbf{F}_i - \\dot{\\mathbf{p}}_i = 0$`} for every particle, the virtual work
              of {`$(\\mathbf{F}_i - \\dot{\\mathbf{p}}_i)$`} vanishes trivially. Why is that useful
              on its own, and what extra step is still needed?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The trivial zero is true for any particle whether or not it satisfies Newton's law.
                The useful step is to split{' '}
                {`$\\mathbf{F}_i = \\mathbf{F}_i^{(a)} + \\mathbf{f}_i$`} and then invoke the
                ideal-constraint condition{' '}
                {`$\\sum_i \\mathbf{f}_i \\cdot \\delta\\mathbf{r}_i = 0$`}. Only then do the
                constraint forces disappear from the equation.
              </p>
            </details>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation: Newton to D'Alembert</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                {`$\\mathbf{F}_i = \\dot{\\mathbf{p}}_i$`} (Newton's second law for each particle{' '}
                {`$i$`}).
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Rearrange: {`$\\mathbf{F}_i - \\dot{\\mathbf{p}}_i = 0$`}. Multiply by{' '}
                {`$\\delta\\mathbf{r}_i$`} and sum:{' '}
                {`$\\sum_i (\\mathbf{F}_i - \\dot{\\mathbf{p}}_i) \\cdot \\delta\\mathbf{r}_i = 0$`}
                .
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Break down {`$\\mathbf{F}_i = \\mathbf{F}_i^{(a)} + \\mathbf{f}_i$`}. Split the sum.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">
                For ideal constraints: {`$\\sum_i \\mathbf{f}_i \\cdot \\delta\\mathbf{r}_i = 0$`}.
                Constraint forces drop out.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">Result: D'Alembert's principle.</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\sum_i \\bigl(\\mathbf{F}_i^{(a)} - \\dot{\\mathbf{p}}_i\\bigr) \\cdot \\delta\\mathbf{r}_i = 0$$`}</span>
          </div>

          <p>
            This is D'Alembert's principle. The constraint forces are gone. The equation relates
            only the applied forces and the particles' inertia. Every valid virtual displacement
            makes the left side zero.
          </p>

          <div>
            <ReversedEffectiveForce />
          </div>

          <div>
            <ConstraintForceNormal />
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Newtonian approach</span>
              <p>
                Requires all forces including unknown constraint forces. Gives a vector equation per
                particle. You solve a larger system and then extract the motion.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">D'Alembert / Lagrangian approach</span>
              <p>
                Constraint forces disappear via virtual work. One scalar equation{' '}
                {`$(\\mathbf{F}^{(a)} - \\dot{\\mathbf{p}}) \\cdot \\delta\\mathbf{r} = 0$`}{' '}
                replaces all vector components. You cannot pull the separate constraint forces back
                out of this one equation.
              </p>
            </div>
          </div>

          <div>
            <InclineVirtualWork />
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the incline figure, the normal force {`$\\mathbf{N}$`} is perpendicular to the
              surface and the virtual displacement {`$\\delta\\mathbf{r}$`} is along the surface.
              Explain in one sentence why {`$\\mathbf{N} \\cdot \\delta\\mathbf{r} = 0$`}, and state
              what this means for D'Alembert's principle.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$\\mathbf{N} \\cdot \\delta\\mathbf{r} = 0$`} because the dot product of two
                perpendicular vectors is zero. This means the constraint force contributes nothing
                to the virtual work, so it disappears from D'Alembert's principle. The only force
                that does virtual work along the surface is gravity's component {`$mg\\sin\\alpha$`}
                . The equation of motion follows from that alone.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Generalized Coordinates and Forces</h2>
          <p>
            Recall the idea from Section 2: generalized coordinates are the handful of numbers,
            angles or distances, that pin down where everything is. Here is the count. A{' '}
            <strong>holonomic constraint</strong> is a rule on positions alone, like "stay on this
            circle". For {`$N$`} particles with {`$k$`} holonomic constraints, the number of free
            coordinates is {`$n = 3N - k$`}. Any {`$n$`} independent parameters that label every
            allowed position will do. Use them when there are many constraints, or when natural
            coordinates like angles or arc lengths make the work easier.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A planar double pendulum has two bobs. How many degrees of freedom does it have, and
              what is a natural choice of generalized coordinates?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Two bobs in a plane means {`$2 \\times 2 = 4$`} Cartesian coordinates. Two rigid-rod
                constraints remove two degrees of freedom. Result: 2 degrees of freedom. Natural
                generalized coordinates: {`$\\theta_1$`} (angle of upper rod) and {`$\\theta_2$`}{' '}
                (angle of lower rod from vertical).
              </p>
            </details>
          </div>

          <p>
            The transformation equations express each Cartesian position in terms of the generalized
            coordinates and time: {`$\\mathbf{r}_i = \\mathbf{r}_i(q_1, \\ldots, q_n, t)$`}.
            Differentiating gives the velocity:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\dot{\\mathbf{r}}_i = \\sum_k \\frac{\\partial \\mathbf{r}_i}{\\partial q_k}\\,\\dot{q}_k + \\frac{\\partial \\mathbf{r}_i}{\\partial t}$$`}</span>
          </div>
          <p>For a virtual displacement (no time change): </p>
          <div className="lrn-eq">
            <span>{`$$\\delta\\mathbf{r}_i = \\sum_j \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\,\\delta q_j$$`}</span>
          </div>
          <p>
            Substitute into the virtual work of the applied forces. Define the{' '}
            <strong>generalized force</strong> {`$Q_j$`}:
          </p>
          <div className="lrn-eq">
            <span>{`$$Q_j = \\sum_i \\mathbf{F}_i^{(a)} \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$$`}</span>
          </div>
          <p>
            Then the virtual work of the applied forces is {`$\\sum_j Q_j\\,\\delta q_j$`}. The
            generalized force {`$Q_j$`} does not have to carry units of force. The definition is
            built so that {`$Q_j\\,\\delta q_j$`} is always work. If {`$q_j$`} is an angle, then{' '}
            {`$Q_j$`} is a torque, and {`$Q_j\\,\\delta q_j$`} still comes out in units of energy.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              A pendulum has one degree of freedom: the angle {`$\\theta$`}. The applied force is
              gravity {`$m\\mathbf{g}$`}. Using{' '}
              {`$Q_\\theta = \\mathbf{F} \\cdot \\frac{\\partial \\mathbf{r}}{\\partial \\theta}$`},
              compute the generalized force and confirm it is the gravitational torque.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The bob position is {`$\\mathbf{r} = l(\\sin\\theta, -\\cos\\theta)$`}. So{' '}
                {`$\\frac{\\partial \\mathbf{r}}{\\partial \\theta} = l(\\cos\\theta, \\sin\\theta)$`}
                . The gravity force is {`$(0, -mg)$`}. Dot product:{' '}
                {`$Q_\\theta = (0)\\cdot l\\cos\\theta + (-mg)\\cdot l\\sin\\theta = -mgl\\sin\\theta$`}
                . This is exactly the restoring torque: magnitude {`$mgl\\sin\\theta$`}, negative
                sign restoring toward {`$\\theta = 0$`}.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>From D'Alembert to Lagrange's Equations</h2>
          <p>
            The goal is to convert D'Alembert's principle into equations involving only {`$q_j$`},{' '}
            {`$\\dot{q}_j$`}, and the kinetic energy {`$T$`}. The derivation requires one algebraic
            identity.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The velocity is{' '}
              {`$\\dot{\\mathbf{r}}_i = \\sum_k \\frac{\\partial \\mathbf{r}_i}{\\partial q_k}\\dot{q}_k + \\frac{\\partial \\mathbf{r}_i}{\\partial t}$`}
              . What is {`$\\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial \\dot{q}_j}$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Treating the {`$\\dot{q}_k$`} as independent variables and differentiating, the only
                surviving term is the one with {`$k = j$`}. Result:{' '}
                {`$\\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial \\dot{q}_j} = \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$`}
                . This is the cancellation-of-dots identity.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Cancellation-of-dots identity</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$\\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial \\dot{q}_j} = \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$$`}</span>
              </div>
              <p>
                The {`$\\dot{q}_j$`} dependence of {`$\\dot{\\mathbf{r}}_i$`} is identical to the{' '}
                {`$q_j$`} dependence of {`$\\mathbf{r}_i$`}. The "dot" on top of each side cancels.
                This lets kinetic energy replace the inertia term in D'Alembert's principle.
              </p>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>Deriving Lagrange's equations from D'Alembert's principle.</strong>
              </p>
              <p>
                Start from D'Alembert:{' '}
                {`$\\sum_i (\\mathbf{F}_i^{(a)} - m_i\\ddot{\\mathbf{r}}_i) \\cdot \\delta\\mathbf{r}_i = 0$`}
                .
              </p>
              <p>
                Insert{' '}
                {`$\\delta\\mathbf{r}_i = \\sum_j \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\delta q_j$`}
                . The virtual work of applied forces becomes {`$\\sum_j Q_j\\delta q_j$`}.
              </p>
              <p>
                The inertia term becomes:{' '}
                {`$\\sum_{i,j} m_i \\ddot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\delta q_j$`}
                . Apply the product-rule identity:{' '}
                {`$m_i \\ddot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = \\frac{d}{dt}\\!\\left(m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right) - m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{d}{dt}\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$`}
                .
              </p>
              <p>
                Use the cancellation-of-dots identity on the first term:{' '}
                {`$m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial \\dot{q}_j} = \\frac{\\partial}{\\partial \\dot{q}_j}\\!\\left(\\tfrac{1}{2}m_i\\dot{r}_i^2\\right)$`}
                .
              </p>
              <p>
                The second term needs one more identity. The order of the derivatives can be
                swapped:{' '}
                {`$\\frac{d}{dt}\\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = \\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial q_j}$`}
                . This holds because {`$\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$`} is a
                function of {`$q$`} and {`$t$`}, so its total time derivative equals the {`$q_j$`}{' '}
                derivative of the velocity. With it the second term gives{' '}
                {`$\\frac{\\partial}{\\partial q_j}(\\tfrac{1}{2}m_i\\dot{r}_i^2)$`}. Sum over{' '}
                {`$i$`} and identify {`$T = \\sum_i \\tfrac{1}{2}m_i\\dot{r}_i^2$`}.
              </p>
              <p>Collect in {`$\\delta q_j$`}:</p>
              <div className="lrn-eq">
                <span>{`$$\\sum_j \\left[\\frac{d}{dt}\\frac{\\partial T}{\\partial \\dot{q}_j} - \\frac{\\partial T}{\\partial q_j} - Q_j\\right]\\delta q_j = 0$$`}</span>
              </div>
              <p>
                For holonomic constraints the {`$\\delta q_j$`} are independent. Each bracket must
                vanish separately:
              </p>
              <div className="lrn-eq">
                <span>{`$$\\frac{d}{dt}\\frac{\\partial T}{\\partial \\dot{q}_j} - \\frac{\\partial T}{\\partial q_j} = Q_j$$`}</span>
              </div>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Fill in the missing step. Given the product-rule result:{' '}
                {`$m_i \\ddot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = \\frac{d}{dt}\\!\\left(m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right) - m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{d}{dt}\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$`}
                , apply the cancellation-of-dots identity to rewrite the first term in the brackets
                using {`$T$`}.
              </p>
              <ol className="lrn-list">
                <li>
                  Write {`$\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$`} using the
                  cancellation-of-dots identity.
                </li>
                <li>
                  Show that{' '}
                  {`$m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial \\dot{q}_j} = \\frac{\\partial}{\\partial \\dot{q}_j}(\\tfrac{1}{2}m_i\\dot{r}_i^2)$`}
                  .
                </li>
                <li>
                  Sum over {`$i$`} to obtain {`$\\frac{\\partial T}{\\partial \\dot{q}_j}$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Starting from D'Alembert's principle, derive Lagrange's general equation{' '}
                {`$\\frac{d}{dt}\\frac{\\partial T}{\\partial \\dot{q}_j} - \\frac{\\partial T}{\\partial q_j} = Q_j$`}{' '}
                without referring to the example above. Write out every step.
              </p>
            </div>
          </div>

          <p>
            The independence of the {`$\\delta q_j$`} is what forces each bracket to zero on its
            own. That independence holds only for holonomic constraints, the ones that are rules on
            positions alone. If a constraint is a rule on velocities that cannot become a rule on
            positions, the virtual displacements are not fully independent. Then you cannot get one
            equation per coordinate, and this form does not apply.
          </p>
          <p>
            You can now derive Lagrange's equations for any holonomic system: write the kinetic
            energy and the generalized forces, and turn the crank.
          </p>
        </>,

        <>
          <h2>The Hand-Off to Lagrange's Equations</h2>
          <p>
            One special case closes the bridge. When all applied forces come from a potential{' '}
            {`$V(q_j)$`} that does not depend on velocities, the generalized force is simply{' '}
            {`$Q_j = -\\frac{\\partial V}{\\partial q_j}$`}. Put that into the general equation and
            the kinetic and potential parts combine into one function, the{' '}
            <strong>Lagrangian</strong> {`$L = T - V$`}. The general equation then takes its most
            famous form, the Euler-Lagrange equation. The next topic develops that equation in full.
          </p>
        </>,

        <>
          <h2>Illustration: A Bead on a Wire</h2>
          <p>
            A bead of mass {`$m$`} slides without friction along a bent wire. Take the single
            generalized coordinate {`$q$`}: the distance along the wire from a fixed start point.
            This one number pins down where the bead is. The wire pushes on the bead to hold it on
            the path. That push is the constraint force.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The wire pushes the bead sideways to keep it on the path. Before any algebra: will
              that sideways push appear in the equation for the bead's motion along the wire?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. The push is the constraint force, perpendicular to the wire. A virtual
                displacement {`$\\delta\\mathbf{r}$`} runs along the wire. The two are
                perpendicular, so the push does zero virtual work. D'Alembert's principle keeps only
                virtual-work terms, so the push drops out.
              </p>
            </details>
          </div>

          <p>
            Here is the whole point in one line. The constraint force {`$\\mathbf{f}$`} is normal to
            the wire. The virtual displacement is tangent to the wire. So{' '}
            {`$\\mathbf{f}\\cdot\\delta\\mathbf{r} = 0$`}, and the force does no virtual work. You
            never have to compute it. D'Alembert's principle hands you the motion in terms of{' '}
            {`$q$`} alone, with no sideways force in sight.
          </p>
        </>,

        <>
          <h2>Where This Leads</h2>
          <p>
            The derivation above keeps each bracket zero because the {`$\\delta q_j$`} are
            independent. That holds for holonomic constraints, which are rules on positions alone.
            Some constraints are rules on velocities that cannot be turned into rules on positions.
            Rolling without slipping is the standard case. Those constraints are nonholonomic. The
            next topic studies that split and the methods it needs.
          </p>
          <p>
            One more limit is worth naming. The total constraint force on a particle is
            well-defined. But when several constraints push on one particle at once, you cannot
            always pull the separate forces back out. The virtual-work condition fixes only their
            combined effect.
          </p>
        </>
      ]
    },
    practice: [
      {
        q: `A block slides on a frictionless inclined plane at angle 30°. Using D'Alembert's principle, why does the normal force from the incline not appear in the equation of motion for the block's position along the slope?`,
        a: `The normal force is perpendicular to the incline surface. The virtual displacement of the block lies along the surface. Their dot product is zero, so the normal force does zero virtual work. D'Alembert's principle includes only terms of the form $\\mathbf{F}\\cdot\\delta\\mathbf{r}$, so the normal force drops out entirely. Only gravity's slope component $mg\\sin 30^\\circ$ drives the motion.`
      },
      {
        q: `Write the Lagrangian for a simple pendulum (length $l$, mass $m$) using angle $\\theta$ as the generalized coordinate. Derive the equation of motion.`,
        a: `The kinetic energy is $T = \\tfrac{1}{2}ml^2\\dot{\\theta}^2$. The potential energy is $V = -mgl\\cos\\theta$, taking the pivot as zero. So $L = T - V = \\tfrac{1}{2}ml^2\\dot{\\theta}^2 + mgl\\cos\\theta$. Lagrange's equation is $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{\\theta}} - \\frac{\\partial L}{\\partial \\theta} = 0$. You get $\\frac{d}{dt}(ml^2\\dot{\\theta}) = ml^2\\ddot{\\theta}$ and $\\frac{\\partial L}{\\partial \\theta} = -mgl\\sin\\theta$. The result is $ml^2\\ddot{\\theta} + mgl\\sin\\theta = 0$, or $\\ddot{\\theta} + \\frac{g}{l}\\sin\\theta = 0$.`
      },
      {
        q: `What is the cancellation-of-dots identity? State it and explain in one sentence why it is true.`,
        a: `The identity is $\\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial \\dot{q}_j} = \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$. It holds because $\\dot{\\mathbf{r}}_i = \\sum_k \\frac{\\partial \\mathbf{r}_i}{\\partial q_k}\\dot{q}_k + \\frac{\\partial \\mathbf{r}_i}{\\partial t}$. Differentiating with respect to $\\dot{q}_j$ picks out only the $k = j$ term. Its coefficient is $\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$, a function of $q$ and $t$, not of $\\dot{q}$.`
      },
      {
        q: `A particle moves on a constraint surface $M$. The applied force is $\\mathbf{F}^{(a)}$ and the constraint force is $\\mathbf{R}$. D'Alembert's principle says $\\sum (\\mathbf{F}^{(a)} - \\dot{\\mathbf{p}})\\cdot\\delta\\mathbf{r} = 0$. What condition on $\\mathbf{R}$ makes the constraint force disappear from this equation?`,
        a: `The condition is $\\mathbf{R}\\cdot\\delta\\mathbf{r} = 0$ for every virtual displacement $\\delta\\mathbf{r}$ consistent with the constraint. This is the ideal-constraint condition. It holds when $\\mathbf{R}$ is normal to $M$. Since $\\delta\\mathbf{r}$ is tangent to $M$, the dot product $\\mathbf{R}\\cdot\\delta\\mathbf{r} = 0$. For a frictionless surface the constraint force is normal by definition, so it always drops out. Sliding friction has a tangential component and would not drop out.`
      },
      {
        q: `What is a virtual displacement, and how does it differ from a real displacement? Give a concrete example with a pendulum.`,
        a: `A virtual displacement $\\delta\\mathbf{r}$ is a tiny shift in position consistent with the constraints at a fixed instant ($\\delta t = 0$). A real displacement $d\\mathbf{r}$ happens over an actual time interval $dt$, during which the constraints may themselves move. For a pendulum bob at angle $\\theta$, the real displacement $d\\mathbf{r}$ gains a radial part if the rod stretches. The virtual displacement $\\delta\\mathbf{r}$ must keep the bob on the circle of radius $l$ right now, so it is purely tangential and perpendicular to the rod.`
      },
      {
        q: `For a conservative system, Lagrange's general equation is $\\frac{d}{dt}\\frac{\\partial T}{\\partial \\dot{q}_j} - \\frac{\\partial T}{\\partial q_j} = Q_j$. Show how it reduces to $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_j} - \\frac{\\partial L}{\\partial q_j} = 0$ when all forces come from a potential $V(q_j)$.`,
        a: `For conservative forces, $Q_j = -\\frac{\\partial V}{\\partial q_j}$. Move it to the left: $\\frac{d}{dt}\\frac{\\partial T}{\\partial \\dot{q}_j} - \\frac{\\partial T}{\\partial q_j} + \\frac{\\partial V}{\\partial q_j} = 0$. Since $V$ does not depend on $\\dot{q}_j$, we have $\\frac{\\partial V}{\\partial \\dot{q}_j} = 0$, so $\\frac{\\partial (T-V)}{\\partial \\dot{q}_j} = \\frac{\\partial T}{\\partial \\dot{q}_j}$. Also $\\frac{\\partial (T-V)}{\\partial q_j} = \\frac{\\partial T}{\\partial q_j} - \\frac{\\partial V}{\\partial q_j}$. Substituting $L = T - V$ into both terms gives $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_j} - \\frac{\\partial L}{\\partial q_j} = 0$.`
      },
      {
        q: `A marble rolls without slipping inside a bowl. Is this a holonomic or nonholonomic system? Can Lagrange's equations be applied directly?`,
        a: `Rolling without slipping is usually nonholonomic. The no-slip condition is a rule on velocities. You cannot turn it into a rule on positions alone. So in three dimensions the standard Lagrange equations from D'Alembert's principle do not apply directly. You must use special methods. Note that this constraint is still ideal: it does zero virtual work, so a constraint can be both ideal and nonholonomic.`
      },
      {
        q: `State D'Alembert's principle in words without using symbols. What physical idea does it encode?`,
        a: `D'Alembert's principle says this: for any imagined virtual displacement of the system that is consistent with the constraints at a fixed instant, the total virtual work of the applied forces minus the inertial forces sums to zero. The inertial force on each particle is its mass times its acceleration, reversed. The physical idea is that constraint forces do no virtual work. So you can drop them and write the dynamics using only the forces you specify and the particles' inertia.`
      },
      {
        q: `Transfer: A charged bead slides on a frictionless straight wire. An electric field $\\mathbf{E}$ points along the wire. Write the Lagrangian using $x$ as the generalized coordinate ($x$ along the wire) and derive the equation of motion.`,
        a: `The kinetic energy is $T = \\tfrac{1}{2}m\\dot{x}^2$. The applied force along the wire is $F = qE$, charge times field. This is conservative if $E$ is uniform: $V = -qEx$. So $L = T - V = \\tfrac{1}{2}m\\dot{x}^2 + qEx$. Lagrange's equation $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{x}} - \\frac{\\partial L}{\\partial x} = 0$ gives $\\frac{d}{dt}(m\\dot{x}) - qE = 0$, so $m\\ddot{x} = qE$. This is just $F = ma$ along the wire, and the wire's normal force never appeared.`
      },
      {
        q: `Transfer: A pendulum bob hangs on a massless rod of length $l$. The pivot accelerates horizontally with acceleration $a_0$. In the non-inertial frame the pendulum feels a fictitious horizontal force $-ma_0$. Write the Lagrangian and the equation of motion.`,
        a: `Use angle $\\theta$ from vertical. The bob position relative to the pivot is $(l\\sin\\theta,\\, -l\\cos\\theta)$. In the accelerating frame the fictitious force is $-ma_0$ horizontally. Its effective potential is $U_{\\text{fict}} = ma_0\\, l\\sin\\theta$, the work of $-ma_0$ over the horizontal shift $l\\sin\\theta$. So $L = \\tfrac{1}{2}ml^2\\dot{\\theta}^2 + mgl\\cos\\theta - ma_0 l\\sin\\theta$. Lagrange's equation gives $ml^2\\ddot{\\theta} = -mgl\\sin\\theta - ma_0 l\\cos\\theta$, so $\\ddot{\\theta} = -\\frac{g}{l}\\sin\\theta - \\frac{a_0}{l}\\cos\\theta$. The equilibrium shifts to $\\tan\\theta_{\\text{eq}} = -\\frac{a_0}{g}$.`
      },
      {
        q: `Explain from first principles why the independence of the virtual displacements $\\delta q_j$ is needed to extract one Lagrange equation per generalized coordinate.`,
        a: `D'Alembert's principle gives $\\sum_j \\left[\\frac{d}{dt}\\frac{\\partial T}{\\partial \\dot{q}_j} - \\frac{\\partial T}{\\partial q_j} - Q_j\\right]\\delta q_j = 0$. This is one scalar equation relating all the $\\delta q_j$. Suppose the $\\delta q_j$ were not independent, as happens with nonholonomic constraints. Then you could only say the coefficients are perpendicular to the allowed virtual displacements. You could not say each coefficient is zero. With holonomic constraints, each $\\delta q_j$ varies freely while the others stay fixed, so each bracket must vanish on its own. That step gives $n$ separate equations of motion.`
      },
      {
        q: `Self-explain: In the derivation of Lagrange's equations, the step from $\\sum_i m_i\\ddot{\\mathbf{r}}_i\\cdot\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$ to an expression with $\\frac{d}{dt}\\frac{\\partial T}{\\partial \\dot{q}_j} - \\frac{\\partial T}{\\partial q_j}$ uses the product rule and the cancellation-of-dots identity. Explain the role of each.`,
        a: `The product rule lets you write $m_i\\ddot{\\mathbf{r}}_i\\cdot\\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = \\frac{d}{dt}\\left(m_i\\dot{\\mathbf{r}}_i\\cdot\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right) - m_i\\dot{\\mathbf{r}}_i\\cdot\\frac{d}{dt}\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$. This splits the second-derivative term into a time-derivative term minus a correction. The cancellation-of-dots identity then swaps $\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$ for $\\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial \\dot{q}_j}$ in the first term, so you recognize $m_i\\dot{\\mathbf{r}}_i\\cdot\\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial \\dot{q}_j} = \\frac{\\partial}{\\partial \\dot{q}_j}(\\tfrac{1}{2}m_i\\dot{r}_i^2)$. The correction term uses $\\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial q_j} = \\frac{d}{dt}\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$ to give $\\frac{\\partial}{\\partial q_j}(\\tfrac{1}{2}m_i\\dot{r}_i^2)$. Summing over $i$ yields $\\frac{\\partial T}{\\partial \\dot{q}_j}$ and $\\frac{\\partial T}{\\partial q_j}$.`
      },
      {
        q: `Transfer: Two masses $m_1$ and $m_2$ hang from a light inextensible string over a frictionless, massless pulley (an Atwood machine). Take the downward displacement $x$ of $m_1$ as the generalized coordinate. Apply D'Alembert's principle to find the acceleration, and show that the string tension never enters.`,
        a: `The string is inextensible, so when $m_1$ moves down by $\\delta x$, $m_2$ moves up by $\\delta x$. The tension pulls each mass toward the pulley with equal magnitude, so its total virtual work is $T\\,\\delta x - T\\,\\delta x = 0$: the tension is an ideal constraint force that does no virtual work. D'Alembert's principle then keeps only gravity and inertia: $(m_1 g - m_1\\ddot{x})\\,\\delta x + (m_2 g + m_2\\ddot{x})(-\\delta x) = 0$. Because $\\delta x$ is arbitrary, the bracket must vanish: $(m_1 - m_2)g = (m_1 + m_2)\\ddot{x}$, so $\\ddot{x} = \\frac{(m_1 - m_2)g}{m_1 + m_2}$. The tension dropped out because it does zero virtual work, which is exactly the elimination D'Alembert's principle exploits.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: "D'Alembert's Principle",
      sections: [
        <>
          <h2>Core Equations</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Force decomposition</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$\\mathbf{F}_i = \\mathbf{F}_i^{(a)} + \\mathbf{f}_i$$`}</span>
              </div>
              <p>
                When to use: any time you need to separate the physics you specify (
                {`$\\mathbf{F}_i^{(a)}$`}) from the unknown reaction forces ({`$\\mathbf{f}_i$`}).
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Principle of virtual work (statics)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$\\sum_i \\mathbf{F}_i^{(a)} \\cdot \\delta\\mathbf{r}_i = 0$$`}</span>
              </div>
              <p>
                When to use: system in equilibrium, ideal constraints. Constraint forces drop out
                via {`$\\sum_i \\mathbf{f}_i \\cdot \\delta\\mathbf{r}_i = 0$`}.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">D'Alembert's principle</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\sum_i \\bigl(\\mathbf{F}_i^{(a)} - \\dot{\\mathbf{p}}_i\\bigr) \\cdot \\delta\\mathbf{r}_i = 0$$`}</span>
              </div>
              <p>
                When to use: any dynamical system with ideal holonomic constraints where you want to
                eliminate the constraint forces and work entirely with applied forces and inertia.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Virtual displacement</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$\\delta\\mathbf{r}_i = \\sum_j \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\,\\delta q_j \\qquad (\\delta t = 0)$$`}</span>
              </div>
              <p>
                When to use: converting D'Alembert's principle into generalized coordinates. No{' '}
                {`$\\frac{\\partial\\mathbf{r}_i}{\\partial t}$`} term: time is frozen.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Generalized force</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$Q_j = \\sum_i \\mathbf{F}_i^{(a)} \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$$`}</span>
              </div>
              <p>
                When to use: expressing applied forces in generalized coordinates. Units:
                {`$[Q_j][q_j] = \\text{energy}$`} always.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Cancellation-of-dots identity</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">
                <span>{`$$\\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial \\dot{q}_j} = \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$$`}</span>
              </div>
              <p>
                When to use: in the D'Alembert-to-Lagrange derivation to bring {`$T$`} into the
                inertia term.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Lagrange's equations (general)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\frac{d}{dt}\\frac{\\partial T}{\\partial \\dot{q}_j} - \\frac{\\partial T}{\\partial q_j} = Q_j$$`}</span>
              </div>
              <p>
                When to use: holonomic constraints, any applied forces (not necessarily
                conservative).
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Lagrange's equations (conservative)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_j} - \\frac{\\partial L}{\\partial q_j} = 0 \\qquad L = T - V$$`}</span>
              </div>
              <p>
                When to use: holonomic constraints, all forces conservative (V depends only on
                coordinates, not velocities).
              </p>
            </div>
          </div>

          <h2>Key Definitions</h2>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Ideal constraint</div>
            <div className="lrn-definition-desc">
              <p>
                A constraint for which {`$\\sum_i \\mathbf{f}_i \\cdot \\delta\\mathbf{r}_i = 0$`}.
                Examples: frictionless surface (constraint force normal, displacement tangential),
                rigid body (internal forces cancel), rolling without slipping. Sliding friction
                violates this condition.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Holonomic vs nonholonomic</div>
            <div className="lrn-definition-desc">
              <p>
                <strong>Holonomic:</strong> a rule on positions alone, {`$f(\\mathbf{r}_i, t) = 0$`}
                . The virtual displacements {`$\\delta q_j$`} are independent. Lagrange's equations
                apply.
              </p>
              <p>
                <strong>Nonholonomic:</strong> a rule on velocities that cannot be turned into a
                rule on positions (for example, a sphere rolling on a plane). The virtual
                displacements are not independent. Standard Lagrange's equations do not apply.
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
