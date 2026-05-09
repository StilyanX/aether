import { LearningTemplate } from '../../../../../components/learning/learning-template'
import 'mafs/core.css'
import 'katex/dist/katex.min.css'
import { Mafs, Coordinates, Plot, Point, Text, LaTeX } from 'mafs'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { AveragingViz as AveragingVizAether } from '../../../../../components/viz/physics-viz/modules'

// Phase portrait: closed orbit on energy level (1D integrable system)
function PhasePortraitViz({ C }) {
  return (
    <div className="lrn-graph">
      <Mafs viewBox={{ x: [-5, 5], y: [-3.5, 3.5] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: false }}
          yAxis={{ lines: false, labels: false }}
        />
        {/* Closed orbit - harmonic oscillator ellipse */}
        <Plot.Parametric
          xy={t => [3.5 * Math.cos(t), 2.2 * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          color={C.fg}
          style="solid"
          weight={2}
        />
        {/* Smaller orbit */}
        <Plot.Parametric
          xy={t => [2 * Math.cos(t), 1.3 * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          color={C.accent}
          style="solid"
          weight={1.5}
        />
        {/* Smallest orbit */}
        <Plot.Parametric
          xy={t => [0.9 * Math.cos(t), 0.6 * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          color={C.dim}
          style="solid"
          weight={1.5}
        />
        {/* Labels */}
        <Text x={4.1} y={0.3} size={24} color={C.fg} attach="e">
          p
        </Text>
        <Text x={0.3} y={3.2} size={24} color={C.fg} attach="n">
          q
        </Text>
        <LaTeX at={[4.0, -0.6]} tex="M_h" color={C.accent} />
      </Mafs>
    </div>
  )
}

// 2D torus trajectory visualizer (rational vs irrational frequency)
function TorusTrajectoryViz({ C }) {
  // Unwrapped torus: a line with slope omega2/omega1 on a square [0,2pi]x[0,2pi]
  // We show two cases: rational (p/q=1/2) and irrational (approx 1/sqrt(2))
  const rationalSlope = 0.5
  const irrationalSlope = 1 / Math.SQRT2

  const rationalPoints = []
  for (let t = 0; t <= 4 * Math.PI; t += 0.02) {
    const x = ((t % (2 * Math.PI)) / (2 * Math.PI)) * 4 - 5
    const y = (((rationalSlope * t) % (2 * Math.PI)) / (2 * Math.PI)) * 2.4 - 1.2
    rationalPoints.push([x, y])
  }

  const irrationalPointsA = []
  for (let t = 0; t <= 8 * Math.PI; t += 0.015) {
    const x = ((t % (2 * Math.PI)) / (2 * Math.PI)) * 4 + 1
    const y = (((irrationalSlope * t) % (2 * Math.PI)) / (2 * Math.PI)) * 2.4 - 1.2
    irrationalPointsA.push([x, y])
  }

  return (
    <div className="lrn-graph">
      <Mafs viewBox={{ x: [-5.5, 5.5], y: [-2, 2] }} preserveAspectRatio={false} height={240}>
        {/* Left panel: rational */}
        <Plot.Parametric
          xy={t => {
            const x = ((t % (2 * Math.PI)) / (2 * Math.PI)) * 4 - 5
            const y = (((rationalSlope * t) % (2 * Math.PI)) / (2 * Math.PI)) * 2.4 - 1.2
            return [x, y]
          }}
          t={[0, 4 * Math.PI]}
          color={C.accent}
          style="solid"
          weight={1.5}
        />
        {/* Right panel: irrational */}
        <Plot.Parametric
          xy={t => {
            const x = ((t % (2 * Math.PI)) / (2 * Math.PI)) * 4 + 1
            const y = (((irrationalSlope * t) % (2 * Math.PI)) / (2 * Math.PI)) * 2.4 - 1.2
            return [x, y]
          }}
          t={[0, 8 * Math.PI]}
          color={C.fg}
          style="solid"
          weight={1}
        />
        {/* Border boxes */}
        <Plot.Parametric
          xy={t => [-5 + 4 * Math.cos(t), 1.2 * Math.sin(t) + 0]}
          t={[0, 2 * Math.PI]}
          color={C.dim}
          style="dashed"
          weight={1}
        />
        {/* Labels */}
        <LaTeX at={[-3, -1.7]} tex={String.raw`\omega_1/\omega_2 = 1/2`} color={C.accent} />
        <LaTeX at={[3, -1.7]} tex={String.raw`\omega_1/\omega_2 = 1/\sqrt{2}`} color={C.fg} />
        <Text x={-3} y={1.6} size={24} color={C.dim}>
          RATIONAL: CLOSED
        </Text>
        <Text x={3} y={1.6} size={24} color={C.dim}>
          IRRATIONAL: DENSE
        </Text>
      </Mafs>
    </div>
  )
}

// Averaging theorem: true vs. averaged solution staying close
function AveragingViz({ C }) {
  return (
    <div className="lrn-graph">
      <Mafs viewBox={{ x: [-0.5, 6.5], y: [-1.8, 2.5] }} preserveAspectRatio={false} height={240}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: false }}
          yAxis={{ lines: false, labels: false }}
        />
        {/* Averaged system J(t) - slowly evolving */}
        <Plot.OfX y={x => 0.8 * Math.sin(0.4 * x)} color={C.accent} weight={2.5} style="solid" />
        {/* True system I(t) - rapidly oscillating around J(t) */}
        <Plot.OfX
          y={x => 0.8 * Math.sin(0.4 * x) + 0.18 * Math.sin(5 * x)}
          color={C.fg}
          weight={1.5}
          style="solid"
        />
        {/* epsilon band */}
        <Plot.OfX
          y={x => 0.8 * Math.sin(0.4 * x) + 0.2}
          color={C.faint}
          weight={1}
          style="dashed"
        />
        <Plot.OfX
          y={x => 0.8 * Math.sin(0.4 * x) - 0.2}
          color={C.faint}
          weight={1}
          style="dashed"
        />
        <Text x={3} y={2.2} size={24} color={C.fg}>
          I(t) true solution
        </Text>
        <Text x={3} y={1.7} size={24} color={C.accent}>
          J(t) averaged
        </Text>
        <LaTeX at={[5.5, 0.55]} tex={String.raw`O(\varepsilon)`} color={C.dim} />
      </Mafs>
    </div>
  )
}

const config = {
  cssPrefix: 'acpt',
  source: 'Mathematical Methods of Classical Mechanics - Arnold',
  documentTitle: 'Averaging and Canonical Perturbation Theory - AETHER',
  learning: {
    groupTitle: 'Part IV: Perturbation Theory and Advanced Topics',
    category: 'Mathematical Methods of Classical Mechanics (Arnold)',
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
          A <strong>Hamiltonian system</strong> describes how a physical system evolves. The phase
          space has {`$2n$`} dimensions, where {`$n$`} is the number of degrees of freedom. A point
          in phase space gives you the full state: all positions {`$q_1, \\ldots, q_n$`} and all
          momenta {`$p_1, \\ldots, p_n$`}.
        </p>

        <p>
          A <strong>first integral</strong> (also called a conserved quantity) is a function{' '}
          {`$F(p, q)$`} that does not change along trajectories. The condition is:{' '}
          {`$\\{H, F\\} = 0$`}, where {`$\\{H, F\\}$`} is the <strong>Poisson bracket</strong>:{' '}
          {`$\\{H, F\\} = \\sum_i \\frac{\\partial H}{\\partial p_i}\\frac{\\partial F}{\\partial q_i} - \\frac{\\partial H}{\\partial q_i}\\frac{\\partial F}{\\partial p_i}$`}
          . It measures how much {`$F$`} changes along the flow of {`$H$`}. When it is zero, {`$F$`}{' '}
          does not change. Geometrically, {`$F = \\mathrm{const}$`} defines a surface that the
          trajectory never leaves.
        </p>

        <p>
          <strong>What involution means.</strong> Two functions {`$F_i$`} and {`$F_j$`} are{' '}
          <strong>in involution</strong> if their Poisson bracket is zero: {`$\\{F_i, F_j\\} = 0$`}.
          This is a compatibility condition. It means the two conserved quantities are compatible:
          knowing one does not force the other to change.
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
          define the <strong>Hamiltonian vector field</strong> {`$X_{F_i}$`}, the unique vector
          field satisfying {`$\\omega^2(X_{F_i}, \\cdot) = dF_i(\\cdot)$`}. These {`$n$`} vector
          fields on {`$M_f$`} are linearly independent, and they commute:{' '}
          {`$[X_{F_i}, X_{F_j}] = X_{\\{F_i, F_j\\}} = X_0 = 0$`}.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The Poisson bracket and the Lie bracket of vector fields are compatible: the Lie bracket
            of two Hamiltonian vector fields equals the Hamiltonian vector field of their Poisson
            bracket, {`$[X_{F_i}, X_{F_j}] = X_{\\{F_i, F_j\\}}$`}. Since {`$\\{F_i, F_j\\} = 0$`}{' '}
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
          given by {`$g(t) = g^t x_0$`} is a local diffeomorphism. The{' '}
          <strong>stationary group</strong> {`$\\Gamma = \\{t : g^t x_0 = x_0\\}$`} is a discrete
          subgroup of {`$\\mathbb{R}^n$`}. On a compact manifold, {`$\\Gamma$`} must be a{' '}
          <strong>lattice</strong> (it spans all of {`$\\mathbb{R}^n$`}). Then{' '}
          {`$M \\cong \\mathbb{R}^n / \\Gamma \\cong T^n$`}.
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
          <strong>Constructive proof.</strong> Pick the nonzero vector {`$e_1 \\in \\Gamma$`}{' '}
          closest to the origin. Then {`$\\Gamma \\cap \\mathbb{R} e_1 = \\mathbb{Z} e_1$`}. If
          there are elements of {`$\\Gamma$`} not on this line, pick the one closest to it in the
          transverse direction; call it {`$e_2$`}. Continue. At each step the new vector is the one
          nearest to the span of the previous ones. After at most {`$n$`} steps,{' '}
          {`$\\Gamma = \\mathbb{Z} e_1 + \\cdots + \\mathbb{Z} e_k$`}.
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
            {`$\\omega^2 = \\sum_i dI_i \\wedge d\\varphi_i$`}. (Here {`$\\omega^2$`} is Arnold's
            notation for the symplectic 2-form - not the square of a frequency. It is the geometric
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
              invariant and increases monotonically with energy.
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
          {`$h$`}. The key point is that {`$I$`} is well-defined and increases monotonically from{' '}
          {`$0$`} (at the stable equilibrium {`$h = -1$`}) to a maximum at the separatrix{' '}
          {`$h = 1$`}.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does the action approach a finite value at the separatrix from below?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The separatrix is a homoclinic orbit with finite area. The period diverges (it takes
              infinitely long to reach the unstable equilibrium), but the area stays finite.
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
          <div className="lrn-faded-phase">
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
          have genuinely different frequency vectors.
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
          <strong>Historical note.</strong> Gauss discovered the averaging principle by distributing
          the mass of each planet proportionally along its orbit. There is no satisfactory general
          proof for {`$n > 1$`} frequencies.
        </p>

        <p>
          <strong>Crucial result for Hamiltonian systems.</strong> In a nondegenerate Hamiltonian
          system, the average of {`$g$`} is exactly zero: {`$\\bar{g} = 0$`}. The averaged actions
          have no secular drift. This is the <strong>Laplace theorem</strong>: the semi-major axes
          of planetary orbits have no secular perturbations (to first order).
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
              semi-major axes are stable.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">General System</span>
            <p>
              {`$\\bar{g}$`} need not be zero. Actions can drift secularly. Averaging principle is a
              heuristic without general proof.
            </p>
          </div>
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

        <AveragingVizAether />

        <p>
          <strong>Scope of the theorem.</strong> The theorem is proved only for single-frequency (
          {`$k=1$`}) systems. For multi-frequency systems, no satisfactory general proof exists.
          Arnold's text explicitly notes this gap. The averaging principle is believed to hold but
          is not proved in general.
        </p>
      </>,

      <>
        <h2>Proof of the Averaging Theorem</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            To show {`$I(t)$`} and {`$J(t)$`} stay close, you need to control the difference{' '}
            {`$I - J$`}. What kind of change of variables might convert the rapidly oscillating
            terms into something small?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              A near-identity transformation {`$P = I + \\varepsilon k(I, \\varphi)$`} that absorbs
              the oscillating part of {`$g$`} into the correction {`$k$`}.
            </p>
          </details>
        </div>

        <p>
          <strong>Proof strategy.</strong> The proof uses the method of variation of constants.
          Define new variables {`$P = I + \\varepsilon k(I, \\varphi)$`}, where {`$k$`} is chosen to
          cancel the rapidly oscillating part of {`$g$`}.
        </p>

        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Step 1: Choose k</span>
            <p className="lrn-step-content">
              We need {`$\\frac{dk}{d\\varphi} = -\\frac{1}{\\omega} \\tilde{g}$`}. Define{' '}
              {`$k(P, \\varphi) = -\\int_0^\\varphi \\frac{\\tilde{g}(P, \\psi)}{\\omega(P)} \\, d\\psi$`}
              , where {`$\\tilde{g} = g - \\bar{g}$`} is the zero-mean part of {`$g$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 2: Equation for P</span>
            <p className="lrn-step-content">
              Compute{' '}
              {`$\\dot{P} = \\dot{I} + \\varepsilon \\frac{\\partial k}{\\partial I} \\dot{I} + \\varepsilon \\frac{\\partial k}{\\partial \\varphi} \\dot{\\varphi}$`}
              . By construction, the {`$O(\\varepsilon)$`} oscillating terms cancel. What remains is{' '}
              {`$\\dot{P} = \\varepsilon \\bar{g}(P) + R$`}, where the remainder {`$R$`} is of order{' '}
              {`$\\varepsilon^2$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 3: Comparison</span>
            <p className="lrn-step-content">
              The averaged system satisfies {`$\\dot{J} = \\varepsilon \\bar{g}(J)$`}. The
              difference {`$P - J$`} has right-hand side of order {`$\\varepsilon^2$`}. By the
              Gronwall inequality, {`$|P(t) - J(t)| = O(\\varepsilon)$`} over time{' '}
              {`$\\frac{1}{\\varepsilon}$`}.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Step 4: Convert Back</span>
            <p className="lrn-step-content">
              Since {`$P = I + \\varepsilon k$`} and {`$k$`} is bounded,{' '}
              {`$|I - P| = O(\\varepsilon)$`}. Therefore{' '}
              {`$|I(t) - J(t)| \\leq |I - P| + |P - J| = O(\\varepsilon)$`}.
            </p>
          </div>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
            <p>
              The Gronwall lemma application: (1) set up the integral inequality for {`$|P - J|$`};
              (2) bound the right-hand side by {`$c \\varepsilon^2 t$`}; (3) apply Gronwall to get{' '}
              {`$|P(t) - J(t)| \\leq C \\varepsilon^2 t$`}; (4) set{' '}
              {`$t = \\frac{1}{\\varepsilon}$`} to get {`$C\\varepsilon$`}.
            </p>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
            <ol className="lrn-list">
              <li>Write the ODE for {`$u(t) = |P(t) - J(t)|$`}.</li>
              <li>
                Bound {`$\\dot{u}$`} using the {`$O(\\varepsilon^2)$`} remainder.
              </li>
              <li>Integrate to get {`$u(t) \\leq C\\varepsilon^2 t$`}.</li>
            </ol>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>
              Verify that at {`$t = \\frac{1}{\\varepsilon}$`}, the bound{' '}
              {`$C\\varepsilon^2 \\cdot \\frac{1}{\\varepsilon} = C\\varepsilon$`} is indeed{' '}
              {`$O(\\varepsilon)$`}.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the remainder {`$R$`} being {`$O(\\varepsilon^2)$`} suffice to control the
            difference over time {`$\\frac{1}{\\varepsilon}$`}?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Because integrating {`$O(\\varepsilon^2)$`} over time {`$\\frac{1}{\\varepsilon}$`}{' '}
              gives {`$O(\\varepsilon^2 \\cdot \\frac{1}{\\varepsilon}) = O(\\varepsilon)$`}. The
              small size of {`$R$`} and the limited time interval conspire to keep the error small.
            </p>
          </details>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Averaging Principle (Heuristic)</span>
            <p>
              Replace oscillating system by its average. No rigorous error bound. No general proof
              for multi-frequency. Used broadly in practice.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Averaging Theorem (Rigorous)</span>
            <p>
              Proves {`$|I(t) - J(t)| < c\\varepsilon$`} for{' '}
              {`$t \\in [0, \\frac{1}{\\varepsilon}]$`}. Single-frequency only. Method of variation
              of constants.
            </p>
          </div>
        </div>
      </>,

      <>
        <h2>Adiabatic Invariants</h2>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A pendulum swings with slowly increasing length. Do you expect the amplitude to grow,
            shrink, or stay roughly constant as the length increases?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The amplitude grows. The action {`$I = \\frac{h}{\\omega}$`} is conserved. For small
              swings, {`$h \\approx \\frac{1}{2}\\omega^2 A^2$`} where {`$A$`} is amplitude, so{' '}
              {`$A^2 = \\frac{2h}{\\omega^2} = \\frac{2I}{\\omega}$`}. As {`$\\omega$`} decreases
              (longer pendulum), {`$A^2 = \\frac{2I}{\\omega}$`} grows. The amplitude grows even as
              the energy drops.
            </p>
          </details>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Adiabatic Invariant</span>
          <div className="lrn-definition-desc">
            <p>
              A quantity {`$I(p, q; \\lambda)$`} is an <strong>adiabatic invariant</strong> for{' '}
              {`$H(p, q; \\varepsilon t)$`} if{' '}
              {`$|I(p(t), q(t); \\varepsilon t) - I(p(0), q(0); 0)| < \\kappa$`} for all{' '}
              {`$t \\in [0, \\frac{1}{\\varepsilon}]$`}. The parameter{' '}
              {`$\\lambda = \\varepsilon t$`} changes slowly, and {`$I$`} stays within {`$\\kappa$`}{' '}
              of its initial value for the entire slow time scale.
            </p>
          </div>
        </div>

        <p>
          <strong>The action is an adiabatic invariant.</strong> For a slowly varying 1D
          Hamiltonian, the action variable{' '}
          {`$I(p, q; \\lambda) = \\frac{1}{2\\pi} \\Pi(h; \\lambda)$`} (the area enclosed by the
          phase curve divided by {`$2\\pi$`}) is an adiabatic invariant.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">First Integral</span>
            <p>
              Exactly conserved for all time: {`$F(p(t), q(t)) = F(p(0), q(0))$`} exactly. Does not
              require slow variation of parameters.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Adiabatic Invariant</span>
            <p>
              Only approximately conserved (to {`$O(\\varepsilon)$`}) over time interval{' '}
              {`$[0, \\frac{1}{\\varepsilon}]$`}. Requires slowly varying parameter. Every first
              integral is adiabatically invariant, but not vice versa.
            </p>
          </div>
        </div>

        <p>
          <strong>Adiabatic invariant of the harmonic oscillator.</strong> For{' '}
          {`$H = \\frac{a^2}{2}p^2 + \\frac{b^2}{2}q^2$`} with {`$\\omega = ab$`} slowly varying:
        </p>
        <div className="lrn-eq lrn-eq-display">{`$$I = \\frac{h}{\\omega}$$`}</div>
        <p>
          As {`$\\omega$`} changes slowly, {`$I = \\frac{h}{\\omega}$`} remains approximately
          constant. If {`$\\omega$`} doubles, the energy {`$h = I\\omega$`} doubles too.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The ratio {`$I = \\frac{h}{\\omega}$`} is the energy divided by the frequency. For a
            quantum harmonic oscillator, this is proportional to the quantum number {`$n$`}{' '}
            (Planck's {`$E = n\\hbar\\omega$`}). The adiabatic invariant is the classical precursor
            of the quantum number: it is the quantity that does not change when the system changes
            slowly, and it determines which quantum state the system ends up in after a slow change.
          </p>
        </div>

        <p>
          <strong>Example: elastic ball between slowly varying walls.</strong> A ball bouncing
          between two walls separated by distance {`$l$`} has adiabatic invariant {`$vl$`} (velocity
          times wall separation). As the walls move together slowly, {`$vl = \\text{const}$`}, so
          the velocity increases as {`$v \\propto \\frac{1}{l}$`}.
        </p>

        <div className="lrn-callout lrn-warning">
          <span className="lrn-callout-label">Warning</span>
          <p>
            The ball-between-walls result does not formally follow from the averaging theorem
            because the collisions are instantaneous - the velocity jumps discontinuously - and the
            averaging theorem requires smooth equations of motion. The result holds empirically but
            requires separate justification.
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
              {`$K = H_0(I, \\lambda) + \\varepsilon \\frac{\\partial S}{\\partial \\lambda}$`}.
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
      </>
    ]
  },
  practice: [
    {
      q: `What condition must $n$ functions $F_1, \\ldots, F_n$ satisfy to be "in involution"?`,
      a: `Their pairwise Poisson brackets must all vanish: $\\{F_i, F_j\\} = 0$ for all $i, j$. This means the flows generated by each $F_i$ commute with each other. The integrals are compatible: knowing one does not force the other to change, so they can all be simultaneously constant along trajectories.`
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
      q: `Outline the proof of the averaging theorem (method of variation of constants).`,
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
      a: `The adiabatic invariant is $vl$ (velocity times wall separation). As the walls slowly come together, $vl = \\text{const}$, so $v$ increases as $\\frac{1}{l}$. Note: this does not formally follow from the averaging theorem because the collisions are instantaneous - the velocity jumps discontinuously - and the theorem requires smooth equations of motion. The result holds empirically.`
    },
    {
      q: `Outline the proof that the action variable is adiabatically invariant.`,
      a: `Step 1: transform $(p, q) \\to (I, \\varphi)$ using action-angle variables for the frozen Hamiltonian $H(\\cdot; \\lambda)$. The new Hamiltonian is $K = H_0(I, \\lambda) + \\frac{\\varepsilon \\partial S}{\\partial \\lambda}$. Step 2: equations are $\\dot{I} = \\varepsilon g$ where $g = -\\frac{\\partial\\frac{\\varepsilon \\partial S}{\\partial \\lambda}}{\\partial \\varphi}$. Step 3: average $g$ over $\\varphi$: $\\bar{g} = 0$ (it is a $\\varphi$-derivative of a periodic function). Step 4: apply averaging theorem to conclude $|I(t) - I(0)| = O(\\varepsilon)$.`
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
            <p>{`$\\frac{\\mathbb{R}^n}{\\Gamma \\cong T^k} \\times \\mathbb{R}^{n-k}$`}</p>
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
              <li>Multi-frequency Hamiltonian: heuristic only. No satisfactory general proof.</li>
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
                Pendulum with slowly varying length: {`$I$`} (action). Amplitude{' '}
                {`$\\propto (\\frac{I}{I_0})^{\\tfrac{3}{4}}$`}.
              </li>
              <li>
                Ball between walls with slowly varying separation {`$l$`}: {`$vl$`} (velocity times
                separation). {`$v \\propto \\frac{1}{l}$`} as walls close.
              </li>
            </ul>
          </div>
        </div>
      </>
    ]
  },
  customCss: `
    .MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }
  `
}

export default function AveragingAndCanonicalPerturbationTheory() {
  const C = useVizColors()
  return <LearningTemplate config={config} />
}
