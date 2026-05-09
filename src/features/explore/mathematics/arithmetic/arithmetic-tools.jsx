import { useState, useMemo, useEffect, lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import './arithmetic-tools.css'

// Lazy-loaded tool components
export const TOOL_COMPONENTS = {
  'ten-frame': lazy(() => import('./tools/ten-frame')),
  rekenrek: lazy(() => import('./tools/rekenrek')),
  'number-bonds': lazy(() => import('./tools/number-bonds')),
  'number-pair-decomposer': lazy(() => import('./tools/number-pair-decomposer')),
  'make-a-ten': lazy(() => import('./tools/make-a-ten')),
  'base-ten-blocks': lazy(() => import('./tools/base-ten-blocks')),
  'place-value-disks': lazy(() => import('./tools/place-value-disks')),
  'hundreds-chart': lazy(() => import('./tools/hundreds-chart')),
  'exploding-dots': lazy(() => import('./tools/exploding-dots')),
  'number-line': lazy(() => import('./tools/number-line')),
  'two-color-counters': lazy(() => import('./tools/two-color-counters')),
  'balance-scale': lazy(() => import('./tools/balance-scale')),
  'array-builder': lazy(() => import('./tools/array-builder')),
  'area-model': lazy(() => import('./tools/area-model')),
  'factor-tree': lazy(() => import('./tools/factor-tree')),
  'sieve-of-eratosthenes': lazy(() => import('./tools/sieve-of-eratosthenes')),
  'multiplication-games': lazy(() => import('./tools/multiplication-games')),
  'fraction-strips': lazy(() => import('./tools/fraction-strips')),
  'fraction-circles': lazy(() => import('./tools/fraction-circles')),
  'cuisenaire-rods': lazy(() => import('./tools/cuisenaire-rods')),
  'bar-model': lazy(() => import('./tools/bar-model')),
  'function-machine': lazy(() => import('./tools/function-machine')),
  money: lazy(() => import('./tools/money')),
  clock: lazy(() => import('./tools/clock')),
  'target-number': lazy(() => import('./tools/target-number')),
  'venn-diagram': lazy(() => import('./tools/venn-diagram')),
  'visual-puzzles': lazy(() => import('./tools/visual-puzzles')),
  'animated-concepts': lazy(() => import('./tools/animated-concepts'))
}

// Tool Data

export const CATEGORIES = [
  {
    name: 'Counting & Number Sense',
    tools: [
      {
        id: 'ten-frame',
        name: 'Ten Frame',
        desc: 'Drag counters into a 2x5 grid. Fixed cell positions make quantities instantly visible. 8 filled cells shows 5+3 and 2 empty at a glance.'
      },
      {
        id: 'rekenrek',
        name: 'Rekenrek',
        desc: 'Slide red/white beads along rods. The color break at 5 lets you subitize without counting. Supports number bonds, doubles, and grouping strategies.'
      },
      {
        id: 'number-bonds',
        name: 'Number Bonds Diagram',
        desc: 'A whole circle connected to two part circles. Enter any total and explore every decomposition. Builds part-whole thinking that underpins all arithmetic fluency.'
      },
      {
        id: 'number-pair-decomposer',
        name: 'Number Pair Decomposer',
        desc: 'Drag a partition point across a bar to split a number into two parts. Sliding continuously reveals every addend pair and builds toward subtraction as finding the missing part.'
      },
      {
        id: 'make-a-ten',
        name: 'Make-a-Ten Strategy Builder',
        desc: 'Add two numbers by first completing a ten. Given 8+5, break the 5 into 2+3, combine the 2 with 8 to make 10, then add 3. Animated counters show each step.'
      }
    ]
  },
  {
    name: 'Place Value',
    tools: [
      {
        id: 'base-ten-blocks',
        name: 'Base Ten Blocks',
        desc: 'Drag unit cubes, rods (10), flats (100), and large cubes (1000) onto a workspace. Group 10 units into a rod or break a rod apart to make carrying and borrowing visible.'
      },
      {
        id: 'place-value-disks',
        name: 'Place Value Disks',
        desc: 'Same-sized tokens labeled 1, 10, 100, 1000 on a columnar chart. Trade ten 1-disks for one 10-disk. Bridges concrete blocks and pure digit notation; scales to millions and decimals.'
      },
      {
        id: 'hundreds-chart',
        name: 'Hundreds Chart',
        desc: 'A 10x10 grid of 1-100. Click cells to color-code by multiples, odd/even, or primes. Moving right adds 1, moving down adds 10. Place value made spatial.'
      },
      {
        id: 'exploding-dots',
        name: 'Exploding Dots',
        desc: 'Click to add dots to a column. When a column hits 10, dots explode into the next column, discovering place value from first principles. Generalizes to any base.'
      }
    ]
  },
  {
    name: 'Operations',
    tools: [
      {
        id: 'number-line',
        name: 'Number Line',
        desc: 'Mark points and draw jumps of any size forward or backward. Supports whole numbers, fractions, decimals, and negatives. The most versatile single arithmetic model.'
      },
      {
        id: 'two-color-counters',
        name: 'Two-Color Counters',
        desc: 'Red/yellow chips you flip, group, and arrange. Red = negative, yellow = positive. Pair opposites to form zero pairs, making integer arithmetic physically tangible.'
      },
      {
        id: 'balance-scale',
        name: 'Balance Scale',
        desc: 'Place values on each pan. The beam tips toward the heavier side and levels when equal. Builds relational understanding of the equals sign and grounds algebraic thinking in arithmetic.'
      }
    ]
  },
  {
    name: 'Multiplication & Division',
    tools: [
      {
        id: 'array-builder',
        name: 'Array Builder',
        desc: 'Choose rows and columns; the tool fills a rectangular grid with objects. Rotating the array (3×4 becomes 4×3) proves commutativity. Division: how many rows of 4 fit in 12?'
      },
      {
        id: 'area-model',
        name: 'Area Model',
        desc: 'Set two factors as rectangle dimensions. The grid fills with partial products (23×14 splits into 20×10, 20×4, 3×10, 3×4). Links multiplication to area and proves the distributive property.'
      },
      {
        id: 'factor-tree',
        name: 'Factor Tree',
        desc: 'Enter a composite number and split it into factor pairs. Each composite splits again until only primes remain at the leaves. Different starting splits always reach the same prime factorization.'
      },
      {
        id: 'sieve-of-eratosthenes',
        name: 'Sieve of Eratosthenes',
        desc: 'Select 2 and all its multiples highlight. Then 3, 5, 7. Numbers that survive all sieving are prime. Multi-color overlapping patterns reveal relationships between multiples.'
      },
      {
        id: 'multiplication-games',
        name: 'Multiplication Strategy Games',
        desc: 'Competitive grid game: choose factors from a shared list and claim the product cell. Or pick a number and your opponent claims all its proper factors. Factor fluency through strategy.'
      }
    ]
  },
  {
    name: 'Fractions & Rods',
    tools: [
      {
        id: 'fraction-strips',
        name: 'Fraction Strips',
        desc: 'Horizontal bars from 1 whole down to $\\frac{1}{12}$, stacked like a wall. Align strips to see that $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6}$. Drag to compare lengths and find common denominators visually.'
      },
      {
        id: 'fraction-circles',
        name: 'Fraction Circles',
        desc: 'Pie wedges representing halves, thirds, quarters and more. Rotate and overlay to compare sizes, combine to form mixed numbers, and see how many thirds fit in a whole.'
      },
      {
        id: 'cuisenaire-rods',
        name: 'Cuisenaire Rods',
        desc: 'Ten color-coded bars from length 1 to 10, with no numbers printed. Relationships emerge from comparison: 3+2 trains match the yellow rod (5). If green = 1 whole, red = $\\frac{1}{3}$.'
      }
    ]
  },
  {
    name: 'Modeling & Machines',
    tools: [
      {
        id: 'bar-model',
        name: 'Bar Model',
        desc: 'Draw and partition horizontal bars for word problems. For "12 apples, 5 are red", draw a bar of 12, shade 5, the rest is the answer. The central tool of Singapore math pedagogy.'
      },
      {
        id: 'function-machine',
        name: 'Function Machine',
        desc: 'Feed a number in, an operation runs, a result comes out. Chain machines for multi-step operations. In guess-the-rule mode, deduce the hidden operation from inputs and outputs.'
      }
    ]
  },
  {
    name: 'Measurement & Money',
    tools: [
      {
        id: 'money',
        name: 'Money Manipulative',
        desc: 'Drag realistic coins and bills onto a workspace. Build amounts, make change, and trade equivalences (10 pennies = 1 dime). Running total updates live. Connects decimals to real-world context.'
      },
      {
        id: 'clock',
        name: 'Clock',
        desc: 'Interactive analog clock with draggable hands. Moving the minute hand tracks the hour hand proportionally. Set start and end times to compute elapsed time. Connects fractions to time.'
      }
    ]
  },
  {
    name: 'Games & Classification',
    tools: [
      {
        id: 'target-number',
        name: 'Target Number Games',
        desc: 'Given a set of numbers, combine them with any operations to reach a target. Inverts typical arithmetic: construct expressions that produce a desired result. Builds flexible operational thinking.'
      },
      {
        id: 'venn-diagram',
        name: 'Venn Diagram Sorter',
        desc: 'Two or three overlapping circles labeled with properties (even, > 20, multiple of 3). Drag numbers into the correct region. Forces simultaneous classification and reveals unexpected overlaps.'
      }
    ]
  },
  {
    name: 'Visual Learning',
    tools: [
      {
        id: 'visual-puzzles',
        name: 'Language-Free Visual Puzzles',
        desc: 'Spatial puzzles with no text or symbols. Manipulate objects to achieve a goal: filling containers models division, balancing seesaws models equality. Removes language barriers entirely.'
      },
      {
        id: 'animated-concepts',
        name: 'Animated Concept Reveals',
        desc: 'Short animations for teacher projection: dots rearrange to show 7+8 = 7+7+1, rectangles decompose into partial products. Students watch, then discuss. Not student-operated, a discussion catalyst.'
      }
    ]
  }
]

const ALL_TOOLS = CATEGORIES.flatMap(c => c.tools.map(t => ({ ...t, category: c.name })))
const TOTAL_COUNT = ALL_TOOLS.length

// Component

function ArithmeticToolsContent() {
  const nav = useNavigate()
  const [query, setQuery] = useState('')
  const [selectedTool, setSelectedTool] = useState(null)

  useEffect(() => {
    document.title = 'Arithmetic Tools - AETHER'
  }, [])

  // Tool view
  if (selectedTool) {
    const toolMeta = ALL_TOOLS.find(t => t.id === selectedTool)
    const ToolComponent = TOOL_COMPONENTS[selectedTool]
    if (ToolComponent) {
      return (
        <Suspense fallback={<div className="at-root" />}>
          <ToolComponent
            toolName={toolMeta?.name || selectedTool}
            onBack={() => setSelectedTool(null)}
          />
        </Suspense>
      )
    }
  }

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return CATEGORIES
    return CATEGORIES.map(cat => ({
      ...cat,
      tools: cat.tools.filter(
        t =>
          t.name.toLowerCase().includes(q) ||
          t.desc.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
      )
    })).filter(cat => cat.tools.length > 0)
  }, [query])

  const filteredCount = filtered.reduce((sum, c) => sum + c.tools.length, 0)

  return (
    <div className="at-root">
      <div className="at-nav">
        <button
          className="at-back-btn"
          onClick={() => nav(-1)}
          aria-label="Go back"
          title="Go back"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5m7 7-7-7 7-7" />
          </svg>
        </button>
        <span className="at-nav-crumb">Arithmetic / Tools</span>
      </div>

      <div className="at-header">
        <div className="at-header-kicker">Arithmetic</div>
        <h1 className="at-header-title">Tool Library</h1>
        <p className="at-header-sub">
          Interactive manipulatives, calculators, and visualizations for arithmetic. {TOTAL_COUNT}{' '}
          tools across {CATEGORIES.length} categories.
        </p>
      </div>

      <div className="at-search-wrap">
        <div className="at-search-inner">
          <svg
            className="at-search-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search tools..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="at-search-input"
            aria-label="Search tools"
          />
        </div>
        {query && (
          <div className="at-search-count">
            {filteredCount} of {TOTAL_COUNT} tools
          </div>
        )}
      </div>

      <div className="at-content">
        {filtered.length === 0 ? (
          <div className="at-empty">No tools match your search.</div>
        ) : (
          filtered.map(cat => (
            <div key={cat.name} className="at-section">
              <h2 className="at-section-name">{cat.name}</h2>
              <div className="at-grid">
                {cat.tools.map(tool => (
                  <button
                    key={tool.id}
                    className="at-card"
                    onClick={() => setSelectedTool(tool.id)}
                    aria-label={`Open ${tool.name}`}
                  >
                    <div className="at-card-name">{tool.name}</div>
                    <p className="at-card-desc">{tool.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ArithmeticToolsContent
