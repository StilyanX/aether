import { useState, useMemo } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, btnStyle, F, NumberInput, InstructionText, isPrime as checkPrime } from './shared'

function buildTree(n) {
  if (n < 2) return { value: n, isPrime: false }
  if (checkPrime(n)) return { value: n, isPrime: true }
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) return { value: n, isPrime: false, left: buildTree(d), right: buildTree(n / d) }
  }
  return { value: n, isPrime: true }
}

function getDepth(node) {
  if (!node || node.isPrime) return 0
  return 1 + Math.max(getDepth(node.left), getDepth(node.right))
}

function collectPrimes(node, out = []) {
  if (!node) return out
  if (node.isPrime) { out.push(node.value); return out }
  collectPrimes(node.left, out)
  collectPrimes(node.right, out)
  return out
}

function TreeNode({ node, cx, cy, spread, C }) {
  if (!node) return null
  const r = 22, dy = 64
  const childY = cy + dy
  const leftX = cx - spread
  const rightX = cx + spread
  const childSpread = Math.max(spread * 0.5, 24)

  return (
    <g>
      {!node.isPrime && node.left && (
        <>
          <line x1={cx} y1={cy + r} x2={leftX} y2={childY - r}
            stroke={C.dim} strokeWidth={1} strokeDasharray="4 4" />
          <TreeNode node={node.left} cx={leftX} cy={childY} spread={childSpread} C={C} />
        </>
      )}
      {!node.isPrime && node.right && (
        <>
          <line x1={cx} y1={cy + r} x2={rightX} y2={childY - r}
            stroke={C.dim} strokeWidth={1} strokeDasharray="4 4" />
          <TreeNode node={node.right} cx={rightX} cy={childY} spread={childSpread} C={C} />
        </>
      )}
      {/* Layer 1/3: Node fill */}
      <circle cx={cx} cy={cy} r={r}
        fill={node.isPrime ? C.accent : C.faint}
        fillOpacity={node.isPrime ? 0.2 : 0.06} />
      {/* Layer 2: Node border */}
      <circle cx={cx} cy={cy} r={r}
        fill="none"
        stroke={node.isPrime ? C.fg : C.dim}
        strokeWidth={node.isPrime ? 1.5 : 1} />
      {/* Layer 3: Value */}
      <text x={cx} y={cy + 5} textAnchor="middle"
        fill={C.fg} fontSize={14} fontWeight={node.isPrime ? 'bold' : 'normal'} {...F}>
        {node.value}
      </text>
      {/* PRIME label below prime leaves */}
      {node.isPrime && (
        <text x={cx} y={cy + r + 12} textAnchor="middle"
          fill={C.dim} fontSize={9} {...F} letterSpacing="0.06em">
          PRIME
        </text>
      )}
    </g>
  )
}

export default function FactorTree({ toolName, onBack }) {
  const C = useVizColors()
  const [inputNum, setInputNum] = useState(60)
  const [tree, setTree] = useState(null)

  const handleBuild = () => setTree(buildTree(inputNum))
  const handleReset = () => setTree(null)

  const depth = tree ? getDepth(tree) : 0
  const primes = useMemo(() => tree ? collectPrimes(tree) : [], [tree])
  const svgH = tree ? Math.max(200, 80 + (depth + 1) * 64 + 60) : 200
  const spread = Math.min(200, 60 + depth * 30)

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, justifyContent: 'center' }}>
          <NumberInput value={inputNum} onChange={setInputNum} min={2} max={999} C={C} width={70} label="Number to factor" />
          <button style={btnStyle(true, C)} onClick={handleBuild}>BUILD TREE</button>
          {tree && <button style={btnStyle(false, C)} onClick={handleReset}>CLEAR</button>}
        </div>

        {tree && (
          <div className="lrn-graph">
            <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
              {/* Layer 1: Subtle background gradient hint */}
              <rect x={0} y={0} width={620} height={svgH}
                fill={C.faint} fillOpacity={0.02} />

              <TreeNode node={tree} cx={310} cy={50} spread={spread} C={C} />

              {/* Layer 6: Prime factorization result */}
              {primes.length > 1 && (
                <text x={310} y={svgH - 14} textAnchor="middle"
                  fill={C.fg} fontSize={16} fontWeight="bold" {...F}>
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
