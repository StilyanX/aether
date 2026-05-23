import React from 'react'
import { VizCard } from './primitives'
import * as am from './arithmetic'
import * as cm from './classical-mechanics'
import * as al from './algebra'
import * as bI from './books/fantasy/Science Fantasy/the-shadow-of-the-torturer'
import * as bII from './books/fantasy/Science Fantasy/the-claw-of-the-conciliator'
import * as bIII from './books/fantasy/Science Fantasy/the-sword-of-the-lictor'
import * as bIV from './books/fantasy/Science Fantasy/the-citadel-of-the-autarch'
import * as tpmI from './films/star-wars/the-phantom-menace'

// ─── ARITHMETIC ───────────────────────────────────────────────────────────────

// ─── FRACTION FOUNDATIONS ─────────────────────────────────────────────────────
export const NumberLineBasic = props => (
  <VizCard id={'01.1.1'} title={'Number Line: Unit Division'}>
    <am.NumberLineBasic {...props} />
  </VizCard>
)
export const NumberLineFraction34 = props => (
  <VizCard id={'01.1.2'} title={'Fraction ¾ on Number Line'}>
    <am.NumberLineFraction34 {...props} />
  </VizCard>
)
export const NumberLine17over4 = props => (
  <VizCard id={'01.1.3'} title={'Improper Fraction 17/4'}>
    <am.NumberLine17over4 {...props} />
  </VizCard>
)
export const AreaModelFraction = props => (
  <VizCard id={'01.1.4'} title={'Area Model Fraction'}>
    <am.AreaModelFraction {...props} />
  </VizCard>
)
export const EquivalentFractionVis = props => (
  <VizCard id={'01.1.5'} title={'Equivalent Fractions'}>
    <am.EquivalentFractionVis {...props} />
  </VizCard>
)
export const DecimalNumberLine = props => (
  <VizCard id={'01.1.6'} title={'Decimal on Number Line'}>
    <am.DecimalNumberLine {...props} />
  </VizCard>
)
export const DecimalFractionCompare = props => (
  <VizCard id={'01.1.7'} title={'Decimal–Fraction Comparison'}>
    <am.DecimalFractionCompare {...props} />
  </VizCard>
)
export const CompareFractionsVis = props => (
  <VizCard id={'01.1.8'} title={'Compare Fractions'}>
    <am.CompareFractionsVis {...props} />
  </VizCard>
)
export const FFPVis = props => (
  <VizCard id={'01.1.9'} title={'Fraction–Percent Conversion'}>
    <am.FFPVis {...props} />
  </VizCard>
)

// ─── FRACTION OPERATIONS ──────────────────────────────────────────────────────
export const AdditionNumberLine = props => (
  <VizCard id={'02.1.1'} title={'Fraction Addition'}>
    <am.AdditionNumberLine {...props} />
  </VizCard>
)
export const SubtractionNumberLine = props => (
  <VizCard id={'02.1.2'} title={'Fraction Subtraction'}>
    <am.SubtractionNumberLine {...props} />
  </VizCard>
)
export const FractionMultiplicationArea = props => (
  <VizCard id={'02.1.3'} title={'Fraction Multiplication Area'}>
    <am.FractionMultiplicationArea {...props} />
  </VizCard>
)
export const FractionDistributiveLaw = props => (
  <VizCard id={'02.1.4'} title={'Fraction Distributive Law'}>
    <am.FractionDistributiveLaw {...props} />
  </VizCard>
)
export const FractionOfNumberLine = props => (
  <VizCard id={'02.1.5'} title={'Fraction of a Number'}>
    <am.FractionOfNumberLine {...props} />
  </VizCard>
)
export const DivisionNumberLine = props => (
  <VizCard id={'02.1.6'} title={'Fraction Division'}>
    <am.DivisionNumberLine {...props} />
  </VizCard>
)
export const FiniteDecimalVis = props => (
  <VizCard id={'02.1.7'} title={'Finite Decimal Expansion'}>
    <am.FiniteDecimalVis {...props} />
  </VizCard>
)

// ─── FRACTION APPLICATIONS ────────────────────────────────────────────────────
export const PercentBarVis = props => (
  <VizCard id={'03.1.1'} title={'Percent Bar'}>
    <am.PercentBarVis {...props} />
  </VizCard>
)
export const RatioBarVis = props => (
  <VizCard id={'03.1.2'} title={'Ratio Bar'}>
    <am.RatioBarVis {...props} />
  </VizCard>
)
export const RateGraphVis = props => (
  <VizCard id={'03.1.3'} title={'Rate Graph'}>
    <am.RateGraphVis {...props} />
  </VizCard>
)
export const CoopWorkVis = props => (
  <VizCard id={'03.1.4'} title={'Cooperative Work'}>
    <am.CoopWorkVis {...props} />
  </VizCard>
)
export const ComplexFractionVis = props => (
  <VizCard id={'03.1.5'} title={'Complex Fraction'}>
    <am.ComplexFractionVis {...props} />
  </VizCard>
)

// ─── FRACTION ADVANCED TOPICS ─────────────────────────────────────────────────
export const HarmonicMeanVis = props => (
  <VizCard id={'04.1.1'} title={'Harmonic Mean'}>
    <am.HarmonicMeanVis {...props} />
  </VizCard>
)
export const CucumberVis = props => (
  <VizCard id={'04.1.2'} title={'Mixture: Cucumber'}>
    <am.CucumberVis {...props} />
  </VizCard>
)
export const WineTeaVis = props => (
  <VizCard id={'04.1.3'} title={'Mixture: Wine and Tea'}>
    <am.WineTeaVis {...props} />
  </VizCard>
)

// ─── RATIONAL NUMBERS ─────────────────────────────────────────────────────────
export const MirrorReflectionDiagram = props => (
  <VizCard id={'05.1.1'} title={'Mirror Reflection'}>
    <am.MirrorReflectionDiagram {...props} />
  </VizCard>
)
export const TwoSidedNumberLine = props => (
  <VizCard id={'05.1.2'} title={'Two-Sided Number Line'}>
    <am.TwoSidedNumberLine {...props} />
  </VizCard>
)
export const VectorAdditionDiagram = props => (
  <VizCard id={'05.1.3'} title={'Vector Addition'}>
    <am.VectorAdditionDiagram {...props} />
  </VizCard>
)
export const InequalityFlipDiagram = props => (
  <VizCard id={'05.1.4'} title={'Inequality Flip'}>
    <am.InequalityFlipDiagram {...props} />
  </VizCard>
)
export const AbsoluteValueDiagram = props => (
  <VizCard id={'05.1.5'} title={'Absolute Value'}>
    <am.AbsoluteValueDiagram {...props} />
  </VizCard>
)

// ─── PLACE VALUE AND ALGORITHMS ───────────────────────────────────────────────
export const PlaceValueNumberLine = props => (
  <VizCard id={'06.1.1'} title={'Place Value Number Line'}>
    <am.PlaceValueNumberLine {...props} />
  </VizCard>
)
export const WholeDistributiveLawArea = props => (
  <VizCard id={'06.1.2'} title={'Distributive Law Area'}>
    <am.WholeDistributiveLawArea {...props} />
  </VizCard>
)
export const AdditionCarryVis = props => (
  <VizCard id={'06.1.3'} title={'Addition with Carry'}>
    <am.AdditionCarryVis {...props} />
  </VizCard>
)
export const SubtractionTradingVis = props => (
  <VizCard id={'06.1.4'} title={'Subtraction by Trading'}>
    <am.SubtractionTradingVis {...props} />
  </VizCard>
)
export const WholeMultiplicationArea = props => (
  <VizCard id={'06.1.5'} title={'Multiplication Area Model'}>
    <am.WholeMultiplicationArea {...props} />
  </VizCard>
)
export const LongDivisionStepVis = props => (
  <VizCard id={'06.1.6'} title={'Long Division Steps'}>
    <am.LongDivisionStepVis {...props} />
  </VizCard>
)

// ─── NUMBER LINE AND NUMBER SYSTEMS ───────────────────────────────────────────
export const OperationsOnNumberLine = props => (
  <VizCard id={'07.1.1'} title={'Operations on Number Line'}>
    <am.OperationsOnNumberLine {...props} />
  </VizCard>
)
export const NumberLineWithTypes = props => (
  <VizCard id={'07.1.2'} title={'Number Types on Line'}>
    <am.NumberLineWithTypes {...props} />
  </VizCard>
)
export const RoundingVisualization = props => (
  <VizCard id={'07.1.3'} title={'Rounding'}>
    <am.RoundingVisualization {...props} />
  </VizCard>
)
export const BaseConversionVis = props => (
  <VizCard id={'07.1.4'} title={'Base Conversion'}>
    <am.BaseConversionVis {...props} />
  </VizCard>
)

// ─── NUMBER THEORY ────────────────────────────────────────────────────────────
export const DivisionRemainderVis = props => (
  <VizCard id={'08.1.1'} title={'Division and Remainder'}>
    <am.DivisionRemainderVis {...props} />
  </VizCard>
)
export const SieveVis = props => (
  <VizCard id={'08.1.2'} title={'Sieve of Eratosthenes'}>
    <am.SieveVis {...props} />
  </VizCard>
)
export const GcdLinearCombinationVis = props => (
  <VizCard id={'08.1.3'} title={'GCD Linear Combination'}>
    <am.GcdLinearCombinationVis {...props} />
  </VizCard>
)
export const EAStepperVis = props => (
  <VizCard id={'08.1.4'} title={'Euclidean Algorithm Steps'}>
    <am.EAStepperVis {...props} />
  </VizCard>
)
export const GcdLcmVennVis = props => (
  <VizCard id={'08.1.5'} title={'GCD and LCM Venn'}>
    <am.GcdLcmVennVis {...props} />
  </VizCard>
)
export const PythagoreanTripleVis = props => (
  <VizCard id={'08.1.6'} title={'Pythagorean Triple'}>
    <am.PythagoreanTripleVis {...props} />
  </VizCard>
)
export const PerfectSquareParityVis = props => (
  <VizCard id={'08.1.7'} title={'Perfect Square Parity'}>
    <am.PerfectSquareParityVis {...props} />
  </VizCard>
)

// ─── DECIMAL FUNDAMENTALS ─────────────────────────────────────────────────────
export const FractionToDecimalVis = props => (
  <VizCard id={'09.1.1'} title={'Fraction to Decimal'}>
    <am.FractionToDecimalVis {...props} />
  </VizCard>
)
export const NumberLinePlacement = props => (
  <VizCard id={'09.1.2'} title={'Decimal Number Line Placement'}>
    <am.NumberLinePlacement {...props} />
  </VizCard>
)
export const DecimalComparisonVis = props => (
  <VizCard id={'09.1.3'} title={'Decimal Comparison'}>
    <am.DecimalComparisonVis {...props} />
  </VizCard>
)
export const ScientificNotationVis = props => (
  <VizCard id={'09.1.4'} title={'Scientific Notation'}>
    <am.ScientificNotationVis {...props} />
  </VizCard>
)
export const PlaceValueVis = props => (
  <VizCard id={'09.1.5'} title={'Place Value'}>
    <am.PlaceValueVis {...props} />
  </VizCard>
)

// ─── INFINITE AND REPEATING DECIMALS ─────────────────────────────────────────
export const SqueezingVis = props => (
  <VizCard id={'10.1.1'} title={'Squeezing Argument'}>
    <am.SqueezingVis {...props} />
  </VizCard>
)
export const MultiplySubtractVis = props => (
  <VizCard id={'10.1.2'} title={'Multiply-Subtract Method'}>
    <am.MultiplySubtractVis {...props} />
  </VizCard>
)
export const LongDivisionVis = props => (
  <VizCard id={'10.1.3'} title={'Long Division'}>
    <am.LongDivisionVis {...props} />
  </VizCard>
)

// ─── DECIMAL EXPANSION PROOFS ─────────────────────────────────────────────────
export const FactorTreeVis = props => (
  <VizCard id={'11.1.1'} title={'Factor Tree'}>
    <am.FactorTreeVis {...props} />
  </VizCard>
)
export const RepeatingDecimalVis = props => (
  <VizCard id={'11.1.2'} title={'Repeating Decimal'}>
    <am.RepeatingDecimalVis {...props} />
  </VizCard>
)
export const PigeonholeVis = props => (
  <VizCard id={'11.1.3'} title={'Pigeonhole Principle'}>
    <am.PigeonholeVis {...props} />
  </VizCard>
)

// ─── CLASSICAL MECHANICS ─────────────────────────────────────────────────────

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

// ─── ALGEBRA ─────────────────────────────────────────────────────────────────

// ─── M01 FOUNDATIONS ──────────────────────────────────────────────────────────
export const NumberLineNegativesViz = props => (
  <VizCard id={'A.01.1'} title={'Number Line · Negatives'}>
    <al.NumberLineNegativesViz {...props} />
  </VizCard>
)
export const BinaryPlaceValueViz = props => (
  <VizCard id={'A.01.2'} title={'Binary Place Value'}>
    <al.BinaryPlaceValueViz {...props} />
  </VizCard>
)
export const CommutativityGridViz = props => (
  <VizCard id={'A.01.3'} title={'Commutativity Grid'}>
    <al.CommutativityGridViz {...props} />
  </VizCard>
)
export const DistributiveLawViz = props => (
  <VizCard id={'A.01.4'} title={'Distributive Law'}>
    <al.DistributiveLawViz {...props} />
  </VizCard>
)
export const NumberLineViz = props => (
  <VizCard id={'A.01.5'} title={'Number Line · Real Numbers'}>
    <al.NumberLineViz {...props} />
  </VizCard>
)
export const PemdasViz = props => (
  <VizCard id={'A.01.6'} title={'PEMDAS · Order of Operations'}>
    <al.PemdasViz {...props} />
  </VizCard>
)
export const ExponentLawsViz = props => (
  <VizCard id={'A.01.7'} title={'Exponent Laws'}>
    <al.ExponentLawsViz {...props} />
  </VizCard>
)
export const SquareOfSumGeomViz = props => (
  <VizCard id={'A.01.8'} title={'Square of a Sum · Geometric'}>
    <al.SquareOfSumGeomViz {...props} />
  </VizCard>
)
export const DiffOfSquaresGeomViz = props => (
  <VizCard id={'A.01.9'} title={'Difference of Squares · Geometric'}>
    <al.DiffOfSquaresGeomViz {...props} />
  </VizCard>
)
export const PascalTriangleViz = props => (
  <VizCard id={'A.01.10'} title={"Pascal's Triangle"}>
    <al.PascalTriangleViz {...props} />
  </VizCard>
)

// ─── M02 LINEAR EQUATIONS ─────────────────────────────────────────────────────
export const TwoLinesViz = props => (
  <VizCard id={'A.02.1'} title={'Two Lines · Intersection'}>
    <al.TwoLinesViz {...props} />
  </VizCard>
)
export const ParabolaPlotViz = props => (
  <VizCard id={'A.02.2'} title={'Parabola Plot'}>
    <al.ParabolaPlotViz {...props} />
  </VizCard>
)

// ─── M03 QUADRATIC EQUATIONS ──────────────────────────────────────────────────
export const StandardFormViz = props => (
  <VizCard id={'A.03.1'} title={'Quadratic · Standard Form'}>
    <al.StandardFormViz {...props} />
  </VizCard>
)
export const ParabolaDiscriminantViz = props => (
  <VizCard id={'A.03.2'} title={'Discriminant · Three Cases'}>
    <al.ParabolaDiscriminantViz {...props} />
  </VizCard>
)
export const InteractiveDiscriminantViz = props => (
  <VizCard id={'A.03.3'} title={'Interactive Discriminant'}>
    <al.InteractiveDiscriminantViz {...props} />
  </VizCard>
)
export const InteractiveParabolaViz = props => (
  <VizCard id={'A.03.4'} title={'Interactive Parabola'}>
    <al.InteractiveParabolaViz {...props} />
  </VizCard>
)
export const NumberLineInequalityViz = props => (
  <VizCard id={'A.03.5'} title={'Quadratic Inequality · Sign Chart'}>
    <al.NumberLineInequalityViz {...props} />
  </VizCard>
)
export const PowersOfIViz = props => (
  <VizCard id={'A.03.6'} title={'Powers of i'}>
    <al.PowersOfIViz {...props} />
  </VizCard>
)
export const VietasRootsViz = props => (
  <VizCard id={'A.03.7'} title={"Vieta's Roots"}>
    <al.VietasRootsViz {...props} />
  </VizCard>
)
export const MaxMinViz = props => (
  <VizCard id={'A.03.8'} title={'Vertex · Max / Min'}>
    <al.MaxMinViz {...props} />
  </VizCard>
)
export const AlKhwarizmiViz = props => (
  <VizCard id={'A.03.9'} title={'Al-Khwarizmi · Completing the Square'}>
    <al.AlKhwarizmiViz {...props} />
  </VizCard>
)

// ─── M04 ROOTS · POWERS · INEQUALITIES ────────────────────────────────────────
export const MeanChainViz = props => (
  <VizCard id={'A.04.1'} title={'Mean Chain · HM ≤ GM ≤ AM ≤ QM'}>
    <al.MeanChainViz {...props} />
  </VizCard>
)
export const AMGMRectViz = props => (
  <VizCard id={'A.04.2'} title={'AM-GM · Rectangle'}>
    <al.AMGMRectViz {...props} />
  </VizCard>
)
export const QMConvexViz = props => (
  <VizCard id={'A.04.3'} title={'QM ≥ AM · Convexity'}>
    <al.QMConvexViz {...props} />
  </VizCard>
)

// ─── M05 FRACTIONS · RATIOS · PROPORTIONS ─────────────────────────────────────
export const FractionNumberLineViz = props => (
  <VizCard id={'A.05.1'} title={'Fractions on the Number Line'}>
    <al.FractionNumberLineViz {...props} />
  </VizCard>
)
export const DirectProportionViz = props => (
  <VizCard id={'A.05.2'} title={'Direct Proportion'}>
    <al.DirectProportionViz {...props} />
  </VizCard>
)
export const InverseProportionViz = props => (
  <VizCard id={'A.05.3'} title={'Inverse Proportion'}>
    <al.InverseProportionViz {...props} />
  </VizCard>
)

// ─── M06 EXPONENTS · RADICALS ─────────────────────────────────────────────────
export const PowersOf2Viz = props => (
  <VizCard id={'A.06.1'} title={'Powers of 2'}>
    <al.PowersOf2Viz {...props} />
  </VizCard>
)
export const ExponentAdditionViz = props => (
  <VizCard id={'A.06.2'} title={'Exponent Addition · aᵐ · aⁿ'}>
    <al.ExponentAdditionViz {...props} />
  </VizCard>
)
export const FractionCompareViz = props => (
  <VizCard id={'A.06.3'} title={'Fraction Comparison'}>
    <al.FractionCompareViz {...props} />
  </VizCard>
)

// ─── M07 POLYNOMIALS ──────────────────────────────────────────────────────────
export const PolynomialLabeledViz = props => (
  <VizCard id={'A.07.1'} title={'Polynomial · Term Degrees'}>
    <al.PolynomialLabeledViz {...props} />
  </VizCard>
)
export const PolynomialCurveViz = props => (
  <VizCard id={'A.07.2'} title={'Polynomial Curve · Drag'}>
    <al.PolynomialCurveViz {...props} />
  </VizCard>
)
export const LogExpInverseViz = props => (
  <VizCard id={'A.07.3'} title={'Log and Exp as Inverses'}>
    <al.LogExpInverseViz {...props} />
  </VizCard>
)
export const FloorStaircaseViz = props => (
  <VizCard id={'A.07.4'} title={'Floor Function · Staircase'}>
    <al.FloorStaircaseViz {...props} />
  </VizCard>
)

// ─── M08 GRAPHING LINES ───────────────────────────────────────────────────────
export const CartesianPlaneViz = props => (
  <VizCard id={'A.08.1'} title={'Cartesian Plane · Quadrants'}>
    <al.CartesianPlaneViz {...props} />
  </VizCard>
)
export const PlotPointsViz = props => (
  <VizCard id={'A.08.2'} title={'Plotting Points'}>
    <al.PlotPointsViz {...props} />
  </VizCard>
)
export const DistanceTriangleViz = props => (
  <VizCard id={'A.08.3'} title={'Distance · Triangle'}>
    <al.DistanceTriangleViz {...props} />
  </VizCard>
)
export const SlopeTypesViz = props => (
  <VizCard id={'A.08.4'} title={'Slope Types'}>
    <al.SlopeTypesViz {...props} />
  </VizCard>
)
export const LineSlopeInterceptViz = props => (
  <VizCard id={'A.08.5'} title={'Slope-Intercept · y = mx + b'}>
    <al.LineSlopeInterceptViz {...props} />
  </VizCard>
)
export const ParallelPerpViz = props => (
  <VizCard id={'A.08.6'} title={'Parallel and Perpendicular'}>
    <al.ParallelPerpViz {...props} />
  </VizCard>
)
export const SystemsViz = props => (
  <VizCard id={'A.08.7'} title={'Two-Line System'}>
    <al.SystemsViz {...props} />
  </VizCard>
)
export const NumberLineInequalityVizGL = props => (
  <VizCard id={'A.08.8'} title={'Linear Inequality · Number Line'}>
    <al.NumberLineInequalityVizGL {...props} />
  </VizCard>
)
export const HalfPlaneViz = props => (
  <VizCard id={'A.08.9'} title={'Half-Plane · y > mx + b'}>
    <al.HalfPlaneViz {...props} />
  </VizCard>
)
export const FeasibleRegionViz = props => (
  <VizCard id={'A.08.10'} title={'Feasible Region'}>
    <al.FeasibleRegionViz {...props} />
  </VizCard>
)

// ─── M09 QUADRATIC FUNCTIONS ──────────────────────────────────────────────────
export const ParabolaBasicViz = props => (
  <VizCard id={'A.09.1'} title={'Parabola · y = x²'}>
    <al.ParabolaBasicViz {...props} />
  </VizCard>
)
export const ParabolaCoeffViz = props => (
  <VizCard id={'A.09.2'} title={'Parabola · Effect of a'}>
    <al.ParabolaCoeffViz {...props} />
  </VizCard>
)
export const InteractiveVertexViz = props => (
  <VizCard id={'A.09.3'} title={'Interactive Vertex · (x − h)² + k'}>
    <al.InteractiveVertexViz {...props} />
  </VizCard>
)
export const HorizontalParabolaViz = props => (
  <VizCard id={'A.09.4'} title={'Horizontal Parabola'}>
    <al.HorizontalParabolaViz {...props} />
  </VizCard>
)
export const CircleViz = props => (
  <VizCard id={'A.09.5'} title={'Circle · Center and Radius'}>
    <al.CircleViz {...props} />
  </VizCard>
)
export const QuadInequalityViz = props => (
  <VizCard id={'A.09.6'} title={'Quadratic Inequality'}>
    <al.QuadInequalityViz {...props} />
  </VizCard>
)
export const TrivialInequalityViz = props => (
  <VizCard id={'A.09.7'} title={'Trivial Inequality · x² ≥ 0'}>
    <al.TrivialInequalityViz {...props} />
  </VizCard>
)
export const InteractiveOptimizationViz = props => (
  <VizCard id={'A.09.8'} title={'Interactive Optimization'}>
    <al.InteractiveOptimizationViz {...props} />
  </VizCard>
)
export const NumberLineSignViz = props => (
  <VizCard id={'A.09.9'} title={'Polynomial Sign Chart'}>
    <al.NumberLineSignViz {...props} />
  </VizCard>
)

// ─── M10 FUNCTIONS ────────────────────────────────────────────────────────────
export const FunctionMachineViz = props => (
  <VizCard id={'A.10.1'} title={'Function Machine'}>
    <al.FunctionMachineViz {...props} />
  </VizCard>
)
export const CompositionChainViz = props => (
  <VizCard id={'A.10.2'} title={'Function Composition Chain'}>
    <al.CompositionChainViz {...props} />
  </VizCard>
)
export const GraphPointViz = props => (
  <VizCard id={'A.10.3'} title={'Point on a Graph'}>
    <al.GraphPointViz {...props} />
  </VizCard>
)
export const ParabolaViz = props => (
  <VizCard id={'A.10.4'} title={'Parabola · y = x² − 5x + 6'}>
    <al.ParabolaViz {...props} />
  </VizCard>
)
export const IntersectionViz = props => (
  <VizCard id={'A.10.5'} title={'Curve Intersection'}>
    <al.IntersectionViz {...props} />
  </VizCard>
)
export const VerticalScaleViz = props => (
  <VizCard id={'A.10.6'} title={'Vertical Scaling'}>
    <al.VerticalScaleViz {...props} />
  </VizCard>
)
export const HorizontalScaleViz = props => (
  <VizCard id={'A.10.7'} title={'Horizontal Scaling'}>
    <al.HorizontalScaleViz {...props} />
  </VizCard>
)
export const InverseGraphViz = props => (
  <VizCard id={'A.10.8'} title={'Inverse Graph'}>
    <al.InverseGraphViz {...props} />
  </VizCard>
)
export const RefInverseViz = props => (
  <VizCard id={'A.10.9'} title={'Reference Inverse'}>
    <al.RefInverseViz {...props} />
  </VizCard>
)

// ─── M11 EXPONENTIAL FUNCTIONS ────────────────────────────────────────────────
export const ExponentialGraphViz = props => (
  <VizCard id={'A.11.1'} title={'Exponential Graph · bˣ'}>
    <al.ExponentialGraphViz {...props} />
  </VizCard>
)
export const GrowthComparisonViz = props => (
  <VizCard id={'A.11.2'} title={'Linear vs Exponential Growth'}>
    <al.GrowthComparisonViz {...props} />
  </VizCard>
)
export const EqualBasesViz = props => (
  <VizCard id={'A.11.3'} title={'Solve 3ˣ = y · Equal Bases'}>
    <al.EqualBasesViz {...props} />
  </VizCard>
)
export const CompoundVsSimpleViz = props => (
  <VizCard id={'A.11.4'} title={'Compound vs Simple Interest'}>
    <al.CompoundVsSimpleViz {...props} />
  </VizCard>
)
export const LogarithmGraphViz = props => (
  <VizCard id={'A.11.5'} title={'Logarithm Graph'}>
    <al.LogarithmGraphViz {...props} />
  </VizCard>
)
export const LogSolvingViz = props => (
  <VizCard id={'A.11.6'} title={'Solving Logarithms'}>
    <al.LogSolvingViz {...props} />
  </VizCard>
)
export const InteractiveExponentialViz = props => (
  <VizCard id={'A.11.7'} title={'Interactive Exponential'}>
    <al.InteractiveExponentialViz {...props} />
  </VizCard>
)

// ─── M12 SEQUENCES · SERIES ───────────────────────────────────────────────────
export const SequenceVsSeriesViz = props => (
  <VizCard id={'A.12.1'} title={'Sequence vs Series'}>
    <al.SequenceVsSeriesViz {...props} />
  </VizCard>
)
export const ArithmeticNumberLineViz = props => (
  <VizCard id={'A.12.2'} title={'Arithmetic Sequence · Number Line'}>
    <al.ArithmeticNumberLineViz {...props} />
  </VizCard>
)
export const GaussPairingViz = props => (
  <VizCard id={'A.12.3'} title={'Gauss Pairing'}>
    <al.GaussPairingViz {...props} />
  </VizCard>
)
export const OddSquaresViz = props => (
  <VizCard id={'A.12.4'} title={'Odd Numbers Sum to Squares'}>
    <al.OddSquaresViz {...props} />
  </VizCard>
)
export const TelescopingViz = props => (
  <VizCard id={'A.12.5'} title={'Telescoping Sum'}>
    <al.TelescopingViz {...props} />
  </VizCard>
)
export const PartialSumsViz = props => (
  <VizCard id={'A.12.6'} title={'Partial Sums · Geometric'}>
    <al.PartialSumsViz {...props} />
  </VizCard>
)
export const StaircaseViz = props => (
  <VizCard id={'A.12.7'} title={'Staircase · Half Rectangle'}>
    <al.StaircaseViz {...props} />
  </VizCard>
)
export const FibonacciStaircaseViz = props => (
  <VizCard id={'A.12.8'} title={'Fibonacci Numbers'}>
    <al.FibonacciStaircaseViz {...props} />
  </VizCard>
)
export const PianoViz = props => (
  <VizCard id={'A.12.9'} title={'Piano Octave · Geometric'}>
    <al.PianoViz {...props} />
  </VizCard>
)

// ─── M13 BINOMIAL THEOREM ─────────────────────────────────────────────────────
export const SquareOfSumViz = props => (
  <VizCard id={'A.13.1'} title={'Square of a Sum'}>
    <al.SquareOfSumViz {...props} />
  </VizCard>
)
export const DiffOfSquaresViz = props => (
  <VizCard id={'A.13.2'} title={'Difference of Squares'}>
    <al.DiffOfSquaresViz {...props} />
  </VizCard>
)
export const PascalTriangleBinViz = props => (
  <VizCard id={'A.13.3'} title={'Pascal · Binomial Expansion'}>
    <al.PascalTriangleBinViz {...props} />
  </VizCard>
)

// ─── BOOK I · THE SHADOW OF THE TORTURER ──────────────────────────────────────
export const GuildHierarchy = props => (
  <VizCard id={'I.01.1'} title={'Guild Hierarchy'}>
    <bI.GuildHierarchy {...props} />
  </VizCard>
)
export const CitadelMap = props => (
  <VizCard id={'I.01.2'} title={'Citadel Map'}>
    <bI.CitadelMap {...props} />
  </VizCard>
)
export const PowerTriangle = props => (
  <VizCard id={'I.02.1'} title={'Power Triangle'}>
    <bI.PowerTriangle {...props} />
  </VizCard>
)
export const NessusRoute = props => (
  <VizCard id={'I.03.1'} title={'Nessus Route'}>
    <bI.NessusRoute {...props} />
  </VizCard>
)
export const InireMirrors = props => (
  <VizCard id={'I.04.1'} title={'Inire Mirrors'}>
    <bI.InireMirrors {...props} />
  </VizCard>
)
export const AvernDuel = props => (
  <VizCard id={'I.05.1'} title={'Avern Duel'}>
    <bI.AvernDuel {...props} />
  </VizCard>
)
export const BI_CharacterNetwork = props => (
  <VizCard id={'I.06.1'} title={'Character Network'}>
    <bI.CharacterNetwork {...props} />
  </VizCard>
)
export const JourneyArc = props => (
  <VizCard id={'I.06.2'} title={'Journey Arc'}>
    <bI.JourneyArc {...props} />
  </VizCard>
)
export const BI_SymbolNetwork = props => (
  <VizCard id={'I.06.3'} title={'Symbol Network'}>
    <bI.SymbolNetwork {...props} />
  </VizCard>
)

// ─── BOOK II · THE CLAW OF THE CONCILIATOR ────────────────────────────────────
export const SaltusMap = props => (
  <VizCard id={'II.01.1'} title={'Saltus Map'}>
    <bII.SaltusMap {...props} />
  </VizCard>
)
export const SaltusBeats = props => (
  <VizCard id={'II.01.2'} title={'Saltus Beats'}>
    <bII.SaltusBeats {...props} />
  </VizCard>
)
export const MineSection = props => (
  <VizCard id={'II.02.1'} title={'Mine Section'}>
    <bII.MineSection {...props} />
  </VizCard>
)
export const ForestCourt = props => (
  <VizCard id={'II.03.1'} title={'Forest Court'}>
    <bII.ForestCourt {...props} />
  </VizCard>
)
export const Antechamber = props => (
  <VizCard id={'II.04.1'} title={'Antechamber'}>
    <bII.Antechamber {...props} />
  </VizCard>
)
export const HouseAbsolute = props => (
  <VizCard id={'II.04.2'} title={'House Absolute'}>
    <bII.HouseAbsolute {...props} />
  </VizCard>
)
export const PlayStructure = props => (
  <VizCard id={'II.05.1'} title={'Play Structure'}>
    <bII.PlayStructure {...props} />
  </VizCard>
)
export const CumaeanRitual = props => (
  <VizCard id={'II.06.1'} title={'Cumaean Ritual'}>
    <bII.CumaeanRitual {...props} />
  </VizCard>
)
export const NessusToThrax = props => (
  <VizCard id={'II.07.1'} title={'Nessus → Thrax'}>
    <bII.NessusToThrax {...props} />
  </VizCard>
)
export const BII_CharacterNetwork = props => (
  <VizCard id={'II.07.2'} title={'Character Network'}>
    <bII.CharacterNetwork {...props} />
  </VizCard>
)
export const TerminologyTree = props => (
  <VizCard id={'II.07.3'} title={'Terminology Tree'}>
    <bII.TerminologyTree {...props} />
  </VizCard>
)
export const BII_SymbolNetwork = props => (
  <VizCard id={'II.07.4'} title={'Symbol Network'}>
    <bII.SymbolNetwork {...props} />
  </VizCard>
)

// ─── BOOK III · THE SWORD OF THE LICTOR ───────────────────────────────────────
export const ThraxGeography = props => (
  <VizCard id={'III.01.1'} title={'Thrax Geography'}>
    <bIII.ThraxGeography {...props} />
  </VizCard>
)
export const VinculaCrossSection = props => (
  <VizCard id={'III.01.2'} title={'Vincula Cross-Section'}>
    <bIII.VinculaCrossSection {...props} />
  </VizCard>
)
export const BIII_Ch01SeverianAuthorityWeb = props => (
  <VizCard id={'III.01.3'} title={'Authority Web'}>
    <bIII.Ch01SeverianAuthorityWeb {...props} />
  </VizCard>
)
export const BIII_Ch01StructureDiagram = props => (
  <VizCard id={'III.01.4'} title={'Structure Diagram'}>
    <bIII.Ch01StructureDiagram {...props} />
  </VizCard>
)
export const BIII_Ch02EmotionalArc = props => (
  <VizCard id={'III.02.1'} title={'Emotional Arc · Ch. II–IX'}>
    <bIII.Ch02EmotionalArc {...props} />
  </VizCard>
)
export const LostArchivesCosmogony = props => (
  <VizCard id={'III.02.2'} title={'Lost Archives Cosmogony'}>
    <bIII.LostArchivesCosmogony {...props} />
  </VizCard>
)
export const ClawDualFailure = props => (
  <VizCard id={'III.02.3'} title={'Claw Dual Failure'}>
    <bIII.ClawDualFailure {...props} />
  </VizCard>
)
export const SalamanderAnatomy = props => (
  <VizCard id={'III.02.4'} title={'Salamander Anatomy'}>
    <bIII.SalamanderAnatomy {...props} />
  </VizCard>
)
export const BIII_Ch03EmotionalArc = props => (
  <VizCard id={'III.03.1'} title={'Emotional Arc · Ch. XIII'}>
    <bIII.Ch03EmotionalArc {...props} />
  </VizCard>
)
export const SeverianRelationshipWeb = props => (
  <VizCard id={'III.03.2'} title={'Relationship Web'}>
    <bIII.SeverianRelationshipWeb {...props} />
  </VizCard>
)
export const CliffStrata = props => (
  <VizCard id={'III.03.3'} title={'Cliff Strata'}>
    <bIII.CliffStrata {...props} />
  </VizCard>
)
export const BIII_Ch04EmotionalArc = props => (
  <VizCard id={'III.04.1'} title={'Emotional Arc · Ch. XV–XIX'}>
    <bIII.Ch04EmotionalArc {...props} />
  </VizCard>
)
export const CasdoeHouseCharacterWeb = props => (
  <VizCard id={'III.04.2'} title={'Casdoe House'}>
    <bIII.CasdoeHouseCharacterWeb {...props} />
  </VizCard>
)
export const AlzaboVoiceMechanism = props => (
  <VizCard id={'III.04.3'} title={'Alzabo Voice Mechanism'}>
    <bIII.AlzaboVoiceMechanism {...props} />
  </VizCard>
)
export const TyphonMountainAscent = props => (
  <VizCard id={'III.05.1'} title={'Mountain Ascent'}>
    <bIII.TyphonMountainAscent {...props} />
  </VizCard>
)
export const TyphonPiatonDuality = props => (
  <VizCard id={'III.05.2'} title={'Typhon Piaton Duality'}>
    <bIII.TyphonPiatonDuality {...props} />
  </VizCard>
)
export const BIII_Ch06ClawAuthorityWeb = props => (
  <VizCard id={'III.05.3'} title={'Claw Authority Web'}>
    <bIII.Ch06ClawAuthorityWeb {...props} />
  </VizCard>
)
export const LakeSceneMap = props => (
  <VizCard id={'III.06.1'} title={'Lake Scene Map'}>
    <bIII.LakeSceneMap {...props} />
  </VizCard>
)
export const BIII_Ch07AuthorityWeb = props => (
  <VizCard id={'III.06.2'} title={'Authority Web · Lake'}>
    <bIII.Ch07AuthorityWeb {...props} />
  </VizCard>
)
export const Ch07ChapterTimeline = props => (
  <VizCard id={'III.06.3'} title={'Chapter Timeline'}>
    <bIII.Ch07ChapterTimeline {...props} />
  </VizCard>
)
export const LakeCastleGeography = props => (
  <VizCard id={'III.07.1'} title={'Castle Geography'}>
    <bIII.LakeCastleGeography {...props} />
  </VizCard>
)
export const HierodulemaskLayers = props => (
  <VizCard id={'III.07.2'} title={'Hierodule Mask Layers'}>
    <bIII.HierodulemaskLayers {...props} />
  </VizCard>
)
export const ClawTransformation = props => (
  <VizCard id={'III.07.3'} title={'Claw Transformation'}>
    <bIII.ClawTransformation {...props} />
  </VizCard>
)

// ─── BOOK IV · THE CITADEL OF THE AUTARCH ─────────────────────────────────────
export const BIV_Ch01StructureDiagram = props => (
  <VizCard id={'IV.01.1'} title={'Structure Diagram'}>
    <bIV.Ch01StructureDiagram {...props} />
  </VizCard>
)
export const Ch01ResurrectionSequence = props => (
  <VizCard id={'IV.01.2'} title={'Resurrection Sequence'}>
    <bIV.Ch01ResurrectionSequence {...props} />
  </VizCard>
)
export const BIV_Ch01EmotionalArc = props => (
  <VizCard id={'IV.01.3'} title={'Emotional Arc · Ch. 1'}>
    <bIV.Ch01EmotionalArc {...props} />
  </VizCard>
)
export const BIV_Ch01CharacterWeb = props => (
  <VizCard id={'IV.01.4'} title={'Character Web · Ch. 1'}>
    <bIV.Ch01CharacterWeb {...props} />
  </VizCard>
)
export const BIV_Ch02StructureDiagram = props => (
  <VizCard id={'IV.02.1'} title={'Structure Diagram · Ch. 2'}>
    <bIV.Ch02StructureDiagram {...props} />
  </VizCard>
)
export const Ch02AscianSpeechGrammar = props => (
  <VizCard id={'IV.02.2'} title={'Ascian Speech Grammar'}>
    <bIV.Ch02AscianSpeechGrammar {...props} />
  </VizCard>
)
export const BIV_Ch02CharacterWeb = props => (
  <VizCard id={'IV.02.3'} title={'Character Web · Ch. 2'}>
    <bIV.Ch02CharacterWeb {...props} />
  </VizCard>
)
export const Ch02ClawParadox = props => (
  <VizCard id={'IV.02.4'} title={'Claw Paradox'}>
    <bIV.Ch02ClawParadox {...props} />
  </VizCard>
)
export const BIV_Ch03StructureDiagram = props => (
  <VizCard id={'IV.03.1'} title={'Structure Diagram · Module 03'}>
    <bIV.Ch03StructureDiagram {...props} />
  </VizCard>
)
export const BIV_Ch03CharacterWeb = props => (
  <VizCard id={'IV.03.2'} title={'Character Web · Module 03'}>
    <bIV.Ch03CharacterWeb {...props} />
  </VizCard>
)
export const Ch03AscianStoryArc = props => (
  <VizCard id={'IV.03.3'} title={'Ascian Story Arc'}>
    <bIV.Ch03AscianStoryArc {...props} />
  </VizCard>
)
export const Ch03SlaveryPaths = props => (
  <VizCard id={'IV.03.4'} title={'Slavery Paths'}>
    <bIV.Ch03SlaveryPaths {...props} />
  </VizCard>
)
export const Ch03ThreeSuitorsRoutes = props => (
  <VizCard id={'IV.03.5'} title={'Three Suitors Routes'}>
    <bIV.Ch03ThreeSuitorsRoutes {...props} />
  </VizCard>
)
export const Ch03LastHouseTime = props => (
  <VizCard id={'IV.03.6'} title={'Last House Time'}>
    <bIV.Ch03LastHouseTime {...props} />
  </VizCard>
)
export const Ch04ChapterArc = props => (
  <VizCard id={'IV.04.1'} title={'Chapter Arc'}>
    <bIV.Ch04ChapterArc {...props} />
  </VizCard>
)
export const Ch04ThreeFactionStandoff = props => (
  <VizCard id={'IV.04.2'} title={'Three-Faction Standoff'}>
    <bIV.Ch04ThreeFactionStandoff {...props} />
  </VizCard>
)
export const Ch04BattleFormation = props => (
  <VizCard id={'IV.04.3'} title={'Battle Formation'}>
    <bIV.Ch04BattleFormation {...props} />
  </VizCard>
)
export const Ch04AutarchIdentityWeb = props => (
  <VizCard id={'IV.04.4'} title={'Autarch Identity Web'}>
    <bIV.Ch04AutarchIdentityWeb {...props} />
  </VizCard>
)
export const Ch05ThreeFactionCollapse = props => (
  <VizCard id={'IV.05.1'} title={'Three Faction Collapse'}>
    <bIV.Ch05ThreeFactionCollapse {...props} />
  </VizCard>
)
export const Ch05AutarchIdentityStack = props => (
  <VizCard id={'IV.05.2'} title={'Autarch Identity Stack'}>
    <bIV.Ch05AutarchIdentityStack {...props} />
  </VizCard>
)
export const Ch05AquastorProjection = props => (
  <VizCard id={'IV.05.3'} title={'Aquastor Projection'}>
    <bIV.Ch05AquastorProjection {...props} />
  </VizCard>
)
export const Ch05ThornBushClaw = props => (
  <VizCard id={'IV.05.4'} title={'Thorn Bush Claw'}>
    <bIV.Ch05ThornBushClaw {...props} />
  </VizCard>
)
export const Ch06RouteMap = props => (
  <VizCard id={'IV.06.1'} title={'Route Map'}>
    <bIV.Ch06RouteMap {...props} />
  </VizCard>
)
export const BIV_Ch06CharacterWeb = props => (
  <VizCard id={'IV.06.2'} title={'Character Web · Module 06'}>
    <bIV.Ch06CharacterWeb {...props} />
  </VizCard>
)
export const Ch06ReturnsAndCallbacks = props => (
  <VizCard id={'IV.06.3'} title={'Returns and Callbacks'}>
    <bIV.Ch06ReturnsAndCallbacks {...props} />
  </VizCard>
)
export const Ch06TimeLoopDiagram = props => (
  <VizCard id={'IV.06.4'} title={'Time-Loop Diagram'}>
    <bIV.Ch06TimeLoopDiagram {...props} />
  </VizCard>
)

// ─── Migrated legacy viz (Book III) ──────────────────────────────────────────
export const PowerStructureDiagram = props => (
  <VizCard id={'III.LG.1'} title={'Power Structure: Modern vs Commonwealth'}>
    <bIII.PowerStructureDiagram {...props} />
  </VizCard>
)

// ─── Migrated legacy viz (Book IV) ───────────────────────────────────────────
export const Ch04AscianStructure = props => (
  <VizCard id={'IV.04.LG1'} title={'Ascian Structure · Verbal vs Military'}>
    <bIV.Ch04AscianStructure {...props} />
  </VizCard>
)
export const Ch04SeverianFearArc = props => (
  <VizCard id={'IV.04.LG2'} title={"Severian's Fear Arc · Ch. XXI–XXII"}>
    <bIV.Ch04SeverianFearArc {...props} />
  </VizCard>
)
export const Ch05ChapterArc = props => (
  <VizCard id={'IV.05.LG1'} title={'Module 05 Chapter Arc'}>
    <bIV.Ch05ChapterArc {...props} />
  </VizCard>
)
export const Ch05TimeCorridor = props => (
  <VizCard id={'IV.05.LG2'} title={'The Corridors of Time'}>
    <bIV.Ch05TimeCorridor {...props} />
  </VizCard>
)
export const Ch06ClawMeditationTree = props => (
  <VizCard id={'IV.06.LG1'} title={"The Claw's Power · Two Theories"}>
    <bIV.Ch06ClawMeditationTree {...props} />
  </VizCard>
)
export const Ch06StructureDiagram = props => (
  <VizCard id={'IV.06.LG2'} title={'Module 06 Structure · Return to the Citadel'}>
    <bIV.Ch06StructureDiagram {...props} />
  </VizCard>
)

// ─── Plate (painting-card wrapper for books) ─────────────────────────────────
export { Plate } from './books/fantasy/Science Fantasy/plate'

// ─── STAR WARS · EPISODE I · THE PHANTOM MENACE ───────────────────────────────
export const TfaTimelineSvg = props => (
  <VizCard id={'SW.I.01.1'} title={'Trade Federation Scene Timeline'}>
    <tpmI.TfaTimelineSvg {...props} />
  </VizCard>
)
export const TfaRelationshipSvg = props => (
  <VizCard id={'SW.I.01.2'} title={'Trade Federation Character Web'}>
    <tpmI.TfaRelationshipSvg {...props} />
  </VizCard>
)
export const TfaShipLayoutSvg = props => (
  <VizCard id={'SW.I.01.3'} title={'Trade Federation Cruiser Layout'}>
    <tpmI.TfaShipLayoutSvg {...props} />
  </VizCard>
)
export const TfaThemeMapSvg = props => (
  <VizCard id={'SW.I.01.4'} title={'Trade Federation Theme Map'}>
    <tpmI.TfaThemeMapSvg {...props} />
  </VizCard>
)
export const DmsCharacterWebSvg = props => (
  <VizCard id={'SW.I.03.1'} title={'Tatooine · Character Web'}>
    <tpmI.DmsCharacterWebSvg {...props} />
  </VizCard>
)
export const RaceCourseMap = props => (
  <VizCard id={'SW.I.04.1'} title={'Boonta Eve Race Course'}>
    <tpmI.RaceCourseMap {...props} />
  </VizCard>
)
export const PodracerLineup = props => (
  <VizCard id={'SW.I.04.2'} title={'Boonta Eve Starting Lineup'}>
    <tpmI.PodracerLineup {...props} />
  </VizCard>
)
export const RaceTimeline = props => (
  <VizCard id={'SW.I.04.3'} title={'Podrace Event Timeline'}>
    <tpmI.RaceTimeline {...props} />
  </VizCard>
)
export const PodraceCharacterWeb = props => (
  <VizCard id={'SW.I.04.4'} title={'Podrace Character Relationships'}>
    <tpmI.PodraceCharacterWeb {...props} />
  </VizCard>
)
export const DarkSideTimelineSvg = props => (
  <VizCard id={'SW.I.05.1'} title={'Dark Side Threat Arc'}>
    <tpmI.DarkSideTimelineSvg {...props} />
  </VizCard>
)
export const MaulAttackSvg = props => (
  <VizCard id={'SW.I.05.2'} title={"Maul's Attack: Position and Tempo"}>
    <tpmI.MaulAttackSvg {...props} />
  </VizCard>
)
export const FirstMeetingSvg = props => (
  <VizCard id={'SW.I.05.3'} title={'First Meeting: Obi-Wan and Anakin'}>
    <tpmI.FirstMeetingSvg {...props} />
  </VizCard>
)
export const TwoInstructionsSvg = props => (
  <VizCard id={'SW.I.05.4'} title={'Two Instructions, One Wound'}>
    <tpmI.TwoInstructionsSvg {...props} />
  </VizCard>
)
export const IncompleteLiberationSvg = props => (
  <VizCard id={'SW.I.05.5'} title={'The Incomplete Liberation'}>
    <tpmI.IncompleteLiberationSvg {...props} />
  </VizCard>
)
export const FarewellCascadeSvg = props => (
  <VizCard id={'SW.I.05.6'} title={'The Farewell Cascade'}>
    <tpmI.FarewellCascadeSvg {...props} />
  </VizCard>
)
export const PoliticalPowerWeb = props => (
  <VizCard id={'SW.I.06.1'} title={'Coruscant Power Web'}>
    <tpmI.PoliticalPowerWeb {...props} />
  </VizCard>
)
export const CoruscantModuleTimeline = props => (
  <VizCard id={'SW.I.06.2'} title={'Coruscant Politics Scene Timeline'}>
    <tpmI.CoruscantModuleTimeline {...props} />
  </VizCard>
)
export const BattleMap = props => (
  <VizCard id={'SW.I.07.1'} title={'Battle of Naboo: Four Fronts'}>
    <tpmI.BattleMap {...props} />
  </VizCard>
)
export const CharacterArcTimeline = props => (
  <VizCard id={'SW.I.07.2'} title={'Character Arcs: Return and Battle of Naboo'}>
    <tpmI.CharacterArcTimeline {...props} />
  </VizCard>
)
