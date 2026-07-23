import { useEffect, useRef } from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  MathieuStabilityChart,
  FloquetMultiplierCircle,
  ParametricGrowthPlot
} from '../../../../../components/viz'

// Inline Matter.js simulation

function ParametricPendulumSim({ C }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let engine, render, runner
    let Matter
    let t = 0

    async function init() {
      Matter = (await import('matter-js')).default
      const container = containerRef.current
      if (!container) return

      const W = container.clientWidth || 560
      const H = 300

      engine = Matter.Engine.create({ gravity: { x: 0, y: 1 } })

      render = Matter.Render.create({
        element: container,
        engine,
        options: {
          width: W,
          height: H,
          background: 'transparent',
          wireframes: false,
          pixelRatio: window.devicePixelRatio || 1
        }
      })

      // Pivot tracks vertical oscillation; pendulum bob hangs from it
      const pivotX = W / 2
      const pivotY0 = 80
      const L = 120 // pendulum length in pixels

      // Small initial angle
      const initAngle = 0.05
      const bobX = pivotX + L * Math.sin(initAngle)
      const bobY = pivotY0 + L * Math.cos(initAngle)

      const bob = Matter.Bodies.circle(bobX, bobY, 10, {
        frictionAir: 0.003,
        render: { fillStyle: C.accent, strokeStyle: 'transparent' }
      })

      // Static pivot body. We reposition it each tick
      const pivot = Matter.Bodies.circle(pivotX, pivotY0, 4, {
        isStatic: true,
        render: { fillStyle: C.dim, strokeStyle: 'transparent' }
      })

      const constraint = Matter.Constraint.create({
        bodyA: pivot,
        bodyB: bob,
        length: L,
        stiffness: 1,
        damping: 0
      })

      Matter.Composite.add(engine.world, [bob, pivot, constraint])

      // Drive frequency ~2 * natural frequency; natural omega = sqrt(g*px/L)
      // g in matter is 9.8 * 0.001 * 1000 = effectively scaled
      // We pick a drive frequency that produces visible growth
      const driveFreq = 2 * Math.sqrt(9.8 / (L / 100)) // rad/s scaled
      const driveAmplitude = 15 // pixels

      Matter.Events.on(engine, 'beforeUpdate', () => {
        t += 0.016
        // Oscillate pivot vertically at 2*omega_0 to pump the pendulum
        const newY = pivotY0 + driveAmplitude * Math.sin(driveFreq * t)
        Matter.Body.setPosition(pivot, { x: pivotX, y: newY })
      })

      runner = Matter.Runner.create()
      Matter.Runner.run(runner, engine)
      Matter.Render.run(render)
    }

    init()

    return () => {
      if (runner && Matter) Matter.Runner.stop(runner)
      if (render && Matter) {
        Matter.Render.stop(render)
        if (render.canvas) render.canvas.remove()
      }
    }
  }, [C])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: 300,
        background: 'transparent',
        border: `1px solid ${C.dim}`
      }}
    />
  )
}

// Config

function useConfig() {
  const C = useVizColors()

  return {
    cssPrefix: 'fmpr',
    documentTitle: 'Floquet Theory, Mathieu Equation, and Parametric Resonance - AETHER',
    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }',
    learning: {
      category: 'Module 4',
      groupTitle: 'Perturbation Theory',
      title: 'Floquet Theory, Mathieu Equation, and Parametric Resonance',
      subtitle:
        'Periodic-coefficient ODEs, Floquet multipliers, monodromy matrices, and stability tongues',
      sections: [
        // Section 0: What Parametric Resonance Is
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>What Parametric Resonance Is</h2>
            <p>
              A child pumps a swing by crouching at the bottom and standing at the top. Nobody
              pushes. The amplitude still grows. The child changes a <em>parameter</em> of the
              pendulum, specifically its effective length, twice per swing. That is parametric
              resonance.
            </p>
            <p>
              In ordinary resonance you push a swing at its natural frequency. Zero initial
              displacement grows proportionally to time. In parametric resonance you modulate an
              internal parameter at roughly twice the natural frequency. Zero displacement stays
              zero, but any tiny perturbation grows exponentially. The two mechanisms look similar
              but differ fundamentally.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Parametric Resonance</span>
                <p>
                  An internal parameter (length, stiffness) varies periodically. No external
                  sideways force acts.
                </p>
                <p>
                  Zero initial conditions stay zero forever. Any small perturbation grows
                  exponentially when the drive is near {`$2\\omega_0$`}.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Ordinary (External) Resonance</span>
                <p>
                  An additive periodic force {`$F\\cos\\omega t$`} drives the oscillator from
                  outside.
                </p>
                <p>
                  Zero initial conditions grow proportionally to time {`$t$`} when{' '}
                  {`$\\omega = \\omega_0$`}. Growth is algebraic, not exponential.
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The equation for ordinary resonance is{' '}
                {`$\\ddot{x} + \\omega_0^2 x = F\\cos\\omega_0 t$`}. Even with {`$x(0) = 0$`} and{' '}
                {`$\\dot{x}(0) = 0$`}, the driving term forces growth.
              </p>
              <p>
                The equation for parametric resonance is {`$\\ddot{x} + \\omega^2(t) x = 0$`}. The
                right side is zero. If {`$x = 0$`}, then {`$\\ddot{x} = 0$`}, so zero stays zero.
                Only when {`$x \\neq 0$`} does the time-varying coefficient create instability. So
                parametric resonance is an instability of the zero solution, not a forced response.
              </p>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A swing is at rest in the downward position. You change the effective pendulum
                length periodically but never push the swing sideways. Will the swing start moving?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  No. Exact zero displacement is an equilibrium of the equation and stays zero
                  regardless of parameter changes.
                </p>
                <p>
                  But any tiny push, however small, will grow exponentially when the drive frequency
                  equals twice the natural frequency. Parametric resonance needs a nonzero seed.
                </p>
              </details>
            </div>

            <p>
              Parametric resonance appears in many places: the inverted pendulum stabilized by a
              vibrating base, coupled-circuit instabilities, plasma oscillations, and optical
              parametric amplifiers. Understanding it means knowing when a system with periodic
              parameters is stable and when it blows up.
            </p>
          </div>
        </>,

        // Section 1: Equations With Periodic Coefficients
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Equations With Periodic Coefficients</h2>
            <p>
              Start from a mechanical system with time-varying mass {`$m(t)$`} and stiffness{' '}
              {`$k(t)$`}, both periodic with the same period {`$T$`}. The equation of motion is:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\frac{d}{dt}(m\\dot{x}) + kx = 0$$`}</span>
            </div>
            <p>
              A variable substitution reduces this to the canonical form. Replace the time variable
              by {`$\\tau = \\int \\frac{dt}{m(t)}$`}, so{' '}
              {`$\\frac{d}{dt} = \\frac{1}{m}\\frac{d}{d\\tau}$`} and{' '}
              {`$\\frac{d}{dt}(m\\dot{x}) = \\frac{1}{m}\\frac{d^2 x}{d\\tau^2}$`}. The equation of
              motion turns into:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\frac{d^2 x}{d\\tau^2} + \\omega^2(\\tau)\\,x = 0, \\qquad \\omega^2(\\tau) = m(\\tau)\\,k(\\tau)$$`}</span>
            </div>
            <p>
              This is <strong>Hill's equation</strong>. Writing the new time as {`$t$`} again, the
              coefficient {`$\\omega^2(t) = m(t)k(t)$`} is a product of two periodic functions, so
              it is periodic with the same period {`$T$`}.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Mathieu's Equation</span>
              <div className="lrn-definition-desc">
                <p>
                  When the frequency modulation is a pure cosine, Hill's equation becomes Mathieu's
                  equation:
                </p>
                <div className="lrn-eq">
                  <span>{`$$\\ddot{x} + \\omega_0^2\\bigl[1 + h\\cos(\\gamma t)\\bigr]\\,x = 0$$`}</span>
                </div>
                <p>
                  Here {`$h$`} is the modulation depth: how much the frequency wobbles each cycle.
                  The symbol {`$\\gamma$`} is the drive frequency: how fast you wobble it.
                </p>
                <p>
                  This is the prototype for all periodic-coefficient stability analysis. Its
                  stability regions in the {`$(\\omega_0, h)$`} plane form the Ince-Strutt diagram,
                  the map of which frequency and amplitude pairs stay stable.
                </p>
              </div>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A pendulum hangs from a point that oscillates vertically at frequency {`$\\gamma$`}.
                At what drive frequency {`$\\gamma$`} do you expect the largest instability?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The primary instability occurs near {`$\\gamma = 2\\omega_0$`}, where{' '}
                  {`$\\omega_0$`} is the natural frequency of the pendulum.
                </p>
                <p>
                  Pumping twice per natural period transfers energy most efficiently, because the
                  pendulum completes half a swing in the time the drive completes one cycle.
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The modulation {`$h\\cos\\gamma t$`} multiplies the displacement {`$x$`}, which
                itself oscillates near {`$\\omega_0$`}. A product of two cosines makes sum and
                difference frequencies.
              </p>
              <p>
                When {`$\\gamma = 2\\omega_0$`}, the difference frequency {`$\\gamma - \\omega_0$`}
                equals {`$\\omega_0$`}. So the drive feeds energy back at the system's own
                frequency. That self-matching is why the primary tongue (the main band of drive
                frequencies that destabilises) sits at twice the natural frequency.
              </p>
            </div>

            <h3>Three Physical Examples</h3>
            <p>
              Three systems all reduce to Hill's equation. Each shows a different physical route to
              the same mathematics.
            </p>
            <ul className="lrn-list">
              <li>
                <strong>The pumped pendulum:</strong> The rider changes the effective length{' '}
                {`$\\ell(t)$`} periodically. The natural frequency{' '}
                {`$\\omega_0 = \\sqrt{\\frac{g}{\\ell}}$`} therefore oscillates in time. (The
                effective-potential view of this system is on the Kapitza Pendulum page.)
              </li>
              <li>
                <strong>Periodic gravity:</strong> A pendulum hangs in a gravitational field that
                varies periodically, for instance near an orbiting moon. The effective gravity
                changes periodically, giving Hill's equation with a periodically varying {`$g(t)$`}.
              </li>
              <li>
                <strong>Oscillating support:</strong> A pendulum's pivot moves up and down
                sinusoidally. In the non-inertial frame of the pivot, a periodic pseudo-force
                appears, again producing Hill's equation.
              </li>
            </ul>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                All three examples reduce to {`$\\ddot{x} + \\omega^2(t)x = 0$`} with the same
                mathematical structure. Why does the physical origin not matter once you have this
                equation?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The equation is linear and the coefficient {`$\\omega^2(t)$`} is periodic. That is
                  all Floquet's theorem needs. The theorem makes no reference to whether the
                  periodicity comes from a varying length, varying gravity, or a moving support.
                </p>
                <p>
                  Once the equation is in Hill's form, the full machinery of Floquet theory,
                  monodromy matrices (defined below), and stability criteria applies regardless of
                  the physical origin.
                </p>
              </details>
            </div>
          </div>
        </>,

        // Section 2: Floquet's Theorem and the Multipliers
        <>
          <div className="lrn-section" id="lrn-section-2" data-section-index="2">
            <h2>Floquet's Theorem and the Multipliers</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The frequency {`$\\omega^2(t)$`} repeats every period {`$T$`}. Track one solution
                across exactly one period. How should its shape at the end relate to its shape at
                the start?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The shape repeats, scaled by a constant. After one period the solution equals
                  itself times a number {`$\\mu$`}.
                </p>
                <p>
                  That number is the Floquet multiplier. Its size decides everything. If{' '}
                  {`$|\\mu| > 1$`}, the solution grows. If {`$|\\mu| = 1$`}, it stays bounded.
                </p>
              </details>
            </div>

            <p>
              Because {`$\\omega^2(t)$`} is periodic with period {`$T$`}, the equation{' '}
              {`$\\ddot{x} + \\omega^2(t)x = 0$`} has a special symmetry. If {`$x(t)$`} is a
              solution, so is {`$x(t+T)$`}. That means {`$x(t+T)$`} is a linear combination of the
              two basis solutions. <strong>Floquet's theorem</strong> says you can choose basis
              solutions {`$x_1, x_2$`} so that after one period each simply multiplies by a
              constant:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$x_1(t+T) = \\mu_1\\,x_1(t), \\qquad x_2(t+T) = \\mu_2\\,x_2(t)$$`}</span>
            </div>
            <p>
              The constants {`$\\mu_1$`} and {`$\\mu_2$`} are the{' '}
              <strong>Floquet multipliers</strong>: the factors by which each Floquet solution
              scales every period. Whenever you need to determine whether a periodic-coefficient
              linear ODE is stable, compute its Floquet multipliers.
            </p>

            <h3>Why the Multipliers Satisfy {`$\\mu_1 \\mu_2 = 1$`}</h3>
            <p>
              The <strong>Wronskian</strong> {`$W = \\dot{x}_1 x_2 - x_1 \\dot{x}_2$`} measures
              whether two solutions are independent. Differentiating gives{' '}
              {`$\\dot{W} = \\ddot{x}_1 x_2 - x_1 \\ddot{x}_2$`}. Hill's equation has no
              first-derivative term, so {`$\\ddot{x}_i = -\\omega^2 x_i$`}, and the two terms
              cancel: {`$\\dot{W} = 0$`}. So {`$W$`} is constant in time. After one period:
            </p>
            <div className="lrn-eq">
              <span>{`$$W(t+T) = \\mu_1\\mu_2\\,W(t) = W(t)$$`}</span>
            </div>
            <p>
              Since {`$W \\neq 0$`}, you get {`$\\mu_1 \\mu_2 = 1$`}. This is exact, with no
              approximation.
            </p>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  Show that if {`$\\omega^2(t)$`} is real and periodic, the Floquet multipliers are
                  either a complex-conjugate pair with {`$|\\mu| = 1$`} (stable) or a real pair with
                  one {`$|\\mu| > 1$`} (unstable).
                </p>
                <p>
                  Since {`$\\omega^2(t)$`} is real, the complex conjugate {`$x^*(t)$`} of any
                  solution is also a solution. So if {`$x_1$`} has multiplier {`$\\mu_1$`}, then{' '}
                  {`$x_1^*$`} has multiplier {`$\\mu_1^*$`}. The two multipliers are {`$\\mu_1$`}{' '}
                  and {`$\\mu_1^* = \\mu_2$`}.
                </p>
                <p>
                  From {`$\\mu_1\\mu_2 = 1$`}: if {`$\\mu_1 = e^{i\\alpha}$`}, then{' '}
                  {`$\\mu_2 = e^{-i\\alpha}$`}. Both lie on the unit circle. Every solution is
                  bounded: stable.
                </p>
                <p>
                  If instead {`$\\mu_1$`} is real, then {`$\\mu_2 = \\frac{1}{\\mu_1}$`} is also
                  real. One has {`$|\\mu| > 1$`} and grows exponentially. Unstable: parametric
                  resonance.
                </p>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>
                  One Floquet multiplier is measured as {`$\\mu_1 = 1.25$`}. Find {`$\\mu_2$`}, the
                  per-period growth factor, and decide whether the system is stable.
                </p>
                <ol className="lrn-list">
                  <li>
                    Use {`$\\mu_1\\mu_2 = 1$`} to find {`$\\mu_2$`}.
                  </li>
                  <li>
                    Identify which multiplier exceeds 1 in size. That factor multiplies the
                    amplitude each period.
                  </li>
                  <li>State whether any solution grows, and name the stability.</li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  A solution is purely oscillatory, so its multiplier is {`$\\mu_1 = e^{i\\pi/3}$`}.
                  Find {`$\\mu_2$`}, confirm both lie on the unit circle, and state the stability.
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Floquet's theorem follows from the periodicity of the coefficient alone. Shift time
                by one period {`$T$`}: the equation is unchanged. So the shifted solution{' '}
                {`$x(t+T)$`} satisfies the same equation as {`$x(t)$`}. It must be a linear
                combination of the two basis solutions {`$x_1$`} and {`$x_2$`}.
              </p>
              <p>
                The <strong>monodromy matrix</strong> (also called the period map) {`$A$`} sends{' '}
                {`$(x(0), \\dot{x}(0))$`} to {`$(x(T), \\dot{x}(T))$`}. Its eigenvalues are the
                Floquet multipliers {`$\\mu_1$`} and {`$\\mu_2$`}. The determinant of {`$A$`} equals
                the Wronskian ratio, which is 1 for Hill's equation. So{' '}
                {`$\\det A = \\mu_1\\mu_2 = 1$`}.
              </p>
            </div>

            <div>
              <FloquetMultiplierCircle />
            </div>
          </div>
        </>,

        // Section 3: The Monodromy Matrix and the Trace Test
        <>
          <div className="lrn-section" id="lrn-section-3" data-section-index="3">
            <h2>The Monodromy Matrix and the Trace Test</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A single {`$2\\times 2$`} matrix {`$A$`} carries the state across one full period.
                Its two eigenvalues are the Floquet multipliers, with product 1. Which single number
                built from {`$A$`} should decide stability?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The trace {`$\\text{tr}\\,A$`} decides it. The eigenvalues sum to the trace and
                  multiply to 1.
                </p>
                <p>
                  So the trace alone fixes both multipliers. You will see {`$|\\text{tr}\\,A| < 2$`}
                  means stable and {`$|\\text{tr}\\,A| > 2$`} means unstable.
                </p>
              </details>
            </div>

            <p>
              The <strong>monodromy matrix</strong> is the {`$2\\times 2$`} matrix {`$A$`} that maps
              the state at time {`$0$`} to the state at time {`$T$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$A\\,\\mathbf{x}(0) = \\mathbf{x}(T), \\qquad \\mathbf{x} = \\begin{pmatrix} x \\\\ \\dot{x} \\end{pmatrix}$$`}</span>
            </div>
            <p>
              Build {`$A$`} by integrating two initial conditions (the unit basis vectors) over one
              period. Then compute {`$\\text{tr}\\,A$`} and apply the trace test.
            </p>

            <h3>The Trace Stability Test</h3>
            <p>
              For Hill's equation, {`$\\det A = 1$`} (area-preserving map). The eigenvalues satisfy:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\lambda^2 - (\\text{tr}\\,A)\\,\\lambda + 1 = 0$$`}</span>
            </div>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$|\\text{tr}\\,A| < 2 \\implies \\text{stable}, \\qquad |\\text{tr}\\,A| > 2 \\implies \\text{unstable}$$`}</span>
            </div>
            <p>The discriminant {`$(\\text{tr}\\,A)^2 - 4$`} splits the two cases:</p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">{`$|\\text{tr}\\,A| < 2$`}: Rotation</span>
                <p>
                  Eigenvalues {`$e^{\\pm i\\alpha}$`} lie on the unit circle. The period map rotates
                  the phase plane. All orbits stay bounded. The system is stable.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">
                  {`$|\\text{tr}\\,A| > 2$`}: Hyperbolic Rotation
                </span>
                <p>
                  Eigenvalues are real: one {`$> 1$`}, one {`$< 1$`}. The period map stretches the
                  phase plane along one direction. One solution grows exponentially. Parametric
                  resonance.
                </p>
              </div>
            </div>

            <h3>Worked Example: The Constant-Coefficient Case</h3>
            <p>
              For a constant frequency {`$\\omega$`} (the unperturbed case), you can build {`$A$`}{' '}
              by hand. The trick is to fire two test solutions, one from each unit basis vector, and
              read off where they land after one period.
            </p>
            <div className="lrn-steps">
              <ol className="lrn-list">
                <li>
                  Solve {`$\\ddot{x} + \\omega^2 x = 0$`}. The general solution is{' '}
                  {`$x(t) = C\\cos\\omega t + D\\sin\\omega t$`}, with{' '}
                  {`$\\dot{x}(t) = -C\\omega\\sin\\omega t + D\\omega\\cos\\omega t$`}.
                </li>
                <li>
                  First test solution: start at {`$x(0) = 1$`}, {`$\\dot{x}(0) = 0$`}, so{' '}
                  {`$C = 1$`}, {`$D = 0$`}. Then {`$x(t) = \\cos\\omega t$`} and{' '}
                  {`$\\dot{x}(t) = -\\omega\\sin\\omega t$`}. This is the first column of {`$A$`}.
                </li>
                <li>
                  Second test solution: start at {`$x(0) = 0$`}, {`$\\dot{x}(0) = 1$`}, so{' '}
                  {`$C = 0$`}, {`$D = \\frac{1}{\\omega}$`}. Then{' '}
                  {`$x(t) = \\frac{1}{\\omega}\\sin\\omega t$`} and{' '}
                  {`$\\dot{x}(t) = \\cos\\omega t$`}. This is the second column.
                </li>
                <li>
                  Evaluate both at {`$t = T = 2\\pi$`}. The two columns side by side give {`$A$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-eq">
              <span>{`$$A = \\begin{pmatrix} \\cos 2\\pi\\omega & \\tfrac{1}{\\omega}\\sin 2\\pi\\omega \\\\ -\\omega\\sin 2\\pi\\omega & \\cos 2\\pi\\omega \\end{pmatrix}$$`}</span>
            </div>
            <p>
              The trace is {`$\\text{tr}\\,A = 2\\cos 2\\pi\\omega$`}. This has{' '}
              {`$|\\text{tr}\\,A| < 2$`} for all {`$\\omega \\neq \\frac{k}{2}$`} with{' '}
              {`$k = 0,1,2,\\ldots$`}. So the constant-coefficient oscillator is strongly stable
              everywhere except these special frequencies.
            </p>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  A periodic-coefficient oscillator has monodromy matrix trace{' '}
                  {`$\\text{tr}\\,A = 1.8$`}. Find both Floquet multipliers and determine stability.
                  (Hint: they satisfy {`$\\lambda^2 - (\\text{tr}\\,A)\\lambda + 1 = 0$`}.)
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The trace formula gives {`$\\text{tr}\\,A = 2\\cos 2\\pi\\omega$`} for constant{' '}
                {`$\\omega$`}. When is {`$|\\text{tr}\\,A| = 2$`}, and what does this mean?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$|\\text{tr}\\,A| = 2$`} when {`$\\cos 2\\pi\\omega = \\pm 1$`}, i.e., when{' '}
                  {`$\\omega = \\frac{k}{2}$`} for integer {`$k$`}. At these values the eigenvalues
                  are {`$\\lambda = \\pm 1$`}: the period map has a real eigenvalue of magnitude 1.
                </p>
                <p>
                  This is the <em>boundary</em> of stability. A small perturbation can push one
                  eigenvalue outside the unit circle, making the system unstable. These are the tips
                  of the resonance tongues: the values of {`$\\omega$`} where parametric instability
                  first appears as the modulation amplitude increases from zero.
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The matrix {`$A$`} is area-preserving: {`$\\det A = 1$`}. The eigenvalue equation is{' '}
                {`$\\lambda^2 - (\\text{tr}\\,A)\\lambda + 1 = 0$`}, whose discriminant{' '}
                {`$(\\text{tr}\\,A)^2 - 4$`} sets the rotation-versus-hyperbolic split above:
                negative gives a unit-circle pair, positive gives one real multiplier above 1.
              </p>
            </div>

            <h3>Strong Stability</h3>
            <p>
              A system is <strong>strongly stable</strong> if it is stable and every sufficiently
              small perturbation of its Hamiltonian also stays stable. The strict inequality{' '}
              {`$|\\text{tr}\\,A| < 2$`} guarantees strong stability. The boundary{' '}
              {`$|\\text{tr}\\,A| = 2$`} does not: a tiny perturbation can push one multiplier
              outside the unit circle.
            </p>
            <p>
              All points with {`$\\omega \\neq \\frac{k}{2}$`} on the {`$\\omega$`}-axis are
              strongly stable. The condition is open: a whole neighborhood of such a system is also
              stable, so perturbations that shift {`$\\omega$`} slightly keep the system in the
              stable zone. The boundary {`$|\\text{tr}\\,A| = 2$`} is the exception, with unstable
              systems sitting arbitrarily close.
            </p>

            <h3>Worked Example: The Square-Wave Frequency</h3>
            <p>
              Take a frequency that jumps between two constant values each half-period. This is the
              cleanest case where you build the monodromy matrix as a product of two pieces.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\ddot{x} = -f^2(t)\\,x, \\qquad f(t) = \\begin{cases} \\omega + \\varepsilon & 0 < t < \\pi \\\\ \\omega - \\varepsilon & \\pi < t < 2\\pi \\end{cases}$$`}</span>
            </div>
            <p>
              Over each half-period the frequency is constant, so each half is the same
              constant-coefficient map you built above, run for time {`$\\pi$`}. Write{' '}
              {`$\\omega_1 = \\omega + \\varepsilon$`} and {`$\\omega_2 = \\omega - \\varepsilon$`}.
              The two half-period matrices are:
            </p>
            <div className="lrn-eq">
              <span>{`$$A_k = \\begin{pmatrix} \\cos\\pi\\omega_k & \\tfrac{1}{\\omega_k}\\sin\\pi\\omega_k \\\\ -\\omega_k\\sin\\pi\\omega_k & \\cos\\pi\\omega_k \\end{pmatrix}, \\qquad k = 1, 2$$`}</span>
            </div>
            <p>
              The full-period monodromy matrix is the product {`$A = A_2 A_1$`}: the second half
              acts after the first. Multiply the two matrices. The two diagonal entries of the
              product are:
            </p>
            <div className="lrn-eq">
              <span>{`$$A_{11} = \\cos\\pi\\omega_1\\cos\\pi\\omega_2 - \\tfrac{\\omega_1}{\\omega_2}\\sin\\pi\\omega_1\\sin\\pi\\omega_2$$`}</span>
            </div>
            <div className="lrn-eq">
              <span>{`$$A_{22} = \\cos\\pi\\omega_1\\cos\\pi\\omega_2 - \\tfrac{\\omega_2}{\\omega_1}\\sin\\pi\\omega_1\\sin\\pi\\omega_2$$`}</span>
            </div>
            <p>Add them. The trace is {`$\\text{tr}\\,A = A_{11} + A_{22}$`}:</p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\text{tr}\\,A = 2\\cos\\pi\\omega_1\\cos\\pi\\omega_2 - \\left(\\frac{\\omega_1}{\\omega_2} + \\frac{\\omega_2}{\\omega_1}\\right)\\sin\\pi\\omega_1\\sin\\pi\\omega_2$$`}</span>
            </div>
            <p>
              Set {`$|\\text{tr}\\,A| = 2$`} to find the tongue boundaries in the{' '}
              {`$(\\omega, \\varepsilon)$`} plane. Expanding for small {`$\\varepsilon$`} gives the
              same tongue tips at {`$\\omega = \\frac{k}{2}$`} as the cosine case. The square-wave
              drive confirms the result does not depend on the exact shape of the modulation.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The square-wave trace reduces to {`$2\\cos 2\\pi\\omega$`} when{' '}
                {`$\\varepsilon = 0$`}. Why must the two cases agree at {`$\\varepsilon = 0$`}?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  At {`$\\varepsilon = 0$`} both half-periods share one frequency {`$\\omega$`}. So{' '}
                  {`$\\omega_1 = \\omega_2 = \\omega$`} and the two half-maps combine into one full
                  rotation over period {`$2\\pi$`}.
                </p>
                <p>
                  Then{' '}
                  {`$\\cos\\pi\\omega_1\\cos\\pi\\omega_2 - \\sin\\pi\\omega_1\\sin\\pi\\omega_2 = \\cos 2\\pi\\omega$`}
                  , so the trace is {`$2\\cos 2\\pi\\omega$`}. This matches the constant-frequency
                  result exactly, as it must.
                </p>
              </details>
            </div>
          </div>
        </>,

        // Section 4: The Stability Chart and Resonance Tongues
        <>
          <div className="lrn-section" id="lrn-section-4" data-section-index="4">
            <h2>The Stability Chart and Resonance Tongues</h2>
            <p>
              Take the Mathieu equation and set {`$\\gamma = 2\\omega_0 + \\varepsilon$`}, where{' '}
              {`$\\varepsilon \\ll \\omega_0$`} is the detuning from primary resonance. This{' '}
              {`$\\varepsilon$`} is the drive-frequency offset, not the half-period frequency split{' '}
              {`$\\varepsilon$`} used in the square-wave example of Section 3. Use a perturbative
              trial solution (an ansatz):
            </p>
            <div className="lrn-eq">
              <span>{`$$x = a(t)\\cos\\!\\left(\\omega_0 + \\tfrac{\\varepsilon}{2}\\right)t + b(t)\\sin\\!\\left(\\omega_0 + \\tfrac{\\varepsilon}{2}\\right)t$$`}</span>
            </div>
            <p>
              Here {`$a(t)$`} and {`$b(t)$`} vary slowly next to the fast cosine and sine.
              Substitute into the equation and turn each product of cosines into a sum. Drop the
              fast {`$3(\\omega_0 + \\tfrac{\\varepsilon}{2})$`} terms. Setting the coefficient of
              the sine and of the cosine each to zero gives two slow ODEs:
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\dot{a} = -\\left(\\varepsilon + \\tfrac{1}{2}h\\omega_0\\right)b, \\qquad 2\\dot{b} = \\left(\\varepsilon - \\tfrac{1}{2}h\\omega_0\\right)a$$`}</span>
            </div>
            <p>
              Seek solutions {`$a, b \\propto e^{st}$`}, so {`$\\dot{a} = sa$`} and{' '}
              {`$\\dot{b} = sb$`}. The two equations become a {`$2 \\times 2$`} linear system in{' '}
              {`$(a, b)$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$s\\,a + \\tfrac{1}{2}\\!\\left(\\varepsilon + \\tfrac{1}{2}h\\omega_0\\right)b = 0, \\qquad \\tfrac{1}{2}\\!\\left(\\varepsilon - \\tfrac{1}{2}h\\omega_0\\right)a - s\\,b = 0$$`}</span>
            </div>
            <p>
              A nonzero solution exists only when the determinant of this system vanishes. That
              consistency condition reads{' '}
              {`$-s^2 - \\tfrac{1}{4}\\!\\left(\\varepsilon + \\tfrac{1}{2}h\\omega_0\\right)\\!\\left(\\varepsilon - \\tfrac{1}{2}h\\omega_0\\right) = 0$`}
              , which is the <strong>compatibility condition</strong>:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$s^2 = \\tfrac{1}{4}\\!\\left[\\left(\\tfrac{h\\omega_0}{2}\\right)^2 - \\varepsilon^2\\right]$$`}</span>
            </div>
            <p>
              Take the positive square root for the growth rate itself. At exact resonance{' '}
              {`$\\varepsilon = 0$`} this is largest:
            </p>
            <div className="lrn-eq">
              <span>{`$$s = \\tfrac{1}{2}\\sqrt{\\left(\\tfrac{h\\omega_0}{2}\\right)^2 - \\varepsilon^2}, \\qquad s_{\\max} = \\frac{h\\omega_0}{4}$$`}</span>
            </div>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The growth exponent satisfies{' '}
                {`$s^2 = \\frac{1}{4}\\left[\\left(\\frac{h\\omega_0}{2}\\right)^2 - \\varepsilon^2\\right]$`}
                . For what values of detuning {`$\\varepsilon$`} does the system grow?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The system grows ({`$s > 0$`}) when {`$s^2 > 0$`}, which requires{' '}
                  {`$|\\varepsilon| < \\frac{h\\omega_0}{2}$`}.
                </p>
                <p>
                  The primary resonance tongue is the band{' '}
                  {`$-\\frac{h\\omega_0}{2} < \\varepsilon < \\frac{h\\omega_0}{2}$`}. Its width
                  scales as {`$h$`}, so larger modulation amplitude creates a wider instability
                  band.
                </p>
              </details>
            </div>

            <h3>Primary Resonance Tongue</h3>
            <p>
              The condition {`$s^2 > 0$`} defines the primary resonance tongue. In terms of the
              drive frequency {`$\\gamma = 2\\omega_0 + \\varepsilon$`}:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$-\\frac{h\\omega_0}{2} < \\varepsilon < \\frac{h\\omega_0}{2}$$`}</span>
            </div>
            <p>
              At the tongue boundaries {`$\\varepsilon = \\pm \\frac{h\\omega_0}{2}$`}, the growth
              rate {`$s = 0$`} and {`$a, b$`} are constant: solutions are periodic. Inside the
              tongue {`$s > 0$`}: solutions grow exponentially. Outside: solutions are bounded
              oscillations.
            </p>

            <h3>The Ince-Strutt Diagram</h3>
            <p>
              The full stability diagram in the {`$(\\omega_0, h)$`} plane is the{' '}
              <strong>Ince-Strutt diagram</strong>. It shows shaded instability tongues (the
              resonance tongues) opening from the points {`$\\omega_0 = \\frac{k}{2}$`} on the{' '}
              {`$\\omega_0$`}-axis for integer {`$k \\geq 1$`}.
            </p>
            <ul className="lrn-list">
              <li>
                <strong>Primary tongue at {`$k = 1$`}</strong> ({`$\\gamma \\approx 2\\omega_0$`}):
                width proportional to {`$h$`} (first order in the modulation amplitude). The
                broadest and most important tongue.
              </li>
              <li>
                <strong>Higher-order tongues at {`$k = 2, 3, \\ldots$`}</strong>: tongues near{' '}
                {`$\\gamma = \\frac{2\\omega_0}{k}$`}, width proportional to {`$h^k$`}. They narrow
                exponentially with {`$k$`}, making them very hard to observe in practice.
              </li>
              <li>
                <strong>Subharmonic tongue</strong>: instability near {`$\\gamma = \\omega_0$`},
                limits scale as {`$h^2$`}, not {`$h$`}.
              </li>
            </ul>

            <h3>Worked Example: Second-Order Tongue Correction</h3>
            <p>
              The first-order tongue boundary is {`$\\varepsilon = \\pm\\frac{h\\omega_0}{2}$`}. Now
              find the correction at order {`$h^2$`} near {`$\\gamma = 2\\omega_0$`}. The cleanest
              route maps our equation onto the standard Mathieu form, whose tongue boundaries are
              tabulated exactly.
            </p>
            <div className="lrn-steps">
              <ol className="lrn-list">
                <li>
                  Rescale time with {`$\\tau = \\tfrac{1}{2}\\gamma t$`}. Then{' '}
                  {`$\\ddot{x} + \\omega_0^2[1 + h\\cos\\gamma t]x = 0$`} becomes{' '}
                  {`$x'' + \\frac{4\\omega_0^2}{\\gamma^2}[1 + h\\cos 2\\tau]\\,x = 0$`}, where{' '}
                  {`$'$`} is {`$d/d\\tau$`}.
                </li>
                <li>
                  Match the standard Mathieu form {`$x'' + (a - 2q\\cos 2\\tau)x = 0$`}. Reading off
                  the two coefficients gives {`$a = \\dfrac{4\\omega_0^2}{\\gamma^2}$`} and{' '}
                  {`$q = -\\dfrac{2\\omega_0^2 h}{\\gamma^2} = -\\dfrac{a h}{2}$`}. Near the primary
                  tongue {`$a \\approx 1$`}, so {`$q \\approx -\\tfrac{h}{2}$`}: the drive strength{' '}
                  {`$h$`} is just twice the Mathieu parameter {`$|q|$`}.
                </li>
                <li>
                  The exact boundaries of the first tongue are the standard transition curves (DLMF
                  28.6){`$\\;a = 1 \\pm q - \\tfrac{1}{8}q^2 + \\cdots$`}. The {`$+$`} branch and
                  the {`$-$`} branch are the two edges. Both carry the same {`$-\\tfrac{1}{8}q^2$`}
                  curvature term, which is what pushes the whole tongue.
                </li>
                <li>
                  Put {`$\\gamma = 2\\omega_0 + \\varepsilon$`}. Expanding{' '}
                  {`$a = 4\\omega_0^2/\\gamma^2$`} for small {`$\\varepsilon$`} gives{' '}
                  {`$a = 1 - \\dfrac{\\varepsilon}{\\omega_0} + \\dfrac{3\\varepsilon^2}{4\\omega_0^2} + \\cdots$`}
                  , and {`$q = -\\tfrac{1}{2}ah = -\\tfrac{h}{2} + O(h\\varepsilon)$`}. Substitute
                  both into {`$a = 1 \\pm q - \\tfrac{1}{8}q^2$`} and keep terms to order {`$h^2$`}.
                </li>
                <li>
                  The {`$\\varepsilon^2$`} piece of {`$a$`} sits at order {`$h^2$`} too, so it stays
                  in the balance. The boundary condition collapses to a quadratic in{' '}
                  {`$\\varepsilon$`}, valid to order {`$h^2$`}:{' '}
                  {`$\\varepsilon^2 + \\dfrac{h^2\\omega_0}{16}\\,\\varepsilon - \\dfrac{h^2\\omega_0^2}{4} = 0$`}
                  .
                </li>
                <li>
                  Solve, keeping terms only as far as order {`$h^2$`}. The leading edges are{' '}
                  {`$\\varepsilon = \\pm\\tfrac{1}{2}h\\omega_0$`}, and the linear-in-
                  {`$\\varepsilon$`}
                  term shifts both edges down by the same{' '}
                  {`$\\tfrac{1}{2}\\cdot\\tfrac{h^2\\omega_0}{16} = \\tfrac{h^2\\omega_0}{32}$`}:
                </li>
              </ol>
            </div>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$\\varepsilon = \\pm\\tfrac{1}{2}h\\omega_0 - \\frac{h^2\\omega_0}{32}$$`}</span>
            </div>
            <p>
              The second-order term shifts both edges of the primary tongue down by{' '}
              {`$\\frac{h^2\\omega_0}{32}$`}. The correction stays small while {`$h \\ll 1$`}. It
              matters only as {`$h$`} grows toward 1.
            </p>

            <h3>Worked Example: Subharmonic Tongue Near {`$\\gamma = \\omega_0$`}</h3>
            <p>
              The drive can also destabilize the oscillator near {`$\\gamma = \\omega_0$`}, not just
              near {`$2\\omega_0$`}. Set {`$\\gamma = \\omega_0 + \\varepsilon$`} with{' '}
              {`$\\varepsilon \\sim h^2$`}, since this tongue first appears at second order.
            </p>
            <div className="lrn-steps">
              <ol className="lrn-list">
                <li>
                  Seek{' '}
                  {`$x = a_0\\cos(\\omega_0 + \\varepsilon)t + b_0\\sin(\\omega_0 + \\varepsilon)t + a_1\\cos 2(\\omega_0 + \\varepsilon)t + b_1\\sin 2(\\omega_0 + \\varepsilon)t + c_1$`}
                  . Here {`$c_1$`} is a constant (zero-frequency) term.
                </li>
                <li>
                  Substitute into{' '}
                  {`$\\ddot{x} + \\omega_0^2[1 + h\\cos(\\omega_0 + \\varepsilon)t]x = 0$`}. The
                  modulation must act twice to feed energy back at {`$\\omega_0$`}, so the effect is
                  order {`$h^2$`}.
                </li>
                <li>
                  The terms at {`$2(\\omega_0 + \\varepsilon)$`} and the constant term fix the small
                  coefficients: {`$a_1 = \\frac{h a_0}{6}$`}, {`$b_1 = \\frac{h b_0}{6}$`}, and{' '}
                  {`$c_1 = -h a_0$`}. Each is order {`$h$`} times the lead amplitude.
                </li>
                <li>
                  Feed these back into the terms at {`$\\omega_0 + \\varepsilon$`}. Now the brackets
                  carry order-{`$h^2$`} pieces. Setting the cosine and sine coefficients to zero
                  gives the two band edges.
                </li>
              </ol>
            </div>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$-\\frac{5h^2\\omega_0}{24} < \\varepsilon < \\frac{h^2\\omega_0}{24}$$`}</span>
            </div>
            <p>
              The subharmonic tongue near {`$\\gamma = \\omega_0$`} has width{' '}
              {`$\\frac{h^2\\omega_0}{4}$`}, proportional to {`$h^2$`}. This matches the general
              rule: the {`$k$`}-th tongue, near {`$\\gamma = \\frac{2\\omega_0}{k}$`}, scales as{' '}
              {`$h^k$`}. The subharmonic case is {`$k = 2$`}.
            </p>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  Derive the primary tongue boundary using the compatibility condition. Let{' '}
                  {`$\\omega_0 = 1$`}, {`$h = 0.2$`}.
                </p>
                <p>
                  The compatibility condition is{' '}
                  {`$s^2 = \\frac{1}{4}\\left[\\left(\\frac{h}{2}\\right)^2 - \\varepsilon^2\\right]$`}
                  (with {`$\\omega_0 = 1$`}).
                </p>
                <p>
                  At the boundary {`$s = 0$`}: {`$\\varepsilon = \\pm \\frac{h}{2} = \\pm 0.1$`}.
                  The tongue spans {`$\\gamma \\in [1.9,\\, 2.1]$`}. Width is{' '}
                  {`$\\Delta\\gamma = h = 0.2$`}.
                </p>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>
                  With {`$\\omega_0 = 2$`} and {`$h = 0.3$`}, find the primary tongue boundaries and
                  the growth rate at exact resonance {`$\\varepsilon = 0$`}.
                </p>
                <ol className="lrn-list">
                  <li>Write the compatibility condition with {`$\\omega_0 = 2$`} substituted.</li>
                  <li>
                    Set {`$s = 0$`} to find {`$\\varepsilon$`} at the boundaries.
                  </li>
                  <li>
                    Evaluate {`$s$`} at {`$\\varepsilon = 0$`} to find the peak growth rate.
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  For {`$\\omega_0 = 1$`} and {`$h = 0.4$`}, find the resonance tongue boundaries,
                  the peak growth rate, and the drive frequency {`$\\gamma$`} that gives maximum
                  growth.
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                In the worked example the tongue width came out as {`$\\Delta\\gamma = h$`}. Why
                does the width depend on the modulation amplitude {`$h$`} but not on the sign of the
                detuning?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The boundary sits where {`$s = 0$`}, which gives{' '}
                  {`$\\varepsilon = \\pm\\frac{h\\omega_0}{2}$`}. The two edges are symmetric about
                  exact resonance.
                </p>
                <p>
                  So the full width is{' '}
                  {`$\\frac{h\\omega_0}{2} - (-\\frac{h\\omega_0}{2}) = h\\omega_0$`}. Stronger
                  modulation opens a wider band. The sign of {`$\\varepsilon$`} only picks which
                  edge you are near.
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The compatibility condition{' '}
                {`$s^2 = \\frac{1}{4}[(\\frac{h\\omega_0}{2})^2 - \\varepsilon^2]$`} keeps only
                first-order terms in {`$h$`}. So it describes the primary tongue alone.
              </p>
              <p>
                Higher tongues need the modulation to act more than once. A tongue near{' '}
                {`$\\gamma = \\frac{2\\omega_0}{k}$`} appears only at order {`$h^k$`} in the
                expansion. Each extra order multiplies the width by another factor of {`$h$`}. With
                small {`$h$`}, that makes high-{`$k$`} tongues vanishingly thin.
              </p>
            </div>

            <div>
              <MathieuStabilityChart />
            </div>
            <div>
              <ParametricGrowthPlot />
            </div>
          </div>
        </>,

        // Section 5: Friction and the Threshold
        <>
          <div className="lrn-section" id="lrn-section-5" data-section-index="5">
            <h2>Friction and the Threshold</h2>
            <p>
              Real oscillators have damping. Add linear friction with coefficient {`$\\lambda$`} to
              the Mathieu equation. Note that {`$\\lambda$`} here is the damping rate, a different
              quantity from the eigenvalue {`$\\lambda$`} of the monodromy matrix in Sections 2 and
              3.
            </p>
            <div className="lrn-eq">
              <span>{`$$\\ddot{x} + 2\\lambda\\dot{x} + \\omega_0^2\\bigl[1 + h\\cos\\gamma t\\bigr]\\,x = 0$$`}</span>
            </div>
            <p>
              Damping lifts each tongue tip off the {`$h = 0$`} axis. For the primary tongue, the
              resonance band becomes:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$|\\varepsilon| < \\sqrt{\\left(\\frac{h\\omega_0}{2}\\right)^2 - 4\\lambda^2}$$`}</span>
            </div>
            <p>
              Resonance requires a minimum modulation amplitude. Below the{' '}
              <strong>damping threshold</strong> {`$h_{\\rm th} = \\frac{4\\lambda}{\\omega_0}$`},
              there is no instability.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                An oscillator has natural frequency{' '}
                {`$\\omega_0 = 10\\ \\frac{\\text{rad}}{\\text{s}}$`} and damping coefficient{' '}
                {`$\\lambda = 0.3\\ \\frac{\\text{rad}}{\\text{s}}$`}. What is the minimum
                modulation amplitude {`$h$`} for parametric resonance?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The threshold is{' '}
                  {`$h_{\\rm th} = \\frac{4\\lambda}{\\omega_0} = \\frac{4 \\times 0.3}{10} = 0.12$`}
                  .
                </p>
                <p>
                  Any modulation with {`$h < 0.12$`} cannot produce parametric resonance at the
                  primary tongue: friction drains energy faster than the drive supplies it.
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Damping alone causes exponential decay at rate {`$\\lambda$`}. Parametric resonance
                causes exponential growth at rate {`$s$`}. The net growth rate is {`$s - \\lambda$`}
                .
              </p>
              <p>
                From the compatibility condition, the peak growth rate at exact resonance{' '}
                {`$\\varepsilon = 0$`} is {`$s_{\\max} = \\frac{h\\omega_0}{4}$`}. For growth to
                win, you need {`$s_{\\max} > \\lambda$`}, which gives{' '}
                {`$h > \\frac{4\\lambda}{\\omega_0}$`}. That is the threshold.
              </p>
            </div>

            <h3>Why Higher-Order Tongues Are Unobservable</h3>
            <p>Three reasons explain why large-{`$k$`} resonances cannot be seen in practice:</p>
            <ol className="lrn-list">
              <li>
                <strong>Narrow tongues:</strong> the {`$k$`}-th tongue width is proportional to{' '}
                {`$h^k$`}, shrinking exponentially with {`$k$`}.
              </li>
              <li>
                <strong>Weak instability:</strong> inside the narrow tongue, the growth rate is
                tiny, requiring an impractically long observation time.
              </li>
              <li>
                <strong>Friction threshold:</strong> even a small damping {`$\\lambda$`} lifts each
                tongue tip to {`$h_{\\rm th} = \\frac{4\\lambda}{\\omega_0}$`}. For {`$k \\geq 3$`}{' '}
                the tongue is so narrow that no practical modulation amplitude can reach it.
              </li>
            </ol>
          </div>
        </>,

        // Section 6: Stabilizing the Inverted Pendulum
        <>
          <div className="lrn-section" id="lrn-section-6" data-section-index="6">
            <h2>Stabilizing the Inverted Pendulum</h2>
            <p>
              The inverted pendulum is normally unstable. Its upper equilibrium is a saddle in phase
              space: the unshaken monodromy matrix has {`$|\\text{tr}\\,A| > 2$`}. Oscillate the
              pivot vertically at high enough frequency and the trace drops below 2. The upper
              equilibrium becomes stable.
            </p>
            <p>
              Fast vertical oscillation at amplitude {`$a$`} and frequency {`$N$`} (oscillations per
              second) stabilizes the upper equilibrium when:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$N \\geq \\sqrt{\\frac{3}{64}}\\,\\omega\\,\\frac{\\ell}{a} \\approx 0.22\\,\\omega\\,\\frac{\\ell}{a}$$`}</span>
            </div>
            <p>
              Here {`$\\omega = \\sqrt{\\frac{g}{\\ell}}$`} is the natural frequency of the pendulum
              and {`$\\ell$`} is the pendulum length.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A short pendulum of length {`$\\ell = 5$`} cm is held inverted. The pivot oscillates
                vertically with amplitude {`$a = 0.25$`} cm. How many oscillations per second are
                needed to stabilize it?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Use {`$N \\geq 0.22\\,\\omega\\,\\frac{\\ell}{a}$`} with{' '}
                  {`$\\omega = \\sqrt{\\frac{g}{\\ell}}$`}.
                </p>
                <p>
                  Work in centimeters: {`$g = 980\\ \\frac{\\text{cm}}{\\text{s}^2}$`} gives{' '}
                  {`$\\omega = \\sqrt{\\frac{980}{5}} = 14\\ \\frac{\\text{rad}}{\\text{s}}$`} and{' '}
                  {`$\\frac{\\ell}{a} = 20$`}.
                </p>
                <p>
                  So {`$N \\geq 0.22 \\times 14 \\times 20 \\approx 62$`} oscillations per second.
                  The shorter pendulum needs faster shaking than the 20 cm case below.
                </p>
              </details>
            </div>

            <h3>
              Worked Example: {`$\\ell = 20$`} cm, {`$a = 1$`} cm
            </h3>
            <p>
              Put numbers into the threshold. With {`$\\ell = 20$`} cm, {`$a = 1$`} cm, and{' '}
              {`$g = 980\\ \\frac{\\text{cm}}{\\text{s}^2}$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$N \\geq 0.22\\sqrt{\\frac{980}{20}}\\cdot\\frac{20}{1} \\approx 31 \\text{ oscillations per second}$$`}</span>
            </div>
            <p>
              Shaking at 31 Hz with just 1 cm amplitude stabilizes a 20 cm inverted pendulum. This
              is a pure Floquet result: fast shaking drives the monodromy trace from above 2 to
              below 2.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The threshold formula involves the ratio {`$\\frac{\\ell}{a}$`} (here {`$20$`}). Why
                does a large ratio force a high drive frequency?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The stabilizing effect on the monodromy trace scales with the pivot speed {`$aN$`}
                  . A small amplitude {`$a$`} gives a small speed unless {`$N$`} is large.
                </p>
                <p>
                  A long pendulum (large {`$\\ell$`}) has a slow natural frequency but still needs
                  the trace pushed below 2. So a small {`$a$`} relative to {`$\\ell$`} demands fast
                  shaking to move the trace far enough.
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Model the fast shaking as a square wave. The pivot acceleration flips sign every
                half-period. Near the upper equilibrium the angle {`$\\theta$`} then satisfies{' '}
                {`$\\ddot{\\theta} = (\\omega_0^2 \\pm d^2)\\theta$`}. Here {`$d^2$`} is the size of
                the shaking term, and its sign alternates each half-period. For a pivot amplitude{' '}
                {`$a$`} oscillating at {`$N$`} per second, {`$d^2$`} grows with the pivot
                acceleration, so {`$d^2 \\propto (aN)^2/\\ell$`}.
              </p>
              <p>
                The monodromy matrix is the product {`$A = A_2 A_1$`} of the two half-period maps.
                One half has frequency {`$\\sqrt{\\omega_0^2 + d^2}$`}, a rotation. The other has
                frequency {`$\\sqrt{d^2 - \\omega_0^2}$`}, a hyperbolic rotation, since the inverted
                equilibrium flips the restoring sign. Put both into the square-wave trace formula
                from Section 3. Each half-period lasts {`$\\tau = \\frac{1}{2N}$`}.
              </p>
              <p>
                Now expand the trace for fast shaking, where {`$d \\gg \\omega_0$`} and{' '}
                {`$\\omega_0\\tau$`}, {`$d\\tau$`} are both small. The cosines and sines reduce to
                their leading powers (keep only the smallest power of each small angle, drop the
                rest). The trace {`$\\text{tr}(A_2 A_1)$`} drops below 2 once the rotation
                half-period dominates. So the stability boundary {`$\\text{tr}(A_2 A_1) = 2$`} sets
                a critical drive of order {`$N \\sim \\omega_0\\,\\dfrac{\\ell}{a}$`}: fast shaking
                and a small amplitude-to-length ratio are what stabilize the inverted state. The
                exact numerical prefactor depends on the drive waveform (square wave versus
                sinusoid) and is not derived here.
              </p>
              <p>
                This is the Floquet analysis of the same phenomenon that the Kapitza Pendulum page
                treats through the effective-potential lens. Both approaches are exact for fast
                shaking; the monodromy product is the more precise tool for finding the threshold.
              </p>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Normal Equilibrium (Lower)</span>
                <p>
                  Parametrically <em>destabilized</em> by periodic length modulation near{' '}
                  {`$\\gamma = 2\\omega_0$`}. The monodromy trace rises above 2.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Inverted Equilibrium (Upper)</span>
                <p>
                  Parametrically <em>stabilized</em> by fast vertical oscillation. The monodromy
                  trace drops below 2. Same Floquet framework, opposite direction.
                </p>
              </div>
            </div>

            <div>
              <ParametricPendulumSim C={C} />
              <p>
                {`The pivot oscillates vertically at approximately twice the natural frequency. A tiny initial displacement grows exponentially: parametric resonance at the primary tongue.`}
              </p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'A child pumps a swing by changing its effective length periodically. Is this ordinary resonance or parametric resonance? Explain the key difference.',
        a: 'This is parametric resonance. Ordinary resonance adds an external periodic force to the equation. Parametric resonance instead varies an internal parameter in time: here the length, and so the frequency, changes. The equation of motion is homogeneous (right side zero), so zero initial displacement stays zero forever. Any small perturbation grows exponentially when the pumping frequency is near twice the natural frequency. The swing needs a nonzero seed motion to start.'
      },
      {
        q: "The Wronskian of two solutions to Hill's equation is constant. Use this fact to prove the Floquet multipliers satisfy $\\mu_1\\mu_2 = 1$.",
        a: "Start from the Wronskian $W = \\dot{x}_1 x_2 - x_1 \\dot{x}_2$. Hill's equation has no first-derivative term, so $\\frac{dW}{dt} = 0$ and $W$ is constant. After one period $T$, the solution $x_1$ becomes $\\mu_1 x_1$ and $x_2$ becomes $\\mu_2 x_2$. The Wronskian at time $t + T$ is therefore $\\mu_1\\mu_2 W(t)$. Set this equal to $W(t)$. Since $W \\neq 0$, you get $\\mu_1\\mu_2 = 1$. This is exact, with no approximation."
      },
      {
        q: '[TRANSFER] A parametrically driven LC circuit has an inductor whose inductance oscillates at 2 MHz. The natural frequency of the circuit is 1 MHz. Is this circuit in a parametric instability zone?',
        a: 'Yes. The primary tongue sits where the drive frequency equals twice the natural frequency. Here $2 \\times 1\\ \\text{MHz} = 2\\ \\text{MHz}$, which matches the drive exactly. So the circuit lands on the primary tongue. With any nonzero modulation amplitude, the current grows exponentially in the linear model. In practice nonlinear effects cap the amplitude. This is the operating principle of the parametric amplifier: the same Floquet instability used on purpose.'
      },
      {
        q: "The monodromy matrix $A$ for a Hill's equation has $\\text{tr}\\,A = 1.6$. Is the system stable? Find both Floquet multipliers.",
        a: 'The system is stable because $|\\text{tr}\\,A| = 1.6 < 2$. The multipliers solve $\\lambda^2 - 1.6\\lambda + 1 = 0$. So $\\lambda = \\tfrac{1.6 \\pm \\sqrt{1.6^2 - 4}}{2} = 0.8 \\pm 0.6i$. Both multipliers lie on the unit circle, since $|\\lambda| = \\sqrt{0.64 + 0.36} = 1$. The period map rotates the phase plane by angle $\\alpha = \\arctan\\tfrac{0.6}{0.8} \\approx 36.87^\\circ$. A rotation keeps every orbit bounded.'
      },
      {
        q: '[PREDICT] For the Mathieu equation with $\\omega_0 = 1$ and $h = 0.1$, what is the primary tongue width in drive frequency $\\gamma$?',
        a: 'The width equals $h\\omega_0 = 0.1$. The tongue spans $|\\varepsilon| < \\tfrac{h\\omega_0}{2} = 0.05$. Since $\\gamma = 2\\omega_0 + \\varepsilon = 2 + \\varepsilon$, the band runs from $\\gamma = 1.95$ to $\\gamma = 2.05$. The tongue is narrow because $h$ is small. Inside the band solutions grow exponentially. Outside they only oscillate. The width scales linearly with $h$, so stronger modulation widens the danger zone.'
      },
      {
        q: '[ELABORATE] Why does the primary tongue have width proportional to $h$, while the second tongue scales as $h^2$?',
        a: 'The primary tongue comes from first-order perturbation theory. Substitute $x = a(t)\\cos\\omega_0 t + b(t)\\sin\\omega_0 t$ into the Mathieu equation. Keep terms at frequency $\\omega_0$. The $h\\cos\\gamma t$ modulation creates resonant secular terms at first order in $h$. So the boundary scales as $h$. The second tongue near $\\gamma = \\omega_0$ needs second-order coupling: the modulation must act twice before it makes a term at the drive frequency. Each order brings one factor of $h$, so the second tongue scales as $h^2$. In general the $k$-th tongue scales as $h^k$.'
      },
      {
        q: 'An oscillator has $\\omega_0 = 5\\ \\frac{\\text{rad}}{\\text{s}}$ and damping coefficient $\\lambda = 0.1\\ \\frac{\\text{rad}}{\\text{s}}$. What minimum modulation amplitude $h$ triggers parametric resonance at the primary tongue?',
        a: 'The minimum is $h_{\\rm th} = \\tfrac{4\\lambda}{\\omega_0} = \\tfrac{4 \\times 0.1}{5} = 0.08$. Any $h < 0.08$ cannot produce resonance at the primary tongue. Below the threshold, friction drains energy faster than the drive supplies it. For $h > 0.08$, resonance lives in the band $|\\varepsilon| < \\sqrt{\\left(\\tfrac{h\\omega_0}{2}\\right)^2 - 4\\lambda^2}$. The threshold comes from balancing the peak growth rate $s_{\\max} = \\tfrac{h\\omega_0}{4}$ against the damping rate $\\lambda$.'
      },
      {
        q: "[SELF-EXPLAIN] The constant-coefficient matrix $A$ for Hill's equation has $\\text{tr}\\,A = 2\\cos 2\\pi\\omega$. At what $\\omega$ does $|\\text{tr}\\,A| = 2$, and why do these values matter?",
        a: 'You get $|\\text{tr}\\,A| = 2$ when $\\cos 2\\pi\\omega = \\pm 1$. That happens at $\\omega = \\tfrac{k}{2}$ for integer $k = 0, 1, 2, \\ldots$. There the Floquet multipliers are exactly $\\lambda = \\pm 1$, sitting on the unit-circle boundary. These points are the tips of the resonance tongues. The unperturbed system rests right on the edge of stability. Any small periodic modulation pushes it into an instability tongue, because the tongues open from these points. Every other $\\omega$ has $|\\text{tr}\\,A| < 2$ strictly, so it is strongly stable and survives small perturbations.'
      },
      {
        q: '[TRANSFER] A quantum two-level system is driven by a laser oscillating at nearly twice the level splitting. Show this is analogous to parametric resonance.',
        a: 'In the rotating frame, the two-level equation becomes coupled ODEs with time-periodic coefficients. This applies when the drive is near twice the transition frequency, the parametric regime. Stability of the zero state means the atom stays in the ground state. Instability means the excited-state amplitude grows exponentially. The Floquet multipliers of the time-evolution operator act like monodromy eigenvalues. The tongue condition $|\\text{tr}\\,A| > 2$ corresponds to Rabi oscillations growing in amplitude. So it is the same mathematics applied to different physics.'
      },
      {
        q: 'The corrected primary tongue boundary is $\\varepsilon = \\pm\\tfrac{h\\omega_0}{2} - \\tfrac{h^2\\omega_0}{32}$. At what $h$ does the second-order correction shift the boundary by 10% of the first-order value?',
        a: 'You get $h = 1.6$. The first-order boundary is $\\tfrac{h\\omega_0}{2}$. The second-order correction is $\\tfrac{h^2\\omega_0}{32}$. Set the correction to 10% of the first-order term: $\\tfrac{h^2}{32} = 0.1 \\times \\tfrac{h}{2}$. Solving gives $h = \\tfrac{0.1 \\times 32}{2} = 1.6$. For $h < 1.6$ the first-order formula stays accurate within 10%. The expansion breaks down as $h$ approaches 1.'
      },
      {
        q: 'An inverted pendulum has length $\\ell = 30$ cm. The pivot amplitude is $a = 1.5$ cm. What drive frequency $N$ (oscillations per second) stabilizes it?',
        a: 'Use $N \\geq 0.22\\,\\omega\\,\\tfrac{\\ell}{a}$ with $\\omega = \\sqrt{\\tfrac{g}{\\ell}}$ and $g = 980\\ \\frac{\\text{cm}}{\\text{s}^2}$. First $\\omega = \\sqrt{\\tfrac{980}{30}} = \\sqrt{32.67} \\approx 5.72\\ \\frac{\\text{rad}}{\\text{s}}$. Next the ratio $\\tfrac{\\ell}{a} = \\tfrac{30}{1.5} = 20$. So $N \\geq 0.22 \\times 5.72 \\times 20 \\approx 25$ oscillations per second. About 25 shakes per second stabilize it. The monodromy trace crosses 2 at exactly this drive frequency.'
      },
      {
        q: '[PREDICT] Without friction, does parametric resonance occur for all drive amplitudes $h > 0$ inside the primary tongue, or only above a threshold?',
        a: 'Without friction it occurs for all $h > 0$ inside the primary tongue. The growth rate is $s = \\tfrac{1}{2}\\sqrt{\\left(\\tfrac{h\\omega_0}{2}\\right)^2 - \\varepsilon^2}$. At exact resonance $\\varepsilon = 0$, this is positive for any $h > 0$. The tongue tips touch the $h = 0$ axis on the stability chart. The damped case behaves very differently: the tongue lifts off the axis and needs a minimum $h_{\\rm th} = \\tfrac{4\\lambda}{\\omega_0}$. So friction creates a threshold, while the frictionless system has none.'
      },
      {
        q: '[ELABORATE] What does "strong stability" mean for Hill\'s equation, and why is the boundary $|\\text{tr}\\,A| = 2$ not strongly stable?',
        a: 'A system is strongly stable if it is stable and every small perturbation of its coefficients stays stable. The strict inequality $|\\text{tr}\\,A| < 2$ is equivalent to strong stability. The set of stable systems is open around such a point. The boundary $|\\text{tr}\\,A| = 2$ fails this, because the multipliers equal $\\lambda = \\pm 1$. A perturbation that raises the trace above 2 makes the multipliers real, with one larger than 1, giving exponential growth. The boundary is a knife edge: stable itself, but with unstable systems arbitrarily close. Tongues open from the points $\\omega = \\tfrac{k}{2}$ under any nonzero modulation.'
      },
      {
        q: '[SELF-EXPLAIN] In the square-wave stability problem, the monodromy matrix is $A = A_2 A_1$, where each factor is a rotation or hyperbolic rotation over half the period. How does this product set stability?',
        a: 'Each half-period map solves $\\ddot{x} = -f^2(t)x$, where $f$ alternates between $\\omega + \\varepsilon$ and $\\omega - \\varepsilon$. A half-period with positive frequency squared gives a rotation. The product $A = A_2 A_1$ is the full-period monodromy. Stability needs $|\\text{tr}(A_2 A_1)| < 2$. Multiplying the two half-period matrices gives the trace $\\text{tr}\\,A = 2\\cos\\pi\\omega_1\\cos\\pi\\omega_2 - \\left(\\tfrac{\\omega_1}{\\omega_2} + \\tfrac{\\omega_2}{\\omega_1}\\right)\\sin\\pi\\omega_1\\sin\\pi\\omega_2$, with $\\omega_1 = \\omega + \\varepsilon$ and $\\omega_2 = \\omega - \\varepsilon$. Setting it equal to $\\pm 2$ gives the tongue boundaries.'
      },
      {
        q: '[TRANSFER] Explain why the inverted-pendulum threshold $N \\geq 0.22\\,\\omega\\,\\tfrac{\\ell}{a}$ depends on the ratio $\\tfrac{\\ell}{a}$, not on $\\ell$ and $a$ separately.',
        a: 'The trace of the monodromy matrix for the inverted pendulum depends on the combination $(aN)^2 / \\ell$ from the shaking term and $g / \\ell$ from the inverted restoring term. Stability needs the shaking term to drive the trace below 2. The length $\\ell$ appears in both terms and cancels when you solve for $N$. What remains is $N^2 \\propto g / a^2$, so only the ratio $\\ell / a$ survives in the threshold. A longer pendulum needs a larger amplitude in the same proportion.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Floquet Theory, Mathieu Equation, and Parametric Resonance',
      sections: [
        <>
          <div className="ref">
            <h2>Core Equations</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Hill's Equation</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-hero">
                  <span>{`$$\\ddot{x} + \\omega^2(t)\\,x = 0, \\qquad \\omega(t+T) = \\omega(t)$$`}</span>
                </div>
                <p>
                  When to use: any linear oscillator with a time-periodic frequency. Pendulums with
                  periodic length, gravity, or support position all reduce to this form.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Mathieu's Equation</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$\\ddot{x} + \\omega_0^2\\bigl[1 + h\\cos\\gamma t\\bigr]\\,x = 0$$`}</span>
                </div>
                <p>
                  When to use: Hill's equation with cosine modulation. The prototype for stability
                  analysis and the Ince-Strutt diagram.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Floquet Multiplier Constraint</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$\\mu_1\\,\\mu_2 = 1$$`}</span>
                </div>
                <p>
                  When to use: always. Follows from Wronskian conservation. If one multiplier is
                  known, the other is its reciprocal.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Trace Stability Test</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-hero">
                  <span>{`$$|\\text{tr}\\,A| < 2 \\;\\Longrightarrow\\; \\text{stable}, \\qquad |\\text{tr}\\,A| > 2 \\;\\Longrightarrow\\; \\text{unstable}$$`}</span>
                </div>
                <p>
                  When to use: after computing the monodromy matrix {`$A$`} by integrating two
                  initial conditions over one period. This is the central diagnostic for all Hill's
                  equation stability problems.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Monodromy Matrix (constant {`$\\omega$`})</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$A = \\begin{pmatrix} \\cos 2\\pi\\omega & \\tfrac{1}{\\omega}\\sin 2\\pi\\omega \\\\ -\\omega\\sin 2\\pi\\omega & \\cos 2\\pi\\omega \\end{pmatrix}, \\quad \\text{tr}\\,A = 2\\cos 2\\pi\\omega$$`}</span>
                </div>
                <p>
                  When to use: for the unperturbed ({`$\\varepsilon = 0$`}) constant-coefficient
                  system with period {`$2\\pi$`}. Use to identify which values of {`$\\omega$`} are
                  at tongue tips.
                </p>
              </div>
            </div>

            <h2>Resonance Tongues</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Primary Tongue Boundary</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-hero">
                  <span>{`$$-\\frac{h\\omega_0}{2} < \\varepsilon < \\frac{h\\omega_0}{2}, \\qquad \\gamma = 2\\omega_0 + \\varepsilon$$`}</span>
                </div>
                <p>
                  When to use: to find the drive frequency range that produces parametric
                  instability at first order in {`$h$`}. Width of the tongue is {`$h\\omega_0$`}.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Growth Rate Inside Primary Tongue</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$s = \\frac{1}{2}\\sqrt{\\left(\\frac{h\\omega_0}{2}\\right)^2 - \\varepsilon^2}$$`}</span>
                </div>
                <p>
                  When to use: to compute how fast the amplitude grows inside the primary tongue.
                  Maximum at {`$\\varepsilon = 0$`}: {`$s_{\\max} = \\frac{h\\omega_0}{4}$`}.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Damping Threshold</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-hero">
                  <span>{`$$h_{\\rm th} = \\frac{4\\lambda}{\\omega_0}$$`}</span>
                </div>
                <p>
                  When to use: to find the minimum modulation needed to overcome damping at the
                  primary tongue. No resonance is possible for {`$h < h_{\\rm th}$`}.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Higher-Order Tongue Widths</span>
              <div className="lrn-definition-desc">
                <p>
                  Tongue at {`$\\gamma = \\frac{2\\omega_0}{k}$`} has width proportional to{' '}
                  {`$h^k$`}. For {`$k = 1$`}: width {`$\\sim h$`}. For {`$k = 2$`}: width{' '}
                  {`$\\sim h^2$`}. For {`$k \\geq 3$`}: practically unobservable.
                </p>
                <p>
                  When to use: to quickly assess which tongues are observable given a specific
                  modulation amplitude.
                </p>
              </div>
            </div>

            <h2>Inverted Pendulum Stabilization</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Stabilization Threshold</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-hero">
                  <span>{`$$N \\geq 0.22\\,\\omega\\,\\frac{\\ell}{a}, \\qquad \\omega = \\sqrt{\\frac{g}{\\ell}}$$`}</span>
                </div>
                <p>
                  When to use: to find the minimum drive frequency {`$N$`} (in oscillations per
                  second) to stabilize an inverted pendulum of length {`$\\ell$`} with pivot
                  oscillation amplitude {`$a$`}.
                </p>
                <p>
                  Concrete example: {`$\\ell = 20$`} cm, {`$a = 1$`} cm gives {`$N \\geq 31$`}
                  oscillations per second.
                </p>
              </div>
            </div>

            <h2>Stability Table</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>{`$\\text{tr}\\,A$`}</th>
                  <th>Multipliers</th>
                  <th>Phase Map</th>
                  <th>Stability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`$|\\text{tr}\\,A| < 2$`}</td>
                  <td>{`$e^{\\pm i\\alpha}$`} on unit circle</td>
                  <td>Rotation</td>
                  <td>Strongly stable</td>
                </tr>
                <tr>
                  <td>{`$|\\text{tr}\\,A| = 2$`}</td>
                  <td>{`$\\pm 1$`} (real, on circle boundary)</td>
                  <td>Shear / parabolic</td>
                  <td>Stable but not strongly</td>
                </tr>
                <tr>
                  <td>{`$|\\text{tr}\\,A| > 2$`}</td>
                  <td>
                    Real, one {`$> 1$`}, one {`$< 1$`}
                  </td>
                  <td>Hyperbolic rotation</td>
                  <td>Unstable (parametric resonance)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ]
    }
  }
}

export default function FloquetMathieuParametricResonance() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
