import { useEffect, useRef } from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  AdiabaticInvariantArea,
  AdiabaticOscillator,
  AdiabaticPhaseEllipse
} from '../../../../../components/viz'

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
        border: `1px solid ${C.dim}`
      }}
    />
  )
}

// Config

function AdiabaticInvariantsContentInner() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'rbd',
    documentTitle: 'Adiabatic Invariants - AETHER',
    learning: {
      groupTitle: 'Perturbation Theory and Advanced Topics',
      category: 'Physics',
      title: 'Adiabatic Invariants',
      subtitle:
        'Slowly varying parameters, adiabatic invariant conservation, and action-angle variables',
      sections: [
        // Section 11: Adiabatic Invariants
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Adiabatic Invariants</h2>
            <p>
              Shorten a pendulum while it swings and its energy increases - you are doing work on
              it. So energy is not conserved when the length changes. But something else is. That
              hidden quantity is the adiabatic invariant, and it survives as long as the length
              changes slowly compared to each swing. Adiabatic means the change is slow enough that
              the system keeps up each cycle.
            </p>
            <p>
              {`Adiabatic invariants are far better than "almost constant." The error is exponentially small. So they hold with remarkable accuracy in practice. A complex-time derivation proves this. Here we take the result and use it.`}
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
              {`You already met this loop area last unit: the action $I$, the phase-space area swept by
              one oscillation, over $2\\pi$. The adiabatic invariant for a 1D system is exactly that
              action (the $\\oint$ sign means add up the momentum around the closed loop):`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$I \\equiv \\oint \\frac{p\\,dq}{2\\pi}$$`}</span>
            </div>
            <p>
              This quantity holds steady - up to exponentially small corrections - whenever
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
                {`The corrections are not just small. They are exponentially small in
                $\\frac{\\omega\\lambda}{\\dot{\\lambda}}$, the ratio of oscillation frequency to fractional
                drift rate. The faster the oscillation relative to the drift, the better the invariant
                holds.`}
              </p>
            </div>

            <h3>Period and Frequency Relations</h3>
            <p>
              {`These next two come straight from action-angle variables. The angle advances at the rate
              $\\partial E/\\partial I = \\omega$, and the period is how long one full turn takes. So the
              period $T$ and frequency $\\omega$ tie to the invariant by:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$2\\pi\\,\\frac{\\partial I}{\\partial E} = T, \\qquad \\frac{\\partial E}{\\partial I} = \\omega$$`}</span>
            </div>
            <p>
              {`For a 1D oscillator specifically, the orbit loop is an ellipse, and its area works out
              to $\\oint p\\,dq = \\frac{2\\pi E}{\\omega}$. Dividing by $2\\pi$ gives:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$I = \\frac{E}{\\omega}$$`}</span>
            </div>
            <p>
              So as {`$\\omega$`} changes slowly, E changes in proportion: {`$E \\propto \\omega$`}.
            </p>
            <p>
              {`In quantum mechanics, $n = \\frac{I}{\\hbar}$, where $n$ is the quantum number - the number
              of energy steps the oscillator has climbed. ($\\hbar$ is Planck's constant, the size of
              one quantum step.) Conserving $I$ means conserving $n$.`}
            </p>

            <p>
              {`A charged particle's gyration across a slowly changing magnetic field is one more
              oscillator, so it carries its own adiabatic invariant: the magnetic moment
              $\\mu = \\frac{mv_\\perp^2}{2B}$. The next topic develops this and the magnetic mirror in
              full.`}
            </p>

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
        // Section 12: The slow drift of the action
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Why the Action Barely Drifts</h2>
            <p>
              {`You already have the tools. Use action-angle coordinates $(I, w)$ - the action $I$ (the
              loop area in phase space, over $2\\pi$) stays fixed, and the angle $w$ winds around. The
              action $I$ is constant and the angle $w$ runs at the steady rate $\\omega(I)$. So
              $\\dot{I} = 0$ and $\\dot{w} = \\omega$, and the angle climbs by exactly $2\\pi$ each
              period. Now let a parameter $\\lambda$ drift slowly. Then $I$ is no longer perfectly
              constant. How fast does it move, and why does that motion average away?`}
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Recall</span>
              <p>
                {`$I = \\oint p\\,dq / 2\\pi$ is the action (closed-loop area in phase space, over
                $2\\pi$). Its partner is the angle $w$, with $\\dot{I} = 0$ and $\\dot{w} = \\omega(I)$
                at fixed parameters. We use these results here without rebuilding them.`}
              </p>
            </div>

            <h3>Worked Example: Oscillator with Drifting Frequency</h3>
            <p>
              {`Take $H = \\frac{p^2}{2m} + \\tfrac{1}{2}m\\omega^2(t)q^2$ with $\\omega(t)$ drifting
              slowly. (The Hamiltonian $H$ is the total energy written in terms of $q$ and $p$.)`}
            </p>
            <p>
              {`First write $q$ and $p$ in action-angle form. At fixed $\\omega$ the energy is
              $E = \\tfrac{1}{2}m\\omega^2 A^2$ at amplitude $A$, and $I = E/\\omega$, so
              $A = \\sqrt{2E/(m\\omega^2)} = \\sqrt{2I/(m\\omega)}$. With $q = A\\sin w$:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$q = \\sqrt{\\frac{2I}{m\\omega}}\\,\\sin w, \\qquad p = m\\dot{q} = m\\,A\\,\\omega\\cos w = \\sqrt{2Im\\omega}\\,\\cos w$$`}</span>
            </div>
            <p>
              {`Now use Hamilton's equations $\\dot{q} = p/m$ and $\\dot{p} = -m\\omega^2 q$. Differentiate
              the $q$ and $p$ above (both depend on time through $I$, $w$, and $\\omega$), match the two
              sides term by term, and solve the pair for $\\dot{I}$ and $\\dot{w}$. This gives:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$\\dot{I} = -\\frac{I\\dot{\\omega}}{\\omega}\\cos 2w, \\qquad \\dot{w} = \\omega + \\frac{\\dot{\\omega}}{2\\omega}\\sin 2w$$`}</span>
            </div>
            <p>
              {`The mean of $\\cos 2w$ over one cycle is zero. So $I$ holds constant on average even
              while $\\omega$ changes. The drift term carries the small factor $\\dot{\\omega}/\\omega$:
              $I$ responds only to the fractional change in $\\omega$, never to its absolute value.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The move from $(q, p)$ to $(I, w)$ is a canonical change of variables (one that
                leaves Hamilton's equations in the same form). It is built from a single
                generating function $S_0$, the one function whose derivatives define the whole
                change of coordinates.`}
              </p>
              <p>
                {`When $\\lambda$ is fixed, $S_0$ carries no time dependence. The new Hamiltonian is
                just the energy, $H' = E(I)$.`}
              </p>
              <p>
                {`When $\\lambda$ drifts, $S_0$ picks up a time dependence. That shifts the
                Hamiltonian to $H' = E(I;\\lambda) + \\Lambda\\dot{\\lambda}$, with
                $\\Lambda = \\left(\\frac{\\partial S_0}{\\partial\\lambda}\\right)_{q,I}$.`}
              </p>
              <p>
                {`Hamilton's equations give $\\dot{I} = -\\partial H'/\\partial w$. The energy term does
                not depend on $w$, so only $\\Lambda\\dot{\\lambda}$ drives $I$. That term swings
                rapidly at frequency $\\omega$. Averaged over one cycle it cancels, so $I$ is
                invariant on average.`}
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
        a: 'The orbit grows. The radial in-and-out motion is itself a slow oscillator, so its action is the invariant for a gently weakening central pull. A central force exerts no torque, so the angular momentum $L = m\\sqrt{GM_\\star a}$ holds steady through the slow mass loss. Hold $L$ fixed and you get $GM_\\star a = \\text{const}$, so $a \\cdot M_\\star = \\text{const}$. As $M_\\star$ falls, $a$ rises in inverse proportion: the orbit widens to conserve the action.'
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

    // Reference Mode
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
