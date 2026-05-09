import React from 'react'
import { VizCard } from '../../physics-viz/primitives'
import * as am from './arithmetic'

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
