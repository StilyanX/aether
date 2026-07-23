// ODD AND EVEN NUMBERS
// Parity visualizations. Each viz takes a `C` color object from the consumer.
//
// REFINE pass 2026-07-02 (ar.96–ar.99):
// - ParitySumCalculator scaled bars against MAX_VAL = 20 while a + b reaches
//   36 - the sum bar left the frame for a+b > 20 (clipping Blocker). One
//   scale now covers the full domain [0, 36].
// - size-24 canvas text → house 12; algebraic forms and rule verdicts moved
//   to readout rows; parity arithmetic already exact integers throughout ✓.
// Engine (WebSearch 2026-07-02, dot-pairing / parity classes): only banned
// dashboard stacks surfaced; Mafs (A) stays. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.
import React, { useState } from 'react'
import { Mafs, Coordinates, Point, Polygon, Text } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { FONT_FAMILY, FONT_LABEL, LS_CONTROL, LS_UPPER } from '../../../scale-tokens'

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

// (a) ParityNumberLine
// Number line 0..20 with even numbers highlighted.
// Toggle button shows algebraic labels (2k vs 2k+1).

export function ParityNumberLine({ C }) {
  const [showAlgebra, setShowAlgebra] = useState(false)
  const numbers = Array.from({ length: 21 }, (_, i) => i)

  return (
    <>
      <Mafs viewBox={{ x: [-0.5, 21], y: [-2.5, 3.2] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* Number line baseline */}
        <Polygon
          points={[
            [-0.2, -0.04],
            [20.2, -0.04],
            [20.2, 0.04],
            [-0.2, 0.04]
          ]}
          color={C.dim}
          fillOpacity={0.4}
        />
        {numbers.map(n => {
          const isEven = n % 2 === 0
          const k = Math.floor(n / 2)
          const label = showAlgebra ? (isEven ? `2·${k}` : `2·${k}+1`) : String(n)
          const yTick = isEven ? 0.55 : -0.55
          const yLabel = isEven ? 1.25 : -1.35

          return (
            <React.Fragment key={n}>
              {/* Tick mark */}
              <Polygon
                points={[
                  [n - 0.04, 0],
                  [n + 0.04, 0],
                  [n + 0.04, yTick],
                  [n - 0.04, yTick]
                ]}
                color={isEven ? C.fg : C.dim}
                fillOpacity={isEven ? 0.9 : 0.45}
              />
              {/* Dot */}
              <Point x={n} y={0} color={isEven ? C.fg : C.dim} />
              {/* Label */}
              <Text x={n} y={yLabel} size={FONT_LABEL} color={isEven ? C.fg : C.dim}>
                {label}
              </Text>
            </React.Fragment>
          )
        })}
        {/* Legend */}
        <Point x={1.2} y={2.8} color={C.fg} />
        <Text x={2.0} y={2.8} size={FONT_LABEL} color={C.fg}>
          {'even'}
        </Text>
        <Point x={6.5} y={2.8} color={C.dim} />
        <Text x={7.3} y={2.8} size={FONT_LABEL} color={C.dim}>
          {'odd'}
        </Text>
      </Mafs>
      <div
        style={{
          marginTop: 12,
          display: 'flex',
          gap: 8,
          fontFamily: FONT_FAMILY,
          fontSize: FONT_LABEL,
          textTransform: 'uppercase',
          letterSpacing: LS_UPPER
        }}
      >
        <button
          onClick={() => setShowAlgebra(v => !v)}
          style={{
            background: 'transparent',
            border: `1px solid ${showAlgebra ? 'var(--border-default)' : 'var(--border-subtle)'}`,
            color: 'var(--text-primary)',
            padding: '5px 14px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            letterSpacing: 'inherit',
            textTransform: 'inherit',
            opacity: showAlgebra ? 1 : 0.6
          }}
        >
          {showAlgebra ? 'show numbers' : 'show 2k / 2k+1'}
        </button>
      </div>
    </>
  )
}

// (b) ParityPairing
// Dot grid showing n dots arranged in rows of 2.
// Even n: all dots pair perfectly. Odd n: one dot is left over.
// Slider to pick n from 2..16.

export function ParityPairing({ C }) {
  const [n, setN] = useState(6)
  const isEven = n % 2 === 0
  const pairs = Math.floor(n / 2)
  const hasExtra = !isEven

  // Layout: each pair is two dots side by side. Extra dot sits alone.
  const COL_GAP = 0.9
  const ROW_GAP = 1.1
  const COLS = 4

  const dots = []
  for (let r = 0; r < pairs; r++) {
    const col = r % COLS
    const row = Math.floor(r / COLS)
    const x0 = col * (COL_GAP * 2 + 1.0)
    const y0 = row * ROW_GAP
    dots.push({ x: x0, y: y0, paired: true, key: `p${r}a` })
    dots.push({ x: x0 + COL_GAP, y: y0, paired: true, key: `p${r}b` })
  }
  if (hasExtra) {
    const col = pairs % COLS
    const row = Math.floor(pairs / COLS)
    const x0 = col * (COL_GAP * 2 + 1.0)
    const y0 = row * ROW_GAP
    dots.push({ x: x0, y: y0, paired: false, key: 'extra' })
  }

  // Tight viewBox around the dots actually placed (not the max possible
  // layout), so fullscreen centres the content instead of stranding it in the
  // left half. Recomputed per n as rows/columns change.
  const xsD = dots.map(d => d.x)
  const ysD = dots.map(d => d.y)
  const minX = Math.min(...xsD)
  const maxXd = Math.max(...xsD)
  const minY = Math.min(...ysD)
  const maxYd = Math.max(...ysD)

  return (
    <>
      <Mafs
        viewBox={{ x: [minX - 1, maxXd + 1], y: [minY - 1.5, maxYd + 1.5] }}
        height={220}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {dots.map(d => (
          <Point key={d.key} x={d.x} y={d.y} color={d.paired ? C.fg : C.accent || C.fg} />
        ))}
      </Mafs>
      <div
        aria-label="Pairing readout: the 2k or 2k plus 1 form"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={isEven ? `n = ${n} = 2 \\times ${pairs}` : `n = ${n} = 2 \\times ${pairs} + 1`}
          />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          {isEven ? 'all dots pair up, no remainder' : 'one dot left over, remainder 1'}
        </span>
      </div>
      <Slider
        label="n"
        value={n}
        min={2}
        max={16}
        step={1}
        onChange={v => setN(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </>
  )
}

// (c) ParitySumCalculator
// Pick two integers a and b. Show their parity (2k forms), the sum, and the
// resulting parity. Demonstrates the parity-of-sum rule from first principles.

export function ParitySumCalculator({ C }) {
  const [a, setA] = useState(4)
  const [b, setB] = useState(7)

  const isEvenA = a % 2 === 0
  const isEvenB = b % 2 === 0
  const sum = a + b
  const isEvenSum = sum % 2 === 0

  const parityLabel = v => (v % 2 === 0 ? 'even' : 'odd')
  const formLabel = v => {
    const k = Math.floor(v / 2)
    return v % 2 === 0 ? `2 \\times ${k}` : `2 \\times ${k} + 1`
  }

  const ruleLabel = () => {
    if (isEvenA && isEvenB) return 'even + even = even'
    if (!isEvenA && !isEvenB) return 'odd + odd = even'
    return 'even + odd = odd'
  }

  const BAR_W = 1.4
  const MAX_H = 8
  const MAX_VAL = 36 // a, b ≤ 18 ⇒ sum ≤ 36 - one scale holds every bar
  const scale = v => (Math.abs(v) / MAX_VAL) * MAX_H

  return (
    <>
      <Mafs
        viewBox={{ x: [-0.5, 9], y: [-1.4, MAX_H + 1.4] }}
        height={250}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* Bar for a */}
        <Polygon
          points={[
            [0.5, 0],
            [0.5 + BAR_W, 0],
            [0.5 + BAR_W, scale(a)],
            [0.5, scale(a)]
          ]}
          color={isEvenA ? C.fg : C.dim}
          fillOpacity={isEvenA ? 0.55 : 0.35}
        />
        <Text x={0.5 + BAR_W / 2} y={-0.7} size={FONT_LABEL} color={C.dim}>
          {'a'}
        </Text>
        <Text x={0.5 + BAR_W / 2} y={scale(a) + 0.55} size={FONT_LABEL} color={C.fg}>
          {`${a}: ${parityLabel(a)}`}
        </Text>

        {/* Plus sign */}
        <Text x={3.0} y={MAX_H / 2} size={FONT_LABEL} color={C.faint}>
          {'+'}
        </Text>

        {/* Bar for b */}
        <Polygon
          points={[
            [3.5, 0],
            [3.5 + BAR_W, 0],
            [3.5 + BAR_W, scale(b)],
            [3.5, scale(b)]
          ]}
          color={isEvenB ? C.fg : C.dim}
          fillOpacity={isEvenB ? 0.55 : 0.35}
        />
        <Text x={3.5 + BAR_W / 2} y={-0.7} size={FONT_LABEL} color={C.dim}>
          {'b'}
        </Text>
        <Text x={3.5 + BAR_W / 2} y={scale(b) + 0.55} size={FONT_LABEL} color={C.fg}>
          {`${b}: ${parityLabel(b)}`}
        </Text>

        {/* Equals sign */}
        <Text x={6.0} y={MAX_H / 2} size={FONT_LABEL} color={C.faint}>
          {'='}
        </Text>

        {/* Bar for sum */}
        <Polygon
          points={[
            [6.5, 0],
            [6.5 + BAR_W, 0],
            [6.5 + BAR_W, scale(sum)],
            [6.5, scale(sum)]
          ]}
          color={isEvenSum ? C.fg : C.dim}
          fillOpacity={isEvenSum ? 0.6 : 0.4}
        />
        <Text x={6.5 + BAR_W / 2} y={-0.7} size={FONT_LABEL} color={C.dim}>
          {'a+b'}
        </Text>
        <Text x={6.5 + BAR_W / 2} y={scale(sum) + 0.55} size={FONT_LABEL} color={C.fg}>
          {`${sum}: ${parityLabel(sum)}`}
        </Text>
      </Mafs>
      <div
        aria-label="Parity sum readout: the 2k forms and the rule"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: 0.55 }}>
          <KatexInline tex={`${formLabel(a)} + ${formLabel(b)} = ${formLabel(sum)}`} />
        </span>
        <span style={{ textTransform: 'uppercase' }}>{ruleLabel()}</span>
      </div>
      <Slider
        label="a"
        value={a}
        min={0}
        max={18}
        step={1}
        onChange={v => setA(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="b"
        value={b}
        min={0}
        max={18}
        step={1}
        onChange={v => setB(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </>
  )
}

// (d) ParityOfSquares
// Shows n² dots arranged as an n×n square. Highlights why even² is even and
// odd² is odd. Slider for n from 1..8.

export function ParityOfSquares({ C }) {
  const [n, setN] = useState(4)
  const isEven = n % 2 === 0
  const sq = n * n
  const DOT_GAP = 1.0

  const dots = []
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      dots.push({ x: c * DOT_GAP, y: r * DOT_GAP })
    }
  }

  const maxXY = (n - 1) * DOT_GAP
  const mid = maxXY / 2

  return (
    <>
      <Mafs
        viewBox={{ x: [-0.8, maxXY + 1.5], y: [-1.8, maxXY + 1.8] }}
        height={240}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {dots.map((d, i) => (
          <Point key={i} x={d.x} y={d.y} color={C.fg} />
        ))}
        {/* n label on side */}
        <Text x={-0.6} y={mid} size={FONT_LABEL} color={C.dim}>
          {`n=${n}`}
        </Text>
        {/* n label on top */}
        <Text x={mid} y={maxXY + 1.2} size={FONT_LABEL} color={C.dim}>
          {`n=${n}`}
        </Text>
      </Mafs>
      <div
        aria-label="Parity of squares readout: n squared inherits the parity of n"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={
              isEven
                ? `n^2 = ${n}^2 = ${sq} = 2 \\times ${sq / 2}`
                : `n^2 = ${n}^2 = ${sq} = 2 \\times ${Math.floor(sq / 2)} + 1`
            }
          />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          {isEven ? 'even × even: even' : 'odd × odd: odd'}
        </span>
      </div>
      <Slider
        label="n"
        value={n}
        min={1}
        max={8}
        step={1}
        onChange={v => setN(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </>
  )
}
