// Consolidated arithmetic tools: 28 interactive manipulatives + shared utilities + ToolShell wrapper, in a single file.
// Each tool is IIFE-wrapped so file-local consts (INIT, SVG_W, SVG_H, PAD_X, OPS, CX, COLS) stay scoped to their own tool.

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { useVizColors } from '../theme'
import '../viz.css'

export { useVizColors }

// ═══════════════════════════════════════════════════════════════════════
// Shared utilities (from former shared.jsx)
// ═══════════════════════════════════════════════════════════════════════

// Constants
export const F = { fontFamily: 'var(--reader-font-family)' }
export const SVG_W = 620
export const TOOL_MAX_W = 700
export const TOOL_PAD = '24px 16px'

// Stable ID hook (replaces global counter anti-pattern)
export function useStableId() {
  const ref = useRef(0)
  return useCallback(() => ++ref.current, [])
}

// Slider Control
export const SliderControl = ({ label, value, onChange, min, max, step = 1, C, display }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
    <span
      style={{
        fontFamily: 'var(--reader-font-family)',
        fontSize: 11,
        color: C.dim,
        minWidth: 100,
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }}
    >
      {label}
    </span>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={e => onChange(+e.target.value)}
      style={{ flex: 1, accentColor: C.fg }}
      aria-label={label}
    />
    <span
      style={{
        fontFamily: 'var(--reader-font-family)',
        fontSize: 11,
        color: C.fg,
        minWidth: 40,
        textAlign: 'right'
      }}
    >
      {display !== undefined ? display : value}
    </span>
  </div>
)

// Button style factory
export const btnStyle = (active, C) => ({
  fontFamily: 'var(--reader-font-family)',
  fontSize: 12,
  letterSpacing: '0.08em',
  padding: '6px 16px',
  background: active ? C.fg : 'transparent',
  color: active ? '#000' : C.fg,
  border: `1px solid ${active ? C.fg : C.dim}`,
  cursor: 'pointer',
  textTransform: 'uppercase',
  minHeight: 44
})

// Toggle Button Group
export const ToggleButtonGroup = ({ options, value, onChange, C }) => (
  <div style={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
    {options.map(opt => (
      <button
        key={opt.value ?? opt}
        style={btnStyle((opt.value ?? opt) === value, C)}
        onClick={() => onChange(opt.value ?? opt)}
        aria-label={opt.label ?? opt}
      >
        {opt.label ?? opt}
      </button>
    ))}
  </div>
)

// Number Input
export const NumberInput = ({ value, onChange, min, max, C, width = 60, label }) => (
  <input
    type="number"
    min={min}
    max={max}
    value={value}
    onChange={e => {
      const v = +e.target.value
      if (v >= min && v <= max) onChange(v)
    }}
    aria-label={label}
    className="tool-number-input"
    style={{
      width,
      background: 'transparent',
      border: `1px solid ${C.dim}`,
      color: C.fg,
      fontFamily: 'var(--reader-font-family)',
      fontSize: 14,
      padding: '6px 8px',
      textAlign: 'center',
      minHeight: 44,
      outline: 'none',
      MozAppearance: 'textfield',
      WebkitAppearance: 'none',
      appearance: 'textfield'
    }}
  />
)

// Instruction Text (Layer 5)
export const InstructionText = ({ children, C }) => (
  <p
    style={{
      fontFamily: 'var(--reader-font-family)',
      fontSize: 11,
      color: C.dim,
      textAlign: 'center',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      margin: '12px 0 4px'
    }}
  >
    {children}
  </p>
)

// Step Indicator
export const StepIndicator = ({ current, total, C }) => (
  <span
    style={{
      fontFamily: 'var(--reader-font-family)',
      fontSize: 11,
      color: C.dim,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }}
  >
    STEP {current} OF {total}
  </span>
)

// SVG: Stacked Fraction (numerator over denominator with a bar)
export const SvgFraction = ({ x, y, num, den, C, fontSize = 14, fill, fontWeight }) => {
  const color = fill ?? C.fg
  const charW = fontSize * 0.62
  const maxLen = Math.max(String(num).length, String(den).length)
  const barHalf = (maxLen * charW) / 2 + 1
  const numY = y - fontSize * 0.25
  const denY = y + fontSize * 0.95
  return (
    <g {...F}>
      <text
        x={x}
        y={numY}
        textAnchor="middle"
        fill={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {num}
      </text>
      <line
        x1={x - barHalf}
        y1={y + 1}
        x2={x + barHalf}
        y2={y + 1}
        stroke={color}
        strokeWidth={1}
      />
      <text
        x={x}
        y={denY}
        textAnchor="middle"
        fill={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {den}
      </text>
    </g>
  )
}

// HTML inline stacked fraction (for buttons and flow text)
export const InlineFraction = ({ num, den, color }) => (
  <span
    style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      verticalAlign: 'middle',
      lineHeight: 1,
      margin: '0 2px',
      fontSize: '0.95em',
      color
    }}
  >
    <span style={{ padding: '0 4px' }}>{num}</span>
    <span
      style={{
        borderTop: '1px solid currentColor',
        padding: '0 4px',
        width: '100%',
        textAlign: 'center'
      }}
    >
      {den}
    </span>
  </span>
)

// SVG: Measurement Bracket (Layer 4)
export const MeasurementBracket = ({
  x1,
  x2,
  y,
  label,
  fractionLabel,
  C,
  direction = 'below',
  tickH = 6
}) => {
  const ty = direction === 'below' ? y + tickH + 14 : y - tickH - 6
  const fx = (x1 + x2) / 2
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={C.dim} strokeWidth={1} />
      <line x1={x1} y1={y - tickH / 2} x2={x1} y2={y + tickH / 2} stroke={C.dim} strokeWidth={1} />
      <line x1={x2} y1={y - tickH / 2} x2={x2} y2={y + tickH / 2} stroke={C.dim} strokeWidth={1} />
      {fractionLabel ? (
        <SvgFraction
          x={fx}
          y={direction === 'below' ? y + tickH + 8 : y - tickH - 18}
          num={fractionLabel.num}
          den={fractionLabel.den}
          C={C}
          fontSize={11}
          fill={C.dim}
        />
      ) : (
        label && (
          <text x={fx} y={ty} textAnchor="middle" fill={C.dim} fontSize={11} {...F}>
            {label}
          </text>
        )
      )}
    </g>
  )
}

// SVG: Dashed Connector (Layer 4)
export const DashedConnector = ({ x1, y1, x2, y2, C }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.dim} strokeWidth={1} strokeDasharray="4 4" />
)

// Math utilities
export function gcd(a, b) {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) {
    const t = b
    b = a % b
    a = t
  }
  return a
}

export function isPrime(n) {
  if (n < 2) return false
  if (n < 4) return true
  if (n % 2 === 0 || n % 3 === 0) return false
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }
  return true
}

export function primeFactors(n) {
  const factors = []
  let d = 2
  while (d * d <= n) {
    while (n % d === 0) {
      factors.push(d)
      n /= d
    }
    d++
  }
  if (n > 1) factors.push(n)
  return factors
}

// ═══════════════════════════════════════════════════════════════════════
// ToolShell wrapper (from former tool-shell.jsx)
// ═══════════════════════════════════════════════════════════════════════

export function ToolShell({ title, onBack, onReset, children }) {
  return (
    <div className="ts-root">
      <div className="ts-nav">
        <button
          className="ts-back-btn"
          onClick={onBack}
          aria-label="Back to tools"
          title="Back to tools"
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
        <span className="ts-title">{title}</span>
        {onReset && (
          <button className="ts-reset-btn" onClick={onReset} aria-label="Reset tool">
            Reset
          </button>
        )}
      </div>
      {children}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 28 interactive tools
// ═══════════════════════════════════════════════════════════════════════

// ─── ten-frame ──────────────────────────────────────────────────────
export const TenFrame = (() => {
  const INIT = Array(10).fill(false)

  function TenFrame({ toolName, onBack }) {
    const C = useVizColors()
    const [filled, setFilled] = useState(INIT)
    const count = filled.filter(Boolean).length
    const topRow = filled.slice(0, 5).filter(Boolean).length
    const botRow = filled.slice(5).filter(Boolean).length

    const toggle = i => setFilled(f => f.map((v, j) => (j === i ? !v : v)))
    const handleReset = () => setFilled(INIT)

    const cellW = 84,
      cellH = 74,
      gap = 4,
      padX = 60,
      padY = 50
    const totalW = 5 * cellW + 4 * gap
    const totalH = 2 * cellH + gap
    const svgW = totalW + padX * 2
    const bracketX = padX + totalW + 14
    const svgH = totalH + padY * 2 + 30

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <div className="lrn-graph">
            <svg viewBox={`0 0 ${svgW + 50} ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Layer 1: Row background fills */}
              <rect
                x={padX}
                y={padY}
                width={totalW}
                height={cellH}
                fill={C.faint}
                fillOpacity={0.4}
              />
              <rect
                x={padX}
                y={padY + cellH + gap}
                width={totalW}
                height={cellH}
                fill={C.faint}
                fillOpacity={0.2}
              />

              {/* Layer 2+3: Grid cells and counters */}
              {Array.from({ length: 10 }, (_, i) => {
                const row = Math.floor(i / 5)
                const col = i % 5
                const x = padX + col * (cellW + gap)
                const y = padY + row * (cellH + gap)
                return (
                  <g
                    key={i}
                    onClick={() => toggle(i)}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Cell ${i + 1}: ${filled[i] ? 'filled' : 'empty'}`}
                    onKeyDown={e => {
                      if (e.key === 'Enter') toggle(i)
                    }}
                  >
                    <rect
                      x={x}
                      y={y}
                      width={cellW}
                      height={cellH}
                      fill="transparent"
                      stroke={C.dim}
                      strokeWidth={1}
                    />
                    {filled[i] && (
                      <circle
                        cx={x + cellW / 2}
                        cy={y + cellH / 2}
                        r={26}
                        fill={C.accent}
                        fillOpacity={0.25}
                        stroke={C.fg}
                        strokeWidth={1.5}
                      />
                    )}
                  </g>
                )
              })}

              {/* Layer 4: Row count labels */}
              <text
                x={bracketX}
                y={padY + cellH / 2 + 5}
                textAnchor="start"
                fill={C.dim}
                fontSize={14}
                fontWeight="bold"
                {...F}
              >
                {topRow}
              </text>
              <text
                x={bracketX}
                y={padY + cellH + gap + cellH / 2 + 5}
                textAnchor="start"
                fill={C.dim}
                fontSize={14}
                fontWeight="bold"
                {...F}
              >
                {botRow}
              </text>

              {/* Layer 6: Result header */}
              <text
                x={padX + totalW / 2}
                y={padY - 18}
                textAnchor="middle"
                fill={C.fg}
                fontSize={16}
                fontWeight="bold"
                {...F}
              >
                {count === 0 ? 'EMPTY' : `${count} COUNTER${count !== 1 ? 'S' : ''}`}
              </text>
              <text
                x={padX + totalW / 2}
                y={padY - 4}
                textAnchor="middle"
                fill={C.dim}
                fontSize={11}
                {...F}
                letterSpacing="0.06em"
              >
                {10 - count} TO MAKE 10
              </text>
            </svg>
          </div>
          <InstructionText C={C}>CLICK CELLS TO TOGGLE COUNTERS</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return TenFrame
})()

// ─── rekenrek ──────────────────────────────────────────────────────
export const Rekenrek = (() => {
  const INIT_SLID = Array(5).fill(0)

  function Rekenrek({ toolName, onBack }) {
    const C = useVizColors()
    const [rowCount, setRowCount] = useState(2)
    const [slid, setSlid] = useState(INIT_SLID)

    const handleReset = () => {
      setSlid(INIT_SLID)
      setRowCount(2)
    }

    const handleClick = useCallback((row, beadIdx) => {
      setSlid(prev => {
        const next = [...prev]
        next[row] = prev[row] === beadIdx + 1 ? beadIdx : beadIdx + 1
        return next
      })
    }, [])

    const total = slid.slice(0, rowCount).reduce((s, v) => s + v, 0)

    const padX = 50,
      padY = 44,
      rowH = 48,
      beadR = 14,
      beadGap = 32
    const rodLeft = padX + 24
    const rodRight = rodLeft + 10 * beadGap + 40
    const rodLen = rodRight - rodLeft
    const labelRightX = rodRight + 28
    const svgW = labelRightX + 40
    const bracketY = padY + rowCount * rowH + 24
    const svgH = bracketY + 48

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <SliderControl
            label="ROWS"
            value={rowCount}
            onChange={setRowCount}
            min={1}
            max={5}
            C={C}
          />

          <div className="lrn-graph" style={{ marginTop: 16 }}>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Layer 1: Alternating row fills */}
              {Array.from({ length: rowCount }, (_, row) => (
                <rect
                  key={`bg${row}`}
                  x={rodLeft - 10}
                  y={padY + row * rowH - 4}
                  width={rodLen + 20}
                  height={rowH}
                  fill={C.faint}
                  fillOpacity={row % 2 === 0 ? 0.5 : 0.25}
                />
              ))}

              {/* Layer 2: Frame border */}
              <rect
                x={rodLeft - 10}
                y={padY - 4}
                width={rodLen + 20}
                height={rowCount * rowH}
                fill="none"
                stroke={C.dim}
                strokeWidth={1}
              />

              {Array.from({ length: rowCount }, (_, row) => {
                const y = padY + row * rowH + rowH / 2 - 4
                const slidCount = slid[row]
                const left5 = Math.min(slidCount, 5)
                const right5 = Math.max(slidCount - 5, 0)

                return (
                  <g key={row}>
                    {/* Layer 2: Rod */}
                    <line
                      x1={rodLeft}
                      y1={y}
                      x2={rodRight}
                      y2={y}
                      stroke={C.dim}
                      strokeWidth={1.5}
                    />

                    {/* Layer 3: Beads */}
                    {Array.from({ length: 10 }, (_, i) => {
                      const isSlid = i < slidCount
                      const isAccent = i < 5
                      const beadD = beadR * 2 + 2
                      let cx
                      if (isSlid) {
                        // Slid beads cluster flush left
                        cx = rodLeft + beadR + 4 + i * beadD
                      } else {
                        // Unslid beads cluster flush right
                        const fromRight = 9 - i // 0 = rightmost bead
                        cx = rodRight - beadR - 4 - fromRight * beadD
                      }

                      return (
                        <circle
                          key={i}
                          cx={cx}
                          cy={y}
                          r={beadR}
                          fill={isAccent ? C.accent : C.fg}
                          fillOpacity={isAccent ? 0.35 : 0.2}
                          stroke={isAccent ? C.fg : C.dim}
                          strokeWidth={1}
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleClick(row, i)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Row ${row + 1} bead ${i + 1}`}
                          onKeyDown={e => {
                            if (e.key === 'Enter') handleClick(row, i)
                          }}
                        />
                      )
                    })}

                    {/* Layer 3: Per-row count label on right */}
                    <text
                      x={labelRightX}
                      y={y + 5}
                      textAnchor="middle"
                      fill={C.fg}
                      fontSize={14}
                      fontWeight="bold"
                      {...F}
                    >
                      {slidCount}
                    </text>

                    {/* Layer 6: Per-row decomposition */}
                    <text
                      x={labelRightX + 50}
                      y={y + 5}
                      textAnchor="middle"
                      fill={C.dim}
                      fontSize={11}
                      {...F}
                      letterSpacing="0.04em"
                    >
                      {left5} + {right5}
                    </text>
                  </g>
                )
              })}

              {/* Layer 4: Measurement bracket below - total */}
              <MeasurementBracket
                x1={rodLeft - 10}
                x2={rodRight + 10}
                y={bracketY}
                label={`TOTAL: ${total}`}
                C={C}
              />

              {/* Layer 6: Result display */}
              <text
                x={svgW / 2}
                y={padY - 18}
                textAnchor="middle"
                fill={C.fg}
                fontSize={16}
                fontWeight="bold"
                {...F}
              >
                {total === 0 ? 'EMPTY' : `${total} BEAD${total !== 1 ? 'S' : ''} SLID`}
              </text>
            </svg>
          </div>

          {/* Layer 5: Instruction */}
          <InstructionText C={C}>CLICK A BEAD TO SLIDE</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return Rekenrek
})()

// ─── number-bonds ──────────────────────────────────────────────────────
export const NumberBonds = (() => {
  function NumberBonds({ toolName, onBack }) {
    const C = useVizColors()
    const [total, setTotal] = useState(10)
    const [partA, setPartA] = useState(6)
    const partB = total - partA

    const handleReset = () => {
      setTotal(10)
      setPartA(6)
    }
    const handleTotalChange = v => {
      setTotal(v)
      if (partA > v) setPartA(v)
    }

    const cx = 310,
      topY = 100,
      botY = 250,
      rTop = 44,
      rBot = 36
    const leftX = 160,
      rightX = 460
    const svgH = 390

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <div className="lrn-graph">
            <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Layer 1: Subtle circle fills */}
              <circle cx={cx} cy={topY} r={rTop} fill={C.accent} fillOpacity={0.08} />
              <circle cx={leftX} cy={botY} r={rBot} fill={C.fg} fillOpacity={0.06} />
              <circle cx={rightX} cy={botY} r={rBot} fill={C.faint} fillOpacity={0.08} />

              {/* Layer 6: Header label */}
              <text
                x={cx}
                y={22}
                textAnchor="middle"
                fill={C.dim}
                fontSize={11}
                {...F}
                letterSpacing="0.06em"
              >
                PART + PART = WHOLE
              </text>

              {/* Layer 4: Dashed connectors */}
              <DashedConnector x1={cx} y1={topY + rTop} x2={leftX} y2={botY - rBot} C={C} />
              <DashedConnector x1={cx} y1={topY + rTop} x2={rightX} y2={botY - rBot} C={C} />

              {/* Layer 2: Circle borders */}
              <circle cx={cx} cy={topY} r={rTop} fill="none" stroke={C.dim} strokeWidth={1} />
              <circle cx={leftX} cy={botY} r={rBot} fill="none" stroke={C.dim} strokeWidth={1} />
              <circle cx={rightX} cy={botY} r={rBot} fill="none" stroke={C.dim} strokeWidth={1} />

              {/* Layer 3: Circle labels */}
              <text
                x={cx}
                y={topY + 8}
                textAnchor="middle"
                fill={C.fg}
                fontSize={24}
                fontWeight="bold"
                {...F}
              >
                {total}
              </text>
              <text x={leftX} y={botY + 6} textAnchor="middle" fill={C.fg} fontSize={20} {...F}>
                {partA}
              </text>
              <text x={rightX} y={botY + 6} textAnchor="middle" fill={C.fg} fontSize={20} {...F}>
                {partB}
              </text>

              {/* Layer 3: Role labels */}
              <text
                x={cx}
                y={topY - rTop - 8}
                textAnchor="middle"
                fill={C.dim}
                fontSize={10}
                {...F}
                letterSpacing="0.06em"
              >
                WHOLE
              </text>
              <text
                x={leftX}
                y={botY + rBot + 16}
                textAnchor="middle"
                fill={C.dim}
                fontSize={10}
                {...F}
                letterSpacing="0.06em"
              >
                PART
              </text>
              <text
                x={rightX}
                y={botY + rBot + 16}
                textAnchor="middle"
                fill={C.dim}
                fontSize={10}
                {...F}
                letterSpacing="0.06em"
              >
                PART
              </text>

              {/* Layer 6: Equation */}
              <text
                x={cx}
                y={svgH - 50}
                textAnchor="middle"
                fill={C.fg}
                fontSize={16}
                fontWeight="bold"
                {...F}
              >
                {partA} + {partB} = {total}
              </text>
            </svg>
          </div>

          {/* Layer 5: Instruction */}
          <InstructionText C={C}>ADJUST SLIDERS TO EXPLORE DECOMPOSITIONS</InstructionText>

          <div style={{ marginTop: 12 }}>
            <SliderControl
              label="TOTAL"
              value={total}
              onChange={handleTotalChange}
              min={1}
              max={20}
              C={C}
            />
            <SliderControl
              label="PART A"
              value={partA}
              onChange={setPartA}
              min={0}
              max={total}
              C={C}
            />
          </div>
        </div>
      </ToolShell>
    )
  }
  return NumberBonds
})()

// ─── number-pair-decomposer ──────────────────────────────────────────────────────
export const NumberPairDecomposer = (() => {
  function NumberPairDecomposer({ toolName, onBack }) {
    const C = useVizColors()
    const [total, setTotal] = useState(10)
    const [split, setSplit] = useState(5)
    const right = total - split

    const handleReset = () => {
      setTotal(10)
      setSplit(5)
    }
    const handleTotalChange = v => {
      setTotal(v)
      if (split >= v) setSplit(v - 1)
    }

    const padX = 40,
      barY = 70,
      barH = 60
    const barW = 620 - padX * 2
    const splitX = padX + (split / total) * barW
    const leftBracketY = barY + barH + 18
    const totalBracketY = leftBracketY + 34
    const svgH = totalBracketY + 48

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <div className="lrn-graph">
            <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Layer 6: Result header */}
              <text
                x={310}
                y={barY - 26}
                textAnchor="middle"
                fill={C.fg}
                fontSize={16}
                fontWeight="bold"
                {...F}
              >
                {split} + {right} = {total}
              </text>
              <text
                x={310}
                y={barY - 10}
                textAnchor="middle"
                fill={C.dim}
                fontSize={11}
                {...F}
                letterSpacing="0.06em"
              >
                DECOMPOSITION
              </text>

              {/* Layer 1: Left portion fill */}
              <rect
                x={padX}
                y={barY}
                width={splitX - padX}
                height={barH}
                fill={C.accent}
                fillOpacity={0.2}
              />

              {/* Layer 1: Right portion fill */}
              <rect
                x={splitX}
                y={barY}
                width={padX + barW - splitX}
                height={barH}
                fill={C.faint}
                fillOpacity={0.08}
              />

              {/* Layer 2: Outer border */}
              <rect
                x={padX}
                y={barY}
                width={barW}
                height={barH}
                fill="none"
                stroke={C.dim}
                strokeWidth={1}
              />

              {/* Layer 2: Dividing line (dashed) */}
              <line
                x1={splitX}
                y1={barY}
                x2={splitX}
                y2={barY + barH}
                stroke={C.fg}
                strokeWidth={1.5}
                strokeDasharray="4 4"
              />

              {/* Layer 3: Value labels inside bar */}
              {split > 0 && (
                <text
                  x={padX + (splitX - padX) / 2}
                  y={barY + barH / 2 + 6}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={18}
                  fontWeight="bold"
                  {...F}
                >
                  {split}
                </text>
              )}
              {right > 0 && (
                <text
                  x={splitX + (padX + barW - splitX) / 2}
                  y={barY + barH / 2 + 6}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={18}
                  fontWeight="bold"
                  {...F}
                >
                  {right}
                </text>
              )}

              {/* Layer 4: Measurement brackets - left and right portions */}
              {split > 0 && (
                <MeasurementBracket
                  x1={padX}
                  x2={splitX - 1}
                  y={leftBracketY}
                  label={`${split}`}
                  C={C}
                />
              )}
              {right > 0 && (
                <MeasurementBracket
                  x1={splitX + 1}
                  x2={padX + barW}
                  y={leftBracketY}
                  label={`${right}`}
                  C={C}
                />
              )}

              {/* Layer 4: Total bracket spanning both */}
              <MeasurementBracket
                x1={padX}
                x2={padX + barW}
                y={totalBracketY}
                label={`TOTAL: ${total}`}
                C={C}
              />

              {/* Layer 6: Commutative note */}
              <text
                x={310}
                y={svgH - 6}
                textAnchor="middle"
                fill={C.dim}
                fontSize={11}
                {...F}
                letterSpacing="0.04em"
              >
                {right} + {split} = {total} (COMMUTATIVE)
              </text>
            </svg>
          </div>

          {/* Layer 5: Instruction */}
          <InstructionText C={C}>SLIDE TO DECOMPOSE</InstructionText>

          <div style={{ marginTop: 12 }}>
            <SliderControl
              label="TOTAL"
              value={total}
              onChange={handleTotalChange}
              min={2}
              max={50}
              C={C}
            />
            <SliderControl
              label="SPLIT"
              value={split}
              onChange={setSplit}
              min={1}
              max={total - 1}
              C={C}
            />
          </div>
        </div>
      </ToolShell>
    )
  }
  return NumberPairDecomposer
})()

// ─── make-a-ten ──────────────────────────────────────────────────────
export const MakeATen = (() => {
  const INIT = { a: 8, b: 5, step: 0 }

  function MakeATen({ toolName, onBack }) {
    const C = useVizColors()
    const [state, setState] = useState(INIT)
    const { a, b, step } = state
    const set = patch => setState(s => ({ ...s, ...patch }))

    const handleReset = () => setState(INIT)

    const toMove = 10 - a
    const remainder = b - toMove
    const valid = a + b > 10 && a < 10 && b < 10 && toMove <= b && toMove > 0

    // Ten-frame layout
    const frameW = 200,
      cellW = 40,
      cellH = 50
    const frameLeftX = 60,
      frameRightX = 350
    const frameY = 60

    const cellPos = (frame, idx) => {
      const col = idx % 5
      const row = Math.floor(idx / 5)
      const fx = frame === 0 ? frameLeftX : frameRightX
      return { x: fx + col * cellW, y: frameY + row * cellH }
    }

    const svgH = 360

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <SliderControl
            label="A"
            value={a}
            onChange={v => set({ a: v, step: 0 })}
            min={1}
            max={9}
            C={C}
          />
          <SliderControl
            label="B"
            value={b}
            onChange={v => set({ b: v, step: 0 })}
            min={1}
            max={9}
            C={C}
          />

          {!valid && (
            <div
              style={{
                fontFamily: 'var(--reader-font-family)',
                fontSize: 12,
                color: C.dim,
                margin: '8px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              CHOOSE A + B GREATER THAN 10 WITH BOTH UNDER 10
            </div>
          )}

          {valid && (
            <div style={{ display: 'flex', gap: 8, margin: '12px 0', alignItems: 'center' }}>
              <button
                style={btnStyle(false, C)}
                onClick={() => set({ step: Math.max(step - 1, 0) })}
              >
                PREV
              </button>
              <button
                style={btnStyle(false, C)}
                onClick={() => set({ step: Math.min(step + 1, 3) })}
              >
                NEXT
              </button>
              <StepIndicator current={step} total={3} C={C} />
            </div>
          )}

          <div className="lrn-graph" style={{ marginTop: 16 }}>
            <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Frame labels */}
              <text
                x={frameLeftX + frameW / 2}
                y={frameY - 12}
                textAnchor="middle"
                fill={C.dim}
                fontSize={11}
                {...F}
              >
                FRAME A
              </text>
              <text
                x={frameRightX + frameW / 2}
                y={frameY - 12}
                textAnchor="middle"
                fill={C.dim}
                fontSize={11}
                {...F}
              >
                FRAME B
              </text>

              {/* Draw both ten-frames */}
              {[0, 1].map(frame => (
                <g key={frame}>
                  {Array.from({ length: 10 }, (_, i) => {
                    const { x, y } = cellPos(frame, i)
                    const col = i % 5
                    return (
                      <rect
                        key={i}
                        x={x}
                        y={y}
                        width={cellW}
                        height={cellH}
                        fill={C.fg}
                        fillOpacity={col % 2 === 0 ? 0.04 : 0.08}
                        stroke={C.faint}
                        strokeWidth={1}
                      />
                    )
                  })}
                  {/* Frame border */}
                  <rect
                    x={frame === 0 ? frameLeftX : frameRightX}
                    y={frameY}
                    width={5 * cellW}
                    height={2 * cellH}
                    fill="none"
                    stroke={C.dim}
                    strokeWidth={1.5}
                  />
                </g>
              ))}

              {/* Counters in frame A */}
              {(() => {
                const aCount = valid && step >= 2 ? Math.min(a + toMove, 10) : a
                return Array.from({ length: aCount }, (_, i) => {
                  const { x, y } = cellPos(0, i)
                  const isTransferred = valid && i >= a
                  return (
                    <circle
                      key={`a${i}`}
                      cx={x + cellW / 2}
                      cy={y + cellH / 2}
                      r={16}
                      fill={isTransferred ? C.accent : C.fg}
                      fillOpacity={isTransferred ? 0.3 : 0.25}
                      stroke={isTransferred ? C.accent : C.fg}
                      strokeWidth={1.5}
                    />
                  )
                })
              })()}

              {/* Counters in frame B */}
              {(() => {
                const bCount = valid && step >= 2 ? remainder : b
                return Array.from({ length: bCount }, (_, i) => {
                  const { x, y } = cellPos(1, i)
                  const willMove = valid && step === 1 && i >= b - toMove
                  return (
                    <circle
                      key={`b${i}`}
                      cx={x + cellW / 2}
                      cy={y + cellH / 2}
                      r={16}
                      fill={willMove ? C.accent : C.fg}
                      fillOpacity={willMove ? 0.3 : 0.2}
                      stroke={willMove ? C.accent : C.dim}
                      strokeWidth={willMove ? 2 : 1}
                    />
                  )
                })
              })()}

              {/* Layer 4: DashedConnector curved arrow at step 2 */}
              {valid &&
                step === 2 &&
                (() => {
                  const fromX = frameRightX + 20
                  const toX = frameLeftX + frameW - 20
                  const midX = (fromX + toX) / 2
                  const arcY = frameY - 30
                  return (
                    <g>
                      <path
                        d={`M ${fromX} ${frameY + 10} Q ${midX} ${arcY} ${toX} ${frameY + 10}`}
                        fill="none"
                        stroke={C.dim}
                        strokeWidth={1}
                        strokeDasharray="4 4"
                      />
                      <polygon
                        points={`${toX},${frameY + 10} ${toX + 6},${frameY + 4} ${toX + 6},${frameY + 16}`}
                        fill={C.dim}
                      />
                      <text
                        x={midX}
                        y={arcY - 6}
                        textAnchor="middle"
                        fill={C.dim}
                        fontSize={10}
                        {...F}
                      >
                        MOVE {toMove}
                      </text>
                    </g>
                  )
                })()}

              {/* Layer 4: MeasurementBracket below Frame A at step 1 */}
              {valid && step === 1 && (
                <MeasurementBracket
                  x1={frameLeftX}
                  x2={frameLeftX + frameW}
                  y={frameY + 2 * cellH + 12}
                  label={`NEED ${toMove} MORE`}
                  C={C}
                  direction="below"
                  tickH={5}
                />
              )}

              {/* Layer 6: Step equation with bold changing part */}
              {valid &&
                (() => {
                  const eqY = frameY + 2 * cellH + 60
                  const equations = [
                    { text: `${a} + ${b}`, bold: true },
                    {
                      parts: [
                        { text: `${a} + (`, bold: false },
                        { text: `${toMove}`, bold: true },
                        { text: ` + ${remainder})`, bold: false }
                      ]
                    },
                    {
                      parts: [
                        { text: `(${a} + `, bold: false },
                        { text: `${toMove}`, bold: true },
                        { text: `) + ${remainder}`, bold: false }
                      ]
                    },
                    { text: `10 + ${remainder} = ${a + b}`, bold: true }
                  ]
                  const eq = equations[step]

                  if (eq.parts) {
                    let xOff = 0
                    // Approximate centering
                    const fullText = eq.parts.map(p => p.text).join('')
                    const approxW = fullText.length * 9
                    const startX = 310 - approxW / 2
                    return eq.parts.map((p, pi) => {
                      const el = (
                        <text
                          key={pi}
                          x={startX + xOff}
                          y={eqY}
                          fill={p.bold ? C.fg : C.dim}
                          fontSize={16}
                          {...F}
                          fontWeight={p.bold ? 'bold' : 'normal'}
                        >
                          {p.text}
                        </text>
                      )
                      xOff += p.text.length * 9
                      return el
                    })
                  }
                  return (
                    <text
                      x={310}
                      y={eqY}
                      textAnchor="middle"
                      fill={C.fg}
                      fontSize={16}
                      {...F}
                      fontWeight={eq.bold ? 'bold' : 'normal'}
                    >
                      {eq.text}
                    </text>
                  )
                })()}

              {/* Step description */}
              {valid && step === 1 && (
                <text x={310} y={svgH - 16} textAnchor="middle" fill={C.dim} fontSize={11} {...F}>
                  TAKE {toMove} FROM B TO FILL A TO 10
                </text>
              )}
              {valid && step === 2 && (
                <text x={310} y={svgH - 16} textAnchor="middle" fill={C.dim} fontSize={11} {...F}>
                  MOVE {toMove} COUNTER{toMove !== 1 ? 'S' : ''} INTO FRAME A
                </text>
              )}
              {valid && step === 3 && (
                <text
                  x={310}
                  y={svgH - 16}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={14}
                  {...F}
                  fontWeight="bold"
                >
                  FRAME A IS FULL (10) + {remainder} REMAINING = {a + b}
                </text>
              )}
            </svg>
          </div>

          {/* Layer 5 */}
          <InstructionText C={C}>STEP THROUGH THE MAKE-A-TEN STRATEGY</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return MakeATen
})()

// ─── base-ten-blocks ──────────────────────────────────────────────────────
export const BaseTenBlocks = (() => {
  const INIT = { units: 7, rods: 3, flats: 2 }

  function BaseTenBlocks({ toolName, onBack }) {
    const C = useVizColors()
    const [s, setS] = useState(INIT)
    const handleReset = () => setS(INIT)

    const total = s.flats * 100 + s.rods * 10 + s.units

    // Auto-regroup: carry all 10+ groups up
    const regroup = () => {
      let u = s.units,
        r = s.rods,
        f = s.flats
      const carry = Math.floor(u / 10)
      u = u % 10
      r += carry
      const carry2 = Math.floor(r / 10)
      r = r % 10
      f += carry2
      setS({ units: u, rods: r, flats: f })
    }

    // Break apart: break one flat into 10 rods, or one rod into 10 units
    const breakApart = () => {
      if (s.flats > 0) setS(p => ({ ...p, flats: p.flats - 1, rods: p.rods + 10 }))
      else if (s.rods > 0) setS(p => ({ ...p, rods: p.rods - 1, units: p.units + 10 }))
    }

    const canRegroup = s.units >= 10 || s.rods >= 10
    const canBreak = s.flats > 0 || s.rods > 0

    // Layout
    const colW = 180,
      padX = 40,
      colGap = 10
    const blockY = 50
    const col1X = padX,
      col2X = padX + colW + colGap,
      col3X = padX + 2 * (colW + colGap)

    const flatRows = Math.ceil(Math.min(s.flats, 12) / 2)
    const rodRows = Math.ceil(Math.min(s.rods, 20) / 5)
    const unitRows = Math.ceil(Math.min(s.units, 30) / 5)
    const maxH = Math.max(flatRows * 62, rodRows * 62, unitRows * 14, 80)
    const svgH = blockY + maxH + 50

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Sliders */}
          <SliderControl
            label="HUNDREDS"
            value={s.flats}
            onChange={v => setS(p => ({ ...p, flats: v }))}
            min={0}
            max={12}
            C={C}
          />
          <SliderControl
            label="TENS"
            value={s.rods}
            onChange={v => setS(p => ({ ...p, rods: v }))}
            min={0}
            max={20}
            C={C}
          />
          <SliderControl
            label="ONES"
            value={s.units}
            onChange={v => setS(p => ({ ...p, units: v }))}
            min={0}
            max={30}
            C={C}
          />

          {/* Regroup buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '12px 0' }}>
            <button
              style={{
                ...btnStyle(false, C),
                opacity: canRegroup ? 1 : 0.3,
                borderColor: canRegroup ? C.accent : undefined
              }}
              disabled={!canRegroup}
              onClick={regroup}
            >
              REGROUP
            </button>
            <button
              style={{ ...btnStyle(false, C), opacity: canBreak ? 1 : 0.3 }}
              disabled={!canBreak}
              onClick={breakApart}
            >
              BREAK APART
            </button>
          </div>

          {/* Visualization */}
          <div className="lrn-graph">
            <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Column backgrounds */}
              <rect
                x={col1X}
                y={blockY}
                width={colW}
                height={maxH}
                fill={C.fg}
                fillOpacity={0.04}
              />
              <rect
                x={col2X}
                y={blockY}
                width={colW}
                height={maxH}
                fill={C.fg}
                fillOpacity={0.06}
              />
              <rect
                x={col3X}
                y={blockY}
                width={colW}
                height={maxH}
                fill={C.fg}
                fillOpacity={0.04}
              />

              {/* Column headers */}
              <text
                x={col1X + colW / 2}
                y={blockY - 10}
                textAnchor="middle"
                fill={C.dim}
                fontSize={11}
                {...F}
                letterSpacing="0.06em"
              >
                HUNDREDS ({s.flats})
              </text>
              <text
                x={col2X + colW / 2}
                y={blockY - 10}
                textAnchor="middle"
                fill={C.dim}
                fontSize={11}
                {...F}
                letterSpacing="0.06em"
              >
                TENS ({s.rods})
              </text>
              <text
                x={col3X + colW / 2}
                y={blockY - 10}
                textAnchor="middle"
                fill={C.dim}
                fontSize={11}
                {...F}
                letterSpacing="0.06em"
              >
                ONES ({s.units})
              </text>

              {/* Flats: 10x10 grids */}
              {Array.from({ length: Math.min(s.flats, 12) }, (_, i) => {
                const size = 56,
                  gap = 6
                const col = i % 2,
                  row = Math.floor(i / 2)
                const bx = col1X + col * (size + gap) + 30
                const by = blockY + 6 + row * (size + gap)
                return (
                  <g key={`f${i}`}>
                    <rect
                      x={bx}
                      y={by}
                      width={size}
                      height={size}
                      fill={C.accent}
                      fillOpacity={0.08}
                      stroke={C.dim}
                      strokeWidth={1}
                    />
                    {Array.from({ length: 9 }, (_, li) => {
                      const f = (li + 1) / 10
                      return (
                        <g key={li}>
                          <line
                            x1={bx + f * size}
                            y1={by}
                            x2={bx + f * size}
                            y2={by + size}
                            stroke={C.dim}
                            strokeWidth={0.3}
                            opacity={0.4}
                          />
                          <line
                            x1={bx}
                            y1={by + f * size}
                            x2={bx + size}
                            y2={by + f * size}
                            stroke={C.dim}
                            strokeWidth={0.3}
                            opacity={0.4}
                          />
                        </g>
                      )
                    })}
                  </g>
                )
              })}

              {/* Rods: vertical bars */}
              {Array.from({ length: Math.min(s.rods, 20) }, (_, i) => {
                const w = 8,
                  h = 56,
                  gap = 6
                const col = i % 5,
                  row = Math.floor(i / 5)
                const bx = col2X + col * (w + gap) + 50
                const by = blockY + 6 + row * (h + gap)
                return (
                  <g key={`r${i}`}>
                    <rect
                      x={bx}
                      y={by}
                      width={w}
                      height={h}
                      fill={C.accent}
                      fillOpacity={0.12}
                      stroke={C.dim}
                      strokeWidth={1}
                    />
                    {Array.from({ length: 9 }, (_, ti) => (
                      <line
                        key={ti}
                        x1={bx}
                        y1={by + ((ti + 1) * h) / 10}
                        x2={bx + w}
                        y2={by + ((ti + 1) * h) / 10}
                        stroke={C.dim}
                        strokeWidth={0.3}
                        opacity={0.5}
                      />
                    ))}
                  </g>
                )
              })}

              {/* Units: small squares */}
              {Array.from({ length: Math.min(s.units, 30) }, (_, i) => {
                const sz = 10,
                  gap = 4
                const col = i % 5,
                  row = Math.floor(i / 5)
                const bx = col3X + col * (sz + gap) + 50
                const by = blockY + 6 + row * (sz + gap)
                return (
                  <rect
                    key={`u${i}`}
                    x={bx}
                    y={by}
                    width={sz}
                    height={sz}
                    fill={C.accent}
                    fillOpacity={0.15}
                    stroke={C.dim}
                    strokeWidth={1}
                  />
                )
              })}

              {/* Total equation */}
              <text
                x={310}
                y={svgH - 12}
                textAnchor="middle"
                fill={C.fg}
                fontSize={16}
                {...F}
                fontWeight="bold"
              >
                {total}
              </text>
            </svg>
          </div>

          <InstructionText C={C}>ADJUST SLIDERS, THEN REGROUP OR BREAK APART</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return BaseTenBlocks
})()

// ─── place-value-disks ──────────────────────────────────────────────────────
export const PlaceValueDisks = (() => {
  const INIT = { ones: 5, tens: 3, hundreds: 2, thousands: 0 }
  const COLS = [
    { key: 'thousands', label: 'THOUSANDS', val: 1000, short: 'TH' },
    { key: 'hundreds', label: 'HUNDREDS', val: 100, short: 'H' },
    { key: 'tens', label: 'TENS', val: 10, short: 'T' },
    { key: 'ones', label: 'ONES', val: 1, short: 'O' }
  ]

  function PlaceValueDisks({ toolName, onBack }) {
    const C = useVizColors()
    const [s, setS] = useState(INIT)
    const handleReset = () => setS(INIT)

    const total = s.thousands * 1000 + s.hundreds * 100 + s.tens * 10 + s.ones

    const regroup = () => {
      let o = s.ones,
        t = s.tens,
        h = s.hundreds,
        th = s.thousands
      const c1 = Math.floor(o / 10)
      o %= 10
      t += c1
      const c2 = Math.floor(t / 10)
      t %= 10
      h += c2
      const c3 = Math.floor(h / 10)
      h %= 10
      th += c3
      setS({ ones: o, tens: t, hundreds: h, thousands: th })
    }

    const breakApart = () => {
      if (s.thousands > 0)
        setS(p => ({ ...p, thousands: p.thousands - 1, hundreds: p.hundreds + 10 }))
      else if (s.hundreds > 0) setS(p => ({ ...p, hundreds: p.hundreds - 1, tens: p.tens + 10 }))
      else if (s.tens > 0) setS(p => ({ ...p, tens: p.tens - 1, ones: p.ones + 10 }))
    }

    const canRegroup = s.ones >= 10 || s.tens >= 10 || s.hundreds >= 10
    const canBreak = s.thousands > 0 || s.hundreds > 0 || s.tens > 0

    const diskColors = { ones: C.dim, tens: C.accent, hundreds: C.fg, thousands: C.fg }
    const colW = 130,
      padX = 25,
      headerY = 26
    const r = 16,
      maxVisible = 10,
      diskGap = r * 2.4
    const colTop = 56
    const diskStartY = colTop + r + 10
    const maxCount = Math.max(...COLS.map(c => Math.min(s[c.key], maxVisible)), 1)
    const colBottom = diskStartY + (maxCount - 1) * diskGap + r + 16
    const svgH = colBottom + 40

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Sliders */}
          <SliderControl
            label="THOUSANDS"
            value={s.thousands}
            onChange={v => setS(p => ({ ...p, thousands: v }))}
            min={0}
            max={9}
            C={C}
          />
          <SliderControl
            label="HUNDREDS"
            value={s.hundreds}
            onChange={v => setS(p => ({ ...p, hundreds: v }))}
            min={0}
            max={15}
            C={C}
          />
          <SliderControl
            label="TENS"
            value={s.tens}
            onChange={v => setS(p => ({ ...p, tens: v }))}
            min={0}
            max={15}
            C={C}
          />
          <SliderControl
            label="ONES"
            value={s.ones}
            onChange={v => setS(p => ({ ...p, ones: v }))}
            min={0}
            max={15}
            C={C}
          />

          {/* Regroup / Break */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '12px 0' }}>
            <button
              style={{
                ...btnStyle(false, C),
                opacity: canRegroup ? 1 : 0.3,
                borderColor: canRegroup ? C.accent : undefined
              }}
              disabled={!canRegroup}
              onClick={regroup}
            >
              REGROUP
            </button>
            <button
              style={{ ...btnStyle(false, C), opacity: canBreak ? 1 : 0.3 }}
              disabled={!canBreak}
              onClick={breakApart}
            >
              BREAK APART
            </button>
          </div>

          {/* Visualization */}
          <div className="lrn-graph">
            <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
              {COLS.map((col, ci) => {
                const x0 = padX + ci * (colW + 12)
                const cx = x0 + colW / 2
                const count = Math.min(s[col.key], maxVisible)

                return (
                  <g key={col.key}>
                    {/* Column background */}
                    <rect
                      x={x0}
                      y={colTop}
                      width={colW}
                      height={colBottom - colTop}
                      fill={C.fg}
                      fillOpacity={ci % 2 === 0 ? 0.03 : 0.06}
                    />

                    {/* Header */}
                    <text
                      x={cx}
                      y={headerY}
                      textAnchor="middle"
                      fill={C.dim}
                      fontSize={10}
                      {...F}
                      letterSpacing="0.06em"
                    >
                      {col.label}
                    </text>
                    <text
                      x={cx}
                      y={headerY + 16}
                      textAnchor="middle"
                      fill={C.fg}
                      fontSize={14}
                      {...F}
                      fontWeight="bold"
                    >
                      {s[col.key]}
                    </text>

                    {/* Disks */}
                    {Array.from({ length: count }, (_, i) => {
                      const dy = diskStartY + i * diskGap
                      return (
                        <g key={i}>
                          <circle
                            cx={cx}
                            cy={dy}
                            r={r}
                            fill={diskColors[col.key]}
                            fillOpacity={0.15}
                            stroke={diskColors[col.key]}
                            strokeWidth={1.5}
                          />
                          <text
                            x={cx}
                            y={dy + 4}
                            textAnchor="middle"
                            fill={diskColors[col.key]}
                            fontSize={10}
                            {...F}
                            fontWeight="bold"
                          >
                            {col.val}
                          </text>
                        </g>
                      )
                    })}

                    {s[col.key] > maxVisible && (
                      <text
                        x={cx}
                        y={diskStartY + maxVisible * diskGap + 10}
                        textAnchor="middle"
                        fill={C.dim}
                        fontSize={10}
                        {...F}
                      >
                        +{s[col.key] - maxVisible}
                      </text>
                    )}
                  </g>
                )
              })}

              {/* Total */}
              <text
                x={310}
                y={svgH - 4}
                textAnchor="middle"
                fill={C.fg}
                fontSize={18}
                {...F}
                fontWeight="bold"
              >
                {total.toLocaleString('en-US')}
              </text>
            </svg>
          </div>

          <InstructionText C={C}>ADJUST SLIDERS, THEN REGROUP OR BREAK APART</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return PlaceValueDisks
})()

// ─── hundreds-chart ──────────────────────────────────────────────────────
export const HundredsChart = (() => {
  const MODES = [
    { value: 'click', label: 'CLICK' },
    { value: 'multiples-of-2', label: '2S' },
    { value: 'multiples-of-3', label: '3S' },
    { value: 'multiples-of-5', label: '5S' },
    { value: 'multiples-of-10', label: '10S' },
    { value: 'primes', label: 'PRIMES' },
    { value: 'odd-even', label: 'ODD / EVEN' }
  ]

  const INSTRUCTION_MAP = {
    click: 'CLICK CELLS TO HIGHLIGHT',
    'multiples-of-2': 'MULTIPLES OF 2 HIGHLIGHTED',
    'multiples-of-3': 'MULTIPLES OF 3 HIGHLIGHTED',
    'multiples-of-5': 'MULTIPLES OF 5 HIGHLIGHTED',
    'multiples-of-10': 'MULTIPLES OF 10 HIGHLIGHTED',
    primes: 'PRIME NUMBERS HIGHLIGHTED',
    'odd-even': 'ODD NUMBERS HIGHLIGHTED'
  }

  function getAutoHighlighted(mode) {
    const s = new Set()
    for (let n = 1; n <= 100; n++) {
      if (mode === 'multiples-of-2' && n % 2 === 0) s.add(n)
      else if (mode === 'multiples-of-3' && n % 3 === 0) s.add(n)
      else if (mode === 'multiples-of-5' && n % 5 === 0) s.add(n)
      else if (mode === 'multiples-of-10' && n % 10 === 0) s.add(n)
      else if (mode === 'primes' && isPrime(n)) s.add(n)
      else if (mode === 'odd-even' && n % 2 === 1) s.add(n)
    }
    return s
  }

  function HundredsChart({ toolName, onBack }) {
    const C = useVizColors()
    const [mode, setMode] = useState('click')
    const [clicked, setClicked] = useState(new Set())

    const highlighted = useMemo(
      () => (mode === 'click' ? clicked : getAutoHighlighted(mode)),
      [mode, clicked]
    )
    const handleReset = () => {
      setMode('click')
      setClicked(new Set())
    }

    const cellSize = 50,
      padX = 56,
      padY = 40,
      headerH = 24
    const gridW = 10 * cellSize
    const gridH = 10 * cellSize
    const svgW = gridW + padX * 2
    const svgH = gridH + padY + headerH + 30

    const toggleCell = n => {
      if (mode !== 'click') return
      setClicked(prev => {
        const s = new Set(prev)
        s.has(n) ? s.delete(n) : s.add(n)
        return s
      })
    }

    const pct = ((highlighted.size / 100) * 100).toFixed(0)

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Mode selector using ToggleButtonGroup */}
          <ToggleButtonGroup options={MODES} value={mode} onChange={setMode} C={C} />

          <div className="lrn-graph" style={{ marginTop: 16 }}>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Layer 6: Count + percentage header */}
              <text
                x={svgW / 2}
                y={20}
                textAnchor="middle"
                fill={C.fg}
                fontSize={14}
                fontWeight="bold"
                {...F}
              >
                {highlighted.size} HIGHLIGHTED ({pct}%)
              </text>

              {/* Layer 2: Column headers 1-10 */}
              {Array.from({ length: 10 }, (_, col) => (
                <text
                  key={`ch${col}`}
                  x={padX + col * cellSize + cellSize / 2}
                  y={padY + headerH - 6}
                  textAnchor="middle"
                  fill={C.dim}
                  fontSize={10}
                  {...F}
                  letterSpacing="0.04em"
                >
                  {col + 1}
                </text>
              ))}

              {Array.from({ length: 10 }, (_, row) => {
                const y = padY + headerH + row * cellSize
                return (
                  <g key={`row${row}`}>
                    {/* Layer 1: Alternating row fills */}
                    <rect
                      x={padX}
                      y={y}
                      width={gridW}
                      height={cellSize}
                      fill={C.faint}
                      fillOpacity={row % 2 === 0 ? 0.03 : 0.06}
                    />

                    {/* Layer 2: Decade labels on left */}
                    <text
                      x={padX - 10}
                      y={y + cellSize / 2 + 4}
                      textAnchor="end"
                      fill={C.dim}
                      fontSize={10}
                      {...F}
                    >
                      {row * 10 + 1}-{row * 10 + 10}
                    </text>

                    {/* Cells in this row */}
                    {Array.from({ length: 10 }, (_, col) => {
                      const n = row * 10 + col + 1
                      const x = padX + col * cellSize
                      const on = highlighted.has(n)
                      return (
                        <g
                          key={n}
                          onClick={() => toggleCell(n)}
                          style={{ cursor: mode === 'click' ? 'pointer' : 'default' }}
                          role="button"
                          tabIndex={0}
                          aria-label={`Number ${n}`}
                          onKeyDown={e => {
                            if (e.key === 'Enter') toggleCell(n)
                          }}
                        >
                          {/* Layer 3: Highlight fill */}
                          <rect
                            x={x}
                            y={y}
                            width={cellSize}
                            height={cellSize}
                            fill={on ? C.accent : 'transparent'}
                            fillOpacity={on ? 0.25 : 0}
                            stroke={C.faint}
                            strokeWidth={1}
                          />
                          <text
                            x={x + cellSize / 2}
                            y={y + cellSize / 2 + 5}
                            textAnchor="middle"
                            fill={on ? C.fg : C.dim}
                            fontSize={13}
                            {...F}
                          >
                            {n}
                          </text>
                        </g>
                      )
                    })}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Layer 5: Instruction per mode */}
          <InstructionText C={C}>{INSTRUCTION_MAP[mode]}</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return HundredsChart
})()

// ─── exploding-dots ──────────────────────────────────────────────────────
export const ExplodingDots = (() => {
  const INIT_COLS = [0, 0, 0, 0]

  function ExplodingDots({ toolName, onBack }) {
    const C = useVizColors()
    const [base, setBase] = useState(10)
    const [cols, setCols] = useState(INIT_COLS)
    const [autoExplode, setAutoExplode] = useState(false)
    const handleReset = () => {
      setCols(INIT_COLS)
      setBase(10)
      setAutoExplode(false)
    }

    const explodeAll = (columns, b) => {
      const c = [...columns]
      let changed = true
      while (changed) {
        changed = false
        for (let i = c.length - 1; i > 0; i--) {
          if (c[i] >= b) {
            const carry = Math.floor(c[i] / b)
            c[i] = c[i] % b
            c[i - 1] += carry
            changed = true
          }
        }
      }
      return c
    }

    const addDot = useCallback(() => {
      setCols(prev => {
        const next = [...prev]
        next[next.length - 1] += 1
        return autoExplode ? explodeAll(next, base) : next
      })
    }, [autoExplode, base])

    const explodeOnce = () => {
      setCols(prev => {
        const c = [...prev]
        for (let i = c.length - 1; i > 0; i--) {
          if (c[i] >= base) {
            c[i] -= base
            c[i - 1] += 1
            return c
          }
        }
        return c
      })
    }

    // BUG FIX: check any column except leftmost (i > 0), not "except rightmost"
    const canExplode = cols.some((c, i) => i > 0 && c >= base)
    const total = cols.reduce((sum, c, i) => sum + c * Math.pow(base, cols.length - 1 - i), 0)

    const colW = 140,
      padX = 15,
      headerY = 30,
      dotAreaTop = 60
    const dotR = 10,
      dotGap = 6,
      dotsPerRow = 5
    const maxDots = Math.max(...cols, 1)
    const dotRows = Math.ceil(Math.min(maxDots, 30) / dotsPerRow)
    const svgH = Math.max(dotAreaTop + dotRows * (dotR * 2 + dotGap) + 40, 200)

    const placeLabel = exp => {
      if (exp === 0) return '1S'
      const val = Math.pow(base, exp)
      return val >= 1000 ? `${val / 1000}K` : `${val}S`
    }

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Value display */}
          <div style={{ textAlign: 'center', marginBottom: 12 }}>
            <span style={{ ...F, fontSize: 24, color: C.fg, fontWeight: 'bold' }}>{total}</span>
          </div>

          {/* Controls at top */}
          <SliderControl
            label="BASE"
            value={base}
            onChange={v => {
              setBase(v)
              setCols(INIT_COLS)
            }}
            min={2}
            max={10}
            C={C}
          />

          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '8px 0' }}>
            <button
              style={{
                ...btnStyle(false, C),
                opacity: canExplode ? 1 : 0.3,
                borderColor: canExplode ? C.accent : undefined
              }}
              disabled={!canExplode}
              onClick={explodeOnce}
            >
              EXPLODE
            </button>
            <button style={btnStyle(autoExplode, C)} onClick={() => setAutoExplode(p => !p)}>
              AUTO: {autoExplode ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Visualization */}
          <div className="lrn-graph">
            <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
              {cols.map((count, ci) => {
                const x0 = padX + ci * (colW + 8)
                const cx = x0 + colW / 2
                const exp = cols.length - 1 - ci
                const isFull = ci > 0 && count >= base

                return (
                  <g key={ci}>
                    {/* Column background */}
                    <rect
                      x={x0}
                      y={dotAreaTop - 10}
                      width={colW}
                      height={svgH - dotAreaTop - 20}
                      fill={C.fg}
                      fillOpacity={ci % 2 === 0 ? 0.03 : 0.06}
                      stroke={isFull ? C.accent : C.dim}
                      strokeWidth={isFull ? 2 : 0.5}
                      opacity={isFull ? 1 : 0.3}
                    />

                    {/* Header */}
                    <text
                      x={cx}
                      y={headerY - 6}
                      textAnchor="middle"
                      fill={C.dim}
                      fontSize={10}
                      {...F}
                      letterSpacing="0.06em"
                    >
                      {placeLabel(exp)}
                    </text>
                    <text
                      x={cx}
                      y={headerY + 10}
                      textAnchor="middle"
                      fill={C.fg}
                      fontSize={14}
                      {...F}
                      fontWeight="bold"
                    >
                      {count}
                    </text>

                    {/* Dots */}
                    {Array.from({ length: Math.min(count, 30) }, (_, di) => {
                      const col = di % dotsPerRow
                      const row = Math.floor(di / dotsPerRow)
                      const dx = x0 + 20 + col * (dotR * 2 + dotGap)
                      const dy = dotAreaTop + 10 + row * (dotR * 2 + dotGap)
                      return (
                        <circle
                          key={di}
                          cx={dx}
                          cy={dy}
                          r={dotR}
                          fill={C.accent}
                          fillOpacity={0.3}
                          stroke={C.accent}
                          strokeWidth={1}
                        />
                      )
                    })}

                    {count > 30 && (
                      <text
                        x={cx}
                        y={svgH - 30}
                        textAnchor="middle"
                        fill={C.dim}
                        fontSize={10}
                        {...F}
                      >
                        +{count - 30}
                      </text>
                    )}

                    {/* Click target for rightmost column */}
                    {ci === cols.length - 1 && (
                      <rect
                        x={x0}
                        y={dotAreaTop - 10}
                        width={colW}
                        height={svgH - dotAreaTop - 20}
                        fill="transparent"
                        style={{ cursor: 'pointer' }}
                        onClick={addDot}
                        role="button"
                        tabIndex={0}
                        aria-label="Add dot"
                        onKeyDown={e => {
                          if (e.key === 'Enter') addDot()
                        }}
                      />
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          <InstructionText C={C}>CLICK THE RIGHTMOST COLUMN TO ADD DOTS</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return ExplodingDots
})()

// ─── number-line ──────────────────────────────────────────────────────
export const NumberLine = (() => {
  const INIT = { jumps: [], startPoint: 0, jumpSize: 3, mode: 'add' }

  function NumberLine({ toolName, onBack }) {
    const C = useVizColors()
    const [state, setState] = useState(INIT)
    const { jumps, startPoint, jumpSize, mode } = state
    const set = patch => setState(s => ({ ...s, ...patch }))
    const handleReset = () => setState(INIT)

    const currentPos =
      jumps.length === 0 ? startPoint : jumps[jumps.length - 1].from + jumps[jumps.length - 1].size

    const addJump = () => {
      const from = jumps.length === 0 ? startPoint : currentPos
      const size = mode === 'add' ? Math.abs(jumpSize) : -Math.abs(jumpSize)
      set({ jumps: [...jumps, { from, size }] })
    }

    // Auto-compute range from all points
    const allPoints = [startPoint]
    let pos = startPoint
    for (const j of jumps) {
      pos = j.from + j.size
      allPoints.push(j.from, pos)
    }
    // Also include where next jump would land
    const nextSize = mode === 'add' ? Math.abs(jumpSize) : -Math.abs(jumpSize)
    allPoints.push(currentPos + nextSize)

    const dataMin = Math.min(...allPoints)
    const dataMax = Math.max(...allPoints)
    const rangeStart = Math.min(dataMin - 2, -1)
    const rangeEnd = Math.max(dataMax + 2, 20)

    // SVG layout
    const padX = 40,
      lineY = 100,
      svgW = 620
    const lineLeft = padX + 10,
      lineRight = svgW - padX - 10
    const lineLen = lineRight - lineLeft
    const range = rangeEnd - rangeStart || 1

    const toX = val => lineLeft + ((val - rangeStart) / range) * lineLen

    // Tick spacing
    const rawStep = range <= 20 ? 1 : range <= 50 ? 5 : 10
    const ticks = []
    for (let v = Math.ceil(rangeStart / rawStep) * rawStep; v <= rangeEnd; v += rawStep)
      ticks.push(v)

    // Expression string
    let expr = ''
    if (jumps.length > 0) {
      expr = `${jumps[0].from}`
      for (const j of jumps) {
        expr += j.size >= 0 ? ` + ${j.size}` : ` - ${Math.abs(j.size)}`
      }
      expr += ` = ${currentPos}`
    }

    const svgH = 180

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <SliderControl
            label="START"
            value={startPoint}
            onChange={v => set({ startPoint: v, jumps: [] })}
            min={-20}
            max={50}
            C={C}
          />
          <SliderControl
            label="JUMP SIZE"
            value={jumpSize}
            onChange={v => set({ jumpSize: v })}
            min={1}
            max={20}
            C={C}
          />

          <div style={{ display: 'flex', gap: 8, margin: '12px 0', flexWrap: 'wrap' }}>
            <button style={btnStyle(mode === 'add', C)} onClick={() => set({ mode: 'add' })}>
              ADD
            </button>
            <button
              style={btnStyle(mode === 'subtract', C)}
              onClick={() => set({ mode: 'subtract' })}
            >
              SUBTRACT
            </button>
            <button style={{ ...btnStyle(false, C), borderColor: C.accent }} onClick={addJump}>
              ADD JUMP
            </button>
            <button
              style={{ ...btnStyle(false, C), opacity: jumps.length ? 1 : 0.3 }}
              disabled={!jumps.length}
              onClick={() => set({ jumps: [] })}
            >
              CLEAR
            </button>
          </div>

          <div className="lrn-graph">
            <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Alternating fills */}
              {ticks.map((v, i) => {
                if (i >= ticks.length - 1) return null
                const x1 = toX(v),
                  x2 = toX(ticks[i + 1])
                return (
                  <rect
                    key={`bg-${i}`}
                    x={x1}
                    y={lineY - 24}
                    width={x2 - x1}
                    height={48}
                    fill={C.fg}
                    fillOpacity={i % 2 === 0 ? 0.03 : 0.06}
                  />
                )
              })}

              {/* Number line */}
              <line
                x1={lineLeft}
                y1={lineY}
                x2={lineRight}
                y2={lineY}
                stroke={C.dim}
                strokeWidth={2}
              />

              {/* Ticks */}
              {ticks.map(v => (
                <g key={v}>
                  <line
                    x1={toX(v)}
                    y1={lineY - 6}
                    x2={toX(v)}
                    y2={lineY + 6}
                    stroke={C.dim}
                    strokeWidth={1}
                  />
                  <text
                    x={toX(v)}
                    y={lineY + 20}
                    textAnchor="middle"
                    fill={C.dim}
                    fontSize={11}
                    {...F}
                  >
                    {v}
                  </text>
                </g>
              ))}

              {/* Jump arcs */}
              {jumps.map((j, i) => {
                const x1 = toX(j.from)
                const x2 = toX(j.from + j.size)
                const arcH = 20 + Math.min(Math.abs(x2 - x1) * 0.3, 50)
                const midX = (x1 + x2) / 2
                const isForward = j.size >= 0
                const color = isForward ? C.fg : C.accent
                const markerId = `arrow-${i}`

                return (
                  <g key={i}>
                    <defs>
                      <marker
                        id={markerId}
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth={5}
                        markerHeight={5}
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill={color} />
                      </marker>
                    </defs>
                    <path
                      d={`M ${x1} ${lineY} Q ${midX} ${lineY - arcH} ${x2} ${lineY}`}
                      fill="none"
                      stroke={color}
                      strokeWidth={1.5}
                      markerEnd={`url(#${markerId})`}
                    />
                    <text
                      x={midX}
                      y={lineY - arcH - 4}
                      textAnchor="middle"
                      fill={color}
                      fontSize={12}
                      {...F}
                      fontWeight="bold"
                    >
                      {j.size >= 0 ? `+${j.size}` : j.size}
                    </text>
                  </g>
                )
              })}

              {/* Start point */}
              <circle
                cx={toX(startPoint)}
                cy={lineY}
                r={5}
                fill={C.accent}
                fillOpacity={0.3}
                stroke={C.fg}
                strokeWidth={1.5}
              />

              {/* Current position dot */}
              {jumps.length > 0 && (
                <circle
                  cx={toX(currentPos)}
                  cy={lineY}
                  r={5}
                  fill={C.fg}
                  stroke={C.fg}
                  strokeWidth={1.5}
                />
              )}

              {/* Expression */}
              {expr && (
                <text
                  x={svgW / 2}
                  y={svgH - 10}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={14}
                  {...F}
                  fontWeight="bold"
                >
                  {expr}
                </text>
              )}
            </svg>
          </div>

          <InstructionText C={C}>SET START AND JUMP SIZE, THEN ADD JUMPS</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return NumberLine
})()

// ─── two-color-counters ──────────────────────────────────────────────────────
export const TwoColorCounters = (() => {
  const YELLOW = '#d4a843'
  const RED = '#c44040'

  function TwoColorCounters({ toolName, onBack }) {
    const C = useVizColors()
    const genId = useStableId()
    const [counters, setCounters] = useState([])

    const handleReset = () => setCounters([])

    const addCounter = useCallback(
      color => {
        setCounters(prev => [...prev, { id: genId(), color }])
      },
      [genId]
    )

    const flipCounter = useCallback(id => {
      setCounters(prev =>
        prev.map(c => (c.id === id ? { ...c, color: c.color === 'yellow' ? 'red' : 'yellow' } : c))
      )
    }, [])

    const yellowCount = counters.filter(c => c.color === 'yellow').length
    const redCount = counters.filter(c => c.color === 'red').length
    const net = yellowCount - redCount
    const zeroPairs = Math.min(yellowCount, redCount)

    // Layout: two columns side by side
    const r = 24,
      gap = 12,
      cols = 5
    const cellSize = r * 2 + gap
    const yellows = counters.filter(c => c.color === 'yellow')
    const reds = counters.filter(c => c.color === 'red')
    const yRows = Math.max(1, Math.ceil(yellows.length / cols))
    const rRows = Math.max(1, Math.ceil(reds.length / cols))
    const maxRows = Math.max(yRows, rRows)

    const colWidth = cols * cellSize
    const halfGap = 20
    const svgW = 620
    const leftX = (svgW - colWidth * 2 - halfGap) / 2
    const rightX = leftX + colWidth + halfGap
    const headerY = 24
    const dotStartY = headerY + 20
    const svgH = dotStartY + maxRows * cellSize + 20

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Equation */}
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <span style={{ ...F, fontSize: 28, color: YELLOW, fontWeight: 'bold' }}>
              +{yellowCount}
            </span>
            <span style={{ ...F, fontSize: 28, color: C.dim }}> </span>
            <span style={{ ...F, fontSize: 28, color: RED, fontWeight: 'bold' }}>-{redCount}</span>
            <span style={{ ...F, fontSize: 28, color: C.dim }}> = </span>
            <span style={{ ...F, fontSize: 32, color: C.fg, fontWeight: 'bold' }}>
              {net >= 0 ? `+${net}` : net}
            </span>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, justifyContent: 'center' }}>
            <button
              style={{ ...btnStyle(false, C), color: YELLOW, borderColor: YELLOW }}
              onClick={() => addCounter('yellow')}
            >
              + POSITIVE
            </button>
            <button
              style={{ ...btnStyle(false, C), color: RED, borderColor: RED }}
              onClick={() => addCounter('red')}
            >
              - NEGATIVE
            </button>
          </div>

          {/* Counters */}
          <div className="lrn-graph">
            <svg
              viewBox={`0 0 ${svgW} ${Math.max(svgH, 140)}`}
              width="100%"
              style={{ display: 'block' }}
            >
              {/* Column backgrounds */}
              <rect
                x={leftX - 8}
                y={headerY - 8}
                width={colWidth + 16}
                height={Math.max(svgH, 140) - headerY}
                fill={YELLOW}
                fillOpacity={0.03}
              />
              <rect
                x={rightX - 8}
                y={headerY - 8}
                width={colWidth + 16}
                height={Math.max(svgH, 140) - headerY}
                fill={RED}
                fillOpacity={0.03}
              />

              {/* Headers */}
              <text
                x={leftX + colWidth / 2}
                y={headerY + 4}
                textAnchor="middle"
                fill={YELLOW}
                fontSize={11}
                {...F}
                letterSpacing="0.06em"
                fillOpacity={0.6}
              >
                POSITIVE
              </text>
              <text
                x={rightX + colWidth / 2}
                y={headerY + 4}
                textAnchor="middle"
                fill={RED}
                fontSize={11}
                {...F}
                letterSpacing="0.06em"
                fillOpacity={0.6}
              >
                NEGATIVE
              </text>

              {counters.length === 0 && (
                <text x={svgW / 2} y={80} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
                  ADD COUNTERS TO BEGIN
                </text>
              )}

              {/* Yellow counters */}
              {yellows.map((c, i) => {
                const col = i % cols,
                  row = Math.floor(i / cols)
                const cx = leftX + col * cellSize + cellSize / 2
                const cy = dotStartY + row * cellSize + cellSize / 2
                return (
                  <g
                    key={c.id}
                    onClick={() => flipCounter(c.id)}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    aria-label="Positive counter, click to flip"
                    onKeyDown={e => {
                      if (e.key === 'Enter') flipCounter(c.id)
                    }}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill={YELLOW}
                      fillOpacity={0.2}
                      stroke={YELLOW}
                      strokeWidth={2}
                    />
                    <text
                      x={cx}
                      y={cy + 7}
                      textAnchor="middle"
                      fill={YELLOW}
                      fontSize={20}
                      {...F}
                      fontWeight="bold"
                    >
                      +
                    </text>
                  </g>
                )
              })}

              {/* Red counters */}
              {reds.map((c, i) => {
                const col = i % cols,
                  row = Math.floor(i / cols)
                const cx = rightX + col * cellSize + cellSize / 2
                const cy = dotStartY + row * cellSize + cellSize / 2
                return (
                  <g
                    key={c.id}
                    onClick={() => flipCounter(c.id)}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    aria-label="Negative counter, click to flip"
                    onKeyDown={e => {
                      if (e.key === 'Enter') flipCounter(c.id)
                    }}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill={RED}
                      fillOpacity={0.2}
                      stroke={RED}
                      strokeWidth={2}
                    />
                    <text
                      x={cx}
                      y={cy + 7}
                      textAnchor="middle"
                      fill={RED}
                      fontSize={20}
                      {...F}
                      fontWeight="bold"
                    >
                      -
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {zeroPairs > 0 && (
            <div style={{ textAlign: 'center', marginTop: 8 }}>
              <span
                style={{
                  ...F,
                  fontSize: 11,
                  color: C.dim,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}
              >
                {zeroPairs} ZERO PAIR{zeroPairs !== 1 ? 'S' : ''} CANCEL OUT
              </span>
            </div>
          )}

          <InstructionText C={C}>CLICK A COUNTER TO FLIP ITS SIGN</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return TwoColorCounters
})()

// ─── balance-scale ──────────────────────────────────────────────────────
export const BalanceScale = (() => {
  function BalanceScale({ toolName, onBack }) {
    const C = useVizColors()
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const handleReset = () => {
      setLeft(0)
      setRight(0)
    }

    const diff = left - right
    const angle = Math.max(-8, Math.min(8, diff * 0.4))
    const balanced = left === right && left > 0
    const symbol = left === right ? '=' : left > right ? '>' : '<'

    const svgW = 620,
      cx = 310,
      fulcrumY = 120,
      beamLen = 200
    const rad = (angle * Math.PI) / 180
    const lx = cx - Math.cos(rad) * beamLen
    const ly = fulcrumY - Math.sin(rad) * beamLen
    const rx = cx + Math.cos(rad) * beamLen
    const ry = fulcrumY + Math.sin(rad) * beamLen

    const stringLen = 50
    const panW = 120,
      panH = 60
    const lPanY = ly + stringLen
    const rPanY = ry + stringLen
    const svgH = 320

    // Draw weight number inside pan
    const renderWeight = (val, panCx, panY) => {
      if (val === 0) return null
      return (
        <text
          x={panCx}
          y={panY + panH / 2 + 6}
          textAnchor="middle"
          fill={C.fg}
          fontSize={20}
          {...F}
          fontWeight="bold"
        >
          {val}
        </text>
      )
    }

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <SliderControl label="LEFT" value={left} onChange={setLeft} min={0} max={50} C={C} />
          <SliderControl label="RIGHT" value={right} onChange={setRight} min={0} max={50} C={C} />

          <div className="lrn-graph" style={{ marginTop: 12 }}>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Fulcrum */}
              <polygon
                points={`${cx},${fulcrumY} ${cx - 14},${fulcrumY + 20} ${cx + 14},${fulcrumY + 20}`}
                fill={C.dim}
                fillOpacity={0.3}
                stroke={C.dim}
                strokeWidth={1}
              />
              <rect
                x={cx - 36}
                y={fulcrumY + 20}
                width={72}
                height={5}
                fill={C.dim}
                fillOpacity={0.2}
                stroke={C.dim}
                strokeWidth={1}
              />

              {/* Beam */}
              <line x1={lx} y1={ly} x2={rx} y2={ry} stroke={C.fg} strokeWidth={3} />

              {/* Left string + pan */}
              <line x1={lx} y1={ly} x2={lx} y2={lPanY} stroke={C.dim} strokeWidth={1} />
              <rect
                x={lx - panW / 2}
                y={lPanY}
                width={panW}
                height={panH}
                fill={C.fg}
                fillOpacity={0.04}
                stroke={C.dim}
                strokeWidth={1}
              />
              <g>{renderWeight(left, lx, lPanY)}</g>

              {/* Right string + pan */}
              <line x1={rx} y1={ry} x2={rx} y2={rPanY} stroke={C.dim} strokeWidth={1} />
              <rect
                x={rx - panW / 2}
                y={rPanY}
                width={panW}
                height={panH}
                fill={C.fg}
                fillOpacity={0.04}
                stroke={C.dim}
                strokeWidth={1}
              />
              <g>{renderWeight(right, rx, rPanY)}</g>

              {/* Result */}
              <text
                x={cx}
                y={svgH - 20}
                textAnchor="middle"
                fill={balanced ? '#5a9' : C.fg}
                fontSize={18}
                {...F}
                fontWeight="bold"
              >
                {left} {symbol} {right}
              </text>
              {balanced && (
                <text
                  x={cx}
                  y={svgH - 2}
                  textAnchor="middle"
                  fill="#5a9"
                  fontSize={11}
                  {...F}
                  letterSpacing="0.06em"
                >
                  BALANCED
                </text>
              )}
            </svg>
          </div>

          <InstructionText C={C}>ADJUST SLIDERS TO COMPARE VALUES</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return BalanceScale
})()

// ─── array-builder ──────────────────────────────────────────────────────
export const ArrayBuilder = (() => {
  function ArrayBuilder({ toolName, onBack }) {
    const C = useVizColors()
    const [rows, setRows] = useState(3)
    const [cols, setCols] = useState(4)
    const total = rows * cols
    const handleReset = () => {
      setRows(3)
      setCols(4)
    }

    const dotR = 8,
      spacing = 36
    const svgW = 620,
      svgH = 500

    // Center the grid in the fixed SVG
    const gridW = cols * spacing
    const gridH = rows * spacing
    const startX = (svgW - gridW) / 2 + spacing / 2
    const startY = 60 + spacing / 2

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <SliderControl label="ROWS" value={rows} onChange={setRows} min={1} max={12} C={C} />
          <SliderControl label="COLUMNS" value={cols} onChange={setCols} min={1} max={12} C={C} />

          <div className="lrn-graph" style={{ marginTop: 12 }}>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Result */}
              <text
                x={svgW / 2}
                y={30}
                textAnchor="middle"
                fill={C.fg}
                fontSize={18}
                fontWeight="bold"
                {...F}
              >
                {rows} x {cols} = {total}
              </text>

              {/* Dots */}
              {Array.from({ length: rows }, (_, r) =>
                Array.from({ length: cols }, (_, c) => (
                  <circle
                    key={`${r}-${c}`}
                    cx={startX + c * spacing}
                    cy={startY + r * spacing}
                    r={dotR}
                    fill={C.accent}
                    fillOpacity={0.3}
                    stroke={C.fg}
                    strokeWidth={1}
                  />
                ))
              )}

              {/* Dimension labels */}
              <text
                x={svgW / 2}
                y={startY + gridH + 20}
                textAnchor="middle"
                fill={C.dim}
                fontSize={11}
                {...F}
                letterSpacing="0.06em"
              >
                {cols} x {rows} = {total}
              </text>
            </svg>
          </div>

          <InstructionText C={C}>ADJUST SLIDERS TO BUILD AN ARRAY</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return ArrayBuilder
})()

// ─── area-model ──────────────────────────────────────────────────────
export const AreaModel = (() => {
  function AreaModel({ toolName, onBack }) {
    const C = useVizColors()
    const [factorA, setFactorA] = useState(23)
    const [factorB, setFactorB] = useState(14)
    const handleReset = () => {
      setFactorA(23)
      setFactorB(14)
    }

    const product = factorA * factorB

    // Always decompose into tens + ones (stable 2-part structure for 10+)
    const decompose = n => {
      if (n < 10) return [{ val: n, label: String(n) }]
      const tens = Math.floor(n / 10) * 10
      const ones = n % 10
      if (ones === 0) return [{ val: tens, label: String(tens) }]
      return [
        { val: tens, label: String(tens) },
        { val: ones, label: String(ones) }
      ]
    }

    const partsA = decompose(factorA)
    const partsB = decompose(factorB)

    // Fixed layout
    const svgW = 620,
      svgH = 440
    const gx = 80,
      gy = 40,
      gw = 440,
      gh = 300

    // Proportional sizes with minimum visible width/height
    const minFrac = 0.12
    const toSizes = (parts, total, fullSize) => {
      if (parts.length === 1) return [fullSize]
      const rawFracs = parts.map(p => p.val / total)
      const clamped = rawFracs.map(f => Math.max(f, minFrac))
      const sum = clamped.reduce((s, v) => s + v, 0)
      return clamped.map(f => (f / sum) * fullSize)
    }

    const colWidths = toSizes(partsB, factorB, gw)
    const rowHeights = toSizes(partsA, factorA, gh)

    // Build partial product grid
    const cells = []
    let yOff = gy
    for (let r = 0; r < partsA.length; r++) {
      let xOff = gx
      for (let c = 0; c < partsB.length; c++) {
        cells.push({
          x: xOff,
          y: yOff,
          w: colWidths[c],
          h: rowHeights[r],
          value: partsA[r].val * partsB[c].val,
          labelA: partsA[r].label,
          labelB: partsB[c].label,
          ri: r,
          ci: c
        })
        xOff += colWidths[c]
      }
      yOff += rowHeights[r]
    }

    const partialStr = cells.map(p => p.value).join(' + ')

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <SliderControl
            label="FACTOR A"
            value={factorA}
            onChange={setFactorA}
            min={2}
            max={99}
            C={C}
          />
          <SliderControl
            label="FACTOR B"
            value={factorB}
            onChange={setFactorB}
            min={2}
            max={99}
            C={C}
          />

          <div className="lrn-graph" style={{ marginTop: 12 }}>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Cell fills */}
              {cells.map((p, i) => (
                <rect
                  key={`f${i}`}
                  x={p.x}
                  y={p.y}
                  width={p.w}
                  height={p.h}
                  fill={C.accent}
                  fillOpacity={(p.ri + p.ci) % 2 === 0 ? 0.06 : 0.14}
                />
              ))}

              {/* Partition lines */}
              {partsB.length > 1 &&
                (() => {
                  const x = gx + colWidths[0]
                  return (
                    <line
                      x1={x}
                      y1={gy}
                      x2={x}
                      y2={gy + gh}
                      stroke={C.dim}
                      strokeWidth={1}
                      strokeDasharray="4 4"
                    />
                  )
                })()}
              {partsA.length > 1 &&
                (() => {
                  const y = gy + rowHeights[0]
                  return (
                    <line
                      x1={gx}
                      y1={y}
                      x2={gx + gw}
                      y2={y}
                      stroke={C.dim}
                      strokeWidth={1}
                      strokeDasharray="4 4"
                    />
                  )
                })()}

              {/* Outer border */}
              <rect
                x={gx}
                y={gy}
                width={gw}
                height={gh}
                fill="none"
                stroke={C.fg}
                strokeWidth={1.5}
              />

              {/* Top labels */}
              {partsB.map((p, c) => {
                const x = gx + colWidths.slice(0, c).reduce((s, v) => s + v, 0) + colWidths[c] / 2
                return (
                  <text
                    key={`t${c}`}
                    x={x}
                    y={gy - 10}
                    textAnchor="middle"
                    fill={C.dim}
                    fontSize={13}
                    {...F}
                  >
                    {p.label}
                  </text>
                )
              })}

              {/* Left labels */}
              {partsA.map((p, r) => {
                const y = gy + rowHeights.slice(0, r).reduce((s, v) => s + v, 0) + rowHeights[r] / 2
                return (
                  <text
                    key={`l${r}`}
                    x={gx - 12}
                    y={y + 4}
                    textAnchor="end"
                    fill={C.dim}
                    fontSize={13}
                    {...F}
                  >
                    {p.label}
                  </text>
                )
              })}

              {/* Partial product labels (only if cell is big enough) */}
              {cells.map((p, i) => {
                if (p.w < 40 || p.h < 30) return null
                return (
                  <g key={`lbl${i}`}>
                    <text
                      x={p.x + p.w / 2}
                      y={p.y + p.h / 2 + 6}
                      textAnchor="middle"
                      fill={C.fg}
                      fontSize={16}
                      fontWeight="bold"
                      {...F}
                    >
                      {p.value}
                    </text>
                  </g>
                )
              })}

              {/* Result */}
              <text
                x={svgW / 2}
                y={gy + gh + 28}
                textAnchor="middle"
                fill={C.dim}
                fontSize={12}
                {...F}
              >
                {cells.length > 1 ? `${partialStr} = ${product}` : ''}
              </text>
              <text
                x={svgW / 2}
                y={gy + gh + 52}
                textAnchor="middle"
                fill={C.fg}
                fontSize={18}
                fontWeight="bold"
                {...F}
              >
                {factorA} x {factorB} = {product}
              </text>
            </svg>
          </div>

          <InstructionText C={C}>SLIDE TO CHANGE FACTORS AND SEE PARTIAL PRODUCTS</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return AreaModel
})()

// ─── factor-tree ──────────────────────────────────────────────────────
export const FactorTree = (() => {
  const checkPrime = isPrime

  function buildTree(n) {
    if (n < 2) return { value: n, isPrime: false }
    if (checkPrime(n)) return { value: n, isPrime: true }
    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0)
        return { value: n, isPrime: false, left: buildTree(d), right: buildTree(n / d) }
    }
    return { value: n, isPrime: true }
  }

  function getDepth(node) {
    if (!node || node.isPrime) return 0
    return 1 + Math.max(getDepth(node.left), getDepth(node.right))
  }

  function collectPrimes(node, out = []) {
    if (!node) return out
    if (node.isPrime) {
      out.push(node.value)
      return out
    }
    collectPrimes(node.left, out)
    collectPrimes(node.right, out)
    return out
  }

  function TreeNode({ node, cx, cy, spread, C }) {
    if (!node) return null
    const r = 22,
      dy = 64
    const childY = cy + dy
    const leftX = cx - spread
    const rightX = cx + spread
    const childSpread = Math.max(spread * 0.5, 24)

    return (
      <g>
        {!node.isPrime && node.left && (
          <>
            <line
              x1={cx}
              y1={cy + r}
              x2={leftX}
              y2={childY - r}
              stroke={C.dim}
              strokeWidth={1}
              strokeDasharray="4 4"
            />
            <TreeNode node={node.left} cx={leftX} cy={childY} spread={childSpread} C={C} />
          </>
        )}
        {!node.isPrime && node.right && (
          <>
            <line
              x1={cx}
              y1={cy + r}
              x2={rightX}
              y2={childY - r}
              stroke={C.dim}
              strokeWidth={1}
              strokeDasharray="4 4"
            />
            <TreeNode node={node.right} cx={rightX} cy={childY} spread={childSpread} C={C} />
          </>
        )}
        {/* Layer 1/3: Node fill */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill={node.isPrime ? C.accent : C.dim}
          fillOpacity={node.isPrime ? 0.2 : 0.06}
        />
        {/* Layer 2: Node border */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={node.isPrime ? C.fg : C.dim}
          strokeWidth={node.isPrime ? 1.5 : 1}
        />
        {/* Layer 3: Value */}
        <text
          x={cx}
          y={cy + 5}
          textAnchor="middle"
          fill={C.fg}
          fontSize={14}
          fontWeight={node.isPrime ? 'bold' : 'normal'}
          {...F}
        >
          {node.value}
        </text>
        {/* PRIME label below prime leaves */}
        {node.isPrime && (
          <text
            x={cx}
            y={cy + r + 12}
            textAnchor="middle"
            fill={C.dim}
            fontSize={9}
            {...F}
            letterSpacing="0.06em"
          >
            PRIME
          </text>
        )}
      </g>
    )
  }

  function FactorTree({ toolName, onBack }) {
    const C = useVizColors()
    const [inputNum, setInputNum] = useState(60)
    const [tree, setTree] = useState(null)

    const handleBuild = () => setTree(buildTree(inputNum))
    const handleReset = () => setTree(null)

    const depth = tree ? getDepth(tree) : 0
    const primes = useMemo(() => (tree ? collectPrimes(tree) : []), [tree])
    const svgH = tree ? Math.max(200, 80 + (depth + 1) * 64 + 60) : 200
    const spread = Math.min(200, 60 + depth * 30)

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16,
              justifyContent: 'center'
            }}
          >
            <NumberInput
              value={inputNum}
              onChange={setInputNum}
              min={2}
              max={999}
              C={C}
              width={70}
              label="Number to factor"
            />
            <button style={btnStyle(true, C)} onClick={handleBuild}>
              BUILD TREE
            </button>
            {tree && (
              <button style={btnStyle(false, C)} onClick={handleReset}>
                CLEAR
              </button>
            )}
          </div>

          {tree && (
            <div className="lrn-graph">
              <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
                {/* Layer 1: Subtle background gradient hint */}
                <rect x={0} y={0} width={620} height={svgH} fill={C.faint} fillOpacity={0.02} />

                <TreeNode node={tree} cx={310} cy={50} spread={spread} C={C} />

                {/* Layer 6: Prime factorization result */}
                {primes.length > 1 && (
                  <text
                    x={310}
                    y={svgH - 14}
                    textAnchor="middle"
                    fill={C.fg}
                    fontSize={16}
                    fontWeight="bold"
                    {...F}
                  >
                    {tree.value} = {primes.join(' x ')}
                  </text>
                )}
              </svg>
            </div>
          )}

          {/* Layer 5: Instruction */}
          <InstructionText C={C}>ENTER A NUMBER AND BUILD ITS FACTOR TREE</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return FactorTree
})()

// ─── sieve-of-eratosthenes ──────────────────────────────────────────────────────
export const SieveOfEratosthenes = (() => {
  const PRIMES_ORDER = [2, 3, 5, 7]

  function computeSieve(step) {
    const crossed = new Set()
    for (let s = 0; s < step && s < PRIMES_ORDER.length; s++) {
      const p = PRIMES_ORDER[s]
      for (let m = p * 2; m <= 100; m += p) crossed.add(m)
    }
    return crossed
  }

  const STEP_INSTRUCTIONS = [
    'ALL NUMBERS FROM 1 TO 100. PRESS NEXT TO BEGIN.',
    'CROSSING OUT MULTIPLES OF 2 (KEEP 2 ITSELF)',
    'CROSSING OUT MULTIPLES OF 3 (KEEP 3 ITSELF)',
    'CROSSING OUT MULTIPLES OF 5 (KEEP 5 ITSELF)',
    'CROSSING OUT MULTIPLES OF 7 (KEEP 7 ITSELF)',
    'SIEVE COMPLETE. ALL REMAINING NUMBERS ARE PRIME.'
  ]

  function SieveOfEratosthenes({ toolName, onBack }) {
    const C = useVizColors()
    const [step, setStep] = useState(0)
    const handleReset = () => setStep(0)

    const crossed = useMemo(() => computeSieve(step), [step])
    const currentPrime = step > 0 && step <= 4 ? PRIMES_ORDER[step - 1] : null
    const done = step >= 5
    const primeCount = useMemo(() => {
      let count = 0
      for (let n = 2; n <= 100; n++) if (!crossed.has(n)) count++
      return count
    }, [crossed])

    const cellSize = 50,
      padX = 56,
      padY = 40,
      headerH = 24
    const gridW = 10 * cellSize
    const svgW = gridW + padX * 2
    const svgH = 10 * cellSize + padY + headerH + 10

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Step indicator + count */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12
            }}
          >
            <StepIndicator current={step} total={5} C={C} />
            <span
              style={{
                fontFamily: 'var(--reader-font-family)',
                fontSize: 11,
                color: C.dim,
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              {done ? `${primeCount} PRIMES FOUND` : `${crossed.size} CROSSED OUT`}
            </span>
          </div>

          <div className="lrn-graph">
            <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Layer 6: Current action header */}
              {currentPrime && (
                <text
                  x={svgW / 2}
                  y={22}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={14}
                  fontWeight="bold"
                  {...F}
                >
                  SIEVING MULTIPLES OF {currentPrime}
                </text>
              )}
              {done && (
                <text
                  x={svgW / 2}
                  y={22}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={14}
                  fontWeight="bold"
                  {...F}
                >
                  {primeCount} PRIMES BELOW 100
                </text>
              )}

              {Array.from({ length: 10 }, (_, row) => {
                const y = padY + headerH + row * cellSize
                return (
                  <g key={`row${row}`}>
                    {/* Layer 1: Alternating row fills */}
                    <rect
                      x={padX}
                      y={y}
                      width={gridW}
                      height={cellSize}
                      fill={C.faint}
                      fillOpacity={row % 2 === 0 ? 0.02 : 0.04}
                    />

                    {Array.from({ length: 10 }, (_, col) => {
                      const n = row * 10 + col + 1
                      const x = padX + col * cellSize
                      const isOne = n === 1
                      const isCrossed = crossed.has(n)
                      const isCurrent = currentPrime === n
                      const isPrimeSurvivor = n >= 2 && !isCrossed
                      const isBeingSievedNow =
                        currentPrime &&
                        n > currentPrime &&
                        n % currentPrime === 0 &&
                        !computeSieve(step - 1).has(n)

                      // Layer 3: Fill logic
                      let fill = 'transparent'
                      let fillOp = 0
                      if (isCurrent) {
                        fill = C.accent
                        fillOp = 0.3
                      } else if (done && isPrimeSurvivor) {
                        fill = C.accent
                        fillOp = 0.25
                      } else if (isBeingSievedNow) {
                        fill = C.dim
                        fillOp = 0.1
                      }

                      const textColor = isOne || isCrossed ? C.dim : C.fg

                      return (
                        <g key={n}>
                          {/* Layer 2: Cell border */}
                          <rect
                            x={x}
                            y={y}
                            width={cellSize}
                            height={cellSize}
                            fill={fill}
                            fillOpacity={fillOp}
                            stroke={C.faint}
                            strokeWidth={1}
                          />

                          {/* Double-ring for current prime being sieved */}
                          {isCurrent && (
                            <rect
                              x={x + 3}
                              y={y + 3}
                              width={cellSize - 6}
                              height={cellSize - 6}
                              fill="none"
                              stroke={C.accent}
                              strokeWidth={1}
                            />
                          )}

                          {/* Cell number */}
                          <text
                            x={x + cellSize / 2}
                            y={y + cellSize / 2 + 5}
                            textAnchor="middle"
                            fill={textColor}
                            fontSize={13}
                            {...F}
                          >
                            {n}
                          </text>

                          {/* Layer 3: Diagonal cross-out (corner to corner) */}
                          {isCrossed && (
                            <>
                              <line
                                x1={x + 8}
                                y1={y + 8}
                                x2={x + cellSize - 8}
                                y2={y + cellSize - 8}
                                stroke={C.dim}
                                strokeWidth={1}
                              />
                              <line
                                x1={x + cellSize - 8}
                                y1={y + 8}
                                x2={x + 8}
                                y2={y + cellSize - 8}
                                stroke={C.dim}
                                strokeWidth={1}
                              />
                            </>
                          )}
                        </g>
                      )
                    })}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Layer 5: Step-specific instruction */}
          <InstructionText C={C}>{STEP_INSTRUCTIONS[step]}</InstructionText>

          <div style={{ display: 'flex', gap: 8, marginTop: 12, justifyContent: 'center' }}>
            {!done && (
              <button style={btnStyle(true, C)} onClick={() => setStep(s => Math.min(s + 1, 5))}>
                NEXT STEP
              </button>
            )}
            <button style={btnStyle(false, C)} onClick={handleReset}>
              RESET
            </button>
          </div>
        </div>
      </ToolShell>
    )
  }
  return SieveOfEratosthenes
})()

// ─── multiplication-games ──────────────────────────────────────────────────────
export const MultiplicationGames = (() => {
  const GRID = 9
  const PAD = 60
  const CELL = 54
  const GRID_W = GRID * CELL
  const SVG_W = 620
  const OX = (SVG_W - GRID_W) / 2
  const OY = PAD + CELL + 8
  const SVG_H = OY + GRID * CELL + 10

  function initState() {
    return {
      player1Score: 0,
      player2Score: 0,
      currentPlayer: 1,
      claimed: {},
      selectedRow: null,
      selectedCol: null,
      phase: 'row' // 'row' -> 'col' -> claim -> switch
    }
  }

  function MultiplicationGames({ toolName, onBack }) {
    const C = useVizColors()
    const [state, setState] = useState(initState)

    const handleReset = () => setState(initState())

    const { currentPlayer, claimed, selectedRow, selectedCol, player1Score, player2Score, phase } =
      state

    const factors = Array.from({ length: GRID }, (_, i) => i + 1)

    const handleRowFactor = useCallback(f => {
      setState(prev => {
        if (prev.phase !== 'row') return prev
        if (prev.selectedRow === f) return { ...prev, selectedRow: null }
        return { ...prev, selectedRow: f, phase: 'col' }
      })
    }, [])

    const handleColFactor = useCallback(f => {
      setState(prev => {
        if (prev.phase === 'row') return prev
        if (prev.selectedCol === f && prev.phase === 'col') return { ...prev, selectedCol: null }

        const row = prev.selectedRow
        if (row === null) return prev

        const key = `${f}x${row}`
        if (prev.claimed[key]) return { ...prev, selectedCol: f }

        const newClaimed = { ...prev.claimed, [key]: prev.currentPlayer }
        const s1 = prev.currentPlayer === 1 ? prev.player1Score + 1 : prev.player1Score
        const s2 = prev.currentPlayer === 2 ? prev.player2Score + 1 : prev.player2Score
        return {
          ...prev,
          claimed: newClaimed,
          player1Score: s1,
          player2Score: s2,
          currentPlayer: prev.currentPlayer === 1 ? 2 : 1,
          selectedRow: null,
          selectedCol: null,
          phase: 'row'
        }
      })
    }, [])

    // Dynamic instruction
    let instruction = `PLAYER ${currentPlayer}: SELECT A ROW FACTOR`
    if (phase === 'col') instruction = 'NOW SELECT A COLUMN FACTOR'

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Score display */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 12, height: 12, background: C.accent, opacity: 0.7 }} />
              <span
                style={{
                  ...F,
                  fontSize: 18,
                  color: currentPlayer === 1 ? C.accent : C.dim,
                  fontWeight: 'bold'
                }}
              >
                P1: {player1Score}
              </span>
            </div>
            <span
              style={{
                ...F,
                fontSize: 14,
                color: C.fg,
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              PLAYER {currentPlayer}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  ...F,
                  fontSize: 18,
                  color: currentPlayer === 2 ? C.fg : C.dim,
                  fontWeight: 'bold'
                }}
              >
                P2: {player2Score}
              </span>
              <div style={{ width: 12, height: 12, background: C.fg, opacity: 0.7 }} />
            </div>
          </div>

          <div className="lrn-graph">
            <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} width="100%" style={{ display: 'block' }}>
              {/* Layer 1: Alternating row/column fills */}
              {factors.map((_, j) => (
                <rect
                  key={`rowfill${j}`}
                  x={OX}
                  y={OY + j * CELL}
                  width={GRID_W}
                  height={CELL}
                  fill={C.fg}
                  fillOpacity={j % 2 === 0 ? 0.02 : 0.04}
                />
              ))}

              {/* Highlight selected row strip */}
              {selectedRow !== null && (
                <rect
                  x={OX}
                  y={OY + (selectedRow - 1) * CELL}
                  width={GRID_W}
                  height={CELL}
                  fill={C.accent}
                  fillOpacity={0.06}
                />
              )}

              {/* Highlight selected column strip */}
              {selectedCol !== null && (
                <rect
                  x={OX + (selectedCol - 1) * CELL}
                  y={OY}
                  width={CELL}
                  height={GRID_W}
                  fill={C.accent}
                  fillOpacity={0.06}
                />
              )}

              {/* Multiply sign */}
              <text
                x={OX - CELL / 2}
                y={PAD + CELL / 2 + 5}
                textAnchor="middle"
                fill={C.dim}
                fontSize={14}
                {...F}
              >
                X
              </text>

              {/* Top row: column factors */}
              {factors.map((f, i) => {
                const x = OX + i * CELL
                const sel = selectedCol === f
                return (
                  <g
                    key={`top-${f}`}
                    onClick={() => handleColFactor(f)}
                    style={{ cursor: 'pointer' }}
                  >
                    <rect
                      x={x}
                      y={PAD}
                      width={CELL}
                      height={CELL}
                      fill={sel ? C.accent : 'transparent'}
                      fillOpacity={sel ? 0.2 : 1}
                      stroke={C.dim}
                      strokeWidth={1}
                    />
                    <text
                      x={x + CELL / 2}
                      y={PAD + CELL / 2 + 5}
                      textAnchor="middle"
                      fill={sel ? C.accent : C.fg}
                      fontSize={14}
                      {...F}
                      fontWeight="bold"
                    >
                      {f}
                    </text>
                  </g>
                )
              })}

              {/* Left column: row factors */}
              {factors.map((f, j) => {
                const y = OY + j * CELL
                const sel = selectedRow === f
                return (
                  <g
                    key={`left-${f}`}
                    onClick={() => handleRowFactor(f)}
                    style={{ cursor: 'pointer' }}
                  >
                    <rect
                      x={OX - CELL}
                      y={y}
                      width={CELL}
                      height={CELL}
                      fill={sel ? C.accent : 'transparent'}
                      fillOpacity={sel ? 0.2 : 1}
                      stroke={C.dim}
                      strokeWidth={1}
                    />
                    <text
                      x={OX - CELL / 2}
                      y={y + CELL / 2 + 5}
                      textAnchor="middle"
                      fill={sel ? C.accent : C.fg}
                      fontSize={14}
                      {...F}
                      fontWeight="bold"
                    >
                      {f}
                    </text>
                  </g>
                )
              })}

              {/* Layer 2: Grid structure */}
              {factors.map((_, i) => (
                <line
                  key={`gv${i}`}
                  x1={OX + i * CELL}
                  y1={OY}
                  x2={OX + i * CELL}
                  y2={OY + GRID_W}
                  stroke={C.dim}
                  strokeWidth={0.3}
                />
              ))}
              {factors.map((_, j) => (
                <line
                  key={`gh${j}`}
                  x1={OX}
                  y1={OY + j * CELL}
                  x2={OX + GRID_W}
                  y2={OY + j * CELL}
                  stroke={C.dim}
                  strokeWidth={0.3}
                />
              ))}

              {/* Product grid */}
              {factors.map((col, i) =>
                factors.map((row, j) => {
                  const x = OX + i * CELL
                  const y = OY + j * CELL
                  const key = `${col}x${row}`
                  const owner = claimed[key]
                  const product = col * row
                  const isIntersection = selectedRow === row && selectedCol === col

                  let textColor = C.dim
                  let fillColor = 'transparent'
                  let fillOp = 0
                  if (owner === 1) {
                    textColor = C.accent
                    fillColor = C.accent
                    fillOp = 0.2
                  }
                  if (owner === 2) {
                    textColor = C.fg
                    fillColor = C.fg
                    fillOp = 0.2
                  }

                  return (
                    <g key={key}>
                      {/* Layer 3: Data fill */}
                      {owner && (
                        <rect
                          x={x}
                          y={y}
                          width={CELL}
                          height={CELL}
                          fill={fillColor}
                          fillOpacity={fillOp}
                        />
                      )}
                      {/* Intersection highlight */}
                      {isIntersection && !owner && (
                        <rect
                          x={x}
                          y={y}
                          width={CELL}
                          height={CELL}
                          fill={C.accent}
                          fillOpacity={0.15}
                          stroke={C.accent}
                          strokeWidth={2}
                        />
                      )}
                      <text
                        x={x + CELL / 2}
                        y={y + CELL / 2 + 5}
                        textAnchor="middle"
                        fill={owner ? textColor : isIntersection ? C.accent : C.dim}
                        fontSize={owner ? 13 : 11}
                        {...F}
                        fontWeight={owner ? 'bold' : 'normal'}
                      >
                        {product}
                      </text>
                    </g>
                  )
                })
              )}

              {/* Grid border */}
              <rect
                x={OX}
                y={OY}
                width={GRID_W}
                height={GRID_W}
                fill="none"
                stroke={C.dim}
                strokeWidth={1}
              />
            </svg>
          </div>

          {/* Layer 5 */}
          <InstructionText C={C}>{instruction}</InstructionText>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
            <button style={btnStyle(false, C)} onClick={handleReset} aria-label="New game">
              NEW GAME
            </button>
          </div>
        </div>
      </ToolShell>
    )
  }
  return MultiplicationGames
})()

// ─── fraction-strips ──────────────────────────────────────────────────────
export const FractionStrips = (() => {
  const DEFAULT_DENOMS = new Set([1, 2, 3, 4, 6])
  const ALL_DENOMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const PAD_X = 50,
    PAD_Y = 24,
    ROW_H = 34,
    GAP = 6,
    BAR_W = 540

  function FractionStrips({ toolName, onBack }) {
    const C = useVizColors()
    const [visibleDenoms, setVisibleDenoms] = useState(DEFAULT_DENOMS)
    const [highlighted, setHighlighted] = useState({})

    const toggleDenom = d => {
      setVisibleDenoms(prev => {
        const next = new Set(prev)
        next.has(d) ? next.delete(d) : next.add(d)
        return next
      })
    }

    const toggleSegment = useCallback((denom, idx) => {
      setHighlighted(prev => {
        const next = { ...prev }
        const set = new Set(next[denom] || [])
        set.has(idx) ? set.delete(idx) : set.add(idx)
        next[denom] = set
        return next
      })
    }, [])

    const handleReset = () => {
      setVisibleDenoms(DEFAULT_DENOMS)
      setHighlighted({})
    }

    const visible = ALL_DENOMS.filter(d => visibleDenoms.has(d))
    const svgH = PAD_Y * 2 + visible.length * (ROW_H + GAP) + 70

    // Find equivalences
    const highlightedFractions = []
    for (const [d, set] of Object.entries(highlighted)) {
      if (set.size > 0) highlightedFractions.push({ denom: +d, count: set.size })
    }
    const equivalences = []
    for (let i = 0; i < highlightedFractions.length; i++) {
      for (let j = i + 1; j < highlightedFractions.length; j++) {
        const a = highlightedFractions[i],
          b = highlightedFractions[j]
        if (a.count * b.denom === b.count * a.denom) {
          const ga = gcd(a.count, a.denom)
          equivalences.push({
            aNum: a.count,
            aDen: a.denom,
            bNum: b.count,
            bDen: b.denom,
            rNum: a.count / ga,
            rDen: a.denom / ga
          })
        }
      }
    }

    // Find selected segment edges for alignment guides
    const selectedEdges = []
    for (const [d, set] of Object.entries(highlighted)) {
      if (!set || set.size === 0) continue
      const denom = +d
      const segW = BAR_W / denom
      const rowIdx = visible.indexOf(denom)
      if (rowIdx === -1) continue
      const y = PAD_Y + rowIdx * (ROW_H + GAP)
      for (const idx of set) {
        selectedEdges.push({ x: PAD_X + (idx + 1) * segW, y1: y, y2: y + ROW_H })
      }
    }

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Denom toggles */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
            {ALL_DENOMS.map(d => {
              const active = visibleDenoms.has(d)
              return (
                <button
                  key={d}
                  onClick={() => toggleDenom(d)}
                  aria-label={`Toggle 1/${d} strip`}
                  style={{
                    ...F,
                    fontSize: 12,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '6px 10px',
                    minHeight: 44,
                    minWidth: 44,
                    cursor: 'pointer',
                    background: active ? C.fg : 'transparent',
                    color: active ? '#000' : C.dim,
                    border: `1px solid ${active ? C.fg : C.dim}`
                  }}
                >
                  <InlineFraction num={1} den={d} />
                </button>
              )
            })}
          </div>

          <div className="lrn-graph">
            <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
              {visible.map((denom, rowIdx) => {
                const y = PAD_Y + rowIdx * (ROW_H + GAP)
                const segW = BAR_W / denom
                const selSet = highlighted[denom] || new Set()

                return (
                  <g key={denom}>
                    <SvgFraction
                      x={PAD_X - 16}
                      y={y + ROW_H / 2 - 6}
                      num={1}
                      den={denom}
                      C={C}
                      fontSize={11}
                      fill={C.dim}
                    />
                    {Array.from({ length: denom }, (_, i) => {
                      const sx = PAD_X + i * segW
                      const sel = selSet.has ? selSet.has(i) : false
                      const showLabel = segW >= 40

                      return (
                        <g
                          key={i}
                          onClick={() => toggleSegment(denom, i)}
                          style={{ cursor: 'pointer' }}
                        >
                          {/* Layer 1: alternating fills for unselected */}
                          <rect
                            x={sx}
                            y={y}
                            width={segW}
                            height={ROW_H}
                            fill={sel ? C.accent : C.fg}
                            fillOpacity={sel ? 0.25 : i % 2 === 0 ? 0.04 : 0.08}
                          />
                          {/* Layer 2: structure border */}
                          <rect
                            x={sx}
                            y={y}
                            width={segW}
                            height={ROW_H}
                            fill="none"
                            stroke={C.dim}
                            strokeWidth={1}
                          />
                          {/* Label only when segment wide enough */}
                          {showLabel && (
                            <SvgFraction
                              x={sx + segW / 2}
                              y={y + ROW_H / 2 - 6}
                              num={1}
                              den={denom}
                              C={C}
                              fontSize={denom <= 4 ? 11 : 9}
                              fill={sel ? C.fg : C.dim}
                            />
                          )}
                        </g>
                      )
                    })}
                  </g>
                )
              })}

              {/* Layer 4: DashedConnector vertical alignment guides between equivalent selected segments */}
              {selectedEdges.length >= 2 &&
                (() => {
                  // Group edges by x position (within 2px tolerance)
                  const xGroups = {}
                  for (const edge of selectedEdges) {
                    const key = Math.round(edge.x)
                    if (!xGroups[key]) xGroups[key] = []
                    xGroups[key].push(edge)
                  }
                  return Object.values(xGroups)
                    .filter(group => group.length >= 2)
                    .map((group, gi) => {
                      const minY = Math.min(...group.map(g => g.y1))
                      const maxY = Math.max(...group.map(g => g.y2))
                      return (
                        <DashedConnector
                          key={`align-${gi}`}
                          x1={group[0].x}
                          y1={minY}
                          x2={group[0].x}
                          y2={maxY}
                          C={C}
                        />
                      )
                    })
                })()}

              {/* Layer 4: MeasurementBracket below selected segments */}
              {highlightedFractions.map(hf => {
                const rowIdx = visible.indexOf(hf.denom)
                if (rowIdx === -1) return null
                const segW = BAR_W / hf.denom
                const y = PAD_Y + rowIdx * (ROW_H + GAP) + ROW_H + 2
                const selSet = highlighted[hf.denom]
                if (!selSet || selSet.size === 0) return null
                const indices = [...selSet].sort((a, b) => a - b)
                const minIdx = indices[0]
                const maxIdx = indices[indices.length - 1]
                return (
                  <MeasurementBracket
                    key={`mb-${hf.denom}`}
                    x1={PAD_X + minIdx * segW}
                    x2={PAD_X + (maxIdx + 1) * segW}
                    y={y}
                    fractionLabel={{ num: hf.count, den: hf.denom }}
                    C={C}
                    direction="below"
                    tickH={4}
                  />
                )
              })}

              {/* Layer 6: equivalence display, larger and bolder */}
              {equivalences.length > 0 &&
                (() => {
                  const eq = equivalences[0]
                  const cy = svgH - 20
                  const gap = 64
                  const cx = 310
                  const fontSize = 18
                  return (
                    <g>
                      <SvgFraction
                        x={cx - gap}
                        y={cy}
                        num={eq.aNum}
                        den={eq.aDen}
                        C={C}
                        fontSize={fontSize}
                        fill={C.accent}
                        fontWeight="bold"
                      />
                      <text
                        x={cx - gap / 2}
                        y={cy + fontSize / 2}
                        textAnchor="middle"
                        fill={C.accent}
                        fontSize={fontSize}
                        fontWeight="bold"
                        {...F}
                      >
                        =
                      </text>
                      <SvgFraction
                        x={cx}
                        y={cy}
                        num={eq.bNum}
                        den={eq.bDen}
                        C={C}
                        fontSize={fontSize}
                        fill={C.accent}
                        fontWeight="bold"
                      />
                      <text
                        x={cx + gap / 2}
                        y={cy + fontSize / 2}
                        textAnchor="middle"
                        fill={C.accent}
                        fontSize={fontSize}
                        fontWeight="bold"
                        {...F}
                      >
                        =
                      </text>
                      <SvgFraction
                        x={cx + gap}
                        y={cy}
                        num={eq.rNum}
                        den={eq.rDen}
                        C={C}
                        fontSize={fontSize}
                        fill={C.accent}
                        fontWeight="bold"
                      />
                    </g>
                  )
                })()}
            </svg>
          </div>

          {/* Layer 5 */}
          <InstructionText C={C}>CLICK SEGMENTS TO HIGHLIGHT AND COMPARE</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return FractionStrips
})()

// ─── fraction-circles ──────────────────────────────────────────────────────
export const FractionCircles = (() => {
  const CX = 310,
    CY = 200,
    R = 150

  function wedgePath(i, denom) {
    const a0 = (i / denom) * 2 * Math.PI - Math.PI / 2
    const a1 = ((i + 1) / denom) * 2 * Math.PI - Math.PI / 2
    const x1 = CX + R * Math.cos(a0)
    const y1 = CY + R * Math.sin(a0)
    const x2 = CX + R * Math.cos(a1)
    const y2 = CY + R * Math.sin(a1)
    const large = a1 - a0 > Math.PI ? 1 : 0
    if (denom === 1) {
      return `M ${CX} ${CY - R} A ${R} ${R} 0 1 1 ${CX - 0.01} ${CY - R} Z`
    }
    return `M ${CX} ${CY} L ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} Z`
  }

  function labelPos(i, denom) {
    const mid = ((i + 0.5) / denom) * 2 * Math.PI - Math.PI / 2
    const lr = R * 0.6
    return { x: CX + lr * Math.cos(mid), y: CY + lr * Math.sin(mid) }
  }

  function FractionCircles({ toolName, onBack }) {
    const C = useVizColors()
    const [denom, setDenom] = useState(4)
    const [selected, setSelected] = useState(new Set())

    const toggle = i => {
      setSelected(prev => {
        const next = new Set(prev)
        next.has(i) ? next.delete(i) : next.add(i)
        return next
      })
    }

    const handleReset = () => {
      setDenom(4)
      setSelected(new Set())
    }
    const handleDenom = v => {
      setDenom(v)
      // Keep selected wedges that still exist in the new denominator
      setSelected(prev => {
        const next = new Set()
        for (const i of prev) {
          if (i < v) next.add(i)
        }
        return next
      })
    }

    const count = selected.size
    const decimal = denom > 0 ? (count / denom).toFixed(3) : '0'
    const pct = denom > 0 ? ((count / denom) * 100).toFixed(1) : '0'

    const displayY = CY + R + 40
    const svgH = displayY + 90

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <SliderControl
            label="DENOMINATOR"
            value={denom}
            onChange={handleDenom}
            min={2}
            max={12}
            C={C}
            display={denom}
          />

          <div className="lrn-graph" style={{ marginTop: 16 }}>
            <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Layer 1: Faint circle background */}
              <circle cx={CX} cy={CY} r={R} fill={C.faint} fillOpacity={0.04} />

              {/* Wedges */}
              {Array.from({ length: denom }, (_, i) => {
                const sel = selected.has(i)
                const lp = labelPos(i, denom)
                return (
                  <g
                    key={i}
                    onClick={() => toggle(i)}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Wedge ${i + 1} of ${denom}`}
                    onKeyDown={e => {
                      if (e.key === 'Enter') toggle(i)
                    }}
                  >
                    {/* Layer 3: Selected fill */}
                    <path
                      d={wedgePath(i, denom)}
                      fill={sel ? C.accent : 'transparent'}
                      fillOpacity={sel ? 0.25 : 0}
                    />
                    {/* Layer 2: Border - dashed for unselected, solid for selected */}
                    <path
                      d={wedgePath(i, denom)}
                      fill="none"
                      stroke={C.dim}
                      strokeWidth={sel ? 1.5 : 1}
                      strokeDasharray={sel ? 'none' : '4 4'}
                    />
                    {/* Wedge label */}
                    <text
                      x={lp.x}
                      y={lp.y + 4}
                      textAnchor="middle"
                      fill={sel ? C.fg : C.dim}
                      fontSize={denom <= 6 ? 14 : 10}
                      {...F}
                      style={{ pointerEvents: 'none' }}
                    >
                      {i + 1}
                    </text>
                  </g>
                )
              })}

              {/* Layer 2: Outer circle border */}
              <circle cx={CX} cy={CY} r={R} fill="none" stroke={C.dim} strokeWidth={1} />

              {/* Layer 6: Stacked fraction display */}
              <SvgFraction
                x={310}
                y={displayY}
                num={count}
                den={denom}
                C={C}
                fontSize={22}
                fontWeight="bold"
              />
              {/* Dim decimal */}
              <text x={310} y={displayY + 40} textAnchor="middle" fill={C.dim} fontSize={14} {...F}>
                {decimal}
              </text>
              {/* Dim percentage */}
              <text x={310} y={displayY + 58} textAnchor="middle" fill={C.dim} fontSize={14} {...F}>
                {pct}%
              </text>
            </svg>
          </div>

          {/* Layer 5: Instruction */}
          <InstructionText C={C}>CLICK WEDGES TO SELECT</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return FractionCircles
})()

// ─── cuisenaire-rods ──────────────────────────────────────────────────────
export const CuisenaireRods = (() => {
  const UNIT = 40
  const GRID_COLS = 12
  const GRID_ROWS = 6
  const GRID_X = 40
  const GRID_Y = 70
  const SVG_W = GRID_X + GRID_COLS * UNIT + 40
  const SVG_H = GRID_Y + GRID_ROWS * UNIT + 30

  const ROD_COLORS = [
    '#666',
    '#c44040',
    '#5a9a5a',
    '#8855aa',
    '#d4a843',
    '#2d8a4e',
    '#222',
    '#8b5e3c',
    '#4488cc',
    '#cc8833'
  ]

  function CuisenaireRods({ toolName, onBack }) {
    const C = useVizColors()
    const [workspace, setWorkspace] = useState([])
    const [sel, setSel] = useState(null)
    const handleReset = () => {
      setWorkspace([])
      setSel(null)
    }

    const placeRod = useCallback(
      (row, col) => {
        if (!sel) return
        if (col + sel > GRID_COLS) return
        const overlaps = workspace.some(
          r => r.row === row && !(col + sel <= r.col || col >= r.col + r.length)
        )
        if (overlaps) return
        setWorkspace(prev => [...prev, { length: sel, row, col }])
      },
      [sel, workspace]
    )

    const removeRod = useCallback(idx => {
      setWorkspace(prev => prev.filter((_, i) => i !== idx))
    }, [])

    // Find equations
    const equations = []
    const rowMap = {}
    workspace.forEach(r => {
      ;(rowMap[r.row] ||= []).push(r)
    })
    for (const rods of Object.values(rowMap)) {
      if (rods.length < 2) continue
      const sorted = [...rods].sort((a, b) => a.col - b.col)
      let start = 0
      for (let i = 1; i <= sorted.length; i++) {
        const prevEnd = sorted[i - 1].col + sorted[i - 1].length
        if (i === sorted.length || sorted[i].col !== prevEnd) {
          const seq = sorted.slice(start, i)
          if (seq.length >= 2) {
            const total = seq.reduce((s, r) => s + r.length, 0)
            equations.push(seq.map(r => r.length).join(' + ') + ' = ' + total)
          }
          start = i
        }
      }
    }

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Palette */}
          <div
            style={{
              display: 'flex',
              gap: 4,
              justifyContent: 'center',
              marginBottom: 12,
              flexWrap: 'wrap'
            }}
          >
            {Array.from({ length: 10 }, (_, i) => {
              const len = i + 1
              const active = sel === len
              return (
                <button
                  key={len}
                  onClick={() => setSel(active ? null : len)}
                  style={{
                    ...btnStyle(active, C),
                    minWidth: 44,
                    padding: '4px 8px',
                    borderColor: active ? ROD_COLORS[i] : C.dim,
                    color: active ? ROD_COLORS[i] : C.dim,
                    background: active ? ROD_COLORS[i] + '22' : 'transparent'
                  }}
                >
                  {len}
                </button>
              )
            })}
          </div>

          {sel && (
            <div style={{ textAlign: 'center', marginBottom: 8 }}>
              <span
                style={{
                  ...F,
                  fontSize: 11,
                  color: ROD_COLORS[sel - 1],
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}
              >
                SELECTED: ROD {sel}
              </span>
            </div>
          )}

          <div className="lrn-graph">
            <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} width="100%" style={{ display: 'block' }}>
              {/* Grid background */}
              {Array.from({ length: GRID_ROWS }, (_, r) => (
                <rect
                  key={`bg${r}`}
                  x={GRID_X}
                  y={GRID_Y + r * UNIT}
                  width={GRID_COLS * UNIT}
                  height={UNIT}
                  fill={C.fg}
                  fillOpacity={r % 2 === 0 ? 0.03 : 0.06}
                />
              ))}

              {/* Grid lines */}
              {Array.from({ length: GRID_ROWS + 1 }, (_, r) => (
                <line
                  key={`h${r}`}
                  x1={GRID_X}
                  y1={GRID_Y + r * UNIT}
                  x2={GRID_X + GRID_COLS * UNIT}
                  y2={GRID_Y + r * UNIT}
                  stroke={C.dim}
                  strokeWidth={0.3}
                  opacity={0.5}
                />
              ))}
              {Array.from({ length: GRID_COLS + 1 }, (_, c) => (
                <line
                  key={`v${c}`}
                  x1={GRID_X + c * UNIT}
                  y1={GRID_Y}
                  x2={GRID_X + c * UNIT}
                  y2={GRID_Y + GRID_ROWS * UNIT}
                  stroke={C.dim}
                  strokeWidth={0.3}
                  opacity={0.5}
                />
              ))}

              {/* Ruler */}
              {Array.from({ length: GRID_COLS + 1 }, (_, c) => (
                <text
                  key={`r${c}`}
                  x={GRID_X + c * UNIT}
                  y={GRID_Y - 6}
                  textAnchor="middle"
                  fill={C.dim}
                  fontSize={9}
                  {...F}
                >
                  {c}
                </text>
              ))}

              {/* Click targets */}
              {sel &&
                Array.from({ length: GRID_ROWS }, (_, r) =>
                  Array.from({ length: GRID_COLS }, (_, c) => (
                    <rect
                      key={`t${r}-${c}`}
                      x={GRID_X + c * UNIT}
                      y={GRID_Y + r * UNIT}
                      width={UNIT}
                      height={UNIT}
                      fill="transparent"
                      style={{ cursor: 'pointer' }}
                      onClick={() => placeRod(r, c)}
                    />
                  ))
                )}

              {/* Placed rods */}
              {workspace.map((rod, idx) => {
                const rx = GRID_X + rod.col * UNIT + 1
                const ry = GRID_Y + rod.row * UNIT + 1
                const rw = rod.length * UNIT - 2
                const rh = UNIT - 2
                const color = ROD_COLORS[rod.length - 1]
                return (
                  <g
                    key={idx}
                    onClick={e => {
                      e.stopPropagation()
                      removeRod(idx)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <rect
                      x={rx}
                      y={ry}
                      width={rw}
                      height={rh}
                      fill={color}
                      fillOpacity={0.3}
                      stroke={color}
                      strokeWidth={1.5}
                    />
                    <text
                      x={rx + rw / 2}
                      y={ry + rh / 2 + 5}
                      textAnchor="middle"
                      fill={color}
                      fontSize={13}
                      {...F}
                      fontWeight="bold"
                      style={{ pointerEvents: 'none' }}
                    >
                      {rod.length}
                    </text>
                  </g>
                )
              })}

              {/* Grid border */}
              <rect
                x={GRID_X}
                y={GRID_Y}
                width={GRID_COLS * UNIT}
                height={GRID_ROWS * UNIT}
                fill="none"
                stroke={C.dim}
                strokeWidth={1}
              />
            </svg>
          </div>

          {/* Equations */}
          {equations.length > 0 && (
            <div style={{ textAlign: 'center', marginTop: 8 }}>
              {equations.map((eq, i) => (
                <div key={i} style={{ ...F, fontSize: 14, color: C.fg, fontWeight: 'bold' }}>
                  {eq}
                </div>
              ))}
            </div>
          )}

          <InstructionText C={C}>
            {!sel ? 'SELECT A ROD NUMBER ABOVE' : 'CLICK GRID TO PLACE, CLICK A ROD TO REMOVE'}
          </InstructionText>
        </div>
      </ToolShell>
    )
  }
  return CuisenaireRods
})()

// ─── bar-model ──────────────────────────────────────────────────────
export const BarModel = (() => {
  const PAD_X = 60
  const BAR_W = 500
  const BAR_H = 56
  const BAR_Y = 60
  const SVG_W = 620
  const SVG_H = 220

  function BarModel({ toolName, onBack }) {
    const C = useVizColors()
    const [total, setTotal] = useState(12)
    const [parts, setParts] = useState(2)
    const [unknownIdx, setUnknownIdx] = useState(null)

    const handleReset = () => {
      setTotal(12)
      setParts(2)
      setUnknownIdx(null)
    }

    // Build equal segments
    const segments = []
    const baseVal = Math.floor(total / parts)
    const remainder = total % parts
    for (let i = 0; i < parts; i++) {
      segments.push(baseVal + (i < remainder ? 1 : 0))
    }

    const handleParts = v => {
      setParts(v)
      if (unknownIdx !== null && unknownIdx >= v) setUnknownIdx(null)
    }

    // Equation
    const eqParts = segments.map((v, i) => (i === unknownIdx ? '?' : v))
    const eqLine = eqParts.join(' + ') + ' = ' + total
    const answerLine = unknownIdx !== null ? `? = ${segments[unknownIdx]}` : null

    // Segment widths proportional to value
    const segWidths = segments.map(v => (v / total) * BAR_W)

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <SliderControl label="TOTAL" value={total} onChange={setTotal} min={2} max={100} C={C} />
          <SliderControl
            label="PARTS"
            value={parts}
            onChange={handleParts}
            min={2}
            max={10}
            C={C}
          />

          <div className="lrn-graph" style={{ marginTop: 12 }}>
            <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} width="100%" style={{ display: 'block' }}>
              {/* Total label on left */}
              <text
                x={PAD_X - 12}
                y={BAR_Y + BAR_H / 2 + 5}
                textAnchor="end"
                fill={C.fg}
                fontSize={16}
                {...F}
                fontWeight="bold"
              >
                {total}
              </text>

              {/* Segments */}
              {(() => {
                let xOff = 0
                return segments.map((val, i) => {
                  const sx = PAD_X + xOff
                  const sw = segWidths[i]
                  xOff += sw
                  const isUnknown = i === unknownIdx
                  const fillOp = isUnknown ? 0.2 : i % 2 === 0 ? 0.08 : 0.16
                  const fillColor = isUnknown ? C.accent : C.fg

                  return (
                    <g
                      key={i}
                      onClick={() => setUnknownIdx(unknownIdx === i ? null : i)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Fill */}
                      <rect
                        x={sx}
                        y={BAR_Y}
                        width={sw}
                        height={BAR_H}
                        fill={fillColor}
                        fillOpacity={fillOp}
                      />
                      {/* Border */}
                      <rect
                        x={sx}
                        y={BAR_Y}
                        width={sw}
                        height={BAR_H}
                        fill="none"
                        stroke={C.dim}
                        strokeWidth={1}
                      />
                      {/* Value label */}
                      {sw > 20 && (
                        <text
                          x={sx + sw / 2}
                          y={BAR_Y + BAR_H / 2 + 5}
                          textAnchor="middle"
                          fill={isUnknown ? C.accent : C.fg}
                          fontSize={14}
                          {...F}
                          fontWeight="bold"
                        >
                          {isUnknown ? '?' : val}
                        </text>
                      )}
                    </g>
                  )
                })
              })()}

              {/* Outer border */}
              <rect
                x={PAD_X}
                y={BAR_Y}
                width={BAR_W}
                height={BAR_H}
                fill="none"
                stroke={C.fg}
                strokeWidth={1.5}
              />

              {/* Equation */}
              <text
                x={SVG_W / 2}
                y={BAR_Y + BAR_H + 36}
                textAnchor="middle"
                fill={C.fg}
                fontSize={16}
                {...F}
                fontWeight="bold"
              >
                {eqLine}
              </text>
              {answerLine && (
                <text
                  x={SVG_W / 2}
                  y={BAR_Y + BAR_H + 58}
                  textAnchor="middle"
                  fill={C.accent}
                  fontSize={16}
                  {...F}
                  fontWeight="bold"
                >
                  {answerLine}
                </text>
              )}
            </svg>
          </div>

          <InstructionText C={C}>CLICK A SEGMENT TO MARK AS UNKNOWN</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return BarModel
})()

// ─── function-machine ──────────────────────────────────────────────────────
export const FunctionMachine = (() => {
  const OPS = [
    { value: '+', label: '+' },
    { value: '-', label: '-' },
    { value: 'x', label: '\u00d7' },
    { value: 'div', label: '\u00f7' }
  ]

  const OP_DISPLAY = { '+': '+', '-': '-', x: '\u00d7', div: '\u00f7' }

  function compute(input, op, operand) {
    switch (op) {
      case '+':
        return input + operand
      case '-':
        return input - operand
      case 'x':
        return input * operand
      case 'div':
        return operand !== 0 ? Math.round((input / operand) * 100) / 100 : 0
      default:
        return input
    }
  }

  const SVG_W = 620
  const SVG_H = 160
  const BOX_W = 120
  const BOX_H = 70
  const BOX_X = (SVG_W - BOX_W) / 2
  const BOX_Y = 45
  const MID_Y = BOX_Y + BOX_H / 2

  function FunctionMachine({ toolName, onBack }) {
    const C = useVizColors()
    const [input, setInput] = useState(5)
    const [op, setOp] = useState('+')
    const [operand, setOperand] = useState(3)

    const handleReset = () => {
      setInput(5)
      setOp('+')
      setOperand(3)
    }

    const output = compute(input, op, operand)
    const eqStr = `${input} ${OP_DISPLAY[op]} ${operand} = ${output}`

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <SliderControl label="INPUT" value={input} onChange={setInput} min={0} max={100} C={C} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
            <span
              style={{
                ...F,
                fontSize: 11,
                color: C.dim,
                minWidth: 100,
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              OPERATION
            </span>
            <ToggleButtonGroup options={OPS} value={op} onChange={setOp} C={C} />
          </div>

          <SliderControl
            label="OPERAND"
            value={operand}
            onChange={setOperand}
            min={1}
            max={50}
            C={C}
          />

          <div className="lrn-graph" style={{ marginTop: 12 }}>
            <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} width="100%" style={{ display: 'block' }}>
              {/* Input arrow */}
              <line x1={80} y1={MID_Y} x2={BOX_X - 2} y2={MID_Y} stroke={C.dim} strokeWidth={1.5} />
              <polygon
                points={`${BOX_X - 8},${MID_Y - 4} ${BOX_X},${MID_Y} ${BOX_X - 8},${MID_Y + 4}`}
                fill={C.dim}
              />

              {/* Input value */}
              <text
                x={80}
                y={MID_Y - 12}
                textAnchor="start"
                fill={C.fg}
                fontSize={18}
                {...F}
                fontWeight="bold"
              >
                {input}
              </text>

              {/* Machine box */}
              <rect
                x={BOX_X}
                y={BOX_Y}
                width={BOX_W}
                height={BOX_H}
                fill={C.fg}
                fillOpacity={0.06}
                stroke={C.fg}
                strokeWidth={1.5}
              />

              {/* Operation label inside box */}
              <text
                x={BOX_X + BOX_W / 2}
                y={MID_Y + 7}
                textAnchor="middle"
                fill={C.fg}
                fontSize={24}
                {...F}
                fontWeight="bold"
              >
                {OP_DISPLAY[op]} {operand}
              </text>

              {/* Output arrow */}
              <line
                x1={BOX_X + BOX_W}
                y1={MID_Y}
                x2={BOX_X + BOX_W + 80}
                y2={MID_Y}
                stroke={C.dim}
                strokeWidth={1.5}
              />
              <polygon
                points={`${BOX_X + BOX_W + 74},${MID_Y - 4} ${BOX_X + BOX_W + 82},${MID_Y} ${BOX_X + BOX_W + 74},${MID_Y + 4}`}
                fill={C.dim}
              />

              {/* Output value */}
              <text
                x={BOX_X + BOX_W + 90}
                y={MID_Y - 12}
                textAnchor="start"
                fill={C.fg}
                fontSize={18}
                {...F}
                fontWeight="bold"
              >
                {output}
              </text>

              {/* Equation */}
              <text
                x={SVG_W / 2}
                y={BOX_Y + BOX_H + 36}
                textAnchor="middle"
                fill={C.fg}
                fontSize={16}
                {...F}
                fontWeight="bold"
              >
                {eqStr}
              </text>
            </svg>
          </div>

          <InstructionText C={C}>SLIDE TO CHANGE INPUT AND OPERATION</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return FunctionMachine
})()

// ─── money ──────────────────────────────────────────────────────
export const Money = (() => {
  const DENOMS = [
    { key: 'penny', label: 'PENNIES', val: 0.01, max: 20, symbol: '1\u00a2' },
    { key: 'nickel', label: 'NICKELS', val: 0.05, max: 20, symbol: '5\u00a2' },
    { key: 'dime', label: 'DIMES', val: 0.1, max: 20, symbol: '10\u00a2' },
    { key: 'quarter', label: 'QUARTERS', val: 0.25, max: 20, symbol: '25\u00a2' },
    { key: 'one', label: '$1 BILLS', val: 1, max: 10, symbol: '$1' },
    { key: 'five', label: '$5 BILLS', val: 5, max: 10, symbol: '$5' },
    { key: 'ten', label: '$10 BILLS', val: 10, max: 10, symbol: '$10' },
    { key: 'twenty', label: '$20 BILLS', val: 20, max: 5, symbol: '$20' }
  ]

  const INIT = { penny: 0, nickel: 0, dime: 0, quarter: 0, one: 0, five: 0, ten: 0, twenty: 0 }

  function Money({ toolName, onBack }) {
    const C = useVizColors()
    const [s, setS] = useState(INIT)

    const handleReset = () => setS(INIT)

    const total = DENOMS.reduce((sum, d) => sum + s[d.key] * d.val, 0)

    const setDenom = (key, val) => setS(prev => ({ ...prev, [key]: val }))

    // SVG bar chart
    const padX = 60,
      padY = 20
    const barAreaW = 500
    const barH = 24,
      barGap = 8
    const chartH = DENOMS.length * (barH + barGap) + padY * 2

    // Find max subtotal for scaling bars
    const subtotals = DENOMS.map(d => s[d.key] * d.val)
    const maxSub = Math.max(1, ...subtotals)

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Total */}
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <span style={{ ...F, fontSize: 28, color: C.fg, fontWeight: 'bold' }}>
              ${total.toFixed(2)}
            </span>
          </div>

          {/* Sliders */}
          {DENOMS.map(d => (
            <SliderControl
              key={d.key}
              label={d.label}
              value={s[d.key]}
              onChange={v => setDenom(d.key, v)}
              min={0}
              max={d.max}
              C={C}
              display={`${s[d.key]} = $${(s[d.key] * d.val).toFixed(2)}`}
            />
          ))}

          {/* Bar chart */}
          <div className="lrn-graph" style={{ marginTop: 12 }}>
            <svg viewBox={`0 0 620 ${chartH}`} width="100%" style={{ display: 'block' }}>
              {DENOMS.map((d, i) => {
                const y = padY + i * (barH + barGap)
                const sub = s[d.key] * d.val
                const barW = maxSub > 0 ? (sub / maxSub) * barAreaW : 0
                const isCoin = i < 4

                return (
                  <g key={d.key}>
                    {/* Row background */}
                    <rect
                      x={padX}
                      y={y}
                      width={barAreaW}
                      height={barH}
                      fill={C.fg}
                      fillOpacity={i % 2 === 0 ? 0.03 : 0.06}
                    />

                    {/* Label */}
                    <text
                      x={padX - 8}
                      y={y + barH / 2 + 4}
                      textAnchor="end"
                      fill={C.dim}
                      fontSize={10}
                      {...F}
                    >
                      {d.symbol}
                    </text>

                    {/* Value bar */}
                    {barW > 0 && (
                      <rect
                        x={padX}
                        y={y + 2}
                        width={barW}
                        height={barH - 4}
                        fill={isCoin ? C.accent : C.fg}
                        fillOpacity={0.3}
                      />
                    )}

                    {/* Subtotal */}
                    {sub > 0 && (
                      <text
                        x={padX + barW + 8}
                        y={y + barH / 2 + 4}
                        fill={isCoin ? C.accent : C.fg}
                        fontSize={11}
                        {...F}
                      >
                        ${sub.toFixed(2)}
                      </text>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          <InstructionText C={C}>SLIDE TO ADD COINS AND BILLS</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return Money
})()

// ─── clock ──────────────────────────────────────────────────────
export const Clock = (() => {
  const CX = 310,
    CY = 250,
    R = 200
  const HOUR_R = 120,
    MIN_R = 170,
    TICK_OUTER = R - 8,
    TICK_INNER_MAJ = R - 24,
    TICK_INNER_MIN = R - 14
  const NUM_R = R - 40,
    MIN_DOT_R = R - 4

  function angleForMinute(m) {
    return (m / 60) * 360 - 90
  }
  function angleForHour(totalMin) {
    return (totalMin / 720) * 360 - 90
  }
  function rad(deg) {
    return (deg * Math.PI) / 180
  }

  function tipPos(angleDeg, radius) {
    const r = rad(angleDeg)
    return { x: CX + Math.cos(r) * radius, y: CY + Math.sin(r) * radius }
  }

  function Clock({ toolName, onBack }) {
    const C = useVizColors()
    const nowMinutes = () => {
      const d = new Date()
      return (d.getHours() % 12) * 60 + d.getMinutes()
    }
    const [minutes, setMinutes] = useState(nowMinutes)
    const [startMinutes, setStartMinutes] = useState(null)
    const [synced, setSynced] = useState(true)
    const [dragging, setDragging] = useState(false)
    const svgRef = useRef(null)

    // Live sync with real clock
    useEffect(() => {
      if (!synced) return
      const id = setInterval(() => setMinutes(nowMinutes()), 1000)
      return () => clearInterval(id)
    }, [synced])

    const handleReset = () => {
      setMinutes(nowMinutes())
      setStartMinutes(null)
      setSynced(true)
    }

    const minuteVal = minutes % 60
    const hourVal = Math.floor(minutes / 60) % 12

    const minAngle = angleForMinute(minuteVal)
    const hrAngle = angleForHour(minutes)
    const minTip = tipPos(minAngle, MIN_R)
    const hrTip = tipPos(hrAngle, HOUR_R)

    const getSvgPoint = useCallback(e => {
      const svg = svgRef.current
      if (!svg) return null
      const rect = svg.getBoundingClientRect()
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      const scaleX = 620 / rect.width
      const scaleY = 520 / rect.height
      return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY }
    }, [])

    const calcMinutes = useCallback(pt => {
      const dx = pt.x - CX
      const dy = pt.y - CY
      let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90
      if (angle < 0) angle += 360
      return Math.round((angle / 360) * 60) % 60
    }, [])

    const handlePointerDown = useCallback(
      e => {
        const pt = getSvgPoint(e)
        if (!pt) return
        const dx = pt.x - minTip.x
        const dy = pt.y - minTip.y
        if (Math.sqrt(dx * dx + dy * dy) < 30) {
          setSynced(false)
          setDragging(true)
          e.target.setPointerCapture?.(e.pointerId)
        }
      },
      [getSvgPoint, minTip.x, minTip.y]
    )

    const handlePointerMove = useCallback(
      e => {
        if (!dragging) return
        const pt = getSvgPoint(e)
        if (!pt) return
        const newMin = calcMinutes(pt)
        setMinutes(prev => {
          const prevMinPart = prev % 60
          const hourPart = prev - prevMinPart
          let diff = newMin - prevMinPart
          if (diff > 30) diff -= 60
          if (diff < -30) diff += 60
          let next = hourPart + prevMinPart + diff
          if (next < 0) next += 720
          if (next >= 720) next -= 720
          return next
        })
      },
      [dragging, getSvgPoint, calcMinutes]
    )

    const handlePointerUp = useCallback(() => setDragging(false), [])

    const addMinutes = n => {
      setSynced(false)
      setMinutes(prev => (((prev + n) % 720) + 720) % 720)
    }

    const markStart = () => setStartMinutes(minutes)

    const displayHour = hourVal === 0 ? 12 : hourVal
    const displayMin = String(minuteVal).padStart(2, '0')

    // Elapsed time
    let elapsedH = 0,
      elapsedM = 0
    if (startMinutes !== null) {
      let diff = minutes - startMinutes
      if (diff < 0) diff += 720
      elapsedH = Math.floor(diff / 60)
      elapsedM = diff % 60
    }

    const hourNumbers = Array.from({ length: 12 }, (_, i) => {
      const num = i === 0 ? 12 : i
      const a = rad((i / 12) * 360 - 90)
      return { num, x: CX + Math.cos(a) * NUM_R, y: CY + Math.sin(a) * NUM_R }
    })

    const ticks = Array.from({ length: 60 }, (_, i) => {
      const a = rad((i / 60) * 360 - 90)
      const major = i % 5 === 0
      const inner = major ? TICK_INNER_MAJ : TICK_INNER_MIN
      return {
        x1: CX + Math.cos(a) * inner,
        y1: CY + Math.sin(a) * inner,
        x2: CX + Math.cos(a) * TICK_OUTER,
        y2: CY + Math.sin(a) * TICK_OUTER,
        major
      }
    })

    // Minute dots outside main ticks
    const minuteDots = Array.from({ length: 60 }, (_, i) => {
      if (i % 5 === 0) return null
      const a = rad((i / 60) * 360 - 90)
      return { cx: CX + Math.cos(a) * MIN_DOT_R, cy: CY + Math.sin(a) * MIN_DOT_R }
    }).filter(Boolean)

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <div className="lrn-graph">
            <svg
              ref={svgRef}
              viewBox="0 0 620 520"
              width="100%"
              style={{
                display: 'block',
                cursor: dragging ? 'grabbing' : 'default',
                touchAction: 'none'
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            >
              {/* Layer 1: clock face background */}
              <circle cx={CX} cy={CY} r={R} fill={C.fg} fillOpacity={0.04} />

              {/* Layer 2: clock face border */}
              <circle cx={CX} cy={CY} r={R} fill="none" stroke={C.dim} strokeWidth={2} />

              {/* Layer 1: minute dots outside main ticks */}
              {minuteDots.map((d, i) => (
                <circle key={i} cx={d.cx} cy={d.cy} r={1.5} fill={C.dim} fillOpacity={0.4} />
              ))}

              {/* Layer 2: tick marks */}
              {ticks.map((t, i) => (
                <line
                  key={i}
                  x1={t.x1}
                  y1={t.y1}
                  x2={t.x2}
                  y2={t.y2}
                  stroke={t.major ? C.fg : C.dim}
                  strokeWidth={t.major ? 2 : 1}
                />
              ))}

              {/* Layer 3: hour numbers */}
              {hourNumbers.map(h => (
                <text
                  key={h.num}
                  x={h.x}
                  y={h.y + 6}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={18}
                  {...F}
                  fontWeight="bold"
                >
                  {h.num}
                </text>
              ))}

              {/* Layer 3: hour hand */}
              <line
                x1={CX}
                y1={CY}
                x2={hrTip.x}
                y2={hrTip.y}
                stroke={C.fg}
                strokeWidth={4}
                strokeLinecap="round"
              />

              {/* Layer 3: minute hand */}
              <line
                x1={CX}
                y1={CY}
                x2={minTip.x}
                y2={minTip.y}
                stroke={C.accent}
                strokeWidth={2}
                strokeLinecap="round"
              />

              {/* Drag handle */}
              <circle
                cx={minTip.x}
                cy={minTip.y}
                r={10}
                fill={dragging ? C.accent : 'transparent'}
                fillOpacity={dragging ? 0.3 : 0}
                stroke={C.accent}
                strokeWidth={2}
                style={{ cursor: 'grab' }}
              />

              {/* Center dot */}
              <circle cx={CX} cy={CY} r={5} fill={C.fg} />

              {/* Layer 6: digital readout */}
              <text
                x={CX}
                y={CY + 70}
                textAnchor="middle"
                fill={C.fg}
                fontSize={28}
                {...F}
                fontWeight="bold"
              >
                {displayHour}:{displayMin}
              </text>
              <text x={CX} y={CY + 92} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
                {displayHour} {displayHour === 1 ? 'HOUR' : 'HOURS'}, {minuteVal}{' '}
                {minuteVal === 1 ? 'MINUTE' : 'MINUTES'}
              </text>

              {/* Layer 6: elapsed time display */}
              {startMinutes !== null && (
                <text
                  x={CX}
                  y={28}
                  textAnchor="middle"
                  fill={C.accent}
                  fontSize={14}
                  {...F}
                  fontWeight="bold"
                >
                  ELAPSED: {elapsedH}H {elapsedM}M
                </text>
              )}
            </svg>
          </div>

          {/* Consolidated buttons */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              justifyContent: 'center',
              marginTop: 16,
              flexWrap: 'wrap'
            }}
          >
            <button
              style={btnStyle(false, C)}
              onClick={() => addMinutes(5)}
              aria-label="Add 5 minutes"
            >
              +5 MIN
            </button>
            <button
              style={btnStyle(false, C)}
              onClick={() => addMinutes(15)}
              aria-label="Add 15 minutes"
            >
              +15 MIN
            </button>
            <button
              style={btnStyle(false, C)}
              onClick={() => addMinutes(60)}
              aria-label="Add 1 hour"
            >
              +1 HR
            </button>
            <button
              style={btnStyle(false, C)}
              onClick={() => addMinutes(-5)}
              aria-label="Subtract 5 minutes"
            >
              -5 MIN
            </button>
            <button
              style={btnStyle(false, C)}
              onClick={() => addMinutes(-15)}
              aria-label="Subtract 15 minutes"
            >
              -15 MIN
            </button>
            <button
              style={btnStyle(false, C)}
              onClick={() => addMinutes(-60)}
              aria-label="Subtract 1 hour"
            >
              -1 HR
            </button>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}>
            <button
              style={btnStyle(startMinutes !== null, C)}
              onClick={markStart}
              aria-label="Mark start time"
            >
              {startMinutes !== null ? 'UPDATE START' : 'MARK START'}
            </button>
            <button
              style={btnStyle(synced, C)}
              onClick={() => {
                setMinutes(nowMinutes())
                setSynced(true)
              }}
              aria-label="Sync to current time"
            >
              {synced ? 'SYNCED' : 'SYNC TO NOW'}
            </button>
          </div>

          {/* Layer 5 */}
          <InstructionText C={C}>DRAG THE MINUTE HAND OR USE BUTTONS</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return Clock
})()

// ─── target-number ──────────────────────────────────────────────────────
export const TargetNumber = (() => {
  function randInt(lo, hi) {
    return lo + Math.floor(Math.random() * (hi - lo + 1))
  }

  function genPuzzle() {
    return {
      available: Array.from({ length: 6 }, () => randInt(1, 9)),
      target: randInt(10, 100),
      expression: [],
      usedIndices: new Set(),
      result: null
    }
  }

  const OPS = ['+', '-', 'x', '/']

  function evaluate(tokens) {
    if (tokens.length === 0) return null
    if (tokens.length === 1) return tokens[0].type === 'num' ? tokens[0].value : null
    let acc = null
    let op = null
    for (const t of tokens) {
      if (t.type === 'num') {
        if (acc === null) {
          acc = t.value
        } else if (op) {
          if (op === '+') acc += t.value
          else if (op === '-') acc -= t.value
          else if (op === 'x') acc *= t.value
          else if (op === '/') acc = t.value === 0 ? Infinity : acc / t.value
          op = null
        }
      } else {
        op = t.value
      }
    }
    return acc
  }

  function TargetNumber({ toolName, onBack }) {
    const C = useVizColors()
    const [state, setState] = useState(genPuzzle)

    const handleReset = () => setState(genPuzzle())

    const { available, target, expression, usedIndices, result } = state

    const addNumber = useCallback(idx => {
      setState(prev => {
        if (prev.usedIndices.has(idx)) return prev
        if (prev.result !== null) return prev
        const last = prev.expression[prev.expression.length - 1]
        if (last && last.type === 'num') return prev
        const newUsed = new Set(prev.usedIndices)
        newUsed.add(idx)
        return {
          ...prev,
          expression: [...prev.expression, { type: 'num', value: prev.available[idx], idx }],
          usedIndices: newUsed
        }
      })
    }, [])

    const addOp = useCallback(op => {
      setState(prev => {
        if (prev.result !== null) return prev
        if (prev.expression.length === 0) return prev
        const last = prev.expression[prev.expression.length - 1]
        if (last.type === 'op') return prev
        return { ...prev, expression: [...prev.expression, { type: 'op', value: op }] }
      })
    }, [])

    const doEvaluate = useCallback(() => {
      setState(prev => {
        if (prev.expression.length === 0) return prev
        const last = prev.expression[prev.expression.length - 1]
        if (last.type === 'op') return prev
        const val = evaluate(prev.expression)
        return { ...prev, result: val }
      })
    }, [])

    const clearExpression = useCallback(() => {
      setState(prev => ({ ...prev, expression: [], usedIndices: new Set(), result: null }))
    }, [])

    const exprStr = expression.map(t => (t.type === 'num' ? t.value : ` ${t.value} `)).join('')
    const isMatch = result !== null && Math.abs(result - target) < 0.001

    // Proximity feedback: how close is partial/result to target
    const liveVal = result !== null ? result : evaluate(expression)
    const proximity =
      liveVal !== null && target > 0 ? Math.max(0, 1 - Math.abs(liveVal - target) / target) : 0

    const CARD_W = 70,
      CARD_H = 70,
      CARD_GAP = 12
    const totalW = available.length * CARD_W + (available.length - 1) * CARD_GAP
    const startX = (620 - totalW) / 2

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <div className="lrn-graph">
            <svg viewBox="0 0 620 400" width="100%" style={{ display: 'block' }}>
              {/* Layer 1: background zones */}
              <rect x={40} y={10} width={540} height={80} fill={C.fg} fillOpacity={0.04} />
              <rect x={40} y={94} width={540} height={86} fill={C.fg} fillOpacity={0.08} />
              <rect x={40} y={184} width={540} height={80} fill={C.fg} fillOpacity={0.04} />

              {/* Layer 2: target label */}
              <text x={310} y={32} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
                TARGET
              </text>

              {/* Layer 3: target number with proximity-based opacity */}
              <text
                x={310}
                y={72}
                textAnchor="middle"
                fill={C.accent}
                fontSize={36}
                {...F}
                fontWeight="bold"
                opacity={0.4 + proximity * 0.6}
              >
                {target}
              </text>

              {/* Layer 3: available number cards */}
              {available.map((n, i) => {
                const x = startX + i * (CARD_W + CARD_GAP)
                const used = usedIndices.has(i)
                return (
                  <g
                    key={i}
                    onClick={() => addNumber(i)}
                    style={{ cursor: used ? 'default' : 'pointer' }}
                  >
                    {/* Layer 1: alternating card fill */}
                    <rect
                      x={x}
                      y={100}
                      width={CARD_W}
                      height={CARD_H}
                      fill={C.fg}
                      fillOpacity={used ? 0.02 : i % 2 === 0 ? 0.04 : 0.08}
                    />
                    {/* Layer 2: card border */}
                    <rect
                      x={x}
                      y={100}
                      width={CARD_W}
                      height={CARD_H}
                      fill="none"
                      stroke={used ? C.dim : C.dim}
                      strokeWidth={1}
                    />
                    {/* Layer 3: number */}
                    <text
                      x={x + CARD_W / 2}
                      y={143}
                      textAnchor="middle"
                      fill={used ? C.dim : C.fg}
                      fontSize={24}
                      {...F}
                      fontWeight="bold"
                    >
                      {n}
                    </text>
                    {/* Checkmark overlay on used cards */}
                    {used && (
                      <text
                        x={x + CARD_W - 12}
                        y={116}
                        textAnchor="middle"
                        fill={C.dim}
                        fontSize={14}
                        {...F}
                      >
                        &#10003;
                      </text>
                    )}
                  </g>
                )
              })}

              {/* Layer 2: expression area (taller: 70px) */}
              <rect
                x={40}
                y={196}
                width={540}
                height={70}
                fill="none"
                stroke={C.dim}
                strokeWidth={1}
              />

              {/* Layer 3: expression text */}
              <text
                x={310}
                y={238}
                textAnchor="middle"
                fill={expression.length ? C.fg : C.dim}
                fontSize={20}
                {...F}
              >
                {expression.length ? exprStr : 'BUILD YOUR EXPRESSION'}
              </text>

              {/* Layer 6: bold result */}
              {result !== null && (
                <>
                  <text
                    x={310}
                    y={300}
                    textAnchor="middle"
                    fill={C.fg}
                    fontSize={isMatch ? 20 : 14}
                    {...F}
                    fontWeight={isMatch ? 'bold' : 'normal'}
                  >
                    = {Number.isInteger(result) ? result : result.toFixed(2)}
                  </text>
                  <text
                    x={310}
                    y={334}
                    textAnchor="middle"
                    fill={isMatch ? C.accent : C.dim}
                    fontSize={isMatch ? 20 : 16}
                    {...F}
                    fontWeight="bold"
                  >
                    {isMatch
                      ? 'EXACT MATCH!'
                      : `OFF BY ${Math.abs(result - target).toFixed(Number.isInteger(result - target) ? 0 : 2)}`}
                  </text>
                </>
              )}
            </svg>
          </div>

          {/* Operation buttons */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              justifyContent: 'center',
              marginTop: 12,
              flexWrap: 'wrap'
            }}
          >
            {OPS.map(op => (
              <button
                key={op}
                style={btnStyle(false, C)}
                onClick={() => addOp(op)}
                aria-label={`Operation ${op}`}
              >
                {op}
              </button>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              gap: 8,
              justifyContent: 'center',
              marginTop: 8,
              flexWrap: 'wrap'
            }}
          >
            <button
              style={btnStyle(false, C)}
              onClick={doEvaluate}
              aria-label="Evaluate expression"
            >
              EVALUATE
            </button>
            <button
              style={btnStyle(false, C)}
              onClick={clearExpression}
              aria-label="Clear expression"
            >
              CLEAR EXPRESSION
            </button>
            <button style={btnStyle(false, C)} onClick={handleReset} aria-label="New puzzle">
              NEW PUZZLE
            </button>
          </div>

          {/* Layer 5 */}
          <InstructionText C={C}>BUILD AN EXPRESSION TO HIT THE TARGET</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return TargetNumber
})()

// ─── venn-diagram ──────────────────────────────────────────────────────
export const VennDiagram = (() => {
  const PROPERTIES = {
    EVEN: n => n % 2 === 0,
    ODD: n => n % 2 !== 0,
    'MULT OF 3': n => n % 3 === 0,
    'MULT OF 5': n => n % 5 === 0,
    PRIME: n => isPrime(n),
    '>10': n => n > 10,
    SQUARE: n => {
      const s = Math.sqrt(n)
      return s === Math.floor(s)
    }
  }

  const PROP_KEYS = Object.keys(PROPERTIES)
  const POOL = Array.from({ length: 20 }, (_, i) => i + 1)

  function getRegion(n, p1, p2) {
    const in1 = PROPERTIES[p1](n)
    const in2 = PROPERTIES[p2](n)
    if (in1 && in2) return 'both'
    if (in1) return 'left'
    if (in2) return 'right'
    return 'outside'
  }

  // Two overlapping circles
  const LCX = 230,
    RCX = 390,
    CY = 210,
    CR = 140

  function inCircle(px, py, cx, cy, r) {
    return (px - cx) ** 2 + (py - cy) ** 2 <= r * r
  }

  function regionFromPoint(px, py) {
    const inL = inCircle(px, py, LCX, CY, CR)
    const inR = inCircle(px, py, RCX, CY, CR)
    if (inL && inR) return 'both'
    if (inL) return 'left'
    if (inR) return 'right'
    return 'outside'
  }

  function layoutNums(placements, region) {
    const nums = Object.entries(placements)
      .filter(([, r]) => r === region)
      .map(([n]) => +n)
      .sort((a, b) => a - b)

    let cx
    if (region === 'left') cx = 175
    else if (region === 'right') cx = 445
    else if (region === 'both') cx = 310
    else cx = 310

    const startY = region === 'outside' ? 370 : 160
    const colSize = 4

    return nums.map((n, i) => {
      const col = Math.floor(i / colSize)
      const row = i % colSize
      const totalCols = Math.ceil(nums.length / colSize)
      const offsetX = cx - (totalCols - 1) * 14
      return { n, x: offsetX + col * 28, y: startY + row * 24 }
    })
  }

  function VennDiagram({ toolName, onBack }) {
    const C = useVizColors()
    const [prop1, setProp1] = useState('EVEN')
    const [prop2, setProp2] = useState('MULT OF 3')
    const [placements, setPlacements] = useState({})
    const [selNum, setSelNum] = useState(null)
    const [flash, setFlash] = useState(null)

    const handleReset = () => {
      setPlacements({})
      setSelNum(null)
    }

    const handleProp = (which, val) => {
      if (which === 1) setProp1(val)
      else setProp2(val)
      setPlacements({})
      setSelNum(null)
    }

    const handleClick = useCallback(
      e => {
        if (selNum === null) return
        const svg = e.currentTarget
        const rect = svg.getBoundingClientRect()
        const px = (e.clientX - rect.left) * (620 / rect.width)
        const py = (e.clientY - rect.top) * (460 / rect.height)

        const clicked = regionFromPoint(px, py)
        const correct = getRegion(selNum, prop1, prop2)

        if (clicked === correct) {
          setPlacements(prev => ({ ...prev, [selNum]: clicked }))
          setSelNum(null)
        } else {
          setFlash(correct)
          setTimeout(() => setFlash(null), 600)
        }
      },
      [selNum, prop1, prop2]
    )

    const placed = new Set(Object.keys(placements).map(Number))
    const poolNums = POOL.filter(n => !placed.has(n))
    const allLayout = ['left', 'right', 'both', 'outside'].flatMap(r => layoutNums(placements, r))

    const propOptions = PROP_KEYS.map(k => ({ value: k, label: k }))
    const placedCount = placed.size

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 8,
                flexWrap: 'wrap'
              }}
            >
              <span
                style={{
                  ...F,
                  fontSize: 11,
                  color: C.accent,
                  minWidth: 40,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}
              >
                LEFT
              </span>
              <ToggleButtonGroup
                options={propOptions}
                value={prop1}
                onChange={v => handleProp(1, v)}
                C={C}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span
                style={{
                  ...F,
                  fontSize: 11,
                  color: C.fg,
                  minWidth: 40,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}
              >
                RIGHT
              </span>
              <ToggleButtonGroup
                options={propOptions}
                value={prop2}
                onChange={v => handleProp(2, v)}
                C={C}
              />
            </div>
          </div>

          <div className="lrn-graph">
            <svg
              viewBox="0 0 620 460"
              width="100%"
              style={{ display: 'block' }}
              onClick={handleClick}
            >
              {/* Circle fills */}
              <circle
                cx={LCX}
                cy={CY}
                r={CR}
                fill={C.accent}
                fillOpacity={flash === 'left' ? 0.15 : 0.04}
              />
              <circle
                cx={RCX}
                cy={CY}
                r={CR}
                fill={C.fg}
                fillOpacity={flash === 'right' ? 0.15 : 0.04}
              />
              {flash === 'both' && (
                <>
                  <circle
                    cx={LCX}
                    cy={CY}
                    r={CR}
                    fill={C.accent}
                    fillOpacity={0.1}
                    style={{ pointerEvents: 'none' }}
                  />
                  <circle
                    cx={RCX}
                    cy={CY}
                    r={CR}
                    fill={C.fg}
                    fillOpacity={0.1}
                    style={{ pointerEvents: 'none' }}
                  />
                </>
              )}

              {/* Circle outlines */}
              <circle cx={LCX} cy={CY} r={CR} fill="none" stroke={C.dim} strokeWidth={1.5} />
              <circle cx={RCX} cy={CY} r={CR} fill="none" stroke={C.dim} strokeWidth={1.5} />

              {/* Labels */}
              <text
                x={LCX - 60}
                y={CY - CR - 10}
                textAnchor="middle"
                fill={C.accent}
                fontSize={12}
                {...F}
              >
                {prop1}
              </text>
              <text
                x={RCX + 60}
                y={CY - CR - 10}
                textAnchor="middle"
                fill={C.fg}
                fontSize={12}
                {...F}
              >
                {prop2}
              </text>

              {/* Placed numbers */}
              {allLayout.map(item => (
                <text
                  key={item.n}
                  x={item.x}
                  y={item.y}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={13}
                  {...F}
                  fontWeight="bold"
                >
                  {item.n}
                </text>
              ))}

              {/* Number pool */}
              <line
                x1={40}
                y1={CY + CR + 30}
                x2={580}
                y2={CY + CR + 30}
                stroke={C.dim}
                strokeWidth={0.5}
              />

              {poolNums.map((n, i) => {
                const cols = Math.min(poolNums.length, 10)
                const row = Math.floor(i / cols)
                const col = i % cols
                const rowCount = Math.min(poolNums.length - row * cols, cols)
                const totalW = rowCount * 38
                const sx = (620 - totalW) / 2 + col * 38 + 16
                const sy = CY + CR + 50 + row * 38
                const sel = selNum === n

                return (
                  <g
                    key={n}
                    onClick={e => {
                      e.stopPropagation()
                      setSelNum(sel ? null : n)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={sx}
                      cy={sy}
                      r={16}
                      fill={sel ? C.fg : 'transparent'}
                      fillOpacity={sel ? 0.1 : 0}
                      stroke={sel ? C.accent : C.dim}
                      strokeWidth={sel ? 2 : 1}
                    />
                    <text
                      x={sx}
                      y={sy + 5}
                      textAnchor="middle"
                      fill={sel ? C.accent : C.fg}
                      fontSize={13}
                      {...F}
                      fontWeight={sel ? 'bold' : 'normal'}
                    >
                      {n}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Progress */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
            <div style={{ flex: 1, height: 4, background: `${C.dim}33` }}>
              <div
                style={{
                  width: `${(placedCount / 20) * 100}%`,
                  height: '100%',
                  background: C.fg,
                  opacity: 0.7
                }}
              />
            </div>
            <span style={{ ...F, fontSize: 11, color: C.dim, letterSpacing: '0.06em' }}>
              {placedCount} / 20
            </span>
          </div>

          <InstructionText C={C}>
            {selNum !== null
              ? `PLACE ${selNum} IN THE CORRECT REGION`
              : 'SELECT A NUMBER, THEN CLICK THE CORRECT REGION'}
          </InstructionText>
        </div>
      </ToolShell>
    )
  }
  return VennDiagram
})()

// ─── visual-puzzles ──────────────────────────────────────────────────────
export const VisualPuzzles = (() => {
  const COLS = 6,
    ROWS = 3

  // Puzzle 1: Fill the Container
  function Puzzle1({ C }) {
    const [filled, setFilled] = useState(new Set())
    const total = COLS * ROWS
    const done = filled.size === total
    const progress = filled.size / total

    const toggle = useCallback(idx => {
      setFilled(prev => {
        const next = new Set(prev)
        if (next.has(idx)) next.delete(idx)
        else next.add(idx)
        return next
      })
    }, [])

    const cellW = 56,
      cellH = 56,
      gap = 4
    const gridW = COLS * (cellW + gap) - gap
    const ox = (620 - gridW) / 2
    const oy = 70

    return (
      <>
        <svg viewBox="0 0 620 340" width="100%" style={{ display: 'block' }}>
          {/* Title */}
          <text
            x={310}
            y={30}
            textAnchor="middle"
            fill={C.fg}
            fontSize={14}
            {...F}
            fontWeight="bold"
          >
            FILL THE CONTAINER
          </text>

          {/* Layer 1: Container outline + alternating cell fills */}
          <rect
            x={ox - 6}
            y={oy - 6}
            width={gridW + 12}
            height={ROWS * (cellH + gap) - gap + 12}
            fill="transparent"
            stroke={C.dim}
            strokeWidth={1.5}
          />

          {Array.from({ length: total }, (_, i) => {
            const col = i % COLS
            const row = Math.floor(i / COLS)
            const x = ox + col * (cellW + gap)
            const y = oy + row * (cellH + gap)
            const isFilled = filled.has(i)
            return (
              <g key={i} onClick={() => toggle(i)} style={{ cursor: 'pointer' }}>
                {/* Layer 1: Alternating fill */}
                <rect
                  x={x}
                  y={y}
                  width={cellW}
                  height={cellH}
                  fill={C.fg}
                  fillOpacity={i % 2 === 0 ? 0.04 : 0.08}
                />
                {/* Layer 3: Data fill when selected */}
                {isFilled && (
                  <rect
                    x={x + 2}
                    y={y + 2}
                    width={cellW - 4}
                    height={cellH - 4}
                    fill={C.accent}
                    fillOpacity={0.3}
                  />
                )}
                {/* Layer 2: Structure border */}
                <rect
                  x={x}
                  y={y}
                  width={cellW}
                  height={cellH}
                  fill="transparent"
                  stroke={isFilled ? C.accent : C.dim}
                  strokeWidth={isFilled ? 1.5 : 0.5}
                />
              </g>
            )
          })}

          {/* Progress bar */}
          <rect x={ox} y={oy - 20} width={gridW} height={4} fill={C.dim} fillOpacity={0.2} />
          <rect
            x={ox}
            y={oy - 20}
            width={gridW * progress}
            height={4}
            fill={done ? C.accent : C.fg}
            fillOpacity={0.7}
          />

          {/* Count */}
          <text
            x={310}
            y={oy + ROWS * (cellH + gap) + 20}
            textAnchor="middle"
            fill={C.dim}
            fontSize={12}
            {...F}
          >
            {filled.size} OF {total} FILLED
          </text>

          {/* Layer 6: Result */}
          {done && (
            <text
              x={310}
              y={oy + ROWS * (cellH + gap) + 42}
              textAnchor="middle"
              fill={C.fg}
              fontSize={16}
              {...F}
              fontWeight="bold"
            >
              COMPLETE
            </text>
          )}
        </svg>
        <InstructionText C={C}>CLICK CELLS TO FILL THE CONTAINER</InstructionText>
      </>
    )
  }

  // Puzzle 2: Complete the Equation
  function Puzzle2({ C }) {
    const [selected, setSelected] = useState(null)
    const a = 7,
      total = 12
    const answer = total - a
    const options = [3, 4, 5, 6]

    const isCorrect = selected === answer
    const isWrong = selected !== null && selected !== answer

    const ox = 140,
      oy = 100
    const optY = 200,
      optGap = 80

    return (
      <>
        <svg viewBox="0 0 620 340" width="100%" style={{ display: 'block' }}>
          {/* Title */}
          <text
            x={310}
            y={30}
            textAnchor="middle"
            fill={C.fg}
            fontSize={14}
            {...F}
            fontWeight="bold"
          >
            COMPLETE THE EQUATION
          </text>

          {/* Layer 1: Background */}
          <rect x={ox - 20} y={oy - 30} width={370} height={60} fill={C.fg} fillOpacity={0.04} />

          {/* Equation: 7 + ? = 12 */}
          <text x={ox} y={oy} fill={C.fg} fontSize={32} {...F} fontWeight="bold">
            {a}
          </text>
          <text x={ox + 60} y={oy} fill={C.dim} fontSize={32} {...F}>
            +
          </text>
          {/* The blank */}
          <rect
            x={ox + 100}
            y={oy - 28}
            width={50}
            height={40}
            fill={C.accent}
            fillOpacity={selected !== null ? 0.2 : 0.08}
            stroke={C.accent}
            strokeWidth={1.5}
          />
          <text
            x={ox + 125}
            y={oy}
            textAnchor="middle"
            fill={selected !== null ? C.fg : C.accent}
            fontSize={28}
            {...F}
            fontWeight="bold"
          >
            {selected !== null ? selected : '?'}
          </text>
          <text x={ox + 180} y={oy} fill={C.dim} fontSize={32} {...F}>
            =
          </text>
          <text x={ox + 230} y={oy} fill={C.fg} fontSize={32} {...F} fontWeight="bold">
            {total}
          </text>

          {/* Options */}
          <text x={310} y={optY - 10} textAnchor="middle" fill={C.dim} fontSize={11} {...F}>
            CHOOSE THE ANSWER
          </text>

          {options.map((opt, i) => {
            const cx = 160 + i * optGap
            const isSel = selected === opt
            const optCorrect = opt === answer && selected !== null
            const optWrong = isSel && opt !== answer
            let stroke = C.dim
            let fillOp = 0.04
            if (optCorrect) {
              stroke = C.accent
              fillOp = 0.2
            }
            if (optWrong) {
              stroke = C.fg
              fillOp = 0.1
            }

            return (
              <g
                key={opt}
                onClick={() => {
                  if (selected === null) setSelected(opt)
                }}
                style={{ cursor: selected === null ? 'pointer' : 'default' }}
              >
                <circle
                  cx={cx}
                  cy={optY + 30}
                  r={28}
                  fill={C.fg}
                  fillOpacity={fillOp}
                  stroke={stroke}
                  strokeWidth={isSel ? 2 : 1}
                />
                <text
                  x={cx}
                  y={optY + 36}
                  textAnchor="middle"
                  fill={optCorrect ? C.accent : optWrong ? C.dim : C.fg}
                  fontSize={20}
                  {...F}
                  fontWeight="bold"
                >
                  {opt}
                </text>
              </g>
            )
          })}

          {/* Layer 6: Result */}
          {isCorrect && (
            <text
              x={310}
              y={300}
              textAnchor="middle"
              fill={C.fg}
              fontSize={16}
              {...F}
              fontWeight="bold"
            >
              CORRECT! {a} + {answer} = {total}
            </text>
          )}
          {isWrong && (
            <text x={310} y={300} textAnchor="middle" fill={C.dim} fontSize={14} {...F}>
              TRY AGAIN
            </text>
          )}
        </svg>
        <InstructionText C={C}>CLICK THE NUMBER THAT COMPLETES THE EQUATION</InstructionText>
      </>
    )
  }

  // Triangular dot layout helper
  function triDots(n) {
    const dots = []
    let row = 0,
      count = 0
    while (count < n) {
      const rowCount = row + 1
      for (let col = 0; col < rowCount && count < n; col++) {
        dots.push({ x: col, y: row })
        count++
      }
      row++
    }
    return dots
  }

  // Puzzle 3: Pattern (Triangular Numbers)
  function Puzzle3({ C }) {
    const [selected, setSelected] = useState(null)
    const correct = 10
    const options = [8, 10, 12]
    const sequence = [1, 3, 6]

    const dotR = 6,
      dotGap = 18
    const sectionW = 120,
      startX = 70

    return (
      <>
        <svg viewBox="0 0 620 360" width="100%" style={{ display: 'block' }}>
          <text
            x={310}
            y={30}
            textAnchor="middle"
            fill={C.fg}
            fontSize={14}
            {...F}
            fontWeight="bold"
          >
            WHAT COMES NEXT?
          </text>

          {/* Sequence: 1, 3, 6, ? */}
          {sequence.map((val, idx) => {
            const ox = startX + idx * sectionW
            const dots = triDots(val)
            const patY = 60
            return (
              <g key={idx}>
                <rect
                  x={ox - 8}
                  y={46}
                  width={sectionW - 8}
                  height={90}
                  fill={C.fg}
                  fillOpacity={idx % 2 === 0 ? 0.04 : 0.08}
                />
                {dots.map((d, i) => (
                  <circle
                    key={i}
                    cx={ox + 10 + d.x * dotGap}
                    cy={patY + d.y * dotGap}
                    r={dotR}
                    fill={C.accent}
                    fillOpacity={0.3}
                    stroke={C.accent}
                    strokeWidth={1}
                  />
                ))}
                <text
                  x={ox + 10 + (idx * dotGap) / 2}
                  y={patY + 78}
                  fill={C.fg}
                  fontSize={16}
                  {...F}
                  fontWeight="bold"
                >
                  {val}
                </text>
              </g>
            )
          })}

          {/* Question mark box */}
          <g>
            <rect
              x={startX + 3 * sectionW - 8}
              y={46}
              width={sectionW - 8}
              height={90}
              fill={C.accent}
              fillOpacity={0.04}
              stroke={C.accent}
              strokeWidth={1}
              strokeDasharray="4 4"
            />
            <text
              x={startX + 3 * sectionW + 48}
              y={100}
              textAnchor="middle"
              fill={C.accent}
              fontSize={32}
              {...F}
              fontWeight="bold"
            >
              ?
            </text>
          </g>

          {/* Options */}
          <text x={310} y={170} textAnchor="middle" fill={C.dim} fontSize={11} {...F}>
            CHOOSE THE ANSWER
          </text>

          {options.map((opt, i) => {
            const cx = 180 + i * 130
            const isSel = selected === opt
            const isCorrectOpt = selected !== null && opt === correct
            const isWrongOpt = selected === opt && opt !== correct
            let stroke = C.dim,
              fillOp = 0.04
            if (isCorrectOpt) {
              stroke = C.accent
              fillOp = 0.15
            }
            if (isWrongOpt) {
              stroke = C.dim
              fillOp = 0.08
            }

            const dots = triDots(opt)
            const dotSize = 4,
              dGap = 12
            const boxSize = 90
            const patStartY = 195

            return (
              <g
                key={opt}
                onClick={() => {
                  if (!selected) setSelected(opt)
                }}
                style={{ cursor: selected === null ? 'pointer' : 'default' }}
              >
                <rect
                  x={cx - 45}
                  y={patStartY - 10}
                  width={boxSize}
                  height={boxSize}
                  fill={C.fg}
                  fillOpacity={fillOp}
                  stroke={stroke}
                  strokeWidth={isSel ? 2 : 1}
                />
                {dots.map((d, di) => (
                  <circle
                    key={di}
                    cx={cx - 20 + d.x * dGap}
                    cy={patStartY + 6 + d.y * dGap}
                    r={dotSize}
                    fill={isCorrectOpt ? C.accent : C.fg}
                    fillOpacity={0.3}
                    stroke={isCorrectOpt ? C.accent : C.dim}
                    strokeWidth={0.5}
                  />
                ))}
                <text
                  x={cx}
                  y={patStartY + boxSize - 16}
                  textAnchor="middle"
                  fill={isCorrectOpt ? C.accent : isWrongOpt ? C.dim : C.fg}
                  fontSize={16}
                  {...F}
                  fontWeight="bold"
                >
                  {opt}
                </text>
              </g>
            )
          })}

          {/* Result */}
          {selected === correct && (
            <text
              x={310}
              y={340}
              textAnchor="middle"
              fill={C.fg}
              fontSize={14}
              {...F}
              fontWeight="bold"
            >
              CORRECT! TRIANGULAR NUMBERS: 1, 3, 6, 10
            </text>
          )}
          {selected !== null && selected !== correct && (
            <text x={310} y={340} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
              NOT QUITE. LOOK AT THE GROWTH PATTERN.
            </text>
          )}
        </svg>
        <InstructionText C={C}>STUDY THE PATTERN AND SELECT WHAT COMES NEXT</InstructionText>
      </>
    )
  }

  const PUZZLES = [Puzzle1, Puzzle2, Puzzle3]

  function VisualPuzzles({ toolName, onBack }) {
    const C = useVizColors()
    const [puzzleIdx, setPuzzleIdx] = useState(0)
    const [key, setKey] = useState(0)

    const handleReset = () => setKey(k => k + 1)
    const PuzzleComponent = PUZZLES[puzzleIdx]

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Navigation */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12
            }}
          >
            <button
              style={{ ...btnStyle(false, C), opacity: puzzleIdx === 0 ? 0.3 : 1 }}
              disabled={puzzleIdx === 0}
              onClick={() => {
                setPuzzleIdx(p => p - 1)
                setKey(k => k + 1)
              }}
              aria-label="Previous puzzle"
            >
              PREV
            </button>
            <StepIndicator current={puzzleIdx + 1} total={PUZZLES.length} C={C} />
            <button
              style={{ ...btnStyle(false, C), opacity: puzzleIdx === PUZZLES.length - 1 ? 0.3 : 1 }}
              disabled={puzzleIdx === PUZZLES.length - 1}
              onClick={() => {
                setPuzzleIdx(p => p + 1)
                setKey(k => k + 1)
              }}
              aria-label="Next puzzle"
            >
              NEXT
            </button>
          </div>

          <div className="lrn-graph">
            <PuzzleComponent key={key} C={C} />
          </div>
        </div>
      </ToolShell>
    )
  }
  return VisualPuzzles
})()

// ─── animated-concepts ──────────────────────────────────────────────────────
export const AnimatedConcepts = (() => {
  const CONCEPTS = [
    {
      title: 'DOUBLES PLUS ONE',
      maxFrame: 2,
      instruction: 'WATCH HOW 7 + 8 BECOMES A DOUBLES PROBLEM'
    },
    {
      title: 'PARTIAL PRODUCTS',
      maxFrame: 2,
      instruction: 'SEE HOW SPLITTING MAKES MULTIPLICATION EASIER'
    },
    {
      title: 'SQUARE NUMBERS',
      maxFrame: 3,
      instruction: 'EACH SQUARE ADDS AN L-SHAPED LAYER OF DOTS'
    }
  ]

  const DOT_R = 7,
    DOT_GAP = 22

  // Doubles Plus One
  function DoublesAnimation({ frame, C }) {
    const row1 = 7,
      row2 = 8
    const oy = 90,
      ox = 70

    const dotStyle = { transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }

    return (
      <>
        {/* Layer 1: Background regions */}
        <rect
          x={ox - 14}
          y={oy - 14}
          width={row1 * DOT_GAP + 14}
          height={80}
          fill={C.fg}
          fillOpacity={0.04}
        />

        {frame === 0 && (
          <>
            <text x={310} y={46} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
              7 + 8
            </text>
            {Array.from({ length: row1 }, (_, i) => (
              <circle
                key={`a${i}`}
                cx={ox + i * DOT_GAP}
                cy={oy}
                r={DOT_R}
                fill={C.accent}
                fillOpacity={0.3}
                stroke={C.accent}
                strokeWidth={1}
                style={dotStyle}
              />
            ))}
            {Array.from({ length: row2 }, (_, i) => (
              <circle
                key={`b${i}`}
                cx={ox + i * DOT_GAP}
                cy={oy + 44}
                r={DOT_R}
                fill={C.fg}
                fillOpacity={0.3}
                stroke={C.fg}
                strokeWidth={1}
                style={dotStyle}
              />
            ))}
          </>
        )}

        {frame === 1 && (
          <>
            <text x={310} y={46} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
              7 + 7 + 1
            </text>
            {Array.from({ length: 7 }, (_, i) => (
              <circle
                key={`a${i}`}
                cx={ox + i * DOT_GAP}
                cy={oy}
                r={DOT_R}
                fill={C.accent}
                fillOpacity={0.3}
                stroke={C.accent}
                strokeWidth={1}
                style={dotStyle}
              />
            ))}
            {Array.from({ length: 7 }, (_, i) => (
              <circle
                key={`b${i}`}
                cx={ox + i * DOT_GAP}
                cy={oy + 44}
                r={DOT_R}
                fill={C.fg}
                fillOpacity={0.3}
                stroke={C.fg}
                strokeWidth={1}
                style={dotStyle}
              />
            ))}

            {/* Layer 4: DashedConnector bracket pairing rows */}
            <DashedConnector
              x1={ox + 7 * DOT_GAP - 6}
              y1={oy - 14}
              x2={ox + 7 * DOT_GAP - 6}
              y2={oy + 58}
              C={C}
            />

            {/* The +1 dot */}
            <circle
              cx={ox + 7 * DOT_GAP + 16}
              cy={oy + 44}
              r={DOT_R}
              fill={C.accent}
              fillOpacity={0.5}
              stroke={C.accent}
              strokeWidth={1.5}
              style={dotStyle}
            />
            <text
              x={ox + 7 * DOT_GAP + 16}
              y={oy + 74}
              textAnchor="middle"
              fill={C.accent}
              fontSize={11}
              {...F}
            >
              +1
            </text>

            {/* Layer 4: MeasurementBracket for paired section */}
            <MeasurementBracket
              x1={ox - DOT_R}
              x2={ox + 6 * DOT_GAP + DOT_R}
              y={oy + 64}
              label="7 PAIRS"
              C={C}
              direction="below"
              tickH={4}
            />
          </>
        )}

        {frame === 2 && (
          <>
            {/* Color-coded equation */}
            <text
              x={200}
              y={46}
              textAnchor="middle"
              fill={C.accent}
              fontSize={14}
              {...F}
              fontWeight="bold"
            >
              7 + 7
            </text>
            <text x={240} y={46} textAnchor="middle" fill={C.dim} fontSize={14} {...F}>
              =
            </text>
            <text
              x={280}
              y={46}
              textAnchor="middle"
              fill={C.fg}
              fontSize={14}
              {...F}
              fontWeight="bold"
            >
              14
            </text>

            {Array.from({ length: 7 }, (_, i) => (
              <circle
                key={`a${i}`}
                cx={ox + i * DOT_GAP}
                cy={oy}
                r={DOT_R}
                fill={C.accent}
                fillOpacity={0.3}
                stroke={C.accent}
                strokeWidth={1}
                style={dotStyle}
              />
            ))}
            {Array.from({ length: 7 }, (_, i) => (
              <circle
                key={`b${i}`}
                cx={ox + i * DOT_GAP}
                cy={oy + 44}
                r={DOT_R}
                fill={C.fg}
                fillOpacity={0.3}
                stroke={C.fg}
                strokeWidth={1}
                style={dotStyle}
              />
            ))}
            <circle
              cx={ox + 7 * DOT_GAP + 16}
              cy={oy + 44}
              r={DOT_R}
              fill={C.accent}
              fillOpacity={0.5}
              stroke={C.accent}
              strokeWidth={1.5}
              style={dotStyle}
            />

            {/* Layer 6: Bold result */}
            <text
              x={310}
              y={oy + 100}
              textAnchor="middle"
              fill={C.fg}
              fontSize={22}
              {...F}
              fontWeight="bold"
            >
              14 + 1 = 15
            </text>
          </>
        )}
      </>
    )
  }

  // Partial Products
  function PartialAnimation({ frame, C }) {
    const rows = 6,
      cols = 7,
      splitAt = 5
    const ox = 110,
      oy = 66,
      gap = 18
    const gapOffset = 28

    const dotStyle = { transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }

    return (
      <>
        {frame === 0 && (
          <>
            <text x={310} y={40} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
              6 x 7
            </text>
            {/* Layer 1: Background */}
            <rect
              x={ox - 10}
              y={oy - 10}
              width={cols * gap + 10}
              height={rows * gap + 10}
              fill={C.fg}
              fillOpacity={0.04}
            />
            {Array.from({ length: rows }, (_, r) =>
              Array.from({ length: cols }, (_, c) => (
                <circle
                  key={`${r}-${c}`}
                  cx={ox + c * gap}
                  cy={oy + r * gap}
                  r={5}
                  fill={C.accent}
                  fillOpacity={0.3}
                  stroke={C.accent}
                  strokeWidth={0.5}
                  style={dotStyle}
                />
              ))
            )}
            <text
              x={310}
              y={oy + rows * gap + 28}
              textAnchor="middle"
              fill={C.fg}
              fontSize={16}
              {...F}
            >
              = ?
            </text>
          </>
        )}

        {frame >= 1 && (
          <>
            <text x={310} y={40} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
              6 x 5 + 6 x 2
            </text>

            {/* Layer 1: Two partitions with different opacity */}
            <rect
              x={ox - 10}
              y={oy - 10}
              width={splitAt * gap + 6}
              height={rows * gap + 10}
              fill={C.accent}
              fillOpacity={0.06}
            />
            <rect
              x={ox + splitAt * gap + gapOffset - 6}
              y={oy - 10}
              width={(cols - splitAt) * gap + 12}
              height={rows * gap + 10}
              fill={C.fg}
              fillOpacity={0.06}
            />

            {/* Left partition */}
            {Array.from({ length: rows }, (_, r) =>
              Array.from({ length: splitAt }, (_, c) => (
                <circle
                  key={`l${r}-${c}`}
                  cx={ox + c * gap}
                  cy={oy + r * gap}
                  r={5}
                  fill={C.accent}
                  fillOpacity={0.3}
                  stroke={C.accent}
                  strokeWidth={0.5}
                  style={dotStyle}
                />
              ))
            )}
            {/* Right partition */}
            {Array.from({ length: rows }, (_, r) =>
              Array.from({ length: cols - splitAt }, (_, c) => (
                <circle
                  key={`r${r}-${c}`}
                  cx={ox + splitAt * gap + gapOffset + c * gap}
                  cy={oy + r * gap}
                  r={5}
                  fill={C.fg}
                  fillOpacity={0.3}
                  stroke={C.fg}
                  strokeWidth={0.5}
                  style={dotStyle}
                />
              ))
            )}

            {/* Layer 4: DashedConnector separator */}
            <DashedConnector
              x1={ox + splitAt * gap - 5}
              y1={oy - 14}
              x2={ox + splitAt * gap - 5}
              y2={oy + (rows - 1) * gap + 14}
              C={C}
            />

            {/* Layer 4: MeasurementBracket above each section */}
            <MeasurementBracket
              x1={ox}
              x2={ox + (splitAt - 1) * gap}
              y={oy - 20}
              label="5 COLS"
              C={C}
              direction="above"
              tickH={4}
            />
            <MeasurementBracket
              x1={ox + splitAt * gap + gapOffset}
              x2={ox + splitAt * gap + gapOffset + gap}
              y={oy - 20}
              label="2 COLS"
              C={C}
              direction="above"
              tickH={4}
            />

            {frame === 1 && (
              <>
                <text
                  x={ox + (splitAt * gap) / 2}
                  y={oy + rows * gap + 22}
                  textAnchor="middle"
                  fill={C.accent}
                  fontSize={13}
                  {...F}
                >
                  6 x 5
                </text>
                <text
                  x={ox + splitAt * gap + gapOffset + gap / 2}
                  y={oy + rows * gap + 22}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={13}
                  {...F}
                >
                  6 x 2
                </text>
              </>
            )}

            {frame === 2 && (
              <>
                <text
                  x={ox + (splitAt * gap) / 2}
                  y={oy + rows * gap + 22}
                  textAnchor="middle"
                  fill={C.accent}
                  fontSize={14}
                  {...F}
                  fontWeight="bold"
                >
                  30
                </text>
                <text
                  x={310}
                  y={oy + rows * gap + 22}
                  textAnchor="middle"
                  fill={C.dim}
                  fontSize={14}
                  {...F}
                >
                  +
                </text>
                <text
                  x={ox + splitAt * gap + gapOffset + gap / 2}
                  y={oy + rows * gap + 22}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={14}
                  {...F}
                  fontWeight="bold"
                >
                  12
                </text>
                {/* Layer 6: Bold result */}
                <text
                  x={310}
                  y={oy + rows * gap + 52}
                  textAnchor="middle"
                  fill={C.fg}
                  fontSize={22}
                  {...F}
                  fontWeight="bold"
                >
                  30 + 12 = 42
                </text>
              </>
            )}
          </>
        )}
      </>
    )
  }

  // Square Numbers
  function SquareAnimation({ frame, C }) {
    const ox = 190,
      oy = 60,
      gap = 22
    const odds = [1, 3, 5, 7]
    const sums = [1, 4, 9, 16]
    const n = Math.min(frame + 1, 4)

    const dotStyle = { transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }

    return (
      <>
        <text x={310} y={36} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
          {odds.slice(0, n).join(' + ')} = {sums[n - 1]}
        </text>

        {/* Layer 1: Square background */}
        <rect
          x={ox - 12}
          y={oy - 12}
          width={n * gap + 12}
          height={n * gap + 12}
          fill={C.fg}
          fillOpacity={0.04}
        />

        {/* Dots */}
        {Array.from({ length: n }, (_, r) =>
          Array.from({ length: n }, (_, c) => {
            const isNew = (r === n - 1 || c === n - 1) && !(r < n - 1 && c < n - 1)
            return (
              <circle
                key={`${r}-${c}`}
                cx={ox + c * gap}
                cy={oy + r * gap}
                r={7}
                fill={isNew ? C.accent : C.fg}
                fillOpacity={isNew ? 0.4 : 0.25}
                stroke={isNew ? C.accent : C.fg}
                strokeWidth={isNew ? 1.5 : 0.5}
                style={dotStyle}
              />
            )
          })
        )}

        {/* Layer 4: L-shaped bracket for new layer */}
        {n > 1 && (
          <>
            {/* Vertical part of L */}
            <DashedConnector
              x1={ox + (n - 1) * gap + 14}
              y1={oy}
              x2={ox + (n - 1) * gap + 14}
              y2={oy + (n - 1) * gap}
              C={C}
            />
            {/* Horizontal part of L */}
            <DashedConnector
              x1={ox}
              y1={oy + (n - 1) * gap + 14}
              x2={ox + (n - 1) * gap}
              y2={oy + (n - 1) * gap + 14}
              C={C}
            />
            {/* +N label */}
            <text
              x={ox + (n - 1) * gap + 28}
              y={oy + ((n - 1) * gap) / 2 + 4}
              fill={C.accent}
              fontSize={12}
              {...F}
              fontWeight="bold"
            >
              +{odds[n - 1]}
            </text>
          </>
        )}

        {/* Layer 6: Running sum */}
        <text
          x={ox + ((n - 1) * gap) / 2}
          y={oy + n * gap + 26}
          textAnchor="middle"
          fill={C.fg}
          fontSize={18}
          {...F}
          fontWeight="bold"
        >
          {n} x {n} = {n * n}
        </text>
      </>
    )
  }

  const ANIMATIONS = [DoublesAnimation, PartialAnimation, SquareAnimation]

  function AnimatedConcepts({ toolName, onBack }) {
    const C = useVizColors()
    const [conceptIdx, setConceptIdx] = useState(0)
    const [frame, setFrame] = useState(0)
    const [playing, setPlaying] = useState(false)
    const timerRef = useRef(null)

    const concept = CONCEPTS[conceptIdx]
    const AnimComponent = ANIMATIONS[conceptIdx]

    const handleReset = useCallback(() => {
      setFrame(0)
      setPlaying(false)
    }, [])

    useEffect(() => {
      if (playing) {
        timerRef.current = setInterval(() => {
          setFrame(prev => {
            if (prev >= concept.maxFrame) {
              setPlaying(false)
              return prev
            }
            return prev + 1
          })
        }, 1500)
      }
      return () => {
        if (timerRef.current) clearInterval(timerRef.current)
      }
    }, [playing, concept.maxFrame])

    const selectConcept = idx => {
      setConceptIdx(idx)
      setFrame(0)
      setPlaying(false)
    }

    const stepForward = () => {
      if (frame < concept.maxFrame) setFrame(f => f + 1)
    }
    const stepBack = () => {
      if (frame > 0) setFrame(f => f - 1)
    }
    const togglePlay = () => {
      if (frame >= concept.maxFrame) {
        setFrame(0)
        setPlaying(true)
      } else setPlaying(p => !p)
    }

    // Timeline progress
    const progress = frame / (concept.maxFrame || 1)

    return (
      <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
          {/* Concept selector */}
          <div
            style={{
              display: 'flex',
              gap: 6,
              justifyContent: 'center',
              marginBottom: 12,
              flexWrap: 'wrap'
            }}
          >
            {CONCEPTS.map((c, i) => (
              <button
                key={i}
                style={btnStyle(i === conceptIdx, C)}
                onClick={() => selectConcept(i)}
                aria-label={c.title}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Step indicator */}
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <StepIndicator current={frame + 1} total={concept.maxFrame + 1} C={C} />
          </div>

          <div className="lrn-graph">
            <svg viewBox="0 0 620 300" width="100%" style={{ display: 'block' }}>
              {/* Content with transition wrapper */}
              <g style={{ transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                <AnimComponent frame={frame} C={C} />
              </g>

              {/* Playback timeline bar */}
              <rect x={60} y={282} width={500} height={3} fill={C.dim} fillOpacity={0.2} />
              <rect
                x={60}
                y={282}
                width={500 * progress}
                height={3}
                fill={C.fg}
                fillOpacity={0.7}
                style={{ transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              />
              {/* Progress dot */}
              <circle
                cx={60 + 500 * progress}
                cy={283.5}
                r={5}
                fill={C.fg}
                fillOpacity={0.9}
                style={{ transition: 'cx 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              />
            </svg>
          </div>

          {/* Playback controls */}
          <div
            style={{
              display: 'flex',
              gap: 6,
              justifyContent: 'center',
              marginTop: 12,
              flexWrap: 'wrap'
            }}
          >
            <button
              style={{ ...btnStyle(false, C), opacity: frame === 0 ? 0.3 : 1 }}
              onClick={stepBack}
              disabled={frame === 0}
              aria-label="Step back"
            >
              BACK
            </button>
            <button
              style={btnStyle(playing, C)}
              onClick={togglePlay}
              aria-label={playing ? 'Pause' : 'Play'}
            >
              {playing ? 'PAUSE' : 'PLAY'}
            </button>
            <button
              style={{ ...btnStyle(false, C), opacity: frame >= concept.maxFrame ? 0.3 : 1 }}
              onClick={stepForward}
              disabled={frame >= concept.maxFrame}
              aria-label="Step forward"
            >
              NEXT
            </button>
          </div>

          {/* Layer 5 */}
          <InstructionText C={C}>{concept.instruction}</InstructionText>
        </div>
      </ToolShell>
    )
  }
  return AnimatedConcepts
})()
