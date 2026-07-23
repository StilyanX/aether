import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  TraceDetPlane,
  FixedPointPortraits,
  NullclineExplorer,
  MapStabilityChart,
  LimitCycleVdP,
  HopfBifurcation,
  PoincareBendixsonTrap,
  PolarLimitCycle,
  DivergenceFlowCompare
} from '../../../../../components/viz'

export default function FixedPointsAndLimitCycles() {
  const config = {
    cssPrefix: 'fplc',
    documentTitle:
      'Fixed-Point Classification, Limit Cycles, and Poincaré-Bendixson - AETHER',
    learning: {
      groupTitle: 'Chaos and Nonlinear Dynamics',
      category: 'Module 5',
      title: 'Fixed-Point Classification, Limit Cycles, and Poincaré-Bendixson',
      subtitle:
        'Classify every equilibrium, find when orbits close, and prove chaos is impossible in two dimensions.',
      sections: [
        <>
          <div className="lrn-section">
            <h2>What is a Fixed Point?</h2>
            <p>{`You already met fixed points as the equilibrium positions of a system: the states where everything stops moving. For a continuous-time system $\\dot{\\mathbf{x}} = \\mathbf{f}(\\mathbf{x})$, a fixed point $\\mathbf{x}^*$ is any state with $\\mathbf{f}(\\mathbf{x}^*) = 0$. Place the system exactly there and it stays for all time. A pendulum at rest, a population at carrying capacity, a circuit at steady voltage: each is a fixed point.`}</p>
            <p>{`This page is about what happens next: how to classify every kind of fixed point, find when orbits close into cycles instead of resting, and prove which long-time behaviors a 2D system can have. The first new tool is a clean way to locate fixed points in 2D using nullclines.`}</p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`The system $\\dot{x} = x(1-x)$ has two fixed points. Before solving, which one do you expect to be stable and which unstable? Sketch a few arrows on a number line.`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`Set $\\dot{x} = 0$: $x = 0$ or $x = 1$. For $0 < x < 1$, $\\dot{x} > 0$ so trajectories flow toward $x = 1$. For $x > 1$, $\\dot{x} < 0$, also toward $x = 1$. So $x^* = 1$ is stable (a sink) and $x^* = 0$ is unstable (a source).`}</p>
              </details>
            </div>
            <p>{`To find fixed points of a 2D system $\\dot{x} = P(x,y)$, $\\dot{y} = Q(x,y)$: solve $P(x,y) = 0$ and $Q(x,y) = 0$ at the same point. The intersections are the fixed points. Nullclines (the curves where each component vanishes) make this geometric.`}</p>
            <div>
              <NullclineExplorer />
            </div>
            <p>{`The dashed vertical lines show where $\\dot{x} = 0$; the dashed horizontal line shows where $\\dot{y} = 0$. Their intersections are fixed points. Flow arrows confirm which are stable.`}</p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Why must $\\dot{x} = 0$ and $\\dot{y} = 0$ both hold at the same point for a fixed point to exist? What happens if only one is zero?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`A fixed point requires the entire state to stop moving. If only $\\dot{x} = 0$, the $x$-component freezes but the $y$-component keeps changing. The system is still moving: just horizontally. Only when both components are zero simultaneously does the flow stop completely. That is why you need both nullclines to cross at the same location.`}</p>
              </details>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>{`A nullcline separates regions where the flow component changes sign. If $P > 0$ on one side of the $\\dot{x} = 0$ nullcline and $P < 0$ on the other, crossing it reverses the $x$-direction. Fixed points sit precisely where both components reverse sign: where the two nullclines cross.`}</p>
            </div>
          </div>

          <div className="lrn-section">
            <h2>Linear Stability and the Jacobian</h2>
            <p>{`Knowing where fixed points are is not enough. You need to know whether nearby orbits return to them (stable) or flee from them (unstable). Linear stability gives the answer by zooming in.`}</p>
            <p>{`The tool is the same linearization you used for small oscillations. Shift the origin to the fixed point, write $\\mathbf{x}' = \\mathbf{x} - \\mathbf{x}^*$, and keep only the first-order term of the Taylor expansion. The matrix of first derivatives is the Jacobian $J_{ij} = \\partial f_i / \\partial x_j$, evaluated at $\\mathbf{x}^*$:`}</p>
            <div className="lrn-eq">
              <p>{`$$\\dot{x}'_i = \\sum_j J_{ij}\\, x'_j, \\qquad J_{ij} = \\left.\\frac{\\partial f_i}{\\partial x_j}\\right|_{\\mathbf{x}^*}$$`}</p>
            </div>
            <p>{`The step is just dropping the second-order and higher terms: near the fixed point $\\mathbf{x}'$ is tiny, so $\\mathbf{x}'^2$ is tinier still and the linear term alone sets the short-time fate of every small perturbation.`}</p>
            <p>{`The new question this page answers is how to read 2D stability straight off that matrix. The linearized system has solution $x'_i(t) = x'_{i0}\\, e^{\\nu_i t}$, where the $\\nu_i$ are the eigenvalues of $J$ (the growth rates of each independent direction). Three cases:`}</p>
            <ul className="lrn-list">
              <li>{`$\\mathrm{Re}(\\nu_i) < 0$ for all $i$: perturbation decays. The fixed point is a stable attractor.`}</li>
              <li>{`$\\mathrm{Re}(\\nu_i) > 0$ for any $i$: perturbation grows in that direction. The fixed point is unstable.`}</li>
              <li>{`$\\mathrm{Re}(\\nu_i) = 0$: the linear analysis is inconclusive. Nonlinear terms decide.`}</li>
            </ul>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>{`The eigenvalue $\\nu_i$ belongs to the $i$-th principal direction of the linearized flow. The solution in that direction is $e^{\\nu_i t}$. If $\\mathrm{Re}(\\nu_i) < 0$, the exponential decays. If the real part is positive, it grows. Near the fixed point the linear approximation holds for short times. That is long enough to determine the stability type.`}</p>
            </div>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>{`Compute the Jacobian for $\\dot{x} = -2x + y$, $\\dot{y} = -y$ at the fixed point $(0,0)$. Find the eigenvalues and classify the stability.`}</p>
                <p>{`Step 1: Write the Jacobian. Each entry is a partial derivative of the right-hand side.`}</p>
                <p>{`$J = \\begin{pmatrix} \\partial(-2x+y)/\\partial x & \\partial(-2x+y)/\\partial y \\\\ \\partial(-y)/\\partial x & \\partial(-y)/\\partial y \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 0 & -1 \\end{pmatrix}$`}</p>
                <p>{`Step 2: Find eigenvalues. The matrix is triangular, so they are the diagonal entries: $\\nu_1 = -2$, $\\nu_2 = -1$.`}</p>
                <p>{`Step 3: Both real parts are negative, so the origin is a stable node. Every perturbation decays exponentially toward zero.`}</p>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>{`Find the Jacobian of $\\dot{x} = x - y^2$, $\\dot{y} = -y$ at the fixed point $(0,0)$.`}</p>
                <ol className="lrn-list">
                  <li>{`Write each partial derivative. (Hint: $\\partial(x - y^2)/\\partial y = -2y$, evaluated at $(0,0)$ gives $0$.)`}</li>
                  <li>{`Read off the trace $\\tau$ and determinant $\\Delta$.`}</li>
                  <li>{`State the stability type.`}</li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>{`Find the Jacobian of $\\dot{x} = -x + 2y$, $\\dot{y} = -2x - y$ at $(0,0)$. Compute trace and determinant. Find the eigenvalues and state the stability type.`}</p>
              </div>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`In the complete example, only the diagonal entries mattered for the eigenvalues. Why does a triangular Jacobian make eigenvalue computation easier?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`The eigenvalues of a triangular matrix are its diagonal entries. No quadratic formula needed. The characteristic polynomial factors immediately: $\\det(J - \\nu I) = (-2 - \\nu)(-1 - \\nu) = 0$, giving $\\nu = -2$ and $\\nu = -1$ by inspection. For a general 2x2 matrix you need the full trace-determinant formula: $\\nu = \\tfrac{1}{2}(\\tau \\pm \\sqrt{\\tau^2 - 4\\Delta})$.`}</p>
              </details>
            </div>
          </div>

          <div className="lrn-section">
            <h2>The Five Types of 2D Fixed Points</h2>
            <p>{`For a 2D linear system $\\dot{\\mathbf{x}} = A\\mathbf{x}$, the full classification lives in two numbers: the trace $\\tau = \\mathrm{Tr}\\, A$ (the sum of the diagonal entries) and the determinant $\\Delta = \\det A$ (which measures how the matrix scales area). Here is the classification plane. Each region corresponds to one type.`}</p>
            <div>
              <TraceDetPlane />
            </div>
            <p>{`The eigenvalues are $\\nu = \\tfrac{1}{2}\\left(\\tau \\pm \\sqrt{\\tau^2 - 4\\Delta}\\right)$. The discriminant $\\tau^2 - 4\\Delta$ separates nodes and saddles (real eigenvalues) from spirals and centers (complex eigenvalues). Right on the parabola $\\tau^2 = 4\\Delta$ the two eigenvalues are equal, giving a borderline improper node (worked below).`}</p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`A matrix has $\\tau = -5$ and $\\Delta = 6$. Before checking the discriminant, do you expect a stable or unstable fixed point? Do you expect oscillation?`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`The product of eigenvalues is $\\Delta = 6 > 0$, so both eigenvalues share a sign. Their sum is $\\tau = -5 < 0$, so both are negative. The fixed point is stable. Check oscillation: $\\tau^2 - 4\\Delta = 25 - 24 = 1 > 0$. The eigenvalues are real, so there is no oscillation. It is a stable node.`}</p>
              </details>
            </div>
            <p>{`The five types, reading off the regions:`}</p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Stable Node</span>
              <div className="lrn-definition-desc">
                <p>{`$\\Delta > 0$, $\\tau < 0$, $\\tau^2 > 4\\Delta$ (below parabola). Both eigenvalues real and negative. Trajectories settle onto the origin along straight-line directions. Physical example: a mass on a spring with heavy damping.`}</p>
              </div>
            </div>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Unstable Node</span>
              <div className="lrn-definition-desc">
                <p>{`$\\Delta > 0$, $\\tau > 0$, $\\tau^2 > 4\\Delta$. Both eigenvalues real and positive. Trajectories diverge. Physical example: an inverted pendulum near its upright position.`}</p>
              </div>
            </div>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Saddle</span>
              <div className="lrn-definition-desc">
                <p>{`$\\Delta < 0$. One eigenvalue positive, one negative. Trajectories approach along one axis and flee along the other. Always unstable. Physical example: a ball balanced on a hilltop.`}</p>
              </div>
            </div>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Spiral (Focus)</span>
              <div className="lrn-definition-desc">
                <p>{`$\\tau^2 < 4\\Delta$ (above parabola), $\\tau \\neq 0$. Complex conjugate eigenvalues with nonzero real part. Trajectories spiral in ($\\tau < 0$, stable) or out ($\\tau > 0$, unstable). Physical example: a damped RLC circuit near its rest state.`}</p>
              </div>
            </div>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Center</span>
              <div className="lrn-definition-desc">
                <p>{`$\\tau = 0$, $\\Delta > 0$. Purely imaginary eigenvalues. Trajectories form closed ellipses. Centers are fragile: any small dissipation turns them into spirals. Physical example: the ideal (undamped) pendulum.`}</p>
              </div>
            </div>
            <p>{`Here is what each type looks like in phase space:`}</p>
            <div>
              <FixedPointPortraits />
            </div>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Stable Node</span>
                <p>{`Real eigenvalues, both negative. Trajectories approach the origin tangent to the slow eigenvector. No oscillation. Example: $A = \\begin{pmatrix} -2 & 0 \\\\ 0 & -1 \\end{pmatrix}$.`}</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Stable Spiral</span>
                <p>{`Complex eigenvalues, negative real part. Trajectories wind inward while rotating. Requires an imaginary component in the eigenvalue. Example: $A = \\begin{pmatrix} -0.3 & -2 \\\\ 2 & -0.3 \\end{pmatrix}$.`}</p>
              </div>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>{`The trace $\\tau = \\nu_1 + \\nu_2$ equals the divergence of the vector field: $\\mathrm{div}\\, \\mathbf{f} = \\partial_x f + \\partial_y g$. A center requires $\\tau = 0$: a Hamiltonian property. The determinant $\\Delta = \\nu_1 \\nu_2$ gives the product: if negative, eigenvalues have opposite signs (saddle). These two numbers capture the complete local shape of the flow. See "Conservative vs. Dissipative Flows" below for the full consequence of $\\tau = 0$.`}</p>
            </div>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>{`Classify the fixed point of $\\dot{x} = x - y$, $\\dot{y} = x + 3y$ at the origin.`}</p>
                <p>{`Step 1: Write the Jacobian. $A = \\begin{pmatrix} 1 & -1 \\\\ 1 & 3 \\end{pmatrix}$.`}</p>
                <p>{`Step 2: Compute $\\tau = 1 + 3 = 4$ and $\\Delta = (1)(3) - (-1)(1) = 3 + 1 = 4$.`}</p>
                <p>{`Step 3: Check discriminant: $\\tau^2 - 4\\Delta = 16 - 16 = 0$. On the parabola, a degenerate (improper) node. Both eigenvalues equal $\\tfrac{\\tau}{2} = 2 > 0$.`}</p>
                <p>{`Conclusion: unstable improper node. Trajectories diverge along a single direction.`}</p>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>{`Classify the fixed point of $\\dot{x} = -x + 2y$, $\\dot{y} = -2x - y$.`}</p>
                <ol className="lrn-list">
                  <li>{`Write the Jacobian $A$.`}</li>
                  <li>{`Compute $\\tau$ and $\\Delta$. (Hint: $\\tau = -2$.)`}</li>
                  <li>{`Is $\\tau^2 - 4\\Delta$ positive, negative, or zero? What type is this?`}</li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>{`Classify the fixed point of $\\dot{x} = y$, $\\dot{y} = -x + 0.1(1-x^2)y$ at the origin. Set up the Jacobian, compute $\\tau$ and $\\Delta$, and state the type.`}</p>
              </div>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`In the complete example above, the discriminant came out to exactly zero. Why does that put the fixed point on the parabola, and why does it make the node "improper"?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`The parabola is the curve $\\Delta = \\tau^2/4$, which is the same as $\\tau^2 - 4\\Delta = 0$. So a zero discriminant lands you exactly on it.`}</p>
                <p>{`On the parabola, the two eigenvalues are equal: $\\nu_1 = \\nu_2 = \\tau/2$. A repeated eigenvalue usually gives only one independent eigenvector, not two. With just one direction of straight-line approach, the node is called improper. Trajectories bend in toward that single direction instead of running straight along two axes.`}</p>
              </details>
            </div>
            <p>{`The two examples above had real eigenvalues. Here are the two complex-eigenvalue cases, the spiral and the center, worked the same way.`}</p>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE: SPIRAL</span>
                <p>{`Classify the fixed point of $\\dot{x} = -x - 2y$, $\\dot{y} = 2x - y$ at the origin.`}</p>
                <p>{`Step 1: Write the Jacobian. $A = \\begin{pmatrix} -1 & -2 \\\\ 2 & -1 \\end{pmatrix}$.`}</p>
                <p>{`Step 2: Compute $\\tau = -1 + (-1) = -2$ and $\\Delta = (-1)(-1) - (-2)(2) = 1 + 4 = 5$.`}</p>
                <p>{`Step 3: Check the discriminant: $\\tau^2 - 4\\Delta = 4 - 20 = -16 < 0$. Negative, so the eigenvalues are complex: $\\nu = \\tfrac{1}{2}(-2 \\pm \\sqrt{-16}) = -1 \\pm 2i$.`}</p>
                <p>{`Conclusion: complex eigenvalues with negative real part ($-1 < 0$) make this a stable spiral. Trajectories rotate (the $\\pm 2i$ part) while winding inward (the $-1$ part).`}</p>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE: CENTER</span>
                <p>{`Classify the fixed point of $\\dot{x} = y$, $\\dot{y} = -4x$ at the origin.`}</p>
                <p>{`Step 1: Write the Jacobian. $A = \\begin{pmatrix} 0 & 1 \\\\ -4 & 0 \\end{pmatrix}$.`}</p>
                <p>{`Step 2: Compute $\\tau = 0 + 0 = 0$ and $\\Delta = (0)(0) - (1)(-4) = 4 > 0$.`}</p>
                <p>{`Step 3: With $\\tau = 0$ and $\\Delta > 0$, the eigenvalues are purely imaginary: $\\nu = \\pm\\sqrt{-4} = \\pm 2i$. No real part means no growth or decay.`}</p>
                <p>{`Conclusion: a center. Trajectories form closed ellipses, looping forever at angular frequency 2. Any small dissipation would shift $\\tau$ below zero and turn this into a stable spiral.`}</p>
              </div>
            </div>
          </div>

          <div className="lrn-section">
            <h2>The Same Test for Iterated Maps</h2>
            <p>{`Not every system flows smoothly. Some advance in discrete steps. A map sends one state to the next: $\\mathbf{x}_{n+1} = M(\\mathbf{x}_n)$. A Poincaré section turns any cycle into such a map, so this case is everywhere. Stability still comes from the Jacobian $A$ at the fixed point, but the test changes shape.`}</p>
            <p>{`For a flow, a fixed point is stable when the eigenvalues have negative real part. For a map, you compare each eigenvalue's size to one. If $|\\lambda| < 1$, every step shrinks and the orbit settles. If $|\\lambda| > 1$, every step grows and the orbit flies apart.`}</p>
            <p>{`Many mechanical maps preserve area. Then $\\det A = 1$, so the two eigenvalues multiply to one. A single number now decides everything: the trace.`}</p>
            <div className="lrn-eq lrn-eq-hero">
              <p>{`$$|\\mathrm{Tr}\\, A| < 2 \\;\\Rightarrow\\; \\text{stable (elliptic)}, \\qquad |\\mathrm{Tr}\\, A| > 2 \\;\\Rightarrow\\; \\text{unstable (hyperbolic)}$$`}</p>
            </div>
            <p>{`Inside the band the eigenvalues are a complex pair sitting on the unit circle, so the orbit circles its fixed point forever. Outside it they split into a real reciprocal pair $\\lambda$ and $1/\\lambda$, and the orbit escapes along one direction. The boundary $|\\mathrm{Tr}\\, A| = 2$ is the discrete cousin of the parabola you just met.`}</p>
            <p>{`The Fermi accelerator map is the classic example: a ball bounces between a fixed wall and a slowly oscillating one, gaining or losing speed at each hit. Its fixed points stay stable only where the trace lands inside the band.`}</p>
            <div>
              <MapStabilityChart />
            </div>
            <p>{`Drag the fixed-point velocity $u_0$ along the branch. The marker glows while $|\\mathrm{Tr}\\, A| < 2$ and dims when it leaves the band. The inset tracks the two eigenvalues: paired on the unit circle when stable, split onto the real axis when not.`}</p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Why does $\\det A = 1$ let a single number (the trace) decide stability, when a general map needs both eigenvalues?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`The eigenvalues obey $\\lambda_1 \\lambda_2 = \\det A = 1$ and $\\lambda_1 + \\lambda_2 = \\mathrm{Tr}\\, A$. The product is fixed at one, so the two eigenvalues are locked together: knowing their sum pins down the pair. Solve the quadratic $\\lambda^2 - (\\mathrm{Tr}\\, A)\\lambda + 1 = 0$ and the discriminant is $(\\mathrm{Tr}\\, A)^2 - 4$.`}</p>
                <p>{`When $|\\mathrm{Tr}\\, A| < 2$ that discriminant is negative, giving complex roots of size one (on the unit circle). When $|\\mathrm{Tr}\\, A| > 2$ the roots are real and reciprocal, so one exceeds one in size and the orbit grows. The trace alone draws the line.`}</p>
              </details>
            </div>
          </div>

          <div className="lrn-section">
            <h2>Limit Cycles</h2>
            <p>{`A fixed point is a zero-dimensional attractor. A limit cycle is a one-dimensional attractor: an isolated closed orbit that neighboring trajectories approach (or flee from).`}</p>
            <p>{`Reach for the limit-cycle idea whenever a system settles into a steady rhythm on its own. Heartbeats, lasers, and chemical clocks all rest on a stable limit cycle.`}</p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Limit Cycle</span>
              <div className="lrn-definition-desc">
                <p>{`An isolated closed orbit in phase space. Nearby trajectories spiral toward it (stable/attracting), away from it (unstable/repelling), or toward from one side and away from the other (semi-stable). The isolation distinguishes a limit cycle from the continuous family of closed orbits around a center.`}</p>
              </div>
            </div>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Center</span>
                <p>{`Conservative (Hamiltonian) system. Infinitely many closed orbits fill the plane. Any perturbation shifts you to a different orbit. Orbits are not isolated. No amplitude is preferred.`}</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Limit Cycle</span>
                <p>{`Nonlinear system. A single isolated orbit. Perturbations from inside and outside both return to the same orbit. The amplitude is set by the system, not by initial conditions.`}</p>
              </div>
            </div>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`A clock pendulum loses energy to friction but is driven by a mainspring. It eventually settles into steady oscillation regardless of how hard you push it at the start. What type of attractor describes this steady motion?`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`A stable limit cycle. The pendulum's amplitude is fixed by the balance between damping and driving, not by initial conditions. Start it with too much energy and it loses amplitude; start it with too little and it gains. The limit cycle is the unique periodic orbit that both inner and outer trajectories approach.`}</p>
              </details>
            </div>
            <p>{`Limit cycles require a nonlinear system. Nonlinearity is the ingredient that pins the orbit to a specific amplitude.`}</p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>{`A center has a continuous family of closed orbits filling the plane. Every initial condition lands on a different closed orbit. A limit cycle is isolated: there is a neighborhood around it containing no other closed orbit. Nonlinear terms create the isolation: the flow pushes in on one side and pushes out on the other (or pushes in from both sides for a stable cycle). Linear systems cannot create this isolation because their orbits come in continuous families governed by the eigenvalue ratio.`}</p>
            </div>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>{`Show that the polar system $\\dot{r} = r(1 - r^2)$, $\\dot{\\theta} = 1$ has a stable limit cycle, and find its radius.`}</p>
                <p>{`Step 1: The angle equation $\\dot{\\theta} = 1$ means the orbit keeps rotating at constant speed. A closed orbit is a circle of fixed radius.`}</p>
                <p>{`Step 2: A circle has constant radius, so set $\\dot{r} = 0$. Solve $r(1 - r^2) = 0$. The roots are $r = 0$ (the origin) and $r = 1$.`}</p>
                <p>{`Step 3: The root $r = 1$ is a candidate limit cycle. Check its stability by the sign of $\\dot{r}$ nearby. For $0 < r < 1$, $\\dot{r} > 0$, so the radius grows toward 1. For $r > 1$, $\\dot{r} < 0$, so the radius shrinks toward 1.`}</p>
                <p>{`Conclusion: orbits approach $r = 1$ from both sides. The circle of radius 1 is a stable limit cycle.`}</p>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>{`Find the limit-cycle radius of $\\dot{r} = 2r - r^3$, $\\dot{\\theta} = 3$, and decide whether it is stable.`}</p>
                <ol className="lrn-list">
                  <li>{`Set $\\dot{r} = 0$ and factor out $r$.`}</li>
                  <li>{`Solve for the nonzero radius. (Hint: $r^2 = 2$.)`}</li>
                  <li>{`Check the sign of $\\dot{r}$ just inside and just outside that radius to decide stability.`}</li>
                </ol>
              </div>
            </div>
            <div>
              <PolarLimitCycle />
            </div>
            <p>{`The solid circle at $r = 1$ is the stable limit cycle. Trajectories starting inside and outside both spiral toward it.`}</p>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`The origin $r = 0$ also solved $\\dot{r} = 0$. Why is it a fixed point and not a limit cycle?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`A limit cycle is a closed orbit with positive radius, a loop the system travels around. The point $r = 0$ has zero radius, so it is a single point, not a loop.`}</p>
                <p>{`Check its stability for completeness. Near the origin, $\\dot{r} \\approx r > 0$, so trajectories move away. The origin is an unstable fixed point (a spiral source, since $\\dot{\\theta} = 1$ adds rotation). Every nonzero start spirals out to the limit cycle at $r = 1$.`}</p>
              </details>
            </div>
          </div>

          <div className="lrn-section">
            <h2>Hopf Bifurcation: Birth of a Limit Cycle</h2>
            <p>{`How does a limit cycle come into existence? The most common route is the Hopf bifurcation: as a parameter $\\mu$ crosses zero, a stable fixed point loses stability and a limit cycle is born.`}</p>
            <p>{`Reach for the Hopf picture whenever a steady state turns into a steady oscillation as you tune one knob. Engine idle to flutter, calm to heartbeat: all follow this pattern.`}</p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`A system starts at a stable resting point. You slowly increase a parameter $\\mu$ from negative to positive. What do you expect to happen to the motion as $\\mu$ passes zero?`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`While $\\mu < 0$, the resting point stays stable and the system sits still. As $\\mu$ passes zero, the resting point goes unstable and a small loop appears around it. The system begins to oscillate, and the oscillation grows in size as $\\mu$ grows. A point attractor becomes a cycle attractor.`}</p>
              </details>
            </div>
            <p>{`The simplest model that captures this birth is the supercritical normal form, where $\\mu$ is the tuning knob, $\\omega_0$ is the angular frequency of rotation, and the cubic term caps the growth at a finite radius:`}</p>
            <div className="lrn-eq lrn-eq-hero">
              <p>{`$$\\dot{r} = \\mu r - r^3, \\qquad \\dot{\\theta} = \\omega_0$$`}</p>
            </div>
            <p>{`Set $\\dot{r} = 0$: $r(\\mu - r^2) = 0$, so $r = 0$ or $r = \\sqrt{\\mu}$. For $\\mu < 0$, only $r = 0$ exists and it is a stable spiral sink. For $\\mu > 0$, the origin turns unstable and a stable limit cycle appears at $r = \\sqrt{\\mu}$. The cycle radius grows from zero as $\\mu$ increases past zero.`}</p>
            <div>
              <HopfBifurcation />
            </div>
            <div className="lrn-insight">
              <p>{`This is the main way limit cycles are born: a steady state turns into a steady oscillation as one parameter crosses a threshold. The full family of ways a system can change qualitatively as a parameter varies (saddle-node, transcritical, pitchfork, period-doubling, and the supercritical and subcritical forms of this Hopf birth) is its own topic. Here you need only the headline: cross the threshold and a limit cycle appears.`}</p>
            </div>
          </div>

          <div className="lrn-section">
            <h2>Van der Pol and Liénard's Theorem</h2>
            <p>{`The van der Pol oscillator is the standard physical example of a limit cycle. It models electrical circuits with nonlinear damping and appears in biology (cardiac rhythms), neuroscience, and engineering.`}</p>
            <p>{`Reach for this model whenever a real system holds a steady beat on its own, with the amplitude set by the system, not by how you start it. Use Liénard's theorem to prove the cycle is unique.`}</p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`The van der Pol damping is negative for small swings and positive for large swings. If you start the oscillator with a tiny push, what happens to its amplitude over time? What if you start it with a huge push?`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`A tiny start sits in the negative-damping zone, so energy flows in and the swing grows. A huge start sits in the positive-damping zone, so energy drains and the swing shrinks. Both ends move toward the same middle amplitude. That balance amplitude is the stable limit cycle.`}</p>
              </details>
            </div>
            <p>{`The van der Pol equation is:`}</p>
            <div className="lrn-eq">
              <p>{`$$\\ddot{x} - \\mu(1 - x^2)\\dot{x} + x = 0$$`}</p>
            </div>
            <p>{`The term $-\\mu(1-x^2)\\dot{x}$ acts as negative damping for $|x| < 1$ (energy input) and positive damping for $|x| > 1$ (energy removal). This self-regulating mechanism locks the oscillation amplitude.`}</p>
            <p>{`As a 2D system: $\\dot{x} = y$, $\\dot{y} = \\mu(1 - x^2)y - x$. The only fixed point is the origin. For $\\mu > 0$, the origin is an unstable spiral and a stable limit cycle exists.`}</p>
            <div>
              <LimitCycleVdP />
            </div>
            <p>{`Both trajectories, starting inside and outside the limit cycle, settle onto the same closed orbit. Increase $\\mu$ and the oscillation becomes a relaxation oscillation: the strong nonlinear damping splits each cycle into a slow charging phase and a sudden rapid discharge, like a capacitor filling slowly then dumping its charge.`}</p>
            <p>{`Liénard's theorem gives conditions guaranteeing a unique stable limit cycle. For a system $\\ddot{x} + f(x)\\dot{x} + g(x) = 0$:`}</p>
            <ul className="lrn-list">
              <li>{`$f(x)$ and $g(x)$ are continuous. $f$ is even ($f(-x) = f(x)$) and $g$ is odd ($g(-x) = -g(x)$).`}</li>
              <li>{`$g(x) > 0$ for $x > 0$.`}</li>
              <li>{`$F(x) = \\int_0^x f(t)\\,dt$ has exactly one positive zero at $x = a$, is negative for $0 < x < a$, positive and nondecreasing for $x > a$, and $F(x) \\to \\infty$ as $x \\to \\infty$.`}</li>
            </ul>
            <p>{`Under these conditions, the system has exactly one stable limit cycle surrounding the origin. The van der Pol oscillator satisfies these conditions for $\\mu > 0$.`}</p>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>{`Verify the three Liénard conditions for the van der Pol equation with $\\mu > 0$.`}</p>
                <p>{`Step 1: Identify $f$ and $g$. Rewrite $\\ddot{x} - \\mu(1-x^2)\\dot{x} + x = 0$ as $\\ddot{x} + f(x)\\dot{x} + g(x) = 0$ with $f(x) = -\\mu(1-x^2)$ and $g(x) = x$.`}</p>
                <p>{`Step 2: Check symmetry. $f(-x) = -\\mu(1-x^2) = f(x)$, so $f$ is even. $g(-x) = -x = -g(x)$, so $g$ is odd. Condition 1 holds. Also $g(x) = x > 0$ for $x > 0$. Condition 2 holds.`}</p>
                <p>{`Step 3: Compute $F(x) = \\int_0^x f(t)\\,dt = \\int_0^x -\\mu(1-t^2)\\,dt = -\\mu(x - \\tfrac{x^3}{3})$. The positive zero is where $x - \\tfrac{x^3}{3} = 0$, giving $x = \\sqrt{3}$. For $0 < x < \\sqrt{3}$, $F(x) < 0$. For $x > \\sqrt{3}$, $F(x) > 0$ and grows without bound. Condition 3 holds. The theorem guarantees exactly one stable limit cycle.`}</p>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>{`For the system $\\ddot{x} + (x^2 - 1)\\dot{x} + x = 0$, check whether Liénard's conditions are met.`}</p>
                <ol className="lrn-list">
                  <li>{`Identify $f(x) = x^2 - 1$ and $g(x) = x$. Check symmetry: is $f$ even? Is $g$ odd?`}</li>
                  <li>{`Compute $F(x) = \\int_0^x (t^2-1)\\,dt$. (Hint: $F(x) = \\tfrac{x^3}{3} - x$.)`}</li>
                  <li>{`Find the single positive zero of $F(x)$ and check the sign behavior. State whether the theorem applies.`}</li>
                </ol>
              </div>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Why does the van der Pol oscillator's damping term $-\\mu(1-x^2)\\dot{x}$ cause the amplitude to self-regulate? Trace the energy argument for a trajectory starting near $x = 0$.`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`Near the origin ($|x| < 1$), the factor $(1 - x^2) > 0$, so the damping coefficient $-\\mu(1-x^2)$ is negative. Negative damping means energy flows into the oscillation: the amplitude grows. Once $|x| > 1$, the factor $(1-x^2) < 0$, damping becomes positive, so energy is removed. The amplitude shrinks back. The limit cycle sits at the amplitude where energy input and removal exactly balance, time-averaged over one cycle.`}</p>
              </details>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>{`Liénard's theorem matches the van der Pol equation piece by piece. Here $f(x) = -\\mu(1-x^2)$ and $g(x) = x$. The function $g(x) = x$ is odd and positive for $x > 0$, as required.`}</p>
              <p>{`The integral $F(x) = -\\mu(x - x^3/3)$ has a single positive zero at $x = \\sqrt{3}$. It is negative just inside that zero and rises without bound past it. These are exactly the theorem's conditions. So the theorem guarantees one stable limit cycle, which is why van der Pol always settles to a single steady beat.`}</p>
            </div>
          </div>

          <div className="lrn-section">
            <h2>Conservative vs. Dissipative Flows</h2>
            <p>{`The undamped pendulum is a conservative system: it keeps looping forever. Add even a small amount of friction and the loops slowly shrink. The divergence test tells you which regime you are in.`}</p>
            <p>{`Reach for the divergence test whenever a phase portrait looks like a center but you are not sure. The divergence tells you if volume is truly conserved or quietly leaking.`}</p>
            <div>
              <DivergenceFlowCompare />
            </div>
            <p>{`Left: conservative system ($\\Lambda = 0$), closed ellipses, a true center. Right: the same system with small damping ($\\Lambda = -0.2$), inward spirals. The two look similar at first glance but are physically different.`}</p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`Two systems both show orbits that look like closed loops on screen. One has $\\mathrm{div}\\,\\mathbf{f} = 0$ and the other has $\\mathrm{div}\\,\\mathbf{f} = -0.01$. Which one has true closed loops, and which is secretly spiraling?`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`The system with zero divergence conserves phase space volume, so its loops stay closed forever. It is a true center. The system with negative divergence loses a little volume each cycle, so its loops slowly shrink inward. It is a stable spiral that only looks closed over a few orbits.`}</p>
              </details>
            </div>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Conservative (Hamiltonian)</span>
                <p>{`$\\mathrm{div}\\,\\mathbf{f} = 0$ everywhere. Phase space volume is conserved (Liouville's theorem). Centers are possible. Spirals are impossible: a spiral would require volume to contract or expand. Fixed points are either centers or saddles.`}</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Dissipative</span>
                <p>{`$\\mathrm{div}\\,\\mathbf{f} < 0$ on average. Phase space volume shrinks to zero over time. Attractors (stable spirals, nodes, limit cycles) are possible. Centers are impossible: any perturbation turns them into spirals.`}</p>
              </div>
            </div>
            <p>{`This directly supports the center-vs-spiral distinction from "The Five Types of 2D Fixed Points." If a simulation looks like a center, check the divergence. A nonzero divergence means it is actually a spiral.`}</p>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>{`$\\mathrm{div}\\,\\mathbf{f} = \\sum_i \\partial f_i / \\partial x_i$ is the instantaneous rate of fractional volume change. Liouville's theorem says this equals zero for Hamiltonian flow. A center requires orbits of exactly constant radius, with no net volume change per orbit. Dissipation means $\\mathrm{div}\\,\\mathbf{f} < 0$, so a small blob of initial conditions shrinks over time. This makes limit cycles and stable spirals possible but centers impossible.`}</p>
            </div>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>{`Decide whether $\\dot{x} = y$, $\\dot{y} = -x - 0.2y$ is conservative or dissipative, and say what that allows.`}</p>
                <p>{`Step 1: Write the two components. $f_1 = y$ and $f_2 = -x - 0.2y$.`}</p>
                <p>{`Step 2: Compute the divergence. $\\mathrm{div}\\,\\mathbf{f} = \\frac{\\partial f_1}{\\partial x} + \\frac{\\partial f_2}{\\partial y} = 0 + (-0.2) = -0.2$.`}</p>
                <p>{`Step 3: The divergence is negative everywhere, so phase space volume shrinks. The system is dissipative.`}</p>
                <p>{`Conclusion: a true center is impossible here. The origin is a stable spiral. Attractors like sinks and limit cycles are allowed.`}</p>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>{`Decide whether $\\dot{x} = y$, $\\dot{y} = -\\sin x - 0.3y$ (the damped pendulum) is conservative or dissipative.`}</p>
                <ol className="lrn-list">
                  <li>{`Write $f_1$ and $f_2$.`}</li>
                  <li>{`Compute $\\partial f_1/\\partial x$ and $\\partial f_2/\\partial y$ and add them. (Hint: $\\partial(-\\sin x)/\\partial y = 0$.)`}</li>
                  <li>{`State whether centers are possible.`}</li>
                </ol>
              </div>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`In the complete example, only the $-0.2y$ term contributed to the divergence. Why did the $y$ and $-x$ terms contribute nothing?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`Divergence sums each component's derivative with respect to its own variable: $\\partial f_1/\\partial x$ and $\\partial f_2/\\partial y$.`}</p>
                <p>{`The term $f_1 = y$ has no $x$ in it, so $\\partial f_1/\\partial x = 0$. The term $-x$ in $f_2$ has no $y$, so it drops out of $\\partial f_2/\\partial y$. Only the $-0.2y$ piece depends on $y$, giving the $-0.2$. The damping coefficient alone sets the volume change rate.`}</p>
              </details>
            </div>
          </div>

          <div className="lrn-section">
            <h2>The Poincaré-Bendixson Theorem</h2>
            <p>{`The Poincaré-Bendixson theorem is the strongest result in 2D dynamics. It says that bounded orbits must settle somewhere simple. They cannot wander chaotically. It applies to autonomous systems: systems whose rule $\\mathbf{f}(\\mathbf{x})$ has no explicit time dependence, so the flow at a point never changes.`}</p>
            <p>{`This theorem explains why a pacemaker cell fires repeatedly. Once its trajectory enters a bounded region with no stable resting point, it must settle into a steady beat. The same argument applies to the van der Pol circuit, the Belousov-Zhabotinsky chemical clock, and predator-prey cycles in ecology.`}</p>
            <div className="lrn-insight">
              <p>{`Chaos is impossible in any autonomous 2D system. Poincaré-Bendixson forbids it: every bounded orbit in 2D must approach either a fixed point or a limit cycle. Three dimensions are the minimum for chaotic behavior.`}</p>
            </div>
            <p>{`Reach for this theorem when you want to prove a limit cycle exists without solving the system. You build a trapping region with no fixed points, and the theorem hands you the cycle.`}</p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Poincaré-Bendixson Theorem</span>
              <div className="lrn-definition-desc">
                <p>{`Let $R$ be a closed, bounded region of the 2D phase plane containing no fixed points. If a trajectory enters $R$ and stays in $R$ for all future time, then the trajectory must either be a closed orbit itself, or it must approach a closed orbit (limit cycle). There is no other possibility.`}</p>
              </div>
            </div>
            <p>{`The theorem works by ruling out everything else. In 2D, trajectories cannot cross (uniqueness of solutions). A bounded trajectory that avoids fixed points must keep turning. The only object it can approach without crossing itself is a closed loop.`}</p>
            <div>
              <PoincareBendixsonTrap />
            </div>
            <p>{`The annular region (shaded ring) has inward-pointing flow on both boundaries. Any trajectory entering the annulus cannot escape. The annulus contains no fixed points. By Poincaré-Bendixson, every trajectory in the annulus must approach the limit cycle shown.`}</p>
            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`You compute that a 2D autonomous system has a fixed point at the origin which is an unstable spiral ($\\mu > 0$). You also know that all trajectories stay in a disk of radius 3. What must happen to every trajectory?`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>{`The trajectories cannot settle onto the origin (it is unstable) and cannot escape the disk. They are bounded. The trapping region can be taken as an annulus with inner boundary just outside the origin and outer boundary at the disk boundary. No fixed points in the annulus. By Poincaré-Bendixson, every trajectory must approach a limit cycle inside the annulus.`}</p>
              </details>
            </div>
            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>{`Build a trapping region to prove a limit cycle exists for $\\dot{r} = r(1 - r^2)$, $\\dot{\\theta} = 1$.`}</p>
                <p>{`Step 1: Find fixed points. $\\dot{r} = 0$ gives $r = 0$ (the origin). The origin is an unstable fixed point (since $d\\dot{r}/dr = 1 > 0$ at $r = 0$).`}</p>
                <p>{`Step 2: Define the annulus $0.5 \\leq r \\leq 1.5$. Check the inner boundary $r = 0.5$: $\\dot{r} = 0.5(1 - 0.25) = 0.375 > 0$. Flow points outward (into the annulus). Check the outer boundary $r = 1.5$: $\\dot{r} = 1.5(1 - 2.25) = -1.875 < 0$. Flow points inward (into the annulus).`}</p>
                <p>{`Step 3: The annulus has inward flow on both boundaries, so no trajectory escapes. The only fixed point, $r = 0$, is outside the annulus. By Poincaré-Bendixson, every trajectory in the annulus approaches a limit cycle.`}</p>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <p>{`For a system with an unstable node at the origin and all trajectories bounded in a disk of radius 4, set up a trapping region.`}</p>
                <ol className="lrn-list">
                  <li>{`Choose an annulus with inner radius just outside the origin (try $r = 0.2$) and outer radius just inside the disk boundary (try $r = 3.8$).`}</li>
                  <li>{`State why the origin sits outside the annulus.`}</li>
                  <li>{`Explain why Poincaré-Bendixson guarantees a limit cycle in the annulus.`}</li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>{`A system has one fixed point, which is an unstable spiral. A trapping region is an annular disk around it with inward flow on both boundaries. If a fixed point sits inside the annulus, does the Poincaré-Bendixson argument still guarantee a limit cycle? Why or why not?`}</p>
              </div>
            </div>
            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">2D Autonomous Flow</span>
                <p>{`Bounded trajectory with no fixed points in its trapping region must approach a limit cycle. In 2D, trajectories cannot wind past each other without crossing, and crossing violates uniqueness.`}</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">3D Autonomous Flow</span>
                <p>{`Poincaré-Bendixson does not apply. Trajectories can wind around each other in three dimensions without crossing. That extra room is exactly what lets nearby orbits separate exponentially while staying bounded, so chaos becomes possible (covered separately).`}</p>
              </div>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>{`The core constraint is the uniqueness theorem for ODEs: two distinct trajectories cannot pass through the same point. In 2D, this means trajectories cannot cross. A trajectory that is bounded but never settles onto a fixed point must keep turning. Because it cannot cross itself, the only closed object it can approach is a simple closed curve (a limit cycle). In 3D, trajectories can wind around each other without crossing because they have an extra dimension to move in. This geometric freedom is exactly what chaos exploits.`}</p>
            </div>
            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Why does Poincaré-Bendixson require the trapping region to contain no fixed points? What goes wrong if a fixed point sits inside?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>{`If a fixed point sits inside, a trajectory could settle onto it instead of onto a limit cycle. The fixed point is a valid long-time limit. Poincaré-Bendixson still holds but the conclusion weakens: the trajectory approaches either the fixed point, a closed orbit, or a saddle connection (a special orbit that links saddle points end to end). To guarantee a limit cycle exists, you must rule out fixed points as possible long-time attractors. The standard technique is to show that all fixed points in the region are unstable (for example, a spiral source at the origin).`}</p>
              </details>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'Find all fixed points of the system $\\dot{x} = x - x^2$, $\\dot{y} = -y$. For each, write the Jacobian and classify the fixed point.',
        a: 'Set $\\dot{x} = 0$: $x(1-x) = 0$, so $x = 0$ or $x = 1$. Set $\\dot{y} = 0$: $y = 0$. Fixed points: $(0,0)$ and $(1,0)$. Jacobian: $J = \\begin{pmatrix} 1 - 2x & 0 \\\\ 0 & -1 \\end{pmatrix}$. At $(0,0)$: $J = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, eigenvalues $+1$ and $-1$. Saddle: one positive, one negative eigenvalue. At $(1,0)$: $J = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, eigenvalues both $-1$. Stable node. Every trajectory near $(1,0)$ settles onto it; the origin has a stable manifold (the $y$-axis) and an unstable manifold (the $x$-axis).'
      },
      {
        q: 'Classify the fixed point at the origin of $\\dot{x} = -3x + y$, $\\dot{y} = -x - 3y$.',
        a: 'Jacobian: $A = \\begin{pmatrix} -3 & 1 \\\\ -1 & -3 \\end{pmatrix}$. Trace $\\tau = -3 + (-3) = -6$. Determinant $\\Delta = (-3)(-3) - (1)(-1) = 9 + 1 = 10$. Discriminant $\\tau^2 - 4\\Delta = 36 - 40 = -4 < 0$. Complex eigenvalues: $\\nu = -3 \\pm i$. Since $\\tau = -6 < 0$ and eigenvalues are complex, this is a stable spiral. Trajectories rotate inward and close in on the origin.'
      },
      {
        q: 'Sketch the nullclines for $\\dot{x} = 1 - x^2$, $\\dot{y} = x - y$, and locate the fixed points.',
        a: 'Set $\\dot{x} = 0$: $1 - x^2 = 0$, giving $x = \\pm 1$. These are two vertical lines. Set $\\dot{y} = 0$: $x - y = 0$, giving $y = x$. This is a diagonal line through the origin. Fixed points are where both nullclines intersect: at $x = 1$, $y = 1$ and at $x = -1$, $y = -1$. So the fixed points are $(1, 1)$ and $(-1, -1)$. Compute the Jacobian $J = \\begin{pmatrix} -2x & 0 \\\\ 1 & -1 \\end{pmatrix}$ at each: at $(1,1)$, $\\tau = -3$, $\\Delta = 2 > 0$, both negative eigenvalues, stable node. At $(-1,-1)$, $\\tau = 1$, $\\Delta = 2 > 0$, $\\tau^2 - 4\\Delta < 0$, complex eigenvalues with positive real part, unstable spiral.'
      },
      {
        q: 'State the Poincaré-Bendixson theorem in your own words. What are its two key hypotheses?',
        a: 'The theorem says: if a trajectory in a 2D autonomous system stays inside a bounded, closed region for all future time, and that region contains no fixed points, then the trajectory must approach a closed orbit (a limit cycle). The two key hypotheses are: (1) the region is closed and bounded, so the trajectory cannot escape to infinity; (2) the region contains no fixed points, so the trajectory cannot simply settle onto an equilibrium. Without both conditions, the trajectory might settle onto a fixed point instead, and the conclusion about a limit cycle would not hold.'
      },
      {
        q: 'The Hopf bifurcation normal form is $\\dot{r} = \\mu r - r^3$, $\\dot{\\theta} = \\omega_0$. Find the limit-cycle radius for $\\mu = 4$. Is the limit cycle stable?',
        a: 'Set $\\dot{r} = 0$: $r(\\mu - r^2) = 0$. For $\\mu = 4$, the nonzero solution is $r = \\sqrt{4} = 2$. Check stability: $d\\dot{r}/dr = \\mu - 3r^2$. At $r = 2$: $4 - 3(4) = -8 < 0$. A negative derivative means the fixed point is stable (perturbations from $r = 2$ decay back to it). So a stable limit cycle of radius 2 exists, and trajectories starting at any $r > 0$ settle onto it.'
      },
      {
        q: 'Why is chaos impossible in a 2D autonomous system?',
        a: 'The Poincaré-Bendixson theorem forbids it. In 2D, the uniqueness theorem for ODEs means trajectories cannot cross. A bounded trajectory that avoids fixed points has only one possible long-time behavior: approaching a closed orbit. Chaos requires exponential divergence of nearby orbits, but in 2D, bounded orbits cannot diverge while staying bounded and non-crossing at the same time. In 3D, trajectories can wind around each other using the extra dimension, allowing exponential separation while staying bounded. That is the geometric freedom chaos requires.'
      },
      {
        q: 'Transfer: A population model has $\\dot{x} = rx(1 - x/K) - axy$ (prey) and $\\dot{y} = -dy + bxy$ (predator) with $r,K,a,d,b > 0$. Describe the method to determine whether the nontrivial equilibrium is a stable spiral, unstable spiral, or center.',
        a: 'Find the nontrivial fixed point by setting both equations to zero. With $\\dot{y} = 0$: either $y=0$ or $x = d/b$. Substitute into $\\dot{x} = 0$ to find the corresponding $y^*$. Compute the Jacobian $J$ at $(x^*, y^*)$. Calculate $\\tau = \\mathrm{Tr}\\, J$ and $\\Delta = \\det J$. If $\\tau^2 < 4\\Delta$ (complex eigenvalues): stable spiral if $\\tau < 0$, unstable spiral if $\\tau > 0$, center if $\\tau = 0$. The sign of $\\tau$ is the decisive diagnostic. It equals $\\mathrm{div}\\, \\mathbf{f}$ at the equilibrium, and nonzero dissipation prevents a true center from occurring.'
      },
      {
        q: 'Error detection: A student claims that the system $\\dot{x} = y$, $\\dot{y} = -x$ has a stable limit cycle because it has a fixed point at the origin. Find the error.',
        a: 'Multiple errors. First, compute the Jacobian: $J = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$. Trace $\\tau = 0$, determinant $\\Delta = 1$. Eigenvalues $\\pm i$, purely imaginary. This is a center, not a limit cycle. The orbits are concentric circles; none are isolated. Second, even if the student means the trajectories are bounded (true), a center has infinitely many closed orbits, not one limit cycle. Third, a fixed point at the origin does not imply a limit cycle surrounds it. A limit cycle requires nonlinearity and typically arises via Hopf bifurcation, not from a linear system.'
      },
      {
        q: 'Predict: A system has a stable fixed point at the origin for $\\mu < 0$. Without solving anything, describe the phase portrait for $\\mu = 0$ and for $\\mu = 0.5$.',
        a: 'For $\\mu = 0$: the fixed point is at the edge of stability. The linear eigenvalues are purely imaginary. The phase portrait looks like a center (closed loops or very slowly spiraling), but the nonlinear terms determine whether it is weakly stable or weakly unstable. For $\\mu = 0.5$: the fixed point has become unstable. A small limit cycle has appeared around it. The system now oscillates with a steady amplitude of $r = \\sqrt{0.5} \\approx 0.71$ (from the Hopf normal form). Trajectories starting near the origin spiral outward to the limit cycle; trajectories starting far outside spiral inward toward it.'
      },
      {
        q: 'Compute the trace and determinant for the 2D linear system with matrix $A = \\begin{pmatrix} 0 & -3 \\\\ 3 & 0 \\end{pmatrix}$. Identify the type of fixed point.',
        a: 'Trace $\\tau = 0 + 0 = 0$. Determinant $\\Delta = (0)(0) - (-3)(3) = 0 + 9 = 9 > 0$. Discriminant $\\tau^2 - 4\\Delta = 0 - 36 = -36 < 0$ (complex eigenvalues). With $\\tau = 0$ and $\\Delta > 0$, the eigenvalues are $\\nu = \\pm 3i$. This is a center. Trajectories are closed ellipses with angular frequency 3. The system is conservative: $\\mathrm{div}\\, \\mathbf{f} = \\partial_x(-3y) + \\partial_y(3x) = 0$.'
      },
      {
        q: 'Transfer: The Lotka-Volterra predator-prey model linearized around its coexistence equilibrium gives a center. A student adds a small damping term $-\\epsilon x$ to the prey equation. What does linear stability predict now, and why?',
        a: 'With the damping term, the Jacobian trace at the coexistence equilibrium picks up an extra $-\\epsilon$ contribution. $\\tau$ shifts from 0 to $-\\epsilon < 0$. The eigenvalues move from purely imaginary to complex with negative real part, giving a stable spiral. The center disappears. This shows centers are fragile: any dissipation, however small, converts them to spirals. Poincaré-Bendixson still applies; the equilibrium is now a point attractor, not a family of closed orbits.'
      },
      {
        q: 'The polar system $\\dot{r} = r(r-1)^2$, $\\dot{\\theta} = 1$ has a closed orbit at $r = 1$. Check the sign of $\\dot{r}$ on both sides to decide its stability. Is it stable, unstable, or something in between?',
        a: 'Find the closed orbit by setting $\\dot{r} = 0$: $r(r-1)^2 = 0$, so $r = 0$ or $r = 1$. The candidate cycle is $r = 1$. Now check the sign of $\\dot{r}$ on each side. Just inside, at $r = 0.9$: $\\dot{r} = 0.9(0.9-1)^2 = 0.9(0.01) = 0.009 > 0$, so the radius grows toward 1. Just outside, at $r = 1.1$: $\\dot{r} = 1.1(0.1)^2 = 0.011 > 0$, so the radius grows away from 1. The squared factor $(r-1)^2$ is never negative, so $\\dot{r} > 0$ on both sides. Orbits inside approach the cycle, but orbits outside flee from it. This is a semi-stable limit cycle: attracting from one side, repelling from the other. The repeated root $r = 1$ is the signature of semi-stability, just as a repeated eigenvalue signals an improper node.'
      },
      {
        q: 'Predict: A 2D system has an unstable node at the origin and no other fixed points. All trajectories are bounded within a disk of radius 5. What do all trajectories approach for large time?',
        a: 'By Poincaré-Bendixson: the trajectories are bounded, and the annulus between a small circle around the origin and the disk boundary contains no fixed points (the origin is outside the annulus, and there are no other fixed points). Every trajectory in this annulus must approach a limit cycle. Since the origin is unstable (trajectories flee from it) and trajectories cannot escape the disk, they must all settle onto at least one limit cycle in the annulus. There may be multiple nested limit cycles, but every trajectory approaches one of them.'
      },
      {
        q: 'Transfer: A neuron model in the plane has its only fixed point as an unstable spiral. Every trajectory eventually enters and stays inside a large bounded loop in the phase plane. Argue that the neuron must fire repeatedly (a stable oscillation must exist).',
        a: 'Build a trapping region. Take an annulus with its outer edge just inside the large bounded loop (trajectories stay in, so flow points inward there) and its inner edge a small circle around the fixed point (the spiral is unstable, so flow points outward, into the annulus). The annulus traps every trajectory: nothing enters the inner hole and nothing leaves the outer edge. The only fixed point sits in the inner hole, so the annulus itself contains no fixed points. By Poincaré-Bendixson, every trajectory in the annulus must approach a closed orbit. That closed orbit is the repeating firing pattern.'
      },
      {
        q: 'The van der Pol oscillator with $\\mu = 0.1$ shows nearly sinusoidal oscillation. The same oscillator with $\\mu = 10$ shows sharp spikes. What changes, and why?',
        a: 'At small $\\mu$, the nonlinear damping is weak. The limit cycle is nearly circular in phase space and the time trace is nearly sinusoidal, close to simple harmonic motion perturbed by a small nonlinearity. At large $\\mu$, the nonlinear damping is strong. The limit cycle becomes elongated: the system alternates between slow drift phases ($|x| < 1$, energy input, slow) and fast jumps ($|x| > 1$, energy removal, fast). This is called relaxation oscillation. Both are stable limit cycles, the same topological object, but with very different geometry.'
      },
      {
        q: 'Classify the fixed point of $\\dot{x} = -x + 2y$, $\\dot{y} = -2x - y$. Identify the type and stability.',
        a: 'Jacobian $A = \\begin{pmatrix} -1 & 2 \\\\ -2 & -1 \\end{pmatrix}$. Trace $\\tau = -1 + (-1) = -2$. Determinant $\\Delta = (-1)(-1) - (2)(-2) = 1 + 4 = 5$. Discriminant $\\tau^2 - 4\\Delta = 4 - 20 = -16 < 0$. Complex eigenvalues: $\\nu = -1 \\pm 2i$. Since $\\tau = -2 < 0$ and eigenvalues are complex, this is a stable spiral. The origin attracts all nearby trajectories while they rotate at frequency 2.'
      },
      {
        q: 'Elaborate: A student claims that the undamped pendulum cannot have a limit cycle, only centers. Explain why, using the divergence test.',
        a: "The undamped pendulum has $\\dot{x} = y$, $\\dot{y} = -\\sin x$. Compute the divergence: $\\mathrm{div}\\, \\mathbf{f} = \\partial y/\\partial x + \\partial(-\\sin x)/\\partial y = 0 + 0 = 0$. The divergence is zero everywhere. By Liouville's theorem, this is a conservative (Hamiltonian) system. A limit cycle requires the flow to push in from one side and out from the other (or in from both sides). That requires net volume contraction or expansion, meaning $\\mathrm{div}\\, \\mathbf{f} \\neq 0$. Since the pendulum has zero divergence everywhere, it can only have centers near stable equilibria and saddles near unstable ones. The student is correct: no limit cycle is possible."
      },
      {
        q: 'Transfer: A biological clock has $\\dot{r} = r(a - r^2)$, $\\dot{\\theta} = \\omega$ in polar form, with $a, \\omega > 0$. Does it have a stable limit cycle? Find the period of the steady oscillation.',
        a: 'Set $\\dot{r} = 0$: $r(a - r^2) = 0$, giving $r = 0$ or $r = \\sqrt{a}$. The nonzero root $r = \\sqrt{a}$ is a candidate limit cycle. Check stability: for $0 < r < \\sqrt{a}$, $\\dot{r} > 0$ (radius grows); for $r > \\sqrt{a}$, $\\dot{r} < 0$ (radius shrinks). Orbits approach $r = \\sqrt{a}$ from both sides: stable limit cycle. The angle grows at constant rate $\\dot{\\theta} = \\omega$, so one full loop takes period $T = \\tfrac{2\\pi}{\\omega}$. The biological clock locks to this amplitude and period regardless of how it starts.'
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Fixed Points, Limit Cycles & Poincaré-Bendixson',
      sections: [
        <>
          <div className="ref-section">
            <h2>Fixed Points</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Fixed-Point Condition</div>
              <div className="ref-formula-eq">{`$\\mathbf{f}(\\mathbf{x}^*) = 0$`}</div>
              <div className="ref-formula-desc">{`When to use: find equilibria of $\\dot{\\mathbf{x}} = \\mathbf{f}(\\mathbf{x})$ by solving this system of equations.`}</div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Jacobian Linearization</div>
              <div className="ref-formula-eq">{`$J_{ij} = \\left.\\dfrac{\\partial f_i}{\\partial x_j}\\right|_{\\mathbf{x}^*}, \\qquad \\dot{\\mathbf{x}}' = J\\,\\mathbf{x}'$`}</div>
              <div className="ref-formula-desc">{`When to use: linearize near a fixed point to determine local stability. Solution: $x'_i(t) = x'_{i0}\\, e^{\\nu_i t}$.`}</div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Stability Condition</div>
              <div className="ref-formula-eq">{`$\\mathrm{Re}(\\nu_i) < 0 \\text{ for all } i \\implies \\text{stable attractor}$`}</div>
              <div className="ref-formula-desc">
                When to use: judge attractor stability from the eigenvalues of the Jacobian. Any
                eigenvalue with positive real part makes the fixed point unstable. Zero real part is
                inconclusive without nonlinear analysis.
              </div>
            </div>
          </div>

          <div className="ref-section">
            <h2>Trace-Determinant Classification</h2>
            <p>{`For 2D linear system $\\dot{\\mathbf{x}} = A\\mathbf{x}$, let $\\tau = \\mathrm{Tr}\\, A$, $\\Delta = \\det A$. Standard linear-systems classification:`}</p>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Eigenvalues</th>
                  <th>Condition</th>
                  <th>Stability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Saddle</td>
                  <td>Real, opposite signs</td>
                  <td>{`$\\Delta < 0$`}</td>
                  <td>Unstable</td>
                </tr>
                <tr>
                  <td>Stable node</td>
                  <td>Real, both negative</td>
                  <td>{`$\\Delta > 0,\\, \\tau < 0,\\, \\tau^2 > 4\\Delta$`}</td>
                  <td>Stable</td>
                </tr>
                <tr>
                  <td>Unstable node</td>
                  <td>Real, both positive</td>
                  <td>{`$\\Delta > 0,\\, \\tau > 0,\\, \\tau^2 > 4\\Delta$`}</td>
                  <td>Unstable</td>
                </tr>
                <tr>
                  <td>Stable spiral</td>
                  <td>Complex, negative real part</td>
                  <td>{`$\\tau^2 < 4\\Delta,\\, \\tau < 0$`}</td>
                  <td>Stable</td>
                </tr>
                <tr>
                  <td>Unstable spiral</td>
                  <td>Complex, positive real part</td>
                  <td>{`$\\tau^2 < 4\\Delta,\\, \\tau > 0$`}</td>
                  <td>Unstable</td>
                </tr>
                <tr>
                  <td>Center</td>
                  <td>Purely imaginary</td>
                  <td>{`$\\tau = 0,\\, \\Delta > 0$`}</td>
                  <td>Neutral (conservative only)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ref-section">
            <h2>Limit Cycles and Hopf Bifurcation</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Hopf Normal Form (supercritical)</div>
              <div className="ref-formula-eq">{`$\\dot{r} = \\mu r - r^3, \\quad \\dot{\\theta} = \\omega_0$`}</div>
              <div className="ref-formula-desc">{`When to use: supercritical Hopf bifurcation. Limit cycle at $r = \\sqrt{\\mu}$ for $\\mu > 0$. Fixed point $r=0$ is stable for $\\mu < 0$, unstable for $\\mu > 0$.`}</div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Van der Pol Oscillator</div>
              <div className="ref-formula-eq">{`$\\ddot{x} - \\mu(1-x^2)\\dot{x} + x = 0$`}</div>
              <div className="ref-formula-desc">{`When to use: the standard limit-cycle example. For $\\mu > 0$: unique stable limit cycle. For large $\\mu$: relaxation oscillations (slow-fast dynamics).`}</div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Liénard Conditions (unique stable limit cycle)</div>
              <div className="ref-formula-eq">{`$\\ddot{x} + f(x)\\dot{x} + g(x) = 0$`}</div>
              <div className="ref-formula-desc">
                <p>{`Conditions: (1) $f$ even, $g$ odd, $g(x) > 0$ for $x > 0$. (2) $F(x) = \\int_0^x f(t)\\,dt$ has exactly one positive zero $a$, is negative on $(0, a)$, positive and nondecreasing for $x > a$, $F(x) \\to \\infty$.`}</p>
                <p>
                  When to use: prove a unique stable limit cycle exists without solving the system.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-section">
            <h2>Poincaré-Bendixson Theorem</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Statement</div>
              <div className="ref-formula-eq">{`Bounded trajectory in closed region $R$ with no fixed points $\\implies$ trajectory approaches a closed orbit`}</div>
              <div className="ref-formula-desc">
                When to use: proving limit cycles exist (construct a trapping region with inward
                flow; exclude fixed points from its interior). Key corollary: autonomous 2D flows
                cannot exhibit chaos.
              </div>
            </div>
          </div>

          <div className="ref-section">
            <h2>Conservative vs. Dissipative</h2>
            <div className="ref-formula">
              <div className="ref-formula-name">Phase Volume Rate</div>
              <div className="ref-formula-eq">{`$\\Lambda = \\mathrm{div}\\,\\mathbf{f} = \\sum_i \\frac{\\partial f_i}{\\partial x_i}$`}</div>
              <div className="ref-formula-desc">{`When to use: test a flow for conservation by checking its divergence. $\\Lambda = 0$: conservative (Hamiltonian), volume preserved, centers possible. $\\Lambda < 0$ on average: dissipative, attractors possible, centers impossible.`}</div>
            </div>
          </div>
        </>
      ]
    },
    customCss: null
  }
  return <LearningTemplate config={config} />
}
