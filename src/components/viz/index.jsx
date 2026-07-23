import React from 'react'
import { VizFigure } from '../viz-figure'
import * as am from './arithmetic'
import * as cm from './classical-mechanics'
import * as ilpr from './part-iii-inline-lpr'
import * as ihan from './part-iii-inline-han'
import * as idbc from './part-iii-inline-dbc'
import * as al from './algebra'
import * as it from './information-theory'
import * as chem from './chemistry'
import * as bI from './books/fantasy/Science Fantasy/the-shadow-of-the-torturer'
import * as bII from './books/fantasy/Science Fantasy/the-claw-of-the-conciliator'
import * as bIII from './books/fantasy/Science Fantasy/the-sword-of-the-lictor'
import * as bIV from './books/fantasy/Science Fantasy/the-citadel-of-the-autarch'
import * as bio from './books/biography/Founders & Builders/augustus-the-biography'
import * as tpmI from './films/star-wars/the-phantom-menace'
import * as enr from './mathematics/arithmetic/estimation-and-rounding/estimation-and-rounding'
import * as dplA from './mathematics/arithmetic/discount-profit-loss/discount-profit-loss'
import * as scI from './mathematics/arithmetic/simple-and-compound-interest/simple-and-compound-interest'
import * as gda from './mathematics/arithmetic/growth-depreciation-applied-tax/growth-depreciation-applied-tax'
import * as ags from './mathematics/arithmetic/arithmetic-and-geometric-sequences/arithmetic-and-geometric-sequences'
import * as nsp from './mathematics/arithmetic/number-sequences-and-patterns/number-sequences-and-patterns'
import * as ili from './mathematics/arithmetic/index-notation-and-laws-of-integral-indices/index-notation-and-laws-of-integral-indices'
import * as scR from './mathematics/arithmetic/squares-cubes-square-roots-cube-roots/squares-cubes-square-roots-cube-roots'
import * as inr from './mathematics/arithmetic/irrational-numbers-and-the-real-number-system/irrational-numbers-and-the-real-number-system'
import * as rnl from './mathematics/arithmetic/real-numbers-on-the-number-line/real-numbers-on-the-number-line'
import * as sqs from './mathematics/arithmetic/simple-quadratic-surds/simple-quadratic-surds'
import * as pcc from './mathematics/arithmetic/percentages-concept-and-conversions/percentages-concept-and-conversions'
import * as poq from './mathematics/arithmetic/percentage-of-a-quantity/percentage-of-a-quantity'
import * as pid from './mathematics/arithmetic/percentage-increase-and-decrease/percentage-increase-and-decrease'
import * as rat from './mathematics/arithmetic/ratio/ratio'
import * as dip from './mathematics/arithmetic/direct-and-inverse-proportion/direct-and-inverse-proportion'
import * as rsa from './mathematics/arithmetic/rate-speed-average-speed/rate-speed-average-speed'
import * as ms from './mathematics/arithmetic/map-scales/map-scales'
import * as oav from './mathematics/arithmetic/opposite-numbers-and-absolute-value/opposite-numbers-and-absolute-value'
import * as osr from './mathematics/arithmetic/operations-on-signed-rationals/operations-on-signed-rationals'
import * as asf from './mathematics/arithmetic/approximation-significant-figures-and-decimal-places/approximation-significant-figures-and-decimal-places'
import * as ian from './mathematics/arithmetic/integers-and-negative-numbers/integers-and-negative-numbers'
import * as hcl from './mathematics/arithmetic/hcf-and-lcm/hcf-and-lcm'
import * as oen from './mathematics/arithmetic/odd-and-even-numbers/odd-and-even-numbers'

// One frame factory replaces the ~596 hand-written VizFigure wrapper blocks below.
// wrap(Component, opts) === props => <VizFigure {...opts}><Component {...props} /></VizFigure>
const wrap = (Comp, opts) => {
  const Wrapped = props => (
    <VizFigure {...opts}>
      <Comp {...props} />
    </VizFigure>
  )
  Wrapped.displayName = opts.id || Comp.displayName || Comp.name
  return Wrapped
}

// ARITHMETIC

// FRACTION OPERATIONS

// RATIONAL NUMBERS
export const MirrorReflectionDiagram = wrap(am.MirrorReflectionDiagram, {
  aspect: 'auto',
  title: 'Mirror Reflection'
})
export const TwoSidedNumberLine = wrap(am.TwoSidedNumberLine, {
  aspect: 'auto',
  title: 'Two-Sided Number Line'
})
export const VectorAdditionDiagram = wrap(am.VectorAdditionDiagram, {
  aspect: 'auto',
  title: 'Vector Addition'
})
export const InequalityFlipDiagram = wrap(am.InequalityFlipDiagram, {
  aspect: 'auto',
  title: 'Inequality Flip'
})
export const AbsoluteValueDiagram = wrap(am.AbsoluteValueDiagram, {
  aspect: 'auto',
  title: 'Absolute Value'
})

// PLACE VALUE AND ALGORITHMS
export const PlaceValueNumberLine = wrap(am.PlaceValueNumberLine, {
  aspect: 'auto',
  title: 'Place Value Number Line'
})
export const WholeDistributiveLawArea = wrap(am.WholeDistributiveLawArea, {
  aspect: 'auto',
  title: 'Distributive Law Area'
})
export const AdditionCarryVis = wrap(am.AdditionCarryVis, {
  aspect: 'auto',
  title: 'Addition with Carry'
})
export const SubtractionTradingVis = wrap(am.SubtractionTradingVis, {
  aspect: 'auto',
  title: 'Subtraction by Trading'
})
export const WholeMultiplicationArea = wrap(am.WholeMultiplicationArea, {
  aspect: 'auto',
  title: 'Multiplication Area Model'
})
export const LongDivisionStepVis = wrap(am.LongDivisionStepVis, {
  aspect: 'auto',
  title: 'Long Division Steps'
})

// Number theory viz (08.1.x) moved inline into
// src/features/explore/mathematics/arithmetic/number-theory.jsx.

// Decimal-fundamentals viz (09.1.x) moved inline into
// src/features/explore/mathematics/arithmetic/decimal-fundamentals.jsx.

// Infinite-and-repeating-decimals viz (10.1.x) moved inline into
// src/features/explore/mathematics/arithmetic/infinite-and-repeating-decimals.jsx.

// Decimal-expansion-proofs viz (11.1.x) moved inline into
// src/features/explore/mathematics/arithmetic/decimal-expansion-proofs.jsx.

// CLASSICAL MECHANICS

// Vectors-Kinematics-and-Galilean-Structure viz (01.1.x + 01.11.1–3) moved inline
// into src/features/explore/physics/classical-mechanics/part-i-newtonian-mechanics/
// vectors-kinematics-and-galilean-structure.jsx.

export const ViscousDecay = wrap(cm.ViscousDecay, {
  aspect: 'auto',
  size: 'body',
  title: 'Viscous Decay'
})
export const SHM = wrap(cm.SHM, { aspect: 'auto', title: 'Simple Harmonic Motion' })
export const HarmonicPhasePortrait = wrap(cm.HarmonicPhasePortrait, {
  aspect: 'auto',
  title: 'Harmonic Phase Portrait'
})
export const Lissajous = wrap(cm.Lissajous, { aspect: 'auto', title: 'Lissajous' })
export const ShellTheoremForce = wrap(cm.ShellTheoremForce, {
  aspect: 'auto',
  title: 'Shell Theorem Force'
})
export const MomentumAddition = wrap(cm.MomentumAddition, {
  aspect: 'auto',
  title: 'Momentum Addition'
})
export const CMTwo = wrap(cm.CMTwo, { aspect: 'auto', title: 'CM · Two Particles' })
export const CMRod = wrap(cm.CMRod, { aspect: 'auto', title: 'CM · Non-Uniform Rod' })
export const CMTriangle = wrap(cm.CMTriangle, { aspect: 'auto', title: 'CM · Triangle (centroid)' })
export const BatonCMParabola = wrap(cm.BatonCMParabola, {
  aspect: 'auto',
  title: "CM Parabola · Drum Major's Baton"
})
export const SpringGunRecoil = wrap(cm.SpringGunRecoil, {
  aspect: 'auto',
  title: 'Spring Gun Recoil'
})

// MATHEMATICS · ESTIMATION AND ROUNDING
// Each viz function self-wraps in <VizFigure>; bare re-exports here.
export const AbsoluteVsRelativeError = enr.AbsoluteVsRelativeError
export const MomentumFlux = wrap(cm.MomentumFlux, { aspect: 'auto', title: 'Momentum Flux Stream' })
export const EnergyDiagram = wrap(cm.EnergyDiagram, { aspect: 'auto', title: 'Energy Diagram' })
export const ConservativeLoop = wrap(cm.ConservativeLoop, {
  aspect: 'auto',
  title: 'Closed Loop · ∮F·dl = 0 (conservative central field)'
})
export const GradLevelCurves = wrap(cm.GradLevelCurves, {
  aspect: 'auto',
  title: 'Gradient ⊥ Level Curves (U = x² + ¼y² ellipses)'
})
export const PotentialWellOsc = wrap(cm.PotentialWellOsc, {
  aspect: 'auto',
  title: 'Oscillation in a Potential Well'
})
export const ConicalNoWork = wrap(cm.ConicalNoWork, {
  aspect: 'auto',
  title: 'Conical Pendulum · Tension does no work'
})
export const ElasticCollision = wrap(cm.ElasticCollision, {
  aspect: 'auto',
  title: 'Elastic Collision'
})
export const StokesTheorem = wrap(cm.StokesTheorem, {
  aspect: 'auto',
  title: "Stokes' Theorem · circulation = enclosed curl"
})
export const PathDependentWork = wrap(cm.PathDependentWork, {
  aspect: 'auto',
  title: 'Path-Dependent Work'
})
export const SpringFieldViz = wrap(cm.SpringFieldViz, {
  aspect: 'auto',
  title: 'Spring Force Field'
})
export const AreaUnderForce = wrap(cm.AreaUnderForce, {
  aspect: 'auto',
  title: 'Area Under Force Curve = Work'
})
export const FromUtoF = wrap(cm.FromUtoF, { aspect: 'auto', title: 'From U to F · F = −U′(x)' })
export const GradientHill = wrap(cm.GradientHill, { aspect: 'auto', title: 'Gradient on a Hill' })
export const PaddleWheelCurl = wrap(cm.PaddleWheelCurl, {
  aspect: 'auto',
  title: 'Paddle Wheel · Curl (rotational vs irrotational)'
})
export const KeplerEqualAreas = wrap(cm.KeplerEqualAreas, {
  aspect: 'auto',
  title: 'Kepler Equal Areas'
})
export const EffectivePotentialPlot = wrap(cm.EffectivePotentialPlot, {
  aspect: 'auto',
  title: 'Effective Potential V(r)'
})
export const PolarDecomp = wrap(cm.PolarDecomp, {
  aspect: 'auto',
  title: 'Polar Frame Decomposition'
})
// 01.6.x central-force viz: leaf functions self-wrap in <VizFigure>; bare re-exports here.
export const TwoBodyOrbit = cm.TwoBodyOrbit
export const EffPotV = cm.EffPotV
export const ConicOrbits = cm.ConicOrbits
export const EllipseGeom = cm.EllipseGeom
export const HohmannTransfer = cm.HohmannTransfer
export const KeplerEA2 = cm.KeplerEA2
export const RutherfordScattering = cm.RutherfordScattering
export const LeonovCoOrbit = cm.LeonovCoOrbit
export const NewtonCannonball = cm.NewtonCannonball
export const KeplerThreeLaws = cm.KeplerThreeLaws
export const CoriolisDrop = wrap(cm.CoriolisDrop, { aspect: 'auto', title: 'Coriolis' })
export const PhaseShift = wrap(cm.PhaseShift, {
  aspect: 'auto',
  title: 'Sine and Cosine Phase Shift'
})
export const DampedOsc = wrap(cm.DampedOsc, { aspect: 'auto', title: 'Damped Oscillator' })
export const DampingRegimes = wrap(cm.DampingRegimes, {
  aspect: 'auto',
  title: 'Three Damping Regimes'
})
export const LorentzianRes = wrap(cm.LorentzianRes, {
  aspect: 'auto',
  title: 'Lorentzian Resonance'
})
export const OrientationNonComm = wrap(cm.OrientationNonComm, {
  aspect: 'auto',
  title: 'Orientation Non-Commutativity'
})
export const SkewRod = wrap(cm.SkewRod, { aspect: 'auto', title: 'Skew Rod' })
export const Gyroscope = wrap(cm.Gyroscope, { aspect: 'auto', title: 'Gyroscope precession' })
export const EquinoxPrecession = wrap(cm.EquinoxPrecession, {
  aspect: 'auto',
  title: 'Equinox Precession'
})
export const InertiaTensor = wrap(cm.InertiaTensor, {
  aspect: 'auto',
  title: 'Tensor of Inertia (table-style)'
})
export const OblateProlate = wrap(cm.OblateProlate, { aspect: 'auto', title: 'Oblate vs Prolate' })
export const PrecessionCone = wrap(cm.PrecessionCone, {
  aspect: 'auto',
  title: 'Torque-Free Precession Cone'
})
export const TennisRacket = wrap(cm.TennisRacket, { aspect: 'auto', title: 'Tennis Racket' })
export const NonCentralPair = wrap(cm.NonCentralPair, {
  aspect: 'auto',
  title: 'Non-Central Force Pair'
})
export const OffsetSphere = wrap(cm.OffsetSphere, { aspect: 'auto', title: 'Offset sphere' })
export const DumbbellTensor = wrap(cm.DumbbellTensor, { aspect: 'auto', title: 'Dumbbell tensor' })
export const CycloidalNutation = wrap(cm.CycloidalNutation, {
  aspect: 'auto',
  title: 'Cycloidal Nutation'
})
export const Michelson = wrap(cm.Michelson, {
  aspect: 'auto',
  title: 'Michelson Interferometer (schematic)'
})
export const GammaVsBeta = wrap(cm.GammaVsBeta, { aspect: 'auto', title: 'Gamma vs β' })
export const LightCone = wrap(cm.LightCone, { aspect: 'auto', title: 'Light Cone' })
export const LengthContraction = wrap(cm.LengthContraction, {
  aspect: 'auto',
  title: 'Length Contraction'
})
export const LightClock = wrap(cm.LightClock, { aspect: 'auto', title: 'Light Clock' })
export const RelDoppler = wrap(cm.RelDoppler, { aspect: 'auto', title: 'Relativistic Doppler' })
export const TwinParadox = wrap(cm.TwinParadox, { aspect: 'auto', title: 'Twin Paradox' })
export const RelMass = wrap(cm.RelMass, {
  aspect: 'auto',
  title: 'Relativistic Mass (Interactive)'
})
export const PairProduction = wrap(cm.PairProduction, { aspect: 'auto', title: 'Pair Production' })
export const PendulumEnergy = wrap(cm.PendulumEnergy, { aspect: 'auto', title: 'Pendulum Energy' })
export const ElasticCollisionCalc = wrap(cm.ElasticCollisionCalc, {
  aspect: 'auto',
  title: '1D Elastic Collision Calculator'
})
export const PhasePortraitDrag = wrap(cm.PhasePortraitDrag, {
  aspect: 'auto',
  title: 'Phase Portrait'
})
export const LorentzBoostInteractive = wrap(cm.LorentzBoostInteractive, {
  aspect: 'auto',
  title: 'Lorentz Boost'
})
export const ResonanceDriver = wrap(cm.ResonanceDriver, {
  aspect: 'auto',
  title: 'Resonance Driver'
})
export const ThreeBodyField = wrap(cm.ThreeBodyField, { aspect: 'auto', title: 'Three-Body Drag' })

// Part III: Hamiltonian Mechanics

export const NestedEnergyLevels = wrap(cm.NestedEnergyLevels, {
  aspect: 'auto',
  title: 'Nested Energy Levels'
})
export const PhaseFlowOrbits = wrap(cm.PhaseFlowOrbits, {
  aspect: 'auto',
  title: 'Phase Flow Orbits'
})
export const LiouvilleBlob = wrap(cm.LiouvilleBlob, { aspect: 'auto', title: 'Liouville Theorem' })
export const LegendreHamiltonian = wrap(cm.LegendreHamiltonian, {
  aspect: 'auto',
  title: 'Legendre Transform'
})
export const GeneratingFunctionGeom = wrap(cm.GeneratingFunctionGeom, {
  aspect: 'auto',
  title: 'Generating Function Geometry'
})
export const HJWavefronts = wrap(cm.HJWavefronts, {
  aspect: 'auto',
  title: 'Hamilton-Jacobi Wavefronts'
})
export const ActionCoordinate = wrap(cm.ActionCoordinate, {
  aspect: 'auto',
  title: 'Action as Coordinate'
})
export const ActionAngleConstruction = wrap(cm.ActionAngleConstruction, {
  aspect: 'auto',
  title: 'Action-Angle Construction'
})
export const IntegrablePhasePortrait = wrap(cm.IntegrablePhasePortrait, {
  aspect: 'auto',
  title: 'Integrable Phase Portrait'
})
export const TorusTrajectoryViz = wrap(cm.TorusTrajectoryViz, {
  aspect: 'auto',
  title: 'Torus Trajectory'
})
export const AveragingViz = wrap(cm.AveragingViz, { aspect: 'auto', title: 'Averaging Theorem' })
export const JacobiGeodesicDeviation = wrap(cm.JacobiGeodesicDeviation, {
  aspect: 'auto',
  title: 'Jacobi Geodesic Deviation'
})
export const CoadjointOrbitSphere = wrap(cm.CoadjointOrbitSphere, {
  aspect: 'auto',
  title: 'Co-adjoint Orbit'
})
export const PoissonBracketAlgebra = wrap(cm.PoissonBracketAlgebra, {
  aspect: 'auto',
  title: 'Poisson Bracket Algebra'
})

// Part IV: Perturbation Theory

export const AdiabaticOscillator = wrap(cm.AdiabaticOscillator, {
  aspect: 'auto',
  title: 'Adiabatic Oscillator'
})
export const AdiabaticInvariantArea = wrap(cm.AdiabaticInvariantArea, {
  aspect: 'auto',
  title: 'Adiabatic Invariant'
})
// self-wraps in <VizFigure>; bare re-export here.
export const AdiabaticPhaseEllipse = cm.AdiabaticPhaseEllipse
export const InvariantToriDiagram = wrap(cm.InvariantToriDiagram, {
  aspect: 'auto',
  title: 'Invariant Tori'
})
export const KAMCantorSet = wrap(cm.KAMCantorSet, { aspect: 'auto', title: 'KAM Cantor Set' })
export const ConditionallyPeriodic = wrap(cm.ConditionallyPeriodic, {
  aspect: 'auto',
  title: 'Conditionally Periodic'
})
export const FrequencyMap = wrap(cm.FrequencyMap, { aspect: 'auto', title: 'Frequency Map' })
export const ArnoldDiffusion = wrap(cm.ArnoldDiffusion, {
  aspect: 'auto',
  title: 'Arnold Diffusion'
})
export const PoincareBirkhoff = wrap(cm.PoincareBirkhoff, {
  aspect: 'auto',
  title: 'Poincaré-Birkhoff Theorem'
})
export const ResonancePortrait = wrap(cm.ResonancePortrait, {
  aspect: 'auto',
  title: 'Resonance Portrait'
})
export const FrequencyRepulsion = wrap(cm.FrequencyRepulsion, {
  aspect: 'auto',
  title: 'Frequency Repulsion'
})

// PHYSICS · CLASSICAL GEOMETRIC PHASE / HANNAY ANGLE
export const SolidAngleHolonomy = wrap(ihan.SolidAngleHolonomy, {
  aspect: 'auto',
  title: 'Holonomy on the Sphere = Enclosed Solid Angle'
})
export const DynamicalVsGeometricPhase = wrap(ihan.DynamicalVsGeometricPhase, {
  aspect: 'auto',
  title: 'Dynamical Phase Grows with T; Geometric Phase Does Not'
})
export const FoucaultPrecession = wrap(ihan.FoucaultPrecession, {
  aspect: 'auto',
  title: 'Foucault Precession: −2π sin λ per Day'
})

// Part IV: Lie Transformation Method (Deprit Series)
export const LieSeriesFlow = wrap(cm.LieSeriesFlow, {
  aspect: 'auto',
  title: 'Lie Series as a Phase-Flow'
})
export const DepritTriangle = wrap(cm.DepritTriangle, {
  aspect: 'auto',
  title: 'Deprit Recursion Triangle'
})
export const PendulumOrderConvergence = wrap(cm.PendulumOrderConvergence, {
  aspect: 'auto',
  title: 'Pendulum Frequency: Order-by-Order Convergence'
})

// PHYSICS · LIOUVILLE & POINCARÉ RECURRENCE
export const HamiltonianVectorField = wrap(ilpr.HamiltonianVectorField, {
  aspect: 'auto',
  title: 'Hamiltonian Vector Field: div f = 0'
})
export const PoincareRotation = wrap(ilpr.PoincareRotation, {
  aspect: 'auto',
  title: 'Circle Rotation: Rational vs Irrational Return'
})
export const TorusWinding = wrap(ilpr.TorusWinding, {
  aspect: 'auto',
  title: 'Winding Line on the Torus'
})

// ALGEBRA

// M01 FOUNDATIONS
export const NumberLineNegativesViz = wrap(al.NumberLineNegativesViz, {
  aspect: 'auto',
  title: 'Number Line · Negatives'
})
export const BinaryPlaceValueViz = wrap(al.BinaryPlaceValueViz, {
  aspect: 'auto',
  title: 'Binary Place Value'
})
export const CommutativityGridViz = wrap(al.CommutativityGridViz, {
  aspect: 'auto',
  title: 'Commutativity Grid'
})
export const DistributiveLawViz = wrap(al.DistributiveLawViz, {
  aspect: 'auto',
  title: 'Distributive Law'
})
export const NumberLineViz = wrap(al.NumberLineViz, {
  aspect: 'auto',
  title: 'Number Line · Real Numbers'
})
export const SquareOfSumGeomViz = wrap(al.SquareOfSumGeomViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Square of a Sum · Geometric'
})
export const PascalTriangleViz = wrap(al.PascalTriangleViz, {
  aspect: 'auto',
  title: "Pascal's Triangle"
})

// M02 LINEAR EQUATIONS
export const TwoLinesViz = wrap(al.TwoLinesViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Two Lines · Intersection'
})
export const ParabolaPlotViz = wrap(al.ParabolaPlotViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Parabola Plot'
})

// INFORMATION THEORY (Shannon)
export const BinaryEntropyViz = wrap(it.BinaryEntropyViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Binary Entropy'
})
export const ShannonHartleyViz = wrap(it.ShannonHartleyViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Shannon–Hartley Capacity'
})
export const GaussianEntropyViz = wrap(it.GaussianEntropyViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Gaussian Entropy'
})
export const RateDistortionViz = wrap(it.RateDistortionViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Rate–Distortion'
})
export const CommunicationSystemViz = wrap(it.CommunicationSystemViz, {
  aspect: 'auto',
  title: 'Communication System'
})
export const TwoStateMarkovViz = wrap(it.TwoStateMarkovViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Two-State Markov Source'
})
export const ShannonFanoTreeViz = wrap(it.ShannonFanoTreeViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Shannon–Fano Code Tree'
})
export const BinarySymmetricChannelViz = wrap(it.BinarySymmetricChannelViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Binary Symmetric Channel'
})

// M03 QUADRATIC EQUATIONS
export const StandardFormViz = wrap(al.StandardFormViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Quadratic · Standard Form'
})
export const ParabolaDiscriminantViz = wrap(al.ParabolaDiscriminantViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Discriminant · Three Cases'
})
export const InteractiveDiscriminantViz = wrap(al.InteractiveDiscriminantViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Interactive Discriminant'
})
export const InteractiveParabolaViz = wrap(al.InteractiveParabolaViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Interactive Parabola'
})
export const NumberLineInequalityViz = wrap(al.NumberLineInequalityViz, {
  aspect: 'auto',
  title: 'Quadratic Inequality · Sign Chart'
})
export const PowersOfIViz = wrap(al.PowersOfIViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Powers of i'
})
export const VietasRootsViz = wrap(al.VietasRootsViz, {
  aspect: 'auto',
  size: 'compact',
  title: "Vieta's Roots"
})
export const MaxMinViz = wrap(al.MaxMinViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Vertex · Max / Min'
})
export const AlKhwarizmiViz = wrap(al.AlKhwarizmiViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Al-Khwarizmi · Completing the Square'
})

// M04 ROOTS · POWERS · INEQUALITIES
export const MeanChainViz = wrap(al.MeanChainViz, {
  aspect: 'auto',
  title: 'Mean Chain · HM ≤ GM ≤ AM ≤ QM'
})
export const AMGMRectViz = wrap(al.AMGMRectViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'AM-GM · Rectangle'
})
export const QMConvexViz = wrap(al.QMConvexViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'QM ≥ AM · Convexity'
})

// M05 FRACTIONS · RATIOS · PROPORTIONS
export const FractionNumberLineViz = wrap(al.FractionNumberLineViz, {
  aspect: 'auto',
  title: 'Fractions on the Number Line'
})
export const DirectProportionViz = wrap(al.DirectProportionViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Direct Proportion'
})
export const InverseProportionViz = wrap(al.InverseProportionViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Inverse Proportion'
})

// M06 EXPONENTS · RADICALS
export const PowersOf2Viz = wrap(al.PowersOf2Viz, { aspect: 'auto', title: 'Powers of 2' })
export const ExponentAdditionViz = wrap(al.ExponentAdditionViz, {
  aspect: 'auto',
  title: 'Exponent Addition · aᵐ · aⁿ'
})
export const FractionCompareViz = wrap(al.FractionCompareViz, {
  aspect: 'auto',
  title: 'Fraction Comparison'
})

// M07 POLYNOMIALS
export const PolynomialLabeledViz = wrap(al.PolynomialLabeledViz, {
  aspect: 'auto',
  title: 'Polynomial · Term Degrees'
})
export const PolynomialCurveViz = wrap(al.PolynomialCurveViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Polynomial Curve · Drag'
})
export const LogExpInverseViz = wrap(al.LogExpInverseViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Log and Exp as Inverses'
})
export const FloorStaircaseViz = wrap(al.FloorStaircaseViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Floor Function · Staircase'
})

// M08 GRAPHING LINES
export const CartesianPlaneViz = wrap(al.CartesianPlaneViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Cartesian Plane · Quadrants'
})
export const PlotPointsViz = wrap(al.PlotPointsViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Plotting Points'
})
export const DistanceTriangleViz = wrap(al.DistanceTriangleViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Distance · Triangle'
})
export const SlopeTypesViz = wrap(al.SlopeTypesViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Slope Types'
})
export const LineSlopeInterceptViz = wrap(al.LineSlopeInterceptViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Slope-Intercept · y = mx + b'
})
export const ParallelPerpViz = wrap(al.ParallelPerpViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Parallel and Perpendicular'
})
export const SystemsViz = wrap(al.SystemsViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Two-Line System'
})
export const NumberLineInequalityVizGL = wrap(al.NumberLineInequalityVizGL, {
  aspect: 'auto',
  title: 'Linear Inequality · Number Line'
})
export const HalfPlaneViz = wrap(al.HalfPlaneViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Half-Plane · y > mx + b'
})
export const FeasibleRegionViz = wrap(al.FeasibleRegionViz, {
  aspect: 'auto',
  title: 'Feasible Region'
})

// M09 QUADRATIC FUNCTIONS
export const ParabolaBasicViz = wrap(al.ParabolaBasicViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Parabola · y = x²'
})
export const ParabolaCoeffViz = wrap(al.ParabolaCoeffViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Parabola · Effect of a'
})
export const InteractiveVertexViz = wrap(al.InteractiveVertexViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Interactive Vertex · (x − h)² + k'
})
export const HorizontalParabolaViz = wrap(al.HorizontalParabolaViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Horizontal Parabola'
})
export const CircleViz = wrap(al.CircleViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Circle · Center and Radius'
})
export const QuadInequalityViz = wrap(al.QuadInequalityViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Quadratic Inequality'
})
export const TrivialInequalityViz = wrap(al.TrivialInequalityViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Trivial Inequality · x² ≥ 0'
})
export const InteractiveOptimizationViz = wrap(al.InteractiveOptimizationViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Interactive Optimization'
})
export const NumberLineSignViz = wrap(al.NumberLineSignViz, {
  aspect: 'auto',
  title: 'Polynomial Sign Chart'
})

// M10 FUNCTIONS
export const FunctionMachineViz = wrap(al.FunctionMachineViz, {
  aspect: 'auto',
  title: 'Function Machine'
})
export const CompositionChainViz = wrap(al.CompositionChainViz, {
  aspect: 'auto',
  title: 'Function Composition Chain'
})
export const GraphPointViz = wrap(al.GraphPointViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Point on a Graph'
})
export const ParabolaViz = wrap(al.ParabolaViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Parabola · y = x² − 5x + 6'
})
export const IntersectionViz = wrap(al.IntersectionViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Curve Intersection'
})
export const VerticalScaleViz = wrap(al.VerticalScaleViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Vertical Scaling'
})
export const HorizontalScaleViz = wrap(al.HorizontalScaleViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Horizontal Scaling'
})
export const InverseGraphViz = wrap(al.InverseGraphViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Inverse Graph'
})
export const RefInverseViz = wrap(al.RefInverseViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Reference Inverse'
})

// M11 EXPONENTIAL FUNCTIONS
export const ExponentialGraphViz = wrap(al.ExponentialGraphViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Exponential Graph · bˣ'
})
export const GrowthComparisonViz = wrap(al.GrowthComparisonViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Linear vs Exponential Growth'
})
export const EqualBasesViz = wrap(al.EqualBasesViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Solve 3ˣ = y · Equal Bases'
})
export const CompoundVsSimpleViz = wrap(al.CompoundVsSimpleViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Compound vs Simple Interest'
})
export const LogarithmGraphViz = wrap(al.LogarithmGraphViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Logarithm Graph'
})
export const LogSolvingViz = wrap(al.LogSolvingViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Solving Logarithms'
})
export const ForgettingCurveViz = wrap(al.ForgettingCurveViz, {
  aspect: 'auto',
  title: 'Law of Forgetting · P = P0 / (t+1)^c'
})
export const ParetoCurveViz = wrap(al.ParetoCurveViz, {
  aspect: 'auto',
  title: 'Pareto Distribution · P = c / W^k'
})
export const LogBaseComparisonViz = wrap(al.LogBaseComparisonViz, {
  aspect: 'auto',
  title: 'log10 x vs ln x · Base and Steepness'
})
export const CommonLogTableViz = wrap(al.CommonLogTableViz, {
  aspect: 'auto',
  title: 'Common Log · Powers of Ten'
})
export const Log2GraphViz = wrap(al.Log2GraphViz, {
  aspect: 'auto',
  title: 'y = log2 x · Plotting the Curve'
})
export const LogBaseSteepnessViz = wrap(al.LogBaseSteepnessViz, {
  aspect: 'auto',
  title: 'log2 x vs log10 x · Larger Base is Flatter'
})
export const LogReflectionsViz = wrap(al.LogReflectionsViz, {
  aspect: 'auto',
  title: 'Reflecting log2 x Across Each Axis'
})
export const LogHorizontalShiftViz = wrap(al.LogHorizontalShiftViz, {
  aspect: 'auto',
  title: 'Horizontal Shift Drags the Asymptote'
})
export const LogBoundedDomainViz = wrap(al.LogBoundedDomainViz, {
  aspect: 'auto',
  title: 'log3(25 - x^2) · Bounded Domain'
})
export const ExpLineIntersectionViz = wrap(al.ExpLineIntersectionViz, {
  aspect: 'auto',
  title: 'e^(3-2x) = 4 · Curve Meets Line'
})
export const GraphOnlyRootsViz = wrap(al.GraphOnlyRootsViz, {
  aspect: 'auto',
  title: 'Roots Only a Graph Can Find'
})
export const ExtraneousDomainViz = wrap(al.ExtraneousDomainViz, {
  aspect: 'auto',
  title: 'Extraneous Root · The Domain Gap'
})
export const ExpInequalityViz = wrap(al.ExpInequalityViz, {
  aspect: 'auto',
  title: 'e^x > 5 · Boundary and Solution Ray'
})
export const LightDecayViz = wrap(al.LightDecayViz, {
  aspect: 'auto',
  title: 'Light Transparency · Exponential Decay'
})
export const LogScaleNumberLineViz = wrap(al.LogScaleNumberLineViz, {
  aspect: 'auto',
  size: 'wide',
  title: 'Why Log Scales Exist · Linear vs log10'
})
export const HalfLifeDecayViz = wrap(al.HalfLifeDecayViz, {
  aspect: 'auto',
  title: 'Radioactive Decay · Half-Life Staircase'
})
export const CoolingCurveViz = wrap(al.CoolingCurveViz, {
  aspect: 'auto',
  title: "Newton's Cooling · Asymptote at Ambient"
})
export const PopulationRatesViz = wrap(al.PopulationRatesViz, {
  aspect: 'auto',
  title: 'Population · 1.4% vs 1.0% Growth'
})
export const BacteriaDoublingViz = wrap(al.BacteriaDoublingViz, {
  aspect: 'auto',
  title: 'Bacteria · Doubling Every 3 Hours'
})
export const APvsGPDiscreteViz = wrap(al.APvsGPDiscreteViz, {
  aspect: 'auto',
  title: 'AP vs GP · Line vs Exponential'
})
export const PartialSumsZenoViz = wrap(al.PartialSumsZenoViz, {
  aspect: 'auto',
  size: 'wide',
  title: 'Zeno · Partial Sums Converge to 10/9'
})
export const FibonacciRatioViz = wrap(al.FibonacciRatioViz, {
  aspect: 'auto',
  title: 'Fibonacci Ratios Narrow to the Golden Ratio'
})
export const PermutationTreeViz = wrap(al.PermutationTreeViz, {
  aspect: 'auto',
  title: 'Permutation Tree · 3 x 2 x 1 = 6'
})
export const TwoSetVennViz = wrap(al.TwoSetVennViz, {
  aspect: 'auto',
  title: 'Two-Set Venn · Regions as Set Operations'
})
export const ExpVsPolyViz = wrap(al.ExpVsPolyViz, {
  aspect: 'auto',
  title: '2^x vs x^2 · Where the Exponential Wins'
})
export const BernoulliViz = wrap(al.BernoulliViz, {
  aspect: 'auto',
  title: 'Bernoulli · Curve Above Its Tangent'
})
export const TrominoTilingViz = wrap(al.TrominoTilingViz, {
  aspect: 'auto',
  title: 'L-Tromino Tiling · Recursive Split'
})
export const ArgandPointViz = wrap(al.ArgandPointViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Argand Plane · Point and Position Vector'
})
export const ComplexAddViz = wrap(al.ComplexAddViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Complex Addition · Parallelogram Law'
})
export const ModulusTriangleViz = wrap(al.ModulusTriangleViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Modulus as Distance · |4+3i| = 5'
})
export const UnitCircleAngleViz = wrap(al.UnitCircleAngleViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Unit Circle · cos and sin as Coordinates'
})
export const ArgumentQuadrantViz = wrap(al.ArgumentQuadrantViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Argument · Why arctan Needs the Quadrant'
})
export const ComplexMultiplyViz = wrap(al.ComplexMultiplyViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Multiply Moduli, Add Arguments'
})
export const PowerSpiralViz = wrap(al.PowerSpiralViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'De Moivre · Powers Spiral Out'
})
export const NthRootsPolygonViz = wrap(al.NthRootsPolygonViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'nth Roots · Regular n-gon'
})
export const RootsOfUnityViz = wrap(al.RootsOfUnityViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Roots of Unity · Vectors Sum to Zero'
})
export const PolarTriangleViz = wrap(al.PolarTriangleViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Polar Triangle · x = r cos, y = r sin'
})
export const ReflectionMapViz = wrap(al.ReflectionMapViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Matrix as Function · Reflection Across x-axis'
})
export const TriangleAreaViz = wrap(al.TriangleAreaViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Determinant = Area · Triangle and Parallelogram'
})
export const UnitSquareTransformViz = wrap(al.UnitSquareTransformViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Unit Square -> Parallelogram · Area = |det|'
})
export const EigenvectorViz = wrap(al.EigenvectorViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Eigenvector · Direction Preserved by A'
})
export const InteractiveExponentialViz = wrap(al.InteractiveExponentialViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Interactive Exponential'
})

// M12 SEQUENCES · SERIES
export const SequenceVsSeriesViz = wrap(al.SequenceVsSeriesViz, {
  aspect: 'auto',
  title: 'Sequence vs Series'
})
export const ArithmeticNumberLineViz = wrap(al.ArithmeticNumberLineViz, {
  aspect: 'auto',
  title: 'Arithmetic Sequence · Number Line'
})
export const GaussPairingViz = wrap(al.GaussPairingViz, { aspect: 'auto', title: 'Gauss Pairing' })
export const OddSquaresViz = wrap(al.OddSquaresViz, {
  aspect: 'auto',
  title: 'Odd Numbers Sum to Squares'
})
export const TelescopingViz = wrap(al.TelescopingViz, { aspect: 'auto', title: 'Telescoping Sum' })
export const PartialSumsViz = wrap(al.PartialSumsViz, {
  aspect: 'auto',
  title: 'Partial Sums · Geometric'
})
export const StaircaseViz = wrap(al.StaircaseViz, {
  aspect: 'auto',
  title: 'Staircase · Half Rectangle'
})
export const FibonacciStaircaseViz = wrap(al.FibonacciStaircaseViz, {
  aspect: 'auto',
  title: 'Fibonacci Numbers'
})
export const PianoViz = wrap(al.PianoViz, { aspect: 'auto', title: 'Piano Octave · Geometric' })

// M13 BINOMIAL THEOREM
// SquareOfSumViz removed (duplicate of SquareOfSumGeomViz above); consumers repointed.
export const DiffOfSquaresViz = wrap(al.DiffOfSquaresViz, {
  aspect: 'auto',
  title: 'Difference of Squares'
})

// BOOK I · THE SHADOW OF THE TORTURER
export const GuildHierarchy = wrap(bI.GuildHierarchy, { aspect: 'auto', title: 'Guild Hierarchy' })
export const CitadelMap = wrap(bI.CitadelMap, { aspect: 'auto', title: 'Citadel Map' })
export const PowerTriangle = wrap(bI.PowerTriangle, { aspect: 'auto', title: 'Power Triangle' })
export const NessusRoute = wrap(bI.NessusRoute, { aspect: 'auto', title: 'Nessus Route' })
export const InireMirrors = wrap(bI.InireMirrors, { aspect: 'auto', title: 'Inire Mirrors' })
export const AvernDuel = wrap(bI.AvernDuel, { aspect: 'auto', title: 'Avern Duel' })
export const BI_CharacterNetwork = wrap(bI.CharacterNetwork, {
  aspect: 'auto',
  title: 'Character Network'
})
export const JourneyArc = wrap(bI.JourneyArc, { aspect: 'auto', title: 'Journey Arc' })
export const BI_SymbolNetwork = wrap(bI.SymbolNetwork, { aspect: 'auto', title: 'Symbol Network' })

// BOOK II · THE CLAW OF THE CONCILIATOR
export const SaltusMap = wrap(bII.SaltusMap, { aspect: 'auto', title: 'Saltus Map' })
export const SaltusBeats = wrap(bII.SaltusBeats, { aspect: 'auto', title: 'Saltus Beats' })
export const MineSection = wrap(bII.MineSection, { aspect: 'auto', title: 'Mine Section' })
export const ForestCourt = wrap(bII.ForestCourt, { aspect: 'auto', title: 'Forest Court' })
export const Antechamber = wrap(bII.Antechamber, { aspect: 'auto', title: 'Antechamber' })
export const HouseAbsolute = wrap(bII.HouseAbsolute, { aspect: 'auto', title: 'House Absolute' })
export const CumaeanRitual = wrap(bII.CumaeanRitual, { aspect: 'auto', title: 'Cumaean Ritual' })
export const NessusToThrax = wrap(bII.NessusToThrax, { aspect: 'auto', title: 'Nessus → Thrax' })
export const BII_CharacterNetwork = wrap(bII.CharacterNetwork, {
  aspect: 'auto',
  title: 'Character Network'
})
export const TerminologyTree = wrap(bII.TerminologyTree, {
  aspect: 'auto',
  title: 'Terminology Tree'
})
export const BII_SymbolNetwork = wrap(bII.SymbolNetwork, {
  aspect: 'auto',
  title: 'Symbol Network'
})

// BOOK III · THE SWORD OF THE LICTOR
export const ThraxGeography = wrap(bIII.ThraxGeography, {
  aspect: 'auto',
  title: 'Thrax Geography'
})
export const VinculaCrossSection = wrap(bIII.VinculaCrossSection, {
  aspect: 'auto',
  title: 'Vincula Cross-Section'
})
export const BIII_Ch01SeverianAuthorityWeb = wrap(bIII.Ch01SeverianAuthorityWeb, {
  aspect: 'auto',
  title: 'Authority Web'
})
export const BIII_Ch01StructureDiagram = wrap(bIII.Ch01StructureDiagram, {
  aspect: 'auto',
  title: 'Structure Diagram'
})
export const BIII_Ch02EmotionalArc = wrap(bIII.Ch02EmotionalArc, {
  aspect: 'auto',
  title: 'Emotional Arc · Ch. II–IX'
})
export const LostArchivesCosmogony = wrap(bIII.LostArchivesCosmogony, {
  aspect: 'auto',
  title: 'Lost Archives Cosmogony'
})
export const ClawDualFailure = wrap(bIII.ClawDualFailure, {
  aspect: 'auto',
  title: 'Claw Dual Failure'
})
export const SalamanderAnatomy = wrap(bIII.SalamanderAnatomy, {
  aspect: 'auto',
  title: 'Salamander Anatomy'
})
export const BIII_Ch03EmotionalArc = wrap(bIII.Ch03EmotionalArc, {
  aspect: 'auto',
  title: 'Emotional Arc · Ch. XIII'
})
export const SeverianRelationshipWeb = wrap(bIII.SeverianRelationshipWeb, {
  aspect: 'auto',
  title: 'Relationship Web'
})
export const CliffStrata = wrap(bIII.CliffStrata, { aspect: 'auto', title: 'Cliff Strata' })
export const BIII_Ch04EmotionalArc = wrap(bIII.Ch04EmotionalArc, {
  aspect: 'auto',
  title: 'Emotional Arc · Ch. XV–XIX'
})
export const CasdoeHouseCharacterWeb = wrap(bIII.CasdoeHouseCharacterWeb, {
  aspect: 'auto',
  title: 'Casdoe House'
})
export const AlzaboVoiceMechanism = wrap(bIII.AlzaboVoiceMechanism, {
  aspect: 'auto',
  title: 'Alzabo Voice Mechanism'
})
export const TyphonMountainAscent = wrap(bIII.TyphonMountainAscent, {
  aspect: 'auto',
  title: 'Mountain Ascent'
})
export const TyphonPiatonDuality = wrap(bIII.TyphonPiatonDuality, {
  aspect: 'auto',
  title: 'Typhon Piaton Duality'
})
export const BIII_Ch06ClawAuthorityWeb = wrap(bIII.Ch06ClawAuthorityWeb, {
  aspect: 'auto',
  title: 'Claw Authority Web'
})
export const LakeSceneMap = wrap(bIII.LakeSceneMap, { aspect: 'auto', title: 'Lake Scene Map' })
export const BIII_Ch07AuthorityWeb = wrap(bIII.Ch07AuthorityWeb, {
  aspect: 'auto',
  title: 'Authority Web · Lake'
})
export const Ch07ModuleTimeline = wrap(bIII.Ch07ModuleTimeline, {
  aspect: 'auto',
  title: 'Section Timeline'
})
export const LakeCastleGeography = wrap(bIII.LakeCastleGeography, {
  aspect: 'auto',
  title: 'Castle Geography'
})
export const HierodulemaskLayers = wrap(bIII.HierodulemaskLayers, {
  aspect: 'auto',
  title: 'Hierodule Mask Layers'
})
export const ClawTransformation = wrap(bIII.ClawTransformation, {
  aspect: 'auto',
  title: 'Claw Transformation'
})

// BOOK IV · THE CITADEL OF THE AUTARCH
export const BIV_Ch01StructureDiagram = wrap(bIV.Ch01StructureDiagram, {
  aspect: 'auto',
  title: 'Structure Diagram'
})
export const Ch01ResurrectionSequence = wrap(bIV.Ch01ResurrectionSequence, {
  aspect: 'auto',
  title: 'Resurrection Sequence'
})
export const BIV_Ch01EmotionalArc = wrap(bIV.Ch01EmotionalArc, {
  aspect: 'auto',
  title: 'Emotional Arc · Ch. 1'
})
export const BIV_Ch01CharacterWeb = wrap(bIV.Ch01CharacterWeb, {
  aspect: 'auto',
  title: 'Character Web · Ch. 1'
})
export const BIV_Ch02StructureDiagram = wrap(bIV.Ch02StructureDiagram, {
  aspect: 'auto',
  title: 'Structure Diagram · Ch. 2'
})
export const Ch02AscianSpeechGrammar = wrap(bIV.Ch02AscianSpeechGrammar, {
  aspect: 'auto',
  title: 'Ascian Speech Grammar'
})
export const BIV_Ch02CharacterWeb = wrap(bIV.Ch02CharacterWeb, {
  aspect: 'auto',
  title: 'Character Web · Ch. 2'
})
export const Ch02ClawParadox = wrap(bIV.Ch02ClawParadox, { aspect: 'auto', title: 'Claw Paradox' })
export const BIV_Ch03StructureDiagram = wrap(bIV.Ch03StructureDiagram, {
  aspect: 'auto',
  title: 'Structure Diagram · Module 03'
})
export const BIV_Ch03CharacterWeb = wrap(bIV.Ch03CharacterWeb, {
  aspect: 'auto',
  title: 'Character Web · Module 03'
})
export const Ch03AscianStoryArc = wrap(bIV.Ch03AscianStoryArc, {
  aspect: 'auto',
  title: 'Ascian Story Arc'
})
export const Ch03SlaveryPaths = wrap(bIV.Ch03SlaveryPaths, {
  aspect: 'auto',
  title: 'Slavery Paths'
})
export const Ch03ThreeSuitorsRoutes = wrap(bIV.Ch03ThreeSuitorsRoutes, {
  aspect: 'auto',
  title: 'Three Suitors Routes'
})
export const Ch03LastHouseTime = wrap(bIV.Ch03LastHouseTime, {
  aspect: 'auto',
  title: 'Last House Time'
})
export const Ch04ModuleArc = wrap(bIV.Ch04ModuleArc, { aspect: 'auto', title: 'Section Arc' })
export const Ch04ThreeFactionStandoff = wrap(bIV.Ch04ThreeFactionStandoff, {
  aspect: 'auto',
  title: 'Three-Faction Standoff'
})
export const Ch04BattleFormation = wrap(bIV.Ch04BattleFormation, {
  aspect: 'auto',
  title: 'Battle Formation'
})
export const Ch04AutarchIdentityWeb = wrap(bIV.Ch04AutarchIdentityWeb, {
  aspect: 'auto',
  title: 'Autarch Identity Web'
})
export const Ch05ThreeFactionCollapse = wrap(bIV.Ch05ThreeFactionCollapse, {
  aspect: 'auto',
  title: 'Three Faction Collapse'
})
export const Ch05AutarchIdentityStack = wrap(bIV.Ch05AutarchIdentityStack, {
  aspect: 'auto',
  title: 'Autarch Identity Stack'
})
export const Ch05AquastorProjection = wrap(bIV.Ch05AquastorProjection, {
  aspect: 'auto',
  title: 'Aquastor Projection'
})
export const Ch05ThornBushClaw = wrap(bIV.Ch05ThornBushClaw, {
  aspect: 'auto',
  title: 'Thorn Bush Claw'
})
export const Ch06RouteMap = wrap(bIV.Ch06RouteMap, { aspect: 'auto', title: 'Route Map' })
export const BIV_Ch06CharacterWeb = wrap(bIV.Ch06CharacterWeb, {
  aspect: 'auto',
  title: 'Character Web · Module 06'
})
export const Ch06ReturnsAndCallbacks = wrap(bIV.Ch06ReturnsAndCallbacks, {
  aspect: 'auto',
  title: 'Returns and Callbacks'
})
export const Ch06TimeLoopDiagram = wrap(bIV.Ch06TimeLoopDiagram, {
  aspect: 'auto',
  title: 'Time-Loop Diagram'
})

// Migrated legacy viz (Book III)
export const PowerStructureDiagram = wrap(bIII.PowerStructureDiagram, {
  aspect: 'auto',
  title: 'Power Structure: Modern vs Commonwealth'
})

// Migrated legacy viz (Book IV)
export const Ch04AscianStructure = wrap(bIV.Ch04AscianStructure, {
  aspect: 'auto',
  title: 'Ascian Structure · Verbal vs Military'
})
export const Ch04SeverianFearArc = wrap(bIV.Ch04SeverianFearArc, {
  aspect: 'auto',
  title: "Severian's Fear Arc · Ch. XXI–XXII"
})
export const Ch05ModuleArc = wrap(bIV.Ch05ModuleArc, {
  aspect: 'auto',
  title: 'Module 05 Section Arc'
})
export const Ch05TimeCorridor = wrap(bIV.Ch05TimeCorridor, {
  aspect: 'auto',
  title: 'The Corridors of Time'
})
export const Ch06ClawMeditationTree = wrap(bIV.Ch06ClawMeditationTree, {
  aspect: 'auto',
  title: "The Claw's Power · Two Theories"
})
export const Ch06StructureDiagram = wrap(bIV.Ch06StructureDiagram, {
  aspect: 'auto',
  title: 'Module 06 Structure · Return to the Citadel'
})

// Plate (painting-card wrapper for books)
export { Plate } from './books/fantasy/Science Fantasy/plate'

// BIOGRAPHY · FOUNDERS & BUILDERS · AUGUSTUS THE BIOGRAPHY
export const SuccessionNetwork = wrap(bio.SuccessionNetwork, {
  aspect: 'auto',
  title: 'Succession Network'
})

// STAR WARS · EPISODE I · THE PHANTOM MENACE
export const TfaSceneTimeline = tpmI.TfaSceneTimeline
export const TfaCharacterWeb = tpmI.TfaCharacterWeb
export const TfaShipLayout = tpmI.TfaShipLayout
export const TfaThemeMap = tpmI.TfaThemeMap
export const DmsCharacterWeb = tpmI.DmsCharacterWeb
export const BoontaRaceCourse = tpmI.BoontaRaceCourse
export const BoontaRaceTimeline = tpmI.BoontaRaceTimeline
export const PodraceCharacterWeb = tpmI.PodraceCharacterWeb
export const DarkSideTimelineSvg = tpmI.DarkSideTimeline
export const MaulAttackSvg = tpmI.MaulAttack
export const FirstMeetingSvg = tpmI.FirstMeeting
export const TwoInstructionsSvg = tpmI.TwoInstructions
export const IncompleteLiberationSvg = tpmI.IncompleteLiberation
export const FarewellCascadeSvg = tpmI.FarewellCascade
export const PoliticalPowerWeb = tpmI.CoruscantPowerWeb
export const CoruscantModuleTimeline = tpmI.CoruscantSceneTimeline
export const BattleMap = tpmI.BattleMap
export const CharacterArcTimeline = tpmI.CharacterArcTimeline
export const CharacterRoster = tpmI.CharacterRoster
export const ShipScaleLineup = tpmI.ShipScaleLineup

// MATHEMATICS · ARITHMETIC · DISCOUNT, PROFIT, LOSS
export const PercentageChangeNumberLine = wrap(dplA.PercentageChangeNumberLine, {
  aspect: 'auto',
  title: 'Percentage Change · Number Line'
})
export const ProfitLossBar = wrap(dplA.ProfitLossBar, {
  aspect: 'auto',
  title: 'Profit and Loss · Bar Comparison'
})
export const DiscountPriceLadder = wrap(dplA.DiscountPriceLadder, {
  aspect: 'auto',
  title: 'Discount · Price Ladder'
})
export const SuccessiveDiscountFunnel = wrap(dplA.SuccessiveDiscountFunnel, {
  aspect: 'auto',
  title: 'Successive Discounts · Funnel'
})
export const MarkupVsMarginPanel = wrap(dplA.MarkupVsMarginPanel, {
  aspect: 'auto',
  title: 'Markup vs Margin · Side-by-Side'
})
export const ReverseOriginalPrice = wrap(dplA.ReverseOriginalPrice, {
  aspect: 'auto',
  title: 'Reverse Problem · Finding Original Price'
})
export const SimpleVsCompoundInterest = wrap(dplA.SimpleVsCompoundInterest, {
  aspect: 'auto',
  title: 'Simple vs Compound Interest · Growth Lines'
})
export const DecimalMultiplierScale = wrap(dplA.DecimalMultiplierScale, {
  aspect: 'auto',
  title: 'Decimal Multiplier · Interactive Scale'
})

// MATHEMATICS · ARITHMETIC · SIMPLE AND COMPOUND INTEREST
export const SimpleInterestNumberLine = wrap(scI.SimpleInterestNumberLine, {
  aspect: 'auto',
  title: 'Simple Interest · Linear Growth'
})
export const CompoundMultiplierLadder = wrap(scI.CompoundMultiplierLadder, {
  aspect: 'auto',
  title: 'Compound Interest · Multiplier Ladder'
})
export const CompoundingFrequencyComparison = wrap(scI.CompoundingFrequencyComparison, {
  aspect: 'auto',
  title: 'Compounding Frequency · Annual vs Monthly'
})
export const TieredTaxBracketBar = wrap(scI.TieredTaxBracketBar, {
  aspect: 'auto',
  title: 'Tiered Tax Brackets · Income Bands'
})

// MATHEMATICS · GROWTH, DEPRECIATION, APPLIED TAX
export const PercentageChangeExplorer = wrap(gda.PercentageChangeExplorer, {
  aspect: 'auto',
  title: 'Percentage Change · Interactive Number Line'
})
export const LinearVsExponentialComparison = wrap(gda.LinearVsExponentialComparison, {
  aspect: 'auto',
  title: 'Linear vs Exponential Growth · Simple vs Compound'
})
export const CompoundGrowthDepreciationSlider = wrap(gda.CompoundGrowthDepreciationSlider, {
  aspect: 'auto',
  title: 'Compound Growth and Depreciation · Rate Slider'
})
// GDA.4 reuses the tiered tax bracket bar from the Simple-and-Compound-Interest
// monolith: the income-tax mechanics are identical, so the shim aliases it.

// MATHEMATICS · ARITHMETIC · ARITHMETIC AND GEOMETRIC SEQUENCES
export const ArithmeticProgressionLine = wrap(ags.ArithmeticProgressionLine, {
  aspect: 'auto',
  title: 'Arithmetic Progression · Linear Growth'
})
export const APSumGaussPairing = wrap(ags.APSumGaussPairing, {
  aspect: 'auto',
  title: 'AP Sum · Gauss Pairing'
})
export const GeometricProgressionLine = wrap(ags.GeometricProgressionLine, {
  aspect: 'auto',
  title: 'Geometric Progression · Exponential Growth'
})
export const APvsGPComparison = wrap(ags.APvsGPComparison, {
  aspect: 'auto',
  title: 'AP vs GP · Side-by-Side'
})
export const GPSumDerivation = wrap(ags.GPSumDerivation, {
  aspect: 'auto',
  title: 'GP Sum · Partial Sums'
})
export const WellTemperedClavierFrequencies = wrap(ags.WellTemperedClavierFrequencies, {
  aspect: 'auto',
  title: 'Well-Tempered Clavier · Frequency Ratios'
})
export const InfiniteGPConvergence = wrap(ags.InfiniteGPConvergence, {
  aspect: 'auto',
  title: 'Infinite GP · Convergence to a/(1-r)'
})
export const SequencePositionMap = wrap(ags.SequencePositionMap, {
  aspect: 'auto',
  title: 'Sequence Position Map · AP vs GP Terms'
})
export const MixedSequenceIdentifier = wrap(ags.MixedSequenceIdentifier, {
  aspect: 'auto',
  title: 'Mixed Sequence Identifier · AP / GP / Both / Neither'
})
export const ZenoStack = wrap(ags.ZenoStack, {
  aspect: 'auto',
  title: "Zeno's Dichotomy · Segment Stack on [0,1]"
})
export const APForwardBackwardStack = wrap(ags.APForwardBackwardStack, {
  aspect: 'auto',
  title: 'AP Sum Derivation · Forward-Backward Pairing'
})

// MATHEMATICS · ARITHMETIC · NUMBER SEQUENCES AND PATTERNS
export const LinearSequencePlot = wrap(nsp.LinearSequencePlot, {
  aspect: 'auto',
  title: 'Linear Sequence · Constant First Difference'
})
export const FirstDifferenceStrip = wrap(nsp.FirstDifferenceStrip, {
  aspect: 'auto',
  title: 'First Difference Strip · +5 Arcs'
})
export const QuadraticSequencePlot = wrap(nsp.QuadraticSequencePlot, {
  aspect: 'auto',
  title: 'Quadratic Sequence · Constant Second Difference'
})
export const MatchstickHouses = wrap(nsp.MatchstickHouses, {
  aspect: 'auto',
  title: 'Matchstick Houses · m = 4h + 1'
})
export const TileSequence = wrap(nsp.TileSequence, {
  aspect: 'auto',
  title: 'Tile Sequence · w = b + 4'
})
export const NthTermExplorer = wrap(nsp.NthTermExplorer, {
  aspect: 'auto',
  title: 'Nth Term Explorer · Interactive Formula'
})
export const OddSumCubes = wrap(nsp.OddSumCubes, {
  aspect: 'auto',
  title: 'Odd Numbers and Cubes · Visual Grouping'
})
export const CubicSequencePlot = wrap(nsp.CubicSequencePlot, {
  aspect: 'auto',
  title: 'Cubic Sequences · n³, n³+1, 2n³'
})
export const NicomachusSquares = wrap(nsp.NicomachusSquares, {
  aspect: 'auto',
  title: 'Nicomachus Identity · L-shaped Gnomons'
})

// MATHEMATICS · SCIENTIFIC NOTATION

// MATHEMATICS · INDEX NOTATION
export const HalvingLadder = wrap(ili.HalvingLadder, {
  aspect: 'auto',
  title: 'Halving Ladder · 2³ down to 2⁻³'
})
export const PowerCurves = wrap(ili.PowerCurves, {
  aspect: 'auto',
  title: 'Power Curves · y = 2^x and y = 3^x'
})
export const InteractiveExponentSlider = wrap(ili.InteractiveExponentSlider, {
  aspect: 'auto',
  title: 'Exponent Slider · 2^n for n in [-4, 4]'
})
export const ProductLawVisualizer = wrap(ili.ProductLawVisualizer, {
  aspect: 'auto',
  title: 'Product Law · a^m × a^n = a^(m+n)'
})
export const PowerOfPowerVisualizer = wrap(ili.PowerOfPowerVisualizer, {
  aspect: 'auto',
  title: 'Power of a Power · (a^m)^n = a^(mn)'
})
export const StandardFormScale = wrap(ili.StandardFormScale, {
  aspect: 'auto',
  title: 'Standard Form Scale · 10⁻⁴ to 10¹¹'
})
export const FactorBlockDiagram = wrap(ili.FactorBlockDiagram, {
  aspect: 'auto',
  title: 'Factor Block Diagram · 2⁴ = 2×2×2×2 = 16'
})
export const QuotientLawCancellation = wrap(ili.QuotientLawCancellation, {
  aspect: 'auto',
  title: 'Quotient Law · a⁵ ÷ a³ cancellation'
})

// MATHEMATICS · ARITHMETIC · SQUARES, CUBES, SQUARE ROOTS, CUBE ROOTS
export const SquareArray = wrap(scR.SquareArray, {
  aspect: 'auto',
  title: 'Square as n by n Array'
})
export const SquareArrayInteractive = wrap(scR.SquareArrayInteractive, {
  aspect: 'auto',
  title: 'Build a Square: Interactive'
})
export const CubeStack = wrap(scR.CubeStack, {
  aspect: 'auto',
  title: 'Cube as Stacked Unit Cubes'
})
export const CubeStackInteractive = wrap(scR.CubeStackInteractive, {
  aspect: 'auto',
  title: 'Build a Cube: Interactive'
})
export const SquareRootNumberLine = wrap(scR.SquareRootNumberLine, {
  aspect: 'auto',
  title: 'Square Root on a Number Line'
})
export const RootCurveComparison = wrap(scR.RootCurveComparison, {
  aspect: 'auto',
  title: 'Square Root vs Cube Root Curves'
})

// MATHEMATICS · ARITHMETIC · IRRATIONAL NUMBERS AND THE REAL-NUMBER SYSTEM
export const SqrtTwoBracketingViz = wrap(inr.SqrtTwoBracketingViz, {
  aspect: 'auto',
  title: 'Locating √2 by Bracketing'
})
export const NumberSystemHierarchyViz = wrap(inr.NumberSystemHierarchyViz, {
  aspect: 'auto',
  title: 'The Real-Number System Hierarchy'
})
export const DecimalExpansionStripViz = wrap(inr.DecimalExpansionStripViz, {
  aspect: 'auto',
  title: 'Decimal Expansions: Terminating, Repeating, Endless'
})
export const PerfectSquareParityViz = wrap(inr.PerfectSquareParityViz, {
  aspect: 'auto',
  title: 'The Perfect-Square Parity Test'
})
export const SqrtOnNumberLineSliderViz = wrap(inr.SqrtOnNumberLineSliderViz, {
  aspect: 'auto',
  title: '√n on the Number Line'
})
export const DensityStripViz = wrap(inr.DensityStripViz, {
  aspect: 'auto',
  title: 'Density of Rationals and Irrationals'
})
export const UnitSquareDiagonalViz = wrap(inr.UnitSquareDiagonalViz, {
  aspect: 'auto',
  title: 'Unit Square Diagonal'
})

// MATHEMATICS · REAL NUMBERS ON THE NUMBER LINE
export const CompassTransferViz = wrap(rnl.CompassTransferViz, {
  aspect: 'auto',
  title: 'Compass Transfer of √2 onto the Line'
})
export const SpiralOfTheodorusViz = wrap(rnl.SpiralOfTheodorusViz, {
  aspect: 'auto',
  title: 'The Spiral of Theodorus'
})
export const RealsAsPointsViz = wrap(rnl.RealsAsPointsViz, {
  aspect: 'auto',
  title: 'Every Point Is One Real Number'
})

// MATHEMATICS · SIMPLE QUADRATIC SURDS
export const SqrtDefinitionPlot = wrap(sqs.SqrtDefinitionPlot, {
  aspect: 'auto',
  title: 'Square Root Definition · x² = c interactive'
})
export const ThreeCaseDiagram = wrap(sqs.ThreeCaseDiagram, {
  aspect: 'auto',
  title: 'Three Cases of x² + q = 0'
})
export const ProductRulePlot = wrap(sqs.ProductRulePlot, {
  aspect: 'auto',
  title: 'Product Rule · √(ab) = √a · √b'
})
export const AbsoluteValueRootPlot = wrap(sqs.AbsoluteValueRootPlot, {
  aspect: 'auto',
  title: 'Absolute Value · √(a²) = |a|'
})
export const RationalisingStepDiagram = wrap(sqs.RationalisingStepDiagram, {
  aspect: 'auto',
  title: 'Rationalising the Denominator · Conjugate Steps'
})

// MATHEMATICS · ARITHMETIC · ODD AND EVEN NUMBERS
export const ParityNumberLine = wrap(oen.ParityNumberLine, {
  aspect: 'auto',
  title: 'Parity on the Number Line'
})
export const ParityPairing = wrap(oen.ParityPairing, {
  aspect: 'auto',
  title: 'Even Numbers Pair, Odd Numbers Have a Leftover'
})
export const ParitySumCalculator = wrap(oen.ParitySumCalculator, {
  aspect: 'auto',
  title: 'Parity of a Sum Calculator'
})
export const ParityOfSquares = wrap(oen.ParityOfSquares, {
  aspect: 'auto',
  title: 'Parity of n² · Even² is Even, Odd² is Odd'
})

// ARITHMETIC · PERCENTAGES: CONCEPT AND CONVERSIONS
export const PercentBar = wrap(pcc.PercentBar, { aspect: 'auto', title: 'Percent as a Bar' })
export const FractionToPercentMap = wrap(pcc.FractionToPercentMap, {
  aspect: 'auto',
  title: 'Fraction to Percent Map'
})
export const PercentDecimalSlide = wrap(pcc.PercentDecimalSlide, {
  aspect: 'auto',
  title: 'Percent and Decimal · Two-Way Slide'
})
export const UpThenDownAsymmetry = wrap(pcc.UpThenDownAsymmetry, {
  aspect: 'auto',
  title: 'Up Then Down · Asymmetry'
})
export const RelativeErrorViz = wrap(pcc.RelativeErrorViz, {
  aspect: 'auto',
  title: 'Relative Error · Bar Comparison'
})

// MATHEMATICS · ARITHMETIC · PERCENTAGE OF A QUANTITY
export const BarModelPercentOfQuantity = wrap(poq.BarModelPercentOfQuantity, {
  aspect: 'auto',
  title: 'Bar Model: Percentage of a Quantity'
})
export const FractionVsDecimalMethod = wrap(poq.FractionVsDecimalMethod, {
  aspect: 'auto',
  title: 'Fraction Method vs Decimal Method'
})
export const SimpleVsCompoundGrowth = wrap(poq.SimpleVsCompoundGrowth, {
  aspect: 'auto',
  title: 'Simple vs Compound Growth'
})

// MATHEMATICS · ARITHMETIC · PERCENTAGE INCREASE AND DECREASE
export const SameIncreaseDifferentBase = wrap(pid.SameIncreaseDifferentBase, {
  aspect: 'auto',
  title: 'Same Increase, Different Base'
})
export const PercentageIncreaseFormula = wrap(pid.PercentageIncreaseFormula, {
  aspect: 'auto',
  title: 'Percentage Increase: Number Line'
})
export const PercentageDecreaseMirror = wrap(pid.PercentageDecreaseMirror, {
  aspect: 'auto',
  title: 'Percentage Decrease: Number Line'
})
export const ProfitLossOnCostPrice = wrap(pid.ProfitLossOnCostPrice, {
  aspect: 'auto',
  title: 'Profit and Loss on Cost Price'
})
export const GeometricAreaChange = wrap(pid.GeometricAreaChange, {
  aspect: 'auto',
  title: 'Geometric Area Change'
})
export const ReversePercentageReasoning = wrap(pid.ReversePercentageReasoning, {
  aspect: 'auto',
  title: 'Reverse Percentage Reasoning'
})
export const MultiStepCombinedChange = wrap(pid.MultiStepCombinedChange, {
  aspect: 'auto',
  title: 'Multi-Step Combined Percentage Change'
})
export const PercentageChangeSymmetryTrap = wrap(pid.PercentageChangeSymmetryTrap, {
  aspect: 'auto',
  title: 'Up-Then-Down Is Not Zero'
})

// MATHEMATICS · ARITHMETIC · RATIO
export const RatioBoysGirls45 = wrap(rat.RatioBoysGirls45, {
  aspect: 'auto',
  title: 'Auditorium Ratio 4 to 5'
})
export const ProblemOneFourthSolution = wrap(rat.ProblemOneFourthSolution, {
  aspect: 'auto',
  title: 'Problem 1: Number-Line Concatenation'
})
export const ThreeQuantityBar = wrap(rat.ThreeQuantityBar, {
  aspect: 'auto',
  title: 'Three-Quantity Ratio Bar: 2:5:4'
})
export const ChairsLegsComparison = wrap(rat.ChairsLegsComparison, {
  aspect: 'auto',
  title: 'Chairs and Legs: Multiplicative vs Additive'
})
export const MapScaleVisual = wrap(rat.MapScaleVisual, {
  aspect: 'auto',
  title: 'Map Scale 1 to 50 000'
})
export const ShareSixtyTwoThree = wrap(rat.ShareSixtyTwoThree, {
  aspect: 'auto',
  title: 'Share 60 Dollars in Ratio 2 to 3'
})
export const ScalingRecipe = wrap(rat.ScalingRecipe, {
  aspect: 'auto',
  title: 'Scaling a Recipe: Factor 8 over 5'
})
export const TeacherStudentBeforeAfter = wrap(rat.TeacherStudentBeforeAfter, {
  aspect: 'auto',
  title: 'Teacher-Student Ratio: Before and After'
})
export const RatioVsRateContrast = wrap(rat.RatioVsRateContrast, {
  aspect: 'auto',
  title: 'Ratio vs Rate: Same Type vs Different Types'
})

// MATHEMATICS · ARITHMETIC · DIRECT AND INVERSE PROPORTION
export const DirectProportionLine = wrap(dip.DirectProportionLine, {
  aspect: 'auto',
  title: 'Direct Proportion Line · y = kx'
})
export const InverseProportionCurve = wrap(dip.InverseProportionCurve, {
  aspect: 'auto',
  title: 'Inverse Proportion Curve · y = k/x'
})
export const UnitRateBarModel = wrap(dip.UnitRateBarModel, {
  aspect: 'auto',
  title: 'Unit-Rate Method · Petrol Problem'
})
export const HorsesHayBarModel = wrap(dip.HorsesHayBarModel, {
  aspect: 'auto',
  title: 'Inverse Unit-Rate · Horses and Hay'
})
export const DirectVsInversePlots = wrap(dip.DirectVsInversePlots, {
  aspect: 'auto',
  title: 'Direct vs Inverse · Side-by-Side'
})
export const ExchangeRateConverter = wrap(dip.ExchangeRateConverter, {
  aspect: 'auto',
  title: 'Foreign Exchange Converter'
})

// MATHEMATICS · ARITHMETIC · RATE, SPEED, AVERAGE SPEED
export const ConstantSpeedPositionTimeGraph = wrap(rsa.ConstantSpeedPositionTimeGraph, {
  aspect: 'auto',
  title: 'Constant-Speed Position-Time Graph'
})
export const FaucetAccumulation = wrap(rsa.FaucetAccumulation, {
  aspect: 'auto',
  title: 'Faucet Accumulation at Constant Rate'
})
export const FaucetFillingProportion = wrap(rsa.FaucetFillingProportion, {
  aspect: 'auto',
  title: 'Faucet Filling · Proportion from Constancy'
})
export const ReducedRateCurve = wrap(rsa.ReducedRateCurve, {
  aspect: 'auto',
  title: 'Reduced-Rate Time Curve'
})
export const ReginaEricAreaModel = wrap(rsa.ReginaEricAreaModel, {
  aspect: 'auto',
  title: 'Cooperative Work · Area Model (Regina and Eric)'
})
export const CooperativeRateBars = wrap(rsa.CooperativeRateBars, {
  aspect: 'auto',
  title: 'Cooperative Work · Rate Bars'
})
export const UnitConversionChain = wrap(rsa.UnitConversionChain, {
  aspect: 'auto',
  title: 'Unit Conversion Chain · 85 1/15 ft/sec to 58 mph'
})
export const TwoNumberLines = wrap(rsa.TwoNumberLines, {
  aspect: 'auto',
  title: 'Two Number Lines · Rate as M/N'
})
export const TwoTrainsMeetingGraph = wrap(rsa.TwoTrainsMeetingGraph, {
  aspect: 'auto',
  title: 'Shuttle Trains · Meeting Point Graph'
})
export const AverageSpeedTwoLegs = wrap(rsa.AverageSpeedTwoLegs, {
  aspect: 'auto',
  title: 'Average Speed · Two-Leg Journey'
})

// MATHEMATICS · ARITHMETIC · MAP SCALES
export const ScaleRatioMeaning = wrap(ms.ScaleRatioMeaning, {
  aspect: 'auto',
  title: 'What 1:50000 Means'
})
export const MapScaleConverterForward = wrap(ms.MapScaleConverterForward, {
  aspect: 'auto',
  title: 'Map Distance to Land Distance'
})
export const MapScaleConverterReverse = wrap(ms.MapScaleConverterReverse, {
  aspect: 'auto',
  title: 'Land Distance to Map Distance'
})
export const ScaleComparison = wrap(ms.ScaleComparison, {
  aspect: 'auto',
  title: 'Large-Scale vs Small-Scale Maps'
})

// MATHEMATICS · ARITHMETIC · OPPOSITE NUMBERS AND ABSOLUTE VALUE
// Each viz function self-wraps in <VizFigure>; bare re-exports here.
export const ThermometerNumberLine = oav.ThermometerNumberLine
export const OppositeReflectionLine = oav.OppositeReflectionLine
export const SignWalkNumberLine = oav.SignWalkNumberLine
export const InequalityNegationFlip = oav.InequalityNegationFlip
export const MultiplyByNegativeFlip = oav.MultiplyByNegativeFlip
export const AbsoluteValueDistance = oav.AbsoluteValueDistance
export const AbsoluteValueIntervalShade = oav.AbsoluteValueIntervalShade
export const TriangleInequalityWalk = oav.TriangleInequalityWalk

// ARITHMETIC · OPERATIONS ON SIGNED RATIONALS
export const OSR_VectorAddSameSign = wrap(osr.VectorAddSameSign, {
  aspect: 'auto',
  title: 'Vector Addition: Same Sign'
})
export const OSR_VectorAddOppositeSign = wrap(osr.VectorAddOppositeSign, {
  aspect: 'auto',
  title: 'Vector Addition: Opposite Signs'
})
export const OSR_SumOfOppositesViz = wrap(osr.SumOfOppositesViz, {
  aspect: 'auto',
  title: 'Sum of Opposites: x + (−x) = 0'
})
export const OSR_SubtractionAsAddOpposite = wrap(osr.SubtractionAsAddOpposite, {
  aspect: 'auto',
  title: 'Subtraction as Adding the Opposite'
})
export const OSR_SignRuleGrid = wrap(osr.SignRuleGrid, {
  aspect: 'auto',
  title: 'Sign Rule Grid: Interactive'
})
export const OSR_NegativeTimesNegativeProof = wrap(osr.NegativeTimesNegativeProof, {
  aspect: 'auto',
  title: '(−1)(−1) = 1: Step-by-Step Proof'
})
export const OSR_DistributiveLawVizOSR = wrap(osr.DistributiveLawVizOSR, {
  aspect: 'auto',
  title: 'Distributive Law: x(y − z) = xy − xz'
})
export const OSR_AdditionFormulasViz = wrap(osr.AdditionFormulasViz, {
  aspect: 'auto',
  title: 'Addition Formulas: Three Cases'
})
export const OSR_InvertAndMultiplyViz = wrap(osr.InvertAndMultiplyViz, {
  aspect: 'auto',
  title: 'Invert and Multiply: Dividing Two Fractions'
})
export const OSR_SignRulesQuotientViz = wrap(osr.SignRulesQuotientViz, {
  aspect: 'auto',
  title: 'Sign Rules for Quotients'
})
export const OSR_FoundationsMirrorViz = wrap(osr.FoundationsMirrorViz, {
  aspect: 'auto',
  title: 'Mirror Reflection: x and x* on the Number Line'
})
export const OSR_ParenthesisRemovalViz = wrap(osr.ParenthesisRemovalViz, {
  aspect: 'auto',
  title: 'Parenthesis Removal: With vs Without Minus Sign'
})

// MATHEMATICS · APPROXIMATION: SIGNIFICANT FIGURES AND DECIMAL PLACES
export const RoundingSnapDiagram = wrap(asf.RoundingSnapDiagram, {
  aspect: 'auto',
  title: 'Rounding Snap · Number-Line Precision Levels'
})
export const SigFigHighlighter = wrap(asf.SigFigHighlighter, {
  aspect: 'auto',
  title: 'Significant Figures Highlighter · Place-Value Columns'
})
export const BoundsOfAccuracyInterval = wrap(asf.BoundsOfAccuracyInterval, {
  aspect: 'auto',
  title: 'Bounds of Accuracy · Interval on Number Line'
})
export const ASF_AbsoluteVsRelativeError = wrap(asf.AbsoluteVsRelativeError, {
  aspect: 'auto',
  title: 'Absolute vs Relative Error · Scale Contrast'
})
export const EstimationExample = wrap(asf.EstimationExample, {
  aspect: 'auto',
  title: 'Estimation · 198×32 vs 200×30 Area Comparison'
})
export const SigFigVsDecimalPlacesContrast = wrap(asf.SigFigVsDecimalPlacesContrast, {
  aspect: 'auto',
  title: 'Sig Figs vs Decimal Places · Side-by-Side Contrast'
})
export const ApproximationGap = wrap(asf.ApproximationGap, {
  aspect: 'auto',
  title: 'Approximation Gap · Exact vs Rounded on a Number Line'
})
export const ThreeReasonsPanel = wrap(asf.ThreeReasonsPanel, {
  aspect: 'auto',
  title: 'Three Reasons to Estimate · Side-by-Side'
})
export const RoundingRuleSnap = wrap(asf.RoundingRuleSnap, {
  aspect: 'auto',
  title: 'Round-Half-Up · Distance-Derived Rule'
})
export const AccuracyThresholdStrip = wrap(asf.AccuracyThresholdStrip, {
  aspect: 'auto',
  title: 'Accuracy Threshold · Excellent / Acceptable / Too Rough'
})

// MATHEMATICS · INTEGERS AND NEGATIVE NUMBERS
export const IAN_NumberLineSigned = wrap(ian.NumberLineSigned, {
  aspect: 'auto',
  title: 'Number Line: Real-World Contexts'
})
export const IAN_NumberLineAddJump = wrap(ian.NumberLineAddJump, {
  aspect: 'auto',
  title: 'Number Line: Interactive Addition Jump'
})
export const IAN_FourAdditionCases = wrap(ian.FourAdditionCases, {
  aspect: 'auto',
  title: 'Four Addition Cases: Small Multiples'
})
export const IAN_SequencePatternArgument = wrap(ian.SequencePatternArgument, {
  aspect: 'auto',
  title: 'Sequence Pattern: Why Minus Times Minus is Plus'
})
export const IAN_DistributiveProofWalk = wrap(ian.DistributiveProofWalk, {
  aspect: 'auto',
  title: 'Distributive Law Proof: 3·(−5) = −15'
})
export const IAN_EqualOpportunitiesGrid = wrap(ian.EqualOpportunitiesGrid, {
  aspect: 'auto',
  title: 'Equal Opportunities Grid'
})

// MATHEMATICS · ARITHMETIC · FACTORS AND MULTIPLES
// FAM.11-16 (FactorPairLadder, MultiplesGrid, DivisorCountParity, FactorMultipleArray,
// CommonMultiplesStrips, CommonFactorsOverlap) were migrated inline into
// src/features/explore/mathematics/arithmetic/factors-and-multiples.jsx as VizFigure-wrapped
// Fam_* functions during the viz refine, and removed from the catalog accordingly.

// MATHEMATICS · ARITHMETIC · HCF AND LCM
export const HCL_SharedMultiplesLine = wrap(hcl.HCL_SharedMultiplesLine, {
  aspect: 'auto',
  title: 'Shared Multiples · LCM of 4 and 6'
})
export const HCL_PrimeFactorVenn = wrap(hcl.HCL_PrimeFactorVenn, {
  aspect: 'auto',
  title: 'Prime Factor Venn · HCF and LCM of 56 and 96'
})
export const HCL_TwoFactorTrees = wrap(hcl.HCL_TwoFactorTrees, {
  aspect: 'auto',
  title: 'Two Factor Trees · Common Primes of 84 and 105'
})
export const HCL_EuclidSteps = wrap(hcl.HCL_EuclidSteps, {
  aspect: 'auto',
  title: 'Euclidean Algorithm · gcd(1560, 676)'
})
export const HCL_ProductRuleGrid = wrap(hcl.HCL_ProductRuleGrid, {
  aspect: 'auto',
  title: 'Product Rule · a × b = HCF × LCM'
})
export const HCL_MethodCompare = wrap(hcl.HCL_MethodCompare, {
  aspect: 'auto',
  title: 'Prime Power Table · HCF (min) and LCM (max)'
})
export const HCL_DivisorPairs = wrap(hcl.HCL_DivisorPairs, {
  aspect: 'auto',
  title: 'Divisor Pairs · Factor Pairs of 18'
})
export const HCL_CoprimeVenn = wrap(hcl.HCL_CoprimeVenn, {
  aspect: 'auto',
  title: 'Coprime Contrast · Empty vs Filled Intersection'
})
export const HCL_BezoutCombinationLine = wrap(hcl.HCL_BezoutCombinationLine, {
  aspect: 'auto',
  title: 'Bézout Combinations · gcd as Smallest Positive 6x + 4y'
})

// PHYSICS · DIRAC-BERGMANN CONSTRAINTS
export const ConstraintSurfaceDiagram = wrap(idbc.ConstraintSurfaceDiagram, {
  aspect: 'auto',
  title: 'Singular Legendre Map: The Primary Constraint Surface'
})
export const FirstVsSecondClassContrast = wrap(idbc.FirstVsSecondClassContrast, {
  aspect: 'auto',
  title: 'First Class vs Second Class'
})
export const GaugeOrbitSweep = wrap(idbc.GaugeOrbitSweep, {
  aspect: 'auto',
  title: 'Gauge Orbit Sweep: Arbitrary v(t), Same Physical State'
})
export const PhaseSpaceDimensionCount = wrap(idbc.PhaseSpaceDimensionCount, {
  aspect: 'auto',
  title: 'Counting Physical Degrees of Freedom'
})

// Part II: Lagrangian Mechanics
export const VirtualVsRealDisplacement = wrap(cm.VirtualVsRealDisplacement, {
  aspect: 'auto',
  title: 'Virtual vs Real Displacement'
})
export const ConstraintForceNormal = wrap(cm.ConstraintForceNormal, {
  aspect: 'auto',
  title: 'Constraint Force ⊥ Surface'
})
export const InclineVirtualWork = wrap(cm.InclineVirtualWork, {
  aspect: 'auto',
  title: 'Incline: Normal Force Does No Virtual Work'
})
export const ReversedEffectiveForce = wrap(cm.ReversedEffectiveForce, {
  aspect: 'auto',
  title: "D'Alembert: Reversed Effective Force"
})
export const BeadOnRotatingRod = wrap(cm.BeadOnRotatingRod, {
  aspect: 'auto',
  title: 'Bead on Rotating Tilted Rod'
})

// CLASSICAL MECHANICS · TIDES
export const TidalStretchSqueeze = wrap(cm.TidalStretchSqueeze, {
  aspect: 'auto',
  title: 'Tidal Stretch and Squeeze'
})

// CLASSICAL MECHANICS · VARIATIONAL PROBLEMS BEYOND MECHANICS
export const VariedPathAction = wrap(cm.VariedPathAction, {
  aspect: 'auto',
  title: 'Varied Paths and the Stationary Action'
})
export const GeodesicStraightLine = wrap(cm.GeodesicStraightLine, {
  aspect: 'auto',
  title: 'Shortest Path: The Straight Line'
})
export const CatenaryProfile = wrap(cm.CatenaryProfile, {
  aspect: 'auto',
  title: 'Minimum Surface of Revolution: The Catenary'
})
export const BrachistochroneCycloid = wrap(cm.BrachistochroneCycloid, {
  aspect: 'auto',
  title: 'The Brachistochrone: Fastest Descent'
})

// CLASSICAL MECHANICS · HOLONOMIC & NONHOLONOMIC CONSTRAINTS
export const HoopOnIncline = wrap(cm.HoopOnIncline, {
  aspect: 'auto',
  title: 'Hoop on an Incline · Rolling vs Slipping'
})
export const StrongFieldConfinement = wrap(cm.StrongFieldConfinement, {
  aspect: 'auto',
  title: 'Constraint as a Strong-Field Limit'
})
export const HolonomicVsNonholonomic = wrap(cm.HolonomicVsNonholonomic, {
  aspect: 'auto',
  title: 'Holonomic vs Nonholonomic'
})
export const ConstraintForceMultiplier = wrap(cm.ConstraintForceMultiplier, {
  aspect: 'auto',
  title: 'Lagrange Multiplier as Constraint Force'
})

// CLASSICAL MECHANICS · ROUTHIAN REDUCTION
export const KeplerEffectivePotential = wrap(cm.KeplerEffectivePotential, {
  aspect: 'auto',
  title: 'Kepler Effective Potential'
})
export const SymmetricTopPotential = wrap(cm.SymmetricTopPotential, {
  aspect: 'auto',
  title: 'Symmetric Top Effective Potential'
})
export const CyclicMomentumPhaseLine = wrap(cm.CyclicMomentumPhaseLine, {
  aspect: 'auto',
  title: 'Cyclic Momentum Phase Line'
})

// CLASSICAL MECHANICS · FRICTION & NON-CONSERVATIVE FORCES
export const RayleighDissipationFunction = wrap(cm.RayleighDissipationFunction, {
  aspect: 'auto',
  title: 'Rayleigh Dissipation Function'
})
export const DissipatedEnergyDecay = wrap(cm.DissipatedEnergyDecay, {
  aspect: 'auto',
  title: 'Dissipated Energy Decay'
})
export const DampedPhasePortrait = wrap(cm.DampedPhasePortrait, {
  aspect: 'auto',
  title: 'Damped Phase Portrait'
})
export const MassSpringDamperSim = wrap(cm.MassSpringDamperSim, {
  aspect: 'auto',
  title: 'Mass-Spring-Damper Simulation'
})

// PHYSICS · Magnetic Adiabatic Invariants
export const GyroOrbitMAI = wrap(cm.GyroOrbitMAI, {
  aspect: 'auto',
  title: 'Gyro-Orbit in Uniform B Field'
})
// Alias used by the feature file import
export const GyroOrbit = GyroOrbitMAI
export const MagMirrorBounce = wrap(cm.MagMirrorBounce, {
  aspect: 'auto',
  title: 'Magnetic Mirror Bounce'
})
// Alias used by the feature file import
export const MagneticMirrorBounce = MagMirrorBounce
export const MagneticMomentInvariance = wrap(cm.MagneticMomentInvariance, {
  aspect: 'auto',
  title: 'Magnetic Moment Invariance'
})
export const LossConeDiagram = wrap(cm.LossConeDiagram, {
  aspect: 'auto',
  title: 'Loss Cone Diagram'
})
// Alias used by the feature file import
export const LossCone = LossConeDiagram

// CLASSICAL MECHANICS · FLOQUET / MATHIEU / PARAMETRIC RESONANCE
export const MathieuStabilityChart = wrap(cm.MathieuStabilityChart, {
  aspect: 'auto',
  title: 'Mathieu Stability Chart'
})
export const FloquetMultiplierCircle = wrap(cm.FloquetMultiplierCircle, {
  aspect: 'auto',
  title: 'Floquet Multipliers on the Unit Circle'
})
export const ParametricGrowthPlot = wrap(cm.ParametricGrowthPlot, {
  aspect: 'auto',
  title: 'Parametric Resonance Growth'
})

// PHYSICS · POINCARÉ SECTIONS AND MAPS
export const StandardMap = wrap(cm.StandardMap, {
  aspect: 'auto',
  title: 'Standard (Chirikov-Taylor) Map'
})
export const TwistMapCircles = wrap(cm.TwistMapCircles, {
  aspect: 'auto',
  title: 'Twist Map: Rational vs Irrational Rotation'
})
export const PoincareSectionFlow = wrap(cm.PoincareSectionFlow, {
  aspect: 'auto',
  title: 'Poincaré Section: Henon-Heiles Flow'
})
export const PrecessingKeplerSection = wrap(cm.PrecessingKeplerSection, {
  aspect: 'auto',
  title: 'Precessing Kepler Poincaré Section'
})

// PHYSICS · FIXED POINTS, LIMIT CYCLES & POINCARÉ-BENDIXSON
export const TraceDetPlane = wrap(cm.TraceDetPlane, {
  aspect: 'auto',
  title: 'Trace-Determinant Classification Plane'
})
export const FixedPointPortraits = wrap(cm.FixedPointPortraits, {
  aspect: 'auto',
  title: 'Phase Portraits: Five Linear Fixed-Point Types'
})
export const NullclineExplorer = wrap(cm.NullclineExplorer, {
  aspect: 'auto',
  title: 'Nullclines and Fixed Points'
})
export const MapStabilityChart = wrap(cm.MapStabilityChart, {
  aspect: 'auto',
  title: 'Map Stability: |Tr A| < 2 Band (Fermi Map)'
})
export const LimitCycleVdP = wrap(cm.LimitCycleVdP, {
  aspect: 'auto',
  title: 'Van der Pol Limit Cycle'
})
export const HopfBifurcation = wrap(cm.HopfBifurcation, {
  aspect: 'auto',
  title: 'Hopf Bifurcation: Birth of a Limit Cycle'
})
export const PoincareBendixsonTrap = wrap(cm.PoincareBendixsonTrap, {
  aspect: 'auto',
  title: 'Poincaré-Bendixson Trapping Region'
})
export const PolarLimitCycle = wrap(cm.PolarLimitCycle, {
  aspect: 'auto',
  title: 'Polar Limit Cycle: Isolated Stable Orbit'
})
export const DivergenceFlowCompare = wrap(cm.DivergenceFlowCompare, {
  aspect: 'auto',
  title: 'Conservative vs. Dissipative: Center vs. Spiral'
})

// PHYSICS · CHAOS & NONLINEAR DYNAMICS · BIFURCATIONS
export const BifSaddleNode = wrap(cm.BifSaddleNode, {
  aspect: 'auto',
  title: 'Saddle-Node Bifurcation'
})
export const BifTranscritical = wrap(cm.BifTranscritical, {
  aspect: 'auto',
  title: 'Transcritical Bifurcation'
})
export const BifPitchfork = wrap(cm.BifPitchfork, {
  aspect: 'auto',
  title: 'Pitchfork Bifurcation'
})
export const BifPhaseLine = wrap(cm.BifPhaseLine, {
  aspect: 'auto',
  title: '1D Phase Line and Flow'
})
export const BifHopf = wrap(cm.BifHopf, { aspect: 'auto', title: 'Hopf Bifurcation' })
export const BifPeriodDoubling = wrap(cm.BifPeriodDoubling, {
  aspect: 'auto',
  title: 'Period-Doubling Bifurcation Diagram'
})
export const BifFermiIsland = wrap(cm.BifFermiIsland, {
  aspect: 'auto',
  title: 'Fermi-Map Island Structure'
})

// PHYSICS · CHAOS & NONLINEAR DYNAMICS · LYAPUNOV EXPONENTS
export const LyapSpectrum = wrap(cm.LyapSpectrum, {
  aspect: 'auto',
  title: 'Logistic Map Lyapunov Spectrum'
})
export const LyapDivergence = wrap(cm.LyapDivergence, {
  aspect: 'auto',
  title: 'Trajectory Divergence & Fitted Slope'
})
export const LyapThreeRegimes = wrap(cm.LyapThreeRegimes, {
  aspect: 'auto',
  title: 'Positive / Zero / Negative Exponent'
})
export const LyapRunningAverage = wrap(cm.LyapRunningAverage, {
  aspect: 'auto',
  title: 'Benettin Running Average Convergence'
})
export const LyapCatMap = wrap(cm.LyapCatMap, {
  aspect: 'auto',
  title: "Arnold's Cat Map Eigenstructure"
})

// PHYSICS · CHAOS & NONLINEAR DYNAMICS · ATTRACTORS
export const AttrStrangeAttractor = wrap(cm.AttrStrangeAttractor, {
  aspect: 'auto',
  title: 'Rössler Strange Attractor'
})

export const AttrHenonMap = wrap(cm.AttrHenonMap, { aspect: 'auto', title: 'Hénon Map Attractor' })

export const AttrCantorSet = wrap(cm.AttrCantorSet, {
  aspect: 'auto',
  title: 'Middle-Thirds Cantor Set'
})

export const AttrPhaseContraction = wrap(cm.AttrPhaseContraction, {
  aspect: 'auto',
  title: 'Phase-Volume Contraction'
})

// Chaos · Logistic Map & Feigenbaum Universality
export const CobwebDiagram = wrap(cm.CobwebDiagram, {
  aspect: 'auto',
  title: 'Logistic Map Cobweb Diagram'
})
export const BifurcationDiagram = wrap(cm.BifurcationDiagram, {
  aspect: 'auto',
  title: 'Logistic Map Bifurcation Diagram'
})
export const PeriodDoublingTree = wrap(cm.PeriodDoublingTree, {
  aspect: 'auto',
  title: 'Period-Doubling Tree 1 to 2 to 4 to 8'
})
export const FeigenbaumDelta = wrap(cm.FeigenbaumDelta, {
  aspect: 'auto',
  title: 'Feigenbaum Delta Convergence'
})
export const LogisticTimeSeries = wrap(cm.LogisticTimeSeries, {
  aspect: 'auto',
  title: 'Logistic Map Time Series'
})

// PHYSICS · CHAOS · FRACTAL DIMENSION (05.5.x)
export const FdBoxCounting = wrap(cm.FdBoxCounting, {
  aspect: 'auto',
  title: 'Box-Counting Dimension: log N vs log(1/ε)'
})
export const FdDimensionLadder = wrap(cm.FdDimensionLadder, {
  aspect: 'auto',
  title: 'Dimension Ladder: d_T < d_F < d_E'
})
export const FdSierpinskiConstruction = wrap(cm.FdSierpinskiConstruction, {
  aspect: 'auto',
  title: 'Sierpinski Carpet: Level Construction'
})
export const FdStrangeAttractorDim = wrap(cm.FdStrangeAttractorDim, {
  aspect: 'auto',
  title: 'Strange Attractor Dimension: 1 + λ₂/|λ₁|'
})
export const FdGeneralCantor = wrap(cm.FdGeneralCantor, {
  aspect: 'auto',
  title: 'General Cantor Set: d_f vs Removal Fraction'
})

export const AttrHenonHeilesPoincare = wrap(cm.AttrHenonHeilesPoincare, {
  aspect: 'auto',
  title: 'Hénon-Heiles Poincaré Section'
})

// PHYSICS · CLASSICAL MECHANICS V · HOMOCLINIC TANGLE & MELNIKOV
export const HtSeparatrixCases = wrap(cm.HtSeparatrixCases, {
  aspect: 'auto',
  title: 'Separatrix Splitting: Four Cases'
})
export const HtMelnikovDistance = wrap(cm.HtMelnikovDistance, {
  aspect: 'auto',
  title: 'Melnikov Distance Geometry'
})
export const HtDuffingPortrait = wrap(cm.HtDuffingPortrait, {
  aspect: 'auto',
  title: 'Duffing Phase Portrait: Figure-Eight Separatrix'
})
export const HtMelnikovSignChange = wrap(cm.HtMelnikovSignChange, {
  aspect: 'auto',
  title: 'Melnikov Distance vs t₀: Chaos Threshold'
})
export const HtDuffingThreshold = wrap(cm.HtDuffingThreshold, {
  aspect: 'auto',
  title: 'Duffing Chaos Threshold Curve δc(ω)'
})

export const HtTangleGeometry = wrap(cm.HtTangleGeometry, {
  aspect: 'auto',
  title: 'Homoclinic Tangle Geometry: Lobes and Intersections'
})
export const HtMelnikovSetup = wrap(cm.HtMelnikovSetup, {
  aspect: 'auto',
  title: 'Melnikov Setup: Separatrix Splitting in Time'
})
export const HtBifurcationRegimes = wrap(cm.HtBifurcationRegimes, {
  aspect: 'auto',
  title: 'Duffing Bifurcation Regimes (Schematic)'
})
export const HtStandardMapThreshold = wrap(cm.HtStandardMapThreshold, {
  aspect: 'auto',
  title: 'Standard Map Chaos Threshold δ_c vs Q₀'
})

// CLASSICAL MECHANICS · CONTINUUM LIMIT & WAVE EQUATION (06.2.x)
export const ChainOscillation = wrap(cm.ChainOscillation, {
  aspect: 'auto',
  title: 'Discrete Chain Normal Mode'
})
export const ContinuumLimitChain = wrap(cm.ContinuumLimitChain, {
  aspect: 'auto',
  title: 'Continuum Limit: Discrete to Field'
})
export const FiniteDifferenceToDerivative = wrap(cm.FiniteDifferenceToDerivative, {
  aspect: 'auto',
  title: 'Finite Difference Becomes Derivative'
})
export const TravelingWave = wrap(cm.TravelingWave, {
  aspect: 'auto',
  title: "D'Alembert Traveling Waves"
})
export const WaveSpeedVsModulus = wrap(cm.WaveSpeedVsModulus, {
  aspect: 'auto',
  title: 'Wave Speed vs Young Modulus'
})
export const LatticeDispersion = wrap(cm.LatticeDispersion, {
  aspect: 'auto',
  title: 'Lattice Dispersion: Discrete vs Continuum'
})

// PHYSICS · CLASSICAL MECHANICS VI · LAGRANGIAN DENSITY
export const LdRodDisplacementField = wrap(cm.LdRodDisplacementField, {
  aspect: 'auto',
  title: 'Rod Displacement Field η(x,t)'
})
export const LdDensityToTotal = wrap(cm.LdDensityToTotal, {
  aspect: 'auto',
  title: 'Density ℒ(x) and Total Lagrangian'
})
export const LdKineticVsPotentialDensity = wrap(cm.LdKineticVsPotentialDensity, {
  aspect: 'auto',
  title: 'Kinetic vs Potential Density'
})
export const LdVariedPaths = wrap(cm.LdVariedPaths, {
  aspect: 'auto',
  title: "Hamilton's Principle: Varied Paths"
})
export const LdSpacetimeSymmetry = wrap(cm.LdSpacetimeSymmetry, {
  aspect: 'auto',
  title: 'Space and Time on Equal Footing'
})
export const LdGaugeAmbiguity = wrap(cm.LdGaugeAmbiguity, {
  aspect: 'auto',
  title: 'Gauge Freedom of the Lagrangian Density'
})

// CLASSICAL MECHANICS · HAMILTONIAN FIELD THEORY (06.4.x)
export const MomentumDensityLimit = wrap(cm.MomentumDensityLimit, {
  aspect: 'auto',
  title: 'Momentum Density in the Continuum Limit'
})
export const HamiltonianDensityWave = wrap(cm.HamiltonianDensityWave, {
  aspect: 'auto',
  title: 'Hamiltonian Density of a Traveling Wave'
})
export const FieldPhasePortrait = wrap(cm.FieldPhasePortrait, {
  aspect: 'auto',
  title: 'Phase Portrait of a Fourier Mode'
})
export const FourierModeDecomp = wrap(cm.FourierModeDecomp, {
  aspect: 'auto',
  title: 'Fourier Mode Decomposition of a Field'
})
export const CanonicalFlowCircle = wrap(cm.CanonicalFlowCircle, {
  aspect: 'auto',
  title: 'Canonical Flow: Hamilton Vector Field'
})

// CLASSICAL MECHANICS · NOETHER FOR FIELDS (06.5.x)
export const NffContinuityCurrent = wrap(cm.NffContinuityCurrent, {
  aspect: 'auto',
  title: 'Conserved Current: Charge Advects by Boundary Flux'
})
// VIZ ADD PASS (A1–A10)
// A9 NffRealCurrent supersedes the former NffComplexPhaseRotation (same 06.5.2 slot).
export const KapitzaEffectivePotential = wrap(cm.KapitzaEffectivePotential, {
  aspect: 'auto',
  title: 'Kapitza effective-potential well'
})
export const KapitzaDrivenPivot = wrap(cm.KapitzaDrivenPivot, {
  aspect: 'auto',
  title: 'Kapitza driven-pivot pendulum'
})
export const SmallDenominatorStem = wrap(cm.SmallDenominatorStem, {
  aspect: 'auto',
  title: 'Small-denominator amplification'
})
export const CausticFoldingManifold = wrap(cm.CausticFoldingManifold, {
  aspect: 'auto',
  title: 'Caustic from a folding manifold'
})
export const SineGordonCollision = wrap(cm.SineGordonCollision, {
  aspect: 'auto',
  title: 'Sine-Gordon kink collision'
})
export const StressEnergyContinuity = wrap(cm.StressEnergyContinuity, {
  aspect: 'auto',
  title: 'Stress-energy tensor & continuity'
})
export const CrossSectionDensityMap = wrap(cm.CrossSectionDensityMap, {
  aspect: 'auto',
  title: 'Cross-section as a density map'
})
export const NormalModeDecomposition = wrap(cm.NormalModeDecomposition, {
  aspect: 'auto',
  title: 'Normal-mode decomposition'
})
export const NffRealCurrent = wrap(cm.NffRealCurrent, {
  aspect: 'auto',
  title: 'Noether current: real vs complex'
})
export const DoublePendulumTorus = wrap(cm.DoublePendulumTorus, {
  aspect: 'auto',
  title: 'Double pendulum on the 2-torus'
})
// end VIZ ADD PASS
export const NffEnergyMomentumTensor = wrap(cm.NffEnergyMomentumTensor, {
  aspect: 'auto',
  title: 'Energy-Momentum Tensor from a Scalar Field'
})
export const NffSymmetryToConservation = wrap(cm.NffSymmetryToConservation, {
  aspect: 'auto',
  title: 'Spatial Translation Symmetry Forces a Conserved Current'
})
export const NffDiscreteNoether = wrap(cm.NffDiscreteNoether, {
  aspect: 'auto',
  title: "Noether's Theorem for Discrete Systems: Jacobi Integral Conservation"
})

// CLASSICAL MECHANICS · HAMILTONIAN FIELD THEORY · REFINEMENT (06.6.x)
export const StressTensorTorque = wrap(cm.StressTensorTorque, {
  aspect: 'auto',
  title: 'Stress Tensor Torque: Antisymmetric Part Drives Angular Momentum Change'
})
export const ConservedChargeFlux = wrap(cm.ConservedChargeFlux, {
  aspect: 'auto',
  title: 'Conserved Charge Flux: Local Change, Global Conservation'
})
export const SymplecticVsMinkowski = wrap(cm.SymplecticVsMinkowski, {
  aspect: 'auto',
  title: 'Symplectic Area vs Minkowski Interval: Antisymmetric vs Symmetric Structure'
})

// CLASSICAL MECHANICS · KORTEWEG-DE VRIES & SOLITONS (06.7.x)
export const KdvSoliton = wrap(cm.KdvSoliton, {
  aspect: 'auto',
  title: 'Single Soliton: Amplitude, Speed, and Width All Set by c'
})
export const KdvAmplitudeSpeedWidth = wrap(cm.KdvAmplitudeSpeedWidth, {
  aspect: 'auto',
  title: 'Amplitude–Speed–Width Coupling: Three Quantities, One Parameter'
})
export const KdvDispersionVsNonlinearity = wrap(cm.KdvDispersionVsNonlinearity, {
  aspect: 'auto',
  title: 'Dispersion vs Nonlinearity: Balance Point Gives the Soliton'
})
export const KdvCnoidalWave = wrap(cm.KdvCnoidalWave, {
  aspect: 'auto',
  title: 'Cnoidal Wave: Modulus m Morphs Cosine to Soliton Train'
})
export const KdvConservationLaws = wrap(cm.KdvConservationLaws, {
  aspect: 'auto',
  title: 'Conservation Law Densities: Each I_s a Different Power of u'
})

export const KdvCubicZeroCases = wrap(cm.KdvCubicZeroCases, {
  aspect: 'auto',
  title: 'F(f) Cubic Zero Structure: Slider Merges Roots from Cnoidal to Soliton'
})
export const KdvTwoSolitonCollision = wrap(cm.KdvTwoSolitonCollision, {
  aspect: 'auto',
  title: 'Two-Soliton Elastic Collision: Phase Shift via Exact Hirota Solution'
})

// CLASSICAL MECHANICS · SINE-GORDON & SOLITONS (06.8.x)
export const SgPendulumChain = wrap(cm.SgPendulumChain, {
  aspect: 'auto',
  title: 'Pendulum Chain Kink: 2π Twist Along the Chain'
})
export const SgKink = wrap(cm.SgKink, {
  aspect: 'auto',
  title: 'Kink Profile and Gradient: Lorentz Contraction with Velocity'
})
export const SgPotentialVacua = wrap(cm.SgPotentialVacua, {
  aspect: 'auto',
  title: 'Washboard Potential and the Kink Field'
})
export const SgKinkAntikink = wrap(cm.SgKinkAntikink, {
  aspect: 'auto',
  title: 'Kink vs Antikink: Opposite Topological Charges'
})
export const SgBreather = wrap(cm.SgBreather, {
  aspect: 'auto',
  title: 'Breather: Oscillating Kink-Antikink Bound State'
})
export const SgCnoidalWave = wrap(cm.SgCnoidalWave, {
  aspect: 'auto',
  title: 'Cnoidal Wave: Jacobi-Elliptic cn Solution'
})

// CLASSICAL MECHANICS · VISCOUS FLUIDS & NAVIER-STOKES (06.9.x)
export const NsCouetteFlow = wrap(cm.NsCouetteFlow, {
  aspect: 'auto',
  title: 'Couette Flow: Linear Velocity Profile'
})
export const NsPoiseuilleFlow = wrap(cm.NsPoiseuilleFlow, {
  aspect: 'auto',
  title: 'Poiseuille Flow: Parabolic Velocity Profile in a Pipe'
})
export const NsStrainRateDecomp = wrap(cm.NsStrainRateDecomp, {
  aspect: 'auto',
  title: 'Velocity Gradient Decomposed: Expansion, Shear, Rotation'
})
export const NsReynoldsRegimes = wrap(cm.NsReynoldsRegimes, {
  aspect: 'auto',
  title: 'Reynolds Regime Map: C_D vs Re for Flow Past a Cylinder'
})
export const NsStokesDrag = wrap(cm.NsStokesDrag, {
  aspect: 'auto',
  title: 'Stokes Drag: F = 6πηav, Creeping-Flow Streamlines'
})
export const NsBlasiusLayer = wrap(cm.NsBlasiusLayer, {
  aspect: 'auto',
  title: 'Blasius Boundary Layer: Velocity Profile from rk4 Integration'
})
export const NsKolmogorovSpectrum = wrap(cm.NsKolmogorovSpectrum, {
  aspect: 'auto',
  title: 'Kolmogorov −5/3 Energy Spectrum: Inertial-Range Scaling Law'
})

// CLASSICAL MECHANICS · LINEAR ELASTICITY
export const CM_LE_StrainDecomposition = wrap(cm.CM_LE_StrainDecomposition, {
  aspect: 'auto',
  title: 'Strain Decomposition: Expansion, Rotation, Shear'
})
export const CM_LE_ShearEllipse = wrap(cm.CM_LE_ShearEllipse, {
  aspect: 'auto',
  title: 'Shear Ellipse: Pure Σ Deformation at Constant Area'
})
export const CM_LE_StressTraction = wrap(cm.CM_LE_StressTraction, {
  aspect: 'auto',
  title: 'Stress Traction on a Tilted Surface'
})
export const CM_LE_HookeCurve = wrap(cm.CM_LE_HookeCurve, {
  aspect: 'auto',
  title: 'Hooke Stress-Strain Curve: Four Landmark Points'
})
export const CM_LE_PoissonEffect = wrap(cm.CM_LE_PoissonEffect, {
  aspect: 'auto',
  title: 'Poisson Effect: Rod Contraction vs ν'
})
export const CM_LE_ModuliRelations = wrap(cm.CM_LE_ModuliRelations, {
  aspect: 'auto',
  title: 'Elastic Moduli: ν Stability Constraint Number Line'
})
export const CM_LE_BeamDeflection = wrap(cm.CM_LE_BeamDeflection, {
  aspect: 'auto',
  title: 'Cantilever Beam Deflection η(x) under Load'
})
export const CM_LE_Buckling = wrap(cm.CM_LE_Buckling, {
  aspect: 'auto',
  title: 'Euler Buckling: Pitchfork Bifurcation Diagram'
})
export const CM_LE_PressurizedPipe = wrap(cm.CM_LE_PressurizedPipe, {
  aspect: 'auto',
  title: 'Pressurized Pipe: Radial Displacement and Hoop Strain'
})
export const CM_LE_StrainEnergyBowl = wrap(cm.CM_LE_StrainEnergyBowl, {
  aspect: 'auto',
  title: 'Strain Energy Density: Elliptic Contours in (Θ, |Σ|) Space'
})
export const CM_LE_ThermoStressLine = wrap(cm.CM_LE_ThermoStressLine, {
  aspect: 'auto',
  title: 'Thermal Stress vs. ΔT for a Constrained Rod'
})
export const CM_LE_NavierForces = wrap(cm.CM_LE_NavierForces, {
  aspect: 'auto',
  title: 'Navier-Cauchy: P-wave vs S-wave Displacement Fields'
})
export const CM_LE_BasisVectors = wrap(cm.CM_LE_BasisVectors, {
  aspect: 'auto',
  title: 'Rotating Basis Vectors in Cylindrical Coordinates'
})

// PHYSICS · IDEAL FLUIDS AND THE EULER EQUATIONS (06.11.x)
// IDEAL FLUIDS: VizFigure wrappers for src/components/viz/index.jsx
// Append after the last existing cm.* export block
// cm and VizFigure are already in scope.

export const IdFlowMaterialDeriv = wrap(cm.IdFlowMaterialDeriv, {
  aspect: 'auto',
  title: 'Lagrangian vs Eulerian: Material Derivative'
})

export const IdFlowContinuity = wrap(cm.IdFlowContinuity, {
  aspect: 'auto',
  title: 'Continuity in a Streamtube'
})

export const IdFlowEulerForce = wrap(cm.IdFlowEulerForce, {
  aspect: 'auto',
  title: 'Euler Equation: Force Balance on a Fluid Element'
})

export const IdFlowVenturi = wrap(cm.IdFlowVenturi, {
  aspect: 'auto',
  title: 'Bernoulli and Venturi: Pressure-Speed Tradeoff'
})

export const IdFlowPotentialCylinder = wrap(cm.IdFlowPotentialCylinder, {
  aspect: 'auto',
  title: "Potential Flow Past a Cylinder: d'Alembert's Paradox"
})

export const IdFlowSourceSinkVortex = wrap(cm.IdFlowSourceSinkVortex, {
  aspect: 'auto',
  title: 'Source, Sink, and Vortex: Potential Flow Building Blocks'
})

export const IdFlowVorticity = wrap(cm.IdFlowVorticity, {
  aspect: 'auto',
  title: 'Irrotational vs Rotational Flow: Paddle-Wheel Vorticity Test'
})

export const IdFlowVortexStretch = wrap(cm.IdFlowVortexStretch, {
  aspect: 'auto',
  title: 'Vortex-Line Stretching and Tornado Spin-Up'
})

export const IdFlowKelvinLoop = wrap(cm.IdFlowKelvinLoop, {
  aspect: 'auto',
  title: "Kelvin's Circulation Loop: Conservation in Ideal Flow"
})

export const IdFlowHydrostatic = wrap(cm.IdFlowHydrostatic, {
  aspect: 'auto',
  title: 'Hydrostatic Pressure vs Depth and Archimedes Buoyancy'
})

export const IdFlowSound = wrap(cm.IdFlowSound, {
  aspect: 'auto',
  title: 'Sound Wave: 1D Pressure Perturbation Propagating'
})

// PHYSICS · The Science of Mechanics - Statics
export const SomLeverBalance = wrap(cm.SomLeverBalance, {
  aspect: 'auto',
  title: 'The Lever: Moments in Balance'
})
export const SomInclinedPlane = wrap(cm.SomInclinedPlane, {
  aspect: 'auto',
  title: 'Inclined Plane: Along-Slope Force Component'
})
export const SomStevinChain = wrap(cm.SomStevinChain, {
  aspect: 'auto',
  title: "Stevin's Endless Chain on a Double Incline"
})
export const SomParallelogramForces = wrap(cm.SomParallelogramForces, {
  aspect: 'auto',
  title: 'Parallelogram of Forces: Resultant and Direction'
})
export const SomVirtualWorkPulley = wrap(cm.SomVirtualWorkPulley, {
  aspect: 'auto',
  title: 'Virtual Work: Differential Pulley and Wheel-and-Axle'
})
export const SomWheelAxle = wrap(cm.SomWheelAxle, {
  aspect: 'auto',
  title: 'Wheel and Axle: Mechanical Advantage'
})
export const SomThreeStringEquilibrium = wrap(cm.SomThreeStringEquilibrium, {
  aspect: 'auto',
  title: 'Three-String Equilibrium at 120°'
})
export const SomEllipsoidStability = wrap(cm.SomEllipsoidStability, {
  aspect: 'auto',
  title: 'Ellipsoid: Stable, Unstable, and Indifferent Equilibrium'
})
export const SomCatenary = wrap(cm.SomCatenary, {
  aspect: 'auto',
  title: 'Catenary: Lowest Center of Gravity for a Hanging Chain'
})

// CHEMISTRY · UNIT 01 · ATOMIC STRUCTURE & PERIODICITY
export const RutherfordScatteringViz = wrap(chem.RutherfordScatteringViz, {
  aspect: 'auto',
  title: 'Rutherford Scattering'
})
export const BalmerSeriesViz = wrap(chem.BalmerSeriesViz, {
  aspect: 'auto',
  title: 'Balmer Series'
})
export const GrotrianLadderViz = wrap(chem.GrotrianLadderViz, {
  aspect: 'auto',
  title: 'Grotrian Ladder'
})
export const PlanckCurvesViz = wrap(chem.PlanckCurvesViz, {
  aspect: 'auto',
  title: 'Planck Curves'
})
export const PhotoelectricViz = wrap(chem.PhotoelectricViz, {
  aspect: 'auto',
  title: 'Photoelectric'
})
export const HydrogenWavefunctionViz = wrap(chem.HydrogenWavefunctionViz, {
  aspect: 'auto',
  title: 'Hydrogen Wavefunction'
})
export const ParticleInBoxViz = wrap(chem.ParticleInBoxViz, {
  aspect: 'auto',
  title: 'Particle In Box'
})
export const HydrogenEnergyLevelsViz = wrap(chem.HydrogenEnergyLevelsViz, {
  aspect: 'auto',
  title: 'Hydrogen Energy Levels'
})
export const RadialDistributionViz = wrap(chem.RadialDistributionViz, {
  aspect: 'auto',
  title: 'Radial Distribution'
})
export const IsotopesMassSpectrumViz = wrap(chem.IsotopesMassSpectrumViz, {
  aspect: 'auto',
  title: 'Isotopes Mass Spectrum'
})
export const IonizationEnergyTrendViz = wrap(chem.IonizationEnergyTrendViz, {
  aspect: 'auto',
  title: 'Ionization Energy Trend'
})
export const SuccessiveIonizationViz = wrap(chem.SuccessiveIonizationViz, {
  aspect: 'auto',
  title: 'Successive Ionization'
})
export const AtomicRadiusTrendViz = wrap(chem.AtomicRadiusTrendViz, {
  aspect: 'auto',
  title: 'Atomic Radius Trend'
})
export const EffectiveNuclearChargeViz = wrap(chem.EffectiveNuclearChargeViz, {
  aspect: 'auto',
  title: 'Effective Nuclear Charge'
})
export const ShieldingPenetrationViz = wrap(chem.ShieldingPenetrationViz, {
  aspect: 'auto',
  title: 'Shielding Penetration'
})
export const POrbitalDensityViz = wrap(chem.POrbitalDensityViz, {
  aspect: 'auto',
  title: 'P Orbital Density'
})
export const DeBroglieViz = wrap(chem.DeBroglieViz, { aspect: 'auto', title: 'De Broglie' })
export const HeisenbergViz = wrap(chem.HeisenbergViz, { aspect: 'auto', title: 'Heisenberg' })
export const QuantumNumberTreeViz = wrap(chem.QuantumNumberTreeViz, {
  aspect: 'auto',
  title: 'Quantum Number Tree'
})
export const AufbauViz = wrap(chem.AufbauViz, { aspect: 'auto', title: 'Aufbau' })
export const ElectronegativityTrendViz = wrap(chem.ElectronegativityTrendViz, {
  aspect: 'auto',
  title: 'Electronegativity Trend'
})
export const ElectronAffinityTrendViz = wrap(chem.ElectronAffinityTrendViz, {
  aspect: 'auto',
  title: 'Electron Affinity Trend'
})
export const SternGerlachViz = wrap(chem.SternGerlachViz, {
  aspect: 'auto',
  title: 'Stern Gerlach'
})
export const DiagonalRelationshipsViz = wrap(chem.DiagonalRelationshipsViz, {
  aspect: 'auto',
  title: 'Diagonal Relationships'
})
export const InertPairViz = wrap(chem.InertPairViz, { aspect: 'auto', title: 'Inert Pair' })
export const HartreeFockSCFViz = wrap(chem.HartreeFockSCFViz, {
  aspect: 'auto',
  title: 'Hartree Fock SCF'
})

// CHEMISTRY · UNIT 02 · BONDING & STRUCTURE
export const IonicBondBornMayerViz = wrap(chem.IonicBondBornMayerViz, {
  aspect: 'auto',
  title: 'Ionic Bond Born Mayer'
})
export const MolecularDipoleViz = wrap(chem.MolecularDipoleViz, {
  aspect: 'auto',
  title: 'Molecular Dipole'
})
export const BondingAntibondingViz = wrap(chem.BondingAntibondingViz, {
  aspect: 'auto',
  title: 'Bonding Antibonding'
})
export const MOCorrelationViz = wrap(chem.MOCorrelationViz, {
  aspect: 'auto',
  title: 'MO Correlation'
})
export const RadiusRatioViz = wrap(chem.RadiusRatioViz, { aspect: 'auto', title: 'Radius Ratio' })
export const BondPolarityViz = wrap(chem.BondPolarityViz, {
  aspect: 'auto',
  title: 'Bond Polarity'
})
export const DispersionBoilingViz = wrap(chem.DispersionBoilingViz, {
  aspect: 'auto',
  title: 'Dispersion Boiling'
})
export const IonicRadiiViz = wrap(chem.IonicRadiiViz, { aspect: 'auto', title: 'Ionic Radii' })
export const PiOverlapDistanceViz = wrap(chem.PiOverlapDistanceViz, {
  aspect: 'auto',
  title: 'Pi Overlap Distance'
})

// CHEMISTRY · UNIT 03 · ENERGETICS & THERMODYNAMICS
export const ExpansionWorkViz = wrap(chem.ExpansionWorkViz, {
  aspect: 'auto',
  title: 'Expansion Work'
})
export const HeatingCurveViz = wrap(chem.HeatingCurveViz, {
  aspect: 'auto',
  title: 'Heating Curve'
})
export const AdiabatIsothermViz = wrap(chem.AdiabatIsothermViz, {
  aspect: 'auto',
  title: 'Adiabat Isotherm'
})
export const CoulombIonPairViz = wrap(chem.CoulombIonPairViz, {
  aspect: 'auto',
  title: 'Coulomb Ion Pair'
})
export const MadelungChainViz = wrap(chem.MadelungChainViz, {
  aspect: 'auto',
  title: 'Madelung Chain'
})
export const BornHaberViz = wrap(chem.BornHaberViz, { aspect: 'auto', title: 'Born Haber' })
export const GibbsCrossoverViz = wrap(chem.GibbsCrossoverViz, {
  aspect: 'auto',
  title: 'Gibbs Crossover'
})
export const LatticeEnergyTrendViz = wrap(chem.LatticeEnergyTrendViz, {
  aspect: 'auto',
  title: 'Lattice Energy Trend'
})
export const TroutonRuleViz = wrap(chem.TroutonRuleViz, { aspect: 'auto', title: 'Trouton Rule' })
export const HeatCapacityDOFViz = wrap(chem.HeatCapacityDOFViz, {
  aspect: 'auto',
  title: 'Heat Capacity DOF'
})
export const HessLawViz = wrap(chem.HessLawViz, { aspect: 'auto', title: 'Hess Law' })
export const PhaseEquilibriumGibbsViz = wrap(chem.PhaseEquilibriumGibbsViz, {
  aspect: 'auto',
  title: 'Phase Equilibrium Gibbs'
})
export const BoltzmannEntropyViz = wrap(chem.BoltzmannEntropyViz, {
  aspect: 'auto',
  title: 'Boltzmann Entropy'
})
export const ResidualEntropyViz = wrap(chem.ResidualEntropyViz, {
  aspect: 'auto',
  title: 'Residual Entropy'
})
export const BondEnthalpyAccountingViz = wrap(chem.BondEnthalpyAccountingViz, {
  aspect: 'auto',
  title: 'Bond Enthalpy Accounting'
})
export const SystemTypesViz = wrap(chem.SystemTypesViz, { aspect: 'auto', title: 'System Types' })
export const TwoBlockEntropyViz = wrap(chem.TwoBlockEntropyViz, {
  aspect: 'auto',
  title: 'Two Block Entropy'
})
export const EntropyChangeViz = wrap(chem.EntropyChangeViz, {
  aspect: 'auto',
  title: 'Entropy Change'
})
export const ATPCouplingViz = wrap(chem.ATPCouplingViz, { aspect: 'auto', title: 'ATP Coupling' })
export const LatticeCovalencyViz = wrap(chem.LatticeCovalencyViz, {
  aspect: 'auto',
  title: 'Lattice Covalency'
})
export const MadelungConstantsViz = wrap(chem.MadelungConstantsViz, {
  aspect: 'auto',
  title: 'Madelung Constants'
})

// CHEMISTRY · UNIT 04 · KINETICS
export const MaxwellBoltzmannViz = wrap(chem.MaxwellBoltzmannViz, {
  aspect: 'auto',
  title: 'Maxwell-Boltzmann Distribution · Energy and Temperature'
})
export const ReactionEnergyViz = wrap(chem.ReactionEnergyViz, {
  aspect: 'auto',
  title: 'Reaction-Energy Diagram · Reactants to Products'
})
export const CatalystEnergyViz = wrap(chem.CatalystEnergyViz, {
  aspect: 'auto',
  title: 'Catalyst on a Reaction-Energy Diagram'
})
export const RateTangentViz = wrap(chem.RateTangentViz, { aspect: 'auto', title: 'Rate Tangent' })
export const IntegratedRateLawsViz = wrap(chem.IntegratedRateLawsViz, {
  aspect: 'auto',
  title: 'Integrated Rate Laws'
})
export const OrderDiagnosisViz = wrap(chem.OrderDiagnosisViz, {
  aspect: 'auto',
  title: 'Order Diagnosis'
})
export const ArrheniusViz = wrap(chem.ArrheniusViz, { aspect: 'auto', title: 'Arrhenius' })
export const TwoStepRDSViz = wrap(chem.TwoStepRDSViz, { aspect: 'auto', title: 'Two Step RDS' })
export const HalfLifeOrderViz = wrap(chem.HalfLifeOrderViz, {
  aspect: 'auto',
  title: 'Half Life Order'
})

// CHEMISTRY · UNIT 05 · CHEMICAL EQUILIBRIUM
export const ApproachToEquilibriumViz = wrap(chem.ApproachToEquilibriumViz, {
  aspect: 'auto',
  title: 'Approach To Equilibrium'
})
export const GibbsExtentViz = wrap(chem.GibbsExtentViz, { aspect: 'auto', title: 'Gibbs Extent' })
export const VantHoffViz = wrap(chem.VantHoffViz, { aspect: 'auto', title: 'Vant Hoff' })
export const LeChatelierViz = wrap(chem.LeChatelierViz, { aspect: 'auto', title: 'Le Chatelier' })
export const QvsKViz = wrap(chem.QvsKViz, { aspect: 'auto', title: 'Qvs K' })
export const DissociationAlphaViz = wrap(chem.DissociationAlphaViz, {
  aspect: 'auto',
  title: 'Dissociation Alpha'
})
export const HemoglobinSaturationViz = wrap(chem.HemoglobinSaturationViz, {
  aspect: 'auto',
  title: 'Hemoglobin Saturation'
})

// CHEMISTRY · UNIT 06 · ACID-BASE & AQUEOUS EQUILIBRIA
export const PHScaleViz = wrap(chem.PHScaleViz, { aspect: 'auto', title: 'PH Scale' })
export const SpeciationViz = wrap(chem.SpeciationViz, { aspect: 'auto', title: 'Speciation' })
export const HendersonHasselbalchViz = wrap(chem.HendersonHasselbalchViz, {
  aspect: 'auto',
  title: 'Henderson Hasselbalch'
})
export const StrongWeakTitrationViz = wrap(chem.StrongWeakTitrationViz, {
  aspect: 'auto',
  title: 'Strong Weak Titration'
})
export const PolyproticTitrationViz = wrap(chem.PolyproticTitrationViz, {
  aspect: 'auto',
  title: 'Polyprotic Titration'
})
export const CommonIonSolubilityViz = wrap(chem.CommonIonSolubilityViz, {
  aspect: 'auto',
  title: 'Common Ion Solubility'
})
export const SelectivePrecipitationViz = wrap(chem.SelectivePrecipitationViz, {
  aspect: 'auto',
  title: 'Selective Precipitation'
})
export const KwHyperbolaViz = wrap(chem.KwHyperbolaViz, { aspect: 'auto', title: 'Kw Hyperbola' })
export const OstwaldDilutionViz = wrap(chem.OstwaldDilutionViz, {
  aspect: 'auto',
  title: 'Ostwald Dilution'
})
export const OxoacidStrengthViz = wrap(chem.OxoacidStrengthViz, {
  aspect: 'auto',
  title: 'Oxoacid Strength'
})
export const MolarSolubilityTypeViz = wrap(chem.MolarSolubilityTypeViz, {
  aspect: 'auto',
  title: 'Molar Solubility Type'
})
export const SolubilityPHViz = wrap(chem.SolubilityPHViz, {
  aspect: 'auto',
  title: 'Solubility PH'
})
export const QvsKspViz = wrap(chem.QvsKspViz, { aspect: 'auto', title: 'Qvs Ksp' })
export const BufferCapacityViz = wrap(chem.BufferCapacityViz, {
  aspect: 'auto',
  title: 'Buffer Capacity'
})
export const KaPkbLadderViz = wrap(chem.KaPkbLadderViz, { aspect: 'auto', title: 'Ka Pkb Ladder' })
export const DiluteAutoprotolysisViz = wrap(chem.DiluteAutoprotolysisViz, {
  aspect: 'auto',
  title: 'Dilute Autoprotolysis'
})
export const SaltHydrolysisMapViz = wrap(chem.SaltHydrolysisMapViz, {
  aspect: 'auto',
  title: 'Salt Hydrolysis Map'
})
export const SaltPHParentStrengthViz = wrap(chem.SaltPHParentStrengthViz, {
  aspect: 'auto',
  title: 'Salt PH Parent Strength'
})

// CHEMISTRY · UNIT 07 · REDOX & ELECTROCHEMISTRY
export const DaniellCellViz = wrap(chem.DaniellCellViz, { aspect: 'auto', title: 'Daniell Cell' })
export const StandardPotentialLadderViz = wrap(chem.StandardPotentialLadderViz, {
  aspect: 'auto',
  title: 'Standard Potential Ladder'
})
export const NernstViz = wrap(chem.NernstViz, { aspect: 'auto', title: 'Nernst' })
export const LatimerViz = wrap(chem.LatimerViz, { aspect: 'auto', title: 'Latimer' })
export const FaradayViz = wrap(chem.FaradayViz, { aspect: 'auto', title: 'Faraday' })
export const WaterSplitOverpotentialViz = wrap(chem.WaterSplitOverpotentialViz, {
  aspect: 'auto',
  title: 'Water Split Overpotential'
})
export const CorrosionCellViz = wrap(chem.CorrosionCellViz, {
  aspect: 'auto',
  title: 'Corrosion Cell'
})
export const ConcentrationCellViz = wrap(chem.ConcentrationCellViz, {
  aspect: 'auto',
  title: 'Concentration Cell'
})
export const LnKvsEViz = wrap(chem.LnKvsEViz, { aspect: 'auto', title: 'Ln Kvs E' })
export const DeltaGSignMapViz = wrap(chem.DeltaGSignMapViz, {
  aspect: 'auto',
  title: 'Delta G Sign Map'
})

// CHEMISTRY · UNIT 08 · COORDINATION & SPECTROSCOPY
export const CrystalFieldSplittingViz = wrap(chem.CrystalFieldSplittingViz, {
  aspect: 'auto',
  title: 'Crystal Field Splitting'
})
export const SpectrochemicalSeriesViz = wrap(chem.SpectrochemicalSeriesViz, {
  aspect: 'auto',
  title: 'Spectrochemical Series'
})
export const LFSEDoubleHumpViz = wrap(chem.LFSEDoubleHumpViz, {
  aspect: 'auto',
  title: 'LFSE Double Hump'
})
export const BeerLambertViz = wrap(chem.BeerLambertViz, { aspect: 'auto', title: 'Beer Lambert' })
export const RigidRotorViz = wrap(chem.RigidRotorViz, { aspect: 'auto', title: 'Rigid Rotor' })
export const HarmonicMorseViz = wrap(chem.HarmonicMorseViz, {
  aspect: 'auto',
  title: 'Harmonic Morse'
})
export const BirgeSponerViz = wrap(chem.BirgeSponerViz, { aspect: 'auto', title: 'Birge Sponer' })
export const VibRotBranchesViz = wrap(chem.VibRotBranchesViz, {
  aspect: 'auto',
  title: 'Vib Rot Branches'
})
export const FranckCondonViz = wrap(chem.FranckCondonViz, {
  aspect: 'auto',
  title: 'Franck Condon'
})
export const JablonskiViz = wrap(chem.JablonskiViz, { aspect: 'auto', title: 'Jablonski' })
export const NMREthanolViz = wrap(chem.NMREthanolViz, { aspect: 'auto', title: 'NMR Ethanol' })
export const FIDFTViz = wrap(chem.FIDFTViz, { aspect: 'auto', title: 'FIDFT' })
export const EPRMethylViz = wrap(chem.EPRMethylViz, { aspect: 'auto', title: 'EPR Methyl' })
export const SpinOnlyMomentViz = wrap(chem.SpinOnlyMomentViz, {
  aspect: 'auto',
  title: 'Spin Only Moment'
})
export const CFSEViz = wrap(chem.CFSEViz, { aspect: 'auto', title: 'CFSE' })
export const ZeemanLarmorViz = wrap(chem.ZeemanLarmorViz, {
  aspect: 'auto',
  title: 'Zeeman Larmor'
})
export const KarplusViz = wrap(chem.KarplusViz, { aspect: 'auto', title: 'Karplus' })
export const T1T2Viz = wrap(chem.T1T2Viz, { aspect: 'auto', title: 'T1 T2' })
export const DopplerLifetimeViz = wrap(chem.DopplerLifetimeViz, {
  aspect: 'auto',
  title: 'Doppler Lifetime'
})
export const IrvingWilliamsViz = wrap(chem.IrvingWilliamsViz, {
  aspect: 'auto',
  title: 'Irving Williams'
})
export const SquarePlanarSplittingViz = wrap(chem.SquarePlanarSplittingViz, {
  aspect: 'auto',
  title: 'Square Planar Splitting'
})
export const HighLowSpinViz = wrap(chem.HighLowSpinViz, { aspect: 'auto', title: 'High Low Spin' })
export const EMSpectrumViz = wrap(chem.EMSpectrumViz, { aspect: 'auto', title: 'EM Spectrum' })
export const CO2NormalModesViz = wrap(chem.CO2NormalModesViz, {
  aspect: 'auto',
  title: 'CO2 Normal Modes'
})
export const CrystalFieldWavelengthViz = wrap(chem.CrystalFieldWavelengthViz, {
  aspect: 'auto',
  title: 'Crystal Field Wavelength'
})
export const TiWaterBandViz = wrap(chem.TiWaterBandViz, { aspect: 'auto', title: 'Ti Water Band' })
export const DDvsChargeTransferViz = wrap(chem.DDvsChargeTransferViz, {
  aspect: 'auto',
  title: 'D Dvs Charge Transfer'
})
export const DOrbitalAngularDensityViz = wrap(chem.DOrbitalAngularDensityViz, {
  aspect: 'auto',
  title: 'D Orbital Angular Density'
})
export const JahnTellerViz = wrap(chem.JahnTellerViz, { aspect: 'auto', title: 'Jahn Teller' })
export const CentrifugalDistortionViz = wrap(chem.CentrifugalDistortionViz, {
  aspect: 'auto',
  title: 'Centrifugal Distortion'
})
export const RotationalRamanViz = wrap(chem.RotationalRamanViz, {
  aspect: 'auto',
  title: 'Rotational Raman'
})
export const NuclearSpinIntensityViz = wrap(chem.NuclearSpinIntensityViz, {
  aspect: 'auto',
  title: 'Nuclear Spin Intensity'
})
export const MetalCarbonylCOViz = wrap(chem.MetalCarbonylCOViz, {
  aspect: 'auto',
  title: 'Metal Carbonyl CO'
})
export const FourLevelLaserViz = wrap(chem.FourLevelLaserViz, {
  aspect: 'auto',
  title: 'Four Level Laser'
})
export const SpectrometerBlockViz = wrap(chem.SpectrometerBlockViz, {
  aspect: 'auto',
  title: 'Spectrometer Block'
})

// CHEMISTRY · UNIT 09 · ANALYTICAL & SPECTROSCOPY
export const IndicatorSelectionViz = wrap(chem.IndicatorSelectionViz, {
  aspect: 'auto',
  title: 'Indicator Selection'
})
export const CombustionAnalysisViz = wrap(chem.CombustionAnalysisViz, {
  aspect: 'auto',
  title: 'Combustion Analysis'
})
export const H2SSpeciationViz = wrap(chem.H2SSpeciationViz, {
  aspect: 'auto',
  title: 'H2 S Speciation'
})
export const ComplexSolubilityViz = wrap(chem.ComplexSolubilityViz, {
  aspect: 'auto',
  title: 'Complex Solubility'
})

// CHEMISTRY · UNIT 10 · INDUSTRIAL & SUSTAINABLE CHEMISTRY
export const HaberYieldViz = wrap(chem.HaberYieldViz, { aspect: 'auto', title: 'Haber Yield' })
export const EquilibriumKineticsCrossoverViz = wrap(chem.EquilibriumKineticsCrossoverViz, {
  aspect: 'auto',
  title: 'Equilibrium Kinetics Crossover'
})
export const AtomEconomyViz = wrap(chem.AtomEconomyViz, { aspect: 'auto', title: 'Atom Economy' })
export const SupercriticalCO2Viz = wrap(chem.SupercriticalCO2Viz, {
  aspect: 'auto',
  title: 'Supercritical CO2'
})
export const HybridizationInterferenceViz = wrap(chem.HybridizationInterferenceViz, {
  aspect: 'auto',
  title: 'Hybridization Interference'
})
export const ElectrolyticCellViz = wrap(chem.ElectrolyticCellViz, {
  aspect: 'auto',
  title: 'Electrolytic Cell'
})
export const CompetingReactionsViz = wrap(chem.CompetingReactionsViz, {
  aspect: 'auto',
  title: 'Competing Reactions'
})
export const ChromophoreUVVisViz = wrap(chem.ChromophoreUVVisViz, {
  aspect: 'auto',
  title: 'Chromophore UV Vis'
})
export const SpecificEnthalpyFuelsViz = wrap(chem.SpecificEnthalpyFuelsViz, {
  aspect: 'auto',
  title: 'Specific Enthalpy Fuels'
})
export const ContactConversionViz = wrap(chem.ContactConversionViz, {
  aspect: 'auto',
  title: 'Contact Conversion'
})
export const ZoneRefiningViz = wrap(chem.ZoneRefiningViz, {
  aspect: 'auto',
  title: 'Zone Refining'
})
export const FuelCellViz = wrap(chem.FuelCellViz, { aspect: 'auto', title: 'Fuel Cell' })
export const DownsCellViz = wrap(chem.DownsCellViz, { aspect: 'auto', title: 'Downs Cell' })
export const YieldVsAtomEconomyViz = wrap(chem.YieldVsAtomEconomyViz, {
  aspect: 'auto',
  title: 'Yield Vs Atom Economy'
})
export const AirDistillationViz = wrap(chem.AirDistillationViz, {
  aspect: 'auto',
  title: 'Air Distillation'
})
export const LeadAcidBatteryViz = wrap(chem.LeadAcidBatteryViz, {
  aspect: 'auto',
  title: 'Lead Acid Battery'
})
export const SilicateSharingViz = wrap(chem.SilicateSharingViz, {
  aspect: 'auto',
  title: 'Silicate Sharing'
})
export const CathodicProtectionViz = wrap(chem.CathodicProtectionViz, {
  aspect: 'auto',
  title: 'Cathodic Protection'
})
export const FuelCellEfficiencyViz = wrap(chem.FuelCellEfficiencyViz, {
  aspect: 'auto',
  title: 'Fuel Cell Efficiency'
})
export const HaberProcessViz = wrap(chem.HaberProcessViz, {
  aspect: 'auto',
  title: 'Haber Process'
})
export const OstwaldProcessViz = wrap(chem.OstwaldProcessViz, {
  aspect: 'auto',
  title: 'Ostwald Process'
})
export const ContactProcessViz = wrap(chem.ContactProcessViz, {
  aspect: 'auto',
  title: 'Contact Process'
})
export const ClausProcessViz = wrap(chem.ClausProcessViz, {
  aspect: 'auto',
  title: 'Claus Process'
})
export const VanadiumCatalyticCycleViz = wrap(chem.VanadiumCatalyticCycleViz, {
  aspect: 'auto',
  title: 'Vanadium Catalytic Cycle'
})
export const CatalyticConverterViz = wrap(chem.CatalyticConverterViz, {
  aspect: 'auto',
  title: 'Catalytic Converter'
})

// A.14 MODULUS FUNCTION
export const ModulusGraphViz = wrap(al.ModulusGraphViz, {
  aspect: 'auto',
  title: 'Modulus Function · The V Graph'
})
export const ModulusDistanceViz = wrap(al.ModulusDistanceViz, {
  aspect: 'auto',
  title: 'Modulus as Distance · |x - 3|'
})
export const ModulusTransformViz = wrap(al.ModulusTransformViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Transforming the V · a|x - h| + k'
})
export const ModulusEquationViz = wrap(al.ModulusEquationViz, {
  aspect: 'auto',
  title: 'Modulus Equation · |x - 1| = c'
})
export const ModulusInequalityViz = wrap(al.ModulusInequalityViz, {
  aspect: 'auto',
  title: 'Modulus Inequalities · Inside and Outside'
})

// A.15 RATIONAL AND IRRATIONAL FUNCTIONS
export const ReciprocalAnchorViz = wrap(al.ReciprocalAnchorViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Reciprocal Function · y = 1/x'
})
export const RationalAsymptoteViz = wrap(al.RationalAsymptoteViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Rational Asymptotes · y = (ax+b)/(cx+d)'
})
export const RationalHoleViz = wrap(al.RationalHoleViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Removable Discontinuity · Hole at (2, 4)'
})
export const DegreeAsymptoteViz = wrap(al.DegreeAsymptoteViz, {
  aspect: 'auto',
  title: 'Horizontal Asymptotes by Degree'
})
export const SquareRootAnchorViz = wrap(al.SquareRootAnchorViz, {
  aspect: 'auto',
  title: 'Square Root Function · y = sqrt(x)'
})
export const SquareRootTransformViz = wrap(al.SquareRootTransformViz, {
  aspect: 'auto',
  title: 'Square Root Transformations · y = a sqrt(x-h) + k'
})
export const RadicalSquareSignViz = wrap(al.RadicalSquareSignViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Radical Equation · Why Squaring Adds Extraneous Roots'
})

// A16 SIMULTANEOUS EQUATIONS · line/curve intersection
export const LineMeetsParabolaViz = wrap(al.LineMeetsParabolaViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Line Meets Parabola · Secant / Tangent / Miss'
})
export const CircleTangentLinesViz = wrap(al.CircleTangentLinesViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Circle · Two Tangent Lines of Equal Slope'
})
export const CircleHyperbolaFourViz = wrap(al.CircleHyperbolaFourViz, {
  aspect: 'auto',
  size: 'compact',
  title: 'Circle Meets Hyperbola · Four Solutions'
})
