import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  NsCouetteFlow,
  NsPoiseuilleFlow,
  NsStrainRateDecomp,
  NsReynoldsRegimes,
  NsStokesDrag,
  NsBlasiusLayer,
  NsKolmogorovSpectrum
} from '../../../../../components/viz'

export default function NavierStokes() {
  const config = {
    cssPrefix: 'ns',
    documentTitle: 'Viscous Fluids: Navier-Stokes and Turbulence - AETHER',
    learning: {
      category: 'Module 6',
      groupTitle: 'Continuum and Field-Theoretic Mechanics',
      title: 'Viscous Fluids: Navier-Stokes and Turbulence',
      subtitle:
        'Viscosity resists shear between fluid layers. The Navier-Stokes equation governs all viscous flow. The Reynolds number determines whether that flow stays smooth or turns turbulent.',
      sections: [
        <>
          <h2>What This Topic Is About</h2>
          <p>
            Fluids are all around you. Water flows through your arteries. Air rushes over an
            airplane wing. Smoke curls from a candle. All of these share one fact: real fluids are
            not frictionless. They resist being sheared. That resistance is called viscosity. This
            topic builds from first principles. It covers what a fluid is, how it moves, and why
            viscosity changes everything from blood pressure to airplane design.
          </p>
        </>,

        <>
          <h2>Foundations You Need</h2>
          <p>
            You already met ideal (frictionless) fluids. This topic adds the one thing they leave
            out: viscosity. Before that, here is the ideal-fluid toolkit in brief, each idea stated
            in one line so you can build straight on it.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>The continuum picture.</strong> You treat the fluid as smooth, not as
              countless molecules, and track three averaged fields at each point: density{' '}
              {`$\\rho$`}, pressure {`$P$`}, and velocity {`$\\mathbf{v}$`}. An equation of state{' '}
              {`$P = P(\\rho, s)$`} ties pressure to density and specific entropy {`$s$`} (the
              entropy per unit mass).
            </li>
            <li>
              <strong>Hydrostatics.</strong> A still fluid balances gravity,{' '}
              {`$\\nabla P = \\rho\\mathbf{g}$`}, where {`$\\mathbf{g}$`} is the gravitational
              acceleration ({`$9.8$`} {`$\\frac{\\text{m}}{\\text{s}^2}$`} at Earth's surface).
              Buoyancy and Archimedes' principle follow from it.
            </li>
            <li>
              <strong>Mass conservation.</strong> Fluid cannot appear or vanish, so the continuity
              equation {`$\\partial\\rho/\\partial t + \\nabla\\cdot(\\rho\\mathbf{v}) = 0$`} holds.
            </li>
            <li>
              <strong>The Euler equation.</strong> For an ideal fluid, momentum obeys{' '}
              {`$\\rho\\,d\\mathbf{v}/dt = -\\nabla P + \\rho\\mathbf{g}$`}. The convective
              derivative{' '}
              {`$\\frac{d}{dt} = \\frac{\\partial}{\\partial t} + \\mathbf{v}\\cdot\\nabla$`}{' '}
              follows a moving fluid parcel. Viscosity will add one more force to this equation.
            </li>
            <li>
              <strong>Bernoulli's theorem.</strong> Along an ideal streamline, faster flow means
              lower pressure. This is the frictionless baseline that viscosity then corrects.
            </li>
            <li>
              <strong>Vorticity.</strong> The local spin of the fluid,{' '}
              {`$\\boldsymbol{\\omega} = \\nabla\\times\\mathbf{v}$`}. In an ideal fluid its lines
              are frozen in and move with the fluid like dye threads. Viscosity breaks that lock: it
              lets vorticity diffuse, which is central to everything ahead.
            </li>
            <li>
              <strong>Incompressibility.</strong> When the flow speed is far below the sound speed{' '}
              {`$C$`} (the speed at which pressure waves travel), density barely changes and{' '}
              {`$\\nabla\\cdot\\mathbf{v}\\approx 0$`}. Nearly all engineering and biological flows
              meet this condition, and this whole topic assumes it.
            </li>
          </ul>
          <p>
            With that baseline set, here is what viscosity changes. This compare is the heart of the
            topic, so study the viscous column closely.
          </p>

          <h3>Ideal vs Viscous Fluids</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <strong>Ideal fluid</strong>
              <ul className="lrn-list">
                <li>
                  No viscous stress, no energy loss, entropy conserved, free slip along walls.
                </li>
              </ul>
            </div>
            <div className="lrn-compare-col">
              <strong>Viscous fluid</strong>
              <ul className="lrn-list">
                <li>Resists shearing. Dissipates energy as heat.</li>
                <li>Produces entropy, so its flow is never reversible.</li>
                <li>Cannot slip at a solid wall. Velocity is exactly zero at walls.</li>
              </ul>
            </div>
          </div>
        </>,

        <>
          <h2>Part I: Viscosity, the Fundamental Mechanism</h2>

          <h3>Breaking Down the Velocity Gradient</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Imagine fluid moving horizontally, faster near the top and slower near the bottom.
              What kinds of motion can a tiny cube of this fluid undergo?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The cube can swell or shrink (expansion), change shape without rotating (shear), or
                spin as a rigid body (rotation). The velocity gradient captures all three at once.
              </p>
            </details>
          </div>
          <p>
            When fluid flows, nearby fluid elements move at different velocities. The velocity
            gradient {`$\\nabla\\mathbf{v}$`} captures all of this. It is a tensor (a matrix of
            derivatives). It breaks into three simpler pieces:
          </p>
          <p>
            A few index conventions make the formulas below compact. The notation {`$v_{i;j}$`} is
            the derivative of the {`$i$`}-th velocity component along direction {`$j$`} (in ordinary
            Cartesian coordinates it is just {`$\\partial v_i/\\partial x_j$`}). A repeated index in
            one term means you sum over it. The symbol {`$\\varepsilon_{ijk}$`} is the Levi-Civita
            symbol: {`$+1$`} for an even reordering of {`$123$`}, {`$-1$`} for an odd one, and{' '}
            {`$0$`} if any two indices match. Here {`$\\mathbf{g}$`} is the metric tensor (the
            identity matrix in ordinary coordinates), not gravity.
          </p>
          <div className="lrn-eq">
            {`$$\\nabla\\mathbf{v} = \\frac{1}{3}\\theta\\mathbf{g} + \\boldsymbol{\\sigma} + \\mathbf{r}$$`}
          </div>
          <p>Each piece describes a different kind of motion:</p>
          <ol className="lrn-list">
            <li>
              <strong>Expansion</strong> {`$\\theta = \\nabla\\cdot\\mathbf{v}$`}: the fluid element
              swells or shrinks uniformly in all directions. For incompressible flow,{' '}
              {`$\\theta = 0$`}.
            </li>
            <li>
              <strong>Rate-of-shear tensor</strong> {`$\\boldsymbol{\\sigma}$`}: the symmetric,
              trace-free part of {`$\\nabla\\mathbf{v}$`}:
              <div className="lrn-eq">{`$$\\sigma_{ij} = \\frac{1}{2}(v_{i;j} + v_{j;i}) - \\frac{1}{3}\\theta g_{ij}$$`}</div>
              This describes shape-changing deformation without rotation.
            </li>
            <li>
              <strong>Rate-of-rotation tensor</strong> {`$\\mathbf{r}$`}: the antisymmetric part:
              <div className="lrn-eq">{`$$r_{ij} = \\frac{1}{2}(v_{i;j} - v_{j;i}) = -\\frac{1}{2}\\varepsilon_{ijk}\\omega^k$$`}</div>
              This is pure rotation, connected directly to vorticity {`$\\boldsymbol{\\omega}$`}.
            </li>
          </ol>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the rotation part carry no viscous stress?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Rotation moves the whole fluid element together. It does not stretch or shear the
                fluid internally. Viscous stress only appears when adjacent layers slide against
                each other, which is what {`$\\boldsymbol{\\sigma}$`} captures.
              </p>
            </details>
          </div>
          <div>
            <NsStrainRateDecomp />
          </div>
          <p>
            This is the same three-way split that a deforming solid obeys. There the displacement
            gradient breaks into expansion, rotation, and shear, and elastic stress depends only on
            expansion and shear. A fluid works the same way, with one change: stress responds to the{' '}
            <em>rate</em> of deformation, not the deformation itself. So the moving fluid's{' '}
            {`$\\theta$`} and {`$\\boldsymbol{\\sigma}$`} play the roles that volume strain and
            shape strain play in an elastic solid.
          </p>

          <h3>The Viscous Stress Tensor</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If viscous stress only resists shear and expansion, write down what the stress tensor
              must look like.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It must be a linear combination of {`$\\theta$`} (expansion) and{' '}
                {`$\\boldsymbol{\\sigma}$`} (shear), with one positive coefficient each. The
                rotation part carries no stress.
              </p>
            </details>
          </div>
          <p>
            Viscosity converts velocity gradients into forces. A Newtonian fluid is one whose shear
            stress stays strictly proportional to the rate-of-shear (water and air behave this way).
            The viscous stress tensor is:
          </p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\mathbf{T}_\\text{vis} = -\\zeta\\theta\\mathbf{g} - 2\\eta\\boldsymbol{\\sigma}$$`}
          </div>
          <p>
            This is the exact fluid twin of the elastic stress law{' '}
            {`$\\mathbf{T} = -K\\Theta\\mathbf{g} - 2\\mu\\boldsymbol{\\Sigma}$`}. Bulk viscosity{' '}
            {`$\\zeta$`} stands where the bulk modulus {`$K$`} stood, shear viscosity {`$\\eta$`}{' '}
            where the shear modulus {`$\\mu$`} stood. The one difference: the solid law uses strains
            (how far it has deformed), the fluid law uses strain rates (how fast it is deforming).
            Two constants appear here.
          </p>
          <p>
            <strong>Shear viscosity {`$\\eta$`}</strong> (also called dynamic viscosity) resists the
            shear tensor {`$\\boldsymbol{\\sigma}$`}. When adjacent layers of fluid slide against
            each other, {`$\\eta$`} sets how hard they resist. Units: Pa{`$\\cdot$`}s. For water at
            room temperature, {`$\\eta \\approx 10^{-3}$`} Pa{`$\\cdot$`}s. For air,{' '}
            {`$\\eta \\approx 2\\times10^{-5}$`} Pa{`$\\cdot$`}s.
          </p>
          <p>
            <strong>Bulk viscosity {`$\\zeta$`}</strong> resists the expansion rate {`$\\theta$`}.
            It matters only when the fluid is being compressed or expanded. For incompressible flows
            ({`$\\theta = 0$`}), it drops out entirely.
          </p>
          <p>
            The simplest concrete case: drag the top of a fluid layer at speed {`$U$`} while the
            bottom sits still on a wall a gap {`$h$`} below. The shear stress is just{' '}
            {`$\\eta\\,U/h$`}, viscosity times velocity difference over gap. Part III works this
            two-plate setup out in full.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <strong>Shear viscosity {`$\\eta$`}</strong>
              <p>
                Resists shape-changing shear. Acts when adjacent layers slide. Measured in Pa
                {`$\\cdot$`}s.
              </p>
            </div>
            <div className="lrn-compare-col">
              <strong>Bulk viscosity {`$\\zeta$`}</strong>
              <p>
                Resists volume-changing compression. Vanishes for incompressible flow (
                {`$\\theta=0$`}).
              </p>
            </div>
          </div>
          <p>
            <strong>Kinematic viscosity</strong> {`$\\nu \\equiv \\frac{\\eta}{\\rho}$`} has units
            of {`$\\frac{\\text{m}^2}{\\text{s}}$`}. It appears most naturally in the Navier-Stokes
            equation. Typical values:
          </p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Fluid</th>
                  <th>
                    {`$\\nu$`} ({`$\\frac{\\text{m}^2}{\\text{s}}$`})
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Water (20°C)</td>
                  <td>{`$10^{-6}$`}</td>
                </tr>
                <tr>
                  <td>Blood</td>
                  <td>{`$3\\times10^{-6}$`}</td>
                </tr>
                <tr>
                  <td>Air (20°C)</td>
                  <td>{`$10^{-5}$`}</td>
                </tr>
                <tr>
                  <td>Glycerine</td>
                  <td>{`$10^{-3}$`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <strong>Kinematic viscosity {`$\\nu$`}</strong>
              <p>
                Appears in Navier-Stokes as the coefficient of {`$\\nabla^2\\mathbf{v}$`}. Easier to
                measure (falling sphere). Units: {`$\\frac{\\text{m}^2}{\\text{s}}$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <strong>Dynamic viscosity {`$\\eta$`}</strong>
              <p>
                The physical transport coefficient: momentum flux per unit rate-of-shear.{' '}
                {`$\\eta = \\rho\\nu$`}. Units: Pa{`$\\cdot$`}s.
              </p>
            </div>
          </div>
          <p>
            <strong>Newtonian vs non-Newtonian.</strong> Not every fluid keeps that constant
            proportion. Thixotropic fluids (like ketchup) soften over time at constant shear.
            Plastic fluids (like toothpaste) require a threshold stress before flowing. This topic
            focuses entirely on Newtonian fluids.
          </p>

          <h3>The Navier-Stokes Equation</h3>
          <p>
            <strong>When to use this:</strong> whenever you analyze the motion of a viscous
            Newtonian fluid at speeds below the sound speed.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              The Euler equation is{' '}
              {`$\\rho \\frac{d\\mathbf{v}}{dt} = -\\nabla P + \\rho\\mathbf{g}$`}. How do you think
              viscosity modifies this?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Viscosity adds a new force term proportional to velocity gradients. For
                incompressible flow with constant viscosity, this becomes{' '}
                {`$\\eta\\nabla^2\\mathbf{v}$`}.
              </p>
            </details>
          </div>
          <p>
            Adding viscosity modifies the momentum equation. The full derivation adds{' '}
            {`$\\mathbf{T}_\\text{vis}$`} to the stress tensor and takes its divergence.
          </p>
          <ol className="lrn-list">
            <li>
              Write momentum conservation including the full stress tensor:{' '}
              {`$$\\frac{\\partial(\\rho\\mathbf{v})}{\\partial t} + \\nabla\\cdot\\mathbf{T} = \\rho\\mathbf{g}$$`}
            </li>
            <li>
              The full stress tensor now includes pressure and viscous terms:{' '}
              {`$$\\mathbf{T} = P\\mathbf{g} + \\rho\\mathbf{v}\\otimes\\mathbf{v} + \\mathbf{T}_\\text{vis}$$`}
            </li>
            <li>
              Substitute{' '}
              {`$\\mathbf{T}_\\text{vis} = -\\zeta\\theta\\mathbf{g} - 2\\eta\\boldsymbol{\\sigma}$`}{' '}
              and take the divergence:{' '}
              {`$$\\rho\\frac{d\\mathbf{v}}{dt} = -\\nabla P + \\rho\\mathbf{g} + \\nabla(\\zeta\\theta) + 2\\nabla\\cdot(\\eta\\boldsymbol{\\sigma})$$`}{' '}
              This is the <strong>general Navier-Stokes equation</strong>.
            </li>
            <li>
              Take the incompressible limit: {`$\\theta = \\nabla\\cdot\\mathbf{v} = 0$`} and{' '}
              {`$\\eta$`} constant. The result is:
              <div className="lrn-eq lrn-eq-display">{`$$\\frac{d\\mathbf{v}}{dt} = -\\frac{\\nabla P}{\\rho} + \\mathbf{g} + \\nu\\nabla^2\\mathbf{v}$$`}</div>
              This is the <strong>incompressible Navier-Stokes equation</strong>. It is the central
              equation of viscous fluid dynamics.
            </li>
          </ol>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the incompressible limit simplify{' '}
              {`$2\\nabla\\cdot(\\eta\\boldsymbol{\\sigma})$`} to {`$\\eta\\nabla^2\\mathbf{v}$`}?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                When {`$\\theta = 0$`} and {`$\\eta$`} is constant, the shear tensor becomes{' '}
                {`$\\sigma_{ij} = \\frac{1}{2}(v_{i;j}+v_{j;i})$`} and its divergence gives{' '}
                {`$\\nabla^2\\mathbf{v}$`} by the vector identity for incompressible flow. The trace
                term vanishes because {`$\\theta = 0$`}.
              </p>
            </details>
          </div>

          <h3>Why Viscosity Comes From Molecules</h3>
          <p>
            <strong>When to use this:</strong> whenever you want to predict how viscosity depends on
            temperature from first principles.
          </p>
          <p>
            Viscosity is not a mysterious property. It arises from momentum transport by molecules
            bouncing between layers of fluid. Imagine fluid flowing to the right, faster near the
            top. A molecule from a fast layer drifts down by one mean free path {`$\\lambda$`}{' '}
            before colliding. It carries extra momentum from the fast layer to the slow layer. This
            momentum transfer creates a shear force.
          </p>
          <ol className="lrn-list">
            <li>
              A molecule has mass {`$m$`}, mean speed {`$v_\\text{th}$`} (thermal speed), and mean
              free path {`$\\lambda$`}.
            </li>
            <li>
              In one collision, it transfers momentum {`$\\sim m\\lambda \\sigma_{xy}$`} (velocity
              difference across one mean free path times mass).
            </li>
            <li>
              The flux of molecules crossing any horizontal surface (the number passing through per
              unit area per unit time) is {`$\\sim n v_\\text{th}$`}.
            </li>
            <li>
              The shear stress is momentum flux:{' '}
              {`$T_{xy} \\sim nm\\lambda v_\\text{th} \\sigma_{xy} = \\rho v_\\text{th}\\lambda \\sigma_{xy}$`}
              .
            </li>
            <li>
              Comparing with {`$T_\\text{vis} = -2\\eta\\sigma_{xy}$`}:{' '}
              {`$$\\eta \\approx \\frac{1}{3}\\rho v_\\text{th}\\lambda$$`}
            </li>
          </ol>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                For air: {`$v_\\text{th} \\approx 500$`} m/s, {`$\\lambda \\approx 60$`} nm,{' '}
                {`$\\rho \\approx 1.2$`} {`$\\frac{\\text{kg}}{\\text{m}^3}$`}. Then{' '}
                {`$\\eta \\approx \\frac{1}{3}(1.2)(500)(6\\times10^{-8}) \\approx 1.2\\times10^{-5}$`}{' '}
                Pa{`$\\cdot$`}s, giving {`$\\nu = \\frac{\\eta}{\\rho} \\approx 10^{-5}$`}{' '}
                {`$\\frac{\\text{m}^2}{\\text{s}}$`}. This matches the measured value.
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Given: molecules with mean speed {`$v_\\text{th}$`}, mean free path {`$\\lambda$`},
                density {`$\\rho$`}.
              </p>
              <ol className="lrn-list">
                <li>Write down the momentum flux (shear stress) across a horizontal surface.</li>
                <li>
                  Identify {`$\\eta$`} by comparing with {`$T_{xy} = -2\\eta\\sigma_{xy}$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                For liquid nitrogen at 77 K: {`$\\rho = 804$`} {`$\\frac{\\text{kg}}{\\text{m}^3}$`}
                , {`$v_\\text{th} \\approx 200$`} m/s, {`$\\lambda \\approx 0.1$`} nm. Estimate{' '}
                {`$\\eta$`} and compare with the measured value of{' '}
                {`$\\eta \\approx 1.5\\times10^{-4}$`} Pa{`$\\cdot$`}s.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              In a gas, {`$v_\\text{th} \\propto T^{1/2}$`} and {`$\\lambda$`} is roughly constant
              (at fixed pressure). So {`$\\eta \\propto T^{1/2}$`}: hotter gas is more viscous. In a
              liquid, molecules are close-packed. They do not bounce freely. Instead, they hop
              between neighbors. Higher temperature makes hopping easier, reducing resistance. So
              liquid viscosity falls with temperature. The two behaviors are opposite because the
              molecular mechanisms are different.
            </p>
          </div>

          <h3>Energy and Entropy Production</h3>
          <p>
            <strong>When to use this:</strong> whenever you need to show that viscosity dissipates
            energy or that the second law constrains viscosity to be positive.
          </p>
          <p>
            Real fluids dissipate energy. The Lagrangian entropy evolution equation (following a
            fluid parcel) is:
          </p>
          <div className="lrn-eq">
            {`$$T\\left[\\rho\\frac{ds}{dt} + \\nabla\\cdot\\left(\\frac{\\mathbf{F}_\\text{cond}}{T}\\right)\\right] = \\zeta\\theta^2 + 2\\eta\\boldsymbol{\\sigma}:\\boldsymbol{\\sigma} + \\frac{\\kappa}{T}(\\nabla T)^2$$`}
          </div>
          <p>
            Here {`$\\mathbf{F}_\\text{cond}$`} is the conductive heat flux (heat carried by
            conduction per unit area per unit time), {`$\\kappa$`} is the thermal conductivity (how
            readily the fluid conducts heat), and the double dot means full contraction:{' '}
            {`$\\boldsymbol{\\sigma}:\\boldsymbol{\\sigma} \\equiv \\sum_{ij}\\sigma_{ij}\\sigma_{ij}$`}
            , the sum of every component squared.
          </p>
          <p>
            The right side is the entropy production rate per unit volume. Each term is a perfect
            square times a positive coefficient. This proves {`$\\zeta \\geq 0$`},{' '}
            {`$\\eta \\geq 0$`}, and {`$\\kappa \\geq 0$`}: all three transport coefficients must be
            non-negative. A negative {`$\\eta$`} would mean the fluid spontaneously accelerates
            shear, violating the second law.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is the right side always positive?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Each term is a product of a transport coefficient ({`$\\eta$`}, {`$\\zeta$`}, or{' '}
                {`$\\kappa$`}) and a squared quantity (
                {`$\\boldsymbol{\\sigma}:\\boldsymbol{\\sigma}$`}, {`$\\theta^2$`}, or{' '}
                {`$(\\nabla T)^2$`}). Squares are always non-negative. So entropy production is
                always non-negative, satisfying the second law.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Part II: The Reynolds Number and Dynamical Similarity</h2>
          <p>
            <strong>When to use this:</strong> whenever you want to know whether a flow will be
            laminar or turbulent, or when you scale results from a model to a full-size system.
          </p>

          <h3>Scaling the Navier-Stokes Equation</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A large slow river and a tiny fast stream might flow in very similar patterns. What
              single number could capture this similarity?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The Reynolds number {`$Re = VL/\\nu$`}. Two flows at the same {`$Re$`} have
                identical scaled velocity fields, regardless of absolute size or speed.
              </p>
            </details>
          </div>
          <p>
            Scale velocity by {`$V$`} (a typical flow speed) and length by {`$L$`} (a typical size).
            The inertial term {`$(\\mathbf{v}\\cdot\\nabla)\\mathbf{v}$`} scales as {`$V^2/L$`}. The
            viscous term {`$\\nu\\nabla^2\\mathbf{v}$`} scales as {`$\\frac{\\nu V}{L^2}$`}. Their
            ratio is:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$Re = \\frac{VL}{\\nu}$$`}</div>
          <p>
            This is the <strong>Reynolds number</strong>. It is the single most important
            dimensionless number in fluid dynamics. For water ({`$\\nu = 10^{-6}$`}{' '}
            {`$\\frac{\\text{m}^2}{\\text{s}}$`}) flowing at 1 m/s through a 1 cm pipe,{' '}
            {`$Re = (1)(0.01)/10^{-6} = 10^4$`}: well into the turbulent range.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              At low {`$Re$`}, viscosity dominates. Every perturbation is smoothed out quickly. The
              flow is laminar and stable. At high {`$Re$`}, inertia dominates. Perturbations grow
              before viscosity can damp them. The flow becomes unstable and turbulent. {`$Re$`} is
              the ratio of how fast the fluid moves to how fast viscosity smooths it.
            </p>
          </div>
          <p>
            <strong>Dynamical similarity:</strong> two flows past geometrically similar objects at
            the same {`$Re$`} have identical velocity fields when scaled by {`$V$`} and {`$L$`}.
            This is what makes scale-model wind tunnel testing valid. A small model at the right{' '}
            {`$Re$`} gives results identical to the full-size object.
          </p>

          <h3>The No-Slip Boundary Condition</h3>
          <p>
            Viscous fluids obey one crucial rule at solid walls: {`$\\mathbf{v} = 0$`}. The fluid
            velocity is exactly zero at a solid boundary. This is the{' '}
            <strong>no-slip condition</strong>. It is a direct consequence of viscosity. In an ideal
            fluid, fluid can slip freely past walls.
          </p>
          <p>
            The no-slip condition forces the velocity to change rapidly from zero at the wall to the
            free-stream value {`$V$`} over a short distance. This thin region is the boundary layer.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Viscosity means momentum spreads between the fluid and the wall. The wall keeps
              absorbing relative momentum until the fluid right at the wall matches the wall's
              speed.
            </p>
            <p>
              So no-slip is not a special rule. It is the unavoidable result of viscosity acting at
              the molecular scale.
            </p>
          </div>
        </>,

        <>
          <h2>Part III: Viscous Flow Solutions</h2>

          <h3>Poiseuille Flow: Pressure-Driven Flow in a Pipe</h3>
          <p>
            <strong>When to use this:</strong> when calculating flow rate, resistance, or pressure
            drop in a pipe, blood vessel, or any cylindrical channel.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Blood flows through a cylindrical artery of radius {`$a$`}, driven by a pressure
              difference. If you double the radius of the artery, how does the flow rate change?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The flow rate scales as {`$a^4$`}. Doubling the radius increases flow by a factor of
                16.
              </p>
            </details>
          </div>
          <p>
            Consider a long pipe of radius {`$a$`} along the {`$z$`}-axis. The fluid is
            incompressible and the flow is steady. By symmetry, the velocity depends only on
            distance from the axis: {`$\\mathbf{v} = v(\\varpi)\\hat{\\mathbf{z}}$`}.
          </p>
          <ol className="lrn-list">
            <li>
              Apply incompressible Navier-Stokes. The viscous term in cylindrical coordinates
              becomes:{' '}
              {`$$\\nu\\nabla^2 v = \\nu\\frac{1}{\\varpi}\\frac{d}{d\\varpi}\\!\\left(\\varpi\\frac{dv}{d\\varpi}\\right)$$`}
            </li>
            <li>
              In steady flow with no inertia (long pipe, slow flow), this balances the pressure
              gradient:{' '}
              {`$$\\frac{1}{\\varpi}\\frac{d}{d\\varpi}\\!\\left(\\varpi\\frac{dv}{d\\varpi}\\right) = \\frac{1}{\\eta}\\frac{dP}{dz}$$`}{' '}
              The right side is constant (uniform pressure gradient along the pipe).
            </li>
            <li>
              Integrate twice with boundary conditions: {`$v(a) = 0$`} (no-slip at wall) and{' '}
              {`$dv/d\\varpi|_{\\varpi=0} = 0$`} (symmetry at center). The result is the{' '}
              <strong>Poiseuille velocity profile</strong>:{' '}
              {`$$v(\\varpi) = -\\frac{dP}{dz}\\cdot\\frac{a^2 - \\varpi^2}{4\\eta}$$`} The profile
              is a paraboloid: fastest at the center, zero at the wall.
            </li>
            <li>
              The <strong>volume flow rate</strong> integrates the velocity over the pipe
              cross-section: {`$$F = -\\frac{dP}{dz}\\cdot\\frac{\\pi a^4}{8\\eta}$$`} This is{' '}
              <strong>Poiseuille's law</strong>. Flow rate scales as {`$a^4$`}: doubling the radius
              increases flow by a factor of 16.
            </li>
          </ol>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why is the profile parabolic and not linear?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The Laplacian{' '}
                {`$\\frac{1}{\\varpi}\\frac{d}{d\\varpi}(\\varpi \\frac{dv}{d\\varpi}) = \\text{const}$`}{' '}
                in cylindrical coordinates integrates to give {`$v \\propto a^2 - \\varpi^2$`},
                which is quadratic. The cylinder's geometry forces the shear to be largest at the
                wall and zero at the center.
              </p>
            </details>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why {`$a^4$`}?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Two factors of {`$a^2$`} come from the area of the pipe. One factor of {`$a^2$`}{' '}
                comes from the velocity at the center being proportional to {`$a^2$`} (from the
                velocity profile). The integral's shape-weighting combines to give {`$a^4$`}. The
                quartic dependence means even tiny narrowings of arteries drastically cut blood
                flow.
              </p>
            </details>
          </div>
          <div>
            <NsPoiseuilleFlow />
          </div>
          <p>
            <strong>Blood flow analogy.</strong> Poiseuille's law lets you treat blood flow like an
            electrical circuit. Define hydraulic resistance per unit length as{' '}
            {`$\\frac{dR}{dz} = \\frac{8\\eta}{\\pi a^4}$`}. Then pressure drop {`$\\Delta P$`}{' '}
            drives flow {`$F$`} just like voltage drives current: {`$\\Delta P = F\\cdot R$`}.
            Arteries in series add resistance. Arteries in parallel reduce it.
          </p>
          <p>
            <strong>Pulsatile blood flow.</strong> Real arteries carry pulsing pressure waves from
            the heartbeat. The velocity profile becomes complex. It involves Bessel functions
            (special oscillating functions that fit cylindrical geometry) and the Womersley number{' '}
            {`$W \\equiv \\sqrt{\\frac{\\omega a^2}{\\nu}}$`}. At {`$W \\ll 1$`}, the profile is
            parabolic. At {`$W \\gg 1$`}, the flow becomes plug-like: fluid near the center moves
            nearly uniformly.
          </p>

          <h3>Couette Flow: Shear-Driven Flow between Plates</h3>
          <p>
            <strong>When to use this:</strong> the simplest benchmark for shear-driven viscous flow;
            used in rheometers to measure viscosity.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two parallel plates, one moving at speed {`$U$`}, one stationary. What shape does the
              velocity profile take?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The profile is a straight line. With no pressure gradient, nothing curves the flow,
                so it varies uniformly from the fixed plate to the moving one.
              </p>
            </details>
          </div>
          <p>
            Consider two infinite parallel plates separated by distance {`$h$`}. The bottom plate is
            stationary. The top plate moves at speed {`$U$`}. The pressure gradient is zero. For
            steady incompressible flow, Navier-Stokes reduces to {`$\\eta\\nabla^2 v = 0$`}. With
            boundary conditions {`$v(0) = 0$`} and {`$v(h) = U$`}, the solution is linear:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$v(y) = U\\frac{y}{h}$$`}</div>
          <p>
            The shear stress throughout the fluid is constant: {`$T_{xy} = \\eta(U/h)$`}. This is
            the definition of viscosity made concrete.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <strong>Couette flow</strong>
              <p>
                Shear-driven by a moving plate. Linear velocity profile. No pressure gradient.
                Constant shear stress everywhere.
              </p>
            </div>
            <div className="lrn-compare-col">
              <strong>Poiseuille flow</strong>
              <p>
                Pressure-driven in a pipe. Parabolic velocity profile. Pressure gradient along the
                axis. Maximum shear at the wall, zero at the center.
              </p>
            </div>
          </div>
          <div>
            <NsCouetteFlow />
          </div>
        </>,

        <>
          <h2>Part IV: Transition to Turbulence, Flow Past a Cylinder</h2>
          <p>
            <strong>When to use this:</strong> understanding how {`$Re$`} controls the switch from
            smooth to chaotic flow; the classic experimental test case.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Imagine water flowing past a long cylindrical rod. As you increase the flow speed,
              what sequence of behaviors do you expect to see?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                At low speed: smooth symmetric flow. At moderate speed: steady recirculating eddies
                behind the cylinder. Higher: alternating vortex shedding (Kármán street). Higher
                still: fully turbulent wake. Very high: boundary layer transitions, drag drops
                suddenly.
              </p>
            </details>
          </div>
          <p>
            Flow past a cylinder is the classic test case for viscous flow. As {`$Re_d = Vd/\\nu$`}{' '}
            increases, the flow changes completely:
          </p>
          <ul className="lrn-list">
            <li>
              <strong>{`$Re_d \\ll 1$`} (Creeping Stokes flow).</strong> Viscosity dominates. Flow
              is smooth and symmetric front-to-back. Drag coefficient{' '}
              {`$C_D \\approx \\frac{6}{Re_d}$`}. No separation, no wake.
            </li>
            <li>
              <strong>{`$Re_d \\sim 5$`} (Separation).</strong> The boundary layer separates from
              the back. A pair of steady recirculating eddies forms behind the cylinder.
            </li>
            <li>
              <strong>{`$Re_d \\sim 100$`} (Kármán vortex street).</strong> The steady eddies become
              unstable. They shed alternately from the top and bottom. A beautiful periodic pattern
              of alternating vortices marches downstream. The shedding frequency {`$f$`} follows a
              simple rule, {`$St = fd/V \\approx 0.2$`}, where {`$St$`} is the dimensionless
              Strouhal number. This value holds across a wide span of {`$Re_d$`} from about 100 to{' '}
              {`$10^5$`}, so measuring {`$f$`} gives you the flow speed.
            </li>
            <li>
              <strong>{`$Re_d \\sim 1000$`} (Turbulent wake).</strong> The vortex street breaks
              down. The wake becomes chaotic. Drag coefficient {`$C_D$`} levels off near 1.
            </li>
            <li>
              <strong>{`$Re_d \\sim 3\\times10^5$`} (Turbulent boundary layer).</strong> The
              boundary layer itself transitions to turbulence. {`$C_D$`} drops suddenly from about 1
              to about 0.3.
            </li>
          </ul>
          <div>
            <NsReynoldsRegimes />
          </div>
          <p>
            <strong>Stokes drag on a sphere.</strong> At {`$Re \\ll 1$`}, the drag force on a sphere
            of radius {`$a$`} is exactly:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$F_\\text{Stokes} = 6\\pi\\eta a v$$`}</div>
          <p>
            This formula measures viscosity (Stokes falling-sphere method) and tracks small
            particles (dust, aerosols, cells in flow).
          </p>
          <div>
            <NsStokesDrag />
          </div>
          <p>
            <strong>2D laminar wake behind a cylinder.</strong> At moderate {`$Re$`}, the wake
            behind the cylinder has width {`$w \\sim 2\\sqrt{\\frac{\\nu x}{V}}$`} (spreading by
            vorticity diffusion) and a Gaussian velocity-deficit profile. The velocity deficit is
            how much the wake slows the flow below the free-stream speed {`$V$`}.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does a streamlined body have much lower drag than a bluff body?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A bluff body (sphere, cylinder) separates early. The boundary layer detaches at the
                widest point, leaving a large turbulent wake that accounts for most of the drag. A
                streamlined body delays separation until near the trailing edge, making the wake
                very small.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Part V: Turbulence, an Empirical Description</h2>
          <p>
            <strong>When to use this:</strong> when you need to understand what turbulence is before
            building quantitative models.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You stir a cup of coffee and release the stirring. After a few seconds, what happens
              to the fluid motion? Why does it stop?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The motion decays. Turbulent eddies transfer energy to smaller and smaller scales
                until viscosity dissipates it as heat at the smallest scales (Kolmogorov scale).
              </p>
            </details>
          </div>
          <p>
            Turbulence is chaotic, irregular fluid motion. But it is not purely random. Turbulence
            has four defining characteristics:
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Disorder with nonrandom structure.</strong> The velocity fluctuates
              chaotically, but coherent structures (vortices, jets) exist within the chaos.
            </li>
            <li>
              <strong>Wide range of interacting scales.</strong> Turbulent eddies exist at all
              sizes, from the injection scale (where energy enters) down to the dissipation scale
              (where viscosity acts). These scales interact.
            </li>
            <li>
              <strong>Irregular 3D vorticity.</strong> Vortex lines are tangled and twisted in all
              three dimensions. This is crucial: 2D turbulence behaves differently and lacks the
              full energy cascade.
            </li>
            <li>
              <strong>Large dissipation and efficient mixing.</strong> Turbulence dissipates energy
              far more efficiently than laminar flow. It also mixes temperature, salinity, and
              momentum far more effectively.
            </li>
          </ul>

          <h3>The Role of Vorticity in Turbulence</h3>
          <p>
            Vorticity drives the energy cascade. The key mechanism is{' '}
            <strong>vortex-line stretching.</strong> A stretched vortex tube spins up the same way a
            tornado tightens when it narrows: thinner and longer means faster and more energetic
            vorticity inside. Here the stretching comes from the surrounding turbulent flow pulling
            the tube's ends apart.
          </p>
          <p>
            This stretching transfers energy from large eddies (long, thin vortex tubes) to smaller
            eddies. Those eddies stretch smaller eddies, and so on. Energy cascades from large
            scales to small scales. At the smallest scales, viscosity dissipates the kinetic energy
            as heat.
          </p>
          <p>
            This cascade mechanism only works in 3D, because only in 3D can vortex lines be
            stretched in arbitrary directions. In 2D, vortex lines are confined to point out of the
            plane. They cannot be stretched. True fully developed turbulence is a 3D phenomenon.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why can vortex lines be stretched in three dimensions but not in two?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Stretching needs a velocity gradient along the vortex line. In 2D the vorticity
                points straight out of the plane, and the in-plane velocity has no component along
                it. Only 3D supplies that gradient.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Part VI: Quantitative Analysis of Turbulence</h2>

          <h3>The Reynolds Decomposition and Reynolds Stress</h3>
          <p>
            <strong>When to use this:</strong> to analyze how turbulent fluctuations affect the mean
            flow, and to understand why turbulence is hard to predict.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Turbulence means the velocity fluctuates randomly at every point. How would you
              separate the "average" flow from the "random" part?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Split each quantity into its time average plus a fluctuation. Then watch what
                happens when you average a product of two fluctuations.
              </p>
            </details>
          </div>
          <p>Split every quantity into a time-averaged part and a fluctuating part:</p>
          <div className="lrn-eq">
            {`$$\\mathbf{v} = \\bar{\\mathbf{v}} + \\delta\\mathbf{v}, \\quad P = \\bar{P} + \\delta P$$`}
          </div>
          <p>
            Here {`$\\bar{\\mathbf{v}}$`} is the time average and {`$\\delta\\mathbf{v}$`} is the
            turbulent fluctuation. By definition, {`$\\langle\\delta\\mathbf{v}\\rangle = 0$`}.
          </p>
          <ol className="lrn-list">
            <li>Insert the decomposition into the Navier-Stokes equation.</li>
            <li>
              Time-average the result. The nonlinear term{' '}
              {`$\\nabla\\cdot(\\rho\\mathbf{v}\\otimes\\mathbf{v})$`} produces a new term:{' '}
              {`$$\\nabla\\cdot\\left(\\rho\\bar{\\mathbf{v}}\\otimes\\bar{\\mathbf{v}} + \\rho\\overline{\\delta\\mathbf{v}\\otimes\\delta\\mathbf{v}}\\right)$$`}
            </li>
            <li>
              Define the <strong>Reynolds stress tensor</strong>:{' '}
              {`$$\\mathbf{T}_R \\equiv \\rho\\overline{\\delta\\mathbf{v}\\otimes\\delta\\mathbf{v}}$$`}
            </li>
            <li>
              The time-averaged Navier-Stokes equation becomes:{' '}
              {`$$\\rho(\\bar{\\mathbf{v}}\\cdot\\nabla)\\bar{\\mathbf{v}} = -\\nabla\\bar{P} + \\rho\\nu\\nabla^2\\bar{\\mathbf{v}} - \\nabla\\cdot\\mathbf{T}_R$$`}
            </li>
          </ol>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the Reynolds stress appear?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The quadratic term {`$\\mathbf{v}\\otimes\\mathbf{v}$`} does not average to zero
                when {`$\\delta\\mathbf{v}$`} is nonzero. Even though{' '}
                {`$\\langle\\delta\\mathbf{v}\\rangle = 0$`}, the product{' '}
                {`$\\delta v_i\\delta v_j$`} has a nonzero average (just as{' '}
                {`$\\langle x^2\\rangle \\neq 0$`} even when {`$\\langle x\\rangle = 0$`}). This
                average is {`$T_R^{ij}$`}. It acts as an extra stress that the turbulence exerts on
                the mean flow.
              </p>
            </details>
          </div>
          <p>
            The Reynolds stress looks like a viscous stress. You can model it with a{' '}
            <strong>turbulent viscosity</strong> {`$\\nu_t \\approx \\frac{1}{3}v_\\ell\\ell$`}{' '}
            where {`$v_\\ell$`} is the typical eddy velocity and {`$\\ell$`} is the eddy size.
            Turbulent viscosity is not a fluid property. It is a flow property, so its size depends
            entirely on the eddies present. Bigger and faster eddies make it larger. The Sargasso
            Sea gyre has enormous slow eddies, giving {`$\\nu_t \\sim 3\\times10^3$`}{' '}
            {`$\\frac{\\text{m}^2}{\\text{s}}$`}. That is about {`$10^8$`} times the molecular
            kinematic viscosity of seawater. Everyday lab-scale turbulence has far smaller eddies,
            so its enhancement is only a few thousandfold.
          </p>

          <h3>Turbulent Wakes and Jets: Entrainment and the Coanda Effect</h3>
          <p>
            <strong>When to use this:</strong> when calculating the size and velocity of turbulent
            wakes behind objects, or the spread of turbulent jets.
          </p>
          <p>
            A turbulent wake behind an object grows faster than a laminar wake. The key mechanism is{' '}
            <strong>entrainment</strong>: turbulent eddies scoop up surrounding fluid, pulling it
            into the turbulent region. Turbulent entrainment is roughly 1000 times stronger than
            laminar diffusion.
          </p>
          <p>
            <strong>2D turbulent wake behind a cylinder.</strong> Behind a cylinder of diameter{' '}
            {`$d$`}, the wake has:
          </p>
          <ul className="lrn-list">
            <li>Width: {`$w \\sim \\left(\\frac{C_D d x}{6}\\right)^{1/2}$`}</li>
            <li>Velocity deficit: {`$u_o \\sim V\\left(\\frac{3C_D d}{2x}\\right)^{1/2}$`}</li>
          </ul>
          <p>
            <strong>The Coanda effect.</strong> A turbulent jet adheres to a nearby solid wall. This
            happens because the jet entrains fluid from both sides. Near a wall, fluid cannot be
            entrained from the wall side. So the pressure drops on the wall side, pulling the jet
            toward the wall. Vortex generators on airplane wings exploit this effect.
          </p>
          <p>
            <strong>Kelvin-Helmholtz instability.</strong> When two fluid layers move at different
            speeds, the interface is a vortex sheet (a thin surface where the velocity jumps, packed
            with vorticity). Small corrugations at the interface grow exponentially. The
            corrugations roll up into a row of vortices. You see this in cloud layers as billow
            clouds. It also appears at ocean thermoclines (boundaries between warm surface water and
            cold deep water) and in the solar wind.
          </p>
        </>,

        <>
          <h2>Part VII: The Kolmogorov Energy Cascade</h2>
          <p>
            <strong>When to use this:</strong> when you need to predict the distribution of
            turbulent energy across length scales, or relate energy input rate to the scales of
            turbulent eddies.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Energy enters turbulence at large scales (large eddies). Viscosity acts at small
              scales. Where does the energy go in between, and what spectrum do you expect?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Energy cascades from large eddies to small ones at a constant rate. The spectrum
                should be a power law in wavenumber {`$k$`}. Dimensional analysis gives{' '}
                {`$E(k) \\sim k^{-5/3}$`}.
              </p>
            </details>
          </div>
          <p>
            Kolmogorov's insight (1941) used dimensional analysis to deduce the energy spectrum of
            turbulence without solving the Navier-Stokes equation.
          </p>
          <p>The physical picture:</p>
          <ul className="lrn-list">
            <li>
              Energy enters the flow at large scale {`$\\ell \\sim k_\\text{min}^{-1}$`} (the
              forcing scale).
            </li>
            <li>
              Each eddy of size {`$k^{-1}$`} turns over in time {`$\\tau \\sim 1/(kv_k)$`} where{' '}
              {`$v_k$`} is the eddy velocity.
            </li>
            <li>
              The energy flux (energy per unit time per unit mass) {`$q$`} is:{' '}
              {`$$q \\sim \\frac{v_k^2}{\\tau} = v_k^3 k$$`}
            </li>
            <li>
              In steady state, {`$q$`} is the same at every scale. Energy in equals energy out at
              each level of the cascade.
            </li>
          </ul>
          <ol className="lrn-list">
            <li>
              From {`$q \\sim v_k^3 k$`} (constant), solve for {`$v_k$`}:{' '}
              {`$$v_k \\sim \\left(\\frac{q}{k}\\right)^{1/3}$$`}
            </li>
            <li>
              The spectral energy density per unit wavenumber is:
              <div className="lrn-eq lrn-eq-display">{`$$u_k(k) \\sim \\frac{v_k^2}{k} \\sim \\frac{q^{2/3}}{k^{5/3}} = q^{2/3}k^{-5/3}$$`}</div>
              This is the <strong>Kolmogorov {`$-5/3$`} spectrum</strong>.
            </li>
          </ol>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the spectrum go as {`$k^{-5/3}$`} and not some other power?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The only assumption is that {`$q$`} (energy flux) is constant across scales. This
                constrains {`$v_k \\propto k^{-1/3}$`}. The energy density {`$u_k \\sim v_k^2/k$`}{' '}
                then gives {`$k^{-2/3-1} = k^{-5/3}$`}. The exponent is exact from dimensional
                analysis, given Kolmogorov's assumptions.
              </p>
            </details>
          </div>
          <p>
            <strong>The dissipation scale.</strong> At small enough scales, the eddy Reynolds number{' '}
            {`$Re_k = v_k/(\\nu k)$`} reaches 1. This defines the Kolmogorov wavenumber:
          </p>
          <div className="lrn-eq">{`$$k_\\text{max} \\sim q^{1/4}\\nu^{-3/4}$$`}</div>
          <p>
            The ratio of largest to smallest scales is{' '}
            {`$k_\\text{max}/k_\\text{min} \\sim Re_\\ell^{3/4}$`}. At {`$Re \\sim 10^6$`},
            turbulence spans about {`$3\\times10^4$`} in scale. This requires {`$10^{12}$`} grid
            points in 3D for direct numerical simulation (computing the flow at every scale with no
            modeling shortcuts).
          </p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Given {`$q \\sim v_k^3 k$`} constant. Step 1: {`$v_k \\sim (q/k)^{1/3}$`}. Step 2:{' '}
                {`$u_k(k) \\sim v_k^2/k \\sim q^{2/3} k^{-5/3}$`}. Dimensional check:{' '}
                {`$[q] = \\frac{\\text{m}^2}{\\text{s}^3}$`}, {`$[k] = \\frac{1}{\\text{m}}$`}. Then{' '}
                {`$[q^{2/3} k^{-5/3}] = \\frac{\\text{m}^{4/3}}{\\text{s}^2} \\cdot \\text{m}^{5/3} = \\frac{\\text{m}^3}{\\text{s}^2}$`}{' '}
                which is energy per unit mass per unit wavenumber. Confirmed.
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Given: energy flux {`$q$`} constant across scales, {`$q \\sim v_k^3 k$`}.
              </p>
              <ol className="lrn-list">
                <li>Compute the spectral energy density {`$u_k(k) \\sim v_k^2/k$`}.</li>
                <li>Confirm the {`$k^{-5/3}$`} exponent by dimensional analysis.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                If a transported scalar {`$n$`} (temperature) has injection rate {`$q_n$`}, its
                spectrum is {`$S_n(k) \\sim q_n q^{-1/3} k^{-11/3}$`}. Confirm this by dimensional
                analysis.
              </p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              A passive scalar like temperature or salt is stirred by the eddies at every scale. At
              scale {`$\\frac{1}{k}$`}, the stirring speed is about{' '}
              {`$v_k \\sim \\left(\\frac{q}{k}\\right)^{1/3}$`}.
            </p>
            <p>
              Working the scalar flux through each wavenumber adds an extra factor of {`$k^{-2/3}$`}
              . So the scalar spectrum {`$k^{-11/3}$`} falls off faster than the velocity spectrum{' '}
              {`$k^{-5/3}$`}.
            </p>
          </div>
          <div>
            <NsKolmogorovSpectrum />
          </div>
          <p>
            <strong>Assumptions and limits.</strong> Kolmogorov's derivation assumes the turbulence
            is homogeneous and isotropic. Real turbulence is neither. Intermittency (turbulence
            flaring up in bursts rather than spreading evenly) concentrates it in thin sheets and
            filaments. Coherent structures (long-lived organized vortices) also break these
            assumptions. The {`$-5/3$`} exponent is still observed experimentally, but deviations at
            large {`$k$`} are measurable.
          </p>
        </>,

        <>
          <h2>Part VIII: Turbulent Boundary Layers</h2>
          <p>
            <strong>When to use this:</strong> when calculating skin friction, drag on surfaces, or
            the susceptibility of a surface to flow separation.
          </p>

          <h3>The Structure of a Turbulent Boundary Layer</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A turbulent boundary layer forms over a flat plate. Near the wall, does turbulence
              dominate or does molecular viscosity dominate?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Very near the wall, turbulent eddies cannot exist (the wall damps them). Molecular
                viscosity dominates in the thin laminar sublayer. Further out, turbulent eddies take
                over.
              </p>
            </details>
          </div>
          <p>A turbulent boundary layer has two distinct regions:</p>
          <ol className="lrn-list">
            <li>
              <strong>Laminar sublayer (very close to wall).</strong> Very near the wall (within
              distance {`$\\delta_{ls} = \\frac{\\nu}{v_\\ell}$`}), turbulent eddies are damped.
              Viscous stress dominates. The velocity profile is linear:{' '}
              {`$\\bar{v} \\sim v_\\ell\\frac{y}{\\delta_{ls}}$`} for {`$y \\lesssim \\delta_{ls}$`}
              .
            </li>
            <li>
              <strong>Turbulent zone (farther from wall).</strong> Beyond {`$\\delta_{ls}$`},
              turbulent eddies dominate transport. The characteristic eddy size grows with distance
              from the wall: {`$\\ell \\sim y$`}. The turbulent viscosity is{' '}
              {`$\\nu_t \\sim v_\\ell y/3$`}. Matching shear stress gives a{' '}
              <strong>logarithmic velocity profile</strong>:{' '}
              {`$$\\bar{v} \\sim v_\\ell\\left[1 + \\ln\\!\\left(\\frac{y}{\\delta_{ls}}\\right)\\right] \\quad \\text{for } y \\gtrsim \\delta_{ls}$$`}
            </li>
          </ol>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why logarithmic and not parabolic?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In the turbulent zone, the dominant stress is Reynolds stress{' '}
                {`$T_{xy} \\sim \\rho v_\\ell^2 = \\text{const}$`} (from momentum balance). The
                turbulent viscosity {`$\\nu_t \\sim v_\\ell y$`} grows with {`$y$`}. The mean flow
                gradient {`$d\\bar{v}/dy = T_{xy}/(\\rho\\nu_t) \\sim v_\\ell/y$`}. Integrating{' '}
                {`$1/y$`} gives {`$\\ln y$`}. That is why the logarithm appears.
              </p>
            </details>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <strong>Laminar boundary layer</strong>
              <p>
                {`$\\delta \\propto x^{1/2}$`} (slow growth). Low surface shear stress. Easily
                separated by adverse pressure gradient.
              </p>
            </div>
            <div className="lrn-compare-col">
              <strong>Turbulent boundary layer</strong>
              <p>
                {`$\\delta \\propto x$`} (faster growth). Higher surface shear stress. Far more
                resistant to separation.
              </p>
            </div>
          </div>
          <p>
            For the laminar case, you can pin down how thick the layer actually is. The flat-plate
            Blasius solution gives the thickness at distance {`$x$`} from the leading edge:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\delta \\approx 5\\sqrt{\\frac{\\nu x}{V}}$$`}</div>
          <p>
            Here {`$\\delta$`} is the 99% thickness: the height where the flow speed reaches 99% of
            the free-stream value {`$V$`}. The square root is why the layer grows as{' '}
            {`$\\delta \\propto x^{1/2}$`}. The thickness depends on viscosity through {`$\\nu$`}{' '}
            and thins as the flow speeds up. For air ({`$\\nu = 10^{-5}$`}{' '}
            {`$\\frac{\\text{m}^2}{\\text{s}}$`}) at {`$V = 10$`} m/s, one meter back the layer is{' '}
            {`$\\delta \\approx 5\\sqrt{10^{-6}} = 5$`} mm thin. You can now estimate the
            laminar-layer thickness for any flat-plate flow before it trips to turbulence.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Fluid deep in the boundary layer moves slowly, so it carries little momentum. An
              adverse pressure gradient (pressure rising along the flow) pushes back on this slow
              fluid.
            </p>
            <p>
              The near-wall fluid runs out of forward momentum first and reverses direction. That
              reversal is exactly what separation is.
            </p>
          </div>
          <div>
            <NsBlasiusLayer />
          </div>

          <h3>Instability of a Laminar Boundary Layer</h3>
          <p>
            How does a laminar boundary layer become turbulent? Small perturbations grow. The
            equation that governs how small waves in the boundary layer grow or decay (the
            Orr-Sommerfeld equation) is:
          </p>
          <div className="lrn-eq">
            {`$$\\frac{\\partial^2\\delta v_y}{\\partial y^2} = \\left[\\frac{1}{v_x - C}\\frac{d^2 v_x}{dy^2} + k^2\\right]\\delta v_y$$`}
          </div>
          <p>
            where {`$C = \\omega/k$`} is the wave phase speed. If {`$C$`} has a positive imaginary
            part, the wave grows exponentially. The laminar boundary layer is stable at{' '}
            {`$Re_\\delta \\lesssim 500$`} and unstable at {`$Re_\\delta \\gtrsim 500$`}. A
            necessary condition for instability: the velocity profile must have an inflection point,
            a height where the profile's curvature changes sign ({`$d^2 v_x/dy^2 = 0$`}).
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Rayleigh's inflection-point theorem says a velocity profile with no inflection point
              resists inviscid disturbances.
            </p>
            <p>
              At an inflection point the flow can hand energy to a growing wave. So a profile with
              one is prone to instability.
            </p>
          </div>

          <h3>Flight of a Ball</h3>
          <p>
            <strong>Golf ball.</strong> A smooth golf ball at typical speeds has a laminar boundary
            layer that separates early, creating a large turbulent wake with {`$C_D \\sim 0.5$`}.
            Dimples trigger early transition to turbulence. The turbulent boundary layer resists
            separation. {`$C_D$`} drops to about 0.25. Range roughly doubles.
          </p>
          <p>
            <strong>Cricket ball.</strong> A cricket ball has one half polished smooth and one half
            left rough. The smooth half keeps a laminar boundary layer longer. The rough half
            transitions to turbulent earlier. This asymmetry makes the laminar side separate
            earlier. The ball deflects toward the smooth side. This is swing bowling.
          </p>
          <p>
            <strong>Baseball and Magnus effect.</strong> A spinning ball (curveball) has an
            asymmetric wake due to spin. Spin moves the separation point: on one side the boundary
            layer separates earlier (lower pressure), on the other side later (higher pressure). The
            pressure difference curves the ball. This is the <strong>Magnus (Robins) effect</strong>
            .
          </p>
        </>,

        <>
          <h2>Part IX: Routes to Chaos and Turbulence</h2>
          <p>
            <strong>When to use this:</strong> when analyzing how a system transitions from ordered
            to chaotic behavior through a sequence of bifurcations.
          </p>

          <h3>Rotating Couette Flow: Taylor Rolls</h3>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You gradually increase the spinning speed of a fluid between two concentric cylinders.
              Describe what you expect to happen in sequence.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Laminar circular flow, then Taylor rolls (horizontal rings), then wavy Taylor rolls
                with a second frequency, then broadband chaos.
              </p>
            </details>
          </div>
          <p>
            Fluid fills the gap between two concentric cylinders. The inner cylinder rotates. At low{' '}
            {`$Re$`}, the flow is laminar (circular streamlines). As {`$Re$`} increases past a
            critical value {`$Re_{c1}$`}, the laminar state becomes unstable.
          </p>
          <ol className="lrn-list">
            <li>
              <strong>First bifurcation (Taylor rolls).</strong> The flow develops horizontal rings:
              alternating bands of fluid circulating in opposite directions. Energy appears as a
              sharp spike at frequency {`$f_1$`} and its harmonics.
            </li>
            <li>
              <strong>Second bifurcation (wavy Taylor rolls).</strong> The Taylor rolls become wavy.
              A second frequency {`$f_2$`} appears, incommensurate with {`$f_1$`}. The flow is
              quasi-periodic.
            </li>
            <li>
              <strong>Onset of chaos.</strong> After the two-frequency state, the spectrum broadens.
              Chaos sets in.
            </li>
          </ol>

          <h3>Feigenbaum Period-Doubling Route</h3>
          <p>
            Rayleigh-Benard convection (fluid heated from below) follows a different route to chaos.
            Near onset, the flow reduces to a one-hump 1D map. The map then doubles its period again
            and again, each doubling arriving a fixed factor {`$\\delta = 4.66920\\ldots$`} sooner
            than the last. That ratio is the same for every smooth one-hump map, so confined
            convection lands in this universal class.
          </p>
          <p>
            <strong>Lyapunov exponent.</strong> Once chaotic, the flow forgets its starting point
            fast. The Lyapunov exponent {`$p$`} measures how quickly two nearby states pull apart: a
            positive {`$p$`} means they separate exponentially, and the Lyapunov time{' '}
            {`$\\tau_L = 1/p$`} sets the horizon beyond which prediction becomes impossible.
          </p>
          <p>
            <strong>Lorenz equations.</strong> A three-equation model of convection captures this
            behavior. Its solutions never repeat yet stay bounded, tracing the Lorenz chaotic
            attractor: a folded, never-closing path that two near-identical starts quickly leave
            apart.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does chaos need at least three dimensions?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Trajectories in a smooth flow cannot cross each other. In two dimensions a bounded
                path must settle to a fixed point or a closed loop, by the Poincare-Bendixson
                theorem.
              </p>
              <p>
                Three dimensions is the minimum that allows the stretch-and-fold motion. That
                folding is what produces sensitive dependence and chaos.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>A Glimpse of Relativistic Fluids (Track-Two)</h2>
          <p>
            This section is a brief aside. It previews ideas a general relativity course develops
            fully.
          </p>
          <p>
            When a fluid moves near the speed of light, Newtonian fluid equations break down.
            Relativity mixes mass, momentum, and energy together. A single object, the stress-energy
            tensor, packages all three:
          </p>
          <div className="lrn-eq">
            {`$$T^{\\alpha\\beta} = \\left(\\rho + P\\right)u^\\alpha u^\\beta + P g^{\\alpha\\beta}$$`}
          </div>
          <p>
            Here {`$u^\\alpha$`} is the four-velocity (the velocity through space and time combined
            into one spacetime vector), {`$\\rho$`} is the energy density, and {`$P$`} is pressure.
            This replaces both the continuity equation and the Euler equation at once.
          </p>
          <p>
            There is a relativistic Bernoulli theorem. One striking application is ultrarelativistic
            astrophysical jets (jets moving so close to light speed that relativity dominates).
            These jets shoot out from galaxy nuclei at speeds close to {`$c$`}. As the jet expands
            and pressure drops, internal heat converts into organized bulk motion. The jet
            accelerates as it leaves the nucleus.
          </p>
          <p>
            When speeds are small compared to {`$c$`}, the stress-energy tensor reduces to the
            everyday mass density and momentum flux. The Newtonian Euler equation reappears.
            Relativistic fluid mechanics contains nonrelativistic fluid mechanics as its
            low-velocity limit.
          </p>
        </>,

        <>
          <h2>Summary of Core Ideas</h2>
          <p>
            Viscosity introduces friction between fluid layers. The Navier-Stokes equation governs
            all viscous flow. The Reynolds number {`$Re = VL/\\nu$`} decides whether flow stays
            laminar or turns turbulent. Poiseuille flow gives the exact parabolic profile in pipes.
            Its flow rate scales as the fourth power of radius. Turbulence carries energy in a
            cascade from large eddies to small ones. The Kolmogorov {`$-5/3$`} spectrum{' '}
            {`$u_k(k) \\sim q^{2/3}k^{-5/3}$`} describes that cascade. Turbulent boundary layers
            resist separation better than laminar ones. Confined systems reach chaos through
            universal period-doubling, with Feigenbaum number {`$\\delta = 4.669\\ldots$`}.
          </p>
        </>
      ]
    },

    practice: [
      {
        q: String.raw`A sphere of radius $a = 0.5$ mm falls through glycerine ($\eta = 1.5$ Pa$\cdot$s, $\rho = 1260$ kg/m$^3$) at terminal velocity $v = 2$ mm/s. What drag force acts on it?`,
        a: String.raw`(1) Result: Stokes drag $F = 6\pi\eta a v$. (2) Steps: $F = 6\pi (1.5)(5\times10^{-4})(2\times10^{-3}) = 6\pi \times 1.5\times10^{-6} \approx 2.83\times10^{-5}$ N. (3) Why correct: Check $Re = \rho v a/\eta = 1260\times0.002\times5\times10^{-4}/1.5 \approx 8.4\times10^{-4} \ll 1$. Stokes formula is valid.`
      },
      {
        q: String.raw`Water ($\nu = 10^{-6}$ m$^2$s$^{-1}$) flows through an artery of radius $a = 2$ mm with pressure gradient $dP/dz = -100$ Pa/m. What is the volume flow rate?`,
        a: String.raw`(1) Result: Poiseuille's law $F = -(dP/dz)\pi a^4/(8\eta)$. Note $\eta = \rho\nu \approx 10^{-3}$ Pa$\cdot$s for water. (2) Steps: $F = (100)\pi(2\times10^{-3})^4/(8\times10^{-3}) = 100\pi\times1.6\times10^{-11}/8\times10^{-3} \approx 6.3\times10^{-7}$ m$^3$s$^{-1}$. (3) Why correct: Navier-Stokes reduces to the ODE $\frac{1}{\varpi}\frac{d}{d\varpi}(\varpi\frac{dv}{d\varpi}) = \frac{1}{\eta}\frac{dP}{dz}$. Integrating with no-slip gives the parabolic profile, and integrating again over the cross-section gives the $a^4$ dependence.`
      },
      {
        q: String.raw`The Reynolds number for flow past a cylinder of diameter $d = 10$ cm in air ($\nu = 10^{-5}$ m$^2$s$^{-1}$) is $Re_d = 10^4$. From the $C_D$ vs $Re_d$ map, what is the approximate drag coefficient, and what flow regime is present?`,
        a: String.raw`(1) Result: At $Re_d = 10^4$, the drag coefficient is approximately $C_D \approx 1$. The regime is turbulent wake with Kármán vortex shedding. (2) Steps: Below $Re_d \approx 3\times10^5$, the boundary layer is laminar, the separation point is near the widest point, and the turbulent wake dominates drag. (3) Why correct: The $C_D$-$Re_d$ curve is roughly constant near 1 in this regime. The drop to $C_D \approx 0.3$ only occurs when the boundary layer transitions to turbulent at $Re_d \approx 3\times10^5$.`
      },
      {
        q: String.raw`Write the velocity profile for plane Couette flow between two plates separated by $h = 5$ mm. The bottom plate is fixed. The top plate moves at $U = 0.1$ m/s. What is the shear stress if $\eta = 10^{-3}$ Pa$\cdot$s?`,
        a: String.raw`(1) Result: $v(y) = U(y/h)$; shear stress $T_{xy} = \eta U/h$. (2) Steps: Navier-Stokes with no pressure gradient gives $\eta\nabla^2 v = 0$, so $d^2v/dy^2 = 0$, meaning $v$ is linear. With $v(0) = 0$ and $v(h) = U$: $v = U y/h$. Shear stress: $T_{xy} = \eta dv/dy = \eta U/h = 10^{-3}\times0.1/(5\times10^{-3}) = 0.02$ Pa. (3) Why correct: Couette flow is shear-driven with no pressure gradient. Linear profile is the unique solution satisfying both boundary conditions.`
      },
      {
        q: String.raw`An artery has radius $a$. It narrows to radius $a/2$ due to plaque. By what factor does the blood flow rate decrease (at the same pressure gradient)?`,
        a: String.raw`(1) Result: Flow rate decreases by a factor of 16. (2) Steps: Poiseuille's law: $F \propto a^4$. Halving $a$ gives $F' = F\times(a/2)^4/a^4 = F/16$. (3) Why correct: The $a^4$ scaling comes from two sources: the parabolic profile gives velocity proportional to $a^2$, and integrating over the cross-section adds another factor of $a^2$. A modest narrowing has a catastrophic effect on blood flow.`
      },
      {
        q: String.raw`Explain why the Navier-Stokes equation for an incompressible flow simplifies the viscous term to $\eta\nabla^2\mathbf{v}$. Start from the full viscous stress tensor.`,
        a: String.raw`(1) Result: Under incompressibility ($\nabla\cdot\mathbf{v} = 0$) and constant $\eta$, the divergence of $\mathbf{T}_\text{vis} = -2\eta\boldsymbol{\sigma}$ gives $\eta\nabla^2\mathbf{v}$. (2) Steps: With $\theta = 0$, $\sigma_{ij} = \frac{1}{2}(v_{i;j}+v_{j;i})$. Then $(2\nabla\cdot\boldsymbol{\sigma})_i = \partial_j(v_{i;j}+v_{j;i}) = \nabla^2 v_i + \partial_i(\nabla\cdot\mathbf{v}) = \nabla^2 v_i$ (using $\nabla\cdot\mathbf{v} = 0$). (3) Why correct: The incompressibility condition eliminates the bulk viscosity term and reduces the shear divergence to a simple Laplacian.`
      },
      {
        q: String.raw`Derive the Reynolds number by scaling the incompressible Navier-Stokes equation. Show which term dominates at low and high $Re$.`,
        a: String.raw`(1) Result: $Re = VL/\nu$; inertia dominates for $Re \gg 1$, viscosity for $Re \ll 1$. (2) Steps: Scale $\mathbf{v}$ by $V$ and lengths by $L$. The inertial term $(\mathbf{v}\cdot\nabla)\mathbf{v} \sim V^2/L$. The viscous term $\nu\nabla^2\mathbf{v} \sim \nu V/L^2$. Their ratio is $Re = VL/\nu$. (3) Why correct: At $Re \ll 1$, viscosity dominates and smooths all fluctuations. At $Re \gg 1$, inertia dominates; viscosity acts only in thin boundary layers.`
      },
      {
        q: String.raw`Derive from first principles why shear viscosity in a gas scales as $\eta \propto \rho v_\text{th}\lambda$. What does this predict for the temperature dependence?`,
        a: String.raw`(1) Result: $\eta \approx \frac{1}{3}\rho v_\text{th}\lambda$; for an ideal gas, $\eta \propto T^{1/2}$. (2) Steps: A molecule from a fast layer drifts down by $\lambda$ and deposits momentum $\sim m\lambda\sigma_{xy}$. Flux of such molecules: $\sim n v_\text{th}$ per unit area per second. Momentum flux $= \rho v_\text{th}\lambda\sigma_{xy}$. Comparing with $T_{xy} = -2\eta\sigma_{xy}$ gives $\eta \approx \frac{1}{3}\rho v_\text{th}\lambda$. (3) Why correct: For an ideal gas, $v_\text{th}\propto T^{1/2}$ and $\lambda \propto 1/\rho$ (at fixed pressure). So $\eta\propto T^{1/2}$. Hotter gas is more viscous because faster molecules carry more momentum.`
      },
      {
        q: String.raw`Use the Kolmogorov cascade picture to derive the $-5/3$ energy spectrum. State every assumption explicitly.`,
        a: String.raw`(1) Result: $u_k(k) \sim q^{2/3}k^{-5/3}$ in the inertial range. (2) Steps: Assumption 1: Energy flux $q$ is the same at every scale in the inertial range. Assumption 2: Eddy turnover time $\tau \sim 1/(kv_k)$. Then $q \sim v_k^2/\tau = v_k^3 k$. Solve for $v_k \sim (q/k)^{1/3}$. Spectral energy density: $u_k(k) \sim v_k^2/k \sim q^{2/3}k^{-5/3}$. (3) Why correct: The only dimensional combination from $q$ (m$^2$s$^{-3}$) and $k$ (m$^{-1}$) that has units of m$^3$s$^{-2}$ is $q^{2/3}k^{-5/3}$. Confirmed by experiment in the inertial range.`
      },
      {
        q: String.raw`Why must shear viscosity $\eta$, bulk viscosity $\zeta$, and thermal conductivity $\kappa$ all be non-negative? Use the entropy production equation.`,
        a: String.raw`(1) Result: The second law requires entropy production $\geq 0$ everywhere; each term in the production formula is a positive coefficient times a squared quantity. (2) Steps: Production rate $= \zeta\theta^2 + 2\eta\boldsymbol{\sigma}:\boldsymbol{\sigma} + \frac{\kappa}{T}(\nabla T)^2 \geq 0$. Each of $\theta^2$, $\boldsymbol{\sigma}:\boldsymbol{\sigma}$, and $(\nabla T)^2$ is non-negative (squares). So each coefficient must be non-negative. (3) Why correct: A negative $\eta$ would mean shear flow spontaneously amplifies itself, extracting energy from thermal motion to do ordered work. This contradicts the second law.`
      },
      {
        q: String.raw`Explain the role of vortex-line stretching in the turbulent energy cascade. Why does this mechanism require 3D flow?`,
        a: String.raw`(1) Result: Stretching concentrates vorticity and transfers energy to smaller scales; 3D is required because only in 3D can vortex lines be stretched in arbitrary directions. (2) Steps: A vortex tube under stretching conserves angular momentum: as the tube gets longer and thinner, vorticity $\omega \propto 1/\text{cross-section area}$ increases. The kinetic energy in the vortex increases. Energy came from the large-scale flow. (3) Why correct: In 2D, vortex lines are constrained to point perpendicular to the plane. No stretching is possible. Energy can actually flow from small to large scales (inverse cascade) in 2D turbulence. True fully developed turbulence, with an unstoppable cascade to small scales, only exists in 3D.`
      },
      {
        q: String.raw`Explain why the turbulent boundary layer velocity profile is logarithmic, starting from the balance of shear stress near a wall.`,
        a: String.raw`(1) Result: Constant total shear stress $T_{xy} = \rho v_\ell^2$ combined with turbulent viscosity $\nu_t \sim v_\ell y$ gives $d\bar{v}/dy \propto 1/y$, integrating to $\bar{v} \propto \ln y$. (2) Steps: Near the wall (but outside the laminar sublayer), $T_{xy} \approx \rho v_\ell^2 = \text{const}$. Turbulent viscosity: $\nu_t \sim v_\ell y$. Mean velocity gradient: $d\bar{v}/dy = T_{xy}/(\rho\nu_t) \sim v_\ell/y$. Integrate: $\bar{v} \sim v_\ell\ln(y/\delta_{ls})$. (3) Why correct: The key step is that the dominant stress is constant (set by the wall) while the effective viscosity grows with distance from the wall. Their ratio gives a $1/y$ gradient, and $\int dy/y = \ln y$.`
      },
      {
        q: String.raw`You observe Kármán vortex shedding behind a smokestack of diameter $d = 0.5$ m in wind of speed $V = 10$ m/s. Estimate $Re_d$ for air and identify the flow regime.`,
        a: String.raw`(1) Result: $Re_d \approx 5\times10^5$; the boundary layer has just gone turbulent and $C_D$ has dropped. (2) Steps: $Re_d = Vd/\nu = 10\times0.5/10^{-5} = 5\times10^5$. At $Re_d \sim 3\times10^5$, the boundary layer transitions to turbulent. At $Re_d = 5\times10^5$, the flow is in the turbulent-boundary-layer regime with reduced drag. (3) Why correct: The big drop in $C_D$ from $\sim 1$ to $\sim 0.3$ occurs near $Re_d \sim 3\times10^5$. At $Re_d = 5\times10^5$ you are just past this transition.`
      },
      {
        q: String.raw`Air ($\nu = 10^{-5}$ m$^2$s$^{-1}$) flows over a flat plate at $V = 10$ m/s. What is the laminar boundary layer thickness at $x = 1$ m?`,
        a: String.raw`(1) Result: Laminar (Blasius): $\delta \approx 5\sqrt{\nu x/V} = 5\sqrt{10^{-5}\times1/10} = 5\times10^{-3}$ m $= 5$ mm. (2) Steps: $Re_x = Vx/\nu = 10^6$. Blasius: $\delta \approx 5\sqrt{\nu x/V}$, where $\delta$ is the 99% thickness (the height where flow speed reaches 99% of free-stream). (3) Why correct: The Blasius solution comes from self-similar rescaling of the NS equation. The boundary layer grows as $x^{1/2}$. The coefficient 5.0 is the standard 99%-thickness value; a stricter thickness definition would use a smaller number.`
      },
      {
        q: String.raw`A turbulent jet of hot gas is blown horizontally past a curved wall. Describe the Coanda effect. What prevents the jet from continuing straight?`,
        a: String.raw`(1) Result: The jet adheres to the curved wall because entrainment creates a low-pressure zone between jet and wall. (2) Steps: The turbulent jet entrains ambient fluid from all sides. When a wall is nearby on one side, fluid cannot be entrained from that side. This imbalance creates lower pressure between the jet and wall. The pressure difference pushes the jet toward the wall, and the jet follows the curve. (3) Why correct: Entrainment in turbulent jets is roughly 1000 times stronger than laminar diffusion. The pressure deficit on the wall side can easily overcome the jet's inertia.`
      },
      {
        q: String.raw`A pipe of radius $a = 1$ cm carries water ($\eta = 10^{-3}$ Pa$\cdot$s). What pressure gradient is needed to maintain a flow rate of 1 liter per minute?`,
        a: String.raw`(1) Result: $dP/dz \approx -4.3$ Pa/m. (2) Steps: Convert flow rate: $F = 10^{-3}/60 \approx 1.67\times10^{-5}$ m$^3$s$^{-1}$. Poiseuille's law: $dP/dz = -8\eta F/(\pi a^4) = -8\times10^{-3}\times1.67\times10^{-5}/(\pi\times10^{-8}) \approx -4.3$ Pa/m. (3) Why correct: Poiseuille's law applies because $Re = \rho Va/\eta \approx 35$, well below the turbulent transition near $Re \approx 2000$.`
      },
      {
        q: String.raw`Estimate the range of eddy scales (in meters) in the atmospheric boundary layer. Take $V \sim 10$ m/s, $L \sim 1$ km, $\nu = 10^{-5}$ m$^2$s$^{-1}$. Use $k_\text{max}/k_\text{min} \sim Re^{3/4}$.`,
        a: String.raw`(1) Result: Scales span from $L = 1$ km down to about 0.2 mm. (2) Steps: $Re = VL/\nu = 10\times10^3/10^{-5} = 10^9$. Ratio $k_\text{max}/k_\text{min} \sim Re^{3/4} = (10^9)^{3/4} \approx 5\times10^6$. Smallest (Kolmogorov) scale: $\ell_\text{min} \approx 1000/(5\times10^6) \approx 0.2$ mm. (3) Why correct: The Kolmogorov scale sets where $Re_k \sim 1$. The huge range of scales is why direct numerical simulation of atmospheric turbulence is impossible with current computers.`
      },
      {
        q: String.raw`Blood viscosity is $\eta \approx 3\times10^{-3}$ Pa$\cdot$s. An artery of radius $a = 3$ mm connects to four parallel arterioles, each of radius $b = 0.5$ mm and length $l = 5$ cm. Compute the hydraulic resistance of each arteriole and compare to the main artery (length 10 cm).`,
        a: String.raw`(1) Result: Each arteriole has resistance $R_a = 8\eta l/(\pi b^4) \approx 6.1\times10^9$ Pa$\cdot$s$\cdot$m$^{-3}$; main artery $R_m \approx 9.4\times10^6$ Pa$\cdot$s$\cdot$m$^{-3}$. (2) Steps: Arteriole: $b^4 = (5\times10^{-4})^4 = 6.25\times10^{-14}$, $R_a = 8\times3\times10^{-3}\times0.05/(\pi\times6.25\times10^{-14}) \approx 6.1\times10^9$. Main artery: $R_m = 8\times3\times10^{-3}\times0.10/(\pi\times(3\times10^{-3})^4) \approx 9.4\times10^6$. (3) Why correct: The $b^4$ scaling means a six-fold radius difference gives a factor of $6^4 = 1296$ difference in resistance per unit length.`
      },
      {
        q: String.raw`A researcher tries to simulate fully developed turbulence at $Re = 10^6$ using a 3D grid. What is the minimum number of grid points per direction, and why?`,
        a: String.raw`(1) Result: $N \sim Re^{3/4} \approx 3\times10^4$ in each direction, requiring $N^3 \approx 10^{13}$ grid points. (2) Steps: The ratio of largest to smallest turbulent scales is $k_\text{max}/k_\text{min} \sim Re^{3/4} = (10^6)^{3/4} = 10^{4.5}$. You need at least this many grid points per spatial dimension. In 3D: total points $\geq Re^{9/4} = (10^6)^{9/4} = 10^{13.5}$. (3) Why correct: Below the Kolmogorov scale, viscosity damps all turbulence. Every eddy between injection and dissipation scales must be computed. DNS is limited to $Re \lesssim 10^4$ even on the largest computers.`
      },
      {
        q: String.raw`A golf ball has $C_D \approx 0.5$ without dimples and $C_D \approx 0.25$ with dimples at typical drive speeds ($V \approx 70$ m/s, $d = 43$ mm). Estimate the ratio of drag forces and explain the mechanism.`,
        a: String.raw`(1) Result: Drag is halved. Dimples trigger early boundary-layer transition, allowing the turbulent BL to resist separation and shrink the wake. (2) Steps: Drag force $F_D = C_D\times\frac{1}{2}\rho V^2 A$. Ratio $F_D^\text{dimpled}/F_D^\text{smooth} = 0.25/0.5 = 0.5$. Mechanism: Without dimples, laminar boundary layer separates early near the top of the ball, creating a large turbulent wake with high pressure drag. Dimples force early transition; turbulent BL clings further around the back; wake shrinks dramatically. (3) Why correct: The boundary layer transitions from laminar to turbulent at $Re_\delta \sim 500$. Dimples force this transition artificially at lower $Re$.`
      },
      {
        q: String.raw`Explain why cricket ball swing works. The ball has one polished side and one rough side. Which way does the ball move?`,
        a: String.raw`(1) Result: The ball swings toward the polished (smooth) side. (2) Steps: The polished side maintains a laminar boundary layer longer. The rough side triggers earlier transition to turbulent. The turbulent boundary layer separates later (further around the back). The laminar side separates earlier. The wake is asymmetric: lower pressure on the turbulent/rough side (which stays attached longer). The net force pushes the ball toward the laminar/polished side. (3) Why correct: This is boundary-layer asymmetry, not the Bernoulli effect. The asymmetry in separation points creates an asymmetric pressure distribution. The ball deflects toward the side with the earlier-separating (laminar) boundary layer.`
      },
      {
        q: String.raw`A weather-scale eddy turns over once per hour, giving a Lyapunov time $\tau_L = 1/p \approx 1$ hour. Two forecasts start with positions differing by $\varepsilon_0 = 10^{-6}$ of the eddy size. After how long does that difference grow to order 1, making the forecasts useless?`,
        a: String.raw`(1) Result: About 14 hours. (2) Steps: Errors grow as $\varepsilon(t) \sim \varepsilon_0 e^{t/\tau_L}$. Set $\varepsilon(t) = 1$ with $\varepsilon_0 = 10^{-6}$: $t/\tau_L = \ln(10^6) = 6\ln 10 \approx 13.8$. With $\tau_L = 1$ hour, $t \approx 14$ hours. (3) Why correct: The Lyapunov time sets how fast small uncertainties amplify. Even a tiny initial error reaches order 1 after only a handful of $\tau_L$, which is why detailed turbulent flow is unpredictable beyond a short horizon.`
      },
      {
        q: String.raw`Predict: A sphere of radius $a$ moves slowly through a very viscous oil. What happens to the drag force if you double the sphere's radius while keeping the speed the same? What if you double the speed instead?`,
        a: String.raw`(1) Result: Doubling radius doubles drag; doubling speed doubles drag. Both are linear in Stokes drag. (2) Steps: Stokes drag $F = 6\pi\eta a v$. Doubling $a$: $F' = 6\pi\eta(2a)v = 2F$. Doubling $v$: $F'' = 6\pi\eta a(2v) = 2F$. (3) Why correct: At $Re \ll 1$, viscosity dominates and inertia is negligible. The drag is proportional to both size and speed. This contrasts sharply with high-$Re$ inertial drag $F \propto \rho v^2 A$, where drag grows as $v^2$.`
      },
      {
        q: String.raw`Predict: Two flows of water past an identically-shaped object. One has $V = 1$ m/s and $L = 0.1$ m. The other has $V = 0.1$ m/s and $L = 1$ m. Both have the same $\nu$. Do the flows look the same? Why?`,
        a: String.raw`(1) Result: Yes. They have the same $Re = VL/\nu$, so the scaled velocity fields are identical. (2) Steps: $Re_1 = 1\times0.1/\nu = 0.1/\nu$. $Re_2 = 0.1\times1/\nu = 0.1/\nu$. Same $Re$. Dynamical similarity: the normalized velocity field depends only on $Re$ and geometry. (3) Why correct: This is the key result behind scale-model wind tunnel testing. A small, fast model at the same $Re$ as the full-size, slow object behaves identically in normalized variables.`
      },
      {
        q: String.raw`Predict: You are designing a heat exchanger. A turbulent flow mixes a hot fluid with a cold one. A laminar flow at the same speed mixes them instead. Which achieves better heat transfer? By roughly how much?`,
        a: String.raw`(1) Result: Turbulent mixing is far superior, roughly $10^3$ times faster than laminar diffusion. (2) Steps: Turbulent thermal conductivity $\kappa_t \sim \rho c_p \nu_t$ where $\nu_t \sim \frac{1}{3}v_\ell\ell$. For large-scale turbulence with $v_\ell \sim 0.1$ m/s and $\ell \sim 0.1$ m: $\nu_t \sim 3\times10^{-3}$ m$^2$s$^{-1}$. The molecular kinematic viscosity for water is $\nu \sim 10^{-6}$ m$^2$s$^{-1}$. Ratio $\nu_t/\nu \sim 3000$. (3) Why correct: Turbulent transport is enhanced by the ratio of turbulent to molecular viscosity. Even modest turbulence gives dramatic mixing enhancement.`
      },
      {
        q: String.raw`Explain what the Reynolds stress tensor $\mathbf{T}_R = \rho\overline{\delta\mathbf{v}\otimes\delta\mathbf{v}}$ physically represents. Why does $\overline{\delta\mathbf{v}} = 0$ while $\mathbf{T}_R \neq 0$?`,
        a: String.raw`(1) Result: $\mathbf{T}_R$ is the extra stress the turbulent fluctuations exert on the mean flow; it is a second moment, not a first moment, so it does not average to zero. (2) Steps: $\overline{\delta\mathbf{v}} = 0$ by definition of the time average. But $\overline{\delta v_i\delta v_j}$ is like a variance: $\langle(x - \bar{x})^2\rangle \neq 0$ even when $\langle x-\bar{x}\rangle = 0$. For turbulence, $\delta v_x^2$ is positive whenever the fluid moves in the $x$-direction, so its average is positive. $\mathbf{T}_R$ acts on the mean flow exactly like a viscous stress, but from turbulent momentum transport, not molecular transport. (3) Why correct: This is the closure problem of turbulence. Finding $\mathbf{T}_R$ requires knowing the statistics of $\delta\mathbf{v}$, which requires higher moments, and so on.`
      },
      {
        q: String.raw`Self-explain: After you derive the Poiseuille velocity profile $v(\varpi) = -(dP/dz)(a^2 - \varpi^2)/(4\eta)$, why is the maximum velocity at $\varpi = 0$ and zero at $\varpi = a$? What boundary conditions enforce this?`,
        a: String.raw`(1) Result: The no-slip condition at $\varpi = a$ sets $v(a) = 0$. The regularity condition (no singularity at the center) sets $dv/d\varpi|_0 = 0$. These uniquely fix the parabolic shape. (2) Steps: No-slip: At $\varpi = a$: $v = -(dP/dz)(a^2 - a^2)/(4\eta) = 0$. Confirmed. Symmetry: At $\varpi = 0$, $dv/d\varpi = 0$. No kink at the center. (3) Why correct: The two integration constants in the second-order ODE are fixed by these two conditions. The parabolic shape is the unique solution. Any other shape would either slip at the wall or have a singularity at the center.`
      },
      {
        q: String.raw`Self-explain: In the Kolmogorov spectrum derivation, the energy flux $q$ is assumed constant across scales. Is this physically obvious? What would it mean if $q$ were not constant?`,
        a: String.raw`(1) Result: Constant $q$ follows from energy conservation in steady turbulence; if $q$ were not constant, energy would pile up at some scale. (2) Steps: In steady turbulence, energy is injected at the forcing scale and dissipated at the Kolmogorov scale. No energy is created or destroyed between these scales. So the rate of energy transfer at every intermediate scale must equal the input rate. If $q$ varied with $k$, eddy kinetic energy at that scale would grow without bound. Steady turbulence rules this out. (3) Why correct: The assumption of constant $q$ is equivalent to saying turbulence is in a statistical steady state. It fails during transients and in intermittent flows.`
      },
      {
        q: String.raw`Self-explain: The Taylor rolls in Couette flow appear spontaneously when $Re$ exceeds a threshold. Why does the smooth laminar flow become unstable? What does the flow gain by reorganizing into rolls?`,
        a: String.raw`(1) Result: The centrifugal instability allows the flow to relax an unfavorable radial angular-momentum gradient; rolls lower the free energy of the flow. (2) Steps: In rotating Couette flow, fast inner fluid sits closer to the center than slow outer fluid. The centrifugal force pushes fast fluid outward. If a fluid parcel is nudged outward, it carries more angular momentum than the surrounding fluid at its new location. The net centrifugal force exceeds the restoring force. The parcel continues outward: instability. Taylor rolls exchange inner and outer fluid, equalizing angular momentum. (3) Why correct: The Rayleigh criterion says flow is unstable when angular momentum decreases outward. The onset of Taylor rolls is a spontaneous symmetry breaking: the azimuthal uniformity breaks into a periodic pattern of rolls.`
      },
      {
        q: String.raw`Error detection: A student computes the Poiseuille flow rate through two parallel identical pipes of radius $a$ and length $L$ (connected in parallel, same pressure drop $\Delta P$). The student says: "Each pipe carries flow $F = \Delta P\pi a^4/(8\eta L)$. Two in parallel carry total flow $F_\text{total} = F/2$." Find the error.`,
        a: String.raw`(1) Result: The error is the last step. Parallel pipes add flow rates, not halve them. (2) Steps: Each pipe independently carries $F = \Delta P\pi a^4/(8\eta L)$, because each pipe sees the same pressure drop $\Delta P$. Total flow is $F_\text{total} = 2F$, not $F/2$. (3) Why correct: In parallel flow (like parallel resistors), the same pressure drop drives each branch independently. The flows add. Series hydraulic resistances add; parallel hydraulic resistances give $1/R_\text{total} = 1/R_1 + 1/R_2$, so total flow doubles.`
      },
      {
        q: String.raw`Error detection: A student claims: "At very high Reynolds number, viscosity becomes negligible. So the Navier-Stokes equation reduces to the Euler equation and flows are inviscid everywhere." What is wrong?`,
        a: String.raw`(1) Result: Viscosity remains important in thin boundary layers near walls even at high $Re$. (2) Steps: The viscous term $\nu\nabla^2\mathbf{v} \sim \nu V/L^2$ is indeed small compared to the inertial term $V^2/L$ for $Re \gg 1$ over length scales $L$. But near a solid wall, the relevant length scale is the boundary layer thickness $\delta \sim L/Re^{1/2} \ll L$. Over this short scale, $\nu\nabla^2\mathbf{v} \sim \nu V/\delta^2 \sim V^2/L$, comparable to the inertial term. (3) Why correct: Prandtl's boundary layer theory explains this precisely. The Euler equation describes the bulk "outer" flow. The Navier-Stokes equation must be used in the thin "inner" boundary layer. Ignoring the boundary layer misses all drag physics and separation.`
      },
      {
        q: String.raw`Compare the turbulent wake width for a cylinder at $x = 1$ m downstream with $d = 0.02$ m, $C_D = 1$ in wind at $V = 10$ m/s (air, $\nu = 10^{-5}$ m$^2$s$^{-1}$). Is the flow turbulent? Is the wake turbulent or laminar?`,
        a: String.raw`(1) Result: $Re_d \approx 2\times10^4$ (turbulent wake). Turbulent wake width $w \approx 0.058$ m. (2) Steps: $Re_d = Vd/\nu = 10\times0.02/10^{-5} = 2\times10^4$. Turbulent wake width: $w \sim (C_D dx/6)^{1/2} = (1\times0.02\times1/6)^{1/2} \approx 0.058$ m. Compare to laminar: $w_\text{lam} \sim 2(\nu x/V)^{1/2} = 2\times10^{-3}$ m = 2 mm. Turbulent wake is $\sim 30$ times wider. (3) Why correct: At $Re_d = 2\times10^4$, you are well past the Kármán vortex shedding regime and into the turbulent wake regime. Turbulent entrainment drives the rapid wake spreading.`
      },
      {
        q: String.raw`What does the relativistic perfect-fluid stress-energy tensor $T^{\alpha\beta} = (\rho + P)u^\alpha u^\beta + P g^{\alpha\beta}$ package together? When does it reduce to the nonrelativistic limit?`,
        a: String.raw`(1) Result: It packages energy density, momentum flux, and pressure into one tensor. It replaces both the continuity equation and the Euler equation at once. (2) Steps: The term $(\rho + P)u^\alpha u^\beta$ carries energy and momentum transported by the moving fluid. The term $P g^{\alpha\beta}$ is the isotropic pressure contribution. Rest-mass conservation and a relativistic Euler equation follow from $\nabla_\beta T^{\alpha\beta} = 0$. (3) Why correct: When $v \ll c$, $u^\alpha \to (1, \mathbf{v})$ and $\rho \gg P$ (nonrelativistic fluid). The tensor reduces to the everyday mass density $\rho$ and momentum flux $\rho\mathbf{v}$. The everyday Euler equation reappears.`
      },
      {
        q: String.raw`A mackerel (length $L = 0.3$ m) swims at $V = 2$ m/s. Its drag coefficient is $C_D = 0.0043$. A bluff object of the same frontal area has $C_D \approx 1$ at the same $Re$. How many times more power does the mackerel save by being streamlined?`,
        a: String.raw`(1) Result: The mackerel saves a factor of $\sim 233$ in drag force and power. (2) Steps: $Re = VL/\nu \approx 2\times0.3/10^{-6} = 6\times10^5$ (water). Drag force $F_D = C_D\times\frac{1}{2}\rho V^2 A$. Same $\rho$, $V$, $A$ for both. Ratio: $F_D^\text{bluff}/F_D^\text{mackerel} = 1/0.0043 \approx 233$. Power = $F_D\times V$, same ratio. (3) Why correct: The mackerel maintains a laminar or mildly turbulent boundary layer almost to the tail with no separation. The bluff object separates near its widest point, leaving a turbulent wake roughly as wide as the object. Streamlining eliminates pressure drag almost entirely.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Viscous Fluids: Navier-Stokes and Turbulence',
      sections: [
        <>
          <h2>Prerequisite Equations (Ideal Fluid Foundations)</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Continuity (mass conservation)</div>
              <div className="ref-formula-eq">{`$$\\frac{\\partial\\rho}{\\partial t} + \\nabla\\cdot(\\rho\\mathbf{v}) = 0$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: for any fluid flow to enforce mass conservation; reduces to{' '}
                    {`$\\nabla\\cdot\\mathbf{v}=0$`} for incompressible flow.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Euler equation (ideal fluid)</div>
              <div className="ref-formula-eq">{`$$\\rho\\frac{d\\mathbf{v}}{dt} = -\\nabla P + \\rho\\mathbf{g}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: inviscid flow where viscosity is negligible (very high {`$Re$`}{' '}
                    bulk flow, away from boundaries).
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Bernoulli function</div>
              <div className="ref-formula-eq">{`$$B \\equiv \\tfrac{1}{2}v^2 + h + \\Phi = \\text{const along streamlines}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: steady, ideal, inviscid flow along a streamline to relate speed and
                    pressure. Here {`$h$`} is the specific enthalpy (internal energy plus{' '}
                    {`$P/\\rho$`} per unit mass) and {`$\\Phi$`} is the gravitational potential.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Vorticity definition</div>
              <div className="ref-formula-eq">{`$$\\boldsymbol{\\omega} = \\nabla\\times\\mathbf{v}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: to measure local rotation of fluid; needed for vortex dynamics and
                    boundary layer analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Incompressibility criterion</div>
              <div className="ref-formula-eq">{`$$\\nabla\\cdot\\mathbf{v} \\approx 0$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: valid when flow speed {`$v \\ll C$`} (sound speed); applies to
                    nearly all engineering and biological flows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Velocity Gradient Decomposition</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Full decomposition</div>
              <div className="ref-formula-eq">{`$$\\nabla\\mathbf{v} = \\tfrac{1}{3}\\theta\\mathbf{g} + \\boldsymbol{\\sigma} + \\mathbf{r}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: always as the first step in analyzing any viscous stress; the three
                    parts are physically independent.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Expansion rate</div>
              <div className="ref-formula-eq">{`$$\\theta = \\nabla\\cdot\\mathbf{v}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: measures volumetric expansion; equals zero in incompressible flow.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Rate-of-shear tensor</div>
              <div className="ref-formula-eq">{`$$\\sigma_{ij} = \\tfrac{1}{2}(v_{i;j}+v_{j;i}) - \\tfrac{1}{3}\\theta g_{ij}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: the symmetric trace-free part of {`$\\nabla\\mathbf{v}$`}; drives
                    shear viscous stress; zero for rigid-body rotation.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Rate-of-rotation tensor</div>
              <div className="ref-formula-eq">{`$$r_{ij} = \\tfrac{1}{2}(v_{i;j}-v_{j;i}) = -\\tfrac{1}{2}\\varepsilon_{ijk}\\omega^k$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: antisymmetric part of {`$\\nabla\\mathbf{v}$`}; encodes vorticity;
                    carries no viscous stress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Viscous Stress and Transport Coefficients</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Viscous stress tensor</div>
              <div className="ref-formula-eq">{`$$\\mathbf{T}_\\text{vis} = -\\zeta\\theta\\mathbf{g} - 2\\eta\\boldsymbol{\\sigma}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: to find viscous force in any Newtonian fluid; bulk viscosity{' '}
                    {`$\\zeta$`} term vanishes for incompressible flow.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Kinematic viscosity</div>
              <div className="ref-formula-eq">{`$$\\nu \\equiv \\frac{\\eta}{\\rho}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: anytime you write the incompressible Navier-Stokes equation;{' '}
                    {`$\\nu$`} appears directly as the coefficient of {`$\\nabla^2\\mathbf{v}$`}.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Molecular estimate of shear viscosity</div>
              <div className="ref-formula-eq">{`$$\\eta \\approx \\frac{1}{3}\\rho v_\\text{th}\\lambda$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: to estimate {`$\\eta$`} from molecular properties; predicts{' '}
                    {`$\\eta \\propto T^{1/2}$`} for gases, qualitatively opposite trend for
                    liquids.
                  </p>
                </div>
              </div>
            </div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Fluid</th>
                    <th>
                      {`$\\nu$`} ({`$\\frac{\\text{m}^2}{\\text{s}}$`})
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Water</td>
                    <td>{`$10^{-6}$`}</td>
                  </tr>
                  <tr>
                    <td>Blood</td>
                    <td>{`$3\\times10^{-6}$`}</td>
                  </tr>
                  <tr>
                    <td>Air</td>
                    <td>{`$10^{-5}$`}</td>
                  </tr>
                  <tr>
                    <td>Glycerine</td>
                    <td>{`$10^{-3}$`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2>The Navier-Stokes Equation</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">
                Navier-Stokes (general, compressible, variable viscosity)
              </div>
              <div className="ref-formula-eq">{`$$\\rho\\frac{d\\mathbf{v}}{dt} = -\\nabla P + \\rho\\mathbf{g} + \\nabla(\\zeta\\theta) + 2\\nabla\\cdot(\\eta\\boldsymbol{\\sigma})$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: compressible flow or variable-viscosity fluids; reduces to simpler
                    form for incompressible flow.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">
                Navier-Stokes (incompressible, constant {`$\\eta$`})
              </div>
              <div className="ref-formula-eq">{`$$\\frac{d\\mathbf{v}}{dt} = -\\frac{\\nabla P}{\\rho} + \\mathbf{g} + \\nu\\nabla^2\\mathbf{v}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: the primary working form for incompressible viscous flows (water,
                    blood, low-speed air); valid when {`$v \\ll C$`}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Entropy Production (Second Law Constraints)</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Lagrangian entropy production</div>
              <div className="ref-formula-eq">{`$$T\\!\\left[\\rho\\frac{ds}{dt} + \\nabla\\cdot\\!\\left(\\frac{\\mathbf{F}_\\text{cond}}{T}\\right)\\right] = \\zeta\\theta^2 + 2\\eta\\boldsymbol{\\sigma}:\\boldsymbol{\\sigma} + \\frac{\\kappa}{T}(\\nabla T)^2$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: to derive that {`$\\eta\\geq0$`}, {`$\\zeta\\geq0$`},{' '}
                    {`$\\kappa\\geq0$`} from the second law; to compute entropy generation in a
                    viscous flow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Reynolds Number and Dynamical Similarity</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Reynolds number</div>
              <div className="ref-formula-eq">{`$$Re = \\frac{VL}{\\nu}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: always, as the first step in any flow analysis; determines laminar
                    vs turbulent regime and enables scale-model comparisons.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Drag coefficient</div>
              <div className="ref-formula-eq">{`$$C_D \\equiv \\frac{F_D}{\\tfrac{1}{2}\\rho V^2 d}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: dimensionless drag for objects; {`$d$`} is the object diameter or
                    chord.
                  </p>
                </div>
              </div>
            </div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>{`$Re_d$`} range</th>
                    <th>Flow regime</th>
                    <th>{`$C_D$`} approx</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{`$Re_d \\ll 1$`}</td>
                    <td>Stokes (creeping) flow</td>
                    <td>{`$6/Re_d$`}</td>
                  </tr>
                  <tr>
                    <td>
                      {`$Re_d \\sim 1$`}-{`$5$`}
                    </td>
                    <td>Departure from Stokes; retrograde eddies</td>
                    <td>
                      {`$\\sim 1$`}-{`$3$`}
                    </td>
                  </tr>
                  <tr>
                    <td>{`$Re_d \\sim 100$`}</td>
                    <td>Kármán vortex street</td>
                    <td>{`$\\sim 1$`}</td>
                  </tr>
                  <tr>
                    <td>
                      {`$Re_d \\sim 10^3$`}-{`$10^5$`}
                    </td>
                    <td>Turbulent wake</td>
                    <td>{`$\\approx 1$`}</td>
                  </tr>
                  <tr>
                    <td>{`$Re_d \\gtrsim 3\\times10^5$`}</td>
                    <td>Turbulent boundary layer</td>
                    <td>{`$\\approx 0.3$`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <NsReynoldsRegimes />
            </div>
          </div>

          <h2>Stokes (Creeping) Flow</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Stokes drag on a sphere</div>
              <div className="ref-formula-eq">{`$$F = 6\\pi\\eta a v$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: sphere of radius {`$a$`} moving at speed {`$v$`} through fluid at{' '}
                    {`$Re \\ll 1$`}; standard formula for Stokes sedimentation and viscometry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Poiseuille and Couette Flow</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Poiseuille velocity profile</div>
              <div className="ref-formula-eq">{`$$v(\\varpi) = -\\frac{dP}{dz}\\cdot\\frac{a^2 - \\varpi^2}{4\\eta}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: laminar, steady, pressure-driven flow in a circular pipe of radius{' '}
                    {`$a$`}; parabolic profile.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Poiseuille flow rate (Hagen-Poiseuille law)</div>
              <div className="ref-formula-eq">{`$$F = -\\frac{dP}{dz}\\cdot\\frac{\\pi a^4}{8\\eta}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: to compute volume flow rate or hydraulic resistance of a pipe; flow{' '}
                    {`$\\propto a^4$`}, so radius dominates.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Hydraulic resistance per unit length</div>
              <div className="ref-formula-eq">{`$$\\frac{dR}{dz} = \\frac{8\\eta}{\\pi a^4}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: building circulatory network models; pipes in series add {`$R$`},
                    pipes in parallel add {`$1/R$`}.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">
                Couette flow (plate separation {`$h$`}, top plate speed {`$U$`})
              </div>
              <div className="ref-formula-eq">{`$$v(y) = U\\frac{y}{h}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: shear-driven flow between parallel plates with no pressure
                    gradient; viscosity definition made concrete.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Womersley number (pulsatile blood flow)</div>
              <div className="ref-formula-eq">{`$$W \\equiv \\sqrt{\\frac{\\omega a^2}{\\nu}}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: oscillatory pressure-driven flow in a blood vessel; {`$W \\ll 1$`}{' '}
                    gives quasi-steady Poiseuille; {`$W \\gg 1$`} gives plug-like oscillating flow.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <NsPoiseuilleFlow />
            </div>
          </div>

          <h2>Turbulence: Reynolds Decomposition and Stress</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Reynolds decomposition</div>
              <div className="ref-formula-eq">{`$$\\mathbf{v} = \\bar{\\mathbf{v}} + \\delta\\mathbf{v},\\quad P = \\bar{P} + \\delta P$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: any turbulence analysis; separates mean flow (predictable) from
                    fluctuations (statistical).
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">
                Time-averaged Navier-Stokes (with Reynolds stress)
              </div>
              <div className="ref-formula-eq">{`$$\\rho(\\bar{\\mathbf{v}}\\cdot\\nabla)\\bar{\\mathbf{v}} = -\\nabla\\bar{P} + \\rho\\nu\\nabla^2\\bar{\\mathbf{v}} - \\nabla\\cdot\\mathbf{T}_R$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: to analyze how turbulence modifies mean flow; {`$\\mathbf{T}_R$`}{' '}
                    is the extra turbulent stress.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Reynolds stress tensor</div>
              <div className="ref-formula-eq">{`$$T_{R}^{ij} \\equiv \\rho\\overline{\\delta v^i\\delta v^j}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: whenever turbulent fluctuations couple to mean flow; always
                    positive on diagonal (turbulent kinetic energy density components).
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Turbulent viscosity estimate</div>
              <div className="ref-formula-eq">{`$$\\nu_t \\approx \\frac{1}{3}v_\\ell\\ell$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: to estimate effective turbulent momentum transport; {`$v_\\ell$`}{' '}
                    is eddy velocity, {`$\\ell$`} is eddy size.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Turbulent Wake and Jet Scaling</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">2D turbulent wake width</div>
              <div className="ref-formula-eq">{`$$w \\sim \\left(\\frac{C_D d x}{6}\\right)^{1/2}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: behind a 2D object (cylinder) at high {`$Re$`}; wake width grows as{' '}
                    {`$\\sqrt{x}$`}.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">2D laminar wake width</div>
              <div className="ref-formula-eq">{`$$w \\sim 2\\sqrt{\\frac{\\nu x}{V}}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: laminar wake at moderate {`$Re$`}; grows by vorticity diffusion;
                    use only when {`$Re_d$`} is at most a few hundred.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Kolmogorov Energy Cascade</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Kolmogorov velocity spectrum (inertial range)</div>
              <div className="ref-formula-eq">{`$$u_k(k) \\sim q^{2/3}k^{-5/3} \\quad \\text{for } k_\\text{min} \\ll k \\ll k_\\text{max}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: any fully developed, homogeneous, isotropic turbulence in the
                    inertial range; {`$q$`} is energy injection rate per unit mass (
                    {`$\\frac{\\text{m}^2}{\\text{s}^3}$`}).
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Kolmogorov dissipation-scale wavenumber</div>
              <div className="ref-formula-eq">{`$$k_\\text{max} \\sim q^{1/4}\\nu^{-3/4}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: to find the smallest eddies in turbulence; below{' '}
                    {`$k_\\text{max}^{-1}$`}, viscosity dominates.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Range of scales in turbulence</div>
              <div className="ref-formula-eq">{`$$\\frac{k_\\text{max}}{k_\\text{min}} \\sim Re_\\ell^{3/4}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: to estimate the number of grid points needed for DNS; or the
                    dynamic range of a turbulent flow.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <NsKolmogorovSpectrum />
            </div>
          </div>

          <h2>Turbulent Boundary Layers</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Laminar sublayer thickness</div>
              <div className="ref-formula-eq">{`$$\\delta_{ls} = \\frac{\\nu}{v_\\ell}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: the inner region where molecular viscosity dominates even inside a
                    turbulent boundary layer; linear velocity profile here.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Logarithmic mean flow in turbulent zone</div>
              <div className="ref-formula-eq">{`$$\\bar{v} \\approx v_\\ell\\!\\left[1 + \\ln\\!\\left(\\frac{y}{\\delta_{ls}}\\right)\\right] \\quad \\text{for } y \\gtrsim \\delta_{ls}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: the turbulent zone outside the laminar sublayer; logarithmic
                    profile is universal.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Blasius laminar boundary layer thickness</div>
              <div className="ref-formula-eq">{`$$\\delta \\approx 5\\sqrt{\\frac{\\nu x}{V}}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: laminar flat-plate boundary layer at distance {`$x$`} from leading
                    edge; valid for {`$Re_x \\lesssim 5\\times10^5$`}.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <NsBlasiusLayer />
            </div>
          </div>

          <h2>Routes to Chaos</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Period-doubling route (Feigenbaum)</div>
              <div className="ref-formula-eq">{`$$\\delta = 4.66920160910\\ldots$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: confined convection near onset reduces to a one-hump 1D map and
                    doubles its period at the universal Feigenbaum rate. Each successive doubling
                    arrives a factor {`$\\delta$`} sooner than the last, the same ratio for every
                    such map.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Lyapunov exponent</div>
              <div className="ref-formula-eq">{`$$p = \\lim_{n\\to\\infty}\\frac{1}{n}\\ln\\!\\left|\\frac{\\varepsilon_n}{\\varepsilon_0}\\right|$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: to quantify sensitivity to initial conditions; {`$p > 0$`} means
                    chaos; {`$1/p$`} is the predictability timescale.
                  </p>
                </div>
              </div>
            </div>
            <div className="ref-formula">
              <div className="ref-formula-name">Lorenz equations</div>
              <div className="ref-formula-eq">{`$$\\frac{dx}{dt} = 10(y-x),\\quad \\frac{dy}{dt} = -xz + 28x - y,\\quad \\frac{dz}{dt} = xy - \\frac{8z}{3}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: the canonical chaotic dynamical system; models Rayleigh-Benard
                    convection schematically; exhibits strange attractor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Relativistic Perfect Fluid (Track-Two, Brief)</h2>
          <div className="ref-section">
            <div className="ref-formula">
              <div className="ref-formula-name">Relativistic stress-energy tensor</div>
              <div className="ref-formula-eq">{`$$T^{\\alpha\\beta} = \\left(\\rho + P\\right)u^\\alpha u^\\beta + P g^{\\alpha\\beta}$$`}</div>
              <div className="ref-formula-desc">
                <div>
                  <p>
                    When to use: fluid moving near the speed of light; packages energy density,
                    momentum flux, and pressure into one tensor; reduces to Newtonian mass density
                    and momentum flux when {`$v \\ll c$`}.
                  </p>
                </div>
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
