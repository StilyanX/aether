// INTEGERS AND NEGATIVE NUMBERS
// All viz take a `C` color object from the consumer.
//
// REFINE pass 2026-07-02 (ar.65–ar.73):
// - ar.71 DistributiveProofWalk and ar.72 EqualOpportunitiesGrid were Mafs
//   canvases used as text layouts (forbidden mode 4) - rebuilt as DOM.
// - ar.66 recomputed its frame from start/result every drag (auto-scaling
//   axis); fixed frame [−17, 17] holds every reachable sum.
// - ar.70's eleven size-24 numbers sat at ~40 px pitch (−12/−15 are ~50 px
//   wide at that size - guaranteed overlap); size 12 restores clearance, and
//   the mode-B caption's reversed-sequence wording was wrong-way-round.
// - size-24 canvas text → house 12 file-wide; "3+(5)" paren noise fixed;
//   result equations moved to readout rows. Tables (ar.68/69/73) untouched -
//   DOM tables are the right engine for sign-rule tabulation.
// Engine (WebSearch 2026-07-02, signed-number-line / sign-table classes):
// only banned dashboard stacks surfaced; Mafs (A) + DOM tables stay. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.

import React, { useState } from 'react'
import { Mafs, Coordinates, Point, Vector, Text, LaTeX } from 'mafs'
import { Slider, KatexInline } from '../../../primitives'
import 'mafs/core.css'
import {
  FONT_CONTROL,
  FONT_FAMILY,
  FONT_LABEL,
  FONT_SMALL,
  LS_CONTROL,
  LS_MEDIUM,
  LS_TIGHT,
  LS_UPPER
} from '../../../scale-tokens'

// Helpers

function btnStyle(active) {
  return {
    background: 'transparent',
    border: `1px solid ${active ? 'var(--border-default)' : 'var(--border-subtle)'}`,
    color: 'var(--text-primary)',
    padding: '5px 12px',
    cursor: 'pointer',
    fontFamily: FONT_FAMILY,
    fontSize: FONT_LABEL,
    letterSpacing: LS_UPPER,
    textTransform: 'uppercase',
    opacity: active ? 1 : 0.5
  }
}

// Readout row under the canvas - house convention (values never on canvas).
const READOUT_ROW = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px 28px',
  justifyContent: 'center',
  marginTop: 12,
  fontFamily: FONT_FAMILY,
  fontSize: FONT_LABEL,
  letterSpacing: LS_CONTROL
}

// signed-term TeX: parenthesize only negatives
const signed = v => (v < 0 ? `(${v})` : `${v}`)

// (1) NumberLineSigned - ar.65
// Static labeled number line from −10 to +10 with three real-world readings
// of −5 stacked above it. Static by design: it is the topic's opening figure.
export function NumberLineSigned({ C }) {
  return (
    <Mafs viewBox={{ x: [-12, 12], y: [-3.5, 4.5] }} height={200} preserveAspectRatio={false}>
      <Coordinates.Cartesian
        xAxis={{ lines: false, labels: false }}
        yAxis={{ labels: false, lines: false }}
      />
      {Array.from({ length: 21 }, (_, i) => i - 10).map(n => (
        <React.Fragment key={n}>
          <Point x={n} y={0} color={n === 0 ? C.fg : C.faint} />
          {n % 2 === 0 && (
            <Text x={n} y={-0.8} size={FONT_LABEL} color={C.dim}>
              {String(n)}
            </Text>
          )}
        </React.Fragment>
      ))}
      <Point x={-5} y={0} color={C.fg} />
      <LaTeX at={[-5, 1.2]} tex={`-5^{\\circ}\\text{C}`} color={C.fg} />
      <LaTeX at={[-5, 2.4]} tex={`-5\\text{ (golf)}`} color={C.dim} />
      <LaTeX at={[-5, 3.6]} tex={`-\\$5`} color={C.faint} />
      <Vector tail={[-10.5, 0]} tip={[10.5, 0]} color={C.faint} />
    </Mafs>
  )
}

// (2) NumberLineAddJump - ar.66
// Adding on the number line: walk to `start`, then jump by `step`. Frame is
// FIXED at [−17, 17] (start, step ∈ [−8, 8] ⇒ result ∈ [−16, 16]) - the old
// version re-fit the frame to the arrows every drag, so equal steps changed
// drawn length as you moved them.
export function NumberLineAddJump({ C }) {
  const [start, setStart] = useState(-2)
  const [step, setStep] = useState(5)
  const result = start + step

  return (
    <>
      <Mafs viewBox={{ x: [-17, 17], y: [-2.2, 3.4] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (n % 4 === 0 ? `${n}` : '') }}
          yAxis={{ labels: false, lines: false }}
        />
        {start !== 0 && <Vector tail={[0, 1.6]} tip={[start, 1.6]} color={C.faint} />}
        <LaTeX at={[start === 0 ? 0 : start / 2, 2.5]} tex={'\\text{start}'} color={C.faint} />
        {step !== 0 && <Vector tail={[start, 0.5]} tip={[result, 0.5]} color={C.fg} />}
        <LaTeX at={[(start + result) / 2, 1.25]} tex={'\\text{step}'} color={C.fg} />
        <Point x={result} y={0} color={C.fg} />
        <Point x={0} y={0} color={C.faint} />
      </Mafs>
      <div
        aria-label="Jump addition readout: start plus step equals result"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`${start} + ${signed(step)} = ${result}`} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          {step >= 0 ? 'positive step: jump right' : 'negative step: jump left'}
        </span>
      </div>
      <Slider
        label="Start"
        value={start}
        min={-8}
        max={8}
        step={1}
        onChange={v => setStart(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="Step"
        value={step}
        min={-8}
        max={8}
        step={1}
        onChange={v => setStep(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </>
  )
}

// (3) FourAdditionCases - ar.67
// Static 2×2 small-multiples: the four sign cases of addition, each a mini
// number line with directed jumps. Panels are fixed exemplars (not mode 1 -
// the grid IS the case analysis); each carries its exact equation.
function MiniLine({ C, a, b, label }) {
  const sum = a + b
  const lo = Math.min(0, a, sum) - 1.5
  const hi = Math.max(0, a, sum) + 1.5
  const span = Math.max(hi - lo, 4)

  return (
    <div style={{ marginBottom: 8 }}>
      <p
        style={{
          margin: '0 0 2px',
          fontSize: FONT_LABEL,
          opacity: 0.7,
          letterSpacing: LS_TIGHT,
          fontFamily: FONT_FAMILY
        }}
      >
        {label}
      </p>
      <Mafs
        viewBox={{ x: [lo - 0.5, lo + span + 0.5], y: [-2, 2.8] }}
        height={120}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ labels: false, lines: false }} />
        <Vector tail={[0, 1.4]} tip={[a, 1.4]} color={C.fg} />
        <Vector tail={[a, 0.3]} tip={[sum, 0.3]} color={C.dim} />
        <Point x={sum} y={0} color={C.fg} />
        <LaTeX at={[sum, -1.2]} tex={`${a} + ${signed(b)} = ${sum}`} color={C.fg} />
        <Point x={0} y={0} color={C.faint} />
        <Text x={0} y={-0.6} size={FONT_LABEL} color={C.faint}>
          0
        </Text>
      </Mafs>
    </div>
  )
}

export function FourAdditionCases({ C }) {
  const cases = [
    { a: 3, b: 5, label: 'Both positive: 3 + 5' },
    { a: -3, b: 5, label: 'Negative + positive: (−3) + 5' },
    { a: 3, b: -5, label: 'Positive + negative: 3 + (−5)' },
    { a: -3, b: -5, label: 'Both negative: (−3) + (−5)' }
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      {cases.map((c, i) => (
        <MiniLine key={i} C={C} a={c.a} b={c.b} label={c.label} />
      ))}
    </div>
  )
}

// (6) SequencePatternArgument - ar.70
// Pattern argument for negative products: two aligned sequences n and m·n.
// Products computed live; size-12 labels give ~40 px clearance at pitch 0.9u.
export function SequencePatternArgument({ C }) {
  const [mode, setMode] = useState('A')
  const multiplier = mode === 'A' ? 3 : -3
  const ns = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
  const prods = ns.map(n => multiplier * n)

  const xScale = 0.9
  const rowTop = 2.0
  const rowBot = 0.0
  const highlightN = -5
  const highlightProd = multiplier * highlightN

  return (
    <>
      <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
        <button onClick={() => setMode('A')} style={btnStyle(mode === 'A')}>
          {'3 × (−5) = −15'}
        </button>
        <button onClick={() => setMode('B')} style={btnStyle(mode === 'B')}>
          {'(−3) × (−5) = 15'}
        </button>
      </div>
      <Mafs viewBox={{ x: [-6.9, 6.5], y: [-1.2, 3.3] }} height={210} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        <LaTeX at={[-6.2, rowTop]} tex={'n'} color={C.dim} />
        <LaTeX at={[-6.2, rowBot]} tex={mode === 'A' ? '3n' : '-3n'} color={C.dim} />
        {ns.map((n, i) => {
          const x = n * xScale
          const isHighlight = n === highlightN
          return (
            <React.Fragment key={n}>
              <Text x={x} y={rowTop} size={FONT_LABEL} color={isHighlight ? C.fg : C.dim}>
                {String(n)}
              </Text>
              <Text x={x} y={rowBot} size={FONT_LABEL} color={isHighlight ? C.fg : C.dim}>
                {String(prods[i])}
              </Text>
              {isHighlight && (
                <Vector tail={[x, rowTop - 0.4]} tip={[x, rowBot + 0.4]} color={C.fg} />
              )}
            </React.Fragment>
          )
        })}
        <Vector tail={[-5.5, rowTop - 0.7]} tip={[5.5, rowTop - 0.7]} color={C.faint} />
      </Mafs>
      <div
        aria-label="Pattern argument readout: the highlighted product and the step rule"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`${signed(multiplier)} \\times (${highlightN}) = ${highlightProd}`} />
        </span>
      </div>
      <p
        style={{
          fontSize: FONT_LABEL,
          opacity: 0.7,
          letterSpacing: LS_TIGHT,
          marginTop: 8,
          fontFamily: FONT_FAMILY
        }}
      >
        {mode === 'A'
          ? 'Read the bottom row right to left from 3×5 = 15: each step left subtracts 3. Past zero the products keep falling: −3, −6, … −15 lands under n = −5.'
          : 'Read the bottom row right to left from (−3)×5 = −15: each step left ADDS 3. Past zero the products keep climbing: +3, +6, … +15 lands under n = −5.'}
      </p>
    </>
  )
}

// (7) DistributiveProofWalk - ar.71
// REBUILT 2026-07-02 (was a Mafs canvas holding the equation chain - forbidden
// mode 4). A proof is text: DOM chain of TeX steps with justifications.
export function DistributiveProofWalk({ C }) {
  const steps = [
    { tex: '3 \\cdot (-5) + 15', note: 'want to show this equals 0' },
    { tex: '= 3 \\cdot (-5) + 3 \\cdot 5', note: 'because 15 = 3 × 5' },
    { tex: '= 3 \\cdot (-5 + 5)', note: 'distributive law: ab + ac = a(b + c)' },
    { tex: '= 3 \\cdot 0', note: 'because −5 + 5 = 0' },
    { tex: '= 0', note: 'so 3·(−5) is the opposite of 15: it equals −15' }
  ]

  return (
    <div
      aria-label="Distributive proof: why three times negative five is negative fifteen"
      style={{ fontFamily: FONT_FAMILY, display: 'flex', flexDirection: 'column', gap: 10 }}
    >
      {steps.map((s, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span
            style={{
              fontSize: FONT_CONTROL,
              color: i === steps.length - 1 ? C.fg : C.dim,
              minWidth: 170
            }}
          >
            <KatexInline tex={s.tex} />
          </span>
          <span
            style={{ fontSize: FONT_LABEL, color: C.dim, letterSpacing: LS_TIGHT, opacity: 0.8 }}
          >
            {s.note}
          </span>
        </div>
      ))}
    </div>
  )
}

// (9) EqualOpportunitiesGrid - ar.72
// REBUILT 2026-07-02 (was four TeX equations floated in a Mafs canvas -
// forbidden mode 4). Now a DOM 2×2 case grid: three known products corner the
// unknown (−3)·(−5), and consistency forces it positive.
export function EqualOpportunitiesGrid({ C }) {
  const cells = [
    { tex: '3 \\cdot 5 = +15', dim: false },
    { tex: '3 \\cdot (-5) = -15', dim: false },
    { tex: '(-3) \\cdot 5 = -15', dim: false },
    { tex: '(-3) \\cdot (-5) = \\,?', dim: true }
  ]
  const cell = active => ({
    border: `1px solid ${active ? 'var(--border-default)' : 'var(--border-subtle)'}`,
    background: '#000',
    padding: '18px 12px',
    textAlign: 'center',
    fontSize: FONT_CONTROL,
    color: C.fg
  })
  const axisLabel = {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SMALL,
    letterSpacing: LS_MEDIUM,
    textTransform: 'uppercase',
    color: C.dim,
    textAlign: 'center'
  }

  return (
    <div
      aria-label="Sign case grid: three known products force the fourth"
      style={{
        fontFamily: FONT_FAMILY,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr 1fr',
        gap: 10,
        alignItems: 'center'
      }}
    >
      <span></span>
      <span style={axisLabel}>second factor +</span>
      <span style={axisLabel}>second factor −</span>
      <span style={{ ...axisLabel, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
        first factor +
      </span>
      <div style={cell(false)}>
        <KatexInline tex={cells[0].tex} />
      </div>
      <div style={cell(false)}>
        <KatexInline tex={cells[1].tex} />
      </div>
      <span style={{ ...axisLabel, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
        first factor −
      </span>
      <div style={cell(false)}>
        <KatexInline tex={cells[2].tex} />
      </div>
      <div style={cell(true)}>
        <KatexInline tex={cells[3].tex} />
      </div>
    </div>
  )
}
