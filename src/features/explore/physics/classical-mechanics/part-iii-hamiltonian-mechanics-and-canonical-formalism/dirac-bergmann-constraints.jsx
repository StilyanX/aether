import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  ConstraintSurfaceDiagram,
  GaugeOrbitSweep,
  PhaseSpaceDimensionCount,
  FirstVsSecondClassContrast
} from '../../../../../components/viz'

export default function DiracBergmannConstraints() {
  const config = {
    cssPrefix: 'dbc',
    documentTitle: 'Constrained Hamiltonian Systems: Dirac-Bergmann Algorithm - AETHER',
    learning: {
      groupTitle: 'Hamiltonian Mechanics and Canonical Formalism',
      category: 'Classical Mechanics',
      title: 'Constrained Hamiltonian Systems: Dirac-Bergmann Algorithm',
      subtitle:
        'How singular Lagrangians generate constraints and why first-class constraints are gauge generators',
      sections: [
        <>
          <h2>Singular Lagrangians and Primary Constraints</h2>
          <p>
            Start from the Euler-Lagrange equations. To solve them for the accelerations{' '}
            {`$\\ddot{q}^n$`}, you must invert the Hessian matrix{' '}
            {`$\\frac{\\partial^2 L}{\\partial \\dot{q}^n \\partial \\dot{q}^{n'}}$`} (the matrix of
            second derivatives of {`$L$`} with respect to the velocities). When its determinant is
            nonzero, the accelerations are fixed by the positions and velocities and the motion is
            fully determined. Every gauge theory breaks this. The Hessian determinant vanishes, the
            accelerations are not unique, and the solution carries arbitrary functions of time.
          </p>
          <p>
            A Lagrangian {`$L(q^n, \\dot{q}^n)$`} with this vanishing Hessian determinant is the{' '}
            <strong>singular</strong> Lagrangian introduced earlier in this part. The same
            degeneracy now blocks the momenta: you cannot invert{' '}
            {`$p_n = \\frac{\\partial L}{\\partial \\dot{q}^n}$`} to get the velocities uniquely.
            Instead, the momenta satisfy relations among themselves. A quick instance:{' '}
            {`$L = \\frac{1}{2}e^y \\dot{x}^2$`} has no {`$\\dot{y}^2$`} term, so {`$p_y = 0$`} is
            forced and the Hessian is singular.
          </p>
          <p>
            Those relations are called <strong>primary constraints</strong>:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\phi_m(q, p) = 0, \\quad m = 1, \\ldots, M$$`}</span>
          </div>
          <p>
            They follow purely from the definition {`$p_n = \\partial L / \\partial \\dot{q}^n$`}.
            No equations of motion are needed. Let {`$N$`} count the configuration variables{' '}
            {`$q^n$`}. You may write {`$M$`} constraints {`$\\phi_m$`} at first, but only {`$M'$`}{' '}
            of them are independent. The rank of the Hessian equals {`$N - M'$`}, which is what sets
            the number {`$M'$`} of independent primary constraints. The primary constraint surface
            is then a submanifold of phase space of dimension {`$2N - M'$`}.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Primary Constraint</span>
            <div className="lrn-definition-desc">
              <p>
                A phase-space relation {`$\\phi_m(q, p) = 0$`} that follows from the definition of
                the momenta alone, before using the equations of motion.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The Legendre map {`$(q, \\dot{q}) \\to (q, p)$`} is many-to-one when the Hessian is
              singular. Many velocity-space points map to the same momentum-space point.
            </p>
            <p>
              The image of this map is exactly the primary constraint surface. Points off that
              surface are not in the image of any Legendre transform, so they are not physically
              reachable.
            </p>
          </div>
          <ConstraintSurfaceDiagram />
        </>,

        <>
          <h2>The Canonical Hamiltonian and Lagrange Multipliers</h2>
          <p>
            Define the canonical Hamiltonian by the usual Legendre transform (the standard swap from
            velocities to momenta):
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$H = \\dot{q}^n p_n - L$$`}</span>
          </div>
          <p>
            Because the Hessian is singular, {`$H$`} depends on {`$q$`} and {`$p$`} only through the
            combination {`$p(q, \\dot{q})$`}. On the primary constraint surface, {`$H$`} is
            well-defined, but it is not unique off that surface: replacing{' '}
            {`$H \\to H + c^m(q,p)\\phi_m$`} leaves the physics unchanged.
          </p>
          <p>
            The equations of motion add each primary constraint with a coefficient {`$u^m$`}, a{' '}
            <strong>Lagrange multiplier</strong>:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\dot{q}^n = \\frac{\\partial H}{\\partial p_n} + u^m \\frac{\\partial \\phi_m}{\\partial p_n}$$`}</span>
          </div>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\dot{p}_n = -\\frac{\\partial H}{\\partial q^n} - u^m \\frac{\\partial \\phi_m}{\\partial q^n}$$`}</span>
          </div>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\phi_m(q, p) = 0$$`}</span>
          </div>
          <p>
            These multipliers {`$u^m$`} are arbitrary functions of time. Nothing in {`$q$`} and{' '}
            {`$p$`} fixes them. This is a different role from the multipliers you met for holonomic
            constraints in the Lagrangian. There, a multiplier was a definite number set by the
            constraint forces: solve for it and you get one answer. Here, {`$u^m$`} stays free for
            all time, and that freedom is physical. It is the <strong>gauge freedom</strong> of the
            system.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Gauge freedom, gauge transformation, gauge orbit
            </span>
            <div className="lrn-definition-desc">
              <p>
                <strong>Gauge freedom</strong> is the part of the motion that the equations leave
                undetermined. Two solutions that differ only in their choice of the arbitrary{' '}
                {`$u^m$`} describe the very same physical state at every time. The map that carries
                one such solution to the other is a <strong>gauge transformation</strong>.
              </p>
              <p>
                Start from one point in phase space and apply every gauge transformation. The set of
                points you reach is the <strong>gauge orbit</strong> of that point. Every point on a
                single orbit is the same physical state wearing different unmeasurable labels. The
                real physics lives on the orbits, not on the individual points.
              </p>
            </div>
          </div>
          <p>For any observable {`$F(q,p)$`}, the evolution reads:</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\dot{F} = [F, H] + u^m [F, \\phi_m]$$`}</span>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Lagrange multipliers {`$u^m$`} are not determined by {`$q$`} and {`$p$`} alone.
              What physical meaning does this arbitrariness carry?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Different choices of {`$u^m$`} give different trajectories in phase space, all
                corresponding to the same physical state. The multipliers parametrize gauge freedom:
                the physical state at time {`$t_2$`} is not uniquely determined by the state at{' '}
                {`$t_1$`} because the unmeasurable gauge part can vary freely.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Secondary Constraints and the Consistency Algorithm</h2>
          <p>
            You must preserve the primary constraints in time. Taking {`$\\dot{\\phi}_m = 0$`} using
            the equations of motion gives <strong>consistency conditions</strong>:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$[\\phi_m, H] + u^{m'}[\\phi_m, \\phi_{m'}] \\approx 0$$`}</span>
          </div>
          <p>
            The symbol {`$\\approx$`} is <strong>weak equality</strong>: the quantity is zero on the
            constraint surface but not identically zero throughout phase space. Strong equality
            (ordinary {`$=$`}) means the relation holds everywhere.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Weak equality {`$F \\approx G$`}</span>
              <p>
                {`$F - G$`} vanishes on the constraint surface {`$\\phi_j = 0$`}. Poisson brackets
                with {`$F \\approx G$`} require caution: taking a bracket can move you off the
                surface.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Strong equality {`$F = G$`}</span>
              <p>
                {`$F - G = 0$`} everywhere in phase space. You can safely substitute strong
                equalities before computing Poisson brackets.
              </p>
            </div>
          </div>
          <p>
            Each consistency condition either restricts the multipliers {`$u^m$`}, or it produces a
            new independent relation among {`$q$`} and {`$p$`}. That new relation is a{' '}
            <strong>secondary constraint</strong> {`$\\phi_k(q,p) = 0$`}. Secondary constraints
            arise from the equations of motion, not from the definition of momenta. You must
            preserve each new secondary constraint in time as well, which can generate tertiary
            constraints, and so on. The process terminates in a finite number of steps, because
            phase space has a finite dimension and each genuinely new constraint cuts that dimension
            by one, so only finitely many independent constraints can appear before the surface
            stops shrinking.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A consistency condition {`$[\\phi_m, H] + u^{m'}[\\phi_m, \\phi_{m'}] \\approx 0$`} is
              linear in the multipliers {`$u^{m'}$`}.
            </p>
            <p>
              Suppose every bracket {`$[\\phi_m, \\phi_{m'}]$`} vanishes on the constraint surface.
              What must the condition then say, and what does that produce?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The multiplier term drops out, leaving {`$[\\phi_m, H] \\approx 0$`}. This no longer
                involves {`$u^{m'}$`} at all.
              </p>
              <p>
                If {`$[\\phi_m, H]$`} is not already weakly zero, it is a new phase-space relation
                among {`$q$`} and {`$p$`}: a secondary constraint. So all-vanishing primary brackets
                force the cascade to produce secondary constraints rather than fix multipliers.
              </p>
            </details>
          </div>
          <p>Label all constraints (primary and secondary) together:</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\phi_j \\approx 0, \\quad j = 1, \\ldots, J$$`}</span>
          </div>
        </>,

        <>
          <h2>First-Class and Second-Class Constraints</h2>
          <p>
            Before the worked examples, fix the labels every example uses. A phase-space function{' '}
            {`$F$`} is <strong>first class</strong> if its Poisson bracket with every constraint
            vanishes weakly:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$[F, \\phi_j] \\approx 0 \\quad \\text{for all } j = 1, \\ldots, J$$`}</span>
          </div>
          <p>
            Weak vanishing has a sharper form. A bracket that is zero on the constraint surface must
            be a combination of the constraints themselves, so{' '}
            {`$[F, \\phi_j] = f_j^{j'}\\phi_{j'}$`} for some phase-space coefficients {`$f_j^{j'}$`}{' '}
            called structure functions. This is the working version of first class: the bracket
            closes back onto the constraint set.
          </p>
          <p>
            A function that is not first class is <strong>second class</strong>. The full constraint
            matrix is {`$C_{jj'} = [\\phi_j, \\phi_{j'}]$`}. If {`$\\det C_{jj'} \\approx 0$`}, at
            least one first-class constraint exists. When the constraints split into first-class{' '}
            {`$\\gamma_a$`} and second-class {`$\\chi_\\alpha$`}, their bracket matrix reads weakly:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$C = \\begin{pmatrix} 0 & 0 \\\\ 0 & C_{\\beta\\alpha} \\end{pmatrix}$$`}</span>
          </div>
          <p>
            where {`$C_{\\beta\\alpha} = [\\chi_\\beta, \\chi_\\alpha]$`} is everywhere invertible
            on the constraint surface. You can always reach this block form: redefine each candidate
            first-class constraint by subtracting its brackets with the second-class set, which
            cancels the off-diagonal entries and leaves a pure first-class block with zero bracket
            against everything. The number of second-class constraints must be even, because the
            antisymmetric matrix {`$C_{\\beta\\alpha}$`} can only have nonzero determinant in even
            dimension.
          </p>
          <div className="lrn-insight">
            <p>
              First-class constraints generate gauge transformations. Second-class constraints
              reduce the physical phase space directly, without gauge freedom. The distinction
              drives the entire Dirac-Bergmann algorithm.
            </p>
          </div>
          <FirstVsSecondClassContrast />
        </>,

        <>
          <h2>Worked Examples: Constraint Generations and the Subtle Algorithm</h2>
          <p>
            The next examples run the algorithm on systems that stress it. The first two show how
            many constraints a single Lagrangian can spawn and how the labels shift. The last four
            show distinct ways the algorithm turns subtle, each a failure mode the regularity
            assumption is built to rule out. Work them before drawing any conclusion.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Suppose you have a Lagrangian with {`$n$`} variables. The consistency algorithm
              generates one new constraint at each step, cascading all the way to step {`$n$`}.
            </p>
            <p>
              Before reading on: how many total degrees of freedom does the system have, and what
              does that tell you about the physical content?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Each constraint removes one dimension from the {`$2n$`}-dimensional phase space.
                With {`$n$`} first-class constraints you get {`$2n_{\\text{phys}} = 2n - 2n = 0$`}:
                no physical degrees of freedom. The entire configuration is pure gauge.
              </p>
            </details>
          </div>

          <p>
            One tool appears in these examples, so meet it first: the{' '}
            <strong>gauge generator</strong> {`$G$`}. Build it from the first-class constraints with
            an arbitrary parameter {`$\\epsilon$`}, schematically {`$G = \\epsilon^a \\gamma_a$`}.
            Its Poisson bracket with any quantity gives the gauge change of that quantity,{' '}
            {`$\\delta F = [F, G]$`}. Because {`$G$`} is built from first-class constraints, this
            change moves you along a gauge orbit and never off the constraint surface. When the
            constraint cascade runs several generations deep, the single parameter {`$\\epsilon$`}{' '}
            reappears with one extra time derivative per generation, which is why the generators
            below carry terms like {`$d^{k}\\epsilon/dt^{k}$`}.
          </p>

          <h3>A. A System with n Generations of Constraints</h3>
          <p>Consider the Lagrangian:</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$L = \\sum_{i=1}^{n-1} \\frac{1}{2}\\bigl(q_i - \\dot{q}_{i+1}\\bigr)^2$$`}</span>
          </div>
          <p>
            For {`$n = 2$`} this reads {`$L = \\frac{1}{2}(q_1 - \\dot{q}_2)^2$`}. This is a
            truncation of electromagnetism at a fixed wave vector with transverse components set to
            zero: {`$q_1$`} plays the role of {`$A_0 / |k|$`} and {`$q_2$`} plays the role of the
            longitudinal component {`$A^{\\text{long}}$`}.
          </p>
          <p>Compute the momenta. For {`$i \\geq 2$`}:</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\pi_i = \\frac{\\partial L}{\\partial \\dot{q}_i} = -(q_{i-1} - \\dot{q}_i) = \\dot{q}_i - q_{i-1}$$`}</span>
          </div>
          <p>For {`$i = 1$`}:</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\pi_1 = \\frac{\\partial L}{\\partial \\dot{q}_1} = 0$$`}</span>
          </div>
          <p>
            So {`$\\pi_1 = 0$`} is the single <strong>primary constraint</strong>. Build the
            canonical Hamiltonian {`$H = \\dot{q}_i \\pi_i - L$`}. Substitute{' '}
            {`$\\dot{q}_i = \\pi_i + q_{i-1}$`} for {`$i \\geq 2$`} from the momenta above, and the
            velocity {`$\\dot{q}_1$`} drops out because {`$\\pi_1 = 0$`}:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$H = \\frac{1}{2}\\sum_{i \\geq 2} \\pi_i^2 + \\sum_{i \\geq 2} \\pi_i\\, q_{i-1}$$`}</span>
          </div>
          <p>The total Hamiltonian adds the primary constraint with an arbitrary multiplier:</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$H_T = H + u\\,\\pi_1$$`}</span>
          </div>
          <p>Require {`$\\dot{\\pi}_1 \\approx 0$`}:</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\dot{\\pi}_1 = [\\pi_1, H_T] = -\\frac{\\partial H}{\\partial q_1} = -\\pi_2 \\approx 0$$`}</span>
          </div>
          <p>
            This produces {`$\\pi_2 \\approx 0$`} as a <strong>secondary constraint</strong>.
            Requiring its preservation gives {`$\\pi_3 \\approx 0$`}, and so on. The cascade
            continues through:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\pi_1 \\approx 0, \\quad \\pi_2 \\approx 0, \\quad \\pi_3 \\approx 0, \\quad \\ldots, \\quad \\pi_n \\approx 0$$`}</span>
          </div>
          <p>
            All {`$n$`} constraints are <strong>first class</strong>. With {`$A = n$`} first-class
            constraints and {`$N = n$`} configuration variables, the degree-of-freedom count gives{' '}
            {`$2N_{\\text{phys}} = 2n - 2n = 0$`}. There are no physical degrees of freedom. The
            gauge generator that shifts the fields is:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$G = \\sum_{i=1}^{n} \\frac{d^{n-i}\\epsilon}{dt^{n-i}}\\,\\pi_i$$`}</span>
          </div>
          <p>
            The key observation: this single Lagrangian generates {`$n$`} generations of
            constraints, one per variable. Constraint generations are not bounded by any small
            number.
          </p>

          <h3>B. The Same Physical System, Three Different Lagrangians</h3>
          <p>
            Compare three Lagrangians for what turns out to be the same physical system (zero
            degrees of freedom):
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$L = 0$`}</span>
              <p>
                All momenta {`$\\pi_i = 0$`} follow immediately from the definition. These are all{' '}
                <strong>primary</strong> constraints. The canonical Hamiltonian is {`$H = 0$`}.
                Consistency generates nothing new. The gauge generator is{' '}
                {`$G = \\sum_i \\epsilon^i \\pi_i$`}, giving arbitrary independent shifts of every{' '}
                {`$q^i$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$L = -\\tfrac{1}{2}\\sum_i (q^i)^2$`}</span>
              <p>
                Again all {`$\\pi_i = 0$`} are <strong>primary</strong>. The Hamiltonian is{' '}
                {`$H = \\frac{1}{2}\\sum_i (q^i)^2$`}. Consistency forces{' '}
                {`$\\dot{\\pi}_i \\approx 0$`}, giving {`$q^i \\approx 0$`} as{' '}
                <strong>secondary</strong> constraints. The full set{' '}
                {`$\\{\\pi_i \\approx 0,\\, q^i \\approx 0\\}$`} is <strong>second class</strong>,
                and {`$H$`} vanishes weakly on the constraint surface.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">CONCEPTUAL PAYOFF</span>
            <p>
              These three Lagrangians describe the <strong>same physical system</strong>: no
              physical degrees of freedom, purely gauge content. Yet the constraints arise in
              completely different orders, and the third even lands them in a different class.
            </p>
            <p>
              <strong>
                The labels "primary", "secondary", "tertiary" have no fundamental physical
                significance.
              </strong>{' '}
              They depend on the choice of Lagrangian and on how many generations the consistency
              algorithm needs. The physical content is encoded in the constraint surface and the
              gauge orbits, not in how many steps were needed to find each constraint.
            </p>
          </div>

          <h3>C. Four Examples Where the Algorithm Gets Subtle</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The bracket matrix {`$C_{jj'} = [\\phi_j, \\phi_{j'}]$`} determines whether a
              constraint is first or second class.
            </p>
            <p>
              What could go wrong if the rank of this matrix is not constant across the entire
              constraint surface?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                If the rank varies, some points on the constraint surface look first class and
                others look second class. You cannot split the constraints into a global first-class
                set and a global second-class set. The Dirac classification breaks down, and the
                Dirac bracket may not be well-defined everywhere. Example 4 below shows exactly this
                breakdown.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Example 1: Dirac Conjecture Counterexample</span>
            <div className="lrn-definition-desc">
              <p>Hamiltonian:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$H = e^\\lambda q^2 + e^{-\\mu} p^2 + \\pi_\\nu^2 + q\\,\\pi_\\nu$$`}</span>
              </div>
              <p>
                Variables: {`$(q, p, \\lambda, \\pi_\\lambda, \\mu, \\pi_\\mu, \\nu, \\pi_\\nu)$`}.
                Primary constraints: {`$\\phi_1 = \\pi_\\lambda \\approx 0$`},{' '}
                {`$\\phi_2 = \\pi_\\mu \\approx 0$`}.
              </p>
              <p>Run the consistency algorithm. Require {`$\\dot{\\phi}_1 \\approx 0$`}:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$-e^\\lambda q^2 \\approx 0 \\implies q^2 \\approx 0 \\implies q \\approx 0$$`}</span>
              </div>
              <p>This is a secondary constraint. Require {`$\\dot{\\phi}_2 \\approx 0$`}:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$e^{-\\mu} p^2 \\approx 0 \\implies p \\approx 0$$`}</span>
              </div>
              <p>
                Another secondary constraint. Now check that {`$q \\approx 0$`} is preserved. On the
                secondary constraint surface, {`$\\dot{q} \\approx 0$`}. Check{' '}
                {`$\\dot{p} \\approx 0$`}: since {`$q \\approx 0$`} and {`$p \\approx 0$`}:
              </p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\dot{p} = -\\frac{\\partial H}{\\partial q} \\approx -(\\pi_\\nu) \\approx 0 \\implies \\pi_\\nu \\approx 0$$`}</span>
              </div>
              <p>
                So {`$\\pi_\\nu \\approx 0$`} is a <strong>tertiary constraint</strong>. Checking
                its preservation closes the algorithm.
              </p>
              <p>Classification:</p>
              <ul className="lrn-list">
                <li>
                  <strong>First class:</strong> {`$\\pi_\\lambda \\approx 0$`},{' '}
                  {`$\\pi_\\mu \\approx 0$`} (primaries), {`$\\pi_\\nu \\approx 0$`} (tertiary)
                </li>
                <li>
                  <strong>Second class:</strong> {`$q \\approx 0$`}, {`$p \\approx 0$`}
                  (secondaries, since {`$[q, p] = 1 \\neq 0$`})
                </li>
              </ul>
              <p>
                The variable {`$\\nu$`} is never forced to any particular value by the constraints.
                Yet the first-class constraint {`$\\pi_\\nu \\approx 0$`} generates the
                transformation {`$\\delta \\nu = \\epsilon$`}, which shifts {`$\\nu$`} by a
                constant. This does nothing to {`$H$`} or to any observable. Yet {`$\\nu$`} is not a
                true gauge variable because the dynamics fixes {`$\\nu$`} in time through{' '}
                {`$\\dot{\\nu} = \\partial H/\\partial \\pi_\\nu = 0$`} once {`$\\pi_\\nu = 0$`} is
                imposed. The initial value of {`$\\nu$`} is, however, unconstrained.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The Dirac conjecture states that every first-class constraint generates a gauge
              transformation. Here {`$\\pi_\\nu \\approx 0$`} is first class yet{' '}
              <strong>{`$\\nu$`} is not a gauge degree of freedom</strong>: it is fixed by initial
              conditions and does not affect observables in the gauge sense.
            </p>
            <p>
              Explain in your own words why this breaks the Dirac conjecture, and state one
              structural difference between {`$\\pi_\\nu$`} and {`$\\pi_\\lambda$`} that flags the
              issue.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The Dirac conjecture would require {`$\\pi_\\nu \\approx 0$`} to generate a physical
                gauge redundancy, meaning the states before and after shifting {`$\\nu$`} should be
                physically identical. But {`$\\nu$`} does not appear in any observable: it is a
                spectator variable, not a gauge parameter. The conjecture fails because first-class
                constraints can arise from constraints that trivially drop out of the Hamiltonian,
                not from genuine gauge redundancy.
              </p>
              <p>
                The structural flag: {`$\\pi_\\lambda$`} is primary (it follows from the definition
                of the momenta), while {`$\\pi_\\nu$`} is tertiary (it was forced by a chain of
                consistency conditions). Primary first-class constraints are the genuine gauge
                generators in Dirac's original sense. The tertiary {`$\\pi_\\nu \\approx 0$`}
                arises for a different reason and does not inherit that role automatically.
              </p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Example 2: The Same Secondary Constraint from Two Sources
            </span>
            <div className="lrn-definition-desc">
              <p>Hamiltonian:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$H = (q_2)^2 e^{q_1}$$`}</span>
              </div>
              <p>
                Primary constraints: {`$\\phi_1 = p_1 \\approx 0$`}, {`$\\phi_2 = p_2 \\approx 0$`}.
              </p>
              <p>Consistency for {`$\\phi_1$`}:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\dot{p}_1 = -\\frac{\\partial H}{\\partial q_1} = -(q_2)^2 e^{q_1} \\approx 0 \\implies q_2 \\approx 0$$`}</span>
              </div>
              <p>Consistency for {`$\\phi_2$`}:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\dot{p}_2 = -\\frac{\\partial H}{\\partial q_2} = -2 q_2 e^{q_1} \\approx 0 \\implies q_2 \\approx 0$$`}</span>
              </div>
              <p>
                Both consistency conditions produce the <strong>same</strong> secondary constraint{' '}
                {`$q_2 \\approx 0$`}. No further constraints arise. Classification:{' '}
                {`$p_1 \\approx 0$`} is first class; {`$\\{p_2 \\approx 0,\\, q_2 \\approx 0\\}$`}{' '}
                are second class (since {`$[p_2, q_2] = -1 \\neq 0$`}). The multiplier {`$u^2$`} for{' '}
                {`$p_2$`} is fixed by requiring {`$\\dot{q}_2 \\approx 0$`}.
              </p>
              <p>
                A first-class primary and a second-class primary both generated the same
                second-class secondary constraint. This shows there is no simple rule that links the
                class of a parent constraint to the class of the constraint it generates.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Example 3: A Bifurcation That Resolves</span>
            <div className="lrn-definition-desc">
              <p>Hamiltonian:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$H = \\frac{1}{2}(p_3)^2 + \\frac{1}{2}(p_5)^2 + q_4 p_5 + q_5 p_3$$`}</span>
              </div>
              <p>
                Primary constraints: {`$\\phi_1 = p_1 \\approx 0$`},{' '}
                {`$\\phi_2 = p_2 + p_3 e^{q_1} \\approx 0$`}, {`$\\phi_3 = p_4 \\approx 0$`}.
              </p>
              <p>
                Computing consistency of {`$\\phi_2$`} leads to an expression involving {`$p_3$`}.
                The result appears to bifurcate: either {`$p_3 \\neq 0$`} with multipliers{' '}
                {`$u^1 = u^2 = 0$`}, or {`$p_3 = 0$`} as a new constraint. Testing the first branch:
                it is incompatible with the consistency of {`$\\phi_3$`}, which forces{' '}
                {`$\\dot{p}_5 \\approx 0$`} and thereby requires {`$p_3 \\approx 0$`}. So the
                bifurcation resolves: only the branch {`$p_3 \\approx 0$`} is consistent. This
                tertiary constraint closes the algorithm. All constraints end up first class.
              </p>
              <p>
                The lesson: apparent bifurcations in the consistency algorithm need not signal
                genuine ambiguity. One branch may be ruled out by a later consistency condition.
                Always trace all branches before concluding the algorithm is ambiguous.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Example 4: No Global First/Second-Class Separation
            </span>
            <div className="lrn-definition-desc">
              <p>Hamiltonian: {`$H = 0$`}. Constraints:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\phi_1 = p_1 \\approx 0, \\qquad \\phi_2 = p_3 + q^1 q^2 \\approx 0$$`}</span>
              </div>
              <p>
                The consistency conditions require {`$u^2 q^2 \\approx 0$`} and{' '}
                {`$u^1 q^2 \\approx 0$`}. Two regions of the constraint surface behave differently:
              </p>
              <ul className="lrn-list">
                <li>
                  Where {`$q^2 \\neq 0$`}: both multipliers must vanish, and the constraint bracket
                  matrix {`$C_{jj'} = [\\phi_j, \\phi_{j'}]$`} is <strong>nonzero</strong>. The
                  constraints are second class in this region.
                </li>
                <li>
                  Where {`$q^2 = 0$`}: the bracket matrix <strong>vanishes</strong>. The constraints
                  appear first class in this region.
                </li>
              </ul>
              <p>
                The rank of {`$C_{jj'}$`} is not constant on the constraint surface. There is no
                global decomposition into first-class and second-class subsets. The Dirac bracket
                cannot be defined globally.
              </p>
              <p>
                This breakdown is exactly what the <strong>regularity condition</strong> (or
                constant-rank assumption) rules out. A constraint surface is regular if and only if
                the rank of the constraint bracket matrix is constant everywhere on it. Under
                regularity, the global first/second-class split exists and the full Dirac-Bergmann
                algorithm applies without modification.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>The Dirac-Bergmann Algorithm</h2>
          <p>
            The algorithm turns a singular Lagrangian into a complete, consistent Hamiltonian
            system. It produces all constraints and classifies each one.
          </p>
          <div className="lrn-algorithm">
            <span className="lrn-algorithm-header">The Dirac-Bergmann Algorithm</span>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">1</span>
              <span>
                Compute momenta {`$p_n = \\frac{\\partial L}{\\partial \\dot{q}^n}$`}. Identify
                which velocities cannot be inverted.
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">2</span>
              <span>
                Read off primary constraints {`$\\phi_m(q,p) = 0$`} as the relations among momenta
                that follow from step 1.
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">3</span>
              <span>
                Construct the canonical Hamiltonian {`$H = \\dot{q}^n p_n - L$`}. Express it in
                terms of {`$q$`} and {`$p$`} (valid on the constraint surface).
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">4</span>
              <span>
                Write the total Hamiltonian {`$H_T = H + u^m \\phi_m$`} with arbitrary multipliers
                {`$u^m$`}.
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">5</span>
              <span>
                Require {`$\\dot{\\phi}_m \\approx 0$`}: compute{' '}
                {`$[\\phi_m, H] + u^{m'}[\\phi_m, \\phi_{m'}] \\approx 0$`}.
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">6</span>
              <span>
                Each consistency condition either fixes some {`$u^m$`} or yields a new secondary
                constraint. Add new constraints to the list.
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">7</span>
              <span>
                Require preservation of each new constraint. Repeat steps 5 and 6 until no new
                constraints appear.
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">8</span>
              <span>
                Collect all constraints as {`$\\phi_j \\approx 0$`}, {`$j = 1, \\ldots, J$`}.
                Compute the full matrix {`$C_{jj'} = [\\phi_j, \\phi_{j'}]$`}.
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">9</span>
              <span>
                Classify: find first-class constraints {`$\\gamma_a$`} (bracket with all others
                vanishes weakly) and second-class constraints {`$\\chi_\\alpha$`}.
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">10</span>
              <span>
                Write the total Hamiltonian using only the first-class primary constraints{' '}
                {`$\\phi_a$`}: {`$H_T = H' + v^a \\phi_a$`}. Here {`$H'$`} is the canonical {`$H$`}{' '}
                adjusted by the particular multiplier solution that makes it first class, so its
                bracket with every constraint vanishes weakly.
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">11</span>
              <span>
                For second-class constraints: compute {`$C^{\\alpha\\beta}$`} (inverse of{' '}
                {`$C_{\\beta\\alpha}$`}) and replace the Poisson bracket by the Dirac bracket
                (defined below).
              </span>
            </div>
            <div className="lrn-algorithm-line">
              <span className="lrn-algorithm-line-num">12</span>
              <span>
                Count physical degrees of freedom from the constraint tally (worked out in the Gauge
                Fixing section below).
              </span>
            </div>
          </div>
          <p>
            Run these steps on Example A above, the Lagrangian{' '}
            {`$L = \\frac{1}{2}(q_1 - \\dot{q}_2)^2$`}: step 1 gives {`$\\pi_1 = 0$`}, step 2 reads
            off the primary {`$\\pi_1 \\approx 0$`}, the consistency loop (steps 5 to 7) spawns{' '}
            {`$\\pi_2 \\approx 0$`}, and step 9 classifies both as first class. You can now take any
            singular Lagrangian and produce its complete, classified constraint set.
          </p>
        </>,

        <>
          <h2>First-Class Constraints as Gauge Generators</h2>
          <p>
            The total Hamiltonian contains arbitrary functions {`$v^a(t)$`}. The difference between
            two trajectories differing only in their choice of {`$v^a$`} is a{' '}
            <strong>gauge transformation</strong>:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\delta F = \\delta v^a [F, \\phi_a]$$`}</span>
          </div>
          <p>
            This transformation does not change the physical state. The first-class primary
            constraints {`$\\phi_a$`} generate these gauge transformations. The extended Hamiltonian
            adds all first-class constraints (primary and secondary) multiplied by independent
            arbitrary functions:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$H_E = H' + u^a \\gamma_a$$`}</span>
          </div>
          <p>where the sum runs over all independent first-class constraints {`$\\gamma_a$`}.</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The gauge orbit through a point {`$x$`} on the constraint surface is the set of all
              points reachable from {`$x$`} by gauge transformations. Why must the orbit lie
              entirely within the constraint surface?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A gauge transformation is generated by {`$[F, \\gamma_a]$`}. Because {`$\\gamma_a$`}
                is first class, {`$[\\phi_j, \\gamma_a] \\approx 0$`} for all constraints{' '}
                {`$\\phi_j$`}. This means {`$\\gamma_a$`} maps allowed states (satisfying all
                constraints) onto allowed states. Moving along the orbit generated by{' '}
                {`$\\gamma_a$`} preserves all constraints, so the orbit stays on the constraint
                surface.
              </p>
            </details>
          </div>
          <GaugeOrbitSweep />
        </>,

        <>
          <h2>The Dirac Bracket</h2>
          <p>
            Second-class constraints cannot be gauge generators. To handle them, Dirac introduced a
            modified bracket. Given second-class constraints {`$\\chi_\\alpha$`}
            with invertible matrix {`$C_{\\alpha\\beta} = [\\chi_\\alpha, \\chi_\\beta]$`} and
            inverse {`$C^{\\alpha\\beta}$`}:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$[F, G]^* = [F, G] - [F, \\chi_\\alpha]\\, C^{\\alpha\\beta}\\, [\\chi_\\beta, G]$$`}</span>
          </div>
          <p>
            The Dirac bracket has all the good properties of a Poisson bracket: antisymmetry,
            linearity, Leibniz rule, and the Jacobi identity. It has one additional property:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$[\\chi_\\alpha, F]^* = 0 \\quad \\text{for any } F$$`}</span>
          </div>
          <p>
            Second-class constraints have zero Dirac bracket with everything. This means you can set
            them strongly to zero <em>before</em> computing the Dirac bracket. They become operator
            identities. The Dirac bracket takes the place of the Poisson bracket in all equations of
            motion:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\dot{F} \\approx [F, H_E]^*$$`}</span>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Constraints {`$\\chi_1 = q^1 \\approx 0$`} and {`$\\chi_2 = p_1 \\approx 0$`}.
                Bracket matrix: {`$C_{12} = [\\chi_1, \\chi_2] = [q^1, p_1] = 1$`}, so{' '}
                {`$C^{12} = -1$`}, {`$C^{21} = 1$`}. Dirac bracket of any two functions:
                {`$[F, G]^* = [F,G] - [F,q^1](-1)[p_1,G] - [F,p_1](1)[q^1,G]$`}.
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>
                  Verify {`$[\\chi_1, F]^* = [q^1, F]^* = 0$`} for any {`$F$`} using the formula
                  above.
                </li>
                <li>
                  Check that the remaining bracket {`$[q^i, p_j]^* = \\delta^i_j$`} for{' '}
                  {`$i, j \\geq 2$`} is unchanged.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                For an electromagnetic field with second-class constraints, construct the Dirac
                bracket and verify that the longitudinal degree of freedom drops out of the bracket
                algebra.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the worked example you found {`$[\\chi_\\alpha, F]^* = 0$`} for every {`$F$`}.
            </p>
            <p>
              Explain why this single property is what lets you set {`$\\chi_1 = q^1 = 0$`} and{' '}
              {`$\\chi_2 = p_1 = 0$`} as strong identities, discarding that whole pair of variables.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Setting a constraint strongly to zero is only consistent if doing so commutes with
                the bracket you use for dynamics. With the Poisson bracket it does not, because{' '}
                {`$[q^1, p_1] = 1 \\neq 0$`} drags the discarded pair back into every equation.
              </p>
              <p>
                The Dirac bracket fixes this: {`$[\\chi_\\alpha, F]^* = 0$`} means {`$q^1$`} and{' '}
                {`$p_1$`} have zero bracket with everything. They become inert constants. You can
                set them to zero before or after taking the bracket and get the same answer, so the
                first degree of freedom truly drops out.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Gauge Fixing and Degrees of Freedom</h2>
          <p>
            To fix the gauge, impose additional conditions {`$C_b(q,p) \\approx 0$`}, one for each
            independent first-class constraint {`$\\gamma_a$`}. A good set of gauge conditions must
            satisfy two requirements:
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Accessible:</strong> every phase-space point can be reached from any given
              point by a gauge transformation.
            </li>
            <li>
              <strong>Complete:</strong> no nontrivial gauge transformation preserves the gauge
              conditions. Equivalently, the matrix {`$[C_b, \\gamma_a]$`} is invertible:
              {`$\\det[C_b, \\gamma_a] \\neq 0$`}.
            </li>
          </ul>
          <p>
            The invertibility condition means {`$C_b$`} and {`$\\gamma_a$`} together form a
            second-class set. After gauge-fixing, all remaining constraints are second class and the
            Dirac bracket takes over.
          </p>
          <p>
            That invertibility is only a local guarantee. The condition fixes the gauge near a
            point, but a single global gauge condition need not cut each gauge orbit exactly once.
            When no such global choice exists, the surface {`$C_b \\approx 0$`} either misses some
            orbits or crosses others more than once. This failure is the{' '}
            <strong>Gribov obstruction</strong>. It is a topological feature of the orbit structure
            and bites hardest in non-Abelian gauge theories.
          </p>
          <p>The physical degrees of freedom count:</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$2N_{\\text{phys}} = 2N - 2A - B$$`}</span>
          </div>
          <p>
            Here {`$N$`} is the number of original configuration coordinates. {`$A$`} is the number
            of independent first-class constraints. Each first-class constraint removes 2
            dimensions: the constraint surface itself plus its gauge orbit. {`$B$`} is the number of
            second-class constraints. Each second-class constraint removes 1 dimension, and {`$B$`}{' '}
            must be even.
          </p>
          <PhaseSpaceDimensionCount />
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Electromagnetism in 3+1 dimensions: {`$N = 4$`} (the four components of {`$A_\\mu$`}),
              one primary constraint ({`$p^0 \\approx 0$`}), and one secondary constraint (
              {`$\\nabla \\cdot \\mathbf{E} \\approx 0$`}), both first class. How many physical
              degrees of freedom should you get?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$2N_{\\text{phys}} = 2(4) - 2(2) - 0 = 4$`}, so {`$N_{\\text{phys}} = 2$`}.
                Electromagnetism has 2 physical degrees of freedom: the two transverse polarizations
                of the photon.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Geometry of the Constraint Surface</h2>
          <p>
            The constraint surface {`$\\Sigma$`} inherits a symplectic structure from the ambient
            phase space, but only if all constraints are second class. A symplectic structure is the
            pairing that the Poisson bracket comes from. The induced two-form{' '}
            {`$\\sigma_{jj'} = [\\phi_j, \\phi_{j'}]$`} is the object that pairs two tangent
            directions on {`$\\Sigma$`} and returns a number. It comes in two cases:
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Co-isotropic (first class):</strong> {`$\\sigma_{jj'}$`} is degenerate on
              {`$\\Sigma$`}, meaning it has a null direction at every point: a direction that pairs
              to zero with everything. Those null directions are the tangent vectors to the gauge
              orbits. The first-class constraints slice {`$\\Sigma$`} into a stack of these orbits,
              called a foliation (a partition of the surface into smooth, non-crossing pieces).
            </li>
            <li>
              <strong>Symplectic (second class):</strong> {`$\\sigma_{jj'}$`} is non-degenerate on{' '}
              {`$\\Sigma$`}, meaning it has no null direction. The constraint surface is itself a
              symplectic manifold and carries the Dirac bracket as its natural Poisson structure.
            </li>
          </ul>
          <p>
            Gauge-invariant observables are functions on {`$\\Sigma$`} that are constant along the
            gauge orbits. They form a subalgebra {`$\\mathcal{O}$`} of {`$C^\\infty(\\Sigma)$`} with
            a well-defined Dirac bracket:
          </p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$[F, \\gamma_a]^* \\approx 0 \\quad \\text{for all first-class } \\gamma_a$$`}</span>
          </div>
          <div className="lrn-insight">
            <p>
              The physical content of the theory lives in the quotient {`$\\Sigma / \\sim$`}, where
              two points on the constraint surface are equivalent if they are connected by a gauge
              orbit. Each equivalence class is a single physical state.
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'What condition on the Lagrangian produces primary constraints?',
        a: `The Hessian matrix $\\frac{\\partial^2 L}{\\partial \\dot{q}^n \\partial \\dot{q}^{n'}}$ must be singular, meaning its determinant vanishes. When it does, the momenta $p_n = \\partial L / \\partial \\dot{q}^n$ are not all independent and satisfy relations $\\phi_m(q,p) = 0$.`
      },
      {
        q: `What is weak equality and why must you not substitute it before computing a Poisson bracket?`,
        a: `Weak equality $F \\approx G$ means $F - G$ vanishes on the constraint surface but not off it. Poisson brackets involve derivatives, which sample the function off the surface. Substituting $\\phi_j = 0$ before differentiating removes information about those off-surface variations and gives a wrong result.`
      },
      {
        q: `The Lagrangian $L = \\frac{1}{2}e^y \\dot{x}^2$ has one primary constraint. What is it?`,
        a: `The momentum $p_y = \\partial L / \\partial \\dot{y} = 0$, so the primary constraint is $\\phi \\equiv p_y \\approx 0$. The Hessian is singular because $L$ has no $\\dot{y}^2$ term.`
      },
      {
        q: `How does a secondary constraint differ from a primary one?`,
        a: `A primary constraint follows directly from the definition $p_n = \\partial L / \\partial \\dot{q}^n$, with no dynamics needed. A secondary constraint follows from requiring a primary constraint to be preserved in time under the equations of motion: $\\dot{\\phi}_m \\approx 0$.`
      },
      {
        q: `What is the total Hamiltonian? Write the formula.`,
        a: `$H_T = H' + v^a \\phi_a$, where $H'$ is the first-class Hamiltonian (a particular solution of the consistency equations) and $v^a$ are arbitrary functions of time multiplying the first-class primary constraints $\\phi_a$.`
      },
      {
        q: `A function $F$ is first class. What does that mean in terms of Poisson brackets?`,
        a: `$[F, \\phi_j] \\approx 0$ for all constraints $\\phi_j$, $j = 1, \\ldots, J$. The Poisson bracket of $F$ with every constraint vanishes weakly. It is zero on the constraint surface.`
      },
      {
        q: `Why must the number of second-class constraints be even?`,
        a: `The matrix $C_{\\alpha\\beta} = [\\chi_\\alpha, \\chi_\\beta]$ is antisymmetric and must be invertible on the constraint surface (that is what makes the $\\chi_\\alpha$ second class). An antisymmetric matrix can only be invertible when its dimension is even.`
      },
      {
        q: `Write the Dirac bracket formula and state the key property that makes it useful for second-class constraints.`,
        a: `$[F, G]^* = [F, G] - [F, \\chi_\\alpha]\\,C^{\\alpha\\beta}\\,[\\chi_\\beta, G]$ where $C^{\\alpha\\beta}$ inverts $C_{\\alpha\\beta} = [\\chi_\\alpha, \\chi_\\beta]$. Key property: $[\\chi_\\alpha, F]^* = 0$ for any $F$. Second-class constraints have zero Dirac bracket with everything, so you can set them strongly to zero before computing Dirac brackets.`
      },
      {
        q: `Count the physical degrees of freedom for a system with $N = 6$ configuration variables, $A = 2$ independent first-class constraints, and $B = 2$ second-class constraints.`,
        a: `Use $2N_{\\text{phys}} = 2N - 2A - B$. Plug in: $2N_{\\text{phys}} = 2(6) - 2(2) - 2 = 12 - 4 - 2 = 6$, so $N_{\\text{phys}} = 3$. Each first-class constraint removes 2 dimensions (the constraint itself plus its gauge orbit), so $A = 2$ removes 4. Each second-class constraint removes 1, so $B = 2$ removes 2.`
      },
      {
        q: `What are the two properties a good gauge condition must satisfy?`,
        a: `(a) Accessible: every phase-space point can be reached from any other by a gauge transformation. (b) Complete: no nontrivial gauge transformation preserves the condition, i.e., $\\det[C_b, \\gamma_a] \\neq 0$.`
      },
      {
        q: `The Dirac bracket satisfies $[F, G]^* \\approx [F, G]$ when $G$ is first class and $F$ is arbitrary. Why?`,
        a: `When $G$ is first class, $[G, \\chi_\\alpha] \\approx 0$ for all second-class $\\chi_\\alpha$. The correction term $[F, \\chi_\\alpha]C^{\\alpha\\beta}[\\chi_\\beta, G]$ vanishes weakly because $[\\chi_\\beta, G] \\approx 0$.`
      },
      {
        q: `The extended Hamiltonian is $H_E = H' + u^a \\gamma_a$ where the sum runs over all first-class constraints. What does the total Hamiltonian $H_T$ miss that $H_E$ captures?`,
        a: `$H_T = H' + v^a \\phi_a$ includes only the first-class primary constraints. $H_E$ adds arbitrary multiples of all first-class constraints, primary and secondary. The secondary first-class constraints also generate gauge transformations; $H_E$ makes all of that gauge freedom manifest.`
      },
      {
        q: `A consistency condition $[\\phi_m, H] + u^{m'}[\\phi_m, \\phi_{m'}] \\approx 0$ can lead to three outcomes. Name them.`,
        a: `(1) It is automatically satisfied as an identity, giving no new information. (2) It restricts the values of some multipliers $u^{m'}$ but produces no new constraint. (3) It yields a new constraint $\\phi_k(q,p) \\approx 0$, a secondary constraint that does not involve the multipliers.`
      },
      {
        q: `For the Lagrangian $L = \\frac{1}{2}e^y \\dot{x}^2$, what is the secondary constraint and what class is it?`,
        a: `The canonical Hamiltonian is $H = \\frac{1}{2}e^{-y} p_x^2$. Requiring $\\dot{p}_y \\approx 0$: $\\dot{p}_y = [p_y, H] = -\\frac{1}{2}e^{-y}p_x^2 \\approx 0$, giving $p_x \\approx 0$ as secondary constraint. Both $p_y \\approx 0$ and $p_x \\approx 0$ are first class.`
      },
      {
        q: `A gauge orbit is a set of points on the constraint surface connected by gauge transformations. What is the geometric relationship between the gauge orbit and the null directions of the induced symplectic form?`,
        a: `The tangent vectors to the gauge orbit are exactly the null (kernel) directions of the induced two-form $\\sigma_{jj'} = [\\phi_j, \\phi_{j'}]$ on the constraint surface. First-class constraints produce degenerate $\\sigma$; the null directions are the infinitesimal gauge directions.`
      },
      {
        q: `The Poisson bracket of two first-class functions is first class. Prove this using the Jacobi identity.`,
        a: `Let $F$ and $G$ be first class: $[F, \\phi_j] = f_j^{j'}\\phi_{j'}$ and $[G, \\phi_j] = g_j^{j'}\\phi_{j'}$. By the Jacobi identity, $[[F,G],\\phi_j] = [F,[G,\\phi_j]] - [G,[F,\\phi_j]]$. The right side is $[F, g_j^{j'}\\phi_{j'}] - [G, f_j^{j'}\\phi_{j'}]$, which vanishes weakly. So $[[F,G],\\phi_j] \\approx 0$.`
      },
      {
        q: `Electromagnetism has $A_\\mu$ (4 components, so $N = 4$) and no second-class constraints ($B = 0$). You already know the photon carries 2 physical polarizations, so $N_{\\text{phys}} = 2$. Work the formula backward: how many independent first-class constraints $A$ must the theory have?`,
        a: `Use $2N_{\\text{phys}} = 2N - 2A - B$. Plug in the known values: $2(2) = 2(4) - 2A - 0$, so $4 = 8 - 2A$, giving $A = 2$. The theory must carry exactly 2 independent first-class constraints. They are the primary $p^0 \\approx 0$ and the secondary Gauss-law constraint $\\partial_i E^i \\approx 0$. Each first-class constraint removes one configuration component and its gauge partner, killing the timelike and longitudinal photon modes and leaving the 2 transverse polarizations.`
      },
      {
        q: `What is the Gribov obstruction and when does it arise?`,
        a: `The Gribov obstruction arises when no global gauge condition exists that intersects each gauge orbit exactly once, even though local gauge-fixing is possible. The condition $\\det[C_b, \\gamma_a] \\neq 0$ guarantees local gauge-fixing but not global uniqueness. This is a topological problem affecting non-Abelian gauge theories in particular.`
      },
      {
        q: `For $L = \\frac{1}{2}(q_1 - \\dot{q}_2)^2$, identify the primary constraint and explain why it arises.`,
        a: `Compute the momenta: $\\pi_1 = \\partial L / \\partial \\dot{q}_1 = 0$, so the primary constraint is $\\pi_1 \\approx 0$. It arises because $L$ has no $\\dot{q}_1^2$ term, so the Hessian has a zero row corresponding to $q_1$. The velocity $\\dot{q}_1$ does not appear in $L$, making its conjugate momentum identically zero by definition, before any equations of motion are used.`
      },
      {
        q: `The three Lagrangians $L = \\frac{1}{2}\\sum_{i=1}^{n-1}(q_i - \\dot{q}_{i+1})^2$, $L = 0$, and $L = -\\frac{1}{2}\\sum_i (q^i)^2$ all describe the same physical system. Why does this mean the primary/secondary distinction carries no fundamental physical significance?`,
        a: `All three systems have zero physical degrees of freedom: they share the same constraint surface and gauge-orbit structure in phase space. Yet the labels differ sharply: in $L = 0$ every constraint is primary from the start; in the $n$-generations Lagrangian the constraints emerge one generation at a time; in the third Lagrangian the primary constraints are joined by second-class secondary constraints. Because the same physical content wears different primary/secondary labels depending on which Lagrangian you start from, those labels are an artifact of the Lagrangian choice, not a property of the physics.`
      },
      {
        q: `In Example 1 (the Dirac-conjecture counterexample), classify the constraints $\\pi_\\lambda \\approx 0$, $\\pi_\\mu \\approx 0$, $q \\approx 0$, $p \\approx 0$, $\\pi_\\nu \\approx 0$ as first or second class. Justify the second-class pair.`,
        a: `The primary constraints $\\pi_\\lambda \\approx 0$ and $\\pi_\\mu \\approx 0$ are first class: their Poisson brackets with all other constraints vanish weakly. The secondary constraints $q \\approx 0$ and $p \\approx 0$ are second class because $[q, p] = 1 \\neq 0$, so their bracket matrix $C = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$ is invertible. The tertiary constraint $\\pi_\\nu \\approx 0$ is first class. The first-class $\\pi_\\nu \\approx 0$ breaks the Dirac conjecture because $\\nu$ is a spectator variable that does not generate physical gauge freedom.`
      },
      {
        q: `PREDICT: In the $n$-generations Lagrangian $L = \\sum_{i=1}^{n-1} \\frac{1}{2}(q_i - \\dot{q}_{i+1})^2$, each constraint is first class. What does the degree-of-freedom formula $2N_{\\text{phys}} = 2N - 2A - B$ give, and what is the physical interpretation?`,
        a: `There are $N = n$ configuration variables and $A = n$ independent first-class constraints ($\\pi_1 \\approx 0$ through $\\pi_n \\approx 0$), with $B = 0$ second-class constraints. So $2N_{\\text{phys}} = 2n - 2n - 0 = 0$. The system has no physical degrees of freedom: every configuration is related to every other by a gauge transformation. The entire dynamics is pure gauge, like the longitudinal sector of electromagnetism.`
      },
      {
        q: `In Example 4, the Hamiltonian is $H = 0$ with constraints $\\phi_1 = p_1 \\approx 0$ and $\\phi_2 = p_3 + q^1 q^2 \\approx 0$. Why is there no global decomposition of these constraints into first-class and second-class subsets?`,
        a: `The bracket matrix entry $C_{12} = [\\phi_1, \\phi_2] = [p_1,\\, p_3 + q^1 q^2] = -q^2$. On the part of the constraint surface where $q^2 \\neq 0$, this is nonzero and the constraints are second class. Where $q^2 = 0$, the bracket vanishes and the constraints look first class. The rank of $C_{jj'}$ is not constant, so there is no single global labeling. The regularity condition requires constant rank on the entire constraint surface; this example violates it.`
      },
      {
        q: `ELABORATE: The gauge generator for the $n$-generations Lagrangian is $G = \\sum_{i=1}^{n} \\frac{d^{n-i}\\epsilon}{dt^{n-i}}\\,\\pi_i$. What does the presence of time derivatives of $\\epsilon$ in $G$ tell you about the nature of the gauge symmetry?`,
        a: `The gauge parameter is not a simple function: the transformation at step $i$ depends on the $(n-i)$-th time derivative of $\\epsilon$. This means the gauge symmetry involves an arbitrariness in the initial data that grows with the generation count: choosing $\\epsilon(t)$ freely changes how each $q_i$ evolves. This is characteristic of systems where the constraint cascade spans multiple generations. Each additional generation adds one more derivative of the gauge parameter to the generator, mirroring how the original Lagrangian couples $q_i$ to $\\dot{q}_{i+1}$ in a chain.`
      },
      {
        q: `In Example 2, the constraints $p_1 \\approx 0$, $p_2 \\approx 0$, and $q_2 \\approx 0$ arise for $H = (q_2)^2 e^{q_1}$. The secondary constraint $q_2 \\approx 0$ is generated simultaneously by both primaries. What does this show about the link between a constraint's class and the class of the constraints it generates?`,
        a: `There is no reliable link. Here the first-class constraint $p_1 \\approx 0$ generates the secondary $q_2 \\approx 0$ via $\\dot{p}_1 = -(q_2)^2 e^{q_1} \\approx 0$, and the second-class constraint $p_2 \\approx 0$ also generates $q_2 \\approx 0$ via $\\dot{p}_2 = -2 q_2 e^{q_1} \\approx 0$. The same second-class constraint is the offspring of both a first-class and a second-class parent. The class of a generated constraint depends on its own bracket with the full constraint set, not on the class of the constraint that produced it.`
      },
      {
        q: `What is the regularity condition (constant-rank assumption) and why is it a prerequisite for the global Dirac-Bergmann classification?`,
        a: `The regularity condition requires that the rank of the constraint bracket matrix $C_{jj'} = [\\phi_j, \\phi_{j'}]$ is constant at every point on the constraint surface. Without it, some points behave as though constraints are first class while others behave as though they are second class, as in Example 4. The Dirac bracket requires inverting $C_{\\alpha\\beta}$ restricted to the second-class subset, which is only possible if that subset has constant, nonzero rank everywhere. Constant rank guarantees the separation into first- and second-class subsets is globally well-defined.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Constrained Hamiltonian Systems: Dirac-Bergmann Algorithm',
      sections: [
        <>
          <div className="lrn-header">
            <span className="lrn-header-text">Core Definitions</span>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Singular Lagrangian</span>
            <div className="lrn-definition-desc">
              <p>
                {`$L(q,\\dot{q})$`} with{' '}
                {`$\\det\\bigl(\\frac{\\partial^2 L}{\\partial \\dot{q}^n \\partial \\dot{q}^{n'}}\\bigr) = 0$`}
                . Momenta are not all independent.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Primary Constraint</span>
            <div className="lrn-definition-desc">
              <p>
                {`$\\phi_m(q,p) = 0$`} following from {`$p_n = \\partial L/\\partial \\dot{q}^n$`}
                alone, without using equations of motion.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Secondary Constraint</span>
            <div className="lrn-definition-desc">
              <p>
                A new constraint {`$\\phi_k \\approx 0$`} generated by requiring an existing
                constraint to be preserved under the equations of motion.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Weak Equality ({`$\\approx$`})</span>
            <div className="lrn-definition-desc">
              <p>
                {`$F \\approx G$`} means {`$F - G = c^j(q,p)\\,\\phi_j$`}: zero on the constraint
                surface but not identically zero. Never substitute before computing Poisson
                brackets.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">First-Class Function</span>
            <div className="lrn-definition-desc">
              <p>
                {`$F$`} with {`$[F, \\phi_j] \\approx 0$`} for all constraints {`$\\phi_j$`}.
                First-class constraints generate gauge transformations.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Second-Class Constraint</span>
            <div className="lrn-definition-desc">
              <p>
                A constraint {`$\\chi_\\alpha$`} with at least one nonzero bracket{' '}
                {`$[\\chi_\\alpha, \\phi_j] \\not\\approx 0$`}. The matrix{' '}
                {`$C_{\\alpha\\beta} = [\\chi_\\alpha, \\chi_\\beta]$`} is invertible on the
                constraint surface.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Dirac Bracket</span>
            <div className="lrn-definition-desc">
              <p>
                The bracket that replaces the Poisson bracket when second-class constraints are
                present, so they can be set strongly to zero. Formula in Key Formulas below.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Gauge-Invariant Observable</span>
            <div className="lrn-definition-desc">
              <p>
                A function on the constraint surface satisfying {`$[F, \\gamma_a]^* \\approx 0$`}{' '}
                for all first-class constraints {`$\\gamma_a$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <span className="lrn-header-text">Key Formulas</span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Momenta</span>
            <span className="ref-formula-eq">{`$p_n = \\frac{\\partial L}{\\partial \\dot{q}^n}$`}</span>
            <span className="ref-formula-desc">
              Definition; singular Lagrangian means these are not all independent. When to use: the
              first step of the algorithm, to find which velocities cannot be inverted.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Canonical Hamiltonian</span>
            <span className="ref-formula-eq">{`$H = \\dot{q}^n p_n - L$`}</span>
            <span className="ref-formula-desc">
              Defined on constraint surface; ambiguous off it by {`$c^m \\phi_m$`}. When to use:
              after reading off the primary constraints, to build the dynamics in phase space.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Equations of Motion</span>
            <span className="ref-formula-eq">{`$\\dot{F} = [F, H] + u^m [F, \\phi_m]$`}</span>
            <span className="ref-formula-desc">
              Holds weakly; multipliers {`$u^m$`} are arbitrary. When to use: to evolve any
              observable {`$F$`} once the primary constraints and total Hamiltonian are in hand.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Consistency Condition</span>
            <span className="ref-formula-eq">{`$[\\phi_m, H] + u^{m'}[\\phi_m, \\phi_{m'}] \\approx 0$`}</span>
            <span className="ref-formula-desc">
              Preserves primary constraints; source of secondary constraints. When to use: at each
              step of the algorithm, to test whether a constraint is preserved in time.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Total Hamiltonian</span>
            <span className="ref-formula-eq">{`$H_T = H' + v^a \\phi_a$`}</span>
            <span className="ref-formula-desc">
              {`$H'$`} is first class; {`$\\phi_a$`} are first-class primary constraints; {`$v^a$`}{' '}
              arbitrary. When to use: to reproduce the original Lagrangian equations of motion in
              Hamiltonian form.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Extended Hamiltonian</span>
            <span className="ref-formula-eq">{`$H_E = H' + u^a \\gamma_a$`}</span>
            <span className="ref-formula-desc">
              Sums over all independent first-class constraints; generates full gauge freedom. When
              to use: for quantization, when you need every gauge transformation made manifest.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Gauge Transformation</span>
            <span className="ref-formula-eq">{`$\\delta F = \\delta v^a [F, \\phi_a]$`}</span>
            <span className="ref-formula-desc">
              First-class primary constraints generate gauge transformations. When to use: to move
              between two descriptions of the same physical state.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Dirac Bracket</span>
            <span className="ref-formula-eq">{`$[F,G]^* = [F,G] - [F,\\chi_\\alpha]C^{\\alpha\\beta}[\\chi_\\beta,G]$`}</span>
            <span className="ref-formula-desc">
              {`$C^{\\alpha\\beta}$`} is the inverse of{' '}
              {`$C_{\\alpha\\beta} = [\\chi_\\alpha, \\chi_\\beta]$`}. When to use: whenever
              second-class constraints are present, replacing the Poisson bracket in every equation
              of motion.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">DoF Count</span>
            <span className="ref-formula-eq">{`$2N_{\\text{phys}} = 2N - 2A - B$`}</span>
            <span className="ref-formula-desc">
              {`$A$`} = independent first-class constraints; {`$B$`} = second-class constraints
              (even). When to use: at the end of the algorithm, to read off how many true physical
              degrees of freedom survive.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Gauge-Fix Condition</span>
            <span className="ref-formula-eq">{`$\\det[C_b, \\gamma_a] \\neq 0$`}</span>
            <span className="ref-formula-desc">
              Guarantees gauge conditions {`$C_b \\approx 0$`} fix the gauge completely (locally).
              When to use: to check that a chosen set of gauge conditions removes all remaining
              gauge freedom.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">n-Generations Constraint Cascade</span>
            <span className="ref-formula-eq">{`$\\pi_1 \\approx 0 \\;\\xrightarrow{\\text{consistency}}\\; \\pi_2 \\approx 0 \\;\\xrightarrow{}\\; \\cdots \\;\\xrightarrow{}\\; \\pi_n \\approx 0$`}</span>
            <span className="ref-formula-desc">
              For {`$L = \\sum_{i=1}^{n-1} \\frac{1}{2}(q_i - \\dot{q}_{i+1})^2$`}: one primary
              constraint {`$\\pi_1 \\approx 0$`} spawns {`$n-1$`} further constraints through
              successive consistency requirements. All {`$n$`} constraints are first class; the
              system has zero physical degrees of freedom. Gauge generator:{' '}
              {`$G = \\sum_i (d^{n-i}\\epsilon/dt^{n-i})\\,\\pi_i$`}. When to use: to illustrate
              that constraint generations are not bounded by any fixed number and that the
              primary/secondary labeling is Lagrangian-dependent, not physical.
            </span>
          </div>
          <div className="ref-formula">
            <span className="ref-formula-name">Regularity (Constant-Rank) Condition</span>
            <span className="ref-formula-eq">{`$\\operatorname{rank}\\bigl([\\phi_j, \\phi_{j'}]\\bigr) = \\text{const on } \\Sigma$`}</span>
            <span className="ref-formula-desc">
              The rank of the constraint bracket matrix must be the same at every point of the
              constraint surface {`$\\Sigma$`}. Under this condition the constraints split globally
              into first-class and second-class subsets, the Dirac bracket is globally well-defined,
              and the degree-of-freedom count formula applies without modification. When to use:
              whenever you need to invoke the global first/second-class decomposition or construct
              the Dirac bracket; check constant rank first. Systems that fail regularity (like
              Example 4) require separate treatment at each stratum of {`$\\Sigma$`}.
            </span>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <span className="lrn-header-text">Comparison Tables</span>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">First-Class Constraint {`$\\gamma_a$`}</span>
              <p>
                {`$[\\gamma_a, \\phi_j] \\approx 0$`} for all {`$j$`}. Generates a gauge
                transformation. Removes 2 dimensions from physical phase space (constraint + gauge
                orbit). Maps allowed states to allowed states.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Second-Class Constraint {`$\\chi_\\alpha$`}</span>
              <p>
                {`$C_{\\alpha\\beta} = [\\chi_\\alpha, \\chi_\\beta]$`} invertible on {`$\\Sigma$`}.
                No gauge freedom. Removes 1 dimension from physical phase space. Requires the Dirac
                bracket. Number must be even.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Poisson Bracket {`$[F,G]$`}</span>
              <p>
                Standard bracket on all of phase space. Used when no second-class constraints are
                present, or before classifying constraints.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Dirac Bracket {`$[F,G]^*$`}</span>
              <p>
                Modified bracket that automatically annihilates second-class constraints. Replaces
                the Poisson bracket after second-class constraints are identified. Equivalent to
                Poisson bracket on first-class functions.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-header">
            <span className="lrn-header-text">Algorithm Quick Reference</span>
          </div>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-num">1</span>
              <span>
                Compute {`$p_n = \\partial L/\\partial \\dot{q}^n$`}; identify which cannot be
                inverted.
              </span>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-num">2</span>
              <span>Write primary constraints {`$\\phi_m(q,p) \\approx 0$`}.</span>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-num">3</span>
              <span>Construct {`$H = \\dot{q}^n p_n - L$`} on constraint surface.</span>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-num">4</span>
              <span>
                Require {`$\\dot{\\phi}_m \\approx 0$`}; each gives a restriction on {`$u^m$`} or a
                secondary constraint.
              </span>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-num">5</span>
              <span>
                Repeat until no new constraints. Label all constraints {`$\\phi_j \\approx 0$`}.
              </span>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-num">6</span>
              <span>
                Compute {`$C_{jj'} = [\\phi_j, \\phi_{j'}]$`}; classify first-class ({`$\\gamma_a$`}
                ) vs second-class ({`$\\chi_\\alpha$`}).
              </span>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-num">7</span>
              <span>For second class: build Dirac bracket using {`$C^{\\alpha\\beta}$`}.</span>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-num">8</span>
              <span>Count: {`$N_{\\text{phys}} = N - A - \\tfrac{1}{2}B$`}.</span>
            </div>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }

  return <LearningTemplate config={config} />
}
