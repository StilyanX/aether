import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  ActionAngleConstruction,
  IntegrablePhasePortrait,
  TorusTrajectoryViz
} from '../../../../../components/viz/physics-viz/modules'

// ─── Config ──────────────────────────────────────────────────────────────────

function ConditionallyPeriodicMotionContentInner() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'rbd',
    source: 'Mechanics (Course of Theoretical Physics, Vol. 1) - Landau & Lifshitz',
    documentTitle: 'Conditionally Periodic Motion - AETHER',
    learning: {
      groupTitle: 'Part III: Hamiltonian Mechanics and Canonical Formalism',
      category: 'Physics',
      title: 'Conditionally Periodic Motion',
      subtitle: 'Exponential accuracy of adiabatic invariants and multi-frequency torus motion',
      sections: [
        // ── Section 13: Accuracy of Adiabatic Invariant Conservation ───────
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Accuracy of Adiabatic Invariant Conservation</h2>
            <p>
              The change in the adiabatic invariant when a parameter varies slowly is not merely
              small. It is exponentially small. This section makes that precise.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`For a harmonic oscillator whose frequency slowly changes from one constant to another, how does the change in $I$ scale with the transition time $\\tau$ (how long the change takes)?`}
                Does it shrink like {`$\\frac{1}{\\tau}$`}, like {`$\\frac{1}{\\tau^2}$`}, or
                faster?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$\\Delta I \\sim \\exp(-\\text{const}\\cdot\\tau)$, which shrinks faster than $\\frac{1}{\\tau^n}$ for every $n$, no matter how large.`}
                </p>
                <p>
                  This is exponential accuracy: make the transition twice as slow and the error does
                  not halve or quarter - it becomes astronomically smaller.
                </p>
              </details>
            </div>

            <h3>The Exponential Accuracy Result</h3>
            <p>
              For a system with slowly varying parameters, the change in the adiabatic invariant is:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\Delta I \\sim \\exp(-\\text{Im}(w_0))$$`}</span>
            </div>
            <p>
              {`Here $w_0$ is a point in complex time where the slowly-varying parameter becomes singular - that is, where the function describing the parameter's change would blow up if you allowed time to be a complex number. The imaginary part $\\text{Im}(w_0)$ measures how far this breakdown is from real time. A smoother, slower transition pushes $w_0$ further from the real axis, making $\\text{Im}(w_0)$ larger and $\\Delta I$ smaller. As $\\tau \\to \\infty$, $\\text{Im}(w_0) \\propto \\tau$, recovering $\\Delta I \\sim e^{-\\text{const}\\cdot\\tau}$.`}
            </p>

            <h3>Example: Oscillator with Slowly Varying Frequency</h3>
            <p>
              {`Take $\\omega^2 = \\omega_0^2\\,\\frac{1+ae^s}{1+e^s}$, where $s = \\frac{t}{\\tau}$ is the dimensionless time. As $s$ increases from $-\\infty$ to $+\\infty$, the frequency smoothly shifts from one constant to another:`}
            </p>
            <ul className="lrn-list">
              <li>{`The frequency starts at $\\omega_0$ (when $s \\to -\\infty$) and ends at $\\omega_0\\sqrt{a}$ (when $s \\to +\\infty$).`}</li>
              <li>{`The change in $I$ across the transition is exponentially small in $\\tau$.`}</li>
              <li>{`For very slow transitions ($\\tau \\to \\infty$), $I$ is conserved to arbitrary precision.`}</li>
            </ul>

            <h3>Example: Oscillation with Friction</h3>
            <p>
              {`Adiabatic invariance only holds for systems without dissipation. Friction breaks it, even when $\\gamma$ is tiny.`}
            </p>
            <p>
              {`Consider a particle in a potential well with frictional force $-\\gamma m v$. The friction drains energy. Averaged over one oscillation cycle, the energy loss rate is:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$\\langle\\dot{E}\\rangle = -2\\gamma\\omega I$$`}</span>
            </div>
            <p>
              {`Since $\\omega$ is not varying here, $I = \\frac{E}{\\omega}$ gives $\\dot{I} = \\frac{\\dot{E}}{\\omega}$. Substituting: $\\langle\\dot{I}\\rangle = -2\\gamma I$. So $I$ decays exponentially at rate $2\\gamma$ - not exponentially small in $\\tau$, but proportional to $\\gamma$ itself.`}
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does friction break adiabatic invariance even when the friction coefficient is
                small? Form your answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Adiabatic invariance comes from the Hamiltonian structure of phase space. Friction
                  destroys that structure.
                </p>
                <p>
                  A Hamiltonian flow has zero divergence in phase space. The action variable drifts
                  only due to slow parameter changes, giving exponentially small drift.
                </p>
                <p>
                  Friction adds nonzero divergence: it shrinks phase-space volume. This gives I a
                  rate of change proportional to {`$\\gamma$`} itself, not exponentially small.
                </p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`In action-angle coordinates, the rate of change of $I$ due to a slowly varying parameter is $\\dot{I} = \\Lambda(w, \\lambda(t))$, where $\\Lambda$ encodes how the Hamiltonian couples the slow variation to the action. Expand $\\Lambda$ as a Fourier series in the angle variable $w$: each term is $\\Lambda_l\\, e^{ilw}$.`}
              </p>
              <p>
                {`The total change $\\Delta I = \\int_{-\\infty}^{+\\infty} \\dot{I}\\,dt$ is an integral of a rapidly oscillating function. For such integrals, you can deform the integration path off the real time axis into the complex plane. The integral is then dominated by the singularity $w_0$ nearest to the real axis - the point where $\\Lambda$ blows up.`}
              </p>
              <p>
                {`Each Fourier mode picks up a factor $e^{-l\\,\\text{Im}(w_0)}$. The leading mode gives $\\Delta I \\sim e^{-\\text{Im}(w_0)}$, exponentially small. This result was proved by Slutskin (1964).`}
              </p>
            </div>
          </div>
        </>,
        // ── Section 14: Conditionally Periodic Motion ───────────────────────
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Conditionally Periodic Motion</h2>
            <p>
              Conditionally periodic motion is what happens when a system has several degrees of
              freedom, each oscillating with its own independent frequency. In a 1D bounded system,
              the single coordinate oscillates at one frequency and the motion is simply periodic.
              In higher dimensions, each coordinate can have a different frequency, and the combined
              trajectory is richer.
            </p>
            <p>
              {`When two frequencies have an irrational ratio - no integers $m$ and $n$ satisfy $m\\omega_1 = n\\omega_2$ - the trajectory never exactly repeats. Instead it winds around a torus (the mathematical surface of a donut: two coordinates, each wrapping around with period $2\\pi$) and eventually passes arbitrarily close to every point on it. Planet orbits, molecular vibrations, and particle accelerators all show this structure.`}
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A 2D oscillator has frequencies {`$\\omega_1 = \\sqrt{2}$`} and {`$\\omega_2 = 1$`}.
                These are irrational with respect to each other. Does the trajectory ever return to
                its starting point? What shape does the trajectory trace?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The trajectory never exactly returns to its starting point. It densely fills a
                  2-torus.
                </p>
                <p>
                  In action-angle space, the trajectory is{' '}
                  {`$(w_1, w_2) = (\\omega_1 t, \\omega_2 t)$`}, a line with irrational slope
                  winding densely around the torus {`$[0,2\\pi]\\times[0,2\\pi]$`}.
                </p>
              </details>
            </div>

            <TorusTrajectoryViz />

            <h3>Action Variables for Multi-dimensional Motion</h3>
            <p>
              {`For a system where the motion in each coordinate can be analysed independently (called separable), define one action variable per coordinate. Here $q_i$ is the $i$-th coordinate, $p_i$ is its conjugate momentum (encoding how fast the coordinate moves), and $\\oint$ integrates over one complete oscillation cycle:`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$I_i \\equiv \\oint \\frac{p_i\\,dq_i}{2\\pi}$$`}</span>
            </div>
            <p>
              {`Dividing by $2\\pi$ makes $I_i$ proportional to the area of the closed loop traced in the $(q_i, p_i)$ plane per cycle. The fundamental frequency of coordinate $i$ is how fast the total energy grows when you add action to that coordinate:`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\omega_i = \\frac{\\partial E(I_1,\\ldots,I_s)}{\\partial I_i}$$`}</span>
            </div>
            <p>
              {`In action-angle variables, the equations of motion are $\\dot{I}_i = 0$ (each action stays constant) and $\\dot{w}_i = \\omega_i$ (each angle advances at a fixed rate).`}
            </p>
            <p>
              The trajectory in angle space is a straight line with slope{' '}
              {`$\\omega_1 : \\omega_2 : \\cdots : \\omega_s$`}.
            </p>

            <ActionAngleConstruction />

            <h3>Degeneracy</h3>
            <p>A system is degenerate when some frequencies are rationally related:</p>
            <div className="lrn-eq">
              <span>{`$$n_1\\omega_1 = n_2\\omega_2 \\quad (\\text{integers } n_1, n_2)$$`}</span>
            </div>
            <p>
              {`In the degenerate case, the trajectory closes after a finite time: the motion is periodic. Extra conserved quantities appear beyond the $s$ action variables - the system has hidden symmetry. Because of this extra symmetry, the Hamilton-Jacobi equation can be separated in multiple different coordinate systems.`}
            </p>
            <p>
              The Kepler problem is the main example: its hidden symmetry (Runge-Lenz vector) makes
              all elliptical orbits degenerate (closed).
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Non-degenerate</span>
                <p>Frequencies are incommensurable (irrational ratios)</p>
                <p>Trajectory densely fills an s-torus</p>
                <p>{`Only $s$ independent conserved quantities $I_i$`}</p>
                <p>Hamilton-Jacobi separates in one coordinate system</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Degenerate</span>
                <p>Some frequencies are rationally related</p>
                <p>Trajectory is periodic (closed)</p>
                <p>Extra conserved quantities appear</p>
                <p>Hamilton-Jacobi separates in multiple coordinate systems</p>
              </div>
            </div>

            <IntegrablePhasePortrait />

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Degeneracy and Coordinate Systems</span>
              <p>
                When a system is degenerate, you can choose new action variables that are linear
                combinations of the original ones. Non-trivial choices reveal the extra symmetry.
              </p>
              <p>
                For the Kepler problem, spherical and parabolic coordinates both give valid
                separation, corresponding to different choices of conserved quantities.
              </p>
            </div>

            <h3>Worked Example: Kepler Orbit Action Variables</h3>
            <p>
              For elliptic motion in a {`$U = -\\frac{\\alpha}{r}$`} field, the action variables
              are:
            </p>
            <ul className="lrn-list">
              <li>{`Radial action: $I_r = \\frac{\\oint p_r\\,dr}{2\\pi}$`}</li>
              <li>{`Angular action: $I_\\theta = \\frac{\\oint p_\\theta\\,d\\theta}{2\\pi} = M - |M_z|$ ($M$ = total angular momentum, $M_z$ = its component along the $z$-axis)`}</li>
              <li>{`Azimuthal action: $I_\\phi = \\frac{\\oint p_\\phi\\,d\\phi}{2\\pi} = |M_z|$`}</li>
            </ul>
            <p>The total energy depends only on {`$I_r + I_\\theta + I_\\phi = I_r + M$`}:</p>
            <div className="lrn-eq">
              <span>{`$$E = -\\frac{m\\alpha^2}{2(I_r + M)^2}$$`}</span>
            </div>
            <p>
              {`Each frequency is $\\omega_i = \\frac{\\partial E}{\\partial I_i}$. Because $E$ depends on $I_r$, $I_\\theta$, and $I_\\phi$ only through their sum $I_r + M = I_r + I_\\theta + I_\\phi$, the partial derivative with respect to each is the same. All three frequencies are equal:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$\\omega_r = \\omega_\\theta = \\omega_\\phi$$`}</span>
            </div>
            <p>
              Equal frequencies mean all three angles return to their starting values after the same
              period. The orbit closes - this is the degeneracy of the Kepler problem.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does equal frequencies for all coordinates mean the orbit closes? Form your
                answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`In action-angle variables, each $w_i$ increases at rate $\\omega_i$.`}</p>
                <p>
                  {`The orbit returns to its starting point when all $w_i$ return to their starting values simultaneously.`}
                </p>
                <p>
                  {`If $\\omega_1 = \\omega_2 = \\omega_3 = \\omega$, all angles return after time $T = \\frac{2\\pi}{\\omega}$.`}
                </p>
                <p>So the orbit closes after one period, regardless of initial conditions.</p>
              </details>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Each angle variable $w_i$ increases linearly with time at rate $\\omega_i$. The trajectory in $(w_1, w_2, \\ldots, w_s)$ space is a straight line.`}
              </p>
              <p>
                {`The angle space is a torus: each $w_i$ wraps around with period $2\\pi$ - when it reaches $2\\pi$ it starts again at 0, just as an angle on a clock. The trajectory is a winding line on this torus.`}
              </p>
              <p>
                {`The line closes only if the slope $\\omega_1 : \\omega_2 : \\ldots : \\omega_s$ is rational - that is, only if all the ratios $\\frac{\\omega_i}{\\omega_j}$ are ratios of integers.`}
              </p>
              <p>
                If even one ratio is irrational, the line never closes. It passes arbitrarily close
                to every point on the torus and fills it densely.
              </p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'What does it mean for motion to be conditionally periodic? When is it fully periodic (degenerate)?',
        a: 'Conditionally periodic motion means each coordinate oscillates with its own frequency omega_i = partial E/partial I_i. The trajectory fills an s-dimensional torus in phase space. The motion is fully periodic (degenerate) when the frequencies are rationally related: n_1*omega_1 = n_2*omega_2 (integer n_1, n_2). In the degenerate case, the trajectory closes after one period and extra conserved quantities appear beyond the s action variables.'
      },
      {
        q: 'A particle moves in a Kepler potential U = negative alpha/r. Show that all three fundamental frequencies are equal.',
        a: "In action-angle variables, the total energy is E = negative m*alpha^2 / (2*(Ir + M)^2), where M = I_theta + I_phi. This depends only on Ir + M (not on I_theta and I_phi separately). The three frequencies are omega_r = partial E/partial I_r, omega_theta = partial E/partial I_theta, omega_phi = partial E/partial I_phi. Since E has the same dependence on each, all three partial derivatives are equal. Equal frequencies mean the orbit closes: this is Kepler's third law in action-angle form."
      },
      {
        q: 'Elaborate: Why is the adiabatic invariant conserved exponentially accurately, not just to some power of the slowness parameter?',
        a: 'The rate of change of I involves integrals of rapidly oscillating functions multiplied by slowly varying parameters. A slowly varying envelope has Fourier components that are exponentially small at high frequencies, of order exp(negative omega * tau) where tau is the transition time. The dominant contribution to delta_I comes from the nearest singularity of the Hamiltonian in the complex time plane. This gives delta_I proportional to exp(negative Im(w_0)), which goes to zero faster than any power of 1/tau as tau grows.'
      },
      {
        q: 'Predict: You slowly tighten the string of a pendulum (shortening its length) while it swings. The frequency doubles. What happens to the amplitude?',
        a: 'The physical amplitude (arc length) decreases by a factor of sqrt(2). Here is the full argument. The adiabatic invariant is I = E/omega. Since I is conserved and omega doubles, the energy E must double. Doubling omega = sqrt(g/l) requires l to decrease by a factor of 4 (not 2 - halving l only multiplies omega by sqrt(2)). The small-angle energy is E = (1/2)*m*g*l*theta_max^2. With E doubled and l quartered: theta_max^2 = 2E/(mgl) increases by a factor of 8, so the angular amplitude theta_max increases by a factor of 2*sqrt(2). But the physical amplitude (arc length s = l*theta_max) becomes s_new = (l/4) * 2*sqrt(2) * theta_max = s / sqrt(2). The swing gets shallower in space even though the angle is larger, because the string is much shorter.'
      }
    ],

    // ── Reference Mode ──────────────────────────────────────────────────────
    reference: {
      category: 'Quick Reference',
      title: 'Conditionally Periodic Motion',
      sections: [
        <>
          <div className="ref">
            <h2>Conditionally Periodic Motion</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Multi-dimensional action variables</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$I_i = \\frac{\\oint p_i\\,dq_i}{2\\pi}$`}, fundamental frequencies{' '}
                  {`$\\omega_i = \\frac{\\partial E}{\\partial I_i}$`}
                </p>
                <p>When to use: for separable multi-dimensional bounded systems.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Degeneracy condition</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$n_1\\omega_1 = n_2\\omega_2$`} (integers n_1, n_2): motion becomes periodic,
                  extra integrals appear.
                </p>
                <p>
                  When to use: to determine if a system has additional hidden symmetries (like the
                  Kepler problem).
                </p>
              </div>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Coordinate System</th>
                    <th>Separable Potential Form</th>
                    <th>Conserved Separation Constant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Spherical</td>
                    <td>{`$U = a(r) + \\frac{b(\\theta)}{r^2}$`}</td>
                    <td>{`$M^2$`} (angular momentum squared)</td>
                  </tr>
                  <tr>
                    <td>Parabolic</td>
                    <td>{`$U = \\frac{[a(\\xi)+b(\\eta)]}{\\xi+\\eta}$`}</td>
                    <td>Runge-Lenz projection</td>
                  </tr>
                  <tr>
                    <td>Elliptic</td>
                    <td>{`$U = \\frac{[a(\\xi)+b(\\eta)]}{\\xi^2-\\eta^2}$`}</td>
                    <td>Linear combination of angular momenta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}

export default function ConditionallyPeriodicMotionContent() {
  return <ConditionallyPeriodicMotionContentInner />
}
