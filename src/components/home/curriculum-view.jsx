import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  resourceContent,
  resourceMetadata,
  slugToIndex,
  topicComponentMap
} from '../../config/registry'
import { usePageTransition } from '../../hooks/use-page-transition'
import { useBookmarks } from '../../hooks/use-bookmarks'
import { CATEGORIES as ARITHMETIC_TOOL_CATEGORIES } from '../../features/explore/mathematics/arithmetic/arithmetic-tools'
import './curriculum-view.css'

// Supplementary UX metadata for curriculum-view consumers. Each key is a
// resource slug; the matching value is the editorial layer the registry
// doesn't carry (depth, prereq, kicker, per-module codes/minutes, per-unit
// ledes, and an optional Tool Library payload). Adding a new entry here is
// the only step required to opt a resource into the curriculum template -
// resource-detail.jsx gates rendering on the presence of an entry.
export const RESOURCE_META = {
  'library/biography': {
    kicker: 'Library · Biography',
    depth: 1,
    prereq: 'None',
    description:
      'Lives of the figures who shaped the world they were born into. Each book is a long-form biography rebuilt as a chapter-by-chapter reading flow with practice cards and a quick reference.',
    moduleMinutes: {
      'Augustus: First Emperor of Rome': 540
    },
    moduleCodes: {
      'Augustus: First Emperor of Rome': 'A.G'
    },
    moduleThumbnails: {
      'Augustus: First Emperor of Rome':
        'https://books.google.com/books/content?id=EsJQrgEACAAJ&printsec=frontcover&img=1&zoom=1'
    },
    unitLedes: {
      'Founders & Builders':
        'Lives of figures who reshaped the political and material world around them.'
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
        'https://img.youtube.com/vi/T3FC7qIAGZk/maxresdefault.jpg'
    },
    unitLedes: {
      Episodes:
        'Long-form conversations with builders, scientists, and operators on how their world actually works.'
    }
  },

  'explore/mathematics/arithmetic': {
    kicker: 'Mathematics · Foundation',
    depth: 1,
    prereq: 'None',
    description:
      'How numbers combine. The four operations of arithmetic (addition, subtraction, multiplication, division) applied to whole numbers, fractions, rationals, and decimals. Every later mathematics, from algebra to calculus to topology, assumes you can run them without thinking.',
    skipUnits: ['Tools'],
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
      'Arithmetic Tools': 30
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
      'Arithmetic Tools': 'A.T'
    },
    unitLedes: {
      'Whole Numbers':
        'Place value, algorithms, and the number line as spine for everything that follows.',
      Fractions: 'Parts, wholes, and the equivalence between every ratio you will ever meet.',
      'Rational Numbers': 'Every fraction sits on the number line. Here you prove it and order it.',
      'Number Theory': 'Divisibility, primes, and the hidden structure behind every integer.',
      Decimals: 'The same numbers in a different notation, with a formal link back to fractions.',
      Tools: 'Hands-on manipulatives you can return to whenever an idea refuses to settle.'
    },
    tools: {
      subtitle: 'Hands-on manipulatives you can return to whenever an idea refuses to settle.',
      categories: ARITHMETIC_TOOL_CATEGORIES.map(cat => ({
        title: cat.name,
        tools: cat.tools.map(t => ({ slug: t.id, title: t.name, desc: t.desc }))
      }))
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
      'Symmetries, Momentum Maps and Reduction': 60,
      // Part IV
      'Adiabatic Invariants': 50,
      'Canonical Perturbation Theory and Averaging': 65,
      'Normal Forms near Equilibria and Periodic Orbits': 60,
      'KAM Theory': 60,
      'Asymptotics, Singularities and Integrable Systems': 70
    },
    moduleCodes: {
      // Part I
      'Vectors, Kinematics and the Galilean Structure of Space-Time': 'V.K',
      "Newton's Laws and Equations of Motion": 'N.L',
      'Momentum and Systems of Particles': 'M.P',
      'Work, Energy and Conservative Force Fields': 'W.E',
      'Angular Momentum and Fixed-Axis Rotation': 'A.R',
      'Central-Force Motion and the Kepler Problem': 'C.F',
      'Non-Inertial Frames': 'N.F',
      'Small Oscillations (Elementary)': 'S.O',
      'Rigid-Body Dynamics and Gyroscopic Motion (Vectorial Treatment)': 'R.G',
      'Special Relativity (Optional Coda)': 'S.R',
      // Part II
      'The Principle of Least Action and the Euler-Lagrange Equations': 'E.L',
      "Symmetries and Conservation Laws (Noether's Theorem)": 'N.T',
      'Integration of the Equations of Motion': 'I.E',
      'Collisions and Scattering': 'C.S',
      'Small Oscillations (Systematic Theory)': 'S.T',
      'Lagrangian Mechanics on Manifolds': 'L.M',
      'Rigid-Body Dynamics (Lagrangian / Geometric Treatment)': 'R.L',
      // Part III
      "Hamilton's Equations and the Legendre Transform": 'H.E',
      'Poisson Brackets and First Integrals': 'P.B',
      'Canonical Transformations': 'C.T',
      'Differential Forms and Symplectic Manifolds': 'D.S',
      'The Hamilton-Jacobi Equation': 'H.J',
      'Action-Angle Variables and Integrable Systems': 'A.A',
      'Symmetries, Momentum Maps and Reduction': 'S.M',
      // Part IV
      'Adiabatic Invariants': 'A.I',
      'Canonical Perturbation Theory and Averaging': 'C.P',
      'Normal Forms near Equilibria and Periodic Orbits': 'N.F',
      'KAM Theory': 'KAM',
      'Asymptotics, Singularities and Integrable Systems': 'A.S'
    },
    unitLedes: {
      'Newtonian Mechanics':
        "Undergraduate first contact: vectors, Newton's laws, energy, and angular momentum made rigorous.",
      'Lagrangian Mechanics and Variational Principles':
        'The action principle as foundation. Everything else follows from a single variational statement.',
      'Hamiltonian Mechanics and Canonical Formalism':
        'The geometric heart: manifolds, symplectic structure, and the deep machinery underneath every Hamiltonian system.'
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

function pickGridCols(n, max = 3) {
  if (n <= 0) return 1
  if (n <= max) return n
  for (let c = max; c >= 2; c--) if (n % c === 0) return c
  let best = max
  let minEmpty = (max - (n % max)) % max
  for (let c = max - 1; c >= 2; c--) {
    const empty = (c - (n % c)) % c
    if (empty < minEmpty) {
      minEmpty = empty
      best = c
    }
  }
  return best
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

// Tool Library

function ToolLibrary({ topic, tools, onOpenTool }) {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const totalTools = tools.categories.reduce((n, c) => n + c.tools.length, 0)
  const filtered = q
    ? tools.categories
        .map(c => ({
          ...c,
          tools: c.tools.filter(
            t => t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)
          )
        }))
        .filter(c => c.tools.length > 0)
    : tools.categories
  return (
    <section className="cc-toolib" aria-labelledby="toolib-title">
      <div className="cc-toolib-crumb">{topic.toUpperCase()} / TOOLS</div>
      <header className="cc-toolib-head">
        <div className="cc-toolib-kicker">{topic.toUpperCase()}</div>
        <h3 id="toolib-title" className="cc-toolib-title">
          Tool Library
        </h3>
        <p className="cc-toolib-lede">
          {tools.subtitle}{' '}
          <span className="cc-toolib-count">
            {totalTools} tools across {tools.categories.length} categories.
          </span>
        </p>
      </header>
      <div className="cc-toolib-search">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1" />
          <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search tools..."
          aria-label="Search tools"
        />
      </div>
      {filtered.length === 0 ? (
        <div className="cc-toolib-empty" role="status">
          <div className="cc-toolib-empty" aria-hidden="true">
            <svg viewBox="0 0 220 60" fill="none" stroke="rgba(240,240,250,0.45)" strokeWidth="1">
              <line x1="0" y1="30" x2="220" y2="30" strokeDasharray="2 4" />
              <line x1="20" y1="26" x2="20" y2="34" />
              <line x1="60" y1="24" x2="60" y2="36" />
              <line x1="110" y1="22" x2="110" y2="38" strokeWidth="1.4" />
              <line x1="160" y1="24" x2="160" y2="36" />
              <line x1="200" y1="26" x2="200" y2="34" />
            </svg>
            <span className="cc-toolib-empty-scan" />
          </div>
          <h2 className="cc-toolib-empty-h">// no tools match your search</h2>
          <p className="cc-toolib-empty-typed">
            Searched <b>{query}</b> across <b>{totalTools} tools</b>
          </p>
          <div className="cc-toolib-empty-recent">
            <div className="cc-toolib-empty-recent-h">Browse by category</div>
            <ul>
              {tools.categories.slice(0, 4).map((cat, i) => (
                <li key={i} onClick={() => setQuery(cat.title.split(/\s+/)[0].toLowerCase())}>
                  <span>{cat.title}</span>
                  <span className="n">{cat.tools.length} tools</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="cc-toolib-empty-actions">
            <button type="button" className="cc-toolib-empty-btn" onClick={() => setQuery('')}>
              Clear search
            </button>
          </div>
        </div>
      ) : (
        filtered.map((cat, ci) => (
          <div key={ci} className="cc-toolib-cat">
            <div className="cc-toolib-cat-hdr">{cat.title.toUpperCase()}</div>
            {(() => {
              const cols = pickGridCols(cat.tools.length)
              const trailingEmpties = (cols - (cat.tools.length % cols)) % cols
              return (
                <div
                  className="cc-toolib-grid"
                  style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
                >
                  {cat.tools.map((t, ti) => (
                    <button
                      key={ti}
                      type="button"
                      className="cc-toolib-card"
                      onClick={() => onOpenTool && onOpenTool(t)}
                      aria-label={t.title}
                    >
                      <div className="cc-toolib-card-title">{t.title.toUpperCase()}</div>
                      <div className="cc-toolib-card-desc">{t.desc}</div>
                    </button>
                  ))}
                  {Array.from({ length: trailingEmpties }).map((_, i) => (
                    <div key={`empty-${i}`} className="cc-toolib-card-empty" aria-hidden="true" />
                  ))}
                </div>
              )
            })()}
          </div>
        ))
      )}
    </section>
  )
}

// Mini cover art

function MiniCover({ code, idx, total, thumbnail, title, aspect }) {
  const variant = idx % 4
  if (thumbnail) {
    const aspectClass = aspect === 'video' ? ' cc-cover-video' : ''
    return (
      <div className={`cc-cover cc-cover-thumb${aspectClass}`}>
        <img src={thumbnail} alt={title || ''} loading="lazy" />
      </div>
    )
  }
  return (
    <div className={`cc-cover cc-v-${variant}`} aria-hidden="true">
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
    </div>
  )
}

// Track map

// Masthead

function Masthead({ title, description, totalModules, completed, onBegin }) {
  const pct = totalModules > 0 ? Math.round((completed / totalModules) * 100) : 0
  return (
    <header className="cc-masthead">
      <h1 className="cc-mh-title">{title}</h1>
      <div className="cc-mh-titlerule" />

      {description ? (
        <div className="cc-mh-lede">
          <span className="cc-mh-lede-rule" />
          <p className="cc-mh-lede-p">{description}</p>
        </div>
      ) : null}

      <div className="cc-mh-action">
        <div className="cc-mh-progress">
          <div className="cc-mh-progress-label">
            <span className="pct">{pct}%</span>
            <span className="sub">
              {completed} / {totalModules} complete
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
  section,
  onOpen,
  isDone,
  disabled,
  onToggle,
  isBookmarked,
  onBookmark
}) {
  const handleClick = () => {
    if (disabled) return
    onOpen(module)
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
      aria-label={module.title}
      aria-disabled={disabled}
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
      {isBookmarked && (
        <span
          className="cc-mod-bookmark"
          role="button"
          aria-label="Remove bookmark"
          tabIndex={-1}
          onClick={handleBookmark}
        >
          ★
        </span>
      )}
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
  return (
    <button
      type="button"
      className="cc-capstone"
      onClick={() => onOpen({ rawTitle: capstone.rawTitle, capstone: true })}
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

// Main view

function CurriculumView() {
  const location = useLocation()
  const navigate = useNavigate()
  const pageEntered = usePageTransition()
  const { bookmarks, toggleBookmark } = useBookmarks()

  const slug = location.pathname.replace(/^\//, '').replace(/\/$/, '')
  const resourceIndex = slugToIndex[slug]
  const resource = resourceMetadata[resourceIndex]
  const meta = RESOURCE_META[slug] || {}
  const skipUnits = meta.skipUnits || []

  useEffect(() => {
    if (resource) document.title = `${resource.title}/Aether`
  }, [resource])

  const units = useMemo(
    () => buildCurriculum(slug, meta).filter(u => !skipUnits.includes(u.title)),
    [slug, meta, skipUnits]
  )
  const totalModules = useMemo(() => units.reduce((n, u) => n + u.modules.length, 0), [units])
  const totalMinutes = useMemo(
    () =>
      units.reduce(
        (n, u) =>
          n +
          u.modules.reduce((m, md) => m + (md.mins || 40), 0) +
          (u.capstone ? u.capstone.mins || 90 : 0),
        0
      ),
    [units]
  )

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

  const routeFor = rawTitle => topicComponentMap[rawTitle]?.slug || null

  const openModule = mod => {
    const route = routeFor(mod.rawTitle)
    if (!route) return
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

  const handleBack = () => navigate(-1)

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
    <section
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
          title={resource.title}
          description={resource.description || meta.description}
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

              {(() => {
                const childCount = unit.modules.length + (unit.capstone ? 1 : 0)
                const cols = pickGridCols(childCount)
                const trailingEmpties = (cols - (childCount % cols)) % cols
                return (
                  <div
                    className="cc-mod-grid"
                    style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
                  >
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
                        isBookmarked={bookmarks.has(routeFor(mod.rawTitle) || '')}
                        onBookmark={() => {
                          const s = routeFor(mod.rawTitle)
                          if (s) toggleBookmark(s)
                        }}
                      />
                    ))}
                    {unit.capstone ? (
                      <CapstoneCard
                        capstone={unit.capstone}
                        section={unit.title}
                        onOpen={openModule}
                      />
                    ) : null}
                    {Array.from({ length: trailingEmpties }).map((_, i) => (
                      <div key={`empty-${i}`} className="cc-mod-empty" aria-hidden="true" />
                    ))}
                  </div>
                )
              })()}
            </section>
          ))}
        </div>

        {meta.tools ? (
          <ToolLibrary
            topic={resource.title}
            tools={meta.tools}
            onOpenTool={tool => navigate(`/${slug}/tool/${tool.slug}`)}
          />
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
  )
}

export default CurriculumView
