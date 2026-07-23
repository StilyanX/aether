import { Fragment, useEffect, useMemo, useState, useRef, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import LoadingScreen from '../layout/loading-screen'
import {
  resourceContent,
  resourceMetadata,
  slugToIndex,
  topicComponentMap
} from '../../config/registry'
import { usePageTransition } from '../../hooks/use-page-transition'
import { useBookmarks } from '../../hooks/use-bookmarks'
import './curriculum-view.css'

// Supplementary UX metadata for curriculum-view consumers. Each key is a
// resource slug; the matching value is the editorial layer the registry
// doesn't carry (depth, prereq, kicker, per-module codes/minutes, per-unit
// ledes, and an optional Tool Library payload). Adding a new entry here is
// the only step required to opt a resource into the curriculum template -
// app.jsx's LibraryRoute gates rendering on the presence of an entry.
export const RESOURCE_META = {
  'library/biography': {
    kicker: 'Library · Biography',
    depth: 1,
    prereq: 'None',
    description:
      'Lives of the figures who shaped the world they were born into. Each book is a long-form biography rebuilt as a section-by-section reading flow with practice cards and a quick reference.',
    moduleMinutes: {
      'Augustus: The Biography': 540
    },
    moduleCodes: {
      'Augustus: The Biography': 'A.G'
    },
    moduleThumbnails: {
      'Augustus: The Biography': 'https://covers.openlibrary.org/b/id/8414081-L.jpg'
    },
    unitLedes: {
      'Founders & Builders':
        'Lives of figures who reshaped the political and material world around them.'
    }
  },

  'library/fantasy': {
    kicker: 'Library · Fantasy',
    depth: 1,
    prereq: 'None',
    description:
      'Speculative fiction across dying earth, weird tale, science fantasy, and high fantasy. Each book is rebuilt as a section-by-section reading flow with practice cards and a quick reference.',
    moduleMinutes: {
      'The Shadow of the Torturer': 480,
      'The Claw of the Conciliator': 480,
      'The Sword of the Lictor': 480,
      'The Citadel of the Autarch': 480
    },
    moduleCodes: {
      'The Shadow of the Torturer': 'S.T',
      'The Claw of the Conciliator': 'C.C',
      'The Sword of the Lictor': 'S.L',
      'The Citadel of the Autarch': 'C.A'
    },
    moduleThumbnails: {
      'The Shadow of the Torturer':
        'https://books.google.com/books/content?id=lAO7iHaw0EwC&printsec=frontcover&img=1&zoom=1',
      'The Claw of the Conciliator':
        'https://books.google.com/books/content?id=Oj6-5s3FOUEC&printsec=frontcover&img=1&zoom=1',
      'The Sword of the Lictor':
        'https://books.google.com/books/content?id=Ch1dp24RxYoC&printsec=frontcover&img=1&zoom=1',
      'The Citadel of the Autarch':
        'https://books.google.com/books/content?id=h3wSdakBjZwC&printsec=frontcover&img=1&zoom=1'
    },
    unitLedes: {
      'Science Fantasy':
        'Far-future Earth under a dying sun, where forgotten technology reads as sorcery.'
    }
  },

  'library/lex-fridman-podcast': {
    kicker: 'Library · Podcast',
    depth: 1,
    prereq: 'None',
    coverAspect: 'video',
    description:
      'Long-form conversations with builders, scientists, and operators. Each episode is rebuilt as a topic-by-topic learning flow with practice cards and a quick reference.',
    moduleMinutes: {
      'Andrew Bustamante: CIA Spy | Lex Fridman Podcast #310': 233
    },
    moduleCodes: {
      'Andrew Bustamante: CIA Spy | Lex Fridman Podcast #310': 'A.B'
    },
    moduleThumbnails: {
      'Andrew Bustamante: CIA Spy | Lex Fridman Podcast #310':
        'https://i.ytimg.com/vi/T3FC7qIAGZk/maxresdefault.jpg'
    },
    unitLedes: {
      Episodes:
        'Long-form conversations with builders, scientists, and operators on how their world actually works.'
    }
  },

  'library/films/science-fiction': {
    kicker: 'Library · Films',
    depth: 1,
    prereq: 'None',
    description:
      'Films rebuilt as scene-by-scene viewing flows with practice cards and a quick reference. Each entry covers a full feature as one long studied watch.',
    moduleMinutes: {
      'Star Wars: Episode I - The Phantom Menace': 720
    },
    moduleCodes: {
      'Star Wars: Episode I - The Phantom Menace': 'P.M'
    },
    unitLedes: {
      'Star Wars':
        "George Lucas's nine-film arc, beginning with the Trade Federation blockade of Naboo and the boy who would become Vader."
    }
  },

  'explore/mathematics/arithmetic': {
    kicker: 'Mathematics · Foundation',
    depth: 1,
    prereq: 'None',
    description:
      'How numbers work and combine. Start with the four operations on whole numbers, fractions, decimals, and signed rationals. Then the structure underneath them: factors, primes, ratio, rate, and percent. Finish on the full number line, from integers out to irrationals and surds. Every later mathematics, from algebra to calculus to topology, assumes you can run all of this without thinking.',
    moduleMinutes: {
      'Place Value and Algorithms': 45,
      'Number Line and Number Systems': 38,
      'Fraction Foundations': 40,
      'Fraction Operations': 50,
      'Fraction Applications': 42,
      'Fraction Advanced Topics': 36,
      'Rational Numbers': 44,
      'Number Theory': 48,
      'Decimal Fundamentals': 40,
      'Infinite and Repeating Decimals': 32,
      'Decimal Expansion Proofs': 36,
      'Percentages: Concept and Conversions': 35
    },
    moduleCodes: {
      'Place Value and Algorithms': 'P&V',
      'Number Line and Number Systems': 'N.L',
      'Fraction Foundations': 'F.F',
      'Fraction Operations': 'F.O',
      'Fraction Applications': 'F.A',
      'Fraction Advanced Topics': 'F.X',
      'Rational Numbers': 'R.N',
      'Number Theory': 'N.T',
      'Decimal Fundamentals': 'D.F',
      'Infinite and Repeating Decimals': 'I.R',
      'Decimal Expansion Proofs': 'D.X',
      'Percentages: Concept and Conversions': 'P.C'
    },
    unitLedes: {
      'Place Value and Whole Numbers':
        'Place value, mental strategies, ordering, and parity as spine for everything that follows.',
      'Number Properties':
        'Factors, multiples, divisibility tests, and primes: the hidden structure inside every integer, down to HCF and LCM.',
      Fractions:
        'What a fraction really means, how to add and multiply them, where they show up, and the harder cases.',
      'Decimals and Approximation':
        'Decimals as another way to write fractions, plus rounding, significant figures, and the decimals that repeat forever.',
      Percentages:
        'Hundredths as a language: converting them, taking a percent of an amount, and measuring increase and decrease.',
      'Proportional Reasoning':
        'Ratio, rate, and proportion as the engine behind scaling, speed, and maps.',
      'Applied Finance':
        'Discount, interest, and growth: arithmetic as the grammar of money over time.',
      'The Rational Number System':
        'Integers, negatives, and absolute value on the number line, then operating on every rational with its sign.',
      'Sequences and Patterns':
        'Lists of numbers with a rule, from simple patterns to arithmetic and geometric progressions.',
      'Indices and Standard Form':
        'Powers, index laws, and scientific notation as the shorthand of very large and very small.',
      'The Real Number System':
        'Squares, roots, irrationals, surds, and the proof that every fraction is a terminating or repeating decimal.'
    }
  },

  'explore/mathematics/algebra': {
    kicker: 'Mathematics · Algebra',
    depth: 2,
    prereq: 'Arithmetic',
    description:
      'The language of unknowns. Variables, equations, and functions that turn arithmetic into a general-purpose tool for describing any relationship between quantities.',
    moduleMinutes: {
      'Arithmetic Foundations': 40,
      'Algebraic Foundations': 45,
      'Algebraic Identities (Special Products)': 40,
      'Linear Equations': 45,
      'Quadratic Equations': 55,
      'Fractions, Ratios and Proportions': 45,
      'Exponents, Roots and Radicals': 50,
      Polynomials: 50,
      'Graphing Lines and Linear Inequalities': 50,
      'Quadratic Functions and Polynomial Inequalities': 55,
      Functions: 45,
      'Exponential Functions': 50,
      'Sequences and Series': 50,
      'The Binomial Theorem': 45
    },
    moduleCodes: {
      'Arithmetic Foundations': 'A.F',
      'Algebraic Foundations': 'A.B',
      'Algebraic Identities (Special Products)': 'A.I',
      'Linear Equations': 'L.E',
      'Quadratic Equations': 'Q.E',
      'Fractions, Ratios and Proportions': 'F.R',
      'Exponents, Roots and Radicals': 'E.R',
      Polynomials: 'P.O',
      'Graphing Lines and Linear Inequalities': 'G.L',
      'Quadratic Functions and Polynomial Inequalities': 'Q.F',
      Functions: 'FN',
      'Exponential Functions': 'E.F',
      'Sequences and Series': 'S.S',
      'The Binomial Theorem': 'B.T'
    },
    unitLedes: {
      Foundations: 'Variables, expressions, and the identities that make algebra computable.',
      'Equations and Inequalities': 'Solving for unknowns: the core operation of all algebra.',
      'Numbers and Expressions': 'Fractions, exponents, and polynomials as manipulable objects.',
      'Coordinate Geometry and Functions':
        'Equations as graphs and the function as the central object of modern mathematics.',
      'Advanced Topics': 'Patterns that extend to infinity and the algebra of combinatorics.'
    }
  },

  'explore/history/prehistory': {
    kicker: 'History · Foundation',
    depth: 1,
    prereq: 'None',
    description:
      'The human story from the first stone tools to the end of the Ice Age. Six million years of evolution, dispersal, and the cognitive leap that produced art, language, and the transformation from foragers to the threshold of civilization.',
    moduleMinutes: {
      'Introduction: Studying the Human Past': 35,
      'The Evolution of Humanity: 6 Million to 11,600 Years Ago': 60,
      'From Foragers to Farmers: Origins of Agriculture': 55,
      'Holocene Societies Across the World': 55,
      'First Civilizations of the Old World': 60,
      'Complex Societies of the Americas and Synthesis': 60
    },
    moduleCodes: {
      'Introduction: Studying the Human Past': 'I.S',
      'The Evolution of Humanity: 6 Million to 11,600 Years Ago': 'E.H',
      'From Foragers to Farmers: Origins of Agriculture': 'F.F',
      'Holocene Societies Across the World': 'H.S',
      'First Civilizations of the Old World': 'F.C',
      'Complex Societies of the Americas and Synthesis': 'C.S'
    },
    unitLedes: {
      Introduction: 'What archaeology is, how it dates the past, and why prehistory matters.',
      'The Evolution of Humanity':
        'Six million years from the first hominins to the colonization of every habitable continent.',
      'After the Ice Age':
        'The post-glacial world: how foragers became farmers and farmers became states.'
    }
  },

  'library/history-geopolitics': {
    kicker: 'Library · Videos',
    depth: 1,
    prereq: 'None',
    coverAspect: 'video',
    description: 'Historical analysis and geopolitical strategy.',
    moduleMinutes: {
      'How Switzerland Engineered the Perfect Country': 33
    },
    moduleCodes: {
      'How Switzerland Engineered the Perfect Country': 'H.S'
    },
    moduleThumbnails: {
      'How Switzerland Engineered the Perfect Country':
        'https://i.ytimg.com/vi/OMbV1rIPhCg/maxresdefault.jpg'
    },
    unitLedes: {
      'HISTORY & GEOPOLITICS': 'Video essays on historical events and geopolitical dynamics.'
    }
  },

  'library/papers': {
    kicker: 'Library · Papers',
    depth: 3,
    prereq: 'None',
    description: 'Landmark papers in information theory, computation, and mathematics.',
    moduleMinutes: {
      'Shannon Entropy and Information Theory': 60
    },
    moduleCodes: {
      'Shannon Entropy and Information Theory': 'S.E'
    },
    unitLedes: {
      'Foundational Papers': 'Primary sources. Read the originals.'
    }
  },

  'explore/physics/classical-mechanics': {
    kicker: 'Physics · Foundation',
    depth: 4,
    prereq: 'Calculus · Linear Algebra',
    description:
      "How matter moves under forces. From a falling apple to a spinning gyroscope, classical mechanics covers everything bigger than an atom and slower than light. Three formulations describe the same physics with progressively deeper mathematics: Newton's vectors, Lagrange's action, and Hamilton's phase space.",
    moduleMinutes: {
      // Part I
      'Vectors, Kinematics and the Galilean Structure of Space-Time': 60,
      "Newton's Laws and Equations of Motion": 55,
      'Momentum and Systems of Particles': 50,
      'Work, Energy and Conservative Force Fields': 55,
      'Angular Momentum and Fixed-Axis Rotation': 60,
      'Central-Force Motion and the Kepler Problem': 55,
      'Non-Inertial Frames': 45,
      'Small Oscillations (Elementary)': 45,
      'Rigid-Body Dynamics and Gyroscopic Motion (Vectorial Treatment)': 60,
      'Special Relativity (Optional Coda)': 40,
      // Part II
      'The Principle of Least Action and the Euler-Lagrange Equations': 60,
      "Symmetries and Conservation Laws (Noether's Theorem)": 55,
      'Integration of the Equations of Motion': 50,
      'Collisions and Scattering': 45,
      'Small Oscillations (Systematic Theory)': 55,
      'Lagrangian Mechanics on Manifolds': 55,
      'Rigid-Body Dynamics (Lagrangian / Geometric Treatment)': 60,
      // Part III
      "Hamilton's Equations and the Legendre Transform": 60,
      'Poisson Brackets and First Integrals': 50,
      'Canonical Transformations': 55,
      'Differential Forms and Symplectic Manifolds': 65,
      'The Hamilton-Jacobi Equation': 55,
      'Action-Angle Variables and Integrable Systems': 65,
      'Curvature, Geodesic Flow, and the Limits of Prediction': 60,
      // Part IV
      'Adiabatic Invariants': 50,
      'Canonical Perturbation Theory and Averaging': 65,
      'Normal Forms near Equilibria and Periodic Orbits': 60,
      'KAM Theory': 60,
      'Asymptotics, Singularities and Integrable Systems': 70
    },
    moduleCodes: {
      // Part I
      'Vectors, Kinematics, and the Galilean Structure of Space-Time': 'V.K',
      "Newton's Laws and Equations of Motion": 'N.L',
      'Momentum, Systems of Particles, and Variable-Mass Dynamics': 'M.S',
      'Work, Energy, and Conservative Force Fields': 'W.E',
      'Angular Momentum and Fixed-Axis Rotation': 'A.R',
      'Central-Force Motion and the Kepler Problem': 'C.F',
      'Restricted Three-Body Problem and Lagrange Points': 'R.T',
      Tides: 'TID',
      'Non-Inertial Frames and Coriolis Applications': 'N.F',
      'Small Oscillations (Elementary)': 'S.O',
      'Rapidly Oscillating Forces: Kapitza Pendulum': 'R.O',
      'Rigid-Body Dynamics, Gyroscopic Motion, and the Heavy Symmetric Top': 'R.D',
      'Special Relativity and Covariant Mechanics': 'S.R',
      // Part II
      "D'Alembert's Principle and Virtual Displacements": 'D.P',
      'The Principle of Least Action and the Euler-Lagrange Equations': 'E.L',
      'Variational Problems Beyond Mechanics': 'V.P',
      'Holonomic and Non-Holonomic Constraints': 'H.C',
      "Symmetries and Conservation Laws: Noether's Theorem": 'N.T',
      'Integration of the Equations of Motion': 'I.E',
      'Routhian Reduction for Cyclic Coordinates': 'R.R',
      'Collisions and Scattering': 'C.S',
      'Friction and Non-Conservative Forces': 'F.N',
      'Small Oscillations: Systematic Theory': 'S.T',
      'Lagrangian Mechanics on Manifolds': 'L.M',
      'Rigid-Body Dynamics (Lagrangian / Geometric Treatment)': 'R.L',
      // Part III
      "Hamilton's Equations and the Legendre Transform": 'H.E',
      'Poisson Brackets and First Integrals': 'P.B',
      "Liouville's Theorem and Poincaré Recurrence": 'L.T',
      'Canonical Transformations and Generating Functions': 'C.T',
      'Differential Forms and Symplectic Manifolds': 'D.S',
      'The Hamilton-Jacobi Equation and the Optical-Mechanical Analogy': 'H.J',
      'Action-Angle Variables and Integrable Systems': 'A.A',
      'Curvature, Geodesic Flow, and the Limits of Prediction': 'C.G',
      'Constrained Hamiltonian Systems: Dirac-Bergmann Algorithm': 'C.D',
      'Classical Geometric Phase and the Hannay Angle': 'G.P',
      // Part IV
      'Adiabatic Invariants': 'A.I',
      'Magnetic Adiabatic Invariants for Charged Particles': 'M.A',
      'Canonical Perturbation Theory and Averaging': 'C.P',
      'Lie Transformation Method (Deprit Series)': 'L.D',
      'Normal Forms near Equilibria and Periodic Orbits': 'N.F',
      'Floquet Theory, Mathieu Equation, and Parametric Resonance': 'F.T',
      'KAM Theory': 'KAM',
      'Asymptotics, Singularities, and Integrable Systems': 'A.S'
    },
    unitLedes: {
      'Newtonian Mechanics':
        "Forces become trajectories via Newton's laws. You derive the three conservation laws, then apply them to orbits, tides, gyroscopes, and an inverted pendulum.",
      'Lagrangian Mechanics and Variational Principles':
        'A single scalar function replaces all forces. Minimizing the action gives equations of motion, and every symmetry automatically produces a conservation law.',
      'Hamiltonian Mechanics and Canonical Formalism':
        "Newton's equations recast as two first-order equations in position and momentum. The geometry of phase space then reveals conserved quantities, integrable systems, and the onset of chaos."
    }
  },

  'explore/chemistry/general-chemistry': {
    kicker: 'Chemistry · Foundation',
    depth: 2,
    prereq: 'Algebra',
    description:
      'Matter, and how it changes. General Chemistry covers atoms, bonds, energy, rates, and equilibrium. It builds from the periodic table to acids, redox, transition metals, and industrial synthesis.',
    moduleMinutes: {
      'Atomic Structure, the Periodic Table, and Periodic Trends': 60,
      'Structure and Bonding': 60,
      'Thermochemistry and Energy': 55,
      'Lattice Energy and Born-Haber Cycles': 50,
      'Entropy, Gibbs Free Energy, and Spontaneity': 60,
      'Chemical Kinetics and Rate Laws': 60,
      'Chemical Equilibrium and Equilibrium Constants': 55,
      'Acids and Bases': 60,
      'Buffer Solutions': 45,
      'Salt Hydrolysis': 40,
      'Solubility Product and the Common-Ion Effect': 50,
      'Redox and Electrochemistry': 60,
      "Electrolysis and Faraday's Laws": 50,
      'Coordination and Transition-Metal Chemistry': 65,
      'Qualitative and Quantitative Analysis': 50,
      'Instrumental Analysis and Spectroscopy': 60,
      'Industrial Synthesis Processes': 55,
      'Green and Sustainable Chemistry': 45
    },
    moduleCodes: {
      'Atomic Structure, the Periodic Table, and Periodic Trends': 'A.P',
      'Structure and Bonding': 'S.B',
      'Thermochemistry and Energy': 'T.E',
      'Lattice Energy and Born-Haber Cycles': 'L.E',
      'Entropy, Gibbs Free Energy, and Spontaneity': 'G.S',
      'Chemical Kinetics and Rate Laws': 'K.R',
      'Chemical Equilibrium and Equilibrium Constants': 'E.Q',
      'Acids and Bases': 'A.B',
      'Buffer Solutions': 'B.S',
      'Salt Hydrolysis': 'S.H',
      'Solubility Product and the Common-Ion Effect': 'K.S',
      'Redox and Electrochemistry': 'R.E',
      "Electrolysis and Faraday's Laws": 'E.F',
      'Coordination and Transition-Metal Chemistry': 'C.M',
      'Qualitative and Quantitative Analysis': 'Q.A',
      'Instrumental Analysis and Spectroscopy': 'I.S',
      'Industrial Synthesis Processes': 'I.P',
      'Green and Sustainable Chemistry': 'G.C'
    },
    unitLedes: {
      'Atomic Structure and Periodicity':
        'How electrons fill atoms, and why the periodic table predicts size, charge, and reactivity.',
      'Bonding and Structure':
        'Why atoms join. Ionic, covalent, and metallic bonds set the shape and properties of matter.',
      'Energetics and Thermodynamics':
        'Energy in reactions: heat released, lattices built, and the drive toward spontaneous change.',
      Kinetics: 'How fast reactions go, and what the rate law reveals about the mechanism.',
      'Chemical Equilibrium':
        'Forward and reverse reactions in balance, and the constant that fixes the ratio.',
      'Acid-Base and Aqueous Equilibria':
        'Protons in water: pH, buffers, hydrolysis, and when salts dissolve or precipitate.',
      'Redox and Electrochemistry':
        'Electron transfer turned into voltage, and the cells that store and supply it.',
      'Transition-Metal and Coordination Chemistry':
        'Metal centres bind ligands, split d-orbitals, and paint solutions with colour.',
      'Analytical Chemistry':
        'How chemists identify and measure what a sample contains, by test and by instrument.',
      'Industrial and Sustainable Chemistry':
        'Making chemicals at scale, and doing it with less waste and less harm.'
    }
  }
}

function stripPartPrefix(title) {
  return (title || '').replace(/^Part\s*(?:\d+|[IVXLCDM]+)\s*:\s*/i, '').trim()
}

function stripProjectPrefix(title) {
  return (title || '').replace(/^Project:\s*/i, '').trim()
}

function codeFor(title, meta) {
  const codes = meta?.moduleCodes || {}
  if (codes[title]) return codes[title]
  const words = title.split(/\s+/).filter(Boolean)
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase()
  return (words[0][0] + '.' + words[1][0]).toUpperCase()
}

function minsFor(title, meta) {
  return meta?.moduleMinutes?.[title] ?? 40
}

// Prerequisites are authored as a single string in RESOURCE_META: 'None' when a
// subject is a foundation, otherwise one or more subject names joined by ' · '
// (e.g. 'Calculus · Linear Algebra'). Split into individual requirements and
// resolve each to a curriculum slug when one exists, so the label can link
// straight into the prerequisite course. Unknown names (subjects not yet on the
// platform) fall back to plain, non-navigable text.
function parsePrereqs(prereq, titleToSlug) {
  if (!prereq || /^none$/i.test(prereq.trim())) return []
  return prereq
    .split('·')
    .map(s => s.trim())
    .filter(Boolean)
    .map(name => ({ name, slug: titleToSlug[name.toLowerCase()] || null }))
}

function parseSources(source) {
  if (!source) return []
  const normalize = s => {
    if (typeof s === 'string') return { text: s }
    if (s && typeof s === 'object') {
      const { title, text, author, year, module } = s
      return { text: title || text || '', author, year, module }
    }
    return { text: '' }
  }
  if (Array.isArray(source)) return source.map(normalize)
  return [normalize(source)]
}

function buildCurriculum(slug, meta) {
  const content = resourceContent[slug] || { units: [], projects: [] }
  const projectsByUnit = {}
  ;(content.projects || []).forEach(p => {
    projectsByUnit[p.unit] = p
  })
  const ledes = meta?.unitLedes || {}
  return (content.units || []).map((unit, unitIndex) => {
    const cleanTitle = stripPartPrefix(unit.title)
    const thumbnails = meta?.moduleThumbnails || {}
    const coverAspect = meta?.coverAspect || null
    const modules = (unit.topics || []).map((topic, topicIndex) => {
      const isObject = typeof topic === 'object'
      const rawTitle = isObject ? topic.title : topic
      const title = rawTitle.replace(/^Module\s*[\d.]+\s*:\s*/i, '').trim()
      return {
        id: `${unitIndex}-${topicIndex}`,
        rawTitle,
        title,
        code: codeFor(title, meta),
        mins: minsFor(title, meta),
        thumbnail: (isObject && topic.thumbnail) || thumbnails[title] || null,
        coverAspect
      }
    })
    const project = projectsByUnit[cleanTitle]
    const capstone = project
      ? {
          title: stripProjectPrefix(project.title),
          rawTitle: project.title,
          mins: project.mins || 90
        }
      : null
    return {
      id: `unit-${unitIndex}`,
      title: cleanTitle,
      lede: ledes[cleanTitle] || '',
      modules,
      capstone
    }
  })
}

// Mini cover art

// YouTube thumbnails: normalize to i.ytimg.com, the canonical CDN. The legacy
// img.youtube.com alias fails DNS (NS_ERROR_UNKNOWN_HOST) on some resolvers.
// Then walk maxres -> hq -> mq: maxresdefault.jpg 404s for videos the uploader
// never gave a hi-res thumbnail, but hqdefault.jpg exists for every video.
function thumbSources(thumbnail) {
  if (!thumbnail) return []
  const m = thumbnail.match(/\/vi\/([^/]+)\/\w+\.jpg/)
  if (!m || !/(?:img\.youtube\.com|i\.ytimg\.com)/.test(thumbnail)) return [thumbnail]
  const base = `https://i.ytimg.com/vi/${m[1]}/`
  return [`${base}maxresdefault.jpg`, `${base}hqdefault.jpg`, `${base}mqdefault.jpg`]
}

function MiniCover({ code, idx, total, thumbnail, title, aspect }) {
  const variant = idx % 4
  const sources = useMemo(() => thumbSources(thumbnail), [thumbnail])
  const [srcIdx, setSrcIdx] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const aspectClass = aspect === 'video' ? ' cc-cover-video' : ''
  // The generated cover is always the base. The real thumbnail is overlaid but
  // stays invisible until it actually loads, so a slow / 404 / blocked external
  // image never flashes broken alt text - it just leaves the generated cover
  // showing. onError walks maxres -> hq -> mq; when exhausted the img unmounts.
  const activeSrc = thumbnail && srcIdx < sources.length ? sources[srcIdx] : null

  return (
    <div
      className={`cc-cover cc-v-${variant}${aspectClass}${loaded ? ' cc-cover-thumb' : ''}`}
      aria-hidden="true"
    >
      <div className="cc-cover-inner">
        <span className="cc-cover-code">{code}</span>
        <span className="cc-cover-bars">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="cc-cover-bar" style={{ width: `${35 + ((i * 17) % 50)}%` }} />
          ))}
        </span>
        <span className="cc-cover-seq">
          {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
      {activeSrc ? (
        <img
          src={activeSrc}
          alt={title || ''}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(false)
            setSrcIdx(i => i + 1)
          }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 200ms ease',
            zIndex: 1
          }}
        />
      ) : null}
    </div>
  )
}

// Track map

// Masthead

function Masthead({ category, title, description, prereqs, onPrereq, totalModules, completed, onBegin }) {
  const pct = totalModules > 0 ? Math.round((completed / totalModules) * 100) : 0
  return (
    <header className="cc-masthead">
      {category ? <div className="cc-mh-breadcrumb">{category.toUpperCase()}</div> : null}
      <h1 className="cc-mh-title">{title}</h1>

      {description ? <p className="cc-mh-lede-p">{description}</p> : null}

      {prereqs.length > 0 ? (
        <div className="cc-mh-prereq" role="group" aria-label="Prerequisites">
          <span className="cc-mh-prereq-label">
            {prereqs.length === 1 ? 'Prerequisite' : 'Prerequisites'}
          </span>
          <span className="cc-mh-prereq-items">
            {prereqs.map((p, i) => (
              <Fragment key={p.name}>
                {p.slug ? (
                  <button
                    type="button"
                    className="cc-mh-prereq-link"
                    onClick={() => onPrereq(p.slug)}
                    aria-label={`Prerequisite: ${p.name} (open course)`}
                  >
                    <span className="cc-mh-prereq-name">{p.name}</span>
                    <span className="cc-mh-prereq-arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                ) : (
                  <span className="cc-mh-prereq-text">{p.name}</span>
                )}
                {i < prereqs.length - 1 ? (
                  <span className="cc-mh-prereq-sep" aria-hidden="true">
                    ·
                  </span>
                ) : null}
              </Fragment>
            ))}
          </span>
        </div>
      ) : null}

      <div className="cc-mh-action">
        <div className="cc-mh-progress">
          <div className="cc-mh-progress-label">
            <span className="pct">{pct}%</span>
            <span className="sep">·</span>
            <span className="sub">
              {completed} / {totalModules} COMPLETE
            </span>
          </div>
          <div className="cc-mh-progress-track">
            <div className="cc-mh-progress-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <button type="button" className="cc-mh-begin" onClick={onBegin}>
          <span className="cc-mh-begin-l">{completed > 0 ? 'Continue' : 'Begin here'}</span>
          <span className="cc-mh-begin-kbd">↵</span>
        </button>
      </div>
    </header>
  )
}

// Module card

function ModuleCard({
  module,
  idx,
  total,
  onOpen,
  isDone,
  disabled,
  onToggle,
  slug,
  isBookmarked,
  onBookmark
}) {
  const handleClick = e => {
    if (disabled) return
    onOpen(module, e)
  }
  // Suppress the browser's middle-click autoscroll so onAuxClick fires cleanly.
  const handleMouseDown = e => {
    if (e.button === 1) e.preventDefault()
  }
  const handleAuxClick = e => {
    if (disabled || e.button !== 1) return
    e.preventDefault()
    onOpen(module, e)
  }
  const handleToggle = e => {
    e.stopPropagation()
    onToggle()
  }
  const handleBookmark = e => {
    e.stopPropagation()
    onBookmark()
  }
  return (
    <button
      type="button"
      className={`cc-mod ${isDone ? 'done' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onAuxClick={handleAuxClick}
      aria-label={module.title}
      aria-disabled={disabled}
      // Hovering this card makes it the target of the bookmark key (see
      // use-keybinds): the dispatcher reads :hover straight off the DOM.
      data-bookmark-slug={slug || undefined}
    >
      <MiniCover
        code={module.code}
        idx={idx}
        total={total}
        thumbnail={module.thumbnail}
        title={module.title}
        aspect={module.coverAspect}
      />
      <div className="cc-mod-body">
        <span className="cc-mod-code">{module.code}</span>
        <span className="cc-mod-title">{module.title}</span>
        <span className="cc-mod-meta">
          <span>{disabled ? 'Soon' : 'Reading'}</span>
        </span>
      </div>
      {/* Always rendered, both states. Gating it behind isBookmarked left the
          SAVE action with no affordance at all: you could only ever unsave. */}
      <span
        className={`cc-mod-bookmark ${isBookmarked ? 'on' : ''}`}
        role="button"
        aria-pressed={isBookmarked}
        aria-label={isBookmarked ? `Saved: ${module.title}` : `Save ${module.title}`}
        title={isBookmarked ? 'Saved' : 'Save'}
        tabIndex={-1}
        onClick={handleBookmark}
      >
        {isBookmarked ? '★' : '☆'}
      </span>
      <span
        className={`cc-mod-check ${isDone ? 'on' : ''}`}
        role="checkbox"
        aria-checked={isDone}
        tabIndex={-1}
        onClick={handleToggle}
      >
        <span className="cc-mod-check-mark" aria-hidden="true">
          ✓
        </span>
      </span>
    </button>
  )
}

// Capstone card

function CapstoneCard({ capstone, section, onOpen }) {
  const target = { rawTitle: capstone.rawTitle, capstone: true }
  const handleMouseDown = e => {
    if (e.button === 1) e.preventDefault()
  }
  const handleAuxClick = e => {
    if (e.button !== 1) return
    e.preventDefault()
    onOpen(target, e)
  }
  return (
    <button
      type="button"
      className="cc-capstone"
      onClick={e => onOpen(target, e)}
      onMouseDown={handleMouseDown}
      onAuxClick={handleAuxClick}
    >
      <div className="cc-capstone-kick">Capstone · {section}</div>
      <div className="cc-capstone-title">{capstone.title}</div>
      <div className="cc-capstone-foot">
        <span>{capstone.mins}M · Synthesis project</span>
      </div>
      <span className="cc-capstone-arrow" aria-hidden="true">
        →
      </span>
    </button>
  )
}

// The course-wide final exam. Inverted (light) surface so it reads as the
// finale, distinct from the per-unit capstone cards above it.
function FinalExamCard({ title, rawTitle, mins, unitCount, onOpen }) {
  const target = { rawTitle, capstone: true }
  const handleMouseDown = e => {
    if (e.button === 1) e.preventDefault()
  }
  const handleAuxClick = e => {
    if (e.button !== 1) return
    e.preventDefault()
    onOpen(target, e)
  }
  return (
    <button
      type="button"
      className="cc-finalexam"
      onClick={e => onOpen(target, e)}
      onMouseDown={handleMouseDown}
      onAuxClick={handleAuxClick}
      aria-label={`Final exam: ${title}`}
    >
      <span className="cc-finalexam-mark" aria-hidden="true">
        <span>+</span>
        <span>−</span>
        <span>×</span>
        <span>÷</span>
      </span>
      <span className="cc-finalexam-body">
        <span className="cc-finalexam-kick">Final Exam · Arithmetic</span>
        <span className="cc-finalexam-title">{title}</span>
        <span className="cc-finalexam-lede">
          Every unit, one sitting. The whole course in a single exam.
        </span>
        <span className="cc-finalexam-foot">
          <span className="cc-finalexam-meta">
            {mins}M · {unitCount} units · Synthesis
          </span>
          <span className="cc-finalexam-cta">
            Begin final exam
            <span aria-hidden="true">→</span>
          </span>
        </span>
      </span>
    </button>
  )
}

// Main view

function CurriculumView() {
  const location = useLocation()
  const navigate = useNavigate()
  const pageEntered = usePageTransition()
  const { bookmarks, toggleBookmark } = useBookmarks()

  const slug = location.pathname.replace(/^\//, '').replace(/\/$/, '')
  const resourceIndex = slugToIndex[slug]
  const resource = resourceMetadata[resourceIndex]
  const meta = useMemo(() => RESOURCE_META[slug] || {}, [slug])
  const skipUnits = useMemo(() => meta.skipUnits || [], [meta])

  // Map every resource title to its slug so a prerequisite name authored in
  // RESOURCE_META ('Arithmetic', 'Algebra') resolves to a navigable course.
  const titleToSlug = useMemo(() => {
    const map = {}
    resourceMetadata.forEach(r => {
      if (r?.title && r?.slug) map[r.title.toLowerCase()] = r.slug
    })
    return map
  }, [])
  const prereqs = useMemo(() => parsePrereqs(meta.prereq, titleToSlug), [meta, titleToSlug])

  useEffect(() => {
    if (resource) document.title = `${resource.title}/Aether`
  }, [resource])

  const units = useMemo(
    () => buildCurriculum(slug, meta).filter(u => !skipUnits.includes(u.title)),
    [slug, meta, skipUnits]
  )
  const totalModules = useMemo(() => units.reduce((n, u) => n + u.modules.length, 0), [units])
  const finalExam = resourceContent[slug]?.finalExam || null

  const progressKey = `aether-progress-${slug}`
  const [done, setDone] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(progressKey) || '[]'))
    } catch {
      return new Set()
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(progressKey, JSON.stringify([...done]))
    } catch {
      /* noop */
    }
  }, [done, progressKey])
  const toggle = id =>
    setDone(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  // Loading overlay: hold until every cover image has actually loaded, so the
  // curriculum reveals fully-painted instead of with blank cover frames that
  // pop in one by one (covers are external openlibrary/google thumbnails).
  const pageRef = useRef(null)
  const [imagesReady, setImagesReady] = useState(false)
  const [renderSettled, setRenderSettled] = useState(false)
  const [contentReady, setContentReady] = useState(false)
  const [screenDone, setScreenDone] = useState(false)
  const handleScreenDone = useCallback(() => setScreenDone(true), [])

  useEffect(() => {
    if (imagesReady && renderSettled) setContentReady(true)
  }, [imagesReady, renderSettled])

  useEffect(() => {
    const container = pageRef.current
    if (!container) {
      setImagesReady(true)
      return
    }
    const imgs = Array.from(container.querySelectorAll('img'))
    if (imgs.length === 0) {
      setImagesReady(true)
      return
    }
    // Force lazy covers to load now so the loader can wait on all of them.
    imgs.forEach(img => {
      img.loading = 'eager'
    })
    const pending = imgs.filter(img => !img.complete)
    if (pending.length === 0) {
      setImagesReady(true)
      return
    }
    let remaining = pending.length
    const onSettle = () => {
      if (--remaining <= 0) setImagesReady(true)
    }
    pending.forEach(img => {
      img.addEventListener('load', onSettle, { once: true })
      img.addEventListener('error', onSettle, { once: true })
    })
    return () => {
      pending.forEach(img => {
        img.removeEventListener('load', onSettle)
        img.removeEventListener('error', onSettle)
      })
    }
  }, [units])

  // Two frames after mount so unit/cover layout has painted before the loader lifts.
  useEffect(() => {
    let raf1 = 0
    let raf2 = 0
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setRenderSettled(true))
    })
    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [])

  // Failsafe: never hold the loader long on a stalled/blocked cover URL. Covers
  // render generated-first so they are never blank while an external image loads
  // in behind them, so a short cap costs nothing.
  useEffect(() => {
    const t = setTimeout(() => {
      setImagesReady(true)
      setRenderSettled(true)
    }, 4000)
    return () => clearTimeout(t)
  }, [])

  // Lock scroll while the loading overlay is visible. Reset to the top FIRST:
  // this effect (a child) runs before the app-level scrollTo(0,0), so locking
  // the body here would otherwise freeze scroll at the previous page's position
  // (the loader lifts mid-page). Scroll to top, then lock at the top.
  useEffect(() => {
    if (contentReady) {
      window.scrollTo(0, 0) // land at the top the instant the loader lifts
      return
    }
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [contentReady])

  // topicComponentMap is keyed by bare title, so titles shared across curricula
  // (e.g. "Functions" in both Algebra and C) collide. Only link a module to a
  // lesson that actually belongs to THIS curriculum, matched by parentSlug.
  const routeFor = rawTitle => {
    const entry = topicComponentMap[rawTitle]
    if (!entry) return null
    if (resource?.slug && entry.parentSlug && entry.parentSlug !== resource.slug) return null
    return entry.slug || null
  }

  const openModule = (mod, e) => {
    const route = routeFor(mod.rawTitle)
    if (!route) return
    if (e && (e.shiftKey || e.metaKey || e.ctrlKey || e.button === 1)) {
      const w = window.open(`${import.meta.env.BASE_URL}${route}`, '_blank')
      if (w) w.opener = null
      return
    }
    navigate(`/${route}`)
  }

  const begin = () => {
    for (const unit of units) {
      for (const mod of unit.modules) {
        if (!done.has(mod.id) && routeFor(mod.rawTitle)) {
          openModule(mod)
          return
        }
      }
    }
    const first = units[0]
    if (first?.modules[0]) openModule(first.modules[0])
  }

  const handleBack = () => navigate('/explore')

  if (!resource) {
    return (
      <div className="cc-page">
        <div className="cc-topbar">
          <button type="button" className="back-btn" onClick={handleBack}>
            <span className="back-arrow" aria-hidden="true">
              ←
            </span>
            <span>Back</span>
          </button>
        </div>
        <div className="cc-shell">
          <p style={{ marginTop: 24 }}>Resource not found</p>
        </div>
      </div>
    )
  }

  const completed = [...done].filter(id => units.some(u => u.modules.some(m => m.id === id))).length
  const sources = parseSources(resource.source)

  return (
    <>
      {!screenDone && <LoadingScreen open={contentReady} onDone={handleScreenDone} />}
      <section
        ref={pageRef}
        className={`cc-page ${pageEntered ? 'page-entered' : ''}`}
        data-screen-label={`Curriculum · ${resource.title}`}
      >
      <div className="cc-topbar">
        <button type="button" className="back-btn" onClick={handleBack}>
          <span className="back-arrow" aria-hidden="true">
            ←
          </span>
          <span>Back</span>
        </button>
        <div className="crumb">
          <button type="button" className="crumb-btn" onClick={() => navigate('/explore')}>
            Explore
          </button>
          <span className="sep">/</span>
          <button
            type="button"
            className="crumb-btn"
            onClick={() => navigate(`/explore/${resource.category}`)}
          >
            {(resource.category || '').toUpperCase()}
          </button>
          <span className="sep">/</span>
          <span className="active">{resource.title.toUpperCase()}</span>
        </div>
      </div>

      <div className="cc-shell">
        <Masthead
          category={resource.category}
          title={resource.title}
          description={resource.description || meta.description}
          prereqs={prereqs}
          onPrereq={s => navigate(`/${s}`)}
          totalModules={totalModules}
          completed={completed}
          onBegin={begin}
        />

        <div className="cc-units">
          {units.map((unit, ui) => (
            <section key={unit.id} className="cc-unit">
              <header className="cc-unit-head">
                <div className="cc-unit-n-col">
                  <span className="cc-unit-n">{String(ui + 1).padStart(2, '0')}</span>
                  <span className="cc-unit-n-tag">Unit</span>
                </div>
                <div className="cc-unit-titles">
                  <h2 className="cc-unit-title">{unit.title}</h2>
                  {unit.lede ? <p className="cc-unit-lede">{unit.lede}</p> : null}
                </div>
                <div className="cc-unit-meta">
                  <span className="cc-unit-count">
                    {unit.modules.length} module{unit.modules.length === 1 ? '' : 's'}
                  </span>
                  <span className="cc-unit-rule" />
                </div>
              </header>

              <div className="cc-mod-grid">
                {unit.modules.map((mod, mi) => (
                  <ModuleCard
                    key={mod.id}
                    module={mod}
                    idx={mi}
                    total={unit.modules.length}
                    section={unit.title}
                    isDone={done.has(mod.id)}
                    disabled={!routeFor(mod.rawTitle)}
                    onOpen={openModule}
                    onToggle={() => toggle(mod.id)}
                    slug={routeFor(mod.rawTitle) || ''}
                    isBookmarked={bookmarks.has(routeFor(mod.rawTitle) || '')}
                    onBookmark={() => {
                      const s = routeFor(mod.rawTitle)
                      if (s) toggleBookmark(s)
                    }}
                  />
                ))}
                {unit.capstone ? (
                  <CapstoneCard capstone={unit.capstone} section={unit.title} onOpen={openModule} />
                ) : null}
              </div>
            </section>
          ))}
        </div>

        {finalExam ? (
          <div className="cc-final">
            <FinalExamCard
              title={finalExam.title.replace(/^Capstone:\s*/i, '')}
              rawTitle={finalExam.title}
              mins={finalExam.mins || 150}
              unitCount={units.length}
              onOpen={openModule}
            />
          </div>
        ) : null}

        {sources.length > 0 ? (
          <aside className="cc-sources">
            <div className="cc-sources-hdr">
              <span className="cc-sources-n">∞</span>
              <span className="cc-sources-label">Sources · Canonical references</span>
            </div>
            <ul className="cc-sources-list">
              {sources.map((s, i) => (
                <li key={i} className="cc-sources-row">
                  <span className="cc-sources-idx">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cc-sources-book">
                    {s.module ? `${s.module} · ` : ''}
                    {s.text}
                  </span>
                  {s.author ? <span className="cc-sources-auth">{s.author}</span> : null}
                  {s.year ? <span className="cc-sources-year">{s.year}</span> : null}
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
      </section>
    </>
  )
}

export default CurriculumView
