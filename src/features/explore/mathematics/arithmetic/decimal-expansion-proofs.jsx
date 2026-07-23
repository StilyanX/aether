import { useMemo, useState } from 'react'
import katex from 'katex'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { VizFigure } from '../../../../components/viz-figure'
import { Label, Slider, OPACITY } from '../../../../components/viz/primitives'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import {
  FONT_BODY,
  FONT_CONTROL,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TINY
} from '../../../../components/viz/scale-tokens'

// Inline viz · migrated 2026-05 from src/components/viz/arithmetic.jsx into
// the topic file, wrapped in <VizFigure>. Engine: hand-rolled SVG per the
// Pattern → Engine map (static factorization tree, remainder cycle, pigeonhole
// boxes). All computation is honest: real prime factorization + multiplicative
// order mod the coprime part of q.

function primeFactors(n) {
  const out = []
  for (let p = 2; p * p <= n; p++)
    while (n % p === 0) {
      out.push(p)
      n /= p
    }
  if (n > 1) out.push(n)
  return out
}

function multiplicativeOrder(a, m) {
  let x = a % m
  for (let k = 1; k <= m + 1; k++) {
    if (x === 1) return k
    x = (x * a) % m
  }
  return -1
}

function decimalString(p, q, maxLen = 36) {
  if (q === 1) return String(p)
  const intPart = Math.floor(p / q)
  let rem = p - intPart * q
  const seen = new Map()
  let digits = ''
  let cycleStart = -1
  for (let i = 0; i < maxLen && rem !== 0; i++) {
    if (seen.has(rem)) {
      cycleStart = seen.get(rem)
      break
    }
    seen.set(rem, i)
    rem *= 10
    digits += Math.floor(rem / q)
    rem = rem % q
  }
  if (cycleStart >= 0) {
    return `${intPart}.${digits.slice(0, cycleStart)}\\overline{${digits.slice(cycleStart)}}`
  }
  return `${intPart}.${digits || '0'}${rem === 0 ? '' : '\\ldots'}`
}

function renderKatex(tex) {
  try {
    return katex.renderToString(tex, { throwOnError: false, displayMode: false })
  } catch {
    return tex
  }
}

// 11.1.1: Denominator Factorization. Two-level tree: root q, three children
// for the 2-component, 5-component, and the coprime residue. The residue
// branch dims to OPACITY.dim when it equals 1 (terminating case). Below the
// tree, a katex line shows 1/q expanded with overline if it repeats.
function Dep_FactorTreeInline() {
  const C = useVizColors()
  const [q, setQ] = useState(75)

  const { twoPart, fivePart, residue, period, terminates, decTex } = useMemo(() => {
    const fs = primeFactors(q)
    const twos = fs.filter(f => f === 2).length
    const fives = fs.filter(f => f === 5).length
    const res = fs.filter(f => f !== 2 && f !== 5).reduce((a, b) => a * b, 1)
    const per = res === 1 ? 0 : multiplicativeOrder(10, res)
    return {
      twoPart: Math.pow(2, twos),
      fivePart: Math.pow(5, fives),
      residue: res,
      period: per,
      terminates: res === 1,
      decTex: `\\tfrac{1}{${q}} = ${decimalString(1, q, 32)}`
    }
  }, [q])

  const W = 520
  const H = 260
  const rootCx = W / 2
  const rootCy = 38
  const childY = 142
  const childXs = [W * 0.18, W * 0.5, W * 0.82]
  const childVals = [twoPart, fivePart, residue]
  const childTags = ['2-PART', '5-PART', 'RESIDUE']
  const childActive = [twoPart > 1, fivePart > 1, residue > 1]
  const verdictY = 218

  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block', color: C.fg }}>
        {/* Branch lines */}
        {childXs.map((cx, i) => (
          <line
            key={`l${i}`}
            x1={rootCx}
            y1={rootCy + 18}
            x2={cx}
            y2={childY - 22}
            stroke={C.fg}
            strokeOpacity={childActive[i] ? OPACITY.fg : OPACITY.dim}
            strokeWidth={1}
          />
        ))}

        {/* Root node */}
        <rect
          x={rootCx - 64}
          y={rootCy - 18}
          width={128}
          height={36}
          fill="none"
          stroke={C.fg}
          strokeOpacity={OPACITY.fg}
        />
        <Label
          x={rootCx}
          y={rootCy + 5}
          anchor="middle"
          size={FONT_CONTROL}
          opacity={OPACITY.fg}
          upper={false}
        >
          {`q = ${q}`}
        </Label>

        {/* Child nodes */}
        {childXs.map((cx, i) => (
          <g key={`c${i}`}>
            <rect
              x={cx - 48}
              y={childY - 22}
              width={96}
              height={40}
              fill="none"
              stroke={C.fg}
              strokeOpacity={childActive[i] ? OPACITY.fg : OPACITY.dim}
            />
            <Label
              x={cx}
              y={childY + 2}
              anchor="middle"
              size={FONT_BODY}
              opacity={childActive[i] ? OPACITY.fg : OPACITY.dim}
              upper={false}
            >
              {childVals[i]}
            </Label>
            <Label x={cx} y={childY + 36} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {childTags[i]}
            </Label>
          </g>
        ))}

        {/* Verdict */}
        <Label x={W / 2} y={verdictY} anchor="middle" size={FONT_LABEL} opacity={OPACITY.fg}>
          {terminates ? `TERMINATES · RESIDUE = 1` : `REPEATS · PERIOD = ${period}`}
        </Label>
      </svg>

      <Slider
        label="q"
        value={q}
        min={2}
        max={200}
        step={1}
        onChange={v => setQ(v | 0)}
        format={v => v}
      />

      <div
        style={{
          padding: '8px 12px 4px',
          color: 'var(--text-primary)',
          fontFamily: "'D-DIN', ui-monospace, monospace",
          fontSize: FONT_CONTROL,
          textAlign: 'center',
          opacity: 0.85
        }}
        dangerouslySetInnerHTML={{ __html: renderKatex(decTex) }}
      />
    </div>
  )
}

// 11.1.2: Remainder Cycle. Plots the orbit of 1 under multiplication by 10
// modulo the coprime part of q. Each node is a remainder; arrows connect each
// to its successor. Cycle length = ord_{coprime(q)}(10) = the period of 1/q.
function Dep_RemainderCycleInline() {
  const C = useVizColors()
  const [q, setQ] = useState(7)

  const { cleanQ, period, pts, periodTex } = useMemo(() => {
    const fs = primeFactors(q)
    const cleaned = fs.filter(f => f !== 2 && f !== 5).reduce((a, b) => a * b, 1) || 1
    const per = cleaned === 1 ? 0 : multiplicativeOrder(10, cleaned)
    const points = []
    if (cleaned > 1 && per > 0) {
      let v = 1
      for (let k = 0; k < Math.min(per, 32); k++) {
        points.push({ k, val: v })
        v = (v * 10) % cleaned
      }
    }
    return {
      cleanQ: cleaned,
      period: per,
      pts: points,
      periodTex: `\\operatorname{period} = ${per} = \\operatorname{ord}_{${cleaned}}(10)`
    }
  }, [q])

  const W = 360
  const H = 360
  const cx = W / 2
  const cy = H / 2
  const R = 130

  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block', color: C.fg }}>
        <circle cx={cx} cy={cy} r={R} fill="none" stroke={C.fg} strokeOpacity={OPACITY.dim} />
        {pts.length === 0 && (
          <Label x={cx} y={cy + 4} anchor="middle" size={FONT_TEX} opacity={OPACITY.fg}>
            NO CYCLE · TERMINATES
          </Label>
        )}
        {pts.map((p, i) => {
          const a = (i / pts.length) * 2 * Math.PI - Math.PI / 2
          const x = cx + R * Math.cos(a)
          const y = cy + R * Math.sin(a)
          const lx = cx + (R + 22) * Math.cos(a)
          const ly = cy + (R + 22) * Math.sin(a)
          const a2 = ((i + 1) / pts.length) * 2 * Math.PI - Math.PI / 2
          const x2 = cx + R * Math.cos(a2)
          const y2 = cy + R * Math.sin(a2)
          return (
            <g key={i}>
              <line x1={x} y1={y} x2={x2} y2={y2} stroke={C.fg} strokeOpacity={OPACITY.accent} />
              <circle cx={x} cy={y} r={4} fill={C.fg} fillOpacity={OPACITY.fg} />
              <Label
                x={lx}
                y={ly + 4}
                anchor="middle"
                size={FONT_LABEL}
                opacity={OPACITY.fg}
                upper={false}
              >
                {p.val}
              </Label>
            </g>
          )
        })}
      </svg>

      <Slider
        label="q"
        value={q}
        min={3}
        max={50}
        step={1}
        onChange={v => setQ(v | 0)}
        format={v => v}
      />

      <div
        style={{
          padding: '8px 12px 4px',
          color: 'var(--text-primary)',
          fontFamily: "'D-DIN', ui-monospace, monospace",
          fontSize: FONT_TEX,
          display: 'flex',
          justifyContent: 'center',
          gap: 22,
          flexWrap: 'wrap',
          opacity: 0.85
        }}
      >
        <span>{`q = ${q}`}</span>
        <span>{`coprime part = ${cleanQ}`}</span>
        <span dangerouslySetInnerHTML={{ __html: renderKatex(periodTex) }} />
      </div>
    </div>
  )
}

// 11.1.3: Pigeonhole Principle. Top row: q-1 boxes (one per nonzero remainder
// mod q). Bottom row: the actual sequence of remainders from long division of
// 1/q. The first repeated remainder is highlighted in both rows. Fixed
// worst-case viewBox width keeps the card from resizing on every slider tick.
function Dep_PigeonholeInline() {
  const C = useVizColors()
  const [q, setQ] = useState(7)

  const { rems, cycleAt, period, terminated } = useMemo(() => {
    const out = []
    let r = 1
    const seen = new Map()
    let cs = -1
    let term = false
    for (let k = 0; k < q + 2; k++) {
      if (seen.has(r)) {
        cs = seen.get(r)
        out.push({ r, k, repeat: true })
        break
      }
      seen.set(r, k)
      out.push({ r, k })
      r = (r * 10) % q
      if (r === 0) {
        out.push({ r: 0, k: k + 1, terminate: true })
        term = true
        break
      }
    }
    const per = cs >= 0 ? out.length - 1 - cs : 0
    return { rems: out, cycleAt: cs, period: per, terminated: term }
  }, [q])

  const W = 920
  const H = 170
  const boxCell = 32
  const seqCell = 40
  const boxesY = 16
  const seqY = 92
  const repeatVal = cycleAt >= 0 ? rems[cycleAt].r : null

  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block', color: C.fg }}>
        <Label x={16} y={12} size={FONT_SMALL} opacity={OPACITY.dim}>
          PIGEONHOLES · NONZERO REMAINDERS MOD {q}
        </Label>
        {Array.from({ length: q - 1 }, (_, i) => i + 1).map(i => {
          const x = 16 + (i - 1) * boxCell
          const used = rems.some(s => s.r === i)
          const isRepeat = i === repeatVal
          return (
            <g key={`b${i}`}>
              <rect
                x={x}
                y={boxesY + 6}
                width={boxCell - 4}
                height={boxCell}
                fill="none"
                stroke={C.fg}
                strokeOpacity={used ? OPACITY.fg : OPACITY.dim}
                strokeDasharray={isRepeat ? '3 3' : undefined}
              />
              <Label
                x={x + (boxCell - 4) / 2}
                y={boxesY + boxCell / 2 + 11}
                anchor="middle"
                size={FONT_LABEL}
                opacity={used ? OPACITY.fg : OPACITY.dim}
                upper={false}
              >
                {i}
              </Label>
            </g>
          )
        })}

        <Label x={16} y={seqY - 6} size={FONT_SMALL} opacity={OPACITY.dim}>
          REMAINDER SEQUENCE · LONG DIVISION OF 1 / {q}
        </Label>
        {rems.map((s, i) => {
          const x = 16 + i * seqCell
          const collision = (i === cycleAt || s.repeat) && !s.terminate
          return (
            <g key={`s${i}`}>
              {collision && (
                <rect
                  x={x - 4}
                  y={seqY + 4}
                  width={seqCell - 4}
                  height={28}
                  fill="none"
                  stroke={C.fg}
                  strokeOpacity={OPACITY.fg}
                  strokeDasharray="3 3"
                />
              )}
              <Label
                x={x + (seqCell - 8) / 2}
                y={seqY + 24}
                anchor="middle"
                size={FONT_CONTROL}
                opacity={s.terminate ? OPACITY.dim : OPACITY.fg}
                upper={false}
              >
                {s.r}
              </Label>
              {s.repeat && (
                <Label
                  x={x + (seqCell - 8) / 2}
                  y={seqY + 42}
                  anchor="middle"
                  size={FONT_SMALL}
                  opacity={OPACITY.dim}
                >
                  REPEAT
                </Label>
              )}
              {s.terminate && (
                <Label
                  x={x + (seqCell - 8) / 2}
                  y={seqY + 42}
                  anchor="middle"
                  size={FONT_SMALL}
                  opacity={OPACITY.dim}
                >
                  STOP
                </Label>
              )}
            </g>
          )
        })}
      </svg>

      <Slider
        label="q"
        value={q}
        min={3}
        max={20}
        step={1}
        onChange={v => setQ(v | 0)}
        format={v => v}
      />

      <div
        style={{
          padding: '8px 12px 4px',
          color: 'var(--text-primary)',
          fontFamily: "'D-DIN', ui-monospace, monospace",
          fontSize: FONT_TEX,
          textAlign: 'center',
          opacity: 0.85
        }}
      >
        {terminated
          ? `Remainder hit 0 → 1/${q} terminates.`
          : `By pigeonhole, a remainder repeats within ${q - 1} steps. Period = ${period}.`}
      </div>
    </div>
  )
}

const config = {
  cssPrefix: 'dep',
  documentTitle: 'Decimal Expansion Proofs - AETHER',
  learning: {
    category: 'Arithmetic',
    title: 'Decimal Expansion Proofs',
    subtitle:
      'Formal proofs that every fraction is a finite or repeating decimal. The finite case and the repeating case.',
    sections: []
  },
  practice: [],
  reference: {
    category: 'Quick Reference',
    title: 'Decimal Expansion Proofs',
    sections: []
  },
  customCss: `
    .MafsView { --mafs-bg: transparent; }
  `
}

function DecimalExpansionProofsContent() {
  config.learning.sections = [
    /* SECTION 1: PROOF OF THE FINITE CASE
     */
    <>
      <h2>Proof of the Finite Case</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>{`If $m/n$ is a fraction where $n = 2^k$, how could you turn it into a fraction with a power-of-10 denominator?`}</p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>{`Multiply numerator and denominator by $5^k$. Then $\\frac{m}{2^k} = \\frac{m \\times 5^k}{2^k \\times 5^k} = \\frac{m \\times 5^k}{10^k}$. Now it is a finite decimal.`}</p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong>{' '}
        {`Use this proof strategy to show that a fraction with denominator $2^a \\cdot 5^b$ terminates. Supply the missing factors of 2 or 5 to build a power-of-10 denominator.`}
      </p>

      <h3>The Strategy</h3>
      <p>{`We need to show that if $n = 2^a \\cdot 5^b$, then $m/n$ is a finite decimal.`}</p>
      <p>{`Consider first $n = 2^k$. The case $n = 5^l$ works the same way (just swap 2 and 5). We call this the symmetric case. The general case combines both.`}</p>

      <VizFigure title="Denominator Factorization" size="body" aspect="auto">
        <Dep_FactorTreeInline />
      </VizFigure>

      <h3>The Proof</h3>
      <p>{`First, what counts as a finite decimal? A finite (terminating) decimal is any number you can write as a whole number divided by a power of 10, that is $\\frac{\\text{integer}}{10^k}$. For example $0.625 = \\frac{625}{1000} = \\frac{625}{10^3}$.`}</p>
      <p>{`Start with $\\frac{m}{2^k}$. Perform long division of $m \\times 10^k$ by $2^k$, where $q$ is the whole-number quotient and $r$ is the remainder.`}</p>
      <div className="lrn-eq">{`$$m \\times 10^k = q \\cdot 2^k + r, \\quad 0 \\leq r < 2^k$$`}</div>
      <p>{`But $10^k = 2^k \\times 5^k$, so $2^k$ divides $m \\times 10^k$. This means $r = 0$.`}</p>
      <div className="lrn-eq lrn-eq-display">{`$$\\frac{m}{2^k} = \\frac{m \\times 10^k}{2^k} \\times \\frac{1}{10^k} = \\frac{q}{10^k}$$`}</div>
      <p>{`Since $q$ is a whole number, $\\frac{q}{10^k}$ is an integer over a power of 10. So it is a finite decimal.`}</p>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>{`The critical step: $2^k$ divides $m \\times 10^k$ because $10^k$ already contains $2^k$ as a factor. So dividing $m \\times 10^k$ by $2^k$ leaves no remainder. This is why the denominator must contain only 2s and 5s. They are the prime factors of 10.`}</p>
      </div>

      <h3>{`Worked Example: $\\frac{21}{8}$`}</h3>
      <p>{`$8 = 2^3$, so $k = 3$. Compute $\\frac{21 \\times 10^3}{2^3} = \\frac{21000}{8} = 2625$.`}</p>
      <div className="lrn-eq">{`$$\\frac{21}{8} = \\frac{2625}{10^3} = 2.625$$`}</div>
      <p>You can verify: 2.625 x 8 = 21.</p>

      <h3>{`The Symmetric Case: Denominator $5^b$`}</h3>
      <p>{`If $n = 5^b$, multiply top and bottom by $2^b$. Then $\\frac{m}{5^b} = \\frac{m \\times 2^b}{5^b \\times 2^b} = \\frac{m \\times 2^b}{10^b}$.`}</p>
      <div className="lrn-eq">{`$$\\frac{m}{5^b} = \\frac{m \\times 2^b}{10^b}$$`}</div>
      <p>The logic is the same. Supply the missing factor to reach a power of 10.</p>

      <p>{`You can now prove any $2^a \\cdot 5^b$ fraction terminates, and produce its exact decimal.`}</p>

      <div className="lrn-faded">
        <div className="lrn-faded-phase lrn-faded-partial">
          <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
          <p>{`Show $\\frac{7}{125}$ is a finite decimal. $125 = 5^3$. Multiply: $\\frac{7}{5^3} = \\frac{7 \\times 2^3}{5^3 \\times 2^3} = \\frac{56}{10^3} = 0.056$.`}</p>
        </div>
        <div className="lrn-faded-phase lrn-faded-partial">
          <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
          <p>{`Show $\\frac{3}{40}$ is a finite decimal. Note: $40 = 2^3 \\times 5$.`}</p>
          <ol className="lrn-list">
            <li>{`Supply the missing factors: $\\frac{3}{40} = \\frac{3 \\times \\rule{1cm}{0.5pt}}{40 \\times \\rule{1cm}{0.5pt}}$`}</li>
            <li>{`Write the result: $\\rule{1cm}{0.5pt}/10^{\\rule{0.5cm}{0.5pt}}$`}</li>
          </ol>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
          <p>{`Show $\\frac{11}{250}$ is a finite decimal. Factor 250. Supply the missing factors. Write the result.`}</p>
        </div>
      </div>
    </>,

    /* SECTION 2: PROOF OF THE REPEATING CASE
     */
    <>
      <h2>Proof of the Repeating Case</h2>

      <div className="lrn-predict">
        <span className="lrn-predict-label">PREDICT</span>
        <p>
          When dividing by 7, you get remainders between 0 and 6. There are only 7 possible
          remainders. After how many steps must a remainder repeat?
        </p>
        <details className="lrn-predict-reveal">
          <summary>Check your thinking</summary>
          <p>
            After at most 7 steps (actually 6 if the decimal does not terminate). There are 7
            possible remainders and the decimal never ends. So among the first 7 nonzero remainders,
            two must match. That is the pigeonhole principle.
          </p>
        </details>
      </div>

      <p>
        <strong>When to use this:</strong> Use this proof to explain why every fraction that does
        not end (a non-terminating fraction) gives a repeating decimal. The pigeonhole principle is
        the key: finitely many remainders guarantee eventual repetition.
      </p>

      <h3>{`The Proof for $\\tfrac{3}{7}$`}</h3>
      <p>{`Define the sequence: for each $n$, let $q_n$ be the quotient of $3 \\times 10^n \\div 7$, and let $s_n = q_n / 10^n$.`}</p>
      <div className="lrn-eq">{`$$s_n = \\frac{q_n}{10^n}, \\quad \\text{where } q_n = \\text{quotient of } 3 \\times 10^n \\div 7$$`}</div>

      <p>Compute the first terms by short division.</p>
      <div className="lrn-eq">{`$$3 \\times 10^1 = 30 = 4 \\times 7 + 2 \\quad \\Rightarrow \\quad s_1 = 0.4$$`}</div>
      <div className="lrn-eq">{`$$3 \\times 10^2 = 300 = 42 \\times 7 + 6 \\quad \\Rightarrow \\quad s_2 = 0.42$$`}</div>
      <div className="lrn-eq">{`$$3 \\times 10^3 = 3000 = 428 \\times 7 + 4 \\quad \\Rightarrow \\quad s_3 = 0.428$$`}</div>
      <div className="lrn-eq">{`$$3 \\times 10^4 = 30000 = 4285 \\times 7 + 5 \\quad \\Rightarrow \\quad s_4 = 0.4285$$`}</div>
      <div className="lrn-eq">{`$$3 \\times 10^5 = 300000 = 42857 \\times 7 + 1 \\quad \\Rightarrow \\quad s_5 = 0.42857$$`}</div>
      <p>The remainders are 2, 6, 4, 5, 1, and the digits 4, 2, 8, 5, 7 appear.</p>

      <h3>{`Why $s = \\frac{3}{7}$`}</h3>
      <p>{`The proof has two parts. First confirm these finite decimals really do equal $\\frac{3}{7}$ in the limit. Then show why the digits must repeat. Start with the first part.`}</p>
      <p>From the division-with-remainder equation for each n:</p>
      <div className="lrn-eq">{`$$3 \\times 10^n = q_n \\times 7 + r_n, \\quad 0 \\leq r_n < 7$$`}</div>
      <p>{`Divide both sides by $7 \\times 10^n$. The left side becomes $\\frac{3}{7}$. The right side splits into two pieces:`}</p>
      <div className="lrn-eq">{`$$\\frac{3}{7} = \\frac{q_n}{10^n} + \\frac{r_n}{7 \\times 10^n} = s_n + \\frac{r_n}{7 \\times 10^n}$$`}</div>
      <p>{`So $\\frac{3}{7} - s_n = \\frac{r_n}{7 \\times 10^n}$. Since $0 \\leq r_n < 7$, the top is below 7, so this gap is below $\\frac{7}{7 \\times 10^n} = \\frac{1}{10^n}$.`}</p>
      <div className="lrn-eq lrn-eq-display">{`$$0 \\leq \\frac{3}{7} - s_n < \\frac{1}{10^n}$$`}</div>
      <p>{`As $n$ grows, $\\frac{1}{10^n}$ approaches 0. So $s_n$ approaches $\\frac{3}{7}$ from below: it gets as close as you like (arbitrarily close) to $\\frac{3}{7}$. The limit is exactly $\\frac{3}{7}$.`}</p>

      <h3>Why the Digits Repeat: The Pigeonhole Principle</h3>
      <p>
        When dividing by 7, each step produces a remainder between 0 and 6. There are only 7
        possible remainders.
      </p>
      <p>
        If any remainder is 0, the decimal terminates (which does not happen for {`$\\frac{3}{7}$`}
        ).
      </p>
      <p>
        The pigeonhole principle says: if you place n+1 objects into n boxes, at least one box holds
        two objects. Here the boxes are the 6 nonzero remainders 1 through 6. After 7 steps you have
        7 remainders in 6 boxes. So at least two must be the same. A collision is unavoidable.
      </p>

      <VizFigure title="Pigeonhole Principle" size="body" aspect="auto">
        <Dep_PigeonholeInline />
      </VizFigure>

      <div className="lrn-elaborate">
        <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
        <p>
          Once a remainder repeats, the entire sequence of digits repeats from that point. Each
          digit depends only on the current remainder. Same remainder gives same digit and same next
          remainder. The cycle continues forever.
        </p>
      </div>

      <h3>{`The Period and the Order of 10`}</h3>
      <p>{`The length of the repeating block is called the period. There is a clean name for it. The order of 10 mod $n$, written $\\operatorname{ord}_n(10)$, is the smallest power $k$ with $10^k \\equiv 1 \\pmod n$.`}</p>
      <p>{`When $n$ shares no factor with 10, the period of $\\frac{1}{n}$ equals $\\operatorname{ord}_n(10)$. The remainders cycle exactly when a power of 10 first comes back to 1, and that first return is $\\operatorname{ord}_n(10)$.`}</p>

      <VizFigure title="Remainder Cycle" size="body" aspect="auto">
        <Dep_RemainderCycleInline />
      </VizFigure>

      <div className="lrn-eq lrn-eq-display">{`$$\\frac{3}{7} = 0.\\overline{428571}$$`}</div>
      <p>{`The period is 6, and 6 divides $7 - 1 = 6$. The "Period of Decimal Expansions" section below explains why this always holds.`}</p>

      <div className="lrn-self-explain">
        <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
        <p>Why does the period of {`$\\frac{3}{7}$`} divide 6 (which is 7 - 1)?</p>
        <details className="lrn-self-explain-reveal">
          <summary>Expert explanation</summary>
          <p>{`The period equals $\\operatorname{ord}_7(10)$, the smallest power $k$ with $10^k \\equiv 1 \\pmod 7$. Multiplying by 10 shuffles the 6 nonzero remainders $1, \\ldots, 6$ among themselves. Fermat's Little Theorem gives $10^6 \\equiv 1 \\pmod 7$, so a full pass of 6 returns to the start. The smallest cycle length must divide 6. You can check it directly: after 6 steps, the remainder returns to 3.`}</p>
        </details>
      </div>

      <h3>{`Extended Example: $\\frac{1}{28}$`}</h3>
      <p>{`$28 = 2^2 \\times 7$. Since 7 appears, the decimal is not finite. It repeats.`}</p>
      <p>Compute via long division.</p>
      <div className="lrn-eq">{`$$1 \\times 10^3 = 1000 = 35 \\times 28 + 20 \\quad \\Rightarrow \\quad s_3 = 0.035$$`}</div>
      <div className="lrn-eq">{`$$1 \\times 10^9 = 1000000000 = 35714285 \\times 28 + 20 \\quad \\Rightarrow \\quad s_9 = 0.035714285$$`}</div>
      <p>Remainder 20 appears at step 3 and again at step 9. The cycle length is 9 - 3 = 6.</p>
      <div className="lrn-eq lrn-eq-display">{`$$\\frac{1}{28} = 0.03\\overline{571428}$$`}</div>
      <p>The non-repeating prefix "03" has length 2. The repeating block "571428" has period 6.</p>

      <div className="lrn-faded">
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
          <p>
            {`Verify for $\\frac{1}{28}$: The non-repeating prefix length equals the power of 2 in the denominator. Here $28 = 2^2 \\times 7$. The prefix has 2 digits. The repeating part comes from the factor 7. In general, for a denominator $2^a \\cdot 5^b \\cdot (\\text{other primes})$, the prefix length is $\\max(a, b)$: it takes that many steps to absorb both the 2s and the 5s.`}
          </p>
        </div>
        <div className="lrn-faded-phase lrn-faded-partial">
          <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
          <p>{`Find the decimal expansion of $\\frac{1}{12}$. Note: $12 = 2^2 \\times 3$.`}</p>
          <ol className="lrn-list">
            <li>{`Predict the prefix length: $\\rule{1cm}{0.5pt}$`}</li>
            <li>{`Predict the period divides: $\\rule{1cm}{0.5pt}$`}</li>
            <li>Compute by long division to verify.</li>
          </ol>
        </div>
        <div className="lrn-faded-phase">
          <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
          <p>
            Find the decimal expansion of {`$\\frac{5}{42}$`}. Factor 42. Predict prefix length and
            period bound. Then verify by long division.
          </p>
        </div>
      </div>

      <h3>Period of Decimal Expansions</h3>
      <p>{`For a prime $p$ (not 2 or 5) in the denominator, the period divides $p - 1$. Here is why.`}</p>
      <p>{`The period equals the order of 10 mod $p$, written $\\operatorname{ord}_p(10)$. Recall this is the smallest power $k$ with $10^k \\equiv 1 \\pmod{p}$.`}</p>
      <p>{`The nonzero remainders mod $p$ are the numbers $1, 2, \\ldots, p - 1$. That is $p - 1$ of them. Multiplying by 10 shuffles these $p - 1$ numbers among themselves, because $p$ does not divide 10.`}</p>
      <p>{`Fermat's Little Theorem says $10^{p-1} \\equiv 1 \\pmod{p}$ for any prime $p$ that does not divide 10. So one full pass of $p - 1$ multiplications by 10 returns to where you started.`}</p>
      <p>{`The smallest cycle length $\\operatorname{ord}_p(10)$ must fit evenly inside this length $p - 1$. So the period $\\operatorname{ord}_p(10)$ divides $p - 1$.`}</p>
      <p>For {`$\\frac{3}{7}$`}, the period 6 divides 7 - 1 = 6.</p>
      <p>For {`$\\frac{2}{11}$`}, the period 2 divides 11 - 1 = 10.</p>

      <div className="lrn-compare">
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Finite Decimals from Fractions</span>
          <p>{`Denominator = $2^a \\cdot 5^b$. Multiply by $10^k$ to clear. No remainders cycle.`}</p>
        </div>
        <div className="lrn-compare-col">
          <span className="lrn-compare-title">Repeating Decimals from Fractions</span>
          <p>
            Denominator has other prime factors. Pigeonhole forces remainder repetition. Cycle
            length divides p - 1.
          </p>
        </div>
      </div>
    </>
  ]

  // PRACTICE CARDS (interleaved)
  config.practice = [
    {
      q: 'Self-explain: In the proof that $\\frac{21}{8} = 2.625$, why does dividing 21000 by 8 leave remainder 0?',
      a: '$21000 = 21 \\times 10^3 = 21 \\times (2 \\times 5)^3 = 21 \\times 2^3 \\times 5^3$. Dividing by $8 = 2^3$ cancels the $2^3$ factor exactly: $21 \\times 5^3 = 21 \\times 125 = 2625$, remainder 0. The key: $10^3$ already contains $2^3$ as a factor.'
    },
    {
      q: 'Explain why the pigeonhole principle guarantees repeating decimals when dividing by n.',
      a: 'When dividing by n, remainders range from 0 to n-1. If remainder 0 appears, the decimal terminates. Otherwise, remainders range from 1 to n-1: only n-1 possibilities. After n steps, you have n remainders in n-1 boxes. Pigeonhole: at least two match. Once a remainder repeats, all later digits repeat.'
    },
    {
      q: 'Predict: Will $\\frac{1}{12}$ have a finite or repeating decimal? What prefix length and period?',
      a: '$12 = 2^2 \\times 3$. Since 3 appears, the decimal repeats. The non-repeating prefix has length 2 (from $2^2$). The period divides $3 - 1 = 2$. In fact, $\\frac{1}{12} = 0.08\\overline{3}$, with prefix length 2 and period 1.'
    },
    {
      q: 'If the decimal expansion of $\\frac{m}{p}$ ($p$ prime) has period 6, what can you say about $p$?',
      a: 'The period divides $p - 1$. So 6 divides $p - 1$, meaning $p - 1$ is a multiple of 6. Possible primes: $p = 7$ ($7-1=6$), $p = 13$ ($13-1=12$), $p = 19$ ($19-1=18$), $p = 31$ ($31-1=30$). The period structure comes from the cyclic pattern of remainders.'
    },
    {
      q: 'Transfer: A machinist needs to know if $\\frac{3}{16}$ of an inch (about 4.8 mm) is a finite decimal. Determine and compute it.',
      a: '$16 = 2^4$. Only prime factor is 2. So $\\frac{3}{16}$ is a finite decimal. Compute: $\\frac{3 \\times 10^4}{2^4} = \\frac{30000}{16} = 1875$. So $\\frac{3}{16} = \\frac{1875}{10^4} = 0.1875$. Verify: $0.1875 \\times 16 = 3$.'
    },
    {
      q: 'What is the decimal expansion of $\\frac{1}{28}$? Explain the structure.',
      a: '$\\frac{1}{28} = 0.03\\overline{571428}$. The prefix "03" has 2 digits because $28 = 2^2 \\times 7$ and the power of 2 is 2. The repeating block "571428" has period 6 because 6 divides $7 - 1 = 6$.'
    },
    {
      q: 'Elaborate: Why must the denominator have only factors 2 and 5 for a finite decimal?',
      a: 'A finite decimal equals $\\frac{m}{10^k}$ for some whole numbers $m$ and $k$. Since $10 = 2 \\times 5$, we get $10^k = 2^k \\times 5^k$. Any fraction equal to $\\frac{m}{10^k}$ can only have 2 and 5 in its denominator after simplification. A prime like 7 can never be canceled by any power of 10.'
    },
    {
      q: 'Predict: What is the maximum period length for the decimal expansion of $\\frac{m}{13}$?',
      a: '13 is prime. The period divides $13 - 1 = 12$. So the maximum period is 12. For example, $\\frac{1}{13} = 0.\\overline{076923}$ (period 6, which divides 12). Some fractions $\\frac{m}{13}$ may reach the full period 12.'
    },
    {
      q: 'Transfer: A machinist computes $\\frac{7}{125}$. Show the proof-based method to get the decimal.',
      a: '$125 = 5^3$. Supply missing factor: $\\frac{7}{5^3} = \\frac{7 \\times 2^3}{5^3 \\times 2^3} = \\frac{56}{10^3} = 0.056$. The proof guarantees this works because $10^3 = 2^3 \\times 5^3$, and the $5^3$ in the denominator absorbs into the $10^3$.'
    },
    {
      q: 'Elaborate: Why does the non-repeating prefix length equal $\\max(a, b)$ for denominator $2^a \\cdot 5^b \\cdot p$?',
      a: 'The factors $2^a$ and $5^b$ get absorbed after $\\max(a, b)$ long division steps (when you have multiplied by $10^{\\max(a,b)}$). After that, only the prime $p$ remains. From that point, remainders cycle through values mod $p$. The prefix handles the 2s and 5s; the cycle handles the other prime.'
    },
    {
      q: 'Show that $\\frac{3}{40}$ is a finite decimal using the proof strategy.',
      a: '$40 = 2^3 \\times 5$. We need $10^k$ in the denominator. Take $k = 3$: multiply by $\\frac{5^2}{5^2}$. Then $\\frac{3}{40} = \\frac{3 \\times 5^2}{2^3 \\times 5 \\times 5^2} = \\frac{75}{2^3 \\times 5^3} = \\frac{75}{1000} = 0.075$. The missing factor was $5^2$.'
    },
    {
      q: 'Elaborate: In the proof for $\\frac{3}{7}$, why does the inequality $0 \\leq \\frac{3}{7} - s_n < \\frac{1}{10^n}$ prove convergence?',
      a: 'The inequality squeezes the gap between $s_n$ and $\\frac{3}{7}$. The gap is non-negative ($s_n$ never overshoots $\\frac{3}{7}$). The gap is less than $\\frac{1}{10^n}$, which approaches 0. A quantity that is non-negative and less than a number approaching 0 must itself approach 0. So $s_n$ approaches $\\frac{3}{7}$ exactly.'
    }
  ]

  // REFERENCE MODE
  config.reference.sections = [
    <>
      <h2>Proof Formulas and Key Results</h2>

      <h3>Finite Case Proof</h3>
      <div className="lrn-eq lrn-eq-display">{`$$\\frac{m}{2^k} = \\frac{q}{10^k} \\text{ where } q = \\frac{m \\times 10^k}{2^k} = m \\times 5^k$$`}</div>
      <p>
        {`When to use: Proves a fraction terminates by constructing the finite decimal. Supply the missing factor of 5 (or 2) to reach $10^k$.`}
      </p>

      <h3>Repeating Case Proof</h3>
      <div className="lrn-eq lrn-eq-display">{`$$0 \\leq \\frac{m}{n} - s_n < \\frac{1}{10^n}$$`}</div>
      <p>
        {`When to use: Proves the long division sequence approaches $\\frac{m}{n}$. The error bound shrinks to zero.`}
      </p>

      <h3>Finite Decimal Criterion</h3>
      <div className="lrn-eq lrn-eq-display">{`$$\\frac{m}{n} \\text{ (lowest terms) is finite} \\iff n = 2^a \\cdot 5^b$$`}</div>
      <p>
        When to use: Quick test. Factor the denominator. Only 2s and 5s means finite. Anything else
        means repeating.
      </p>

      <h3>Period of Repeating Decimals</h3>
      <table className="lrn-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pigeonhole principle</td>
            <td>Among n+1 remainders mod n, at least two match</td>
          </tr>
          <tr>
            <td>Period bound (prime p)</td>
            <td>{`Period of $\\frac{m}{p}$ divides $p - 1$`}</td>
          </tr>
          <tr>
            <td>Non-repeating prefix length</td>
            <td>{`$\\max(a, b)$ where denominator has $2^a \\cdot 5^b$ factor`}</td>
          </tr>
        </tbody>
      </table>
    </>
  ]

  return <LearningTemplate config={config} />
}

export default function DecimalExpansionProofs() {
  return <DecimalExpansionProofsContent />
}
