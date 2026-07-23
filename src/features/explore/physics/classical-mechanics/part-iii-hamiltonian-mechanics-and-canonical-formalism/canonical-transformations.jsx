import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { GeneratingFunctionGeom } from '../../../../../components/viz'

function CanonicalTransformations() {
  const config = {
    learning: {
      groupTitle: 'Hamiltonian Mechanics and Canonical Formalism',
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
                  Cartesian coordinates. In polar coordinates, you can see the rotational symmetry.
                  The angle becomes cyclic, its conjugate momentum (angular momentum) stays
                  constant, and one equation of motion disappears. The right coordinates reveal
                  structure the wrong ones hide.
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
                  notion of area. A small region spanned by position step {`$\\delta q$`} and
                  momentum step {`$\\delta p$`} has "symplectic area"{' '}
                  {`$\\delta p \\cdot \\delta q$`}. The symplectic condition says this area is the
                  same in both coordinate systems:
                </p>
                <div className="lrn-eq-display">
                  {`$$\\sum_{i=1}^n dP_i \\wedge dQ_i = \\sum_{i=1}^n dp_i \\wedge dq_i$$`}
                </div>
                <p>
                  The wedge {`$\\wedge$`}, introduced in the spine, measures signed area in the{' '}
                  {`$(q, p)$`} plane. The condition says the new coordinates measure that signed
                  area identically to the old ones. Check it on the exchange {`$Q = p$`},{' '}
                  {`$P = -q$`}: there {`$dP \\wedge dQ = d(-q) \\wedge dp = dp \\wedge dq$`}, so the
                  area is unchanged and the swap is canonical.
                </p>
                <p>
                  The Poisson-bracket criterion from the brackets card says the same thing: a
                  transformation is canonical exactly when the new coordinates satisfy the
                  fundamental brackets in the original {`$(q, p)$`}.
                </p>
                <div className="lrn-eq-display">
                  {`$$\\{Q_i, P_j\\} = \\delta_{ij}, \\qquad \\{Q_i, Q_j\\} = 0, \\qquad \\{P_i, P_j\\} = 0$$`}
                </div>
                <p>
                  When these hold, Hamilton's equations take the same form in {`$(Q, P)$`} as they
                  did in {`$(q, p)$`}.
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
                  Imagine a cloud of particles, each moving under the same Hamiltonian from slightly
                  different starting conditions. The cloud sweeps out a tube in phase space as time
                  passes. Now draw a closed loop that winds once around this tube. Compute:
                </p>
                <div className="lrn-eq-display">
                  {`$$\\oint_\\gamma \\left( \\sum_{i=1}^n p_i\\,dq_i - H\\,dt \\right)$$`}
                </div>
                <p>
                  This integral measures something about the loop. At each point you multiply each
                  momentum component by its matching infinitesimal position step. Sum these up, then
                  subtract {`$H$`} times the infinitesimal time step. The remarkable fact: draw the
                  loop at any other time and you get the same number. This holds as long as it still
                  winds once around the same tube.
                </p>
                <p>
                  This is the <strong>Poincaré-Cartan integral invariant theorem</strong>. The
                  integrand {`$\\omega^1 = \\sum_i p_i\\,dq_i - H\\,dt$`} is called the
                  Poincaré-Cartan form. It extends the spine's relative integral invariant{' '}
                  {`$\\oint p\\,dq$`}: here you add the {`$-H\\,dt$`} term and run the loop around a
                  tube in time. Hamiltonian dynamics preserves the integral of {`$\\omega^1$`}{' '}
                  around any loop encircling a tube of trajectories. This holds no matter when you
                  take the loop:
                </p>
                <div className="lrn-eq-display">
                  {`$$\\oint_{\\gamma_1} p\\,dq - H\\,dt = \\oint_{\\gamma_2} p\\,dq - H\\,dt$$`}
                </div>
                <p>
                  A transformation {`$(q, p) \\to (Q, P)$`} is canonical if and only if it preserves{' '}
                  {`$\\omega^1$`} as an integral invariant. Every loop that encircles the same tube
                  then gives the same integral before and after the transformation.
                </p>
                <p>
                  You now have three ways to say "canonical": preserve the symplectic area (card 2),
                  satisfy the Poisson-bracket relations (card 2), or preserve this Poincaré-Cartan
                  invariant. The three are equivalent characterizations of the same class of
                  transformations.
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
                  <strong>generating function</strong>. It is a single scalar that encodes the
                  entire transformation through its partial derivatives. The most common type takes
                  the old positions and the new positions as arguments:
                </p>
                <div className="lrn-eq-display">{`$$S_1 = S_1(q,\\, Q,\\, t)$$`}</div>
                <p>Given {`$S_1$`}, the old and new momenta are:</p>
                <div className="lrn-eq-display">
                  {`$$p_i = \\frac{\\partial S_1}{\\partial q_i}, \\qquad P_i = -\\frac{\\partial S_1}{\\partial Q_i}$$`}
                </div>
                <p>
                  The minus sign on {`$P$`} comes directly from the requirement that the
                  transformation preserves the Poincaré-Cartan form. The condition{' '}
                  {`$p\\,dq - P\\,dQ = dS_1$`} forces it. Expand the right side by the chain rule,
                  for one degree of freedom:
                </p>
                <div className="lrn-eq-display">
                  {`$$dS_1 = \\frac{\\partial S_1}{\\partial q}\\,dq + \\frac{\\partial S_1}{\\partial Q}\\,dQ$$`}
                </div>
                <p>
                  Match the {`$dq$`} terms to get {`$p = \\partial S_1/\\partial q$`}. Match the{' '}
                  {`$dQ$`} terms to get {`$-P = \\partial S_1/\\partial Q$`}, which is the minus
                  sign.
                </p>
                <p>The transformation is canonical provided:</p>
                <div className="lrn-eq-display">
                  {`$$\\det\\!\\left(\\frac{\\partial^2 S_1}{\\partial q_i\\, \\partial Q_j}\\right) \\neq 0$$`}
                </div>
                <p>
                  This determinant condition says {`$(q, Q)$`} serve as independent coordinates.
                  Knowing both the old and new positions pins down a unique point. So you can solve
                  for {`$(Q, P)$`} as functions of {`$(q, p)$`}.
                </p>
                <div className="lrn-callout">
                  <strong>Why generating functions exist.</strong> Card 2's symplectic condition
                  makes the one-form {`$p\\,dq - P\\,dQ$`} closed. The spine's Poincaré Lemma says a
                  closed form is locally the differential of some function. So there exists a
                  function {`$S_1$`} with {`$dS_1 = p\\,dq - P\\,dQ$`}, and that function is the
                  generating function.
                </div>
                <GeneratingFunctionGeom />
                <div className="lrn-callout">
                  <strong>Worked example: the harmonic oscillator.</strong> Take{' '}
                  {`$S_1 = \\tfrac{1}{2} m\\omega q^2 \\cot Q$`}. Read off the momenta from the two
                  derivative rules:
                  <div className="lrn-eq-display">
                    {`$$p = \\frac{\\partial S_1}{\\partial q} = m\\omega q \\cot Q, \\qquad P = -\\frac{\\partial S_1}{\\partial Q} = \\frac{m\\omega q^2}{2\\sin^2 Q}$$`}
                  </div>
                  Now feed these into the oscillator Hamiltonian{' '}
                  {`$H = \\frac{p^2}{2m} + \\frac{1}{2} m\\omega^2 q^2$`}. Substituting{' '}
                  {`$p = m\\omega q \\cot Q$`} and using {`$\\cot^2 Q + 1 = 1/\\sin^2 Q$`} collapses
                  it to:
                  <div className="lrn-eq-display">{`$$K = \\frac{1}{2} m\\omega^2 q^2 \\frac{1}{\\sin^2 Q} = \\omega P$$`}</div>
                  The new Hamiltonian {`$K = \\omega P$`} does not contain {`$Q$`} at all.
                  Hamilton's equations are now trivial:{' '}
                  {`$\\dot{P} = -\\partial K/\\partial Q = 0$`}, so {`$P$`} is constant, and{' '}
                  {`$\\dot{Q} = \\partial K/\\partial P = \\omega$`}, so {`$Q = \\omega t + $`}{' '}
                  constant. One generating function turned the oscillator into a point moving at
                  constant speed around a circle. These {`$(Q, P)$`} are the action-angle variables.
                </div>
              </>
            )
          },
          {
            title: 'The Four Types of Generating Functions',
            content: (
              <>
                <p>
                  The {`$S_1(q, Q)$`} type uses old positions and new positions. But for the
                  identity transformation {`$Q = q$`}, the determinant condition fails. Knowing both
                  the old and new positions tells you nothing when they are equal. So {`$S_1$`}
                  breaks down near the identity. The fix is to swap {`$Q$`} for {`$P$`} via a
                  Legendre transform, the standard trick for changing which variable a function
                  depends on. Define {`$S_2(q, P) = S_1 + PQ$`}. The relations become:
                </p>
                <div className="lrn-eq-display">
                  {`$$p_i = \\frac{\\partial S_2}{\\partial q_i}, \\qquad Q_i = \\frac{\\partial S_2}{\\partial P_i}$$`}
                </div>
                <p>
                  No minus signs. This makes {`$S_2$`} the natural type for transformations near the
                  identity and for infinitesimal canonical transformations.
                </p>
                <p>
                  For {`$n$`} degrees of freedom, you can choose independently for each index{' '}
                  {`$i$`}. Keep {`$q_i$`}, or replace it with {`$P_i$`} via a partial Legendre
                  transform. This gives {`$2^n$`} possible types. The four standard types for one
                  degree of freedom are:
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
                  Each type covers a different open subset of all canonical transformations. The
                  identity {`$Q = q$`} shows why you need more than one. There {`$Q$`} is fixed once
                  you know {`$q$`}, so the {`$S_1(q, Q)$`} determinant fails and no {`$S_1$`} can
                  build it. You must use {`$S_2(q, P)$`}. Other transformations fail the {`$S_2$`}
                  test the same way and call for {`$S_3$`} or {`$S_4$`}. Together the four types
                  cover every canonical transformation locally.
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
                    {`$p_i = Q_i$`} and {`$P_i = -q_i$`}, so {`$Q_i = p_i$`}. Positions and momenta
                    swap. A drastic rearrangement that is still perfectly canonical.
                  </li>
                  <li>
                    <strong>Momentum shift.</strong> {`$S_2 = \\sum_i P_i q_i + \\phi(q)$`} gives{' '}
                    {`$Q_i = q_i$`} (positions unchanged) and{' '}
                    {`$p_i = P_i + \\frac{\\partial \\phi}{\\partial q_i}$`}. Momenta shift by a
                    gradient. This is the classical counterpart of a gauge transformation in
                    electromagnetism, where adding a gradient to the potential leaves all the
                    physics unchanged.
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
                  Use an {`$S_1$`}-type generating function {`$S_1(q, Q, t)$`}. Call the Hamiltonian
                  in the new coordinates {`$K(Q, P, t)$`}: it governs the motion of {`$(Q, P)$`}{' '}
                  just as {`$H$`} governs the motion of {`$(q, p)$`}. When the transformation
                  depends on time, {`$K$`} relates to {`$H$`} by:
                </p>
                <div className="lrn-eq-display">
                  {`$$K(Q,\\, P,\\, t) = H\\!\\left(q,\\; \\frac{\\partial S_1}{\\partial q},\\; t\\right) + \\frac{\\partial S_1}{\\partial t}$$`}
                </div>
                <p>
                  The extra {`$\\partial S_1/\\partial t$`} term comes from one requirement: the
                  variational principle must hold in both coordinate systems. Both{' '}
                  {`$p\\,dq - H\\,dt$`} and {`$P\\,dQ - K\\,dt$`} must give the same physics, so
                  they differ only by the total derivative {`$dS_1$`}. When {`$S_1$`} carries its
                  own time dependence, the {`$\\partial S_1/\\partial t$`} piece lands on the{' '}
                  {`$-H\\,dt$`} term from card 3 and shifts {`$H$`} to {`$K$`}.
                </p>
                <p>Demand {`$K = 0$`}. This is exactly the Hamilton-Jacobi equation:</p>
                <div className="lrn-eq-display">
                  {`$$\\frac{\\partial S_1}{\\partial t} + H\\!\\left(q,\\; \\frac{\\partial S_1}{\\partial q},\\; t\\right) = 0$$`}
                </div>
                <p>
                  Solving the Hamilton-Jacobi equation is the same as finding a canonical
                  transformation that kills the Hamiltonian. Its solution carries {`$n$`} free
                  parameters you can use as the new positions {`$Q_i$`}, and those parameters stay
                  constant. So an H-J solution IS a canonical transformation that kills {`$H$`}.
                  Hamilton's principal function (written {`$S$`} in H-J theory) and the generating
                  function {`$S_1$`} here are one and the same object, approached from opposite
                  directions.
                </p>
              </>
            )
          }
        ]
      }
    ],
    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }`
  }
  return <LearningTemplate config={config} />
}

export default CanonicalTransformations
