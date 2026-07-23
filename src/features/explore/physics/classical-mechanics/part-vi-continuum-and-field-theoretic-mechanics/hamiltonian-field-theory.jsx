import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  MomentumDensityLimit,
  HamiltonianDensityWave,
  FieldPhasePortrait,
  FourierModeDecomp,
  CanonicalFlowCircle,
  ConservedChargeFlux,
  StressTensorTorque,
  SymplecticVsMinkowski
} from '../../../../../components/viz'

export default function HamiltonianFieldTheory() {
  const config = {
    cssPrefix: 'hft',
    documentTitle: 'Hamiltonian Formulation of Field Theories - AETHER',
    learning: {
      category: 'Module 6',
      groupTitle: 'Continuum and Field-Theoretic Mechanics',
      title: 'Hamiltonian Formulation of Field Theories',
      subtitle:
        'The Hamiltonian formulation is the classical root of quantum field theory. The same passage from discrete mechanics to field theory that built the Lagrangian density runs again for the Hamiltonian. It gives the momentum density, the Hamiltonian density, and the canonical field equations. The payoff is a Fourier decomposition that produces an infinite set of harmonic oscillators. That set is the exact starting point for phonons in solids and for canonical quantization in particle physics.',
      sections: [
        // SECTION 1: FROM DISCRETE TO CONTINUUM HAMILTONIAN
        <>
          <h2>From Discrete Momenta to Momentum Density</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              In a discrete chain, the canonical momentum conjugate to {`$\\eta_i$`} is{' '}
              {`$p_i = \\partial L / \\partial \\dot{\\eta}_i$`}. As we shrink the lattice spacing{' '}
              {`$a \\to 0$`}, each {`$p_i \\to 0$`}. What finite quantity can we form from {`$p_i$`}
              and {`$a$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The ratio {`$p_i / a$`} stays finite as {`$a \\to 0$`}. This ratio becomes the
                momentum density of the field. It is the field analog of canonical momentum: the
                amount of momentum per unit length stored at position {`$x$`}.
              </p>
            </details>
          </div>

          <p>
            The discrete Hamiltonian is {`$H = p\\dot{q} - L$`}. Every step below mirrors that
            construction. Only the indexing changes from a discrete label {`$i$`} to a continuous
            coordinate {`$x$`}.
          </p>

          <p>
            Start from the same linear chain used to take the continuum limit: {`$N$`} mass points
            at lattice spacing {`$a$`}, with displacement {`$\\eta_i$`} at site {`$i$`}. That setup
            already writes the total Lagrangian as {`$L = a\\sum_i \\mathcal{L}_i$`}, a sum of
            per-site densities scaled by the spacing. The discrete canonical momentum conjugate to{' '}
            {`$\\eta_i$`} is:
          </p>

          <div className="lrn-eq">
            <span>{`$$p_i = \\frac{\\partial L}{\\partial \\dot{\\eta}_i} = a\\frac{\\partial \\mathcal{L}_i}{\\partial \\dot{\\eta}_i}$$`}</span>
          </div>

          <p>
            Here {`$\\mathcal{L}_i$`} is the Lagrangian density at site {`$i$`}, and the factor of{' '}
            {`$a$`} carries through from {`$L = a\\sum_i \\mathcal{L}_i$`}. The discrete Hamiltonian
            is:
          </p>

          <div className="lrn-eq">
            <span>{`$$H = a\\sum_i\\!\\left(\\frac{\\partial\\mathcal{L}_i}{\\partial\\dot{\\eta}_i}\\cdot\\dot{\\eta}_i - \\mathcal{L}_i\\right)$$`}</span>
          </div>

          <p>
            As {`$a \\to 0$`}, the sum becomes an integral and{' '}
            {`$\\mathcal{L}_i \\to \\mathcal{L}$`}. Individual momenta {`$p_i \\to 0$`}, but the
            ratio survives:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\pi \\equiv \\lim_{a\\to 0}\\frac{p_i}{a} = \\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}$$`}</span>
          </div>

          <p>
            This is the <strong>momentum density</strong>. It plays the role of {`$p$`} in the
            discrete theory, but defined per unit volume instead of per particle.
          </p>

          <MomentumDensityLimit />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why is this true?</span>
            <p>
              Think of a rod of total length {`$L$`} divided into {`$N$`} cells. Each cell has
              momentum {`$p_i = a\\partial\\mathcal{L}/\\partial\\dot{\\eta}_i$`}. This is
              proportional to {`$a$`}, so {`$p_i \\to 0$`} as {`$a \\to 0$`}. But the momentum per
              unit length, {`$p_i/a = \\partial\\mathcal{L}/\\partial\\dot{\\eta}_i$`}, stays
              finite. It is a property of the field at that point, independent of how finely you
              divide the rod.
            </p>
          </div>

          <h3>The Hamiltonian Density</h3>

          <p>
            Once we have {`$\\pi$`}, the continuum limit of the Hamiltonian falls out directly. The
            Hamiltonian is the space integral of the <strong>Hamiltonian density</strong>:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\mathcal{H} = \\pi\\dot{\\eta} - \\mathcal{L}, \\qquad H = \\int\\mathcal{H}\\,dx$$`}</span>
          </div>

          <p>This is the field analog of the discrete {`$H = p\\dot{q} - L$`}.</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Discrete mechanics</span>
              <p>
                Canonical pair {`$(q_i, p_i)$`}. Hamiltonian {`$H = \\sum_i p_i \\dot{q}_i - L$`}.
                Finite-dimensional phase space with {`$2N$`} dimensions.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Field mechanics</span>
              <p>
                Canonical pair {`$(\\eta(x), \\pi(x))$`} at each point {`$x$`}. Hamiltonian{' '}
                {`$H = \\int \\pi\\dot{\\eta}\\,dx - L$`}. Infinite-dimensional phase space.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              The Hamiltonian density {`$\\mathcal{H} = \\pi\\dot{\\eta} - \\mathcal{L}$`} looks
              like a Legendre transform. What is being transformed, and what is the new independent
              variable?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                This is exactly the Legendre transform that converts the Lagrangian density from a
                function of {`$\\dot{\\eta}$`} to a function of {`$\\pi$`}. We trade{' '}
                {`$\\dot{\\eta}$`} (a velocity) for{' '}
                {`$\\pi = \\partial\\mathcal{L}/\\partial\\dot{\\eta}$`} (its conjugate momentum).
                The Legendre transform packages kinetic information into the momentum variable. This
                is the same trade made in discrete mechanics when going from {`$L(q, \\dot{q})$`} to{' '}
                {`$H(q, p)$`}.
              </p>
            </details>
          </div>
        </>,

        // SECTION 3: 3D FIELDS AND CYCLIC FIELDS
        <>
          <h2>Multi-Component Fields and Cyclic Conservation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              In discrete mechanics, a cyclic coordinate {`$q_i$`} (absent from {`$L$`}) gives a
              conserved momentum {`$p_i = \\text{const}$`}. If a field {`$\\eta_\\rho$`} is cyclic,
              what do you expect to be conserved?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The analog is conservation of the momentum density {`$\\pi^\\rho$`}. Since the field
                occupies a continuous volume, the conserved quantity is not just one number but an
                integral: {`$\\Pi^\\rho = \\int dV\\,\\pi^\\rho(x^i, t) = \\text{const}$`}.
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>Index notation used below.</strong> Greek indices {`$\\mu, \\nu$`} run over
              the four space-time coordinates {`$(x^0 = ct, x^1, x^2, x^3)$`}. Roman indices{' '}
              {`$i, j$`} run over the three spatial coordinates only. The label {`$\\rho$`} counts
              field components, not coordinates. A comma in a subscript means a derivative:{' '}
              {`$\\eta_{\\rho,\\mu} \\equiv d\\eta_\\rho/dx^\\mu$`} and{' '}
              {`$\\eta_{\\rho,i} \\equiv d\\eta_\\rho/dx^i$`}. Any index repeated in one term is
              summed over (the summation convention).
            </p>
          </div>

          <p>
            One result from the Lagrangian-density material drives this section: the field
            Euler-Lagrange equation, one partial differential equation per component {`$\\rho$`}:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{d}{dx^\\mu}\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\mu}} - \\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho} = 0$$`}</span>
          </div>

          <p>
            The sum over {`$\\mu$`} packs the time derivative and the spatial divergence into one
            term. The derivation is owned by the Lagrangian-density material; this section uses the
            result twice (here, and in the canonical-equation derivation).
          </p>

          <p>
            For a field with multiple components {`$\\eta_\\rho$`} (where{' '}
            {`$\\rho = 1, 2, \\ldots$`} labels the field components, not a spatial index), the
            canonical momentum density for each component is:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\pi^\\rho(x^\\mu) = \\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}_\\rho}$$`}</span>
          </div>

          <p>The 3D Hamiltonian density follows the same pattern:</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\mathcal{H}(\\eta^\\rho,\\, \\eta_{\\rho,i},\\, \\pi_\\rho,\\, x^i) = \\pi^\\rho\\dot{\\eta}_\\rho - \\mathcal{L}$$`}</span>
          </div>

          <p>
            Notice that {`$\\mathcal{H}$`} is not a function of {`$\\pi^\\rho_{,i}$`} (the spatial
            gradients of the momentum density). This is a key structural difference from the
            Lagrangian density, which depends on {`$\\eta_{\\rho,i}$`}.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">
                Lagrangian density {`$\\mathcal{L}$`} depends on
              </span>
              <p>
                {`$\\eta_\\rho$`}, {`$\\dot{\\eta}_\\rho$`}, {`$\\eta_{\\rho,i}$`}. All four
                space-time derivatives on equal footing.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">
                Hamiltonian density {`$\\mathcal{H}$`} depends on
              </span>
              <p>
                {`$\\eta_\\rho$`}, {`$\\eta_{\\rho,i}$`}, {`$\\pi_\\rho$`}. Does NOT depend on{' '}
                {`$\\pi^\\rho_{,i}$`}. Time is singled out via {`$\\pi^\\rho$`}.
              </p>
            </div>
          </div>

          <h3>Cyclic Fields and Conserved Charges</h3>

          <p>
            If the Lagrangian density does not contain {`$\\eta_\\rho$`} explicitly (the field is
            cyclic), the Euler-Lagrange equation becomes a pure conservation equation:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{d}{dx^\\mu}\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\mu}} = 0$$`}</span>
          </div>

          <p>Splitting time and space parts:</p>

          <div className="lrn-eq">
            <span>{`$$\\frac{d\\pi^\\rho}{dt} + \\frac{d}{dx^i}\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,i}} = 0$$`}</span>
          </div>

          <p>
            This is a local conservation law: the rate of change of momentum density at a point
            equals minus the spatial divergence of a flux. A concrete example: the total linear
            momentum of a vibrating string is the conserved charge when the Lagrangian lacks
            explicit position dependence. The same pattern with a cyclic phase gives conserved
            charges in field theory, worked out in the Noether-for-fields material.
          </p>

          <p>
            Integrating over all space and using the divergence theorem gives the conserved charge:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\Pi^\\rho = \\int dV\\,\\pi^\\rho(x^i, t) = \\text{const}$$`}</span>
          </div>

          <ConservedChargeFlux />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why is this true?</span>
            <p>
              The divergence theorem converts {`$\\int \\partial_i J^i\\,dV$`} into a surface
              integral at infinity. For a field that vanishes at large distances, this surface term
              is zero. So the total charge {`$\\Pi^\\rho$`} cannot change: the flux of momentum
              density that leaves one region must enter another. Nothing escapes to infinity.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              Why is {`$\\mathcal{H}$`} listed as a function of {`$\\eta_{\\rho,i}$`} (spatial
              gradients of the field) but not of {`$\\pi^\\rho_{,i}$`} (spatial gradients of the
              momentum density)?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The Legendre transform trades {`$\\dot{\\eta}_\\rho$`} for {`$\\pi^\\rho$`}. The
                Lagrangian depends on {`$\\eta_{\\rho,i}$`} (because the elastic energy depends on
                strain, a spatial gradient of displacement). After the Legendre transform,{' '}
                {`$\\eta_{\\rho,i}$`} remains in {`$\\mathcal{H}$`} unchanged, but no spatial
                gradients of {`$\\pi^\\rho$`} appear because the Lagrangian never depended on them.
                The Hamiltonian density inherits spatial dependence only from the field, not from
                its conjugate momentum.
              </p>
            </details>
          </div>
        </>,

        // SECTION 4: CANONICAL FIELD EQUATIONS DERIVATION
        <>
          <h2>Deriving the Canonical Field Equations</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              In discrete mechanics, Hamilton's equations are{' '}
              {`$\\dot{q}_i = \\partial H / \\partial p_i$`} and{' '}
              {`$\\dot{p}_i = -\\partial H / \\partial q_i$`}. Write down what you expect the field
              versions to look like, using {`$\\eta_\\rho$`} and {`$\\pi^\\rho$`}.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The field versions should be{' '}
                {`$\\dot{\\eta}_\\rho = \\delta\\mathcal{H}/\\delta\\pi^\\rho$`} and{' '}
                {`$\\dot{\\pi}^\\rho = -\\delta\\mathcal{H}/\\delta\\eta_\\rho$`}, with functional
                derivatives replacing partial derivatives. We will derive exactly this below.
              </p>
            </details>
          </div>

          <h3>First Canonical Equation</h3>

          <p>
            Differentiate {`$\\mathcal{H} = \\pi^\\rho\\dot{\\eta}_\\rho - \\mathcal{L}$`} with
            respect to {`$\\pi^\\rho$`}, treating {`$\\eta_\\rho$`} and {`$\\pi^\\rho$`} as
            independent variables:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{\\partial\\mathcal{H}}{\\partial\\pi^\\rho} = \\dot{\\eta}_\\rho + \\pi^\\lambda\\frac{\\partial\\dot{\\eta}_\\lambda}{\\partial\\pi^\\rho} - \\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}_\\lambda}\\frac{\\partial\\dot{\\eta}_\\lambda}{\\partial\\pi^\\rho}$$`}</span>
          </div>

          <p>
            The last two terms cancel because{' '}
            {`$\\pi^\\lambda = \\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\lambda$`}. The result
            is immediate:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\dot{\\eta}_\\rho = \\frac{\\partial\\mathcal{H}}{\\partial\\pi^\\rho}$$`}</span>
          </div>

          <h3>Second Canonical Equation</h3>

          <p>
            The derivation of the second equation is a two-step calculation. First, differentiate{' '}
            {`$\\mathcal{H}$`} with respect to {`$\\eta_\\rho$`}:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{\\partial\\mathcal{H}}{\\partial\\eta_\\rho} = \\pi^\\lambda\\frac{\\partial\\dot{\\eta}_\\lambda}{\\partial\\eta_\\rho} - \\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}_\\lambda}\\frac{\\partial\\dot{\\eta}_\\lambda}{\\partial\\eta_\\rho} - \\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho} = -\\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho}$$`}</span>
          </div>

          <p>
            Now apply the field Euler-Lagrange equation (stated above) to{' '}
            {`$\\partial\\mathcal{L}/\\partial\\eta_\\rho$`}:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{\\partial\\mathcal{H}}{\\partial\\eta_\\rho} = -\\dot{\\pi}^\\rho - \\frac{d}{dx^i}\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,i}}$$`}</span>
          </div>

          <p>
            Second, differentiate {`$\\mathcal{H}$`} with respect to the spatial gradient{' '}
            {`$\\eta_{\\rho,i}$`}, by the exact same chain-rule argument:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{\\partial\\mathcal{H}}{\\partial\\eta_{\\rho,i}} = -\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,i}}$$`}</span>
          </div>

          <p>
            Combine both steps: substitute the expression for{' '}
            {`$\\partial\\mathcal{L}/\\partial\\eta_{\\rho,i}$`} back in:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{\\partial\\mathcal{H}}{\\partial\\eta_\\rho} - \\frac{d}{dx^i}\\frac{\\partial\\mathcal{H}}{\\partial\\eta_{\\rho,i}} = -\\dot{\\pi}^\\rho$$`}</span>
          </div>

          <div className="lrn-warning">
            <p>
              <strong>Common mistake.</strong> The second canonical equation has two{' '}
              {`$\\mathcal{H}$`} terms, not one. A student who writes{' '}
              {`$\\dot{\\pi}^\\rho = -\\partial\\mathcal{H}/\\partial\\eta_\\rho$`} forgets the
              spatial-derivative term {`$(d/dx^i)(\\partial\\mathcal{H}/\\partial\\eta_{\\rho,i})$`}
              . That term exists because {`$\\mathcal{H}$`} depends on {`$\\eta_{\\rho,i}$`}.
              Dropping it gives wrong equations of motion for any field with spatial coupling.
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Complete Example</span>
              <p>Derive the second canonical field equation step by step.</p>
              <ol className="lrn-list">
                <li>
                  Differentiate {`$\\mathcal{H} = \\pi^\\rho\\dot{\\eta}_\\rho - \\mathcal{L}$`}
                  with respect to {`$\\eta_\\rho$`}. The first two terms cancel because{' '}
                  {`$\\pi^\\lambda = \\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\lambda$`},
                  leaving{' '}
                  {`$\\partial\\mathcal{H}/\\partial\\eta_\\rho = -\\partial\\mathcal{L}/\\partial\\eta_\\rho$`}
                  .
                </li>
                <li>
                  Apply the field Euler-Lagrange equation:{' '}
                  {`$\\partial\\mathcal{L}/\\partial\\eta_\\rho = \\dot{\\pi}^\\rho + (d/dx^i)(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,i})$`}
                  .
                </li>
                <li>
                  Differentiate {`$\\mathcal{H}$`} with respect to {`$\\eta_{\\rho,i}$`} the same
                  way to get{' '}
                  {`$\\partial\\mathcal{H}/\\partial\\eta_{\\rho,i} = -\\partial\\mathcal{L}/\\partial\\eta_{\\rho,i}$`}
                  .
                </li>
                <li>
                  Substitute step 3 into step 2 to eliminate {`$\\mathcal{L}$`} entirely. Result:{' '}
                  {`$\\partial\\mathcal{H}/\\partial\\eta_\\rho - (d/dx^i)(\\partial\\mathcal{H}/\\partial\\eta_{\\rho,i}) = -\\dot{\\pi}^\\rho$`}
                  .
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Your Turn: Partial</span>
              <p>
                Fill in the missing step: once you have{' '}
                {`$\\partial\\mathcal{H}/\\partial\\eta_\\rho = -\\dot{\\pi}^\\rho - (d/dx^i)(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,i})$`}
                , how do you replace the {`$\\mathcal{L}$`} term with a {`$\\mathcal{H}$`} term?
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              In the worked derivation, two terms cancelled when we differentiated{' '}
              {`$\\mathcal{H}$`} with respect to {`$\\eta_\\rho$`}. Why did they cancel?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The Hamiltonian density is{' '}
                {`$\\mathcal{H} = \\pi^\\lambda\\dot{\\eta}_\\lambda - \\mathcal{L}$`}. When you
                differentiate the first term, you get a piece with{' '}
                {`$\\pi^\\lambda\\,\\partial\\dot{\\eta}_\\lambda/\\partial\\eta_\\rho$`}. When you
                differentiate {`$\\mathcal{L}$`} through its velocity dependence, you get{' '}
                {`$(\\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\lambda)\\,\\partial\\dot{\\eta}_\\lambda/\\partial\\eta_\\rho$`}
                . These two pieces are equal because{' '}
                {`$\\pi^\\lambda = \\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\lambda$`}. One
                enters with a plus sign and one with a minus sign, so they cancel exactly. Only the
                explicit {`$\\eta_\\rho$`} dependence of {`$\\mathcal{L}$`} survives.
              </p>
            </details>
          </div>
        </>,

        // SECTION 5: FUNCTIONAL DERIVATIVE NOTATION
        <>
          <h2>The Functional Derivative</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              The second canonical equation has the combination{' '}
              {`$\\partial\\mathcal{H}/\\partial\\eta_\\rho - (d/dx^i)(\\partial\\mathcal{H}/\\partial\\eta_{\\rho,i})$`}
              . Can you invent a single symbol that stands for this combination?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Define{' '}
                {`$\\delta/\\delta\\eta_\\rho \\equiv \\partial/\\partial\\eta_\\rho - (d/dx^i)(\\partial/\\partial\\eta_{\\rho,i})$`}
                . This packages the two terms into one operator. Then the second canonical equation
                reads simply {`$\\dot{\\pi}^\\rho = -\\delta\\mathcal{H}/\\delta\\eta_\\rho$`}.
              </p>
            </details>
          </div>

          <p>
            Define the <strong>functional derivative</strong> operator:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{\\delta}{\\delta\\psi} \\equiv \\frac{\\partial}{\\partial\\psi} - \\frac{d}{dx^i}\\frac{\\partial}{\\partial\\psi_{,i}}$$`}</span>
          </div>

          <p>
            Because {`$\\mathcal{H}$`} does not depend on {`$\\pi^\\rho_{,i}$`}, the functional
            derivative with respect to {`$\\pi^\\rho$`} reduces to the ordinary partial derivative.
            The two canonical field equations become:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\dot{\\eta}_\\rho = \\frac{\\delta\\mathcal{H}}{\\delta\\pi^\\rho}, \\qquad \\dot{\\pi}^\\rho = -\\frac{\\delta\\mathcal{H}}{\\delta\\eta_\\rho}$$`}</span>
          </div>

          <p>
            This is the field-theoretic version of Hamilton's equations. It looks identical to the
            discrete form. The Lagrange field equations take a similarly compact form:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{d}{dt}\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}_\\rho} - \\frac{\\delta\\mathcal{L}}{\\delta\\eta_\\rho} = 0$$`}</span>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Lagrangian field equations</span>
              <p>
                Treat time and space on equal footing. The Lagrangian density depends on{' '}
                {`$\\eta_{\\rho,\\mu}$`} for all {`$\\mu$`} (time and space). Natural for
                relativistic field theory.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Hamiltonian field equations</span>
              <p>
                Single out time: use {`$\\pi^\\rho$`} as the conjugate variable to the field. The
                functional derivative suppresses the parallel space-time treatment. Less suited to
                Lorentz-covariant descriptions (those that look the same in every inertial frame).
              </p>
            </div>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>Limitation of the Hamiltonian approach.</strong> The Legendre transform must
              invert {`$\\pi^\\rho = \\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\rho$`}. That lets
              you write {`$\\dot{\\eta}_\\rho$`} as a function of {`$\\pi^\\rho$`}. This step
              privileges the time derivative over spatial derivatives and breaks manifest Lorentz
              covariance. For relativistic field theories the Hamiltonian formulation is therefore
              less useful than the Lagrangian one.
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why is this true?</span>
            <p>
              Lorentz covariance means equations look the same in every inertial frame. The
              Lagrangian density {`$\\mathcal{L}(\\eta_{\\rho,\\mu})$`} depends on all four
              space-time partial derivatives symmetrically: a Lorentz scalar. But the Hamiltonian
              singles out {`$\\dot{\\eta}_\\rho$`} (the time derivative) to define {`$\\pi^\\rho$`}.
              This breaks the symmetry between time and space. In special relativity, rotating to a
              different frame mixes time and space, so the Hamiltonian formulation cannot follow.
            </p>
          </div>

          <HamiltonianDensityWave />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              The functional derivative notation {`$\\delta\\mathcal{H}/\\delta\\eta_\\rho$`} makes
              the field equations look exactly like discrete Hamilton's equations. What has been
              gained? What has been lost?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Gained: a clean formal analogy with discrete mechanics. You can use every result
                from discrete Hamiltonian mechanics (Poisson brackets, canonical transformations,
                action-angle variables) by replacing {`$\\partial/\\partial q_i$`} with{' '}
                {`$\\delta/\\delta\\eta_\\rho$`}. Lost: the explicit parallel treatment of space and
                time. The functional derivative absorbs the spatial-gradient terms into one symbol,
                hiding the structure that makes the Lagrangian covariant. The trade is powerful for
                non-relativistic fields, but the notation obscures relativistic structure.
              </p>
            </details>
          </div>
        </>,

        // SECTION 6: FOURIER DECOMPOSITION
        <>
          <h2>Fourier Decomposition: Back to Discrete</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              We started with a discrete system, took the continuum limit, and arrived at field
              mechanics. Can we go back to a discrete description without losing information?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. Expand the field in normal modes (Fourier series). For a finite system with
                boundary conditions, only discrete wave vectors {`$k$`} are allowed. The Fourier
                coefficients {`$q_k(t)$`} form a countable set. We have gone full circle: discrete
                to continuous and back to discrete.
              </p>
            </details>
          </div>

          <h3>Elastic Rod Between Rigid Walls</h3>

          <p>
            Take an elastic rod of length {`$L = x^2 - x^1$`}, clamped at both ends. The boundary
            condition is {`$\\eta = 0$`} at {`$x = x^1$`} and {`$x = x^2$`}. The allowed modes are
            Fourier sine functions:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\eta(x,t) = \\sum_{n=0}^\\infty q_n(t)\\sin\\!\\left(\\frac{2\\pi n(x - x^1)}{2L}\\right)$$`}</span>
          </div>

          <p>
            The discrete mode number {`$n$`} now replaces the continuous spatial index {`$x$`}. The
            time-dependent coefficients {`$q_n(t)$`} are the new generalized coordinates.
          </p>

          <FourierModeDecomp />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why is this true?</span>
            <p>
              The sine functions {`$\\sin(n\\pi(x-x^1)/L)$`} form a complete orthogonal basis on{' '}
              {`$[x^1, x^2]$`}. Any function vanishing at both endpoints can be expanded in this
              basis. The expansion is exact (not approximate) if infinitely many terms are kept.
              Rigid walls force the field to zero at the boundary, which selects the sine basis over
              cosines.
            </p>
          </div>

          <p>
            Once you quantize, each mode {`$q_n(t)$`} becomes a quantum harmonic oscillator. In a
            solid, its quanta are phonons (the particle-like packets of lattice vibration). The next
            section makes that quantization step explicit.
          </p>

          <h3>3D Field: Complex Fourier Expansion</h3>

          <p>
            For a single real field {`$\\eta(\\mathbf{r}, t)$`} in a volume {`$V$`}, expand in plane
            waves:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\eta(\\mathbf{r}, t) = V^{-1/2}\\sum_{\\mathbf{k}} q_{\\mathbf{k}}(t)\\,e^{i\\mathbf{k}\\cdot\\mathbf{r}}$$`}</span>
          </div>

          <p>The plane waves are orthogonal over the volume:</p>

          <div className="lrn-eq">
            <span>{`$$\\frac{1}{V}\\int e^{i(\\mathbf{k}-\\mathbf{k}')\\cdot\\mathbf{r}}\\,dV = \\delta_{\\mathbf{k}\\mathbf{k}'}$$`}</span>
          </div>

          <p>Using this, the Fourier coefficients are extracted by:</p>

          <div className="lrn-eq">
            <span>{`$$q_{\\mathbf{k}}(t) = V^{-1/2}\\int e^{-i\\mathbf{k}\\cdot\\mathbf{r}}\\,\\eta(\\mathbf{r}, t)\\,dV$$`}</span>
          </div>

          <p>
            Because {`$\\eta$`} is real, the coefficients satisfy the reality condition{' '}
            {`$q_{\\mathbf{k}}^* = q_{-\\mathbf{k}}$`}. These are not independent: they are
            constraints, not extra degrees of freedom.
          </p>

          <p>The canonical momentum density {`$\\pi(\\mathbf{r}, t)$`} has a parallel expansion:</p>

          <div className="lrn-eq">
            <span>{`$$\\pi(\\mathbf{r}, t) = V^{-1/2}\\sum_{\\mathbf{k}} p_{\\mathbf{k}}(t)\\,e^{-i\\mathbf{k}\\cdot\\mathbf{r}}$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$p_{\\mathbf{k}}(t) = V^{-1/2}\\int e^{i\\mathbf{k}\\cdot\\mathbf{r}}\\,\\pi(\\mathbf{r}, t)\\,dV$$`}</span>
          </div>

          <p>
            The reality condition for the momentum density is{' '}
            {`$p_{\\mathbf{k}}^* = p_{-\\mathbf{k}}$`}.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Complete Example</span>
              <p>
                Derive the Fourier coefficient extraction formula{' '}
                {`$q_{\\mathbf{k}}(t) = V^{-1/2}\\int e^{-i\\mathbf{k}\\cdot\\mathbf{r}}\\eta\\,dV$`}{' '}
                from the 3D plane-wave expansion using orthogonality.
              </p>
              <ol className="lrn-list">
                <li>
                  Start from the expansion{' '}
                  {`$\\eta(\\mathbf{r},t) = V^{-1/2}\\sum_{\\mathbf{k}'} q_{\\mathbf{k}'}(t)\\,e^{i\\mathbf{k}'\\cdot\\mathbf{r}}$`}
                  .
                </li>
                <li>
                  Multiply both sides by {`$V^{-1/2}e^{-i\\mathbf{k}\\cdot\\mathbf{r}}$`} and
                  integrate over the volume.
                </li>
                <li>
                  Use the orthogonality relation{' '}
                  {`$(1/V)\\int e^{i(\\mathbf{k}'-\\mathbf{k})\\cdot\\mathbf{r}}\\,dV = \\delta_{\\mathbf{k}'\\mathbf{k}}$`}
                  . The sum collapses to a single term.
                </li>
                <li>
                  Result:{' '}
                  {`$q_{\\mathbf{k}}(t) = V^{-1/2}\\int e^{-i\\mathbf{k}\\cdot\\mathbf{r}}\\eta(\\mathbf{r},t)\\,dV$`}
                  .
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Your Turn: Partial</span>
              <p>
                In step 3, the orthogonality integral sets all {`$\\mathbf{k}' \\neq \\mathbf{k}$`}{' '}
                terms to zero. Why does this happen? What property of the plane waves does it use?
              </p>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">Independent Practice</span>
              <p>
                Use the same steps to derive the extraction formula for the momentum density
                coefficients {`$p_{\\mathbf{k}}(t)$`} from{' '}
                {`$\\pi(\\mathbf{r},t) = V^{-1/2}\\sum_{\\mathbf{k}} p_{\\mathbf{k}}(t)\\,e^{-i\\mathbf{k}\\cdot\\mathbf{r}}$`}
                .
              </p>
            </div>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Continuous field index {`$x$`}</span>
              <p>
                Uncountably infinite degrees of freedom. Field equations are partial differential
                equations in {`$x$`} and {`$t$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Discrete Fourier index {`$\\mathbf{k}$`}</span>
              <p>
                Countably infinite degrees of freedom (for finite {`$V$`}). Field equations become
                ordinary differential equations for each mode {`$q_{\\mathbf{k}}(t)$`}.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">Self-Explain</span>
            <p>
              The momentum density expansion uses {`$e^{-i\\mathbf{k}\\cdot\\mathbf{r}}$`} while the
              field uses {`$e^{+i\\mathbf{k}\\cdot\\mathbf{r}}$`}. Why the sign difference?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The two expansions are chosen so that the inner product{' '}
                {`$\\int \\pi\\dot{\\eta}\\,dV$`} simplifies cleanly. When you multiply {`$\\pi$`}{' '}
                (with {`$e^{-ik\\cdot r}$`}) by {`$\\dot{\\eta}$`} (with {`$e^{+ik\\cdot r}$`}) and
                integrate, the orthogonality relation gives {`$\\sum_k p_k \\dot{q}_k$`}: a sum over
                modes of the product of conjugate pairs. This makes {`$p_k$`} the canonical momentum
                conjugate to {`$q_k$`}, exactly as expected from discrete mechanics.
              </p>
            </details>
          </div>
        </>,

        // SECTION 7: PHASE PORTRAIT AND QFT BRIDGE
        <>
          <h2>Phase Portrait of a Fourier Mode and the Bridge to Quantum Field Theory</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              The Fourier coefficients {`$q_{\\mathbf{k}}(t)$`} and {`$p_{\\mathbf{k}}(t)$`} obey
              Hamilton's equations. What kind of system do they describe for a free field?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                For a free field, the Hamiltonian is quadratic in the modes. Each mode{' '}
                {`$q_{\\mathbf{k}}$`} obeys a harmonic oscillator equation with frequency{' '}
                {`$\\omega_k$`}. The phase portrait is an ellipse in the {`$(q_k, p_k)$`} plane.
              </p>
            </details>
          </div>

          <p>
            Substitute the Fourier expansions into the Hamiltonian. It separates into independent
            modes. Each mode {`$\\mathbf{k}$`} contributes a harmonic oscillator term. Here{' '}
            {`$\\mu$`} is the mass per unit length of the field (the mass density set in the
            continuum-limit material). Note the symbol clash: this {`$\\mu$`} is mass density, not
            the spacetime index {`$\\mu$`} used earlier. The canonical pair{' '}
            {`$(q_{\\mathbf{k}}, p_{\\mathbf{k}})$`} obeys:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\dot{q}_{\\mathbf{k}} = \\frac{p_{\\mathbf{k}}}{\\mu}, \\qquad \\dot{p}_{\\mathbf{k}} = -\\mu\\omega_k^2 q_{\\mathbf{k}}$$`}</span>
          </div>

          <p>
            Here {`$\\omega_k = vk$`} is the mode frequency. The wave speed is{' '}
            {`$v = \\sqrt{Y/\\mu}$`}, where {`$Y$`} is the elastic stiffness of the field (also set
            in the continuum-limit material). The phase-space trajectory is an ellipse, with{' '}
            {`$E_k$`} the energy stored in mode {`$\\mathbf{k}$`}:
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{p_{\\mathbf{k}}^2}{\\mu} + \\mu\\omega_k^2 q_{\\mathbf{k}}^2 = 2E_k = \\text{const}$$`}</span>
          </div>

          <FieldPhasePortrait />

          <CanonicalFlowCircle />

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">Why is this true?</span>
            <p>
              The Fourier transform diagonalizes the field Hamiltonian: after the transformation, no
              two different modes couple. This is exactly like normal-mode analysis for coupled
              oscillators: a suitable coordinate change turns {`$N$`} coupled oscillators into{' '}
              {`$N$`} independent ones. The field is a collection of infinitely many independent
              harmonic oscillators, one per wave vector {`$\\mathbf{k}$`}.
            </p>
          </div>

          <h3>The Bridge to Quantum Field Theory</h3>

          <p>
            We have come almost full circle. The lesson began with a discrete set of coordinates and
            momenta. The continuum limit gave us field mechanics. The Fourier decomposition returns
            us to a countably infinite discrete set{' '}
            {`$\\{q_{\\mathbf{k}}(t), p_{\\mathbf{k}}(t)\\}$`}.
          </p>

          <p>
            This structure is the direct starting point for quantum field theory. The pairs{' '}
            {`$(q_{\\mathbf{k}}, p_{\\mathbf{k}})$`} are the canonical coordinates and momenta that
            get quantized. Because {`$\\int \\pi\\dot{\\eta}\\,dV = \\sum_k p_k \\dot{q}_k$`} (shown
            above), each {`$p_k$`} is the canonical conjugate of {`$q_k$`}. So they carry the same
            discrete Poisson bracket as any canonical pair:{' '}
            {`$\\{q_{\\mathbf{k}}, p_{\\mathbf{k}'}\\} = \\delta_{\\mathbf{k}\\mathbf{k}'}$`}, with
            the bracket itself defined in the part-iii Poisson-bracket material. Quantization
            promotes that bracket to a commutator by the rule{' '}
            {`$\\{\\,,\\,\\} \\to (1/i\\hbar)[\\,,\\,]$`}:
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$[\\hat{q}_{\\mathbf{k}}, \\hat{p}_{\\mathbf{k}'}] = i\\hbar\\,\\delta_{\\mathbf{k}\\mathbf{k}'}$$`}</span>
          </div>

          <p>
            Each mode then becomes one quantum harmonic oscillator. The whole apparatus of quantum
            field theory (occupation numbers, particle states, creation and annihilation operators)
            grows out of this one step, which a later quantum course builds in full.
          </p>
        </>,

        // SECTION 8: TABLE 13.1
        <>
          <h2>Symplectic Structure versus Minkowski Metric</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">Predict</span>
            <p>
              Phase space and Minkowski spacetime are both 4-dimensional manifolds. What do you
              expect them to share structurally? Where do you expect them to differ?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Both have a bilinear structure (a "metric") that defines distances or conjugate
                pairs. The difference: Minkowski's structure is symmetric (a metric) while
                Hamiltonian phase space has an antisymmetric structure (the symplectic form{' '}
                {`$\\Theta$`}). One measures lengths; the other measures "area" in phase space.
              </p>
            </details>
          </div>

          <p>
            The symplectic form is built from the wedge product {`$dp \\wedge dq$`}. The wedge is
            antisymmetric: {`$dp \\wedge dq = -dq \\wedge dp$`}. So it measures signed (oriented)
            area, not length. The full reference table sits in the lookup mode. The one contrast
            worth fixing in mind: phase space carries an <strong>antisymmetric</strong> structure
            (the symplectic form {`$\\Theta = dp_1 \\wedge dq^1 + dp_2 \\wedge dq^2$`}), while
            Minkowski spacetime carries a <strong>symmetric</strong> one (the metric {`$ds^2$`}).
            One measures oriented area in phase space. The other measures spacetime intervals.
          </p>

          <p>
            That antisymmetry is exactly what Hamilton's equations encode:{' '}
            {`$\\dot{q} = +\\partial H/\\partial p$`} carries a plus sign and{' '}
            {`$\\dot{p} = -\\partial H/\\partial q$`} carries a minus sign. Swap the roles of{' '}
            {`$q$`} and {`$p$`} and the sign flips, which is the defining property of a 2-form. The
            symplectic structure is owned and built up in the part-iii Hamiltonian material, where
            the same 2-form drives Liouville's theorem: Hamiltonian flow preserves phase-space area.
          </p>

          <SymplecticVsMinkowski />

          <p>
            Antisymmetry is not just abstract bookkeeping. The same idea governs how a field carries
            angular momentum. Split the stress tensor {`$T^{ij}$`} into a symmetric and an
            antisymmetric part. The symmetric part transports linear momentum. The antisymmetric
            part is what changes the angular momentum of a small fluid element:{' '}
            {`$dM/dt \\propto T^{21} - T^{12}$`}. When the two shear stresses match, the element
            feels no internal torque and its spin stays fixed. Make them unequal and it spins up.
          </p>

          <StressTensorTorque />
        </>
      ]
    },

    practice: [
      {
        q: `What is the momentum density $\\pi$ for a 1D field, and how does it arise from the discrete canonical momentum $p_i$?`,
        a: `The momentum density is $\\pi = \\lim_{a\\to 0} p_i/a = \\partial\\mathcal{L}/\\partial\\dot{\\eta}$. Each discrete momentum $p_i = a\\partial\\mathcal{L}/\\partial\\dot{\\eta}_i$ goes to zero as $a\\to 0$, but the ratio $p_i/a$ stays finite. It equals the derivative of the Lagrangian density with respect to the field velocity. This is the field analog of $p = \\partial L/\\partial\\dot{q}$ in discrete mechanics.`
      },
      {
        q: `Write the Hamiltonian density $\\mathcal{H}$ for a 1D field. State what variables it depends on.`,
        a: `The Hamiltonian density is $\\mathcal{H} = \\pi\\dot{\\eta} - \\mathcal{L}$, so the total Hamiltonian is $H = \\int \\mathcal{H}\\,dx$. It depends on $\\eta$, $\\eta_{,i}$ (spatial gradients of the field), and $\\pi$ (the momentum density). It does not depend on $\\pi_{,i}$ (spatial gradients of the momentum density). This asymmetry between field and momentum gradients is a key structural feature.`
      },
      {
        q: `Derive the first canonical field equation $\\dot{\\eta}_\\rho = \\partial\\mathcal{H}/\\partial\\pi^\\rho$ from $\\mathcal{H} = \\pi^\\rho\\dot{\\eta}_\\rho - \\mathcal{L}$.`,
        a: `Differentiate $\\mathcal{H}$ with respect to $\\pi^\\rho$: $\\partial\\mathcal{H}/\\partial\\pi^\\rho = \\dot{\\eta}_\\rho + \\pi^\\lambda(\\partial\\dot{\\eta}_\\lambda/\\partial\\pi^\\rho) - (\\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\lambda)(\\partial\\dot{\\eta}_\\lambda/\\partial\\pi^\\rho)$. The last two terms cancel because $\\pi^\\lambda = \\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\lambda$: they have the form $A\\cdot B - A\\cdot B = 0$. The result is $\\partial\\mathcal{H}/\\partial\\pi^\\rho = \\dot{\\eta}_\\rho$.`
      },
      {
        q: `State the compact canonical field equations using functional derivative notation. When does the functional derivative reduce to an ordinary partial derivative?`,
        a: `The canonical field equations are $\\dot{\\eta}_\\rho = \\delta\\mathcal{H}/\\delta\\pi^\\rho$ and $\\dot{\\pi}^\\rho = -\\delta\\mathcal{H}/\\delta\\eta_\\rho$, where $\\delta/\\delta\\psi \\equiv \\partial/\\partial\\psi - (d/dx^i)(\\partial/\\partial\\psi_{,i})$. For the first equation, since $\\mathcal{H}$ does not depend on $\\pi^\\rho_{,i}$, the functional derivative reduces to an ordinary partial derivative. For the second equation, both terms are needed because $\\mathcal{H}$ depends on $\\eta_{\\rho,i}$.`
      },
      {
        q: `Predict: For a field $\\eta$ with Lagrangian density $\\mathcal{L} = \\frac{1}{2}(\\mu\\dot{\\eta}^2 - Y\\eta_{,x}^2)$, compute the momentum density $\\pi$ and Hamiltonian density $\\mathcal{H}$.`,
        a: `First find momentum density: $\\pi = \\partial\\mathcal{L}/\\partial\\dot{\\eta} = \\mu\\dot{\\eta}$. So $\\dot{\\eta} = \\pi/\\mu$. Then substitute into the Legendre transform: $\\mathcal{H} = \\pi\\dot{\\eta} - \\mathcal{L} = \\pi(\\pi/\\mu) - \\frac{1}{2}(\\mu(\\pi/\\mu)^2 - Y\\eta_{,x}^2) = \\frac{\\pi^2}{2\\mu} + \\frac{Y}{2}\\eta_{,x}^2$. The first term is kinetic energy density (from $\\pi$) and the second is elastic energy density (from strain $\\eta_{,x}$). They encode momentum and deformation separately.`
      },
      {
        q: `Predict: For a single Fourier mode $(q_k, p_k)$ of a free elastic field with $\\omega_k = vk$, what shape does the phase portrait take, and what quantity is conserved along the orbit?`,
        a: `The phase portrait is an ellipse: $p_k^2/\\mu + \\mu\\omega_k^2 q_k^2 = 2E_k$. The conserved quantity along each orbit is the mode energy $E_k = H_k = $ constant. Physically, each Fourier mode is an independent harmonic oscillator. Energy stays fixed because there is no coupling between modes. The ratio of the ellipse axes is $\\sqrt{\\mu}/\\sqrt{\\mu\\omega_k^2} = 1/\\omega_k$: faster modes have a more elongated orbit in the $p_k$ direction.`
      },
      {
        q: `Transfer: In discrete mechanics, a cyclic coordinate $q_i$ (absent from $L$) gives constant $p_i$. What is the field analog? Give the conserved quantity explicitly.`,
        a: `If $\\mathcal{L}$ does not contain $\\eta_\\rho$ explicitly, the Lagrange equation becomes a conservation law: $\\dot{\\pi}^\\rho + (d/dx^i)(\\partial\\mathcal{L}/\\partial\\eta_{\\rho,i}) = 0$. This is a local conservation equation (divergence form). Integrating over all space and using the divergence theorem (field vanishes at infinity), the total charge $\\Pi^\\rho = \\int dV\\,\\pi^\\rho(x^i, t)$ is conserved. This is the field version of the conserved momentum for a cyclic coordinate.`
      },
      {
        q: `Why is the Hamiltonian approach less suited than the Lagrangian for relativistic field theories?`,
        a: `The Hamiltonian approach must invert $\\pi^\\rho = \\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\rho$ to express $\\dot{\\eta}_\\rho$ in terms of $\\pi^\\rho$. This step singles out the time derivative and treats it differently from spatial derivatives. Lorentz covariance requires treating time and space symmetrically (they mix under boosts). The Lagrangian density $\\mathcal{L}(\\eta_{\\rho,\\mu})$ depends on all four derivatives equally, making it a Lorentz scalar. The Hamiltonian formulation breaks this symmetry.`
      },
      {
        q: `Transfer: The functional derivative is $\\delta/\\delta\\psi = \\partial/\\partial\\psi - (d/dx^i)(\\partial/\\partial\\psi_{,i})$. Apply it to $\\mathcal{H} = \\pi^2/(2\\mu) + (Y/2)\\eta_{,x}^2$ for a 1D elastic field.`,
        a: `For $\\delta\\mathcal{H}/\\delta\\pi$: $\\mathcal{H}$ does not depend on $\\pi_{,x}$, so $\\delta\\mathcal{H}/\\delta\\pi = \\partial\\mathcal{H}/\\partial\\pi = \\pi/\\mu = \\dot{\\eta}$. This is the first canonical equation. For $\\delta\\mathcal{H}/\\delta\\eta$: $\\partial\\mathcal{H}/\\partial\\eta = 0$ (no explicit $\\eta$) and $-(d/dx)(\\partial\\mathcal{H}/\\partial\\eta_{,x}) = -(d/dx)(Y\\eta_{,x}) = -Y\\eta_{,xx}$. So $\\dot{\\pi} = Y\\eta_{,xx}$, which combined with $\\dot{\\eta} = \\pi/\\mu$ gives the wave equation $\\mu\\ddot{\\eta} = Y\\eta_{,xx}$.`
      },
      {
        q: `Elaborate: The Hamiltonian density $\\mathcal{H}$ is not a function of $\\pi^\\rho_{,i}$. Why not? What does this say about the Legendre transform?`,
        a: `The Legendre transform swaps $\\dot{\\eta}_\\rho$ for $\\pi^\\rho = \\partial\\mathcal{L}/\\partial\\dot{\\eta}_\\rho$. The Lagrangian density $\\mathcal{L}$ depends on $\\eta_{\\rho,i}$ (spatial gradients of the field) because elastic energy involves strain. But $\\mathcal{L}$ never depends on $\\dot{\\eta}_{\\rho,i}$ (time derivatives of spatial gradients), so its Legendre transform $\\mathcal{H}$ inherits no $\\pi^\\rho_{,i}$ dependence. The Legendre transform only exchanges velocities for momenta; it does not touch spatial structure.`
      },
      {
        q: `Write the Fourier sine expansion for displacement $\\eta(x,t)$ of an elastic rod of length $L$ with rigid-wall boundary conditions.`,
        a: `The expansion is $\\eta(x,t) = \\sum_{n=0}^\\infty q_n(t)\\sin(2\\pi n(x-x^1)/(2L))$, where $x^1$ is the left wall position. The boundary condition $\\eta = 0$ at $x = x^1$ and $x = x^2 = x^1 + L$ selects the sine basis (not cosines). Each $q_n(t)$ is a time-dependent amplitude: the generalized coordinate for mode $n$. The discrete mode number $n$ now replaces the continuous spatial index $x$.`
      },
      {
        q: `Self-explain: The 3D Fourier expansion uses $e^{+ik\\cdot r}$ for $\\eta$ but $e^{-ik\\cdot r}$ for $\\pi$. Show that this makes $p_k$ the canonical conjugate to $q_k$.`,
        a: `Compute $\\int\\pi\\dot{\\eta}\\,dV = V^{-1}\\sum_{k,k'}p_k\\dot{q}_{k'}\\int e^{-ik\\cdot r}e^{ik'\\cdot r}\\,dV = V^{-1}\\sum_{k,k'}p_k\\dot{q}_{k'}\\cdot V\\delta_{kk'} = \\sum_k p_k\\dot{q}_k$. This is exactly the discrete sum $\\sum_k p_k\\dot{q}_k$ that appears in the Legendre transform. So $p_k$ and $q_k$ are canonical pairs: $p_k = \\partial H/\\partial\\dot{q}_k$.`
      },
      {
        q: `What are the reality conditions on $q_k$ and $p_k$, and why are they constraints rather than independent conditions?`,
        a: `For a real field $\\eta$: $q_k^* = q_{-k}$. For a real momentum density $\\pi$: $p_k^* = p_{-k}$. These follow from taking the complex conjugate of each Fourier expansion and using the reality of $\\eta$ and $\\pi$. They are constraints because $q_k$ and $q_{-k}$ are not independent: knowing one determines the other. The number of independent real degrees of freedom is half the number of complex Fourier coefficients.`
      },
      {
        q: `Error detection: A student writes the second canonical field equation as $\\dot{\\pi}^\\rho = -\\partial\\mathcal{H}/\\partial\\eta_\\rho$. What is missing?`,
        a: `The student forgot the spatial-derivative term. The correct equation is $\\dot{\\pi}^\\rho = -(\\partial\\mathcal{H}/\\partial\\eta_\\rho - (d/dx^i)(\\partial\\mathcal{H}/\\partial\\eta_{\\rho,i})) = -\\delta\\mathcal{H}/\\delta\\eta_\\rho$. The missing term $(d/dx^i)(\\partial\\mathcal{H}/\\partial\\eta_{\\rho,i})$ comes from the fact that $\\mathcal{H}$ depends on the spatial gradient $\\eta_{\\rho,i}$. Omitting it gives wrong equations of motion for any field with spatial coupling (like an elastic field with strain energy).`
      },
      {
        q: `Compare the Hamiltonian symplectic form $\\Theta = dp_1\\wedge dq^1 + dp_2\\wedge dq^2$ with the Minkowski metric $ds^2$. What is the key structural difference?`,
        a: `The symplectic form $\\Theta$ is antisymmetric: swapping $p_1$ and $q^1$ changes its sign ($dp_1\\wedge dq^1 = -dq^1\\wedge dp_1$). It measures oriented area in phase space. The Minkowski metric $ds^2$ is symmetric: swapping its arguments leaves it unchanged. It measures spacetime intervals. Both are bilinear forms on a 4-dimensional manifold, but one encodes Hamiltonian structure (symplectic) and the other encodes causal structure (Lorentzian metric).`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Hamiltonian Formulation of Field Theories',
      sections: [
        <>
          <h2>Key Formulas</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Field Euler-Lagrange equation</div>
            <div className="ref-formula-eq">{`$$\\frac{d}{dx^\\mu}\\frac{\\partial\\mathcal{L}}{\\partial\\eta_{\\rho,\\mu}} - \\frac{\\partial\\mathcal{L}}{\\partial\\eta_\\rho} = 0$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> The field equation of motion from the Lagrangian
                  density. One equation per field component {`$\\rho$`}. The index {`$\\mu$`} sums
                  over time and space. The Hamiltonian derivation feeds this in to fix{' '}
                  {`$\\partial\\mathcal{L}/\\partial\\eta_\\rho$`}.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Momentum density (continuum limit)</div>
            <div className="ref-formula-eq">{`$$\\pi = \\lim_{a\\to 0}\\frac{p_i}{a} = \\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}}$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Defining the canonical conjugate to the field{' '}
                  {`$\\eta(x)$`}. The individual momenta {`$p_i \\to 0$`} but their density
                  survives.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Hamiltonian density</div>
            <div className="ref-formula-eq">{`$$\\mathcal{H} = \\pi\\dot{\\eta} - \\mathcal{L}, \\qquad H = \\int\\mathcal{H}\\,dV$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Setting up Hamiltonian field mechanics. Depends on{' '}
                  {`$\\eta_\\rho$`}, {`$\\eta_{\\rho,i}$`}, and {`$\\pi_\\rho$`}, but NOT on{' '}
                  {`$\\pi_{\\rho,i}$`}.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">3D momentum density</div>
            <div className="ref-formula-eq">{`$$\\pi^\\rho(x^\\mu) = \\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}_\\rho}$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Multi-component fields. One momentum density for
                  each field component {`$\\rho$`}.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Cyclic field conservation</div>
            <div className="ref-formula-eq">{`$$\\Pi^\\rho = \\int dV\\,\\pi^\\rho(x^i, t) = \\text{const when } \\eta_\\rho \\text{ cyclic}$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> When the Lagrangian density does not contain{' '}
                  {`$\\eta_\\rho$`} explicitly. The field-theoretic analog of the cyclic-coordinate
                  conserved momentum.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Functional derivative</div>
            <div className="ref-formula-eq">{`$$\\frac{\\delta}{\\delta\\psi} \\equiv \\frac{\\partial}{\\partial\\psi} - \\frac{d}{dx^i}\\frac{\\partial}{\\partial\\psi_{,i}}$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Packaging the spatial-gradient contribution into a
                  single operator. Allows the canonical field equations to look exactly like
                  discrete Hamilton's equations.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Canonical field equations (compact)</div>
            <div className="ref-formula-eq">{`$$\\dot{\\eta}_\\rho = \\frac{\\delta\\mathcal{H}}{\\delta\\pi^\\rho}, \\qquad \\dot{\\pi}^\\rho = -\\frac{\\delta\\mathcal{H}}{\\delta\\eta_\\rho}$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Deriving field equations of motion from a
                  Hamiltonian density. Reduce to Euler-Lagrange equations when combined.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Canonical field equations (explicit)</div>
            <div className="ref-formula-eq">{`$$\\dot{\\eta}_\\rho = \\frac{\\partial\\mathcal{H}}{\\partial\\pi^\\rho}, \\qquad \\frac{\\partial\\mathcal{H}}{\\partial\\eta_\\rho} - \\frac{d}{dx^i}\\frac{\\partial\\mathcal{H}}{\\partial\\eta_{\\rho,i}} = -\\dot{\\pi}^\\rho$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> When you need to expand the functional derivative
                  explicitly. The second equation has two terms because {`$\\mathcal{H}$`} depends
                  on both {`$\\eta_\\rho$`} and {`$\\eta_{\\rho,i}$`}.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">
              Lagrange field equations (functional-derivative form)
            </div>
            <div className="ref-formula-eq">{`$$\\frac{d}{dt}\\frac{\\partial\\mathcal{L}}{\\partial\\dot{\\eta}_\\rho} - \\frac{\\delta\\mathcal{L}}{\\delta\\eta_\\rho} = 0$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Field equations of motion from the Lagrangian side.
                  Formally parallel to the discrete Euler-Lagrange equation.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Phase-portrait ellipse (free Fourier mode)</div>
            <div className="ref-formula-eq">{`$$\\frac{p_k^2}{\\mu} + \\mu\\omega_k^2 q_k^2 = 2E_k$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Describing the trajectory of a single Fourier mode{' '}
                  {`$(q_k, p_k)$`} in its phase plane. Each mode is a harmonic oscillator at
                  frequency {`$\\omega_k$`}. The orbit is an ellipse whose area is proportional to{' '}
                  {`$E_k/\\omega_k$`}: preserved by Hamiltonian flow (Liouville).
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">QFT canonical commutator (after quantization)</div>
            <div className="ref-formula-eq">{`$$[\\hat{q}_{\\mathbf{k}},\\, \\hat{p}_{\\mathbf{k}'}] = i\\hbar\\,\\delta_{\\mathbf{k}\\mathbf{k}'}$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Promoting the classical Poisson bracket{' '}
                  {`$\\{q_k, p_{k'}\\} = \\delta_{kk'}$`} to a quantum commutator. This is canonical
                  quantization applied to field modes. Each mode becomes an independent quantum
                  harmonic oscillator with this commutation relation.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <h2>Fourier Decomposition</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Fourier sine series (elastic rod, rigid walls)</div>
            <div className="ref-formula-eq">{`$$\\eta(x,t) = \\sum_{n=0}^\\infty q_n(t)\\sin\\!\\left(\\frac{2\\pi n(x-x^1)}{2L}\\right)$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Replacing the continuous field index {`$x$`} with a
                  discrete mode number {`$n$`} for a finite rod of length {`$L$`} with{' '}
                  {`$\\eta = 0$`} at both ends.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">3D complex Fourier expansion</div>
            <div className="ref-formula-eq">{`$$\\eta(\\mathbf{r}, t) = V^{-1/2}\\sum_{\\mathbf{k}} q_{\\mathbf{k}}(t)\\,e^{i\\mathbf{k}\\cdot\\mathbf{r}}, \\quad q_{\\mathbf{k}}^* = q_{-\\mathbf{k}}$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Expanding a real field in plane waves in a box of
                  volume {`$V$`}. Reality requires {`$q_k^* = q_{-k}$`}.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Fourier coefficients (extraction)</div>
            <div className="ref-formula-eq">{`$$q_{\\mathbf{k}}(t) = V^{-1/2}\\int e^{-i\\mathbf{k}\\cdot\\mathbf{r}}\\,\\eta(\\mathbf{r}, t)\\,dV$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Extracting individual mode amplitudes from the
                  field. Follows from the orthogonality relation{' '}
                  {`$(1/V)\\int e^{i(k-k')\\cdot r}\\,dV = \\delta_{kk'}$`}.
                </p>
              </div>
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Fourier expansion of momentum density</div>
            <div className="ref-formula-eq">{`$$\\pi(\\mathbf{r}, t) = V^{-1/2}\\sum_{\\mathbf{k}} p_{\\mathbf{k}}(t)\\,e^{-i\\mathbf{k}\\cdot\\mathbf{r}}, \\quad p_{\\mathbf{k}}^* = p_{-\\mathbf{k}}$$`}</div>
            <div className="ref-formula-desc">
              <div>
                <p>
                  <strong>When to use:</strong> Conjugate expansion to the field. Sign in the
                  exponent is opposite so that {`$p_k$`} is the canonical conjugate of {`$q_k$`}.
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <h2>Symplectic Structure vs. Minkowski Metric</h2>

          <table>
            <thead>
              <tr>
                <th>Comparison</th>
                <th>Hamiltonian symplectic structure</th>
                <th>Minkowski spacetime metric</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Canonical coordinates</td>
                <td>{`$q^1, q^2, p_1, p_2$`}</td>
                <td>{`$ct, x, y, z$`}</td>
              </tr>
              <tr>
                <td>Canonical structure</td>
                <td>{`$\\Theta = dp_1\\wedge dq^1 + dp_2\\wedge dq^2$`}</td>
                <td>{`$ds^2 = c^2 dt\\otimes dt - dx\\otimes dx - dy\\otimes dy - dz\\otimes dz$`}</td>
              </tr>
              <tr>
                <td>Nature of "metric"</td>
                <td>Antisymmetric</td>
                <td>Symmetric</td>
              </tr>
              <tr>
                <td>Name for structure</td>
                <td>Canonically conjugate coordinates</td>
                <td>Lorentz coordinates</td>
              </tr>
              <tr>
                <td>Field equations</td>
                <td>{`$d\\Theta = 0$`} (automatic)</td>
                <td>{`$R_{\\alpha\\beta\\gamma\\delta} = 0$`}: flat</td>
              </tr>
              <tr>
                <td>4-dimensional manifold</td>
                <td>Phase space</td>
                <td>Spacetime</td>
              </tr>
              <tr>
                <td>Coordinate-free</td>
                <td>{`$d\\Theta = 0$`}</td>
                <td>Riemann = 0</td>
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
