import { useState } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import { VizFigure } from '../../../../components/viz-figure'
import {
  FONT_BODY,
  FONT_CONTROL,
  FONT_LABEL,
  FONT_TEX,
  FONT_VALUE,
  FONT_VALUE_LG,
  FONT_VALUE_XL
} from '../../../../components/viz/scale-tokens'
import {
  Plot,
  Polyline,
  Dot,
  Arrow,
  Tex,
  Label,
  Slider
} from '../../../../components/viz/primitives'

// All six viz read theme-reactive colors from useVizColors() (where they use
// HTML styling) and are wrapped in VizFigure at their render site (id prefix
// 14.1.x). The number-line viz draw with the monochrome SVG primitives, which
// inherit FG/OPACITY internally and need no color prop.

// 14.1.1 Division with Remainder on a Number Line (interactive)
// Drag a (0–60) and d (2–9). Live: q = ⌊a/d⌋, r = a − qd. The number line is
// windowed around a so the ladder of multiples stays readable at any magnitude.
function Dvt_DivisionWithRemainder() {
  const [a, setA] = useState(39)
  const [d, setD] = useState(7)
  const q = Math.floor(a / d)
  const r = a - q * d

  const lo = Math.max(0, q - 1)
  const hi = q + 2
  const rungs = []
  for (let i = lo; i <= hi; i++) rungs.push(i)
  const xMin = lo * d - 0.5 * d
  const xMax = hi * d + 0.5 * d
  const mid = (xMin + xMax) / 2

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[-1.4, 1.55]} width={820} height={250}>
        <Arrow from={[xMin + 0.1 * d, 0]} to={[xMax - 0.05 * d, 0]} opacity={0.5} head={6} />

        {rungs.map(i => {
          const x = i * d
          const hot = i === q || i === q + 1
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, -0.13],
                  [x, 0.13]
                ]}
                opacity={hot ? 1 : 0.45}
                strokeWidth={hot ? 2 : 1}
              />
              <Label
                at={[x, -0.5]}
                anchor="middle"
                size={FONT_TEX}
                upper={false}
                opacity={hot ? 1 : 0.5}
              >
                {String(x)}
              </Label>
            </g>
          )
        })}

        <Tex at={[q * d, 0.34]} tex={`q\\,d`} anchor="middle" size={FONT_LABEL} opacity={0.6} />

        <Dot x={a} y={0} r={5} />
        <Tex at={[a, 0.66]} tex={`a=${a}`} anchor="middle" size={FONT_CONTROL} opacity={1} />

        {r > 0 && (
          <>
            <Polyline
              points={[
                [q * d, 1.0],
                [a, 1.0]
              ]}
              dash="4 3"
              opacity={0.7}
            />
            <Polyline
              points={[
                [q * d, 0.9],
                [q * d, 1.1]
              ]}
              opacity={0.6}
            />
            <Polyline
              points={[
                [a, 0.9],
                [a, 1.1]
              ]}
              opacity={0.6}
            />
            <Tex
              at={[(q * d + a) / 2, 1.3]}
              tex={`r=${r}`}
              anchor="middle"
              size={FONT_TEX}
              opacity={1}
            />
          </>
        )}

        <Tex
          at={[mid, -1.05]}
          tex={`${a} = ${q}\\times ${d} + ${r}`}
          anchor="middle"
          size={FONT_BODY}
          opacity={0.9}
        />
      </Plot>

      <Slider
        label="a"
        value={a}
        min={0}
        max={60}
        step={1}
        onChange={v => setA(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="d"
        value={d}
        min={2}
        max={9}
        step={1}
        onChange={v => setD(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}

// 14.1.2 Divisibility Checker (interactive)
// Input a number. Panel shows last digit, last two digits, digit sum,
// alternating sum, and which of rules 2/3/4/5/9/11 pass.
function Dvt_DivisibilityChecker() {
  const C = useVizColors()
  const [raw, setRaw] = useState('96')
  const val = raw.replace(/[^0-9]/g, '').replace(/^0+(\d)/, '$1') || '0'
  const digits = val.split('').map(Number)

  const lastDigit = digits[digits.length - 1]
  const lastTwo =
    digits.length >= 2 ? digits[digits.length - 2] * 10 + digits[digits.length - 1] : lastDigit

  const digitSum = digits.reduce((s, dg) => s + dg, 0)

  const rev = digits.slice().reverse()
  const altSum = rev.reduce((s, dg, i) => s + (i % 2 === 0 ? dg : -dg), 0)

  const digitSumWork = digits.join(' + ')
  const plusD = rev.filter((_, i) => i % 2 === 0)
  const minusD = rev.filter((_, i) => i % 2 === 1)
  const altWork = `(${plusD.join('+')}) − (${minusD.join('+') || '0'})`

  const rules = [
    {
      n: 2,
      label: 'Rule for 2',
      detail: `Last digit: ${lastDigit}`,
      pass: [0, 2, 4, 6, 8].includes(lastDigit)
    },
    {
      n: 3,
      label: 'Rule for 3',
      detail: `Digit sum: ${digitSumWork} = ${digitSum}`,
      pass: digitSum % 3 === 0
    },
    {
      n: 4,
      label: 'Rule for 4',
      detail: `Last two digits: ${digits.length >= 2 ? String(lastTwo).padStart(2, '0') : lastDigit}`,
      pass: lastTwo % 4 === 0
    },
    {
      n: 5,
      label: 'Rule for 5',
      detail: `Last digit: ${lastDigit}`,
      pass: lastDigit === 0 || lastDigit === 5
    },
    {
      n: 9,
      label: 'Rule for 9',
      detail: `Digit sum: ${digitSumWork} = ${digitSum}`,
      pass: digitSum % 9 === 0
    },
    {
      n: 11,
      label: 'Rule for 11',
      detail: `Alt sum: ${altWork} = ${altSum}`,
      pass: altSum % 11 === 0
    }
  ]

  return (
    <div style={{ fontFamily: "'D-DIN','D-DIN-Regular',monospace", padding: '16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <label
          style={{
            fontSize: FONT_TEX,
            color: C.fg,
            opacity: 0.7,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
        >
          Number
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={raw}
          onChange={e => setRaw(e.target.value.replace(/[^0-9]/g, '').slice(0, 15))}
          style={{
            background: 'transparent',
            border: `1px solid ${C.fg}`,
            borderRadius: 0,
            color: C.fg,
            fontSize: FONT_VALUE,
            padding: '4px 10px',
            width: 180,
            fontFamily: 'inherit',
            outline: 'none',
            opacity: 0.9
          }}
          aria-label="Enter a whole number to test divisibility"
        />
        <span
          style={{
            fontSize: FONT_VALUE,
            fontWeight: 'bold',
            color: C.fg,
            opacity: 0.85,
            minWidth: 60
          }}
        >
          {val}
        </span>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 8
        }}
      >
        {rules.map(rl => (
          <div
            key={rl.n}
            style={{
              border: `1px solid ${C.fg}`,
              borderLeft: `3px solid ${rl.pass ? C.accent : C.fg}`,
              padding: '8px 12px',
              opacity: rl.pass ? 1 : 0.45
            }}
          >
            <div
              style={{
                fontSize: FONT_LABEL,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: C.fg,
                opacity: 0.6
              }}
            >
              {rl.label}
            </div>
            <div
              style={{
                fontSize: FONT_TEX,
                color: rl.pass ? C.accent : C.fg,
                fontWeight: rl.pass ? 'bold' : 'normal',
                margin: '3px 0'
              }}
            >
              {rl.pass ? `✓ Divisible by ${rl.n}` : `✗ Not divisible by ${rl.n}`}
            </div>
            <div style={{ fontSize: FONT_LABEL, color: C.fg, opacity: 0.55 }}>{rl.detail}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 14.1.3 Rule-for-3 Decomposition (interactive)
// Type any number. Each place value p satisfies p = 3m + 1, so digit × p =
// 3·(digit·m) + digit. Every "3·(…)" term is divisible by 3; the leftover is the
// digit. So n = 3·(divisible part) + digit sum, and 3 | n exactly when 3 | sum.
function Dvt_RuleFor3Proof() {
  const C = useVizColors()
  const [raw, setRaw] = useState('96')
  const val = raw.replace(/[^0-9]/g, '').replace(/^0+(\d)/, '$1') || '0'
  const digits = val.split('').map(Number)
  const L = digits.length

  const terms = digits.map((dig, idx) => {
    const place = Math.pow(10, L - 1 - idx)
    const m = (place - 1) / 3
    return { dig, place, mult3: dig * m }
  })
  const sumMult = terms.reduce((s, t) => s + t.mult3, 0)
  const digitSum = terms.reduce((s, t) => s + t.dig, 0)
  const divisible = digitSum % 3 === 0
  const n = Number(val)

  const mono = { fontFamily: "'D-DIN','D-DIN-Regular',monospace" }
  const block = {
    border: `1px solid ${C.fg}`,
    padding: '8px 14px',
    flex: '1 1 0',
    minWidth: 0
  }
  const blockLabel = {
    fontSize: FONT_LABEL,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    opacity: 0.55,
    marginBottom: 4
  }

  return (
    <div style={{ ...mono, color: C.fg, padding: '16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <label
          style={{
            fontSize: FONT_TEX,
            opacity: 0.7,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
        >
          Number
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={raw}
          onChange={e => setRaw(e.target.value.replace(/[^0-9]/g, '').slice(0, 7))}
          style={{
            background: 'transparent',
            border: `1px solid ${C.fg}`,
            borderRadius: 0,
            color: C.fg,
            fontSize: FONT_VALUE,
            padding: '4px 10px',
            width: 140,
            fontFamily: 'inherit',
            outline: 'none',
            opacity: 0.9
          }}
          aria-label="Enter a whole number to decompose for the rule of 3"
        />
      </div>

      <div style={{ display: 'grid', gap: 4, marginBottom: 16 }}>
        {terms.map((t, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              gap: 10,
              fontSize: FONT_CONTROL
            }}
          >
            <span style={{ textAlign: 'right', opacity: 0.9 }}>
              {t.dig} × {t.place}
            </span>
            <span style={{ opacity: 0.4 }}>=</span>
            <span style={{ textAlign: 'left' }}>
              <span style={{ opacity: 0.55 }}>3 × {t.mult3}</span>
              <span style={{ opacity: 0.4 }}> + </span>
              <span style={{ color: C.accent, fontWeight: 'bold' }}>{t.dig}</span>
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
        <div style={block}>
          <div style={blockLabel}>Always divisible by 3</div>
          <div style={{ fontSize: FONT_BODY }}>3 × {sumMult}</div>
        </div>
        <div style={{ ...block, borderColor: C.accent }}>
          <div style={{ ...blockLabel, color: C.accent, opacity: 0.8 }}>
            Digit sum (the leftover)
          </div>
          <div style={{ fontSize: FONT_BODY, color: C.accent, fontWeight: 'bold' }}>
            {terms.map(t => t.dig).join(' + ')} = {digitSum}
          </div>
        </div>
      </div>

      <div style={{ fontSize: FONT_TEX, opacity: 0.85, lineHeight: 1.5 }}>
        {n} = 3 × {sumMult} + {digitSum}.{' '}
        {divisible
          ? `3 divides ${digitSum}, so 3 divides ${n}. ✓`
          : `3 does not divide ${digitSum}, so 3 does not divide ${n}.`}
      </div>
    </div>
  )
}

// 14.1.4 Rule-for-4 Last-Two-Digits (interactive)
// Type any number. The last two digits are boxed. Since 100 = 4 × 25, every
// multiple of 100 is divisible by 4, so n = 100·rest + lastTwo and 4 | n exactly
// when 4 | lastTwo. The split is computed live.
function Dvt_RuleFor4LastTwo() {
  const C = useVizColors()
  const [raw, setRaw] = useState('836')
  const val = raw.replace(/[^0-9]/g, '').replace(/^0+(\d)/, '$1') || '0'
  const digits = val.split('')
  const L = digits.length
  const n = Number(val)
  const lastTwo = n % 100
  const rest = Math.floor(n / 100)
  const q4 = Math.floor(lastTwo / 4)
  const r4 = lastTwo % 4
  const divisible = r4 === 0

  const lead = digits.slice(0, Math.max(0, L - 2))
  const tail = digits.slice(Math.max(0, L - 2))

  const mono = { fontFamily: "'D-DIN','D-DIN-Regular',monospace" }

  return (
    <div style={{ ...mono, color: C.fg, padding: '16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <label
          style={{
            fontSize: FONT_TEX,
            opacity: 0.7,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
        >
          Number
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={raw}
          onChange={e => setRaw(e.target.value.replace(/[^0-9]/g, '').slice(0, 7))}
          style={{
            background: 'transparent',
            border: `1px solid ${C.fg}`,
            borderRadius: 0,
            color: C.fg,
            fontSize: FONT_VALUE,
            padding: '4px 10px',
            width: 140,
            fontFamily: 'inherit',
            outline: 'none',
            opacity: 0.9
          }}
          aria-label="Enter a whole number to test divisibility by 4"
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: FONT_VALUE_XL,
          letterSpacing: '0.04em',
          marginBottom: 18
        }}
      >
        {lead.map((ch, i) => (
          <span key={i} style={{ opacity: 0.55, padding: '0 2px' }}>
            {ch}
          </span>
        ))}
        <span
          style={{
            border: `2px solid ${C.accent}`,
            color: C.accent,
            fontWeight: 'bold',
            padding: '2px 8px',
            marginLeft: lead.length ? 6 : 0
          }}
        >
          {tail.join('')}
        </span>
      </div>

      <div style={{ fontSize: FONT_CONTROL, opacity: 0.9, marginBottom: 8 }}>
        {n} = 100 × {rest} + <span style={{ color: C.accent, fontWeight: 'bold' }}>{lastTwo}</span>
      </div>
      <div style={{ fontSize: FONT_TEX, opacity: 0.7, marginBottom: 12, lineHeight: 1.5 }}>
        4 divides 100 × {rest} (because 100 = 4 × 25), so 4 divides {n} exactly when 4 divides{' '}
        {lastTwo}.
      </div>

      <div style={{ fontSize: FONT_TEX, opacity: 0.85, lineHeight: 1.5 }}>
        {divisible
          ? `${lastTwo} = 4 × ${q4}, so 4 divides ${n}. ✓`
          : `${lastTwo} = 4 × ${q4} + ${r4}, so 4 does not divide ${n}.`}
      </div>
    </div>
  )
}

// 14.1.5 Alternating Sum for Rule of 11 (interactive)
// Type any number. Each digit gets a sign by position (ones +, tens −, …). The
// alternating sum = (+ positions) − (− positions). 11 | n exactly when 11 | sum.
function Dvt_AlternatingSum() {
  const C = useVizColors()
  const [raw, setRaw] = useState('814')
  const val = raw.replace(/[^0-9]/g, '').replace(/^0+(\d)/, '$1') || '0'
  const digits = val.split('').map(Number)
  const L = digits.length
  const places = [
    'ones',
    'tens',
    'hundreds',
    'thousands',
    'ten thousands',
    'hundred thousands',
    'millions'
  ]

  const cells = digits.map((dg, i) => {
    const fromRight = L - 1 - i
    return { d: dg, plus: fromRight % 2 === 0, place: places[fromRight] || `10^${fromRight}` }
  })
  const altSum = cells.reduce((s, c) => s + (c.plus ? c.d : -c.d), 0)
  const plusD = cells.filter(c => c.plus).map(c => c.d)
  const minusD = cells.filter(c => !c.plus).map(c => c.d)
  const divisible = altSum % 11 === 0
  const n = Number(val)

  const mono = { fontFamily: "'D-DIN','D-DIN-Regular',monospace" }

  return (
    <div style={{ ...mono, color: C.fg, padding: '16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <label
          style={{
            fontSize: FONT_TEX,
            opacity: 0.7,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
        >
          Number
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={raw}
          onChange={e => setRaw(e.target.value.replace(/[^0-9]/g, '').slice(0, 7))}
          style={{
            background: 'transparent',
            border: `1px solid ${C.fg}`,
            borderRadius: 0,
            color: C.fg,
            fontSize: FONT_VALUE,
            padding: '4px 10px',
            width: 140,
            fontFamily: 'inherit',
            outline: 'none',
            opacity: 0.9
          }}
          aria-label="Enter a whole number to test divisibility by 11"
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 14,
          flexWrap: 'wrap',
          marginBottom: 18
        }}
      >
        {cells.map((c, i) => (
          <div key={i} style={{ textAlign: 'center', minWidth: 40 }}>
            <div
              style={{
                fontSize: FONT_BODY,
                color: c.plus ? C.accent : C.fg,
                opacity: c.plus ? 0.95 : 0.6
              }}
            >
              {c.plus ? '+' : '−'}
            </div>
            <div style={{ fontSize: FONT_VALUE_LG, opacity: 0.9 }}>{c.d}</div>
            <div style={{ fontSize: FONT_LABEL, opacity: 0.45 }}>{c.place}</div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: FONT_CONTROL, opacity: 0.9, marginBottom: 8 }}>
        <span style={{ color: C.accent }}>({plusD.join(' + ') || '0'})</span> − (
        {minusD.join(' + ') || '0'}) = <span style={{ fontWeight: 'bold' }}>{altSum}</span>
      </div>
      <div style={{ fontSize: FONT_TEX, opacity: 0.85, lineHeight: 1.5 }}>
        {divisible
          ? `11 divides ${altSum}, so 11 divides ${n}. ✓`
          : `11 does not divide ${altSum}, so 11 does not divide ${n}.`}
      </div>
    </div>
  )
}

// 14.1.6 Sum–Difference Lemma as a Multiples Ladder (interactive)
// One shared axis with a tick at every multiple of x. B = b·x and C = c·x both
// land on rungs; their sum A = (b+c)·x therefore lands on a rung too. You SEE
// the third value forced onto the ladder, not just read it. Sliders set x, b, c.
function Dvt_SumDifferenceLadder() {
  const [x, setX] = useState(7)
  const [b, setB] = useState(6)
  const [c, setC] = useState(4)
  const B = b * x
  const Cv = c * x
  const A = B + Cv
  const total = b + c

  const pad = x * 0.7
  const xMin = -pad
  const xMax = A + pad

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[-1.5, 1.7]} width={820} height={260}>
        <Arrow from={[xMin + 0.3 * x, 0]} to={[xMax - 0.15 * x, 0]} opacity={0.5} head={6} />

        {/* multiples ladder */}
        {Array.from({ length: total + 1 }, (_, k) => {
          const xpos = k * x
          const hot = k === 0 || k === b || k === total
          return (
            <Polyline
              key={k}
              points={[
                [xpos, -0.12],
                [xpos, 0.12]
              ]}
              opacity={hot ? 1 : 0.3}
              strokeWidth={hot ? 2 : 1}
            />
          )
        })}

        {/* marked rungs */}
        <Dot x={0} y={0} r={4} />
        <Dot x={B} y={0} r={5} />
        <Dot x={A} y={0} r={5} />

        {/* B segment: 0 → B */}
        <Polyline
          points={[
            [0, 0.55],
            [B, 0.55]
          ]}
          opacity={0.85}
          strokeWidth={2}
        />
        <Tex
          at={[B / 2, 0.92]}
          tex={`B = ${b}\\times ${x} = ${B}`}
          anchor="middle"
          size={FONT_TEX}
        />

        {/* C segment: B → A */}
        <Polyline
          points={[
            [B, 0.55],
            [A, 0.55]
          ]}
          opacity={0.55}
          strokeWidth={2}
          dash="5 3"
        />
        <Tex
          at={[(B + A) / 2, 0.92]}
          tex={`C = ${c}\\times ${x} = ${Cv}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={0.75}
        />

        {/* A bracket: 0 → A */}
        <Polyline
          points={[
            [0, 1.25],
            [A, 1.25]
          ]}
          opacity={1}
          strokeWidth={2}
        />
        <Tex
          at={[A / 2, 1.55]}
          tex={`A = ${total}\\times ${x} = ${A}`}
          anchor="middle"
          size={FONT_CONTROL}
        />

        {/* equation readout */}
        <Tex
          at={[A / 2, -1.05]}
          tex={`${B} + ${Cv} = ${A} = ${total}\\times ${x}`}
          anchor="middle"
          size={FONT_CONTROL}
          opacity={0.9}
        />
      </Plot>

      <div
        style={{
          fontFamily: "'D-DIN','D-DIN-Regular',monospace",
          fontSize: FONT_LABEL,
          opacity: 0.55,
          textAlign: 'center',
          margin: '4px 0 2px'
        }}
      >
        x divides B and C, so it is forced to divide their sum A.
      </div>

      <Slider
        label="x (divisor)"
        value={x}
        min={2}
        max={12}
        step={1}
        onChange={v => setX(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={12}
        step={1}
        onChange={v => setB(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="c"
        value={c}
        min={1}
        max={12}
        step={1}
        onChange={v => setC(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}

// Divisibility rules table (plain content table, not a viz)
function DivisibilityRulesTable() {
  const rows = [
    ['by 2', 'Last digit: 0, 2, 4, 6, 8', '374', '375'],
    ['by 3', 'Digit sum divisible by 3', '96 (sum 15)', '82 (sum 10)'],
    ['by 4', 'Last two digits divisible by 4', '836 (36 = 9 × 4)', '62,318 (18 = 4 × 4 + 2)'],
    ['by 5', 'Last digit: 0 or 5', '385', '382'],
    ['by 9', 'Digit sum divisible by 9', '729 (sum 18)', '96 (sum 15)'],
    ['by 11', 'Alternating sum divisible by 11', '814 (alt sum 11)', '736,492 (alt sum −13)']
  ]

  return (
    <table className="lrn-table">
      <thead>
        <tr>
          <th>Rule</th>
          <th>What to check</th>
          <th>Passes</th>
          <th>Fails</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([rule, check, pass, fail]) => (
          <tr key={rule}>
            <td className="lrn-table-section-header">{rule}</td>
            <td>{check}</td>
            <td>{pass}</td>
            <td>{fail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// Powers-of-10 remainder table (plain content table, not a viz)
// Each cell is 10^k mod d. The row's remainder pattern fixes its rule: all 1s →
// digit sum (3, 9); +1/−1 → alternating sum (11); a remainder that drops to 0 →
// only the trailing digits matter (2/5 after 10^0, 4 after 10^1, 8 after 10^2).
function PowersOfTenRemainderTable() {
  const ks = [0, 1, 2, 3, 4, 5, 6]
  const rows = [
    { d: 2, cells: ['1', '0', '0', '0', '0', '0', '0'], rule: 'last 1 digit' },
    { d: 5, cells: ['1', '0', '0', '0', '0', '0', '0'], rule: 'last 1 digit' },
    { d: 4, cells: ['1', '2', '0', '0', '0', '0', '0'], rule: 'last 2 digits' },
    { d: 8, cells: ['1', '2', '4', '0', '0', '0', '0'], rule: 'last 3 digits' },
    { d: 3, cells: ['1', '1', '1', '1', '1', '1', '1'], rule: 'digit sum' },
    { d: 9, cells: ['1', '1', '1', '1', '1', '1', '1'], rule: 'digit sum' },
    { d: 11, cells: ['+1', '−1', '+1', '−1', '+1', '−1', '+1'], rule: 'alternating sum' }
  ]

  return (
    <table className="lrn-table">
      <thead>
        <tr>
          <th>mod</th>
          {ks.map(k => (
            <th key={k}>
              10<sup>{k}</sup>
            </th>
          ))}
          <th>So check</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ d, cells, rule }) => (
          <tr key={d}>
            <td className="lrn-table-section-header">{d}</td>
            {cells.map((c, i) => (
              <td key={i}>{c}</td>
            ))}
            <td>{rule}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function useConfig() {
  const config = {
    cssPrefix: 'dvt',
    documentTitle: 'Divisibility Tests - AETHER',
    learning: {
      groupTitle: 'Number Theory',
      category: 'Number Theory',
      title: 'Divisibility Tests',
      subtitle:
        'Quick checks that tell you whether one number divides another. No long division needed.',
      sections: [
        // Section 0: Division with Remainder
        <>
          <h2>Division with Remainder</h2>
          <p>{`Pick any whole number $a$ and any positive whole number $d$. You can always write $a = qd + r$. Here $q$ is the quotient and $r$ is the remainder, with $0 \\leq r < d$.`}</p>
          <p>{`For example, $39 = 5 \\times 7 + 4$. The quotient is $q = 5$ and the remainder is $r = 4$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY THIS MATTERS</span>
            <p>
              Every divisibility rule is just a fast way to ask: "Is the remainder zero?" Instead of
              dividing, you check a pattern in the digits.
            </p>
            <p>
              A supermarket cashier splitting 39 items into baskets of 7 gets 5 baskets with 4 left
              over. Divisibility tells you instantly whether the split is exact.
            </p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`What are $q$ and $r$ when you divide $50$ by $7$? Work it out before checking.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$50 = 7 \\times 7 + 1$, so $q = 7$ and $r = 1$. The remainder $1$ is less than $7$, which is required.`}</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">The Division Equation</span>
            <div className="lrn-definition-desc">
              <p>{`You already know every $a = qd + r$ with $0 \\leq r < d$. Our new question: is the remainder $r$ zero?`}</p>
            </div>
          </div>

          <VizFigure title="Division with Remainder on a Number Line" size="wide" aspect="auto">
            <Dvt_DivisionWithRemainder />
          </VizFigure>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Divisibility Notation</span>
            <div className="lrn-definition-desc">
              <p>{`Recall $y \\mid x$ means $y$ divides $x$ (the remainder is $0$). We add $y \\nmid x$ for "$y$ does not divide $x$".`}</p>
            </div>
          </div>

          <p>{`You already know why $(q, r)$ is unique: $a$ lands in exactly one gap between rungs $qd$ and $(q+1)d$ on the multiples ladder. We build on that here without reproving it.`}</p>

          <div className="lrn-callout">
            <p>{`$0$ is a multiple of every nonzero integer. This is because $0 = 0 \\times d$ for any $d$. So every nonzero integer divides $0$.`}</p>
          </div>
        </>,

        // Section 1: Generalities about Divisibility
        <>
          <h2>Generalities about Divisibility</h2>
          <p>{`Recall that $y \\mid x$ (with $y \\neq 0$) means $x = zy$ for some integer $z$. We use that here.`}</p>

          <h3>The Sum-Difference Lemma</h3>
          <p>
            A lemma is a small fact we prove once and reuse. This one is the key tool behind every
            divisibility rule. Remember it and the proofs write themselves.
          </p>
          <p>{`If $A = B + C$ and a nonzero integer $x$ divides any two of $A$, $B$, $C$, then $x$ divides the third.`}</p>

          <div className="lrn-proof">
            <span className="lrn-proof-label">PROOF</span>
            <p>
              <strong>Case 1:</strong>{' '}
              {`$x \\mid B$ and $x \\mid C$. Write $B = wx$ and $C = zx$. Then $A = B + C = (w + z)x$, so $x \\mid A$.`}
            </p>
            <p>
              <strong>Case 2:</strong>{' '}
              {`$x \\mid A$ and $x \\mid C$. Then $B = A - C = wx - zx = (w - z)x$, so $x \\mid B$.`}
            </p>
            <p>The proof uses only the distributive law. No extra machinery needed.</p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Add or subtract two multiples of $x$ and you always land on another multiple of $x$.`}</p>
            <p>{`If $B$ and $C$ are both multiples of $x$, their sum $A = B + C$ must also be a multiple of $x$.`}</p>
            <p>{`Think of multiples as "every $x$th step" on the number line. Adding two such steps stays on the grid.`}</p>
          </div>

          <div className="lrn-example">
            <span className="lrn-example-label">EXAMPLE: Lemma in action (whole numbers)</span>
            <p>{`Let $A = 105$, $C = 35$, $B = 105 - 35 = 70$. Both $105$ and $35$ are multiples of $7$. The lemma says $7 \\mid 70$. Verify: $70 = 10 \\times 7$. ✓`}</p>
            <p>{`Formally: $105 = m \\times 7$ and $35 = n \\times 7$, so $B = 105 - 35 = (m - n) \\times 7$.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why did we write $B = 105 - 35$ rather than just saying $B = 70$? What does the difference form reveal that the plain value does not?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Writing $B = 105 - 35$ shows that $B$ is a difference of two multiples of $7$. That makes the lemma directly applicable. If you only know $B = 70$, you must verify divisibility by $7$ separately. The algebraic form carries the reason inside it.`}</p>
            </details>
          </div>

          <div className="lrn-example">
            <span className="lrn-example-label">EXAMPLE: Lemma in a sum</span>
            <p>{`Let $B = 156$, $C = 91$, $A = 156 + 91 = 247$. Both $156$ and $91$ are multiples of $13$. The lemma predicts $13 \\mid 247$. Verify: $247 = 19 \\times 13$. ✓`}</p>
            <p>{`Formally: $156 = 12 \\times 13$ and $91 = 7 \\times 13$, so $A = (12 + 7) \\times 13$.`}</p>
          </div>

          <VizFigure title="Sum–Difference Lemma as a Multiples Ladder" size="wide" aspect="auto">
            <Dvt_SumDifferenceLadder />
          </VizFigure>

          <h3>Transitivity and Obstruction</h3>
          <p>Two more tools complete the toolkit for this topic.</p>

          <p>{`Transitivity means: if A reaches B and B reaches C, then A reaches C.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`You know $3 \\mid 6$ and $6 \\mid 24$. Does $3 \\mid 24$? Decide before reading on.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. $24 = 8 \\times 3$, so $3 \\mid 24$. Transitivity guarantees it.`}</p>
            </details>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-label">TRANSITIVITY</span>
            <p>{`If $A \\mid B$ and $B \\mid C$, then $A \\mid C$.`}</p>
            <p>{`Proof: $B = mA$ and $C = nB$, so $C = nB = n(mA) = (nm)A$. Since $nm$ is an integer, $A \\mid C$.`}</p>
          </div>

          <div className="lrn-example">
            <span className="lrn-example-label">EXAMPLE</span>
            <p>{`$3 \\mid 6$ (since $6 = 2 \\times 3$) and $6 \\mid 24$ (since $24 = 4 \\times 6$). So $3 \\mid 24$. Check: $24 = 8 \\times 3$. ✓`}</p>
            <p>{`You can now chain divisibility: a fact about a small number carries up to its multiples.`}</p>
          </div>

          <p>{`Obstruction is the blocking rule: it tells you when a factor is impossible.`}</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Suppose $9$ does not divide some number $n$. Can $27$ divide $n$? Predict first.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. $27$ is a multiple of $9$. If $9 \\nmid n$, then $27 \\nmid n$ too.`}</p>
            </details>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-label">OBSTRUCTION</span>
            <p>{`If $A \\nmid C$, then no multiple of $A$ can divide $C$.`}</p>
            <p>{`Proof by contradiction: suppose $B$ is a multiple of $A$ and $B \\mid C$. Then $A \\mid B$ and $B \\mid C$, so by transitivity $A \\mid C$. This contradicts the assumption.`}</p>
          </div>

          <div className="lrn-example">
            <span className="lrn-example-label">EXAMPLE</span>
            <p>{`Say $9 \\nmid n$. Then $27 \\nmid n$, because $27$ is a multiple of $9$ ($27 = 3 \\times 9$). If $27$ divided $n$, transitivity would force $9 \\mid n$, which is false.`}</p>
            <p>{`You can now rule out a divisor fast: fail the easy factor first and skip the hard check.`}</p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Obstruction says: if $A$ cannot reach $C$ in one step, no intermediate multiple helps.`}</p>
            <p>{`Multiples of $A$ are $0, A, 2A, 3A, \\ldots$ They are evenly spaced.`}</p>
            <p>{`None of them can divide $C$ unless $A$ itself does.`}</p>
          </div>
        </>,

        // Section 2: Divisibility Rules
        <>
          <h2>Divisibility Rules</h2>
          <p>
            Every divisibility rule follows from one key fact: what remainder each power of 10
            leaves when divided by the target number.
          </p>
          <p>
            We prove this powers-of-10 fact in full in the next section. For now, use it to read
            each rule below.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Without computing: is $123{,}456{,}789$ divisible by $3$? Predict, then find out below.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Digit sum: $1+2+3+4+5+6+7+8+9 = 45$. Since $3 \\mid 45$, yes, $3 \\mid 123{,}456{,}789$. ✓`}</p>
            </details>
          </div>

          <DivisibilityRulesTable />

          <h3>Rule for 2</h3>
          <p>{`You already know the test: a whole number is even when its ones digit is $0$, $2$, $4$, $6$, or $8$, and odd otherwise. Here you see why the Sum-Difference Lemma forces that test.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Write any whole number as $n = 10b + k$, where $k$ is the ones digit.`}</p>
            <p>{`The symbol $\\iff$ means "exactly when": each side is true only if the other side is true too.`}</p>
            <p>{`Since $10b = (5b) \\times 2$, we have $2 \\mid 10b$. By the Sum-Difference Lemma, $2 \\mid n \\iff 2 \\mid k$.`}</p>
            <p>{`The ones digit $k$ is between $0$ and $9$. It is even exactly when $k \\in \\{0, 2, 4, 6, 8\\}$.`}</p>
          </div>

          <div className="lrn-example">
            <span className="lrn-example-label">EXAMPLE</span>
            <p>{`$21{,}374$ is even because its ones digit is $4$. $6{,}241$ is odd because its ones digit is $1$.`}</p>
          </div>

          <h3>Rule for 5</h3>
          <p>{`A whole number is divisible by $5$ if and only if its ones digit is $0$ or $5$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Same structure as the rule for $2$: write $n = 10b + k$.`}</p>
            <p>{`Since $10 = 2 \\times 5$, we have $5 \\mid 10b$. So $5 \\mid n \\iff 5 \\mid k$.`}</p>
            <p>{`The ones digit $k$ is in $\\{0, \\ldots, 9\\}$. It is divisible by $5$ exactly when $k = 0$ or $k = 5$.`}</p>
          </div>

          <div className="lrn-compare">
            <span className="lrn-compare-label">CONTRAST: Rule for 2 vs. Rule for 5</span>
            <p>{`Both rules look only at the ones digit. This is because $10 = 2 \\times 5$: the number $10$ is divisible by both $2$ and $5$, so higher place values contribute nothing to divisibility by either.`}</p>
            <p>{`The difference is the threshold. For $2$, five values work: $\\{0, 2, 4, 6, 8\\}$. For $5$, only two values work: $\\{0, 5\\}$. Fewer options means a stricter rule.`}</p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">REAL WORLD</span>
            <p>
              A cashier counts nickels (5-cent coins). A pile is worth an exact number of cents only
              if the total ends in 0 or 5. The rule for 5 is instant: one glance at the last digit.
            </p>
          </div>

          <h3>Rule for 3</h3>
          <p>{`A whole number is divisible by $3$ if and only if the sum of its digits is divisible by $3$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Every power of $10$ leaves remainder $1$ when divided by $3$: $10^n = (33\\ldots3 \\times 3) + 1$.`}</p>
            <p>{`In the expansion of any number, each digit $d_k$ in the $10^k$ place contributes $d_k \\times 10^k$.`}</p>
            <p>{`We write $10^k \\equiv 1 \\pmod{3}$ as shorthand. It means $10^k$ leaves remainder $1$ when divided by $3$. So for $a = 10^k$, dividing by $3$ leaves remainder $1$.`}</p>
            <p>{`Since $10^k$ leaves remainder $1$, each term contributes $d_k$ to the remainder. So the total remainder equals the digit sum's remainder.`}</p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE: Rule for 3 applied to 96</span>
              <ol className="lrn-list">
                <li>{`Expand: $96 = (9 \\times 10) + 6$.`}</li>
                <li>{`Replace $10$ with $(9 + 1)$: $96 = 9 \\times (9 + 1) + 6 = (9 \\times 9) + 9 + 6$.`}</li>
                <li>{`Group the part divisible by $3$: $96 = (9 \\times 9) + (9 + 6)$. Since $3 \\mid (9 \\times 9)$, by the Sum-Difference Lemma: $3 \\mid 96 \\iff 3 \\mid (9 + 6) = 15$. Since $3 \\mid 15$, we confirm $3 \\mid 96$. ✓`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL: Apply to 581</span>
              <ol className="lrn-list">
                <li>{`Expand: $581 = (5 \\times 100) + (8 \\times 10) + 1$.`}</li>
                <li>{`Replace powers of $10$: $5 \\times (33 \\times 3 + 1) + 8 \\times (3 \\times 3 + 1) + 1$.`}</li>
                <li>{`Group and decide: is $3 \\mid 581$? Finish: ___`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Is $3 \\mid 642$? Show your work using the digit sum.`}</p>
            </div>
          </div>

          <VizFigure title="Rule for 3: Proof Diagram" size="body" aspect="auto">
            <Dvt_RuleFor3Proof />
          </VizFigure>

          <div className="lrn-example">
            <span className="lrn-example-label">QUICK CHECKS</span>
            <p>{`$3 \\mid 642$ because $6 + 4 + 2 = 12$ and $3 \\mid 12$. Verify: $642 = 214 \\times 3$.`}</p>
            <p>{`$3 \\nmid 277$ because $2 + 7 + 7 = 16$ and $3 \\nmid 16$. Verify: $277 = 92 \\times 3 + 1$.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The proof for $96$ replaced $10$ with $(9 + 1)$. Why was $(9 + 1)$ the right split? What property of $9$ makes the proof work?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$9$ is a multiple of $3$. Writing $10 = 9 + 1$ separates the "divisible part" from a remainder of exactly $1$. That $1$ is what makes each digit contribute its face value to the total remainder. Any other split (like $6 + 4$) would leave a remainder that is not $1$, making the algebra messier.`}</p>
            </details>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>Try it yourself:</strong>{' '}
              {`Is $67{,}814{,}235$ divisible by $3$? Add the digits and check.`}
            </p>
            <p>{`(Digit sum: $36$, which is divisible by $3$. So the number is too. ✓)`}</p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">REAL WORLD</span>
            <p>
              Three friends split a restaurant bill. Before dividing, one person checks: "Is the
              total divisible by 3?" They add the digits and know instantly. No calculator needed.
            </p>
          </div>

          <h3>Rule for 9</h3>
          <p>{`A whole number is divisible by $9$ if and only if the sum of its digits is divisible by $9$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Exactly the same argument as for $3$. Every power of $10$ also leaves remainder $1$ when divided by $9$ (see Section 3 for the residue identities).`}</p>
          </div>

          <div className="lrn-compare">
            <span className="lrn-compare-label">CONTRAST: Rule for 3 vs. Rule for 9</span>
            <p>{`Both use the digit sum because $10^n \\equiv 1 \\pmod{3}$ and $10^n \\equiv 1 \\pmod{9}$. The only difference is the threshold.`}</p>
            <p>{`If the digit sum is $12$: $3 \\mid 12$ (divisible by $3$) but $9 \\nmid 12$ (not divisible by $9$). If the digit sum is $27$: both $3 \\mid 27$ and $9 \\mid 27$. The rule for $9$ is strictly tighter.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Can a number be divisible by $9$ but not by $3$? Why or why not?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`No. $3 \\mid 9$. By the Transitivity Lemma, if $9 \\mid n$ then $3 \\mid 9$ and $9 \\mid n$ together give $3 \\mid n$. Divisibility by $9$ always implies divisibility by $3$. The reverse is not true.`}</p>
            </details>
          </div>

          <h3>Rule for 4</h3>
          <p>{`A whole number is divisible by $4$ if and only if the number formed by its tens and ones places is divisible by $4$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`$100 = 4 \\times 25$, so every multiple of $100$ is divisible by $4$.`}</p>
            <p>{`Write any number as $n = 100m + t$, where $t$ is the number in the tens and ones places.`}</p>
            <p>{`Since $4 \\mid 100m$, the Sum-Difference Lemma gives $4 \\mid n \\iff 4 \\mid t$.`}</p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE: 836 and 62,318</span>
              <ol className="lrn-list">
                <li>{`$836 = 800 + 36$. Since $4 \\mid 800$ (= $8 \\times 100$), the lemma gives $4 \\mid 836 \\iff 4 \\mid 36$. Check: $36 = 9 \\times 4$. ✓ So $4 \\mid 836$.`}</li>
                <li>{`$62{,}318 = 62{,}300 + 18$. Since $4 \\mid 62{,}300$ (= $623 \\times 100$), the lemma gives $4 \\mid 62{,}318 \\iff 4 \\mid 18$. Check: $18 = 4 \\times 4 + 2$, so $4 \\nmid 18$. Therefore $4 \\nmid 62{,}318$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL: Is 4 | 1,348?</span>
              <ol className="lrn-list">
                <li>{`Write $1{,}348 = 1{,}300 + 48$.`}</li>
                <li>{`Is $4 \\mid 1{,}300$? (Hint: $1{,}300 = 13 \\times 100$.) Yes. So apply the lemma: is $4 \\mid 48$? Finish: ___`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Is $4 \\mid 2{,}516$? Check only the last two digits.`}</p>
            </div>
          </div>

          <VizFigure title="Rule for 4: Last Two Digits" size="body" aspect="auto">
            <Dvt_RuleFor4LastTwo />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`For the rule for $4$, why does $100$ being divisible by $4$ mean we only need to check the last two digits? What would happen if we checked only the last digit instead?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Because $4 \\mid 100$, every contribution from the hundreds place and above is a multiple of $100$, so divisible by $4$. They contribute $0$ to the remainder. Only the last two digits ($t$) determine divisibility. If you checked only the last digit, you would apply the rule for $2$, not $4$. A number ending in $2$ is even, but $2$ is not divisible by $4$.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <span className="lrn-compare-label">CONTRAST: Rule for 3 vs. Rule for 4</span>
            <p>{`For $3$: all digits matter equally because every power of $10$ contributes $+1$ to the remainder. For $4$: only the tens and ones places matter because $100 \\equiv 0 \\pmod{4}$. Higher place values vanish entirely.`}</p>
            <p>{`One rule uses all digits. The other ignores most of them. The difference comes from whether the relevant power of $10$ is $\\equiv 1$ or $\\equiv 0$.`}</p>
          </div>

          <h3>Rule for 11</h3>
          <p>{`A whole number is divisible by $11$ if and only if its alternating sum of digits is divisible by $11$.`}</p>
          <p>{`The alternating sum is: (ones digit + hundreds digit + ten-thousands digit + $\\ldots$) minus (tens digit + thousands digit + hundred-thousands digit + $\\ldots$).`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Odd powers of $10$ leave remainder $-1$ mod $11$. Even powers leave remainder $+1$ mod $11$ (see Section 3 for the residue identities).`}</p>
            <p>
              {`Each digit picks up a $+1$ or $-1$ factor depending on its position. The result is an alternating sum.`}
            </p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE: 814</span>
              <ol className="lrn-list">
                <li>{`Expand: $814 = (8 \\times 10^2) + (1 \\times 10) + 4$.`}</li>
                <li>{`Replace powers: $8 \\times (9 \\times 11 + 1) + 1 \\times (1 \\times 11 + (-1)) + 4$.`}</li>
                <li>{`Group: $814 = [(8 \\times 9) + (1 \\times 1)] \\times 11 + (8 - 1 + 4) = (73 \\times 11) + 11$.`}</li>
                <li>{`Since $11 \\mid (73 \\times 11)$ and $11 \\mid 11$, we get $11 \\mid 814$. Verify: $814 = 74 \\times 11$. ✓`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL: Is 11 | 286?</span>
              <p>Digits of 286: hundreds = 2, tens = 8, ones = 6.</p>
              <ol className="lrn-list">
                <li>Alternating sum = (ones + hundreds) minus tens = (6 + 2) minus 8 = ___</li>
                <li>Is the result divisible by 11? Conclude: ___</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Is $11 \\mid 39{,}204$? Compute the alternating sum and decide.`}</p>
            </div>
          </div>

          <VizFigure title="Rule for 11: Alternating Sum" size="body" aspect="auto">
            <Dvt_AlternatingSum />
          </VizFigure>

          <div className="lrn-example">
            <span className="lrn-example-label">EXAMPLE: Alternating sum of 736492</span>
            <p>{`Positions from the right: ones($+$), tens($-$), hundreds($+$), thousands($-$), ten-thousands($+$), hundred-thousands($-$).`}</p>
            <p>{`Alternating sum $= (2 + 4 + 3) - (9 + 6 + 7) = 9 - 22 = -13$. Since $11 \\nmid (-13)$, we get $11 \\nmid 736{,}492$.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does the rule for $11$ use an alternating sum while the rules for $3$ and $9$ use a plain sum? What is different about powers of $10$ modulo $11$ compared to modulo $3$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Modulo $3$, every power of $10$ leaves remainder $1$. So every digit contributes with the same sign: plain digit sum. Modulo $11$, even powers leave $+1$ and odd powers leave $-1$. So digits alternate in sign: alternating sum.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">REAL WORLD</span>
            <p>
              Older book ISBN codes add an extra check digit. The code is valid only when a weighted
              total divides by 11. That divide-by-11 check catches typing mistakes the moment you
              enter the number.
            </p>
          </div>

          <h3>Rule for 7 (Not Worth Knowing)</h3>
          <p>{`A divisibility rule for $7$ exists. But the calculation is so involved that it is faster to just divide. Skip it.`}</p>

          <div className="lrn-compare">
            <span className="lrn-compare-label">CONTRAST: Why 7 Is Hard and 11 Is Easy</span>
            <p>{`Both $7$ and $11$ are primes near $10$. The rule for $11$ is clean because $10 \\equiv -1 \\pmod{11}$. That creates a simple alternating pattern.`}</p>
            <p>{`For $7$, powers of $10$ cycle through $1, 3, 2, 6, 4, 5$ modulo $7$ with no simple pattern. So the rule is messy and not worth memorizing.`}</p>
            <p>
              {`Instead, test divisibility by 7 by dividing: $n \\div 7$ on any calculator takes one second.`}
            </p>
          </div>

          <h3>Rules for 6 and 8</h3>
          <p>Here is what these rules are:</p>

          <div className="lrn-callout">
            <p>
              <strong>Rule for 6:</strong>{' '}
              {`A number is divisible by $6$ if and only if it is divisible by both $2$ and $3$. Check both rules: even ones digit AND digit sum divisible by $3$.`}
            </p>
            <p>
              <strong>Rule for 8:</strong>{' '}
              {`A number is divisible by $8$ if and only if the number formed by its hundreds, tens, and ones places is divisible by $8$. This works because $1000 = 8 \\times 125$, so all higher place values vanish mod $8$. This mirrors the rule for $4$. There $100 = 4 \\times 25$ makes only the tens and ones places matter. Each extra factor of $2$ in the divisor needs one more place.`}
            </p>
          </div>

          <div className="lrn-example">
            <span className="lrn-example-label">EXAMPLE: Rule for 6 on 4,512</span>
            <p>{`Check 2: the ones digit is $2$, which is even, so $2 \\mid 4{,}512$.`}</p>
            <p>{`Check 3: the digit sum is $4 + 5 + 1 + 2 = 12$, and $3 \\mid 12$, so $3 \\mid 4{,}512$.`}</p>
            <p>{`Both pass, so $6 \\mid 4{,}512$. Verify: $4{,}512 = 752 \\times 6$. ✓`}</p>
          </div>

          <div className="lrn-example">
            <span className="lrn-example-label">EXAMPLE: Rule for 8 on 3,168</span>
            <p>{`Look at the number formed by the hundreds, tens, and ones places: $168$.`}</p>
            <p>{`Since $168 = 8 \\times 21$, we have $8 \\mid 168$. By the rule for 8, $8 \\mid 3{,}168$. Verify: $3{,}168 = 396 \\times 8$. ✓`}</p>
          </div>

          <VizFigure title="Divisibility Checker" size="body" aspect="auto">
            <Dvt_DivisibilityChecker />
          </VizFigure>
        </>,

        // Section 3: Powers of 10 Behind Every Rule
        <>
          <h2>Why Powers of 10 Drive Everything</h2>
          <p>
            {`Every digit in a whole number sits in a place that is a power of $10$. Each divisibility rule asks: what remainder does each power of $10$ leave when divided by the target number?`}
          </p>
          <p>
            The answer to that question fully determines the rule. Two patterns cover all the rules
            above.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`What remainder does $10^4 = 10{,}000$ leave when divided by $9$? Predict without computing.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Remainder $1$. Every power of $10$ leaves remainder $1$ when divided by $9$. You can check: $10{,}000 = 1{,}111 \\times 9 + 1$.`}</p>
            </details>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Powers of 10 mod 3</span>
            <div className="lrn-definition-desc">
              <p>{`For every whole number $n$: $10^n = (33\\ldots3 \\times 3) + 1$. Every power of $10$ leaves remainder $1$ when divided by $3$.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Powers of 10 mod 9</span>
            <div className="lrn-definition-desc">
              <p>{`For every whole number $n$: $10^n = (11\\ldots1 \\times 9) + 1$. Every power of $10$ leaves remainder $1$ when divided by $9$.`}</p>
              <p>{`Example: $1{,}000 = 111 \\times 9 + 1$.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Powers of 10 mod 11 (odd exponents)</span>
            <div className="lrn-definition-desc">
              <p>{`$10^1 = (1 \\times 11) + (-1)$. $10^3 = (91 \\times 11) + (-1)$. $10^5 = (9{,}091 \\times 11) + (-1)$. Odd powers of $10$ leave remainder $-1$ mod $11$.`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Powers of 10 mod 11 (even exponents)</span>
            <div className="lrn-definition-desc">
              <p>{`$10^2 = (9 \\times 11) + 1$. $10^4 = (909 \\times 11) + 1$. $10^6 = (90{,}909 \\times 11) + 1$. Even powers of $10$ leave remainder $+1$ mod $11$.`}</p>
            </div>
          </div>

          <PowersOfTenRemainderTable />
          <p>
            Read each row left to right. When every power leaves remainder 1, every digit counts the
            same: a plain digit sum. When the remainders alternate +1 and −1, you get an alternating
            sum. When a remainder drops to 0, every higher place vanishes: only the digits before
            that point matter.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`$10 \\equiv 1 \\pmod{3}$ because $10 = 3 \\times 3 + 1$. Any power $10^n$ is $10$ multiplied by itself $n$ times. $1 \\times 1 \\times \\ldots = 1$, so $10^n \\equiv 1^n = 1 \\pmod{3}$.`}</p>
            <p>{`$10 \\equiv -1 \\pmod{11}$ because $10 = 11 - 1$.`}</p>
            <p>{`Remember a negative times a negative is positive. So $(-1)^2 = 1$ and $(-1)^3 = -1$.`}</p>
            <p>{`Squaring: $10^2 \\equiv (-1)^2 = 1 \\pmod{11}$. Cubing: $10^3 \\equiv (-1)^3 = -1 \\pmod{11}$. The sign alternates with each power.`}</p>
          </div>

          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">{`COMPLETE EXAMPLE: Verify $10^5 \\equiv 1 \\pmod{9}$`}</span>
              <ol className="lrn-list">
                <li>{`Compute: $10^5 = 100{,}000$.`}</li>
                <li>{`Divide: $100{,}000 = 11{,}111 \\times 9 + 1$.`}</li>
                <li>{`Conclusion: remainder is $1$. ✓`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">{`YOUR TURN: PARTIAL: Verify $10^3 \\equiv -1 \\pmod{11}$`}</span>
              <ol className="lrn-list">
                <li>{`Compute: $10^3 = 1{,}000$.`}</li>
                <li>{`Divide $1{,}000$ by $11$: quotient is $90$, so $1{,}000 = 90 \\times 11 + r$. Find $r$: ___`}</li>
                <li>{`Conclude: does $r = -1$ (equivalently, $r = 10$)? ___`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Verify that $10^4$ leaves remainder $1$ when divided by $11$. Show the division.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The rule for $3$ and the rule for $9$ both use plain digit sums. The rule for $11$ uses an alternating sum. Connect this difference directly to the power-of-10 remainders you see in the definitions above.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`For $3$ and $9$: every power of $10$ has remainder $1$. So every digit in the expansion contributes its face value times $1$ to the total remainder. That gives a plain sum. For $11$: even powers have remainder $+1$ and odd powers have remainder $-1$. So even-place digits add, odd-place digits subtract. That gives the alternating sum.`}</p>
            </details>
          </div>
        </>
      ]
    },

    practice: [
      // Interleaved: computation, conceptual, applied, method-selection,
      // error-detection, transfer, elaborate, predict, self-explain
      {
        q: `Is 96 divisible by 3?`,
        a: `Yes. The digit sum is $9 + 6 = 15$. Since $3 \\mid 15$ (because $15 = 5 \\times 3$), the rule for 3 says $3 \\mid 96$. Verify: $96 = 32 \\times 3$.`
      },
      {
        q: `A number has digit sum 14. Is it divisible by 3? Is it divisible by 9?`,
        a: `Not by 3, and not by 9. The digit sum 14 is not divisible by 3 (since $14 = 4 \\times 3 + 2$), so the number is not divisible by 3. It is certainly not divisible by 9 either, since divisibility by 9 requires digit sum divisible by 9.`
      },
      {
        q: `Write out $a = qd + r$ for $a = 50$, $d = 7$. State the quotient and remainder.`,
        a: `$50 = 7 \\times 7 + 1$. The quotient is $q = 7$ and the remainder is $r = 1$. Check: $7 \\times 7 = 49$ and $49 + 1 = 50$. Also $0 \\leq 1 < 7$, so the remainder condition holds.`
      },
      {
        q: `Is 286 divisible by 11?`,
        a: `Yes. The alternating sum is: ones digit $6$ plus hundreds digit $2$, minus tens digit $8$: $(6 + 2) - 8 = 0$. Since $11 \\mid 0$, the rule for 11 says $11 \\mid 286$. Verify: $286 = 26 \\times 11$.`
      },
      {
        q: `Is 21,374 even or odd? How do you know without dividing?`,
        a: `Even. The ones digit is 4, which is in the set $\\{0, 2, 4, 6, 8\\}$. By the rule for 2, a whole number is even exactly when its ones digit is one of these five values.`
      },
      {
        q: `Explain in words why $A = 105$, $B = 70$, $C = 35$ illustrates the Sum-Difference Lemma for divisor 7.`,
        a: `$A = B + C$ because $105 = 70 + 35$. Both $B = 70 = 10 \\times 7$ and $C = 35 = 5 \\times 7$ are multiples of 7. The Sum-Difference Lemma says: if $x$ divides two of the three values in $A = B + C$, it divides the third. Here $7$ divides $B$ and $C$, so it must also divide $A = 105 = 15 \\times 7$.`
      },
      {
        q: `Is 916 divisible by 4?`,
        a: `Yes. Look at the last two digits: 16. Since $16 = 4 \\times 4$, we have $4 \\mid 16$. By the rule for 4, $4 \\mid 916$. Verify: $916 = 229 \\times 4$.`
      },
      {
        q: `A student says: "736492 is divisible by 11 because $7 + 3 + 6 + 4 + 9 + 2 = 31$ and $31$ is close to $33$." What error did the student make?`,
        a: `The student used a plain digit sum instead of an alternating sum. The rule for 11 requires the alternating sum: $(2 + 4 + 3) - (9 + 6 + 7) = 9 - 22 = -13$. Since $11 \\nmid (-13)$, the number is NOT divisible by 11. Plain digit sums are for the rules for 3 and 9, not 11.`
      },
      {
        q: `Is 385 divisible by 5?`,
        a: `Yes. The ones digit is 5. By the rule for 5, a whole number is divisible by 5 exactly when its ones digit is 0 or 5. Since 5 qualifies, $5 \\mid 385$. Verify: $385 = 77 \\times 5$.`
      },
      {
        q: `Predict: what remainder does $10^6$ leave when divided by 9? Give the reason without computing.`,
        a: `Remainder 1. Every power of $10$ leaves remainder 1 when divided by 9, because $10 \\equiv 1 \\pmod{9}$ and any power of 1 is still 1. So $10^6 \\equiv 1^6 = 1 \\pmod{9}$.`
      },
      {
        q: `Is 277 divisible by 3?`,
        a: `No. The digit sum is $2 + 7 + 7 = 16$. Since $3 \\nmid 16$ (because $16 = 5 \\times 3 + 1$), the rule for 3 says $3 \\nmid 277$. Verify: $277 = 92 \\times 3 + 1$.`
      },
      {
        q: `Prove: if $6 \\mid B$ and $6 \\mid C$, then $6 \\mid (B + C)$. Which lemma does this use?`,
        a: `This uses the Sum-Difference Lemma with $A = B + C$. Write $B = m \\times 6$ and $C = n \\times 6$. Then $A = B + C = (m + n) \\times 6$, so $6 \\mid A$. The lemma says: if $x$ divides two of the three values in $A = B + C$, it divides the third.`
      },
      {
        q: `Which divisibility rule do you use to check whether 4,815 is divisible by 5? Apply it.`,
        a: `Use the rule for 5: check the ones digit. The ones digit of 4,815 is 5. Since 5 is 0 or 5, we conclude $5 \\mid 4{,}815$. Verify: $4{,}815 = 963 \\times 5$.`
      },
      {
        q: `Transfer: the rule for 4 checks the number in the tens and ones places because $100 = 4 \\times 25$. By the same logic, down to which place do you check for divisibility by 8?`,
        a: `Down to the hundreds place. You check the number formed by the hundreds, tens, and ones. The rule for 8 uses these places because $1000 = 8 \\times 125$. Any multiple of 1000 is divisible by 8, so only the hundreds, tens, and ones contribute to the remainder. This is the same reasoning as for 4, one place higher.`
      },
      {
        q: `Is 8,524 divisible by 4?`,
        a: `Yes. Look at the number in the tens and ones places: 24. Since $24 = 4 \\times 6$, we have $4 \\mid 24$. By the rule for 4, $4 \\mid 8{,}524$. Verify: $8{,}524 = 2{,}131 \\times 4$.`
      },
      {
        q: `Explain why 9 divides any number whose digit sum is divisible by 9, using the example 729.`,
        a: `Digit sum of 729: $7 + 2 + 9 = 18$. Since $9 \\mid 18$, the rule for 9 says $9 \\mid 729$. Verify: $729 = 81 \\times 9$. The rule works because every power of $10$ leaves remainder $1$ when divided by $9$. So each digit contributes its face value to the total remainder. The remainder of the whole number equals the remainder of the digit sum.`
      },
      {
        q: `A number has digit sum 45. Is it divisible by 9? Is it divisible by 3?`,
        a: `Yes to both. $9 \\mid 45$ (since $45 = 5 \\times 9$), so the rule for 9 says the number is divisible by 9. Since 9 is divisible by 3 and the number is divisible by 9, by transitivity the number is also divisible by 3. (Alternatively, $3 \\mid 45$ directly since $45 = 15 \\times 3$.)`
      },
      {
        q: `Transfer: you need to check whether 8,316 is divisible by 6. Which two rules do you apply, and what is the result?`,
        a: `Apply the rule for 2 and the rule for 3. A number is divisible by 6 exactly when it is divisible by both 2 and 3. Ones digit of 8,316 is 6, which is even, so $2 \\mid 8{,}316$. Digit sum: $8 + 3 + 1 + 6 = 18$, and $3 \\mid 18$, so $3 \\mid 8{,}316$. Since both pass, $6 \\mid 8{,}316$. Verify: $8{,}316 = 1{,}386 \\times 6$.`
      },
      {
        q: `What does the Obstruction Lemma say? Give a concrete example using divisor 6 and number 14.`,
        a: `The Obstruction Lemma says: if $A \\nmid C$, then no multiple of $A$ can divide $C$. Example: $6 \\nmid 14$ (since $14 = 2 \\times 6 + 2$). Therefore no multiple of 6 (like 12, 18, 24) can divide 14 either. If 12 divided 14, then by transitivity 6 would divide 14, contradiction.`
      },
      {
        q: `Predict: can the alternating sum of a number be negative? Does the sign matter for the rule of 11?`,
        a: `Yes, it can be negative. The sign does not matter. The rule for 11 requires only that the alternating sum is divisible by 11. $-11$, $0$, $11$, $22$ all work. The example $736{,}492$ has alternating sum $-13$, which is not divisible by 11, so the number fails the test.`
      },
      {
        q: `Is 642 divisible by 3?`,
        a: `Yes. Digit sum: $6 + 4 + 2 = 12$. Since $3 \\mid 12$ ($12 = 4 \\times 3$), the rule for 3 says $3 \\mid 642$. Verify: $642 = 214 \\times 3$.`
      },
      {
        q: `Self-explain: to prove the rule for 3 on 138, you replace each $10$ with $(9 + 1)$. Why split $10$ that way rather than some other way?`,
        a: `We need one part to be a multiple of 3 and one part to be $1$. That lets us separate the "divisible part" from the "digit contribution." $9 = 3 \\times 3$ is the largest multiple of 3 below 10, so $10 = 9 + 1$ is the natural split. Any other split (like $6 + 4$) would leave a remainder that is not 1, making the algebra messier. For 138, the leftover is the digit sum $1 + 3 + 8 = 12$, and $3 \\mid 12$, so $3 \\mid 138$.`
      },
      {
        q: `Does 12 divide 5,106,963,042? Use divisibility rules.`,
        a: `$12 = 4 \\times 3$, so we need both $4 \\mid n$ and $3 \\mid n$. Last two digits: 42. $42 = 10 \\times 4 + 2$, so $4 \\nmid 42$. Since $4 \\nmid n$, we conclude $12 \\nmid 5{,}106{,}963{,}042$. No need to check divisibility by 3.`
      },
      {
        q: `Transfer: without a calculator, check whether 164,253 is a multiple of 6.`,
        a: `Check divisibility by 2 and 3. Ones digit: 3, which is odd, so $2 \\nmid 164{,}253$. Since it fails the rule for 2, it is not divisible by 6. (Digit sum $1+6+4+2+5+3=21$, divisible by 3, but failing 2 is enough to rule out 6.)`
      },
      {
        q: `What is the alternating sum of 814? Show the computation step by step.`,
        a: `Digits of 814: hundreds $= 8$, tens $= 1$, ones $= 4$. Alternating sum $= (\\text{ones} + \\text{hundreds}) - \\text{tens} = (4 + 8) - 1 = 11$. Since $11 \\mid 11$, the rule for 11 confirms $11 \\mid 814$. Verify: $814 = 74 \\times 11$.`
      },
      {
        q: `Error detection: a student says "any even number is divisible by 4, because 4 is even." Find the error and correct it.`,
        a: `Wrong. The rule for 4 requires the last two digits to form a number divisible by 4, not just that the number is even. For example, 6 is even but $4 \\nmid 6$. Similarly 14 is even but $4 \\nmid 14$. Divisibility by 4 is a stricter requirement than divisibility by 2.`
      },
      {
        q: `Elaborate: why does the Sum-Difference Lemma hold for subtraction as well as addition? Give a proof sketch.`,
        a: `Subtraction is just addition of a negative. If $A = B + C$, then $B = A - C = A + (-C)$. If $x \\mid A$ and $x \\mid C$, write $A = mx$ and $C = nx$. Then $B = A - C = mx - nx = (m-n)x$, so $x \\mid B$. The distributive law works just as well with negative signs.`
      },
      {
        q: `Is 6,241 even or odd?`,
        a: `Odd. The ones digit is 1. By the rule for 2, a whole number is odd exactly when its ones digit is 1, 3, 5, 7, or 9. Since 1 is in that set, 6,241 is odd.`
      },
      {
        q: `Transfer: the rule for 9 works for the same reason as the rule for 3. Use $100{,}000$ to show that $10^5$ leaves remainder 1 when divided by 9.`,
        a: `$100{,}000 = 11{,}111 \\times 9 + 1$. So $10^5 = 11{,}111 \\times 9 + 1$, and the remainder is exactly 1. This confirms that $10^5 \\equiv 1 \\pmod{9}$, which is the fact that makes the digit-sum rule work for 9.`
      },
      {
        q: `Method-selection: you need to check whether 936 is divisible by 3 AND by 9. Is one check enough, or do you need two separate checks?`,
        a: `One check suffices. Compute the digit sum: $9 + 3 + 6 = 18$. If it is divisible by 9, it is automatically divisible by 3 (since $3 \\mid 9$ and $9 \\mid \\text{digit sum}$). Here $9 \\mid 18$ and $3 \\mid 18$, so 936 is divisible by both. The rule for 9 subsumes the rule for 3.`
      },
      {
        q: `Prove that if $A \\mid B$ and $A \\mid C$, then $A \\mid (2B + 3C)$.`,
        a: `Write $B = mA$ and $C = nA$. Then $2B + 3C = 2mA + 3nA = (2m + 3n)A$. Since $2m + 3n$ is an integer, $A \\mid (2B + 3C)$. This is a direct application of the Sum-Difference Lemma: $A$ divides each term, so it divides the sum.`
      },
      {
        q: `Is 57,201 a multiple of 27?`,
        a: `First check divisibility by 9: digit sum $= 5+7+2+0+1 = 15$. Since $9 \\nmid 15$ (because $15 = 1 \\times 9 + 6$), $9 \\nmid 57{,}201$. Since $27 = 3 \\times 9$ and 27 is a multiple of 9, by the Obstruction Lemma $27 \\nmid 57{,}201$.`
      },
      {
        q: `Self-explain: in the Obstruction Lemma proof, why do we use proof by contradiction rather than a direct proof?`,
        a: `We want to show "no multiple of $A$ can divide $C$." This is a universal negative claim. Direct proofs work well for showing something IS true. Contradiction is natural for showing something is impossible. We assume a multiple $B$ of $A$ does divide $C$, then derive that $A \\mid C$ (by transitivity), which contradicts our starting assumption.`
      },
      {
        q: `Transfer: does divisibility by 4 imply divisibility by 2? Use the Transitivity Lemma to justify.`,
        a: `Yes. $2 \\mid 4$ (since $4 = 2 \\times 2$). If $4 \\mid n$, then by the Transitivity Lemma with $A = 2$, $B = 4$, $C = n$: $2 \\mid n$. So every multiple of 4 is automatically even.`
      },
      {
        q: `Apply the rule for 11 to 99. What is the alternating sum and what does it tell you?`,
        a: `Digits: tens $= 9$, ones $= 9$. Alternating sum $= 9 - 9 = 0$. Since $11 \\mid 0$ (every integer divides 0), the rule says $11 \\mid 99$. Verify: $99 = 9 \\times 11$. ✓ Note: 0 is a multiple of every nonzero integer.`
      },
      {
        q: `Error detection: a student checks whether 62,318 is divisible by 4 by looking only at the ones digit (8) and concludes "yes, because 8 is even." What is wrong?`,
        a: `The student applied the rule for 2 instead of the rule for 4. Divisibility by 4 requires the last TWO digits to be divisible by 4, not just the ones digit. The last two digits are 18. Since $18 = 4 \\times 4 + 2$, $4 \\nmid 18$, and therefore $4 \\nmid 62{,}318$. Being even is necessary but not sufficient for divisibility by 4.`
      },
      {
        q: `Elaborate: explain why 0 is a multiple of every nonzero integer. How does this fit the definition of divisibility?`,
        a: `The definition says $y \\mid x$ if there exists an integer $z$ such that $x = z \\times y$. For $x = 0$: $0 = 0 \\times y$ for any $y$. Setting $z = 0$ works for every nonzero $y$. So yes, $y \\mid 0$ for every nonzero $y$. In the division equation, $0 = 0 \\times d + 0$, so $q = 0$ and $r = 0$ for any $d$.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Divisibility Tests',
      sections: [
        <>
          <h2>The Division Equation</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term lrn-eq lrn-eq-hero">{`$a = qd + r$`}</span>
            <div className="lrn-definition-desc">
              <p>{`For whole numbers $a$, $d$ with $d > 0$: unique $q$ (quotient) and $r$ (remainder) with $0 \\leq r < d$.`}</p>
              <p>{`$y \\mid x$ means $y$ divides $x$ (remainder is 0). $y \\nmid x$ means it does not.`}</p>
            </div>
          </div>

          <h2>Divisibility Rules</h2>
          <DivisibilityRulesTable />

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rule for 2</span>
            <div className="lrn-definition-desc">
              <p>Check: ones digit is 0, 2, 4, 6, or 8.</p>
              <p>When to use: any time you need to know if a number is even.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rule for 3</span>
            <div className="lrn-definition-desc">
              <p>Check: digit sum is divisible by 3.</p>
              <p>When to use: checking large numbers for divisibility by 3 or 6.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rule for 4</span>
            <div className="lrn-definition-desc">
              <p>Check: the number in the tens and ones places is divisible by 4.</p>
              <p>When to use: any number in the hundreds or larger.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rule for 5</span>
            <div className="lrn-definition-desc">
              <p>Check: ones digit is 0 or 5.</p>
              <p>When to use: always instant. Just look at the ones digit.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rule for 6</span>
            <div className="lrn-definition-desc">
              <p>
                Check: divisible by both 2 AND 3 (even ones digit AND digit sum divisible by 3).
              </p>
              <p>When to use: requires combining rules for 2 and 3.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rule for 8</span>
            <div className="lrn-definition-desc">
              <p>Check: the number in the hundreds, tens, and ones places is divisible by 8.</p>
              <p>When to use: any number in the thousands or larger.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rule for 9</span>
            <div className="lrn-definition-desc">
              <p>Check: digit sum is divisible by 9.</p>
              <p>When to use: same computation as rule for 3. Check if digit sum reaches 9.</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rule for 11</span>
            <div className="lrn-definition-desc">
              <p>{`Check: alternating sum of digits is divisible by 11. Alternating sum = (ones + hundreds + ten-thousands + $\\ldots$) $-$ (tens + thousands + hundred-thousands + $\\ldots$).`}</p>
              <p>When to use: when plain digit sum does not help. Only for divisor 11.</p>
            </div>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>Rule for 7:</strong> exists but is too complicated to be worth knowing. Just
              divide directly.
            </p>
          </div>

          <h2>Key Lemmas</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Sum-Difference Lemma</span>
            <div className="lrn-definition-desc">
              <p>{`If $A = B + C$ and $x$ divides any two of $\\{A, B, C\\}$, then $x$ divides the third.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Transitivity</span>
            <div className="lrn-definition-desc">
              <p>{`If $A \\mid B$ and $B \\mid C$, then $A \\mid C$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Obstruction</span>
            <div className="lrn-definition-desc">
              <p>{`If $A \\nmid C$, then no multiple of $A$ divides $C$.`}</p>
            </div>
          </div>

          <h2>Powers of 10 at a Glance</h2>
          <ul className="lrn-list">
            <li>{`$10^n \\equiv 1 \\pmod{3}$ for all $n \\geq 0$ → plain digit sum rule`}</li>
            <li>{`$10^n \\equiv 1 \\pmod{9}$ for all $n \\geq 0$ → plain digit sum rule`}</li>
            <li>{`$10^{\\text{even}} \\equiv +1 \\pmod{11}$, $10^{\\text{odd}} \\equiv -1 \\pmod{11}$ → alternating sum rule`}</li>
            <li>{`$100 \\equiv 0 \\pmod{4}$ → only last two digits matter`}</li>
            <li>{`$1000 \\equiv 0 \\pmod{8}$ → only last three digits matter`}</li>
            <li>{`$10 \\equiv 0 \\pmod{2}$ and $\\pmod{5}$ → only last digit matters`}</li>
          </ul>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function DivisibilityTests() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
