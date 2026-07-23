import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { VizFigure } from '../../../../../components/viz-figure'
import {
  IdFlowMaterialDeriv,
  IdFlowContinuity,
  IdFlowEulerForce,
  IdFlowVenturi,
  IdFlowPotentialCylinder,
  IdFlowSourceSinkVortex,
  IdFlowVorticity,
  IdFlowVortexStretch,
  IdFlowKelvinLoop,
  IdFlowHydrostatic,
  IdFlowSound
} from '../../../../../components/viz'

export default function IdealFluids() {
  const config = {
    cssPrefix: 'if',
    documentTitle: 'Ideal Fluids and the Euler Equations - AETHER',
    learning: {
      groupTitle: 'Continuum and Field-Theoretic Mechanics',
      category: 'Module 6',
      title: 'Ideal Fluids and the Euler Equations',
      subtitle:
        "Mass, momentum, and vorticity in a perfect, inviscid fluid: from hydrostatics to potential flow and Kelvin's theorem.",
      sections: [
        <>
          <h2>What Is a Fluid?</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You push on a solid block and it holds its shape. You push on water and it flows away.
              What is the physical difference between a solid and a fluid at the molecular scale?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Fluid molecules have no fixed lattice positions. Any shear force simply makes layers
                slide past each other. Solids have lattice bonds that restore shape after small
                distortions. The defining property of a fluid is that it cannot resist shear stress
                when at rest.
              </p>
            </details>
          </div>

          <p>
            A fluid is any substance that cannot resist a shear force when at rest. Solids resist
            shearing; fluids yield to it. Both liquids and gases count as fluids.
          </p>
          <p>
            Fluids can flow, which means their molecules slip past each other freely. The key
            distinction is not density or state of matter: it is whether the material has long-term
            shear resistance.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Ideal Fluid</span>
              <p>
                Zero viscosity and zero heat conduction. Exerts only isotropic pressure (equal push
                in every direction) on neighboring elements. Never a shearing stress.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Viscous Fluid</span>
              <p>
                Adds a stress tensor (a set of direction-dependent surface forces) that resists
                shear and damps relative motion. Causes energy dissipation and entropy production.
              </p>
            </div>
          </div>

          <h3>The Continuum Picture</h3>
          <p>
            Real fluids are made of molecules. But we never track individual molecules. Instead, we
            define smooth fields: density {`$\\rho$`}, pressure {`$P$`}, and flow velocity{' '}
            {`$\\mathbf{v}$`}, each a function of position and time. These fields are averages over
            tiny volumes that still contain millions of molecules.
          </p>
          <p>
            This works when the macroscopic scales of interest are much larger than the mean free
            path between molecular collisions. For most everyday fluids, the mean free path is
            nanometers; macroscopic scales are centimeters or more.
          </p>

          <p>
            <strong>When to use this:</strong> Use the continuum description whenever the length
            scale of the flow is much larger than the mean free path of the fluid molecules.
          </p>

          <p>
            <strong>Concrete example (blood as a fluid).</strong> Blood has density{' '}
            {`$\\rho \\approx 1050\\,\\text{kg}\\,\\text{m}^{-3}$`} and a mean flow velocity of
            roughly {`$0.1$`} to {`$1\\,\\text{m}\\,\\text{s}^{-1}$`} in major vessels. Red blood
            cells, platelets, and plasma together act as a fluid. The vessel diameter is far larger
            than a single cell. The continuum description applies in the aorta and large arteries.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The step that surprises most people is recognizing that blood, which contains discrete
              cells, is still modeled as a smooth fluid. A single parcel of blood at the macroscopic
              scale (say, 1 mm cubed) contains millions of cells and plasma molecules. The average
              over those particles gives smooth {`$\\rho$`}, {`$P$`}, and {`$\\mathbf{v}$`} fields.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The continuum approximation holds whenever the macroscopic length scale of the flow
                is much larger than the mean free path or the particle spacing. For blood in the
                aorta (vessel diameter ~2.5 cm, cell size ~8 microns), the separation of scales is
                about 3000. The averaged fields vary smoothly on the macroscopic scale, and the
                discreteness of the cellular structure is irrelevant for computing forces,
                pressures, and flow rates.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Describing Flow: Eulerian and Lagrangian Views</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A river flows faster through a narrow gorge than through a wide valley. If you float a
              leaf downstream, it accelerates. If you stand on the bank and measure the current at
              one fixed point, nothing changes with time. How can both be true at once?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The Eulerian field is steady (nothing changes at a fixed point), but a parcel moves
                into a region where the velocity field is larger. The material derivative captures
                both effects.
              </p>
            </details>
          </div>

          <p>
            There are two ways to describe a fluid. The Eulerian view fixes a location in space and
            asks: what is the fluid doing here, right now? The Lagrangian view attaches a label to
            each fluid parcel and follows it wherever it goes.
          </p>
          <p>
            In the Eulerian view, {`$\\rho(\\mathbf{x},t)$`}, {`$P(\\mathbf{x},t)$`}, and{' '}
            {`$\\mathbf{v}(\\mathbf{x},t)$`} are fields at fixed points {`$\\mathbf{x}$`}. The time
            derivative {`$\\partial/\\partial t$`} at fixed {`$\\mathbf{x}$`} tells you how the
            field changes at that location.
          </p>
          <p>
            A quick reminder of the three {`$\\nabla$`} operators you met earlier with conservative
            forces, since they run through this whole page. The gradient {`$\\nabla f$`} points in
            the direction a scalar {`$f$`} rises fastest, like the uphill slope on a hill. The
            divergence {`$\\nabla\\cdot\\mathbf{v}$`} measures how much a vector field spreads out
            of a point, the net outflow. The curl {`$\\nabla\\times\\mathbf{v}$`} measures how much
            it spins around a point, what a tiny paddle wheel would feel.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Eulerian</span>
              <p>
                Sit at a fixed point and watch fluid stream by. The time derivative{' '}
                {`$\\partial/\\partial t$`} is at fixed position. Fields: {`$\\rho(\\mathbf{x},t)$`}
                , {`$P(\\mathbf{x},t)$`}, {`$\\mathbf{v}(\\mathbf{x},t)$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Lagrangian</span>
              <p>
                Ride along with a fluid parcel. The time derivative {`$d/dt$`} follows the parcel's
                position {`$\\mathbf{x}(t)$`}. The material derivative connects them:{' '}
                {`$d/dt = \\partial/\\partial t + \\mathbf{v}\\cdot\\nabla$`}.
              </p>
            </div>
          </div>

          <h3>The Material Derivative</h3>
          <p>
            <strong>When to use this:</strong> Use the material derivative whenever you need the
            rate of change of a quantity for a specific parcel of fluid moving with the flow.
          </p>

          <p>
            Consider a fluid property {`$f(\\mathbf{x},t)$`} such as temperature. Following a parcel
            that moves from {`$\\mathbf{x}$`} to {`$\\mathbf{x} + \\mathbf{v}\\,dt$`} in time{' '}
            {`$dt$`}, the change in {`$f$`} is:
          </p>

          <div className="lrn-eq">
            {`$$\\frac{df}{dt} = \\frac{\\partial f}{\\partial t} + \\mathbf{v}\\cdot\\nabla f$$`}
          </div>

          <p>The material (advective) time derivative is:</p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\frac{d}{dt} \\equiv \\frac{\\partial}{\\partial t} + \\mathbf{v}\\cdot\\nabla$$`}
          </div>

          <p>
            The first term, {`$\\partial/\\partial t$`}, is the local change at a fixed point. The
            second term, {`$\\mathbf{v}\\cdot\\nabla f$`}, is the change because the parcel moves
            into a region where {`$f$`} is different. This second piece is called the advective or
            convective term, meaning it is the part carried along by the flow.
          </p>

          <p>
            Read {`$\\mathbf{v}\\cdot\\nabla$`} as a single operator: the rate of change as you step
            along the flow direction at speed {`$v$`}. In plain components it is{' '}
            {`$v_x\\,\\partial/\\partial x + v_y\\,\\partial/\\partial y + v_z\\,\\partial/\\partial z$`}
            . Applied to the velocity itself it gives a vector,{' '}
            {`$(\\mathbf{v}\\cdot\\nabla)\\mathbf{v}$`}, whose {`$i$`}-th component is{' '}
            {`$v_j\\,\\partial_j v_i$`} (a shorthand that sums over {`$j$`} and writes{' '}
            {`$\\partial_j$`} for {`$\\partial/\\partial x_j$`}). This is the rate at which a
            parcel's own velocity changes as it is carried into faster or slower surroundings.
          </p>

          <p>
            <strong>Example (the river gorge).</strong> In a steady river (
            {`$\\partial\\mathbf{v}/\\partial t = 0$`}), a leaf accelerates because it moves into
            the gorge where the velocity field is larger. The material derivative{' '}
            {`$d\\mathbf{v}/dt = \\mathbf{v}\\cdot\\nabla\\mathbf{v}$`} is nonzero even though the
            Eulerian derivative {`$\\partial\\mathbf{v}/\\partial t$`} is zero.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Derive that{' '}
                {`$d\\mathbf{v}/dt = \\partial\\mathbf{v}/\\partial t + (\\mathbf{v}\\cdot\\nabla)\\mathbf{v}$`}{' '}
                starting from the definition of the material derivative applied to velocity.
              </p>
              <p>
                Apply {`$d/dt = \\partial/\\partial t + \\mathbf{v}\\cdot\\nabla$`} to each
                component {`$v_i$`}. The result is{' '}
                {`$dv_i/dt = \\partial v_i/\\partial t + v_j\\partial_j v_i$`}. In vector form this
                is{' '}
                {`$d\\mathbf{v}/dt = \\partial\\mathbf{v}/\\partial t + (\\mathbf{v}\\cdot\\nabla)\\mathbf{v}$`}
                .
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>
                  Write the material derivative operator {`$d/dt$`} acting on a scalar{' '}
                  {`$f(\\mathbf{x},t)$`}.
                </li>
                <li>
                  Apply it to the {`$x$`}-component of velocity, {`$v_x(\\mathbf{x},t)$`}.
                </li>
                <li>
                  Identify which term is the local rate of change and which is the convective term.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Show that for a steady 1D flow {`$v(x)$`} (no time dependence), the acceleration of
                a fluid parcel is {`$dv/dt = v\\,dv/dx$`}. Compute this for {`$v(x) = 1 + 0.5x$`} at{' '}
                {`$x = 2$`}.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The subtle part is the sign and role of {`$\\mathbf{v}\\cdot\\nabla f$`}. Even in
              perfectly steady flow, a parcel can change its properties (speed, temperature,
              density) purely because it is being carried into a different region of the fluid.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In steady flow the Eulerian field {`$f(\\mathbf{x})$`} does not change at any fixed
                point. But the parcel at time {`$t$`} is at position {`$\\mathbf{x}(t)$`}; at time{' '}
                {`$t+dt$`} it has moved to {`$\\mathbf{x}(t)+\\mathbf{v}\\,dt$`}. The value of{' '}
                {`$f$`} at the new location is{' '}
                {`$f(\\mathbf{x}+\\mathbf{v}\\,dt) = f(\\mathbf{x}) + (\\mathbf{v}\\cdot\\nabla f)\\,dt$`}
                . The change is purely spatial, not temporal.
              </p>
            </details>
          </div>

          <IdFlowMaterialDeriv />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Streamlines</span>
              <p>Tangent to the velocity field at one instant. Constant in steady flow.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Pathlines / Streaklines</span>
              <p>
                Pathline: actual trajectory of one parcel. Streakline: set of all parcels that
                passed through a fixed point. All three coincide only in steady flow.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Hydrostatics and Buoyancy</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A submarine sinks when it floods its ballast tanks and rises when it blows compressed
              air back into them. A steel ship floats but a solid steel ball sinks. What determines
              whether an object sinks or floats?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                An object floats when its average density (total mass divided by total volume,
                including any hollow interior) is less than the fluid density. Archimedes' law: the
                buoyancy force equals the weight of displaced fluid.
              </p>
            </details>
          </div>

          <p>
            Hydrostatics studies fluids at rest. When the fluid is stationary, the only forces on
            each parcel are pressure gradients and gravity. These must balance:
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$\\nabla P = \\rho\\mathbf{g}$$`}</div>

          <p>
            <strong>When to use this:</strong> Use the hydrostatic equation whenever the fluid is at
            rest or moving so slowly that acceleration is negligible compared with gravity.
          </p>

          <p>
            With {`$\\mathbf{g} = -g\\hat{z}$`}, this gives {`$dP/dz = -\\rho g$`}. Pressure
            increases with depth at rate {`$\\rho g$`} per meter. For water (
            {`$\\rho \\approx 1000\\,\\text{kg}\\,\\text{m}^{-3}$`}), pressure increases by about{' '}
            {`$10^4\\,\\text{Pa}$`} per meter of depth.
          </p>

          <h3>Archimedes' Law</h3>
          <p>
            A submerged object of volume {`$V$`} displaces fluid of mass {`$\\rho V$`}. The net
            upward pressure force on the object's surface equals the weight of displaced fluid:
          </p>

          <div className="lrn-eq lrn-eq-hero">{`$$F_{\\rm buoyancy} = \\rho g V$$`}</div>

          <p>
            The object floats if {`$F_{\\rm buoyancy}$`} exceeds the object's weight; it sinks if
            the weight exceeds {`$F_{\\rm buoyancy}$`}.
          </p>

          <p>
            <strong>Concrete example.</strong> A steel ship is mostly hollow. Its average density
            (total mass divided by total volume, including the air inside) is less than water. So
            the weight of displaced water exceeds the ship's weight, and it floats. A solid steel
            ball has average density {`$7800\\,\\text{kg}\\,\\text{m}^{-3}$`}, far above water's{' '}
            {`$1000\\,\\text{kg}\\,\\text{m}^{-3}$`}, so it sinks.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Each layer of fluid must support the weight of all fluid above it. That weight is{' '}
              {`$\\rho g\\,\\Delta z$`} per unit area per layer thickness {`$\\Delta z$`}. Adding up
              all layers from the surface to depth {`$z$`} gives {`$P = P_0 + \\rho g z$`} for a
              uniform fluid. The pressure increase with depth is linear.
            </p>
          </div>

          <IdFlowHydrostatic />

          <h3>Buoyancy Stability and Ocean Stratification</h3>
          <p>
            <strong>When to use this:</strong> Use buoyancy stability analysis when you want to know
            whether a fluid parcel displaced upward will return (stable) or keep rising (unstable).
          </p>

          <p>
            The ocean is stratified: density decreases upward because warmer, less-salty water
            floats on top of cooler, saltier water. Displace a parcel upward by a small amount{' '}
            {`$\\delta z$`}. The parcel carries its own density {`$\\rho_{\\rm parcel}$`}, which
            changes adiabatically as it rises. The surrounding density is{' '}
            {`$\\rho_{\\rm env}(z+\\delta z)$`}.
          </p>
          <p>
            If {`$\\rho_{\\rm parcel} > \\rho_{\\rm env}$`} after displacement, the parcel is
            heavier than its surroundings and sinks back: stable. If{' '}
            {`$\\rho_{\\rm parcel} < \\rho_{\\rm env}$`}, the parcel is lighter and keeps rising:
            unstable, and convection follows.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The key to the stability analysis is that the displaced parcel changes density
              adiabatically (following its own entropy), not along the environmental gradient. If
              the environment's density drops faster with height than the parcel's own adiabatic
              density change, the parcel becomes less dense than its surroundings after rising, and
              it keeps going upward: instability.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Stability requires that when the parcel rises by {`$\\delta z$`}, the environment is
                less dense than the parcel ({`$\\rho_{\\rm env} < \\rho_{\\rm parcel}$`}). The
                parcel density changes adiabatically at rate {`$d\\rho/dz|_{\\rm adiabatic}$`}. The
                environment density changes at the actual lapse rate. Stability holds when the
                adiabatic lapse rate is smaller in magnitude than the environmental lapse rate.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Mass Conservation: The Continuity Equation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Water flows through a garden hose. You put your thumb over the end, shrinking the
              opening. The water shoots out faster. What rule forces it to speed up?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Mass cannot appear or disappear. If the cross-section shrinks and density is
                constant, the speed must increase so that the mass flux {`$\\rho A v$`} (the
                kilograms of fluid passing per second) stays the same.
              </p>
            </details>
          </div>

          <p>
            Mass cannot appear or disappear. In any small volume of fluid, the rate of mass increase
            must equal the rate of mass flowing in. This is the continuity equation.
          </p>
          <p>
            <strong>When to use this:</strong> Use the continuity equation in any fluid mechanics
            problem. It is always true for any fluid (ideal or viscous, compressible or not).
          </p>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Continuity equation (Eulerian)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\mathbf{v}) = 0$$`}</div>
              <p>
                Rate of change of density at a fixed point plus divergence of mass flux equals zero.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Continuity equation (Lagrangian)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{d\\rho}{dt} + \\rho \\nabla \\cdot \\mathbf{v} = 0$$`}</div>
              <p>
                Following a fluid parcel: rate of density change plus the parcel's expansion rate
                times density equals zero.
              </p>
            </div>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Derive the Lagrangian form from the Eulerian form. Expand{' '}
                {`$\\nabla\\cdot(\\rho\\mathbf{v}) = \\rho\\nabla\\cdot\\mathbf{v} + \\mathbf{v}\\cdot\\nabla\\rho$`}
                . Substitute into the Eulerian equation to get{' '}
                {`$\\partial\\rho/\\partial t + \\mathbf{v}\\cdot\\nabla\\rho + \\rho\\nabla\\cdot\\mathbf{v} = 0$`}
                . The first two terms are exactly {`$d\\rho/dt$`}, yielding the Lagrangian form.
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>
                  Write out {`$\\nabla\\cdot(\\rho\\mathbf{v})$`} using the product rule for
                  divergence.
                </li>
                <li>
                  Identify which two terms combine to form the material derivative {`$d\\rho/dt$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                For an incompressible fluid ({`$\\rho = \\text{const}$`}), show that both the
                Eulerian and Lagrangian continuity equations reduce to{' '}
                {`$\\nabla\\cdot\\mathbf{v} = 0$`}.
              </p>
            </div>
          </div>

          <h3>Continuity in a Streamtube</h3>
          <p>
            A streamtube is a bundle of streamlines. No fluid crosses the sides. Mass conservation
            requires:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$$`}</div>
          <p>
            For an incompressible fluid ({`$\\rho = \\text{const}$`}): {`$A_1 v_1 = A_2 v_2$`}.
            Smaller cross-section means faster speed.
          </p>

          <IdFlowContinuity />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The point worth pausing on is that continuity applies per streamtube, not just for the
              whole pipe. If the flow divides into branches, each branch carries a fraction of the
              original mass flux, and continuity applies to each branch separately.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A streamtube is defined by its bounding streamlines. By definition, no fluid crosses
                the lateral walls. So the only mass flux is through the two end caps. The mass
                entering one end per unit time must equal the mass leaving the other:{' '}
                {`$\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$`}.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Momentum Conservation: The Euler Equation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A firehose recoils backward when water shoots out. An airplane wing experiences lift.
              Both involve momentum. What equation governs how a fluid's momentum changes?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Newton's second law for a fluid parcel: net force equals mass times acceleration.
                For an ideal fluid the only forces are the pressure gradient and gravity, giving the
                Euler equation.
              </p>
            </details>
          </div>

          <p>
            Newton's second law for a fluid parcel states that the net force on the parcel equals
            its mass times acceleration. For an ideal fluid, the only forces are the pressure
            gradient and gravity.
          </p>
          <p>
            <strong>When to use this:</strong> Use the Euler equation for any ideal (inviscid) fluid
            in motion.
          </p>

          <h3>Derivation from a Force Balance on a Cube</h3>
          <p>
            Take a small cube of fluid with sides {`$\\Delta x$`}, {`$\\Delta y$`}, {`$\\Delta z$`}
            and mass {`$\\rho\\,\\Delta x\\,\\Delta y\\,\\Delta z$`}. Pressure pushes inward on
            every face. Along {`$x$`}, the left face feels {`$P(x)$`} pushing right and the right
            face feels {`$P(x+\\Delta x)$`} pushing left. The net {`$x$`} force is{' '}
            {`$[P(x) - P(x+\\Delta x)]\\,\\Delta y\\,\\Delta z = -\\frac{\\partial P}{\\partial x}\\,\\Delta x\\,\\Delta y\\,\\Delta z$`}
            . Doing the same on all three axes gives a net pressure force {`$-\\nabla P$`} per unit
            volume. Adding gravity {`$\\rho\\mathbf{g}$`} per unit volume and setting force equal to
            mass times acceleration ({`$\\rho\\,d\\mathbf{v}/dt$`} per unit volume) gives the Euler
            equation:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\rho \\frac{d\\mathbf{v}}{dt} = -\\nabla P + \\rho \\mathbf{g}$$`}
          </div>
          <p>
            <strong>Concrete instance.</strong> In still water, pressure rises with depth at{' '}
            {`$\\partial P/\\partial z = \\rho g \\approx 9800\\,\\text{Pa}$`} per meter. A parcel
            held at rest feels {`$-\\nabla P = +9800\\,\\hat{z}\\,\\text{Pa/m}$`} pushing it up,
            exactly cancelling its weight {`$\\rho g$`} pulling it down. Net force zero, so it stays
            put. Once you can balance forces on a cube, you can write the momentum equation for any
            ideal flow.
          </p>

          <h3>The Momentum-Flux Tensor Form</h3>
          <p>
            The same balance can be packaged as a momentum-flux tensor {`$T_{ij}$`}, which records
            the rate at which the {`$i$`}-component of momentum flows across a surface facing the{' '}
            {`$j$`} direction. This is the same stress tensor you met for solids on the prior
            elasticity page, now specialized to a fluid that carries no shear:
          </p>
          <div className="lrn-eq">{`$$T_{ij} = P g_{ij} + \\rho v_i v_j$$`}</div>
          <p>
            Here {`$g_{ij}$`} is the identity ({`$g_{ij} = \\delta_{ij}$`}, equal to {`$1$`} when{' '}
            {`$i = j$`} and {`$0$`} otherwise in ordinary flat space). The first term is the
            isotropic pressure force, acting equally in every direction. The second term{' '}
            {`$\\rho v_i
            v_j$`}{' '}
            is momentum carried by the flow itself. Using the continuity equation to simplify{' '}
            {`$\\partial(\\rho\\mathbf{v})/\\partial t + \\nabla\\cdot\\mathbf{T}$`} recovers the
            same Euler equation.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Show that{' '}
                {`$\\frac{\\partial(\\rho\\mathbf{v})}{\\partial t} + \\nabla\\cdot\\mathbf{T} = \\rho\\frac{d\\mathbf{v}}{dt} + \\mathbf{v}\\left(\\frac{\\partial\\rho}{\\partial t} + \\nabla\\cdot(\\rho\\mathbf{v})\\right)$`}
                . The second factor vanishes by the continuity equation, leaving{' '}
                {`$\\rho\\frac{d\\mathbf{v}}{dt} = -\\nabla P + \\rho\\mathbf{g}$`}.
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>
                  Expand {`$\\partial(\\rho\\mathbf{v})/\\partial t$`} using the product rule.
                </li>
                <li>Expand {`$\\nabla\\cdot(\\rho v_i v_j)$`} for one component.</li>
                <li>Identify the continuity equation bracket that vanishes.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Write the Euler equation in convective form by expanding {`$d\\mathbf{v}/dt$`} using
                the material derivative. Identify the nonlinear term{' '}
                {`$(\\mathbf{v}\\cdot\\nabla)\\mathbf{v}$`}.
              </p>
            </div>
          </div>

          <IdFlowEulerForce />

          <h3>The Euler Equation in Convective Form</h3>
          <div className="lrn-eq">
            {`$$\\frac{\\partial \\mathbf{v}}{\\partial t} + (\\mathbf{v} \\cdot \\nabla)\\mathbf{v} = -\\frac{\\nabla P}{\\rho} - \\nabla\\Phi$$`}
          </div>
          <p>
            Here {`$\\Phi$`} is the gravitational potential ({`$\\mathbf{g} = -\\nabla\\Phi$`}). The
            nonlinear term {`$(\\mathbf{v}\\cdot\\nabla)\\mathbf{v}$`} is what makes fluid flow hard
            to solve. There is a third way to write Euler that pulls the fluid's local spin out into
            the open, but it needs entropy and vorticity first. We build those over the next
            sections and return to that rotational form in Crocco's theorem.
          </p>
        </>,

        <>
          <h2>Bernoulli's Theorem</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You blow across the top of a piece of paper; the paper rises. An airplane generates
              lift. Both involve fast-moving fluid having lower pressure. What law unifies these?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Bernoulli's theorem: in steady ideal flow, {`$\\frac{1}{2}v^2 + P/\\rho + \\Phi$`}{' '}
                is constant along a streamline. Faster flow means lower pressure.
              </p>
            </details>
          </div>

          <p>
            Bernoulli's theorem is a conservation statement along a streamline in steady,
            barotropic, ideal flow.
          </p>
          <p>
            <strong>When to use this:</strong> Use Bernoulli's theorem for steady, inviscid flow
            that is either irrotational (everywhere) or barotropic (along streamlines). Do not use
            it across regions with significant viscous losses.
          </p>

          <h3>Derivation: Integrate Along a Streamline</h3>
          <p>
            Follow one fluid parcel along its streamline in steady flow. Project the Euler equation
            onto the direction of motion. Along that path the acceleration is {`$v\\,dv$`}, the
            pressure force per unit mass is {`$-dP/\\rho$`}, and gravity contributes {`$-d\\Phi$`}.
            Setting the sum to zero gives the differential balance:
          </p>
          <div className="lrn-eq">{`$$v\\,dv + \\frac{dP}{\\rho} + d\\Phi = 0$$`}</div>
          <p>
            Integrate along the streamline. For incompressible flow ({`$\\rho$`} constant) this
            gives Bernoulli's theorem directly:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\frac{1}{2}v^2 + \\frac{P}{\\rho} + \\Phi = \\text{const along a streamline}$$`}
          </div>
          <p>
            Once you can integrate the force balance along one streamline, you can read off the
            pressure anywhere the speed is known. For a compressible barotropic fluid the pressure
            term integrates to the specific enthalpy {`$h$`}, giving the general Bernoulli function:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$B \\equiv \\frac{1}{2}v^2 + h + \\Phi = \\text{const along a streamline}$$`}
          </div>
          <p>
            Here {`$h = u + P/\\rho$`} is the specific enthalpy. The word "specific" means per unit
            mass. {`$u$`} is the internal energy per unit mass (the thermal energy stored in the
            fluid), and {`$P/\\rho$`} is the flow work per unit mass. If the flow is also
            irrotational, meaning it has no local spin (
            {`$\\boldsymbol{\\omega} = \\nabla\\times\\mathbf{v} = 0$`}), then {`$B$`} is constant{' '}
            <em>everywhere</em>, not just along each streamline.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Derive Bernoulli along a streamline. Start from {`$v\\,dv + dP/\\rho + d\\Phi = 0$`}
                . For incompressible flow, {`$\\rho$`} is constant, so {`$dP/\\rho = d(P/\\rho)$`}.
                Integrate each term along the streamline:{' '}
                {`$\\frac{1}{2}v^2 + P/\\rho + \\Phi = \\text{const}$`}. The sum of kinetic,
                pressure, and potential energy per unit mass is fixed along the path.
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>Write the steady force balance along a streamline.</li>
                <li>
                  Integrate the {`$v\\,dv$`} term to get {`$\\frac{1}{2}v^2$`}.
                </li>
                <li>
                  Explain why the {`$dP/\\rho$`} term integrates to {`$P/\\rho$`} when {`$\\rho$`}{' '}
                  is constant.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                For a steady ideal flow, compute the pressure at a stagnation point (where the fluid
                comes to rest, {`$v = 0$`}) given the upstream speed {`$v_0$`} and pressure{' '}
                {`$P_0$`}. Show {`$P = P_0 + \\frac{1}{2}\\rho v_0^2$`} for incompressible flow.
              </p>
            </div>
          </div>

          <h3>Worked Example: The Venturi Flowmeter</h3>
          <p>
            A Venturi flowmeter is a pipe that narrows in the middle, then widens again. By
            measuring the pressure difference between the wide section and the narrow throat, you
            infer the flow speed.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-num">1</span>
              <p>
                <strong>Continuity.</strong> For incompressible horizontal flow:{' '}
                {`$v_2 = v_1 A_1/A_2$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-num">2</span>
              <p>
                <strong>Bernoulli.</strong>{' '}
                {`$\\frac{1}{2}v_1^2 + \\frac{P_1}{\\rho} = \\frac{1}{2}v_2^2 + \\frac{P_2}{\\rho}$`}
                .
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-num">3</span>
              <p>
                <strong>Solve for {`$v_1$`}.</strong>{' '}
                {`$P_1 - P_2 = \\frac{1}{2}\\rho v_1^2\\left[(A_1/A_2)^2 - 1\\right]$`}. Measuring
                the pressure drop gives the flow speed directly.
              </p>
            </div>
          </div>

          <IdFlowVenturi />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The key step is that faster flow (at the throat) has lower pressure. This seems
              backwards. The reason is that the fluid's kinetic energy increases at the expense of
              its pressure energy. Bernoulli is an energy conservation statement along a streamline.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Bernoulli's theorem says the total specific energy{' '}
                {`$\\frac{1}{2}v^2 + P/\\rho + \\Phi$`} is constant. At the throat, {`$v$`}{' '}
                increases because continuity demands it. The total energy is fixed, so {`$P/\\rho$`}{' '}
                must decrease by the same amount that {`$\\frac{1}{2}v^2$`} increases.
              </p>
            </details>
          </div>

          <h3>Worked Example: Tornado Pressure</h3>
          <p>
            Far from the tornado core, the flow is approximately irrotational. Bernoulli's theorem
            applies:
          </p>
          <div className="lrn-eq">{`$$P(r) = P_\\infty - \\frac{1}{2}\\rho v(r)^2$$`}</div>
          <p>
            The pressure is lowest where the speed is highest. The full pressure profile, including
            the very low pressure inside the core, comes from Crocco's theorem in the next sections.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why does {`$h$`} appear instead of {`$P/\\rho$`} in the general Bernoulli function?
              The enthalpy {`$h = u + P/\\rho$`} includes internal energy {`$u$`}. For a
              compressible fluid that speeds up, some energy goes into compressing or expanding the
              fluid element (changing {`$u$`}). Enthalpy accounts for both the pressure energy and
              the internal energy together. For an incompressible fluid, {`$u$`} is constant and{' '}
              {`$h - h_0 = P/\\rho$`}, recovering the simple Bernoulli form.
            </p>
          </div>
        </>,

        <>
          <h2>Energy and Entropy of an Ideal Fluid</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A gas in a cylinder can exchange heat with its surroundings. A fluid parcel in an
              ideal flow cannot. What happens to the entropy of a fluid parcel as it flows?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                With no viscosity and no heat conduction, no entropy is produced and no heat flows
                between parcels. Each parcel conserves its entropy: {`$ds/dt = 0$`}.
              </p>
            </details>
          </div>

          <h3>Energy Conservation</h3>
          <p>
            The energy density of an ideal fluid is {`$U = (\\frac{1}{2}v^2 + u + \\Phi)\\rho$`}.
            The energy flux contains enthalpy {`$h = u + P/\\rho$`}:
          </p>
          <div className="lrn-eq">
            {`$$\\mathbf{F} = \\left(\\frac{1}{2}v^2 + h + \\Phi\\right)\\rho\\mathbf{v}$$`}
          </div>
          <p>
            Energy conservation: {`$\\partial U/\\partial t + \\nabla \\cdot \\mathbf{F} = 0$`}.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              When a fluid element moves into a new region, it must push against the local pressure
              to make room. The work done per unit mass is {`$P/\\rho$`}. This "flow work" is
              automatically included in enthalpy {`$h = u + P/\\rho$`}. That is why the energy flux
              uses {`$h$`} but the energy density uses {`$u$`}.
            </p>
          </div>

          <h3>Adiabatic Flow and Entropy Conservation</h3>
          <p>
            An ideal fluid has no viscosity and no heat conduction. The first law for a fluid
            element is {`$T\\,ds = du + P\\,d(1/\\rho)$`}. Since no heat is added and no work is
            dissipated:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{ds}{dt} = 0$$`}</div>
          <p>
            <strong>When to use this:</strong> Use {`$ds/dt = 0$`} for any ideal (inviscid,
            non-heat-conducting) fluid. Entropy is a material constant: each parcel keeps its
            entropy forever.
          </p>

          <h3>Adiabatic Index and Sound Speed</h3>
          <p>
            The adiabatic index {`$\\gamma \\equiv (\\delta P/P)/(\\delta\\rho/\\rho)|_s$`} (written{' '}
            {`$\\gamma$`}, not {`$\\Gamma$`}, which this page keeps for circulation): for a
            monatomic ideal gas {`$\\gamma = 5/3$`}; for a diatomic gas (air){' '}
            {`$\\gamma \\approx 7/5$`}. The sound speed is:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$C = \\sqrt{\\left(\\frac{\\partial P}{\\partial \\rho}\\right)_s}$$`}
          </div>
          <p>For an ideal gas: {`$C = \\sqrt{\\gamma k_B T / (\\mu m_p)}$`}.</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Barotropic</span>
              <p>
                {`$P = P(\\rho)$`} only. Isobaric and isochoric surfaces coincide. No vorticity
                generation. Kelvin's theorem holds.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Baroclinic</span>
              <p>
                {`$\\nabla P \\times \\nabla\\rho \\neq 0$`}. Pressure and density gradients point
                in different directions. Net torque generates vorticity. Kelvin's theorem breaks
                down.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Crocco's Theorem</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Air rushes through a curved shock in front of a supersonic jet. Upstream the flow is
              smooth and irrotational. Downstream it swirls. Where did the spin come from, if no
              paddle stirred the air?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The curved shock heats different streamlines by different amounts. That leaves an
                entropy gradient {`$\\nabla s$`} across the flow. Crocco's theorem then forces
                vorticity {`$\\boldsymbol{\\omega} \\neq 0$`} downstream.
              </p>
            </details>
          </div>

          <p>
            Now that entropy {`$s$`}, temperature {`$T$`}, and vorticity{' '}
            {`$\\boldsymbol{\\omega} =
            \\nabla\\times\\mathbf{v}$`}{' '}
            are all in hand, we can write the third form of Euler. Use the vector calculus identity{' '}
            {`$(\\mathbf{v}\\cdot\\nabla)\\mathbf{v} = \\nabla(\\tfrac{1}{2}v^2) - \\mathbf{v}\\times(\\nabla\\times\\mathbf{v})$`}
            . The cross-product term carries the vorticity, since {`$\\nabla\\times\\mathbf{v}$`}
            measures the flow's local spin. Substitute it into the convective Euler equation and
            replace the pressure term using the thermodynamic identity{' '}
            {`$\\nabla P/\\rho = \\nabla h
            - T\\nabla s$`}
            . For steady flow this gives Crocco's theorem:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\boldsymbol{\\omega}\\times\\mathbf{v} = \\nabla B - T\\nabla s$$`}
          </div>
          <p>
            <strong>When to use this:</strong> Apply Crocco's theorem in steady flows to relate
            vorticity, Bernoulli function gradients, and entropy gradients.
          </p>
          <p>
            A barotropic fluid has {`$P = P(\\rho)$`} only, so its pressure and density gradients
            stay parallel and {`$T\\nabla s$`} drops out. For steady barotropic flow that is also
            irrotational ({`$\\boldsymbol{\\omega} = 0$`}) and isentropic, meaning uniform entropy (
            {`$\\nabla s = 0$`}), then {`$\\nabla B = 0$`} and {`$B$`} is the same constant
            everywhere.
          </p>

          <h3>Tornado Core (Crocco's Theorem)</h3>
          <p>
            Inside the tornado core the fluid rotates like a solid body: {`$v = \\Omega r$`},{' '}
            {`$\\boldsymbol{\\omega} = 2\\Omega\\hat{z}$`}. Crocco's theorem gives the pressure
            profile: pressure increases outward from the center as {`$r^2$`}, matching centrifugal
            balance. The lowest pressure is at the very center. That deep low pressure is why
            buildings can blow out when a tornado passes over them.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The catch is recognizing that inside the core, Bernoulli's theorem in its simple form
              does not apply directly (the flow is rotational). Crocco's theorem handles the
              rotational region. Outside the core, the flow is irrotational, and ordinary Bernoulli
              gives {`$B = \\text{const}$`}.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                In steady flow, the rotational Euler equation is{' '}
                {`$\\mathbf{v}\\times\\boldsymbol{\\omega} = \\nabla B - T\\nabla s$`}. For
                barotropic flow inside the core:{' '}
                {`$\\nabla B = \\boldsymbol{\\omega}\\times\\mathbf{v}$`}. With solid-body rotation{' '}
                {`$v_\\theta = \\Omega r$`} and {`$\\boldsymbol{\\omega} = 2\\Omega\\hat{z}$`}, the
                radial component gives {`$\\partial B/\\partial r = 2\\Omega^2 r$`}, so{' '}
                {`$B = \\Omega^2 r^2 + \\text{const}$`}. This determines the pressure profile inside
                the core.
              </p>
            </details>
          </div>

          <h3>Entropy-Vorticity Link</h3>
          <p>
            In a nozzle or shock, different streamlines may enter with different temperatures. After
            passing through, the entropy gradient {`$\\nabla s$`} is nonzero across streamlines.
            Crocco's theorem then requires {`$\\boldsymbol{\\omega} \\neq 0$`} in the downstream
            flow, even if the upstream flow was irrotational. Any process that deposits entropy
            non-uniformly must create vorticity.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              In the steady Euler equation, the pressure gradient is{' '}
              {`$\\nabla P/\\rho = \\nabla h - T\\nabla s$`}. If entropy is non-uniform, the
              enthalpy gradient does not equal the pressure gradient force. The mismatch appears as
              a source of vorticity when you take the curl of the Euler equation.
            </p>
          </div>
        </>,

        <>
          <h2>Incompressible Flow</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Sound travels at about {`$340\\,\\text{m}\\,\\text{s}^{-1}$`} in air. A car drives at{' '}
              {`$30\\,\\text{m}\\,\\text{s}^{-1}$`}. Is it reasonable to treat the air around the
              car as incompressible?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Yes. The Mach number is {`$v/C \\approx 30/340 \\approx 0.09$`}. The fractional
                density fluctuation is about {`$v^2/C^2 \\approx 0.008$`}: less than 1%.
                Incompressibility is valid to better than 1% accuracy.
              </p>
            </details>
          </div>

          <p>
            <strong>When to use this:</strong> Treat a flow as incompressible when {`$v \\ll C$`}{' '}
            and {`$|\\delta\\Phi| \\ll C^2$`}. The fractional density fluctuation is then{' '}
            {`$\\delta\\rho/\\rho \\sim v^2/C^2 + \\delta\\Phi/C^2 \\ll 1$`}.
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\nabla \\cdot \\mathbf{v} \\simeq 0$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              For an incompressible fluid, sound speed is formally infinite. Real fluids are
              compressible at some level; the incompressible approximation works whenever the flow
              speed is much smaller than the actual sound speed. Water, whose sound speed is about{' '}
              {`$1500\\,\\text{m}\\,\\text{s}^{-1}$`}, is nearly always incompressible in
              engineering flows.
            </p>
          </div>

          <h3>Compressible Flow: The Choked Nozzle</h3>
          <p>
            For a perfect gas at high speeds, compressibility matters. The Mach number is{' '}
            {`$M \\equiv v/C$`}. When {`$M = 1$`} at the throat, no further reduction in throat area
            can increase the mass flow rate. The flow is <strong>choked</strong>.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The surprising feature of choking is that reducing the throat area further does not
              speed up the flow once the throat has reached Mach 1. Sound waves travel at speed{' '}
              {`$C$`} relative to the fluid. If the fluid at the throat moves at speed {`$C$`}, a
              sound wave trying to travel upstream has zero net speed: it cannot escape the throat.
              Downstream changes cannot affect upstream conditions. The mass flux locks in at its
              maximum value.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The throat is a one-way valve for information. Once the flow there is sonic, no
                acoustic signal can travel upstream to communicate the downstream pressure
                conditions. The upstream state is completely determined by the supply conditions
                (reservoir pressure and temperature), not by what happens downstream of the throat.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Incompressible</span>
              <p>
                {`$v \\ll C$`}. {`$\\nabla\\cdot\\mathbf{v} = 0$`}. Venturi formula applies.
                Continuity: {`$A_1 v_1 = A_2 v_2$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Compressible</span>
              <p>
                {`$v$`} any fraction of {`$C$`}. Density varies. Choking occurs at {`$M = 1$`}.
                Adiabatic equation of state {`$P = K(s)\\rho^\\gamma$`} required.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Irrotational Flow and the Velocity Potential</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A river has lots of eddies and swirling motions. A very slow, gentle stream barely
              disturbs the water. For which type of flow is the concept of a velocity potential
              useful?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                A velocity potential exists only for irrotational flows (
                {`$\\boldsymbol{\\omega} = 0$`}). The gentle stream far from obstacles is
                approximately irrotational. Eddying, turbulent flow is rotational.
              </p>
            </details>
          </div>

          <p>
            <strong>When to use this:</strong> Use the velocity potential for irrotational flows,
            meaning flows with no local spin ({`$\\boldsymbol{\\omega} = 0$`}). This covers many
            practical cases: far from solid surfaces, high-speed low-viscosity flows, and acoustics.
          </p>
          <p>
            If {`$\\boldsymbol{\\omega} = \\nabla\\times\\mathbf{v} = 0$`} everywhere, then the
            velocity field is the gradient of a single scalar field {`$\\phi$`}, called the velocity
            potential:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\mathbf{v} = \\nabla\\phi$$`}</div>
          <p>For incompressible irrotational flow, Laplace's equation governs {`$\\phi$`}:</p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\nabla^2\\phi = 0$$`}</div>
          <p>
            This is <strong>linear</strong>. Solutions can be added together (superposition). This
            is the power of potential flow theory.
          </p>

          <IdFlowVorticity />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Irrotational</span>
              <p>
                {`$\\boldsymbol{\\omega} = 0$`}. Velocity potential {`$\\phi$`} exists. Laplace's
                equation governs it. Solutions superpose. {`$B = \\text{const}$`} everywhere
                (steady).
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rotational</span>
              <p>
                {`$\\boldsymbol{\\omega} \\neq 0$`}. No single scalar potential globally. Full
                nonlinear Euler equation. {`$B = \\text{const}$`} only along streamlines.
              </p>
            </div>
          </div>

          <h3>Building Potential Flows: Sources, Sinks, Vortices</h3>
          <p>
            Work one case in full first. Take a point source of strength {`$m$`} at the origin, with
            potential {`$\\phi = \\frac{m}{2\\pi}\\ln r$`}. The radial velocity is the radial
            derivative: {`$v_r = \\partial\\phi/\\partial r = \\frac{m}{2\\pi r}$`}. Flow streams
            straight outward and slows as {`$1/r$`}. Each building block below is found the same
            way: take the gradient of its potential to read off the velocity.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Uniform stream</strong> in the {`$x$`} direction: {`$\\phi = Ux$`}, giving{' '}
              {`$\\mathbf{v} = U\\hat{x}$`}.
            </li>
            <li>
              <strong>Point source</strong> of strength {`$m$`} at the origin:{' '}
              {`$\\phi = \\frac{m}{2\\pi}\\ln r$`}, giving outward radial flow.
            </li>
            <li>
              <strong>Point vortex</strong> of circulation {`$\\Gamma$`} (the loop integral of
              velocity around the center, defined fully in the next section):{' '}
              {`$\\phi = \\frac{\\Gamma}{2\\pi}\\theta$`}, giving circular flow with speed{' '}
              {`$v = \\Gamma/(2\\pi r)$`}.
            </li>
            <li>
              <strong>Dipole</strong> (source + sink separated): {`$\\phi = -D\\cos\\theta/r$`} in
              polar form.
            </li>
          </ul>

          <IdFlowSourceSinkVortex />
        </>,

        <>
          <h2>Potential Flow Past a Cylinder: d'Alembert's Paradox</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A cylinder sits in a steady wind. The wind bends around the cylinder and rejoins
              downstream. An engineer would expect drag. What does ideal-fluid theory predict?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Ideal-fluid theory predicts zero drag. The pressure distribution is perfectly
                symmetric front-to-back, so the net horizontal pressure force is zero. This is
                d'Alembert's paradox.
              </p>
            </details>
          </div>

          <p>
            <strong>When to use this:</strong> Use potential flow past a cylinder as the benchmark
            solution for ideal irrotational incompressible flow around a bluff body.
          </p>

          <h3>Solution</h3>
          <p>
            Place a cylinder of radius {`$a$`} in a uniform stream {`$U$`} in the {`$x$`} direction.
            The exact solution (uniform stream + dipole) is:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\phi = U\\left(r + \\frac{a^2}{r}\\right)\\cos\\theta$$`}
          </div>
          <p>The velocity components are:</p>
          <div className="lrn-eq">
            {`$$v_r = U\\left(1 - \\frac{a^2}{r^2}\\right)\\cos\\theta, \\quad v_\\theta = -U\\left(1 + \\frac{a^2}{r^2}\\right)\\sin\\theta$$`}
          </div>
          <p>
            At {`$r = a$`}: {`$v_r = 0$`} (no flow through cylinder). The tangential speed at the
            surface is {`$v_\\theta(a) = -2U\\sin\\theta$`}. Maximum speed {`$2U$`} occurs at{' '}
            {`$\\theta = \\pm 90°$`}.
          </p>

          <h3>Pressure Field</h3>
          <div className="lrn-eq">
            {`$$P(\\theta) = P_\\infty + \\frac{1}{2}\\rho U^2(1 - 4\\sin^2\\theta)$$`}
          </div>

          <h3>d'Alembert's Paradox</h3>
          <p>
            Integrating the pressure over the cylinder surface: the pressure distribution is
            symmetric, {`$P(\\theta) = P(\\pi - \\theta)$`}. The {`$x$`} component of the pressure
            force cancels exactly. <strong>Drag force is zero.</strong> Real fluids have nonzero
            drag because viscosity creates a wake.
          </p>

          <VizFigure aspect="auto" title="PRANDTL'S WATER CHANNEL">
            <figure className="lrn-figure">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c0/1904_Umlaufwasserkanal_Prandtl.jpg"
                alt="Prandtl's 1904 water channel showing flow past a cylinder, with attached and separated wake at different speeds"
              />
              <figcaption>
                Prandtl's 1904 water channel experiment showing flow past a cylinder. At low speed the
                flow is attached and resembles potential flow; at higher speed a separated wake forms,
                breaking the symmetry and producing drag.{' '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:1904_Umlaufwasserkanal_Prandtl.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </figcaption>
            </figure>
          </VizFigure>

          <IdFlowPotentialCylinder />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The surprising step is that the pressure is symmetric about the vertical axis. Every
              high-pressure region in front of the cylinder is exactly mirrored by a high-pressure
              region behind. The net horizontal force is zero by this symmetry, which follows
              directly from the symmetry of the potential flow solution.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The pressure depends only on {`$|\\mathbf{v}|^2 = v_r^2 + v_\\theta^2$`}. Using the
                velocity formulas, {`$|v|^2$`} at {`$(r, \\theta)$`} equals {`$|v|^2$`} at{' '}
                {`$(r, \\pi - \\theta)$`} (the symmetric point across the vertical axis).
                Integrating {`$P\\cos\\theta$`} over the cylinder gives zero because the integrand
                is antisymmetric about {`$\\theta = \\pi/2$`}.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why doesn't zero drag invalidate ideal-fluid theory entirely? For flow far from the
              body and for the lift calculation (when circulation is added), ideal-fluid theory is
              accurate. Drag in real flows comes from the thin viscous boundary layer and the
              separated wake. Away from them, the ideal-flow velocity field is an excellent
              approximation.
            </p>
          </div>
        </>,

        <>
          <h2>Vorticity and Circulation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A tornado spins faster near its center. A smooth river flows without obvious spinning.
              How do you measure whether a fluid is "spinning" at a given point?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Place a tiny paddle wheel in the fluid. If it spins, the vorticity{' '}
                {`$\\boldsymbol{\\omega} = \\nabla\\times\\mathbf{v} \\neq 0$`} at that point.
                Vorticity is twice the angular velocity of a fluid element.
              </p>
            </details>
          </div>

          <p>The vorticity vector is the curl of the velocity field:</p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\boldsymbol{\\omega} = \\nabla \\times \\mathbf{v}$$`}
          </div>
          <p>
            <strong>When to use this:</strong> Use vorticity as the primary diagnostic for
            rotational fluid motion. A paddle wheel placed in the fluid will spin if and only if{' '}
            {`$\\boldsymbol{\\omega} \\neq 0$`} at its location.
          </p>

          <h3>Worked Example: Constant-Angular-Momentum Flow</h3>
          <p>
            Consider a flow where {`$v_\\theta = L/r$`} (constant angular momentum). The vorticity
            in 2D polar coordinates:
          </p>
          <div className="lrn-eq">
            {`$$\\omega = \\frac{1}{r}\\frac{\\partial(rv_\\theta)}{\\partial r} = \\frac{1}{r}\\frac{\\partial L}{\\partial r} = 0$$`}
          </div>
          <p>
            This flow has zero vorticity everywhere outside {`$r = 0$`}. Even though the fluid moves
            in circles, neighboring fluid elements do not rotate relative to each other. This is an{' '}
            <strong>irrotational vortex</strong> (potential vortex).
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The surprising result is that circular streamlines do not imply vorticity. Vorticity
              measures the local spin of fluid elements relative to their neighbors, not the
              curvature of their trajectories. A small paddle wheel in the potential vortex flow
              does not spin.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                For {`$v_\\theta = L/r$`} and {`$v_r = 0$`}, the circulation{' '}
                {`$v_\\theta \\cdot 2\\pi r = 2\\pi L$`} is constant. The curl measures the
                difference in velocity across neighboring streamlines. For{' '}
                {`$v_\\theta \\propto 1/r$`}, the inner streamlines move faster by exactly the right
                amount to cancel the rotational contribution, giving zero curl everywhere except the
                singular vortex line at {`$r = 0$`}.
              </p>
            </details>
          </div>

          <h3>Circulation</h3>
          <p>Circulation is the line integral of velocity around a closed curve:</p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\Gamma \\equiv \\oint_{\\partial\\mathcal{S}} \\mathbf{v}\\cdot d\\mathbf{x} = \\int_{\\mathcal{S}} \\boldsymbol{\\omega}\\cdot d\\boldsymbol{\\Sigma}$$`}
          </div>
          <p>
            <strong>When to use this:</strong> Use circulation to quantify the total rotational
            content of a flow region. Circulation equals the flux of vorticity through any surface
            bounded by the curve (Stokes' theorem).
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Stokes' theorem converts the line integral of {`$\\mathbf{v}$`} into a surface
              integral of {`$\\nabla\\times\\mathbf{v} = \\boldsymbol{\\omega}$`}. This means
              circulation does not depend on which surface you choose, only on the bounding loop. A
              large loop enclosing many vortex lines has more circulation than a small loop
              enclosing fewer. Circulation is a global measure of vorticity content.
            </p>
          </div>
        </>,

        <>
          <h2>Kelvin's Circulation Theorem and Frozen Vortex Lines</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A spinning ice skater pulls her arms in and spins faster. If a tornado stretches
              upward (its vortex tube gets longer and thinner), what happens to its rotation speed?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Circulation {`$\\Gamma = \\omega\\pi r^2$`} is conserved by Kelvin's theorem. As the
                tube narrows ({`$r$`} decreases), {`$\\omega$`} must increase. The rotation speeds
                up.
              </p>
            </details>
          </div>

          <p>
            Kelvin's theorem states that, for a barotropic, inviscid fluid, the circulation around
            any material loop is conserved:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{d\\Gamma}{dt} = 0$$`}</div>
          <p>
            <strong>When to use this:</strong> Use Kelvin's theorem whenever you need to track
            vorticity in an ideal, barotropic flow. Vorticity cannot be created or destroyed inside
            the fluid.
          </p>

          <h3>Derivation</h3>
          <p>
            Differentiate {`$\\Gamma = \\oint\\mathbf{v}\\cdot d\\mathbf{x}$`} with respect to time,
            letting the loop move with the fluid. The term {`$\\oint d(\\frac{1}{2}v^2) = 0$`}.
            Substituting the Euler equation and using that both {`$\\oint d\\Phi = 0$`} and, for a
            barotropic fluid, {`$\\oint dP/\\rho = 0$`} (exact differentials), we get{' '}
            {`$d\\Gamma/dt = 0$`}.
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Verify that for a barotropic fluid {`$P = K\\rho^\\gamma$`}, the integral{' '}
                {`$\\oint dP/\\rho = \\oint K\\gamma\\rho^{\\gamma-2}d\\rho$`} is an exact
                differential of {`$f(\\rho) = \\frac{K\\gamma}{\\gamma-1}\\rho^{\\gamma-1}$`}, so
                its loop integral is zero. This is why Kelvin's theorem holds for barotropic flows.
              </p>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>
                  Write {`$dP/\\rho$`} for {`$P = K\\rho^\\gamma$`}.
                </li>
                <li>
                  Show it equals {`$d(K\\gamma\\rho^{\\gamma-1}/(\\gamma-1))$`}, an exact
                  differential.
                </li>
                <li>Conclude that {`$\\oint dP/\\rho = 0$`}.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                For a non-barotropic fluid where {`$P = P(\\rho, T)$`}, explain why {`$dP/\\rho$`}{' '}
                is no longer an exact differential and why Kelvin's theorem breaks down.
              </p>
            </div>
          </div>

          <IdFlowKelvinLoop />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The key step is that {`$\\oint dP/\\rho$`} vanishes for a barotropic fluid. For a
              barotropic fluid where {`$P = P(\\rho)$`}, we can write{' '}
              {`$\\int dP/\\rho = \\int (P'(\\rho)/\\rho)\\,d\\rho$`}, which is a function of{' '}
              {`$\\rho$`} alone. Since this is a single-valued function, its line integral around a
              closed loop is zero.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A line integral of an exact differential {`$df$`} around a closed loop is always
                zero, because {`$\\oint df = f(\\text{end}) - f(\\text{start}) = 0$`} when start and
                end are the same point. For a barotropic fluid,{' '}
                {`$dP/\\rho = d[\\int_0^\\rho P'(\\rho')/\\rho'\\,d\\rho']$`}, which is an exact
                differential. For a non-barotropic fluid, {`$P/\\rho$`} depends on both {`$\\rho$`}{' '}
                and {`$T$`}, so {`$dP/\\rho$`} is not exact and the loop integral can be nonzero.
              </p>
            </details>
          </div>

          <h3>Vortex Lines Frozen into the Flow</h3>
          <p>
            For a barotropic, inviscid, compressible flow:{' '}
            {`$D(\\boldsymbol{\\omega}/\\rho)/Dt = 0$`}. The capital {`$D/Dt$`} here is the same
            material derivative written {`$d/dt$`} earlier, the rate of change following a parcel.
            Vortex lines move with the fluid: they are frozen into the flow like threads in a moving
            cloth. If a vortex tube stretches, {`$|\\boldsymbol{\\omega}|$`} increases in
            proportion.
          </p>

          <h3>Worked Example: Smoke Rings</h3>
          <p>
            A vortex ring (smoke ring) moves through still air. Once the ring separates from the
            nozzle, the circulation around a loop enclosing the ring's tube is fixed: it never
            changes as the ring travels through the air. Kelvin's theorem applies in the ideal-fluid
            region after separation.
          </p>

          <VizFigure aspect="auto" title="SMOKE-RING VORTEX">
            <figure className="lrn-figure">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Giant_smoke_ring.jpg"
                alt="A large smoke ring (toroidal vortex) produced by a modified garbage bin, showing the donut-shaped vortex tube"
              />
              <figcaption>
                A smoke ring (toroidal vortex) in still air. The donut-shaped vortex tube carries
                constant circulation: by Kelvin's theorem, the vorticity content of the ring does not
                change as it travels.{' '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Giant_smoke_ring.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </figcaption>
            </figure>
          </VizFigure>

          <p>
            How can the ring exist at all if circulation cannot be created inside an ideal fluid?
            The answer is that its vorticity was born at the nozzle wall, where viscosity acts. That
            wall physics belongs to the next page on viscous fluids. Once the ring detaches and
            enters the ideal-fluid region, Kelvin's theorem takes over and freezes its circulation
            for good.
          </p>
        </>,

        <>
          <h2>Vortex-Line Stretching and Tornadoes</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Thunderstorm winds pull air upward into the storm. Near the ground, the air has weak
              horizontal vorticity from wind shear. How does upward drafting create a violently
              spinning tornado from gentle horizontal rotation?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The updraft tilts the horizontal vortex tube vertical, then stretches it. As the
                tube narrows, circulation conservation forces the vorticity to grow.
              </p>
            </details>
          </div>

          <h3>Worked Example: Tornado from Vortex-Line Stretching</h3>
          <p>
            <strong>Step 1: Tilting.</strong> An updraft tilts a horizontal vortex tube into a
            vertical orientation.
          </p>
          <p>
            <strong>Step 2: Stretching.</strong> The updraft stretches the tube: it grows longer and
            thinner.
          </p>
          <p>
            <strong>Step 3: Spin-up.</strong> From {`$D(\\boldsymbol{\\omega}/\\rho)/Dt = 0$`},
            conservation requires {`$\\omega r^2 \\approx \\text{const}$`}. As the tube narrows from{' '}
            {`$r_0$`} to {`$r_1 < r_0$`}:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\omega_1 = \\omega_0\\left(\\frac{r_0}{r_1}\\right)^2$$`}
          </div>
          <p>
            A tenfold narrowing produces a hundredfold increase in vorticity and a fiftyfold
            increase in edge wind speed.
          </p>

          <VizFigure aspect="auto" title="TORNADO VORTEX STRETCHING">
            <figure className="lrn-figure">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d6/2011_El_Reno-Piedmont%2C_Oklahoma_EF5_tornado.png"
                alt="A large EF5 tornado near El Reno, Oklahoma, showing the funnel cloud narrowing from the storm base to the ground"
              />
              <figcaption>
                EF5 tornado near El Reno, Oklahoma, May 24, 2011. The funnel narrows as vortex-line
                stretching concentrates vorticity into an increasingly thin, fast-spinning tube.{' '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:2011_El_Reno-Piedmont,_Oklahoma_EF5_tornado.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </figcaption>
            </figure>
          </VizFigure>

          <IdFlowVortexStretch />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The step worth seeing is that vortex-line stretching is the same physical mechanism as
              an ice skater pulling in her arms. Angular momentum is conserved. The skater reduces
              her moment of inertia {`$I$`} by pulling arms in; her angular velocity {`$\\omega$`}{' '}
              increases so that {`$I\\omega$`} is constant. The tornado reduces the vortex-tube
              radius; vorticity increases so that circulation {`$\\Gamma = \\omega\\pi r^2$`} is
              constant.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                For incompressible flow, {`$\\rho = \\text{const}$`}. The full vorticity equation
                gives a stretching term: {`$(\\boldsymbol{\\omega}\\cdot\\nabla)\\mathbf{v}$`}{' '}
                amplifies vorticity when {`$\\mathbf{v}$`} increases in the direction of{' '}
                {`$\\boldsymbol{\\omega}$`}. For a tube aligned with {`$z$`} with{' '}
                {`$\\partial v_z/\\partial z > 0$`} (stretching), {`$\\omega_z$`} grows. Kelvin's
                theorem then fixes {`$\\omega\\pi r^2 = \\text{const}$`}: as {`$r$`} shrinks,{' '}
                {`$\\omega$`} grows in proportion to {`$1/r^2$`}.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Consider a cylindrical fluid element of length {`$\\ell$`}, radius {`$r$`}, and mass{' '}
              {`$m = \\rho\\pi r^2\\ell$`}. As the element stretches, {`$m$`} is conserved
              (Lagrangian), so {`$\\rho r^2\\ell = \\text{const}$`}. The angular momentum per unit
              mass is {`$\\Omega r^2 \\propto \\omega r^2/\\rho$`}. From mass conservation and the
              frozen-in condition, the circulation {`$\\Gamma = \\omega\\pi r^2$`} is conserved.
            </p>
          </div>
        </>,

        <>
          <h2>Sources of Vorticity</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A pot of soup on a stove has hot liquid at the bottom, cooler liquid at the top. The
              temperature gradient creates density differences. What happens to the vorticity?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The pressure and density gradients are not parallel. Their cross product{' '}
                {`$\\nabla P \\times \\nabla\\rho \\neq 0$`} generates vorticity via the baroclinic
                term: hot fluid rises, cool fluid falls.
              </p>
            </details>
          </div>

          <p>
            <strong>When to use this:</strong> Use the vorticity source analysis whenever you want
            to understand why circulation appears or disappears in a flow.
          </p>

          <p>
            Kelvin's theorem tells us circulation is conserved in barotropic, inviscid flow. Four
            mechanisms generate vorticity in more general flows:
          </p>
          <ol className="lrn-list">
            <li>
              <strong>Nonbarotropic (baroclinic) pressure gradients.</strong> When{' '}
              {`$\\nabla P \\times \\nabla\\rho \\neq 0$`}, the pressure-gradient force creates a
              net torque on fluid elements. The vorticity source term is{' '}
              {`$-(\\nabla P \\times \\nabla\\rho)/\\rho^2$`}.
            </li>
            <li>
              <strong>Solid surfaces (via viscosity, out of scope here).</strong> The no-slip
              condition creates a boundary layer of strong shear and hence strong vorticity.
            </li>
            <li>
              <strong>Coriolis forces.</strong> In a rotating reference frame, the Coriolis force
              adds a source term {`$-2\\nabla\\times(\\boldsymbol{\\Omega}\\times\\mathbf{v})$`}.
            </li>
            <li>
              <strong>Lorentz forces.</strong> In a conducting fluid with magnetic field,{' '}
              {`$\\nabla\\times(\\mathbf{j}\\times\\mathbf{B}/\\rho)$`} adds vorticity.
            </li>
          </ol>

          <h3>Worked Example: Vorticity Generated by Heating</h3>
          <p>
            Place a radiator in a still room. The air near the radiator is warm and less dense (
            {`$\\rho$`} low, {`$P$`} nearly the same as the rest of the room). So {`$\\nabla P$`}{' '}
            points roughly horizontally, while {`$\\nabla\\rho$`} points predominantly upward. These
            two gradients are not parallel: {`$\\nabla P \\times \\nabla\\rho \\neq 0$`}.
          </p>
          <p>
            The vorticity source {`$-(\\nabla P \\times \\nabla\\rho)/\\rho^2$`} generates a
            horizontal vorticity vector. Warm air rises near the radiator, cool air falls on the far
            side. A convective circulation begins even in an initially still room.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The cross product {`$\\nabla P \\times \\nabla\\rho$`} generates vorticity. This is
              zero when {`$P$`} and {`$\\rho$`} gradients point in the same direction (barotropic).
              In the radiator example, the pressure gradient is nearly horizontal and the density
              gradient is nearly vertical. Their cross product points horizontally. This drives
              fluid up near the hot wall and down on the cool side.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The vorticity evolution equation for an ideal fluid is{' '}
                {`$D\\boldsymbol{\\omega}/Dt = -(\\nabla P \\times \\nabla\\rho)/\\rho^2$`}. The
                baroclinic term acts as a source when surfaces of constant pressure and surfaces of
                constant density are not parallel. In a heated room, the pressure is nearly uniform,
                so {`$\\nabla P$`} is nearly zero horizontally. The small horizontal {`$\\nabla P$`}{' '}
                crossed with the large vertical {`$\\nabla\\rho$`} gives a horizontal vorticity that
                drives convection.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Imagine a rectangular fluid element straddling the hot wall. The left face is in warm
              light air; the right face is in cool dense air. Pressure is the same on both faces.
              But the buoyancy force per unit mass ({`$-\\nabla P/\\rho$`}) is larger on the warm
              side (smaller {`$\\rho$`}). The element therefore feels a net torque. That torque is
              exactly what the term {`$-(\\nabla P\\times\\nabla\\rho)/\\rho^2$`} measures.
            </p>
          </div>
        </>,

        <>
          <h2>Sound Waves</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A bell rings. The sound wave travels through air at{' '}
              {`$340\\,\\text{m}\\,\\text{s}^{-1}$`}. No material flows at{' '}
              {`$340\\,\\text{m}\\,\\text{s}^{-1}$`}: only the disturbance propagates. What
              maintains the ideal-fluid equations in the presence of small oscillations?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                For small-amplitude perturbations, linearize the continuity and Euler equations
                around a background state. The result is a wave equation with sound speed{' '}
                {`$C = \\sqrt{(\\partial P/\\partial\\rho)_s}$`}.
              </p>
            </details>
          </div>

          <p>
            Sound waves are small oscillations in pressure and density propagating through an ideal
            fluid.
          </p>
          <p>
            <strong>When to use this:</strong> Use acoustic theory for small-amplitude pressure
            disturbances in an ideal fluid. Valid when the perturbation amplitude is much smaller
            than the mean state.
          </p>

          <h3>Linearized Equations</h3>
          <p>
            Write {`$\\rho = \\rho_0 + \\rho'$`}, {`$P = P_0 + P'$`},{' '}
            {`$\\mathbf{v} = \\mathbf{v}'$`}, where primed quantities are small. The linearized
            continuity and Euler equations are:
          </p>
          <div className="lrn-eq">
            {`$$\\frac{\\partial\\rho'}{\\partial t} + \\rho_0\\nabla\\cdot\\mathbf{v}' = 0, \\quad \\rho_0\\frac{\\partial\\mathbf{v}'}{\\partial t} = -\\nabla P'$$`}
          </div>
          <p>
            For adiabatic perturbations, {`$P' = C^2\\rho'$`}. Combining gives the wave equation:
          </p>
          <div className="lrn-eq lrn-eq-hero">
            {`$$\\frac{\\partial^2\\rho'}{\\partial t^2} = C^2\\nabla^2\\rho'$$`}
          </div>
          <p>
            Plane wave solution: {`$\\rho' = A\\cos(kx - \\omega t)$`}, with dispersion relation{' '}
            {`$\\omega = Ck$`}. The wave propagates at speed {`$C$`}.
          </p>

          <h3>Acoustic Energy Flux</h3>
          <div className="lrn-eq">{`$$\\mathbf{F}_{\\rm acoustic} = P'\\mathbf{v}'$$`}</div>
          <p>
            For a plane wave, the time-averaged energy flux is{' '}
            {`$\\bar{F} = \\frac{1}{2}\\rho_0 C|v'|^2$`} per unit area. The wave carries energy
            forward without any mean mass flux: fluid parcels oscillate back and forth while energy
            flows in the propagation direction.
          </p>

          <IdFlowSound />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The adiabatic relation {`$P' = C^2\\rho'$`} is the critical step. If the process were
              isothermal, the sound speed would be too slow by a factor of{' '}
              {`$\\sqrt{\\gamma} \\approx 1.18$`} for air. Newton assumed isothermal and got the
              wrong answer. Laplace corrected this: sound compression is adiabatic, not isothermal.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The isothermal sound speed is{' '}
                {`$C_{\\rm iso} = \\sqrt{P_0/\\rho_0} = \\sqrt{k_BT/\\mu m_p}$`}. The adiabatic
                sound speed is{' '}
                {`$C_{\\rm ad} = \\sqrt{\\gamma P_0/\\rho_0} = \\sqrt{\\gamma k_BT/\\mu m_p}$`}. For
                air ({`$\\gamma = 7/5$`}),{' '}
                {`$C_{\\rm ad}/C_{\\rm iso} = \\sqrt{1.4} \\approx 1.18$`}. Newton's 1687
                calculation gave {`$C_{\\rm iso}$`}, about 16% too slow. Laplace (1816) recognized
                the adiabatic nature of compression and obtained the correct {`$C_{\\rm ad}$`}.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Sound compressions happen in microseconds. Heat has no time to flow from the
              compressed region to its neighbors. Each parcel therefore compresses along its own
              adiabat ({`$ds = 0$`}), not at constant temperature. The relevant stiffness is the
              adiabatic one, {`$(\\partial P/\\partial\\rho)_s = \\gamma P/\\rho$`}, which is
              stiffer than the isothermal value by a factor of {`$\\gamma$`}. Stiffer means faster.
            </p>
          </div>
        </>,

        <>
          <h2>Wingtip Vortices and Lift</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              An airplane banks into a turn. The pilots have adjusted wing circulation {`$\\Gamma$`}
              . From the Kutta-Joukowski theorem, the lift per unit span is{' '}
              {`$F_L = \\rho V\\Gamma$`}. If the aircraft doubles its speed while keeping the same
              wing angle, what happens to the required circulation to maintain the same lift?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Lift stays the same, but {`$V$`} doubles. So {`$\\Gamma$`} must halve. The wing
                generates less circulation per unit speed at higher velocity. Pilots adjust angle of
                attack to change {`$\\Gamma$`}.
              </p>
            </details>
          </div>

          <p>
            <strong>When to use this:</strong> Use the Kutta-Joukowski theorem when calculating lift
            on an airfoil in ideal flow.
          </p>
          <p>
            An airplane wing generates lift. In ideal-flow theory, lift arises from circulation{' '}
            {`$\\Gamma$`} around the wing's cross-section. The Kutta-Joukowski theorem gives the
            lift force per unit span:
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$F_L = \\rho V \\Gamma$$`}</div>
          <p>
            where {`$V$`} is the free-stream speed and {`$\\Gamma$`} is the circulation around the
            wing.
          </p>

          <h3>Wingtip Vortices</h3>
          <p>
            A wing of finite span has circulation in the middle but zero at the tips. Kelvin's
            theorem requires that vortex lines do not end in the fluid. So the bound vortex that
            creates lift must curve backward at each wingtip and trail behind the aircraft as a free
            vortex.
          </p>

          <VizFigure aspect="auto" title="WINGTIP VORTICES">
            <figure className="lrn-figure">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Airplane_vortex_edit.jpg"
                alt="An agricultural aircraft with colored smoke visualizing the wingtip vortex spirals trailing behind each wingtip"
              />
              <figcaption>
                Wingtip vortices made visible by smoke in a NASA Wallops Island wake vortex study
                (1990). The spiral smoke trails follow the core of each trailing vortex, where the
                pressure is lowest.{' '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Airplane_vortex_edit.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </figcaption>
            </figure>
          </VizFigure>

          <h3>Sailing Upwind</h3>
          <p>
            A sail acts as an airfoil. The wind flowing around the curved sail generates circulation
            and hence lift. The "lift" force (perpendicular to the wind) pushes the boat forward and
            sideways. The keel prevents sideways motion. The net result is forward propulsion
            against the wind.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The surprising step is that lift in ideal flow requires net circulation {`$\\Gamma$`}{' '}
              around the wing. A symmetric airfoil at zero angle of attack has no preferred
              direction for circulation. The real physics (viscosity selects the Kutta condition:
              flow leaves the trailing edge smoothly) picks the unique value of {`$\\Gamma$`} that
              matches the observed lift. Ideal-flow theory gets the lift magnitude right once{' '}
              {`$\\Gamma$`} is known.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The Kutta-Joukowski theorem {`$F_L = \\rho V\\Gamma$`} is exact in 2D ideal flow for
                any body shape. The circulation {`$\\Gamma$`} is not determined by ideal-flow theory
                alone: potential flow around a cylinder has a family of solutions parameterized by{' '}
                {`$\\Gamma$`}. In real flow, viscosity imposes the Kutta condition (smooth flow at
                the trailing edge), which selects a unique {`$\\Gamma$`} proportional to the chord
                length, angle of attack, and free-stream speed.
              </p>
            </details>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What is the definition of the material (advective) time derivative, and what does each term represent?',
        a: String.raw`The material derivative is $\frac{d}{dt} \equiv \frac{\partial}{\partial t} + \mathbf{v}\cdot\nabla$. The first term $\partial/\partial t$ is the local rate of change at a fixed point in space. The second term $\mathbf{v}\cdot\nabla$ is the convective contribution: the change because the fluid parcel moves into a region where the field has a different value.`
      },
      {
        q: 'A fluid is in steady flow (nothing changes with time at any fixed point). Can a fluid parcel still accelerate?',
        a: String.raw`Yes. The material acceleration is $\frac{d\mathbf{v}}{dt} = \frac{\partial\mathbf{v}}{\partial t} + (\mathbf{v}\cdot\nabla)\mathbf{v}$. In steady flow, $\partial\mathbf{v}/\partial t = 0$, but the convective term $(\mathbf{v}\cdot\nabla)\mathbf{v}$ can be nonzero. A fluid parcel moving into a region where the velocity is higher (like a river gorge) accelerates even though the flow pattern never changes.`
      },
      {
        q: 'State the Euler equation for an ideal fluid, and name the force it describes.',
        a: String.raw`$\rho \frac{d\mathbf{v}}{dt} = -\nabla P + \rho \mathbf{g}$. The left side is mass times acceleration for a fluid parcel. The right side has two forces: the pressure-gradient force $-\nabla P$ (pointing from high pressure toward low pressure) and the gravitational body force $\rho\mathbf{g}$. No viscosity term appears because the fluid is ideal.`
      },
      {
        q: "Kelvin's circulation theorem says $d\\Gamma/dt = 0$. State the two conditions required for this to hold.",
        a: String.raw`The flow must be (1) barotropic: $P = P(\rho)$ only, so $dP/\rho$ is an exact differential. And (2) inviscid (ideal): no viscosity, so no viscous force appears in the Euler equation. If either condition fails, the circulation around a material loop can change.`
      },
      {
        q: 'A uniform stream of speed $U$ flows past a cylinder of radius $a$. Write the velocity potential, and find the tangential speed at the cylinder surface.',
        a: String.raw`The velocity potential is $\phi = U\!\left(r + \frac{a^2}{r}\right)\!\cos\theta$. At $r = a$, the radial component vanishes (no flow through the surface). The tangential component is $v_\theta(a,\theta) = -2U\sin\theta$. The maximum speed $2U$ occurs at the top and bottom of the cylinder ($\theta = \pm 90°$), where the fluid squeezes around the widest point.`
      },
      {
        q: "What is d'Alembert's paradox, and why does it arise?",
        a: String.raw`An ideal irrotational fluid exerts zero drag on a body moving at constant velocity through it. This arises because the pressure distribution around a cylinder (or any smooth body) in potential flow is perfectly symmetric: the elevated pressure at the front stagnation point is exactly mirrored at the rear stagnation point, so the net horizontal pressure force is zero. In real fluids, viscosity creates a wake that breaks this symmetry and produces nonzero drag.`
      },
      {
        q: "Write Bernoulli's theorem for steady, incompressible, irrotational flow along a streamline. Identify each term physically.",
        a: String.raw`$\frac{1}{2}v^2 + \frac{P}{\rho} + \Phi = \text{const}$. The term $\frac{1}{2}v^2$ is kinetic energy per unit mass. $P/\rho$ is pressure energy (flow work) per unit mass. $\Phi$ is gravitational potential energy per unit mass. Their sum is constant: speed and pressure trade off along the flow.`
      },
      {
        q: 'A Venturi meter has a wide section (area $A_1$, pressure $P_1$) and a narrow throat (area $A_2$, pressure $P_2$). Derive the flow speed $v_1$ in terms of $A_1$, $A_2$, $P_1 - P_2$, and $\\rho$.',
        a: String.raw`Continuity gives $v_2 = v_1 A_1/A_2$. Bernoulli gives $\frac{1}{2}v_1^2 + P_1/\rho = \frac{1}{2}v_2^2 + P_2/\rho$. Substituting and solving: $v_1 = \sqrt{\dfrac{2(P_1-P_2)/\rho}{(A_1/A_2)^2 - 1}}$. The pressure drops at the throat because the fluid speeds up. Measuring $P_1 - P_2$ with a manometer gives the flow speed directly.`
      },
      {
        q: "A submarine's ballast tanks fill with seawater ($\\rho_{\\rm water} = 1025\\,\\text{kg/m}^3$). Before flooding, the submarine's average density was $950\\,\\text{kg/m}^3$. After flooding, it is $1050\\,\\text{kg/m}^3$. Explain what happens and why, using Archimedes' law.",
        a: String.raw`Before flooding, average density $950 < 1025$: buoyancy exceeds weight, so the submarine rises. After flooding, average density $1050 > 1025$: weight exceeds buoyancy, so the submarine sinks. Archimedes' law states that the buoyancy force equals $\rho_{\rm water}gV$, fixed by the displaced volume. The submarine's weight $= \rho_{\rm avg}gV$ changes when ballast changes. The submarine sinks when $\rho_{\rm avg}$ exceeds $\rho_{\rm water}$.`
      },
      {
        q: 'The vorticity $\\boldsymbol{\\omega} = \\nabla\\times\\mathbf{v}$ is zero everywhere in a flow. What does this imply about the existence of a velocity potential?',
        a: String.raw`If $\boldsymbol{\omega} = 0$ everywhere (irrotational flow), Helmholtz's theorem guarantees a scalar velocity potential $\phi$ such that $\mathbf{v} = \nabla\phi$. For incompressible flow ($\nabla\cdot\mathbf{v} = 0$), the potential satisfies Laplace's equation $\nabla^2\phi = 0$. The problem of finding $\mathbf{v}$ reduces to solving a linear PDE, which is far simpler than the nonlinear Euler equation.`
      },
      {
        q: 'A flow has circular streamlines with $v_\\theta = L/r$ (constant angular momentum). Is this flow irrotational or rotational? Justify with the vorticity formula.',
        a: String.raw`Irrotational outside $r = 0$. The vorticity in 2D polar coordinates is $\omega = \frac{1}{r}\frac{\partial(rv_\theta)}{\partial r} - \frac{1}{r}\frac{\partial v_r}{\partial\theta}$. With $v_r = 0$ and $rv_\theta = L = \text{const}$, the first term is $\frac{1}{r}\frac{\partial L}{\partial r} = 0$. So $\omega = 0$ everywhere except $r = 0$, where the potential vortex has a singular vortex line. Circular streamlines do not imply nonzero vorticity.`
      },
      {
        q: "State Crocco's theorem for steady flow, and describe one physical consequence.",
        a: String.raw`For steady flow: $\boldsymbol{\omega}\times\mathbf{v} = \nabla B - T\nabla s$, where $B = \frac{1}{2}v^2 + h + \Phi$ is the Bernoulli function. One consequence: a flow can be irrotational everywhere only if entropy is uniform everywhere ($\nabla s = 0$). Any process that deposits entropy non-uniformly across streamlines (such as a curved shock) must create vorticity in the downstream flow, even if the upstream was irrotational.`
      },
      {
        q: 'Why does a tornado have much lower pressure at its center than in the surrounding air?',
        a: String.raw`Far from the tornado core, the flow is approximately irrotational. Bernoulli's theorem applies: $\frac{1}{2}v^2 + P/\rho = \text{const}$. The wind speed is much higher near the core than far away. Higher speed means lower pressure. The pressure deficit at radius $r$ is $\Delta P = \frac{1}{2}\rho v(r)^2$. At the very center, where the wind peaks, the pressure is lowest. This is why structures can explode outward when a tornado passes.`
      },
      {
        q: 'A thunderstorm updraft stretches a vertical vortex tube, making it longer and thinner. Explain, using conservation of circulation, how the vorticity changes and how the edge wind speed depends on the final vorticity and radius.',
        a: String.raw`For incompressible flow, Kelvin's theorem conserves circulation: $\omega\pi r^2 = \text{const}$. If the tube's radius shrinks from $r_0$ to $r_1$, the vorticity grows as $\omega_1 = \omega_0(r_0/r_1)^2$. The core rotates as a solid body with angular velocity $\Omega_1 = \omega_1/2$ (vorticity is twice the rotation rate). The wind speed at the edge is $v = \Omega_1 r_1 = \frac{\omega_1}{2}\,r_1$. A tenfold reduction in radius increases vorticity a hundredfold and increases edge wind speed fiftyfold.`
      },
      {
        q: 'Describe three physical processes that can create new vorticity in an otherwise irrotational flow.',
        a: String.raw`(1) Nonbarotropic (baroclinic) pressure gradients: when $\nabla P\times\nabla\rho \neq 0$, a net torque acts on fluid elements. This occurs in a heated room (warm, less dense air next to cooler denser air with nearly uniform pressure). (2) Coriolis forces in a rotating reference frame add the term $-2\nabla\times(\boldsymbol{\Omega}\times\mathbf{v})$ to the vorticity equation. (3) Lorentz forces in magnetized conducting fluids add $\nabla\times(\mathbf{j}\times\mathbf{B}/\rho)$.`
      },
      {
        q: 'A radiator heats the air on one side of a room. Explain why a circulation pattern (warm air rising, cool air falling) develops, using the concept of vorticity generation.',
        a: String.raw`The warm air near the radiator has lower density $\rho$. The room pressure equilibrates quickly (acoustically), so $\nabla P$ points nearly horizontally. The density gradient $\nabla\rho$ points upward (dense cool air below, light warm air above). These gradients are not parallel: $\nabla P\times\nabla\rho \neq 0$. This cross product generates vorticity at rate $-(\nabla P\times\nabla\rho)/\rho^2$. By the right-hand rule this source spins the air one way: rising near the hot wall, falling on the cool side. No fan is needed.`
      },
      {
        q: 'State the continuity equation in both Eulerian and Lagrangian form. Show that the two forms are equivalent.',
        a: String.raw`Eulerian: $\frac{\partial\rho}{\partial t} + \nabla\cdot(\rho\mathbf{v}) = 0$. Lagrangian: $\frac{d\rho}{dt} + \rho\nabla\cdot\mathbf{v} = 0$. To show equivalence, expand the divergence: $\nabla\cdot(\rho\mathbf{v}) = \rho\nabla\cdot\mathbf{v} + \mathbf{v}\cdot\nabla\rho$. Substituting into the Eulerian form gives $\frac{\partial\rho}{\partial t} + \mathbf{v}\cdot\nabla\rho + \rho\nabla\cdot\mathbf{v} = 0$. The first two terms are exactly $d\rho/dt$ (the material derivative), yielding the Lagrangian form.`
      },
      {
        q: 'An airplane wing of span $L$ moves through air at speed $V$. The circulation around the wing cross-section is $\\Gamma$. Write the lift force per unit span and explain why wingtip vortices must form.',
        a: String.raw`The lift per unit span is $F_L = \rho V\Gamma$ (Kutta-Joukowski theorem). At the wingtip, the circulation drops from $\Gamma$ to zero. Kelvin's theorem requires that vortex lines not end in the fluid. So the bound vortex that creates lift must curve backward at each wingtip and trail behind the aircraft as a free vortex. These trailing vortices (wingtip vortices) carry the vorticity that is the "cost" of generating lift.`
      },
      {
        q: 'The flow is incompressible and irrotational. Write the governing equation for the velocity potential and name it. Why is this easier to solve than the full Euler equation?',
        a: String.raw`The equation is $\nabla^2\phi = 0$ (Laplace's equation). It is linear, while the Euler equation $\rho\,d\mathbf{v}/dt = -\nabla P + \rho\mathbf{g}$ is nonlinear due to the term $(\mathbf{v}\cdot\nabla)\mathbf{v}$. Linearity means solutions can be superposed: add a uniform stream, a dipole, a vortex, and you get a new valid solution. Laplace's equation also has centuries of exact solutions for many boundary shapes.`
      },
      {
        q: "A smoke ring (toroidal vortex) is puffed from a tube and travels through still air. Does the circulation around the ring's tube change as it travels?",
        a: String.raw`No. Once the ring separates from the nozzle, it moves through an ideal fluid with no boundaries. Kelvin's theorem guarantees that the circulation around any material loop enclosing the vortex tube is conserved: $d\Gamma/dt = 0$. The ring's self-induced velocity keeps it moving forward, but its circulation (and hence total vorticity content) stays constant throughout its motion.`
      },
      {
        q: 'A gas flows through a converging nozzle. The cross-section narrows from $A_1$ to $A_2 < A_1$. Use continuity and Bernoulli to find how pressure changes at the throat for an incompressible flow.',
        a: String.raw`Continuity: $v_2 = v_1 A_1/A_2$. Bernoulli: $P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$. So $P_2 = P_1 - \frac{1}{2}\rho(v_2^2 - v_1^2) = P_1 - \frac{1}{2}\rho v_1^2[(A_1/A_2)^2 - 1]$. Pressure drops at the throat. The more the nozzle narrows, the larger the speed at the throat and the lower the pressure there.`
      },
      {
        q: 'What is a choked nozzle? Define the Mach number and explain why the mass flow rate cannot increase once the throat reaches Mach 1 in a perfect gas.',
        a: String.raw`The Mach number is $M = v/C$, where $v$ is the flow speed and $C$ is the local sound speed. In a converging nozzle carrying a compressible perfect gas, the throat speed rises as the pressure drop increases. The flow is choked when $M = 1$ at the throat. Beyond that point, reducing the throat area or increasing the pressure drop does not raise the mass flux $\rho v A$: the throat is already at the wave-speed limit. Once the throat is sonic, no signal can propagate upstream to increase the flow further. The mass flow rate locks in at its maximum value.`
      },
      {
        q: String.raw`What does $\frac{D}{Dt}\left(\frac{\boldsymbol{\omega}}{\rho}\right) = 0$ mean physically for a barotropic inviscid flow?`,
        a: String.raw`Vortex lines are frozen into the fluid. The ratio $\boldsymbol{\omega}/\rho$ is conserved following each fluid parcel. If a vortex tube stretches (becomes longer and thinner), $\rho$ stays roughly constant for incompressible flow, so $|\boldsymbol{\omega}|$ must grow in proportion to the stretching. This is exactly like angular momentum conservation: as the rotating tube narrows, it must spin faster to conserve the circulation.`
      },
      {
        q: 'What are the two conditions under which the incompressibility approximation $\\nabla\\cdot\\mathbf{v} \\simeq 0$ is valid?',
        a: String.raw`(1) The flow speed must be much less than the sound speed: $v \ll C$. This ensures kinetic-energy-driven density changes are negligible. (2) Gravitational potential changes must be small compared with $C^2$: $|\delta\Phi| \ll C^2$. This ensures that compressive gravity effects are also small. When both hold, the fractional density fluctuation $\delta\rho/\rho \sim v^2/C^2 + \delta\Phi/C^2$ is tiny.`
      },
      {
        q: "For a barotropic ideal gas with $P = K\\rho^\\gamma$, show that $\\oint dP/\\rho = 0$ around any closed curve, supporting Kelvin's theorem.",
        a: String.raw`With $P = K\rho^\gamma$, we have $\frac{dP}{\rho} = \frac{K\gamma\rho^{\gamma-1}}{\rho}d\rho = K\gamma\rho^{\gamma-2}d\rho = \frac{\gamma K}{\gamma-1}d(\rho^{\gamma-1})$. This is an exact differential of $f(\rho) = \frac{\gamma K}{\gamma-1}\rho^{\gamma-1}$. The line integral of any exact differential around a closed curve is zero: $\oint dP/\rho = \oint df(\rho) = 0$. This is why Kelvin's theorem holds for barotropic flows.`
      },
      {
        q: 'Explain what specific enthalpy is and why it (rather than internal energy alone) appears in the energy flux of an ideal fluid.',
        a: String.raw`Specific enthalpy is $h = u + P/\rho$, where $u$ is internal energy per unit mass and $P/\rho$ is pressure times specific volume. The extra $P/\rho$ term appears in the energy flux $\mathbf{F} = (v^2/2 + h + \Phi)\rho\mathbf{v}$ because when a fluid element moves into a new region, it must do work against the local pressure to push existing fluid aside. This "flow work" equals $P/\rho$ per unit mass. Enthalpy accounts for both internal energy and the work needed to inject the parcel into its new location.`
      },
      {
        q: 'An ocean is stably stratified: warm low-density water on top, cold high-density water below. A parcel is displaced upward adiabatically. The parcel is denser than its new surroundings. What happens?',
        a: String.raw`The parcel is heavier than the surrounding water. Buoyancy acts downward on it (net downward force: its weight exceeds buoyancy). It sinks back toward its original level. This is stable stratification. In practice, the parcel overshoots slightly and oscillates up and down before settling. The stable density gradient suppresses vertical mixing and maintains the thermocline.`
      },
      {
        q: 'A sailing boat is moving upwind. The sail is a curved airfoil. How does ideal-fluid theory explain forward propulsion against the wind?',
        a: String.raw`The curved sail generates circulation $\Gamma$ around its cross-section. The Kutta-Joukowski lift force is $F_L = \rho V\Gamma$, perpendicular to the apparent wind $V$. This lift force has a forward component (along the boat's direction) and a sideways component. The keel prevents sideways drift. The forward component of lift exceeds the drag (in ideal flow, drag is zero for the sail; real drag from rigging and hull is small). The net forward force propels the boat upwind.`
      },
      {
        q: 'What is the sound speed in an ideal gas, and why is the relevant derivative taken at constant entropy rather than constant temperature?',
        a: String.raw`The sound speed is $C = \sqrt{(\partial P/\partial\rho)_s}$. For an ideal gas, $C = \sqrt{\gamma k_BT/(\mu m_p)}$. The derivative is taken at constant entropy (adiabatically) because sound compressions happen so fast that no heat has time to flow between compressed and surrounding regions. If the derivative were taken at constant temperature (isothermal), the predicted sound speed would be too slow by a factor of $\sqrt{\gamma}$. Newton assumed isothermal and got the wrong answer; Laplace corrected this.`
      },
      {
        q: 'In potential flow past a cylinder, the pressure on the surface is $P(\\theta) = P_\\infty + \\frac{1}{2}\\rho U^2(1 - 4\\sin^2\\theta)$. Identify the stagnation points and explain why the drag is zero.',
        a: String.raw`Stagnation points occur where $v = 0$, giving maximum pressure $P_\infty + \frac{1}{2}\rho U^2$. These are at $\theta = 0$ (front) and $\theta = \pi$ (rear): $\sin\theta = 0$. The pressure distribution is symmetric under $\theta\to\pi-\theta$: the pressure at any angle $\theta$ on the front half equals the pressure at the mirror point on the rear half. When you integrate the pressure force over the surface, the $x$ components cancel exactly. Zero net horizontal force means zero drag.`
      },
      {
        q: 'The momentum flux tensor for an ideal fluid is $T_{ij} = Pg_{ij} + \\rho v_iv_j$. What does each term represent physically?',
        a: String.raw`The first term $Pg_{ij}$ is the isotropic pressure: it acts equally in all directions and pushes fluid out of any surface it crosses. The second term $\rho v_iv_j$ is the advective momentum flux: momentum $\rho v_i$ carried by the mass flow $\rho v_j$ per unit area per unit time. For an ideal fluid, there is no viscous stress term; the only surface forces come from pressure. Together these two terms fully describe how momentum moves through an ideal fluid.`
      },
      {
        q: 'A vortex tube stretches from length $\\ell_0$ to $\\ell_1 = 10\\ell_0$. The fluid is incompressible ($\\rho = \\text{const}$). What happens to the cross-sectional area and the vorticity magnitude?',
        a: String.raw`Conservation of mass in the tube: $\rho A_0\ell_0 = \rho A_1\ell_1$, so $A_1 = A_0(\ell_0/\ell_1) = A_0/10$. Kelvin's theorem conserves circulation $\Gamma = \omega A = \text{const}$, so $\omega_1 = \omega_0(A_0/A_1) = 10\omega_0$. Stretching the tube tenfold increases vorticity tenfold. The angular velocity of fluid in the tube increases by the same factor, analogous to an ice skater pulling her arms in.`
      },
      {
        q: 'Describe the streamline pattern for potential flow past a cylinder. Where is the speed fastest and slowest?',
        a: String.raw`Streamlines are symmetric above and below, and upstream/downstream. Far from the cylinder, streamlines are parallel horizontal lines. Near the cylinder, they bend around it. At $\theta = 90°$ and $\theta = 270°$ (top and bottom), streamlines crowd together and the speed reaches $2U$ (maximum). At $\theta = 0°$ (front stagnation) and $\theta = 180°$ (rear stagnation), the speed is zero (minimum). The flow is entirely smooth, with no wake.`
      },
      {
        q: 'What is the Bernoulli function $B$, and when is it constant everywhere (not just along a streamline)?',
        a: String.raw`$B = \frac{1}{2}v^2 + h + \Phi$, where $h$ is specific enthalpy and $\Phi$ is gravitational potential. For steady barotropic flow, $B$ is constant along each streamline (it can differ between streamlines). For steady irrotational barotropic flow ($\boldsymbol{\omega} = 0$), $B$ is constant everywhere in the flow. The distinction matters: in a jet or wake, different streamlines may have different Bernoulli levels even in steady flow.`
      },
      {
        q: "Write the circulation definition and use Stokes' theorem to rewrite it as a surface integral. What does this tell you about circulation in irrotational flow?",
        a: String.raw`Circulation is $\Gamma = \oint_{\partial\mathcal{S}}\mathbf{v}\cdot d\mathbf{x}$. By Stokes' theorem: $\Gamma = \int_\mathcal{S}\boldsymbol{\omega}\cdot d\boldsymbol{\Sigma}$. So circulation equals the total vorticity flux through any surface bounded by the loop. For irrotational flow ($\boldsymbol{\omega} = 0$ everywhere), every loop that lies entirely in the irrotational region has $\Gamma = 0$. A nonzero circulation around a loop signals that a vortex line (with $\boldsymbol{\omega}\neq 0$) threads through the surface bounded by that loop.`
      },
      {
        q: 'You observe that an initially irrotational flow develops circulation after passing through a region with strong temperature gradients. Identify the mechanism and the relevant term.',
        a: String.raw`The mechanism is baroclinic vorticity generation. Temperature gradients create density gradients ($\nabla\rho$) that are not aligned with the pressure gradient ($\nabla P$). The mismatch $\nabla P\times\nabla\rho \neq 0$ generates vorticity at rate $-(\nabla P\times\nabla\rho)/\rho^2$ per unit time. This term is the baroclinic source in the vorticity evolution equation for an ideal fluid: $\frac{D\boldsymbol{\omega}}{Dt} = -\frac{\nabla P\times\nabla\rho}{\rho^2}$. Kelvin's theorem breaks down because the flow is no longer barotropic.`
      },
      {
        q: 'What is the adiabatic condition for an ideal fluid, and what does it physically mean that $ds/dt = 0$?',
        a: String.raw`The adiabatic condition is $\frac{ds}{dt} = 0$: specific entropy is conserved following each fluid parcel. Physically, no heat flows between neighboring parcels (no heat conduction) and no energy is dissipated within the parcel (no viscosity). Each parcel carries its entropy forever. Different parcels may have different values of $s$; the condition says each parcel's value never changes. An ideal fluid flow is adiabatic by definition.`
      },
      {
        q: 'A weather balloon rises adiabatically through the atmosphere. At the surface ($T = 300\\,\\text{K}$, $P = 10^5\\,\\text{Pa}$), the air has adiabatic index $\\gamma = 7/5$. As the balloon rises, pressure drops by 30%. Estimate the fractional temperature change using the adiabatic relation.',
        a: String.raw`For an adiabatic ideal gas: $T\propto P^{(\gamma-1)/\gamma} = P^{2/7}$. A 30% pressure drop means $P_2/P_1 = 0.7$. Then $T_2/T_1 = (0.7)^{2/7} \approx 0.91$. Temperature drops by about 9%, from 300 K to roughly 273 K. This is the dry adiabatic lapse rate in physical terms: rising air cools because it expands against lower pressure.`
      },
      {
        q: 'Why do vortex lines in a barotropic inviscid flow never break, reconnect, or pass through each other?',
        a: String.raw`Vortex lines are frozen into the fluid: each material line element that is initially aligned with $\boldsymbol{\omega}$ remains aligned with $\boldsymbol{\omega}$ forever. Two distinct vortex lines correspond to two distinct material line elements. Material lines in a smooth velocity field cannot pass through each other (the flow map is smooth and reversible). So vortex lines remain topologically distinct. Breaking or reconnection requires either viscosity (which lets vorticity diffuse across material lines) or a singularity in the velocity field.`
      },
      {
        q: 'Describe the acoustic energy flux for a sound wave and write its formula.',
        a: String.raw`The acoustic energy flux is $\mathbf{F}_{\rm acoustic} = P'\mathbf{v}'$, the product of the pressure perturbation and velocity perturbation. It represents the rate at which the wave transports energy per unit area. For a plane wave traveling in the $x$ direction, the time-averaged energy flux is $\frac{1}{2}\rho_0 C|v'|^2$ (where $C$ is the sound speed). The wave carries energy forward without any mean mass flux: the fluid parcels oscillate back and forth while energy flows in the propagation direction.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Ideal Fluids and the Euler Equations',
      sections: [
        <>
          <h2>Kinematics and the Continuum Description</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Material (advective) time derivative</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{d}{dt} \\equiv \\frac{\\partial}{\\partial t} + \\mathbf{v}\\cdot\\nabla$$`}</div>
              <p>
                Use whenever you need the rate of change of a quantity following a fluid parcel
                moving with the flow.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Meaning</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\rho(\\mathbf{x},t)$`}</td>
                <td>Mass density (kg/m³)</td>
                <td>Averaged over fluid parcel</td>
              </tr>
              <tr>
                <td>{`$P(\\mathbf{x},t)$`}</td>
                <td>Pressure (Pa)</td>
                <td>Isotropic in ideal fluid</td>
              </tr>
              <tr>
                <td>{`$\\mathbf{v}(\\mathbf{x},t)$`}</td>
                <td>Flow velocity (m/s)</td>
                <td>Eulerian velocity field</td>
              </tr>
              <tr>
                <td>{`$\\partial/\\partial t$`}</td>
                <td>Eulerian time derivative</td>
                <td>Rate of change at fixed point</td>
              </tr>
              <tr>
                <td>{`$d/dt$`}</td>
                <td>Lagrangian (material) derivative</td>
                <td>Rate of change following parcel</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Hydrostatics</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Hydrostatic pressure balance</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\nabla P = \\rho\\mathbf{g}$$`}</div>
              <p>
                Use for fluid at rest or in very slow motion where acceleration is negligible
                compared with gravitational force.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Pressure vs. depth (uniform fluid)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$P = P_0 + \\rho g z$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Archimedes' buoyancy force</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$F_{\\rm buoyancy} = \\rho_{\\rm fluid}\\,g\\,V_{\\rm object}$$`}</div>
            </div>
          </div>
        </>,

        <>
          <h2>Mass Conservation</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Continuity equation (Eulerian)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\mathbf{v}) = 0$$`}</div>
              <p>Always valid, ideal or viscous, compressible or incompressible.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Continuity equation (Lagrangian)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{d\\rho}{dt} + \\rho \\nabla \\cdot \\mathbf{v} = 0$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Streamtube mass conservation</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$$`}</div>
              <p>Reduces to {`$A_1 v_1 = A_2 v_2$`} for incompressible flow.</p>
            </div>
          </div>
        </>,

        <>
          <h2>Momentum Conservation and the Euler Equation</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Momentum flux (stress) tensor</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$T_{ij} = P g_{ij} + \\rho v_i v_j$$`}</div>
              <p>First term is isotropic pressure; second is advective momentum flux.</p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Euler equation (Lagrangian form)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\rho \\frac{d\\mathbf{v}}{dt} = -\\nabla P + \\rho \\mathbf{g}$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Euler equation (convective form)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{\\partial \\mathbf{v}}{\\partial t} + (\\mathbf{v} \\cdot \\nabla)\\mathbf{v} = -\\frac{\\nabla P}{\\rho} - \\nabla\\Phi$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Euler equation (rotational / Crocco form)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{\\partial \\mathbf{v}}{\\partial t} - \\mathbf{v} \\times \\boldsymbol{\\omega} = -\\nabla\\!\\left(\\tfrac{1}{2}v^2 + \\frac{P}{\\rho} + \\Phi\\right) + T\\nabla s$$`}</div>
            </div>
          </div>
        </>,

        <>
          <h2>Bernoulli's Theorem</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Bernoulli function</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$B \\equiv \\tfrac{1}{2}v^2 + h + \\Phi$$`}</div>
              <p>
                Conserved along streamlines in steady barotropic ideal flow. {`$h = u + P/\\rho$`}{' '}
                is specific enthalpy.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Bernoulli's theorem (incompressible)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\tfrac{1}{2}v^2 + \\frac{P}{\\rho} + \\Phi = \\text{const along streamlines}$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Bernoulli's theorem (irrotational)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\tfrac{1}{2}v^2 + h + \\Phi = \\text{const everywhere}$$`}</div>
              <p>
                Holds for steady irrotational ({`$\\boldsymbol{\\omega} = 0$`}) barotropic flow.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Crocco's Theorem</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Crocco's theorem (steady flow)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\boldsymbol{\\omega}\\times\\mathbf{v} = \\nabla B - T\\nabla s$$`}</div>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Condition</th>
                <th>Consequence of Crocco</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {`$\\boldsymbol{\\omega} = 0$`} and {`$\\nabla s = 0$`}
                </td>
                <td>
                  {`$\\nabla B = 0$`}: {`$B$`} uniform everywhere
                </td>
              </tr>
              <tr>
                <td>
                  {`$\\boldsymbol{\\omega} = 0$`}, {`$\\nabla s \\neq 0$`}
                </td>
                <td>{`$\\nabla B = T\\nabla s$`}: Bernoulli varies across streamlines</td>
              </tr>
              <tr>
                <td>{`$\\nabla s = 0$`} (isentropic)</td>
                <td>
                  {`$\\boldsymbol{\\omega}\\times\\mathbf{v} = \\nabla B$`}: vorticity and Bernoulli
                  gradient linked
                </td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Energy Conservation</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Energy density (ideal fluid)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$U = \\left(\\tfrac{1}{2}v^2 + u + \\Phi\\right)\\rho$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Energy flux (ideal fluid)</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\mathbf{F} = \\left(\\tfrac{1}{2}v^2 + h + \\Phi\\right)\\rho\\mathbf{v}$$`}</div>
              <p>
                Enthalpy {`$h = u + P/\\rho$`} appears because pressure forces do flow work per unit
                mass.
              </p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Density</th>
                <th>Flux</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mass</td>
                <td>{`$\\rho$`}</td>
                <td>{`$\\rho\\mathbf{v}$`}</td>
              </tr>
              <tr>
                <td>Momentum ({`$j$`})</td>
                <td>{`$\\rho v_j$`}</td>
                <td>{`$Pg_{ij} + \\rho v_iv_j$`}</td>
              </tr>
              <tr>
                <td>Energy</td>
                <td>{`$(\\frac{1}{2}v^2+u+\\Phi)\\rho$`}</td>
                <td>{`$(\\frac{1}{2}v^2+h+\\Phi)\\rho\\mathbf{v}$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Thermodynamics of Ideal Flow</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Adiabatic condition</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{ds}{dt} = 0$$`}</div>
              <p>
                Entropy is a material constant carried by each parcel of an ideal inviscid,
                non-heat-conducting fluid.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Sound speed</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$C = \\sqrt{\\left(\\frac{\\partial P}{\\partial\\rho}\\right)_s}$$`}</div>
              <p>
                For ideal gas: {`$C = \\sqrt{\\gamma k_BT/(\\mu m_p)}$`}. Derivative at constant
                entropy because sound compressions are adiabatic.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Specific enthalpy</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$h = u + \\frac{P}{\\rho},\\quad dh = T\\,ds + \\frac{dP}{\\rho}$$`}</div>
            </div>
          </div>
        </>,

        <>
          <h2>Vorticity, Potential Flow, and Kelvin's Theorem</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Vorticity definition</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\boldsymbol{\\omega} = \\nabla \\times \\mathbf{v}$$`}</div>
              <p>
                Twice the local angular velocity of a fluid element. A paddle wheel spins if and
                only if {`$\\boldsymbol{\\omega} \\neq 0$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">
              Laplace's equation (incompressible irrotational)
            </div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\nabla^2\\phi = 0 \\text{ where } \\mathbf{v} = \\nabla\\phi$$`}</div>
              <p>Linear: solutions superpose freely.</p>
            </div>
          </div>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Flow type</th>
                <th>Velocity potential {`$\\phi$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Uniform stream {`$U$`}</td>
                <td>{`$Ux$`}</td>
              </tr>
              <tr>
                <td>Point source (strength {`$m$`})</td>
                <td>{`$\\frac{m}{2\\pi}\\ln r$`}</td>
              </tr>
              <tr>
                <td>Point vortex (circulation {`$\\Gamma$`})</td>
                <td>{`$\\frac{\\Gamma}{2\\pi}\\theta$`}</td>
              </tr>
              <tr>
                <td>Dipole (strength {`$D$`})</td>
                <td>{`$-\\frac{D\\cos\\theta}{r}$`}</td>
              </tr>
            </tbody>
          </table>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Potential flow past a cylinder</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\phi = U\\!\\left(r + \\frac{a^2}{r}\\right)\\!\\cos\\theta$$`}</div>
              <p>
                Surface tangential speed: {`$-2U\\sin\\theta$`}. Surface pressure:{' '}
                {`$P(\\theta) = P_\\infty + \\frac{1}{2}\\rho U^2(1 - 4\\sin^2\\theta)$`}. Zero drag
                (d'Alembert's paradox).
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Circulation</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\Gamma \\equiv \\oint_{\\partial\\mathcal{S}}\\mathbf{v}\\cdot d\\mathbf{x} = \\int_{\\mathcal{S}}\\boldsymbol{\\omega}\\cdot d\\boldsymbol{\\Sigma}$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">
              Kelvin's circulation theorem (barotropic inviscid)
            </div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{d\\Gamma}{dt} = 0$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Vortex lines frozen into flow</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{D}{Dt}\\!\\left(\\frac{\\boldsymbol{\\omega}}{\\rho}\\right) = 0$$`}</div>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Kutta-Joukowski lift theorem</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$F_L = \\rho V \\Gamma$$`}</div>
              <p>
                Lift per unit span. Total lift over a wing of span {`$L$`} is{' '}
                {`$\\rho V \\Gamma L$`}.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Sound Waves (Acoustics)</h2>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Wave equation for density perturbations</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\frac{\\partial^2\\rho'}{\\partial t^2} = C^2\\nabla^2\\rho'$$`}</div>
              <p>
                Small-amplitude adiabatic perturbations in an ideal fluid at rest. Dispersion
                relation: {`$\\omega = Ck$`}.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <div className="lrn-definition-term">Acoustic energy flux</div>
            <div className="lrn-definition-desc">
              <div className="lrn-eq">{`$$\\mathbf{F}_{\\rm acoustic} = P'\\mathbf{v}',\\quad \\bar{F} = \\tfrac{1}{2}\\rho_0 C|v'|^2$$`}</div>
            </div>
          </div>
        </>,

        <>
          <h2>Key Contrasts</h2>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Irrotational</th>
                <th>Rotational</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vorticity</td>
                <td>{`$\\boldsymbol{\\omega} = 0$`}</td>
                <td>{`$\\boldsymbol{\\omega} \\neq 0$`}</td>
              </tr>
              <tr>
                <td>Velocity potential</td>
                <td>{`$\\mathbf{v} = \\nabla\\phi$`} (exists)</td>
                <td>Does not exist globally</td>
              </tr>
              <tr>
                <td>Governing equation</td>
                <td>{`$\\nabla^2\\phi = 0$`} (linear)</td>
                <td>Nonlinear Euler equation</td>
              </tr>
              <tr>
                <td>Bernoulli</td>
                <td>{`$B = \\text{const everywhere}$`} (steady)</td>
                <td>{`$B = \\text{const along streamlines}$`} only</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Compressible</th>
                <th>Incompressible</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Condition</td>
                <td>
                  {`$v$`} any fraction of {`$C$`}
                </td>
                <td>
                  {`$v \\ll C$`}, {`$|\\delta\\Phi| \\ll C^2$`}
                </td>
              </tr>
              <tr>
                <td>Continuity</td>
                <td>{`$\\partial\\rho/\\partial t + \\nabla\\cdot(\\rho\\mathbf{v}) = 0$`}</td>
                <td>{`$\\nabla\\cdot\\mathbf{v} = 0$`}</td>
              </tr>
              <tr>
                <td>Sound waves</td>
                <td>Exist</td>
                <td>Not modeled ({`$C\\to\\infty$`})</td>
              </tr>
            </tbody>
          </table>
          <table className="lrn-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Barotropic</th>
                <th>Baroclinic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pressure-density relation</td>
                <td>{`$P = P(\\rho)$`} only</td>
                <td>
                  {`$P$`} depends on {`$T$`} as well
                </td>
              </tr>
              <tr>
                <td>Vorticity generation</td>
                <td>None (Kelvin holds)</td>
                <td>{`$-(\\nabla P\\times\\nabla\\rho)/\\rho^2 \\neq 0$`}</td>
              </tr>
              <tr>
                <td>Kelvin's theorem</td>
                <td>Valid</td>
                <td>Invalid</td>
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
