import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  Plot as P5,
  Axes as A5,
  Parametric as Pa5,
  Polyline as Pl5,
  Dot as D5,
  Tex as T5,
  Slider as Sl5,
  PlayPause as PP5,
  OPACITY as O5
} from '../../../../../components/viz/primitives'
import { NormalModeDecomposition } from '../../../../../components/viz'
import { VizFigure } from '../../../../../components/viz-figure'
import { useSimulation as useSim5, rk4Step as rk45 } from '../../../../../components/viz/physics'

export function StableEquilibrium() {
  return (
    <P5 xRange={[-4, 4]} yRange={[-1, 4]} width={640} height={240}>
      <A5 />
      <Pa5 xy={t => [t, 0.5 * t * t]} t={[-3.5, 3.5]} opacity={O5.fg} />
      <Pa5 xy={t => [t, -0.4 * t * t + 3.5]} t={[-3, 3]} opacity={O5.dim} />
      <D5 x={0} y={0} r={4} />
      <D5 x={0} y={3.5} r={4} opacity={O5.dim} />
      <T5 at={[0.25, -0.62]} tex="\text{stable min},\ U''>0" />
      <T5 at={[-0.45, 3.55]} tex="\text{unstable max},\ U''<0" anchor="end" opacity={O5.dim} />
      <T5 at={[3.85, 0]} tex="q" anchor="end" dy={-8} opacity={O5.faint} size={11} />
      <T5 at={[0, 3.92]} tex="U(q)" dx={8} opacity={O5.faint} size={11} />
    </P5>
  )
}

export function BeatOscillation() {
  // Two close frequencies omega_12 = omega-bar +/- d-omega/2 superpose:
  // q1 = A[cos(omega1 t) + cos(omega2 t)] = 2A cos(d-omega t/2) cos(omega-bar t).
  // omega-bar = 3, d-omega = 0.5 -> the beat null at t = 2pi ~ 6.28 sits inside the
  // window, with the amplitude regrowing after it - the whole point of beats.
  const A = 0.9
  const wbar = 3
  const dw = 0.5
  return (
    <P5 xRange={[-1, 13]} yRange={[-2.2, 2.2]} width={640} height={220}>
      <A5 />
      <Pa5
        xy={t => [t, 2 * A * Math.cos((dw / 2) * t) * Math.cos(wbar * t)]}
        t={[0, 12.5]}
        opacity={O5.fg}
        samples={600}
      />
      <Pa5 xy={t => [t, 2 * A * Math.cos((dw / 2) * t)]} t={[0, 12.5]} opacity={O5.dim} />
      <Pa5 xy={t => [t, -2 * A * Math.cos((dw / 2) * t)]} t={[0, 12.5]} opacity={O5.dim} />
      <T5 at={[1.6, 1.95]} tex="2A\cos(\Delta\omega\, t/2)" opacity={O5.dim} size={11} />
      <T5 at={[3.6, -1.95]} tex="q_1(t)" />
      <T5
        at={[6.28, 0]}
        tex="\text{beat null}"
        anchor="middle"
        dy={18}
        opacity={O5.faint}
        size={10}
      />
      <T5 at={[12.8, 0]} tex="t" anchor="end" dy={-8} opacity={O5.faint} size={11} />
    </P5>
  )
}

export function SpringMassLive() {
  const [k, setK] = React.useState(3.5)
  const [gamma, setGamma] = React.useState(0.18)
  const X0 = 1.4 // initial displacement; released from rest
  const [state, , ctl] = useSim5({ x: X0, v: 0 }, (s, dt) => {
    const f = (t, y) => [y[1], -k * k * y[0] - 2 * gamma * y[1]]
    const r = rk45(f, 0, [s.x, s.v], dt)
    return { x: r[0], v: r[1] }
  })
  const yBob = state.x
  const CEIL = 2.2
  const bobTop = yBob // spring attaches to the top of the bob
  const coils = 12
  const segs = []
  for (let i = 0; i <= coils; i++) {
    const yy = CEIL - (i / coils) * (CEIL - bobTop)
    const xx = (i % 2 === 0 ? -0.18 : 0.18) * (i > 0 && i < coils ? 1 : 0)
    segs.push([xx, yy])
  }
  return (
    <div style={{ width: '100%' }}>
      <P5 xRange={[-1.5, 1.5]} yRange={[-2.4, 2.6]} width={420} height={280}>
        <Pa5 xy={t => [-1.4 + t * 2.8, CEIL]} t={[0, 1]} opacity={O5.fg} strokeWidth={2} />
        {Array.from({ length: 7 }, (_, i) => (
          <Pa5
            key={i}
            xy={t => [-1.2 + i * 0.4 + t * 0.2, CEIL + t * 0.18]}
            t={[0, 1]}
            opacity={O5.dim}
          />
        ))}
        <Pl5 points={segs} opacity={O5.accent} strokeWidth={1.3} />
        <D5 x={0} y={yBob - 0.32} r={11} />
        <T5
          at={[-1.45, -1.7]}
          tex={String.raw`\ddot x = -\omega_0^2 x - 2\gamma\dot x`}
          opacity={O5.dim}
          size={11}
        />
        <T5
          at={[-1.45, -2.1]}
          tex={`x(0)=${X0.toFixed(1)},\\ \\dot x(0)=0`}
          opacity={O5.faint}
          size={10}
        />
      </P5>
      <PP5
        playing={ctl.playing}
        onToggle={() => ctl.setPlaying(!ctl.playing)}
        onReset={ctl.reset}
      />
      <Sl5 label="ω₀" value={k} min={1} max={6} step={0.1} onChange={setK} />
      <Sl5 label="γ" value={gamma} min={0} max={1} step={0.02} onChange={setGamma} />
    </div>
  )
}

export function NormalModes() {
  const m = 1,
    k = 4,
    kappa = 3
  const omega1 = Math.sqrt(k / m)
  const omega2 = Math.sqrt((k + 2 * kappa) / m)
  const [t, setT] = React.useState(0)
  const [mode, setMode] = React.useState(0)
  React.useEffect(() => {
    // respect prefers-reduced-motion (house convention)
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf,
      last = performance.now()
    const loop = now => {
      const dt = (now - last) / 1000
      last = now
      setT(p => p + dt)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
  const A = 0.6
  const x1 = mode === 0 ? A * Math.cos(omega1 * t) : A * Math.cos(omega2 * t)
  const x2 = mode === 0 ? A * Math.cos(omega1 * t) : -A * Math.cos(omega2 * t)
  const eq1 = 1.4,
    eq2 = 2.8
  return (
    <div style={{ width: '100%' }}>
      <P5 xRange={[-0.5, 4.5]} yRange={[-2.2, 1.2]} width={520} height={260}>
        <Pa5 xy={s => [0, -1 + s * 2]} t={[0, 1]} opacity={O5.fg} strokeWidth={2} />
        <Pa5 xy={s => [4.0, -1 + s * 2]} t={[0, 1]} opacity={O5.fg} strokeWidth={2} />
        {(() => {
          const zig = (x0, x1v, n = 8) => {
            const pts = []
            for (let i = 0; i <= n; i++) {
              const f = i / n
              const xx = x0 + f * (x1v - x0)
              const yy = i === 0 || i === n ? 0.4 : i % 2 === 0 ? 0.6 : 0.2
              pts.push([xx, yy])
            }
            return pts
          }
          return (
            <g>
              <Pl5 points={zig(0, eq1 + x1)} opacity={O5.dim} strokeWidth={1.2} />
              <Pl5 points={zig(eq1 + x1, eq2 + x2)} opacity={O5.accent} strokeWidth={1.3} />
              <Pl5 points={zig(eq2 + x2, 4.0)} opacity={O5.dim} strokeWidth={1.2} />
            </g>
          )
        })()}
        <D5 x={eq1 + x1} y={0.4} r={11} />
        <D5 x={eq2 + x2} y={0.4} r={11} />
        {/* equilibrium ticks on the spring axis, directly under each rest position */}
        <Pl5
          points={[
            [eq1, 0.02],
            [eq1, -0.18]
          ]}
          opacity={O5.faint}
          strokeWidth={1}
        />
        <Pl5
          points={[
            [eq2, 0.02],
            [eq2, -0.18]
          ]}
          opacity={O5.faint}
          strokeWidth={1}
        />
        <T5
          at={[2.0, -1.6]}
          tex={
            mode === 0
              ? `\\omega_1=\\sqrt{k/m}=${omega1.toFixed(2)}\\;\\text{(in-phase)}`
              : `\\omega_2=\\sqrt{(k+2\\kappa)/m}=${omega2.toFixed(2)}\\;\\text{(anti)}`
          }
          anchor="middle"
          opacity={O5.fg}
          size={11}
        />
        <T5
          at={[2.0, -2.05]}
          tex={`k=${k},\\;\\kappa=${kappa},\\;m=${m}`}
          anchor="middle"
          opacity={O5.dim}
          size={10}
        />
      </P5>
      <Sl5
        label="mode"
        value={mode}
        min={0}
        max={1}
        step={1}
        onChange={setMode}
        format={v => (v < 0.5 ? '1 in-phase' : '2 anti-phase')}
      />
    </div>
  )
}

const config = {
  cssPrefix: 'op2',
  documentTitle: 'Small Oscillations: Systematic Theory - AETHER',
  learning: {
    groupTitle: 'Lagrangian Mechanics and Variational Principles',
    category: 'Classical Mechanics',
    title: 'Small Oscillations: Systematic Theory',
    subtitle: 'Normal modes, normal coordinates, and beats, from equilibrium to coupled motion.',
    sections: [
      <>
        {/* Equilibrium Positions */}
        <h2>Equilibrium Positions</h2>

        <p>
          Every system has rest positions. A bridge has them. A pendulum has them. A spinning
          satellite has them. Mechanics begins by finding these positions and asking what happens
          when you nudge them.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A marble rests at the bottom of a bowl. You push it gently. Now picture the same marble
            on top of a hill. Same push. What happens in each case?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The bowl marble swings back near its rest spot. The hill marble rolls away and never
              returns. Both points are equilibria. Only the bowl is stable.
            </p>
          </details>
        </div>

        <p>
          An <strong>equilibrium position</strong> is a point where the system can sit still
          forever. Call it {`$x_0$`}. For a system governed by {`$\\dot{x} = f(x)$`}, equilibrium
          means {`$f(x_0) = 0$`}: the rate of change is zero, so nothing moves.
        </p>

        <p>
          For a Lagrangian system, the energy splits into kinetic minus potential:{' '}
          {`$L(q, \\dot{q}) = T - U$`}. Here {`$q$`} is position, {`$\\dot{q}$`} is velocity,{' '}
          {`$T$`} is kinetic energy, and {`$U$`} is potential energy. Lagrange's equations of motion
          read:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}} = \\frac{\\partial L}{\\partial q}$$`}</span>
        </div>

        <p>
          At rest the velocity {`$\\dot{q}$`} is zero, so every kinetic term drops out. What remains
          is the equilibrium condition:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\frac{\\partial U}{\\partial q}\\bigg|_{q_0} = 0$$`}</span>
        </div>

        <p>
          The slope of {`$U$`} vanishes at {`$q_0$`}. Any rest point is a flat spot on the potential
          energy curve: a <strong>critical point</strong> of {`$U$`}.
        </p>

        <h3>Lyapunov Stability</h3>

        <p>
          Not every rest point behaves the same when nudged. An equilibrium is{' '}
          <strong>Lyapunov stable</strong> if small disturbances stay small forever. The formal
          condition: let {`$y(t)$`} be the rest trajectory that just sits at the equilibrium, and{' '}
          {`$x(t)$`} the nudged one. For any time horizon {`$T > 0$`} and any tolerance{' '}
          {`$\\varepsilon > 0$`}, you can find a starting margin {`$\\delta > 0$`} so that{' '}
          {`$|x(0)| < \\delta$`} forces {`$|x(t) - y(t)| < \\varepsilon\\delta$`} for every{' '}
          {`$t \\in (0, T)$`}.
        </p>

        <p>
          In plain words: pick how close you want trajectories to stay ({`$\\varepsilon$`}) and how
          long ({`$T$`}). You can always find a starting tolerance ({`$\\delta$`}) that keeps them
          inside.
        </p>

        <p>
          The key result: if {`$q_0$`} is a <strong>strict local minimum</strong> of {`$U$`}, the
          equilibrium at {`$q_0$`} is Lyapunov stable.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Near a minimum, the level sets of energy form closed loops around {`$q_0$`}. Total
            energy {`$E = T + U$`} is conserved. Start with low enough energy and the system cannot
            cross these closed loops. It stays trapped near {`$q_0$`} forever.
          </p>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Lyapunov Stability</span>
            <p>Trajectories stay near {`$q_0$`} but do not return. The system keeps oscillating.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Asymptotic Stability</span>
            <p>Trajectories return back to {`$q_0$`}. Conservative systems never reach this.</p>
          </div>
        </div>

        <p>
          Conservative systems (no friction) oscillate forever. They never settle back to
          equilibrium. Energy has nowhere to go.
        </p>

        <VizFigure aspect="auto" title="Potential Stability">
          <StableEquilibrium />
        </VizFigure>
      </>,

      <>
        {/* Linearization */}
        <h2>Linearization</h2>

        <p>
          A non-linear system is hard to solve. Near a rest point it looks almost linear, because
          tiny displacements only feel the slope and curvature at that point. Replace the curve with
          its tangent line and you get a linear system you can solve exactly.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The pendulum equation is {`$\\ddot{\\theta} = -\\frac{g}{l}\\sin\\theta$`}. Suppose the
            swing stays tiny. What does the equation become, and why?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              For small angles, {`$\\sin\\theta \\approx \\theta$`}. The equation collapses to{' '}
              {`$\\ddot{\\theta} = -\\frac{g}{l}\\theta$`}: simple harmonic motion. The
              non-linearity hides for small swings.
            </p>
          </details>
        </div>

        <p>
          <strong>Linearization</strong> trades a non-linear system {`$\\dot{x} = f(x)$`} for a
          straight-line approximation near a rest point. Shift coordinates so the rest point sits at
          the origin: set {`$y = x - x_0$`}. Then expand {`$f(x_0 + y)$`} as a Taylor series: a sum
          that rebuilds a function from its value and its slopes at one point, term by term. The
          constant term {`$f(x_0)$`} is zero because {`$x_0$`} is an equilibrium. Keeping only the
          linear part:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\frac{dy}{dt} = Ay, \\quad A = \\frac{\\partial f}{\\partial x}\\bigg|_{x_0}$$`}</span>
        </div>

        <p>
          Here {`$y$`} is the displacement from the rest point, and {`$A$`} is the matrix of partial
          derivatives of {`$f$`} evaluated at {`$x_0$`} (the Jacobian). The solution writes itself
          as a matrix exponential:
        </p>

        <div className="lrn-eq">
          <span>{`$$y(t) = e^{At} y(0), \\quad e^{At} = E + At + \\frac{A^2 t^2}{2!} + \\cdots$$`}</span>
        </div>

        <p>
          The symbol {`$E$`} is the identity matrix, and the exponential is defined by its power
          series. The starting state {`$y(0)$`} evolves linearly with time.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Linearized System</span>
            <p>Solves in closed form. Accurate for short times and small displacements.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Full Non-linear System</span>
            <p>Rarely solves in closed form. Required for long times or large swings.</p>
          </div>
        </div>

        <p>
          The approximation theorem says: pick any horizon {`$T$`} and tolerance {`$\\varepsilon$`}.
          You can find a starting margin {`$\\delta$`} so that whenever {`$|x(0)| < \\delta$`}, the
          linear approximation tracks the true solution to within {`$\\varepsilon\\delta$`} for all
          times up to {`$T$`}.
        </p>
      </>,

      <>
        {/* Linearization Of Lagrangian Systems */}
        <h2>Linearization of Lagrangian Systems</h2>

        <p>
          When you start from energy instead of force, the same idea applies. Keep only the leading
          quadratic terms in both kinetic and potential energy. The result is a system of coupled
          springs and masses, the cleanest model in classical mechanics.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A Lagrangian system has kinetic energy {`$T = \\frac{1}{2} a(q) \\dot{q}^2$`}. The
            coefficient {`$a(q)$`} depends on position. What replaces it once you linearize near{' '}
            {`$q = 0$`}, and why?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              It freezes to a constant: {`$T_2 = \\frac{1}{2} a(0) \\dot{q}^2$`}. Any wobble of{' '}
              {`$a(q)$`} near {`$q = 0$`} contributes higher-order corrections you have already
              dropped.
            </p>
          </details>
        </div>

        <p>
          Near the rest point at {`$q = 0$`}, expand both energies and keep only the quadratic
          parts.
        </p>

        <p>
          The <strong>linearized kinetic energy</strong> keeps only the leading quadratic piece:
        </p>

        <div className="lrn-eq">
          <span>{`$$T_2 = \\frac{1}{2} \\sum_{i,j} a_{ij} \\dot{q}_i \\dot{q}_j, \\quad a_{ij} = a_{ij}(0)$$`}</span>
        </div>

        <p>
          The matrix entries {`$a_{ij}$`} are the kinetic coefficients evaluated at the rest point.
          The sum runs over all pairs of coordinates {`$q_i$`} and {`$q_j$`}.
        </p>

        <p>
          The <strong>linearized potential energy</strong> is the quadratic part of {`$U$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$U_2 = \\frac{1}{2} \\sum_{i,j} b_{ij} q_i q_j, \\quad b_{ij} = \\frac{\\partial^2 U}{\\partial q_i \\partial q_j}\\bigg|_{q=0}$$`}</span>
        </div>

        <p>
          The matrix {`$b_{ij}$`} holds the second derivatives of {`$U$`} at the rest point: the
          Hessian. It measures how the potential curves in every pair of directions.
        </p>

        <p>
          The linearized Lagrangian is {`$L_2 = T_2 - U_2$`}. It describes a set of coupled simple
          oscillators.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The potential has no constant term: shift {`$U$`} so that {`$U(0) = 0$`}. It has no
            linear term either, because {`$q = 0$`} is a critical point and the slope vanishes
            there. The quadratic part is what remains.
          </p>
        </div>

        <h3>Worked Example: One Degree of Freedom</h3>

        <p>
          Take {`$T = \\frac{1}{2} a(q) \\dot{q}^2$`} and {`$U = U(q)$`} with a stable rest point at{' '}
          {`$q = 0$`}. Linearizing gives:
        </p>

        <div className="lrn-eq">
          <span>{`$$T_2 = \\frac{1}{2} a(0) \\dot{q}^2, \\quad U_2 = \\frac{1}{2} U''(0) q^2$$`}</span>
        </div>

        <p>
          The kinetic mass {`$a(0)$`} and the spring constant {`$U''(0)$`} are both numbers, frozen
          at the rest point. The equation of motion becomes {`$a(0)\\ddot{q} = -U''(0)q$`}, the
          familiar mass-times-acceleration equals minus-spring-times-displacement form. The
          oscillation frequency is:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\omega_0^2 = \\frac{b}{a} = \\frac{U''(0)}{a(0)}$$`}</span>
        </div>

        <p>
          Stiffer potential ({`$U''(0)$`} large) raises the frequency. Heavier mass ({`$a(0)$`}{' '}
          large) lowers it. Both rules match every spring-mass system you have ever held.
        </p>
      </>,

      <>
        {/* Small Oscillations */}
        <h2>Small Oscillations</h2>

        <p>
          For a tiny swing near a stable rest point, the motion is the simplest in physics: pure
          sinusoidal oscillation at one frequency. Whatever the system, in the limit of small
          amplitude it looks like a single spring.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A bead sits at the bottom of a curved wire {`$y = U(x)$`} under gravity. You nudge it.
            What property of the wire sets the swing rate?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The curvature at the bottom: {`$\\omega^2 = U''(x_0)$`}. A sharper bowl means a faster
              swing. Only the local shape matters; the rest of the wire is invisible to small
              motion.
            </p>
          </details>
        </div>

        <p>
          <strong>Small oscillations</strong> are the motions of the linearized Lagrangian{' '}
          {`$L_2 = T_2 - U_2$`} near a rest point. As the swing shrinks, the period approaches a
          fixed value set entirely by the local stiffness:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\tau \\to \\tau_0 = \\frac{2\\pi}{\\omega_0} \\quad \\text{as amplitude} \\to 0$$`}</span>
        </div>

        <p>
          Here {`$\\tau_0$`} is the small-amplitude period and {`$\\omega_0$`} is the natural
          angular frequency. For larger amplitudes, the period shifts; for tiny ones, it locks onto{' '}
          {`$\\tau_0$`}.
        </p>

        <h3>Bead on a Wire</h3>

        <p>
          Take a bead of mass 1 on wire {`$y = U(x)$`} in gravity with {`$g = 1$`}. The bead's
          potential energy equals its height, so {`$U(x)$`} is both the wire shape and the
          potential. Near a rest point {`$x_0$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\omega^2 = \\frac{\\partial^2 U}{\\partial x^2}\\bigg|_{x_0}$$`}</span>
        </div>

        <p>
          The right side is the second derivative of {`$U$`} at {`$x_0$`}: the curvature of the wire
          at the bottom. Steeper curve, higher frequency.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The bead's potential is its height {`$U(x)$`}. The quadratic approximation near{' '}
            {`$x_0$`} gives {`$U(x) \\approx U(x_0) + \\frac{1}{2} U''(x_0)(x - x_0)^2$`}. The
            coefficient of the squared displacement is the restoring spring constant. Mass equals 1,
            so dividing by mass leaves {`$\\omega^2 = U''(x_0)$`}.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does {`$\\omega^2 = U''(x_0)$`} ignore the shape of the wire far from {`$x_0$`}?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Small swings feel only the local curvature. The Taylor series throws away everything
              past quadratic. Distant parts of the wire show up only in cubic and higher terms,
              which carry powers of a tiny displacement and vanish first.
            </p>
          </details>
        </div>
      </>,

      <>
        {/* Reduction To Principal Axes */}
        <h2>Reduction to Principal Axes</h2>

        <p>
          A coupled oscillator looks tangled. Push one mass and others move. The trick is to find
          new coordinates that move on their own. In those coordinates the system splits into
          independent springs, each with its own frequency.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Two masses are joined by springs. You want directions in which each mass swings on its
            own, untouched by the other. Can you always find such directions?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes, always. They are the principal coordinates (normal modes). In these directions
              the springs decouple and the system breaks into separate oscillators.
            </p>
          </details>
        </div>

        <p>
          A system with {`$n$`} degrees of freedom near a rest point has kinetic and potential
          energies as quadratic forms:
        </p>

        <div className="lrn-eq">
          <span>{`$$T = \\frac{1}{2}(A\\dot{q}, \\dot{q}), \\quad U = \\frac{1}{2}(Bq, q), \\quad q \\in \\mathbb{R}^n$$`}</span>
        </div>

        <p>
          The vector {`$q$`} lists every coordinate, {`$\\dot{q}$`} every velocity. The matrix{' '}
          {`$A$`} encodes how mass distributes; the matrix {`$B$`} encodes how potential curves. The
          notation {`$(Mv, v)$`} means {`$\\sum_{i,j} M_{ij} v_i v_j$`}.
        </p>

        <p>
          A <strong>quadratic form</strong> is just energy written with a matrix. The single-spring
          energy {`$\\frac{1}{2}kx^2$`} grows with the square of displacement. For many coordinates,
          the matrix {`$B$`} plays the part of {`$k$`}, and {`$(Bq, q)$`} adds up a stiffness term
          for every pair of coordinates. The off-diagonal entries are the coupling: they say that
          moving one mass changes the energy stored against another.
        </p>

        <p>
          Diagonalizing means finding new coordinates that kill those off-diagonal terms. Both forms
          share the same off-diagonal mess, so you cannot fix them one at a time. The remarkable
          fact is that a single change of coordinates straightens out {`$A$`} and {`$B$`} together.
          You can always pick new coordinates {`$Q$`} that{' '}
          <strong>diagonalize both matrices at once</strong>:
        </p>

        <div className="lrn-eq">
          <span>{`$$T = \\frac{1}{2} \\sum_i \\dot{Q}_i^2, \\quad U = \\frac{1}{2} \\sum_i \\lambda_i Q_i^2$$`}</span>
        </div>

        <p>
          Each {`$\\lambda_i$`} is a positive number when the rest point is stable: it plays the
          role of a spring constant for direction {`$i$`}. Cross-terms are gone.
        </p>

        <p>
          In these <strong>principal coordinates</strong>, the equations of motion split apart:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\ddot{Q}_i = -\\lambda_i Q_i$$`}</span>
        </div>

        <p>Each {`$Q_i$`} evolves on its own, independent of all the others.</p>

        <h3>The Characteristic Equation</h3>

        <p>
          You want directions in which the whole system moves at one shared frequency. Ask which
          shapes {`$\\xi$`} let the potential pull {`$B\\xi$`} point the same way as the inertia
          push {`$A\\xi$`}, just scaled by a number {`$\\lambda$`}: {`$B\\xi = \\lambda A\\xi$`}.
          That is the <strong>generalized eigenvalue problem</strong>. The plain eigenvalue problem
          you may have seen uses the identity in place of {`$A$`}; here the mass matrix {`$A$`}{' '}
          takes its place, because inertia, not bare geometry, sets the rhythm.
        </p>

        <p>
          Such a {`$\\xi$`} exists only when the matrix {`$B - \\lambda A$`} squashes some direction
          to zero, which happens exactly when its determinant vanishes. So you solve:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\det|B - \\lambda A| = 0$$`}</span>
        </div>

        <p>
          The values {`$\\lambda_1, \\ldots, \\lambda_n$`} that satisfy this equation are the{' '}
          <strong>characteristic eigenvalues</strong>. An eigenvalue is the number that tells you
          how much the potential outweighs the inertia along a mode. Whenever {`$\\lambda_i > 0$`},
          the direction oscillates at frequency {`$\\omega_i = \\sqrt{\\lambda_i}$`}: a{' '}
          <strong>characteristic frequency</strong> of the system.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">{`$\\lambda > 0$`}</span>
            <p>Oscillatory: {`$Q = C_1 \\cos\\omega t + C_2 \\sin\\omega t$`}</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">{`$\\lambda = 0$`}</span>
            <p>Neutral: {`$Q = C_1 + C_2 t$`} (slow drift)</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">{`$\\lambda < 0$`}</span>
            <p>Unstable: {`$Q = C_1 \\cosh kt + C_2 \\sinh kt$`} (exponential growth)</p>
          </div>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
            <p>
              Derive the characteristic equation by diagonalizing {`$T$`} and {`$U$`} together. Try
              a solution of the form {`$q(t) = e^{i\\omega t}\\xi$`}: a single direction {`$\\xi$`}{' '}
              oscillating at one frequency. Substituting into the equations of motion gives{' '}
              {`$(B - \\lambda A)\\xi = 0$`}. A non-zero {`$\\xi$`} exists only when the matrix is
              singular, that is, when {`$\\det|B - \\lambda A| = 0$`}.
            </p>
          </div>
          <div className="lrn-faded-phase lrn-faded-partial">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
            <ol className="lrn-list">
              <li>
                Plug the ansatz {`$q(t) = e^{i\\omega t}\\xi$`} into {`$A\\ddot{q} = -Bq$`}.
              </li>
              <li>
                Show this yields {`$(B - \\lambda A)\\xi = 0$`} with {`$\\lambda = \\omega^2$`}.
              </li>
              <li>State the condition for a non-zero solution.</li>
            </ol>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>
              Take a two-coordinate system with {`$A = I$`} (the identity) and{' '}
              {`$B = \\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix}$`}. Find the characteristic
              equation and solve for {`$\\lambda_1, \\lambda_2$`}.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does {`$\\lambda < 0$`} give instability instead of oscillation?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Write {`$\\lambda = -k^2$`}. The equation {`$\\ddot{Q} = -\\lambda Q = k^2 Q$`}
              has solutions {`$e^{\\pm kt}$`}. These grow without bound. The restoring force has
              flipped sign and now pushes the system away from the rest point.
            </p>
          </details>
        </div>

        <h3>Worked Example: Solve a Two-Mass System All the Way</h3>

        <p>
          Now watch the whole method run end to end on the system you just set up. Take two equal
          masses with {`$A = I$`} (the identity matrix) and the stiffness matrix:
        </p>

        <div className="lrn-eq">
          <span>{`$$B = \\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix}$$`}</span>
        </div>

        <p>
          <strong>Step 1: write the characteristic equation.</strong> With {`$A = I$`}, the
          condition {`$\\det|B - \\lambda A| = 0$`} becomes:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\det\\begin{pmatrix} 2 - \\lambda & -1 \\\\ -1 & 2 - \\lambda \\end{pmatrix} = (2 - \\lambda)^2 - 1 = 0$$`}</span>
        </div>

        <p>
          <strong>Step 2: solve for the eigenvalues.</strong> Expanding gives{' '}
          {`$\\lambda^2 - 4\\lambda + 3 = 0$`}, which factors as{' '}
          {`$(\\lambda - 1)(\\lambda - 3) = 0$`}. So the two eigenvalues are:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\lambda_1 = 1 \\;\\Rightarrow\\; \\omega_1 = 1, \\qquad \\lambda_2 = 3 \\;\\Rightarrow\\; \\omega_2 = \\sqrt{3} \\approx 1.73$$`}</span>
        </div>

        <p>
          Both eigenvalues are positive, so both directions oscillate. The rest point is stable.
        </p>

        <p>
          <strong>Step 3: find each mode shape.</strong> For each {`$\\lambda$`}, solve{' '}
          {`$(B - \\lambda I)\\xi = 0$`}. For {`$\\lambda_1 = 1$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\begin{pmatrix} 1 & -1 \\\\ -1 & 1 \\end{pmatrix}\\begin{pmatrix} \\xi_a \\\\ \\xi_b \\end{pmatrix} = 0 \\;\\Rightarrow\\; \\xi_a = \\xi_b \\;\\Rightarrow\\; \\xi_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$`}</span>
        </div>

        <p>The two masses move the same way: the in-phase mode. For {`$\\lambda_2 = 3$`}:</p>

        <div className="lrn-eq">
          <span>{`$$\\begin{pmatrix} -1 & -1 \\\\ -1 & -1 \\end{pmatrix}\\begin{pmatrix} \\xi_a \\\\ \\xi_b \\end{pmatrix} = 0 \\;\\Rightarrow\\; \\xi_a = -\\xi_b \\;\\Rightarrow\\; \\xi_2 = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$$`}</span>
        </div>

        <p>
          The masses move in opposite directions: the out-of-phase mode, faster because the middle
          spring fights it.
        </p>

        <p>
          <strong>Step 4: normalize the shapes.</strong> Scale each {`$\\xi$`} so that{' '}
          {`$\\xi^{\\mathsf{T}} A\\, \\xi = 1$`}. With {`$A = I$`} this is ordinary unit length, and
          each vector has length {`$\\sqrt{2}$`}, so divide by {`$\\sqrt{2}$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\hat{\\xi}_1 = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}, \\qquad \\hat{\\xi}_2 = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$$`}</span>
        </div>

        <p>
          <strong>Step 5: build the normal coordinates.</strong> Each normal coordinate is the
          displacement projected onto a mode shape:
        </p>

        <div className="lrn-eq">
          <span>{`$$Q_1 = \\frac{q_1 + q_2}{\\sqrt{2}}, \\qquad Q_2 = \\frac{q_1 - q_2}{\\sqrt{2}}$$`}</span>
        </div>

        <p>
          In these coordinates the system splits into two separate springs: {`$\\ddot{Q}_1 = -Q_1$`}{' '}
          and {`$\\ddot{Q}_2 = -3 Q_2$`}. Each one is a plain harmonic oscillator with no coupling
          left.
        </p>

        <p>
          <strong>Step 6: write the full motion.</strong> Suppose you pull mass 1 to{' '}
          {`$q_1(0) = 1$`}, hold mass 2 at {`$q_2(0) = 0$`}, and release both from rest. Then{' '}
          {`$Q_1(0) = Q_2(0) = \\frac{1}{\\sqrt{2}}$`}, and each normal coordinate just rings at its
          own frequency. Converting back to the masses:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$q_1(t) = \\tfrac{1}{2}\\left(\\cos t + \\cos\\sqrt{3}\\,t\\right), \\qquad q_2(t) = \\tfrac{1}{2}\\left(\\cos t - \\cos\\sqrt{3}\\,t\\right)$$`}</span>
        </div>

        <div className="lrn-insight">
          <p>
            That is the whole engine. From two matrices you got two frequencies, two mode shapes,
            two decoupled oscillators, and the exact motion of every mass for all time. The same six
            steps diagonalize any small-oscillation system, no matter how many masses it has.
          </p>
        </div>
      </>,

      <>
        {/* Characteristic Normal Modes */}
        <h2>Characteristic (Normal) Modes and Frequencies</h2>

        <p>
          A normal mode is a way the whole system can swing as one piece, every part oscillating at
          the same frequency. It is the building block of every coupled oscillator. Any motion is a
          sum of normal modes.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A two-mass system has two eigenvalues, {`$\\lambda_1 < \\lambda_2$`}. How many distinct
            swing patterns exist? How does each look?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Two patterns. In one, both masses move together (the slow mode). In the other, they
              move in opposite directions (the fast mode). Every other motion is a mix of these.
            </p>
          </details>
        </div>

        <p>
          A <strong>characteristic oscillation</strong> (or normal mode) is a solution in which
          every part of the system oscillates at the same frequency with fixed amplitude ratios:
        </p>

        <div className="lrn-eq">
          <span>{`$$q(t) = (C_1 \\cos\\omega t + C_2 \\sin\\omega t)\\xi$$`}</span>
        </div>

        <p>
          The vector {`$\\xi$`} is the shape of the mode: which direction each coordinate moves and
          how big its amplitude is, relative to the others. The constants {`$C_1$`} and {`$C_2$`}{' '}
          set phase and overall size from initial conditions. The shape satisfies{' '}
          {`$B\\xi = \\lambda A\\xi$`} with {`$\\omega = \\sqrt{\\lambda}$`}.
        </p>

        <p>
          A system with {`$n$`} coordinates has {`$n$`} characteristic oscillations. The shapes{' '}
          {`$\\xi_1, \\ldots, \\xi_n$`} are pairwise orthogonal, but measured by the kinetic matrix{' '}
          {`$A$`} rather than the ordinary dot product. You scale each shape so that it is also unit
          length under that same measure:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\xi_i^{\\mathsf{T}} A\\, \\xi_j = \\delta_{ij}$$`}</span>
        </div>

        <p>
          The symbol {`$\\delta_{ij}$`} is 1 when {`$i = j$`} and 0 otherwise. So the rule says: any
          two different mode shapes give zero ({`$A$`}-orthogonal), and each shape with itself gives
          one ({`$A$`}-normalized). To enforce it, divide each {`$\\xi_i$`} by{' '}
          {`$\\sqrt{\\xi_i^{\\mathsf{T}} A\\, \\xi_i}$`}, exactly as you did in the worked example.
          These {`$A$`}-orthonormal shapes are what build the normal coordinates cleanly.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY ORTHOGONAL?</span>
          <p>
            In principal coordinates each mode is its own axis. Different axes are orthogonal by
            construction. The kinetic matrix {`$A$`} sets the inner product because it is the
            quadratic form that defines kinetic energy.
          </p>
        </div>

        <h3>When Two Frequencies Coincide</h3>

        <p>
          Sometimes two modes share the exact same frequency: {`$\\lambda_i = \\lambda_j$`}. This is{' '}
          <strong>degeneracy</strong>. A symmetric ball-and-spring frame, or any system with extra
          symmetry, can land here. You might worry that a repeated root breaks the method, the way a
          repeated root in a plain differential equation forces a growing {`$t\\sin\\omega t$`}{' '}
          term.
        </p>

        <p>
          It does not. The mass matrix {`$A$`} is always positive: kinetic energy is positive for
          any real motion. That single fact guarantees a full set of {`$A$`}-orthogonal mode shapes,
          even when frequencies repeat. So the equations still split into separate harmonic
          oscillators, and the motion stays a clean sum of bounded oscillations. No term ever grows
          with time.
        </p>

        <div className="lrn-insight">
          <p>
            Degeneracy is freedom, not failure. When {`$\\lambda_i = \\lambda_j$`}, any mix of those
            two modes is also a mode at the same frequency. You get a whole plane of valid mode
            shapes instead of one fixed direction, and you are free to pick any orthonormal pair
            inside it.
          </p>
        </div>

        <p>
          Switch between the two modes below. In mode 1 both masses move together and the middle
          spring never stretches, so the frequency is the bare {`$\\sqrt{k/m}$`}. In mode 2 they
          move apart, the middle spring fights back, and the frequency climbs to{' '}
          {`$\\sqrt{(k + 2\\kappa)/m}$`}.
        </p>

        <VizFigure aspect="auto" title="Normal Modes of Two Coupled Masses">
          <NormalModes />
        </VizFigure>
      </>,

      <>
        {/* Decomposition And Beats */}
        <h2>Decomposition into Characteristic Oscillations</h2>

        <p>
          Knowing the modes is enough. Every motion of the system, no matter the starting position
          or velocity, is a sum of modes evolving on their own. You never have to solve the coupled
          equations again.
        </p>

        <NormalModeDecomposition />

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You know all {`$n$`} normal modes of a coupled system. Can you always write any starting
            state as a sum of them?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. The {`$n$`} modes form a basis for the configuration space. Any starting position
              and velocity decompose into mode amplitudes, and each amplitude evolves independently
              from then on.
            </p>
          </details>
        </div>

        <p>Every small oscillation is a sum of normal modes. The general solution reads:</p>

        <div className="lrn-eq">
          <span>{`$$q(t) = \\text{Re} \\sum_k C_k e^{i\\omega_k t} \\xi_k$$`}</span>
        </div>

        <p>
          The sum runs over the {`$n$`} modes. Each {`$\\xi_k$`} is the mode shape, {`$\\omega_k$`}{' '}
          its frequency, and {`$C_k$`} a complex amplitude fixed by initial conditions. The "Re"
          symbol means we take the real part: the actual displacement.
        </p>

        <p>
          Even when two eigenvalues coincide, no growing terms like {`$t\\sin\\omega t$`} appear.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why is knowing {`$n$`} normal modes enough to reconstruct every possible motion?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The {`$n$`} mode shapes {`$\\xi_k$`} are linearly independent (and {`$A$`}-orthogonal,
              which is stronger). They span the full {`$n$`}-dimensional space. Any starting
              position and any starting velocity break uniquely into mode amplitudes. Each amplitude
              then evolves as its own simple harmonic motion.
            </p>
          </details>
        </div>

        <h2>Exchange of Energy: Beats</h2>

        <p>
          Push one of two weakly linked oscillators. The energy does not stay put. It drains slowly
          into the second oscillator, then drains back. This slow back-and-forth is called beating.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Two identical pendulums hang side by side, joined by a weak spring. You push one and
            leave the other at rest. What does the system do over many swings?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The energy slides from the first pendulum to the second, then back. The transfer
              repeats forever. The slower the link, the slower the exchange.
            </p>
          </details>
        </div>

        <p>
          Take two identical pendulums ({`$l_1 = l_2 = 1$`}, {`$m_1 = m_2 = 1$`}) joined by a weak
          spring of stiffness {`$\\alpha \\ll 1$`}. The natural frequencies are:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\omega_1 = 1, \\quad \\omega_2 = \\sqrt{1 + 2\\alpha}$$`}</span>
        </div>

        <p>
          The first frequency is the lone-pendulum rate. The second is slightly higher: the spring
          stretches in the out-of-phase mode and adds stiffness. Their tiny gap drives the beating.
        </p>

        <p>Start pendulum 1 with velocity {`$v$`} and pendulum 2 at rest. The motion is:</p>

        <div className="lrn-eq">
          <span>{`$$q_1 = \\frac{v}{2}\\left(\\sin t + \\frac{1}{\\omega}\\sin\\omega t\\right), \\quad q_2 = \\frac{v}{2}\\left(\\sin t - \\frac{1}{\\omega}\\sin\\omega t\\right)$$`}</span>
        </div>

        <p>
          After a time {`$T = \\frac{\\pi}{2\\varepsilon}$`}, with{' '}
          {`$\\varepsilon \\approx \\omega_2 - \\omega_1 \\approx \\alpha$`}, all the energy has
          shifted to pendulum 2. Then it shifts back. This is <strong>beating</strong>.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY DOES THIS HAPPEN?</span>
          <p>
            The two modes start in phase and drift apart, because their frequencies differ slightly.
            When fully out of phase, the in-phase and out-of-phase pieces cancel on pendulum 1 and
            add on pendulum 2: pendulum 1 holds nothing, pendulum 2 holds everything. The drift
            continues, the modes line up again, and the energy returns.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does a weaker spring (smaller {`$\\alpha$`}) make the beat period longer?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The beat period is{' '}
              {`$T = \\frac{\\pi}{\\omega_2 - \\omega_1} \\approx \\frac{\\pi}{\\alpha}$`}. A weaker
              spring means smaller {`$\\alpha$`}, so the two frequencies sit closer together. Closer
              frequencies drift out of phase more slowly, so it takes longer to build the {`$\\pi$`}{' '}
              phase gap that completes the energy transfer.
            </p>
          </details>
        </div>

        <VizFigure aspect="auto" title="Beating Oscillation">
          <BeatOscillation />
        </VizFigure>
      </>,

      <>
        {/* Forced And Damped Modes */}
        <h2>Driving and Damping the Modes</h2>

        <p>
          Real systems lose energy and get pushed. Add friction and an outside force to the coupled
          oscillator. The normal coordinates earn their keep here: the same change of coordinates
          that decoupled the free motion decouples the driven, damped motion too.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You shake a coupled system at a steady frequency {`$\\Omega$`}, sweeping it slowly up.
            How many times does the response spike, and where?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Once per mode. A system with {`$n$`} modes has {`$n$`} resonance peaks, one each time{' '}
              {`$\\Omega$`} passes a natural frequency {`$\\omega_i$`}.
            </p>
          </details>
        </div>

        <p>
          Write the equations of motion with a damping matrix {`$C$`} and a drive {`$F(t)$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$A\\ddot{q} + C\\dot{q} + Bq = F(t)$$`}</span>
        </div>

        <p>
          When the damping follows the modes (the common case, called proportional damping), the
          mode shapes still diagonalize everything. Project onto the normal coordinates{' '}
          {`$Q_i = \\hat{\\xi}_i^{\\mathsf{T}} A q$`} and the coupled set falls apart into {`$n$`}{' '}
          separate driven, damped oscillators:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\ddot{Q}_i + 2\\gamma_i \\dot{Q}_i + \\omega_i^2 Q_i = F_i(t)$$`}</span>
        </div>

        <p>
          Here {`$\\gamma_i$`} is the damping rate of mode {`$i$`} and{' '}
          {`$F_i = \\hat{\\xi}_i^{\\mathsf{T}} F$`} is how strongly the outside force pushes that
          mode. Each line is the plain one-mass damped oscillator you already know. The hard
          multi-mass problem became {`$n$`} easy single-mass problems.
        </p>

        <p>
          Drive one mode at a steady frequency {`$\\Omega$`}, so {`$F_i(t) = f_i\\cos\\Omega t$`}.
          After the start-up fades, the mode settles to a steady swing whose size is:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$|Q_i| = \\frac{f_i}{\\sqrt{(\\omega_i^2 - \\Omega^2)^2 + 4\\gamma_i^2 \\Omega^2}}$$`}</span>
        </div>

        <p>
          The response blows up as {`$\\Omega$`} nears {`$\\omega_i$`}: that is{' '}
          <strong>resonance</strong>. At {`$\\Omega = \\omega_i$`} the amplitude reaches{' '}
          {`$f_i / (2\\gamma_i\\omega_i)$`}, held finite only by the damping. Light damping means a
          tall, sharp peak; heavy damping means a low, broad one.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY ONE PEAK PER MODE?</span>
          <p>
            Each mode is its own oscillator with its own frequency {`$\\omega_i$`}. A single mode
            only cares whether the drive matches its own rhythm. As {`$\\Omega$`} sweeps up, it
            lines up with each {`$\\omega_i$`} in turn, lighting up that mode while the others stay
            quiet.
          </p>
        </div>

        <p>
          Below: a single damped mode, free to ring down. Raise {`$\\gamma$`} and the swing dies
          faster; raise {`$\\omega_0$`} and it rings quicker. This is one line of the decoupled set
          above, watched on its own.
        </p>

        <VizFigure aspect="auto" title="A Single Damped Mode">
          <SpringMassLive />
        </VizFigure>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does driving the system at one mode&apos;s frequency leave the other modes calm?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              In normal coordinates the modes do not talk to each other. The drive splits into a
              separate push {`$f_i$`} on each mode. Only the mode whose {`$\\omega_i$`} matches{' '}
              {`$\\Omega$`} sits near its resonance and grows large. The others are driven far from
              their own frequency, so their steady amplitude stays small.
            </p>
          </details>
        </div>
      </>,

      <>
        {/* Rigidity And Constraints */}
        <h2>Effect of Rigidity on Frequencies</h2>

        <p>
          Stiffen any spring in a coupled system. Every frequency rises. Not just the one you
          touched: every single one. The system gets faster across the board.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You stiffen a spring in a coupled oscillator. Do all frequencies rise? Do some fall? Is
            the effect mixed?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              All rise, none fall. Increasing rigidity raises every characteristic frequency, even
              modes that do not seem to involve the stiffened spring directly.
            </p>
          </details>
        </div>

        <p>
          A system with potential {`$U = \\frac{1}{2}(Bq, q)$`} is <strong>more rigid</strong> than
          one with {`$U' = \\frac{1}{2}(B'q, q)$`} if {`$U'(q) \\geq U(q)$`} for every {`$q$`}: it
          costs at least as much energy to displace the system in every direction.
        </p>

        <p>
          <strong>Rigidity theorem:</strong> raising rigidity raises every characteristic frequency.
          If the original frequencies in increasing order are{' '}
          {`$\\omega_1 \\leq \\cdots \\leq \\omega_n$`} and the new ones are{' '}
          {`$\\omega_1' \\leq \\cdots \\leq \\omega_n'$`}, then {`$\\omega_k' \\geq \\omega_k$`} for
          every {`$k$`}.
        </p>

        <p>
          A geometric picture helps. Picture the energy as an ellipsoid, a stretched sphere whose
          half-widths along each axis are the semi-axes {`$a_i$`}. The frequencies match the inverse
          semi-axes: {`$\\omega_i = \\frac{1}{a_i}$`}. A more rigid system has a smaller ellipsoid,
          so smaller semi-axes mean higher frequencies.
        </p>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Special Case</span>
          <p>
            A point mass inside an equilateral triangle, tied to the three vertices by identical
            springs, oscillates with the same frequency in every direction. Every direction is
            characteristic, and trajectories are ellipses.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does the symmetric three-spring arrangement make every direction a normal mode?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Three-fold symmetry forces the potential to look the same in every direction. The
              quadratic form {`$B$`} is then a constant times the identity. When {`$B = cA$`}, every
              vector is an eigenvector with the same eigenvalue, so every direction is a principal
              axis.
            </p>
          </details>
        </div>

        <h2>Effect of Constraints on Frequencies</h2>

        <p>
          Locking a degree of freedom does something different from stiffening springs. The new
          frequencies do not all shift up. They slot themselves between the old ones, one by one.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You freeze one degree of freedom in a two-mass system. Where does the remaining
            frequency sit relative to the two original frequencies?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Between them. Constraints interleave the spectrum: each new frequency sits between two
              consecutive old ones, never above the highest or below the lowest.
            </p>
          </details>
        </div>

        <p>
          Imposing one linear constraint on a system with {`$n$`} coordinates leaves {`$n - 1$`} new
          frequencies {`$\\omega_1' \\leq \\cdots \\leq \\omega_{n-1}'$`} that interlock with the
          originals:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\omega_1 \\leq \\omega_1' \\leq \\omega_2 \\leq \\omega_2' \\leq \\cdots \\leq \\omega_{n-1} \\leq \\omega_{n-1}' \\leq \\omega_n$$`}</span>
        </div>

        <p>
          Each new frequency is trapped between two old neighbors. The full spectrum stays bounded
          by the original bottom and top.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Increasing Rigidity</span>
            <p>
              All {`$n$`} frequencies rise. The number of degrees of freedom stays the same. Only
              the potential changes.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Imposing a Constraint</span>
            <p>
              Drops to {`$n - 1$`} frequencies. New ones interlace with old ones. A whole degree of
              freedom disappears.
            </p>
          </div>
        </div>

        <p>
          The geometric picture: the constraint slices the energy ellipsoid with a hyperplane
          through its center. The semi-axes of the slice interlace with those of the full ellipsoid.
        </p>
      </>
    ]
  },
  practice: [
    {
      q: 'What is the equilibrium condition for a Lagrangian system $L = T - U$?',
      a: "(1) At equilibrium $q_0$, the system satisfies $\\frac{\\partial U}{\\partial q}|_{q_0} = 0$. (2) This comes from Lagrange's equations with $\\dot{q} = 0$: the kinetic terms vanish, leaving only the potential condition. (3) A critical point of $U$ is required because any nonzero gradient of $U$ would push the system away from rest."
    },
    {
      q: 'A stone sits at the bottom of a bowl and one sits on top of a hill. Which is in equilibrium? Which is stable?',
      a: '(1) Both are in equilibrium (both are critical points of $U$). (2) The bowl bottom is a minimum of $U$, so it is Lyapunov stable. (3) The hilltop is a maximum of $U$, so it is unstable. The stability theorem states: strict local minimum of $U$ implies Lyapunov stability.'
    },
    {
      q: 'What is Lyapunov stability? How does it differ from asymptotic stability?',
      a: '(1) Lyapunov stability: with $y(t)$ the rest trajectory at equilibrium and $x(t)$ the nudged one, for any $\\varepsilon > 0$ and $T > 0$ there exists $\\delta > 0$ such that $|x(0)| < \\delta$ implies $|x(t) - y(t)| < \\varepsilon\\delta$ for $t \\in (0, T)$. (2) Asymptotic stability means trajectories actually return to $x_0$ as $t \\to \\infty$. (3) In conservative mechanical systems, Lyapunov stability at potential minima occurs but asymptotic stability never does. Energy is conserved, so the system keeps oscillating.'
    },
    {
      q: 'Explain from first principles why a potential minimum gives a stable equilibrium.',
      a: '(1) Near a minimum of $U$, energy level sets $\\{q: U(q) \\leq h\\}$ form closed surfaces surrounding $q_0$. (2) Total energy $E = T + U$ is conserved. (3) Starting with low enough energy, the system can never escape the closed energy surface. It stays trapped near $q_0$ forever.'
    },
    {
      q: 'You linearize the system $\\dot{x} = f(x)$ around $x_0 = 0$. Write the linearized equation and its solution.',
      a: '(1) Linearized equation: $\\dot{y} = Ay$, where $A = \\frac{\\partial f}{\\partial x}|_0$ is the Jacobian at equilibrium. (2) Solution: $y(t) = e^{At}y(0)$, where $e^{At} = E + At + \\frac{A^2t^2}{2!} + \\cdots$. (3) This works because we drop all nonlinear terms from the Taylor expansion of $f$ around $x_0$.'
    },
    {
      q: 'Predict what happens if you linearize a pendulum equation $\\ddot{\\theta} = -\\frac{g}{l}\\sin\\theta$ around $\\theta = 0$.',
      a: '(1) Result: $\\ddot{\\theta} = -\\frac{g}{l}\\theta$ (simple harmonic oscillator). (2) Near $\\theta = 0$, $\\sin\\theta \\approx \\theta$, so the linear approximation replaces $\\sin\\theta$ with $\\theta$. (3) The linearized frequency is $\\omega_0 = \\sqrt{\\frac{g}{l}}$.'
    },
    {
      q: 'For $T = \\frac{1}{2}a(q)\\dot{q}^2$, $U = U(q)$ with equilibrium at $q = 0$, find the small oscillation frequency.',
      a: "(1) Linearized: $T_2 = \\frac{1}{2}a(0)\\dot{q}^2$, $U_2 = \\frac{1}{2}U''(0)q^2$. (2) Equation of motion: $a(0)\\ddot{q} = -U''(0)q$. (3) Frequency: $\\omega_0^2 = \\frac{U''(0)}{a(0)} = \\frac{b}{a}$."
    },
    {
      q: 'A bead of mass 1 sits on wire $y = U(x)$ near equilibrium $x_0$. What is its small oscillation frequency?',
      a: "(1) $\\omega^2 = \\frac{\\partial^2 U}{\\partial x^2}|_{x_0}$. (2) The bead's potential energy equals its height $y = U(x)$. Near $x_0$, $U(x) \\approx U(x_0) + \\frac{1}{2}U''(x_0)(x-x_0)^2$. (3) Only the local curvature at $x_0$ matters, not the global shape of the wire."
    },
    {
      q: 'Write the characteristic equation for a multi-DOF small oscillation system with kinetic form $A$ and potential form $B$.',
      a: '(1) The characteristic equation is $\\det|B - \\lambda A| = 0$. (2) Seek solutions $q(t) = e^{i\\omega t}\\xi$: substituting gives $(B - \\lambda A)\\xi = 0$, which has a nontrivial solution only when the determinant vanishes. (3) Solutions $\\lambda_i$ give characteristic frequencies $\\omega_i = \\sqrt{\\lambda_i}$ for $\\lambda_i > 0$.'
    },
    {
      q: 'What does $\\lambda = 0$ vs. $\\lambda > 0$ vs. $\\lambda < 0$ mean for the solution in a principal coordinate $Q_i$?',
      a: '(1) $\\lambda_i > 0$: oscillation $Q_i = C_1\\cos\\omega_i t + C_2\\sin\\omega_i t$ (stable, periodic). (2) $\\lambda_i = 0$: neutral mode $Q_i = C_1 + C_2 t$ (slow drift). (3) $\\lambda_i < 0$: instability $Q_i = C_1\\cosh kt + C_2\\sinh kt$ (exponential growth). The system is stable only when all $\\lambda_i > 0$.'
    },
    {
      q: 'Two identical pendulums ($l = 1$, $m = 1$) connected by spring with spring constant $\\alpha$. Find the characteristic frequencies.',
      a: '(1) Kinetic energy: $T = \\frac{1}{2}(\\dot{q}_1^2 + \\dot{q}_2^2)$. Potential: $U = \\frac{1}{2}(q_1^2 + q_2^2 + \\alpha(q_1 - q_2)^2)$. (2) In-phase mode $Q_1 = \\frac{q_1+q_2}{\\sqrt{2}}$: spring inactive, $\\omega_1 = 1$. (3) Out-of-phase mode $Q_2 = \\frac{q_1-q_2}{\\sqrt{2}}$: spring stretches, $\\omega_2 = \\sqrt{1+2\\alpha}$.'
    },
    {
      q: 'Describe in-phase and out-of-phase normal modes of coupled identical pendulums.',
      a: '(1) In-phase mode: both pendulums swing in the same direction. The spring never stretches. Frequency $\\omega_1 = 1$. (2) Out-of-phase mode: pendulums swing in opposite directions. Spring stretches maximally. Frequency $\\omega_2 = \\sqrt{1+2\\alpha} > 1$. (3) Any motion is a superposition of these two pure modes.'
    },
    {
      q: 'Predict what happens if you give one coupled pendulum a push ($v$) while the other is at rest.',
      a: '(1) Energy transfers completely to the second pendulum after time $T = \\frac{\\pi}{2\\alpha}$, then transfers back. (2) The initial condition projects onto both normal modes equally. The two modes drift slowly in and out of phase. (3) Beat period grows as $\\alpha$ shrinks because the frequency difference $\\omega_2 - \\omega_1 \\approx \\alpha$ shrinks.'
    },
    {
      q: "What does it mean for system $B'$ to be more rigid than system $B$? How does this affect characteristic frequencies?",
      a: "(1) More rigid means $U'(q) \\geq U(q)$ for all $q$, meaning it has higher potential energy in every direction. (2) By the rigidity theorem, all characteristic frequencies increase: $\\omega_k' \\geq \\omega_k$ for all $k$. (3) More rigid system has a smaller energy ellipsoid. Smaller semi-axes mean higher frequencies ($\\omega_i = \\frac{1}{a_i}$)."
    },
    {
      q: 'What is the interleaving (separation) theorem for constraints? Write the inequality.',
      a: "(1) When one linear constraint is imposed on an $n$-DOF system, the $n-1$ new frequencies interleave: $\\omega_1 \\leq \\omega_1' \\leq \\omega_2 \\leq \\cdots \\leq \\omega_{n-1}' \\leq \\omega_n$. (2) Each new frequency is trapped between two consecutive old frequencies. (3) The constraint removes one direction of motion; the remaining spectrum stays within the original bounds."
    },
    {
      q: 'Two coupled pendulums have frequencies $\\omega_1 = 1$ and $\\omega_2 = \\sqrt{1 + 2\\alpha}$ for $\\alpha \\ll 1$. Find the beat period.',
      a: '(1) Beat period $T = \\frac{\\pi}{\\omega_2 - \\omega_1}$. (2) For small $\\alpha$: $\\omega_2 \\approx 1 + \\alpha$, so $\\omega_2 - \\omega_1 \\approx \\alpha$. (3) $T \\approx \\frac{\\pi}{\\alpha}$. As $\\alpha \\to 0$, beat period grows to infinity, so the pendulums exchange energy more and more slowly.'
    },
    {
      q: 'For $A = I$ and $B = \\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix}$, find the two characteristic frequencies and the two mode shapes.',
      a: '(1) Characteristic equation: $(2-\\lambda)^2 - 1 = 0$, so $\\lambda^2 - 4\\lambda + 3 = 0$ and $\\lambda_1 = 1$, $\\lambda_2 = 3$. The frequencies are $\\omega_1 = 1$ and $\\omega_2 = \\sqrt{3}$. (2) Mode 1 ($\\lambda = 1$): $(B - I)\\xi = 0$ gives $\\xi_1 = (1, 1)$, the in-phase mode. (3) Mode 2 ($\\lambda = 3$): $(B - 3I)\\xi = 0$ gives $\\xi_2 = (1, -1)$, the out-of-phase mode.'
    },
    {
      q: 'You have mode shapes $\\xi_1 = (1, 1)$ and $\\xi_2 = (1, -1)$ with $A = I$. $A$-normalize them and write the normal coordinates.',
      a: '(1) Each vector has $\\xi^{\\mathsf{T}} A\\, \\xi = 1^2 + 1^2 = 2$, so divide by $\\sqrt{2}$: $\\hat{\\xi}_1 = \\frac{1}{\\sqrt{2}}(1, 1)$ and $\\hat{\\xi}_2 = \\frac{1}{\\sqrt{2}}(1, -1)$. (2) Check $A$-orthogonality: $\\hat{\\xi}_1^{\\mathsf{T}} A\\, \\hat{\\xi}_2 = \\frac{1}{2}(1 - 1) = 0$. (3) Normal coordinates project the displacement onto each shape: $Q_1 = \\frac{q_1 + q_2}{\\sqrt{2}}$ and $Q_2 = \\frac{q_1 - q_2}{\\sqrt{2}}$.'
    },
    {
      q: 'A symmetric system has two modes with the same frequency ($\\lambda_1 = \\lambda_2$). Does the repeated root force a growing $t\\sin\\omega t$ term?',
      a: '(1) No. The mass matrix $A$ is positive (kinetic energy is always positive), which guarantees a full set of $A$-orthogonal mode shapes even when frequencies repeat. (2) So the equations still split into separate harmonic oscillators, and the motion stays a bounded sum of oscillations. (3) The degeneracy gives freedom, not failure: any mix of the two equal-frequency modes is also a valid mode, so you get a whole plane of mode shapes to choose from.'
    },
    {
      q: 'A coupled system is driven and damped: $A\\ddot{q} + C\\dot{q} + Bq = F(t)$, with damping following the modes. What do the normal coordinates do to it?',
      a: '(1) They decouple it. Projecting onto the $A$-orthonormal mode shapes turns the coupled set into $n$ separate equations $\\ddot{Q}_i + 2\\gamma_i \\dot{Q}_i + \\omega_i^2 Q_i = F_i(t)$. (2) Each is a single damped, driven oscillator with its own frequency $\\omega_i$, damping $\\gamma_i$, and projected drive $F_i = \\hat{\\xi}_i^{\\mathsf{T}} F$. (3) The hard $n$-mass problem becomes $n$ easy one-mass problems.'
    },
    {
      q: 'A driven damped mode obeys $\\ddot{Q} + 2\\gamma\\dot{Q} + \\omega_0^2 Q = f\\cos\\Omega t$. Find the steady amplitude and where it peaks.',
      a: '(1) Steady amplitude: $|Q| = \\frac{f}{\\sqrt{(\\omega_0^2 - \\Omega^2)^2 + 4\\gamma^2\\Omega^2}}$. (2) It grows large near $\\Omega = \\omega_0$: resonance. At $\\Omega = \\omega_0$ the amplitude is $\\frac{f}{2\\gamma\\omega_0}$, held finite only by damping. (3) Light damping (small $\\gamma$) gives a tall, sharp peak; heavy damping gives a low, broad one. A system with $n$ modes shows $n$ such peaks as $\\Omega$ sweeps up.'
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Small Oscillations: Systematic Theory',
    sections: [
      <>
        <h2>Equilibrium and Stability</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Equilibrium (Lagrangian)</span>
          <div className="lrn-definition-desc">
            <p>{`$\\frac{\\partial U}{\\partial q}\\big|_{q_0} = 0$`}</p>
            <p>
              <strong>Use when:</strong> Find rest points of any natural Lagrangian system.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Equilibrium (general ODE)</span>
          <div className="lrn-definition-desc">
            <p>
              {`$f(x_0) = 0$`} for {`$\\dot{x} = f(x)$`}.
            </p>
            <p>
              <strong>Use when:</strong> Find rest points of any first-order vector field.
            </p>
          </div>
        </div>

        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Condition</th>
                <th>Stability type</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {`$q_0$`} is strict local min of {`$U$`}
                </td>
                <td>Lyapunov stable</td>
                <td>Ball at bottom of bowl</td>
              </tr>
              <tr>
                <td>
                  {`$q_0$`} is local max of {`$U$`}
                </td>
                <td>Unstable</td>
                <td>Ball on top of hill</td>
              </tr>
              <tr>
                <td>Conservative system at min of {`$U$`}</td>
                <td>Lyapunov stable, NOT asymptotically stable</td>
                <td>Pendulum at bottom (oscillates forever)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Linearization</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Linearized ODE</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\dot{y} = Ay$`}, {`$A = \\frac{\\partial f}{\\partial x}\\big|_{x_0}$`}
            </p>
            <p>
              <strong>Use when:</strong> Approximate dynamics near equilibrium for small
              displacements.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Solution of linearized system</span>
          <div className="lrn-definition-desc">
            <p>
              {`$y(t) = e^{At}y(0)$`}, {`$e^{At} = E + At + \\frac{A^2t^2}{2!} + \\cdots$`}
            </p>
            <p>
              <strong>Use when:</strong> Get exact closed-form solution to any linear ODE near
              equilibrium.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Linearized kinetic energy</span>
          <div className="lrn-definition-desc">
            <p>
              {`$T_2 = \\frac{1}{2}\\sum_{i,j} a_{ij}\\dot{q}_i\\dot{q}_j$`},{' '}
              {`$a_{ij} = a_{ij}(0)$`}
            </p>
            <p>
              <strong>Use when:</strong> Build the quadratic kinetic form of any natural system at
              equilibrium.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Linearized potential energy</span>
          <div className="lrn-definition-desc">
            <p>
              {`$U_2 = \\frac{1}{2}\\sum_{i,j} b_{ij}q_iq_j$`},{' '}
              {`$b_{ij} = \\frac{\\partial^2 U}{\\partial q_i \\partial q_j}\\big|_{q=0}$`}
            </p>
            <p>
              <strong>Use when:</strong> Build the quadratic potential form of any natural system at
              equilibrium.
            </p>
          </div>
        </div>

        <h2>Small Oscillations</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Small oscillation frequency (1D)</span>
          <div className="lrn-definition-desc">
            <p>{`$\\omega_0^2 = \\frac{b}{a} = \\frac{U''(q_0)}{a(q_0)}$`}</p>
            <p>
              <strong>Use when:</strong> Get the natural frequency of any one-DOF system near stable
              equilibrium.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Bead on wire {`$y = U(x)$`}</span>
          <div className="lrn-definition-desc">
            <p>{`$\\omega^2 = \\frac{\\partial^2 U}{\\partial x^2}\\big|_{x_0}$`}</p>
            <p>
              <strong>Use when:</strong> Compute the small-oscillation frequency of a bead on a
              smooth curved wire.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Quadratic forms (multi-DOF)</span>
          <div className="lrn-definition-desc">
            <p>
              {`$T = \\frac{1}{2}(A\\dot{q},\\dot{q})$`}, {`$U = \\frac{1}{2}(Bq,q)$`},{' '}
              {`$q \\in \\mathbb{R}^n$`}
            </p>
            <p>
              <strong>Use when:</strong> Set up small oscillations for any n-DOF system at
              equilibrium.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Characteristic equation</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\det|B - \\lambda A| = 0$`}. Eigenvalues {`$\\lambda_i$`} give frequencies{' '}
              {`$\\omega_i = \\sqrt{\\lambda_i}$`}.
            </p>
            <p>
              <strong>Use when:</strong> Find normal-mode frequencies of any coupled multi-DOF
              oscillator.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">General solution</span>
          <div className="lrn-definition-desc">
            <p>
              {`$q(t) = \\text{Re}\\sum_k C_k e^{i\\omega_k t}\\xi_k$`}: full time evolution as
              superposition of {`$n$`} normal modes.
            </p>
            <p>
              <strong>Use when:</strong> Reconstruct full motion from initial conditions using
              normal modes.
            </p>
          </div>
        </div>

        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Eigenvalue</th>
                <th>Solution type</th>
                <th>Physical meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\lambda_i > 0$`}</td>
                <td>{`$C_1\\cos\\omega_i t + C_2\\sin\\omega_i t$`}</td>
                <td>Stable oscillation at {`$\\omega_i = \\sqrt{\\lambda_i}$`}</td>
              </tr>
              <tr>
                <td>{`$\\lambda_i = 0$`}</td>
                <td>{`$C_1 + C_2 t$`}</td>
                <td>Neutral mode (slow drift)</td>
              </tr>
              <tr>
                <td>{`$\\lambda_i < 0$`}</td>
                <td>{`$C_1\\cosh k_i t + C_2\\sinh k_i t$`}</td>
                <td>Unstable (exponential growth), {`$k_i = \\sqrt{-\\lambda_i}$`}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Normal Coordinates and Forced Modes</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Generalized eigenvalue problem</span>
          <div className="lrn-definition-desc">
            <p>
              {`$B\\xi = \\lambda A\\xi$`}, solved via {`$\\det|B - \\lambda A| = 0$`}.
            </p>
            <p>
              <strong>Use when:</strong> Find the mode shapes and frequencies of any coupled
              oscillator.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">{`$A$`}-orthonormalization</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\xi_i^{\\mathsf{T}} A\\, \\xi_j = \\delta_{ij}$`}: divide each {`$\\xi_i$`} by{' '}
              {`$\\sqrt{\\xi_i^{\\mathsf{T}} A\\, \\xi_i}$`}.
            </p>
            <p>
              <strong>Use when:</strong> Scale mode shapes so they build clean normal coordinates.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Normal coordinate</span>
          <div className="lrn-definition-desc">
            <p>
              {`$Q_i = \\hat{\\xi}_i^{\\mathsf{T}} A q$`}, evolving as{' '}
              {`$\\ddot{Q}_i = -\\lambda_i Q_i$`}.
            </p>
            <p>
              <strong>Use when:</strong> Turn coupled equations into separate harmonic oscillators.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Degenerate modes</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\lambda_i = \\lambda_j$`}: any mix is still a mode. No {`$t\\sin\\omega t$`}{' '}
              growth, because {`$A$`} is positive.
            </p>
            <p>
              <strong>Use when:</strong> Handle a symmetric system with repeated frequencies.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Forced, damped mode</span>
          <div className="lrn-definition-desc">
            <p>{`$\\ddot{Q}_i + 2\\gamma_i\\dot{Q}_i + \\omega_i^2 Q_i = F_i(t)$`}</p>
            <p>
              <strong>Use when:</strong> Add drive and friction; each mode acts as one damped
              oscillator.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Steady driven amplitude</span>
          <div className="lrn-definition-desc">
            <p>
              {`$|Q_i| = \\frac{f_i}{\\sqrt{(\\omega_i^2 - \\Omega^2)^2 + 4\\gamma_i^2\\Omega^2}}$`}
            </p>
            <p>
              <strong>Use when:</strong> Find the resonance peak of a mode driven at frequency{' '}
              {`$\\Omega$`}.
            </p>
          </div>
        </div>

        <h2>Coupled Pendulums and Beats</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">
            Identical coupled pendulums ({`$l=m=1$`}, spring {`$\\alpha$`})
          </span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\omega_1 = 1$`}, {`$\\omega_2 = \\sqrt{1+2\\alpha}$`}
            </p>
            <p>
              <strong>Use when:</strong> Predict normal-mode frequencies for two identical coupled
              pendulums.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Beat period</span>
          <div className="lrn-definition-desc">
            <p>
              {`$T = \\frac{\\pi}{2\\varepsilon}$`} where{' '}
              {`$\\varepsilon \\approx \\omega_2 - \\omega_1$`}
            </p>
            <p>
              <strong>Use when:</strong> Estimate energy-exchange period between weakly coupled
              identical oscillators.
            </p>
          </div>
        </div>

        <h2>Behavior of Characteristic Frequencies</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Rigidity inequality</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\omega_k' \\geq \\omega_k$`} for all {`$k$`}. Increasing stiffness raises all
              frequencies.
            </p>
            <p>
              <strong>Use when:</strong> Predict how stiffening any spring shifts every
              characteristic frequency.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Constraint interleaving</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\omega_1 \\leq \\omega_1' \\leq \\omega_2 \\leq \\cdots \\leq \\omega_{n-1}' \\leq \\omega_n$`}{' '}
            </p>
            <p>
              <strong>Use when:</strong> Predict frequencies after locking one degree of freedom.
            </p>
          </div>
        </div>
      </>
    ]
  }
}

export default function SmallOscillationsSystematicTheory() {
  return <LearningTemplate config={config} />
}
