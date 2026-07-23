// Shared resource metadata and content structure
// Single source of truth for all resources

// Resource metadata
export const resourceMetadata = [
  {
    title: 'Biography',
    mainCategory: 'explore',
    category: 'books',
    slug: 'library/biography',
    description: 'Lives of the figures who built, broke, and remade the world.',
    url: '#'
  },
  {
    title: 'Fantasy',
    mainCategory: 'explore',
    category: 'books',
    slug: 'library/fantasy',
    description:
      'Speculative fiction across dying earth, weird tale, science fantasy, and high fantasy.',
    url: '#',
    source: [
      { title: 'The Shadow of the Torturer', author: 'Gene Wolfe', year: '1980' },
      { title: 'The Claw of the Conciliator', author: 'Gene Wolfe', year: '1981' },
      { title: 'The Sword of the Lictor', author: 'Gene Wolfe', year: '1982' }
    ]
  },
  {
    title: 'Lex Fridman Podcast',
    mainCategory: 'explore',
    category: 'podcasts',
    slug: 'library/lex-fridman-podcast',
    description:
      'Broad intellectual conversations across science, technology, philosophy, history.',
    difficulty: 1,
    url: '#'
  },
  {
    title: 'History & Geopolitics',
    mainCategory: 'explore',
    category: 'videos',
    slug: 'library/history-geopolitics',
    description: 'Historical analysis and geopolitical strategy.',
    difficulty: 1,
    url: '#'
  },
  {
    title: 'Arithmetic',
    mainCategory: 'explore',
    category: 'mathematics',
    slug: 'explore/mathematics/arithmetic',
    description:
      'How numbers work and combine. Start with the four operations on whole numbers, fractions, decimals, and signed rationals. Then the structure underneath them: factors, primes, ratio, rate, and percent. Finish on the full number line, from integers out to irrationals and surds. Every later mathematics, from algebra to calculus to topology, assumes you can run all of this without thinking.',
    url: '#',
    source: [
      {
        title: 'Understanding Numbers in Elementary School Mathematics',
        author: 'Hung-Hsi Wu'
      },
      { title: 'Prealgebra', author: 'Rusczyk, Patrick & Boppana' },
      { title: 'Algebra', author: 'Gelfand & Shen' },
      {
        title: 'Complete Mathematics for Cambridge IGCSE Extended',
        author: 'Rayner, Bettison & Taylor'
      }
    ]
  },
  {
    title: 'Algebra',
    mainCategory: 'explore',
    category: 'mathematics',
    slug: 'explore/mathematics/algebra',
    description:
      'The language of unknowns. Variables, equations, and functions that turn arithmetic into a general-purpose tool for describing any relationship between quantities.',
    url: '#',
    source: [
      { title: 'Algebra', author: 'I. M. Gelfand, A. Shen' },
      { title: 'Functions and Graphs', author: 'I. M. Gelfand, E. G. Glagoleva, E. E. Shnol' },
      {
        title: 'Precalculus: Mathematics for Calculus',
        author: 'J. Stewart, L. Redlin, S. Watson'
      },
      { title: 'How to Prove It: A Structured Approach', author: 'D. J. Velleman' },
      { title: 'Complex Numbers from A to ...Z', author: 'T. Andreescu, D. Andrica' },
      { title: 'Elementary Linear Algebra', author: 'H. Anton, C. Rorres, A. Kaul' },
      { title: 'The Cauchy-Schwarz Master Class', author: 'J. M. Steele' }
    ]
  },
  {
    title: 'Information Theory',
    mainCategory: 'library',
    category: 'papers',
    slug: 'library/papers',
    description: 'Landmark papers in information theory, computation, and mathematics.',
    url: '#'
  },
  {
    title: 'German',
    mainCategory: 'explore',
    category: 'linguistics',
    slug: 'explore/languages/german',
    description:
      'The language of Goethe, Kant, and Bach. Spoken by 100 million people across Central Europe.',
    url: '#',
    source: 'Begegnungen A1+, Buscha/Szita'
  },
  {
    title: 'Science Fiction',
    mainCategory: 'library',
    category: 'films',
    slug: 'library/films/science-fiction',
    description: 'Films that explore science, technology, and speculative futures.',
    url: '#',
    source: [
      { title: 'Star Wars: Episode I - The Phantom Menace', author: 'George Lucas', year: '1999' }
    ]
  },
  {
    title: 'Classical Mechanics',
    mainCategory: 'explore',
    category: 'physics',
    slug: 'explore/physics/classical-mechanics',
    description:
      "How matter moves under forces. From a falling apple to a spinning gyroscope, classical mechanics covers everything bigger than an atom and slower than light. Three formulations describe the same physics with progressively deeper mathematics: Newton's vectors, Lagrange's action, and Hamilton's phase space.",
    url: '#',
    source: [
      'V. I. Arnold, Mathematical Methods of Classical Mechanics',
      'L. D. Landau & E. M. Lifshitz, Mechanics',
      'J. V. José & E. J. Saletan, Classical Dynamics: A Contemporary Approach',
      'A. J. Lichtenberg & M. A. Lieberman, Regular and Chaotic Dynamics',
      'M. Henneaux & C. Teitelboim, Quantization of Gauge Systems',
      'J. E. Marsden & T. S. Ratiu, Introduction to Mechanics and Symmetry',
      'H. Goldstein, C. P. Poole & J. L. Safko, Classical Mechanics',
      'K. S. Thorne & R. D. Blandford, Modern Classical Physics',
      'P. G. Drazin & R. S. Johnson, Solitons: An Introduction'
    ]
  },
  {
    title: 'Prehistory',
    mainCategory: 'explore',
    category: 'history',
    slug: 'explore/history/prehistory',
    description:
      'The human story from the first stone tools to the end of the Ice Age. Six million years of evolution, dispersal, and the cognitive leap that produced art, language, and the transformation from foragers to the threshold of civilization.',
    url: '#',
    source: {
      title: 'The Human Past: World Prehistory and the Development of Human Societies',
      author: 'Chris Scarre (ed.)'
    }
  },
  {
    title: 'General Chemistry',
    mainCategory: 'explore',
    category: 'chemistry',
    slug: 'explore/chemistry/general-chemistry',
    description:
      'Matter, and how it changes. General Chemistry covers atoms, bonds, energy, rates, and equilibrium. It builds from the periodic table to acids, redox, transition metals, and industrial synthesis.',
    url: '#',
    source: [
      'P. Atkins & L. Jones, Chemical Principles',
      'D. W. Oxtoby, H. P. Gillis & A. Campion, Principles of Modern Chemistry',
      'C. E. Housecroft & A. G. Sharpe, Inorganic Chemistry',
      'P. Atkins & J. de Paula, Physical Chemistry'
    ]
  },
]

export const categoryStructure = {
  library: {
    name: 'LIBRARY',
    subcategories: [
      { id: 'books', name: 'Books' },
      { id: 'films', name: 'Films' },
      { id: 'podcasts', name: 'Podcasts' },
      { id: 'videos', name: 'Videos' },
      { id: 'papers', name: 'Papers' }
    ]
  },
  explore: {
    name: 'EXPLORE',
    subcategories: [
      { id: 'mathematics', name: 'Mathematics' },
      { id: 'physics', name: 'Physics' },
      { id: 'chemistry', name: 'Chemistry' },
      { id: 'linguistics', name: 'Linguistics' },
      { id: 'history', name: 'History' }
    ]
  }
}

// Create slug-to-index mapping for routing
export const slugToIndex = {}
resourceMetadata.forEach((resource, index) => {
  slugToIndex[resource.slug] = index
})

// Topic to component mapping
export const topicComponentMap = {}

// Arithmetic
topicComponentMap['Place Value and Algorithms'] = {
  component: 'PlaceValueAndAlgorithms',
  filePath: 'explore/mathematics/arithmetic/place-value-and-algorithms',
  slug: 'explore/mathematics/arithmetic/place-value-and-algorithms',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Number Line and Number Systems'] = {
  component: 'NumberLineAndNumberSystems',
  filePath: 'explore/mathematics/arithmetic/number-line-and-number-systems',
  slug: 'explore/mathematics/arithmetic/number-line-and-number-systems',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Integers and Negative Numbers'] = {
  component: 'IntegersAndNegativeNumbers',
  filePath: 'explore/mathematics/arithmetic/integers-and-negative-numbers',
  slug: 'explore/mathematics/arithmetic/integers-and-negative-numbers',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Ordering and Comparison'] = {
  component: 'OrderingAndComparison',
  filePath: 'explore/mathematics/arithmetic/ordering-and-comparison',
  slug: 'explore/mathematics/arithmetic/ordering-and-comparison',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Mental Calculation Strategies'] = {
  component: 'MentalCalculationStrategies',
  filePath: 'explore/mathematics/arithmetic/mental-calculation-strategies',
  slug: 'explore/mathematics/arithmetic/mental-calculation-strategies',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Fraction Foundations'] = {
  component: 'FractionFoundations',
  filePath: 'explore/mathematics/arithmetic/fraction-foundations',
  slug: 'explore/mathematics/arithmetic/fraction-foundations',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Fraction Operations'] = {
  component: 'FractionOperations',
  filePath: 'explore/mathematics/arithmetic/fraction-operations',
  slug: 'explore/mathematics/arithmetic/fraction-operations',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Fraction Applications'] = {
  component: 'FractionApplications',
  filePath: 'explore/mathematics/arithmetic/fraction-applications',
  slug: 'explore/mathematics/arithmetic/fraction-applications',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Fraction Advanced Topics'] = {
  component: 'FractionAdvancedTopics',
  filePath: 'explore/mathematics/arithmetic/fraction-advanced-topics',
  slug: 'explore/mathematics/arithmetic/fraction-advanced-topics',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Rational Numbers'] = {
  component: 'RationalNumbers',
  filePath: 'explore/mathematics/arithmetic/rational-numbers',
  slug: 'explore/mathematics/arithmetic/rational-numbers',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Factors and Multiples'] = {
  component: 'FactorsAndMultiples',
  filePath: 'explore/mathematics/arithmetic/factors-and-multiples',
  slug: 'explore/mathematics/arithmetic/factors-and-multiples',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Divisibility Tests'] = {
  component: 'DivisibilityTests',
  filePath: 'explore/mathematics/arithmetic/divisibility-tests',
  slug: 'explore/mathematics/arithmetic/divisibility-tests',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Prime Numbers and Prime Factorisation'] = {
  component: 'PrimeNumbersAndPrimeFactorisation',
  filePath: 'explore/mathematics/arithmetic/prime-numbers-and-prime-factorisation',
  slug: 'explore/mathematics/arithmetic/prime-numbers-and-prime-factorisation',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['HCF and LCM'] = {
  component: 'HcfAndLcm',
  filePath: 'explore/mathematics/arithmetic/hcf-and-lcm',
  slug: 'explore/mathematics/arithmetic/hcf-and-lcm',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Number Theory'] = {
  component: 'NumberTheory',
  filePath: 'explore/mathematics/arithmetic/number-theory',
  slug: 'explore/mathematics/arithmetic/number-theory',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Odd and Even Numbers'] = {
  component: 'OddAndEvenNumbers',
  filePath: 'explore/mathematics/arithmetic/odd-and-even-numbers',
  slug: 'explore/mathematics/arithmetic/odd-and-even-numbers',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Decimal Fundamentals'] = {
  component: 'DecimalFundamentals',
  filePath: 'explore/mathematics/arithmetic/decimal-fundamentals',
  slug: 'explore/mathematics/arithmetic/decimal-fundamentals',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Infinite and Repeating Decimals'] = {
  component: 'InfiniteAndRepeatingDecimals',
  filePath: 'explore/mathematics/arithmetic/infinite-and-repeating-decimals',
  slug: 'explore/mathematics/arithmetic/infinite-and-repeating-decimals',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Decimal Expansion Proofs'] = {
  component: 'DecimalExpansionProofs',
  filePath: 'explore/mathematics/arithmetic/decimal-expansion-proofs',
  slug: 'explore/mathematics/arithmetic/decimal-expansion-proofs',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Approximation: Significant Figures and Decimal Places'] = {
  component: 'ApproximationSignificantFiguresAndDecimalPlaces',
  filePath: 'explore/mathematics/arithmetic/approximation-significant-figures-and-decimal-places',
  slug: 'explore/mathematics/arithmetic/approximation-significant-figures-and-decimal-places',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Opposite Numbers and Absolute Value'] = {
  component: 'OppositeNumbersAndAbsoluteValue',
  filePath: 'explore/mathematics/arithmetic/opposite-numbers-and-absolute-value',
  slug: 'explore/mathematics/arithmetic/opposite-numbers-and-absolute-value',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Operations on Signed Rationals'] = {
  component: 'OperationsOnSignedRationals',
  filePath: 'explore/mathematics/arithmetic/operations-on-signed-rationals',
  slug: 'explore/mathematics/arithmetic/operations-on-signed-rationals',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Ratio'] = {
  component: 'Ratio',
  filePath: 'explore/mathematics/arithmetic/ratio',
  slug: 'explore/mathematics/arithmetic/ratio',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Direct and Inverse Proportion'] = {
  component: 'DirectAndInverseProportion',
  filePath: 'explore/mathematics/arithmetic/direct-and-inverse-proportion',
  slug: 'explore/mathematics/arithmetic/direct-and-inverse-proportion',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Rate, Speed, Average Speed'] = {
  component: 'RateSpeedAverageSpeed',
  filePath: 'explore/mathematics/arithmetic/rate-speed-average-speed',
  slug: 'explore/mathematics/arithmetic/rate-speed-average-speed',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Map Scales'] = {
  component: 'MapScales',
  filePath: 'explore/mathematics/arithmetic/map-scales',
  slug: 'explore/mathematics/arithmetic/map-scales',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Percentages: Concept and Conversions'] = {
  component: 'PercentagesConceptAndConversions',
  filePath: 'explore/mathematics/arithmetic/percentages-concept-and-conversions',
  slug: 'explore/mathematics/arithmetic/percentages-concept-and-conversions',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Percentage of a Quantity'] = {
  component: 'PercentageOfAQuantity',
  filePath: 'explore/mathematics/arithmetic/percentage-of-a-quantity',
  slug: 'explore/mathematics/arithmetic/percentage-of-a-quantity',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Percentage Increase and Decrease'] = {
  component: 'PercentageIncreaseAndDecrease',
  filePath: 'explore/mathematics/arithmetic/percentage-increase-and-decrease',
  slug: 'explore/mathematics/arithmetic/percentage-increase-and-decrease',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Squares, Cubes, Square Roots, Cube Roots'] = {
  component: 'SquaresCubesSquareRootsCubeRoots',
  filePath: 'explore/mathematics/arithmetic/squares-cubes-square-roots-cube-roots',
  slug: 'explore/mathematics/arithmetic/squares-cubes-square-roots-cube-roots',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Irrational Numbers and the Real-Number System'] = {
  component: 'IrrationalNumbersAndTheRealNumberSystem',
  filePath: 'explore/mathematics/arithmetic/irrational-numbers-and-the-real-number-system',
  slug: 'explore/mathematics/arithmetic/irrational-numbers-and-the-real-number-system',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Real Numbers on the Number Line'] = {
  component: 'RealNumbersOnTheNumberLine',
  filePath: 'explore/mathematics/arithmetic/real-numbers-on-the-number-line',
  slug: 'explore/mathematics/arithmetic/real-numbers-on-the-number-line',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Simple Quadratic Surds'] = {
  component: 'SimpleQuadraticSurds',
  filePath: 'explore/mathematics/arithmetic/simple-quadratic-surds',
  slug: 'explore/mathematics/arithmetic/simple-quadratic-surds',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Index Notation and Laws of Integral Indices'] = {
  component: 'IndexNotationAndLawsOfIntegralIndices',
  filePath: 'explore/mathematics/arithmetic/index-notation-and-laws-of-integral-indices',
  slug: 'explore/mathematics/arithmetic/index-notation-and-laws-of-integral-indices',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Number Sequences and Patterns'] = {
  component: 'NumberSequencesAndPatterns',
  filePath: 'explore/mathematics/arithmetic/number-sequences-and-patterns',
  slug: 'explore/mathematics/arithmetic/number-sequences-and-patterns',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Arithmetic and Geometric Sequences'] = {
  component: 'ArithmeticAndGeometricSequences',
  filePath: 'explore/mathematics/arithmetic/arithmetic-and-geometric-sequences',
  slug: 'explore/mathematics/arithmetic/arithmetic-and-geometric-sequences',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Discount, Profit, Loss'] = {
  component: 'DiscountProfitLoss',
  filePath: 'explore/mathematics/arithmetic/discount-profit-loss',
  slug: 'explore/mathematics/arithmetic/discount-profit-loss',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Simple and Compound Interest'] = {
  component: 'SimpleAndCompoundInterest',
  filePath: 'explore/mathematics/arithmetic/simple-and-compound-interest',
  slug: 'explore/mathematics/arithmetic/simple-and-compound-interest',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Growth, Depreciation, Applied Tax'] = {
  component: 'GrowthDepreciationAppliedTax',
  filePath: 'explore/mathematics/arithmetic/growth-depreciation-applied-tax',
  slug: 'explore/mathematics/arithmetic/growth-depreciation-applied-tax',
  parentSlug: 'explore/mathematics/arithmetic'
}

// Classical Mechanics modules
// Unit 1 - Newtonian Mechanics
topicComponentMap['Vectors, Kinematics, and the Galilean Structure of Space-Time'] = {
  component: 'VectorsKinematicsAndGalileanStructure',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/vectors-kinematics-and-galilean-structure',
  slug: 'explore/physics/classical-mechanics/vectors-kinematics-and-the-galilean-structure-of-space-time',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap["Newton's Laws and Equations of Motion"] = {
  component: 'NewtonsLawsAndEquationsOfMotion',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/newtons-laws-and-integration',
  slug: 'explore/physics/classical-mechanics/newtons-laws-and-equations-of-motion',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Momentum, Systems of Particles, and Variable-Mass Dynamics'] = {
  component: 'MomentumAndSystemsOfParticles',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/momentum-and-systems-of-particles',
  slug: 'explore/physics/classical-mechanics/momentum-systems-of-particles-and-variable-mass-dynamics',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Work, Energy, and Conservative Force Fields'] = {
  component: 'WorkEnergyAndConservativeForceFields',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/conservative-force-fields',
  slug: 'explore/physics/classical-mechanics/work-energy-and-conservative-force-fields',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Angular Momentum and Fixed-Axis Rotation'] = {
  component: 'AngularMomentumAndRotation',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/angular-momentum-and-rotation',
  slug: 'explore/physics/classical-mechanics/angular-momentum-and-fixed-axis-rotation',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Central-Force Motion and the Kepler Problem'] = {
  component: 'CentralForceMotion',
  filePath: 'explore/physics/classical-mechanics/part-i-newtonian-mechanics/central-force-motion',
  slug: 'explore/physics/classical-mechanics/central-force-motion-and-the-kepler-problem',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Restricted Three-Body Problem and Lagrange Points'] = {
  component: 'RestrictedThreeBodyProblem',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/restricted-three-body-problem',
  slug: 'explore/physics/classical-mechanics/restricted-three-body-problem-and-lagrange-points',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Tides'] = {
  component: 'Tides',
  filePath: 'explore/physics/classical-mechanics/part-i-newtonian-mechanics/tides',
  slug: 'explore/physics/classical-mechanics/tides',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Non-Inertial Frames and Coriolis Applications'] = {
  component: 'NonInertialFramesAndCoriolisApplications',
  filePath: 'explore/physics/classical-mechanics/part-i-newtonian-mechanics/non-inertial-frames',
  slug: 'explore/physics/classical-mechanics/non-inertial-frames-and-coriolis-applications',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Small Oscillations (Elementary)'] = {
  component: 'SmallOscillationsElementary',
  filePath: 'explore/physics/classical-mechanics/part-i-newtonian-mechanics/oscillations',
  slug: 'explore/physics/classical-mechanics/small-oscillations-elementary',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Rapidly Oscillating Forces: Kapitza Pendulum'] = {
  component: 'KapitzaPendulum',
  filePath: 'explore/physics/classical-mechanics/part-i-newtonian-mechanics/kapitza-pendulum',
  slug: 'explore/physics/classical-mechanics/rapidly-oscillating-forces-kapitza-pendulum',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Rigid-Body Dynamics, Gyroscopic Motion, and the Heavy Symmetric Top'] = {
  component: 'RigidBodyDynamicsGyroscopicMotionAndTheHeavySymmetricTop',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/rigid-body-dynamics-and-gyroscopes',
  slug: 'explore/physics/classical-mechanics/rigid-body-dynamics-gyroscopic-motion-and-the-heavy-symmetric-top',
  parentSlug: 'explore/physics/classical-mechanics'
}

// Unit 2 - Lagrangian Mechanics and Variational Principles
topicComponentMap["D'Alembert's Principle and Virtual Displacements"] = {
  component: 'DAlembertsPrincipleAndVirtualDisplacements',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/dalembert-principle',
  slug: 'explore/physics/classical-mechanics/dalemberts-principle-and-virtual-displacements',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['The Principle of Least Action and the Euler-Lagrange Equations'] = {
  component: 'ThePrincipleOfLeastActionAndTheEulerLagrangeEquations',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/euler-lagrange-equations',
  slug: 'explore/physics/classical-mechanics/the-principle-of-least-action-and-the-euler-lagrange-equations',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Variational Problems Beyond Mechanics'] = {
  component: 'VariationalProblemsBeyondMechanics',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/variational-problems-beyond-mechanics',
  slug: 'explore/physics/classical-mechanics/variational-problems-beyond-mechanics',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Holonomic and Non-Holonomic Constraints'] = {
  component: 'HolonomicAndNonHolonomicConstraints',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/holonomic-and-nonholonomic-constraints',
  slug: 'explore/physics/classical-mechanics/holonomic-and-non-holonomic-constraints',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap["Symmetries and Conservation Laws: Noether's Theorem"] = {
  component: 'SymmetriesAndConservationLawsNoethersTheorem',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/noether-theorem-conservation-laws',
  slug: 'explore/physics/classical-mechanics/symmetries-and-conservation-laws-noethers-theorem',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Integration of the Equations of Motion'] = {
  component: 'IntegrationOfTheEquationsOfMotion',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/integration-by-quadrature',
  slug: 'explore/physics/classical-mechanics/integration-of-the-equations-of-motion',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Routhian Reduction for Cyclic Coordinates'] = {
  component: 'RouthianReductionForCyclicCoordinates',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/routhian-reduction',
  slug: 'explore/physics/classical-mechanics/routhian-reduction-for-cyclic-coordinates',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Collisions and Scattering'] = {
  component: 'CollisionsAndScattering',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/collisions-and-scattering',
  slug: 'explore/physics/classical-mechanics/collisions-and-scattering',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Friction and Non-Conservative Forces'] = {
  component: 'FrictionAndNonConservativeForces',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/friction-and-nonconservative-forces',
  slug: 'explore/physics/classical-mechanics/friction-and-non-conservative-forces',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Small Oscillations: Systematic Theory'] = {
  component: 'SmallOscillationsSystematicTheory',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/oscillations-part-ii',
  slug: 'explore/physics/classical-mechanics/small-oscillations-systematic-theory',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Lagrangian Mechanics on Manifolds'] = {
  component: 'LagrangianMechanicsOnManifolds',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/mechanics-on-manifolds',
  slug: 'explore/physics/classical-mechanics/lagrangian-mechanics-on-manifolds',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Rigid-Body Dynamics (Lagrangian / Geometric Treatment)'] = {
  component: 'RigidBodyDynamicsLagrangianGeometricTreatment',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/rigid-body-dynamics-lagrangian',
  slug: 'explore/physics/classical-mechanics/rigid-body-dynamics-lagrangian-geometric-treatment',
  parentSlug: 'explore/physics/classical-mechanics'
}

// Unit 3 - Hamiltonian Mechanics and Canonical Formalism
topicComponentMap["Hamilton's Equations and the Legendre Transform"] = {
  component: 'SpineOfPartIIIContent',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/spine-of-part-iii',
  slug: 'explore/physics/classical-mechanics/spine-of-part-iii',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Poisson Brackets and First Integrals'] = {
  component: 'PoissonBracketsAndFirstIntegrals',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/poisson-brackets-and-first-integrals',
  slug: 'explore/physics/classical-mechanics/poisson-brackets-and-first-integrals',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap["Liouville's Theorem and Poincaré Recurrence"] = {
  component: 'LiouvilleAndPoincareRecurrence',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/liouville-and-poincare-recurrence',
  slug: 'explore/physics/classical-mechanics/liouville-and-poincare-recurrence',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Canonical Transformations and Generating Functions'] = {
  component: 'CanonicalTransformations',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/canonical-transformations',
  slug: 'explore/physics/classical-mechanics/canonical-transformations',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Differential Forms and Symplectic Manifolds'] = {
  component: 'SymplecticContactStructuresSymmetries',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/symplectic-and-contact-structures-with-symmetries',
  slug: 'explore/physics/classical-mechanics/symplectic-and-contact-structures-with-symmetries',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['The Hamilton-Jacobi Equation and the Optical-Mechanical Analogy'] = {
  component: 'HamiltonJacobiEquation',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/hamilton-jacobi-equation',
  slug: 'explore/physics/classical-mechanics/hamilton-jacobi-equation',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Action-Angle Variables and Integrable Systems'] = {
  component: 'ConditionallyPeriodicMotionContent',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/conditionally-periodic-motion',
  slug: 'explore/physics/classical-mechanics/conditionally-periodic-motion',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Curvature, Geodesic Flow, and the Limits of Prediction'] = {
  component: 'MomentumMapsAndReduction',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/momentum-maps-and-reduction',
  slug: 'explore/physics/classical-mechanics/curvature-and-geodesic-flow',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Constrained Hamiltonian Systems: Dirac-Bergmann Algorithm'] = {
  component: 'DiracBergmannConstraints',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/dirac-bergmann-constraints',
  slug: 'explore/physics/classical-mechanics/dirac-bergmann-constraints',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Classical Geometric Phase and the Hannay Angle'] = {
  component: 'HannayAngle',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/hannay-angle',
  slug: 'explore/physics/classical-mechanics/hannay-angle',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Special Relativity and Covariant Mechanics'] = {
  component: 'SpecialRelativityCoda',
  filePath: 'explore/physics/classical-mechanics/part-i-newtonian-mechanics/special-relativity',
  slug: 'explore/physics/classical-mechanics/special-relativity',
  parentSlug: 'explore/physics/classical-mechanics'
}

// Unit 4 - Perturbation Theory
topicComponentMap['Adiabatic Invariants'] = {
  component: 'AdiabaticInvariantsContent',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/adiabatic-invariants',
  slug: 'explore/physics/classical-mechanics/adiabatic-invariants',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Magnetic Adiabatic Invariants for Charged Particles'] = {
  component: 'MagneticAdiabaticInvariants',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/magnetic-adiabatic-invariants',
  slug: 'explore/physics/classical-mechanics/magnetic-adiabatic-invariants',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Canonical Perturbation Theory and Averaging'] = {
  component: 'AveragingAndCanonicalPerturbationTheory',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/averaging-and-canonical-perturbation-theory',
  slug: 'explore/physics/classical-mechanics/averaging-and-canonical-perturbation-theory',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Lie Transformation Method (Deprit Series)'] = {
  component: 'LieTransformationDeprit',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/lie-transformation-deprit',
  slug: 'explore/physics/classical-mechanics/lie-transformation-deprit',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Normal Forms near Equilibria and Periodic Orbits'] = {
  component: 'NormalFormsPerturbationsContent',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/normal-forms-and-perturbations-of-hamiltonian-systems',
  slug: 'explore/physics/classical-mechanics/normal-forms-and-perturbations-of-hamiltonian-systems',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Floquet Theory, Mathieu Equation, and Parametric Resonance'] = {
  component: 'FloquetMathieuParametricResonance',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/floquet-mathieu-parametric-resonance',
  slug: 'explore/physics/classical-mechanics/floquet-mathieu-parametric-resonance',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['KAM Theory'] = {
  component: 'KAMPerturbationContent',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/kam-perturbation-theory',
  slug: 'explore/physics/classical-mechanics/kam-perturbation-theory',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Asymptotics, Singularities, and Integrable Systems'] = {
  component: 'AdvancedTopicsAsymptoticsAndIntegrableSystems',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/advanced-topics-asymptotics-singularities-and-integrable-systems',
  slug: 'explore/physics/classical-mechanics/advanced-topics-asymptotics-singularities-and-integrable-systems',
  parentSlug: 'explore/physics/classical-mechanics'
}

// Unit 5 - Chaos and Nonlinear Dynamics
topicComponentMap['Fixed-Point Classification, Limit Cycles, and Poincaré-Bendixson'] = {
  component: 'FixedPointsAndLimitCycles',
  filePath:
    'explore/physics/classical-mechanics/part-v-chaos-and-nonlinear-dynamics/fixed-points-and-limit-cycles',
  slug: 'explore/physics/classical-mechanics/fixed-points-and-limit-cycles',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Bifurcations: Saddle-Node, Pitchfork, and Hopf'] = {
  component: 'Bifurcations',
  filePath: 'explore/physics/classical-mechanics/part-v-chaos-and-nonlinear-dynamics/bifurcations',
  slug: 'explore/physics/classical-mechanics/bifurcations',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Poincaré Sections and Poincaré Maps'] = {
  component: 'PoincareMaps',
  filePath: 'explore/physics/classical-mechanics/part-v-chaos-and-nonlinear-dynamics/poincare-maps',
  slug: 'explore/physics/classical-mechanics/poincare-maps',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Lyapunov Exponents'] = {
  component: 'LyapunovExponents',
  filePath:
    'explore/physics/classical-mechanics/part-v-chaos-and-nonlinear-dynamics/lyapunov-exponents',
  slug: 'explore/physics/classical-mechanics/lyapunov-exponents',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Attractors and Strange Attractors'] = {
  component: 'Attractors',
  filePath: 'explore/physics/classical-mechanics/part-v-chaos-and-nonlinear-dynamics/attractors',
  slug: 'explore/physics/classical-mechanics/attractors',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Logistic Map, Period-Doubling, and Feigenbaum Universality'] = {
  component: 'LogisticMapAndFeigenbaum',
  filePath:
    'explore/physics/classical-mechanics/part-v-chaos-and-nonlinear-dynamics/logistic-map-and-feigenbaum',
  slug: 'explore/physics/classical-mechanics/logistic-map-and-feigenbaum',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Fractal Dimension: Box-Counting and Correlation'] = {
  component: 'FractalDimension',
  filePath:
    'explore/physics/classical-mechanics/part-v-chaos-and-nonlinear-dynamics/fractal-dimension',
  slug: 'explore/physics/classical-mechanics/fractal-dimension',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Homoclinic Tangle and Poincaré-Birkhoff Theorem'] = {
  component: 'HomoclinicTangle',
  filePath:
    'explore/physics/classical-mechanics/part-v-chaos-and-nonlinear-dynamics/homoclinic-tangle',
  slug: 'explore/physics/classical-mechanics/homoclinic-tangle',
  parentSlug: 'explore/physics/classical-mechanics'
}

// Unit 6 - Continuum and Field-Theoretic Mechanics
topicComponentMap['Continuum Limit from Coupled Oscillators to the Wave Equation'] = {
  component: 'ContinuumLimitAndWaveEquation',
  filePath:
    'explore/physics/classical-mechanics/part-vi-continuum-and-field-theoretic-mechanics/continuum-limit-and-wave-equation',
  slug: 'explore/physics/classical-mechanics/continuum-limit-and-wave-equation',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Lagrangian Density and Field-Theoretic Euler-Lagrange Equations'] = {
  component: 'LagrangianDensity',
  filePath:
    'explore/physics/classical-mechanics/part-vi-continuum-and-field-theoretic-mechanics/lagrangian-density',
  slug: 'explore/physics/classical-mechanics/lagrangian-density',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap["Noether's Theorem for Fields and the Energy-Momentum Tensor"] = {
  component: 'NoetherForFields',
  filePath:
    'explore/physics/classical-mechanics/part-vi-continuum-and-field-theoretic-mechanics/noether-for-fields',
  slug: 'explore/physics/classical-mechanics/noether-for-fields',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Hamiltonian Formulation of Field Theories'] = {
  component: 'HamiltonianFieldTheory',
  filePath:
    'explore/physics/classical-mechanics/part-vi-continuum-and-field-theoretic-mechanics/hamiltonian-field-theory',
  slug: 'explore/physics/classical-mechanics/hamiltonian-field-theory',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Linear Elasticity'] = {
  component: 'LinearElasticity',
  filePath:
    'explore/physics/classical-mechanics/part-vi-continuum-and-field-theoretic-mechanics/linear-elasticity',
  slug: 'explore/physics/classical-mechanics/linear-elasticity',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Ideal Fluids and the Euler Equations'] = {
  component: 'IdealFluids',
  filePath:
    'explore/physics/classical-mechanics/part-vi-continuum-and-field-theoretic-mechanics/ideal-fluids',
  slug: 'explore/physics/classical-mechanics/ideal-fluids',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Viscous Fluids: Navier-Stokes and Turbulence'] = {
  component: 'NavierStokes',
  filePath:
    'explore/physics/classical-mechanics/part-vi-continuum-and-field-theoretic-mechanics/navier-stokes',
  slug: 'explore/physics/classical-mechanics/navier-stokes',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Sine-Gordon Equation and Solitons'] = {
  component: 'SineGordon',
  filePath:
    'explore/physics/classical-mechanics/part-vi-continuum-and-field-theoretic-mechanics/sine-gordon',
  slug: 'explore/physics/classical-mechanics/sine-gordon',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Korteweg-de Vries Equation and Solitons'] = {
  component: 'KdvEquation',
  filePath:
    'explore/physics/classical-mechanics/part-vi-continuum-and-field-theoretic-mechanics/kdv-equation',
  slug: 'explore/physics/classical-mechanics/kdv-equation',
  parentSlug: 'explore/physics/classical-mechanics'
}

// Algebra modules
// Unit 1 - Number and Algebra Foundations
topicComponentMap['Arithmetic Foundations and Proportions'] = {
  component: 'ArithmeticFoundationsAndProportions',
  filePath: 'explore/mathematics/algebra/arithmetic-foundations-and-proportions',
  slug: 'explore/mathematics/algebra/arithmetic-foundations-and-proportions',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Algebraic Foundations and Identities'] = {
  component: 'AlgebraicFoundationsAndIdentities',
  filePath: 'explore/mathematics/algebra/algebraic-foundations-and-identities',
  slug: 'explore/mathematics/algebra/algebraic-foundations-and-identities',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Exponents, Radicals and Inequalities'] = {
  component: 'ExponentsRadicalsAndInequalities',
  filePath: 'explore/mathematics/algebra/exponents-radicals-and-inequalities',
  slug: 'explore/mathematics/algebra/exponents-radicals-and-inequalities',
  parentSlug: 'explore/mathematics/algebra'
}
// Unit 2 - Equations and Inequalities
topicComponentMap['Linear Equations'] = {
  component: 'LinearEquations',
  filePath: 'explore/mathematics/algebra/linear-equations',
  slug: 'explore/mathematics/algebra/linear-equations',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Quadratic Equations'] = {
  component: 'QuadraticEquations',
  filePath: 'explore/mathematics/algebra/quadratic-equations',
  slug: 'explore/mathematics/algebra/quadratic-equations',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Simultaneous Equations'] = {
  component: 'SimultaneousEquations',
  filePath: 'explore/mathematics/algebra/simultaneous-equations',
  slug: 'explore/mathematics/algebra/simultaneous-equations',
  parentSlug: 'explore/mathematics/algebra'
}
// Unit 3 - Polynomials and Partial Fractions
topicComponentMap['Polynomials'] = {
  component: 'Polynomials',
  filePath: 'explore/mathematics/algebra/polynomials',
  slug: 'explore/mathematics/algebra/polynomials',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Partial Fractions'] = {
  component: 'PartialFractions',
  filePath: 'explore/mathematics/algebra/partial-fractions',
  slug: 'explore/mathematics/algebra/partial-fractions',
  parentSlug: 'explore/mathematics/algebra'
}
// Unit 4 - Functions and Graphs
topicComponentMap['Graphing Lines and Linear Inequalities'] = {
  component: 'GraphingLinesAndLinearInequalities',
  filePath: 'explore/mathematics/algebra/graphing-lines-and-linear-inequalities',
  slug: 'explore/mathematics/algebra/graphing-lines-and-linear-inequalities',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Quadratic Functions and Polynomial Inequalities'] = {
  component: 'QuadraticFunctionsAndPolynomialInequalities',
  filePath: 'explore/mathematics/algebra/quadratic-functions-and-polynomial-inequalities',
  slug: 'explore/mathematics/algebra/quadratic-functions-and-polynomial-inequalities',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Functions'] = {
  component: 'Functions',
  filePath: 'explore/mathematics/algebra/functions',
  slug: 'explore/mathematics/algebra/functions',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Modulus Function'] = {
  component: 'ModulusFunction',
  filePath: 'explore/mathematics/algebra/modulus-function',
  slug: 'explore/mathematics/algebra/modulus-function',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Rational and Irrational Functions'] = {
  component: 'RationalAndIrrationalFunctions',
  filePath: 'explore/mathematics/algebra/rational-and-irrational-functions',
  slug: 'explore/mathematics/algebra/rational-and-irrational-functions',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Exponential Functions'] = {
  component: 'ExponentialFunctions',
  filePath: 'explore/mathematics/algebra/exponential-functions',
  slug: 'explore/mathematics/algebra/exponential-functions',
  parentSlug: 'explore/mathematics/algebra'
}
// Unit 5 - Logarithms and Exponential Models
topicComponentMap['Logarithms and Their Laws'] = {
  component: 'LogarithmsAndTheirLaws',
  filePath: 'explore/mathematics/algebra/logarithms-and-their-laws',
  slug: 'explore/mathematics/algebra/logarithms-and-their-laws',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Common and Natural Logarithms'] = {
  component: 'CommonAndNaturalLogarithms',
  filePath: 'explore/mathematics/algebra/common-and-natural-logarithms',
  slug: 'explore/mathematics/algebra/common-and-natural-logarithms',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Logarithmic Functions'] = {
  component: 'LogarithmicFunctions',
  filePath: 'explore/mathematics/algebra/logarithmic-functions',
  slug: 'explore/mathematics/algebra/logarithmic-functions',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Exponential and Logarithmic Equations'] = {
  component: 'ExponentialAndLogarithmicEquations',
  filePath: 'explore/mathematics/algebra/exponential-and-logarithmic-equations',
  slug: 'explore/mathematics/algebra/exponential-and-logarithmic-equations',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Growth, Decay and Logarithmic Scales'] = {
  component: 'GrowthDecayAndLogarithmicScales',
  filePath: 'explore/mathematics/algebra/growth-decay-and-logarithmic-scales',
  slug: 'explore/mathematics/algebra/growth-decay-and-logarithmic-scales',
  parentSlug: 'explore/mathematics/algebra'
}
// Unit 6 - Sequences, Series and the Binomial Theorem
topicComponentMap['Sequences and Series'] = {
  component: 'SequencesAndSeries',
  filePath: 'explore/mathematics/algebra/sequences-and-series',
  slug: 'explore/mathematics/algebra/sequences-and-series',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Recurrence Relations'] = {
  component: 'RecurrenceRelations',
  filePath: 'explore/mathematics/algebra/recurrence-relations',
  slug: 'explore/mathematics/algebra/recurrence-relations',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Permutations and Combinations'] = {
  component: 'PermutationsAndCombinations',
  filePath: 'explore/mathematics/algebra/permutations-and-combinations',
  slug: 'explore/mathematics/algebra/permutations-and-combinations',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['The Binomial Theorem'] = {
  component: 'TheBinomialTheorem',
  filePath: 'explore/mathematics/algebra/the-binomial-theorem',
  slug: 'explore/mathematics/algebra/the-binomial-theorem',
  parentSlug: 'explore/mathematics/algebra'
}
// Unit 7 - Proof, Sets and Logic
topicComponentMap['Sets and Logic'] = {
  component: 'SetsAndLogic',
  filePath: 'explore/mathematics/algebra/sets-and-logic',
  slug: 'explore/mathematics/algebra/sets-and-logic',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Mathematical Induction'] = {
  component: 'MathematicalInduction',
  filePath: 'explore/mathematics/algebra/mathematical-induction',
  slug: 'explore/mathematics/algebra/mathematical-induction',
  parentSlug: 'explore/mathematics/algebra'
}
// Unit 8 - Complex Numbers
topicComponentMap['Complex Numbers (Cartesian Form)'] = {
  component: 'ComplexNumbersCartesianForm',
  filePath: 'explore/mathematics/algebra/complex-numbers-cartesian-form',
  slug: 'explore/mathematics/algebra/complex-numbers-cartesian-form',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap["Polar Form and De Moivre's Theorem"] = {
  component: 'PolarFormAndDeMoivresTheorem',
  filePath: 'explore/mathematics/algebra/polar-form-and-de-moivres-theorem',
  slug: 'explore/mathematics/algebra/polar-form-and-de-moivres-theorem',
  parentSlug: 'explore/mathematics/algebra'
}
// Unit 9 - Matrices and Linear Systems
topicComponentMap['Matrices and Determinants'] = {
  component: 'MatricesAndDeterminants',
  filePath: 'explore/mathematics/algebra/matrices-and-determinants',
  slug: 'explore/mathematics/algebra/matrices-and-determinants',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Systems of Linear Equations'] = {
  component: 'SystemsOfLinearEquations',
  filePath: 'explore/mathematics/algebra/systems-of-linear-equations',
  slug: 'explore/mathematics/algebra/systems-of-linear-equations',
  parentSlug: 'explore/mathematics/algebra'
}
// Unit 10 - Classical Inequalities
topicComponentMap['Classical Inequalities'] = {
  component: 'ClassicalInequalities',
  filePath: 'explore/mathematics/algebra/classical-inequalities',
  slug: 'explore/mathematics/algebra/classical-inequalities',
  parentSlug: 'explore/mathematics/algebra'
}

// History — Prehistory (The Human Past, modules 1–6)
topicComponentMap['Introduction: Studying the Human Past'] = {
  component: 'IntroductionStudyingTheHumanPast',
  filePath: 'explore/history/prehistory/introduction-studying-the-human-past',
  slug: 'explore/history/prehistory/introduction-studying-the-human-past',
  parentSlug: 'explore/history/prehistory'
}
topicComponentMap['The Evolution of Humanity: 6 Million to 11,600 Years Ago'] = {
  component: 'TheEvolutionOfHumanity',
  filePath: 'explore/history/prehistory/the-evolution-of-humanity-6-million-to-11600-years-ago',
  slug: 'explore/history/prehistory/the-evolution-of-humanity-6-million-to-11600-years-ago',
  parentSlug: 'explore/history/prehistory'
}
topicComponentMap['From Foragers to Farmers: Origins of Agriculture'] = {
  component: 'FromForagersToFarmersOriginsOfAgriculture',
  filePath: 'explore/history/prehistory/from-foragers-to-farmers-origins-of-agriculture',
  slug: 'explore/history/prehistory/from-foragers-to-farmers-origins-of-agriculture',
  parentSlug: 'explore/history/prehistory'
}
topicComponentMap['Holocene Societies Across the World'] = {
  component: 'HoloceneSocietiesAcrossTheWorld',
  filePath: 'explore/history/prehistory/holocene-societies-across-the-world',
  slug: 'explore/history/prehistory/holocene-societies-across-the-world',
  parentSlug: 'explore/history/prehistory'
}
topicComponentMap['First Civilizations of the Old World'] = {
  component: 'FirstCivilizationsOfTheOldWorld',
  filePath: 'explore/history/prehistory/first-civilizations-of-the-old-world',
  slug: 'explore/history/prehistory/first-civilizations-of-the-old-world',
  parentSlug: 'explore/history/prehistory'
}
topicComponentMap['Complex Societies of the Americas and Synthesis'] = {
  component: 'ComplexSocietiesOfTheAmericasAndSynthesis',
  filePath: 'explore/history/prehistory/complex-societies-of-the-americas-and-synthesis',
  slug: 'explore/history/prehistory/complex-societies-of-the-americas-and-synthesis',
  parentSlug: 'explore/history/prehistory'
}

// German language modules
topicComponentMap['Willkommen und Begrüßungen'] = {
  component: 'WillkommenUndBegruessungen',
  filePath: 'explore/languages/german/A1/unit-1-willkommen-und-begruessungen',
  slug: 'explore/languages/german/unit-1-willkommen-und-begruessungen',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Menschen, Länder und Berufe'] = {
  component: 'PeopleCountriesAndProfessions',
  filePath: 'explore/languages/german/A1/unit-3-people-countries-and-professions',
  slug: 'explore/languages/german/unit-3-people-countries-and-professions',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Familie und Freunde'] = {
  component: 'FamilyAndFriends',
  filePath: 'explore/languages/german/A1/unit-4-family-and-friends',
  slug: 'explore/languages/german/unit-4-family-and-friends',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Essen, Trinken und Einkaufen'] = {
  component: 'FoodDrinkAndShopping',
  filePath: 'explore/languages/german/A1/unit-5-food-drink-and-shopping',
  slug: 'explore/languages/german/unit-5-food-drink-and-shopping',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Zuhause und Haushalt'] = {
  component: 'HomeAndHousehold',
  filePath: 'explore/languages/german/A1/unit-6-home-and-household',
  slug: 'explore/languages/german/unit-6-home-and-household',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Mein Tag und meine Woche'] = {
  component: 'MyDayAndMyWeek',
  filePath: 'explore/languages/german/A1/unit-7-my-day-and-my-week',
  slug: 'explore/languages/german/unit-7-my-day-and-my-week',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Freizeit, Wetter und Kleidung'] = {
  component: 'FreeTimeWeatherAndClothing',
  filePath: 'explore/languages/german/A1/unit-8-free-time-weather-and-clothing',
  slug: 'explore/languages/german/unit-8-free-time-weather-and-clothing',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Wegbeschreibung, Orte und Verkehr'] = {
  component: 'DirectionsPlacesAndTransport',
  filePath: 'explore/languages/german/A1/unit-9-directions-places-and-transport',
  slug: 'explore/languages/german/unit-9-directions-places-and-transport',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Reisen und Urlaub'] = {
  component: 'TravelAndHolidays',
  filePath: 'explore/languages/german/A1/unit-10-travel-and-holidays',
  slug: 'explore/languages/german/unit-10-travel-and-holidays',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Gesundheit und der Körper'] = {
  component: 'HealthAndTheBody',
  filePath: 'explore/languages/german/A1/unit-11-health-and-the-body',
  slug: 'explore/languages/german/unit-11-health-and-the-body',
  parentSlug: 'explore/languages/german'
}

// Arithmetic project components
topicComponentMap['Capstone: Whole Numbers'] = {
  component: 'CapstoneWholeNumbers',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-whole-numbers',
  slug: 'explore/mathematics/arithmetic/capstone-whole-numbers',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Fractions'] = {
  component: 'CapstoneFractions',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-fractions',
  slug: 'explore/mathematics/arithmetic/capstone-fractions',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Rational Numbers'] = {
  component: 'CapstoneRationalNumbers',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-rational-numbers',
  slug: 'explore/mathematics/arithmetic/capstone-rational-numbers',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Number Theory'] = {
  component: 'CapstoneNumberTheory',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-number-theory',
  slug: 'explore/mathematics/arithmetic/capstone-number-theory',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Decimals'] = {
  component: 'CapstoneDecimals',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-decimals',
  slug: 'explore/mathematics/arithmetic/capstone-decimals',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Percentages'] = {
  component: 'CapstonePercentages',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-percentages',
  slug: 'explore/mathematics/arithmetic/capstone-percentages',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Proportion'] = {
  component: 'CapstoneProportion',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-proportion',
  slug: 'explore/mathematics/arithmetic/capstone-proportion',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Financial Mathematics'] = {
  component: 'CapstoneFinancialMathematics',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-financial-mathematics',
  slug: 'explore/mathematics/arithmetic/capstone-financial-mathematics',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Sequences'] = {
  component: 'CapstoneSequences',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-sequences',
  slug: 'explore/mathematics/arithmetic/capstone-sequences',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Indices'] = {
  component: 'CapstoneIndices',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-indices',
  slug: 'explore/mathematics/arithmetic/capstone-indices',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Real Numbers'] = {
  component: 'CapstoneRealNumbers',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-real-numbers',
  slug: 'explore/mathematics/arithmetic/capstone-real-numbers',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Capstone: Arithmetic Mastery'] = {
  component: 'CapstoneArithmeticMastery',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-arithmetic-mastery',
  slug: 'explore/mathematics/arithmetic/capstone-arithmetic-mastery',
  parentSlug: 'explore/mathematics/arithmetic'
}

// Biography book modules
topicComponentMap['Augustus: The Biography'] = {
  component: 'AugustusTheBiography',
  filePath: 'explore/books/biography/Founders & Builders/augustus-the-biography',
  slug: 'library/biography/augustus-the-biography',
  parentSlug: 'library/biography'
}

// Fantasy: The Book of the New Sun
topicComponentMap['The Shadow of the Torturer'] = {
  component: 'TheShadowOfTheTorturer',
  filePath: 'explore/books/fantasy/Science Fantasy/the-shadow-of-the-torturer',
  slug: 'library/fantasy/the-shadow-of-the-torturer',
  parentSlug: 'library/fantasy'
}
topicComponentMap['The Claw of the Conciliator'] = {
  component: 'TheClawOfTheConciliator',
  filePath: 'explore/books/fantasy/Science Fantasy/the-claw-of-the-conciliator',
  slug: 'library/fantasy/the-claw-of-the-conciliator',
  parentSlug: 'library/fantasy'
}
topicComponentMap['The Sword of the Lictor'] = {
  component: 'TheSwordOfTheLictor',
  filePath: 'explore/books/fantasy/Science Fantasy/the-sword-of-the-lictor',
  slug: 'library/fantasy/the-sword-of-the-lictor',
  parentSlug: 'library/fantasy'
}
topicComponentMap['The Citadel of the Autarch'] = {
  component: 'TheCitadelOfTheAutarch',
  filePath: 'explore/books/fantasy/Science Fantasy/the-citadel-of-the-autarch',
  slug: 'library/fantasy/the-citadel-of-the-autarch',
  parentSlug: 'library/fantasy'
}

// Lex Fridman Podcast modules
topicComponentMap['Andrew Bustamante: CIA Spy | Lex Fridman Podcast #310'] = {
  component: 'AndrewBustamanteContent',
  filePath: 'explore/podcasts/lex-fridman/andrew-bustamante',
  slug: 'explore/podcasts/lex-fridman/andrew-bustamante',
  parentSlug: 'library/lex-fridman-podcast'
}

// Johnny Harris video modules
topicComponentMap['How Switzerland Engineered the Perfect Country'] = {
  component: 'SwitzerlandEngineeringContent',
  filePath: 'explore/videos/johnny-harris/switzerland-engineering',
  slug: 'explore/videos/johnny-harris/switzerland-engineering',
  parentSlug: 'library/history-geopolitics'
}

// Papers modules
topicComponentMap['Shannon Entropy and Information Theory'] = {
  component: 'ShannonEntropyContent',
  filePath: 'explore/papers/information-theory/shannon-entropy',
  slug: 'library/papers/shannon-entropy',
  parentSlug: 'library/papers'
}

// Star Wars films modules
topicComponentMap['Star Wars: Episode I - The Phantom Menace'] = {
  component: 'ThePhantomMenace',
  filePath: 'explore/films/star-wars/the-phantom-menace',
  slug: 'library/films/science-fiction/star-wars-episode-i-the-phantom-menace',
  parentSlug: 'library/films/science-fiction'
}

// General Chemistry
// Unit 1 - Atomic Structure and Periodicity
topicComponentMap['Atomic Structure, the Periodic Table, and Periodic Trends'] = {
  component: 'AtomicStructureAndPeriodicTrends',
  filePath:
    'explore/chemistry/general-chemistry/unit-01-atomic-structure-and-periodicity/atomic-structure-periodic-table-and-trends',
  slug: 'explore/chemistry/general-chemistry/atomic-structure-periodic-table-and-trends',
  parentSlug: 'explore/chemistry/general-chemistry'
}
// Unit 2 - Bonding and Structure
topicComponentMap['Structure and Bonding'] = {
  component: 'StructureAndBonding',
  filePath:
    'explore/chemistry/general-chemistry/unit-02-bonding-and-structure/structure-and-bonding',
  slug: 'explore/chemistry/general-chemistry/structure-and-bonding',
  parentSlug: 'explore/chemistry/general-chemistry'
}
// Unit 3 - Energetics and Thermodynamics
topicComponentMap['Thermochemistry and Energy'] = {
  component: 'ThermochemistryAndEnergy',
  filePath:
    'explore/chemistry/general-chemistry/unit-03-energetics-and-thermodynamics/thermochemistry-and-energy',
  slug: 'explore/chemistry/general-chemistry/thermochemistry-and-energy',
  parentSlug: 'explore/chemistry/general-chemistry'
}
topicComponentMap['Lattice Energy and Born-Haber Cycles'] = {
  component: 'LatticeEnergyAndBornHaberCycles',
  filePath:
    'explore/chemistry/general-chemistry/unit-03-energetics-and-thermodynamics/lattice-energy-and-born-haber-cycles',
  slug: 'explore/chemistry/general-chemistry/lattice-energy-and-born-haber-cycles',
  parentSlug: 'explore/chemistry/general-chemistry'
}
topicComponentMap['Entropy, Gibbs Free Energy, and Spontaneity'] = {
  component: 'EntropyGibbsFreeEnergyAndSpontaneity',
  filePath:
    'explore/chemistry/general-chemistry/unit-03-energetics-and-thermodynamics/entropy-gibbs-free-energy-and-spontaneity',
  slug: 'explore/chemistry/general-chemistry/entropy-gibbs-free-energy-and-spontaneity',
  parentSlug: 'explore/chemistry/general-chemistry'
}
// Unit 4 - Kinetics
topicComponentMap['Chemical Kinetics and Rate Laws'] = {
  component: 'ChemicalKineticsAndRateLaws',
  filePath: 'explore/chemistry/general-chemistry/unit-04-kinetics/chemical-kinetics-and-rate-laws',
  slug: 'explore/chemistry/general-chemistry/chemical-kinetics-and-rate-laws',
  parentSlug: 'explore/chemistry/general-chemistry'
}
// Unit 5 - Chemical Equilibrium
topicComponentMap['Chemical Equilibrium and Equilibrium Constants'] = {
  component: 'ChemicalEquilibriumAndConstants',
  filePath:
    'explore/chemistry/general-chemistry/unit-05-chemical-equilibrium/chemical-equilibrium-and-equilibrium-constants',
  slug: 'explore/chemistry/general-chemistry/chemical-equilibrium-and-equilibrium-constants',
  parentSlug: 'explore/chemistry/general-chemistry'
}
// Unit 6 - Acid-Base and Aqueous Equilibria
topicComponentMap['Acids and Bases'] = {
  component: 'AcidsAndBases',
  filePath:
    'explore/chemistry/general-chemistry/unit-06-acid-base-and-aqueous-equilibria/acids-and-bases',
  slug: 'explore/chemistry/general-chemistry/acids-and-bases',
  parentSlug: 'explore/chemistry/general-chemistry'
}
topicComponentMap['Buffer Solutions'] = {
  component: 'BufferSolutions',
  filePath:
    'explore/chemistry/general-chemistry/unit-06-acid-base-and-aqueous-equilibria/buffer-solutions',
  slug: 'explore/chemistry/general-chemistry/buffer-solutions',
  parentSlug: 'explore/chemistry/general-chemistry'
}
topicComponentMap['Salt Hydrolysis'] = {
  component: 'SaltHydrolysis',
  filePath:
    'explore/chemistry/general-chemistry/unit-06-acid-base-and-aqueous-equilibria/salt-hydrolysis',
  slug: 'explore/chemistry/general-chemistry/salt-hydrolysis',
  parentSlug: 'explore/chemistry/general-chemistry'
}
topicComponentMap['Solubility Product and the Common-Ion Effect'] = {
  component: 'SolubilityProductAndCommonIonEffect',
  filePath:
    'explore/chemistry/general-chemistry/unit-06-acid-base-and-aqueous-equilibria/solubility-product-and-common-ion-effect',
  slug: 'explore/chemistry/general-chemistry/solubility-product-and-common-ion-effect',
  parentSlug: 'explore/chemistry/general-chemistry'
}
// Unit 7 - Redox and Electrochemistry
topicComponentMap['Redox and Electrochemistry'] = {
  component: 'RedoxAndElectrochemistry',
  filePath:
    'explore/chemistry/general-chemistry/unit-07-redox-and-electrochemistry/redox-and-electrochemistry',
  slug: 'explore/chemistry/general-chemistry/redox-and-electrochemistry',
  parentSlug: 'explore/chemistry/general-chemistry'
}
topicComponentMap["Electrolysis and Faraday's Laws"] = {
  component: 'ElectrolysisAndFaradaysLaws',
  filePath:
    'explore/chemistry/general-chemistry/unit-07-redox-and-electrochemistry/electrolysis-and-faradays-laws',
  slug: 'explore/chemistry/general-chemistry/electrolysis-and-faradays-laws',
  parentSlug: 'explore/chemistry/general-chemistry'
}
// Unit 8 - Transition-Metal and Coordination Chemistry
topicComponentMap['Coordination and Transition-Metal Chemistry'] = {
  component: 'CoordinationAndTransitionMetalChemistry',
  filePath:
    'explore/chemistry/general-chemistry/unit-08-transition-metal-and-coordination-chemistry/coordination-and-transition-metal-chemistry',
  slug: 'explore/chemistry/general-chemistry/coordination-and-transition-metal-chemistry',
  parentSlug: 'explore/chemistry/general-chemistry'
}
// Unit 9 - Analytical Chemistry
topicComponentMap['Qualitative and Quantitative Analysis'] = {
  component: 'QualitativeAndQuantitativeAnalysis',
  filePath:
    'explore/chemistry/general-chemistry/unit-09-analytical-chemistry/qualitative-and-quantitative-analysis',
  slug: 'explore/chemistry/general-chemistry/qualitative-and-quantitative-analysis',
  parentSlug: 'explore/chemistry/general-chemistry'
}
topicComponentMap['Instrumental Analysis and Spectroscopy'] = {
  component: 'InstrumentalAnalysisAndSpectroscopy',
  filePath:
    'explore/chemistry/general-chemistry/unit-09-analytical-chemistry/instrumental-analysis-and-spectroscopy',
  slug: 'explore/chemistry/general-chemistry/instrumental-analysis-and-spectroscopy',
  parentSlug: 'explore/chemistry/general-chemistry'
}
// Unit 10 - Industrial and Sustainable Chemistry
topicComponentMap['Industrial Synthesis Processes'] = {
  component: 'IndustrialSynthesisProcesses',
  filePath:
    'explore/chemistry/general-chemistry/unit-10-industrial-and-sustainable-chemistry/industrial-synthesis-processes',
  slug: 'explore/chemistry/general-chemistry/industrial-synthesis-processes',
  parentSlug: 'explore/chemistry/general-chemistry'
}
topicComponentMap['Green and Sustainable Chemistry'] = {
  component: 'GreenAndSustainableChemistry',
  filePath:
    'explore/chemistry/general-chemistry/unit-10-industrial-and-sustainable-chemistry/green-and-sustainable-chemistry',
  slug: 'explore/chemistry/general-chemistry/green-and-sustainable-chemistry',
  parentSlug: 'explore/chemistry/general-chemistry'
}

// Content structure for each resource

export const resourceContent = {
  'explore/mathematics/arithmetic': {
    units: [
      {
        title: 'Place Value and Whole Numbers',
        topics: [
          'Place Value and Algorithms',
          'Mental Calculation Strategies',
          'Ordering and Comparison',
          'Odd and Even Numbers'
        ]
      },
      {
        title: 'Number Properties',
        topics: [
          'Factors and Multiples',
          'Divisibility Tests',
          'Prime Numbers and Prime Factorisation',
          'HCF and LCM',
          'Number Theory'
        ]
      },
      {
        title: 'Fractions',
        topics: [
          'Fraction Foundations',
          'Fraction Operations',
          'Fraction Applications',
          'Fraction Advanced Topics'
        ]
      },
      {
        title: 'Decimals and Approximation',
        topics: [
          'Decimal Fundamentals',
          'Approximation: Significant Figures and Decimal Places',
          'Infinite and Repeating Decimals'
        ]
      },
      {
        title: 'Percentages',
        topics: [
          'Percentages: Concept and Conversions',
          'Percentage of a Quantity',
          'Percentage Increase and Decrease'
        ]
      },
      {
        title: 'Proportional Reasoning',
        topics: [
          'Ratio',
          'Rate, Speed, Average Speed',
          'Direct and Inverse Proportion',
          'Map Scales'
        ]
      },
      {
        title: 'Applied Finance',
        topics: [
          'Discount, Profit, Loss',
          'Simple and Compound Interest',
          'Growth, Depreciation, Applied Tax'
        ]
      },
      {
        title: 'The Rational Number System',
        topics: [
          'Number Line and Number Systems',
          'Integers and Negative Numbers',
          'Opposite Numbers and Absolute Value',
          'Rational Numbers',
          'Operations on Signed Rationals'
        ]
      },
      {
        title: 'Sequences and Patterns',
        topics: ['Number Sequences and Patterns', 'Arithmetic and Geometric Sequences']
      },
      {
        title: 'Indices and Standard Form',
        topics: ['Index Notation and Laws of Integral Indices']
      },
      {
        title: 'The Real Number System',
        topics: [
          'Squares, Cubes, Square Roots, Cube Roots',
          'Irrational Numbers and the Real-Number System',
          'Real Numbers on the Number Line',
          'Simple Quadratic Surds',
          'Decimal Expansion Proofs'
        ]
      }
    ],
    projects: [
      { title: 'Capstone: Whole Numbers', unit: 'Place Value and Whole Numbers' },
      { title: 'Capstone: Fractions', unit: 'Fractions' },
      {
        title: 'Capstone: Rational Numbers',
        unit: 'The Rational Number System'
      },
      { title: 'Capstone: Number Theory', unit: 'Number Properties' },
      { title: 'Capstone: Decimals', unit: 'Decimals and Approximation' },
      { title: 'Capstone: Percentages', unit: 'Percentages' },
      { title: 'Capstone: Proportion', unit: 'Proportional Reasoning' },
      { title: 'Capstone: Financial Mathematics', unit: 'Applied Finance' },
      { title: 'Capstone: Sequences', unit: 'Sequences and Patterns' },
      { title: 'Capstone: Indices', unit: 'Indices and Standard Form' },
      { title: 'Capstone: Real Numbers', unit: 'The Real Number System' }
    ],
    finalExam: { title: 'Capstone: Arithmetic Mastery', mins: 150 }
  },
  'explore/mathematics/algebra': {
    units: [
      {
        title: 'Number and Algebra Foundations',
        topics: [
          'Arithmetic Foundations and Proportions',
          'Algebraic Foundations and Identities',
          'Exponents, Radicals and Inequalities'
        ]
      },
      {
        title: 'Equations and Inequalities',
        topics: ['Linear Equations', 'Quadratic Equations', 'Simultaneous Equations']
      },
      {
        title: 'Polynomials and Partial Fractions',
        topics: ['Polynomials', 'Partial Fractions']
      },
      {
        title: 'Functions and Graphs',
        topics: [
          'Graphing Lines and Linear Inequalities',
          'Quadratic Functions and Polynomial Inequalities',
          'Functions',
          'Modulus Function',
          'Rational and Irrational Functions',
          'Exponential Functions'
        ]
      },
      {
        title: 'Logarithms and Exponential Models',
        topics: [
          'Logarithms and Their Laws',
          'Common and Natural Logarithms',
          'Logarithmic Functions',
          'Exponential and Logarithmic Equations',
          'Growth, Decay and Logarithmic Scales'
        ]
      },
      {
        title: 'Sequences, Series and the Binomial Theorem',
        topics: [
          'Sequences and Series',
          'Recurrence Relations',
          'Permutations and Combinations',
          'The Binomial Theorem'
        ]
      },
      {
        title: 'Proof, Sets and Logic',
        topics: ['Sets and Logic', 'Mathematical Induction']
      },
      {
        title: 'Complex Numbers',
        topics: ['Complex Numbers (Cartesian Form)', "Polar Form and De Moivre's Theorem"]
      },
      {
        title: 'Matrices and Linear Systems',
        topics: ['Matrices and Determinants', 'Systems of Linear Equations']
      },
      {
        title: 'Classical Inequalities',
        topics: ['Classical Inequalities']
      }
    ]
  },
  'explore/history/prehistory': {
    units: [
      {
        title: 'Foundations of the Discipline',
        topics: ['Introduction: Studying the Human Past']
      },
      {
        title: 'Human Origins and Evolution',
        topics: ['The Evolution of Humanity: 6 Million to 11,600 Years Ago']
      },
      {
        title: 'From Farming to Settled Societies',
        topics: [
          'From Foragers to Farmers: Origins of Agriculture',
          'Holocene Societies Across the World'
        ]
      },
      {
        title: 'The Rise of Social Complexity',
        topics: [
          'First Civilizations of the Old World',
          'Complex Societies of the Americas and Synthesis'
        ]
      }
    ]
  },
  'explore/physics/classical-mechanics': {
    units: [
      {
        title: 'Newtonian Mechanics',
        topics: [
          'Vectors, Kinematics, and the Galilean Structure of Space-Time',
          "Newton's Laws and Equations of Motion",
          'Momentum, Systems of Particles, and Variable-Mass Dynamics',
          'Work, Energy, and Conservative Force Fields',
          'Angular Momentum and Fixed-Axis Rotation',
          'Central-Force Motion and the Kepler Problem',
          'Restricted Three-Body Problem and Lagrange Points',
          'Tides',
          'Non-Inertial Frames and Coriolis Applications',
          'Small Oscillations (Elementary)',
          'Rapidly Oscillating Forces: Kapitza Pendulum',
          'Rigid-Body Dynamics, Gyroscopic Motion, and the Heavy Symmetric Top'
        ]
      },
      {
        title: 'Lagrangian Mechanics and Variational Principles',
        topics: [
          "D'Alembert's Principle and Virtual Displacements",
          'The Principle of Least Action and the Euler-Lagrange Equations',
          'Variational Problems Beyond Mechanics',
          'Holonomic and Non-Holonomic Constraints',
          "Symmetries and Conservation Laws: Noether's Theorem",
          'Integration of the Equations of Motion',
          'Routhian Reduction for Cyclic Coordinates',
          'Collisions and Scattering',
          'Friction and Non-Conservative Forces',
          'Small Oscillations: Systematic Theory',
          'Lagrangian Mechanics on Manifolds',
          'Rigid-Body Dynamics (Lagrangian / Geometric Treatment)'
        ]
      },
      {
        title: 'Hamiltonian Mechanics and Canonical Formalism',
        topics: [
          "Hamilton's Equations and the Legendre Transform",
          'Poisson Brackets and First Integrals',
          "Liouville's Theorem and Poincaré Recurrence",
          'Canonical Transformations and Generating Functions',
          'Differential Forms and Symplectic Manifolds',
          'The Hamilton-Jacobi Equation and the Optical-Mechanical Analogy',
          'Action-Angle Variables and Integrable Systems',
          'Curvature, Geodesic Flow, and the Limits of Prediction',
          'Constrained Hamiltonian Systems: Dirac-Bergmann Algorithm',
          'Classical Geometric Phase and the Hannay Angle',
          'Special Relativity and Covariant Mechanics'
        ]
      },
      {
        title: 'Perturbation Theory',
        topics: [
          'Adiabatic Invariants',
          'Magnetic Adiabatic Invariants for Charged Particles',
          'Canonical Perturbation Theory and Averaging',
          'Lie Transformation Method (Deprit Series)',
          'Normal Forms near Equilibria and Periodic Orbits',
          'Floquet Theory, Mathieu Equation, and Parametric Resonance',
          'KAM Theory',
          'Asymptotics, Singularities, and Integrable Systems'
        ]
      },
      {
        title: 'Chaos and Nonlinear Dynamics',
        topics: [
          'Fixed-Point Classification, Limit Cycles, and Poincaré-Bendixson',
          'Bifurcations: Saddle-Node, Pitchfork, and Hopf',
          'Poincaré Sections and Poincaré Maps',
          'Lyapunov Exponents',
          'Attractors and Strange Attractors',
          'Logistic Map, Period-Doubling, and Feigenbaum Universality',
          'Fractal Dimension: Box-Counting and Correlation',
          'Homoclinic Tangle and Poincaré-Birkhoff Theorem'
        ]
      },
      {
        title: 'Continuum and Field-Theoretic Mechanics',
        topics: [
          'Continuum Limit from Coupled Oscillators to the Wave Equation',
          'Lagrangian Density and Field-Theoretic Euler-Lagrange Equations',
          "Noether's Theorem for Fields and the Energy-Momentum Tensor",
          'Hamiltonian Formulation of Field Theories',
          'Linear Elasticity',
          'Ideal Fluids and the Euler Equations',
          'Viscous Fluids: Navier-Stokes and Turbulence',
          'Sine-Gordon Equation and Solitons',
          'Korteweg-de Vries Equation and Solitons'
        ]
      }
    ]
  },
  'library/biography': {
    units: [
      {
        title: 'Founders & Builders',
        topics: ['Augustus: The Biography']
      }
    ]
  },
  'library/fantasy': {
    units: [
      {
        title: 'Science Fantasy',
        topics: [
          'The Shadow of the Torturer',
          'The Claw of the Conciliator',
          'The Sword of the Lictor',
          'The Citadel of the Autarch'
        ]
      }
    ]
  },
  'library/lex-fridman-podcast': {
    units: [
      {
        title: 'Episodes',
        topics: ['Andrew Bustamante: CIA Spy | Lex Fridman Podcast #310']
      }
    ]
  },
  'library/history-geopolitics': {
    units: [
      {
        title: 'HISTORY & GEOPOLITICS',
        topics: ['How Switzerland Engineered the Perfect Country']
      }
    ]
  },
  'library/papers': {
    units: [{ title: 'Foundational Papers', topics: ['Shannon Entropy and Information Theory'] }]
  },
  'explore/languages/german': {
    units: [
      {
        title: 'Erste Kontakte',
        topics: ['Willkommen und Begrüßungen', 'Menschen, Länder und Berufe', 'Familie und Freunde']
      },
      {
        title: 'Lebensalltag',
        topics: ['Essen, Trinken und Einkaufen', 'Zuhause und Haushalt', 'Mein Tag und meine Woche']
      },
      {
        title: 'Freizeit und Stadt',
        topics: ['Freizeit, Wetter und Kleidung', 'Wegbeschreibung, Orte und Verkehr']
      },
      {
        title: 'Unterwegs und Gesundheit',
        topics: ['Gesundheit und der Körper', 'Reisen und Urlaub']
      }
    ]
  }
}

resourceContent['library/films/science-fiction'] = {
  units: [
    {
      title: 'Star Wars',
      topics: ['Star Wars: Episode I - The Phantom Menace']
    }
  ]
}

resourceContent['explore/chemistry/general-chemistry'] = {
  units: [
    {
      title: 'Atomic Structure and Periodicity',
      topics: ['Atomic Structure, the Periodic Table, and Periodic Trends']
    },
    {
      title: 'Bonding and Structure',
      topics: ['Structure and Bonding']
    },
    {
      title: 'Energetics and Thermodynamics',
      topics: [
        'Thermochemistry and Energy',
        'Lattice Energy and Born-Haber Cycles',
        'Entropy, Gibbs Free Energy, and Spontaneity'
      ]
    },
    {
      title: 'Kinetics',
      topics: ['Chemical Kinetics and Rate Laws']
    },
    {
      title: 'Chemical Equilibrium',
      topics: ['Chemical Equilibrium and Equilibrium Constants']
    },
    {
      title: 'Acid-Base and Aqueous Equilibria',
      topics: [
        'Acids and Bases',
        'Buffer Solutions',
        'Salt Hydrolysis',
        'Solubility Product and the Common-Ion Effect'
      ]
    },
    {
      title: 'Redox and Electrochemistry',
      topics: ['Redox and Electrochemistry', "Electrolysis and Faraday's Laws"]
    },
    {
      title: 'Transition-Metal and Coordination Chemistry',
      topics: ['Coordination and Transition-Metal Chemistry']
    },
    {
      title: 'Analytical Chemistry',
      topics: ['Qualitative and Quantitative Analysis', 'Instrumental Analysis and Spectroscopy']
    },
    {
      title: 'Industrial and Sustainable Chemistry',
      topics: ['Industrial Synthesis Processes', 'Green and Sustainable Chemistry']
    }
  ]
}

// resourceContent is keyed by slug - no index drift possible.
// When adding a new entry, use: resourceContent['your/slug'] = { units: [...] }
if (import.meta.env?.DEV) {
  Object.entries(resourceContent).forEach(([slug, content]) => {
    const meta = resourceMetadata.find(m => m.slug === slug)
    if (!meta) {
      console.warn('[registry] resourceContent has orphan slug: ' + slug)
      return
    }
    if (!content.units || content.units.length === 0) return
    content.units.forEach(unit => {
      ;(unit.topics || []).forEach(topic => {
        const title = typeof topic === 'string' ? topic : topic.title
        const mapping = topicComponentMap[title]
        if (mapping && mapping.parentSlug !== slug) {
          console.warn(
            '[registry] MISMATCH: "' +
              title +
              '" in ' +
              slug +
              ' but parentSlug="' +
              mapping.parentSlug +
              '"'
          )
        }
      })
    })
  })
}
