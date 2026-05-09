import { useState, useEffect, useCallback, useRef } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, btnStyle, F, InstructionText, StepIndicator, MeasurementBracket, DashedConnector } from './shared'

const CONCEPTS = [
  { title: 'DOUBLES PLUS ONE', maxFrame: 2, instruction: 'WATCH HOW 7 + 8 BECOMES A DOUBLES PROBLEM' },
  { title: 'PARTIAL PRODUCTS', maxFrame: 2, instruction: 'SEE HOW SPLITTING MAKES MULTIPLICATION EASIER' },
  { title: 'SQUARE NUMBERS', maxFrame: 3, instruction: 'EACH SQUARE ADDS AN L-SHAPED LAYER OF DOTS' }
]

const DOT_R = 7, DOT_GAP = 22

// Doubles Plus One
function DoublesAnimation({ frame, C }) {
  const row1 = 7, row2 = 8
  const oy = 90, ox = 70

  const dotStyle = { transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }

  return (
    <>
      {/* Layer 1: Background regions */}
      <rect x={ox - 14} y={oy - 14} width={row1 * DOT_GAP + 14} height={80}
        fill={C.fg} fillOpacity={0.04} />

      {frame === 0 && (
        <>
          <text x={310} y={46} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>7 + 8</text>
          {Array.from({ length: row1 }, (_, i) => (
            <circle key={`a${i}`} cx={ox + i * DOT_GAP} cy={oy} r={DOT_R}
              fill={C.accent} fillOpacity={0.3} stroke={C.accent} strokeWidth={1} style={dotStyle} />
          ))}
          {Array.from({ length: row2 }, (_, i) => (
            <circle key={`b${i}`} cx={ox + i * DOT_GAP} cy={oy + 44} r={DOT_R}
              fill={C.fg} fillOpacity={0.3} stroke={C.fg} strokeWidth={1} style={dotStyle} />
          ))}
        </>
      )}

      {frame === 1 && (
        <>
          <text x={310} y={46} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>7 + 7 + 1</text>
          {Array.from({ length: 7 }, (_, i) => (
            <circle key={`a${i}`} cx={ox + i * DOT_GAP} cy={oy} r={DOT_R}
              fill={C.accent} fillOpacity={0.3} stroke={C.accent} strokeWidth={1} style={dotStyle} />
          ))}
          {Array.from({ length: 7 }, (_, i) => (
            <circle key={`b${i}`} cx={ox + i * DOT_GAP} cy={oy + 44} r={DOT_R}
              fill={C.fg} fillOpacity={0.3} stroke={C.fg} strokeWidth={1} style={dotStyle} />
          ))}

          {/* Layer 4: DashedConnector bracket pairing rows */}
          <DashedConnector x1={ox + 7 * DOT_GAP - 6} y1={oy - 14}
            x2={ox + 7 * DOT_GAP - 6} y2={oy + 58} C={C} />

          {/* The +1 dot */}
          <circle cx={ox + 7 * DOT_GAP + 16} cy={oy + 44} r={DOT_R}
            fill={C.accent} fillOpacity={0.5} stroke={C.accent} strokeWidth={1.5} style={dotStyle} />
          <text x={ox + 7 * DOT_GAP + 16} y={oy + 74} textAnchor="middle"
            fill={C.accent} fontSize={11} {...F}>+1</text>

          {/* Layer 4: MeasurementBracket for paired section */}
          <MeasurementBracket x1={ox - DOT_R} x2={ox + 6 * DOT_GAP + DOT_R}
            y={oy + 64} label="7 PAIRS" C={C} direction="below" tickH={4} />
        </>
      )}

      {frame === 2 && (
        <>
          {/* Color-coded equation */}
          <text x={200} y={46} textAnchor="middle" fill={C.accent} fontSize={14} {...F} fontWeight="bold">7 + 7</text>
          <text x={240} y={46} textAnchor="middle" fill={C.dim} fontSize={14} {...F}>=</text>
          <text x={280} y={46} textAnchor="middle" fill={C.fg} fontSize={14} {...F} fontWeight="bold">14</text>

          {Array.from({ length: 7 }, (_, i) => (
            <circle key={`a${i}`} cx={ox + i * DOT_GAP} cy={oy} r={DOT_R}
              fill={C.accent} fillOpacity={0.3} stroke={C.accent} strokeWidth={1} style={dotStyle} />
          ))}
          {Array.from({ length: 7 }, (_, i) => (
            <circle key={`b${i}`} cx={ox + i * DOT_GAP} cy={oy + 44} r={DOT_R}
              fill={C.fg} fillOpacity={0.3} stroke={C.fg} strokeWidth={1} style={dotStyle} />
          ))}
          <circle cx={ox + 7 * DOT_GAP + 16} cy={oy + 44} r={DOT_R}
            fill={C.accent} fillOpacity={0.5} stroke={C.accent} strokeWidth={1.5} style={dotStyle} />

          {/* Layer 6: Bold result */}
          <text x={310} y={oy + 100} textAnchor="middle"
            fill={C.fg} fontSize={22} {...F} fontWeight="bold">
            14 + 1 = 15
          </text>
        </>
      )}
    </>
  )
}

// Partial Products
function PartialAnimation({ frame, C }) {
  const rows = 6, cols = 7, splitAt = 5
  const ox = 110, oy = 66, gap = 18
  const gapOffset = 28

  const dotStyle = { transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }

  return (
    <>
      {frame === 0 && (
        <>
          <text x={310} y={40} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>6 x 7</text>
          {/* Layer 1: Background */}
          <rect x={ox - 10} y={oy - 10} width={cols * gap + 10} height={rows * gap + 10}
            fill={C.fg} fillOpacity={0.04} />
          {Array.from({ length: rows }, (_, r) =>
            Array.from({ length: cols }, (_, c) => (
              <circle key={`${r}-${c}`} cx={ox + c * gap} cy={oy + r * gap} r={5}
                fill={C.accent} fillOpacity={0.3} stroke={C.accent} strokeWidth={0.5} style={dotStyle} />
            ))
          )}
          <text x={310} y={oy + rows * gap + 28} textAnchor="middle" fill={C.fg} fontSize={16} {...F}>= ?</text>
        </>
      )}

      {frame >= 1 && (
        <>
          <text x={310} y={40} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
            6 x 5 + 6 x 2
          </text>

          {/* Layer 1: Two partitions with different opacity */}
          <rect x={ox - 10} y={oy - 10} width={splitAt * gap + 6} height={rows * gap + 10}
            fill={C.accent} fillOpacity={0.06} />
          <rect x={ox + splitAt * gap + gapOffset - 6} y={oy - 10}
            width={(cols - splitAt) * gap + 12} height={rows * gap + 10}
            fill={C.fg} fillOpacity={0.06} />

          {/* Left partition */}
          {Array.from({ length: rows }, (_, r) =>
            Array.from({ length: splitAt }, (_, c) => (
              <circle key={`l${r}-${c}`} cx={ox + c * gap} cy={oy + r * gap} r={5}
                fill={C.accent} fillOpacity={0.3} stroke={C.accent} strokeWidth={0.5} style={dotStyle} />
            ))
          )}
          {/* Right partition */}
          {Array.from({ length: rows }, (_, r) =>
            Array.from({ length: cols - splitAt }, (_, c) => (
              <circle key={`r${r}-${c}`} cx={ox + splitAt * gap + gapOffset + c * gap} cy={oy + r * gap} r={5}
                fill={C.fg} fillOpacity={0.3} stroke={C.fg} strokeWidth={0.5} style={dotStyle} />
            ))
          )}

          {/* Layer 4: DashedConnector separator */}
          <DashedConnector x1={ox + splitAt * gap - 5} y1={oy - 14}
            x2={ox + splitAt * gap - 5} y2={oy + (rows - 1) * gap + 14} C={C} />

          {/* Layer 4: MeasurementBracket above each section */}
          <MeasurementBracket x1={ox} x2={ox + (splitAt - 1) * gap}
            y={oy - 20} label="5 COLS" C={C} direction="above" tickH={4} />
          <MeasurementBracket x1={ox + splitAt * gap + gapOffset} x2={ox + splitAt * gap + gapOffset + gap}
            y={oy - 20} label="2 COLS" C={C} direction="above" tickH={4} />

          {frame === 1 && (
            <>
              <text x={ox + (splitAt * gap) / 2} y={oy + rows * gap + 22} textAnchor="middle"
                fill={C.accent} fontSize={13} {...F}>6 x 5</text>
              <text x={ox + splitAt * gap + gapOffset + gap / 2} y={oy + rows * gap + 22} textAnchor="middle"
                fill={C.fg} fontSize={13} {...F}>6 x 2</text>
            </>
          )}

          {frame === 2 && (
            <>
              <text x={ox + (splitAt * gap) / 2} y={oy + rows * gap + 22} textAnchor="middle"
                fill={C.accent} fontSize={14} {...F} fontWeight="bold">30</text>
              <text x={310} y={oy + rows * gap + 22} textAnchor="middle" fill={C.dim} fontSize={14} {...F}>+</text>
              <text x={ox + splitAt * gap + gapOffset + gap / 2} y={oy + rows * gap + 22} textAnchor="middle"
                fill={C.fg} fontSize={14} {...F} fontWeight="bold">12</text>
              {/* Layer 6: Bold result */}
              <text x={310} y={oy + rows * gap + 52} textAnchor="middle"
                fill={C.fg} fontSize={22} {...F} fontWeight="bold">
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
  const ox = 190, oy = 60, gap = 22
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
      <rect x={ox - 12} y={oy - 12} width={n * gap + 12} height={n * gap + 12}
        fill={C.fg} fillOpacity={0.04} />

      {/* Dots */}
      {Array.from({ length: n }, (_, r) =>
        Array.from({ length: n }, (_, c) => {
          const isNew = (r === n - 1 || c === n - 1) && !(r < n - 1 && c < n - 1)
          return (
            <circle key={`${r}-${c}`}
              cx={ox + c * gap} cy={oy + r * gap} r={7}
              fill={isNew ? C.accent : C.fg}
              fillOpacity={isNew ? 0.4 : 0.25}
              stroke={isNew ? C.accent : C.fg}
              strokeWidth={isNew ? 1.5 : 0.5}
              style={dotStyle} />
          )
        })
      )}

      {/* Layer 4: L-shaped bracket for new layer */}
      {n > 1 && (
        <>
          {/* Vertical part of L */}
          <DashedConnector
            x1={ox + (n - 1) * gap + 14} y1={oy}
            x2={ox + (n - 1) * gap + 14} y2={oy + (n - 1) * gap} C={C} />
          {/* Horizontal part of L */}
          <DashedConnector
            x1={ox} y1={oy + (n - 1) * gap + 14}
            x2={ox + (n - 1) * gap} y2={oy + (n - 1) * gap + 14} C={C} />
          {/* +N label */}
          <text x={ox + (n - 1) * gap + 28} y={oy + (n - 1) * gap / 2 + 4}
            fill={C.accent} fontSize={12} {...F} fontWeight="bold">
            +{odds[n - 1]}
          </text>
        </>
      )}

      {/* Layer 6: Running sum */}
      <text x={ox + (n - 1) * gap / 2} y={oy + n * gap + 26} textAnchor="middle"
        fill={C.fg} fontSize={18} {...F} fontWeight="bold">
        {n} x {n} = {n * n}
      </text>
    </>
  )
}

const ANIMATIONS = [DoublesAnimation, PartialAnimation, SquareAnimation]

export default function AnimatedConcepts({ toolName, onBack }) {
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
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [playing, concept.maxFrame])

  const selectConcept = idx => {
    setConceptIdx(idx)
    setFrame(0)
    setPlaying(false)
  }

  const stepForward = () => { if (frame < concept.maxFrame) setFrame(f => f + 1) }
  const stepBack = () => { if (frame > 0) setFrame(f => f - 1) }
  const togglePlay = () => {
    if (frame >= concept.maxFrame) { setFrame(0); setPlaying(true) }
    else setPlaying(p => !p)
  }

  // Timeline progress
  const progress = (frame) / (concept.maxFrame || 1)

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Concept selector */}
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
          {CONCEPTS.map((c, i) => (
            <button key={i} style={btnStyle(i === conceptIdx, C)} onClick={() => selectConcept(i)}
              aria-label={c.title}>{c.title}</button>
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
            <rect x={60} y={282} width={500} height={3}
              fill={C.dim} fillOpacity={0.2} />
            <rect x={60} y={282} width={500 * progress} height={3}
              fill={C.fg} fillOpacity={0.7}
              style={{ transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} />
            {/* Progress dot */}
            <circle cx={60 + 500 * progress} cy={283.5} r={5}
              fill={C.fg} fillOpacity={0.9}
              style={{ transition: 'cx 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} />
          </svg>
        </div>

        {/* Playback controls */}
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 12, flexWrap: 'wrap' }}>
          <button style={{ ...btnStyle(false, C), opacity: frame === 0 ? 0.3 : 1 }}
            onClick={stepBack} disabled={frame === 0}
            aria-label="Step back">BACK</button>
          <button style={btnStyle(playing, C)} onClick={togglePlay}
            aria-label={playing ? 'Pause' : 'Play'}>{playing ? 'PAUSE' : 'PLAY'}</button>
          <button style={{ ...btnStyle(false, C), opacity: frame >= concept.maxFrame ? 0.3 : 1 }}
            onClick={stepForward} disabled={frame >= concept.maxFrame}
            aria-label="Step forward">NEXT</button>
        </div>

        {/* Layer 5 */}
        <InstructionText C={C}>{concept.instruction}</InstructionText>
      </div>
    </ToolShell>
  )
}
