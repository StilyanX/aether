import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  LdRodDisplacementField,
  LdDensityToTotal,
  LdKineticVsPotentialDensity,
  LdVariedPaths,
  LdSpacetimeSymmetry,
  LdGaugeAmbiguity,
  StressEnergyContinuity
} from '../../../../../components/viz'

export default function LagrangianDensity() {
  const config = {
    cssPrefix: 'ld',
    documentTitle: 'Lagrangian Density and Field-Theoretic Euler-Lagrange Equations - AETHER',
    learning: {
      category: 'Module 6',
      groupTitle: 'Continuum and Field-Theoretic Mechanics',
      title: 'Lagrangian Density and Field-Theoretic Euler-Lagrange Equations',
      subtitle:
        'How to replace a discrete Lagrangian with a density whose integral governs every point in a continuous medium.',
      sections: [
        <>
          <h2>From Discrete Coordinates to a Field</h2>
          <p>
            In the previous topic you built the field {`$\\eta(x,t)$`}: a generalized coordinate
            whose label {`$x$`} is the continuous rest position of each material point, not a
            discrete index {`$i$`}. You also built the rod Lagrangian density{' '}
            {`$\\mathcal{L} = \\tfrac{1}{2}[\\mu\\dot{\\eta}^2 - Y\\eta'^2]$`} as the
            per-unit-length integrand. Here you turn that density into a field equation of motion.
            In three dimensions the label becomes {`$(x,y,z)$`} and the field becomes{' '}
            {`$\\eta(x,y,z,t)$`}.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A rod has 10{`\\,`}000 small masses connected by springs. As you take the continuous
              limit, how many Lagrange equations do you expect for the resulting field?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You get one equation. But it is a partial differential equation in {`$x$`} and{' '}
                {`$t$`}. Each value of {`$x$`} corresponds to a separate ODE in the discrete chain,
                so one PDE replaces infinitely many ODEs.
              </p>
            </details>
          </div>

          <h3>The Displacement Field</h3>
          <p>
            One structural point matters for the derivation ahead. The coordinates {`$x$`} and{' '}
            {`$t$`} are <strong>independent parameters</strong>, not generalized coordinates. They
            appear only as explicit variables in the Lagrangian density. The dynamical variable is{' '}
            {`$\\eta$`} alone, so its derivatives with respect to {`$x$`} and {`$t$`} are ordinary
            total derivatives.
          </p>
          <LdRodDisplacementField />
          <p>
            The figure above shows the field {`$\\eta(x,t)$`} on the elastic rod. Both spatial
            derivatives {`$\\partial\\eta/\\partial x$`} and temporal derivatives{' '}
            {`$\\partial\\eta/\\partial t$`} enter the dynamics on equal footing. This is the key
            structural difference from the discrete case, where only {`$\\dot{q}_i$`} appears.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              In discrete mechanics, {`$q_i$`} has only one independent variable: time. So only
              {`$\\dot{q}_i$`} enters {`$L$`}. In the continuous case, {`$\\eta$`} varies across
              space as well as time. A stress in the rod depends on how compressed or stretched the
              material is locally, which is set by {`$\\partial\\eta/\\partial x$`}. Ignoring this
              derivative would mean the rod cannot sustain any elastic force.
            </p>
          </div>

          <h3>The Lagrangian Density</h3>
          <p>
            Recall that the density {`$\\mathcal{L}$`} is the Lagrangian per unit length, so the
            total Lagrangian is its integral. The same idea extends to three dimensions as a volume
            integral:
          </p>
          <div className="lrn-eq">
            <span>{`$$L = \\int \\mathcal{L}\\, dx \\qquad \\text{(1D)}, \\qquad L = \\iiint \\mathcal{L}\\, dx\\, dy\\, dz \\qquad \\text{(3D)}$$`}</span>
          </div>
          <p>
            The density {`$\\mathcal{L}$`}, not {`$L$`} itself, is the fundamental object you
            specify.
          </p>
          <LdDensityToTotal />
          <p>
            The figure above shows how the integral of {`$\\mathcal{L}$`} over the rod length builds
            up the total {`$L$`}. The key property for what follows is <strong>locality</strong>:{' '}
            {`$\\mathcal{L}$`} depends on the field value and its gradients at one point, not on
            distant parts of the rod. Locality is a physical fact about elastic media and
            electromagnetic fields alike, and the density respects it at every step.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Discrete: {`$L(q_i, \\dot{q}_i, t)$`}</span>
              <p>
                Finite set of generalized coordinates {`$q_i$`}. Time is the sole independent
                variable. Velocity {`$\\dot{q}_i$`} is the only derivative that enters {`$L$`}. You
                get one ODE per coordinate {`$q_i$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">
                Continuous:{' '}
                {`$\\mathcal{L}(\\eta, \\partial\\eta/\\partial x, \\partial\\eta/\\partial t, x, t)$`}
              </span>
              <p>
                The field {`$\\eta$`} is labeled by the continuous parameter {`$x$`}. Both{' '}
                {`$\\partial\\eta/\\partial t$`} and {`$\\partial\\eta/\\partial x$`} enter{' '}
                {`$\\mathcal{L}$`}. You get one PDE, which is effectively one equation for each
                value of {`$x$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>The Elastic Rod: A Worked Example</h2>
          <p>
            This is the density derived in the previous topic, written out so you can take its
            partials. Here {`$\\mu$`} is the mass density per unit length and {`$Y$`} is Young's
            modulus, which measures how stiff the rod is: how hard it pushes back when you stretch
            it. The kinetic energy density is {`$\\tfrac{1}{2}\\mu(\\partial\\eta/\\partial t)^2$`}{' '}
            and the potential energy density is {`$\\tfrac{1}{2}Y(\\partial\\eta/\\partial x)^2$`}.
            Their difference gives:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\mathcal{L} = \\tfrac{1}{2}\\left[\\mu\\left(\\frac{\\partial\\eta}{\\partial t}\\right)^2 - Y\\left(\\frac{\\partial\\eta}{\\partial x}\\right)^2\\right]$$`}</span>
          </div>
          <p>
            Use this density whenever you study longitudinal waves in an elastic solid. The minus
            sign reflects the trade-off between kinetic and potential energy at each point along the
            rod.
          </p>
          <LdKineticVsPotentialDensity />
          <p>
            The figure above separates the kinetic density {`$\\tfrac{1}{2}\\mu\\dot{\\eta}^2$`}{' '}
            from the potential density {`$\\tfrac{1}{2}Y\\eta'^2$`} along the rod. High-curvature
            regions store more elastic energy. Fast-moving regions carry more kinetic energy.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Without computing anything, which partial derivative of {`$\\mathcal{L}$`} with
              respect to {`$\\eta$`} itself (not its derivatives) do you expect to find for this rod
              density?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$\\partial\\mathcal{L}/\\partial\\eta = 0$`}. The rod density{' '}
                {`$\\mathcal{L} = \\tfrac{1}{2}[\\mu\\dot{\\eta}^2 - Y\\eta'^2]$`} contains only
                derivatives of {`$\\eta$`}, not {`$\\eta$`} itself. This means there is no restoring
                force proportional to displacement, only one proportional to curvature.
              </p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Elastic energy in a rod comes from compression and extension, which depend on the
              local strain {`$\\partial\\eta/\\partial x$`}. A uniform displacement of the whole rod
              costs zero energy. So {`$\\mathcal{L}$`} depends only on gradients, not on the
              absolute value of {`$\\eta$`}.
            </p>
          </div>
        </>,

        <>
          <h2>Hamilton's Principle for Continua</h2>
          <p>
            The discrete action {`$I = \\int L\\, dt$`} extends naturally to a 1D field. Form the
            double integral over space and time, and require it to be stationary for the correct
            field:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\delta I = \\delta\\int_{t_1}^{t_2}\\int_{x_1}^{x_2} \\mathcal{L}\\, dx\\, dt = 0$$`}</span>
          </div>
          <p>
            Apply this principle whenever you want the equations of motion for a continuous system.
            The variation holds the field fixed at all four boundaries: {`$t_1$`}, {`$t_2$`},{' '}
            {`$x_1$`}, and {`$x_2$`}.
          </p>
          <LdVariedPaths />
          <p>
            The figure above shows the one-parameter family of varied paths{' '}
            {`$\\eta(x,t;\\alpha) = \\eta(x,t;0) + \\alpha\\zeta(x,t)$`}. The function{' '}
            {`$\\zeta(x,t)$`} is any smooth function that vanishes at all boundaries. The correct
            field is the one where {`$dI/d\\alpha = 0$`} at {`$\\alpha = 0$`}.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The one-parameter-family logic ({`$dI/d\\alpha = 0$`} at {`$\\alpha = 0$`} picks the
              stationary path) is the same as in the discrete Euler-Lagrange derivation. What is new
              for a field is the extra boundary: {`$\\zeta$`} must vanish on all four limits{' '}
              {`$t_1, t_2, x_1, x_2$`}, not just the two time endpoints. That second pair of limits
              is what lets you integrate by parts in {`$x$`} as well as {`$t$`}.
            </p>
          </div>
        </>,

        <>
          <h2>The Field Euler-Lagrange Equation</h2>
          <p>
            The derivation follows two integration-by-parts steps, one in {`$t$`} and one in {`$x$`}
            . Start from {`$dI/d\\alpha = 0$`} after expanding with the chain rule.
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>Step 1.</strong> Expand {`$dI/d\\alpha$`} at {`$\\alpha = 0$`}:
              </p>
              <div className="lrn-eq">
                <span>{`$$\\frac{dI}{d\\alpha} = \\int\\!\\int dx\\, dt\\left[\\frac{\\partial\\mathcal{L}}{\\partial\\eta}\\zeta + \\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}\\dot{\\zeta} + \\frac{\\partial\\mathcal{L}}{\\partial\\eta'}\\zeta'\\right] = 0$$`}</span>
              </div>
              <p>
                <strong>Step 2.</strong> Integrate by parts in {`$t$`} on the {`$\\dot{\\zeta}$`}{' '}
                term. The boundary term vanishes because {`$\\zeta = 0$`} at {`$t_1$`} and {`$t_2$`}
                :
              </p>
              <div className="lrn-eq">
                <span>{`$$\\int_{t_1}^{t_2}\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}\\dot{\\zeta}\\, dt = -\\int_{t_1}^{t_2}\\frac{d}{dt}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}\\right)\\zeta\\, dt$$`}</span>
              </div>
              <p>
                <strong>Step 3.</strong> Integrate by parts in {`$x$`} on the {`$\\zeta'$`} term.
                The boundary term vanishes because {`$\\zeta = 0$`} at {`$x_1$`} and {`$x_2$`}:
              </p>
              <div className="lrn-eq">
                <span>{`$$\\int_{x_1}^{x_2}\\frac{\\partial\\mathcal{L}}{\\partial\\eta'}\\zeta'\\, dx = -\\int_{x_1}^{x_2}\\frac{d}{dx}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta'}\\right)\\zeta\\, dx$$`}</span>
              </div>
              <p>
                <strong>Step 4.</strong> Collect. The bracket must vanish for any {`$\\zeta$`}:
              </p>
              <div className="lrn-eq">
                <span>{`$$\\int\\!\\int dx\\, dt\\left[\\frac{\\partial\\mathcal{L}}{\\partial\\eta} - \\frac{d}{dt}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}\\right) - \\frac{d}{dx}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta'}\\right)\\right]\\zeta = 0$$`}</span>
              </div>
              <p>
                Because {`$\\zeta$`} is arbitrary, the bracket itself must be zero everywhere. This
                gives the <strong>1D field Euler-Lagrange equation</strong>:
              </p>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}\\right) + \\frac{d}{dx}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta'}\\right) - \\frac{\\partial\\mathcal{L}}{\\partial\\eta} = 0$$`}</span>
              </div>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>
                  Write out {`$dI/d\\alpha$`} for a general{' '}
                  {`$\\mathcal{L}(\\eta, \\eta', \\dot{\\eta})$`}. What three terms appear?
                </li>
                <li>
                  Perform the integration by parts in {`$t$`}. Write the resulting integral and
                  state why the boundary term disappears.
                </li>
                <li>
                  Now perform the integration by parts in {`$x$`}. Collect the full bracket and
                  state the argument that forces the bracket to zero.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Starting from {`$\\mathcal{L} = \\tfrac{1}{2}[\\mu\\dot{\\eta}^2 - Y\\eta'^2]$`},
                apply the field Euler-Lagrange equation. Compute each of the three partials and
                combine them to find the equation of motion.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the integration by parts in {`$x$`} work exactly the same way as the one in{' '}
              {`$t$`}? What is the key property of {`$\\zeta$`} that allows both boundary terms to
              vanish?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Both steps run the same machinery as the discrete Euler-Lagrange derivation, now
                with a second integration by parts in {`$x$`}. Each integration by parts produces a
                boundary term that vanishes because {`$\\zeta = 0$`} on the boundary, in {`$t$`} (at{' '}
                {`$t_1, t_2$`}) and in {`$x$`} (at {`$x_1, x_2$`}). The closing move is the same
                fundamental lemma you used before: if an integral of a continuous function against
                an arbitrary interior weight is zero, the function itself must be zero.
              </p>
            </details>
          </div>

          <h3>Reduction to the Wave Equation</h3>
          <p>
            The previous topic already reached the rod wave equation{' '}
            {`$\\mu\\ddot{\\eta} = Y\\eta''$`} by taking the continuum limit of the discrete chain.
            Here you confirm that same result by the new method: feed the rod density straight into
            the field Euler-Lagrange equation. Compute the three partial derivatives:
          </p>
          <div className="lrn-proof">
            <div className="lrn-proof-header">ROD PARTIALS</div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1</span>
              <div className="lrn-proof-step-content">
                {`$\\partial\\mathcal{L}/\\partial\\dot{\\eta} = \\mu\\dot{\\eta}$`}, so{' '}
                {`$\\dfrac{d}{dt}\\!\\left(\\dfrac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}\\right) = \\mu\\ddot{\\eta}$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2</span>
              <div className="lrn-proof-step-content">
                {`$\\partial\\mathcal{L}/\\partial\\eta' = -Y\\eta'$`}, so{' '}
                {`$\\dfrac{d}{dx}\\!\\left(\\dfrac{\\partial\\mathcal{L}}{\\partial\\eta'}\\right) = -Y\\eta''$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3</span>
              <div className="lrn-proof-step-content">
                {`$\\partial\\mathcal{L}/\\partial\\eta = 0$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4</span>
              <div className="lrn-proof-step-content">
                Sum: {`$\\mu\\ddot{\\eta} - Y\\eta'' = 0$`}, which is{' '}
                {`$\\mu\\dfrac{\\partial^2\\eta}{\\partial t^2} = Y\\dfrac{\\partial^2\\eta}{\\partial x^2}$`}
                . This is the wave equation with wave speed {`$v = \\sqrt{Y/\\mu}$`}.
              </div>
            </div>
            <div className="lrn-qed">QED</div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The rod density has two derivative terms but no {`$\\eta$`} term. How does that fact
              determine the physical type of the resulting PDE?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                When {`$\\partial\\mathcal{L}/\\partial\\eta = 0$`}, there is no term in the
                equation of motion proportional to {`$\\eta$`} itself. The equation is purely
                second-order in both space and time derivatives, with no restoring potential tied to
                displacement. That structure is exactly the wave equation. If there were a term in{' '}
                {`$\\eta$`} (for example, a rod on an elastic foundation), the equation would gain a
                Klein-Gordon mass term {`$m^2\\eta$`}.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Covariant 4-Space Formulation</h2>
          <p>
            In three spatial dimensions you need {`$\\mathcal{L}$`} to depend on{' '}
            {`$\\partial\\eta/\\partial x$`}, {`$\\partial\\eta/\\partial y$`},{' '}
            {`$\\partial\\eta/\\partial z$`}, and {`$\\partial\\eta/\\partial t$`}. Writing these
            separately is cumbersome. Notice that {`$t$`} and {`$x, y, z$`} enter Hamilton's
            principle the same way: as integration variables with boundary conditions on{' '}
            {`$\\zeta$`}.
          </p>
          <p>
            <strong>Covariant</strong> here means only that the equation keeps the same form when
            you relabel the four coordinates together. It does not claim the relabeling is a
            physical symmetry.
          </p>
          <p>
            Introduce 4-space coordinates {`$x^0 = ct$`}, {`$x^1 = x$`}, {`$x^2 = y$`},{' '}
            {`$x^3 = z$`}. Use Greek indices {`$\\mu, \\nu$`} for all four coordinates and Roman
            indices {`$i, j$`} for the three spatial ones only. The derivative {`$d/dx^\\nu$`} is
            the four-gradient {`$\\partial_\\nu$`} you met in covariant mechanics: the gradient
            stacked with the time derivative into one four-component object. The factor {`$c$`} in{' '}
            {`$x^0$`}
            is a unit-conversion factor only. This 4-space has no physical covariance and no
            transformation requirement.
          </p>
          <LdSpacetimeSymmetry />
          <p>
            The figure above shows how {`$x^0 = ct$`} and {`$x^1, x^2, x^3$`} enter the action on
            equal footing. The field index {`$\\rho$`} labels the components of the field quantity.
            If the field is a vector, {`$\\rho$`} runs over three values. If the field is a
            second-rank tensor, {`$\\rho$`} stands for two indices together.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Write the comma-subscript notation for the first spatial derivative of the {`$\\rho$`}
              -th field component with respect to {`$x^1$`}. What does {`$\\eta_{\\rho,0}$`}
              represent physically?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$\\eta_{\\rho,1} = d\\eta_\\rho / dx^1$`} is the first spatial derivative in the
                {`$x$`}-direction.{' '}
                {`$\\eta_{\\rho,0} = d\\eta_\\rho / dx^0 = (1/c)\\,\\partial\\eta_\\rho/\\partial t$`}{' '}
                is proportional to the time derivative, the field velocity.
              </p>
            </details>
          </div>
          <h3>The Covariant Field Euler-Lagrange Equation</h3>
          <p>
            With the 4-space notation, Hamilton's principle becomes{' '}
            {`$\\delta I = \\delta\\int \\mathcal{L}\\, d^4x = 0$`}. From here on, a repeated
            up-down index pair is summed over its range (the Einstein summation convention), so{' '}
            {`$\\nu$`} in {`$d/dx^\\nu$`} runs over all four values 0, 1, 2, 3. The variation
            follows the same three moves as the 1D derivation, now in four dimensions:
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                <strong>Step 1.</strong> Expand {`$dI/d\\alpha$`} at {`$\\alpha = 0$`} with the
                chain rule. The variation {`$\\zeta_\\rho$`} and its four derivatives{' '}
                {`$\\zeta_{\\rho,\\nu}$`} appear:
              </p>
              <div className="lrn-eq">
                <span>{`$$\\frac{dI}{d\\alpha} = \\int d^4x\\left[\\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho}\\zeta_\\rho + \\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\zeta_{\\rho,\\nu}\\right] = 0$$`}</span>
              </div>
              <p>
                <strong>Step 2.</strong> Integrate the second term by parts in 4-space. This is the
                same product-rule move as before, applied once for each of the four directions{' '}
                {`$\\nu$`}:
              </p>
              <div className="lrn-eq">
                <span>{`$$\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\zeta_{\\rho,\\nu} = \\frac{d}{dx^\\nu}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\zeta_\\rho\\right) - \\frac{d}{dx^\\nu}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\right)\\zeta_\\rho$$`}</span>
              </div>
              <p>
                <strong>Step 3.</strong> The first piece is a 4-divergence. The 4D divergence
                theorem turns its integral into a surface integral over the bounding hypersurface
                (the three-dimensional surface that encloses the 4-space region). There{' '}
                {`$\\zeta_\\rho = 0$`}, so it drops. Collect the rest:
              </p>
              <div className="lrn-eq">
                <span>{`$$\\int d^4x\\left[\\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho} - \\frac{d}{dx^\\nu}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\right)\\right]\\zeta_\\rho = 0$$`}</span>
              </div>
              <p>
                Because {`$\\zeta_\\rho$`} is arbitrary in the interior, the bracket must vanish for
                each distinct {`$\\rho$`}. This is the{' '}
                <strong>covariant field Euler-Lagrange equation</strong>:
              </p>
              <div className="lrn-eq lrn-eq-hero">
                <span>{`$$\\frac{d}{dx^\\nu}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\right) - \\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho} = 0 \\qquad (\\text{one PDE per }\\rho)$$`}</span>
              </div>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>
                  Write out the {`$\\nu = 1$`} piece of the summed term{' '}
                  {`$d/dx^\\nu(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})$`} for a
                  single-component field. Confirm it is{' '}
                  {`$d/dx(\\partial\\mathcal{L}/\\partial\\eta')$`}.
                </li>
                <li>
                  State which boundary condition on {`$\\zeta_\\rho$`} kills the surface term, and
                  on what surface it must hold.
                </li>
              </ol>
            </div>
          </div>
          <p>
            Use this form whenever the field has multiple components or the density depends on
            derivatives in more than one spatial direction.
          </p>
          <h3>Recovering the 1D Form: Where the Factors of {`$c$`} Cancel</h3>
          <p>
            Substitute {`$\\nu = 0$`} and {`$\\nu = 1$`} (one time, one space dimension, a single
            field component). The {`$\\nu = 1$`} term is plainly{' '}
            {`$d/dx(\\partial\\mathcal{L}/\\partial\\eta')$`}. The {`$\\nu = 0$`} term carries two
            factors of {`$c$`} that must cancel, and here is exactly where:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d}{dx^0}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,0}}\\right) = \\underbrace{\\frac{1}{c}\\frac{d}{dt}}_{x^0 = ct}\\!\\left(\\underbrace{c\\,\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}}_{\\eta_{\\rho,0}\\,=\\,\\dot{\\eta}/c}\\right) = \\frac{d}{dt}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}\\right)$$`}</span>
          </div>
          <p>
            The {`$1/c$`} from {`$d/dx^0 = (1/c)\\,d/dt$`} cancels the {`$c$`} from{' '}
            {`$\\partial\\mathcal{L}/\\partial\\eta_{\\rho,0} = c\\,\\partial\\mathcal{L}/\\partial\\dot{\\eta}$`}
            . That second factor appears because {`$\\eta_{\\rho,0} = \\dot{\\eta}/c$`}, so dividing
            by {`$\\eta_{\\rho,0}$`} brings out a {`$c$`}. Adding the two terms reproduces the 1D
            form exactly, with no stray {`$c$`}:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}\\right) + \\frac{d}{dx}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta'}\\right) - \\frac{\\partial\\mathcal{L}}{\\partial\\eta} = 0$$`}</span>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The cancellation is not a coincidence of units. The covariant equation is built so the
              {`$c$`} in {`$x^0 = ct$`} never reaches the physics. Every time derivative arrives
              paired with a {`$1/c$`}, and every {`$\\eta_{\\rho,0}$`} in a denominator brings back
              a matching {`$c$`}. The {`$\\nu = 0$`} term is therefore the plain time term{' '}
              {`$d/dt(\\partial\\mathcal{L}/\\partial\\dot{\\eta})$`}, with{' '}
              {`$\\dot{\\eta} \\equiv \\partial\\eta/\\partial t$`}.
            </p>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">1D non-covariant form</span>
              <p>
                {`$\\dfrac{d}{dt}\\!\\left(\\dfrac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}\\right) + \\dfrac{d}{dx}\\!\\left(\\dfrac{\\partial\\mathcal{L}}{\\partial\\eta'}\\right) - \\dfrac{\\partial\\mathcal{L}}{\\partial\\eta} = 0$`}
              </p>
              <p>
                Two separate derivative terms. Limited to one spatial dimension and a single field
                component.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Covariant 4-space form</span>
              <p>
                {`$\\dfrac{d}{dx^\\nu}\\!\\left(\\dfrac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\right) - \\dfrac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho} = 0$`}
              </p>
              <p>
                One compact equation with implied summation over {`$\\nu$`}. Covers 3D, multiple
                field components, and any number of derivative directions.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Gauge Ambiguity: The 4-Divergence Freedom</h2>
          <p>
            First recall the discrete rule. Add a total time derivative {`$d f(q_i,t)/dt$`} to{' '}
            {`$L$`} and the action gains {`$\\int_{t_1}^{t_2} (df/dt)\\,dt = f(t_2) - f(t_1)$`}, a
            fixed number set by the endpoints. The endpoints are held fixed in Hamilton's principle,
            so this number does not vary. It drops out of {`$\\delta I$`}, and the equations of
            motion are unchanged. Field theory has the analogous freedom: the 4-divergence
            ambiguity.
          </p>
          <p>
            You can add any term of the form {`$dF_\\nu(\\eta_\\rho, x^\\mu)/dx^\\nu$`} to{' '}
            {`$\\mathcal{L}$`} without changing the field equations. Here {`$F_\\nu$`} is any set of
            four smooth functions of the field components and coordinates. Use this freedom to
            simplify {`$\\mathcal{L}$`} or put it in a more convenient form.
          </p>
          <LdGaugeAmbiguity />
          <p>
            The figure above shows why the added term makes no contribution. The volume integral of
            the 4-divergence converts to a surface integral by the 4D divergence theorem:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\delta\\int d^4x\\,\\frac{dF_\\nu}{dx^\\nu} = \\delta\\oint F_\\nu\\, d\\sigma^\\nu = 0$$`}</span>
          </div>
          <p>
            The surface integral vanishes because {`$\\delta\\eta_\\rho = 0$`} on the bounding
            surface. The variation of {`$F_\\nu$`} is zero there, so the added term contributes
            nothing to {`$\\delta I$`}.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Discrete: ambiguity {`$df(q_i,t)/dt$`}</span>
              <p>
                Adding a total time derivative to {`$L$`} changes {`$L$`} by a fixed boundary term
                in {`$\\int L\\, dt$`}. The boundary term does not enter {`$\\delta I$`}. The
                equations of motion are unchanged.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Continuous: ambiguity {`$dF_\\nu/dx^\\nu$`}</span>
              <p>
                Adding a 4-divergence to {`$\\mathcal{L}$`} changes the action by a surface
                integral. The surface integral vanishes because {`$\\delta\\eta_\\rho = 0$`} on the
                boundary. The field equations are unchanged.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Scope of the Formulation</h2>
          <p>
            The variational field formulation applies to any physical system you can describe by
            functions of space and time. It needs no underlying mechanical medium. Three examples
            illustrate the range.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Elastic solid:</strong> longitudinal and transverse oscillations of a rod or
              3D solid. The displacement field {`$\\eta_\\rho$`} has up to three components and the
              stress tensor {`$T_i^j$`} (defined next) encodes both normal and shear forces.
            </li>
            <li>
              <strong>Acoustic waves:</strong> a gas vibrating to produce sound. The field is the
              pressure or density perturbation. The same variational machinery yields the wave
              equation for acoustic propagation.
            </li>
            <li>
              <strong>Electromagnetic field:</strong> historically assumed to require an ether
              medium. The variational approach shows that the field equations follow directly from a
              Lagrangian density, with no mechanical medium needed. The field is mathematically just
              a set of functions of space and time.
            </li>
          </ul>
          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY INSIGHT</span>
            <p>
              A field is a set of one or more functions of space and time. Hamilton's principle
              applies to any such set. When you expand the resulting equations, you get the field
              equations directly. The Lagrangian density also encodes the conserved quantities of
              the field, which the stress-energy tensor below makes explicit.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The derivation of the field Euler-Lagrange equation used only two facts: that{' '}
              {`$\\mathcal{L}$`} depends smoothly on {`$\\eta_\\rho$`} and its derivatives, and that
              the variation {`$\\zeta_\\rho$`} vanishes on the boundary. Neither fact requires a
              mechanical interpretation. You can write down a Lagrangian density for the
              electromagnetic field, apply the variational procedure, and recover Maxwell's
              equations, with no ether and no spring-mass model anywhere in the argument.
            </p>
          </div>
        </>,

        <>
          <h2>The Stress-Energy Tensor</h2>
          <p>
            The stress-energy (energy-momentum) tensor is the field analog of Jacobi's integral (the
            Hamiltonian) in point mechanics. It encodes the energy density, momentum density, energy
            flux, and the 3D stress tensor of the field, all in one object.
          </p>
          <p>
            Start from the total derivative of {`$\\mathcal{L}$`} with respect to {`$x^\\mu$`} by
            the chain rule. Here {`$\\eta_{\\rho,\\mu\\nu} = d^2\\eta_\\rho/(dx^\\mu\\, dx^\\nu)$`}{' '}
            is the second mixed derivative of the field component:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d\\mathcal{L}}{dx^\\mu} = \\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho}\\eta_{\\rho,\\mu} + \\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\eta_{\\rho,\\mu\\nu} + \\frac{\\partial\\mathcal{L}}{\\partial x^\\mu}$$`}</span>
          </div>
          <p>
            <strong>Step 1.</strong> Use the field Euler-Lagrange equation to replace{' '}
            {`$\\partial\\mathcal{L}/\\partial\\eta_\\rho$`} with{' '}
            {`$d/dx^\\nu(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})$`}. The first two terms
            of the chain rule become:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d}{dx^\\nu}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\right)\\eta_{\\rho,\\mu} + \\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\eta_{\\rho,\\mu\\nu}$$`}</span>
          </div>
          <p>
            <strong>Step 2.</strong> Read these two terms with the product rule{' '}
            {`$d/dx^\\nu(AB) = (dA/dx^\\nu)B + A(dB/dx^\\nu)$`}. Set{' '}
            {`$A = \\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu}$`} and{' '}
            {`$B = \\eta_{\\rho,\\mu}$`}, so that {`$dB/dx^\\nu = \\eta_{\\rho,\\mu\\nu}$`}. The two
            terms are exactly the expanded product rule, so they collapse into one divergence:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d\\mathcal{L}}{dx^\\mu} - \\frac{\\partial\\mathcal{L}}{\\partial x^\\mu} = \\frac{d}{dx^\\nu}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\eta_{\\rho,\\mu}\\right)$$`}</span>
          </div>
          <p>
            <strong>Step 3.</strong> Write the left-hand {`$\\mathcal{L}$`} term as a divergence
            too. Because the Kronecker delta {`$\\delta_\\mu^\\nu$`} (which is 1 when{' '}
            {`$\\mu = \\nu$`} and 0 otherwise) is constant,{' '}
            {`$d\\mathcal{L}/dx^\\mu = d(\\mathcal{L}\\delta_\\mu^\\nu)/dx^\\nu$`}. Move it across
            and collect both divergences under one {`$d/dx^\\nu$`}:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d}{dx^\\nu}\\!\\left[\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\eta_{\\rho,\\mu} - \\mathcal{L}\\delta_\\mu^\\nu\\right] = -\\frac{\\partial\\mathcal{L}}{\\partial x^\\mu}$$`}</span>
          </div>
          <p>
            The bracket is the object that appears inside the divergence. Define the{' '}
            <strong>stress-energy tensor</strong> as that bracket:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$T_\\mu^\\nu \\equiv \\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\eta_{\\rho,\\mu} - \\mathcal{L}\\delta_\\mu^\\nu$$`}</span>
          </div>
          <p>
            When {`$\\mathcal{L}$`} has no explicit dependence on {`$x^\\mu$`} (a free field), the
            right-hand side is zero and the divergence condition holds:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{dT_\\mu^\\nu}{dx^\\nu} = 0$$`}</span>
          </div>
          <StressEnergyContinuity />
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              When {`$\\mathcal{L}$`} does not depend explicitly on {`$x^\\mu$`}, the field has a
              continuous symmetry under translation in space-time. Each such symmetry produces a
              conserved current, and the four rows of {`$T_\\mu^\\nu$`} are those currents, one for
              each direction of translation. This is the direct analog of energy and momentum
              conservation in discrete mechanics. The next topic develops the field version of
              Noether's theorem that proves this symmetry-to-conservation link in full; here you
              read it off the divergence directly.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In Step 2 the two terms collapse into a single divergence. State which function plays
              the role of {`$A$`} and which plays {`$B$`}, and explain why the collapse is a pure
              algebraic identity, not an approximation.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$A = \\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu}$`} and{' '}
                {`$B = \\eta_{\\rho,\\mu}$`}. The first term carries {`$dA/dx^\\nu$`} times {`$B$`};
                the second carries {`$A$`} times {`$dB/dx^\\nu = \\eta_{\\rho,\\mu\\nu}$`}. Those
                are the exact two pieces the product rule produces when you differentiate {`$AB$`}.
                Reading the rule backwards merges them into {`$d(AB)/dx^\\nu$`}. It is an identity
                that holds term by term, so no information is lost and nothing is dropped.
              </p>
            </details>
          </div>

          <h3>Physical Components of the Stress-Energy Tensor</h3>
          <p>
            The tensor {`$T_\\mu^\\nu$`} has a clear physical meaning for each block of components.
            Separate the conservation law {`$dT_\\mu^\\nu/dx^\\nu = 0$`} by splitting the summed
            index {`$\\nu$`} into its time part ({`$\\nu = 0$`}) and its three space parts (
            {`$\\nu = 1, 2, 3$`}):
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{dT_\\mu^0}{c\\, dt} + \\nabla\\cdot\\mathbf{T}_\\mu = 0$$`}</span>
          </div>
          <p>
            This is a continuity equation: a density {`$T_\\mu^0$`} plus the divergence of a flux
            vector {`$\\mathbf{T}_\\mu$`} equals zero. The {`$c$`} in {`$c\\,dt$`} comes from{' '}
            {`$x^0 = ct$`}. It pairs with the factors of {`$c$`} that the {`$x^0 = ct$`} convention
            puts into the mixed time-space components. From here on, the rod examples below are
            written in <strong>physical form</strong>, with those unit-conversion factors of {`$c$`}{' '}
            already accounted for, so each density and flux reads in plain mechanical units. When
            the field is spatially bounded (vanishes at the boundary), the conserved quantity is:
          </p>
          <div className="lrn-eq">
            <span>{`$$R_\\mu = \\int T_\\mu^0\\, dV, \\qquad \\frac{dR_\\mu}{dt} = 0$$`}</span>
          </div>

          <p>
            Contract the boxed definition at {`$\\mu = \\nu = 0$`} to read off the energy density.
            Recall {`$\\eta_{\\rho,0} = (1/c)\\dot{\\eta}_\\rho$`}, so{' '}
            {`$\\partial\\mathcal{L}/\\partial\\eta_{\\rho,0} = c\\,\\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\rho$`}
            . The two factors of {`$c$`} cancel, and {`$\\delta_0^0 = 1$`}:
          </p>
          <div className="lrn-eq">
            <span>{`$$T_0^0 = \\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,0}}\\eta_{\\rho,0} - \\mathcal{L}\\delta_0^0 = \\left(c\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}_\\rho}\\right)\\!\\left(\\frac{1}{c}\\dot{\\eta}_\\rho\\right) - \\mathcal{L} = \\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}_\\rho}\\dot{\\eta}_\\rho - \\mathcal{L}$$`}</span>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">{`$T_0^0$`}: Energy Density</div>
            <div className="lrn-definition-desc">
              <p>
                {`$T_0^0 = \\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\rho\\cdot\\dot{\\eta}_\\rho - \\mathcal{L}$`}
                . For a mechanical density with {`$\\mathcal{L} = T - V$`}, this equals {`$T + V$`},
                the total energy per unit volume. It is the direct field analog of Jacobi's integral
                in discrete mechanics, where {`$\\sum_i p_i\\dot{q}_i - L$`} gives the total energy.
                The sum over field components {`$\\rho$`} plays the role of the discrete sum over{' '}
                {`$i$`}. The total energy {`$R_0 = \\int T_0^0\\, dV$`} is conserved when the field
                does not radiate out of the integration region.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">{`$-T_i^0$`}: Field Momentum Density</div>
            <div className="lrn-definition-desc">
              <p>
                The {`$i$`}-component of momentum per unit volume carried by the field. For the
                elastic rod, {`$-T_1^0 = -\\mu\\dot{\\eta}\\,(\\partial\\eta/\\partial x)$`}. This
                is the additional momentum density when wave motion causes net mass redistribution
                in any interval {`$dx$`}. The total field momentum is{' '}
                {`$-R_i = -\\int T_i^0\\, dV$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">
              {`$T_0^j$`}: Energy Current Density (Energy Flux)
            </div>
            <div className="lrn-definition-desc">
              <p>
                The rate at which energy flows in the {`$j$`}-direction per unit area. For the rod,{' '}
                {`$T_0^1 = -\\dot{\\eta}\\,Y(\\partial\\eta/\\partial x)$`} in physical form (the
                {`$c$`} from {`$x^0 = ct$`} is absorbed by the rule stated above). This is the rate
                of work done by the tension force at a cut in the rod: the tension{' '}
                {`$Y(\\partial\\eta/\\partial x)$`} acts through velocity {`$\\dot{\\eta}$`} to
                transfer energy to the right.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">{`$T_i^j$`}: 3D Stress Tensor</div>
            <div className="lrn-definition-desc">
              <p>
                The force per unit area on a surface element:{' '}
                {`$d\\mathbf{F} = T\\cdot d\\mathbf{A}$`}. The diagonal components {`$T_i^i$`} give
                normal (compressive or tensile) stresses. The off-diagonal components {`$T_i^j$`} (
                {`$i \\neq j$`}) give shear stresses, which arise in a 3D elastic solid when force
                acts in one direction on a surface whose normal points in a different direction.
                Newton's equation for the {`$i$`}-component of momentum density follows from summing
                the divergence conditions over the three faces of a volume element.
              </p>
            </div>
          </div>
          <div className="lrn-insight">
            <span className="lrn-insight-label">KEY NAMING REASON</span>
            <p>
              The tensor is called the <strong>stress-energy tensor</strong> because the spatial
              block {`$T_i^j$`} is exactly the classical 3D stress tensor of continuum mechanics,
              while {`$T_0^0$`} is the energy density. The four rows {`$T_\\mu$`} are called
              <strong> conserved currents</strong> by analogy with electromagnetic current
              conservation.
            </p>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The {`$\\mu = i$`} rows are Newton's second law for momentum density. Each balances a
              momentum flux against the stress forces on the faces of a volume element. The same
              density-plus-flux structure appears in every field theory, from elasticity to
              electromagnetism to general relativity.
            </p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `What is the Lagrangian density $\\mathcal{L}$ and how does it differ from the total Lagrangian $L$ in a continuous system?`,
        a: `The Lagrangian density $\\mathcal{L}$ is the Lagrangian per unit length (or per unit volume in 3D). The total Lagrangian is $L = \\int \\mathcal{L}\\, dx$ in 1D or $L = \\iiint \\mathcal{L}\\, dx\\,dy\\,dz$ in 3D. The key difference is that $\\mathcal{L}$, not $L$, is the fundamental object you specify for a continuous system. This is because $\\mathcal{L}$ is local. It depends only on the field and its derivatives at one point. That reflects how elastic and electromagnetic interactions act locally in space.`
      },
      {
        q: `For the longitudinal elastic rod with mass density $\\mu$ and Young's modulus $Y$, write the Lagrangian density. Identify which term is kinetic and which is potential.`,
        a: `The Lagrangian density is $\\mathcal{L} = \\tfrac{1}{2}\\left[\\mu(\\partial\\eta/\\partial t)^2 - Y(\\partial\\eta/\\partial x)^2\\right]$. The term $\\tfrac{1}{2}\\mu(\\partial\\eta/\\partial t)^2$ is the kinetic energy density: it depends on how fast each point of the rod moves. The term $\\tfrac{1}{2}Y(\\partial\\eta/\\partial x)^2$ is the potential (elastic) energy density: it depends on the local compression or extension, which is set by the spatial gradient. The minus sign follows the convention $\\mathcal{L} = T - V$.`
      },
      {
        q: `Hamilton's principle for a 1D field is $\\delta I = 0$ where $I = \\int_{t_1}^{t_2}\\!\\int_{x_1}^{x_2} \\mathcal{L}\\,dx\\,dt$. What boundary conditions does the variation $\\zeta(x,t)$ satisfy, and why are they required?`,
        a: `The variation $\\zeta(x,t)$ must vanish at all four boundaries: $\\zeta = 0$ at $t = t_1$, $t = t_2$, $x = x_1$, and $x = x_2$. These conditions are required so that the boundary terms from the two integration-by-parts steps (one in $t$, one in $x$) are zero. Without them, the boundary terms would remain in the expression for $dI/d\\alpha$ and could not be set to zero independently. The boundary conditions ensure the variation is purely internal to the spacetime region of integration.`
      },
      {
        q: `Derive the 1D field Euler-Lagrange equation from Hamilton's principle. State the key argument that allows you to conclude the bracket must vanish.`,
        a: `Start from $dI/d\\alpha = 0$. Expand using the chain rule to get three terms: $\\partial\\mathcal{L}/\\partial\\eta\\cdot\\zeta + \\partial\\mathcal{L}/\\partial\\dot{\\eta}\\cdot\\dot{\\zeta} + \\partial\\mathcal{L}/\\partial\\eta'\\cdot\\zeta'$. Integrate by parts in $t$ on the $\\dot{\\zeta}$ term and in $x$ on the $\\zeta'$ term. Both boundary terms vanish because $\\zeta = 0$ at the boundaries. Collect to get $\\int\\!\\int [\\partial\\mathcal{L}/\\partial\\eta - d/dt(\\partial\\mathcal{L}/\\partial\\dot{\\eta}) - d/dx(\\partial\\mathcal{L}/\\partial\\eta')]\\zeta\\,dx\\,dt = 0$. The key argument: since $\\zeta$ is an arbitrary smooth function in the interior, the only way the integral can be zero for all choices of $\\zeta$ is if the bracket itself is zero everywhere. This gives the field Euler-Lagrange equation.`
      },
      {
        q: `Apply the field Euler-Lagrange equation to $\\mathcal{L} = \\tfrac{1}{2}[\\mu\\dot{\\eta}^2 - Y\\eta'^2]$. Compute all three partials and write the resulting equation of motion.`,
        a: `Compute: $\\partial\\mathcal{L}/\\partial\\dot{\\eta} = \\mu\\dot{\\eta}$, so $d/dt(\\partial\\mathcal{L}/\\partial\\dot{\\eta}) = \\mu\\ddot{\\eta}$. Next: $\\partial\\mathcal{L}/\\partial\\eta' = -Y\\eta'$, so $d/dx(\\partial\\mathcal{L}/\\partial\\eta') = -Y\\eta''$. Finally: $\\partial\\mathcal{L}/\\partial\\eta = 0$. Substituting: $\\mu\\ddot{\\eta} + (-Y\\eta'') - 0 = 0$, which gives $\\mu\\,\\partial^2\\eta/\\partial t^2 = Y\\,\\partial^2\\eta/\\partial x^2$. This is the wave equation. The wave speed is $v = \\sqrt{Y/\\mu}$, the ratio of the restoring force (Young's modulus) to the inertia (mass density).`
      },
      {
        q: `A continuous system with infinitely many degrees of freedom seems to produce only one field Euler-Lagrange equation. How is this not a contradiction?`,
        a: `The field Euler-Lagrange equation is a partial differential equation in both $x$ and $t$. It must hold for every value of $x$ in the domain. This means it is actually one PDE per value of $x$, which is infinitely many constraints. In the discrete chain of $n$ masses, you get $n$ ODEs. Taking the continuous limit replaces the discrete index $i$ with the continuous variable $x$. The $n$ separate ODEs merge into a single PDE that encodes one equation at each point. So the single equation only looks like less. It still carries one constraint at every point.`
      },
      {
        q: `A sound wave in a gas is described by a Lagrangian density for the pressure perturbation field $p(x,y,z,t)$. What role do $x$, $y$, $z$, and $t$ play in this description?`,
        a: `In field theory, $x$, $y$, $z$, and $t$ are independent parameters, not generalized coordinates. They label which point of the gas you are looking at and at what time. The field $p(x,y,z,t)$ is the generalized coordinate. Its value at each labeled point is what the Euler-Lagrange equation determines. This is different from discrete mechanics, where $t$ is the sole parameter and the $q_i$ are the dynamical variables. The derivatives $\\partial p/\\partial x$, $\\partial p/\\partial y$, $\\partial p/\\partial z$, and $\\partial p/\\partial t$ all enter $\\mathcal{L}$ on equal footing.`
      },
      {
        q: `Write the covariant 4-space notation for the first mixed second derivative of the $\\rho$-th field component with respect to $x^\\mu$ and then $x^\\nu$. What do $x^0$, $x^1$, $x^2$, $x^3$ represent?`,
        a: `The second mixed derivative is written $\\eta_{\\rho,\\mu\\nu} = d^2\\eta_\\rho/(dx^\\mu\\, dx^\\nu)$. The coordinates are: $x^0 = ct$ (time multiplied by the speed of light for unit consistency), $x^1 = x$, $x^2 = y$, $x^3 = z$. The factor $c$ in $x^0$ is a unit-conversion factor only. This 4-space is a notational device that unifies space and time derivatives; it implies no physical covariance or transformation requirement between space and time.`
      },
      {
        q: `State the covariant field Euler-Lagrange equation. Which index is summed and what does each term represent?`,
        a: `The covariant field Euler-Lagrange equation is $d/dx^\\nu(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu}) - \\partial\\mathcal{L}/\\partial\\eta_\\rho = 0$. The index $\\nu$ is summed over all four values 0, 1, 2, 3 (Einstein summation convention). The first term $d/dx^\\nu(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu})$ collects the derivative contributions from all four space-time directions: at $\\nu=0$ it gives $d/dt(\\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\rho)$, and at $\\nu=1,2,3$ it gives the three spatial derivative terms. The second term $\\partial\\mathcal{L}/\\partial\\eta_\\rho$ is the direct dependence of $\\mathcal{L}$ on the field value. There is one such equation for each distinct value of the field index $\\rho$.`
      },
      {
        q: `How does the 1D non-covariant field Euler-Lagrange equation follow as a special case of the covariant form?`,
        a: `Set $\\nu = 0$ and $\\nu = 1$ only (one time, one space dimension) in $d/dx^\\nu(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu}) - \\partial\\mathcal{L}/\\partial\\eta_\\rho = 0$. Track the $\\nu = 0$ term carefully. Two factors of $c$ enter and cancel. First, $d/dx^0 = (1/c)\\,d/dt$ because $x^0 = ct$. Second, $\\eta_{\\rho,0} = \\dot{\\eta}/c$, so $\\partial\\mathcal{L}/\\partial\\eta_{\\rho,0} = c\\,\\partial\\mathcal{L}/\\partial\\dot{\\eta}$. Combining: $d/dx^0(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,0}) = (1/c)\\,d/dt(c\\,\\partial\\mathcal{L}/\\partial\\dot{\\eta}) = d/dt(\\partial\\mathcal{L}/\\partial\\dot{\\eta})$. The $1/c$ and the $c$ cancel cleanly. The $\\nu = 1$ term gives $d/dx(\\partial\\mathcal{L}/\\partial\\eta')$. Together they reproduce the 1D form with the two derivative terms and the $-\\partial\\mathcal{L}/\\partial\\eta$ term, with no leftover factor of $c$.`
      },
      {
        q: `What is the 4-divergence gauge ambiguity of $\\mathcal{L}$? Write the term you can add and explain why it does not change the field equations.`,
        a: `You can add any term $dF_\\nu(\\eta_\\rho, x^\\mu)/dx^\\nu$ to $\\mathcal{L}$, where $F_\\nu$ are four arbitrary smooth functions of the field components and coordinates. It does not change the field equations because $\\delta\\int d^4x\\,(dF_\\nu/dx^\\nu) = \\delta\\oint F_\\nu\\,d\\sigma^\\nu = 0$. The volume integral of the 4-divergence converts to a surface integral by the 4D divergence theorem. The variation $\\delta\\eta_\\rho = 0$ on the boundary, so $\\delta F_\\nu = 0$ there, and the surface integral is zero. This is the field-theoretic analog of the discrete rule that a total time derivative $df(q_i,t)/dt$ added to $L$ does not affect the Euler-Lagrange equations.`
      },
      {
        q: `Define the stress-energy tensor $T_\\mu^\\nu$. Under what condition does its 4-divergence vanish?`,
        a: `The stress-energy tensor is $T_\\mu^\\nu = \\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu}\\cdot\\eta_{\\rho,\\mu} - \\mathcal{L}\\delta_\\mu^\\nu$. Its 4-divergence vanishes, $dT_\\mu^\\nu/dx^\\nu = 0$, when $\\mathcal{L}$ has no explicit dependence on $x^\\mu$ (a free field). The condition $\\partial\\mathcal{L}/\\partial x^\\mu = 0$ means the field has continuous translational symmetry in space and time. By the field-theoretic version of Noether's theorem, each such symmetry produces a conserved current. The four rows $T_\\mu$ are those four conserved currents.`
      },
      {
        q: `What physical quantity does $T_0^0$ represent? Write its explicit form and relate it to Jacobi's integral.`,
        a: `$T_0^0$ is the total energy density of the field. Its explicit form is $T_0^0 = \\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\rho\\cdot\\dot{\\eta}_\\rho - \\mathcal{L}$. For a mechanical Lagrangian density $\\mathcal{L} = T - V$ (kinetic minus potential per unit volume), this equals $T + V$, the total energy per unit volume. The form $p\\dot{q} - L$ in discrete mechanics is Jacobi's integral (the Hamiltonian). $T_0^0$ is the direct field-theoretic analog: replace the sum over discrete coordinates with the sum over field components indexed by $\\rho$, and replace $L$ with $\\mathcal{L}$.`
      },
      {
        q: `For the elastic rod, compute $T_0^1$ and give its physical interpretation.`,
        a: `Using $T_\\mu^\\nu = \\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu}\\cdot\\eta_{\\rho,\\mu} - \\mathcal{L}\\delta_\\mu^\\nu$ with $\\mu = 0$, $\\nu = 1$: $T_0^1 = (\\partial\\mathcal{L}/\\partial\\eta_{,1})\\cdot\\eta_{,0} - \\mathcal{L}\\delta_0^1$. Here $\\delta_0^1 = 0$. The first-direction derivative is $\\eta_{,1} = \\partial\\eta/\\partial x = \\eta'$ (no factor of $c$, since $x^1 = x$), so $\\partial\\mathcal{L}/\\partial\\eta_{,1} = -Y\\eta'$ for the rod density. The time-direction derivative is $\\eta_{,0} = \\dot{\\eta}/c$. So $T_0^1 = -Y\\eta'\\cdot\\dot{\\eta}/c$. The single factor of $1/c$ is real: it sits in the $\\nu = 1$ slot of the row $T_0$, whose conservation law $dT_0^0/(c\\,dt) + dT_0^1/dx = 0$ carries the matching $c$ in $c\\,dt$. The physical energy flux (power per unit area) is $c\\,T_0^1 = -\\dot{\\eta}Y(\\partial\\eta/\\partial x)$: the tension $Y(\\partial\\eta/\\partial x)$ does work at rate $\\dot{\\eta}Y(\\partial\\eta/\\partial x)$ on the material to its right.`
      },
      {
        q: `What physical quantity does $-T_i^0$ represent for a field? Compute it for the elastic rod.`,
        a: `$-T_i^0$ is the $i$-component of field momentum density, the momentum per unit volume carried by the field. For the elastic rod with $\\mu = 1$, $\\nu = 0$: $T_1^0 = (\\partial\\mathcal{L}/\\partial\\dot{\\eta})\\cdot\\eta_{,1} - \\mathcal{L}\\delta_1^0$. Since $\\delta_1^0 = 0$ and $\\partial\\mathcal{L}/\\partial\\dot{\\eta} = \\mu\\dot{\\eta}$ and $\\eta_{,1} = \\partial\\eta/\\partial x$: $T_1^0 = \\mu\\dot{\\eta}(\\partial\\eta/\\partial x)$. So $-T_1^0 = -\\mu\\dot{\\eta}(\\partial\\eta/\\partial x)$. During wave motion a segment $dx$ gains extra mass $-\\mu(\\partial\\eta/\\partial x)dx$ from compression. That mass moves with velocity $\\dot{\\eta}$. The result is momentum density $-\\mu\\dot{\\eta}(\\partial\\eta/\\partial x)$.`
      },
      {
        q: `Explain the physical meaning of the 3D stress tensor block $T_i^j$ in terms of forces on surface elements.`,
        a: `$T_i^j$ is the $i$-component of force per unit area acting on a surface element whose outward normal points in the $j$-direction. The force on an area element $d\\mathbf{A}$ is $d\\mathbf{F} = T\\cdot d\\mathbf{A}$ where $(T)_{ij} = T_i^j$. The diagonal components $T_i^i$ give normal stresses (compression or tension): force in the $i$-direction on a surface perpendicular to $i$. The off-diagonal components $T_i^j$ ($i\\neq j$) give shear stresses: force in the $i$-direction on a surface perpendicular to $j$. Sum the net force on a volume element from all six faces. Applying Newton's second law recovers the $i$-component of the momentum-density conservation law.`
      },
      {
        q: `A membrane has Lagrangian density $\\mathcal{L} = \\tfrac{1}{2}\\sigma\\dot{u}^2 - \\tfrac{1}{2}T[(\\partial u/\\partial x)^2 + (\\partial u/\\partial y)^2]$ where $\\sigma$ is the surface mass density and $T$ is the tension. Write the field Euler-Lagrange equation and identify the resulting PDE.`,
        a: `Compute the three contributions. For the time derivative: $\\partial\\mathcal{L}/\\partial\\dot{u} = \\sigma\\dot{u}$, so $d/dt(\\partial\\mathcal{L}/\\partial\\dot{u}) = \\sigma\\ddot{u}$. For the $x$-derivative: $\\partial\\mathcal{L}/\\partial(\\partial u/\\partial x) = -T(\\partial u/\\partial x)$, so $d/dx$ of this is $-T\\,\\partial^2 u/\\partial x^2$. For the $y$-derivative: $\\partial\\mathcal{L}/\\partial(\\partial u/\\partial y) = -T(\\partial u/\\partial y)$, so $d/dy$ of this is $-T\\,\\partial^2 u/\\partial y^2$. Finally $\\partial\\mathcal{L}/\\partial u = 0$. Collecting: $\\sigma\\ddot{u} - T(\\partial^2 u/\\partial x^2 + \\partial^2 u/\\partial y^2) = 0$. This is the 2D wave equation for transverse membrane vibrations, with wave speed $v = \\sqrt{T/\\sigma}$.`
      },
      {
        q: `Suppose you add the term $\\partial(\\eta\\dot{\\eta})/\\partial t$ to the rod Lagrangian density $\\mathcal{L}$. Does this change the equation of motion? Justify your answer.`,
        a: `No, it does not change the equation of motion. The term $\\partial(\\eta\\dot{\\eta})/\\partial t$ is a total time derivative, which is a special case of a 4-divergence $dF_\\nu/dx^\\nu$ with $F_0 = \\eta\\dot{\\eta}/c$ and $F_1 = F_2 = F_3 = 0$. The variation of the action integral of any 4-divergence equals the variation of a surface integral, which is zero because the variation $\\delta\\eta = 0$ on the boundary. Therefore $\\delta I$ is unchanged and the field Euler-Lagrange equation is unchanged. This is the continuous analog of the discrete rule: adding a total time derivative to $L$ does not alter the ODEs of motion.`
      },
      {
        q: `The stress-energy tensor has only the form of a 4-tensor in the 4-space $(ct, x, y, z)$. What does this mean, and why does it not prevent $T_{ij}$ from being a genuine 3D tensor?`,
        a: `Having only the form of a 4-tensor means the equations $dT_\\mu^\\nu/dx^\\nu = 0$ look like tensor equations in 4-space. But this 4-space has no physical transformation properties between space and time. It is not Minkowski spacetime; it uses the Galilean transformation group. There is no requirement that $T_\\mu^\\nu$ transform covariantly under mixing of space and time coordinates. However, within the three spatial coordinates $x^1, x^2, x^3$, the components $T_{ij}$ do transform as a genuine second-rank tensor under ordinary 3D rotations. Physical 3D rotations are a symmetry of the equations, so the spatial block $T_i^j$ is a true 3D stress tensor. The 4-tensor language is a notational convenience, not a statement about Lorentz covariance.`
      },
      {
        q: `Consider a Lagrangian density $\\mathcal{L}$ that depends explicitly on $x$ but not on $t$. Which conserved quantity (if any) does the stress-energy tensor still give, and which is lost?`,
        a: `When $\\mathcal{L}$ depends explicitly on $x$ (but not $t$), the condition $\\partial\\mathcal{L}/\\partial x^\\mu = 0$ fails for $\\mu = 1$ (the $x$-direction). The divergence condition becomes $dT_1^\\nu/dx^\\nu = -\\partial\\mathcal{L}/\\partial x \\neq 0$. So spatial momentum $R_1 = \\int T_1^0\\, dV$ is not conserved: translation symmetry in $x$ is broken. The $\\mu = 0$ equation, however, is unaffected if $\\partial\\mathcal{L}/\\partial(x^0) = 0$, meaning no explicit time dependence. Then $dT_0^\\nu/dx^\\nu = 0$ and the total energy $R_0 = \\int T_0^0\\, dV$ remains conserved. This mirrors Noether's theorem: each broken translation symmetry costs one conservation law.`
      },
      {
        q: `For the electromagnetic field in vacuum, the Lagrangian density has no explicit space-time dependence. What does the stress-energy tensor conservation law $dT_\\mu^\\nu/dx^\\nu = 0$ guarantee?`,
        a: `It guarantees the conservation of four quantities: total electromagnetic energy $R_0 = \\int T_0^0\\, dV$ (the $\\mu = 0$ row) and total electromagnetic field momentum $R_i = \\int T_i^0\\, dV$ for $i = 1, 2, 3$ (the $\\mu = 1, 2, 3$ rows). The $\\mu = 0$ conservation law is Poynting's theorem: energy density plus divergence of energy flux equals zero. The spatial rows give momentum conservation for the field, with $T_i^j$ playing the role of the Maxwell stress tensor. All four conservation laws follow from the single condition $\\partial\\mathcal{L}/\\partial x^\\mu = 0$. The variational structure unifies energy and momentum conservation.`
      },
      {
        q: `In the derivation of $T_\\mu^\\nu$, why is the Kronecker delta $\\delta_\\mu^\\nu$ needed in the definition $T_\\mu^\\nu = \\partial\\mathcal{L}/\\partial\\eta_{\\rho,\\nu}\\cdot\\eta_{\\rho,\\mu} - \\mathcal{L}\\delta_\\mu^\\nu$?`,
        a: `You need $\\delta_\\mu^\\nu$ to write $\\mathcal{L}$ inside a divergence with respect to $\\nu$. The total derivative of $\\mathcal{L}$ is $d\\mathcal{L}/dx^\\mu$, which equals $d(\\mathcal{L}\\delta_\\mu^\\nu)/dx^\\nu$ because $d\\delta_\\mu^\\nu/dx^\\nu = 0$ (the Kronecker delta is a constant). Moving the $\\mathcal{L}$ term to the other side of the equation requires it to be inside a $d/dx^\\nu$ derivative. The $\\delta_\\mu^\\nu$ factor ensures that the $\\mathcal{L}$ term has the correct index structure to sit inside the $\\nu$-divergence while contracting to a scalar proportional to $\\mathcal{L}$ on the diagonal. Without it, you could not combine the two sides into a single divergence $dT_\\mu^\\nu/dx^\\nu$.`
      },
      {
        q: `Why does the variational field formulation apply to the electromagnetic field with no mechanical ether medium, even though it was originally developed for mechanical systems?`,
        a: `The derivation of the field Euler-Lagrange equation uses only two mathematical facts: that $\\mathcal{L}$ is a smooth function of $\\eta_\\rho$ and $\\eta_{\\rho,\\nu}$, and that the variation $\\zeta_\\rho$ vanishes on the bounding surface. Neither fact depends on $\\eta_\\rho$ representing a displacement of a material medium. A field is defined as any set of functions of space and time. You can write down a Lagrangian density for the electromagnetic field (in terms of the vector potential components), apply the variational procedure, and get Maxwell's equations without ever invoking a mechanical medium. The ether hypothesis was a physical assumption about what the field was made of; the variational procedure is a mathematical tool that requires no such assumption. This independence from mechanical interpretation is one of the key insights of the field-theoretic approach.`
      },
      {
        q: `A Klein-Gordon field in 1D has Lagrangian density $\\mathcal{L} = \\tfrac{1}{2}[\\dot{\\phi}^2 - (\\partial\\phi/\\partial x)^2 - m^2\\phi^2]$. Apply the field Euler-Lagrange equation to find the equation of motion.`,
        a: `Compute the three contributions. Time derivative: $\\partial\\mathcal{L}/\\partial\\dot{\\phi} = \\dot{\\phi}$, so $d/dt(\\partial\\mathcal{L}/\\partial\\dot{\\phi}) = \\ddot{\\phi}$. Space derivative: $\\partial\\mathcal{L}/\\partial(\\partial\\phi/\\partial x) = -(\\partial\\phi/\\partial x)$, so $d/dx$ of this is $-\\partial^2\\phi/\\partial x^2$. Direct term: $\\partial\\mathcal{L}/\\partial\\phi = -m^2\\phi$. Collecting: $\\ddot{\\phi} + (-\\partial^2\\phi/\\partial x^2) - (-m^2\\phi) = 0$, which gives $\\partial^2\\phi/\\partial t^2 - \\partial^2\\phi/\\partial x^2 + m^2\\phi = 0$. This is the Klein-Gordon equation. The $m^2\\phi$ term (which would not appear if $\\partial\\mathcal{L}/\\partial\\phi = 0$) adds a restoring force proportional to the field value, producing dispersive wave behavior with a minimum frequency $\\omega_{\\min} = m$.`
      },
      {
        q: `If you apply the stress-energy tensor conservation $dT_\\mu^\\nu/dx^\\nu = 0$ to the $\\mu = i$ row and integrate over a large volume, what physical conservation law do you recover?`,
        a: `The $\\mu = i$ row gives $dT_i^0/dt + dT_i^j/dx^j = 0$ (writing in 3+1 form, absorbing factors of $c$). This is a continuity equation for momentum density: the rate of change of momentum density $T_i^0$ in a volume element equals minus the divergence of the momentum flux tensor $T_i^j$. Integrating over a large volume and applying the divergence theorem: $dR_i/dt = \\int dT_i^0/dt\\, dV = -\\oint T_i^j n_j\\, dA$. When the field vanishes on the bounding surface, the right side is zero and $R_i = \\int T_i^0\\, dV$ is conserved. This is the conservation of total field momentum. The tensor $T_i^j$ is the 3D stress tensor: its divergence gives the internal force density that transfers momentum between adjacent volume elements.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Lagrangian Density and Field-Theoretic Euler-Lagrange Equations',
      sections: [
        <>
          <h2>Key Equations</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Lagrangian Density (1D and 3D)</div>
            <div className="ref-formula-eq">
              {`$$L = \\int \\mathcal{L}\\, dx \\qquad L = \\iiint \\mathcal{L}\\, dx\\, dy\\, dz$$`}
            </div>
            <div className="ref-formula-desc">
              When to use: any continuous system where the physics is local. Specify{' '}
              {`$\\mathcal{L}$`}, not {`$L$`}.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Elastic Rod Lagrangian Density</div>
            <div className="ref-formula-eq">
              {`$$\\mathcal{L} = \\tfrac{1}{2}\\left[\\mu\\left(\\frac{\\partial\\eta}{\\partial t}\\right)^2 - Y\\left(\\frac{\\partial\\eta}{\\partial x}\\right)^2\\right]$$`}
            </div>
            <div className="ref-formula-desc">
              When to use: longitudinal oscillations of an elastic rod with mass density {`$\\mu$`}{' '}
              per unit length and Young's modulus {`$Y$`}.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Hamilton's Principle (1D Field)</div>
            <div className="ref-formula-eq">
              {`$$\\delta I = \\delta\\int_{t_1}^{t_2}\\int_{x_1}^{x_2} \\mathcal{L}\\, dx\\, dt = 0$$`}
            </div>
            <div className="ref-formula-desc">
              When to use: to derive the field equation of motion. The variation {`$\\zeta = 0$`} at
              all four boundaries.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">1D Field Euler-Lagrange Equation</div>
            <div className="ref-formula-eq">
              {`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}\\right) + \\frac{d}{dx}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta'}\\right) - \\frac{\\partial\\mathcal{L}}{\\partial\\eta} = 0$$`}
            </div>
            <div className="ref-formula-desc">
              When to use: any 1D continuous system. Two integration-by-parts steps (in {`$t$`} and{' '}
              {`$x$`}) plus arbitrariness of the variation give this PDE.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Covariant Field Euler-Lagrange Equation (Hero)</div>
            <div className="ref-formula-eq">
              {`$$\\frac{d}{dx^\\nu}\\!\\left(\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\right) - \\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho} = 0 \\qquad (\\text{one PDE per }\\rho)$$`}
            </div>
            <div className="ref-formula-desc">
              When to use: any field in 3D with multiple components. Index {`$\\nu$`} sums over 0,
              1, 2, 3. Index {`$\\rho$`} labels field components. The 4-space is a notational
              device, not a claim about Lorentz covariance.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">4-Divergence Gauge Ambiguity</div>
            <div className="ref-formula-eq">
              {`$$\\mathcal{L} \\sim \\mathcal{L} + \\frac{dF_\\nu(\\eta_\\rho, x^\\mu)}{dx^\\nu}$$`}
            </div>
            <div className="ref-formula-desc">
              When to use: to simplify {`$\\mathcal{L}$`} by adding or subtracting a 4-divergence.
              The field equations are unchanged. The added term integrates to a surface term where{' '}
              {`$\\delta\\eta_\\rho = 0$`}.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Stress-Energy Tensor</div>
            <div className="ref-formula-eq">
              {`$$T_\\mu^\\nu = \\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\nu}}\\eta_{\\rho,\\mu} - \\mathcal{L}\\delta_\\mu^\\nu$$`}
            </div>
            <div className="ref-formula-desc">
              When to use: to extract energy, momentum, and stress from {`$\\mathcal{L}$`}. When{' '}
              {`$\\partial\\mathcal{L}/\\partial x^\\mu = 0$`}: {`$dT_\\mu^\\nu/dx^\\nu = 0$`} and{' '}
              {`$R_\\mu = \\int T_\\mu^0\\, dV$`} is conserved.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Energy Density</div>
            <div className="ref-formula-eq">
              {`$$T_0^0 = \\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}_\\rho}\\dot{\\eta}_\\rho - \\mathcal{L}$$`}
            </div>
            <div className="ref-formula-desc">
              When to use: to find energy per unit volume. Analog of Jacobi's integral. For{' '}
              {`$\\mathcal{L} = T - V$`}: equals {`$T + V$`}.
            </div>
          </div>
        </>,

        <>
          <h2>Rod Partials and Wave Equation</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Partial</th>
                <th>Value for rod {`$\\mathcal{L}$`}</th>
                <th>Term in E-L equation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\partial\\mathcal{L}/\\partial\\dot{\\eta}$`}</td>
                <td>{`$\\mu\\dot{\\eta}$`}</td>
                <td>{`$d/dt(\\mu\\dot{\\eta}) = \\mu\\ddot{\\eta}$`}</td>
              </tr>
              <tr>
                <td>{`$\\partial\\mathcal{L}/\\partial\\eta'$`}</td>
                <td>{`$-Y\\eta'$`}</td>
                <td>{`$d/dx(-Y\\eta') = -Y\\eta''$`}</td>
              </tr>
              <tr>
                <td>{`$\\partial\\mathcal{L}/\\partial\\eta$`}</td>
                <td>{`$0$`}</td>
                <td>{`$0$`}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong>Result (E-L sum)</strong>
                </td>
                <td>{`$\\mu\\ddot{\\eta} - Y\\eta'' = 0$`} (wave equation)</td>
              </tr>
            </tbody>
          </table>
          <p>Wave speed: {`$v = \\sqrt{Y/\\mu}$`}.</p>
        </>,

        <>
          <h2>Discrete to Continuous Correspondence</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Discrete Mechanics</th>
                <th>Field Theory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Generalized coordinate {`$q_i$`}</td>
                <td>Field {`$\\eta_\\rho(x,t)$`}</td>
              </tr>
              <tr>
                <td>Discrete index {`$i$`}</td>
                <td>
                  Continuous parameter {`$x$`} (or {`$x,y,z$`})
                </td>
              </tr>
              <tr>
                <td>Lagrangian {`$L(q_i, \\dot{q}_i, t)$`}</td>
                <td>Lagrangian density {`$\\mathcal{L}(\\eta, \\eta', \\dot{\\eta}, x, t)$`}</td>
              </tr>
              <tr>
                <td>Action {`$I = \\int L\\, dt$`}</td>
                <td>Action {`$I = \\int\\!\\int \\mathcal{L}\\, dx\\, dt$`}</td>
              </tr>
              <tr>
                <td>{`$n$`} Euler-Lagrange ODEs</td>
                <td>1 Euler-Lagrange PDE per field index {`$\\rho$`}</td>
              </tr>
              <tr>
                <td>Total time derivative {`$df/dt$`} ambiguity</td>
                <td>4-divergence {`$dF_\\nu/dx^\\nu$`} ambiguity</td>
              </tr>
              <tr>
                <td>Jacobi integral {`$= T + V$`}</td>
                <td>Energy density {`$T_0^0 = T + V$`} per unit volume</td>
              </tr>
              <tr>
                <td>Generalized momentum {`$p_i = \\partial L/\\partial\\dot{q}_i$`}</td>
                <td>
                  Field momentum density {`$\\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\rho$`}
                </td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Physical Components of {`$T_\\mu^\\nu$`}</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Physical meaning</th>
                <th>Rod example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$T_0^0$`}</td>
                <td>Energy density</td>
                <td>{`$\\tfrac{1}{2}[\\mu\\dot{\\eta}^2 + Y\\eta'^2]$`}</td>
              </tr>
              <tr>
                <td>{`$-T_i^0$`}</td>
                <td>Field momentum density</td>
                <td>{`$-\\mu\\dot{\\eta}\\,(\\partial\\eta/\\partial x)$`} (1D)</td>
              </tr>
              <tr>
                <td>{`$T_0^j$`}</td>
                <td>Energy current density (flux)</td>
                <td>{`$-\\dot{\\eta}\\,Y(\\partial\\eta/\\partial x)$`} (1D)</td>
              </tr>
              <tr>
                <td>{`$T_i^j$`} (diagonal)</td>
                <td>Normal stress (compression/tension)</td>
                <td>Present in 1D rod</td>
              </tr>
              <tr>
                <td>
                  {`$T_i^j$`} ({`$i\\neq j$`})
                </td>
                <td>Shear stress</td>
                <td>Arises in 3D elastic solid</td>
              </tr>
            </tbody>
          </table>
          <p>
            Conservation law when {`$\\partial\\mathcal{L}/\\partial x^\\mu = 0$`}:{' '}
            {`$R_\\mu = \\int T_\\mu^0\\, dV$`} is conserved. The four rows {`$T_\\mu$`} are called{' '}
            <strong>conserved currents</strong>.
          </p>
        </>,

        <>
          <h2>4-Space Notation Summary</h2>
          <ul className="lrn-list">
            <li>
              Coordinates: {`$x^0 = ct$`}, {`$x^1 = x$`}, {`$x^2 = y$`}, {`$x^3 = z$`}. The factor{' '}
              {`$c$`} is a unit-conversion factor only. No physical covariance implied.
            </li>
            <li>
              Greek indices {`$\\mu, \\nu$`}: run over all four values 0, 1, 2, 3. Roman indices{' '}
              {`$i, j$`}: run over spatial values 1, 2, 3 only.
            </li>
            <li>
              Field index {`$\\rho$`}: labels all components of the field quantity. May stand for a
              single index or for multiple indices (e.g. two indices for a second-rank tensor
              field).
            </li>
            <li>
              Comma-subscript notation: {`$\\eta_{\\rho,\\nu} = d\\eta_\\rho/dx^\\nu$`};{' '}
              {`$\\eta_{\\rho,\\mu\\nu} = d^2\\eta_\\rho/(dx^\\mu\\, dx^\\nu)$`}.
            </li>
            <li>
              Summation convention: repeated up-down index pair is summed (in force for the rest of
              this topic unless stated otherwise).
            </li>
          </ul>
        </>
      ]
    },

    customCss: null
  }

  return <LearningTemplate config={config} />
}
