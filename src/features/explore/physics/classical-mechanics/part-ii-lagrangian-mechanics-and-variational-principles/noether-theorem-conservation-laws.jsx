import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  Plot as P2,
  Axes as A2,
  Parametric as Pa2,
  Polyline as Pl2,
  Dot as D2,
  Arrow as Ar2,
  Tex as T2,
  Slider as Sl2,
  DragHandle as DH2,
  OPACITY as O2,
  VizCard
} from '../../../../../components/viz/physics-viz/primitives'

// Visualizations

function LegendreGeometry() {
  const [xStar, setXStar] = React.useState(1.5)
  const f = x => 0.5 * x * x
  const yStar = f(xStar)
  const tan = x => yStar + xStar * (x - xStar)
  const g = xStar * xStar - yStar
  return (
    <div style={{ width: '100%' }}>
      <P2 xRange={[-0.5, 4.2]} yRange={[-1.5, 5.5]} width={520} height={280}>
        <A2 step={1} showGrid={false} showTicks={false} />
        <Pa2 xy={x => [x, f(x)]} t={[-0.4, 3.3]} opacity={O2.fg} strokeWidth={2} />
        <Pa2 xy={x => [x, tan(x)]} t={[-0.3, 3.3]} opacity={O2.accent} dash="4 4" />
        <D2 x={xStar} y={yStar} />
        <D2 x={0} y={-g} opacity={O2.accent} />
        <Pa2 xy={t => [xStar, t]} t={[0, yStar]} opacity={O2.faint} dash="3 3" />
        <T2 at={[xStar + 0.05, -0.1]} tex="x^*" anchor="start" opacity={O2.accent} dy={16} />
        <T2 at={[3.0, f(3.0) + 0.15]} tex="f(x)" opacity={O2.fg} />
        <T2 at={[3.05, tan(3.05) + 0.15]} tex={`p=${xStar.toFixed(2)}`} opacity={O2.accent} />
        <T2 at={[0.05, -g - 0.15]} tex={`-g(p) = ${(-g).toFixed(2)}`} opacity={O2.accent} dy={20} />
      </P2>
      <Sl2 label="x*" value={xStar} min={0.2} max={3.0} step={0.02} onChange={setXStar} />
    </div>
  )
}

function PhaseFlow() {
  const m = 1,
    omega = 1.2
  const [pt, setPt] = React.useState([2.0, 1.0])
  const Hval = (0.5 * pt[1] * pt[1]) / m + 0.5 * m * omega * omega * pt[0] * pt[0]
  const a = Math.sqrt((2 * Hval) / (m * omega * omega))
  const b = m * omega * a
  const N = 96
  const ell = (a_, b_) =>
    Array.from({ length: N + 1 }, (_, i) => {
      const t = (i / N) * 2 * Math.PI
      return [a_ * Math.cos(t), b_ * Math.sin(t)]
    })
  const [phase, setPhase] = React.useState(0)
  React.useEffect(() => {
    let raf,
      last = performance.now()
    const loop = now => {
      const dt = (now - last) / 1000
      last = now
      setPhase(p => p + dt)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
  const phi0 = Math.atan2(-pt[1] / (m * omega), pt[0])
  const qNow = a * Math.cos(omega * phase + phi0)
  const pNow = -m * omega * a * Math.sin(omega * phase + phi0)
  const levelHs = [0.5, 1.5, 3.0, 5.0]
  return (
    <P2 xRange={[-3.4, 3.4]} yRange={[-3.4, 3.4]} width={420} height={300}>
      <A2 step={1} showGrid={false} showTicks={false} />
      {levelHs.map((H, i) => {
        const aa = Math.sqrt((2 * H) / (m * omega * omega))
        const bb = m * omega * aa
        return <Pl2 key={i} points={ell(aa, bb)} opacity={O2.faint} closed />
      })}
      <Pl2 points={ell(a, b)} opacity={O2.fg} closed strokeWidth={1.5} />
      <D2 x={qNow} y={pNow} r={5} opacity={O2.accent} />
      <DH2 x={pt[0]} y={pt[1]} onChange={(x, y) => setPt([x, y])} label="(q,p)" />
      <T2 at={[3.2, -0.05]} tex="q" anchor="end" dy={18} opacity={O2.dim} />
      <T2 at={[0.05, 3.1]} tex="p" opacity={O2.dim} />
      <T2
        at={[-3.3, 3.0]}
        tex={`H = \\tfrac{p^2}{2m}+\\tfrac{1}{2}m\\omega^2 q^2 = ${Hval.toFixed(2)}`}
        opacity={O2.fg}
        size={10}
      />
      <T2 at={[-3.3, -3.0]} tex={`\\omega = ${omega.toFixed(1)}`} opacity={O2.dim} size={10} />
    </P2>
  )
}

function NoetherSymmetry() {
  const [shift, setShift] = React.useState(0.7)
  const path = t => [t, 0.3 * Math.sin(Math.PI * t)]
  const shifted = t => [t, 0.3 * Math.sin(Math.PI * t) + shift]
  return (
    <div style={{ width: '100%' }}>
      <P2 xRange={[-0.4, 4.4]} yRange={[-0.9, 1.8]} width={520} height={220}>
        <A2 step={1} showGrid={false} showTicks={false} />
        <Pa2 xy={path} t={[0, 4]} opacity={O2.fg} strokeWidth={2} />
        <Pa2 xy={shifted} t={[0, 4]} opacity={O2.accent} dash="4 4" />
        {[0.5, 1.5, 2.5, 3.5].map((tx, i) => {
          const a = path(tx),
            b = shifted(tx)
          return <Ar2 key={i} from={a} to={b} head={5} opacity={O2.dim} />
        })}
        <T2
          at={[2.0, path(2.0)[1] - 0.1]}
          tex="\gamma(t)"
          anchor="middle"
          dy={18}
          opacity={O2.fg}
        />
        <T2
          at={[2.0, shifted(2.0)[1] + 0.1]}
          tex={`h^{${shift.toFixed(2)}}(\\gamma)`}
          anchor="middle"
          opacity={O2.accent}
        />
      </P2>
      <Sl2 label="s" value={shift} min={-1} max={1.5} step={0.02} onChange={setShift} />
    </div>
  )
}

function TranslationSymmetry() {
  const [t, setT] = React.useState(0)
  React.useEffect(() => {
    let raf,
      last = performance.now()
    const loop = now => {
      const dt = (now - last) / 1000
      last = now
      setT(p => (p + dt * 0.6) % 4)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
  const x = -0.4 + t
  return (
    <P2 xRange={[-0.4, 4.6]} yRange={[-1.4, 1.6]} width={520} height={220}>
      <A2 step={1} showGrid={false} showTicks={false} />
      <Pa2 xy={s => [-0.4 + s * 5, -0.4]} t={[0, 1]} opacity={O2.dim} />
      <D2 x={x} y={-0.4} r={7} />
      <Ar2 from={[x, -0.4]} to={[x + 0.6, -0.4]} opacity={O2.fg} head={6} />
      <Ar2 from={[0.5, 1.0]} to={[3.5, 1.0]} opacity={O2.accent} head={7} />
      <T2 at={[2.0, 1.05]} tex="\hat{T}_a" anchor="middle" opacity={O2.accent} />
      <T2 at={[x + 0.7, -0.4]} tex="p_x" opacity={O2.fg} size={11} />
      <T2 at={[2.0, -1.1]} tex="p_x = \text{const}" anchor="middle" opacity={O2.fg} size={11} />
    </P2>
  )
}

export default function NoetherTheoremConservationLaws() {
  const config = {
    cssPrefix: 'ntcl',
    source: 'Mathematical Methods of Classical Mechanics - Arnold',
    documentTitle: "Noether's Theorem and Conservation Laws - AETHER",
    learning: {
      groupTitle: 'Part II: Lagrangian Mechanics and Variational Principles',
      category: 'Physics',
      title: "Noether's Theorem and Conservation Laws",
      subtitle:
        "The Legendre transform, Hamiltonian mechanics, Liouville's theorem, and symmetry-to-conservation",
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Legendre Transformations</h2>
            <p>
              The Legendre transform reorganizes a curve. The original function {`$f(x)$`} tells you
              the height of the curve at each {`$x$`}. The transformed function {`$g(p)$`}
              tells you, for each slope {`$p$`}, where the tangent line at that slope cuts the
              vertical axis (taken with a minus sign). The two functions hold the same information
              arranged differently.
            </p>
            <p>
              In mechanics this is the move that trades velocity for momentum. The Lagrangian uses
              position and velocity. The Hamiltonian uses position and momentum. The Legendre
              transform carries you from one to the other.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`Given $f(x) = x^2$, define $p = f'(x) = 2x$. What function $g(p)$ do you predict is the Legendre dual?`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`$g(p) = px - f(x) = p \\cdot \\frac{p}{2} - \\left(\\frac{p}{2}\\right)^2 = \\frac{p^2}{4}$.`}</p>
              </details>
            </div>

            <h3>Definition of the Legendre Transform</h3>
            <p>
              Start with a function {`$f(x)$`} that is strictly convex: its graph curves upward
              everywhere, so every tangent line touches the graph at exactly one point.
            </p>
            <p>
              {`Pick any slope $p$. Because the curve keeps bending the same way, exactly one $x$ has $f'(x) = p$. Call it $x(p)$. This is the value of $x$ where the curve has the slope you asked for.`}
            </p>
            <p>The Legendre transform is then defined as:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$g(p) = px(p) - f(x(p))$$`}</span>
            </div>
            <p>
              Read this geometrically: draw the tangent line to {`$f$`} at the point with slope{' '}
              {`$p$`}. The line crosses the vertical axis somewhere. Take that intercept and flip
              its sign. That number is {`$g(p)$`}.
            </p>

            <VizCard id="02.2.1" title="Legendre Transform">
              <LegendreGeometry />
            </VizCard>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The expression $px - f(x)$ measures the vertical distance between the line $y = px$ (which goes through the origin with slope $p$) and the curve $y = f(x)$.`}
              </p>
              <p>
                Since the curve bends upward, this distance has one maximum: the {`$x$`} where the
                slope of {`$f$`} matches {`$p$`}. That maximum value is {`$g(p)$`}.
              </p>
              <p>
                {`So the Legendre transform is what you get by maximizing $px - f(x)$ over $x$. The two definitions agree.`}
              </p>
            </div>

            <h3>Worked Examples</h3>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`$f(x) = x^2$`}</span>
                <p className="lrn-step-content">{`$f'(x) = 2x = p$, so $x(p) = \\frac{p}{2}$. Then $g(p) = p \\cdot \\frac{p}{2} - \\left(\\frac{p}{2}\\right)^2 = \\frac{p^2}{4}$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`$f(x) = \\frac{m}{2}x^2$`}</span>
                <p className="lrn-step-content">{`$f'(x) = mx = p$, so $x(p) = \\frac{p}{m}$. Then $g(p) = \\frac{p^2}{m} - \\frac{m}{2}\\cdot\\frac{p^2}{m^2} = \\frac{p^2}{2m}$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`$f(x) = \\frac{x^\\alpha}{\\alpha}$`}</span>
                <p className="lrn-step-content">{`$f'(x) = x^{\\alpha-1} = p$, so $x(p) = p^{\\frac{1}{\\alpha-1}}$. The dual is $g(p) = \\frac{p^\\beta}{\\beta}$ where $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = 1$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Convex polygon</span>
                <p className="lrn-step-content">
                  A polygon has corners (single points) and edges (where the slope is constant). The
                  transform swaps the two: each corner of the original becomes an edge of the
                  transform, and each edge becomes a corner.
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`In the example $f(x) = \\frac{m}{2}x^2$, why does $g(p) = \\frac{p^2}{2m}$ have $m$ in the denominator rather than the numerator?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`The relation $p = mx$ inverts to $x = \\frac{p}{m}$. When you substitute back, the $m$ from $x^2$ and the $m$ from $p = mx$ combine to give $m$ in the denominator. In physics, $T = \\frac{m}{2}\\dot{q}^2$ has Legendre dual $g(p) = \\frac{p^2}{2m}$, which is exactly the kinetic energy expressed in terms of momentum.`}</p>
              </details>
            </div>

            <h3>The Transform Is Its Own Inverse</h3>
            <p>
              Apply the Legendre transform to {`$f$`} and you get {`$g$`}. Apply it again, this time
              to {`$g$`}, and you get {`$f$`} back. Nothing is lost in the round trip.
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Key Theorem</span>
              <p>{`If $g$ is the Legendre transform of $f$, then $f$ is the Legendre transform of $g$.`}</p>
              <p>The transform is its own inverse.</p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Involutivity</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Build the function $G(x, p) = xp - g(p)$. We want to maximize this over $p$ for a fixed $x$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Setting $\\frac{\\partial G}{\\partial p} = x - g'(p) = 0$ gives $g'(p) = x$. So the maximum sits at the value of $p$ where $g$ has slope $x$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`From the original transform, $f'(x) = p$. Combined with $g'(p) = x$, convexity forces these two relations to be inverses of each other, so $p(x) = f'(x)$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">{`Plug back in: $G(x, p(x)) = xf'(x) - g(f'(x)) = xf'(x) - (xf'(x) - f(x)) = f(x)$. The two definitions of $g$ cancel and only $f(x)$ survives.`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Young's Inequality</h3>
            <p>
              {`Here is something the definition gives away for free. We built $g(p)$ as the maximum value of $px - f(x)$ over all $x$. Any specific $x$ produces a value no bigger than the maximum:`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$px \\leq f(x) + g(p)$$`}</span>
            </div>
            <p>
              {`Equality holds when $p$ and $x$ are matched: $p = f'(x)$. In that case $x$ is the slope-matching point that defines $g(p)$. Variables linked this way ($x$ paired with the slope of $f$ at $x$) are called`}{' '}
              <strong>conjugate</strong>.
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Instance</span>
              <p>{`For $f(x) = \\frac{1}{2}x^2$: $px \\leq \\frac{1}{2}x^2 + \\frac{1}{2}p^2$.`}</p>
            </div>
            <div className="lrn-callout">
              <span className="lrn-callout-label">General Form (Hölder pair)</span>
              <p>{`For $f(x) = \\frac{x^\\alpha}{\\alpha}$: $\\frac{x^\\alpha}{\\alpha} + \\frac{p^\\beta}{\\beta} \\geq px$ where $\\frac{1}{\\alpha}+\\frac{1}{\\beta}=1$.`}</p>
            </div>

            <h3>Many Variables</h3>
            <p>
              The same construction works when {`$f$`} is a function of several variables instead of
              one. Replace the slope {`$p$`} with a vector of partial slopes and everything carries
              over.
            </p>
            <p>
              {`If $f(\\mathbf{x}) = \\sum_{ij} f_{ij} x_i x_j$ is a quadratic form (a sum of products of pairs of components), then $g(\\mathbf{p}) = \\sum_{ij} g_{ij} p_i p_j$, and the matrix $(g_{ij})$ is the inverse of $(f_{ij})$.`}
            </p>
            <p>
              This matters for physics. Kinetic energy in many systems looks like{' '}
              {`$T = \\sum a_{ij}\\dot{q}_i\\dot{q}_j$`}: a quadratic form in the velocities. The
              vector version of the Legendre transform is exactly what carries this kinetic energy
              from velocity coordinates into momentum coordinates.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Hamilton's Equations</h2>
            <p>
              The Lagrangian {`$L(q, \\dot{q})$`} describes a system using position and velocity.
              The Hamiltonian {`$H(q, p)$`} describes the same system using position and{' '}
              <strong>momentum</strong> {`$p = \\frac{\\partial L}{\\partial \\dot{q}}$`}.
            </p>
            <p>
              The Legendre transform applied in the velocity direction is what carries you from one
              to the other.
            </p>
            <p>
              The payoff: the equations of motion change shape. Lagrange gives you {`$n$`}{' '}
              second-order equations in the velocities. Hamilton gives you {`$2n$`} first-order
              equations in position and momentum. The second form is what opens the door to
              phase-space methods, conservation theorems, and most of modern dynamics.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`For 1D motion with $L = \\frac{1}{2}\\dot{q}^2 - U(q)$, what function $H(p, q)$ do you predict?`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`$p = \\frac{\\partial L}{\\partial \\dot{q}} = \\dot{q}$, so $\\dot{q} = p$. Then $H = p\\dot{q} - L = p^2 - (\\frac{1}{2}p^2 - U) = \\frac{1}{2}p^2 + U(q)$.`}</p>
              </details>
            </div>

            <h3>Deriving Hamilton's Equations</h3>
            <p>
              Define {`$H(p, q, t) = p\\dot{q} - L(q, \\dot{q}, t)$`} with{' '}
              {`$p = \\frac{\\partial L}{\\partial \\dot{q}}$`}. The argument is short. Write down
              the change in {`$H$`} when you nudge {`$q$`}, {`$p$`}, and {`$t$`} two different ways,
              then match the two expressions term by term.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Deriving Hamilton's Equations</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Differentiate the definition piece by piece: $dH = \\dot{q}\\, dp + p\\, d\\dot{q} - \\frac{\\partial L}{\\partial q}dq - \\frac{\\partial L}{\\partial \\dot{q}}d\\dot{q} - \\frac{\\partial L}{\\partial t}dt$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`The two $d\\dot{q}$ terms cancel because $p$ was defined as $\\frac{\\partial L}{\\partial \\dot{q}}$. So $dH = \\dot{q}\\, dp - \\frac{\\partial L}{\\partial q}dq - \\frac{\\partial L}{\\partial t}dt$. The velocity has dropped out: $H$ truly is a function of $(p, q, t)$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`The Euler-Lagrange equation says $\\frac{\\partial L}{\\partial q} = \\dot{p}$. Substitute it in to write $dH$ entirely in terms of $\\dot{p}$ and $\\dot{q}$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">{`The other way to write $dH$ uses the chain rule directly: $dH = \\frac{\\partial H}{\\partial p}dp + \\frac{\\partial H}{\\partial q}dq + \\frac{\\partial H}{\\partial t}dt$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">{`Match coefficients of $dp$ and $dq$ in the two expressions: $\\dot{q} = \\frac{\\partial H}{\\partial p}$ and $-\\dot{p} = \\frac{\\partial H}{\\partial q}$.`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Hamilton's Equations</span>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\dot{p} = -\\frac{\\partial H}{\\partial q}, \\qquad \\dot{q} = \\frac{\\partial H}{\\partial p}$$`}</span>
              </div>
              <p>
                In words: the rate of change of momentum is set by how {`$H$`} varies with position.
                The rate of change of position is set by how {`$H$`} varies with momentum. The minus
                sign in the first equation is what produces every conservation law downstream.
              </p>
            </div>

            <p>
              {`Lagrange gave us $n$ second-order equations. Hamilton gives us $2n$ first-order ones. More equations, but each is simpler, and together they describe a single vector field on the space of $(p, q)$ pairs. That geometric viewpoint is the whole reason to make the switch.`}
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does switching to {`$2n$`} first-order equations help, even though it doubles
                the count?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  A first-order system at every point {`$(p, q)$`} tells you a unique direction of
                  motion {`$(\\dot{p}, \\dot{q})$`}. That is a <strong>vector field</strong>: an
                  arrow at every point of the phase space. The motion of the system is then just the
                  act of following those arrows.
                </p>
                <p>
                  Theorems about volumes, areas, and recurrence apply directly to vector fields.
                  Second-order equations have no such geometric picture in {`$(q, \\dot{q})$`}{' '}
                  space, which is why most deep results in mechanics are stated in Hamilton's form.
                </p>
              </details>
            </div>

            <h3>Hamiltonian as Total Energy</h3>
            <p>
              For most physical systems, the Hamiltonian turns out to equal the total energy:
              kinetic plus potential. This requires one mild assumption on the kinetic energy.
            </p>
            <p>
              {`The kinetic energy must be a quadratic form in the velocities: $T = \\sum a_{ij}\\dot{q}_i\\dot{q}_j$, a sum of products of pairs of velocity components. (A "natural system" is one where this holds.) Doubling every velocity then quadruples $T$. This is what "homogeneous of degree 2" means.`}
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">H = T + U</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`$T$ is a quadratic form in the velocities, so $T$ scales as the square of $\\dot{q}$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Euler's identity for any function that scales like the square: $\\sum \\dot{q}_i \\frac{\\partial T}{\\partial \\dot{q}_i} = 2T$. (You can check this by hand on $\\dot{q}^2$.)`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`Use $L = T - U$ and $p = \\frac{\\partial L}{\\partial \\dot{q}} = \\frac{\\partial T}{\\partial \\dot{q}}$ in the definition of $H$: $H = p\\dot{q} - L = 2T - (T - U) = T + U$.`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Cyclic Coordinates and Conservation</h3>
            <p>
              {`A coordinate $q_i$ is`} <strong>cyclic</strong> if it does not appear in {`$H$`}.
              Hamilton's equation for that coordinate becomes{' '}
              {`$\\dot{p}_i = -\\frac{\\partial H}{\\partial q_i} = 0$`}, so its momentum cannot
              change. Each missing coordinate hands you a conserved quantity.
            </p>
            <p>The same logic gives three useful results.</p>
            <ul className="lrn-list">
              <li>{`If $H$ has no explicit time dependence ($\\frac{\\partial H}{\\partial t} = 0$), then $H$ is constant along every trajectory. Energy is conserved.`}</li>
              <li>
                Each cyclic coordinate cuts the effective dimension of the problem by one, because
                its momentum is fixed and the coordinate itself drops out of the equations.
              </li>
              <li>
                A system with two degrees of freedom and one cyclic coordinate can always be solved
                by integration alone, no clever tricks needed.
              </li>
            </ul>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>{`Take the time derivative of $H$ along any trajectory: $\\frac{dH}{dt} = \\frac{\\partial H}{\\partial t} + \\frac{\\partial H}{\\partial q}\\dot{q} + \\frac{\\partial H}{\\partial p}\\dot{p}$.`}</p>
              <p>{`Substitute Hamilton's equations $\\dot{q} = \\frac{\\partial H}{\\partial p}$ and $\\dot{p} = -\\frac{\\partial H}{\\partial q}$. The two middle terms are equal in size and opposite in sign. They cancel.`}</p>
              <p>{`What remains is $\\frac{dH}{dt} = \\frac{\\partial H}{\\partial t}$. If $H$ does not depend on time explicitly, the right side is zero and $H$ stays the same forever.`}</p>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Note</span>
              <p>
                {`The space of all position-momentum pairs $(q, p)$ has a formal name: the cotangent bundle $T^*M$. The space of position-velocity pairs $(q, \\dot{q})$ is the tangent bundle $TM$. The Hamiltonian lives on the first; the Lagrangian lives on the second. The Mechanics on Manifolds module gives precise definitions; here we only need the names.`}
              </p>
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
                <span className="lrn-label">Lagrangian L</span>
                <p>{`$L = T - U$. Lives on the tangent bundle $TM$.`}</p>
                <p>
                  Inputs: position and velocity. Best for writing down equations of motion and for
                  handling constraints.
                </p>
              </div>
              <div style={{ padding: '20px' }}>
                <span className="lrn-label">Hamiltonian H</span>
                <p>{`$H = T + U$. Lives on the cotangent bundle $T^*M$.`}</p>
                <p>
                  Inputs: position and momentum. Best for phase-space methods and conservation laws.
                </p>
              </div>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Limitation</span>
              <p>
                Going from {`$L$`} to {`$H$`} relies on the Legendre transform. That requires{' '}
                {`$L$`} to be strictly convex in the velocities: roughly, that no nudge in the
                velocity direction can leave the value of {`$L$`} flat. When this fails (a
                "degenerate" kinetic energy, common in gauge theories), the Hamiltonian formulation
                does not exist in the standard form. Lagrange's equations still work in that case.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-2" data-section-index="2">
            <h2>Liouville's Theorem</h2>
            <p>
              {`Picture the space of all $(p, q)$ pairs: the`} <strong>phase space</strong> of the
              system, where every point is a complete snapshot of position and momentum. As time
              passes, every point moves under Hamilton's equations and the whole space flows.
            </p>
            <p>
              Liouville's theorem says this flow never compresses or expands. Outline any region of
              phase space and let it ride along the flow. Its volume stays exactly the same,
              forever.
            </p>
            <p>
              The consequences are heavy. Hamiltonian systems cannot have attracting fixed points,
              dissipation, or any behavior that shrinks regions. The theorem is also the first step
              in the proof that motion in a bounded region must keep returning close to where it
              started (Poincaré recurrence, below).
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A ball bouncing with air resistance eventually comes to rest. Can such a system be
                Hamiltonian?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  No. Liouville's theorem says Hamiltonian flows preserve phase volume. An
                  attracting fixed point compresses nearby trajectories into a smaller volume. That
                  violates Liouville. So dissipative systems are not Hamiltonian.
                </p>
              </details>
            </div>

            <h3>Phase Space and Phase Flow</h3>
            <p>
              {`A system with $n$ degrees of freedom has $n$ position coordinates and $n$ momentum coordinates. Together they make a single point in a $2n$-dimensional space. That space is the`}{' '}
              <strong>phase space</strong>. Each point is one complete state of the system.
            </p>
            <p>
              {`Hamilton's equations attach a velocity vector to every point: where will this state move next? Following those vectors forward in time gives the`}{' '}
              <strong>phase flow</strong>, written {`$g^t$`}. The map {`$g^t$`} sends each starting
              state {`$(p(0), q(0))$`} to the state {`$(p(t), q(t))$`} reached after time {`$t$`}.
            </p>

            <VizCard id="02.2.2" title="Phase Space Flow">
              <PhaseFlow />
            </VizCard>
            <VizCard id="02.2.3" title="Translation Symmetry">
              <TranslationSymmetry />
            </VizCard>

            <h3>Liouville's Theorem</h3>
            <div className="lrn-insight">
              <span className="lrn-insight-label">Liouville's Theorem</span>
              <p>The phase flow of any Hamiltonian system preserves volume.</p>
              <p>
                {`Stated in calculus: $\\operatorname{div} f = 0$ for $f = (\\dot{p}, \\dot{q}) = (-\\frac{\\partial H}{\\partial q}, \\frac{\\partial H}{\\partial p})$. The`}{' '}
                <strong>divergence</strong> measures how strongly a flow spreads outward at a point.
                Zero divergence means the flow neither pulls together nor pushes apart.
              </p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Liouville's Theorem</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`General fact from vector calculus: if a region $D$ rides along a flow $\\dot{x} = f(x)$, the rate of change of its volume is $\\frac{dv}{dt}\\big|_{t=0} = \\int_{D} \\operatorname{div} f\\, dx$. Volume change comes entirely from divergence. So we just need to show the divergence is zero.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Plug in Hamilton's equations: $\\operatorname{div} f = \\frac{\\partial \\dot{p}}{\\partial p} + \\frac{\\partial \\dot{q}}{\\partial q} = \\frac{\\partial}{\\partial p}\\!\\left(-\\frac{\\partial H}{\\partial q}\\right) + \\frac{\\partial}{\\partial q}\\!\\left(\\frac{\\partial H}{\\partial p}\\right)$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`The two terms are mixed second derivatives of the same function $H$, with opposite signs. Mixed partial derivatives of a smooth function commute, so the two terms are equal in size and cancel.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  Therefore {`$\\operatorname{div} f = 0$`} and {`$\\frac{dv}{dt} = 0$`}. The volume
                  of any region stays constant for all time.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>Why do the mixed partial derivatives cancel in step 2?</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`The first term works out to $-\\frac{\\partial^2 H}{\\partial p \\partial q}$ and the second to $+\\frac{\\partial^2 H}{\\partial q \\partial p}$. Schwarz's theorem (the order of partial derivatives does not matter for smooth functions) makes these equal. They have opposite signs, so they sum to zero. This single algebraic cancellation is what forces every Hamiltonian system, in any number of dimensions, to preserve volume.`}</p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The two halves of Hamilton's equations are built from the same function {`$H$`} with
                derivatives in opposite slots: one with respect to {`$q$`}, one with respect to{' '}
                {`$p$`}. The minus sign in the first equation flips them into a perfect
                cancellation.
              </p>
              <p>
                That cancellation is not a coincidence of one-degree-of-freedom systems. It happens
                identically in any dimension and for any Hamiltonian.
              </p>
            </div>

            <h3>Poincaré's Recurrence Theorem</h3>
            <p>
              Volume preservation has a striking consequence. If a Hamiltonian system stays inside a
              bounded region of phase space, every state must eventually return close to every state
              it has visited before.
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Poincaré's Recurrence</span>
              <p>
                Let {`$g: D \\to D$`} be a volume-preserving map on a bounded region {`$D$`}.
              </p>
              <p>
                {`Then for any small region $U$ inside $D$, at least one point of $U$ comes back to $U$ after enough applications of $g$. ("Small region" here just means a patch with positive volume.)`}
              </p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Poincaré Recurrence</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Consider the images $U, gU, g^2U, \\ldots$. Each has the same volume as $U$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  If they were all disjoint, the total volume would be infinite. But {`$D$`} is
                  bounded, so some must overlap.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`If $g^j U \\cap g^k U \\ne \\emptyset$ with $j < k$, then $U \\cap g^{k-j} U \\ne \\emptyset$. Some point in $U$ returns to $U$.`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Applications</h3>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Dense orbits on the circle</span>
                <p className="lrn-step-content">{`Take a circle and rotate it repeatedly by an angle $\\alpha$ that is not a rational fraction of a full turn. The points $\\{n\\alpha \\mod 2\\pi\\}$ never repeat exactly, but recurrence forces them to fill the circle: every arc, no matter how short, is visited infinitely often.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Winding on the torus</span>
                <p className="lrn-step-content">{`A two-dimensional torus $T^2$ is the surface of a doughnut. Run two independent rotations on it at speeds $\\alpha_1$ and $\\alpha_2$. If the ratio $\\frac{\\alpha_1}{\\alpha_2}$ is irrational, every trajectory winds around forever and visits every part of the surface.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Leading digits of powers of 2</span>
                <p className="lrn-step-content">{`The first digit of $2^n$ goes 1, 2, 4, 8, 1, 3, 6, 1, 2, 5, and so on. The pattern follows Benford's law: leading digit 1 shows up about 30% of the time, 9 about 5%. Recurrence on the circle of $\\log_{10} 2$ rotations is what guarantees each digit must keep reappearing.`}</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-3" data-section-index="3">
            <h2>Noether's Theorem</h2>
            <p>
              Every continuous symmetry of the Lagrangian produces a conserved quantity. One
              statement, no exceptions.
            </p>
            <p>
              This is what ties together every conservation law in mechanics. Shift the system in
              space: total momentum is conserved. Rotate it: angular momentum is conserved. Wait and
              watch: energy is conserved. The same idea reappears across modern physics in forms
              ranging from electric charge to the conservation laws inside particle physics.
            </p>
            <p>
              The practical use is direct. Find a transformation that leaves the Lagrangian
              unchanged and you have, in your hand, a quantity that does not change with time. No
              equations of motion required.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A system's Lagrangian is unchanged when you translate everything along the {`$x$`}
                -axis. What conserved quantity do you predict?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Translation symmetry along {`$x$`} gives conservation of the {`$x$`}-component of
                  total momentum. Noether's formula gives{' '}
                  {`$I = \\sum_i \\frac{\\partial L}{\\partial \\dot{q}_i} \\cdot \\frac{d(h^s q)_i}{ds}\\big|_{s=0} = \\sum_i p_i \\cdot e_1 = P_1$`}
                  .
                </p>
              </details>
            </div>

            <h3>What "Symmetry" Means Here</h3>
            <p>
              {`A`} <strong>symmetry</strong> of the Lagrangian is a smooth, reversible way of
              moving every point of the configuration space, controlled by a single dial {`$s$`},
              with the rule that {`$s = 0$`} does nothing. Sliding the dial slides the system;
              turning it back unwinds the motion exactly. The whole family is written{' '}
              {`$h^s: M \\to M$`}, and the requirement is that {`$L$`} comes out the same value
              after the move:
            </p>
            <div className="lrn-eq">
              <span>{`$$L(h^s(q), (h^s)_*(\\dot{q})) = L(q, \\dot{q}) \\text{ for all } s$$`}</span>
            </div>
            <p>
              Each map in the family is a <strong>diffeomorphism</strong>: a smooth bending of the
              configuration space whose inverse is also smooth. Translations, rotations, and boosts
              are the standard examples; the Mechanics on Manifolds module gives the formal
              background.
            </p>

            <VizCard id="02.2.4" title="Noether Symmetry">
              <NoetherSymmetry />
            </VizCard>

            <h3>Noether's First Integral</h3>
            <div className="lrn-insight">
              <span className="lrn-insight-label">Noether's Theorem</span>
              <p>
                If {`$h^s$`} is a symmetry of {`$L$`}, the following quantity stays the same along
                every motion of the system:
              </p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$I(q, \\dot{q}) = \\frac{\\partial L}{\\partial \\dot{q}} \\cdot \\frac{d}{ds}h^s(q)\\bigg|_{s=0}$$`}</span>
              </div>
              <p>
                In words: take the generalized momentum{' '}
                {`$\\frac{\\partial L}{\\partial \\dot{q}}$`} and the direction{' '}
                {`$\\frac{d}{ds}h^s(q)\\big|_{s=0}$`} the symmetry is pointing in. Their dot product
                is conserved. The direction vector is called the{' '}
                <strong>infinitesimal generator</strong> of the symmetry: the velocity at which
                points start to move when you first crack open the dial.
              </p>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Noether's Theorem</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Take any actual motion of the system, $\\varphi(t)$ (a path that satisfies Lagrange's equations). Apply the symmetry to it at every time: $\\Phi(s, t) = h^s(\\varphi(t))$. This is a family of paths indexed by $s$, with $\\Phi(0, t) = \\varphi(t)$ recovering the original motion.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Because $h^s$ leaves $L$ unchanged, every path in the family is also a valid motion of the system. So Lagrange's equations hold for $\\Phi(s, \\cdot)$ at every $s$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`Differentiate the Lagrange equation along $s$ and evaluate at $s = 0$. The mixed derivative slides past the time derivative because everything is smooth.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">{`The calculation collapses to $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}} \\cdot \\frac{\\partial \\Phi}{\\partial s}\\right) = 0$. The thing inside the parentheses, evaluated at $s = 0$, is the conserved $I$.`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Examples</h3>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Translation along {`$e_1$`}</span>
                <p className="lrn-step-content">{`$h^s(q) = q + se_1$. Then $\\frac{dh^s}{ds}\\big|_{s=0} = e_1$. Noether gives $I = \\sum_i p_i (e_1)_i = P_1$, the total momentum in the $e_1$ direction.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Rotation around {`$e_1$`}</span>
                <p className="lrn-step-content">{`$h^s$ rotates all positions by angle $s$ around the $e_1$ axis. Noether gives $I = M_1$, the angular momentum around $e_1$.`}</p>
              </div>
            </div>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Warning</span>
              <p>
                The converse is false. A conserved quantity in the system does not have to come from
                a symmetry of the Lagrangian. Some conservation laws sit outside Noether's reach
                (so-called "hidden" symmetries are one example).
              </p>
              <p>
                Several textbooks state the converse anyway. It is a known error: do not trust
                claims that every conserved quantity matches a symmetry.
              </p>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Each symmetry has a direction: the way it moves points when you nudge the dial. The
                conserved quantity {`$I$`} is the generalized momentum measured along that
                direction.
              </p>
              <p>
                Lagrange's equation says: motion along a direction in which the action does not
                change cannot create or destroy momentum in that direction. That is the whole
                content of Noether's theorem.
              </p>
              <p>
                Symmetry of the action and constancy of one piece of momentum are the same fact,
                said two ways.
              </p>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the theorem care about the Lagrangian itself, not just the equations of
                motion it produces?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Two different Lagrangians can give exactly the same equations of motion (add a
                  total time derivative to {`$L$`} and the equations do not change). The formula for
                  the conserved quantity reaches into {`$L$`} itself: it uses{' '}
                  {`$\\frac{\\partial L}{\\partial \\dot{q}}$`}.
                </p>
                <p>
                  So two equivalent equations of motion can come with different Noether currents if
                  their Lagrangians differ. Knowing only the equations leaves you without enough
                  information to write down the conserved quantity.
                </p>
              </details>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'PREDICT: What conserved quantity arises from a system whose Lagrangian does not depend on time?',
        a: "Energy. (1) The Hamiltonian $H$ is the energy-like quantity that fits this case. (2) Take its time derivative along a trajectory: $\\frac{dH}{dt} = \\frac{\\partial H}{\\partial t}$, since the Hamilton's-equation contributions cancel. (3) If $L$ has no explicit time dependence, neither does $H$, so $\\frac{\\partial H}{\\partial t} = 0$. (4) Therefore $H$ is constant along every motion. This is Noether's theorem applied to time-translation symmetry."
      },
      {
        q: 'What is the Legendre transform of $f(x) = x^2$?',
        a: "It is $g(p) = \\frac{p^2}{4}$. (1) Differentiate: $f'(x) = 2x$. Set this equal to $p$ to find the slope-matching point: $x(p) = \\frac{p}{2}$. (2) Plug into the formula $g(p) = px(p) - f(x(p)) = p \\cdot \\frac{p}{2} - \\left(\\frac{p}{2}\\right)^2 = \\frac{p^2}{4}$. (3) The argument works because $f$ curves upward everywhere, so each slope $p$ has exactly one point matching it."
      },
      {
        q: 'ELABORATE: Why is the Legendre transform its own inverse?',
        a: "Apply it twice and you get back the function you started with. (1) Build $G(x, p) = xp - g(p)$ and maximize over $p$. (2) Setting $\\frac{\\partial G}{\\partial p} = 0$ gives $g'(p) = x$. Since $g'$ inverts $f'$ (this is what convexity guarantees), the maximizing $p$ is $f'(x)$. (3) Substitute: $G(x, f'(x)) = xf'(x) - g(f'(x)) = xf'(x) - (xf'(x) - f(x)) = f(x)$. (4) Strict convexity is the key: it makes the relation between slopes and points one-to-one, so nothing is lost in either direction."
      },
      {
        q: "State Young's inequality and identify when equality holds.",
        a: "$px \\leq f(x) + g(p)$ for any Legendre pair, with equality precisely when $p = f'(x)$. (1) The proof is one line: $g(p)$ is the maximum of $py - f(y)$ over all $y$, so for any specific $x$ we have $g(p) \\geq px - f(x)$, which rearranges to the inequality. (2) Equality means $x$ is the slope-matching point that defines $g(p)$, i.e. $x$ and $p$ are paired (often called conjugate). (3) Special case: $f(x) = \\frac{x^\\alpha}{\\alpha}$ gives $\\frac{x^\\alpha}{\\alpha} + \\frac{p^\\beta}{\\beta} \\geq px$ with $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = 1$. This is Hölder's inequality, the workhorse behind $L^p$ estimates in analysis."
      },
      {
        q: "Derive Hamilton's equations from the Lagrangian $L(q, \\dot{q})$.",
        a: 'Trade $\\dot{q}$ for $p$ via the Legendre transform, then differentiate. (1) Define $H(p, q) = p\\dot{q} - L$ with $p = \\frac{\\partial L}{\\partial \\dot{q}}$. (2) Differentiate $H$ piece by piece. The two $d\\dot{q}$ terms cancel because of how $p$ was defined, leaving $dH = \\dot{q}\\, dp - \\frac{\\partial L}{\\partial q}dq$. (3) Compare with the chain-rule expression $dH = \\frac{\\partial H}{\\partial p}dp + \\frac{\\partial H}{\\partial q}dq$. Matching coefficients: $\\dot{q} = \\frac{\\partial H}{\\partial p}$ and $\\frac{\\partial H}{\\partial q} = -\\frac{\\partial L}{\\partial q}$. (4) The Euler-Lagrange equation $\\frac{\\partial L}{\\partial q} = \\dot{p}$ turns the second relation into $\\dot{p} = -\\frac{\\partial H}{\\partial q}$.'
      },
      {
        q: 'TRANSFER: A system has $L = \\frac{1}{2}(\\dot{x}^2 + \\dot{y}^2) - V(x^2+y^2)$. What symmetry does it have and what does it conserve?',
        a: "It is rotationally symmetric, and angular momentum is conserved. (1) The Lagrangian only sees the distance $r = \\sqrt{x^2 + y^2}$ from the origin and the speed $|\\dot{\\mathbf{r}}|$. Both are unchanged by rotations. (2) The rotation $(x, y) \\mapsto (x\\cos s - y\\sin s, x\\sin s + y\\cos s)$ therefore leaves $L$ invariant for every angle $s$. (3) Noether's theorem hands you the conserved quantity directly: $J = x\\dot{y} - y\\dot{x}$, which is the angular momentum. (4) Cross-check in polar coordinates: $J = mr^2\\dot{\\varphi}$, and $\\varphi$ does not appear in $L$, so its conjugate momentum is conserved."
      },
      {
        q: 'ELABORATE: Why does switching from Lagrange to Hamilton require $L$ to be convex in $\\dot{q}$?',
        a: 'Because the switch needs $\\dot{q}$ and $p$ to determine each other uniquely, and that requires convexity. (1) The transform sets $p = \\frac{\\partial L}{\\partial \\dot{q}}$. To get $\\dot{q}$ back from $p$, this relation must be one-to-one. (2) Strict convexity in $\\dot{q}$, written $\\frac{\\partial^2 L}{\\partial \\dot{q}^2} > 0$, is exactly the condition that makes the relation invertible. (3) For ordinary systems where the kinetic energy is $T = \\frac{1}{2}\\sum a_{ij}\\dot{q}_i\\dot{q}_j$ with a positive matrix $a_{ij}$, convexity is automatic. (4) When this fails, often called a degenerate kinetic energy, the Hamiltonian formulation in standard form does not exist. The Lagrangian still works.'
      },
      {
        q: "Prove that the Hamiltonian phase flow preserves volume (Liouville's theorem).",
        a: "Show the divergence of the flow vector vanishes. (1) For any flow $\\dot{x} = f(x)$, the rate of volume change of a region $D$ is $\\frac{dv}{dt}\\big|_{t=0} = \\int_D \\operatorname{div} f\\, dx$. (2) Plug in Hamilton's flow $f = \\left(-\\frac{\\partial H}{\\partial q}, \\frac{\\partial H}{\\partial p}\\right)$ and compute the divergence: $\\operatorname{div} f = \\frac{\\partial}{\\partial p}\\!\\left(-\\frac{\\partial H}{\\partial q}\\right) + \\frac{\\partial}{\\partial q}\\!\\left(\\frac{\\partial H}{\\partial p}\\right) = -\\frac{\\partial^2 H}{\\partial p\\partial q} + \\frac{\\partial^2 H}{\\partial q\\partial p}$. (3) Mixed partial derivatives of a smooth function are equal, so the two terms cancel: $\\operatorname{div} f = 0$. (4) Therefore $\\frac{dv}{dt} = 0$ for any region. Volume is preserved."
      },
      {
        q: 'PREDICT: Can a Hamiltonian system have an asymptotically stable equilibrium point?',
        a: "No. (1) An asymptotically stable equilibrium is one that pulls nearby states inward, shrinking a neighborhood as time goes on. (2) Liouville's theorem says volume in phase space cannot shrink under Hamiltonian flow. (3) These two facts contradict each other. So Hamiltonian systems cannot have such equilibria. (4) The same argument forbids dissipation in general: any system with friction, drag, or energy loss compresses phase volume and cannot be Hamiltonian."
      },
      {
        q: "State Poincaré's recurrence theorem and explain the key step of the proof.",
        a: 'Volume-preserving motion in a bounded region must keep returning close to where it started. (1) The setup: a map $g: D \\to D$ on a bounded region $D$ that preserves volume. The claim: every patch $U$ of positive volume contains some point that comes back to $U$ after enough applications of $g$. (2) The key step is a pigeonhole argument. The images $U, gU, g^2U, \\ldots$ all have the same volume. (3) If they were pairwise disjoint, the total volume would grow without bound, but $D$ is bounded. So at least two images must overlap. (4) An overlap $g^j U \\cap g^k U \\neq \\emptyset$ means some point in $U$ has come back to $U$ after $k - j$ steps.'
      },
      {
        q: "State Noether's theorem precisely. What is the formula for the conserved quantity?",
        a: 'If a smooth, reversible family of moves $h^s$ leaves $L$ invariant, then $I = \\frac{\\partial L}{\\partial \\dot{q}} \\cdot \\frac{dh^s}{ds}\\big|_{s=0}$ is conserved. (1) Each $h^s$ is a diffeomorphism, meaning a smooth, smoothly invertible transformation of the configuration space. The family is parameterized by a single number $s$, with $s = 0$ doing nothing. (2) The vector $\\frac{dh^s}{ds}\\big|_{s=0}$ is the infinitesimal generator: the direction in which points start to move when you first crack open the dial. (3) The conserved $I$ is the dot product of the generalized momentum with this direction. (4) Example: translation $h^s(q) = q + se_1$ has generator $e_1$, so $I = p \\cdot e_1 = P_1$, the momentum component along $e_1$.'
      },
      {
        q: 'SELF-EXPLAIN: In the central force example, why does $L$ not depending on $\\varphi$ imply angular momentum conservation?',
        a: 'Because Euler-Lagrange forces the conjugate momentum of any missing coordinate to be constant. (1) If $\\varphi$ does not appear in $L$, then $\\frac{\\partial L}{\\partial \\varphi} = 0$. (2) The Euler-Lagrange equation reads $\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{\\varphi}}\\right) = \\frac{\\partial L}{\\partial \\varphi} = 0$. (3) So $p_\\varphi = \\frac{\\partial L}{\\partial \\dot{\\varphi}} = mr^2 \\dot{\\varphi}$ does not change with time. (4) The physics behind this: a $\\varphi$-independent $L$ means rotation around the center is a symmetry, so there is no torque, and angular momentum cannot change. The missing coordinate is the algebraic shadow of rotational symmetry.'
      },
      {
        q: "TRANSFER: For 1D motion with $H = \\frac{1}{2}p^2 + U(q)$, verify that Liouville's theorem holds by computing $\\operatorname{div} f$.",
        a: "The divergence is zero, so volume is preserved. (1) The phase-flow vector is $f = (\\dot{p}, \\dot{q}) = (-U'(q), p)$. (2) Compute the divergence: $\\operatorname{div} f = \\frac{\\partial \\dot{p}}{\\partial p} + \\frac{\\partial \\dot{q}}{\\partial q} = \\frac{\\partial(-U'(q))}{\\partial p} + \\frac{\\partial p}{\\partial q}$. (3) The first term is zero because $-U'(q)$ does not depend on $p$. The second is zero because $p$ does not depend on $q$. (4) Sum: $\\operatorname{div} f = 0$, confirming Liouville for this specific Hamiltonian."
      },
      {
        q: "Compare Lagrange's equations and Hamilton's equations. What are the advantages of each?",
        a: "Two equivalent descriptions, useful for different jobs. (1) Lagrange: $n$ second-order equations in $(q, \\dot{q})$. Strong for writing down equations of motion from a guess at the energy, dealing with constraints, and applying Noether's theorem. (2) Hamilton: $2n$ first-order equations in $(p, q)$. Strong for phase-space methods, Liouville's theorem, perturbation theory, and canonical transformations. (3) The two are linked by the Legendre transform $H = p\\dot{q} - L$, so they describe the same motions. (4) Rule of thumb: use Lagrange when you want to find a trajectory; use Hamilton when you want to understand the geometry of all trajectories at once."
      },
      {
        q: 'ELABORATE: Why is the involutivity of the Legendre transform important for mechanics?',
        a: 'It is what guarantees Lagrangian and Hamiltonian mechanics carry the same information. (1) Involutivity means: transform $L$ to $H$, then transform $H$ back, and you recover $L$ exactly. (2) Without this, going $L \\to H$ would lose information, and the two formulations would not actually agree. (3) The condition that makes the round trip work is convexity in the velocities (or momenta). (4) For ordinary systems where the kinetic energy is a positive quadratic form in the velocities, this convexity holds automatically. So the two pictures are genuinely interchangeable.'
      },
      {
        q: "ELABORATE: Why does Noether's theorem require symmetry of $L$ rather than symmetry of the equations of motion?",
        a: "Because the conserved quantity is built from $L$ directly, and equivalent equations can come from different $L$'s. (1) Two Lagrangians can produce the exact same equations of motion (adding a total time derivative to $L$ is the standard trick). (2) The Noether formula $I = \\frac{\\partial L}{\\partial \\dot{q}} \\cdot \\frac{dh^s}{ds}\\big|_{s=0}$ uses $L$ itself, not just the equations. (3) So two systems with identical equations but different Lagrangians can carry different Noether conserved quantities. (4) The proof itself depends on the action being invariant. Without symmetry of $L$, that step has nothing to lean on."
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: "Noether's Theorem and Conservation Laws",
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Core Equations</h2>

            <h3>Legendre Transform</h3>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Formula</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Definition</td>
                  <td>{`$g(p) = px(p) - f(x(p))$ where $f'(x(p)) = p$`}</td>
                  <td>{`$f$ must be strictly convex`}</td>
                </tr>
                <tr>
                  <td>Involutivity</td>
                  <td>{`$(g)^* = f$`}</td>
                  <td>Apply twice, get the original back</td>
                </tr>
                <tr>
                  <td>Young's inequality</td>
                  <td>{`$px \\leq f(x) + g(p)$`}</td>
                  <td>{`Equality when $p = f'(x)$`}</td>
                </tr>
                <tr>
                  <td>{`$f = x^2$`}</td>
                  <td>{`$g(p) = \\frac{p^2}{4}$`}</td>
                  <td>Simplest case</td>
                </tr>
                <tr>
                  <td>{`$f = \\frac{m}{2}x^2$`}</td>
                  <td>{`$g(p) = \\frac{p^2}{2m}$`}</td>
                  <td>Kinetic energy in momentum form</td>
                </tr>
                <tr>
                  <td>{`$f = \\frac{x^\\alpha}{\\alpha}$`}</td>
                  <td>{`$g(p) = \\frac{p^\\beta}{\\beta}$ where $\\frac{1}{\\alpha}+\\frac{1}{\\beta}=1$`}</td>
                  <td>Hölder pair (used in Hölder's inequality)</td>
                </tr>
              </tbody>
            </table>

            <h3>Hamilton's Equations</h3>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\dot{p} = -\\frac{\\partial H}{\\partial q}, \\qquad \\dot{q} = \\frac{\\partial H}{\\partial p}, \\qquad H = p\\dot{q} - L$$`}</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Result</th>
                  <th>Condition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$H = T + U$`}</td>
                  <td>{`Kinetic energy $T$ is a quadratic form in the velocities (natural system)`}</td>
                </tr>
                <tr>
                  <td>{`$H = \\text{const}$`}</td>
                  <td>{`$H$ has no explicit time dependence ($\\frac{\\partial H}{\\partial t} = 0$, called autonomous)`}</td>
                </tr>
                <tr>
                  <td>{`$p_i = \\text{const}$`}</td>
                  <td>{`Coordinate $q_i$ does not appear in $H$ (cyclic coordinate)`}</td>
                </tr>
              </tbody>
            </table>

            <h3>Liouville's Theorem</h3>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\operatorname{div} f = \\frac{\\partial \\dot{p}}{\\partial p} + \\frac{\\partial \\dot{q}}{\\partial q} = 0$$`}</span>
            </div>
            <p>The phase flow of any Hamiltonian system preserves volume in phase space.</p>

            <h3>Noether's Theorem</h3>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$I = \\frac{\\partial L}{\\partial \\dot{q}} \\cdot \\frac{d}{ds}h^s(q)\\bigg|_{s=0} = \\text{const}$$`}</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Symmetry</th>
                  <th>Generator</th>
                  <th>Conserved quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Translation along {`$e_1$`}</td>
                  <td>{`$e_1$`}</td>
                  <td>Linear momentum {`$P_1$`}</td>
                </tr>
                <tr>
                  <td>Rotation around {`$e_1$`}</td>
                  <td>Rotation generator</td>
                  <td>Angular momentum {`$M_1$`}</td>
                </tr>
                <tr>
                  <td>Time translation</td>
                  <td>{`$-\\frac{\\partial H}{\\partial t}$`}</td>
                  <td>Energy {`$H$`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ]
    },
    customCss: `
      .MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }
    `
  }

  return <LearningTemplate config={config} />
}
