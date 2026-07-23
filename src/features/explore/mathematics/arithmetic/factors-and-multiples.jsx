import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import { VizFigure } from '../../../../components/viz-figure'
import { FONT_LABEL, FONT_TEX } from '../../../../components/viz/scale-tokens'

// Mathematics domain: Approved engine: hand-rolled monochrome SVG primitives.
// All six viz read theme-reactive colors from useVizColors() and are wrapped in
// VizFigure at their render site (id prefix 05.1.x).
const VIZ_WRAP = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '12px 16px',
  boxSizing: 'border-box',
  fontFamily: 'var(--reader-font-family)'
}
const VIZ_SVG = {
  width: '100%',
  flex: 1,
  minHeight: 0,
  display: 'block',
  fontFamily: 'var(--reader-font-family)'
}

// 05.1.1 · One array, two readings: factors and a multiple
function Fam_FactorMultipleArray() {
  const C = useVizColors()
  const W = 960
  const H = 540
  const cols = 8
  const rows = 5
  const gap = 64
  const gridLeft = 300
  const gridTop = 150
  const r = 13
  const gridRight = gridLeft + (cols - 1) * gap
  const gridBottom = gridTop + (rows - 1) * gap
  const midX = (gridLeft + gridRight) / 2
  const midY = (gridTop + gridBottom) / 2
  const pad = r + 10
  return (
    <div style={{ ...VIZ_WRAP, color: C.fg }}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={VIZ_SVG}>
        {/* tertiary: array footprint reads as area = the multiple */}
        <rect
          x={gridLeft - pad}
          y={gridTop - pad}
          width={gridRight - gridLeft + 2 * pad}
          height={gridBottom - gridTop + 2 * pad}
          fill={C.fg}
          fillOpacity={0.04}
        />
        {/* accent bands tie each bracket to its line of dots */}
        <rect
          x={gridLeft - pad}
          y={gridTop - pad}
          width={gridRight - gridLeft + 2 * pad}
          height={2 * pad}
          fill={C.accent}
          fillOpacity={0.16}
        />
        <rect
          x={gridLeft - pad}
          y={gridTop - pad}
          width={2 * pad}
          height={gridBottom - gridTop + 2 * pad}
          fill={C.accent}
          fillOpacity={0.16}
        />
        {/* top bracket: 8 columns is a factor (secondary) */}
        <line
          x1={gridLeft - r}
          y1={gridTop - 52}
          x2={gridRight + r}
          y2={gridTop - 52}
          stroke={C.dim}
          strokeWidth={1.5}
        />
        <line
          x1={gridLeft - r}
          y1={gridTop - 52}
          x2={gridLeft - r}
          y2={gridTop - 40}
          stroke={C.dim}
          strokeWidth={1.5}
        />
        <line
          x1={gridRight + r}
          y1={gridTop - 52}
          x2={gridRight + r}
          y2={gridTop - 40}
          stroke={C.dim}
          strokeWidth={1.5}
        />
        <text
          x={midX}
          y={gridTop - 66}
          textAnchor="middle"
          fill={C.dim}
          fontSize="22"
          letterSpacing="2"
        >
          8 COLUMNS · A FACTOR
        </text>
        {/* left bracket: 5 rows is a factor (secondary) */}
        <line
          x1={gridLeft - 62}
          y1={gridTop - r}
          x2={gridLeft - 62}
          y2={gridBottom + r}
          stroke={C.dim}
          strokeWidth={1.5}
        />
        <line
          x1={gridLeft - 62}
          y1={gridTop - r}
          x2={gridLeft - 50}
          y2={gridTop - r}
          stroke={C.dim}
          strokeWidth={1.5}
        />
        <line
          x1={gridLeft - 62}
          y1={gridBottom + r}
          x2={gridLeft - 50}
          y2={gridBottom + r}
          stroke={C.dim}
          strokeWidth={1.5}
        />
        <text
          x={gridLeft - 80}
          y={midY}
          textAnchor="middle"
          fill={C.dim}
          fontSize="22"
          letterSpacing="2"
          transform={`rotate(-90 ${gridLeft - 80} ${midY})`}
        >
          5 ROWS · A FACTOR
        </text>
        {/* the 40 dots (primary) */}
        {Array.from({ length: rows }).map((_, ri) =>
          Array.from({ length: cols }).map((_, ci) => (
            <circle
              key={`${ri}-${ci}`}
              cx={gridLeft + ci * gap}
              cy={gridTop + ri * gap}
              r={r}
              fill={C.fg}
            />
          ))
        )}
        <text
          x={W / 2}
          y={H - 26}
          textAnchor="middle"
          fill={C.fg}
          fontSize="22"
          letterSpacing="1.5"
        >
          5 × 8 = 40 DOTS · 40 IS A MULTIPLE OF 5 AND 8
        </text>
      </svg>
    </div>
  )
}

// 05.1.2 · Listing factors of 40 by converging pairs
function Fam_FactorPairLadder() {
  const C = useVizColors()
  const W = 960
  const H = 540
  const pairs = [
    [1, 40],
    [2, 20],
    [4, 10],
    [5, 8]
  ]
  const leftX = 300
  const rightX = 660
  const row0 = 156
  const rowH = 94
  const rr = 34
  const rowLast = row0 + (pairs.length - 1) * rowH
  return (
    <div style={{ ...VIZ_WRAP, color: C.fg }}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={VIZ_SVG}>
        <text x={leftX} y={88} textAnchor="middle" fill={C.dim} fontSize="22" letterSpacing="2">
          SMALL FACTOR
        </text>
        <text x={rightX} y={88} textAnchor="middle" fill={C.dim} fontSize="22" letterSpacing="2">
          ITS PARTNER
        </text>
        {/* secondary: column guides show the two ends marching toward each other */}
        <line
          x1={leftX - rr - 16}
          y1={row0 + rr + 6}
          x2={leftX - rr - 16}
          y2={rowLast - rr - 6}
          stroke={C.dim}
          strokeWidth={1}
          strokeOpacity={0.5}
          markerEnd="url(#fam-pair-arrow)"
        />
        <line
          x1={rightX + rr + 16}
          y1={row0 + rr + 6}
          x2={rightX + rr + 16}
          y2={rowLast - rr - 6}
          stroke={C.dim}
          strokeWidth={1}
          strokeOpacity={0.5}
          markerEnd="url(#fam-pair-arrow)"
        />
        <defs>
          <marker
            id="fam-pair-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth={7}
            markerHeight={7}
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={C.dim} fillOpacity={0.6} />
          </marker>
        </defs>
        {pairs.map(([a, b], i) => {
          const y = row0 + i * rowH
          const meet = i === pairs.length - 1
          return (
            <g key={i}>
              <line
                x1={leftX + rr}
                y1={y}
                x2={rightX - rr}
                y2={y}
                stroke={C.dim}
                strokeWidth={1.5}
                strokeDasharray="4 6"
              />
              <text
                x={(leftX + rightX) / 2}
                y={y - 16}
                textAnchor="middle"
                fill={meet ? C.fg : C.dim}
                fontSize="20"
                fontWeight={meet ? '700' : '400'}
              >
                {`${a} × ${b} = 40`}
              </text>
              <circle
                cx={leftX}
                cy={y}
                r={rr}
                fill={meet ? C.accent : 'none'}
                stroke={C.fg}
                strokeWidth={2}
              />
              <text
                x={leftX}
                y={y + 9}
                textAnchor="middle"
                fill={C.fg}
                fontSize="26"
                fontWeight="700"
              >
                {a}
              </text>
              <circle
                cx={rightX}
                cy={y}
                r={rr}
                fill={meet ? C.accent : 'none'}
                stroke={C.fg}
                strokeWidth={2}
              />
              <text
                x={rightX}
                y={y + 9}
                textAnchor="middle"
                fill={C.fg}
                fontSize="26"
                fontWeight="700"
              >
                {b}
              </text>
            </g>
          )
        })}
        <text
          x={W / 2}
          y={H - 24}
          textAnchor="middle"
          fill={C.fg}
          fontSize="22"
          letterSpacing="1.5"
        >
          5 AND 8 ARE NEXT-DOOR · THE COLUMNS HAVE MET · STOP HERE
        </text>
      </svg>
    </div>
  )
}

// 05.1.3 · Multiples of 6 on a hundred chart
function Fam_MultiplesGrid() {
  const C = useVizColors()
  const cell = 52
  const pad = 14
  const gridN = 10
  const W = pad * 2 + cell * gridN
  const gridBottom = pad + cell * gridN
  const H = 700
  // ladder strip below the chart: equal spacing makes the constant +6 step visible
  const ladderY = gridBottom + 70
  const lx0 = 90
  const lx1 = W - 90
  const rungs = [6, 12, 18, 24, 30, 36]
  const lxOf = i => lx0 + (i * (lx1 - lx0)) / (rungs.length - 1)
  return (
    <div style={{ ...VIZ_WRAP, color: C.fg }}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={VIZ_SVG}>
        {Array.from({ length: 100 }).map((_, i) => {
          const n = i + 1
          const x = pad + (i % 10) * cell
          const y = pad + Math.floor(i / 10) * cell
          const on = n % 6 === 0
          return (
            <g key={n}>
              <rect
                x={x}
                y={y}
                width={cell}
                height={cell}
                fill={on ? C.accent : 'none'}
                fillOpacity={on ? 0.85 : 0}
                stroke={on ? C.fg : C.faint}
                strokeWidth={on ? 1.5 : 1}
              />
              <text
                x={x + cell / 2}
                y={y + cell / 2 + 6}
                textAnchor="middle"
                fill={on ? C.fg : C.dim}
                fontSize="18"
                fontWeight={on ? '700' : '400'}
              >
                {n}
              </text>
            </g>
          )
        })}
        {/* ladder strip: the same multiples laid out at equal steps of 6 */}
        <line x1={lx0} y1={ladderY} x2={lx1} y2={ladderY} stroke={C.dim} strokeWidth={2} />
        {rungs.map((n, i) => (
          <g key={`r${n}`}>
            {i > 0 && (
              <text
                x={(lxOf(i - 1) + lxOf(i)) / 2}
                y={ladderY - 16}
                textAnchor="middle"
                fill={C.dim}
                fontSize="16"
                letterSpacing="1"
              >
                +6
              </text>
            )}
            <circle cx={lxOf(i)} cy={ladderY} r={9} fill={C.accent} stroke={C.fg} strokeWidth={2} />
            <text
              x={lxOf(i)}
              y={ladderY + 34}
              textAnchor="middle"
              fill={C.fg}
              fontSize="18"
              fontWeight="700"
            >
              {n}
            </text>
          </g>
        ))}
        <text
          x={W / 2}
          y={H - 16}
          textAnchor="middle"
          fill={C.fg}
          fontSize="20"
          letterSpacing="1.5"
        >
          MULTIPLES OF 6 · EVERY RUNG IS SIX STEPS · THE LADDER NEVER ENDS
        </text>
      </svg>
    </div>
  )
}

// 05.1.4 · Common factors of 20 and 50
function Fam_CommonFactorsOverlap() {
  const C = useVizColors()
  const W = 840
  const H = 600
  const cy = 320
  const rx = 250
  const ry = 180
  const cxL = 300
  const cxR = 540
  const midX = (cxL + cxR) / 2
  // chip tiers: hi = greatest common factor (primary), dim = exclusive (secondary)
  const chip = (n, x, y, opts, key) => {
    const { hi = false, dim = false } = opts
    return (
      <g key={key}>
        <circle
          cx={x}
          cy={y}
          r={hi ? 30 : 26}
          fill={hi ? C.accent : 'none'}
          fillOpacity={hi ? 0.85 : 0}
          stroke={dim ? C.dim : C.fg}
          strokeWidth={hi ? 2.5 : 2}
        />
        <text
          x={x}
          y={y + 8}
          textAnchor="middle"
          fill={dim ? C.dim : C.fg}
          fontSize="24"
          fontWeight={hi ? '700' : '500'}
        >
          {n}
        </text>
      </g>
    )
  }
  return (
    <div style={{ ...VIZ_WRAP, color: C.fg }}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={VIZ_SVG}>
        {/* tertiary: shade the lens so the shared region reads as "common" */}
        <defs>
          <clipPath id="fam-cf-lens">
            <ellipse cx={cxL} cy={cy} rx={rx} ry={ry} />
          </clipPath>
        </defs>
        <ellipse
          cx={cxR}
          cy={cy}
          rx={rx}
          ry={ry}
          fill={C.accent}
          fillOpacity={0.1}
          clipPath="url(#fam-cf-lens)"
        />
        <ellipse cx={cxL} cy={cy} rx={rx} ry={ry} fill="none" stroke={C.dim} strokeWidth={1.5} />
        <ellipse cx={cxR} cy={cy} rx={rx} ry={ry} fill="none" stroke={C.dim} strokeWidth={1.5} />
        <text x={cxL - 120} y={92} textAnchor="middle" fill={C.dim} fontSize="22" letterSpacing="2">
          FACTORS OF 20
        </text>
        <text x={cxR + 120} y={92} textAnchor="middle" fill={C.dim} fontSize="22" letterSpacing="2">
          FACTORS OF 50
        </text>
        <text
          x={midX}
          y={cy - ry + 8}
          textAnchor="middle"
          fill={C.fg}
          fontSize="20"
          letterSpacing="2"
        >
          SHARED
        </text>
        {chip(4, cxL - 132, cy - 44, { dim: true }, 'l0')}
        {chip(20, cxL - 132, cy + 44, { dim: true }, 'l1')}
        {chip(25, cxR + 132, cy - 44, { dim: true }, 'r0')}
        {chip(50, cxR + 132, cy + 44, { dim: true }, 'r1')}
        {chip(1, midX - 38, cy - 44, {}, 's0')}
        {chip(2, midX + 38, cy - 44, {}, 's1')}
        {chip(5, midX - 38, cy + 44, {}, 's2')}
        {chip(10, midX + 38, cy + 44, { hi: true }, 's3')}
        <text
          x={W / 2}
          y={H - 22}
          textAnchor="middle"
          fill={C.fg}
          fontSize="22"
          letterSpacing="1.5"
        >
          SHARED FACTORS 1, 2, 5, 10 · LARGEST IS 10
        </text>
      </svg>
    </div>
  )
}

// 05.1.5 · Where two multiple ladders meet
function Fam_CommonMultiplesStrips() {
  const C = useVizColors()
  const W = 1200
  const H = 420
  const max = 48
  const x0 = 90
  const x1 = 1110
  const sx = n => x0 + (n / max) * (x1 - x0)
  const yTop = 150
  const yBot = 300
  const m6 = [6, 12, 18, 24, 30, 36, 42, 48]
  const m8 = [8, 16, 24, 32, 40, 48]
  const LCM = 24 // smallest common multiple: primary
  const shared = new Set([24, 48])
  const node = (n, y, below, key) => {
    const on = shared.has(n)
    const lcm = n === LCM
    return (
      <g key={key}>
        <circle
          cx={sx(n)}
          cy={y}
          r={lcm ? 20 : on ? 14 : 10}
          fill={on ? C.accent : 'none'}
          fillOpacity={lcm ? 0.9 : on ? 0.55 : 0}
          stroke={C.fg}
          strokeWidth={lcm ? 2.5 : 2}
        />
        <text
          x={sx(n)}
          y={below ? y + 38 : y - 28}
          textAnchor="middle"
          fill={on ? C.fg : C.dim}
          fontSize="20"
          fontWeight={on ? '700' : '400'}
        >
          {n}
        </text>
      </g>
    )
  }
  return (
    <div style={{ ...VIZ_WRAP, color: C.fg }}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={VIZ_SVG}>
        {/* 48: secondary meeting */}
        <line
          x1={sx(48)}
          y1={yTop}
          x2={sx(48)}
          y2={yBot}
          stroke={C.dim}
          strokeWidth={1.5}
          strokeDasharray="5 5"
        />
        {/* 24: primary meeting (the LCM) */}
        <line x1={sx(LCM)} y1={yTop} x2={sx(LCM)} y2={yBot} stroke={C.accent} strokeWidth={2.5} />
        <text
          x={sx(LCM) + 14}
          y={(yTop + yBot) / 2 + 5}
          textAnchor="start"
          fill={C.fg}
          fontSize="17"
          letterSpacing="1.5"
        >
          FIRST MEETING
        </text>
        <text x={x0} y={yTop - 58} fill={C.dim} fontSize="22" letterSpacing="2">
          MULTIPLES OF 6
        </text>
        <line x1={x0} y1={yTop} x2={x1} y2={yTop} stroke={C.dim} strokeWidth={2} />
        {m6.map(n => node(n, yTop, false, `t${n}`))}
        <text x={x0} y={yBot + 70} fill={C.dim} fontSize="22" letterSpacing="2">
          MULTIPLES OF 8
        </text>
        <line x1={x0} y1={yBot} x2={x1} y2={yBot} stroke={C.dim} strokeWidth={2} />
        {m8.map(n => node(n, yBot, true, `b${n}`))}
        <text
          x={W / 2}
          y={H - 16}
          textAnchor="middle"
          fill={C.fg}
          fontSize="20"
          letterSpacing="1.5"
        >
          BOTH LADDERS MEET AT 24 AND 48 · 24 IS THE SMALLEST COMMON MULTIPLE
        </text>
      </svg>
    </div>
  )
}

// 05.1.6 · Why factor counts are even (except perfect squares)
function Fam_DivisorCountParity() {
  const C = useVizColors()
  const W = 900
  const H = 680
  const cols = [170, 360, 550, 740]
  const pairUnit = (a, b, cx, cy, key) => (
    <g key={key}>
      <line x1={cx - 12} y1={cy} x2={cx + 12} y2={cy} stroke={C.dim} strokeWidth={1.5} />
      <circle cx={cx - 34} cy={cy} r={22} fill="none" stroke={C.fg} strokeWidth={2} />
      <text x={cx - 34} y={cy + 7} textAnchor="middle" fill={C.fg} fontSize="20">
        {a}
      </text>
      <circle cx={cx + 34} cy={cy} r={22} fill="none" stroke={C.fg} strokeWidth={2} />
      <text x={cx + 34} y={cy + 7} textAnchor="middle" fill={C.fg} fontSize="20">
        {b}
      </text>
    </g>
  )
  return (
    <div style={{ ...VIZ_WRAP, color: C.fg }}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" style={VIZ_SVG}>
        <text x={W / 2} y={110} textAnchor="middle" fill={C.dim} fontSize="22" letterSpacing="2">
          40 · FOUR PAIRS · EVEN COUNT (8 FACTORS)
        </text>
        {pairUnit(1, 40, cols[0], 230, 'a0')}
        {pairUnit(2, 20, cols[1], 230, 'a1')}
        {pairUnit(4, 10, cols[2], 230, 'a2')}
        {pairUnit(5, 8, cols[3], 230, 'a3')}

        <text x={W / 2} y={400} textAnchor="middle" fill={C.dim} fontSize="22" letterSpacing="2">
          64 · THREE PAIRS + LONE MIDDLE · ODD COUNT (7 FACTORS)
        </text>
        {pairUnit(1, 64, cols[0], 510, 'b0')}
        {pairUnit(2, 32, cols[1], 510, 'b1')}
        {pairUnit(4, 16, cols[2], 510, 'b2')}
        <g>
          <defs>
            <marker
              id="fam-self-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth={7}
              markerHeight={7}
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={C.accent} />
            </marker>
          </defs>
          {/* self-loop: the lone factor links back to itself */}
          <path
            d={`M ${cols[3] - 10} ${510 - 22} C ${cols[3] - 34} ${510 - 70} ${cols[3] + 34} ${510 - 70} ${cols[3] + 9} ${510 - 23}`}
            fill="none"
            stroke={C.accent}
            strokeWidth={2}
            markerEnd="url(#fam-self-arrow)"
          />
          <circle
            cx={cols[3]}
            cy={510}
            r={24}
            fill={C.accent}
            fillOpacity={0.9}
            stroke={C.fg}
            strokeWidth={2}
          />
          <text x={cols[3]} y={517} textAnchor="middle" fill={C.fg} fontSize="20" fontWeight="700">
            8
          </text>
          <text
            x={cols[3]}
            y={552}
            textAnchor="middle"
            fill={C.dim}
            fontSize="15"
            letterSpacing="1"
          >
            8 × 8 = 64 · PAIRS WITH ITSELF
          </text>
        </g>

        <text
          x={W / 2}
          y={H - 26}
          textAnchor="middle"
          fill={C.fg}
          fontSize="22"
          letterSpacing="1.5"
        >
          A LONE MIDDLE FACTOR APPEARS ONLY FOR PERFECT SQUARES
        </text>
      </svg>
    </div>
  )
}

function useConfig() {
  const config = {
    cssPrefix: 'fam',
    documentTitle: 'Factors and Multiples - AETHER',
    learning: {
      groupTitle: 'Number Theory',
      category: 'Number Theory',
      title: 'Factors and Multiples',
      subtitle:
        'Two questions about one multiplication: what divides a number, and what it divides into.',
      sections: [
        // Section 0: What Factor and Multiple Mean
        <>
          <h2>What "Factor" and "Multiple" Mean</h2>
          <p>{`A factor of a number divides it exactly, with nothing left over. A multiple of a number is what you get when you multiply it by a whole number.`}</p>
          <p>{`Take the single fact $5 \\times 8 = 40$. It tells you two things at once. Both $5$ and $8$ are factors of $40$. And $40$ is a multiple of both $5$ and $8$.`}</p>
          <p>{`Ask "what divides into $40$?" and you are hunting for factors. Ask "what does $5$ land on if you keep adding it?" and you are listing multiples. Same arithmetic, two directions.`}</p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Factor</span>
            <div className="lrn-definition-desc">
              <p>{`A whole number $d$ is a factor of $n$ when $n = d \\times k$ for some whole number $k$. We also say $d$ divides $n$, written $d \\mid n$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiple</span>
            <div className="lrn-definition-desc">
              <p>{`A whole number $m$ is a multiple of $n$ when $m = n \\times k$ for some whole number $k$.`}</p>
            </div>
          </div>
          <VizFigure
            title="One Array, Two Readings: Factors and a Multiple"
            size="body"
            aspect="16/9"
          >
            <Fam_FactorMultipleArray />
          </VizFigure>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`The number $1$ divides every whole number. Every number divides itself. So which two factors does every number have for free?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Every number $n$ has $1$ and $n$ as factors, because $n = 1 \\times n$. So $40$ always counts $1$ and $40$ among its factors before you look any further.`}</p>
            </details>
          </div>
        </>,

        // Section 1: Listing Every Factor Without Missing One
        <>
          <h2>Listing Every Factor Without Missing One</h2>
          <p>{`Guessing factors at random leaves gaps. A steady method finds them all. Here is the one to use.`}</p>
          <p>{`Test the small whole numbers in order: $1$, then $2$, then $3$, and so on. Each time one divides $n$ exactly, write it down together with its partner, the number it multiplies by.`}</p>
          <h3>Worked Example: All Factors of 40</h3>
          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`$1$ divides $40$: partner is $40$. Pair $1 \\times 40$.`}</li>
              <li>{`$2$ divides $40$: partner is $20$. Pair $2 \\times 20$.`}</li>
              <li>{`$3$ does not divide $40$. Skip it.`}</li>
              <li>{`$4$ divides $40$: partner is $10$. Pair $4 \\times 10$.`}</li>
              <li>{`$5$ divides $40$: partner is $8$. Pair $5 \\times 8$.`}</li>
              <li>{`The next number to test is $6$. But its partner would be smaller than $6$, and you have already found every smaller factor. Stop.`}</li>
            </ol>
          </div>
          <p>{`Collecting both columns gives the full list: $1, 2, 4, 5, 8, 10, 20, 40$. Eight factors, none missed. You tested only up to $5$, yet caught them all. A handful of divisions beats checking every number up to $40$. Divisibility tests, the next topic, make each check even faster.`}</p>
          <VizFigure title="Listing Factors of 40 by Pairs" size="body" aspect="16/9">
            <Fam_FactorPairLadder />
          </VizFigure>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`When you reached the pair $5 \\times 8$, the small factor and its partner were almost next to each other. Why does that closeness tell you the search is nearly finished?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The small factors climb up while their partners come down. They march toward each other. Once they meet, every larger number you could test is already sitting in the partner column. Testing further only repeats pairs you have.`}</p>
            </details>
          </div>
        </>,

        // Section 2: Factors and Multiples Are One Statement, Two Views
        <>
          <h2>One Statement, Two Views</h2>
          <p>{`Every factor fact hides a multiple fact, and the other way round. Learning to flip between them costs nothing and doubles what you know.`}</p>
          <p>{`Start with "$5$ is a factor of $40$." Flip it: "$40$ is a multiple of $5$." Both come from $40 = 5 \\times 8$. Neither says more than the other. They are the same sentence wearing different clothes.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Someone says "$90$ is a multiple of $15$." Flip that into a statement about factors. What does it claim?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`It claims $15$ is a factor of $90$. Check: $90 = 15 \\times 6$, exact. So $15 \\mid 90$, and the partner factor $6$ also divides $90$.`}</p>
            </details>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`A question asks whether $7$ is a factor of $90$. Rewrite it as a question about multiples. Which form is easier for you to settle, and why?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`As a multiple question: "Is $90$ one of the numbers $7, 14, 21, 28, \\ldots$?" Count by sevens: $\\ldots, 84, 91$. It jumps straight past $90$. So $90$ is not a multiple of $7$, which means $7$ is not a factor of $90$.`}</p>
            </details>
          </div>
        </>,

        // Section 3: Multiples, the Endless Ladder
        <>
          <h2>Multiples: the Endless Ladder</h2>
          <p>{`The multiples of a number form a ladder. You climb it by adding the number again and again. The rungs go on forever.`}</p>
          <p>{`The multiples of $6$ are $6, 12, 18, 24, 30, 36, \\ldots$ The smallest is $6$ itself, never $0$ in this setting. There is no largest, because you can always add another $6$.`}</p>
          <p>{`A hundred chart makes the pattern easy to see. It lays the numbers $1$ to $100$ in ten rows of ten. On it you can shade every multiple of $6$ and watch where they fall.`}</p>
          <VizFigure title="Multiples of 6 on a Hundred Chart" size="body" aspect="548/700">
            <Fam_MultiplesGrid />
          </VizFigure>
          <p>{`On a hundred chart the multiples of $6$ sit at an even spacing. Every rung is exactly six steps above the last. That regular gap is the signature of a multiple ladder.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Factors of a number stop after a short list. Multiples never stop. What single fact about multiplication explains that difference?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`A factor must divide $n$ exactly, so it cannot be larger than $n$. That caps the list. A multiple multiplies $n$ by ever larger whole numbers, and those never run out. So the ladder climbs without end.`}</p>
            </details>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Every number sits on its own ladder of multiples. Does $20$ appear on the ladder of $6$? Decide, then explain how you knew without writing the whole ladder.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`No. A number is a multiple of $6$ only if $6$ divides it exactly. But $20 = 6 \\times 3 + 2$, leaving a remainder of $2$. A leftover means $20$ misses every rung of the ladder.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Two facts hold for every number $n$ above $1$. Its smallest multiple is $n$ itself. And $n$ appears on the ladder of $1$, because every whole number is a multiple of $1$.`}</p>
            <p>{`So the ladder of $1$ is just the whole numbers in order. Every other ladder skips rungs, leaving a fixed gap between them.`}</p>
          </div>
        </>,

        // Section 4: Numbers Two Lists Share
        <>
          <h2>Numbers Two Lists Share</h2>
          <p>{`Pick two numbers. Sometimes their factor lists overlap, and sometimes their multiple ladders land on the same rung. Those shared numbers have names.`}</p>
          <p>{`A common factor of two numbers divides both. A common multiple of two numbers is a rung on both ladders. These ideas link the whole unit together.`}</p>
          <h3>Common Factors: Where Two Lists Overlap</h3>
          <p>{`Factors of $20$: $1, 2, 4, 5, 10, 20$. Factors of $50$: $1, 2, 5, 10, 25, 50$. The numbers in both lists are $1, 2, 5, 10$. Those are the common factors. The largest of them is $10$.`}</p>
          <VizFigure title="Common Factors of 20 and 50" size="body" aspect="7/5">
            <Fam_CommonFactorsOverlap />
          </VizFigure>
          <h3>Common Multiples: Where Two Ladders Meet</h3>
          <p>{`Multiples of $6$: $6, 12, 18, 24, 30, \\ldots$ Multiples of $8$: $8, 16, 24, 32, \\ldots$ Both ladders hit $24$, and later $48$. Those are common multiples. The smallest is $24$.`}</p>
          <p>{`The largest shared factor and the smallest shared multiple are the two numbers you reach for most. Each has a fast method of its own. You meet them next as the highest common factor (HCF) and the least common multiple (LCM).`}</p>
          <VizFigure title="Where Two Multiple Ladders Meet" size="wide" aspect="20/7">
            <Fam_CommonMultiplesStrips />
          </VizFigure>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Two numbers always share at least one common factor. Which one, and why can you be sure before seeing the numbers?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`They always share $1$, since $1$ divides every whole number. So the list of common factors is never empty. The interesting question is how large the shared factors can get.`}</p>
            </details>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The common multiples of $6$ and $8$ are $24, 48, 72, \\ldots$ They look like a multiple ladder of their own. What number is that a ladder of, and why?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`It is the ladder of $24$, the smallest common multiple. Any number on both original ladders must be a multiple of that smallest one. So every common multiple is a multiple of $24$.`}</p>
            </details>
          </div>
        </>,

        // Section 5: How Many Factors a Number Has
        <>
          <h2>How Many Factors a Number Has</h2>
          <p>{`Factors come out of the listing method in pairs. So you might expect every factor count to be even. Almost every count is. One kind of number breaks the rule.`}</p>
          <p>{`Recall $40$: its factors were $1, 2, 4, 5, 8, 10, 20, 40$, arranged as four clean pairs. Four pairs means eight factors, an even count. No factor was left without a partner.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Now try $64$. List its factors and sort them into pairs the same way. Does every factor find a different partner? If one does not, say what goes wrong.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`The pairs are $1 \\times 64$, $2 \\times 32$, $4 \\times 16$, and then $8 \\times 8$. That last pair is $8$ multiplied by itself. It counts once, not twice. So $64$ has seven factors, an odd count.`}</p>
            </details>
          </div>
          <p>{`A number like $64$ is a perfect square: a whole number times itself gives it, here $8 \\times 8 = 8^2 = 64$. The repeated factor pairs with itself, so it sits alone in the middle with no partner. That lone middle factor is what makes the count odd.`}</p>
          <VizFigure
            title="Why Factor Counts Are Even (Except Perfect Squares)"
            size="body"
            aspect="45/34"
          >
            <Fam_DivisorCountParity />
          </VizFigure>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Without listing them, decide whether $50$ has an even or odd number of factors. Justify your answer using the pairing idea alone.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$50$ is not a perfect square, because no whole number times itself gives $50$ ($7^2 = 49$, $8^2 = 64$). With no factor pairing with itself, every factor has a distinct partner. So the count is even. (It is $1, 2, 5, 10, 25, 50$: six factors.)`}</p>
            </details>
          </div>
          <p>{`The rule is exact: a whole number has an odd number of factors exactly when it is a perfect square. A faster way to count factors uses a number's prime building blocks. You meet that tool on the Prime Numbers and Prime Factorisation page.`}</p>
        </>
      ]
    },

    practice: [
      // basic: list factors
      {
        q: 'List every factor of $40$ using the pairing method.',
        a: 'Test small numbers in order: $1 \\times 40$, $2 \\times 20$, $4 \\times 10$, $5 \\times 8$. The number $3$ fails. The factors are $1, 2, 4, 5, 8, 10, 20, 40$. Eight in all.'
      },
      // basic: list multiples
      {
        q: 'List the first six multiples of $6$.',
        a: 'Add $6$ each time: $6, 12, 18, 24, 30, 36$. Each is $6 \\times k$ for $k = 1$ through $6$. The smallest is $6$ itself, and the ladder never ends.'
      },
      // transfer: flip a statement
      {
        q: 'Rewrite "$90$ is a multiple of $15$" as a statement about factors, and check it.',
        a: 'It becomes "$15$ is a factor of $90$." Check: $90 = 15 \\times 6$, exact. So $15 \\mid 90$, and the partner $6$ is a factor too.'
      },
      // predict: free factors
      {
        q: 'Which two factors does every whole number above $1$ have without any checking? Explain.',
        a: 'Every number $n$ has $1$ and $n$, because $n = 1 \\times n$. The number $1$ divides everything, and every number divides itself. So both appear on every factor list.'
      },
      // transfer: is it a multiple
      {
        q: 'Is $20$ a multiple of $6$? Decide using division with remainder.',
        a: 'Divide: $20 = 6 \\times 3 + 2$. The remainder is $2$, not $0$. A leftover means $6$ does not divide $20$ exactly. So $20$ is not a multiple of $6$.'
      },
      // basic: factor check
      {
        q: 'Is $7$ a factor of $90$? Answer by counting in sevens.',
        a: 'The multiples of $7$ near $90$ are $84$ and $91$. They skip straight over $90$. So $90$ is not a multiple of $7$, which means $7$ is not a factor of $90$.'
      },
      // computation: factors of 50
      {
        q: 'List all factors of $50$.',
        a: 'Pair them: $1 \\times 50$, $2 \\times 25$, $5 \\times 10$. The numbers $3$ and $4$ fail to divide $50$. The factors are $1, 2, 5, 10, 25, 50$. Six in all.'
      },
      // self-explain: why search stops early
      {
        q: 'When listing factors of $40$, why can you stop testing after $5$ instead of going up to $40$?',
        a: 'The small factors climb while their partners come down. At $5 \\times 8$ they have nearly met. Every larger number you could test already sits in the partner column. Testing more only repeats pairs.'
      },
      // predict: even vs odd factor count
      {
        q: 'Predict whether $50$ has an even or odd number of factors, then say why.',
        a: '$50$ is not a perfect square ($7^2 = 49$, $8^2 = 64$). So no factor pairs with itself, and every factor has a distinct partner. The count is even. It is $1, 2, 5, 10, 25, 50$: six factors.'
      },
      // elaborate: odd factor count
      {
        q: 'Explain why $64$ has an odd number of factors while $40$ has an even number.',
        a: '$40$ splits into four full pairs, eight factors. But $64 = 8 \\times 8$ is a perfect square, so $8$ pairs with itself and counts once. That lone middle factor makes the total odd: seven factors.'
      },
      // transfer: common factors
      {
        q: 'Find every common factor of $20$ and $50$.',
        a: 'Factors of $20$: $1, 2, 4, 5, 10, 20$. Factors of $50$: $1, 2, 5, 10, 25, 50$. The numbers in both lists are $1, 2, 5, 10$. The largest common factor is $10$.'
      },
      // transfer: common multiples
      {
        q: 'Find the smallest number that is a multiple of both $6$ and $8$.',
        a: 'Multiples of $6$: $6, 12, 18, 24, \\ldots$ Multiples of $8$: $8, 16, 24, \\ldots$ Both ladders first meet at $24$. So $24$ is the smallest common multiple.'
      },
      // self-explain: ladder of common multiples
      {
        q: 'The common multiples of $6$ and $8$ are $24, 48, 72, \\ldots$ Why do they form the ladder of $24$?',
        a: 'Any number on both ladders must be a multiple of the smallest common multiple, which is $24$. So every common multiple is itself a multiple of $24$, and they line up as the ladder of $24$.'
      },
      // basic: smallest and largest factor
      {
        q: 'What is the smallest factor of any number $n$ above $1$, and what is its largest? Explain.',
        a: 'The smallest factor is $1$, since $1$ divides everything. The largest is $n$ itself, since $n = 1 \\times n$ and no factor can exceed the number it divides.'
      },
      // predict: why multiples never end
      {
        q: 'Factors of a number stop after a short list, but multiples never stop. What one fact explains the difference?',
        a: 'A factor must divide $n$ exactly, so it cannot be larger than $n$. That caps the factor list. A multiple multiplies $n$ by ever larger whole numbers, and those never run out. So the ladder climbs forever.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Factors and Multiples',
      sections: [
        <>
          <h2>Core Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Factor</span>
            <div className="lrn-definition-desc">
              <p>{`$d$ is a factor of $n$ if $n = d \\times k$ for some whole number $k$. Notation: $d \\mid n$.`}</p>
              <p>{`When to use: finding what divides into $n$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Multiple</span>
            <div className="lrn-definition-desc">
              <p>{`$m$ is a multiple of $n$ if $m = n \\times k$ for some whole number $k$.`}</p>
              <p>{`When to use: finding what $n$ lands on as you count by $n$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Common Factor</span>
            <div className="lrn-definition-desc">
              <p>{`A number that divides two given numbers at once. Always includes $1$.`}</p>
              <p>{`When to use: comparing what two numbers share. The largest is the HCF (next unit).`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Common Multiple</span>
            <div className="lrn-definition-desc">
              <p>{`A number that appears on the multiple ladders of two given numbers.`}</p>
              <p>{`When to use: lining up two counts. The smallest is the LCM (next unit).`}</p>
            </div>
          </div>

          <h2>Listing All Factors</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$\\text{Test } 1, 2, 3, \\ldots \\text{ Record each factor with its partner. Stop where the columns meet.}$$`}</div>
          <p>{`When to use: finding the complete factor list of a number.`}</p>
          <p>{`Why it works: small factors climb and their partners descend. Once they meet, every larger factor is already recorded as a partner.`}</p>

          <h2>Key Facts</h2>
          <ul className="lrn-list">
            <li>{`Every number $n > 1$ has $1$ and $n$ as factors.`}</li>
            <li>{`The smallest multiple of $n$ is $n$ itself. Multiples never end.`}</li>
            <li>{`Every whole number is a multiple of $1$.`}</li>
            <li>{`Two numbers always share the common factor $1$.`}</li>
            <li>{`A number has an odd factor count only when it is a perfect square.`}</li>
          </ul>

          <h2>Worked Examples</h2>
          <table className="lrn-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['n', 'factors', 'count'].map((h, i) => (
                  <th
                    key={i}
                    style={{
                      textAlign: 'left',
                      padding: '6px 10px',
                      borderBottom: '1px solid var(--border-default)',
                      fontSize: FONT_LABEL,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['40', '1, 2, 4, 5, 8, 10, 20, 40', '8 (even)'],
                ['50', '1, 2, 5, 10, 25, 50', '6 (even)'],
                ['64', '1, 2, 4, 8, 16, 32, 64', '7 (odd, perfect square)'],
                ['90', '1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90', '12 (even)']
              ].map(([n, f, c], i) => (
                <tr key={i}>
                  {[n, f, c].map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '6px 10px',
                        borderBottom: '1px solid var(--border-subtle)',
                        fontSize: FONT_TEX
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Where This Leads</h2>
          <ul className="lrn-list">
            <li>{`Fast factor checks: Divisibility Tests.`}</li>
            <li>{`Building blocks of factors: Prime Numbers and Prime Factorisation.`}</li>
            <li>{`Largest shared factor, smallest shared multiple: HCF and LCM.`}</li>
          </ul>
        </>
      ]
    },

    customCss:
      '.MafsView { --mafs-bg: transparent; --mafs-fg: var(--text-primary); --mafs-line-color: var(--border-subtle); }'
  }
  return config
}

export default function FactorsAndMultiples() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
