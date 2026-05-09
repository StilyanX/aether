import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { GeneratingFunctionGeom } from '../../../../../components/viz/physics-viz/modules'

function CanonicalTransformations() {
  const config = {
    learning: {
      groupTitle: 'Part III: Hamiltonian Mechanics and Canonical Formalism',
      category: 'Classical Mechanics',
      title: 'Canonical Transformations',
      subtitle: "Coordinate changes in phase space that preserve the form of Hamilton's equations"
    },
    units: [
      {
        title: 'Canonical Transformations',
        subtitle:
          "Coordinate changes in phase space that preserve the form of Hamilton's equations",
        cards: [
          {
            title: 'Overview',
            content: (
              <>
                <p>
                  In Lagrangian mechanics, you can freely relabel the positions without breaking
                  anything. Hamiltonian mechanics gives you more freedom: you can mix positions and
                  momenta. The transformations that keep Hamilton's equations intact are called
                  canonical transformations, and they are the natural symmetries of Hamiltonian
                  mechanics.
                </p>
                <ul className="lrn-list">
                  <li>
                    The symplectic condition: canonical transformations preserve a certain notion of
                    signed area in phase space
                  </li>
                  <li>
                    The Poincaré-Cartan integral invariant: a quantity every tube of trajectories
                    conserves
                  </li>
                  <li>
                    Generating functions: the practical tool for building canonical transformations
                  </li>
                  <li>{`The four types $S_1, S_2, S_3, S_4$ and why there are $2^n$ of them`}</li>
                  <li>Examples: identity, point transformations, exchange, momentum shift</li>
                  <li>
                    The connection to Hamilton-Jacobi theory: finding a transformation that kills
                    the Hamiltonian
                  </li>
                </ul>
              </>
            )
          },
          {
            title: 'What a Canonical Transformation Is',
            content: (
              <>
                <p>
                  The choice of coordinates matters. A planet orbiting a star looks complicated in
                  Cartesian coordinates. In polar coordinates, the rotational symmetry is visible:
                  the angle becomes cyclic, its conjugate momentum (angular momentum) is conserved,
                  and one equation of motion disappears. The right coordinates reveal structure the
                  wrong ones hide.
                </p>
                <p>
                  A <strong>canonical transformation</strong> is a smooth invertible map on phase
                  space:
                </p>
                <div className="lrn-eq-display">
                  {`$$(q,\\, p) \\;\\longmapsto\\; (Q,\\, P) = \\bigl(Q(q,p,t),\\; P(q,p,t)\\bigr)$$`}
                </div>
                <p>
                  that preserves the symplectic structure. Think of phase space as having its own
                  notion of area: a small region spanned by position displacement {`$\\delta q$`}{' '}
                  and momentum displacement {`$\\delta p$`} has "symplectic area"{' '}
                  {`$\\delta p \\cdot \\delta q$`}. The symplectic condition says this area is the
                  same in both coordinate systems:
                </p>
                <div className="lrn-eq-display">
                  {`$$\\sum_{i=1}^n dP_i \\wedge dQ_i = \\sum_{i=1}^n dp_i \\wedge dq_i$$`}
                </div>
                <p>
                  The symbol {`$\\wedge$`} is the wedge product: {`$dp \\wedge dq$`} measures signed
                  area in the {`$(q, p)$`} plane, positive for one orientation, negative for the
                  other. The condition says the new coordinates measure signed area identically to
                  the old ones.
                </p>
                <p>
                  An equivalent condition uses Poisson brackets. A transformation is canonical if
                  and only if:
                </p>
                <div className="lrn-eq-display">
                  {`$$\\{Q_i, P_j\\} = \\delta_{ij}, \\qquad \\{Q_i, Q_j\\} = 0, \\qquad \\{P_i, P_j\\} = 0$$`}
                </div>
                <p>
                  where the brackets use the original {`$(q, p)$`} coordinates and{' '}
                  {`$\\delta_{ij} = 1$`} when {`$i = j$`} and {`$0$`} otherwise. When these hold,
                  Hamilton's equations take the same form in {`$(Q, P)$`} as they did in{' '}
                  {`$(q, p)$`}.
                </p>
                <div className="lrn-insight">
                  A canonical transformation is to Hamiltonian mechanics what a rotation is to
                  Euclidean geometry. Rotating the axes changes nothing about distances. A canonical
                  transformation changes nothing about the symplectic structure or the form of
                  Hamilton's equations.
                </div>
              </>
            )
          },
          {
            title: 'The Poincaré-Cartan Integral Invariant',
            content: (
              <>
                <p>
                  This card covers genuinely advanced material. The idea is deep but can be stated
                  concretely.
                </p>
                <p>
                  Imagine a cloud of particles, each moving under the same Hamiltonian from slightly
                  different starting conditions. The cloud sweeps out a tube in phase space as time
                  passes. Now draw a closed loop that winds once around this tube. Compute:
                </p>
                <div className="lrn-eq-display">
                  {`$$\\oint_\\gamma \\left( \\sum_{i=1}^n p_i\\,dq_i - H\\,dt \\right)$$`}
                </div>
                <p>
                  This integral measures something about the loop: at each point, you multiply each
                  momentum component by the corresponding infinitesimal position step, sum up, and
                  subtract {`$H$`} times the infinitesimal time step. The remarkable fact: draw the
                  loop at any other time, so long as it still winds once around the same tube, and
                  you get the same number.
                </p>
                <p>
                  This is the <strong>Poincaré-Cartan integral invariant theorem</strong>. The
                  integrand {`$\\omega^1 = \\sum_i p_i\\,dq_i - H\\,dt$`} is called the
                  Poincaré-Cartan form. Hamiltonian dynamics preserves the integral of{' '}
                  {`$\\omega^1$`} around any loop encircling a tube of trajectories, regardless of
                  when you take the loop:
                </p>
                <div className="lrn-eq-display">
                  {`$$\\oint_{\\gamma_1} p\\,dq - H\\,dt = \\oint_{\\gamma_2} p\\,dq - H\\,dt$$`}
                </div>
                <p>
                  A transformation {`$(q, p) \\to (Q, P)$`} is canonical if and only if it preserves{' '}
                  {`$\\omega^1$`} as an integral invariant: every loop that encircles the same tube
                  gives the same integral before and after the transformation.
                </p>
              </>
            )
          },
          {
            title: 'Generating Functions',
            content: (
              <>
                <p>
                  The practical way to construct a canonical transformation is through a{' '}
                  <strong>generating function</strong>: a single scalar that encodes the entire
                  transformation through its partial derivatives. The most common type takes the old
                  positions and the new positions as arguments:
                </p>
                <div className="lrn-eq-display">{`$$S_1 = S_1(q,\\, Q,\\, t)$$`}</div>
                <p>Given {`$S_1$`}, the old and new momenta are:</p>
                <div className="lrn-eq-display">
                  {`$$p_i = \\frac{\\partial S_1}{\\partial q_i}, \\qquad P_i = -\\frac{\\partial S_1}{\\partial Q_i}$$`}
                </div>
                <p>
                  The minus sign on {`$P$`} comes directly from the requirement that the
                  transformation preserves the Poincaré-Cartan form. The condition{' '}
                  {`$p\\,dq - P\\,dQ = dS_1$`} expands to exactly these two equations, forcing the
                  sign.
                </p>
                <p>The transformation is canonical provided:</p>
                <div className="lrn-eq-display">
                  {`$$\\det\\!\\left(\\frac{\\partial^2 S_1}{\\partial q_i\\, \\partial Q_j}\\right) \\neq 0$$`}
                </div>
                <p>
                  This determinant condition says {`$(q, Q)$`} serve as independent coordinates:
                  knowing both the old and new positions pins down a unique point, so you can solve
                  for {`$(Q, P)$`} as functions of {`$(q, p)$`}.
                </p>
                <div className="lrn-callout">
                  <strong>Why generating functions exist.</strong> The symplectic condition{' '}
                  {`$dP \\wedge dQ = dp \\wedge dq$`} is equivalent to {`$d(p\\,dq - P\\,dQ) = 0$`}:
                  the expression {`$p\\,dq - P\\,dQ$`} has zero exterior derivative, meaning it is
                  locally an exact differential. So there exists a function {`$S_1$`} with{' '}
                  {`$dS_1 = p\\,dq - P\\,dQ$`}. That function is the generating function.
                </div>
                <GeneratingFunctionGeom />
              </>
            )
          },
          {
            title: 'The Four Types of Generating Functions',
            content: (
              <>
                <p>
                  The {`$S_1(q, Q)$`} type uses old positions and new positions. But for the
                  identity transformation {`$Q = q$`}, the determinant condition fails: knowing both
                  the old and new positions tells you nothing when they are equal. Near the
                  identity, {`$S_1$`} is ill-conditioned. The fix is to swap {`$Q$`} for {`$P$`}
                  via a Legendre transform. Define {`$S_2(q, P) = S_1 + PQ$`}. The relations become:
                </p>
                <div className="lrn-eq-display">
                  {`$$p_i = \\frac{\\partial S_2}{\\partial q_i}, \\qquad Q_i = \\frac{\\partial S_2}{\\partial P_i}$$`}
                </div>
                <p>
                  No minus signs. The identity transformation corresponds to{' '}
                  {`$S_2 = \\sum_i P_i q_i$`}, giving {`$p_i = P_i$`} and {`$Q_i = q_i$`}. {`$S_2$`}{' '}
                  is the natural type for transformations near the identity and for infinitesimal
                  canonical transformations.
                </p>
                <p>
                  For {`$n$`} degrees of freedom, you can independently choose, for each index{' '}
                  {`$i$`}, whether to keep {`$q_i$`} or replace it with {`$P_i$`} via a partial
                  Legendre transform. This gives {`$2^n$`} possible types. The four standard types
                  for one degree of freedom are:
                </p>
                <ul className="lrn-list">
                  <li>
                    {`$S_1(q, Q)$`}: old and new positions.{' '}
                    {`$p = \\frac{\\partial S_1}{\\partial q}$`},{' '}
                    {`$P = -\\frac{\\partial S_1}{\\partial Q}$`}.
                  </li>
                  <li>
                    {`$S_2(q, P)$`}: old position, new momentum.{' '}
                    {`$p = \\frac{\\partial S_2}{\\partial q}$`},{' '}
                    {`$Q = \\frac{\\partial S_2}{\\partial P}$`}. Identity is {`$S_2 = Pq$`}.
                  </li>
                  <li>
                    {`$S_3(p, Q)$`}: old momentum, new position.{' '}
                    {`$q = -\\frac{\\partial S_3}{\\partial p}$`},{' '}
                    {`$P = -\\frac{\\partial S_3}{\\partial Q}$`}.
                  </li>
                  <li>
                    {`$S_4(p, P)$`}: old and new momenta.{' '}
                    {`$q = -\\frac{\\partial S_4}{\\partial p}$`},{' '}
                    {`$Q = \\frac{\\partial S_4}{\\partial P}$`}.
                  </li>
                </ul>
                <p>
                  Each type covers a different open subset of all canonical transformations.
                  Together they cover every canonical transformation locally.
                </p>
              </>
            )
          },
          {
            title: 'Examples',
            content: (
              <>
                <p>
                  Several canonical transformations appear throughout classical mechanics. Each one
                  illustrates a different use of the generating function machinery.
                </p>
                <ul className="lrn-list">
                  <li>
                    <strong>Identity.</strong> {`$S_2 = \\sum_i P_i q_i$`} gives {`$Q_i = q_i$`},{' '}
                    {`$P_i = p_i$`}. No change.
                  </li>
                  <li>
                    <strong>Point transformation.</strong> Any invertible relabeling of positions{' '}
                    {`$Q_i = f_i(q)$`} extends canonically. Take {`$S_2 = \\sum_i P_i f_i(q)$`}. The
                    new momenta follow automatically:{' '}
                    {`$p_i = \\sum_j P_j \\frac{\\partial f_j}{\\partial q_i}$`}. The Jacobian of
                    the coordinate change determines the new momenta. Every switch from Cartesian to
                    polar or spherical coordinates is a point transformation.
                  </li>
                  <li>
                    <strong>Exchange transformation.</strong> {`$S_1 = \\sum_i q_i Q_i$`} gives{' '}
                    {`$p_i = Q_i$`} and {`$P_i = -q_i$`}, so {`$Q_i = p_i$`} and {`$P_i = -q_i$`}.
                    Positions and momenta swap. A drastic rearrangement that is still perfectly
                    canonical.
                  </li>
                  <li>
                    <strong>Momentum shift.</strong> {`$S_2 = \\sum_i P_i q_i + \\phi(q)$`} gives{' '}
                    {`$Q_i = q_i$`} (positions unchanged) and{' '}
                    {`$p_i = P_i + \\frac{\\partial \\phi}{\\partial q_i}$`}. Momenta shift by a
                    gradient. This is the classical counterpart of a gauge transformation in
                    electromagnetism.
                  </li>
                </ul>
                <div className="lrn-insight">
                  The exchange transformation shows that "position" and "momentum" are not absolute
                  labels. They are two sets of coordinates on phase space. A different canonical
                  coordinate system can swap them completely. The physics is unchanged; only the
                  description changes.
                </div>
              </>
            )
          },
          {
            title: 'Connection to Hamilton-Jacobi Theory',
            content: (
              <>
                <p>
                  Canonical transformations and the Hamilton-Jacobi equation are two views of the
                  same idea.
                </p>
                <p>
                  Suppose you want a canonical transformation {`$(q, p) \\to (Q, P)$`} so powerful
                  that it maps the Hamiltonian to zero. In the new coordinates, the equations of
                  motion would be {`$\\dot{Q}_i = 0$`} and {`$\\dot{P}_i = 0$`}: everything is
                  constant. The new coordinates are the constants of motion themselves.
                </p>
                <p>
                  Use an {`$S_1$`}-type generating function {`$S_1(q, Q, t)$`}. When the
                  transformation depends on time, the Hamiltonian transforms as:
                </p>
                <div className="lrn-eq-display">
                  {`$$K(Q,\\, P,\\, t) = H\\!\\left(q,\\; \\frac{\\partial S_1}{\\partial q},\\; t\\right) + \\frac{\\partial S_1}{\\partial t}$$`}
                </div>
                <p>Demand {`$K = 0$`}. This is exactly the Hamilton-Jacobi equation:</p>
                <div className="lrn-eq-display">
                  {`$$\\frac{\\partial S_1}{\\partial t} + H\\!\\left(q,\\; \\frac{\\partial S_1}{\\partial q},\\; t\\right) = 0$$`}
                </div>
                <p>
                  Solving the Hamilton-Jacobi equation is the same as finding a canonical
                  transformation that kills the Hamiltonian. A complete integral {`$S_1(q, Q, t)$`}{' '}
                  with {`$n$`} free parameters {`$Q_i$`} generates this transformation. The
                  constants {`$Q_i$`} and {`$P_i = -\\frac{\\partial S_1}{\\partial Q_i}$`} are the{' '}
                  {`$2n$`} constants of motion.
                </p>
                <div className="lrn-callout">
                  The two methods are equivalent. Every complete integral of the Hamilton-Jacobi
                  equation gives a canonical transformation to coordinates where nothing moves.
                  Every such transformation is a complete integral of the Hamilton-Jacobi equation.
                  Hamilton's principal function {`$S$`} and the generating function {`$S_1$`} are
                  the same object, approached from opposite directions.
                </div>
              </>
            )
          }
        ]
      }
    ],
    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }`
  }
  return <LearningTemplate config={config} />
}

export default CanonicalTransformations
