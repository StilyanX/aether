import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  NffContinuityCurrent,
  NffRealCurrent,
  NffEnergyMomentumTensor,
  NffSymmetryToConservation,
  NffDiscreteNoether
} from '../../../../../components/viz'

export default function NoetherForFields() {
  const config = {
    cssPrefix: 'nff',
    documentTitle: "Noether's Theorem for Fields and the Energy-Momentum Tensor - AETHER",
    learning: {
      groupTitle: 'Continuum and Field-Theoretic Mechanics',
      category: 'Module 6',
      title: "Noether's Theorem for Fields and the Energy-Momentum Tensor",
      subtitle:
        'Every continuous symmetry of a field action forces exactly one conserved current. This is the deepest reason conservation laws exist.',
      sections: [
        // SECTION 1: THE BIG IDEA
        <>
          <h2>Symmetry Is the Reason Conservation Laws Exist</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              You already know: if time does not appear in the Lagrangian, energy is conserved. If a
              coordinate is absent, its conjugate momentum is conserved. Why do these two facts have
              the same shape?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Both are special cases of one theorem. Whenever the action does not change under
                some continuous transformation, a conserved quantity follows automatically. The
                theorem that makes this precise is Noether's theorem.
              </p>
            </details>
          </div>

          <p>
            Every great conservation law in physics has one root: symmetry. Energy is conserved
            because the laws of physics do not change from one moment to the next. Momentum is
            conserved because the laws do not change from one place to the next. Electric charge is
            conserved because the laws do not care about the global phase of a quantum field.
            Noether's theorem turns this intuition into algebra.
          </p>

          <p>
            In its field-theoretic form, the theorem reaches its most powerful version. A field has
            infinitely many degrees of freedom (independent ways it can change), one per spacetime
            point. A symmetry of the action then guarantees a <em>local</em> conservation law: a
            four-divergence that vanishes everywhere, not just globally. A four-divergence is the
            spacetime sum{' '}
            {`$\\partial_\\nu j^\\nu = \\partial_0 j^0 + \\partial_1 j^1 + \\partial_2 j^2 + \\partial_3 j^3$`}
            , and the quantity {`$j^\\nu$`} it acts on is called a current: a 4-vector that tracks
            something flowing through spacetime without being created or destroyed.
          </p>

          <div className="lrn-insight">
            <span className="lrn-insight-label">Core Principle</span>
            <p>
              {`Every continuous symmetry of the action integral produces exactly one conserved current $j^\\nu$ satisfying $\\frac{d}{dx^\\nu} j^\\nu = 0$. A symmetry here means a transformation that leaves the Lagrangian density's shape and the action's total value unchanged.`}
            </p>
          </div>

          <p>
            This theorem applies to elastic solids, electromagnetic fields, the Schrödinger wave
            function, and relativistic meson fields. The formalism is the same in every case. Use
            this theorem whenever you need to find a conservation law that follows from a symmetry
            of the action.
          </p>

          <NffSymmetryToConservation />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why Is This True?</span>
            <p>
              A symmetry means the action does not change. That constraint forces the variation of
              the action to vanish even when both coordinates and fields shift together. Working out
              that constraint algebraically, using the field equations to simplify, always produces
              a total divergence. A total divergence that integrates to zero over all space means a
              locally conserved current.
            </p>
          </div>

          <p>
            The theorem covers only <strong>continuous</strong> transformations, those you can reach
            by a smooth chain of tiny steps from doing nothing at all. Discrete symmetries (parity,
            time reversal) jump in one move and are outside its scope. The theorem also assumes flat
            4-space: either ordinary Euclidean space or Minkowski space (the flat spacetime of
            special relativity, with no gravitational curvature).
          </p>
        </>,

        // SECTION 2: STRESS-ENERGY TENSOR
        <>
          <h2>The Energy-Momentum Tensor and Its Physical Components</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              {`The stress-energy tensor $T^\\nu_{\\phantom{\\nu}\\mu}$ is a $4 \\times 4$ array of numbers (a tensor is a grid of components that transforms in a fixed way when you change coordinates). What do you expect the diagonal entries to represent physically? What about the off-diagonal entries?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The top-left entry ($\\mu=\\nu=0$) should carry the energy. The purely spatial entries ($\\mu,\\nu = 1,2,3$) should carry something like pressure or stress. The mixed entries (one time, one space index) should carry flux (how much of a quantity flows through a surface each second) or momentum density.`}
              </p>
            </details>
          </div>

          <p>
            {`You already built the energy-momentum tensor and read off its components when you set up the field's Lagrangian density. It packs the field's energy, momentum, energy flow, and stress into one $4 \\times 4$ array. The job of this section is to see those same components reappear as the conserved Noether currents of spacetime translation. Throughout this page the lower index labels which row, and a row is a conserved current; the upper index is the spacetime component of that current, the one summed over in $\\partial_\\nu T^\\nu_{\\phantom{\\nu}\\mu} = 0$. So the rows are:`}
          </p>

          <table>
            <thead>
              <tr>
                <th>Row (conserved current)</th>
                <th>What it conserves</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$T^\\nu_{\\phantom{\\nu}0}$`}</td>
                <td>
                  Energy: its time part {`$T^0_{\\phantom{0}0}$`} is the energy density, its space
                  parts are the energy flow
                </td>
              </tr>
              <tr>
                <td>{`$-T^\\nu_{\\phantom{\\nu}i}$`}</td>
                <td>
                  The {`$i$`}th momentum component: its time part is that momentum density, its
                  space parts are the stress
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            {`Each row obeys $\\partial_\\nu j^\\nu = 0$. (In field theory, any 4-vector $j^\\nu$ that satisfies $\\partial_\\nu j^\\nu = 0$ is called a current: it bookkeeps a quantity that can flow but never appears or vanishes.) In almost every physical case the spatial block $T^j_{\\phantom{j}i}$ comes out symmetric, which is exactly what lets angular momentum stay conserved.`}
          </p>

          <h3>A Worked Component: The Free Scalar Field</h3>

          <p>
            {`To see the components as concrete numbers, take the simplest field: a free massless scalar $\\phi$ in one space dimension, with Lagrangian density $\\mathcal{L} = \\frac{1}{2}(\\dot\\phi^2 - \\phi'^2)$ (kinetic minus gradient, with $c = 1$). Plug it into the definition $T^\\nu_{\\phantom{\\nu}\\mu} = (\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\,\\eta_{\\rho,\\mu} - \\mathcal{L}\\,\\delta^\\nu_\\mu$. Here $\\partial\\mathcal{L}/\\partial\\dot\\phi = \\dot\\phi$ and $\\partial\\mathcal{L}/\\partial\\phi' = -\\phi'$, so:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$T^0_{\\phantom{0}0} = \\tfrac{1}{2}(\\dot\\phi^2 + \\phi'^2), \\qquad T^0_{\\phantom{0}1} = \\dot\\phi\\,\\phi', \\qquad T^1_{\\phantom{1}1} = -\\tfrac{1}{2}(\\dot\\phi^2 + \\phi'^2)$$`}</span>
          </div>

          <p>
            {`The energy density $T^0_{\\phantom{0}0}$ is the kinetic part $\\frac{1}{2}\\dot\\phi^2$ plus the gradient part $\\frac{1}{2}\\phi'^2$, always positive. The energy-flow component $T^0_{\\phantom{0}1}$ is the product of the field's speed and its slope. The stress component $T^1_{\\phantom{1}1}$ has the same size as the energy density here, which is the special mark of massless radiation.`}
          </p>

          <NffEnergyMomentumTensor />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              {`The slider changes the phase $\\xi = kx - \\omega t$ of the field $\\phi = A\\sin\\xi$. Watch the energy-density cell and the stress cell. At $\\xi = 0$ the field crosses zero. Are the energy density and stress large or small there? Why?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`At $\\xi = 0$: $\\phi = A\\sin 0 = 0$, but $\\dot\\phi = -A\\omega\\cos 0 = -A\\omega$ and $\\phi' = Ak\\cos 0 = Ak$ are at their largest. So $T^0_{\\phantom{0}0} = \\frac{1}{2}(\\dot\\phi^2 + \\phi'^2)$ is at its maximum even though the field value is zero. Energy lives in the field's motion and slope, not its height. At $\\xi = \\pi/2$ the field is at its peak $\\phi = A$ but $\\dot\\phi = 0$ and $\\phi' = 0$, so both cells drop to zero. For a massless field with $\\omega = k$ the energy density and the stress stay equal in size everywhere. That equality is the equation of state of radiation.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 3: TWO KINDS OF VARIATION
        <>
          <h2>The Two Ways a Field Can Change</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              {`A symmetry moves both the coordinate grid ($x^\\mu \\to x'^\\mu$) and the field values ($\\eta_\\rho \\to \\eta'_\\rho$). When you ask how the field changed, should you compare values at the same old point $x^\\mu$ or at the new point $x'^\\mu$?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Both comparisons are useful and they differ by the amount the coordinate moved. The
                total variation compares new-field-at-new-point to old-field-at-old-point. The
                fixed-point variation compares new-field-at-old-point to old-field-at-old-point. The
                fixed-point variation is simpler to work with because it commutes with spatial
                differentiation.
              </p>
            </details>
          </div>

          <p>
            {`Under a tiny (infinitesimal) symmetry transformation, the coordinate shifts by $\\delta x^\\mu$ and the field shifts by $\\delta\\eta_\\rho$. These two objects measure the change in different ways.`}
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Total variation $\\delta\\eta_\\rho$`}</span>
              <p>{`$\\delta\\eta_\\rho = \\eta'_\\rho(x'^\\mu) - \\eta_\\rho(x^\\mu)$`}</p>
              <p>
                Compares new field at new point to old field at old point. Includes both the field's
                own change and the shift caused by moving the coordinate. Does <strong>not</strong>{' '}
                commute with {`$\\partial/\\partial x^\\nu$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`Fixed-point variation $\\bar\\delta\\eta_\\rho$`}</span>
              <p>{`$\\bar\\delta\\eta_\\rho = \\eta'_\\rho(x^\\mu) - \\eta_\\rho(x^\\mu)$`}</p>
              <p>
                Compares new field to old field at the <em>same</em> spacetime point. Measures only
                the field's own change. <strong>Does</strong> commute with{' '}
                {`$\\partial/\\partial x^\\nu$`}. This is the key property used in the proof.
              </p>
            </div>
          </div>

          <p>{`The two variations are related to first order by:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\delta\\eta_\\rho = \\bar\\delta\\eta_\\rho + \\frac{\\partial\\eta_\\rho}{\\partial x^\\sigma}\\,\\delta x^\\sigma$$`}</span>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              {`Why does $\\bar\\delta$ commute with $\\partial/\\partial x^\\nu$ but $\\delta$ does not? Trace the reason to the definition.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$\\bar\\delta\\eta_\\rho = \\eta'_\\rho(x) - \\eta_\\rho(x)$ is a difference of two functions at the same fixed point $x$. Taking $\\partial/\\partial x^\\nu$ of both sides differentiates both functions at the same point, so $\\partial_\\nu(\\bar\\delta\\eta_\\rho) = \\bar\\delta(\\partial_\\nu\\eta_\\rho)$. For $\\delta$, the new field is evaluated at $x'=x+\\delta x$. Differentiating with respect to old $x$ brings in an extra term involving $\\partial(\\delta x^\\mu)/\\partial x^\\nu$, the gradient of the coordinate shift. That extra term breaks commutativity.`}
              </p>
            </details>
          </div>

          <h3>The Three Invariance Conditions</h3>

          <p>Noether's theorem requires three things to be true of the transformation:</p>

          <ol className="lrn-list">
            <li>
              {`The 4-space is flat: it has no curvature, so straight lines stay straight and parallel lines never meet.`}
            </li>
            <li>
              <strong>Form-invariance:</strong>{' '}
              {`the Lagrangian density has the same shape before and after:`}{' '}
              {`$\\mathcal{L}'(\\eta'_\\rho(x'^\\mu), \\eta'_{\\rho,\\nu}(x'^\\mu), x'^\\mu) = \\mathcal{L}(\\eta'_\\rho(x'^\\mu), \\eta'_{\\rho,\\nu}(x'^\\mu), x'^\\mu)$.`}
            </li>
            <li>
              <strong>Scale-invariance:</strong>{' '}
              {`the total action integral is unchanged: $I' = \\int_{\\Omega'}\\mathcal{L}'\\,d^4x' = \\int_\\Omega \\mathcal{L}\\,d^4x$.`}
            </li>
          </ol>

          <p>
            Conditions (2) and (3) together form the <em>condition of scale-invariance</em>. They
            generalize the familiar notion of a cyclic coordinate. When both hold, the proof
            proceeds by combining the two integrals, changing variables, expanding to first order,
            and using the field equations.
          </p>
        </>,

        // SECTION 4: DERIVATION OF CONSERVED CURRENT
        <>
          <h2>Deriving the Conserved Current: Symmetry Forces a Total Divergence</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              {`If you write the invariance condition as an integral over $\\Omega$, and then apply the field equations (Euler-Lagrange), what kind of expression should be left inside the integral?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The Euler-Lagrange equations (the field's equations of motion) say the first-order
                variation of the action vanishes once the field obeys them. Physicists call a field
                that obeys its equations of motion "on-shell." When you use them, the only terms
                left are total derivatives, terms writable as {`$d/dx^\\nu(\\cdots)$`}. A divergence
                that integrates to zero means its integrand is a conserved current.
              </p>
            </details>
          </div>

          <p>Here is the full derivation step by step. The key insight comes at step 4.</p>

          <div className="lrn-proof">
            <div className="lrn-proof-header">Derivation of the Noether Conserved Current</div>

            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">1</div>
              <div className="lrn-proof-step-content">
                <p>
                  {`Combine form-invariance and scale-invariance. After relabelling $x'^\\mu \\to x^\\mu$ in the first integral and applying the 4D divergence theorem (it turns a derivative integrated over a region into a flux through its boundary) to the boundary strip:`}
                </p>
                <div className="lrn-eq">
                  <span>{`$$0 = \\int_\\Omega d^4x\\left\\{[\\mathcal{L}(\\eta',x^\\mu) - \\mathcal{L}(\\eta,x^\\mu)] + \\frac{d}{dx^\\nu}(\\mathcal{L}\\,\\delta x^\\nu)\\right\\}$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">2</div>
              <div className="lrn-proof-step-content">
                <p>
                  {`Expand $\\mathcal{L}(\\eta') - \\mathcal{L}(\\eta)$ to first order using the $\\bar\\delta$ variation:`}
                </p>
                <div className="lrn-eq">
                  <span>{`$$\\mathcal{L}(\\eta') - \\mathcal{L}(\\eta) = \\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho}\\,\\bar\\delta\\eta_\\rho + \\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\bar\\delta\\eta_{\\rho,\\nu}$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">3</div>
              <div className="lrn-proof-step-content">
                <p>
                  {`Use commutativity of $\\bar\\delta$ with $d/dx^\\nu$: write $\\bar\\delta\\eta_{\\rho,\\nu} = d(\\bar\\delta\\eta_\\rho)/dx^\\nu$. The right-hand side becomes:`}
                </p>
                <div className="lrn-eq">
                  <span>{`$$\\mathcal{L}(\\eta') - \\mathcal{L}(\\eta) = \\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho}\\,\\bar\\delta\\eta_\\rho + \\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\frac{d(\\bar\\delta\\eta_\\rho)}{dx^\\nu}$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">4</div>
              <div className="lrn-proof-step-content">
                <p>
                  {`Apply the Euler-Lagrange field equations $\\partial\\mathcal{L}/\\partial\\eta_\\rho = d/dx^\\nu(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})$ to the first term. This collapses the whole expression to a single total divergence:`}
                </p>
                <div className="lrn-eq">
                  <span>{`$$\\mathcal{L}(\\eta') - \\mathcal{L}(\\eta) = \\frac{d}{dx^\\nu}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\bar\\delta\\eta_\\rho\\right)$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">5</div>
              <div className="lrn-proof-step-content">
                <p>Substitute back. The full integrand is a pure divergence:</p>
                <div className="lrn-eq">
                  <span>{`$$0 = \\int d^4x\\,\\frac{d}{dx^\\nu}\\!\\left\\{\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\bar\\delta\\eta_\\rho + \\mathcal{L}\\,\\delta x^\\nu\\right\\}$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-proof-step">
              <div className="lrn-proof-step-num">6</div>
              <div className="lrn-proof-step-content">
                <p>
                  {`Since this holds for any region $\\Omega$, the integrand must vanish pointwise. This is the conserved-current equation:`}
                </p>
                <div className="lrn-eq lrn-eq-hero">
                  <span>{`$$\\frac{d}{dx^\\nu}\\!\\left\\{\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\bar\\delta\\eta_\\rho + \\mathcal{L}\\,\\delta x^\\nu\\right\\} = 0$$`}</span>
                </div>
              </div>
            </div>

            <div className="lrn-qed">QED. Conserved current established</div>
          </div>

          <NffContinuityCurrent />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              Step 4 is the hinge of the whole proof. The Euler-Lagrange equations turn a sum of two
              terms into a single divergence. Why could you not have done this step first, before
              expanding the {`$\\mathcal{L}$`} difference?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The Euler-Lagrange equations apply to $\\eta_\\rho$, not to the variation $\\bar\\delta\\eta_\\rho$. You need to first express the $\\mathcal{L}$ difference in terms of $\\bar\\delta\\eta_\\rho$ and $\\bar\\delta\\eta_{\\rho,\\nu}$ (steps 2 and 3), so the combination $\\partial\\mathcal{L}/\\partial\\eta_\\rho - (d/dx^\\nu)\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu}$ becomes visible. The field equations set that combination to zero. Skipping to step 4 early leaves expressions the field equations cannot simplify.`}
              </p>
            </details>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Complete Example</span>
              <p>
                {`Show that for a pure coordinate translation $\\delta x^\\nu = \\varepsilon\\delta^\\nu_0$, $\\delta\\eta_\\rho = 0$ (time translation), the conserved-current formula produces energy conservation.`}
              </p>
              <ol className="lrn-list">
                <li>
                  {`$\\bar\\delta\\eta_\\rho = \\delta\\eta_\\rho - (\\partial\\eta_\\rho/\\partial x^\\sigma)\\delta x^\\sigma = 0 - \\eta_{\\rho,0}\\varepsilon$.`}
                </li>
                <li>
                  {`Substitute into the conserved-current equation: $d/dx^\\nu[(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})(-\\eta_{\\rho,0}\\varepsilon) + \\mathcal{L}\\varepsilon\\delta^\\nu_0] = 0$.`}
                </li>
                <li>
                  {`Factor out $-\\varepsilon$: $d/dx^\\nu[(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\eta_{\\rho,0} - \\mathcal{L}\\delta^\\nu_0] = 0$. This bracket is a conserved current for time translation. Section 6 shows it is one column of the energy-momentum tensor.`}
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Your Turn: Partial</span>
              <p>
                {`For a pure spatial translation $\\delta x^\\nu = \\varepsilon\\delta^\\nu_1$, $\\delta\\eta_\\rho = 0$:`}
              </p>
              <ol className="lrn-list">
                <li>
                  {`Compute $\\bar\\delta\\eta_\\rho$. Answer: $\\bar\\delta\\eta_\\rho = $ _____.`}
                </li>
                <li>
                  {`Substitute into the conserved-current formula. What component of $T^\\nu_{\\phantom{\\nu}\\mu}$ is conserved?`}
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Independent Practice</span>
              <p>
                {`For an internal phase rotation $\\delta x^\\nu = 0$, $\\delta\\eta_\\rho = \\varepsilon c_\\rho\\eta_\\rho$: derive $\\bar\\delta\\eta_\\rho$ and write out the conserved current $\\Theta^\\nu$.`}
              </p>
            </div>
          </div>
        </>,

        // SECTION 5: R PARAMETERS → R CURRENTS
        <>
          <h2>R Symmetry Parameters Give R Conserved Currents</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              A rotation in 3D has 3 independent parameters. If rotational symmetry holds, how many
              conserved quantities should Noether's theorem produce?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Three: one per rotation axis, corresponding to the three components of angular
                momentum. In general, if the symmetry has {`$R$`} independent continuous parameters,
                there are {`$R$`} independent conserved currents.
              </p>
            </details>
          </div>

          <p>
            {`Specialize the transformation to $R$ infinitesimal parameters $\\varepsilon_r$ ($r = 1, \\ldots, R$). Infinitesimal means each $\\varepsilon_r$ is so small you keep only its first power and drop $\\varepsilon_r^2$ and higher. Let $\\delta x^\\nu$ and $\\delta\\eta_\\rho$ be linear in $\\varepsilon_r$:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\delta x^\\nu = \\varepsilon_r X^\\nu_r, \\qquad \\delta\\eta_\\rho = \\varepsilon_r \\Psi_{r\\rho}$$`}</span>
          </div>

          <p>
            {`The functions $X^\\nu_r$ and $\\Psi_{r\\rho}$ may depend on coordinates and field values. From the relation between $\\delta\\eta_\\rho$ and $\\bar\\delta\\eta_\\rho$:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\bar\\delta\\eta_\\rho = \\varepsilon_r(\\Psi_{r\\rho} - \\eta_{\\rho,\\sigma}X^\\sigma_r)$$`}</span>
          </div>

          <p>
            Substitute into the conserved-current equation from Section 4. Since each{' '}
            {`$\\varepsilon_r$`} is independent, its coefficient must vanish separately. That
            independence is exactly what splits one invariance condition into {`$R$`} separate
            constraints: each parameter labels its own direction in the symmetry group, and each
            direction carries its own conserved current. The result is {`$R$`} independent
            equations, one per {`$r$`}:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{d}{dx^\\nu}\\!\\left\\{\\left[\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\eta_{\\rho,\\sigma} - \\mathcal{L}\\,\\delta^\\nu_\\sigma\\right]X^\\sigma_r - \\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\Psi_{r\\rho}\\right\\} = 0$$`}</span>
          </div>

          <div className="lrn-insight">
            <span className="lrn-insight-label">Main Conclusion of Noether's Theorem</span>
            <p>
              {`If the action is invariant under transformations parameterized by $R$ independent continuous parameters, then $R$ independent conserved currents exist. One equation holds for each $r = 1, \\ldots, R$. One parameter gives one conserved current; three parameters, as in 3D rotations, give the three components of angular momentum.`}
            </p>
          </div>
        </>,

        // SECTION 6: SPACETIME TRANSLATION SPECIAL CASE
        <>
          <h2>The Energy-Momentum Tensor Is the Current of Spacetime Symmetry</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              {`A pure spacetime translation has $X^\\nu_r = \\delta^\\nu_\\lambda$ and $\\Psi_{r\\rho} = 0$. Substitute into the main Noether formula. What expression appears?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`With $X^\\sigma_r = \\delta^\\sigma_\\lambda$ and $\\Psi = 0$, the formula gives $d/dx^\\nu[(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\eta_{\\rho,\\lambda} - \\mathcal{L}\\delta^\\nu_\\lambda] = 0$. That bracket is $T^\\nu_{\\phantom{\\nu}\\lambda}$.`}
              </p>
            </details>
          </div>

          <p>
            {`If $\\mathcal{L}$ has no explicit dependence on $x^\\mu$, the action is invariant under spacetime translations. For each direction $\\lambda$, set $X^\\nu_r = \\delta^\\nu_\\lambda$ and $\\Psi_{r\\rho} = 0$ in the main Noether formula:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{d}{dx^\\nu}\\!\\left[\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\eta_{\\rho,\\mu} - \\mathcal{L}\\,\\delta^\\nu_\\mu\\right] = 0$$`}</span>
          </div>

          <p>
            {`The expression in brackets is the energy-momentum tensor $T^\\nu_{\\phantom{\\nu}\\mu}$. This equation is $\\partial_\\nu T^\\nu_{\\phantom{\\nu}\\mu} = 0$, local conservation of energy and momentum. The tensor is not invented. It emerges from spacetime-translation symmetry via Noether's theorem. The very same procedure, applied to the electromagnetic Lagrangian, builds the electromagnetic field's energy-momentum tensor in the same way.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why Is This True?</span>
            <p>
              {`Spacetime translation invariance means the physics does not depend on which spacetime point you call the origin. Every closed field system without external boundaries has this symmetry. Noether's theorem forces $R = 4$ conserved currents, one per spacetime direction. Together they form the four-momentum current $T^\\nu_{\\phantom{\\nu}\\mu}$ (four-momentum bundles energy and the three momentum components into one object). Energy conservation is the $\\mu=0$ case; momentum conservation is $\\mu=1,2,3$.`}
            </p>
          </div>
        </>,

        // SECTION 7: GAUGE SYMMETRY → CONSERVED CHARGE
        <>
          <h2>Gauge Symmetry of the First Kind Gives Conserved Charge</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              {`A gauge transformation of the first kind shifts field values but not coordinates: $\\delta x = 0$, $\\delta\\eta_\\rho = \\varepsilon c_\\rho \\eta_\\rho$. If the action is invariant, what does Noether give you?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`One conserved current: $\\Theta^\\nu = c_\\rho(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\eta_\\rho$. The spatial integral of $\\Theta^0$ is the conserved charge. This is electric charge, when the field carries charge.`}
              </p>
            </details>
          </div>

          <p>
            {`A gauge transformation of the first kind rotates the internal phase of the field by the same amount everywhere, leaving the coordinates untouched. With $X^\\nu_r = 0$ and $\\Psi_{r\\rho} = c_\\rho\\eta_\\rho$, the coordinate-change bracket vanishes and the main Noether formula gives:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{d\\Theta^\\nu}{dx^\\nu} = 0, \\qquad \\Theta^\\nu = c_\\rho\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\eta_\\rho$$`}</span>
          </div>

          <p>
            This conserved current identifies the electric charge and current density of the field.
            The volume integral {`$Q = \\int \\Theta^0\\,dV$`} is the conserved charge.
          </p>

          <h3>The Complex Scalar Field: A Concrete Example</h3>

          <p>
            {`Take a complex scalar field (this is the Klein-Gordon field). It obeys the phase rotation $\\phi' = \\phi e^{i\\varepsilon}$, $\\phi^{*'} = \\phi^* e^{-i\\varepsilon}$. This is a gauge transformation of the first kind with $c = i$, $c^* = -i$. The Lagrangian density does not change under it. Noether's theorem then produces:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$j_\\mu = iq\\!\\left(\\frac{d\\phi}{dx^\\mu}\\cdot\\phi^* - \\phi\\cdot\\frac{d\\phi^*}{dx^\\mu}\\right)$$`}</span>
          </div>

          <p>
            This is the same current you meet in quantum mechanics. The derivation depends entirely
            on the field being complex.
          </p>

          <NffRealCurrent />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Real scalar field</span>
              <p>
                {`$\\phi = \\phi^*$. The current $j_\\mu \\propto \\partial_\\mu\\phi\\cdot\\phi^* - \\phi\\cdot\\partial_\\mu\\phi^* = 0$ identically. No conserved charge. A real field cannot carry electric charge.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Complex scalar field</span>
              <p>
                {`$\\phi$ and $\\phi^*$ are independent. The current $j_\\mu = iq(\\partial_\\mu\\phi\\cdot\\phi^* - \\phi\\cdot\\partial_\\mu\\phi^*)$ is non-zero in general. Gives conserved electric charge. Charged particles require a complex field or a pair of real fields.`}
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              {`The phase rotation $\\phi \\to \\phi e^{i\\varepsilon}$ is a continuous symmetry. The sign flip $\\phi \\to -\\phi$ leaves $|\\phi|^2$ unchanged too. Why does only the first give a conserved current via Noether's theorem?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The phase rotation is continuous: $\\varepsilon$ runs over all real numbers, the transformation is smooth, and it reduces to the identity at $\\varepsilon = 0$. Noether's theorem applies to continuous symmetries, those you can reach by infinitesimally small steps. The sign flip $\\phi \\to -\\phi$ is discrete: it jumps directly to $\\varepsilon = \\pi$ with no intermediate steps. You cannot write $d/d\\varepsilon$ of a discrete transformation. Without that infinitesimal generator, Noether's theorem cannot produce a conserved current.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 8: SOLITONS, CONSERVATION WITHOUT SYMMETRY
        <>
          <h2>Conservation Without Symmetry: Solitons</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              Noether's theorem: symmetry implies conservation. Does conservation imply symmetry?
              Can a field have more conserved quantities than its symmetries predict?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. The converse of Noether's theorem is false. Some fields carry conserved
                quantities that no symmetry of the Lagrangian can explain. Solitons are the primary
                example.
              </p>
            </details>
          </div>

          <p>
            The converse of Noether's theorem does not hold. Conservation does not imply symmetry.
            The most striking counterexamples are soliton fields. A soliton is a solitary wave that
            holds its shape as it travels and survives collisions with other such waves. The
            sine-Gordon and Korteweg-de Vries (KdV) equations are the standard examples.
          </p>

          <p>
            {`The sine-Gordon Lagrangian has no explicit $x$ or $t$, so it is invariant under space and time translations, plus a Lorentz transformation (a switch to a frame moving at constant velocity) that mixes $x$ and $t$. That is three symmetries: Noether's theorem gives at most three conserved quantities.`}
          </p>

          <p>
            Yet an <strong>infinite</strong> family of conserved quantities has been found by
            methods outside the Lagrangian framework. There exist infinite families of smooth
            functions {`$F_i$`} and {`$G_i$`} (polynomials in the field and its derivatives)
            satisfying:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{dF_i}{dt} + \\frac{dG_i}{dx} = 0$$`}</span>
          </div>

          <p>
            {`The volume integrals $\\int F_i\\,dx$ are all constants of the motion. This infinite set is a signature of soliton solutions, closely tied to whether they exist at all. It shows the Lagrangian/Noether framework is powerful but not complete: symmetry is enough to give a conserved current, yet it is not required for one. Some field theories carry far more conservation laws than they have symmetries.`}
          </p>
        </>,

        // SECTION 9: DISCRETE SYSTEMS
        <>
          <h2>Noether for Discrete Systems Recovers Energy and Momentum</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              The field Noether formula involves 4-space integrals and 4-divergences. If you replace
              field variables {`$\\eta_\\rho(x^\\nu)$`} with discrete coordinates {`$q_k(t)$`}, how
              many terms survive in the sum over spacetime directions?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Only one: the time direction. The 4-current conservation{' '}
                {`$\\partial_\\nu j^\\nu = 0$`} collapses to {`$d(\\cdots)/dt = 0$`}, a conserved
                scalar.
              </p>
            </details>
          </div>

          <p>The field Noether theorem reduces to its discrete version by the translation rules:</p>

          <table>
            <thead>
              <tr>
                <th>Field quantity</th>
                <th>Discrete analogue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\mathcal{L}$`}</td>
                <td>{`$L$`} (Lagrangian)</td>
              </tr>
              <tr>
                <td>{`$x^\\mu$`}</td>
                <td>{`$t$`}</td>
              </tr>
              <tr>
                <td>{`$\\eta_\\rho$`}</td>
                <td>{`$q_k$`}</td>
              </tr>
              <tr>
                <td>{`$\\eta_{\\rho,\\nu}$`}</td>
                <td>{`$\\dot q_k$`}</td>
              </tr>
            </tbody>
          </table>

          <p>
            Applying these substitutions to the main Noether formula, with{' '}
            {`$\\delta t = \\varepsilon_r X_r$`} and {`$\\delta q_k = \\varepsilon_r\\Psi_{rk}$`}:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{d}{dt}\\!\\left[\\left(\\frac{\\partial L}{\\partial\\dot q_k}\\dot q_k - L\\right)X_r - \\frac{\\partial L}{\\partial\\dot q_k}\\Psi_{rk}\\right] = 0$$`}</span>
          </div>

          <h3>Time-Translation Invariance Gives Energy Conservation</h3>

          <p>{`Set $X_r = 1$ and $\\Psi_{rk} = 0$. The formula gives:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial\\dot q_k}\\dot q_k - L\\right) = 0$$`}</span>
          </div>

          <p>
            {`The expression $h = (\\partial L/\\partial\\dot q_k)\\dot q_k - L$ is the Jacobi integral: the energy-like quantity you build from the Lagrangian. It equals the Hamiltonian (the total energy) when $L$ has no explicit time dependence. So the field theorem hands you back the same energy conservation you already know from particle mechanics, now produced by time-translation symmetry.`}
          </p>

          <h3>Cyclic Coordinate Gives Momentum Conservation</h3>

          <p>{`Set $X_r = 0$ and $\\Psi_{rk} = \\delta_{kl}$. The formula gives:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot q_l} = 0, \\qquad \\text{i.e.}\\quad \\dot p_l = 0$$`}</span>
          </div>

          <p>
            {`This is conservation of the canonical momentum $p_l = \\partial L/\\partial\\dot q_l$ tied to the missing coordinate $q_l$. (A coordinate that does not appear in $L$ is called cyclic.) It is the same conserved momentum you already know from particle mechanics, now recovered as a special case of the field-theoretic Noether's theorem.`}
          </p>

          <NffDiscreteNoether />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why Is This True?</span>
            <p>
              {`The discrete theorem subsumes both energy and cyclic-momentum conservation. The field theorem subsumes both of those, plus all energy-momentum tensor conservation laws. Every "conservation from symmetry" result you have ever seen is a special case of the main Noether formula above. The field theorem is the deepest version; all others follow by restriction.`}
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `State the main conclusion of Noether's theorem for fields. If a symmetry has $R$ independent continuous parameters, what does the theorem guarantee?`,
        a: `The theorem guarantees $R$ independent conserved currents. For transformations $\\delta x^\\nu = \\varepsilon_r X^\\nu_r$ and $\\delta\\eta_\\rho = \\varepsilon_r\\Psi_{r\\rho}$, each parameter $\\varepsilon_r$ independently forces $d/dx^\\nu\\{[(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\eta_{\\rho,\\sigma} - \\mathcal{L}\\delta^\\nu_\\sigma]X^\\sigma_r - (\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\Psi_{r\\rho}\\} = 0$. The parameters are independent, so each direction in the symmetry group has its own associated conserved current.`
      },
      {
        q: `The field momentum density is written $-T^0_{\\phantom{0}i}$, with a minus sign, while the energy density is just $+T^0_{\\phantom{0}0}$. Explain where that minus sign comes from, using the row structure of the tensor.`,
        a: `Each row of $T^\\nu_{\\phantom{\\nu}\\mu}$, labelled by its lower index $\\mu$, is its own conserved 4-current. The $\\mu=0$ row carries energy, and its time component $T^0_{\\phantom{0}0}$ is the energy density with a natural plus sign. The $\\mu=i$ rows carry momentum, but their conserved densities are defined as $-T_i$, so the time component of momentum density is $-T^0_{\\phantom{0}i}$. The minus sign is built into how the momentum rows are packaged, not a property of the field itself. It keeps the momentum density and the stress $-T^j_{\\phantom{j}i}$ in the same sign convention, so they combine into one continuity equation.`
      },
      {
        q: `Predict: A Lagrangian density $\\mathcal{L}$ depends explicitly on $x^1$ but not on $x^0$, $x^2$, $x^3$. Which components of $T^\\nu_{\\phantom{\\nu}\\mu}$ are conserved?`,
        a: `Noether's theorem for spacetime translations requires $\\partial\\mathcal{L}/\\partial x^\\mu = 0$ for each $\\mu$ separately. Energy ($\\mu=0$) is conserved because $\\partial\\mathcal{L}/\\partial x^0 = 0$. Momentum in the $x^2$ and $x^3$ directions ($\\mu = 2, 3$) is conserved. Momentum in the $x^1$ direction ($\\mu=1$) is NOT conserved, because $\\partial\\mathcal{L}/\\partial x^1 \\neq 0$ means the Lagrangian changes from place to place along $x^1$, which breaks that translational symmetry.`
      },
      {
        q: `Explain the difference between $\\delta\\eta_\\rho$ and $\\bar\\delta\\eta_\\rho$. Which one commutes with $\\partial/\\partial x^\\nu$ and why?`,
        a: `$\\delta\\eta_\\rho = \\eta'_\\rho(x'^\\mu) - \\eta_\\rho(x^\\mu)$ compares new field at new point to old field at old point. $\\bar\\delta\\eta_\\rho = \\eta'_\\rho(x^\\mu) - \\eta_\\rho(x^\\mu)$ compares new and old field at the same point. $\\bar\\delta$ commutes with $\\partial_\\nu$ because both functions are differentiated at the same argument, so differentiation and subtraction commute. $\\delta$ does not commute because the new field is evaluated at $x' = x + \\delta x$; differentiating with respect to old $x$ brings in an extra gradient-of-$\\delta x$ term.`
      },
      {
        q: `Derive the conserved current for a gauge transformation of the first kind: $\\delta x = 0$, $\\delta\\eta_\\rho = \\varepsilon c_\\rho \\eta_\\rho$.`,
        a: `With $\\delta x^\\nu = 0$: $X^\\nu_r = 0$. With $\\delta\\eta_\\rho = \\varepsilon c_\\rho\\eta_\\rho$: $\\Psi_{r\\rho} = c_\\rho\\eta_\\rho$. The $X^\\sigma_r = 0$ kills the first bracket in the main Noether formula entirely. The remaining term is $d/dx^\\nu[-(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\Psi_{r\\rho}] = 0$, giving $d/dx^\\nu[c_\\rho(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\eta_\\rho] = 0$. The conserved current is $\\Theta^\\nu = c_\\rho(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\eta_\\rho$.`
      },
      {
        q: `For the complex scalar field $\\phi' = \\phi e^{i\\varepsilon}$: identify $c$ and $c^*$ in the gauge-1 parametrization and write the conserved current $j_\\mu$.`,
        a: `The transformation $\\delta\\phi = i\\varepsilon\\phi$ gives $c = i$. The transformation $\\delta\\phi^* = -i\\varepsilon\\phi^*$ gives $c^* = -i$. Treating $\\phi$ and $\\phi^*$ as independent field components, applying the gauge-1 Noether formula $\\Theta^\\nu = c_\\rho(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\eta_\\rho$ gives: $j_\\mu = iq(d\\phi/dx^\\mu\\cdot\\phi^* - \\phi\\cdot d\\phi^*/dx^\\mu)$. This agrees with the quantum-mechanical probability current density.`
      },
      {
        q: `Why does a real scalar field have no conserved current from gauge symmetry of the first kind?`,
        a: `For a real field $\\phi = \\phi^*$, the current $j_\\mu = iq(\\partial_\\mu\\phi\\cdot\\phi - \\phi\\cdot\\partial_\\mu\\phi) = 0$ identically. Both terms are equal and subtract to zero. More fundamentally, the phase rotation $\\phi \\to \\phi e^{i\\varepsilon}$ is not a symmetry of a real field for $\\varepsilon \\neq 0, \\pi$, because $e^{i\\varepsilon}\\phi$ is complex. Producing a non-trivial conserved charge requires two independent field degrees of freedom ($\\phi$ and $\\phi^*$). A single real field lacks that structure.`
      },
      {
        q: `Transfer: A bead on a rotating ring has $L = \\frac{1}{2}m(\\dot r^2 + r^2\\Omega^2)$ with $\\Omega$ constant. Is the Jacobi integral $h = (\\partial L/\\partial\\dot r)\\dot r - L$ conserved? Compute it.`,
        a: `$\\partial L/\\partial t = 0$ (no explicit $t$), so yes, $h$ is conserved by the discrete Noether theorem. Compute: $\\partial L/\\partial\\dot r = m\\dot r$, so $h = m\\dot r^2 - \\frac{1}{2}m(\\dot r^2 + r^2\\Omega^2) = \\frac{1}{2}m\\dot r^2 - \\frac{1}{2}mr^2\\Omega^2$. This is the Jacobi integral in the rotating frame. The rotational kinetic energy $\\frac{1}{2}mr^2\\Omega^2$ acts as a negative potential, so $h$ is not the total mechanical energy but is still conserved.`
      },
      {
        q: `Self-explain: In deriving the Noether current, the Euler-Lagrange equations are applied at step 4, after the $\\mathcal{L}$ difference has been written using $\\bar\\delta$. Why is this ordering essential?`,
        a: `The Euler-Lagrange equations eliminate the combination $\\partial\\mathcal{L}/\\partial\\eta_\\rho - d/dx^\\nu(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})$. For this pattern to appear, the $\\mathcal{L}$ difference must first be written in terms of $\\bar\\delta\\eta_\\rho$ and $d(\\bar\\delta\\eta_\\rho)/dx^\\nu$ (steps 2 and 3). The commutativity of $\\bar\\delta$ with $d/dx^\\nu$ makes step 3 possible: it lets you rewrite $\\bar\\delta\\eta_{\\rho,\\nu}$ as a derivative of $\\bar\\delta\\eta_\\rho$, exposing the Lagrange pattern. Using $\\delta$ instead of $\\bar\\delta$ would add extra commutator terms that the field equations cannot simplify.`
      },
      {
        q: `Error detection: A student writes "the sine-Gordon Lagrangian has space-translation and time-translation symmetry, so it has exactly two conserved quantities." What is wrong?`,
        a: `The student is correct that Noether's theorem gives two conserved quantities from those symmetries (momentum and energy). The error is claiming these are the ONLY conserved quantities. The sine-Gordon equation has an infinite family of additional conserved quantities $\\int F_i\\,dx$ satisfying $dF_i/dt + dG_i/dx = 0$, found by methods outside the Lagrangian framework. The converse of Noether's theorem is false. Conservation does not imply symmetry; a field can have far more conservation laws than Noether's theorem predicts.`
      },
      {
        q: `Computation: A scalar field $\\phi = A\\sin(kx - \\omega t)$ with $\\omega = k$ has Lagrangian density $\\mathcal{L} = \\frac{1}{2}(\\dot\\phi^2 - \\phi'^2)$ ($c=1$). Compute the energy-density component $T^0_{\\phantom{0}0}$ and the energy-flux component $T^0_{\\phantom{0}1}$ at $x = 0$, $t = 0$.`,
        a: `At $x=0$, $t=0$: $\\xi = 0$, so $\\phi = 0$, $\\dot\\phi = -A\\omega\\cos(0) = -A\\omega$, $\\phi' = Ak\\cos(0) = Ak$. The Lagrangian density is $\\mathcal{L} = \\frac{1}{2}(A^2\\omega^2 - A^2k^2) = 0$ because $\\omega = k$. The components come from $T^\\nu_{\\phantom{\\nu}\\mu} = (\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\,\\eta_{\\rho,\\mu} - \\mathcal{L}\\,\\delta^\\nu_\\mu$. So $T^0_{\\phantom{0}0} = \\dot\\phi\\,\\dot\\phi - \\mathcal{L} = A^2\\omega^2$ and $T^0_{\\phantom{0}1} = \\dot\\phi\\,\\phi' = (-A\\omega)(Ak) = -A^2\\omega^2$. The energy density and the energy flux have equal size, as expected for massless radiation.`
      },
      {
        q: `Elaborate: Why does the main Noether formula unify spacetime-translation conservation (giving $T^\\nu_{\\phantom{\\nu}\\mu}$) and charge conservation (giving $j_\\mu$) under the same algebra?`,
        a: `The formula has two structural parts: a coordinate-change term $[\\cdots]X^\\sigma_r$ and a field-change term $-(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})\\Psi_{r\\rho}$. Spacetime translation uses $X^\\sigma_r = \\delta^\\sigma_\\lambda$ (non-zero coordinate shift) and $\\Psi = 0$, so only the first term survives and produces the energy-momentum tensor. Gauge symmetry of the first kind uses $X = 0$ and $\\Psi_{r\\rho} = c_\\rho\\eta_\\rho$ (pure field-variable change), so only the second term survives and produces the charge current. The same algebraic skeleton produces two physically distinct conservation laws because the symmetry generator acts in different parts of the transformation.`
      },
      {
        q: `Show that the discrete Noether formula $d/dt[(\\partial L/\\partial\\dot q_k)\\dot q_k - L] = 0$ follows from the field formula by the translation rules, with $X_r = 1$, $\\Psi_{rk} = 0$.`,
        a: `Apply translation rules: index $\\nu$ becomes time only, $d/dx^\\nu \\to d/dt$. The 4-conserved-current equation becomes a time-derivative equation. With $X_r = 1$ and $\\Psi_{rk} = 0$: the first bracket is $(\\partial L/\\partial\\dot q_k)\\dot q_k - L\\cdot 1$, the $\\delta$ factor is 1 (one time direction). The second bracket vanishes. Result: $d/dt[(\\partial L/\\partial\\dot q_k)\\dot q_k - L] = 0$. The expression is the Jacobi integral $h$, giving energy conservation from time-translation symmetry.`
      },
      {
        q: `The form-invariance condition requires $\\mathcal{L}'(\\eta', x') = \\mathcal{L}(\\eta', x')$. In plain words, what does this say?`,
        a: `It says the Lagrangian density has the same functional form after the transformation as before. You evaluate the transformed Lagrangian $\\mathcal{L}'$ at the new field $\\eta'$ and new point $x'$, and you get the same number as if you had evaluated the old Lagrangian $\\mathcal{L}$ at the same arguments. The function $\\mathcal{L}$ itself does not change under the transformation. This is distinct from saying the numerical value at a given point is unchanged (that would be $\\mathcal{L}(\\eta', x') = \\mathcal{L}(\\eta, x)$). Form-invariance means the transformation introduces no new terms.`
      },
      {
        q: `Transfer: The Lorentz group (all rotations and boosts, where a boost is a change to a frame moving at constant velocity) has 6 parameters in 3+1D: 3 boosts plus 3 rotations. If the Lagrangian is Lorentz-invariant, how many conserved currents does Noether predict?`,
        a: `Six conserved currents: one per Lorentz parameter. The 3 rotational parameters give 3 components of field angular momentum. The 3 boost parameters give 3 more conserved quantities tied to the motion of the field's center of energy. Add the 4 translational conserved quantities (the rows of $T^{\\nu}_{\\phantom{\\nu}\\mu}$) and a Lorentz-invariant field theory has 10 conserved currents in total. The full set of translations, rotations, and boosts is called the Poincaré group.`
      },
      {
        q: `Self-explain: In the soliton example, Noether gives at most 3 conserved quantities for the sine-Gordon field (energy, momentum, Lorentz boost). Yet infinitely many exist. What does this tell you about the Noether framework as a tool for finding ALL conservation laws?`,
        a: `Noether's theorem is a one-way implication: symmetry implies conservation. It is sufficient but not necessary. The theorem guarantees every symmetry produces a conserved current, but it cannot find conserved quantities that do not arise from a Lagrangian symmetry. The infinite soliton conservation laws require different methods (inverse scattering, Lax pairs: special pairs of operators built from the equation of motion) that work directly with the equation of motion rather than the action. The Noether framework, powerful as it is, does not capture all conservation laws. A complete classification of conserved quantities for a given field theory is generally much harder than applying Noether's theorem.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: "Noether's Theorem for Fields and the Energy-Momentum Tensor",
      sections: [
        <>
          <h2>Hero Formulas</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Main Noether Theorem: R conserved currents</div>
            <div className="ref-formula-eq">{`$$\\frac{d}{dx^\\nu}\\!\\left\\{\\left[\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\eta_{\\rho,\\sigma} - \\mathcal{L}\\,\\delta^\\nu_\\sigma\\right]X^\\sigma_r - \\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\Psi_{r\\rho}\\right\\} = 0$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Any continuous symmetry of the action parameterized by{' '}
              {`$R$`} independent parameters {`$\\varepsilon_r$`}. One equation per{' '}
              {`$r = 1, \\ldots, R$`}. {`$X^\\nu_r$`} encodes how coordinates transform;{' '}
              {`$\\Psi_{r\\rho}$`} encodes how fields transform.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">
              Energy-Momentum Tensor Conservation (spacetime translation)
            </div>
            <div className="ref-formula-eq">{`$$\\frac{d}{dx^\\nu}\\!\\left[\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\eta_{\\rho,\\mu} - \\mathcal{L}\\,\\delta^\\nu_\\mu\\right] = 0$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> When {`$\\mathcal{L}$`} has no explicit {`$x^\\mu$`}{' '}
              dependence. The bracket defines {`$T^\\nu_{\\phantom{\\nu}\\mu}$`}. Use{' '}
              {`$X^\\sigma_r = \\delta^\\sigma_\\lambda$`}, {`$\\Psi_{r\\rho} = 0$`} in the main
              formula.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Klein-Gordon Conserved Current</div>
            <div className="ref-formula-eq">{`$$j_\\mu = iq\\!\\left(\\frac{d\\phi}{dx^\\mu}\\cdot\\phi^* - \\phi\\cdot\\frac{d\\phi^*}{dx^\\mu}\\right)$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Complex scalar field with phase-rotation symmetry{' '}
              {`$\\phi \\to \\phi e^{i\\varepsilon}$`}. Requires {`$\\phi$`} and {`$\\phi^*$`} as
              independent. Vanishes identically for a real field.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Gauge-1 Conserved Current</div>
            <div className="ref-formula-eq">{`$$\\frac{d\\Theta^\\nu}{dx^\\nu} = 0, \\qquad \\Theta^\\nu = c_\\rho\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\,\\eta_\\rho$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Transformation {`$\\delta x = 0$`},{' '}
              {`$\\delta\\eta_\\rho = \\varepsilon c_\\rho\\eta_\\rho$`} (no sum on {`$\\rho$`}).
              Use {`$X^\\nu_r = 0$`}, {`$\\Psi_{r\\rho} = c_\\rho\\eta_\\rho$`} in the main formula.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Soliton Conservation Laws (beyond Noether)</div>
            <div className="ref-formula-eq">{`$$\\frac{dF_i}{dt} + \\frac{dG_i}{dx} = 0$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Recognizing that sine-Gordon and KdV fields have an
              infinite family of conserved quantities with no corresponding Lagrangian symmetry. The
              converse of Noether's theorem is false.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Noether's Theorem for Discrete Systems</div>
            <div className="ref-formula-eq">{`$$\\frac{d}{dt}\\!\\left[\\left(\\frac{\\partial L}{\\partial\\dot q_k}\\dot q_k - L\\right)X_r - \\frac{\\partial L}{\\partial\\dot q_k}\\Psi_{rk}\\right] = 0$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> Discrete mechanical system.{' '}
              {`$X_r = 1$, $\\Psi_{rk} = 0$`}: energy conservation.{' '}
              {`$X_r = 0$, $\\Psi_{rk} = \\delta_{kl}$`}: momentum conservation.
            </div>
          </div>
        </>,

        <>
          <h2>Stress-Energy Component Table</h2>

          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Physical meaning</th>
                <th>Conservation law</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$T^0_{\\phantom{0}0}$`}</td>
                <td>Field energy density</td>
                <td>{`$\\partial_\\nu T^\\nu_{\\phantom{\\nu}0} = 0$`} (energy)</td>
              </tr>
              <tr>
                <td>{`$T^j_{\\phantom{j}0}$`}</td>
                <td>Field energy current density</td>
                <td>Part of energy row</td>
              </tr>
              <tr>
                <td>{`$-T^0_{\\phantom{0}i}$`}</td>
                <td>{`$i$`}th field momentum density</td>
                <td>{`$\\partial_\\nu T^\\nu_{\\phantom{\\nu}i} = 0$`} (momentum)</td>
              </tr>
              <tr>
                <td>{`$T^j_{\\phantom{j}i}$`}</td>
                <td>3D stress tensor (symmetric)</td>
                <td>Part of momentum row</td>
              </tr>
            </tbody>
          </table>

          <h2>The Two Field Variations</h2>

          <table>
            <thead>
              <tr>
                <th>Variation</th>
                <th>Definition</th>
                <th>Commutes with {`$\\partial_\\nu$`}?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\delta\\eta_\\rho$`} (total)</td>
                <td>{`$\\eta'_\\rho(x'^\\mu) - \\eta_\\rho(x^\\mu)$`}</td>
                <td>No</td>
              </tr>
              <tr>
                <td>{`$\\bar\\delta\\eta_\\rho$`} (fixed-point)</td>
                <td>{`$\\eta'_\\rho(x^\\mu) - \\eta_\\rho(x^\\mu)$`}</td>
                <td>Yes (key to proof)</td>
              </tr>
              <tr>
                <td>Relation</td>
                <td>
                  {`$\\delta\\eta_\\rho = \\bar\\delta\\eta_\\rho + (\\partial\\eta_\\rho/\\partial x^\\sigma)\\delta x^\\sigma$`}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <h2>Symmetry Type vs Noether Result</h2>

          <table>
            <thead>
              <tr>
                <th>Symmetry</th>
                <th>{`$X^\\sigma_r$`}</th>
                <th>{`$\\Psi_{r\\rho}$`}</th>
                <th>Conserved quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Spacetime translation</td>
                <td>{`$\\delta^\\sigma_\\lambda$`}</td>
                <td>0</td>
                <td>Energy-momentum tensor {`$T^\\nu_{\\phantom{\\nu}\\mu}$`}</td>
              </tr>
              <tr>
                <td>Gauge symmetry of 1st kind</td>
                <td>0</td>
                <td>{`$c_\\rho\\eta_\\rho$`}</td>
                <td>Charge current {`$\\Theta^\\nu$`}</td>
              </tr>
              <tr>
                <td>Time translation (discrete)</td>
                <td>{`$X_r = 1$`}</td>
                <td>0</td>
                <td>Jacobi integral (energy)</td>
              </tr>
              <tr>
                <td>Cyclic coordinate (discrete)</td>
                <td>0</td>
                <td>{`$\\delta_{kl}$`}</td>
                <td>Conjugate momentum {`$p_l$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Field-to-Discrete Translation Rules</h2>

          <table>
            <thead>
              <tr>
                <th>Field quantity</th>
                <th>Discrete analogue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\mathcal{L}$`} (Lagrangian density)</td>
                <td>{`$L$`} (Lagrangian)</td>
              </tr>
              <tr>
                <td>{`$x^\\mu$`}</td>
                <td>{`$t$`}</td>
              </tr>
              <tr>
                <td>{`$\\eta_\\rho$`} (field)</td>
                <td>{`$q_k$`} (generalized coordinate)</td>
              </tr>
              <tr>
                <td>{`$\\eta_{\\rho,\\nu}$`} (field derivative)</td>
                <td>{`$\\dot q_k$`} (velocity)</td>
              </tr>
              <tr>
                <td>{`$\\int d^4x\\,(\\cdots)$`}</td>
                <td>{`$\\int dt\\,(\\cdots)$`}</td>
              </tr>
              <tr>
                <td>{`$\\partial_\\nu j^\\nu = 0$`} (4-current)</td>
                <td>{`$d(\\cdots)/dt = 0$`} (conserved scalar)</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}
