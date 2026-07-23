import { useState } from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  LegendreHamiltonian,
  LiouvilleBlob,
  NestedEnergyLevels,
  PhaseFlowOrbits
} from '../../../../../components/viz'
import {
  Dot,
  OPACITY,
  Parametric,
  PlayPause,
  Plot,
  Tex,
  useAnimationTime
} from '../../../../../components/viz/primitives'
import { FONT_LABEL, FONT_SMALL, FONT_TINY } from '../../../../../components/viz/scale-tokens'

// Three orbits at different energies under the central linear force F = −k r
// (2D isotropic harmonic oscillator, k = 1 ⇒ ω = 1). The motion is the exact
// closed-form solution r(t) = (x₀ cos t, v₀ sin t): every orbit is a closed
// ellipse in POSITION space, the real-space companion to the phase-space
// figures that follow. No engine, no walls, the ellipses ARE the dynamics.
function PhasePortraitSimulation() {
  const [playing, setPlaying] = useState(true)
  const t = useAnimationTime(playing, 1)
  // (x₀, v₀): semi-axes of each ellipse; E = ½(x₀² + v₀²) all distinct.
  const orbits = [
    { x0: 0.9, v0: 0.5, op: OPACITY.fg },
    { x0: 1.6, v0: 1.0, op: OPACITY.accent },
    { x0: 2.3, v0: 1.5, op: OPACITY.dim }
  ]
  return (
    <div className="lrn-graph" style={{ width: '100%' }}>
      <Plot xRange={[-2.7, 2.7]} yRange={[-1.85, 1.85]} width={520} height={366}>
        {orbits.map(({ x0, v0, op }, i) => (
          <Parametric
            key={i}
            xy={u => [x0 * Math.cos(u), v0 * Math.sin(u)]}
            t={[0, 2 * Math.PI]}
            samples={120}
            opacity={op * 0.55}
            strokeWidth={1.2}
          />
        ))}
        {orbits.map(({ x0, v0, op }, i) => (
          <Dot key={`d${i}`} x={x0 * Math.cos(t)} y={v0 * Math.sin(t)} r={5} opacity={op} />
        ))}
        {orbits.map(({ x0, v0 }, i) => (
          <Tex
            key={`e${i}`}
            at={[x0 - 0.08, -0.2]}
            anchor="end"
            tex={`E=${(0.5 * (x0 * x0 + v0 * v0)).toFixed(2)}`}
            size={FONT_TINY}
            opacity={OPACITY.faint}
          />
        ))}
        <Dot x={0} y={0} r={3} opacity={OPACITY.dim} />
        <Tex
          at={[-2.6, 1.62]}
          anchor="start"
          tex={String.raw`\ddot{\mathbf{r}} = -k\,\mathbf{r}\quad(k=1)`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-2.6, -1.62]}
          anchor="start"
          tex={String.raw`\text{position space: every orbit closes}`}
          size={FONT_SMALL}
          opacity={OPACITY.faint}
        />
      </Plot>
      <PlayPause playing={playing} onToggle={() => setPlaying(p => !p)} />
    </div>
  )
}

function SpineOfPartIIIContentInner() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'sop',
    documentTitle: "Hamilton's Equations and the Legendre Transform - AETHER",
    learning: {
      groupTitle: 'Hamiltonian Mechanics and Canonical Formalism',
      category: 'Classical Mechanics',
      title: "Hamilton's Equations and the Legendre Transform",
      subtitle:
        'The Legendre transform trades velocities for momenta and turns the Lagrangian into the Hamiltonian. Hamilton then describes motion as a flow in phase space, governed by his two first-order canonical equations.',
      sections: [
        // 1: Hamilton's Equations and the Legendre Transform
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Hamilton's Equations</h2>
            <p>
              The Hamiltonian formulation is the gateway to the rest of this unit: conserved
              quantities, change-of-variable tricks, and the geometry of phase space all build on
              it. Engineers use it for control theory; quantum physicists use it as the template for
              quantisation.
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
              The Lagrangian {`$L(q, \\dot{q}, t)$`} is built on position and velocity. We want the
              same physics rebuilt on position and momentum. The tool that swaps a variable for its
              slope like this is the <strong>Legendre transform</strong>.
            </p>
            <p>
              Here is the picture. Plot {`$L$`} against the velocity {`$\\dot{q}$`}. The curve bends
              only one way, so at each point it has a different slope. Because no slope repeats, you
              can label the curve by its slope instead of by {`$\\dot{q}$`} and lose nothing. The
              slope becomes the new variable.
            </p>
            <p>
              That slope is the <strong>generalized momentum</strong>:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$p_i = \\frac{\\partial L}{\\partial \\dot{q}_i}$$`}</span>
            </div>
            <p>
              You met {`$p_i = \\partial L/\\partial\\dot{q}_i$`} earlier as the momentum conjugate
              to {`$q_i$`}. The Legendre transform now promotes it to a full independent variable
              that replaces the velocity.
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">When the swap is allowed</span>
              <p>
                Reading {`$\\dot{q}$`} back from {`$p$`} needs each slope to occur only once. That
                holds when the velocity Hessian{' '}
                {`$\\frac{\\partial^2 L}{\\partial \\dot{q}_i\\,\\partial \\dot{q}_j}$`} has nonzero
                determinant. Then the map {`$\\dot{q} \\mapsto p$`} is invertible, so you can solve
                for {`$\\dot{q}(q, p, t)$`}. If that determinant is zero the swap fails, and we call
                the system singular.
              </p>
            </div>

            <p>
              With the velocities now written through the momenta, define the{' '}
              <strong>Hamiltonian</strong> as the Legendre transform of {`$L$`}:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$H(p, q, t) = \\sum_i p_i \\dot{q}_i - L$$`}</span>
            </div>
            <p>
              Its value is the same number as the energy function{' '}
              {`$h = \\sum_i \\dot{q}_i\\,\\partial L/\\partial\\dot{q}_i - L$`} you met with
              Noether's theorem. It is just written on {`$(q, p)$`} now, not on {`$(q, \\dot{q})$`}.
              Transform a second time and you return to {`$L$`}: the Legendre transform is its own
              inverse.
            </p>
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

            <h3>The recipe, end to end</h3>
            <p>
              Building {`$H$`} from {`$L$`} is always the same five steps:
            </p>
            <ol className="lrn-list">
              <li>Write the Lagrangian {`$L(q, \\dot{q}, t)$`}.</li>
              <li>Compute each momentum {`$p_i = \\partial L/\\partial \\dot{q}_i$`}.</li>
              <li>
                Check the velocity Hessian is nonzero, then invert to get {`$\\dot{q}_i(q, p, t)$`}.
              </li>
              <li>
                Substitute into {`$H = \\sum_i p_i \\dot{q}_i - L$`} and remove every {`$\\dot{q}$`}
                .
              </li>
              <li>
                Read the motion from {`$\\dot{q}_i = \\partial H/\\partial p_i$`} and{' '}
                {`$\\dot{p}_i = -\\partial H/\\partial q_i$`}.
              </li>
            </ol>
            <p>
              Run the steps on the harmonic oscillator{' '}
              {`$L = \\frac{1}{2}m\\dot{q}^2 - \\frac{1}{2}kq^2$`}. The momentum is{' '}
              {`$p = m\\dot{q}$`}, so {`$\\dot{q} = p/m$`}. The Hessian is {`$m \\neq 0$`}, so the
              inversion is safe. Substituting gives{' '}
              {`$H = p\\,(p/m) - \\left[\\frac{1}{2}m(p/m)^2 - \\frac{1}{2}kq^2\\right] = \\frac{p^2}{2m} + \\frac{1}{2}kq^2$`}
              . That is kinetic plus potential energy, the total energy, now in {`$(q, p)$`}.
            </p>
            <p>
              You can now turn any Lagrangian into its Hamiltonian and write the motion as two
              first-order equations in phase space, the space whose points are the pairs{' '}
              {`$(q, p)$`}.
            </p>

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
            <PhasePortraitSimulation />
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

        // 2: Exterior Derivative
        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Exterior Derivative</h2>

            <p>
              You now have Hamilton's equations. The rest of this page shows the hidden geometry
              they carry: phase space has a built-in structure that makes the flow rigid and
              reversible. Seeing it takes one small piece of new machinery, the language of
              differential forms. The next two sections build that language; then we read Hamilton's
              equations again, this time as geometry.
            </p>

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

        // 3: Symplectic Manifolds
        <>
          <div className="lrn-section" id="lrn-section-2" data-section-index="2">
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
              is a covector (a linear machine that eats a vector and returns a number, here the
              momentum). It carries the natural symplectic structure {`$\\omega^2 = dp \\wedge dq$`}{' '}
              - no choices needed to define it.
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

        // 4: Hamiltonian Vector Fields
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
              isomorphism {`$I: T^*M \\to TM$`} (a reversible one-to-one matching between covectors
              and vectors) is defined by {`$\\omega^2_\\xi(\\eta) = \\omega^2(\\eta, \\xi)$`}.
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

        // 5: Phase Flows and Integral Invariants
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
              The flow also preserves all exterior powers of {`$\\omega^2$`} (the wedge products{' '}
              {`$(\\omega^2)^2, \\ldots, (\\omega^2)^n$`} that measure area, then four-volume, and
              so on up to full phase volume). The top power gives{' '}
              <strong>Liouville's theorem:</strong> Hamiltonian phase flows preserve phase volume.
            </p>

            <p>
              A <strong>relative integral invariant</strong> is a quantity whose loop integral the
              flow preserves. The 1-form {`$\\omega^1 = \\sum p_i\\,dq_i$`} is one:{' '}
              {`$\\oint_{gc} p\\,dq = \\oint_c p\\,dq$`} for any closed curve {`$c$`}.
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
        </>
      ]
    },

    practice: [
      {
        q: "Write Hamilton's canonical equations for a system with Hamiltonian H(q, p, t).",
        a: "The canonical equations are $\\dot{q}_i = \\frac{\\partial H}{\\partial p_i}$ and $\\dot{p}_i = -\\frac{\\partial H}{\\partial q_i}$. These replace the s second-order Lagrange equations with 2s first-order equations. The first equation gives velocity from momentum; the second is a generalised Newton's law."
      },
      {
        q: 'A free particle on a line has Lagrangian $L = \\frac{1}{2}m\\dot{q}^2$. Carry out the Legendre transform step by step to find its Hamiltonian.',
        a: 'Step 1, write $L = \\frac{1}{2}m\\dot{q}^2$. Step 2, the momentum is $p = \\frac{\\partial L}{\\partial \\dot{q}} = m\\dot{q}$. Step 3, invert for the velocity: $\\dot{q} = \\frac{p}{m}$. The Hessian is $\\frac{\\partial^2 L}{\\partial \\dot{q}^2} = m \\neq 0$, so the inverse exists. Step 4, substitute into $H = p\\dot{q} - L$: $H = p\\cdot\\frac{p}{m} - \\frac{1}{2}m\\left(\\frac{p}{m}\\right)^2 = \\frac{p^2}{2m}$. Step 5, read off $\\dot{q} = \\frac{\\partial H}{\\partial p} = \\frac{p}{m}$ and $\\dot{p} = -\\frac{\\partial H}{\\partial q} = 0$. Momentum is constant, as it must be for a free particle.'
      },
      {
        q: 'Find the Hamiltonian for a particle of mass m in a uniform gravitational field. Use Cartesian coordinates.',
        a: "Write $L = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2 + \\dot{z}^2) - mgz$. The momenta are $p_x = m\\dot{x}$, $p_y = m\\dot{y}$, $p_z = m\\dot{z}$. Invert each velocity, for example $\\dot{x} = \\frac{p_x}{m}$. Substitute into $H = \\sum p_i\\dot{q}_i - L$ to get $H = \\frac{p_x^2+p_y^2+p_z^2}{2m} + mgz$. Then $\\dot{p}_z = -\\frac{\\partial H}{\\partial z} = -mg$ recovers Newton's law."
      },
      {
        q: 'Why must the velocity-Hessian $\\det\\frac{\\partial^2 L}{\\partial \\dot{q}_i\\,\\partial \\dot{q}_j}$ be nonzero before you can build the Hamiltonian?',
        a: 'The momentum is $p_i = \\frac{\\partial L}{\\partial \\dot{q}_i}$. To form $H(q,p)$ you must solve this relation for the velocities $\\dot{q}_i(q,p)$. That inversion is possible exactly when the map $\\dot{q} \\mapsto p$ has a nonzero Jacobian, and that Jacobian is the Hessian $\\frac{\\partial^2 L}{\\partial \\dot{q}_i\\,\\partial \\dot{q}_j}$. If its determinant is zero, two different velocities can share one momentum, and $H$ is not well defined.'
      },
      {
        q: 'Explain why $H = \\sum_i p_i\\dot{q}_i - L$ equals the energy function $h = \\sum_i \\dot{q}_i\\frac{\\partial L}{\\partial \\dot{q}_i} - L$ met earlier.',
        a: 'By definition $p_i = \\frac{\\partial L}{\\partial \\dot{q}_i}$, so $\\sum_i p_i\\dot{q}_i = \\sum_i \\dot{q}_i\\frac{\\partial L}{\\partial \\dot{q}_i}$. The two expressions are the same formula, written in different variables. The energy function is built on $(q,\\dot{q})$; the Hamiltonian is the same number written on $(q,p)$. For a Lagrangian whose kinetic part is quadratic in the velocities, both equal the total energy.'
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
      title: "Hamilton's Equations and the Legendre Transform",
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
