import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { AveragingViz as AveragingVizAether } from '../../../../../components/viz'
import { SmallDenominatorStem } from '../../../../../components/viz'

const config = {
  cssPrefix: 'acpt',
  documentTitle: 'Averaging and Canonical Perturbation Theory - AETHER',
  learning: {
    groupTitle: 'Perturbation Theory and Advanced Topics',
    category: 'Perturbation Theory and Advanced Topics',
    title: 'Averaging and Canonical Perturbation Theory',
    subtitle:
      'Integrable systems, action-angle variables, conditionally periodic motion, averaging principle, adiabatic invariants.',
    sections: [
      <>
        <h2>Integrable Systems and Liouville's Theorem</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You have a system with 2 degrees of freedom. It has energy H and one other conserved
            quantity F. Do you think the motion stays on a 2D surface inside 4D phase space, or does
            it wander through all of phase space?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Each conserved quantity removes one dimension. Two independent conserved quantities in
              a 4D phase space confine the motion to a 2D surface. The motion stays on that surface.
            </p>
          </details>
        </div>

        <p>
          You already know the pieces from the earlier pages on Hamiltonian systems and
          conditionally periodic motion: a Hamiltonian on a {`$2n$`}-dimensional phase space, a{' '}
          <strong>first integral</strong> {`$F$`} as a conserved quantity ({`$\\{H, F\\} = 0$`} with
          the Poisson bracket{' '}
          {`$\\{H, F\\} = \\sum_i \\frac{\\partial H}{\\partial p_i}\\frac{\\partial F}{\\partial q_i} - \\frac{\\partial H}{\\partial q_i}\\frac{\\partial F}{\\partial p_i}$`}
          ), and two integrals being <strong>in involution</strong> when {`$\\{F_i, F_j\\} = 0$`}.
          Involution is a compatibility condition: knowing one integral does not force the other to
          change. This page picks up at the consequence: what those {`$n$`} integrals do to the
          shape of the motion.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Each integral {`$F_i$`} generates a flow on phase space - a family of curves along which{' '}
            {`$F_i$`} drives the system. For {`$n$`} such flows to combine into a single,
            well-defined action of {`$\\mathbb{R}^n$`} on phase space, they must commute: flowing
            along {`$F_i$`} and then {`$F_j$`} must give the same result as flowing in the reverse
            order. The Lie bracket of two Hamiltonian vector fields equals the Hamiltonian vector
            field of their Poisson bracket. So involution, {`$\\{F_i, F_j\\} = 0$`}, is exactly the
            condition that the flows commute. That commutativity is what produces the torus
            structure.
          </p>
        </div>

        <p>
          <strong>Liouville's theorem on integrable systems.</strong> Suppose a Hamiltonian system
          on a {`$2n$`}-dimensional phase space has {`$n$`} independent first integrals{' '}
          {`$F_1, \\ldots, F_n$`} in involution. Let {`$M_f$`} be the level set:{' '}
          {`$M_f = \\{x : F_i(x) = f_i, \\; i = 1, \\ldots, n\\}$`}. Then:
        </p>
        <ol className="lrn-list">
          <li>
            Each compact, connected component of {`$M_f$`} is diffeomorphic to (has the same smooth
            shape as) an {`$n$`}-dimensional torus {`$T^n$`}.
          </li>
          <li>
            The motion on that torus is conditionally periodic: {`$\\dot{\\varphi}_i = \\omega_i$`},
            where the frequencies {`$\\omega_i = \\omega_i(f)$`} depend only on the values of the
            integrals.
          </li>
          <li>The system can be solved by quadratures (explicit integration).</li>
        </ol>

        <p>
          <strong>Concrete example: the heavy symmetric Lagrange top.</strong> The top spinning
          around a fixed point has three first integrals in involution: the energy {`$H$`}, the
          vertical angular momentum {`$M_z$`}, and the body-frame angular momentum {`$M_3$`}. These
          three integrals confine the motion to a 3-torus {`$T^3$`} in the 6-dimensional phase
          space. The motion is conditionally periodic on this 3-torus.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Integrable</span>
            <p>
              {`$n$`} first integrals in involution. Motion on torus {`$T^n$`}. Conditionally
              periodic. Solvable by quadratures.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Non-Integrable</span>
            <p>
              Fewer than {`$n$`} independent integrals. Trajectory can explore a higher-dimensional
              region. May be chaotic or merely complicated.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Beginning of the Proof of Liouville's Theorem</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You have {`$n$`} first integrals on a {`$2n$`}-dimensional phase space. How many
            independent tangent directions do you expect the level set {`$M_f$`} to have?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Each first integral removes one dimension. Starting from {`$2n$`} dimensions and
              removing {`$n$`} constraints leaves {`$n$`} independent directions. So {`$M_f$`} has
              dimension {`$n$`}.
            </p>
          </details>
        </div>

        <p>
          <strong>Lemma 1: the tangent vectors commute.</strong> For each first integral {`$F_i$`},
          define the <strong>Hamiltonian vector field</strong> {`$X_{F_i}$`} (the flow direction the
          integral {`$F_i$`} generates), the unique vector field satisfying{' '}
          {`$\\omega^2(X_{F_i}, \\cdot) = dF_i(\\cdot)$`}. Here {`$\\omega^2$`} is the symplectic
          2-form (not a frequency squared) and {`$dF_i$`} is the gradient 1-form of {`$F_i$`}; the
          equation says the flow of {`$F_i$`} is the symplectic rotation of its gradient. These{' '}
          {`$n$`} vector fields on {`$M_f$`} are linearly independent, and they commute:{' '}
          {`$[X_{F_i}, X_{F_j}] = X_{\\{F_i, F_j\\}} = X_0 = 0$`}.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The map {`$F \\mapsto X_F$`} from functions to Hamiltonian vector fields is a standard
            Lie algebra homomorphism: it always sends the Poisson bracket to the Lie bracket of
            vector fields, {`$[X_{F_i}, X_{F_j}] = X_{\\{F_i, F_j\\}}$`}. This is a structural fact
            about the symplectic form, not a special assumption. Since {`$\\{F_i, F_j\\} = 0$`}{' '}
            (involution), {`$X_{\\{F_i, F_j\\}} = 0$`}, so the vector fields commute.
          </p>
        </div>

        <p>
          <strong>
            Lemma 2: compact connected manifold with commuting vector fields is a torus.
          </strong>{' '}
          Take a compact connected {`$n$`}-manifold {`$M$`} with {`$n$`} linearly independent,
          commuting vector fields. Then {`$M$`} is diffeomorphic to the {`$n$`}-torus {`$T^n$`}.
        </p>

        <p>
          <strong>Why this is true (sketch).</strong> The {`$n$`} commuting vector fields define a
          group action of {`$\\mathbb{R}^n$`} on {`$M$`}. The map {`$g: \\mathbb{R}^n \\to M$`}{' '}
          given by {`$g(t) = g^t x_0$`} is a local diffeomorphism (a smooth, smoothly invertible map
          near each point). The <strong>stationary group</strong>{' '}
          {`$\\Gamma = \\{t : g^t x_0 = x_0\\}$`} is a discrete subgroup of {`$\\mathbb{R}^n$`}. On
          a compact manifold, {`$\\Gamma$`} must be a <strong>lattice</strong> (it spans all of{' '}
          {`$\\mathbb{R}^n$`}). Then {`$M \\cong \\mathbb{R}^n / \\Gamma \\cong T^n$`}.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why must {`$\\Gamma$`} be a lattice when {`$M$`} is compact?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Because the image of {`$g$`} is all of {`$M$`} (by transitivity and compactness), and{' '}
              {`$M$`} is compact. So {`$\\frac{\\mathbb{R}^n}{\\Gamma}$`} is compact. A subgroup of{' '}
              {`$\\mathbb{R}^n$`} gives a compact quotient only when it is a full-rank lattice.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Discrete Subgroups of {`$\\mathbb{R}^n$`}</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            What do you think the possible shapes of discrete subgroups of {`$\\mathbb{R}^2$`} are?
            Sketch a few before reading on.
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The possibilities are: just the origin (rank 0), a line of equally spaced points (rank
              1), or a 2D lattice of points like a grid (rank 2).
            </p>
          </details>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Discrete Subgroup</span>
          <div className="lrn-definition-desc">
            <p>
              A subgroup {`$\\Gamma \\subset \\mathbb{R}^n$`} is <strong>discrete</strong> if every
              point in {`$\\Gamma$`} is isolated (no cluster points).
            </p>
          </div>
        </div>

        <p>
          <strong>Lemma 3 (structure of discrete subgroups).</strong> Every discrete subgroup{' '}
          {`$\\Gamma$`} of {`$\\mathbb{R}^n$`} has a basis. That is, there exist {`$k$`} linearly
          independent vectors {`$e_1, \\ldots, e_k$`} (with {`$0 \\leq k \\leq n$`}) such that{' '}
          {`$\\Gamma = \\{m_1 e_1 + \\cdots + m_k e_k : m_i \\in \\mathbb{Z}\\}$`}.
        </p>

        <p>
          <strong>How the basis is built.</strong> Take the shortest nonzero vector for {`$e_1$`},
          then the shortest vector off that line for {`$e_2$`}, and so on. After at most {`$n$`}{' '}
          such steps, {`$\\Gamma = \\mathbb{Z} e_1 + \\cdots + \\mathbb{Z} e_k$`}.
        </p>

        <p>
          <strong>What the cases mean.</strong> The quotient {`$\\mathbb{R}^n/\\Gamma$`} has a
          direct-product structure: {`$\\mathbb{R}^n/\\Gamma \\cong T^k \\times \\mathbb{R}^{n-k}$`}
          . When {`$k = n$`}, the quotient is the full {`$n$`}-torus {`$T^n$`}; the level set{' '}
          {`$M_f$`} is compact.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            If {`$\\Gamma$`} has rank {`$k < n$`}, the quotient {`$\\mathbb{R}^n/\\Gamma$`} contains{' '}
            {`$\\mathbb{R}^{n-k}$`} factors, which are not compact. Only when {`$\\Gamma$`} is a
            full-rank lattice (rank {`$n$`}) does the quotient have no free directions, giving the
            compact torus {`$T^n$`}.
          </p>
        </div>
      </>,

      <>
        <h2>Action-Angle Variables</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You know that the motion on each torus {`$T^n$`} is conditionally periodic. Can you
            guess what the "right" coordinates on that torus might look like, and what they simplify
            in the equations of motion?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The right coordinates would have one variable that labels which torus you are on (the
              action), and one that marks where on that torus you are (the angle). In these
              coordinates the Hamiltonian depends only on the action, so the angle evolves at a
              constant rate.
            </p>
          </details>
        </div>

        <p>
          <strong>What action-angle variables are.</strong> Action-angle variables{' '}
          {`$(I, \\varphi)$`} are a special set of symplectic coordinates adapted to an integrable
          system. In these coordinates:
        </p>
        <ul className="lrn-list">
          <li>
            The <strong>actions</strong> {`$I = (I_1, \\ldots, I_n)$`} are first integrals:{' '}
            {`$\\frac{dI}{dt} = 0$`}.
          </li>
          <li>
            The <strong>angles</strong> {`$\\varphi = (\\varphi_1, \\ldots, \\varphi_n)$`} evolve
            uniformly: {`$\\frac{d\\varphi}{dt} = \\omega(I)$`}.
          </li>
          <li>
            The symplectic form takes the canonical form:{' '}
            {`$\\omega^2 = \\sum_i dI_i \\wedge d\\varphi_i$`}. (Here {`$\\omega^2$`} is our
            notation for the symplectic 2-form, not the square of a frequency. It is the geometric
            structure that pairs positions with momenta.)
          </li>
          <li>
            The equations of motion reduce to: {`$\\dot{I} = 0$`},{' '}
            {`$\\dot{\\varphi} = \\omega(I)$`}.
          </li>
        </ul>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The value of {`$I_i$`} labels which torus you are on. The Hamiltonian {`$H$`} is a first
            integral, so it is constant on each torus. Within a torus, {`$I$`} is constant and{' '}
            {`$\\varphi$`} parameterizes position on the torus. So {`$H$`} cannot depend on{' '}
            {`$\\varphi$`} - it is already fixed by {`$I$`} alone. Therefore{' '}
            {`$\\frac{\\partial H}{\\partial \\varphi} = 0$`}, and by Hamilton's equations,{' '}
            {`$\\dot{I} = -\\frac{\\partial H}{\\partial \\varphi} = 0$`}.
          </p>
        </div>
      </>,

      <>
        <h2>Construction of Action-Angle Variables: One Degree of Freedom</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            For a 1D Hamiltonian {`$H = \\frac{1}{2}p^2 + V(q)$`}, the trajectory in the{' '}
            {`$(p, q)$`} plane is a closed oval. What would a natural "size" variable for this oval
            be?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The area enclosed by the oval is the most natural size variable. It is symplectically
              invariant and increases steadily with energy.
            </p>
          </details>
        </div>

        <p>
          <strong>Setup.</strong> In one degree of freedom the phase space is 2D. For energy{' '}
          {`$H = h$`}, the trajectory {`$M_h = \\{(p, q) : H(p, q) = h\\}$`} is a closed curve in
          the {`$(p, q)$`} plane (assuming it is compact).
        </p>

        <p>
          <strong>The action variable.</strong> Define:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$I(h) = \\frac{1}{2\\pi} \\oint_{M_h} p \\, dq = \\frac{1}{2\\pi} \\Pi(h)$$`}</div>
        <p>
          where {`$\\Pi(h)$`} is the area enclosed by {`$M_h$`}.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            We want the angle {`$\\varphi$`} to wind exactly once ({`$0$`} to {`$2\\pi$`}) as the
            system completes one orbit. The symplectic form requires{' '}
            {`$\\oint p\\,dq = \\oint I\\,d\\varphi$`}. If {`$\\varphi$`} runs from {`$0$`} to{' '}
            {`$2\\pi$`}, this integral equals {`$2\\pi I$`}. Setting that equal to the enclosed area{' '}
            {`$\\Pi$`} gives {`$I = \\frac{\\Pi}{2\\pi}$`}. The {`$\\frac{1}{2\\pi}$`} is the
            normalization that makes the convention work.
          </p>
        </div>

        <p>
          <strong>The angle variable via generating function.</strong> Define the generating
          function: {`$S(I, q) = \\int_{q_0}^{q} p \\, dq \\big|_{H = h(I)}$`}. Then:
        </p>
        <ul className="lrn-list">
          <li>{`$p = \\frac{\\partial S}{\\partial q}$`} (reconstructs momentum).</li>
          <li>{`$\\varphi = \\frac{\\partial S}{\\partial I}$`} (defines angle).</li>
          <li>The Hamiltonian condition: {`$H(\\frac{\\partial S}{\\partial q}, q) = h(I)$`}.</li>
        </ul>

        <p>
          <strong>The canonical transformation condition.</strong> We need{' '}
          {`$\\oint d\\varphi = 2\\pi$`} around the closed orbit. Check:{' '}
          {`$\\oint d\\varphi = \\oint \\frac{\\partial^2 S}{\\partial I \\, \\partial q} dq = \\frac{d}{dI} \\oint p \\, dq = \\frac{d}{dI} (2\\pi I) = 2\\pi$`}
          . This confirms the construction works.
        </p>

        <p>
          <strong>Worked example 1: the harmonic oscillator.</strong> Take{' '}
          {`$H = \\frac{1}{2}a^2 p^2 + \\frac{1}{2}b^2 q^2$`}. The level set {`$H = h$`} is an
          ellipse in the {`$(p, q)$`} plane with semi-axes {`$\\frac{\\sqrt{2h}}{a}$`} and{' '}
          {`$\\frac{\\sqrt{2h}}{b}$`}. The area is{' '}
          {`$\\pi \\cdot \\frac{\\sqrt{2h}}{a} \\cdot \\frac{\\sqrt{2h}}{b} = \\frac{2\\pi h}{ab}$`}
          . So:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$I = \\frac{1}{2\\pi} \\cdot \\frac{2\\pi h}{ab} = \\frac{h}{ab} = \\frac{h}{\\omega}$$`}</div>
        <p>
          where {`$\\omega = ab$`} is the frequency (the equations of motion give{' '}
          {`$\\ddot{q} = -a^2 b^2 q$`}, so {`$\\omega^2 = a^2 b^2$`}). The action equals energy
          divided by frequency.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does {`$I = \\frac{h}{\\omega}$`} make physical sense?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              {`$I$`} has units of action (energy times time). Since{' '}
              {`$\\frac{h}{\\omega} = h \\cdot \\frac{T}{2\\pi}$`} where {`$T$`} is the period,{' '}
              {`$I$`} is proportional to the energy times the period. This is the natural "size" of
              one cycle of the oscillator.
            </p>
          </details>
        </div>

        <p>
          <strong>Worked example 2: the mathematical pendulum.</strong> Take{' '}
          {`$H = \\frac{1}{2}p^2 - \\cos q$`}. For {`$h < 1$`} (motion below the separatrix), the
          level set {`$M_h$`} is a compact closed curve. The action{' '}
          {`$I(h) = \\frac{1}{2\\pi} \\oint p \\, dq$`} must be computed numerically for general{' '}
          {`$h$`}. The key point is that {`$I$`} is well-defined and increases steadily from {`$0$`}{' '}
          (at the stable equilibrium {`$h = -1$`}) to a maximum at the separatrix {`$h = 1$`}.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does the action approach a finite value at the separatrix from below?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The separatrix is a homoclinic orbit (a path that leaves the unstable equilibrium and
              returns to the same point) with finite area. The period diverges, since it takes
              infinitely long to reach the unstable equilibrium, but the area stays finite.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Construction of Action-Angle Variables in {`$\\mathbb{R}^{2n}$`}</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            In {`$n$`} degrees of freedom the torus {`$T^n$`} has {`$n$`} independent loops. How
            many separate integrals {`$I_i$`} do you expect to need?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>One action variable per independent loop: you need {`$n$`} action variables.</p>
          </details>
        </div>

        <p>
          <strong>The multi-dimensional case.</strong> For an integrable system with {`$n$`} degrees
          of freedom, the invariant torus {`$T^n$`} has {`$n$`} independent 1-cycles{' '}
          {`$\\gamma_1, \\ldots, \\gamma_n$`} (independent loops). Define {`$n$`} action variables:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$I_i(f) = \\frac{1}{2\\pi} \\oint_{\\gamma_i} p \\, dq, \\quad i = 1, \\ldots, n$$`}</div>
        <p>
          Each {`$I_i$`} measures the "area swept" around the {`$i$`}-th loop of the torus.
        </p>

        <p>
          <strong>The multi-valuedness condition.</strong> The generating function {`$S(I, q)$`} is
          multi-valued, but its variations around the cycles are controlled:
        </p>
        <div className="lrn-eq">{`$$\\Delta_i \\varphi_j = \\frac{\\partial}{\\partial I_j} (2\\pi I_i) = 2\\pi \\delta_{ij}$$`}</div>
        <p>
          This says: going around loop {`$\\gamma_i$`} increases {`$\\varphi_i$`} by {`$2\\pi$`} and
          leaves all other angles {`$\\varphi_j$`} ({`$j \\neq i$`}) unchanged. This is exactly what
          angle coordinates on a torus should do.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does {`$dp \\wedge dq = 0$`} on {`$M_f$`} imply {`$p \\, dq$`} is closed?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Because {`$d(p\\, dq) = dp \\wedge dq = \\omega^2$`}. If {`$\\omega^2$`} vanishes when
              restricted to {`$M_f$`}, then {`$d(p \\, dq)|_{M_f} = 0$`}, so {`$p \\, dq$`} is
              closed on {`$M_f$`}.
            </p>
          </details>
        </div>

        <p>
          <strong>Remarks on uniqueness.</strong> Action-angle variables are not uniquely defined.
          You could take {`$I' = I + \\text{const}$`} or {`$\\varphi' = \\varphi + c(I)$`} and still
          have valid action-angle coordinates. At critical values {`$F_i = f_i$`} (where the
          differentials {`$dF_i$`} become dependent), the level set {`$M_f$`} ceases to be a smooth
          manifold. These are separatrices, dividing the phase space into regions with distinct
          motion types.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            At a separatrix, the energy level passes through an unstable equilibrium. The topology
            of {`$M_h$`} changes: below the separatrix the level set is a closed loop (libration),
            above it the level set is an open curve (rotation). The action-angle variables on one
            side do not extend to the other because the topology is different.
          </p>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">One Degree of Freedom</span>
            <p>
              One action {`$I = \\frac{1}{2\\pi}\\oint p\\,dq$`}. One angle{' '}
              {`$\\varphi \\in [0, 2\\pi)$`}. One 1-cycle (the orbit itself).
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">n Degrees of Freedom</span>
            <p>
              n actions {`$I_i = \\frac{1}{2\\pi}\\oint_{\\gamma_i} p\\,dq$`}. n angles. n
              independent 1-cycles on the torus {`$T^n$`}.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Conditionally-Periodic Motion</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Imagine a ball rolling on a 2D torus with constant velocity in both directions. If the
            two velocity components have ratio {`$\\pi$`} (irrational), does the ball's path ever
            close up?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              No. An irrational ratio means the path never returns to its starting point with the
              same direction. The path fills the torus densely.
            </p>
          </details>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Conditionally Periodic Motion</span>
          <div className="lrn-definition-desc">
            <p>
              Motion is <strong>conditionally periodic</strong> if the angle coordinates evolve
              uniformly: {`$\\dot{\\varphi} = \\omega$`}, where{' '}
              {`$\\omega = (\\omega_1, \\ldots, \\omega_n)$`} is a constant vector. The solution is:{' '}
              {`$\\varphi(t) = \\varphi(0) + \\omega t$`}.
            </p>
          </div>
        </div>

        <p>
          <strong>Independent frequencies.</strong> The frequencies{' '}
          {`$\\omega_1, \\ldots, \\omega_n$`} are <strong>independent over the rationals</strong> if
          no integer combination equals zero: {`$k_1 \\omega_1 + \\cdots + k_n \\omega_n = 0$`} with
          integer {`$k_i$`} implies every {`$k_i = 0$`}. For example, {`$\\omega_1 = 1$`} and{' '}
          {`$\\omega_2 = \\pi$`} are independent (no integers satisfy {`$k_1 + k_2\\pi = 0$`}), but{' '}
          {`$\\omega_1 = 2$`} and {`$\\omega_2 = 4$`} are not ({`$2 \\cdot 2 - 1 \\cdot 4 = 0$`}).
        </p>

        <p>
          <strong>What independent frequencies give you.</strong> When frequencies are independent,
          every trajectory on {`$T^n$`} is dense and uniformly distributed. This is{' '}
          <strong>Weyl's theorem</strong>. No part of the torus is preferred.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            A trajectory is the image of {`$t \\mapsto \\varphi(0) + \\omega t \\pmod{2\\pi}$`}. If
            this set is not dense, it lies in a proper closed subgroup of {`$T^n$`}. Every proper
            closed subgroup of {`$T^n$`} satisfies at least one relation {`$k \\cdot \\omega = 0$`}{' '}
            for nonzero integer {`$k$`}. So if no such relation holds, the trajectory must be dense.
          </p>
        </div>

        <p>
          <strong>Example: {`$n=2$`} motion on a 2-torus.</strong> Consider{' '}
          {`$\\dot{\\varphi}_1 = \\omega_1$`}, {`$\\dot{\\varphi}_2 = \\omega_2$`}. If{' '}
          {`$\\frac{\\omega_1}{\\omega_2} = \\frac{p}{q}$`} (rational), the trajectory closes after{' '}
          {`$p$`} revolutions in the {`$\\varphi_1$`} direction and {`$q$`} in {`$\\varphi_2$`}. If{' '}
          {`$\\frac{\\omega_1}{\\omega_2}$`} is irrational, the trajectory never closes and fills
          the torus densely.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Rational Ratio</span>
            <p>
              Trajectory closes after {`$p$`} turns in {`$\\varphi_1$`} and {`$q$`} turns in{' '}
              {`$\\varphi_2$`}. Only a closed curve is visited.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Irrational Ratio</span>
            <p>Trajectory never closes. Dense on torus. Time average equals space average.</p>
          </div>
        </div>
      </>,

      <>
        <h2>Space Average and Time Average</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            For a trajectory that fills the torus densely, would you expect the long-run time
            average of a function {`$f(\\varphi)$`} to equal the spatial average over the whole
            torus? Why or why not?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. Because the trajectory visits every region of the torus with equal frequency
              (equidistributed). So the time-average weight on any region matches the space-average
              weight.
            </p>
          </details>
        </div>

        <p>
          <strong>First, the tool: the Fourier series on a torus.</strong> Any smooth function on
          the torus splits into a sum of pure waves, one for each integer vector{' '}
          {`$k = (k_1, \\ldots, k_n)$`}:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$f(\\varphi) = \\sum_{k \\in \\mathbb{Z}^n} \\hat{f}_k \\, e^{i k \\cdot \\varphi}, \\quad k \\cdot \\varphi = k_1 \\varphi_1 + \\cdots + k_n \\varphi_n$$`}</div>
        <p>
          The coefficient {`$\\hat{f}_k$`} measures how much of the wave{' '}
          {`$e^{i k \\cdot \\varphi}$`} is in {`$f$`}. The single term {`$k = 0$`} is a constant,
          equal to the average of {`$f$`}; every other term oscillates and has zero average. This
          split is what makes the averaging proofs below work: you check each pure wave on its own,
          then add them up.
        </p>

        <p>
          <strong>The space average.</strong> For a function {`$f(\\varphi)$`} on the torus{' '}
          {`$T^n$`}, the space average is:
        </p>
        <div className="lrn-eq">{`$$\\bar{f} = (2\\pi)^{-n} \\int_0^{2\\pi} \\cdots \\int_0^{2\\pi} f(\\varphi) \\, d\\varphi_1 \\cdots d\\varphi_n$$`}</div>

        <p>
          <strong>The time average.</strong> Along a trajectory starting at {`$\\varphi_0$`}, the
          time average is:
        </p>
        <div className="lrn-eq">{`$$f^*(\\varphi_0) = \\lim_{T \\to \\infty} \\frac{1}{T} \\int_0^T f(\\varphi_0 + \\omega t) \\, dt$$`}</div>

        <p>
          <strong>When they agree.</strong> When the frequencies are independent (no integer
          relation {`$k \\cdot \\omega = 0$`} with {`$k \\neq 0$`}), the time average equals the
          space average: {`$f^* = \\bar{f}$`} for all continuous {`$f$`}. This is{' '}
          <strong>Weyl's equidistribution theorem</strong>.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The Fourier expansion of {`$f$`} is {`$f = \\sum_k \\hat{f}_k e^{ik\\cdot\\varphi}$`}.
            The time average picks out only the {`$k=0$`} term, because{' '}
            {`$\\frac{1}{T}\\int_0^T e^{ik \\cdot \\omega t} dt \\to 0$`} when{' '}
            {`$k \\cdot \\omega \\neq 0$`}. The {`$k=0$`} term is exactly {`$\\bar{f}$`}.
          </p>
        </div>

        <p>
          <strong>When they disagree.</strong> If there are {`$r$`} independent relations{' '}
          {`$(k, \\omega) = 0$`} in {`$\\mathbb{Z}^n$`}, the trajectory lies on a subtorus of
          dimension {`$n - r$`}. The time average then equals the space average only over that
          subtorus.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Space Average</span>
            <p>
              Integrate {`$f$`} over the whole torus. Depends on the function, not the trajectory.
              Always well-defined.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Time Average</span>
            <p>
              Long-run average along a specific trajectory. Depends on the initial point and
              frequencies. Equals space average when frequencies are independent.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Proof of the Theorem on Averages</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            To prove the time average equals the space average, what kind of functions would you try
            first?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Complex exponentials {`$e^{ik \\cdot \\varphi}$`} are the simplest: their time
              averages can be computed exactly by integration.
            </p>
          </details>
        </div>

        <p>The proof uses three lemmas, then applies approximation.</p>

        <p>
          <strong>Lemma 1: exponentials.</strong> For {`$e^{ik \\cdot \\varphi}$`}, compute the time
          average directly. If {`$k \\cdot \\omega \\neq 0$`}:
        </p>
        <div className="lrn-eq">{`$$\\frac{1}{T} \\int_0^T e^{ik \\cdot \\omega t} dt = \\frac{e^{ik\\cdot\\omega T} - 1}{iT k \\cdot \\omega} \\to 0 \\text{ as } T \\to \\infty$$`}</div>
        <p>
          The space average of {`$e^{ik\\cdot\\varphi}$`} for {`$k \\neq 0$`} is also {`$0$`}. For{' '}
          {`$k = 0$`} both averages are {`$1$`}. So the theorem holds for all complex exponentials.
        </p>

        <p>
          <strong>Lemma 2: trigonometric polynomials.</strong> Any finite linear combination of
          exponentials inherits the result by linearity.
        </p>

        <p>
          <strong>Lemma 3: approximation.</strong> By Weierstrass's theorem, any continuous function{' '}
          {`$f$`} on the torus can be approximated by trigonometric polynomials {`$p_\\varepsilon$`}{' '}
          with {`$|f - p_\\varepsilon| < \\varepsilon$`} uniformly. Then:
        </p>
        <div className="lrn-eq">{`$$|f^* - \\bar{f}| \\leq |f^* - p_\\varepsilon^*| + |p_\\varepsilon^* - \\bar{p}_\\varepsilon| + |\\bar{p}_\\varepsilon - \\bar{f}| \\leq \\varepsilon + 0 + \\varepsilon = 2\\varepsilon$$`}</div>
        <p>
          Since {`$\\varepsilon$`} is arbitrary, {`$f^* = \\bar{f}$`}.
        </p>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
            <p>
              The Weierstrass approximation step: (1) state the approximation theorem; (2) write the
              three-way triangle inequality; (3) bound each term by {`$\\varepsilon$`}; (4) take the
              limit.
            </p>
          </div>
          <div className="lrn-faded-phase lrn-faded-partial">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
            <ol className="lrn-list">
              <li>
                Find a trigonometric polynomial {`$p_\\varepsilon$`} with{' '}
                {`$|f - p_\\varepsilon| < \\varepsilon$`} (Weierstrass guarantees this).
              </li>
              <li>
                Write the triangle inequality splitting {`$|f^* - \\bar{f}|$`} into three pieces.
              </li>
              <li>
                Bound the middle piece {`$|p_\\varepsilon^* - \\bar{p}_\\varepsilon|$`} using Lemma
                2.
              </li>
              <li>Bound the outer pieces using the uniform approximation estimate.</li>
            </ol>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>
              Prove the theorem for a general continuous function from first principles using only
              the fact that {`$\\frac{1}{T}\\int_0^T e^{i\\alpha t} dt \\to 0$`} for{' '}
              {`$\\alpha \\neq 0$`}.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why is approximating by trigonometric polynomials the right strategy here?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Because we can compute the time average of exponentials exactly. Every other step
              follows from linearity and the uniform approximation bound.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Frequency Degeneracies</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            If your system has 3 degrees of freedom but the three frequencies satisfy one rational
            relation (e.g., {`$\\omega_1 = \\omega_2$`}), does the trajectory fill a 3-torus or
            something smaller?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Something smaller: a 2-torus. One relation removes one free direction. The trajectory
              fills only a 2D sub-torus.
            </p>
          </details>
        </div>

        <p>
          <strong>The frequency subgroup.</strong> The set{' '}
          {`$\\Gamma = \\{k \\in \\mathbb{Z}^n : k \\cdot \\omega = 0\\}$`} is a subgroup of{' '}
          {`$\\mathbb{Z}^n$`}. If {`$\\Gamma$`} has rank {`$r$`}, there are {`$r$`} independent
          linear relations among the frequencies.
        </p>

        <p>
          <strong>What degeneracy means for the trajectory.</strong> If {`$r > 0$`}, the trajectory
          does not fill all of {`$T^n$`}. The closure of the trajectory is a sub-torus of dimension{' '}
          {`$n - r$`}. The motion is conditionally periodic with {`$n - r$`} independent
          frequencies.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Each integer relation {`$k \\cdot \\omega = 0$`} constrains one combination of angles to
            be constant along the trajectory. So {`$r$`} independent relations fix {`$r$`}{' '}
            independent combinations of angles, leaving {`$n-r$`} free angular directions. The
            trajectory closure is exactly the sub-torus spanned by those {`$n-r$`} free directions.
          </p>
        </div>

        <p>
          <strong>The nondegeneracy condition.</strong> A system is <strong>nondegenerate</strong>{' '}
          if:
        </p>
        <div className="lrn-eq">{`$$\\det\\!\\left(\\frac{\\partial^2 H}{\\partial I^2}\\right) = \\det\\!\\left(\\frac{\\partial \\omega}{\\partial I}\\right) \\neq 0$$`}</div>
        <p>
          This means the frequencies change as the action changes. It ensures that different tori
          have genuinely different frequency vectors. Nondegeneracy is the condition behind{' '}
          <strong>KAM theory</strong>, which says most invariant tori survive a small perturbation
          as long as their frequencies stay far from resonance. The later section on small
          denominators makes this precise.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Nondegenerate</span>
            <p>
              Frequency map {`$I \\mapsto \\omega(I)$`} is a local diffeomorphism. Different tori
              have different frequencies. KAM theory and averaging apply.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Degenerate</span>
            <p>
              Frequency map is not invertible. Different tori can share frequencies (e.g., Keplerian
              orbits). Averaging and KAM analysis are harder.
            </p>
          </div>
        </div>

        <p>
          <strong>Example: planar harmonic oscillator.</strong> Take{' '}
          {`$H = \\frac{1}{2}(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}x^2 + y^2$`}. The frequencies
          are {`$\\omega_x = 1$`} and {`$\\omega_y = \\sqrt{2}$`} (irrational ratio, so
          nondegenerate). The trajectory fills the 2-torus densely.
        </p>

        <p>
          <strong>Example: Keplerian motion.</strong> For {`$U = -\\frac{1}{r}$`} in polar
          coordinates, the radial and angular frequencies are equal. This degeneracy means Keplerian
          orbits close exactly. When a small perturbation breaks this degeneracy, the two
          frequencies become slightly different, and the perihelion slowly rotates - the orbit no
          longer closes.
        </p>
      </>,

      <>
        <h2>Systems Close to Integrable and the Averaging Principle</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You perturb an integrable system by a small amount {`$\\varepsilon$`}. Do you think the
            actions {`$I$`} change rapidly or slowly? And do you think the angles {`$\\varphi$`}{' '}
            change rapidly or slowly?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Actions change slowly (at rate {`$\\varepsilon$`}) because they are nearly first
              integrals. Angles change rapidly (at rate {`$\\sim \\omega$`}) because the oscillation
              continues.
            </p>
          </details>
        </div>

        <p>
          <strong>The setup.</strong> A system <strong>close to integrable</strong> has the form:
        </p>
        <div className="lrn-eq">{`$$\\dot{\\varphi} = \\omega(I) + \\varepsilon f(I, \\varphi), \\quad \\dot{I} = \\varepsilon g(I, \\varphi)$$`}</div>
        <p>
          where {`$\\varepsilon \\ll 1$`} is a small parameter. The actions {`$I$`} change slowly
          (at rate {`$\\varepsilon$`}) while the angles {`$\\varphi$`} change rapidly.
        </p>

        <p>
          <strong>The averaging principle.</strong> Replace the perturbed system by the{' '}
          <strong>averaged system</strong>:
        </p>
        <div className="lrn-eq">{`$$\\dot{J} = \\varepsilon \\bar{g}(J), \\quad \\bar{g}(J) = (2\\pi)^{-k} \\int g(J, \\varphi) \\, d\\varphi_1 \\cdots d\\varphi_k$$`}</div>
        <p>
          Here {`$k$`} is the number of independent frequencies. The rapidly oscillating terms are
          replaced by their averages.
        </p>

        <p>
          The single-frequency version of this principle, with its rigorous error bound, is carried
          by the earlier Hannay-angle page. Here we work the multi-frequency case, where {`$k$`}{' '}
          fast angles raise the new problem of resonance. There is no satisfactory general proof of
          the averaging principle for {`$k > 1$`} frequencies.
        </p>

        <p>
          <strong>Key result for Hamiltonian systems.</strong> In a nondegenerate Hamiltonian
          system, the average of {`$g$`} is exactly zero: {`$\\bar{g} = 0$`}. The averaged actions
          have no <strong>secular drift</strong>. A secular term is a steady one-way drift that
          builds up over time, not an oscillation: an oscillation cancels over a cycle, while a
          secular term keeps adding up. So {`$\\bar{g} = 0$`} means the actions only wobble, they do
          not creep. This is the <strong>Laplace theorem</strong>: the semi-major axes of planetary
          orbits have no secular perturbations, to first order.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            In Hamilton's equations, {`$\\dot{I} = -\\frac{\\partial H_1}{\\partial \\varphi}$`}.
            Averaging over all angles:{' '}
            {`$\\bar{g} = -(2\\pi)^{-n} \\int_0^{2\\pi}\\!\\cdots\\int_0^{2\\pi} \\frac{\\partial H_1}{\\partial \\varphi}\\,d\\varphi = 0$`}
            , because integrating a derivative of a periodic function over its full period gives
            zero.
          </p>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Hamiltonian System</span>
            <p>
              {`$\\bar{g} = 0$`} exactly. No first-order secular drift of actions. Laplace theorem:
              semi-major axes have no first-order secular drift.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">General System</span>
            <p>
              {`$\\bar{g}$`} need not be zero. Actions can drift steadily. The averaging principle
              is an unproven rule of thumb for the general case.
            </p>
          </div>
        </div>

        <p>
          <strong>Worked example: averaging with two fast angles, near resonance.</strong> Take a
          single action {`$I$`} driven by two fast angles, with
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$\\dot{I} = \\varepsilon\\, g(\\varphi_1, \\varphi_2), \\quad g = \\cos\\varphi_1 + \\tfrac{1}{2}\\cos(\\varphi_1 - \\varphi_2), \\quad \\dot{\\varphi}_1 = \\omega_1, \\; \\dot{\\varphi}_2 = \\omega_2$$`}</div>
        <p>
          <strong>Step 1: average over the full 2-torus.</strong> Integrate {`$g$`} over both angles
          from {`$0$`} to {`$2\\pi$`}. Each cosine has zero average, so{' '}
          {`$\\bar{g} = (2\\pi)^{-2}\\!\\int_0^{2\\pi}\\!\\!\\int_0^{2\\pi} g\\,d\\varphi_1 d\\varphi_2 = 0$`}
          . Full-torus averaging predicts no drift of {`$I$`}.
        </p>
        <p>
          <strong>Step 2: check the frequencies.</strong> The dangerous integer vector is{' '}
          {`$k = (1, -1)$`}, giving {`$k \\cdot \\omega = \\omega_1 - \\omega_2$`}. When{' '}
          {`$\\omega_1$`} and {`$\\omega_2$`} are far apart, both cosines are genuinely fast and the
          Step 1 average is trustworthy: {`$I$`} only wobbles.
        </p>
        <p>
          <strong>Step 3: move near resonance.</strong> Let {`$\\omega_1 - \\omega_2 = \\delta$`} be
          small. Then the combination {`$\\varphi_1 - \\varphi_2 = \\delta t + \\text{const}$`}{' '}
          drifts slowly, so the term {`$\\tfrac{1}{2}\\cos(\\varphi_1 - \\varphi_2)$`} is no longer
          fast. It cannot be averaged away. Over a time {`$\\sim 1/\\delta$`} it holds nearly one
          sign, and {`$I$`} drifts by a real amount {`$\\sim \\varepsilon/\\delta$`}. The full-torus
          average missed it.
        </p>
        <div className="lrn-insight">
          <p>
            This is the small-denominator effect in plain sight. The resonant combination{' '}
            {`$k \\cdot \\omega = \\delta \\to 0$`} is exactly the vanishing denominator from the
            homological equation. Near resonance, you must average only over the fast angle and keep
            the slow resonant combination as a real variable.
          </p>
        </div>
      </>,

      <>
        <h2>Averaging in a Single-Frequency System</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The averaging principle says to replace {`$g(I, \\varphi)$`} by its {`$\\varphi$`}
            -average. Why might this be better justified for a single-frequency system than for
            multi-frequency?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              In one fast angle, the trajectory fills {`$S^1$`} uniformly. With multiple fast
              angles, resonances (rational frequency ratios) can trap the trajectory on a sub-torus,
              preventing uniform exploration.
            </p>
          </details>
        </div>

        <p>
          <strong>The key theorem (averaging theorem).</strong> For the single-frequency case, there
          exists a positive constant {`$c$`} such that:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$|I(t) - J(t)| < c \\varepsilon \\quad \\text{for all } t \\in [0, \\frac{1}{\\varepsilon}]$$`}</div>
        <p>
          provided {`$I(0) = J(0)$`}. The true solution {`$I(t)$`} stays within{' '}
          {`$O(\\varepsilon)$`} of the averaged solution {`$J(t)$`} over the long time interval{' '}
          {`$[0, \\frac{1}{\\varepsilon}]$`}.
        </p>

        <figure>
          <AveragingVizAether />
          <figcaption>
            The jagged curve is the true action {`$I(t)$`}: it oscillates as the fast angle winds.
            The smooth curve is the averaged action {`$J(t)$`}. The shaded band is the{' '}
            {`$O(\\varepsilon)$`} gap the theorem guarantees: {`$I(t)$`} never strays outside it
            over {`$[0, \\frac{1}{\\varepsilon}]$`}.
          </figcaption>
        </figure>

        <p>
          <strong>Scope of the theorem.</strong> The theorem is proved only for single-frequency (
          {`$k=1$`}) systems. For multi-frequency systems, no satisfactory general proof exists. The
          averaging principle is believed to hold but is not proved in general. The obstruction is
          the small denominators: with several fast angles, some integer combination{' '}
          {`$k \\cdot \\omega$`} can approach zero, and the bounded-correction argument above fails.
        </p>
      </>,

      <>
        <h2>The Zero-Mean Condition Behind the Proof</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            To show {`$I(t)$`} and {`$J(t)$`} stay close, you change variables to{' '}
            {`$P = I + \\varepsilon k(I, \\varphi)$`} and choose {`$k$`} to cancel the oscillating
            part of {`$g$`}. For {`$k$`} to stay bounded, what must be true of the part of {`$g$`}{' '}
            you are integrating?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              It must have zero average. Integrating a piece with nonzero average grows without
              bound; only the zero-mean part {`$\\tilde{g} = g - \\bar{g}$`} integrates to a
              bounded, periodic correction.
            </p>
          </details>
        </div>

        <p>
          The single-frequency averaging theorem is proved with a near-identity change of variables{' '}
          {`$P = I + \\varepsilon k(I, \\varphi)$`}, where {`$k$`} absorbs the oscillating part of{' '}
          {`$g$`}. The earlier page on the Hannay angle carries that proof in full: the choice of{' '}
          {`$k$`}, the cancellation of the {`$O(\\varepsilon)$`} terms, the Gronwall step that turns
          an {`$O(\\varepsilon^2)$`} remainder over time {`$\\frac{1}{\\varepsilon}$`} into an{' '}
          {`$O(\\varepsilon)$`} bound. We do not repeat it here. We pull out the one fact that the
          rest of this page builds on.
        </p>

        <p>
          <strong>The solvability condition.</strong> You must set{' '}
          {`$\\frac{dk}{d\\varphi} = -\\frac{1}{\\omega}\\,\\tilde{g}$`}, so that{' '}
          {`$k(P, \\varphi) = -\\int_0^\\varphi \\frac{\\tilde{g}(P, \\psi)}{\\omega(P)}\\,d\\psi$`}
          . This {`$k$`} stays bounded and periodic only because {`$\\tilde{g} = g - \\bar{g}$`} has
          zero average. If {`$g$`} had a nonzero average left in it, the integral would grow without
          bound and the change of variables would not be small. So the correction exists exactly
          when you have first subtracted the average.
        </p>

        <div className="lrn-insight">
          <p>
            This zero-mean condition is the one-frequency shadow of the small denominators. With one
            fast angle, dividing by {`$\\omega$`} is always safe. With several fast angles, the same
            step divides by {`$k \\cdot \\omega$`}, which can come close to zero. The
            single-frequency proof works precisely because that denominator can never be small.
          </p>
        </div>
      </>,

      <>
        <h2>Adiabatic Invariants: Action Under Slow Change</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A pendulum swings while its length grows slowly. The action {`$I = \\frac{h}{\\omega}$`}{' '}
            stays nearly fixed. As the pendulum lengthens, does the swing's angular amplitude grow
            or shrink?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The angular amplitude shrinks. A longer pendulum has lower frequency, but the action
              fixes a combination of length and amplitude. Working it out gives{' '}
              {`$\\theta_{\\max} \\propto L^{-3/4}$`}: the swing narrows as the pendulum lengthens.
            </p>
          </details>
        </div>

        <p>
          You already met adiabatic invariants for a slowly changing system. An adiabatic invariant
          stays within a small bound over the whole slow time scale{' '}
          {`$[0, \\frac{1}{\\varepsilon}]$`}, even though it is not exactly conserved. The headline
          fact is that the action variable {`$I = \\frac{1}{2\\pi}\\Pi(h; \\lambda)$`} (the
          phase-area divided by {`$2\\pi$`}) is an adiabatic invariant of a slowly varying
          one-degree-of-freedom system. The slow harmonic oscillator ({`$I = \\frac{h}{\\omega}$`},
          energy tracks frequency), the ball between slowly moving walls ({`$vl = \\text{const}$`}),
          and the link to the quantum number are all standard examples carried by the earlier
          adiabatic-invariants page.
        </p>

        <p>
          What this page adds is the proof, built from the averaging machinery above, and one
          quantitative law worth deriving in full.
        </p>

        <p>
          <strong>The lengthening pendulum, in numbers.</strong> A pendulum of length {`$L$`} has
          small-swing frequency {`$\\omega = \\sqrt{g/L} \\propto L^{-1/2}$`}. Its energy at angular
          amplitude {`$\\theta_{\\max}$`} is {`$h = \\frac{1}{2}mgL\\,\\theta_{\\max}^2$`} (the
          effective spring constant is {`$mgL$`}). So the action is
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$I = \\frac{h}{\\omega} = \\frac{\\tfrac{1}{2}mgL\\,\\theta_{\\max}^2}{\\sqrt{g/L}} = \\tfrac{1}{2}m\\sqrt{g}\\,L^{3/2}\\,\\theta_{\\max}^2$$`}</div>
        <p>
          Adiabatic invariance holds {`$I$`} fixed as {`$L$`} grows slowly. So{' '}
          {`$L^{3/2}\\theta_{\\max}^2 = \\text{const}$`}, which gives{' '}
          {`$\\theta_{\\max} \\propto L^{-3/4}$`}. The swing narrows as the pendulum lengthens.
        </p>

        <div className="lrn-callout lrn-warning">
          <span className="lrn-callout-label">Warning</span>
          <p>
            The ball-between-walls result does not formally follow from the averaging theorem,
            because the collisions are instant. The velocity jumps, and the averaging theorem needs
            smooth equations of motion. The result still holds, but it needs separate justification.
          </p>
        </div>
      </>,

      <>
        <h2>Proof of Adiabatic Invariance of the Action</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The proof converts the slowly-varying system into a system close to an integrable one.
            What transformation would put it in a form where averaging applies?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Transform to action-angle variables {`$(I, \\varphi)$`} for the frozen Hamiltonian at
              each time. The slowly varying parameter then appears as a small perturbation.
            </p>
          </details>
        </div>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Time-Dependent Canonical Transformation</span>
            <p className="lrn-step-content">
              At each time {`$t$`}, transform {`$(p, q) \\to (I, \\varphi)$`} using the action-angle
              variables for the frozen Hamiltonian {`$H(\\cdot; \\lambda)$`} with{' '}
              {`$\\lambda = \\varepsilon t$`} fixed. This gives a new Hamiltonian:{' '}
              {`$K = H_0(I, \\lambda) + \\varepsilon \\frac{\\partial S}{\\partial \\lambda}$`}. The
              extra {`$\\varepsilon \\frac{\\partial S}{\\partial \\lambda}$`} appears because the
              transformation depends on time through {`$\\lambda$`}: a time-dependent canonical
              transformation adds the partial time-derivative of its generating function to the
              Hamiltonian.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Equations of Motion</span>
            <p className="lrn-step-content">
              In the new variables: {`$\\dot{\\varphi} = \\omega(I, \\lambda) + \\varepsilon f$`},{' '}
              {`$\\dot{I} = \\varepsilon g$`}, {`$\\dot{\\lambda} = \\varepsilon$`}. This is exactly
              the form needed for averaging.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Average</span>
            <p className="lrn-step-content">
              The averaged rate of change: {`$\\bar{g} = (2\\pi)^{-1} \\int g \\, d\\varphi = 0$`},
              because {`$g$`} comes from differentiating a periodic function{' '}
              {`$\\frac{\\partial S}{\\partial \\lambda}$`} with respect to {`$\\varphi$`}. By the
              averaging theorem, the averaged action {`$J$`} satisfies {`$\\dot{J} = 0$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 4: Conclude</span>
            <p className="lrn-step-content">
              Since {`$\\dot{J} = 0$`}, the action {`$J$`} is exactly conserved in the averaged
              system. By the averaging theorem, {`$|I(t) - J(t)| < c\\varepsilon$`} over time{' '}
              {`$\\frac{1}{\\varepsilon}$`}. So {`$I$`} changes by at most {`$O(\\varepsilon)$`}{' '}
              over the slow time scale.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why is {`$\\bar{g} = 0$`} in the adiabatic proof?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Because{' '}
              {`$g = -\\frac{\\partial \\frac{\\varepsilon \\partial S}{\\partial \\lambda}}{\\partial \\varphi} = -\\frac{\\varepsilon \\partial^2 S}{\\partial \\varphi \\partial \\lambda}$`}
              . Integrating over {`$\\varphi$`} from {`$0$`} to {`$2\\pi$`}: the{' '}
              {`$\\frac{\\partial S}{\\partial \\lambda}$`} term is periodic in {`$\\varphi$`}, so
              its {`$\\varphi$`}-derivative integrates to zero.
            </p>
          </details>
        </div>
      </>,

      <>
        <h2>Canonical Perturbation Theory: The Order-by-Order Idea</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You know action-angle variables make an integrable Hamiltonian depend on the action{' '}
            {`$I$`} alone, so the angle drops out. Now add a small term{' '}
            {`$\\varepsilon H_1(I, \\varphi)$`} that brings the angle back. What single change of
            coordinates would you reach for to make the angle drop out again?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              A canonical transformation, built from a generating function. You already used one to
              construct action-angle variables. The new idea is to build it as a power series in{' '}
              {`$\\varepsilon$`} and remove the angle one order at a time.
            </p>
          </details>
        </div>

        <p>
          The averaging principle told you what the slow drift of the actions looks like on average.
          Canonical perturbation theory does something sharper. It builds an explicit change of
          coordinates that pushes the angle dependence to higher and higher order in{' '}
          {`$\\varepsilon$`}. After the change, the Hamiltonian looks integrable again, up to a
          controlled error.
        </p>

        <p>
          <strong>The setup.</strong> Start from a near-integrable Hamiltonian in action-angle
          variables of the unperturbed system:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$H(I, \\varphi) = H_0(I) + \\varepsilon H_1(I, \\varphi) + \\varepsilon^2 H_2(I, \\varphi) + \\cdots$$`}</div>
        <p>
          The unperturbed part {`$H_0(I)$`} depends on the action alone. The frequencies are{' '}
          {`$\\omega(I) = \\frac{\\partial H_0}{\\partial I}$`}. The perturbation terms{' '}
          {`$H_1, H_2, \\ldots$`} depend on the angle and spoil that nice form. The goal is to find
          new action-angle variables {`$(I', \\varphi')$`} in which the angle dependence is gone, at
          least to the order you work to.
        </p>

        <p>
          <strong>The plan.</strong> Look for a canonical transformation close to the identity,
          built from a generating function expanded in powers of {`$\\varepsilon$`}:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$S(I', \\varphi) = I' \\cdot \\varphi + \\varepsilon S_1(I', \\varphi) + \\varepsilon^2 S_2(I', \\varphi) + \\cdots$$`}</div>
        <p>
          The leading term {`$I' \\cdot \\varphi$`} is the identity transformation. Each correction{' '}
          {`$S_n$`} is chosen to cancel the angle-dependent part of the Hamiltonian at order{' '}
          {`$\\varepsilon^n$`}. You build the transformation one order at a time, hence "order by
          order."
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY A GENERATING FUNCTION?</span>
          <p>
            A generating function automatically produces a canonical transformation: the new
            coordinates inherit the symplectic structure, so Hamilton's equations keep their form. A
            mixed-variable generating function {`$S(I', \\varphi)$`} of the old angle and new action
            gives {`$I = \\frac{\\partial S}{\\partial \\varphi}$`} and{' '}
            {`$\\varphi' = \\frac{\\partial S}{\\partial I'}$`}. With{' '}
            {`$S = I' \\cdot \\varphi + O(\\varepsilon)$`}, this is the identity plus a small
            correction.
          </p>
        </div>
      </>,

      <>
        <h2>The Homological Equation</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You want to choose {`$S_1$`} so the first-order angle dependence cancels. The angle
            dependence is some function {`$H_1(I, \\varphi)$`}. Part of it has zero average over the
            angle, part of it is the average itself. Which part do you think you can cancel, and
            which part is stuck?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              You can cancel the zero-average part. The average part cannot be cancelled by any
              change of coordinates: it has to stay and shift the new Hamiltonian. This is the same
              zero-mean split you met in the averaging proof.
            </p>
          </details>
        </div>

        <p>
          <strong>Collect the first-order terms.</strong> Substitute the series for {`$S$`} into the
          relations {`$I = \\frac{\\partial S}{\\partial \\varphi}$`} and write the new Hamiltonian{' '}
          {`$K(I') = H(I, \\varphi)$`}. Matching powers of {`$\\varepsilon$`} at order{' '}
          {`$\\varepsilon^1$`} gives one equation for the unknown {`$S_1$`}:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$\\omega(I') \\cdot \\frac{\\partial S_1}{\\partial \\varphi} + H_1(I', \\varphi) = \\bar{H}_1(I')$$`}</div>
        <p>
          This is the <strong>homological equation</strong>. The known input is {`$H_1$`}. The
          unknown is {`$S_1$`}. The right side {`$\\bar{H}_1$`} is the angle-average of {`$H_1$`},
          and it becomes the first-order correction to the new Hamiltonian. The same equation reads{' '}
          {`$\\{S_1, H_0\\} + H_1 = \\bar{H}_1$`} using the Poisson bracket, since{' '}
          {`$\\{S_1, H_0\\} = -\\omega \\cdot \\frac{\\partial S_1}{\\partial \\varphi}$`}.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY THE AVERAGE SURVIVES</span>
          <p>
            Write {`$H_1 = \\bar{H}_1 + \\tilde{H}_1$`}, where {`$\\bar{H}_1$`} is the angle-average
            and {`$\\tilde{H}_1$`} has zero average. The operator{' '}
            {`$\\omega \\cdot \\frac{\\partial}{\\partial \\varphi}$`} turns any periodic function
            into one with zero average, because a derivative of a periodic function integrates to
            zero over a full cycle. So the left side can only ever produce the zero-average part.
            The average {`$\\bar{H}_1$`} cannot be cancelled. It must move into the new Hamiltonian{' '}
            {`$K = H_0 + \\varepsilon \\bar{H}_1 + O(\\varepsilon^2)$`}. This matches the averaging
            principle exactly: the surviving first-order effect is the average of the perturbation.
          </p>
        </div>

        <p>
          <strong>Solving by Fourier series.</strong> Expand both the known perturbation and the
          unknown generator in the angle Fourier series:{' '}
          {`$\\tilde{H}_1 = \\sum_{k \\neq 0} \\hat{H}_{1,k}(I') \\, e^{i k \\cdot \\varphi}$`} and{' '}
          {`$S_1 = \\sum_{k \\neq 0} \\hat{S}_{1,k}(I') \\, e^{i k \\cdot \\varphi}$`}. The operator{' '}
          {`$\\omega \\cdot \\frac{\\partial}{\\partial \\varphi}$`} multiplies the {`$k$`}-th mode
          by {`$i (k \\cdot \\omega)$`}. Matching modes in the homological equation gives each
          coefficient:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$\\hat{S}_{1,k}(I') = \\frac{i\\,\\hat{H}_{1,k}(I')}{k \\cdot \\omega(I')}, \\quad k \\neq 0$$`}</div>
        <p>
          So the homological equation has an explicit solution: divide each Fourier mode of the
          perturbation by {`$k \\cdot \\omega$`}. The {`$k = 0$`} mode is exactly the average{' '}
          {`$\\bar{H}_1$`}, which we already moved to the right side.
        </p>
      </>,

      <>
        <h2>Small Denominators and Resonance</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The first-order generator divides each Fourier mode by {`$k \\cdot \\omega$`}. The
            frequencies {`$\\omega$`} are fixed numbers. What goes wrong if, for some integer vector{' '}
            {`$k$`}, the combination {`$k \\cdot \\omega$`} happens to be very close to zero?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The coefficient {`$\\hat{S}_{1,k} = i\\hat{H}_{1,k}/(k \\cdot \\omega)$`} blows up. A
              tiny denominator makes the correction huge, so the "small" transformation is no longer
              small. The expansion can fail near such frequencies.
            </p>
          </details>
        </div>

        <p>
          <strong>The small-denominator problem.</strong> Each Fourier coefficient of the generator
          carries the factor {`$1/(k \\cdot \\omega)$`}. When the frequencies are rationally
          independent, {`$k \\cdot \\omega$`} is never exactly zero for {`$k \\neq 0$`}. But it can
          come arbitrarily close to zero. These are the <strong>small denominators</strong>. A
          near-resonant combination {`$k \\cdot \\omega \\approx 0$`} makes the matching coefficient{' '}
          {`$\\hat{S}_{1,k}$`} enormous, and the order-by-order series can stop converging.
        </p>

        <div className="lrn-callout lrn-warning">
          <span className="lrn-callout-label">Warning</span>
          <p>
            An exact resonance {`$k \\cdot \\omega = 0$`} makes the denominator vanish. Then that
            Fourier mode of the perturbation cannot be cancelled at all by a near-identity
            transform. The standard expansion breaks down at and near resonances. This is the same
            obstruction you saw with degenerate frequencies: when {`$k \\cdot \\omega = 0$`}, the
            trajectory is trapped on a sub-torus and averaging over the full torus is no longer
            valid.
          </p>
        </div>

        <p>
          <strong>The link back to the zero-mean condition.</strong> In the single-frequency
          averaging proof, you needed {`$\\tilde{g} = g - \\bar{g}$`} to have zero average so the
          correction {`$k$`} stayed bounded. The small denominator is the multi-frequency shadow of
          that same fact. With one fast angle, {`$k \\cdot \\omega = k\\,\\omega$`} is never small
          for {`$k \\neq 0$`}, so the correction is always bounded. With several fast angles, some
          integer combination can drive {`$k \\cdot \\omega$`} toward zero, and the bound is lost.
        </p>

        <SmallDenominatorStem />

        <p>
          <strong>KAM theory in one sentence.</strong> The Kolmogorov-Arnold-Moser theorem says most
          invariant tori survive a small perturbation, as long as their frequencies stay far enough
          from every resonance. "Far enough" means a <strong>Diophantine condition</strong>:{' '}
          {`$|k \\cdot \\omega| \\geq \\gamma\\,|k|^{-\\tau}$`} for all nonzero integer {`$k$`},
          with fixed constants {`$\\gamma > 0$`} and {`$\\tau > 0$`}. Tori whose frequencies meet
          this condition control the small denominators, so the perturbation series can be made to
          converge and the torus persists, slightly deformed.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY THE DIOPHANTINE CONDITION HELPS</span>
          <p>
            The Diophantine bound puts a floor under every denominator: {`$|k \\cdot \\omega|$`}{' '}
            cannot shrink faster than {`$|k|^{-\\tau}$`}. The Fourier coefficients of a smooth
            perturbation shrink faster than any power of {`$|k|$`}. So the dangerous{' '}
            {`$1/(k \\cdot \\omega)$`} growth is beaten by the fast decay of {`$\\hat{H}_{1,k}$`},
            and the corrected series stays under control. Frequencies too close to resonance fail
            this bound, and their tori can break up.
          </p>
        </div>
      </>,

      <>
        <h2>Worked Example: First-Order Frequency Shift of a Quartic Oscillator</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Take a harmonic oscillator and add a small {`$\\varepsilon q^4$`} term. The pure
            oscillator has one frequency for every amplitude. Do you expect the small {`$q^4$`} term
            to make the frequency depend on amplitude?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. A real spring stiffens at large stretch. The {`$q^4$`} term adds stiffness that
              grows with amplitude, so the frequency rises with the action. Canonical perturbation
              theory computes exactly how much, to first order.
            </p>
          </details>
        </div>

        <p>
          <strong>The system.</strong> Take the unit harmonic oscillator with a small quartic term:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$H = \\frac{1}{2}p^2 + \\frac{1}{2}q^2 + \\varepsilon\\, q^4$$`}</div>
        <p>
          The unperturbed part {`$H_0 = \\frac{1}{2}(p^2 + q^2)$`} has frequency {`$\\omega_0 = 1$`}
          . In its action-angle variables {`$q = \\sqrt{2I}\\,\\sin\\varphi$`},{' '}
          {`$p = \\sqrt{2I}\\,\\cos\\varphi$`}, so {`$H_0 = I$`}. The perturbation is{' '}
          {`$\\varepsilon H_1 = \\varepsilon q^4 = \\varepsilon\\,(2I)^2 \\sin^4\\varphi = 4\\varepsilon I^2 \\sin^4\\varphi$`}
          .
        </p>

        <p>
          <strong>Step 1: average the perturbation.</strong> The first-order frequency shift comes
          from the angle-average of {`$H_1$`}. Use {`$\\overline{\\sin^4\\varphi} = \\frac{3}{8}$`}{' '}
          (average over a full cycle):
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$\\bar{H}_1(I) = 4 I^2 \\cdot \\overline{\\sin^4\\varphi} = 4 I^2 \\cdot \\frac{3}{8} = \\frac{3}{2} I^2$$`}</div>

        <p>
          <strong>Step 2: read off the new Hamiltonian.</strong> The homological equation removes
          the zero-mean part of {`$H_1$`} into the generator {`$S_1$`}. The surviving first-order
          Hamiltonian keeps only the average:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$K(I) = I + \\varepsilon\\,\\frac{3}{2} I^2 + O(\\varepsilon^2)$$`}</div>

        <p>
          <strong>Step 3: read off the frequency.</strong> The frequency is{' '}
          {`$\\omega = \\frac{\\partial K}{\\partial I}$`}:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$\\omega(I) = 1 + 3\\varepsilon I + O(\\varepsilon^2)$$`}</div>
        <p>
          The frequency now rises with the action. The amplitude-independent frequency of the pure
          oscillator is gone: the quartic term makes the oscillator stiffen as it swings wider. This
          is the first-order frequency shift, and it is exactly the kind of result canonical
          perturbation theory delivers.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why did only the average {`$\\frac{3}{2} I^2$`} matter for the frequency, and not the
            full {`$4 I^2 \\sin^4\\varphi$`}?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The angle-dependent part of {`$\\sin^4\\varphi$`} oscillates and averages to zero over
              a cycle. The homological equation absorbs that oscillating part into the change of
              coordinates {`$S_1$`}. Only the constant piece {`$\\frac{3}{8}$`} survives into the
              new Hamiltonian, and the frequency is its derivative in {`$I$`}. The oscillating part
              shifts where the orbit sits, not how fast it goes on average.
            </p>
          </details>
        </div>
      </>
    ]
  },
  practice: [
    {
      q: `What condition must $n$ functions $F_1, \\ldots, F_n$ satisfy to be "in involution"?`,
      a: `Their pairwise Poisson brackets must all vanish: $\\{F_i, F_j\\} = 0$ for all $i, j$. This means the flows generated by each $F_i$ commute with each other. The integrals are compatible: knowing one does not force the other to change, so they can all be constant at once along trajectories.`
    },
    {
      q: `State Liouville's theorem on integrable systems.`,
      a: `If a Hamiltonian system on a $2n$-dimensional phase space has $n$ independent first integrals $F_1, \\ldots, F_n$ in involution, then: (1) each compact connected level set $M_f = \\{x : F_i(x) = f_i\\}$ is diffeomorphic to the $n$-torus $T^n$; (2) the motion on $M_f$ is conditionally periodic with $\\dot{\\varphi} = \\omega(f)$; (3) the system is solvable by quadratures.`
    },
    {
      q: `A rigid top spinning freely has energy $H$, vertical angular momentum $M_z$, and body angular momentum $M_3$ all conserved. What does Liouville's theorem tell you about its motion?`,
      a: `These three integrals are in involution on the 6-dimensional phase space (3 degrees of freedom). So the motion lies on a 3-torus $T^3$, and the motion is conditionally periodic with three frequencies $\\omega_1, \\omega_2, \\omega_3$ depending on the values of the integrals.`
    },
    {
      q: `What is the action variable $I(h)$ for a 1D system with energy $H = h$?`,
      a: `$I(h) = \\frac{1}{2\\pi} \\oint_{M_h} p \\, dq = \\frac{1}{2\\pi} \\Pi(h)$, where $\\Pi(h)$ is the area enclosed by the phase curve $M_h$ in the $(p, q)$ plane. Dividing by $2\\pi$ ensures the conjugate angle variable $\\varphi$ runs from $0$ to $2\\pi$ over one complete cycle.`
    },
    {
      q: `Compute the action variable for the harmonic oscillator $H = \\frac{1}{2}a^2 p^2 + \\frac{1}{2}b^2 q^2$ with $H = h$.`,
      a: `The level set $H = h$ is an ellipse with semi-axes $\\frac{\\sqrt{2h}}{a}$ and $\\frac{\\sqrt{2h}}{b}$. The enclosed area is $\\Pi = \\pi \\cdot \\frac{\\sqrt{2h}}{a} \\cdot \\frac{\\sqrt{2h}}{b} = \\frac{2\\pi h}{ab}$. So $I = \\frac{1}{2\\pi} \\cdot \\frac{2\\pi h}{ab} = \\frac{h}{\\omega}$, where $\\omega = ab$ is the frequency. The action equals energy divided by frequency.`
    },
    {
      q: `Why does the action variable $I = \\frac{h}{\\omega}$ have units of "action" (energy times time)?`,
      a: `$I = \\frac{h}{\\omega} = h \\cdot \\frac{T}{2\\pi}$ where $T = \\frac{2\\pi}{\\omega}$ is the period. So $I = h \\cdot \\frac{T}{2\\pi}$: it is energy times a period (time), divided by a dimensionless constant. This is the natural "size" of one cycle.`
    },
    {
      q: `What is the generating function $S(I, q)$ for the canonical transformation $(p, q) \\to (I, \\varphi)$ in one degree of freedom?`,
      a: `$S(I, q) = \\int_{q_0}^{q} p \\, dq \\big|_{H = h(I)}$. From $S$: $p = \\frac{\\partial S}{\\partial q}$ reconstructs the momentum, and $\\varphi = \\frac{\\partial S}{\\partial I}$ defines the angle. The condition $\\oint d\\varphi = 2\\pi$ is verified by differentiating $\\oint p \\, dq = 2\\pi I$ with respect to $I$.`
    },
    {
      q: `In $n$ degrees of freedom, how many action variables are needed, and how are they defined?`,
      a: `You need $n$ action variables, one per independent 1-cycle of the torus. Choose a basis $\\gamma_1, \\ldots, \\gamma_n$ of 1-cycles on $T^n$, then $I_i = \\frac{1}{2\\pi} \\oint_{\\gamma_i} p \\, dq$. Each $I_i$ measures the "area swept" around the $i$-th loop.`
    },
    {
      q: `What does the multi-valuedness condition $\\Delta_i \\varphi_j = 2\\pi \\delta_{ij}$ mean geometrically?`,
      a: `Going around the $i$-th cycle $\\gamma_i$ increases only $\\varphi_i$ by $2\\pi$ and leaves all other angles unchanged. Each angle coordinate $\\varphi_j$ has a well-defined $2\\pi$ period around exactly its own cycle, and zero change around all other cycles.`
    },
    {
      q: `What does "conditionally periodic" motion mean on a torus $T^n$?`,
      a: `The angle coordinates evolve uniformly: $\\dot{\\varphi} = \\omega$ with $\\omega = (\\omega_1, \\ldots, \\omega_n)$ constant. The solution is $\\varphi(t) = \\varphi(0) + \\omega t$. Each angle winds around its circle at a constant rate. The motion is "conditional" because it is truly periodic only when all frequency ratios are rational.`
    },
    {
      q: `When does a conditionally periodic trajectory on $T^2$ close up?`,
      a: `When the ratio $\\frac{\\omega_1}{\\omega_2}$ is rational: $\\frac{\\omega_1}{\\omega_2} = \\frac{p}{q}$. The trajectory completes $p$ revolutions in $\\varphi_1$ and $q$ revolutions in $\\varphi_2$, then repeats. When $\\frac{\\omega_1}{\\omega_2}$ is irrational, the trajectory never closes and fills the torus densely.`
    },
    {
      q: `State Weyl's equidistribution theorem (the theorem on averages).`,
      a: `If the frequencies $\\omega_1, \\ldots, \\omega_n$ are independent over the rationals (no integer $k \\neq 0$ with $k \\cdot \\omega = 0$), then the time average equals the space average for all continuous functions: $f^*(\\varphi_0) = \\bar{f}$ for all $\\varphi_0$.`
    },
    {
      q: `Outline the proof that the time average equals the space average when frequencies are independent.`,
      a: `Step 1: verify for complex exponentials $e^{ik\\cdot\\varphi}$. For $k \\neq 0$, the time average is $\\frac{e^{ik\\cdot\\omega T}-1}{iT k\\cdot\\omega} \\to 0 = \\bar{e^{ik\\cdot\\varphi}}$. For $k = 0$, both averages are $1$. Step 2: extend to trigonometric polynomials by linearity. Step 3: approximate any continuous $f$ by trigonometric polynomials (Weierstrass). Use the triangle inequality: the error is bounded by $2\\varepsilon$ for any $\\varepsilon > 0$.`
    },
    {
      q: `How does the dimension of the trajectory's closure relate to the number of frequency relations?`,
      a: `If there are $r$ independent integer relations $k \\cdot \\omega = 0$ in $\\mathbb{Z}^n$, the closure of the trajectory is a sub-torus of dimension $n - r$. With $r = 0$ (independent frequencies), the closure is all of $T^n$. With $r = n - 1$, the trajectory is a closed curve.`
    },
    {
      q: `What is the nondegeneracy condition for an integrable Hamiltonian system?`,
      a: `$\\det\\frac{\\partial^2 H}{\\partial I^2} = \\det\\frac{\\partial \\omega}{\\partial I} \\neq 0$. This means the frequency map $I \\mapsto \\omega(I)$ is a local diffeomorphism. Different tori have different frequency vectors, and the tori are uniquely labeled by their frequencies.`
    },
    {
      q: `For the 2D oscillator $H = \\frac{1}{2}(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}x^2 + y^2$, what are the frequencies, and does the trajectory fill the torus densely?`,
      a: `The $x$-potential is $\\frac{1}{2}x^2$, giving $\\omega_x = 1$. The $y$-potential is $y^2$, giving $\\omega_y = \\sqrt{2}$. The ratio $\\frac{\\omega_x}{\\omega_y} = \\frac{1}{\\sqrt{2}}$ is irrational. By Weyl's equidistribution theorem, the trajectory fills the 2-torus densely.`
    },
    {
      q: `What does the averaging principle say, and when was it first used?`,
      a: `Replace the perturbed system $\\dot{I} = \\varepsilon g(I, \\varphi)$ by the averaged system $\\dot{J} = \\varepsilon \\bar{g}(J)$, where $\\bar{g}$ is the average of $g$ over the fast angles. Gauss discovered this principle for planetary orbits by distributing each planet's mass proportionally along its orbit.`
    },
    {
      q: `For a nondegenerate Hamiltonian perturbation, what does averaging predict about the evolution of the action variables?`,
      a: `The average of $\\dot{I} = -\\frac{\\partial H_1}{\\partial \\varphi}$ over all angles is zero: $\\bar{g} = 0$. So the averaged system gives $\\dot{J} = 0$: no secular evolution of the action. This is the Laplace theorem: semi-major axes of planetary orbits have no first-order secular perturbations.`
    },
    {
      q: `Why is $\\bar{g} = 0$ in a nondegenerate Hamiltonian system?`,
      a: `In Hamilton's equations, $\\dot{I} = -\\frac{\\partial H_1}{\\partial \\varphi}$. The average over all angles: $\\bar{g} = -(2\\pi)^{-n} \\int_0^{2\\pi} \\cdots \\int_0^{2\\pi} \\frac{\\partial H_1}{\\partial \\varphi} d\\varphi = 0$, because integrating a derivative of a periodic function over its full period gives zero.`
    },
    {
      q: `State the averaging theorem for a single-frequency system.`,
      a: `For $\\dot{\\varphi} = \\omega(I) + \\varepsilon f$, $\\dot{I} = \\varepsilon g$, with $I(0) = J(0)$: there exists a positive constant $c$ such that $|I(t) - J(t)| < c \\varepsilon$ for all $t \\in [0, \\frac{1}{\\varepsilon}]$. The true solution stays within $O(\\varepsilon)$ of the averaged solution over the slow time scale.`
    },
    {
      q: `Outline the proof of the averaging theorem (near-identity averaging transformation).`,
      a: `Step 1: set $P = I + \\varepsilon k(I, \\varphi)$ where $\\frac{dk}{d\\varphi} = -\\frac{1}{\\omega} \\tilde{g}$ and $\\tilde{g} = g - \\bar{g}$ is the zero-mean part. Step 2: show $\\dot{P} = \\varepsilon \\bar{g}(P) + O(\\varepsilon^2)$ (the oscillating terms cancel). Step 3: compare with $\\dot{J} = \\varepsilon \\bar{g}(J)$; the difference $P - J$ has a right-hand side of $O(\\varepsilon^2)$, so by Gronwall: $|P(t) - J(t)| = O(\\varepsilon)$ over time $\\frac{1}{\\varepsilon}$. Step 4: $I = P + O(\\varepsilon)$, so $|I - J| = O(\\varepsilon)$.`
    },
    {
      q: `Why does the Gronwall lemma give an $O(\\varepsilon)$ bound over time $\\frac{1}{\\varepsilon}$?`,
      a: `The error satisfies $|P(t) - J(t)| \\leq C \\int_0^t \\varepsilon^2 \\, ds = C \\varepsilon^2 t$. At $t = \\frac{1}{\\varepsilon}$, this gives $C\\varepsilon$. The remainder is $O(\\varepsilon^2)$ per unit time, and the time interval is $O\\frac{1}{\\varepsilon}$, so the total accumulation is $O(\\varepsilon)$.`
    },
    {
      q: `What is an adiabatic invariant? Give the precise definition.`,
      a: `A quantity $I(p, q; \\lambda)$ is an adiabatic invariant for $H(p, q; \\varepsilon t)$ if $|I(p(t), q(t); \\varepsilon t) - I(p(0), q(0); 0)| < \\kappa$ for all $t \\in [0, \\frac{1}{\\varepsilon}]$. The parameter $\\lambda = \\varepsilon t$ changes slowly, and $I$ stays within $\\kappa$ of its initial value for the entire slow time scale.`
    },
    {
      q: `A harmonic oscillator has $\\omega$ slowly doubled. If the initial energy is $h_0$, what is the final energy?`,
      a: `The action $I = \\frac{h}{\\omega}$ is adiabatically conserved: $I_{\\rm final} = I_{\\rm initial}$. So $\\frac{h_{\\rm final}}{\\omega_{\\rm final}} = \\frac{h_0}{\\omega_{\\rm initial}}$. With $\\omega_{\\rm final} = 2\\omega_{\\rm initial}$: $h_{\\rm final} = 2h_0$. The energy doubles when the frequency doubles.`
    },
    {
      q: `A ball bounces between walls separated by distance $l$ with velocity $v$. What is the adiabatic invariant?`,
      a: `The adiabatic invariant is $vl$ (velocity times wall separation). As the walls slowly come together, $vl = \\text{const}$, so $v$ increases as $\\frac{1}{l}$. Note: this does not formally follow from the averaging theorem because the collisions are instantaneous - the velocity jumps discontinuously - and the theorem requires smooth equations of motion. The result holds by observation.`
    },
    {
      q: `Outline the proof that the action variable is adiabatically invariant.`,
      a: `Step 1: transform $(p, q) \\to (I, \\varphi)$ using action-angle variables for the frozen Hamiltonian $H(\\cdot; \\lambda)$. The new Hamiltonian is $K = H_0(I, \\lambda) + \\frac{\\varepsilon \\partial S}{\\partial \\lambda}$. Step 2: equations are $\\dot{I} = \\varepsilon g$ where $g = -\\frac{\\partial\\frac{\\varepsilon \\partial S}{\\partial \\lambda}}{\\partial \\varphi}$. Step 3: average $g$ over $\\varphi$: $\\bar{g} = 0$ (it is a $\\varphi$-derivative of a periodic function). Step 4: apply averaging theorem to conclude $|I(t) - I(0)| = O(\\varepsilon)$.`
    },
    {
      q: `In canonical perturbation theory, what form does the generating function take, and what does each correction term do?`,
      a: `It is a near-identity transformation expanded in $\\varepsilon$: $S(I', \\varphi) = I' \\cdot \\varphi + \\varepsilon S_1 + \\varepsilon^2 S_2 + \\cdots$. The leading term $I' \\cdot \\varphi$ is the identity. Each $S_n$ is chosen to cancel the angle-dependent part of the Hamiltonian at order $\\varepsilon^n$, removing the angle dependence one order at a time.`
    },
    {
      q: `Write the homological equation and explain what is known and what is unknown.`,
      a: `$\\omega(I') \\cdot \\frac{\\partial S_1}{\\partial \\varphi} + H_1(I', \\varphi) = \\bar{H}_1(I')$, equivalently $\\{S_1, H_0\\} + H_1 = \\bar{H}_1$. The known input is the perturbation $H_1$. The unknown is the generator $S_1$. The right side $\\bar{H}_1$ is the angle-average of $H_1$, which cannot be cancelled and becomes the first-order correction to the new Hamiltonian.`
    },
    {
      q: `Why does the angle-average $\\bar{H}_1$ survive into the new Hamiltonian instead of being cancelled?`,
      a: `The operator $\\omega \\cdot \\frac{\\partial}{\\partial \\varphi}$ turns any periodic function into one with zero average, since a derivative of a periodic function integrates to zero over a cycle. So the left side of the homological equation can only ever produce the zero-average part. The average $\\bar{H}_1$ lies outside its range, so it must stay and shift the Hamiltonian: $K = H_0 + \\varepsilon \\bar{H}_1 + O(\\varepsilon^2)$.`
    },
    {
      q: `Solving the homological equation by Fourier series gives $\\hat{S}_{1,k} = i\\hat{H}_{1,k}/(k \\cdot \\omega)$. What is the small-denominator problem?`,
      a: `Each Fourier coefficient of the generator carries the factor $1/(k \\cdot \\omega)$. When some integer combination $k \\cdot \\omega$ comes close to zero (near-resonance), the coefficient $\\hat{S}_{1,k}$ blows up and the near-identity transformation is no longer small. At an exact resonance $k \\cdot \\omega = 0$ the denominator vanishes and that mode cannot be cancelled at all, so the order-by-order series can stop converging.`
    },
    {
      q: `What does the Diophantine condition say, and why does it rescue the perturbation series?`,
      a: `It says $|k \\cdot \\omega| \\geq \\gamma\\,|k|^{-\\tau}$ for all nonzero integer $k$, with fixed $\\gamma, \\tau > 0$. It puts a floor under every denominator. The Fourier coefficients of a smooth perturbation decay faster than any power of $|k|$, so that fast decay beats the controlled $1/(k\\cdot\\omega)$ growth and the corrected series converges. This is the KAM condition under which a torus survives the perturbation.`
    },
    {
      q: `For $H = \\frac{1}{2}p^2 + \\frac{1}{2}q^2 + \\varepsilon q^4$, compute the first-order frequency shift using canonical perturbation theory.`,
      a: `In action-angle variables of the unit oscillator, $q = \\sqrt{2I}\\sin\\varphi$, so $H_1 = q^4 = 4I^2 \\sin^4\\varphi$. The average is $\\bar{H}_1 = 4I^2 \\cdot \\overline{\\sin^4\\varphi} = 4I^2 \\cdot \\frac{3}{8} = \\frac{3}{2}I^2$. The new Hamiltonian is $K(I) = I + \\frac{3}{2}\\varepsilon I^2 + O(\\varepsilon^2)$, so the frequency is $\\omega(I) = \\frac{\\partial K}{\\partial I} = 1 + 3\\varepsilon I + O(\\varepsilon^2)$. The frequency rises with amplitude.`
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Averaging and Canonical Perturbation Theory',
    sections: [
      <>
        <h2>Integrable Systems</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">First Integral Condition</span>
          <div className="lrn-definition-desc">
            <p>{`$\\{H, F\\} = 0$`}</p>
            <p>
              When to use: checking whether a function {`$F$`} is conserved along Hamilton's
              equations.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Involution Condition</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\{F_i, F_j\\} = 0$`} for all {`$i, j = 1, \\ldots, n$`}
            </p>
            <p>
              When to use: verifying that {`$n$`} conserved quantities are compatible (needed for
              Liouville's theorem).
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Level Set of Integrals</span>
          <div className="lrn-definition-desc">
            <p>{`$M_f = \\{x : F_i(x) = f_i, \\; i = 1, \\ldots, n\\}$`}</p>
            <p>
              When to use: defining the invariant torus for a given set of integral values{' '}
              {`$f = (f_1, \\ldots, f_n)$`}.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Topology by Lattice Rank</span>
          <div className="lrn-definition-desc">
            <p>{`$\\mathbb{R}^n/\\Gamma \\cong T^k \\times \\mathbb{R}^{n-k}$`}</p>
            <p>
              When to use: classifying the topology of level sets from the rank {`$k$`} of the
              stationary subgroup {`$\\Gamma$`}. When {`$k = n$`}: compact torus {`$T^n$`}{' '}
              (conditionally periodic). When {`$k < n$`}: mixed periodic/unbounded.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Action-Angle Variables</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Action Variable (1D)</span>
          <div className="lrn-definition-desc">
            <p>{`$I(h) = \\frac{1}{2\\pi} \\oint_{M_h} p \\, dq = \\frac{1}{2\\pi} \\Pi(h)$`}</p>
            <p>
              When to use: constructing action-angle coordinates for a 1D integrable system;{' '}
              {`$\\Pi(h)$`} is the area enclosed by the energy level curve.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Action Variables (nD)</span>
          <div className="lrn-definition-desc">
            <p>
              {`$I_i(f) = \\frac{1}{2\\pi} \\oint_{\\gamma_i} p \\, dq$`}, for{' '}
              {`$i = 1, \\ldots, n$`}
            </p>
            <p>
              When to use: constructing action-angle coordinates in {`$n$`} degrees of freedom;{' '}
              {`$\\gamma_i$`} is the {`$i$`}-th basis 1-cycle of the torus.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Generating Function (1D)</span>
          <div className="lrn-definition-desc">
            <p>{`$S(I, q) = \\int_{q_0}^{q} p \\, dq \\big|_{H = h(I)}$`}</p>
            <p>
              When to use: finding the angle variable from{' '}
              {`$\\varphi = \\frac{\\partial S}{\\partial I}$`} and reconstructing momentum from{' '}
              {`$p = \\frac{\\partial S}{\\partial q}$`}.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Equations of Motion (Action-Angle)</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\dot{I} = 0$`}, {`$\\dot{\\varphi} = \\omega(I)$`}
            </p>
            <p>
              When to use: the canonical form of any integrable Hamiltonian; actions are all first
              integrals and angles wind uniformly.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Multi-Valuedness Periods</span>
          <div className="lrn-definition-desc">
            <p>{`$\\Delta_i \\varphi_j = \\frac{\\partial}{\\partial I_j} (2\\pi I_i) = 2\\pi \\delta_{ij}$`}</p>
            <p>
              When to use: confirming that angle variables are well-defined on the torus with the
              correct {`$2\\pi$`} monodromy.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Nondegeneracy Condition</span>
          <div className="lrn-definition-desc">
            <p>{`$\\det\\!\\left(\\frac{\\partial^2 H}{\\partial I^2}\\right) = \\det\\!\\left(\\frac{\\partial \\omega}{\\partial I}\\right) \\neq 0$`}</p>
            <p>
              When to use: checking whether invariant tori are uniquely labeled by frequencies
              (required for KAM theory and perturbation theory).
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Action for Standard Systems</span>
          <div className="lrn-definition-desc">
            <ul className="lrn-list">
              <li>
                Harmonic oscillator {`$\\frac{1}{2}a^2p^2 + \\frac{1}{2}b^2q^2$`}:{' '}
                {`$I = \\frac{h}{\\omega}$`} where {`$\\omega = ab$`}.
              </li>
              <li>
                General oscillator {`$\\frac{1}{2}p^2 + V(q)$`}:{' '}
                {`$I = \\frac{1}{2\\pi}\\oint p\\,dq$`}.
              </li>
              <li>
                Pendulum (libration) {`$\\frac{1}{2}p^2 - \\cos q$`}, {`$h < 1$`}: numerical.
              </li>
            </ul>
          </div>
        </div>
      </>,

      <>
        <h2>Conditionally-Periodic Motion and Averages</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Conditionally-Periodic Solution</span>
          <div className="lrn-definition-desc">
            <p>{`$\\varphi(t) = \\varphi(0) + \\omega t$`}</p>
            <p>
              When to use: writing the explicit solution on any invariant torus of an integrable
              system.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Independent Frequencies Condition</span>
          <div className="lrn-definition-desc">
            <p>
              {`$k \\cdot \\omega = 0$`}, {`$k \\in \\mathbb{Z}^n \\Rightarrow k = 0$`}
            </p>
            <p>
              When to use: determining whether the trajectory is dense and uniformly distributed on{' '}
              {`$T^n$`} (required for time average = space average).
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Space Average</span>
          <div className="lrn-definition-desc">
            <p>{`$\\bar{f} = (2\\pi)^{-n} \\int_0^{2\\pi} \\cdots \\int_0^{2\\pi} f(\\varphi) \\, d\\varphi_1 \\cdots d\\varphi_n$`}</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Time Average</span>
          <div className="lrn-definition-desc">
            <p>{`$f^*(\\varphi_0) = \\lim_{T\\to\\infty} \\frac{1}{T} \\int_0^T f(\\varphi_0 + \\omega t) \\, dt$`}</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Trajectory Closure by Degeneracy</span>
          <div className="lrn-definition-desc">
            <ul className="lrn-list">
              <li>
                Rank {`$r = 0$`}: closure is {`$T^n$`} (full torus). Dense, equidistributed.
              </li>
              <li>
                Rank {`$1 \\leq r < n$`}: closure is {`$T^{n-r}$`} (sub-torus).
              </li>
              <li>
                Rank {`$r = n-1$`}: closure is {`$T^1 = S^1$`}. Closed curve (periodic).
              </li>
            </ul>
          </div>
        </div>
      </>,

      <>
        <h2>Averaging and Perturbation Theory</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Perturbed System (Close to Integrable)</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\dot{\\varphi} = \\omega(I) + \\varepsilon f(I, \\varphi)$`},{' '}
              {`$\\dot{I} = \\varepsilon g(I, \\varphi)$`}
            </p>
            <p>
              When to use: any system where a small perturbation {`$\\varepsilon$`} breaks exact
              integrability.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Averaged System</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\dot{J} = \\varepsilon \\bar{g}(J)$`},{' '}
              {`$\\bar{g}(J) = (2\\pi)^{-k} \\int g(J, \\varphi) \\, d\\varphi_1 \\cdots d\\varphi_k$`}
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Averaging Theorem Bound</span>
          <div className="lrn-definition-desc">
            <p>
              {`$|I(t) - J(t)| < c \\varepsilon$`} for all {`$t \\in [0, \\frac{1}{\\varepsilon}]$`}
            </p>
            <p>
              When to use: single-frequency ({`$k=1$`}) systems only; gives a rigorous{' '}
              {`$O(\\varepsilon)$`} error bound over the slow time scale.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Hamiltonian Averaging (No Secular Evolution)</span>
          <div className="lrn-definition-desc">
            <p>{`$\\bar{g} = (2\\pi)^{-n} \\int \\frac{\\partial H_1}{\\partial \\varphi} \\, d\\varphi = 0$`}</p>
            <p>
              When to use: nondegenerate Hamiltonian systems; implies the averaged action has zero
              drift (Laplace theorem on planetary semi-major axes).
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Averaging Principle: Scope</span>
          <div className="lrn-definition-desc">
            <ul className="lrn-list">
              <li>
                Single-frequency Hamiltonian: rigorous theorem {`$|I-J| < c\\varepsilon$`} for{' '}
                {`$t \\in [0, \\frac{1}{\\varepsilon}]$`}.
              </li>
              <li>
                Multi-frequency Hamiltonian: unproven rule of thumb. No satisfactory general proof.
              </li>
              <li>Nondegenerate Hamiltonian: {`$\\bar{g} = 0$`} exactly (Laplace theorem).</li>
            </ul>
          </div>
        </div>
      </>,

      <>
        <h2>Adiabatic Invariants</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Adiabatic Invariant Definition</span>
          <div className="lrn-definition-desc">
            <p>
              {`$|I(p(t), q(t); \\varepsilon t) - I(p(0), q(0); 0)| < \\kappa$`} for all{' '}
              {`$t \\in [0, \\frac{1}{\\varepsilon}]$`}
            </p>
            <p>
              When to use: slowly varying Hamiltonians {`$H(p, q; \\lambda)$`} with{' '}
              {`$\\lambda = \\varepsilon t$`}; the action {`$I$`} is preserved to {`$O(\\kappa)$`}{' '}
              over the slow time scale.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Adiabatic Invariant Examples</span>
          <div className="lrn-definition-desc">
            <ul className="lrn-list">
              <li>
                Harmonic oscillator with slowly varying {`$\\omega = ab$`}:{' '}
                {`$I = \\frac{h}{\\omega}$`}. Energy proportional to frequency.
              </li>
              <li>
                Pendulum with slowly varying length {`$L$`}: {`$I = \\frac{h}{\\omega}$`}
                (action). Angular amplitude {`$\\theta_{\\max} \\propto L^{-3/4}$`}.
              </li>
              <li>
                Ball between walls with slowly varying separation {`$l$`}: {`$vl$`} (velocity times
                separation). {`$v \\propto \\frac{1}{l}$`} as walls close.
              </li>
            </ul>
          </div>
        </div>
      </>,

      <>
        <h2>Canonical Perturbation Theory</h2>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Expansions</span>
          <div className="lrn-definition-desc">
            <p>
              {`$H = H_0(I) + \\varepsilon H_1 + \\varepsilon^2 H_2 + \\cdots$`}; generator{' '}
              {`$S = I' \\cdot \\varphi + \\varepsilon S_1 + \\varepsilon^2 S_2 + \\cdots$`}
            </p>
            <p>
              When to use: a near-integrable Hamiltonian where you want new coordinates that remove
              angle dependence order by order.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Homological Equation (first order)</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\omega(I') \\cdot \\frac{\\partial S_1}{\\partial \\varphi} + H_1 = \\bar{H}_1$`},
              equivalently {`$\\{S_1, H_0\\} + H_1 = \\bar{H}_1$`}
            </p>
            <p>
              When to use: solving for the first-order generator {`$S_1$`}; the average{' '}
              {`$\\bar{H}_1$`} is the surviving correction{' '}
              {`$K = H_0 + \\varepsilon \\bar{H}_1 + O(\\varepsilon^2)$`}.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Fourier Solution and Small Denominators</span>
          <div className="lrn-definition-desc">
            <p>{`$\\hat{S}_{1,k}(I') = \\frac{i\\,\\hat{H}_{1,k}}{k \\cdot \\omega}, \\quad k \\neq 0$`}</p>
            <p>
              When to use: reading off the generator mode by mode. Each carries{' '}
              {`$1/(k \\cdot \\omega)$`}; near-resonant {`$k \\cdot \\omega \\to 0$`} gives small
              denominators that can break convergence.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Diophantine (KAM) Condition</span>
          <div className="lrn-definition-desc">
            <p>
              {`$|k \\cdot \\omega| \\geq \\gamma\\,|k|^{-\\tau}$`} for all{' '}
              {`$k \\in \\mathbb{Z}^n \\setminus \\{0\\}$`}
            </p>
            <p>
              When to use: checking whether a torus survives the perturbation; frequencies meeting
              this bound control small denominators, so the torus persists slightly deformed.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Quartic Oscillator Frequency Shift</span>
          <div className="lrn-definition-desc">
            <p>
              {`$H = \\frac{1}{2}p^2 + \\frac{1}{2}q^2 + \\varepsilon q^4$`}:{' '}
              {`$\\omega(I) = 1 + 3\\varepsilon I + O(\\varepsilon^2)$`}
            </p>
            <p>
              When to use: worked benchmark; from {`$\\bar{H}_1 = \\frac{3}{2} I^2$`} and{' '}
              {`$\\omega = \\frac{\\partial K}{\\partial I}$`}.
            </p>
          </div>
        </div>
      </>
    ]
  },
  customCss: `
    .MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }
  `
}

export default function AveragingAndCanonicalPerturbationTheory() {
  return <LearningTemplate config={config} />
}
