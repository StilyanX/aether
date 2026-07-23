// Information-theory viz (Shannon, "A Mathematical Theory of Communication").
// Leaf exports only — each is wrapped in a <VizFigure> in index.jsx, the same
// pattern as algebra.jsx / arithmetic.jsx. Monochrome primitives, theme-aware
// via currentColor (FG) and the --bg / --text-primary tokens.
import { Plot, Axes, Parametric, Polyline, Dot, Arrow, Tex, Canvas, OPACITY } from './primitives'
import { FONT_TINY, FONT_SMALL, FONT_TEX, STROKE_PRIMARY, STROKE_SECONDARY } from './scale-tokens'

const log2 = x => Math.log(x) / Math.LN2
const Hbin = p => (p <= 0 || p >= 1 ? 0 : -(p * log2(p) + (1 - p) * log2(1 - p)))
const TWO_PI_E = 2 * Math.PI * Math.E
const hGauss = s => 0.5 * log2(TWO_PI_E * s * s)
const rateD = d => (d >= 1 ? 0 : 0.5 * log2(1 / d))

// Shared diagram helpers (screen-coordinate SVG inside <Canvas>)

// Uppercase annotation text.
function T({ x, y, children, size = FONT_TINY, op = 0.55, anchor = 'middle', upper = true }) {
  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      opacity={op}
      fontSize={size}
      textAnchor={anchor}
      letterSpacing="0.08em"
      style={upper ? { textTransform: 'uppercase' } : undefined}
    >
      {children}
    </text>
  )
}

// Small filled arrowhead pointing along `angle` (radians, SVG y-down).
function Ahead({ x, y, angle, size = 7, op = 0.7 }) {
  const s = 0.42
  const p2 = [x - size * Math.cos(angle - s), y - size * Math.sin(angle - s)]
  const p3 = [x - size * Math.cos(angle + s), y - size * Math.sin(angle + s)]
  return (
    <path
      d={`M ${x} ${y} L ${p2[0]} ${p2[1]} L ${p3[0]} ${p3[1]} Z`}
      fill="currentColor"
      opacity={op}
    />
  )
}

// Labelled box (engineering-drawing hairline rect over the page background).
function Box({ x, y, w, h, lines }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="var(--bg)"
        stroke="currentColor"
        strokeOpacity={0.6}
        strokeWidth={STROKE_SECONDARY}
      />
      {lines.map((ln, i) => (
        <T key={i} x={x + w / 2} y={y + h / 2 + (i - (lines.length - 1) / 2) * 13 + 4} op={0.85}>
          {ln}
        </T>
      ))}
    </g>
  )
}

// Circle node with a centred label.
function NodeCircle({ cx, cy, r = 24, label }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="var(--bg)"
        stroke="currentColor"
        strokeOpacity={0.7}
        strokeWidth={STROKE_SECONDARY}
      />
      <T x={cx} y={cy + 5} op={0.9} size={FONT_TEX}>
        {label}
      </T>
    </g>
  )
}

// TIER 1 · MAFS-STYLE PLOTS

// Binary entropy H(p), peaking at 1 bit when p = 1/2.
export function BinaryEntropyViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.1, 1.18]} yRange={[-0.2, 1.3]} width={520} height={430} pad={26}>
        <Axes step={0.25} />
        <Polyline
          points={[
            [0.5, 0],
            [0.5, 1]
          ]}
          dash="3 5"
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 1],
            [0.5, 1]
          ]}
          dash="3 5"
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <Parametric
          xy={t => [t, Hbin(t)]}
          t={[0.0006, 0.9994]}
          samples={400}
          strokeWidth={STROKE_PRIMARY}
          opacity={OPACITY.fg}
        />
        <Dot x={0} y={0} r={3.5} opacity={OPACITY.dim} />
        <Dot x={1} y={0} r={3.5} opacity={OPACITY.dim} />
        <Dot x={0.5} y={1} r={4.5} opacity={OPACITY.accent} />
        <Tex
          at={[0.5, 1.13]}
          tex={'1\\ \\text{bit}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0.5, -0.07]}
          tex={'p=\\tfrac12'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex at={[1.08, -0.02]} tex={'p'} anchor="start" size={FONT_TEX} opacity={OPACITY.dim} />
        <Tex
          at={[0.01, 1.27]}
          tex={'H(p)\\,[\\text{bits}]'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

// Shannon–Hartley: spectral efficiency C/B = log2(1 + S/N).
export function ShannonHartleyViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1, 16.5]} yRange={[-0.5, 4.7]} width={560} height={380} pad={26}>
        <Axes step={2} />
        <Parametric
          xy={t => [t, log2(1 + t)]}
          t={[0, 16]}
          samples={300}
          strokeWidth={STROKE_PRIMARY}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [15, 0],
            [15, 4]
          ]}
          dash="3 5"
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <Dot x={15} y={4} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[15, 4.28]}
          tex={'\\tfrac{S}{N}=15\\Rightarrow 4\\ \\text{bits}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex at={[16.4, -0.05]} tex={'S/N'} anchor="end" size={FONT_TEX} opacity={OPACITY.dim} />
        <Tex
          at={[0.1, 4.6]}
          tex={'C/B\\,[\\text{bits/s/Hz}]'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[6.5, 1.0]}
          tex={'C = B\\log_2\\!\\left(1+\\tfrac{S}{N}\\right)'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// Differential entropy of a Gaussian: h = ½ log2(2πe σ²).
export function GaussianEntropyViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.2, 3.2]} yRange={[-2.5, 3.8]} width={540} height={400} pad={26}>
        <Axes step={1} />
        <Parametric
          xy={t => [t, hGauss(t)]}
          t={[0.06, 3.1]}
          samples={300}
          strokeWidth={STROKE_PRIMARY}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [2, 0],
            [2, hGauss(2)]
          ]}
          dash="3 5"
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <Dot x={2} y={hGauss(2)} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[2, hGauss(2) + 0.22]}
          tex={'\\sigma=2:\\ \\approx 3.05\\ \\text{bits}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[3.12, -0.02]}
          tex={'\\sigma'}
          anchor="end"
          size={FONT_TEX}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0.05, 3.7]}
          tex={'h(\\sigma)\\,[\\text{bits}]'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[1.55, -1.5]}
          tex={'h=\\tfrac12\\log_2(2\\pi e\\,\\sigma^2)'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// Rate–distortion for a Gaussian source (σ² = 1): R(D) = ½ log2(σ²/D).
export function RateDistortionViz() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.08, 1.25]} yRange={[-0.35, 3.1]} width={540} height={400} pad={26}>
        <Axes step={0.5} />
        <Parametric
          xy={t => [t, rateD(t)]}
          t={[0.06, 1]}
          samples={300}
          strokeWidth={STROKE_PRIMARY}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [1, 0],
            [1.22, 0]
          ]}
          strokeWidth={STROKE_PRIMARY}
          opacity={OPACITY.fg}
        />
        <Dot x={1} y={0} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[1.0, 0.22]}
          tex={'D=\\sigma^2\\Rightarrow R=0'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex at={[1.2, -0.05]} tex={'D'} anchor="end" size={FONT_TEX} opacity={OPACITY.dim} />
        <Tex
          at={[0.05, 3.0]}
          tex={'R(D)\\,[\\text{bits}]'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0.63, 1.75]}
          tex={'R(D)=\\tfrac12\\log_2\\dfrac{\\sigma^2}{D}'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
    </div>
  )
}

// TIER 2 · SCHEMATICS

// Shannon's five-component communication system.
export function CommunicationSystemViz() {
  const cy = 122
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={980} h={360}>
        <Box x={20} y={cy - 32} w={150} h={64} lines={['Information', 'Source']} />
        <Box x={225} y={cy - 32} w={150} h={64} lines={['Transmitter']} />
        <Box x={590} y={cy - 32} w={150} h={64} lines={['Receiver']} />
        <Box x={795} y={cy - 32} w={150} h={64} lines={['Destination']} />
        <Box x={407} y={250} w={150} h={54} lines={['Noise Source']} />

        <Arrow from={[170, cy]} to={[225, cy]} opacity={OPACITY.dim} />
        <Arrow from={[375, cy]} to={[590, cy]} opacity={OPACITY.dim} />
        <Arrow from={[740, cy]} to={[795, cy]} opacity={OPACITY.dim} />
        <Arrow from={[482, 250]} to={[482, cy + 34]} opacity={OPACITY.dim} />

        <T x={197} y={cy - 12}>
          Message
        </T>
        <T x={430} y={cy - 12}>
          Signal
        </T>
        <T x={548} y={cy - 12}>
          Received Signal
        </T>
        <T x={767} y={cy - 12}>
          Message
        </T>
        <T x={482} y={cy + 62} op={0.7}>
          Channel
        </T>
      </Canvas>
    </div>
  )
}

// Two-state Markov source (worked example: A, B).
export function TwoStateMarkovViz() {
  const A = { cx: 165, cy: 185, r: 46 }
  const B = { cx: 475, cy: 185, r: 46 }
  const selfLoop = (cx, top) =>
    `M ${cx - 20} ${top} C ${cx - 48} ${top - 66}, ${cx + 48} ${top - 66}, ${cx + 20} ${top}`
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={640} h={360}>
        {/* self transitions */}
        <path
          d={selfLoop(A.cx, A.cy - A.r)}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.55}
          strokeWidth={STROKE_SECONDARY}
        />
        <Ahead x={A.cx + 20} y={A.cy - A.r} angle={2.1} />
        <T x={A.cx} y={A.cy - A.r - 52} op={0.7} size={FONT_SMALL}>
          0.8
        </T>
        <path
          d={selfLoop(B.cx, B.cy - B.r)}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.55}
          strokeWidth={STROKE_SECONDARY}
        />
        <Ahead x={B.cx + 20} y={B.cy - B.r} angle={2.1} />
        <T x={B.cx} y={B.cy - B.r - 52} op={0.7} size={FONT_SMALL}>
          0.5
        </T>

        {/* cross transitions */}
        <Arrow
          from={[A.cx + A.r - 2, A.cy - 20]}
          to={[B.cx - A.r + 2, B.cy - 20]}
          opacity={OPACITY.dim}
        />
        <T x={320} y={A.cy - 30} op={0.7} size={FONT_SMALL}>
          0.2
        </T>
        <Arrow
          from={[B.cx - A.r + 2, B.cy + 20]}
          to={[A.cx + A.r - 2, A.cy + 20]}
          opacity={OPACITY.dim}
        />
        <T x={320} y={A.cy + 42} op={0.7} size={FONT_SMALL}>
          0.5
        </T>

        <NodeCircle cx={A.cx} cy={A.cy} r={A.r} label="A" />
        <NodeCircle cx={B.cx} cy={B.cy} r={B.r} label="B" />
        <T x={A.cx} y={A.cy + A.r + 26} op={0.6} size={FONT_SMALL}>
          P(A) ≈ 0.714
        </T>
        <T x={B.cx} y={B.cy + B.r + 26} op={0.6} size={FONT_SMALL}>
          P(B) ≈ 0.286
        </T>
      </Canvas>
    </div>
  )
}

// Prefix-code tree for the A,B,C,D Shannon–Fano example.
export function ShannonFanoTreeViz() {
  const R = { x: 150, y: 46 }
  const n1 = { x: 270, y: 150 }
  const n2 = { x: 380, y: 254 }
  const edge = (a, b) => (
    <line
      x1={a.x}
      y1={a.y}
      x2={b.x}
      y2={b.y}
      stroke="currentColor"
      strokeOpacity={0.5}
      strokeWidth={STROKE_SECONDARY}
    />
  )
  const bit = (a, b, v, dx = -10) => (
    <T x={(a.x + b.x) / 2 + dx} y={(a.y + b.y) / 2} op={0.75} size={FONT_SMALL}>
      {v}
    </T>
  )
  const dot = n => <circle cx={n.x} cy={n.y} r={4} fill="currentColor" opacity={0.7} />
  const leaf = (cx, cy, sym, code, prob) => (
    <g>
      <Box x={cx - 34} y={cy - 26} w={68} h={52} lines={[sym, code, prob]} />
    </g>
  )
  const A = { x: 70, y: 150 }
  const B = { x: 200, y: 254 }
  const C = { x: 310, y: 358 }
  const D = { x: 470, y: 358 }
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={600} h={420}>
        {edge(R, A)}
        {edge(R, n1)}
        {edge(n1, B)}
        {edge(n1, n2)}
        {edge(n2, C)}
        {edge(n2, D)}
        {bit(R, A, '0')}
        {bit(R, n1, '1', 10)}
        {bit(n1, B, '0')}
        {bit(n1, n2, '1', 10)}
        {bit(n2, C, '0')}
        {bit(n2, D, '1', 10)}
        {dot(R)}
        {dot(n1)}
        {dot(n2)}
        {leaf(A.x, A.y, 'A', '0', '½')}
        {leaf(B.x, B.y, 'B', '10', '¼')}
        {leaf(C.x, C.y, 'C', '110', '⅛')}
        {leaf(D.x, D.y, 'D', '111', '⅛')}
      </Canvas>
    </div>
  )
}

// Binary symmetric channel: crossover probability p.
export function BinarySymmetricChannelViz() {
  const inX = 150
  const outX = 430
  const yTop = 120
  const yBot = 250
  const r = 22
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={580} h={340}>
        <T x={inX} y={64} op={0.55}>
          Input
        </T>
        <T x={outX} y={64} op={0.55}>
          Output
        </T>

        {/* correct transmissions */}
        <Arrow from={[inX + r, yTop]} to={[outX - r, yTop]} opacity={OPACITY.dim} />
        <T x={(inX + outX) / 2} y={yTop - 10} op={0.7} size={FONT_SMALL}>
          1 − p
        </T>
        <Arrow from={[inX + r, yBot]} to={[outX - r, yBot]} opacity={OPACITY.dim} />
        <T x={(inX + outX) / 2} y={yBot + 20} op={0.7} size={FONT_SMALL}>
          1 − p
        </T>

        {/* bit flips */}
        <Arrow
          from={[inX + r - 2, yTop + 14]}
          to={[outX - r + 2, yBot - 14]}
          opacity={OPACITY.faint}
        />
        <Arrow
          from={[inX + r - 2, yBot - 14]}
          to={[outX - r + 2, yTop + 14]}
          opacity={OPACITY.faint}
        />
        <T x={248} y={172} op={0.7} size={FONT_SMALL}>
          p
        </T>
        <T x={332} y={172} op={0.7} size={FONT_SMALL}>
          p
        </T>

        <NodeCircle cx={inX} cy={yTop} r={r} label="0" />
        <NodeCircle cx={inX} cy={yBot} r={r} label="1" />
        <NodeCircle cx={outX} cy={yTop} r={r} label="0" />
        <NodeCircle cx={outX} cy={yBot} r={r} label="1" />
      </Canvas>
    </div>
  )
}
