import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  Plot as P5,
  Axes as A5,
  Parametric as Pa5,
  Polyline as Pl5,
  Dot as D5,
  CircleSh as C5,
  Arrow as Ar5,
  Tex as T5,
  Slider as Sl5,
  DragHandle as DH5,
  PlayPause as PP5,
  OPACITY as O5,
  VizCard
} from '../../../../../components/viz/physics-viz/primitives'
import {
  useSimulation as useSim5,
  rk4Step as rk45
} from '../../../../../components/viz/physics-viz/physics-core'

function StableEquilibrium() {
  return (
    <P5 xRange={[-4, 4]} yRange={[-1, 4]} width={640} height={240}>
      <A5 />
      <Pa5 xy={t => [t, 0.5 * t * t]} t={[-3.5, 3.5]} opacity={O5.fg} />
      <Pa5 xy={t => [t, -0.4 * t * t + 3.5]} t={[-3, 3]} opacity={O5.dim} />
      <D5 x={0} y={0} r={4} />
      <D5 x={0} y={3.5} r={4} opacity={O5.dim} />
      <T5 at={[1.8, 1.2]} tex="\text{stable min}" />
      <T5 at={[1.4, 3.8]} tex="\text{unstable max}" opacity={O5.dim} />
    </P5>
  )
}

function BeatOscillation() {
  return (
    <P5 xRange={[-1, 13]} yRange={[-2.2, 2.2]} width={640} height={220}>
      <A5 />
      <Pa5
        xy={t => [t, Math.cos(t) * Math.cos(0.07 * t) * 1.8]}
        t={[0, 12.5]}
        opacity={O5.fg}
        samples={400}
      />
      <Pa5 xy={t => [t, Math.cos(0.07 * t) * 1.8]} t={[0, 12.5]} opacity={O5.dim} />
      <Pa5 xy={t => [t, -Math.cos(0.07 * t) * 1.8]} t={[0, 12.5]} opacity={O5.dim} />
      <T5 at={[6, 2.0]} tex="\text{beat envelope}" opacity={O5.dim} />
      <T5 at={[1.5, -2.0]} tex="q_1(t)" />
    </P5>
  )
}

function MathieuStability() {
  const [pt, setPt] = React.useState([1.5, 1.0])
  const N = 80
  const qMax = 4.0
  const t0 = Array.from({ length: N + 1 }, (_, i) => {
    const q = (i / N) * qMax
    return [q, (-q * q) / 2]
  })
  const t1L = Array.from({ length: N + 1 }, (_, i) => {
    const q = (i / N) * qMax
    return [q, 1 - q - (q * q) / 8]
  })
  const t1R = Array.from({ length: N + 1 }, (_, i) => {
    const q = (i / N) * qMax
    return [q, 1 + q - (q * q) / 8]
  })
  const t2L = Array.from({ length: N + 1 }, (_, i) => {
    const q = (i / N) * qMax
    return [q, 4 - (q * q) / 12]
  })
  const t2R = Array.from({ length: N + 1 }, (_, i) => {
    const q = (i / N) * qMax
    return [q, 4 + (5 * q * q) / 12]
  })
  const [q, a] = pt
  const inT0 = a < (-q * q) / 2
  const inT1 = a > 1 - q - (q * q) / 8 && a < 1 + q - (q * q) / 8
  const inT2 = a > 4 - (q * q) / 12 && a < 4 + (5 * q * q) / 12
  const unstable = inT0 || inT1 || inT2
  return (
    <P5 xRange={[0, qMax]} yRange={[-4, 6]} width={520} height={300}>
      <A5 step={1} showGrid={false} />
      <Pl5 points={t0} opacity={O5.fg} strokeWidth={1.5} />
      <Pl5 points={t1L} opacity={O5.fg} strokeWidth={1.5} />
      <Pl5 points={t1R} opacity={O5.fg} strokeWidth={1.5} />
      <Pl5 points={t2L} opacity={O5.dim} strokeWidth={1.2} />
      <Pl5 points={t2R} opacity={O5.dim} strokeWidth={1.2} />
      <DH5
        x={q}
        y={a}
        onChange={(x, y) => setPt([Math.max(0, Math.min(qMax, x)), y])}
        label="(q,a)"
      />
      <T5 at={[3.85, -0.3]} tex="q" opacity={O5.dim} dy={18} />
      <T5 at={[0.05, 5.8]} tex="a" opacity={O5.dim} />
      <T5
        at={[3.8, 5.6]}
        tex={unstable ? '\\text{unstable}' : '\\text{stable}'}
        opacity={unstable ? O5.accent : O5.fg}
        anchor="end"
        size={11}
      />
      <T5
        at={[3.8, -3.6]}
        tex="\\text{tongue boundaries: leading-order in } q"
        opacity={O5.dim}
        anchor="end"
        size={10}
      />
    </P5>
  )
}

function KapitzaEffective() {
  const [alpha, setAlpha] = React.useState(1.4)
  const U = th => -Math.cos(th) + alpha * Math.sin(th) * Math.sin(th)
  const Uplain = th => -Math.cos(th)
  return (
    <div style={{ width: '100%' }}>
      <P5 xRange={[-Math.PI - 0.3, Math.PI + 0.3]} yRange={[-1.4, 2.0]} width={520} height={260}>
        <A5 step={1} showGrid={false} showTicks={false} />
        <Pa5
          xy={t => [t, Uplain(t)]}
          t={[-Math.PI, Math.PI]}
          samples={120}
          opacity={O5.dim}
          dash="4 4"
        />
        <Pa5
          xy={t => [t, U(t)]}
          t={[-Math.PI, Math.PI]}
          samples={160}
          opacity={O5.fg}
          strokeWidth={2}
        />
        {alpha > 0.5 && <D5 x={Math.PI} y={U(Math.PI)} />}
        {alpha > 0.5 && <D5 x={-Math.PI} y={U(-Math.PI)} />}
        <D5 x={0} y={U(0)} opacity={O5.accent} />
        <T5 at={[0.05, U(0)]} tex="\theta=0" opacity={O5.accent} />
        {alpha > 0.5 && (
          <T5
            at={[Math.PI - 0.05, U(Math.PI) - 0.05]}
            tex="\theta=\pi"
            anchor="end"
            opacity={O5.fg}
            dy={20}
          />
        )}
        <T5
          at={[2.4, 1.6]}
          tex={alpha > 0.5 ? '\\text{inverted stable}' : '\\text{inverted unstable}'}
          opacity={O5.fg}
          size={11}
        />
      </P5>
      <Sl5 label="a²ω²/2gl" value={alpha} min={0} max={3} step={0.05} onChange={setAlpha} />
    </div>
  )
}

function Polhodes() {
  const [Lsq, setLsq] = React.useState(1.0)
  const I1 = 1.0,
    I2 = 2.0,
    I3 = 3.0
  const sqrtL = Math.sqrt(Lsq)
  const orbits = React.useMemo(() => {
    const Tmin = Lsq / (2 * I3),
      Tmax = Lsq / (2 * I1)
    const fracs = [0.05, 0.18, 0.34, 0.5, 0.66, 0.82, 0.95]
    const lines = []
    fracs.forEach(frac => {
      const twoT = 2 * (Tmin + frac * (Tmax - Tmin))
      const w1sq = (Lsq - I3 * twoT) / (I1 * (I1 - I3))
      const w3sq = (Lsq - I1 * twoT) / (I3 * (I3 - I1))
      let w0
      if (w1sq >= 0 && w3sq >= 0) {
        w0 = [Math.sqrt(Math.max(w1sq, 0)), 0, Math.sqrt(Math.max(w3sq, 0))]
      } else if (w1sq < 0) {
        const w2sq = (I3 * twoT - Lsq) / (I2 * (I3 - I2))
        const w3s = (Lsq - I2 * twoT) / (I3 * (I3 - I2))
        if (w2sq < 0 || w3s < 0) return
        w0 = [0, Math.sqrt(w2sq), Math.sqrt(w3s)]
      } else {
        const w1s = (Lsq - I2 * twoT) / (I1 * (I1 - I2))
        const w2s = (I1 * twoT - Lsq) / (I2 * (I1 - I2))
        if (w1s < 0 || w2s < 0) return
        w0 = [Math.sqrt(w1s), Math.sqrt(w2s), 0]
      }
      const f = (t, w) => [
        ((I2 - I3) / I1) * w[1] * w[2],
        ((I3 - I1) / I2) * w[2] * w[0],
        ((I1 - I2) / I3) * w[0] * w[1]
      ]
      const pts = []
      let w = w0.slice()
      const dt = 0.02
      for (let i = 0; i < 1200; i++) {
        pts.push([w[0], w[2]])
        w = rk45(f, 0, w, dt)
      }
      lines.push(pts)
    })
    return lines
  }, [Lsq])
  const axMax = (sqrtL / Math.sqrt(I1)) * 1.15
  return (
    <div style={{ width: '100%' }}>
      <P5 xRange={[-axMax, axMax]} yRange={[-axMax * 0.75, axMax * 0.75]} width={520} height={260}>
        <A5 step={0.5} showGrid={false} />
        {orbits.map((pts, i) => (
          <Pl5
            key={i}
            points={pts}
            opacity={i === Math.floor(orbits.length / 2) ? O5.accent : O5.fg}
            strokeWidth={i === Math.floor(orbits.length / 2) ? 1.6 : 1.1}
          />
        ))}
        <D5 x={sqrtL / Math.sqrt(I1)} y={0} />
        <D5 x={-sqrtL / Math.sqrt(I1)} y={0} />
        <D5 x={0} y={sqrtL / Math.sqrt(I3)} />
        <D5 x={0} y={-sqrtL / Math.sqrt(I3)} />
        <T5 at={[sqrtL / Math.sqrt(I1) + 0.05, 0.05]} tex="e_1" opacity={O5.fg} size={11} />
        <T5 at={[0.05, sqrtL / Math.sqrt(I3) + 0.05]} tex="e_3" opacity={O5.fg} size={11} />
        <T5
          at={[axMax - 0.05, -axMax * 0.7]}
          tex={`L^2=${Lsq.toFixed(2)},\\;I=(1,2,3)`}
          anchor="end"
          opacity={O5.dim}
          size={10}
        />
      </P5>
      <Sl5 label="L²" value={Lsq} min={0.3} max={3.0} step={0.05} onChange={setLsq} />
    </div>
  )
}

function SpringMassLive() {
  const [k, setK] = React.useState(3.5)
  const [gamma, setGamma] = React.useState(0.18)
  const [state, , ctl] = useSim5({ x: 1.4, v: 0 }, (s, dt) => {
    const f = (t, y) => [y[1], -k * k * y[0] - 2 * gamma * y[1]]
    const r = rk45(f, 0, [s.x, s.v], dt)
    return { x: r[0], v: r[1] }
  })
  const yBob = state.x
  const coils = 12
  const segs = []
  for (let i = 0; i <= coils; i++) {
    const yy = -2.2 + (i / coils) * (2.2 + yBob)
    const xx = (i % 2 === 0 ? -0.18 : 0.18) * (i > 0 && i < coils ? 1 : 0)
    segs.push([xx, yy])
  }
  return (
    <div style={{ width: '100%' }}>
      <P5 xRange={[-1.5, 1.5]} yRange={[-2.4, 2.6]} width={420} height={280}>
        <Pa5 xy={t => [-1.4 + t * 2.8, 2.2]} t={[0, 1]} opacity={O5.fg} strokeWidth={2} />
        {Array.from({ length: 7 }, (_, i) => (
          <Pa5
            key={i}
            xy={t => [-1.2 + i * 0.4 + t * 0.2, 2.2 + t * 0.18]}
            t={[0, 1]}
            opacity={O5.dim}
          />
        ))}
        <Pl5 points={segs} opacity={O5.accent} strokeWidth={1.3} />
        <D5 x={0} y={yBob - 0.32} r={11} />
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

function NormalModes() {
  const m = 1,
    k = 4,
    kappa = 3
  const omega1 = Math.sqrt(k / m)
  const omega2 = Math.sqrt((k + 2 * kappa) / m)
  const [t, setT] = React.useState(0)
  const [mode, setMode] = React.useState(0)
  React.useEffect(() => {
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
      <P5 xRange={[-0.5, 4.5]} yRange={[-2.4, 2.4]} width={520} height={260}>
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
        <D5 x={eq1} y={-0.7} r={2} opacity={O5.faint} />
        <D5 x={eq2} y={-0.7} r={2} opacity={O5.faint} />
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
  source: 'Mathematical Methods of Classical Mechanics - Arnold; Mechanics - Landau & Lifshitz',
  documentTitle: 'Oscillations (Part II) - AETHER',
  learning: {
    groupTitle: 'Part II: Lagrangian Mechanics and Variational Principles',
    category: 'Classical Mechanics',
    title: 'Oscillations (Part II)',
    subtitle:
      'Normal modes, parametric resonance, rigid body dynamics. The full Arnold and Landau & Lifshitz treatment.',
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

        <h3>Liapunov Stability</h3>

        <p>
          Not every rest point behaves the same when nudged. An equilibrium is{' '}
          <strong>Liapunov stable</strong> if small disturbances stay small forever. The formal
          condition: for any time horizon {`$T > 0$`} and any tolerance {`$\\varepsilon > 0$`}, you
          can find a starting margin {`$\\delta > 0$`} so that {`$|x(0)| < \\delta$`} forces{' '}
          {`$|x(t) - y(t)| < \\varepsilon\\delta$`} for every {`$t \\in (0, T)$`}.
        </p>

        <p>
          In plain words: pick how close you want trajectories to stay ({`$\\varepsilon$`}) and how
          long ({`$T$`}). You can always find a starting tolerance ({`$\\delta$`}) that keeps them
          inside.
        </p>

        <p>
          The key result: if {`$q_0$`} is a <strong>strict local minimum</strong> of {`$U$`}, the
          equilibrium at {`$q_0$`} is Liapunov stable.
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
            <span className="lrn-compare-title">Liapunov Stability</span>
            <p>Trajectories stay near {`$q_0$`} but do not return. The system keeps oscillating.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Asymptotic Stability</span>
            <p>Trajectories converge back to {`$q_0$`}. Conservative systems never reach this.</p>
          </div>
        </div>

        <p>
          Conservative systems (no friction) oscillate forever. They never settle back to
          equilibrium. Energy has nowhere to go.
        </p>

        <VizCard id="02.5.1" title="Potential Stability">
          <StableEquilibrium />
        </VizCard>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Note</span>
          <p>
            For analytic systems with more than two degrees of freedom, rest points that are not
            minima of {`$U$`} are likely unstable. A general proof remains open.
          </p>
        </div>
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
          the origin: set {`$y = x - x_0$`}. Then expand {`$f(x_0 + y)$`} as a Taylor series. The
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

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the constant term of the Taylor expansion of {`$f$`} around {`$x_0$`} drop out?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The constant term is {`$f(x_0)$`}. By the definition of equilibrium, {`$f(x_0) = 0$`}.
              Nothing else can cancel it. It vanishes by construction.
            </p>
          </details>
        </div>
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

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does {`$U'(0) = 0$`} guarantee no linear term in {`$U_2$`}?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The Taylor series of {`$U$`} around {`$q = 0$`} reads{' '}
              {`$U(q) = U(0) + U'(0)q + \\frac{1}{2}U''(0)q^2 + \\cdots$`}. The linear term carries
              coefficient {`$U'(0)$`}. At a rest point {`$U'(0) = 0$`}, so the linear term is gone.
            </p>
          </details>
        </div>
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

        <p>You can pick new coordinates {`$Q$`} that diagonalize both matrices at once:</p>

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
          To find the principal directions, solve the <strong>eigenvalue problem</strong>:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\det|B - \\lambda A| = 0$$`}</span>
        </div>

        <p>
          The values {`$\\lambda_1, \\ldots, \\lambda_n$`} that satisfy this equation are the{' '}
          <strong>characteristic eigenvalues</strong>. Whenever {`$\\lambda_i > 0$`}, the direction
          oscillates at frequency {`$\\omega_i = \\sqrt{\\lambda_i}$`}: a{' '}
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
          <div className="lrn-faded-phase">
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
          {`$A$`} rather than the ordinary dot product.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY ORTHOGONAL?</span>
          <p>
            In principal coordinates each mode is its own axis. Different axes are orthogonal by
            construction. The kinetic matrix {`$A$`} sets the inner product because it is the
            quadratic form that defines kinetic energy.
          </p>
        </div>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Note</span>
          <p>
            Normal modes are also called principal oscillations. In Lagrangian systems, the general
            solution carries no growing terms like {`$t\\sin\\omega t$`}, even when some{' '}
            {`$\\lambda_i$`} repeat. This is a gift of the Lagrangian structure.
          </p>
        </div>
      </>,

      <>
        {/* Decomposition And Beats */}
        <h2>Decomposition into Characteristic Oscillations</h2>

        <p>
          Knowing the modes is enough. Every motion of the system, no matter the starting position
          or velocity, is a sum of modes evolving on their own. You never have to solve the coupled
          equations again.
        </p>

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

        <VizCard id="02.5.2" title="Beating Oscillation">
          <BeatOscillation />
        </VizCard>
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
          A geometric picture helps. The frequencies match the inverse semi-axes of an energy
          ellipsoid: {`$\\omega_i = \\frac{1}{a_i}$`}. A more rigid system has a smaller ellipsoid.
          Smaller semi-axes mean higher frequencies.
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
      </>,

      <>
        {/* Parametric Resonance */}
        <h2>Parametric Resonance</h2>

        <p className="lrn-conditional">
          Use whenever a parameter of the system (length, gravity, support point) varies in time
          rather than the system being driven by an outside force.
        </p>

        <p>
          A child on a swing does not get pushed. The child stands and crouches at the right times.
          The swing length changes. The motion grows. This kind of growth is parametric resonance:
          instability driven by periodic change of a parameter, not by an external force.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A child pumps a swing by shifting weight in time with the swing. No one pushes. Can the
            swing still grow? What sets the rate of pumping that works best?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. Pumping at twice the natural swing rate makes the amplitude grow exponentially.
              This is parametric resonance: the energy comes from the work the child does against
              gravity, fed in twice per swing.
            </p>
          </details>
        </div>

        <p>The classic model is Hill's equation:</p>

        <div className="lrn-eq">
          <span>{`$$\\ddot{q} = -\\omega^2(t) q, \\quad \\omega(t + T) = \\omega(t)$$`}</span>
        </div>

        <p>
          Here {`$q$`} is the displacement, {`$\\omega^2(t)$`} is a periodically changing stiffness,
          and {`$T$`} is its period. The restoring force coefficient breathes in and out as time
          passes.
        </p>

        <p>Three physical examples:</p>
        <ol className="lrn-list">
          <li>A swing whose cord length {`$l(t)$`} varies in time.</li>
          <li>A pendulum in a gravitational field that pulses.</li>
          <li>A pendulum hung from a point that oscillates up and down.</li>
        </ol>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Ordinary Resonance</span>
            <p>
              An outside force pushes at the natural frequency {`$\\omega_0$`}. Amplitude grows
              linearly in time. Active when {`$\\omega_{drive} = \\omega_0$`}.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Parametric Resonance</span>
            <p>
              A parameter itself oscillates. Amplitude grows exponentially. Strongest at{' '}
              {`$\\omega_{parameter} = \\frac{k\\omega_0}{2}$`} for integer {`$k$`}.
            </p>
          </div>
        </div>

        <h2>Mapping at a Period and Stability</h2>

        <p className="lrn-conditional">
          Use whenever the equations themselves repeat with period {`$T$`}: stability collapses to a
          single matrix test.
        </p>

        <p>
          A periodic system replays its setup every period {`$T$`}. Whatever happens in the first
          period happens again in the second. So you only need one map: the one that takes the state
          at {`$t = 0$`} to the state at {`$t = T$`}. Stability of the whole system reduces to
          stability of this single map.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The system repeats every period {`$T$`}. Can you turn the question of long-term behavior
            into a question about a single matrix?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. The period map {`$A$`} sends {`$x(0)$`} to {`$x(T)$`}. Iterating it gives the
              state at {`$2T$`}, {`$3T$`}, and so on. Stability of the original system equals
              stability of this single linear map.
            </p>
          </details>
        </div>

        <p>
          The <strong>period map</strong> {`$A$`} sends the starting state {`$x(0)$`} to the state{' '}
          {`$x(T)$`} one period later. For Hamiltonian systems in two dimensions, {`$A$`} is linear
          and area-preserving (its determinant equals one).
        </p>

        <p>
          <strong>Stability test for area-preserving maps:</strong>
        </p>
        <ul className="lrn-list">
          <li>
            Stable if {`$|\\text{tr}A| < 2$`}: eigenvalues sit on the unit circle, like rotations.
          </li>
          <li>
            Unstable if {`$|\\text{tr}A| > 2$`}: eigenvalues are real, with one greater than 1, like
            stretching.
          </li>
        </ul>

        <p>
          The notation {`$\\text{tr}A$`} is the trace, the sum of the diagonal entries. It equals
          the sum of the eigenvalues.
        </p>

        <h3>Worked Example: Rotation vs. Hyperbolic Rotation</h3>

        <p>
          <strong>Stable case:</strong> the system {`$\\dot{x}_1 = x_2$`}, {`$\\dot{x}_2 = -x_1$`}{' '}
          describes pure rotation around the origin. After time {`$T$`}, the trace is{' '}
          {`$\\text{tr}A = 2\\cos T$`}. For most {`$T$`} this stays below 2 in absolute value.
          Trajectories are circles. The origin is stable.
        </p>

        <p>
          <strong>Unstable case:</strong> the system {`$\\dot{x}_1 = x_1$`}, {`$\\dot{x}_2 = -x_2$`}{' '}
          stretches one direction and shrinks the other. The period map is:
        </p>

        <div className="lrn-eq">
          <span>{`$$A = \\begin{pmatrix} e^T & 0 \\\\ 0 & e^{-T} \\end{pmatrix}, \\quad \\text{tr}A = e^T + e^{-T} = 2\\cosh T > 2$$`}</span>
        </div>

        <p>
          The trace exceeds 2 for any non-zero {`$T$`}. One eigenvalue is greater than 1, so
          trajectories along that direction blow up. The origin is unstable.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Both maps preserve area. One is stable, one is not. Why does preserving area not
            guarantee stability?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Area preservation only says {`$\\det A = 1$`}. The map can still stretch one direction
              by a factor {`$\\lambda > 1$`} while compressing the other by{' '}
              {`$\\frac{1}{\\lambda}$`}. Total area is preserved, but trajectories along the
              stretching direction escape to infinity. That is the hyperbolic rotation, and the
              origin is unstable in it.
            </p>
          </details>
        </div>
      </>,

      <>
        {/* Strong Stability And Inverted Pendulum */}
        <h2>Strong Stability</h2>

        <p>
          A system can be stable today and unstable tomorrow if a single parameter shifts a hair.
          Strong stability is the version that survives small jolts. Tweak the springs, the gravity,
          the damping, and the system stays stable.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A system is stable right now. You change a spring stiffness slightly. Could it tip into
            instability? What property would rule that out?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Plain stability can be fragile. Strong stability (the strict inequality{' '}
              {`$|\\text{tr}A| < 2$`}) leaves a margin: small changes shrink the margin but cannot
              cross zero, so stability survives.
            </p>
          </details>
        </div>

        <p>
          The trivial solution is <strong>strongly stable</strong> if it is stable and every nearby
          linear Hamiltonian system is also stable. The condition is robust.
        </p>

        <p>
          <strong>Theorem:</strong> if {`$|\\text{tr}A| < 2$`} with strict inequality, the trivial
          solution is strongly stable. The dangerous boundary is at {`$\\omega = \\frac{k}{2}$`} for
          integer {`$k$`}: there, any non-zero perturbation can trigger parametric resonance.
        </p>

        <p>The Mathieu equation models a weakly perturbed oscillator:</p>

        <div className="lrn-eq">
          <span>{`$$\\ddot{x} = -\\omega^2(1 + \\varepsilon a(t))x, \\quad \\varepsilon \\ll 1, \\quad a(t + 2\\pi) = a(t)$$`}</span>
        </div>

        <p>
          The displacement is {`$x$`}, the natural frequency is {`$\\omega$`}, and{' '}
          {`$\\varepsilon$`} is the small modulation strength. The function {`$a(t)$`} is a periodic
          shape with period {`$2\\pi$`} that wiggles the stiffness.
        </p>

        <p>
          Near every integer {`$k$`}, a thin instability tongue opens around{' '}
          {`$\\omega \\approx k \\pm \\frac{\\varepsilon^2}{\\omega^2} + o(\\varepsilon^2)$`}. The
          tongue is widest for {`$k = 1$`} and narrows fast for higher {`$k$`}. Friction adds a
          threshold: the modulation must exceed an amplitude {`$\\varepsilon_k$`} before resonance
          starts.
        </p>

        <h2>Stability of the Inverted Pendulum</h2>

        <p>
          A pendulum balanced upside down falls over: gravity tips it. But shake the pivot fast
          enough, vertically, and the falling stops. The pendulum stands on its head while the
          support bounces.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            An inverted pendulum normally topples. Shake its pivot up and down rapidly. Can the
            pendulum stay upright? What controls whether shaking succeeds?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. Fast enough vertical shaking stabilizes the inverted position. The required
              frequency grows with {`$\\sqrt{\\frac{l}{a}}$`}: longer pendulum or smaller amplitude
              makes the job harder.
            </p>
          </details>
        </div>

        <p>
          A pendulum with pivot vibrating vertically at frequency {`$N$`} and amplitude {`$a$`} can
          balance upside down. The practical stability condition is:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$N \\geq 0.22 \\sqrt{\\frac{l}{a}} \\cdot \\omega_0$$`}</span>
        </div>

        <p>
          Here {`$N$`} is the shake frequency, {`$l$`} is the pendulum length, {`$a$`} is the shake
          amplitude, and {`$\\omega_0 = \\sqrt{\\frac{g}{l}}$`} is the natural frequency in the
          upright position.
        </p>

        <p>
          <strong>Worked example.</strong> Let {`$l = 20\\text{ cm}$`}, {`$a = 1\\text{ cm}$`}, and{' '}
          {`$g = 980\\text{ cm/s}^2$`}.
        </p>
        <ol className="lrn-list">
          <li>Natural frequency: {`$\\omega_0 = \\sqrt{\\frac{980}{20}} \\approx 7$`} rad/s.</li>
          <li>Length-to-amplitude ratio: {`$\\sqrt{\\frac{l}{a}} = \\sqrt{20} \\approx 4.47$`}.</li>
          <li>
            Plug into the threshold: {`$N \\geq 0.22 \\times 4.47 \\times 7 \\approx 6.9$`} rad/s.
          </li>
          <li>Convert: about 31 cycles per second of vertical pivot shake.</li>
        </ol>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does a larger ratio {`$\\frac{l}{a}$`} demand a higher shake frequency for
            stability?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              A longer pendulum ({`$l$`} large) has more gravitational torque trying to tip it. A
              smaller amplitude ({`$a$`} small) gives each shake less stabilizing effect. Both push
              the same way: {`$N \\propto \\sqrt{\\frac{l}{a}}$`} must grow to balance the books.
            </p>
          </details>
        </div>
      </>,

      <>
        {/* Moving Coordinate Systems */}
        <h2>Moving Coordinate Systems and Velocity Addition</h2>

        <p>
          A ball thrown on a moving train looks one way to a passenger and another to someone on the
          platform. Both descriptions are correct. The rule for converting between them is older
          than physics: add the train's speed.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A ball rolls across a turntable. You stand still on the floor. How does the ball's
            velocity look to you, compared to how it looks to someone standing on the turntable?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              You see the ball's velocity in the turntable frame plus the velocity that the
              turntable itself carries at the ball's location. The two add.
            </p>
          </details>
        </div>

        <p>
          Any motion {`$D_t$`} of a frame breaks into two pieces: a rotation {`$B_t$`} composed with
          a translation {`$C_t$`}. The origin of the moving frame {`$K$`} traces out a path{' '}
          {`$r(t)$`} in the lab frame.
        </p>

        <p>
          <strong>Velocity addition (translation only):</strong>
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$v = v' + v_0$$`}</span>
        </div>

        <p>
          Here {`$v$`} is the absolute velocity in the lab frame, {`$v'$`} is the velocity measured
          in the moving frame, and {`$v_0$`} is the velocity of the moving frame itself. They simply
          add.
        </p>

        <p>
          <strong>Lagrangian invariance:</strong> a trajectory that satisfies Lagrange's equations
          in lab coordinates also satisfies them in moving-frame coordinates. You can switch frames
          freely; the equations of motion follow you.
        </p>

        <h2>Angular Velocity</h2>

        <p>
          A rigid body spinning in space has every point moving differently. Yet at any single
          instant, all that motion comes from one axis and one rate of spin. The angular velocity
          vector packs both into a single arrow.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A rigid body rotates. Every point traces a different path. Can a single vector capture
            the rotation of the whole body at one instant?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. The angular velocity vector {`$\\omega$`} points along the rotation axis, and its
              length gives the spin rate. Every point {`$q$`} in the body moves at velocity{' '}
              {`$\\dot{q} = [\\omega, q]$`}: the cross product of axis and position.
            </p>
          </details>
        </div>

        <p>
          Every rigid rotation, at every instant, points along one axis. The angular velocity vector
          picks out that axis and how fast you spin around it. Points on the axis stand still.
          Points far from the axis move fastest.
        </p>

        <p>
          For a body whose orientation is the rotation matrix {`$B_t$`}, define{' '}
          {`$A = \\dot{B}B^{-1}$`}. This operator is skew-symmetric: {`$A^T + A = 0$`}, meaning the
          matrix and its transpose sum to zero. Skew-symmetric operators in three dimensions are in
          one-to-one match with vectors via the cross product: {`$Aq = [\\omega, q]$`} for a unique{' '}
          {`$\\omega$`}.
        </p>

        <p>
          <strong>Theorem:</strong> at every moment {`$t$`}, a vector {`$\\omega(t)$`} exists so
          that the velocity of every body point {`$q$`} is:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\dot{q} = [\\omega, q]$$`}</span>
        </div>

        <p>
          The brackets denote the cross product. The body rotates about the instantaneous axis (the
          direction of {`$\\omega$`}). Points on the axis have zero velocity. In body-frame
          coordinates the angular velocity is {`$\\Omega = B^{-1}\\omega$`}: the same physical spin,
          read in the body's own basis.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the skew-symmetry of {`$\\dot{B}B^{-1}$`} guarantee a single angular velocity
            vector in three dimensions?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              A skew-symmetric {`$3 \\times 3$`} matrix has three independent entries. The cross
              product map {`$[\\omega, \\cdot]$`} is also skew-symmetric and has three free
              components ({`$\\omega_1, \\omega_2, \\omega_3$`}). The match is one-to-one. In Lie
              algebra terms, {`$\\mathfrak{so}(3) \\cong \\mathbb{R}^3$`}: the algebra of
              three-by-three skew matrices is the same as ordinary three-vectors.
            </p>
          </details>
        </div>
      </>,

      <>
        {/* Inertial Forces */}
        <h2>Inertial Forces in Non-Inertial Frames</h2>

        <p className="lrn-conditional">
          Use whenever you choose to work in a frame that accelerates or rotates: extra forces
          appear that do not exist in the lab.
        </p>

        <p>
          Newton's law assumes you stand in a frame that does not accelerate. Step into an
          accelerating car or onto a turntable, and the law breaks unless you add fake forces. They
          are not real. They are bookkeeping for the fact that your frame is moving.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You sit in an accelerating car. You feel pressed into the seat. Is this a real force? If
            the car also spins, what new forces appear?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              It is a fake (inertial) force, not a real one. A spinning car adds two more: the
              Coriolis force (active only when you move inside the car) and the centrifugal force
              (always present, pulling you outward).
            </p>
          </details>
        </div>

        <h3>Translating Frames</h3>

        <p>
          If the frame accelerates with {`$\\ddot{r}(t)$`} but does not rotate, only one fake force
          appears:
        </p>

        <div className="lrn-eq">
          <span>{`$$F_{\\text{inertial}} = -m\\ddot{r}$$`}</span>
        </div>

        <p>
          The mass is {`$m$`}, and {`$\\ddot{r}$`} is the frame's acceleration in the lab. The minus
          sign points the inertial force opposite the frame's acceleration: an accelerating car
          pushes you backward against the seat.
        </p>

        <h3>Rotating Frames</h3>

        <p>
          In a frame rotating with angular velocity {`$\\Omega$`}, three fake forces show up at
          once:
        </p>

        <div className="lrn-eq">
          <span>{`$$m\\ddot{Q} = F - m[\\dot{\\Omega}, Q] - 2m[\\Omega, \\dot{Q}] - m[\\Omega, [\\Omega, Q]]$$`}</span>
        </div>

        <p>
          Here {`$Q$`} is position in the rotating frame, {`$\\dot{Q}$`} is velocity in that frame,
          {`$\\Omega$`} is the spin rate, and {`$F$`} is the real applied force. The bracket{' '}
          {`$[\\cdot,\\cdot]$`} is the cross product.
        </p>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Force due to angular acceleration</span>
          <div className="lrn-definition-desc">
            <p>
              {`$m[\\dot{\\Omega}, Q]$`}: comes from {`$\\Omega$`} itself changing in time. Vanishes
              when the spin is steady. Active only when the rotation rate speeds up or slows down.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Coriolis Force</span>
          <div className="lrn-definition-desc">
            <p>
              {`$2m[\\Omega, \\dot{Q}]$`}: the price of moving inside a rotating frame. Vanishes for
              anything at rest in the frame. Walk on a turntable and it deflects you.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Centrifugal Force</span>
          <div className="lrn-definition-desc">
            <p>
              {`$m[\\Omega, [\\Omega, Q]]$`}: the price of being in a rotating frame at all, moving
              or not. Magnitude {`$|\\Omega|^2 r$`}, pointing outward from the spin axis.
            </p>
          </div>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Coriolis Force</span>
            <p>
              Depends on velocity. Zero for a body at rest in the frame. Deflects moving bodies to
              the right in the northern hemisphere.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Centrifugal Force</span>
            <p>
              Depends only on position. Always present. Magnitude {`$|\\Omega|^2 r$`} pointing
              outward from the rotation axis.
            </p>
          </div>
        </div>

        <h3>Coriolis Effects on Earth</h3>

        <p>
          In the northern hemisphere the Coriolis force deflects moving bodies to the right. Falling
          bodies deflect eastward.
        </p>
        <ul className="lrn-list">
          <li>
            <strong>Mine shaft example:</strong> a stone dropped into a 250 m shaft at the latitude
            of Leningrad lands about 4 cm east of straight down.
          </li>
          <li>
            <strong>Foucault pendulum:</strong> the swing plane rotates at rate {`$-\\Omega_z$`},
            where {`$\\Omega_z = |\\Omega|\\sin\\lambda$`} is the vertical component of Earth's
            rotation at latitude {`$\\lambda$`}.
          </li>
          <li>
            <strong>River banks:</strong> the deflection becomes important above roughly 10 km of
            travel. The Volga erodes its right bank because of it.
          </li>
        </ul>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the Coriolis force vanish for a body at rest in a rotating frame, while
            centrifugal force does not?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The Coriolis force is {`$2m[\\Omega, \\dot{Q}]$`}: zero whenever {`$\\dot{Q} = 0$`}.
              The centrifugal force is {`$m[\\Omega, [\\Omega, Q]]$`}: it depends on position{' '}
              {`$Q$`} only, never on velocity. A stationary mass off the rotation axis still feels
              it pulling outward.
            </p>
          </details>
        </div>
      </>,

      <>
        {/* Configuration Space And Inertia Tensor */}
        <h2>Configuration Space of a Rigid Body</h2>

        <p>
          A rigid body keeps its shape. Every pair of points stays the same distance apart forever.
          To pin one down in space you need its position and its orientation. Six numbers do the
          job.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            How many independent numbers describe the position and orientation of a rigid body in
            space?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Six. Three pin down the center of mass. Three more set the orientation. Adding more
              numbers gives no new information once the body is rigid.
            </p>
          </details>
        </div>

        <p>
          A <strong>rigid body</strong> freezes every pairwise distance:{' '}
          {`$|x_i - x_j| = r_{ij} = \\text{const}$`}. Every {`$x_i$`} is the position of one body
          point and {`$r_{ij}$`} is the fixed distance between points {`$i$`} and {`$j$`}.
        </p>

        <p>
          <strong>Theorem:</strong> the configuration space of a free rigid body is{' '}
          {`$\\mathbb{R}^3 \\times SO(3)$`}, a six-dimensional manifold. The first factor holds the
          center of mass position; the second factor {`$SO(3)$`} holds the orientation.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY SO(3)?</span>
          <p>
            {`$SO(3)$`} is the group of rotation matrices: {`$3 \\times 3$`} orthogonal matrices
            with determinant {`$+1$`}. Three body points that do not lie on a line fix the
            orientation. Once those three sit in space, every other body point is locked by the
            distance constraints.
          </p>
        </div>

        <p>
          When a rigid body is pinned at a <strong>fixed point</strong> {`$O$`}, the configuration
          space shrinks to {`$SO(3)$`}: only orientation is free. Without external forces, four
          quantities are conserved: the three components of angular momentum {`$M_x, M_y, M_z$`}
          and the energy {`$E$`}.
        </p>

        <h2>The Inertia Tensor</h2>

        <p>
          For ordinary motion, mass alone tells you everything. For rotation, mass is not enough.
          You need to know how mass spreads out around the rotation axis. The inertia tensor packs
          that information into one symmetric matrix.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You know the angular velocity {`$\\Omega$`} of a rigid body. Can a single linear
            operation give you the angular momentum {`$M$`}?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. The inertia operator {`$A$`} sends angular velocity to angular momentum:{' '}
              {`$M = A\\Omega$`}. The two vectors are not generally parallel: {`$A$`} can twist the
              direction.
            </p>
          </details>
        </div>

        <p>
          The <strong>inertia operator</strong> {`$A$`} is a symmetric linear map from angular
          velocity to angular momentum:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$M = A\\Omega$$`}</span>
        </div>

        <p>
          The vector {`$\\Omega$`} is the spin (axis and rate). The vector {`$M$`} is the angular
          momentum. The operator {`$A$`} is "symmetric" because the kinetic energy formula it builds
          is the same when you swap inputs.
        </p>

        <p>The kinetic energy of a rotating body is:</p>

        <div className="lrn-eq">
          <span>{`$$T = \\frac{1}{2}(A\\Omega, \\Omega) = \\frac{1}{2}(M, \\Omega)$$`}</span>
        </div>

        <p>
          The notation {`$(u, v)$`} is the dot product. Both forms are equivalent: the second uses
          {`$M = A\\Omega$`} to fold {`$A$`} into {`$M$`}.
        </p>

        <p>In principal axes the inertia operator becomes diagonal:</p>

        <div className="lrn-eq">
          <span>{`$$M_i = I_i \\Omega_i, \\quad T = \\frac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2)$$`}</span>
        </div>

        <p>
          The numbers {`$I_1, I_2, I_3$`} are the principal moments of inertia: the
          mass-distribution stiffness along each principal axis. Each {`$\\Omega_i$`} is the spin
          component along axis {`$i$`}.
        </p>
      </>,

      <>
        {/* Principal Axes And Inertia Ellipsoid */}
        <h2>Principal Axes and the Inertia Ellipsoid</h2>

        <p>
          Most rotation axes are awkward: angular momentum and angular velocity point different
          ways. Three special axes line them up. Spin about one of these and the math becomes
          scalar: angular momentum equals a number times the angular velocity.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A rigid body has a symmetric inertia tensor. Are there special axes where angular
            momentum and angular velocity point the same way?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. They are the principal axes: eigenvectors of the inertia operator. Along a
              principal axis, {`$M = I_i \\Omega$`} with {`$M$`} parallel to {`$\\Omega$`}.
            </p>
          </details>
        </div>

        <p>
          The <strong>principal axes</strong> {`$e_1, e_2, e_3$`} are the eigenvectors of the
          inertia operator {`$A$`}. Along these axes:
        </p>

        <div className="lrn-eq">
          <span>{`$$Ae_i = I_i e_i \\implies M = I_i\\Omega \\text{ (when rotating about } e_i\\text{)}$$`}</span>
        </div>

        <p>
          The eigenvalue {`$I_i$`} is the moment of inertia about axis {`$e_i$`}. For rotation along
          that axis, angular momentum is just the moment times the angular velocity, and the two
          vectors stay parallel.
        </p>

        <p>For any axis {`$e$`}, the moment of inertia is:</p>
        <div className="lrn-eq">
          <span>{`$$I_e = \\sum_i m_i r_i^2 = \\iiint \\rho(Q) r^2(Q)\\, dQ$$`}</span>
        </div>

        <p>
          Each {`$m_i$`} is the mass of body point {`$i$`} and {`$r_i$`} its perpendicular distance
          from the axis. The continuous version replaces the sum with an integral: {`$\\rho(Q)$`} is
          mass density at point {`$Q$`}, and {`$r(Q)$`} the distance from {`$Q$`} to the axis.
        </p>

        <p>
          The <strong>inertia ellipsoid</strong> is the set:
        </p>
        <div className="lrn-eq">
          <span>{`$$\\{(A\\Omega, \\Omega) = 1\\} \\subset K$$`}</span>
        </div>
        <p>
          It lives in the body frame {`$K$`}. Its semi-axis along {`$e_i$`} has length{' '}
          {`$\\frac{1}{\\sqrt{I_i}}$`}. A larger moment of inertia gives a shorter semi-axis: more
          mass-far-from-axis means the ellipsoid is squeezed in that direction.
        </p>

        <h3>Worked Example: Uniform Planar Plate</h3>

        <p>
          For a uniform rectangular plate with {`$|x| \\leq a$`} and {`$|y| \\leq b$`}, the
          principal moments are:
        </p>

        <div className="lrn-eq">
          <span>{`$$I_x = \\frac{ma^2}{3}, \\quad I_y = \\frac{mb^2}{3}, \\quad I_z = I_x + I_y = \\frac{m(a^2 + b^2)}{3}$$`}</span>
        </div>

        <p>
          The total mass is {`$m$`}. The relation {`$I_z = I_x + I_y$`} is the{' '}
          <strong>perpendicular axis theorem</strong>: it holds for any planar object.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why is {`$I_z = I_x + I_y$`} for a flat object but not for a solid one?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              For a flat body in the {`$xy$`}-plane, every mass element has {`$z = 0$`}. So{' '}
              {`$I_x = \\sum m_i y_i^2$`} and {`$I_y = \\sum m_i x_i^2$`}. Adding gives{' '}
              {`$I_x + I_y = \\sum m_i(x_i^2 + y_i^2) = I_z$`}. For solid bodies, mass elements
              carry non-zero {`$z_i$`}, and the sum picks up extra {`$z_i^2$`} terms that break the
              equality.
            </p>
          </details>
        </div>

        <h3>Steiner's Theorem (Parallel Axis Theorem)</h3>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$I = I_0 + mr^2$$`}</span>
        </div>

        <p>
          The number {`$I$`} is the moment about an axis offset from the center of mass. {`$I_0$`}{' '}
          is the moment about a parallel axis through the center of mass. {`$m$`} is the total mass,
          and {`$r$`} is the perpendicular distance between the two axes. Shifting away from the
          center of mass always raises the moment of inertia.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does Steiner's theorem always raise the moment of inertia when you shift away from
            the center of mass?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The term {`$mr^2$`} is non-negative for any {`$r$`}. The center of mass is the body's
              balance point: it minimizes {`$\\sum m_i r_i^2$`}. Moving the axis away from it raises
              the average squared distance, so the moment must grow.
            </p>
          </details>
        </div>
      </>,

      <>
        {/* Euler's Equations */}
        <h2>Euler's Equations of Motion</h2>

        <p>
          A rigid body floating in space with no torque keeps its angular momentum fixed in the lab.
          Inside the body frame, where the body itself is at rest, the angular momentum drifts
          around. The drift is governed by three equations Euler wrote down.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A rigid body tumbles in empty space, no forces acting. Its angular momentum is fixed in
            the lab. What happens to the angular velocity in the body's own frame?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              In the body frame, both {`$M$`} and {`$\\Omega$`} change with time, even with no
              external torque. The body itself rotates, so what looks fixed in the lab traces a
              curve on the inertia ellipsoid in the body frame.
            </p>
          </details>
        </div>

        <p>
          In the lab frame, angular momentum {`$\\mathbf{m}$`} is conserved. In the body frame, the
          equivalent statement reads:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\frac{dM}{dt} = [M, \\Omega]$$`}</span>
        </div>

        <p>
          The vector {`$M$`} is angular momentum in body coordinates, {`$\\Omega$`} is angular
          velocity in body coordinates, and the brackets are the cross product. The right side
          captures how the body axes themselves rotate underneath {`$M$`}.
        </p>

        <p>
          Spelled out along principal axes, these are the <strong>Euler equations</strong>:
        </p>

        <div className="lrn-eq">
          <span>{`$$I_1 \\frac{d\\Omega_1}{dt} = (I_2 - I_3)\\Omega_2\\Omega_3$$`}</span>
          <span>{`$$I_2 \\frac{d\\Omega_2}{dt} = (I_3 - I_1)\\Omega_3\\Omega_1$$`}</span>
          <span>{`$$I_3 \\frac{d\\Omega_3}{dt} = (I_1 - I_2)\\Omega_1\\Omega_2$$`}</span>
        </div>

        <p>
          Each equation tracks one component of {`$\\Omega$`} along a principal axis. The right side
          couples the other two components: changes in one direction feed off the other two. This
          non-linear coupling is what makes free rotation interesting.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">HOW ARE THEY DERIVED?</span>
          <p>
            Start with {`$\\frac{d\\mathbf{m}}{dt} = 0$`} in the lab frame. Write{' '}
            {`$\\mathbf{m} = BM$`}, where {`$B$`} is the rotation matrix linking body to lab.
            Differentiate: {`$\\dot{B}M + B\\dot{M} = 0$`}. Use {`$\\dot{B} = [\\omega, \\cdot] B$`}
            and project back into body axes. The result is {`$\\frac{dM}{dt} = [M, \\Omega]$`}.
          </p>
        </div>

        <p>
          <strong>Two conserved quantities</strong> (first integrals):
        </p>

        <div className="lrn-eq">
          <span>{`$$2E = \\frac{M_1^2}{I_1} + \\frac{M_2^2}{I_2} + \\frac{M_3^2}{I_3}, \\quad M^2 = M_1^2 + M_2^2 + M_3^2$$`}</span>
        </div>

        <p>
          The first is twice the rotational kinetic energy. The second is the squared length of the
          angular momentum vector. Both are constant in time.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Lab frame {`$k$`}</span>
            <p>
              Angular momentum {`$\\mathbf{m} = BM$`} is constant. The conservation law is direct.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Body frame {`$K$`}</span>
            <p>
              Both {`$M$`} and {`$\\Omega$`} change. Euler's equations are simpler here because the
              inertia tensor is diagonal in principal axes.
            </p>
          </div>
        </div>

        <h2>Solutions of Euler's Equations</h2>

        <p>
          The two conservation laws constrain the motion to one-dimensional curves in body-frame
          {`$M$`}-space. Whether free rotation about a chosen axis is stable or not is decided by
          the shape of those curves.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            The angular momentum vector has fixed length and fixed energy. What geometric shape
            traces its motion?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              {`$M$`} moves along the intersection of two surfaces: an ellipsoid (constant energy)
              and a sphere (constant {`$|M|$`}). The intersection is a closed curve in three
              dimensions.
            </p>
          </details>
        </div>

        <p>The two conserved quantities define two surfaces in {`$(M_1, M_2, M_3)$`}-space:</p>
        <ul className="lrn-list">
          <li>
            The <strong>energy ellipsoid</strong>:{' '}
            {`$\\frac{M_1^2}{I_1} + \\frac{M_2^2}{I_2} + \\frac{M_3^2}{I_3} = 2E$`}.
          </li>
          <li>
            The <strong>angular momentum sphere</strong>: {`$M_1^2 + M_2^2 + M_3^2 = M^2$`}.
          </li>
        </ul>

        <p>
          The vector {`$M$`} is trapped on both surfaces, so it lives on their intersection: a
          closed curve.
        </p>

        <p>
          <strong>Stability of steady rotation:</strong> rotation about the largest-moment axis{' '}
          {`$e_1$`} is stable. Rotation about the smallest-moment axis {`$e_3$`} is stable. Rotation
          about the middle axis {`$e_2$`} is <strong>unstable</strong>.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THE MIDDLE AXIS UNSTABLE?</span>
          <p>
            Linearize Euler's equations near {`$\\Omega_2 = \\Omega_0$`} with the other components
            tiny. The first and third equations couple to give{' '}
            {`$\\ddot{\\Omega}_1 = \\frac{(I_3 - I_2)(I_2 - I_1)}{I_1 I_3}\\Omega_0^2 \\Omega_1$`}.
            Both factors are positive (since {`$I_3 > I_2 > I_1$`}), so the right side has a
            positive coefficient. The solution grows as {`$e^{\\sigma t}$`}. Near {`$e_1$`} or{' '}
            {`$e_3$`}, one factor flips sign, the coefficient turns negative, and you get
            oscillation instead.
          </p>
        </div>

        <p>
          This is the <strong>tennis racket theorem</strong>. Toss a book spinning about its
          intermediate axis: it flips unpredictably mid-air. About the longest or shortest axis it
          spins clean.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why do two conservation laws reduce the motion to curves on a two-dimensional surface,
            and then to curves of one dimension?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The {`$M$`}-space is three-dimensional. Each conservation law cuts one dimension. The
              first carves out a two-dimensional surface (the ellipsoid). The second carves another
              (the sphere). The intersection of two two-dimensional surfaces in three-dimensional
              space is a one-dimensional curve. The motion runs along it.
            </p>
          </details>
        </div>
      </>,

      <>
        {/* Poinsot And Euler Angles */}
        <h2>Poinsot's Description of the Motion</h2>

        <p>
          A torque-free rigid body has a beautiful geometric picture. The inertia ellipsoid, drawn
          in the body, rolls on a fixed plane in space. No equations, just a shape rolling on a
          plane.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Could the body's own inertia ellipsoid roll on a fixed plane in space, in such a way
            that the rolling traces out the actual motion?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes, exactly. The plane sits perpendicular to the conserved angular momentum vector
              and never moves. The inertia ellipsoid rolls on it without slipping.
            </p>
          </details>
        </div>

        <p>
          <strong>Poinsot's theorem:</strong> for free motion of a rigid body fixed at a point{' '}
          {`$O$`}, the inertia ellipsoid rolls without slipping on the{' '}
          <strong>invariable plane</strong> {`$\\pi$`}. The plane sits perpendicular to the angular
          momentum vector and never moves.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY DOES IT ROLL WITHOUT SLIPPING?</span>
          <p>
            The contact point between ellipsoid and plane is the tip of {`$\\Omega$`} projected to
            the ellipsoid surface. That point lies on the instantaneous rotation axis, so it has
            zero velocity. Rolling without slipping means the contact point has zero velocity. Both
            conditions match, so the rolling picture is exact.
          </p>
        </div>

        <p>
          For the <strong>symmetric top</strong> ({`$I_1 = I_2 \\neq I_3$`}), the symmetry axis
          sweeps out a cone in space (precession) while the ellipsoid rolls. If the two frequencies
          (rolling rate and spin rate) are not rationally related, the axis never returns exactly to
          its start. The motion is quasi-periodic.
        </p>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Herpolhode</span>
          <div className="lrn-definition-desc">
            <p>The curve traced by the contact point on the invariable plane (fixed in space).</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Polhode</span>
          <div className="lrn-definition-desc">
            <p>
              The curve traced by the contact point on the inertia ellipsoid (fixed in the body).
            </p>
          </div>
        </div>

        <h2>Euler Angles</h2>

        <p>
          Three angles describe every possible orientation in three dimensions. Tilt the body, swing
          the tilted axis around, then spin it on itself. Three numbers, one for each motion.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You want three angles that can reach any orientation. Which three rotations, applied one
            after another, can do the job?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Precession about the vertical axis, nutation (tilt of the body's axis from vertical),
              and spin about the body's own axis. Together they cover every orientation.
            </p>
          </details>
        </div>

        <p>
          <strong>Euler angles</strong> {`$(\\varphi, \\theta, \\psi)$`} are local coordinates on{' '}
          {`$SO(3)$`}. Each one names one stage of a three-step rotation:
        </p>

        <div className="lrn-definition">
          <span className="lrn-definition-term">{`$\\varphi \\in (0, 2\\pi)$`}</span>
          <div className="lrn-definition-desc">
            <p>Precession angle: rotation about the lab {`$z$`}-axis.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">{`$\\theta \\in (0, \\pi)$`}</span>
          <div className="lrn-definition-desc">
            <p>Nutation angle: tilt of the body's symmetry axis away from the vertical.</p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">{`$\\psi \\in (0, 2\\pi)$`}</span>
          <div className="lrn-definition-desc">
            <p>Spin angle: rotation of the body about its own symmetry axis.</p>
          </div>
        </div>

        <p>
          At {`$\\theta = 0$`} and {`$\\theta = \\pi$`}, the body axis lines up with the lab axis.
          The angles {`$\\varphi$`} and {`$\\psi$`} then describe the same rotation. This is gimbal
          lock: the coordinate chart fails, and you need a different chart to continue.
        </p>

        <p>
          <strong>Angular velocity in Euler angles</strong> (evaluated at {`$\\varphi = \\psi = 0$`}
          ):
        </p>

        <div className="lrn-eq">
          <span>{`$$\\omega = \\dot{\\theta}e_1 + (\\dot{\\varphi}\\sin\\theta)e_2 + (\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)e_3$$`}</span>
        </div>

        <p>
          Each term is one body-axis component. Tilting at rate {`$\\dot{\\theta}$`} contributes to{' '}
          {`$e_1$`}. Precessing at rate {`$\\dot{\\varphi}$`} splits between {`$e_2$`} (the
          horizontal part, scaled by {`$\\sin\\theta$`}) and {`$e_3$`} (the vertical part, scaled by{' '}
          {`$\\cos\\theta$`}). Spinning at rate {`$\\dot{\\psi}$`} adds directly to {`$e_3$`}.
        </p>
      </>,

      <>
        {/* Lagrange's Top */}
        <h2>Lagrange's Top</h2>

        <p>
          A spinning top has three motions you can see at once: it spins on itself, it nods up and
          down, and it sweeps around the vertical. Three coordinates, three motions. But two of them
          are conserved, so the whole problem collapses to one variable.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A spinning top spins, tilts, and sweeps around the vertical. Can you collapse this
            three-coordinate problem to one variable? What lets you?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Yes. Two coordinates ({`$\\varphi$`} and {`$\\psi$`}) do not appear in the Lagrangian.
              Each gives one constant of motion. Those two constants kill two degrees of freedom,
              leaving only {`$\\theta$`}.
            </p>
          </details>
        </div>

        <p>
          A <strong>symmetric top</strong> (Lagrange's top) has {`$I_1 = I_2 \\neq I_3$`}, sits
          fixed at point {`$O$`}, and has its center of mass on the symmetry axis at distance{' '}
          {`$l$`} from {`$O$`}.
        </p>

        <p>
          <strong>The Lagrangian</strong> in Euler angles is:
        </p>

        <div className="lrn-eq">
          <span>{`$$L = \\frac{I_1}{2}(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\theta) + \\frac{I_3}{2}(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)^2 - mgl\\cos\\theta$$`}</span>
        </div>

        <p>
          The first bracket is the kinetic energy from tilting and precessing. The second bracket is
          the kinetic energy of spinning about the symmetry axis. The last term is gravitational
          potential energy: a top tilted to angle {`$\\theta$`} has its center of mass at height{' '}
          {`$l\\cos\\theta$`}.
        </p>

        <p>
          <strong>Cyclic coordinates:</strong> {`$\\varphi$`} and {`$\\psi$`} do not appear
          explicitly in {`$L$`}. Their conjugate momenta are conserved:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\frac{\\partial L}{\\partial \\dot{\\varphi}} = M_z = \\text{const}, \\quad \\frac{\\partial L}{\\partial \\dot{\\psi}} = M_3 = \\text{const}$$`}</span>
        </div>

        <p>
          The first conserved quantity {`$M_z$`} is angular momentum about the lab vertical. The
          second {`$M_3$`} is angular momentum about the body's symmetry axis. Both stay frozen
          throughout the motion.
        </p>

        <p>
          <strong>Reduction to one degree of freedom:</strong>
        </p>

        <div className="lrn-eq">
          <span>{`$$E' = \\frac{I_1}{2}\\dot{\\theta}^2 + U_{eff}(\\theta)$$`}</span>
        </div>

        <p>
          Here {`$E'$`} is the energy left after subtracting off the conserved pieces. It looks like
          a one-dimensional particle with kinetic energy {`$\\frac{1}{2}I_1\\dot{\\theta}^2$`}{' '}
          moving in an effective potential {`$U_{eff}$`}:
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$U_{eff}(\\theta) = \\frac{(M_z - M_3\\cos\\theta)^2}{2I_1\\sin^2\\theta} + mgl\\cos\\theta$$`}</span>
        </div>

        <p>
          The first term is a centrifugal barrier from the conserved momenta. It blows up as{' '}
          {`$\\theta \\to 0$`} or {`$\\theta \\to \\pi$`}, walling off the poles. The second term is
          gravity. Their sum has a minimum somewhere in the middle, and {`$\\theta$`} oscillates
          around it.
        </p>

        <p>
          The <strong>precession rate</strong> is:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\dot{\\varphi} = \\frac{M_z - M_3\\cos\\theta}{I_1\\sin^2\\theta}$$`}</span>
        </div>

        <p>
          The numerator is the part of {`$M_z$`} not carried by the body spin. Divided by{' '}
          {`$I_1\\sin^2\\theta$`} (the moment of inertia for tilted precession), it gives the rate
          at which the axis sweeps around the vertical.
        </p>

        <p>
          <strong>Nutation</strong> is the oscillation of {`$\\theta$`} between two turning points{' '}
          {`$\\theta_1$`} and {`$\\theta_2$`}. <strong>Precession</strong> is the azimuthal motion{' '}
          {`$\\dot{\\varphi}$`} as the axis sweeps around the vertical.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why do the two cyclic coordinates ({`$\\varphi$`} and {`$\\psi$`}) collapse the top from
            a three-coordinate to a one-coordinate problem?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Each cyclic coordinate gives one constant of motion: {`$M_z$`} and {`$M_3$`}. Use the
              two constants to solve algebraically for {`$\\dot{\\varphi}$`} and {`$\\dot{\\psi}$`}{' '}
              in terms of {`$\\theta$`}. Now the only equation of motion left is for {`$\\theta$`}:
              a single one-dimensional problem in an effective potential.
            </p>
          </details>
        </div>
      </>,

      <>
        {/* Sleeping Tops And Fast Tops */}
        <h2>Sleeping Tops</h2>

        <p>
          A top can spin perfectly vertical, axis straight up, no wobble. It looks asleep. Whether
          it stays asleep or topples comes down to one number: how fast it spins.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A vertical spinning top, axis pointing straight up, no wobble. You give it a tiny nudge.
            Does it return to vertical or fall over? What controls the answer?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The spin rate decides. Fast enough and the gyroscopic effect overwhelms gravity, so
              the axis returns. Too slow, and gravity tips it past the point of no return.
            </p>
          </details>
        </div>

        <p>
          A <strong>sleeping top</strong> holds its axis vertical ({`$\\theta = 0$`}) at constant
          angular velocity.
        </p>

        <p>
          <strong>Stability condition:</strong>
        </p>

        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\omega_3^2 > \\frac{4mglI_1}{I_3^2}$$`}</span>
        </div>

        <p>
          Here {`$\\omega_3$`} is the spin rate about the symmetry axis, {`$m$`} is the mass,{' '}
          {`$g$`} is gravity, {`$l$`} is the distance from pivot to center of mass, and{' '}
          {`$I_1, I_3$`} are the principal moments. The left side measures how much rotational
          energy the spin carries. The right side measures the gravity-driven barrier height.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Stable (above threshold)</span>
            <p>
              The gyroscopic effect holds the axis vertical. The axis returns after a small nudge.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Unstable (below threshold)</span>
            <p>Gravity wins. The tilt {`$\\theta$`} grows, the top wobbles, and it falls.</p>
          </div>
        </div>

        <h2>Fast Tops and Gyroscopic Stabilization</h2>

        <p>
          Spin a top faster and faster. The wobble does not disappear. It speeds up and shrinks at
          the same time. The eye stops seeing it. The axis seems to precess smoothly even though it
          really nutates ten thousand times in the same span.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Spin a top faster. What happens to the wobble: does it speed up, slow down, or shrink in
            size?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Both: it speeds up and shrinks. The wobble frequency rises with spin. The wobble
              amplitude falls as one over spin squared. The top looks like it precesses smoothly
              with no visible wobble.
            </p>
          </details>
        </div>

        <p>
          A <strong>fast top</strong> satisfies {`$\\frac{1}{2}I_3\\omega_3^2 \\gg mgl$`}: spin
          energy dwarfs gravitational potential energy. As {`$\\omega_3 \\to \\infty$`}:
        </p>

        <div className="lrn-eq">
          <span>{`$$\\omega_{nut} \\sim \\frac{I_3}{I_1}\\omega_3 \\quad (\\text{grows with } \\omega_3)$$`}</span>
          <span>{`$$a_{nut} \\sim \\frac{I_1 mgl}{I_3^2 \\omega_3^2}\\sin\\theta_0 \\quad (\\text{shrinks with } \\omega_3^2)$$`}</span>
          <span>{`$$\\omega_{prec} \\sim \\frac{mgl}{I_3\\omega_3} \\quad (\\text{shrinks with } \\omega_3)$$`}</span>
        </div>

        <p>
          The first line is the nutation frequency: how fast {`$\\theta$`} oscillates. The second is
          the nutation amplitude: how big those oscillations are. The third is the precession rate:
          how fast the axis sweeps around the vertical.
        </p>

        <p>
          So as a top spins faster, the wobble becomes rapid but tiny, and the sweep becomes very
          slow. This is <strong>gyroscopic stabilization</strong>.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Fast Top ({`$\\omega_3$`} large)</span>
            <p>
              Nutation frequency high, nutation amplitude tiny, precession slow. The top looks like
              it precesses smoothly. Gravity barely matters.
            </p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Slow Top</span>
            <p>Wide nutation, gravity dominates. Below threshold the top topples.</p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>Why does spinning a top faster make its precession slower, not faster?</p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Precession rate is gravitational torque divided by angular momentum:{' '}
              {`$\\omega_{prec} = \\frac{\\tau}{M_3} = \\frac{mgl\\sin\\theta}{I_3\\omega_3}$`}. As{' '}
              {`$\\omega_3$`} grows, the angular momentum {`$M_3 = I_3\\omega_3$`} grows with it.
              The same gravitational torque now changes a much larger angular momentum vector, so
              the direction shifts more slowly. Precession slows down.
            </p>
          </details>
        </div>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Naming Conflict</span>
          <p>
            What Lagrange calls nutation matches what Poinsot calls precession. The naming
            conventions disagree across the two frameworks.
          </p>
        </div>
      </>,
      <>
        <h2
          style={{
            borderTop: '1px solid rgba(240,240,250,0.15)',
            paddingTop: '2rem',
            marginTop: '2rem'
          }}
        >
          Landau &amp; Lifshitz Supplement
        </h2>
        <p style={{ opacity: 0.6, fontSize: '0.9em' }}>
          From <em>Mechanics</em> by Landau and Lifshitz (Course of Theoretical Physics, Vol. 1).
        </p>
      </>,
      // ── SECTION 0: Resonance in Non-linear Oscillations ─────────────────────
      <>
        <h2>Resonance in Non-linear Oscillations</h2>
        <p>
          Drive a non-linear spring at half its natural frequency. The spring still resonates.
          Linear systems cannot do this; the non-linearity creates the coupling.
        </p>
        <p>
          The result is a sustained large oscillation at the natural frequency, fed by a drive at
          half that frequency. The phenomenon is called <strong>subharmonic resonance</strong>.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You drive an oscillator at half its natural frequency. A linear oscillator barely
            responds. What lets a non-linear one respond strongly?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The non-linearity. A cubic term like {`$\\kappa x^3$`} mixes frequencies. A drive at{' '}
              {`$\\frac{\\omega_0}{2}$`} feeds energy into oscillations at {`$\\omega_0$`} through
              this coupling. Linear systems do not mix frequencies, so they ignore the
              half-frequency drive.
            </p>
          </details>
        </div>

        <p>
          This section covers the case {`$\\gamma \\approx \\frac{\\omega_0}{2}$`}: the drive
          frequency {`$\\gamma$`} sits near half the natural frequency {`$\\omega_0$`}.
        </p>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Subharmonic Resonance</span>
          <div className="lrn-definition-desc">
            <p>
              Resonance triggered by driving a non-linear oscillator at a fraction of its natural
              frequency.
            </p>
            <p>
              At {`$\\gamma \\approx \\frac{\\omega_0}{2}$`}, the response amplitude {`$b$`}{' '}
              satisfies a cubic equation with multiple branches.
            </p>
          </div>
        </div>

        <p className="lrn-conditional">
          Use whenever a system shows unexpectedly large response at frequencies below its natural
          one.
        </p>

        <h3>The Amplitude Equation</h3>
        <p>Working to second order, the response amplitude {`$b$`} satisfies:</p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$b^2\\!\\left[\\left(\\tfrac{1}{2}\\varepsilon - \\kappa b^2\\right)^2 + \\lambda^2\\right] = \\frac{\\alpha^2 f^2}{36m^2\\omega_0^6}\\,b^2$$`}</span>
        </div>
        <p>
          Here {`$b$`} is the response amplitude, {`$\\varepsilon$`} measures the detuning from
          exact resonance, {`$\\lambda$`} is the damping coefficient, {`$\\kappa$`} captures the
          non-linearity, {`$f$`} is the drive amplitude, {`$m$`} is the mass, {`$\\alpha$`} is
          another non-linearity coefficient, and {`$\\omega_0$`} is the natural frequency.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The equation comes from plugging a trial solution into the non-linear equation of motion
            and collecting terms at the resonant frequency.
          </p>
          <p>
            The left side is a product of {`$b^2$`} and a bracket. So {`$b = 0$`} solves it
            automatically: doing nothing is always a valid response.
          </p>
          <p>
            Non-trivial solutions come from dividing by {`$b^2$`} and solving the bracket for{' '}
            {`$b^2$`}.
          </p>
        </div>

        <h3>Three Amplitude Solutions</h3>
        <p>The amplitude equation has three solutions:</p>
        <ul className="lrn-list">
          <li>{`$b = 0$`}: trivial, no oscillation</li>
          <li>
            {`$b^2 = \\dfrac{1}{\\kappa}\\left[\\tfrac{1}{2}\\varepsilon + \\sqrt{\\left(\\dfrac{\\alpha f}{6m\\omega_0^3}\\right)^2 - \\lambda^2}\\right]$`}{' '}
            (upper stable branch)
          </li>
          <li>
            {`$b^2 = \\dfrac{1}{\\kappa}\\left[\\tfrac{1}{2}\\varepsilon - \\sqrt{\\left(\\dfrac{\\alpha f}{6m\\omega_0^3}\\right)^2 - \\lambda^2}\\right]$`}{' '}
            (lower unstable branch)
          </li>
        </ul>

        <p>For {`$\\kappa > 0$`}, this produces the characteristic S-shaped amplitude curve.</p>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">
              COMPLETE EXAMPLE: Threshold drive amplitude for subharmonic resonance
            </span>
            <p>
              Take a non-linear oscillator with {`$\\omega_0 = 10$`} rad/s, {`$\\lambda = 0.05$`} s
              {`$^{-1}$`}, {`$\\frac{\\alpha}{m} = 200$`}, and {`$\\kappa = 1$`} m{`$^{-2}$`}. Find
              the minimum drive amplitude {`$f$`} that allows non-trivial subharmonic oscillation at
              exact resonance ({`$\\varepsilon = 0$`}).
            </p>
            <p>
              Step 1: the discriminant must be non-negative for real {`$b$`}:{' '}
              {`$\\left(\\frac{\\alpha f}{6m\\omega_0^3}\\right)^2 \\geq \\lambda^2$`}.
            </p>
            <p>
              Step 2: solve for the threshold:{' '}
              {`$\\frac{f_{\\rm th}}{m} = \\frac{6\\omega_0^3\\lambda}{\\alpha}$`}.
            </p>
            <p>
              Step 3: plug numbers:{' '}
              {`$\\frac{f_{\\rm th}}{m} = \\frac{6 \\times 10^3 \\times 0.05}{200} = 1.5$`} m/s
              {`$^2$`}.
            </p>
            <p>
              Step 4: just above threshold, the upper and lower branches meet near{' '}
              {`$b^2 = \\frac{\\varepsilon}{2\\kappa}$`}. With {`$\\varepsilon = 0.4$`}, this gives{' '}
              {`$b \\approx 0.45$`} m. Below {`$f_{\\rm th}$`}, only the trivial solution{' '}
              {`$b = 0$`} survives.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            In the worked example, why does the threshold {`$f_{\\rm th}$`} grow with{' '}
            {`$\\omega_0^3$`} but only linearly with {`$\\lambda$`}?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The right side of the amplitude equation carries{' '}
              {`$\\frac{\\alpha^2 f^2}{\\omega_0^6}$`}. The discriminant therefore scales as{' '}
              {`$\\frac{f^2}{\\omega_0^6}$`}, so to overcome a fixed {`$\\lambda^2$`}, {`$f$`} must
              scale like {`$\\omega_0^3$`}. The damping {`$\\lambda$`} enters the discriminant
              linearly inside the square, so the threshold scales linearly with {`$\\lambda$`}{' '}
              itself.
            </p>
          </details>
        </div>

        <VizCard id="02.5.3" title="Mathieu Stability">
          <MathieuStability />
        </VizCard>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Bistability</span>
          <p>
            In the region where two stable branches exist, the system shows{' '}
            <strong>hysteresis</strong>: it stays on the upper branch when you decrease the drive,
            and jumps to the lower branch at a different point than where it jumped up.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does dividing the amplitude equation by {`$b^2$`} give us the non-trivial solutions?
            What physical situation does {`$b = 0$`} describe?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The factor {`$b^2$`} appears on both sides of the equation. When {`$b \\neq 0$`}, you
              can cancel it and solve the remaining bracket for {`$b^2$`}. When {`$b = 0$`}, the
              equation is satisfied trivially: the system stays at rest, which is always a valid (if
              boring) solution.
            </p>
          </details>
        </div>

        <h3>Resonance at {`$\\gamma \\approx 3\\omega_0$`}</h3>
        <p>A similar analysis applies when you drive at three times the natural frequency.</p>
        <p>The amplitude equation becomes:</p>
        <div className="lrn-eq">
          <span>{`$$b^2\\left[\\left(\\tfrac{1}{3}\\varepsilon - \\kappa b^2\\right)^2 + \\lambda^2\\right] = \\frac{9\\beta^2 f^2}{2^{12}m^2\\omega_0^6}\\,b^4$$`}</span>
        </div>
        <p>For {`$\\kappa > 0$`}, this shows a cusped region with one stable branch.</p>
      </>,

      // ── SECTION 1: Motion in a Rapidly Oscillating Field ────────────────────
      <>
        <h2>Motion in a Rapidly Oscillating Field</h2>

        <p>
          Add a fast wiggle to a slow system. The slow motion does not see the wiggle directly.
          Instead, it feels an average effect, as if a hidden potential had been added on top of the
          original one. That hidden potential can do strange things, like turn an unstable peak into
          a stable trough.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A particle sits in a potential well. You add a rapidly oscillating force. Does the
            particle drift away, or can the wiggle hold it near a new spot?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The rapid wiggle adds an extra term to the effective potential. The new term is always
              positive. It can lift unstable peaks of the original potential and create new stable
              minima where none existed.
            </p>
          </details>
        </div>

        <p>A particle in a static potential {`$U$`} also feels a rapidly oscillating force:</p>
        <div className="lrn-eq">
          <span>{`$$f = f_1\\cos\\omega t + f_2\\sin\\omega t, \\quad \\omega \\gg \\frac{1}{T}$$`}</span>
        </div>

        <p>
          Here {`$f_1$`} and {`$f_2$`} are constants giving the cosine and sine amplitudes,
          {`$\\omega$`} is the wiggle frequency, and {`$T$`} is the slow time scale of the
          underlying motion. The condition {`$\\omega \\gg \\frac{1}{T}$`} says the wiggle is much
          faster than the slow drift.
        </p>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Effective Potential</span>
          <div className="lrn-definition-desc">
            <p>
              The potential governing the slow drift of a particle inside a rapidly oscillating
              force field.
            </p>
            <p>
              It equals the static potential plus a positive term from the average kinetic energy of
              the wiggle.
            </p>
          </div>
        </div>

        <p className="lrn-conditional">
          Use whenever a system has two clearly separated time scales: slow drift and fast
          oscillation.
        </p>

        <h3>The Two-Timescale Split</h3>
        <p>Split the position into a slow part and a fast part:</p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$x(t) = X(t) + \\xi(t)$$`}</span>
        </div>
        <p>
          The slow drift is {`$X(t)$`}: the gentle motion you would see if the wiggle were absent.
          The fast oscillation is {`$\\xi(t)$`}: a tiny rapid jitter on top of the drift.
        </p>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">
              COMPLETE EXAMPLE: Deriving the effective potential
            </span>
            <p>Start from the full equation of motion:</p>
            <p>{`$m\\ddot{x} = -\\frac{dU}{dx} + f$`}</p>
            <p>Substitute {`$x = X + \\xi$`} and expand:</p>
            <p>{`$m(\\ddot{X} + \\ddot{\\xi}) = -\\frac{dU}{dX} - \\xi\\,\\frac{d^2U}{dX^2} + f(X,t) + \\xi\\,\\frac{\\partial f}{\\partial X}$`}</p>
            <p>
              The fast part satisfies {`$m\\ddot{\\xi} = f(X,t)$`}, giving{' '}
              {`$\\xi = -\\frac{f}{m\\omega^2}$`}.
            </p>
            <p>
              Averaging the slow part over a period gives{' '}
              {`$m\\ddot{X} = -\\frac{dU_{\\rm eff}}{dX}$`}.
            </p>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
            <ol className="lrn-list">
              <li>Write down the equation for {`$\\xi$`} alone (hint: fast timescale only).</li>
              <li>
                Solve for {`$\\xi$`} in terms of {`$f$`}, {`$m$`}, and {`$\\omega$`}. Complete this:{' '}
                {`$\\xi = \\_\\_\\_$`}
              </li>
            </ol>
          </div>
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
            <p>
              Derive {`$U_{\\rm eff}$`} from scratch for a force {`$f = A\\cos\\omega t$`}. What is{' '}
              {`$\\overline{f^2}$`}?
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does solving {`$m\\ddot{\\xi} = f(X,t)$`} give {`$\\xi = -\\frac{f}{m\\omega^2}$`}?
            What mathematical step produces the {`$\\omega^2$`} in the denominator?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              For {`$f = f_1\\cos\\omega t$`}, differentiating twice gives{' '}
              {`$\\ddot{\\xi} \\propto \\cos\\omega t$`}. Each time derivative multiplies by{' '}
              {`$\\omega$`}, so {`$\\ddot{\\xi} = -\\omega^2 \\xi$`}. Rearranging gives{' '}
              {`$\\xi = \\frac{f}{m\\omega^2}$`} with a sign from the oscillation phase.
            </p>
          </details>
        </div>

        <h3>The Effective Potential (one dimension)</h3>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$U_{\\rm eff} = U + \\frac{\\overline{f^2}}{2m\\omega^2} = U + \\frac{f_1^2 + f_2^2}{4m\\omega^2}$$`}</span>
        </div>

        <p>
          The bar denotes time-averaging over a wiggle period. The extra term is always positive:
          {`$\\overline{f^2}$`} is the mean square of the force, divided by twice the mass times the
          squared wiggle frequency.
        </p>

        <p>An equivalent form makes the physics clearer:</p>
        <div className="lrn-eq">
          <span>{`$$U_{\\rm eff} = U + \\tfrac{1}{2}m\\,\\overline{\\dot{\\xi}^2}$$`}</span>
        </div>

        <p>
          The added term is the time-averaged kinetic energy stored in the fast jitter. The slow
          motion sees this stored energy as a hill it must climb.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The extra term {`$\\tfrac{1}{2}m\\overline{\\dot{\\xi}^2}$`} is the time-averaged
            kinetic energy of the fast oscillation. Kinetic energy is always non-negative, so{' '}
            {`$U_{\\rm eff} \\geq U$`} everywhere.
          </p>
          <p>
            That positive addition can turn a local maximum of {`$U$`} into a local minimum of{' '}
            {`$U_{\\rm eff}$`}: a new stable rest point that did not exist before.
          </p>
        </div>

        <h3>Many Degrees of Freedom</h3>
        <p>For a system with several coordinates, the effective potential generalizes to:</p>
        <div className="lrn-eq">
          <span>{`$$U_{\\rm eff} = U + \\frac{1}{2\\omega^2}\\sum_{i,k} a^{-1}{}_{ik}\\,\\overline{f_i f_k}$$`}</span>
        </div>
        <p>
          The matrix {`$a_{ik}$`} is the mass tensor (kinetic energy is{' '}
          {`$\\frac{1}{2}a_{ik}\\dot{q}_i\\dot{q}_k$`}). Its inverse is {`$a^{-1}{}_{ik}$`}. The sum
          runs over all coordinate pairs, with the time-averaged force product{' '}
          {`$\\overline{f_i f_k}$`} weighted by the inverse mass.
        </p>

        <div className="lrn-contrast">
          <span className="lrn-contrast-label">CONTRAST</span>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Static Potential {`$U$`}</span>
              <p>The true potential with no fast wiggle.</p>
              <p>Sets equilibria when nothing drives the system.</p>
              <p>Maxima of {`$U$`} are unstable rest points.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Effective Potential {`$U_{\\rm eff}$`}</span>
              <p>Sets the slow drift when fast oscillation is present.</p>
              <p>{`$U_{\\rm eff} = U + \\frac{f_1^2+f_2^2}{4m\\omega^2}$`}.</p>
              <p>Can stabilize points that {`$U$`} alone could not.</p>
            </div>
          </div>
        </div>

        <h3>The Kapitza Pendulum</h3>
        <p>
          A pendulum with a vertically vibrating support is the classic example. P. L. Kapitza
          worked out the analysis in 1951.
        </p>
        <p>The effective potential is:</p>
        <div className="lrn-eq">
          <span>{`$$U_{\\rm eff} = mgl\\left[-\\cos\\phi + \\frac{a^2\\gamma^2}{4gl}\\sin^2\\phi\\right]$$`}</span>
        </div>
        <p>
          Here {`$m$`} is the bob mass, {`$l$`} is the pendulum length, {`$g$`} is gravity,
          {`$a$`} is the support amplitude, {`$\\gamma$`} is the support frequency, and {`$\\phi$`}{' '}
          is the angle measured from straight down. The first term is gravity. The second term is
          the wiggle's effective stiffness.
        </p>
        <p>
          The upward position ({`$\\phi = \\pi$`}) is stable when {`$a^2\\gamma^2 > 2gl$`}.
        </p>

        <div className="lrn-insight">
          <p>
            Vibrating the support fast enough holds the pendulum upside down. The oscillation acts
            like an effective gravity pointing up, just strong enough to overcome the real one.
          </p>
        </div>

        <VizCard id="02.5.4" title="Kapitza Effective Potential">
          <KapitzaEffective />
        </VizCard>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Note</span>
          <p>
            For a horizontally vibrating support, the effective potential is{' '}
            {`$U_{\\rm eff} = mgl\\left[-\\cos\\phi + \\frac{a^2\\gamma^2}{4gl}\\cos^2\\phi\\right]$`}
            .
          </p>
          <p>
            When {`$a^2\\gamma^2 < 2gl$`}, the downward position {`$\\phi = 0$`} stays stable.
          </p>
          <p>
            When {`$a^2\\gamma^2 > 2gl$`}, the rest point shifts to{' '}
            {`$\\cos\\phi = \\frac{2gl}{a^2\\gamma^2}$`}.
          </p>
        </div>
      </>,

      // ── SECTION 2: Rigid Body Angular Velocity ─────────────────────────────
      <>
        <h2>Rigid Body Motion</h2>

        <p>
          A rigid body has two motions at once. Its center of mass slides through space, and the
          body itself rotates. The rotation rate is the same no matter which reference point you
          watch. The translation depends on which point you pick.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A rigid body rotates and translates. You switch your reference point to a different spot
            on the body. Does the angular velocity change? What about the translational velocity?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The angular velocity {`$\\boldsymbol{\\Omega}$`} is the same. It belongs to the body
              as a whole. The translational velocity {`$\\mathbf{V}$`} changes: it is the velocity
              of the chosen reference point, which moves differently from other points.
            </p>
          </details>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Rigid Body</span>
          <div className="lrn-definition-desc">
            <p>A system of particles where every pairwise distance stays fixed.</p>
            <p>
              A solid object qualifies whenever its deformations are tiny compared to the bulk
              motion.
            </p>
          </div>
        </div>

        <p className="lrn-conditional">
          Use whenever internal deformations are small compared to the overall motion.
        </p>

        <h3>Velocity of Any Point</h3>
        <p>Every point in a rigid body has velocity:</p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\mathbf{v} = \\mathbf{V} + \\boldsymbol{\\Omega} \\times \\mathbf{r}$$`}</span>
        </div>
        <p>
          Here {`$\\mathbf{V}$`} is the centre-of-mass velocity and {`$\\mathbf{r}$`} is the
          position relative to the centre of mass.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Every infinitesimal rotation of the body moves point {`$\\mathbf{r}$`} by{' '}
            {`$\\delta\\boldsymbol{\\phi} \\times \\mathbf{r}$`}.
          </p>
          <p>
            Dividing by time gives the rotational contribution{' '}
            {`$\\boldsymbol{\\Omega} \\times \\mathbf{r}$`}.
          </p>
          <p>
            Adding the translational velocity {`$\\mathbf{V}$`} of the chosen origin gives the total
            velocity.
          </p>
        </div>

        <h3>Independence of {`$\\boldsymbol{\\Omega}$`} from Origin</h3>
        <p>
          If you shift the origin by {`$\\mathbf{a}$`}, the translational velocity changes but{' '}
          {`$\\boldsymbol{\\Omega}$`} does not:
        </p>
        <div className="lrn-eq">
          <span>{`$$\\mathbf{V}' = \\mathbf{V} + \\boldsymbol{\\Omega} \\times \\mathbf{a}, \\qquad \\boldsymbol{\\Omega}' = \\boldsymbol{\\Omega}$$`}</span>
        </div>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Instantaneous Axis</span>
          <p>
            When {`$\\mathbf{V} \\perp \\boldsymbol{\\Omega}$`}, there exists a point {`$O'$`} where{' '}
            {`$\\mathbf{V}' = 0$`}. The body appears to rotate purely about the axis through{' '}
            {`$O'$`} at that instant.
          </p>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">
              COMPLETE EXAMPLE: Velocity of the rim of a rolling wheel
            </span>
            <p>
              A wheel of radius {`$R = 0.3$`} m rolls without slipping along a flat road at{' '}
              {`$V = 2$`} m/s. Find the velocity of the topmost point and the contact point.
            </p>
            <p>
              Step 1: rolling without slipping fixes{' '}
              {`$\\Omega = \\frac{V}{R} = \\frac{2}{0.3} \\approx 6.67$`} rad/s, with{' '}
              {`$\\boldsymbol{\\Omega}$`} pointing horizontally out of the page.
            </p>
            <p>
              Step 2: use {`$\\mathbf{v} = \\mathbf{V} + \\boldsymbol{\\Omega}\\times\\mathbf{r}$`}.
              For the top point, {`$\\mathbf{r} = (0, R)$`} relative to the centre. The cross
              product gives {`$\\Omega R = 2$`} m/s in the forward direction.
            </p>
            <p>
              Step 3: total top-point velocity: {`$2 + 2 = 4$`} m/s (twice the centre-of-mass
              speed).
            </p>
            <p>
              Step 4: for the contact point, {`$\\mathbf{r} = (0, -R)$`}. The cross product gives{' '}
              {`$-\\Omega R = -2$`} m/s. Total: {`$2 - 2 = 0$`} m/s, exactly zero, as the rolling
              condition requires.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the top of a rolling wheel move at twice the centre-of-mass speed, while the
            contact point is momentarily at rest?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The contact point sits below the centre by {`$R$`}, so the rotational contribution{' '}
              {`$\\boldsymbol{\\Omega}\\times\\mathbf{r}$`} points backward at speed {`$\\Omega R$`}
              . Rolling forces {`$\\Omega R = V$`}, so it cancels the forward translational velocity{' '}
              {`$V$`}. At the top, the rotational contribution points forward at the same speed and
              adds to {`$V$`}, giving {`$2V$`}.
            </p>
          </details>
        </div>
      </>,

      // ── SECTION 3: The Inertia Tensor ────────────────────────────────────────
      <>
        <h2>The Inertia Tensor</h2>

        <p>
          For ordinary motion, mass is one number. For rotation, it is a matrix: how mass spreads
          around different axes matters as much as how much there is. The inertia tensor packs that
          information.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You spin a book about three perpendicular axes. About one axis it spins steadily. About
            another it tumbles. What property of the book picks them out?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              The principal moments of inertia. Spinning about the axis with the largest or smallest
              moment is stable. Spinning about the intermediate axis is always unstable: the tennis
              racket theorem.
            </p>
          </details>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Inertia Tensor</span>
          <div className="lrn-definition-desc">
            <p>
              A symmetric {`$3 \\times 3$`} matrix {`$I_{ik}$`} encoding how mass is distributed
              around the center of mass.
            </p>
            <p>It fully determines the rotational kinetic energy of a rigid body.</p>
          </div>
        </div>

        <p className="lrn-conditional">
          Use whenever a body rotates about an axis that is not an obvious symmetry axis, or when
          you need the full rotational kinetic energy.
        </p>

        <h3>Kinetic Energy of a Rigid Body</h3>
        <p>The total kinetic energy splits into translational and rotational parts:</p>
        <div className="lrn-eq">
          <span>{`$$T = \\tfrac{1}{2}\\mu V^2 + \\tfrac{1}{2}\\sum m\\left[\\Omega^2 r^2 - (\\boldsymbol{\\Omega}\\cdot\\mathbf{r})^2\\right]$$`}</span>
        </div>

        <p>
          The first term is straight kinetic energy of the center of mass: total mass {`$\\mu$`}{' '}
          times centre-of-mass speed squared, halved. The second term sums the rotational energy
          over every body point. Each particle of mass {`$m$`} at position {`$\\mathbf{r}$`}{' '}
          contributes {`$\\frac{1}{2}m|\\boldsymbol{\\Omega}\\times\\mathbf{r}|^2$`}, and the
          identity{' '}
          {`$|\\mathbf{A}\\times\\mathbf{B}|^2 = A^2 B^2 - (\\mathbf{A}\\cdot\\mathbf{B})^2$`} puts
          it in the form shown.
        </p>

        <h3>The Tensor in Component Form</h3>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$I_{ik} = \\sum m\\left(x_i^2\\,\\delta_{ik} - x_i x_k\\right)$$`}</span>
        </div>
        <p>
          The sum runs over body points. Each particle contributes {`$m$`} times a combination of
          its coordinates {`$x_1, x_2, x_3$`}. The Kronecker delta {`$\\delta_{ik}$`} is 1 when{' '}
          {`$i = k$`} and 0 otherwise. The double sum {`$x_i^2$`} stands for{' '}
          {`$x_1^2 + x_2^2 + x_3^2 = r^2$`}.
        </p>
        <p>For a continuous body, replace the sum with an integral over volume:</p>
        <div className="lrn-eq">
          <span>{`$$I_{ik} = \\int \\rho\\left(x_i^2\\,\\delta_{ik} - x_i x_k\\right)\\,dV$$`}</span>
        </div>
        <p>
          Here {`$\\rho$`} is the mass density. The tensor is symmetric: {`$I_{ik} = I_{ki}$`}.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Start from{' '}
            {`$T_{\\rm rot} = \\tfrac{1}{2}\\sum m|\\boldsymbol{\\Omega}\\times\\mathbf{r}|^2$`}.
            Expand the cross product using{' '}
            {`$|\\mathbf{A}\\times\\mathbf{B}|^2 = A^2B^2 - (\\mathbf{A}\\cdot\\mathbf{B})^2$`}.
            Collect the {`$\\Omega_i\\Omega_k$`} coefficients: they form exactly {`$I_{ik}$`}.
          </p>
        </div>

        <h3>Compact Form and the Lagrangian</h3>
        <p>Using the inertia tensor, the kinetic energy reads:</p>
        <div className="lrn-eq">
          <span>{`$$T = \\tfrac{1}{2}\\mu V^2 + \\tfrac{1}{2}I_{ik}\\Omega_i\\Omega_k$$`}</span>
        </div>
        <p>
          The repeated indices are summed (Einstein convention). The Lagrangian of a rigid body in
          external potential {`$U$`} follows:
        </p>
        <div className="lrn-eq">
          <span>{`$$L = \\tfrac{1}{2}\\mu V^2 + \\tfrac{1}{2}I_{ik}\\Omega_i\\Omega_k - U$$`}</span>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does the cross term {`$-(\\boldsymbol{\\Omega}\\cdot\\mathbf{r})^2$`} appear in the
            kinetic energy formula? What geometrical fact does it encode?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              This term subtracts the component of {`$\\mathbf{r}$`} along{' '}
              {`$\\boldsymbol{\\Omega}$`}. A particle sitting exactly on the rotation axis (
              {`$\\mathbf{r} \\parallel \\boldsymbol{\\Omega}$`}) does not move, so it contributes
              zero kinetic energy. The cross product {`$\\boldsymbol{\\Omega}\\times\\mathbf{r}$`}{' '}
              is exactly zero in that case, and so is the difference{' '}
              {`$\\Omega^2r^2 - (\\boldsymbol{\\Omega}\\cdot\\mathbf{r})^2$`}.
            </p>
          </details>
        </div>

        <h3>Principal Axes and Principal Moments</h3>
        <p>
          Because {`$I_{ik}$`} is a real symmetric matrix, you can always find three orthogonal axes
          that diagonalise it.
        </p>
        <p>
          These are the <strong>principal axes</strong> with <strong>principal moments</strong>{' '}
          {`$I_1, I_2, I_3$`}.
        </p>
        <p>In these axes, the rotational kinetic energy takes the simplest form:</p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$T_{\\rm rot} = \\tfrac{1}{2}\\left(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2\\right)$$`}</span>
        </div>

        <h3>Inequalities and Special Cases</h3>
        <p>The principal moments always satisfy:</p>
        <div className="lrn-eq">
          <span>{`$$I_1 + I_2 \\geq I_3$$`}</span>
        </div>
        <p>
          For a flat (coplanar) body, equality holds: {`$I_3 = I_1 + I_2$`} (perpendicular axis
          theorem).
        </p>
        <p>
          For a linear (collinear) body: {`$I_1 = I_2 = \\sum m x_3^2$`} and {`$I_3 = 0$`}.
        </p>

        <h3>Parallel Axis Theorem</h3>
        <p>
          To shift from centre-of-mass axes to a parallel set at displacement {`$\\mathbf{a}$`}:
        </p>
        <div className="lrn-eq">
          <span>{`$$I'_{ik} = I_{ik} + \\mu\\left(a^2\\delta_{ik} - a_i a_k\\right)$$`}</span>
        </div>
        <p>The new origin {`$O'$`} does not need to lie inside the body.</p>

        <h3>Types of Tops</h3>
        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Asymmetrical Top</span>
            <p>All three principal moments different: {`$I_1 \\neq I_2 \\neq I_3$`}.</p>
            <p>Most general case. Requires elliptic functions for full solution.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Symmetrical Top</span>
            <p>Two equal moments: {`$I_1 = I_2 \\neq I_3$`}.</p>
            <p>Fully solvable using angular momentum conservation.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Spherical Top</span>
            <p>All equal: {`$I_1 = I_2 = I_3$`}.</p>
            <p>Simplest case: {`$\\mathbf{M} = I\\boldsymbol{\\Omega}$`}.</p>
          </div>
        </div>

        <h3>Example Problems for the Inertia Tensor</h3>
        <div className="lrn-steps">
          <div className="lrn-step">
            <span className="lrn-step-title">Thin Rod</span>
            <p className="lrn-step-content">
              {`$I_1 = I_2 = \\frac{\\mu l^2}{12}$`}, {`$I_3 = 0$`} (about the rod axis).
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Sphere</span>
            <p className="lrn-step-content">
              {`$I_1 = I_2 = I_3 = \\tfrac{2}{5}\\mu R^2$`}: a spherical top.
            </p>
          </div>
          <div className="lrn-step">
            <span className="lrn-step-title">Compound Pendulum</span>
            <p className="lrn-step-content">
              Small oscillation frequency:{' '}
              {`$\\omega^2 = \\frac{\\mu g l}{\\mu l^2 + I_1\\cos^2\\alpha + I_2\\cos^2\\beta + I_3\\cos^2\\gamma}$`}
            </p>
          </div>
        </div>
      </>,

      // ── SECTION 4: Angular Momentum ──────────────────────────────────────────
      <>
        <h2>Angular Momentum of a Rigid Body</h2>

        <p>
          Angular momentum and angular velocity rarely point the same way. Spin a book about a
          random axis and the two arrows splay apart. They line up only for special axes (principal
          axes) or for special bodies (spheres).
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A spinning top has angular velocity {`$\\boldsymbol{\\Omega}$`} pointing straight up.
            Does its angular momentum {`$\\mathbf{M}$`} also point straight up?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Not in general. {`$\\mathbf{M}$`} and {`$\\boldsymbol{\\Omega}$`} are parallel only
              when the spin axis is a principal axis, or when all three principal moments coincide
              (a spherical top).
            </p>
          </details>
        </div>

        <p className="lrn-conditional">
          Use whenever the spin axis is not a principal axis, or whenever you need precession rates.
        </p>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Angular Momentum in Tensor Form</span>
          <div className="lrn-definition-desc">
            <p>
              {`$M_i = I_{ik}\\,\\Omega_k$`}: the angular momentum is the inertia tensor acting on
              the angular velocity.
            </p>
          </div>
        </div>

        <h3>In Principal Axes</h3>
        <div className="lrn-eq">
          <span>{`$$M_1 = I_1\\Omega_1,\\quad M_2 = I_2\\Omega_2,\\quad M_3 = I_3\\Omega_3$$`}</span>
        </div>
        <p>
          Each component of {`$\\mathbf{M}$`} along a principal axis is the corresponding component
          of {`$\\boldsymbol{\\Omega}$`} scaled by that axis's moment of inertia.
        </p>
        <p>
          When all three {`$I_k$`} differ, the scaling is different along each axis, so{' '}
          {`$\\mathbf{M}$`} and {`$\\boldsymbol{\\Omega}$`} point in different directions. For a
          spherical top all moments are equal: {`$\\mathbf{M} = I\\boldsymbol{\\Omega}$`}, always
          parallel.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>Angular momentum is {`$M_i = \\sum m (\\mathbf{r}\\times\\mathbf{v})_i$`}.</p>
          <p>
            Substituting {`$\\mathbf{v} = \\boldsymbol{\\Omega}\\times\\mathbf{r}$`} and using the
            BAC-CAB rule on the cross products gives exactly {`$M_i = I_{ik}\\Omega_k$`}.
          </p>
          <p>
            Only when {`$I_{ik}$`} is proportional to {`$\\delta_{ik}$`} (spherical top) do{' '}
            {`$\\mathbf{M}$`} and {`$\\boldsymbol{\\Omega}$`} automatically align.
          </p>
        </div>

        <h3>Free Rotation of the Symmetrical Top</h3>
        <p>
          For a symmetrical top ({`$I_1 = I_2$`}) with no external torques, angular momentum{' '}
          {`$\\mathbf{M}$`} is conserved.
        </p>
        <p>The spin about the symmetry axis is:</p>
        <div className="lrn-eq">
          <span>{`$$\\Omega_3 = \\frac{M}{I_3}\\cos\\theta$$`}</span>
        </div>
        <p>The symmetry axis precesses about {`$\\mathbf{M}$`} at rate:</p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\Omega_{\\rm pr} = \\frac{M}{I_1}$$`}</span>
        </div>

        <div className="lrn-insight">
          <p>
            This is <strong>regular precession</strong>: the symmetry axis,{' '}
            {`$\\boldsymbol{\\Omega}$`}, and {`$\\mathbf{M}$`} all lie in one plane, and that plane
            rotates uniformly about {`$\\mathbf{M}$`}.
          </p>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does precession happen at all for a free symmetrical top? No torque acts on it. So
            why does the axis move?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              {`$\\mathbf{M}$`} is conserved (no torque). But {`$\\mathbf{M}$`} and{' '}
              {`$\\boldsymbol{\\Omega}$`} are not parallel for a symmetrical top when{' '}
              {`$I_1 \\neq I_3$`}. The body must rotate so that {`$M_i = I_{ik}\\Omega_k$`} is
              satisfied at every instant. This forces the symmetry axis to sweep out a cone around{' '}
              {`$\\mathbf{M}$`}.
            </p>
          </details>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">
              COMPLETE EXAMPLE: Precession rate of a tossed disc
            </span>
            <p>
              A flat disc of mass {`$\\mu = 0.2$`} kg and radius {`$R = 0.1$`} m is tossed into the
              air. It spins at {`$\\Omega_3 = 30$`} rad/s about its symmetry axis, with the axis
              tilted at {`$\\theta = 30°$`} from {`$\\mathbf{M}$`}. Find the precession rate.
            </p>
            <p>
              Step 1: principal moments for a flat disc are {`$I_3 = \\frac{\\mu R^2}{2}$`}{' '}
              (symmetry axis) and {`$I_1 = I_2 = \\frac{\\mu R^2}{4}$`} (perpendicular axis theorem
              with {`$I_1 = I_2$`} and {`$I_3 = I_1+I_2$`}).
            </p>
            <p>
              Step 2: numerical values: {`$I_3 = \\frac{0.2\\times 0.01}{2} = 1\\times 10^{-3}$`}{' '}
              kg·m
              {`$^2$`}, and {`$I_1 = 0.5\\times 10^{-3}$`} kg·m{`$^2$`}.
            </p>
            <p>
              Step 3: from {`$\\Omega_3 = \\frac{M\\cos\\theta}{I_3}$`}, solve for {`$M$`}:{' '}
              {`$M = \\frac{I_3\\Omega_3}{\\cos 30°} = \\frac{10^{-3} \\times 30}{0.866} \\approx 3.46\\times 10^{-2}$`}{' '}
              kg·m{`$^2$`}/s.
            </p>
            <p>
              Step 4: precession rate:{' '}
              {`$\\Omega_{\\rm pr} = \\frac{M}{I_1} = \\frac{3.46\\times 10^{-2}}{0.5\\times 10^{-3}} \\approx 69.3$`}{' '}
              rad/s, about 2.3 times faster than the spin itself. This is the classic tumbling-disc
              effect Feynman wrote about.
            </p>
          </div>
        </div>
      </>,

      // ── SECTION 5: Equations of Motion ──────────────────────────────────────
      <>
        <h2>Equations of Motion of a Rigid Body</h2>

        <p>
          A rigid body has six degrees of freedom: three for the center of mass and three for
          orientation. Newton's law in vector form takes care of the first three. The torque law
          handles the rest.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            Two equal and opposite forces act on a rigid body at different points (a couple). Does
            the choice of origin change the net torque?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              No. When the total force vanishes, the torque is the same about every origin. A couple
              is the prototype of an origin-independent torque.
            </p>
          </details>
        </div>

        <p className="lrn-conditional">
          Use whenever you need forces, torques, or the full trajectory of a rigid body under
          external loads.
        </p>

        <h3>The Two Vector Equations</h3>
        <p>Two vector equations govern the motion:</p>
        <div className="lrn-eq">
          <span>{`$$\\frac{d\\mathbf{P}}{dt} = \\mathbf{F}, \\qquad \\frac{d\\mathbf{M}}{dt} = \\mathbf{K}$$`}</span>
        </div>
        <p>
          {`$\\mathbf{P}$`} is total linear momentum, {`$\\mathbf{F}$`} is total external force.
          {`$\\mathbf{M}$`} is total angular momentum and {`$\\mathbf{K}$`} is total torque, equal
          to {`$\\sum \\mathbf{r}\\times\\mathbf{f}$`}: the sum of cross products of position with
          applied force at each contact point.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>Sum Newton's law over all particles: {`$\\sum m\\mathbf{a} = \\sum \\mathbf{f}$`}.</p>
          <p>
            Internal forces cancel in pairs (Newton's third law), leaving{' '}
            {`$\\frac{d\\mathbf{P}}{dt} = \\mathbf{F}_{\\rm ext}$`}.
          </p>
          <p>
            Take torques: internal torques also cancel, leaving{' '}
            {`$\\frac{d\\mathbf{M}}{dt} = \\mathbf{K}_{\\rm ext}$`}.
          </p>
        </div>

        <h3>Torque Under Origin Shift</h3>
        <p>Shifting the origin by {`$\\mathbf{a}$`} changes the torque:</p>
        <div className="lrn-eq">
          <span>{`$$\\mathbf{K} = \\mathbf{K}' + \\mathbf{a}\\times\\mathbf{F}$$`}</span>
        </div>
        <p>
          When total force {`$\\mathbf{F} = 0$`} (a couple), the torque is the same for every
          origin.
        </p>

        <h3>Torque from a Potential</h3>
        <p>If the interaction energy is {`$U(\\phi)$`}, the torque is:</p>
        <div className="lrn-eq">
          <span>{`$$\\mathbf{K} = -\\frac{\\partial U}{\\partial \\boldsymbol{\\phi}}$$`}</span>
        </div>

        <h3>Centre of Gravity</h3>
        <p>
          In a uniform external field, every applied force acts effectively at one point: the{' '}
          <strong>centre of gravity</strong>.
        </p>
        <div className="lrn-eq">
          <span>{`$$\\mathbf{r}_0 = \\frac{\\sum e\\,\\mathbf{r}}{\\sum e}$$`}</span>
        </div>
        <p>
          The numerator weights each position {`$\\mathbf{r}$`} by its charge or mass element{' '}
          {`$e$`}; the denominator is the total. In a uniform gravitational field the centre of
          gravity coincides with the centre of mass.
        </p>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">
              COMPLETE EXAMPLE: Angular acceleration of a door under torque
            </span>
            <p>
              A uniform door of mass {`$\\mu = 30$`} kg, height {`$h = 2$`} m, and width {`$w = 1$`}{' '}
              m hangs from hinges along one vertical edge. You push at the far edge with a
              horizontal force {`$F = 50$`} N perpendicular to the door. Find the angular
              acceleration about the hinge axis.
            </p>
            <p>
              Step 1: identify the torque axis (the hinge) and compute the torque arm. The force
              acts at distance {`$w = 1$`} m from the hinge, perpendicular to the door, so{' '}
              {`$K = F\\,w = 50\\times 1 = 50$`} N·m.
            </p>
            <p>
              Step 2: get the moment of inertia about the hinge. For a thin door rotating about one
              edge, {`$I = \\tfrac{1}{3}\\mu w^2 = \\frac{1}{3}\\times 30\\times 1 = 10$`} kg·m
              {`$^2$`}.
            </p>
            <p>
              Step 3: apply {`$\\frac{dM}{dt} = K$`}, which for fixed-axis rotation reduces to{' '}
              {`$I\\dot{\\Omega} = K$`}. Solve:{' '}
              {`$\\dot{\\Omega} = \\frac{K}{I} = \\frac{50}{10} = 5$`} rad/s
              {`$^2$`}.
            </p>
            <p>
              Step 4: check origin invariance. The hinge reaction adds zero torque about the hinge
              (its arm is zero). Only the applied force contributes, consistent with the answer.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            In the door example, why did we choose the hinge as our origin instead of the centre of
            mass?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The hinge constrains the door, so the unknown reaction force acts there. Choosing the
              hinge as origin makes that reaction's torque zero ({`$\\mathbf{a} = 0$`}), so it drops
              out of {`$\\frac{dM}{dt} = K$`}. We can solve for the angular acceleration without
              ever computing the reaction. Centre-of-mass origin would force us to track the
              reaction explicitly.
            </p>
          </details>
        </div>
      </>,

      // ── SECTION 6: Eulerian Angles ───────────────────────────────────────────
      <>
        <h2>Eulerian Angles</h2>

        <p>
          Three angles describe every possible orientation in space. Tilt, swing, spin: each one
          contributes one angle, and together they cover the rotation group {`$SO(3)$`}.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            How many independent angles fully describe the orientation of a rigid body in three
            dimensions?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Three. The Eulerian angles {`$\\theta$`}, {`$\\phi$`}, {`$\\psi$`} parametrize every
              orientation. Three rotations applied in order can take any starting frame to any
              ending frame.
            </p>
          </details>
        </div>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Eulerian Angles</span>
          <div className="lrn-definition-desc">
            <p>
              <strong>Nutation {`$\\theta$`}:</strong> the angle between the lab {`$Z$`}-axis and
              the body's symmetry axis {`$x_3$`}.
            </p>
            <p>
              <strong>Precession {`$\\phi$`}:</strong> the angle between the lab {`$X$`}-axis and
              the line of nodes {`$ON$`} (the intersection of the lab horizontal plane and the body
              equatorial plane).
            </p>
            <p>
              <strong>Spin {`$\\psi$`}:</strong> the angle between the body axis {`$x_1$`} and the
              line of nodes {`$ON$`}.
            </p>
          </div>
        </div>

        <p className="lrn-conditional">
          Use Eulerian angles whenever you need a Lagrangian or equations of motion for a spinning
          body.
        </p>

        <VizCard id="02.5.5" title="Normal Modes">
          <NormalModes />
        </VizCard>

        <h3>Angular Velocity in Eulerian Angles</h3>
        <p>The body-frame components of {`$\\boldsymbol{\\Omega}$`} are:</p>
        <div className="lrn-eq">
          <span>{`$$\\Omega_1 = \\dot{\\phi}\\sin\\theta\\sin\\psi + \\dot{\\theta}\\cos\\psi$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$\\Omega_2 = \\dot{\\phi}\\sin\\theta\\cos\\psi - \\dot{\\theta}\\sin\\psi$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$\\Omega_3 = \\dot{\\phi}\\cos\\theta + \\dot{\\psi}$$`}</span>
        </div>

        <h3>Kinetic Energy of a Symmetrical Top</h3>
        <p>For {`$I_1 = I_2$`}, the rotational kinetic energy is:</p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$T_{\\rm rot} = \\tfrac{1}{2}I_1\\left(\\dot{\\phi}^2\\sin^2\\theta + \\dot{\\theta}^2\\right) + \\tfrac{1}{2}I_3\\left(\\dot{\\phi}\\cos\\theta + \\dot{\\psi}\\right)^2$$`}</span>
        </div>

        <h3>Free Symmetrical Top</h3>
        <p>
          With no external torques, {`$\\phi$`} and {`$\\psi$`} are cyclic coordinates.
        </p>
        <p>Their conservation gives:</p>
        <div className="lrn-eq">
          <span>{`$$\\dot{\\theta} = 0, \\quad I_1\\dot{\\phi} = M, \\quad I_3\\left(\\dot{\\phi}\\cos\\theta + \\dot{\\psi}\\right) = M\\cos\\theta$$`}</span>
        </div>
        <p>
          The nutation angle {`$\\theta$`} stays constant: no wobble for a torque-free symmetrical
          top.
        </p>

        <div className="lrn-callout">
          <span className="lrn-callout-label">Nutation</span>
          <p>
            For the <strong>heavy symmetrical top</strong> (fixed lowest point), {`$\\theta$`}{' '}
            oscillates between two values {`$\\theta_1$`} and {`$\\theta_2$`} while the axis
            precesses. This oscillation is called <strong>nutation</strong>. Three path types exist
            (monotone precession, looping, cusped).
          </p>
        </div>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Stability Condition</span>
          <p>
            A top spinning rapidly about the vertical axis is stable when {`$M_3^2 > 4I_1'\\mu gl$`}
            , or equivalently {`$\\Omega_3^2 > \\frac{4I_1'\\mu gl}{I_3^2}$`}.
          </p>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            Each Eulerian angle changes a different basis vector. {`$\\dot{\\theta}$`} tilts the
            symmetry axis through the line of nodes, contributing to {`$\\Omega_1$`} and{' '}
            {`$\\Omega_2$`}.
          </p>
          <p>
            {`$\\dot{\\phi}$`} swings the line of nodes about the fixed {`$Z$`}-axis, splitting into
            a component along {`$x_3$`} ({`$\\dot{\\phi}\\cos\\theta$`}) and a component
            perpendicular ({`$\\dot{\\phi}\\sin\\theta$`}).
          </p>
          <p>
            {`$\\dot{\\psi}$`} is rotation about the body's own symmetry axis, so it adds directly
            to {`$\\Omega_3$`}.
          </p>
          <p>
            Adding the three rotations vector-wise and projecting on the body axes gives the formula
            for {`$\\Omega_1, \\Omega_2, \\Omega_3$`}.
          </p>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">
              COMPLETE EXAMPLE: Precession of a tilted gyroscope
            </span>
            <p>
              A symmetrical top has {`$I_1 = 2\\times 10^{-3}$`} kg·m{`$^2$`} and{' '}
              {`$I_3 = 4\\times 10^{-3}$`} kg·m{`$^2$`}. It spins so that {`$\\Omega_3 = 100$`}{' '}
              rad/s while tilted at {`$\\theta = 60°$`} from the angular momentum direction. Find
              the precession rate and the magnitude of {`$\\mathbf{M}$`}.
            </p>
            <p>
              Step 1: use the cyclic-coordinate relation{' '}
              {`$I_3(\\dot{\\phi}\\cos\\theta + \\dot{\\psi}) = M\\cos\\theta$`}. The body spin is{' '}
              {`$\\Omega_3 = \\dot{\\phi}\\cos\\theta + \\dot{\\psi}$`}, so{' '}
              {`$I_3\\Omega_3 = M\\cos\\theta$`}.
            </p>
            <p>
              Step 2: solve for {`$M$`}:{' '}
              {`$M = \\frac{I_3\\Omega_3}{\\cos\\theta} = \\frac{4\\times 10^{-3}\\times 100}{0.5} = 0.8$`}{' '}
              kg·m
              {`$^2$`}/s.
            </p>
            <p>
              Step 3: precession rate from {`$I_1\\dot{\\phi} = M$`}:{' '}
              {`$\\dot{\\phi} = \\frac{M}{I_1} = \\frac{0.8}{2\\times 10^{-3}} = 400$`} rad/s.
            </p>
            <p>
              Step 4: check {`$\\dot{\\theta} = 0$`}: yes, the nutation angle is fixed because there
              is no torque. The axis sweeps a cone of half-angle 60° at 400 rad/s.
            </p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why is the precession rate {`$\\dot{\\phi} = \\frac{M}{I_1}$`} controlled by {`$I_1$`}{' '}
            and not {`$I_3$`}, even though the body spins fastest about the symmetry axis?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              {`$I_1$`} measures the resistance to rotation perpendicular to the symmetry axis.
              Precession is exactly such a perpendicular rotation: the symmetry axis swings about{' '}
              {`$\\mathbf{M}$`}, which means the body's "long" direction is being moved sideways.
              {`$I_3$`} only enters how much spin {`$\\dot{\\psi}$`} the body needs about its own
              axis to satisfy {`$M_3 = I_3\\Omega_3$`}.
            </p>
          </details>
        </div>
      </>,

      // ── SECTION 7: Euler's Equations ─────────────────────────────────────────
      <>
        <h2>Euler's Equations</h2>

        <p>
          The body-fixed frame is special: the inertia tensor is diagonal there. But the frame
          itself rotates, so any vector picks up an extra rate of change just from the frame motion.
          That extra term is the heart of Euler's equations.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            You write equations of motion in the body-fixed frame. What extra term shows up that did
            not appear in the lab frame?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              A term {`$\\boldsymbol{\\Omega}\\times\\mathbf{A}$`} for any vector {`$\\mathbf{A}$`}.
              Body-frame axes themselves rotate, so the vector's components change even when the
              vector itself is fixed in the lab.
            </p>
          </details>
        </div>

        <p className="lrn-conditional">
          Use Euler's equations when torques or constraints are most natural in the body-fixed
          frame, especially for principal-axis problems.
        </p>

        <h3>Rate of Change in a Moving Frame</h3>
        <p>
          For any vector {`$\\mathbf{A}$`}, the rates of change in the lab and body frames are
          linked by:
        </p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\frac{d\\mathbf{A}}{dt} = \\frac{d'\\mathbf{A}}{dt} + \\boldsymbol{\\Omega}\\times\\mathbf{A}$$`}</span>
        </div>
        <p>
          The unprimed derivative is the rate of change in the lab frame. The primed derivative is
          the rate measured in the rotating body frame. The extra term{' '}
          {`$\\boldsymbol{\\Omega}\\times\\mathbf{A}$`} comes from the rotation of the body axes
          themselves.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Fixed-Frame Equations</span>
            <p>
              {`$\\frac{d\\mathbf{P}}{dt} = \\mathbf{F}$`},{' '}
              {`$\\frac{d\\mathbf{M}}{dt} = \\mathbf{K}$`}
            </p>
            <p>Simple structure. Natural for external forces.</p>
            <p>Best for translational motion.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Euler's Equations (Body Frame)</span>
            <p>Couples {`$\\Omega_1, \\Omega_2, \\Omega_3$`} in three non-linear ODEs.</p>
            <p>Natural for body-fixed torques and principal-axis problems.</p>
            <p>Best for torque-free or symmetric problems.</p>
          </div>
        </div>

        <h3>Euler's Equations in Principal Axes</h3>
        <div className="lrn-eq">
          <span>{`$$I_1\\,\\dot{\\Omega}_1 + (I_3 - I_2)\\,\\Omega_2\\Omega_3 = K_1$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$I_2\\,\\dot{\\Omega}_2 + (I_1 - I_3)\\,\\Omega_3\\Omega_1 = K_2$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$I_3\\,\\dot{\\Omega}_3 + (I_2 - I_1)\\,\\Omega_1\\Omega_2 = K_3$$`}</span>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>Start from {`$\\frac{d\\mathbf{M}}{dt} = \\mathbf{K}$`} in the fixed frame.</p>
          <p>
            Apply the frame-change formula:{' '}
            {`$\\frac{d^\\prime\\mathbf{M}}{dt} + \\boldsymbol{\\Omega}\\times\\mathbf{M} = \\mathbf{K}$`}
            .
          </p>
          <p>
            In principal axes, {`$M_i = I_i\\Omega_i$`} (no sum). Writing out the three components
            gives exactly Euler's equations.
          </p>
        </div>

        <h3>Free Rotation of the Symmetrical Top (Body Frame)</h3>
        <p>
          With {`$K = 0$`} and {`$I_1 = I_2$`}, Euler's equations give{' '}
          {`$\\Omega_3 = \\text{const}$`} and:
        </p>
        <div className="lrn-eq">
          <span>{`$$\\omega = \\Omega_3\\,\\frac{I_3 - I_1}{I_1}$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$\\Omega_1 = A\\cos\\omega t, \\qquad \\Omega_2 = A\\sin\\omega t$$`}</span>
        </div>
        <p>
          The angular velocity {`$\\boldsymbol{\\Omega}$`} rotates uniformly about the symmetry axis
          with frequency {`$\\omega$`}.
        </p>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why does {`$\\Omega_3$`} stay constant for a torque-free symmetrical top, but{' '}
            {`$\\Omega_1$`} and {`$\\Omega_2$`} oscillate?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              The third Euler equation for {`$I_1=I_2$`} is {`$I_3\\dot{\\Omega}_3 = 0$`} (the
              coupling term {`$(I_2-I_1)\\Omega_1\\Omega_2$`} vanishes). So {`$\\Omega_3$`} is
              constant by momentum conservation. The first two equations then form a linear system
              for {`$\\Omega_1, \\Omega_2$`} with constant coefficients, giving sinusoidal
              solutions.
            </p>
          </details>
        </div>
      </>,

      // ── SECTION 8: The Asymmetrical Top ──────────────────────────────────────
      <>
        <h2>The Asymmetrical Top</h2>

        <p>
          A body with three different principal moments has the richest free rotation. Two axes give
          steady spin. One axis gives instability. The full motion solves with elliptic functions
          rather than ordinary trigonometry.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A book tossed spinning in the air spins steadily about its longest or shortest axis.
            What happens about the middle axis?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Rotation about the intermediate axis is always unstable. Any tiny disturbance grows
              and the body tumbles. This is the tennis-racket theorem (or intermediate-axis
              theorem).
            </p>
          </details>
        </div>

        <p className="lrn-conditional">
          Use whenever a freely rotating body has three different principal moments.
        </p>

        <p>Assume the ordering {`$I_3 > I_2 > I_1$`}.</p>

        <h3>Two Integrals of Motion</h3>
        <p>Energy and squared angular momentum are both conserved:</p>
        <div className="lrn-eq">
          <span>{`$$I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2 = 2E$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$I_1^2\\Omega_1^2 + I_2^2\\Omega_2^2 + I_3^2\\Omega_3^2 = M^2$$`}</span>
        </div>
        <p>
          The first equation is twice the rotational kinetic energy. The second is the squared
          length of the angular momentum vector.
        </p>

        <h3>Geometric Picture: Polhodes</h3>
        <p>
          The tip of {`$\\boldsymbol{\\Omega}$`} traces a closed curve on the momentum ellipsoid.
          These curves are called <strong>polhodes</strong>.
        </p>
        <p>
          Polhodes near the {`$x_1$`} and {`$x_3$`} axes are small closed loops: stable. The polhode
          through {`$x_2$`} is a separatrix that wraps around the whole ellipsoid: unstable.
        </p>

        <VizCard id="02.5.6" title="Polhode Curves">
          <Polhodes />
        </VizCard>

        <div className="lrn-callout lrn-warning">
          <span className="lrn-callout-label">Stability Rule</span>
          <p>
            Rotation is stable about the axes of <strong>least</strong> ({`$x_1$`}) and{' '}
            <strong>greatest</strong> ({`$x_3$`}) moment of inertia.
          </p>
          <p>
            Rotation about the <strong>intermediate</strong> axis ({`$x_2$`}) is always unstable.
          </p>
        </div>

        <h3>Solution via Elliptic Functions</h3>
        <p>
          The motion exists when {`$2EI_1 < M^2 < 2EI_3$`}: the energy and angular momentum match a
          real polhode somewhere on the ellipsoid.
        </p>
        <p>
          Use a scaled time {`$\\tau$`} and a modulus {`$k$`}:
        </p>
        <div className="lrn-eq">
          <span>{`$$\\tau = t\\sqrt{\\frac{(I_3-I_2)(M^2-2EI_1)}{I_1I_2I_3}}, \\quad k^2 = \\frac{(I_2-I_1)(2EI_3-M^2)}{(I_3-I_2)(M^2-2EI_1)}$$`}</span>
        </div>
        <p>
          The variable {`$\\tau$`} is real time {`$t$`} stretched by a constant set by the moments
          and integrals. The modulus {`$k$`} (between 0 and 1) controls how much the elliptic
          functions deviate from ordinary sines and cosines.
        </p>
        <p>
          The body-frame components of {`$\\boldsymbol{\\Omega}$`} are Jacobian elliptic functions:
        </p>
        <div className="lrn-eq">
          <span>{`$$\\Omega_1 = \\sqrt{\\frac{2EI_3-M^2}{I_1(I_3-I_1)}}\\,\\operatorname{cn}\\,\\tau$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$\\Omega_2 = \\sqrt{\\frac{2EI_3-M^2}{I_2(I_3-I_2)}}\\,\\operatorname{sn}\\,\\tau$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$\\Omega_3 = \\sqrt{\\frac{M^2-2EI_1}{I_3(I_3-I_1)}}\\,\\operatorname{dn}\\,\\tau$$`}</span>
        </div>
        <p>
          The functions {`$\\operatorname{cn}, \\operatorname{sn}, \\operatorname{dn}$`} are
          generalizations of cosine, sine, and a third companion. They reduce to ordinary cosine and
          sine when {`$k = 0$`}.
        </p>
        <p>The period of {`$\\boldsymbol{\\Omega}$`} in the body frame is:</p>
        <div className="lrn-eq">
          <span>{`$$T = 4K\\sqrt{\\frac{I_1I_2I_3}{(I_3-I_2)(M^2-2EI_1)}}$$`}</span>
        </div>
        <p>
          Here {`$K = K(k)$`} is the complete elliptic integral of the first kind, the elliptic
          analogue of {`$\\frac{\\pi}{2}$`}.
        </p>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The Euler equations for the torque-free case form a non-linear system in{' '}
            {`$\\Omega_1, \\Omega_2, \\Omega_3$`}.
          </p>
          <p>
            Using the two conservation laws to eliminate two variables reduces the problem to a
            single ODE for the third.
          </p>
          <p>
            That ODE has the standard form{' '}
            {`$\\left(\\frac{d\\Omega}{d\\tau}\\right)^2 = (1-\\Omega^2)(1-k^2\\Omega^2)$`}, whose
            solutions are elliptic functions.
          </p>
        </div>

        <div className="lrn-callout lrn-tip">
          <span className="lrn-callout-label">Incommensurability</span>
          <p>
            The azimuthal angle {`$\\phi(t)$`} is the sum of two periodic terms with periods {`$T$`}{' '}
            and {`$T'$`}. These periods are generally incommensurate. The top{' '}
            <strong>never returns exactly</strong> to its original orientation.
          </p>
        </div>

        <h3>Near Principal Axis: Small Oscillation Frequency</h3>
        <p>For small oscillations near the {`$x_3$`} axis:</p>
        <div className="lrn-eq">
          <span>{`$$\\omega = \\Omega_0\\sqrt{\\left(\\frac{I_3}{I_1}-1\\right)\\left(\\frac{I_3}{I_2}-1\\right)}$$`}</span>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            For the separatrix case {`$M^2 = 2EI_2$`}, the solution approaches {`$x_2$`}{' '}
            asymptotically. Why does the top never actually reach {`$x_2$`} in finite time?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              On the separatrix, {`$\\Omega_2 \\to \\Omega_0\\tanh\\tau$`}. As{' '}
              {`$\\tau \\to \\infty$`}, this approaches {`$\\Omega_0$`} but never reaches it.
              Physically, the system spends longer and longer near the unstable fixed point but
              never settles there.
            </p>
          </details>
        </div>
      </>,

      // ── SECTION 9: Rigid Bodies in Contact ──────────────────────────────────
      <>
        <h2>Rigid Bodies in Contact</h2>

        <p>
          When two rigid bodies touch, they share a constraint at the contact point. Sometimes the
          constraint reduces the number of coordinates you need (holonomic). Sometimes it ties only
          velocities together, leaving every position reachable (non-holonomic). The difference
          changes how you solve the problem.
        </p>

        <div className="lrn-predict">
          <span className="lrn-predict-label">PREDICT</span>
          <p>
            A sphere rolls on a flat floor without slipping. Does the rolling constraint reduce the
            number of independent coordinates, or only restrict their rates?
          </p>
          <details className="lrn-predict-reveal">
            <summary>Check your thinking</summary>
            <p>
              Only the rates. The constraint is non-holonomic: you cannot integrate it to a position
              relation. A sphere can reach any spot on the floor in any orientation by taking the
              right path.
            </p>
          </details>
        </div>

        <p className="lrn-conditional">
          Use whenever two rigid bodies touch, whether they slide or roll.
        </p>

        <h3>Equilibrium Conditions</h3>
        <p>For a static system of rigid bodies in contact:</p>
        <div className="lrn-eq">
          <span>{`$$\\mathbf{F} = \\sum\\mathbf{f} = 0, \\qquad \\mathbf{K} = \\sum\\mathbf{r}\\times\\mathbf{f} = 0$$`}</span>
        </div>
        <p>
          The total external force {`$\\mathbf{F}$`} and the total external torque {`$\\mathbf{K}$`}{' '}
          both vanish. Together they say nothing accelerates and nothing rotates.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Sliding Contact</span>
            <p>The contact point slides freely; only friction couples the bodies.</p>
            <p>The reaction acts normal to the surface.</p>
            <p>Friction acts tangential to the surface.</p>
            <p>Use this model for slippery contact.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Rolling Contact</span>
            <p>
              The contact point cannot slip; the rolling constraint locks linear and angular
              velocity together.
            </p>
            <p>The reaction can point in any direction set by the constraint.</p>
            <p>Rolling friction is neglected.</p>
            <p>Use this model for grippy contact.</p>
          </div>
        </div>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Holonomic Constraints</span>
            <p>Involve only coordinates: {`$f(q_1, q_2, \\ldots) = 0$`}.</p>
            <p>Integrable: they reduce the number of independent coordinates.</p>
            <p>Example: a cylinder rolling along a fixed axis.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Non-holonomic Constraints</span>
            <p>Involve velocities: {`$\\sum_i c_{\\alpha i}\\dot{q}_i = 0$`}.</p>
            <p>Cannot be integrated to coordinate relations.</p>
            <p>
              Example: a sphere rolling on a plane:{' '}
              {`$\\mathbf{V} - a\\boldsymbol{\\Omega}\\times\\mathbf{n} = 0$`}.
            </p>
          </div>
        </div>

        <div className="lrn-elaborate">
          <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
          <p>
            The sphere rolling constraint{' '}
            {`$\\mathbf{V} = a\\boldsymbol{\\Omega}\\times\\mathbf{n}$`} involves velocities{' '}
            {`$\\mathbf{V}$`} and {`$\\boldsymbol{\\Omega}$`}.
          </p>
          <p>
            Integrating would require expressing the sphere's position as a function of its
            orientation alone.
          </p>
          <p>
            But two spheres in different orientations can reach the same position on the plane via
            different paths. The history of the path matters, so no such function exists.
          </p>
        </div>

        <h3>Lagrange Equations with Constraints</h3>
        <p>For non-holonomic constraints, use undetermined multipliers {`$\\lambda_\\alpha$`}:</p>
        <div className="lrn-eq">
          <span>{`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial\\dot{q}_i}\\right) - \\frac{\\partial L}{\\partial q_i} = \\sum_\\alpha \\lambda_\\alpha c_{\\alpha i}$$`}</span>
        </div>
        <p>
          Each constraint of the form {`$\\sum_i c_{\\alpha i}\\dot{q}_i = 0$`} adds one multiplier{' '}
          {`$\\lambda_\\alpha$`}, which physically represents the reaction force along that
          constraint direction.
        </p>

        <h3>d'Alembert's Principle</h3>
        <p>An alternative approach makes the reactions explicit:</p>
        <div className="lrn-eq">
          <span>{`$$\\frac{d\\mathbf{P}}{dt} = \\sum\\mathbf{f}, \\qquad \\frac{d\\mathbf{M}}{dt} = \\sum\\mathbf{r}\\times\\mathbf{f}$$`}</span>
        </div>
        <p>
          The sum on the right includes the contact reactions as separate forces and torques. You
          solve for the reactions alongside the motion.
        </p>

        <div className="lrn-compare">
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">Lagrange Multiplier Method</span>
            <p>Reactions get absorbed into multipliers; the bookkeeping is cleaner.</p>
            <p>Works for holonomic and non-holonomic constraints alike.</p>
            <p>Multipliers carry the reaction forces.</p>
          </div>
          <div className="lrn-compare-col">
            <span className="lrn-compare-title">d'Alembert's Principle</span>
            <p>Reactions show up directly in the equations.</p>
            <p>Useful when you need the reaction forces themselves.</p>
            <p>Same final answer as the Lagrange method.</p>
          </div>
        </div>

        <div className="lrn-self-explain">
          <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
          <p>
            Why do internal forces cancel when you sum Newton's law over all particles of a rigid
            body?
          </p>
          <details className="lrn-self-explain-reveal">
            <summary>Expert explanation</summary>
            <p>
              Newton's third law says every internal force has an equal and opposite partner. When
              you sum over all particles, each pair appears once with each sign, giving zero net
              contribution. Only external forces survive the sum.
            </p>
          </details>
        </div>

        <div className="lrn-faded">
          <div className="lrn-faded-phase">
            <span className="lrn-faded-label">
              COMPLETE EXAMPLE: Solid sphere rolling down an incline
            </span>
            <p>
              A homogeneous sphere of mass {`$\\mu$`} and radius {`$a$`} rolls without slipping down
              a slope at angle {`$\\alpha$`}. Find its centre-of-mass acceleration.
            </p>
            <p>
              Step 1: write d'Alembert's equations with reaction {`$\\mathbf{R}$`} at the contact
              point. Translational along the slope:{' '}
              {`$\\mu\\dot{V} = \\mu g\\sin\\alpha - R_{\\rm fric}$`}.
            </p>
            <p>
              Step 2: rotational about the centre: {`$I\\dot{\\Omega} = a\\,R_{\\rm fric}$`}, where{' '}
              {`$I = \\tfrac{2}{5}\\mu a^2$`} for a sphere.
            </p>
            <p>
              Step 3: apply the rolling constraint {`$V = a\\Omega$`}, which gives{' '}
              {`$\\dot{V} = a\\dot{\\Omega}$`}.
            </p>
            <p>
              Step 4: eliminate {`$R_{\\rm fric}$`} from the rotational equation:{' '}
              {`$R_{\\rm fric} = \\frac{I\\dot{\\Omega}}{a} = \\frac{2}{5}\\mu a\\dot{\\Omega} = \\frac{2}{5}\\mu\\dot{V}$`}
              .
            </p>
            <p>
              Step 5: substitute into the translational equation:{' '}
              {`$\\mu\\dot{V} = \\mu g\\sin\\alpha - \\frac{2}{5}\\mu\\dot{V}$`}, giving{' '}
              {`$\\dot{V} = \\frac{5}{7}g\\sin\\alpha$`}.
            </p>
            <p>
              A frictionless slider would accelerate at {`$g\\sin\\alpha$`}. Rolling steals 2/7 of
              that into spinning the sphere up, leaving {`$\\dot{V} = \\frac{5g\\sin\\alpha}{7}$`}.
            </p>
          </div>
        </div>

        <h3>Spring-Mass Interactive Model</h3>
        <p>
          A spring-mass system oscillates under gravity and the spring's restoring force. Press play
          to watch the motion.
        </p>
        <VizCard id="02.5.7" title="Spring-Mass System">
          <SpringMassLive />
        </VizCard>
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
      a: '(1) Both are in equilibrium (both are critical points of $U$). (2) The bowl bottom is a minimum of $U$, so it is Liapunov stable. (3) The hilltop is a maximum of $U$, so it is unstable. The stability theorem states: strict local minimum of $U$ implies Liapunov stability.'
    },
    {
      q: 'What is Liapunov stability? How does it differ from asymptotic stability?',
      a: '(1) Liapunov stability: for any $\\varepsilon > 0$ and $T > 0$, there exists $\\delta > 0$ such that $|x(0)| < \\delta$ implies $|x(t) - y(t)| < \\varepsilon\\delta$ for $t \\in (0, T)$. (2) Asymptotic stability means trajectories actually return to $x_0$ as $t \\to \\infty$. (3) In conservative mechanical systems, Liapunov stability at potential minima occurs but asymptotic stability never does. Energy is conserved, so the system keeps oscillating.'
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
      q: 'What is parametric resonance? Give one physical example.',
      a: '(1) Parametric resonance is instability caused by periodic variation of a system parameter (not an external driving force). Amplitude grows exponentially. (2) Example: a swing where the rider shifts weight periodically, varying the effective pendulum length $l(t)$. (3) It is strongest when the parameter varies at twice the natural frequency: $\\omega_{parameter} = 2\\omega_0$.'
    },
    {
      q: "What is Hill's equation? What does each symbol represent?",
      a: "(1) Hill's equation: $\\ddot{q} = -\\omega^2(t)q$, where $\\omega(t+T) = \\omega(t)$. (2) $q$ is displacement; $\\omega(t)$ is a periodic function representing the time-varying natural frequency. (3) It models any oscillator whose restoring force coefficient varies periodically."
    },
    {
      q: 'What is the mapping at a period, and how does it determine stability?',
      a: '(1) The mapping at a period $A$ sends initial condition $x(0)$ to $x(T)$ after one full period. (2) A periodic solution is Liapunov stable if and only if the fixed point of $A$ is stable. (3) For area-preserving maps (Hamiltonian systems), the stability criterion is $|\\text{tr}A| < 2$ (stable) vs. $|\\text{tr}A| > 2$ (unstable).'
    },
    {
      q: 'For the area-preserving map $A$, explain from first principles why $|\\text{tr}A| < 2$ gives stability.',
      a: '(1) Area-preserving map has $\\det A = 1$. (2) Eigenvalues satisfy $\\lambda_1\\lambda_2 = 1$ and $\\lambda_1 + \\lambda_2 = \\text{tr}A$. (3) When $|\\text{tr}A| < 2$: discriminant $(\\text{tr}A)^2 - 4 < 0$, so eigenvalues are complex conjugates $\\lambda = e^{\\pm i\\alpha}$ on the unit circle. Trajectories rotate and stay bounded. When $|\\text{tr}A| > 2$: real eigenvalues with product 1, one exceeds 1 (expanding direction). Trajectories grow without bound.'
    },
    {
      q: 'What is strong stability, and why is it important?',
      a: '(1) A system is strongly stable if it is stable and every sufficiently close linear Hamiltonian system is also stable. (2) Regular stability could be destroyed by a tiny change. Strong stability survives all small perturbations. (3) The condition $|\\text{tr}A| < 2$ guarantees strong stability. Points where $|\\text{tr}A| = 2$ are not strongly stable.'
    },
    {
      q: 'The inverted pendulum has $l = 20$ cm, $a = 1$ cm, $g = 980$ cm/s². What is the minimum oscillation frequency for stability?',
      a: '(1) Stability condition: $N \\geq 0.22\\sqrt{\\frac{l}{a}} \\cdot \\omega_0$. (2) $\\omega_0 = \\sqrt{\\frac{980}{20}} \\approx 7$ rad/s. $\\sqrt{\\frac{l}{a}} = \\sqrt{20} \\approx 4.47$. (3) $N \\geq 0.22 \\times 4.47 \\times 7 \\approx 6.9$ rad/s, about 31 oscillations per second.'
    },
    {
      q: 'Write the velocity addition formula for a translating coordinate system.',
      a: "(1) $v = v' + v_0$, where $v$ is absolute velocity, $v'$ is velocity relative to the moving frame, and $v_0$ is the velocity of the frame. (2) This follows from differentiating $x = r + q$. (3) The formula assumes pure translation. If the frame also rotates, a term $[\\omega, q]$ must be added."
    },
    {
      q: 'State the theorem on angular velocity. Why does the angular velocity vector exist?',
      a: '(1) Theorem: there exists a unique vector $\\omega(t)$ such that $\\dot{q} = [\\omega, q]$ for every point $q$ in the rotating body. (2) The operator $A = \\dot{B}B^{-1}$ is skew-symmetric ($A^T + A = 0$). (3) Every skew-symmetric operator on 3D oriented Euclidean space equals cross-product with a fixed vector. Skew-symmetry of $\\dot{B}B^{-1}$ follows from differentiating $BB^T = I$.'
    },
    {
      q: 'Compare the Coriolis force and centrifugal force in a rotating frame.',
      a: '(1) Coriolis force: $2m[\\Omega, \\dot{Q}]$, which depends on velocity. Zero when the body is at rest in the frame. (2) Centrifugal force: $m[\\Omega, [\\Omega, Q]]$, which depends only on position. Always present. Magnitude $|\\Omega|^2 r$ directed outward. (3) Stop moving in the frame and Coriolis vanishes, but centrifugal remains.'
    },
    {
      q: 'Write all three inertial forces that appear in a rotating frame.',
      a: '(1) Force due to angular acceleration: $m[\\dot{\\Omega}, Q]$. (2) Coriolis force: $2m[\\Omega, \\dot{Q}]$. (3) Centrifugal force: $m[\\Omega, [\\Omega, Q]]$ (magnitude $|\\Omega|^2 r$ outward). The full equation: $m\\ddot{Q} = F - m[\\dot{\\Omega},Q] - 2m[\\Omega,\\dot{Q}] - m[\\Omega,[\\Omega,Q]]$.'
    },
    {
      q: "The Foucault pendulum's oscillation plane rotates. What determines the rotation rate?",
      a: "(1) The rotation rate is $-\\Omega_z$, the vertical component of Earth's angular velocity. (2) The Coriolis force couples the $x$ and $y$ components of pendulum motion, slowly rotating the swing plane. (3) At latitude $\\lambda$: $\\Omega_z = |\\Omega|\\sin\\lambda$. At the North Pole, one full rotation per day. At the equator, no rotation."
    },
    {
      q: 'What is the configuration manifold of a free rigid body? What about a rigid body with a fixed point?',
      a: '(1) Free rigid body: $\\mathbb{R}^3 \\times SO(3)$, six-dimensional. Three for center of mass position, three for orientation. (2) Rigid body with fixed point: $SO(3)$, three-dimensional. Position is fixed; only orientation can change. (3) $SO(3)$ arises because three non-collinear body-fixed points determine orientation uniquely.'
    },
    {
      q: 'State the definition of the inertia operator. Why is it symmetric?',
      a: '(1) The inertia operator $A$ is the linear map $\\Omega \\mapsto M$ satisfying $M = A\\Omega$. It is symmetric: $(AX, Y) = (X, AY)$. (2) Symmetry follows from the identity $([a,b],c) = ([c,a],b)$. (3) Physical consequence: a symmetric $A$ has three real orthogonal eigenvectors (principal axes) with real eigenvalues (principal moments).'
    },
    {
      q: 'What are the principal axes of a rigid body? What is the inertia ellipsoid?',
      a: '(1) Principal axes $e_1, e_2, e_3$ are eigenvectors of the inertia operator $A$. Along $e_i$: $Ae_i = I_ie_i$. (2) The inertia ellipsoid is $\\{(A\\Omega,\\Omega) = 1\\}$. Its semi-axis along $e_i$ has length $\\frac{1}{\\sqrt{I_i}}$. (3) Large moment of inertia gives short semi-axis.'
    },
    {
      q: 'Find the principal moments of inertia of a uniform rectangular plate $|x| \\leq a$, $|y| \\leq b$.',
      a: '(1) $I_x = \\frac{ma^2}{3}$. (2) $I_y = \\frac{mb^2}{3}$. (3) $I_z = I_x + I_y = \\frac{m(a^2+b^2)}{3}$ by the perpendicular axis theorem (valid for planar bodies: all mass is in the $xy$-plane, so $z$-contributions add directly).'
    },
    {
      q: "State Steiner's theorem and explain why it always increases the moment of inertia.",
      a: "(1) Steiner's theorem: $I = I_0 + mr^2$, where $I_0$ is the moment about a parallel axis through the center of mass, $m$ is total mass, and $r$ is the distance between the axes. (2) Since $mr^2 \\geq 0$ always, $I \\geq I_0$ always. (3) Moving the axis away makes all mass elements farther on average, increasing $\\sum m_i r_i^2$."
    },
    {
      q: "Write Euler's equations in both vector and component form.",
      a: '(1) Vector form: $\\frac{dM}{dt} = [M, \\Omega]$ (in body frame $K$). (2) Component form: $I_1\\dot{\\Omega}_1 = (I_2-I_3)\\Omega_2\\Omega_3$, $I_2\\dot{\\Omega}_2 = (I_3-I_1)\\Omega_3\\Omega_1$, $I_3\\dot{\\Omega}_3 = (I_1-I_2)\\Omega_1\\Omega_2$. (3) These follow from $\\frac{d\\mathbf{m}}{dt} = 0$ in the fixed frame, transformed to body coordinates.'
    },
    {
      q: "What are the two first integrals of Euler's equations?",
      a: '(1) Energy: $2E = \\frac{M_1^2}{I_1} + \\frac{M_2^2}{I_2} + \\frac{M_3^2}{I_3} = \\text{const}$. (2) Angular momentum magnitude: $M^2 = M_1^2 + M_2^2 + M_3^2 = \\text{const}$. (3) These two constrain the motion to the intersection of an ellipsoid (energy) and a sphere (angular momentum) in $M$-space.'
    },
    {
      q: 'Which rotation axes of a free rigid body are stable? Which is unstable?',
      a: '(1) Rotation about the axis with the largest moment of inertia ($e_1$) is stable. (2) Rotation about the axis with the smallest moment ($e_3$) is also stable. (3) Rotation about the middle axis ($e_2$) is unstable (the tennis racket theorem). Near $e_2$, intersection curves of the energy ellipsoid and momentum sphere form large excursions.'
    },
    {
      q: "State Poinsot's theorem for torque-free rigid body motion.",
      a: '(1) The inertia ellipsoid rolls without slipping on the invariable plane $\\pi$, perpendicular to the fixed angular momentum vector $\\mathbf{m}$. (2) "Rolls without slipping" means the contact point has zero velocity, so it is the instantaneous axis of rotation. (3) The ellipsoid tilts, rolls, and spins on a fixed plane, with $\\omega$ always pointing from the center to the contact point.'
    },
    {
      q: 'What are the three Euler angles? Give the physical meaning of each.',
      a: "(1) Precession angle $\\varphi \\in (0, 2\\pi)$: rotation about the fixed vertical $z$-axis. (2) Nutation angle $\\theta \\in (0, \\pi)$: inclination of the body's symmetry axis from the vertical. (3) Spin angle $\\psi \\in (0, 2\\pi)$: rotation of the body about its own symmetry axis."
    },
    {
      q: 'Write the Lagrangian of the symmetric top ($I_1 = I_2$, center of mass at distance $l$ along $e_3$).',
      a: '(1) $L = \\frac{I_1}{2}(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\theta) + \\frac{I_3}{2}(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)^2 - mgl\\cos\\theta$. (2) The first two terms are kinetic energy: $I_1$ accounts for tilting and precessing; $I_3$ accounts for spinning. (3) The potential $-mgl\\cos\\theta$ is minimized at $\\theta = 0$ (upright sleeping top).'
    },
    {
      q: 'The Lagrangian of a symmetric top has cyclic coordinates $\\varphi$ and $\\psi$. What conserved quantities do they give?',
      a: "(1) $\\frac{\\partial L}{\\partial \\dot{\\varphi}} = M_z$ (angular momentum about the fixed vertical axis) is constant. (2) $\\frac{\\partial L}{\\partial \\dot{\\psi}} = M_3$ (angular momentum about the body's symmetry axis) is constant. (3) These two conservation laws reduce the top from 3 degrees of freedom to 1 degree of freedom in $\\theta$ alone."
    },
    {
      q: 'Write the effective potential for the Lagrange top and explain what it represents.',
      a: '(1) $U_{eff}(\\theta) = \\frac{(M_z - M_3\\cos\\theta)^2}{2I_1\\sin^2\\theta} + mgl\\cos\\theta$. (2) The first term is the rotational kinetic energy barrier from eliminating $\\dot{\\varphi}$. It diverges at $\\theta = 0$ and $\\theta = \\pi$ (unless $M_z = \\pm M_3$). (3) Nutation of $\\theta$ between $\\theta_1$ and $\\theta_2$ is motion in the 1D potential well $U_{eff}(\\theta)$.'
    },
    {
      q: 'State the stability condition for a sleeping top. Interpret it physically.',
      a: "(1) Stable iff $\\omega_3^2 > \\frac{4mglI_1}{I_3^2}$. (2) Left side: rotational kinetic energy scale. Right side: gravitational torque scale. (3) When spin $\\omega_3$ is large enough, the gyroscopic effect overwhelms gravity's attempt to topple the top. Below threshold, gravity wins."
    },
    {
      q: 'Why does a faster-spinning top have slower precession?',
      a: '(1) Precession rate $\\omega_{prec} \\sim \\frac{mgl}{I_3\\omega_3}$ decreases as $\\omega_3$ increases. (2) Gravity creates torque $\\tau = mgl\\sin\\theta$. Angular momentum $M_3 = I_3\\omega_3$ grows with spin. (3) Precession rate equals torque divided by angular momentum: more angular momentum means less angular velocity change per unit time. Precession slows down.'
    },
    {
      q: 'What happens to nutation frequency, nutation amplitude, and precession rate as $\\omega_3 \\to \\infty$?',
      a: '(1) Nutation frequency: $\\omega_{nut} \\sim \\frac{I_3}{I_1}\\omega_3$: grows with $\\omega_3$. (2) Nutation amplitude: $a_{nut} \\sim \\frac{I_1mgl}{I_3^2\\omega_3^2}\\sin\\theta_0$: shrinks as $\\frac{1}{\\omega_3^2}$. (3) Precession rate: $\\omega_{prec} \\sim \\frac{mgl}{I_3\\omega_3}$: shrinks as $\\frac{1}{\\omega_3}$. The top nutates rapidly but with tiny amplitude, and precesses very slowly.'
    },
    {
      q: 'Explain the tennis racket theorem in your own words.',
      a: '(1) A rigid body has three principal axes with moments $I_1 > I_2 > I_3$. Spinning about the largest ($I_1$) or smallest ($I_3$) axis is stable. Spinning about the middle ($I_2$) axis is unstable. (2) Geometric reason: the energy ellipsoid and momentum sphere intersect in closed loops near the stable axes, but in large wandering curves near the middle axis. (3) Test: toss a book and try to spin it about each axis. It tumbles unpredictably about the intermediate axis.'
    },
    {
      q: 'A rigid body has inertia ellipsoid with semi-axes $a_1 = 2$, $a_2 = 3$, $a_3 = 6$. What are the principal moments of inertia?',
      a: '(1) Inertia ellipsoid semi-axis $a_i = \\frac{1}{\\sqrt{I_i}}$, so $I_i = \\frac{1}{a_i^2}$. (2) $I_1 = \\tfrac{1}{4}$, $I_2 = \\tfrac{1}{9}$, $I_3 = \\tfrac{1}{36}$. (3) The axis with the smallest semi-axis ($a_1 = 2$, largest $I_1 = \\tfrac{1}{4}$) has the most mass spread away from it. Rotation about this axis is stable. Rotation about the middle axis ($I_2$) is unstable.'
    },
    {
      q: 'Error detection: A student writes $m\\ddot{Q} = F - 2m[\\Omega, \\dot{Q}]$ for a rotating frame. What is missing?',
      a: '(1) Missing: $-m[\\dot{\\Omega}, Q]$ (force due to angular acceleration) and $-m[\\Omega, [\\Omega, Q]]$ (centrifugal force). (2) The student included only Coriolis but omitted the centrifugal force (independent of velocity) and angular acceleration force (when $\\Omega$ is not constant). (3) Correct equation: $m\\ddot{Q} = F - m[\\dot{\\Omega},Q] - 2m[\\Omega,\\dot{Q}] - m[\\Omega,[\\Omega,Q]]$.'
    },
    {
      q: 'Two coupled pendulums have frequencies $\\omega_1 = 1$ and $\\omega_2 = \\sqrt{1 + 2\\alpha}$ for $\\alpha \\ll 1$. Find the beat period.',
      a: '(1) Beat period $T = \\frac{\\pi}{\\omega_2 - \\omega_1}$. (2) For small $\\alpha$: $\\omega_2 \\approx 1 + \\alpha$, so $\\omega_2 - \\omega_1 \\approx \\alpha$. (3) $T \\approx \\frac{\\pi}{\\alpha}$. As $\\alpha \\to 0$, beat period grows to infinity, so the pendulums exchange energy more and more slowly.'
    },
    {
      q: 'A non-linear oscillator is driven at frequency $\\gamma \\approx \\frac{\\omega_0}{2}$. The amplitude equation gives three solutions. What are they, and which branches are stable?',
      a: 'The three solutions are: (1) $b = 0$, trivial, always stable. (2) The upper branch $b^2 = \\frac{1}{\\kappa}\\left[\\frac{1}{2}\\varepsilon + \\sqrt{(\\frac{\\alpha f}{6m\\omega_0^3})^2 - \\lambda^2}\\right]$, stable. (3) The lower branch (with the minus sign), unstable. The stable branches exist only when $(\\frac{\\alpha f}{6m\\omega_0^3})^2 > \\lambda^2$: the drive must overcome damping. Two stable states then coexist over a range of $\\varepsilon$, producing hysteresis.'
    },
    {
      q: 'What is the effective potential for a particle in a static potential $U$ subject to a rapidly oscillating force $f = f_1\\cos\\omega t + f_2\\sin\\omega t$?',
      a: '$U_{\\rm eff} = U + \\frac{f_1^2 + f_2^2}{4m\\omega^2}$. Step 1: split $x(t) = X(t) + \\xi(t)$ into slow drift and fast oscillation. Step 2: the fast equation $m\\ddot{\\xi} = f$ gives $\\xi = -\\frac{f}{m\\omega^2}$. Step 3: averaging the slow equation over a period, the cross terms vanish and $\\overline{\\xi f} = -\\frac{\\overline{f^2}}{m\\omega^2}$. Step 4: collecting gives $m\\ddot{X} = -\\frac{dU_{\\rm eff}}{dX}$ with $U_{\\rm eff} = U + \\frac{\\overline{f^2}}{2m\\omega^2}$. The extra term is always positive: it equals $\\frac{1}{2}m\\overline{\\dot{\\xi}^2}$, the average kinetic energy of the fast oscillation.'
    },
    {
      q: 'State the parallel axis theorem for the inertia tensor. When does it apply?',
      a: "$I'_{ik} = I_{ik} + \\mu(a^2\\delta_{ik} - a_i a_k)$. It applies when shifting from principal axes through the centre of mass to a parallel set of axes displaced by $\\mathbf{a}$. Step 1: $I_{ik}$ is the centre-of-mass inertia tensor. Step 2: the extra term $\\mu(a^2\\delta_{ik} - a_i a_k)$ comes from the added moment of the total mass $\\mu$ at displacement $\\mathbf{a}$. Step 3: the new origin $O'$ can lie outside the body. This generalises the scalar result $I' = I_{\\rm cm} + \\mu d^2$ to the full tensor."
    },
    {
      q: 'PREDICT: A rapidly oscillating support is added to an inverted pendulum. Under what condition does the inverted position become stable?',
      a: 'The inverted position $\\phi = \\pi$ is stable when $a^2\\gamma^2 > 2gl$. Reasoning: the effective potential is $U_{\\rm eff} = mgl[-\\cos\\phi + \\frac{a^2\\gamma^2}{4gl}\\sin^2\\phi]$. At $\\phi = \\pi$: $\\cos\\pi = -1$ gives a maximum of the static part. But the oscillation term $+\\frac{a^2\\gamma^2}{4gl}\\sin^2\\pi = 0$ at the top. Check the second derivative: $\\frac{d^2U_{\\rm eff}}{d\\phi^2}|_{\\phi=\\pi} = mgl[\\cos\\phi - \\frac{a^2\\gamma^2}{2gl}\\cos(2\\phi)]|_{\\phi=\\pi} = mgl[-1 + \\frac{a^2\\gamma^2}{2gl}]$. This is positive (stable minimum) when $a^2\\gamma^2 > 2gl$.'
    },
    {
      q: 'What is the velocity of a point at position $\\mathbf{r}$ in a rigid body whose centre of mass moves at $\\mathbf{V}$ and rotates at $\\boldsymbol{\\Omega}$?',
      a: '$\\mathbf{v} = \\mathbf{V} + \\boldsymbol{\\Omega}\\times\\mathbf{r}$. This is exact for any rigid body motion. The first term $\\mathbf{V}$ is the translational velocity of the chosen origin. The second term $\\boldsymbol{\\Omega}\\times\\mathbf{r}$ is the rotational contribution: a point at distance $r$ from the axis moves at speed $\\Omega r\\sin\\alpha$ where $\\alpha$ is the angle between $\\boldsymbol{\\Omega}$ and $\\mathbf{r}$. The cross product automatically gives the right direction perpendicular to both $\\boldsymbol{\\Omega}$ and $\\mathbf{r}$.'
    },
    {
      q: 'ELABORATE: Why is the angular velocity $\\boldsymbol{\\Omega}$ the same regardless of which origin you choose for the rigid body?',
      a: "If you shift the origin by $\\mathbf{a}$, the new translational velocity is $\\mathbf{V}' = \\mathbf{V} + \\boldsymbol{\\Omega}\\times\\mathbf{a}$. The angular velocity $\\boldsymbol{\\Omega}$ is unchanged. The reason: $\\boldsymbol{\\Omega}$ describes the rotation of the body as a whole, a property of the rigid body's rotational state, not of any particular point. The velocity field $\\mathbf{v}(\\mathbf{r}) = \\mathbf{V} + \\boldsymbol{\\Omega}\\times\\mathbf{r}$ has the same $\\boldsymbol{\\Omega}$ at every point. Changing the reference point changes only the constant $\\mathbf{V}$."
    },
    {
      q: 'Write down the inertia tensor $I_{ik}$ for a discrete mass distribution. What does the diagonal entry $I_{33}$ represent physically?',
      a: '$I_{ik} = \\sum m(r^2\\delta_{ik} - x_i x_k)$. The diagonal entry $I_{33} = \\sum m(x_1^2 + x_2^2)$ is the moment of inertia about the $x_3$-axis. Step 1: for $i = k = 3$, $\\delta_{33} = 1$ and the subtracted term is $x_3^2$. Step 2: $r^2 - x_3^2 = x_1^2 + x_2^2$ is the squared perpendicular distance from the $x_3$-axis. Step 3: so $I_{33} = \\sum m d_\\perp^2$, the standard moment-of-inertia formula. The off-diagonal entries $I_{ij}$ ($i\\neq j$) are products of inertia: they measure asymmetry and make angular momentum non-parallel to angular velocity.'
    },
    {
      q: 'TRANSFER: An ice skater pulls their arms in. Their moment of inertia drops from $I_1$ to $I_2 < I_1$. Using $M = I\\Omega$, find the new spin rate.',
      a: 'Angular momentum is conserved (no external torque on a frictionless surface): $M = I_1\\Omega_1 = I_2\\Omega_2$. So $\\Omega_2 = \\frac{I_1}{I_2}\\Omega_1$. Step 1: identify the conservation law. No external torque means $\\mathbf{M}$ is constant. Step 2: apply $M = I\\Omega$ in both states. Step 3: solve for $\\Omega_2$. Since $I_2 < I_1$, we get $\\Omega_2 > \\Omega_1$: the skater spins faster. This applies $M_i = I_{ik}\\Omega_k$ in the spherical-top-like case where $\\mathbf{M}\\parallel\\boldsymbol{\\Omega}$.'
    },
    {
      q: 'State the precession rate $\\Omega_{\\rm pr}$ for a free symmetrical top. Which direction does the axis precess about?',
      a: '$\\Omega_{\\rm pr} = \\frac{M}{I_1}$. The symmetry axis precesses about the fixed angular momentum vector $\\mathbf{M}$. Step 1: for $I_1 = I_2$, angular momentum conservation gives $M = I_1\\Omega_{\\rm pr}$. Step 2: the axis of the top, $\\boldsymbol{\\Omega}$, and $\\mathbf{M}$ are coplanar and the plane rotates uniformly. Step 3: the spin about the symmetry axis is $\\Omega_3 = \\frac{M}{I_3}\\cos\\theta$ where $\\theta$ is the nutation angle. This is regular precession: the nutation angle $\\theta$ stays constant for a torque-free top.'
    },
    {
      q: "Write down Euler's equations for a rigid body in its principal-axis frame. Identify the non-linear coupling term.",
      a: 'The three Euler equations: $I_1\\dot{\\Omega}_1 + (I_3-I_2)\\Omega_2\\Omega_3 = K_1$, $I_2\\dot{\\Omega}_2 + (I_1-I_3)\\Omega_3\\Omega_1 = K_2$, $I_3\\dot{\\Omega}_3 + (I_2-I_1)\\Omega_1\\Omega_2 = K_3$. The non-linear coupling terms $(I_j-I_k)\\Omega_j\\Omega_k$ are products of two angular velocity components. They arise because the body-fixed axes rotate, adding $\\boldsymbol{\\Omega}\\times\\mathbf{M}$ to the rate of change. Without them (as in the fixed frame), the equations would reduce to $I_i\\dot{\\Omega}_i = K_i$, but that ignores the rotation of the reference frame.'
    },
    {
      q: 'PREDICT: For a torque-free asymmetrical top with $I_3 > I_2 > I_1$, which rotation axis is unstable and why?',
      a: 'Rotation about $x_2$ (intermediate moment $I_2$) is unstable. Reasoning: perturb the rotation slightly, so $\\Omega_2 \\approx \\Omega_0$ and $\\Omega_1, \\Omega_3 \\approx 0^+$. The linearised Euler equations give $\\dot{\\Omega}_1 \\approx [\\frac{I_3-I_2}{I_1}]\\Omega_0\\Omega_3$ and $\\dot{\\Omega}_3 \\approx [\\frac{I_2-I_1}{I_3}]\\Omega_0\\Omega_1$. Multiplying gives $\\ddot{\\Omega}_1 = [\\frac{(I_3-I_2)(I_2-I_1)}{I_1 I_3}]\\Omega_0^2\\Omega_1$. Both factors have the same sign, so the coefficient is positive, and the perturbation grows exponentially: instability. For $x_1$ or $x_3$, one factor flips sign and the perturbation oscillates instead.'
    },
    {
      q: "TRANSFER: A homogeneous sphere rolls on a horizontal plane under an external horizontal force $\\mathbf{F}$. Using d'Alembert's principle, set up the equations of motion.",
      a: "Two equations govern the motion. Translational: $\\mu\\dot{\\mathbf{V}} = \\mathbf{F} + \\mathbf{R}$ where $\\mathbf{R}$ is the reaction at the contact point. Rotational: $I\\dot{\\boldsymbol{\\Omega}} = \\mathbf{r}_{\\rm contact}\\times\\mathbf{R}$ where $I = \\frac{2}{5}\\mu R^2$ for a sphere. Rolling constraint: $\\mathbf{V} = R\\boldsymbol{\\Omega}\\times\\hat{\\mathbf{n}}$ (velocity of contact point is zero). Step 1: write the two d'Alembert equations with reaction $\\mathbf{R}$ explicit. Step 2: apply the rolling constraint to eliminate $\\mathbf{R}$ or $\\boldsymbol{\\Omega}$. Step 3: solve for $\\dot{\\mathbf{V}}$ in terms of $\\mathbf{F}$. The result: $\\dot{\\mathbf{V}} = \\frac{\\mathbf{F}}{\\mu + \\frac{I}{R^2}} = \\frac{\\mathbf{F}}{\\frac{7}{5}\\mu}$. Rolling effectively raises the inertia by $\\frac{I}{R^2}$."
    },
    {
      q: 'ELABORATE: Why does the effective potential $U_{\\rm eff} = U + \\frac{\\overline{f^2}}{2m\\omega^2}$ always have $U_{\\rm eff} \\geq U$?',
      a: 'The extra term $\\frac{\\overline{f^2}}{2m\\omega^2}$ is always non-negative. Step 1: $f^2$ is a squared quantity, so $f^2 \\geq 0$ at every instant. Step 2: time-averaging preserves this: $\\overline{f^2} \\geq 0$. Step 3: dividing by $2m\\omega^2 > 0$ keeps the sign. Therefore $U_{\\rm eff} \\geq U$ everywhere. The physical meaning: the rapidly oscillating motion stores extra kinetic energy (on average). This stored energy appears as an effective barrier. It can raise the energy at local maxima of $U$ more than at the surrounding region, turning unstable equilibria into stable ones.'
    },
    {
      q: 'What are the Eulerian angles and what physical motion does each describe?',
      a: "Three angles parameterise rigid body orientation completely. Nutation $\\theta$: the angle between the fixed $Z$-axis and the body's symmetry axis $x_3$. This measures how far the top is tilted. Precession $\\phi$: the angle of the line of nodes $ON$ about $Z$. This describes the rotation of the tilt direction around the vertical. Spin $\\psi$: the angle of the body axis $x_1$ relative to the line of nodes. This is the body's own rotation about its symmetry axis. Together they cover all possible orientations: $\\theta \\in [0,\\pi]$, $\\phi \\in [0, 2\\pi)$, $\\psi \\in [0, 2\\pi)$."
    },
    {
      q: "SELF-EXPLAIN: In the body-frame equation $\\frac{d'\\mathbf{A}}{dt} + \\boldsymbol{\\Omega}\\times\\mathbf{A} = \\frac{d\\mathbf{A}}{dt}$, why does $\\boldsymbol{\\Omega}\\times\\mathbf{A}$ appear?",
      a: 'The body-frame basis vectors rotate with the body. Any vector $\\mathbf{A}$ expressed in the body frame has components that appear constant if the body stays still relative to itself. But in the fixed frame, those basis vectors are changing. Step 1: write $\\mathbf{A} = A_i \\mathbf{e}_i$ where $\\mathbf{e}_i$ are body-frame unit vectors. Step 2: differentiate in the fixed frame: $\\frac{d\\mathbf{A}}{dt} = \\dot{A}_i\\mathbf{e}_i + A_i\\dot{\\mathbf{e}}_i$. Step 3: rotating unit vectors satisfy $\\dot{\\mathbf{e}}_i = \\boldsymbol{\\Omega}\\times\\mathbf{e}_i$. Step 4: the second sum gives $A_i(\\boldsymbol{\\Omega}\\times\\mathbf{e}_i) = \\boldsymbol{\\Omega}\\times(A_i\\mathbf{e}_i) = \\boldsymbol{\\Omega}\\times\\mathbf{A}$.'
    },
    {
      q: 'TRANSFER: A thin rod of mass $\\mu$ and length $l$ hangs as a compound pendulum, pivoting about one end. Find the small oscillation frequency using the inertia tensor result.',
      a: 'Use the compound pendulum formula: $\\omega^2 = \\frac{\\mu g l_{\\rm cm}}{I_{\\rm pivot}}$. Step 1: centre of mass is at $\\frac{l}{2}$ from the pivot, so $l_{\\rm cm} = \\frac{l}{2}$. Step 2: moment of inertia about the pivot by parallel axis theorem: $I_{\\rm pivot} = I_{\\rm cm} + \\mu(\\frac{l}{2})^2 = \\frac{\\mu l^2}{12} + \\frac{\\mu l^2}{4} = \\frac{\\mu l^2}{3}$. Step 3: substitute: $\\omega^2 = \\frac{\\mu g\\frac{l}{2}}{\\left(\\frac{\\mu l^2}{3}\\right)} = \\frac{3g}{2l}$. So $\\omega = \\sqrt{\\frac{3g}{2l}}$, larger than the simple pendulum $\\sqrt{\\frac{g}{l}}$. The rod is stiffer because its mass is spread out, not concentrated at the tip.'
    },
    {
      q: 'Compare sliding contact and rolling contact for two rigid bodies in terms of (a) relative velocity at contact, (b) direction of reaction force.',
      a: '(a) Relative velocity at contact: in sliding contact, the surfaces move past each other at the contact point. In rolling contact, the relative velocity at the contact point is zero (no slipping). (b) Reaction force direction: in sliding, the reaction is normal to the contact surface and friction is a separate tangential force. In rolling, the reaction can point in any direction (it acts like a combined normal-and-friction force without slipping). The rolling condition $\\mathbf{V} - a\\boldsymbol{\\Omega}\\times\\mathbf{n} = 0$ enforces zero relative velocity, which sets what reaction is needed to sustain the constraint.'
    },
    {
      q: 'ERROR DETECTION: A student says "Since $\\boldsymbol{\\Omega}$ is the same for any origin, $\\mathbf{V}$ must also be origin-independent." What is wrong?',
      a: "This is wrong. The translational velocity $\\mathbf{V}$ depends on the chosen origin; $\\boldsymbol{\\Omega}$ does not. Shifting origin by $\\mathbf{a}$ gives $\\mathbf{V}' = \\mathbf{V} + \\boldsymbol{\\Omega}\\times\\mathbf{a}$. Only when $\\boldsymbol{\\Omega} = 0$ (pure translation) or when $\\mathbf{a}$ is parallel to $\\boldsymbol{\\Omega}$ does $\\mathbf{V}$ stay the same. In general, different reference points see different translational velocities. That is exactly why an instantaneous axis of rotation (the origin where $\\mathbf{V}' = 0$) always exists when $\\mathbf{V}\\perp\\boldsymbol{\\Omega}$."
    },
    {
      q: 'What is the period of $\\boldsymbol{\\Omega}$ in the body frame for the asymmetrical top? What is $K$ in the formula?',
      a: '$T = 4K\\sqrt{\\frac{I_1I_2I_3}{[(I_3-I_2)(M^2-2EI_1)]}}$. Here $K = K(k)$ is the complete elliptic integral of the first kind, $K = \\frac{\\int_0^{\\frac{\\pi}{2}} d\\theta}{\\sqrt{1-k^2\\sin^2\\theta}}$, evaluated at the modulus $k^2 = \\frac{(I_2-I_1)(2EI_3-M^2)}{[(I_3-I_2)(M^2-2EI_1)]}$. The elliptic functions $\\operatorname{cn}\\tau$, $\\operatorname{sn}\\tau$, $\\operatorname{dn}\\tau$ all have period $4K$ in $\\tau$. The physical interpretation: $T$ is the time for $\\boldsymbol{\\Omega}$ to complete one loop in the body frame. It grows without bound as $k\\to 1$ (approaching the separatrix through $x_2$).'
    },
    {
      q: 'ELABORATE: Why are rotations about the intermediate axis $x_2$ of an asymmetrical top always unstable?',
      a: "The polhode through $x_2$ is a separatrix, not a closed curve. Any perturbation moves the system onto a polhode that swings away from $x_2$ and loops around $x_1$ or $x_3$ instead. Mathematically: linearise Euler's equations about $\\Omega_2 = \\Omega_0$, $\\Omega_1 = \\Omega_3 = 0$. The eigenvalues of the system are $\\pm\\Omega_0\\sqrt{\\frac{(I_3-I_2)(I_2-I_1)}{I_1 I_3}}$. Since both factors $(I_3-I_2) > 0$ and $(I_2-I_1) > 0$ (by assumption $I_3 > I_2 > I_1$), the square root is real, and the positive eigenvalue grows exponentially. For the other two axes, one of the factors is negative, giving imaginary eigenvalues (oscillation, not growth)."
    },
    {
      q: 'TRANSFER: You want to stabilise an inverted broom held at its base. You vibrate the base vertically at frequency $\\gamma$ and amplitude $a$. What is the minimum $\\gamma$ needed?',
      a: 'The condition is $a^2\\gamma^2 > 2gl$ where $l$ is the distance from pivot to centre of mass. Rearranging: $\\gamma > \\frac{\\sqrt{2gl}}{a}$. Step 1: model the broom as a uniform rod, so $l = \\frac{L}{2}$ where $L$ is the length. Step 2: the effective potential for vertical oscillation is $U_{\\rm eff} = Mgl[-\\cos\\phi + \\frac{a^2\\gamma^2}{4gl}\\sin^2\\phi]$. Step 3: the inverted position $\\phi = \\pi$ is stable when $U_{\\rm eff}$ has a minimum there, requiring $\\frac{a^2\\gamma^2}{4gl} > \\tfrac{1}{2}$, or $a^2\\gamma^2 > 2gl$. At 1 m length and 1 cm amplitude: $\\gamma > \\frac{\\sqrt{2\\times9.8\\times0.5}}{0.01} \\approx 313$ rad/s, very fast.'
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Oscillations (Part II)',
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
                <td>Liapunov stable</td>
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
                <td>Liapunov stable, NOT asymptotically stable</td>
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
      </>,
      <>
        <h2>Parametric Resonance</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Hill's equation</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\ddot{q} = -\\omega^2(t)q$`}, {`$\\omega(t+T) = \\omega(t)$`}
            </p>
            <p>
              <strong>Use when:</strong> Model any oscillator with periodically varying restoring
              coefficient.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Mathieu's equation</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\ddot{x} = -\\omega^2(1+\\varepsilon a(t))x$`}, {`$\\varepsilon \\ll 1$`},{' '}
              {`$a(t+2\\pi) = a(t)$`}
            </p>
            <p>
              <strong>Use when:</strong> Analyze parametric resonance for weak periodic
              perturbation.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            Stability criterion (area-preserving plane map)
          </span>
          <div className="lrn-definition-desc">
            <p>
              Stable if {`$|\\text{tr}A| < 2$`}; unstable if {`$|\\text{tr}A| > 2$`}.
            </p>
            <p>
              <strong>Use when:</strong> Decide stability of any 2D Hamiltonian periodic system.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Parametric resonance boundary</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\omega \\approx k \\pm \\frac{\\varepsilon^2}{\\omega^2} + o(\\varepsilon^2)$`}{' '}
              for integer {`$k$`}
            </p>
            <p>
              <strong>Use when:</strong> Locate instability tongues in parameter space for
              Mathieu-type systems.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Inverted pendulum stability (practical)</span>
          <div className="lrn-definition-desc">
            <p>{`$N \\geq 0.22\\sqrt{\\frac{l}{a}}\\cdot\\omega_0$`}</p>
            <p>
              <strong>Use when:</strong> Estimate the minimum pivot-shake frequency to keep an
              inverted pendulum upright.
            </p>
          </div>
        </div>

        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Effect on parametric resonance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {`$\\frac{\\omega_{param}}{\\omega_0} = \\frac{k}{2}$`}, {`$k=1$`}
                </td>
                <td>Strongest instability region (widest, fastest growth)</td>
              </tr>
              <tr>
                <td>{`$k = 2, 3, \\ldots$`}</td>
                <td>Narrower, weaker instability regions</td>
              </tr>
              <tr>
                <td>Small {`$\\varepsilon$`}</td>
                <td>Instability region shrinks; friction creates threshold {`$\\varepsilon_k$`}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Moving Coordinate Systems</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Velocity addition (translation)</span>
          <div className="lrn-definition-desc">
            <p>{`$v = v' + v_0$`}: absolute velocity equals relative plus frame velocity.</p>
            <p>
              <strong>Use when:</strong> Convert velocities between inertial and translating frames.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Angular velocity formula</span>
          <div className="lrn-definition-desc">
            <p>{`$\\dot{q} = [\\omega, q]$`}: velocity of any point in a rotating body.</p>
            <p>
              <strong>Use when:</strong> Get the velocity of any point fixed in a rotating rigid
              body.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Equation of motion in rotating frame</span>
          <div className="lrn-definition-desc">
            <p>{`$m\\ddot{Q} = F - m[\\dot{\\Omega},Q] - 2m[\\Omega,\\dot{Q}] - m[\\Omega,[\\Omega,Q]]$`}</p>
            <p>
              <strong>Use when:</strong> Write Newton's law in any rotating coordinate system with
              three inertial forces.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Foucault pendulum rotation rate</span>
          <div className="lrn-definition-desc">
            <p>
              {`$-\\Omega_z = -|\\Omega|\\sin\\lambda$`} at latitude {`$\\lambda$`}.
            </p>
            <p>
              <strong>Use when:</strong> Predict the rotation rate of the swing plane at any
              latitude.
            </p>
          </div>
        </div>

        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Inertial force</th>
                <th>Formula</th>
                <th>Vanishes when</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Angular acceleration</td>
                <td>{`$m[\\dot{\\Omega},Q]$`}</td>
                <td>{`$\\Omega$`} constant</td>
              </tr>
              <tr>
                <td>Coriolis</td>
                <td>{`$2m[\\Omega,\\dot{Q}]$`}</td>
                <td>Body at rest in frame</td>
              </tr>
              <tr>
                <td>Centrifugal</td>
                <td>{`$m[\\Omega,[\\Omega,Q]]$`}</td>
                <td>On rotation axis ({`$Q = 0$`})</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>,
      <>
        <h2>Rigid Body Mechanics</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Angular momentum operator</span>
          <div className="lrn-definition-desc">
            <p>{`$M = A\\Omega$`}</p>
            <p>
              <strong>Use when:</strong> Get angular momentum from angular velocity for a known
              rigid body.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Kinetic energy via inertia operator</span>
          <div className="lrn-definition-desc">
            <p>{`$T = \\frac{1}{2}(A\\Omega,\\Omega) = \\frac{1}{2}(M,\\Omega)$`}</p>
            <p>
              <strong>Use when:</strong> Compute rotational kinetic energy from angular velocity in
              any frame.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Kinetic energy in principal axes</span>
          <div className="lrn-definition-desc">
            <p>{`$T = \\frac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2)$`}</p>
            <p>
              <strong>Use when:</strong> Compute rotational kinetic energy when working in body
              principal axes.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Moment of inertia (discrete / continuous)</span>
          <div className="lrn-definition-desc">
            <p>{`$I_e = \\sum_i m_i r_i^2 = \\iiint \\rho(Q)r^2(Q)\\,dQ$`}</p>
            <p>
              <strong>Use when:</strong> Compute the moment of any rigid body about a chosen axis.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Inertia ellipsoid</span>
          <div className="lrn-definition-desc">
            <p>
              {`$I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2 = 1$`} in {`$\\Omega$`}-space.
              Semi-axes {`$= \\frac{1}{\\sqrt{I_i}}$`}.
            </p>
            <p>
              <strong>Use when:</strong> Visualize directional dependence of moment of inertia for
              any rigid body.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Steiner's theorem (parallel axis)</span>
          <div className="lrn-definition-desc">
            <p>{`$I = I_0 + mr^2$`}</p>
            <p>
              <strong>Use when:</strong> Get moment about any parallel axis from moment about the
              center-of-mass axis.
            </p>
          </div>
        </div>

        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Body</th>
                <th>Principal moments</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Uniform rectangular plate {`$|x|\\leq a$`}, {`$|y|\\leq b$`}
                </td>
                <td>
                  {`$I_x=\\frac{ma^2}{3}$`}, {`$I_y=\\frac{mb^2}{3}$`},{' '}
                  {`$I_z=\\frac{m(a^2+b^2)}{3}$`}
                </td>
                <td>{`$I_z = I_x + I_y$`} (perpendicular axis theorem)</td>
              </tr>
              <tr>
                <td>Equilateral triangle, 3 point masses {`$m$`} at vertices</td>
                <td>{`$I_1 = I_2$`} (axisymmetric)</td>
                <td>Inertia ellipsoid is ellipsoid of revolution</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Euler's Equations</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Euler equations (vector)</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\frac{dM}{dt} = [M, \\Omega]$`}: torque-free rigid body motion in body frame{' '}
              {`$K$`}.
            </p>
            <p>
              <strong>Use when:</strong> Evolve angular momentum of a torque-free rigid body in body
              coordinates.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Euler equations (components)</span>
          <div className="lrn-definition-desc">
            <p>
              {`$I_1\\dot{\\Omega}_1 = (I_2-I_3)\\Omega_2\\Omega_3$`},{' '}
              {`$I_2\\dot{\\Omega}_2 = (I_3-I_1)\\Omega_3\\Omega_1$`},{' '}
              {`$I_3\\dot{\\Omega}_3 = (I_1-I_2)\\Omega_1\\Omega_2$`}
            </p>
            <p>
              <strong>Use when:</strong> Track each principal-axis angular velocity of a free rigid
              body in time.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">First integrals</span>
          <div className="lrn-definition-desc">
            <p>
              {`$2E = \\frac{M_1^2}{I_1} + \\frac{M_2^2}{I_2} + \\frac{M_3^2}{I_3}$`} and{' '}
              {`$M^2 = M_1^2 + M_2^2 + M_3^2$`}
            </p>
            <p>
              <strong>Use when:</strong> Conserve energy and angular-momentum magnitude for any free
              rigid body.
            </p>
          </div>
        </div>

        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Rotation axis</th>
                <th>Stability</th>
                <th>Geometric picture on ellipsoid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {`$e_1$`} (largest {`$I$`})
                </td>
                <td>Stable</td>
                <td>Small closed loops near pole</td>
              </tr>
              <tr>
                <td>
                  {`$e_2$`} (middle {`$I$`})
                </td>
                <td>Unstable</td>
                <td>Large wandering curves (separatrix)</td>
              </tr>
              <tr>
                <td>
                  {`$e_3$`} (smallest {`$I$`})
                </td>
                <td>Stable</td>
                <td>Small closed loops near pole</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Poinsot's Description</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Poinsot rolling condition</span>
          <div className="lrn-definition-desc">
            <p>
              Inertia ellipsoid rolls without slipping on invariable plane{' '}
              {`$\\pi \\perp \\mathbf{m}$`}.
            </p>
            <p>
              <strong>Use when:</strong> Visualize torque-free rotation as rolling of the inertia
              ellipsoid.
            </p>
          </div>
        </div>

        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Object</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Invariable plane {`$\\pi$`}</td>
                <td>Fixed plane perpendicular to constant angular momentum {`$\\mathbf{m}$`}</td>
              </tr>
              <tr>
                <td>Contact point</td>
                <td>
                  Tip of angular velocity {`$\\Omega$`} on inertia ellipsoid; has zero velocity
                </td>
              </tr>
              <tr>
                <td>Herpolhode</td>
                <td>Curve traced by contact point on invariable plane (in space)</td>
              </tr>
              <tr>
                <td>Polhode</td>
                <td>Curve traced by contact point on inertia ellipsoid (in body)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Euler Angles and Lagrange's Top</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Euler angles range</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\varphi \\in (0, 2\\pi)$`}, {`$\\theta \\in (0, \\pi)$`},{' '}
              {`$\\psi \\in (0, 2\\pi)$`}. Local coordinates on {`$SO(3)$`}; gimbal lock occurs at{' '}
              {`$\\theta = 0, \\pi$`}.
            </p>
            <p>
              <strong>Use when:</strong> Parameterize any rigid-body orientation in 3D, away from
              gimbal lock.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Symmetric top Lagrangian</span>
          <div className="lrn-definition-desc">
            <p>{`$L = \\frac{I_1}{2}(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\theta) + \\frac{I_3}{2}(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)^2 - mgl\\cos\\theta$`}</p>
            <p>
              <strong>Use when:</strong> Set up the Lagrangian of a heavy symmetric top fixed at one
              point.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Conserved angular momenta</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\frac{\\partial L}{\\partial \\dot{\\varphi}} = M_z = \\text{const}$`},{' '}
              {`$\\frac{\\partial L}{\\partial \\dot{\\psi}} = M_3 = \\text{const}$`}
            </p>
            <p>
              <strong>Use when:</strong> Use cyclic Euler angles to get two integrals of the
              symmetric top.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Effective potential</span>
          <div className="lrn-definition-desc">
            <p>{`$U_{eff}(\\theta) = \\frac{(M_z - M_3\\cos\\theta)^2}{2I_1\\sin^2\\theta} + mgl\\cos\\theta$`}</p>
            <p>
              <strong>Use when:</strong> Reduce the symmetric top to a 1D problem in nutation angle
              theta.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Precession rate</span>
          <div className="lrn-definition-desc">
            <p>{`$\\dot{\\varphi} = \\frac{M_z - M_3\\cos\\theta}{I_1\\sin^2\\theta}$`}</p>
            <p>
              <strong>Use when:</strong> Compute the azimuthal sweep rate of the symmetric top axis
              at any tilt.
            </p>
          </div>
        </div>

        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Angle</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\varphi$`}</td>
                <td>Precession</td>
                <td>Azimuthal sweep of axis around vertical</td>
              </tr>
              <tr>
                <td>{`$\\theta$`}</td>
                <td>Nutation</td>
                <td>
                  Tilt of body axis from vertical; oscillates between {`$\\theta_1$`} and{' '}
                  {`$\\theta_2$`}
                </td>
              </tr>
              <tr>
                <td>{`$\\psi$`}</td>
                <td>Spin</td>
                <td>Rotation of body about its own axis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Sleeping and Fast Tops</h2>

        <div className="lrn-definition">
          <span className="lrn-definition-term">Sleeping top stability condition</span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\omega_3^2 > \\frac{4mglI_1}{I_3^2}$`}: whether a vertically spinning top (
              {`$\\theta = 0$`}) remains upright.
            </p>
            <p>
              <strong>Use when:</strong> Decide whether a vertical spinning top stays upright or
              topples.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">Nutation frequency (no gravity)</span>
          <div className="lrn-definition-desc">
            <p>{`$\\omega_{nut} = \\frac{I_3\\omega_3}{I_1}$`}</p>
            <p>
              <strong>Use when:</strong> Predict the wobble frequency of a torque-free symmetric
              top.
            </p>
          </div>
        </div>
        <div className="lrn-definition">
          <span className="lrn-definition-term">
            Fast top asymptotics ({`$\\omega_3 \\to \\infty$`})
          </span>
          <div className="lrn-definition-desc">
            <p>
              {`$\\omega_{nut} \\sim \\frac{I_3}{I_1}\\omega_3$`},{' '}
              {`$a_{nut} \\sim \\frac{I_1 mgl}{I_3^2\\omega_3^2}\\sin\\theta_0$`},{' '}
              {`$\\omega_{prec} \\sim \\frac{mgl}{I_3\\omega_3}$`}
            </p>
            <p>
              <strong>Use when:</strong> Estimate nutation and precession of a rapidly spinning top
              under gravity.
            </p>
          </div>
        </div>

        <div className="lrn-table">
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Fast top ({`$\\omega_3$`} large)</th>
                <th>Slow top</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nutation frequency</td>
                <td>{`$\\propto \\omega_3$`} (grows)</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Nutation amplitude</td>
                <td>{`$\\propto \\frac{1}{\\omega_3^2}$`} (shrinks)</td>
                <td>Large</td>
              </tr>
              <tr>
                <td>Precession rate</td>
                <td>{`$\\propto \\frac{1}{\\omega_3}$`} (shrinks)</td>
                <td>Fast, irregular</td>
              </tr>
              <tr>
                <td>Dominant effect</td>
                <td>Gyroscopic stabilization</td>
                <td>Gravity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>,
      <>
        <h2>Subharmonic Resonance ({`$\\gamma \\approx \\frac{\\omega_0}{2}$`})</h2>
        <p>
          <strong>Use when:</strong> Non-linear oscillator driven near half its natural frequency.
        </p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$b^2\\left[\\left(\\tfrac{1}{2}\\varepsilon - \\kappa b^2\\right)^2 + \\lambda^2\\right] = \\frac{\\alpha^2 f^2}{36m^2\\omega_0^6}\\,b^2$$`}</span>
        </div>
        <p>Non-trivial amplitude solutions ({`$\\kappa > 0$`}):</p>
        <div className="lrn-eq">
          <span>{`$$b^2 = \\frac{1}{\\kappa}\\left[\\frac{\\varepsilon}{2} \\pm \\sqrt{\\left(\\frac{\\alpha f}{6m\\omega_0^3}\\right)^2 - \\lambda^2}\\right]$$`}</span>
        </div>
        <ul className="lrn-list">
          <li>Upper branch (+): stable</li>
          <li>Lower branch (−): unstable</li>
          <li>{`$b = 0$`}: always stable</li>
        </ul>

        <h2>Rapidly Oscillating Field: Effective Potential</h2>
        <p>
          <strong>Use when:</strong> System with fast oscillating force{' '}
          {`$\\omega \\gg \\frac{1}{T}$`} added to a static potential.
        </p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$U_{\\rm eff} = U + \\frac{f_1^2 + f_2^2}{4m\\omega^2}$$`}</span>
        </div>
        <ul className="lrn-list">
          <li>Decompose: {`$x = X + \\xi$`} (slow + fast)</li>
          <li>Fast solution: {`$\\xi = -\\frac{f}{m\\omega^2}$`}</li>
          <li>Slow equation: {`$m\\ddot{X} = -\\frac{dU_{\\rm eff}}{dX}$`}</li>
          <li>
            Many DOF:{' '}
            {`$U_{\\rm eff} = U + \\frac{1}{2\\omega^2}\\sum_{i,k}a^{-1}{}_{ik}\\overline{f_i f_k}$`}
          </li>
        </ul>
        <p>
          Kapitza pendulum (vertical drive): stable at {`$\\phi = \\pi$`} when{' '}
          {`$a^2\\gamma^2 > 2gl$`}.
        </p>

        <h2>Rigid Body Kinematics</h2>
        <p>
          <strong>Use when:</strong> Velocity of any point in a moving rigid body.
        </p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$\\mathbf{v} = \\mathbf{V} + \\boldsymbol{\\Omega}\\times\\mathbf{r}$$`}</span>
        </div>
        <ul className="lrn-list">
          <li>{`$\\boldsymbol{\\Omega}$`} is independent of origin choice</li>
          <li>
            Shifting origin by {`$\\mathbf{a}$`}:{' '}
            {`$\\mathbf{V}' = \\mathbf{V} + \\boldsymbol{\\Omega}\\times\\mathbf{a}$`}
          </li>
          <li>
            Instantaneous axis: point where {`$\\mathbf{V}' = 0$`} when{' '}
            {`$\\mathbf{V}\\perp\\boldsymbol{\\Omega}$`}
          </li>
        </ul>

        <h2>Inertia Tensor</h2>
        <p>
          <strong>Use when:</strong> Rotational kinetic energy, angular momentum, equations of
          motion for rigid bodies.
        </p>
        <div className="lrn-eq lrn-eq-display">
          <span>{`$$I_{ik} = \\sum m\\left(r^2\\delta_{ik} - x_i x_k\\right) = \\int\\rho\\left(r^2\\delta_{ik} - x_i x_k\\right)\\,dV$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$T = \\tfrac{1}{2}\\mu V^2 + \\tfrac{1}{2}I_{ik}\\Omega_i\\Omega_k$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$T_{\\rm rot} = \\tfrac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2)\\quad\\text{(principal axes)}$$`}</span>
        </div>
        <ul className="lrn-list">
          <li>Symmetric: {`$I_{ik} = I_{ki}$`}</li>
          <li>Inequality: {`$I_1 + I_2 \\geq I_3$`}</li>
          <li>Perpendicular axis (coplanar body): {`$I_3 = I_1 + I_2$`}</li>
          <li>Parallel axis: {`$I'_{ik} = I_{ik} + \\mu(a^2\\delta_{ik} - a_i a_k)$`}</li>
        </ul>

        <h2>Angular Momentum</h2>
        <p>
          <strong>Use when:</strong> Relating angular velocity to angular momentum; precession
          analysis.
        </p>
        <div className="lrn-eq">
          <span>{`$$M_i = I_{ik}\\Omega_k, \\quad M_1 = I_1\\Omega_1,\\; M_2 = I_2\\Omega_2,\\; M_3 = I_3\\Omega_3$$`}</span>
        </div>
        <ul className="lrn-list">
          <li>
            {`$\\mathbf{M} \\parallel \\boldsymbol{\\Omega}$`} only for spherical top or rotation
            about principal axis
          </li>
          <li>Symmetrical top precession rate: {`$\\Omega_{\\rm pr} = \\frac{M}{I_1}$`}</li>
          <li>Symmetry axis spin: {`$\\Omega_3 = \\frac{M\\cos\\theta}{I_3}$`}</li>
        </ul>

        <h2>Equations of Motion</h2>
        <p>
          <strong>Use when:</strong> Forces and torques on a rigid body.
        </p>
        <div className="lrn-eq">
          <span>{`$$\\frac{d\\mathbf{P}}{dt} = \\mathbf{F}, \\qquad \\frac{d\\mathbf{M}}{dt} = \\mathbf{K} = \\sum\\mathbf{r}\\times\\mathbf{f}$$`}</span>
        </div>
        <ul className="lrn-list">
          <li>
            Torque under origin shift:{' '}
            {`$\\mathbf{K} = \\mathbf{K}' + \\mathbf{a}\\times\\mathbf{F}$`}
          </li>
          <li>
            Torque from potential:{' '}
            {`$\\mathbf{K} = -\\frac{\\partial U}{\\partial\\boldsymbol{\\phi}}$`}
          </li>
          <li>Centre of gravity: {`$\\mathbf{r}_0 = \\frac{\\sum e\\mathbf{r}}{\\sum e}$`}</li>
        </ul>

        <h2>Eulerian Angles</h2>
        <p>
          <strong>Use when:</strong> Lagrangian or equations of motion for spinning tops.
        </p>
        <ul className="lrn-list">
          <li>{`$\\theta$`}: nutation (tilt of symmetry axis from vertical)</li>
          <li>{`$\\phi$`}: precession (rotation of tilt direction around vertical)</li>
          <li>{`$\\psi$`}: spin (body rotation about its own axis)</li>
        </ul>
        <div className="lrn-eq">
          <span>{`$$T_{\\rm rot} = \\tfrac{1}{2}I_1(\\dot{\\phi}^2\\sin^2\\theta+\\dot{\\theta}^2) + \\tfrac{1}{2}I_3(\\dot{\\phi}\\cos\\theta+\\dot{\\psi})^2$$`}</span>
        </div>
        <p>
          Free symmetrical top: {`$\\dot{\\theta}=0$`}, {`$I_1\\dot{\\phi}=M$`},{' '}
          {`$I_3(\\dot{\\phi}\\cos\\theta+\\dot{\\psi})=M\\cos\\theta$`}.
        </p>
        <p>Stability for fast vertical spin: {`$M_3^2 > 4I_1'\\mu gl$`}.</p>

        <h2>Euler's Equations</h2>
        <p>
          <strong>Use when:</strong> Rigid body dynamics in the body-fixed frame, especially for
          principal-axis problems.
        </p>
        <div className="lrn-eq">
          <span>{`$$\\frac{d\\mathbf{A}}{dt} = \\frac{d'\\mathbf{A}}{dt} + \\boldsymbol{\\Omega}\\times\\mathbf{A}$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$I_1\\dot{\\Omega}_1 + (I_3-I_2)\\Omega_2\\Omega_3 = K_1$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$I_2\\dot{\\Omega}_2 + (I_1-I_3)\\Omega_3\\Omega_1 = K_2$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$I_3\\dot{\\Omega}_3 + (I_2-I_1)\\Omega_1\\Omega_2 = K_3$$`}</span>
        </div>
        <p>
          Free symmetrical top ({`$I_1=I_2$`}, {`$K=0$`}): body-frame precession at{' '}
          {`$\\omega = \\frac{\\Omega_3(I_3-I_1)}{I_1}$`}.
        </p>

        <h2>Asymmetrical Top</h2>
        <p>
          <strong>Use when:</strong> Free rotation of a body with three unequal principal moments.
        </p>
        <p>
          Assume {`$I_3 > I_2 > I_1$`}. Existence condition: {`$2EI_1 < M^2 < 2EI_3$`}.
        </p>
        <div className="lrn-eq">
          <span>{`$$\\Omega_1 = \\sqrt{\\frac{2EI_3-M^2}{I_1(I_3-I_1)}}\\operatorname{cn}\\tau, \\quad \\Omega_2 = \\sqrt{\\frac{2EI_3-M^2}{I_2(I_3-I_2)}}\\operatorname{sn}\\tau$$`}</span>
        </div>
        <div className="lrn-eq">
          <span>{`$$\\Omega_3 = \\sqrt{\\frac{M^2-2EI_1}{I_3(I_3-I_1)}}\\operatorname{dn}\\tau, \\quad T = 4K\\sqrt{\\frac{I_1I_2I_3}{(I_3-I_2)(M^2-2EI_1)}}$$`}</span>
        </div>
        <ul className="lrn-list">
          <li>
            Stable rotation: about {`$x_1$`} (least) and {`$x_3$`} (greatest) axes
          </li>
          <li>Unstable rotation: about {`$x_2$`} (intermediate) axis. Polhode is a separatrix.</li>
          <li>
            Near {`$x_3$`} oscillation frequency:{' '}
            {`$\\omega = \\Omega_0\\sqrt{\\left(\\frac{I_3}{I_1}-1\\right)\\left(\\frac{I_3}{I_2}-1\\right)}$`}
          </li>
          <li>Top never returns exactly to original orientation (incommensurate periods)</li>
        </ul>

        <h2>Rigid Bodies in Contact</h2>
        <p>
          <strong>Use when:</strong> Systems where two rigid bodies touch, with sliding or rolling.
        </p>
        <div className="lrn-eq">
          <span>{`$$\\mathbf{F} = 0, \\quad \\mathbf{K} = 0 \\quad\\text{(equilibrium)}$$`}</span>
        </div>
        <ul className="lrn-list">
          <li>
            Holonomic constraint: coordinate relation, integrable (e.g., cylinder on fixed axis)
          </li>
          <li>
            Non-holonomic: velocity relation, not integrable (e.g., sphere on plane:{' '}
            {`$\\mathbf{V} = a\\boldsymbol{\\Omega}\\times\\mathbf{n}$`})
          </li>
          <li>
            Lagrange with multipliers:{' '}
            {`$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} - \\frac{\\partial L}{\\partial q_i} = \\sum_\\alpha\\lambda_\\alpha c_{\\alpha i}$`}
          </li>
          <li>
            d'Alembert: {`$\\frac{d\\mathbf{P}}{dt} = \\sum\\mathbf{f}$`},{' '}
            {`$\\frac{d\\mathbf{M}}{dt} = \\sum\\mathbf{r}\\times\\mathbf{f}$`}
          </li>
        </ul>
      </>
    ]
  }
}

export default function OscillationsPart2() {
  return <LearningTemplate config={config} />
}
