import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  SgPendulumChain,
  SgKink,
  SgPotentialVacua,
  SgKinkAntikink,
  SgBreather,
  SgCnoidalWave,
  SineGordonCollision
} from '../../../../../components/viz'

export default function SineGordon() {
  const config = {
    cssPrefix: 'sg',
    documentTitle: 'Sine-Gordon Equation and Solitons - AETHER',
    learning: {
      groupTitle: 'Continuum and Field-Theoretic Mechanics',
      category: 'Module 6',
      title: 'Sine-Gordon Equation and Solitons',
      subtitle:
        'A nonlinear wave equation whose exact solutions are topological kinks, antikinks, and breathers that pass through each other unchanged.',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0">
            <h2>The Physical Anchor: A Chain of Pendula</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Picture a long rod with many pendula attached, all coupled by torsion springs. You
                grab one end and twist it through a full turn. Will that twist travel down the rod
                without spreading out, the way a water wave disperses?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Yes, it does. Dispersing means spreading out, the way ripples on a pond flatten as
                  they travel. Here gravity (which wants each pendulum to hang straight down) and
                  the coupling force (which pulls neighbors into line) balance each other. That
                  balance lets a sharp twist travel without spreading. The twist is a soliton: a
                  solitary wave that keeps its shape. This is the physical content of the
                  sine-Gordon kink.
                </p>
              </details>
            </div>
            <p>
              Take {`$N$`} identical pendula mounted on a common shaft, each free to rotate, and
              join adjacent pairs by torsion springs. Let {`$y_i(t)$`} be the angle of pendulum{' '}
              {`$i$`} from vertical. The equation of motion is
            </p>
            <div className="lrn-eq">
              <span>{`$$\\ddot{y}_i = \\frac{y_{i+1} - 2y_i + y_{i-1}}{(\\Delta x)^2} - \\sin y_i$$`}</span>
            </div>
            <p>
              The first term is the nearest-neighbor spring coupling. It is a second difference, so
              it carries the {`$(\\Delta x)^2$`} spacing. The second term is the gravitational
              restoring force. We pick units that set the coupling constant to one.
            </p>
            <p>
              Now take the continuum limit: let the spacing {`$\\Delta x \\to 0$`} and
              {`$N \\to \\infty$`}, keeping total length {`$L$`} fixed. (The continuum limit
              replaces the discrete chain by a smooth field.) The finite-difference term becomes a
              second spatial derivative, as the wave-equation page already showed. You get
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$y_{tt} - y_{xx} + \\sin y = 0$$`}</span>
            </div>
            <p>
              This is the sine-Gordon equation in laboratory coordinates. The field {`$y(x,t)$`}
              gives the pendulum angle at position {`$x$`} and time {`$t$`}. The combination
              {`$y_{tt} - y_{xx}$`} is the wave operator (the d'Alembertian) you met for the
              ordinary wave equation. The new piece is the {`$\\sin y$`} term, which makes the
              equation nonlinear: doubling the input does not double the output. Use this equation
              whenever a one-dimensional system combines wave travel with a periodic restoring
              force.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The new physics is the {`$\\sin y$`} term, not the coupling. It comes straight from
                pendulum physics: the restoring torque on a unit pendulum is {`$-\\sin y$`}. The
                continuum limit of the spring term is the standard second-derivative limit covered
                on the wave-equation page. Putting the two together is exact: nothing is thrown
                away.
              </p>
            </div>
            <SgPendulumChain />
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The diagram shows a pendulum chain with pendula near the center twisted through a
                large angle. What happens to pendula far from the center, and why does this
                represent two different vacuum states?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Far to the left, all pendula hang straight down: field {`$y = 0$`}. Far to the
                  right, all are twisted through {`$2\\pi$`}: field {`$y = 2\\pi$`}. Both are
                  equilibria because {`$\\sin(0) = \\sin(2\\pi) = 0$`}.
                </p>
                <p>
                  A vacuum state is just a lowest-energy rest configuration, where every pendulum
                  sits at a potential minimum. These are two distinct vacua of the potential
                  {`$V(y) = 1 - \\cos y$`}. The kink connects them smoothly. You cannot remove this
                  connection continuously without either moving one end or passing through an
                  infinite-energy configuration where some pendulum points straight up.
                </p>
              </details>
            </div>
            <h3>Two Standard Forms of the Equation</h3>
            <p>The sine-Gordon equation appears in two standard forms. The laboratory form is</p>
            <div className="lrn-eq">
              <span>{`$$u_{xx} - \\alpha^2 u_{tt} = \\sin u$$`}</span>
            </div>
            <p>
              The constant {`$\\alpha$`} is the inverse wave speed set by your choice of lab units:
              the signal speed is {`$1/\\alpha$`}. Pick units with {`$\\alpha = 1$`} and you recover
              the unit-speed form {`$u_{xx} - u_{tt} = \\sin u$`}. The characteristic form uses
              light-cone coordinates {`$\\xi = \\frac{1}{2}(x - t/\\alpha)$`} and
              {`$\\eta = \\frac{1}{2}(x + t/\\alpha)$`}:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$u_{\\xi\\eta} = \\sin u$$`}</span>
            </div>
            <p>
              Both forms carry the same physics. The characteristic form is the better starting
              point for the exact solution method covered later, because its single mixed derivative
              is simpler to work with.
            </p>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Laboratory form</span>
                <p>
                  {`$u_{xx} - \\alpha^2 u_{tt} = \\sin u$`}. Wave speed and restoring force are
                  explicit. Use for physical interpretation and Lorentz analysis.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Characteristic form</span>
                <p>
                  {`$u_{xt} = \\sin u$`}. Mixes one {`$x$`}-derivative and one {`$t$`}-derivative.
                  Use for the exact solution methods covered later.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1">
            <h2>The Kink: A Topological Soliton</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The sine-Gordon potential is {`$V(u) = 1 - \\cos u$`}, with minima at
                {`$0, 2\\pi, 4\\pi, \\ldots$`}. If a solution has {`$u = 0$`} at
                {`$x = -\\infty$`} and {`$u = 2\\pi$`} at {`$x = +\\infty$`}, can you continuously
                deform it to the flat solution {`$u = 0$`} everywhere?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  No. Any continuous deformation must pass through a configuration where the field
                  climbs over the potential barrier at some point. The boundary conditions lock in a
                  topological charge that no smooth, finite-energy motion can change. This is what
                  makes the kink stable.
                </p>
              </details>
            </div>
            <p>
              A soliton is a solitary wave that keeps its shape as it travels. The simplest
              sine-Gordon soliton is the kink: a single twist of the pendulum chain that moves
              without spreading. The constant {`$\\mu$`} just sets where the twist sits at
              {`$t = 0$`}. The exact one-kink solution is
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$u(x,t) = 4\\arctan\\!\\left(c\\, e^{\\lambda x + t/\\lambda}\\right), \\quad c = -e^\\mu, \\quad \\lambda > 0$$`}</span>
            </div>
            <p>
              As {`$x \\to -\\infty$`}, the argument of {`$\\arctan$`} goes to zero and
              {`$u \\to 0$`}. As {`$x \\to +\\infty$`}, the argument goes to {`$+\\infty$`}
              and {`$\\arctan \\to \\pi/2$`}, so {`$u \\to 2\\pi$`}. The field rises smoothly and
              never turns back: one complete twist of the pendulum chain.
            </p>
            <div className="lrn-insight">
              <span className="lrn-insight-label">Key Fact</span>
              <p>
                The topological charge counts how many full twists the field makes from one end of
                the line to the other:
                {`$Q = (u(+\\infty) - u(-\\infty))/(2\\pi) = 1$`}. It is always a whole number, and
                it stays fixed under any smooth evolution. It cannot change unless the gradient
                energy blows up.
              </p>
            </div>
            <SgPotentialVacua />
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The potential {`$V(u) = 1 - \\cos u$`} has minima at all multiples of
                {`$2\\pi$`}. The total energy of the field is
                {`$E = \\int [\\frac{1}{2}u_t^2 + \\frac{1}{2}u_x^2 + 1 - \\cos u]\\, dx$`}. For the
                kink to decay to zero, the field must run smoothly from {`$0$`} to {`$2\\pi$`} while
                staying near the bottom of the potential. That is impossible for a smooth field: at
                some point it must climb over a barrier of height 2. In an infinite chain that costs
                infinite energy, so the charge cannot be removed.
              </p>
            </div>
            <h3>The Kink Energy and the Bogomolny Bound</h3>
            <p>
              How much energy does one static kink hold? For a kink that does not move,
              {`$u_t = 0$`}, so only the slope and potential terms survive. There is a slick way to
              read off the answer called the Bogomolny trick: complete the square inside the
              integral.
            </p>
            <div className="lrn-eq">
              <span>{`$$E = \\int \\left[\\tfrac{1}{2}\\left(u_x - \\sqrt{2(1-\\cos u)}\\right)^2 + u_x\\sqrt{2(1-\\cos u)}\\right] dx$$`}</span>
            </div>
            <p>
              The squared term is never negative, so the energy is at least the second term. That
              gives a lower bound:
            </p>
            <div className="lrn-eq">
              <span>{`$$E \\ge \\int u_x\\sqrt{2(1-\\cos u)}\\, dx = \\int_0^{2\\pi} 2\\sin\\!\\tfrac{u}{2}\\, du = \\Bigl[-4\\cos\\tfrac{u}{2}\\Bigr]_0^{2\\pi} = 8.$$`}</span>
            </div>
            <p>
              Here we used {`$\\sqrt{2(1-\\cos u)} = 2\\sin(u/2)$`} and changed the integration
              variable from {`$x$`} to {`$u$`}. The bound depends only on the endpoints {`$0$`} and
              {`$2\\pi$`}, not on the detailed shape: that is the topological part. The kink
              saturates the bound (the squared term vanishes when {`$u_x = \\sqrt{2(1-\\cos u)}$`}),
              so its rest energy is exactly {`$E_{\\text{kink}} = 8$`}. No smooth field connecting
              the same two vacua can have less energy.
            </p>
            <h3>The Antikink</h3>
            <p>
              Setting {`$\\lambda < 0$`} gives the antikink: the field runs from {`$2\\pi$`}
              at {`$x = -\\infty$`} to {`$0$`} at {`$x = +\\infty$`}. Its topological charge is{' '}
              {`$Q = -1$`}.
            </p>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Kink ({`$\\lambda > 0$`})</span>
                <p>
                  Field rises {`$0 \\to 2\\pi$`}. Charge {`$Q = +1$`}. Pendulum chain twists
                  forward.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Antikink ({`$\\lambda < 0$`})</span>
                <p>
                  Field falls {`$2\\pi \\to 0$`}. Charge {`$Q = -1$`}. Pendulum chain untwists.
                  Opposite rotation direction.
                </p>
              </div>
            </div>
            <SgKinkAntikink />
            <SgKink />
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                The velocity slider shows faster kinks are narrower. Why does the kink undergo
                Lorentz contraction? What role does {`$\\gamma = 1/\\sqrt{1-v^2}$`} play?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Lorentz-invariant means the equation looks the same to a moving observer, the way
                  the laws of relativity do. The wave operator {`$\\partial_x^2 - \\partial_t^2$`}
                  stays unchanged under the boost {`$x \\to \\gamma(x - vt)$`},
                  {`$t \\to \\gamma(t - vx)$`}, and {`$\\sin u$`} does not involve derivatives, so
                  the whole equation {`$u_{xx} - u_{tt} = \\sin u$`} keeps its form. A stationary
                  kink boosted to velocity {`$v$`} becomes {`$u = 4\\arctan(e^{\\gamma(x-vt)})$`}.
                  The spatial profile compresses by factor {`$\\gamma$`}, exactly like a
                  relativistic rod.
                </p>
                <p>
                  The wave speed in sine-Gordon plays the role of the speed of light. The kink obeys
                  the same Lorentz kinematics as a relativistic particle.
                </p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-2">
            <h2>Multi-Soliton Solutions</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Two KdV solitons collide and pass through each other with only a phase shift. Do you
                expect sine-Gordon kinks to behave the same way, or does the topological charge
                change the collision outcome?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  They also pass through. Two kinks emerge with the same shapes and speeds as
                  before. Only the positions shift. The topological charge of each kink is
                  individually conserved, which forces both kinks to re-emerge rather than
                  annihilate. The collision is elastic.
                </p>
              </details>
            </div>
            <p>The exact two-soliton solution is</p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$u(x,t) = 4\\arctan\\!\\left\\{\\frac{\\lambda_1+\\lambda_2}{\\lambda_1-\\lambda_2}\\cdot\\frac{e^{\\theta_1}-e^{\\theta_2}}{1+e^{\\theta_1+\\theta_2}}\\right\\}$$`}</span>
            </div>
            <p>
              where {`$\\theta_n = \\lambda_n x + t/\\lambda_n + \\mu_n$`}. The phases {`$\\mu_n$`}
              set the initial positions. To get any number of kinks, you build them all from one
              object called the kernel {`$f(X;t)$`}. It is a single function that packs in every
              soliton's eigenvalue and phase. Its argument {`$X$`} is a shifted position variable
              used inside the inversion step (Section 4). The {`$N$`}-soliton kernel is
            </p>
            <div className="lrn-eq">
              <span>{`$$f(X;t) = -\\sum_{n=1}^N \\lambda_n e^{-(\\lambda_n X/2 + t/\\lambda_n + \\mu_n)}$$`}</span>
            </div>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Soliton Zoo</span>
              <div className="lrn-definition-desc">
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Solution</th>
                        <th>Parameters</th>
                        <th>Charge Q</th>
                        <th>Behavior</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kink</td>
                        <td>{`$\\lambda > 0$`}</td>
                        <td>+1</td>
                        <td>Steady translation, {`$0 \\to 2\\pi$`}</td>
                      </tr>
                      <tr>
                        <td>Antikink</td>
                        <td>{`$\\lambda < 0$`}</td>
                        <td>-1</td>
                        <td>Steady translation, {`$2\\pi \\to 0$`}</td>
                      </tr>
                      <tr>
                        <td>Breather</td>
                        <td>{`$\\lambda_2 = \\lambda_1^*$`}</td>
                        <td>0</td>
                        <td>Localized, time-periodic oscillation</td>
                      </tr>
                      <tr>
                        <td>Kink-kink</td>
                        <td>{`$\\lambda_1, \\lambda_2 > 0$`}</td>
                        <td>+2</td>
                        <td>Pass through, repel, phase shift</td>
                      </tr>
                      <tr>
                        <td>Kink-antikink</td>
                        <td>{`$\\lambda_1 > 0, \\lambda_2 < 0$`}</td>
                        <td>0</td>
                        <td>Pass through or bind as breather</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Elastic collisions come from complete integrability. A system is completely
                integrable when it has as many independent conserved quantities as it has degrees of
                freedom, here infinitely many. Each soliton carries a fixed set of values of these
                quantities. A collision must keep every one of them, so each soliton has to come out
                with the same amplitude and speed it went in with.
              </p>
              <p>
                For sine-Gordon there is one extra lock. Each kink's topological charge is conserved
                on its own. Two colliding kinks cannot merge or vanish: both must re-emerge. Only
                their positions shift, by an amount the two-soliton formula gives exactly.
              </p>
            </div>
            <SineGordonCollision />
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-3">
            <h2>The Breather: Oscillating Bound State</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A kink and antikink can attract each other. If they form a bound state, what would
                that state look like in time? Would it oscillate, collapse, or travel away?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  It oscillates. The pair pulsates: kink and antikink approach, almost annihilate,
                  and bounce back. The total topological charge is zero, so the configuration is not
                  individually protected. But the exact binding keeps it localized forever without
                  radiating energy.
                </p>
              </details>
            </div>
            <p>
              The breather is an exact solution. It is a spatially localized lump that pulses in
              time and never spreads:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$u(x,t) = 4\\arctan\\!\\left(\\frac{\\sqrt{1-\\omega^2}}{\\omega}\\cdot\\frac{\\sin(\\omega t)}{\\cosh(\\sqrt{1-\\omega^2}\\,x)}\\right), \\quad \\omega \\in (0,1)$$`}</span>
            </div>
            <p>
              The parameter {`$\\omega$`} is the internal oscillation frequency. Use the breather
              whenever a bound kink-antikink state needs an exact description. It comes straight
              from the two-soliton formula above, with complex conjugate eigenvalue parameters
              {`$\\lambda_2 = \\lambda_1^*$`}. (Two numbers are complex conjugates when they have
              the same real part and opposite imaginary parts.)
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The two-soliton formula uses eigenvalues {`$\\lambda_1, \\lambda_2$`}. When both are
                real, the formula gives two kinks. When {`$\\lambda_2 = \\lambda_1^*$`}, the two
                exponential terms combine into a real oscillation in time. That is the new point:
                the same formula gives a steady pulsing lump instead of a passing pair.
              </p>
              <p>
                The spatial profile {`$1/\\cosh(\\sqrt{1-\\omega^2}\\,x)$`} is a permanent envelope,
                so the breather holds its width and does not spread. Both facts drop straight out of
                the exact formula, with no approximation.
              </p>
            </div>
            <SgBreather />
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                As {`$\\omega \\to 0$`}, the factor {`$\\sqrt{1-\\omega^2}/\\omega \\to \\infty$`}.
                What does this tell you about the breather in this limit?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  When {`$\\omega \\to 0$`}, the amplitude {`$4\\arctan(\\text{large}/\\cosh)$`}
                  approaches {`$2\\pi$`} near {`$x = 0$`} and zero far away. The oscillation slows
                  down: {`$\\sin(\\omega t) \\approx \\omega t$`}. The breather looks like a kink
                  and antikink very slowly separating. This is the loosely-bound limit: very low
                  frequency oscillation of a nearly-free kink-antikink pair.
                </p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-4">
            <h2>Solving by Inverse Scattering Transform</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The Fourier transform converts a linear PDE into algebraic equations for each mode.
                If a similar transform existed for nonlinear PDEs, what would it need to do?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  It would map the nonlinear problem to a linear one. The initial condition would be
                  encoded in nonlinear spectral data. The data would evolve linearly in time. The
                  solution would be recovered by inverting the map. This is exactly the inverse
                  scattering transform.
                </p>
              </details>
            </div>
            <p>
              The inverse scattering transform (IST) is the nonlinear cousin of the Fourier
              transform. The Fourier transform turns a wave into its mix of plain sine modes, lets
              each mode evolve on its own, then adds them back. The IST does the same, but the
              "modes" are solitons plus small spreading ripples. It solves the sine-Gordon equation
              in three steps.
            </p>
            <h3>The AKNS Eigenvalue Equations</h3>
            <p>
              First set up the tool. The IST reads the field through a pair of matrix eigenvalue
              equations called the AKNS 2x2 scheme. You feed the field into a matrix, and the
              eigenvalues that come out describe the solitons. Write {`$q = -\\tfrac{1}{2}u_x$`} for
              the field slope (the IST works with the slope, not {`$u$`} itself). The two equations
              are
            </p>
            <div className="lrn-eq">
              <span>{`$$\\psi_x = \\begin{pmatrix} -i\\zeta & q \\\\ -q & i\\zeta \\end{pmatrix}\\psi, \\qquad \\psi_t = \\frac{1}{\\zeta}\\begin{pmatrix} A & B \\\\ B & -A \\end{pmatrix}\\psi$$`}</span>
            </div>
            <p>
              with {`$A = \\tfrac{1}{4}\\cos u$`} and {`$B = \\tfrac{i}{4}\\sin u$`}. The number
              {`$\\zeta$`} is the spectral parameter, the dial you turn to probe the field at
              different "frequencies".
            </p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Scattering data in plain English</span>
              <div className="lrn-definition-desc">
                <p>
                  Solving the first AKNS equation as {`$x$`} runs across the whole line gives a
                  small set of numbers called the scattering data. They are the nonlinear version of
                  Fourier coefficients. Each one has a plain meaning:
                </p>
                <ul className="lrn-list">
                  <li>
                    Discrete eigenvalues {`$\\zeta_n$`}: special values of {`$\\zeta$`} where a
                    trapped (bound) solution exists. Each one is one soliton. Their count is the
                    number of solitons.
                  </li>
                  <li>
                    Transmission coefficient {`$a(\\zeta)$`}: measures how much of a probe wave
                    passes straight through the field. Its zeros sit exactly at the eigenvalues
                    {`$\\zeta_n$`}, so {`$a$`} carries the soliton count.
                  </li>
                  <li>
                    Reflection coefficient {`$b_0(\\zeta)$`}: measures how much of a probe wave
                    bounces back. It encodes the small spreading ripples (the radiation). For a pure
                    soliton it is zero.
                  </li>
                  <li>
                    Normalization constants {`$c_n$`}: set the position and size of each soliton.
                  </li>
                </ul>
              </div>
            </div>
            <p>Now the three steps.</p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <strong>Step 1: Forward scatter.</strong> Take the initial field slope
                {`$q(x, 0)$`} and solve the first AKNS equation. Read off the scattering data:
                eigenvalues {`$\\zeta_n$`}, transmission {`$a(\\zeta)$`}, reflection
                {`$b_0(\\zeta)$`}, and normalization constants {`$c_n$`}. This is the hard step,
                done once.
              </div>
              <div className="lrn-step">
                <strong>Step 2: Evolve in time.</strong> The scattering data moves in the simplest
                possible way. {`$a(\\zeta)$`} stays constant. The eigenvalues {`$\\zeta_n$`} never
                move. Only the reflection coefficient turns by a phase:
                {`$b_0(\\zeta, t) = b_0(\\zeta, 0)\\,e^{-it/(2\\zeta)}$`}. No new equation is
                needed.
              </div>
              <div className="lrn-step">
                <strong>Step 3: Invert.</strong> Build a kernel {`$f(X;t)$`} from the time-evolved
                data, then solve the Marchenko equations (below) for {`$K_{12}$`}. Recover the field
                slope from {`$u_x = -4\\,\\partial_x K_{12}(x,x;t)$`}, then integrate to get
                {`$u(x,t)$`}.
              </div>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The AKNS scheme pairs the two equations {`$\\psi_x = X\\psi$`} and
                {`$\\psi_t = T\\psi$`}. They are consistent only if
                {`$X_t - T_x + [X, T] = 0$`} (the zero-curvature condition). Working that out gives
                back the sine-Gordon equation exactly. So the scattering data of {`$X$`} carries all
                the conserved information about {`$u$`}.
              </p>
              <p>
                Isospectral means the eigenvalues do not move as time runs forward. That is why the
                {`$\\zeta_n$`} in Step 2 stay fixed: the solitons keep their identity forever. KdV
                has the same isospectral property through its Lax pair.
              </p>
            </div>
            <h3>The Marchenko Equations</h3>
            <p>
              Step 3 needs an inversion kernel. Call it {`$K(x,z;t)$`}. It is a small matrix of
              functions whose diagonal value gives back the field. The first index {`$x$`} is the
              physical position. The second index {`$z$`} is a helper variable you integrate over
              and then set equal to {`$x$`} at the end. The two pieces {`$K_{11}$`} and {`$K_{12}$`}
              satisfy a linear integral pair, the Marchenko equations:
            </p>
            <div className="lrn-eq">
              <span>{`$$K_{11}(x,z;t) + \\int_x^\\infty K_{12}(x,y;t)\\,f(y+z;t)\\,dy = 0$$`}</span>
            </div>
            <div className="lrn-eq">
              <span>{`$$K_{12}(x,z;t) - f(x+z;t) - \\int_x^\\infty K_{11}(x,y;t)\\,f(y+z;t)\\,dy = 0$$`}</span>
            </div>
            <p>
              The field comes from the diagonal: {`$q(x,t) = -2K_{12}(x,x;t)$`}, which is the same
              as
              {`$u_x = -4\\,\\partial_x K_{12}(x,x;t)$`}. For one discrete eigenvalue the kernel
              {`$f$`} is a single exponential, so these integral equations collapse to plain
              algebra. The next section carries that case all the way through.
            </p>
            <div className="lrn-callout lrn-tip">
              <p>
                <strong>Why AKNS and not ZS.</strong> A larger 4x4 Zakharov-Shabat (ZS) scheme also
                gives the sine-Gordon equation. But for SG its four-component vector {`$\\psi$`} has
                only two independent parts (a degeneracy), and that repetition makes one step of the
                standard ZS construction break down. The AKNS 2x2 scheme has no such repetition, so
                it is the clean route.
              </p>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-5">
            <h2>Solving for the Kink: IST Worked Example</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The initial condition {`$q(x,0) = \\lambda\\,\\text{sech}(\\lambda x + \\mu)$`}
                is a single localized lump. What kind of solution do you expect to emerge at late
                times?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  A single kink. The sech profile is exactly the gradient of the kink at
                  {`$t = 0$`}. The IST will find one discrete eigenvalue, confirming exactly one
                  soliton in the initial data. The kink travels without changing shape.
                </p>
              </details>
            </div>
            <p>
              Apply the IST to {`$q(x,0) = \\lambda\\,\\text{sech}(\\lambda x + \\mu)$`} with
              {`$\\lambda > 0$`}. The forward scattering step gives:
            </p>
            <ul className="lrn-list">
              <li>
                Reflection coefficient: {`$b_0(\\zeta) = 0$`} for all
                {`$\\zeta \\neq \\frac{i\\lambda}{2}$`}.
              </li>
              <li>One discrete eigenvalue: {`$\\zeta_1 = \\frac{i\\lambda}{2}$`}.</li>
              <li>Normalization constant: {`$c_1 = -i\\lambda\\,e^{-\\mu}$`}.</li>
            </ul>
            <p>
              One discrete eigenvalue means one kink. No reflection means no dispersive radiation.
            </p>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>The scattering kernel for pure one-soliton data is</p>
                <div className="lrn-eq">
                  <span>{`$$f(X;t) = -\\lambda\\,e^{-(\\lambda X/2 + t/\\lambda + \\mu)}$$`}</span>
                </div>
                <p>
                  Because the kernel is one exponential, you can guess the form of the answer. Try
                  the separable ansatz {`$K_{11} = L(x,t)\\,e^{-\\lambda z/2}$`} and
                  {`$K_{12} = M(x,t)\\,e^{-\\lambda z/2}$`}. Put these into the two Marchenko
                  equations. Every integral over {`$z$`} now factors out, leaving plain algebra. Set
                  {`$\\beta = e^{-(\\mu + t/\\lambda + \\lambda x)}$`} for short. The two equations
                  become a 2x2 linear system for {`$L$`} and {`$M$`}:
                </p>
                <div className="lrn-eq">
                  <span>{`$$L + M\\,\\beta = 0, \\qquad M - \\beta - L\\,\\beta = 0.$$`}</span>
                </div>
                <p>
                  From the first, {`$L = -M\\beta$`}. Put that into the second:
                  {`$M(1 + \\beta^2) = \\beta$`}, so {`$M = \\beta/(1+\\beta^2)$`}. The diagonal
                  value you need is {`$K_{12}(x,x;t) = M\\,e^{-\\lambda x}$`}, which gives
                </p>
                <div className="lrn-eq">
                  <span>{`$$K_{12}(x,x;t) = \\frac{-\\lambda\\,\\beta}{1 + \\beta^2} = \\frac{-\\lambda\\,e^{-(\\mu + t/\\lambda + \\lambda x)}}{1 + e^{-2(\\mu + t/\\lambda + \\lambda x)}}$$`}</span>
                </div>
                <p>
                  Now recover the field. The rule is {`$u_x = -4\\,\\partial_x K_{12}(x,x;t)$`}. To
                  integrate it, notice the target answer {`$u = 4\\arctan(W)$`} with
                  {`$W = c\\,e^{\\lambda x + t/\\lambda}$`} has derivative
                  {`$u_x = 4W'/(1+W^2) = 4\\lambda W/(1+W^2)$`}, since {`$W' = \\lambda W$`}.
                  Writing
                  {`$c = -e^\\mu$`} makes {`$W = -1/\\beta$`}, and a short check shows
                  {`$-4\\,\\partial_x K_{12}$`} equals exactly this {`$u_x$`}. Integrating in{' '}
                  {`$x$`}
                  gives
                </p>
                <div className="lrn-eq lrn-eq-hero">
                  <span>{`$$u(x,t) = 4\\arctan\\!\\left(c\\,e^{\\lambda x + t/\\lambda}\\right), \\quad c = -e^\\mu$$`}</span>
                </div>
                <p>
                  This is the kink. The IST has produced the exact solution from the initial data.
                </p>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <ol className="lrn-list">
                  <li>
                    Verify that {`$f(X;t) = -\\lambda\\,e^{-(\\lambda X/2 + t/\\lambda + \\mu)}$`}
                    satisfies the time evolution rule for the scattering data.
                  </li>
                  <li>
                    Substitute the ansatz {`$K_{11} = L\\,e^{-\\lambda z/2}$`} into the first
                    Marchenko equation and show {`$L$`} satisfies an algebraic equation.
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  Starting from the two-soliton kernel
                  {`$f(X;t) = -\\sum_{n=1}^2 \\lambda_n e^{-(\\lambda_n X/2 + t/\\lambda_n + \\mu_n)}$`}
                  , derive the two-soliton formula. Identify when the result gives a breather.
                </p>
              </div>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                In Step 2 of the IST, {`$a(\\zeta)$`} stays constant while {`$b_0$`} gains a phase.
                Why does the constancy of {`$a$`} matter for long-time behavior?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The zeros of {`$a(\\zeta)$`} in the upper half-plane give the discrete eigenvalues{' '}
                  {`$\\zeta_n$`}. Each eigenvalue corresponds to one soliton. If {`$a$`} stays
                  constant, the eigenvalues never move. The number and speed of solitons is
                  permanently fixed by the initial condition.
                </p>
                <p>
                  Only {`$b_0$`} changes, controlling the positions and phases of the solitons. This
                  is why IST gives exact, permanent solitons: the eigenvalue structure locks in the
                  solution forever.
                </p>
              </details>
            </div>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Sine-Gordon kink (topological)</span>
                <p>
                  {`$u = 4\\arctan(c\\,e^{\\lambda x + t/\\lambda})$`}. Field changes by
                  {`$2\\pi$`}. Topological charge {`$Q = \\pm 1$`}. Stable by topology.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">
                  Nonlinear Schrodinger (NLS) envelope soliton (non-topological)
                </span>
                <p>
                  {`$u = a\\,e^{i\\phi}\\,\\text{sech}(a(x-ct)/\\sqrt{2})$`}. The field returns to
                  zero on both sides. No topological charge. It is held together by a balance
                  between nonlinearity and dispersion, not by topology.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-6">
            <h2>Cnoidal Waves: Periodic Solutions</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The sine-Gordon kink is an isolated soliton. Does the equation also admit periodic
                solutions? What would a periodic solution of the pendulum chain look like?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Yes. A periodic solution looks like a train of kinks evenly spaced along the
                  chain, each connecting vacuum to vacuum, repeating indefinitely. As kinks move
                  apart, the periodic solution approaches one isolated kink.
                </p>
              </details>
            </div>
            <p>
              The continuous sine-Gordon equation also has Jacobi-elliptic (cnoidal) solutions.
              These are exact periodic travelling waves. The Jacobi {`$\\operatorname{cn}$`}{' '}
              function is a stretched cosine. A single number called the elliptic modulus
              {`$m \\in [0,1]$`} controls how stretched it is. At {`$m = 0$`} it is exactly
              {`$\\cos$`}. At {`$m = 1$`} it is exactly {`$\\operatorname{sech}$`} (the sech bump of
              a single kink). The cnoidal solution is
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$y(x, t) = 4\\arctan\\!\\bigl(A\\,\\operatorname{cn}(\\mu x,\\, k_x)\\,\\operatorname{cn}(\\nu t,\\, k_t)\\bigr)$$`}</span>
            </div>
            <p>
              The constants {`$\\mu$`} and {`$\\nu$`} set the spatial and time scales. The numbers
              {`$k_x$`} and {`$k_t$`} are the moduli for the space and time factors. The single
              elliptic modulus {`$m$`} fixes all four through the sine-Gordon equation. Use cnoidal
              solutions when the system repeats periodically rather than holding one isolated kink.
            </p>
            <SgCnoidalWave />
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The cnoidal solution bridges two exact limits. At {`$m = 0$`}, the cn function is a
                cosine and the cnoidal wave is a small-amplitude linear wave. This is the regime
                where {`$\\sin u \\approx u$`} and the SG equation linearizes.
              </p>
              <p>
                At {`$m = 1$`}, the cn function is a sech and the cnoidal wave becomes a train of
                infinitely separated kinks. The period diverges to infinity as {`$m \\to 1$`},
                leaving one isolated soliton per fundamental domain.
              </p>
            </div>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Sine-Gordon vs KdV solitons</span>
                <p>
                  The KdV soliton is non-topological: {`$u \\to 0$`} on both sides. The sine-Gordon
                  kink is topological: {`$u$`} changes by {`$2\\pi$`}. Both use a 2x2 IST scheme:
                  KdV via its Schrodinger operator, SG via the AKNS pair.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Sine-Gordon vs sinh-Gordon</span>
                <p>
                  Sinh-Gordon ({`$u_{xt} = \\sinh u$`}) has the same AKNS structure but a hyperbolic
                  potential {`$\\cosh u - 1$`} with only one minimum. No distinct vacua exist, so no
                  topological solitons form.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-7">
            <h2>The Discretized Chain: Sine-Gordon and FPU</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                You excite only a few low-frequency modes in a chain of 64 sine-Gordon pendula. At
                low energy the modes decouple approximately. At high energy they interact strongly.
                Do you expect the energy to stay in those modes or spread to all modes?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  At low energy: stay localized. At high energy with low-mode excitation: spread to
                  all modes. When energy spreads evenly across every mode, we call it equipartition.
                  This is the sine-Gordon version of the famous Fermi-Pasta-Ulam result.
                </p>
              </details>
            </div>
            <p>
              The Hamiltonian is the total energy written as kinetic plus potential. The discretized
              sine-Gordon chain with {`$N$`} pendula has the Hamiltonian
            </p>
            <div className="lrn-eq">
              <span>{`$$H = \\sum_{i=1}^N \\frac{p_i^2}{2} + \\sum_{i=1}^N (1 - \\cos y_i) + \\sum_{i,j} A_{ij} y_i y_j$$`}</span>
            </div>
            <p>
              The first sum is kinetic energy. The second sum is the on-site pendulum potential at
              each pendulum. The third sum is the spring coupling between pendula. The matrix{' '}
              {`$A_{ij} = (2\\delta_{ij} - \\delta_{i,j-1} - \\delta_{i,j+1})/(\\Delta x)^2$`} holds
              that coupling. To find the easy small-angle behavior, expand the on-site term:
              {`$1 - \\cos y_i \\approx y_i^2/2$`}. Now the energy has a clean split. The two{' '}
              {`$y^2$`} pieces (the on-site part plus the coupling matrix) form a harmonic part. The
              leftover from the full cosine is the nonlinear interaction. Normal modes are the
              special combinations of pendulum angles that turn the harmonic part into a set of
              decoupled oscillators. Diagonalizing {`$A_{ij}$`} finds them. Their frequencies are
            </p>
            <div className="lrn-eq">
              <span>{`$$\\omega_r = \\frac{2(N+1)}{L}\\sin\\!\\left(\\frac{\\pi r}{2(N+1)}\\right), \\quad r = 1, \\ldots, N$$`}</span>
            </div>
            <h3>Energy Spreading: the FPU Connection</h3>
            <p>
              In numerical experiments with {`$N+1 = 64$`} pendula and chain length {`$L = 32$`},
              tracking energy in each normal mode over {`$t = 50{,}000$`} shows:
            </p>
            <ul className="lrn-list">
              <li>
                <strong>Low energy ({`$E \\approx 4$`}):</strong> Energy stays in initially excited
                modes. Near-sinusoidal spatial profile. Modes decouple.
              </li>
              <li>
                <strong>High energy ({`$E \\approx 128$`}) with low-mode excitation:</strong>
                Energy spreads rapidly to all modes. Irregular spatial profile. Near-equipartition
                reached quickly.
              </li>
              <li>
                <strong>High energy with high-mode excitation (modes 37 and 39):</strong>
                Energy resists equipartition. High-mode excitation does not spread, even at high
                energy.
              </li>
            </ul>
            <p>
              This is the sine-Gordon cousin of the famous Fermi-Pasta-Ulam (FPU) problem. In both
              systems, whether nonlinear coupling eventually equipartitions energy depends on the
              energy level and which modes start excited.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                At low energy, {`$\\cos y_i \\approx 1 - y_i^2/2$`}. The quadratic part gives the
                normal-mode frequencies. The quartic correction couples modes but weakly: they stay
                near their initial values.
              </p>
              <p>
                At high energy the full {`$\\cos$`} nonlinearity matters. Modes interact strongly.
                The system explores its phase space broadly, leading to equipartition. The simple
                idea that overlapping mode resonances trigger spreading is not the whole story: it
                is neither necessary nor sufficient for equipartition.
              </p>
            </div>
            <h3>The Symplectic Map</h3>
            <p>
              A symplectic map is a time-stepping rule that conserves phase-space volume exactly,
              the way real Hamiltonian motion does. If you chop time into fixed steps {`$T$`} and
              treat the pendulum kick as a sharp pulse once per step, you get a {`$2N$`}-dimensional
              symplectic map. It advances each normal-mode position {`$u_s$`} and velocity
              {`$v_s$`} by one step:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\bar{u}_s = u_s \\cos(\\omega_s T) + \\frac{1}{\\omega_s}\\!\\left[v_s - g^{-2}T\\sum_i e_{is}\\sin\\!\\left(g\\sum_r u_r e_{ir}\\right)\\right]\\sin(\\omega_s T)$$`}</span>
            </div>
            <p>
              Here {`$\\omega_s$`} is the mode frequency, {`$T$`} is the time step, and {`$g$`}
              measures how strong the nonlinearity is. The matrix {`$e_{is}$`} converts mode
              coordinates back into pendulum angles. The map keeps phase-space volume exact. That
              makes it far more accurate than standard Runge-Kutta methods for long-time
              energy-spreading studies, which lose energy slowly to numerical drift.
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-8">
            <h2>Integrability and the Painleve Property</h2>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                When you reduce a PDE by a similarity substitution, you get an ODE. For integrable
                PDEs this ODE has a special property. What property signals that the parent PDE is
                completely integrable?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The Painleve property: all movable singularities of the ODE's solutions are poles
                  (no movable branch points or essential singularities). PDEs solvable by IST
                  consistently reduce to Painleve ODEs under similarity reductions.
                </p>
              </details>
            </div>
            <p>
              A similarity reduction means you assume the field depends only on one combined
              variable, like {`$z = xt$`}, and turn the PDE into an ordinary differential equation
              (ODE) in {`$z$`}. A completely integrable PDE leaves a clear fingerprint in that ODE.
              There is a deep conjecture about it:
            </p>
            <div className="lrn-insight">
              <span className="lrn-insight-label">The Painleve Conjecture</span>
              <p>
                Every ODE arising as a similarity reduction of a PDE solvable by IST has the
                Painleve property: all movable singularities of its solutions are poles. No movable
                branch points or essential singularities appear.
              </p>
            </div>
            <p>
              The Painleve property is rare in nonlinear ODEs. Its presence signals that the ODE
              (and the parent PDE) is integrable: it has enough hidden symmetry to control the
              singularity structure of all solutions.
            </p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Painleve Transcendents</span>
              <div className="lrn-definition-desc">
                <p>
                  Among all second-order polynomial ODEs, exactly 50 have the Painleve property.
                  Most reduce to classical functions. Six irreducible cases define new functions:
                  P-I through P-VI. These appear as reductions of the main integrable PDEs including
                  KdV, NLS, and SG.
                </p>
                <p>
                  A fixed singularity depends only on the equation coefficients and stays fixed as
                  initial conditions change. A movable singularity moves as initial conditions
                  change. The Painleve property requires movable singularities to be poles only.
                </p>
              </div>
            </div>
            <h3>The Sine-Gordon Reduction</h3>
            <p>
              Here is the reduction for sine-Gordon itself. Start from the characteristic form
              {`$u_{xt} = \\sin u$`} and look for a solution that depends only on
              {`$z = xt$`}. Then {`$u_x = t\\,u'(z)$`} and{' '}
              {`$u_{xt} = u' + xt\\,u'' = u' + z\\,u''$`}. The PDE collapses to an ODE in {`$z$`}:
            </p>
            <div className="lrn-eq lrn-eq-hero">
              <span>{`$$z\\,u'' + u' = \\sin u$$`}</span>
            </div>
            <p>
              A change of variable turns this into the third Painleve equation, one of the six named
              Painleve transcendents. So sine-Gordon passes the Painleve test. Its reduction lands
              on a Painleve equation, which confirms the complete IST machinery applies and the
              infinite conservation structure is present.
            </p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                An integrable PDE has infinitely many conserved quantities. Under a similarity
                reduction, these limit the ODE strongly. The limits force the ODE's solutions to be
                analytic in a very special way: no branching, no essential singularities. Only poles
                fit the infinite conservation structure.
              </p>
              <p>
                A generic nonlinear ODE has movable branch points. These cause multi-valuedness in
                the complex plane and correspond to a system without enough first integrals to
                control singularities. The Painleve property is a sharp diagnostic: absence of
                movable branch points signals enough hidden symmetry for integrability.
              </p>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `Write the sine-Gordon equation in both laboratory and characteristic coordinates. State the coordinate transformation that relates them.`,
        a: `Laboratory form: $u_{xx} - \\alpha^2 u_{tt} = \\sin u$. Characteristic form: $u_{\\xi\\eta} = \\sin u$. The transformation is $\\xi = \\frac{1}{2}(x - t/\\alpha)$ and $\\eta = \\frac{1}{2}(x + t/\\alpha)$. Substituting these into the laboratory form gives the characteristic form because $\\partial^2/\\partial x^2 - \\alpha^2\\partial^2/\\partial t^2 = 4\\partial^2/(\\partial\\xi\\,\\partial\\eta)$ up to the Jacobian factor. The characteristic form is preferred for the inverse scattering transform.`
      },
      {
        q: `Describe the pendulum chain that gives the sine-Gordon equation. What do the terms $y_{xx}$ and $\\sin y$ represent physically?`,
        a: `The model is $N$ identical pendula on a shaft, each coupled to its neighbors by torsion springs. The angle field $y(x,t)$ satisfies $y_{tt} - y_{xx} + \\sin y = 0$ in the continuum limit. The term $y_{xx}$ is the continuum limit of the nearest-neighbor coupling $(y_{i+1} - 2y_i + y_{i-1})/(\\Delta x)^2$: it measures the curvature of the angle field. The term $\\sin y$ is the gravitational restoring torque on each pendulum pulling it back toward vertical. The continuum limit uses no approximation: it is exact.`
      },
      {
        q: `Write the kink solution. What are the values of $u$ as $x \\to \\pm\\infty$ and what is the topological charge?`,
        a: `The kink is $u(x,t) = 4\\arctan(c\\,e^{\\lambda x + t/\\lambda})$ with $c = -e^\\mu$ and $\\lambda > 0$. As $x \\to -\\infty$, the argument of $\\arctan$ goes to zero so $u \\to 0$. As $x \\to +\\infty$, the argument goes to $+\\infty$ so $\\arctan \\to \\pi/2$ and $u \\to 2\\pi$. The topological charge is $Q = (u(+\\infty) - u(-\\infty))/(2\\pi) = 1$. This integer is conserved for any smooth evolution of the field.`
      },
      {
        q: `Why is the kink called a topological soliton? Why can it not be continuously deformed to the vacuum $u = 0$ everywhere?`,
        a: `The kink has boundary values $u = 0$ at $-\\infty$ and $u = 2\\pi$ at $+\\infty$. To reach the flat state you must either move one boundary or climb the potential barrier. That barrier $V = 1 - \\cos u$ has height $V = 2$ at $u = \\pi$. In an infinite chain, climbing it costs infinite energy. So the topological charge $Q = 1$ cannot be removed by any local finite-energy step. Stability comes from topology, not from the specific equation. That is why it is called a topological soliton.`
      },
      {
        q: `State the three steps of the IST for the sine-Gordon equation. Which step is linear and trivial?`,
        a: `Step 1 (forward scatter): given $q(x,0)$, solve the AKNS eigenvalue equation to find scattering data $(a(\\zeta), b_0(\\zeta), \\zeta_n, c_n)$. Step 2 (linear evolution): $a(\\zeta)$ stays constant, eigenvalues $\\zeta_n$ stay fixed, $b_0$ gains a phase $e^{-it/(2\\zeta)}$. Step 3 (inversion): build kernel $f(X;t)$ from evolved data, solve Marchenko equations for $K_{12}$, recover $u$ via $u_x = -4\\partial_x K_{12}(x,x;t)$. Step 2 is linear and trivial: no new equations, only multiplication by a known phase.`
      },
      {
        q: `Write the breather solution. What happens to the breather as $\\omega \\to 1$ and as $\\omega \\to 0$?`,
        a: `The breather is $u(x,t) = 4\\arctan\\!\\left(\\frac{\\sqrt{1-\\omega^2}}{\\omega}\\cdot\\frac{\\sin(\\omega t)}{\\cosh(\\sqrt{1-\\omega^2}\\,x)}\\right)$. As $\\omega \\to 1$, $\\sqrt{1-\\omega^2} \\to 0$: the width $1/\\sqrt{1-\\omega^2} \\to \\infty$ and the amplitude vanishes. The breather becomes a low-amplitude, spatially spread wave. As $\\omega \\to 0$, $\\sqrt{1-\\omega^2}/\\omega \\to \\infty$ and the amplitude reaches $2\\pi$: the breather looks like a slowly oscillating kink-antikink pair just barely bound.`
      },
      {
        q: `How does the breather arise from the two-soliton formula? State the condition on eigenvalue parameters.`,
        a: `The two-soliton formula uses parameters $\\lambda_1, \\lambda_2$. When both are real and positive, the formula gives two kinks. When $\\lambda_2 = \\lambda_1^*$ (complex conjugates), the two exponential terms $e^{\\theta_1}$ and $e^{\\theta_2}$ become complex conjugates. Their combination produces a real, time-periodic, spatially localized solution: the breather. The internal oscillation frequency is set by the imaginary part of $\\lambda_1$, and the spatial width by the real part. Both properties follow exactly from the complex eigenvalue structure.`
      },
      {
        q: `Write the two-soliton solution. Define $\\theta_n$ and state what the prefactor $(\\lambda_1+\\lambda_2)/(\\lambda_1-\\lambda_2)$ controls.`,
        a: `The two-soliton solution is $u = 4\\arctan\\{\\frac{\\lambda_1+\\lambda_2}{\\lambda_1-\\lambda_2}\\cdot\\frac{e^{\\theta_1}-e^{\\theta_2}}{1+e^{\\theta_1+\\theta_2}}\\}$ with $\\theta_n = \\lambda_n x + t/\\lambda_n + \\mu_n$. The phases $\\mu_n$ set the initial positions. The prefactor $(\\lambda_1+\\lambda_2)/(\\lambda_1-\\lambda_2)$ controls the interaction strength: when the eigenvalues are equal the denominator vanishes (disallowed), and when they differ greatly the interaction is weak. This prefactor is the sine-Gordon analog of the KdV two-soliton phase shift.`
      },
      {
        q: `Why is AKNS preferred over the ZS scheme for the sine-Gordon equation?`,
        a: `The Zakharov-Shabat (ZS) scheme uses a four-component vector $\\psi = (\\psi_1; \\psi_2)$ where each part is a two-vector. For sine-Gordon, the four components have only two independent ones. That extra repetition is a degeneracy. It makes a key step in the standard ZS construction fail: a matrix that must be nonzero cannot be found by the usual procedure. The AKNS 2x2 scheme uses the eigenvalue pair $\\psi_x = X\\psi$, $\\psi_t = T\\psi$ directly. It has no four-component structure, so it never meets the degeneracy.`
      },
      {
        q: `Write the Marchenko equations for the sine-Gordon AKNS scheme. What is the relation between $K_{12}$ and the field $u$?`,
        a: `The Marchenko equations are $K_{11}(x,z;t) + \\int_x^\\infty K_{12}(x,y;t)\\,f(y+z;t)\\,dy = 0$ and $K_{12}(x,z;t) - f(x+z;t) - \\int_x^\\infty K_{11}(x,y;t)\\,f(y+z;t)\\,dy = 0$. The relation to the field is $q(x,t) = -2K_{12}(x,x;t)$ with $q = -\\frac{1}{2}u_x$, giving $u_x = -4\\partial_x K_{12}(x,x;t)$. Integrating this with respect to $x$ recovers $u(x,t)$.`
      },
      {
        q: `Write the scattering data for the initial condition $q(x,0) = \\lambda\\,\\text{sech}(\\lambda x + \\mu)$. What does one discrete eigenvalue imply?`,
        a: `The scattering data is: $b_0(\\zeta) = 0$ for all $\\zeta \\neq i\\lambda/2$, one discrete eigenvalue $\\zeta_1 = i\\lambda/2$, normalization constant $c_1 = -i\\lambda\\,e^{-\\mu}$. One discrete eigenvalue means exactly one soliton emerges from this initial condition. No reflection ($b_0 = 0$) means no dispersive radiation: the entire initial energy goes into the single kink. The kink travels without changing shape for all time.`
      },
      {
        q: `What is the washboard potential of the sine-Gordon equation? List all vacuum states and explain why a kink connects adjacent vacua.`,
        a: `The potential is $V(u) = 1 - \\cos u$. It looks like a tilted washboard: a row of equal valleys. Its minima (vacua) occur at $u = 2\\pi n$ for all integers $n$: that is, at $0, \\pm 2\\pi, \\pm 4\\pi, \\ldots$ A kink runs from $u \\to 2\\pi n$ at $x = -\\infty$ to $u \\to 2\\pi(n+1)$ at $x = +\\infty$. The vacuum labels differ by exactly 1, so the topological charge is $Q = 1$. Adjacent vacua are nearest-neighbor minima: no minimum lies between them.`
      },
      {
        q: `Describe the FPU connection to the discretized sine-Gordon chain. What do low-energy and high-energy numerical runs show?`,
        a: `The Fermi-Pasta-Ulam (FPU) problem studies how energy spreads in a weakly nonlinear chain. The discretized SG chain is the topological version. The learning section lists three numerical runs. At low energy the modes stay decoupled and energy stays where you put it. At high energy with low-mode excitation, energy spreads to all modes (equipartition). At high energy with high-mode excitation, energy resists spreading even after very long times. The lesson: whether energy equipartitions depends on the energy level and which modes start with energy.`
      },
      {
        q: `Write the normal-mode frequencies of the discretized SG chain. What do they reduce to for small mode number $r$?`,
        a: `The frequencies are $\\omega_r = \\frac{2(N+1)}{L}\\sin(\\frac{\\pi r}{2(N+1)})$ for $r = 1, \\ldots, N$. For small $r$, $\\sin(\\pi r/(2(N+1))) \\approx \\pi r/(2(N+1))$, so $\\omega_r \\approx \\pi r/L$. These are the simple linear frequencies of a continuous string: wavenumber $k = \\pi r/L$ times unit speed. This is the regime where modes decouple and energy stays localized: the near-integrable low-energy behavior.`
      },
      {
        q: `State the Painleve conjecture. How does it link IST to the structure of ODE singularities?`,
        a: `The Painleve conjecture: every ODE you get as a similarity reduction of an IST-solvable PDE has the Painleve property. That property means all movable singularities are poles. The link to IST is simple. The infinite conservation laws of an integrable PDE constrain the ODE so strongly that its solutions cannot branch. Finding a Painleve ODE in a similarity reduction is strong evidence the parent PDE is integrable. The six Painleve transcendents P-I through P-VI are the irreducible cases. They appear as reductions of the main integrable PDEs.`
      },
      {
        q: `Transfer: In a superconducting Josephson junction, the phase difference $\\phi$ satisfies the sine-Gordon equation. A kink in $\\phi$ is called a fluxon. What is its topological charge and why is it stable?`,
        a: `A fluxon is a kink in the junction phase: $\\phi$ changes from $0$ to $2\\pi$ along the junction length. Topological charge $Q = 1$. Stability comes from the same mechanism as the pendulum chain kink: the boundary conditions lock in the total phase winding, and any removal requires the phase to pass through $\\pi$ everywhere simultaneously, costing infinite energy in a long junction. Fluxons carry a quantum of magnetic flux $\\Phi_0 = h/(2e)$, quantized by the same topological argument. This is why flux quantization in superconductors is robust.`
      },
      {
        q: `Transfer: A student observes a localized, oscillating structure in a numerical simulation of the sine-Gordon equation. It does not travel. What solution type is this, and what parameter characterizes it?`,
        a: `This is a breather: the bound state of a kink-antikink pair with complex conjugate eigenvalues. It is localized in space with width $\\sim 1/\\sqrt{1-\\omega^2}$ and oscillates in time with frequency $\\omega$. The parameter $\\omega \\in (0,1)$ characterizes the breather: small $\\omega$ gives a nearly-free, wide, slowly-oscillating pair; $\\omega$ near 1 gives a narrow, rapidly-oscillating, small-amplitude structure. To confirm the identification, check that the amplitude and period match the breather formula.`
      },
      {
        q: `Elaborate: Why does the constancy of $a(\\zeta)$ in the IST imply that soliton collisions are elastic?`,
        a: `The zeros of $a(\\zeta)$ in the upper half-plane give the discrete eigenvalues, each corresponding to one soliton with a fixed speed and shape. If $a$ is constant, the eigenvalues never change, so no soliton can gain or lose speed or amplitude. The only freedom is in $b_0(\\zeta)$, which controls the phases and positions of solitons. This means every soliton emerges from a collision with exactly the same amplitude and speed as before: the collision is elastic, and only the positions shift. The elasticity is a consequence of the isospectrality of the AKNS flow.`
      },
      {
        q: `Self-explain: In the IST kink derivation, why does $b_0 = 0$ mean there is no dispersive radiation?`,
        a: `The scattering data has two parts. The continuous spectrum encodes radiation: small-amplitude dispersive waves that spread and decay at large $|x|$. This part is encoded in $b_0(\\zeta)/a(\\zeta)$ for real $\\zeta$. The discrete spectrum encodes solitons: localized, non-decaying structures. The discrete part lives in the poles of the scattering matrix. When $b_0 = 0$, the continuous spectral weight is zero: no radiation is generated. All the initial energy goes into the solitons. The solution contains only kinks, moving forever without losing energy.`
      },
      {
        q: `Predict: if you initialize the sine-Gordon equation with a large-amplitude random field, what types of structures do you expect to see at large times?`,
        a: `At large times, you expect a combination of kinks, antikinks, breathers, and dispersive radiation. The IST guarantees that the solution separates into discrete solitons plus radiation. The number of kinks and antikinks equals the number of discrete eigenvalues in the initial data. Complex conjugate eigenvalue pairs give breathers. The radiation decays as $t^{-1/2}$ and spreads outward. At large $t$, only the solitons remain as coherent structures. The topological charge is conserved: the total count of kinks minus antikinks equals the net winding number of the initial field.`
      },
      {
        q: `Compare: kink-kink vs kink-antikink two-soliton solutions. Use the eigenvalue parameters to distinguish them.`,
        a: `In the two-soliton formula, kink-kink uses $\\lambda_1, \\lambda_2 > 0$ (both positive); kink-antikink uses $\\lambda_1 > 0, \\lambda_2 < 0$. For kink-kink, total charge $Q = +2$: both kinks carry $Q = +1$ and repel. They pass through each other, with the faster one shifted forward. For kink-antikink, total charge $Q = 0$. They can pass through (large relative velocity) or form a breather if the eigenvalues become complex conjugates. The prefactor $(\\lambda_1 + \\lambda_2)/(\\lambda_1 - \\lambda_2)$ changes sign between the two cases, reflecting the different interaction potential.`
      },
      {
        q: `What is the symplectic map for the discretized SG chain? Why is it more efficient than standard time-stepping?`,
        a: `The map advances every normal-mode coordinate $u_s$ and velocity $v_s$ by one fixed time step $T$. Here $\\omega_s$ is the mode frequency, $g$ measures the nonlinear strength, and $e_{is}$ is the matrix that turns mode coordinates into pendulum angles. The map is $\\bar{u}_s = u_s\\cos(\\omega_s T) + \\omega_s^{-1}[v_s - g^{-2}T\\sum_i e_{is}\\sin(g\\sum_r u_r e_{ir})]\\sin(\\omega_s T)$. It preserves the symplectic structure exactly. Phase-space volume is conserved and no numerical dissipation occurs. Standard Runge-Kutta methods add small energy drift over long runs. This map keeps every conserved quantity correct over $t = 10^5$ or more steps with no drift. That makes it the right tool for studying slow energy spreading.`
      },
      {
        q: `A sine-Gordon breather has $\\omega = 0.6$. Compute the spatial width scale and the oscillation period.`,
        a: `Spatial width scale: $1/\\sqrt{1-\\omega^2} = 1/\\sqrt{1-0.36} = 1/\\sqrt{0.64} = 1/0.8 = 1.25$. Oscillation period: $T = 2\\pi/\\omega = 2\\pi/0.6 \\approx 10.47$. The amplitude prefactor is $\\sqrt{1-\\omega^2}/\\omega = 0.8/0.6 \\approx 1.33$. A full pulsation (maximum amplitude to minimum and back) takes about 10.5 time units. The spatial profile is confined within roughly $5$ width-scales on each side of the center, or about $|x| \\lesssim 6.25$.`
      },
      {
        q: `Error-detection: a student claims the kink formula $u = 4\\arctan(e^{\\lambda x + t/\\lambda})$ gives $u(x,0) = 0$ at $x = 0$. Is this correct?`,
        a: `No. At $x = 0$ and $t = 0$, the argument is $e^0 = 1$. So $u(0,0) = 4\\arctan(1) = 4 \\cdot \\pi/4 = \\pi$. The kink midpoint is at $u = \\pi$, not $u = 0$. The value $u = 0$ is only reached as $x \\to -\\infty$. The student confused the midpoint with a boundary value. The kink transitions from $0$ at $x = -\\infty$ through $\\pi$ at $x = 0$ to $2\\pi$ at $x = +\\infty$.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Sine-Gordon Equation and Solitons',
      sections: [
        <>
          <div className="ref-section">
            <h2>Core Equations</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Laboratory form</div>
              <div className="ref-formula-eq">{`$$u_{xx} - \\alpha^2 u_{tt} = \\sin u$$`}</div>
              <div className="ref-formula-desc">
                When to use: physical setup (pendulum chain, Josephson junction). Wave speed is{' '}
                {`$1/\\alpha$`}. Lorentz-invariant when {`$\\alpha = 1$`}.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Characteristic form</div>
              <div className="ref-formula-eq">{`$$u_{\\xi\\eta} = \\sin u, \\quad \\xi = \\tfrac{1}{2}(x - t/\\alpha),\\; \\eta = \\tfrac{1}{2}(x + t/\\alpha)$$`}</div>
              <div className="ref-formula-desc">
                When to use: inverse scattering transform and exact solution methods. Also written{' '}
                {`$u_{xt} = \\sin u$`} with relabeled coordinates.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Kink solution</div>
              <div className="ref-formula-eq">{`$$u(x,t) = 4\\arctan\\!\\left(c\\,e^{\\lambda x + t/\\lambda}\\right), \\quad c = -e^\\mu$$`}</div>
              <div className="ref-formula-desc">
                When to use: one-soliton solution. {`$\\lambda > 0$`}: kink ({`$Q = +1$`},
                {`$0 \\to 2\\pi$`}). {`$\\lambda < 0$`}: antikink ({`$Q = -1$`},{`$2\\pi \\to 0$`}).
                Boosted: replace {`$\\lambda x + t/\\lambda$`} with
                {`$\\gamma(x - vt)$`}, {`$\\gamma = 1/\\sqrt{1-v^2}$`}.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Breather</div>
              <div className="ref-formula-eq">{`$$u(x,t) = 4\\arctan\\!\\left(\\frac{\\sqrt{1-\\omega^2}}{\\omega}\\cdot\\frac{\\sin(\\omega t)}{\\cosh(\\sqrt{1-\\omega^2}\\,x)}\\right), \\quad \\omega \\in (0,1)$$`}</div>
              <div className="ref-formula-desc">
                When to use: bound kink-antikink pair. Localized, time-periodic, {`$Q = 0$`}. Arises
                from two-soliton formula with {`$\\lambda_2 = \\lambda_1^*$`}.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Two-soliton solution</div>
              <div className="ref-formula-eq">{`$$u = 4\\arctan\\!\\left\\{\\frac{\\lambda_1+\\lambda_2}{\\lambda_1-\\lambda_2}\\cdot\\frac{e^{\\theta_1}-e^{\\theta_2}}{1+e^{\\theta_1+\\theta_2}}\\right\\}, \\quad \\theta_n = \\lambda_n x + \\frac{t}{\\lambda_n} + \\mu_n$$`}</div>
              <div className="ref-formula-desc">
                When to use: two-soliton collisions. Real {`$\\lambda_1,\\lambda_2 > 0$`}:
                kink-kink. Opposite signs: kink-antikink. Complex conjugate: breather.
              </div>
            </div>
          </div>

          <div className="ref-section">
            <h2>Soliton Zoo</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Solution</th>
                    <th>Parameters</th>
                    <th>Charge</th>
                    <th>Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kink</td>
                    <td>{`$\\lambda > 0$`}</td>
                    <td>+1</td>
                    <td>{`$0 \\to 2\\pi$`}, steady translation</td>
                  </tr>
                  <tr>
                    <td>Antikink</td>
                    <td>{`$\\lambda < 0$`}</td>
                    <td>-1</td>
                    <td>{`$2\\pi \\to 0$`}, steady translation</td>
                  </tr>
                  <tr>
                    <td>Breather</td>
                    <td>{`$\\lambda_2 = \\lambda_1^*$`}</td>
                    <td>0</td>
                    <td>Localized, time-periodic</td>
                  </tr>
                  <tr>
                    <td>N-soliton</td>
                    <td>N-term kernel</td>
                    <td>{`$\\pm N$`}</td>
                    <td>Elastic collisions, phase shifts only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="ref-section">
            <h2>Inverse Scattering (AKNS)</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">AKNS eigenvalue equation</div>
              <div className="ref-formula-eq">{`$$\\psi_x = \\begin{pmatrix} -i\\zeta & q \\\\ -q & i\\zeta \\end{pmatrix}\\psi, \\quad q = -\\tfrac{1}{2}u_x$$`}</div>
              <div className="ref-formula-desc">
                When to use: forward scattering step. One discrete eigenvalue {`$\\zeta_n$`}
                per soliton.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Scattering data for sech initial condition</div>
              <div className="ref-formula-eq">{`$$q(x,0) = \\lambda\\,\\text{sech}(\\lambda x + \\mu) \\implies \\zeta_1 = \\tfrac{i\\lambda}{2},\\; b_0 = 0,\\; c_1 = -i\\lambda\\,e^{-\\mu}$$`}</div>
              <div className="ref-formula-desc">
                When to use: verifying one-kink initial condition. No reflection implies no
                dispersive radiation.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Field recovery</div>
              <div className="ref-formula-eq">{`$$u_x(x,t) = -4\\,\\partial_x K_{12}(x,x;t)$$`}</div>
              <div className="ref-formula-desc">
                When to use: final inversion step. Solve Marchenko equations for {`$K_{12}$`},
                differentiate, integrate to get {`$u$`}.
              </div>
            </div>
          </div>

          <div className="ref-section">
            <h2>Discretized Chain</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Normal-mode frequencies</div>
              <div className="ref-formula-eq">{`$$\\omega_r = \\frac{2(N+1)}{L}\\sin\\!\\left(\\frac{\\pi r}{2(N+1)}\\right), \\quad r = 1, \\ldots, N$$`}</div>
              <div className="ref-formula-desc">
                When to use: computing mode frequencies of the discretized SG chain. Low-energy
                behavior: modes decouple near these frequencies.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Cnoidal solution</div>
              <div className="ref-formula-eq">{`$$y = 4\\arctan(A\\,\\operatorname{cn}(\\mu x,\\,k_x)\\,\\operatorname{cn}(\\nu t,\\,k_t))$$`}</div>
              <div className="ref-formula-desc">
                When to use: exact periodic travelling wave. {`$m \\to 0$`}: cosine wave.
                {`$m \\to 1$`}: soliton train. Bridge between linear and soliton regimes.
              </div>
            </div>
          </div>

          <div className="ref-section">
            <h2>Related Equations and Tests</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Sinh-Gordon</div>
              <div className="ref-formula-eq">{`$$u_{xt} = \\sinh u$$`}</div>
              <div className="ref-formula-desc">
                When to use: same AKNS structure as SG, hyperbolic nonlinearity. No topological
                solitons: only one vacuum. You get it formally by setting {`$u \\to iu$`} in SG.
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Painleve conjecture (integrability test)</div>
              <div className="ref-formula-eq">{`$$\\text{IST-solvable PDE} \\implies \\text{similarity ODE has only movable poles}$$`}</div>
              <div className="ref-formula-desc">
                When to use: testing if a new PDE is integrable. Find a similarity reduction, check
                for movable branch points. Only poles: strongly integrable. Branch points: not
                integrable by IST.
              </div>
            </div>
          </div>

          <div className="ref-section">
            <h2>Visualizations</h2>
            <SgPendulumChain />
            <SgPotentialVacua />
            <SgKinkAntikink />
          </div>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}
