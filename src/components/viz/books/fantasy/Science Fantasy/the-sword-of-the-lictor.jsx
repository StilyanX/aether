// BOOK III - THE SWORD OF THE LICTOR
// Geography of Thrax, the salamander, the alzabo, the great mountain of Typhon,
// Lake Diuturna, Baldanders's island castle and the Hierodules.

import React from 'react'
import {
  Canvas,
  Label,
  Tooltip,
  useTooltip,
  Toggle,
  ModuleTimeline,
  Hatch,
  Stipple,
  Rays,
  srand,
  FG,
  OPACITY
} from '../../../primitives'
import {
  fill,
  fillSoft,
  gridLine,
  strokeFaint,
  strokeHair,
  strokeSoft,
  svgStyle,
  text,
  textFaint,
  textGhost,
  textSoft
} from '../../../theme'
import {
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TITLE,
  LS_CONTROL,
  LS_LABEL,
  LS_MEDIUM,
  LS_OPEN,
  LS_TITLE,
  LS_UPPER,
  STROKE_EMPHASIS,
  STROKE_GUIDE,
  STROKE_HAIR,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from '../../../scale-tokens'

// Reusable mood-curve chart (module-private)
function ArcChart({ beats, title, w = 800, h = 360 }) {
  const PAD_L = 50,
    PAD_R = 30,
    PAD_T = 56,
    PAD_B = 60
  const innerW = w - PAD_L - PAD_R,
    innerH = h - PAD_T - PAD_B
  const maxX = Math.max(...beats.map(b => b.x))
  const xOf = x => PAD_L + (x / maxX) * innerW
  const yOf = y => PAD_T + (1 - y) * innerH
  const path = 'M ' + beats.map(b => `${xOf(b.x)} ${yOf(b.y)}`).join(' L ')
  return (
    <Canvas w={w} h={h}>
      <Label x={40} y={32} size={FONT_SMALL}>
        {title}
      </Label>
      <line
        x1={PAD_L}
        y1={PAD_T + innerH * 0.5}
        x2={PAD_L + innerW}
        y2={PAD_T + innerH * 0.5}
        stroke={FG}
        strokeOpacity={OPACITY.faint}
        strokeWidth={STROKE_HAIR}
        strokeDasharray="2 4"
      />
      <text
        x={PAD_L - 8}
        y={PAD_T + 4}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="end"
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        HIGH
      </text>
      <text
        x={PAD_L - 8}
        y={PAD_T + innerH}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="end"
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        LOW
      </text>
      <path
        d={path}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
        fill="none"
      />
      {beats.map((b, i) => {
        // Clamp centered labels into the viewBox (end beats overhang otherwise)
        const halfW = b.label.length * FONT_SMALL * 0.31
        const lx = Math.max(halfW + 4, Math.min(w - halfW - 4, xOf(b.x)))
        return (
          <g key={i}>
            <circle cx={xOf(b.x)} cy={yOf(b.y)} r="4" fill={FG} />
            <text
              x={lx}
              y={yOf(b.y) + (i % 2 === 0 ? -10 : 20)}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.fg}
            >
              {b.label}
            </text>
          </g>
        )
      })}
    </Canvas>
  )
}

// III.01.1 - Thrax Geography
export function ThraxGeography() {
  const [tip, setTip] = useTooltip()
  const features = [
    {
      id: 'acies',
      x: 400,
      y: 80,
      kind: 'rect',
      w: 90,
      h: 46,
      label: 'ACIES CASTLE',
      cite: '§I',
      body: "At the blade's tip,\nupstream - first\ndefence of the city."
    },
    {
      id: 'capulus',
      x: 400,
      y: 500,
      kind: 'rect',
      w: 140,
      h: 32,
      label: 'CAPULUS WALL',
      cite: '§I',
      body: "The 'hilt'; closes\nthe valley downstream."
    },
    {
      id: 'vincula',
      x: 180,
      y: 280,
      kind: 'rect',
      w: 110,
      h: 60,
      label: 'VINCULA',
      cite: '§I',
      body: "Severian's prison-keep,\nbartizan projects from\nthe western cliff."
    },
    {
      id: 'palace',
      x: 540,
      y: 430,
      kind: 'rect',
      w: 120,
      h: 46,
      label: "ARCHON'S PALACE",
      cite: '§I',
      body: 'Where Cyriaca is held;\nthe ridotto takes place here.'
    }
  ]
  const flash = id => tip && tip.id === id
  return (
    <Canvas w={800} h={560}>
      <Label x={40} y={32} size={FONT_SMALL}>
        THRAX · CITY OF WINDOWLESS ROOMS
      </Label>
      <Label x={760} y={32} anchor="end" size={FONT_SMALL}>
        (VALLEY RUNS N→S)
      </Label>
      <path
        d="M 360 60 L 440 60 L 460 480 L 340 480 Z"
        fill={FG}
        fillOpacity="0.025"
        stroke={FG}
        strokeOpacity={OPACITY.faint}
        strokeWidth={STROKE_HAIR}
      />
      <path
        d="M 40 70 L 120 80 L 140 280 L 100 480 L 40 520 Z"
        fill={FG}
        fillOpacity="0.03"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />
      <path
        d="M 760 70 L 680 80 L 660 280 L 700 480 L 760 520 Z"
        fill={FG}
        fillOpacity="0.03"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />
      <text
        x={60}
        y={180}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        WEST CLIFF
      </text>
      <text
        x={720}
        y={180}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        textAnchor="end"
        letterSpacing={LS_MEDIUM}
      >
        EAST CLIFF
      </text>
      <path
        d="M 400 100 Q 390 200 410 280 Q 400 380 400 480"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
        fill="none"
      />
      <text x={410} y={280} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        ACIS
      </text>
      <text
        x={400}
        y={50}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        UPSTREAM ↑
      </text>
      <text
        x={400}
        y={530}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        DOWNSTREAM ↓
      </text>
      {features.map(f => (
        <g
          key={f.id}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ id: f.id, x: f.x, y: f.y, title: f.label, body: f.body, cite: f.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <rect
            x={f.x - f.w / 2}
            y={f.y - f.h / 2}
            width={f.w}
            height={f.h}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={flash(f.id) ? OPACITY.fg : OPACITY.dim}
            strokeWidth={flash(f.id) ? STROKE_EMPHASIS : STROKE_SECONDARY}
          />
          <text
            x={f.x}
            y={f.y + 4}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_MEDIUM}
          >
            {f.label}
          </text>
        </g>
      ))}
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// III.01.2 - Vincula Cross-Section
export function VinculaCrossSection() {
  return (
    <Canvas w={800} h={520}>
      <Label x={40} y={32} size={FONT_SMALL}>
        VINCULA · SLANTED SHAFT IN CLIFF · §I–III
      </Label>
      <line
        x1={40}
        y1={70}
        x2={760}
        y2={70}
        stroke={FG}
        strokeOpacity={OPACITY.faint}
        strokeWidth={STROKE_HAIR}
        strokeDasharray="2 4"
      />
      <text
        x={40}
        y={62}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        SKY
      </text>
      <path
        d="M 200 80 L 240 80 L 320 200 L 360 320 L 420 460 L 200 460 Z"
        fill={FG}
        fillOpacity="0.03"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />
      <line
        x1={40}
        y1={150}
        x2={240}
        y2={150}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_SECONDARY}
      />
      <text
        x={42}
        y={144}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        STREET LEVEL
      </text>
      <rect
        x={150}
        y={110}
        width={90}
        height={48}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={195}
        y={130}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        letterSpacing={LS_MEDIUM}
      >
        BARTIZAN
      </text>
      <text
        x={195}
        y={146}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        Severian's quarters
      </text>
      <polygon
        points="240,160 320,160 420,460 360,460"
        fill={FG}
        fillOpacity="0.05"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_SECONDARY}
      />
      <text
        x={380}
        y={290}
        fill={FG}
        fontSize={FONT_SMALL}
        letterSpacing={LS_TITLE}
        transform="rotate(72 380 290)"
      >
        SHAFT
      </text>
      {Array.from({ length: 8 }).map((_, i) => {
        const t = (i + 1) / 9
        const lx = 240 + (320 - 240) * t
        const ly = 160 + (460 - 160) * t
        const rx = 320 + (420 - 320) * t
        const ry = 160 + (460 - 160) * t
        return (
          <g key={i}>
            <circle cx={lx + 6} cy={ly} r="4" fill={FG} opacity={OPACITY.fg} />
            <line
              x1={lx}
              y1={ly}
              x2={lx + 6}
              y2={ly}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
            <circle cx={rx - 6} cy={ry} r="4" fill={FG} opacity={OPACITY.fg} />
            <line
              x1={rx}
              y1={ry}
              x2={rx - 6}
              y2={ry}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
          </g>
        )
      })}
      <text x={460} y={460} fill={FG} fontSize={FONT_SMALL} letterSpacing={LS_MEDIUM}>
        PRISONERS HUNG IN CHAINS
      </text>
      <g transform="translate(560,180)">
        <text
          x={0}
          y={0}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          SEVERIAN LIVES
        </text>
        <text x={0} y={16} fill={FG} fontSize={FONT_LABEL}>
          above the shaft.
        </text>
        <text
          x={0}
          y={50}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          PRISONERS
        </text>
        <text x={0} y={66} fill={FG} fontSize={FONT_LABEL}>
          hang below; he descends to feed,
        </text>
        <text x={0} y={80} fill={FG} fontSize={FONT_LABEL}>
          unchain, kill, or release.
        </text>
        <text
          x={0}
          y={114}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          CYRIACA
        </text>
        <text x={0} y={130} fill={FG} fontSize={FONT_LABEL}>
          comes from the Archon's hall
        </text>
        <text x={0} y={144} fill={FG} fontSize={FONT_LABEL}>
          to die. He frees her instead.
        </text>
      </g>
    </Canvas>
  )
}

// III.01.3 - Authority Web (§I)
export function Ch01SeverianAuthorityWeb() {
  const [tip, setTip] = useTooltip()
  const nodes = {
    autarch: {
      x: 400,
      y: 90,
      label: 'AUTARCH',
      sub: 'sovereign',
      cite: 'Bk II',
      body: 'Appoints all archons.'
    },
    archon: {
      x: 400,
      y: 230,
      label: 'ARCHON',
      sub: 'Abdiesus',
      cite: '§I',
      body: 'Hires Severian as lictor.\nGives the ridotto invitation.'
    },
    severian: {
      x: 400,
      y: 380,
      label: 'SEVERIAN',
      sub: 'lictor',
      cite: '§I',
      body: "Carries out the Archon's will\non the prisoners of the Vincula."
    },
    palaemon: {
      x: 160,
      y: 230,
      label: 'PALAEMON',
      sub: 'guild master',
      cite: 'Bk I 35',
      body: 'His letter is what got\nSeverian the post.'
    },
    claw: {
      x: 640,
      y: 230,
      label: 'CLAW',
      sub: 'private obligation',
      cite: 'throughout',
      body: 'Sits outside every chain of\nauthority. Unasked for, undischarged.'
    },
    cyriaca: {
      x: 260,
      y: 500,
      label: 'Cyriaca',
      sub: 'condemned',
      cite: '§III',
      body: 'Severian frees her instead of\nexecuting. Becomes his crime.'
    },
    dorcas: {
      x: 540,
      y: 500,
      label: 'Dorcas',
      sub: 'leaves him',
      cite: '§II',
      body: 'Breaks down by the cistern;\nleaves for Nessus.'
    }
  }
  const edges = [
    ['autarch', 'archon', 'appoints'],
    ['archon', 'severian', 'commands'],
    ['palaemon', 'severian', 'letter'],
    ['severian', 'cyriaca', 'spares'],
    ['severian', 'dorcas', 'loses'],
    ['claw', 'severian', 'weighs upon']
  ]
  return (
    <Canvas w={800} h={560}>
      <Label x={40} y={32} size={FONT_SMALL}>
        AUTHORITY WEB · §I
      </Label>
      {edges.map(([a, b, rel], i) => (
        <g key={i}>
          <line
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_SECONDARY}
            strokeDasharray={a === 'claw' ? '3 3' : null}
          />
          <text
            x={(nodes[a].x + nodes[b].x) / 2}
            y={(nodes[a].y + nodes[b].y) / 2 - 4}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
            letterSpacing={LS_LABEL}
          >
            {rel}
          </text>
        </g>
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
            r={k === 'severian' ? 12 : 8}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={k === 'severian' ? STROKE_EMPHASIS : STROKE_PRIMARY}
          />
          <text
            x={n.x}
            y={n.y + (k === 'severian' ? 28 : 22)}
            fill={FG}
            fontSize={k === 'severian' ? FONT_LABEL : FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_OPEN}
          >
            {n.label}
          </text>
          <text
            x={n.x}
            y={n.y + (k === 'severian' ? 44 : 38)}
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

// III.01.4 - Structure Diagram (§I)
export function Ch01StructureDiagram() {
  const scenes = [
    { id: 1, label: "Dorcas's breakdown", cite: '§1', mood: 0.25 },
    { id: 2, label: 'Vincula management', cite: '§2', mood: 0.4 },
    { id: 3, label: 'The jacal · unused Claw', cite: '§3', mood: 0.55 },
    { id: 4, label: 'Archon · invitation', cite: '§4', mood: 0.5 },
    { id: 5, label: 'Ridotto · Cyriaca', cite: '§5', mood: 0.6 }
  ]
  return (
    <Canvas w={800} h={360}>
      <Label x={40} y={32} size={FONT_SMALL}>
        SECTION I · FIVE SCENES
      </Label>
      {scenes.map((s, i) => {
        const x = 80 + i * 150
        return (
          <g key={i}>
            <rect
              x={x - 60}
              y={120}
              width={120}
              height={66}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={x}
              y={108}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              letterSpacing={LS_TITLE}
              opacity={OPACITY.dim}
            >
              {`§${s.id}`}
            </text>
            <text
              x={x}
              y={150}
              fill={FG}
              fontSize={FONT_LABEL}
              textAnchor="middle"
              letterSpacing={LS_LABEL}
            >
              {s.label}
            </text>
            <text
              x={x}
              y={172}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              {s.cite}
            </text>
            {i < scenes.length - 1 && (
              <line
                x1={x + 60}
                y1={153}
                x2={x + 90}
                y2={153}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
            )}
          </g>
        )
      })}
      <text
        x={40}
        y={240}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        ARC SHAPE
      </text>
      <text x={40} y={258} fill={FG} fontSize={FONT_LABEL}>
        descent into fracture → pivot at the jacal → return through ceremony
      </text>
      <text x={40} y={278} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        The unused Claw is the section's hinge: Severian could have healed Dorcas at §3.
      </text>
    </Canvas>
  )
}

// III.02.1 - Emotional Arc (§II)
export function Ch02EmotionalArc() {
  const beats = [
    { x: 0, y: 0.35, label: 'Dorcas leaves' },
    { x: 1.5, y: 0.6, label: 'Cyriaca · ridotto' },
    { x: 3, y: 0.7, label: 'Eros' },
    { x: 4.5, y: 0.5, label: 'jacal healing' },
    { x: 6, y: 0.3, label: 'fire breaks out' },
    { x: 7, y: 0.15, label: 'Salamander' },
    { x: 8, y: 0.4, label: 'flight' }
  ]
  return <ArcChart beats={beats} title="EMOTIONAL ARC · §II - IX" />
}

// III.02.2 - Lost Archives Cosmogony
export function LostArchivesCosmogony() {
  const stages = [
    {
      id: 1,
      label: 'BARGAIN',
      cite: '§1',
      body: 'Humanity bargains away its\nanimal nature to reach the stars.'
    },
    { id: 2, label: 'WORSHIP', cite: '§2', body: 'The machines are loved\ninstead of destroyed.' },
    {
      id: 3,
      label: 'COLLAPSE',
      cite: '§3',
      body: 'The empire falls.\nUrth is left alone with its dying sun.'
    },
    {
      id: 4,
      label: 'NEW SUN',
      cite: '§4',
      body: 'The Conciliator is prophesied\nto return as a star.'
    }
  ]
  return (
    <Canvas w={800} h={420}>
      <Label x={40} y={32} size={FONT_SMALL}>
        CYRIACA'S UNCLE'S COSMOGONY · LOST ARCHIVES · §II
      </Label>
      {stages.map((s, i) => {
        const x = 80 + i * 170
        return (
          <g key={i}>
            <rect
              x={x}
              y={120}
              width={130}
              height={150}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <text
              x={x + 12}
              y={140}
              fill={FG}
              fontSize={FONT_SMALL}
              opacity={OPACITY.dim}
              letterSpacing={LS_TITLE}
            >
              STAGE {s.id}
            </text>
            <text x={x + 12} y={162} fill={FG} fontSize={FONT_TEX} letterSpacing={LS_UPPER}>
              {s.label}
            </text>
            {s.body.split('\n').map((ln, j) => (
              <text
                key={j}
                x={x + 12}
                y={186 + j * 14}
                fill={FG}
                fontSize={FONT_SMALL}
                opacity={OPACITY.dim}
              >
                {ln}
              </text>
            ))}
            {i < stages.length - 1 && (
              <g>
                <line
                  x1={x + 130}
                  y1={195}
                  x2={x + 170}
                  y2={195}
                  stroke={FG}
                  strokeOpacity={OPACITY.fg}
                  strokeWidth={STROKE_SECONDARY}
                />
                <polyline
                  points={`${x + 162},${190} ${x + 170},${195} ${x + 162},${200}`}
                  fill="none"
                  stroke={FG}
                  strokeOpacity={OPACITY.fg}
                  strokeWidth={STROKE_SECONDARY}
                />
              </g>
            )}
          </g>
        )
      })}
      <text
        x={40}
        y={340}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        PHYSICAL RESIDUE
      </text>
      <text x={40} y={356} fill={FG} fontSize={FONT_LABEL}>
        the lost archives - Cyriaca's vault - is what's left.
      </text>
    </Canvas>
  )
}

// III.02.3 - Claw Dual Failure
export function ClawDualFailure() {
  return (
    <Canvas w={800} h={460}>
      <Label x={40} y={32} size={FONT_SMALL}>
        THE SALAMANDER · DUAL FAILURE · §IX
      </Label>
      <g>
        <circle
          cx={400}
          cy={230}
          r="44"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={400}
          y={228}
          fill={FG}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          SALAMANDER
        </text>
        <text
          x={400}
          y={246}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          heat-flower
        </text>
      </g>
      <g>
        <rect
          x={80}
          y={180}
          width={140}
          height={84}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={150}
          y={202}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          TERMINUS EST
        </text>
        <text
          x={150}
          y={222}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          discarded
        </text>
        <text
          x={150}
          y={244}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          "useless against this"
        </text>
      </g>
      <line
        x1={220}
        y1={222}
        x2={356}
        y2={222}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeDasharray="3 3"
      />
      <text
        x={290}
        y={216}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        fails
      </text>
      <g>
        <rect
          x={580}
          y={180}
          width={140}
          height={84}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={650}
          y={202}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          CLAW
        </text>
        <text
          x={650}
          y={222}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          raised aloft
        </text>
        <text
          x={650}
          y={244}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          "last resort"
        </text>
      </g>
      <line
        x1={580}
        y1={222}
        x2={444}
        y2={222}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeDasharray="3 3"
      />
      <text
        x={512}
        y={216}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        fails
      </text>
      <line
        x1={400}
        y1={274}
        x2={400}
        y2={340}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <polyline
        points="394,332 400,340 406,332"
        fill="none"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
      />
      <rect
        x={300}
        y={340}
        width={200}
        height={56}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={400}
        y={362}
        fill={FG}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        letterSpacing={LS_UPPER}
      >
        FALLS THROUGH THE FLOOR
      </text>
      <text
        x={400}
        y={380}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        killed by its own fire - not by sword, not by miracle
      </text>
    </Canvas>
  )
}

// III.02.4 - Salamander Anatomy
export function SalamanderAnatomy() {
  return (
    <Canvas w={800} h={480}>
      <Hatch id="sal-heat" angle={45} gap={3} opacity={0.1} />
      <Label x={40} y={32} size={FONT_SMALL}>
        SALAMANDER · A REPTILIAN FLOWER OF GLOWING GAUZE · §IX
      </Label>
      <g transform="translate(400,260)">
        <Rays cx={0} cy={0} r0={92} r1={170} count={36} opacity={0.4} strokeWidth={STROKE_HAIR} />
        {[110, 134, 162].map((rr, i) => (
          <circle
            key={i}
            cx={0}
            cy={0}
            r={rr}
            fill="none"
            stroke={FG}
            strokeOpacity={0.18 - i * 0.04}
            strokeWidth={STROKE_HAIR}
            strokeDasharray="3 4"
          />
        ))}
      </g>
      <g transform="translate(400,260)">
        <path
          d="M 0 -80 Q 30 -50 50 0 Q 60 50 30 80 Q -10 90 -50 60 Q -80 20 -60 -30 Q -30 -70 0 -80 Z"
          fill="url(#sal-heat)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {Array.from({ length: 14 }).map((_, i) => {
          const a = (i / 14) * Math.PI * 2
          return (
            <line
              key={i}
              x1={Math.cos(a) * 25}
              y1={Math.sin(a) * 25}
              x2={Math.cos(a) * 70}
              y2={Math.sin(a) * 70}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
          )
        })}
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2 + Math.PI / 6
          const tx = Math.cos(a) * 88,
            ty = Math.sin(a) * 88
          return (
            <g key={i}>
              <path
                d={`M ${Math.cos(a) * 50} ${Math.sin(a) * 50}
                        Q ${tx + Math.cos(a + 0.4) * 8} ${ty + Math.sin(a + 0.4) * 8}
                          ${Math.cos(a) * 110 + Math.cos(a + 0.6) * 8} ${Math.sin(a) * 110 + Math.sin(a + 0.6) * 8}`}
                fill="none"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              <path
                d={`M ${Math.cos(a) * 50} ${Math.sin(a) * 50}
                        Q ${tx + Math.cos(a - 0.4) * 8} ${ty + Math.sin(a - 0.4) * 8}
                          ${Math.cos(a) * 110 + Math.cos(a - 0.6) * 8} ${Math.sin(a) * 110 + Math.sin(a - 0.6) * 8}`}
                fill="none"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              <line
                x1={Math.cos(a) * 50}
                y1={Math.sin(a) * 50}
                x2={Math.cos(a) * 115}
                y2={Math.sin(a) * 115}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_HAIR}
              />
              <polygon
                points={`${Math.cos(a) * 110 - 3} ${Math.sin(a) * 110}
                                ${Math.cos(a) * 122} ${Math.sin(a) * 122}
                                ${Math.cos(a) * 110 + 3} ${Math.sin(a) * 110}`}
                fill={FG}
                opacity={OPACITY.fg}
              />
            </g>
          )
        })}
        <ellipse
          cx={-8}
          cy={-4}
          rx={4}
          ry={2}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_HAIR}
        />
        <ellipse
          cx={8}
          cy={-4}
          rx={4}
          ry={2}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_HAIR}
        />
        <circle cx={-8} cy={-4} r="1" fill={FG} opacity={OPACITY.fg} />
        <circle cx={8} cy={-4} r="1" fill={FG} opacity={OPACITY.fg} />
      </g>
      {[
        {
          from: [316, 200],
          to: [120, 100],
          label: 'HEAT WITHOUT WARMTH',
          sub: 'thermally cold to touch'
        },
        {
          from: [330, 256],
          to: [120, 220],
          label: 'NEARLY BLIND ON URTH',
          sub: 'evolved for solar light'
        },
        {
          from: [326, 320],
          to: [120, 360],
          label: 'SOLAR PARASITE',
          sub: 'feeds on the dying sun'
        },
        {
          from: [484, 200],
          to: [680, 100],
          label: 'DRAWN TO THE CLAW',
          sub: 'follows it across the room'
        },
        {
          from: [490, 256],
          to: [680, 220],
          label: 'SIX BURNING LIMBS',
          sub: 'flame-ribbon appendages'
        },
        {
          from: [480, 320],
          to: [680, 360],
          label: 'KILLS BY ITS OWN FALL',
          sub: 'through the wooden floor'
        }
      ].map((lbl, i) => (
        <g key={i}>
          <line
            x1={lbl.from[0]}
            y1={lbl.from[1]}
            x2={lbl.to[0]}
            y2={lbl.to[1]}
            stroke={FG}
            strokeOpacity={OPACITY.faint}
            strokeWidth={STROKE_HAIR}
          />
          <circle cx={lbl.from[0]} cy={lbl.from[1]} r={1.5} fill={FG} opacity={OPACITY.dim} />
          <text
            x={lbl.to[0]}
            y={lbl.to[1] - 2}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor={lbl.to[0] < 400 ? 'start' : 'end'}
            letterSpacing={LS_MEDIUM}
          >
            {lbl.label}
          </text>
          <text
            x={lbl.to[0]}
            y={lbl.to[1] + 12}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor={lbl.to[0] < 400 ? 'start' : 'end'}
            opacity={OPACITY.dim}
          >
            {lbl.sub}
          </text>
        </g>
      ))}
      <text
        x={400}
        y={444}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        ANATOMY FROM §IX - NOT FROM TRADITION
      </text>
    </Canvas>
  )
}

// III.03.1 - Emotional Arc (§XIII)
export function Ch03EmotionalArc() {
  const beats = [
    { x: 0, y: 0.45, label: 'leaving Thrax' },
    { x: 1.5, y: 0.4, label: 'highway through mtns' },
    { x: 3, y: 0.65, label: 'lap-town vendor' },
    { x: 4.5, y: 0.5, label: 'climb the cliff' },
    { x: 6, y: 0.8, label: 'star-stones · cosmic' },
    { x: 7.5, y: 0.4, label: 'descent to fields' }
  ]
  return <ArcChart beats={beats} title="EMOTIONAL ARC · §XIII - XIV" />
}

// III.03.2 - Severian Relationship Web (§XIII)
export function SeverianRelationshipWeb() {
  const [tip, setTip] = useTooltip()
  const nodes = {
    sev: { x: 400, y: 280, label: 'SEVERIAN', sub: '' },
    dorcas: {
      x: 140,
      y: 160,
      label: 'Dorcas',
      sub: 'left in Thrax',
      cite: '§II',
      body: 'He carries her absence north.'
    },
    cyriaca: {
      x: 260,
      y: 80,
      label: 'Cyriaca',
      sub: 'freed',
      cite: '§III',
      body: 'Her freeing put him in flight.'
    },
    thecla: {
      x: 140,
      y: 380,
      label: 'Thecla',
      sub: 'within',
      cite: '§VI Bk II',
      body: 'Still inside; speaks at intervals.'
    },
    archon: {
      x: 560,
      y: 80,
      label: 'Abdiesus',
      sub: 'sought him',
      cite: '§III',
      body: 'Sends Mamillian after Severian.'
    },
    claw: {
      x: 660,
      y: 200,
      label: 'CLAW',
      sub: 'kept hidden',
      cite: 'throughout',
      body: 'In the sabretache; flares\nat odd moments.'
    },
    smallSev: {
      x: 660,
      y: 400,
      label: 'small Severian',
      sub: 'just ahead',
      cite: '§XV–XIX',
      body: 'Will be encountered\nin the next section cluster.'
    }
  }
  const edges = [
    ['sev', 'dorcas', 'dash'],
    ['sev', 'cyriaca', 'dash'],
    ['sev', 'thecla', 'dash'],
    ['sev', 'archon', 'solid'],
    ['sev', 'claw', 'solid'],
    ['sev', 'smallSev', 'solid']
  ]
  return (
    <Canvas w={800} h={520}>
      <Label x={40} y={32} size={FONT_SMALL}>
        RELATIONSHIP WEB · §XIII
      </Label>
      {edges.map(([a, b, kind], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray={kind === 'dash' ? '4 4' : null}
        />
      ))}
      {Object.entries(nodes).map(([k, n]) => (
        <g
          key={k}
          style={{ cursor: n.cite ? 'pointer' : 'default' }}
          onMouseEnter={
            n.cite
              ? () => setTip({ x: n.x, y: n.y, title: n.label, body: n.body, cite: n.cite })
              : null
          }
          onMouseLeave={() => setTip(null)}
        >
          <circle
            cx={n.x}
            cy={n.y}
            r={k === 'sev' ? 12 : 8}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={k === 'sev' ? STROKE_EMPHASIS : STROKE_SECONDARY}
          />
          <text
            x={n.x}
            y={n.y + (k === 'sev' ? 28 : 22)}
            fill={FG}
            fontSize={k === 'sev' ? FONT_LABEL : FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_LABEL}
          >
            {n.label}
          </text>
          {n.sub && (
            <text
              x={n.x}
              y={n.y + (k === 'sev' ? 44 : 36)}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              {n.sub}
            </text>
          )}
          <circle cx={n.x} cy={n.y} r="22" fill="transparent" />
        </g>
      ))}
      <text
        x={40}
        y={500}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        SOLID = ACTION · DASHED = MEMORY / OBLIGATION
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// III.03.3 - Cliff Strata
export function CliffStrata() {
  const strata = [
    { y: 80, label: 'I · LIMESTONE BAND', sub: 'pale, friable' },
    { y: 160, label: 'II · IRON-RED LAYER', sub: 'shows in cracks' },
    { y: 240, label: 'III · BURIED CITY', sub: "the lap-town's foundations" },
    { y: 320, label: 'IV · COLUMN OF SHALE', sub: 'easy footing' },
    { y: 400, label: 'V · BASE GRANITE', sub: 'fields below' }
  ]
  return (
    <Canvas w={800} h={500}>
      <Label x={40} y={32} size={FONT_SMALL}>
        CLIFF STRATA · §XIII · PAGES 21–24
      </Label>
      {strata.map((s, i) => (
        <g key={i}>
          <rect
            x={120}
            y={s.y}
            width={300}
            height={70}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={i === 2 ? STROKE_EMPHASIS : STROKE_GUIDE}
          />
          <text x={132} y={s.y + 22} fill={FG} fontSize={FONT_LABEL} letterSpacing={LS_MEDIUM}>
            {s.label}
          </text>
          <text x={132} y={s.y + 42} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
            {s.sub}
          </text>
          {Array.from({ length: 14 }).map((_, j) => (
            <line
              key={j}
              x1={140 + j * 20}
              y1={s.y + 50}
              x2={152 + j * 20}
              y2={s.y + 60}
              stroke={FG}
              strokeOpacity={OPACITY.faint * 0.6}
              strokeWidth={STROKE_HAIR}
            />
          ))}
        </g>
      ))}
      <path
        d="M 460 100 Q 480 200 510 280 Q 480 380 460 460"
        fill="none"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <circle cx={460} cy={100} r="5" fill={FG} />
      <text x={520} y={100} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        start
      </text>
      <circle cx={460} cy={460} r="5" fill={FG} />
      <text x={520} y={460} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        fields
      </text>
      <text
        x={580}
        y={272}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        SEVERIAN'S DESCENT
      </text>
    </Canvas>
  )
}

// III.04.1 - Emotional Arc (§XV–XIX)
export function Ch04EmotionalArc() {
  const beats = [
    { x: 0, y: 0.7, label: "Casdoe's hearth" },
    { x: 1, y: 0.6, label: 'Becan returns' },
    { x: 2, y: 0.4, label: 'the false Becan' },
    { x: 3, y: 0.15, label: 'alzabo at the door' },
    { x: 4, y: 0.1, label: 'father killed' },
    { x: 5, y: 0.3, label: 'flight with the boy' },
    { x: 6, y: 0.5, label: 'analept' },
    { x: 7, y: 0.2, label: 'boy dies' }
  ]
  return <ArcChart beats={beats} title="EMOTIONAL ARC · §XV - XIX" />
}

// III.04.2 - Casdoe House Character Web
export function CasdoeHouseCharacterWeb() {
  const [tip, setTip] = useTooltip()
  const nodes = {
    casdoe: {
      x: 400,
      y: 120,
      label: 'Casdoe',
      sub: 'mother',
      cite: '§XV',
      body: 'Receives Severian.\nHer husband Becan was lost.'
    },
    becan: {
      x: 600,
      y: 200,
      label: 'Becan',
      sub: 'dead · alzabo voice',
      cite: '§XVI',
      body: 'Speaks through the alzabo;\nasks to be let in.'
    },
    grand: {
      x: 200,
      y: 200,
      label: 'old man',
      sub: "Casdoe's father",
      cite: '§XVI',
      body: 'Killed when the alzabo\nbreaks in.'
    },
    boy: {
      x: 400,
      y: 260,
      label: 'Severian (small)',
      sub: 'son',
      cite: '§XV–XIX',
      body: "Severian's namesake; he\nadopts him after Casdoe dies."
    },
    sev: {
      x: 400,
      y: 400,
      label: 'SEVERIAN',
      sub: 'guest',
      cite: '§XV',
      body: 'Stays the night;\nfights the alzabo at dawn.'
    },
    alzabo: {
      x: 680,
      y: 340,
      label: 'ALZABO',
      sub: 'remembers Becan',
      cite: '§XVI–XVII',
      body: 'Bear-like; remembers every-\nthing it has eaten.'
    }
  }
  const edges = [
    ['casdoe', 'becan', 'dash'],
    ['casdoe', 'grand', 'solid'],
    ['casdoe', 'boy', 'solid'],
    ['boy', 'grand', 'solid'],
    ['becan', 'alzabo', 'dash'],
    ['alzabo', 'grand', 'solid'],
    ['sev', 'casdoe', 'solid'],
    ['sev', 'boy', 'solid'],
    ['sev', 'alzabo', 'solid']
  ]
  return (
    <Canvas w={800} h={480}>
      <Label x={40} y={32} size={FONT_SMALL}>
        CASDOE HOUSE · §XV–XIX
      </Label>
      {edges.map(([a, b, kind], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray={kind === 'dash' ? '4 4' : null}
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
            r={k === 'sev' || k === 'alzabo' ? 12 : 8}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={k === 'sev' ? STROKE_EMPHASIS : STROKE_SECONDARY}
          />
          <text
            x={n.x}
            y={n.y + (k === 'sev' || k === 'alzabo' ? 28 : 22)}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_LABEL}
          >
            {n.label}
          </text>
          <text
            x={n.x}
            y={n.y + (k === 'sev' || k === 'alzabo' ? 42 : 36)}
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
      <text
        x={40}
        y={450}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        SOLID = LIVING / ACTION · DASHED = ABSENCE / VOICE
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// III.04.3 - Alzabo Voice Mechanism
export function AlzaboVoiceMechanism() {
  const top = [
    { x: 140, label: 'EAT', sub: "alzabo devours\na man's flesh" },
    { x: 380, label: 'STORE', sub: 'memories accrue\ninside its skull' },
    { x: 620, label: 'SPEAK', sub: 'voice mimics, asks\nat the door' }
  ]
  const bottom = [
    { x: 140, label: 'TAKE', sub: 'analept administered' },
    { x: 380, label: 'INTEGRATE', sub: "the eaten's memory\nfills the live mind" },
    { x: 620, label: 'SPEAK AS', sub: 'the live mind voices\nthe absorbed one' }
  ]
  return (
    <Canvas w={800} h={460}>
      <Label x={40} y={32} size={FONT_SMALL}>
        ALZABO MECHANISM (TOP) · ANALEPT MECHANISM (BOTTOM)
      </Label>
      {[
        [top, 130, 'ALZABO'],
        [bottom, 300, 'ANALEPT']
      ].map(([stages, y, label], k) => (
        <g key={k}>
          <text
            x={40}
            y={y - 10}
            fill={FG}
            fontSize={FONT_SMALL}
            opacity={OPACITY.dim}
            letterSpacing={LS_TITLE}
          >
            {label}
          </text>
          {stages.map((s, i) => (
            <g key={i}>
              <rect
                x={s.x - 80}
                y={y}
                width={160}
                height={70}
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={s.x}
                y={y + 22}
                fill={FG}
                fontSize={FONT_LABEL}
                textAnchor="middle"
                letterSpacing={LS_MEDIUM}
              >
                {s.label}
              </text>
              {s.sub.split('\n').map((ln, j) => (
                <text
                  key={j}
                  x={s.x}
                  y={y + 44 + j * 14}
                  fill={FG}
                  fontSize={FONT_SMALL}
                  textAnchor="middle"
                  opacity={OPACITY.dim}
                >
                  {ln}
                </text>
              ))}
              {i < stages.length - 1 && (
                <g>
                  <line
                    x1={s.x + 80}
                    y1={y + 35}
                    x2={stages[i + 1].x - 80}
                    y2={y + 35}
                    stroke={FG}
                    strokeOpacity={OPACITY.fg}
                    strokeWidth={STROKE_SECONDARY}
                  />
                  <polyline
                    points={`${stages[i + 1].x - 88},${y + 30} ${stages[i + 1].x - 80},${y + 35} ${stages[i + 1].x - 88},${y + 40}`}
                    fill="none"
                    stroke={FG}
                    strokeOpacity={OPACITY.fg}
                  />
                </g>
              )}
            </g>
          ))}
        </g>
      ))}
      <text
        x={400}
        y={400}
        fill={FG}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        opacity={OPACITY.fg}
        letterSpacing={LS_UPPER}
      >
        a mind, or only a voice?
      </text>
      <text
        x={400}
        y={420}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        the volume asks of both mechanisms exactly this question
      </text>
    </Canvas>
  )
}

// III.05.1 - Typhon Mountain Ascent
export function TyphonMountainAscent() {
  const [tip, setTip] = useTooltip()
  const stages = [
    {
      y: 440,
      x: 400,
      label: 'JUNGLE BASE',
      cite: '§XXII',
      body: 'Foliage smothers the highway.\nSeverian climbs upward.'
    },
    {
      y: 380,
      x: 380,
      label: 'THE HIGHWAY',
      cite: '§XXII',
      body: "Built ages ago - its scale\nspeaks of the past's reach."
    },
    {
      y: 300,
      x: 360,
      label: 'THE RING',
      cite: '§XXIII',
      body: "Wedding ring on a giant's finger.\nDeath, vast and ornamented."
    },
    {
      y: 230,
      x: 330,
      label: 'THE LAP-TOWN',
      cite: '§XXIII',
      body: "A whole town on the giant's lap.\nPower, lived in."
    },
    {
      y: 140,
      x: 380,
      label: 'THE EYES',
      cite: '§XXIV',
      body: "Typhon's offer: rule with me.\nTyranny made visible."
    }
  ]
  return (
    <Canvas w={800} h={560}>
      <Hatch id="ty-stone" angle={20} gap={5} opacity={0.13} />
      <Hatch id="ty-jungle" angle={70} gap={4} opacity={0.1} />
      <Label x={40} y={32} size={FONT_SMALL}>
        TYPHON · CARVED MOUNTAIN · §XXII–XXVI
      </Label>

      <Stipple x={40} y={50} w={720} h={120} n={60} seed={211} opacity={0.3} r={0.5} />

      <path
        d="M 200 500 L 200 380 L 230 320 L 250 290 L 280 260 L 300 220 L 290 200 L 295 175 L 320 152 L 350 140 L 365 120 L 380 110 L 410 110 L 430 116 L 440 130 L 442 150 L 432 168 L 430 188 L 442 200 L 446 224 L 438 244 L 422 254 L 416 274 L 426 290 L 426 312 L 440 326 L 446 350 L 440 380 L 444 410 L 456 440 L 480 500 Z"
        fill="url(#ty-stone)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />

      <path
        d="M 360 145 Q 380 138 410 142"
        fill="none"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_GUIDE}
      />
      <ellipse
        cx={395}
        cy={158}
        rx={14}
        ry={6}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <circle cx={395} cy={158} r="3" fill={FG} opacity={OPACITY.fg} />
      <Rays cx={395} cy={158} r0={5} r1={14} count={10} opacity={0.5} strokeWidth={STROKE_HAIR} />
      <ellipse
        cx={420}
        cy={156}
        rx={8}
        ry={4}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_SECONDARY}
      />
      <path
        d="M 440 175 L 446 200 L 442 210 L 438 200 Z"
        fill={FG}
        fillOpacity={0.1}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_GUIDE}
      />
      <path
        d="M 426 222 Q 436 228 442 224 Q 438 232 432 230 Z"
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_GUIDE}
      />
      <path
        d="M 422 234 Q 426 256 416 274"
        fill="none"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_HAIR}
      />

      {[230, 260, 290, 330, 380, 430, 470].map((sy, i) => (
        <path
          key={i}
          d={`M 210 ${sy} Q 280 ${sy + 6} 350 ${sy + 4} Q 420 ${sy + 8} 470 ${sy + 4}`}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.faint * 1.3}
          strokeWidth={STROKE_HAIR}
        />
      ))}

      {Array.from({ length: 60 }).map((_, i) => {
        const rng = srand(33 + i)
        const x = 30 + rng() * 700
        const y = 470 + rng() * 50
        if (x > 200 && x < 480 && y < 510) return null
        const h = 10 + rng() * 14
        return (
          <g key={i}>
            <line
              x1={x}
              y1={y}
              x2={x}
              y2={y - h * 0.4}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
            <path
              d={`M ${x - 6} ${y - h * 0.2} Q ${x} ${y - h} ${x + 6} ${y - h * 0.2} Z`}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
          </g>
        )
      })}

      <path
        d="M 600 510 L 540 460 L 480 410 L 460 360 L 440 310"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_EMPHASIS}
        fill="none"
        strokeDasharray="5 4"
      />
      <text
        x={620}
        y={490}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        THE HIGHWAY
      </text>

      <g>
        <rect
          x={324}
          y={264}
          width={6}
          height={10}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_HAIR}
        />
        <rect
          x={332}
          y={262}
          width={4}
          height={12}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_HAIR}
        />
        <rect
          x={338}
          y={266}
          width={6}
          height={8}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_HAIR}
        />
        <rect
          x={346}
          y={264}
          width={4}
          height={10}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_HAIR}
        />
      </g>

      <g>
        <ellipse
          cx={300}
          cy={250}
          rx={12}
          ry={4}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <ellipse
          cx={300}
          cy={251}
          rx={8}
          ry={2}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_HAIR}
        />
      </g>

      <path
        d="M 470 510 Q 460 460 440 420 Q 410 380 380 340 Q 350 300 360 270 Q 380 240 390 200 L 395 162"
        fill="none"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <circle cx={395} cy={162} r="4" fill={FG} />
      <g transform="translate(395 162)">
        <circle cx={0} cy={0} r="2.4" fill={FG} />
        <line x1={0} y1={2} x2={-3} y2={8} stroke={FG} strokeWidth={STROKE_GUIDE} />
        <line x1={0} y1={2} x2={3} y2={8} stroke={FG} strokeWidth={STROKE_GUIDE} />
      </g>

      {stages.map((s, i) => (
        <g
          key={i}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ x: s.x + 200, y: s.y, title: s.label, body: s.body, cite: s.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <line
            x1={s.x}
            y1={s.y}
            x2={580}
            y2={s.y}
            stroke={FG}
            strokeOpacity={OPACITY.faint}
            strokeWidth={STROKE_HAIR}
            strokeDasharray="2 4"
          />
          <circle cx={s.x} cy={s.y} r={3} fill={FG} opacity={OPACITY.fg} />
          <text x={596} y={s.y - 6} fill={FG} fontSize={FONT_LABEL} letterSpacing={LS_MEDIUM}>
            {s.label}
          </text>
          <text x={596} y={s.y + 8} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
            {s.cite}
          </text>
        </g>
      ))}

      <text
        x={40}
        y={540}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        SEVERIAN CLIMBS THE BODY OF A SCULPTED GIANT
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// III.05.2 - Typhon / Piaton Duality
export function TyphonPiatonDuality() {
  return (
    <Canvas w={800} h={460}>
      <Label x={40} y={32} size={FONT_SMALL}>
        TWO HEADS ON ONE BODY · §XXIV–XXVI
      </Label>
      <rect
        x={300}
        y={240}
        width={200}
        height={160}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={400}
        y={310}
        fill={FG}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        letterSpacing={LS_UPPER}
      >
        SHARED BODY
      </text>
      <text
        x={400}
        y={332}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        (Piaton's, originally)
      </text>
      <text
        x={400}
        y={368}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        HEART · PIATON'S
      </text>
      <text
        x={400}
        y={386}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        graft never completed
      </text>
      <g>
        <circle
          cx={280}
          cy={160}
          r="56"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={280}
          y={156}
          fill={FG}
          fontSize={FONT_TITLE}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          TYPHON
        </text>
        <text
          x={280}
          y={176}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          master · the will
        </text>
        <line
          x1={300}
          y1={210}
          x2={350}
          y2={240}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
      </g>
      <g>
        <circle
          cx={520}
          cy={160}
          r="56"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={520}
          y={156}
          fill={FG}
          fontSize={FONT_TITLE}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          PIATON
        </text>
        <text
          x={520}
          y={176}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          slave · the heart
        </text>
        <line
          x1={500}
          y1={210}
          x2={450}
          y2={240}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
      </g>
      <text
        x={400}
        y={60}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        SEVERIAN'S NOSE-STRIKE
      </text>
      <line
        x1={400}
        y1={70}
        x2={400}
        y2={108}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_SECONDARY}
      />
      <polyline
        points="394,100 400,108 406,100"
        fill="none"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
      />
      <line
        x1={400}
        y1={108}
        x2={520}
        y2={140}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_SECONDARY}
      />
      <text x={544} y={110} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        kills Piaton, not Typhon -
      </text>
      <text x={544} y={124} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        the heart fails together.
      </text>
    </Canvas>
  )
}

// III.05.3 - Claw Authority Web
export function Ch06ClawAuthorityWeb() {
  return (
    <Canvas w={800} h={460}>
      <Label x={40} y={32} size={FONT_SMALL}>
        CLAW'S AUTHORITY · §XXIV vs XXVI
      </Label>
      <g>
        <circle
          cx={400}
          cy={230}
          r="48"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={400}
          y={228}
          fill={FG}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          CLAW
        </text>
        <text
          x={400}
          y={246}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          Conciliator's
        </text>
      </g>
      <g>
        <rect
          x={80}
          y={170}
          width={160}
          height={120}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={160}
          y={194}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          §XXIV
        </text>
        <text x={160} y={222} fill={FG} fontSize={FONT_LABEL} textAnchor="middle">
          REFUSES
        </text>
        <text
          x={160}
          y={246}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          to revive the boy
        </text>
        <text
          x={160}
          y={262}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          on demand
        </text>
      </g>
      <line
        x1={240}
        y1={230}
        x2={350}
        y2={230}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeDasharray="3 3"
      />
      <g>
        <rect
          x={560}
          y={170}
          width={160}
          height={120}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={640}
          y={194}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          §XXVI
        </text>
        <text x={640} y={222} fill={FG} fontSize={FONT_LABEL} textAnchor="middle">
          COMMANDS
        </text>
        <text
          x={640}
          y={246}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          cataphracts salute
        </text>
        <text
          x={640}
          y={262}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          (Typhon's own)
        </text>
      </g>
      <line
        x1={560}
        y1={230}
        x2={448}
        y2={230}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeDasharray="3 3"
      />
      <text
        x={400}
        y={370}
        fill={FG}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        letterSpacing={LS_UPPER}
      >
        not for private grief
      </text>
      <text
        x={400}
        y={390}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        the Claw serves institutional, cosmic purposes
      </text>
    </Canvas>
  )
}

// III.06.1 - Lake Scene Map (Lake Diuturna)
export function LakeSceneMap() {
  const [tip, setTip] = useTooltip()
  const features = [
    {
      id: 'village',
      x: 120,
      y: 380,
      kind: 'rect',
      w: 90,
      h: 50,
      label: 'LAKESHORE',
      cite: '§XXVIII',
      body: "The hetman's village.\nLlibio leads the islanders."
    },
    {
      id: 'castle',
      x: 640,
      y: 200,
      kind: 'rect',
      w: 90,
      h: 80,
      label: 'CASTLE',
      cite: '§XXX–XXXI',
      body: "Baldanders's tower.\nThe castle master is named\nonly on the final page."
    }
  ]
  return (
    <Canvas w={800} h={540}>
      <Label x={40} y={32} size={FONT_SMALL}>
        LAKE DIUTURNA · §XXVIII–XXX
      </Label>
      <Label x={760} y={32} anchor="end" size={FONT_SMALL}>
        N ↑
      </Label>
      <path
        d="M 60 200 Q 200 140 380 160 Q 560 180 740 200 Q 760 280 740 380 Q 600 460 380 440 Q 200 420 60 380 Z"
        fill={FG}
        fillOpacity="0.03"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={400}
        y={300}
        fill={FG}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        LAKE DIUTURNA
      </text>
      {features.map(f => (
        <g
          key={f.id}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ x: f.x, y: f.y, title: f.label, body: f.body, cite: f.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <rect
            x={f.x - f.w / 2}
            y={f.y - f.h / 2}
            width={f.w}
            height={f.h}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <text
            x={f.x}
            y={f.y + 4}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_MEDIUM}
          >
            {f.label}
          </text>
        </g>
      ))}
      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() =>
          setTip({
            x: 420,
            y: 280,
            title: 'FLOATING ISLAND',
            body: 'Reed-island built\nas a defensive movable\nplatform.',
            cite: '§XXIX'
          })
        }
        onMouseLeave={() => setTip(null)}
      >
        <ellipse
          cx={420}
          cy={250}
          rx={70}
          ry={26}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={420}
          y={254}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_MEDIUM}
        >
          FLOATING ISLAND
        </text>
      </g>
      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() =>
          setTip({
            x: 640,
            y: 120,
            title: 'HIERODULE DISK',
            body: 'Floats above the castle\nthroughout.',
            cite: '§XXX'
          })
        }
        onMouseLeave={() => setTip(null)}
      >
        <ellipse
          cx={640}
          cy={120}
          rx={48}
          ry={8}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={640}
          y={100}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
          letterSpacing={LS_MEDIUM}
        >
          HIERODULE DISK
        </text>
      </g>
      <path
        d="M 140 380 Q 280 320 360 280 Q 440 240 580 220"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_SECONDARY}
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x={300}
        y={350}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        FLEET → NIGHT ATTACK
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// III.06.2 - Authority Web (§VII / lake)
export function Ch07AuthorityWeb() {
  const [tip, setTip] = useTooltip()
  const nodes = {
    master: {
      x: 680,
      y: 120,
      label: 'castle master',
      sub: 'unnamed · offstage',
      cite: '§XXXI',
      body: 'Named only on the final\npage - Baldanders himself.'
    },
    zambdas: {
      x: 540,
      y: 240,
      label: 'Zambdas',
      sub: 'proxy commander',
      cite: '§XXVIII',
      body: "Runs the section on\nthe master's behalf."
    },
    sev: {
      x: 400,
      y: 360,
      label: 'SEVERIAN',
      sub: 'prisoner → commander',
      cite: '§XXVIII',
      body: 'Enters drugged; ends\nleading the island fleet.'
    },
    pia: {
      x: 200,
      y: 280,
      label: 'Pia',
      sub: 'smuggler',
      cite: '§XXVIII',
      body: 'Smuggles Terminus Est\nback to him.'
    },
    llibio: {
      x: 120,
      y: 420,
      label: 'Llibio',
      sub: 'hetman',
      cite: '§XXIX',
      body: 'Trusts a stranger with\na hundred warriors.'
    }
  }
  const edges = [
    ['master', 'zambdas', 'through'],
    ['zambdas', 'sev', 'holds'],
    ['pia', 'sev', 'releases'],
    ['sev', 'llibio', 'leads']
  ]
  return (
    <Canvas w={800} h={500}>
      <Label x={40} y={32} size={FONT_SMALL}>
        AUTHORITY WEB · §VII (LAKE)
      </Label>
      {edges.map(([a, b, rel], i) => (
        <g key={i}>
          <line
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_SECONDARY}
          />
          <text
            x={(nodes[a].x + nodes[b].x) / 2}
            y={(nodes[a].y + nodes[b].y) / 2 - 4}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
            letterSpacing={LS_LABEL}
          >
            {rel}
          </text>
        </g>
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
            r={k === 'sev' ? 12 : 8}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={k === 'sev' ? STROKE_EMPHASIS : STROKE_PRIMARY}
            strokeDasharray={k === 'master' ? '4 4' : null}
          />
          <text
            x={n.x}
            y={n.y + (k === 'sev' ? 28 : 22)}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_LABEL}
          >
            {n.label}
          </text>
          <text
            x={n.x}
            y={n.y + (k === 'sev' ? 44 : 36)}
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

// III.06.3 - Section Timeline (§VII)
export function Ch07ModuleTimeline() {
  const sections = [
    { n: 1, label: 'shore arrival', sub: 'prisoner of Zambdas' },
    { n: 2, label: 'Pia smuggles sword', sub: 'first decision' },
    { n: 3, label: 'leap into the lake', sub: 'the cold turn' },
    { n: 4, label: 'floating island', sub: "Llibio's hall" },
    { n: 5, label: 'night attack', sub: 'fleet commander' }
  ]
  const beats = [
    { i: 1, label: 'Pia' },
    { i: 2, label: 'leap' },
    { i: 4, label: 'fleet' }
  ]
  const moods = [0.2, 0.45, 0.6, 0.55, 0.75]
  const [current, setCurrent] = React.useState(0)
  return (
    <ModuleTimeline
      sections={sections}
      moods={moods}
      beats={beats}
      current={current}
      onScrub={setCurrent}
      width={780}
      height={240}
      topLabel="§VII · FIVE SUB-SECTIONS"
    />
  )
}

// III.07.1 - Lake Castle Geography
export function LakeCastleGeography() {
  const [tip, setTip] = useTooltip()
  const floors = [
    {
      y: 60,
      label: 'ROOF',
      cite: '§XXXI',
      body: 'Open to the sky;\nthe Hierodule disk hovers above.'
    },
    {
      y: 120,
      label: 'CLOUD CHAMBER',
      cite: '§XXXI',
      body: 'Vapours and machines\nused by Baldanders.'
    },
    {
      y: 180,
      label: 'SCARLET BEDCHAMBER',
      cite: '§XXXI',
      body: 'Where Severian sleeps a night\nbefore he understands the master.'
    },
    {
      y: 240,
      label: 'HIERODULE MEETING',
      cite: '§XXXI',
      body: 'Famulimus, Barbatus, Ossipago\nshed their masks here.'
    },
    {
      y: 300,
      label: 'MACHINES',
      cite: '§XXXI',
      body: 'Ground floor - devices\nof a future Baldanders is building.'
    },
    {
      y: 360,
      label: 'DUNGEON',
      cite: '§XXXI',
      body: 'Beneath the floors.\nThe true Claw - black - is found here.'
    }
  ]
  return (
    <Canvas w={800} h={500}>
      <Label x={40} y={32} size={FONT_SMALL}>
        BALDANDERS'S CASTLE · CROSS-SECTION
      </Label>
      <rect
        x={280}
        y={50}
        width={240}
        height={360}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <line
        x1={40}
        y1={420}
        x2={760}
        y2={420}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={40}
        y={440}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        LAKE SURFACE
      </text>
      {floors.map((f, i) => (
        <g
          key={i}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ x: 400, y: f.y, title: f.label, body: f.body, cite: f.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <line
            x1={280}
            y1={f.y + 30}
            x2={520}
            y2={f.y + 30}
            stroke={FG}
            strokeOpacity={tip && tip.title === f.label ? OPACITY.fg : OPACITY.faint}
            strokeWidth={STROKE_GUIDE}
          />
          <text
            x={400}
            y={f.y + 18}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_MEDIUM}
          >
            {f.label}
          </text>
          <text x={540} y={f.y + 22} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
            {f.cite}
          </text>
        </g>
      ))}
      <ellipse
        cx={400}
        cy={36}
        rx={60}
        ry={6}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_SECONDARY}
      />
      <text
        x={400}
        y={28}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        HIERODULE DISK
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// III.07.2 - Hierodule Mask Layers
export function HierodulemaskLayers() {
  const [layer, setLayer] = React.useState(0)
  const labels = [
    {
      title: 'HUMAN MASK',
      body: "What humans see. Hides the\nHierodule's true face so they can\nbe feared and served."
    },
    { title: 'SECOND MASK', body: 'A second face beneath. Also\nuncanny but still mask-like.' },
    {
      title: 'TRUE ALIEN FACE',
      body: 'Revealed only to Severian.\nThe Phoenix Throne depends on\nhumans never seeing this.'
    }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={800} h={420}>
        <Label x={40} y={32} size={FONT_SMALL}>
          FAMULIMUS REMOVES HER MASKS · §XXXI
        </Label>
        {[0, 1, 2].map(L => (
          <g key={L} opacity={L < layer ? 0.15 : L === layer ? 1 : 0.4}>
            <circle
              cx={400}
              cy={220}
              r={130 - L * 36}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={L === layer ? OPACITY.fg : OPACITY.dim}
              strokeWidth={L === layer ? STROKE_EMPHASIS : STROKE_GUIDE}
            />
            <circle
              cx={400 - (50 - L * 14)}
              cy={210}
              r={6 - L * 1.4}
              fill={FG}
              opacity={OPACITY.dim}
            />
            <circle
              cx={400 + (50 - L * 14)}
              cy={210}
              r={6 - L * 1.4}
              fill={FG}
              opacity={OPACITY.dim}
            />
          </g>
        ))}
        <text
          x={400}
          y={370}
          fill={FG}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          {labels[layer].title}
        </text>
        {labels[layer].body.split('\n').map((ln, j) => (
          <text
            key={j}
            x={400}
            y={386 + j * 14}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {ln}
          </text>
        ))}
      </Canvas>
      <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
        <Toggle on={layer === 0} onChange={() => setLayer(0)} label="HUMAN" />
        <Toggle on={layer === 1} onChange={() => setLayer(1)} label="SECOND MASK" />
        <Toggle on={layer === 2} onChange={() => setLayer(2)} label="TRUE FACE" />
      </div>
    </div>
  )
}

// III.07.3 - Claw Transformation
export function ClawTransformation() {
  const [stage, setStage] = React.useState(0)
  const stages = [
    {
      title: 'SAPPHIRE',
      cite: 'Books I–III',
      body: 'Blue gem found in the\nPelerine cathedral. Carried since.'
    },
    { title: 'SHATTERED', cite: '§XXXI', body: 'Falls and breaks open\nin the castle dungeon.' },
    {
      title: 'TRUE CLAW',
      cite: '§XXXI',
      body: 'Black, claw-shaped,\nradiating white light. Found\nwedged between rocks.'
    }
  ]
  const s = stages[stage]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={800} h={400}>
        <Label x={40} y={32} size={FONT_SMALL}>
          CLAW TRANSFORMATION · §XXXI
        </Label>
        <g transform="translate(400,210)">
          {stage === 0 && (
            <g>
              <polygon
                points="0,-50 40,0 0,50 -40,0"
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              <circle cx={0} cy={0} r={6} fill={FG} opacity={OPACITY.dim} />
            </g>
          )}
          {stage === 1 && (
            <g>
              <polyline
                points="-40,0 -20,-30 0,-12 20,-32 40,-8 30,18 8,8 -10,30 -28,12"
                fill="none"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
            </g>
          )}
          {stage === 2 && (
            <g>
              {Array.from({ length: 12 }).map((_, i) => {
                const a = (i / 12) * Math.PI * 2
                return (
                  <line
                    key={i}
                    x1={Math.cos(a) * 30}
                    y1={Math.sin(a) * 30}
                    x2={Math.cos(a) * 70}
                    y2={Math.sin(a) * 70}
                    stroke={FG}
                    strokeOpacity={OPACITY.fg}
                    strokeWidth={STROKE_GUIDE}
                  />
                )
              })}
              <path
                d="M -22 -36 Q 0 -42 16 -10 Q 24 22 0 36 Q -30 30 -22 -36 Z"
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_EMPHASIS}
              />
            </g>
          )}
        </g>
        <text
          x={400}
          y={310}
          fill={FG}
          fontSize={FONT_TEX}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          {s.title}
        </text>
        <text
          x={400}
          y={328}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
          letterSpacing={LS_MEDIUM}
        >
          {s.cite}
        </text>
        {s.body.split('\n').map((ln, j) => (
          <text
            key={j}
            x={400}
            y={352 + j * 14}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {ln}
          </text>
        ))}
      </Canvas>
      <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
        {stages.map((s, i) => (
          <Toggle key={i} on={stage === i} onChange={() => setStage(i)} label={s.title} />
        ))}
      </div>
    </div>
  )
}

// Migrated legacy viz (raw-SVG style, theme-token colors)

export function PowerStructureDiagram() {
  return (
    <figure className="lrn-figure">
      <svg viewBox="0 0 640 280" style={svgStyle} role="img" aria-labelledby="apa-power-title">
        <title id="apa-power-title">
          Modern split powers versus Commonwealth unified authority
        </title>
        <defs>
          <pattern id="apa-grid-power" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={gridLine} strokeWidth={STROKE_HAIR} />
          </pattern>
        </defs>
        <rect width="640" height="280" fill="url(#apa-grid-power)" />

        <text
          x="160"
          y="30"
          fill={textFaint}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_CONTROL}
        >
          MODERN (TRIPARTITE)
        </text>
        <text
          x="480"
          y="30"
          fill={textFaint}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_CONTROL}
        >
          COMMONWEALTH (UNIFIED)
        </text>

        <line
          x1="320"
          y1="44"
          x2="320"
          y2="256"
          stroke={strokeHair}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
        />

        <rect
          x="64"
          y="54"
          width="192"
          height="44"
          fill={fillSoft}
          stroke={strokeFaint}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x="160"
          y="80"
          fill={text}
          fontSize={FONT_TEX}
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing={LS_OPEN}
        >
          LEGISLATIVE
        </text>

        <rect
          x="64"
          y="114"
          width="192"
          height="44"
          fill={fillSoft}
          stroke={strokeFaint}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x="160"
          y="140"
          fill={text}
          fontSize={FONT_TEX}
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing={LS_OPEN}
        >
          EXECUTIVE
        </text>

        <rect
          x="64"
          y="174"
          width="192"
          height="44"
          fill={fillSoft}
          stroke={strokeFaint}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x="160"
          y="200"
          fill={text}
          fontSize={FONT_TEX}
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing={LS_OPEN}
        >
          JUDICIAL
        </text>

        <text x="160" y="240" fill={textGhost} fontSize={FONT_TEX} textAnchor="middle">
          three separate bodies
        </text>

        <rect
          x="384"
          y="54"
          width="192"
          height="164"
          fill={fill}
          stroke={strokeSoft}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x="480"
          y="88"
          fill={text}
          fontSize={FONT_TITLE}
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing={LS_TITLE}
        >
          ARCHON / TETRARCH
        </text>
        <line
          x1="404"
          y1="104"
          x2="556"
          y2="104"
          stroke={strokeHair}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x="480"
          y="126"
          fill={textSoft}
          fontSize={FONT_TITLE}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          makes laws
        </text>
        <line
          x1="404"
          y1="144"
          x2="556"
          y2="144"
          stroke={strokeHair}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x="480"
          y="166"
          fill={textSoft}
          fontSize={FONT_TITLE}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          enforces laws
        </text>
        <line
          x1="404"
          y1="184"
          x2="556"
          y2="184"
          stroke={strokeHair}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x="480"
          y="206"
          fill={textSoft}
          fontSize={FONT_TITLE}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          judges laws
        </text>

        <text x="480" y="240" fill={textGhost} fontSize={FONT_TEX} textAnchor="middle">
          one person, all three functions
        </text>
      </svg>
      <figcaption>
        Modern split powers (left) vs Commonwealth unified authority (right). Each provincial archon
        makes laws, enforces them, and judges them.
      </figcaption>
    </figure>
  )
}
