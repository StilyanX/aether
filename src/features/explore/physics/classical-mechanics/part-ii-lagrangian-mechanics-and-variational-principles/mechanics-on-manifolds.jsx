import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  Plot as P6,
  Axes as A6,
  Parametric as Pa6,
  Polyline as Pl6,
  Dot as D6,
  CircleSh as C6,
  Arrow as Ar6,
  Tex as T6,
  Slider as Sl6,
  DragHandle as DH6,
  PlayPause as PP6,
  OPACITY as O6,
  VizCard
} from '../../../../../components/viz/physics-viz/primitives'
import {
  useSimulation as useSim6,
  rk4Step as rk46
} from '../../../../../components/viz/physics-viz/physics-core'

function PendulumS1() {
  const [th, setTh] = React.useState(1.0)
  const bx = 2 * Math.sin(th)
  const by = -2 * Math.cos(th)
  return (
    <div style={{ width: '100%' }}>
      <P6 xRange={[-3.5, 3.5]} yRange={[-2.4, 2.6]} width={520} height={280}>
        <Pa6 xy={t => [-3 + t * 6, 0]} t={[0, 1]} samples={2} opacity={O6.dim} />
        <C6 cx={0} cy={0} r={2} opacity={O6.fg} />
        <D6 x={0} y={0} />
        <Pa6
          xy={t => [t * bx, t * by]}
          t={[0, 1]}
          samples={2}
          opacity={O6.accent}
          strokeWidth={1.5}
        />
        <DH6
          x={bx}
          y={by}
          onChange={(x, y) => {
            const a = Math.atan2(x, -y)
            setTh(a)
          }}
          label="m"
        />
        <Pa6
          xy={s => [0.6 * Math.sin(s * th), -0.6 * Math.cos(s * th)]}
          t={[0, 1]}
          samples={48}
          opacity={O6.accent}
        />
        <T6 at={[0.7, -0.6]} tex="\theta" opacity={O6.accent} />
        <T6 at={[-2.5, 1.85]} tex="S^1" opacity={O6.fg} />
      </P6>
      <Sl6
        label="θ"
        value={th}
        min={-Math.PI}
        max={Math.PI}
        step={0.02}
        onChange={setTh}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
    </div>
  )
}

function ConstraintForce() {
  const [xC, setXC] = React.useState(1.0)
  const M = x => 0.5 + 0.4 * x * x
  const yC = M(xC)
  const slope = 0.8 * xC
  const nrm = 1 / Math.hypot(1, slope)
  const nx = -slope * nrm,
    ny = 1 * nrm
  return (
    <div style={{ width: '100%' }}>
      <P6 xRange={[-2.5, 2.5]} yRange={[-0.4, 3.4]} width={520} height={260}>
        <A6 step={1} showGrid={false} />
        <Pa6 xy={x => [x, M(x)]} t={[-2.2, 2.2]} samples={120} opacity={O6.fg} strokeWidth={2} />
        <DH6 x={xC} y={yC} onChange={x => setXC(Math.max(-2, Math.min(2, x)))} />
        <Ar6 from={[xC, yC]} to={[xC + nx * 1.4, yC + ny * 1.4]} opacity={O6.accent} head={6} />
        <Ar6 from={[xC, yC]} to={[xC + 1.0, yC + slope * 1.0]} opacity={O6.fg} head={6} />
        <Ar6
          from={[xC, yC]}
          to={[xC - 1.0, yC - slope * 1.0]}
          opacity={O6.fg}
          head={6}
          dash="3 3"
        />
        <T6 at={[xC + nx * 1.4 + 0.1, yC + ny * 1.4]} tex="R \perp M" opacity={O6.accent} />
        <T6 at={[xC + 1.05, yC + slope * 1.0 + 0.1]} tex="\xi \in T_xM" opacity={O6.fg} />
      </P6>
      <Sl6 label="x" value={xC} min={-2} max={2} step={0.02} onChange={setXC} />
    </div>
  )
}

function PendulumLive() {
  const [g, setG] = React.useState(9.81)
  const [gamma, setGamma] = React.useState(0.05)
  const [state, setState, ctl] = useSim6({ th: 1.4, om: 0 }, (s, dt) => {
    const L = 1.6
    const f = (t, y) => [y[1], -(g / L) * Math.sin(y[0]) - gamma * y[1]]
    const r = rk46(f, 0, [s.th, s.om], dt)
    return { th: r[0], om: r[1] }
  })
  const L = 1.6
  const bx = L * Math.sin(state.th)
  const by = -L * Math.cos(state.th)
  return (
    <div style={{ width: '100%' }}>
      <P6 xRange={[-2.4, 2.4]} yRange={[-2.6, 1.0]} width={420} height={260}>
        <Pa6
          xy={t => [-2.2 + t * 4.4, 0.5]}
          t={[0, 1]}
          samples={2}
          opacity={O6.fg}
          strokeWidth={2}
        />
        {Array.from({ length: 8 }, (_, i) => (
          <Pa6
            key={i}
            xy={t => [-2.0 + i * 0.55 + t * 0.2, 0.5 + t * 0.15]}
            t={[0, 1]}
            samples={2}
            opacity={O6.dim}
          />
        ))}
        <Pa6
          xy={t => [t * bx, t * by]}
          t={[0, 1]}
          samples={2}
          opacity={O6.accent}
          strokeWidth={1.5}
        />
        <D6 x={0} y={0} />
        <DH6
          x={bx}
          y={by}
          onChange={(x, y) => {
            const r = Math.hypot(x, y)
            if (r < 0.2) return
            const sx = (x / r) * L,
              sy = (y / r) * L
            const th = Math.atan2(sx, -sy)
            setState({ th, om: 0 })
          }}
          r={9}
        />
        <Pa6
          xy={s => [L * Math.sin(s * state.th), -L * Math.cos(s * state.th)]}
          t={[0, 1]}
          samples={48}
          opacity={O6.faint}
        />
      </P6>
      <PP6
        playing={ctl.playing}
        onToggle={() => ctl.setPlaying(!ctl.playing)}
        onReset={ctl.reset}
      />
      <Sl6 label="g" value={g} min={1} max={20} step={0.1} onChange={setG} />
      <Sl6 label="γ" value={gamma} min={0} max={0.5} step={0.01} onChange={setGamma} />
    </div>
  )
}

function DoublePendulum() {
  const [state, setState, ctl] = useSim6({ th1: 1.6, th2: 1.4, p1: 0, p2: 0 }, (s, dt) => {
    const f = (t, y) => {
      const g = 9.81,
        L1 = 1,
        L2 = 1,
        m1 = 1,
        m2 = 1
      const [a, b, p, q] = y
      const c12 = Math.cos(a - b),
        s12 = Math.sin(a - b)
      const denom = m1 + m2 * s12 * s12
      const a1 =
        (-g * (2 * m1 + m2) * Math.sin(a) -
          m2 * g * Math.sin(a - 2 * b) -
          2 * s12 * m2 * (q * q * L2 + p * p * L1 * c12)) /
        (L1 * 2 * denom)
      const a2 =
        (2 * s12 * (p * p * L1 * (m1 + m2) + g * (m1 + m2) * Math.cos(a) + q * q * L2 * m2 * c12)) /
        (L2 * 2 * denom)
      return [p, q, a1, a2]
    }
    const r = rk46(f, 0, [s.th1, s.th2, s.p1, s.p2], dt)
    return { th1: r[0], th2: r[1], p1: r[2], p2: r[3] }
  })
  const L1 = 1,
    L2 = 1
  const x1 = L1 * Math.sin(state.th1),
    y1 = -L1 * Math.cos(state.th1)
  const x2 = x1 + L2 * Math.sin(state.th2),
    y2 = y1 - L2 * Math.cos(state.th2)
  const trailRef = React.useRef([])
  if (ctl.playing) {
    trailRef.current.push([x2, y2])
    if (trailRef.current.length > 200) trailRef.current.shift()
  }
  return (
    <div style={{ width: '100%' }}>
      <P6 xRange={[-2.4, 2.4]} yRange={[-2.6, 0.8]} width={420} height={260}>
        <D6 x={0} y={0} />
        <Pa6 xy={t => [t * x1, t * y1]} t={[0, 1]} opacity={O6.fg} strokeWidth={1.5} />
        <Pa6
          xy={t => [x1 + t * (x2 - x1), y1 + t * (y2 - y1)]}
          t={[0, 1]}
          opacity={O6.accent}
          strokeWidth={1.5}
        />
        {trailRef.current.length > 1 && <Pl6 points={trailRef.current} opacity={O6.dim} />}
        <DH6
          x={x1}
          y={y1}
          onChange={(x, y) => {
            const r = Math.hypot(x, y)
            if (r < 0.1) return
            const sx = (x / r) * L1,
              sy = (y / r) * L1
            setState({ ...state, th1: Math.atan2(sx, -sy), p1: 0, p2: 0 })
            trailRef.current = []
          }}
          r={6}
        />
        <DH6
          x={x2}
          y={y2}
          onChange={(x, y) => {
            const dx = x - x1,
              dy = y - y1
            const r = Math.hypot(dx, dy)
            if (r < 0.1) return
            const sx = (dx / r) * L2,
              sy = (dy / r) * L2
            setState({ ...state, th2: Math.atan2(sx, -sy), p1: 0, p2: 0 })
            trailRef.current = []
          }}
          r={8}
        />
      </P6>
      <PP6
        playing={ctl.playing}
        onToggle={() => ctl.setPlaying(!ctl.playing)}
        onReset={() => {
          ctl.reset()
          trailRef.current = []
        }}
      />
    </div>
  )
}

export default function MechanicsOnManifolds() {
  const config = {
    cssPrefix: 'mom',
    source: 'Mathematical Methods of Classical Mechanics - Arnold',
    documentTitle: 'Mechanics on Manifolds - AETHER',
    learning: {
      groupTitle: 'Part II: Lagrangian Mechanics and Variational Principles',
      category: 'Physics',
      title: 'Mechanics on Manifolds',
      subtitle:
        "Differentiable manifolds, Lagrangian systems on curved configuration spaces, and D'Alembert's principle",
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Differentiable Manifolds</h2>
            <p>
              A pendulum's state is just one number: its angle. But that number is not a normal
              number on a line. Angle 0 and angle {`$2\\pi$`} point at the same place, so the angle
              wraps around. The set of possible states is a circle, not a line.
            </p>
            <p>
              That circle is the pendulum's <strong>configuration space</strong>: every point in it
              is one full description of where the system is. Different machines have different
              shapes for this space. A pendulum free to swing in any direction in 3D has a sphere. A
              double pendulum (two arms hinged together) has a doughnut surface. A rigid object that
              can rotate freely has the set of all rotations.
            </p>
            <p>
              These curved spaces are called <strong>differentiable manifolds</strong>. This module
              is about doing physics on them: how to write down kinetic energy, how to find the
              equations of motion, and how to handle constraints that force a system onto a curved
              space.
            </p>
            <p>
              <strong>When to use this:</strong> any time the system has constraints, a curved space
              of states, or rotational degrees of freedom (the independent numbers needed to
              describe the configuration).
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A flat double pendulum has two joints, both swinging in the same plane. Each joint's
                angle goes from {`$0$`} to {`$2\\pi$`} and then wraps. What shape do you think the
                full set of states forms?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`Each joint is its own circle $S^1$. The two angles vary independently, so the full state is one point on each circle. Two independent circles combine into a doughnut surface, written $T^2 = S^1 \\times S^1$. That is the configuration space.`}</p>
              </details>
            </div>

            <h3>Definition</h3>
            <p>
              A manifold is a space that looks flat if you zoom in close enough, even if the whole
              space is curved. The surface of the Earth looks flat to a person standing on it. The
              Earth as a whole is a sphere. A manifold is any space with that property.
            </p>
            <p>
              To do calculus on a manifold, you cover it with overlapping local maps. Each map
              treats a small patch as if it were flat. Where two maps overlap, you need a rule for
              translating between them. The formal definition spells this out.
            </p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Differentiable Manifold</span>
              <div className="lrn-definition-desc">
                <p>
                  A set {`$M$`} together with a collection of <strong>charts</strong>: each chart
                  takes a small piece of {`$M$`} and labels its points with coordinates from{' '}
                  {`$\\mathbb{R}^k$`} (ordinary {`$k$`}-tuples of numbers). The charts must cover
                  all of {`$M$`}.
                </p>
                <p>
                  Where two charts overlap, the rule for converting one chart's coordinates into the
                  other (the <strong>transition map</strong>) must be <strong>smooth</strong>: it
                  has derivatives of every order. The number {`$k$`} is the{' '}
                  <strong>dimension</strong> of {`$M$`}.
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                One coordinate system is rarely enough. Latitude and longitude almost cover the
                Earth, but at the poles longitude breaks down: standing at the North Pole, you can
                point in any direction and call it "south." The coordinates blow up there. To cover
                the whole sphere you need at least one extra chart that puts the poles inside its
                interior.
              </p>
              <p>
                Overlapping charts let you do calculus locally in flat {`$\\mathbb{R}^k$`} while
                still working on the whole curved manifold.
              </p>
              <p>
                Smoothness of the transition map is what guarantees that any calculation done in one
                chart agrees with the same calculation in another. Without it, the manifold would
                have invisible seams.
              </p>
            </div>

            <h3>Examples of Configuration Spaces</h3>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Flat pendulum</span>
                <p className="lrn-step-content">{`One arm swinging in a plane. The state is the angle $\\theta$, which lives on a circle $S^1$ because $\\theta = 0$ and $\\theta = 2\\pi$ are the same physical configuration.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Spherical pendulum</span>
                <p className="lrn-step-content">{`One arm of fixed length in 3D. The tip can point anywhere on a sphere of that radius, so the configuration space is the sphere $S^2$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Flat double pendulum</span>
                <p className="lrn-step-content">{`Two arms swinging in the same plane. Two independent angles, each on its own circle, combine into the doughnut surface $T^2 = S^1 \\times S^1$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Spherical double pendulum</span>
                <p className="lrn-step-content">{`Two arms in 3D. Each arm's tip lives on its own sphere, so the configuration space is $S^2 \\times S^2$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Rigid line segment in the plane</span>
                <p className="lrn-step-content">{`Specify the center with two coordinates, then specify the segment's tilt with one angle. The configuration space is $\\mathbb{R}^2 \\times S^1$ (a flat plane crossed with a circle).`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Rigid body in 3D</span>
                <p className="lrn-step-content">{`Fix the body's center, then describe its orientation. The set of all 3D rotations is itself a curved space called $SO(3)$.`}</p>
              </div>
            </div>

            <VizCard id="02.6.1" title="Pendulum on S¹">
              <PendulumS1 />
            </VizCard>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why is the flat double pendulum's configuration space the torus {`$T^2$`}, not the
                flat plane {`$\\mathbb{R}^2$`}?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Each angle is periodic. Turning a joint by {`$2\\pi$`} brings it back to where it
                  started, so the angle is a point on a circle, not a number on an unbounded line.
                </p>
                <p>{`Two independent circles combine into the product space $S^1 \\times S^1 = T^2$, the surface of a doughnut.`}</p>
                <p>
                  If you pretended the configuration space were the flat plane {`$\\mathbb{R}^2$`},
                  you would miss this wraparound. That matters for any question about long-term
                  motion: a trajectory that looks like it walks off to infinity in the plane is
                  actually winding around the doughnut, sometimes filling it densely. That kind of
                  result needs the torus structure to even state.
                </p>
              </details>
            </div>

            <h3>Holonomic Constraints</h3>
            <p>
              A constraint that fixes positions, but not velocities, is called{' '}
              <strong>holonomic</strong>. A bead threaded on a wire can only sit on the wire, and
              that is a position rule. A wheel rolling without slipping has a velocity rule (the
              contact point cannot slide), and that one is not holonomic.
            </p>
            <p>
              A holonomic constraint cuts down the space of allowed positions. The constraint{' '}
              {`$q_2 = 0$`} forces motion off the plane onto a single line. The constraint{' '}
              {`$r = 1$`} forces motion off all of 3D space onto the unit sphere. The smaller space
              you are forced onto is called a <strong>submanifold</strong> of the larger one.
            </p>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Insight</span>
              <p>
                There is a clean way to picture a holonomic constraint as a limit. Replace the rigid
                wire with a very stiff spring that yanks the bead back toward the wire whenever it
                strays, with potential energy {`$N q_2^2$`}. As the stiffness {`$N$`} grows without
                bound, the bead's wandering shrinks to nothing. In the limit, the bead is pinned to
                the wire. The constraint is just an infinitely stiff spring.
              </p>
              <p>
                One physical fact follows from this picture: the constraint force always pushes
                perpendicular to the constraint surface, never along it. So it never speeds the
                system up or slows it down along the allowed directions. Physicists say it does no
                work on the allowed motion.
              </p>
            </div>

            <h3>Tangent Space and Tangent Bundle</h3>
            <p>
              Pick a point {`$x$`} on the manifold {`$M$`}. Imagine all the different ways a
              particle could be moving at the moment it passes through that point: every possible
              direction, every possible speed. Each of those is a velocity arrow attached to {`$x$`}
              . The collection of all such arrows is a flat vector space sitting at {`$x$`}. That
              space is the <strong>tangent space</strong>, written {`$TM_x$`}.
            </p>
            <p>
              The tangent space has the same dimension as the manifold. If {`$M$`} is a
              two-dimensional surface, every {`$TM_x$`} is a flat plane. If {`$M$`} is a circle,
              every {`$TM_x$`} is a line.
            </p>
            <p>
              The <strong>tangent bundle</strong> {`$TM$`} bundles all those tangent spaces
              together, one for every point of {`$M$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$TM = \\{(x, v) : x \\in M,\\; v \\in TM_x\\}$$`}</span>
            </div>
            <p>
              A point of {`$TM$`} is a pair (position, velocity arrow at that position). In a local
              chart this becomes {`$(q_1, \\ldots, q_k, \\xi_1, \\ldots, \\xi_k)$`}: the {`$q$`}'s
              say where you are and the {`$\\xi$`}'s say how fast and in what direction you are
              moving. The {`$\\xi$`}'s are just another name for the velocities {`$\\dot{q}$`}.
            </p>
            <p>
              {`$TM$`} matters because the Lagrangian needs both position and velocity as input. The
              tangent bundle is exactly the space where (position, velocity) pairs live.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                What does it mean for a vector to be "tangent" to a manifold at a point? Use the
                circle {`$S^1$`} to make it concrete.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  A tangent vector at a point is the velocity of some curve passing through that
                  point. The vector points the way the curve is heading and has length equal to the
                  curve's speed.
                </p>
                <p>
                  On the circle, pick any angle {`$\\theta_0$`}. A particle moving along the circle
                  at that moment must be moving along the circle, not into or out of it. Its
                  velocity arrow lies flat against the circle at {`$\\theta_0$`}. The set of all
                  such arrows is a one-dimensional line: the tangent space at that point.
                </p>
                <p>
                  Stick a copy of that line at every point of the circle. The result is the tangent
                  bundle, with the shape of a cylinder: {`$TS^1 \\cong S^1 \\times \\mathbb{R}$`}.
                </p>
              </details>
            </div>

            <h3>Riemannian Metric</h3>
            <p>
              On a flat plane, the length of a velocity arrow {`$v = (v_1, v_2)$`} is{' '}
              {`$\\sqrt{v_1^2 + v_2^2}$`}: the same Pythagorean rule everywhere. On a curved
              manifold, the rule for measuring length can change from point to point, because the
              space itself stretches or shrinks depending on where you are.
            </p>
            <p>
              A <strong>Riemannian metric</strong> is a way to measure the length of velocity arrows
              that works on a manifold. At each point it is a rule that never gives zero or negative
              length unless the velocity arrow is itself zero. (The technical name for such a rule
              is a "positive definite inner product.")
            </p>
            <p>In local coordinates the rule reads:</p>
            <div className="lrn-eq">
              <span>{`$$ds^2 = \\sum_{i,j} a_{ij}(q)\\, dq_i\\, dq_j$$`}</span>
            </div>
            <p>
              Read as: the squared length of a tiny step is a weighted sum of products of the step's
              components {`$dq_i$`}, with weights {`$a_{ij}(q)$`} that depend on where you are on
              the manifold (hence the {`$(q)$`}).
            </p>
            <p>
              Kinetic energy uses the same weights:{' '}
              {`$T = \\frac{1}{2}\\sum a_{ij}\\dot{q}_i\\dot{q}_j$`}. So on a curved space,
              measuring length and measuring kinetic energy are the same act. (This connects to the
              Many Variables result in the Noether's Theorem module.)
            </p>

            <h3>The Derivative Map</h3>
            <p>
              A smooth map {`$f: M \\to N$`} sends each point of one manifold to a point of another.
              If {`$f$`} is invertible and its inverse is also smooth, it is called a{' '}
              <strong>diffeomorphism</strong>: a smooth deformation that can be undone smoothly.
            </p>
            <p>
              A map sends points to points, but it also sends velocity arrows at each point to
              velocity arrows at the image point. That second action is the{' '}
              <strong>derivative</strong> of the map at {`$x$`}, written {`$f_{*x}$`}. It is a
              linear map between tangent spaces:
            </p>
            <div className="lrn-eq">
              <span>{`$$f_{*x}: TM_x \\to TN_{f(x)}$$`}</span>
            </div>
            <p>
              Concretely: take a curve {`$\\gamma(t)$`} that passes through {`$x$`} at time 0 with
              velocity {`$\\dot\\gamma(0)$`}. Push the curve through {`$f$`} to get a new curve{' '}
              {`$f(\\gamma(t))$`} on {`$N$`}. Its velocity at time 0 is what the derivative outputs:
            </p>
            <div className="lrn-eq">
              <span>{`$$f_{*x}(\\dot\\gamma(0)) = \\frac{d}{dt}f(\\gamma(t))\\Big|_{t=0}$$`}</span>
            </div>
            <p>
              The derivative map shows up directly in Noether's theorem. A symmetry group acts on
              the manifold by diffeomorphisms, and the derivative of that action is what extracts
              the conserved quantity.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Lagrangian Dynamical Systems on Manifolds</h2>
            <p>
              A Lagrangian needs both position and velocity as input. On a manifold, that pair lives
              on the tangent bundle. So {`$L$`} is naturally a function on {`$TM$`}, no matter which
              chart you happen to be using.
            </p>
            <p>
              The motion of the system is the curve on {`$M$`} that makes the action (the time
              integral of {`$L$`}) as small as possible. That single principle generates the
              equations of motion in any coordinate system you pick.
            </p>
            <p>
              <strong>When to use this:</strong> systems with constraints, systems on curved spaces,
              and any time you need Noether's theorem in its full form.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A particle slides without friction on the inside of a vertical cone. The cone's
                surface is its configuration space (a curved 2D manifold). What two coordinates
                would give the cleanest Lagrangian?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`Use $s$ = the distance from the apex along the cone's surface, and $\\varphi$ = the angle around the cone's vertical axis. Let $\\alpha$ be the half-angle of the cone (the tilt of its side from the axis). The metric on the cone is $ds^2_{\\text{cone}} = ds^2 + s^2\\sin^2\\alpha\\, d\\varphi^2$, so the Lagrangian is $L = \\frac{m}{2}(\\dot{s}^2 + s^2\\sin^2\\alpha\\,\\dot{\\varphi}^2) - mgs\\cos\\alpha$. The angle $\\varphi$ does not appear in $L$ (only its rate $\\dot\\varphi$ does), so it is "ignorable" and angular momentum is conserved.`}</p>
              </details>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Lagrangian System</span>
              <div className="lrn-definition-desc">
                <p>
                  A Lagrangian system is a manifold {`$M$`} (the configuration space) plus a
                  function {`$L: TM \\to \\mathbb{R}$`} (the Lagrangian, taking position and
                  velocity to a single number).
                </p>
                <p>
                  A motion is a curve {`$\\gamma: [t_1, t_2] \\to M$`} that is a stationary point of
                  the action {`$\\Phi(\\gamma) = \\int_{t_1}^{t_2} L(\\dot{\\gamma}(t))\\, dt$`}:
                  small wiggles of the curve do not change the action to first order.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Natural Lagrangian System</span>
              <div className="lrn-definition-desc">
                <p>
                  A Lagrangian system is <strong>natural</strong> if the configuration space {`$M$`}{' '}
                  carries a Riemannian metric, the kinetic energy is{' '}
                  {`$T = \\frac{1}{2}\\langle v, v \\rangle$`} (one-half the squared length of the
                  velocity arrow, measured by that metric), and the Lagrangian is {`$L = T - U$`}.
                </p>
                <p>
                  In local coordinates this becomes{' '}
                  {`$L = \\frac{1}{2}\\sum_{i,j} a_{ij}(q)\\dot{q}_i\\dot{q}_j - U(q)$`}. The
                  Lagrange equations have the same shape in every chart.
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Lagrange's equations come from a variational principle, and that principle is purely
                geometric: it asks for a curve on the manifold that makes the action stationary.
              </p>
              <p>
                The action depends only on the curve and the function {`$L$`} on {`$TM$`}, not on
                which chart you write things in. Different charts produce different formulas for the
                action's integrand, but always the same number for the action itself.
              </p>
              <p>
                So the equations of motion must transform consistently between charts. Any natural
                system on a manifold has the same Euler-Lagrange form in every coordinate system you
                choose.
              </p>
            </div>

            <h3>Systems with Holonomic Constraints</h3>
            <p>
              Take {`$n$`} mass points moving in flat 3D space, then constrain them to lie on some
              submanifold {`$M$`} (for example, by joining them with rigid rods). The result is a
              natural Lagrangian system on {`$M$`}.
            </p>
            <p>
              Where does the metric on {`$M$`} come from? You inherit it. The flat 3D space already
              has a way to measure lengths and velocities. Restricting that measurement to
              velocities tangent to {`$M$`} gives the Riemannian metric on {`$M$`}.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Step 1: Find the manifold</span>
                <p className="lrn-step-content">
                  Identify the constraint surface {`$M$`} and pick convenient local coordinates{' '}
                  {`$q = (q_1, \\ldots, q_k)$`} on it.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Step 2: Write kinetic energy</span>
                <p className="lrn-step-content">{`Write the same kinetic energy you would write in flat space, then keep only the parts that survive when the motion is forced onto $M$. The result is $T = \\frac{1}{2}\\sum a_{ij}(q)\\dot{q}_i\\dot{q}_j$ for some metric coefficients $a_{ij}(q)$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Step 3: Build the Lagrangian</span>
                <p className="lrn-step-content">{`Set $L = T - U(q)$, with $U$ the potential energy expressed in terms of the chosen coordinates on $M$.`}</p>
              </div>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">
                  COMPLETE EXAMPLE: Point on Surface of Revolution
                </span>
                <p>
                  A surface of revolution is what you get by spinning a curve around a vertical
                  axis. Use {`$r$`} for the distance from the axis and {`$\\varphi$`} for the angle
                  around it. The surface's height is some function {`$z = f(r)$`} (the height at
                  distance {`$r$`} from the axis). The two coordinates on the surface are{' '}
                  {`$q_1 = r$`} and {`$q_2 = \\varphi$`}.
                </p>
                <p>{`The surface's tiny-step length squared is $ds^2 = (1+f'^2)dr^2 + r^2 d\\varphi^2$, so the kinetic energy is $T = \\frac{m}{2}[(1+f'^2)\\dot{r}^2 + r^2\\dot{\\varphi}^2]$.`}</p>
                <p>{`The Lagrangian does not contain $\\varphi$ directly (only $\\dot{\\varphi}$), so $p_\\varphi = mr^2\\dot{\\varphi}$ is conserved. This is angular momentum about the symmetry axis.`}</p>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">
                  YOUR TURN: PARTIAL (Bead on Rotating Circle)
                </span>
                <ol className="lrn-list">
                  <li>
                    A bead of mass {`$m$`} slides on a circle of radius {`$r$`} that itself rotates
                    about a vertical axis with angular velocity {`$\\omega$`}.
                  </li>
                  <li>
                    Use the angle {`$q$`} measured around the circle as the single generalized
                    coordinate.
                  </li>
                  <li>
                    Write the kinetic energy {`$T$`}, the effective potential, and finally {`$L$`}.
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>{`Two mass points $m_1$, $m_2$ are connected by a rigid rod of length $l$ and move in the plane. The configuration space is $M = \\mathbb{R}^2 \\times S^1$ (the rod's center plus its tilt angle). Write the Lagrangian.`}</p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                In the surface-of-revolution example, why is angular momentum {`$p_\\varphi$`}{' '}
                conserved automatically, with no calculation needed beyond reading {`$L$`}?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`The Lagrangian $L = \\frac{m}{2}[(1+f'^2)\\dot{r}^2 + r^2\\dot{\\varphi}^2]$ contains $\\dot{\\varphi}$ but never $\\varphi$ itself.`}</p>
                <p>{`So $\\frac{\\partial L}{\\partial \\varphi} = 0$. The Euler-Lagrange equation for $\\varphi$ then reads $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{\\varphi}} = 0$, meaning $p_\\varphi = mr^2\\dot{\\varphi}$ does not change with time.`}</p>
                <p>
                  The geometric reason: the surface looks the same after any rotation around its
                  axis. Noether's theorem turns that symmetry into the conservation law for free,
                  with no extra calculation needed.
                </p>
              </details>
            </div>

            <h3>Non-Autonomous Systems</h3>
            <p>
              "Non-autonomous" means the rules of the system change with time: the Lagrangian
              depends explicitly on {`$t$`}, not just through the motion of the system. Picture a
              pendulum whose pivot is being shaken, or a circuit whose driving voltage varies.
            </p>
            <p>
              For these systems {`$L: TM \\times \\mathbb{R} \\to \\mathbb{R}$`} (the extra{' '}
              {`$\\mathbb{R}$`} is time). The Lagrange equations still hold in any local
              coordinates. But the energy {`$H$`} is no longer conserved, because energy is flowing
              in or out from whatever is driving the time-dependence.
            </p>

            <div
              className="lrn-contrast"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                border: '1px solid rgba(240,240,250,0.15)',
                margin: '32px 0'
              }}
            >
              <div style={{ padding: '20px', borderRight: '1px solid rgba(240,240,250,0.15)' }}>
                <span className="lrn-label">Autonomous</span>
                <p>{`$L: TM \\to \\mathbb{R}$. The Lagrangian has no explicit dependence on time. Energy $H$ is conserved.`}</p>
              </div>
              <div style={{ padding: '20px' }}>
                <span className="lrn-label">Non-Autonomous</span>
                <p>{`$L: TM \\times \\mathbb{R} \\to \\mathbb{R}$. Time appears explicitly. Energy is not conserved in general.`}</p>
              </div>
            </div>

            <VizCard id="02.6.2" title="Pendulum Dynamics">
              <PendulumLive />
            </VizCard>
            <VizCard id="02.6.3" title="Double Pendulum">
              <DoublePendulum />
            </VizCard>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-2" data-section-index="2">
            <h2>D'Alembert's Principle</h2>
            <p>
              Picture a bead sliding along a wire. The wire pushes the bead sideways to keep it on
              the wire, but never along the wire. That sideways push does not speed the bead up or
              slow it down: it just confines it. Physicists say the constraint force does no work
              along the allowed motion.
            </p>
            <p>
              D'Alembert's principle is the statement that this is true for all ideal holonomic
              constraints. The forces from the wire, rod, or surface that hold the system to its
              constraint are invisible in the equations of motion along the constraint. You never
              have to compute them.
            </p>
            <p>
              <strong>When to use this:</strong> handle constrained systems without computing
              constraint forces, or check that a constraint behaves ideally (no friction, no sliding
              losses).
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A bead slides along a rod tilted at angle {`$\\alpha$`} from vertical. The rod spins
                around the vertical axis with angular velocity {`$\\omega$`}. What force along the
                rod (the only direction the bead can move) drives the bead?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`The spinning rod tries to fling the bead outward (the centrifugal effect). The component of that effect along the rod is $m\\omega^2 q \\sin^2 \\alpha$, where $q$ is the distance from the pivot. The Lagrange equation gives $m\\ddot{q} = m\\omega^2 q \\sin^2\\alpha$ when gravity is ignored.`}</p>
              </details>
            </div>

            <h3>Formulation</h3>
            <p>
              Take {`$n$`} mass points in flat 3D space (the full ambient space is{' '}
              {`$\\mathbb{E}^{3n}$`}, where each triple of coordinates describes one particle).
              Constrain them to a submanifold {`$M$`}. The constraint force {`$R$`} pushes
              perpendicular to {`$M$`}, never along it.
            </p>
            <p>
              D'Alembert's principle says: at every instant, the difference between mass times
              acceleration and the applied force has zero dot product with every direction of
              allowed motion. A "virtual displacement" {`$\\xi$`} is just an imagined tiny step the
              system <em>could</em> take while staying on the constraint:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$(m\\ddot{x} + \\nabla U,\\, \\xi) = 0 \\quad \\text{for all } \\xi \\in TM_x$$`}</span>
            </div>
            <p>
              Reading the symbols: {`$m\\ddot{x}$`} is mass times acceleration; {`$\\nabla U$`} is
              the force from the potential, with sign chosen so that {`$-\\nabla U$`} is the actual
              force; {`$\\xi$`} is any allowed direction of motion at the point {`$x$`}; and{' '}
              {`$(\\,,\\,)$`} is the dot product. The equation says: the part of the combined vector{' '}
              {`$m\\ddot{x} + \\nabla U$`} along any allowed direction is zero.
            </p>

            <VizCard id="02.6.4" title="Constraint Forces">
              <ConstraintForce />
            </VizCard>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The total force on the system has two parts: the applied force {`$-\\nabla U$`} from
                the potential and the constraint force {`$R$`} from whatever is holding the system
                to {`$M$`}. So the total force is {`$F = -\\nabla U + R$`}.
              </p>
              <p>Newton's second law: {`$m\\ddot{x} = F = -\\nabla U + R$`}.</p>
              <p>{`Move things around: $m\\ddot{x} + \\nabla U = R$.`}</p>
              <p>
                Because {`$R$`} is perpendicular to {`$M$`}, its dot product with any tangent vector{' '}
                {`$\\xi$`} is zero: {`$(R, \\xi) = 0$`}.
              </p>
              <p>
                Substituting one into the other gives D'Alembert's equation:{' '}
                {`$(m\\ddot{x} + \\nabla U, \\xi) = 0$`} for every {`$\\xi \\in TM_x$`}.
              </p>
            </div>

            <h3>Equivalence with the Variational Principle</h3>
            <p>
              D'Alembert's principle and the variational principle (action stationary on curves that
              stay on {`$M$`}) say the same thing. Both pick out exactly the same motions.
            </p>
            <p>
              Concretely: a curve satisfies {`$(m\\ddot{x} + \\nabla U, \\xi) = 0$`} for all virtual
              displacements if and only if its action is stationary among nearby curves that also
              stay on {`$M$`}. Two languages, one physics.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">
                  Ideal holonomic constraints: three equivalent definitions
                </span>
                <p className="lrn-step-content">
                  1. The limit of an infinitely stiff potential {`$N q_2^2$`} as{' '}
                  {`$N \\to \\infty$`}.
                </p>
                <p className="lrn-step-content">
                  2. A natural Lagrangian system on the submanifold.
                </p>
                <p className="lrn-step-content">
                  3. The D'Alembert-Lagrange principle: constraint forces do no virtual work.
                </p>
              </div>
            </div>

            <h3>Worked Example: Bead on a Tilted Rotating Rod</h3>
            <p>
              A bead of mass {`$m$`} slides along a straight rod tilted at angle {`$\\alpha$`} from
              the vertical. The rod itself rotates around the vertical axis with angular velocity{' '}
              {`$\\omega$`}.
            </p>
            <p>
              Use {`$q$`} = distance from the pivot along the rod. That is the bead's only
              coordinate, because the rod fixes everything else.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Bead on Rotating Rod</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Place the bead in 3D Cartesian coordinates, with the rotation built in: $x = q\\sin\\alpha\\cos(\\omega t)$, $y = q\\sin\\alpha\\sin(\\omega t)$, $z = -q\\cos\\alpha$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Differentiate and add up the squares to get the speed squared: $\\dot{x}^2+\\dot{y}^2+\\dot{z}^2 = \\dot{q}^2 + q^2\\omega^2\\sin^2\\alpha$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`Kinetic energy is one-half mass times speed squared: $T = \\frac{m}{2}(\\dot{q}^2 + q^2\\omega^2\\sin^2\\alpha)$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">{`Gravity acts straight down. The component along the rod is $-mg\\cos\\alpha$, so the potential is $U = -mgq\\cos\\alpha$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">{`The Lagrangian: $L = T - U = \\frac{m}{2}\\dot{q}^2 + \\frac{m}{2}q^2\\omega^2\\sin^2\\alpha + mgq\\cos\\alpha$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">6.</span>
                <div className="lrn-proof-step-content">{`Apply Euler-Lagrange to read off the equation of motion: $m\\ddot{q} = m\\omega^2 q\\sin^2\\alpha + mg\\cos\\alpha$. The first term is the spinning rod flinging the bead outward; the second is gravity pulling it down along the rod.`}</div>
              </div>
              <div className="lrn-qed">Result</div>
            </div>

            <p>
              The constraint force from the rod on the bead never appeared in the calculation. That
              is the power of D'Alembert's principle.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                In the worked example, why was the normal force the rod exerts on the bead never
                needed?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The rod allows motion along its length only. The constraint force points
                  perpendicular to the rod, so it has zero dot product with any virtual displacement
                  along {`$q$`}.
                </p>
                <p>
                  D'Alembert's principle uses only the parts of forces that point along allowed
                  directions. The normal force projects to zero, so it drops out of the Lagrangian
                  formulation entirely.
                </p>
                <p>
                  If you ever wanted the normal force itself, you would compute it after the fact
                  from {`$R = m\\ddot{x} + \\nabla U$`}. For the equation of motion along the rod,
                  it is invisible.
                </p>
              </details>
            </div>

            <h3>Remarks on D'Alembert's Principle</h3>
            <ul className="lrn-list">
              <li>
                For a system of {`$n$`} mass points with holonomic constraints, every result above
                carries over without change.
              </li>
              <li>
                Statics special case: a system is in equilibrium exactly when the applied force is
                perpendicular to the constraint surface (no component along any allowed direction
                means nothing accelerates).
              </li>
              <li>
                Time-dependent constraints (a moving wire, a shrinking surface) still satisfy the
                principle. Treat {`$M$`} as a time-varying submanifold of the extended space{' '}
                {`$\\mathbb{E}^{3n} \\times \\mathbb{R}$`}.
              </li>
              <li>
                Conservation laws carry over: invariance under translations gives momentum
                conservation, invariance under rotations gives angular momentum conservation.
              </li>
              <li>
                Whether a real-world constraint actually behaves as an ideal holonomic constraint is
                a question for experiment, not for proof. You assume it, check it, and move on.
              </li>
              <li>
                A sphere rolling without slipping has a velocity constraint that cannot be rewritten
                as a position constraint. Such systems are called <em>non-holonomic</em>, and
                D'Alembert's principle does not apply to them directly.
              </li>
              <li>
                In an over-constrained system (a beam resting on three supports instead of two), you
                can shift load between supports without changing the motion. The total constraint
                condition fixes the motion, but the individual constraint forces are not uniquely
                determined.
              </li>
            </ul>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Non-Holonomic Warning</span>
              <p>
                Not every mechanical constraint is holonomic. A sphere rolling without slipping
                obeys a velocity rule (no sliding at the contact point) that cannot be turned into a
                position rule by integration.
              </p>
              <p>Arnold does not treat non-holonomic systems in this book.</p>
            </div>

            <div
              className="lrn-contrast"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                border: '1px solid rgba(240,240,250,0.15)',
                margin: '32px 0'
              }}
            >
              <div style={{ padding: '20px', borderRight: '1px solid rgba(240,240,250,0.15)' }}>
                <span className="lrn-label">Holonomic Constraints</span>
                <p>
                  The constraint surface is a manifold. D'Alembert's principle applies. Lagrange
                  equations hold. The configuration space is well-defined.
                </p>
              </div>
              <div style={{ padding: '20px' }}>
                <span className="lrn-label">Non-Holonomic Constraints</span>
                <p>
                  The velocity constraint cannot be integrated into a position constraint. There is
                  no single configuration manifold. D'Alembert's principle does not apply directly.
                  Not treated in this book.
                </p>
              </div>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What is the configuration space of a spherical double pendulum?',
        a: "(1) Each arm can point in any direction in 3D, so each arm's endpoint traces a sphere. (2) The two arms are independent. So the configuration space is $S^2 \\times S^2$. (3) Dimension: $2 + 2 = 4$ degrees of freedom. (4) This is a specific case of the general rule: if degrees of freedom are independent, the configuration space is a product manifold."
      },
      {
        q: 'TRANSFER: A free rigid body in 3D space can translate and rotate. What is its configuration space and dimension?',
        a: '(1) Translation: the center of mass can be anywhere in $\\mathbb{R}^3$. That gives 3 degrees of freedom. (2) Rotation: the orientation of the body is an element of $SO(3)$. That gives 3 more degrees of freedom. (3) Full configuration space: $\\mathbb{R}^3 \\times SO(3)$, dimension 6. (4) This matches: a rigid body has 6 degrees of freedom, just as expected from Euclidean mechanics.'
      },
      {
        q: 'Define the tangent bundle $TM$ and explain what its local coordinates represent physically.',
        a: '(1) $TM = \\{(x, v) : x \\in M, v \\in TM_x\\}$: pairs of (position, velocity vector). (2) Local coordinates $(q_1, \\ldots, q_k, \\xi_1, \\ldots, \\xi_k)$ where $q_i$ are the positions and $\\xi_i = \\dot{q}_i$ are the generalized velocities. (3) The Lagrangian $L: TM \\to \\mathbb{R}$ is a function on the tangent bundle: it takes both position and velocity as input. (4) The phase space of Lagrangian mechanics is $TM$, not the configuration space $M$ itself.'
      },
      {
        q: 'What is a natural Lagrangian system? Give the formula for $L$ in local coordinates.',
        a: '(1) A natural system has a Riemannian manifold $M$ as configuration space, kinetic energy $T = \\frac{1}{2}\\langle v, v \\rangle$, and Lagrangian $L = T - U$. (2) In local coordinates: $L = \\frac{1}{2}\\sum_{ij} a_{ij}(q)\\dot{q}_i\\dot{q}_j - U(q)$ where $a_{ij}(q)$ is the metric tensor. (3) The kinetic energy $T$ and the Riemannian metric are the same object: $T(v) = \\frac{1}{2}g(v,v)$. (4) Most physical systems with holonomic constraints are natural systems.'
      },
      {
        q: 'ELABORATE: Why does kinetic energy define a Riemannian metric on the configuration manifold?',
        a: '(1) In coordinates, $T = \\frac{1}{2}\\sum_{ij} a_{ij}(q)\\dot{q}_i\\dot{q}_j$. (2) This is a positive definite quadratic form in the velocity $\\dot{q}$: exactly the definition of a Riemannian metric $g(v,v) = \\sum a_{ij}v_iv_j$. (3) Positive definiteness comes from the physical requirement $T \\geq 0$ with equality only when the system is at rest. (4) So the kinetic energy literally is the Riemannian metric applied to the velocity vector. Mechanics and differential geometry are the same structure.'
      },
      {
        q: "Formulate D'Alembert's principle. What does it say about constraint forces?",
        a: '(1) For a system with holonomic constraints (motion on manifold $M$): $(m\\ddot{x} + \\nabla U, \\xi) = 0$ for all virtual displacements $\\xi \\in TM_x$. (2) Equivalently: the constraint force $R = m\\ddot{x} + \\nabla U$ is perpendicular to the constraint manifold. (3) Physical meaning: constraint forces do no work on motions along the constraint. They are "ideal." (4) Consequence: you never need to compute constraint forces to find the equations of motion along $M$.'
      },
      {
        q: 'PREDICT: A bead on a rotating rod (angle $\\alpha$ from vertical, angular velocity $\\omega$). The generalized coordinate is $q$ (distance along rod). Predict the equation of motion.',
        a: '(1) The Lagrangian includes the centrifugal contribution: $L = \\frac{1}{2}m\\dot{q}^2 + \\frac{1}{2}m\\omega^2 q^2\\sin^2\\alpha - mgq\\cos\\alpha$. (2) $\\frac{\\partial L}{\\partial \\dot{q}} = m\\dot{q}$, $\\frac{\\partial L}{\\partial q} = m\\omega^2 q\\sin^2\\alpha - mg\\cos\\alpha$. (3) Euler-Lagrange: $m\\ddot{q} = m\\omega^2 q\\sin^2\\alpha - mg\\cos\\alpha$. (4) The centrifugal term drives the bead outward along the rod; gravity pulls it toward the pivot.'
      },
      {
        q: 'What does "holonomic constraint" mean? Give two examples and one non-example.',
        a: '(1) A holonomic constraint restricts the configuration to a submanifold defined by equations on positions (not velocities). (2) Examples: a pendulum constrained to a circle ($r = l$, holonomic); two mass points connected by a rigid rod ($|r_1 - r_2| = l$, holonomic). (3) Non-example: a sphere rolling without slipping has constraint $v_{\\text{contact}} = \\omega \\times r$, a velocity constraint that cannot be integrated to a position constraint. This is non-holonomic. (4) Key test: can the constraint be written as $f(q, t) = 0$ (holonomic) or does it involve $\\dot{q}$ in a non-integrable way (non-holonomic)?'
      },
      {
        q: 'TRANSFER: A system lives on the torus $T^2 = S^1 \\times S^1$ with angles $\\theta_1, \\theta_2$. The Lagrangian is $L = \\frac{1}{2}(\\dot{\\theta}_1^2 + \\dot{\\theta}_2^2)$. What are the equations of motion and what do they tell you about the trajectories?',
        a: "(1) Euler-Lagrange for $\\theta_1$: $\\frac{d}{dt}(\\dot{\\theta}_1) = 0$, so $\\dot{\\theta}_1 = \\omega_1 = \\text{const}$. (2) Similarly $\\dot{\\theta}_2 = \\omega_2 = \\text{const}$. (3) The trajectories are $\\theta_1(t) = \\omega_1 t + \\theta_1^0$, $\\theta_2(t) = \\omega_2 t + \\theta_2^0$: uniform winding on the torus. (4) If $\\frac{\\omega_1}{\\omega_2}$ is irrational, by Poincaré's recurrence applied to the phase flow, every trajectory is dense on $T^2$. This is the winding line example from Arnold's Section 16E."
      },
      {
        q: "TRANSFER: What is the equivalence theorem for D'Alembert's principle and the variational principle?",
        a: "(1) D'Alembert: a curve satisfies $(m\\ddot{x} + \\nabla U, \\xi) = 0$ for all $\\xi \\in TM_x$. (2) Variational: the curve is a conditional extremal of the action $\\int(T-U)\\, dt$ restricted to curves in $M$. (3) These two conditions are equivalent. Both lead to the same Lagrange equations in local coordinates. (4) The equivalence shows that Newton's law (projected onto the constraint) and the least action principle are the same statement in different languages."
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Mechanics on Manifolds',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Core Equations</h2>

            <h3>Tangent Bundle and Riemannian Metric</h3>
            <table>
              <thead>
                <tr>
                  <th>Object</th>
                  <th>Definition</th>
                  <th>Role in mechanics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tangent bundle {`$TM$`}</td>
                  <td>{`$\\{(x,v): x \\in M, v \\in TM_x\\}$`}</td>
                  <td>Phase space for Lagrangian mechanics</td>
                </tr>
                <tr>
                  <td>Riemannian metric</td>
                  <td>{`$ds^2 = \\sum_{ij} a_{ij}(q)\\, dq_i\\, dq_j$`}</td>
                  <td>
                    Encodes kinetic energy: {`$T = \\frac{1}{2}\\sum a_{ij}\\dot{q}_i\\dot{q}_j$`}
                  </td>
                </tr>
                <tr>
                  <td>Cyclic coord (Hamiltonian)</td>
                  <td>{`$\\frac{\\partial H}{\\partial q_i} = 0 \\Rightarrow \\dot{p}_i = 0$`}</td>
                  <td>Conservation in phase space</td>
                </tr>
              </tbody>
            </table>

            <h3>D'Alembert's Principle</h3>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$(m\\ddot{x} + \\nabla U,\\, \\xi) = 0 \\quad \\forall\\, \\xi \\in TM_x$$`}</span>
            </div>
            <p>
              Constraint forces are perpendicular to the constraint manifold. They do no work on
              virtual displacements.
            </p>

            <h3>Configuration Space Examples</h3>
            <table>
              <thead>
                <tr>
                  <th>System</th>
                  <th>Config space</th>
                  <th>Dimension</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Planar pendulum</td>
                  <td>{`$S^1$`}</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Spherical pendulum</td>
                  <td>{`$S^2$`}</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Planar double pendulum</td>
                  <td>{`$T^2 = S^1 \\times S^1$`}</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Spherical double pendulum</td>
                  <td>{`$S^2 \\times S^2$`}</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Rigid segment in plane</td>
                  <td>{`$\\mathbb{R}^2 \\times S^1$`}</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Rigid body (3D)</td>
                  <td>{`$\\mathbb{R}^3 \\times SO(3)$`}</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ]
    }
  }

  return <LearningTemplate config={config} />
}
