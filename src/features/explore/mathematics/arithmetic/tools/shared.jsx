import { useRef, useCallback } from 'react'
export { useVizColors } from '../../../../../hooks/use-viz-colors'

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

// SVG: Measurement Bracket (Layer 4)
export const MeasurementBracket = ({ x1, x2, y, label, C, direction = 'below', tickH = 6 }) => {
  const ty = direction === 'below' ? y + tickH + 14 : y - tickH - 6
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={C.dim} strokeWidth={1} />
      <line x1={x1} y1={y - tickH / 2} x2={x1} y2={y + tickH / 2} stroke={C.dim} strokeWidth={1} />
      <line x1={x2} y1={y - tickH / 2} x2={x2} y2={y + tickH / 2} stroke={C.dim} strokeWidth={1} />
      {label && (
        <text x={(x1 + x2) / 2} y={ty} textAnchor="middle" fill={C.dim} fontSize={11} {...F}>
          {label}
        </text>
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
