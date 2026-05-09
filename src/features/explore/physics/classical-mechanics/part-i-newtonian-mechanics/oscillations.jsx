import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  DampedOsc,
  DampingRegimes,
  LorentzianRes,
  PhaseShift,
  PendulumEnergy,
  ResonanceDriver,
  PhasePortraitDrag
} from '../../../../../components/viz/physics-viz/modules'

// Component

export default function OscillationsPart1() {
  const config = {
    cssPrefix: 'osc',
    source: 'An Introduction to Mechanics - Kleppner & Kolenkow',
    documentTitle: 'Oscillations (Part I) - AETHER',
    learning: {
      groupTitle: 'Part I: Newtonian Mechanics',
      category: 'Module 8',
      title: 'Oscillations (Part I)',
      subtitle:
        'The harmonic oscillator models springs, pendulums, atoms, and electrical circuits. One equation of motion, recurring everywhere from atoms to bridges.',
      sections: [
        <>
          <p>{`Pull a mass on a spring sideways and let go. It bounces back and forth at a steady rhythm, neither slowing down nor speeding up. The same equation that describes this motion also describes a swinging pendulum, a vibrating atom, a tuned electrical circuit, and a bridge swaying in the wind.`}</p>
          <p>{`To follow the math, you need Newton's law $F = ma$, the formulas for kinetic energy $K = \\tfrac{1}{2} m v^2$ and momentum $p = m v$, and a working comfort with derivatives.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A spring with mass attached is pulled aside and let go in a vacuum with no friction. What happens to its energy and amplitude over many minutes?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Form your answer first. Then read on for the worked explanation.`}</p>
            </details>
          </div>
          <h2>{`The Harmonic Oscillator`}</h2>
          <p>{`A harmonic oscillator is any system whose restoring force is proportional to how far it has been pushed from rest. The simplest case is a mass on a spring. Pull the mass out by a distance $x$ and the spring pulls back with force $-kx$. The number $k$ is the spring constant, measured in newtons per meter, and it sets the stiffness: a larger $k$ means a stiffer spring that pulls back harder for the same pull.`}</p>
          <p>
            <strong>{`When to use this:`}</strong>
            {` Use the simple harmonic oscillator model when the restoring force grows linearly with displacement and there is no friction. This covers small swings of a pendulum, a mass on an ideal spring, or a charge oscillating in a circuit with no resistance.`}
          </p>
          <h3>{`The equation of motion`}</h3>
          <p>{`Newton's second law says force equals mass times acceleration, and acceleration is the second derivative of position. So $m \\ddot x = -k x$, and rearranged this is the equation of motion of the frictionless oscillator:`}</p>
          <div className="lrn-eq">
            <span>{`$$m \\ddot x + k x = 0$$`}</span>
          </div>
          <p>{`This is a second-order linear differential equation: a relationship between $x(t)$ and its second time derivative, with no powers or products of $x$. Our job is to find every function $x(t)$ that obeys it.`}</p>
          <h3>{`The general solution`}</h3>
          <p>{`The equation contains $\\ddot x$, so we need a function whose second derivative reproduces the function itself, up to a sign. Sines and cosines do exactly that. Try $x = B \\sin(\\omega_0 t) + C \\cos(\\omega_0 t)$, differentiate twice, and you get $\\ddot x = -\\omega_0^2 x$. Substituting back, the equation holds only when:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\omega_0 = \\sqrt{\\frac{k}{m}}$$`}</span>
          </div>
          <p>{`This $\\omega_0$ is called the natural angular frequency. It depends only on the spring stiffness $k$ and the mass $m$. How far you pulled the spring before letting go has no effect: the period is the same whether you pull it a millimeter or a meter.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why doesn't the natural frequency depend on how far you pull? Because the spring force grows in exact proportion to the displacement.`}</p>
            <p>{`Pull twice as far and the spring pulls back twice as hard. That doubled force accelerates the mass twice as fast, so the mass covers the doubled distance in the same time.`}</p>
            <p>{`The longer trip and the higher speed cancel exactly, and the period stays fixed.`}</p>
          </div>
          <h3>{`Standard cosine form`}</h3>
          <p>{`Any combination of a sine and a cosine at the same frequency can be folded into a single cosine with a phase shift:`}</p>
          <div className="lrn-eq">
            <span>{`$$x = A \\cos(\\omega_0 t + \\phi)$$`}</span>
          </div>
          <p>{`Here $A$ is the maximum displacement and $\\phi$ shifts the cosine left or right in time, so we can match any starting position and velocity. Given the original sine and cosine coefficients, the amplitude and phase are:`}</p>
          <div className="lrn-eq">
            <span>{`$$A = \\sqrt{B^2 + C^2}, \\quad \\tan \\phi = -\\frac{B}{C}$$`}</span>
          </div>
          <p>{`The period of one full swing is $T = \\tfrac{2\\pi}{\\omega_0}$. The ordinary frequency, in hertz, is $\\nu = \\tfrac{1}{T}$. Hertz means cycles per second; angular frequency $\\omega_0$ is in radians per second, larger than the ordinary frequency by a factor of $2\\pi$ because one full cycle is $2\\pi$ radians.`}</p>
          <PhaseShift />
          <h3>{`Worked example: initial conditions for a frictionless oscillator`}</h3>
          <p>{`A mass on a spring has $\\omega_0 = 4$ rad/s. At $t=0$ we pull it to $x_0 = 0.1$ m and release it from rest, so $v_0 = 0$. Find $x(t)$.`}</p>
          <p>{`Step 1: write the general form $x = A \\cos(\\omega_0 t + \\phi)$.`}</p>
          <p>{`Step 2: at $t=0$ the position must be $0.1$, so $A \\cos\\phi = 0.1$.`}</p>
          <p>{`Step 3: at $t=0$ the velocity must be zero, so $-A \\omega_0 \\sin\\phi = 0$. This forces $\\phi = 0$.`}</p>
          <p>{`Step 4: with $\\phi = 0$, step 2 gives $A = 0.1$ m.`}</p>
          <p>{`Final answer: $x(t) = 0.1 \\cos(4 t)$ meters.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $\\phi = 0$ when the mass starts at rest? At $t=0$ the velocity is proportional to the slope of the cosine, and the cosine has zero slope only at its peaks. The mass starts where its velocity is zero, so it must start at a peak, which is exactly what $\\phi = 0$ gives.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Form your answer first. Then read the section above and check.`}</p>
            </details>
          </div>
          <DampedOsc />
          <h3>{`Energy in the frictionless oscillator`}</h3>
          <p>{`The energy stored in a stretched or compressed spring is $U = \\tfrac{1}{2} k x^2$, and the kinetic energy of the moving mass is $K = \\tfrac{1}{2} m v^2$. Substituting $x = A \\cos(\\omega_0 t + \\phi)$ and its time derivative:`}</p>
          <div className="lrn-eq">
            <span>{`$$U = \\tfrac{1}{2} k A^2 \\cos^2(\\omega_0 t + \\phi)$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$K = \\tfrac{1}{2} m \\omega_0^2 A^2 \\sin^2(\\omega_0 t + \\phi)$$`}</span>
          </div>
          <p>{`Because $m \\omega_0^2 = k$, both expressions share the same coefficient out front. Adding them, the cosine-squared and sine-squared sum to one, leaving:`}</p>
          <div className="lrn-eq">
            <span>{`$$E = U + K = \\tfrac{1}{2} k A^2$$`}</span>
          </div>
          <p>{`The total energy never changes. It is set by the amplitude and the stiffness alone.`}</p>
          <PendulumEnergy />
          <h3>{`Time-averaged energies`}</h3>
          <p>{`The angle brackets $\\langle \\cdot \\rangle$ denote an average taken over one full cycle. Over a cycle, $\\langle \\cos^2 \\rangle = \\tfrac{1}{2}$ and $\\langle \\sin^2 \\rangle = \\tfrac{1}{2}$, because cosine-squared and sine-squared are mirror-image curves that always add to one. So:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\langle U \\rangle = \\tfrac{1}{4} k A^2, \\quad \\langle K \\rangle = \\tfrac{1}{4} k A^2$$`}</span>
          </div>
          <p>{`The average kinetic and potential energies are equal. Each carries half of the total.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Frictionless`}</span>
              <p>{`No drag, no losses. The amplitude and total energy stay fixed for as long as the system is left alone.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Damped`}</span>
              <p>{`Drag bleeds energy out on every swing. Both amplitude and total energy fall off exponentially with time.`}</p>
            </div>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A child on a swing is pushed once and then left alone. The swing arc grows smaller every cycle. What sets the rate of decay?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Form your answer first. Then read on for the worked explanation.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`The Damped Harmonic Oscillator`}</h2>
          <p>{`Real oscillators lose energy. Air resistance, internal friction inside the spring, and drag through a surrounding fluid all pull energy out a little at a time. The simplest model of this is a viscous drag force $f = -b v$: viscous means the drag is proportional to speed, so move twice as fast and you feel twice the pushback. The number $b$ is the damping constant, measured in newton-seconds per meter.`}</p>
          <p>
            <strong>{`When to use this:`}</strong>
            {` Use this model whenever a drag force is roughly proportional to velocity. This fits oscillations in air or thin fluids, electrical circuits with resistance, and most low-amplitude mechanical systems.`}
          </p>
          <h3>{`The damped equation of motion`}</h3>
          <p>{`Newton's law now has two restoring terms, the spring and the drag: $m \\ddot x = -k x - b \\dot x$. Divide through by $m$ and define $\\gamma = \\tfrac{b}{m}$ to get a clean form:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\ddot x + \\gamma \\dot x + \\omega_0^2 x = 0$$`}</span>
          </div>
          <p>{`The new $\\gamma \\dot x$ term represents the drag force per unit mass. A larger $\\gamma$ means the system loses energy faster.`}</p>
          <h3>{`The damped solution`}</h3>
          <p>{`For light damping, where the drag is small enough to still allow oscillation, the solution is:`}</p>
          <div className="lrn-eq">
            <span>{`$$x = A e^{-\\frac{\\gamma t}{2}} \\cos(\\omega_1 t + \\phi)$$`}</span>
          </div>
          <p>{`The cosine factor still produces back-and-forth motion, but at the slightly slower frequency:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\omega_1 = \\sqrt{\\omega_0^2 - \\frac{\\gamma^2}{4}}$$`}</span>
          </div>
          <p>{`This $\\omega_1$ is the damped frequency. It is less than the natural frequency $\\omega_0$ because the drag holds the mass back on every swing. The exponential factor in front sets the envelope of the motion, the smooth curve that traces the peak displacement of every successive swing:`}</p>
          <div className="lrn-eq">
            <span>{`$$A(t) = A e^{-\\frac{\\gamma t}{2}}$$`}</span>
          </div>
          <DampedOsc />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does damping slow the oscillation? The drag force always points against the direction of motion.`}</p>
            <p>{`On every swing, the spring works against both the mass's inertia and the drag force. Pulling against two opponents takes longer than pulling against one.`}</p>
            <p>{`Each cycle therefore takes more time, and the frequency drops below $\\omega_0$.`}</p>
          </div>
          <h3>{`Energy decay`}</h3>
          <p>{`The work done by drag over one cycle is $W_\\text{drag} = -\\int b v^2 \\, dt$. The integrand $v^2$ is never negative and $b$ is positive, so this work is always negative: drag steadily removes energy from the system.`}</p>
          <p>{`For light damping, the kinetic and potential averages still split the total in half, but the amplitude itself is now shrinking. Substituting the decaying envelope into $E = \\tfrac{1}{2} k [A(t)]^2$:`}</p>
          <div className="lrn-eq">
            <span>{`$$E(t) = \\tfrac{1}{2} k A^2 e^{-\\gamma t} = E_0 e^{-\\gamma t}$$`}</span>
          </div>
          <p>{`Energy decays exponentially, at a rate set by $\\gamma$.`}</p>
          <h3>{`Damping time and Q`}</h3>
          <p>{`The time for the energy to drop by a factor of $\\tfrac{1}{e}$ (about 37 percent of its original value) is the damping time:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tau = \\frac{1}{\\gamma}$$`}</span>
          </div>
          <p>{`The quality factor $Q$ measures how many cycles the oscillator can ring through before its energy fades. It is defined as:`}</p>
          <div className="lrn-eq">
            <span>{`$$Q = \\frac{\\text{energy stored}}{\\text{energy dissipated per radian}}$$`}</span>
          </div>
          <p>{`Per radian means for every radian of phase the oscillator passes through, where one radian is $\\tfrac{1}{2\\pi}$ of a full cycle. Working out this ratio for light damping gives:`}</p>

          <div className="lrn-eq">
            <span>{`$$Q = \\frac{\\omega_1}{\\gamma} \\approx \\frac{\\omega_0}{\\gamma}$$`}</span>
          </div>
          <p>{`A high $Q$ means a sharp, long-ringing oscillator. A low $Q$ means the motion dies away after only a few swings.`}</p>
          <h3>{`Worked example: the Q of two everyday oscillators`}</h3>
          <p>{`A tuning fork rings at $\\nu = 440$ Hz. The sound fades over about $\\tau = 4$ seconds, so $\\gamma = \\tfrac{1}{\\tau} = 0.25$ per second, and $Q = \\tfrac{\\omega_0}{\\gamma} = \\tfrac{2\\pi(440)}{0.25} \\approx 11{,}000$. The fork is a high-$Q$ oscillator.`}</p>
          <p>{`A weight bouncing on a rubber band oscillates at $\\nu = 1$ Hz and comes to rest in roughly $\\tau = 1$ second. Then $\\gamma = 1$ per second, and $Q = \\tfrac{2\\pi(1)}{1} \\approx 6$. The rubber band is a low-$Q$ oscillator.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is $Q$ dimensionless? Energy stored is measured in joules. Energy dissipated per radian is also measured in joules. The ratio of two quantities with the same units is a pure number, free of physical dimensions.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Form your answer first. Then read the section above and check.`}</p>
            </details>
          </div>
          <h3>{`Worked example: reading Q off an oscilloscope trace`}</h3>
          <p>{`On an oscilloscope you see the envelope of an oscillation drop from 10 mV to 5 mV over 5 cycles, with the frequency reading 1 kHz. Find $Q$.`}</p>
          <p>{`Step 1: the amplitude halves over 5 periods. The envelope follows $A \\propto e^{-\\tfrac{\\gamma t}{2}}$, so $e^{-\\tfrac{\\gamma t}{2}} = \\tfrac{1}{2}$.`}</p>
          <p>{`Step 2: take the logarithm. $\\tfrac{\\gamma t}{2} = \\ln 2 \\approx 0.693$, giving $\\gamma t = 1.386$.`}</p>
          <p>{`Step 3: 5 cycles at 1 kHz lasts $t = 5$ ms, so $\\gamma = \\tfrac{1.386}{0.005} = 277$ per second.`}</p>
          <p>{`Step 4: $Q = \\tfrac{\\omega_0}{\\gamma} = \\tfrac{2\\pi(1000)}{277} \\approx 23$.`}</p>
          <p>{`Atomic transitions can reach $Q$ values in the trillions, far above any tuning fork or pendulum. That is why an atomic clock keeps better time than any mechanical clock.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the amplitude halve when the energy drops by a factor of four? Because energy is proportional to amplitude squared. If $A$ halves, $A^2$ falls to one quarter.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Form your answer first. Then read the section above and check.`}</p>
            </details>
          </div>
          <h3>{`The three damping regimes`}</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Underdamped`}</span>
              <p>{`Drag is light: $\\gamma^2 < 4\\omega_0^2$. The system swings back and forth, with the amplitude shrinking inside an exponential envelope.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Critically damped`}</span>
              <p>{`Drag is just heavy enough to kill oscillation: $\\gamma^2 = 4\\omega_0^2$. The system returns to rest in the shortest possible time without overshooting.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Overdamped`}</span>
              <p>{`Drag dominates: $\\gamma^2 > 4\\omega_0^2$. The system creeps back to rest along a slow exponential, never crossing zero.`}</p>
            </div>
          </div>
          <DampingRegimes />
          <PhasePortraitDrag />
          <h3>{`Full derivation using complex variables`}</h3>
          <p>{`To solve $\\ddot x + \\gamma \\dot x + \\omega_0^2 x = 0$ in full, try the trial function $x = e^{\\alpha t}$. This works because differentiating $e^{\\alpha t}$ just multiplies it by $\\alpha$, which turns the differential equation into a polynomial in $\\alpha$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\alpha^2 + \\gamma \\alpha + \\omega_0^2 = 0$$`}</span>
          </div>
          <p>{`The quadratic formula gives the roots:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\alpha = -\\frac{\\gamma}{2} \\pm \\sqrt{\\frac{\\gamma^2}{4} - \\omega_0^2}$$`}</span>
          </div>
          <p>{`The sign of the quantity under the square root sets which of three cases applies.`}</p>
          <p>
            <strong>{`Case 1, light damping:`}</strong>
            {` $\\gamma^2 < 4 \\omega_0^2$. The expression under the square root is negative, so the square root is imaginary. Define $\\omega_1 = \\sqrt{\\omega_0^2 - \\tfrac{\\gamma^2}{4}}$, then $\\alpha = -\\tfrac{\\gamma}{2} \\pm i \\omega_1$. Combining the two complex roots into a single real solution gives $x = A e^{-\\tfrac{\\gamma t}{2}} \\cos(\\omega_1 t + \\phi)$, the decaying oscillation we already met.`}
          </p>
          <p>
            <strong>{`Case 2, heavy damping (overdamped):`}</strong>
            {` $\\gamma^2 > 4 \\omega_0^2$. Both roots are real and negative, so the solution $x = C_1 e^{\\alpha_+ t} + C_2 e^{\\alpha_- t}$ is a sum of two decaying exponentials. No oscillation: the mass slides slowly back toward zero.`}
          </p>
          <p>
            <strong>{`Case 3, critical damping:`}</strong>
            {` $\\gamma^2 = 4 \\omega_0^2$. The two roots collapse onto each other. A standard result for repeated roots gives the solution $x = (C_1 + C_2 t) \\, e^{-\\tfrac{\\gamma t}{2}}$. This regime brings the system back to rest in the shortest possible time. Door closers and car shock absorbers are tuned to sit close to this point.`}
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">YOUR TURN</span>
              <p>{`Show that as $\\gamma^2 \\to 4 \\omega_0^2$ from below, the two independent solutions of Case 1 collapse into one, and a second independent solution of the form $t \\, e^{-\\tfrac{\\gamma t}{2}}$ must appear to keep the general solution two-parameter. This is exactly the form Case 3 predicts.`}</p>
            </div>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You push a child on a swing. If you push at random times, the swing barely moves. If you push exactly when they reach the top, the swing grows huge. Why?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Form your answer first. Then read on for the worked explanation.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`The Forced Harmonic Oscillator`}</h2>
          <p>{`Now imagine someone pushing the oscillator with a periodic force $F_0 \\cos(\\omega t)$, pumping energy in. The system has its own natural frequency $\\omega_0$, and the driver has its own frequency $\\omega$. When the two frequencies fall close to each other, the driver and the system step into rhythm together, and the response can grow far larger than the driving force alone would suggest. That effect is resonance.`}</p>
          <p>
            <strong>{`When to use this:`}</strong>
            {` Use the forced oscillator model when an outside source drives an oscillating system at a chosen frequency. This applies to AC circuits, microwave cavities, atomic clocks, and shaking buildings during earthquakes.`}
          </p>
          <h3>{`Undamped forced oscillator`}</h3>
          <p>{`Add the driving force to Newton's law:`}</p>
          <div className="lrn-eq">
            <span>{`$$m \\ddot x + k x = F_0 \\cos(\\omega t)$$`}</span>
          </div>
          <p>{`Guess that, after any startup transient, the mass settles into oscillating at the driver's frequency: $x = A \\cos(\\omega t)$. Substitute and solve for $A$:`}</p>
          <div className="lrn-eq">
            <span>{`$$A = \\frac{F_0}{m(\\omega_0^2 - \\omega^2)}$$`}</span>
          </div>
          <p>{`So the steady response is:`}</p>
          <div className="lrn-eq">
            <span>{`$$x = \\frac{F_0}{m(\\omega_0^2 - \\omega^2)} \\cos(\\omega t)$$`}</span>
          </div>
          <p>{`As the driving frequency $\\omega$ approaches the natural frequency $\\omega_0$, the denominator $\\omega_0^2 - \\omega^2$ goes to zero and the predicted amplitude blows up. This runaway is undamped resonance.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does the amplitude diverge at resonance when there is no damping? Each push from the driver lands in step with the motion and adds a little more energy. With no friction to drain that energy, the amplitude grows without bound. Real systems always have some damping, which is what stops this runaway.`}</p>
          </div>
          <h3>{`General solution structure`}</h3>
          <p>{`The full motion is the steady response at the driving frequency, plus a free oscillation at the natural frequency:`}</p>
          <div className="lrn-eq">
            <span>{`$$x(t) = x_\\text{steady}(t) + A_h \\cos(\\omega_0 t + \\phi_h)$$`}</span>
          </div>
          <p>{`With damping, the second piece (a transient) decays away over time $\\tau$, leaving only the steady response in the long run.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Steady state`}</span>
              <p>{`The lasting response at the driver's frequency $\\omega$. It persists for as long as the driver keeps pushing.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Transient`}</span>
              <p>{`A short-lived ringing at the natural frequency $\\omega_0$. It dies out exponentially in the damping time $\\tau$.`}</p>
            </div>
          </div>
          <h3>{`Driven damped oscillator`}</h3>
          <p>{`Now add the drag term back in. The full equation of motion is:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\ddot x + \\gamma \\dot x + \\omega_0^2 x = \\frac{F_0}{m} \\cos(\\omega t)$$`}</span>
          </div>
          <p>{`The steady-state solution still oscillates at the driver's frequency, but lagging behind it by a phase $\\phi$: $x = A \\cos(\\omega t - \\phi)$, with:`}</p>
          <div className="lrn-eq">
            <span>{`$$A = \\frac{F_0}{m\\sqrt{(\\omega_0^2 - \\omega^2)^2 + (\\omega \\gamma)^2}}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\tan \\phi = \\frac{\\omega \\gamma}{\\omega^2 - \\omega_0^2}$$`}</span>
          </div>
          <p>{`The amplitude $A$ no longer diverges at $\\omega = \\omega_0$. The damping term $\\omega \\gamma$ in the square root is what keeps it finite.`}</p>
          <LorentzianRes />
          <ResonanceDriver />
          <h3>{`Phase through resonance`}</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Below resonance`}</span>
              <p>{`When $\\omega < \\omega_0$, the mass moves nearly in step with the driver: as the driver pushes one way, the mass slides the same way at almost the same instant.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Above resonance`}</span>
              <p>{`When $\\omega > \\omega_0$, the mass moves opposite to the driver, lagging by 180 degrees: as the driver pushes one way, the mass is moving the other way.`}</p>
            </div>
          </div>
          <p>{`At resonance itself ($\\omega = \\omega_0$), the lag is exactly 90 degrees: the mass is halfway between in-phase and out-of-phase, which is precisely the condition under which each push lands when the mass has maximum velocity, depositing energy most efficiently.`}</p>

          <h3>{`Worked example: shaking a weight on a rubber band`}</h3>
          <p>{`A weight hangs from a rubber band with $\\omega_0 = 4$ rad/s, and you shake the top of the rubber band with your hand. Shake slowly and the weight just follows your hand. Shake at $\\omega_0$ and the weight builds up a huge amplitude. Shake fast and the weight stays nearly still while your hand jiggles above it.`}</p>
          <p>{`All three behaviors come straight from the amplitude formula. At low $\\omega$, the formula reduces to $A \\approx \\tfrac{F_0}{m \\omega_0^2}$, a fixed response set by the spring stiffness. At high $\\omega$, the $\\omega^2$ term in the denominator dominates and $A$ falls off as $\\tfrac{1}{\\omega^2}$. At $\\omega = \\omega_0$, the spring and inertia terms cancel and only the damping term limits the peak.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why is the high-frequency response so small? Because the mass cannot keep up: inertia dominates, and the driver reverses direction before the mass has moved much in either direction.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Form your answer first. Then read the section above and check.`}</p>
            </details>
          </div>
          <h3>{`Worked example: a vibration isolation table`}</h3>
          <p>{`A delicate instrument sits on an air table while the building around it vibrates at high frequency. You want the instrument to feel none of those vibrations. Choose the mass and the spring so the table's natural frequency $\\omega_0$ is well below the building's vibration frequency. The instrument is then driven far above resonance, and the $\\tfrac{1}{\\omega^2}$ falloff reduces its amplitude to almost nothing.`}</p>
          <p>{`A car's suspension does almost the opposite job: it is tuned for critical damping so the car body returns to rest quickly after each bump, instead of bouncing many times.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does increasing the dashpot's friction coefficient first reduce the vibration the instrument feels, but eventually couple the building's motion back into the instrument?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Form your answer first. Then read the section above and check.`}</p>
            </details>
          </div>
          <h3>{`Energy and the Lorentzian curve`}</h3>
          <p>{`The time-averaged kinetic and potential energies, with the steady-state amplitude $A$ from the formula above, are:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\langle K \\rangle = \\tfrac{1}{4} m \\omega^2 A^2, \\quad \\langle U \\rangle = \\tfrac{1}{4} k A^2$$`}</span>
          </div>
          <p>{`Plotting the total energy as a function of the driving frequency near resonance gives a sharp peak. Its shape is captured by the Lorentzian function:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\langle E(\\omega) \\rangle \\approx \\frac{F_0^2}{4m\\left[(\\omega - \\omega_0)^2 + \\left(\\frac{\\gamma}{2}\\right)^2\\right]}$$`}</span>
          </div>
          <p>{`This curve, peaking at $\\omega = \\omega_0$ and falling off symmetrically on both sides, is called a Lorentzian. It shows up across physics whenever a system rings at a single dominant frequency, from atomic spectral lines to nuclear resonances.`}</p>
          <LorentzianRes />
          <h3>{`Resonance width`}</h3>
          <p>{`The full width at half maximum is the spread in $\\omega$ over which the Lorentzian sits at half its peak height. For this curve it works out to:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\Delta \\omega = \\gamma$$`}</span>
          </div>
          <p>{`So the quality factor can be read directly off the resonance peak:`}</p>
          <div className="lrn-eq">
            <span>{`$$Q = \\frac{\\omega_0}{\\Delta \\omega}$$`}</span>
          </div>
          <p>{`A sharp, narrow peak means a high-$Q$ oscillator. Atomic transitions reach $Q$ values in the trillions; the resonance peak is so narrow that the natural frequency serves as a near-perfect time reference, which is exactly the principle of an atomic clock.`}</p>
          <h3>{`Full derivation using complex variables`}</h3>
          <p>{`The same equation has a much shorter derivation if we use complex numbers. Start from the driven damped equation:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\ddot{x} + \\gamma\\dot{x} + \\omega_0^2 x = \\frac{F_0}{m}\\cos(\\omega t)$$`}</span>
          </div>
          <p>{`Replace $\\cos(\\omega t)$ on the right with $e^{i\\omega t}$, which contains the cosine as its real part. Try the matching complex trial function $x = \\tilde{A} \\, e^{i\\omega t}$, where $\\tilde{A}$ is a complex amplitude that bundles both the size and the phase of the response.`}</p>
          <p>{`Differentiating $e^{i\\omega t}$ once gives $i\\omega \\, e^{i\\omega t}$, so every time derivative in the equation simply multiplies by $i\\omega$. Substituting:`}</p>
          <div className="lrn-eq">
            <span>{`$$(-\\omega^2 + i\\omega\\gamma + \\omega_0^2)\\tilde{A} = \\frac{F_0}{m}$$`}</span>
          </div>
          <p>{`Solve algebraically for $\\tilde{A}$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tilde{A} = \\frac{F_0}{m\\left[(\\omega_0^2 - \\omega^2) + i\\omega\\gamma\\right]}$$`}</span>
          </div>
          <p>{`Write the complex amplitude in polar form, $\\tilde{A} = |\\tilde{A}| \\, e^{-i\\phi}$. Its magnitude is the size of the oscillation, and $\\phi$ is the angle by which the response lags the drive:`}</p>
          <div className="lrn-eq">
            <span>{`$$|\\tilde{A}| = \\frac{F_0}{m\\sqrt{(\\omega_0^2 - \\omega^2)^2 + (\\omega\\gamma)^2}}$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\tan\\phi = \\frac{\\omega\\gamma}{\\omega_0^2 - \\omega^2}$$`}</span>
          </div>
          <p>{`Taking the real part of $\\tilde{A} \\, e^{i\\omega t}$ recovers the physical, real-valued motion: $x(t) = |\\tilde{A}|\\cos(\\omega t - \\phi)$. This matches the formulas we found earlier, but the algebra was simpler because differentiation became multiplication.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why does the complex method work? The differential equation is linear, so if a complex function $\\tilde{x}(t)$ solves the equation with a complex driving term, its real part automatically solves the equation with the real driving term. The complex form is just a calculational shortcut: it carries the cosine and sine together as the real and imaginary parts of one $e^{i\\omega t}$, and turns differentiation into multiplication.`}</p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`An oscillator's energy dies in time $\\tau$. How sharp is its resonance peak in frequency space?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Form your answer first. Then read on for the worked explanation.`}</p>
            </details>
          </div>
        </>,
        <>
          <h2>{`Time Response Versus Frequency Response`}</h2>
          <p>{`Every oscillator can be described two ways: by how it behaves over time, and by how it responds to different driving frequencies. In the time view, the energy of a free oscillation decays as $e^{-\\tfrac{t}{\\tau}}$. In the frequency view, the resonance peak of a driven oscillation has a width $\\Delta \\omega$.`}</p>
          <p>{`These two numbers are tied to each other by a single relation:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tau \\, \\Delta \\omega = 1$$`}</span>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Time response`}</span>
              <p>{`How long the oscillator keeps ringing after a single push. Set by the damping time $\\tau = \\tfrac{1}{\\gamma}$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Frequency response`}</span>
              <p>{`How narrow the resonance peak is in $\\omega$ when the oscillator is driven steadily. Set by the width $\\Delta \\omega = \\gamma$.`}</p>
            </div>
          </div>
          <p>{`A long ring time means a narrow peak, and a short ring time means a broad peak. The two pictures are not separate phenomena: they are the same fact about the oscillator viewed in time and in frequency.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Why are these reciprocal? An oscillation that rings for a long time can be tracked through many cycles, and its frequency can be measured very precisely, giving a narrow peak.`}</p>
            <p>{`An oscillation that ends quickly never gets the chance to settle into a clean, single frequency, so its peak is broad. The same reasoning lies behind the Heisenberg energy-time uncertainty $\\Delta E \\, \\Delta t \\geq \\tfrac{\\hbar}{2}$ in quantum mechanics: a state that lives only briefly cannot have a sharply defined energy.`}</p>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You shine a flashlight forward while running, and a friend stands still and watches. In Galilean physics (the world Newton wrote in), velocities just add, so the flashlight beam should appear faster to you than to your friend. What did Maxwell's equations and the Michelson-Morley experiment actually find?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Form your answer first. Then read on for the worked explanation.`}</p>
            </details>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `Write the equation of motion for a frictionless harmonic oscillator with mass $m$ on a spring of stiffness $k$.`,
        a: `The equation is $m \\ddot x + k x = 0$. Newton's law gives $m \\ddot x = -k x$, since the spring pulls back proportional to displacement. Rearranging puts both terms on one side.`
      },
      {
        q: `Why does the natural frequency of a spring oscillator not depend on amplitude?`,
        a: `Because the restoring force grows in exact proportion to the displacement. Pulling twice as far doubles the force, which doubles the acceleration, so the mass covers the doubled distance in the same time. The longer trip and the faster motion cancel exactly, leaving the period unchanged.`
      },
      {
        q: `A spring has $k = 16$ N/m and a 1 kg mass. Find $\\omega_0$ and the period.`,
        a: `Use $\\omega_0 = \\sqrt{\\tfrac{k}{m}} = \\sqrt{16} = 4$ rad/s. The period is $T = \\tfrac{2\\pi}{\\omega_0} = \\tfrac{2\\pi}{4} \\approx 1.57$ s. Both answers depend only on the spring constant and mass.`
      },
      {
        q: `A spring-mass oscillator has period 2 s on Earth. Take the same spring and mass to the Moon. What is the new period?`,
        a: `The period $T = 2\\pi\\sqrt{\\tfrac{m}{k}}$ depends only on the mass and the spring stiffness, neither of which changes on the Moon. The period stays at 2 s. A pendulum behaves differently, because its period also depends on the local gravitational acceleration $g$.`
      },
      {
        q: `What is the total energy of an undamped oscillator with amplitude $A$ and stiffness $k$?`,
        a: `The total energy is $E = \\tfrac{1}{2} k A^2$. This is the maximum potential energy when the mass is at the extreme of its swing. The kinetic energy is zero there, so this equals the total.`
      },
      {
        q: `Why are the time-averaged kinetic and potential energies equal for an undamped oscillator?`,
        a: `Because $\\langle \\cos^2 \\rangle$ and $\\langle \\sin^2 \\rangle$ both equal one half when averaged over a full cycle. The kinetic and potential energies share the same coefficient out front when written in standard form, so each carries half of the total energy on average.`
      },
      {
        q: `Predict what happens to a mass-spring system in a vacuum with no friction over many minutes.`,
        a: `It oscillates forever with constant amplitude. Energy stays at $\\tfrac{1}{2} k A^2$. With no friction, no work is removed from the system.`
      },
      {
        q: `Write the equation of motion for a damped harmonic oscillator with damping rate $\\gamma$.`,
        a: `The equation is $\\ddot x + \\gamma \\dot x + \\omega_0^2 x = 0$. The new term $\\gamma \\dot x$ models a drag force proportional to velocity. Larger $\\gamma$ means faster energy loss.`
      },
      {
        q: `What is the solution of the lightly damped oscillator equation?`,
        a: `The solution is $x = A e^{-\\tfrac{\\gamma t}{2}} \\cos(\\omega_1 t + \\phi)$ with $\\omega_1 = \\sqrt{\\omega_0^2 - \\tfrac{\\gamma^2}{4}}$. The cosine oscillates while the exponential envelope shrinks. Both amplitude and frequency depend on $\\gamma$.`
      },
      {
        q: `Why does damping reduce the oscillation frequency?`,
        a: `The drag force always points against the direction of motion. On every swing, the spring works against both the mass's inertia and the drag force at once. Pulling against two opponents takes longer than pulling against one, so each cycle stretches out and the frequency drops below $\\omega_0$.`
      },
      {
        q: `How does the energy of a lightly damped oscillator decay with time?`,
        a: `Energy decays as $E(t) = E_0 e^{-\\gamma t}$. Amplitude shrinks by $e^{-\\tfrac{\\gamma t}{2}}$, so amplitude squared shrinks by $e^{-\\gamma t}$. Energy is proportional to amplitude squared.`
      },
      {
        q: `Define the damping time $\\tau$.`,
        a: `Damping time is $\\tau = \\tfrac{1}{\\gamma}$. It is the time for the energy to fall by a factor of $\\tfrac{1}{e}$. Larger $\\gamma$ means shorter damping time.`
      },
      {
        q: `What is the quality factor $Q$ in words and as a formula?`,
        a: `$Q$ is the ratio of energy stored to energy dissipated per radian of oscillation. For light damping, $Q \\approx \\tfrac{\\omega_0}{\\gamma}$. It measures how many oscillations happen before the energy dies out.`
      },
      {
        q: `Why is $Q$ dimensionless?`,
        a: `Energy stored has units of joules. Energy dissipated per radian also has units of joules. Their ratio is a pure number.`
      },
      {
        q: `A tuning fork rings at 440 Hz and dies out in 4 seconds. Find $Q$.`,
        a: `The damping time is $\\tau = 4$ s, so $\\gamma = \\tfrac{1}{4} = 0.25$ per second. Then $Q = \\tfrac{2\\pi(440)}{0.25} \\approx 11{,}000$. The fork is high $Q$.`
      },
      {
        q: `A weight on a rubber band oscillates at 1 Hz and stops in 1 second. Find $Q$.`,
        a: `The damping time is $\\tau = 1$ s, so $\\gamma = 1$ per second. Then $Q = \\tfrac{2\\pi(1)}{1} \\approx 6$. The rubber band is low $Q$.`
      },
      {
        q: `An oscilloscope trace shows amplitude halving over 5 cycles at 1 kHz. Find $Q$.`,
        a: `Amplitude halves means $e^{-\\tfrac{\\gamma t}{2}} = \\tfrac{1}{2}$, so $\\gamma t = 2 \\ln 2 \\approx 1.386$. With $t = 5$ ms, $\\gamma = 277$ per second. So $Q = \\tfrac{2\\pi(1000)}{277} \\approx 23$.`
      },
      {
        q: `An oscillator's energy drops to $\\tfrac{1}{e^2}$ of its starting value after time $T$. Express $\\gamma$ in terms of $T$.`,
        a: `Energy decays as $E(t) = E_0 e^{-\\gamma t}$. Setting $E(T) = E_0 e^{-2}$ gives $\\gamma T = 2$, so $\\gamma = \\tfrac{2}{T}$. The reasoning works because the exponent must equal the negative log of the energy ratio.`
      },
      {
        q: `List the three damping regimes and their conditions.`,
        a: `Underdamped: $\\gamma^2 < 4\\omega_0^2$, oscillates. Critically damped: $\\gamma^2 = 4\\omega_0^2$, returns to rest fastest with no overshoot. Overdamped: $\\gamma^2 > 4\\omega_0^2$, creeps slowly back without oscillating.`
      },
      {
        q: `Why do car shock absorbers aim for critical damping?`,
        a: `Critical damping returns the suspension to rest fastest without overshooting. Underdamping would make the car bounce. Overdamping would make the ride feel stiff and slow to recover.`
      },
      {
        q: `Write the steady-state equation of motion for a damped driven oscillator.`,
        a: `It is $\\ddot x + \\gamma \\dot x + \\omega_0^2 x = \\tfrac{F_0}{m} \\cos(\\omega t)$. The right side is the driving force per unit mass. Steady state ignores any transient ringing at $\\omega_0$.`
      },
      {
        q: `What is the steady-state amplitude of a damped driven oscillator?`,
        a: `It is $A = \\tfrac{F_0}{m\\sqrt{(\\omega_0^2 - \\omega^2)^2 + (\\omega \\gamma)^2}}$. The amplitude peaks near $\\omega = \\omega_0$ and falls off on either side. Damping limits the peak height.`
      },
      {
        q: `At what driving frequency is the steady-state amplitude largest?`,
        a: `Near $\\omega = \\omega_0$, the natural frequency. The exact peak shifts slightly below $\\omega_0$ due to damping. For light damping the shift is tiny.`
      },
      {
        q: `Why does the amplitude diverge at resonance with no damping?`,
        a: `Each push from the driver adds energy in phase with the motion. With no friction to remove that energy, it builds up indefinitely. Real systems always have damping, which limits the amplitude.`
      },
      {
        q: `Predict the response of a child on a swing pushed at random times.`,
        a: `The pushes mostly cancel, since some are with the motion and some against. The amplitude stays small. Pushing in time with the natural frequency would build a large swing.`
      },
      {
        q: `Predict the response of an oscillator driven far above its natural frequency.`,
        a: `The amplitude becomes very small. The mass cannot keep up with the fast driver. Inertia dominates and the response falls off as $\\tfrac{1}{\\omega^2}$.`
      },
      {
        q: `What is the phase of an oscillator driven well below resonance?`,
        a: `It is nearly in phase with the driver. The mass moves with the force at low frequencies. The phase shifts by 90 degrees at resonance, then 180 degrees well above.`
      },
      {
        q: `What is the full width at half maximum of the Lorentzian resonance curve?`,
        a: `It is $\\Delta \\omega = \\gamma$. The width equals the damping rate. So $Q = \\tfrac{\\omega_0}{\\Delta \\omega}$, linking time-domain decay to frequency-domain sharpness.`
      },
      {
        q: `Why are time response and frequency response reciprocal?`,
        a: `Long-lived oscillations track a single frequency precisely, giving a narrow peak. Short-lived ones have a fuzzy frequency since they end before completing many cycles. Hence $\\tau \\Delta \\omega = 1$.`
      },
      {
        q: `Predict what happens if you drive an air-table-mounted instrument at frequencies far above its natural frequency.`,
        a: `The instrument barely moves. The $\\tfrac{1}{\\omega^2}$ falloff suppresses high-frequency vibrations. This is the principle behind vibration eliminators.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Oscillations (Part I)',
      sections: [
        <>
          <div className="ref-section">
            <h3 className="ref-label">Simple Harmonic Motion</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Equation of motion (frictionless)</span>
              <div className="lrn-eq">
                <span>{`$m \\ddot x + k x = 0$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Modeling any system with linear restoring force and no friction.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Natural angular frequency</span>
              <div className="lrn-eq">
                <span>{`$\\omega_0 = \\sqrt{\\tfrac{k}{m}}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Finding the oscillation rate of a spring-mass system.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Standard solution</span>
              <div className="lrn-eq">
                <span>{`$x(t) = A \\cos(\\omega_0 t + \\phi)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Writing the motion of an undamped oscillator with arbitrary initial conditions.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Sin-cos to amplitude-phase</span>
              <div className="lrn-eq">
                <span>{`$A = \\sqrt{B^2 + C^2},\\ \\tan\\phi = -\\tfrac{B}{C}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Converting from $B \\sin(\\omega_0 t) + C \\cos(\\omega_0 t)$ form to standard cosine form.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Period and frequency</span>
              <div className="lrn-eq">
                <span>{`$T = \\tfrac{2\\pi}{\\omega_0},\\ \\nu = \\tfrac{1}{T}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Translating between angular frequency, period, and ordinary frequency.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Total energy of frictionless oscillator</span>
              <div className="lrn-eq">
                <span>{`$E = \\tfrac{1}{2} k A^2$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Computing the constant total energy when amplitude and stiffness are known.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Time-averaged kinetic and potential energy</span>
              <div className="lrn-eq">
                <span>{`$\\langle K \\rangle = \\langle U \\rangle = \\tfrac{1}{4} k A^2$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Computing time averages over many cycles.`}
              </p>
            </div>
          </div>
          <div className="ref-section">
            <h3 className="ref-label">Damped Oscillator</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Damped equation of motion</span>
              <div className="lrn-eq">
                <span>{`$\\ddot x + \\gamma \\dot x + \\omega_0^2 x = 0$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Modeling oscillations with viscous drag $f = -bv$ where $\\gamma = \\tfrac{b}{m}$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Light damping solution</span>
              <div className="lrn-eq">
                <span>{`$x = A e^{-\\tfrac{\\gamma t}{2}} \\cos(\\omega_1 t + \\phi)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Describing the underdamped regime where $\\gamma^2 < 4 \\omega_0^2$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Damped frequency</span>
              <div className="lrn-eq">
                <span>{`$\\omega_1 = \\sqrt{\\omega_0^2 - \\tfrac{\\gamma^2}{4}}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Calculating actual oscillation frequency in the presence of damping.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Amplitude envelope</span>
              <div className="lrn-eq">
                <span>{`$A(t) = A e^{-\\tfrac{\\gamma t}{2}}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Tracking the slow decay of the oscillation amplitude.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Energy decay</span>
              <div className="lrn-eq">
                <span>{`$E(t) = E_0 e^{-\\gamma t}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Lightly damped oscillator energy as a function of time.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Damping time constant</span>
              <div className="lrn-eq">
                <span>{`$\\tau = \\tfrac{1}{\\gamma}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Finding the time for energy to drop by a factor $\\tfrac{1}{e}$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Quality factor</span>
              <div className="lrn-eq">
                <span>{`$Q = \\tfrac{\\omega_0}{\\gamma} \\approx \\tfrac{\\omega_1}{\\gamma}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Comparing oscillator sharpness; equals stored energy over loss per radian.`}
              </p>
            </div>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>{`Regime`}</th>
                  <th>{`Condition`}</th>
                  <th>{`Behavior`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`Underdamped`}</td>
                  <td>{`$\\gamma^2 < 4 \\omega_0^2$`}</td>
                  <td>{`Oscillates with shrinking envelope`}</td>
                </tr>
                <tr>
                  <td>{`Critically damped`}</td>
                  <td>{`$\\gamma^2 = 4 \\omega_0^2$`}</td>
                  <td>{`Returns to rest fastest, no overshoot`}</td>
                </tr>
                <tr>
                  <td>{`Overdamped`}</td>
                  <td>{`$\\gamma^2 > 4 \\omega_0^2$`}</td>
                  <td>{`Slow exponential creep, no oscillation`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ref-section">
            <h3 className="ref-label">Forced Oscillator</h3>
            <div className="ref-formula">
              <span className="ref-formula-name">Driven undamped equation</span>
              <div className="lrn-eq">
                <span>{`$m \\ddot x + k x = F_0 \\cos(\\omega t)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`A periodic external force pumps energy into a frictionless system.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Undamped driven amplitude</span>
              <div className="lrn-eq">
                <span>{`$A = \\tfrac{F_0}{m(\\omega_0^2 - \\omega^2)}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Steady-state response of an undamped driven oscillator.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Driven damped equation</span>
              <div className="lrn-eq">
                <span>{`$\\ddot x + \\gamma \\dot x + \\omega_0^2 x = \\tfrac{F_0}{m} \\cos(\\omega t)$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Realistic forced oscillator with friction.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Steady-state amplitude</span>
              <div className="lrn-eq">
                <span>{`$A = \\tfrac{F_0}{m\\sqrt{(\\omega_0^2 - \\omega^2)^2 + (\\omega \\gamma)^2}}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Finding the long-time amplitude of a driven damped system.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Phase shift</span>
              <div className="lrn-eq">
                <span>{`$\\tan\\phi = \\tfrac{\\omega \\gamma}{\\omega^2 - \\omega_0^2}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Phase lag of mass behind driving force.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Lorentzian energy curve</span>
              <div className="lrn-eq">
                <span>{`$\\langle E(\\omega) \\rangle \\approx \\dfrac{F_0^2}{4m\\left[(\\omega - \\omega_0)^2 + \\left(\\tfrac{\\gamma}{2}\\right)^2\\right]}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Approximating the resonance peak shape near $\\omega_0$.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Resonance width (FWHM)</span>
              <div className="lrn-eq">
                <span>{`$\\Delta \\omega = \\gamma$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Quoting the sharpness of a resonance peak.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Q from frequency width</span>
              <div className="lrn-eq">
                <span>{`$Q = \\tfrac{\\omega_0}{\\Delta \\omega}$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong> {`Computing $Q$ from a measured resonance curve.`}
              </p>
            </div>
            <div className="ref-formula">
              <span className="ref-formula-name">Time-frequency reciprocity</span>
              <div className="lrn-eq">
                <span>{`$\\tau \\, \\Delta \\omega = 1$`}</span>
              </div>
              <p className="ref-when">
                <strong>When to use:</strong>{' '}
                {`Relating decay time and resonance width; the classical analog of the Heisenberg energy-time relation.`}
              </p>
            </div>
          </div>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
