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
    source: 'Begegnungen A1+ — Buscha/Szita'
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
  }
]

export const categoryStructure = {
  library: {
    name: 'LIBRARY',
    subcategories: [
      { id: 'books', name: 'Books' },
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
      { id: 'linguistics', name: 'Linguistics' }
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

// German language modules
topicComponentMap['Willkommen'] = {
  component: 'LanguageLevelsContent',
  filePath:
    'explore/languages/german/unit-0-language-levels-and-classroom-instructions/unit-0-language-levels-and-classroom-instructions',
  slug: 'explore/languages/german/unit-0-language-levels-and-classroom-instructions',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Begrüßungen und erste Kontakte'] = {
  component: 'GreetingsAndFirstContacts',
  filePath:
    'explore/languages/german/unit-2-greetings-and-first-contacts/unit-2-greetings-and-first-contacts',
  slug: 'explore/languages/german/unit-2-greetings-and-first-contacts',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Menschen, Länder und Berufe'] = {
  component: 'PeopleCountriesAndProfessions',
  filePath:
    'explore/languages/german/unit-3-people-countries-and-professions/unit-3-people-countries-and-professions',
  slug: 'explore/languages/german/unit-3-people-countries-and-professions',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Familie und Freunde'] = {
  component: 'FamilyAndFriends',
  filePath: 'explore/languages/german/unit-4-family-and-friends/unit-4-family-and-friends',
  slug: 'explore/languages/german/unit-4-family-and-friends',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Essen, Trinken und Einkaufen'] = {
  component: 'FoodDrinkAndShopping',
  filePath:
    'explore/languages/german/unit-5-food-drink-and-shopping/unit-5-food-drink-and-shopping',
  slug: 'explore/languages/german/unit-5-food-drink-and-shopping',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Zuhause und Haushalt'] = {
  component: 'HomeAndHousehold',
  filePath: 'explore/languages/german/unit-6-home-and-household/unit-6-home-and-household',
  slug: 'explore/languages/german/unit-6-home-and-household',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Mein Tag und meine Woche'] = {
  component: 'MyDayAndMyWeek',
  filePath: 'explore/languages/german/unit-7-my-day-and-my-week/unit-7-my-day-and-my-week',
  slug: 'explore/languages/german/unit-7-my-day-and-my-week',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Freizeit, Wetter und Kleidung'] = {
  component: 'FreeTimeWeatherAndClothing',
  filePath:
    'explore/languages/german/unit-8-free-time-weather-and-clothing/unit-8-free-time-weather-and-clothing',
  slug: 'explore/languages/german/unit-8-free-time-weather-and-clothing',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Wegbeschreibung, Orte und Verkehr'] = {
  component: 'DirectionsPlacesAndTransport',
  filePath:
    'explore/languages/german/unit-9-directions-places-and-transport/unit-9-directions-places-and-transport',
  slug: 'explore/languages/german/unit-9-directions-places-and-transport',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Reisen und Urlaub'] = {
  component: 'TravelAndHolidays',
  filePath: 'explore/languages/german/unit-10-travel-and-holidays/unit-10-travel-and-holidays',
  slug: 'explore/languages/german/unit-10-travel-and-holidays',
  parentSlug: 'explore/languages/german'
}
topicComponentMap['Gesundheit und der Körper'] = {
  component: 'HealthAndTheBody',
  filePath: 'explore/languages/german/unit-11-health-and-the-body/unit-11-health-and-the-body',
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

// Biography book modules
topicComponentMap['Augustus: First Emperor of Rome'] = {
  component: 'AugustusFirstEmperor',
  filePath: 'explore/books/biography/augustus-first-emperor/augustus-first-emperor',
  slug: 'library/biography/augustus-first-emperor',
  parentSlug: 'library/biography'
}

// Lex Fridman Podcast modules
topicComponentMap['Andrew Bustamante: CIA Spy | Lex Fridman Podcast #310'] = {
  component: 'AndrewBustamanteContent',
  filePath: 'explore/podcasts/lex-fridman/andrew-bustamante/andrew-bustamante',
  slug: 'explore/podcasts/lex-fridman/andrew-bustamante',
  parentSlug: 'library/lex-fridman-podcast'
}

// Johnny Harris video modules
topicComponentMap['How Switzerland Engineered the Perfect Country'] = {
  component: 'SwitzerlandEngineeringContent',
  filePath: 'explore/videos/johnny-harris/switzerland-engineering/switzerland-engineering',
  slug: 'explore/videos/johnny-harris/switzerland-engineering',
  parentSlug: 'library/history-geopolitics'
}

// Papers modules
topicComponentMap['Shannon Entropy and Information Theory'] = {
  component: 'ShannonEntropyContent',
  filePath: 'explore/papers/information-theory/shannon-entropy/shannon-entropy',
  slug: 'library/papers/shannon-entropy',
  parentSlug: 'library/papers'
}

// Content structure for each resource
export const resourceContent = {
  'explore/mathematics/arithmetic': {
    units: [
      {
        title: 'Part 1: Whole Numbers',
        topics: ['Place Value and Algorithms', 'Number Line and Number Systems']
      },
      {
        title: 'Part 2: Fractions',
        topics: [
          'Fraction Foundations',
          'Fraction Operations',
          'Fraction Applications',
          'Fraction Advanced Topics'
        ]
      },
      {
        title: 'Part 3: Rational Numbers',
        topics: ['Rational Numbers']
      },
      {
        title: 'Part 4: Number Theory',
        topics: ['Number Theory']
      },
      {
        title: 'Part 5: Decimals',
        topics: [
          'Decimal Fundamentals',
          'Infinite and Repeating Decimals',
          'Decimal Expansion Proofs'
        ]
      },
      {
        title: 'Part 6: Tools',
        topics: ['Arithmetic Tools']
      }
    ],
    projects: [{ title: 'Project: Proving You Understand', unit: 'Whole Numbers' }]
  },
  'explore/physics/classical-mechanics': {
    units: [
      {
        title: 'Part I: Newtonian Mechanics',
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
        title: 'Part II: Lagrangian Mechanics and Variational Principles',
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
        title: 'Part III: Hamiltonian Mechanics and Canonical Formalism',
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
        title: 'Part IV: Perturbation Theory and Advanced Topics',
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
