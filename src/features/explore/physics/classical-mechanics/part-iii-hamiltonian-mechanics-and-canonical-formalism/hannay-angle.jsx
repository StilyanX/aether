import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  AdiabaticInvariantArea,
  AdiabaticOscillator,
  AdiabaticPhaseEllipse,
  DynamicalVsGeometricPhase,
  FoucaultPrecession,
  SolidAngleHolonomy
} from '../../../../../components/viz'

export default function HannayAngle() {
  const config = {
    cssPrefix: 'han',
    documentTitle: 'Classical Geometric Phase and the Hannay Angle - AETHER',
    learning: {
      groupTitle: 'Hamiltonian Mechanics and Canonical Formalism',
      category: 'Physics',
      title: 'Classical Geometric Phase and the Hannay Angle',
      subtitle:
        'How adiabatic cycles in parameter space rotate the angle variable by a purely geometric amount',
      sections: [
        // Section 0: Motion on Tori and Action-Angle Variables
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Motion on Tori and Action-Angle Variables</h2>
            <p>
              Most bounded, integrable Hamiltonian systems share a hidden structure. Their
              trajectories wind around invisible doughnut-shaped surfaces called invariant tori.
              This section builds the coordinate system that makes that structure visible.
            </p>
            <p>
              <strong>When to use this:</strong> Use action-angle variables whenever you need to
              describe a multi-frequency oscillating system, apply perturbation theory, or study
              what happens when system parameters change slowly.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`A pendulum swings back and forth. Its phase space has coordinates $(q, p)$ where $q$ is the angle and $p$ is the angular momentum. What shape does the phase-space trajectory trace for a small-amplitude swing?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`It traces a closed ellipse. The action $I = \\frac{1}{2\\pi}\\oint p\\,dq$ equals the area of that ellipse divided by $2\\pi$.`}
                </p>
                <p>
                  Every closed curve in phase space defines an action. The action variable is the
                  area enclosed per radian.
                </p>
              </details>
            </div>

            <h3>The Pendulum in Phase Space</h3>
            <p>
              {`The pendulum Hamiltonian is $H = \\frac{1}{2}p^2 - \\cos q$. The phase space is a cylinder $\\mathbb{R}^1 \\times S^1$ because $q$ is an angle. Two critical energy levels divide this cylinder into three regions:`}
            </p>
            <ul className="lrn-list">
              <li>
                {`Rotation: $H > 1$. The pendulum swings over the top. The orbit wraps around the full cylinder.`}
              </li>
              <li>
                {`Oscillation: $-1 < H < 1$. The pendulum rocks back and forth. The orbit is a closed loop.`}
              </li>
              <li>
                {`The dividing orbits at $H = \\pm 1$ are the separatrices: the boundary orbits that separate swinging from spinning.`}
              </li>
            </ul>
            <p>
              Action-angle variables are well defined in each region. The action variable counts how
              much phase-space area the orbit encloses per cycle.
            </p>

            <h3>Recap: Action-Angle Variables on an n-Torus</h3>
            <p>
              {`This is the foundation built in the prior topic, carried forward in one paragraph. An integrable system with $n$ degrees of freedom moves on an $n$-torus. It has one action $I_i = \\frac{1}{2\\pi}\\oint p_i\\,dq_i$ per degree of freedom. The conjugate angles advance at constant rates $\\dot{\\boldsymbol{\\varphi}} = \\boldsymbol{\\omega}(\\mathbf{I})$, $\\omega_i = \\partial H/\\partial I_i$. So the trajectory is a straight line on the torus.`}
            </p>
            <p>
              {`When the frequencies $\\boldsymbol\\omega$ have no integer relation, the trajectory fills the torus densely and the time average of any function equals its space average. That conditionally periodic motion is what the averaging argument below acts on.`}
            </p>
          </div>
        </>,

        // Section 1: Averaging and Perturbation Theory
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Averaging and Perturbation Theory</h2>
            <p>
              Real systems are never perfectly integrable. Planets perturb each other. Oscillators
              couple weakly. The averaging principle handles these small perturbations by replacing
              the rapidly oscillating perturbed system with a slowly evolving averaged system.
            </p>
            <p>
              <strong>When to use this:</strong>{' '}
              {`Use the averaging principle when a perturbation parameter $\\varepsilon \\ll 1$ is present and the unperturbed system is integrable. It gives accurate results on the long timescale $0 \\le t \\le 1/\\varepsilon$.`}
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`A planet orbits the Sun. A distant second planet applies a small gravitational force $\\varepsilon F(\\varphi, \\mathbf{I}, t)$. Does the semi-major axis of the first planet drift secularly over long times? (Secular means a term that grows steadily with time instead of oscillating.)`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  No. The Laplace theorem says the semi-major axis has no secular perturbations in a
                  nondegenerate Hamiltonian system. The averaged perturbation force on the action
                  variables vanishes.
                </p>
                <p>
                  {`This is because $\\bar{g} = (2\\pi)^{-n}\\int_{T^n}\\frac{\\partial H_1}{\\partial\\boldsymbol{\\varphi}}\\,d\\boldsymbol{\\varphi} = 0$: the integral of a derivative over the torus is always zero.`}
                </p>
              </details>
            </div>

            <h3>The Perturbed System and Its Average</h3>
            <p>{`A nearly integrable system in action-angle variables takes the form:`}</p>
            <div className="lrn-eq">
              {`$$\\dot{\\boldsymbol{\\varphi}} = \\boldsymbol{\\omega}(\\mathbf{I}) + \\varepsilon f(\\mathbf{I},\\boldsymbol{\\varphi}), \\qquad \\dot{\\mathbf{I}} = \\varepsilon g(\\mathbf{I},\\boldsymbol{\\varphi})$$`}
            </div>
            <p>
              {`The small parameter $\\varepsilon \\ll 1$ controls the size of the perturbation. The averaged system replaces $g$ by its torus average:`}
            </p>
            <div className="lrn-eq">
              {`$$\\dot{\\mathbf{J}} = \\varepsilon \\bar{g}(\\mathbf{J}), \\qquad \\bar{g}(\\mathbf{J}) = \\frac{1}{(2\\pi)^n}\\int_{T^n} g(\\mathbf{J},\\boldsymbol{\\varphi})\\,d\\varphi_1\\cdots d\\varphi_n$$`}
            </div>

            <h3>The Theorem on Averaging</h3>
            <p>
              {`The key result: the actual trajectory $\\mathbf{I}(t)$ stays close to the averaged trajectory $\\mathbf{J}(t)$ for a long time.`}
            </p>
            <div className="lrn-eq">
              {`$$|\\mathbf{I}(t) - \\mathbf{J}(t)| < c_9\\varepsilon \\qquad \\text{for all } 0 \\le t \\le \\frac{1}{\\varepsilon}$$`}
            </div>
            <p>
              {`The proof uses a near-identity change of variables $\\mathbf{P} = \\mathbf{I} + \\varepsilon\\mathbf{k}(\\mathbf{I},\\varphi)$. You pick $\\mathbf{k}$ to cancel the oscillating part of $g$. That leaves $\\dot{\\mathbf{P}} = \\varepsilon\\bar{g}(\\mathbf{P}) + \\mathbf{R}$ with a tiny remainder $|\\mathbf{R}| < c_2\\varepsilon^2$. Gronwall's lemma then bounds the error for $t \\le 1/\\varepsilon$. (Gronwall's lemma turns a differential inequality into an exponential bound on the gap.)`}
            </p>

            <h3>Worked Example: Simple One-Frequency Case</h3>
            <p>
              {`Consider the simplest case: $\\dot\\varphi = \\omega \\ne 0$, $\\dot{I} = \\varepsilon g(\\varphi)$. The averaged system is $\\dot{J} = \\varepsilon \\bar{g}$ where $\\bar{g} = \\frac{1}{2\\pi}\\int_0^{2\\pi}g(\\varphi)\\,d\\varphi$.`}
            </p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-num">1</span>
                <div className="lrn-step-body">
                  <p>
                    {`The actual trajectory: $I(t) = I(0) + \\varepsilon\\int_0^t g(\\omega s + \\varphi_0)\\,ds$.`}
                  </p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">2</span>
                <div className="lrn-step-body">
                  <p>{`The averaged trajectory: $J(t) = I(0) + \\varepsilon\\bar{g}\\,t$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">3</span>
                <div className="lrn-step-body">
                  <p>
                    {`The difference $|I(t) - J(t)| = \\varepsilon\\left|\\int_0^t [g(\\omega s + \\varphi_0) - \\bar{g}]\\,ds\\right|$. Because $g - \\bar{g}$ oscillates with zero mean, the integral stays bounded: $|I - J| < c\\varepsilon$ for $0 \\le t \\le 1/\\varepsilon$.`}
                  </p>
                </div>
              </div>
            </div>

            <h3>Gauss's Ring and the Laplace Theorem</h3>
            <p>
              The averaging principle has a striking application to planetary mechanics. Replace
              each planet with a thin ring of the same total mass, distributed along its orbit in
              proportion to the time the planet spends in each arc. This "Gauss ring" produces the
              same averaged gravitational force as the actual planet.
            </p>
            <p>
              {`In a nondegenerate Hamiltonian system, $\\bar{g} = 0$ because the perturbation force is $g = \\partial H_1/\\partial\\boldsymbol{\\varphi}$. The average of a derivative over a full circle is the net change of $H_1$ around that circle. Since $H_1$ is single-valued, it returns to its start, so the net change is zero. This means the semi-major axes of planetary orbits have no secular drift. This is the Laplace theorem.`}
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the averaging principle fail at resonances, and what does "secular change"
                mean there?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`At a resonance, $\\mathbf{k}\\cdot\\boldsymbol{\\omega} = 0$ for some integer vector $\\mathbf{k}$. The near-identity substitution requires dividing by $(\\mathbf{k},\\boldsymbol{\\omega})$, which blows up.`}
                </p>
                <p>
                  {`Secular change means a term that grows linearly with time (like $\\varepsilon t$) rather than oscillating. At resonance, the action variable drifts instead of staying bounded. The averaging series is asymptotic, not convergent.`}
                </p>
              </details>
            </div>
          </div>
        </>,

        // Section 2: Adiabatic Invariance of the Action
        <>
          <div className="lrn-section" id="lrn-section-2" data-section-index="2">
            <h2>Adiabatic Invariance of the Action</h2>
            <p>
              When a system parameter changes slowly, the action variable changes hardly at all.
              This near-conservation is called adiabatic invariance. It is far more robust than
              exact conservation: it holds even though the Hamiltonian is changing.
            </p>
            <p>
              <strong>When to use this:</strong>{' '}
              {`Use adiabatic invariance whenever a system parameter (spring constant, pendulum length, magnetic field strength) changes on a timescale much longer than the oscillation period. The action $I = \\frac{1}{2\\pi}\\oint p\\,dq$ stays approximately constant while energy and frequency both change.`}
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`A harmonic oscillator has frequency $\\omega = 1$ and total energy $E = 2$, so $I = E/\\omega = 2$. You slowly double the frequency to $\\omega = 2$. What is the new energy? What happens to the amplitude?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$I$ is conserved, so $E_{\\rm new} = I\\cdot\\omega_{\\rm new} = 2 \\cdot 2 = 4$. The energy doubles.`}
                </p>
                <p>
                  {`For a harmonic oscillator $E = \\frac{1}{2}m\\omega^2 x_{\\rm max}^2$. With $E$ doubled and $\\omega^2$ quadrupled: $x_{\\rm max}^2 = \\frac{2E}{m\\omega^2}$ gives $x_{\\rm max}$ decreasing by $1/\\sqrt{2}$.`}
                </p>
              </details>
            </div>

            <h3>Definition of an Adiabatic Invariant</h3>
            <p>
              {`A quantity $I(p,q;\\lambda)$ is an adiabatic invariant of the slowly varying system $H(p,q;\\varepsilon t)$ if: for every $\\kappa > 0$ there exists $\\varepsilon_0 > 0$ such that when $0 < \\varepsilon < \\varepsilon_0$ and $0 < t < 1/\\varepsilon$:`}
            </p>
            <div className="lrn-eq lrn-eq-hero">
              {`$$|I(p(t),q(t);\\varepsilon t) - I(p(0),q(0);0)| < \\kappa$$`}
            </div>
            <p>
              {`The parameter $\\lambda = \\varepsilon t$ changes slowly: in one oscillation period, $\\lambda$ changes by only $\\sim\\varepsilon\\cdot(2\\pi/\\omega) \\ll 1$.`}
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">First Integral</span>
                <p>
                  {`Exactly conserved: $\\frac{dI}{dt} = 0$ for all time when parameters are fixed`}
                </p>
                <p>Holds for arbitrarily long times</p>
                <p>Not destroyed by any perturbation of the same symmetry</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Adiabatic Invariant</span>
                <p>
                  {`Approximately conserved: $|I(t) - I(0)| < \\kappa$ only for slowly varying parameters and finite time $t < 1/\\varepsilon$`}
                </p>
                <p>
                  {`Destroyed by resonances or if you wait long enough ($t \\gg 1/\\varepsilon$)`}
                </p>
                <p>Works even though the Hamiltonian is not time-independent</p>
              </div>
            </div>

            <h3>The Adiabatic Invariance Theorem</h3>
            <p>
              {`If $\\omega(I,\\lambda) \\ne 0$ everywhere along the trajectory (no resonance with zero frequency), then the action variable $I(p,q;\\lambda)$ is an adiabatic invariant.`}
            </p>
            <p>
              The proof applies the averaging theorem after a time-dependent canonical
              transformation. Introduce a generating function {`$S(I,q;\\lambda)$`} that maps{' '}
              {`$(p,q)$`} to action-angle variables at each fixed {`$\\lambda$`}. The new
              Hamiltonian is:
            </p>
            <div className="lrn-eq">
              {`$$K = H_0(I,\\lambda) + \\varepsilon\\frac{\\partial S}{\\partial\\lambda}$$`}
            </div>
            <p>
              {`The equations in $(I,\\varphi,\\lambda)$ become $\\dot\\varphi = \\omega + \\varepsilon f$, $\\dot{I} = \\varepsilon g$, $\\dot\\lambda = \\varepsilon$, where $g = -\\partial^2 S/\\partial\\varphi\\partial\\lambda$. The averaged $\\bar{g}$ vanishes because $\\partial S/\\partial\\lambda$ is single-valued around each $I = \\text{const}$ circle. The averaging theorem then gives $|I(t) - I(0)| < c\\varepsilon$.`}
            </p>

            <AdiabaticOscillator />
            <AdiabaticInvariantArea />
            <AdiabaticPhaseEllipse />

            <h3>Worked Example: Harmonic Oscillator Adiabatic Invariant</h3>
            <p>
              {`For $H = \\frac{a^2}{2}p^2 + \\frac{b^2}{2}q^2$ with $\\omega = ab$ and energy $h = H$, the action is $I = h/\\omega$.`}
            </p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-num">1</span>
                <div className="lrn-step-body">
                  <p>
                    {`The phase trajectory is an ellipse with semi-axes $q_{\\rm max} = \\frac{\\sqrt{2h}}{b}$ and $p_{\\rm max} = \\frac{\\sqrt{2h}}{a}$.`}
                  </p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">2</span>
                <div className="lrn-step-body">
                  <p>
                    {`Area of the ellipse: $\\pi\\cdot q_{\\rm max}\\cdot p_{\\rm max} = \\pi\\cdot\\frac{\\sqrt{2h}}{b}\\cdot\\frac{\\sqrt{2h}}{a} = \\frac{2\\pi h}{ab} = \\frac{2\\pi h}{\\omega}$.`}
                  </p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">3</span>
                <div className="lrn-step-body">
                  <p>
                    {`So $I = \\frac{1}{2\\pi}\\cdot \\frac{2\\pi h}{\\omega} = \\frac{h}{\\omega}$. When $\\omega$ changes slowly, $h = I\\omega$ changes proportionally to $\\omega$. This is the Einstein (1911) adiabatic invariant.`}
                  </p>
                </div>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Einstein called $I = E/\\omega$ the adiabatic invariant in 1911. Why did this matter before quantum mechanics was fully established?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`Einstein used it to argue that quantum numbers are adiabatic invariants. If you slowly change the frequency of an oscillator, the quantum $\\hbar\\omega$ (energy per quantum) stays the same fraction of the total energy. This means the quantum number $n = E/(\\hbar\\omega)$ is preserved.`}
                </p>
                <p>
                  {`This was the first hint that $I = E/\\omega$ had a deep physical meaning: each quantum $\\hbar\\omega$ is preserved as $\\omega$ varies. The adiabatic invariant $I$ equals $n\\hbar$ where $n$ is the quantum number.`}
                </p>
              </details>
            </div>

            <h3>Worked Example: Slowly Doubled Pendulum</h3>
            <p>
              {`Let the pendulum length vary as $l(t) = l_0(1 + \\varepsilon t)$, so $l$ doubles over time $1/\\varepsilon$. The Hamiltonian is $H = \\frac{p^2}{2l^2} + \\frac{lgq^2}{2}$ with frequency $\\omega = \\sqrt{g/l}$.`}
            </p>
            <p>
              {`Build the scaling in three steps. The frequency is $\\omega = \\sqrt{g/l} \\propto l^{-1/2}$. The action $I = h/\\omega$ is conserved, so the energy scales with frequency: $h = I\\omega \\propto l^{-1/2}$. At the turning point the energy is all potential, $h = \\frac{1}{2}lg\\,q_{\\rm max}^2$, so $q_{\\rm max}^2 = 2h/(lg) \\propto l^{-1/2}/l = l^{-3/2}$. Taking the square root gives $q_{\\rm max} \\propto l^{-3/4}$:`}
            </p>
            <div className="lrn-eq lrn-eq-hero">
              {`$$q_{\\rm max}(t) = q_{\\rm max}(0)\\left(\\frac{l(0)}{l(t)}\\right)^{3/4}$$`}
            </div>
            <p>
              When the pendulum is slowly lengthened, the angular amplitude shrinks as{' '}
              {`$l^{-3/4}$`}. The exponent {`$3/4$`} comes from combining the frequency scaling{' '}
              {`$l^{-1/2}$`} with the energy scaling {`$l^{-1/2}$`}.
            </p>

            <h3>Worked Example: Elastic Ball Between Moving Walls</h3>
            <p>
              A ball of mass 1 bounces elastically between two walls separated by {`$l$`}. The phase
              trajectory is a rectangle in {`$(q,p)$`} space.
            </p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-num">1</span>
                <div className="lrn-step-body">
                  <p>
                    {`The area of the rectangle in phase space is $2vl$ (height $2v$ in momentum, width $l$ in position).`}
                  </p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">2</span>
                <div className="lrn-step-body">
                  <p>
                    {`The action $I = \\frac{1}{2\\pi}\\cdot 2vl = \\frac{vl}{\\pi}$. Since $I$ is an adiabatic invariant, $vl = \\text{const}$.`}
                  </p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">3</span>
                <div className="lrn-step-body">
                  <p>
                    {`If the wall separation halves ($l \\to l/2$), the speed doubles ($v \\to 2v$). Kinetic energy quadruples.`}
                  </p>
                </div>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Why is the phase-space area, not the energy, the conserved quantity? When a parameter changes slowly, the orbit sweeps out a tube in phase space.`}
              </p>
              <p>
                {`The cross-section area of that tube stays fixed because the flow preserves volume (Liouville's theorem). The action $I = \\frac{1}{2\\pi}\\oint p\\,dq$ is exactly that area divided by $2\\pi$. Energy and frequency both change, but the enclosed area is locked.`}
              </p>
            </div>
          </div>
        </>,

        // Section 3: Curvature and Parallel Transport (recap)
        <>
          <div className="lrn-section" id="lrn-section-3" data-section-index="3">
            <h2>Curvature and Parallel Transport: A Recap</h2>
            <p>
              The Hannay angle needs one idea from the prior topic on curvature and geodesic flow.
              Carry a vector around a closed loop on a curved surface while keeping its direction
              fixed as measured from within the surface. It can come back rotated. That rotation is
              the holonomy, and it measures the curvature inside the loop.
            </p>
            <p>
              On a sphere the holonomy equals the solid angle enclosed by the loop. For a polar cap
              bounded by a latitude circle at colatitude {`$\\theta$`} (the angle from the North
              Pole), that solid angle is:
            </p>
            <div className="lrn-eq lrn-eq-hero">{`$$\\Omega = 2\\pi(1 - \\cos\\theta)$$`}</div>
            <p>
              A flat surface, a cone, and a cylinder all have zero curvature, so they give no
              rotation. Only the new fact matters here: the quantity that gets parallel-transported
              around the loop is the angle variable of the slow system.
            </p>

            <SolidAngleHolonomy />
          </div>
        </>,

        // Section 4: The Hannay Angle
        <>
          <div className="lrn-section" id="lrn-section-4" data-section-index="4">
            <h2>The Hannay Angle and Classical Geometric Phase</h2>
            <p>
              We now bring together all the machinery: action-angle variables, adiabatic invariance,
              and parallel transport. When the parameters of a Hamiltonian system complete a slow
              adiabatic cycle, the angle variable does not simply return to its starting point. It
              picks up an extra shift beyond the expected dynamical advance. This shift is the
              Hannay angle.
            </p>
            <p>
              <strong>When to use this:</strong> Use the Hannay angle framework whenever a classical
              system undergoes a closed adiabatic parameter cycle and you need to compute the angle
              shift that depends only on the loop in parameter space, not on the rate of cycling.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A pendulum completes one full day at a fixed latitude. Its swing plane ends up
                rotated. Is the rotation angle the same no matter how slowly the Earth turns (as
                long as it completes exactly one rotation)? Does the rotation depend on latitude?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Yes: the rotation depends only on the loop (one full daily rotation), not on
                  Earth's rotation rate. This is a geometric phase.
                </p>
                <p>
                  Yes: it depends on latitude. At the pole the full solid angle is enclosed: maximum
                  rotation. At the equator the loop encloses zero solid angle: no rotation.
                </p>
              </details>
            </div>

            <h3>Dynamical Phase vs Geometric Phase</h3>
            <p>
              {`After a slow adiabatic cycle of duration $T$ in parameter space, the angle variable $\\varphi$ has advanced by two distinct contributions:`}
            </p>
            <div className="lrn-eq lrn-eq-hero">
              {`$$\\Delta\\varphi_{\\rm total} = \\underbrace{\\int_0^T \\omega(\\mathbf{I},\\lambda(t))\\,dt}_{\\text{dynamical phase}} + \\underbrace{\\Delta\\varphi_{\\rm geom}}_{\\text{Hannay angle}}$$`}
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Dynamical Phase</span>
                <p>{`$\\Delta\\varphi_{\\rm dyn} = \\int_0^T \\omega(\\mathbf{I},\\lambda(t))\\,dt$`}</p>
                <p>Depends on the rate of cycling (how fast you traverse the loop)</p>
                <p>Grows with total time: going slower gives a larger dynamical phase</p>
                <p>Computable from the instantaneous frequency at each moment</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Geometric Phase (Hannay Angle)</span>
                <p>Depends only on the loop in parameter space</p>
                <p>Independent of cycling rate: same whether you go slowly or very slowly</p>
                <p>
                  Equal to minus the solid angle enclosed by the loop in the appropriate parameter
                  space
                </p>
                <p>Purely geometric: a property of the loop, not of the dynamics along it</p>
              </div>
            </div>

            <DynamicalVsGeometricPhase />

            <h3>Worked Example First: The Foucault Pendulum</h3>
            <p>
              {`Start with the most famous case, then read off the general rule from it. A pendulum swings at a fixed latitude $\\lambda$ while the Earth turns once in a day. Its swing plane comes back rotated. Treat the parameter as the local "up" direction: the direction of gravity seen from the pendulum. As the Earth turns, that direction traces a circle on the unit sphere of directions.`}
            </p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-num">1</span>
                <div className="lrn-step-body">
                  <p>
                    {`Identify the loop. The "up" direction sits at colatitude $\\theta = \\pi/2 - \\lambda$ from the North Pole. Over one day it sweeps the full latitude circle at that colatitude. This closed circle is the loop $C$ in parameter space.`}
                  </p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">2</span>
                <div className="lrn-step-body">
                  <p>
                    {`Integrate the curvature over the cap the loop bounds. The unit sphere has curvature $1$, so the area integral is just the solid angle of the polar cap: $\\iint_{\\rm cap} 1\\,dA = \\Omega = 2\\pi(1 - \\cos\\theta) = 2\\pi(1 - \\sin\\lambda)$.`}
                  </p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">3</span>
                <div className="lrn-step-body">
                  <p>
                    {`The geometric angle is minus this curvature integral: $\\Delta\\varphi_{\\rm geom} = -\\Omega = -2\\pi(1 - \\sin\\lambda)$. The swing plane's net turn relative to the ground drops the constant $2\\pi$, leaving the precession $-2\\pi\\sin\\lambda$ per day.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="lrn-eq lrn-eq-hero">
              {`$$\\Delta\\varphi_{\\rm Foucault} = -2\\pi\\sin(\\lambda) \\text{ per day}$$`}
            </div>
            <p>
              {`At the North Pole ($\\lambda = 90°$): full rotation in a day. At the equator ($\\lambda = 0°$): no rotation. At Paris ($\\lambda \\approx 49°$): rotation of about $-272°$ per day. The whole calculation was an area integral over parameter space, not a force balance.`}
            </p>

            <FoucaultPrecession />

            <h3>Why the Geometric Angle Appears: Averaging the Fast Angle</h3>
            <p>
              {`The Foucault answer came from an area integral. Here is why that integral is the right thing to compute. During a slow cycle the angle obeys $\\dot\\varphi = \\omega(\\mathbf{I},\\mathbf{R}) + \\varepsilon f(\\mathbf{I},\\boldsymbol\\varphi,\\mathbf{R})$, where $\\mathbf{R}(t)$ are the slowly moving parameters. The action $\\mathbf{I}$ is an adiabatic invariant, so it stays fixed. Average the angle rate over one fast turn at frozen $\\mathbf{R}$.`}
            </p>
            <div className="lrn-eq">
              {`$$\\langle\\dot\\varphi\\rangle = \\omega(\\mathbf{I},\\mathbf{R}) + \\varepsilon\\,\\langle f\\rangle, \\qquad \\langle f\\rangle = \\frac{1}{2\\pi}\\int_0^{2\\pi} f\\,d\\varphi$$`}
            </div>
            <p>
              {`The first term, integrated over the cycle time $T$, is the dynamical phase. It depends on how long you take. The averaged perturbation $\\langle f\\rangle$ carries the slow drift. Because $\\mathbf{R}$ moves, $\\langle f\\rangle$ tracks the rate $\\dot{\\mathbf{R}}$: it has the form $\\langle f\\rangle = -\\Gamma_i(\\mathbf{I},\\mathbf{R})\\,\\dot R^i$ for some coefficients $\\Gamma_i$. Multiplying by $dt$ turns $\\dot R^i\\,dt$ into $dR^i$, so the surviving drift over the loop is a path integral.`}
            </p>

            <h3>The Hannay Connection and Curvature</h3>
            <p>
              {`The angle variable lives on a circle: every value of $\\varphi$ from $0$ to $2\\pi$ is a point on that circle. Attach one such circle to each parameter point $\\mathbf{R}$, and you get a circle bundle over parameter space (a circle stacked above every point). The Hannay connection 1-form $\\Gamma_i(\\mathbf{R})$ is the rule that says how "zero angle" rotates as you step from one parameter point to the next. Integrating it along the loop gives the geometric angle:`}
            </p>
            <div className="lrn-eq lrn-eq-hero">
              {`$$\\Delta\\varphi_{\\rm geom} = -\\oint_C \\Gamma_i(\\mathbf{R})\\,dR^i$$`}
            </div>
            <p>
              {`The connection itself is a cycle average of how the orbit shape twists with the parameters. Writing the orbit in phase space as $(p(\\mathbf{I},\\varphi;\\mathbf{R}),\\,q(\\mathbf{I},\\varphi;\\mathbf{R}))$, the connection is the torus average $\\Gamma_i = \\langle\\,p\\,\\partial q/\\partial R^i\\,\\rangle$ (with a derivative in $\\mathbf{I}$ understood). The exact form is not what you compute by hand. The loop integral is.`}
            </p>

            <h3>Stokes: From Loop to Enclosed Area</h3>
            <p>
              {`A loop integral of a 1-form equals a surface integral of its curl over any surface the loop bounds. This is Stokes' theorem. Apply it to the connection:`}
            </p>
            <div className="lrn-eq lrn-eq-hero">
              {`$$\\Delta\\varphi_{\\rm geom} = -\\oint_C \\Gamma_i\\,dR^i = -\\iint_S (\\partial_i\\Gamma_j - \\partial_j\\Gamma_i)\\,dR^i\\,dR^j$$`}
            </div>
            <p>
              {`The curl $\\partial_i\\Gamma_j - \\partial_j\\Gamma_i$ is the Hannay curvature 2-form: the curl of the connection. It is the same kind of curvature that rotates a parallel-transported vector. For a parameter space that is (or maps onto) a sphere, this curvature is exactly the curvature of the sphere, and its integral over the enclosed cap is the solid angle. That is why Foucault reduced to a solid angle.`}
            </p>

            <h3>The Geometric Phase as Solid Angle</h3>
            <p>
              {`Putting it together: for a classical system whose parameter space is (or maps onto) a sphere, the Hannay angle from a closed loop $C$ equals minus the solid angle $\\Omega(C)$ it encloses:`}
            </p>
            <div className="lrn-eq lrn-eq-hero">
              {`$$\\Delta\\varphi_{\\rm geom} = -\\Omega(C)$$`}
            </div>
            <p>
              {`This is the direct classical analogue of the Berry phase. It is a derivation, not an analogy: the averaging step produced the connection, and Stokes turned its loop integral into the curvature integral that is the solid angle.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Why minus the solid angle, and not the area or the perimeter of the loop? Because the angle that gets dragged around is the curvature integral, and on a sphere the curvature integral is the solid angle.`}
              </p>
              <p>
                {`The minus sign comes from the orientation of the loop: traversing $C$ the other way flips the sign of the enclosed area, and so flips the sign of the angle.`}
              </p>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The Foucault pendulum precession is often explained in terms of the Coriolis force
                in a rotating frame. How does the geometric-phase explanation differ?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The Coriolis explanation works in the rotating frame and computes the force
                  directly in that frame. It gives the same numerical answer but requires choosing a
                  specific frame.
                </p>
                <p>
                  The geometric-phase explanation works in the inertial frame and identifies the
                  precession as the holonomy of a connection on the bundle of pendulum swing planes
                  over the sphere of gravitational directions. It requires no forces at all: just
                  geometry.
                </p>
                <p>
                  The geometric approach reveals that the Foucault result is a special case of a
                  universal principle: any vector adiabatically parallel-transported around a loop
                  on a sphere rotates by the enclosed solid angle.
                </p>
              </details>
            </div>
          </div>
        </>,

        // Section 5: Berry Phase and the Hannay-Berry Relation
        <>
          <div className="lrn-section" id="lrn-section-5" data-section-index="5">
            <h2>Berry Phase and the Hannay-Berry Relation</h2>
            <p>
              The Hannay angle has an exact quantum counterpart discovered by Berry in 1984. The
              deep connection between them shows that geometric phase is not an accident of either
              classical or quantum mechanics. It is a universal feature of adiabatic cycles.
            </p>
            <p>
              <strong>When to use this:</strong> Use the Hannay-Berry relation when you know the
              Berry phase for the quantum version of a system and want to find the Hannay angle for
              the classical version, or vice versa.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`The Berry phase for the $n$-th energy eigenstate after an adiabatic parameter cycle is $\\gamma_n(C)$. If you differentiate this with respect to the quantum number $n$ (or equivalently the action $J = n\\hbar$), what do you get?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`You get the Hannay angle: $\\Delta\\varphi_{\\rm Hannay} = -\\partial\\gamma_n/\\partial n$. The Berry phase decreases with $n$ at rate equal to the classical Hannay angle.`}
                </p>
              </details>
            </div>

            <h3>The Berry Phase</h3>
            <p>
              {`A quantum system sits in an eigenstate $|n(\\mathbf{R})\\rangle$ (a state of definite energy at the frozen parameters $\\mathbf{R}$). Take it slowly around a closed cycle in parameter space, returning to $\\mathbf{R}(0)$ after time $T$. The state picks up a phase factor $e^{i\\gamma_n}$. The geometric part of this phase is:`}
            </p>
            <div className="lrn-eq lrn-eq-hero">
              {`$$\\gamma_n(C) = i\\oint_C \\langle n(\\mathbf{R})|\\nabla_{\\mathbf{R}}|n(\\mathbf{R})\\rangle\\cdot d\\mathbf{R}$$`}
            </div>
            <p>
              {`This is purely geometric: it depends only on the loop $C$ in parameter space, not on how fast the cycle is traversed. The integrand is the Berry connection 1-form. Its curl is the Berry curvature.`}
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Hannay Angle (Classical)</span>
                <p>{`Shift of angle variable $\\varphi$ after adiabatic parameter cycle`}</p>
                <p>Depends only on loop in parameter space</p>
                <p>
                  {`For a sphere: $\\Delta\\varphi_{\\rm Hannay} = -\\Omega$ (minus solid angle)`}
                </p>
                <p>{`Computable from the classical Hannay connection 1-form on parameter space`}</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Berry Phase (Quantum)</span>
                <p>
                  {`Phase factor $e^{i\\gamma_n}$ acquired by $n$-th eigenstate after adiabatic cycle`}
                </p>
                <p>Depends only on loop in parameter space</p>
                <p>{`For a spin-$\\frac{1}{2}$ in a rotating field: $\\gamma = -\\Omega/2$`}</p>
                <p>Berry connection integrates curvature of the eigenstate bundle over the loop</p>
              </div>
            </div>

            <h3>The Hannay-Berry Relation</h3>
            <p>
              {`Berry (1985) showed that the Hannay angle and Berry phase are related by differentiation with respect to the classical action $J$:`}
            </p>
            <div className="lrn-eq lrn-eq-hero">
              {`$$\\Delta\\theta_{\\rm Hannay} = -\\frac{\\partial\\gamma_{\\rm Berry}}{\\partial J}$$`}
            </div>
            <p>
              {`In the semiclassical limit $\\hbar \\to 0$, the Berry phase for the $n$-th state is $\\gamma_n \\approx n\\,\\Delta\\theta_{\\rm Hannay}$ because $n = J/\\hbar$. So the Hannay angle is not merely an analogy to the Berry phase: it is derivable from it, exact to leading order in $\\hbar$. The classical geometric phase is the leading-order semiclassical limit of the quantum Berry phase.`}
            </p>

            <h3>Worked Example: Spin in a Slowly Rotating Field</h3>
            <p>
              {`A magnetic moment sits in a field whose direction is slowly swept around a cone. The cone traces a loop $C$ on the unit sphere of field directions, enclosing solid angle $\\Omega$. Find the classical Hannay angle from the known Berry phase.`}
            </p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-num">1</span>
                <div className="lrn-step-body">
                  <p>
                    {`The Berry phase for spin $s$ is $\\gamma_s = -s\\,\\Omega$. Write it in terms of the action using $J = s\\hbar$, so $s = J/\\hbar$. Then $\\gamma = -(J/\\hbar)\\,\\Omega$.`}
                  </p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">2</span>
                <div className="lrn-step-body">
                  <p>
                    {`Apply the Hannay-Berry relation: $\\Delta\\theta_{\\rm Hannay} = -\\frac{\\partial\\gamma}{\\partial J} = -\\frac{\\partial}{\\partial J}\\left(-\\frac{J\\Omega}{\\hbar}\\right) = \\frac{\\Omega}{\\hbar}$.`}
                  </p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">3</span>
                <div className="lrn-step-body">
                  <p>
                    {`Measuring the angle in units where one quantum carries action $\\hbar$, the angle shift per quantum is $\\Omega$. The classical magnetic moment precesses by the enclosed solid angle, matching the general result $\\Delta\\varphi_{\\rm geom} = -\\Omega$ up to the sign convention for loop orientation.`}
                  </p>
                </div>
              </div>
            </div>

            <h3>The Complete Picture</h3>
            <ol className="lrn-list">
              <li>
                {`Integrable systems live on invariant tori. Actions $\\mathbf{I}$ label the torus; angles $\\boldsymbol{\\varphi}$ advance at constant rates.`}
              </li>
              <li>
                {`Under a slow parameter change, the action is an adiabatic invariant: it stays fixed.`}
              </li>
              <li>
                {`Averaging the angle rate over the fast cycle leaves a connection 1-form on parameter space.`}
              </li>
              <li>
                {`Its loop integral, converted by Stokes into a curvature integral, is the Hannay angle $-\\Omega(C)$.`}
              </li>
              <li>
                {`The classical Hannay angle is the semiclassical limit of the quantum Berry phase: $\\Delta\\theta_{\\rm Hannay} = -\\partial\\gamma_{\\rm Berry}/\\partial J$.`}
              </li>
            </ol>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The Hannay-Berry relation follows from the semiclassical quantization condition: $J = n\\hbar$. In the semiclassical limit, the Berry phase for state $n$ is $\\gamma_n = n\\,\\Delta\\theta_{\\rm H} + O(\\hbar)$ because the phase accumulated by the $n$-th state is $n$ times the single-quantum geometric phase.`}
              </p>
              <p>
                {`Differentiating: $\\partial\\gamma_n/\\partial n = \\Delta\\theta_{\\rm H}$, giving $\\Delta\\theta_{\\rm H} = -\\partial\\gamma_{\\rm Berry}/\\partial J$ exactly. Geometric phase is not a quantum phenomenon: it is a feature of any system with a bundle structure over a parameter space.`}
              </p>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`The adiabatic series is asymptotic, not convergent. It approximates the true trajectory to $O(e^{-b/\\varepsilon})$. How does this relate to Arnold diffusion?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`An asymptotic series gives exponentially small errors term by term. In systems with one degree of freedom, these exponentially small corrections never accumulate: the action is conserved to $O(e^{-b/\\varepsilon})$ for all finite time.`}
                </p>
                <p>
                  {`In systems with three or more degrees of freedom, the resonant layers form a connected network called the Arnold web. A trajectory can slowly drift along these resonant channels. Over times $t \\gg e^{b/\\varepsilon}$, the action variables can change by $O(1)$. This is Arnold diffusion: an exponentially slow but real breakdown of adiabatic invariance.`}
                </p>
              </details>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Define what it means for $I(p,q;\\lambda)$ to be an adiabatic invariant. How does this differ from being a first integral?`,
        a: `$I$ is an adiabatic invariant if for every $\\kappa>0$ there exists $\\varepsilon_0>0$ such that $0<\\varepsilon<\\varepsilon_0$ and $0<t<1/\\varepsilon$ implies $|I(p(t),q(t);\\varepsilon t)-I(p(0),q(0);0)|<\\kappa$. This is approximate conservation for slowly varying parameters over finite time. A first integral satisfies $dI/dt=0$ exactly for all time when the Hamiltonian is fixed. An adiabatic invariant can be destroyed by resonances; a first integral cannot.`
      },
      {
        q: `For a harmonic oscillator with slowly varying frequency $\\omega(\\tau)$: if $\\omega$ doubles, what happens to the energy and the amplitude?`,
        a: `The adiabatic invariant is $I = E/\\omega$. When $\\omega$ doubles and $I$ is conserved, $E = I\\omega$ also doubles. For the amplitude: $E = \\frac{1}{2}m\\omega^2 A^2$, so $A^2 = \\frac{2E}{m\\omega^2}$. With $E \\to 2E$ and $\\omega^2 \\to 4\\omega^2$: $A^2 \\to \\frac{4E}{4m\\omega^2} = \\frac{E}{m\\omega^2} = A^2/2$. The amplitude decreases by $\\frac{1}{\\sqrt{2}}$.`
      },
      {
        q: `An elastic ball of speed $v$ bounces between walls separated by $l$. The walls slowly move to separation $l/3$. What is the new speed?`,
        a: `The adiabatic invariant is $vl = \\text{const}$ (the phase rectangle has area $2vl$). When $l \\to l/3$: $v_{\\rm new} = v\\cdot l/(l/3) = 3v$. The speed triples. Kinetic energy $E = \\frac{1}{2}v^2 \\to \\frac{1}{2}(3v)^2 = 9\\cdot\\frac{1}{2}v^2$ increases ninefold.`
      },
      {
        q: `A pendulum of length $l_0$ is slowly shortened to $l_1 = l_0/16$. By what factor does the angular amplitude change?`,
        a: `The formula is $q_{\\rm max}(t) = q_{\\rm max}(0)(l_0/l(t))^{3/4}$. With $l_1 = l_0/16$: $q_{\\rm max,1} = q_{\\rm max,0}\\cdot(16)^{3/4} = q_{\\rm max,0}\\cdot 2^{4\\cdot 3/4} = q_{\\rm max,0}\\cdot 2^3 = 8q_{\\rm max,0}$. The angular amplitude multiplies by 8. The exponent $3/4$ comes from $\\omega \\propto l^{-1/2}$ and $E = I\\omega \\propto l^{-1/2}$: amplitude $\\propto (E/\\omega^2)^{1/2} \\propto l^{1/4}$, but relative to $l_0$ gives the factor $(l_0/l)^{3/4}$.`
      },
      {
        q: `A vector is parallel-transported around a small loop on a sphere of radius $R$ that encloses surface area $\\Delta A$. By how much does the vector rotate?`,
        a: `The rotation angle equals the integral of curvature over the enclosed area: $\\Delta\\alpha = K\\cdot\\Delta A = \\frac{1}{R^2}\\cdot\\Delta A$. This is the solid angle $\\Omega = \\Delta A/R^2$ in steradians. For a flat surface ($K=0$), $\\Delta\\alpha = 0$: no holonomy. The key principle: curvature measures the failure of parallel transport to be trivial around loops.`
      },
      {
        q: `Why does parallel transport around a loop on a cone produce no rotation, even though the cone looks curved?`,
        a: `Curvature is an intrinsic property. The cone can be unrolled into a flat sheet without stretching or tearing: it is locally isometric to a plane. Its Gaussian curvature is zero everywhere (except at the tip). Since $\\Delta\\alpha = \\iint K\\,dA = 0$ for loops not enclosing the tip, parallel transport produces no holonomy. The sphere cannot be unrolled without distortion, which is why it has nonzero curvature and real holonomy.`
      },
      {
        q: `Transfer: A laser beam travels through a helical optical fiber. The polarization direction undergoes parallel transport along the helix. Does the polarization rotate after one full helical turn?`,
        a: `Yes, but the rotation is not from the cylinder's curvature (which is zero). The relevant parameter space is the sphere of propagation directions. As the light follows one full turn of the helix, its propagation direction traces a closed circle on this sphere. The Berry phase (Rytov-Vladimirsky effect) gives a polarization rotation equal to the solid angle enclosed by that circle. This geometric phase depends only on the helix path in direction space, not on the cylinder itself.`
      },
      {
        q: `What are the two contributions to the total angle advance after an adiabatic parameter cycle? Which depends on the rate of cycling?`,
        a: `The total angle advance is $\\Delta\\varphi_{\\rm total} = \\Delta\\varphi_{\\rm dyn} + \\Delta\\varphi_{\\rm geom}$. The dynamical phase $\\Delta\\varphi_{\\rm dyn} = \\int_0^T \\omega(\\mathbf{I},\\lambda(t))\\,dt$ depends on the rate of cycling: it grows with $T$, so going slower gives a larger dynamical phase. The geometric phase (Hannay angle) $\\Delta\\varphi_{\\rm geom}$ depends only on the loop in parameter space, not on the cycling rate.`
      },
      {
        q: `A Foucault pendulum at latitude $60°$ North completes one full day. What is the precession of the swing plane?`,
        a: `The precession per day is $\\Delta\\varphi = -2\\pi\\sin(\\lambda)$ where $\\lambda = 60°$. So $\\Delta\\varphi = -2\\pi\\sin(60°) = -2\\pi\\cdot\\frac{\\sqrt{3}}{2} = -\\pi\\sqrt{3} \\approx -5.44$ radians $\\approx -312°$. The swing plane rotates clockwise by about $312°$ in one day (when viewed from above in the Northern Hemisphere).`
      },
      {
        q: `Predict: A pendulum at the North Pole and one at latitude $30°$ both run for 24 hours. Compare their precession angles.`,
        a: `At the North Pole ($\\lambda = 90°$): $\\Delta\\varphi = -2\\pi\\sin(90°) = -2\\pi$, a full rotation. At latitude $30°$: $\\Delta\\varphi = -2\\pi\\sin(30°) = -2\\pi\\cdot\\frac{1}{2} = -\\pi$, a half rotation ($180°$). The pole pendulum rotates twice as far. The ratio $\\sin(90°)/\\sin(30°) = 1/(1/2) = 2$.`
      },
      {
        q: `For a loop at the equator on the sphere of gravitational directions, what solid angle is enclosed? What is the Foucault precession?`,
        a: `The equator is a latitude circle at colatitude $\\theta = 90°$. The solid angle of the polar cap is $\\Omega = 2\\pi(1-\\cos(90°)) = 2\\pi(1-0) = 2\\pi$. The geometric phase is $\\Delta\\varphi_{\\rm geom} = -2\\pi$, a full $2\\pi$ rotation equivalent to no rotation. Consistently, $\\sin(\\lambda = 0°) = 0$: no Foucault precession at the equator.`
      },
      {
        q: `State the Berry phase formula and explain each symbol. When is this phase nonzero?`,
        a: `$\\gamma_n(C) = i\\oint_C \\langle n(\\mathbf{R})|\\nabla_{\\mathbf{R}}|n(\\mathbf{R})\\rangle\\cdot d\\mathbf{R}$. Here $|n(\\mathbf{R})\\rangle$ is the $n$-th instantaneous eigenstate at parameter $\\mathbf{R}$; $\\nabla_{\\mathbf{R}}$ is the gradient in parameter space; $C$ is the closed loop. The integrand is the Berry connection 1-form. The phase is nonzero when the loop encloses a region of nonzero Berry curvature, which happens when the eigenstate bundle over the loop cannot be smoothly given a single fixed phase everywhere at once (it cannot be globally trivialized).`
      },
      {
        q: `State the Hannay-Berry relation. Derive it from the semiclassical quantization $J = n\\hbar$.`,
        a: `The relation is $\\Delta\\theta_{\\rm Hannay} = -\\partial\\gamma_{\\rm Berry}/\\partial J$. Derivation: in the semiclassical limit, the Berry phase for state $n$ is $\\gamma_n \\approx n\\,\\Delta\\theta_{\\rm Hannay}$ (each quantum of action contributes one classical geometric phase). With $J = n\\hbar$: $\\partial\\gamma_n/\\partial J = (\\partial\\gamma_n/\\partial n)/\\hbar = \\Delta\\theta_{\\rm Hannay}/\\hbar$. Therefore $\\Delta\\theta_{\\rm Hannay} = -\\hbar\\cdot(-\\Delta\\theta_{\\rm Hannay}/\\hbar) = -\\partial\\gamma_{\\rm Berry}/\\partial J$. Classical geometric phase is the leading-order semiclassical limit of quantum Berry phase.`
      },
      {
        q: `Elaborate: The Hannay angle is said to be purely geometric. What exactly makes it geometric and not dynamic?`,
        a: `A quantity is geometric if it depends only on the path traced in parameter space, not on the speed at which the path is traversed. The Hannay angle can be written as $\\oint_C \\Gamma_i(\\mathbf{R})\\,dR^i$ where $\\Gamma_i$ is the Hannay connection 1-form on parameter space. This integral depends only on which points are visited and in what order. You can reparametrize the loop by any monotone time function and get the same answer. The dynamical phase $\\int_0^T\\omega\\,dt$ grows with $T$: it is dynamic. The Hannay angle does not change as $T$ changes: it is geometric.`
      },
      {
        q: `Self-explain: For a spin-$\\frac{1}{2}$ particle in a rotating field, the Berry phase is $\\gamma = -\\Omega/2$ where $\\Omega$ is the solid angle. Use the Hannay-Berry relation to find the classical Hannay angle.`,
        a: `Write the Berry phase for general spin: $\\gamma_s = -s\\Omega$, so the given $-\\frac{\\Omega}{2}$ is just the $s = \\frac{1}{2}$ case. The Hannay-Berry relation differentiates with respect to the action in units of $\\hbar$, which is the quantum number $s$: $\\Delta\\theta_{\\rm Hannay} = -\\frac{\\partial\\gamma_s}{\\partial s} = -\\frac{\\partial(-s\\Omega)}{\\partial s} = \\Omega$. So the classical Hannay angle is the full solid angle $\\Omega$, with sign set by the loop orientation, matching the general result $|\\Delta\\varphi_{\\rm geom}| = \\Omega$. The factor $\\frac{1}{2}$ fixes the value of $\\gamma$ but not its slope in $s$, so it disappears in the classical large-spin limit.`
      },
      {
        q: `Why does averaging the angle equation $\\dot\\varphi = \\omega + \\varepsilon f$ over the fast cycle leave a geometric piece, and how does Stokes turn it into the solid angle?`,
        a: `Split the cycle-averaged $\\langle f\\rangle$ into a part that integrates over one full loop in parameter space and a part that does not. The first part adds to the dynamical phase. The leftover is a 1-form $\\Gamma_i(\\mathbf{R})$ summed along the path: $\\Delta\\varphi_{\\rm geom} = -\\oint_C \\Gamma_i\\,dR^i$. This depends only on the loop, not on the cycling rate, so it is geometric. Stokes converts the loop integral into a surface integral of the curl: $-\\iint_S(\\partial_i\\Gamma_j - \\partial_j\\Gamma_i)\\,dR^i\\,dR^j$. For a spherical parameter space that curl is the curvature, and its integral over the enclosed cap is the solid angle $\\Omega(C)$. So $\\Delta\\varphi_{\\rm geom} = -\\Omega(C)$.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Classical Geometric Phase and the Hannay Angle',
      sections: [
        <>
          <div className="ref">
            <h2>Action-Angle Variables and Averaging</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">Action variable</div>
              <div className="ref-formula-eq">{`$$I_i = \\frac{1}{2\\pi}\\oint p_i\\,dq_i$$`}</div>
              <div className="ref-formula-desc">
                When to use: to define the adiabatic invariant for any bounded oscillating system.
                Equals the phase-space area enclosed per radian.
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Action-angle equations of motion</div>
              <div className="ref-formula-eq">{`$$\\dot{\\mathbf{I}} = 0, \\qquad \\dot{\\boldsymbol{\\varphi}} = \\boldsymbol{\\omega}(\\mathbf{I}) = \\frac{\\partial H}{\\partial\\mathbf{I}}$$`}</div>
              <div className="ref-formula-desc">
                When to use: in integrable systems with fixed parameters. Actions are exact first
                integrals; angles advance at constant rates.
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Theorem on averaging bound</div>
              <div className="ref-formula-eq">{`$$|\\mathbf{I}(t) - \\mathbf{J}(t)| < c_9\\varepsilon \\quad \\text{for } 0 \\le t \\le \\frac{1}{\\varepsilon}$$`}</div>
              <div className="ref-formula-desc">
                {`When to use: to bound how far the true perturbed trajectory deviates from the averaged trajectory. The near-identity substitution $\\mathbf{P} = \\mathbf{I} + \\varepsilon\\mathbf{k}$ reduces the problem to Gronwall's lemma.`}
              </div>
            </div>

            <h2>Adiabatic Invariance</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">Adiabatic invariant (hero formula)</div>
              <div className="ref-formula-eq">{`$$I = \\frac{1}{2\\pi}\\oint p\\,dq = \\frac{E}{\\omega} \\quad (\\text{harmonic oscillator})$$`}</div>
              <div className="ref-formula-desc">
                {`When to use: whenever a parameter changes slowly. The action $I$ stays constant to $O(\\varepsilon)$ on timescale $1/\\varepsilon$.`}
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Slowly varied pendulum amplitude</div>
              <div className="ref-formula-eq">{`$$q_{\\rm max}(t) = q_{\\rm max}(0)\\left(\\frac{l(0)}{l(t)}\\right)^{3/4}$$`}</div>
              <div className="ref-formula-desc">
                {`When to use: for a pendulum with slowly varying length $l(t)$.`}
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Elastic ball between walls</div>
              <div className="ref-formula-eq">{`$$vl = \\text{const}$$`}</div>
              <div className="ref-formula-desc">
                {`When to use: ball of speed $v$ bouncing between walls of separation $l$ that change slowly. If $l$ halves, $v$ doubles.`}
              </div>
            </div>

            <h2>Parallel Transport and Curvature</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">Solid angle for polar cap (hero formula)</div>
              <div className="ref-formula-eq">{`$$\\Omega = 2\\pi(1-\\cos\\theta)$$`}</div>
              <div className="ref-formula-desc">
                {`When to use: for a loop on a sphere at colatitude $\\theta$. A vector parallel-transported around this loop rotates by $\\Omega$. A sphere has curvature $K = R^{-2}$; a plane, cone, and cylinder have $K = 0$ and give no rotation.`}
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Hannay connection and curvature (hero formula)</div>
              <div className="ref-formula-eq">{`$$\\Delta\\varphi_{\\rm geom} = -\\oint_C \\Gamma_i\\,dR^i = -\\iint_S (\\partial_i\\Gamma_j - \\partial_j\\Gamma_i)\\,dR^i\\,dR^j$$`}</div>
              <div className="ref-formula-desc">
                {`When to use: to turn a loop integral of the Hannay connection 1-form $\\Gamma_i$ into a surface integral of its curl (the Hannay curvature 2-form). For a spherical parameter space the curvature integral is the solid angle.`}
              </div>
            </div>

            <h2>Classical Geometric Phase</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">Total angle advance after adiabatic cycle</div>
              <div className="ref-formula-eq">{`$$\\Delta\\varphi_{\\rm total} = \\int_0^T\\omega(\\mathbf{I},\\lambda)\\,dt + \\Delta\\varphi_{\\rm geom}$$`}</div>
              <div className="ref-formula-desc">
                When to use: after any adiabatic parameter cycle. Dynamical phase depends on cycling
                rate; geometric (Hannay) phase depends only on the loop.
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">
                Geometric phase equals minus solid angle (hero formula)
              </div>
              <div className="ref-formula-eq">{`$$\\Delta\\varphi_{\\rm geom} = -\\Omega(C)$$`}</div>
              <div className="ref-formula-desc">
                {`When to use: for any system whose parameter space is (or maps to) a sphere, and the loop $C$ encloses solid angle $\\Omega$.`}
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Foucault pendulum precession (hero formula)</div>
              <div className="ref-formula-eq">{`$$\\Delta\\varphi_{\\rm Foucault} = -2\\pi\\sin(\\lambda) \\text{ per day}$$`}</div>
              <div className="ref-formula-desc">
                {`When to use: daily precession of a Foucault pendulum at geographic latitude $\\lambda$. North Pole ($\\lambda = 90^\\circ$): full rotation. Equator ($\\lambda = 0^\\circ$): none.`}
              </div>
            </div>

            <h2>Berry Phase and Hannay-Berry Relation</h2>

            <div className="ref-formula">
              <div className="ref-formula-name">Berry phase</div>
              <div className="ref-formula-eq">{`$$\\gamma_n(C) = i\\oint_C \\langle n(\\mathbf{R})|\\nabla_{\\mathbf{R}}|n(\\mathbf{R})\\rangle\\cdot d\\mathbf{R}$$`}</div>
              <div className="ref-formula-desc">
                {`When to use: quantum adiabatic phase for $n$-th eigenstate after closed parameter loop $C$. Purely geometric: independent of cycling rate.`}
              </div>
            </div>

            <div className="ref-formula">
              <div className="ref-formula-name">Hannay-Berry relation (hero formula)</div>
              <div className="ref-formula-eq">{`$$\\Delta\\theta_{\\rm Hannay} = -\\frac{\\partial\\gamma_{\\rm Berry}}{\\partial J}$$`}</div>
              <div className="ref-formula-desc">
                {`When to use: to convert between classical Hannay angle and quantum Berry phase. In the semiclassical limit: $\\gamma_n \\approx n\\,\\Delta\\theta_{\\rm Hannay}$.`}
              </div>
            </div>
          </div>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }

  return <LearningTemplate config={config} />
}
