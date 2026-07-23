import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { Mafs, Coordinates, Plot, Point, LaTeX, Text, useMovablePoint } from 'mafs'
import 'mafs/core.css'
import 'katex/dist/katex.min.css'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  FrequencyRepulsion,
  PoincareBirkhoff,
  ResonancePortrait
} from '../../../../../components/viz'
import { FONT_VALUE } from '../../../../../components/viz/scale-tokens'

// Visualization: Resonance-3 Phase Portrait
function ResonancePhasePortrait({ C }) {
  const eps = useMovablePoint([0, 0], {
    constrain: ([x]) => [Math.max(-2, Math.min(2, x)), 0]
  })
  const e = eps.point[0]

  // H0 = (e/2)(x^2+y^2) + a(x^3 - 3xy^2), a=1
  // Level curves sampled by plotting
  const a = 1

  return (
    <div style={{ border: `1px solid ${C.dim}`, padding: '0 0 8px 0' }}>
      <p
        style={{
          fontSize: '0.75rem',
          textAlign: 'center',
          color: C.dim,
          margin: '8px 0 0 0',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        {`ε = ${e.toFixed(2)}`} - drag point to sweep ε
      </p>
      <Mafs viewBox={{ x: [-3.5, 3.5], y: [-3, 3] }} preserveAspectRatio={false} height={400}>
        <Coordinates.Cartesian subdivisions={1} />
        {/* Origin equilibrium */}
        <Point x={0} y={0} color={e < 0 ? C.accent : C.dim} />
        {/* At ε < 0: origin is a center; at ε = 0: degenerate; at ε > 0: three saddles at vertices of equilateral triangle */}
        {e > 0.05 && (
          <>
            {/* Three unstable fixed points at distance proportional to ε, at 0°, 120°, 240° */}
            {[0, (2 * Math.PI) / 3, (4 * Math.PI) / 3].map((theta, i) => {
              const r = e / (3 * a)
              return (
                <Point key={i} x={r * Math.cos(theta)} y={r * Math.sin(theta)} color={C.accent} />
              )
            })}
          </>
        )}
        {/* Gradient vector field suggestion: plot H0 contour */}
        <Plot.Parametric
          t={[-Math.PI, Math.PI]}
          xy={t => {
            const r = Math.abs(e) < 0.01 ? 0.8 : 0.6
            return [r * Math.cos(t), r * Math.sin(t)]
          }}
          color={e < -0.05 ? C.accent : C.dim}
          strokeWidth={1.5}
        />
        {eps.element}
        <LaTeX
          at={[-3.0, -2.4]}
          tex={String.raw`H_0 = \tfrac{\varepsilon}{2}(x^2+y^2)+a(x^3-3xy^2)`}
          color={C.dim}
        />
      </Mafs>
    </div>
  )
}

// Visualization: Invariant Tori
function InvariantToriDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.dim}`, padding: '0 0 8px 0' }}>
      <p
        style={{
          fontSize: '0.75rem',
          textAlign: 'center',
          color: C.dim,
          margin: '8px 0 0 0',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        Nested invariant 2-tori on a 3D energy surface (schematic cross-section)
      </p>
      <Mafs viewBox={{ x: [-5.5, 5.5], y: [-3, 3] }} preserveAspectRatio={false} height={320}>
        {/* Concentric ellipses represent torus cross-sections */}
        {[0.5, 1.1, 1.8, 2.6, 3.5].map((r, i) => (
          <Plot.Parametric
            key={i}
            t={[-Math.PI, Math.PI]}
            xy={t => [r * 1.5 * Math.cos(t), r * Math.sin(t)]}
            color={i === 2 ? C.accent : C.dim}
            strokeWidth={i === 2 ? 2 : 1}
          />
        ))}
        <LaTeX at={[0, 2.2]} tex={String.raw`\mathbb{T}^2`} color={C.dim} />
        <Text x={0} y={-2.7} size={FONT_VALUE} color={C.dim}>
          non-resonant tori survive KAM
        </Text>
      </Mafs>
    </div>
  )
}

// Visualization: Frequency Repulsion
function FrequencyRepulsionDiagram({ C }) {
  return (
    <div style={{ border: `1px solid ${C.dim}`, padding: '0 0 8px 0' }}>
      <p
        style={{
          fontSize: '0.75rem',
          textAlign: 'center',
          color: C.dim,
          margin: '8px 0 0 0',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        Frequency repulsion: 1-parameter family (left) vs. 2-parameter crossing (right)
      </p>
      <Mafs viewBox={{ x: [-5.5, 5.5], y: [-2.5, 2.5] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian subdivisions={1} />
        {/* 1-parameter: hyperbola repulsion */}
        <Plot.Parametric
          t={[-2, 2]}
          xy={t => [-3.5 + t, Math.sqrt(t * t + 0.18)]}
          color={C.accent}
          strokeWidth={2}
        />
        <Plot.Parametric
          t={[-2, 2]}
          xy={t => [-3.5 + t, -Math.sqrt(t * t + 0.18)]}
          color={C.accent}
          strokeWidth={2}
        />
        <Text x={-3.5} y={-2.2} size={FONT_VALUE} color={C.dim}>
          1-parameter
        </Text>

        {/* 2-parameter: crossing allowed */}
        <Plot.Parametric t={[-2, 2]} xy={t => [1.5 + t, t]} color={C.fg} strokeWidth={2} />
        <Plot.Parametric t={[-2, 2]} xy={t => [1.5 + t, -t]} color={C.dim} strokeWidth={2} />
        <Text x={1.5} y={-2.2} size={FONT_VALUE} color={C.dim}>
          2-parameter
        </Text>
        <LaTeX at={[-4.8, 2.1]} tex={String.raw`\omega_i(\lambda)`} color={C.dim} />
      </Mafs>
    </div>
  )
}

// Component
export default function NormalFormsPerturbationsContent() {
  const C = useVizColors()

  const config = {
    cssPrefix: 'nfp',
    documentTitle: 'Normal Forms and Perturbations of Hamiltonian Systems - AETHER',
    learning: {
      groupTitle: 'Perturbation Theory and Advanced Topics',
      category: 'Classical Mechanics',
      title: 'Normal Forms and Perturbations of Hamiltonian Systems',
      subtitle: 'Birkhoff normal forms, KAM theory, and the geometry of nearly-integrable systems',
      sections: [
        // SECTION 0: Quadratic Hamiltonians
        <>
          <h2>Quadratic Hamiltonians and Their Normal Forms</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              For a conservative system, if {`$\\lambda$`} is an eigenvalue of the linearized flow,
              the structure of the equations forces another eigenvalue to appear alongside it.
            </p>
            <p>
              What is that paired eigenvalue? Use the symmetry to list every pattern that can occur.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The symplectic structure forces eigenvalues to be symmetric about both axes of the
                complex plane: if {`$\\lambda$`} is an eigenvalue, so are {`$-\\lambda$`},{' '}
                {`$\\bar{\\lambda}$`}, and {`$-\\bar{\\lambda}$`}.
              </p>
              <p>
                This gives four patterns: real pairs {`$(a, -a)$`}, imaginary pairs {`$(ib, -ib)$`},
                complex quadruples {`$(\\pm a \\pm ib)$`}, and zero - which is its own negative and
                so must appear in even count.
              </p>
            </details>
          </div>

          <p>
            Any Hamiltonian system looks quadratic near an equilibrium - the higher-order terms are
            small when the motion stays close. The quadratic piece alone determines whether nearby
            trajectories stay bounded or escape, so classifying all quadratic Hamiltonians is the
            first step.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Quadratic Hamiltonian</span>
            <div className="lrn-definition-desc">
              <p>
                A Hamiltonian of the form {`$H = \\tfrac{1}{2}(Ax, x)$`}. Here{' '}
                {`$x = (p_1,\\ldots,p_n; q_1,\\ldots,q_n)$`} stacks the momenta and positions into
                one vector, and {`$(Ax, x)$`} is the ordinary dot product of {`$Ax$`} with {`$x$`}.
              </p>
              <p>
                The matrix {`$A$`} is symmetric. It must be, because swapping the two slots of a dot
                product leaves the quadratic form unchanged.
              </p>
              <p>
                The equations of motion are {`$\\dot{x} = IAx$`}, where {`$I$`} is the standard
                symplectic matrix, built from the {`$n\\times n$`} identity {`$E$`}:
              </p>
              <div className="lrn-eq">
                <span>{`$$I = \\begin{pmatrix} 0 & -E \\\\ E & 0 \\end{pmatrix}$$`}</span>
              </div>
              <p>
                This is just Hamilton's equations in one line:{' '}
                {`$\\dot{p} = -\\partial H/\\partial q$`} and{' '}
                {`$\\dot{q} = \\partial H/\\partial p$`}. Since {`$\\nabla H = Ax$`}, multiplying by{' '}
                {`$I$`} shuffles and sign-flips the gradient into exactly that pair of equations.
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Key Fact</span>
            <p>
              The eigenvalues of a Hamiltonian matrix come in four types only: real pairs{' '}
              {`$(a, -a)$`}, purely imaginary pairs {`$(ib, -ib)$`}, complex quadruples{' '}
              {`$(\\pm a \\pm ib)$`}, and zero.
            </p>
            <p>Zero eigenvalues always appear in an even count.</p>
          </div>

          <h3>Williamson's Theorem</h3>

          <p>
            Every real symplectic space with a quadratic form {`$H$`} breaks down into pairwise
            skew-orthogonal symplectic subspaces.
          </p>
          <p>On each subspace, {`$H$`} takes one of the standard normal forms listed below.</p>
          <p>A real symplectic transformation always achieves this decomposition.</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The symplectic structure makes {`$IA$`} infinitesimally symplectic: it satisfies{' '}
              {`$(IA)^T I + I(IA) = 0$`}. Rearranged, this reads {`$(IA)^T = -I(IA)I^{-1}$`}.
            </p>
            <p>
              So {`$(IA)^T$`} is similar to {`$-IA$`}: the two matrices share the same eigenvalues.
              A matrix and its transpose always share eigenvalues, so {`$IA$`} and {`$-IA$`} have
              the same eigenvalues too.
            </p>
            <p>
              This means: if {`$\\lambda$`} is an eigenvalue, so is {`$-\\lambda$`}. Zero is its own
              negative, so zero eigenvalues must appear in pairs.
            </p>
            <p>Since {`$A$`} is real, complex eigenvalues appear in conjugate pairs too.</p>
            <p>
              Both constraints together force every eigenvalue into one of the four symmetric
              patterns. The Jordan blocks on each pattern's eigenspace assemble into an independent
              symplectic subspace, and the inner product makes these subspaces mutually orthogonal.
            </p>
          </div>

          <h3>Normal Form Catalog</h3>

          <p>
            Each Jordan block type of the matrix {`$IA$`} gives a different normal form for {`$H$`}.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Real pair {`$(\\pm a)$`}</span>
              <p>{`$H = -a\\sum p_j q_j + \\sum p_j q_{j+1}$`}</p>
              <p>Flow is unstable (saddle-like).</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Imaginary pair {`$(\\pm ib)$`}, odd order</span>
              <p>{`$H = \\pm\\tfrac{1}{2}(b^2 p_1^2 + q_1^2)$`} for order 1</p>
              <p>
                Flow is stable (center-like) at order 1; higher orders have two inequivalent types.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Zero eigenvalue, pair of blocks</span>
              <p>
                {`$H = \\sum p_j q_{j+1}$`} (for {`$k=1$`}, {`$H=0$`})
              </p>
              <p>Degenerate: linearization tells you almost nothing.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Complex quadruple {`$(\\pm a \\pm ib)$`}</span>
              <p>{`$H = -a\\sum p_j q_j + b\\sum(p_{2j-1}q_{2j} - p_{2j}q_{2j-1}) + \\sum p_j q_{j+2}$`}</p>
              <p>Combines saddle and rotation: spiral instability.</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does a purely imaginary eigenvalue pair {`$(\\pm ib)$`} produce a stable center
              rather than a saddle?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A purely imaginary eigenvalue means the real part is zero: no exponential growth.
              </p>
              <p>The flow rotates in phase space rather than stretching.</p>
              <p>
                This corresponds to a positive-definite quadratic Hamiltonian, which acts as a
                Lyapunov function bounding trajectories near the equilibrium.
              </p>
            </details>
          </div>

          <h3>Nonremovable Jordan Blocks: Galin's Theorem</h3>

          <p>
            Some Jordan block structures cannot be destroyed by a small Hamiltonian perturbation.
          </p>
          <p>
            Galin's theorem tells you exactly how rare each block type is, through a single number
            called its codimension.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Codimension (Galin)</span>
            <div className="lrn-definition-desc">
              <p>
                The codimension {`$c$`} of a Jordan block configuration counts the independent
                conditions you must impose to force that exact configuration. It is the number of
                knobs you must tune at once before the configuration shows up.
              </p>
              <p>
                Worked check: the simplest nonremovable case is a real pair {`$(\\pm a)$`} that has
                degenerated into one repeated block, written {`$(\\pm a)^2$`}. A generic Hamiltonian
                has a simple pair {`$(\\pm a)$`}. Merging the two copies into one Jordan block
                forces a single equation on the matrix, so {`$c = 1$`}.
              </p>
            </div>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Corollary (Galin)</span>
            <p>
              In a one-parameter family in general position, only Jordan block configurations with{' '}
              {`$c \\leq 1$`} appear.
            </p>
            <p>
              These are: repeated eigenvalues {`$(\\pm a)^2$`}, {`$(\\pm ia)^2$`}, and the double
              zero {`$0^2$`}.
            </p>
            <p>Configurations with {`$c=2$`} need two-parameter families to occur.</p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>The space of all quadratic Hamiltonians has a fixed dimension.</p>
            <p>
              The set of Hamiltonians with a given Jordan block structure forms a smooth
              submanifold.
            </p>
            <p>
              Codimension measures how many conditions you must impose to land on that submanifold.
            </p>
            <p>
              A generic {`$l$`}-parameter family intersects submanifolds only up to codimension{' '}
              {`$l$`}.
            </p>
          </div>

          <p>
            Example: the simplest nonremovable Jordan structure {`$(\\pm a)^2$`} has {`$c=1$`}.
          </p>
          <p>Its Galin normal form with parameters {`$\\lambda_1, \\lambda_2$`} is:</p>
          <div className="lrn-eq">
            <span>{`$$H(\\lambda) = -a(p_1 q_1 + p_2 q_2) + p_1 q_2 + \\lambda_1 p_1 q_1 + \\lambda_2 p_2 q_1$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the Galin normal form include the extra terms{' '}
              {`$\\lambda_1 p_1 q_1 + \\lambda_2 p_2 q_1$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>The standard Jordan form for {`$(\\pm a)^2$`} is not stable under perturbation.</p>
              <p>
                The parameters {`$\\lambda_1, \\lambda_2$`} capture all the ways nearby Hamiltonians
                can differ from the idealized form.
              </p>
              <p>
                They act as "unfolding parameters" that parametrize the neighborhood of the
                degenerate structure in the space of Hamiltonians.
              </p>
            </details>
          </div>
        </>,

        // SECTION 1: Birkhoff Normal Form
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to study the long-time behavior near a stable equilibrium with frequencies{' '}
              {`$\\omega_1, \\omega_2$`}.
            </p>
            <p>You try a coordinate change to make the Hamiltonian as simple as possible.</p>
            <p>What obstacle could prevent you from eliminating all nonlinear terms?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Resonance relations like {`$k_1\\omega_1 + k_2\\omega_2 = 0$`} make certain
                elimination steps divide by zero.
              </p>
              <p>These "resonant terms" cannot be removed and must stay in the normal form.</p>
            </details>
          </div>

          <h2>Birkhoff Normal Form</h2>

          <p>
            An oscillator near equilibrium has a frequency that shifts as the amplitude grows. The
            Birkhoff normal form makes this frequency-amplitude coupling visible: it rewrites the
            Hamiltonian so that the oscillation frequency appears explicitly as a function of the
            orbit's size.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Resonance Relation of Order K</span>
            <div className="lrn-definition-desc">
              <p>
                The frequencies {`$\\omega_1,\\ldots,\\omega_n$`} satisfy a resonance relation of
                order {`$K$`} if there exist integers {`$k_i$`} not all zero with:
              </p>
              <div className="lrn-eq">
                <span>{`$$k_1\\omega_1 + \\cdots + k_n\\omega_n = 0, \\quad |k_1|+\\cdots+|k_n| = K$$`}</span>
              </div>
              <p>Small-order resonances are most damaging for normal form simplification.</p>
            </div>
          </div>

          <p>
            The key variable is the action {`$\\tau_i = \\frac{P_i^2+Q_i^2}{2}$`} - the area the
            orbit traces in the {`$(P_i, Q_i)$`} plane. A bigger orbit sweeps more area, so bigger{' '}
            {`$\\tau_i$`} means larger amplitude. The Birkhoff form expresses {`$H$`} entirely in
            terms of these areas, with no angle dependence.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Birkhoff Normal Form</span>
            <div className="lrn-definition-desc">
              <p>
                In canonical polar coordinates {`$P_i = \\sqrt{2\\tau_i}\\cos\\varphi_i$`},{' '}
                {`$Q_i = \\sqrt{2\\tau_i}\\sin\\varphi_i$`}, a Birkhoff normal form of degree{' '}
                {`$s$`} depends only on the action variables {`$\\tau_i = \\frac{P_i^2+Q_i^2}{2}$`}:
              </p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$H_s = a_1\\tau_1 + \\cdots + a_n\\tau_n + \\text{(polynomial in } \\tau_i \\text{ up to degree } \\lfloor \\tfrac{s}{2}\\rfloor)$$`}</span>
              </div>
              <p>
                For one degree of freedom:{' '}
                {`$H_{2m} = a_1\\tau + a_2\\tau^2 + \\cdots + a_m\\tau^m$`}.
              </p>
              <p>
                For two degrees of freedom to degree 4:{' '}
                {`$H_4 = a_1\\tau_1 + a_2\\tau_2 + a_{11}\\tau_1^2 + a_{12}\\tau_1\\tau_2 + a_{22}\\tau_2^2$`}
                .
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>The idea is to kill nonlinear terms one by one using canonical transformations.</p>
            <p>
              First pack each position-momentum pair into one complex coordinate {`$z_i$`}, so a
              Taylor term becomes a monomial {`$z^\\alpha \\bar{z}^\\beta$`}. Here {`$\\alpha$`} and{' '}
              {`$\\beta$`} are lists of whole-number exponents, one per mode, that record the power
              on each {`$z_i$`} and each {`$\\bar{z}_i$`}.
            </p>
            <p>
              To remove that one monomial, this is the same homological-equation step used in
              averaging: you divide its coefficient by the number
            </p>
            <div className="lrn-eq">
              <span>{`$$\\lambda_1(\\beta_1-\\alpha_1)+\\cdots+\\lambda_n(\\beta_n-\\alpha_n).$$`}</span>
            </div>
            <p>
              Under the non-resonance condition this divisor is nonzero, so the division goes
              through and the term is killed.
            </p>
            <p>
              A resonant term makes the divisor zero. You cannot divide by zero, so that term cannot
              be removed: it stays in the normal form.
            </p>
          </div>

          <h3>Birkhoff Normal Form Theorem</h3>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem (Birkhoff)</span>
            <p>
              If the frequencies {`$\\omega_i$`} satisfy no resonance relation of order {`$s$`} or
              smaller, then there is a canonical coordinate system reducing {`$H$`} to Birkhoff
              normal form of degree {`$s$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$H(p,q) = H_s(P,Q) + R, \\quad R = O(|P|+|Q|)^{s+1}$$`}</span>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE: 1 DOF Birkhoff Form</span>
              <p>
                Given {`$H = \\tfrac{1}{2}(p^2+q^2) + \\epsilon q^4$`} with frequency{' '}
                {`$\\omega=1$`} and no resonance of order 4 or less.
              </p>
              <ol className="lrn-list">
                <li>
                  Write {`$\\tau = \\frac{p^2+q^2}{2}$`}, so {`$\\tfrac{1}{2}(p^2+q^2) = \\tau$`}.
                  In polar form {`$q = \\sqrt{2\\tau}\\sin\\varphi$`}.
                </li>
                <li>
                  Then {`$q^4 = 4\\tau^2\\sin^4\\varphi$`}. Expand the power:{' '}
                  {`$\\sin^4\\varphi = \\tfrac{3}{8} - \\tfrac{1}{2}\\cos 2\\varphi + \\tfrac{1}{8}\\cos 4\\varphi$`}
                  .
                </li>
                <li>
                  The flat piece {`$\\tfrac{3}{8}$`} has no angle, so {`$q^4$`} carries a resonant
                  part {`$4\\tau^2\\cdot\\tfrac{3}{8} = \\tfrac{3}{2}\\tau^2$`}. The{' '}
                  {`$\\cos 2\\varphi$`} and {`$\\cos 4\\varphi$`} pieces oscillate.
                </li>
                <li>
                  Kill one oscillating piece: a near-identity canonical transformation shifts{' '}
                  {`$\\tau$`} by a small {`$\\varepsilon$`}-sized angle-dependent amount chosen to
                  cancel the {`$\\cos 2\\varphi$`} term exactly. Repeat for {`$\\cos 4\\varphi$`}.
                  Only the flat {`$\\tau^2$`} part survives.
                </li>
                <li>
                  Result: {`$H_4 = \\tau + \\tfrac{3}{2}\\varepsilon\\tau^2 + O(|p,q|^5)$`}, so{' '}
                  {`$c = \\tfrac{3}{2}\\varepsilon$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>What are the canonical polar coordinates for {`$(p,q)$`}?</li>
                <li>
                  What does the non-resonance condition for {`$\\omega=1$`} at order 3 require?
                </li>
                <li>What form does {`$H_2$`} (Birkhoff to degree 2) take?</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                For {`$H = \\tfrac{1}{2}(p^2+q^2) + \\epsilon q^3$`} with {`$\\omega=1$`},
                determine: is {`$\\omega=1$`} in resonance of order 3? Write the Birkhoff normal
                form to degree 2.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the Birkhoff normal form, the Hamiltonian depends only on action variables{' '}
              {`$\\tau_i$`}, not on angles {`$\\varphi_i$`}. Why does this make the system easier to
              analyze?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                When {`$H$`} depends only on {`$\\tau_i$`}, the equations of motion give{' '}
                {`$\\dot{\\tau}_i = -\\frac{\\partial H}{\\partial\\varphi_i} = 0$`}.
              </p>
              <p>
                So the action variables are conserved and each orbit lies on a torus{' '}
                {`$\\tau_i = \\text{const}$`}.
              </p>
              <p>
                The frequencies {`$\\dot{\\varphi}_i = \\frac{\\partial H}{\\partial\\tau_i}$`}{' '}
                depend only on the {`$\\tau$`} values, revealing frequency-amplitude coupling
                directly from the coefficients of the normal form.
              </p>
            </details>
          </div>

          <h3>Birkhoff Form for Canonical Transformations</h3>

          <p>
            A canonical transformation near a fixed point is called elliptic if all eigenvalues lie
            on the unit circle.
          </p>
          <p>
            If the eigenvalue {`$\\lambda$`} is not a root of unity of degree {`$s$`} or less, it
            reduces to Birkhoff normal form:
          </p>
          <div className="lrn-eq">
            <span>{`$$(\\tau, \\varphi) \\to (\\tau, \\varphi + \\alpha_0 + \\alpha_1\\tau + \\cdots + \\alpha_m\\tau^m)$$`}</span>
          </div>
          <p>The angle rotates by a polynomial amount depending on the action.</p>

          <h3>Periodic Systems (Time-Dependent Case)</h3>

          <p>
            If the Hamiltonian is periodic in time, the resonance condition for order {`$K$`}{' '}
            becomes:
          </p>
          <div className="lrn-eq">
            <span>{`$$k_1\\omega_1 + \\cdots + k_n\\omega_n + k_0 = 0, \\quad |k_1|+\\cdots+|k_n| = K$$`}</span>
          </div>
          <p>The extra integer {`$k_0$`} accounts for the driving frequency.</p>
          <p>
            Under the non-resonance condition, you get the same Birkhoff normal form, but the
            remainder depends periodically on time.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              Birkhoff series (the formal power series giving the normalizing transformation) are
              generally divergent.
            </p>
            <p>
              They give a good finite-order approximation, but the transformation does not converge
              to an exact one in most cases.
            </p>
            <p>
              The divergence is connected to the splitting of separatrices and chaotic behavior.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Birkhoff Normal Form</span>
              <p>Captures frequency-amplitude coupling.</p>
              <p>Works up to any finite degree {`$s$`}.</p>
              <p>Keeps resonant terms only.</p>
              <p>Best for: equilibrium stability, short-to-medium timescales.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Linear Normal Form</span>
              <p>Kills all quadratic coupling between modes.</p>
              <p>Works only to second order.</p>
              <p>Cannot show frequency-amplitude coupling.</p>
              <p>Best for: very short timescales, linearized stability.</p>
            </div>
          </div>
        </>,

        // SECTION 2: Resonance and Splitting
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A pendulum oscillates at frequency {`$\\omega$`} close to exactly {`$\\frac{1}{3}$`}{' '}
              of a driving frequency.
            </p>
            <p>
              What do you expect to happen to the stability of the equilibrium as {`$\\omega$`}{' '}
              passes through the exact resonance value {`$\\frac{1}{3}$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>At exact resonance ({`$\\omega = \\frac{1}{3}$`}), the origin loses stability.</p>
              <p>
                Three new unstable fixed points appear at the vertices of an equilateral triangle.
              </p>
              <p>
                The phase portrait changes shape completely as{' '}
                {`$\\varepsilon = \\omega - \\frac{1}{3}$`} changes sign.
              </p>
            </details>
          </div>

          <h2>Resonance of Order 3: Passage Through Resonance</h2>

          <p>
            At exact resonance, small perturbations build up coherently over time instead of
            averaging out. The change is not just a small numerical shift. The entire topology of
            the phase portrait flips.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Detuning (Frequency Deviation)</span>
            <div className="lrn-definition-desc">
              <p>
                The detuning {`$\\varepsilon = \\omega - \\frac{1}{3}$`} measures how far the system
                is from exact resonance.
              </p>
              <p>
                At {`$\\varepsilon = 0$`} the system is at exact resonance; this is the bifurcation
                point.
              </p>
            </div>
          </div>

          <h3>Deriving the Resonance-3 Normal Form</h3>

          <p>
            Start with a Hamiltonian for a closed trajectory of a system with 2 degrees of freedom
            (two position-momentum pairs), where the oscillation period is {`$3\\times$`} the
            trajectory period.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Complex coordinates</span>
              <p className="lrn-step-content">
                Pack the position-momentum pair into one complex number {`$z = q + ip$`}. Keep only
                resonant terms, those whose phase stays constant along unperturbed orbits.
                Non-resonant terms oscillate fast and average to zero over many cycles; resonant
                terms accumulate and shape the long-time behavior. At order 3 the only resonant
                cubic terms are {`$z^3$`} and {`$\\bar{z}^3$`}, each carrying a complex coefficient{' '}
                {`$h$`} that measures how strong the resonance is.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Rotating frame</span>
              <p className="lrn-step-content">
                Substitute {`$z = \\zeta e^{\\frac{it}{3}}$`}. The phase {`$e^{it/3}$`} spins at the
                resonant rate {`$\\frac{1}{3}$`}, so {`$z^3$`} picks up {`$e^{it}$`} while the
                driving term carries {`$e^{-it}$`}; the two cancel and the explicit time dependence
                drops out. The Hamiltonian becomes autonomous.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Autonomous Hamiltonian</span>
              <p className="lrn-step-content">
                Collecting the surviving terms gives{' '}
                {`$-2iH_0 = -i\\varepsilon\\zeta\\bar{\\zeta} + h\\zeta^3 - \\bar{h}\\bar{\\zeta}^3$`}
                , where {`$\\varepsilon = \\omega - \\frac{1}{3}$`}. The {`$-2i$`} factor is just a
                fixed scaling that makes the quadratic part come out as the real amplitude{' '}
                {`$\\zeta\\bar{\\zeta}$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4: Real form</span>
              <p className="lrn-step-content">
                A constant rotation {`$\\zeta \\to \\zeta e^{i\\theta}$`} can turn the coefficient{' '}
                {`$h$`} into a positive real number {`$a$`}. Writing {`$\\zeta = x + iy$`} then
                gives the real cubic form:
              </p>
            </div>
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$H_0 = \\frac{\\varepsilon}{2}(x^2+y^2) + a(x^3 - 3xy^2)$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the substitution {`$z = \\zeta e^{\\frac{it}{3}}$`} make the Hamiltonian
              autonomous?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The factor {`$e^{\\frac{it}{3}}$`} rotates at exactly the resonant frequency{' '}
                {`$\\frac{1}{3}$`}.
              </p>
              <p>
                This removes the explicit time dependence from the resonant terms in the
                Hamiltonian.
              </p>
              <p>
                In the rotating frame, the resonant structure looks static, so {`$H_0$`} has no{' '}
                {`$t$`} in it.
              </p>
            </details>
          </div>

          <div style={{ margin: '24px 0' }}>
            <ResonancePhasePortrait C={C} />
          </div>

          <p>
            The drag-to-sweep portrait above lets you cross resonance yourself. The fixed
            three-panel view below freezes the three cases side by side for comparison.
          </p>

          <ResonancePortrait />

          <p>
            For {`$\\varepsilon < 0$`}: the origin is a center (stable). All nearby trajectories are
            closed loops around it.
          </p>
          <p>
            For {`$\\varepsilon = 0$`}: the origin is degenerate. Three separatrices (boundary
            curves that split regions of different motion) meet at the origin forming a triangle.
          </p>
          <p>
            For {`$\\varepsilon > 0$`}: the origin becomes a saddle (unstable). Three new saddle
            points appear at the vertices of an equilateral triangle.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The gradient of {`$H_0 = \\frac{\\varepsilon}{2}(x^2+y^2) + a(x^3-3xy^2)$`} vanishes
              at the origin for all {`$\\varepsilon$`}.
            </p>
            <p>The second derivative matrix at the origin is {`$\\varepsilon \\cdot I$`}.</p>
            <p>
              For {`$\\varepsilon < 0$`}: the origin is a minimum of {`$H_0$`} in the restricted
              problem, hence stable.
            </p>
            <p>For {`$\\varepsilon > 0$`}: the origin is a maximum; nearby trajectories escape.</p>
            <p>The three cubic extrema of the angular part create the triangular structure.</p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You compute the Birkhoff normal form to degree 100 and find the stable and unstable
              manifolds of a saddle coincide exactly in the truncated system.
            </p>
            <p>What does this tell you about the manifolds in the full system?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Almost nothing. The truncated form is integrable so its manifolds coincide.</p>
              <p>
                But the Birkhoff series generally diverges, and the actual manifolds in the full
                system pull apart by a tiny amount that no finite truncation can ever see.
              </p>
              <p>The next section measures exactly how tiny that gap is.</p>
            </details>
          </div>

          <h2>Splitting of Separatrices</h2>

          <p>
            The truncated normal form looks integrable - its stable and unstable manifolds coincide
            exactly. The full system is not integrable. The gap between them is exponentially small,
            which is exactly why it is so dangerous: no finite-order truncation can see it.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Splitting of Separatrices</span>
            <p>
              A saddle point has an incoming curve and an outgoing curve, called its stable manifold{' '}
              {`$\\Gamma^+$`} and unstable manifold {`$\\Gamma^-$`}. After a perturbation these two
              curves generically no longer line up.
            </p>
            <p>
              The gap between them is exponentially small, of order{' '}
              {`$e^{-\\frac{1}{\\sqrt{\\varepsilon}}}$`}, so no finite-order perturbation theory can
              detect it.
            </p>
            <p>
              Where the two curves cross at a clear angle (a transverse homoclinic crossing), the
              orbits tangle into an infinitely folded web. This crossing is the seed of chaos, and
              Poincaré called the resulting picture one he would not even try to draw.
            </p>
          </div>

          <p>
            The divergence of the Birkhoff series is exactly this splitting seen through algebra: an
            effect too small for any power series in {`$\\varepsilon$`} to capture.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Truncated System (Normal Form)</span>
              <p>Integrable. Stable and unstable manifolds coincide.</p>
              <p>Good approximation for finite time.</p>
              <p>Misses exponentially small chaos.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Full System</span>
              <p>Not integrable in general. Manifolds split.</p>
              <p>Chaotic behavior near hyperbolic points.</p>
              <p>Manifold separation is {`$O(e^{-\\frac{1}{\\sqrt{\\varepsilon}}})$`}.</p>
            </div>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Resonance of order 3 destabilizes the equilibrium (you saw this above). What do you
              expect at resonance of order 5?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The origin remains stable at resonance of order 5.</p>
              <p>
                For {`$n > 4$`}, the quartic part of the normal form dominates near zero and gives a
                minimum or maximum of {`$H_0$`} regardless of the resonance.
              </p>
              <p>Order-{`$n$`} terms create small islands but cannot flip stability.</p>
            </details>
          </div>

          <h2>Resonances of Higher Order</h2>

          <p>
            Resonance of order 3 flips stability completely. Does that mean every resonance is
            equally dangerous?
          </p>

          <p>The averaged Hamiltonian near a resonance of order {`$n$`} takes the form:</p>
          <div className="lrn-eq">
            <span>{`$$H_0 = \\varepsilon\\tau + \\tau^2\\alpha(\\tau) + a\\tau^{\\frac{n}{2}}\\sin n\\varphi, \\quad 2\\tau = p^2+q^2, \\quad \\alpha(0) = \\pm 1$$`}</span>
          </div>
          <p>
            Here {`$\\alpha(\\tau)$`} is the twist coefficient: it tells you how fast the orbit's
            frequency changes as its amplitude {`$\\tau$`} grows. Its sign at the center,{' '}
            {`$\\alpha(0) = \\pm 1$`}, is what decides whether the quartic term bowls the level sets
            upward or downward. The {`$\\sin n\\varphi$`} factor is the angular pattern left behind
            by the order-{`$n$`} resonant term.
          </p>

          <p>
            Example: at resonance of order 5, the term {`$a\\tau^{\\tfrac{5}{2}}\\sin 5\\varphi$`}{' '}
            appears.
          </p>
          <p>
            But the {`$\\tau^2\\alpha(\\tau)$`} term dominates near zero because{' '}
            {`$\\tau^2 \\gg \\tau^{\\tfrac{5}{2}}$`} for small {`$\\tau$`}.
          </p>
          <p>So the origin keeps the sign given by {`$\\alpha(0) = \\pm 1$`} and stays stable.</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The averaged Hamiltonian has three competing pieces: linear {`$\\varepsilon\\tau$`},
              quartic {`$\\tau^2\\alpha$`}, and resonant {`$\\tau^{\\frac{n}{2}}\\sin n\\varphi$`}.
            </p>
            <p>
              Near {`$\\tau = 0$`}, the resonant term {`$\\tau^{\\frac{n}{2}}$`} is smaller than the
              quartic term {`$\\tau^2$`} when {`$n > 4$`}.
            </p>
            <p>
              So the radial shape of the level sets is set by the quartic term, which has a fixed
              sign and bounds trajectories.
            </p>
            <p>For {`$n = 3$`}, the cubic resonant term beats the quartic and flips stability.</p>
            <p>For {`$n = 4$`}, both compete: it is the borderline case.</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Resonance of Order 3</span>
              <p>Passage through resonance causes instability.</p>
              <p>Origin changes from minimum to maximum of {`$H_0$`}.</p>
              <p>Three unstable periodic points appear.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Resonance of Order {`$n > 4$`}</span>
              <p>Does not cause instability.</p>
              <p>
                Degree-4 terms in normal form give a minimum/maximum of {`$H_0$`} even at resonance.
              </p>
              <p>Islands of phase oscillations appear, but the original orbit stays stable.</p>
              <p>Order 4 is the exceptional borderline case.</p>
            </div>
          </div>

          <div className="lrn-callout lrn-tip">
            <span className="lrn-callout-label">Order 4 Exception</span>
            <p>
              At resonance of order 4, both resonant and non-resonant terms of order 4 appear in the
              normal form.
            </p>
            <p>
              Whether the origin is stable depends on which terms dominate: this requires a
              case-by-case analysis.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Islands of Phase Oscillation</span>
            <p>
              Near each resonance of order {`$n$`}, {`$2n$`} critical points appear near the
              vertices of a regular {`$n$`}-gon.
            </p>
            <p>
              These create "islands" of bounded trajectories surrounding each unstable periodic
              orbit.
            </p>
          </div>
        </>,

        // SECTION 3: KAM Theory
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>You have an integrable Hamiltonian system with invariant tori.</p>
            <p>You add a tiny perturbation {`$\\varepsilon H_1$`}.</p>
            <p>Do you expect all invariant tori to survive, some to survive, or none to survive?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Most tori survive - specifically the non-resonant ones.</p>
              <p>Resonant tori (where frequencies are rationally related) break apart.</p>
              <p>
                The set of surviving tori has full Lebesgue measure, even though the destroyed ones
                are dense.
              </p>
            </details>
          </div>

          <h2>Conditionally-Periodic Motion and Invariant Tori</h2>

          <p>
            Take a system that is perfectly integrable - every orbit stays on a torus forever. Now
            push it slightly. Do the tori survive, or does the whole structure collapse?
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Recall: Conditionally-Periodic Motion</span>
            <div className="lrn-definition-desc">
              <p>
                In action-angle variables {`$(I, \\varphi)$`}, an integrable system keeps each
                action fixed and turns each angle at its own steady rate{' '}
                {`$\\dot{\\varphi}_k = \\omega_k(I)$`}, so every orbit lives on a torus.
              </p>
              <p>
                The one fact KAM hinges on: if the frequencies {`$\\omega_k$`} are rationally
                independent the orbit densely fills its torus, while if they are rationally
                dependent (a resonance) the orbit closes into a loop.
              </p>
            </div>
          </div>

          <div style={{ margin: '24px 0' }}>
            <InvariantToriDiagram C={C} />
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Nondegeneracy Condition</span>
            <div className="lrn-definition-desc">
              <p>The system is nondegenerate if:</p>
              <div className="lrn-eq">
                <span>{`$$\\det\\!\\left(\\frac{\\partial\\omega}{\\partial I}\\right) = \\det\\!\\left(\\frac{\\partial^2 H_0}{\\partial I^2}\\right) \\neq 0$$`}</span>
              </div>
              <p>This means the frequencies change as you move between tori.</p>
              <p>
                The Lebesgue measure of a set is just its total length, area, or volume. A set can
                be dense (touching every region) yet still have zero measure, the way the rational
                numbers sit everywhere on the line but take up no length.
              </p>
              <p>
                Non-resonant tori form a set of full measure; resonant tori form a dense set of
                measure zero.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Isoenergetic Nondegeneracy</span>
            <div className="lrn-definition-desc">
              <p>The system is isoenergetically nondegenerate if the bordered Hessian:</p>
              <div className="lrn-eq">
                <span>{`$$\\det\\begin{pmatrix} \\dfrac{\\partial^2 H_0}{\\partial I^2} & \\dfrac{\\partial H_0}{\\partial I} \\\\ \\left(\\dfrac{\\partial H_0}{\\partial I}\\right)^T & 0 \\end{pmatrix} \\neq 0$$`}</span>
              </div>
              <p>
                The extra row and column hold the frequencies themselves. Adding them fixes the
                energy, so the test now asks whether the frequency ratios (not just the raw
                frequencies) change as you move between tori on one energy surface.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Resonant tori form a countable union of codimension-1 subsets (one for each resonance
              relation).
            </p>
            <p>A countable union of measure-zero sets still has measure zero.</p>
            <p>
              The complement - the non-resonant tori - has full measure by the nondegeneracy
              condition.
            </p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to prove that most tori survive a perturbation. Standard perturbation theory
              gives you small denominators that make the series diverge.
            </p>
            <p>What kind of iterative scheme could beat the small denominator problem?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Newton's method. After each step the error squares:{' '}
                {`$\\varepsilon \\to \\varepsilon^2 \\to \\varepsilon^4 \\to \\cdots$`}.
              </p>
              <p>
                The super-exponential decay {`$\\varepsilon^{2^n}$`} beats the polynomial blow-up{' '}
                {`$|k|^\\nu$`} from small denominators.
              </p>
              <p>This is exactly the Kolmogorov–Arnold–Moser idea.</p>
            </details>
          </div>

          <h2>KAM Theorem (Kolmogorov–Arnold–Moser)</h2>

          <p>
            The answer is that most tori survive - but the proof requires an entirely different
            strategy than standard perturbation theory.
          </p>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem (Kolmogorov, Arnold, Moser)</span>
            <p>
              Let {`$H = H_0(I) + \\varepsilon H_1(I,\\varphi)$`} with {`$H_0$`} nondegenerate.
            </p>
            <p>
              For sufficiently small {`$\\varepsilon$`}, most non-resonant invariant tori survive.
            </p>
            <p>
              They deform slightly but remain as invariant tori densely filled by
              conditionally-periodic trajectories.
            </p>
            <p>The measure of destroyed tori goes to zero as {`$\\varepsilon \\to 0$`}.</p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Non-Resonance Condition (KAM)</span>
            <div className="lrn-definition-desc">
              <p>
                A torus with frequency vector {`$\\omega$`} survives if its frequencies satisfy:
              </p>
              <div className="lrn-eq">
                <span>{`$$|\\langle\\omega, k\\rangle| > C|k|^{-\\nu} \\quad \\text{for all integer vectors } k \\neq 0$$`}</span>
              </div>
              <p>
                Here {`$\\langle\\omega, k\\rangle = k_1\\omega_1 + \\cdots + k_n\\omega_n$`} is the
                combination that vanishes at a resonance, and {`$|k| = |k_1| + \\cdots + |k_n|$`} is
                the order of that resonance. The numbers {`$C > 0$`} and {`$\\nu > 0$`} are fixed
                constants.
              </p>
              <p>
                In plain words: the frequencies must stay a guaranteed distance away from every
                resonance, and that distance is allowed to shrink only as slowly as a power of the
                order {`$|k|$`}. Frequencies that clear this bar are called Diophantine.
              </p>
              <p>Diophantine tori form most of the phase space by measure.</p>
            </div>
          </div>

          <h3>Why the Proof Works: Super-Convergence</h3>

          <p>
            The reason most tori survive is one clean idea. Ordinary perturbation theory corrects
            the orbit one order at a time. This order-by-order expansion is the Lindstedt series.
            Small denominators {`$\\langle\\omega,k\\rangle$`} then pile up and the series usually
            diverges.
          </p>
          <p>
            KAM replaces that with a Newton-style iteration. Each step solves a linearized problem,
            so a size-{`$\\varepsilon$`} error drops to size {`$\\varepsilon^2$`}, then{' '}
            {`$\\varepsilon^4$`}, and so on. This super-exponential decay {`$\\varepsilon^{2^n}$`}{' '}
            beats the polynomial blow-up {`$|k|^\\nu$`} from the small denominators, so the
            iteration converges for Diophantine frequencies. The detailed convergence machinery is
            developed in the later KAM page.
          </p>

          <h3>Small Denominators: The Jupiter-Saturn Example</h3>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Physical Example</span>
            <p>
              Jupiter and Saturn are near a 2:5 resonance: {`$2\\omega_J - 5\\omega_S \\approx 0$`}.
            </p>
            <p>The denominator {`$2\\omega_J - 5\\omega_S$`} is very small, not zero.</p>
            <p>
              This causes a long-period perturbation of about 880 years and a large amplitude in the
              orbital elements.
            </p>
            <p>It does not cause instability - the KAM tori keep the orbits bounded.</p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              KAM gives eternal confinement in 2 DOF systems. Do you expect the same guarantee in 5
              DOF systems with the same perturbation size?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>No. The guarantee weakens.</p>
              <p>
                In 2 DOF the energy surface has 3 dimensions and 2-tori divide it into pieces. A
                trajectory cannot cross a torus, so it stays in its piece.
              </p>
              <p>
                In 5 DOF the energy surface has 9 dimensions and 5-tori have codimension 4. They no
                longer divide the surface, so trajectories can drift around them (Arnold diffusion).
              </p>
            </details>
          </div>

          <h2>Zones of Instability and Arnold Diffusion</h2>

          <p>
            KAM guarantees confinement in 2 degrees of freedom. In higher dimensions, this guarantee
            breaks down. The escape is not sudden. It happens through an exponentially slow drift
            that no finite-order perturbation theory can detect.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">2 DOF Systems</span>
              <p>Energy surface is 3-dimensional.</p>
              <p>Invariant 2-tori divide the energy surface.</p>
              <p>Trajectories trapped between tori forever.</p>
              <p>Topological confinement: gaps between tori are closed regions.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$n > 2$`} DOF Systems</span>
              <p>
                Energy surface is {`$(2n-1)$`}-dimensional ({`$> 3$`}).
              </p>
              <p>
                Invariant {`$n$`}-tori have codimension {`$n-1 > 1$`}: they do not divide the energy
                surface.
              </p>
              <p>
                Arnold diffusion: trajectories can drift along resonant zones over very long times.
              </p>
              <p>
                Rate of drift is exponentially slow: {`$\\sim e^{-\\frac{1}{\\varepsilon^d}}$`} for
                some positive {`$d$`} that depends on the system. The exact value of {`$d$`} is not
                essential - what matters is that the rate lies beyond any power series in{' '}
                {`$\\varepsilon$`}.
              </p>
            </div>
          </div>

          <h3>Reach of the KAM Theorem</h3>

          <p>
            The same proof idea adapts far beyond the basic case. There are versions for
            time-periodic systems, for area-preserving maps, and for motion near a stable
            equilibrium. Each swaps in its own nondegeneracy test but keeps the conclusion: most
            invariant tori survive a small perturbation.
          </p>
          <p>
            One concrete anchor: track a light asteroid in the field of the Sun and Jupiter, with
            Jupiter on a fixed circular orbit. This is a 2 DOF system. When Jupiter's mass is small,
            KAM tori survive and trap the asteroid, so its orbit stays bounded forever. The same
            survival argument covers convex billiards, fast-spinning rigid bodies, and the long-term
            motion of the planets. The later KAM page works these variants and applications in full
            detail.
          </p>
        </>,

        // SECTION 4: Poincaré–Birkhoff and Symplectic Topology
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have an area-preserving map of an annulus that rotates the inner boundary
              clockwise and the outer boundary counterclockwise.
            </p>
            <p>How many fixed points do you expect?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>At least two, by the Poincaré–Birkhoff theorem.</p>
              <p>
                The opposite rotation directions force a "twist" in the map that must have at least
                two fixed points by topological arguments.
              </p>
            </details>
          </div>

          <h2>Poincaré–Birkhoff Fixed-Point Theorem</h2>

          <p>
            How do you prove a periodic orbit exists without finding it explicitly? Pick a surface
            that every trajectory crosses, called a cross-section. Follow a starting point on it
            until the flow brings it back, and record where it lands. This back-and-forth rule is
            the Poincaré return map. A fixed point of the return map (a point that returns to
            itself) is exactly a periodic orbit of the flow. So you reduce the flow to a map, then
            prove the map must have a fixed point. The Poincaré–Birkhoff theorem is the key tool for
            this.
          </p>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem (Poincaré–Birkhoff)</span>
            <p>
              Every area-preserving map of a planar annulus that rotates the two boundary circles in
              opposite directions has at least two fixed points.
            </p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Area-Preserving Annulus Map</span>
            <div className="lrn-definition-desc">
              <p>
                A map {`$(x,y) \\mapsto (f(x,y), y + g(x,y))$`} on the annulus{' '}
                {`$a \\leq x \\leq b$`} with:
              </p>
              <ul className="lrn-list">
                <li>
                  {`$f(a,y) \\equiv a$`}, {`$f(b,y) \\equiv b$`}: boundary circles are preserved
                </li>
                <li>
                  {`$g(a,y) < 0$`}, {`$g(b,y) > 0$`}: opposite rotation directions at the two
                  boundaries
                </li>
              </ul>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The rotation angle {`$g$`} changes from negative to positive as {`$x$`} goes from{' '}
              {`$a$`} to {`$b$`}.
            </p>
            <p>By continuity, there exists a curve where {`$g = 0$`} (zero rotation).</p>
            <p>Points on this curve are candidates for fixed points (angle returns to start).</p>
            <p>Area preservation forces the curve to intersect its image in at least two points.</p>
          </div>

          <PoincareBirkhoff />

          <h3>Connection to Generating Functions</h3>

          <p>
            Write the image of a point {`$(x,y)$`} under the map as {`$(X,Y)$`}. A generating
            function is one function {`$S$`} whose derivatives reproduce this whole coordinate
            change, so it packs the map into a single scalar. Fixed points of the map turn out to be
            the flat spots of {`$S$`}.
          </p>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Key Idea</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Area preservation is equivalent to saying the one-form {`$(x-X)\\,dy + (Y-y)\\,dX$`}{' '}
                is the differential of a single function {`$S$`}. That
                {`$S$`} is the generating function: {`$dS = (x-X)\\,dy + (Y-y)\\,dX$`}.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                At a fixed point the image equals the start: {`$X = x$`} and {`$Y = y$`}. Both
                coefficients {`$(x-X)$`} and {`$(Y-y)$`} vanish, so {`$dS = 0$`} there.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Define {`$F(x,y) = S(X(x,y),y)$`}. Step 2 shows {`$dF = 0$`} exactly at the fixed
                points, so every fixed point is a critical point of {`$F$`}.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the connection between fixed points and critical points of {`$F$`} help you
              count fixed points?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A critical point of a smooth function is where its slope is zero in every direction:
                a peak, a valley, or a mountain pass.
              </p>
              <p>
                Morse theory says a smooth function on a closed, bounded surface must have a minimum
                number of these, set by the surface's shape.
              </p>
              <p>
                That minimum is the sum of the Betti numbers, which count the independent holes of
                the surface in each dimension. A doughnut, for example, has more holes than a
                sphere, so it forces more peaks and valleys.
              </p>
              <p>
                Rewriting "count the fixed points" as "count the critical points" lets you borrow
                this lower bound.
              </p>
            </details>
          </div>

          <h3>Symplectic Diffeomorphisms of the Torus</h3>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem</span>
            <p>
              A symplectic diffeomorphism of the torus that fixes its center of gravity has at least
              four fixed points counting multiplicity, at least three geometrically different.
            </p>
          </div>

          <h3>Generalized Poincaré Theorem and Lagrangian Intersections</h3>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Generalized Poincaré Theorem</span>
            <p>
              Every symplectic diffeomorphism of a compact symplectic manifold, homologous to the
              identity, has at least as many fixed points as a smooth function on the manifold has
              critical points.
            </p>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Homologous to the Identity</span>
            <div className="lrn-definition-desc">
              <p>
                A symplectic map {`$g: M \\to M$`} is homologous to the identity if you can deform
                it back to the do-nothing map by a smooth path that stays symplectic the whole way.
              </p>
              <p>
                The path must not wind around any topological hole in the space. Concretely, the
                velocity of the deformation must come from one ordinary Hamiltonian function at each
                instant, not a many-valued one. A single-valued generator is exactly what blocks the
                unwanted winding.
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Poincaré–Birkhoff (Annulus)</span>
              <p>Requires: boundary circles rotate in opposite directions.</p>
              <p>Gives: at least 2 fixed points.</p>
              <p>Setting: planar annulus.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Generalized Poincaré (Compact Manifold)</span>
              <p>Requires: map homologous to identity.</p>
              <p>Gives: at least sum-of-Betti-numbers fixed points.</p>
              <p>Setting: any compact symplectic manifold.</p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Generating Function Approach</span>
              <p>Fixed points = critical points of {`$F(x,y) = S(X(x,y),y)$`}.</p>
              <p>Works near the identity map only.</p>
              <p>Local method.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Lagrangian Intersection Approach</span>
              <p>Fixed points = intersections of the graph of the map with the diagonal.</p>
              <p>
                Both are Lagrangian submanifolds (half-dimensional surfaces on which the symplectic
                pairing vanishes). They cannot be pulled fully apart.
              </p>
              <p>Global method; works in any dimension.</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHERE DOES {`$2^n$`} COME FROM?</span>
            <p>
              For a torus the fixed-point lower bound is the sum of its Betti numbers, the count of
              independent holes in each dimension.
            </p>
            <p>
              The {`$n$`}-torus has {`$\\binom{n}{k}$`} independent holes in dimension {`$k$`}, and
              these add up to {`$\\sum_k \\binom{n}{k} = 2^n$`}.
            </p>
            <p>
              So a map of the {`$n$`}-torus homologous to the identity must keep at least {`$2^n$`}{' '}
              fixed points.
            </p>
          </div>

          <h3>Periodic Points from Disintegrating Tori</h3>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem</span>
            <p>
              If an isoenergetically nondegenerate system has an {`$n$`}-torus filled with closed
              trajectories, its disintegration under perturbation creates at least {`$2^{n-1}$`}{' '}
              closed trajectories of the perturbed system.
            </p>
            <p>
              The power drops from {`$2^n$`} to {`$2^{n-1}$`} because one circle of the torus is
              used up tracking the closed trajectory itself. The surviving orbits sit at the fixed
              points of a return map on the remaining {`$(n-1)$`}-torus, whose Betti numbers add to{' '}
              {`$2^{n-1}$`}.
            </p>
            <p>
              Example: for {`$n=2$`} this guarantees at least {`$2^{1}=2$`} closed orbits, the same
              count the Poincaré-Birkhoff theorem gives for the annulus.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Why this matters</span>
            <p>This circle of fixed-point results launched the field of symplectic topology.</p>
          </div>
        </>,

        // SECTION 5: Multiplicities of Frequencies
        <>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You have two characteristic frequencies of a linear oscillating system that depend on
              a single parameter {`$\\lambda$`}.
            </p>
            <p>
              Can they cross (become equal) at some value of {`$\\lambda$`} in a typical
              one-parameter family?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. In a typical one-parameter family, two real frequencies approach each other but
                do not cross - they repel like energy levels in quantum mechanics.
              </p>
              <p>Crossing requires codimension 2, so a two-parameter family is needed.</p>
            </details>
          </div>

          <h2>Multiplicities of Characteristic Frequencies</h2>

          <p>
            A linear oscillating system has characteristic frequencies - the rates at which its
            natural modes oscillate. When a parameter changes, those frequencies move. The question
            is: can two of them become equal, and if so, how many parameters does it take?
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Codimension of a Submanifold</span>
            <div className="lrn-definition-desc">
              <p>
                The codimension of a submanifold equals the dimension of the ambient space minus the
                dimension of the submanifold.
              </p>
              <p>
                A submanifold of codimension {`$c$`} requires a {`$c$`}-parameter family to be
                encountered in general position.
              </p>
            </div>
          </div>

          <h3>Ellipsoids and Their Revolution Classes</h3>

          <p>
            An ellipsoid in {`$\\mathbb{R}^n$`} is fixed by two kinds of data. First the {`$n$`}{' '}
            axis lengths. Then the orientation of the principal frame, which takes one angle for
            each pair of axes, so {`$\\frac{n(n-1)}{2}$`} angles. Adding these gives{' '}
            {`$n + \\frac{n(n-1)}{2} = \\frac{n(n+1)}{2}$`} parameters.
          </p>
          <p>An ellipsoid of revolution (two equal axes) is a special case.</p>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Ellipsoids of Revolution Theorem</span>
            <p>
              The set of ellipsoids of revolution in {`$\\mathbb{R}^n$`} is a finite union of smooth
              submanifolds of codimension 2 and higher in the space of all ellipsoids.
            </p>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Codimension Calculation (n=2 Example)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                An ellipse in the plane is determined by 3 parameters (two semi-axes, one angle).
                The space of all ellipses is 3-dimensional.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                An ellipse of revolution (circle) is determined by 1 parameter (radius). The space
                of circles is 1-dimensional.
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">
                Codimension = 3 - 1 = 2. You need to tune 2 parameters to hit a circle in a generic
                family of ellipses.
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Codimension Formula for Multiple Axes</span>
            <div className="lrn-definition-desc">
              <p>
                Forcing {`$i$`} axes to share one length is the same as forcing the shape matrix to
                have an eigenvalue repeated {`$i$`} times. Such a repeated eigenvalue is a stratum
                of codimension {`$\\frac{i(i+1)}{2} - 1$`} in the space of symmetric matrices. That
                simplifies to {`$\\frac{1}{2}(i-1)(i+2)$`}.
              </p>
              <p>
                Plug in: {`$i=2$`} gives {`$2$`}, {`$i=3$`} gives {`$5$`}, {`$i=4$`} gives {`$9$`}.
                So the set of ellipsoids with {`$v_2$`} double, {`$v_3$`} triple, {`$v_4$`} fourfold
                axes (and so on) has codimension:
              </p>
              <div className="lrn-eq">
                <span>{`$$2v_2 + 5v_3 + 9v_4 + \\cdots = \\sum \\tfrac{1}{2}(i-1)(i+2)v_i$$`}</span>
              </div>
            </div>
          </div>

          <div style={{ margin: '24px 0' }}>
            <FrequencyRepulsionDiagram C={C} />
          </div>

          <FrequencyRepulsion />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Two frequencies {`$\\omega_1(\\lambda)$`} and {`$\\omega_2(\\lambda)$`} can collide
              only if their difference {`$\\omega_1 - \\omega_2 = 0$`}.
            </p>
            <p>This is one condition in the space of Hamiltonians: it has codimension 1.</p>
            <p>
              But for imaginary eigenvalues {`$\\pm ib$`}, you also need them to remain imaginary
              after the collision.
            </p>
            <p>
              This adds a second condition: both eigenvalues must move along the imaginary axis.
            </p>
            <p>Two conditions together give codimension 2.</p>
          </div>

          <h3>Effect of Symmetry on the Spectrum</h3>

          <p>
            Symmetry can force characteristic frequencies to remain equal even as parameters vary.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">
              Example: Three Identical Masses at Triangle Vertices
            </span>
            <p>
              Three equal masses at the vertices of an equilateral triangle have rotational symmetry
              of order 3.
            </p>
            <p>
              The characteristic frequencies split into "symmetric" modes (matching the rotation)
              and "non-symmetric" modes.
            </p>
            <p>
              The non-symmetric modes come in pairs. The 3-fold rotation acts on each pair as a real
              rotation by {`$120°$`}, which has no real eigenvector and so cannot be split into two
              one-dimensional invariant pieces. Such an unsplittable 2D pattern is called a
              two-dimensional irreducible representation of the symmetry group {`$\\mathbb{Z}_3$`}.
            </p>
            <p>
              Because the rotation mixes the two modes, they must share one frequency, and any
              perturbation that keeps the 3-fold symmetry cannot split the pair.
            </p>
          </div>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Behavior Under Symmetry-Preserving Variation</span>
            <p>
              In a system with rotational symmetry of order {`$\\geq 3$`}, varying parameters while
              preserving the symmetry cannot split a forced double frequency.
            </p>
            <p>
              The minimum parameter count to force a single mode of multiplicity {`$i$`} to merge is{' '}
              {`$\\frac{(i-1)(i+2)}{2}$`}, the same coefficient as above. Making {`$j$`} pairs of
              already-double frequencies collide at once costs an extra {`$j^2$`} parameters.
            </p>
            <p>
              Check: a plain double frequency ({`$i=2$`}) costs {`$\\frac{(1)(4)}{2} = 2$`}{' '}
              parameters, matching the codimension-2 result for ellipsoids of revolution.
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Without Symmetry</span>
              <p>Frequency collision has codimension 2.</p>
              <p>Needs a 2-parameter family to occur.</p>
              <p>Frequencies repel in a 1-parameter family.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">With Symmetry (order {`$\\geq 3$`})</span>
              <p>Forced double frequencies are persistent.</p>
              <p>Symmetry-preserving perturbations cannot split them.</p>
              <p>Collision codimension reduced to 0 within the symmetric family.</p>
            </div>
          </div>

          <h3>The Same Idea for Vibrating Membranes</h3>

          <p>
            The same counting works for a vibrating drum. A stretched membrane has a whole set of
            resonant frequencies fixed by its shape. Asking how many shapes share a frequency, or
            when two frequencies meet, is the same codimension question as for a Hamiltonian.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">See also</span>
            <p>
              The famous version is "can you hear the shape of a drum?", which asks whether the full
              list of frequencies pins down the shape. The answer is no: two differently shaped
              drums can ring with exactly the same set of frequencies.
            </p>
          </div>
        </>
      ]
    },

    // PRACTICE CARDS
    practice: [
      // Quadratic Hamiltonians
      {
        q: 'What are the four types of eigenvalues that can appear in a Hamiltonian matrix?',
        a: 'Real pairs {`$(a,-a)$`}, purely imaginary pairs {`$(ib,-ib)$`}, complex quadruples {`$(\\pm a \\pm ib)$`}, and zero. Hamiltonian symmetry forces all eigenvalues into these symmetric patterns.'
      },
      {
        q: "State Williamson's theorem.",
        a: 'Every real symplectic space with a quadratic Hamiltonian {`$H$`} decomposes into pairwise skew-orthogonal symplectic subspaces on each of which {`$H$`} takes one of the standard normal forms. A real symplectic transformation achieves this decomposition.'
      },
      {
        q: "What does Galin's codimension formula tell you about which Jordan block structures appear in a generic one-parameter family of Hamiltonians?",
        a: 'Only structures with codimension {`$c \\leq 1$`} appear. These are: repeated eigenvalues {`$(\\pm a)^2$`}, {`$(\\pm ia)^2$`}, and double zero {`$0^2$`}. Structures with {`$c = 2$`} require a two-parameter family.'
      },
      {
        q: '[TRANSFER] A family of quantum Hamiltonians depends on a physical coupling constant. You observe that two energy levels (imaginary eigenvalues of the classical system) approach each other as the coupling increases. When do they actually collide?',
        a: "A collision of two imaginary eigenvalue pairs requires codimension 2 by Galin's theorem: you must tune both the collision condition and the condition that eigenvalues remain imaginary. In a generic one-parameter family, they approach but cannot collide - they repel and go off in different directions. Collisions need a two-parameter family."
      },
      {
        q: '[ELABORATE] Why are zero eigenvalues always even in count for a Hamiltonian matrix?',
        a: 'A Hamiltonian matrix {`$IA$`} satisfies the relation that its eigenvalues come in pairs {`$(\\lambda, -\\lambda)$`} because of the symplectic structure. Zero is its own negative, so zero eigenvalues must pair with themselves. The symplectic structure forces the total count of zero eigenvalues to be even, and they split into pairs of Jordan blocks.'
      },
      // Birkhoff Normal Form
      {
        q: 'Define a resonance relation of order {`$K$`} for frequencies {`$\\omega_1,\\ldots,\\omega_n$`}.',
        a: 'Integers {`$k_i$`} not all zero satisfy {`$k_1\\omega_1+\\cdots+k_n\\omega_n = 0$`} with {`$|k_1|+\\cdots+|k_n| = K$`}. Low-order resonances (small {`$K$`}) are most dangerous for normal form simplification.'
      },
      {
        q: 'State the Birkhoff normal form theorem.',
        a: 'If frequencies {`$\\omega_i$`} satisfy no resonance relation of order {`$s$`} or less, then there is a canonical transformation reducing {`$H$`} to {`$H_s(P,Q) + R$`} where {`$H_s$`} depends only on {`$\\tau_i = \\frac{P_i^2+Q_i^2}{2}$`} and {`$R = O(|P|+|Q|)^{s+1}$`}.'
      },
      {
        q: 'Why are Birkhoff normalizing series generally divergent?',
        a: 'The divergence reflects the splitting of separatrices in the full system. If the series converged, stable and unstable manifolds of hyperbolic points would coincide exactly. But generically they split - an exponentially small effect invisible to any finite power series. The divergence of the series is the algebraic signature of this geometric phenomenon.'
      },
      {
        q: '[TRANSFER] A Hamiltonian system has two frequencies {`$\\omega_1 = \\sqrt{2}$`} and {`$\\omega_2 = 1$`}. To what degree can you construct a Birkhoff normal form?',
        a: 'You need to check for resonances {`$k_1\\sqrt{2} + k_2 = 0$`}. Since {`$\\sqrt{2}$`} is irrational, no integer relation holds at any finite order {`$K$`}. So you can construct the Birkhoff normal form to any degree {`$s$`}. The form at degree 4 is {`$H_4 = a_1\\tau_1 + a_2\\tau_2 + a_{11}\\tau_1^2 + a_{12}\\tau_1\\tau_2 + a_{22}\\tau_2^2$`}.'
      },
      {
        q: '[ELABORATE] Why does the Birkhoff normal form depend only on action variables {`$\\tau_i$`}, not on angle variables {`$\\varphi_i$`}?',
        a: 'The goal of the normal form construction is to kill all angle-dependent terms in the Taylor series by canonical transformations. A non-resonant term can always be killed because the denominator {`$\\lambda_1(\\beta_1-\\alpha_1)+\\cdots$`} is nonzero. Angle-independent terms in {`$\\tau_i$`} (which are resonant with themselves) cannot be killed - they are the unavoidable residue.'
      },
      {
        q: '[PREDICT] What happens to the Birkhoff normal form when you cross a resonance of order 3, meaning {`$k_1\\omega_1 + k_2\\omega_2 = 0$`} with {`$|k_1|+|k_2|=3$`}?',
        a: 'The resonant terms of degree 3 in the normal form can no longer be killed. These terms are of the form {`$z_1^{\\alpha}z_2^{\\beta}$`} with {`$|\\alpha|+|\\beta|=3$`} satisfying the resonance relation. They change the topology of the phase portrait near the equilibrium - the origin can lose stability and an equilateral triangle of new periodic orbits appears.'
      },
      // Resonance and Splitting
      {
        q: 'What is the detuning parameter {`$\\varepsilon$`} in the context of resonance of order 3?',
        a: 'The detuning {`$\\varepsilon = \\omega - \\frac{1}{3}$`} measures distance from exact resonance. At {`$\\varepsilon = 0$`}: bifurcation - origin is degenerate. At {`$\\varepsilon < 0$`}: origin is a center (stable). At {`$\\varepsilon > 0$`}: origin is a saddle (unstable) with three new saddle points at vertices of an equilateral triangle.'
      },
      {
        q: 'Write the real form of the resonance-3 truncated Hamiltonian.',
        a: '{`$H_0 = \\frac{\\varepsilon}{2}(x^2+y^2) + a(x^3-3xy^2)$`}. The term {`$a(x^3-3xy^2)$`} is the real part of {`$az^3$`} in complex coordinates. The coefficient {`$a$`} can be made real by a rotation.'
      },
      {
        q: 'What is the splitting of separatrices and why is it exponentially small?',
        a: 'The stable and unstable manifolds of a hyperbolic fixed point fail to coincide after perturbation. The separation is of order {`$e^{-\\frac{1}{\\sqrt{\\varepsilon}}}$`}, which is exponentially small in {`$\\varepsilon$`}. No finite-order Taylor series in {`$\\varepsilon$`} can detect an exponentially small quantity, so it is invisible to perturbation theory.'
      },
      {
        q: '[TRANSFER] A physicist computes the Birkhoff normal form to degree 10 and trusts it to predict the location of the separatrix. Why is this wrong?',
        a: 'The separatrix (stable/unstable manifold) is affected by the splitting of separatrices, which is of order {`$e^{-\\frac{1}{\\sqrt{\\varepsilon}}}$`}. This is beyond all finite orders in {`$\\varepsilon$`}. The Birkhoff series is asymptotic, not convergent. The degree-10 form gives excellent predictions for bounded time, but the actual separatrix location is off by the exponentially small splitting.'
      },
      {
        q: '[ELABORATE] Why does resonance of order 3 cause instability but resonance of order {`$n > 4$`} does not?',
        a: 'For order-3 resonance, the cubic terms in the normal form dominate near zero - they determine whether the origin is a minimum or maximum of {`$H_0$`}. Cubic terms change sign as {`$\\varepsilon$`} crosses zero, causing a switch from stable to unstable. For order {`$n > 4$`}, the quartic terms in {`$\\tau^2$`} (from degree 4 of the normal form) give a minimum or maximum of {`$H_0$`} even at resonance, and the order-{`$n$`} terms are smaller perturbations that create islands but do not destroy the sign of the quadratic part.'
      },
      // KAM Theory
      {
        q: 'State the nondegeneracy condition for the KAM theorem.',
        a: '{`$\\det|\\frac{\\partial^2 H_0}{\\partial I^2}| \\neq 0$`}. This means the frequency map {`$I \\mapsto \\omega(I) = \\frac{\\partial H_0}{\\partial I}$`} is a local diffeomorphism: different tori have different frequency vectors. It ensures that the non-resonant tori have full Lebesgue measure.'
      },
      {
        q: 'State the KAM theorem.',
        a: 'For {`$H = H_0(I) + \\varepsilon H_1(I,\\varphi)$`} with {`$H_0$`} nondegenerate, and sufficiently small {`$\\varepsilon$`}: most non-resonant invariant tori survive, slightly deformed. The surviving tori carry conditionally-periodic trajectories with Diophantine frequency vectors. The measure of destroyed tori goes to zero as {`$\\varepsilon \\to 0$`}.'
      },
      {
        q: 'What is the Diophantine non-resonance condition for a KAM torus?',
        a: '{`$|\\langle\\omega,k\\rangle| > C|k|^{-\\nu}$`} for all integer vectors {`$k \\neq 0$`}. This says the frequencies are "far from resonance" quantitatively. Tori satisfying this for some {`$C,\\nu > 0$`} survive perturbations. The set of such {`$\\omega$`} values has full Lebesgue measure.'
      },
      {
        q: "Why does Newton's method (super-convergence) solve the small denominator problem in the KAM proof?",
        a: "Small denominators {`$|\\langle\\omega,k\\rangle|^{-1} \\leq C|k|^\\nu$`} grow polynomially. Standard perturbation theory compounds this growth at each order, causing divergence. Newton's method reduces the error from {`$\\varepsilon$`} to {`$\\varepsilon^2$`} per step, giving super-exponential convergence. Polynomial growth in {`$|k|$`} cannot beat {`$\\varepsilon^{2^n}$`} decay, so the iteration converges."
      },
      {
        q: '[TRANSFER] Why does KAM theory guarantee eternal confinement for a 2 DOF system but not for a 5 DOF system with the same perturbation size?',
        a: 'In 2 DOF, the energy surface has dimension 3. Invariant 2-tori have dimension 2 and codimension 1 in the energy surface: they divide it into disconnected pieces. Trajectories in a gap between tori cannot escape. In 5 DOF, the energy surface has dimension 9 and 5-tori have codimension 4: they do not divide the energy surface. Trajectories can drift around the tori through Arnold diffusion, though exponentially slowly.'
      },
      {
        q: '[ELABORATE] Why do non-resonant tori have full Lebesgue measure while resonant tori are dense?',
        a: 'For each resonance relation {`$\\langle k,\\omega\\rangle = 0$`}, the set of {`$\\omega$`} satisfying it is a hyperplane in frequency space - a set of measure zero. There are countably many such relations (one for each integer vector {`$k$`}). A countable union of measure-zero sets still has measure zero. So resonant tori form a measure-zero set. But each hyperplane is dense, so the union of all resonant frequencies is also dense.'
      },
      {
        q: "[PREDICT] An asteroid is at the 3:1 resonance with Jupiter. KAM tori near the resonance are destroyed. What do you expect for the asteroid's long-term behavior?",
        a: 'The resonant torus breaks into a finite number of periodic orbits plus complex heteroclinic structure (separatrix splitting). In 2 DOF, surviving KAM tori outside the resonance zone bound the motion. But the asteroid near the 3:1 resonance can undergo large chaotic excursions within the resonance zone - this is the Kirkwood gap mechanism. It is not ejected eternally, but its orbital elements fluctuate widely.'
      },
      // Poincaré–Birkhoff
      {
        q: 'State the Poincaré–Birkhoff theorem.',
        a: 'Every area-preserving homeomorphism of a planar annulus that rotates the inner boundary clockwise and the outer boundary counterclockwise has at least two fixed points.'
      },
      {
        q: 'How do fixed points of a symplectic map relate to critical points of a generating function?',
        a: 'For a symplectic diffeomorphism with generating function {`$S$`} satisfying {`$dS = (x-X)dy + (Y-y)dX$`}, define {`$F(x,y) = S(X(x,y),y)$`}. Every fixed point ({`$X=x, Y=y$`}) of the diffeomorphism forces {`$dS=0$`}, hence {`$dF=0$`}. So fixed points are exactly the critical points of {`$F$`}.'
      },
      {
        q: '[TRANSFER] A physicist wants to count periodic orbits of period {`$N$`} in a Hamiltonian system. How does the Poincaré–Birkhoff theorem help?',
        a: 'The {`$N$`}-th iterate {`$A^N$`} of the Poincaré return map is itself an area-preserving map of an annulus. If the rotation angles on the boundary circles have opposite signs relative to the period-{`$N$`} threshold, Poincaré–Birkhoff guarantees at least 2 fixed points of {`$A^N$`}. These fixed points correspond to exactly the periodic orbits of period {`$N$`} of the original system.'
      },
      {
        q: '[ELABORATE] Why does the generalized Poincaré theorem require the map to be homologous to the identity, not just symplectic?',
        a: 'A general symplectic map can have few fixed points. For example, a rotation of a sphere may have exactly 2. The homologous-to-identity condition ensures the map is "topologically trivial" in a precise sense: it can be deformed to the identity through symplectic maps with single-valued Hamiltonians. This forces the fixed-point count to match the topological lower bound given by the sum of Betti numbers.'
      },
      {
        q: '[SELF-EXPLAIN] Explain why the Lagrangian intersection approach gives fixed points of a symplectic map.',
        a: 'The graph of a symplectic map {`$A: M \\to M$`} is a Lagrangian submanifold of {`$M \\times M$`} (with the product symplectic form). The diagonal {`$\\Delta = \\{(x,x)\\}$`} is also Lagrangian. Their intersection consists exactly of the points {`$(x, A(x))$`} with {`$A(x)=x$`}, which are the fixed points of {`$A$`}. Lagrangian intersection theory then gives the lower bound {`$2^n$`} on the number of intersection points, hence on fixed points.'
      },
      // Multiplicities of Frequencies
      {
        q: 'What is the codimension of the set of ellipsoids of revolution in the space of all ellipsoids?',
        a: 'Codimension 2. An ellipsoid in {`$\\mathbb{R}^n$`} has {`$\\frac{n(n+1)}{2}$`} parameters; a revolution ellipsoid has {`$\\frac{n(n+1)}{2} - 2$`} free parameters. Two conditions must be imposed to make two axis lengths equal, giving codimension 2.'
      },
      {
        q: 'Why can two real characteristic frequencies not collide in a generic one-parameter family of Hamiltonians?',
        a: 'Collision of imaginary eigenvalue pairs {`$(\\pm i\\omega_1)$`} and {`$(\\pm i\\omega_2)$`} requires imposing two conditions simultaneously: {`$\\omega_1 = \\omega_2$`} (collision) and that they remain imaginary (not split into a complex quadruple). Two conditions give codimension 2. A one-parameter family can only satisfy codimension-1 conditions generically, so collision is avoided.'
      },
      {
        q: '[TRANSFER] A structural engineer varies the stiffness of a beam and plots the two lowest natural frequencies. What does the theory predict about their graph?',
        a: 'In a generic one-parameter family, the frequency curves approach each other but repel - like hyperbolas, not crossing. This is the "avoided crossing" or "frequency repulsion" phenomenon. The codimension-2 nature of collision means crossing requires fine-tuning two parameters simultaneously, which a generic one-parameter family cannot do. The curves form hyperbola-like shapes in the {`$(\\lambda, \\omega)$`} plane.'
      },
      {
        q: '[ELABORATE] Why does 3-fold rotational symmetry force double characteristic frequencies for "non-symmetric" modes?',
        a: 'Modes that are not invariant under the 3-fold rotation form 2-dimensional irreducible representations of the rotation group {`$\\mathbb{Z}_3$`}. (The character theory of {`$\\mathbb{Z}_3$`} over {`$\\mathbb{R}$`} forces this.) The linearized equations of motion on such a representation must have the same eigenvalue for both basis vectors, by equivariance. Any symmetry-preserving perturbation leaves this eigenspace intact, so the double frequency persists.'
      },
      {
        q: '[PREDICT] A system has 3-fold rotational symmetry. You vary a parameter while keeping the symmetry. Two "non-symmetric" characteristic frequencies are forced equal by symmetry. What happens when you break the symmetry slightly?',
        a: 'Breaking the symmetry lifts the forced degeneracy. The two frequencies split into two nearby but unequal values. The splitting is proportional to the symmetry-breaking parameter (to leading order). Without symmetry, the codimension-2 analysis applies: a single parameter cannot maintain the collision, so the frequencies immediately separate.'
      }
    ],

    // REFERENCE MODE
    reference: {
      category: 'Quick Reference',
      title: 'Normal Forms and Perturbations of Hamiltonian Systems',
      sections: [
        <>
          <h2>Quadratic Hamiltonians</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Quadratic Hamiltonian</span>
            <div className="lrn-definition-desc">
              <p>
                {`$H = \\tfrac{1}{2}(Ax,x)$`}, equations of motion {`$\\dot{x} = IAx$`}.
              </p>
              <p>When to use: linearizing any Hamiltonian near an equilibrium point.</p>
            </div>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Eigenvalue Types</span>
            <ul className="lrn-list">
              <li>Real pairs: {`$(a,-a)$`} - saddle instability</li>
              <li>Imaginary pairs: {`$(ib,-ib)$`} - center (stable at order 1)</li>
              <li>Complex quadruples: {`$(\\pm a \\pm ib)$`} - spiral instability</li>
              <li>Zero: always even count</li>
            </ul>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Galin Codimension Rule</span>
            <p>
              Codimension {`$c$`} = number of independent conditions forcing a Jordan block
              configuration. A general-position {`$l$`}-parameter family meets only configurations
              with {`$c \\leq l$`}.
            </p>
            <p>
              Codimension-1 cases (the only ones in a one-parameter family): {`$(\\pm a)^2$`},{' '}
              {`$(\\pm ia)^2$`}, {`$0^2$`}.
            </p>
          </div>

          <h2>Birkhoff Normal Form</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Canonical Polar Coordinates</span>
            <div className="lrn-definition-desc">
              <p>
                {`$P_i = \\sqrt{2\\tau_i}\\cos\\varphi_i$`},{' '}
                {`$Q_i = \\sqrt{2\\tau_i}\\sin\\varphi_i$`}, {`$\\tau_i = \\frac{P_i^2+Q_i^2}{2}$`}.
              </p>
            </div>
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$H(p,q) = H_s(P,Q) + R, \\quad H_s = H_s(\\tau_1,\\ldots,\\tau_n), \\quad R = O^{s+1}$$`}</span>
          </div>
          <p>
            When to use: studying stability and frequency-amplitude coupling near a stable
            equilibrium, away from resonances of order {`$\\leq s$`}.
          </p>

          <div className="lrn-callout">
            <span className="lrn-callout-label">1 DOF Birkhoff Form</span>
            <div className="lrn-eq">
              <span>{`$$H_{2m} = a_1\\tau + a_2\\tau^2 + \\cdots + a_m\\tau^m$$`}</span>
            </div>
            <p>
              When to use: studying a single oscillator with one action variable, away from any
              resonance of order {`$\\leq 2m$`}.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">2 DOF Birkhoff Form (degree 4)</span>
            <div className="lrn-eq">
              <span>{`$$H_4 = a_1\\tau_1 + a_2\\tau_2 + a_{11}\\tau_1^2 + a_{12}\\tau_1\\tau_2 + a_{22}\\tau_2^2$$`}</span>
            </div>
            <p>
              When to use: a 2 DOF system with frequencies {`$\\omega_1, \\omega_2$`} satisfying no
              resonance of order 4 or less.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Elliptic Canonical Transformation Form</span>
            <div className="lrn-eq">
              <span>{`$$(\\tau,\\varphi) \\to (\\tau, \\varphi + \\alpha_0 + \\alpha_1\\tau + \\cdots + \\alpha_m\\tau^m)$$`}</span>
            </div>
            <p>When to use: Poincaré return map near a stable closed trajectory.</p>
          </div>

          <h2>Resonance of Order 3</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$H_0 = \\frac{\\varepsilon}{2}(x^2+y^2) + a(x^3-3xy^2), \\quad \\varepsilon = \\omega - \\tfrac{1}{3}$$`}</span>
          </div>
          <p>When to use: analyzing passage through 1:3 resonance in a 2 DOF Hamiltonian system.</p>
          <ul className="lrn-list">
            <li>{`$\\varepsilon < 0$`}: origin is a center (stable)</li>
            <li>{`$\\varepsilon = 0$`}: degenerate, three separatrices meet at origin</li>
            <li>
              {`$\\varepsilon > 0$`}: origin is a saddle; three saddle points at vertices of
              equilateral triangle
            </li>
          </ul>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Separatrix Splitting</span>
            <p>
              Separation of stable/unstable manifolds: order{' '}
              {`$e^{-\\frac{1}{\\sqrt{\\varepsilon}}}$`}. Invisible to any finite-order perturbation
              theory.
            </p>
          </div>

          <h2>Higher-Order Resonance Averaged Hamiltonian</h2>

          <div className="lrn-eq">
            <span>{`$$H_0 = \\varepsilon\\tau + \\tau^2\\alpha(\\tau) + a\\tau^{\\frac{n}{2}}\\sin n\\varphi, \\quad \\alpha(0) = \\pm 1$$`}</span>
          </div>
          <p>When to use: analyzing stability near resonance of order {`$n$`}.</p>
          <ul className="lrn-list">
            <li>Order 3: origin can become unstable at resonance</li>
            <li>Order 4: borderline; requires case-by-case analysis</li>
            <li>Order {`$n > 4$`}: islands appear but origin remains stable</li>
          </ul>

          <h2>KAM Theory</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$H = H_0(I) + \\varepsilon H_1(I,\\varphi), \\quad \\varepsilon \\ll 1$$`}</span>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Nondegeneracy Condition</span>
            <div className="lrn-eq">
              <span>{`$$\\det\\left|\\frac{\\partial^2 H_0}{\\partial I^2}\\right| \\neq 0$$`}</span>
            </div>
            <p>When to use: verifying that the KAM theorem applies.</p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Isoenergetic Nondegeneracy</span>
            <div className="lrn-eq">
              <span>{`$$\\det\\begin{pmatrix} \\dfrac{\\partial^2 H_0}{\\partial I^2} & \\dfrac{\\partial H_0}{\\partial I} \\\\ \\left(\\dfrac{\\partial H_0}{\\partial I}\\right)^T & 0 \\end{pmatrix} \\neq 0$$`}</span>
            </div>
            <p>When to use: studying the surface of section on a fixed energy level.</p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Diophantine Condition (KAM)</span>
            <div className="lrn-eq">
              <span>{`$$|\\langle\\omega,k\\rangle| > C|k|^{-\\nu} \\quad \\forall k \\neq 0$$`}</span>
            </div>
            <p>When to use: identifying which tori survive perturbation.</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">2 DOF</span>
              <p>Tori divide energy surface. Eternal confinement. No Arnold diffusion.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$n>2$`} DOF</span>
              <p>
                Tori do not divide energy surface. Arnold diffusion possible. Rate{' '}
                {`$\\sim e^{-\\frac{1}{\\varepsilon^d}}$`}.
              </p>
            </div>
          </div>

          <h2>Poincaré–Birkhoff Theorem</h2>

          <div className="lrn-callout lrn-success">
            <span className="lrn-callout-label">Theorem</span>
            <p>
              Area-preserving homeomorphism of annulus with boundary circles rotating in opposite
              directions has {`$\\geq 2$`} fixed points.
            </p>
            <p>When to use: proving existence of periodic orbits in 2 DOF Hamiltonian systems.</p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Generating Function Connection</span>
            <div className="lrn-eq">
              <span>{`$$dS = (x-X)dy + (Y-y)dX$$`}</span>
            </div>
            <p>Fixed points of the map = critical points of {`$F(x,y) = S(X(x,y),y)$`}.</p>
            <p>
              When to use: counting fixed points of a symplectic map by translating to Morse theory
              on a generating function.
            </p>
          </div>

          <h2>Multiplicities of Characteristic Frequencies</h2>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Codimension of Frequency Collision</span>
            <p>
              Two imaginary eigenvalue pairs collide: codimension 2. Needs a 2-parameter family. In
              1-parameter families: frequencies repel (avoided crossing).
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Ellipsoid Codimension Formula</span>
            <div className="lrn-eq">
              <span>{`$$\\text{codim}(v_2 \\text{ double}, v_3 \\text{ triple}, \\ldots) = 2v_2 + 5v_3 + 9v_4 + \\cdots$$`}</span>
            </div>
            <p>
              When to use: counting parameters needed to achieve a given frequency multiplicity.
            </p>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Symmetry Locking</span>
            <p>
              Rotational symmetry of order {`$\\geq 3$`} forces double frequencies for non-symmetric
              modes. Symmetry-preserving perturbations cannot split them.
            </p>
            <p>
              Minimum parameter count for collision of {`$i$`} simple and {`$j$`} double
              frequencies: {`$\\frac{(i-1)(i+2)}{2} + j^2$`}.
            </p>
          </div>
        </>
      ]
    },
    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }`
  }

  return <LearningTemplate config={config} />
}
