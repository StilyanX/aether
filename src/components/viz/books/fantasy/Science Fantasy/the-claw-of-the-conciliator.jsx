// BOOK II - THE CLAW OF THE CONCILIATOR
// Painting plates have been replaced with original visualizations of the
// actual book scenes (the Saltus Beats card lists the five sections the
// volume spends in Saltus - fair, scaffold, mine, green man, parting).

import React from 'react'
import {
  Canvas,
  Label,
  Tooltip,
  useTooltip,
  Slider,
  Toggle,
  PlayPause,
  ModuleTimeline,
  useAnimationTime,
  Hatch,
  Stipple,
  Rays,
  srand,
  FG,
  OPACITY
} from '../../../primitives'
import {
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  LS_CONTROL,
  LS_LABEL,
  LS_MEDIUM,
  LS_OPEN,
  LS_TIGHT,
  LS_TITLE,
  LS_UPPER,
  STROKE_EMPHASIS,
  STROKE_GUIDE,
  STROKE_HAIR,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from '../../../scale-tokens'

// II.01.1 - Saltus Map
export function SaltusMap() {
  const [tip, setTip] = useTooltip()
  const features = [
    { id: 'square', body: 'Fair, vendors, crowd.\nMorwenna burned here.', cite: '§I–III' },
    { id: 'scaffold', body: "Severian carries out\nMorwenna's execution.", cite: '§II' },
    { id: 'inn', body: 'Severian and Jonas lodge.\nHe dreams of the green man.', cite: '§I' },
    {
      id: 'barnoch',
      body: 'Door bricked up. Sympathiser\nof Vodalus, buried alive.\nSeverian opens it.',
      cite: '§III'
    },
    {
      id: 'mine',
      body: 'Severian enters alone.\nBlue light deepens; a\nfootstep from below the pool.',
      cite: '§IV'
    },
    {
      id: 'forest',
      body: 'Forest court of Vodalus.\nThe alzabo feast is held here.',
      cite: '§V–VII'
    },
    {
      id: 'forge',
      body: "The village smith.\nWolfe's mood-image of\nthe carnifex at work.",
      cite: '§I'
    }
  ]
  const F = id => features.find(f => f.id === id)
  const tipOn = (id, x, y) =>
    setTip({ id, x, y, title: id.toUpperCase(), body: F(id).body, cite: F(id).cite })
  const off = () => setTip(null)
  return (
    <Canvas w={800} h={540}>
      <Hatch id="sal-grass" angle={20} gap={6} opacity={0.07} />
      <Hatch id="sal-stone" angle={90} gap={3} opacity={0.15} strokeWidth={STROKE_HAIR} />
      <Label x={40} y={32} size={FONT_SMALL}>
        SALTUS · MINING VILLAGE NORTH OF NESSUS
      </Label>
      <Label x={760} y={32} anchor="end" size={FONT_SMALL}>
        N ↑
      </Label>

      <rect x={0} y={60} width={800} height={480} fill="url(#sal-grass)" />

      <g>
        <Stipple x={500} y={56} w={300} h={120} n={140} seed={123} opacity={0.25} r={0.6} />
        {Array.from({ length: 14 }).map((_, i) => {
          const rng = srand(53 + i)
          const x = 520 + rng() * 270
          const y = 70 + rng() * 100
          const h = 14 + rng() * 12
          return (
            <g key={i}>
              <line
                x1={x}
                y1={y}
                x2={x}
                y2={y - h * 0.3}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_HAIR}
              />
              <path
                d={`M ${x - h * 0.5} ${y - h * 0.2}
                        Q ${x} ${y - h * 1.2} ${x + h * 0.5} ${y - h * 0.2} Z`}
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_GUIDE}
              />
            </g>
          )
        })}
        <text
          x={670}
          y={184}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
          opacity={OPACITY.dim}
        >
          FOREST → (Vodalus)
        </text>
      </g>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => tipOn('mine', 170, 180)}
        onMouseLeave={off}
      >
        <path
          d="M 60 230 Q 130 180 200 200 Q 240 210 260 240"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Stipple x={70} y={190} w={180} h={50} n={50} seed={9} opacity={0.3} r={0.6} />
        <path
          d="M 140 218 L 150 198 L 180 198 L 190 218 Z"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <line
          x1={140}
          y1={218}
          x2={140}
          y2={196}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <line
          x1={190}
          y1={218}
          x2={190}
          y2={196}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <line
          x1={138}
          y1={196}
          x2={192}
          y2={196}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <line
          x1={154}
          y1={218}
          x2={170}
          y2={246}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_HAIR}
        />
        <line
          x1={176}
          y1={218}
          x2={194}
          y2={246}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_HAIR}
        />
        <rect
          x={172}
          y={234}
          width={20}
          height={10}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_GUIDE}
        />
        <circle cx={176} cy={246} r="2.5" fill={FG} opacity={OPACITY.fg} />
        <circle cx={188} cy={246} r="2.5" fill={FG} opacity={OPACITY.fg} />
        <text
          x={170}
          y={184}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_MEDIUM}
        >
          MINE
        </text>
        <text
          x={170}
          y={266}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          descent ↓
        </text>
      </g>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => tipOn('square', 400, 320)}
        onMouseLeave={off}
      >
        <rect
          x={320}
          y={280}
          width={160}
          height={90}
          fill="url(#sal-stone)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {Array.from({ length: 24 }).map((_, i) => {
          const rng = srand(700 + i)
          return (
            <circle
              key={i}
              cx={330 + rng() * 140}
              cy={290 + rng() * 70}
              r={1.6}
              fill={FG}
              opacity={OPACITY.fg}
            />
          )
        })}
        <text
          x={400}
          y={388}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          SQUARE
        </text>
      </g>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => tipOn('scaffold', 400, 230)}
        onMouseLeave={off}
      >
        <rect
          x={376}
          y={250}
          width={48}
          height={6}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <line
          x1={384}
          y1={250}
          x2={384}
          y2={210}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <line
          x1={416}
          y1={250}
          x2={416}
          y2={210}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <line
          x1={380}
          y1={210}
          x2={420}
          y2={210}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <line
          x1={400}
          y1={210}
          x2={400}
          y2={224}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_GUIDE}
        />
        <circle
          cx={400}
          cy={228}
          r="3"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_GUIDE}
        />
        <line
          x1={376}
          y1={250}
          x2={372}
          y2={258}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_HAIR}
        />
        <line
          x1={372}
          y1={258}
          x2={366}
          y2={266}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_HAIR}
        />
        <text
          x={400}
          y={196}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
          opacity={OPACITY.dim}
        >
          SCAFFOLD
        </text>
      </g>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => tipOn('inn', 230, 350)}
        onMouseLeave={off}
      >
        <rect
          x={196}
          y={326}
          width={68}
          height={36}
          fill="url(#sal-stone)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <polygon
          points="194,326 232,304 266,326"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <rect
          x={250}
          y={308}
          width={8}
          height={14}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_GUIDE}
        />
        <rect
          x={224}
          y={342}
          width={10}
          height={20}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_HAIR}
        />
        <rect
          x={242}
          y={336}
          width={8}
          height={8}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_HAIR}
        />
        <line
          x1={246}
          y1={336}
          x2={246}
          y2={344}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_HAIR}
        />
        <line
          x1={242}
          y1={340}
          x2={250}
          y2={340}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_HAIR}
        />
        <line
          x1={200}
          y1={328}
          x2={200}
          y2={342}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_HAIR}
        />
        <rect
          x={188}
          y={342}
          width={20}
          height={10}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_HAIR}
        />
        <text
          x={230}
          y={384}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          INN
        </text>
      </g>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => tipOn('forge', 130, 380)}
        onMouseLeave={off}
      >
        <rect
          x={96}
          y={358}
          width={64}
          height={36}
          fill="url(#sal-stone)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <polygon
          points="96,358 160,346 160,358"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <rect
          x={148}
          y={340}
          width={10}
          height={22}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_GUIDE}
        />
        <path
          d="M 152 340 Q 158 330 154 320 Q 148 312 156 304"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_GUIDE}
        />
        <path
          d="M 110 380 L 108 376 L 130 372 L 134 372 L 132 376 L 130 380 Z"
          fill={FG}
          opacity={OPACITY.fg}
        />
        <text
          x={130}
          y={414}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
          opacity={OPACITY.dim}
        >
          FORGE
        </text>
      </g>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => tipOn('barnoch', 580, 350)}
        onMouseLeave={off}
      >
        <rect
          x={544}
          y={328}
          width={72}
          height={48}
          fill="url(#sal-stone)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <rect
          x={566}
          y={344}
          width={28}
          height={32}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0, 1, 2, 3, 4].map(r => (
          <g key={r}>
            <line
              x1={566}
              y1={344 + r * 6}
              x2={594}
              y2={344 + r * 6}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
            {[0, 1, 2].map(c => (
              <line
                key={c}
                x1={566 + c * 9 + (r % 2 ? 4 : 0)}
                y1={344 + r * 6}
                x2={566 + c * 9 + (r % 2 ? 4 : 0)}
                y2={350 + r * 6}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_HAIR}
              />
            ))}
          </g>
        ))}
        <text
          x={580}
          y={396}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
          opacity={OPACITY.dim}
        >
          BARNOCH'S
        </text>
      </g>

      <g>
        <path
          d="M 60 470 Q 240 460 380 470 Q 520 480 720 460"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
          strokeDasharray="6 4"
        />
        <text
          x={120}
          y={494}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_UPPER}
        >
          ROAD SOUTH → NESSUS
        </text>
      </g>

      <Tooltip tip={tip} />
    </Canvas>
  )
}

// II.01.2 - Saltus Beats
export function SaltusBeats() {
  const [active, setActive] = React.useState(null)
  const beats = [
    {
      id: 1,
      label: 'THE FAIR',
      cite: '§I',
      body: "Severian and Jonas arrive on horseback\nfor the carnival around three executions.\nThe alcalde greets them; a forge rings\nnearby - that is the volume's blacksmith."
    },
    {
      id: 2,
      label: 'MORWENNA',
      cite: '§II',
      body: "Severian visits Morwenna in her cell.\nShe is condemned for poisoning.\nHer accuser is killed by Severian's\nintervention - a thrown stone."
    },
    {
      id: 3,
      label: 'THE EXECUTION',
      cite: '§II',
      body: "On the scaffold above the square,\nSeverian carries out the carnifex's\nwork: Morwenna and a thief.\nThe crowd does not turn away."
    },
    {
      id: 4,
      label: 'THE MINE',
      cite: '§IV',
      body: "Beneath Saltus, Severian descends\nfor the man-apes' gold. The Claw\nfirst flares in his sabretache.\nA footstep - from below."
    },
    {
      id: 5,
      label: "BARNOCH'S DOOR",
      cite: '§III',
      body: 'Barnoch, sympathiser of Vodalus,\nwas walled in alive behind his door.\nSeverian opens the brick for him.'
    },
    {
      id: 6,
      label: 'THE GREEN MAN',
      cite: '§III',
      body: 'In a sideshow tent: a man whose\nskin is green and who claims to\nhave come back through time.\nSeverian leaves him a file.'
    }
  ]
  return (
    <Canvas w={800} h={460}>
      <Label x={40} y={28} size={FONT_SMALL}>
        SALTUS · SIX SCENES (SECTIONS I-V)
      </Label>
      {beats.map((b, i) => {
        const col = i % 3,
          row = Math.floor(i / 3)
        const x = 60 + col * 230,
          y = 80 + row * 170
        const w = 200,
          h = 140
        const on = active === b.id
        return (
          <g
            key={b.id}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setActive(b.id)}
            onMouseLeave={() => setActive(null)}
          >
            <rect
              x={x}
              y={y}
              width={w}
              height={h}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={on ? OPACITY.fg : OPACITY.dim}
              strokeWidth={on ? STROKE_PRIMARY : STROKE_SECONDARY}
            />
            <text
              x={x + 12}
              y={y + 22}
              fill={FG}
              fontSize={FONT_SMALL}
              opacity={OPACITY.dim}
              letterSpacing={LS_TITLE}
            >
              {`SCENE ${b.id} · ${b.cite}`}
            </text>
            <text x={x + 12} y={y + 44} fill={FG} fontSize={FONT_TEX} letterSpacing={LS_MEDIUM}>
              {b.label}
            </text>
            {b.body.split('\n').map((ln, j) => (
              <text
                key={j}
                x={x + 12}
                y={y + 70 + j * 14}
                fill={FG}
                fontSize={FONT_SMALL}
                opacity={OPACITY.dim}
              >
                {ln}
              </text>
            ))}
          </g>
        )
      })}
    </Canvas>
  )
}

// II.02.1 - Mine Section
export function MineSection() {
  const [depth, setDepth] = React.useState(0.4)
  const xTop = 200,
    yTop = 80,
    xBot = 280,
    yBot = 460
  const sx = xTop + (xBot - xTop) * depth
  const sy = yTop + (yBot - yTop) * depth
  return (
    <div style={{ width: '100%' }}>
      <svg
        viewBox="0 0 800 500"
        style={{ display: 'block', maxWidth: '100%', color: 'var(--text-primary)' }}
      >
        <text
          x={40}
          y={28}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_CONTROL}
          style={{ textTransform: 'uppercase' }}
        >
          THE MINE BENEATH SALTUS · §IV
        </text>
        <path
          d="M 100 60 L 100 480 L 360 480 L 480 460 L 480 200 L 380 60 Z"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <clipPath id="mineGlowClip">
          <path d="M 100 60 L 100 480 L 360 480 L 480 460 L 480 200 L 380 60 Z" />
        </clipPath>
        <path
          d={`M ${xTop} ${yTop} L ${xTop + 40} ${yTop} L ${xBot + 40} ${yBot} L ${xBot} ${yBot} Z`}
          fill={FG}
          fillOpacity="0.03"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <ellipse
          cx={xBot + 20}
          cy={yBot - 8}
          rx={26}
          ry={6}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <text x={xBot + 86} y={yBot - 6} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          standing pool
        </text>
        <g clipPath="url(#mineGlowClip)">
          <circle
            cx={sx + 20}
            cy={sy}
            r={20 + 30 * depth}
            fill="none"
            stroke={FG}
            strokeOpacity={0.18 + 0.25 * depth}
            strokeWidth={STROKE_GUIDE}
          />
          <circle
            cx={sx + 20}
            cy={sy}
            r={36 + 60 * depth}
            fill="none"
            stroke={FG}
            strokeOpacity={0.06 + 0.2 * depth}
            strokeWidth={STROKE_GUIDE}
          />
        </g>
        <text
          x={520}
          y={150}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_LABEL}
        >
          GLOW INTENSITY
        </text>
        <text x={520} y={170} fill={FG} fontSize={FONT_SMALL}>
          {Math.round(depth * 100)}%
        </text>
        <circle cx={sx + 20} cy={sy} r="6" fill={FG} />
        <text x={sx + 36} y={sy + 4} fill={FG} fontSize={FONT_SMALL}>
          Severian
        </text>
        {depth > 0.7 && (
          <g>
            <text
              x={xBot + 20}
              y={yBot + 16}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.fg}
              letterSpacing={LS_LABEL}
            >
              ↓ FOOTSTEP FROM BELOW
            </text>
            <text
              x={xBot + 20}
              y={yBot + 30}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              he stops
            </text>
          </g>
        )}
        <text
          x={520}
          y={220}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_MEDIUM}
        >
          FROM §IV
        </text>
        <text x={520} y={240} fill={FG} fontSize={FONT_LABEL}>
          "The blue light grew brighter,
        </text>
        <text x={520} y={256} fill={FG} fontSize={FONT_LABEL}>
          not weaker, as we descended."
        </text>
        <text x={520} y={290} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          The Claw in the sabretache
        </text>
        <text x={520} y={306} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          is its source - neither
        </text>
        <text x={520} y={322} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          knows yet.
        </text>
      </svg>
      <Slider
        label="depth"
        value={depth}
        min={0.05}
        max={0.95}
        step={0.01}
        onChange={setDepth}
        format={v => `${(v * 100).toFixed(0)}%`}
      />
    </div>
  )
}

// II.03.1 - Forest Court
export function ForestCourt() {
  const [tip, setTip] = useTooltip()
  const cx = 400,
    cy = 300
  const seats = [
    {
      name: 'Vodalus',
      angle: -Math.PI / 2,
      label: 'VODALUS',
      sub: 'presides',
      cite: '§VI',
      body: 'Seated on a cushion at the head\nof the circle. Inquires of Severian.'
    },
    {
      name: 'Thea',
      angle: -Math.PI / 2 + 0.7,
      label: 'Thea',
      sub: "Vodalus's lady",
      cite: '§VI',
      body: "Thecla's half-sister.\nSeverian recognises her face."
    },
    {
      name: 'Severian',
      angle: Math.PI / 2,
      label: 'SEVERIAN',
      sub: 'new initiate',
      cite: '§VI',
      body: 'Given his share of the alzabo.\nWill carry Thecla afterward.'
    },
    {
      name: 'guard1',
      angle: Math.PI / 2 - 0.7,
      label: 'guard',
      sub: '',
      cite: '§V',
      body: 'Vodalarius - armed.\nSeverian was brought blindfolded.'
    },
    {
      name: 'guard2',
      angle: -Math.PI / 2 - 0.7,
      label: 'guard',
      sub: '',
      cite: '§V',
      body: 'Another Vodalarius.\nThe forest is full of them.'
    },
    {
      name: 'others',
      angle: 0,
      label: 'others',
      sub: 'unnamed',
      cite: '§VI',
      body: 'Other officers of the rebellion.\nThe volume does not name them all.'
    },
    {
      name: 'Thecla',
      angle: Math.PI,
      label: 'THECLA',
      sub: '(the meat)',
      cite: '§VI',
      body: "Thecla's flesh, mixed with the\nalzabo flesh. To eat is to wear her\nmemory for a time."
    }
  ]
  return (
    <Canvas w={800} h={580}>
      <Hatch id="fc-canopy" angle={120} gap={4} opacity={0.06} />
      <Label x={40} y={32} size={FONT_SMALL}>
        FOREST COURT · ALZABO FEAST · §V–VII
      </Label>
      <rect x={0} y={60} width={800} height={500} fill="url(#fc-canopy)" />
      {Array.from({ length: 26 }).map((_, i) => {
        const rng = srand(500 + i)
        const a = (i / 26) * Math.PI * 2 + rng() * 0.2
        const r = 230 + rng() * 50
        const x = cx + Math.cos(a) * r
        const y = cy + Math.sin(a) * r
        if (x < 30 || x > 770 || y < 70 || y > 550) return null
        const h = 50 + rng() * 30
        return (
          <g key={i}>
            <line
              x1={x}
              y1={y}
              x2={x}
              y2={y - h * 0.3}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_GUIDE}
            />
            <path
              d={`M ${x - h * 0.32} ${y - h * 0.2}
                      Q ${x - h * 0.42} ${y - h * 0.7} ${x} ${y - h}
                      Q ${x + h * 0.42} ${y - h * 0.7} ${x + h * 0.32} ${y - h * 0.2}
                      Z`}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_GUIDE}
            />
          </g>
        )
      })}
      <Stipple x={140} y={120} w={520} h={340} n={120} seed={88} opacity={0.12} r={0.5} />

      <g>
        <ellipse
          cx={cx}
          cy={cy + 14}
          rx={56}
          ry={14}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <line
          x1={cx - 50}
          y1={cy + 14}
          x2={cx + 50}
          y2={cy + 14}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <line
          x1={cx - 40}
          y1={cy + 8}
          x2={cx + 30}
          y2={cy + 20}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <line
          x1={cx - 25}
          y1={cy + 20}
          x2={cx + 45}
          y2={cy + 8}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {[
          [0, -50, 1.0],
          [-22, -36, 0.7],
          [22, -36, 0.7],
          [-12, -60, 0.6],
          [14, -56, 0.6]
        ].map(([dx, dy, sc], i) => (
          <path
            key={i}
            d={`M ${cx + dx} ${cy + dy}
                   Q ${cx + dx - 14 * sc} ${cy + dy + 18 * sc} ${cx + dx} ${cy + dy + 30 * sc}
                   Q ${cx + dx + 14 * sc} ${cy + dy + 18 * sc} ${cx + dx} ${cy + dy} Z`}
            fill="none"
            stroke={FG}
            strokeOpacity={OPACITY.fg * (0.6 + sc * 0.4)}
            strokeWidth={sc * 1.1}
          />
        ))}
        <Rays cx={cx} cy={cy} r0={62} r1={110} count={20} opacity={0.2} strokeWidth={STROKE_HAIR} />
        {Array.from({ length: 18 }).map((_, i) => {
          const rng = srand(220 + i)
          const a = -Math.PI / 2 + (rng() - 0.5) * Math.PI
          const r = 70 + rng() * 80
          return (
            <circle
              key={i}
              cx={cx + Math.cos(a) * r}
              cy={cy + Math.sin(a) * r}
              r={0.8}
              fill={FG}
              opacity={OPACITY.fg * (0.8 - rng() * 0.5)}
            />
          )
        })}
        <text
          x={cx}
          y={cy + 56}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          PYRE · ALZABO + THECLA
        </text>
      </g>

      {seats.map((s, i) => {
        const r = 170
        const x = cx + Math.cos(s.angle) * r
        const y = cy + Math.sin(s.angle) * r
        return (
          <g
            key={i}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setTip({ x, y, title: s.label, body: s.body, cite: s.cite })}
            onMouseLeave={() => setTip(null)}
          >
            <ellipse
              cx={x + 3}
              cy={y + 16}
              rx={10}
              ry={3}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.faint}
              strokeWidth={STROKE_HAIR}
            />
            <circle cx={x} cy={y - 8} r="5" fill={FG} opacity={OPACITY.fg} />
            <path
              d={`M ${x - 12} ${y + 18} L ${x - 6} ${y - 3} L ${x + 6} ${y - 3} L ${x + 12} ${y + 18} Z`}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={x}
              y={y + 36}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              letterSpacing={LS_LABEL}
            >
              {s.label}
            </text>
            <text
              x={x}
              y={y + 50}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              {s.sub}
            </text>
            <circle cx={x} cy={y} r="22" fill="transparent" />
          </g>
        )
      })}
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// II.04.1 - Antechamber
export function Antechamber() {
  const [tip, setTip] = useTooltip()
  const visitors = [
    {
      name: 'old man',
      x: 200,
      y: 200,
      cite: '§XII',
      body: 'Came as a young suitor.\nForgot the year. Stayed.'
    },
    {
      name: 'singer',
      x: 340,
      y: 170,
      cite: '§XII',
      body: 'Sings the same song\nshe began on her arrival.'
    },
    {
      name: 'soldier',
      x: 500,
      y: 200,
      cite: '§XII',
      body: 'Wears a uniform of\na regiment now disbanded.'
    },
    { name: 'child', x: 620, y: 230, cite: '§XII', body: 'Born here.\nHis mother left him.' },
    {
      name: 'Severian',
      x: 400,
      y: 340,
      cite: '§XI–XII',
      body: 'Wanders in with Jonas.\nThey are not visitors;\nthey are intruders.'
    },
    {
      name: 'Jonas',
      x: 340,
      y: 340,
      cite: '§XII',
      body: 'Recognises this antechamber.\nHe has been here before.\nHe leaves through the mirrors.'
    }
  ]
  return (
    <Canvas w={800} h={460}>
      <Label x={40} y={32} size={FONT_SMALL}>
        ANTECHAMBER · HOUSE ABSOLUTE · §XI–XII
      </Label>
      <rect
        x={120}
        y={80}
        width={560}
        height={340}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <line
        x1={120}
        y1={80}
        x2={120}
        y2={420}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth="3"
      />
      <line
        x1={680}
        y1={80}
        x2={680}
        y2={420}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth="3"
      />
      <text
        x={108}
        y={250}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
        transform="rotate(-90 108 250)"
      >
        MIRROR WALL
      </text>
      <text
        x={692}
        y={250}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
        transform="rotate(90 692 250)"
      >
        MIRROR WALL
      </text>
      {visitors.slice(0, 4).map((v, i) => (
        <g key={`echo-${i}`}>
          <circle cx={140} cy={v.y} r="6" fill="none" stroke={FG} strokeOpacity={OPACITY.faint} />
          <circle cx={660} cy={v.y} r="6" fill="none" stroke={FG} strokeOpacity={OPACITY.faint} />
        </g>
      ))}
      {visitors.map(v => (
        <g
          key={v.name}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() => setTip({ x: v.x, y: v.y, title: v.name, body: v.body, cite: v.cite })}
          onMouseLeave={() => setTip(null)}
        >
          <circle
            cx={v.x}
            cy={v.y}
            r="12"
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <text
            x={v.x}
            y={v.y + 28}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {v.name}
          </text>
        </g>
      ))}
      <text
        x={400}
        y={64}
        fill={FG}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        letterSpacing={LS_TITLE}
      >
        A ROOM THAT FORGOT IT WAS A PRISON
      </text>
      <text
        x={400}
        y={448}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        none of them remember when they arrived; none of them leave
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// II.04.2 - House Absolute
export function HouseAbsolute() {
  const [tip, setTip] = useTooltip()
  const rings = [
    {
      r: 230,
      label: 'OUTER GARDENS',
      cite: '§X',
      body: 'Public play takes place here.\nDr. Talos performs Eschatology and Genesis.'
    },
    {
      r: 175,
      label: 'HYPOGEUM WARDS',
      cite: '§XI',
      body: 'Buried, concentric corridors.\nThe whole palace is underground.'
    },
    {
      r: 120,
      label: 'ANTECHAMBER',
      cite: '§XII',
      body: "Visitors collect; none ever leave.\nInire's mirrors line two walls."
    },
    {
      r: 65,
      label: 'AUTARCH CENTRE',
      cite: '§X–XII',
      body: 'At the core. Severian does not\nmeet the Autarch in Book II.'
    }
  ]
  const cx = 380,
    cy = 270
  return (
    <Canvas w={800} h={560}>
      <Label x={40} y={32} size={FONT_SMALL}>
        HOUSE ABSOLUTE · CONCENTRIC PALACE
      </Label>
      <line
        x1={40}
        y1={120}
        x2={720}
        y2={120}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />
      <text
        x={40}
        y={108}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        SURFACE
      </text>
      {rings.map((rg, i) => (
        <g
          key={i}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ x: cx + rg.r - 20, y: cy, title: rg.label, body: rg.body, cite: rg.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <circle
            cx={cx}
            cy={cy}
            r={rg.r}
            fill="none"
            stroke={FG}
            strokeOpacity={tip && tip.title === rg.label ? OPACITY.fg : OPACITY.dim}
            strokeWidth={tip && tip.title === rg.label ? STROKE_EMPHASIS : STROKE_SECONDARY}
          />
          <text
            x={cx}
            y={cy - rg.r - 6}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_MEDIUM}
            opacity={OPACITY.dim}
          >
            {rg.label}
          </text>
        </g>
      ))}
      <path
        d={`M ${40} ${100} L ${cx - 230} ${cy - 30} L ${cx - 170} ${cy + 20} L ${cx - 90} ${cy + 60}`}
        fill="none"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <circle cx={cx - 90} cy={cy + 60} r="6" fill={FG} />
      <text x={cx - 80} y={cy + 76} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.fg}>
        Severian + Jonas
      </text>
      <text x={cx - 80} y={cy + 90} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        slipped through the wrong ring
      </text>
      <text
        x={500}
        y={490}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        each ring filters who can pass
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// II.06.1 - Cumaean Ritual
export function CumaeanRitual() {
  const [playing, setPlaying] = React.useState(false)
  const tRaw = useAnimationTime(playing, 0.4)
  // RESET rebases the clock so the ritual returns to its first phase
  const [tBase, setTBase] = React.useState(0)
  const t = tRaw - tBase
  const phase = (((t % 4) + 4) % 4) / 4
  const cx = 400,
    cy = 320
  const R = 140
  const stones = Array.from({ length: 9 }).map((_, i) => {
    const a = (i / 9) * Math.PI * 2 - Math.PI / 2
    const x = cx + Math.cos(a) * R
    const y = cy + Math.sin(a) * R
    const rng = srand(7 + i * 13)
    const w = 14 + rng() * 8
    const h = 42 + rng() * 22
    const lean = (rng() - 0.5) * 0.25
    return { x, y, w, h, lean, i }
  })
  const watchers = [
    { label: 'Cumaean', a: Math.PI },
    { label: 'Severian', a: Math.PI + (2 * Math.PI) / 3 },
    { label: 'apprentice', a: Math.PI - (2 * Math.PI) / 3 }
  ].map(w => ({ ...w, x: cx + Math.cos(w.a) * (R - 60), y: cy + Math.sin(w.a) * (R - 60) }))

  const glow = Math.max(0, Math.sin(phase * Math.PI * 2))
  const apuOpacity = Math.max(0, glow) * 0.85
  const cityOpacity = Math.max(0, Math.sin(phase * Math.PI * 2 - 0.4)) * 0.55

  const motesRng = srand(101)
  const motes = Array.from({ length: 50 }).map(() => {
    const a = motesRng() * Math.PI * 2
    const distNorm = motesRng()
    const radial = 20 + distNorm * 160
    return { a, r: radial, opacity: (1 - distNorm) * apuOpacity * 0.6 }
  })

  return (
    <div style={{ width: '100%' }}>
      <svg
        viewBox="0 0 800 560"
        style={{ display: 'block', maxWidth: '100%', color: 'var(--text-primary)' }}
      >
        <Hatch id="cum-ground" angle={20} gap={5} opacity={0.08} />
        <text
          x={40}
          y={28}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_CONTROL}
          style={{ textTransform: 'uppercase' }}
        >
          CUMAEAN CALLS APU PUNCHAU · §XXIX–XXX
        </text>

        <Stipple x={40} y={50} w={720} h={140} n={120} seed={47} opacity={0.55} r={0.5} />

        <g opacity={cityOpacity}>
          <path
            d="M 200 200 L 200 150 L 220 150 L 220 120 L 240 120 L 240 90 L 270 90 L 270 130 L 290 130 L 290 100 L 320 100 L 320 70 L 360 70 L 360 110 L 390 110 L 390 60 L 420 60 L 420 100 L 450 100 L 450 130 L 480 130 L 480 80 L 510 80 L 510 120 L 540 120 L 540 100 L 570 100 L 570 150 L 600 150 L 600 200 Z"
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          {[
            [220, 160],
            [270, 110],
            [320, 90],
            [390, 80],
            [420, 80],
            [480, 100],
            [540, 130],
            [240, 140],
            [360, 130],
            [450, 120],
            [510, 100]
          ].map(([wx, wy], i) => (
            <rect key={i} x={wx} y={wy} width={3} height={5} fill={FG} opacity={OPACITY.fg} />
          ))}
          <text
            x={400}
            y={50}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
            letterSpacing={LS_TITLE}
          >
            THE ANCIENT CITY · FLICKERING
          </text>
        </g>

        <ellipse
          cx={cx}
          cy={cy + 30}
          rx={260}
          ry={50}
          fill="url(#cum-ground)"
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
        />
        {[80, 120, 160].map((rr, i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy + 30}
            rx={rr}
            ry={rr * 0.18}
            fill="none"
            stroke={FG}
            strokeOpacity={OPACITY.faint * 0.7}
            strokeWidth={STROKE_HAIR}
          />
        ))}

        {stones.map((s, i) => (
          <ellipse
            key={i}
            cx={s.x + 4}
            cy={s.y + s.h / 2 + 4}
            rx={s.w * 0.7}
            ry={s.w * 0.25}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.faint}
            strokeWidth={STROKE_HAIR}
          />
        ))}

        {stones.map(s => {
          const dx = Math.tan(s.lean) * s.h
          const points = [
            [s.x - s.w / 2, s.y + s.h / 2],
            [s.x - s.w / 2 + dx * 0.3, s.y - s.h / 2 + 4],
            [s.x - 2 + dx * 0.5, s.y - s.h / 2 - 2],
            [s.x + 2 + dx * 0.5, s.y - s.h / 2 - 4],
            [s.x + s.w / 2 + dx, s.y - s.h / 2 + 6],
            [s.x + s.w / 2, s.y + s.h / 2]
          ]
          return (
            <g key={s.i}>
              <polygon
                points={points.map(p => p.join(',')).join(' ')}
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              {Array.from({ length: 4 }).map((_, j) => (
                <line
                  key={j}
                  x1={s.x - s.w / 2 + 2}
                  y1={s.y - s.h / 2 + 10 + j * 9}
                  x2={s.x + s.w / 2 - 2}
                  y2={s.y - s.h / 2 + 12 + j * 9}
                  stroke={FG}
                  strokeOpacity={OPACITY.faint * 0.7}
                  strokeWidth={STROKE_HAIR}
                />
              ))}
            </g>
          )
        })}

        <g opacity={apuOpacity}>
          <Rays
            cx={cx}
            cy={cy}
            r0={30}
            r1={120}
            count={24}
            opacity={0.4}
            strokeWidth={STROKE_HAIR}
          />
          <circle
            cx={cx}
            cy={cy}
            r={26}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <ellipse cx={cx} cy={cy - 4} rx={10} ry={12} fill={FG} opacity={0.85} />
          <text
            x={cx}
            y={cy + 56}
            fill={FG}
            fontSize={FONT_LABEL}
            textAnchor="middle"
            letterSpacing={LS_TITLE}
          >
            APU PUNCHAU
          </text>
          <text
            x={cx}
            y={cy + 70}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            head of day
          </text>
        </g>

        {motes.map((m, i) => (
          <circle
            key={i}
            cx={cx + Math.cos(m.a) * m.r}
            cy={cy + Math.sin(m.a) * m.r}
            r={0.8}
            fill={FG}
            opacity={m.opacity}
          />
        ))}

        {watchers.map(w => (
          <g key={w.label}>
            <ellipse
              cx={w.x + 3}
              cy={w.y + 14}
              rx={10}
              ry={3}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.faint}
              strokeWidth={STROKE_HAIR}
            />
            <circle cx={w.x} cy={w.y - 8} r="5" fill={FG} opacity={OPACITY.fg} />
            <path
              d={`M ${w.x - 12} ${w.y + 18} L ${w.x - 6} ${w.y - 3} L ${w.x + 6} ${w.y - 3} L ${w.x + 12} ${w.y + 18} Z`}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={w.x}
              y={w.y + 32}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              letterSpacing={LS_LABEL}
            >
              {w.label}
            </text>
          </g>
        ))}

        <text
          x={40}
          y={538}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_MEDIUM}
        >
          phase {(phase * 100).toFixed(0)}% · the city appears, then fades
        </text>
      </svg>
      <PlayPause
        playing={playing}
        onToggle={() => {
          if (!playing) setTBase(0) // the hook restarts its clock on each play
          setPlaying(v => !v)
        }}
        onReset={() => setTBase(tRaw)}
      />
    </div>
  )
}

// II.07.1 - Nessus → Thrax
export function NessusToThrax() {
  const sections = [
    [1, 'The village of Saltus', 'SALTUS', 0.55],
    [2, 'The man in the dark', 'SALTUS', 0.35],
    [3, 'The cipher', 'SALTUS', 0.5],
    [4, 'The wolves and the cliff', 'MINE', 0.35],
    [5, 'The mine', 'MINE', 0.25],
    [6, 'The man-apes', 'FOREST', 0.25],
    [7, 'The cocktail party', 'FOREST', 0.3],
    [8, 'Thecla', 'FOREST', 0.15],
    [9, 'On the road north', 'ROAD', 0.5],
    [10, 'The mansion', 'HA', 0.6],
    [11, 'The play: gardens', 'HA', 0.65],
    [12, 'The antechamber', 'HA', 0.35],
    [13, 'Inire', 'HA', 0.45],
    [14, 'The corridor of the destroyed', 'HA', 0.3],
    [15, 'The fall of the House', 'HA', 0.3],
    [16, 'On the road again', 'ROAD', 0.55],
    [17, 'Through a green valley', 'ROAD', 0.6],
    [18, 'The pelt of the alzabo', 'STONE', 0.35],
    [19, 'The ruined town', 'STONE', 0.35],
    [20, 'The stone town', 'STONE', 0.35],
    [21, 'The Cumaean', 'STONE', 0.55],
    [22, 'Sleep', 'STONE', 0.5],
    [23, 'The hetman', 'STONE', 0.45],
    [24, 'The conjurers', 'NORTH', 0.55],
    [25, "Jolenta's death", 'NORTH', 0.25],
    [26, 'Above the jungle', 'NORTH', 0.6],
    [27, 'A man of many roles', 'NORTH', 0.55],
    [28, 'The Conciliator', 'NORTH', 0.7],
    [29, 'The night of the wisent', 'NORTH', 0.5],
    [30, 'The Pelerine', 'NORTH', 0.55],
    [31, "The thaumaturge's mirror", 'THRAX', 0.5]
  ]
  const data = sections.map(([n, label, band]) => ({ n, label, sub: band }))
  const moods = sections.map(([, , , m]) => m)
  const beats = [
    { i: 0, label: 'Saltus' },
    { i: 4, label: 'Mine' },
    { i: 7, label: 'Thecla returns' },
    { i: 10, label: 'The play' },
    { i: 11, label: 'Antechamber' },
    { i: 20, label: 'Cumaean' },
    { i: 24, label: 'Jolenta dies' },
    { i: 27, label: 'Conciliator' }
  ]
  const [current, setCurrent] = React.useState(0)
  return (
    <ModuleTimeline
      sections={data}
      moods={moods}
      beats={beats}
      current={current}
      onScrub={setCurrent}
      width={780}
      height={260}
      topLabel="THE CLAW OF THE CONCILIATOR · 31 SECTIONS"
    />
  )
}

// II.07.2 - Character Network
export function CharacterNetwork() {
  const [tip, setTip] = useTooltip()
  const cx = 400,
    cy = 320
  const factions = [
    {
      name: 'COMPANIONS',
      angle: -2.4,
      radius: 200,
      members: [
        {
          name: 'Dorcas',
          tag: 'lover · double',
          cite: 'throughout',
          body: "Severian's companion north."
        },
        {
          name: 'Jolenta',
          tag: 'beauty · dying',
          cite: '§VIII–XXVII',
          body: "Talos' actress; declines\non the journey."
        },
        {
          name: 'Jonas',
          tag: 'iron-handed',
          cite: '§XI–XII',
          body: "Walks into Inire's mirror;\nnever returns."
        }
      ]
    },
    {
      name: 'AUTHORITY',
      angle: -0.95,
      radius: 210,
      members: [
        {
          name: 'Vodalus',
          tag: 'rebel chief',
          cite: '§V–VII',
          body: 'Presides at the alzabo feast.'
        },
        { name: 'Thea', tag: "Vodalus's lady", cite: '§VI', body: "Thecla's half-sister." },
        {
          name: 'F. Inire',
          tag: 'shadow vizier',
          cite: '§XIII',
          body: 'Met as the homunculus\nin the antechamber.'
        },
        { name: 'Autarch', tag: 'unseen', cite: '§X–XII', body: 'In the palace; never seen.' }
      ]
    },
    {
      name: 'HIERODULES + SIBYL',
      angle: 0.6,
      labelR: 130,
      radius: 230,
      members: [
        { name: 'Cumaean', tag: 'sibyl', cite: '§XXI–XXIII', body: 'Calls Apu Punchau back.' },
        {
          name: 'Merryn',
          tag: "sibyl's witch",
          cite: '§XXI',
          body: "Cumaean's witch-companion."
        },
        { name: 'Hildegrin', tag: 'the Badger', cite: '§XXII', body: 'Killed in the ritual.' }
      ]
    },
    {
      name: 'TROUPE',
      angle: 1.9,
      radius: 210,
      members: [
        {
          name: 'Dr. Talos',
          tag: 'showman',
          cite: 'throughout',
          body: 'Hostile to the Conciliator role.'
        },
        {
          name: 'Baldanders',
          tag: 'giant master',
          cite: 'throughout',
          body: "Reveals himself as Talos's\nmaster, not pet."
        }
      ]
    },
    {
      name: 'INTERIOR',
      angle: 3.1,
      radius: 180,
      members: [
        {
          name: 'Thecla',
          tag: 'inside Severian',
          cite: '§VI',
          body: 'Wears him from within\nafter the feast.'
        },
        {
          name: 'Malrubius',
          tag: 'in dreams',
          cite: '§XXVII',
          body: 'Visits Severian as aquastor.'
        }
      ]
    },
    {
      name: 'ANTAGONIST',
      angle: -3.6,
      radius: 180,
      members: [
        { name: 'Agia', tag: 'ghost-hunter', cite: '§III', body: 'Her hand in Saltus murders.' },
        { name: 'Hethor', tag: 'old sailor', cite: '§XXIV', body: 'Follows; conjures notules.' }
      ]
    }
  ]
  factions.forEach(f => {
    f.members.forEach((m, i) => {
      const a = f.angle + (i - (f.members.length - 1) / 2) * 0.22
      const r = f.radius + (i % 2 === 0 ? 0 : 36)
      m._x = cx + Math.cos(a) * r
      m._y = cy + Math.sin(a) * r
    })
  })
  return (
    <Canvas w={800} h={640}>
      <Label x={40} y={32} size={FONT_SMALL}>
        SEVERIAN'S RELATIONAL FIELD · BOOK II
      </Label>
      {factions.flatMap((f, fi) =>
        f.members.map(m => {
          const active = tip && tip.title === m.name
          return (
            <line
              key={`${fi}-${m.name}`}
              x1={cx}
              y1={cy}
              x2={m._x}
              y2={m._y}
              stroke={FG}
              strokeOpacity={active ? OPACITY.fg : OPACITY.faint}
              strokeWidth={active ? STROKE_PRIMARY : STROKE_HAIR}
            />
          )
        })
      )}
      {factions.map((f, fi) => {
        const lx = cx + Math.cos(f.angle) * (f.radius + (f.labelR ?? 90))
        const ly = cy + Math.sin(f.angle) * (f.radius + (f.labelR ?? 90))
        return (
          <text
            key={fi}
            x={lx}
            y={ly}
            fill={FG}
            fontSize={FONT_SMALL}
            opacity={OPACITY.dim}
            textAnchor="middle"
            letterSpacing={LS_TITLE}
          >
            {f.name}
          </text>
        )
      })}
      {factions.flatMap(f =>
        f.members.map(m => (
          <g
            key={m.name}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() =>
              setTip({ x: m._x, y: m._y, title: m.name, body: m.body, cite: m.cite })
            }
            onMouseLeave={() => setTip(null)}
          >
            <circle
              cx={m._x}
              cy={m._y}
              r={8}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_SECONDARY}
            />
            <text x={m._x} y={m._y + 22} fill={FG} fontSize={FONT_SMALL} textAnchor="middle">
              {m.name}
            </text>
            <text
              x={m._x}
              y={m._y + 36}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              {m.tag}
            </text>
            <circle cx={m._x} cy={m._y} r="22" fill="transparent" />
          </g>
        ))
      )}
      <g>
        <circle
          cx={cx}
          cy={cy}
          r="24"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={cx}
          y={cy + 4}
          fill={FG}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          SEV
        </text>
        <text
          x={cx}
          y={cy + 44}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          SEVERIAN
        </text>
        <text
          x={cx}
          y={cy + 60}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          + Thecla within
        </text>
      </g>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// II.07.3 - Terminology Tree
export function TerminologyTree() {
  const [active, setActive] = React.useState({
    GREEK: true,
    LATIN: true,
    ARCHAIC: true,
    AUTHORS: true
  })
  const reservoirs = {
    GREEK: {
      x: 130,
      y: 90,
      words: [
        ['cataphract', 'Gk. armed cavalry'],
        ['demilune', 'Gk. half-moon'],
        ['oneiric', 'Gk. of dreams'],
        ['palaestra', 'Gk. wrestling-school'],
        ['hypogeum', 'Gk. buried chamber'],
        ['aquastor', 'Gk. water-born']
      ]
    },
    LATIN: {
      x: 390,
      y: 90,
      words: [
        ['Conciliator', 'L. reconciler'],
        ['lictor', 'L. magistrate guard'],
        ['mappemonde', 'L./Fr. world-map'],
        ['carnifex', 'L. butcher · executioner'],
        ['flamingo', 'L. flame-coloured']
      ]
    },
    ARCHAIC: {
      x: 650,
      y: 90,
      words: [
        ['fuligin', 'darker than black'],
        ['avern', 'thrown plant-weapon'],
        ['cherkaji', 'irregular cavalry'],
        ['arsinoither', 'horned mount'],
        ['destrier', 'war-horse (Old Fr.)']
      ]
    },
    AUTHORS: {
      x: 380,
      y: 360,
      words: [
        ['Apu Punchau', 'Quechua: head of day'],
        ['Erebus', 'Gk. dark place'],
        ['Saltus', 'L. forest, leap'],
        ['Thrax', 'Gk. Thracian'],
        ['Vodalus', 'invented · cf. vodal']
      ]
    }
  }
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={800} h={520}>
        <Label x={40} y={32} size={FONT_SMALL}>
          VOCABULARY · FOUR RESERVOIRS
        </Label>
        {Object.entries(reservoirs).map(([r, rg]) => (
          <g key={r}>
            <text
              x={rg.x}
              y={rg.y}
              fill={FG}
              fontSize={FONT_LABEL}
              textAnchor="middle"
              letterSpacing={LS_TITLE}
              opacity={active[r] ? OPACITY.fg : OPACITY.dim}
            >
              {r}
            </text>
            <line
              x1={rg.x}
              y1={rg.y + 8}
              x2={rg.x}
              y2={rg.y + 30}
              stroke={FG}
              strokeOpacity={active[r] ? OPACITY.fg : OPACITY.faint}
            />
            {rg.words.map((w, i) => {
              const col = i % 2
              const row = Math.floor(i / 2)
              const wx = rg.x + (col === 0 ? -65 : 65)
              const wy = rg.y + 60 + row * 38
              return (
                <g key={i} opacity={active[r] ? 1 : 0.25}>
                  <line
                    x1={rg.x}
                    y1={rg.y + 30}
                    x2={wx}
                    y2={wy - 10}
                    stroke={FG}
                    strokeOpacity={OPACITY.faint}
                  />
                  <text
                    x={wx}
                    y={wy}
                    fill={FG}
                    fontSize={FONT_LABEL}
                    textAnchor="middle"
                    letterSpacing={LS_TIGHT}
                  >
                    {w[0]}
                  </text>
                  <text
                    x={wx}
                    y={wy + 14}
                    fill={FG}
                    fontSize={FONT_SMALL}
                    textAnchor="middle"
                    opacity={OPACITY.dim}
                  >
                    {w[1]}
                  </text>
                </g>
              )
            })}
          </g>
        ))}
      </Canvas>
      <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {Object.keys(reservoirs).map(k => (
          <Toggle
            key={k}
            on={active[k]}
            onChange={v => setActive(s => ({ ...s, [k]: v }))}
            label={k}
          />
        ))}
      </div>
    </div>
  )
}

// II.07.4 - Symbol Network
export function SymbolNetwork() {
  const [tip, setTip] = useTooltip()
  const nodes = {
    claw: {
      x: 400,
      y: 300,
      label: 'CLAW',
      sub: 'centre · binds all',
      cite: 'throughout',
      body: 'Removing it leaves the network\nunconnected.'
    },
    mirror: {
      x: 200,
      y: 160,
      label: 'MIRROR',
      sub: 'Inire · doubling',
      cite: '§XIII',
      body: 'Jonas walks into one and is gone.'
    },
    fang: {
      x: 600,
      y: 160,
      label: 'FANG',
      sub: 'alzabo · wolf',
      cite: '§VI, IV',
      body: 'The animal mouth that takes\nselves into itself.'
    },
    water: {
      x: 130,
      y: 340,
      label: 'WATER',
      sub: 'lake · cistern',
      cite: '§V, XX',
      body: "Mineshaft pool; Cumaean's cistern."
    },
    flame: {
      x: 670,
      y: 340,
      label: 'FLAME',
      sub: 'feast · pyre',
      cite: '§VI, II',
      body: "Morwenna's pyre; the feast fire."
    },
    shadow: {
      x: 230,
      y: 520,
      label: 'SHADOW',
      sub: 'fuligin · cloak',
      cite: 'throughout',
      body: 'The colour darker than black.'
    },
    mask: {
      x: 570,
      y: 520,
      label: 'MASK',
      sub: 'play · Hierodule',
      cite: '§X',
      body: 'The play and the Hierodules\nshare the same surface.'
    },
    sun: {
      x: 400,
      y: 80,
      label: 'NEW SUN',
      sub: 'awaited',
      cite: '§XXVIII',
      body: 'The Conciliator is rumoured\nto bring it.'
    },
    grave: {
      x: 400,
      y: 560,
      label: 'GRAVE',
      sub: 'Barnoch · feast',
      cite: '§III, VI',
      body: 'Barnoch buried alive;\nThecla devoured.'
    },
    coin: {
      x: 80,
      y: 240,
      label: 'CHRISOS',
      sub: 'face on gold',
      cite: 'Bk I 1, 3',
      body: "Held over from Book I - still\nin Severian's pouch."
    }
  }
  const edges = [
    ['claw', 'mirror'],
    ['claw', 'fang'],
    ['claw', 'water'],
    ['claw', 'flame'],
    ['claw', 'shadow'],
    ['claw', 'mask'],
    ['claw', 'sun'],
    ['claw', 'grave'],
    ['claw', 'coin'],
    ['mirror', 'mask'],
    ['fang', 'grave'],
    ['water', 'flame'],
    ['flame', 'sun'],
    ['shadow', 'fang'],
    ['mask', 'sun']
  ]
  return (
    <Canvas w={800} h={620}>
      <Label x={40} y={32} size={FONT_SMALL}>
        SYMBOL NETWORK · CLAW AT THE CENTRE
      </Label>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_GUIDE}
        />
      ))}
      {Object.entries(nodes).map(([k, n]) => (
        <g
          key={k}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ x: n.x, y: n.y, title: n.label, body: n.body, cite: n.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <circle
            cx={n.x}
            cy={n.y}
            r={k === 'claw' ? 14 : 10}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={k === 'claw' ? OPACITY.fg : OPACITY.dim}
            strokeWidth={k === 'claw' ? STROKE_EMPHASIS : STROKE_SECONDARY}
          />
          <text
            x={n.x}
            y={n.y + (k === 'claw' ? 32 : 26)}
            fill={FG}
            fontSize={k === 'claw' ? FONT_LABEL : FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_OPEN}
          >
            {n.label}
          </text>
          <text
            x={n.x}
            y={n.y + (k === 'claw' ? 48 : 40)}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {n.sub}
          </text>
          <circle cx={n.x} cy={n.y} r="22" fill="transparent" />
        </g>
      ))}
      <Tooltip tip={tip} />
    </Canvas>
  )
}
