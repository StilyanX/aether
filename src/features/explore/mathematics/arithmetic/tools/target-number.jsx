import { useState, useCallback } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, btnStyle, F, InstructionText } from './shared'

function randInt(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)) }

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
      if (acc === null) { acc = t.value }
      else if (op) {
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

export default function TargetNumber({ toolName, onBack }) {
  const C = useVizColors()
  const [state, setState] = useState(genPuzzle)

  const handleReset = () => setState(genPuzzle())

  const { available, target, expression, usedIndices, result } = state

  const addNumber = useCallback((idx) => {
    setState(prev => {
      if (prev.usedIndices.has(idx)) return prev
      if (prev.result !== null) return prev
      const last = prev.expression[prev.expression.length - 1]
      if (last && last.type === 'num') return prev
      const newUsed = new Set(prev.usedIndices)
      newUsed.add(idx)
      return { ...prev, expression: [...prev.expression, { type: 'num', value: prev.available[idx], idx }], usedIndices: newUsed }
    })
  }, [])

  const addOp = useCallback((op) => {
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

  const exprStr = expression.map(t => t.type === 'num' ? t.value : ` ${t.value} `).join('')
  const isMatch = result !== null && Math.abs(result - target) < 0.001

  // Proximity feedback: how close is partial/result to target
  const liveVal = result !== null ? result : evaluate(expression)
  const proximity = liveVal !== null && target > 0
    ? Math.max(0, 1 - Math.abs(liveVal - target) / target)
    : 0

  const CARD_W = 70, CARD_H = 70, CARD_GAP = 12
  const totalW = available.length * CARD_W + (available.length - 1) * CARD_GAP
  const startX = (620 - totalW) / 2

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <div className="lrn-graph">
          <svg viewBox="0 0 620 400" width="100%" style={{ display: 'block' }}>
            {/* Layer 1: background zones */}
            <rect x={40} y={10} width={540} height={80}
              fill={C.fg} fillOpacity={0.04} />
            <rect x={40} y={94} width={540} height={86}
              fill={C.fg} fillOpacity={0.08} />
            <rect x={40} y={184} width={540} height={80}
              fill={C.fg} fillOpacity={0.04} />

            {/* Layer 2: target label */}
            <text x={310} y={32} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>TARGET</text>

            {/* Layer 3: target number with proximity-based opacity */}
            <text x={310} y={72} textAnchor="middle"
              fill={C.accent} fontSize={36} {...F} fontWeight="bold"
              opacity={0.4 + proximity * 0.6}>
              {target}
            </text>

            {/* Layer 3: available number cards */}
            {available.map((n, i) => {
              const x = startX + i * (CARD_W + CARD_GAP)
              const used = usedIndices.has(i)
              return (
                <g key={i} onClick={() => addNumber(i)} style={{ cursor: used ? 'default' : 'pointer' }}>
                  {/* Layer 1: alternating card fill */}
                  <rect x={x} y={100} width={CARD_W} height={CARD_H}
                    fill={C.fg} fillOpacity={used ? 0.02 : (i % 2 === 0 ? 0.04 : 0.08)} />
                  {/* Layer 2: card border */}
                  <rect x={x} y={100} width={CARD_W} height={CARD_H}
                    fill="none" stroke={used ? C.faint : C.dim} strokeWidth={1} />
                  {/* Layer 3: number */}
                  <text x={x + CARD_W / 2} y={143} textAnchor="middle"
                    fill={used ? C.faint : C.fg} fontSize={24} {...F} fontWeight="bold">{n}</text>
                  {/* Checkmark overlay on used cards */}
                  {used && (
                    <text x={x + CARD_W - 12} y={116} textAnchor="middle"
                      fill={C.dim} fontSize={14} {...F}>
                      &#10003;
                    </text>
                  )}
                </g>
              )
            })}

            {/* Layer 2: expression area (taller: 70px) */}
            <rect x={40} y={196} width={540} height={70}
              fill="none" stroke={C.dim} strokeWidth={1} />

            {/* Layer 3: expression text */}
            <text x={310} y={238} textAnchor="middle"
              fill={expression.length ? C.fg : C.faint} fontSize={20} {...F}>
              {expression.length ? exprStr : 'BUILD YOUR EXPRESSION'}
            </text>

            {/* Layer 6: bold result */}
            {result !== null && (
              <>
                <text x={310} y={300} textAnchor="middle"
                  fill={C.fg} fontSize={isMatch ? 20 : 14} {...F} fontWeight={isMatch ? 'bold' : 'normal'}>
                  = {Number.isInteger(result) ? result : result.toFixed(2)}
                </text>
                <text x={310} y={334} textAnchor="middle"
                  fill={isMatch ? C.accent : C.dim} fontSize={isMatch ? 20 : 16} {...F} fontWeight="bold">
                  {isMatch ? 'EXACT MATCH!' : `OFF BY ${Math.abs(result - target).toFixed(Number.isInteger(result - target) ? 0 : 2)}`}
                </text>
              </>
            )}
          </svg>
        </div>

        {/* Operation buttons */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12, flexWrap: 'wrap' }}>
          {OPS.map(op => (
            <button key={op} style={btnStyle(false, C)} onClick={() => addOp(op)} aria-label={`Operation ${op}`}>
              {op}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8, flexWrap: 'wrap' }}>
          <button style={btnStyle(false, C)} onClick={doEvaluate} aria-label="Evaluate expression">EVALUATE</button>
          <button style={btnStyle(false, C)} onClick={clearExpression} aria-label="Clear expression">CLEAR EXPRESSION</button>
          <button style={btnStyle(false, C)} onClick={handleReset} aria-label="New puzzle">NEW PUZZLE</button>
        </div>

        {/* Layer 5 */}
        <InstructionText C={C}>BUILD AN EXPRESSION TO HIT THE TARGET</InstructionText>
      </div>
    </ToolShell>
  )
}
