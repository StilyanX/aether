import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  Plot as P2,
  Axes as A2,
  Parametric as Pa2,
  Arrow as Ar2,
  Tex as T2,
  Slider as Sl2,
  OPACITY as O2
} from '../../../../../components/viz/primitives'
import { VizFigure } from '../../../../../components/viz-figure'

// Visualizations

export function NoetherSymmetry() {
  const [shift, setShift] = React.useState(0.7)
  // The worked case from the prose: free particle, L = q-dot^2/2, spatial shift
  // h^s(q) = q + s. The trajectory MUST solve the symmetric Lagrangian's equation of
  // motion (q-ddot = 0, a straight line), otherwise no conserved charge could honestly
  // be read off it. Noether charge: p = dL/d(q-dot) = q-dot, the slope - identical for
  // every s and constant in time.
  const q0 = 0.25
  const v = 0.35 // q-dot, the conserved Noether charge [dimensionless units]
  const path = t => [t, q0 + v * t]
  const shifted = t => [t, q0 + v * t + shift]
  return (
    <div style={{ width: '100%' }}>
      <P2 xRange={[-0.4, 4.4]} yRange={[-1.1, 3.4]} width={520} height={230}>
        <A2 step={1} showGrid={false} showTicks={false} />
        <Pa2 xy={path} t={[0, 4]} opacity={O2.fg} strokeWidth={2} />
        <Pa2 xy={shifted} t={[0, 4]} opacity={O2.accent} dash="4 4" />
        {[0.7, 1.8, 2.9].map((tx, i) => {
          const a = path(tx),
            b = shifted(tx)
          return <Ar2 key={i} from={a} to={b} head={5} opacity={O2.dim} />
        })}
        <T2
          at={[3.6, path(3.6)[1] - 0.08]}
          tex="\gamma(t)"
          anchor="middle"
          dy={18}
          opacity={O2.fg}
        />
        <T2
          at={[1.15, shifted(1.15)[1] + 0.08]}
          tex={`h^{s}(\\gamma),\\ s = ${shift.toFixed(2)}`}
          anchor="middle"
          dy={-13}
          opacity={O2.accent}
        />
        <T2
          at={[0.0, 3.28]}
          tex={String.raw`L = \tfrac{1}{2}\dot q^2`}
          anchor="start"
          opacity={O2.dim}
          size={11}
        />
      </P2>
      {/* The conserved quantity produced by the shift symmetry: p(t) is one and the
          same horizontal line for the path and every shifted copy. */}
      <P2 xRange={[-0.4, 4.4]} yRange={[-0.12, 0.75]} width={520} height={110}>
        <Pa2 xy={t => [t, 0]} t={[0, 4]} opacity={O2.faint} strokeWidth={1} />
        <Pa2 xy={t => [t, v]} t={[0, 4]} opacity={O2.fg} strokeWidth={2} />
        <T2
          at={[0.0, v]}
          tex={String.raw`p = \partial L/\partial\dot q = \dot q`}
          anchor="start"
          dy={-12}
          opacity={O2.fg}
          size={11}
        />
        <T2
          at={[4.0, v]}
          tex={`${v.toFixed(2)}\\ \\text{for every } s`}
          anchor="end"
          dy={16}
          opacity={O2.dim}
          size={10}
        />
        <T2 at={[4.32, 0]} tex="t" anchor="end" dy={-6} opacity={O2.faint} size={10} />
      </P2>
      <Sl2 label="s" value={shift} min={-1} max={1.5} step={0.02} onChange={setShift} />
    </div>
  )
}

export default function SymmetriesAndConservationLawsNoethersTheorem() {
  const config = {
    cssPrefix: 'ntcl',
    documentTitle: "Symmetries and Conservation Laws: Noether's Theorem - AETHER",
    learning: {
      groupTitle: 'Lagrangian Mechanics and Variational Principles',
      category: 'Physics',
      title: "Symmetries and Conservation Laws: Noether's Theorem",
      subtitle: 'Why every continuous symmetry of the Lagrangian hands you a conserved quantity',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>From a Missing Coordinate to a Symmetry</h2>
            <p>
              You already know four conservation laws from earlier topics. Momentum, energy, and
              angular momentum each come from a Lagrangian that ignores something.
            </p>
            <p>
              The euler-lagrange topic showed the simplest case. A coordinate {`$q_i$`} is{' '}
              <strong>cyclic</strong> when it does not appear in {`$L$`}, only its velocity{' '}
              {`$\\dot{q}_i$`} does. Its generalized momentum{' '}
              {`$p_i = \\frac{\\partial L}{\\partial \\dot{q}_i}$`} is then conserved.
            </p>
            <p>
              Here is the one-line reason. If {`$q_i$`} is missing, then{' '}
              {`$\\frac{\\partial L}{\\partial q_i} = 0$`}. The euler-lagrange equation reads{' '}
              {`$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} = \\frac{\\partial L}{\\partial q_i} = 0$`}
              , so {`$p_i$`} cannot change.
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">The Key Reframe</span>
              <p>
                A missing coordinate is really a hidden <strong>symmetry</strong>. If {`$q_i$`} is
                absent, you can shift it ({`$q_i \\to q_i + s$`}) and {`$L$`} does not notice.
              </p>
              <p>
                So conservation of {`$p_i$`} is conservation under a shift. Noether's theorem takes
                this exact idea and stretches it to every smooth move, not just shifting one
                coordinate.
              </p>
            </div>

            <h3>What "Symmetry" Means Here</h3>
            <p>
              {`A`} <strong>symmetry</strong> of the Lagrangian is a smooth, reversible way to move
              every point of the configuration space. It is controlled by a single dial {`$s$`},
              with the rule that {`$s = 0$`} does nothing.
            </p>
            <p>
              Turning the dial slides the system. Turning it back unwinds the motion exactly. The
              whole family is written {`$h^s: M \\to M$`}. The requirement is that {`$L$`} comes out
              the same value after the move:
            </p>
            <div className="lrn-eq">
              <span>{`$$L\\big(h^s(q), \\tfrac{d}{dt}h^s(q)\\big) = L(q, \\dot{q}) \\quad \\text{for all } s$$`}</span>
            </div>
            <p>
              You must read the velocity on the moved path. When the position is moved by {`$h^s$`},
              the velocity is moved too: you take the time derivative of the moved position. This
              moved velocity is the <strong>pushforward</strong>, written {`$(h^s)_*\\dot{q}$`}. In
              plain terms: move the path, then read its speed.
            </p>

            <h3>Why the Symmetry Must Be Continuous</h3>
            <p>
              The dial {`$s$`} must turn smoothly through a whole range of values, not jump. This is
              what <strong>continuous</strong> means: a one-parameter family you can dial toward
              zero.
            </p>
            <p>
              The reason is the formula. Noether reads off the conserved quantity by{' '}
              <strong>differentiating</strong> the move at {`$s = 0$`}. A derivative needs nearby
              values of {`$s$`} to compare.
            </p>
            <p>
              A <strong>discrete</strong> symmetry has no dial. A mirror flip (reflect left to
              right) is a single jump with no {`$s = 0$`} neighbor to differentiate. So a mirror
              symmetry gives no Noether charge, even though it is a real symmetry of the physics.
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Examples of Continuous Symmetries</span>
              <p>
                Translations (slide everything by {`$s$`}) and rotations (turn everything by angle{' '}
                {`$s$`}) are the standard cases. Each has a dial you can turn smoothly from zero.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Noether's Theorem, Proved on One Lagrangian</h2>
            <p>
              We will not state the general theorem first. We will run the simplest real example all
              the way through the machine, then read the general rule off it.
            </p>

            <h3>The Worked Case: Free Particle, Spatial Shift</h3>
            <p>
              Take a free particle in one dimension with {`$L = \\frac{1}{2}\\dot{q}^2$`}. The move
              is a spatial shift:
            </p>
            <div className="lrn-eq">
              <span>{`$$h^s(q) = q + s$$`}</span>
            </div>
            <p>
              Check the symmetry first. Shifting {`$q$`} by a constant {`$s$`} does not change{' '}
              {`$\\dot{q}$`} at all (the derivative of a constant is zero). So{' '}
              {`$L = \\frac{1}{2}\\dot{q}^2$`} is unchanged. This is a genuine symmetry.
            </p>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Step 1: Write the move</span>
                <p className="lrn-step-content">{`$h^s(q) = q + s$. The dial $s$ slides the particle along the line.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">{`Step 2: Differentiate at $s = 0$ to get the generator`}</span>
                <p className="lrn-step-content">{`$X = \\frac{d}{ds}(q + s)\\big|_{s=0} = 1$. The generator is the direction the move pushes points: here, straight along the axis.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Step 3: Take the generalized momentum</span>
                <p className="lrn-step-content">{`$\\frac{\\partial L}{\\partial \\dot{q}} = \\dot{q}$. For this Lagrangian the generalized momentum is just the velocity.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Step 4: Dot them together</span>
                <p className="lrn-step-content">{`$I = \\frac{\\partial L}{\\partial \\dot{q}} \\cdot X = \\dot{q} \\cdot 1 = \\dot{q}$. The velocity is conserved. With $m = 1$, that is the momentum.`}</p>
              </div>
            </div>

            <p>
              That is the whole method. Find the symmetry, differentiate to get the generator, dot
              with the momentum, read off the conserved quantity.
            </p>

            <h3>The General Statement</h3>
            <p>
              The same four steps work for any symmetry of any Lagrangian. The{' '}
              <strong>infinitesimal generator</strong> is the velocity at which points start to move
              when you first crack open the dial:
            </p>
            <div className="lrn-eq">
              <span>{`$$X = \\frac{d}{ds}h^s(q)\\bigg|_{s=0}$$`}</span>
            </div>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Noether's Theorem</span>
              <p>
                If {`$h^s$`} is a continuous symmetry of {`$L$`}, then the following quantity stays
                the same along every motion that obeys the equations of motion:
              </p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$I(q, \\dot{q}) = \\sum_i \\frac{\\partial L}{\\partial \\dot{q}_i} \\, X_i, \\qquad X = \\frac{d}{ds}h^s(q)\\bigg|_{s=0}$$`}</span>
              </div>
              <p>
                In words: dot the generalized momentum with the symmetry's direction. The result is
                conserved.
              </p>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">On-Shell</span>
              <p>
                This holds <strong>on-shell</strong>: only along paths that already solve the
                euler-lagrange equations. A random path in space does not conserve {`$I$`}. A real
                motion does.
              </p>
            </div>

            <VizFigure aspect="auto" title="Noether Symmetry">
              <NoetherSymmetry />
            </VizFigure>

            <h3>The Proof</h3>
            <p>
              The proof shows why the dot product cannot change in time. We carry the free particle
              alongside to keep it concrete.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Noether's Theorem</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Take a real motion $\\varphi(t)$ (a path that solves the equations of motion). Move it by the symmetry at every instant: $\\Phi(s, t) = h^s(\\varphi(t))$. At $s = 0$ this is the original motion.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Because $h^s$ leaves $L$ unchanged, the action along $\\Phi(s, \\cdot)$ does not depend on $s$. So differentiating the action with respect to $s$ at $s = 0$ gives zero.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`Write that derivative with the chain rule. Let $X = \\frac{\\partial \\Phi}{\\partial s}\\big|_{s=0}$ be the generator and $\\dot{X}$ its time derivative. The integrand becomes $\\frac{\\partial L}{\\partial q}\\cdot X + \\frac{\\partial L}{\\partial \\dot{q}}\\cdot \\dot{X}$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">{`The euler-lagrange equation says $\\frac{\\partial L}{\\partial q} = \\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}}$. Substitute it into the first term. Now both terms are pieces of one product rule.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">{`Fold them up: $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}}\\cdot X + \\frac{\\partial L}{\\partial \\dot{q}}\\cdot \\dot{X} = \\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{q}}\\cdot X\\right)$. The integrand is now an exact time derivative.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">6.</span>
                <div className="lrn-proof-step-content">{`Since the integral is zero for every interval, the integrand itself is zero: $\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{q}}\\cdot X\\right) = 0$. The bracket is the conserved $I$.`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`For the free particle, what does step 6 say in plain numbers?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`The momentum is $\\frac{\\partial L}{\\partial \\dot{q}} = \\dot{q}$ and the generator is $X = 1$. So the bracket is $\\dot{q}\\cdot 1 = \\dot{q}$, and step 6 says $\\frac{d}{dt}\\dot{q} = 0$. The velocity does not change: a free particle drifts at constant speed. The general proof is this same statement with the numbers replaced by symbols.`}</p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-2" data-section-index="2">
            <h2>The Three Classic Conservation Laws</h2>
            <p>
              The free particle gave momentum. Now run rotation and time translation through the
              same machine. Each is the numbered recipe again, with a different move.
            </p>

            <h3>Translation Gives Momentum</h3>
            <p>
              Slide the whole system along the {`$e_1$`} direction by {`$s$`}. The move is{' '}
              {`$h^s(q) = q + s\\,e_1$`}. If {`$L$`} does not see absolute position, this is a
              symmetry.
            </p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Generator</span>
                <p className="lrn-step-content">{`$X = \\frac{d}{ds}(q + s\\,e_1)\\big|_{s=0} = e_1$. The move pushes every point straight along $e_1$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Conserved quantity</span>
                <p className="lrn-step-content">{`$I = \\sum_i p_i (e_1)_i = p \\cdot e_1 = P_1$, the total momentum along $e_1$.`}</p>
              </div>
            </div>

            <h3>Rotation Gives Angular Momentum</h3>
            <p>
              This is the one case where the generator is not a constant vector. Rotate every
              position by angle {`$s$`} around the {`$e_1$`} axis. For a small angle, a rotation
              pushes each point sideways:
            </p>
            <div className="lrn-eq">
              <span>{`$$h^s(q) = q + s\\,(e_1 \\times q) + \\ldots$$`}</span>
            </div>
            <p>
              The cross product {`$e_1 \\times q$`} points perpendicular to both the axis and the
              position: the same direction a point on a spinning record moves.
            </p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">{`Step 1: differentiate at $s = 0$`}</span>
                <p className="lrn-step-content">{`$X = \\frac{d}{ds}h^s(q)\\big|_{s=0} = e_1 \\times q$. The generator is the cross product, not a fixed vector: it depends on where the point sits.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Step 2: dot with the momentum</span>
                <p className="lrn-step-content">{`$I = p \\cdot (e_1 \\times q)$.`}</p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Step 3: rearrange the triple product</span>
                <p className="lrn-step-content">{`$p \\cdot (e_1 \\times q) = e_1 \\cdot (q \\times p) = e_1 \\cdot M = M_1$, the angular momentum around $e_1$.`}</p>
              </div>
            </div>
            <p>
              This is the same fact the central-force topic showed as a cyclic angle {`$\\varphi$`}:
              rotational symmetry conserves angular momentum. Noether says it for any axis at once.
            </p>

            <h3>Time Translation Gives Energy</h3>
            <p>
              Energy is the trickiest case, because shifting time does not leave {`$L$`} exactly the
              same. It changes {`$L$`} by a total time derivative. We need a slightly stronger
              version of the rule.
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Symmetry Up to a Total Derivative</span>
              <p>
                A move still counts as a symmetry if it changes {`$L$`} by a total time derivative{' '}
                {`$\\frac{dF}{dt}$`}, not strictly by zero. The reason: adding such a term never
                changes the equations of motion.
              </p>
              <p>The conserved quantity then carries a correction:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$I = \\sum_i \\frac{\\partial L}{\\partial \\dot{q}_i}\\,X_i - F$$`}</span>
              </div>
            </div>

            <p>
              Now run time translation. Shift time by {`$s$`}: the path {`$q(t)$`} becomes{' '}
              {`$q(t + s)$`}. Differentiating at {`$s = 0$`} gives the generator {`$X = \\dot{q}$`}.
            </p>
            <div className="lrn-proof">
              <span className="lrn-proof-header">Energy as the Charge of Time Translation</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`The generator is $X = \\dot{q}$: shifting time moves the path along its own velocity.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`When $L$ has no explicit time, the change under the shift is itself a total derivative: $\\frac{d}{ds}L\\big|_{s=0} = \\frac{dL}{dt}$. So the correction term is $F = L$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`Plug into the corrected formula: $I = \\sum_i \\frac{\\partial L}{\\partial \\dot{q}_i}\\dot{q}_i - L$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">{`This combination is the energy, written $h = \\sum_i \\dot{q}_i \\frac{\\partial L}{\\partial \\dot{q}_i} - L$. It stays constant whenever $L$ does not depend on time explicitly.`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Why the Correction Matters</span>
              <p>
                Without the {`$-F$`} term, the bare formula gives{' '}
                {`$\\sum_i \\dot{q}_i \\frac{\\partial L}{\\partial \\dot{q}_i}$`}, which is not the
                energy. Subtracting {`$F = L$`} is what turns it into {`$h$`}. This is the term the
                naive "wait and watch gives energy" claim quietly needs.
              </p>
            </div>

            <h3>The Pattern</h3>
            <div
              className="lrn-contrast"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '1px',
                border: '1px solid var(--ink-hairline)',
                margin: '32px 0'
              }}
            >
              <div style={{ padding: '20px', borderRight: '1px solid var(--ink-hairline)' }}>
                <span className="lrn-label">Translation</span>
                <p>{`Generator $e_1$. Charge $P_1$, linear momentum.`}</p>
              </div>
              <div style={{ padding: '20px', borderRight: '1px solid var(--ink-hairline)' }}>
                <span className="lrn-label">Rotation</span>
                <p>{`Generator $e_1 \\times q$. Charge $M_1$, angular momentum.`}</p>
              </div>
              <div style={{ padding: '20px' }}>
                <span className="lrn-label">Time shift</span>
                <p>{`Generator $\\dot{q}$, with $F = L$. Charge $h$, energy.`}</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-3" data-section-index="3">
            <h2>Reading the Theorem Correctly</h2>
            <p>
              Two warnings keep you from over-trusting the rule. One is about direction. One is
              about which object the formula reaches into.
            </p>

            <h3>The Converse Can Fail</h3>
            <p>
              Noether goes one way only. Every continuous symmetry gives a conserved quantity. The
              reverse is not promised.
            </p>
            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Warning</span>
              <p>
                Do not assume every conserved quantity matches a symmetry. The converse of Noether's
                theorem is simply false.
              </p>
              <p>
                A discrete symmetry (a flip with no dial) conserves nothing through this recipe,
                even though it is a real symmetry. And some conserved quantities have no symmetry
                behind them at all.
              </p>
            </div>

            <h3>The Formula Reaches Into L Itself</h3>
            <p>
              Noether's theorem cares about the Lagrangian, not only the equations of motion it
              produces. This sounds like a technicality. It is not.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the theorem care about the Lagrangian itself, not just the equations of
                motion?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Two different Lagrangians can give exactly the same equations of motion. Add a
                  total time derivative to {`$L$`} and the equations do not change. But the formula
                  for the conserved quantity reaches into {`$L$`} itself: it uses{' '}
                  {`$\\frac{\\partial L}{\\partial \\dot{q}}$`}.
                </p>
                <p>
                  So two equivalent sets of equations can come with different conserved quantities
                  if their Lagrangians differ. Knowing only the equations leaves you without enough
                  information to write down the charge.
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Each symmetry has a direction: the way it moves points when you nudge the dial. The
                conserved quantity {`$I$`} is the generalized momentum measured along that
                direction.
              </p>
              <p>
                The euler-lagrange equation points to a direction where the action does not change.
                Motion along that direction cannot create or destroy momentum there. That is the
                whole content of Noether's theorem.
              </p>
              <p>
                Symmetry of the action and constancy of one piece of momentum are the same fact,
                said two ways.
              </p>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A Lagrangian is unchanged when you translate everything along the {`$x$`}-axis. What
                conserved quantity do you predict?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The {`$x$`}-component of total momentum. The move is {`$h^s(q) = q + s\\,e_1$`},
                  the generator is {`$e_1$`}, and dotting with the momentum gives{' '}
                  {`$I = p \\cdot e_1 = P_1$`}.
                </p>
              </details>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'PREDICT: A Lagrangian does not depend on time. What conserved quantity do you predict?',
        a: 'Energy. (1) Shifting time forward leaves $L$ the same, so time translation is a symmetry. (2) But time shift changes $L$ by a total derivative, so use the corrected charge. (3) The conserved quantity is $h = \\sum_i \\dot{q}_i \\frac{\\partial L}{\\partial \\dot{q}_i} - L$, the energy. (4) When $L$ does not depend on time explicitly, $h$ stays constant along every motion.'
      },
      {
        q: "State Noether's theorem precisely. What is the formula for the conserved quantity?",
        a: 'If a continuous family of moves $h^s$ leaves $L$ invariant, then $I = \\sum_i \\frac{\\partial L}{\\partial \\dot{q}_i} \\frac{d(h^s q)_i}{ds}\\big|_{s=0}$ is conserved. (1) The family is controlled by one dial $s$, with $s = 0$ doing nothing. (2) The vector $\\frac{d}{ds}h^s(q)\\big|_{s=0}$ is the generator: the direction points start to move when you first turn the dial. (3) The conserved $I$ is the dot product of the generalized momentum $\\frac{\\partial L}{\\partial \\dot{q}}$ with this direction. (4) Example: translation $h^s(q) = q + se_1$ has generator $e_1$, so $I = p \\cdot e_1 = P_1$, the momentum along $e_1$.'
      },
      {
        q: 'Run the free particle $L = \\frac{1}{2}\\dot{q}^2$ through the Noether recipe for spatial translation.',
        a: 'You get conserved momentum. (1) The move is $h^s(q) = q + s$. Shifting the position leaves $\\dot{q}$ and so $L$ unchanged. (2) The generator is $\\frac{d}{ds}(q + s)\\big|_{s=0} = 1$. (3) The generalized momentum is $\\frac{\\partial L}{\\partial \\dot{q}} = \\dot{q}$. (4) Dot them: $I = \\dot{q} \\cdot 1 = \\dot{q}$. The velocity (the momentum, with $m = 1$) is conserved.'
      },
      {
        q: 'Why does the Noether recipe need a continuous symmetry rather than a discrete one?',
        a: 'Because the formula differentiates the move at $s = 0$. (1) The generator is $\\frac{d}{ds}h^s(q)\\big|_{s=0}$, a derivative. (2) A derivative needs a smooth family of moves indexed by a number $s$ you can dial toward zero. (3) A discrete symmetry (like a mirror flip) is a single jump with no dial and no $s = 0$ neighbor. (4) So you cannot differentiate it, and it produces no Noether charge.'
      },
      {
        q: 'TRANSFER: A system has $L = \\frac{1}{2}(\\dot{x}^2 + \\dot{y}^2) - V(x^2+y^2)$. What symmetry does it have and what does it conserve?',
        a: 'It is rotationally symmetric, and angular momentum is conserved. (1) The Lagrangian only sees the distance $r = \\sqrt{x^2 + y^2}$ from the origin and the speed $|\\dot{\\mathbf{r}}|$. Both are unchanged by rotations. (2) The rotation $(x, y) \\mapsto (x\\cos s - y\\sin s, x\\sin s + y\\cos s)$ therefore leaves $L$ invariant for every angle $s$. (3) The generator at $s = 0$ is $(-y, x)$, which is $e_3 \\times q$. (4) Dot with the momentum: $I = \\dot{x}(-y) + \\dot{y}(x) = x\\dot{y} - y\\dot{x}$, the angular momentum.'
      },
      {
        q: 'Work the rotation example: write the generator for a rotation about $e_1$ and find the conserved quantity.',
        a: 'The conserved quantity is the angular momentum about $e_1$. (1) A small rotation by angle $s$ about $e_1$ sends $q \\mapsto q + s(e_1 \\times q) + \\ldots$. (2) So the generator is $\\frac{d}{ds}h^s(q)\\big|_{s=0} = e_1 \\times q$. (3) Dot with the momentum $p$: $I = p \\cdot (e_1 \\times q)$. (4) The triple product rearranges to $e_1 \\cdot (q \\times p) = M_1$, the angular momentum component along $e_1$.'
      },
      {
        q: 'SELF-EXPLAIN: In a central-force problem, why does $L$ not depending on $\\varphi$ imply angular momentum conservation?',
        a: 'Because a missing coordinate is the simplest Noether symmetry. (1) If $\\varphi$ does not appear in $L$, then shifting $\\varphi$ by a constant is a symmetry. (2) The euler-lagrange equation $\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{\\varphi}}\\right) = \\frac{\\partial L}{\\partial \\varphi} = 0$ then makes its momentum constant. (3) So $p_\\varphi = \\frac{\\partial L}{\\partial \\dot{\\varphi}} = mr^2 \\dot{\\varphi}$ does not change with time. (4) That missing coordinate is the algebraic shadow of rotational symmetry, the same fact Noether states in general.'
      },
      {
        q: 'Derive the energy charge $h = \\sum_i \\dot{q}_i \\frac{\\partial L}{\\partial \\dot{q}_i} - L$ from time-translation symmetry.',
        a: 'Use the up-to-a-total-derivative form of Noether. (1) Shift time: $t \\mapsto t + s$. The path becomes $q(t + s)$, so the generator is $\\dot{q}$. (2) When $L$ has no explicit time, the change in $L$ under this shift is itself a total time derivative: $\\frac{d}{ds}L\\big|_{s=0} = \\frac{dL}{dt}$, so $F = L$. (3) The corrected charge is $I = \\sum_i \\frac{\\partial L}{\\partial \\dot{q}_i}\\dot{q}_i - F = \\sum_i \\dot{q}_i \\frac{\\partial L}{\\partial \\dot{q}_i} - L$. (4) This is the energy, conserved whenever $L$ does not depend on time explicitly.'
      },
      {
        q: 'PREDICT: A system conserves a quantity $Q$. Must there be a symmetry of $L$ that produces it?',
        a: 'No. (1) Noether goes one way: every continuous symmetry gives a conserved quantity. (2) The reverse is not guaranteed: a conserved $Q$ need not come from any symmetry of $L$. (3) Some conserved quantities sit outside the recipe, with no continuous move that the formula can read. (4) So do not assume each conservation law has a matching symmetry.'
      },
      {
        q: "ELABORATE: Why does Noether's theorem look at $L$ itself, not just the equations of motion?",
        a: "Because the conserved quantity is built from $L$ directly, and equivalent equations can come from different $L$'s. (1) Two Lagrangians can produce the exact same equations of motion (adding a total time derivative to $L$ is the standard trick). (2) The Noether formula $I = \\sum_i \\frac{\\partial L}{\\partial \\dot{q}_i} X_i$ uses $L$ itself, not just the equations. (3) So two systems with identical equations but different Lagrangians can carry different Noether charges. (4) The proof depends on $L$ being invariant. Without symmetry of $L$, the key step has nothing to lean on."
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: "Symmetries and Conservation Laws: Noether's Theorem",
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Core Equations</h2>

            <h3>The Recipe</h3>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$I = \\sum_i \\frac{\\partial L}{\\partial \\dot{q}_i} \\, \\frac{d}{ds}\\left(h^s(q)\\right)_i\\bigg|_{s=0} = \\text{const}$$`}</span>
            </div>
            <ol className="lrn-list">
              <li>
                Find a continuous move {`$h^s$`} that leaves {`$L$`} the same.
              </li>
              <li>{`Differentiate it at $s = 0$ to get the generator $X = \\frac{d}{ds}h^s(q)\\big|_{s=0}$.`}</li>
              <li>{`Dot the generalized momentum $\\frac{\\partial L}{\\partial \\dot{q}}$ with $X$.`}</li>
              <li>That dot product {`$I$`} stays constant along every motion.</li>
            </ol>

            <h3>Up to a Total Derivative</h3>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\text{If } \\frac{d}{ds}L\\big|_{s=0} = \\frac{dF}{dt}, \\quad I = \\sum_i \\frac{\\partial L}{\\partial \\dot{q}_i}\\,X_i - F = \\text{const}$$`}</span>
            </div>
            <p>
              {`The move may change $L$ by a total time derivative $\\frac{dF}{dt}$ and still count as a symmetry. Subtract $F$ from the charge.`}
            </p>

            <h3>The Three Classic Symmetries</h3>
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
                  <td>{`$e_1 \\times q$`}</td>
                  <td>Angular momentum {`$M_1$`}</td>
                </tr>
                <tr>
                  <td>Time translation</td>
                  <td>{`$X = \\dot{q}$, $F = L$`}</td>
                  <td>{`Energy $h = \\sum_i \\dot{q}_i \\frac{\\partial L}{\\partial \\dot{q}_i} - L$`}</td>
                </tr>
              </tbody>
            </table>

            <h3>Conditions</h3>
            <table>
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Symmetry is continuous</td>
                  <td>{`You differentiate at $s = 0$; a discrete flip cannot be differentiated`}</td>
                </tr>
                <tr>
                  <td>On-shell (along a solution)</td>
                  <td>{`$I$ is constant only on paths that obey the euler-lagrange equations`}</td>
                </tr>
                <tr>
                  <td>The converse can fail</td>
                  <td>{`A conserved quantity need not come from any symmetry`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ]
    },
    customCss: `
      .MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }
    `
  }

  return <LearningTemplate config={config} />
}
