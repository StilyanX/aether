import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  ActionAngleConstruction,
  IntegrablePhasePortrait,
  TorusTrajectoryViz
} from '../../../../../components/viz'

// Config

function ConditionallyPeriodicMotionContentInner() {
  const config = {
    cssPrefix: 'rbd',
    documentTitle: 'Action-Angle Variables and Integrable Systems - AETHER',
    learning: {
      groupTitle: 'Hamiltonian Mechanics and Canonical Formalism',
      category: 'Physics',
      title: 'Action-Angle Variables and Integrable Systems',
      subtitle:
        'Integrable motion winds on tori; action-angle coordinates make that structure exact',
      sections: [
        // Section 0: Integrable Systems and Action-Angle Variables
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Integrable Systems and Action-Angle Variables</h2>
            <p>
              You have solved Hamilton-Jacobi for separable systems. Now you will see what their
              solutions have in common. A whole class of bounded systems shares one hidden shape:
              the motion winds around an invisible doughnut surface called a torus.
            </p>
            <p>
              {`A system with $s$ degrees of freedom is integrable when it has $s$ independent conserved quantities that are in involution. "In involution" means every pair of them has a zero Poisson bracket, so they all commute with each other. You met Poisson brackets in the prior topic; here they decide which conserved quantities count.`}
            </p>

            <div className="lrn-callout lrn-definition">
              <span className="lrn-callout-label">Liouville-Arnold Theorem</span>
              <p>
                {`Take a system with $s$ degrees of freedom and $s$ independent conserved quantities in involution. If the surface where all of them hold fixed values is bounded and connected, then that surface is an $s$-dimensional torus.`}
              </p>
              <p>
                {`On that torus there exist coordinates $(I_i, w_i)$ in which the energy depends only on the actions $I_i$. Each angle $w_i$ then advances at a steady rate. The motion is conditionally periodic: a sum of $s$ independent oscillations.`}
              </p>
            </div>

            <p>
              Conditionally periodic motion is exactly this torus winding. In a 1D bounded system
              one coordinate oscillates at one frequency, and the motion simply repeats. In higher
              dimensions each coordinate carries its own frequency, and the combined path is far
              richer.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A 2D oscillator has frequencies {`$\\omega_1 = \\sqrt{2}$`} and {`$\\omega_2 = 1$`}.
                These have an irrational ratio. Does the trajectory ever return to its starting
                point? What shape does the trajectory trace?
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
              {`For a system where you can study the motion in each coordinate on its own (called separable), define one action variable per coordinate. Here $q_i$ is the $i$-th coordinate, $p_i$ is its conjugate momentum (encoding how fast the coordinate moves), and $\\oint$ integrates over one complete oscillation cycle:`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$I_i \\equiv \\oint \\frac{p_i\\,dq_i}{2\\pi}$$`}</span>
            </div>
            <p>
              {`Dividing by $2\\pi$ makes $I_i$ proportional to the area of the closed loop traced in the $(q_i, p_i)$ plane per cycle. These actions are precisely the actions the Liouville-Arnold theorem promised. They come straight out of Hamilton-Jacobi: the separation constants of the action $S$ fix the actions $I_i$, and the angles follow from $w_i = \\partial S/\\partial I_i$.`}
            </p>
            <p>
              {`The fundamental frequency of coordinate $i$ is how fast the total energy grows when you add action to that coordinate:`}
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
              {`A rational frequency ratio closes the orbit, so the motion is periodic. A closed orbit means an extra quantity is conserved beyond the $s$ actions, and this extra conserved quantity is in involution with the others. This hidden symmetry lets you separate the Hamilton-Jacobi equation in more than one coordinate system. The new actions are then linear combinations of the original ones.`}
            </p>
            <p>
              The Kepler problem is the main example. Its hidden symmetry is the Runge-Lenz vector,
              the conserved direction pointing along the orbit's long axis, and it makes every
              elliptical orbit degenerate (closed).
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Non-degenerate</span>
                <p>Frequencies have irrational ratios</p>
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
            <p>
              {`The angular values follow from evaluating each $\\oint$ integral directly: $p_\\phi = M_z$ is constant, and the $p_\\theta$ integral over one swing gives $M - |M_z|$. The total energy depends only on $I_r + I_\\theta + I_\\phi = I_r + M$:`}
            </p>
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
        </>,
        // Section 1: Accuracy of Adiabatic Invariant Conservation
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Accuracy of Adiabatic Invariant Conservation</h2>
            <p>
              Now apply the action to a system whose parameters drift. For a single oscillator the
              action is the adiabatic invariant. When a parameter varies slowly, this action barely
              changes. The change is not merely small. It is exponentially small. This section makes
              that precise.
            </p>

            <div className="lrn-callout lrn-definition">
              <span className="lrn-callout-label">The Adiabatic Invariant</span>
              <p>
                {`For a 1D oscillator the action is $I = \\oint p\\,dq / (2\\pi) = E/\\omega$, the energy divided by the angular frequency. This is the same action from Section 0, now for one degree of freedom.`}
              </p>
              <p>
                {`When a parameter (a spring constant, a pendulum length) drifts slowly over many oscillation periods, $I$ stays fixed to leading order even though $E$ and $\\omega$ both change. That near-conservation is what "adiabatic invariant" means.`}
              </p>
            </div>

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

            <h3>Example: Oscillator with Slowly Varying Frequency</h3>
            <p>
              {`Take $\\omega^2 = \\omega_0^2\\,\\frac{1+ae^s}{1+e^s}$, where $s = \\frac{t}{\\tau}$ is the dimensionless time. As $s$ increases from $-\\infty$ to $+\\infty$, the frequency smoothly shifts from one constant to another:`}
            </p>
            <ul className="lrn-list">
              <li>{`The frequency starts at $\\omega_0$ (when $s \\to -\\infty$) and ends at $\\omega_0\\sqrt{a}$ (when $s \\to +\\infty$).`}</li>
              <li>{`The change in $I$ across the transition is exponentially small in $\\tau$.`}</li>
              <li>{`For very slow transitions ($\\tau \\to \\infty$), $I$ is conserved to arbitrary precision.`}</li>
            </ul>
            <p>
              {`To estimate $\\Delta I$, find the nearest point in complex time where $\\omega(t)$ becomes singular. Here the frequency blows up where the denominator vanishes: $1 + e^s = 0$, so $e^s = -1$. The smallest solution is $s = i\\pi$. Since $s = t/\\tau$, this means $t = i\\pi\\tau$, so the singularity sits a distance $\\text{Im}(w_0) = \\pi\\tau$ off the real time axis.`}
            </p>
            <p>
              {`Plugging this into the result below gives $\\Delta I \\sim e^{-\\pi\\tau}$. The change shrinks exponentially as the transition slows. This single example is why the general claim "linear in $\\tau$" holds: the singularity sits at $\\text{Im}(w_0) = \\pi\\tau$, exactly proportional to $\\tau$.`}
            </p>

            <h3>The Exponential Accuracy Result</h3>
            <p>
              For a system with slowly varying parameters, the change in the adiabatic invariant is:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\Delta I \\sim \\exp(-\\text{Im}(w_0))$$`}</span>
            </div>
            <p>
              {`Here $w_0$ is a point in complex time where the slowly-varying parameter becomes singular. That is the point where the function describing the parameter's change would blow up if you allowed time to be a complex number. The imaginary part $\\text{Im}(w_0)$ measures how far this breakdown sits from real time. A smoother, slower transition pushes $w_0$ further from the real axis. This makes $\\text{Im}(w_0)$ larger and $\\Delta I$ smaller. As $\\tau \\to \\infty$, $\\text{Im}(w_0) \\propto \\tau$, recovering $\\Delta I \\sim e^{-\\text{const}\\cdot\\tau}$.`}
            </p>

            <h3>Example: Oscillation with Friction</h3>
            <p>
              {`Adiabatic invariance only holds for systems without friction (no energy drained away). Friction breaks it, even when $\\gamma$ is tiny.`}
            </p>
            <p>
              {`Consider a particle in a potential well with frictional force $-2\\gamma m v$. The friction drains energy at rate $2\\gamma m v^2$. Averaged over one oscillation cycle, the kinetic and potential energy are equal, so $m\\langle v^2\\rangle = E$. The cycle-averaged energy loss rate is then:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$\\langle\\dot{E}\\rangle = -2\\gamma\\,m\\langle v^2\\rangle = -2\\gamma E = -2\\gamma\\omega I$$`}</span>
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
                  A Hamiltonian flow has zero divergence in phase space: it never compresses or
                  expands the volume of a cloud of nearby states. The action variable drifts only
                  due to slow parameter changes, giving exponentially small drift.
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
                {`In action-angle coordinates, the rate of change of $I$ due to a slowly varying parameter is $\\dot{I} = \\Lambda(w, \\lambda(t))$. Here $\\Lambda$ encodes how the Hamiltonian links the slow variation to the action. Expand $\\Lambda$ as a Fourier series in the angle variable $w$: each term is $\\Lambda_l\\, e^{ilw}$.`}
              </p>
              <p>
                {`The total change $\\Delta I = \\int_{-\\infty}^{+\\infty} \\dot{I}\\,dt$ is an integral of a rapidly oscillating function. For such integrals, you can deform the integration path off the real time axis into the complex plane. The integral is then dominated by the singularity $w_0$ nearest to the real axis - the point where $\\Lambda$ blows up.`}
              </p>
              <p>
                {`Each Fourier mode picks up a factor $e^{-l\\,\\text{Im}(w_0)}$. The leading mode gives $\\Delta I \\sim e^{-\\text{Im}(w_0)}$, exponentially small.`}
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
        q: 'State the Liouville-Arnold theorem. What conditions must the conserved quantities satisfy?',
        a: 'A system with s degrees of freedom is integrable when it has s independent conserved quantities in involution (every pair has zero Poisson bracket). The Liouville-Arnold theorem says: if the level set where all s quantities hold fixed values is bounded and connected, that level set is an s-dimensional torus. On the torus there exist action-angle coordinates (I_i, w_i) in which the energy depends only on the actions I_i, each angle w_i advances at a steady rate omega_i = partial E/partial I_i, and the motion is conditionally periodic.'
      },
      {
        q: 'A particle moves in a Kepler potential U = negative alpha/r. Show that all three fundamental frequencies are equal.',
        a: "In action-angle variables, the total energy is E = negative m*alpha^2 / (2*(Ir + M)^2), where M = I_theta + I_phi. This depends only on Ir + M (not on I_theta and I_phi separately). The three frequencies are omega_r = partial E/partial I_r, omega_theta = partial E/partial I_theta, omega_phi = partial E/partial I_phi. Since E has the same dependence on each, all three partial derivatives are equal. Equal frequencies mean the orbit closes: this is Kepler's third law in action-angle form."
      },
      {
        q: 'Elaborate: Why is the adiabatic invariant conserved exponentially accurately, not just to some power of the slowness parameter?',
        a: 'The rate of change of I involves integrals of rapidly oscillating functions multiplied by slowly varying parameters. A slowly varying envelope (the slow shape that modulates the fast oscillation) has Fourier components that are exponentially small at high frequencies, of order exp(negative omega * tau) where tau is the transition time. The dominant contribution to delta_I comes from the nearest singularity of the Hamiltonian in the complex time plane. This gives delta_I proportional to exp(negative Im(w_0)), which goes to zero faster than any power of 1/tau as tau grows.'
      },
      {
        q: 'Predict: You slowly tighten the string of a pendulum (shortening its length) while it swings. The frequency doubles. What happens to the amplitude?',
        a: 'The physical amplitude (arc length) decreases by a factor of sqrt(2). Here is the full argument. The adiabatic invariant taught on this page is I = E/omega. Since I is conserved and omega doubles, the energy E must double. Doubling omega = sqrt(g/l) requires l to decrease by a factor of 4 (not 2 - halving l only multiplies omega by sqrt(2)). The small-angle energy is E = (1/2)*m*g*l*theta_max^2 (this small-angle pendulum energy and omega = sqrt(g/l) come from the earlier oscillations topic). With E doubled and l quartered: theta_max^2 = 2E/(mgl) increases by a factor of 8, so the angular amplitude theta_max increases by a factor of 2*sqrt(2). But the physical amplitude (arc length s = l*theta_max) becomes s_new = (l/4) * 2*sqrt(2) * theta_max = s / sqrt(2). The swing gets shallower in space even though the angle is larger, because the string is much shorter.'
      }
    ],

    // Reference Mode
    reference: {
      category: 'Quick Reference',
      title: 'Action-Angle Variables and Integrable Systems',
      sections: [
        <>
          <div className="ref">
            <h2>Action-Angle Variables and Integrable Systems</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Liouville-Arnold theorem</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$s$ independent conserved quantities in involution (zero Poisson brackets) + bounded connected level set $\\Rightarrow$ motion on an $s$-torus with action-angle coordinates.`}
                </p>
                <p>
                  When to use: to confirm a system is integrable and carries global action-angle
                  variables.
                </p>
              </div>
            </div>

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

            <div className="lrn-definition">
              <span className="lrn-definition-term">Adiabatic-invariant accuracy</span>
              <div className="lrn-definition-desc">
                <p>
                  {`Slow parameter drift: $\\Delta I \\sim \\exp(-\\text{Im}(w_0))$, exponentially small in the transition time $\\tau$. Friction force $-2\\gamma m v$ instead gives $\\dot{I} = -2\\gamma I$ (linear-in-$\\gamma$ decay, not exponentially small).`}
                </p>
                <p>
                  When to use: to estimate how well the action $I = E/\\omega$ holds under slow
                  change versus friction.
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
