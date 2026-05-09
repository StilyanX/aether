import React from 'react'
import { VizCard } from '../primitives'
import * as cm from './classical-mechanics'

export const VecAddition = props => (
  <VizCard id={'01.1.1'} title={'Vector Addition'}>
    <cm.VecAddition {...props} />
  </VizCard>
)
export const SlidingVector = props => (
  <VizCard id={'01.1.2'} title={'Sliding Vector'}>
    <cm.SlidingVector {...props} />
  </VizCard>
)
export const ForceDecomp = props => (
  <VizCard id={'01.1.3'} title={'Force Decomposition'}>
    <cm.ForceDecomp {...props} />
  </VizCard>
)
export const ComponentsRotation = props => (
  <VizCard id={'01.1.4'} title={'Components Under Rotation'}>
    <cm.ComponentsRotation {...props} />
  </VizCard>
)
export const BaseVectors = props => (
  <VizCard id={'01.1.5'} title={'Base Vectors'}>
    <cm.BaseVectors {...props} />
  </VizCard>
)
export const CrossProduct = props => (
  <VizCard id={'01.1.6'} title={'Cross Product'}>
    <cm.CrossProduct {...props} />
  </VizCard>
)
export const CrossAntisym = props => (
  <VizCard id={'01.1.7'} title={'Cross Antisymmetry'}>
    <cm.CrossAntisym {...props} />
  </VizCard>
)
export const DotWork = props => (
  <VizCard id={'01.1.8'} title={'Dot Product · Work'}>
    <cm.DotWork {...props} />
  </VizCard>
)
export const DotProjection = props => (
  <VizCard id={'01.1.9'} title={'Dot Projection'}>
    <cm.DotProjection {...props} />
  </VizCard>
)
export const PolarUnits = props => (
  <VizCard id={'01.1.10'} title={'Polar Unit Vectors'}>
    <cm.PolarUnits {...props} />
  </VizCard>
)
export const DisplacementInvariant = props => (
  <VizCard id={'01.1.11'} title={'Displacement Origin Invariance'}>
    <cm.DisplacementInvariant {...props} />
  </VizCard>
)
export const RotatingChord = props => (
  <VizCard id={'01.1.12'} title={'Rotating Vector Chord'}>
    <cm.RotatingChord {...props} />
  </VizCard>
)
export const UCM = props => (
  <VizCard id={'01.1.13'} title={'Uniform Circular Motion'}>
    <cm.UCM {...props} />
  </VizCard>
)
export const ProjectileMotion = props => (
  <VizCard id={'01.1.14'} title={'Projectile Motion'}>
    <cm.ProjectileMotion {...props} />
  </VizCard>
)
export const TaylorSin = props => (
  <VizCard id={'01.1.15'} title={'Taylor sin x'}>
    <cm.TaylorSin {...props} />
  </VizCard>
)
export const GalileanTable = cm.GalileanTable
export const BlockOnWedge = props => (
  <VizCard id={'01.2.1'} title={'Block on Wedge'}>
    <cm.BlockOnWedge {...props} />
  </VizCard>
)
export const WeightDecomp = props => (
  <VizCard id={'01.2.2'} title={'Weight Decomposition (FBD only, geometric)'}>
    <cm.WeightDecomp {...props} />
  </VizCard>
)
export const ConicalBifurcation = props => (
  <VizCard id={'01.2.3'} title={'Conical Pendulum Bifurcation'}>
    <cm.ConicalBifurcation {...props} />
  </VizCard>
)
export const HangingRope = props => (
  <VizCard id={'01.2.4'} title={'Hanging Rope Tension'}>
    <cm.HangingRope {...props} />
  </VizCard>
)
export const ViscousDecay = props => (
  <VizCard id={'01.2.5'} title={'Viscous Decay'}>
    <cm.ViscousDecay {...props} />
  </VizCard>
)
export const SHM = props => (
  <VizCard id={'01.2.6'} title={'Simple Harmonic Motion'}>
    <cm.SHM {...props} />
  </VizCard>
)
export const HarmonicPhasePortrait = props => (
  <VizCard id={'01.2.7'} title={'Harmonic Phase Portrait'}>
    <cm.HarmonicPhasePortrait {...props} />
  </VizCard>
)
export const CenterSaddle = props => (
  <VizCard id={'01.2.8'} title={'Center vs Saddle'}>
    <cm.CenterSaddle {...props} />
  </VizCard>
)
export const DoubleWell = props => (
  <VizCard id={'01.2.9'} title={'Double-Well'}>
    <cm.DoubleWell {...props} />
  </VizCard>
)
export const Lissajous = props => (
  <VizCard id={'01.2.10'} title={'Lissajous'}>
    <cm.Lissajous {...props} />
  </VizCard>
)
export const PendulumPhasePlane = props => (
  <VizCard id={'01.2.11'} title={'Pendulum Phase Plane'}>
    <cm.PendulumPhasePlane {...props} />
  </VizCard>
)
export const MomentumAddition = props => (
  <VizCard id={'01.3.1'} title={'Momentum Addition'}>
    <cm.MomentumAddition {...props} />
  </VizCard>
)
export const CMTwo = props => (
  <VizCard id={'01.3.2'} title={'CM · Two Particles'}>
    <cm.CMTwo {...props} />
  </VizCard>
)
export const CMRod = props => (
  <VizCard id={'01.3.3'} title={'CM · Non-Uniform Rod'}>
    <cm.CMRod {...props} />
  </VizCard>
)
export const CMTriangle = props => (
  <VizCard id={'01.3.4'} title={'CM · Triangle (centroid)'}>
    <cm.CMTriangle {...props} />
  </VizCard>
)
export const SpringGunRecoil = props => (
  <VizCard id={'01.3.5'} title={'Spring Gun Recoil'}>
    <cm.SpringGunRecoil {...props} />
  </VizCard>
)
export const ImpulseVsTime = props => (
  <VizCard id={'01.3.6'} title={'Impulse vs Time'}>
    <cm.ImpulseVsTime {...props} />
  </VizCard>
)
export const Tsiolkovsky = props => (
  <VizCard id={'01.3.7'} title={'Tsiolkovsky Rocket'}>
    <cm.Tsiolkovsky {...props} />
  </VizCard>
)
export const MomentumFlux = props => (
  <VizCard id={'01.3.8'} title={'Momentum Flux Stream'}>
    <cm.MomentumFlux {...props} />
  </VizCard>
)
export const MomentumVsForce = props => (
  <VizCard id={'01.3.9'} title={'Momentum Form vs Force Form'}>
    <cm.MomentumVsForce {...props} />
  </VizCard>
)
export const EnergyDiagram = props => (
  <VizCard id={'01.4.1'} title={'Energy Diagram'}>
    <cm.EnergyDiagram {...props} />
  </VizCard>
)
export const ConservativeLoop = props => (
  <VizCard id={'01.4.2'} title={'Closed Loop · ∮F·dl = 0 (conservative central field)'}>
    <cm.ConservativeLoop {...props} />
  </VizCard>
)
export const GradLevelCurves = props => (
  <VizCard id={'01.4.3'} title={'Gradient ⊥ Level Curves (U = x² + ¼y² ellipses)'}>
    <cm.GradLevelCurves {...props} />
  </VizCard>
)
export const PotentialWellOsc = props => (
  <VizCard id={'01.4.4'} title={'Oscillation in a Potential Well'}>
    <cm.PotentialWellOsc {...props} />
  </VizCard>
)
export const ConicalNoWork = props => (
  <VizCard id={'01.4.5'} title={'Conical Pendulum · Tension does no work'}>
    <cm.ConicalNoWork {...props} />
  </VizCard>
)
export const ElasticCollision = props => (
  <VizCard id={'01.4.6'} title={'Elastic Collision'}>
    <cm.ElasticCollision {...props} />
  </VizCard>
)
export const StokesTheorem = props => (
  <VizCard id={'01.4.7'} title={"Stokes' Theorem"}>
    <cm.StokesTheorem {...props} />
  </VizCard>
)
export const PathDependentWork = props => (
  <VizCard id={'01.4.8'} title={'Path-Dependent Work'}>
    <cm.PathDependentWork {...props} />
  </VizCard>
)
export const SpringFieldViz = props => (
  <VizCard id={'01.4.9'} title={'Spring Force Field'}>
    <cm.SpringFieldViz {...props} />
  </VizCard>
)
export const AreaUnderForce = props => (
  <VizCard id={'01.4.10'} title={'Area Under Force Curve = Work'}>
    <cm.AreaUnderForce {...props} />
  </VizCard>
)
export const FromUtoF = props => (
  <VizCard id={'01.4.11'} title={'From U to F · F = −U′(x)'}>
    <cm.FromUtoF {...props} />
  </VizCard>
)
export const GradientHill = props => (
  <VizCard id={'01.4.12'} title={'Gradient on a Hill'}>
    <cm.GradientHill {...props} />
  </VizCard>
)
export const PaddleWheelCurl = props => (
  <VizCard id={'01.4.13'} title={'Paddle Wheel · Curl'}>
    <cm.PaddleWheelCurl {...props} />
  </VizCard>
)
export const KeplerEqualAreas = props => (
  <VizCard id={'01.4.14'} title={'Kepler Equal Areas'}>
    <cm.KeplerEqualAreas {...props} />
  </VizCard>
)
export const EffectivePotentialPlot = props => (
  <VizCard id={'01.4.15'} title={'Effective Potential V(r)'}>
    <cm.EffectivePotentialPlot {...props} />
  </VizCard>
)
export const PolarDecomp = props => (
  <VizCard id={'01.4.16'} title={'Polar Frame Decomposition'}>
    <cm.PolarDecomp {...props} />
  </VizCard>
)
export const AngMomGeom = props => (
  <VizCard id={'01.5.1'} title={'L = r × p geometry'}>
    <cm.AngMomGeom {...props} />
  </VizCard>
)
export const SlidingTwoOrigins = props => (
  <VizCard id={'01.5.2'} title={'Sliding block'}>
    <cm.SlidingTwoOrigins {...props} />
  </VizCard>
)
export const ConicalPendulum2 = props => (
  <VizCard id={'01.5.3'} title={'Conical pendulum'}>
    <cm.ConicalPendulum2 {...props} />
  </VizCard>
)
export const TorqueLever = props => (
  <VizCard id={'01.5.4'} title={'Torque & lever arm'}>
    <cm.TorqueLever {...props} />
  </VizCard>
)
export const MomentsTable = props => (
  <VizCard id={'01.5.5'} title={'Moments of Inertia'}>
    <cm.MomentsTable {...props} />
  </VizCard>
)
export const ParallelAxis = props => (
  <VizCard id={'01.5.6'} title={'Parallel Axis: I = I_cm + Md²'}>
    <cm.ParallelAxis {...props} />
  </VizCard>
)
export const PhysicalPendulum = props => (
  <VizCard id={'01.5.7'} title={'Physical pendulum'}>
    <cm.PhysicalPendulum {...props} />
  </VizCard>
)
export const RollingWheel = props => (
  <VizCard id={'01.5.8'} title={'Rolling wheel'}>
    <cm.RollingWheel {...props} />
  </VizCard>
)
export const DrumOnIncline = props => (
  <VizCard id={'01.5.9'} title={'Drum on Incline'}>
    <cm.DrumOnIncline {...props} />
  </VizCard>
)
export const BohrAtom = props => (
  <VizCard id={'01.5.10'} title={'Bohr atom'}>
    <cm.BohrAtom {...props} />
  </VizCard>
)
export const ChaslesRod = props => (
  <VizCard id={'01.5.11'} title={'Chasles two-mass rod'}>
    <cm.ChaslesRod {...props} />
  </VizCard>
)
export const TwoBodyOrbit = props => (
  <VizCard id={'01.6.1'} title={'Two-Body Orbit (Reduced Mass)'}>
    <cm.TwoBodyOrbit {...props} />
  </VizCard>
)
export const EffPotV = props => (
  <VizCard id={'01.6.2'} title={'Effective Potential'}>
    <cm.EffPotV {...props} />
  </VizCard>
)
export const ConicOrbits = props => (
  <VizCard id={'01.6.3'} title={'Conic Orbits (Interactive)'}>
    <cm.ConicOrbits {...props} />
  </VizCard>
)
export const EllipseGeom = props => (
  <VizCard id={'01.6.4'} title={'Ellipse Geometry'}>
    <cm.EllipseGeom {...props} />
  </VizCard>
)
export const HohmannTransfer = props => (
  <VizCard id={'01.6.5'} title={'Hohmann Transfer'}>
    <cm.HohmannTransfer {...props} />
  </VizCard>
)
export const KeplerEA2 = props => (
  <VizCard id={'01.6.6'} title={'Kepler Equal Areas (compact)'}>
    <cm.KeplerEA2 {...props} />
  </VizCard>
)
export const CoriolisDrop = props => (
  <VizCard id={'01.7.1'} title={'Coriolis'}>
    <cm.CoriolisDrop {...props} />
  </VizCard>
)
export const PhaseShift = props => (
  <VizCard id={'01.8.1'} title={'Sine and Cosine Phase Shift'}>
    <cm.PhaseShift {...props} />
  </VizCard>
)
export const DampedOsc = props => (
  <VizCard id={'01.8.2'} title={'Damped Oscillator'}>
    <cm.DampedOsc {...props} />
  </VizCard>
)
export const DampingRegimes = props => (
  <VizCard id={'01.8.3'} title={'Three Damping Regimes'}>
    <cm.DampingRegimes {...props} />
  </VizCard>
)
export const LorentzianRes = props => (
  <VizCard id={'01.8.4'} title={'Lorentzian Resonance'}>
    <cm.LorentzianRes {...props} />
  </VizCard>
)
export const OrientationNonComm = props => (
  <VizCard id={'01.9.1'} title={'Orientation Non-Commutativity'}>
    <cm.OrientationNonComm {...props} />
  </VizCard>
)
export const SkewRod = props => (
  <VizCard id={'01.9.2'} title={'Skew Rod'}>
    <cm.SkewRod {...props} />
  </VizCard>
)
export const Gyroscope = props => (
  <VizCard id={'01.9.3'} title={'Gyroscope precession'}>
    <cm.Gyroscope {...props} />
  </VizCard>
)
export const EquinoxPrecession = props => (
  <VizCard id={'01.9.4'} title={'Equinox Precession'}>
    <cm.EquinoxPrecession {...props} />
  </VizCard>
)
export const InertiaTensor = props => (
  <VizCard id={'01.9.5'} title={'Tensor of Inertia (table-style)'}>
    <cm.InertiaTensor {...props} />
  </VizCard>
)
export const OblateProlate = props => (
  <VizCard id={'01.9.6'} title={'Oblate vs Prolate'}>
    <cm.OblateProlate {...props} />
  </VizCard>
)
export const PrecessionCone = props => (
  <VizCard id={'01.9.7'} title={'Torque-Free Precession Cone'}>
    <cm.PrecessionCone {...props} />
  </VizCard>
)
export const TennisRacket = props => (
  <VizCard id={'01.9.8'} title={'Tennis Racket'}>
    <cm.TennisRacket {...props} />
  </VizCard>
)
export const NonCentralPair = props => (
  <VizCard id={'01.9.9'} title={'Non-Central Force Pair'}>
    <cm.NonCentralPair {...props} />
  </VizCard>
)
export const OffsetSphere = props => (
  <VizCard id={'01.9.10'} title={'Offset sphere'}>
    <cm.OffsetSphere {...props} />
  </VizCard>
)
export const DumbbellTensor = props => (
  <VizCard id={'01.9.11'} title={'Dumbbell tensor'}>
    <cm.DumbbellTensor {...props} />
  </VizCard>
)
export const CycloidalNutation = props => (
  <VizCard id={'01.9.12'} title={'Cycloidal Nutation'}>
    <cm.CycloidalNutation {...props} />
  </VizCard>
)
export const Michelson = props => (
  <VizCard id={'01.10.1'} title={'Michelson Interferometer (schematic)'}>
    <cm.Michelson {...props} />
  </VizCard>
)
export const GammaVsBeta = props => (
  <VizCard id={'01.10.2'} title={'Gamma vs β'}>
    <cm.GammaVsBeta {...props} />
  </VizCard>
)
export const LightCone = props => (
  <VizCard id={'01.10.3'} title={'Light Cone'}>
    <cm.LightCone {...props} />
  </VizCard>
)
export const LengthContraction = props => (
  <VizCard id={'01.10.4'} title={'Length Contraction'}>
    <cm.LengthContraction {...props} />
  </VizCard>
)
export const LightClock = props => (
  <VizCard id={'01.10.5'} title={'Light Clock'}>
    <cm.LightClock {...props} />
  </VizCard>
)
export const RelDoppler = props => (
  <VizCard id={'01.10.6'} title={'Relativistic Doppler'}>
    <cm.RelDoppler {...props} />
  </VizCard>
)
export const TwinParadox = props => (
  <VizCard id={'01.10.7'} title={'Twin Paradox (FIXED: simultaneity lines bounded, no color leak)'}>
    <cm.TwinParadox {...props} />
  </VizCard>
)
export const RelMass = props => (
  <VizCard id={'01.10.8'} title={'Relativistic Mass (Interactive)'}>
    <cm.RelMass {...props} />
  </VizCard>
)
export const PairProduction = props => (
  <VizCard id={'01.10.9'} title={'Pair Production'}>
    <cm.PairProduction {...props} />
  </VizCard>
)
export const DragVector = props => (
  <VizCard id={'01.11.1'} title={'Drag the Vector'}>
    <cm.DragVector {...props} />
  </VizCard>
)
export const DotProductInteractive = props => (
  <VizCard id={'01.11.2'} title={'Dot Product Geometry'}>
    <cm.DotProductInteractive {...props} />
  </VizCard>
)
export const ProjectileLauncher = props => (
  <VizCard id={'01.11.3'} title={'Projectile Range'}>
    <cm.ProjectileLauncher {...props} />
  </VizCard>
)
export const InclineBlock = props => (
  <VizCard id={'01.11.4'} title={'Inclined Block'}>
    <cm.InclineBlock {...props} />
  </VizCard>
)
export const PendulumEnergy = props => (
  <VizCard id={'01.11.5'} title={'Pendulum Energy'}>
    <cm.PendulumEnergy {...props} />
  </VizCard>
)
export const DragCenterOfMass = props => (
  <VizCard id={'01.11.6'} title={'Drag Two Masses'}>
    <cm.DragCenterOfMass {...props} />
  </VizCard>
)
export const ElasticCollisionCalc = props => (
  <VizCard id={'01.11.7'} title={'1D Elastic Collision Calculator'}>
    <cm.ElasticCollisionCalc {...props} />
  </VizCard>
)
export const PhasePortraitDrag = props => (
  <VizCard id={'01.11.8'} title={'Phase Portrait'}>
    <cm.PhasePortraitDrag {...props} />
  </VizCard>
)
export const OrbitDesigner = props => (
  <VizCard id={'01.11.9'} title={'Orbit Designer'}>
    <cm.OrbitDesigner {...props} />
  </VizCard>
)
export const LorentzBoostInteractive = props => (
  <VizCard id={'01.11.10'} title={'Lorentz Boost'}>
    <cm.LorentzBoostInteractive {...props} />
  </VizCard>
)
export const ResonanceDriver = props => (
  <VizCard id={'01.11.11'} title={'Resonance Driver'}>
    <cm.ResonanceDriver {...props} />
  </VizCard>
)
export const ThreeBodyField = props => (
  <VizCard id={'01.11.12'} title={'Three-Body Drag'}>
    <cm.ThreeBodyField {...props} />
  </VizCard>
)

// ── Part III: Hamiltonian Mechanics ─────────────────────────────────────────

export const NestedEnergyLevels = props => (
  <VizCard id={'03.1.1'} title={'Nested Energy Levels'}>
    <cm.NestedEnergyLevels {...props} />
  </VizCard>
)
export const PhaseFlowOrbits = props => (
  <VizCard id={'03.1.2'} title={'Phase Flow Orbits'}>
    <cm.PhaseFlowOrbits {...props} />
  </VizCard>
)
export const LiouvilleBlob = props => (
  <VizCard id={'03.1.3'} title={'Liouville Theorem'}>
    <cm.LiouvilleBlob {...props} />
  </VizCard>
)
export const LegendreHamiltonian = props => (
  <VizCard id={'03.1.4'} title={'Legendre Transform'}>
    <cm.LegendreHamiltonian {...props} />
  </VizCard>
)
export const GeneratingFunctionGeom = props => (
  <VizCard id={'03.2.1'} title={'Generating Function Geometry'}>
    <cm.GeneratingFunctionGeom {...props} />
  </VizCard>
)
export const HJWavefronts = props => (
  <VizCard id={'03.2.2'} title={'Hamilton-Jacobi Wavefronts'}>
    <cm.HJWavefronts {...props} />
  </VizCard>
)
export const ActionCoordinate = props => (
  <VizCard id={'03.2.3'} title={'Action as Coordinate'}>
    <cm.ActionCoordinate {...props} />
  </VizCard>
)
export const ActionAngleConstruction = props => (
  <VizCard id={'03.3.1'} title={'Action-Angle Construction'}>
    <cm.ActionAngleConstruction {...props} />
  </VizCard>
)
export const IntegrablePhasePortrait = props => (
  <VizCard id={'03.3.2'} title={'Integrable Phase Portrait'}>
    <cm.IntegrablePhasePortrait {...props} />
  </VizCard>
)
export const TorusTrajectoryViz = props => (
  <VizCard id={'03.3.3'} title={'Torus Trajectory'}>
    <cm.TorusTrajectoryViz {...props} />
  </VizCard>
)
export const AveragingViz = props => (
  <VizCard id={'03.3.4'} title={'Averaging Theorem'}>
    <cm.AveragingViz {...props} />
  </VizCard>
)
export const JacobiGeodesicDeviation = props => (
  <VizCard id={'03.4.1'} title={'Jacobi Geodesic Deviation'}>
    <cm.JacobiGeodesicDeviation {...props} />
  </VizCard>
)
export const CoadjointOrbitSphere = props => (
  <VizCard id={'03.4.2'} title={'Co-adjoint Orbit'}>
    <cm.CoadjointOrbitSphere {...props} />
  </VizCard>
)
export const PoissonBracketAlgebra = props => (
  <VizCard id={'03.4.3'} title={'Poisson Bracket Algebra'}>
    <cm.PoissonBracketAlgebra {...props} />
  </VizCard>
)

// ── Part IV: Perturbation Theory ─────────────────────────────────────────────

export const AdiabaticOscillator = props => (
  <VizCard id={'04.1.1'} title={'Adiabatic Oscillator'}>
    <cm.AdiabaticOscillator {...props} />
  </VizCard>
)
export const AdiabaticInvariantArea = props => (
  <VizCard id={'04.1.2'} title={'Adiabatic Invariant'}>
    <cm.AdiabaticInvariantArea {...props} />
  </VizCard>
)
export const AdiabaticPhaseEllipse = props => (
  <VizCard id={'04.1.3'} title={'Adiabatic Phase Ellipse'}>
    <cm.AdiabaticPhaseEllipse {...props} />
  </VizCard>
)
export const InvariantToriDiagram = props => (
  <VizCard id={'04.2.1'} title={'Invariant Tori'}>
    <cm.InvariantToriDiagram {...props} />
  </VizCard>
)
export const KAMCantorSet = props => (
  <VizCard id={'04.2.2'} title={'KAM Cantor Set'}>
    <cm.KAMCantorSet {...props} />
  </VizCard>
)
export const ConditionallyPeriodic = props => (
  <VizCard id={'04.2.3'} title={'Conditionally Periodic'}>
    <cm.ConditionallyPeriodic {...props} />
  </VizCard>
)
export const FrequencyMap = props => (
  <VizCard id={'04.2.4'} title={'Frequency Map'}>
    <cm.FrequencyMap {...props} />
  </VizCard>
)
export const ArnoldDiffusion = props => (
  <VizCard id={'04.2.5'} title={'Arnold Diffusion'}>
    <cm.ArnoldDiffusion {...props} />
  </VizCard>
)
export const PoincareBirkhoff = props => (
  <VizCard id={'04.3.1'} title={'Poincaré-Birkhoff Theorem'}>
    <cm.PoincareBirkhoff {...props} />
  </VizCard>
)
export const ResonancePortrait = props => (
  <VizCard id={'04.3.2'} title={'Resonance Portrait'}>
    <cm.ResonancePortrait {...props} />
  </VizCard>
)
export const FrequencyRepulsion = props => (
  <VizCard id={'04.3.3'} title={'Frequency Repulsion'}>
    <cm.FrequencyRepulsion {...props} />
  </VizCard>
)
