import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  Plot as P3,
  Axes as A3,
  Parametric as Pa3,
  Dot as D3,
  Tex as T3,
  Slider as Sl3,
  OPACITY as O3
} from '../../../../../components/viz/primitives'
import { VizFigure } from '../../../../../components/viz-figure'

export function PotentialWell() {
  const [E, setE] = React.useState(1.0)
  const U = x => 0.05 * x * x * x * x + 0.4 * x * x - 1.2
  const dU = x => 0.2 * x * x * x + 0.8 * x
  const findT = e => {
    let lo = 0,
      hi = 5
    for (let i = 0; i < 60; i++) {
      const m = (lo + hi) / 2
      if (U(m) < e) lo = m
      else hi = m
    }
    return (lo + hi) / 2
  }
  const xT = findT(E)
  const stateRef = React.useRef({ x: -xT + 0.001, v: 0, E })
  if (stateRef.current.E !== E) stateRef.current = { x: -xT + 0.001, v: 0, E }
  const [, force] = React.useState(0)
  React.useEffect(() => {
    // respect prefers-reduced-motion (house convention): bead rests at its release point
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf,
      last = performance.now()
    const loop = now => {
      let dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const sub = 8
      const ddt = dt / sub
      let { x, v } = stateRef.current
      for (let i = 0; i < sub; i++) {
        const a0 = -dU(x)
        x = x + v * ddt + 0.5 * a0 * ddt * ddt
        const a1 = -dU(x)
        v = v + 0.5 * (a0 + a1) * ddt
      }
      stateRef.current = { ...stateRef.current, x, v }
      force(c => (c + 1) % 1000)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
  // (period readout removed: the quadrature-for-T story lives in PeriodFromU;
  // this figure is about bounded motion between the turning points)
  const xNow = stateRef.current.x
  return (
    <div style={{ width: '100%' }}>
      <P3 xRange={[-4.5, 4.5]} yRange={[-1.6, 3.6]} width={520} height={260}>
        <A3 step={1} showGrid={false} />
        <Pa3 xy={x => [x, U(x)]} t={[-3.6, 3.6]} samples={160} opacity={O3.fg} strokeWidth={2} />
        <Pa3 xy={s => [s, E]} t={[-4.3, 4.3]} opacity={O3.accent} dash="4 4" />
        <D3 x={-xT} y={E} />
        <D3 x={xT} y={E} />
        <D3 x={xNow} y={U(xNow)} r={7} opacity={O3.fg} />
        <Pa3 xy={s => [xNow, U(xNow) + s * (E - U(xNow))]} t={[0, 1]} opacity={O3.faint} />
        <T3 at={[4.35, E]} anchor="end" tex={`E=${E.toFixed(2)}`} opacity={O3.accent} dy={-9} />
        <T3 at={[-xT - 0.05, E - 0.1]} tex="x_1" anchor="end" opacity={O3.accent} dy={18} />
        <T3 at={[xT + 0.05, E - 0.1]} tex="x_2" opacity={O3.accent} dy={18} />
        <T3 at={[-3.5, 3.15]} tex="U(x)" opacity={O3.fg} size={11} />
        <T3 at={[4.35, 0]} anchor="end" dy={-8} tex="x" opacity={O3.dim} size={11} />
      </P3>
      <Sl3 label="E" value={E} min={-1.1} max={3.0} step={0.02} onChange={setE} />
    </div>
  )
}

export function EffectivePotentialCentral() {
  const [E, setE] = React.useState(-0.45)
  const U = r => -1.5 / r + 0.8 / (r * r)
  const N = 1000
  const turns = []
  let prev = U(0.4) - E
  for (let i = 1; i <= N; i++) {
    const r = 0.4 + (i / N) * 7.6
    const cur = U(r) - E
    if (prev * cur <= 0) {
      const r0 = 0.4 + ((i - 1) / N) * 7.6
      const f = -prev / (cur - prev)
      turns.push(r0 + f * (7.6 / N))
    }
    prev = cur
  }
  return (
    <div style={{ width: '100%' }}>
      <P3 xRange={[0, 6]} yRange={[-2.4, 1.9]} width={520} height={260}>
        <A3 step={1} showGrid={false} />
        <Pa3 xy={r => [r, U(r)]} t={[0.37, 6]} samples={200} opacity={O3.fg} strokeWidth={2} />
        <Pa3 xy={s => [s, E]} t={[0.4, 6]} opacity={O3.accent} dash="4 4" />
        {turns.map((rt, i) => (
          <D3 key={i} x={rt} y={E} />
        ))}
        <T3
          at={[5.2, Math.max(E, U(5.2))]}
          anchor="end"
          dy={-12}
          tex={`E=${E.toFixed(2)}`}
          opacity={O3.accent}
        />
        <T3 at={[3.4, U(3.4)]} dy={-10} tex="U_{\rm eff}(r)" anchor="middle" opacity={O3.fg} />
        <T3 at={[5.85, 0]} anchor="end" tex="r" opacity={O3.dim} dy={-8} />
      </P3>
      <Sl3 label="E" value={E} min={-1.4} max={1.5} step={0.02} onChange={setE} />
    </div>
  )
}

export function ConicSections() {
  const [e, setE] = React.useState(0.5)
  const p = 1.4
  const orbit = phi => {
    const r = p / (1 + e * Math.cos(phi))
    return [r * Math.cos(phi), r * Math.sin(phi)]
  }
  // sweep only where r stays below RMAX, so near-parabolic orbits do not shoot
  // off to enormous radii (the same cap handles e < 1, e = 1, e > 1 uniformly)
  const RMAX = 7
  const cosLim = (p / RMAX - 1) / e
  const phiMax = e > 0 ? Math.acos(Math.max(-1, Math.min(1, cosLim))) : Math.PI
  return (
    <div style={{ width: '100%' }}>
      <P3 xRange={[-4.5, 4.5]} yRange={[-3, 3]} width={520} height={280}>
        <A3 step={1} showGrid={false} />
        <Pa3 xy={orbit} t={[-phiMax, phiMax]} samples={300} opacity={O3.fg} strokeWidth={2} />
        <D3 x={0} y={0} />
        <T3 at={[0, -0.05]} tex="\text{focus}" anchor="middle" dy={20} opacity={O3.dim} size={11} />
        <T3
          at={[3.5, 2.6]}
          tex={
            e < 1
              ? `e=${e.toFixed(2)} \\;\\text{ellipse}`
              : e < 1.001
                ? `e=1 \\;\\text{parabola}`
                : `e=${e.toFixed(2)} \\;\\text{hyperbola}`
          }
          anchor="end"
          opacity={O3.fg}
          size={11}
        />
      </P3>
      <Sl3 label="e" value={e} min={0} max={2.0} step={0.01} onChange={setE} />
    </div>
  )
}

export function PeriodFromU() {
  const [E, setE] = React.useState(1.5)
  const U = x => 0.5 * x * x
  const xT = Math.sqrt(2 * E)
  const slices = []
  for (let i = -7; i <= 7; i++) {
    const x = (i / 8) * xT
    slices.push([x, U(x)])
  }
  // T computed by genuine quadrature with the substitution x = xT sin(u), which
  // absorbs the inverse-sqrt singularity at the turning points: the figure's point
  // is that the integral returns 2pi at EVERY energy for the harmonic well.
  let T = 0
  const NQ = 400
  for (let i = 0; i < NQ; i++) {
    const u = -Math.PI / 2 + ((i + 0.5) / NQ) * Math.PI
    const x = xT * Math.sin(u)
    const v2 = 2 * (E - U(x))
    if (v2 > 0) T += ((xT * Math.cos(u) * Math.PI) / NQ) * (2 / Math.sqrt(v2))
  }
  return (
    <div style={{ width: '100%' }}>
      <P3 xRange={[-2.6, 2.6]} yRange={[-0.4, 2.6]} width={520} height={260}>
        <A3 step={1} showGrid={false} />
        <Pa3 xy={x => [x, U(x)]} t={[-2.2, 2.2]} samples={120} opacity={O3.fg} strokeWidth={2} />
        <Pa3 xy={s => [s, E]} t={[-xT - 0.2, xT + 0.2]} opacity={O3.accent} dash="4 4" />
        {slices.map(([x, u], i) => (
          <Pa3 key={i} xy={s => [x, s]} t={[u, E]} opacity={O3.faint} />
        ))}
        <D3 x={-xT} y={E} />
        <D3 x={xT} y={E} />
        <T3 at={[xT + 0.18, E]} dy={-8} tex={`E=${E.toFixed(2)}`} opacity={O3.accent} size={11} />
        <T3
          at={[2.45, -0.05]}
          tex={`T = ${T.toFixed(3)} = 2\\pi\\ \\text{at every }E`}
          anchor="end"
          opacity={O3.fg}
          size={11}
          dy={16}
        />
      </P3>
      <Sl3 label="E" value={E} min={0.2} max={2.8} step={0.02} onChange={setE} />
    </div>
  )
}

const config = {
  cssPrefix: 'ibq',
  documentTitle: 'Integration of the Equations of Motion: AETHER',
  learning: {
    groupTitle: 'Lagrangian Mechanics and Variational Principles',
    category: 'Classical Mechanics',
    title: 'Integration of the Equations of Motion',
    subtitle: 'One-dimensional motion, quadrature, reduced mass, central fields, and Kepler orbits',
    sections: [
      // Section 0: Motion in One Dimension
      <>
        <div className="lrn-section" id="lrn-section-0" data-section-index="0">
          <h2>Motion in One Dimension</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A ball rolls inside a bowl shaped like {`$U = x^4$`}. Does the time for one full swing
              depend on how high you release it?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. The harmonic bowl {`$U = \\frac{1}{2}kx^2$`} is the one special shape where the
                swing time is the same at every height. Every other shape gives a swing time that
                depends on energy. The general rule is{' '}
                {`$T \\propto E^{\\frac{1}{n} - \\frac{1}{2}}$`}. For {`$n=4$`},{' '}
                {`$T \\propto E^{-\\frac{1}{4}}$`}, so a higher release means a shorter swing.
              </p>
            </details>
          </div>
          <p>
            A <strong>degree of freedom</strong> is a single coordinate that pins down where the
            system is. One degree of freedom means one coordinate {`$x$`} and one equation of motion
            for it.
          </p>
          <p>
            Total energy {`$E$`} is the kinetic energy plus the potential energy:{' '}
            {`$E = \\frac{1}{2}m\\dot{x}^2 + U(x)$`}. The particle can trade these two freely, but
            their sum stays the same as it moves. Solve for the speed:{' '}
            {`$\\dot{x} = \\sqrt{\\frac{2[E - U(x)]}{m}}$`}. This is the central fact of the lesson.
            In one dimension, knowing the energy turns the dynamics into a pure geometry problem.
            Speed is no longer a separate unknown. It is just whatever value makes the energy add up
            at the current position.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              An ordinary differential equation, or ODE, is an equation that relates a quantity to
              its rate of change. Energy conservation hands us {`$\\dot{x}$`} as a function of{' '}
              {`$x$`} alone, with no second derivative left. That splits the equation so time and
              position sit on opposite sides: {`$dt = \\frac{dx}{\\dot{x}(x)}$`}. Now drop in the
              speed from above. Since {`$\\dot{x} = \\sqrt{\\frac{2[E-U]}{m}}$`}, its reciprocal is{' '}
              {`$\\frac{1}{\\dot{x}} = \\sqrt{\\frac{m}{2}}\\,\\frac{1}{\\sqrt{E-U}}$`}, so{' '}
              {`$dt = \\sqrt{\\frac{m}{2}}\\,\\frac{dx}{\\sqrt{E-U(x)}}$`}. Integrate each side and
              you get {`$t$`} as a function of {`$x$`}.
            </p>
          </div>
          <p>Integrating both sides gives time as a function of position:</p>
          <div className="lrn-eq lrn-eq-display">{`$$t = \\sqrt{\\frac{m}{2}} \\int \\frac{dx}{\\sqrt{E - U(x)}} + \\text{const}$$`}</div>
          <h3>Finite and Infinite Motion</h3>
          <p>
            A <strong>turning point</strong> is a position where the particle momentarily stops. At
            any turning point {`$x_1$`} or {`$x_2$`}, all the energy has gone into the potential, so{' '}
            {`$U(x) = E$`} and {`$\\dot{x} = 0$`}. The particle then reverses and heads back the
            other way.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Finite Motion</span>
              <p>
                The particle is trapped between two turning points {`$x_1$`} and {`$x_2$`} and
                oscillates between them forever. This happens when the energy sits below every
                surrounding potential wall.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Infinite Motion</span>
              <p>
                The particle has enough energy to climb out of the well and head off to infinity. It
                meets at most one turning point on the way and never comes back.
              </p>
            </div>
          </div>
          <h3>Period of Oscillation</h3>
          <p>
            For finite motion the particle travels from {`$x_1$`} out to {`$x_2$`} and back. The
            return trip mirrors the outbound trip, so the full period is twice the one-way time:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$T(E) = \\sqrt{2m} \\int_{x_1(E)}^{x_2(E)} \\frac{dx}{\\sqrt{E - U(x)}}$$`}</div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Adding energy does two things at once. It pushes the turning points farther apart, so
              the particle has more ground to cover. It also raises the speed at every point along
              the way. Whether {`$T$`} grows or shrinks depends on which effect wins, and that
              depends on the shape of {`$U(x)$`}. The harmonic well {`$U = \\frac{1}{2}kx^2$`} is
              the perfect tie: {`$T$`} stays the same at every energy. Steeper-than-harmonic walls
              (like {`$x^4$`}) make speed win, so {`$T$`} shrinks as energy rises.
              Softer-than-harmonic walls (like the pendulum near 180°) make distance win, so {`$T$`}{' '}
              grows.
            </p>
          </div>
          <h3>Worked Example: Simple Pendulum</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A pendulum swinging in tiny arcs has period {`$T = 2\\pi\\sqrt{\\frac{l}{g}}$`}. Now
              release it from almost straight up, near 180°. Is the period longer or shorter than
              the tiny-arc value?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Longer. Near the top the gravitational pull-back gets very weak, so the pendulum
                lingers there. The pendulum's well is gentler than a harmonic well, so distance wins
                over speed, and the swing takes longer at large amplitude.
              </p>
            </details>
          </div>
          <p>
            A pendulum of length {`$l$`} and mass {`$m$`} has potential{' '}
            {`$U = mgl(1 - \\cos\\theta)$`}, where {`$\\theta$`} is the angle from straight down.
            Plug this into the period formula and the integral that comes out is famous: the{' '}
            <strong>complete elliptic integral of the first kind</strong> {`$K(k)$`}. It is called
            elliptic because it first turned up while measuring the arc length of an ellipse. It
            cannot be written using sines, cosines, exponentials, or any other elementary function.
            With swing amplitude {`$\\theta_0$`}:
          </p>
          <div className="lrn-eq">{`$$T = 4\\sqrt{\\frac{l}{g}}\\, K(k), \\quad k = \\sin\\!\\left(\\frac{\\theta_0}{2}\\right)$$`}</div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the messy pendulum integral reduce to the clean form {`$K(k)$`}? The trick is
              the substitution {`$\\sin\\!\\left(\\frac{\\theta}{2}\\right) = k\\sin\\varphi$`}. It
              turns {`$\\cos\\theta - \\cos\\theta_0$`} into {`$1 - k^2\\sin^2\\varphi$`}, which is
              exactly what sits under the square root in {`$K$`}. Try the algebra before peeking.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Under the substitution the denominator becomes {`$2\\sqrt{1-k^2\\sin^2\\varphi}$`}{' '}
                and{' '}
                {`$d\\theta = \\frac{2k\\cos\\varphi\\,d\\varphi}{\\cos\\!\\left(\\frac{\\theta}{2}\\right)}$`}
                . The factors fall into place and you land on the standard form{' '}
                {`$K(k) = \\int_0^{\\frac{\\pi}{2}} \\frac{d\\varphi}{\\sqrt{1-k^2\\sin^2\\varphi}}$`}
                .
              </p>
            </details>
          </div>
          <h3>Worked Example: Period for {`$U = A|x|^n$`}</h3>
          <p>
            This is a power-law well: {`$n=2$`} is the harmonic case, {`$n=4$`} is steeper, and
            small {`$n$`} is gentler. The turning points sit at{' '}
            {`$x = \\pm\\left(\\frac{E}{A}\\right)^{\\frac{1}{n}}$`}. Rescaling the integration
            variable folds the energy out of the integral and leaves a pure number times a power of{' '}
            {`$E$`}:
          </p>
          <div className="lrn-eq">{`$$T \\propto E^{\\frac{1}{n} - \\frac{1}{2}}$$`}</div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The pure number that survives is built from two special functions. The{' '}
              <strong>gamma function</strong> {`$\\Gamma(z)$`} extends the factorial to all numbers
              ({`$\\Gamma(n) = (n-1)!$`} on integers). The <strong>beta function</strong>{' '}
              {`$B(p,q) = \\frac{\\Gamma(p)\\Gamma(q)}{\\Gamma(p+q)}$`} packages the integral{' '}
              {`$\\int_0^1 u^{p-1}(1-u)^{q-1}\\,du$`}. Why does {`$\\Gamma$`} show up here?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Set {`$x = \\left(\\frac{E}{A}\\right)^{\\frac{1}{n}}u$`}. Then{' '}
                {`$E - Ax^n = E(1-u^n)$`} and the integral collapses to{' '}
                {`$\\int_0^1 (1-u^n)^{-\\frac{1}{2}}du$`}. Substituting {`$v = u^n$`} converts this
                into {`$B\\!\\left(\\frac{1}{n},\\,\\frac{1}{2}\\right)$`}, which by definition
                equals{' '}
                {`$\\frac{\\Gamma(\\frac{1}{n})\\Gamma(\\frac{1}{2})}{\\Gamma(\\frac{1}{n}+\\frac{1}{2})}$`}
                . That is where the gamma functions come from.
              </p>
            </details>
          </div>
          <h3>Worked Example: Period for {`$U = -\\frac{U_0}{\\cosh^2(\\alpha x)}$`}</h3>
          <p>
            This is a finite-depth well: {`$U$`} reaches its minimum {`$-U_0$`} at the centre and
            climbs back to zero at infinity. A particle with energy {`$E$`} between {`$-U_0$`} and{' '}
            {`$0$`} cannot escape, because {`$U$`} never rises high enough on either side to let it
            through. So it oscillates inside the well. The period works out to:
          </p>
          <div className="lrn-eq">{`$$T = \\frac{\\pi}{\\alpha}\\sqrt{\\frac{2m}{|E|}}$$`}</div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the period grow as {`$|E|$`} drops toward zero? A particle barely held in the
              well sits near the rim, where the slope is gentle and the speed is small. It crawls
              along that long, slow region near the turning points. As {`$|E|$`} grows (the particle
              drops deeper into the well), it spends more of its time in the steep, fast region, and
              the round trip is quicker.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The turning points satisfy {`$\\cosh^2(\\alpha x_0) = \\frac{U_0}{|E|}$`}. As{' '}
                {`$|E|$`} grows, {`$x_0$`} shrinks, and the integral scales as{' '}
                {`$\\frac{x_0}{\\sqrt{|E|}} \\propto \\frac{1}{\\sqrt{|E|}}$`}.
              </p>
            </details>
          </div>
          <h3>Worked Example: Period for {`$U = U_0\\tan^2(\\alpha x)$`}</h3>
          <p>
            This well has infinitely high walls at {`$x = \\pm\\frac{\\pi}{2\\alpha}$`}, so no
            matter how much energy you give the particle, it cannot escape. The period is:
          </p>
          <div className="lrn-eq">{`$$T = \\frac{\\pi}{\\alpha}\\sqrt{\\frac{2m}{E + U_0}}$$`}</div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$E + U_0$`} appear in the denominator instead of just {`$E$`}? The clue is
              the identity {`$\\tan^2 = \\sec^2 - 1$`}. Once you apply it inside the period
              integral, the energy and the {`$U_0$`} term combine into a single sum. Try working out
              where the
              {`$+U_0$`} comes from before reading on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The turning points satisfy {`$U_0\\tan^2(\\alpha x_0) = E$`}. Inside the period
                integral, {`$E - U_0\\tan^2(\\alpha x) = (E + U_0) - U_0\\sec^2(\\alpha x)$`}. The
                substitution {`$u = \\sin(\\alpha x)$`} reduces the integral to a constant divided
                by {`$\\sqrt{E+U_0}$`}, producing the result above.
              </p>
            </details>
          </div>
        </div>
      </>,

      // Section 1: Reconstructing the Potential
      <>
        <div className="lrn-section" id="lrn-section-1" data-section-index="1">
          <h2>Reconstructing the Potential from the Period</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Suppose two different potentials {`$U_A(x)$`} and {`$U_B(x)$`} produce the same period{' '}
              {`$T(E)$`} at every energy. Is that possible?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Slide a potential sideways and the period at each energy stays the same. The
                period only sees the width of the well at each level, not where the well sits along
                the {`$x$`}-axis.
              </p>
            </details>
          </div>
          <p>
            The forward problem takes a known {`$U(x)$`} and computes {`$T(E)$`}. The{' '}
            <strong>inverse problem</strong> turns this around: given the measured period {`$T(E)$`}{' '}
            at every energy, can we recover {`$U(x)$`}? Think of it as reading a well's shape from a
            stopwatch alone. You time the swing at each energy level, and from those times you
            rebuild the wall the particle bounced between. The standard trick is{' '}
            <strong>Abel inversion</strong>: a way to recover an unknown function from a particular
            kind of integral that hides it. It first solved the tautochrone problem: find the curve
            on which a bead always slides to the bottom in the same time, no matter where it starts.
            We state the result rather than grind through the inversion here.
          </p>
          <p>
            The inverted formula gives the width of the well at each energy level. It only knows the
            distance between the two turning points, never where the well sits, since sliding the
            whole well sideways leaves every period untouched:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$x_2(U) - x_1(U) = \\frac{1}{\\pi\\sqrt{2m}}\\int_0^U \\frac{T(E)\\,dE}{\\sqrt{U - E}}$$`}</div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">General Potential</span>
              <p>
                The data only fixes the width {`$x_2(U) - x_1(U)$`}. Infinitely many wells share
                that same width profile, so the answer is not unique.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Symmetric Potential</span>
              <p>
                If you assume {`$U(x) = U(-x)$`} (a left-right mirror), then {`$x_1 = -x_2$`} and
                the width fixes the well completely:
              </p>
              <div className="lrn-eq">{`$$x(U) = \\frac{1}{2\\pi\\sqrt{2m}}\\int_0^U \\frac{T(E)\\,dE}{\\sqrt{U-E}}$$`}</div>
            </div>
          </div>
        </div>
      </>,

      // Section 2: Reduced Mass and Two-Body Problems
      <>
        <div className="lrn-section" id="lrn-section-2" data-section-index="2">
          <h2>Reduced Mass and Two-Body Problems</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two equal masses, each of mass {`$m_0$`}, are connected by a spring. Can you describe
              this with a single fictitious particle? If so, what is its mass and what potential
              does it sit in?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Track the gap {`$r = r_1 - r_2$`} between the two masses. It behaves like a
                single particle in the same spring potential, with mass{' '}
                {`$\\frac{m_0 m_0}{m_0+m_0} = \\frac{m_0}{2}$`}. Half the mass, same spring.
              </p>
            </details>
          </div>
          <p>
            A <strong>two-body problem</strong> describes two particles whose interaction depends
            only on the gap between them: the potential is {`$U(|r_1 - r_2|)$`}. Gravity, the
            Coulomb force, and an ideal spring all fit this shape.
          </p>
          <p>
            You already know the two-body reduction: jump to the centre-of-mass frame, write the
            kinetic energy with {`$R = \\frac{m_1 r_1 + m_2 r_2}{m_1+m_2}$`} and the gap{' '}
            {`$r = r_1 - r_2$`}, and the cross term {`$\\dot R \\cdot \\dot r$`} cancels. The energy
            splits into a free centre {`$\\frac{1}{2}(m_1+m_2)\\dot R^2$`} plus a lone particle{' '}
            {`$\\frac{1}{2}m\\dot r^2 - U(r)$`}. So the gap obeys a single-particle Lagrangian:
          </p>
          <div className="lrn-eq">{`$$L = \\frac{1}{2}m\\dot{r}^2 - U(r)$$`}</div>
          <p>
            The mass that plays the role of mass for the gap is the <strong>reduced mass</strong>:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$m = \\frac{m_1 m_2}{m_1 + m_2}$$`}</div>
        </div>
      </>,

      // Section 3: Central Field
      <>
        <div className="lrn-section" id="lrn-section-3" data-section-index="3">
          <h2>Motion in a Central Field</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A planet has its sideways speed doubled in an instant, with no other change. Does it
              still orbit? Is the new orbit the same shape as the old one?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It still orbits as long as the new total energy is negative. The new orbit is a
                different ellipse, with a larger long axis and a different stretch. Orbit shape
                depends on both energy and angular momentum, and you just changed both.
              </p>
            </details>
          </div>
          <p>
            A <strong>central field</strong> is a force that points along the line from the centre
            to the particle and depends only on the distance {`$r$`}. Gravity from a point mass and
            the Coulomb force from a point charge are the textbook examples. In polar coordinates
            {`$(r, \\varphi)$`}, the Lagrangian is:
          </p>
          <div className="lrn-eq">{`$$L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\varphi}^2) - U(r)$$`}</div>
          <p>
            Here {`$\\varphi$`} is cyclic, so its conjugate momentum is conserved. That conserved
            quantity is the <strong>angular momentum</strong> {`$M = mr^2\\dot\\varphi$`}, the same{' '}
            {`$M = r \\times p$`} you already know: the tangential speed is {`$r\\dot\\varphi$`}, so{' '}
            {`$mr^2\\dot\\varphi = r \\cdot m(r\\dot\\varphi)$`} is just radius times tangential
            momentum.
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$M = mr^2\\dot{\\varphi} = \\text{constant}$$`}</div>
          <h3>Kepler's Second Law</h3>
          <p>
            Draw the line from the centre to the particle. In a short time it turns by{' '}
            {`$d\\varphi$`} and sweeps a thin triangle of base {`$r$`} and height{' '}
            {`$r\\,d\\varphi$`}, so the swept area is {`$dA = \\frac{1}{2}r^2\\,d\\varphi$`}. The
            rate is the <strong>sectorial velocity</strong>, and conservation of {`$M$`} fixes it
            for any central force:
          </p>
          <div className="lrn-eq">{`$$\\dot{f} = \\frac{1}{2}r^2\\dot{\\varphi} = \\frac{M}{2m} = \\text{constant}$$`}</div>
          <h3>Effective Potential</h3>
          <p>
            Substitute {`$\\dot\\varphi = \\frac{M}{mr^2}$`} into the energy and the angular motion
            folds into one extra radial term, the <strong>effective potential</strong>{' '}
            {`$U_{\\rm eff}(r) = U(r) + \\frac{M^2}{2mr^2}$`}. Its second piece is the centrifugal
            barrier, which walls the particle off from {`$r = 0$`}:
          </p>
          <div className="lrn-eq">{`$$E = \\frac{1}{2}m\\dot{r}^2 + \\underbrace{U(r) + \\frac{M^2}{2mr^2}}_{U_{\\rm eff}(r)}$$`}</div>
          <h3>Orbit Equation</h3>
          <p>
            We can now ask for the shape of the orbit, {`$r(\\varphi)$`}, without ever solving for
            time. Combining energy conservation with {`$M = mr^2\\dot\\varphi$`} gives:
          </p>
          <div className="lrn-eq">{`$$\\varphi = \\int \\frac{M\\,dr}{r^2 \\sqrt{2m[E - U(r)] - \\frac{M^2}{r^2}}}$$`}</div>
          <h3>Closed Orbits: Bertrand's Theorem</h3>
          <p>
            Most central forces produce orbits that drift: each loop ends in a slightly different
            spot than where the last loop began. Only two shapes of central potential produce orbits
            that close back on themselves at every energy and every angular momentum:
          </p>
          <ul className="lrn-list">
            <li>
              {`$U \\propto \\frac{1}{r}$`} (gravity, Coulomb): every bound orbit is an ellipse with
              the centre at one focus.
            </li>
            <li>
              {`$U \\propto r^2$`} (harmonic oscillator): every bound orbit is an ellipse with the
              centre at the middle.
            </li>
          </ul>
          <p>
            For any other power law, the closest-approach point rotates a little each loop, so the
            orbit traces out a rosette that never repeats. That only these two laws give closed
            orbits is a known result. Its proof tracks the angle swept between two closest
            approaches and shows it equals {`$2\\pi$`} only for these two cases. We use the result
            here without proving it.
          </p>
          <h3>Fall to the Centre</h3>
          <p>
            The centrifugal barrier usually keeps the particle out of {`$r=0$`}. But if the inward
            pull of {`$U(r)$`} grows faster as {`$r \\to 0$`} than the outward {`$\\frac{1}{r^2}$`}{' '}
            push of the centrifugal term, the wall collapses and the particle plunges in. The exact
            condition is:
          </p>
          <div className="lrn-eq">{`$$[r^2 U(r)]_{r\\to 0} < -\\frac{M^2}{2m}$$`}</div>
          <p>
            For a power-law potential {`$U = -\\frac{C}{r^n}$`}, the particle falls to the centre
            when {`$n > 2$`}.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The barrier loses when {`$U_{\\rm eff}(r) = U(r) + \\frac{M^2}{2mr^2}$`} dives to{' '}
              {`$-\\infty$`} as {`$r \\to 0$`}. Multiply by {`$r^2$`} to compare the two terms head
              to head: {`$r^2 U_{\\rm eff} = r^2 U(r) + \\frac{M^2}{2m}$`}. For this to stay
              negative near the origin you need {`$r^2 U(r) < -\\frac{M^2}{2m}$`}, which is exactly
              the condition above. For {`$U = -\\frac{C}{r^n}$`}, the term {`$r^2 U = -Cr^{2-n}$`}{' '}
              runs off to {`$-\\infty$`} only when {`$n > 2$`}; for {`$n < 2$`} it fades to zero and
              the centrifugal {`$\\frac{M^2}{2m}$`} wins, so the particle is turned back.
            </p>
          </div>
          <h3>A Harder Case: Spherical Pendulum</h3>
          <p>
            A bead slides on a smooth sphere of radius {`$l$`} under gravity. The polar angle{' '}
            {`$\\theta$`} measures how far it has tipped from the bottom. The azimuthal angle (the
            swing around the vertical axis) is cyclic and gives a conserved angular momentum. That
            conservation feeds back into the polar-angle equation as a centrifugal term, and you
            cannot do the resulting time integral with sines and cosines alone. It produces{' '}
            <strong>elliptic integrals of the first and third kind</strong>: integrals with both a
            square root in the denominator and a separate rational pole, which arise whenever two
            angular variables couple this way.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the simple pendulum need only the first-kind elliptic integral, while the
              spherical pendulum also needs the third kind?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The simple pendulum has only one angle, so the integrand has just one square root.
                The spherical pendulum has two angles. After eliminating the cyclic azimuthal angle,
                its centrifugal term shows up as a {`$\\frac{1}{\\sin^2\\theta}$`} pole inside the
                integrand. That extra rational pole is exactly the feature that defines the
                third-kind elliptic integral.
              </p>
            </details>
          </div>
        </div>
      </>,

      // Section 4: Kepler Problem
      <>
        <div className="lrn-section" id="lrn-section-4" data-section-index="4">
          <h2>The Kepler Problem</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A comet runs along a very stretched ellipse around the Sun. At its closest approach
              (perihelion) it is 0.1 AU away, where one AU is the Earth-Sun distance. At its
              farthest point (aphelion) it is 100 AU away. Roughly how many times faster does it
              move at perihelion than at aphelion?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Angular momentum {`$rv$`} is the same at both turning points. So the speed ratio is
                the inverse of the distance ratio: {`$\\frac{100}{0.1} = 1000$`}. The comet sprints
                through perihelion roughly 1000 times faster than it crawls through aphelion.
              </p>
            </details>
          </div>
          <p>
            The <strong>Kepler problem</strong> is the central-field problem with{' '}
            {`$U = -\\frac{\\alpha}{r}$`} and {`$\\alpha > 0$`}: the inverse-square attractive force
            you get from gravity or the Coulomb interaction between opposite charges.
          </p>
          <p>
            The effective potential has a minimum at {`$r_0 = \\frac{M^2}{m\\alpha}$`}, with value:
          </p>
          <div className="lrn-eq">{`$$U_{\\rm eff,min} = -\\frac{m\\alpha^2}{2M^2}$$`}</div>
          <p>
            If the total energy {`$E$`} sits below zero, the particle is trapped in the well and its
            orbit is bound. If {`$E \\geq 0$`}, it has enough energy to escape, and we get a
            scattering orbit instead.
          </p>
          <h3>Conic Section Orbit</h3>
          <p>
            Put {`$U = -\\frac{\\alpha}{r}$`} into the {`$\\varphi$`}-integral above and evaluate
            it. The result is the conic {`$\\frac{p}{r} = 1 + e\\cos\\varphi$`} you already know as
            the orbit shape, with semi-latus rectum {`$p$`} and eccentricity {`$e$`} now read off in
            terms of the energy and angular momentum:
          </p>
          <div className="lrn-eq">{`$$p = \\frac{M^2}{m\\alpha}, \\qquad e = \\sqrt{1 + \\frac{2EM^2}{m\\alpha^2}}$$`}</div>
          <p>
            So the quadrature does more than draw the curve. It labels each conic with its physics:{' '}
            {`$e < 1$`} (bound, {`$E < 0$`}) is an ellipse, {`$e = 1$`} ({`$E = 0$`}) a parabola,
            and {`$e > 1$`} ({`$E > 0$`}) a hyperbola. The ellipse has semi-axes{' '}
            {`$a = \\frac{\\alpha}{2|E|}$`} and {`$b = \\frac{M}{\\sqrt{2m|E|}}$`}, so the long axis
            tracks the energy and the short axis carries the angular momentum.
          </p>
          <h3>Kepler's Third Law</h3>
          <p>
            The time it takes to complete one bound orbit depends only on the energy (equivalently,
            only on the long axis {`$a$`}). Two orbits with the same energy but different angular
            momenta have the same period:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$T = 2\\pi a^{\\frac{3}{2}}\\sqrt{\\frac{m}{\\alpha}} = \\pi\\alpha\\sqrt{\\frac{m}{2|E|^3}}$$`}</div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              You can read the {`$a^{3/2}$`} off the geometry: dividing the ellipse area{' '}
              {`$\\pi ab$`} by the constant sectorial velocity {`$\\frac{M}{2m}$`} cancels the
              angular momentum and leaves a function of {`$a$`} alone. But the law also follows from
              pure scaling, with no orbit shape needed. Shrink every length by {`$\\lambda$`} in a{' '}
              {`$U \\propto -1/r$`} field. The potential energy scales as {`$1/\\lambda$`}, and
              matching it against the kinetic energy {`$\\sim (\\text{length}/\\text{time})^2$`}{' '}
              forces time to scale as {`$\\lambda^{3/2}$`}. So {`$T^2 \\propto a^3$`} for every
              orbit in the family at once.
            </p>
          </div>
          <h3>Parametric Equations for the Elliptic Orbit</h3>
          <p>
            We can describe the orbit using a clever auxiliary angle {`$\\xi$`}, called the{' '}
            <strong>eccentric anomaly</strong>. Picture the ellipse inscribed inside a circle of
            radius {`$a$`}. For each point on the ellipse, draw a vertical line up to the circle:{' '}
            {`$\\xi$`} is the angle that line makes with the centre. The radial distance and the
            time are clean functions of {`$\\xi$`}:
          </p>
          <div className="lrn-eq">{`$$r = a(1 - e\\cos\\xi), \\qquad t = \\sqrt{\\frac{ma^3}{\\alpha}}(\\xi - e\\sin\\xi)$$`}</div>
          <p>
            The second equation is <strong>Kepler's equation</strong>. The same {`$\\xi$`} also
            places the orbit point directly. Take the point at angle {`$\\xi$`} on the auxiliary
            circle, shift it by the focus offset {`$ae$`}, and squash its height by{' '}
            {`$\\sqrt{1-e^2}$`}:
          </p>
          <div className="lrn-eq">{`$$x = a(\\cos\\xi - e), \\qquad y = a\\sqrt{1-e^2}\\sin\\xi$$`}</div>
          <p>
            That squash is exactly how the circle of radius {`$a$`} becomes the ellipse, so{' '}
            {`$\\xi$`} ties the shape and the timing of the orbit together in one angle.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does Kepler's equation read {`$\\xi - e\\sin\\xi$`}, not just {`$\\xi$`}? Where
              does the {`$e\\sin\\xi$`} correction come from physically?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                On the auxiliary circle, the angle {`$\\xi$`} would advance at a perfectly steady
                rate if the orbit were really circular. The orbit is an ellipse, so the particle
                moves faster near the focus and slower far away. The substitution{' '}
                {`$r - a = -ae\\cos\\xi$`} maps the ellipse onto the circle, and the time integral{' '}
                {`$t = \\int \\frac{r}{M} m \\, dA = \\int \\frac{m a^2}{M}(1-e\\cos\\xi)\\,d\\xi$`}{' '}
                evaluates to {`$\\xi - e\\sin\\xi$`}. The {`$\\xi$`} is the steady-circle part. The{' '}
                {`$-e\\sin\\xi$`} is the correction that captures how the real elliptic orbit
                stretches and lingers.
              </p>
            </details>
          </div>
          <h3>Worked Example: Parabolic Orbit ({`$E = 0$`})</h3>
          <p>
            When {`$E = 0$`}, the eccentricity hits exactly {`$e = 1$`} and the orbit becomes a
            parabola: {`$\\frac{p}{r} = 1 + \\cos\\varphi$`}. The particle starts at rest infinitely
            far away and falls in. It swings through closest approach{' '}
            {`$r_{\\rm min} = \\frac{p}{2}$`} (where {`$\\varphi = 0$`}), then coasts back out to
            infinity and comes to rest again. It is the boundary case between trapped and free.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is {`$E = 0$`} the dividing line between bound and unbound orbits?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Total energy is kinetic plus potential, and the {`$\\frac{1}{r}$`} potential
                vanishes at infinity. So {`$E$`} also equals the kinetic energy the particle would
                have if it got to infinity. {`$E < 0$`} means it cannot get there at all.{' '}
                {`$E > 0$`} means it arrives with leftover speed. {`$E = 0$`} is the knife edge: it
                gets there, but only just, slowing to a stop in the limit.
              </p>
            </details>
          </div>
        </div>
      </>
    ]
  },
  practice: [
    {
      q: `A particle moves in the potential $U(x) = \\frac{1}{2}kx^2$. Write $t$ as a function of $x$ using the energy-conservation integral.`,
      a: `Start from energy conservation: $E = \\frac{1}{2}m\\dot{x}^2 + U(x)$. Solve for the speed: $\\dot{x} = \\sqrt{\\frac{2[E - U(x)]}{m}}$. Separate variables: $dt = \\frac{dx}{\\dot{x}}$. Integrate. The answer is $t = \\sqrt{\\frac{m}{2}}\\int \\frac{dx}{\\sqrt{E - \\frac{1}{2}kx^2}}$ plus a constant.`
    },
    {
      q: `[PREDICT] A ball starts at rest at height $h$ inside a smooth bowl shaped like $U = Ax^4$. Does its oscillation period grow or shrink as $h$ rises?`,
      a: `It shrinks. The walls of $U = Ax^n$ for $n > 2$ are steeper than harmonic. So when you raise the energy, the speed gain wins out over the longer path. The formula $T \\propto E^{\\frac{1}{n} - \\frac{1}{2}}$ makes it explicit: for $n = 4$, $T \\propto E^{-\\frac{1}{4}}$, so a higher release means a shorter swing.`
    },
    {
      q: `State the period integral $T(E)$ for a 1D oscillating particle and explain each symbol.`,
      a: `$T(E) = \\sqrt{2m}\\int_{x_1(E)}^{x_2(E)} \\frac{dx}{\\sqrt{E - U(x)}}$. Here $m$ is the particle's mass. $E$ is its total energy. $U(x)$ is the potential. The numbers $x_1(E)$ and $x_2(E)$ are the two turning points where $U(x) = E$, the spots where the particle momentarily stops. The integral covers one outbound trip; the factor of 2 absorbs the return trip.`
    },
    {
      q: `What does the "inverse problem" of 1D mechanics ask? What can you recover from the data, and what stays hidden?`,
      a: `The inverse problem asks: given the period $T(E)$ at every energy, can we recover $U(x)$? The Abel inversion gives only the width of the well at each level, $x_2(U) - x_1(U)$, not the well's location. Sliding $U$ left or right keeps every period the same. So $U$ is unique only if you assume it is symmetric. Otherwise infinitely many shifted wells fit the same data.`
    },
    {
      q: `Derive the reduced mass formula for a two-body problem with potential $U(|r_1 - r_2|)$.`,
      a: `Set $r = r_1 - r_2$. Sit in the centre-of-mass frame, so $m_1 r_1 + m_2 r_2 = 0$. That fixes $r_1 = \\frac{m_2 r}{m_1+m_2}$ and $r_2 = -\\frac{m_1 r}{m_1+m_2}$. Plug both into the kinetic energy. The result is $T = \\frac{1}{2}\\frac{m_1 m_2}{m_1+m_2}\\dot{r}^2$. The coefficient is the reduced mass $m = \\frac{m_1 m_2}{m_1+m_2}$.`
    },
    {
      q: `[PREDICT] Earth and Moon orbit their shared centre of mass. How does the reduced mass $\\frac{m_E m_M}{m_E + m_M}$ compare to the Moon's mass $m_M$?`,
      a: `It is almost equal to $m_M$. The Earth is much heavier, so $m_E \\gg m_M$ and the formula collapses to $\\frac{m_E m_M}{m_E} = m_M$. The shared centre of mass sits very near Earth's centre, and the Moon does almost all the moving.`
    },
    {
      q: `Why is angular momentum $M = mr^2\\dot\\varphi$ conserved in a central field? Give the Lagrangian reason.`,
      a: `Write the central-field Lagrangian in polar coordinates: $L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot\\varphi^2) - U(r)$. The angle $\\varphi$ never shows up directly, only as $\\dot\\varphi$. We call such a coordinate cyclic. For any cyclic coordinate, the Lagrange equation forces its conjugate momentum to stay constant. Here that momentum is $\\frac{\\partial L}{\\partial\\dot\\varphi} = mr^2\\dot\\varphi = M$.`
    },
    {
      q: `A particle orbits in a central field. Its angular momentum doubles while its energy stays the same. How does the effective potential change?`,
      a: `The effective potential is $U_{\\rm eff}(r) = U(r) + \\frac{M^2}{2mr^2}$. Doubling $M$ quadruples the centrifugal term. The wall on the inside grows, and the minimum of $U_{\\rm eff}$ shifts to a larger radius. The orbit settles at a wider radius than before.`
    },
    {
      q: `Write the condition for a particle to fall to the centre of a central field $U(r)$. Why does the centrifugal barrier usually stop it?`,
      a: `The condition is $[r^2 U(r)]_{r\\to 0} < -\\frac{M^2}{2m}$. The centrifugal barrier is the term $\\frac{M^2}{2mr^2}$ inside the effective potential. It comes from the kinetic energy of the particle's swing-around motion. A particle with non-zero $M$ must spin faster as $r$ shrinks, and that spin energy blows up as $r \\to 0$. Falling to the centre requires the inward pull to grow faster than $\\frac{1}{r^2}$. For $U = -\\frac{C}{r^n}$, that means $n > 2$.`
    },
    {
      q: `[SELF-EXPLAIN] In $\\frac{p}{r} = 1 + e\\cos\\varphi$, why does $e < 1$ give a closed orbit and $e > 1$ give an open one?`,
      a: `For $e < 1$, the right side $1 + e\\cos\\varphi$ stays positive for every $\\varphi$, so $r$ never blows up. After $\\varphi$ goes through $2\\pi$, the particle returns to its starting radius. The orbit closes. For $e > 1$, the right side hits zero when $\\cos\\varphi = -\\frac{1}{e}$. At those two angles, $r$ runs to infinity. The particle escapes along a fixed asymptotic direction and never comes back.`
    },
    {
      q: `Explain from first principles why Kepler's third law reads $T^2 \\propto a^3$ instead of $T^2 \\propto b^3$.`,
      a: `The period equals the orbit area divided by the area swept per second: $T = \\frac{\\pi ab}{\\frac{M}{2m}} = \\frac{2\\pi mab}{M}$. Now look at where $M$ shows up. The long axis $a = \\frac{\\alpha}{2|E|}$ depends only on energy. The short axis $b = \\frac{M}{\\sqrt{2m|E|}}$ carries the angular momentum. The $M$ from $b$ cancels the $M$ in the denominator, leaving $T \\propto a^{\\frac{3}{2}}$. If you tried to write the law in terms of $b$ instead, the $M$ would not cancel.`
    },
    {
      q: `A particle has $E = 0$ in a $\\frac{1}{r}$ attractive potential. What kind of orbit is it on, and what is its eccentricity?`,
      a: `A parabola, with $e = 1$. Plug $E = 0$ into $e = \\sqrt{1 + \\frac{2EM^2}{m\\alpha^2}}$ and you get $e = 1$. The orbit equation $\\frac{p}{r} = 1 + \\cos\\varphi$ sends $r$ to infinity as $\\varphi$ approaches $\\pi$. Physically, $E = 0$ means the particle was launched (or fell in) from rest at infinite distance.`
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Integration of the Equations of Motion',
    sections: [
      // Reference Section 0: One-Dimensional Motion
      <>
        <div className="ref-section">
          <span className="ref-label">One-Dimensional Motion</span>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula">{`$$t = \\sqrt{\\frac{m}{2}}\\int \\frac{dx}{\\sqrt{E - U(x)}} + C$$`}</span>
              <p>
                Time from energy conservation. Gives {`$t(x)$`} for any 1D system once you know the
                energy {`$E$`} and potential {`$U(x)$`}.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$T(E) = \\sqrt{2m}\\int_{x_1(E)}^{x_2(E)} \\frac{dx}{\\sqrt{E - U(x)}}$$`}</span>
              <p>
                Period of oscillation between turning points {`$x_1$`} and {`$x_2$`}, the points
                where {`$U = E$`}.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$x_2(U) - x_1(U) = \\frac{1}{\\pi\\sqrt{2m}}\\int_0^U \\frac{T(E)\\,dE}{\\sqrt{U - E}}$$`}</span>
              <p>
                Inverse problem, general potential. Recovers the well's width at each energy from a
                measured period {`$T(E)$`}, but cannot pin down its position.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$x(U) = \\frac{1}{2\\pi\\sqrt{2m}}\\int_0^U \\frac{T(E)\\,dE}{\\sqrt{U - E}}$$`}</span>
              <p>
                Inverse problem, symmetric potential. Recovers {`$U(x)$`} uniquely when you assume{' '}
                {`$U(x) = U(-x)$`}.
              </p>
            </div>
          </div>
          <table className="ref-table">
            <thead>
              <tr>
                <th>Potential {`$U(x)$`}</th>
                <th>Period {`$T$`}</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\frac{1}{2}kx^2$`} (harmonic)</td>
                <td>{`$2\\pi\\sqrt{\\frac{m}{k}}$`}</td>
                <td>Same at every amplitude</td>
              </tr>
              <tr>
                <td>{`$A|x|^n$`}</td>
                <td>{`$\\propto E^{\\frac{1}{n} - \\frac{1}{2}}$`}</td>
                <td>Coefficient built from gamma functions</td>
              </tr>
              <tr>
                <td>{`$mgl(1-\\cos\\theta)$`} (pendulum)</td>
                <td>{`$4\\sqrt{\\frac{l}{g}}\\,K\\!\\left(\\sin\\!\\left(\\frac{\\theta_0}{2}\\right)\\right)$`}</td>
                <td>
                  {`$K$`} = complete elliptic integral, first kind: a special function that cannot
                  be written with sines and cosines
                </td>
              </tr>
              <tr>
                <td>{`$-\\frac{U_0}{\\cosh^2(\\alpha x)}$`}</td>
                <td>{`$\\frac{\\pi}{\\alpha}\\sqrt{\\frac{2m}{|E|}}$`}</td>
                <td>Valid for {`$-U_0 < E < 0$`}</td>
              </tr>
              <tr>
                <td>{`$U_0\\tan^2(\\alpha x)$`}</td>
                <td>{`$\\frac{\\pi}{\\alpha}\\sqrt{\\frac{2m}{E+U_0}}$`}</td>
                <td>Particle is always trapped</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>,

      // Reference Section 1: Two-Body and Central Field
      <>
        <div className="ref-section">
          <span className="ref-label">Two-Body Problem and Central Field</span>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula">{`$$m = \\frac{m_1 m_2}{m_1 + m_2}$$`}</span>
              <p>
                Reduced mass. Turns a two-body problem in {`$U(|r_1 - r_2|)$`} into one fictitious
                particle in {`$U(r)$`}.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$M = mr^2\\dot{\\varphi} = \\text{const}$$`}</span>
              <p>
                Angular momentum. Conserved in every central potential because {`$\\varphi$`} is
                cyclic.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$U_{\\rm eff}(r) = U(r) + \\frac{M^2}{2mr^2}$$`}</span>
              <p>
                Effective potential. Folds the angular motion into the radial problem; the
                centrifugal term builds a barrier near {`$r = 0$`}.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$\\varphi = \\int \\frac{M\\,dr}{r^2 \\sqrt{2m[E-U(r)] - \\frac{M^2}{r^2}}}$$`}</span>
              <p>
                Orbit equation. Gives the orbit shape {`$r(\\varphi)$`} directly, without going
                through time.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$[r^2 U(r)]_{r\\to 0} < -\\frac{M^2}{2m}$$`}</span>
              <p>
                Fall-to-centre condition. For {`$U = -\\frac{C}{r^n}$`}, the particle falls in when{' '}
                {`$n > 2$`}.
              </p>
            </div>
          </div>
        </div>
      </>,

      // Reference Section 2: Kepler Problem
      <>
        <div className="ref-section">
          <span className="ref-label">Kepler Problem ({`$U = -\\frac{\\alpha}{r}$`})</span>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula">{`$$\\frac{p}{r} = 1 + e\\cos\\varphi, \\quad p = \\frac{M^2}{m\\alpha}, \\quad e = \\sqrt{1 + \\frac{2EM^2}{m\\alpha^2}}$$`}</span>
              <p>
                Conic-section orbit. {`$e < 1$`}: ellipse. {`$e = 1$`}: parabola. {`$e > 1$`}:
                hyperbola.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$a = \\frac{\\alpha}{2|E|}, \\quad b = \\frac{M}{\\sqrt{2m|E|}}$$`}</span>
              <p>
                Ellipse semi-axes. The long axis {`$a$`} depends only on energy. The short axis{' '}
                {`$b$`} carries the angular-momentum dependence.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$T = 2\\pi a^{\\frac{3}{2}}\\sqrt{\\frac{m}{\\alpha}}$`}</span>
              <p>
                Kepler's third law. Period depends only on the energy (equivalently, only on {`$a$`}
                ), not on the angular momentum.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$r = a(1-e\\cos\\xi), \\quad t = \\sqrt{\\frac{ma^3}{\\alpha}}(\\xi - e\\sin\\xi)$`}</span>
              <p>
                Kepler's equation, written in terms of the eccentric anomaly {`$\\xi$`}. Parametric
                time dependence for the elliptic orbit.
              </p>
            </div>
          </div>
          <table className="ref-table">
            <thead>
              <tr>
                <th>Energy {`$E$`}</th>
                <th>Eccentricity {`$e$`}</th>
                <th>Orbit type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$E < 0$`}</td>
                <td>{`$0 \\leq e < 1$`}</td>
                <td>Ellipse (bounded)</td>
              </tr>
              <tr>
                <td>{`$E = 0$`}</td>
                <td>{`$e = 1$`}</td>
                <td>Parabola (escape from rest at {`$\\infty$`})</td>
              </tr>
              <tr>
                <td>{`$E > 0$`}</td>
                <td>{`$e > 1$`}</td>
                <td>Hyperbola (scattering)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ]
  }
}

const configWithViz = {
  ...config,
  learning: {
    ...config.learning,
    sections: config.learning.sections.map((section, i) => {
      if (i === 0)
        return (
          <>
            {section}
            <VizFigure aspect="auto" title="Potential Well">
              <PotentialWell />
            </VizFigure>
            <VizFigure aspect="auto" title="Period from Potential">
              <PeriodFromU />
            </VizFigure>
          </>
        )
      if (i === 3)
        return (
          <>
            {section}
            <VizFigure aspect="auto" title="Effective Central Potential">
              <EffectivePotentialCentral />
            </VizFigure>
          </>
        )
      if (i === 4)
        return (
          <>
            {section}
            <VizFigure aspect="auto" title="Conic Sections">
              <ConicSections />
            </VizFigure>
          </>
        )
      return section
    })
  }
}

export default function IntegrationOfTheEquationsOfMotion() {
  return <LearningTemplate config={configWithViz} />
}
