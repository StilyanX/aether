import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  CM_LE_StrainDecomposition,
  CM_LE_ShearEllipse,
  CM_LE_StressTraction,
  CM_LE_HookeCurve,
  CM_LE_PoissonEffect,
  CM_LE_ModuliRelations,
  CM_LE_BeamDeflection,
  CM_LE_Buckling,
  CM_LE_PressurizedPipe,
  CM_LE_StrainEnergyBowl,
  CM_LE_ThermoStressLine,
  CM_LE_NavierForces,
  CM_LE_BasisVectors
} from '../../../../../components/viz'

export default function LinearElasticity() {
  const config = {
    cssPrefix: 'le',
    documentTitle: 'Linear Elasticity - AETHER',
    learning: {
      groupTitle: 'Continuum and Field-Theoretic Mechanics',
      category: 'Module 6',
      title: 'Linear Elasticity',
      subtitle:
        'A solid deforms when forces act on it. The displacement gradient splits into three irreducible parts, elastic energy costs something for volume and shape changes but nothing for rotation, and this single fact drives beam bending, buckling, telescope mirrors, and gravitational-wave detectors.',
      sections: [
        // SECTION 1: DISPLACEMENT AND THE DISPLACEMENT GRADIENT
        <>
          <h2>Displacement and the Displacement Gradient</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Imagine pressing your thumb against a rubber eraser. Some of the eraser squashes flat, some bulges outward, and none of it spins. Which of these three responses is the rubber actually resisting, and which one costs it zero energy?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The rubber resists squashing (volume change, set by a bulk modulus $K$) and bulging (shape change, set by a shear modulus $\\mu$). We name these two numbers now and define them precisely in Section 5. Spinning costs zero elastic energy. Rigid-body rotation stretches no bonds and stores nothing.`}
              </p>
            </details>
          </div>

          <p>
            {`Every point in a solid has a position $\\mathbf{x}$. When the solid deforms, that point moves to $\\mathbf{x} + \\boldsymbol{\\xi}(\\mathbf{x})$. The vector $\\boldsymbol{\\xi}(\\mathbf{x})$ is the `}
            <strong>displacement vector</strong>
            {`. It is a field: every point in the body has its own displacement.`}
          </p>

          <p>
            {`Near any point $\\mathbf{x}_0$, a Taylor expansion gives the displacement at a nearby point $\\mathbf{x}$:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\xi_i(\\mathbf{x}) = \\xi_i(\\mathbf{x}_0) + (x_j - x_{0j})\\frac{\\partial \\xi_i}{\\partial x_j} + \\ldots$$`}</span>
          </div>

          <p>
            {`The first-order correction is a matrix of partial derivatives called the `}
            <strong>displacement gradient tensor</strong>
            {`:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$W_{ij} = \\frac{\\partial \\xi_i}{\\partial x_j} = \\nabla\\boldsymbol{\\xi}$$`}</span>
          </div>

          <p>
            {`Near any point, the entire local deformation is captured by $W$. This second-rank tensor field has nine independent components in 3D.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`"Local" means we throw away everything beyond first order in Taylor. At that order, displacement varies linearly from point to point. A linear map on 3D vectors has exactly nine components. So $W$ is complete at first order. It is not an approximation of convenience; it is exact at the scale of infinitesimal neighborhoods.`}
            </p>
          </div>

          <p>
            {`This single gradient $W$ hides three different motions, and the next section splits them apart cleanly. Preview the three pure cases now: if $W = \\frac{1}{3}\\Theta\\,\\mathbf{g}$ (a scalar $\\Theta$ times the identity), every point moves radially outward (pure uniform expansion). If $W = R$ (antisymmetric), the body rotates rigidly. If $W = \\Sigma$ (symmetric, trace-free), the body stretches along some axes and squeezes along others at constant volume (pure shear). Expansion $\\Theta$, rotation $R$, and shear $\\Sigma$ are the three parts, defined in full next.`}
          </p>

          <CM_LE_StrainDecomposition />

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Each pure case of $W$ produces a qualitatively different result. Pure expansion scales every distance uniformly. Pure rotation moves points without changing any distances. Pure shear stretches some distances and shrinks others while keeping volume fixed. These three responses are independent: no combination of the first two can produce the third. That independence is what "irreducible" means.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The three parts correspond to the $l = 0$, $l = 1$, and $l = 2$ representations of the rotation group. No rotation of coordinates can mix one into another. They are the unique irreducible subspaces of the space of $3\\times3$ matrices.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 2: BREAKING W INTO THREE PARTS
        <>
          <h2>Breaking the Displacement Gradient into Three Parts</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A tensor $W$ has nine components. If you split it into three pieces, how many components does each piece get? Is there any way to build a fourth piece?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The only split that is irreducible under rotations gives $1 + 3 + 5 = 9$. There is no fourth piece: 9 is exactly accounted for.`}
              </p>
            </details>
          </div>

          <p>{`The nine components of $W$ split into exactly three irreducible pieces:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$W_{ij} = \\frac{1}{3}\\Theta\\, g_{ij} + R_{ij} + \\Sigma_{ij}$$`}</span>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Expansion scalar</div>
            <div className="lrn-definition-desc">
              <p>{`$\\Theta = W_{ii} = \\nabla\\cdot\\boldsymbol{\\xi}$ (1 component). Measures the fractional volume change: $\\delta V/V = \\Theta$.`}</p>
            </div>
            <div className="lrn-definition-term">Rotation tensor</div>
            <div className="lrn-definition-desc">
              <p>{`$R_{ij} = \\frac{1}{2}(W_{ij} - W_{ji})$ (3 independent components). Represents rigid-body rotation. The rotation vector is $\\boldsymbol{\\phi} = \\frac{1}{2}\\nabla\\times\\boldsymbol{\\xi}$.`}</p>
            </div>
            <div className="lrn-definition-term">Shear tensor</div>
            <div className="lrn-definition-desc">
              <p>{`$\\Sigma_{ij} = \\frac{1}{2}(W_{ij} + W_{ji}) - \\frac{1}{3}\\Theta\\, g_{ij}$ (5 independent components). Stretches along some axes and squeezes along others at constant volume.`}</p>
            </div>
          </div>

          <p>
            {`The count checks out: $1 + 3 + 5 = 9$. The fractional volume change follows from Gauss's theorem:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\delta V = \\int_{\\partial V} d\\boldsymbol{\\Sigma}\\cdot\\boldsymbol{\\xi} = \\int_V dV\\,\\nabla\\cdot\\boldsymbol{\\xi} \\implies \\frac{\\delta V}{V} = \\Theta$$`}</span>
          </div>

          <p>
            {`Elastic materials do not respond to rotation. They respond only to the `}
            <strong>strain tensor</strong>
            {` $S$, which is the symmetric part of $W$. It keeps the expansion and shear (the parts that stretch bonds) and drops the antisymmetric rotation $R$:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$S_{ij} = \\frac{1}{2}(\\xi_{i;j} + \\xi_{j;i}) = \\Sigma_{ij} + \\frac{1}{3}\\Theta\\, g_{ij}$$`}</span>
          </div>

          <p>
            {`The semicolon is the covariant derivative: $\\xi_{i;j}$ accounts for how basis vectors turn in curved coordinate systems. In Cartesian coordinates it is just the ordinary partial derivative, $\\xi_{i;j} = \\partial\\xi_i/\\partial x_j$. Section 14 shows what the extra correction terms do in cylindrical coordinates.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The three parts of $W$ are irreducible representations of SO(3): the $l=0$ scalar (expansion), the $l=1$ antisymmetric tensor (rotation), and the $l=2$ symmetric trace-free tensor (shear). Rotations in 3D cannot mix these subspaces. So if elastic energy must be a scalar (invariant under all rotations), it can depend only on $\\Theta$ and $\\Sigma$, never on $R$.`}
            </p>
            <p>
              {`This is not an approximation. It follows from requiring that the elastic energy be a well-defined scalar in all coordinate frames.`}
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Expansion and Shear</span>
              <p>{`Change volume ($\\Theta$) or shape ($\\Sigma$). Both cost elastic energy. Bulk modulus $K$ resists $\\Theta$; shear modulus $\\mu$ resists $\\Sigma$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rotation</span>
              <p>{`Rigid-body motion. Changes no bond lengths. Costs zero elastic energy. Hooke's law is completely blind to $R$.`}</p>
            </div>
          </div>

          <p>
            {`Strain magnitudes span an enormous range. Engineering loads produce strains around $10^{-3}$ to $10^{-4}$. Continental drift, measured by very-long-baseline interferometry, produces strains around $10^{-8}$ per year. A gravitational wave passing through LIGO squeezes its 4-km arms by a strain of order $10^{-22}$. That is the most sensitive strain measurement ever made.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The shear tensor $\\Sigma$ has five independent components. The symmetric part of a $3\\times3$ matrix has six components. Why five and not six?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`We subtract the trace $\\frac{1}{3}\\Theta\\,g_{ij}$ to make $\\Sigma$ trace-free, removing one degree of freedom. Five components match the five $m$-values of a spin-2 spherical harmonic, confirming the $l=2$ representation.`}
              </p>
            </details>
          </div>

          <CM_LE_ShearEllipse />
        </>,

        // SECTION 3: THE STRESS TENSOR
        <>
          <h2>The Stress Tensor</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`You push on one face of a solid block with a force $\\mathbf{F}$ per unit area. How does the force transmitted across a tilted surface inside the block compare to the force you applied?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The tilted surface has a smaller projected area and a different orientation. The traction $\\mathbf{T}\\cdot\\hat{\\mathbf{n}}$ depends on both the stress tensor and the surface normal $\\hat{\\mathbf{n}}$.`}
              </p>
            </details>
          </div>

          <p>
            {`Cut the solid along a small surface element with area $dA$ and outward normal $\\hat{\\mathbf{n}}$. The material on the $+\\hat{\\mathbf{n}}$ side pulls the material on the $-\\hat{\\mathbf{n}}$ side with force:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$dF_i = T_{ij}\\,d\\Sigma_j, \\qquad \\mathbf{T} \\text{ in Pascals: } 1\\,\\text{Pa} = 1\\,\\frac{\\text{N}}{\\text{m}^2}$$`}</span>
          </div>

          <p>
            {`Why does one tensor $T_{ij}$ fix the force across every surface, no matter how tilted? Cauchy answered this with a tiny tetrahedron. Cut a tetrahedron whose three back faces lie in the coordinate planes and whose slanted front face has area $dA$ and normal $\\hat{\\mathbf{n}}$. The back face perpendicular to axis $j$ has area $n_j\\,dA$, the projection of the front face onto that plane.`}
          </p>

          <p>
            {`Now balance forces on this tetrahedron. The traction on the front face is $T(\\hat{\\mathbf{n}})$ times $dA$. The traction on each back face is $T_{ij}$ times its area $n_j\\,dA$. Surface forces scale with area, so as the tetrahedron shrinks they scale as $\\delta^2$. The body force (gravity, inertia) scales with volume, as $\\delta^3$. Shrinking the tetrahedron to a point, the $\\delta^3$ term vanishes faster, so the surface forces must balance on their own:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$T_i(\\hat{\\mathbf{n}}) = T_{ij}\\,n_j$$`}</span>
          </div>

          <p>
            {`So the nine components of $T_{ij}$ really do encode the force across every possible surface. The elastic force density (force per unit volume) is $\\mathbf{f} = -\\nabla\\cdot\\mathbf{T}$. Decompose $T$ into pressure and shear:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\mathbf{T} = P\\mathbf{g} + \\mathbf{T}^{\\text{shear}}, \\qquad P = \\frac{1}{3}T_{ii}$$`}</span>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Pressure (isotropic)</span>
              <p>{`$T_{ij} = P g_{ij}$: equal force in every direction. A solid under pure pressure compresses but does not shear. Pressure alone cannot cause material failure by shearing. Sign note: here $P = \\frac{1}{3}T_{ii}$ is the trace of the stress tensor, so a compressed solid has $P < 0$. Hooke's law $T = -K\\Theta g$ then gives $P = -K\\Theta$: squeezing ($\\Theta < 0$) makes $P$ positive in the everyday pressure sense.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Shear stress (deviatoric)</span>
              <p>{`$\\mathbf{T}^{\\text{shear}}$ (deviatoric means the part left after subtracting the pressure): force tangential to surfaces. Shear drives plastic flow, fracture, and dislocation motion. This is what tears materials apart.`}</p>
            </div>
          </div>

          <p>
            {`The stress tensor is symmetric, $T_{ij} = T_{ji}$. This is the same angular-momentum-conservation requirement derived in Hamiltonian Field Theory: a non-symmetric stress tensor would let a closed body spin itself up out of nothing. The faded example below works the argument out for an infinitesimal cube.`}
          </p>

          <CM_LE_StressTraction />

          <p>Stress magnitudes span an enormous range:</p>

          <table>
            <thead>
              <tr>
                <th>System</th>
                <th>Stress (Pa)</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Atmospheric pressure (sea level)</td>
                <td>{`$\\approx 10^5$`}</td>
                <td>measured</td>
              </tr>
              <tr>
                <td>Nail hammered into wood</td>
                <td>{`$\\approx 10^{10}$`}</td>
                <td>measured</td>
              </tr>
              <tr>
                <td>Neutron star crust</td>
                <td>{`$\\approx 10^{31}$`}</td>
                <td>theoretical</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Show that the stress tensor must be symmetric using an angular momentum argument on an infinitesimal cube.`}</p>
              <ol className="lrn-list">
                <li>{`Label the cube faces by $\\pm\\hat{e}_i$ for $i=1,2,3$. The force on face $+\\hat{e}_1$ is $T_{j1}$ per unit area (traction in direction $j$).`}</li>
                <li>{`Compute the torque about the $z$-axis from the $x$ and $y$ faces. It equals $(T_{12} - T_{21})$ times the face area times the moment arm.`}</li>
                <li>{`The moment of inertia of the cube scales as $(\\text{size})^5$, but the torque scales as $(\\text{size})^3$. Angular acceleration diverges as size goes to zero.`}</li>
                <li>{`To prevent infinite angular acceleration: $T_{12} = T_{21}$. The same argument applies to all pairs. So $T_{ij} = T_{ji}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>{`Write out the torque from the $T_{13}$ and $T_{31}$ face stresses about the $y$-axis.`}</li>
                <li>{`State how moment-of-inertia scaling forces $T_{13} = T_{31}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Suppose $T$ had an antisymmetric part $A_{ij} = -A_{ji} \\neq 0$. Show directly that this would mean every infinitesimal volume element spins without bound, contradicting static equilibrium.`}</p>
            </div>
          </div>
        </>,

        // SECTION 4: WHEN HOOKE'S LAW APPLIES
        <>
          <h2>When Hooke's Law Applies</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`If you pull a copper rod past its yield point, does it spring back to its original shape when you release the force?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`No. Above the yield point, plastic flow begins and removing the force leaves a permanent deformation.`}
              </p>
            </details>
          </div>

          <p>
            The stress-strain curve for a solid under increasing tension has four landmark points:
          </p>

          <ol className="lrn-list">
            <li>
              <strong>Proportionality limit.</strong>
              {` Up to here, stress is exactly proportional to strain. Linear Hooke's law is exact.`}
            </li>
            <li>
              <strong>Elastic limit.</strong>
              {` Up to here, removing the stress returns the solid to its original shape.`}
            </li>
            <li>
              <strong>Yield point.</strong>
              {` Above this stress, the material flows plastically. Copper yields at strain around $10^{-3}$.`}
            </li>
            <li>
              <strong>Rupture point.</strong>
              {` The material fractures.`}
            </li>
          </ol>

          <CM_LE_HookeCurve />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Proportionality limit</span>
              <p>
                {`Hooke's law is exact here. Below this, stress and strain are perfectly proportional.`}
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Elastic vs. yield</span>
              <p>
                {`The elastic limit (reversible) comes before the yield point (plastic flow starts). A material can be elastic without being Hookean. Rubber between these limits is the key example.`}
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY ARE THESE DIFFERENT?</span>
            <p>
              {`Below the proportionality limit, bonds deform along the harmonic part of their potential (the parabolic region). Stress and strain are exactly proportional. Between the proportionality limit and the elastic limit, bonds deform into the anharmonic region. The solid can still recover its shape when you release the force, but the path back is slightly nonlinear. Above the elastic limit, deformation is irreversible: bonds have broken and reformed in new positions (via dislocation motion). Permanent plastic strain remains.`}
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Copper has an elastic limit around $10^{-4}$ and a yield point around $10^{-3}$. Why are these different?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Below $10^{-4}$: deformation is fully reversible and linear. Between $10^{-4}$ and $10^{-3}$: deformation is still reversible but may not be exactly linear. Above $10^{-3}$: plastic flow begins and removing stress leaves permanent deformation. Hooke's law is safe only below the proportionality limit.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 5: HOOKE'S LAW, BULK AND SHEAR MODULI
        <>
          <h2>Hooke's Law for Isotropic Materials: Bulk and Shear Moduli</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Can you have a material with Poisson's ratio greater than $\\frac{1}{2}$? What would that physically mean?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`No. $\\nu > \\frac{1}{2}$ would require $K < 0$: the material would expand when compressed, which is mechanically unstable.`}
              </p>
            </details>
          </div>

          <p>
            {`The most general linear relation between stress and strain uses a fourth-rank elastic modulus tensor $Y_{ijkl}$ with up to 21 independent components (symmetric in $ij$, symmetric in $kl$, and unchanged when you swap the pair $ij$ with $kl$: those three symmetries cut $81$ down to $21$). For an `}
            <strong>isotropic</strong>
            {` solid, symmetry reduces this to just two numbers:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\mathbf{T} = -K\\Theta\\mathbf{g} - 2\\mu\\boldsymbol{\\Sigma}$$`}</span>
          </div>

          <div className="lrn-definition">
            <div className="lrn-definition-term">Bulk modulus K</div>
            <div className="lrn-definition-desc">
              <p>{`Resists volume changes. $K\\Theta$ is the pressure induced by compression. Units: Pa. Fused silica: $K \\approx 37\\,\\text{GPa}$; steel: $K \\approx 170\\,\\text{GPa}$.`}</p>
            </div>
            <div className="lrn-definition-term">Shear modulus mu</div>
            <div className="lrn-definition-desc">
              <p>{`Resists shape changes at constant volume. $2\\mu\\Sigma_{ij}$ is the shear stress. Fused silica: $\\mu \\approx 31\\,\\text{GPa}$. Its near-equal $K$ and $\\mu$ make it ideal for optical components.`}</p>
            </div>
          </div>

          <p>
            {`Both $K > 0$ and $\\mu > 0$ are required for mechanical stability. The 1D version for a rod under longitudinal force $F$ and cross-section $A$ is $F/A = -E\\,\\Delta\\ell/\\ell$, where Young's modulus $E = 9\\mu K/(3K + \\mu)$. Operationally, $E = -T_{zz}/\\xi_{z;z}$: the longitudinal stress divided by the longitudinal strain when the sides are free to contract. A later section derives this formula and Poisson's ratio in full.`}
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Isotropy means the material looks the same in every direction. Any fourth-rank tensor invariant under all rotations must be built from products of the metric $g_{ij}$. There are only three such independent combinations. The two constraints (major and minor symmetry of $Y_{ijkl}$) reduce three to two. So isotropy forces $T_{ij} = -K\\Theta g_{ij} - 2\\mu\\Sigma_{ij}$ with exactly two free constants $K$ and $\\mu$.`}
            </p>
          </div>

          <div>
            <CM_LE_StrainEnergyBowl />
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Derive $\\mathbf{T} = -K\\Theta\\mathbf{g} - 2\\mu\\boldsymbol{\\Sigma}$ from isotropy alone.`}</p>
              <ol className="lrn-list">
                <li>{`Write the most general linear map from a symmetric tensor $S_{ij}$ to a symmetric tensor $T_{ij}$: it is $T_{ij} = Y_{ijkl}S_{kl}$ where $Y_{ijkl}$ has 21 independent components.`}</li>
                <li>{`Demand isotropy: $Y_{ijkl}$ must be unchanged under all rotations. Any isotropic rank-4 tensor is $a\\,g_{ij}g_{kl} + b\\,(g_{ik}g_{jl} + g_{il}g_{jk}) + c\\,(g_{ik}g_{jl} - g_{il}g_{jk})$.`}</li>
                <li>{`Symmetry of $T_{ij}$ forces $c = 0$, leaving $T_{ij} = a\\,\\Theta\\,g_{ij} + 2b\\,S_{ij}$. Split $S_{ij} = \\Sigma_{ij} + \\frac{1}{3}\\Theta g_{ij}$, so $T_{ij} = (a + \\frac{2}{3}b)\\Theta g_{ij} + 2b\\,\\Sigma_{ij}$. Match this to $T = -K\\Theta\\mathbf{g} - 2\\mu\\boldsymbol{\\Sigma}$: the shear part gives $2b = -2\\mu$, so $b = -\\mu$, and the expansion part gives $a + \\frac{2}{3}b = -K$, so $a = -K + \\frac{2}{3}\\mu = -\\lambda$. The two free constants are exactly $K$ and $\\mu$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>{`Contract $Y_{ijkl}$ with $g_{kl}$ (the expansion part). Show this gives a term proportional to $\\Theta g_{ij}$.`}</li>
                <li>{`Identify which constant ($a$ or $b$) controls the response to expansion, and which controls shear.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Use the result $T_{ij} = -(K - \\frac{2}{3}\\mu)\\Theta g_{ij} - 2\\mu S_{ij}$ to identify the Lamé coefficients $\\lambda = K - \\frac{2}{3}\\mu$ and $\\mu$. Check that for $\\mu = 0$ (fluid), $T$ reduces to pure pressure.`}</p>
            </div>
          </div>
        </>,

        // SECTION 6: ENERGY OF DEFORMATION
        <>
          <h2>The Energy of Deformation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`You build up a deformation slowly from zero to its final value. Does the work depend on the path you take, or only on the final deformation?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Only the final deformation. Hooke's law is linear, so the energy is a quadratic function of strain. It has no memory of the path.`}
              </p>
            </details>
          </div>

          <p>
            {`Build up the displacement from $0$ to $\\boldsymbol{\\xi}$ at a uniform rate. Hooke's law is linear, so the stress at stage $\\epsilon$ is $\\epsilon\\mathbf{T}$. Integrating the work done by surface and body forces gives the stored elastic energy density:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$U = \\frac{1}{2}K\\Theta^2 + \\mu\\Sigma_{ij}\\Sigma_{ij}$$`}</span>
          </div>

          <p>
            {`Since $K > 0$ and $\\mu > 0$, the energy is always non-negative. It is zero only when both $\\Theta = 0$ and $\\Sigma = 0$. Rotation $R$ can be nonzero and the stored energy is still zero.`}
          </p>

          <p>
            {`A steel spring stores about $10^4\\,\\text{J/m}^3$ at engineering strains ($\\sim 10^{-3}$). A LIGO mirror under gravitational-wave strain ($\\sim 10^{-22}$) stores about $10^{-28}\\,\\text{J/m}^3$. The same formula applies across 32 orders of magnitude.`}
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Elastic energy (path-independent)</span>
              <p>{`$U = \\frac{1}{2}K\\Theta^2 + \\mu\\Sigma^2$. The solid stores energy and returns it fully on unloading. No energy is lost. This is the Hookean regime.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Plastic dissipation (path-dependent)</span>
              <p>{`Above the elastic limit, dislocations move irreversibly. Energy is lost as heat. Unloading does not return to the original shape. Path matters: a different loading history gives different final strain.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The energy $U = \\frac{1}{2}K\\Theta^2 + \\mu\\Sigma_{ij}\\Sigma_{ij}$ has no cross-term between $\\Theta$ and $\\Sigma$. Why?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Because $\\Theta\\,\\mathbf{g}$ and $\\Sigma$ are orthogonal in tensor space: their inner product $g_{ij}\\Sigma_{ij} = \\text{Tr}(\\Sigma) = 0$ by definition of trace-free. Decoupling of volume and shape changes in the energy is exact.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 7: THERMOELASTICITY
        <>
          <h2>Thermoelasticity</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`If you compress a rod adiabatically (no heat escapes), will its temperature rise or fall?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Rise. Compression decreases volume ($\\Delta\\Theta < 0$), and the adiabatic coupling $\\Delta T/T = -3\\alpha K\\Delta\\Theta/(\\rho c_V)$ gives $\\Delta T > 0$ for $\\alpha > 0$.`}
              </p>
            </details>
          </div>

          <p>
            {`The free energy density of a thermoelastic solid shifts the zero of strain by the thermal expansion. The term $\\mathcal{F}_0(T)$ is the strain-independent reference free energy (the energy of the unstrained solid at temperature $T$):`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\mathcal{F} = \\mathcal{F}_0(T) + \\frac{1}{2}K(\\Theta - 3\\alpha\\,\\delta T)^2 + \\mu\\Sigma_{ij}\\Sigma_{ij}$$`}</span>
          </div>

          <p>
            {`Here $\\alpha$ is the linear thermal expansion coefficient and $\\delta T = T - T_0$ measures the rise above the reference temperature $T_0$ (the temperature at which the solid is unstrained). At equilibrium with $\\delta T > 0$, the body expands by $3\\alpha\\,\\delta T$ in volume with no stress. Now follow the temperature. Adiabatic means no heat enters or leaves, so the entropy stays fixed: $dS = 0$.`}
          </p>

          <p>
            {`Write the entropy per unit volume as a function of temperature and volume strain, $S(T, \\Theta)$. Its differential is:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$dS = \\frac{\\rho c_V}{T}\\,dT + 3\\alpha K\\,d\\Theta = 0$$`}</span>
          </div>

          <p>
            {`The first coefficient is just the definition of specific heat ($\\rho c_V = T\\,\\partial S/\\partial T$). The second coefficient $3\\alpha K$ is fixed by a Maxwell relation: $\\partial S/\\partial\\Theta$ equals the same thermoelastic coupling that sits in the free energy above (the cross-term between $\\Theta$ and temperature). Setting $dS = 0$ and dividing by $\\rho c_V/T$ gives the adiabatic cooling law:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\frac{\\Delta T}{T} = -\\frac{3\\alpha K\\,\\Delta\\Theta}{\\rho c_V}$$`}</span>
          </div>

          <p>
            {`Here $\\rho$ is the mass density and $c_V$ is the specific heat at constant volume (the energy needed to heat 1 kg by 1 K). When a bridge girder heats up on a summer day but stays bolted at both ends, it cannot expand, so $\\Theta = 0$. Thermal stress then builds as $T_{ij} = -K(0 - 3\\alpha\\,\\delta T)g_{ij} = 3K\\alpha\\,\\delta T\\,g_{ij}$. This is why bridges have expansion joints.`}
          </p>

          <div>
            <CM_LE_ThermoStressLine />
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Entropy depends on both temperature $T$ and volume strain $\\Theta$. If expansion increases $\\Theta$ at constant entropy $S$, then $T$ must decrease to compensate. The bulk modulus $K$ sets the coupling strength. Materials with large $K\\alpha$ show the largest thermoelastic effect. Steel ($K\\alpha \\approx 1.7\\times10^6\\,\\text{Pa/K}$) produces measurable thermal stress with only a 10 K temperature change.`}
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The free energy $\\mathcal{F}$ has no stress when $\\Theta = 3\\alpha\\delta T$. What does this condition say physically?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`It says: if the temperature rises by $\\delta T$, the solid wants to expand by $3\\alpha\\delta T$ in volume. If it cannot expand freely, the term $(\\Theta - 3\\alpha\\delta T)$ is nonzero and the solid is under thermal stress. The whole thermoelastic machinery follows from this one displaced minimum.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 8: MOLECULAR ORIGIN OF MODULI
        <>
          <h2>Molecular Origin of Elastic Moduli</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A perfect crystal lattice has no defects. If you stretch it far enough, bonds break and the material yields. At what strain do you expect this to happen?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`A bond breaks when stretched by about its own length, a strain of order 1. Real materials, though, yield far earlier. The body below explains why.`}
              </p>
            </details>
          </div>

          <p>
            {`For a simple ionic solid with lattice spacing $a \\approx 0.2\\,\\text{nm}$, the moduli scale as the Coulomb energy per unit volume:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$K,\\mu \\sim \\frac{e^2}{4\\pi\\varepsilon_0 a^4} \\approx 100\\,\\text{GPa}$$`}</span>
          </div>

          <p>
            {`This matches measured values for metals, glass, and rock. Real materials yield at $\\sim 10^{-3}$, not $\\sim 1$, because of `}
            <strong>dislocations</strong>
            {`: line defects in the crystal lattice. A dislocation moves through the lattice under a much smaller force than needed to break every bond simultaneously. Only bonds near the dislocation core rearrange at any moment.`}
          </p>

          <table>
            <thead>
              <tr>
                <th>Material</th>
                <th>E (GPa)</th>
                <th>K (GPa)</th>
                <th>mu (GPa)</th>
                <th>nu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbon nanotube</td>
                <td>{`$\\sim 1000$`}</td>
                <td>n/a</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>Steel</td>
                <td>{`$\\sim 200$`}</td>
                <td>{`$\\sim 170$`}</td>
                <td>{`$\\sim 80$`}</td>
                <td>{`$\\sim 0.29$`}</td>
              </tr>
              <tr>
                <td>Copper</td>
                <td>{`$\\sim 120$`}</td>
                <td>{`$\\sim 140$`}</td>
                <td>{`$\\sim 45$`}</td>
                <td>{`$\\sim 0.34$`}</td>
              </tr>
              <tr>
                <td>Glass</td>
                <td>{`$\\sim 70$`}</td>
                <td>{`$\\sim 40$`}</td>
                <td>{`$\\sim 28$`}</td>
                <td>{`$\\sim 0.23$`}</td>
              </tr>
              <tr>
                <td>Rubber</td>
                <td>{`$\\sim 0.001$`}</td>
                <td>n/a</td>
                <td>n/a</td>
                <td>{`$\\approx 0.5$`}</td>
              </tr>
              <tr>
                <td>DNA</td>
                <td>{`$\\sim 0.3$`}</td>
                <td>n/a</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
            </tbody>
          </table>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Estimate $K$ for a metallic solid with lattice spacing $a = 3\\times10^{-10}\\,\\text{m}$.`}</p>
              <ol className="lrn-list">
                <li>{`$e^2/(4\\pi\\varepsilon_0) = 1.44\\,\\text{eV}\\cdot\\text{nm} = 2.3\\times10^{-28}\\,\\text{N}\\,\\text{m}^2$`}</li>
                <li>{`$a^4 = (3\\times10^{-10})^4 = 8.1\\times10^{-39}\\,\\text{m}^4$`}</li>
                <li>{`$K \\sim 2.3\\times10^{-28}/8.1\\times10^{-39} \\approx 3\\times10^{10}\\,\\text{Pa} = 30\\,\\text{GPa}$`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>{`Repeat for $a = 2\\times10^{-10}\\,\\text{m}$. Compute $a^4$.`}</li>
                <li>Find K. Is the result closer to the carbon nanotube or to steel?</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`For $a = 5\\times10^{-10}\\,\\text{m}$ (a soft ionic crystal), estimate $K$ and compare it to rubber's bulk modulus.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The estimate $K \\sim e^2/(4\\pi\\varepsilon_0 a^4)$ gives $\\sim 100\\,\\text{GPa}$ for $a \\approx 0.2\\,\\text{nm}$. The same calculation predicts an elastic limit of $\\sim 1$. Real materials yield at $\\sim 10^{-3}$. The gap is three orders of magnitude. Explain.`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Dislocations: a single dislocation line sweeps an entire plane under a small stress, because only the bonds at the dislocation core break and reform. The rest of the crystal stays intact. A perfect crystal with no dislocations can be strained much closer to order unity before it yields. The observed yield strain $\\sim 10^{-3}$ is only about 1% of that perfect-crystal value.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 9: NAVIER-CAUCHY EQUATION
        <>
          <h2>The Elastic Force Density and the Navier-Cauchy Equation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A solid is in static equilibrium under gravity. Write down the condition that the elastic force density and gravity must satisfy at every interior point.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Elastic force density plus gravity equals zero: $-\\nabla\\cdot\\mathbf{T} + \\rho\\mathbf{g} = 0$.`}
              </p>
            </details>
          </div>

          <p>{`The elastic force density is the divergence of the stress tensor:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\mathbf{f} = -\\nabla\\cdot\\mathbf{T}$$`}</span>
          </div>

          <p>
            {`Insert Hooke's law and expand. Static equilibrium gives the `}
            <strong>Navier-Cauchy equation</strong>
            {`:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\left(K + \\frac{\\mu}{3}\\right)\\nabla(\\nabla\\cdot\\boldsymbol{\\xi}) + \\mu\\nabla^2\\boldsymbol{\\xi} + \\rho\\mathbf{g} = 0$$`}</span>
          </div>

          <p>
            {`At any interface, the traction $\\mathbf{T}\\cdot\\hat{\\mathbf{n}}$ must be continuous. At a free surface, $\\mathbf{T}\\cdot\\hat{\\mathbf{n}} = 0$. The deflection of a massive granite block under its own weight satisfies exactly this equation.`}
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Compressional term (P-waves)</span>
              <p>{`$(K+\\mu/3)\\nabla(\\nabla\\cdot\\boldsymbol{\\xi})$: drives irrotational, curl-free displacement. Points move along the direction of propagation. This is the P-wave term.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Shear term (S-waves)</span>
              <p>{`$\\mu\\nabla^2\\boldsymbol{\\xi}$: drives solenoidal, divergence-free displacement. Points move transverse to propagation. This is the S-wave term. Static equilibrium involves both simultaneously.`}</p>
            </div>
          </div>

          <div>
            <CM_LE_NavierForces />
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The Helmholtz decomposition splits any vector field uniquely into a curl-free part (compressional) and a divergence-free part (shear). Apply it to $\\boldsymbol{\\xi}$. The first Navier-Cauchy term drives the curl-free component; the second drives the divergence-free component. At static equilibrium both must vanish together, which is why the equation couples them. In dynamics (elastodynamics), these two components propagate at different speeds: P-waves travel faster than S-waves.`}
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Derive the Navier-Cauchy equation from Hooke's law and Newton's second law.`}</p>
              <ol className="lrn-list">
                <li>{`Start with $\\mathbf{f} = -\\nabla\\cdot\\mathbf{T}$ and Hooke's law $T_{ij} = -K\\Theta g_{ij} - 2\\mu\\Sigma_{ij}$.`}</li>
                <li>{`Expand: $\\nabla\\cdot\\mathbf{T}$ gives $\\partial_j(K\\Theta g_{ij}) + \\partial_j(2\\mu\\Sigma_{ij})$.`}</li>
                <li>{`Use $\\Theta = \\nabla\\cdot\\boldsymbol{\\xi}$ and $\\Sigma_{ij} = \\frac{1}{2}(\\partial_i\\xi_j + \\partial_j\\xi_i) - \\frac{1}{3}\\Theta g_{ij}$.`}</li>
                <li>{`Collect: $(K+\\frac{\\mu}{3})\\nabla(\\nabla\\cdot\\boldsymbol{\\xi}) + \\mu\\nabla^2\\boldsymbol{\\xi} = -\\rho\\mathbf{g}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>{`Compute $\\partial_j(K\\Theta g_{ij}) = K\\partial_i(\\nabla\\cdot\\boldsymbol{\\xi})$. Name the operator acting on $\\boldsymbol{\\xi}$.`}</li>
                <li>{`Show that $\\partial_j(2\\mu\\Sigma_{ij}) = \\mu(\\nabla^2\\xi_i + \\frac{1}{3}\\partial_i(\\nabla\\cdot\\boldsymbol{\\xi}))$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`For a fluid ($\\mu = 0$), show that the Navier-Cauchy equation reduces to $K\\nabla(\\nabla\\cdot\\boldsymbol{\\xi}) + \\rho\\mathbf{g} = 0$. Interpret this as the hydrostatic equation $\\nabla P = \\rho\\mathbf{g}$ with $P = -K\\Theta$.`}</p>
            </div>
          </div>
        </>,

        // SECTION 10: YOUNG'S MODULUS AND POISSON'S RATIO
        <>
          <h2>Young's Modulus and Poisson's Ratio</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`If you pull a rod along its axis, does its diameter increase, decrease, or stay the same?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Decrease. The transverse strain is $\\xi_{x;x} = -\\nu\\xi_{z;z}$ and $\\nu > 0$ for most materials.`}
              </p>
            </details>
          </div>

          <p>
            {`For a thin rod under longitudinal stress $T_{zz}$ with free transverse surfaces, solving the 3D Hooke's law gives:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$E = \\frac{9\\mu K}{3K+\\mu}, \\qquad \\nu = \\frac{3K-2\\mu}{2(3K+\\mu)}$$`}</span>
          </div>

          <div className="lrn-eq">
            <span>{`$$K = \\frac{E}{3(1-2\\nu)}, \\qquad \\mu = \\frac{E}{2(1+\\nu)}$$`}</span>
          </div>

          <p>{`Stability ($K > 0$, $\\mu > 0$) forces:`}</p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$-1 < \\nu < \\frac{1}{2}$$`}</span>
          </div>

          <CM_LE_ModuliRelations />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Young's modulus E</span>
              <p>{`Longitudinal stiffness: how hard it is to stretch along the axis. Measured directly in tensile tests.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Poisson's ratio nu</span>
              <p>{`Lateral response: how much the sides contract when you stretch. Near $\\frac{1}{2}$ means nearly incompressible (rubber). Negative means auxetic (expands sideways when compressed).`}</p>
            </div>
          </div>

          <CM_LE_PoissonEffect />

          <p>
            <strong>Worked example: Keck mirror glass ceramic.</strong>
            {` $E = 89\\,\\text{GPa}$, $\\nu = 0.24$. From the conversion: $K = E/[3(1-2\\nu)] = 89/1.56 = 57\\,\\text{GPa}$. Shear modulus: $\\mu = E/[2(1+\\nu)] = 89/2.48 = 36\\,\\text{GPa}$.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $\\nu < \\frac{1}{2}$ correspond to a compressible material?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`At $\\nu = \\frac{1}{2}$, $K = E/[3(1-2\\nu)] \\to \\infty$. Infinite bulk modulus means zero volume change under any pressure (perfectly incompressible). At $\\nu < \\frac{1}{2}$, $K$ is finite and volume can change.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 11: BEAM BENDING
        <>
          <h2>Bending a Beam: The Euler-Bernoulli Equation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A horizontal steel beam is clamped at one end and free at the other. If you double the beam's thickness, by how much does the tip sag change?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Sag decreases. Both the stiffness $D$ and the beam's own weight depend on $h$, so track both before you commit to a factor.`}
              </p>
            </details>
          </div>

          <p>
            {`A beam along the $x$-axis with thickness $h$ and width $w$ deflects by $\\eta(x)$ under its own weight $W$ per unit length. The neutral surface is the layer halfway through the beam that neither stretches nor compresses when the beam bends. The longitudinal strain in a fiber at height $z$ above the neutral surface:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\xi_{xx} = z\\frac{d^2\\eta}{dx^2}$$`}</span>
          </div>

          <p>
            {`The `}
            <strong>flexural rigidity</strong>
            {` is:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$D \\equiv E\\int z^2\\,dA = \\frac{Ewh^3}{12}$$`}</span>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The integral $\\int z^2\\,dz$ over a slab of thickness $h$ gives $h^3/12$. The $z^2$ factor comes from two sources: one power of $z$ from the strain (fibers farther from the neutral surface strain more), and one power of $z$ from the moment arm (those strained fibers also have a longer lever arm for the torque). Two powers of $z$ in the integrand, one power of $h$ from the range of integration, gives $h^3$ total.`}
            </p>
          </div>

          <p>
            {`The beam equation is built from a four-step chain, each step adding one derivative. The deflection $\\eta$ curves the beam, and the curvature $d^2\\eta/dx^2$ sets the bending torque through the flexural rigidity:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$M = -D\\frac{d^2\\eta}{dx^2}$$`}</span>
          </div>

          <p>
            {`The shear force is the rate of change of the bending torque, $S = dM/dx$, and the distributed load is the rate of change of the shear force, $W = -dS/dx$. Putting the chain together, $W = -dS/dx = -d^2M/dx^2 = D\\,d^4\\eta/dx^4$. Vertical force balance then gives the `}
            <strong>Euler-Bernoulli beam equation</strong>
            {`:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\frac{d^4\\eta}{dx^4} = \\frac{W}{D}$$`}</span>
          </div>

          <p>
            {`For a clamped cantilever (fixed at $x=0$, free at $x=\\ell$) under its own weight:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$\\eta(x) = \\frac{W}{D}\\left(\\frac{\\ell^2 x^2}{4} - \\frac{\\ell x^3}{6} + \\frac{x^4}{24}\\right), \\qquad \\eta(\\ell) = \\frac{W\\ell^4}{8D}$$`}</span>
          </div>

          <p>
            <strong>Worked example: cantilever bridge.</strong>
            {` A steel cantilever has a total span $2\\ell \\approx 100\\,\\text{m}$, density $\\rho \\approx 8\\times10^3\\,\\text{kg/m}^3$, and Young's modulus $E \\approx 100\\,\\text{GPa}$. You want the center to sag no more than $\\eta \\approx 1\\,\\text{m}$. How thick must the beam be?`}
          </p>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Weight per unit length is $W = \\rho g w h$. Flexural rigidity is $D = Ewh^3/12$.`}</li>
              <li>{`Put both into the tip sag $\\eta = W\\ell^4/(8D)$. The width $w$ cancels: $\\eta = \\frac{3\\rho g \\ell^4}{2Eh^2}$.`}</li>
              <li>{`Solve for the thickness: $h \\gtrsim \\left(\\frac{3\\rho g \\ell^4}{2E\\eta}\\right)^{1/2} \\approx 2.8\\,\\text{m}$.`}</li>
              <li>{`Real bridges use trusses and cables, so this estimate is an upper bound on the solid thickness needed.`}</li>
            </ol>
          </div>

          <CM_LE_BeamDeflection />

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                {`Cantilever under point load $F$ at tip. Boundary conditions: $\\eta(0)=0$, $\\eta'(0)=0$ (clamped); $M(\\ell)=0$ (free torque); $S(\\ell)=-F$ (applied force).`}
              </p>
              <ol className="lrn-list">
                <li>{`Integrate $d^4\\eta/dx^4 = 0$ (no distributed load for $x < \\ell$).`}</li>
                <li>{`Apply $S(\\ell)=-D\\,d^3\\eta/dx^3 = -F$ to get $d^3\\eta/dx^3|_{\\ell} = F/D$.`}</li>
                <li>{`Apply $M(\\ell) = -D\\,d^2\\eta/dx^2 = 0$ to get the third-order constant.`}</li>
                <li>{`Apply $\\eta'(0)=0$ and $\\eta(0)=0$ to get the remaining constants.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>{`Write $d^3\\eta/dx^3 = F/D$ and integrate once. What is $d^2\\eta/dx^2$?`}</li>
                <li>{`Apply the torque-free boundary condition at $x = \\ell$. What constant does this fix?`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Show that the tip deflection under a point load at the tip is $\\eta(\\ell) = F\\ell^3/(3D)$.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The beam equation $d^4\\eta/dx^4 = W/D$ is fourth order. Hooke's law gives a second-order ODE for rods under tension. Why does bending give fourth order?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Four steps in the chain: displacement $\\eta$ to curvature $d^2\\eta/dx^2$ to bending torque $M$ to shear force $S = dM/dx$ to load $W = -dS/dx$. Four steps from $\\eta$ to $W$.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 12: BUCKLING AND BIFURCATION
        <>
          <h2>Buckling and Bifurcation</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`Press down on a playing card held vertical. At first nothing happens. Then suddenly the card arches. What determines the load at which it snaps?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The Euler critical force $F_{\\text{crit}} = \\pi^2 D/\\ell^2$, set by the flexural rigidity $D$ and the length $\\ell$. Below this load, only the straight equilibrium exists.`}
              </p>
            </details>
          </div>

          <p>
            {`A thin card under compressive force $F$ develops a torque $F\\eta$ when laterally displaced by $\\eta$. The torque balance gives:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$D\\frac{d^2\\eta}{dx^2} + F\\eta = 0$$`}</span>
          </div>

          <p>
            {`Solutions are $\\eta = \\eta_0\\sin(kx)$ with $k = \\sqrt{F/D}$. Boundary conditions force $k = n\\pi/\\ell$. The smallest nonzero value gives the `}
            <strong>Euler critical force</strong>
            {`:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$F_{\\text{crit}} = \\frac{\\pi^2 D}{\\ell^2} = \\frac{\\pi^2 wh^3 E}{12\\ell^2}$$`}</span>
          </div>

          <CM_LE_Buckling />

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Below F_crit (stable, straight)</span>
              <p>{`Single stable state: straight. Free energy has one minimum at $\\eta_0 = 0$. The column returns to vertical after any small push.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Above F_crit (buckled)</span>
              <p>{`Straight becomes unstable. Two new minima appear at $\\pm\\eta_0 \\propto \\sqrt{F/F_{\\text{crit}}-1}$. A small lateral push sends the column to one side permanently.`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`The free energy for a column under load $F$ is elastic energy minus work done by $F$: $\\Phi \\sim \\frac{1}{2}(F_{\\text{crit}} - F)\\eta_0^2 + c\\eta_0^4 + \\ldots$ The coefficient of $\\eta_0^2$ is the control. It is positive below $F_{\\text{crit}}$ (straight is the unique minimum), passes through zero at $F_{\\text{crit}}$, and turns negative above it (the center inverts and two side minima split off). This is exactly the supercritical pitchfork normal form studied in Module 5, with the buckling column as its model example: a single stable state splitting into two at a threshold, and a small lateral force tilting the wells so the column snaps to the lower one without warning.`}
            </p>
          </div>

          <p>
            <strong>The World Trade Center collapse.</strong>
            {` For the WTC columns, the slenderness $\\ell/r_g \\approx 50$, where $r_g$ is the radius of gyration ($r_g^2 = I/A$, a measure of how the cross-section's area spreads from its center). Fire softened the central steel columns, reducing $E$ to a fraction of its room-temperature value. Since $F_{\\text{crit}} \\propto E$, the critical load fell below the load those columns were carrying. Buckling began in the central core. The load transferred to perimeter columns, which then buckled in cascade. WTC 7 failed by progressive buckling of column 79 after fire burned away its floor supports over several hours.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The buckling equation $D\\,d^2\\eta/dx^2 + F\\eta = 0$ looks like a harmonic oscillator. What plays the role of $\\omega^2$?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$F/D$ plays the role of $\\omega^2$: it sets the spatial frequency of the sinusoidal solutions. Boundary conditions at the ends act like "walls" that select discrete allowed values of $k$, exactly as in a quantum particle in a box.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 13: THIN-PLATE REDUCTION
        <>
          <h2>Thin-Plate Reduction: Stress Polishing a Telescope Mirror</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A thin glass plate is pressed from behind into a curved shape. What equation governs the plate's shape?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`The biharmonic equation $\\nabla^2(\\nabla^2\\eta) = P/D$, the 2D generalization of the beam equation.`}
              </p>
            </details>
          </div>

          <p>
            {`Applying the method of moments to the 3D equations for a plate of thickness $h$ gives the `}
            <strong>biharmonic plate equation</strong>
            {`:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\nabla^2(\\nabla^2\\eta) = \\frac{P(\\mathbf{x})}{D}, \\qquad D = \\frac{Eh^3}{12(1-\\nu^2)}$$`}</span>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Multiply the 3D Navier-Cauchy equation by $z$ and integrate across the plate thickness. The $z^2$ integral over the cross-section generates the factor $h^3/12$ and defines the bending torque. This collapses a 3D PDE into a 2D one. The Poisson correction $(1-\\nu^2)$ appears because plate strips are bonded: they cannot contract freely in the transverse direction. This bonding makes the plate stiffer than a free beam by the factor $1/(1-\\nu^2)$.`}
            </p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Beam (1D)</span>
              <p>{`$D = Ewh^3/12$. Free lateral contraction. ODE: $d^4\\eta/dx^4 = W/D$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Plate (2D)</span>
              <p>{`$D = Eh^3/[12(1-\\nu^2)]$. Lateral strains coupled. PDE: $\\nabla^4\\eta = P/D$.`}</p>
            </div>
          </div>

          <p>
            <strong>Keck telescope stress polishing.</strong>
            {` Each hexagonal segment of the Keck primary mirror ($E = 89\\,\\text{GPa}$, $\\nu = 0.24$) is first ground to a sphere. Then you apply stresses of $2.4\\times10^6\\,\\text{N/m}^2$ around the rim to deform the plate while grinding. Remove the stresses, and the plate springs back to the required hyperboloidal shape. The biharmonic equation with prescribed rim boundary conditions gives the deflection $\\eta(\\mathbf{x})$ at every point.`}
          </p>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Reduce the 3D plate to the biharmonic equation by the method of moments. Take a plate in the $x$-$y$ plane, thickness $h$, deflecting by $\\eta(x,y)$.`}</p>
              <ol className="lrn-list">
                <li>{`A fiber at height $z$ above the mid-plane strains by $z\\nabla^2\\eta$, the 2D version of the beam strain $z\\,\\eta''$. Because neighbor strips are bonded, the in-plane stress carries the Poisson factor: $T \\sim \\frac{E}{1-\\nu^2}z\\nabla^2\\eta$.`}</li>
                <li>{`Multiply by the moment arm $z$ and integrate across the thickness. The $z^2$ integral over $-h/2$ to $h/2$ gives $h^3/12$, so the bending torque per unit length is $M = -D\\nabla^2\\eta$ with $D = \\frac{Eh^3}{12(1-\\nu^2)}$.`}</li>
                <li>{`Vertical force balance on a plate element relates the load to the second divergence of this torque: $\\nabla^2 M = -P$. Substituting $M = -D\\nabla^2\\eta$ gives $\\nabla^2(\\nabla^2\\eta) = P/D$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>{`Carry out the $\\int_{-h/2}^{h/2} z^2\\,dz$ integral by hand. Confirm it gives $h^3/12$.`}</li>
                <li>{`State why the bonded-strip constraint divides by $(1-\\nu^2)$ for the plate but not for the free beam.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`For steel ($\\nu \\approx 0.29$) and rubber ($\\nu \\approx 0.5$), compute the stiffening factor $1/(1-\\nu^2)$ and say which material gains more plate stiffness over its beam value.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why does the Keck problem require the biharmonic operator and not just Laplace's equation?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The plate equation is fourth order. The same chain applies as for the beam: displacement to curvature to torque to shear to load. Each step adds one derivative. The biharmonic operator $\\nabla^4 = \\nabla^2\\nabla^2$ is the 2D version of $d^4/dx^4$.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 14: CYLINDRICAL COORDINATES
        <>
          <h2>Connection Coefficients in Curvilinear Coordinates</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`In cylindrical coordinates $(\\varpi, \\phi, z)$, the basis vectors $\\hat{e}_\\varpi$ and $\\hat{e}_\\phi$ rotate as you move around a circle. What goes wrong if you differentiate a tensor without accounting for this rotation?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`A rigid-body rotation would appear to have nonzero strain, a physically wrong result. Connection coefficients subtract exactly the spurious strain due to basis-vector rotation.`}
              </p>
            </details>
          </div>

          <p>{`Connection coefficients capture the turning rate of basis vectors:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\Gamma^i_{\\ jk} = \\hat{e}_i\\cdot(\\nabla_k\\hat{e}_j)$$`}</span>
          </div>

          <p>{`In cylindrical coordinates, the only nonzero connection coefficients are:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\Gamma_{\\varpi\\phi\\phi} = -\\frac{1}{\\varpi}, \\qquad \\Gamma_{\\phi\\varpi\\phi} = \\frac{1}{\\varpi}$$`}</span>
          </div>

          <p>{`The displacement gradient with connection correction:`}</p>

          <div className="lrn-eq">
            <span>{`$$W_{ik} = \\xi_{i;k} = \\xi_{i,k} + \\Gamma_{ijk}\\xi_j$$`}</span>
          </div>

          <p>{`The expansion in cylindrical coordinates:`}</p>

          <div className="lrn-eq">
            <span>{`$$\\Theta = \\frac{1}{\\varpi}\\frac{\\partial(\\varpi\\xi_\\varpi)}{\\partial\\varpi} + \\frac{1}{\\varpi}\\frac{\\partial\\xi_\\phi}{\\partial\\phi} + \\frac{\\partial\\xi_z}{\\partial z}$$`}</span>
          </div>

          <div>
            <CM_LE_BasisVectors />
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Basis vectors in cylindrical coordinates rotate as you move in the $\\phi$ direction. As $\\phi$ increases, $\\hat{e}_\\varpi$ rotates toward $\\hat{e}_\\phi$ at rate $1/\\varpi$ per unit arc length. Differentiating a tensor component without tracking this rotation gives a spurious "strain" from pure rotation. Connection coefficients are exactly that correction: $\\Gamma_{ijk}\\xi_j$ subtracts the part of $\\partial_k\\xi_i$ that comes from basis-vector rotation rather than actual deformation. The same idea generalizes to curved spacetime in General Relativity, where connection coefficients become Christoffel symbols.`}
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`The connection coefficient $\\Gamma_{\\varpi\\phi\\phi} = -1/\\varpi$ in cylindrical coordinates. Where does this come from?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Moving in the $\\phi$ direction at fixed $\\varpi$ rotates the radial basis vector $\\hat{e}_\\varpi$ into $\\hat{e}_\\phi$. The rate of rotation per unit $\\phi$-displacement (arc length $\\varpi\\,d\\phi$) is $1/\\varpi$. So $\\nabla_\\phi\\hat{e}_\\varpi = (1/\\varpi)\\hat{e}_\\phi$, giving $\\Gamma_{\\phi\\varpi\\phi} = 1/\\varpi$ and (by antisymmetry) $\\Gamma_{\\varpi\\phi\\phi} = -1/\\varpi$.`}
              </p>
            </details>
          </div>
        </>,

        // SECTION 15: PRESSURIZED PIPE AND LIGO MIRRORS
        <>
          <h2>Solving Navier-Cauchy in Cylindrical Coordinates</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A pressurized cylindrical pipe has inner radius $\\varpi_1$ and outer radius $\\varpi_2$. Where in the wall is the strain largest?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`At the inner wall ($\\varpi = \\varpi_1$), where both the $A\\varpi$ and $B/\\varpi$ terms in the hoop strain $S_{\\phi\\phi} = A + B/\\varpi^2$ add with the same sign. Hoop strain is the stretching around the circumference, the way a barrel hoop stretches.`}
              </p>
            </details>
          </div>

          <p>
            {`By symmetry, the displacement is purely radial: $\\xi_\\varpi = \\xi_\\varpi(\\varpi)$. With no body force, the radial Navier-Cauchy equation reduces to $d\\Theta/d\\varpi = 0$, so $\\Theta$ is constant. Writing $\\Theta = \\frac{1}{\\varpi}\\frac{d(\\varpi\\xi_\\varpi)}{d\\varpi} = $ const is an Euler equation. Its two independent solutions are $\\xi_\\varpi \\propto \\varpi$ (constant $\\Theta$) and $\\xi_\\varpi \\propto 1/\\varpi$ ($\\Theta = 0$). The general solution is their sum:`}
          </p>

          <div className="lrn-eq lrn-eq-hero">
            <span>{`$$\\xi_\\varpi = A\\varpi + \\frac{B}{\\varpi}$$`}</span>
          </div>

          <p>
            {`Applying boundary conditions ($T_{\\varpi\\varpi}(\\varpi_1) = -P$, $T_{\\varpi\\varpi}(\\varpi_2) = 0$) determines $A$ and $B$. The strain components are:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$S_{\\varpi\\varpi} = A - \\frac{B}{\\varpi^2}, \\qquad S_{\\phi\\phi} = A + \\frac{B}{\\varpi^2}$$`}</span>
          </div>

          <CM_LE_PressurizedPipe />

          <h3>Thermoelastic Noise in LIGO Mirrors</h3>

          <p>
            {`LIGO mirrors have a surface displacement noise limit set by `}
            <strong>thermoelastic noise</strong>
            {`: thermal fluctuations inside the mirror create random expansion fields that couple to surface displacement via the thermoelastic effect.`}
          </p>

          <p>
            {`Here is the mechanism. The laser beam reads the mirror face averaged over a Gaussian spot of radius $\\varpi_0$. Random thermal fluctuations inside the glass create tiny expansion fields that push the surface in and out. Where the expansion varies in space, heat flows down the temperature gradient and energy is lost. The fluctuation-dissipation theorem ties the two together: any process that dissipates energy must also produce random thermal motion at the same rate. Solving the Navier-Cauchy equation in the mirror with a Gaussian surface load and applying that theorem gives the `}
            <strong>thermoelastic noise spectral density</strong>
            {`:`}
          </p>

          <div className="lrn-eq">
            <span>{`$$S_q(f) = \\frac{8(1+\\nu)^2\\kappa\\alpha^2 k_B T^2}{\\sqrt{2\\pi}\\,c_V^2\\rho^2\\varpi_0^3(2\\pi f)^2}$$`}</span>
          </div>

          <p>
            {`In this formula $\\kappa$ is the thermal conductivity (how fast heat flows), $k_B$ is Boltzmann's constant (the size of one thermal energy quantum, $1.38\\times10^{-23}\\,\\text{J/K}$), $\\alpha$ is the thermal expansion coefficient, $T$ is the absolute temperature, and $\\varpi_0$ is the laser beam spot radius on the mirror face.`}
          </p>

          <p>
            {`Three scalings drop out of the formula, and each one has a plain reason. First, $S_q \\propto \\alpha^2$: the noise enters through the thermal expansion coupling, and noise power always goes as the coupling squared. Use a low-expansion material (fused silica over sapphire). Second, $S_q \\propto 1/\\varpi_0^3$: a wider spot averages the random surface motion over a larger sampled volume ($\\varpi_0^2$ in area times a penetration depth that also grows with $\\varpi_0$), so the averaged fluctuation shrinks. Use the largest beam spot the mirror allows. Third, $S_q \\propto 1/f^2$: the theorem gives a roughly flat random force, and turning a force into a displacement divides by $(2\\pi f)^2$, so the noise is worst at low frequency. These three facts drove the Advanced LIGO choice of fused silica mirrors with large beam waists.`}
          </p>
        </>
      ]
    },

    practice: [
      {
        q: `A solid deforms so that every point $\\mathbf{x}$ moves to $\\mathbf{x} + \\boldsymbol{\\xi}(\\mathbf{x})$. What is the displacement gradient tensor $W$, and why is it enough to describe all local deformation?`,
        a: `The displacement gradient is $W_{ij} = \\partial\\xi_i/\\partial x_j$, written abstractly as $W = \\nabla\\boldsymbol{\\xi}$. It is a second-rank tensor field. Near any point, Taylor expansion gives $\\xi_i(\\mathbf{x}) = \\xi_i(\\mathbf{x}_0) + (x_j - x_{0j})W_{ij} + \\ldots$. At first order, the deformation is fully described by $W$: any displacement field that agrees with $\\boldsymbol{\\xi}$ to first order at a point is locally indistinguishable. Nine components capture all nine degrees of freedom of a linear map in 3D. This is exact at the infinitesimal scale, not an approximation.`
      },
      {
        q: `The displacement gradient $W$ has nine components. Break it into irreducible parts. Name each part, give its component count, and state its physical meaning.`,
        a: `$W_{ij} = \\frac{1}{3}\\Theta\\,g_{ij} + R_{ij} + \\Sigma_{ij}$. (1) Expansion $\\Theta = W_{ii}$ (1 component, $l=0$): fractional volume change $\\delta V/V = \\Theta$. (2) Rotation $R_{ij} = \\frac{1}{2}(W_{ij}-W_{ji})$ (3 independent components, $l=1$): rigid-body rotation. Rotation vector $\\boldsymbol{\\phi} = \\frac{1}{2}\\nabla\\times\\boldsymbol{\\xi}$. (3) Shear $\\Sigma_{ij} = \\frac{1}{2}(W_{ij}+W_{ji}) - \\frac{1}{3}\\Theta\\,g_{ij}$ (5 independent components, $l=2$): shape change at constant volume. Count: $1+3+5=9$.`
      },
      {
        q: `Derive the fractional volume change $\\delta V/V = \\Theta$ from Gauss's theorem.`,
        a: `The volume change of a region $V$ equals the net outward displacement of its boundary: $\\delta V = \\int_{\\partial V} d\\boldsymbol{\\Sigma}\\cdot\\boldsymbol{\\xi}$. Apply Gauss's theorem: $\\delta V = \\int_V dV\\,\\nabla\\cdot\\boldsymbol{\\xi}$. For a small region where $\\nabla\\cdot\\boldsymbol{\\xi}$ is approximately constant: $\\delta V = (\\nabla\\cdot\\boldsymbol{\\xi})V$. Therefore $\\delta V/V = \\nabla\\cdot\\boldsymbol{\\xi} = W_{ii} = \\Theta$.`
      },
      {
        q: `Name the four landmark points on a stress-strain curve in order of increasing stress. What changes at each point?`,
        a: `(1) Proportionality limit: below this, stress is exactly proportional to strain and Hooke's law is exact. (2) Elastic limit: above the proportionality limit but below here, the solid is still recoverable but no longer perfectly linear. (3) Yield point: above this, plastic flow begins. Dislocations move irreversibly and removing the stress leaves permanent deformation. (4) Rupture: the material fractures. The elastic limit and yield point differ because the elastic limit marks the boundary of reversibility, while the yield point marks the onset of dislocation-driven plastic flow.`
      },
      {
        q: `Write Hooke's law for an isotropic solid. Identify each term. What physical quantity does each modulus resist?`,
        a: `For an isotropic solid: $\\mathbf{T} = -K\\Theta\\mathbf{g} - 2\\mu\\boldsymbol{\\Sigma}$. Bulk modulus $K$ multiplies $\\Theta$ (fractional volume change): it resists uniform compression or dilation. Shear modulus $\\mu$ multiplies $\\Sigma$ (symmetric trace-free part): it resists shape changes at constant volume. Rotation $R$ appears nowhere: elastic materials are blind to rigid-body rotation. Both $K > 0$ and $\\mu > 0$ are required for mechanical stability.`
      },
      {
        q: `Why is the stress tensor symmetric: $T_{ij} = T_{ji}$? Derive this from angular momentum conservation.`,
        a: `Take an infinitesimal cube of material. The torque on the cube from surface stresses on opposite faces scales as $T_{12} - T_{21}$ times the face area times the moment arm, which is proportional to $\\ell^3$. The moment of inertia scales as $\\ell^5$. The angular acceleration is torque divided by moment of inertia, proportional to $(T_{12}-T_{21})/\\ell^2$. As $\\ell \\to 0$ this diverges unless $T_{12} = T_{21}$. The same argument for all pairs forces $T_{ij} = T_{ji}$.`
      },
      {
        q: `A rubber band is stretched so that its length triples. Its volume barely changes. What can you say about its Poisson's ratio and which moduli dominate?`,
        a: `Near-constant volume under stretching means $K \\gg \\mu$. The Poisson ratio formula $\\nu = (3K-2\\mu)/[2(3K+\\mu)] \\to 1/2$ as $K/\\mu \\to \\infty$. Rubber has $\\nu \\approx 0.5$ (nearly incompressible). Its bulk modulus is large but its shear modulus is tiny. Large strain ($\\Delta\\ell/\\ell \\sim 8$) also puts rubber outside Hooke's linear regime: its elasticity comes from uncoiling polymer chains, not from stretching atomic bonds.`
      },
      {
        q: `Explain the molecular origin of elastic moduli and why the observed elastic limit ($\\sim 10^{-3}$) is much smaller than the naive bond-stretch estimate ($\\sim 1$).`,
        a: `Elastic moduli come from the stiffness of atomic bonds. For an ionic solid with lattice spacing $a \\approx 0.2\\,\\text{nm}$: $K, \\mu \\sim e^2/(4\\pi\\varepsilon_0 a^4) \\approx 100\\,\\text{GPa}$. A naive estimate says bonds break at strain $\\sim 1$. But real materials yield at $\\sim 10^{-3}$ because of dislocations: line defects that move through the lattice under much smaller forces. At any moment, only the few bonds near the dislocation core are being rearranged. The rest of the crystal remains intact. This allows deformation under a force three orders of magnitude smaller than a perfect-lattice estimate.`
      },
      {
        q: `State the Navier-Cauchy equation for elastostatic equilibrium. Identify what each term represents physically.`,
        a: `$(K + \\frac{\\mu}{3})\\nabla(\\nabla\\cdot\\boldsymbol{\\xi}) + \\mu\\nabla^2\\boldsymbol{\\xi} + \\rho\\mathbf{g} = 0$. The first term drives irrotational (compressional) displacement: P-waves. The second term drives solenoidal (shear) displacement: S-waves. The third term is gravity. At equilibrium, elastic restoring forces exactly balance gravity at every point.`
      },
      {
        q: `What is the Euler critical buckling force for a column of width $w$, height $h$, and length $\\ell$ under compression? How does it scale with each dimension?`,
        a: `$F_{\\text{crit}} = \\pi^2 D/\\ell^2 = \\pi^2 wh^3 E/(12\\ell^2)$. Proportional to $E$ (stiffer material buckles at higher load), proportional to $wh^3$ (flexural rigidity), inversely proportional to $\\ell^2$ (longer columns buckle more easily). Doubling the length reduces $F_{\\text{crit}}$ by 4. Doubling the height $h$ in the bending direction increases $F_{\\text{crit}}$ by 8. Higher modes occur at $F = n^2 F_{\\text{crit}}$.`
      },
      {
        q: `A building column buckles when fire heats it. The column has slenderness $\\ell/r_g = 50$ and initial $E = 200\\,\\text{GPa}$. Fire reduces $E$ to 20 GPa. What happens to $F_{\\text{crit}}$?`,
        a: `$F_{\\text{crit}} = \\pi^2 E A/(\\ell/r_g)^2$. Since $E$ drops by a factor of 10, $F_{\\text{crit}}$ drops by a factor of 10. If the column was carrying 90% of its original $F_{\\text{crit}}$, the reduced $F_{\\text{crit}}$ is now below the carried load and buckling begins. Once one column buckles, adjacent columns carry extra load. Their $F_{\\text{crit}}$ may also be reduced by fire. Progressive buckling follows. This is the mechanism behind the WTC 7 collapse: fire burned away the floor supports of column 79, and the unbraced column buckled.`
      },
      {
        q: `State the boundary condition on the stress tensor at any interface between two materials. Derive it.`,
        a: `The traction $T_{ij}n_j$ must be continuous: $[\\mathbf{T}\\cdot\\hat{\\mathbf{n}}]^+ = [\\mathbf{T}\\cdot\\hat{\\mathbf{n}}]^-$. Derivation: integrate $\\nabla\\cdot\\mathbf{T} = 0$ over a thin pillbox straddling the interface. Apply Gauss's theorem. The side contributions vanish as thickness goes to zero. The top and bottom face contributions give $\\mathbf{T}^+\\cdot\\hat{\\mathbf{n}} - \\mathbf{T}^-\\cdot\\hat{\\mathbf{n}} = 0$. At a free surface: $\\mathbf{T}\\cdot\\hat{\\mathbf{n}} = 0$.`
      },
      {
        q: `The elastic energy density is $U = \\frac{1}{2}K\\Theta^2 + \\mu\\Sigma_{ij}\\Sigma_{ij}$. Why does the rotation tensor $R$ not appear?`,
        a: `Elastic materials resist stretching and compressing bonds, but rotation moves the whole material rigidly without changing any bond lengths. Hooke's law $\\mathbf{T} = -K\\Theta\\mathbf{g} - 2\\mu\\boldsymbol{\\Sigma}$ contains no $R$ term. Stress vanishes when $\\Theta = 0$ and $\\Sigma = 0$ regardless of $R$. Since $U = -\\frac{1}{2}T_{ij}\\xi_{i;j}$, and $T_{ij}$ depends only on $\\Theta$ and $\\Sigma$, contracting $T_{ij}$ with the antisymmetric $R_{ij}$ gives zero.`
      },
      {
        q: `A constrained steel rod ($K \\approx 170\\,\\text{GPa}$, $\\alpha \\approx 10^{-5}\\,\\text{K}^{-1}$) heats by $\\delta T = 50\\,\\text{K}$. Compute the thermal stress. Does the rod push or pull on its supports?`,
        a: `A constrained rod cannot expand, so $\\Theta = 0$. The thermoelastic stress is $T = -K(0 - 3\\alpha\\,\\delta T) = 3K\\alpha\\,\\delta T$. Substituting: $T = 3 \\times 170 \\times 10^9 \\times 10^{-5} \\times 50 \\approx 2.6\\times10^8\\,\\text{Pa} = 260\\,\\text{MPa}$. This is a compressive stress: the rod pushes outward on its supports, because it wants to expand but cannot. This is why bridge expansion joints exist.`
      },
      {
        q: `Predict: a rod is pulled along its length. How does the diameter change, and why?`,
        a: `The diameter decreases. Pulling along $z$ creates longitudinal strain $\\xi_{z;z} > 0$. The free transverse surfaces impose no constraint in $x$ and $y$. From 3D Hooke's law, transverse strains are $\\xi_{x;x} = \\xi_{y;y} = -\\nu\\xi_{z;z}$ where $\\nu = (3K-2\\mu)/[2(3K+\\mu)] > 0$ for most materials. Negative transverse strain means the rod gets thinner.`
      },
      {
        q: `Derive Young's modulus $E = 9\\mu K/(3K+\\mu)$ from the 3D elastostatic equations for a thin rod.`,
        a: `A thin rod along $z$ with only $T_{zz}$ nonzero. From Hooke's law: $T_{xx} = 0 \\Rightarrow K\\Theta = -2\\mu\\Sigma_{xx}$. By symmetry $\\Sigma_{xx} = \\Sigma_{yy}$, and trace-free gives $\\Sigma_{zz} = -2\\Sigma_{xx}$. So $K\\Theta = \\mu\\Sigma_{zz}$. Also $\\Sigma_{zz} = \\xi_{z;z} - \\Theta/3$, giving $(K+\\mu/3)\\Theta = \\mu\\xi_{z;z}$. The longitudinal stress $T_{zz} = -(K-2\\mu/3)\\Theta - 2\\mu\\xi_{z;z}$. Substituting $\\Theta$: $T_{zz} = -\\xi_{z;z}[9\\mu K/(3K+\\mu)]$. So $E = -T_{zz}/\\xi_{z;z} = 9\\mu K/(3K+\\mu)$.`
      },
      {
        q: `A cantilever beam of length $\\ell$, width $w$, and thickness $h$ carries its own weight. Write the shape $\\eta(x)$ and tip sag. If $h$ doubles, what happens to the tip sag?`,
        a: `Shape: $\\eta(x) = \\frac{W}{D}\\left(\\frac{\\ell^2 x^2}{4} - \\frac{\\ell x^3}{6} + \\frac{x^4}{24}\\right)$. Tip sag: $\\eta(\\ell) = W\\ell^4/(8D)$. Flexural rigidity $D = Ewh^3/12$. If $h$ doubles: $D \\to 8D$ (scales as $h^3$), but $W = \\rho g wh\\ell$ also doubles. Net: $\\eta \\propto W/D \\propto h/h^3 = 1/h^2$. Doubling $h$ reduces tip sag by a factor of 4.`
      },
      {
        q: `What is the Euler-Bernoulli beam equation? How is it derived from the 3D Navier-Cauchy equations?`,
        a: `$d^4\\eta/dx^4 = W/D$, where $W$ is weight per unit length and $D = Ewh^3/12$ is the flexural rigidity. Derivation: apply the method of moments to 3D Navier-Cauchy. Multiply the horizontal force balance by $z$ and integrate over the cross-section. This gives $dS/dx = -W$ (vertical force balance). Express $S = -D\\,d^3\\eta/dx^3$ and $M = -D\\,d^2\\eta/dx^2$ from the first moment of stress. Combining $S = dM/dx$ and $dS/dx = -W$ gives the beam equation.`
      },
      {
        q: `Describe the pitchfork bifurcation in beam buckling using the free-energy landscape. What changes in the landscape as $F$ passes through $F_{\\text{crit}}$?`,
        a: `The free energy is elastic energy minus work done by $F$. For $F < F_{\\text{crit}}$: single minimum at $\\eta_0 = 0$ (straight is the unique stable equilibrium). At $F = F_{\\text{crit}}$: the curvature at $\\eta_0 = 0$ becomes zero. For $F > F_{\\text{crit}}$: the minimum at $\\eta_0 = 0$ inverts to a local maximum (straight is unstable) and two new minima appear at $\\pm\\eta_0^*$ (arched states). The landscape transitions from a single well to an inverted center with two side wells.`
      },
      {
        q: `What is the 2D flexural rigidity for a thin plate? How does it differ from the 1D beam flexural rigidity, and why?`,
        a: `Plate: $D = Eh^3/[12(1-\\nu^2)]$. Beam (per unit width): $Eh^3/12$. The plate rigidity exceeds the beam rigidity by $1/(1-\\nu^2)$. Reason: in a plate, adjacent strips are bonded and cannot contract freely in the transverse direction. This extra constraint stiffens the plate. For steel ($\\nu \\approx 0.29$): $(1-\\nu^2) \\approx 0.92$, a 9% effect. For rubber ($\\nu \\approx 0.5$): $(1-\\nu^2) = 0.75$, a 33% stiffening.`
      },
      {
        q: `Write the biharmonic equation for thin-plate deflection. What physical interpretation do the four orders of differentiation have?`,
        a: `$\\nabla^2(\\nabla^2\\eta) = P(\\mathbf{x})/D$. The four orders correspond to: $\\eta$ (deflection) to $-\\nabla^2\\eta$ (curvature, bending torque per $D$) to $-D\\nabla^2\\eta$ (bending torque) to the divergence of shear force to applied pressure $P$. The biharmonic operator is the 2D analog of $d^4/dx^4$ in beam theory.`
      },
      {
        q: `The connection coefficient $\\Gamma_{\\varpi\\phi\\phi} = -1/\\varpi$ in cylindrical coordinates. Where does this come from, and what goes wrong in the displacement gradient if you ignore it?`,
        a: `Moving in the $\\phi$ direction at fixed $\\varpi$ rotates the radial basis vector $\\hat{e}_\\varpi$ at rate $1/\\varpi$ per unit $\\phi$-displacement. So $\\nabla_\\phi\\hat{e}_\\varpi = (1/\\varpi)\\hat{e}_\\phi$, giving $\\Gamma_{\\phi\\varpi\\phi} = 1/\\varpi$ and $\\Gamma_{\\varpi\\phi\\phi} = -1/\\varpi$. If you ignore the connection in $W_{ik} = \\xi_{i,k} + \\Gamma_{ijk}\\xi_j$, a purely rotating flow would appear to have nonzero $\\Sigma_{\\varpi\\phi}$ components, spurious strain from a rigid-body rotation.`
      },
      {
        q: `The general solution for radial displacement in a pressurized pipe is $\\xi_\\varpi = A\\varpi + B/\\varpi$. What does each term represent physically?`,
        a: `The $A\\varpi$ term represents uniform expansion: every point moves outward proportionally to its radius, with constant expansion $\\Theta = 2A$ throughout the wall. The $B/\\varpi$ term decays with radius and is concentrated near the inner wall. At the inner wall, both terms add to give maximum radial displacement. The hoop strain $S_{\\phi\\phi} = A + B/\\varpi^2$ is also largest at the inner wall.`
      },
      {
        q: `A cylindrical mirror is under thermoelastic noise dominated by sapphire's high thermal expansion. Engineers switch to fused silica. How does the noise spectral density $S_q(f)$ change? Use the scaling $S_q \\propto \\alpha^2$.`,
        a: `The noise ratio is $S_q^{\\text{silica}}/S_q^{\\text{sapphire}} = (\\alpha_{\\text{silica}}/\\alpha_{\\text{sapphire}})^2$. Fused silica has a much smaller coefficient of thermal expansion than sapphire. Since $S_q \\propto \\alpha^2$, a material with half the thermal expansion gives one-quarter the noise spectral density. This advantage drove the decision to use fused silica mirrors in Advanced LIGO.`
      },
      {
        q: `Predict: if you increase the laser beam waist $\\varpi_0$ in a LIGO mirror (larger beam spot), does thermoelastic noise increase or decrease?`,
        a: `Decreases. The noise spectral density is $S_q(f) \\propto 1/\\varpi_0^3$. A larger beam spot averages the random surface displacement over a larger area. The thermal fluctuations at different points are partially independent, so averaging over a larger area gives smaller relative fluctuations. Advanced LIGO uses the largest beam spot the mirror can accommodate.`
      },
      {
        q: `State the relation between all four elastic moduli $E$, $\\nu$, $K$, $\\mu$ for an isotropic solid.`,
        a: `$E = \\frac{9\\mu K}{3K+\\mu}$, $\\nu = \\frac{3K-2\\mu}{2(3K+\\mu)}$, $K = \\frac{E}{3(1-2\\nu)}$, $\\mu = \\frac{E}{2(1+\\nu)}$. Any two of the four determine the other two. $K$ and $\\mu$ are the fundamental moduli (direct response to volume change and shape change). $E$ and $\\nu$ are the experimentally convenient moduli for 1D tests. The Lamé coefficient $\\lambda = K - \\frac{2}{3}\\mu$ appears in the alternative form $T_{ij} = -\\lambda\\Theta\\delta_{ij} - 2\\mu S_{ij}$.`
      },
      {
        q: `A beam's cross-section is a rectangle $w \\times h$ with $h$ in the bending direction. An installer rotates it 90 degrees. If $w = 3h$ originally, by what factor does tip sag change?`,
        a: `Flexural rigidity $D = Ewh^3/12$. Original: $D_1 = E(3h)h^3/12 = 3Eh^4/12$. After rotating: $D_2 = Eh(3h)^3/12 = 27Eh^4/12$. Tip sag $\\eta(\\ell) = W\\ell^4/(8D)$, so sag changes by factor $D_2/D_1 = 27/3 = 9$. Rotating with the wide side vertical (stiff orientation) gives 9 times less sag. The general factor is $(w/h)^2$ for any $w/h$ ratio.`
      },
      {
        q: `Predict: two beams with the same material and cross-section but lengths $\\ell$ and $2\\ell$ are clamped at one end under the same weight per unit length $W$. By what factor does the tip sag differ?`,
        a: `Tip sag $\\eta(\\ell) = W\\ell^4/(8D)$. For the longer beam: $\\eta(2\\ell) = W(2\\ell)^4/(8D) = 16\\eta(\\ell)$. The tip sag is 16 times larger. This $\\ell^4$ scaling is very steep: doubling the span multiplies deflection by 16. This is why long beams need much greater depth to keep sag acceptable.`
      },
      {
        q: `From the Keck telescope stress polishing problem: $E = 89\\,\\text{GPa}$ and $\\nu = 0.24$. Compute $K$, $\\mu$, and the plate-to-beam flexural rigidity ratio.`,
        a: `$K = E/[3(1-2\\nu)] = 89/[3\\times0.52] = 57\\,\\text{GPa}$. $\\mu = E/[2(1+\\nu)] = 89/2.48 = 35.9\\,\\text{GPa}$. The plate-to-beam ratio: $D_{\\text{plate}}/D_{\\text{beam}} = 1/(1-\\nu^2) = 1/(1-0.0576) \\approx 1.061$. So the plate is about 6% stiffer than an equivalent beam for this material.`
      },
      {
        q: `What is thermoelastic noise in a mirror, and why does it scale as $1/f^2$?`,
        a: `Thermoelastic noise arises because thermal fluctuations create tiny random expansion fields $\\Theta(\\mathbf{x},t)$ inside the mirror. Where $\\Theta$ varies spatially, temperature gradients form and heat flows. This flow is dissipation. By the fluctuation-dissipation theorem, dissipation at frequency $f$ is accompanied by random noise at that frequency. The $1/f^2$ factor appears because displacement noise is related to force noise by $(2\\pi f)^2$ (force = mass times acceleration).`
      },
      {
        q: `Verify that the strain tensor $S_{ij} = \\frac{1}{2}(\\xi_{i;j}+\\xi_{j;i})$ equals $\\Sigma_{ij} + \\frac{1}{3}\\Theta g_{ij}$.`,
        a: `$S_{ij} = \\frac{1}{2}(W_{ij}+W_{ji})$ (symmetric part of $W$). Write $W_{ij} = \\frac{1}{3}\\Theta g_{ij} + R_{ij} + \\Sigma_{ij}$. The symmetric part of $\\frac{1}{3}\\Theta g_{ij}$ is itself (since $g$ is symmetric). The symmetric part of $R_{ij}$ is zero (antisymmetric tensor). The symmetric part of $\\Sigma_{ij}$ is itself (symmetric by definition). So $S_{ij} = \\frac{1}{3}\\Theta g_{ij} + \\Sigma_{ij}$. Rotation $R$ drops out of the strain, and hence out of all elastic forces.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Linear Elasticity',
      sections: [
        <>
          <h2>Displacement and Strain</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Displacement gradient tensor</div>
            <div className="ref-formula-eq">{`$$W_{ij} = \\partial\\xi_i/\\partial x_j = \\nabla\\boldsymbol{\\xi}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> define local deformation at any point via Taylor
              expansion.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Irreducible decomposition of W</div>
            <div className="ref-formula-eq">{`$$W_{ij} = \\frac{1}{3}\\Theta\\,g_{ij} + R_{ij} + \\Sigma_{ij}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> separate volume change, rotation, and shape change for
              any deformation.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Expansion scalar</div>
            <div className="ref-formula-eq">{`$$\\Theta = W_{ii} = \\nabla\\cdot\\boldsymbol{\\xi}, \\qquad \\delta V/V = \\Theta$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> compute fractional volume change.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Shear tensor</div>
            <div className="ref-formula-eq">{`$$\\Sigma_{ij} = \\tfrac{1}{2}(W_{ij}+W_{ji}) - \\tfrac{1}{3}\\Theta\\,g_{ij}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> compute the shape-changing (isochoric) part of
              deformation.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Strain tensor</div>
            <div className="ref-formula-eq">{`$$S_{ij} = \\tfrac{1}{2}(\\xi_{i;j}+\\xi_{j;i}) = \\Sigma_{ij} + \\tfrac{1}{3}\\Theta\\,g_{ij}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> the full elastic input to Hooke's law; combines
              expansion and shear, excludes rotation.
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Part</th>
                <th>Symbol</th>
                <th>Components</th>
                <th>Physical meaning</th>
                <th>Costs elastic energy?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Expansion</td>
                <td>{`$\\Theta$`}</td>
                <td>1</td>
                <td>fractional volume change</td>
                <td>YES (bulk modulus K)</td>
              </tr>
              <tr>
                <td>Rotation</td>
                <td>{`$R_{ij}$`}</td>
                <td>3</td>
                <td>rigid-body rotation</td>
                <td>NO</td>
              </tr>
              <tr>
                <td>Shear</td>
                <td>{`$\\Sigma_{ij}$`}</td>
                <td>5</td>
                <td>shape change, constant volume</td>
                <td>YES (shear modulus mu)</td>
              </tr>
              <tr>
                <td>Total W</td>
                <td>{`$W_{ij}$`}</td>
                <td>9</td>
                <td>full local deformation</td>
                <td>partial</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>System</th>
                <th>Strain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Engineering loads</td>
                <td>{`$\\sim 10^{-3}$`}</td>
              </tr>
              <tr>
                <td>Yield limit (steel)</td>
                <td>{`$\\sim 10^{-3}$`}</td>
              </tr>
              <tr>
                <td>Continental drift (VLBI)</td>
                <td>{`$\\sim 10^{-8}\\,\\text{yr}^{-1}$`}</td>
              </tr>
              <tr>
                <td>LIGO gravitational wave</td>
                <td>{`$\\sim 10^{-22}$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Stress and Elastic Moduli</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Stress tensor</div>
            <div className="ref-formula-eq">{`$$dF_i = T_{ij}\\,d\\Sigma_j$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> find force per unit area across any surface inside a
              solid.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Isotropic Hooke's law</div>
            <div className="ref-formula-eq">{`$$\\mathbf{T} = -K\\Theta\\mathbf{g} - 2\\mu\\boldsymbol{\\Sigma}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong>
              {` isotropic solid; requires only bulk $K$ and shear $\\mu$ moduli.`}
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Hooke's law (Lamé form)</div>
            <div className="ref-formula-eq">{`$$T_{ij} = -\\lambda\\Theta\\delta_{ij} - 2\\mu S_{ij}, \\qquad \\lambda = K - \\tfrac{2}{3}\\mu$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong>
              {` alternative to bulk/shear form; Lamé coefficient $\\lambda$ combines $K$ and $\\mu$ and is common in seismology.`}
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Elastic energy density</div>
            <div className="ref-formula-eq">{`$$U = \\tfrac{1}{2}K\\Theta^2 + \\mu\\Sigma_{ij}\\Sigma_{ij}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> compute stored elastic energy; rotation contributes
              nothing.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Thermoelastic stress</div>
            <div className="ref-formula-eq">{`$$T_{ij} = -K(\\Theta-3\\alpha\\,\\delta T)\\delta_{ij} - 2\\mu\\Sigma_{ij}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong>
              {` stress field when temperature deviates from reference by $\\delta T$.`}
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Adiabatic temperature change</div>
            <div className="ref-formula-eq">{`$$\\Delta T/T = -3\\alpha K\\Delta\\Theta/(\\rho c_V)$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> temperature change during adiabatic expansion or
              compression.
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Material</th>
                <th>E (GPa)</th>
                <th>K (GPa)</th>
                <th>mu (GPa)</th>
                <th>nu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbon nanotube</td>
                <td>{`$\\sim 1000$`}</td>
                <td>n/a</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td>Steel</td>
                <td>{`$\\sim 200$`}</td>
                <td>{`$\\sim 170$`}</td>
                <td>{`$\\sim 80$`}</td>
                <td>{`$\\sim 0.29$`}</td>
              </tr>
              <tr>
                <td>Copper</td>
                <td>{`$\\sim 120$`}</td>
                <td>{`$\\sim 140$`}</td>
                <td>{`$\\sim 45$`}</td>
                <td>{`$\\sim 0.34$`}</td>
              </tr>
              <tr>
                <td>Glass</td>
                <td>{`$\\sim 70$`}</td>
                <td>{`$\\sim 40$`}</td>
                <td>{`$\\sim 28$`}</td>
                <td>{`$\\sim 0.23$`}</td>
              </tr>
              <tr>
                <td>Rubber</td>
                <td>{`$\\sim 0.001$`}</td>
                <td>n/a</td>
                <td>n/a</td>
                <td>{`$\\approx 0.5$`}</td>
              </tr>
              <tr>
                <td>Keck glass ceramic</td>
                <td>89</td>
                <td>57</td>
                <td>36</td>
                <td>0.24</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Equilibrium and Moduli</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Navier-Cauchy equation</div>
            <div className="ref-formula-eq">{`$$(K+\\tfrac{\\mu}{3})\\nabla(\\nabla\\cdot\\boldsymbol{\\xi}) + \\mu\\nabla^2\\boldsymbol{\\xi} + \\rho\\mathbf{g} = 0$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> find displacement field inside a solid in static
              equilibrium.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Young's modulus from K and mu</div>
            <div className="ref-formula-eq">{`$$E = \\frac{9\\mu K}{3K+\\mu}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> convert fundamental moduli to experimentally measured 1D
              stiffness.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Poisson's ratio</div>
            <div className="ref-formula-eq">{`$$\\nu = \\frac{3K-2\\mu}{2(3K+\\mu)} = -\\frac{\\xi_{x;x}}{\\xi_{z;z}}, \\qquad -1 < \\nu < \\tfrac{1}{2}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> relate transverse contraction to longitudinal extension;
              stability bounds.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Inverse modulus relations</div>
            <div className="ref-formula-eq">{`$$K = \\frac{E}{3(1-2\\nu)}, \\qquad \\mu = \\frac{E}{2(1+\\nu)}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> convert E, nu to K, mu for 3D calculations.
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Condition</th>
                <th>Implication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\mu > 0$`}</td>
                <td>{`$\\nu > -1$`}</td>
              </tr>
              <tr>
                <td>{`$K > 0$`}</td>
                <td>{`$\\nu < 1/2$`}</td>
              </tr>
              <tr>
                <td>{`$\\nu \\to 1/2$`}</td>
                <td>incompressible (rubber)</td>
              </tr>
              <tr>
                <td>{`$\\nu < 0$`}</td>
                <td>auxetic (expands sideways when compressed)</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>Beam Bending and Buckling</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Flexural rigidity (beam)</div>
            <div className="ref-formula-eq">{`$$D = \\frac{Ewh^3}{12}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong>
              {` bending stiffness of a rectangular cross-section; scales as $h^3$.`}
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Euler-Bernoulli beam equation</div>
            <div className="ref-formula-eq">{`$$\\frac{d^4\\eta}{dx^4} = \\frac{W}{D}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> shape eta(x) of a beam under distributed load W per unit
              length.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Cantilever tip sag</div>
            <div className="ref-formula-eq">{`$$\\eta(\\ell) = \\frac{W\\ell^4}{8D}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong>
              {` maximum deflection at the free end; sag scales as $\\ell^4$.`}
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Euler critical force</div>
            <div className="ref-formula-eq">{`$$F_{\\text{crit}} = \\frac{\\pi^2 D}{\\ell^2} = \\frac{\\pi^2 wh^3 E}{12\\ell^2}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> critical compressive load above which a column buckles.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Plate flexural rigidity</div>
            <div className="ref-formula-eq">{`$$D = \\frac{Eh^3}{12(1-\\nu^2)}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong>
              {` bending stiffness of a thin plate; larger than beam D by $1/(1-\\nu^2)$.`}
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Biharmonic plate equation</div>
            <div className="ref-formula-eq">{`$$\\nabla^2(\\nabla^2\\eta) = \\frac{P(\\mathbf{x})}{D}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> deflection eta(x) of a thin plate under distributed
              pressure.
            </div>
          </div>
        </>,

        <>
          <h2>Cylindrical Coordinates and LIGO Noise</h2>

          <div className="ref-formula">
            <div className="ref-formula-name">Cylindrical connection coefficients</div>
            <div className="ref-formula-eq">{`$$\\Gamma_{\\varpi\\phi\\phi} = -1/\\varpi, \\qquad \\Gamma_{\\phi\\varpi\\phi} = 1/\\varpi$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> tensor derivatives in cylindrical coordinates (varpi,
              phi, z).
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Expansion in cylindrical coordinates</div>
            <div className="ref-formula-eq">{`$$\\Theta = \\frac{1}{\\varpi}\\frac{\\partial(\\varpi\\xi_\\varpi)}{\\partial\\varpi} + \\frac{1}{\\varpi}\\frac{\\partial\\xi_\\phi}{\\partial\\phi} + \\frac{\\partial\\xi_z}{\\partial z}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> divergence of displacement in cylindrical coordinates.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Pressurized pipe solution</div>
            <div className="ref-formula-eq">{`$$\\xi_\\varpi = A\\varpi + B/\\varpi, \\qquad S_{\\phi\\phi} = A + B/\\varpi^2$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong> radial displacement and hoop strain in pipe wall; hoop
              strain largest at inner wall.
            </div>
          </div>

          <div className="ref-formula">
            <div className="ref-formula-name">Thermoelastic noise spectral density</div>
            <div className="ref-formula-eq">{`$$S_q(f) = \\frac{8(1+\\nu)^2\\kappa\\alpha^2 k_B T^2}{\\sqrt{2\\pi}\\,c_V^2\\rho^2\\varpi_0^3(2\\pi f)^2}$$`}</div>
            <div className="ref-formula-desc">
              <strong>When to use:</strong>
              {` surface displacement noise in a mirror. Scales as $\\alpha^2$, $1/\\varpi_0^3$, $1/f^2$.`}
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Scaling</th>
                <th>Design implication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thermal expansion alpha</td>
                <td>{`$S_q \\propto \\alpha^2$`}</td>
                <td>Use low-alpha material (fused silica over sapphire)</td>
              </tr>
              <tr>
                <td>Beam waist</td>
                <td>{`$S_q \\propto 1/\\varpi_0^3$`}</td>
                <td>Use largest beam spot the mirror allows</td>
              </tr>
              <tr>
                <td>Frequency f</td>
                <td>{`$S_q \\propto 1/f^2$`}</td>
                <td>Noise worse at low frequency</td>
              </tr>
              <tr>
                <td>Temperature T</td>
                <td>{`$S_q \\propto T^2$`}</td>
                <td>Cool mirror if possible</td>
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
