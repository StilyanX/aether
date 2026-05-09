import { useEffect, useRef } from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  AdiabaticInvariantArea,
  AdiabaticOscillator,
  AdiabaticPhaseEllipse
} from '../../../../../components/viz/physics-viz/modules'

// Adiabatic invariant simulation: oscillator with slowly changing frequency
function AdiabaticSimulation({ C }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    let engine, render, runner
    let Matter
    let time = 0

    async function init() {
      Matter = (await import('matter-js')).default
      const container = canvasRef.current
      if (!container) return
      const W = container.clientWidth || 600
      const H = 280

      engine = Matter.Engine.create({ gravity: { x: 0, y: 0 } })
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

      const cx = W / 2
      const cy = H / 2

      // Ball oscillating horizontally
      const ball = Matter.Bodies.circle(cx + 80, cy, 12, {
        frictionAir: 0,
        render: { fillStyle: C.accent, strokeStyle: 'transparent' }
      })
      Matter.Body.setVelocity(ball, { x: 0, y: 0 })

      // Walls
      const walls = [
        Matter.Bodies.rectangle(0, cy, 4, H, { isStatic: true, render: { fillStyle: C.dim } }),
        Matter.Bodies.rectangle(W, cy, 4, H, { isStatic: true, render: { fillStyle: C.dim } })
      ]

      Matter.Events.on(engine, 'beforeUpdate', () => {
        time += 0.016
        // Slowly increasing spring constant (frequency increases over 10 seconds)
        const k = 0.003 + 0.0001 * Math.min(time, 20)
        const dx = cx - ball.position.x
        Matter.Body.applyForce(ball, ball.position, { x: k * dx, y: 0 })
      })

      Matter.Body.setVelocity(ball, { x: 3, y: 0 })
      Matter.Composite.add(engine.world, [ball, ...walls])

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
      ref={canvasRef}
      style={{
        width: '100%',
        height: 280,
        background: 'transparent',
        border: `1px solid ${C.faint}`
      }}
    />
  )
}

// ─── Config ──────────────────────────────────────────────────────────────────

function AdiabaticInvariantsContentInner() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'rbd',
    source: 'Mechanics (Course of Theoretical Physics, Vol. 1) - Landau & Lifshitz',
    documentTitle: 'Adiabatic Invariants - AETHER',
    learning: {
      groupTitle: 'Part IV: Perturbation Theory and Advanced Topics',
      category: 'Physics',
      title: 'Adiabatic Invariants',
      subtitle:
        'Slowly varying parameters, adiabatic invariant conservation, and action-angle variables',
      sections: [
        // ── Section 11: Adiabatic Invariants ───────────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Adiabatic Invariants</h2>
            <p>
              Shorten a pendulum while it swings and its energy increases - you are doing work on
              it. So energy is not conserved when the length changes. But something else is. That
              hidden quantity is the adiabatic invariant, and it survives as long as the length
              changes slowly compared to each swing.
            </p>
            <p>
              {`"Almost constant" understates the precision. The error is not merely small - it is
              exponentially small. Each time you halve the rate of change, the error does not halve:
              it shrinks by a factor like $e$ raised to a large negative power. Adiabatic invariants
              hold with remarkable accuracy in practice.`}
            </p>
            <p>
              This idea appears across physics. Magnetic mirrors trap charged particles through
              adiabatic invariance. The quantum adiabatic theorem - the basis of quantum annealing -
              is its quantum counterpart.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A pendulum's length is slowly shortened while it swings. The energy increases (you
                do work on it). Can you guess what quantity stays constant?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The ratio {`$\\frac{E}{\\omega}$`} stays constant, where {`$\\omega$`} is the
                  angular frequency.
                </p>
                <p>
                  As the length decreases, {`$\\omega$`} increases, so E increases in proportion.
                </p>
                <p>The adiabatic invariant for a 1D oscillator is {`$I = \\frac{E}{\\omega}$`}.</p>
              </details>
            </div>

            <h3>The Adiabatic Condition</h3>
            <p>
              {`Let $\\lambda$ be any slowly-varying parameter of the system - a spring constant, a
              magnetic field strength, a pendulum length. The adiabatic condition says $\\lambda$
              moves so little during one oscillation that it barely matters:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$T\\,\\frac{d\\lambda}{dt} \\ll \\lambda$$`}</span>
            </div>
            <p>
              {`Here $T$ is the period of the oscillation. The left side is how much $\\lambda$ changes
              in one period. The right side is $\\lambda$ itself. The condition says: the fractional
              change per cycle is tiny.`}
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Adiabatic Change</span>
                <p>Parameter changes slowly over many oscillation periods.</p>
                <p>Adiabatic invariant I is preserved.</p>
                <p>Energy changes proportionally to frequency: {`$E \\propto \\omega$`}.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Sudden Change</span>
                <p>Parameter changes in a time much shorter than one period.</p>
                <p>Energy is preserved, not I.</p>
                <p>The system changes discontinuously. No adiabatic invariant is preserved.</p>
              </div>
            </div>

            <h3>Definition of the Adiabatic Invariant</h3>
            <p>
              For a 1D system with a slowly-changing parameter, the adiabatic invariant is a
              geometric quantity: the area enclosed by the orbit in phase space, divided by{' '}
              {`$2\\pi$`}.
            </p>
            <p>
              Phase space is the plane of all possible positions {`$q$`} (where the particle is) and
              momenta {`$p = mv$`} (how fast it moves). At every moment, the particle is a single
              point in this plane. Over one full oscillation, that point traces a closed loop. The
              area inside the loop is:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$I \\equiv \\oint \\frac{p\\,dq}{2\\pi}$$`}</span>
            </div>
            <p>
              This quantity is conserved - up to exponentially small corrections - whenever
              parameters change adiabatically.
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Simulation</span>
              <p>
                The ball oscillates horizontally. The spring stiffness slowly increases over time,
                so the frequency rises. Watch the amplitude shrink. The ball moves faster but over a
                smaller range. The energy rises with the frequency - yet the area of the orbit loop
                in position-momentum space stays constant. That area is {`$I$`}.
              </p>
            </div>
            <AdiabaticSimulation C={C} />
            <AdiabaticOscillator />

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                If parameters change very slowly, the system at any moment looks like a system with
                constant parameters. So the motion is almost periodic.
              </p>
              <p>
                {`We compute $\\dot{I}$ and then average it over one fast oscillation cycle. The
                parameter $\\lambda$ changes on a slow timescale; the oscillation runs on a fast one.
                When you average over the fast cycle, the oscillation washes out, and only the slow
                drift survives. The result is that $\\dot{I}$ is proportional to $\\dot{\\lambda}$.`}
              </p>
              <p>
                {`In the adiabatic limit $\\dot{\\lambda} \\to 0$, the rate of change of $I$ goes to
                zero - and $I$ is exactly conserved.`}
              </p>
              <p>
                {`A more careful analysis shows the corrections are not just small but exponentially
                small in $\\frac{\\omega\\lambda}{\\dot{\\lambda}}$, the ratio of oscillation frequency to
                fractional drift rate. The faster the oscillation relative to the drift, the better
                the invariant holds.`}
              </p>
            </div>

            <h3>Period and Frequency Relations</h3>
            <p>
              The period T and frequency {`$\\omega$`} are related to the adiabatic invariant by:
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\pi\\,\\frac{\\partial I}{\\partial E} = T, \\qquad \\frac{\\partial E}{\\partial I} = \\omega$$`}</span>
            </div>
            <p>For a 1D oscillator specifically:</p>
            <div className="lrn-eq">
              <span>{`$$I = \\frac{E}{\\omega}$$`}</span>
            </div>
            <p>
              So as {`$\\omega$`} changes slowly, E changes in proportion: {`$E \\propto \\omega$`}.
            </p>
            <p>
              {`In quantum mechanics, $n = \\frac{I}{\\hbar}$, where $n$ is the quantum number - the number of
              energy steps the oscillator has climbed. Conserving $I$ means conserving $n$. When
              quantum mechanics reproduces classical behavior - at large $n$ - the adiabatic
              invariant and the quantum number are the same thing.`}
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                A charged particle spirals along a magnetic field line. The field slowly strengthens
                as the particle moves toward a "magnetic mirror." Does the particle speed up, slow
                down, or stay the same? Form your answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The particle's circular motion in the plane perpendicular to the field is an
                  oscillator. The adiabatic invariant is the magnetic moment{' '}
                  {`$\\mu = \\frac{mv_\\perp^2}{2B}$`} - the ratio of the particle's rotational
                  kinetic energy ({`$\\tfrac{1}{2}mv_\\perp^2$`}) to the field strength {`$B$`}.
                </p>
                <p>
                  As B increases, {`$v_\\perp$`} must increase to keep {`$\\mu$`} constant. Since
                  total speed is conserved (the magnetic force does no work), the parallel speed{' '}
                  {`$v_\\parallel$`} decreases.
                </p>
                <p>
                  If B is strong enough, {`$v_\\parallel$`} reaches zero and the particle reflects:
                  this is the magnetic mirror effect.
                </p>
              </details>
            </div>

            <AdiabaticInvariantArea />

            <div className="lrn-insight">
              <strong>Key insight:</strong> The adiabatic invariant {`$I = \\frac{E}{\\omega}$`}{' '}
              connects to the quantum number {`$n$`} via {`$I = n\\hbar$`} - so classical adiabatic
              invariance and the quantum adiabatic theorem are the same law, seen from different
              scales.
            </div>

            <AdiabaticPhaseEllipse />
          </div>
        </>,
        // ── Section 12: Canonical (Action-Angle) Variables ─────────────────
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Canonical Variables (Action-Angle Variables)</h2>
            <p>
              Action-angle variables give you the simplest possible description of periodic motion.
              In standard coordinates {`$(q, p)$`}, a nonlinear oscillator traces a complicated
              closed curve in phase space each cycle. Switch to action-angle variables {`$(I, w)$`},
              and that curve becomes a horizontal straight line: {`$I$`} stays constant, {`$w$`}{' '}
              increases at a steady rate {`$\\omega$`}. All the complexity of the oscillator is
              absorbed into how {`$\\omega$`} depends on {`$I$`}. Use these variables to read off
              frequencies without solving the full equations, or as the starting point for
              perturbation theory.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                In action-angle variables, Hamilton's equations are {`$\\dot{I} = 0$`} and{' '}
                {`$\\dot{w} = \\omega(I)$`}. What does the trajectory look like in the {`$(I, w)$`}{' '}
                plane?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  It is a horizontal straight line at height {`$I = I_0$`}, traversed at constant
                  speed {`$\\omega(I_0)$`}.
                </p>
                <p>The phase space structure is completely flat in action-angle coordinates.</p>
              </details>
            </div>

            <h3>Construction of Action-Angle Variables</h3>
            <p>Define the action variable as:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$I = \\oint \\frac{p\\,dq}{2\\pi}$$`}</span>
            </div>
            <p>
              {`Define the abbreviated action $S_0(q; I)$ as the running integral of momentum along
              the orbit up to position $q$, evaluated at fixed energy $E(I)$:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$S_0(q; I) = \\int^q p(q',\\, E(I))\\,dq'$$`}</span>
            </div>
            <p>
              {`This accumulates the area swept in phase space as you move from the starting point
              to $q$.`}
            </p>
            <p>The angle variable is the canonical conjugate of I:</p>
            <div className="lrn-eq">
              <span>{`$$w = \\frac{\\partial S_0(q; I)}{\\partial I}$$`}</span>
            </div>
            <p>Hamilton's equations in these variables become:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\dot{I} = 0, \\qquad \\dot{w} = \\frac{dE(I)}{dI} = \\omega(I)$$`}</span>
            </div>
            <p>
              So the solution is {`$I = \\text{const}$`}, {`$w = \\omega(I)\\,t + \\text{const}$`}.
            </p>

            <div className="lrn-callout lrn-warning">
              <span className="lrn-callout-label">Important</span>
              <p>
                {`The abbreviated action $S_0(q, I; \\lambda)$ used in the adiabatic context is not the true abbreviated action for a time-dependent Hamiltonian.`}
              </p>
              <p>
                {`It is defined by treating $E$ and $\\lambda$ as slowly varying parameters and solving for $p(q, E; \\lambda)$ at each instant.`}
              </p>
              <p>This is consistent in the adiabatic approximation, but not exact.</p>
            </div>

            <h3>Angle Variable Increment per Period</h3>
            <p>
              In one complete period of oscillation, the angle variable increases by exactly{' '}
              {`$2\\pi$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\Delta w = \\oint \\frac{\\partial^2 S_0}{\\partial I\\,\\partial q}\\,dq = \\frac{\\partial}{\\partial I}\\oint \\frac{\\partial S_0}{\\partial q}\\,dq = \\frac{\\partial}{\\partial I}(2\\pi I) = 2\\pi$$`}</span>
            </div>
            <p>
              {`The key step is the third equality: since $\\frac{\\partial S_0}{\\partial q} = p$ (by
              definition of $S_0$ as the running momentum integral), the closed-loop integral is
              just $\\oint p\\,dq = 2\\pi I$ - which is the definition of the action variable.
              Differentiating with respect to $I$ gives $2\\pi$ regardless of the system. So $w$
              is a true angle, cycling through $2\\pi$ per oscillation.`}
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Coordinates {`$(q, p)$`}</span>
                <p>Motion is complicated, curves in phase space</p>
                <p>Equations of motion are nonlinear</p>
                <p>Direct physical observables</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Action-Angle {`$(I, w)$`}</span>
                <p>Motion is trivial, horizontal lines</p>
                <p>{`$\\dot{I}=0$, $\\dot{w}=\\omega(I)$ - equations fully decoupled`}</p>
                <p>Ideal for perturbation theory and frequency analysis</p>
              </div>
            </div>

            <h3>Worked Example: Harmonic Oscillator with Time-dependent Frequency</h3>
            <p>
              {`The Hamiltonian is $H = \\frac{p^2}{2m} + \\tfrac{1}{2}m\\omega^2(t)q^2$ with slowly varying $\\omega(t)$.`}
            </p>
            <p>
              {`At fixed $\\omega$, the action-angle relations are $q = \\sqrt{\\frac{2I}{m\\omega}}\\sin w$ and $p = \\sqrt{2Im\\omega}\\cos w$.`}
            </p>
            <p>Substituting into the canonical equations gives:</p>
            <div className="lrn-eq">
              <span>{`$$\\dot{I} = -\\frac{I\\dot{\\omega}}{\\omega}\\cos 2w, \\qquad \\dot{w} = \\omega + \\frac{\\dot{\\omega}}{2\\omega}\\sin 2w$$`}</span>
            </div>
            <p>
              The mean of {`$\\cos 2w$`} over one cycle is zero, so I is constant on average even
              when {`$\\omega$`} varies in time. This is the adiabatic invariant result in
              action-angle form.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does {`$\\dot{I}$`} contain a factor of {`$\\frac{\\dot{\\omega}}{\\omega}$`}{' '}
                and not just {`$\\dot{\\omega}$`}? Form your answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$I$ is the area of the orbit ellipse in phase space, divided by $2\\pi$. The
                  ellipse has axes proportional to $\\sqrt{\\frac{E}{m\\omega^2}}$ (position) and
                  $\\sqrt{mE}$ (momentum). Its area is $\\pi \\cdot \\sqrt{\\frac{E}{m\\omega^2}} \\cdot
                  \\sqrt{mE} = \\frac{\\pi E}{\\omega}$.`}
                </p>
                <p>
                  {`Scaling $\\omega$ by a constant stretches one axis and squeezes the other
                  equally, leaving the area - and hence $I$ - unchanged. So $I$ does not respond
                  to the absolute value of $\\omega$, only to fractional changes. That is why
                  $\\frac{\\dot{\\omega}}{\\omega}$ appears, not $\\dot{\\omega}$ alone.`}
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The transformation from $(q, p)$ to $(I, w)$ is canonical, generated by the abbreviated action $S_0(q, I; \\lambda)$.`}
              </p>
              <p>
                {`When $\\lambda$ is constant, $S_0$ is time-independent so $H' = H$, i.e., the new Hamiltonian is just the energy $E(I)$.`}
              </p>
              <p>
                {`When $\\lambda$ varies, the generating function gains time dependence, modifying the
                Hamiltonian to $H' = E(I;\\lambda) + \\Lambda\\dot{\\lambda}$, where
                $\\Lambda = \\left(\\frac{\\partial S_0}{\\partial\\lambda}\\right)_{q,I}$.`}
              </p>
              <p>
                {`Hamilton's equations then give $\\dot{I} = -\\frac{\\partial H'}{\\partial w}$. The energy
                $E(I;\\lambda)$ does not depend on $w$, so only the $\\Lambda\\dot{\\lambda}$ term
                contributes. That term oscillates rapidly at frequency $\\omega$. When averaged over
                one cycle, it cancels to zero: $I$ is an invariant on average.`}
              </p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'A harmonic oscillator has frequency 4 rad/s and energy 12 J. The frequency is slowly doubled to 8 rad/s. What is the new energy?',
        a: 'The new energy is 24 J. The adiabatic invariant $I = \\frac{E}{\\omega}$ is conserved when $\\omega$ changes slowly. Initially $I = \\frac{12}{4} = 3$ J·s. After doubling: $E = I\\omega = 3 \\times 8 = 24$ J. The energy doubles because $I = \\frac{E}{\\omega}$ forces $E$ to scale with $\\omega$. The amplitude shrinks: for a harmonic oscillator $E = \\frac{1}{2}m\\omega^2 A^2$, so $A$ is proportional to $\\frac{1}{\\sqrt{\\omega}}$. Double the frequency, multiply the amplitude by $\\frac{1}{\\sqrt{2}}$: faster oscillation, tighter swing.'
      },
      {
        q: 'Predict: A planet orbits a star. The star slowly loses mass over millions of years. Does the planet orbit grow or shrink?',
        a: "The orbit grows. Treat the radial oscillation as a slow oscillator. Its adiabatic invariant is the radial action $I_r$. As $GM_\\star$ decreases, the gravitational pull weakens. The orbit expands to keep the same action. More directly: for a circular orbit, $E = -\\frac{GM_\\star m}{2a}$, where $a$ is the orbital radius. As $M_\\star$ decreases slowly, $a$ must grow to keep the action constant. The exact result is $a \\cdot M_\\star = \\text{const}$: the orbit radius grows in inverse proportion to the star's mass."
      },
      {
        q: 'Transfer: A magnetic pendulum oscillates with frequency omega(B) that depends on a slowly varying magnetic field B(t). The field increases by a factor of 4. By what factor does the energy change?',
        a: 'The adiabatic invariant $I = \\frac{E}{\\omega}$ is conserved. So $E$ changes in proportion to $\\omega$. If $\\omega$ depends on $B$, you need the specific $\\omega(B)$ relation. If $\\omega$ is proportional to $\\sqrt{B}$ (common in magnetic problems), then $\\omega$ doubles when $B$ quadruples, so $E$ doubles. The key principle: track $I = \\frac{E}{\\omega}$, not $E$ alone.'
      },
      {
        q: 'Self-explain: Why does the angle variable increase by exactly 2pi per oscillation period?',
        a: 'The angle variable is $w = \\frac{\\partial S_0}{\\partial I}$. Its increment over one period is $\\Delta w = \\oint \\frac{\\partial^2 S_0}{\\partial I\\,\\partial q}\\,dq = \\frac{\\partial}{\\partial I}\\oint \\frac{\\partial S_0}{\\partial q}\\,dq = \\frac{\\partial}{\\partial I}\\oint p\\,dq = \\frac{\\partial(2\\pi I)}{\\partial I} = 2\\pi$. The key step: by construction $\\frac{\\partial S_0}{\\partial q} = p$, so the closed-loop integral $\\oint \\frac{\\partial S_0}{\\partial q}\\,dq = \\oint p\\,dq = 2\\pi I$. This is exactly the definition of the action variable $I$. Differentiating with respect to $I$ gives $2\\pi$, regardless of the system. The angle variable is always a true $2\\pi$-periodic angle.'
      }
    ],

    // ── Reference Mode ──────────────────────────────────────────────────────
    reference: {
      category: 'Quick Reference',
      title: 'Adiabatic Invariants',
      sections: [
        <>
          <div className="ref">
            <h2>Adiabatic Invariants</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Adiabatic invariant</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-display">
                  <span>{`$$I = \\oint \\frac{p\\,dq}{2\\pi}$$`}</span>
                </div>
                <p>
                  When to use: when system parameters vary slowly compared to the oscillation
                  period. I is conserved up to exponentially small corrections.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">1D oscillator adiabatic invariant</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$I = \\frac{E}{\\omega}$`}: as omega changes slowly, E changes in proportion to
                  omega.
                </p>
                <p>When to use: for any 1D oscillator with slowly varying frequency.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Frequency from adiabatic invariant</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$\\frac{\\partial E}{\\partial I} = \\omega$`} and{' '}
                  {`$\\frac{2\\pi\\,\\partial I}{\\partial E} = T$`}
                </p>
                <p>
                  When to use: to find the frequency of oscillation without solving the full
                  equations of motion.
                </p>
              </div>
            </div>

            <h2>Action-Angle Variables</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Angle variable</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$w = \\frac{\\partial S_0(q;I)}{\\partial I}$`}, canonically conjugate to I.
                </p>
                <p>
                  When to use: together with I to give the simplest coordinates for periodic motion.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">
                Equations of motion in action-angle variables
              </span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq">
                  <span>{`$$\\dot{I} = 0, \\qquad \\dot{w} = \\omega(I) = \\frac{dE}{dI}$$`}</span>
                </div>
                <p>
                  When to use: for any periodic 1D Hamiltonian system in action-angle coordinates.
                </p>
              </div>
            </div>
          </div>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}

export default function AdiabaticInvariantsContent() {
  return <AdiabaticInvariantsContentInner />
}
