import { useEffect, useRef } from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  LegendreHamiltonian,
  LiouvilleBlob,
  NestedEnergyLevels,
  PhaseFlowOrbits
} from '../../../../../components/viz/physics-viz/modules'

function PhasePortraitSimulation({ C }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    let engine, render, runner
    let Matter

    async function init() {
      Matter = (await import('matter-js')).default
      const container = canvasRef.current
      if (!container) return
      const W = container.clientWidth || 600
      const H = 320

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
      const radii = [60, 100, 140]
      const balls = radii.map((r, i) => {
        const ball = Matter.Bodies.circle(cx + r, cy, 8, {
          frictionAir: 0,
          render: {
            fillStyle: i === 0 ? C.fg : i === 1 ? C.accent : C.dim,
            strokeStyle: 'transparent',
            lineWidth: 0
          }
        })
        Matter.Body.setVelocity(ball, { x: 0, y: 2.5 - i * 0.5 })
        return ball
      })

      const walls = [
        Matter.Bodies.rectangle(cx, 0, W, 4, {
          isStatic: true,
          render: { fillStyle: 'transparent' }
        }),
        Matter.Bodies.rectangle(cx, H, W, 4, {
          isStatic: true,
          render: { fillStyle: 'transparent' }
        }),
        Matter.Bodies.rectangle(0, cy, 4, H, {
          isStatic: true,
          render: { fillStyle: 'transparent' }
        }),
        Matter.Bodies.rectangle(W, cy, 4, H, {
          isStatic: true,
          render: { fillStyle: 'transparent' }
        })
      ]

      Matter.Events.on(engine, 'beforeUpdate', () => {
        balls.forEach(ball => {
          const dx = cx - ball.position.x
          const dy = cy - ball.position.y
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const k = 0.002
          Matter.Body.applyForce(ball, ball.position, { x: k * dx, y: k * dy })
        })
      })

      Matter.Composite.add(engine.world, [...balls, ...walls])
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
        height: 320,
        background: 'transparent',
        border: `1px solid ${C.faint}`
      }}
    />
  )
}

function SpineOfPartIIIContentInner() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'sop',
    source: 'Mechanics (Landau & Lifshitz) · Mathematical Methods of Classical Mechanics (Arnold)',
    documentTitle: 'Spine of Part III - AETHER',
    learning: {
      groupTitle: 'Part III: Hamiltonian Mechanics and Canonical Formalism',
      category: 'Classical Mechanics',
      title: 'Spine of Part III',
      subtitle:
        'The canonical Hamiltonian framework: symplectic geometry, Hamiltonian vector fields, phase flows, Poisson brackets, canonical transformations, and the Hamilton-Jacobi equation - presented through L&L and Arnold in parallel.',
      sections: [
        // ── 1: Exterior Derivative ─────────────────────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Exterior Derivative</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A function assigns a number to each point in space. What object should assign a
                number to each tiny directed area? Think about what changes when you flip the
                orientation of that area.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Flipping orientation changes the sign. So the object must be antisymmetric in its
                  inputs. A 2-form is the right answer: it assigns a signed number to each pair of
                  directions, and flipping the two directions flips the sign.
                </p>
              </details>
            </div>

            <p>
              A <strong>differential form</strong> is an object you can integrate over a curve,
              surface, or higher-dimensional region. A function {`$f$`} is a 0-form. A 1-form{' '}
              {`$\\omega^1$`} is something you integrate over curves. A 2-form {`$\\omega^2$`} is
              something you integrate over surfaces.
            </p>

            <p>
              The <strong>exterior derivative</strong> {`$d$`} takes a {`$k$`}-form and produces a{' '}
              {`$(k+1)$`}-form. For a 1-form {`$\\omega^1 = a\\,dx_1$`}:
            </p>

            <div className="lrn-eq">
              <span>{`$$d(a\\,dx_1) = da \\wedge dx_1 = \\frac{\\partial a}{\\partial x_2}\\,dx_2 \\wedge dx_1$$`}</span>
            </div>

            <p>
              The wedge product {`$\\wedge$`} is antisymmetric:{' '}
              {`$dx_i \\wedge dx_j = -dx_j \\wedge dx_i$`}, so {`$dx_i \\wedge dx_i = 0$`}. The{' '}
              {`$\\frac{\\partial a}{\\partial x_1}\\,dx_1 \\wedge dx_1$`} term that would appear
              from differentiating {`$a$`} vanishes for exactly this reason.
            </p>

            <div className="lrn-callout">
              <p>
                <strong>Key property {`$dd = 0$`}:</strong> Apply {`$d$`} twice and you always get
                zero. This reflects that the boundary of a boundary is always empty. In{' '}
                {`$\\mathbb{R}^3$`}: {`$\\nabla \\times (\\nabla f) = 0$`} and{' '}
                {`$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$`} both follow from this one
                algebraic fact.
              </p>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Closed Form</span>
                <p>
                  {`$d\\omega = 0$`}. Local condition. Does not require a global antiderivative.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Exact Form</span>
                <p>
                  {`$\\omega = d\\alpha$`}. Global condition depending on topology. Exact iff the
                  space has no holes.
                </p>
              </div>
            </div>

            <p>
              <strong>Stokes' formula:</strong> {`$\\int_{\\partial c} \\omega = \\int_c d\\omega$`}
              . This unifies the fundamental theorem of calculus, Green's theorem, the classical
              Stokes' theorem, and the divergence theorem.
            </p>

            <div className="lrn-callout">
              <p>
                <strong>Homotopy formula:</strong> {`$i_X d + d\\,i_X = L_X$`} (interior product +
                exterior derivative = Lie derivative). Used to prove both Poincare's Lemma and that
                Hamiltonian flows preserve {`$\\omega^2$`}.
              </p>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does {`$dx_i \\wedge dx_i = 0$`} force {`$dd = 0$`}? Trace through what happens
                when you differentiate a function twice and antisymmetrize.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$d(df) = \\sum_{i,j} \\frac{\\partial^2 f}{\\partial x_j \\partial x_i} dx_j \\wedge dx_i$`}
                  . Since partial derivatives commute but{' '}
                  {`$dx_j \\wedge dx_i = -dx_i \\wedge dx_j$`}, the symmetric coefficient kills the
                  antisymmetric form. Every term cancels.
                </p>
              </details>
            </div>
          </div>
        </>,

        // ── 2: Symplectic Manifolds ────────────────────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Symplectic Manifolds and Darboux's Theorem</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A Riemannian metric is a symmetric, positive-definite way to measure distances. What
                happens if you take a nondegenerate but antisymmetric bilinear form instead? What
                does it measure?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  It measures oriented areas of parallelograms, not lengths. It gives a consistent
                  way to measure 2-dimensional "area" in every tangent plane - without any notion of
                  length or angle.
                </p>
              </details>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Symplectic Manifold</span>
              <div className="lrn-definition-desc">
                <p>
                  An even-dimensional smooth manifold {`$(M^{2n}, \\omega^2)$`} with a 2-form{' '}
                  {`$\\omega^2$`} that is:
                </p>
                <ol className="lrn-list">
                  <li>
                    <strong>Closed:</strong> {`$d\\omega^2 = 0$`}
                  </li>
                  <li>
                    <strong>Nondegenerate:</strong> for every nonzero {`$\\xi$`}, there exists{' '}
                    {`$\\eta$`} with {`$\\omega^2(\\xi, \\eta) \\neq 0$`}
                  </li>
                </ol>
              </div>
            </div>

            <p>The standard symplectic form on {`$\\mathbb{R}^{2n}$`} is:</p>

            <div className="lrn-eq">
              <span>{`$$\\omega^2 = \\sum_{i=1}^n dp_i \\wedge dq_i$$`}</span>
            </div>

            <p>
              The <strong>cotangent bundle</strong> {`$T^*V$`} is the natural phase space for
              mechanics. A point is a pair {`$(q, p)$`} where {`$q \\in V$`} is position and {`$p$`}{' '}
              is a covector (the momentum). It carries the natural symplectic structure{' '}
              {`$\\omega^2 = dp \\wedge dq$`} - no choices needed to define it.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Darboux's Theorem</span>
              <div className="lrn-definition-desc">
                <p>
                  Every symplectic manifold {`$(M^{2n}, \\omega^2)$`} admits local coordinates{' '}
                  {`$(p_1, \\ldots, p_n, q_1, \\ldots, q_n)$`} in which{' '}
                  {`$\\omega^2 = \\sum dp_i \\wedge dq_i$`}.
                </p>
                <p>
                  <strong>Consequence:</strong> there is no local symplectic invariant. All
                  symplectic manifolds of the same dimension are locally identical. There is no
                  "symplectic curvature."
                </p>
              </div>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Riemannian Geometry</span>
                <p>
                  Symmetric, positive-definite form. Gives distances. Curvature is a local
                  invariant. Spaces of the same dimension need not be locally isometric.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Symplectic Geometry</span>
                <p>
                  Skew-symmetric nondegenerate form. Gives oriented areas. No local invariants
                  (Darboux). All symplectic spaces of the same dimension are locally identical.
                </p>
              </div>
            </div>

            <p>
              The <strong>symplectic group</strong> {`$Sp(2n)$`} consists of linear maps {`$S$`}{' '}
              with {`$S^T I S = I$`}, where{' '}
              {`$I = \\begin{pmatrix} 0 & -E \\\\ E & 0 \\end{pmatrix}$`}. All symplectic matrices
              have {`$\\det S = 1$`}: they preserve the volume form {`$(\\omega^2)^n$`}.
            </p>

            <div className="lrn-callout">
              <p>
                <strong>Eigenvalue pairing:</strong> For a symplectic matrix, if {`$\\lambda$`} is
                an eigenvalue, so are {`$\\frac{1}{\\lambda}$`}, {`$\\bar\\lambda$`}, and{' '}
                {`$\\frac{1}{\\bar\\lambda}$`}. A system is strongly stable iff all {`$2n$`}{' '}
                eigenvalues are distinct and lie on the unit circle.
              </p>
            </div>
          </div>
        </>,

        // ── 3: Hamilton's Equations (L&L) ─────────────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-2" data-section-index="2">
            <h2>Hamilton's Equations</h2>
            <p>
              Use the Hamiltonian formulation when you need to study integrals of motion, apply
              canonical transformations, or analyse phase space structure. Engineers use it for
              control theory; quantum physicists use it as the template for quantisation.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A harmonic oscillator has Lagrangian{' '}
                {`$L = \\frac{1}{2}m\\dot{q}^2 - \\frac{1}{2}kq^2$`}. Will the Hamiltonian still
                involve {`$\\dot{q}$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  No. The Hamiltonian replaces {`$\\dot{q}$`} with the momentum {`$p = m\\dot{q}$`},
                  giving {`$H = \\frac{p^2}{2m} + \\frac{1}{2}kq^2$`}.
                </p>
              </details>
            </div>

            <h3>From Lagrangian to Hamiltonian</h3>
            <p>
              Define the Hamiltonian by a Legendre transformation - a procedure that trades the
              velocities {`$\\dot{q}_i$`} for the momenta{' '}
              {`$p_i = \\partial L/\\partial\\dot{q}_i$`} as the independent variables:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$H(p, q, t) = \\sum_i p_i \\dot{q}_i - L$$`}</span>
            </div>
            <p>Taking its differential and comparing gives Hamilton's canonical equations:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\dot{q}_i = \\frac{\\partial H}{\\partial p_i}, \\qquad \\dot{p}_i = -\\frac{\\partial H}{\\partial q_i}$$`}</span>
            </div>
            <p>
              A system with {`$s$`} degrees of freedom (s independent coordinates) has s
              second-order Lagrange equations. The Hamiltonian reformulation replaces them with 2s
              first-order equations - twice as many, but each simpler.
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                By the chain rule and the Euler-Lagrange equations,{' '}
                {`$dL = \\sum_i \\dot{p}_i\\,dq_i + \\sum_i p_i\\,d\\dot{q}_i$`}, where{' '}
                {`$\\dot{p}_i = \\partial L/\\partial q_i$`} and{' '}
                {`$p_i = \\partial L/\\partial \\dot{q}_i$`}.
              </p>
              <p>
                Rewrite:{' '}
                {`$d(\\sum_i p_i\\dot{q}_i - L) = -\\sum_i \\dot{p}_i\\,dq_i + \\sum_i \\dot{q}_i\\,dp_i$`}
                .
              </p>
              <p>
                The left side is {`$dH$`}. Reading off coefficients of {`$dq_i$`} and {`$dp_i$`}{' '}
                gives Hamilton's equations.
              </p>
            </div>
            <LegendreHamiltonian />

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the time derivative of H equal {`$\\frac{\\partial H}{\\partial t}$`}{' '}
                exactly?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Expand{' '}
                  {`$\\frac{dH}{dt} = \\sum_i \\frac{\\partial H}{\\partial q_i}\\dot{q}_i + \\sum_i \\frac{\\partial H}{\\partial p_i}\\dot{p}_i + \\frac{\\partial H}{\\partial t}$`}
                  . Substitute Hamilton's equations. The first two sums give{' '}
                  {`$\\sum_i(-\\dot{p}_i\\dot{q}_i + \\dot{q}_i\\dot{p}_i) = 0$`}. Only{' '}
                  {`$\\frac{\\partial H}{\\partial t}$`} survives.
                </p>
              </details>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Phase Space</span>
              <p>
                Three orbits at different energies. Each traces a closed ellipse in position space.
                In phase space, each ellipse is preserved under Hamiltonian flow.
              </p>
            </div>
            <PhasePortraitSimulation C={C} />
            <NestedEnergyLevels />
            <PhaseFlowOrbits />

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Lagrangian</span>
                <p>{`Variables: $(q_i, \\dot{q}_i)$`}</p>
                <p>s second-order equations</p>
                <p>Best for finding equations of motion</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Hamiltonian</span>
                <p>{`Variables: $(q_i, p_i)$`}</p>
                <p>2s first-order equations</p>
                <p>Best for integrals of motion, transformations, perturbation theory</p>
              </div>
            </div>
          </div>
        </>,

        // ── 4: Hamiltonian Vector Fields (Arnold) ─────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-3" data-section-index="3">
            <h2>Hamiltonian Vector Fields</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                On a symplectic manifold, the form {`$\\omega^2$`} pairs vectors with vectors. A
                function {`$H$`} has a gradient {`$dH$`} which is a covector. How would you turn a
                covector into a vector using {`$\\omega^2$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The nondegeneracy of {`$\\omega^2$`} gives an isomorphism {`$I: T^*M \\to TM$`}.
                  Apply {`$I$`} to {`$dH$`} to get a vector {`$I\\,dH$`}. This is the Hamiltonian
                  vector field.
                </p>
              </details>
            </div>

            <p>
              A <strong>Hamiltonian vector field</strong> is {`$I\\,dH$`}: the unique vector field{' '}
              {`$X$`} satisfying {`$\\omega^2(\\eta, X) = dH(\\eta)$`} for all {`$\\eta$`}. The
              isomorphism {`$I: T^*M \\to TM$`} is defined by{' '}
              {`$\\omega^2_\\xi(\\eta) = \\omega^2(\\eta, \\xi)$`}.
            </p>

            <p>
              In {`$\\mathbb{R}^{2n}$`}, the symplectic isomorphism {`$I$`} has matrix:
            </p>

            <div className="lrn-eq">
              <span>{`$$I = \\begin{pmatrix} 0 & -E \\\\ E & 0 \\end{pmatrix}, \\qquad I^2 = -E_{2n}$$`}</span>
            </div>

            <p>
              Applying {`$I$`} to {`$dH$`} gives Hamilton's canonical equations:
            </p>

            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\dot{p} = -\\frac{\\partial H}{\\partial q}, \\qquad \\dot{q} = \\frac{\\partial H}{\\partial p}$$`}</span>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the antisymmetry of {`$\\omega^2$`} force the matrix of {`$I$`} to have
                zeros on the diagonal?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`$\\omega^2(\\xi, \\xi) = 0$`} for all {`$\\xi$`} (antisymmetry). So the diagonal
                  entries of the matrix of {`$\\omega^2$`} in any basis are zero. The matrix of{' '}
                  {`$I$`} inherits this.
                </p>
              </details>
            </div>
          </div>
        </>,

        // ── 5: Phase Flows and Integral Invariants (Arnold) ───────────────
        <>
          <div className="lrn-section" id="lrn-section-4" data-section-index="4">
            <h2>Hamiltonian Phase Flows and Their Integral Invariants</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                The flow of a Hamiltonian system moves points around in phase space. Does it
                compress some regions and expand others, or does it preserve all volumes exactly?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  It preserves all volumes exactly. Even more: it preserves the symplectic form{' '}
                  {`$\\omega^2$`} itself, and all its exterior powers.
                </p>
              </details>
            </div>

            <p>
              The <strong>Hamiltonian phase flow</strong> {`$g^t$`} assigns to each time {`$t$`} a
              smooth invertible map that moves every point in phase space along its physical
              trajectory for duration {`$t$`}. The key result:
            </p>

            <div className="lrn-eq lrn-eq-display">
              <span>{`$$(g^t)^* \\omega^2 = \\omega^2$$`}</span>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">PROOF SKETCH</span>
                <ol className="lrn-list">
                  <li>
                    Write the derivative of {`$\\int_{g^t c} \\omega^2$`} with respect to {`$t$`}.
                  </li>
                  <li>
                    Track the tube swept out as the chain {`$c$`} moves under the flow from time 0
                    to {`$\\tau$`}. Its boundary is the final chain minus the initial chain minus
                    the swept boundary.
                  </li>
                  <li>Apply Stokes to get {`$\\int dH \\wedge \\omega^2$`}.</li>
                  <li>Use {`$d\\omega^2 = 0$`} (closedness) to conclude the derivative is zero.</li>
                </ol>
              </div>
            </div>

            <p>
              From preservation of {`$\\omega^2$`}, all exterior powers are also preserved:{' '}
              {`$(\\omega^2)^2, \\ldots, (\\omega^2)^n$`}. The top power gives{' '}
              <strong>Liouville's theorem:</strong> Hamiltonian phase flows preserve phase volume.
            </p>

            <p>
              A <strong>relative integral invariant</strong> is a quantity whose integral around any
              closed loop is preserved by the flow. The 1-form {`$\\omega^1 = \\sum p_i\\,dq_i$`} is
              one: {`$\\oint_{gc} p\\,dq = \\oint_c p\\,dq$`} for any closed curve {`$c$`}.
            </p>
            <LiouvilleBlob />

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Hamiltonian Flow</span>
                <p>
                  Divergence in phase space is zero. Phase-space volume is preserved. Reversible.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Dissipative Flow (friction)</span>
                <p>Divergence is negative. Phase-space volume shrinks. Irreversible.</p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does {`$d\\omega^2 = 0$`} (closedness of the symplectic form) play an essential
                role in the proof?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The derivative of {`$\\int_{g^t c} \\omega^2$`} equals (by Stokes){' '}
                  {`$\\int_c L_{I\\,dH}\\,\\omega^2$`}. By the homotopy formula,{' '}
                  {`$L_{I\\,dH}\\,\\omega^2 = i_{I\\,dH}(d\\omega^2) + d(i_{I\\,dH}\\omega^2)$`}. If{' '}
                  {`$d\\omega^2 = 0$`}, the first term vanishes. The second is exact, so its
                  integral over a closed cycle is zero.
                </p>
              </details>
            </div>
          </div>
        </>,

        // ── 6: Poisson Brackets (L&L) ─────────────────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-5" data-section-index="5">
            <h2>Poisson Brackets</h2>
            <p>
              Use Poisson brackets to test whether a quantity is conserved, to find new conserved
              quantities from known ones, and to express equations of motion compactly.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Poisson Bracket</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$$[f, g] \\equiv \\sum_k \\left(\\frac{\\partial f}{\\partial p_k}\\frac{\\partial g}{\\partial q_k} - \\frac{\\partial f}{\\partial q_k}\\frac{\\partial g}{\\partial p_k}\\right)$$`}
                </p>
              </div>
            </div>

            <p>The time evolution of any function {`$f(q, p, t)$`} is:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\frac{df}{dt} = \\frac{\\partial f}{\\partial t} + [H, f]$$`}</span>
            </div>

            <h3>Properties</h3>
            <ul className="lrn-list">
              <li>
                <strong>Antisymmetry:</strong> {`$[f, g] = -[g, f]$`}
              </li>
              <li>
                <strong>Linearity:</strong> {`$[f_1 + f_2, g] = [f_1, g] + [f_2, g]$`}
              </li>
              <li>
                <strong>Product rule:</strong> {`$[f_1 f_2, g] = f_1[f_2, g] + f_2[f_1, g]$`}
              </li>
              <li>
                <strong>Jacobi identity:</strong> {`$[f,[g,h]] + [g,[h,f]] + [h,[f,g]] = 0$`}
              </li>
            </ul>

            <h3>Fundamental Brackets</h3>
            <div className="lrn-eq">
              <span>{`$$[q_i, q_k] = 0, \\quad [p_i, p_k] = 0, \\quad [p_i, q_k] = \\delta_{ik}$$`}</span>
            </div>

            <h3>Poisson's Theorem and Integrals of Motion</h3>
            <p>
              A function {`$f(q, p, t)$`} is an integral of the motion when{' '}
              {`$\\frac{\\partial f}{\\partial t} + [H, f] = 0$`}. For time-independent integrals:{' '}
              {`$[H, f] = 0$`}.
            </p>
            <p>
              <strong>Poisson's theorem:</strong> If {`$f$`} and {`$g$`} are both integrals of
              motion, then {`$[f, g]$`} is also an integral of motion.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">{`Assume $[H, f] = 0$ and $[H, g] = 0$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">{`Apply Jacobi: $[f, [g, H]] + [g, [H, f]] + [H, [f, g]] = 0$.`}</div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">{`First two terms vanish. Therefore $[H, [f, g]] = 0$.`}</div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Angular Momentum</h3>
            <p>The Poisson brackets of angular momentum components:</p>
            <div className="lrn-eq">
              <span>{`$$[M_x, M_y] = M_z, \\quad [M_y, M_z] = M_x, \\quad [M_z, M_x] = M_y$$`}</span>
            </div>
            <p>
              These are exactly the bracket relations that define the group of 3D rotations. Every
              physical system with a rotation symmetry has angular momentum satisfying these
              brackets. In quantum mechanics, the same structure appears with commutators:{' '}
              {`$[\\hat{M}_x, \\hat{M}_y] = i\\hbar\\hat{M}_z$`}. The Poisson bracket is the
              classical ancestor of the commutator.
            </p>
          </div>
        </>,

        // ── 7: Action as Coordinate + Maupertuis (L&L) ───────────────────
        <>
          <div className="lrn-section" id="lrn-section-6" data-section-index="6">
            <h2>Action as a Function of Coordinates</h2>
            <p>
              Treat the action as a function of the endpoint: {`$S(q, t)$`}, where the path is the
              actual physical trajectory ending at {`$(q, t)$`}. This connects the Hamiltonian to
              partial differential equations.
            </p>

            <h3>Derivatives of the Action</h3>
            <div className="lrn-eq">
              <span>{`$$\\frac{\\partial S}{\\partial q_i} = p_i, \\qquad \\frac{\\partial S}{\\partial t} = -H$$`}</span>
            </div>
            <p>Together:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$dS = \\sum_i p_i\\,dq_i - H\\,dt$$`}</span>
            </div>

            <div className="lrn-insight">
              <strong>Optics link:</strong> In optics, the eikonal (the phase accumulated along a
              ray) satisfies the same equation. The momentum{' '}
              {`$p_i = \\frac{\\partial S}{\\partial q_i}$`} corresponds to the ray direction. This
              makes Hamilton-Jacobi theory the <em>geometric-optics</em> (ray-optics) limit of
              mechanics. Quantum mechanics is the full wave theory - as {`$\\hbar \\to 0$`}, the
              Schrödinger equation reduces to the Hamilton-Jacobi equation.
            </div>

            <h2>Maupertuis' Principle</h2>
            <p>
              Use Maupertuis' principle when the system conserves energy and you only want the path
              (shape of trajectory), not the time.
            </p>

            <p>The abbreviated action is:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$S_0 = \\oint \\sum_i p_i\\,dq_i$$`}</span>
            </div>
            <p>
              Physical paths extremize {`$S_0$`} at fixed energy {`$E$`}. For a single particle:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\delta\\int\\sqrt{2m(E-U)}\\,dl = 0$$`}</span>
            </div>
            <p>
              The factor {`$\\sqrt{2m(E-U)}$`} plays the role of refractive index. Fermat's
              principle is exactly Maupertuis' principle for light waves.
            </p>
          </div>
        </>,

        // ── 8: Poisson Brackets as Lie Algebras (Arnold) ─────────────────
        <>
          <div className="lrn-section" id="lrn-section-7" data-section-index="7">
            <h2>Poisson Brackets and Lie Algebras</h2>

            <p>
              The <strong>Lie bracket</strong> {`$[A, B]$`} of vector fields measures the failure of
              commutativity of their flows:
            </p>
            <div className="lrn-eq">
              <span>{`$$[A, B]_i = \\sum_j \\left(B_j \\frac{\\partial A_i}{\\partial x_j} - A_j \\frac{\\partial B_i}{\\partial x_j}\\right)$$`}</span>
            </div>
            <p>
              <strong>Theorem:</strong> The flows of {`$A$`} and {`$B$`} commute for all {`$s, t$`}{' '}
              if and only if {`$[A, B] = 0$`}.
            </p>

            <p>
              Arnold writes the Poisson bracket as {`$(F, H)$`} rather than {`$[F, H]$`} - the same
              object in two notations. In full:
            </p>
            <div className="lrn-eq">
              <span>{`$$(F, H) = \\sum_{i=1}^n \\left(\\frac{\\partial H}{\\partial p_i}\\frac{\\partial F}{\\partial q_i} - \\frac{\\partial H}{\\partial q_i}\\frac{\\partial F}{\\partial p_i}\\right) = \\frac{d}{dt}\\bigg|_{t=0} F(g^t_H(x))$$`}</span>
            </div>

            <p>
              The map {`$H \\mapsto I\\,dH$`} sends every function to its Hamiltonian vector field
              in a way that converts Poisson brackets into Lie brackets: if you bracket two
              functions first, then map to vector fields, you get the same result as mapping each
              function to its vector field first, then taking the Lie bracket. The Jacobi identity
              for functions confirms this:
            </p>
            <div className="lrn-eq">
              <span>{`$$((A,B),C) + ((B,C),A) + ((C,A),B) = 0$$`}</span>
            </div>

            <p>
              <strong>Liouville integrability:</strong> A Hamiltonian system with {`$n$`} degrees of
              freedom is integrable if it has {`$n$`} independent first integrals{' '}
              {`$F_1, \\ldots, F_n$`} whose mutual Poisson brackets all vanish: {`$(F_i, F_j) = 0$`}{' '}
              for all {`$i, j$`}. The system is then solved by integration alone - no differential
              equations need to be solved beyond quadrature.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Poisson's theorem gives new first integrals "for free." When is the new integral
                trivial?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  When the Lie algebra of first integrals is abelian ({`$[F_i, F_j] = 0$`} for all{' '}
                  {`$i, j$`}). This is the Liouville integrability condition. Applying Poisson's
                  theorem produces no new integrals beyond what you have.
                </p>
              </details>
            </div>
          </div>
        </>,

        // ── 9: Canonical Transformations (L&L) ────────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-8" data-section-index="8">
            <h2>Canonical Transformations</h2>
            <p>
              A canonical transformation changes {`$(q_i, p_i)$`} to new variables {`$(Q_i, P_i)$`}{' '}
              so that Hamilton's equations still hold in the new variables (possibly with a new
              Hamiltonian {`$H'$`}).
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`If you find a canonical transformation that makes the new Hamiltonian $H' = 0$, what do Hamilton's equations look like in the new variables?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$\\dot{Q}_i = 0$`} and {`$\\dot{P}_i = 0$`}. All new coordinates and momenta are
                  constants of motion. This is exactly what the Hamilton-Jacobi equation achieves.
                </p>
              </details>
            </div>

            <h3>Generating Functions</h3>
            <p>
              A generating function is a single function of mixed old and new coordinates whose
              partial derivatives encode the complete transformation. Different choices of which
              variables to mix give four families; all are equally valid. Using {`$F(q, Q, t)$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$p_i = \\frac{\\partial F}{\\partial q_i}, \\qquad P_i = -\\frac{\\partial F}{\\partial Q_i}, \\qquad H' = H + \\frac{\\partial F}{\\partial t}$$`}</span>
            </div>
            <p>Using {`$\\Phi(q, P, t)$`}:</p>
            <div className="lrn-eq">
              <span>{`$$p_i = \\frac{\\partial \\Phi}{\\partial q_i}, \\qquad Q_i = \\frac{\\partial \\Phi}{\\partial P_i}, \\qquad H' = H + \\frac{\\partial \\Phi}{\\partial t}$$`}</span>
            </div>

            <h3>Invariance of Poisson Brackets</h3>
            <p>
              Canonical transformations preserve all Poisson brackets:{' '}
              {`$[f, g]_{p,q} = [f, g]_{P,Q}$`}. The canonical conditions on new variables:
            </p>
            <div className="lrn-eq">
              <span>{`$$[Q_i, Q_k] = 0, \\quad [P_i, P_k] = 0, \\quad [P_i, Q_k] = \\delta_{ik}$$`}</span>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>Why does time evolution itself count as a canonical transformation?</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Time evolution maps {`$(q(t_0), p(t_0)) \\to (q(t), p(t))$`}. This map preserves
                  all Poisson brackets because Hamilton's equations preserve the phase-space area
                  element at every instant. The generating function of this transformation is the
                  action {`$S$`}.
                </p>
              </details>
            </div>

            <h2>Liouville's Theorem</h2>
            <p>The volume element of phase space is preserved under Hamiltonian flow:</p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Liouville's Theorem</span>
              <div className="lrn-definition-desc">
                <p>{`$$\\int d\\Gamma = \\text{constant}$$`}</p>
                <p>
                  where {`$d\\Gamma = dq_1\\cdots dq_s\\,dp_1\\cdots dp_s$`} is the phase space
                  volume element.
                </p>
              </div>
            </div>
            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>Time evolution is a canonical transformation.</p>
              <p>
                Every canonical transformation preserves the phase-space area element. Equivalently:
                the Hamiltonian flow is incompressible. The divergence of the vector field is zero:{' '}
                {`$\\sum_i(\\frac{\\partial\\dot{q}_i}{\\partial q_i} + \\frac{\\partial\\dot{p}_i}{\\partial p_i}) = 0$`}
                . This follows directly from Hamilton's equations.
              </p>
            </div>
          </div>
        </>,

        // ── 10: Poincare-Cartan Form (Arnold) ─────────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-9" data-section-index="9">
            <h2>The Poincare-Cartan Integral Invariant</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Poincare-Cartan Form</span>
              <div className="lrn-definition-desc">
                <p>
                  The 1-form on extended phase space{' '}
                  {`$(p, q, t) \\in \\mathbb{R}^{2n} \\times \\mathbb{R}$`}:
                </p>
                <div className="lrn-eq">
                  <span>{`$$\\omega^1 = p\\,dq - H\\,dt = \\sum_{i=1}^n p_i\\,dq_i - H(p,q,t)\\,dt$$`}</span>
                </div>
              </div>
            </div>

            <p>
              A <strong>vortex line</strong> of {`$\\omega^1$`} is a curve in extended phase space
              along which {`$d\\omega^1$`} vanishes when paired with any transverse direction:{' '}
              {`$d\\omega^1(\\dot\\gamma, \\delta) = 0$`} for all {`$\\delta$`}. Computing{' '}
              {`$d\\omega^1 = dp \\wedge dq - dH \\wedge dt$`} and setting this to zero recovers
              Hamilton's canonical equations exactly.
            </p>

            <p>
              <strong>Poincare-Cartan theorem:</strong> For any two closed curves{' '}
              {`$\\gamma_1, \\gamma_2$`} encircling the same tube of phase trajectories:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\oint_{\\gamma_1} p\\,dq - H\\,dt = \\oint_{\\gamma_2} p\\,dq - H\\,dt$$`}</span>
            </div>

            <p>
              <strong>Corollary:</strong> {`$\\oint_\\gamma p\\,dq$`} is preserved by the phase
              flow. This is Poincare's relative integral invariant.
            </p>

            <h3>Canonical Transformation (Geometric Definition)</h3>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Canonical Map</span>
              <div className="lrn-definition-desc">
                <p>
                  A map {`$g: (p, q) \\mapsto (P, Q)$`} preserving the symplectic form:{' '}
                  {`$g^* \\omega^2 = \\omega^2$`}, equivalently {`$dP \\wedge dQ = dp \\wedge dq$`},
                  equivalently preserving {`$p\\,dq$`} as a relative integral invariant.
                </p>
              </div>
            </div>

            <h3>Maupertuis Principle and the Jacobi Metric</h3>

            <p>
              Fix the energy surface {`$H = h$`}. Physical trajectories extremize the reduced action{' '}
              {`$\\int_\\gamma p\\,dq$`}. Extremals are geodesics of the{' '}
              <strong>Jacobi metric:</strong>
            </p>
            <div className="lrn-eq">
              <span>{`$$d\\rho = \\sqrt{h - U(q)}\\,ds$$`}</span>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Maupertuis Principle</span>
                <p>
                  Extremizes {`$\\int p\\,dq$`} on {`$H = h$`}. Time not fixed. Gives geodesics.
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Hamilton's Principle</span>
                <p>
                  Extremizes {`$\\int(p\\dot q - H)dt$`}. Time fixed. Gives dynamics as functions of
                  time.
                </p>
              </div>
            </div>
          </div>
        </>,

        // ── 11: The Routhian (L&L) ────────────────────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-10" data-section-index="10">
            <h2>The Routhian</h2>
            <p>
              A coordinate is <strong>cyclic</strong> if it does not appear explicitly in the
              Lagrangian - only its velocity does. Its conjugate momentum is then constant. Use the
              Routhian when some coordinates are cyclic and you want to keep Lagrange's equations
              for the rest.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Routhian</span>
              <div className="lrn-definition-desc">
                <p>
                  A hybrid function that is a Hamiltonian in the cyclic coordinates {`$(q_i, p_i)$`}{' '}
                  and a Lagrangian in the non-cyclic coordinates {`$(\\xi_a, \\dot{\\xi}_a)$`}:
                </p>
                <p>{`$$R(q, p, \\xi, \\dot{\\xi}) = \\sum_i p_i\\dot{q}_i - L$$`}</p>
                <p>where the sum is only over cyclic coordinates.</p>
              </div>
            </div>

            <p>The Routhian satisfies two sets of equations simultaneously:</p>
            <ul className="lrn-list">
              <li>
                Hamilton's equations for the cyclic sector:{' '}
                {`$\\dot{q}_i = \\frac{\\partial R}{\\partial p_i}$`},{' '}
                {`$\\dot{p}_i = -\\frac{\\partial R}{\\partial q_i}$`}
              </li>
              <li>
                Lagrange's equations for the non-cyclic sector:{' '}
                {`$\\frac{d}{dt}\\frac{\\partial R}{\\partial \\dot{\\xi}_a} = \\frac{\\partial R}{\\partial \\xi_a}$`}
              </li>
            </ul>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Hamiltonian</span>
                <p>Replaces ALL velocities with momenta. All equations are Hamilton type.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Routhian</span>
                <p>
                  Replaces only CYCLIC velocities. Mixed: Hamilton for cyclic, Lagrange for
                  non-cyclic.
                </p>
              </div>
            </div>
          </div>
        </>,

        // ── 12: Hamilton-Jacobi Equation (L&L) ───────────────────────────
        <>
          <div className="lrn-section" id="lrn-section-11" data-section-index="11">
            <h2>The Hamilton-Jacobi Equation</h2>
            <p>
              Use the Hamilton-Jacobi equation when you want to find all constants of motion at
              once, or when the system separates in some coordinate system. It converts the problem
              of solving Hamilton's ODEs into finding one function {`$S$`} satisfying a first-order
              PDE.
            </p>

            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\frac{\\partial S}{\\partial t} + H\\!\\left(q_1,\\ldots,q_s;\\,\\frac{\\partial S}{\\partial q_1},\\ldots,\\frac{\\partial S}{\\partial q_s};\\,t\\right) = 0$$`}</span>
            </div>

            <h3>Complete Integral</h3>
            <p>
              A complete integral {`$S(t, q_1,\\ldots,q_s; \\alpha_1,\\ldots,\\alpha_s)$`}{' '}
              containing s constants gives all constants of motion:
            </p>
            <div className="lrn-eq">
              <span>{`$$p_i = \\frac{\\partial S}{\\partial q_i}, \\qquad \\beta_i = \\frac{\\partial S}{\\partial \\alpha_i} = \\text{const}$$`}</span>
            </div>

            <p>For time-independent H, write {`$S = S_0(q) - Et$`}:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$H\\!\\left(q_1,\\ldots,q_s;\\,\\frac{\\partial S_0}{\\partial q_1},\\ldots,\\frac{\\partial S_0}{\\partial q_s}\\right) = E$$`}</span>
            </div>

            <div className="lrn-insight">
              <strong>Quantum link:</strong> The Schrodinger equation is the wave version of the
              Hamilton-Jacobi equation. The quantum phase {`$e^{\\frac{iS}{\\hbar}}$`} turns the H-J
              equation into Schrodinger's equation as {`$\\hbar \\to 0$`}.
            </div>

            <h3>Separation of Variables</h3>
            <p>
              If H decomposes as {`$H = \\sum_k H_k(q_k, p_k)$`}, the complete integral takes the
              additive form:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$S = \\sum_k S_k(q_k;\\,\\alpha_1,\\ldots,\\alpha_s) - E\\,t$$`}</span>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Spherical</span>
                <p>
                  Separates for {`$U = a(r) + \\frac{b(\\theta)}{r^2}$`}. Conserved: {`$M^2$`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Parabolic</span>
                <p>
                  Separates for {`$U = \\frac{[a(\\xi)+b(\\eta)]}{\\xi+\\eta}$`}. Conserved:
                  Runge-Lenz projection
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Elliptic</span>
                <p>
                  Two fixed centres. Separates for{' '}
                  {`$U = \\frac{[a(\\xi)+b(\\eta)]}{\\xi^2-\\eta^2}$`}
                </p>
              </div>
            </div>
          </div>
        </>,

        // ── 13: Huygens' Principle and HJ Method (Arnold) ─────────────────
        <>
          <div className="lrn-section" id="lrn-section-12" data-section-index="12">
            <h2>{"Huygens' Principle and the Hamilton-Jacobi Method"}</h2>

            <p>
              The <strong>wave front</strong> {`$\\Phi_{q_0}(t)$`} is the boundary of all points
              reachable from {`$q_0$`} in time at most {`$t$`}.
            </p>

            <div className="lrn-callout">
              <p>
                <strong>{"Huygens' theorem:"}</strong>{' '}
                {`$\\Phi_{q_0}(t+s) = \\text{envelope}\\{\\Phi_q(s) : q \\in \\Phi_{q_0}(t)\\}$`}.
                The wave front at {`$t+s$`} is the envelope of wave fronts of radius {`$s$`}{' '}
                centered at all points of {`$\\Phi_{q_0}(t)$`}.
              </p>
            </div>

            <h3>The Optical-Mechanical Analogy</h3>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Optics</span>
                <ul className="lrn-list">
                  <li>Rays</li>
                  <li>Wave fronts</li>
                  <li>{"Fermat's principle"}</li>
                  <li>{`Normal slowness $p = \\frac{\\partial S}{\\partial q}$`}</li>
                  <li>Optical path length</li>
                </ul>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Mechanics</span>
                <ul className="lrn-list">
                  <li>Trajectories</li>
                  <li>Level sets of action {`$S$`}</li>
                  <li>{"Hamilton's principle / least action"}</li>
                  <li>Momentum</li>
                  <li>Action {`$S$`}</li>
                </ul>
              </div>
            </div>

            <h3>{"Jacobi's Theorem"}</h3>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Complete Integral</span>
              <div className="lrn-definition-desc">
                <p>
                  An {`$n$`}-parameter family of solutions {`$S(q, Q, t)$`} of the HJ equation with{' '}
                  {`$\\det\\frac{\\partial^2 S}{\\partial Q \\partial q} \\neq 0$`}.
                </p>
              </div>
            </div>

            <div className="lrn-callout">
              <p>
                <strong>{"Jacobi's theorem:"}</strong> If {`$S(q, Q, t)$`} is a complete integral,
                then the canonical equations are solved by quadratures. Set{' '}
                {`$P_i = -\\frac{\\partial S}{\\partial Q_i} = \\text{const}$`}, then solve for{' '}
                {`$q(t)$`}.
              </p>
            </div>

            <p>
              The generating function {`$S_2(P, q)$`} (Legendre transform of {`$S_1$`}):
            </p>
            <div className="lrn-eq">
              <span>{`$$p = \\frac{\\partial S_2}{\\partial q}, \\qquad Q = \\frac{\\partial S_2}{\\partial P}$$`}</span>
            </div>
            <p>
              No minus signs. The identity transformation has {`$S_2 = Pq$`}. There are {`$2^n$`}{' '}
              types of generating functions: for each degree of freedom, choose to keep {`$q_i$`} or{' '}
              {`$P_i$`}.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does $S_1(Q,q)$ have a minus sign for $P = -\\frac{\\partial S_1}{\\partial Q}$ but no minus sign for $p = \\frac{\\partial S_1}{\\partial q}$?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Forced by the math. The condition {`$dp \\wedge dq = dP \\wedge dQ$`} is
                  equivalent to {`$p\\,dq - P\\,dQ = dS_1$`}. Differentiating:{' '}
                  {`$p = \\frac{\\partial S_1}{\\partial q}$`} (matching {`$dq$`} terms) and{' '}
                  {`$-P = \\frac{\\partial S_1}{\\partial Q}$`} (matching {`$dQ$`} terms with the{' '}
                  {`$-P\\,dQ$`} sign). Not a convention.
                </p>
              </details>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      // From Hamilton's Equations (L&L)
      {
        q: "Write Hamilton's canonical equations for a system with Hamiltonian H(q, p, t).",
        a: "The canonical equations are $\\dot{q}_i = \\frac{\\partial H}{\\partial p_i}$ and $\\dot{p}_i = -\\frac{\\partial H}{\\partial q_i}$. These replace the s second-order Lagrange equations with 2s first-order equations. The first equation gives velocity from momentum; the second is a generalised Newton's law."
      },
      {
        q: 'Find the Hamiltonian for a particle of mass m in a uniform gravitational field. Use Cartesian coordinates.',
        a: "$L = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2 + \\dot{z}^2) - mgz$. Momenta: $p_x = m\\dot{x}$, $p_y = m\\dot{y}$, $p_z = m\\dot{z}$. $H = \\frac{p_x^2+p_y^2+p_z^2}{2m} + mgz$. Hamilton's equations recover Newton's law."
      },
      {
        q: 'Explain: why does the Routhian behave as a Hamiltonian for cyclic coordinates but as a Lagrangian for non-cyclic ones?',
        a: "The Routhian is built by a partial Legendre transform: only the cyclic velocities are replaced by momenta. For the cyclic sector, Hamilton's equations hold. For the non-cyclic sector, no transform was applied, so the Routhian plays the role of a (negative) Lagrangian."
      },
      // From Poisson Brackets (L&L)
      {
        q: "State Poisson's theorem and explain what it is useful for.",
        a: 'If $f$ and $g$ are both integrals of motion ($[H,f]=0$ and $[H,g]=0$), then $[f,g]$ is also an integral of motion. Useful for generating new conservation laws. Knowing $M_x$ and $M_y$ are conserved, $[M_x,M_y] = M_z$ is also conserved.'
      },
      {
        q: 'What are the fundamental Poisson brackets between canonical coordinates and momenta?',
        a: '$[q_i, q_k] = 0$, $[p_i, p_k] = 0$, and $[p_i, q_k] = \\delta_{ik}$.'
      },
      {
        q: 'Transfer: In quantum mechanics, position and momentum satisfy [x_hat, p_hat] = i*hbar. How does this compare to the classical Poisson bracket [x, p]?',
        a: 'Classical $[x, p] = 1$. Quantum commutator $[\\hat{x}, \\hat{p}] = i\\hbar$. Quantisation: replace $\\{f,g\\}$ with $\\frac{1}{i\\hbar}[\\hat{f}, \\hat{g}]$.'
      },
      {
        q: 'What is the abbreviated action S_0 and how does it differ from the full action S?',
        a: "Abbreviated action: $S_0 = \\int \\sum_i p_i\\,dq_i$, taken at fixed energy $E$. Full action: $S = \\int L\\,dt$. Connection: $S = S_0 - Et$. $S_0$ determines only the path shape (Maupertuis' principle); $S$ determines both shape and timing."
      },
      // From Canonical Transformations (L&L)
      {
        q: "Elaborate: Why is Liouville's theorem true?",
        a: "Liouville's theorem holds because time evolution is a canonical transformation. Canonical transformations preserve the phase-space area element. The divergence of Hamiltonian flow is $\\sum_i\\!\\left(\\frac{\\partial^2 H}{\\partial q_i\\,\\partial p_i} - \\frac{\\partial^2 H}{\\partial p_i\\,\\partial q_i}\\right) = 0$."
      },
      {
        q: 'What is a canonical transformation? Give the conditions the new variables must satisfy.',
        a: "A canonical transformation changes $(q,p)$ to $(Q,P)$ such that Hamilton's equations still hold. New variables must satisfy: $[Q_i,Q_k] = 0$, $[P_i,P_k] = 0$, and $[P_i,Q_k] = \\delta_{ik}$."
      },
      // From Hamilton-Jacobi (L&L)
      {
        q: 'State the Hamilton-Jacobi equation for a time-independent Hamiltonian H.',
        a: '$H\\!\\left(q_1,\\ldots,q_s;\\,\\frac{\\partial S_0}{\\partial q_1},\\ldots,\\frac{\\partial S_0}{\\partial q_s}\\right) = E$. A first-order PDE for $S_0$. Its complete integral (with $s$ constants) gives the general solution.'
      },
      {
        q: 'For what class of potentials does the Hamilton-Jacobi equation separate in spherical coordinates?',
        a: 'Potentials of the form $U = a(r) + \\frac{b(\\theta)}{r^2}$. The $r$ and $\\theta$ equations decouple after dividing by the $r^2$ metric factor.'
      },
      // From Arnold Hamilton's Equations
      {
        q: "What are Hamilton's canonical equations? Derive them from the Hamiltonian vector field.",
        a: '$\\dot{p} = -\\frac{\\partial H}{\\partial q}$, $\\dot{q} = \\frac{\\partial H}{\\partial p}$. The Hamiltonian vector field $I\\,dH$ maps the covector $dH$ to a vector via the symplectic isomorphism. The matrix of $I$ is $\\begin{pmatrix}0 & -E \\\\ E & 0\\end{pmatrix}$.'
      },
      {
        q: "State Liouville's theorem from the symplectic perspective.",
        a: 'Hamiltonian phase flows preserve phase volume. The phase volume is $(\\omega^2)^n = dp_1 \\wedge dq_1 \\wedge \\cdots \\wedge dp_n \\wedge dq_n$. This follows because the phase flow preserves $\\omega^2$ and hence all its exterior powers.'
      },
      {
        q: 'Prove that energy H is always a first integral of its own Hamiltonian flow.',
        a: '$(H,H) = \\frac{d}{dt}\\big|_{t=0} H(g^t(x)) = dH(I\\,dH) = \\omega^2(I\\,dH,\\,I\\,dH)$. Since $\\omega^2$ is antisymmetric, $\\omega^2(\\xi,\\xi) = 0$ for all $\\xi$. So $(H,H) = 0$.'
      },
      // From Arnold Poisson Brackets
      {
        q: 'What is the Lie bracket [A, B] of two vector fields? State the commutativity theorem.',
        a: '$[A,B]_i = \\sum_j \\left(B_j\\,\\frac{\\partial A_i}{\\partial x_j} - A_j\\,\\frac{\\partial B_i}{\\partial x_j}\\right)$. Theorem: flows of $A$ and $B$ commute for all $s, t$ if and only if $[A, B] = 0$.'
      },
      {
        q: 'State the Jacobi identity for vector fields and for Poisson brackets of functions.',
        a: 'Vector fields: $[[A,B],C] + [[B,C],A] + [[C,A],B] = 0$. Functions: $((A,B),C) + ((B,C),A) + ((C,A),B) = 0$. The map $H \\mapsto I\\,dH$ converts Poisson brackets into Lie brackets.'
      },
      // From Arnold Canonical Transformations
      {
        q: 'What is the Poincare-Cartan form? Write it explicitly.',
        a: "$\\omega^1 = p\\,dq - H\\,dt = \\sum_i p_i\\,dq_i - H(p,q,t)\\,dt$. Its vortex lines project 1-to-1 onto the $t$-axis and satisfy Hamilton's canonical equations."
      },
      {
        q: 'What does "relative integral invariant" mean? Give an example.',
        a: 'A relative integral invariant is a quantity whose integral around any closed loop is preserved by the flow. Example: $\\omega^1 = p\\,dq$ is a relative integral invariant of Hamiltonian phase flow.'
      },
      {
        q: 'What is a canonical transformation? Give two equivalent characterizations.',
        a: "(1) A map satisfying $(g^*)\\omega^2 = \\omega^2$; equivalently (2) a map preserving $p\\,dq$ as a relative integral invariant. Under a canonical transformation, Hamilton's equations retain their form."
      },
      {
        q: 'Compare generating functions S_1(Q,q) and S_2(P,q). When is each more convenient?',
        a: '$S_1$: $p = \\frac{\\partial S_1}{\\partial q}$, $P = -\\frac{\\partial S_1}{\\partial Q}$ (minus sign on $P$). $S_2$: $p = \\frac{\\partial S_2}{\\partial q}$, $Q = \\frac{\\partial S_2}{\\partial P}$ (no minus signs). Identity has $S_2 = Pq$. Use $S_2$ for near-identity transformations.'
      },
      // From Arnold HJ
      {
        q: 'State the Hamilton-Jacobi equation from Arnold. What is the function S?',
        a: '$\\frac{\\partial S}{\\partial t} + H\\!\\left(\\frac{\\partial S}{\\partial q}, q, t\\right) = 0$. $S(q, t)$ is the action along the extremal from a fixed initial point to $(q, t)$. Momentum is $p = \\frac{\\partial S}{\\partial q}$.'
      },
      {
        q: "What does Jacobi's theorem say about a complete integral?",
        a: 'A complete integral $S(q, Q, t)$ with $\\det\\frac{\\partial^2 S}{\\partial Q\\,\\partial q} \\neq 0$ solves the canonical equations by integration. Set $P_i = -\\frac{\\partial S}{\\partial Q_i} = \\mathrm{const}$; then $\\frac{\\partial S}{\\partial Q_i} = -P_i$ gives $q(t)$.'
      },
      // From Symplectic Manifolds
      {
        q: 'Define a symplectic manifold. What are the two conditions?',
        a: 'An even-dimensional manifold $(M^{2n}, \\omega^2)$ with $\\omega^2$ closed ($d\\omega^2 = 0$) and nondegenerate (every nonzero $\\xi$ has some $\\eta$ with $\\omega^2(\\xi,\\eta) \\neq 0$).'
      },
      {
        q: "State Darboux's theorem. What does it say about symplectic curvature?",
        a: 'Every symplectic manifold has local coordinates $(p,q)$ where $\\omega^2 = \\sum dp_i \\wedge dq_i$. There is no local symplectic invariant, no symplectic curvature. All symplectic manifolds of the same dimension are locally identical.'
      },
      {
        q: "State Stokes' formula and explain what each side means.",
        a: "$\\int_{\\partial c} \\omega = \\int_c d\\omega$. Left: integrate $\\omega$ over the boundary. Right: integrate $d\\omega$ over the interior. Unifies the fundamental theorem of calculus, Green's theorem, the classical Stokes' theorem, and the divergence theorem."
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Spine of Part III',
      sections: [
        <>
          <div className="ref">
            <h2>Exterior Calculus</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Key identity: dd = 0</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$d(d\\omega) = 0$`} for any form {`$\\omega$`}
                </p>
                <p>
                  When to use: verifying any exact form is closed; explains curl-of-gradient = 0 and
                  divergence-of-curl = 0.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">{"Stokes' Formula"}</span>
              <div className="lrn-definition-desc">
                <p>{`$\\int_{\\partial c} \\omega = \\int_c d\\omega$`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Homotopy Formula</span>
              <div className="lrn-definition-desc">
                <p>{`$i_X d + d\\,i_X = L_X$`}</p>
                <p>
                  When to use: proving {"Poincare's Lemma"} or that Hamiltonian flows preserve{' '}
                  {`$\\omega^2$`}.
                </p>
              </div>
            </div>

            <h2>Symplectic Structure</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Standard Symplectic Form</span>
              <div className="lrn-definition-desc">
                <p>{`$\\omega^2 = \\sum_{i=1}^n dp_i \\wedge dq_i$`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Symplectic Isomorphism</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$I = \\begin{pmatrix} 0 & -E \\\\ E & 0 \\end{pmatrix}$`},{' '}
                  {`$\\quad I^2 = -E_{2n}$`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">{"Darboux's Theorem"}</span>
              <div className="lrn-definition-desc">
                <p>
                  Every {`$(M^{2n},\\omega^2)$`} has local coordinates {`$(p,q)$`} with{' '}
                  {`$\\omega^2 = \\sum dp_i \\wedge dq_i$`}. No local symplectic invariants.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref">
            <h2>{"Hamilton's Equations"}</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Hamiltonian</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-display">
                  <span>{`$$H(p, q, t) = \\sum_i p_i\\dot{q}_i - L$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Canonical Equations</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-display">
                  <span>{`$$\\dot{q}_i = \\frac{\\partial H}{\\partial p_i}, \\qquad \\dot{p}_i = -\\frac{\\partial H}{\\partial q_i}$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Hamiltonian Vector Field</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$\\omega^2(\\eta, I\\,dH) = dH(\\eta)$`} for all {`$\\eta$`}. In coordinates:{' '}
                  {`$\\dot p = -\\frac{\\partial H}{\\partial q}$`},{' '}
                  {`$\\dot q = \\frac{\\partial H}{\\partial p}$`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Phase Flow Preserves</span>
              <div className="lrn-definition-desc">
                <p>{`$(g^t)^*\\omega^2 = \\omega^2$`} (symplectic form)</p>
                <p>
                  {`$(\\omega^2)^n$`} (phase volume, {"Liouville's theorem"})
                </p>
                <p>{`$\\oint p\\,dq$`} (relative integral invariant)</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref">
            <h2>Poisson Brackets</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Definition</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-display">
                  <span>{`$$[f, g] = \\sum_k \\left(\\frac{\\partial f}{\\partial p_k}\\frac{\\partial g}{\\partial q_k} - \\frac{\\partial f}{\\partial q_k}\\frac{\\partial g}{\\partial p_k}\\right)$$`}</span>
                </div>
                <p>Also: {`$(F,H)(x) = \\frac{d}{dt}\\big|_{t=0} F(g^t_H(x))$`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Key Properties</span>
              <div className="lrn-definition-desc">
                <ul className="lrn-list">
                  <li>Antisymmetry: {`$[f,g] = -[g,f]$`}</li>
                  <li>Jacobi identity: {`$[f,[g,h]] + [g,[h,f]] + [h,[f,g]] = 0$`}</li>
                  <li>
                    Fundamental: {`$[q_i,q_k] = 0$`}, {`$[p_i,p_k] = 0$`},{' '}
                    {`$[p_i,q_k] = \\delta_{ik}$`}
                  </li>
                  <li>
                    {"Poisson's theorem"}: if {`$[H,f]=[H,g]=0$`} then {`$[H,[f,g]]=0$`}
                  </li>
                </ul>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Time Evolution</span>
              <div className="lrn-definition-desc">
                <p>{`$\\frac{df}{dt} = \\frac{\\partial f}{\\partial t} + [H, f]$`}</p>
                <p>f is conserved iff {`$\\frac{\\partial f}{\\partial t} + [H,f] = 0$`}</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref">
            <h2>Canonical Transformations</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Generating Function F(q, Q, t)</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$p_i = \\frac{\\partial F}{\\partial q_i}$`},{' '}
                  {`$P_i = -\\frac{\\partial F}{\\partial Q_i}$`},{' '}
                  {`$H' = H + \\frac{\\partial F}{\\partial t}$`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Generating Function S_2(P, q)</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$p = \\frac{\\partial S_2}{\\partial q}$`},{' '}
                  {`$Q = \\frac{\\partial S_2}{\\partial P}$`}. Identity: {`$S_2 = Pq$`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Poincare-Cartan Form</span>
              <div className="lrn-definition-desc">
                <p>{`$\\omega^1 = p\\,dq - H\\,dt$`}</p>
                <p>Vortex lines satisfy {"Hamilton's"} canonical equations.</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Jacobi Metric</span>
              <div className="lrn-definition-desc">
                <p>{`$d\\rho = \\sqrt{h - U(q)}\\,ds$`}</p>
                <p>Trajectories at energy h are geodesics of this metric.</p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="ref">
            <h2>Action and Hamilton-Jacobi</h2>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Action as Coordinate Function</span>
              <div className="lrn-definition-desc">
                <p>
                  {`$\\frac{\\partial S}{\\partial q_i} = p_i$`},{' '}
                  {`$\\frac{\\partial S}{\\partial t} = -H$`},{' '}
                  {`$dS = \\sum_i p_i\\,dq_i - H\\,dt$`}
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Hamilton-Jacobi Equation</span>
              <div className="lrn-definition-desc">
                <div className="lrn-eq lrn-eq-display">
                  <span>{`$$\\frac{\\partial S}{\\partial t} + H\\!\\left(q;\\frac{\\partial S}{\\partial q};t\\right) = 0$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Maupertuis Principle</span>
              <div className="lrn-definition-desc">
                <p>{`$\\delta S_0 = \\delta\\oint\\sum_i p_i\\,dq_i = 0$`} (fixed E)</p>
                <p>Jacobi form: {`$\\delta\\int\\sqrt{2m(E-U)}\\,dl = 0$`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">{"Huygens' Theorem"}</span>
              <div className="lrn-definition-desc">
                <p>{`$\\Phi_{q_0}(t+s) = \\text{envelope}\\{\\Phi_q(s) : q \\in \\Phi_{q_0}(t)\\}$`}</p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">{"Jacobi's Theorem"}</span>
              <div className="lrn-definition-desc">
                <p>
                  Complete integral {`$S(q,Q,t)$`} with{' '}
                  {`$\\det\\frac{\\partial^2 S}{\\partial Q \\partial q} \\neq 0$`} solves canonical
                  equations by quadratures.
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

export default function SpineOfPartIIIContent() {
  return <SpineOfPartIIIContentInner />
}
