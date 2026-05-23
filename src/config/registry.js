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
      'How numbers combine. The four operations of arithmetic (addition, subtraction, multiplication, division) applied to whole numbers, fractions, rationals, and decimals. Every later mathematics, from algebra to calculus to topology, assumes you can run them without thinking.',
    url: '#',
    source: {
      title: 'Understanding Numbers in Elementary School Mathematics',
      author: 'Hung-Hsi Wu',
      year: '2011'
    }
  },
  {
    title: 'Algebra',
    mainCategory: 'explore',
    category: 'mathematics',
    slug: 'explore/mathematics/algebra',
    description:
      'The language of unknowns. Variables, equations, and functions that turn arithmetic into a general-purpose tool for describing any relationship between quantities.',
    url: '#'
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
      'An Introduction to Mechanics - Kleppner & Kolenkow',
      'Mechanics (Course of Theoretical Physics, Vol. 1) - Landau & Lifshitz',
      'Mathematical Methods of Classical Mechanics - Arnold'
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
  }
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
topicComponentMap['Number Theory'] = {
  component: 'NumberTheory',
  filePath: 'explore/mathematics/arithmetic/number-theory',
  slug: 'explore/mathematics/arithmetic/number-theory',
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
topicComponentMap['Arithmetic Tools'] = {
  component: 'ArithmeticTools',
  filePath: 'explore/mathematics/arithmetic/arithmetic-tools',
  slug: 'explore/mathematics/arithmetic/arithmetic-tools',
  parentSlug: 'explore/mathematics/arithmetic'
}

// Classical Mechanics modules
// Part I - Newtonian Mechanics
topicComponentMap['Vectors, Kinematics and the Galilean Structure of Space-Time'] = {
  component: 'VectorsKinematicsAndGalileanStructure',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/vectors-kinematics-and-galilean-structure',
  slug: 'explore/physics/classical-mechanics/vectors-kinematics-and-galilean-structure',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap["Newton's Laws and Equations of Motion"] = {
  component: 'NewtonsLawsAndIntegration',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/newtons-laws-and-integration',
  slug: 'explore/physics/classical-mechanics/newtons-laws-and-integration',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Momentum and Systems of Particles'] = {
  component: 'MomentumAndSystemsOfParticles',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/momentum-and-systems-of-particles',
  slug: 'explore/physics/classical-mechanics/momentum-and-systems-of-particles',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Work, Energy and Conservative Force Fields'] = {
  component: 'ConservativeForceFields',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/conservative-force-fields',
  slug: 'explore/physics/classical-mechanics/conservative-force-fields',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Angular Momentum and Fixed-Axis Rotation'] = {
  component: 'AngularMomentumAndRotation',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/angular-momentum-and-rotation',
  slug: 'explore/physics/classical-mechanics/angular-momentum-and-rotation',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Central-Force Motion and the Kepler Problem'] = {
  component: 'CentralForceMotion',
  filePath: 'explore/physics/classical-mechanics/part-i-newtonian-mechanics/central-force-motion',
  slug: 'explore/physics/classical-mechanics/central-force-motion',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Non-Inertial Frames'] = {
  component: 'NonInertialFramesContent',
  filePath: 'explore/physics/classical-mechanics/part-i-newtonian-mechanics/non-inertial-frames',
  slug: 'explore/physics/classical-mechanics/non-inertial-frames',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Small Oscillations (Elementary)'] = {
  component: 'OscillationsPart1',
  filePath: 'explore/physics/classical-mechanics/part-i-newtonian-mechanics/oscillations',
  slug: 'explore/physics/classical-mechanics/oscillations',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Rigid-Body Dynamics and Gyroscopic Motion (Vectorial Treatment)'] = {
  component: 'RigidBodyDynamicsAndGyroscopes',
  filePath:
    'explore/physics/classical-mechanics/part-i-newtonian-mechanics/rigid-body-dynamics-and-gyroscopes',
  slug: 'explore/physics/classical-mechanics/rigid-body-dynamics-and-gyroscopes',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Special Relativity (Optional Coda)'] = {
  component: 'SpecialRelativityCoda',
  filePath: 'explore/physics/classical-mechanics/part-i-newtonian-mechanics/special-relativity',
  slug: 'explore/physics/classical-mechanics/special-relativity',
  parentSlug: 'explore/physics/classical-mechanics'
}

// Part II - Lagrangian Mechanics and Variational Principles
topicComponentMap['The Principle of Least Action and the Euler-Lagrange Equations'] = {
  component: 'EulerLagrangeEquations',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/euler-lagrange-equations',
  slug: 'explore/physics/classical-mechanics/euler-lagrange-equations',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap["Symmetries and Conservation Laws (Noether's Theorem)"] = {
  component: 'NoetherTheoremConservationLaws',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/noether-theorem-conservation-laws',
  slug: 'explore/physics/classical-mechanics/noether-theorem-conservation-laws',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Integration of the Equations of Motion'] = {
  component: 'IntegrationByQuadrature',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/integration-by-quadrature',
  slug: 'explore/physics/classical-mechanics/integration-by-quadrature',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Collisions and Scattering'] = {
  component: 'CollisionsAndScattering',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/collisions-and-scattering',
  slug: 'explore/physics/classical-mechanics/collisions-and-scattering',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Small Oscillations (Systematic Theory)'] = {
  component: 'OscillationsPart2',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/oscillations-part-ii',
  slug: 'explore/physics/classical-mechanics/oscillations-part-ii',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Lagrangian Mechanics on Manifolds'] = {
  component: 'MechanicsOnManifolds',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/mechanics-on-manifolds',
  slug: 'explore/physics/classical-mechanics/mechanics-on-manifolds',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Rigid-Body Dynamics (Lagrangian / Geometric Treatment)'] = {
  component: 'RigidBodyDynamicsLagrangian',
  filePath:
    'explore/physics/classical-mechanics/part-ii-lagrangian-mechanics-and-variational-principles/rigid-body-dynamics-lagrangian',
  slug: 'explore/physics/classical-mechanics/rigid-body-dynamics-lagrangian',
  parentSlug: 'explore/physics/classical-mechanics'
}

// Part III - Hamiltonian Mechanics and Canonical Formalism
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
topicComponentMap['Canonical Transformations'] = {
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
topicComponentMap['The Hamilton-Jacobi Equation'] = {
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
topicComponentMap['Symmetries, Momentum Maps and Reduction'] = {
  component: 'MomentumMapsAndReduction',
  filePath:
    'explore/physics/classical-mechanics/part-iii-hamiltonian-mechanics-and-canonical-formalism/momentum-maps-and-reduction',
  slug: 'explore/physics/classical-mechanics/momentum-maps-and-reduction',
  parentSlug: 'explore/physics/classical-mechanics'
}

// Part IV - Perturbation Theory and Advanced Topics
topicComponentMap['Adiabatic Invariants'] = {
  component: 'AdiabaticInvariantsContent',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/adiabatic-invariants',
  slug: 'explore/physics/classical-mechanics/adiabatic-invariants',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Canonical Perturbation Theory and Averaging'] = {
  component: 'AveragingAndCanonicalPerturbationTheory',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/averaging-and-canonical-perturbation-theory',
  slug: 'explore/physics/classical-mechanics/averaging-and-canonical-perturbation-theory',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Normal Forms near Equilibria and Periodic Orbits'] = {
  component: 'NormalFormsPerturbationsContent',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/normal-forms-and-perturbations-of-hamiltonian-systems',
  slug: 'explore/physics/classical-mechanics/normal-forms-and-perturbations-of-hamiltonian-systems',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['KAM Theory'] = {
  component: 'KAMPerturbationContent',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/kam-perturbation-theory',
  slug: 'explore/physics/classical-mechanics/kam-perturbation-theory',
  parentSlug: 'explore/physics/classical-mechanics'
}
topicComponentMap['Asymptotics, Singularities and Integrable Systems'] = {
  component: 'AdvancedTopicsAsymptoticsAndIntegrableSystems',
  filePath:
    'explore/physics/classical-mechanics/part-iv-perturbation-theory-and-advanced-topics/advanced-topics-asymptotics-singularities-and-integrable-systems',
  slug: 'explore/physics/classical-mechanics/advanced-topics-asymptotics-singularities-and-integrable-systems',
  parentSlug: 'explore/physics/classical-mechanics'
}

// Algebra modules
// Part 1 - Foundations
topicComponentMap['Arithmetic Foundations'] = {
  component: 'ArithmeticFoundations',
  filePath: 'explore/mathematics/algebra/arithmetic-foundations',
  slug: 'explore/mathematics/algebra/arithmetic-foundations',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Algebraic Foundations'] = {
  component: 'AlgebraicFoundations',
  filePath: 'explore/mathematics/algebra/algebraic-foundations',
  slug: 'explore/mathematics/algebra/algebraic-foundations',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Algebraic Identities (Special Products)'] = {
  component: 'AlgebraicIdentities',
  filePath: 'explore/mathematics/algebra/algebraic-identities',
  slug: 'explore/mathematics/algebra/algebraic-identities',
  parentSlug: 'explore/mathematics/algebra'
}
// Part 2 - Equations and Inequalities
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
topicComponentMap['Roots, Powers and Inequalities'] = {
  component: 'RootsPowersAndInequalities',
  filePath: 'explore/mathematics/algebra/roots-powers-and-inequalities',
  slug: 'explore/mathematics/algebra/roots-powers-and-inequalities',
  parentSlug: 'explore/mathematics/algebra'
}
// Part 3 - Numbers and Expressions
topicComponentMap['Fractions, Ratios and Proportions'] = {
  component: 'FractionsRatiosAndProportions',
  filePath: 'explore/mathematics/algebra/fractions-ratios-and-proportions',
  slug: 'explore/mathematics/algebra/fractions-ratios-and-proportions',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Exponents, Roots and Radicals'] = {
  component: 'ExponentsRootsAndRadicals',
  filePath: 'explore/mathematics/algebra/exponents-roots-and-radicals',
  slug: 'explore/mathematics/algebra/exponents-roots-and-radicals',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['Polynomials'] = {
  component: 'Polynomials',
  filePath: 'explore/mathematics/algebra/polynomials',
  slug: 'explore/mathematics/algebra/polynomials',
  parentSlug: 'explore/mathematics/algebra'
}
// Part 4 - Coordinate Geometry and Functions
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
topicComponentMap['Exponential Functions'] = {
  component: 'ExponentialFunctions',
  filePath: 'explore/mathematics/algebra/exponential-functions',
  slug: 'explore/mathematics/algebra/exponential-functions',
  parentSlug: 'explore/mathematics/algebra'
}
// Part 5 - Advanced Topics
topicComponentMap['Sequences and Series'] = {
  component: 'SequencesAndSeries',
  filePath: 'explore/mathematics/algebra/sequences-and-series',
  slug: 'explore/mathematics/algebra/sequences-and-series',
  parentSlug: 'explore/mathematics/algebra'
}
topicComponentMap['The Binomial Theorem'] = {
  component: 'TheBinomialTheorem',
  filePath: 'explore/mathematics/algebra/the-binomial-theorem',
  slug: 'explore/mathematics/algebra/the-binomial-theorem',
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
topicComponentMap['Willkommen'] = {
  component: 'LanguageLevelsContent',
  filePath: 'explore/languages/german/A1/unit-0-language-levels-and-classroom-instructions',
  slug: 'explore/languages/german/unit-0-language-levels-and-classroom-instructions',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Begrüßungen und erste Kontakte'] = {
  component: 'GreetingsAndFirstContacts',
  filePath: 'explore/languages/german/A1/unit-2-greetings-and-first-contacts',
  slug: 'explore/languages/german/unit-2-greetings-and-first-contacts',
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
topicComponentMap['Project: Proving You Understand'] = {
  component: 'CapstoneWholeNumbers',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-whole-numbers',
  slug: 'explore/mathematics/arithmetic/capstone-whole-numbers',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Project: Proving You Understand Fractions'] = {
  component: 'CapstoneFractions',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-fractions',
  slug: 'explore/mathematics/arithmetic/capstone-fractions',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Project: Proving You Understand Rational Numbers'] = {
  component: 'CapstoneRationalNumbers',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-rational-numbers',
  slug: 'explore/mathematics/arithmetic/capstone-rational-numbers',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Project: Proving You Understand Number Theory'] = {
  component: 'CapstoneNumberTheory',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-number-theory',
  slug: 'explore/mathematics/arithmetic/capstone-number-theory',
  parentSlug: 'explore/mathematics/arithmetic'
}
topicComponentMap['Project: Proving You Understand Decimals'] = {
  component: 'CapstoneDecimals',
  filePath: 'explore/mathematics/arithmetic/projects/capstone-decimals',
  slug: 'explore/mathematics/arithmetic/capstone-decimals',
  parentSlug: 'explore/mathematics/arithmetic'
}

// Biography book modules
topicComponentMap['Augustus: First Emperor of Rome'] = {
  component: 'AugustusFirstEmperor',
  filePath: 'explore/books/biography/Founders & Builders/augustus-first-emperor',
  slug: 'library/biography/augustus-first-emperor',
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

// Content structure for each resource
export const resourceContent = {
  'explore/mathematics/arithmetic': {
    units: [
      {
        title: 'Whole Numbers',
        topics: ['Place Value and Algorithms', 'Number Line and Number Systems']
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
        title: 'Rational Numbers',
        topics: ['Rational Numbers']
      },
      {
        title: 'Number Theory',
        topics: ['Number Theory']
      },
      {
        title: 'Decimals',
        topics: [
          'Decimal Fundamentals',
          'Infinite and Repeating Decimals',
          'Decimal Expansion Proofs'
        ]
      },
      {
        title: 'Tools',
        topics: ['Arithmetic Tools']
      }
    ],
    projects: [
      { title: 'Project: Proving You Understand', unit: 'Whole Numbers' },
      { title: 'Project: Proving You Understand Fractions', unit: 'Fractions' },
      {
        title: 'Project: Proving You Understand Rational Numbers',
        unit: 'Rational Numbers'
      },
      { title: 'Project: Proving You Understand Number Theory', unit: 'Number Theory' },
      { title: 'Project: Proving You Understand Decimals', unit: 'Decimals' }
    ]
  },
  'explore/mathematics/algebra': {
    units: [
      {
        title: 'Foundations',
        topics: [
          'Arithmetic Foundations',
          'Algebraic Foundations',
          'Algebraic Identities (Special Products)'
        ]
      },
      {
        title: 'Equations and Inequalities',
        topics: ['Linear Equations', 'Quadratic Equations', 'Roots, Powers and Inequalities']
      },
      {
        title: 'Numbers and Expressions',
        topics: [
          'Fractions, Ratios and Proportions',
          'Exponents, Roots and Radicals',
          'Polynomials'
        ]
      },
      {
        title: 'Coordinate Geometry and Functions',
        topics: [
          'Graphing Lines and Linear Inequalities',
          'Quadratic Functions and Polynomial Inequalities',
          'Functions',
          'Exponential Functions'
        ]
      },
      {
        title: 'Advanced Topics',
        topics: ['Sequences and Series', 'The Binomial Theorem']
      }
    ]
  },
  'explore/history/prehistory': {
    units: [
      {
        title: 'Introduction',
        topics: ['Introduction: Studying the Human Past']
      },
      {
        title: 'The Evolution of Humanity',
        topics: ['The Evolution of Humanity: 6 Million to 11,600 Years Ago']
      },
      {
        title: 'After the Ice Age',
        topics: [
          'From Foragers to Farmers: Origins of Agriculture',
          'Holocene Societies Across the World',
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
          'Vectors, Kinematics and the Galilean Structure of Space-Time',
          "Newton's Laws and Equations of Motion",
          'Momentum and Systems of Particles',
          'Work, Energy and Conservative Force Fields',
          'Angular Momentum and Fixed-Axis Rotation',
          'Central-Force Motion and the Kepler Problem',
          'Non-Inertial Frames',
          'Small Oscillations (Elementary)',
          'Rigid-Body Dynamics and Gyroscopic Motion (Vectorial Treatment)',
          'Special Relativity (Optional Coda)'
        ]
      },
      {
        title: 'Lagrangian Mechanics and Variational Principles',
        topics: [
          'The Principle of Least Action and the Euler-Lagrange Equations',
          "Symmetries and Conservation Laws (Noether's Theorem)",
          'Integration of the Equations of Motion',
          'Collisions and Scattering',
          'Small Oscillations (Systematic Theory)',
          'Lagrangian Mechanics on Manifolds',
          'Rigid-Body Dynamics (Lagrangian / Geometric Treatment)'
        ]
      },
      {
        title: 'Hamiltonian Mechanics and Canonical Formalism',
        topics: [
          "Hamilton's Equations and the Legendre Transform",
          'Poisson Brackets and First Integrals',
          'Canonical Transformations',
          'Differential Forms and Symplectic Manifolds',
          'The Hamilton-Jacobi Equation',
          'Action-Angle Variables and Integrable Systems',
          'Symmetries, Momentum Maps and Reduction'
        ]
      },
      {
        title: 'Perturbation Theory and Advanced Topics',
        topics: [
          'Adiabatic Invariants',
          'Canonical Perturbation Theory and Averaging',
          'Normal Forms near Equilibria and Periodic Orbits',
          'KAM Theory',
          'Asymptotics, Singularities and Integrable Systems'
        ]
      }
    ]
  },
  'library/biography': {
    units: [
      {
        title: 'Founders & Builders',
        topics: ['Augustus: First Emperor of Rome']
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
        title: 'A1',
        topics: [
          'Willkommen',
          'Begrüßungen und erste Kontakte',
          'Menschen, Länder und Berufe',
          'Familie und Freunde',
          'Essen, Trinken und Einkaufen',
          'Zuhause und Haushalt',
          'Mein Tag und meine Woche',
          'Freizeit, Wetter und Kleidung',
          'Wegbeschreibung, Orte und Verkehr',
          'Reisen und Urlaub',
          'Gesundheit und der Körper'
        ]
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
