import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import { Mafs, Coordinates, Point, Line, Circle, Text, vec } from 'mafs'
import 'mafs/core.css'

// ─── Static Mafs diagram: Contact plane field on ℝ³ ───────────────────────
function ContactPlaneFieldDiagram({ C }) {
  return (
    <div className="lrn-graph" style={{ height: 220 }}>
      <Mafs viewBox={{ x: [-6, 6], y: [-2.5, 2.5] }} preserveAspectRatio={false}>
        <Coordinates.Cartesian subdivisions={2} />
        {/* Sample hyperplane segments at various x positions */}
        {[-4, -2, 0, 2, 4].map(x => (
          <Line.Segment
            key={x}
            point1={[x - 0.9, -x * 0.4 - 0.5]}
            point2={[x + 0.9, -x * 0.4 + 0.5]}
            color={C.accent}
            opacity={0.7}
          />
        ))}
        <Text x={0} y={2.2} size={24} color={C.fg}>{`ω = x dy + dz`}</Text>
        <Text x={0} y={-2.2} size={24} color={C.dim}>{`contact field on ℝ³`}</Text>
      </Mafs>
    </div>
  )
}

// ─── Static Mafs diagram: Symplectification tower ──────────────────────────
function SymplectificationDiagram({ C }) {
  const xs = [-3, -1.5, 0, 1.5, 3]
  return (
    <div className="lrn-graph" style={{ height: 200 }}>
      <Mafs viewBox={{ x: [-5, 5], y: [-2.5, 2.5] }} preserveAspectRatio={false}>
        {xs.map(x => (
          <Point key={`c-${x}`} x={x} y={-1.1} color={C.accent} />
        ))}
        {xs.map(x => (
          <Point key={`s-${x}`} x={x} y={1.1} color={C.fg} />
        ))}
        {xs.map(x => (
          <Line.Segment key={`v-${x}`} point1={[x, -0.9]} point2={[x, 0.9]} color={C.dim} />
        ))}
        {xs.slice(0, -1).map((x, i) => (
          <Line.Segment key={`ht-${i}`} point1={[x, 1.1]} point2={[xs[i + 1], 1.1]} color={C.fg} />
        ))}
        {xs.slice(0, -1).map((x, i) => (
          <Line.Segment
            key={`hb-${i}`}
            point1={[x, -1.1]}
            point2={[xs[i + 1], -1.1]}
            color={C.accent}
          />
        ))}
        <Text x={0} y={2.1} size={24} color={C.fg}>{`Symplectification M̃ (dim N+1, even)`}</Text>
        <Text x={0} y={-2.1} size={24} color={C.accent}>{`Contact manifold M (dim N, odd)`}</Text>
      </Mafs>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────
export default function SymplecticContactStructuresSymmetries() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'scs',
    source: 'Mathematical Methods of Classical Mechanics - Arnold',
    documentTitle: 'Symplectic and Contact Structures with Symmetries - AETHER',

    learning: {
      groupTitle: 'Part III: Hamiltonian Mechanics and Canonical Formalism',
      category: 'Physics / Classical Mechanics',
      title: 'Symplectic and Contact Structures with Symmetries',
      subtitle: 'Kähler geometry, contact topology, momentum maps, and symmetry reduction',
      sections: [
        // ── SECTION 0: Hermitian Structure of Complex Projective Space ──
        <>
          <div id="lrn-section-0" data-section-index="0">
            <h2>Hermitian Structure of Complex Projective Space</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                You know a complex number has a real and imaginary part. What do you predict happens
                when you try to measure distance in a complex vector space using the standard dot
                product?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The ordinary dot product gives a real number, but complex space needs
                  complex-valued inner products. You need a <strong>hermitian product</strong> that
                  is linear in one argument and conjugate-linear in the other. Its real part gives
                  distances; its imaginary part gives a symplectic structure.
                </p>
              </details>
            </div>

            <p>
              Classical phase spaces are cotangent bundles. Algebraic geometry produces a completely
              different family: any smooth manifold defined by polynomial equations in{' '}
              {`$\\mathbb{CP}^n$`} carries a natural symplectic structure.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">
                Hermitian Structure on {`$\\mathbb{C}^n$`}
              </span>
              <div className="lrn-definition-desc">
                <p>
                  A <strong>hermitian scalar product</strong> {`$\\langle \\cdot, \\cdot \\rangle$`}{' '}
                  satisfies three rules.
                </p>
                <ol className="lrn-list">
                  <li>
                    {`$\\langle \\lambda \\zeta, \\eta \\rangle = \\lambda \\langle \\zeta, \\eta \\rangle$`}{' '}
                    (linear in first argument)
                  </li>
                  <li>
                    {`$\\langle \\eta, \\zeta \\rangle = \\overline{\\langle \\zeta, \\eta \\rangle}$`}{' '}
                    (conjugate symmetric)
                  </li>
                  <li>
                    {`$\\langle \\zeta, \\zeta \\rangle > 0$`} for {`$\\zeta \\neq 0$`} (positive
                    definite)
                  </li>
                </ol>
                <p>The standard hermitian product on {`$\\mathbb{C}^n$`} is:</p>
                <p className="lrn-eq">{`$$\\langle \\zeta, \\eta \\rangle = \\sum_k \\zeta_k \\bar{\\eta}_k$$`}</p>
              </div>
            </div>

            <p>
              The hermitian product splits into two real parts. Writing{' '}
              {`$\\langle \\zeta, \\eta \\rangle = (\\zeta, \\eta) + i[\\zeta, \\eta]$`}, you get a
              euclidean structure {`$(\\cdot,\\cdot)$`} and a symplectic structure{' '}
              {`$[\\cdot,\\cdot]$`}.
            </p>
            <p>The key relation connecting them is:</p>
            <div className="lrn-eq lrn-eq-display">{`$$[\\zeta, \\eta] = (\\zeta, i\\eta)$$`}</div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Multiplication by {`$i$`} rotates a complex vector by 90 degrees. The imaginary part{' '}
                {`$[\\zeta, \\eta]$`} measures the signed area of the parallelogram spanned by{' '}
                {`$\\zeta$`} and {`$\\eta$`}. In 2D geometry, area equals base times height: that
                height is the projection of {`$\\zeta$`} onto the direction perpendicular to{' '}
                {`$\\eta$`}, which is exactly {`$i\\eta$`}. So the area equals the dot product{' '}
                {`$(\\zeta, i\\eta)$`}. The same holds coordinate-by-coordinate in{' '}
                {`$\\mathbb{C}^n$`}.
              </p>
            </div>

            <h3>Complex Projective Space {`$\\mathbb{CP}^n$`}</h3>

            <p>
              The complex projective space {`$\\mathbb{CP}^n$`} is the set of all complex lines
              through 0 in {`$\\mathbb{C}^{n+1}$`}.
            </p>
            <p>
              You can think of it as the unit sphere{' '}
              {`$S^{2n+1} = \\{ z \\in \\mathbb{C}^{n+1} : \\langle z,z \\rangle = 1 \\}$`} with
              each circle {`$\\{e^{i\\theta} z\\}$`} collapsed to a point.
            </p>
            <p>
              Distance in {`$\\mathbb{CP}^n$`} equals the distance between the two corresponding
              circles on the unit sphere.
            </p>

            <div className="lrn-insight">
              The riemannian metric on {`$\\mathbb{CP}^n$`} comes from the hermitian structure. For
              a tangent vector {`$\\tilde{\\zeta}$`} at the class of {`$z$`}, the formula is:
            </div>

            <div className="lrn-eq">{`$$ds^2(\\tilde{\\zeta}) = \\frac{\\langle \\tilde{\\zeta}, \\tilde{\\zeta} \\rangle \\langle z, z \\rangle - \\langle \\tilde{\\zeta}, z \\rangle \\langle z, \\tilde{\\zeta} \\rangle}{\\langle z, z \\rangle^2}$$`}</div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the numerator subtract{' '}
                {`$\\langle \\tilde{\\zeta}, z \\rangle \\langle z, \\tilde{\\zeta} \\rangle$`}?
                Form your answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The formula projects {`$\\tilde{\\zeta}$`} onto the subspace hermitian-orthogonal
                  to {`$z$`}. Any component parallel to {`$z$`} corresponds to rescaling the line,
                  not moving between lines. Subtracting that parallel component measures only
                  genuine motion in {`$\\mathbb{CP}^n$`}.
                </p>
              </details>
            </div>

            <h3>Hermitian Structure on Tangent Spaces of {`$\\mathbb{CP}^n$`}</h3>

            <p>
              Each tangent space of {`$\\mathbb{CP}^n$`} inherits a hermitian structure. For tangent
              vectors {`$\\zeta_1, \\zeta_2$`} (lifted to {`$\\mathbb{C}^{n+1}$`} as{' '}
              {`$\\xi_1, \\xi_2$`}):
            </p>

            <div className="lrn-eq">{`$$\\langle \\zeta_1, \\zeta_2 \\rangle = \\frac{\\langle \\xi_1, \\xi_2 \\rangle \\langle z, z \\rangle - \\langle \\xi_1, z \\rangle \\langle z, \\xi_2 \\rangle}{\\langle z, z \\rangle^2}$$`}</div>

            <h3>Symplectic Structure on {`$\\mathbb{CP}^n$`}</h3>

            <p>
              The imaginary part of the hermitian structure gives the symplectic structure on{' '}
              {`$\\mathbb{CP}^n$`}.
            </p>

            <div className="lrn-eq lrn-eq-display">{`$$\\Omega(\\zeta_1, \\zeta_2) = -\\frac{1}{\\pi} \\operatorname{Im}\\langle \\zeta_1, \\zeta_2 \\rangle$$`}</div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                You need to check {`$d\\Omega = 0$`}. Unitary transformations preserve the hermitian
                structure and hence {`$\\Omega$`}. Any triple of tangent vectors can be rotated so
                at least one is hermitian-orthogonal to {`$z$`}. Then the antisymmetry of{' '}
                {`$\\Omega$`} forces {`$d\\Omega$`} to equal its own negative, so {`$d\\Omega = 0$`}
                .
              </p>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Remark</span>
              <p>
                {`$\\mathbb{CP}^n$`} is also an orbit of the co-adjoint representation of the
                unitary group {`$U(n+1)$`}. This gives an independent construction of its symplectic
                structure.
              </p>
            </div>
          </div>
        </>,

        // ── SECTION 1: Symplectic Structure on Algebraic Manifolds ──
        <>
          <div id="lrn-section-1" data-section-index="1">
            <h2>Symplectic Structure on Algebraic Manifolds</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                If {`$\\mathbb{CP}^n$`} has a symplectic structure, what do you predict happens to a
                complex submanifold sitting inside {`$\\mathbb{CP}^n$`}?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The submanifold inherits the symplectic form by restriction (pullback). The key
                  question is whether this pulled-back form is still nondegenerate. The complex
                  structure of the submanifold guarantees this.
                </p>
              </details>
            </div>

            <p>
              When to use: any smooth complex algebraic manifold (defined by polynomial equations in{' '}
              {`$\\mathbb{CP}^n$`}) automatically inherits a symplectic structure.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">
                Symplectic Structure on Algebraic Manifold
              </span>
              <div className="lrn-definition-desc">
                <p>
                  Let {`$j: M \\hookrightarrow \\mathbb{CP}^n$`} be a complex submanifold. The
                  pullback {`$\\Omega_M = j^* \\Omega$`} is a symplectic structure on {`$M$`}.
                </p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Why {`$\\Omega_M$`} is nondegenerate</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  For any tangent vector {`$\\xi \\neq 0$`} on a complex submanifold, you have{' '}
                  {`$i\\xi$`} also tangent.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Compute: {`$(\\xi, \\xi) = \\Omega_M(\\xi, i\\xi)$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  The left side is positive (euclidean metric), so {`$\\Omega_M(\\xi, i\\xi) > 0$`}{' '}
                  for {`$\\xi \\neq 0$`}. This proves nondegeneracy.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  Closedness: {`$d\\Omega_M = d(j^*\\Omega) = j^*(d\\Omega) = 0$`} since{' '}
                  {`$d\\Omega = 0$`}.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does step 2 use {`$i\\xi$`} instead of some other vector? Form your answer
                before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The complex structure rotates vectors by 90 degrees. Pairing {`$\\xi$`} with{' '}
                  {`$i\\xi$`} measures how much area the complex structure sweeps out, which equals
                  the euclidean length squared. No other vector gives a value you can directly
                  compare to a metric.
                </p>
              </details>
            </div>

            <h3>Kähler Manifolds</h3>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Kähler Manifold</span>
              <div className="lrn-definition-desc">
                <p>
                  A <strong>Kähler manifold</strong> is a complex manifold with a hermitian metric
                  whose imaginary part is a closed (symplectic) 2-form.
                </p>
              </div>
            </div>

            <p>
              Every smooth complex projective variety is Kähler. But not all symplectic manifolds
              are Kähler.
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Kähler requires the complex structure, the metric, and the symplectic form to all be
                compatible. Some symplectic manifolds (like certain solvmanifolds) have no
                compatible complex structure at all. Compact Kähler manifolds satisfy strong
                topological constraints - for instance, all their odd Betti numbers must be even -
                that many symplectic manifolds violate.
              </p>
            </div>

            <h3>Explicit Computation in Affine Coordinates</h3>

            <p>
              In the affine chart {`$w = \\frac{z_1}{z_0} = x + iy$`} of {`$\\mathbb{CP}^1$`}:
            </p>

            <div className="lrn-eq">{`$$\\Omega = \\frac{1}{\\pi} \\frac{dx \\wedge dy}{(1 + x^2 + y^2)^2}$$`}</div>

            <p>
              For general {`$\\mathbb{CP}^n$`} with affine coordinates {`$w_k = \\frac{z_k}{z_0}$`}:
            </p>

            <div className="lrn-eq">{`$$\\Omega = \\frac{i}{2\\pi} d'd'' \\ln \\sum_{k=0}^n |w_k|^2$$`}</div>

            <p>
              Here {`$d' = \\partial$`} (holomorphic derivative) and {`$d'' = \\bar{\\partial}$`}{' '}
              (anti-holomorphic derivative). These split the exterior derivative: {`$d = d' + d''$`}
              .
            </p>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>
                  Find {`$\\Omega$`} on {`$\\mathbb{CP}^1$`} in the chart {`$w = x + iy$`}, starting
                  from {`$\\Omega = \\frac{i}{2\\pi} d'd'' \\ln(1 + |w|^2)$`}.
                </p>
                <p>
                  Compute {`$\\ln(1 + |w|^2) = \\ln(1 + x^2 + y^2)$`}. Apply {`$d''$`}:{' '}
                  {`$d'' \\ln(1+|w|^2) = \\frac{\\bar{w}\\, d\\bar{w}}{1+|w|^2}$`}. Apply {`$d'$`}:
                  get {`$\\frac{dw \\wedge d\\bar{w}}{(1+|w|^2)^2}$`} (up to a factor). Since{' '}
                  {`$dw \\wedge d\\bar{w} = -2i\\, dx \\wedge dy$`}, you get{' '}
                  {`$\\Omega = \\frac{1}{\\pi} \\frac{dx \\wedge dy}{(1+x^2+y^2)^2}$`}.
                </p>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">YOUR TURN - PARTIAL</span>
                <ol className="lrn-list">
                  <li>Start from {`$d'd'' \\ln(1+x^2+y^2)$`}.</li>
                  <li>
                    Compute {`$d'' \\ln(1+|w|^2)$`} using {`$|w|^2 = w\\bar{w}$`}.
                  </li>
                  <li>
                    Apply {`$d'$`} to the result and convert {`$dw \\wedge d\\bar{w}$`} to real
                    coordinates.
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  Derive the {`$\\mathbb{CP}^2$`} formula directly from Problem 2: show that{' '}
                  {`$\\Omega = \\frac{\\frac{i}{2\\pi} \\sum_{0 \\leq k < l \\leq 2} (w_k d\\bar{w}_l - w_l d\\bar{w}_k)(\\bar{w}_k dw_l - \\bar{w}_l dw_k)}{(\\sum|w_k|^2)^2}$`}
                  .
                </p>
              </div>
            </div>
          </div>
        </>,

        // ── SECTION 2: Contact Structures ──
        <>
          <div id="lrn-section-2" data-section-index="2">
            <h2>Contact Structures</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Symplectic structures live on even-dimensional manifolds. What do you predict is the
                correct analogue for odd-dimensional manifolds?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  On an odd-dimensional manifold you cannot have a nondegenerate 2-form (the
                  skew-symmetry forces a zero eigenvalue). Instead, contact structures use a field
                  of hyperplanes (codimension-1 planes) that is "maximally nonintegrable." Every
                  odd-dimensional manifold of contact elements carries one naturally.
                </p>
              </details>
            </div>

            <p>
              When to use contact structures: any time your system involves contact elements or wave
              fronts. Examples include geometric optics, thermodynamics, and first-order PDE
              solving.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Contact Structure</span>
              <div className="lrn-definition-desc">
                <p>
                  A <strong>contact structure</strong> on an odd-dimensional manifold is a
                  nondegenerate field of tangent hyperplanes. A tangent hyperplane is a subspace of
                  dimension 1 less than the ambient space (codimension 1).
                </p>
              </div>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Symplectic (even-dim)</span>
                <p>Closed nondegenerate 2-form {`$\\omega$`}.</p>
                <p>Source: Hamiltonian mechanics, cotangent bundles.</p>
                <p>Even-dimensional manifolds only.</p>
                <p>Nondegeneracy: {`$\\omega^n \\neq 0$`}.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Contact (odd-dim)</span>
                <p>Nondegenerate field of hyperplanes.</p>
                <p>Source: manifolds of contact elements.</p>
                <p>Odd-dimensional manifolds only.</p>
                <p>Nondegeneracy: {`$\\omega \\wedge d\\omega^n \\neq 0$`}.</p>
              </div>
            </div>

            <ContactPlaneFieldDiagram C={C} />

            <h3>Frobenius Integrability Condition</h3>

            <p>
              A field of hyperplanes {`$\\ker \\omega$`} is <strong>integrable</strong> if there
              exist surfaces everywhere tangent to it.
            </p>
            <p>
              When {`$N = 2$`} (a surface), a field of hyperplanes is a field of lines. Lines on a
              surface are always locally integrable: you can always draw integral curves.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Frobenius Integrability Condition</span>
              <div className="lrn-definition-desc">
                <p>The field {`$\\omega = 0$`} is integrable if and only if:</p>
                <div className="lrn-eq lrn-eq-display">{`$$\\omega \\wedge d\\omega = 0$$`}</div>
                <p>
                  Equivalently: {`$d\\omega = 0$`} restricted to the hyperplane {`$\\omega = 0$`}.
                </p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">
                Why {`$\\omega \\wedge d\\omega = 0$`} characterizes integrability
              </span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Pick two vector fields {`$v_1, v_2$`} lying in the hyperplane. Follow {`$v_1$`}{' '}
                  for a small step, then {`$v_2$`}, then {`$-v_1$`}, then {`$-v_2$`}, returning near
                  the start. Measure {`$\\omega([v_1, v_2])$`} - the gap that records how far the
                  loop fails to close up within the hyperplane. If this is ever nonzero, no tangent
                  surface can exist.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  By Stokes' theorem, that gap equals {`$\\iint d\\omega$`} integrated over the
                  small square enclosed by the loop.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  If {`$d\\omega$`} vanishes on every pair of vectors in {`$\\ker \\omega$`}, every
                  small loop gives zero gap. The hyperplane field is self-consistent and integral
                  surfaces exist.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  Conversely, if integral surfaces exist, any loop staying within a surface returns
                  to the same point, forcing the gap to be zero.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the proof use a parallelogram and not a triangle? Form your answer before
                reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  Stokes' theorem relates a line integral around a boundary to a surface integral of
                  the exterior derivative. A parallelogram has four sides whose line integrals
                  combine to form the boundary of the enclosed area. Triangles work too, but
                  parallelograms arise naturally from following two flows forward then backward.
                </p>
              </details>
            </div>

            <h3>The Nonintegrable Example {`$\\omega = x\\,dy + dz$`}</h3>

            <p>
              Consider {`$\\mathbb{R}^3$`} with coordinates {`$(x, y, z)$`} (think: {`$x$`}{' '}
              horizontal, {`$y$`} horizontal, {`$z$`} vertical) and the 1-form{' '}
              {`$\\omega = x\\,dy + dz$`}.
            </p>
            <p>
              Compute {`$d\\omega = dx \\wedge dy$`}. Then{' '}
              {`$\\omega \\wedge d\\omega = (x\\,dy + dz) \\wedge (dx \\wedge dy) = dz \\wedge dx \\wedge dy \\neq 0$`}
              .
            </p>
            <p>
              So this field of planes has no integral surfaces at all. It is maximally
              nonintegrable.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does {`$\\omega \\wedge d\\omega \\neq 0$`} mean no integral surfaces exist?
                Form your answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  An integral surface tangent to {`$\\ker \\omega$`} would force{' '}
                  {`$\\omega|_{\\text{surface}} = 0$`}. But then Stokes' theorem gives{' '}
                  {`$0 = \\int \\omega = \\int d\\omega$`} on every small piece. If{' '}
                  {`$d\\omega|_{\\ker \\omega} \\neq 0$`}, no such surface can exist.
                </p>
              </details>
            </div>

            <h3>Nondegenerate Fields of Hyperplanes</h3>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Nondegenerate Field</span>
              <div className="lrn-definition-desc">
                <p>
                  A field of hyperplanes defined by {`$\\omega = 0$`} is{' '}
                  <strong>nondegenerate</strong> if the 2-form {`$d\\omega|_{\\omega=0}$`} has full
                  rank on the hyperplane at every point.
                </p>
              </div>
            </div>

            <p>
              Full rank on a hyperplane of dimension {`$2m$`} (requiring{' '}
              {`$\\omega \\wedge (d\\omega)^m \\neq 0$`}) is only possible when the ambient manifold
              has odd dimension {`$2m+1$`}.
            </p>
            <p>
              For {`$\\mathbb{R}^{2m+1}$`} with{' '}
              {`$\\omega = x_1\\,dy_1 + \\cdots + x_m\\,dy_m + dz$`}:
            </p>
            <div className="lrn-eq">{`$$d\\omega|_{\\omega=0} = dx_1 \\wedge dy_1 + \\cdots + dx_m \\wedge dy_m$$`}</div>
            <p>
              This has rank {`$2m$`} (maximum possible on a {`$2m$`}-dimensional plane).
            </p>
          </div>
        </>,

        // ── SECTION 3: Manifold of Contact Elements ──
        <>
          <div id="lrn-section-3" data-section-index="3">
            <h2>Manifold of Contact Elements</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A contact element of an {`$n$`}-manifold is an {`$(n-1)$`}-dimensional hyperplane at
                a point. Before reading: what is the dimension of the manifold of all contact
                elements of an {`$n$`}-manifold?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  You need {`$n$`} coordinates for the base point and {`$n-1$`} coordinates for the
                  hyperplane direction. Together: {`$n + (n-1) = 2n-1$`}. The manifold of contact
                  elements has dimension {`$2n-1$`}.
                </p>
              </details>
            </div>

            <p>
              When to use: contact element manifolds arise naturally in geometric optics (wave
              fronts), classical mechanics (phase space of orientation), and PDE solving (method of
              characteristics).
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Contact Element</span>
              <div className="lrn-definition-desc">
                <p>
                  A <strong>contact element</strong> of an {`$n$`}-dimensional manifold at a point{' '}
                  {`$p$`} is an {`$(n-1)$`}-dimensional hyperplane in the tangent space {`$T_p M$`}.
                  The point {`$p$`} is called the <strong>point of contact</strong>.
                </p>
              </div>
            </div>

            <p>
              Every {`$(n-1)$`}-dimensional plane in a vector space is the kernel of some nonzero
              linear form: scale that form by any nonzero constant and you get the same plane. So a
              contact element is uniquely described by a nonzero covector up to scaling - that is, a
              point in the <strong>projectivized cotangent bundle</strong> {`$PT^*M$`}.
            </p>
            <p>Its dimension is {`$n + (n-1) = 2n-1$`} (odd).</p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Contact Hyperplane on {`$PT^*M$`}</span>
              <div className="lrn-definition-desc">
                <p>
                  A tangent vector to the manifold of contact elements belongs to the{' '}
                  <strong>contact hyperplane</strong> if its projection onto {`$M$`} lies in the
                  given contact element.
                </p>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The contact condition says: when you move in the manifold of contact elements, your
                motion in the base manifold must be tangent to the current hyperplane. This is
                exactly the condition that defines holonomic contact: the hyperplane "rolls" along
                its own edges. It is the natural contact structure because it encodes the geometric
                constraint that the contact element and its motion are consistent.
              </p>
            </div>

            <h3>Oriented vs. Non-oriented Contact Elements</h3>

            <p>
              A non-oriented contact element is just a hyperplane. An oriented contact element is a
              hyperplane with a choice of which side is "positive."
            </p>
            <p>
              The manifold of oriented contact elements is a double covering of the ordinary
              (non-oriented) one. Both carry natural contact structures.
            </p>
            <p>
              The geodesic flow on a Riemannian manifold consists of contact diffeomorphisms of the
              manifold of oriented contact elements. A moving geodesic carries its tangent
              hyperplane along with it in exactly the contact sense - this is why geodesic flow is
              the prototypical example of a contact flow.
            </p>
          </div>
        </>,

        // ── SECTION 4: Symplectification ──
        <>
          <div id="lrn-section-4" data-section-index="4">
            <h2>Symplectification of a Contact Manifold</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A contact manifold has odd dimension {`$N$`}. You want to build a symplectic
                manifold from it. What dimension do you predict the result will have?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  To make a nondegenerate 2-form you need an even-dimensional manifold. You add one
                  dimension: {`$N + 1$`}. The symplectification has dimension {`$N + 1$`}.
                </p>
              </details>
            </div>

            <p>
              When to use: symplectification lets you apply all of symplectic geometry to contact
              problems. Every theorem about symplectic manifolds can be pulled back to contact
              manifolds via this construction.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Symplectification</span>
              <div className="lrn-definition-desc">
                <p>
                  The <strong>symplectification</strong> of a contact manifold{' '}
                  {`$(M^N, \\ker \\omega)$`} is the set of all contact forms at all points of{' '}
                  {`$M$`}:
                </p>
                <div className="lrn-eq">{`$$\\tilde{M} = \\{ (x, \\lambda \\omega_x) : x \\in M,\\; \\lambda \\in \\mathbb{R}^* \\}$$`}</div>
                <p>
                  This has dimension {`$N + 1$`}. It carries a canonical 1-form {`$\\alpha$`}{' '}
                  defined by {`$\\alpha(\\tilde{\\xi}) = p(\\pi_* \\tilde{\\xi})$`}: take a tangent
                  vector {`$\\tilde{\\xi}$`} to {`$\\tilde{M}$`}, project it to a tangent vector{' '}
                  {`$\\pi_* \\tilde{\\xi}$`} on {`$M$`}, then evaluate the current contact form{' '}
                  {`$p$`} on it. In other words, {`$\\alpha$`} measures how much the motion along{' '}
                  {`$\\tilde{M}$`} is detected by the contact form at that point.
                </p>
              </div>
            </div>

            <SymplectificationDiagram C={C} />

            <div className="lrn-insight">
              The canonical 1-form {`$\\alpha$`} on the symplectification is the contact analogue of
              "p dq" on a cotangent bundle. Its exterior derivative {`$d\\alpha$`} is the symplectic
              2-form.
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">
                Why {`$d\\alpha$`} is nondegenerate (local proof)
              </span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Choose a local 1-form {`$\\omega$`} giving the contact structure. Represent the
                  symplectification locally as {`$(x, \\lambda)$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Then {`$\\alpha = \\lambda \\pi^* \\omega$`}, so{' '}
                  {`$d\\alpha = d\\lambda \\wedge \\pi^*\\omega + \\lambda \\pi^* d\\omega$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  A vertical vector {`$\\partial_\\lambda$`} (moving only in the {`$\\lambda$`}{' '}
                  direction, not along {`$M$`}) satisfies{' '}
                  {`$d\\alpha(\\partial_\\lambda, v) = \\omega(\\pi_* v)$`} for any horizontal{' '}
                  {`$v$`} (moving along {`$M$`} at fixed {`$\\lambda$`}). Nondegeneracy of{' '}
                  {`$\\omega$`} on the contact plane gives the result.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  Any contact vector (in the kernel of {`$\\omega$`}) pairs with a horizontal shift
                  via the {`$\\lambda d\\omega$`} term, which is nondegenerate by the contact
                  condition.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does step 2 produce two terms instead of one? Form your answer before reading
                on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The product rule for exterior derivatives:{' '}
                  {`$d(\\lambda \\cdot \\pi^*\\omega) = d\\lambda \\wedge \\pi^*\\omega + \\lambda \\cdot d(\\pi^*\\omega)$`}
                  . The first term handles variation in the "fiber" direction (changing{' '}
                  {`$\\lambda$`}). The second term handles variation in the "base" direction (moving
                  on the contact manifold).
                </p>
              </details>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Key Example</span>
              <p>
                The manifold of all contact elements of an {`$n$`}-manifold has dimension {`$2n-1$`}
                . Its symplectification is the cotangent bundle {`$T^*M$`} without the zero section:
                a {`$2n$`}-dimensional symplectic manifold. The canonical 1-form{' '}
                {`$\\alpha = \\lambda \\pi^*\\omega$`} is exactly "p dq" in cotangent bundle
                coordinates.
              </p>
            </div>
          </div>
        </>,

        // ── SECTION 5: Contact Diffeomorphisms and Darboux Theorem ──
        <>
          <div id="lrn-section-5" data-section-index="5">
            <h2>Contact Diffeomorphisms and Darboux's Theorem</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Darboux's theorem for symplectic manifolds says all symplectic manifolds of the same
                dimension look the same locally. Do you predict the same holds for contact
                manifolds?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Yes. All contact manifolds of the same odd dimension are locally
                  contact-diffeomorphic. The local normal form is{' '}
                  {`$\\omega = x_1\\,dy_1 + \\cdots + x_n\\,dy_n + dz$`} in coordinates{' '}
                  {`$(x_1,\\ldots,x_n, y_1,\\ldots,y_n, z)$`}.
                </p>
              </details>
            </div>

            <p>
              When to use: contact diffeomorphisms arise in any system where the dynamics preserves
              the contact structure (geodesic flows, Legendre transforms, optical systems).
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Contact Diffeomorphism</span>
              <div className="lrn-definition-desc">
                <p>
                  A diffeomorphism {`$f: M \\to M$`} of a contact manifold is a{' '}
                  <strong>contact diffeomorphism</strong> if it carries every hyperplane of the
                  contact field to another hyperplane of the same field.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Contact Vector Field</span>
              <div className="lrn-definition-desc">
                <p>
                  A <strong>contact vector field</strong> is the velocity field of a one-parameter
                  group of contact diffeomorphisms. The Lie bracket of two contact vector fields is
                  again a contact vector field.
                </p>
              </div>
            </div>

            <h3>Symplectification of Contact Maps</h3>

            <p>
              Every contact diffeomorphism {`$f$`} of a contact manifold {`$M$`} induces a
              symplectic diffeomorphism {`$f_*$`} of its symplectification {`$\\tilde{M}$`}.
            </p>
            <p>
              The induced map pushes a contact form {`$p$`} at {`$x$`} forward to {`$f(x)$`}: it
              sends {`$p$`} to the unique contact form at {`$f(x)$`} that pulls back to {`$p$`}{' '}
              under {`$f^*$`}. In formulas: {`$(f^*_{f(x)})^{-1} p$`}.
            </p>
            <p>
              This map commutes with multiplication by real scalars and preserves the canonical
              1-form {`$\\alpha$`}.
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Remark</span>
              <p>
                Symplectification of contact vector fields is an isomorphism of Lie algebras: from
                contact vector fields to locally Hamiltonian fields whose Hamiltonians are
                homogeneous of degree 1.
              </p>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Contact diffeomorphism</span>
                <p>Preserves field of hyperplanes.</p>
                <p>Acts on odd-dimensional contact manifold.</p>
                <p>Lie bracket of two contact vector fields is contact.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Symplectic diffeomorphism</span>
                <p>Preserves 2-form {`$\\omega$`}.</p>
                <p>Acts on even-dimensional symplectic manifold.</p>
                <p>Poisson bracket of two Hamiltonian fields is Hamiltonian.</p>
              </div>
            </div>

            <h3>Darboux's Theorem for Contact Structures</h3>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Darboux Normal Form (Contact)</span>
              <div className="lrn-definition-desc">
                <p>
                  Every {`$(2n+1)$`}-dimensional contact manifold has local coordinates{' '}
                  {`$(x_1,\\ldots,x_n, y_1,\\ldots,y_n, z)$`} where the contact structure is:
                </p>
                <div className="lrn-eq lrn-eq-display">{`$$\\omega = x_1\\,dy_1 + \\cdots + x_n\\,dy_n + dz$$`}</div>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Proof via Symplectification</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Symplectify the {`$(2n+1)$`}-dimensional contact manifold to a {`$(2n+2)$`}
                  -dimensional symplectic manifold.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Apply the symplectic Darboux theorem to get canonical coordinates{' '}
                  {`$(p_0,\\ldots,p_n, q_0,\\ldots,q_n)$`} with{' '}
                  {`$d\\alpha = \\sum dp_k \\wedge dq_k$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  Restrict to the surface {`$p_0 = 1$`} (or {`$\\lambda = 1$`}). The contact
                  structure becomes {`$\\omega = p_1\\,dq_1 + \\cdots + p_n\\,dq_n + dq_0$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  Renaming {`$p_k = x_k$`}, {`$q_k = y_k$`}, {`$q_0 = z$`} gives the normal form.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does step 3 restrict to {`$p_0 = 1$`} instead of {`$p_0 = 0$`}? Form your answer
                before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The symplectification has an {`$\\mathbb{R}^*$`}-action scaling the contact forms.
                  Setting {`$p_0 = 0$`} would land on the zero section, which is excluded from the
                  symplectification. Setting {`$p_0 = 1$`} picks a single representative in each{' '}
                  {`$\\mathbb{R}^*$`}-orbit, identifying the symplectification fiber with the
                  original contact manifold.
                </p>
              </details>
            </div>
          </div>
        </>,

        // ── SECTION 6: Contact Hamiltonians and Legendre Manifolds ──
        <>
          <div id="lrn-section-6" data-section-index="6">
            <h2>Contact Hamiltonians and Legendre Manifolds</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                In symplectic mechanics, a Hamiltonian function {`$H$`} determines a vector field
                via {`$\\omega(\\cdot, X_H) = dH$`}. Predict how a contact Hamiltonian {`$K$`}{' '}
                determines a contact vector field.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The contact Hamiltonian {`$K = \\omega(X)$`}: you evaluate the contact 1-form on
                  the vector field. Knowing {`$K$`} (plus the fixed contact form) lets you recover{' '}
                  {`$X$`} completely.
                </p>
              </details>
            </div>

            <p>
              When to use: contact Hamiltonians arise in thermodynamics (Legendre transform between
              thermodynamic potentials), geometric optics (contact Hamilton-Jacobi equation), and
              first-order PDE solving.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Contact Hamiltonian Function</span>
              <div className="lrn-definition-desc">
                <p>
                  Given a contact vector field {`$X$`} and a fixed contact 1-form {`$\\omega$`}, the{' '}
                  <strong>contact Hamiltonian</strong> is:
                </p>
                <div className="lrn-eq lrn-eq-display">{`$$K = \\omega(X)$$`}</div>
                <p>
                  This scalar function on the contact manifold determines {`$X$`} completely (given{' '}
                  {`$\\omega$`}).
                </p>
              </div>
            </div>

            <h3>Equations of Contact Field in Normal Form</h3>

            <p>
              In the Darboux coordinates {`$(x, y, z)$`} with {`$\\omega = x\\,dy + dz$`}, the
              contact equations for a field with Hamiltonian {`$K = K(x,y,z)$`} are:
            </p>

            <div className="lrn-eq">{`$$\\dot{x} = -K_y + x K_z, \\quad \\dot{y} = K_x, \\quad \\dot{z} = K - x K_x$$`}</div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Lift to the symplectification. Use momentum variables{' '}
                {`$(P_y, P_z) = (\\lambda x, \\lambda)$`} conjugate to {`$(y, z)$`}. The canonical
                1-form is {`$\\alpha = \\lambda x\\,dy + \\lambda\\,dz$`}. The Hamiltonian lifts to{' '}
                {`$H = \\lambda K(x,y,z)$`}, homogeneous of degree 1 in {`$\\lambda$`}. Write
                Hamilton's equations for {`$H$`} on the symplectification, then restrict to the
                surface {`$\\lambda = 1$`} to recover the three contact equations.
              </p>
            </div>

            <h3>Poisson Bracket of Contact Fields</h3>

            <p>
              If {`$K$`} and {`$K'$`} are contact Hamiltonians, their contact bracket is:
            </p>

            <div className="lrn-eq">{`$$\\{K, K'\\} = (K, K') + K_z \\cdot EK' - K'_z \\cdot EK$$`}</div>

            <p>
              Here {`$(K, K')$`} is the ordinary Poisson bracket in {`$(x,y)$`} variables, and{' '}
              {`$E$`} is the Euler operator {`$EF = F - x F_x$`}.
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Contact Hamiltonian {`$K$`}</span>
                <p>Function on a {`$(2n+1)$`}-dimensional contact manifold.</p>
                <p>Determined by {`$K = \\omega(X)$`}.</p>
                <p>Bracket involves Euler operator {`$E$`}.</p>
                <p>Lifts to homogeneous {`$H = \\lambda K$`} on symplectification.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Symplectic Hamiltonian {`$H$`}</span>
                <p>Function on a {`$2n$`}-dimensional symplectic manifold.</p>
                <p>Determined by {`$\\omega(\\cdot, X_H) = dH$`}.</p>
                <p>Bracket is standard Poisson bracket {`$(H, H')$`}.</p>
                <p>Projects from symplectification's homogeneous Hamiltonians.</p>
              </div>
            </div>

            <h3>Legendre Manifolds</h3>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Legendre Manifold</span>
              <div className="lrn-definition-desc">
                <p>
                  An <strong>{`$n$`}-dimensional Legendre manifold</strong> in a {`$(2n+1)$`}
                  -dimensional contact manifold is an integral manifold of the contact field: at
                  every point it is tangent to the contact hyperplane.
                </p>
                <p>This is the contact analogue of a Lagrangian submanifold.</p>
              </div>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Lagrangian Submanifold (Symplectic)</span>
                <p>
                  {`$n$`}-dimensional submanifold in {`$2n$`}-dim symplectic manifold.
                </p>
                <p>Condition: {`$\\omega^2|_L = 0$`}.</p>
                <p>Generating functions via canonical transforms.</p>
                <p>Projection onto base gives Lagrangian singularities.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Legendre Submanifold (Contact)</span>
                <p>
                  {`$n$`}-dimensional submanifold in {`$(2n+1)$`}-dim contact manifold.
                </p>
                <p>Condition: tangent to contact planes everywhere.</p>
                <p>Generating functions via Legendre fibration.</p>
                <p>Projection onto base gives Legendre (wave front) singularities.</p>
              </div>
            </div>

            <h3>Key Examples of Legendre Manifolds</h3>

            <p>
              The set of all contact elements tangent to any submanifold of an {`$m$`}-manifold
              forms an {`$(m-1)$`}-dimensional Legendre submanifold in the {`$(2m-1)$`}-dimensional
              manifold of contact elements.
            </p>
            <p>
              In {`$\\mathbb{R}^{n+1}$`} with contact structure{' '}
              {`$\\omega = p_1\\,dx_1 + \\cdots + p_n\\,dx_n - df$`}, the set of all planes tangent
              to the graph of {`$f = \\varphi(x)$`} is a Legendre submanifold.
            </p>

            <h3>Legendre Involution</h3>

            <p>
              The map {`$(p, x, f) \\mapsto (P = x,\\; X = p,\\; F = px - f)$`} is a contact
              diffeomorphism. It carries Legendre manifolds to Legendre manifolds.
            </p>
            <p>
              This is the geometric version of the Legendre transform from convex analysis. When{' '}
              {`$f = \\varphi(x)$`} is convex, the projection of the resulting Legendre manifold is
              the graph of the convex dual {`$\\Phi$`}. When {`$\\varphi$`} is not convex,
              singularities (cusps, swallowtails) appear.
            </p>
          </div>
        </>,

        // ── SECTION 7: Legendre Fibration and Wave Front Singularities ──
        <>
          <div id="lrn-section-7" data-section-index="7">
            <h2>Legendre Fibration and Wave Front Singularities</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                When you project a Legendre manifold onto the base space, singularities can appear.
                Predict what types of singularities occur "in general position" on a wave front in{' '}
                {`$\\mathbb{R}^3$`}.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  In general position in {`$\\mathbb{R}^3$`}, wave fronts have only cusps ({`$A_2$`}
                  ) and swallowtail points ({`$A_3$`}). At isolated moments, transitions of types{' '}
                  {`$A_4$`}, {`$D_4$`}, {`$D_4^*$`} occur.
                </p>
              </details>
            </div>

            <p>
              When to use: Legendre fibrations appear in the classification of wave front
              singularities, catastrophe theory, and the geometry of generating functions.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Legendre Fibration</span>
              <div className="lrn-definition-desc">
                <p>
                  Given a partition {`$I + J = \\{1,\\ldots,n\\}$`} and a function {`$S(x_I, y_J)$`}
                  , a Legendre manifold in {`$\\mathbb{R}^{2n+1}$`} is given by:
                </p>
                <div className="lrn-eq">{`$$y_I = \\frac{\\partial S}{\\partial x_I}, \\quad x_J = -\\frac{\\partial S}{\\partial y_J}, \\quad z = S - x_I \\frac{\\partial S}{\\partial x_I}$$`}</div>
              </div>
            </div>

            <h3>Wave Front Singularity Types</h3>

            <p>
              The singularities of a Legendre mapping for {`$n < 6$`} in general position are
              approximated by maps with singularities from the list {`$A_k$`} (
              {`$1 \\leq k \\leq 6$`}), {`$D_k$`} ({`$4 \\leq k \\leq 6$`}), and {`$E_6$`}.
            </p>
            <p>In {`$\\mathbb{R}^3$`}, the generic wave front singularity types are:</p>

            <ul className="lrn-list">
              <li>{`$A_1: S = \\pm x_1^2$`} (smooth fold)</li>
              <li>{`$A_2: S = \\pm x_1^3$`} (cusp)</li>
              <li>{`$A_3: S = \\pm x_1^4 + x_1^2 y_2$`} (swallowtail)</li>
            </ul>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Note</span>
              <p>
                Wave fronts in general position in {`$\\mathbb{R}^3$`} have only cusps and
                swallowtail points. At isolated moments in time, transitions of types{' '}
                {`$A_4, D_4, D_4^*$`} occur.
              </p>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does a non-convex Legendre projection produce singularities while a convex one
                does not? Form your answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The projection of a Legendre manifold onto the base is regular when the Jacobian
                  of the generating function {`$S$`} is a diffeomorphism at every point. For convex{' '}
                  {`$S$`}, the Hessian {`$\\frac{\\partial^2 S}{\\partial x^2}$`} is positive
                  definite, so the projection is always a local diffeomorphism. For non-convex{' '}
                  {`$S$`}, the Hessian can degenerate, creating fold points (cusps, swallowtails).
                </p>
              </details>
            </div>
          </div>
        </>,

        // ── SECTION 8: Contactification ──
        <>
          <div id="lrn-section-8" data-section-index="8">
            <h2>Contactification</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                Symplectification adds one dimension to a contact manifold. Predict how you go the
                other way: from a symplectic manifold to a contact manifold.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  You also add one dimension. The contactification of a {`$2n$`}-dimensional
                  symplectic manifold is a {`$(2n+1)$`}-dimensional contact manifold. They are
                  inverse operations when the cohomology class of {`$\\omega^2$`} is integral.
                </p>
              </details>
            </div>

            <p>
              When to use: contactification lets you turn any symplectic problem into a contact
              problem, and is the geometric basis of the Hamilton-Jacobi equation.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Contactification</span>
              <div className="lrn-definition-desc">
                <p>
                  The <strong>contactification</strong> {`$E^{2n+1}$`} of a symplectic manifold{' '}
                  {`$(M^{2n}, \\omega^2)$`} is a bundle with fiber {`$\\mathbb{R}$`} over{' '}
                  {`$M^{2n}$`}. Its contact structure is given locally by:
                </p>
                <div className="lrn-eq lrn-eq-display">{`$$\\alpha = dz + p\\,dq$$`}</div>
                <p>
                  where {`$(p,q)$`} are Darboux coordinates on {`$M^{2n}$`} and {`$z$`} is the fiber
                  coordinate.
                </p>
              </div>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Symplectification</span>
                <p>
                  Takes {`$(2n-1)$`}-dim contact manifold to {`$2n$`}-dim symplectic manifold.
                </p>
                <p>Adds one dimension via {`$\\mathbb{R}^*$`}-fiber of contact forms.</p>
                <p>Always defined for any contact manifold.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Contactification</span>
                <p>
                  Takes {`$2n$`}-dim symplectic manifold to {`$(2n+1)$`}-dim contact manifold.
                </p>
                <p>Adds one dimension via {`$\\mathbb{R}$`}-fiber.</p>
                <p>Requires {`$[\\omega^2]$`} integral (cohomology condition).</p>
              </div>
            </div>

            <h3>Integration of First-Order PDEs via Contact Geometry</h3>

            <p>
              The equation {`$\\Phi(x, \\frac{\\partial u}{\\partial x}, u) = 0$`} defines a
              hypersurface {`$E = \\Phi^{-1}(0)$`} in the space of 1-jets of functions.
            </p>
            <p>
              The space of 1-jets has coordinates {`$(x_1,\\ldots,x_n, p_1,\\ldots,p_n, u)$`} with
              contact structure {`$\\alpha = du - p\\,dx$`}.
            </p>
            <p>
              The characteristic vector {`$\\xi$`} at a point of {`$E$`} is the unique direction in
              the intersection of the tangent plane to {`$E$`} with the contact plane such that{' '}
              {`$d\\Phi(\\xi) = 0$`}.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Why characteristics give the solution</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Start with a noncharacteristic initial Legendre manifold {`$I \\subset E$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  The homotopy formula gives{' '}
                  {`$\\mathcal{L}_\\xi \\alpha = d(i_\\xi \\alpha) + i_\\xi(d\\alpha)$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  Since {`$\\xi$`} is a characteristic (in the contact plane),{' '}
                  {`$i_\\xi \\alpha = 0$`}; also {`$i_\\xi d\\alpha = c\\alpha$`} on {`$E$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  So {`$\\mathcal{L}_\\xi \\alpha = c\\alpha$`}: the flow of {`$\\xi$`} scales{' '}
                  {`$\\alpha$`}. An integral manifold stays integral under this flow.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">
                  The characteristics through {`$I$`} form a Legendre manifold. Its projection onto{' '}
                  {`$(x,u)$`}-space is the solution {`$u(x)$`}.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why must the initial manifold {`$I$`} be noncharacteristic? Form your answer before
                reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  If {`$I$`} were characteristic, the characteristics through it would not sweep out
                  a full {`$n$`}-dimensional manifold. You would get a lower-dimensional set, not
                  enough to determine the solution everywhere. Noncharacteristic means {`$I$`} and
                  the characteristics together span the tangent space of {`$E$`} at every point.
                </p>
              </details>
            </div>
          </div>
        </>,

        // ── SECTION 9: Dynamical Systems with Symmetries ──
        <>
          <div id="lrn-section-9" data-section-index="9">
            <h2>Dynamical Systems with Symmetries</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                When a Lie group acts on a symplectic manifold, each one-parameter subgroup may have
                a Hamiltonian function. Predict what extra condition makes these Hamiltonians form a
                Lie algebra homomorphism.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  The Hamiltonians must satisfy {`$H_{[a,b]} = (H_a, H_b)$`}: the Hamiltonian of the
                  Lie bracket equals the Poisson bracket of the Hamiltonians. This is the Poisson
                  action condition. Without it, there could be a 2-cocycle obstruction.
                </p>
              </details>
            </div>

            <p>
              When to use: symmetry reduction appears whenever a physical system has a conserved
              quantity (angular momentum, linear momentum, charge). The reduced phase space has
              fewer degrees of freedom and carries a natural symplectic structure.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Poisson Action of a Lie Group</span>
              <div className="lrn-definition-desc">
                <p>
                  A symplectic action of a Lie group {`$G$`} on {`$(M^{2n}, \\omega)$`} is a{' '}
                  <strong>Poisson action</strong> if there exist single-valued Hamiltonian functions{' '}
                  {`$H_a$`} for each {`$a \\in \\mathfrak{g}$`} (Lie algebra), depending linearly on{' '}
                  {`$a$`}, and satisfying:
                </p>
                <div className="lrn-eq lrn-eq-display">{`$$H_{[a,b]} = (H_a, H_b)$$`}</div>
                <p>
                  This defines a Lie algebra homomorphism {`$\\mathfrak{g} \\to C^\\infty(M)$`}.
                </p>
              </div>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Poisson Action</span>
                <p>
                  Single-valued Hamiltonians {`$H_a$`} linear in {`$a \\in \\mathfrak{g}$`}.
                </p>
                <p>{`$H_{[a,b]} = (H_a, H_b)$`}: bracket is preserved.</p>
                <p>Defines Lie algebra homomorphism.</p>
                <p>Cotangent bundle actions are always Poisson.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">General Symplectic Action</span>
                <p>One-parameter subgroups may have multi-valued or no Hamiltonians.</p>
                <p>{`$H_{[a,b]} = (H_a, H_b) + C(a,b)$`}: 2-cocycle obstruction.</p>
                <p>Only a projective Lie algebra homomorphism.</p>
                <p>General case requires checking cohomology class.</p>
              </div>
            </div>

            <h3>Noether Formula and Momentum Mapping</h3>

            <p>
              For a cotangent bundle {`$M = T^*V$`}, the Hamiltonian of a one-parameter group{' '}
              {`$g^t$`} is:
            </p>

            <div className="lrn-eq lrn-eq-display">{`$$H(x) = \\alpha\\!\\left(\\left.\\frac{d}{dt}\\right|_{t=0} g^t x\\right)$$`}</div>

            <p>
              Here {`$\\alpha$`} is the canonical 1-form ("p dq") on {`$T^*V$`}. This is Noether's
              theorem in geometric form.
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The Hamiltonian functions {`$H_a$`} are linear in the momentum {`$p$`} (since they
                come from cotangent lifts). Linear functions in {`$p$`} Poisson-bracket to linear
                functions in {`$p$`}. So the bracket {`$(H_a, H_b) - H_{[a,b]}$`} is a constant, and
                that constant must be zero (it vanishes at {`$p = 0$`} since all linear functions
                vanish there).
              </p>
            </div>

            <p>
              The <strong>momentum mapping</strong> {`$P: M \\to \\mathfrak{g}^*$`} assigns to each
              point {`$x \\in M$`} the linear function:
            </p>

            <div className="lrn-eq">{`$$p_x(a) = H_a(x)$$`}</div>

            <div className="lrn-insight">
              The momentum mapping generalizes both linear momentum ({`$p_1, p_2, p_3$`} for
              translations) and angular momentum ({`$M_1, M_2, M_3$`} for rotations).
            </div>

            <h3>Example: Euclidean Group of Motions</h3>

            <p>
              Let {`$V = \\mathbb{R}^3$`} and {`$G$`} be the 6-dimensional group of Euclidean
              motions (3 translations + 3 rotations).
            </p>
            <p>
              Translations have Hamiltonians {`$p_1, p_2, p_3$`} (components of linear momentum).
            </p>
            <p>
              Rotations have Hamiltonians {`$M_1 = q_2 p_3 - q_3 p_2$`},{' '}
              {`$M_2 = q_3 p_1 - q_1 p_3$`}, {`$M_3 = q_1 p_2 - q_2 p_1$`} (angular momentum
              components).
            </p>

            <h3>Equivariance of the Momentum Mapping</h3>

            <p>
              The momentum mapping {`$P$`} commutes with the Poisson action of {`$G$`} on {`$M$`}{' '}
              and the co-adjoint action of {`$G$`} on {`$\\mathfrak{g}^*$`}:
            </p>

            <div className="lrn-eq">{`$$P(g \\cdot x) = \\mathrm{Ad}^*_{g^{-1}} P(x)$$`}</div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Why {`$P$`} is equivariant</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  The Hamiltonian of the one-parameter group {`$g^{shs^{-1}}$`} is{' '}
                  {`$H_{\\mathrm{Ad}_{g^{-s}} h}$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Since the action is Poisson, the Hamiltonian depends linearly on the Lie algebra
                  element.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  Taking the first derivative at {`$s = 0$`} and comparing both sides gives
                  equivariance.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>
          </div>
        </>,

        // ── SECTION 10: Reduced Phase Space ──
        <>
          <div id="lrn-section-10" data-section-index="10">
            <h2>Reduced Phase Space</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                If you fix a conserved momentum value {`$p$`} and divide out the symmetry group{' '}
                {`$G_p$`} that fixes it, what do you predict the dimension of the result will be?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Start with {`$2n$`}-dimensional {`$M$`}. Fixing {`$P = p$`} cuts out {`$M_p$`} of
                  dimension {`$2n - \\dim G$`}. Dividing by {`$G_p$`} reduces dimension further by{' '}
                  {`$\\dim G_p$`}. So {`$F_p$`} has dimension {`$2n - \\dim G - \\dim G_p$`}.
                </p>
              </details>
            </div>

            <p>
              When to use: symmetry reduction eliminates conserved quantities as degrees of freedom.
              It turns a system with {`$n$`} degrees of freedom and a {`$k$`}-dimensional symmetry
              into a system with fewer degrees of freedom.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">
                Momentum Level Set and Reduced Phase Space
              </span>
              <div className="lrn-definition-desc">
                <p>
                  Let {`$p \\in \\mathfrak{g}^*$`} be a <strong>regular value</strong> of {`$P$`}{' '}
                  (meaning {`$dP$`} maps {`$T_x M$`} onto all of {`$\\mathfrak{g}^*$`} for every{' '}
                  {`$x \\in M_p$`}).
                </p>
                <p>
                  The <strong>momentum level set</strong> is {`$M_p = P^{-1}(p)$`}.
                </p>
                <p>
                  The <strong>reduced phase space</strong> is {`$F_p = \\frac{M_p}{G_p}$`} where{' '}
                  {`$G_p$`} is the stationary subgroup of {`$p$`} under the co-adjoint action.
                </p>
              </div>
            </div>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Symplectic Structure on {`$F_p$`}</span>
              <div className="lrn-definition-desc">
                <p>The skew-scalar product on {`$F_p$`} is defined by:</p>
                <div className="lrn-eq">{`$$[\\xi, \\eta]_p = [\\xi', \\eta']$$`}</div>
                <p>
                  where {`$\\xi', \\eta'$`} are any representatives of{' '}
                  {`$\\xi, \\eta \\in T_{[x]} F_p$`} in {`$T_x M_p$`}.
                </p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Why the reduced form is well-defined</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Key lemma: {`$T(M_p)$`} and {`$T(G \\cdot x)$`} (the orbit tangent space) are
                  skew-orthogonal complements in {`$TM$`}. Why: by Hamilton's equations,{' '}
                  {`$\\omega(\\xi, X_{H_a}) = dH_a(\\xi)$`}. A vector {`$\\xi \\in T(M_p)$`}{' '}
                  satisfies {`$dH_a(\\xi) = 0$`} for all {`$a$`} (it stays on the momentum level),
                  so {`$\\xi$`} is {`$\\omega$`}-orthogonal to every orbit direction {`$X_{H_a}$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Representatives are defined up to adding a vector in {`$T(G_p \\cdot x)$`}, which
                  is in {`$T(M_p)$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  By the lemma, {`$T(G_p \\cdot x)$`} is skew-orthogonal to all of {`$T(M_p)$`}. So
                  the bracket is independent of the choice of representative.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  Closedness: the reduced form is the restriction of the closed form {`$\\omega$`}{' '}
                  to {`$M_p$`}, projected onto charts transverse to the orbits. Restriction and
                  projection both preserve closedness.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Historical Note</span>
              <p>
                The theorem on the symplectic structure of the reduced phase space was first stated
                by Marsden and Weinstein. Special cases were found by Jacobi, Poincaré, Kirillov,
                Kostant, and Faddeev.
              </p>
            </div>

            <h3>Three Key Examples of Reduction</h3>

            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-title">Harmonic Oscillator Reduction</span>
                <p className="lrn-step-content">
                  {`$M = \\mathbb{R}^{2n}$`}, {`$G = S^1$`} acting by phase rotation,{' '}
                  {`$H = \\frac{1}{2}\\sum(p_k^2 + q_k^2)$`}. Momentum level {`$M_p = S^{2n-1}$`}.
                  Reduced phase space {`$= \\mathbb{CP}^{n-1}$`} with the symplectic structure from
                  Appendix 3.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Cotangent Bundle of Lie Group</span>
                <p className="lrn-step-content">
                  {`$M = T^*G$`} with {`$G$`} acting by left translation.
                  {`$M_p$`} is diffeomorphic to {`$G$`} itself. Orbits of {`$G_p$`} give the
                  co-adjoint orbit of {`$p$`} - with the Kirillov symplectic structure.
                </p>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-title">Quotient Configuration Manifold</span>
                <p className="lrn-step-content">
                  {`$G = S^1$`} acts on {`$M = T^*V$`} without fixed points. Reduced phase space{' '}
                  {`$F_p$`} is the cotangent bundle of the quotient configuration manifold{' '}
                  {`$W = \\frac{V}{G}$`}.
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does the harmonic oscillator example produce {`$\\mathbb{CP}^{n-1}$`} and not
                some other manifold? Form your answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  The {`$S^1$`} action on {`$\\mathbb{R}^{2n}$`} rotates each {`$(p_k, q_k)$`} pair
                  by the same phase. The energy level {`$S^{2n-1}$`} is acted on freely by {`$S^1$`}
                  . The quotient of an odd-dimensional sphere by a free circle action is precisely
                  complex projective space. The induced symplectic structure matches the Kähler
                  structure from the hermitian structure of {`$\\mathbb{C}^n$`}.
                </p>
              </details>
            </div>

            <h3>Singular Momentum Values</h3>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Regular Momentum Value {`$p$`}</span>
                <p>
                  {`$dP$`} maps {`$T_x M$`} onto all of {`$\\mathfrak{g}^*$`} at every{' '}
                  {`$x \\in M_p$`}.
                </p>
                <p>{`$M_p$`} is a smooth submanifold.</p>
                <p>Factoring by {`$G_p$`} gives a smooth reduced phase space.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Singular Momentum Value {`$p$`}</span>
                <p>
                  {`$dP$`} fails to be surjective at some point of {`$M_p$`}.
                </p>
                <p>{`$M_p$`} may not be a manifold (has corners or self-intersections).</p>
                <p>Partition into orbits has singularities.</p>
              </div>
            </div>
          </div>
        </>,

        // ── SECTION 11: Relative Equilibria ──
        <>
          <div id="lrn-section-11" data-section-index="11">
            <h2>Stationary Rotations and Relative Equilibria</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A relative equilibrium is a motion that looks like an equilibrium in the reduced
                phase space. Predict what the original motion looks like in the full phase space.
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  In the full phase space, a relative equilibrium is an orbit of a one-parameter
                  subgroup of the symmetry group {`$G$`}. So it is not a fixed point but a regular,
                  symmetric orbit (like a rotation at constant angular velocity).
                </p>
              </details>
            </div>

            <p>
              When to use: relative equilibria classify the steady motions of symmetric mechanical
              systems: constant-speed rotations of rigid bodies, circular orbits in central force
              problems, and spinning tops.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">Relative Equilibrium</span>
              <div className="lrn-definition-desc">
                <p>
                  A <strong>relative equilibrium</strong> is a phase curve that projects to an
                  equilibrium point in the reduced phase space {`$F_p$`}.
                </p>
                <p>
                  Equivalently: it is an orbit of a one-parameter subgroup of {`$G$`} in the
                  original phase space {`$M$`}.
                </p>
              </div>
            </div>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Relative Equilibrium Theorem</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  A phase curve projects to a point in {`$F_p$`} if and only if it is an orbit of{' '}
                  {`$G_p$`} in {`$M_p$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  An orbit of {`$G_p$`} in {`$M_p$`} can be written as {`$x(t) = g(t) x(0)$`} where{' '}
                  {`$g(t)$`} is a one-parameter subgroup of {`$G$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  Conversely, any orbit of a one-parameter subgroup of {`$G$`} lying in {`$M_p$`}{' '}
                  projects to a fixed point in the reduced system.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <h3>Example: Asymmetric Rigid Body</h3>

            <p>
              Consider an asymmetric rigid body fixed at a stationary point in a gravitational
              field.
            </p>
            <p>The symmetry group {`$G = S^1$`} consists of rotations around the vertical axis.</p>
            <p>
              The reduced phase space is {`$T^*S^2$`} with a symplectic structure. The reduced
              Hamiltonian equals the kinetic energy of reduced motion plus an effective potential.
            </p>
            <p>
              Rotations of the body at constant angular velocity around the vertical axis are
              relative equilibria.
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Euler-Poisson Equations</span>
              <p>
                Poisson found the equations of the asymmetric rigid body in remarkably simple form:
              </p>
              <div className="lrn-eq">{`$$\\frac{dM}{dt} - [M, \\omega] = \\mu g[\\gamma, I], \\quad \\frac{d\\gamma}{dt} = [\\gamma, \\omega]$$`}</div>
              <p>
                Here {`$M$`} is angular momentum, {`$\\omega$`} is angular velocity, {`$\\gamma$`}{' '}
                is the unit vertical vector, {`$\\mu$`} is mass, {`$g$`} is gravitational
                acceleration, and {`$I$`} is the position vector of the center of mass from the
                fixed point.
              </p>
            </div>

            <h3>Energy-Momentum Mapping</h3>

            <p>
              The <strong>energy-momentum mapping</strong> sends each point to its conserved
              quantities:
            </p>
            <div className="lrn-eq">{`$$P \\times H: M \\to \\mathfrak{g}^* \\times \\mathbb{R}$$`}</div>

            <p>
              Critical points of {`$H$`} restricted to a regular momentum level are exactly the
              relative equilibria.
            </p>

            <div className="lrn-insight">
              The nonsingular energy level manifolds in the reduced phase space {`$T^*S^2$`} for an
              asymmetric rigid body take four topological forms: {`$S^3$`}, {`$S^2 \\times S^1$`},{' '}
              {`$\\mathbb{RP}^3$`}, and the "pretzel" ({`$S^3$`} with two {`$S^1 \\times D^2$`}{' '}
              handles).
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why are relative equilibria critical points of {`$H|_{M_p}$`} and not just arbitrary
                solutions? Form your answer before reading on.
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  A relative equilibrium projects to a fixed point in {`$F_p$`}. An equilibrium
                  point of the reduced Hamiltonian field on {`$F_p$`} satisfies {`$dH|_{F_p} = 0$`}{' '}
                  there. By the definition of the reduced symplectic structure, this is equivalent
                  to {`$dH$`} vanishing on {`$T(M_p)$`} modulo {`$T(G_p \\cdot x)$`}, which means{' '}
                  {`$x$`} is a critical point of {`$H$`} on {`$M_p$`}.
                </p>
              </details>
            </div>
          </div>
        </>
      ]
    },

    // ── PRACTICE ────────────────────────────────────────────────────────────
    practice: [
      // Interleaved across all sections
      {
        q: `What is the standard hermitian product on $\\mathbb{C}^n$?`,
        a: `$\\langle \\zeta, \\eta \\rangle = \\sum_k \\zeta_k \\bar{\\eta}_k$. It is linear in the first argument and conjugate-linear in the second. The real part gives the euclidean inner product; the imaginary part gives the symplectic pairing $[\\zeta, \\eta]$.`
      },
      {
        q: `[PREDICT] A rigid body rotates at constant angular velocity around the vertical axis. Is this motion an equilibrium, a relative equilibrium, or something else?`,
        a: `It is a relative equilibrium. In the full phase space, it is an orbit of the one-parameter rotation subgroup $G = S^1$. In the reduced phase space (after factoring out the rotational symmetry), it projects to a fixed equilibrium point. It is not an ordinary equilibrium because the body is moving.`
      },
      {
        q: `[TRANSFER] A contact manifold of dimension 5 is symplectified. What is the dimension of the result, and what is the key geometric object on it?`,
        a: `The symplectification has dimension 6 (5+1). The key geometric object is the canonical 1-form $\\alpha(\\tilde{\\xi}) = p(\\pi_* \\tilde{\\xi})$, analogous to "p dq" on a cotangent bundle. Its exterior derivative $d\\alpha$ is the nondegenerate symplectic 2-form.`
      },
      {
        q: `[ELABORATE] Why is every smooth complex projective variety a symplectic manifold? Explain from first principles.`,
        a: `The key steps: (1) $\\mathbb{CP}^n$ carries a symplectic structure $\\Omega = -\\frac{1}{\\pi}\\operatorname{Im}\\langle\\cdot,\\cdot\\rangle$ from its hermitian structure. (2) Any complex submanifold $M \\subset \\mathbb{CP}^n$ inherits $\\Omega_M = j^*\\Omega$. (3) Nondegeneracy: for any nonzero tangent vector $\\xi$, compute $(\\xi,\\xi) = \\Omega_M(\\xi, i\\xi) > 0$ (euclidean positivity). (4) Closedness: $d\\Omega_M = j^*(d\\Omega) = 0$. So $\\Omega_M$ is a nondegenerate closed 2-form.`
      },
      {
        q: `What is the Frobenius integrability condition for a field of hyperplanes $\\{\\omega = 0\\}$?`,
        a: `The field is integrable (has integral surfaces) if and only if $\\omega \\wedge d\\omega = 0$. This is equivalent to $d\\omega = 0$ restricted to the hyperplane $\\omega = 0$. Geometrically: the 2-form $d\\omega$ on the planes must vanish - no "height rise" when you traverse small parallelograms within the planes.`
      },
      {
        q: `[SELF-EXPLAIN] In the symplectification proof, why does $d\\alpha = d\\lambda \\wedge \\pi^*\\omega + \\lambda \\pi^* d\\omega$ have two terms? Explain why each term is needed.`,
        a: `Two terms because of the product rule for exterior derivatives: $d(\\lambda \\cdot \\pi^*\\omega) = d\\lambda \\wedge \\pi^*\\omega + \\lambda \\cdot d(\\pi^*\\omega)$. The first term ($d\\lambda \\wedge \\pi^*\\omega$) handles vertical motion (changing $\\lambda$ while staying on the same contact hyperplane). The second term ($\\lambda \\pi^*d\\omega$) handles horizontal motion (moving on the contact manifold). Both are needed to make $d\\alpha$ nondegenerate everywhere on the symplectification.`
      },
      {
        q: `What is the dimension of the manifold of contact elements of an $n$-dimensional manifold, and why?`,
        a: `Dimension $2n-1$. You need $n$ coordinates for the base point (choosing the point of contact) and $n-1$ coordinates for the hyperplane direction (a codimension-1 subspace of the $n$-dimensional tangent space has $n-1$ degrees of freedom). Total: $n + (n-1) = 2n-1$.`
      },
      {
        q: `[TRANSFER] The manifold $\\mathbb{CP}^1$ has what symplectic structure in affine coordinates $w = x + iy$?`,
        a: `$\\Omega = \\frac{1}{\\pi} \\frac{dx \\wedge dy}{(1+x^2+y^2)^2}$. This comes from pulling back $\\Omega = -\\frac{1}{\\pi}\\operatorname{Im}\\langle \\cdot, \\cdot\\rangle$ from $\\mathbb{CP}^1 \\subset \\mathbb{CP}^n$ to the affine chart via $w = \\frac{z_1}{z_0}$. The denominator $(1+|w|^2)^2$ comes from the normalization of the hermitian product.`
      },
      {
        q: `What is a contact Hamiltonian and how does it determine the contact vector field?`,
        a: `The contact Hamiltonian of a contact vector field $X$ (with fixed contact form $\\omega$) is $K = \\omega(X)$. In Darboux coordinates $(x,y,z)$ with $\\omega = x\\,dy + dz$, knowing $K = K(x,y,z)$ determines the field completely via: $\\dot{x} = -K_y + xK_z$, $\\dot{y} = K_x$, $\\dot{z} = K - xK_x$. These come from Hamilton's equations on the symplectification projected back to the contact manifold.`
      },
      {
        q: `[PREDICT] What happens to the symplectic structure on $\\mathbb{CP}^{n-1}$ when you symplectify the contact manifold $S^{2n-1}$ (viewed as the unit sphere in $\\mathbb{C}^n$)?`,
        a: `You recover the Kähler symplectic structure on $\\mathbb{CP}^{n-1}$ from the hermitian structure of $\\mathbb{C}^n$. The $S^1$ action on $S^{2n-1}$ (phase rotation) makes $S^{2n-1}$ into a circle bundle over $\\mathbb{CP}^{n-1}$. Symplectifying and reducing by $S^1$ produces $\\mathbb{CP}^{n-1}$ with the standard structure. This matches the harmonic oscillator reduction example.`
      },
      {
        q: `State and apply the Darboux theorem for contact structures.`,
        a: `Every $(2n+1)$-dimensional contact manifold has local coordinates $(x_1,\\ldots,x_n, y_1,\\ldots,y_n, z)$ where the contact structure is $\\omega = x_1\\,dy_1 + \\cdots + x_n\\,dy_n + dz$. Application: to work with any contact manifold locally, you can always use this normal form. The proof uses symplectification: symplectify, apply symplectic Darboux, restrict to $p_0 = 1$.`
      },
      {
        q: `[ELABORATE] Why must a nondegenerate field of hyperplanes live on an odd-dimensional manifold? Explain from linear algebra.`,
        a: `A nondegenerate field requires $d\\omega|_{\\omega=0}$ to have full rank on the hyperplane. The hyperplane has dimension $N-1$ (where $N$ is ambient dimension). A skew-symmetric form of full rank on a vector space requires even dimension. So $N-1$ must be even, which means $N$ must be odd. Equivalently: $\\omega \\wedge (d\\omega)^m \\neq 0$ needs the total degree $1 + 2m = N$, so $N = 2m+1$ is odd.`
      },
      {
        q: `[TRANSFER] A harmonic oscillator on $\\mathbb{R}^{2n}$ has $G = S^1$ symmetry. What is the reduced phase space and its dimension?`,
        a: `The momentum level is $M_p = S^{2n-1}$ (the sphere where total energy equals a constant). The isotropy group $G_p = S^1$ acts on $M_p$ freely. The reduced phase space is $F_p = \\frac{S^{2n-1}}{S^1} = \\mathbb{CP}^{n-1}$, dimension $2(n-1) = 2n-2$. This confirms the formula: $\\dim F_p = \\dim M - \\dim G - \\dim G_p = 2n - 1 - 1 = 2n-2$.`
      },
      {
        q: `What is the Legendre involution and what geometric role does it play?`,
        a: `The Legendre involution is the map $(p, x, f) \\mapsto (P = x, X = p, F = px - f)$. It is a contact diffeomorphism carrying the contact structure $\\omega = p\\,dx - df$ to $\\Omega = P\\,dX - dF$. It carries Legendre manifolds to Legendre manifolds. This is the geometric version of the Legendre transform from convex analysis - convex duality is a special case where the projection of the Legendre manifold gives a smooth dual function.`
      },
      {
        q: `[SELF-EXPLAIN] In the proof that the momentum mapping is equivariant, why does the Hamiltonian of $g^{shs^{-1}}$ equal $H_{\\mathrm{Ad}_{g^{-s}} h}$? Explain the step.`,
        a: `The group acts by conjugation: $g^{shs^{-1}}$ is the one-parameter subgroup generated by $gag^{-1}$ where $a$ is the Lie algebra element of $g^s$. The Poisson action assigns $H_{ga g^{-1}}$ to this group. The adjoint action $\\mathrm{Ad}_{g^{-s}} h$ is exactly the Lie algebra element of $g^{shs^{-1}}$. Since the action is Poisson, the Hamiltonian depends linearly on the Lie algebra element, giving the stated formula.`
      },
      {
        q: `Define a Poisson action of a Lie group on a symplectic manifold.`,
        a: `A symplectic action of $G$ on $(M, \\omega)$ is a Poisson action if: (1) each Lie algebra element $a \\in \\mathfrak{g}$ has a single-valued Hamiltonian function $H_a$ on $M$; (2) $H_a$ depends linearly on $a$; (3) $H_{[a,b]} = (H_a, H_b)$ (the Hamiltonian of the bracket equals the Poisson bracket of Hamiltonians). This defines a Lie algebra homomorphism $\\mathfrak{g} \\to C^\\infty(M)$.`
      },
      {
        q: `[PREDICT] What happens when $G = S^1$ acts on $M = T^*G$ by left translation? What is the reduced phase space?`,
        a: `The momentum level $M_p$ is diffeomorphic to the group $G$ itself. The orbits of $G_p$ (the stationary subgroup) in $M_p$ give co-adjoint orbits of $p$ in $\\mathfrak{g}^*$, carrying the Kirillov symplectic structure. So the reduced phase space has the symplectic structure of a co-adjoint orbit - the same structure studied in representation theory via the orbit method.`
      },
      {
        q: `[TRANSFER] The space of 1-jets of functions on $\\mathbb{R}^n$ has what contact structure, and how does it relate to solving first-order PDEs?`,
        a: `Coordinates $(x_1,\\ldots,x_n, p_1,\\ldots,p_n, u)$ with contact structure $\\alpha = du - p_1\\,dx_1 - \\cdots - p_n\\,dx_n$. An equation $\\Phi(x, \\frac{\\partial u}{\\partial x}, u) = 0$ defines a hypersurface $E$ in 1-jet space. The characteristics of $\\alpha$ on $E$ through a noncharacteristic initial Legendre manifold sweep out the solution Legendre manifold. Projecting to $(x,u)$-space gives the solution $u(x)$.`
      },
      {
        q: `What is the relation between the hermitian, euclidean, and symplectic structures on $\\mathbb{C}^n$?`,
        a: `The hermitian product $\\langle \\zeta, \\eta \\rangle$ decomposes as $\\langle \\zeta, \\eta \\rangle = (\\zeta, \\eta) + i[\\zeta, \\eta]$ where $(\\cdot,\\cdot)$ is the euclidean (real symmetric) inner product and $[\\cdot,\\cdot]$ is the symplectic (real skew-symmetric) pairing. The key relation is $[\\zeta, \\eta] = (\\zeta, i\\eta)$: the symplectic pairing equals the euclidean pairing after rotating one argument by $i$ (90 degrees).`
      },
      {
        q: `[ELABORATE] Why does the contact structure on the manifold of contact elements come from the contact condition, not just the topology? Explain from first principles.`,
        a: `The contact hyperplane at a point $(p, H_p)$ of $PT^*M$ (a contact element $H_p \\subset T_pM$) consists of those tangent vectors to $PT^*M$ whose projection onto $M$ lies in $H_p$ itself. This is a geometric condition: it says motion in the manifold of contact elements must be "consistent" with the contact element you are at. It is not a topological accident but the unique geometrically natural contact structure. Its nondegeneracy follows from nondegeneracy of $dp \\wedge dq$ on the cotangent bundle (proved via symplectification).`
      },
      {
        q: `How does the symplectification of a contact diffeomorphism $f$ produce a symplectic diffeomorphism?`,
        a: `The induced map sends a contact form $p$ at $x$ to $(f^*_{f(x)})^{-1} p$ at $f(x)$. This map: (1) is symplectic (preserves $d\\alpha$); (2) commutes with multiplication by real scalars; (3) preserves the canonical 1-form $\\alpha$. The proof uses the fact that $\\alpha$, $d\\alpha$, and the group action are all canonically determined by the contact structure - so $f$ automatically lifts to a symplectic map.`
      },
      {
        q: `[ERROR DETECTION] A student writes: "The reduced phase space $F_p = \\frac{M_p}{G}$ has dimension $\\dim M - \\dim G$." Find and fix the error.`,
        a: `Error: the student divided by the full group $G$ instead of the isotropy group $G_p$ (the stationary subgroup of $p$ under the co-adjoint action). Correct statement: $F_p = \\frac{M_p}{G_p}$ has dimension $\\dim M - \\dim G - \\dim G_p$. The level set $M_p = P^{-1}(p)$ has dimension $\\dim M - \\dim G$, and then dividing by $G_p$ reduces by another $\\dim G_p$.`
      },
      {
        q: `[ELABORATE] Why is every Kähler manifold symplectic, but not every symplectic manifold Kähler?`,
        a: `Every Kähler manifold is symplectic: the imaginary part of the hermitian metric is a closed nondegenerate 2-form by definition. Going the other way fails because Kähler requires three mutually compatible structures: a Riemannian metric, a complex structure, and a symplectic form. Compatibility forces strong topological constraints - for instance, compact Kähler manifolds must have even odd Betti numbers - that many symplectic manifolds violate. The Kodaira-Thurston manifold is symplectic but not Kähler for exactly this reason.`
      },
      {
        q: `[SELF-EXPLAIN] In the PDE integration proof, why does $\\mathcal{L}_\\xi \\alpha = c\\alpha$ preserve integral manifolds?`,
        a: `An integral manifold $I$ of the contact structure satisfies $\\alpha|_I = 0$. When the flow $g^t_\\xi$ moves $I$ to $g^t_\\xi(I)$, the 1-form becomes $(g^t_\\xi)^* \\alpha = e^{\\int_0^t c\\,ds} \\cdot \\alpha$. This is still zero on $I$ (just scaled). So $g^t_\\xi(I)$ is still an integral manifold. The integral character is preserved under the characteristic flow, which is why characteristics sweep out a Legendre manifold.`
      },
      {
        q: `[TRANSFER] In optics, wave fronts are Legendre manifolds in the space of contact elements. What singularities do you predict for a generic wave front evolving in $\\mathbb{R}^3$?`,
        a: `In general position, wave fronts in $\\mathbb{R}^3$ have only two types of singularities: cusps ($A_2$ type, $S = \\pm x^3$) and swallowtail points ($A_3$ type, $S = \\pm x^4 + x^2 y$). At isolated moments of time, transitions of types $A_4, D_4, D_4^*$ occur. Folds ($A_1$) are smooth and not really singularities of the wave front - they are regular points.`
      },
      {
        q: `What is contactification and when does it exist?`,
        a: `Contactification of a $2n$-dimensional symplectic manifold $(M^{2n}, \\omega^2)$ is a $(2n+1)$-dimensional contact manifold $E^{2n+1}$ built as a bundle with fiber $\\mathbb{R}$ over $M^{2n}$, with contact form $\\alpha = dz + p\\,dq$ (locally). It exists when the cohomology class $[\\omega^2]$ is integral (lies in $H^2(M, \\mathbb{Z})$). Symplectification and contactification are inverse operations in this case.`
      },
      {
        q: `[PREDICT] If you apply the Legendre involution twice, what do you get?`,
        a: `You get the identity map (up to sign conventions). Applying the involution $(p,x,f) \\mapsto (x, p, px-f)$ twice: first gives $(x, p, px-f)$, then $(p, x, x \\cdot p - (px-f)) = (p, x, f)$. So the involution is its own inverse - it is an involution in the strict sense. Geometrically, this reflects the symmetry of convex duality.`
      }
    ],

    // ── REFERENCE ────────────────────────────────────────────────────────────
    reference: {
      category: 'Quick Reference',
      title: 'Symplectic and Contact Structures with Symmetries',
      sections: [
        <>
          <div>
            <h2>Core Equations</h2>

            <h3>Hermitian and Symplectic Structure on {`$\\mathbb{C}^n$`}</h3>
            <div className="lrn-eq lrn-eq-display">{`$$[\\zeta, \\eta] = (\\zeta, i\\eta) \\quad \\langle \\zeta, \\eta \\rangle = (\\zeta,\\eta) + i[\\zeta,\\eta]$$`}</div>
            <p>
              When to use: relating hermitian, euclidean, and symplectic structures on complex
              vector spaces.
            </p>

            <h3>Symplectic Structure on {`$\\mathbb{CP}^n$`}</h3>
            <div className="lrn-eq lrn-eq-display">{`$$\\Omega(\\zeta_1, \\zeta_2) = -\\frac{1}{\\pi} \\operatorname{Im}\\langle \\zeta_1, \\zeta_2 \\rangle$$`}</div>
            <p>
              When to use: computing the Kähler form on complex projective space and its algebraic
              submanifolds.
            </p>

            <h3>Affine Coordinate Formula for {`$\\mathbb{CP}^1$`}</h3>
            <div className="lrn-eq">{`$$\\Omega = \\frac{1}{\\pi} \\frac{dx \\wedge dy}{(1+x^2+y^2)^2}, \\quad w = x+iy$$`}</div>
            <p>General formula: {`$\\Omega = \\frac{i}{2\\pi} d'd'' \\ln \\sum|w_k|^2$`}</p>
            <p>
              When to use: explicit computation of the Kähler form in local affine charts on complex
              projective space.
            </p>

            <h3>Frobenius Integrability Condition</h3>
            <div className="lrn-eq lrn-eq-display">{`$$\\omega \\wedge d\\omega = 0 \\iff \\text{integrable}$$`}</div>
            <p>
              Contact structure requires {`$\\omega \\wedge d\\omega \\neq 0$`} (maximum
              nonintegrability).
            </p>
            <p>
              When to use: testing whether a field of hyperplanes admits integral surfaces or
              defines a contact structure.
            </p>

            <h3>Contact Darboux Normal Form</h3>
            <div className="lrn-eq lrn-eq-display">{`$$\\omega = x_1\\,dy_1 + \\cdots + x_n\\,dy_n + dz$$`}</div>
            <p>Universal local model for all {`$(2n+1)$`}-dimensional contact manifolds.</p>
            <p>
              When to use: doing local computations on any contact manifold by passing to canonical
              coordinates.
            </p>

            <h3>Canonical 1-form on Symplectification</h3>
            <div className="lrn-eq">{`$$\\alpha(\\tilde{\\xi}) = p(\\pi_*\\tilde{\\xi}), \\quad \\alpha = \\lambda \\pi^*\\omega$$`}</div>
            <div className="lrn-eq">{`$$d\\alpha = d\\lambda \\wedge \\pi^*\\omega + \\lambda \\pi^* d\\omega$$`}</div>
            <p>
              When to use: constructing symplectic structure on the symplectification; analogue of
              "p dq".
            </p>

            <h3>Contact Hamiltonian and Equations</h3>
            <div className="lrn-eq lrn-eq-display">{`$$K = \\omega(X)$$`}</div>
            <div className="lrn-eq">{`$$\\dot{x} = -K_y + xK_z, \\quad \\dot{y} = K_x, \\quad \\dot{z} = K - xK_x$$`}</div>
            <p>Equations in Darboux coordinates with {`$\\omega = x\\,dy + dz$`}.</p>
            <p>
              When to use: writing equations of motion of a contact dynamical system in the contact
              Darboux frame.
            </p>

            <h3>Contact Poisson Bracket</h3>
            <div className="lrn-eq">{`$$\\{K, K'\\} = (K,K') + K_z \\cdot EK' - K'_z \\cdot EK, \\quad EF = F - xF_x$$`}</div>
            <p>
              When to use: computing the bracket of two contact Hamiltonians, with the Euler
              operator correction.
            </p>

            <h3>Legendre Involution</h3>
            <div className="lrn-eq">{`$$(p, x, f) \\mapsto (P = x,\\; X = p,\\; F = px - f)$$`}</div>
            <p>
              When to use: applying the geometric Legendre transform to swap roles of position and
              momentum on contact manifolds.
            </p>

            <h3>Legendre Fibration</h3>
            <div className="lrn-eq">{`$$y_I = \\frac{\\partial S}{\\partial x_I}, \\quad x_J = -\\frac{\\partial S}{\\partial y_J}, \\quad z = S - x_I \\frac{\\partial S}{\\partial x_I}$$`}</div>
            <p>
              When to use: locally describing Legendre submanifolds and their projections via a
              generating function {`$S$`}.
            </p>

            <h3>Contactification</h3>
            <div className="lrn-eq lrn-eq-display">{`$$\\alpha = dz + p\\,dq \\quad \\text{on } E^{2n+1} \\to M^{2n}$$`}</div>
            <p>Exists when {`$[\\omega^2] \\in H^2(M, \\mathbb{Z})$`}.</p>
            <p>
              When to use: turning a symplectic problem into a contact problem, including for
              Hamilton-Jacobi theory.
            </p>

            <h3>Noether Formula (Momentum)</h3>
            <div className="lrn-eq lrn-eq-display">{`$$H(x) = \\alpha\\!\\left(\\left.\\frac{d}{dt}\\right|_{t=0} g^t x\\right)$$`}</div>
            <p>When to use: finding Hamiltonian of a Lie group action on a cotangent bundle.</p>

            <h3>Poisson Action Condition</h3>
            <div className="lrn-eq">{`$$H_{[a,b]} = (H_a, H_b) \\quad \\text{for all } a,b \\in \\mathfrak{g}$$`}</div>
            <p>
              When to use: checking that a symplectic group action gives a Lie algebra homomorphism
              into Hamiltonian functions.
            </p>

            <h3>Momentum Mapping Equivariance</h3>
            <div className="lrn-eq">{`$$P(g \\cdot x) = \\mathrm{Ad}^*_{g^{-1}} P(x)$$`}</div>
            <p>
              When to use: relating the action of {`$G$`} on {`$M$`} to the co-adjoint action on{' '}
              {`$\\mathfrak{g}^*$`}.
            </p>

            <h3>Reduced Phase Space</h3>
            <div className="lrn-eq">{`$$F_p = \\frac{M_p}{G_p}, \\quad \\dim F_p = \\dim M - \\dim G - \\dim G_p$$`}</div>
            <div className="lrn-eq">{`$$[\\xi,\\eta]_p = [\\xi', \\eta'] \\quad (\\xi', \\eta' \\in T_x M_p \\text{ representatives})$$`}</div>
            <p>
              When to use: eliminating conserved quantities to get a smaller symplectic system via
              Marsden-Weinstein reduction.
            </p>

            <h3>Euler-Poisson Equations</h3>
            <div className="lrn-eq">{`$$\\frac{dM}{dt} - [M, \\omega] = \\mu g[\\gamma, I], \\quad \\frac{d\\gamma}{dt} = [\\gamma, \\omega]$$`}</div>
            <p>
              When to use: writing the equations of motion of a heavy asymmetric rigid body in
              body-fixed angular momentum and gravity-direction variables.
            </p>

            <h2>Key Structures Table</h2>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Symplectic</span>
                <p>Even-dimensional, closed nondegenerate 2-form.</p>
                <p>Source: cotangent bundles, algebraic varieties.</p>
                <p>
                  Lagrangian submanifolds (dim {`$n$`} in dim {`$2n$`}).
                </p>
                <p>Hamiltonian: {`$\\omega(\\cdot, X_H) = dH$`}.</p>
                <p>Darboux: {`$dp \\wedge dq$`}.</p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Contact</span>
                <p>Odd-dimensional, nondegenerate hyperplane field.</p>
                <p>Source: contact element manifolds, 1-jet spaces.</p>
                <p>
                  Legendre submanifolds (dim {`$n$`} in dim {`$2n+1$`}).
                </p>
                <p>Hamiltonian: {`$K = \\omega(X)$`}.</p>
                <p>Darboux: {`$x\\,dy + dz$`}.</p>
              </div>
            </div>

            <h2>Wave Front Singularity Types</h2>

            <ul className="lrn-list">
              <li>
                {`$A_1$`}: smooth fold, {`$S = \\pm x_1^2$`}
              </li>
              <li>
                {`$A_2$`}: cusp, {`$S = \\pm x_1^3$`}
              </li>
              <li>
                {`$A_3$`}: swallowtail, {`$S = \\pm x_1^4 + x_1^2 y_2$`}
              </li>
            </ul>
            <p>
              Generic wave fronts in {`$\\mathbb{R}^3$`}: only {`$A_1, A_2, A_3$`}. Transitions at
              isolated moments: {`$A_4, D_4, D_4^*$`}.
            </p>

            <h2>Dimension Formulas</h2>
            <ul className="lrn-list">
              <li>
                Manifold of contact elements of {`$n$`}-manifold: dimension {`$2n-1$`}
              </li>
              <li>
                Symplectification of {`$N$`}-dimensional contact manifold: dimension {`$N+1$`}
              </li>
              <li>
                Contactification of {`$2n$`}-dimensional symplectic manifold: dimension {`$2n+1$`}
              </li>
              <li>Reduced phase space: {`$\\dim F_p = \\dim M - \\dim G - \\dim G_p$`}</li>
            </ul>
          </div>
        </>
      ]
    },

    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }`
  }

  return <LearningTemplate config={config} />
}
