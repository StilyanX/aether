import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  Plot as P1,
  Axes as A1,
  Parametric as Pa1,
  Dot as D1,
  Arrow as Ar1,
  Tex as T1,
  Slider as Sl1,
  OPACITY as O1
} from '../../../../../components/viz/primitives'
import { VizFigure } from '../../../../../components/viz-figure'

// Visualizations

export function ActionPathVariation() {
  const [eps, setEps] = React.useState(0.6)
  const [bumps, setBumps] = React.useState(1)
  // Harmonic-oscillator action, L = q-dot^2/2 - q^2/2 (m = omega = 1, dimensionless
  // units). q(t) = A0 sin t solves the Euler-Lagrange equation q-ddot = -q. The time
  // window [0, T2] must end BEFORE the conjugate point at t = pi: past it the extremal
  // is a saddle and slow variations would LOWER the action. With T2 = 3 < pi the
  // extremal is a strict minimum, so Delta-S >= 0 for every slider setting.
  const A0 = 1.4
  const T2 = 3
  const truePath = t => [t, A0 * Math.sin(t)]
  const variedPath = t => {
    const [x, y] = truePath(t)
    return [x, y + eps * Math.sin(bumps * Math.PI * (t / T2))]
  }
  const actS = path => {
    let s = 0
    const N = 400
    for (let i = 0; i < N; i++) {
      const t = (i / N) * T2
      const dt = T2 / N
      const [, y0] = path(t)
      const [, y1] = path(t + dt)
      const yd = (y1 - y0) / dt
      const ym = 0.5 * (y0 + y1)
      s += (0.5 * yd * yd - 0.5 * ym * ym) * dt
    }
    return s
  }
  const S0 = actS(truePath),
    S1 = actS(variedPath)
  return (
    <div style={{ width: '100%' }}>
      <P1 xRange={[-0.45, 3.45]} yRange={[-1.05, 2.85]} width={520} height={260}>
        <A1 step={1} showGrid={false} showTicks={false} />
        <Pa1 xy={truePath} t={[0, T2]} samples={120} opacity={O1.fg} strokeWidth={2} />
        <Pa1 xy={variedPath} t={[0, T2]} samples={120} opacity={O1.accent} dash="4 4" />
        {[0.45, 1.1, 1.8, 2.5].map((tx, i) => {
          const a = truePath(tx),
            b = variedPath(tx)
          return <Ar1 key={i} from={a} to={b} opacity={O1.dim} head={5} />
        })}
        <D1 x={0} y={0} />
        <D1 x={T2} y={truePath(T2)[1]} />
        <T1 at={[0.05, -0.05]} tex="q(t_1)" anchor="start" dy={16} opacity={O1.dim} />
        <T1 at={[T2 - 0.05, truePath(T2)[1]]} tex="q(t_2)" anchor="end" dy={16} opacity={O1.dim} />
        <T1
          at={[2.1, truePath(2.1)[1] - 0.15]}
          tex="q(t)"
          anchor="middle"
          dy={18}
          opacity={O1.fg}
        />
        <T1
          at={[1.5, Math.max(truePath(1.5)[1], variedPath(1.5)[1])]}
          tex="q + \delta q"
          anchor="middle"
          dy={-10}
          opacity={O1.accent}
        />
        <T1 at={[2.55, 2.62]} tex={`S[q] = ${S0.toFixed(3)}`} opacity={O1.fg} size={11} />
        <T1
          at={[2.55, 2.32]}
          tex={`S[q+\\delta q] = ${S1.toFixed(3)}`}
          opacity={O1.accent}
          size={11}
        />
        <T1
          at={[2.55, 2.02]}
          tex={`\\Delta S = ${(S1 - S0).toFixed(3)} \\ge 0`}
          opacity={O1.dim}
          size={11}
        />
      </P1>
      <Sl1
        label="δq"
        value={eps}
        min={-1}
        max={1}
        step={0.05}
        onChange={setEps}
        format={v => v.toFixed(2)}
      />
      <Sl1
        label="modes"
        value={bumps}
        min={1}
        max={4}
        step={1}
        onChange={setBumps}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

export default function ThePrincipleOfLeastActionAndTheEulerLagrangeEquations() {
  const config = {
    cssPrefix: 'ele',
    documentTitle: 'The Principle of Least Action and the Euler-Lagrange Equations - AETHER',
    learning: {
      groupTitle: 'Lagrangian Mechanics and Variational Principles',
      category: 'Physics',
      title: 'The Principle of Least Action and the Euler-Lagrange Equations',
      subtitle:
        'From functionals and variations to the equations of motion in any coordinate system',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Calculus of Variations</h2>
            <p>
              A roller coaster track. A beam of light. A spacecraft trajectory. Each follows the
              path that, in a precise sense, is the best one available among all possible paths. The
              calculus of variations is the math that picks out these paths.
            </p>
            <p>
              Most physics rules describe a single moment: where a particle is, how fast it moves,
              what force pushes it. The calculus of variations works at a higher level. It compares
              whole paths against each other and singles out the special one.
            </p>
            <p>
              To compare paths, we need a way to attach one number to each path. A{' '}
              <strong>functional</strong> does exactly this: it takes a whole curve as input and
              returns a single number.
            </p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Functional</span>
              <div className="lrn-definition-desc">
                <p>A functional takes a curve as input and returns one number.</p>
                <p>
                  {`The standard form is $\\Phi(\\gamma) = \\int_a^b L(x, \\dot{x}, t)\\, dt$. Here $\\gamma$ is the curve $x(t)$, $\\dot{x} = \\frac{dx}{dt}$ is its velocity, and $L$ is any rule that combines position, velocity, and time into a single number. The integral adds up that rule along the curve from $t=a$ to $t=b$.`}
                </p>
              </div>
            </div>
            <p>Three functionals to keep in mind:</p>
            <ul className="lrn-list">
              <li>
                <strong>Arc length</strong> of a curve: how long the curve is.
              </li>
              <li>
                <strong>Travel time</strong> of a light ray: how long the ray takes to get from
                start to end.
              </li>
              <li>
                <strong>Action</strong> of a moving particle: a quantity you build from energy. We
                define it carefully in the next section. For now, treat it as the number nature
                minimizes when choosing the actual path.
              </li>
            </ul>
            <p>
              <strong>When to use this:</strong> reach for the calculus of variations whenever the
              unknown is a whole curve or function, not a single number. Shortest path, fastest
              descent, real trajectory of a particle: all are minimum-of-a-functional problems.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`The arc length of a curve $x(t)$ from $t=0$ to $t=1$ is $\\Phi(\\gamma) = \\int_0^1 \\sqrt{1 + \\dot{x}^2}\\, dt$. What kind of curves do you predict will minimize this functional?`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Straight lines. They are the shortest distance between two points. The machinery
                  we are about to build will confirm it.
                </p>
              </details>
            </div>

            <h3>Variations and the Differential</h3>
            <p>
              Think back to ordinary calculus. To find a minimum of a function, you look for points
              where the derivative is zero. Tiny moves in either direction leave the function
              roughly unchanged. We want the same idea for functionals: find curves where tiny
              changes in the curve leave the functional roughly unchanged.
            </p>
            <p>
              A small change in a curve has a name. A <strong>variation</strong> is a second curve{' '}
              {`$h(t)$`} we add to {`$\\gamma$`} to get a slightly different path {`$\\gamma + h$`}.
              The figure above writes this same variation as {`$\\delta q$`}. It is close in spirit
              to D'Alembert's virtual displacement but not the same thing: that one nudges a system
              at a single frozen instant, while {`$h$`} reshapes the whole curve over time. We
              require {`$h(a) = h(b) = 0$`}, which pins the start and end points in place. Only the
              middle of the curve is allowed to move.
            </p>
            <p>Now ask: how does {`$\\Phi$`} change when we add such a variation?</p>
            <p>
              Compute the difference {`$\\Phi(\\gamma + h) - \\Phi(\\gamma)$`}. When {`$h$`} is
              small, this difference is small. Pull out the part that scales linearly with the size
              of {`$h$`} (doubling {`$h$`} doubles this part) and call it {`$F(h)$`}. Anything left
              over shrinks faster than {`$h$`} itself: if you halve {`$h$`}, the leftover shrinks by
              more than half.
            </p>
            <p>
              We say {`$\\Phi$`} is <strong>differentiable</strong> at {`$\\gamma$`} when this clean
              split exists:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\Phi(\\gamma + h) - \\Phi(\\gamma) = F(h) + (\\text{terms that shrink faster than } h)$$`}</span>
            </div>
            <p>
              The linear piece {`$F(h)$`} is the <strong>differential</strong> of {`$\\Phi$`} at{' '}
              {`$\\gamma$`}. It plays the role of a derivative, but for functionals.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Computing the Differential</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Plug the wiggled curve into the functional. Since {`$\\Phi$`} is an integral of{' '}
                  {`$L$`}, just replace {`$x$`} with {`$x+h$`} and {`$\\dot{x}$`} with{' '}
                  {`$\\dot{x}+\\dot{h}$`}:
                  <br />
                  {`$\\Phi(\\gamma + h) = \\int L(x+h, \\dot{x}+\\dot{h}, t)\\, dt$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Approximate {`$L$`} for small {`$h$`} with the same{' '}
                  <strong>Taylor expansion</strong> we used on the potential earlier, keeping only
                  the lowest-order terms in the small change:
                  <br />
                  {`$L(x+h,\\dot{x}+\\dot{h},t) \\approx L + \\frac{\\partial L}{\\partial x}h + \\frac{\\partial L}{\\partial \\dot{x}}\\dot{h}$.`}
                  <br />
                  The partial derivatives say how much {`$L$`} changes per unit change in {`$x$`}{' '}
                  and per unit change in {`$\\dot{x}$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  Subtract {`$\\Phi(\\gamma)$`}. The constant {`$L$`} term cancels and the
                  approximation error gathers into a single small leftover {`$O(\\|h\\|^2)$`}, where{' '}
                  {`$\\|h\\|$`} measures the size of the variation {`$h$`}:
                  <br />
                  {`$\\Phi(\\gamma+h) - \\Phi(\\gamma) = \\int \\left(\\frac{\\partial L}{\\partial x}h + \\frac{\\partial L}{\\partial \\dot{x}}\\dot{h}\\right) dt + O(\\|h\\|^2)$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  We want everything multiplied by {`$h$`}, not by {`$\\dot{h}$`}.{' '}
                  <strong>Integration by parts</strong> trades a derivative on one factor for a
                  derivative on the other:
                  <br />
                  {`$\\int \\frac{\\partial L}{\\partial \\dot{x}}\\dot{h}\\, dt = -\\int \\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) h\\, dt$`}
                  .
                  <br />
                  The leftover boundary terms drop out because {`$h(a) = h(b) = 0$`}: the variation
                  vanishes at the endpoints.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">
                  Combine the two terms. Both now multiply {`$h$`}, so we can factor it out:
                  <br />
                  {`$F(h) = \\int \\left(\\frac{\\partial L}{\\partial x} - \\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{x}}\\right) h\\, dt$.`}
                  <br />
                  The differential is now a single integral of (something) {`$\\times h$`}.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">YOUR TURN: Action Differential</span>
                <p>Now you do the same calculation for a moving particle in a potential.</p>
                <ol className="lrn-list">
                  <li>{`Set $L = \\frac{1}{2}\\dot{x}^2 - U(x)$.`}</li>
                  <li>
                    {`Compute $\\frac{\\partial L}{\\partial x}$ and $\\frac{\\partial L}{\\partial \\dot{x}}$.`}
                  </li>
                  <li>
                    Apply the integration-by-parts step to find the Euler-Lagrange equation. You
                    should recover Newton's second law.
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  {`For $L = \\sqrt{\\dot{x}^2 + \\dot{y}^2}$ (arc length of a curve in the plane, with two coordinates), write the full differential and find the curves that minimize it.`}
                </p>
              </div>
            </div>

            <h3>Extremals and the Euler-Lagrange Equation</h3>
            <p>
              We are ready for the punchline. A curve is an <strong>extremal</strong> when the
              differential {`$F(h)$`} is zero for every allowed variation {`$h$`}. It is the
              calculus-of-variations version of a critical point: tiny wiggles do not change the
              functional to first order (meaning the leading, straight-line part of the change is
              zero).
            </p>
            <p>
              A word on the name. An extremal makes the functional <strong>stationary</strong>, not
              necessarily smallest. Just like a critical point of an ordinary function can be a
              minimum, a maximum, or a saddle, an extremal can be any of these. "Least action" is a
              historical name that stuck. The real condition is that the action stops changing to
              first order, not that it hits a true minimum.
            </p>
            <p>
              Look at the formula we just derived. Demanding {`$F(h) = 0$`} for every {`$h$`} is
              strong. The only way an integral of (something) {`$\\times h$`} can vanish for every{' '}
              {`$h$`} is if the (something) itself is zero everywhere along the curve.
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Key Result</span>
              <p>{`A curve $x(t)$ is an extremal of $\\Phi = \\int L\\, dt$ if and only if it satisfies the Euler-Lagrange equation:`}</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) - \\frac{\\partial L}{\\partial x} = 0$$`}</span>
              </div>
            </div>

            <VizFigure aspect="auto" title="Action Path Variation">
              <ActionPathVariation />
            </VizFigure>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The argument is a result called the{' '}
                <strong>Fundamental Lemma of the Calculus of Variations</strong>:
              </p>
              <p>
                {`If $\\int f(t) h(t)\\, dt = 0$ for every smooth function $h$ that vanishes at the endpoints, then $f(t) = 0$ everywhere on the interval.`}
              </p>
              <p>
                The reasoning: suppose {`$f$`} is not zero everywhere. Then it is positive (or
                negative) somewhere, say at {`$t_0$`}. Pick {`$h$`} to be a small bump centered on{' '}
                {`$t_0$`} and zero outside. The integrand {`$f \\cdot h$`} keeps a single sign and
                the integral comes out nonzero. Contradiction. So {`$f$`} must be zero everywhere.
              </p>
            </div>

            <h3>Many Dimensions at Once</h3>
            <p>
              Real systems live in more than one dimension. A particle in 3D space has three
              coordinates. A double pendulum has two angles. Whatever it is, write its state as{' '}
              {`$x = (x_1, x_2, \\ldots, x_n)$`} and its velocity as{' '}
              {`$\\dot{x} = (\\dot{x}_1, \\ldots, \\dot{x}_n)$`}.
            </p>
            <p>
              Repeat the variation argument independently in each direction. Each coordinate gets
              its own Euler-Lagrange equation:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}_i}\\right) - \\frac{\\partial L}{\\partial x_i} = 0, \\quad i = 1, \\ldots, n$$`}</span>
            </div>
            <p>These {`$n$`} equations together determine the full motion of the system.</p>

            <h3>Coordinate Independence</h3>
            <p>
              The Euler-Lagrange equation describes the same physical curves no matter what
              coordinate system you use. Cartesian, polar, spherical, rotating, accelerated: write
              down {`$L$`} in your chosen coordinates and the equation still picks out the right
              paths.
            </p>
            <p>
              The reason is simple. Saying "{`$\\Phi$`} is stationary on this curve" is a statement
              about the curve itself, not about the labels we use for its points. A straight line on
              a sheet of paper stays straight whether you describe it with {`$(x, y)$`} or with
              distance from the origin and angle. Coordinates change how we write {`$L$`}, never
              which curves count as extremals.
            </p>
            <p>
              This is the practical superpower of the approach. Pick whatever coordinates make{' '}
              {`$L$`} easiest to write, plug them into Euler-Lagrange, and out come the equations of
              motion. You never have to track how forces transform between coordinate systems.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Lagrange's Equations</h2>
            <p>
              Now we apply the calculus of variations to physics. Newton wrote his laws as
              relationships between force and acceleration at every instant. Lagrange rewrote them
              as a single statement about whole paths.
            </p>
            <p>
              <strong>Newton:</strong> at every moment, force equals mass times acceleration.
            </p>
            <p>
              <strong>Lagrange:</strong> among all paths a system could take between two fixed
              points in time, the real one is the path that makes a certain functional, the action,
              stationary. "Stationary" is the same condition we just developed: small wiggles in the
              path leave the functional unchanged to first order. The real path is an extremal of
              the action.
            </p>
            <p>
              The two formulations predict the same motions. The advantage of Lagrange's view is
              that it does not care which coordinates you pick.
            </p>
            <p>
              <strong>When to use this:</strong> reach for Lagrange's equations whenever you have
              constraints (a bead on a wire, a rolling ball), curved coordinates (polar, spherical,
              rotating), or many moving parts. All three are awkward in Newton's framework and
              natural in Lagrange's.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A particle moves freely (no forces) in 3D space. What do you predict Lagrange's
                equations will give?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  A straight line at constant speed. With no forces, nothing should bend the path or
                  change the speed. The worked example below shows how the Euler-Lagrange equation
                  delivers exactly this, and recovers Newton's first law.
                </p>
              </details>
            </div>

            <h3>Hamilton's Principle of Least Action</h3>
            <p>
              We met the <strong>Lagrangian</strong> {`$L = T - U$`} in D'Alembert: kinetic energy{' '}
              {`$T = \\frac{1}{2}m|\\dot{\\mathbf{r}}|^2$`} minus potential energy{' '}
              {`$U(\\mathbf{r})$`}, the energy of position in a force field. There we reached it
              from forces and virtual work. Hamilton's principle gives it a second, deeper home: the
              variational route.
            </p>
            <p>
              The <strong>action</strong> is the integral of {`$L$`} along the trajectory from start
              time {`$t_1$`} to end time {`$t_2$`}:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\Phi(\\gamma) = \\int_{t_1}^{t_2} (T - U)\\, dt$$`}</span>
            </div>
            <p>
              <strong>Hamilton's principle</strong> is the central claim: the path the system
              actually follows between {`$t_1$`} and {`$t_2$`} is an extremal of this action. Run
              the Euler-Lagrange machinery on this {`$L$`} and Newton's laws fall out, just as they
              did from the D'Alembert route. The difference is that now their origin is variational:
              the real path is the one that makes the action stationary.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Hamilton's Principle Recovers Newton</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Plug the kinetic and potential energies into the Lagrangian:
                  <br />
                  {`$L = T - U = \\sum_i \\frac{m_i}{2}|\\dot{\\mathbf{r}}_i|^2 - U(\\mathbf{r})$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Take the two partial derivatives the Euler-Lagrange equation needs.{' '}
                  {`$\\frac{\\partial L}{\\partial \\dot{\\mathbf{r}}_i} = m_i \\dot{\\mathbf{r}}_i$`}{' '}
                  is the ordinary momentum of particle {`$i$`}.{' '}
                  {`$\\frac{\\partial L}{\\partial \\mathbf{r}_i} = -\\frac{\\partial U}{\\partial \\mathbf{r}_i}$`}{' '}
                  is the force on particle {`$i$`} (force is minus the slope of potential energy,
                  established in the earlier topics).
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  Substitute into the Euler-Lagrange equation:
                  <br />
                  {`$\\frac{d}{dt}(m_i \\dot{\\mathbf{r}}_i) = -\\frac{\\partial U}{\\partial \\mathbf{r}_i}$`}
                  .
                  <br />
                  The left side is the rate of change of momentum. The right side is the force. This
                  is Newton's second law, the same equation the D'Alembert route reached.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The arrow runs both ways. Newton's law and "the action is stationary on the real
                path" are the same statement, written in two languages. Start from either one and
                the Euler-Lagrange equation for {`$L = T - U$`} carries you to the other.
              </p>
            </div>

            <h3>Worked Example: Free Mass Point</h3>
            <p>
              The simplest case: a single mass {`$m$`} drifting through ordinary 3D space with no
              forces. There is no potential, so {`$U = 0$`} and{' '}
              {`$L = T = \\frac{m}{2}(\\dot{q}_1^2 + \\dot{q}_2^2 + \\dot{q}_3^2)$`}. The {`$q_i$`}{' '}
              are the three coordinates of the particle.
            </p>
            <p>
              The Lagrangian does not contain the {`$q_i$`} themselves, only their time derivatives.
              So {`$\\frac{\\partial L}{\\partial q_i} = 0$`} and the Euler-Lagrange equation
              reduces to {`$\\frac{d}{dt}(m\\dot{q}_i) = 0$`}. This says the momentum{' '}
              {`$p_i = m\\dot{q}_i$`} is constant.
            </p>
            <p>
              Constant momentum means constant velocity, which means a straight line at fixed speed.
              Newton's first law, recovered without ever mentioning forces. The deeper reason: no
              position dependence in {`$L$`} is the same as no force on the particle.
            </p>

            <h3>Worked Example: Central Field in Polar Coordinates</h3>
            <p>
              A <strong>central force field</strong> is one where the force on the particle always
              points along the line connecting it to a fixed center, and depends only on the
              distance from that center. Gravity from the Sun and a spring anchored at the origin
              are both central. Polar coordinates fit naturally: let {`$r$`} be the distance from
              the center and {`$\\varphi$`} the angle around it.
            </p>
            <p>
              First we need the kinetic energy in these coordinates. As the particle moves, its
              velocity has two perpendicular parts. The radial part has speed {`$\\dot{r}$`}: how
              fast {`$r$`} grows. The tangential part has speed {`$r\\dot{\\varphi}$`}: a point at
              radius {`$r$`} sweeping out angle at rate {`$\\dot{\\varphi}$`} moves sideways that
              fast. The two parts are at right angles, so by Pythagoras the squared speed is{' '}
              {`$v^2 = \\dot{r}^2 + r^2\\dot{\\varphi}^2$`}.
            </p>
            <p>
              So the kinetic energy splits into a radial piece and an angular piece, and the
              potential depends only on {`$r$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$L = T - U = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\varphi}^2) - U(r)$$`}</span>
            </div>
            <p>
              Two coordinates ({`$r$`} and {`$\\varphi$`}) means two Euler-Lagrange equations: one
              for radial motion, one for angular motion.
            </p>
            <p>
              Start with the radial one. The velocity partial is{' '}
              {`$\\frac{\\partial L}{\\partial \\dot{r}} = m\\dot{r}$`}, and its time derivative is{' '}
              {`$m\\ddot{r}$`}. The position partial is{' '}
              {`$\\frac{\\partial L}{\\partial r} = mr\\dot{\\varphi}^2 - \\frac{\\partial U}{\\partial r}$`}{' '}
              (the {`$r^2$`} in the angular term differentiates to {`$2r$`}, and the{' '}
              {`$\\frac{1}{2}$`} cancels it). Feed both into the Euler-Lagrange equation{' '}
              {`$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{r}} - \\frac{\\partial L}{\\partial r} = 0$`}
              :
            </p>
            <div className="lrn-eq">
              <span>{`$$m\\ddot{r} = mr\\dot{\\varphi}^2 - \\frac{\\partial U}{\\partial r}$$`}</span>
            </div>
            <p>
              Read it left to right. Mass times radial acceleration equals an outward push that
              grows with how fast the particle spins, minus the inward pull of the potential. The
              first term on the right is the centrifugal effect (the outward push a spinning thing
              seems to feel), generated automatically by the polar form of the kinetic energy. We
              did not have to add it by hand.
            </p>
            <p>
              The angular equation is even simpler. {`$L$`} does not contain {`$\\varphi$`} (only{' '}
              {`$\\dot{\\varphi}$`}), so {`$\\frac{\\partial L}{\\partial \\varphi} = 0$`} and the
              Euler-Lagrange equation collapses to {`$\\frac{d}{dt}(mr^2 \\dot{\\varphi}) = 0$`}.
              The quantity {`$p_\\varphi = mr^2 \\dot{\\varphi}$`} is the angular momentum, and it
              stays constant. You proved {`$mr^2\\dot{\\varphi}$`} is conserved in any central field
              by the cross-product argument in Conservative Force Fields. Here it falls out for
              free, just because {`$\\varphi$`} is missing from {`$L$`}.
            </p>

            <p>
              That last move has a name we met in D'Alembert: the{' '}
              <strong>generalized momentum</strong>{' '}
              {`$p_i = \\frac{\\partial L}{\\partial \\dot{q}_i}$`}. When a coordinate is missing
              from {`$L$`} (here {`$\\varphi$`}), it is called <strong>cyclic</strong>, and its
              momentum (here {`$p_\\varphi = mr^2\\dot{\\varphi}$`}) is conserved. The full story of
              how every symmetry of {`$L$`} hands you a conservation law waits for Noether.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the term $mr\\dot{\\varphi}^2$ appear in the radial equation? What does it represent physically?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`In curved coordinates, the Euler-Lagrange equation handles the geometry for you. The term $mr\\dot{\\varphi}^2$ is the centrifugal effect. A particle moving in a circle of radius $r$ at angular speed $\\dot{\\varphi}$ needs an inward (centripetal) force $-mr\\dot{\\varphi}^2$ to keep it on the circle. In the radial equation that inward requirement appears as an outward push that the radial acceleration has to overcome. The Lagrangian generates it automatically from the kinetic energy term $\\frac{1}{2}mr^2\\dot{\\varphi}^2$, without any special treatment of rotating frames.`}
                </p>
              </details>
            </div>

            <div
              className="lrn-contrast"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                border: '1px solid var(--ink-hairline)',
                margin: '32px 0'
              }}
            >
              <div style={{ padding: '20px', borderRight: '1px solid var(--ink-hairline)' }}>
                <span className="lrn-label">Newtonian Mechanics</span>
                <p>Tracks forces and accelerations in ordinary 3D space.</p>
                <p>
                  Tied to coordinates. Switch to polar or rotating axes and you have to rewrite the
                  forces by hand.
                </p>
                <p>Natural setting: ordinary flat 3D space, written {`$\\mathbb{E}^3$`}.</p>
              </div>
              <div style={{ padding: '20px' }}>
                <span className="lrn-label">Lagrangian Mechanics</span>
                <p>Declares that the real path makes the action stationary.</p>
                <p>
                  Coordinate-free. The Euler-Lagrange equation has the same form whatever
                  coordinates you choose.
                </p>
                <p>
                  Natural setting: any <strong>configuration space</strong>, the set of all possible
                  arrangements of the system. Its shape can curve and wrap, a theme taken up in
                  Mechanics on Manifolds.
                </p>
              </div>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What is a functional? Give an example from mechanics.',
        a: '(1) A functional takes a whole curve as input and returns a single number. An ordinary function eats numbers; a functional eats curves. (2) Mechanics example: the action $\\Phi(\\gamma) = \\int (T-U)\\, dt$. Hand it a trajectory $\\gamma$ and it returns one number, the action of that trajectory. (3) Geometry example: arc length $\\Phi(\\gamma) = \\int \\sqrt{1+\\dot{x}^2}\\, dt$. Hand it a curve, get back its length.'
      },
      {
        q: 'State the Euler-Lagrange equation for a 1D Lagrangian $L(x, \\dot{x}, t)$.',
        a: '(1) The Euler-Lagrange equation is $\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) - \\frac{\\partial L}{\\partial x} = 0$. (2) It is the condition that the differential of $\\Phi = \\int L\\, dt$ vanishes for every variation $h$ that pins the endpoints. (3) Integration by parts converts the $\\dot{h}$ term in the differential into an $h$ term. The Fundamental Lemma then forces the bracketed expression to be zero everywhere on the curve.'
      },
      {
        q: 'A particle moves in a potential $U(q)$ in 1D. Write the Lagrangian and Euler-Lagrange equation.',
        a: "(1) Lagrangian: $L = T - U = \\frac{1}{2}m\\dot{q}^2 - U(q)$. (2) Velocity partial: $\\frac{\\partial L}{\\partial \\dot{q}} = m\\dot{q}$ (the momentum). Its time derivative is $m\\ddot{q}$. (3) Position partial: $\\frac{\\partial L}{\\partial q} = -U'(q)$ (the force, with a sign). (4) Euler-Lagrange: $m\\ddot{q} + U'(q) = 0$, or $m\\ddot{q} = -U'(q)$. Mass times acceleration equals force. Newton's second law."
      },
      {
        q: 'Why does the Euler-Lagrange equation describe the same curves in any coordinate system?',
        a: '(1) The condition that the action is stationary is a statement about the curve itself, not about the labels we use for points along it. (2) Changing coordinates changes the formula for $L$, but it does not change which curves count as extremals. (3) The Euler-Lagrange equation is just the way that single coordinate-free condition writes itself out in whichever coordinates you picked. (4) A straight line stays straight whether you describe it in $(x,y)$ or in distance and angle. The form of $L$ varies; the extremal curves are the same geometric objects.'
      },
      {
        q: "ELABORATE: What is Hamilton's principle? Why is it equivalent to Newton's second law?",
        a: "(1) Hamilton's principle: the actual trajectory of a system between two fixed times is the path that makes the action $\\Phi = \\int (T-U)\\, dt$ stationary. Here $T$ is the kinetic energy and $U$ is the potential energy. (2) Run the Euler-Lagrange equation on $L = T - U$ and you get $\\frac{d}{dt}(m_i\\dot{r}_i) = -\\frac{\\partial U}{\\partial r_i}$. The left side is the rate of change of momentum; the right side is the force. (3) That is exactly Newton's second law, $ma = F$. (4) The two principles describe the same motions. Hamilton's wins on coordinate independence: change coordinates and the form of the equation does not change."
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'The Principle of Least Action and the Euler-Lagrange Equations',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Core Equations</h2>

            <h3>Variational Calculus</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Functional differential</td>
                  <td>{`$F(h) = \\int\\!\\left(\\frac{\\partial L}{\\partial x} - \\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{x}}\\right)h\\, dt$`}</td>
                  <td>Computing how the action changes under variations</td>
                </tr>
                <tr>
                  <td>Euler-Lagrange (1D)</td>
                  <td>{`$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) - \\frac{\\partial L}{\\partial x} = 0$`}</td>
                  <td>Any 1D variational problem</td>
                </tr>
                <tr>
                  <td>Euler-Lagrange (nD)</td>
                  <td>{`$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}_i}\\right) - \\frac{\\partial L}{\\partial x_i} = 0$`}</td>
                  <td>Multi-dimensional variational problem</td>
                </tr>
              </tbody>
            </table>

            <h3>Lagrangian Mechanics</h3>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\Phi = \\int_{t_1}^{t_2} (T - U)\\, dt, \\qquad L = T - U$$`}</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Generalized momentum</td>
                  <td>{`$p_i = \\frac{\\partial L}{\\partial \\dot{q}_i}$`}</td>
                  <td>Finding conserved quantities; connecting to Hamiltonian</td>
                </tr>
                <tr>
                  <td>Cyclic coordinate</td>
                  <td>{`$\\frac{\\partial L}{\\partial q_i} = 0 \\Rightarrow \\dot{p}_i = 0$`}</td>
                  <td>Identifying conservation laws from missing coordinates</td>
                </tr>
                <tr>
                  <td>{`Free mass in $\\mathbb{E}^3$`}</td>
                  <td>{`$L = \\frac{m}{2}(\\dot{q}_1^2 + \\dot{q}_2^2 + \\dot{q}_3^2)$`}</td>
                  <td>Baseline, free particle</td>
                </tr>
                <tr>
                  <td>Central field (polar)</td>
                  <td>{`$L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\varphi}^2) - U(r)$`}</td>
                  <td>Radial problems; angular momentum conservation</td>
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
