// Topic grouping for the algebra visualizations showcase.
// Names are the exported function names from src/components/viz/algebra.jsx.
// The showcase iterates EVERY export of that module; any name not listed here
// lands in the trailing "Uncategorized" section, so the gallery is always
// complete even if a new viz is added without touching this manifest.

export const ALGEBRA_GROUPS = [
  {
    label: 'Foundations & Number',
    names: [
      'NumberLineViz',
      'NumberLineNegativesViz',
      'NumberLineSignViz',
      'BinaryPlaceValueViz',
      'CommutativityGridViz',
      'DistributiveLawViz'
    ]
  },
  {
    // Identity-pair naming is INVERTED between the two survivors: the square-of-sum
    // keeps the …GeomViz name, the difference-of-squares keeps the plain …Viz name.
    // Removed in the refinement: SquareOfSumViz (dup of SquareOfSumGeomViz) and
    // DiffOfSquaresGeomViz (dup of DiffOfSquaresViz). Do not re-add either.
    label: 'Identities, Binomial & Pascal',
    names: ['SquareOfSumGeomViz', 'DiffOfSquaresViz', 'OddSquaresViz', 'PascalTriangleViz']
  },
  {
    label: 'Exponents, Roots & Radicals',
    names: [
      'PowersOf2Viz',
      'ExponentAdditionViz',
      'SquareRootAnchorViz',
      'SquareRootTransformViz',
      'RadicalSquareSignViz'
    ]
  },
  {
    label: 'Fractions, Ratio & Proportion',
    names: [
      'FractionNumberLineViz',
      'FractionCompareViz',
      'DirectProportionViz',
      'InverseProportionViz'
    ]
  },
  {
    label: 'Lines & Linear Equations',
    names: [
      'CartesianPlaneViz',
      'PlotPointsViz',
      'GraphPointViz',
      'DistanceTriangleViz',
      'SlopeTypesViz',
      'LineSlopeInterceptViz',
      'ParallelPerpViz',
      'TwoLinesViz'
    ]
  },
  {
    label: 'Systems & Linear Inequalities',
    names: [
      'SystemsViz',
      'NumberLineInequalityViz',
      'NumberLineInequalityVizGL',
      'HalfPlaneViz',
      'FeasibleRegionViz'
    ]
  },
  {
    label: 'Quadratics',
    names: [
      'ParabolaBasicViz',
      'ParabolaPlotViz',
      'ParabolaViz',
      'ParabolaCoeffViz',
      'StandardFormViz',
      'InteractiveParabolaViz',
      'InteractiveVertexViz',
      'ParabolaDiscriminantViz',
      'InteractiveDiscriminantViz',
      'VietasRootsViz',
      'MaxMinViz',
      'AlKhwarizmiViz',
      'HorizontalParabolaViz',
      'CircleViz',
      'QuadInequalityViz',
      'InteractiveOptimizationViz'
    ]
  },
  {
    label: 'Classical Inequalities (Means)',
    names: ['MeanChainViz', 'AMGMRectViz', 'QMConvexViz', 'TrivialInequalityViz']
  },
  {
    label: 'Polynomials & Rational Functions',
    names: [
      'PolynomialLabeledViz',
      'PolynomialCurveViz',
      'IntersectionViz',
      'ReciprocalAnchorViz',
      'RationalAsymptoteViz',
      'RationalHoleViz',
      'DegreeAsymptoteViz'
    ]
  },
  {
    label: 'Functions & Transformations',
    names: [
      'FunctionMachineViz',
      'CompositionChainViz',
      'VerticalScaleViz',
      'HorizontalScaleViz',
      'InverseGraphViz',
      'RefInverseViz',
      'LogExpInverseViz',
      'FloorStaircaseViz'
    ]
  },
  {
    label: 'Exponential & Logarithmic',
    names: [
      'ExponentialGraphViz',
      'InteractiveExponentialViz',
      'GrowthComparisonViz',
      'EqualBasesViz',
      'CompoundVsSimpleViz',
      'LogarithmGraphViz',
      'LogSolvingViz'
    ]
  },
  {
    label: 'Sequences & Series',
    names: [
      'SequenceVsSeriesViz',
      'ArithmeticNumberLineViz',
      'GaussPairingViz',
      'TelescopingViz',
      'PartialSumsViz',
      'StaircaseViz',
      'FibonacciStaircaseViz',
      'PianoViz'
    ]
  },
  {
    label: 'Modulus & Complex',
    names: [
      'ModulusGraphViz',
      'ModulusDistanceViz',
      'ModulusTransformViz',
      'ModulusEquationViz',
      'ModulusInequalityViz',
      'PowersOfIViz'
    ]
  }
]
